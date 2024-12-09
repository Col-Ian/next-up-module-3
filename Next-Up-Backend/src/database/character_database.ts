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
	abilities: AbilityListTypes[];
};

type AbilityListTypes = {
	abilityName: string;
	abilityDescription: string;
	abilitySource: string;
	actionType: [boolean, boolean, boolean, boolean, boolean, boolean];
	usesResolve: number;
};

export async function insertCreateCharacter(character: character) {
	let promises = [];
	const characterQuery = `INSERT INTO public.characters(id, player_fk) VALUES($1, $2) RETURNING *`;

	await pool.query(characterQuery, [character.id, character.player_fk]);

	// Ability Scores
	promises.push(
		insertAbilityScore(
			'Strength',
			character.id,
			character.strScore,
			character.strBonus,
			character.strPenalty
		)
	);
	promises.push(
		insertAbilityScore(
			'Dexterity',
			character.id,
			character.dexScore,
			character.dexBonus,
			character.dexPenalty
		)
	);
	promises.push(
		insertAbilityScore(
			'Constitution',
			character.id,
			character.conScore,
			character.conBonus,
			character.conPenalty
		)
	);
	promises.push(
		insertAbilityScore(
			'Intelligence',
			character.id,
			character.intScore,
			character.intBonus,
			character.intPenalty
		)
	);
	promises.push(
		insertAbilityScore(
			'Wisdom',
			character.id,
			character.wisScore,
			character.wisBonus,
			character.wisPenalty
		)
	);
	promises.push(
		insertAbilityScore(
			'Charisma',
			character.id,
			character.chaScore,
			character.chaBonus,
			character.chaPenalty
		)
	);

	character.abilities.forEach((ability) => {
		insertAbility(character.id, ability);
	});

	await Promise.all(promises);
}

function insertAbilityScore(
	ability_score_name: string,
	character_fk: string,
	score: number,
	bonus: number,
	penalty: number
) {
	const abilityScoreQuery = `INSERT INTO public.ability_scores(character_fk, ability_score_name, score, bonus, penalty) VALUES($1, $2, $3, $4, $5) RETURNING *`;

	return pool.query(abilityScoreQuery, [
		character_fk,
		ability_score_name,
		score,
		bonus,
		penalty,
	]);
}

function insertAbility(character_fk: string, ability: AbilityListTypes) {
	const abilityQuery = `INSERT INTO public.abilities(character_fk, ability_description, ability_name, ability_source, standard_action, move_action, swift_action, full_action, reaction, other_action, uses_resolve) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

	pool.query(abilityQuery, [
		character_fk,
		ability.abilityDescription,
		ability.abilityName,
		ability.abilitySource,
		ability.actionType[0],
		ability.actionType[1],
		ability.actionType[2],
		ability.actionType[3],
		ability.actionType[4],
		ability.actionType[5],
		ability.usesResolve,
	]);
}
