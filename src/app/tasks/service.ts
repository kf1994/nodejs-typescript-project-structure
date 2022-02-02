import TaskSchema from "./model";
import { ITaskInput, ITaskModel } from "./interfaces";
import createLogger from "../../core/Logger";
import { UnexpectedError } from "../../core/Exceptions";

const logger = createLogger("tasks/service");

class Service {
	public async create(task: ITaskInput): Promise<ITaskModel | void> {
		try {
			return await TaskSchema.create(task);
		} catch (err) {
			logger.error(err);
			throw new UnexpectedError("Unable to create new task", err);
		}
	}

	public update() {

	}

	public deleteOne() {

	}

	public findOne() {

	}

	public list() {

	}
}

export default Service;
