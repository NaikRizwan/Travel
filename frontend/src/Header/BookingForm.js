import React, { useState } from "react";
import styled from "styled-components";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaTransgender,
  FaBirthdayCake,
  FaRupeeSign,
  FaCreditCard,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FormContainer = styled.div`
  background: #fff;
  padding: 2.5rem;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #999;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  background: #fff;

  &:focus {
    border-color: #28a745;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  background: #fff;

  &:focus {
    border-color: #28a745;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    90deg,
    rgba(33, 147, 176, 1) 0%,
    rgba(109, 213, 250, 1) 100%
  );
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(33, 147, 176, 1) 0%,
      rgba(109, 213, 250, 1) 70%
    );
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: rgba(0, 0, 0, 0.7);
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 10px;
`;

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { price, name, id } = location.state;
  const { state } = useUser();
  const [formData, setFormData] = useState({
    fullname: state.name || "",
    email: state.email || "",
    mobile: "",
    location: "",
    members: 1,
    name: name,
    checkinDate: "",
    checkoutDate: "",
    pickupDestination: "",
    gender: "",
    age: "",
    paymentOption: "later",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(price);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "members") {
      const members = parseInt(value, 10);
      setTotalPrice(price * (isNaN(members) ? 1 : members));
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullname) formErrors.fullname = "Full name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.mobile) formErrors.mobile = "Mobile number is required";
    if (!formData.location)
      formErrors.location = "Current location is required";
    if (!formData.members) formErrors.members = "Number of members is required";
    if (!formData.checkinDate)
      formErrors.checkinDate = "Check-in date is required";
    if (!formData.checkoutDate)
      formErrors.checkoutDate = "Check-out date is required";
    if (!formData.pickupDestination)
      formErrors.pickupDestination = "Pick-up destination is required";
    if (!formData.gender) formErrors.gender = "Gender is required";
    if (!formData.age) formErrors.age = "Age is required";

    return formErrors;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccessMessage("");
      return;
    }
    setIsSubmitting(true); // Step 3
    if (formData.paymentOption === "now") {
      await displayRazorpay(totalPrice);
    } else {
      await saveBookingDetails();
    }
    setIsSubmitting(false); // Step 4
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_jmQRgJ3SRB8x80",
      currency: "INR",
      amount: amount * 100,
      name: "Travel Agency",
      description: "Thanks for booking",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",
      handler: async (response) => {
        formData.paymentId = response.razorpay_payment_id; // Add payment ID to formData
        await saveBookingDetails();
      },
      prefill: {
        name: formData.fullname,
        email: formData.email,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // const saveBookingDetails = async () => {
  //   try {
  //     const response = await axios.post("/bookingform1", {
  //       ...formData,
  //       totalPrice,
  //       id,
  //     });
  //     setSuccessMessage("Form successfully submitted");
  //     setErrors({});
  //     setFormData({
  //       fullname: state.name || "",
  //       email: state.email || "",
  //       mobile: "",
  //       location: "",
  //       members: 1,
  //       checkinDate: "",
  //       checkoutDate: "",
  //       pickupDestination: "",
  //       gender: "",
  //       age: "",
  //       paymentOption: "later",
  //     });
  //   } catch (error) {
  //     setSuccessMessage("");
  //     setErrors({ apiError: "Failed to save booking" });
  //   }
  // };
  const saveBookingDetails = async () => {
    try {
      const response = await axios.post("/bookingform1", {
        ...formData,
        totalPrice,
        id,
      });
      setSuccessMessage("Form successfully submitted");

      if (response.status === 200) {
        navigate("/booking-details", { state: { formData, totalPrice } });
      }

      setErrors({});
      setFormData({
        fullname: state.name || "",
        email: state.email || "",
        mobile: "",
        location: "",
        members: 1,
        name: name,
        checkinDate: "",
        checkoutDate: "",
        pickupDestination: "",
        gender: "",
        age: "",
        paymentOption: "later",
      });
    } catch (error) {
      setSuccessMessage("");
      setErrors({ apiError: "Failed to save booking" });
    }
  };
  return (
    <Overlay>
      <FormContainer>
        <Title>Book Trip</Title>
        <form onSubmit={handlePayment}>
          <div className="row">
            <div className="col-md-6">
              <Label>
                <FaUser className="me-2" /> Full Name
              </Label>
              <Input
                type="text"
                name="fullname"
                value={formData.fullname}
                placeholder="Full Name"
                onChange={handleChange}
              />
              {errors.fullname && (
                <ErrorMessage>{errors.fullname}</ErrorMessage>
              )}
            </div>
            <div className="col-md-6">
              <Label>
                <FaEnvelope className="me-2" /> Email
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                readOnly
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Label>
                <FaPhone className="me-2" /> Mobile Number
              </Label>
              <Input
                type="text"
                name="mobile"
                value={formData.mobile}
                placeholder="Mobile Number"
                onChange={handleChange}
              />
              {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}
            </div>
            <div className="col-md-6">
              <Label>
                <FaMapMarkerAlt className="me-2" /> Destination Name
              </Label>
              <Input type="text" name="name" value={name} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Label>
                <FaLocationArrow className="me-2" /> Current Location
              </Label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                placeholder="Current Location"
                onChange={handleChange}
              />
              {errors.location && (
                <ErrorMessage>{errors.location}</ErrorMessage>
              )}
            </div>
            <div className="col-md-6">
              <Label>
                <FaUsers className="me-2" /> Number of Members
              </Label>
              <Input
                type="number"
                name="members"
                value={formData.members}
                placeholder="Number of Members"
                onChange={handleChange}
              />
              {errors.members && <ErrorMessage>{errors.members}</ErrorMessage>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Label>
                <FaCalendarAlt className="me-2" /> Check-in Date
              </Label>
              <Input
                type="date"
                name="checkinDate"
                value={formData.checkinDate}
                onChange={handleChange}
              />
              {errors.checkinDate && (
                <ErrorMessage>{errors.checkinDate}</ErrorMessage>
              )}
            </div>
            <div className="col-md-6">
              <Label>
                <FaCalendarAlt className="me-2" /> Check-out Date
              </Label>
              <Input
                type="date"
                name="checkoutDate"
                value={formData.checkoutDate}
                onChange={handleChange}
              />
              {errors.checkoutDate && (
                <ErrorMessage>{errors.checkoutDate}</ErrorMessage>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Label>
                <FaMapMarkerAlt className="me-2" /> Pick-up Destination
              </Label>
              <Input
                type="text"
                name="pickupDestination"
                value={formData.pickupDestination}
                placeholder="Pick-up Destination"
                onChange={handleChange}
              />
              {errors.pickupDestination && (
                <ErrorMessage>{errors.pickupDestination}</ErrorMessage>
              )}
            </div>
            <div className="col-md-6">
              <Label>
                <FaTransgender className="me-2" /> Gender
              </Label>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
              {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Label>
                <FaBirthdayCake className="me-2" /> Age
              </Label>
              <Input
                type="number"
                name="age"
                value={formData.age}
                placeholder="Age"
                onChange={handleChange}
              />
              {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
            </div>
          </div>
          <Price>
            Total Price: <FaRupeeSign className="me-1" />
            {totalPrice}
          </Price>
          <Label>
            <FaMoneyCheckAlt className="me-2" /> Payment Option
          </Label>
          <Select
            name="paymentOption"
            value={formData.paymentOption}
            onChange={handleChange}
          >
            <option value="later">Pay Later</option>
            <option value="now">Pay Now</option>
          </Select>
          {/* <Button type="submit">
            <FaCreditCard className="me-2" /> Submit
          </Button> */}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Submit
          </Button>
          {errors.apiError && <ErrorMessage>{errors.apiError}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </form>
      </FormContainer>
    </Overlay>
  );
};

export default BookingForm;
