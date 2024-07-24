// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import styled from "styled-components";
// // import {
// //   FaStar,
// //   FaDollarSign,
// //   FaClock,
// //   FaBed,
// //   FaCar,
// //   FaUtensils,
// //   FaUser,
// //   FaQuoteLeft,
// //   FaQuoteRight,
// //   FaArrowLeft,
// //   FaArrowRight,
// //   FaPhone,
// //   FaEnvelope,
// //   FaMapMarkerAlt,
// // } from "react-icons/fa";
// // import { useUser } from "../context/UserContext";

// // const Container = styled.div`
// //   padding: 2rem;
// //   background: #f8f9fa;
// // `;

// // const MainContent = styled.div`
// //   background: #ffffff;
// //   padding: 2rem;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   margin-bottom: 2rem;
// // `;

// // const Sidebar = styled.div`
// //   background: #343a40;
// //   color: #fff;
// //   padding: 2rem;
// //   border-radius: 10px;
// //   position: sticky;
// //   top: 100px;
// // `;

// // const SidebarItem = styled.p`
// //   display: flex;
// //   align-items: center;
// //   margin-bottom: 1rem;

// //   svg {
// //     margin-right: 0.5rem;
// //   }
// // `;

// // const MainImageContainer = styled.div`
// //   border: 5px solid #333;
// //   border-radius: 10px;
// //   overflow: hidden;
// //   cursor: pointer;
// //   margin-bottom: 2rem;
// // `;

// // const Thumbnail = styled.img`
// //   margin: 0.5rem;
// //   border: 2px solid #ddd;
// //   border-radius: 10px;
// //   cursor: pointer;
// //   &:hover {
// //     border-color: #333;
// //   }
// // `;

// // const DetailsSection = styled.div`
// //   margin-bottom: 2rem;

// //   h2 {
// //     color: #333;
// //     font-weight: 700;
// //     margin-bottom: 1rem;
// //   }

// //   ul {
// //     padding-left: 1.5rem;
// //     list-style-type: none;
// //   }

// //   li {
// //     margin-bottom: 0.5rem;
// //   }
// // `;

// // const BookButton = styled.button`
// //   background: #28a745;
// //   color: #fff;
// //   border: none;
// //   padding: 1rem 2rem;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   font-size: 1.2rem;
// //   transition: background 0.3s;
// //   &:hover {
// //     background: #218838;
// //   }
// // `;

// // const TestimonialBlock = styled.div`
// //   background: #f9f9f9;
// //   padding: 1.5rem;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   margin-bottom: 1rem;
// //   text-align: center;
// //   position: relative;
// // `;

// // const TestimonialContent = styled.p`
// //   margin-bottom: 1rem;
// //   font-style: italic;
// //   color: #555;
// // `;

// // const TestimonialAuthor = styled.footer`
// //   font-size: 0.9rem;
// //   color: #777;
// // `;

// // const ArrowButton = styled.button`
// //   position: absolute;
// //   top: 50%;
// //   transform: translateY(-50%);
// //   background: rgba(0, 0, 0, 0.5);
// //   border: none;
// //   color: #fff;
// //   padding: 0.5rem;
// //   cursor: pointer;
// //   z-index: 1;

// //   &:hover {
// //     background: rgba(0, 0, 0, 0.7);
// //   }

// //   &:first-of-type {
// //     left: 0;
// //   }

// //   &:last-of-type {
// //     right: 0;
// //   }
// // `;

// // const SpinnerContainer = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100vh;
// // `;

// // const SingleTrip = () => {
// //   const { id } = useParams();
// //   const { state } = useUser();
// //   const navigate = useNavigate();
// //   const [trip, setTrip] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [currentTestimonial, setCurrentTestimonial] = useState(0);

// //   useEffect(() => {
// //     const fetchTrip = async () => {
// //       try {
// //         const response = await axios.get(`/api/trips/${id}`);
// //         setTrip(response.data);
// //         setSelectedImage(response.data.images[0]);
// //       } catch (error) {
// //         console.error("Error fetching trip:", error);
// //       }
// //     };

// //     fetchTrip();
// //   }, [id]);

// //   if (!trip) {
// //     return (
// //       <SpinnerContainer>
// //         <div className="spinner-border text-primary" role="status">
// //           <span className="visually-hidden">Loading...</span>
// //         </div>
// //       </SpinnerContainer>
// //     );
// //   }

