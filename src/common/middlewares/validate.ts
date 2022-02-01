import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { DataValidationFailed } from "../../core/Exceptions";

export const validate = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new DataValidationFailed("Data validation failed", errors);

	next();
};
