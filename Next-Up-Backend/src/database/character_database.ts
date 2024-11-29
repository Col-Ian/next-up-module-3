import { pool } from '../utils/databasePool';

type character = {
	id: string;
	player_fk: string;
	strScore: number;
	strBonus: number;
	strPenalty: number;
	dexScore: number;
	dexBonus: number;
	dexPenalty: number;
	conScore: number;
	conBonus: number;
	conPenalty: number;
	intScore: number;
	intBonus: number;
	intPenalty: number;
	wisScore: number;
	wisBonus: number;
	wisPenalty: number;
	chaScore: number;
	chaBonus: number;
	chaPenalty: number;
};

export async function insertCharacter(character: character) {
	const characterQuery = `INSERT INTO public.characters(id, player_fk) VALUES($1, $2) RETURNING *`;

	await pool.query(
		characterQuery,
		[character.id, character.player_fk],
		(err: any, res: any) => {
			if (err) {
				console.log(err);
			} else {
				console.log(res.rows);
			}
		}
	);

	// Ability Scores
	await insertAbilityScore(
		'Strength',
		character.id,
		character.strScore,
		character.strBonus,
		character.strPenalty
	);
	await insertAbilityScore(
		'Dexterity',
		character.id,
		character.dexScore,
		character.dexBonus,
		character.dexPenalty
	);
	await insertAbilityScore(
		'Constitution',
		character.id,
		character.conScore,
		character.conBonus,
		character.conPenalty
	);
	await insertAbilityScore(
		'Intelligence',
		character.id,
		character.intScore,
		character.intBonus,
		character.intPenalty
	);
	await insertAbilityScore(
		'Wisdom',
		character.id,
		character.wisScore,
		character.wisBonus,
		character.wisPenalty
	);
	await insertAbilityScore(
		'Charisma',
		character.id,
		character.chaScore,
		character.chaBonus,
		character.chaPenalty
	);
}

async function insertAbilityScore(
	ability_score_name: string,
	character_fk: string,
	score: number,
	bonus: number,
	penalty: number
) {
	const abilityScoreQuery = `INSERT INTO public.ability_scores(character_fk, ability_score_name, score, bonus, penalty) VALUES($1, $2, $3, $4, $5) RETURNING *`;

	pool.query(
		abilityScoreQuery,
		[character_fk, ability_score_name, score, bonus, penalty],
		(err: any, res: any) => {
			if (err) {
				console.log(err);
			} else {
				console.log(res.rows);
			}
		}
	);
}