// //   const handleImageClick = (image) => {
// //     setSelectedImage(image);
// //   };

// //   const handleLargeImageClick = () => {
// //     alert(selectedImage);
// //   };

// //   const handlePrevTestimonial = () => {
// //     setCurrentTestimonial((prev) =>
// //       prev === 0 ? trip.testimonials.length - 1 : prev - 1
// //     );
// //   };

// //   const handleNextTestimonial = () => {
// //     setCurrentTestimonial((prev) =>
// //       prev === trip.testimonials.length - 1 ? 0 : prev + 1
// //     );
// //   };

// //   const handleBookNowClick = () => {
// //     if (!state.loggedIn) {
// //       navigate("/login");
// //     } else {
// //       navigate("/bookingform", {
// //         state: { price: trip.price, name: trip.name, id: trip.id },
// //       });
// //     }
// //   };

// //   return (
// //     <Container className="container">
// //       <div className="row">
// //         <div className="col-md-8">
// //           <MainContent>
// //             <MainImageContainer onClick={handleLargeImageClick}>
// //               <img
// //                 src={selectedImage || trip.images[0]}
// //                 alt="Trip"
// //                 className="img-fluid"
// //               />
// //             </MainImageContainer>
// //             <div className="row mt-3">
// //               {trip.images.map((image, index) => (
// //                 <div key={index} className="col-2">
// //                   <Thumbnail
// //                     src={image}
// //                     alt="Thumbnail"
// //                     className="img-fluid"
// //                     onClick={() => handleImageClick(image)}
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //             <DetailsSection>
// //               <h2>
// //                 <FaStar /> Highlights
// //               </h2>
// //               <ul>
// //                 {trip.highlights.map((highlight, index) => (
// //                   <li key={index}>
// //                     <FaArrowRight /> {highlight}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </DetailsSection>
// //             <DetailsSection>
// //               <h2>
// //                 <FaBed /> Accommodation
// //               </h2>
// //               <ul>
// //                 {trip.accommodation.map((item, index) => (
// //                   <li key={index}>
// //                     <FaArrowRight /> {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </DetailsSection>
// //             <DetailsSection>
// //               <h2>
// //                 <FaCar /> Transportation
// //               </h2>
// //               <ul>
// //                 {trip.transportation.map((item, index) => (
// //                   <li key={index}>
// //                     <FaArrowRight /> {item.type} - {item.details}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </DetailsSection>
// //             <DetailsSection>
// //               <h2>
// //                 <FaUtensils /> Meals
// //               </h2>
// //               <p>{trip.meals}</p>
// //             </DetailsSection>
// //             <DetailsSection>
// //               <h2>
// //                 <FaUser /> Guides
// //               </h2>
// //               {trip.guides.map((guide, index) => (
// //                 <div key={index}>
// //                   <p><FaUser /> {guide.name}</p>
// //                   <p><FaPhone /> {guide.phone}</p>
// //                   <p><FaEnvelope /> {guide.email}</p>
// //                   <img src={guide.image} alt={guide.name} className="img-fluid" />
// //                 </div>
// //               ))}
// //             </DetailsSection>
// //             <DetailsSection>
// //               <h2>
// //                 <FaQuoteLeft /> Testimonials <FaQuoteRight />
// //               </h2>
// //               <div className="position-relative">
// //                 {trip.testimonials.map((testimonial, index) => (
// //                   <TestimonialBlock
// //                     key={index}
// //                     style={{
// //                       display: index === currentTestimonial ? "block" : "none",
// //                     }}
// //                   >
// //                     <TestimonialContent>
// //                       <FaQuoteLeft className="me-2" />
// //                       {testimonial.content}
// //                       <FaQuoteRight className="ms-2" />
// //                     </TestimonialContent>
// //                     <TestimonialAuthor>
// //                       <FaUser className="me-2" />
// //                       {testimonial.username}
// //                     </TestimonialAuthor>
// //                   </TestimonialBlock>
// //                 ))}
// //                 <ArrowButton onClick={handlePrevTestimonial}>
// //                   <FaArrowLeft />
// //                 </ArrowButton>
// //                 <ArrowButton onClick={handleNextTestimonial}>
// //                   <FaArrowRight />
// //                 </ArrowButton>
// //               </div>
// //             </DetailsSection>
// //           </MainContent>
// //         </div>
// //         <div className="col-md-4">
// //           <Sidebar>
// //             <h1>{trip.name}</h1>
// //             <SidebarItem>
// //               <FaDollarSign /> <strong>Price:</strong> ${trip.price}
// //             </SidebarItem>
// //             <SidebarItem>
// //               <FaClock /> <strong>Duration:</strong> {trip.duration} days
// //             </SidebarItem>
// //             <SidebarItem>
// //               <FaStar /> <strong>Rating:</strong> {trip.rating}/5
// //             </SidebarItem>
// //             <BookButton onClick={handleBookNowClick}>Book Now</BookButton>
// //           </Sidebar>
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default SingleTrip;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import axios from "axios";
// import styled from "styled-components";
// import { useUser } from "../context/UserContext";
// import starIcon from "../assets/svg/star.svg";
// import dollarIcon from "../assets/svg/rupee.svg";
// import clockIcon from "../assets/svg/clock.svg";
// import bedIcon from "../assets/svg/bed.svg";
// import carIcon from "../assets/svg/car.svg";
// import utensilsIcon from "../assets/svg/utensils.svg";
// import userIcon from "../assets/svg/r2.svg";
// // import quoteLeftIcon from '../assets/svg/quote-left.svg';
// // import quoteRightIcon from '../assets/svg/quote-right.svg';
// import phoneIcon from "../assets/svg/phone.svg";
// import emailIcon from "../assets/svg/email.svg";

