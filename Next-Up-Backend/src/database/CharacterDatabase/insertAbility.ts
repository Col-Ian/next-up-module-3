import { pool } from '../../utils/databasePool';

export function insertAbility(character_fk: string, ability: AbilityListTypes) {
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
