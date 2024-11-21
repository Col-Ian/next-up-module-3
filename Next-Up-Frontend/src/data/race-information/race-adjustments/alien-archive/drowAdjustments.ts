import AddRacialBonusToSkill from '../../../AddRacialBonusToSkill';
import EditTempCharacterInfoValue from '../../../EditTempCharacterInfoValue';

export default function drowAdjustments() {
	// Ability Score adjustments
	// +2 to Dexterity and Charisma.
	// -2 to Constitution

	// Dexterity
	EditTempCharacterInfoValue(true, 2, 'Dexterity');

	// Charisma
	EditTempCharacterInfoValue(true, 2, 'Charisma');

	// Constitution
	EditTempCharacterInfoValue(false, 2, 'Constitution');

	// FIX SO IT ADDS TO RACIAL
	// +2 bonus to Perception from Keen Senses
	AddRacialBonusToSkill(true, 2, 'Perception');
}
