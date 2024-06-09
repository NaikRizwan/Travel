import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const BookingRow = ({ booking, userId, onDelete }) => {
  return (
    <tr>
      <td>{booking.fullname}</td>
      <td>{booking.email}</td>
      <td>{booking.mobile}</td>
      <td>{booking.location}</td>
      <td>{booking.members}</td>
      <td>{booking.checkinDate}</td>
      <td>{booking.checkoutDate}</td>
      <td>{booking.pickupDestination}</td>
      <td>{booking.gender}</td>
      <td>{booking.age}</td>
      <td>{booking.paymentOption}</td>
      <td>{booking.paymentId}</td>
      <td>{booking.totalPrice}</td>
      <td>
        <StyledButton onClick={() => onDelete(userId, booking._id)}>
          Delete
        </StyledButton>
      </td>
    </tr>
  );
};

export default BookingRow;
