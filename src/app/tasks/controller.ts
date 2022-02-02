import { Request, Response } from "express";

import Service from "./service";
import asyncHandler from "../../common/middlewares/asyncHandler";
import { SuccessResponse } from "../../core/Responses";

export const list = asyncHandler(async (req: Request, res: Response) => {
	const data = await new Service().list(Number(req.query.page), Number(req.query.pageSize));
	return new SuccessResponse("Tasks", data).send(res);
});

export const findOne = asyncHandler(async (req: Request, res: Response) => {
	const data = await new Service().findOne(req.params.id);
	return new SuccessResponse("Single task", data).send(res);
});

export const create = asyncHandler(async (req: Request, res: Response) => {
	const data = await new Service().create(req.body);
	return new SuccessResponse("Task created successfully", data).send(res);
});

export const update = asyncHandler(async (req: Request, res: Response) => {
	const data = await new Service().update(req.params.id, req.body);
	return new SuccessResponse("Task updated successfully", data).send(res);
});

export const deleteOne = asyncHandler(async (req: Request, res: Response) => {
	const data = await new Service().deleteOne(req.params.id);
	return new SuccessResponse("Task deleted successfully", data).send(res);
});