// routes/auth.js
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/User"); // Import the User model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authh = require("../middleware/authh");
const isAdmin = require("../middleware/isAdmin");
const Orrder = require("../models/Orrder");
const Trip = require("../models/Trip");
const alert = require("../models/Notificaation");
const Product = require("../models/Product");
const SingleProduct = require("../models/SingleProduct");
const OtpModel = require("../models/OtpModel");
const nodemailer = require("nodemailer");
const multer = require("multer");
const Feedback = require("../models/feedbackSchema");
const Visitor = require("../models/visitorSchema");
const SingleTrip = require("../models/SingleTrip");
const Booking = require("../models/Booking");
const { ObjectId } = require("mongodb");
const generateBookingEmail = require("../bookingEmailTemplate"); // Import the email template function

module.exports = router;
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rizwannaik790026@gmail.com", // Your email
    pass: "gjdz rqhj ibbf keuc", // Your password
  },
});

router.post("/bookingform1", async (req, res) => {
  const { email, id, ...bookingData } = req.body;
  console.log(req.body);
  console.log("Booking data received");

  // Convert id to ObjectId if necessary
  const bookingId = mongoose.Types.ObjectId.isValid(id)
    ? new mongoose.Types.ObjectId(id)
    : new mongoose.Types.ObjectId();

  try {
    let user = await Booking.findOne({ email });
    if (user) {
      user.bookings.push({ ...bookingData, _id: bookingId });
    } else {
      user = new Booking({
        email,
        bookings: [{ ...bookingData, _id: bookingId }],
      });
    }
    await user.save();

    // Generate email content
    const emailContent = generateBookingEmail(
      bookingData,
      bookingData.totalPrice
    );

    // Send email
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Booking Confirmation - JK RR TOUR & TRAVELS",
      html: emailContent,
    });

    res
      .status(200)
      .json({ message: "Booking saved and email sent successfully" });
  } catch (error) {
    console.error("Error saving booking or sending email:", error);
    res.status(500).json({ error: "Failed to save booking or send email" });
  }
});
router.get("/booking_admin", async (req, res) => {
  console.log("uuuu");
  try {
    const users = await Booking.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/api/bookings/:userId/:bookingId", async (req, res) => {
  const { userId, bookingId } = req.params;
  try {
    await Booking.updateOne(
      { _id: userId },
      { $pull: { bookings: { _id: bookingId } } }
    );
    res.status(200).send({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/profile/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await Booking.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// router.post("/bookingform1", async (req, res) => {
//   const { email, id, ...bookingData } = req.body;
//   console.log(req.body);
//   console.log("Booking data received");

//   // Convert id to ObjectId if necessary
//   const bookingId = mongoose.Types.ObjectId.isValid(id)
//     ? new mongoose.Types.ObjectId(id)
//     : new mongoose.Types.ObjectId();

//   try {
//     let user = await Booking.findOne({ email });
//     if (user) {
//       user.bookings.push({ ...bookingData, _id: bookingId });
//     } else {
//       user = new Booking({
//         email,
//         bookings: [{ ...bookingData, _id: bookingId }],
//       });
//     }
//     await user.save();
//     res.status(200).json({ message: "Booking saved successfully" });
//   } catch (error) {
//     console.error("Error saving booking:", error);
//     res.status(500).json({ error: "Failed to save booking" });
//   }
// });

// router.post("/bookingform1", async (req, res) => {
//   const { fullname, email, tripId, totalPrice, ...otherDetails } = req.body;

//   try {
//     let user = await Booking.findOne({ email });

//     if (!user) {
//       user = new Booking({ fullname, email, bookings: [] });
//     }

//     user.bookings.push({ tripId, totalPrice, ...otherDetails });

//     await user.save();

//     res.status(200).json({ message: "Booking successful", user });
//   } catch (error) {
//     console.error("Error booking trip:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
//});

// Routes
// router.get("/bookings/:email", async (req, res) => {
//   console.log("hii");
//   const email = req.params.email;
//   console.log(email);
//   try {
//     const bookings = await Booking.findOne({ email });
//     if (!bookings) {
//       return res
//         .status(404)
//         .json({ message: "No bookings found for this email" });
//     }
//     res.json(bookings.bookings);
//   } catch (error) {
//     console.error("Error fetching bookings:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
router.get("/bookings/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const bookings = await Booking.findOne({ email });
    if (!bookings) {
      return res
        .status(404)
        .json({ message: "No bookings found for this email" });
    }

    // Populate the images for each booking
    const populatedBookings = await Promise.all(
      bookings.bookings.map(async (booking) => {
        const trip = await Trip.findOne({ id: booking.tripId });
        if (trip) {
          const image = trip.images[0]; // Get the first image
          return { ...booking.toObject(), image }; // Add image to the booking object
        }
        return booking.toObject(); // If trip not found, return the booking without image
      })
    );

    res.json(populatedBookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching booking details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/api/bookings", async (req, res) => {
  try {
    const {
      email,
      fullName,
      contactNumber,
      destination,
      journeyDate,
      numberOfDays,
      aadharNumber,
      tripId,
      rate,
    } = req.body;
    console.log(req.body);
    let booking = await Booking.findOne({ email });

    // If the email is not found, create a new booking
    if (!booking) {
      booking = new Booking({ email, bookings: [] });
    }

    // Add the new booking to the bookings array
    booking.bookings.push({
      fullName,
      contactNumber,
      destination,
      journeyDate,
      numberOfDays,
      aadharNumber,
      tripId,
      rate,
    });

    // Save the updated booking
    await booking.save();

    res.json(booking);
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/api/trips/:id", async (req, res) => {
  try {
    const trip = await SingleTrip.findOne({ id: req.params.id });
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    res.json(trip);
  } catch (error) {
    console.error("Error fetching trip:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
// Backend route to delete a single trip

router.delete("/api/singletrips/:id", async (req, res) => {
  const tripId = req.params.id;

  try {
    // Find the single trip by ID and delete it
    const deletedSingleTrip = await SingleTrip.findOneAndDelete({ id: tripId });

    if (!deletedSingleTrip) {
      return res.status(404).json({ message: "Single trip not found" });
    }

    res
      .status(200)
      .json({ message: "Single trip deleted successfully", deletedSingleTrip });
  } catch (error) {
    console.error("Failed to delete single trip:", error);
    res.status(500).json({ message: "Failed to delete single trip" });
  }
});

router.post("/api/singletrips", (req, res) => {
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
  } = req.body;

  const newTrip = new SingleTrip({
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
  });

  newTrip
    .save()
    .then((trip) => res.json(trip))
    .catch((err) => console.log(err));
});

router.get("/api/trips", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json({ trips });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch trips", error: error.message });
  }
});
// Backend route to delete a trip
router.delete("/api/trips/:id", async (req, res) => {
  const tripId = req.params.id;

  try {
    // Find the trip by ID and delete it
    const deletedTrip = await Trip.findOneAndDelete({ id: tripId });

    if (!deletedTrip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json({ message: "Trip deleted successfully", deletedTrip });
  } catch (error) {
    console.error("Failed to delete trip:", error);
    res.status(500).json({ message: "Failed to delete trip" });
  }
});

// router.delete("/api/trips/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const trip = await Trip.findByIdAndDelete(id);
//     if (!trip) {
//       return res.status(404).json({ message: "Trip not found" });
//     }
//     res.status(200).json({ message: "Trip deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to delete trip", error: error.message });
//   }
// });

router.post("/api/trips", async (req, res) => {
  try {
    const { id, name, images, price, rating, totalViews } = req.body;
    const trip = new Trip({
      id,
      name,
      images, // Assuming 'images' is an array
      price,
      rating,
      totalViews,
    });
    await trip.save();
    res.status(201).json({ message: "Trip created successfully", trip });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create trip", error: error.message });
  }
});
// router.post("/api/trips", async (req, res) => {
//   try {
//     const { id, name, image, rate, details } = req.body;
//     const trip = new Trip({ id, name, image, rate, details });
//     await trip.save();
//     res.status(201).json({ message: "Trip created successfully", trip });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to create trip", error: error.message });
//   }
// });
// const monthlyTrafficData = {
//   "23-12-01": 150,
//   "23-12-02": 200,
//   "23-12-03": 180,
//   "23-12-24": 1004,
//   // ... Add data for all days of the month
//   "23-12-30": 250,
//   "23-12-31": 300,
//   "23-12-23": 1000,
// };

// Endpoint to get traffic data for the current month
// router.get("/api/traffic", async (req, res) => {
//   // Here, you might query a database or perform any necessary logic to fetch the data
//   // For simplicity, we'll just return the entire monthlyTrafficData object
//   // res.json(monthlyTrafficData);
//   console.log("traffic")
//   try {
//     const today = new Date();
//     const sevenDaysAgo = new Date();
//     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

//     const weeklyTrafficData = await Visitor.aggregate([
//       {
//         $match: {
//           createdAt: { $gte: sevenDaysAgo, $lt: today },
//         },
//       },
//       {
//         $group: {
//           _id: { $dateToString: { format: "%y-%m-%d", date: "$createdAt" } },
//           count: { $sum: 1 },
//         },
//       },
//     ]);

//     const formattedWeeklyData = {};
//     weeklyTrafficData.forEach((item) => {
//       formattedWeeklyData[item._id] = item.count;
//     });
//     cosole.log("weekly viwes", formattedWeeklyData);
//     res.json(formattedWeeklyData);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// router.get("/api/last-seven-days-sales", async (req, res) => {
//   try {
//     const today = new Date();
//     const sevenDaysAgo = new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate() - 7
//     );

//     const sevenDaysSales = await Orrder.aggregate([
//       {
//         $unwind: "$orders",
//       },
//       {
//         $unwind: "$orders.cart_history",
//       },
//       {
//         $match: {
//           "orders.cart_history.createdAt": { $gte: sevenDaysAgo, $lt: today },
//         },
//       },
//       {
//         $group: {
//           _id: {
//             $dateToString: {
//               format: "%y-%m-%d",
//               date: "$orders.cart_history.createdAt",
//             },
//           },
//           dailySales: { $sum: "$orders.cart_history.price" },
//         },
//       },
//     ]);

//     const formattedSalesData = {};
//     sevenDaysSales.forEach((item) => {
//       formattedSalesData[item._id] = item.dailySales;
//     });

//     res.json(formattedSalesData);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
router.get("/api/last-seven-days-sales", async (req, res) => {
  try {
    const today = new Date();
    const sevenDaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );

    const sevenDaysSales = await Orrder.aggregate([
      {
        $unwind: "$orders",
      },
      {
        $unwind: "$orders.cart_history",
      },
      {
        $match: {
          "orders.cart_history.createdAt": { $gte: sevenDaysAgo, $lt: today },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d", // Ensure the format matches the frontend expected format
              date: "$orders.cart_history.createdAt",
            },
          },
          dailySales: { $sum: "$orders.cart_history.price" },
        },
      },
    ]);

    const formattedSalesData = {};
    sevenDaysSales.forEach((item) => {
      formattedSalesData[item._id] = item.dailySales;
    });

    res.json(formattedSalesData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/api/total-sales", async (req, res) => {
  try {
    const totalSales = await Orrder.aggregate([
      { $unwind: "$orders" }, // Unwind the orders array
      { $unwind: "$orders.cart_history" }, // Unwind the cart_history array
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$orders.cart_history.price" },
        },
      },
    ]);

    const total = totalSales.length > 0 ? totalSales[0].totalSales : 0;
    res.json({ totalSales: total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/api/today-sales", async (req, res) => {
  try {
    const today = new Date();
    const startOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const endOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );

    const todaySales = await Orrder.aggregate([
      {
        $unwind: "$orders",
      },
      {
        $unwind: "$orders.cart_history",
      },
      {
        $match: {
          "orders.cart_history.createdAt": {
            $gte: startOfToday,
            $lt: endOfToday,
          },
        },
      },
      {
        $group: {
          _id: null,
          todaySales: { $sum: "$orders.cart_history.price" },
        },
      },
    ]);

    const totalTodaySales =
      todaySales.length > 0 ? todaySales[0].todaySales : 0;
    console.log(totalTodaySales);
    res.json({ todaySales: totalTodaySales });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/api/weekly-traffic", async (req, res) => {
  try {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const weeklyTrafficData = await Visitor.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo, $lt: today },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
    ]);

    // Send the weekly traffic data to the frontend
    res.json(weeklyTrafficData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get views count for the last seven days
router.get("/views-last-seven-days", async (req, res) => {
  try {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const viewsLastSevenDays = await Visitor.countDocuments({
      createdAt: { $gte: sevenDaysAgo, $lt: today },
    });

    res.json({ viewsLastSevenDays });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/total-views", async (req, res) => {
  try {
    const totalViews = await Visitor.countDocuments();
    res.json({ totalViews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Function to generate a random reset token (placeholder, you may implement your own logic)
const generateResetToken = () => {
  const tokenLength = 20; // Length of the reset token
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < tokenLength; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

router.post("/api/products", async (req, res) => {
  const {
    id,
    name,
    company,
    price,
    colors,
    image,
    description,
    category,
    shipping,
    featured,
    // Add more fields if needed
  } = req.body;

  try {
    let updatedProduct;

    // Check if ID exists
    if (id) {
      updatedProduct = await Product.findOneAndUpdate(
        { id: id }, // Search for the product by ID
        {
          $set: {
            name,
            company,
            price,
            colors,
            image,
            description,
            category,
            shipping,
            featured,
            // Update other fields as needed
          },
        },
        { new: true, upsert: true, runValidators: true }
      );
    } else {
      // If no ID provided, create a new product
      updatedProduct = await Product.create(req.body);
    }

    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/api/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findOneAndDelete({ id: productId });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.delete("/api/singleproducts/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await SingleProduct.findOneAndDelete({
      id: productId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.post("/api/singleproducts", async (req, res) => {
  const {
    id,
    stock,
    reviews,
    stars,
    image,
    // Add more fields if needed
  } = req.body;

  try {
    let updatedProduct;

    // Check if ID exists
    if (id) {
      updatedProduct = await SingleProduct.findOneAndUpdate(
        { id: id }, // Search for the product by ID
        {
          $set: {
            stock,
            reviews,
            stars,
            image,
            // Update other fields as needed
          },
        },
        { new: true, upsert: true, runValidators: true }
      );
    } else {
      // If no ID provided, create a new product
      updatedProduct = await SingleProduct.create(req.body);
    }

    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/generate-otp", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if an unexpired OTP exists for the given email
    const existingOTP = await OtpModel.findOne({
      email,
      expiresAt: { $gt: new Date() },
    });

    if (existingOTP) {
      const { otp } = existingOTP;

      // Resend the OTP through email
      const mailOptions = {
        from: "rizwannaik790026@gmail.com", // Your email
        to: email,
        subject: "Resent OTP Verification",
        text: `Your OTP is: ${otp}`,
      };

      transporter.sendMail(mailOptions, async (error) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ error: "Failed to resend OTP" });
        }

        res.status(200).json({ message: "OTP resent successfully" });
      });
    } else {
      // Generate a new OTP and expiry time
      await OtpModel.deleteMany({ email, expiresAt: { $lte: new Date() } });

      const otp = Math.floor(1000 + Math.random() * 9000);
      const expirationTime = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

      const mailOptions = {
        from: "rizwannaik790026@gmail.com", // Your email
        to: email,
        subject: "OTP Verification",
        text: `Your OTP is: ${otp}`,
      };

      transporter.sendMail(mailOptions, async (error) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ error: "Failed to send OTP" });
        }

        const newOtpEntry = new OtpModel({
          email,
          otp,
          expiresAt: expirationTime,
        });
        await newOtpEntry.save();

        res.status(200).json({ message: "OTP sent successfully" });
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

// router.post("/forget", async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ error: "User not found" });
//     }
//     const userOTP = await OtpModel.findOne({ email });

//     if (!userOTP) {
//       return res.status(404).json({ error: "OTP not found" });
//     }

//     if (userOTP.otp !== parseInt(otp)) {
//       return res.status(401).json({ error: "Invalid OTP" });
//     }

//     if (userOTP.expiresAt < new Date()) {
//       return res.status(401).json({ error: "OTP expired" });
//     }

//     const tempPassword = user.password; // Store hashed password temporarily
//     console.log(tempPassword);
//     // Here, you decrypt the hashed password to plaintext
//     const decryptedPassword = await bcrypt.compare(tempPassword, tempPassword);
//     console.log(decryptedPassword);
//     const mailOptions = {
//       from: "rizwannaik790026@gmail.com",
//       to: email,
//       subject: "Forget password",
//       text: `Your Password is: ${decryptedPassword}`,
//     };

//     transporter.sendMail(mailOptions, async (error) => {
//       if (error) {
//         console.error("Error sending email:", error);
//         return res.status(500).json({ error: "Failed to send OTP" });
//       }

//       await OtpModel.deleteOne({ email });

//       res.status(200).json({
//         message: "User password sent successfully",
//       });
//     });
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).json({ error: "Password recovery failed" });
//   }
// });
router.post("/forget", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const userOTP = await OtpModel.findOne({ email });

    if (!userOTP) {
      return res.status(404).json({ error: "OTP not found" });
    }

    if (userOTP.otp !== parseInt(otp)) {
      return res.status(401).json({ error: "Invalid OTP" });
    }

    if (userOTP.expiresAt < new Date()) {
      await OtpModel.deleteOne({ email });
      return res.status(401).json({ error: "OTP expired" });
    }
    await OtpModel.deleteOne({ email });
    const resetToken = generateResetToken(); // Implement your reset token generation logic

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expiration time (1 hour)

    await user.save();

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    const mailOptions = {
      from: "rizwannaik790026@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `Use this link to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, async (error) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send reset link" });
      }

      res.status(200).json({ message: "Reset link sent successfully" });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Password recovery failed" });
  }
});
router.post("/reset-password/:resetToken", async (req, res) => {
  const { resetToken } = req.params;
  const { newPassword } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // const hashedPassword = await bcrypt.hash(newPassword, 12);
    // user.password = hashedPassword;
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to reset password" });
  }
});

router.post("/reg", async (req, res) => {
  console.log("registration is calling");
  try {
    const { full_name, email, password, otp } = req.body;

    if (!full_name || !email || !password || !otp) {
      return res.status(422).json({ error: "Please fill all fields" });
    }

    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(422).json({ error: "Email already exists" });
    }

    // Fetch OTP from the database based on the provided email
    const userOTP = await OtpModel.findOne({ email });

    if (!userOTP) {
      return res.status(404).json({ error: "OTP not found" });
    }

    // Check if the provided OTP matches the stored OTP
    if (userOTP.otp !== parseInt(otp)) {
      return res.status(401).json({ error: "Invalid OTP" });
    }

    // Check if the OTP is expired
    if (userOTP.expiresAt < new Date()) {
      await OtpModel.deleteOne({ email });
      return res.status(401).json({ error: "OTP expired" });
    }

    // OTP is valid, proceed with user registration
    const newUser = new User({ full_name, email, password });
    await newUser.save();

    // Once OTP is used for validation, delete it from the database
    await OtpModel.deleteOne({ email });

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});
router.post("/changepassword", async (req, res) => {
  try {
    const { email, password, newpassword } = req.body;
    const userlogin = await User.findOne({ email: email });

    if (!userlogin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, userlogin.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid old password" });
    }

    // Update the password
    userlogin.password = newpassword;
    await userlogin.save();

    res.status(200).json({
      message: "User password changed successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to change password" });
  }
});

router.post("/log", async (req, res) => {
  console.log(req.body);
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the field" });
    }
    const userlogin = await User.findOne({ email: email });
    console.log(userlogin);
    if (userlogin) {
      const ismatch = await bcrypt.compare(password, userlogin.password);
      token = await userlogin.generateAuthToken();

      // res.cookie("jwtoken", token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true,
      // });
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
        secure: true,
        sameSite: "none",
        // Ensure to set the secure flag
      });

      if (!ismatch) {
        res.status(400).json({ message: "invalid carendatinals " });
      } else {
        res.status(200).json({
          message: "user login succesfully",
          userlogin: userlogin,
        });
      }
    } else {
      res.status(400).json({ message: "invalid carendatinals " });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "login failed" });
  }
});
router.get("/riz", authh, (req, res) => {
  res.send(req.rootUser);
});
// router.get('/rifat',authh ,(req ,res) => {
//   console.log("nav calling");

//   })
router.get("/rifat", authh, (req, res) => {
  res.json({ userDataa: true });
});
// router.get("/about", authh, (req, res) => {
//   console.log("about");
//   res.send(req.rootUser);
// });
router.get("/about", authh, (req, res) => {
  if (req.rootUser) {
    // Assuming req.rootUser is an object
    res.json(req.rootUser);
  } else {
    res.status(401).json({ error: "Unauthorized" }); // Sending a JSON object for unauthorized cases
  }
});

router.get("/logout", authh, (req, res) => {
  res.clearCookie("jwtoken", {
    path: "/",
    secure: true,
    sameSite: "none",
  });
  res.status(200).send("user logout");
});

router.get("/notification", async (req, res) => {
  try {
    const notification = await alert.find();
    res.json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/notification/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await alert.findByIdAndDelete(id);
    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).send("An error occurred while deleting the notification.");
  }
});
router.put("/grant-admin", async (req, res) => {
  try {
    const { userEmail, userPassword, targetUserEmail } = req.body;
    console.log("admin_grant is calling");
    // Authenticate the user making the request
    const currentUser = await User.findOne({ email: userEmail });
    if (
      !currentUser ||
      !bcrypt.compareSync(userPassword, currentUser.password)
    ) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (currentUser.role !== "admin") {
      return res.status(401).json({ error: "Unauthorized access" });
    }

    // Find the user by email and update their role to 'admin'
    const targetUser = await User.findOneAndUpdate(
      { email: targetUserEmail },
      { role: "admin" }
    );

    if (!targetUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Respond with success message or updated user details
    res.status(200).json({
      message: "Admin privileges granted successfully",
      user: targetUser,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to grant admin privileges" });
  }
});

// router.get("/create-initial-admin", async (req, res) => {
//   try {
//     // Check if this route is accessed in a controlled environment (e.g., local development)
//     // Implement additional security checks if needed

//     // Check if no user exists with admin role
//     const existingAdmin = await User.findOne({ role: "admin" });
//     if (existingAdmin) {
//       return res.status(400).json({ error: "Admin user already exists" });
//     }

//     // Fetch email and password from environment variables
//     const initialAdminEmail = process.env.EMAIL;
//     const initialAdminPassword = process.env.PASSWORD;

//     // Create a new user with admin privileges using fetched credentials
//     const newAdmin = new User({
//       email: initialAdminEmail,
//       password: initialAdminPassword, // Ensure to hash the password before saving in the actual application
//       role: "admin",
//     });

//     await newAdmin.save();

//     res.status(201).json({ message: "Initial admin created successfully" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Failed to create initial admin" });
//   }
// });
router.put("/remove-admin", async (req, res) => {
  try {
    const { userEmail, userPassword, targetUserEmail } = req.body;
    const initialAdminEmail = process.env.EMAIL;
    const initialPassword = process.env.PASSWORD;
    if (userEmail === initialAdminEmail && userPassword === initialPassword) {
      const targetUser = await User.findOneAndUpdate(
        { email: targetUserEmail },
        { role: "user" }
      );

      // Respond with success message or updated user details
      res.status(200).json({
        message: "Admin removed  successfully",
        user: targetUser,
      });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to remove to admin plz try again later" });
  }
});
router.get("/create-initial-admin", async (req, res) => {
  try {
    // Check if this route is accessed in a controlled environment (e.g., local development)
    // Implement additional security checks if needed

    // Fetch email from environment variables
    const initialAdminEmail = process.env.EMAIL;

    // Find user by email
    const existingUser = await User.findOne({ email: initialAdminEmail });

    if (!existingUser) {
      return res.status(401).json({ error: "Unauthorized access" });
    }

    // If user with the specified email exists, update their role to 'admin'
    if (existingUser.role !== "admin") {
      existingUser.role = "admin";
      await existingUser.save();
      return res
        .status(200)
        .json({ message: "User role updated to admin successfully" });
    }

    // If the user is already an admin, send an error indicating that admin user already exists
    return res.status(400).json({ error: "Admin user already exists" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to create initial admin" });
  }
});

router.get("/adminUsers", async (req, res) => {
  try {
    const adminUsers = await User.find({ role: "admin" }).select(
      "full_name email profileImage"
    );

    if (!adminUsers || adminUsers.length === 0) {
      return res.status(404).json({ message: "No admin users found" });
    }

    res.json(adminUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/admin-route", isAdmin, (req, res) => {
  // This route handler will only execute if the user has a valid token and is an admin
  res.status(200).json({ message: "Admin route accessed successfully" });
});
router.get("/api/orders", async (req, res) => {
  try {
    const orders = await Orrder.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    const { email } = req.body; // Assuming email is sent from the frontend

    // Find the user based on the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // Save the uploaded image data to the user's profileImage field
    user.profileImage = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    // Save the updated user document to the database
    await user.save();
    res.status(200).json({
      message: "user profile update  succesfully",
      user: user,
    });
    // res
    //   .status(200)
    //   .send("Image uploaded and user profile updated successfully.");
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).send("Failed to upload image and update user profile.");
  }
});

router.post("/store-feedback", async (req, res) => {
  try {
    const { email, feedback } = req.body;

    // Create a new feedback document with email and feedback text and save it to the database
    const newFeedback = new Feedback({ email, feedback });
    await newFeedback.save();

    res.status(200).send("Feedback stored successfully.");
  } catch (error) {
    console.error("Error storing feedback:", error);
    res.status(500).send("Failed to store feedback.");
  }
});
router.get("/all-feedback", async (req, res) => {
  try {
    const allFeedback = await Feedback.find({}, "email feedback");

    if (!allFeedback || allFeedback.length === 0) {
      return res.status(404).json({ message: "No feedback found" });
    }

    res.json(allFeedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Failed to fetch feedback" });
  }
});
router.post("/track-visitor", async (req, res) => {
  const { ip, headers, body } = req;
  const { latitude, longitude } = body;
  console.log("hii", req.ip);
  try {
    const newVisitor = new Visitor({
      ipAddress: ip,
      userAgent: headers["user-agent"],
      latitude,
      longitude,
      // Other relevant information
    });

    await newVisitor.save();
    res.status(200).json({ message: "Visitor tracked successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error tracking visitor" });
  }
});
router.get("/visitors", async (req, res) => {
  try {
    const visitors = await Visitor.find({}, "ipAddress"); // Fetch only ipAddress field from visitors

    const ipAddresses = visitors.map((visitor) => visitor.ipAddress);
    res.status(200).json(ipAddresses);
  } catch (error) {
    console.error("Error fetching visitors:", error);
    res.status(500).json({ error: "Error fetching visitors" });
  }
});

module.exports = router;
