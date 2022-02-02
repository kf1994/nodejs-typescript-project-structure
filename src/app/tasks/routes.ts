import express from "express";
import { create, deleteOne, findOne, list, update } from "./controller";
import { createValidator, updateValidator } from "./validation";

const router = express.Router();

router.post("/", createValidator, create);
router.put("/:id", updateValidator, update);
router.delete("/", deleteOne);
router.get("/", list);
router.get("/:id", findOne);

export default router;
