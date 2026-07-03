const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function signUpUser(req, res) {
  try {
    const { username, email, password, role = "user" } = req.body;

    // 1. Check if user already exists
    const isUserAlreadyExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExists) {
      return res.status(409).json({
        message: "User Already Exists",
      });
    }

    // 2. Hash the password
    const hash = await bcrypt.hash(password, 10);

    // 3. Create the user using the HASHED password, not the plain text one!
    const user = await userModel.create({
      username,
      email,
      password: hash, // <-- FIXED HERE
      role,
    });

    // 4. Sign JWT with an expiration time (e.g., 7 days)
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }, // <-- FIXED HERE
    );

    // 5. Send secure cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents XSS attacks from reading the cookie
      secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
    });

    return res.status(201).json({
      // 201 is standard for "Created"
      message: "User Signup Successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    // Catching any database or runtime errors to keep your server alive
    console.error("Signup Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}

async function logoutUser(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "User Logged Out Successfully",
  });
}
module.exports = { signUpUser, loginUser, logoutUser };
