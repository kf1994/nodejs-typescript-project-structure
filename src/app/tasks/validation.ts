import { body, ValidationChain } from "express-validator";

export const listValidator: ValidationChain[] = [
	body("address")
		.not()
		.isEmpty()
		.withMessage("Required")
		.trim(),
	body("password")
		.not()
		.isEmpty()
		.withMessage("Required")
		.trim(),
	body("unlockDuration")
		.not()
		.isEmpty()
		.withMessage("Required")
		.trim()
];