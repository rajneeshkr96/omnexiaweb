import express from "express";
import {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} from "../controllers/resource.controller.js";


const router = express.Router();

router.get("/:model", getAll);
router.post("/:model", createOne);
router.put("/:model/:id", updateOne);
router.delete("/:model/:id", deleteOne);

export default router;
