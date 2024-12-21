CREATE TABLE public.users (
    user_id varchar PRIMARY KEY,
    username varchar NOT NULL,
    user_password varchar UNIQUE NOT NULL,
    user_email varchar NOT NULL
);

CREATE TABLE public.characters (
    id varchar PRIMARY KEY,
    player_fk varchar,
    FOREIGN KEY (player_fk) REFERENCES users(user_id)
);

CREATE TABLE public.character_basic_info (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    character_class varchar,
    character_level integer,
    key_ability_score varchar
    race varchar,
    theme varchar,
    alignment varchar,
    deity varchar,
    gender varchar,
    homeworld varchar,
    character_name varchar,
    character_size varchar,
    speed varchar,
    player_name varchar
);

CREATE TABLE public.text_boxes (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    description_textfield text,
    weapon_proficiencies text,
    armor_proficiencies text,
    languages text,
    skill_notes text,
    profession_name text
);

CREATE TABLE public.ability_scores (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    ability_score_name varchar,
    score integer,
    bonus integer,
    penalty integer
);

CREATE TABLE public.skills (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    skill_name varchar,
    armor_check_penalty boolean,
    attribute_affecting varchar,
    classs_skill_bonus integer,
    insight_bonus_to_rank integer,
    insight_bonus_to_value integer,
    is_class_skill boolean,
    operative_specialization_skill integer,
    racial_bonus_to_value integer,
    ranks integer,
    skill_focus boolean,
    training_required boolean,
    base_value integer
);

CREATE TABLE public.misc_values (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    initiative_misc integer,
    eac_misc integer,
    kac_misc integer,
    damage_reduction varchar,
    resistances varchar,
    fortitude_misc integer,
    reflex_misc integer,
    will_misc integer,
    melee_misc integer,
    ranged_misc integer,
    thrown_misc integer,
    xp_earned varchar,
    next_level varchar,
    hp_current integer,
    hp_temp integer,
    rp_current integer,
    rp_temp integer,
    sp_current integer,
    sp_temp integer
);

CREATE TABLE public.armor (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    armor_eac integer,
    armor_kac integer,
    armor_level integer,
    armor_name varchar,
    armor_proficiency varchar,
    armor_type varchar,
    is_equipped boolean,
    max_dex_bonus integer
);

CREATE TABLE public.weapons (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    weapon_ammo_total integer,
    weapon_ammo_usage integer,
    weapon_critical varchar,
    weapon_damage_roll varchar,
    weapon_damage_type varchar,
    weapon_level integer,
    weapon_name varchar,
    weapon_proficiency varchar,
    weapon_range varchar,
    weapon_to_hit integer,
    weapon_type varchar
);

CREATE TABLE public.abilities (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    ability_description varchar,
    ability_name varchar,
    ability_source varchar,
    standard_action boolean,
    move_action boolean,
    swift_action boolean,
    full_action boolean,
    reaction boolean,
    other_action boolean,
    uses_resolve integer
);

CREATE TABLE public.spells (
    character_fk varchar,
    FOREIGN KEY (character_fk) REFERENCES characters(id),
    spell_level integer,
    standard_action boolean,
    move_action boolean,
    swift_action boolean,
    full_action boolean,
    reaction boolean,
    other_action boolean,
    spell_area varchar,
    spell_casting_time varchar,
    spell_description_full varchar,
    spell_duration varchar,
    spell_effect varchar,
    spell_preview_description varchar,
    spell_range varchar,
    spell_resistance varchar,
    spell_saving_throw varchar,
    spell_school varchar,
    spell_targets varchar,
    spell_title varchar
);