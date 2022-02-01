import express, { Request, Response } from "express";
import TasksService from "./app/tasks/service";

const router = express.Router();

/**
 * TODO: Attach new routes here
 */
router.get("/", (req: Request, res: Response) => new TasksService(req, res).getResponse());

export default router;
