import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    destination: "",
    departureDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the formData to your backend
    console.log(formData);
    // Reset the form after submission if needed
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      destination: "",
      departureDate: "",
      returnDate: "",
    });
  };

  return (
    <div className="container">
      <h2>Book Your Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">
            Destination
          </label>
          <input
            type="text"
            className="form-control"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departureDate" className="form-label">
            Departure Date
          </label>
          <input
            type="date"
            className="form-control"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">
            Return Date
          </label>
          <input
            type="date"
            className="form-control"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
