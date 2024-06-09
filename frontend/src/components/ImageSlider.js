// // ImageSlider.js
// import React, { useState, useEffect } from "react";

// import styled from "styled-components";

// const Wrapper = styled.section`
//   /* ImageSlider.css */
//   .image-slider {
//     text-align: center;
//     margin-top: -48px;
//   }
//   .welcome-text {
//     font-size: 2.1rem;
//     font-family: cursive;
//     color: white;
//     text-shadow: 0px -7px 2px rgba(1, 7, 8, 1.5);
//     background: linear-gradient(to right, red, green, blue);

//     border-radius: 10px;
//     display: inline-block;
//     z-index: 1;
//     top: 84px;
//     position: relative;
//     animation: fadeIn 2s ease-in-out;
//   }

//   @keyframes fadeIn {
//     0% {
//       opacity: 0;
//       transform: scale(0.8);
//     }
//     100% {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }
//   //   .welcome-text {
//   //     font-size: 2rem;
//   //     z-index: 1;
//   //     position: relative;
//   //     font-family: emoji;
//   //     top: 84px;
//   //     background-size: text;
//   //     font-weight: bold;
//   //   }

//   .image-container {
//     position: relative;
//     overflow: hidden;
//     width: 100%;
//   }

//   img {
//     width: 100%;
//     height: 500px;
//     transition: transform 0.5s ease-in-out;
//   }

//   .prev-btn,
//   .next-btn {
//     position: absolute;
//     top: 50%;
//     font-weight: bold;
//     font-family: monospace;
//     border-radius: 6px;
//     font-size: 1.1rem;
//     cursor: pointer;
//     color: rrfff;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding: 10px;
//     border: none;
//     outline: none;
//     transition: background-color 0.3s ease-in-out;
//   }

//   .prev-btn:hover,
//   .next-btn:hover {
//     background-color: rgba(0, 0, 0, 0.8);
//   }

//   .prev-btn {
//     left: 10px;
//   }

