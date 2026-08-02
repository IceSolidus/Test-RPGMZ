//=============================================================================
// VisuStella MZ - Skill Mastery
// VisuMZ_3_SkillMastery.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_SkillMastery = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillMastery = VisuMZ.SkillMastery || {};
VisuMZ.SkillMastery.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.03] [SkillMastery]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Mastery_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * With this plugin, a Skill Mastery mechanic is put into play where when an
 * actor or enemy uses a skill enough times, it can gain mastery levels. With
 * increased mastery levels, damage/healing can increase, costs can be changed,
 * cooldown turns, state turns, buff turns, and debuff turns can also be
 * adjusted based on mastery levels.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actors and enemies that use skills enough times can raise their mastery
 *   levels to become more powerful.
 * * Mastery effects include damage/healing amplification, cost reduction or
 *   increases, changes to cooldown turns, changes to buff/debuff turns, and/or
 *   changes to state turns.
 * * Customize these changes individually per skill through notetags.
 * * Adjust the amount of Skill Mastery EXP needed through a formula in the
 *   Plugin Parameters.
 * * Setup a variable to automatically record the skill mastery level of the
 *   last used skill in battle or in the skill menu.
 * * Plugin Commands allow you to manually adjust the gain of levels and skill
 *   mastery EXP.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_SkillsStatesCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_3_VisualGaugeStyles
 *
 * If VisuStella MZ's Visual Gauge Styles is also installed, you can change the
 * way the Skill Mastery EXP gauge appears.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Mastery-Related Notetags ===
 * 
 * ---
 *
 * <Max Skill Mastery Level: x>
 *
 * - Used for: Skill Notetags
 * - Sets the maximum skill mastery level for this skill to 'x'.
 * - Replace 'x' with a number representing the max skill mastery level.
 * - If this notetag is not used, refer to the default max level found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <JS Skill Mastery EXP>
 *  code
 *  code
 *  exp = code;
 * </JS Skill Mastery EXP>
 *
 * - Used for: Skill Notetags
 * - Create a custom skill mastery EXP formula for this skill.
 * - The variable 'user' refers to user of the skill.
 * - The variable 'targetLevel' refers to the target level whose EXP is being
 *   calculated for.
 * - The variable 'exp' is returned and determines how much EXP is needed to
 *   achieve the target level.
 *
 * ---
 *
 * <Starting Skill Masteries>
 *  Skill id: level
 *  Skill id: level, exp
 *  name: level
 *  name: level, exp
 * </Starting Skill Masteries>
 *
 * - Used for: Actor, Enemy Notetags
 * - Allows you to adjust the starting skill mastery levels for actors and
 *   enemies. Initialized actors will also reset their mastery levels to these
 *   values.
 * - Replace 'id' with a number presenting the ID of the skill to set the
 *   mastery level for.
 * - Replace 'name' with the name of the skill to set the mastery level for.
 * - Replace 'level' with a number representing the starting mastery level.
 * - Replace 'exp' with a number representing the current mastery level EXP.
 *
 * ---
 * 
 * === Mastery Effect-Related Notetags ===
 * 
 * ---
 *
 * <Mastery Effect: +x HP Cost Per Level>
 * <Mastery Effect: -x HP Cost Per Level>
 *
 * <Mastery Effect: +x% HP Cost Per Level>
 * <Mastery Effect: -x% HP Cost Per Level>
 *
 * <Mastery Effect: +x MP Cost Per Level>
 * <Mastery Effect: -x MP Cost Per Level>
 *
 * <Mastery Effect: +x% MP Cost Per Level>
 * <Mastery Effect: -x% MP Cost Per Level>
 *
 * <Mastery Effect: +x TP Cost Per Level>
 * <Mastery Effect: -x TP Cost Per Level>
 *
 * <Mastery Effect: +x% TP Cost Per Level>
 * <Mastery Effect: -x% TP Cost Per Level>
 *
 * - Used for: Skill Notetags
 * - Alters the HP, MP, and/or TP costs of the skill per mastery level.
 * - Replace 'x' with a number representing either a flat change or percentile
 *   change in skill cost.
 * - Skill costs cannot be altered unless the base cost is at least above 0.
 * - Depending on the Plugin Parameter settings, skill costs cannot reach 0.
 * - If these notetags are not used, refer to the default settings found in
 *   the Plugin Parameters.
 *
 * ---
 *
 * <Mastery Effect: +x Damage Per Level>
 * <Mastery Effect: -x Damage Per Level>
 * 
 * <Mastery Effect: +x% Damage Per Level>
 * <Mastery Effect: -x% Damage Per Level>
 *
 * <Mastery Effect: +x Healing Per Level>
 * <Mastery Effect: -x Healing Per Level>
 * 
 * <Mastery Effect: +x% Healing Per Level>
 * <Mastery Effect: -x% Healing Per Level>
 *
 * - Used for: Skill Notetags
 * - Alters the damage/healing of the skill per mastery level.
 * - Replace 'x' with a number representing either a flat change or percentile
 *   change in damage/healing.
 * - If these notetags are not used, refer to the default settings found in
 *   the Plugin Parameters.
 *
 * ---
 *
 * <Mastery Effect: +x Cooldown Turns Per Level>
 * <Mastery Effect: -x Cooldown Turns Per Level>
 *
 * <Mastery Effect: +x Buff Turns Per Level>
 * <Mastery Effect: -x Buff Turns Per Level>
 *
 * <Mastery Effect: +x Debuff Turns Per Level>
 * <Mastery Effect: -x Debuff Turns Per Level>
 *
 * <Mastery Effect: +x State Turns Per Level>
 * <Mastery Effect: -x State Turns Per Level>
 *
 * - Used for: Skill Notetags
 * - Alters the cooldown, buff, debuff, or state turns of the skill per
 *   mastery level.
 * - Replace 'x' with a number representing either the turn change.
 * - Depending on the Plugin Parameters, cooldowns may or may not be able
 *   to reach zero due to this effect.
 * - Buffs, debuffs, and state turns are able to reach zero values because they
 *   can still hold an effect at zero turns.
 * - If these notetags are not used, refer to the default settings found in
 *   the Plugin Parameters.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Gain Skill Mastery / EXP
 * - Target actor(s) gain Skill Mastery and/or EXP.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Gains this many mastery levels for the skill.
 *
 *     EXP:
 *     - Gains this much exp of the mastery level.
 *
 * ---
 *
 * Actor: Set Skill Mastery / EXP
 * - Sets the Skill Mastery level and EXP for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Sets the mastery level of the skill.
 *
 *     EXP:
 *     - Sets the exp of the current mastery level.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Gain Skill Mastery / EXP
 * - Target enemy(ies) gain Skill Mastery and/or EXP.
 *
 *   Enemy Index(es):
 *   - Select which Enemy Index(es) to affect.
 *   - Index values start at 0.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Gains this many mastery levels for the skill.
 *
 *     EXP:
 *     - Gains this much exp of the mastery level.
 *
 * ---
 *
 * Enemy: Set Skill Mastery / EXP
 * - Sets the Skill Mastery level and EXP for target enemy(ies).
 *
 *   Enemy Index(es):
 *   - Select which Enemy Index(es) to affect.
 *   - Index values start at 0.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Sets the mastery level of the skill.
 *
 *     EXP:
 *     - Sets the exp of the current mastery level.
 *
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Data Retrieval-Related Script Calls ===
 * 
 * ---
 *
 * $actorSkillMasteryLevel(actorID, skillID)
 * $actorSkillMasteryExp(actorID, skillID)
 * 
 * - These will return a numeric value detailing the level/exp of the actor
 *   being specified.
 * - Replace 'actorID' with a number representing the ID of the actor to look
 *   up the skill mastery level or exp of.
 * - Replace 'skillID' with a number representing the ID of the skill to look
 *   up the skill mastery level or exp of.
 * - This will return a number value.
 * 
 *   Examples:
 * 
 *   $actorSkillMasteryLevel(6, 99)
 *   $actorSkillMasteryExp(7, 52)
 *
 * ---
 *
 * $enemySkillMasteryLevel(enemyIndex, skillID)
 * $enemySkillMasteryExp(enemyIndex, skillID)
 * 
 * - These will return a numeric value detailing the level/exp of the enemy
 *   being specified.
 * - Replace 'enemyIndex' with a number representing the index position of the
 *   enemy to look up the skill mastery level or exp of.
 *   - Index values for enemy troops typically range from 0 to 7, with 0 being
 *     the first enemy inserted into a troop.
 * - Replace 'skillID' with a number representing the ID of the skill to look
 *   up the skill mastery level or exp of.
 * - This will return a number value.
 * 
 *   Examples:
 * 
 *   $enemySkillMasteryLevel(0, 99)
 *   $enemySkillMasteryLevel(2, 52)
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Adjust the general settings involving this plugin including mechanics and
 * default mastery effect values.
 *
 * ---
 *
 * Auto
 * 
 *   Variable: Skill Level:
 *   - Select a variable ID to automatically record the last used skill's
 *     mastery level.
 *   - 0 to not use.
 * 
 * ---
 * 
 * Defaults
 * 
 *   EXP Formula:
 *   - Default formula used to calculate needed EXP.
 *   - Return: exp.
 *   - Variables: user, skill, targetLevel.
 * 
 *   Max Level:
 *   - Default max level for skill masteries.
 * 
 * ---
 * 
 * Defaults > Effects Per Level
 * 
 *   HP Cost:
 *   HP% Cost:
 *   MP Cost:
 *   MP% Cost:
 *   TP Cost:
 *   TP% Cost:
 *   Damage/Heal:
 *   Damage/Heal%:
 *   Cooldown Turns:
 *   Buff Turns:
 *   Debuff Turns:
 *   State Turns:
 *   - Default mastery effect bonus per level.
 *
 * ---
 *
 * Prevent EXP Gain
 * 
 *   Basic Attack?:
 *   - Prevent EXP gain for basic attacks?
 * 
 *   Basic Guard?:
 *   - Prevent EXP gain for basic guarding?
 *
 * ---
 *
 * Prevent Effects
 * 
 *   Costs to Zero?:
 *   - Prevent costs from reaching zero?
 * 
 *   Cooldowns to Zero?:
 *   - Prevent cooldowns from reaching zero?
 * 
 * ---
 * 
 * Display
 * 
 *   Name Format:
 *   - Change how skill names appear with mastery levels.
 *   - %1 - Skill Name, %2 - Mastery Level.
 * 
 *   Max Gauge Width:
 *   - Gauge widths adjust to the window size but there is a maximum gauge
 *     width amount.
 * 
 *   Gauge Color 1:
 *   Gauge Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Style:
 *   - Select the gauge style to use for skill mastery EXP.
 *   - Requires VisuMZ_3_VisualGaugeStyles!
 *
 * ---
 * 
 * Window_ActorCommand
 * 
 *   Show Level in Name?:
 *   - Show the skill level in name for single skills?
 *   - Only applies to Window_ActorCommand!
 *   - Not all skill name displays will show skill levels.
 * 
 *   Show Mastery Gauge?:
 *   - Show the mastery gauge for single skills?
 *   - Only applies to Window_ActorCommand!
 *   - Not all skill name displays will show skill masteries.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Level Up Effect Settings
 * ============================================================================
 *
 * These settings let you adjust the in-battle mastery level up effects used
 * for this plugin.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Level Up Sound Settings
 * ============================================================================
 *
 * These settings let you adjust the sound effects used for this plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: July 17, 2025
 * * Bug Fixes!
 * ** Before, if a skill with a common event would defeat an enemy, it
 *    wouldn't grant the user any mastery EXP. Fix made by Arisu.
 * * Compatibility Update!
 * ** Better compatibility with Equip Battle Skills!
 * 
 * Version 1.02: March 20, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > General > Window_ActorCommand > Show Level in Name?
 * **** Show the skill level in name for single skills?
 * **** Only applies to Window_ActorCommand!
 * **** Not all skill name displays will show skill levels.
 * *** Parameters > General > Window_ActorCommand > Show Mastery Gauge?
 * **** Show the mastery gauge for single skills?
 * **** Only applies to Window_ActorCommand!
 * **** Not all skill name displays will show skill levels.
 * 
 * Version 1.01: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New script calls added by Arisu:
 * *** $actorSkillMasteryLevel(actorID, skillID)
 * *** $actorSkillMasteryExp(actorID, skillID)
 * *** $enemySkillMasteryLevel(enemyIndex, skillID)
 * *** $enemySkillMasteryExp(enemyIndex, skillID)
 * **** Please refer to the help file on how to use these script calls.
 * 
 * Version 1.00 Official Release Date: June 28, 2023
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorGainSkillMasteryExp
 * @text Actor: Gain Skill Mastery / EXP
 * @desc Target actor(s) gain Skill Mastery and/or EXP.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Gains this many mastery levels for the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Gains this much exp of the mastery level.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorSetSkillMasteryExp
 * @text Actor: Set Skill Mastery / EXP
 * @desc Sets the Skill Mastery level and EXP for target actor(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Sets the mastery level of the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Sets the exp of the current mastery level.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Enemy
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyGainSkillMasteryExp
 * @text Enemy: Gain Skill Mastery / EXP
 * @desc Target enemy(ies) gain Skill Mastery and/or EXP.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actor[]
 * @desc Select which Enemy Index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Gains this many mastery levels for the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Gains this much exp of the mastery level.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemySetSkillMasteryExp
 * @text Enemy: Set Skill Mastery / EXP
 * @desc Sets the Skill Mastery level and EXP for target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actor[]
 * @desc Select which Enemy Index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Sets the mastery level of the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Sets the exp of the current mastery level.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param SkillMastery
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc Adjust the general settings involving this plugin including mechanics and default values.
 * @default {"Auto":"","AutoVariableID:num":"0","Defaults":"","DefaultExpFormula:json":"\"exp = targetLevel * 3\"","DefaultMaxLevel:num":"99","DefaultEffects":"","hpCostFlat:num":"-0","hpCostRate:num":"-0.10","mpCostFlat:num":"-0","mpCostRate:num":"-0.10","tpCostFlat:num":"-0","tpCostRate:num":"-0.10","dmgFlat:num":"+0","dmgRate:num":"+0.20","cooldown:num":"-1","buffTurn:num":"+1","debuffTurn:num":"+1","stateTurn:num":"+1","PreventExp":"","preventExpForAttack:eval":"true","preventExpForGuard:eval":"true","PreventEffect":"","preventCostModToZero:eval":"true","preventCooldownModToZero:eval":"true","Display":"","masteryFmt:str":"Lv%2 %1","maxGaugeWidth:num":"384","gaugeColor1:str":"12","gaugeColor2:str":"4","gaugeStyle:str":"Growth"}
 *
 * @param Effect:struct
 * @text Level Up Effect Settings
 * @type struct<Effect>
 * @desc These settings let you adjust the in-battle mastery level up effects used for this plugin.
 * @default {"Animation":"","AnimationID:num":"45","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"SKILL MASTERY UP!","TextColor:str":"6","FlashColor:eval":"[255, 255, 0, 160]","FlashDuration:num":"600"}
 *
 * @param Sound:struct
 * @text Level Up Sound Settings
 * @type struct<Sound>
 * @desc These settings let you adjust the sound effects used for this plugin.
 * @default {"name:str":"Barrier","volume:num":"90","pitch:num":"120","pan:num":"0"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Auto
 *
 * @param AutoVariableID:num
 * @text Variable: Skill Level
 * @parent Auto
 * @type variable
 * @desc Select a variable ID to automatically record the last
 * used skill's mastery level. 0 to not use.
 * @default 0
 * 
 * @param Defaults
 * 
 * @param DefaultExpFormula:json
 * @text EXP Formula
 * @type note
 * @parent Defaults
 * @desc Default formula used to calculate needed EXP.
 * Return: exp. Variables: user, skill, targetLevel.
 * @default "exp = targetLevel * 3"
 *
 * @param DefaultMaxLevel:num
 * @text Max Level
 * @parent Defaults
 * @desc Default max level for skill masteries.
 * @default 99
 * 
 * @param DefaultEffects
 * @text Effects Per Level
 * @parent Defaults
 *
 * @param hpCostFlat:num
 * @text HP Cost
 * @parent DefaultEffects
 * @desc Default flat HP Cost bonus per level.
 * @default -0
 *
 * @param hpCostRate:num
 * @text HP% Cost
 * @parent DefaultEffects
 * @desc Default HP Cost rate bonus per level.
 * @default -0.10
 *
 * @param mpCostFlat:num
 * @text MP Cost
 * @parent DefaultEffects
 * @desc Default flat MP Cost bonus per level.
 * @default -0
 *
 * @param mpCostRate:num
 * @text MP% Cost
 * @parent DefaultEffects
 * @desc Default MP Cost rate bonus per level.
 * @default -0.10
 *
 * @param tpCostFlat:num
 * @text TP Cost
 * @parent DefaultEffects
 * @desc Default flat TP Cost bonus per level.
 * @default -0
 *
 * @param tpCostRate:num
 * @text TP% Cost
 * @parent DefaultEffects
 * @desc Default TP Cost rate bonus per level.
 * @default -0.10
 *
 * @param dmgFlat:num
 * @text Damage/Heal
 * @parent DefaultEffects
 * @desc Default flat damage/heal bonus per level.
 * @default +0
 *
 * @param dmgRate:num
 * @text Damage/Heal%
 * @parent DefaultEffects
 * @desc Default damage/heal rate bonus per level.
 * @default +0.20
 *
 * @param cooldown:num
 * @text Cooldown Turns
 * @parent DefaultEffects
 * @desc Default cooldown turn bonus per level.
 * @default -1
 *
 * @param buffTurn:num
 * @text Buff Turns
 * @parent DefaultEffects
 * @desc Default buff turn bonus per level.
 * @default +1
 *
 * @param debuffTurn:num
 * @text Debuff Turns
 * @parent DefaultEffects
 * @desc Default debuff turn bonus per level.
 * @default +1
 *
 * @param stateTurn:num
 * @text State Turns
 * @parent DefaultEffects
 * @desc Default state turn bonus per level.
 * @default +1
 *
 * @param PreventExp
 * @text Prevent EXP Gain
 *
 * @param preventExpForAttack:eval
 * @text Basic Attack?
 * @parent PreventExp
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent EXP gain for basic attacks?
 * @default true
 *
 * @param preventExpForGuard:eval
 * @text Basic Guard?
 * @parent PreventExp
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent EXP gain for basic guarding?
 * @default true
 * 
 * @param PreventEffect
 * @text Prevent Effects
 *
 * @param preventCostModToZero:eval
 * @text Costs to Zero?
 * @parent PreventEffect
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent costs from reaching zero?
 * @default true
 *
 * @param preventCooldownModToZero:eval
 * @text Cooldowns to Zero?
 * @parent PreventEffect
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent cooldowns from reaching zero?
 * @default true
 * 
 * @param Display
 * @text Visual Display
 *
 * @param masteryFmt:str
 * @text Name Format
 * @parent Display
 * @desc Change how skill names appear with mastery levels.
 * %1 - Skill Name, %2 - Mastery Level.
 * @default Lv%2 %1
 *
 * @param maxGaugeWidth:num
 * @text Max Gauge Width
 * @parent Display
 * @desc Gauge widths adjust to the window size but there is
 * a maximum gauge width amount.
 * @default 384
 *
 * @param gaugeColor1:str
 * @text Gauge Color 1
 * @parent Display
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 12
 *
 * @param gaugeColor2:str
 * @text Gauge Color 2
 * @parent Display
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 * 
 * @param gaugeStyle:str
 * @text Gauge Style
 * @parent Display
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for skill mastery EXP.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Growth
 * 
 * @param ActorCommand
 * @text Window_ActorCommand
 *
 * @param showBattleCommandLvName:eval
 * @text Show Level in Name?
 * @parent ActorCommand
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the skill level in name for single skills?
 * Only applies to Window_ActorCommand!
 * @default false
 *
 * @param showBattleCommandExpGauge:eval
 * @text Show Mastery Gauge?
 * @parent ActorCommand
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the mastery gauge for single skills?
 * Only applies to Window_ActorCommand!
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Effect:
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 45
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default SKILL MASTERY UP!
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 0, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 600
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Barrier
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x5cf387=_0x5439;function _0x1544(){const _0x415053=['dmgFlat','prototype','Buffs','mpCostRate','dmgRate','dmgChangePerLevelFlat','buffTurnChangePerLevel','Exp','hpCostFlat','EnemyIndex','ChangeSkillName','parse','JSON','1585222jQflJs','_stateTurns','remove','width','maxGaugeWidth','ARRAYSTRUCT','itemLineRect','addSingleSkillCommand','minTurns','description','ext','125845NRmyes','Mirror','subject','map','checkSkillMasteryLevelUp','Window_ActorCommand_drawItem','cooldownChangePerLevel','endActionSkillMastery','drawVisualStyleGauge','_masterySkill','72BuZoXo','filter','Mute','iconWidth','match','useItem','requestFauxAnimation','isBuffAffected','add','AutoVariableID','DefaultExpFormula','playSkillMasteryLevelUp','551714MhTQie','isSceneBattle','floor','startAction','setup','volume','constructor','Game_Battler_useItem','applyMasteryEffectCooldownTurns','Window_Base_drawItemName','19125585JqToEP','ARRAYEVAL','allowMasterySkillNameChange','item','members','BattleManager_startAction','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','targetVariableID','parameters','split','General','preventExpForGuard','MaxTurns','enemy','ActorIDs','skillMasteryLevelFormula','Game_BattlerBase_overwriteBuffTurns','costChangePerLevelRate','_scene','status','currentAction','_skillMasteryLevelFormula','_skillMasteryExp','skillMasteryExp','greater','_action','expFormula','VisualGaugeStyles','DefaultMaxLevel','preventCooldownModToZero','contents','_skillMasteryMaxLevel','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','action','isSkill','_actor','gainSkillMasteryExp','2087034xZGeeu','call','endAction','min','Window_ActorCommand_commandStyleCheck','setupTextPopup','pitch','ARRAYSTR','VisuMZ_1_SkillsStatesCore','iconText','_originalNamePreMastery','updateSkillMasteryVariable','mpCostFlat','gaugeStyle','addEquipBattleSkillsMarkers','costFlat','ConvertParams','_phase','BattleManager_endAction','getColor','Window_ActorCommand_addSingleSkillCommand','exit','note','canApplySkillMasteryEffect','buffTurn','PopupText','reset','VisuMZ_1_BattleCore','isDebuffAffected','startActionSkillMastery','debuffTurn','tpCostFlat','Window_EquipBattleSkillList_addEquipBattleSkillsMarkers','displaySkillMasteryLevelUpEffect','stateTurnChangePerLevel','name','AnimationID','VisuMZ_1_SkillsStatesCore\x20needs\x20to\x20be\x20updated\x20','preventExpForAttack','clamp','BattleManager_setup','SkillsStatesCore','drawSkillMastery','TextColor','skillMasteryLevel','Level','commandStyleCheck','_masterySubject','return\x200','Game_Actor_setup','exp\x20=\x20targetLevel\x20*\x203','format','hpCostRate','setSkillMasteryExp','drawEquipBattleSkillName','Game_Enemy_setup','custom','actor','randomInt','inBattle','SkillMastery','_skillMasteryLevels','attackSkillId','GetGaugeHeight','EnemyGainSkillMasteryExp','toUpperCase','VisuMZ_2_EquipBattleSkills','Settings','stateTurn','EVAL','drawItemName','push','guardSkillId','showBattleCommandExpGauge','growth','includes','ActorSetSkillMasteryExp','_skillMasteryLevelEffectData','applyVariance','registerCommand','max','skillMasteryLevelEffectData','gaugeColor2','SkillID','allowCostModToZero','7kkWIRJ','DefaultFormula','Game_BattlerBase_initMembers','gaugeBackColor','masteryFmt','skillMasteryExpNeeded','setValue','Sound','_subject','Game_Action_applyVariance','trim','RegExp','6680056RpXvSe','endBattle','isActor','cooldown','gaugeColor1','_buffTurns','Window_Base_drawEquipBattleSkillName','\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20targetLevel\x20=\x20arguments[2];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20user;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20user;\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20exp\x20=\x201000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Exp\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20exp;\x0a\x20\x20\x20\x20','version','dmgChangePerLevelRate','Effect','preventCostModToZero','_list','Name','ARRAYFUNC','SKILL_MASTERY','debuffTurnChangePerLevel','initMembers','skillMasteryMaxLevel','3195120HqvJnb','costChangePerLevelFlat','setSkillMasteryLevel','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','showBattleCommandLvName','tpCostRate','costRate','setupStartingSkillMasteries','getSkillIdWithName','initSkillMasteries','singleSkill','resetStateCounts','maxLevel','toLowerCase','overwriteBuffTurns','VisuMZ_0_CoreEngine','Game_BattlerBase_adjustSkillCost'];_0x1544=function(){return _0x415053;};return _0x1544();}(function(_0x5a75f3,_0x582949){const _0x450133=_0x5439,_0x4a3132=_0x5a75f3();while(!![]){try{const _0x5b102b=parseInt(_0x450133(0x179))/0x1+parseInt(_0x450133(0x158))/0x2+-parseInt(_0x450133(0x1a8))/0x3+parseInt(_0x450133(0x13a))/0x4+parseInt(_0x450133(0x163))/0x5*(parseInt(_0x450133(0x16d))/0x6)+-parseInt(_0x450133(0x1fd))/0x7*(-parseInt(_0x450133(0x209))/0x8)+-parseInt(_0x450133(0x183))/0x9;if(_0x5b102b===_0x582949)break;else _0x4a3132['push'](_0x4a3132['shift']());}catch(_0x3a0a0c){_0x4a3132['push'](_0x4a3132['shift']());}}}(_0x1544,0x70285));var label='SkillMastery',tier=tier||0x0,dependencies=[_0x5cf387(0x149),_0x5cf387(0x1b0)],pluginData=$plugins[_0x5cf387(0x16e)](function(_0x1b5b7b){const _0x2ceee0=_0x5cf387;return _0x1b5b7b[_0x2ceee0(0x196)]&&_0x1b5b7b[_0x2ceee0(0x161)][_0x2ceee0(0x1f3)]('['+label+']');})[0x0];function _0x5439(_0x45a4d1,_0xe21ebb){const _0x1544ad=_0x1544();return _0x5439=function(_0x54393b,_0x5470cc){_0x54393b=_0x54393b-0x131;let _0x57c597=_0x1544ad[_0x54393b];return _0x57c597;},_0x5439(_0x45a4d1,_0xe21ebb);}VisuMZ[label][_0x5cf387(0x1eb)]=VisuMZ[label][_0x5cf387(0x1eb)]||{},VisuMZ[_0x5cf387(0x1b8)]=function(_0x90e035,_0x35191a){const _0x51f3f1=_0x5cf387;for(const _0x11e42e in _0x35191a){if(_0x11e42e['match'](/(.*):(.*)/i)){const _0x34ed2c=String(RegExp['$1']),_0x2c5af9=String(RegExp['$2'])[_0x51f3f1(0x1e9)]()[_0x51f3f1(0x207)]();let _0x455d65,_0x36ed77,_0x53ed8c;switch(_0x2c5af9){case'NUM':_0x455d65=_0x35191a[_0x11e42e]!==''?Number(_0x35191a[_0x11e42e]):0x0;break;case'ARRAYNUM':_0x36ed77=_0x35191a[_0x11e42e]!==''?JSON['parse'](_0x35191a[_0x11e42e]):[],_0x455d65=_0x36ed77[_0x51f3f1(0x166)](_0x3e40bc=>Number(_0x3e40bc));break;case _0x51f3f1(0x1ed):_0x455d65=_0x35191a[_0x11e42e]!==''?eval(_0x35191a[_0x11e42e]):null;break;case _0x51f3f1(0x184):_0x36ed77=_0x35191a[_0x11e42e]!==''?JSON['parse'](_0x35191a[_0x11e42e]):[],_0x455d65=_0x36ed77['map'](_0x59edb7=>eval(_0x59edb7));break;case _0x51f3f1(0x157):_0x455d65=_0x35191a[_0x11e42e]!==''?JSON[_0x51f3f1(0x156)](_0x35191a[_0x11e42e]):'';break;case'ARRAYJSON':_0x36ed77=_0x35191a[_0x11e42e]!==''?JSON[_0x51f3f1(0x156)](_0x35191a[_0x11e42e]):[],_0x455d65=_0x36ed77[_0x51f3f1(0x166)](_0xcf4a1b=>JSON[_0x51f3f1(0x156)](_0xcf4a1b));break;case'FUNC':_0x455d65=_0x35191a[_0x11e42e]!==''?new Function(JSON['parse'](_0x35191a[_0x11e42e])):new Function(_0x51f3f1(0x1d8));break;case _0x51f3f1(0x135):_0x36ed77=_0x35191a[_0x11e42e]!==''?JSON['parse'](_0x35191a[_0x11e42e]):[],_0x455d65=_0x36ed77[_0x51f3f1(0x166)](_0x4d59dc=>new Function(JSON[_0x51f3f1(0x156)](_0x4d59dc)));break;case'STR':_0x455d65=_0x35191a[_0x11e42e]!==''?String(_0x35191a[_0x11e42e]):'';break;case _0x51f3f1(0x1af):_0x36ed77=_0x35191a[_0x11e42e]!==''?JSON[_0x51f3f1(0x156)](_0x35191a[_0x11e42e]):[],_0x455d65=_0x36ed77[_0x51f3f1(0x166)](_0x45bad9=>String(_0x45bad9));break;case'STRUCT':_0x53ed8c=_0x35191a[_0x11e42e]!==''?JSON[_0x51f3f1(0x156)](_0x35191a[_0x11e42e]):{},_0x455d65=VisuMZ[_0x51f3f1(0x1b8)]({},_0x53ed8c);break;case _0x51f3f1(0x15d):_0x36ed77=_0x35191a[_0x11e42e]!==''?JSON[_0x51f3f1(0x156)](_0x35191a[_0x11e42e]):[],_0x455d65=_0x36ed77[_0x51f3f1(0x166)](_0x23e31d=>VisuMZ[_0x51f3f1(0x1b8)]({},JSON[_0x51f3f1(0x156)](_0x23e31d)));break;default:continue;}_0x90e035[_0x34ed2c]=_0x455d65;}}return _0x90e035;},(_0x139531=>{const _0x463769=_0x5cf387,_0x368cb4=_0x139531[_0x463769(0x1cb)];for(const _0xf9e514 of dependencies){if(!Imported[_0xf9e514]){alert(_0x463769(0x1a3)['format'](_0x368cb4,_0xf9e514)),SceneManager['exit']();break;}}const _0x5c73fb=_0x139531[_0x463769(0x161)];if(_0x5c73fb[_0x463769(0x171)](/\[Version[ ](.*?)\]/i)){const _0x1d092e=Number(RegExp['$1']);_0x1d092e!==VisuMZ[label][_0x463769(0x211)]&&(alert(_0x463769(0x189)[_0x463769(0x1db)](_0x368cb4,_0x1d092e)),SceneManager['exit']());}if(_0x5c73fb['match'](/\[Tier[ ](\d+)\]/i)){const _0x5479db=Number(RegExp['$1']);_0x5479db<tier?(alert(_0x463769(0x13d)['format'](_0x368cb4,_0x5479db,tier)),SceneManager[_0x463769(0x1bd)]()):tier=Math[_0x463769(0x1f8)](_0x5479db,tier);}VisuMZ[_0x463769(0x1b8)](VisuMZ[label]['Settings'],_0x139531[_0x463769(0x18b)]);})(pluginData);if(VisuMZ[_0x5cf387(0x1d1)]['version']<1.38){let text='';text+=_0x5cf387(0x1cd),text+='in\x20order\x20for\x20VisuMZ_3_SkillMastery\x20to\x20work.',alert(text),SceneManager['exit']();}PluginManager[_0x5cf387(0x1f7)](pluginData[_0x5cf387(0x1cb)],'ActorGainSkillMasteryExp',_0x3cfd00=>{const _0x370aff=_0x5cf387;VisuMZ[_0x370aff(0x1b8)](_0x3cfd00,_0x3cfd00);const _0x7fcd41=_0x3cfd00[_0x370aff(0x191)][_0x370aff(0x166)](_0x4e0331=>$gameActors['actor'](_0x4e0331))[_0x370aff(0x15a)](null)[_0x370aff(0x15a)](undefined),_0x19110f=_0x3cfd00['SkillID']||0x0,_0x2939ae=_0x3cfd00[_0x370aff(0x1d5)]||0x0,_0x16d1f7=_0x3cfd00[_0x370aff(0x152)]||0x0;for(const _0x47e8de of _0x7fcd41){const _0x4ba336=_0x47e8de['skillMasteryLevel'](_0x19110f);_0x47e8de[_0x370aff(0x13c)](_0x19110f,_0x4ba336+_0x2939ae);const _0x5c17f2=_0x47e8de['skillMasteryExp'](_0x19110f);_0x47e8de[_0x370aff(0x1dd)](_0x19110f,_0x5c17f2+_0x16d1f7,!![]);}}),PluginManager[_0x5cf387(0x1f7)](pluginData[_0x5cf387(0x1cb)],_0x5cf387(0x1f4),_0x35d9a3=>{const _0x62b1b0=_0x5cf387;VisuMZ['ConvertParams'](_0x35d9a3,_0x35d9a3);const _0x466de0=_0x35d9a3[_0x62b1b0(0x191)]['map'](_0x4f4d2a=>$gameActors[_0x62b1b0(0x1e1)](_0x4f4d2a))[_0x62b1b0(0x15a)](null)[_0x62b1b0(0x15a)](undefined),_0xa6ab02=_0x35d9a3[_0x62b1b0(0x1fb)]||0x0,_0x586f7c=_0x35d9a3[_0x62b1b0(0x1d5)]||0x0,_0x20b5f1=_0x35d9a3['Exp']||0x0;for(const _0x24c30d of _0x466de0){_0x24c30d[_0x62b1b0(0x13c)](_0xa6ab02,_0x586f7c),_0x24c30d['setSkillMasteryExp'](_0xa6ab02,_0x20b5f1,!![]);}}),PluginManager[_0x5cf387(0x1f7)](pluginData[_0x5cf387(0x1cb)],_0x5cf387(0x1e8),_0x468ded=>{const _0x1c93d2=_0x5cf387;VisuMZ[_0x1c93d2(0x1b8)](_0x468ded,_0x468ded);const _0x138b12=_0x468ded[_0x1c93d2(0x154)][_0x1c93d2(0x166)](_0x176b44=>$gameTroop[_0x1c93d2(0x187)]()[_0x176b44])[_0x1c93d2(0x15a)](null)['remove'](undefined),_0x350ea8=_0x468ded[_0x1c93d2(0x1fb)]||0x0,_0x202d6e=_0x468ded[_0x1c93d2(0x1d5)]||0x0,_0x1ae6be=_0x468ded[_0x1c93d2(0x152)]||0x0;for(const _0x4c2fd6 of _0x138b12){const _0x5a8526=_0x4c2fd6[_0x1c93d2(0x1d4)](_0x350ea8);_0x4c2fd6[_0x1c93d2(0x13c)](_0x350ea8,_0x5a8526+_0x202d6e);const _0x9b0bb2=_0x4c2fd6[_0x1c93d2(0x19a)](_0x350ea8);_0x4c2fd6[_0x1c93d2(0x1dd)](_0x350ea8,_0x9b0bb2+_0x1ae6be,!![]);}}),PluginManager[_0x5cf387(0x1f7)](pluginData[_0x5cf387(0x1cb)],'EnemySetSkillMasteryExp',_0x1553ff=>{const _0x2a0ba2=_0x5cf387;VisuMZ[_0x2a0ba2(0x1b8)](_0x1553ff,_0x1553ff);const _0x3e1fa9=_0x1553ff[_0x2a0ba2(0x154)]['map'](_0x4ac387=>$gameTroop['members']()[_0x4ac387])[_0x2a0ba2(0x15a)](null)[_0x2a0ba2(0x15a)](undefined),_0x1a35c7=_0x1553ff['SkillID']||0x0,_0x260cfb=_0x1553ff[_0x2a0ba2(0x1d5)]||0x0,_0x3041ba=_0x1553ff[_0x2a0ba2(0x152)]||0x0;for(const _0x322864 of _0x3e1fa9){_0x322864['setSkillMasteryLevel'](_0x1a35c7,_0x260cfb),_0x322864[_0x2a0ba2(0x1dd)](_0x1a35c7,_0x3041ba,!![]);}}),VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x208)]={'expFormula':/<JS SKILL MASTERY EXP>\s*([\s\S]*?)\s*<\/JS SKILL MASTERY EXP>/i,'maxLevel':/<MAX SKILL MASTERY LEVEL:[ ](\d+)>/i,'costChangePerLevelFlat':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) (.*) COST(?:| PER LEVEL)>/gi,'costChangePerLevelRate':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+)([%％]) (.*) COST(?:| PER LEVEL)>/gi,'dmgChangePerLevelFlat':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) (?:DMG|DAMAGE|HEAL|HEALING)(?:| PER LEVEL)>/gi,'dmgChangePerLevelRate':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+)([%％]) (?:DMG|DAMAGE|HEAL|HEALING)(?:| PER LEVEL)>/gi,'cooldownChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) COOLDOWN(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'buffTurnChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) BUFF(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'debuffTurnChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) DEBUFF(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'stateTurnChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) STATE(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'startMasteries':/<STARTING SKILL MASTERIES>\s*([\s\S]*?)\s*<\/STARTING SKILL MASTERIES>/i},DataManager[_0x5cf387(0x192)]=function(_0x6fded4){const _0x1974a5=_0x5cf387,_0x3553a5=$dataSkills[_0x6fded4];if(!_0x3553a5)return VisuMZ[_0x1974a5(0x1e4)][_0x1974a5(0x1fe)];this[_0x1974a5(0x198)]=this[_0x1974a5(0x198)]||{};if(this[_0x1974a5(0x198)][_0x6fded4]!==undefined)return this[_0x1974a5(0x198)][_0x6fded4];let _0x40ce4b=Game_BattlerBase[_0x1974a5(0x136)][_0x1974a5(0x19d)];const _0x348aa8=VisuMZ[_0x1974a5(0x1e4)][_0x1974a5(0x208)],_0x3a4a3d=_0x3553a5[_0x1974a5(0x1be)]||'';_0x3a4a3d[_0x1974a5(0x171)](_0x348aa8[_0x1974a5(0x19d)])&&(_0x40ce4b=String(RegExp['$1']));const _0x16c4ba=_0x1974a5(0x210)[_0x1974a5(0x1db)](_0x40ce4b);return this[_0x1974a5(0x198)][_0x6fded4]=new Function(_0x16c4ba),this[_0x1974a5(0x198)][_0x6fded4];},VisuMZ['SkillMastery'][_0x5cf387(0x1fe)]=function(){const _0x3819be=arguments[0x0],_0x181953=arguments[0x1],_0x3703df=arguments[0x2],_0x1265fb=_0x3819be,_0x18c477=_0x3819be;let _0x5afdca=0xf4240;try{_0x5afdca=_0x3703df*0x3;}catch(_0x3cc4b0){if($gameTemp['isPlaytest']())console['log'](_0x3cc4b0);}return _0x5afdca;},DataManager[_0x5cf387(0x139)]=function(_0x82c6c7){const _0x3d01de=_0x5cf387,_0x8e8912=$dataSkills[_0x82c6c7];if(!_0x8e8912)return VisuMZ['SkillMastery'][_0x3d01de(0x1fe)];this['_skillMasteryMaxLevel']=this[_0x3d01de(0x1a2)]||{};if(this['_skillMasteryMaxLevel'][_0x82c6c7]!==undefined)return this['_skillMasteryMaxLevel'][_0x82c6c7];this[_0x3d01de(0x1a2)][_0x82c6c7]=Game_BattlerBase[_0x3d01de(0x136)]['maxLevel'];const _0x306eb5=VisuMZ[_0x3d01de(0x1e4)]['RegExp'],_0x322607=_0x8e8912[_0x3d01de(0x1be)]||'';return _0x322607[_0x3d01de(0x171)](_0x306eb5[_0x3d01de(0x146)])&&(this[_0x3d01de(0x1a2)][_0x82c6c7]=Math[_0x3d01de(0x1f8)](Number(RegExp['$1']),0x0)),this[_0x3d01de(0x1a2)][_0x82c6c7];},DataManager[_0x5cf387(0x1f9)]=function(_0x6f0408){const _0x365703=_0x5cf387,_0xd4452=$dataSkills[_0x6f0408];if(!_0xd4452)return VisuMZ['SkillMastery']['DefaultFormula'];this[_0x365703(0x1f5)]=this[_0x365703(0x1f5)]||{};if(this['_skillMasteryLevelEffectData'][_0x6f0408]!==undefined)return this[_0x365703(0x1f5)][_0x6f0408];const _0x11ae43=VisuMZ[_0x365703(0x1e4)]['Settings'][_0x365703(0x18d)];this[_0x365703(0x1f5)][_0x6f0408]={'costFlat':{},'costRate':{},'dmgFlat':_0x11ae43['dmgFlat']??0x0,'dmgRate':_0x11ae43[_0x365703(0x14f)]??0.2,'cooldown':_0x11ae43['cooldown']??-0x1,'buffTurn':_0x11ae43['buffTurn']??0x1,'debuffTurn':_0x11ae43[_0x365703(0x1c6)]??0x1,'stateTurn':_0x11ae43[_0x365703(0x1ec)]??0x1};const _0x1b2cc4=[],_0x5f44f1=VisuMZ[_0x365703(0x1e4)]['RegExp'],_0x3d056a=_0xd4452['note']||'',_0x41a5e4=_0x3d056a[_0x365703(0x171)](_0x5f44f1[_0x365703(0x13b)]);if(_0x41a5e4)for(const _0x2b98a3 of _0x41a5e4){_0x2b98a3[_0x365703(0x171)](_0x5f44f1['costChangePerLevelFlat']);const _0x2ba0a6=Number(RegExp['$1']),_0x5d0f7c=String(RegExp['$2'])['toUpperCase']()[_0x365703(0x207)]();this[_0x365703(0x1f5)][_0x6f0408][_0x365703(0x1b7)][_0x5d0f7c]=_0x2ba0a6,_0x1b2cc4['push'](_0x5d0f7c);}const _0x3b7b96=_0x3d056a[_0x365703(0x171)](_0x5f44f1[_0x365703(0x194)]);if(_0x3b7b96)for(const _0x466e2d of _0x3b7b96){_0x466e2d[_0x365703(0x171)](_0x5f44f1[_0x365703(0x194)]);const _0x59b0ef=Number(RegExp['$1'])*0.01,_0x6775c2=String(RegExp['$3'])['toUpperCase']()[_0x365703(0x207)]();this[_0x365703(0x1f5)][_0x6f0408][_0x365703(0x140)][_0x6775c2]=_0x59b0ef,_0x1b2cc4[_0x365703(0x1ef)](_0x6775c2);}!_0x1b2cc4[_0x365703(0x1f3)]('HP')&&(this[_0x365703(0x1f5)][_0x6f0408]['costFlat']['HP']=_0x11ae43[_0x365703(0x153)]??0x0,this[_0x365703(0x1f5)][_0x6f0408][_0x365703(0x140)]['HP']=_0x11ae43[_0x365703(0x1dc)]??-0.1);!_0x1b2cc4[_0x365703(0x1f3)]('MP')&&(this[_0x365703(0x1f5)][_0x6f0408][_0x365703(0x1b7)]['MP']=_0x11ae43[_0x365703(0x1b4)]??0x0,this['_skillMasteryLevelEffectData'][_0x6f0408][_0x365703(0x140)]['MP']=_0x11ae43[_0x365703(0x14e)]??-0.1);!_0x1b2cc4[_0x365703(0x1f3)]('TP')&&(this[_0x365703(0x1f5)][_0x6f0408][_0x365703(0x1b7)]['TP']=_0x11ae43[_0x365703(0x1c7)]??0x0,this['_skillMasteryLevelEffectData'][_0x6f0408][_0x365703(0x140)]['TP']=_0x11ae43[_0x365703(0x13f)]??-0.1);const _0x46530e=_0x3d056a[_0x365703(0x171)](_0x5f44f1['dmgChangePerLevelFlat']);if(_0x46530e)for(const _0x1cb096 of _0x46530e){_0x1cb096['match'](_0x5f44f1[_0x365703(0x150)]);const _0x475b2e=Number(RegExp['$1']);this[_0x365703(0x1f5)][_0x6f0408][_0x365703(0x14b)]=_0x475b2e;}const _0x232c28=_0x3d056a[_0x365703(0x171)](_0x5f44f1[_0x365703(0x212)]);if(_0x232c28)for(const _0x3449fa of _0x232c28){_0x3449fa['match'](_0x5f44f1['dmgChangePerLevelRate']);const _0x469dde=Number(RegExp['$1'])*0.01;this[_0x365703(0x1f5)][_0x6f0408][_0x365703(0x14f)]=_0x469dde;}const _0x4470ed=[[_0x365703(0x169),_0x365703(0x20c)],[_0x365703(0x151),_0x365703(0x1c0)],[_0x365703(0x137),_0x365703(0x1c6)],[_0x365703(0x1ca),'stateTurn']];for(const _0x5f2a3c of _0x4470ed){const _0x1c80dc=_0x5f2a3c[0x0],_0x53a404=_0x5f2a3c[0x1];if(_0x3d056a['match'](_0x5f44f1[_0x1c80dc])){const _0x5d8f55=Number(RegExp['$1']);this[_0x365703(0x1f5)][_0x6f0408][_0x53a404]=_0x5d8f55;}}return this[_0x365703(0x1f5)][_0x6f0408];},SoundManager['playSkillMasteryLevelUp']=function(){const _0x532355=_0x5cf387,_0x5ea3f8=VisuMZ[_0x532355(0x1e4)][_0x532355(0x1eb)][_0x532355(0x204)],_0x5192f7={'name':_0x5ea3f8[_0x532355(0x1cb)],'volume':_0x5ea3f8[_0x532355(0x17e)],'pitch':_0x5ea3f8[_0x532355(0x1ae)],'pan':_0x5ea3f8['pan']};AudioManager['playSe'](_0x5192f7);},SceneManager['isSceneBattle']=function(){const _0x3a0d1e=_0x5cf387;return this[_0x3a0d1e(0x195)]&&this['_scene'][_0x3a0d1e(0x17f)]===Scene_Battle;},VisuMZ['SkillMastery'][_0x5cf387(0x1d0)]=BattleManager[_0x5cf387(0x17d)],BattleManager[_0x5cf387(0x17d)]=function(_0x34b01d,_0x22525d,_0x154b5e){const _0x519927=_0x5cf387;VisuMZ['SkillMastery'][_0x519927(0x1d0)][_0x519927(0x1a9)](this,_0x34b01d,_0x22525d,_0x154b5e),this['_masterySubject']=undefined,this[_0x519927(0x16c)]=undefined;},VisuMZ['SkillMastery'][_0x5cf387(0x188)]=BattleManager[_0x5cf387(0x17c)],BattleManager['startAction']=function(){const _0x4e2489=_0x5cf387;this[_0x4e2489(0x1c5)](),VisuMZ[_0x4e2489(0x1e4)]['BattleManager_startAction'][_0x4e2489(0x1a9)](this);},BattleManager[_0x5cf387(0x1c5)]=function(){const _0x2ec5bc=_0x5cf387,_0x33e87c=this[_0x2ec5bc(0x205)],_0x110d40=_0x33e87c[_0x2ec5bc(0x197)]();_0x33e87c&&_0x110d40&&_0x110d40[_0x2ec5bc(0x186)]()&&_0x110d40['isSkill']()&&(this['_masterySubject']=this[_0x2ec5bc(0x205)],this['_masterySkill']=_0x110d40[_0x2ec5bc(0x186)](),$gameVariables[_0x2ec5bc(0x1b3)](_0x33e87c,_0x110d40[_0x2ec5bc(0x186)]()));},VisuMZ['SkillMastery'][_0x5cf387(0x1ba)]=BattleManager[_0x5cf387(0x1aa)],BattleManager[_0x5cf387(0x1aa)]=function(){const _0xc37756=_0x5cf387;this[_0xc37756(0x16a)](),VisuMZ['SkillMastery']['BattleManager_endAction'][_0xc37756(0x1a9)](this);},BattleManager[_0x5cf387(0x16a)]=function(){const _0x585983=_0x5cf387;if(this[_0x585983(0x1d7)]&&this[_0x585983(0x16c)]){const _0x35f5e=this['_masterySubject'],_0x3c3537=this['_masterySkill'];_0x35f5e[_0x585983(0x1a7)](_0x3c3537['id']);}this['_masterySubject']=undefined,this[_0x585983(0x16c)]=undefined;},VisuMZ['SkillMastery']['BattleManager_endBattle']=BattleManager[_0x5cf387(0x20a)],BattleManager['endBattle']=function(_0x407741){const _0x310b21=_0x5cf387;this[_0x310b21(0x1d7)]&&this[_0x310b21(0x16c)]&&this[_0x310b21(0x16a)](),VisuMZ[_0x310b21(0x1e4)]['BattleManager_endBattle']['call'](this,_0x407741);},Game_Variables[_0x5cf387(0x136)]={'targetVariableID':VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1eb)][_0x5cf387(0x176)]??0x0},Game_Variables['prototype']['updateSkillMasteryVariable']=function(_0x1395d6,_0x11d652){const _0x55c554=_0x5cf387,_0x146ab4=Game_Variables[_0x55c554(0x136)][_0x55c554(0x18a)];if(_0x146ab4<=0x0)return;if(!_0x1395d6)return;if(!_0x11d652)return;const _0x2b05a0=_0x1395d6[_0x55c554(0x1d4)](_0x11d652['id']);this[_0x55c554(0x203)](_0x146ab4,_0x2b05a0);},VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x206)]=Game_Action['prototype']['applyVariance'],Game_Action[_0x5cf387(0x14c)][_0x5cf387(0x1f6)]=function(_0x36b050,_0x32b8cd){const _0x55be1b=_0x5cf387;_0x36b050=VisuMZ[_0x55be1b(0x1e4)][_0x55be1b(0x206)][_0x55be1b(0x1a9)](this,_0x36b050,_0x32b8cd);if(!this[_0x55be1b(0x1a5)]())return _0x36b050;const _0x342ff8=this[_0x55be1b(0x165)]()[_0x55be1b(0x1d4)](this['item']()['id']);if(_0x342ff8<=0x0)return _0x36b050;const _0x2b91d5=DataManager[_0x55be1b(0x1f9)](this[_0x55be1b(0x186)]()['id']);if(_0x2b91d5[_0x55be1b(0x14f)]!==0x0){const _0x450b51=0x1+_0x342ff8*_0x2b91d5['dmgRate'];_0x36b050*=_0x450b51;}if(_0x2b91d5[_0x55be1b(0x14b)]!==0x0){if(_0x36b050>0x0)_0x36b050+=_0x342ff8*_0x2b91d5[_0x55be1b(0x14b)];else _0x36b050<0x0&&(_0x36b050-=_0x342ff8*_0x2b91d5['dmgFlat']);}return _0x36b050;},Game_BattlerBase['SKILL_MASTERY']={'expFormula':VisuMZ['SkillMastery'][_0x5cf387(0x1eb)][_0x5cf387(0x18d)][_0x5cf387(0x177)]??_0x5cf387(0x1da),'maxLevel':VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1eb)]['General'][_0x5cf387(0x19f)]??0x63,'preventExpForAttack':VisuMZ['SkillMastery'][_0x5cf387(0x1eb)][_0x5cf387(0x18d)][_0x5cf387(0x1ce)]??!![],'preventExpForGuard':VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1eb)][_0x5cf387(0x18d)]['preventExpForGuard']??!![],'allowCostModToZero':!VisuMZ[_0x5cf387(0x1e4)]['Settings'][_0x5cf387(0x18d)][_0x5cf387(0x132)]??![],'allowCooldownModToZero':!VisuMZ['SkillMastery'][_0x5cf387(0x1eb)][_0x5cf387(0x18d)][_0x5cf387(0x1a0)]??![]},VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1ff)]=Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x138)],Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x138)]=function(){const _0x3f95d3=_0x5cf387;VisuMZ['SkillMastery'][_0x3f95d3(0x1ff)][_0x3f95d3(0x1a9)](this),this[_0x3f95d3(0x143)]();},Game_BattlerBase['prototype'][_0x5cf387(0x143)]=function(){this['_skillMasteryLevels']={},this['_skillMasteryExp']={};},Game_BattlerBase['prototype']['skillMasteryLevel']=function(_0x32644b){const _0x56ac10=_0x5cf387;if(Game_BattlerBase['SKILL_MASTERY']['preventExpForAttack']&&_0x32644b===this[_0x56ac10(0x1e6)]())return 0x0;if(Game_BattlerBase['SKILL_MASTERY'][_0x56ac10(0x18e)]&&_0x32644b===this['guardSkillId']())return 0x0;if(this['_skillMasteryLevels']===undefined)this[_0x56ac10(0x143)]();return this[_0x56ac10(0x1e5)][_0x32644b]||0x0;},Game_BattlerBase['prototype'][_0x5cf387(0x13c)]=function(_0x444473,_0x574bba){const _0x50c637=_0x5cf387;if(Game_BattlerBase[_0x50c637(0x136)]['preventExpForAttack']&&_0x444473===this[_0x50c637(0x1e6)]())return;if(Game_BattlerBase[_0x50c637(0x136)]['preventExpForGuard']&&_0x444473===this[_0x50c637(0x1f0)]())return;if(this[_0x50c637(0x1e5)]===undefined)this[_0x50c637(0x143)]();if(this['_skillMasteryExp']===undefined)this[_0x50c637(0x143)]();this[_0x50c637(0x1e5)][_0x444473]!==_0x574bba&&(this[_0x50c637(0x1e5)][_0x444473]=_0x574bba[_0x50c637(0x1cf)](0x0,DataManager[_0x50c637(0x139)](_0x444473)),this[_0x50c637(0x199)][_0x444473]=0x0);},Game_BattlerBase[_0x5cf387(0x14c)]['skillMasteryExp']=function(_0x44ae9a){const _0x50063b=_0x5cf387;if(Game_BattlerBase[_0x50063b(0x136)][_0x50063b(0x1ce)]&&_0x44ae9a===this[_0x50063b(0x1e6)]())return 0x0;if(Game_BattlerBase[_0x50063b(0x136)][_0x50063b(0x18e)]&&_0x44ae9a===this[_0x50063b(0x1f0)]())return 0x0;if(this[_0x50063b(0x199)]===undefined)this[_0x50063b(0x143)]();return this[_0x50063b(0x199)][_0x44ae9a]||0x0;},Game_BattlerBase[_0x5cf387(0x14c)]['setSkillMasteryExp']=function(_0x350caa,_0x3cf851,_0x410618,_0x2d884e){const _0x45b017=_0x5cf387;if(Game_BattlerBase[_0x45b017(0x136)][_0x45b017(0x1ce)]&&_0x350caa===this[_0x45b017(0x1e6)]())return;if(Game_BattlerBase[_0x45b017(0x136)][_0x45b017(0x18e)]&&_0x350caa===this[_0x45b017(0x1f0)]())return;if(this[_0x45b017(0x199)]===undefined)this[_0x45b017(0x143)]();this[_0x45b017(0x199)][_0x350caa]=Math['max'](_0x3cf851,0x0);if(_0x2d884e)return;this[_0x45b017(0x167)](_0x350caa,_0x410618);},Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x1a7)]=function(_0x54a0ef,_0x16919c,_0x339e00){const _0x41f929=_0x5cf387;if(Game_BattlerBase['SKILL_MASTERY'][_0x41f929(0x1ce)]&&_0x54a0ef===this['attackSkillId']())return;if(Game_BattlerBase[_0x41f929(0x136)][_0x41f929(0x18e)]&&_0x54a0ef===this[_0x41f929(0x1f0)]())return;if(this[_0x41f929(0x199)]===undefined)this[_0x41f929(0x143)]();_0x16919c=_0x16919c||0x1,this[_0x41f929(0x199)][_0x54a0ef]=this[_0x41f929(0x199)][_0x54a0ef]||0x0,this[_0x41f929(0x199)][_0x54a0ef]+=_0x16919c,this['_skillMasteryExp'][_0x54a0ef]=Math[_0x41f929(0x1f8)](this[_0x41f929(0x199)][_0x54a0ef],0x0);if(_0x339e00)return;this['checkSkillMasteryLevelUp'](_0x54a0ef);},VisuMZ['SkillMastery'][_0x5cf387(0x180)]=Game_Battler[_0x5cf387(0x14c)][_0x5cf387(0x172)],Game_Battler['prototype'][_0x5cf387(0x172)]=function(_0x57cbe2){const _0xe1024a=_0x5cf387;VisuMZ[_0xe1024a(0x1e4)][_0xe1024a(0x180)]['call'](this,_0x57cbe2),DataManager[_0xe1024a(0x1a5)](_0x57cbe2)&&!SceneManager[_0xe1024a(0x17a)]()&&(this[_0xe1024a(0x1a7)](_0x57cbe2['id']),$gameVariables[_0xe1024a(0x1b3)](this,_0x57cbe2));},Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x141)]=function(){const _0x41ff40=_0x5cf387;this[_0x41ff40(0x143)]();const _0x3eec3c=VisuMZ[_0x41ff40(0x1e4)][_0x41ff40(0x208)],_0x19d24d=(this[_0x41ff40(0x20b)]()?this[_0x41ff40(0x1e1)]()[_0x41ff40(0x1be)]:this[_0x41ff40(0x190)]()[_0x41ff40(0x1be)])||'';if(_0x19d24d[_0x41ff40(0x171)](_0x3eec3c['startMasteries'])){const _0x4ff06d=String(RegExp['$1'])[_0x41ff40(0x18c)](/[\r\n]+/);for(const _0x5e04c2 of _0x4ff06d){if(_0x5e04c2[_0x41ff40(0x171)](/(.*):[ ](.*)/i)){const _0x3a9512=String(RegExp['$1']),_0x484118=RegExp['$2'][_0x41ff40(0x18c)](',')[_0x41ff40(0x166)](_0x18691c=>Number(_0x18691c));let _0x4b7ac7=0x0;_0x3a9512[_0x41ff40(0x171)](/SKILL[ ](\d+)/i)?_0x4b7ac7=Number(RegExp['$1']):_0x4b7ac7=DataManager[_0x41ff40(0x142)](_0x3a9512);if(_0x4b7ac7>0x0){const _0x332fa1=_0x484118[0x0]||0x0,_0x2c58c7=_0x484118[0x1]||0x0;this[_0x41ff40(0x13c)](_0x4b7ac7,_0x332fa1),this[_0x41ff40(0x1dd)](_0x4b7ac7,_0x2c58c7,!![]);}}}}},Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x167)]=function(_0xf53583,_0x2dc386){const _0x26b538=_0x5cf387;let _0x3c951c=![];for(;;){const _0x11842c=this['skillMasteryLevel'](_0xf53583);if(_0x11842c>=DataManager['skillMasteryMaxLevel'](_0xf53583))break;const _0x3643b5=this[_0x26b538(0x19a)](_0xf53583),_0x1833fc=this[_0x26b538(0x202)](_0xf53583,_0x11842c+0x1);if(_0x3643b5>=_0x1833fc)_0x3c951c=!![],this[_0x26b538(0x13c)](_0xf53583,_0x11842c+0x1),this[_0x26b538(0x1dd)](_0xf53583,_0x3643b5-_0x1833fc,_0x2dc386,!![]);else break;}_0x3c951c&&(!_0x2dc386&&SoundManager[_0x26b538(0x178)](),SceneManager[_0x26b538(0x17a)]()&&Imported[_0x26b538(0x1c3)]&&this['displaySkillMasteryLevelUpEffect'](_0xf53583));},Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x202)]=function(_0x418921,_0x105e69){const _0x8c4372=_0x5cf387,_0x3991e7=DataManager[_0x8c4372(0x192)](_0x418921);return _0x3991e7[_0x8c4372(0x1a9)](this,this,$dataSkills[_0x418921],_0x105e69);},Game_Battler[_0x5cf387(0x14c)][_0x5cf387(0x1c9)]=function(_0xfe919d){const _0x3a5f12=_0x5cf387;if(!SceneManager[_0x3a5f12(0x17a)]())return![];const _0x1342bc=VisuMZ[_0x3a5f12(0x1e4)]['Settings'][_0x3a5f12(0x131)];if(!_0x1342bc)return;if(_0x1342bc[_0x3a5f12(0x1cc)]>0x0){const _0x4be2aa=[this],_0x1cafac=_0x1342bc[_0x3a5f12(0x1cc)],_0x33e3e8=_0x1342bc[_0x3a5f12(0x164)],_0x800914=_0x1342bc[_0x3a5f12(0x16f)];$gameTemp[_0x3a5f12(0x173)](_0x4be2aa,_0x1cafac,_0x33e3e8,_0x800914);}if(_0x1342bc['PopupText']!==''){const _0x140d28=_0x1342bc[_0x3a5f12(0x1c1)],_0xa781a1={'textColor':_0x1342bc[_0x3a5f12(0x1d3)],'flashColor':_0x1342bc['FlashColor'],'flashDuration':_0x1342bc['FlashDuration']};this[_0x3a5f12(0x1ad)](_0x140d28,_0xa781a1);}},VisuMZ[_0x5cf387(0x1e4)]['Game_BattlerBase_adjustSkillCost']=Game_BattlerBase[_0x5cf387(0x14c)]['adjustSkillCost'],Game_BattlerBase['prototype']['adjustSkillCost']=function(_0x3812ef,_0x59d7d0,_0x5c7e67){const _0x1eaae8=_0x5cf387;_0x59d7d0=VisuMZ[_0x1eaae8(0x1e4)][_0x1eaae8(0x14a)][_0x1eaae8(0x1a9)](this,_0x3812ef,_0x59d7d0,_0x5c7e67);if(_0x59d7d0<=0x0)return _0x59d7d0;const _0x3b6bec=this[_0x1eaae8(0x1d4)](_0x3812ef['id']);if(_0x3b6bec<=0x0)return _0x59d7d0;let _0x3ed43c=![];const _0x1e66b7=DataManager[_0x1eaae8(0x1f9)](_0x3812ef['id']),_0x64c4d6=_0x5c7e67[_0x1eaae8(0x134)][_0x1eaae8(0x1e9)]();if(_0x1e66b7[_0x1eaae8(0x140)][_0x64c4d6]!==undefined){const _0x258cb3=0x1+_0x3b6bec*_0x1e66b7[_0x1eaae8(0x140)][_0x64c4d6];_0x59d7d0*=_0x258cb3,_0x3ed43c=!![];}_0x1e66b7[_0x1eaae8(0x1b7)][_0x64c4d6]!==undefined&&(_0x59d7d0+=_0x3b6bec*_0x1e66b7[_0x1eaae8(0x1b7)][_0x64c4d6],_0x3ed43c=!![]);if(_0x3ed43c){const _0x223bbf=Game_BattlerBase['SKILL_MASTERY'][_0x1eaae8(0x1fc)]?0x0:0x1;_0x59d7d0=Math[_0x1eaae8(0x1f8)](Math[_0x1eaae8(0x17b)](_0x59d7d0),_0x223bbf);}return _0x59d7d0;},Game_BattlerBase[_0x5cf387(0x14c)]['canApplySkillMasteryEffect']=function(){const _0x10e19f=_0x5cf387;if(SceneManager[_0x10e19f(0x17a)]())return BattleManager[_0x10e19f(0x205)]&&BattleManager[_0x10e19f(0x19c)]&&BattleManager[_0x10e19f(0x19c)]['isSkill']()&&[_0x10e19f(0x1a4),_0x10e19f(0x1e0)][_0x10e19f(0x1f3)](BattleManager[_0x10e19f(0x1b9)]);else{const _0x513c19=SceneManager['_scene'];return _0x513c19&&_0x513c19['_actor']&&_0x513c19[_0x10e19f(0x186)]&&_0x513c19['item']()&&DataManager[_0x10e19f(0x1a5)](_0x513c19['item']());}},VisuMZ[_0x5cf387(0x1e4)]['Game_BattlerBase_resetStateCounts']=Game_BattlerBase['prototype'][_0x5cf387(0x145)],Game_BattlerBase['prototype'][_0x5cf387(0x145)]=function(_0x59860d){const _0x41a1b1=_0x5cf387;VisuMZ['SkillMastery']['Game_BattlerBase_resetStateCounts'][_0x41a1b1(0x1a9)](this,_0x59860d);if(!this[_0x41a1b1(0x1bf)]())return;const _0x5aec74=$dataStates[_0x59860d],_0x274e39=this['getStateReapplyRulings'](_0x5aec74)[_0x41a1b1(0x147)]()[_0x41a1b1(0x207)]();if(!['reset',_0x41a1b1(0x175),_0x41a1b1(0x19b)][_0x41a1b1(0x1f3)](_0x274e39))return;const _0x43a610=SceneManager['isSceneBattle']()?BattleManager['_subject']:SceneManager[_0x41a1b1(0x195)][_0x41a1b1(0x1e1)](),_0x1b78e5=SceneManager['isSceneBattle']()?BattleManager[_0x41a1b1(0x19c)]['item']():SceneManager[_0x41a1b1(0x195)][_0x41a1b1(0x186)](),_0xfc29c1=_0x43a610[_0x41a1b1(0x1d4)](_0x1b78e5['id']);if(_0xfc29c1<=0x0)return;const _0x5c0744=DataManager[_0x41a1b1(0x1f9)](_0x1b78e5['id']);if(_0x5c0744[_0x41a1b1(0x1ec)]!==0x0){if(_0x274e39==='greater'){const _0x4b787e=$dataStates[_0x59860d],_0x500ff4=0x1+Math[_0x41a1b1(0x1f8)](_0x4b787e['maxTurns']-_0x4b787e['minTurns'],0x0),_0x231ca1=_0x4b787e[_0x41a1b1(0x160)]+Math[_0x41a1b1(0x1e2)](_0x500ff4)+_0x5c0744['stateTurn']*_0xfc29c1;this[_0x41a1b1(0x159)][_0x59860d]=Math[_0x41a1b1(0x1f8)](this['_stateTurns'][_0x59860d],_0x231ca1);}else this[_0x41a1b1(0x159)][_0x59860d]+=_0x5c0744['stateTurn']*_0xfc29c1;this[_0x41a1b1(0x159)][_0x59860d]=Math[_0x41a1b1(0x1f8)](this[_0x41a1b1(0x159)][_0x59860d],0x0);}},VisuMZ['SkillMastery'][_0x5cf387(0x193)]=Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x148)],Game_BattlerBase['prototype'][_0x5cf387(0x148)]=function(_0x54fe92,_0x5cc540){const _0x134266=_0x5cf387;VisuMZ['SkillMastery'][_0x134266(0x193)][_0x134266(0x1a9)](this,_0x54fe92,_0x5cc540);if(!this['canApplySkillMasteryEffect']())return;const _0x25b02a=VisuMZ[_0x134266(0x1d1)]['Settings'][_0x134266(0x14d)]['ReapplyRules'];if(![_0x134266(0x1c2),_0x134266(0x175),'greater'][_0x134266(0x1f3)](_0x25b02a))return;const _0x2544b0=SceneManager[_0x134266(0x17a)]()?BattleManager[_0x134266(0x205)]:SceneManager[_0x134266(0x195)]['actor'](),_0x538b75=SceneManager[_0x134266(0x17a)]()?BattleManager[_0x134266(0x19c)][_0x134266(0x186)]():SceneManager[_0x134266(0x195)][_0x134266(0x186)](),_0x5d54c8=_0x2544b0[_0x134266(0x1d4)](_0x538b75['id']);if(_0x5d54c8<=0x0)return;const _0x34fe4b=DataManager[_0x134266(0x1f9)](_0x538b75['id']);if(this[_0x134266(0x174)](_0x54fe92)&&_0x34fe4b[_0x134266(0x1c0)]!==0x0){if(_0x25b02a===_0x134266(0x19b)){const _0xaf7c00=_0x5cc540+_0x34fe4b[_0x134266(0x1c0)]*_0x5d54c8;this[_0x134266(0x20e)][_0x54fe92]=Math['max'](this[_0x134266(0x20e)][_0x54fe92],_0xaf7c00);}else this[_0x134266(0x20e)][_0x54fe92]+=_0x34fe4b[_0x134266(0x1c0)]*_0x5d54c8;}if(this[_0x134266(0x1c4)](_0x54fe92)&&_0x34fe4b[_0x134266(0x1c6)]!==0x0){if(_0x25b02a===_0x134266(0x19b)){const _0x2e5e5a=_0x5cc540+_0x34fe4b[_0x134266(0x1c6)]*_0x5d54c8;this['_buffTurns'][_0x54fe92]=Math['max'](this[_0x134266(0x20e)][_0x54fe92],_0x2e5e5a);}else this[_0x134266(0x20e)][_0x54fe92]+=_0x34fe4b['debuffTurn']*_0x5d54c8;}const _0x218fe7=VisuMZ[_0x134266(0x1d1)]['Settings'][_0x134266(0x14d)][_0x134266(0x18f)];this[_0x134266(0x20e)][_0x54fe92]=this['_buffTurns'][_0x54fe92][_0x134266(0x1cf)](0x0,_0x218fe7);},Game_BattlerBase[_0x5cf387(0x14c)][_0x5cf387(0x181)]=function(_0xc3532e,_0x21a522){const _0x2659f1=_0x5cf387;if(_0x21a522<=0x0)return _0x21a522;const _0x2aaf38=this[_0x2659f1(0x1d4)](_0xc3532e['id']);if(_0x2aaf38<=0x0)return _0x21a522;const _0x57010f=DataManager[_0x2659f1(0x1f9)](_0xc3532e['id']);_0x57010f[_0x2659f1(0x20c)]!==0x0&&(_0x21a522+=_0x2aaf38*_0x57010f[_0x2659f1(0x20c)]);const _0x22fbea=Game_BattlerBase[_0x2659f1(0x136)]['allowCooldownModToZero']?0x0:0x1;return Math[_0x2659f1(0x1f8)](_0x21a522,_0x22fbea);};var $actorSkillMasteryLevel=function(_0x556d5a,_0x32d84e){const _0x3e0fb5=_0x5cf387,_0x483fac=$gameActors[_0x3e0fb5(0x1e1)](_0x556d5a);if(!_0x483fac)return 0x0;return _0x483fac[_0x3e0fb5(0x1d4)](_0x32d84e);},$actorSkillMasteryExp=function(_0x2709e3,_0x49c7ed){const _0x265ed0=_0x5cf387,_0x3a2b81=$gameActors[_0x265ed0(0x1e1)](_0x2709e3);if(!_0x3a2b81)return 0x0;return _0x3a2b81['skillMasteryExp'](_0x49c7ed);},$enemySkillMasteryLevel=function(_0x3a5621,_0x109393){const _0x3869af=_0x5cf387;if(!$gameParty[_0x3869af(0x1e3)]())return 0x0;const _0x2b97b2=$gameTroop['members']()[_0x3a5621];if(!_0x2b97b2)return 0x0;return _0x2b97b2['skillMasteryLevel'](_0x109393);},$enemySkillMasteryExp=function(_0x3768be,_0xd5b0e9){const _0x33996b=_0x5cf387;if(!$gameParty[_0x33996b(0x1e3)]())return 0x0;const _0x420b90=$gameTroop[_0x33996b(0x187)]()[enemyIndex];if(!_0x420b90)return 0x0;return _0x420b90[_0x33996b(0x19a)](_0xd5b0e9);};VisuMZ['SkillMastery'][_0x5cf387(0x1d9)]=Game_Actor['prototype'][_0x5cf387(0x17d)],Game_Actor[_0x5cf387(0x14c)][_0x5cf387(0x17d)]=function(_0x338a67){const _0x5995a3=_0x5cf387;VisuMZ[_0x5995a3(0x1e4)][_0x5995a3(0x1d9)]['call'](this,_0x338a67),this['setupStartingSkillMasteries']();},VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1df)]=Game_Enemy[_0x5cf387(0x14c)][_0x5cf387(0x17d)],Game_Enemy[_0x5cf387(0x14c)][_0x5cf387(0x17d)]=function(_0x47cdb9,_0x2645c8,_0x2b6c58){const _0x401c79=_0x5cf387;VisuMZ[_0x401c79(0x1e4)][_0x401c79(0x1df)][_0x401c79(0x1a9)](this,_0x47cdb9,_0x2645c8,_0x2b6c58),this['setupStartingSkillMasteries']();},Window_Base['SKILL_MASTERY']={'masteryFmt':VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1eb)][_0x5cf387(0x18d)]['masteryFmt']??'Lv%2\x20%1','maxGaugeWidth':VisuMZ['SkillMastery'][_0x5cf387(0x1eb)][_0x5cf387(0x18d)]['maxGaugeWidth']??0x180,'gaugeColor1':VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1eb)]['General'][_0x5cf387(0x20d)]??0xc,'gaugeColor2':VisuMZ['SkillMastery'][_0x5cf387(0x1eb)][_0x5cf387(0x18d)][_0x5cf387(0x1fa)]??0x4,'gaugeStyle':VisuMZ['SkillMastery'][_0x5cf387(0x1eb)][_0x5cf387(0x18d)][_0x5cf387(0x1b5)]??_0x5cf387(0x1f2)},VisuMZ['SkillMastery']['Window_Base_drawItemName']=Window_Base['prototype'][_0x5cf387(0x1ee)],Window_Base['prototype']['drawItemName']=function(_0x34a39f,_0x990af1,_0x138567,_0x4e00d8){const _0x1b8db9=_0x5cf387;this['_actor']&&DataManager[_0x1b8db9(0x1a5)](_0x34a39f)&&(this[_0x1b8db9(0x185)]()&&(this[_0x1b8db9(0x1b2)]=VisuMZ[_0x1b8db9(0x1e4)][_0x1b8db9(0x155)](this[_0x1b8db9(0x1a6)],_0x34a39f)),this['drawSkillMastery'](_0x34a39f,_0x990af1,_0x138567,_0x4e00d8)),VisuMZ[_0x1b8db9(0x1e4)][_0x1b8db9(0x182)][_0x1b8db9(0x1a9)](this,_0x34a39f,_0x990af1,_0x138567,_0x4e00d8),this[_0x1b8db9(0x1b2)]!==undefined&&(_0x34a39f['name']=this['_originalNamePreMastery'],this[_0x1b8db9(0x1b2)]=undefined);},Window_Base['prototype'][_0x5cf387(0x185)]=function(){return!![];},VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x155)]=function(_0x146330,_0x35e2da){const _0x162a44=_0x5cf387,_0x21ea12=_0x35e2da['name'],_0x21d7a9=_0x146330[_0x162a44(0x1d4)](_0x35e2da['id']);if(_0x21d7a9>0x0){const _0x50c8ec=Window_Base[_0x162a44(0x136)][_0x162a44(0x201)];_0x35e2da['name']=_0x50c8ec[_0x162a44(0x1db)](_0x21ea12,_0x21d7a9);}return _0x21ea12;},Window_Base[_0x5cf387(0x14c)][_0x5cf387(0x1d2)]=function(_0x2677f6,_0x4ac10a,_0x34ae26,_0xa5d395){const _0x485856=_0x5cf387;if(!this[_0x485856(0x1a6)])return;if(!_0x2677f6)return;const _0x2e5044=Window_Base['SKILL_MASTERY'];_0xa5d395=_0xa5d395||0xa8,_0x4ac10a+=ImageManager[_0x485856(0x170)]+0x4,_0xa5d395-=ImageManager[_0x485856(0x170)]+0x4,_0xa5d395=Math[_0x485856(0x1ab)](_0xa5d395,_0x2e5044[_0x485856(0x15c)]);const _0x2c9f47=ColorManager['getColor'](_0x2e5044[_0x485856(0x20d)]),_0x1b054a=ColorManager[_0x485856(0x1bb)](_0x2e5044[_0x485856(0x1fa)]),_0x5693b1=_0x2e5044[_0x485856(0x1b5)],_0x300f73=this[_0x485856(0x1a6)][_0x485856(0x1d4)](_0x2677f6['id']);let _0x7c3136=0x0;if(_0x300f73>=DataManager[_0x485856(0x139)](_0x2677f6['id']))_0x7c3136=0x1;else{const _0x22958a=this[_0x485856(0x1a6)][_0x485856(0x19a)](_0x2677f6['id']),_0xc48602=this[_0x485856(0x1a6)][_0x485856(0x202)](_0x2677f6['id'],_0x300f73+0x1);_0x7c3136=_0x22958a/_0xc48602;}if(Imported['VisuMZ_3_VisualGaugeStyles']){const _0x228760=(VisuMZ[_0x485856(0x19e)][_0x485856(0x1e7)](_0x5693b1)??0xc)['clamp'](0x1,0x20),_0x4a7343=_0x34ae26+this['lineHeight']()-_0x228760-0x2,_0x26985f=ColorManager[_0x485856(0x200)]();VisuMZ[_0x485856(0x19e)]['_maxValueSegment']=this[_0x485856(0x1a6)]['skillMasteryExpNeeded'](_0x2677f6['id'],_0x300f73+0x1),this[_0x485856(0x1a1)][_0x485856(0x16b)](_0x5693b1,_0x4ac10a,_0x4a7343,_0xa5d395,_0x228760,_0x7c3136,_0x26985f,_0x2c9f47,_0x1b054a);}else this['drawGauge'](_0x4ac10a,_0x34ae26,_0xa5d395,_0x7c3136,_0x2c9f47,_0x1b054a);},VisuMZ[_0x5cf387(0x1e4)]['Window_Base_drawEquipBattleSkillName']=Window_Base[_0x5cf387(0x14c)][_0x5cf387(0x1de)],Window_Base[_0x5cf387(0x14c)]['drawEquipBattleSkillName']=function(_0x2ada1a,_0x500601,_0x54c0a4,_0x17979a){const _0x59c4e5=_0x5cf387;this[_0x59c4e5(0x1a6)]&&DataManager[_0x59c4e5(0x1a5)](_0x2ada1a)&&(this['constructor']!==Window_EquipBattleSkillList?this[_0x59c4e5(0x1b2)]=VisuMZ[_0x59c4e5(0x1e4)][_0x59c4e5(0x155)](this['_actor'],_0x2ada1a):this['_originalNamePreMastery']=_0x2ada1a[_0x59c4e5(0x1cb)],this[_0x59c4e5(0x1d2)](_0x2ada1a,_0x500601,_0x54c0a4,_0x17979a)),VisuMZ[_0x59c4e5(0x1e4)][_0x59c4e5(0x20f)][_0x59c4e5(0x1a9)](this,_0x2ada1a,_0x500601,_0x54c0a4,_0x17979a),this['_originalNamePreMastery']!==undefined&&(_0x2ada1a['name']=this['_originalNamePreMastery'],this[_0x59c4e5(0x1b2)]=undefined);},Window_ActorCommand[_0x5cf387(0x136)]={'showBattleCommandLvName':VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1eb)]['General'][_0x5cf387(0x13e)]??![],'showBattleCommandExpGauge':VisuMZ['SkillMastery'][_0x5cf387(0x1eb)][_0x5cf387(0x18d)][_0x5cf387(0x1f1)]??![]},VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1bc)]=Window_ActorCommand[_0x5cf387(0x14c)][_0x5cf387(0x15f)],Window_ActorCommand[_0x5cf387(0x14c)]['addSingleSkillCommand']=function(_0x21041f){const _0x1ca798=_0x5cf387;Window_ActorCommand['SKILL_MASTERY'][_0x1ca798(0x13e)]&&(this[_0x1ca798(0x1b2)]=VisuMZ[_0x1ca798(0x1e4)][_0x1ca798(0x155)](this[_0x1ca798(0x1a6)],_0x21041f)),VisuMZ[_0x1ca798(0x1e4)][_0x1ca798(0x1bc)][_0x1ca798(0x1a9)](this,_0x21041f),this['_originalNamePreMastery']!==undefined&&(_0x21041f[_0x1ca798(0x1cb)]=this[_0x1ca798(0x1b2)],this['_originalNamePreMastery']=undefined);},VisuMZ[_0x5cf387(0x1e4)]['Window_ActorCommand_drawItem']=Window_ActorCommand['prototype']['drawItem'],Window_ActorCommand[_0x5cf387(0x14c)]['drawItem']=function(_0x3e4ce9){const _0x259557=_0x5cf387,_0x1816cc=this['commandSymbol'](_0x3e4ce9);if(_0x1816cc===_0x259557(0x144)&&Window_ActorCommand[_0x259557(0x136)][_0x259557(0x1f1)]){const _0x196184=this[_0x259557(0x15e)](_0x3e4ce9),_0x36afe0=this[_0x259557(0x133)][_0x3e4ce9][_0x259557(0x162)]||0x0,_0x45f126=$dataSkills[_0x36afe0];if(_0x45f126)this[_0x259557(0x1d2)](_0x45f126,_0x196184['x'],_0x196184['y'],_0x196184[_0x259557(0x15b)]);}VisuMZ[_0x259557(0x1e4)][_0x259557(0x168)][_0x259557(0x1a9)](this,_0x3e4ce9);},VisuMZ[_0x5cf387(0x1e4)][_0x5cf387(0x1ac)]=Window_ActorCommand[_0x5cf387(0x14c)][_0x5cf387(0x1d6)],Window_ActorCommand[_0x5cf387(0x14c)][_0x5cf387(0x1d6)]=function(_0x2f5383){const _0x117853=_0x5cf387;if(!this[_0x117853(0x133)][_0x2f5383])return _0x117853(0x1b1);const _0x5d7b63=this['commandSymbol'](_0x2f5383);if(_0x5d7b63===_0x117853(0x144)&&Window_ActorCommand[_0x117853(0x136)]['showBattleCommandExpGauge'])return _0x117853(0x1b1);return VisuMZ[_0x117853(0x1e4)][_0x117853(0x1ac)]['call'](this,_0x2f5383);};Imported[_0x5cf387(0x1ea)]&&(VisuMZ['SkillMastery'][_0x5cf387(0x1c8)]=Window_EquipBattleSkillList[_0x5cf387(0x14c)]['addEquipBattleSkillsMarkers'],Window_EquipBattleSkillList['prototype'][_0x5cf387(0x1b6)]=function(_0x4a46a4){const _0x146134=_0x5cf387;VisuMZ[_0x146134(0x1e4)][_0x146134(0x155)](this[_0x146134(0x1a6)],_0x4a46a4),VisuMZ[_0x146134(0x1e4)]['Window_EquipBattleSkillList_addEquipBattleSkillsMarkers']['call'](this,_0x4a46a4);},Window_EquipBattleSkillList[_0x5cf387(0x14c)][_0x5cf387(0x185)]=function(){return![];});;