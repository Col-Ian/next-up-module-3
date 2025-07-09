import { pool } from '../../utils/databasePool';

export function insertSkill(character_fk: string, skill: SkillListType) {
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
