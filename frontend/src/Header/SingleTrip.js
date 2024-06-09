// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import {
//   FaStar,
//   FaDollarSign,
//   FaClock,
//   FaBed,
//   FaCar,
//   FaUtensils,
//   FaUser,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";
// import { useUser } from "../context/UserContext";

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
//   position: sticky;
//   top: 100px;
// `;

// const SidebarItem = styled.p`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;

//   svg {
//     margin-right: 0.5rem;
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
//     font-weight: 700;
//     margin-bottom: 1rem;
//   }

//   ul {
//     padding-left: 1.5rem;
//     list-style-type: none;
//   }

//   li {
//     margin-bottom: 0.5rem;
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
//                 <FaStar /> Highlights
//               </h2>
//               <ul>
//                 {trip.highlights.map((highlight, index) => (
//                   <li key={index}>
//                     <FaArrowRight /> {highlight}
//                   </li>
//                 ))}
//               </ul>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <FaBed /> Accommodation
//               </h2>
//               <ul>
//                 {trip.accommodation.map((item, index) => (
//                   <li key={index}>
//                     <FaArrowRight /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <FaCar /> Transportation
//               </h2>
//               <ul>
//                 {trip.transportation.map((item, index) => (
//                   <li key={index}>
//                     <FaArrowRight /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <FaUtensils /> Meals
//               </h2>
//               <p>{trip.meals}</p>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <FaUser /> Guides
//               </h2>
//               <p>{trip.guides}</p>
//             </DetailsSection>
//             <DetailsSection>
//               <h2>
//                 <FaQuoteLeft /> Testimonials <FaQuoteRight />
//               </h2>
//               <div className="position-relative">
//                 {trip.testimonials.map((testimonial, index) => (
//                   <TestimonialBlock
//                     key={index}
//                     style={{
//                       display: index === currentTestimonial ? "block" : "none",
//                     }}
//                   >
//                     <TestimonialContent>
//                       <FaQuoteLeft className="me-2" />
//                       {testimonial.content}
//                       <FaQuoteRight className="ms-2" />
//                     </TestimonialContent>
//                     <TestimonialAuthor>
//                       <FaUser className="me-2" />
//                       {testimonial.username}
//                     </TestimonialAuthor>
//                   </TestimonialBlock>
//                 ))}
//                 <ArrowButton onClick={handlePrevTestimonial}>
//                   <FaArrowLeft />
//                 </ArrowButton>
//                 <ArrowButton onClick={handleNextTestimonial}>
//                   <FaArrowRight />
//                 </ArrowButton>
//               </div>
//             </DetailsSection>
//           </MainContent>
//         </div>
//         <div className="col-md-4">
//           <Sidebar>
//             <h1>{trip.name}</h1>
//             <SidebarItem>
//               <FaDollarSign /> <strong>Price:</strong> ${trip.price}
//             </SidebarItem>
//             <SidebarItem>
//               <FaClock /> <strong>Duration:</strong> {trip.duration} days
//             </SidebarItem>
//             <SidebarItem>
//               <FaStar /> <strong>Rating:</strong> {trip.rating}/5
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
import {
  FaStar,
  FaDollarSign,
  FaClock,
  FaBed,
  FaCar,
  FaUtensils,
  FaUser,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useUser } from "../context/UserContext";

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
  background: #343a40;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  position: sticky;
  top: 100px;
`;

const SidebarItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.5rem;
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

  h2 {
    color: #333;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.5rem;
    list-style-type: none;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const BookButton = styled.button`
  background: #28a745;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s;
  &:hover {
    background: #218838;
  }
`;

const TestimonialBlock = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
`;

const TestimonialContent = styled.p`
  margin-bottom: 1rem;
  font-style: italic;
  color: #555;
`;

const TestimonialAuthor = styled.footer`
  font-size: 0.9rem;
  color: #777;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
        const response = await axios.get(`/api/trips/${id}`);
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
    <Container className="container">
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
                <FaStar /> Highlights
              </h2>
              <ul>
                {trip.highlights.map((highlight, index) => (
                  <li key={index}>
                    <FaArrowRight /> {highlight}
                  </li>
                ))}
              </ul>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <FaBed /> Accommodation
              </h2>
              <ul>
                {trip.accommodation.map((item, index) => (
                  <li key={index}>
                    <FaArrowRight /> {item}
                  </li>
                ))}
              </ul>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <FaCar /> Transportation
              </h2>
              <ul>
                {trip.transportation.map((item, index) => (
                  <li key={index}>
                    <FaArrowRight /> {item.type} - {item.details}
                  </li>
                ))}
              </ul>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <FaUtensils /> Meals
              </h2>
              <p>{trip.meals}</p>
            </DetailsSection>
            <DetailsSection>
              <h2>
                <FaUser /> Guides
              </h2>
              {trip.guides.map((guide, index) => (
                <div key={index}>
                  <p><FaUser /> {guide.name}</p>
                  <p><FaPhone /> {guide.phone}</p>
                  <p><FaEnvelope /> {guide.email}</p>
                  <img src={guide.image} alt={guide.name} className="img-fluid" />
                </div>
              ))}
            </DetailsSection>
            <DetailsSection>
              <h2>
                <FaQuoteLeft /> Testimonials <FaQuoteRight />
              </h2>
              <div className="position-relative">
                {trip.testimonials.map((testimonial, index) => (
                  <TestimonialBlock
                    key={index}
                    style={{
                      display: index === currentTestimonial ? "block" : "none",
                    }}
                  >
                    <TestimonialContent>
                      <FaQuoteLeft className="me-2" />
                      {testimonial.content}
                      <FaQuoteRight className="ms-2" />
                    </TestimonialContent>
                    <TestimonialAuthor>
                      <FaUser className="me-2" />
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
              </div>
            </DetailsSection>
          </MainContent>
        </div>
        <div className="col-md-4">
          <Sidebar>
            <h1>{trip.name}</h1>
            <SidebarItem>
              <FaDollarSign /> <strong>Price:</strong> ${trip.price}
            </SidebarItem>
            <SidebarItem>
              <FaClock /> <strong>Duration:</strong> {trip.duration} days
            </SidebarItem>
            <SidebarItem>
              <FaStar /> <strong>Rating:</strong> {trip.rating}/5
            </SidebarItem>
            <BookButton onClick={handleBookNowClick}>Book Now</BookButton>
          </Sidebar>
        </div>
      </div>
    </Container>
  );
};

export default SingleTrip;
