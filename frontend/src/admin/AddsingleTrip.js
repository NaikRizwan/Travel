// // // // import React, { useState } from "react";
// // // // import axios from "axios";

// // // // const AddSingleTrip = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     id: "",
// // // //     name: "",
// // // //     price: "",
// // // //     duration: "",
// // // //     rating: "",
// // // //     images: [], // Removing the initial 15 slots
// // // //     details: "",
// // // //     numberOfDays: "",
// // // //     highlights: "",
// // // //     accommodation: "",
// // // //     transportation: "",
// // // //     meals: "",
// // // //     guides: "",
// // // //     testimonials: [], // Changed testimonials to an array
// // // //   });

// // // //   const {
// // // //     id,
// // // //     name,
// // // //     price,
// // // //     duration,
// // // //     rating,
// // // //     images,
// // // //     details,
// // // //     numberOfDays,
// // // //     highlights,
// // // //     accommodation,
// // // //     transportation,
// // // //     meals,
// // // //     guides,
// // // //     testimonials, // Changed testimonials to an array
// // // //   } = formData;

// // // //   const onChange = (e) =>
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });

// // // //   const onImageChange = (index, e) => {
// // // //     const newImages = [...images];
// // // //     newImages[index] = e.target.value;
// // // //     setFormData({ ...formData, images: newImages });
// // // //   };

// // // //   const onSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await axios.post("/api/singletrips", formData);
// // // //       console.log(res.data); // Response from backend
// // // //     } catch (err) {
// // // //       console.error(err.response.data);
// // // //     }
// // // //   };

// // // //   const addImageField = () => {
// // // //     setFormData({ ...formData, images: [...images, ""] }); // Add one more slot
// // // //   };

// // // //   const addTestimonial = () => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       testimonials: [...testimonials, ""],
// // // //     });
// // // //   };

// // // //   const onTestimonialChange = (index, e) => {
// // // //     const newTestimonials = [...testimonials];
// // // //     newTestimonials[index] = e.target.value;
// // // //     setFormData({ ...formData, testimonials: newTestimonials });
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Add Single Trip</h2>
// // // //       <form onSubmit={onSubmit}>
// // // //         <div>
// // // //           <label>ID: </label>
// // // //           <input type="text" name="id" value={id} onChange={onChange} />
// // // //         </div>
// // // //         <div>
// // // //           <label>Name: </label>
// // // //           <input type="text" name="name" value={name} onChange={onChange} />
// // // //         </div>
// // // //         <div>
// // // //           <label>Price: </label>
// // // //           <input type="text" name="price" value={price} onChange={onChange} />
// // // //         </div>
// // // //         <div>
// // // //           <label>Duration: </label>
// // // //           <input
// // // //             type="text"
// // // //             name="duration"
// // // //             value={duration}
// // // //             onChange={onChange}
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label>Rating: </label>
// // // //           <input type="text" name="rating" value={rating} onChange={onChange} />
// // // //         </div>
// // // //         {/* <div>
// // // //           <label>Images: </label>
// // // //           {images.map((image, index) => (
// // // //             <input
// // // //               key={index}
// // // //               type="text"
// // // //               value={image}
// // // //               onChange={(e) => onImageChange(index, e)}
// // // //             />
// // // //           ))}
// // // //           <button type="button" onClick={addImageField}>
// // // //             Add Image
// // // //           </button>
// // // //         </div> */}
// // // //         <div>
// // // //           <label>Images: </label>
// // // //           {images.map((image, index) => (
// // // //             <div key={index}>
// // // //               <input
// // // //                 type="text"
// // // //                 value={image}
// // // //                 onChange={(e) => onImageChange(index, e)}
// // // //               />
// // // //             </div>
// // // //           ))}
// // // //           <button type="button" onClick={addImageField}>
// // // //             Add Image
// // // //           </button>
// // // //         </div>

