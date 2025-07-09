import { pool } from '../../utils/databasePool';

export function insertSpell(
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
