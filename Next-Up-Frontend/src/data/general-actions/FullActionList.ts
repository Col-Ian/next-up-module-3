export const FullActionList: AbilityListTypes[] = [
	{
		abilityName: 'Charge',
		abilityDescription:
			"Charging is a full action that allows you to move up to double your speed and make a melee attack at the end of the movement. You can draw a weapon during a charge attack if your base attack bonus is at least +1.\nCharging carries tight restrictions on how you can move. You must move at least 10 feet (2 squares), and all movement must be directly toward the designated opponent, though diagonal movement is allowed. You must have a clear path toward the opponent, and you must move to the space closest to your starting square from which you can attack the opponent. If this space is occupied or blocked, you can't charge. If any line from your starting space to the ending space passes through a square that blocks movement, slows movement (such as difficult terrain), or contains a creature (even an ally), you can't charge. You can still move through helpless creatures during a charge. If you don't have line of sight (see page 271 of the CRB) to the opponent at the start of your turn, you can't charge that opponent.\nAttacking on a Charge: After moving, you can make a single melee attack. You take a -2 penalty to the attack roll and a -2 penalty to your AC until the start of your next turn. You can't move any farther after the attack. Some classes, including solarian and soldier, grant abilities that modify attacks made on charges.",
		abilitySource: '',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Coup de Grace',
		abilityDescription:
			'As a full action, you can deliver a special attack called a coup de grace to an adjacent helpless opponent. You automatically hit and score a critical hit. If the target survives the damage, he must succeed at a Fortitude saving throw (DC = 10 + your level or CR) or die. However, if the target is immune to critical hits, the coup de grace does not deal critical damage or effects, nor does it force the target to succeed at a saving throw or die.',
		abilitySource: '',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Fight Defensively',
		abilityDescription:
			'You can fight defensively when attacking as a full action. If you do so, you take a -4 penalty to all attacks in that round (in addition to the normal penalties for making a full attack) to gain a +2 bonus to your AC until the start of your next turn.',
		abilitySource: '',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Full Attack',
		abilityDescription:
			"You can spend a full action to make two attacks, each with a -4 penalty to the attack rolls. These attacks can be made with the same weapon or different weapons, though certain weapons have a firing speed so slow that you can't shoot them more than once in a round, even with a full attack. These weapons have the unwieldy special property (see page 182).\nCertain weapons have special individualized full attacks. For instance, some weapons have a fully automatic attack mode. Sometimes special full attacks, such as the soldier's onslaught class feature, require specialized training in order to gain their benefits.",
		abilitySource: '',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Reposition (Full Action, Combat Maneuver)',
		abilityDescription:
			'If you reposition a creature as a full action, you can move a distance equal to the distance you repositioned your target (up to your move speed), dragging the target along with you.',
		abilitySource: '',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Run',
		abilityDescription:
			"You can run as a full action. When you run, you can move up to four times your speed in a straight line. You gain the flat-footed condition, and you can't run if you must cross difficult terrain or can't see where you're going. Running provokes attacks of opportunity (see below). You can run for a number of rounds equal to your Constitution score. See page 258 of the CRB for information on long-distance running.",
		abilitySource: '',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Withdraw',
		abilityDescription:
			"Withdrawing from melee combat is a full action. When you withdraw, you can move up to double your speed. The square you start out in is not considered threatened by any opponent you can see, and therefore visible enemies don't get to make attacks of opportunity against you when you move from that square. Unseen enemies still get attacks of opportunity against you, and you can't withdraw from combat if you're blinded and have no other precise senses (such as blindsight). If, during the process of withdrawing, you move out of a threatened square other than the one you in which started, enemies can make attacks of opportunity as normal.",
		abilitySource: '',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
];