// // // //         <div>
// // // //           <label>Details: </label>
// // // //           <textarea name="details" value={details} onChange={onChange} />
// // // //         </div>
// // // //         <div>
// // // //           <label>Number of Days: </label>
// // // //           <input
// // // //             type="text"
// // // //             name="numberOfDays"
// // // //             value={numberOfDays}
// // // //             onChange={onChange}
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label>Highlights: </label>
// // // //           <textarea
// // // //             name="highlights"
// // // //             value={highlights}
// // // //             onChange={onChange}
// // // //           ></textarea>
// // // //         </div>
// // // //         <div>
// // // //           <label>Accommodation: </label>
// // // //           <textarea
// // // //             name="accommodation"
// // // //             value={accommodation}
// // // //             onChange={onChange}
// // // //           ></textarea>
// // // //         </div>
// // // //         <div>
// // // //           <label>Transportation: </label>
// // // //           <textarea
// // // //             name="transportation"
// // // //             value={transportation}
// // // //             onChange={onChange}
// // // //           ></textarea>
// // // //         </div>
// // // //         <div>
// // // //           <label>Meals: </label>
// // // //           <textarea name="meals" value={meals} onChange={onChange}></textarea>
// // // //         </div>
// // // //         <div>
// // // //           <label>Guides: </label>
// // // //           <textarea name="guides" value={guides} onChange={onChange}></textarea>
// // // //         </div>
// // // //         <div>
// // // //           <label>Testimonials: </label>
// // // //           {testimonials.map((testimonial, index) => (
// // // //             <textarea
// // // //               key={index}
// // // //               value={testimonial}
// // // //               onChange={(e) => onTestimonialChange(index, e)}
// // // //             ></textarea>
// // // //           ))}
// // // //           <button type="button" onClick={addTestimonial}>
// // // //             Add Testimonial
// // // //           </button>
// // // //         </div>
// // // //         <button type="submit">Submit</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddSingleTrip;
// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // const AddSingleTrip = () => {
// // //   const [formData, setFormData] = useState({
// // //     id: "",
// // //     name: "",
// // //     price: "",
// // //     duration: "",
// // //     rating: "",
// // //     images: [],
// // //     details: "",
// // //     numberOfDays: "",
// // //     highlights: "",
// // //     accommodation: "",
// // //     transportation: "",
// // //     meals: "",
// // //     guides: "",
// // //     testimonials: [],
// // //   });

// // //   const {
// // //     id,
// // //     name,
// // //     price,
// // //     duration,
// // //     rating,
// // //     images,
// // //     details,
// // //     numberOfDays,
// // //     highlights,
// // //     accommodation,
// // //     transportation,
// // //     meals,
// // //     guides,
// // //     testimonials,
// // //   } = formData;

// // //   const onChange = (e) =>
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });

// // //   const onImageChange = (index, e) => {
// // //     const newImages = [...images];
// // //     newImages[index] = e.target.value;
// // //     setFormData({ ...formData, images: newImages });
// // //   };

// // //   const onTestimonialChange = (index, e) => {
// // //     const { name, value } = e.target;
// // //     const newTestimonials = [...testimonials];
// // //     newTestimonials[index] = {
// // //       ...newTestimonials[index],
// // //       [name]: value,
// // //     };
// // //     setFormData({ ...formData, testimonials: newTestimonials });
// // //   };

// // //   const onSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axios.post("/api/singletrips", formData);
// // //       console.log(res.data); // Response from backend
// // //     } catch (err) {
// // //       console.error(err.response.data);
// // //     }
// // //   };

// // //   const addImageField = () => {
// // //     setFormData({ ...formData, images: [...images, ""] });
// // //   };

