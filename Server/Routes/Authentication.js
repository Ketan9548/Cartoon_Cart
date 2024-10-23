import exprees from "express";
import { User } from "../Models/Models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const route = exprees.Router();

// routre for registration
route.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({ name, email, password });

    // pasword hasing befor saving
    const hashp = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, hashp);

    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// route for login
route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const IsMatching = await bcrypt.compare(password, user.password);
    if (!IsMatching) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // gerate jwt token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// route for fetchgin all the data in database
route.get("/info", async (req, res) => {
  try {
    const user = await User.find({});
    if (user.length <= 0) {
      return res.status(201).json({
        info: "empty data",
      });
    }
    return res.status(200).json({
      count: user.length,
      data: user,
    });
  } catch (error) {
    console.log("error for get all books in databae: ", error.message);
  }
});

export default route;
