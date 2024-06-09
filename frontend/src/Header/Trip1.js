// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaRegHeart,
//   FaUser,
//   FaStar,
//   FaSyncAlt,
//   FaRegGrinStars,
// } from "react-icons/fa";
// import { GrPrevious, GrNext } from "react-icons/gr";
// import {
//   FaSearch,
//   FaFilter,
//   FaPlus,
//   FaStar as FaStarFilled,
//   FaMountain,
// } from "react-icons/fa";
// import "./Trip.css";

// const ImageCarousel = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showButtons, setShowButtons] = useState(false);

//   const handleClick = (direction) => {
//     if (direction === "prev") {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === 0 ? images.length - 1 : prevIndex - 1
//       );
//     } else {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }
//   };

//   return (
//     <div
//       style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}
//       onMouseEnter={() => setShowButtons(true)}
//       onMouseLeave={() => setShowButtons(false)}
//     >
//       {showButtons && (
//         <>
//           <button
//             style={{
//               position: "absolute",
//               top: "50%",
//               transform: "translateY(-50%)",
//               borderRadius: "50%",
//               border: "none",
//               left: "5px",
//               zIndex: "2",
//               background: "rgba(255, 255, 255, 0.7)",
//               cursor: "pointer",
//             }}
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();
//               handleClick("prev");
//             }}
//           >
//             <GrPrevious style={{ fontSize: "15px" }} />
//           </button>
//           <button
//             style={{
//               position: "absolute",
//               top: "50%",
//               transform: "translateY(-50%)",
//               borderRadius: "50%",
//               border: "none",
//               right: "5px",
//               zIndex: "2",
//               background: "rgba(255, 255, 255, 0.7)",
//               cursor: "pointer",
//             }}
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();
//               handleClick("next");
//             }}
//           >
//             <GrNext style={{ fontSize: "15px" }} />
//           </button>
//         </>
//       )}
//       <img
//         src={images[currentImageIndex]}
//         alt="Trip"
//         style={{
//           width: "100%",
//           height: "290px",
//           borderRadius: "18px",
//           padding: "10px",
//         }}
//       />
//     </div>
//   );
// };

// const Shimmer = () => (
//   <div className="shimmer-wrapper">
//     <div className="shimmer"></div>
//   </div>
// );

// const Trip = () => {
//   const [trips, setTrips] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterType, setFilterType] = useState(null);
//   const [visibleTrips, setVisibleTrips] = useState(12);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("/api/trips");
//         if (!response.ok) {
//           throw new Error("Failed to fetch trips");
//         }
//         const data = await response.json();
//         setTrips(data.trips);
//       } catch (error) {
//         console.error("Error fetching trips:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrips();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm("");
//     setFilterType(null);
//   };

//   const filteredTrips = trips
//     .filter((trip) =>
//       trip.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .slice(0, visibleTrips);

//   if (filterType === "max") {
//     filteredTrips.sort((a, b) => b.rating - a.rating);
//   } else if (filterType === "min") {
//     filteredTrips.sort((a, b) => a.rating - b.rating);
//   }

//   const handleHeartClick = (id) => {
//     const updatedTrips = trips.map((trip) =>
//       trip.id === id ? { ...trip, isLiked: !trip.isLiked } : trip
//     );
//     setTrips(updatedTrips);
//     localStorage.setItem("likedTrips", JSON.stringify(updatedTrips));
//   };

//   const showMoreTrips = () => {
//     setVisibleTrips((prev) => prev + 12);
//   };

