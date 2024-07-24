// // import React, { useState, useEffect, useRef } from "react";
// // import styled from "styled-components";
// // import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaHotel } from "react-icons/fa";

// // const Wrapper = styled.section`
// //   // display: flex;
// //   // align-items: center;
// //   // justify-content: center;
// //   // min-height: 100vh;
// //   // background-color: #f4f4f4;
// //   // font-family: "Arial", sans-serif;
// //   // margin: 0;
// //   // padding: 0;

// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   min-height: 100vh;
// //   background-image: url(https://d3nn873nee648n.cloudfront.net/900x600/20491/300-PK1048508.jpg);
// //   /* background-color: #f4f4f4; */
// //   font-family: "Arial", sans-serif;
// //   margin: 0;
// //   padding: 0;
// //   background-size: cover;
// //   height: 100%;
// //   width: 100%;
// //   background-repeat: no-repeat;
// //   .app1 {
// //     display: flex;
// //     flex-wrap: wrap;
// //     justify-content: center;
// //     align-items: center;
// //     width: 100%;
// //     padding: 16px;
// //   }

// //   .counter {
// //     margin: 16px;
// //     padding: 16px;
// //     text-align: center;
// //     background-color: #e0f7fa;
// //     border-radius: 10px;
// //     box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
// //     display: flex;
// //     flex-direction: column;
// //     justify-content: center;
// //     align-items: center;
// //     width: 250px;
// //     height: 250px;
// //   }

// //   h2 {
// //     margin-bottom: 10px;
// //     font-family: serif;
// //     color: #333;
// //   }

// //   p {
// //     font-size: 40px;
// //     font-weight: bold;
// //     color: #0084ff;
// //     font-family: "Arial", sans-serif;
// //   }

// //   .icon {
// //     font-size: 50px;
// //     color: #0084ff;
// //     margin-bottom: 10px;
// //   }

// //   @media (max-width: 768px) {
// //     .counter {
// //       width: 100%;
// //       height: auto;
// //     }
// //   }
// // `;

// // const Count = () => {
// //   const [totalTourists, setTotalTourists] = useState(0);
// //   const [totalTouristsInMonth, setTotalTouristsInMonth] = useState(0);
// //   const [totalPlaces, setTotalPlaces] = useState(0);
// //   const [totalHotels, setTotalHotels] = useState(0);

// //   const countRef = useRef(null);

// //   useEffect(() => {
// //     const options = {
// //       root: null,
// //       rootMargin: "0px",
// //       threshold: 0.5,
// //     };

// //     const observer = new IntersectionObserver((entries) => {
// //       if (entries[0].isIntersecting) {
// //         const interval = setInterval(() => {
// //           setTotalTourists((prev) => (prev < 3900 ? prev + 50 : prev));
// //           setTotalTouristsInMonth((prev) => (prev < 400 ? prev + 5 : prev));
// //           setTotalPlaces((prev) => (prev < 1000 ? prev + 10 : prev));
// //           setTotalHotels((prev) => (prev < 35 ? prev + 1 : prev));
// //         }, 100);

// //         return () => {
// //           clearInterval(interval);
// //         };
// //       }
// //     }, options);

// //     if (countRef.current) {
// //       observer.observe(countRef.current);
// //     }

// //     return () => {
// //       if (countRef.current) {
// //         observer.unobserve(countRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <Wrapper>
// //       <div className="container">
// //         <div className="row app1" ref={countRef}>
// //           <div className="col-md-3 col-sm-6 d-flex justify-content-center">
// //             <div className="counter card">
// //               <div className="card-body">
// //                 <FaUser className="icon" />
// //                 <h2 className="card-title">Total Tourists</h2>
// //                 <p className="card-text">{totalTourists}</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 col-sm-6 d-flex justify-content-center">
// //             <div className="counter card">
// //               <div className="card-body">
// //                 <FaCalendarAlt className="icon" />
// //                 <h2 className="card-title">Total Tourists in One Month</h2>
// //                 <p className="card-text">{totalTouristsInMonth}</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 col-sm-6 d-flex justify-content-center">
// //             <div className="counter card">
// //               <div className="card-body">
// //                 <FaMapMarkerAlt className="icon" />
// //                 <h2 className="card-title">Total Places</h2>
// //                 <p className="card-text">{totalPlaces}</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 col-sm-6 d-flex justify-content-center">
// //             <div className="counter card">
// //               <div className="card-body">
// //                 <FaHotel className="icon" />
// //                 <h2 className="card-title">Total Hotels</h2>
// //                 <p className="card-text">{totalHotels}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </Wrapper>
// //   );
// // };

// // export default Count;
// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaHotel } from "react-icons/fa";

// const Wrapper = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-image: url(https://d3nn873nee648n.cloudfront.net/900x600/20491/300-PK1048508.jpg);
//   font-family: "Arial", sans-serif;
//   margin: 0;
//   padding: 0;
//   background-size: cover;
//   height: 100%;
//   width: 100%;
//   background-repeat: no-repeat;

//   .app1 {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     padding: 16px;
//   }

//   .counter {
//     margin: 16px;
//     padding: 16px;
//     text-align: center;
//     background-color: #e0f7fa;
//     border-radius: 15px;
//     box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 250px;
//     height: 250px;
//     transition: transform 0.3s;
//   }

//   .counter:hover {
//     transform: translateY(-10px);
//   }

