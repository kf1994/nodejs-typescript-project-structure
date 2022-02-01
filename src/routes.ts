import express, { Request, Response } from "express";
import TasksService from "./app/tasks/service";

const router = express.Router();

/**
 * TODO: Attach new routes here
 */
router.post("/", (req: Request, res: Response) => new TasksService(req, res).create());
router.put("/", (req: Request, res: Response) => new TasksService(req, res).update());
router.delete("/", (req: Request, res: Response) => new TasksService(req, res).deleteOne());
router.get("/", (req: Request, res: Response) => new TasksService(req, res).list());
router.get("/:id", (req: Request, res: Response) => new TasksService(req, res).findOne());

export default router;
