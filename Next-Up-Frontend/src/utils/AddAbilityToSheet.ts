import { Dispatch, SetStateAction } from 'react';
import { getValue } from './getValue.ts';
import { setValue } from './setValue.ts';

export function AddAbilityToSheet(
	keyID: string | undefined,
	setNewArray: Dispatch<SetStateAction<AbilityListTypes[]>>
) {
	const newArray = getValue(`Abilities${keyID}`);

	const blankAbility: AbilityListTypes = {
		abilityName: '',
		abilityDescription: '',
		abilitySource: '',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	};

	setValue(`Abilities${keyID}`, [...newArray, blankAbility]);

	setNewArray(getValue(`Abilities${keyID}`));
}
