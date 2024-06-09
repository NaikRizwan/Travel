import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Profile from "./login/Profile";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./login/Login";
import Register from "./login/Register";
import Logout from "./login/Logout";
import Change from "./login/Change";
import Forget from "./login/Forget";
import SuperNav from "./components/SuperNav";
import Home from "./Header/Home";
import AboutUs from "./Header/AboutUs";
import ResetPasswordForm from "./login/ResetPasswordForm";
import ContactUs from "./Header/ContactUs";
// import BookingForm from "./components/BookingForm";
import Popular from "./components/Popular";
import AddTripForm from "./admin/AddNewTrip";
import SingleTrip from "./Header/SingleTrip";
import AddsingleTrip from "./admin/AddsingleTrip";
import BookingForm from "./Header/BookingForm";
import AdminLogin from "./admin/adminlogin/AdminLogin";
import RemoveAdmin from "./admin/adminlogin/RemoveAdmin";
import Dashboard from "./admin/adminlogin/Dashboard";
// import BookingForm from "./Header/BookingForm";
import BookingDetails from "./components/BookingDetails";
import BookingShow from "./login/BookingShow";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} />
        {/* <Route path="/bookingform/:id/:rate" element={<BookingForm />} /> */}
        {/* <Route path="/bookingform" element={<BookingForm />} /> */}
        <Route path="/bookingform/:id/:rate" element={<BookingForm />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/changepass" element={<Change />} />
        <Route
          path="/reset-password/:resetToken"
          element={<ResetPasswordForm />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/booking" element={<BookingForm />} /> */}
        <Route path="/destination" element={<Popular />} />
        <Route path="/add" element={<AddTripForm />} />
        <Route path="/addsingletrip" element={<AddsingleTrip />} />
        <Route path="/singletrip/:id" element={<SingleTrip />} />
        <Route path="/addadmin" element={<AdminLogin />} />
        <Route path="/removeadmin" element={<RemoveAdmin />} />
        <Route path="/p" element={<Profile />} />
        <Route path="/bookingstatus" element={<BookingShow />} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Dashboard />} />

        <Route path="/p" element={<Profile />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/addadmin" element={<AdminLogin />} />
        <Route path="/removeadmin" element={<RemoveAdmin />} />
        <Route path="/changepass" element={<Change />} />
        <Route
          path="/reset-password/:resetToken"
          element={<ResetPasswordForm />}
                  <Route path="/singleproduct/:id" element={<SingleProduct />} />
        /> */}
      </Routes>
    </>
  );
};
function App() {
  return (
    <UserProvider>
      <SuperNav />
      <Nav />

      <Routing />

      <Footer />
    </UserProvider>
  );
}

export default App;
