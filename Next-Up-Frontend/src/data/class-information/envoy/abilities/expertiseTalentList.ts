export const expertiseTalentList: {
	[key: string]: AbilityListTypes;
} = {
	'Additional Skill Expertise (Ex)': {
		abilityName: 'Additional Skill Expertise (Ex)',
		abilityDescription:
			'Choose another skill in which you have at least 1 rank from the list of skills you can choose with the expertise class feature; you can use expertise with that skill. You can choose this talent up to three times, choosing a different skill each time.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Altered Bearing (Ex; Disguise)': {
		abilityName: 'Altered Bearing (Ex; Disguise)',
		abilityDescription:
			"You can quickly adjust your posture, your stride, your demeanor, and the way your clothes and gear fit, causing casual observers to fail to recognize your true appearance. When you attempt a Disguise check to alter minor details of your appearance, you can forgo your expertise die to attempt the check as a move action. You don't reduce the DC by 5 for attempting to alter only minor details, and if an observer succeeds at an opposed Perception check that pierces your disguise, they also realize your true race and what features you have disguised. You can't use this ability for more complex disguises.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
	'Analyst (Ex; Sense Motive)': {
		abilityName: 'Analyst (Ex; Sense Motive)',
		abilityDescription:
			"You have been taught to carefully consider your own assumptions, making it much less likely you assign false motives to other creatures. When using Sense Motive to detect deception or discern a secret message, as long as your expertise die roll result is not a 1, you don't think a truthful statement contains deceptions or infer false information from a secret message even if you fail your check by 5 or more.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Bad Idea (Ex; Intimidate)': {
		abilityName: 'Bad Idea (Ex; Intimidate)',
		abilityDescription:
			"With a few quick words and menacing body language, you can make a foe reconsider starting a fight. When you roll initiative, make an Intimidate check against one creature you're aware of within 30 feet. The DC of this check is equal to either 10 + your opponent's total Intimidate skill bonus, or 15 + 1-1/2 x the opponent's CR, whichever is greater; if the creature has a special bonus to saving throws against fear effects, it adds this bonus to the DC. If you succeed, roll your expertise die and apply the result as a penalty to that creature's initiative result. Once you use this expertise talent, you can't do so again until you rest for 10 minutes to regain Stamina Points. This is a mind-affecting fear effect.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Battlefield Medic (Ex; Medicine)': {
		abilityName: 'Battlefield Medic (Ex; Medicine)',
		abilityDescription:
			'When you attempt a Medicine check to stop bleed damage or administer first aid to a dying creature, you can choose not to roll your expertise die in order to also automatically treat deadly wounds on that creature if your Medicine check is successful. The DC for the check is based on the medical equipment used, using the DC for treat deadly wounds + 5. This does not count as the treat deadly wounds treatment for the purposes of how many times per day a creature can receive this treatment, though a creature can only benefit from battlefield medic once per day. If you also have the surgeon expertise talent, you can increase the DC of a battlefield medic-related Medicine check by a total of 10 to use battlefield medic to treat deadly wounds on a creature one additional time per day (which does not count as a use of the surgeon expertise talent).',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	'Biometric Implants (Ex; Disguise)': {
		abilityName: 'Biometric Implants (Ex; Disguise)',
		abilityDescription:
			"You have small implants that make microscopic alterations to your DNA, allowing you to attempt a Disguise check in place of Computers or Engineering to defeat biometric locks. If you have access to another creature's biometric data, you can duplicate it automatically and open biometric locks keyed to them.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Borrowed Guise (Ex; Disguise)': {
		abilityName: 'Borrowed Guise (Ex; Disguise)',
		abilityDescription:
			"While you are wearing or wielding one or more items with a combined bulk of 1 or more that you have taken from another creature, you can more readily assume a false identity, disguising yourself as a creature of the same race or organization. You don't need a disguise kit to attempt a Disguise check to change your appearance when using this expertise talent, though using one grants you a +2 bonus to your check. If you forgo rolling your expertise die, changing your appearance takes only 1d3 minutes rather than 1d3 x 10 minutes.\nAlternatively, if you have the materials that qualify for you to use this expertise talent, you may forgo your expertise die to attempt to disguise yourself as that exact creature. Anyone who knows that creature well gains a +10 bonus to Perception checks to oppose your disguise.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Cautious Expertise (Ex; see below)': {
		abilityName: 'Cautious Expertise (Ex; see below)',
		abilityDescription:
			'Choose a skill you have selected with the skill expertise class feature. When you take 20 with this skill, you can roll your expertise die twice and take the better result.\nYou can choose this talent up to three times, choosing a different skill selected with the skill expertise class feature each time.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Computer Whiz (Ex; Computers)': {
		abilityName: 'Computer Whiz (Ex; Computers)',
		abilityDescription:
			"When you attempt a Computers check, you can choose not to roll your expertise die until later. After you determine what the check's result would be, you can choose to either roll your expertise die and add it to the total or forgo the expertise die and reroll the check. At 9th level, you can spend 1 Resolve Point to both reroll the check and add the result of your expertise die.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Convincing Liar (Ex; Bluff)': {
		abilityName: 'Convincing Liar (Ex; Bluff)',
		abilityDescription:
			"When you attempt a Bluff check, you can choose not to roll your expertise die until later. After you determine what the check's result would be, you can choose to either roll your expertise die and add the result to the total or forgo the expertise die and reroll the check. At 9th level, you can spend 1 Resolve Point to reroll the check and add the result of your expertise die.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Create Diversion (Ex; Bluff)': {
		abilityName: 'Create Diversion (Ex; Bluff)',
		abilityDescription:
			'When you attempt a Bluff check to create a diversion, you can forgo rolling your expertise die. If you succeed at the check, all your allies within 60 feet also count as having succeeded at creating a diversion until the beginning of your next turn.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Cultural Savant (Ex; Culture)': {
		abilityName: 'Cultural Savant (Ex; Culture)',
		abilityDescription:
			"As long as you have enough time, you can take 20 on Culture checks to recall knowledge, even if you don't have access to a computer terminal or other means of research.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Cunning Disguise (Ex; Disguise)': {
		abilityName: 'Cunning Disguise (Ex; Disguise)',
		abilityDescription:
			'When you attempt an initial Disguise check, you can forgo rolling your expertise die. Instead, the first time a creature would pierce your disguise with a Perception check, treat its result as if it had rolled a natural 1 on its Perception check. This benefit applies only once per disguise. At 9th level, this ability also applies against the second creature who pierces your disguise.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Demolition Expert (Ex; Engineering)': {
		abilityName: 'Demolition Expert (Ex; Engineering)',
		abilityDescription:
			'When you attempt an Engineering check to arm or disable an explosive, you can forgo your expertise die to attempt the check as a full action (rather than the normal required time of 1 minute to arm an explosive or 2d4 rounds to disarm an explosive).',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	'Effortless Innuendo (Ex; Bluff)': {
		abilityName: 'Effortless Innuendo (Ex; Bluff)',
		abilityDescription:
			'When you attempt a Bluff check to pass a secret message, you can forgo rolling your expertise die to pass your secret message to all allies within 60 feet, instead of just to a single ally. In addition, anyone overhearing your message must roll their Sense Motive checks twice and use the lower result when attempting to learn the gist of the message.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Empathic Tracker (Ex; Sense Motive)': {
		abilityName: 'Empathic Tracker (Ex; Sense Motive)',
		abilityDescription:
			"Your ability to read emotions borders on the supernatural. As a full action, you can study a creature within 60 feet and attempt a Sense Motive check; you can choose not to roll your expertise die for this check. The DC of this check is equal to either 10 + the creature's total Bluff skill bonus, or 15 + 1-1/2 x the creature's CR, whichever is greater. If you succeed, you can sense that creature as if you had blindsense (emotion) with a range of 30 feet (or a range of 60 feet if you chose to forego your expertise die) for 10 minutes. If you fail the check, you can't try again for 10 minutes. You can only track one creature in this way at a time, plus an additional creature at 6th, 12th, and 18th levels. If you study another creature beyond this maximum, you cease detecting a creature of your choice with blindsense (emotion).",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	'Engineering Adept (Ex; Engineering)': {
		abilityName: 'Engineering Adept (Ex; Engineering)',
		abilityDescription:
			'When you attempt an Engineering check to disable or repair a device, you can forgo rolling your expertise die to instead halve the time it takes to make the attempt.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Enhance! (Ex; Computers)': {
		abilityName: 'Enhance! (Ex; Computers)',
		abilityDescription:
			"You've mastered methods for improving the fidelity of digital images. When you use Perception or Sense Motive to examine a digital representation of a subject, such as one portrayed on a computer monitor, you can take 20 on your skill check in half the normal time (usually 1 minute), using your Computers skill in place of the applicable skill modifier. When using sensors to scan an enemy during starship combat, you can spend 1 Resolve Point to increase the sensors' range increment by 5 hexes until the end of the round.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Expert Advice (Ex)': {
		abilityName: 'Expert Advice (Ex)',
		abilityDescription:
			"When you are using the aid another action to help a creature succeed at a skill check with a skill in which you have expertise, you can forgo rolling your expertise die. If your aid another attempt succeeds, roll your expertise die and add the result of the roll as an insight bonus to the assisted creature's check in addition to the +2 bonus granted by a successful aid another attempt.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Expert Artificer (Su)': {
		abilityName: 'Expert Artificer (Su)',
		abilityDescription:
			"You have a knack for using, repairing, and learning about enchanted gear, especially objects with which you become familiar. In a process that takes 1 minute, you can use Bluff, Diplomacy, or Intimidate in place of Mysticism to identify a magic item without simultaneously casting detect magic. When you regain your Resolve Points after resting, you can designate a number of magic items and/or hybrid items that you've had in your possession for at least 24 hours to be your attuned items. Once per day per item, you can repair one of your attuned items as a full action, for which you can use Engineering in place of Mysticism.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	'Expert Distraction (Ex; Bluff)': {
		abilityName: 'Expert Distraction (Ex; Bluff)',
		abilityDescription:
			'Whenever you attempt a Bluff check to create a distraction, you can forgo rolling your expertise die. If you do and your skill check succeeds, you can add your expertise die to whichever skill task you attempt as part of the diversion (either a Stealth check to hide or a Sleight of Hand check to palm an object). If you forgo adding your expertise die to a Bluff check to create a distraction that you attempted using the Diversion feat and succeed at your Bluff check, you add your expertise die to every Stealth check to hide that your allies attempt.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Expert Forger (Ex; Computers)': {
		abilityName: 'Expert Forger (Ex; Computers)',
		abilityDescription:
			'You have a database of electronic seals and predesigned templates that allow you forge an official document in a matter of moments. When you attempt a Computers check to create a forgery, as long as you have access to a computer, you can forgo your expertise die to attempt the check as a full action (rather than the normal required time of 1d4 minutes).',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	'Fast Hack (Ex; Computers)': {
		abilityName: 'Fast Hack (Ex; Computers)',
		abilityDescription:
			'When you attempt a Computers check to hack into a computer system, you can forgo rolling your expertise die to instead halve the time it takes to make the attempt (to a minimum of 1 round). At 9th level, if you successfully hack the system, you can also negate a single countermeasure protecting that computer system. You cannot use this talent to negate a countermeasure from the same computer again for 24 hours.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Gregarious Mien (Ex; Diplomacy)': {
		abilityName: 'Gregarious Mien (Ex; Diplomacy)',
		abilityDescription:
			"You can positively change a creature's attitude using the Diplomacy skill by one additional category (or two, for a maximum of four, if you spend the extra time) within a 24-hour period. When doing so, you must forgo your expertise die on the Diplomacy check to change the creature's attitude.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Improvise Surgery (Ex; Medicine)': {
		abilityName: 'Improvise Surgery (Ex; Medicine)',
		abilityDescription:
			'You can improvise most basic medical instruments, allowing you to perform rudimentary surgeries without a medical kit. You can use the Medicine skill to treat deadly wounds without a basic medkit or to provide long-term care to a single patient without an advanced medkit. If you have a basic medkit, you gain a +1 insight bonus to Medicine checks to treat deadly wounds. If you have an advanced medkit, you gain a +2 insight bonus to Medicine checks to treat deadly wounds, and any temporary medical lab you establish using an advanced medkit acts in all ways as an actual medical lab. If you attempt a Medicine check that normally has its DC set by what equipment you use, you use the DC of a basic medkit, or an advanced medkit if you are 5th level or higher.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Inspired Medic (Ex; Medicine)': {
		abilityName: 'Inspired Medic (Ex; Medicine)',
		abilityDescription:
			"When you attempt a Medicine check, you can choose not to roll your expertise die until later. After you determine what the check's result would be, you can choose to either roll your expertise die and add it to the total or forgo the expertise die and reroll the check (see page 243). At 9th level, you can spend 1 Resolve Point to both reroll the check and add the result of your expertise die.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Keen Observer (Ex; Sense Motive)': {
		abilityName: 'Keen Observer (Ex; Sense Motive)',
		abilityDescription:
			'Whenever you interact with a creature under a mental effect for at least 1 minute, the GM attempts an automatic secret Sense Motive check for you without your expertise die. On a success, you learn about the mental effect. If you specifically request a Sense Motive check to sense mental effects, you can attempt a Sense Motive check as normal, including your expertise die, in addition to this automatic check.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Likely to Be Right Here (Ex; Sense Motive)': {
		abilityName: 'Likely to Be Right Here (Ex; Sense Motive)',
		abilityDescription:
			"You can use subtle cues to anticipate the location of a creature. While you are aware of a creature's presence, you can use your Sense Motive bonus to attempt Perception checks to search for that creature. Alternatively, you can forgo your expertise die to use your Sense Motive bonus to attempt Perception checks to search an area.\nEmbri and non-embri characters can select these options if they have the fleshbound mask or masked emotions trait.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Maneuver Expertise (Ex; Combat Expertise)': {
		abilityName: 'Maneuver Expertise (Ex; Combat Expertise)',
		abilityDescription:
			"You're exceptionally skilled at all manner of self-defense, allowing you to easily perform and defend against combat maneuvers. Choose one combat maneuver. When resisting this combat maneuver, you gain a bonus to KAC equal to the minimum result of your expertise die. Additionally, if you attempt an attack roll to resolve the chosen combat maneuver, you can spend 1 Resolve Point as part of the action to add your expertise die to the attack roll's result as an insight bonus. Once you have added this bonus to a combat maneuver attack roll, you can't do so again until you have regained Stamina Points following a 10-minute rest.\nYou must have the combat expertise alternate class feature to select this expertise talent. You can take this expertise talent multiple times. Its effects do not stack. Each time you take it, it applies to a different combat maneuver.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Master of Disguise (Ex; Disguise)': {
		abilityName: 'Master of Disguise (Ex; Disguise)',
		abilityDescription:
			'Whenever you attempt a Disguise check, you can forgo adding your expertise die to your skill check to reduce the total penalty you take for having altered your appearance by an amount equal to your envoy level, to a minimum penalty of 0. This penalty reduction applies only to disguises that change your appearance in the following ways: alter minor details, add major features, disguise yourself as a different race of the same creature type, or disguise yourself as a different creature type.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Menacing Gaze (Ex; Intimidate)': {
		abilityName: 'Menacing Gaze (Ex; Intimidate)',
		abilityDescription:
			'When you attempt an Intimidate check to demoralize foes, you can forgo your expertise die to attempt to briefly demoralize a small group as a full action. You attempt an Intimidate check against foes within 60 feet, no two of which can be more than 20 feet apart. The DC of this check is equal to the highest DC to demoralize any one of the foes. If you are successful, the targets gain the shaken condition for 1 round (even if your result exceeded the DC by 5 or more). Once you use this ability against a creature, it is immune to this talent for 24 hours.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	'Miracle Worker (Ex; Medicine)': {
		abilityName: 'Miracle Worker (Ex; Medicine)',
		abilityDescription:
			'Your high spirits and unrelenting resolve to save lives allows you to pull your patients from the brink of death, even in dire circumstances. If you succeed at a Medicine check to treat deadly wounds and exceed the DC by 5 or more, you add your Charisma modifier in addition to your Intelligence modifier to the amount of Hit Points restored. If you forgo your expertise die on a Medicine check to treat deadly wounds and exceed the DC by 5 or more, your target regains an additional 1d8 Hit Points. This increases to 3d8 at 4th level, 5d8 at 7th level, 12d8 at 10th level, 16d8 at 13th level, or 20d8 at 16th level.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'One Of Us (Ex; Culture)': {
		abilityName: 'One Of Us (Ex; Culture)',
		abilityDescription:
			"You use your knowledge of a culture to make others feel that you belong. When you attempt a Culture check to recall knowledge about a specific place, society, or group, you can forego rolling your expertise die. If you do so and your skill check result lets you learn at least one piece of information, you also gain 2 bonus expertise dice, plus an additional expertise die for every 4 envoy levels you have. Whenever you attempt a Diplomacy check to change another's attitude, a Disguise check to alter your appearance, or a Stealth check to hide by blending into a crowd, you can expend one of these bonus expertise dice to apply your expertise class feature to the check—though only if the check involves the place, society, or group about which you recalled knowledge. For example, you could better Disguise yourself as a member of a cult, blend in among a corporation's workers, or make friends with a neighborhood's inhabitants. When you rest for 8 hours to regain Resolve Points, any remaining bonus expertise dice are lost.\nYou can use this expertise talent once per day without spending Resolve Points, and you must spend 1 Resolve Point each subsequent time you use the ability that day. If you use the expertise talent again, you lose any previously gained bonus expertise dice.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Power User (Ex; Computers)': {
		abilityName: 'Power User (Ex; Computers)',
		abilityDescription:
			'You delight in using your technological expertise as a blunt instrument against the fragile egos of less tech-savvy individuals. By forgoing your expertise die, you can make a Computers check in place of an Intimidate check when attempting to bully or demoralize any creature that has a computer, comm unit, or similar device (including the comm unit typically included with armor). This is a language-dependent ability.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Rattling Presence (Ex; Intimidate)': {
		abilityName: 'Rattling Presence (Ex; Intimidate)',
		abilityDescription:
			'When you attempt an Intimidate check to demoralize an opponent, you can forgo rolling your expertise die to automatically increase the duration of the shaken condition by 1 round on a successful check. At 9th level, you instead increase the duration by 2 rounds on a success when using this talent.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Read the Room (Ex; Sense Motive)': {
		abilityName: 'Read the Room (Ex; Sense Motive)',
		abilityDescription:
			"You're a master at studying reactions in a conversation, sensing topics that might upset others and adjusting your own arguments on the fly. If you would fail a Bluff check to lie, a Diplomacy check to change attitude, or an Intimidate check to bully, you can roll your expertise die. If the sum of your skill check result plus the expertise die would have succeeded at the check, you realize you're about to say something inopportune and can change the subject without causing suspicion; your check neither succeeds nor fails, allowing you to retry the action and skill check later by spending the necessary time again. Once you use this expertise talent, you can't do so again for 1 hour or until you rest for 10 minutes to regain Stamina Points, whichever comes first.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Reasonable Excuse (Ex; Bluff)': {
		abilityName: 'Reasonable Excuse (Ex; Bluff)',
		abilityDescription:
			'You can speak with such conviction that you earn the benefit of the doubt even under outlandish circumstances. When caught in a compromising situation that clearly indicates your guilt or would initiate combat, you can attempt an immediate Bluff check before initiative is rolled to lie and absolve yourself, but you must forgo your expertise die on this check. A successful check will stop an outbreak of violence as long as you (and anyone with you) is cooperative with those you are lying to (for example, leaving a restricted area or handing over stolen property you happen to “find”). You cannot use this ability to escape consequences for violence and other overtly hostile actions.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Saving Expertise (Ex; Special)': {
		abilityName: 'Saving Expertise (Ex; Special)',
		abilityDescription:
			'Choose a saving throw with which you have a base bonus of +3 or higher. Whenever you attempt a saving throw of the chosen type and determine the result (but before you learn the outcome), you can spend 1 Resolve Point to either roll your expertise die and add the result to the total or reroll the saving throw.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Scent of Danger (Ex; Sense Motive)': {
		abilityName: 'Scent of Danger (Ex; Sense Motive)',
		abilityDescription:
			"You can smell when there's trouble brewing. If you're surprised in combat, you don't have the flat-footed condition for being surprised against any combatants you can detect with blindsense (scent) or blindsight (scent). When you roll initiative and can detect at least one combatant with your blindsense (scent) or blindsight (scent), you can spend 1 Resolve Point to roll your expertise die and add its result as an insight bonus to your initiative check.\nYou must have blindsense (scent) or blindsight (scent) to select this ability.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Security Audit (Ex; Culture)': {
		abilityName: 'Security Audit (Ex; Culture)',
		abilityDescription:
			"You use your knowledge about the social or cultural tendencies of a computer's owner to make educated guesses about likely passwords or other security practices. By testing possible passwords for 1 minute, you can attempt a Culture check (DC = the DC to hack the computer). If you succeed, you reduce the DC of Computers checks to hack the computer as though you had the proper password.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Skilled Linguist (Ex; Culture)': {
		abilityName: 'Skilled Linguist (Ex; Culture)',
		abilityDescription:
			'You can speak and read a number of bonus languages equal to your ranks in Culture. Additionally, when you attempt a Culture check to decipher writing, you can forgo your expertise die to attempt the check as a full action (rather than the normal 1 minute) per approximately 250 words of writing or fewer.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, true, false, false],
		usesResolve: 0,
	},
	'Slick Customer (Ex; Diplomacy)': {
		abilityName: 'Slick Customer (Ex; Diplomacy)',
		abilityDescription:
			"When you attempt a Diplomacy check, you can choose not to roll your expertise die until later. After you determine what the check's result would be, you can choose to either roll your expertise die and add it to the total or forgo the expertise die and reroll the check . At 9th level, you can spend 1 Resolve Point to both reroll the check and add the result of your expertise die.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Steady Hands (Ex; Engineering)': {
		abilityName: 'Steady Hands (Ex; Engineering)',
		abilityDescription:
			"You're cool under pressure, and even your mistakes are less frequently catastrophic. Once per day, if you fail by 5 or more while using Engineering to arm an explosive or to disable a device, you can immediately reroll the check.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Stone-Faced Liar (Ex; Bluff)': {
		abilityName: 'Stone-Faced Liar (Ex; Bluff)',
		abilityDescription:
			"You deliver lies in a monotone as naturally as any other routine communication. When you attempt a Bluff check to lie, you can forgo your expertise die to make the DC of your Bluff check equal to 10 + the target's total Sense Motive bonus, even if the target is suspicious of you. At 9th level, you can instead spend 1 Resolve Point to use the above DC, add your expertise die instead of forgoing it, and ignore the modifier the DC would have if the target is unfriendly to you.\nEmbri and non-embri characters can select these options if they have the fleshbound mask or masked emotions trait.",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Student of Technology (Ex; Engineering)': {
		abilityName: 'Student of Technology (Ex; Engineering)',
		abilityDescription:
			'As long as you have the time to do so, you can take 20 (see page 133) on Engineering checks to identify creatures and technology, even if you do not have access to a computer terminal or other means of research. If the creature or technology was created by a group or individual you are familiar with (normally including any major corporation or military), on a successful check you also identify what group created the object identified.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Surgeon (Ex; Medicine)': {
		abilityName: 'Surgeon (Ex; Medicine)',
		abilityDescription:
			'You can use Medicine to treat deadly wounds on a patient once each day in addition to the normal allowances for the medical equipment you are using. Because performing this level of advanced medicine is difficult and time consuming, the DC for this additional treatment increases by 5 and the skill check takes 1 hour.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Tech Familiarity (Ex; Culture)': {
		abilityName: 'Tech Familiarity (Ex; Culture)',
		abilityDescription:
			'If you forgo rolling your expertise die on a Culture check, you can use Culture to identify hybrid, magic, and technological items as though you were using the Engineering or Mysticism skills.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Universal Diplomat (Ex; Diplomacy)': {
		abilityName: 'Universal Diplomat (Ex; Diplomacy)',
		abilityDescription:
			"Your Diplomacy checks to change a creature's attitude are not language-dependent. This allows you to use Diplomacy to change the attitude of a creature with whom you do not share a common language, as well as a creature with an Intelligence score of 1 or 2 (creatures with no Intelligence score can't have their attitudes improved using the Diplomacy skill unless the GM says otherwise).",
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
	'Well Informed (Ex; Diplomacy)': {
		abilityName: 'Well Informed (Ex; Diplomacy)',
		abilityDescription:
			'You keep yourself as up to date as possible about the events and major figures of any region you are in. Once you have been in a settlement or region for at least 24 hours, when you attempt a Diplomacy check to gather information, you can forgo your expertise die to attempt the check as a swift action (rather than the normal 1d4 hours).',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, true, false, false, false],
		usesResolve: 0,
	},
	"You Don't Say (Ex; Diplomacy)": {
		abilityName: "You Don't Say (Ex; Diplomacy)",
		abilityDescription:
			'Your talent for careful listening often coaxes others into volunteering intriguing information. When you use Diplomacy to gather information, you can forego rolling your expertise die. If you do so and succeed at the check, you learn an additional piece of information about the chosen topic or individual. Using this ability requires at least 10 minutes of interaction, even if you have an ability that would allow you to gather information more quickly.',
		abilitySource: 'Envoy (Expertise Talent)',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	},
};
