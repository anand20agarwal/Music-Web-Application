require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Firebase Admin Initialization
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

// Import Routes
app.use("/api/users/", require("./routes/auth"));
app.use("/api/artists/", require("./routes/artists"));
app.use("/api/albums/", require("./routes/albums"));
app.use("/api/songs/", require("./routes/songs"));

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
