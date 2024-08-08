// import React, { useState } from "react";
// import axios from "axios";

// function DeleteTripForm() {
//   const [tripId, setTripId] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.delete(`/api/trips/${tripId}`);
//       alert("Trip deleted successfully");
//       // You can add additional logic here, such as refreshing the list of trips
//     } catch (error) {
//       console.error("Failed to delete trip:", error.response.data.message);
//       alert("Failed to delete trip");
//     }
//   };

//   return (
//     <div>
//       <h2>Delete Trip</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Trip ID:
//           <input
//             type="text"
//             value={tripId}
//             onChange={(e) => setTripId(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Delete Trip</button>
//       </form>
//     </div>
//   );
// }

// export default DeleteTripForm;
import React, { useState } from "react";
import axios from "axios";

function DeleteTripForm() {
  const [tripId, setTripId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `https://travel-bice-five.vercel.app/api/trips/${tripId}`
      );
      setSuccessMessage("Trip deleted successfully");
      setErrorMessage(""); // Clear any previous error message
      // You can add additional logic here, such as refreshing the list of trips
    } catch (error) {
      console.error("Failed to delete trip:", error.response.data.message);
      setErrorMessage("Failed to delete trip");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <div>
      <h2>Delete Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Trip ID:
          <input
            type="text"
            value={tripId}
            onChange={(e) => setTripId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Delete Trip</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default DeleteTripForm;
