// import React, { useState } from "react";
// import axios from "axios";

// function DeleteSingleTripForm() {
//   const [tripId, setTripId] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.delete(`/api/singletrips/${tripId}`);
//       alert("Single trip deleted successfully");
//       // You can add additional logic here, such as refreshing the list of single trips
//     } catch (error) {
//       console.error(
//         "Failed to delete single trip:",
//         error.response.data.message
//       );
//       alert("Failed to delete single trip");
//     }
//   };

//   return (
//     <div>
//       <h2>Delete Single Trip</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Single Trip ID:
//           <input
//             type="text"
//             value={tripId}
//             onChange={(e) => setTripId(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Delete Single Trip</button>
//       </form>
//     </div>
//   );
// }

// export default DeleteSingleTripForm;
import React, { useState } from "react";
import axios from "axios";

function DeleteSingleTripForm() {
  const [tripId, setTripId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `https://travel-bice-five.vercel.app/api/singletrips/${tripId}`
      );
      setSuccessMessage("Single trip deleted successfully");
      setErrorMessage(""); // Clear any previous error message
      // You can add additional logic here, such as refreshing the list of single trips
    } catch (error) {
      console.error(
        "Failed to delete single trip:",
        error.response.data.message
      );
      setErrorMessage("Failed to delete single trip");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <div>
      <h2>Delete Single Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Single Trip ID:
          <input
            type="text"
            value={tripId}
            onChange={(e) => setTripId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Delete Single Trip</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default DeleteSingleTripForm;