// const Container = styled.div`
//   padding: 2rem;
//   background: #f8f9fa;
// `;

// const MainContent = styled.div`
//   background: #ffffff;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2rem;
// `;

// const Sidebar = styled.div`
//   background: #343a40;
//   color: #fff;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   position: sticky;
//   top: 100px;
// `;

// const SidebarItem = styled.p`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;

//   img {
//     margin-right: 0.5rem;
//     width: 20px;
//   }
// `;

// const MainImageContainer = styled.div`
//   border: 5px solid #333;
//   border-radius: 10px;
//   overflow: hidden;
//   cursor: pointer;
//   margin-bottom: 2rem;
// `;

// const Thumbnail = styled.img`
//   margin: 0.5rem;
//   border: 2px solid #ddd;
//   border-radius: 10px;
//   cursor: pointer;
//   &:hover {
//     border-color: #333;
//   }
// `;

// const DetailsSection = styled.div`
//   margin-bottom: 2rem;

//   h2 {
//     color: #333;
//     font-family: "Arial", sans-serif;
//     font-weight: 700;
//     margin-bottom: 1rem;
//   }

//   ul {
//     padding-left: 1.5rem;
//     list-style-type: none;
//   }

//   li {
//     margin-bottom: 0.5rem;
//     font-family: "Arial", sans-serif;
//     color: #555;
//   }
// `;

// const BookButton = styled.button`
//   background: #28a745;
//   color: #fff;
//   border: none;
//   padding: 1rem 2rem;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1.2rem;
//   transition: background 0.3s;
//   &:hover {
//     background: #218838;
//   }
// `;

// const TestimonialBlock = styled.div`
//   background: #f9f9f9;
//   padding: 1.5rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 1rem;
//   text-align: center;
//   position: relative;
// `;

// const TestimonialContent = styled.p`
//   margin-bottom: 1rem;
//   font-style: italic;
//   color: #555;
// `;

// const TestimonialAuthor = styled.footer`
//   font-size: 0.9rem;
//   color: #777;
// `;

// const ArrowButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0, 0, 0, 0.5);
//   border: none;
//   color: #fff;
//   padding: 0.5rem;
//   cursor: pointer;
//   z-index: 1;

//   &:hover {
//     background: rgba(0, 0, 0, 0.7);
//   }

//   &:first-of-type {
//     left: 0;
//   }

//   &:last-of-type {
//     right: 0;
//   }
// `;

// const SpinnerContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const GuideImage = styled.img`
//   border-radius: 50%;
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
// `;

// const SingleTrip = () => {
//   const { id } = useParams();
//   const { state } = useUser();
//   const navigate = useNavigate();
//   const [trip, setTrip] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const fetchTrip = async () => {
//       try {
//         const response = await axios.get(`/api/trips/${id}`);
//         setTrip(response.data);
//         setSelectedImage(response.data.images[0]);
//       } catch (error) {
//         console.error("Error fetching trip:", error);
//       }
//     };

