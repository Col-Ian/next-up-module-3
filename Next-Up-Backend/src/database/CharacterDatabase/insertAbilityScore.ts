import { pool } from '../../utils/databasePool';

export function insertAbilityScore(
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
