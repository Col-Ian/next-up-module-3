import { useParams } from 'react-router-dom';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './HealthAndResolveBlock.module.css';
import { useFormContext } from 'react-hook-form';
import { useContext } from 'react';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { classList } from '../../../../data/class-information/classList';
import { getValue } from '../../../../utils/getValue';
import { raceList } from '../../../../data/race-information/raceList';
import { GetModifier } from '../../../../utils/GetModifier';

function HealthAndResolveBlock() {
	const { characterID } = useParams();

	const { characterInfoObject } = useContext(CharacterSheetContext);

	const { register } = useFormContext();

	// Following must be calculated inside of this component to keep it updating dynamically while updating ability scores.

	//   Max SP is based off value given from class plus your constitution modifier, all multiplied by character level.
	const maxSP: number =
		(classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints +
			GetModifier(getValue(`Constitution${characterID}`))) *
		getValue(`Level${characterID}`);

	//   Max HP is based off value given from class multiplied by character level and value give by race (only once).
	const maxHP: number =
		classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints *
			getValue(`Level${characterID}`) +
		raceList[characterInfoObject.race].raceHP;

	// Max RP equal to half your character level (rounded down and minimum of 1) plus key ability score modifier.
	let mathFloorHalfLevel = 1;

	if (Math.floor(getValue(`Level${characterID}`) / 2) > 0) {
		mathFloorHalfLevel = Math.floor(getValue(`Level${characterID}`) / 2);
	}

	const keyAbilityObject: AbilityScoreType = getValue(
		`${characterInfoObject.keyAbilityScoreSelected}${characterID}`
	);

	//   Add your Key Ability Score Modifier. If this results negative, then it will be set to a minimum of 1 where the value is called below.
	const maxRP: number = mathFloorHalfLevel + GetModifier(keyAbilityObject);

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='HEALTH AND RESOLVE' />
			<div className={styles.SHRValuesDiv}>
				<div className={styles.TotalCurrentDiv}>
					<div className={styles.head}>TOTAL</div>
					<div className={styles.head}>CURRENT</div>
					<div className={styles.head}>TEMP</div>
				</div>
				<div className={styles.inputDiv}>
					<div className={styles.labelValueColumn}>
						<div className={styles.label}>STAMINA POINTS</div>
						<input type='number' value={maxSP} readOnly />
						<input
							type='number'
							{...register('currentSP')}
							max={maxSP}
							min={0}
						/>
						<input type='number' {...register('tempSP')} min={0} />
					</div>
					<div className={styles.labelValueColumn}>
						<div className={styles.label}>HIT POINTS</div>
						<input type='number' value={maxHP} readOnly />
						<input
							type='number'
							{...register('currentHP')}
							max={maxHP}
							min={0}
						/>
						<input type='number' {...register('tempHP')} min={0} />
					</div>
					<div className={styles.labelValueColumn}>
						<div className={styles.label}>RESOLVE POINTS</div>
						<input type='number' value={maxRP > 0 ? maxRP : 1} readOnly />
						<input
							type='number'
							{...register('currentRP')}
							max={maxRP}
							min={0}
						/>
						<input type='number' {...register('tempRP')} min={0} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HealthAndResolveBlock;