//   .next-btn {
//     right: 10px;
//   }
//   .btn {
//     position: relative;
//     bottom: 70px;
//   }
// `;
// const ImageSlider = () => {
//   const images = [
//     "https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg",
//     "https://d3nn873nee648n.cloudfront.net/900x600/3636/3-SS114845.jpg",
//     "https://d3nn873nee648n.cloudfront.net/900x600/2621/20-SM100010.jpg",
//   ]; // Replace with actual image paths

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 15000); // Change the interval time (in milliseconds) as needed

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handlePrevClick = () => {
//     setCurrentImage(
//       (prevImage) => (prevImage - 1 + images.length) % images.length
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//   };

//   return (
//     <Wrapper>
//       <div className="image-slider">
//         <div className="welcome-text">Welcome to Jammu and Kashmir</div>
//         <div className="image-container">
//           <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
//           <div className="prev-btn" onClick={handlePrevClick}>
//             &lt; Prev
//           </div>
//           <div className="next-btn" onClick={handleNextClick}>
//             Next &gt;
//           </div>
//         </div>
//         <div className="btn">
//           <button className="button-3d">Book Now</button>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default ImageSlider;
// import React from "react";
// import styled from "styled-components";
// import { MdOutlineNavigateNext } from "react-icons/md";
// import { MdOutlineNavigateBefore } from "react-icons/md";
// const Wrapper = styled.section`
//   .owl-carousel,
//   .owl-carousel .owl-item {
//     -webkit-tap-highlight-color: transparent;
//     position: relative;
//   }

//   .owl-carousel {
//     display: none;
//     width: 100%;
//     z-index: 1;
//   }

//   .owl-carousel .owl-stage {
//     position: relative;
//     -ms-touch-action: pan-Y;
//     -moz-backface-visibility: hidden;
//   }

//   .owl-carousel .owl-stage:after {
//     content: ".";
//     display: block;
//     clear: both;
//     visibility: hidden;
//     line-height: 0;
//     height: 0;
//   }

//   .owl-carousel .owl-stage-outer {
//     position: relative;
//     overflow: hidden;
//     -webkit-transform: translate3d(0, 0, 0);
//   }

//   .owl-carousel .owl-item {
//     -webkit-backface-visibility: hidden;
//     -moz-backface-visibility: hidden;
//     -ms-backface-visibility: hidden;
//     -webkit-transform: translate3d(0, 0, 0);
//     -moz-transform: translate3d(0, 0, 0);
//     -ms-transform: translate3d(0, 0, 0);
//   }

//   .owl-carousel .owl-item {
//     min-height: 1px;
//     float: left;
//     -webkit-backface-visibility: hidden;
//     -webkit-touch-callout: none;
//   }

//   .owl-carousel .owl-item img {
//     display: block;
//     width: 100%;
//   }

//   .owl-carousel .owl-dots.disabled,
//   .owl-carousel .owl-nav.disabled {
//     display: none;
//   }

//   .no-js .owl-carousel,
//   .owl-carousel.owl-loaded {
//     display: block;
//   }

//   .owl-carousel .owl-dot,
//   .owl-carousel .owl-nav .owl-next,
//   .owl-carousel .owl-nav .owl-prev {
//     cursor: pointer;
//     cursor: hand;
//     -webkit-user-select: none;
//     -khtml-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//   }

//   .owl-carousel.owl-loading {
//     opacity: 0;
//     display: block;
//   }

//   .owl-carousel.owl-hidden {
//     opacity: 0;
//   }

//   .owl-carousel.owl-refresh .owl-item {
//     visibility: hidden;
//   }

//   .owl-carousel.owl-drag .owl-item {
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//   }

//   .owl-carousel.owl-grab {
//     cursor: move;
//     cursor: grab;
//   }

//   .owl-carousel.owl-rtl {
//     direction: rtl;
//   }

//   .owl-carousel.owl-rtl .owl-item {
//     float: right;
//   }

//   .owl-carousel .animated {
//     animation-duration: 1s;
//     animation-fill-mode: both;
//   }

//   .owl-carousel .owl-animated-in {
//     z-index: 0;
//   }

//   .owl-carousel .owl-animated-out {
//     z-index: 1;
//   }

//   .owl-carousel .fadeOut {
//     animation-name: fadeOut;
//   }

//   @keyframes fadeOut {
//     0% {
//       opacity: 1;
//     }

//     100% {
//       opacity: 0;
//     }
//   }

//   .owl-height {
//     transition: height 0.5s ease-in-out;
//   }

//   .owl-carousel .owl-item .owl-lazy {
//     opacity: 0;
//     transition: opacity 0.4s ease;
//   }

//   .owl-carousel .owl-item img.owl-lazy {
//     transform-style: preserve-3d;
//   }

//   .owl-carousel .owl-video-wrapper {
//     position: relative;
//     height: 100%;
//     background: #000;
//   }

//   .owl-carousel .owl-video-play-icon {
//     position: absolute;
//     height: 80px;
//     width: 80px;
//     left: 50%;
//     top: 50%;
//     margin-left: -40px;
//     margin-top: -40px;
//     background: url(owl.video.play.png) no-repeat;
//     cursor: pointer;
//     z-index: 1;
//     -webkit-backface-visibility: hidden;
//     transition: transform 0.1s ease;
//   }

//   .owl-carousel .owl-video-play-icon:hover {
//     -ms-transform: scale(1.3, 1.3);
//     transform: scale(1.3, 1.3);
//   }

//   .owl-carousel .owl-video-playing .owl-video-play-icon,
//   .owl-carousel .owl-video-playing .owl-video-tn {
//     display: none;
//   }

//   .owl-carousel .owl-video-tn {
//     opacity: 0;
//     height: 100%;
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-size: contain;
//     transition: opacity 0.4s ease;
//   }

//   .owl-carousel .owl-video-frame {
//     position: relative;
//     z-index: 1;
//     height: 100%;
//     width: 100%;
//   }
//   /* line 1, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_bg_1 {
//     background-image: url("https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg");
//   }

//   /* line 4, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_bg_2 {
//     background-image: url("https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg");
//   }

//   /* line 7, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_bg_3 {
//     background-image: url("https://d3nn873nee648n.cloudfront.net/900x600/3636/3-SS114845.jpg");
//   }

//   /* line 10, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_area {
//     position: relative;
//     z-index: 0;
//   }

//   /* line 23, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_area .single_slider {
//     height: 650px;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center center;
//   }

//   @media (max-width: 767px) {
//     /* line 23, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider {
//       height: auto;
//     }
//   }

//   @media (min-width: 768px) and (max-width: 991px) {
//     /* line 23, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider {
//       height: 600px;
//     }
//   }

//   @media (max-width: 767px) {
//     /* line 34, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider .slider_text {
//       margin: 100px 0 50px 0;
//     }
//   }

//   /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_area .single_slider .slider_text h3 {
//     font-family: "Nothing You Could Do", cursive;
//     font-size: 150px;
//     text-transform: capitalize;
//     font-weight: 400;
//     line-height: 0.5;
//     color: #fff;
//     margin-bottom: 0;
//   }

//   @media (max-width: 767px) {
//     /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider .slider_text h3 {
//       font-size: 50px;
//     }
//   }

//   @media (min-width: 768px) and (max-width: 991px) {
//     /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider .slider_text h3 {
//       font-size: 94px;
//     }
//   }

//   @media (min-width: 992px) and (max-width: 1200px) {
//     /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider .slider_text h3 {
//       font-size: 100px;
//     }
//   }

//   @media (min-width: 1200px) and (max-width: 1500px) {
//     /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider .slider_text h3 {
//       font-size: 120px;
//     }
//   }

//   /* line 62, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_area .single_slider .slider_text p {
//     font-size: 20px;
//     font-weight: 400;
//     color: #fff;
//     margin-top: 33px;
//     margin-bottom: 49px;
//   }

//   @media (max-width: 767px) {
//     /* line 62, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//     .slider_area .single_slider .slider_text p {
//       font-size: 18px;
//       margin-top: 20px;
//       margin-bottom: 20px;
//     }
//   }

//   /* line 79, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_area .owl-carousel .owl-nav div {
//     height: 120px;
//     left: 0px;
//     width: 50px;
//     color: #fff;
//     background-color: transparent;
//     -webkit-border-radius: 0;
//     -moz-border-radius: 0;
//     border-radius: 0;
//     left: 50px;
//     font-size: 14px;
//     border: none;
//     left: 150px;
//     line-height: 120px;
//     background: rgba(255, 255, 255, 0.2);
//     left: 0;
//     border: none !important;
//   }

//   /* line 94, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_area .owl-carousel .owl-nav div.owl-next {
//     right: 0;
//     left: auto;
//   }

//   /* line 98, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
//   .slider_area .owl-carousel .owl-nav div:hover {
//     background: white;
//     color: #001d38;
//     border: none;
//   }
//   .boxed-btn3 {
//     background: #1ec6b6;
//     color: #fff;
//     display: inline-block;
//     padding: 18px 41px;
//     font-family: "Rubik", sans-serif;
//     font-size: 16px;
//     font-weight: 500;
//     border: 0;
//     -webkit-border-radius: 5px;
//     -moz-border-radius: 5px;
//     border-radius: 5px;
//     text-align: center;
//     text-transform: capitalize;
//     -webkit-transition: 0.3s;
//     -moz-transition: 0.3s;
//     -o-transition: 0.3s;
//     transition: 0.3s;
//     cursor: pointer;
//   }

//   /* line 42, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_btn.scss */
//   .boxed-btn3:hover {
//     background: #ff4a52;
//     color: #fff !important;
//   }

//   /* line 46, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_btn.scss */
//   .boxed-btn3:focus {
//     outline: none;
//   }
// `;
// const ImageSlider = () => {
//   return (
//     <Wrapper>
//       <div class="slider_area">
//         <div class="slider_active owl-carousel owl-loaded owl-drag">
//           <div class="owl-stage-outer">
//             <div
//               class="owl-stage"
//               style={{
//                 transform: "translate3d(-2698px, 0px, 0px)",
//                 transition: "all 0s ease 0s",
//                 width: "9443px",
//               }}
//             >
//               <div class="owl-item cloned" style={{ width: "1349px" }}>
//                 <div class="single_slider  d-flex align-items-center slider_bg_2 overlay">
//                   <div class="container">
//                     <div class="row align-items-center">
//                       <div class="col-xl-12 col-md-12">
//                         <div class="slider_text text-center">
//                           <h3>Australia</h3>
//                           <p>Pixel perfect design with awesome contents</p>
//                           <a href="rr" class="boxed-btn3">
//                             Explore Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="owl-item cloned" style={{ width: "1349px" }}>
//                 <div class="single_slider  d-flex align-items-center slider_bg_3 overlay">
//                   <div class="container">
//                     <div class="row align-items-center">
//                       <div class="col-xl-12 col-md-12">
//                         <div class="slider_text text-center">
//                           <h3>Switzerland</h3>
//                           <p>Pixel perfect design with awesome contents</p>
//                           <a href="rr" class="boxed-btn3">
//                             Explore Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="owl-item active" style={{ width: "1349px" }}>
//                 <div class="single_slider  d-flex align-items-center slider_bg_1 overlay">
//                   <div class="container">
//                     <div class="row align-items-center">
//                       <div class="col-xl-12 col-md-12">
//                         <div class="slider_text text-center">
//                           <h3>Indonesia</h3>
//                           <p>Pixel perfect design with awesome contents</p>
//                           <a href="rr" class="boxed-btn3">
//                             Explore Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="owl-item" style={{ width: "1349px" }}>
//                 <div class="single_slider  d-flex align-items-center slider_bg_2 overlay">
//                   <div class="container">
//                     <div class="row align-items-center">
//                       <div class="col-xl-12 col-md-12">
//                         <div class="slider_text text-center">
//                           <h3>Australia</h3>
//                           <p>Pixel perfect design with awesome contents</p>
//                           <a href="rr" class="boxed-btn3">
//                             Explore Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="owl-item" style={{ width: "1349px" }}>
//                 <div class="single_slider  d-flex align-items-center slider_bg_3 overlay">
//                   <div class="container">
//                     <div class="row align-items-center">
//                       <div class="col-xl-12 col-md-12">
//                         <div class="slider_text text-center">
//                           <h3>Switzerland</h3>
//                           <p>Pixel perfect design with awesome contents</p>
//                           <a href="rr" class="boxed-btn3">
//                             Explore Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="owl-item cloned" style={{ width: "1349px" }}>
//                 <div class="single_slider  d-flex align-items-center slider_bg_1 overlay">
//                   <div class="container">
//                     <div class="row align-items-center">
//                       <div class="col-xl-12 col-md-12">
//                         <div class="slider_text text-center">
//                           <h3>Indonesia</h3>
//                           <p>Pixel perfect design with awesome contents</p>
//                           <a href="rr" class="boxed-btn3">
//                             Explore Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="owl-item cloned" style={{ width: "1349px" }}>
//                 <div class="single_slider  d-flex align-items-center slider_bg_2 overlay">
//                   <div class="container">
//                     <div class="row align-items-center">
//                       <div class="col-xl-12 col-md-12">
//                         <div class="slider_text text-center">
//                           <h3>Australia</h3>
//                           <p>Pixel perfect design with awesome contents</p>
//                           <a href="rr" class="boxed-btn3">
//                             Explore Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="owl-nav">
//             <div class="owl-prev">
//               {/* <i class="ti-angle-left"></i> */}
//               <MdOutlineNavigateBefore />
//             </div>
//             <div class="owl-next">
//               {/* <i class="ti-angle-right"></i> */}
//               <MdOutlineNavigateNext />
//             </div>
//           </div>
//           <div class="owl-dots disabled"></div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default ImageSlider;

import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Wrapper = styled.section`
  .owl-carousel,
  .owl-carousel .owl-item {
    -webkit-tap-highlight-color: transparent;
    position: relative;
  }

  .owl-carousel {
    display: none;
    width: 100%;
    z-index: 1;
  }

  .owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y;
    -moz-backface-visibility: hidden;
  }

  .owl-carousel .owl-stage:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }

  .owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0);
  }

  .owl-carousel .owl-item {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
  }

  .owl-carousel .owl-item {
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
    -webkit-touch-callout: none;
  }

  .owl-carousel .owl-item img {
    display: block;
    width: 100%;
  }

  .owl-carousel .owl-dots.disabled,
  .owl-carousel .owl-nav.disabled {
    display: none;
  }

  .no-js .owl-carousel,
  .owl-carousel.owl-loaded {
    display: block;
  }

  .owl-carousel .owl-dot,
  .owl-carousel .owl-nav .owl-next,
  .owl-carousel .owl-nav .owl-prev {
    cursor: pointer;
    cursor: hand;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .owl-carousel.owl-loading {
    opacity: 0;
    display: block;
  }

  .owl-carousel.owl-hidden {
    opacity: 0;
  }

  .owl-carousel.owl-refresh .owl-item {
    visibility: hidden;
  }

  .owl-carousel.owl-drag .owl-item {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .owl-carousel.owl-grab {
    cursor: move;
    cursor: grab;
  }

  .owl-carousel.owl-rtl {
    direction: rtl;
  }

  .owl-carousel.owl-rtl .owl-item {
    float: right;
  }

  .owl-carousel .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .owl-carousel .owl-animated-in {
    z-index: 0;
  }

  .owl-carousel .owl-animated-out {
    z-index: 1;
  }

  .owl-carousel .fadeOut {
    animation-name: fadeOut;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .owl-height {
    transition: height 0.5s ease-in-out;
  }

  .owl-carousel .owl-item .owl-lazy {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .owl-carousel .owl-item img.owl-lazy {
    transform-style: preserve-3d;
  }

  .owl-carousel .owl-video-wrapper {
    position: relative;
    height: 100%;
    background: #000;
  }

  .owl-carousel .owl-video-play-icon {
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    background: url(owl.video.play.png) no-repeat;
    cursor: pointer;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    transition: transform 0.1s ease;
  }

  .owl-carousel .owl-video-play-icon:hover {
    -ms-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
  }

  .owl-carousel .owl-video-playing .owl-video-play-icon,
  .owl-carousel .owl-video-playing .owl-video-tn {
    display: none;
  }

  .owl-carousel .owl-video-tn {
    opacity: 0;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: opacity 0.4s ease;
  }

  .owl-carousel .owl-video-frame {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
  }
  /* line 1, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_bg_1 {
    background-image: url("https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg");
  }

  /* line 4, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_bg_2 {
    background-image: url("https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg");
  }

  /* line 7, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_bg_3 {
    background-image: url("https://d3nn873nee648n.cloudfront.net/900x600/3636/3-SS114845.jpg");
  }

  /* line 10, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_area {
    position: relative;
    z-index: 0;
  }

  /* line 23, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_area .single_slider {
    height: 650px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (max-width: 767px) {
    /* line 23, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider {
      height: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    /* line 23, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider {
      height: 600px;
    }
  }

  @media (max-width: 767px) {
    /* line 34, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider .slider_text {
      margin: 100px 0 50px 0;
    }
  }

  /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_area .single_slider .slider_text h3 {
    font-family: "Nothing You Could Do", cursive;
    font-size: 150px;
    text-transform: capitalize;
    font-weight: 400;
    line-height: 0.5;
    color: #fff;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider .slider_text h3 {
      font-size: 50px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider .slider_text h3 {
      font-size: 94px;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider .slider_text h3 {
      font-size: 100px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1500px) {
    /* line 38, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider .slider_text h3 {
      font-size: 120px;
    }
  }

  /* line 62, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_area .single_slider .slider_text p {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-top: 33px;
    margin-bottom: 49px;
  }

  @media (max-width: 767px) {
    /* line 62, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
    .slider_area .single_slider .slider_text p {
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  /* line 79, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_area .owl-carousel .owl-nav div {
    height: 120px;
    left: 0px;
    width: 50px;
    color: #fff;
    background-color: transparent;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    left: 50px;
    font-size: 14px;
    border: none;
    left: 150px;
    line-height: 120px;
    background: rgba(255, 255, 255, 0.2);
    left: 0;
    border: none !important;
  }

  /* line 94, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_area .owl-carousel .owl-nav div.owl-next {
    right: 0;
    left: auto;
  }

  /* line 98, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_slider.scss */
  .slider_area .owl-carousel .owl-nav div:hover {
    background: white;
    color: #001d38;
    border: none;
  }
  .boxed-btn3 {
    background: #1ec6b6;
    color: #fff;
    display: inline-block;
    padding: 18px 41px;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 500;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    text-align: center;
    text-transform: capitalize;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    cursor: pointer;
  }

  /* line 42, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_btn.scss */
  .boxed-btn3:hover {
    background: #ff4a52;
    color: #fff !important;
  }

  /* line 46, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_btn.scss */
  .boxed-btn3:focus {
    outline: none;
  }
`;

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://d3nn873nee648n.cloudfront.net/900x600/20121/220-HQ992452.jpg",
      title: "Slide 1",
      description: "Description for Slide 1",
    },
    {
      image: "https://d3nn873nee648n.cloudfront.net/900x600/3636/3-SS114845",
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    {
      image:
        "https://d3nn873nee648n.cloudfront.net/900x600/2621/20-SM100010.jpg",
      title: "Slide 3",
      description: "Description for Slide 3",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <Wrapper>
      <div className="slider_area">
        <div className="single_slider">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
          <div className="slider_text">
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
            <button className="boxed-btn3">Explore Now</button>
          </div>
        </div>
        <div className="owl-nav">
          <div className="owl-prev" onClick={prevSlide}>
            <MdOutlineNavigateBefore />
          </div>
          <div className="owl-next" onClick={nextSlide}>
            <MdOutlineNavigateNext />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageSlider;
