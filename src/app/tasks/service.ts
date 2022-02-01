import { Request, Response } from "express";

class Service {
	req: Request;
	res: Response;

	constructor(request: Request, response: Response) {
		this.req = request;
		this.res = response;
	}

	public create() {

		return this.res.status(200).send({ message: "Created!" });
	}

	public update() {

		return this.res.status(200).send({ message: "update!" });
	}

	public deleteOne() {

		return this.res.status(200).send({ message: "deleteOne" });
	}

	public findOne() {

		return this.res.status(200).send({ message: "findOne" });
	}

	public list() {

		return this.res.status(200).send({ message: "List" });
	}
}

export default Service;
