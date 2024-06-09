import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
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
  FaDownload,
  FaEye,
} from "react-icons/fa";
import { jsPDF } from "jspdf";

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, totalPrice } = location.state;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.setTextColor("#333");
    doc.text("JK RR TOUR & TRAVELS", 20, 20);
    doc.setFontSize(14);
    doc.setTextColor("#555");
    doc.text("Booking Confirmation", 20, 30);
    doc.setFontSize(12);
    doc.setTextColor("#000");
    doc.text("Booking Details", 20, 40);

    Object.entries(formData).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 20, 50 + index * 10);
    });

    doc.text(
      `Total Price: ₹${totalPrice}`,
      20,
      50 + Object.entries(formData).length * 10
    );
    doc.save("booking-details.pdf");
  };

  return (
    <div className="booking-details-container">
      <div className="booking-details-content">
        <h2 className="text-center">Booking Information</h2>
        <h3 className="text-center">JK RR TOUR & TRAVELS</h3>
        <p className="text-center confirmation-message">
          Your booking is confirmed!
        </p>

        <div className="row mt-4">
          <div className="col-md-6">
            <p>
              <FaUser /> Full Name: {formData.fullname}
            </p>
            <p>
              <FaEnvelope /> Email: {formData.email}
            </p>
            <p>
              <FaPhone /> Mobile Number: {formData.mobile}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <FaMapMarkerAlt /> Destination Name: {formData.name}
            </p>
            <p>
              <FaLocationArrow /> Current Location: {formData.location}
            </p>
            <p>
              <FaUsers /> Number of Members: {formData.members}
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <p>
              <FaCalendarAlt /> Check-in Date: {formData.checkinDate}
            </p>
            <p>
              <FaCalendarAlt /> Check-out Date: {formData.checkoutDate}
            </p>
            <p>
              <FaMapMarkerAlt /> Pick-up Destination:{" "}
              {formData.pickupDestination}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <FaTransgender /> Gender: {formData.gender}
            </p>
            <p>
              <FaBirthdayCake /> Age: {formData.age}
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <h3>Total Price: ₹{totalPrice}</h3>
        </div>

        <div className="text-center mt-4">
          <button className="primary-btn" onClick={handleDownloadPDF}>
            <FaDownload className="me-2" /> Download PDF
          </button>
          <button
            className="secondary-btn"
            onClick={() => navigate("/bookingstatus")}
          >
            <FaEye className="me-2" /> View Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
