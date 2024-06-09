// // //
// // import React, { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";

// // const Trip = () => {
// //   const [trips, setTrips] = useState([]);

// //   useEffect(() => {
// //     const fetchTrips = async () => {
// //       try {
// //         const response = await fetch("/api/trips"); // Assuming your backend endpoint for fetching trips is '/api/trips'
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch trips");
// //         }
// //         const data = await response.json();
// //         setTrips(data.trips); // Assuming your backend returns an object with a 'trips' property containing an array of trips
// //       } catch (error) {
// //         console.error("Error fetching trips:", error);
// //       }
// //     };

// //     fetchTrips();
// //   }, []); // Empty dependency array ensures this effect runs only once, on component mount

// //   return (
// //     <div className="container">
// //       {/* <h1 className="text-center mb-5">Trip List</h1> */}
// //       <div className="row">
// //         {trips.map((trip) => (
// //           <div className="col-lg-4 mb-4" key={trip._id}>
// //             <NavLink
// //               style={{ textDecoration: "none" }}
// //               to={`/singletrip/${trip.id}`}
// //             >
// //               <div className="card h-100 trip-card">
// //                 <img
// //                   src={trip.image}
// //                   className="card-img-top"
// //                   alt={trip.name}
// //                 />
// //                 <div className="card-body">
// //                   <div className="d-flex justify-content-between align-items-center mb-3">
// //                     <h5 className="card-title m-0 riri">{trip.name}</h5>
// //                     <p className="card-text rate m-0 riri">
// //                       &#x20B9; {trip.rate}
// //                     </p>
// //                   </div>
// //                   <p className="card-text rate">{trip.details}</p>
// //                 </div>

// //                 <button className="boxed-btn3">See More Details</button>
// //               </div>
// //             </NavLink>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Trip;
// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// const Trip = () => {
//   const [trips, setTrips] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterType, setFilterType] = useState(null);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await fetch("/api/trips");
//         if (!response.ok) {
//           throw new Error("Failed to fetch trips");
//         }
//         const data = await response.json();
//         setTrips(data.trips);
//       } catch (error) {
//         console.error("Error fetching trips:", error);
//       }
//     };

//     fetchTrips();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilter = (type) => {
//     setFilterType(type);
//   };

//   const filteredTrips = trips.filter((trip) =>
//     trip.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (filterType === "max") {
//     filteredTrips.sort((a, b) => b.rate - a.rate);
//   } else if (filterType === "min") {
//     filteredTrips.sort((a, b) => a.rate - b.rate);
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-3 mb-4">
//           <div className="card trip-filter">
//             <div className="card-body">
//               <h5 className="card-title">Filter by Rate</h5>
//               <button
//                 className="btn btn-primary mb-2"
//                 onClick={() => handleFilter("max")}
//               >
//                 Max Range
//               </button>
//               <button
//                 className="btn btn-primary mb-2"
//                 onClick={() => handleFilter("min")}
//               >
//                 Min Range
//               </button>
//               {/* Add more filter buttons as needed */}
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-9">
//           <input
//             type="text"
//             className="form-control mb-3"
//             placeholder="Search by trip name"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <div className="row">
//             {filteredTrips.map((trip) => (
//               <div className="col-lg-4 mb-4" key={trip._id}>
//                 <NavLink
//                   style={{ textDecoration: "none" }}
//                   to={`/singletrip/${trip.id}`}
//                 >
//                   <div className="card h-100 trip-card">
//                     <img
//                       src={trip.image}
//                       className="card-img-top"
//                       alt={trip.name}
//                     />
//                     <div className="card-body">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h5 className="card-title m-0 riri">{trip.name}</h5>
//                         <p className="card-text rate m-0 riri">
//                           &#x20B9; {trip.rate}
//                         </p>
//                       </div>
//                       <p className="card-text rate">{trip.details}</p>
//                     </div>
//                     <button className="boxed-btn3">See More Details</button>
//                   </div>
//                 </NavLink>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trip;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Trip = () => {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("/api/trips");
        if (!response.ok) {
          throw new Error("Failed to fetch trips");
        }
        const data = await response.json();
        setTrips(data.trips);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const filteredTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterType === "max") {
    filteredTrips.sort((a, b) => b.rate - a.rate);
  } else if (filterType === "min") {
    filteredTrips.sort((a, b) => a.rate - b.rate);
  }

  return (
    <div className="container">
      <div className="row align-items-center mb-4">
        <div className="col-lg-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search by trip name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-lg-4">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleFilter("max")}
            >
              Max Range
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleFilter("min")}
            >
              Min Range
            </button>
            {/* Add more filter buttons as needed */}
          </div>
        </div>
      </div>
      <div className="row">
        {filteredTrips.map((trip) => (
          <div className="col-lg-3 mb-4" key={trip._id}>
            <NavLink
              style={{ textDecoration: "none" }}
              to={`/singletrip/${trip.id}`}
            >
              <div className="card h-100 trip-card">
                <img
                  src={trip.image}
                  className="card-img-top"
                  alt={trip.name}
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title m-0 riri">{trip.name}</h5>
                    <p className="card-text rate m-0 riri">
                      &#x20B9; {trip.rate}
                    </p>
                  </div>
                  <p className="card-text1">{trip.details}</p>
                </div>
                <button className="boxed-btn3">See More Details</button>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trip;
