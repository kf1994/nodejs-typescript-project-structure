import { Request, Response } from "express";

import Service from './service';
import asyncHandler from "../../common/middlewares/asyncHandler";
import { SuccessResponse } from "../../core/Responses";

export const list = (req: Request, res: Response) => {

	return res.status(200).send({ message: "list!" });
};

export const findOne = (req: Request, res: Response) => {

	return res.status(200).send({ message: "findOne!" });
};

export const create = asyncHandler (async (req: Request, res: Response) => {
	const data = await new Service().create(req.body);
	return new SuccessResponse("Task created successfully", data).send(res);
});

export const update = asyncHandler (async (req: Request, res: Response) => {
	const data = await new Service().update(req.params.id, req.body);
	return new SuccessResponse("Task updated successfully", data).send(res);
});

export const deleteOne = (req: Request, res: Response) => {

	return res.status(200).send({ message: "deleteOne!" });
};