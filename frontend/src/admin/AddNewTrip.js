// import React, { useState } from "react";
// import axios from "axios";

// const AddTripForm = () => {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [images, setImages] = useState([]);
//   const [price, setPrice] = useState(0);
//   const [rating, setRating] = useState(0);
//   const [totalViews, setTotalViews] = useState(0);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/trips", {
//         id,
//         name,
//         images,
//         price,
//         rating,
//         totalViews,
//       });
//       alert("Trip created successfully");
//       setName("");
//       setImages([]);
//       setId("");
//       setPrice(0);
//       setRating(0);
//       setTotalViews(0);
//     } catch (error) {
//       console.error("Failed to create trip:", error);
//       alert("Failed to create trip");
//     }
//   };

//   const handleImageChange = (e, index) => {
//     const newImages = [...images];
//     newImages[index] = e.target.value;
//     setImages(newImages);
//   };

//   const addImageField = () => {
//     setImages([...images, ""]);
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
//           <label>Images</label>
//           {images.map((image, index) => (
//             <input
//               key={index}
//               type="text"
//               className="form-control"
//               value={image}
//               onChange={(e) => handleImageChange(e, index)}
//               required
//             />
//           ))}
//           {images.length < 5 && (
//             <button type="button" onClick={addImageField}>
//               Add Image
//             </button>
//           )}
//         </div>
//         <div className="form-group">
//           <label>Price</label>
//           <input
//             type="number"
//             className="form-control"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Rating</label>
//           <input
//             type="number"
//             className="form-control"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Total Views</label>
//           <input
//             type="number"
//             className="form-control"
//             value={totalViews}
//             onChange={(e) => setTotalViews(e.target.value)}
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
  const [famousPlace, setFamousPlace] = useState("");
  const [snowPlace, setSnowPlace] = useState("");

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
        famousPlace,
        snowPlace,
      });
      alert("Trip created successfully");
      setId("");
      setName("");
      setImages([]);
      setPrice(0);
      setRating(0);
      setTotalViews(0);
      setFamousPlace("");
      setSnowPlace("");
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
              className="form-control mb-2"
              value={image}
              onChange={(e) => handleImageChange(e, index)}
              required
            />
          ))}
          {images.length < 5 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={addImageField}
            >
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
        <div className="form-group">
          <label>Famous Place</label>
          <select
            className="form-control"
            value={famousPlace}
            onChange={(e) => setFamousPlace(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Snow Place</label>
          <select
            className="form-control"
            value={snowPlace}
            onChange={(e) => setSnowPlace(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTripForm;
