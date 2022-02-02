import express from "express";
import { create, deleteOne, findOne, list, update } from "./controller";
import { createValidator } from "./validation";
import { validate } from "../../common/middlewares/validate";

const router = express.Router();

router.post("/", createValidator, create);
router.put("/", update);
router.delete("/", deleteOne);
router.get("/", validate, list);
router.get("/:id", findOne);

export default router;
