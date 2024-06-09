import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ContactUs from "../Header/ContactUs";
const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const images = [
    "https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/3636/3-SS114845.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/2621/20-SM100010.jpg",
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  // const handleBooking = () => {
  //   // Navigate to the booking page when the button is clicked
  //   navigate("/booking");
  // };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="slider-container">
      <div className="image-slider">
        <img
          className="img11"
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
        {/*<button onClick={handleBooking} className="explore-btn">
         Book Now
  </button>*/}
        <button onClick={handleShowModal} className="explore-btn">
          Book Now
        </button>
        <p className="description">
          Embark on an unforgettable journey with us - book your adventure
          today!
        </p>
      </div>
      {showModal && (
        <div className="phone_call">
          <div style={{ marginRight: "12px" }}>
            <button
              className="float-right btn btn-danger "
              onClick={handleCloseModal}
            >
              &times; Cancel
            </button>{" "}
          </div>
          <div>
            <ContactUs />
          </div>
        </div>
      )}
      <div className="navigation-buttons">
        <div>
          <button onClick={prevSlide} className="prev-btn">
            &lt;
          </button>
        </div>
        <div>
          <button onClick={nextSlide} className="next-btn">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Slider = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const navigate = useNavigate();
//   const images = [
//     "https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg",
//     "https://d3nn873nee648n.cloudfront.net/900x600/3636/3-SS114845.jpg",
//     "https://d3nn873nee648n.cloudfront.net/900x600/2621/20-SM100010.jpg",
//   ];

//   const nextSlide = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

// const handleCloseModal = () => {
//   setShowModal(false);
// };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here, e.g., sending data to a server
//     console.log(formData);
//     // Close the modal after form submission
//     setShowModal(false);
//   };

//   return (
//     <>
//       <div className="slider-container">
//         <div className="image-slider">
//           <img
//             className="img11"
//             src={images[currentImageIndex]}
//             alt={`Slide ${currentImageIndex}`}
//           />
//           <button onClick={handleShowModal} className="explore-btn">
//             Enquire call now
//           </button>
//           <p className="description">
//             Embark on an unforgettable journey with us - book your adventure
//             today!
//           </p>
//         </div>
//         <div className="navigation-buttons">
//           <div>
//             <button onClick={prevSlide} className="prev-btn">
//               &lt;
//             </button>
//           </div>
//           <div>
//             <button onClick={nextSlide} className="next-btn">
//               &gt;
//             </button>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal-wrapper">
//           <div className="modal-overlay" onClick={handleCloseModal}></div>
//           <div className="modal">
//             <div className="modal-header">
//               <h3>Enquire Now</h3>
//               <button className="close-btn" onClick={handleCloseModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleFormSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleFormChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleFormChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="phoneNumber">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleFormChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleFormChange}
//                   ></textarea>
//                 </div>
//                 <div className="form-group">
//                   <button type="submit">Submit</button>
//                   <button type="button" onClick={handleCloseModal}>
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Slider;