//     fetchTrip();
//   }, [id]);

//   if (!trip) {
//     return (
//       <SpinnerContainer>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </SpinnerContainer>
//     );
//   }

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleLargeImageClick = () => {
//     alert(selectedImage);
//   };

//   const handlePrevTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? trip.testimonials.length - 1 : prev - 1
//     );
//   };

//   const handleNextTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === trip.testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const handleBookNowClick = () => {
//     if (!state.loggedIn) {
//       navigate("/login");
//     } else {
//       navigate("/bookingform", {
//         state: { price: trip.price, name: trip.name, id: trip.id },
//       });
//     }
//   };

//   return (
//     <Container className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <MainContent>
//             <MainImageContainer onClick={handleLargeImageClick}>
//               <img
//                 src={selectedImage || trip.images[0]}
//                 alt="Trip"
//                 className="img-fluid"
//               />
//             </MainImageContainer>
//             <div className="row mt-3">
//               {trip.images.map((image, index) => (
//                 <div key={index} className="col-2">
//                   <Thumbnail
//                     src={image}
//                     alt="Thumbnail"
//                     className="img-fluid"
//                     onClick={() => handleImageClick(image)}
//                   />
//                 </div>
//               ))}
//             </div>
//             <DetailsSection>
//               <h2>
//                 <img src={starIcon} alt="Star" /> Highlights
//               </h2>
//               <ul>
//                 {trip.highlights.map((highlight, index) => (
//                   <li key={index}>{highlight}</li>
//                 ))}
//               </ul>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <img src={bedIcon} alt="Bed" /> Accommodation
//               </h2>
//               <ul>
//                 {trip.accommodation.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <img src={carIcon} alt="Car" /> Transportation
//               </h2>
//               <ul>
//                 {trip.transportation.map((item, index) => (
//                   <li key={index}>
//                     {item.type} - {item.details}
//                   </li>
//                 ))}
//               </ul>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <img src={utensilsIcon} alt="Utensils" /> Meals
//               </h2>
//               <p>{trip.meals}</p>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <img src={userIcon} alt="User" /> Guides
//               </h2>
//               {trip.guides.map((guide, index) => (
//                 <div key={index} className="d-flex align-items-center mb-3">
//                   <GuideImage src={guide.image} alt={guide.name} />
//                   <div className="ms-3">
//                     <p>
//                       <img src={userIcon} alt="User" /> {guide.name}
//                     </p>
//                     <p>
//                       <img src={phoneIcon} alt="Phone" /> {guide.phone}
//                     </p>
//                     <p>
//                       <img src={emailIcon} alt="Email" /> {guide.email}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </DetailsSection>
//             <DetailsSection>
//               <h2>Testimonials</h2>
//               <div className="position-relative">
//                 {trip.testimonials.map((testimonial, index) => (
//                   <TestimonialBlock
//                     key={index}
//                     style={{
//                       display: index === currentTestimonial ? "block" : "none",
//                     }}
//                   >
//                     <TestimonialContent>
//                       {testimonial.content}
//                     </TestimonialContent>
//                     <TestimonialAuthor>
//                       <img src={userIcon} className="me-2" alt="User" />
//                       {testimonial.username}
//                     </TestimonialAuthor>
//                   </TestimonialBlock>
//                 ))}
//                 <ArrowButton onClick={handlePrevTestimonial}></ArrowButton>
//                 <ArrowButton onClick={handleNextTestimonial}></ArrowButton>
//               </div>
//             </DetailsSection>
//           </MainContent>
//         </div>
//         <div className="col-md-4">
//           <Sidebar>
//             <h1>{trip.name}</h1>
//             <SidebarItem>
//               <img src={dollarIcon} alt="Dollar" /> <strong>Price:</strong> $
//               {trip.price}
//             </SidebarItem>
//             <SidebarItem>
//               <img src={clockIcon} alt="Clock" /> <strong>Duration:</strong>{" "}
//               {trip.duration} days
//             </SidebarItem>
//             <SidebarItem>
//               <img src={starIcon} alt="Star" /> <strong>Rating:</strong>{" "}
//               {trip.rating}/5
//             </SidebarItem>
//             <BookButton onClick={handleBookNowClick}>Book Now</BookButton>
//           </Sidebar>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SingleTrip;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useUser } from "../context/UserContext";
import starIcon from "../assets/svg/star.svg";
import dollarIcon from "../assets/svg/rupee.svg";
import clockIcon from "../assets/svg/clock.svg";
import bedIcon from "../assets/svg/bed.svg";
import carIcon from "../assets/svg/car.svg";
import utensilsIcon from "../assets/svg/utensils.svg";
import userIcon from "../assets/svg/r2.svg";
import phoneIcon from "../assets/svg/phone.svg";
import emailIcon from "../assets/svg/email.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Container = styled.div`
  padding: 2rem;
  background: #f8f9fa;
`;

const MainContent = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Sidebar = styled.div`
  background: darkslategrey;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 100px;
  animation: fadeIn 3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SidebarItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    margin-right: 0.5rem;
    width: 30px;
    height: 32px;
  }
