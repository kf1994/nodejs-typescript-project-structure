import { Request, Response } from "express";

export const list = (req: Request, res: Response) => {

	return res.status(200).send({ message: "list!" });
};

export const findOne = (req: Request, res: Response) => {

	return res.status(200).send({ message: "findOne!" });
};

export const create = (req: Request, res: Response) => {

	return res.status(200).send({ message: "Created!" });
};

export const update = (req: Request, res: Response) => {

	return res.status(200).send({ message: "update!" });
};

export const deleteOne = (req: Request, res: Response) => {

	return res.status(200).send({ message: "deleteOne!" });
};