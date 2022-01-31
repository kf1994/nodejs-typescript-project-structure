import express, { Request, Response } from "express";

const router = express.Router();

/**
 * TODO: Attach new routes here
 */
router.get("/", (req: Request, res: Response) => res.status(200).send("Hello World!"));

export default router;
