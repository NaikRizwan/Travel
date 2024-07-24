import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import logo from "../LOGO26.png";

const Navb = styled.nav`
  position: fixed;
  top: ${({ isScrolled }) => (isScrolled ? "0" : "28px")};
  width: 100%;
  z-index: 1000;
  transition: top 0.3s, background-color 0.3s;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "currentColor" : "#2c3e50"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 20px;
  }
  .image_logo {
    width: 50px;
    border-color: chocolate;
    border-radius: 50%;
    border: 2px solid green;

    height: 50px;
  }
  .logo {
    font-size: 19px;
    font-weight: bold;
    color: white;
    font-family: monospace;
    background: linear-gradient(90deg, white, orange, green);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-family: system-ui;
    font-size: 16px;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #ffcc00;
  }

  .nav-links .active {
    color: #ffcc00;
    font-weight: bold;
  }

  .dropdown {
    position: relative;
  }

  .profile-dropdown {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .profileimage {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #ffcc00;
  }

  .dropdown-content {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #343a40;
    border-radius: 5px;
    padding: 8px 0;
    min-width: 160px;
    z-index: 1;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .dropdown-content a {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s;
  }

  .dropdown-content a:hover {
    background-color: #007bff;
  }

  .nav-toggle {
    display: none;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
  }

  .nav-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
  }

  @media (max-width: 768px) {
    .nav-toggle {
      display: flex;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      background-color: #343a40;
      width: 100%;
      position: absolute;
      top: 100%;
      left: 0;
      padding: 10px 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-links.show {
      display: flex;
    }

    .nav-links a {
      color: #fff;
      margin: 10px 0;
      text-align: center;
    }
  }

  .logo-text {
    font-size: 27px; /* Adjust the size as needed */
    font-weight: bold;
    color: #333; /* Dark text color */
    font-family: "Arial", sans-serif; /* Choose a font family */
    background: linear-gradient(45deg, #ff6b6b, #f8e81c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: 6px;
    display: inline-block;
    padding: 5px 10px;
    // animation: glow 1.5s infinite alternate, slide-in 1s forwards;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #ff6b6b, 0 0 20px #f8e81c, 0 0 30px #f8e81c,
        0 0 40px #f8e81c;
    }
    to {
      text-shadow: 0 0 20px #ff6b6b, 0 0 30px #f8e81c, 0 0 40px #f8e81c,
        0 0 50px #f8e81c;
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .logo-container:hover .logo-image {
    transform: scale(1.1);
  }

  .logo-container:hover .logo-text {
    animation: glow 1.5s infinite alternate, bounce 0.5s;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const { state, dispatch } = useUser();

  const callAbout = async () => {
    try {
      const response = await fetch(
        "https://travel-bice-five.vercel.app/about",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();
      if (response.status === 400 || !data) {
        dispatch({ type: "CLEAR_USER" });
      } else {
        dispatch({
          type: "SET_USER",
          payload: {
            name: data.full_name,
            email: data.email,
            role: data.role,
            img: data.profileImage,
          },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "CLEAR_USER" });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    callAbout();
  }, [state.loggedIn]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navb isScrolled={isScrolled}>
      <div className="container navbar-container">
        <div>
          <img className="image_logo" src={logo} alt="logo" />
          <h1 className="logo-text">XPLORE J&K</h1>
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/destination" activeClassName="active">
            Destination
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
          {state.loggedIn && state.role === "admin" && (
            <NavLink to="/admin" activeClassName="active">
              Admin
            </NavLink>
          )}
          {state.loggedIn ? (
            <div className="dropdown">
              <button className="profile-dropdown" onClick={toggleDropdown}>
                <img src={state.img} alt="Profile" className="profileimage" />
              </button>
              <div
                className="dropdown-content"
                style={{ display: isDropdownOpen ? "block" : "none" }}
              >
                <NavLink to="/p" onClick={closeDropdown}>
                  <CgProfile /> My Profile
                </NavLink>
                <NavLink to="/bookingstatus" onClick={closeDropdown}>
                  <CgProfile /> My Booking
                </NavLink>
                <NavLink to="/logout" onClick={closeDropdown}>
                  <FiLogIn /> Logout
                </NavLink>
              </div>
            </div>
          ) : (
            <NavLink to="/login" activeClassName="active">
              <FiLogIn />
              &nbsp; Sign In
            </NavLink>
          )}
        </div>
      </div>
    </Navb>
  );
};

export default Nav;