`;

const MainImageContainer = styled.div`
  border: 5px solid #333;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Thumbnail = styled.img`
  margin: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border-color: #333;
  }
`;

const DetailsSection = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;

  h2 {
    color: #333;
    font-family: "Arial", sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.5rem;
    list-style-type: none;
  }

  li {
    margin-bottom: 0.5rem;
    font-family: "Arial", sans-serif;
    color: #555;
  }
`;

// const BookButton = styled.button`
//   background: #5e5df0;
//   border-radius: 999px;
//   box-shadow: #5e5df0 0 10px 20px -10px;
//   box-sizing: border-box;
//   color: #ffffff;
//   cursor: pointer;
//   font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
//     NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
//     EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
//     "Noto Sans", sans-serif;
//   font-size: 16px;
//   font-weight: 700;
//   line-height: 24px;
//   opacity: 1;
//   outline: 0 solid transparent;
//   padding: 8px 18px;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: fit-content;
//   word-break: break-word;
//   border: 0;
//   &:hover {
//     background: #218838;
//   }
// `;
const BookButton = styled.button`
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  outline: none;
  padding: 12px 24px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  border: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #4b00c1 0%, #0038c1 100%);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    background: linear-gradient(135deg, #4b00c1 0%, #0038c1 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    transform: translate(-50%, -50%) scale(0.1);
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5);
  }
`;

// const TestimonialBlock = styled.div`
//   background: #f9f9f9;
//   padding: 1.5rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 1rem;
//   text-align: center;
//   position: relative;
// `;

// const TestimonialContent = styled.p`
//   margin-bottom: 1rem;
//   font-style: italic;
//   color: #555;
// `;

// const TestimonialAuthor = styled.footer`
//   font-size: 0.9rem;
//   color: #777;
// `;

// const ArrowButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0, 0, 0, 0.5);
//   border: none;
//   color: #fff;
//   padding: 0.5rem;
//   cursor: pointer;
//   z-index: 1;

//   &:hover {
//     background: rgba(0, 0, 0, 0.7);
//   }

//   &:first-of-type {
//     left: 0;
//   }

