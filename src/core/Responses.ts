import { Response } from "express";
import { StatusCode } from "./StatusCode";


abstract class ApiResponse {
	protected constructor(protected status: StatusCode, protected message: string) {
	}

	private static sanitize<T extends ApiResponse>(response: T): T {
		const clone: T = {} as T;
		Object.assign(clone, response);

		// @ts-ignore
		delete clone.status;
		for (const i in clone) if (typeof clone[i] === "undefined") delete clone[i];
		return clone;
	}

	public send(res: Response): Response {
		return this.prepare<ApiResponse>(res, this);
	}

	protected prepare<T extends ApiResponse>(res: Response, response: T): Response {
		return res.status(this.status).json(ApiResponse.sanitize(response));
	}
}

export class AuthenticationFailedResponse extends ApiResponse {
	constructor(message = "Authentication failed! Please provide valid credentials.") {
		super(StatusCode.UNAUTHORIZED, message);
	}
}

export class NotFoundResponse extends ApiResponse {
	private url: string | undefined;

	constructor(message = "Not Found") {
		super(StatusCode.NOT_FOUND, message);
	}

	send(res: Response): Response {
		this.url = res.req?.originalUrl;
		return super.prepare<NotFoundResponse>(res, this);
	}
}

export class InternalErrorResponse extends ApiResponse {
	constructor(message = "Internal server error") {
		super(StatusCode.INTERNAL_ERROR, message);
	}
}

export class SuccessResponse<T> extends ApiResponse {
	constructor(message: string, private data?: T) {
		super(StatusCode.SUCCESS, message);
	}

	send(res: Response): Response {
		return super.prepare<SuccessResponse<T>>(res, this);
	}
}
