import TaskSchema from './model';
import { ITaskInput, ITaskModel } from './interfaces';
import createLogger from '../../core/Logger';
import { NotFoundError, UnexpectedError } from '../../core/Exceptions';

const logger = createLogger('tasks/service');

class Service {
  public async create(task: ITaskInput): Promise<ITaskModel | void> {
    try {
      return await TaskSchema.create(task);
    } catch (err) {
      logger.error(err);
      throw new UnexpectedError('Unable to create new task', err);
    }
  }

  public async update(id: string, task: ITaskInput): Promise<ITaskModel | void | null> {
    try {
      task.modified = new Date();
      return await TaskSchema.findByIdAndUpdate(id, task);
    } catch (err) {
      logger.error(err);
      throw new UnexpectedError('Unable to update task', err);
    }
  }

  public async deleteOne(id: string): Promise<ITaskModel | void | null> {
    try {
      return await TaskSchema.findByIdAndRemove(id);
    } catch (err) {
      logger.error(err);
      throw new UnexpectedError('Unable to delete task', err);
    }
  }

  public async findOne(id: string): Promise<ITaskModel | void> {
    const task: ITaskModel | null = await TaskSchema.findById(id);
    if (!task) throw new NotFoundError(`Task with id = ${id} doesn't exists!`);

    return task;
  }

  public async list(page: number, pageSize: number): Promise<ITaskModel[] | void> {
    if (page && pageSize) return TaskSchema.find().skip(page).limit(pageSize);
    return TaskSchema.find();
  }
}

export default Service;
