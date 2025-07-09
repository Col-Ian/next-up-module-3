/*
    Data that needs to be saved on character creation based on input by user.
        Character Basic Information
            Class
            Race
            Theme
            Name

        Abilities given by choices

        

*/
import { type Request, type Response } from 'express';
import * as rest from '../utils/rest';
import Joi, { number } from 'joi';
import { insertCreateCharacter } from '../database/CharacterDatabase/insertCreateCharacter';

// export interface Character {
// 	id: string;
// 	player_fk: string;
// 	strScore: number;
// 	strBonus: number;
// 	strPenalty: number;
// 	dexScore: number;
// 	dexBonus: number;
// 	dexPenalty: number;
// 	conScore: number;
// 	conBonus: number;
// 	conPenalty: number;
// 	intScore: number;
// 	intBonus: number;
// 	intPenalty: number;
// 	wisScore: number;
// 	wisBonus: number;
// 	wisPenalty: number;
// 	chaScore: number;
// 	chaBonus: number;
// 	chaPenalty: number;
// 	abilities: AbilityListTypes[];
// }

// type AbilityListTypes = {
// 	abilityName: string;
// 	abilityDescription: string;
// 	abilitySource: string;
// 	actionType: [boolean, boolean, boolean, boolean, boolean, boolean];
// 	usesResolve: number;
// };

const CharacterSchema = Joi.object<CharacterCreationType>({
	id: Joi.string().required(),
	player_fk: Joi.string().required(),
	strScore: Joi.number().required(),
	strBonus: Joi.number().required(),
	strPenalty: Joi.number().required(),
	dexScore: Joi.number().required(),
	dexBonus: Joi.number().required(),
	dexPenalty: Joi.number().required(),
	conScore: Joi.number().required(),
	conBonus: Joi.number().required(),
	conPenalty: Joi.number().required(),
	intScore: Joi.number().required(),
	intBonus: Joi.number().required(),
	intPenalty: Joi.number().required(),
	wisScore: Joi.number().required(),
	wisBonus: Joi.number().required(),
	wisPenalty: Joi.number().required(),
	chaScore: Joi.number().required(),
	chaBonus: Joi.number().required(),
	chaPenalty: Joi.number().required(),
	abilities: Joi.array().items({
		abilityName: Joi.string().required(),
		abilityDescription: Joi.string().required(),
		abilitySource: Joi.string().required(),
		actionType: Joi.array().items(Joi.boolean()).required(),
		usesResolve: Joi.number().required(),
	}),
});

export const createCharacter = async (req: Request, res: Response) => {
	try {
		const { error, value } = CharacterSchema.validate(req.body);
		if (error !== undefined) {
			return res
				.status(400)
				.json(rest.error('Data is not formatted correctly.'));
		}

		const newCharacter: CharacterCreationType = value;
		await insertCreateCharacter(newCharacter);
		return res.status(200).json(rest.success('Character created.'));
	} catch {
		return res.status(500).json(rest.error('Character not created.'));
	}
};
