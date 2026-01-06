import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";
import permit from "../middleware/rbac.js";

const router = express.Router();

/**
 * GET ALL USERS
 * Admin & Manager
 */
router.get(
  "/",
  auth,
  permit("admin", "manager"),
  async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
  }
);

/**
 * CREATE USER
 * Admin only
 */
router.post(
  "/",
  auth,
  permit("admin"),
  async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
  }
);
// UPDATE USER ROLE (ADMIN ONLY)
router.put(
  "/:id",
  auth,
  permit("admin"),
  async (req, res) => {
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");

    res.json(user);
  }
);


/**
 * DELETE USER
 * Admin only
 */
router.delete(
  "/:id",
  auth,
  permit("admin"),
  async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  }
);

export default router;
