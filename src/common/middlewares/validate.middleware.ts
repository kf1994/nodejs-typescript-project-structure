import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { BaseException, DataValidationFailed } from "../../core/Exceptions";

export const validate = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return BaseException.handle(new DataValidationFailed("Data validation failed", errors), res);

	next();
};
