import { Document } from 'mongoose';

export interface ITaskModel extends Document {
	title: string;
	description: string;
	created: Date;
	modified: Date;
}

export interface ITaskInput {
	title: string;
	description: string;
	created?: Date;
	modified?: Date;
}