//   h2 {
//     margin-bottom: 10px;
//     font-family: serif;
//     color: #333;
//   }

//   p {
//     font-size: 40px;
//     font-weight: bold;
//     color: #0084ff;
//     font-family: "Arial", sans-serif;
//   }

//   .icon {
//     font-size: 50px;
//     color: #0084ff;
//     margin-bottom: 10px;
//   }

//   @media (max-width: 768px) {
//     .counter {
//       width: 100%;
//       height: auto;
//     }
//   }
// `;

// const Count = () => {
//   const [totalTourists, setTotalTourists] = useState(0);
//   const [totalTouristsInMonth, setTotalTouristsInMonth] = useState(0);
//   const [totalPlaces, setTotalPlaces] = useState(0);
//   const [totalHotels, setTotalHotels] = useState(0);

//   const countRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         const interval = setInterval(() => {
//           setTotalTourists((prev) => (prev < 3900 ? prev + 50 : prev));
//           setTotalTouristsInMonth((prev) => (prev < 400 ? prev + 5 : prev));
//           setTotalPlaces((prev) => (prev < 1000 ? prev + 10 : prev));
//           setTotalHotels((prev) => (prev < 35 ? prev + 1 : prev));
//         }, 100);

//         return () => {
//           clearInterval(interval);
//         };
//       }
//     }, options);

//     if (countRef.current) {
//       observer.observe(countRef.current);
//     }

//     return () => {
//       if (countRef.current) {
//         observer.unobserve(countRef.current);
//       }
//     };
//   }, []);

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="row app1" ref={countRef}>
//           <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
//             <div className="counter card">
//               <div className="card-body">
//                 <FaUser className="icon" />
//                 <h2 className="card-title">Total Tourists</h2>
//                 <p className="card-text">{totalTourists}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
//             <div className="counter card">
//               <div className="card-body">
//                 <FaCalendarAlt className="icon" />
//                 <h2 className="card-title">Total Tourists in One Month</h2>
//                 <p className="card-text">{totalTouristsInMonth}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
//             <div className="counter card">
//               <div className="card-body">
//                 <FaMapMarkerAlt className="icon" />
//                 <h2 className="card-title">Total Places</h2>
//                 <p className="card-text">{totalPlaces}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
//             <div className="counter card">
//               <div className="card-body">
//                 <FaHotel className="icon" />
//                 <h2 className="card-title">Total Hotels</h2>
//                 <p className="card-text">{totalHotels}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Count;
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Importing SVG files
import TotalTouristsSVG from "../assets/svg/r1.svg";
import TotalTouristsInMonthSVG from "../assets/svg/r2.svg";
import TotalPlacesSVG from "../assets/svg/place.svg";
import TotalHotelsSVG from "../assets/svg/hotel.svg";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  background-position: center;
  background: whitesmoke;
  // background-image: url(https://d3nn873nee648n.cloudfront.net/900x600/20476/300-PK1048596.jpg);
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;

  width: 100%;

  .app1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px;
  }

  .counter {
    margin: 16px;
    padding: 20px;
    text-align: center;
    background-color: floralwhite;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid #0084ff;
  }

  .counter:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin-bottom: 10px;
    font-family: serif;
    color: #333;
  }

  p {
    font-size: 40px;
    font-weight: bold;
    color: #0084ff;
    font-family: "Arial", sans-serif;
  }

  .icon {
    width: 50px;
    height: 50px;
    fill: #0084ff;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .counter {
      width: 100%;
      height: auto;
    }
  }
`;

const Count = () => {
  const [totalTourists, setTotalTourists] = useState(0);
  const [totalTouristsInMonth, setTotalTouristsInMonth] = useState(0);
  const [totalPlaces, setTotalPlaces] = useState(0);
  const [totalHotels, setTotalHotels] = useState(0);

  const countRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const interval = setInterval(() => {
          setTotalTourists((prev) => (prev < 3900 ? prev + 50 : prev));
          setTotalTouristsInMonth((prev) => (prev < 400 ? prev + 5 : prev));
          setTotalPlaces((prev) => (prev < 1000 ? prev + 10 : prev));
          setTotalHotels((prev) => (prev < 35 ? prev + 1 : prev));
        }, 100);

        return () => {
          clearInterval(interval);
        };
      }
    }, options);

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="row app1" ref={countRef}>
          <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
            <div className="counter card">
              <div className="card-body">
                <img
                  src={TotalTouristsSVG}
                  className="icon"
                  alt="Total Tourists"
                />
                <h2 className="card-title">Total Tourists</h2>
                <p className="card-text">{totalTourists}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
            <div className="counter card">
              <div className="card-body">
                <img
                  src={TotalTouristsInMonthSVG}
                  className="icon"
                  alt="Total Tourists in One Month"
                />
                <h2 className="card-title">Tourists in 1 Month</h2>
                <p className="card-text">{totalTouristsInMonth}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
            <div className="counter card">
              <div className="card-body">
                <img src={TotalPlacesSVG} className="icon" alt="Total Places" />
                <h2 className="card-title">Total Places</h2>
                <p className="card-text">{totalPlaces}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
            <div className="counter card">
              <div className="card-body">
                <img src={TotalHotelsSVG} className="icon" alt="Total Hotels" />
                <h2 className="card-title">Total Hotels</h2>
                <p className="card-text">{totalHotels}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Count;
