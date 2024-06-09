// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="container py-5 gradient-custom">
//       <div className="row">
//         <div className="col-md-6">
//           <h2>Contact Us</h2>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input type="text" className="form-control" id="name" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input type="email" className="form-control" id="email" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="phone" className="form-label">
//                 Phone Number
//               </label>
//               <input type="tel" className="form-control" id="phone" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">
//                 Message
//               </label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 rows="5"
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="col-md-6">
//           <h2>Our Location</h2>
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.775884140236!2d-74.00594168458935!3d40.71277607922156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a4f9e3f739%3A0x447282c30f5a3c5b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1629975509398!5m2!1sen!2sin"
//             width="100%"
//             height="300"
//             style={{ border: "0" }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React from "react";

//   .contact-form-container {
//     padding: 30px;
//     background-color: #f8f9fa;
//     border-radius: 10px;
//   }

//   .map-container {
//     padding: 30px;
//     background-color: #f8f9fa;
//     border-radius: 10px;
//   }

//   .google-map {
//     border-radius: 10px;
//     overflow: hidden;
//   }

//   .contact-form-container h2,
//   .map-container h2 {
//     color: #333;
//   }

//   .contact-form-container label,
//   .map-container label {
//     font-weight: bold;
//   }

//   .contact-form-container .form-control {
//     border-radius: 20px;
//   }

//   .contact-form-container textarea.form-control {
//     resize: none;
//   }

//   .btn-primary {
//     border-radius: 20px;
//   }

//   @media (max-width: 768px) {
//     .contact-form-container,
//     .map-container {
//       margin-bottom: 30px;
//     }
//   }
// `;
const ContactUs = () => {
  return (
    <div className=" container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="contact-form-container">
            <h2 className="mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input type="tel" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map-container">
            <h2 className="mb-4">Our Location</h2>
            <div className="google-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.775884140236!2d-74.00594168458935!3d40.71277607922156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a4f9e3f739%3A0x447282c30f5a3c5b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1629975509398!5m2!1sen!2sin"
                width="100%"
                height="470"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
