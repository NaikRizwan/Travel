// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // //import { Table } from "react-bootstrap";

// // const BookingListPage = () => {
// //   const [bookings, setBookings] = useState([]);

// //   useEffect(() => {
// //     fetchBookingDetails();
// //   }, []);

// //   const fetchBookingDetails = async () => {
// //     try {
// //       const response = await axios.get("/api/bookings");
// //       setBookings(response.data);
// //     } catch (error) {
// //       console.error("Error fetching booking details:", error);
// //     }
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <h1 className="mb-4">All Bookings</h1>
// //       <Table striped bordered hover>
// //         <thead>
// //           <tr>
// //             <th>Email</th>
// //             <th>Full Name</th>
// //             <th>Contact Number</th>
// //             <th>Destination</th>
// //             <th>Journey Date</th>
// //             <th>Number of Days</th>
// //             <th>Aadhar Number</th>
// //             <th>Trip ID</th>
// //             <th>Rate</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {bookings.map((booking, index) => (
// //             <tr key={index}>
// //               <td>{booking.email}</td>
// //               <td>{booking.fullName}</td>
// //               <td>{booking.contactNumber}</td>
// //               <td>{booking.destination}</td>
// //               <td>{new Date(booking.journeyDate).toLocaleDateString()}</td>
// //               <td>{booking.numberOfDays}</td>
// //               <td>{booking.aadharNumber}</td>
// //               <td>{booking.tripId}</td>
// //               <td>{booking.rate}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>
// //     </div>
// //   );
// // };

// // export default BookingListPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BookingListPage = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookingDetails();
//   }, []);

//   const fetchBookingDetails = async () => {
//     try {
//       const response = await axios.get("/api/bookings");
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching booking details:", error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">All Bookings</h1>
//       <table className="table table-striped table-bordered table-hover">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Full Name</th>
//             <th>Contact Number</th>
//             <th>Destination</th>
//             <th>Journey Date</th>
//             <th>Number of Days</th>
//             <th>Aadhar Number</th>
//             <th>Trip ID</th>
//             <th>Rate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking, index) => (
//             <tr key={index}>
//               <td>{booking.email}</td>
//               <td>{booking.fullName}</td>
//               <td>{booking.contactNumber}</td>
//               <td>{booking.destination}</td>
//               <td>{new Date(booking.journeyDate).toLocaleDateString()}</td>
//               <td>{booking.numberOfDays}</td>
//               <td>{booking.aadharNumber}</td>
//               <td>{booking.tripId}</td>
//               <td>{booking.rate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingListPage;
import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingListPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookingDetails();
  }, []);

  const fetchBookingDetails = async () => {
    try {
      const response = await axios.get(
        "https://travel-bice-five.vercel.app/api/bookings"
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Bookings</h1>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Email</th>
            <th>Full Name</th>
            <th>Contact Number</th>
            <th>Destination</th>
            <th>Journey Date</th>
            <th>Number of Days</th>
            <th>Aadhar Number</th>
            <th>Trip ID</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <React.Fragment key={index}>
              {booking.bookings.map((innerBooking, innerIndex) => (
                <tr key={`${index}-${innerIndex}`}>
                  <td>{booking.email}</td>
                  <td>{innerBooking.fullName}</td>
                  <td>{innerBooking.contactNumber}</td>
                  <td>{innerBooking.destination}</td>
                  <td>
                    {new Date(innerBooking.journeyDate).toLocaleDateString()}
                  </td>
                  <td>{innerBooking.numberOfDays}</td>
                  <td>{innerBooking.aadharNumber}</td>
                  <td>{innerBooking.tripId}</td>
                  <td>{innerBooking.rate}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingListPage;
