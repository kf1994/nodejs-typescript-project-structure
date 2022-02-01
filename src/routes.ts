import express, { Request, Response } from "express";

import TasksRoutes from "./app/tasks/routes";

const router = express.Router();

/**
 * Attaching Other Modules
 */
router.get("/", (req: Request, res: Response) => res.status(200).send("Hello World!"));
router.use("/tasks", TasksRoutes);

export default router;
