// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../context/UserContext";

// const Logout = () => {
//   const { dispatch } = useUser();
//   // Access updateOrders function from AuthContext
//   const navigate = useNavigate();
//   // State for logout message

//   useEffect(() => {
//     fetch("https://travel-bice-five.vercel.app/logout", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     })
//       .then((res) => {
//         dispatch({ type: "CLEAR_USER" });
//         // setLogoutMessage("User logged out successfully");
//         // Reset orders state to null
//         // Trigger updateOrders in AuthContext to refresh orders
//         navigate("/login");
//         if (!res.status === 200) {
//           const error = new Error(res.error);
//           throw error;
//         }

//         // Set logout message on successful logout
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [dispatch, navigate]);

//   return (
//     <div style={{ height: "80vh", textAlign: "center" }}>
//       <div style={{ marginTop: "150px" }}>
//         <span className="loaderlogout">Loading</span>
//       </div>
//     </div>
//   );
// };

// export default Logout;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Logout = () => {
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://travel-bice-five.vercel.app/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "CLEAR_USER" });
          navigate("/login");
        } else {
          throw new Error("Failed to logout");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, navigate]);

  return (
    <div style={{ height: "80vh", textAlign: "center" }}>
      <div style={{ marginTop: "150px" }}>
        {loading ? (
          <span className="loaderlogout">Loading</span>
        ) : (
          <p>Logout failed. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default Logout;