// // //   const addTestimonial = () => {
// // //     setFormData({
// // //       ...formData,
// // //       testimonials: [...testimonials, { username: "", content: "" }],
// // //     });
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Add Single Trip</h2>
// // //       <form onSubmit={onSubmit}>
// // //         <div>
// // //           <label>ID: </label>
// // //           <input type="text" name="id" value={id} onChange={onChange} />
// // //         </div>
// // //         <div>
// // //           <label>Name: </label>
// // //           <input type="text" name="name" value={name} onChange={onChange} />
// // //         </div>
// // //         <div>
// // //           <label>Price: </label>
// // //           <input type="text" name="price" value={price} onChange={onChange} />
// // //         </div>
// // //         <div>
// // //           <label>Duration: </label>
// // //           <input
// // //             type="text"
// // //             name="duration"
// // //             value={duration}
// // //             onChange={onChange}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Rating: </label>
// // //           <input type="text" name="rating" value={rating} onChange={onChange} />
// // //         </div>
// // //         <div>
// // //           <label>Images: </label>
// // //           {images.map((image, index) => (
// // //             <div key={index}>
// // //               <input
// // //                 type="text"
// // //                 value={image}
// // //                 onChange={(e) => onImageChange(index, e)}
// // //               />
// // //             </div>
// // //           ))}
// // //           <button type="button" onClick={addImageField}>
// // //             Add Image
// // //           </button>
// // //         </div>
// // //         <div>
// // //           <label>Details: </label>
// // //           <textarea name="details" value={details} onChange={onChange} />
// // //         </div>
// // //         <div>
// // //           <label>Number of Days: </label>
// // //           <input
// // //             type="text"
// // //             name="numberOfDays"
// // //             value={numberOfDays}
// // //             onChange={onChange}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Highlights: </label>
// // //           <textarea
// // //             name="highlights"
// // //             value={highlights}
// // //             onChange={onChange}
// // //           ></textarea>
// // //         </div>
// // //         <div>
// // //           <label>Accommodation: </label>
// // //           <textarea
// // //             name="accommodation"
// // //             value={accommodation}
// // //             onChange={onChange}
// // //           ></textarea>
// // //         </div>
// // //         <div>
// // //           <label>Transportation: </label>
// // //           <textarea
// // //             name="transportation"
// // //             value={transportation}
// // //             onChange={onChange}
// // //           ></textarea>
// // //         </div>
// // //         <div>
// // //           <label>Meals: </label>
// // //           <textarea name="meals" value={meals} onChange={onChange}></textarea>
// // //         </div>
// // //         <div>
// // //           <label>Guides: </label>
// // //           <textarea name="guides" value={guides} onChange={onChange}></textarea>
// // //         </div>
// // //         <div>
// // //           <label>Testimonials: </label>
// // //           {testimonials.map((testimonial, index) => (
// // //             <div key={index}>
// // //               <input
// // //                 type="text"
// // //                 name="username"
// // //                 placeholder="Username"
// // //                 value={testimonial.username}
// // //                 onChange={(e) => onTestimonialChange(index, e)}
// // //               />
// // //               <textarea
// // //                 name="content"
// // //                 placeholder="Testimonial"
// // //                 value={testimonial.content}
// // //                 onChange={(e) => onTestimonialChange(index, e)}
// // //               ></textarea>
// // //             </div>
// // //           ))}
// // //           <button type="button" onClick={addTestimonial}>
// // //             Add Testimonial
// // //           </button>
// // //         </div>
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AddSingleTrip;
// // import React, { useState } from "react";
// // import axios from "axios";
// // import styled from "styled-components";

// // const FormContainer = styled.div`
// //   max-width: 800px;
// //   margin: 2rem auto;
// //   padding: 2rem;
// //   background: #fff;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// // `;

// // const Form = styled.form`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const FormGroup = styled.div`
// //   margin-bottom: 1rem;
// // `;

// // const Label = styled.label`
// //   font-weight: bold;
// //   margin-bottom: 0.5rem;
// //   display: block;
// // `;

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 0.5rem;
// //   border: 1px solid #ccc;
// //   border-radius: 5px;
// // `;

// // const Textarea = styled.textarea`
// //   width: 100%;
// //   padding: 0.5rem;
// //   border: 1px solid #ccc;
// //   border-radius: 5px;
// // `;

// // const Button = styled.button`
// //   padding: 1rem;
// //   background: #007bff;
// //   color: #fff;
// //   border: none;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   font-size: 1.2rem;
// //   &:hover {
// //     background: #0056b3;
// //   }
// // `;

// // const AddSingleTrip = () => {
// //   const [formData, setFormData] = useState({
// //     id: "",
// //     name: "",
// //     price: "",
// //     duration: "",
// //     rating: "",
// //     images: [],
// //     details: "",
// //     numberOfDays: "",
// //     highlights: "",
// //     accommodation: "",
// //     transportation: "",
// //     meals: "",
// //     guides: "",
// //     testimonials: [],
// //   });

