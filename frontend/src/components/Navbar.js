// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <>
//       <div class="site-mobile-menu site-navbar-target">
//         <div class="site-mobile-menu-header">
//           <div class="site-mobile-menu-close mt-3">
//             <span class="icon-close2 js-menu-toggle"></span>
//           </div>
//         </div>
//         <div class="site-mobile-menu-body">
//           <ul class="site-nav-wrap">
//             <li>
//               <a href="rihome-section" class="nav-link">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="riservices-section" class="nav-link">
//                 Services
//               </a>
//             </li>
//             <li class="has-children">
//               <span
//                 class="arrow-collapse collapsed"
//                 data-toggle="collapse"
//                 data-target="ricollapseItem0"
//               ></span>
//               <a href="riabout-section" class="nav-link">
//                 About Us
//               </a>
//               <ul class="collapse" id="collapseItem0">
//                 <li>
//                   <a href="riteam-section" class="nav-link">
//                     Team
//                   </a>
//                 </li>
//                 <li>
//                   <a href="ripricing-section" class="nav-link">
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="rifaq-section" class="nav-link">
//                     FAQ
//                   </a>
//                 </li>
//                 <li class="has-children">
//                   <span
//                     class="arrow-collapse collapsed"
//                     data-toggle="collapse"
//                     data-target="ricollapseItem1"
//                   ></span>
//                   <a href="ri">More Links</a>
//                   <ul class="collapse" id="collapseItem1">
//                     <li>
//                       <a href="ri">Menu One</a>
//                     </li>
//                     <li>
//                       <a href="ri">Menu Two</a>
//                     </li>
//                     <li>
//                       <a href="ri">Menu Three</a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a href="riwhy-us-section" class="nav-link">
//                 Why Us
//               </a>
//             </li>
//             <li>
//               <a href="ritestimonials-section" class="nav-link">
//                 Testimonials
//               </a>
//             </li>
//             <li>
//               <a href="riblog-section" class="nav-link">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="ricontact-section" class="nav-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div class="top-bar">
//         <div class="container">
//           <div class="row">
//             <div class="col-12">
//               <a href="ri" class="">
//                 <span class="mr-2  icon-envelope-open-o"></span>{" "}
//                 <span class="d-none d-md-inline-block">
//                   info@yourdomain.com
//                 </span>
//               </a>
//               <span class="mx-md-2 d-inline-block"></span>
//               <a href="ri" class="">
//                 <span class="mr-2  icon-phone"></span>{" "}
//                 <span class="d-none d-md-inline-block">1+ (234) 5678 9101</span>
//               </a>
//               <div class="float-right">
//                 <a href="ri" class="">
//                   <span class="mr-2  icon-twitter"></span>{" "}
//                   <span class="d-none d-md-inline-block">Twitter</span>
//                 </a>
//                 <span class="mx-md-2 d-inline-block"></span>
//                 <a href="ri" class="">
//                   <span class="mr-2  icon-facebook"></span>{" "}
//                   <span class="d-none d-md-inline-block">Facebook</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         id="sticky-wrapper"
//         class="sticky-wrapper"
//         style={{ height: "96px" }}
//       >
//         <header
//           class="site-navbar js-sticky-header site-navbar-target"
//           role="banner"
//           //   style=""
//         >
//           <div class="container">
//             <div class="row align-items-center position-relative">
//               <div class="site-logo">
//                 <a href="index.html" class="text-black">
//                   <span class="text-primary">Brand</span>
//                 </a>
//               </div>
//               <div class="col-12">
//                 <nav
//                   class="site-navigation text-right ml-auto "
//                   role="navigation"
//                 >
//                   <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
//                     <li>
//                       <a href="rihome-section" class="nav-link">
//                         Home
//                       </a>
//                     </li>
//                     <li>
//                       <a href="riservices-section" class="nav-link">
//                         Services
//                       </a>
//                     </li>
//                     <li class="has-children">
//                       <a href="riabout-section" class="nav-link">
//                         About Us
//                       </a>
//                       <ul class="dropdown arrow-top">
//                         <li>
//                           <a href="riteam-section" class="nav-link">
//                             Team
//                           </a>
//                         </li>
//                         <li>
//                           <a href="ripricing-section" class="nav-link">
//                             Pricing
//                           </a>
//                         </li>
//                         <li>
//                           <a href="rifaq-section" class="nav-link">
//                             FAQ
//                           </a>
//                         </li>
//                         <li class="has-children">
//                           <a href="ri">More Links</a>
//                           <ul class="dropdown">
//                             <li>
//                               <a href="ri">Menu One</a>
//                             </li>
//                             <li>
//                               <a href="ri">Menu Two</a>
//                             </li>
//                             <li>
//                               <a href="ri">Menu Three</a>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <a href="riwhy-us-section" class="nav-link">
//                         Why Us
//                       </a>
//                     </li>
//                     <li>
//                       <a href="ritestimonials-section" class="nav-link">
//                         Testimonials
//                       </a>
//                     </li>
//                     <li>
//                       <a href="riblog-section" class="nav-link">
//                         Blog
//                       </a>
//                     </li>
//                     <li>
//                       <a href="ricontact-section" class="nav-link">
//                         Contact
//                       </a>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//               <div class="toggle-button d-inline-block d-lg-none">
//                 <a
//                   href="ri"
//                   class="site-menu-toggle py-5 js-menu-toggle text-black"
//                 >
//                   <span class="icon-menu h3"></span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Navbar;
// import React from "react";
// import "./Navbar.css"; // Import custom CSS for styling
// import { Container, Navbar } from "bootstrap"; // Import Bootstrap components
// import { NavLink } from "react-router-dom";
// const CustomNavbar = () => {
//   return (
//     <>
//       <div className="top-bar">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <a href="ri" className="">
//                 <span className="mr-2 icon-envelope-open-o"></span>{" "}
//                 <span className="d-none d-md-inline-block">
//                   info@yourdomain.com
//                 </span>
//               </a>
//               <span className="mx-md-2 d-inline-block"></span>
//               <a href="ri" className="">
//                 <span className="mr-2 icon-phone"></span>{" "}
//                 <span className="d-none d-md-inline-block">
//                   1+ (234) 5678 9101
//                 </span>
//               </a>
//               <div className="float-right">
//                 <a href="ri" className="">
//                   <span className="mr-2 icon-twitter"></span>{" "}
//                   <span className="d-none d-md-inline-block">Twitter</span>
//                 </a>
//                 <span className="mx-md-2 d-inline-block"></span>
//                 <a href="ri" className="">
//                   <span className="mr-2 icon-facebook"></span>{" "}
//                   <span className="d-none d-md-inline-block">Facebook</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         bg="light"
//         variant="light"
//         fixed="top"
//       >
//         <Container>
//           <Navbar.Brand href="#home" className="site-logo">
//             <span className="text-primary">Brand</span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <div className="ml-auto">
//               <NavLink href="#home">Home</NavLink>
//               <NavLink href="#services">Services</NavLink>
//               <NavLink href="#about">About Us</NavLink>
//               <NavLink href="#why-us">Why Us</NavLink>
//               <NavLink href="#testimonials">Testimonials</NavLink>
//               <NavLink href="#blog">Blog</NavLink>
//               <NavLink href="#contact">Contact</NavLink>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default CustomNavbar;
import React from "react";
import "./Navbar.css"; // Import custom CSS for styling

