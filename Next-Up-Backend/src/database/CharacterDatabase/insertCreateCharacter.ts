import { pool } from '../../utils/databasePool';
import { insertSpell } from './insertSpell';
import { insertAbility } from './insertAbility';
import { insertAbilityScore } from './insertAbilityScore';
import { insertSkill } from './insertSkill';

export async function insertCreateCharacter(character: CharacterCreationType) {
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
		promises.push(insertAbility(character.id, ability));
	});

	character.skills.forEach((skill) => {
		promises.push(insertSkill(character.id, skill));
	});

	// Since this is for character creation, no character will have anything over a level 0 spell basekit.
	character.spells.forEach((spell) => {
		promises.push(insertSpell(character.id, 0, spell));
	});

	await Promise.all(promises);
}
