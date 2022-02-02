import { body, ValidationChain } from "express-validator";

export const createValidator: ValidationChain[] = [
	body("title")
		.not()
		.isEmpty()
		.withMessage("Required")
		.trim(),
	body("description")
		.not()
		.isEmpty()
		.withMessage("Required")
		.trim()
];