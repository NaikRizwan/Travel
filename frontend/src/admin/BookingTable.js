//
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BookingRow from "./BookingRow";

const TableContainer = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const deleteBooking = (userId, bookingId) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      fetch(`http://localhost:5000/api/bookings/${userId}/${bookingId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          setBookings((prevBookings) =>
            prevBookings.map((user) => ({
              ...user,
              bookings: user.bookings.filter(
                (booking) => booking._id !== bookingId
              ),
            }))
          );
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <TableContainer className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location</th>
            <th>Members</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Pickup Destination</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Payment Option</th>
            <th>Payment ID</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((user) =>
            user.bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                userId={user._id}
                onDelete={deleteBooking}
              />
            ))
          )}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default BookingTable;