//   &:last-of-type {
//     right: 0;
//   }
// `;
const Test = styled.section`
  .testimonial-block {
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    text-align: center;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  .testimonial-content {
    margin-bottom: 1rem;
    font-style: italic;
    color: #555;
  }

  .testimonial-author {
    font-size: 0.9rem;
    color: #777;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: #fff;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 1;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease-in-out;
  }

  .arrow-button:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .prev-arrow {
    left: 1rem;
  }

  .next-arrow {
    right: 1rem;
  }

  @media (max-width: 768px) {
    .arrow-button {
      width: 2rem;
      height: 2rem;
    }

    .testimonial-content {
      font-size: 0.9rem;
    }

    .testimonial-author {
      font-size: 0.8rem;
    }
  }
`;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GuideImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const SingleTrip = () => {
  const { id } = useParams();
  const { state } = useUser();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(
          `https://travel-bice-five.vercel.app/api/trips/${id}`
        );
        setTrip(response.data);
        setSelectedImage(response.data.images[0]);
      } catch (error) {
        console.error("Error fetching trip:", error);
      }
    };

    fetchTrip();
  }, [id]);

  if (!trip) {
    return (
      <SpinnerContainer>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </SpinnerContainer>
    );
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleLargeImageClick = () => {
    alert(selectedImage);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? trip.testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === trip.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleBookNowClick = () => {
    if (!state.loggedIn) {
      navigate("/login");
    } else {
      navigate("/bookingform", {
        state: { price: trip.price, name: trip.name, id: trip.id },
      });
    }
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-8">
          <MainContent>
            <MainImageContainer onClick={handleLargeImageClick}>
              <img
                src={selectedImage || trip.images[0]}
                alt="Trip"
                className="img-fluid"
              />
            </MainImageContainer>
            <div className="row mt-3">
              {trip.images.map((image, index) => (
                <div key={index} className="col-2">
                  <Thumbnail
                    src={image}
                    alt="Thumbnail"
                    className="img-fluid"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
            <DetailsSection>
              <h2>
                <img src={starIcon} alt="Star" className="svg1" /> Highlights
              </h2>
              <ul>
                {trip.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <img src={bedIcon} alt="Bed" className="svg1" /> Accommodation
              </h2>
              <ul>
                {trip.accommodation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <img src={carIcon} alt="Car" className="svg1" /> Transportation
              </h2>
              <ul>
                {trip.transportation.map((item, index) => (
                  <li key={index}>
                    {item.type} - {item.details}
                  </li>
                ))}
              </ul>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <img src={utensilsIcon} alt="Utensils" className="svg1" /> Meals
              </h2>
              <p>{trip.meals}</p>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <img src={userIcon} alt="User" className="svg1" /> Guides
              </h2>
              {trip.guides.map((guide, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <GuideImage src={guide.image} alt={guide.name} />
                  <div className="ms-3">
                    <p>
                      <img src={userIcon} alt="User" className="svg1" />{" "}
                      {guide.name}
                    </p>
                    <p>
                      <img src={phoneIcon} alt="Phone" className="svg1" />{" "}
                      {guide.phone}
                    </p>
                    <p>
                      <img src={emailIcon} alt="Email" className="svg1" />{" "}
                      {guide.email}
                    </p>
                  </div>
                </div>
              ))}
            </DetailsSection>
            <DetailsSection>
              {/* <h2>Testimonials</h2>
              <div className="position-relative">
                {trip.testimonials.map((testimonial, index) => (
                  <TestimonialBlock
                    key={index}
                    style={{
                      display: index === currentTestimonial ? "block" : "none",
                    }}
                  >
                    <TestimonialContent>
                      {testimonial.content}
                    </TestimonialContent>
                    <TestimonialAuthor>
                      <img src={userIcon} className="svg1" alt="User" />
                      {testimonial.username}
                    </TestimonialAuthor>
                  </TestimonialBlock>
                ))}
                <ArrowButton onClick={handlePrevTestimonial}>
                  <FaArrowLeft />
                </ArrowButton>
                <ArrowButton onClick={handleNextTestimonial}>
                  <FaArrowRight />
                </ArrowButton>
              </div> */}
              <Test>
                <h2 className="text-center my-4">Testimonials</h2>
                <div className="position-relative">
                  {trip.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`testimonial-block ${
                        index === currentTestimonial ? "d-block" : "d-none"
                      }`}
                    >
                      <div className="testimonial-content">
                        {testimonial.content}
                      </div>
                      <div className="testimonial-author d-flex align-items-center justify-content-center">
                        <img src={userIcon} className="svg1 mr-2" alt="User" />
                        {testimonial.username}
                      </div>
                    </div>
                  ))}
                  <button
                    className="arrow-button prev-arrow"
                    onClick={handlePrevTestimonial}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="arrow-button next-arrow"
                    onClick={handleNextTestimonial}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </Test>
            </DetailsSection>
          </MainContent>
        </div>
        <div className="col-md-4">
          <Sidebar>
            <h1>{trip.name}</h1>
            <SidebarItem>
              <img src={dollarIcon} alt="Dollar" /> <strong>Price:</strong> $
              {trip.price}
            </SidebarItem>
            <SidebarItem>
              <img src={clockIcon} alt="Clock" /> <strong>Duration:</strong>{" "}
              {trip.duration} days
            </SidebarItem>
            <SidebarItem>
              <img src={starIcon} alt="Star" /> <strong>Rating:</strong>{" "}
              {trip.rating}/5
            </SidebarItem>
            <BookButton onClick={handleBookNowClick}>Book Now</BookButton>
            <p class="text-center mt-3 text-white  p-3 rounded shadow-lg">
              Your Gateway to the Paradise on Earth - Jammu, Kashmir, and Ladakh
            </p>
          </Sidebar>
        </div>
      </div>
    </Container>
  );
};

export default SingleTrip;
