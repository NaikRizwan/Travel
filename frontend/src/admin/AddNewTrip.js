// // components/AddTripForm.js
// import React, { useState } from "react";
// import axios from "axios";

// const AddTripForm = () => {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [rate, setRate] = useState(0);
//   const [details, setDetails] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/trips", { id, name, image, rate, details });
//       alert("Trip created successfully");
//       setName("");
//       setImage("");
//       setId("");
//       setRate(0);
//       setDetails("");
//     } catch (error) {
//       console.error("Failed to create trip:", error);
//       alert("Failed to create trip");
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Trip</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Unique Id</label>
//           <input
//             type="text"
//             className="form-control"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Image URL</label>
//           <input
//             type="text"
//             className="form-control"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Rate</label>
//           <input
//             type="number"
//             className="form-control"
//             value={rate}
//             onChange={(e) => setRate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Details</label>
//           <textarea
//             className="form-control"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Place</label>
//           <textarea
//             className="form-control"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTripForm;
import React, { useState } from "react";
import axios from "axios";

const AddTripForm = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [totalViews, setTotalViews] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/trips", {
        id,
        name,
        images,
        price,
        rating,
        totalViews,
      });
      alert("Trip created successfully");
      setName("");
      setImages([]);
      setId("");
      setPrice(0);
      setRating(0);
      setTotalViews(0);
    } catch (error) {
      console.error("Failed to create trip:", error);
      alert("Failed to create trip");
    }
  };

  const handleImageChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.value;
    setImages(newImages);
  };

  const addImageField = () => {
    setImages([...images, ""]);
  };

  return (
    <div>
      <h2>Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Unique Id</label>
          <input
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Images</label>
          {images.map((image, index) => (
            <input
              key={index}
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => handleImageChange(e, index)}
              required
            />
          ))}
          {images.length < 5 && (
            <button type="button" onClick={addImageField}>
              Add Image
            </button>
          )}
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Views</label>
          <input
            type="number"
            className="form-control"
            value={totalViews}
            onChange={(e) => setTotalViews(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTripForm;
