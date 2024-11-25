import { useCallback, useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { setValue } from '../utils/setValue';

export function useAbilities() {
	const { characterID } = useParams();

	const [abilitiesArray, setAbilitiesArray] = useState<AbilityListTypes[]>(
		getValue(`Abilities${characterID}`)
	);

	const [currentCharacterIDAB, setCurrentCharacterID] = useState(characterID);

	useEffect(() => {
		setAbilitiesArray(getValue(`Abilities${characterID}`));
		setCurrentCharacterID(characterID);
	}, [characterID]);

	const updateAbilityArray = useCallback(
		(newAbilityArray: AbilityListTypes[]) => {
			setAbilitiesArray(newAbilityArray);
			setValue(`Abilities${characterID}`, newAbilityArray);
		},
		[characterID]
	);

	return {
		abilitiesArray,
		updateAbilityArray,
		currentCharacterIDAB,
	};
}
