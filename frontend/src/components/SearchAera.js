// import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.section`
//   .where_togo_area {
//     background: #040e27;
//     padding: 50px 0;
//   }

//   .where_togo_area .form_area h3 {
//     font-size: 24px;
//     color: #fff;
//     font-weight: 400;
//     margin-bottom: 0;
//   }

//   @media (max-width: 767px) {
//     /* line 5, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .form_area h3 {
//       margin-bottom: 15px;
//     }
//   }

//   @media (min-width: 768px) and (max-width: 991px) {
//     /* line 5, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .form_area h3 {
//       margin-bottom: 30px;
//     }
//   }

//   @media (min-width: 992px) and (max-width: 1200px) {
//     /* line 5, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .form_area h3 {
//       font-size: 18px;
//     }
//   }

//   /* line 22, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .search_form {
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-justify-content: space-between;
//     -moz-justify-content: space-between;
//     -ms-justify-content: space-between;
//     justify-content: space-between;
//     -ms-flex-pack: space-between;
//   }

//   @media (max-width: 767px) {
//     /* line 22, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .search_wrap .search_form {
//       display: block !important;
//     }
//   }

//   /* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field {
//     width: 220px;
//   }

//   @media (min-width: 768px) and (max-width: 991px) {
//     /* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .search_wrap .input_field {
//       max-width: 150px;
//     }
//   }

//   @media (min-width: 992px) and (max-width: 1200px) {
//     /* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .search_wrap .input_field {
//       max-width: 170px;
//     }
//   }

//   @media (max-width: 767px) {
//     /* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .search_wrap .input_field {
//       width: 100%;
//       margin-bottom: 15px;
//     }
//   }

//   /* line 41, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field input {
//     width: 100%;
//     height: 50px;
//     background: transparent;
//     border: 1px solid #363e52;
//     padding-left: 15px;
//     -webkit-border-radius: 5px;
//     -moz-border-radius: 5px;
//     border-radius: 5px;
//     color: #fff;
//   }

//   /* line 49, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field input::placeholder {
//     font-size: 16px;
//     color: #aab1b7;
//     font-weight: 300;
//   }

//   /* line 55, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field input:focus {
//     outline: none;
//   }

//   /* line 59, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field .nice-select {
//     width: 100%;
//     height: 50px;
//     line-height: 50px;
//     font-size: 16px;
//     color: #aab1b7;
//     font-weight: 300;
//     background: transparent;
//     border: 1px solid #363e52;
//   }

//   @media (max-width: 767px) {
//     /* line 59, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//     .where_togo_area .search_wrap .input_field .nice-select {
//       margin-bottom: 15px;
//     }
//   }

//   /* line 71, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field .nice-select::after {
//     content: "\f0d7 ";
//     right: 21px;
//     top: 5px;
//     font-family: "fontawesome";
//     color: #aab1b7;
//     font-size: 16px;
//   }

//   /* line 79, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field .nice-select .option {
//     cursor: pointer;
//     font-weight: 400;
//     line-height: 40px;
//     list-style: none;
//     min-height: 40px;
//     outline: none;
//     padding-left: 18px;
//     padding-right: 29px;
//     text-align: left;
//     -webkit-transition: all 0.2s;
//     transition: all 0.2s;
//     color: #000;
//     font-weight: 400;
//   }

//   /* line 94, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .where_togo_area .search_wrap .input_field .nice-select.open .list {
//     width: 100%;
//   }

//   /* line 103, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
//   .gj-datepicker-md [role="right-icon"] {
//     position: absolute;
//     right: 0px;
//     top: 0px;
//     font-size: 16px;
//     color: #919191;
//     margin-right: 15px;
//     position: absolute;
//     top: 16px;
//     right: 10px;
//     color: #aab1b7;
//   }

//   .gj-picker-md div[role="navigator"] {
//     padding-left: 30px !important;
//   }
//   .boxed-btn4 {
//     background: #ff4a52;
//     color: #fff;
//     display: inline-block;
//     padding: 13px 39px;
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

//   .boxed-btn4:hover {
//     background: #1ec6b6;
//     color: #fff !important;
//   }

//   .boxed-btn4:focus {
//     outline: none;
//   }
// `;

// const SearchAera = () => {
//   return (
//     <Wrapper>
//       <div className="where_togo_area">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-3">
//               <div className="form_area">
//                 <h3>Where you want to go?</h3>
//               </div>
//             </div>
//             <div className="col-lg-9">
//               <div className="search_wrap">
//                 <form className="search_form" action="#">
//                   <div className="input_field">
//                     <input type="text" placeholder="Where to go?" />
//                   </div>
//                   <div className="input_field">
//                     <div
//                       role="wrapper"
//                       className="gj-datepicker gj-datepicker-md gj-unselectable"
//                     >
//                       <input
//                         id="datepicker"
//                         placeholder="Date"
//                         data-type="datepicker"
//                         data-guid="2d1939d8-428c-49e8-e176-200cd97db651"
//                         data-datepicker="true"
//                         className="gj-textbox-md"
//                         role="input"
//                       />
//                       <span
//                         className="fa fa-caret-down"
//                         role="right-icon"
//                       ></span>
//                     </div>
//                   </div>
//                   <div className="input_field">
//                     <select style={{ display: "none" }}>
//                       <option data-display="Travel type">Travel type</option>
//                       <option value="1">Some option</option>
//                       <option value="2">Another option</option>
//                     </select>
//                     <div className="nice-select" tabindex="0">
//                       <span className="current">Travel type</span>
//                       <ul className="list">
//                         <li
//                           data-value="Travel type"
//                           data-display="Travel type"
//                           className="option selected"
//                         >
//                           Travel type
//                         </li>
//                         <li data-value="1" className="option">
//                           Some option
//                         </li>
//                         <li data-value="2" className="option">
//                           Another option
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="search_btn">
//                     <button className="boxed-btn4 " type="submit">
//                       Search
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default SearchAera;
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: darkblue;
  padding: 50px 0;
  .container {
    display: flex;
    justify-content: space-between;

    align-items: center;
  }
  h3 {
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 0;

    font-family: monospace;
  }

  // .search_form {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   margin-top: 20px;
  // }

  input,
  select {
    width: 100%;
    height: 50px;
    background: transparent;
    border: 2px solid #1ec6b6;
    border-radius: 5px;
    padding: 0 15px;
    color: deepskyblue;
    font-size: 16px;
  }

  select {
    margin-right: 20px;
  }

  .boxed-btn4 {
    background: #1ec6b6;
    color: #fff;
    display: inline-block;
    padding: 13px 45px;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 500;
    border: 0;
    border-radius: 5px;
    text-align: center;
    text-transform: capitalize;
    transition: 0.3s;
    cursor: pointer;
  }

  .boxed-btn4:hover {
    background: #ff4a52;
    color: #fff !important;
  }

  .boxed-btn4:focus {
    outline: none;
  }
`;

const SearchAera = () => {
  return (
    <Wrapper>
      <form className="search_form" action="#">
        <div className="container">
          <div>
            <h3>Where do you want to go?</h3>
          </div>
          <div>
            <input type="text" placeholder="Destination" />
          </div>
          <div>
            <input type="date" placeholder="Date" />
          </div>
          <div>
            <select>
              <option data-display="Travel type">Travel type</option>
              <option value="1">Adventure</option>
              <option value="2">Relaxation</option>
            </select>
          </div>
          <div>
            <button className="boxed-btn4" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchAera;
