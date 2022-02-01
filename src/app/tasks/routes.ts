import express from "express";
import { create, deleteOne, findOne, list, update } from "./controller";
import { listValidator } from "./validation";
import { validate } from "../../common/middlewares/validate.middleware";

const router = express.Router();

router.post("/", create);
router.put("/", update);
router.delete("/", deleteOne);
router.get("/", listValidator, validate, list);
router.get("/:id", findOne);

export default router;
