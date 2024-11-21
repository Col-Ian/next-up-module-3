import { type Request, type Response } from 'express';
import * as rest from '../utils/rest';
import Joi, { number } from 'joi';
import {
	deleteSingleUser,
	getSingleUser,
	insertUser,
} from '../database/user_database';

type email = string;

export interface User {
	id?: number;
	name: string;
	password: string;
	email: email;
}

const UserSchema = Joi.object<User>({
	id: Joi.number().optional(),
	name: Joi.string().required(),
	password: Joi.string().required(),
	email: Joi.string().email().required(),
});

export const createUser = (req: Request, res: Response) => {
	const { error, value } = UserSchema.validate(req.body);
	if (error !== undefined) {
		return res
			.status(400)
			.json(rest.error('User data is not formatted correctly'));
	}

	const user = value;
	if ('id' in user) {
		return res
			.status(400)
			.json(rest.error('User ID will be generated automatically'));
	}

	const id = Math.floor(Math.random() * 1000000);
	insertUser(id, user.name, user.password, user.email);

	return res.status(200).json(rest.success(`Created ${user.name}`));
};

export const getUser = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	if (Number.isNaN(id)) {
		return res.status(400).json(rest.error('Invalid user ID'));
	}

	// const user = DEMO_USERS.find((u) => u.id === id);
	const user = await getSingleUser(id);
	if (user === undefined) {
		return res.status(404).json(rest.error('User not found'));
	}

	return res.status(200).json(rest.success(user));
};

export const deleteUser = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);

	if (Number.isNaN(id)) {
		return res.status(400).json(rest.error('Invalid user ID'));
	}

	// const user = DEMO_USERS.find((user) => user.id === id);
	const user = await getSingleUser(id);
	if (user === undefined) {
		return res.status(404).json(rest.error('User not found'));
	}

	// const index = DEMO_USERS.indexOf(user);

	// DEMO_USERS.splice(index, 1);
	const deleted = await deleteSingleUser(id);

	console.log(deleted);
	// if (deleted) {
	// 	return res.status(204).json(rest.success(user));
	// }
};
