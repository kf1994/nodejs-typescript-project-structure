import { NextFunction, Request, Response } from "express";

import { BaseException, InternalError } from "../../core/Exceptions";
import { environment } from "../../config";
import createLogger from "../../core/Logger";

const logger = createLogger("global-error-handler");

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof BaseException) {
		BaseException.handle(err, res);
	} else {
		if (environment === "development") {
			logger.error(err);
			return res.status(500).send(err.message);
		}
		BaseException.handle(new InternalError(), res);
	}
}