import { Response } from "express";
import { AuthenticationFailedResponse, InternalErrorResponse, NotFoundResponse } from "./Responses";

enum ErrorType {
	UNAUTHORIZED = "AuthenticationFailed",
	NOT_FOUND = "NotFoundError",
	INTERNAL = "InternalError"
}

export abstract class BaseException extends Error {
	protected constructor(
		public type: ErrorType,
		public message: string = "Something went wrong",
		protected data?: any
	) {
		super(type);
	}

	public static handle(err: BaseException, res: Response): Response {
		switch (err.type) {
			case ErrorType.UNAUTHORIZED:
				return new AuthenticationFailedResponse(err.message).send(res);
			case ErrorType.NOT_FOUND:
				return new NotFoundResponse(err.message).send(res);
			default:
				return new InternalErrorResponse(err.message).send(res);
		}
	}
}

export class AuthenticationFailed extends BaseException {
	constructor(message = "Authentication failed! Please provide valid credentials.") {
		super(ErrorType.UNAUTHORIZED, message);
	}
}

export class UserAccessDenied extends BaseException {
	constructor(message = "You do not have user access to perform the action you are attempting") {
		super(ErrorType.UNAUTHORIZED, message);
	}
}

export class NotFoundError extends BaseException {
	constructor(message = "Not Found") {
		super(ErrorType.NOT_FOUND, message);
	}
}

export class InternalError extends BaseException {
	constructor(message = "Internal Error") {
		super(ErrorType.INTERNAL, message);
	}
}