import React from 'react'
import styled from 'styled-components';

const Wrapper=styled.section`




/* line 1, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area {
  background: #040E27;
  padding: 50px 0;
}

/* line 5, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .form_area h3 {
  font-size: 24px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  /* line 5, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .form_area h3 {
    margin-bottom: 15px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 5, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .form_area h3 {
    margin-bottom: 30px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 5, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .form_area h3 {
    font-size: 18px;
  }
}

/* line 22, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .search_form {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-pack: space-between;
}

@media (max-width: 767px) {
  /* line 22, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .search_wrap .search_form {
    display: block !important;
  }
}

/* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field {
  width: 220px;
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .search_wrap .input_field {
    max-width: 150px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .search_wrap .input_field {
    max-width: 170px;
  }
}

@media (max-width: 767px) {
  /* line 29, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .search_wrap .input_field {
    width: 100%;
    margin-bottom: 15px;
  }
}

/* line 41, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: 1px solid #363E52;
  padding-left: 15px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #fff;
}

/* line 49, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field input::placeholder {
  font-size: 16px;
  color: #AAB1B7;
  font-weight: 300;
}

/* line 55, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field input:focus {
  outline: none;
}

/* line 59, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field .nice-select {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #AAB1B7;
  font-weight: 300;
  background: transparent;
  border: 1px solid #363E52;
}

@media (max-width: 767px) {
  /* line 59, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
  .where_togo_area .search_wrap .input_field .nice-select {
    margin-bottom: 15px;
  }
}

/* line 71, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field .nice-select::after {
  content: '\f0d7 ';
  right: 21px;
  top: 5px;
  font-family: 'fontawesome';
  color: #AAB1B7;
  font-size: 16px;
}

/* line 79, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field .nice-select .option {
  cursor: pointer;
  font-weight: 400;
  line-height: 40px;
  list-style: none;
  min-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: #000;
  font-weight: 400;
}

/* line 94, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.where_togo_area .search_wrap .input_field .nice-select.open .list {
  width: 100%;
}

/* line 103, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.gj-datepicker-md [role="right-icon"] {
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 16px;
  color: #919191;
  margin-right: 15px;
  position: absolute;
  top: 16px;
  right: 10px;
  color: #AAB1B7;
}

/* line 115, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_where_to_go.scss */
.gj-picker-md div[role="navigator"] {
  padding-left: 30px !important;
}
`;
w
const Wheretogo = () => {
  return (
    <Wrapper>
    <div class="where_togo_area">
    <div class="container">
    <div class="row align-items-center">
    <div class="col-lg-3">
    <div class="form_area">
    <h3>Where you want to go?</h3>
    </div>
    </div>
    <div class="col-lg-9">
    <div class="search_wrap">
    <form class="search_form" action="#">
    <div class="input_field">
    <input type="text" placeholder="Where to go?"/>
    </div>
    <div class="input_field">
    <div role="wrapper" class="gj-datepicker gj-datepicker-md gj-unselectable"><input id="datepicker" placeholder="Date" data-type="datepicker" data-guid="2d1939d8-428c-49e8-e176-200cd97db651" data-datepicker="true" class="gj-textbox-md" role="input"><span class="fa fa-caret-down" role="right-icon"></span></div>
    </div>
    <div class="input_field">
    <select style="display: none;">
    <option data-display="Travel type">Travel type</option>
    <option value="1">Some option</option>
    <option value="2">Another option</option>
    </select><div class="nice-select" tabindex="0"><span class="current">Travel type</span><ul class="list"><li data-value="Travel type" data-display="Travel type" class="option selected">Travel type</li><li data-value="1" class="option">Some option</li><li data-value="2" class="option">Another option</li></ul></div>
    </div>
    <div class="search_btn">
    <button class="boxed-btn4 " type="submit">Search</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Wrapper>
  )
}

export default Wheretogo;