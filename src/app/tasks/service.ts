import CommonBaseService from '../../common/base.service';

class TasksService extends CommonBaseService {
	public async getResponse() {

		return this.res.status(200).send({ message: 'Hello world!' });
	}
}

export default TasksService;