// //   const {
// //     id,
// //     name,
// //     price,
// //     duration,
// //     rating,
// //     images,
// //     details,
// //     numberOfDays,
// //     highlights,
// //     accommodation,
// //     transportation,
// //     meals,
// //     guides,
// //     testimonials,
// //   } = formData;

// //   const onChange = (e) =>
// //     setFormData({ ...formData, [e.target.name]: e.target.value });

// //   const onImageChange = (index, e) => {
// //     const newImages = [...images];
// //     newImages[index] = e.target.value;
// //     setFormData({ ...formData, images: newImages });
// //   };

// //   const onTestimonialChange = (index, e) => {
// //     const { name, value } = e.target;
// //     const newTestimonials = [...testimonials];
// //     newTestimonials[index] = {
// //       ...newTestimonials[index],
// //       [name]: value,
// //     };
// //     setFormData({ ...formData, testimonials: newTestimonials });
// //   };

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post("/api/singletrips", formData);
// //       console.log(res.data); // Response from backend
// //     } catch (err) {
// //       console.error(err.response.data);
// //     }
// //   };

// //   const addImageField = () => {
// //     setFormData({ ...formData, images: [...images, ""] });
// //   };

// //   const addTestimonial = () => {
// //     setFormData({
// //       ...formData,
// //       testimonials: [...testimonials, { username: "", content: "" }],
// //     });
// //   };

// //   return (
// //     <FormContainer>
// //       <h2>Add Single Trip</h2>
// //       <Form onSubmit={onSubmit}>
// //         <FormGroup>
// //           <Label>ID:</Label>
// //           <Input type="text" name="id" value={id} onChange={onChange} />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Name:</Label>
// //           <Input type="text" name="name" value={name} onChange={onChange} />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Price:</Label>
// //           <Input type="text" name="price" value={price} onChange={onChange} />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Duration:</Label>
// //           <Input
// //             type="text"
// //             name="duration"
// //             value={duration}
// //             onChange={onChange}
// //           />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Rating:</Label>
// //           <Input type="text" name="rating" value={rating} onChange={onChange} />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Images:</Label>
// //           {images.map((image, index) => (
// //             <div key={index}>
// //               <Input
// //                 type="text"
// //                 value={image}
// //                 onChange={(e) => onImageChange(index, e)}
// //               />
// //             </div>
// //           ))}
// //           <Button type="button" onClick={addImageField}>
// //             Add Image
// //           </Button>
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Details:</Label>
// //           <Textarea name="details" value={details} onChange={onChange} />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Number of Days:</Label>
// //           <Input
// //             type="text"
// //             name="numberOfDays"
// //             value={numberOfDays}
// //             onChange={onChange}
// //           />
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Highlights:</Label>
// //           <Textarea
// //             name="highlights"
// //             value={highlights}
// //             onChange={onChange}
// //           ></Textarea>
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Accommodation:</Label>
// //           <Textarea
// //             name="accommodation"
// //             value={accommodation}
// //             onChange={onChange}
// //           ></Textarea>
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Transportation:</Label>
// //           <Textarea
// //             name="transportation"
// //             value={transportation}
// //             onChange={onChange}
// //           ></Textarea>
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Meals:</Label>
// //           <Textarea name="meals" value={meals} onChange={onChange}></Textarea>
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Guides:</Label>
// //           <Textarea name="guides" value={guides} onChange={onChange}></Textarea>
// //         </FormGroup>
// //         <FormGroup>
// //           <Label>Testimonials:</Label>
// //           {testimonials.map((testimonial, index) => (
// //             <div key={index}>
// //               <Input
// //                 type="text"
// //                 name="username"
// //                 placeholder="Username"
// //                 value={testimonial.username}
// //                 onChange={(e) => onTestimonialChange(index, e)}
// //               />
// //               <Textarea
// //                 name="content"
// //                 placeholder="Testimonial"
// //                 value={testimonial.content}
// //                 onChange={(e) => onTestimonialChange(index, e)}
// //               ></Textarea>
// //             </div>
// //           ))}
// //           <Button type="button" onClick={addTestimonial}>
// //             Add Testimonial
// //           </Button>
// //         </FormGroup>
// //         <Button type="submit">Submit</Button>
// //       </Form>
// //     </FormContainer>
// //   );
// // };

