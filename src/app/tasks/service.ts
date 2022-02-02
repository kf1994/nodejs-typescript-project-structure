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

	public async update(id: string, task: ITaskInput): Promise<ITaskModel | void> {
		try {
			task.modified = new Date();
			return await TaskSchema.findByIdAndUpdate(id, task);
		} catch (err) {
			logger.error(err);
			throw new UnexpectedError("Unable to update task", err);
		}
	}

	public async deleteOne(id: string): Promise<ITaskModel | void> {
		try {
			return await TaskSchema.findByIdAndRemove(id);
		} catch (err) {
			logger.error(err);
			throw new UnexpectedError("Unable to delete task", err);
		}
	}

	public findOne() {

	}

	public list() {

	}
}

export default Service;
