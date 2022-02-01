import { Request, Response } from "express";

abstract class CommonBaseService {
	req: Request;
	res: Response;

	constructor(req: Request, res: Response) {
		this.req = req;
		this.res = res;
	}

	abstract getResponse(): Promise<Response | void>;
}

export default CommonBaseService;
