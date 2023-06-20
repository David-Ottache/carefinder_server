const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sendEmail } = require('./sendEmail');

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};

const app = express();
app.use(cors());
app.options("*", cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.post("/sendEmail", (req, res) => {
  const { email, subject, message } = req.body;
  sendEmail(email, subject, message)
    .then((success) => {
      if (success) {
        res.send("Email sent successfully.");
      } else {
        res.send("Failed to send email.");
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
});


app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