// // export default AddSingleTrip;
// import React, { useState } from "react";
// import axios from "axios";
// import styled from "styled-components";

// const FormContainer = styled.div`
//   max-width: 800px;
//   margin: 2rem auto;
//   padding: 2rem;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1rem;
// `;

// const Label = styled.label`
//   font-weight: bold;
//   margin-bottom: 0.5rem;
//   display: block;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 1rem;
//   background: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1.2rem;
//   &:hover {
//     background: #0056b3;
//   }
// `;

// const AddSingleTrip = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     price: "",
//     duration: "",
//     rating: "",
//     images: [],
//     details: "",
//     numberOfDays: "",
//     highlights: [""],
//     accommodation: [""],
//     transportation: [""],
//     meals: "",
//     guides: "",
//     testimonials: [],
//   });

//   const {
//     id,
//     name,
//     price,
//     duration,
//     rating,
//     images,
//     details,
//     numberOfDays,
//     highlights,
//     accommodation,
//     transportation,
//     meals,
//     guides,
//     testimonials,
//   } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onArrayChange = (index, e, fieldName) => {
//     const newArray = [...formData[fieldName]];
//     newArray[index] = e.target.value;
//     setFormData({ ...formData, [fieldName]: newArray });
//   };

//   const addArrayField = (fieldName) => {
//     setFormData({ ...formData, [fieldName]: [...formData[fieldName], ""] });
//   };

//   const onImageChange = (index, e) => {
//     const newImages = [...images];
//     newImages[index] = e.target.value;
//     setFormData({ ...formData, images: newImages });
//   };

//   const onTestimonialChange = (index, e) => {
//     const { name, value } = e.target;
//     const newTestimonials = [...testimonials];
//     newTestimonials[index] = {
//       ...newTestimonials[index],
//       [name]: value,
//     };
//     setFormData({ ...formData, testimonials: newTestimonials });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/singletrips", formData);
//       console.log(res.data); // Response from backend
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   const addTestimonial = () => {
//     setFormData({
//       ...formData,
//       testimonials: [...testimonials, { username: "", content: "" }],
//     });
//   };

//   return (
//     <FormContainer>
//       <h2>Add Single Trip</h2>
//       <Form onSubmit={onSubmit}>
//         <FormGroup>
//           <Label>ID:</Label>
//           <Input type="text" name="id" value={id} onChange={onChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Name:</Label>
//           <Input type="text" name="name" value={name} onChange={onChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Price:</Label>
//           <Input type="text" name="price" value={price} onChange={onChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Duration:</Label>
//           <Input
//             type="text"
//             name="duration"
//             value={duration}
//             onChange={onChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Rating:</Label>
//           <Input type="text" name="rating" value={rating} onChange={onChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Images:</Label>
//           {images.map((image, index) => (
//             <div key={index}>
//               <Input
//                 type="text"
//                 value={image}
//                 onChange={(e) => onImageChange(index, e)}
//               />
//             </div>
//           ))}
//           <Button type="button" onClick={() => addArrayField("images")}>
//             Add Image
//           </Button>
//         </FormGroup>
//         <FormGroup>
//           <Label>Details:</Label>
//           <Textarea name="details" value={details} onChange={onChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Number of Days:</Label>
//           <Input
//             type="text"
//             name="numberOfDays"
//             value={numberOfDays}
//             onChange={onChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Highlights:</Label>
//           {highlights.map((highlight, index) => (
//             <div key={index}>
//               <Textarea
//                 value={highlight}
//                 onChange={(e) => onArrayChange(index, e, "highlights")}
//               ></Textarea>
//             </div>
//           ))}
//           <Button type="button" onClick={() => addArrayField("highlights")}>
//             Add Highlight
//           </Button>
//         </FormGroup>
//         <FormGroup>
//           <Label>Accommodation:</Label>
//           {accommodation.map((item, index) => (
//             <div key={index}>
//               <Textarea
//                 value={item}
//                 onChange={(e) => onArrayChange(index, e, "accommodation")}
//               ></Textarea>
//             </div>
//           ))}
//           <Button type="button" onClick={() => addArrayField("accommodation")}>
//             Add Accommodation
//           </Button>
//         </FormGroup>
//         <FormGroup>
//           <Label>Transportation:</Label>
//           {transportation.map((item, index) => (
//             <div key={index}>
//               <Textarea
//                 value={item}
//                 onChange={(e) => onArrayChange(index, e, "transportation")}
//               ></Textarea>
//             </div>
//           ))}
//           <Button type="button" onClick={() => addArrayField("transportation")}>
//             Add Transportation
//           </Button>
//         </FormGroup>
//         <FormGroup>
//           <Label>Meals:</Label>
//           <Textarea name="meals" value={meals} onChange={onChange}></Textarea>
//         </FormGroup>
//         <FormGroup>
//           <Label>Guides:</Label>
//           <Textarea name="guides" value={guides} onChange={onChange}></Textarea>
//         </FormGroup>
//         <FormGroup>
//           <Label>Testimonials:</Label>
//           {testimonials.map((testimonial, index) => (
//             <div key={index}>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={testimonial.username}
//                 onChange={(e) => onTestimonialChange(index, e)}
//               />
//               <Textarea
//                 name="content"
//                 placeholder="Testimonial"
//                 value={testimonial.content}
//                 onChange={(e) => onTestimonialChange(index, e)}
//               ></Textarea>
//             </div>
//           ))}
//           <Button type="button" onClick={addTestimonial}>
//             Add Testimonial
//           </Button>
//         </FormGroup>
//         <Button type="submit">Submit</Button>
//       </Form>
//     </FormContainer>
//   );
// };

// export default AddSingleTrip;
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background: #0056b3;
  }
