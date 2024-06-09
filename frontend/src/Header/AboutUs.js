// import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.section`
//   .about-us-container {
//     padding: 50px;
//   }

//   .about-us-content {
//     max-width: 800px;
//     margin: 0 auto;
//     text-align: center;
//   }

//   .about-us-content h1 {
//     font-size: 36px;
//     font-weight: bold;
//     color: #333;
//     margin-bottom: 20px;
//   }

//   .about-us-content p {
//     font-size: 18px;
//     color: #555;
//     line-height: 1.6;
//     margin-bottom: 15px;
//   }

//   .about-us-content ul {
//     list-style-type: none;
//     padding-left: 0;
//   }

//   .about-us-content ul li {
//     margin-bottom: 10px;
//   }

//   .about-us-content p:last-child {
//     margin-top: 30px;
//   }
// `;
// const AboutUs = () => {
//   return (
//     <Wrapper>
//       <div className="about-us-container">
//         <div className="about-us-content">
//           <h1>Welcome to JK RR TOUR!</h1>
//           <p>
//             Your Gateway to the Paradise on Earth - Jammu, Kashmir, and Ladakh
//           </p>
//           <p>Approved by the Jammu and Kashmir Government</p>
//           <p>
//             At JK RR TOUR, we are dedicated to providing you with the ultimate
//             travel experience to the breathtakingly beautiful regions of Jammu,
//             Kashmir, and Ladakh.
//           </p>
//           <p>
//             Our services include:
//             <ul>
//               <li>Accommodation in luxurious hotels, houseboats, and camps</li>
//               <li>Well-maintained vehicles for comfortable transportation</li>
//               <li>Experienced and knowledgeable local guides</li>
//               <li>Customized tour packages tailored to your preferences</li>
//               <li>24/7 customer support to ensure a hassle-free journey</li>
//             </ul>
//           </p>
//           <p>
//             Whether you are a solo traveler, a family, or a group of friends, we
//             have the perfect itinerary for you to explore the mesmerizing
//             landscapes, rich culture, and warm hospitality of Jammu, Kashmir,
//             and Ladakh.
//           </p>
//           <p>Get ready for an unforgettable adventure with JK RR TOUR!</p>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default AboutUs;
import React from "react";
import Count from "../components/Count";
import SearchAera from "../components/SearchAera";

import SecondlastF from "../components/SecondlastF";
import FAQs from "../components/FAQs";
import Testmonial from "../components/Testmoles";
const AboutUs = () => {
  return (
    <>
      <div className="py-5 " style={{ backgroundColor: "whitesmoke" }}>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center mb-4">Welcome to JK RR TOUR!</h1>
            <p
              style={{ fontWeight: "bold", fontFamily: "cursive" }}
              className="lead text-center"
            >
              Your Gateway to the Paradise on Earth - Jammu, Kashmir, and Ladakh
            </p>
            <hr className="my-4" />
            <div>
              <h2>Our Mission</h2>
              <p>
                At JK RR TOUR, our mission is to provide exceptional travel
                experiences that showcase the beauty, culture, and hospitality
                of Jammu, Kashmir, and Ladakh while promoting sustainable
                tourism practices.
              </p>
            </div>
            <hr className="my-4" />
            <div>
              <h2>Our Vision</h2>
              <p>
                Our vision is to become the leading tour and travel company in
                the Jammu and Kashmir region, recognized for our commitment to
                quality, innovation, and customer satisfaction.
              </p>
            </div>
            <hr className="my-4" />
            <div>
              <h2>Our Values</h2>
              <ul>
                <li>
                  Excellence: We strive for excellence in everything we do.
                </li>
                <li>
                  Integrity: We conduct business with honesty, transparency, and
                  integrity.
                </li>
                <li>
                  Customer Satisfaction: We prioritize customer satisfaction
                  above all else.
                </li>
                <li>
                  Sustainability: We are committed to promoting sustainable
                  tourism practices.
                </li>
              </ul>
            </div>
            <hr className="my-4" />
            <div>
              <h2>Our Services</h2>
              <ul>
                <li>Accommodation: Luxurious hotels, houseboats, and camps</li>
                <li>
                  Transportation: Well-maintained vehicles for comfortable
                  travel
                </li>
                <li>Guidance: Experienced and knowledgeable local guides</li>
                <li>
                  Tour Packages: Customized packages tailored to your
                  preferences
                </li>
                <li>
                  Customer Support: 24/7 assistance for a hassle-free journey
                </li>
              </ul>
            </div>
            <hr className="my-4" />
            <div>
              <h2>Meet Our Team</h2>
              <p>
                Our team consists of passionate individuals who are dedicated to
                ensuring that your trip to Jammu, Kashmir, and Ladakh is
                memorable and enjoyable.
              </p>
              {/* Add team members here */}
            </div>
            <hr className="my-4" />
            <div>
              <h2>Contact Us</h2>
              <p>
                We are here to assist you with any inquiries or bookings. Feel
                free to contact us via phone, email, or visit our office.
              </p>
              <p>Phone: +91 XXXXXXXXXX</p>
              <p>Email: info@jkrrtour.com</p>
              <p>Address: [Your Address], Jammu and Kashmir</p>
            </div>
          </div>
        </div>
      </div>
      <SecondlastF />
      <Testmonial />
      <Count />
      <FAQs />
    </>
  );
};

export default AboutUs;
