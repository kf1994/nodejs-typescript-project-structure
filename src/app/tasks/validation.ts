import { body, param, ValidationChain } from "express-validator";

export const createValidator: ValidationChain[] = [
	body("title")
		.not()
		.isEmpty()
		.withMessage("title field is required")
		.trim(),
	body("description")
		.not()
		.isEmpty()
		.withMessage("description field is required")
		.trim()
];

export const updateValidator: ValidationChain[] = [
	param("id")
		.not()
		.isEmpty()
		.withMessage("id field is required")
		.trim(),
	body("title")
		.not()
		.isEmpty()
		.withMessage("title field is required")
		.trim(),
	body("description")
		.not()
		.isEmpty()
		.withMessage("description field is required")
		.trim()
];