const CustomNavbar = () => {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="ri" className="">
                <span className="mr-2 icon-envelope-open-o"></span>{" "}
                <span className="d-none d-md-inline-block">
                  info@yourdomain.com
                </span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="ri" className="">
                <span className="mr-2 icon-phone"></span>{" "}
                <span className="d-none d-md-inline-block">
                  1+ (234) 5678 9101
                </span>
              </a>
              <div className="float-right">
                <a href="ri" className="">
                  <span className="mr-2 icon-twitter"></span>{" "}
                  <span className="d-none d-md-inline-block">Twitter</span>
                </a>
                <span className="mx-md-2 d-inline-block"></span>
                <a href="ri" className="">
                  <span className="mr-2 icon-facebook"></span>{" "}
                  <span className="d-none d-md-inline-block">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky-top">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <a href="index.html" className="text-black">
                <span className="text-primary">Brand</span>
              </a>
            </div>
            <div className="col-12">
              <nav className="site-navigation text-right ml-auto ">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <a href="rihome-section" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="riservices-section" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="riabout-section" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="riwhy-us-section" className="nav-link">
                      Why Us
                    </a>
                  </li>
                  <li>
                    <a href="ritestimonials-section" className="nav-link">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="riblog-section" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="ricontact-section" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="toggle-button d-inline-block d-lg-none">
              <a
                href="ri"
                className="site-menu-toggle py-5 js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default CustomNavbar;