//   return (
//     <div style={{ paddingTop: "10px" }}>
//       <div className="container">
//         <div className="row justify-content-center mb-4 filter-search-section">
//           <div className="col-lg-8 d-flex align-items-center">
//             <div className="mr-2 search-box" style={{ flex: 1 }}>
//               <input
//                 type="text"
//                 className="form-control rounded-pill"
//                 placeholder="Search by trip name"
//                 value={searchTerm}
//                 onChange={handleSearch}
//               />
//               <FaSearch className="search-icon" />
//             </div>
//             <div className="filter-buttons">
//               <button
//                 type="button"
//                 className={`trip-button ${
//                   filterType === "max" ? "active" : ""
//                 }`}
//                 onClick={() => setFilterType("max")}
//                 style={{ backgroundColor: "#28a745" }}
//               >
//                 <FaFilter size={24} />
//                 <span className="button-text">Max Range</span>
//               </button>
//               <button
//                 type="button"
//                 className={`trip-button ${
//                   filterType === "min" ? "active" : ""
//                 }`}
//                 onClick={() => setFilterType("min")}
//                 style={{ backgroundColor: "#17a2b8" }}
//               >
//                 <FaFilter size={24} />
//                 <span className="button-text">Min Range</span>
//               </button>
//               {/* <button
//                 type="button"
//                 className={`trip-button ${
//                   filterType === "new" ? "active" : ""
//                 }`}
//                 onClick={() => setFilterType("new")}
//                 style={{ backgroundColor: "#ffc107" }}
//               >
//                 <FaPlus size={24} />
//                 <span className="button-text">Add New Trip</span>
//               </button> */}
//               <button
//                 type="button"
//                 className={`trip-button ${
//                   filterType === "famous" ? "active" : ""
//                 }`}
//                 onClick={() => setFilterType("famous")}
//                 style={{ backgroundColor: "#dc3545" }}
//               >
//                 <FaStar size={24} />
//                 <span className="button-text">Famous Trips</span>
//               </button>
//               <button
//                 type="button"
//                 className={`trip-button ${
//                   filterType === "snow" ? "active" : ""
//                 }`}
//                 onClick={() => setFilterType("snow")}
//                 style={{ backgroundColor: "#6c757d" }}
//               >
//                 <FaMountain size={24} />
//                 <span className="button-text">Snow Places</span>
//               </button>
//               <button
//                 type="button"
//                 className="trip-button reset-button"
//                 onClick={handleReset}
//                 style={{ backgroundColor: "#343a40" }}
//               >
//                 <FaSyncAlt size={24} />
//                 <span className="button-text">Reset</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         {loading ? (
//           <div className="row">
//             {[...Array(8)].map((_, index) => (
//               <div className="col-lg-3 mb-4" key={index}>
//                 <Shimmer />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="row">
//             {filteredTrips.map((trip) => (
//               <div className="col-lg-3 mb-4" key={trip.id}>
//                 <div className="card h-100 trip-card">
//                   <div style={{ position: "relative" }}>
//                     <FaRegHeart
//                       style={{
//                         fontSize: "25px",
//                         position: "absolute",
//                         top: "25px",
//                         right: "27px",
//                         zIndex: "3",
//                       }}
//                       className={`fa-heart${trip.isLiked ? " red" : ""}`}
//                       onClick={() => handleHeartClick(trip.id)}
//                     />
//                     <NavLink
//                       to={`/singletrip/${trip.id}`}
//                       style={{ textDecoration: "none", position: "relative" }}
//                     >
//                       <ImageCarousel images={trip.images} />
//                       <div className="card-body trip-details">
//                         <div className="d-flex justify-content-between">
//                           <h5
//                             className="card-title trip-name"
//                             style={{ color: "black" }}
//                           >
//                             {trip.name}
//                           </h5>
//                           <p
//                             className="card-text trip-rate"
//                             style={{ color: "black" }}
//                           >
//                             {[...Array(5)].map((_, i) => (
//                               <FaStarFilled
//                                 key={i}
//                                 style={{
//                                   color:
//                                     i < trip.rating ? "#ffd700" : "#e4e5e9",
//                                 }}
//                               />
//                             ))}
//                           </p>
//                         </div>
//                         {/* <p
//                           className="card-text trip-description"
//                           style={{ color: "black" }}
//                         >
//                           <FaUser /> {trip.totalViews}
//                         </p> */}
//                         <div className="d-flex justify-content-between">
//                           <p
//                             className="card-text trip-price"
//                             style={{ color: "black" }}
//                           >
//                             7 Days
//                           </p>
//                           <p
//                             className="card-text trip-description"
//                             style={{ color: "black" }}
//                           >
//                             <FaUser /> {trip.totalViews}
//                           </p>
//                           <p
//                             className="card-text trip-price"
//                             style={{ color: "black" }}
//                           >
//                             &#8377; {trip.price}
//                           </p>
//                         </div>
//                       </div>
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//         {visibleTrips < trips.length && !loading && (
//           <button className="show-more-button" onClick={showMoreTrips}>
//             Show More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Trip;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegHeart,
  FaUser,
  FaStar,
  FaSyncAlt,
  FaRegGrinStars,
  FaCircle,
  FaSearch,
  FaFilter,
  FaPlus,
  FaStar as FaStarFilled,
  FaMountain,
} from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Trip.css";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = (direction) => {
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div
      style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      {showButtons && (
        <>
          <button
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              borderRadius: "50%",
              border: "none",
              left: "5px",
              zIndex: "2",
              background: "rgba(255, 255, 255, 0.7)",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClick("prev");
            }}
          >
            <GrPrevious style={{ fontSize: "15px" }} />
          </button>
          <button
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              borderRadius: "50%",
              border: "none",
              right: "5px",
              zIndex: "2",
              background: "rgba(255, 255, 255, 0.7)",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClick("next");
            }}
          >
            <GrNext style={{ fontSize: "15px" }} />
          </button>
        </>
      )}
      <img
        src={images[currentImageIndex]}
        alt="Trip"
        style={{
          width: "100%",
          height: "290px",
          borderRadius: "18px",
          padding: "10px",
        }}
      />
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <FaCircle
            key={index}
            className={`indicator ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              color: index === currentImageIndex ? "#007bff" : "#ffffff",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Shimmer = () => (
  <div className="shimmer-wrapper">
    <div className="shimmer"></div>
  </div>
);

const Trip = () => {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState(null);
  const [visibleTrips, setVisibleTrips] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/trips");
        if (!response.ok) {
          throw new Error("Failed to fetch trips");
        }
        const data = await response.json();
        const likedTrips = JSON.parse(localStorage.getItem("likedTrips")) || [];
        const updatedTrips = data.trips.map((trip) => {
          const likedTrip = likedTrips.find((t) => t.id === trip.id);
          return likedTrip ? { ...trip, isLiked: likedTrip.isLiked } : trip;
        });
        setTrips(updatedTrips);
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterType(null);
  };

  const filteredTrips = trips
    .filter((trip) =>
      trip.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, visibleTrips);

  if (filterType === "max") {
    filteredTrips.sort((a, b) => b.rating - a.rating);
  } else if (filterType === "min") {
    filteredTrips.sort((a, b) => a.rating - b.rating);
  }

  const handleHeartClick = (id) => {
    const updatedTrips = trips.map((trip) =>
      trip.id === id ? { ...trip, isLiked: !trip.isLiked } : trip
    );
    setTrips(updatedTrips);
    localStorage.setItem("likedTrips", JSON.stringify(updatedTrips));
  };

  const showMoreTrips = () => {
    setVisibleTrips((prev) => prev + 12);
  };

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        paddingTop: "34px",
        paddingBottom: "10px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-4 filter-search-section">
          <div className="col-lg-8 d-flex align-items-center">
            <div className="mr-2 search-box">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search by trip name"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="search-icon" />
            </div>
            <div className="filter-buttons">
              <button
                type="button"
                className={`trip-button ${
                  filterType === "max" ? "active" : ""
                }`}
                onClick={() => setFilterType("max")}
              >
                <FaFilter size={20} />
                <span className="button-text">Max Range</span>
              </button>
              <button
                type="button"
                className={`trip-button ${
                  filterType === "min" ? "active" : ""
                }`}
                onClick={() => setFilterType("min")}
              >
                <FaFilter size={20} />
                <span className="button-text">Min Range</span>
              </button>
              <button
                type="button"
                className={`trip-button ${
                  filterType === "famous" ? "active" : ""
                }`}
                onClick={() => setFilterType("famous")}
              >
                <FaStar size={20} />
                <span className="button-text">Famous Trips</span>
              </button>
              <button
                type="button"
                className={`trip-button ${
                  filterType === "snow" ? "active" : ""
                }`}
                onClick={() => setFilterType("snow")}
              >
                <FaMountain size={20} />
                <span className="button-text">Snow Places</span>
              </button>
              <button
                type="button"
                className="trip-button reset-button"
                onClick={handleReset}
              >
                <FaSyncAlt size={20} />
                <span className="button-text">Reset</span>
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="row">
            {[...Array(8)].map((_, index) => (
              <div className="col-lg-3 mb-4" key={index}>
                <Shimmer />
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {filteredTrips.map((trip) => (
              <div className="col-lg-3 mb-4" key={trip.id}>
                <div className="card h-100 trip-card">
                  <div style={{ position: "relative" }}>
                    <FaRegHeart
                      style={{
                        fontSize: "25px",
                        position: "absolute",
                        top: "25px",
                        right: "27px",
                        zIndex: "3",
                      }}
                      className={`fa-heart${trip.isLiked ? " red" : ""}`}
                      onClick={() => handleHeartClick(trip.id)}
                    />
                    <NavLink
                      to={`/singletrip/${trip.id}`}
                      style={{ textDecoration: "none", position: "relative" }}
                    >
                      <ImageCarousel images={trip.images} />
                      <div className="card-body trip-details">
                        <div className="d-flex justify-content-between">
                          <h5
                            className="card-title trip-name"
                            style={{ color: "black" }}
                          >
                            {trip.name}
                          </h5>
                          <p
                            className="card-text trip-rate"
                            style={{ color: "black" }}
                          >
                            {[...Array(5)].map((_, i) => (
                              <FaStarFilled
                                key={i}
                                style={{
                                  color:
                                    i < trip.rating ? "#ffd700" : "#e4e5e9",
                                }}
                              />
                            ))}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p
                            className="card-text trip-price"
                            style={{ color: "black" }}
                          >
                            7 Days
                          </p>
                          <p
                            className="card-text trip-description"
                            style={{ color: "black" }}
                          >
                            <FaUser style={{ marginBottom: "4px" }} />{" "}
                            {trip.totalViews}
                          </p>
                          <p
                            className="card-text trip-price"
                            style={{ color: "black" }}
                          >
                            &#8377; {trip.price}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {visibleTrips < trips.length && !loading && (
          <button className="show-more-button" onClick={showMoreTrips}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Trip;
