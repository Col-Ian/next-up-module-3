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
	spells: SpellListTypes[];
	skills: SkillListType[];
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

function insertSkill(character_fk: string, skill: SkillListType) {
	const skillQuery = `INSERT INTO public.skills(character_fk, skill_name, armor_check_penalty, attribute_affecting, classs_skill_bonus, insight_bonus_to_rank, insight_bonus_to_value, is_class_skill, operative_specialization_skill, racial_bonus_to_value, ranks, skill_focus, training_required, base_value ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;

	pool.query(skillQuery, [
		character_fk,
		skill.skillName,
		skill.armorCheckPenalty,
		skill.attributeAffecting,
		skill.classSkillBonus,
		skill.insightBonusToRank,
		skill.insightBonusToValue,
		skill.isClassSkill,
		skill.operativeSpecializationSkill,
		skill.racialBonusToValue,
		skill.ranks,
		skill.skillFocus,
		skill.trainingRequired,
		skill.value,
	]);
}

function insertSpell(
	character_fk: string,
	spellLevel: number,
	spell: SpellListTypes
) {
	const spellQuery = `INSERT INTO public.spells(character_fk, spell_level, standard_action, move_action, swift_action, full_action, reaction, other_action, spell_area, spell_casting_time, spell_description_full, spell_duration, spell_effect, spell_preview_description, spell_range, spell_resistance, spell_saving_throw, spell_school, spell_targets, spell_title ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)`;

	pool.query(spellQuery, [
		character_fk,
		spellLevel,
		spell.actionType[0],
		spell.actionType[1],
		spell.actionType[2],
		spell.actionType[3],
		spell.actionType[4],
		spell.actionType[5],
		spell.spellArea,
		spell.spellCastingTime,
		spell.spellDescriptionFull,
		spell.spellDuration,
		spell.spellEffect,
		spell.spellPreviewDescription,
		spell.spellRange,
		spell.spellResistance,
		spell.spellSavingThrow,
		spell.spellSchool,
		spell.spellTargets,
		spell.spellTitle,
	]);
}