`;

const AddSingleTrip = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    duration: "",
    rating: "",
    images: [],
    details: "",
    numberOfDays: "",
    highlights: [""],
    accommodation: [""],
    transportation: [{ type: "", details: "" }],
    meals: "",
    guides: [{ name: "", image: "", phone: "", email: "" }],
    testimonials: [],
    hotels: [{ name: "", image: "", address: "" }],
  });

  const {
    id,
    name,
    price,
    duration,
    rating,
    images,
    details,
    numberOfDays,
    highlights,
    accommodation,
    transportation,
    meals,
    guides,
    testimonials,
    hotels,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onArrayChange = (index, e, fieldName) => {
    const newArray = [...formData[fieldName]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [fieldName]: newArray });
  };

  const addArrayField = (fieldName) => {
    setFormData({ ...formData, [fieldName]: [...formData[fieldName], ""] });
  };

  const onImageChange = (index, e) => {
    const newImages = [...images];
    newImages[index] = e.target.value;
    setFormData({ ...formData, images: newImages });
  };

  const onTestimonialChange = (index, e) => {
    const { name, value } = e.target;
    const newTestimonials = [...testimonials];
    newTestimonials[index] = {
      ...newTestimonials[index],
      [name]: value,
    };
    setFormData({ ...formData, testimonials: newTestimonials });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://travel-bice-five.vercel.app/api/singletrips",
        formData
      );
      console.log(res.data); // Response from backend
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const addTestimonial = () => {
    setFormData({
      ...formData,
      testimonials: [...testimonials, { username: "", content: "" }],
    });
  };

  const onGuideChange = (index, e) => {
    const { name, value } = e.target;
    const newGuides = [...guides];
    newGuides[index] = {
      ...newGuides[index],
      [name]: value,
    };
    setFormData({ ...formData, guides: newGuides });
  };

  const addGuide = () => {
    setFormData({
      ...formData,
      guides: [...guides, { name: "", image: "", phone: "", email: "" }],
    });
  };

  const onTransportChange = (index, e) => {
    const { name, value } = e.target;
    const newTransport = [...transportation];
    newTransport[index] = {
      ...newTransport[index],
      [name]: value,
    };
    setFormData({ ...formData, transportation: newTransport });
  };

  const addTransport = () => {
    setFormData({
      ...formData,
      transportation: [...transportation, { type: "", details: "" }],
    });
  };

  const onHotelChange = (index, e) => {
    const { name, value } = e.target;
    const newHotels = [...hotels];
    newHotels[index] = {
      ...newHotels[index],
      [name]: value,
    };
    setFormData({ ...formData, hotels: newHotels });
  };

  const addHotel = () => {
    setFormData({
      ...formData,
      hotels: [...hotels, { name: "", image: "", address: "" }],
    });
  };

  return (
    <FormContainer>
      <h2>Add Single Trip</h2>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>ID:</Label>
          <Input type="text" name="id" value={id} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" name="name" value={name} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label>Price:</Label>
          <Input type="text" name="price" value={price} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label>Duration:</Label>
          <Input
            type="text"
            name="duration"
            value={duration}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Rating:</Label>
          <Input type="text" name="rating" value={rating} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label>Images:</Label>
          {images.map((image, index) => (
            <div key={index}>
              <Input
                type="text"
                value={image}
                onChange={(e) => onImageChange(index, e)}
              />
            </div>
          ))}
          <Button type="button" onClick={() => addArrayField("images")}>
            Add Image
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>Details:</Label>
          <Textarea name="details" value={details} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label>Number of Days:</Label>
          <Input
            type="text"
            name="numberOfDays"
            value={numberOfDays}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Highlights:</Label>
          {highlights.map((highlight, index) => (
            <div key={index}>
              <Textarea
                value={highlight}
                onChange={(e) => onArrayChange(index, e, "highlights")}
              ></Textarea>
            </div>
          ))}
          <Button type="button" onClick={() => addArrayField("highlights")}>
            Add Highlight
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>Accommodation:</Label>
          {accommodation.map((acc, index) => (
            <div key={index}>
              <Textarea
                value={acc}
                onChange={(e) => onArrayChange(index, e, "accommodation")}
              ></Textarea>
            </div>
          ))}
          <Button type="button" onClick={() => addArrayField("accommodation")}>
            Add Accommodation
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>Meals:</Label>
          <Textarea name="meals" value={meals} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label>Guides:</Label>
          {guides.map((guide, index) => (
            <div key={index}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={guide.name}
                onChange={(e) => onGuideChange(index, e)}
              />
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                value={guide.image}
                onChange={(e) => onGuideChange(index, e)}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone"
                value={guide.phone}
                onChange={(e) => onGuideChange(index, e)}
              />
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={guide.email}
                onChange={(e) => onGuideChange(index, e)}
              />
            </div>
          ))}
          <Button type="button" onClick={addGuide}>
            Add Guide
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>Transportation:</Label>
          {transportation.map((transport, index) => (
            <div key={index}>
              <Input
                type="text"
                name="type"
                placeholder="Type"
                value={transport.type}
                onChange={(e) => onTransportChange(index, e)}
              />
              <Input
                type="text"
                name="details"
                placeholder="Details"
                value={transport.details}
                onChange={(e) => onTransportChange(index, e)}
              />
            </div>
          ))}
          <Button type="button" onClick={addTransport}>
            Add Transport
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>Hotels:</Label>
          {hotels.map((hotel, index) => (
            <div key={index}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={hotel.name}
                onChange={(e) => onHotelChange(index, e)}
              />
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                value={hotel.image}
                onChange={(e) => onHotelChange(index, e)}
              />
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={hotel.address}
                onChange={(e) => onHotelChange(index, e)}
              />
            </div>
          ))}
          <Button type="button" onClick={addHotel}>
            Add Hotel
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>Testimonials:</Label>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={testimonial.username}
                onChange={(e) => onTestimonialChange(index, e)}
              />
              <Textarea
                name="content"
                placeholder="Content"
                value={testimonial.content}
                onChange={(e) => onTestimonialChange(index, e)}
              />
            </div>
          ))}
          <Button type="button" onClick={addTestimonial}>
            Add Testimonial
          </Button>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default AddSingleTrip;
