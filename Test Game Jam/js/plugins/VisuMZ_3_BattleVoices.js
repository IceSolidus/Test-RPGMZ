//=============================================================================
// VisuStella MZ - Battle Voices
// VisuMZ_3_BattleVoices.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleVoices = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleVoices = VisuMZ.BattleVoices || {};
VisuMZ.BattleVoices.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.06] [BattleVoices]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_Voices_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to create battle voice sets and apply them to actors
 * and enemies in your game. There are voice lines for various occassions in
 * battle ranging from simple conditions like saying something at the start of
 * battle to using specific hit types for skills and even going as far as
 * having lines to say upon the adding and removing of states.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create battle voice sets that you can apply to actors and enemies alike.
 * * Voice sets are created in the Plugin Parameters and then, those voice sets
 *   are then bound to various battlers to help reduce the clutter found in the
 *   noteboxes of actors and enemies.
 * * Enemies with different trait variations can have different voice sets.
 * * Voice sets offer lines for a variety of situations such as the start of
 *   battle, victory, escaping, failing to escape, and starting action input.
 * * Each situation can have multiple voice lines, which will be randomly
 *   picked upon meeting the situation. This helps reduce the monotony of each
 *   battle sounding the same.
 * * Different types of actions can have different voice lines. These range
 *   from using basic attacks, basic guarding, to using skills that target
 *   allies and enemies for different hit types, or even using items.
 * * Upon performing actions and attack motions, different sounds can be played
 *   in addition to extra sounds being played for landing a critical hit,
 *   defeating an enemy, or missing an attack.
 * * Voice lines can differ upon receiving damage or healing, depending on the
 *   amount of damage or healing received, and/or whether or not the receiving
 *   battler is guarding.
 * * Buffs, debuffs, and states all have voice lines for their applying and
 *   removal scenarios.
 * * Unique voice lines can be played and called upon via Plugin Commands.
 * * An option can be toggled to hear battle voices or not.
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
 * * VisuMZ_1_BattleCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * VisuMZ_2_VoiceActControl
 *
 * If the VisuMZ Voice Acting Control plugin is installed in the same project,
 * then any of the voice clips found in a voice set is played through the voice
 * audio channel instead of the sound effect audio channel.
 *
 * ---
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
 * VisuMZ_1_ElementStatusCore
 * 
 * Enemies can have different voice sets, voice volumes, voice pitches, and
 * voice panning depending on their trait sets. This way, you can do things
 * like separate different voice sets for the same enemy species but of
 * different gender traits, different element traits, different blessings, etc.
 * 
 * ---
 * 
 * VisuMZ_1_SkillsStatesCore
 * 
 * States will play battle voice lines when applied or removed. The VisuMZ
 * Skills and States Core plugin allows states to be differentiated between
 * positive and negative states using the <Positive State> and <Negative State>
 * notetags. Different battle voice lines can be played depending on the type
 * of state being added in addition to neutral states.
 * 
 * ---
 *
 * VisuMZ_3_VictoryAftermath
 *
 * An extra battle voice line can be played for if the Victory Aftermath is
 * installed. It is a voice line that will appear for an actor upon level up.
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
 * === Voice Set-Related Notetags ===
 * 
 * ---
 *
 * <Voice Set: name>
 *
 * - Used for: Actor, Enemy Notetags
 * - Declares a battle voice set for the target actor/enemy to use.
 * - Replace 'name' with the name of the battle voice set used in the Plugin
 *   Parameters to declare the contents of that battle voice set to be played.
 *   - If you are unsure which, it's the Plugin Parameter that says "Name" and
 *     in its decription will show "<Voice Set: name>".
 * - If nothing is declared, the actor/enemy will not use battle voice lines.
 * - This can be changed for actors via Plugin Commands.
 * 
 * ---
 * 
 * <Language lang Voice Set: name>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Requires VisuMZ_2_VoiceActControl and Voice Language Switching enabled.
 * - Declares a battle voice set for the target actor/enemy to use when using
 *   a certain voice language.
 * - Replace 'lang' with the language name this voice set is used for.
 *   - Bengali, Chinese, Czech, Danish, Dutch, English, Finnish, French,
 *     German, Greek, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean,
 *     Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Spanish,
 *     Swedish, Tamil, Thai, Turkish
 * - Replace 'name' with the name of the battle voice set used in the Plugin
 *   Parameters to declare the contents of that battle voice set to be played.
 *   - If you are unsure which, it's the Plugin Parameter that says "Name" and
 *     in its decription will show "<Voice Set: name>".
 * - Insert multiple of these notetags to have different voice sets for
 *   different voiced languages.
 * - This can be changed for actors via Plugin Commands.
 *
 * ---
 *
 * <Voice Set Volume: x>
 * <Voice Set Pitch: x>
 * <Voice Set Pan: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Adjusts the battle voice set's volume, pitch, and panning.
 * - Replace 'x' with number values representing the setting you want used.
 *   - For volume, use a number between 0 and 100. 100 is full volume.
 *   - For pitch, use a number between 50 and 150. 100 is neutral.
 *   - For pan, use a number between -100 and 100. 0 is neutral.
 * - If these notetags are not used, the actor/enemy will use the settings
 *   found in the default Plugin Parameters instead.
 *
 * ---
 *
 * <Trait Voice Sets>
 *  type Set: name
 *  type Volume: value
 *  type Pitch: value
 *  type Pan: value
 * 
 *  type Set: name
 *  type Volume: value
 *  type Pitch: value
 *  type Pan: value
 * 
 *  type Set: name
 *  type Volume: value
 *  type Pitch: value
 *  type Pan: value
 * </Trait Voice Sets>
 *
 * - Used for: Enemy Notetags
 * - Requires VisuMZ_1_ElementStatusCore!
 * - Allows enemies that have different trait variants to have different battle
 *   voice sets, such as different voices for Male and Female, or different
 *   elements, blessings, etc.
 * - Replace 'type' with the name of an associated Trait Set type found in the
 *   Plugin Parameters. This can be for any Trait Set except 'SubElement'.
 * - Replace 'name' with the name of the battle voice set used in the Plugin
 *   Parameters to declare the contents of that battle voice set to be played.
 *   - If you are unsure which, it's the Plugin Parameter that says "Name" and
 *     in its decription will show "<Voice Set: name>".
 * - Replace 'value' with number values representing the setting you want used.
 *   - For volume, use a number between 0 and 100. 100 is full volume.
 *   - For pitch, use a number between 50 and 150. 100 is neutral.
 *   - For pan, use a number between -100 and 100. 0 is neutral.
 * - If none of these are used, then the enemy will not have any battle voices.
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
 * === Actor Plugin Command ===
 * 
 * ---
 *
 * Actor: Change Battle Voice Set (Normal)
 * - Changes battle voice set data for target actor.
 *
 *   Actor ID:
 *   - Select which Actor ID(s) to alter the voice data for.
 *
 *   Voice Set Name:
 *   - What is the name of the voice set?
 *
 *     Voice Set Volume:
 *     - Change the volume of the voice set sound effects played.
 *
 *     Voice Set Pitch:
 *     - Change the pitch of the voice set sound effects played.
 *
 *     Voice Set Pan:
 *     - Change the pan of the voice set sound effects played.
 *
 * ---
 *
 * Actor: Change Battle Voice Set (Language)
 * - Changes battle voice set data for different languages to target actor.
 * - Requires VisuMZ_2_VoiceActControl and audio switching enabled!
 *
 *   Actor ID:
 *   - Select which Actor ID(s) to alter the voice data for.
 * 
 *   Language Sets:
 *   - Determine which line is used based on which voice language the player
 *     has selected.
 *
 *   Default Set Name:
 *   - What is the name of the default voice set?
 *
 *   Voice Set Volume:
 *   - Change the volume of the voice set sound effects played.
 *
 *   Voice Set Pitch:
 *   - Change the pitch of the voice set sound effects played.
 *
 *   Voice Set Pan:
 *   - Change the pan of the voice set sound effects played.
 *
 * ---
 * 
 * === Mute Plugin Commands ===
 * 
 * ---
 * 
 * Mute: All Voices
 * - Mutes/unmutes all battle voices.
 * - For those times you don't want battle voices interrupt important moments.
 * 
 *   Mute/Unmute?:
 *   - Mutes/unmutes all battle voices.
 * 
 * ---
 * 
 * === Action Sequences - Voice ===
 * 
 * ---
 *
 * VOICE: Common Line
 * - Plays a common voice line from target battler(s).
 * - Requires VisuMZ_3_BattleVoices!
 *
 *   Speaker Target(s):
 *   - Select unit(s) to play voice lines from.
 *
 *   Voice Line:
 *   - What voice line do you wish to play?
 *
 * ---
 *
 * VOICE: Play Special Line
 * - Plays a special voice line from target battler(s).
 * - Requires VisuMZ_3_BattleVoices!
 *
 *   Speaker Target(s):
 *   - Select unit(s) to play voice lines from.
 *
 *   Voice Line Type:
 *   - What voice line type do you wish to play?
 *     - Action Name
 *     - Chant Line
 *     - Item Name
 *     - Skill Name
 *     - Spell Name
 *     - Unique Lines
 *
 *   Name / Letter:
 *   - What voice letter/name do you want to play?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings for the Battle Voices Plugin Parameters.
 *
 * ---
 *
 * For <Voice Set: name>
 * 
 *   Voice Sets:
 *   - A list of voice sets to choose from and apply to battlers with the
 *     <Voice Set: name> notetag.
 *   - For more information, look under the 'Voice Set Settings' section.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 * ---
 * 
 * Voice Line Batches
 * 
 *   Action Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Action Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Chant Lines Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Chant Line: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Item Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Item Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Skill Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Skill Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Spell Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Spell Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Unique Line Sets:
 *   - A list of voice lines that are played when using Plugin Commands
 *     that call them.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 *
 * ---
 *
 * Default Sound Settings
 * 
 *   Volume:
 *   - Default volume of the voice set sound effects played.
 * 
 *   Pitch:
 *   - Default pitch of the voice set sound effects played.
 * 
 *   Pan:
 *   - Default pan of the voice set sound effects played.
 * 
 *   Delay Victory MS:
 *   - Delay victory phrases by how many milliseconds?
 *   - 1000 milliseconds = 1 second.
 *
 * ---
 *
 * Options Settings
 * 
 *   Add Option?:
 *   - Add the 'Battle Voices' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 *   Allow Self Response?:
 *   - Allow active battler to play response voice lines to his/her own
 *     actions?
 * 
 *   Defeat Type:
 *   - When should defeat-related battle voices by played?
 *     - 0 HP - Plays when target reaches 0 HP the first time.
 *     - When Collapse - Plays when target performs collapse animation.
 * 
 *   Override Last Sound:
 *   - Stops last clip made by battler to play a new one?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Voice Set Settings
 * ============================================================================
 *
 * You can declare multiple battle voice sets here and what voice lines will be
 * played under specific conditions and/or scenarios. If there are multiple
 * filenames listed, then a random voice line will be picked from the batch.
 * The volume, pitch, and pan will be the default value used or whatever
 * specialized setting you made using notetags.
 * 
 * If a battle voice set has a "Name" that is later used in the "Voice Line
 * Batches" lists, then those voice line batches will be added to this voice
 * set to extend it.
 *
 * ---
 *
 * MOST IMPORTANT
 * 
 *   Name:
 *   - Name of this Voice Set. The name will be used as the name for the
 *     <Voice Set: name> notetag.
 * 
 * ---
 * 
 * Battle Phases
 * 
 *   On Battle Start:
 *   - Filename of the voice sound file for a random party member speaking at
 *     the start of battle.
 * 
 *   On Battle Input:
 *   - Filename of the voice sound file for a party member that is ready to
 *     input actions.
 * 
 *   On Battle Victory:
 *   - Filename of the voice sound file for a random party member speaking upon
 *     battle victory.
 * 
 *   Victory => Level Up:
 *   - Filename of the voice sound file for party members that level up in
 *     battle. Requires VisuMZ_3_VictoryAftermath!
 * 
 *   Escape => Success:
 *   - Filename of the voice sound file for a random party member speaking upon
 *     successfully escaping battle.
 * 
 *   Escape => Failure:
 *   - Filename of the voice sound file for a random party member speaking upon
 *     failing to escaping battle.
 *
 * ---
 *
 * On Action Start
 * 
 *   Basic Action:
 * 
 *     Regular Attack:
 *     - Filename of the voice sound file for performing the start of a basic
 *       regular attack.
 * 
 *     Regular Guard:
 *     - Filename of the voice sound file for performing the start of a basic
 *       regular guard.
 * 
 *   Skill Usage > For Allies
 * 
 *     Certain Hit:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based certain hit action for allies.
 * 
 *     Physical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based physical hit action for allies.
 * 
 *     Magical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based magical hit action for allies.
 * 
 *   Skill Usage > For Enemies:
 * 
 *     Certain Hit:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based certain hit action for enemies.
 * 
 *     Physical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based physical hit action for enemies.
 * 
 *     Magical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based magical hit action for enemies.
 * 
 *   Item Usage:
 * 
 *     For Allies:
 *     - Filename of the voice sound file for performing the start of an item-
 *       based action for allies.
 * 
 *     For Enemies:
 *     - Filename of the voice sound file for performing the start of an item-
 *       based action for enemies.
 * 
 * ---
 * 
 * Perform Action:
 * 
 *   Basic Action:
 * 
 *     Attack Motion:
 *     - Filename of the voice sound file for performing an attack's action.
 * 
 *     Critical Action:
 *     - Filename of the voice sound file for performing an action and landing
 *       a critical hit.
 * 
 *     Defeat Opponent:
 *     - Filename of the voice sound file for performing an action and
 *       defeating an opponent.
 * 
 *     Missed Action:
 *     - Filename of the voice sound file for performing an action but missing.
 * 
 *   Skill Usage:
 * 
 *     Certain Hit:
 *     - Filename of the voice sound file for performing the action of a
 *       Certain Hit type skill.
 * 
 *     Physical:
 *     - Filename of the voice sound file for performing the action of a
 *       physical hit type skill.
 * 
 *     Magical:
 *     - Filename of the voice sound file for performing the action of a
 *       magical hit type skill.
 * 
 * ---
 * 
 * On HP Change:
 * 
 *   Life State:
 * 
 *     On Death:
 *     - Filename of the voice sound file when the battler receives enough
 *       damage to be fatal.
 * 
 *     On Revive:
 *     - Filename of the voice sound file when the battler receives healing and
 *       revives.
 * 
 *   No Change:
 * 
 *     Damage <= 0%:
 *     - Filename of the voice sound file when the battler receives no damage
 *       whatsoever.
 * 
 *   On Damage:
 * 
 *     Damage < 25%:
 *     - Filename of the voice sound file when the battler receives damage less
 *       than 25% of MaxHP.
 * 
 *     Damage < 50%:
 *     - Filename of the voice sound file when the battler receives damage less
 *       than 50% of MaxHP.
 * 
 *     Damage >= 50%:
 *     - Filename of the voice sound file when the battler receives damage more
 *       than 50% of MaxHP.
 * 
 *     Guarding Damage:
 *     - Filename of the voice sound file when the battler receives damage
 *       while guarding.
 * 
 *   On Recovery:
 * 
 *     Recovery < 25%:
 *     - Filename of the voice sound file when the battler receives healing
 *       more than 25% of MaxHP.
 * 
 *     Recovery < 50%:
 *     - Filename of the voice sound file when the battler receives healing
 *       more than 25% of MaxHP.
 * 
 *     Recovery >= 50%:
 *     - Filename of the voice sound file when the battler receives healing
 *       more than 25% of MaxHP.
 * 
 *   On Action Result:
 * 
 *     On Miss/Evasion:
 *     - Filename of the voice sound file when the battler evades a physical or
 *       certain hit action.
 * 
 *     On Magic Evasion:
 *     - Filename of the voice sound file when the battler evades a magical
 *       action.
 * 
 *     On Counter:
 *     - Filename of the voice sound file when the battler counters an action.
 * 
 *     On Reflection:
 *     - Filename of the voice sound file when the battler reflects an action.
 * 
 *     On Substitute:
 *     - Filename of the voice sound file when the battler substitutes for an
 *       action.
 * 
 * ---
 * 
 * Buff/Debuff Related:
 * 
 *   On Buff Apply:
 *   - Filename of the voice sound file when the battler receives a buff or
 *     stacks a buff to a higher degree.
 * 
 *   On Buff Remove:
 *   - Filename of the voice sound file when the battler has a buff removed.
 * 
 *   On Debuff Apply:
 *   - Filename of the voice sound file when the battler receives a debuff or
 *     stacks a debuff to a higher degree.
 * 
 *   On Debuff Remove:
 *   - Filename of the voice sound file when the battler has a debuff
 *     removed.
 * 
 * ---
 * 
 * State Related
 * 
 *   Positive States:
 * 
 *     On State Apply:
 *     - Filename of the voice sound file when the battler receives a positive
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *     On State Remove:
 *     - Filename of the voice sound file when the battler loses a positive
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *   Negative States:
 * 
 *     On State Apply:
 *     - Filename of the voice sound file when the battler receives a negative
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *     On State Remove:
 *     - Filename of the voice sound file when the battler loses a negative
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *   Neutral States:
 *   
 *     On State Apply:
 *     - Filename of the voice sound file when the battler receives a neutral
 *       state.
 * 
 *     On State Remove:
 *     - Filename of the voice sound file when the battler loses a neutral
 *       state.
 * 
 * ---
 * 
 * Plugin Compatibility > VisuMZ_2_CharaCreationSys:
 * 
 *   Selectable?:
 *   - Is voice set selectable in the Character Creation System?
 *   - Requires VisuMZ_2_CharaCreationSys!
 * 
 *   Voice Preview:
 *   - Filename of the voice sound file to preview.
 *   - Requires VisuMZ_2_CharaCreationSys!
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
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.06: October 17, 2024
 * * Bug Fixes!
 * ** Fixed a bug where "Allow Self Response?" setting was inverted. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Defeat Type
 * **** When should defeat-related battle voices by played?
 * ***** 0 HP - Plays when target reaches 0 HP the first time.
 * ***** When Collapse - Plays when target performs collapse animation.
 * 
 * Version 1.05: May 16, 2024
 * * Feature Update!
 * ** "No Damage" voice will no longer play when recovering HP at 100%. Voices
 *    will instead play the "recover < 25%" sound bit. Update made by Arisu.
 * 
 * Version 1.04: April 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with certain battle systems like ATB and CTB so that
 *    the input lines won't go through if any enemies are left alive.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Automated battle voices will no longer be registered as replay voices.
 *    Update made by Irina.
 * ** Changed "Damage <= 0%" category to "No Change" in order to not draw
 *    confusion in case users may put hurt sounds in the <= 0% category.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Option Settings > Delay Victory MS:
 * **** Delay victory phrases by how many milliseconds?
 * 
 * Version 1.03: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where player-created characters lacking a voice set would no
 *    longer crash battles. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Olivia:
 * *** Mute: All Voices
 * **** Mutes/unmutes all battle voices.
 * **** For those times you don't want battle voices interrupt important
 *      moments.
 * 
 * Version 1.02: January 18, 2024
 * * Compatibility Update!
 * ** Compatibility added for Voice Acting Control's new Voice Language Switch
 *    features. Updated by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina:
 * *** <Language lang Voice Set: name>
 * **** Declares a battle voice set for the target actor/enemy to use when
 *      using a certain voice language.
 * ** New Plugin Command added by Irina:
 * *** Actor: Change Battle Voice Set (Language)
 * **** Changes battle voice set data for different languages to target actor.
 * **** Requires VisuMZ_2_VoiceActControl and audio switching enabled!
 * 
 * Version 1.01: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a problem where certain conditions wouldn't play voice lines.
 *    Fix made by Arisu.
 *
 * Version 1.00 Official Release Date: August 30, 2023
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
 * @command ActorChangeBattleVoiceSet
 * @text Actor: Change Battle Voice Set (Normal)
 * @desc Changes battle voice set data for target actor.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID(s) to alter the voice data for.
 * @default 1
 * 
 * @arg VoiceSet:str
 * @text Voice Set Name
 * @desc What is the name of the voice set?
 * @default Untitled
 *
 * @arg volume:num
 * @text Voice Set Volume
 * @parent VoiceSet:str
 * @type number
 * @max 100
 * @desc Change the volume of the voice set sound effects played.
 * @default 100
 *
 * @arg pitch:num
 * @text Voice Set Pitch
 * @parent VoiceSet:str
 * @type number
 * @desc Change the pitch of the voice set sound effects played.
 * @default 100
 *
 * @arg pan:num
 * @text Voice Set Pan
 * @parent VoiceSet:str
 * @desc Change the pan of the voice set sound effects played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeBattleVoiceSetLang
 * @text Actor: Change Battle Voice Set (Language)
 * @desc Changes battle voice set data for different languages.
 * Requires VisuMZ_2_VoiceActControl and audio switching enabled!
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID(s) to alter the voice data for.
 * @default 1
 *
 * @arg Language:struct
 * @text Language Sets
 * @parent General
 * @type struct<VoiceLang>
 * @desc Determine which line is used based on which voice language
 * the player has selected.
 * @default {"Bengali:str":"","Chinese:str":"","Czech:str":"","Danish:str":"","Dutch:str":"","English:str":"","Finnish:str":"","French:str":"","German:str":"","Greek:str":"","Hindi:str":"","Hungarian:str":"","Indonesian:str":"","Italian:str":"","Japanese:str":"","Korean:str":"","Norwegian:str":"","Polish:str":"","Portuguese:str":"","Romanian:str":"","Russian:str":"","Slovak:str":"","Spanish:str":"","Swedish:str":"","Tamil:str":"","Thai:str":"","Turkish:str":""}
 * 
 * @arg VoiceSet:str
 * @text Default Set Name
 * @desc What is the name of the default voice set?
 * @default Untitled
 *
 * @arg volume:num
 * @text Voice Set Volume
 * @type number
 * @max 100
 * @desc Change the volume of the voice set sound effects played.
 * @default 100
 *
 * @arg pitch:num
 * @text Voice Set Pitch
 * @type number
 * @desc Change the pitch of the voice set sound effects played.
 * @default 100
 *
 * @arg pan:num
 * @text Voice Set Pan
 * @desc Change the pan of the voice set sound effects played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Mute
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MuteAllVoices
 * @text Mute: All Voices
 * @desc Mutes/unmutes all battle voices. For those times you don't
 * want battle voices interrupt important moments.
 *
 * @arg Mute:eval
 * @text Mute/Unmute?
 * @type boolean
 * @on Mute
 * @off Unmute
 * @desc Mutes/unmutes all battle voices.
 * @default true
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
 * @param BattleVoices
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param VoiceSetCategory
 * @text For <Voice Set: name>
 *
 * @param VoiceSets:arraystruct
 * @text Voice Sets
 * @parent VoiceSetCategory
 * @type struct<VoiceSet>[]
 * @desc A list of voice sets to choose from and apply to battlers
 * with the <Voice Set: name> notetag.
 * @default []
 * 
 * @param LineBatches
 * @text Voice Line Batches
 *
 * @param ActionNames:arraystruct
 * @text Action Name Sets
 * @parent LineBatches
 * @type struct<ActionName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ChantLines:arraystruct
 * @text Chant Lines Sets
 * @parent LineBatches
 * @type struct<ChantLine>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ItemNames:arraystruct
 * @text Item Name Sets
 * @parent LineBatches
 * @type struct<ItemName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Item Name: x> notetag.
 * @default []
 *
 * @param SkillNames:arraystruct
 * @text Skill Name Sets
 * @parent LineBatches
 * @type struct<SkillName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SpellNames:arraystruct
 * @text Spell Name Sets
 * @parent LineBatches
 * @type struct<SpellName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param UniqueLines:arraystruct
 * @text Unique Line Sets
 * @parent LineBatches
 * @type struct<UniqueLine>[]
 * @desc A list of voice lines that are played when using
 * Plugin Commands that call them.
 * @default []
 * 
 * @param DefaultSound
 * @text Default Sound Settings
 *
 * @param volume:num
 * @text Volume
 * @parent DefaultSound
 * @type number
 * @max 100
 * @desc Default volume of the voice set sound effects played.
 * @default 100
 *
 * @param pitch:num
 * @text Pitch
 * @parent DefaultSound
 * @type number
 * @desc Default pitch of the voice set sound effects played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @parent DefaultSound
 * @desc Default pan of the voice set sound effects played.
 * @default 0
 *
 * @param DelayVictoryMS:num
 * @text Delay Victory MS
 * @parent DefaultSound
 * @type number
 * @desc Delay victory phrases by how many milliseconds?
 * 1000 milliseconds = 1 second.
 * @default 1500
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings for this plugin.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Battle Voices"}
 *
 * @param AllowSelfResponse:eval
 * @text Allow Self Response?
 * @parent Options:struct
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow active battler to play response voice lines to
 * his/her own actions?
 * @default false
 *
 * @param DefeatType:str
 * @text Defeat Type
 * @parent Options:struct
 * @type select
 * @option 0 HP
 * @option When Collapse
 * @desc When should defeat-related battle voices by played?
 * @default 0 HP
 *
 * @param Override:eval
 * @text Override Last Sound
 * @parent Options:struct
 * @type boolean
 * @on Override
 * @off Leave Alone
 * @desc Stops last clip made by battler to play a new one?
 * @default true
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
 * Voice Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VoiceSet:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param BattlePhases
 * @text Battle Phases
 *
 * @param BattleStart:arraystr
 * @text On Battle Start
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking at the start of battle.
 * @default []
 *
 * @param BattleInput:arraystr
 * @text On Battle Input
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a party member that
 * is ready to input actions.
 * @default []
 *
 * @param BattleVictory:arraystr
 * @text On Battle Victory
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking upon battle victory.
 * @default []
 *
 * @param BattleVictoryLevelUp:arraystr
 * @text Victory => Level Up
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for party members that
 * level up in battle. Requires VisuMZ_3_VictoryAftermath!
 * @default []
 *
 * @param BattleEscapeSuccess:arraystr
 * @text Escape => Success
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking upon successfully escaping battle.
 * @default []
 *
 * @param BattleEscapeFailure:arraystr
 * @text Escape => Failure
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking upon failing to escaping battle.
 * @default []
 * 
 * @param ActionStart
 * @text On Action Start
 * 
 * @param ActionStartBasic
 * @text Basic Action
 * @parent ActionStart
 *
 * @param ActionStartBasicAttack:arraystr
 * @text Regular Attack
 * @parent ActionStartBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a basic regular attack.
 * @default []
 *
 * @param ActionStartBasicGuard:arraystr
 * @text Regular Guard
 * @parent ActionStartBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a basic regular guard.
 * @default []
 * 
 * @param ActionStartSkill
 * @text Skill Usage
 * @parent ActionStart
 * 
 * @param ActionStartSkillAlly
 * @text For Allies
 * @parent ActionStartSkill
 *
 * @param ActionStartSkillAllyCertainHit:arraystr
 * @text Certain Hit
 * @parent ActionStartSkillAlly
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based certain hit action for allies.
 * @default []
 *
 * @param ActionStartSkillAllyPhysical:arraystr
 * @text Physical
 * @parent ActionStartSkillAlly
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based physical hit action for allies.
 * @default []
 *
 * @param ActionStartSkillAllyMagical:arraystr
 * @text Magical
 * @parent ActionStartSkillAlly
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based magical hit action for allies.
 * @default []
 * 
 * @param ActionStartSkillEnemy
 * @text For Enemies
 * @parent ActionStartSkill
 *
 * @param ActionStartSkillEnemyCertainHit:arraystr
 * @text Certain Hit
 * @parent ActionStartSkillEnemy
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based certain hit action for enemies.
 * @default []
 *
 * @param ActionStartSkillEnemyPhysical:arraystr
 * @text Physical
 * @parent ActionStartSkillEnemy
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based physical hit action for enemies.
 * @default []
 *
 * @param ActionStartSkillEnemyMagical:arraystr
 * @text Magical
 * @parent ActionStartSkillEnemy
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based magical hit action for enemies.
 * @default []
 * 
 * @param ActionStartItem
 * @text Item Usage
 * @parent ActionStart
 *
 * @param ActionStartItemAlly:arraystr
 * @text For Allies
 * @parent ActionStartItem
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of an item-based action for allies.
 * @default []
 *
 * @param ActionStartItemEnemy:arraystr
 * @text For Enemies
 * @parent ActionStartItem
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of an item-based action for enemies.
 * @default []
 * 
 * @param PerformAction
 * @text Perform Action
 * 
 * @param PerformActionBasic
 * @text Basic Action
 * @parent PerformAction
 *
 * @param PerformActionBasicAttack:arraystr
 * @text Attack Motion
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * attack's action.
 * @default []
 *
 * @param PerformActionCritical:arraystr
 * @text Critical Action
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * action and landing a critical hit.
 * @default []
 *
 * @param PerformActionDefeatFoe:arraystr
 * @text Defeat Opponent
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * action and defeating an opponent.
 * @default []
 *
 * @param PerformActionMiss:arraystr
 * @text Missed Action
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * action but missing.
 * @default []
 * 
 * @param PerformActionSkill
 * @text Skill Usage
 * @parent PerformAction
 *
 * @param PerformActionSkillCertainHit:arraystr
 * @text Certain Hit
 * @parent PerformActionSkill
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the action
 * of a Certain Hit type skill.
 * @default []
 *
 * @param PerformActionSkillPhysical:arraystr
 * @text Physical
 * @parent PerformActionSkill
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the action
 * of a physical hit type skill.
 * @default []
 *
 * @param PerformActionSkillMagical:arraystr
 * @text Magical
 * @parent PerformActionSkill
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the action
 * of a magical hit type skill.
 * @default []
 * 
 * @param HpChange
 * @text On HP Change
 * 
 * @param HpChangeLifeState
 * @text Life State
 * @parent HpChange
 *
 * @param HpChangeDeath:arraystr
 * @text On Death
 * @parent HpChangeLifeState
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * enough damage to be fatal.
 * @default []
 *
 * @param HpChangeRevive:arraystr
 * @text On Revive
 * @parent HpChangeLifeState
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing and revives.
 * @default []
 * 
 * @param HpChangeNoChange
 * @text No Change
 * @parent HpChange
 *
 * @param HpChangeDamageNone:arraystr
 * @text Damage <= 0%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * no damage whatsoever.
 * @default []
 * 
 * @param HpChangeDamage
 * @text On Damage
 * @parent HpChange
 *
 * @param HpChangeDamageLight:arraystr
 * @text Damage < 25%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage less than 25% of MaxHP.
 * @default []
 *
 * @param HpChangeDamageMedium:arraystr
 * @text Damage < 50%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage less than 50% of MaxHP.
 * @default []
 *
 * @param HpChangeDamageHeavy:arraystr
 * @text Damage >= 50%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage more than 50% of MaxHP.
 * @default []
 *
 * @param HpChangeDamageGuard:arraystr
 * @text Guarding Damage
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage while guarding.
 * @default []
 * 
 * @param HpChangeRecover
 * @text On Recovery
 * @parent HpChange
 *
 * @param HpChangeRecoverLight:arraystr
 * @text Recovery < 25%
 * @parent HpChangeRecover
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing more than 25% of MaxHP.
 * @default []
 *
 * @param HpChangeRecoverMedium:arraystr
 * @text Recovery < 50%
 * @parent HpChangeRecover
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing more than 25% of MaxHP.
 * @default []
 *
 * @param HpChangeRecoverHeavy:arraystr
 * @text Recovery >= 50%
 * @parent HpChangeRecover
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing more than 25% of MaxHP.
 * @default []
 * 
 * @param ActionResult
 * @text On Action Result
 *
 * @param ActionResultEvasion:arraystr
 * @text On Miss/Evasion
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler evades
 * a physical or certain hit action.
 * @default []
 *
 * @param ActionResultMagicEvasion:arraystr
 * @text On Magic Evasion
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler evades
 * a magical action.
 * @default []
 *
 * @param ActionResultCounter:arraystr
 * @text On Counter
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler counters
 * an action.
 * @default []
 *
 * @param ActionResultReflection:arraystr
 * @text On Reflection
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler reflects
 * an action.
 * @default []
 *
 * @param ActionResultSubstitute:arraystr
 * @text On Substitute
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler
 * substitutes for an action.
 * @default []
 * 
 * @param BuffRelated
 * @text Buff/Debuff Related
 *
 * @param BuffAdd:arraystr
 * @text On Buff Apply
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a buff or stacks a buff to a higher degree.
 * @default []
 *
 * @param BuffRemove:arraystr
 * @text On Buff Remove
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler has
 * a buff removed.
 * @default []
 *
 * @param DebuffAdd:arraystr
 * @text On Debuff Apply
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a debuff or stacks a debuff to a higher degree.
 * @default []
 *
 * @param DebuffRemove:arraystr
 * @text On Debuff Remove
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler has
 * a debuff removed.
 * @default []
 * 
 * @param StateRelated
 * @text State Related
 * 
 * @param StatePositive
 * @text Positive States
 * @parent StateRelated
 *
 * @param StatePositiveAdd:arraystr
 * @text On State Apply
 * @parent StatePositive
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a positive state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 *
 * @param StatePositiveRemove:arraystr
 * @text On State Remove
 * @parent StatePositive
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler loses a
 * positive state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 * 
 * @param StateNegative
 * @text Negative States
 * @parent StateRelated
 *
 * @param StateNegativeAdd:arraystr
 * @text On State Apply
 * @parent StateNegative
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a negative state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 *
 * @param StateNegativeRemove:arraystr
 * @text On State Remove
 * @parent StateNegative
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler loses a
 * negative state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 * 
 * @param StateNeutral
 * @text Neutral States
 * @parent StateRelated
 *
 * @param StateNeutralAdd:arraystr
 * @text On State Apply
 * @parent StateNeutral
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a neutral state.
 * @default []
 *
 * @param StateNeutralRemove:arraystr
 * @text On State Remove
 * @parent StateNeutral
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler loses a
 * neutral state.
 * @default []
 * 
 * @param Compatibility
 * @text Plugin Compatibility
 * 
 * @param CharaCreate
 * @text Character Create
 * @parent Compatibility
 * @default VisuMZ_2_CharaCreationSys
 *
 * @param CharaCreateDisplayName:str
 * @text Display Name
 * @parent CharaCreate
 * @desc How does this voice set appear?
 * Requires VisuMZ_2_CharaCreationSys!
 * @default Untitled
 *
 * @param CharaCreateSelect:eval
 * @text Selectable?
 * @parent CharaCreate
 * @type boolean
 * @on Selectable
 * @off Non-Selectable
 * @desc Is voice set selectable in the Character Creation System?
 * Requires VisuMZ_2_CharaCreationSys!
 * @default true
 *
 * @param CharaCreatePreview:arraystr
 * @text Voice Preview
 * @parent CharaCreate
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to preview.
 * Requires VisuMZ_2_CharaCreationSys!
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Action Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ActionName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param ActionName
 * @text Action Names
 *
 * @param ActionNameA:arraystr
 * @text Action Name A
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameB:arraystr
 * @text Action Name B
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameC:arraystr
 * @text Action Name C
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameD:arraystr
 * @text Action Name D
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameE:arraystr
 * @text Action Name E
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameF:arraystr
 * @text Action Name F
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameG:arraystr
 * @text Action Name G
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameH:arraystr
 * @text Action Name H
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameI:arraystr
 * @text Action Name I
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameJ:arraystr
 * @text Action Name J
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameK:arraystr
 * @text Action Name K
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameL:arraystr
 * @text Action Name L
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameM:arraystr
 * @text Action Name M
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameN:arraystr
 * @text Action Name N
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameO:arraystr
 * @text Action Name O
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameP:arraystr
 * @text Action Name P
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameQ:arraystr
 * @text Action Name Q
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameR:arraystr
 * @text Action Name R
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameS:arraystr
 * @text Action Name S
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameT:arraystr
 * @text Action Name T
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameU:arraystr
 * @text Action Name U
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameV:arraystr
 * @text Action Name V
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameW:arraystr
 * @text Action Name W
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameX:arraystr
 * @text Action Name X
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameY:arraystr
 * @text Action Name Y
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameZ:arraystr
 * @text Action Name Z
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Chant Line Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ChantLine:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param ChantLine
 * @text Chant Lines
 *
 * @param ChantLineA:arraystr
 * @text Chant Line A
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineB:arraystr
 * @text Chant Line B
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineC:arraystr
 * @text Chant Line C
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineD:arraystr
 * @text Chant Line D
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineE:arraystr
 * @text Chant Line E
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineF:arraystr
 * @text Chant Line F
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineG:arraystr
 * @text Chant Line G
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineH:arraystr
 * @text Chant Line H
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineI:arraystr
 * @text Chant Line I
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineJ:arraystr
 * @text Chant Line J
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineK:arraystr
 * @text Chant Line K
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineL:arraystr
 * @text Chant Line L
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineM:arraystr
 * @text Chant Line M
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineN:arraystr
 * @text Chant Line N
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineO:arraystr
 * @text Chant Line O
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineP:arraystr
 * @text Chant Line P
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineQ:arraystr
 * @text Chant Line Q
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineR:arraystr
 * @text Chant Line R
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineS:arraystr
 * @text Chant Line S
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineT:arraystr
 * @text Chant Line T
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineU:arraystr
 * @text Chant Line U
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineV:arraystr
 * @text Chant Line V
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineW:arraystr
 * @text Chant Line W
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineX:arraystr
 * @text Chant Line X
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineY:arraystr
 * @text Chant Line Y
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineZ:arraystr
 * @text Chant Line Z
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Item Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param ItemName
 * @text Item Names
 *
 * @param ItemNameA:arraystr
 * @text Item Name A
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameB:arraystr
 * @text Item Name B
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameC:arraystr
 * @text Item Name C
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameD:arraystr
 * @text Item Name D
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameE:arraystr
 * @text Item Name E
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameF:arraystr
 * @text Item Name F
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameG:arraystr
 * @text Item Name G
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameH:arraystr
 * @text Item Name H
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameI:arraystr
 * @text Item Name I
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameJ:arraystr
 * @text Item Name J
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameK:arraystr
 * @text Item Name K
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameL:arraystr
 * @text Item Name L
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameM:arraystr
 * @text Item Name M
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameN:arraystr
 * @text Item Name N
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameO:arraystr
 * @text Item Name O
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameP:arraystr
 * @text Item Name P
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameQ:arraystr
 * @text Item Name Q
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameR:arraystr
 * @text Item Name R
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameS:arraystr
 * @text Item Name S
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameT:arraystr
 * @text Item Name T
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameU:arraystr
 * @text Item Name U
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameV:arraystr
 * @text Item Name V
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameW:arraystr
 * @text Item Name W
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameX:arraystr
 * @text Item Name X
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameY:arraystr
 * @text Item Name Y
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameZ:arraystr
 * @text Item Name Z
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param SkillName
 * @text Skill Names
 *
 * @param SkillNameA:arraystr
 * @text Skill Name A
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameB:arraystr
 * @text Skill Name B
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameC:arraystr
 * @text Skill Name C
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameD:arraystr
 * @text Skill Name D
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameE:arraystr
 * @text Skill Name E
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameF:arraystr
 * @text Skill Name F
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameG:arraystr
 * @text Skill Name G
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameH:arraystr
 * @text Skill Name H
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameI:arraystr
 * @text Skill Name I
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameJ:arraystr
 * @text Skill Name J
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameK:arraystr
 * @text Skill Name K
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameL:arraystr
 * @text Skill Name L
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameM:arraystr
 * @text Skill Name M
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameN:arraystr
 * @text Skill Name N
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameO:arraystr
 * @text Skill Name O
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameP:arraystr
 * @text Skill Name P
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameQ:arraystr
 * @text Skill Name Q
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameR:arraystr
 * @text Skill Name R
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameS:arraystr
 * @text Skill Name S
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameT:arraystr
 * @text Skill Name T
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameU:arraystr
 * @text Skill Name U
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameV:arraystr
 * @text Skill Name V
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameW:arraystr
 * @text Skill Name W
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameX:arraystr
 * @text Skill Name X
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameY:arraystr
 * @text Skill Name Y
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameZ:arraystr
 * @text Skill Name Z
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Spell Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SpellName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param SpellName
 * @text Spell Names
 *
 * @param SpellNameA:arraystr
 * @text Spell Name A
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameB:arraystr
 * @text Spell Name B
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameC:arraystr
 * @text Spell Name C
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameD:arraystr
 * @text Spell Name D
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameE:arraystr
 * @text Spell Name E
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameF:arraystr
 * @text Spell Name F
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameG:arraystr
 * @text Spell Name G
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameH:arraystr
 * @text Spell Name H
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameI:arraystr
 * @text Spell Name I
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameJ:arraystr
 * @text Spell Name J
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameK:arraystr
 * @text Spell Name K
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameL:arraystr
 * @text Spell Name L
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameM:arraystr
 * @text Spell Name M
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameN:arraystr
 * @text Spell Name N
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameO:arraystr
 * @text Spell Name O
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameP:arraystr
 * @text Spell Name P
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameQ:arraystr
 * @text Spell Name Q
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameR:arraystr
 * @text Spell Name R
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameS:arraystr
 * @text Spell Name S
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameT:arraystr
 * @text Spell Name T
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameU:arraystr
 * @text Spell Name U
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameV:arraystr
 * @text Spell Name V
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameW:arraystr
 * @text Spell Name W
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameX:arraystr
 * @text Spell Name X
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameY:arraystr
 * @text Spell Name Y
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameZ:arraystr
 * @text Spell Name Z
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Unique Line Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UniqueLine:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param Unique
 * @text Unique Lines
 *
 * @param UniqueLineA:arraystr
 * @text Unique Line A
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineB:arraystr
 * @text Unique Line B
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineC:arraystr
 * @text Unique Line C
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineD:arraystr
 * @text Unique Line D
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineE:arraystr
 * @text Unique Line E
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineF:arraystr
 * @text Unique Line F
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineG:arraystr
 * @text Unique Line G
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineH:arraystr
 * @text Unique Line H
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineI:arraystr
 * @text Unique Line I
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineJ:arraystr
 * @text Unique Line J
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineK:arraystr
 * @text Unique Line K
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineL:arraystr
 * @text Unique Line L
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineM:arraystr
 * @text Unique Line M
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineN:arraystr
 * @text Unique Line N
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineO:arraystr
 * @text Unique Line O
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineP:arraystr
 * @text Unique Line P
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineQ:arraystr
 * @text Unique Line Q
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineR:arraystr
 * @text Unique Line R
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineS:arraystr
 * @text Unique Line S
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineT:arraystr
 * @text Unique Line T
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineU:arraystr
 * @text Unique Line U
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineV:arraystr
 * @text Unique Line V
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineW:arraystr
 * @text Unique Line W
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineX:arraystr
 * @text Unique Line X
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineY:arraystr
 * @text Unique Line Y
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineZ:arraystr
 * @text Unique Line Z
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Battle Voices' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Battle Voices
 *
 */
/* ----------------------------------------------------------------------------
 * Voice Language Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VoiceLang:
 *
 * @param Bengali:str
 * @text Bengali
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Chinese:str
 * @text Chinese
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Czech:str
 * @text Czech
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Danish:str
 * @text Danish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Dutch:str
 * @text Dutch
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param English:str
 * @text English
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Finnish:str
 * @text Finnish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param French:str
 * @text French
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param German:str
 * @text German
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Greek:str
 * @text Greek
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Hindi:str
 * @text Hindi
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Italian:str
 * @text Italian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Japanese:str
 * @text Japanese
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Korean:str
 * @text Korean
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Polish:str
 * @text Polish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Romanian:str
 * @text Romanian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Russian:str
 * @text Russian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Slovak:str
 * @text Slovak
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Spanish:str
 * @text Spanish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Swedish:str
 * @text Swedish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Tamil:str
 * @text Tamil
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Thai:str
 * @text Thai
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Turkish:str
 * @text Turkish
 * @desc What voice set is played with this voice language?
 * @default
 *
 */
//=============================================================================

const _0x1223bd=_0x16c5;(function(_0x3ccdfc,_0x267faa){const _0x39a6bc=_0x16c5,_0x39d98d=_0x3ccdfc();while(!![]){try{const _0x11f245=-parseInt(_0x39a6bc(0x1b6))/0x1*(-parseInt(_0x39a6bc(0x1ff))/0x2)+parseInt(_0x39a6bc(0x127))/0x3*(parseInt(_0x39a6bc(0xf8))/0x4)+parseInt(_0x39a6bc(0x1b2))/0x5+-parseInt(_0x39a6bc(0x1fd))/0x6+-parseInt(_0x39a6bc(0x140))/0x7+-parseInt(_0x39a6bc(0x10a))/0x8*(parseInt(_0x39a6bc(0x14e))/0x9)+-parseInt(_0x39a6bc(0x178))/0xa;if(_0x11f245===_0x267faa)break;else _0x39d98d['push'](_0x39d98d['shift']());}catch(_0x49198a){_0x39d98d['push'](_0x39d98d['shift']());}}}(_0x10fc,0xd0361));var label=_0x1223bd(0x203),tier=tier||0x0,dependencies=[_0x1223bd(0x17c),_0x1223bd(0x1dc)],pluginData=$plugins[_0x1223bd(0x187)](function(_0x2173cf){const _0x5eb63a=_0x1223bd;return _0x2173cf[_0x5eb63a(0x1c0)]&&_0x2173cf[_0x5eb63a(0x154)][_0x5eb63a(0x16a)]('['+label+']');})[0x0];VisuMZ[label][_0x1223bd(0x1d0)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x1223bd(0x1bb)]=function(_0x48b44b,_0xc3d680){const _0xed57e4=_0x1223bd;for(const _0x3ac955 in _0xc3d680){if(_0x3ac955[_0xed57e4(0x10d)](/(.*):(.*)/i)){const _0xbac0b5=String(RegExp['$1']),_0x2fa1ce=String(RegExp['$2'])[_0xed57e4(0x1cd)]()[_0xed57e4(0x137)]();let _0x547343,_0x5e5ae9,_0x5dd28e;switch(_0x2fa1ce){case'NUM':_0x547343=_0xc3d680[_0x3ac955]!==''?Number(_0xc3d680[_0x3ac955]):0x0;break;case'ARRAYNUM':_0x5e5ae9=_0xc3d680[_0x3ac955]!==''?JSON[_0xed57e4(0x1e2)](_0xc3d680[_0x3ac955]):[],_0x547343=_0x5e5ae9['map'](_0x58a259=>Number(_0x58a259));break;case'EVAL':_0x547343=_0xc3d680[_0x3ac955]!==''?eval(_0xc3d680[_0x3ac955]):null;break;case _0xed57e4(0x138):_0x5e5ae9=_0xc3d680[_0x3ac955]!==''?JSON['parse'](_0xc3d680[_0x3ac955]):[],_0x547343=_0x5e5ae9[_0xed57e4(0x1ba)](_0x1c7761=>eval(_0x1c7761));break;case'JSON':_0x547343=_0xc3d680[_0x3ac955]!==''?JSON[_0xed57e4(0x1e2)](_0xc3d680[_0x3ac955]):'';break;case _0xed57e4(0x18d):_0x5e5ae9=_0xc3d680[_0x3ac955]!==''?JSON['parse'](_0xc3d680[_0x3ac955]):[],_0x547343=_0x5e5ae9[_0xed57e4(0x1ba)](_0x21320e=>JSON[_0xed57e4(0x1e2)](_0x21320e));break;case _0xed57e4(0x207):_0x547343=_0xc3d680[_0x3ac955]!==''?new Function(JSON[_0xed57e4(0x1e2)](_0xc3d680[_0x3ac955])):new Function(_0xed57e4(0x1f4));break;case'ARRAYFUNC':_0x5e5ae9=_0xc3d680[_0x3ac955]!==''?JSON[_0xed57e4(0x1e2)](_0xc3d680[_0x3ac955]):[],_0x547343=_0x5e5ae9[_0xed57e4(0x1ba)](_0x3578bb=>new Function(JSON[_0xed57e4(0x1e2)](_0x3578bb)));break;case _0xed57e4(0x1a2):_0x547343=_0xc3d680[_0x3ac955]!==''?String(_0xc3d680[_0x3ac955]):'';break;case'ARRAYSTR':_0x5e5ae9=_0xc3d680[_0x3ac955]!==''?JSON[_0xed57e4(0x1e2)](_0xc3d680[_0x3ac955]):[],_0x547343=_0x5e5ae9['map'](_0x430c9c=>String(_0x430c9c));break;case'STRUCT':_0x5dd28e=_0xc3d680[_0x3ac955]!==''?JSON[_0xed57e4(0x1e2)](_0xc3d680[_0x3ac955]):{},_0x547343=VisuMZ[_0xed57e4(0x1bb)]({},_0x5dd28e);break;case _0xed57e4(0x145):_0x5e5ae9=_0xc3d680[_0x3ac955]!==''?JSON[_0xed57e4(0x1e2)](_0xc3d680[_0x3ac955]):[],_0x547343=_0x5e5ae9[_0xed57e4(0x1ba)](_0x4a98ae=>VisuMZ[_0xed57e4(0x1bb)]({},JSON['parse'](_0x4a98ae)));break;default:continue;}_0x48b44b[_0xbac0b5]=_0x547343;}}return _0x48b44b;},(_0xba5978=>{const _0x4686cb=_0x1223bd,_0xeec08c=_0xba5978[_0x4686cb(0x130)];for(const _0x49b5a5 of dependencies){if(!Imported[_0x49b5a5]){alert(_0x4686cb(0x14b)[_0x4686cb(0x180)](_0xeec08c,_0x49b5a5)),SceneManager[_0x4686cb(0x1ec)]();break;}}const _0x10cd5f=_0xba5978['description'];if(_0x10cd5f[_0x4686cb(0x10d)](/\[Version[ ](.*?)\]/i)){const _0x508386=Number(RegExp['$1']);_0x508386!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0xeec08c,_0x508386)),SceneManager[_0x4686cb(0x1ec)]());}if(_0x10cd5f[_0x4686cb(0x10d)](/\[Tier[ ](\d+)\]/i)){const _0x3d9be4=Number(RegExp['$1']);_0x3d9be4<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x4686cb(0x180)](_0xeec08c,_0x3d9be4,tier)),SceneManager[_0x4686cb(0x1ec)]()):tier=Math[_0x4686cb(0xef)](_0x3d9be4,tier);}VisuMZ[_0x4686cb(0x1bb)](VisuMZ[label]['Settings'],_0xba5978[_0x4686cb(0x164)]);})(pluginData);function _0x16c5(_0x49894c,_0x42661e){const _0x10fcec=_0x10fc();return _0x16c5=function(_0x16c58f,_0x40f05b){_0x16c58f=_0x16c58f-0xeb;let _0x20683a=_0x10fcec[_0x16c58f];return _0x20683a;},_0x16c5(_0x49894c,_0x42661e);}if(VisuMZ[_0x1223bd(0x1bf)][_0x1223bd(0x192)]<1.77){let text='';text+=_0x1223bd(0x1c3),text+=_0x1223bd(0x147),alert(text),SceneManager[_0x1223bd(0x1ec)]();}function _0x10fc(){const _0x561f26=['isForFriend','SpellNames','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','getSkillHaveVoiceItemName','changeBattleVoicePan','doesSkillHaveVoiceItemName','clearBattleVoice','_battleVoice','_getSkillHaveVoiceChantLine','enemy','BATTLE_VOICES','isItem','toUpperCase','AllowSelfResponse','BattleInput','Settings','defeatType','isGuard','isPhysical','VoiceVolume','remove','Game_Battler_performReflection','BuffRemove','critical','makeData','getVoiceSet','ActionResultSubstitute','VisuMZ_1_BattleCore','setupBattleVoice','performCollapse','canPlayDifferentLanguageBattleVoices','Game_Battler_performAction','performActionStartVoice','parse','VisuMZ_1_ElementStatusCore','BattleEscapeSuccess','HpChange','apply','Medium','addStateVoice','isPlaying','getSkillHaveVoiceSpellName','log','exit','initBattleVoicesMute','_getSkillHaveVoiceActionName','ActionName','getTraitSetKeys','mhp','removeBuff','_getTraitVoiceSets','return\x200','_getSkillHaveVoiceSkillName','Window_ActorCommand_setup','Game_Battler_performMagicEvasion','Override','playBattleVoice','onEscapeSuccess','Scene_Boot_onDatabaseLoaded','DamageNone','4219572JrXont','onDatabaseLoaded','132FChggj','removeBuffsAuto','find','changeBattleVoiceVolume','BattleVoices','initialize','playSe','_subject','FUNC','Add','performCounter','changeBattleVoiceLangSet','ActorChangeBattleVoiceSet','max','performActionStart','Options','volume','BattleManager_startBattle','actor','PerformActionBasicAttack','setup','BattleVictory','836mRPohM','randomInt','SpellName','isStateAffected','performActionVoice','push','ActionResultMagicEvasion','aliveMembers','Item','applyGameActionVoice','getSkillHaveVoiceChantLine','State','MuteAllVoices','ConfigManager_makeData','BuffAdd','performMagicEvasion','startBattle','BattleEscapeFailure','56mFxrrO','addBuff','BasicAttack','match','Game_Action_apply','prototype','When\x20Collapse','Game_Battler_removeBuff','isAttack','ActionNames','removeStateVoice','setupBattleVoiceForTraits','Game_Battler_performMiss','UniqueLines','custom','Game_System_initialize','ConfigManager_applyData','pan','readFlag','VoiceSets','setHp','ItemName','note','Language','battlerKey','voiceLocale','missed','getTraitVoiceSets','result','23019wSAymM','doesSkillHaveVoiceChantLine','SkillName','DefeatType','DamageHeavy','Heavy','DelayVictoryMS','ChantLine','BattleStart','name','Remove','Game_Enemy_performAttack','getBattleVoiceData','Game_Battler_addBuff','clamp','Battle\x20Voices','trim','ARRAYEVAL','UNTITLED','Game_Battler_performCollapse','0\x20HP','performEvasion','addCommand','length','item','4455675qHLvDI','_battleVoiceFrameCount','setBattleVoicesMute','battleVoice','VisuMZ_2_VoiceActControl','ARRAYSTRUCT','VoiceSet','in\x20order\x20for\x20VisuMZ_3_BattleVoices\x20to\x20work.','Physical','ActionResultReflection','Game_Actor_performAttack','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','performReflection','_voiceBuffers','325593hpqDWt','initMembers','hasBattleVoiceKey','Game_Battler_performCounter','addBattleVoicesCommand','isCertainHit','description','performSubstitute','BasicGuard','Name','set','isVisuMzLocalizationEnabled','changeBattleVoiceSet','removeState','action','SubElement','PerformActionDefeatFoe','languages','PerformActionCritical','Pan','performMiss','doesSkillHaveVoiceSkillName','parameters','Game_Battler_initMembers','Window_Message_registerLastPlayedVoiceSound','_getSkillHaveVoiceSpellName','VoicePan','AddOption','includes','Game_Battler_addState','call','registerCommand','updateVoiceParameters','_getSkillHaveVoiceItemName','Positive','_phase','_hp','Skill','isSkill','performHpChangeVoice','isSceneBattle','allowSelfResponseVoice','8385870mlSYqM','LangVoiceSet','Death','process_VisuMZ_BattleVoices','VisuMZ_0_CoreEngine','BattleManager_onEscapeFailure','_defeatedTargetsVoiced','playVoiceLine','format','areBattleVoicesMute','Light','Window_Options_addGeneralOptions','getSkillHaveVoiceActionName','AudioManager_updateVoiceParameters','frameCount','filter','_muteBattleVoices','applyLatestBufferBattlerKey','onEscapeFailure','Game_Battler_removeState','Game_Battler_performActionStart','ARRAYJSON','battleVoices','Scene_Options_maxCommands','ChantLines','_expireBuffsAuto','version','Game_Battler_performEvasion','removeStatesAuto','getSkillHaveVoiceSkillName','isForEveryone','isMagical','Guard','addDebuff','Magical','doesSkillHaveVoiceActionName','_seBuffers','isActor','VisuMZ_1_SkillsStatesCore','performAttack','maxCommands','pitch','STR','SkillNames','Ally','performActionStartBaseVoice','ActionResultCounter','addGeneralOptions','changeBattleVoicePitch','Enemy','_currentActor','Game_Battler_removeBuffsAuto','ActionResultEvasion','applyData','_expireStatesAuto','bind','traitSet','processVictory','289245fFMAOp','Game_Battler_removeStatesAuto','Recover','Damage','24590abliwd','Negative','Game_BattlerBase_setHp','doesSkillHaveVoiceSpellName','map','ConvertParams','CertainHit','RegExp','Game_Battler_performSubstitute','BattleCore','status'];_0x10fc=function(){return _0x561f26;};return _0x10fc();}PluginManager[_0x1223bd(0x16d)](pluginData['name'],_0x1223bd(0xee),_0x23379a=>{const _0x59b64c=_0x1223bd;VisuMZ[_0x59b64c(0x1bb)](_0x23379a,_0x23379a);const _0x4c01b9=_0x23379a['ActorID']||0x1,_0x39d2e7=_0x23379a[_0x59b64c(0x146)]||'',_0x523d0c=Number(_0x23379a['volume']||0x0)[_0x59b64c(0x135)](0x0,0x64),_0x57e2ca=Math[_0x59b64c(0xef)](Number(_0x23379a[_0x59b64c(0x1a1)]||0x0),0x0),_0x52c5ff=Number(_0x23379a[_0x59b64c(0x161)]),_0x765330=$gameActors[_0x59b64c(0xf4)](_0x4c01b9);_0x765330&&(_0x765330[_0x59b64c(0x15a)](_0x39d2e7),_0x765330[_0x59b64c(0x202)](_0x523d0c),_0x765330[_0x59b64c(0x1a8)](_0x57e2ca),_0x765330['changeBattleVoicePan'](_0x52c5ff));}),PluginManager[_0x1223bd(0x16d)](pluginData['name'],'ActorChangeBattleVoiceSetLang',_0x25ac37=>{const _0x8bc369=_0x1223bd;VisuMZ[_0x8bc369(0x1bb)](_0x25ac37,_0x25ac37);const _0x786417=_0x25ac37['ActorID']||0x1,_0x392350=_0x25ac37[_0x8bc369(0x146)]||'',_0x8270b8=Number(_0x25ac37[_0x8bc369(0xf2)]||0x0)[_0x8bc369(0x135)](0x0,0x64),_0x30c504=Math[_0x8bc369(0xef)](Number(_0x25ac37[_0x8bc369(0x1a1)]||0x0),0x0),_0x1d4929=Number(_0x25ac37[_0x8bc369(0x161)]),_0x3ea294={},_0x3dc455=_0x25ac37[_0x8bc369(0x121)]||{};for(const _0x1366ac in _0x3dc455){_0x3ea294[_0x1366ac]=_0x3dc455[_0x1366ac];}const _0x35762e=$gameActors[_0x8bc369(0xf4)](_0x786417);_0x35762e&&(_0x35762e[_0x8bc369(0x15a)](_0x392350),_0x35762e[_0x8bc369(0x202)](_0x8270b8),_0x35762e[_0x8bc369(0x1a8)](_0x30c504),_0x35762e[_0x8bc369(0x1c5)](_0x1d4929),_0x35762e[_0x8bc369(0xed)](_0x3ea294));}),PluginManager[_0x1223bd(0x16d)](pluginData[_0x1223bd(0x130)],_0x1223bd(0x104),_0x2600ad=>{const _0x147373=_0x1223bd;VisuMZ[_0x147373(0x1bb)](_0x2600ad,_0x2600ad);const _0x110925=_0x2600ad['Mute'];$gameSystem['setBattleVoicesMute'](_0x110925);}),VisuMZ[_0x1223bd(0x203)]['RegExp']={'VoiceSet':/<VOICE(?:|SET| SET):[ ](.*?)>/i,'LangVoiceSet':/<(?:LANG|LANGUAGE)[ ](.*?)[ ]VOICE(?:|SET| SET):[ ](.*?)>/gi,'VoiceVolume':/<VOICE(?:|SET| SET) VOLUME:[ ](\d+)>/i,'VoicePitch':/<VOICE(?:|SET| SET) PITCH:[ ](\d+)>/i,'VoicePan':/<VOICE(?:|SET| SET) PAN:[ ](.*?)>/i,'ActionName':/<VOICE ACTION(?:|NAME| NAME):[ ](.*?)>/i,'ChantLine':/<VOICE CHANT(?:|LINE| LINE):[ ](.*?)>/i,'ItemName':/<VOICE ITEM(?:|NAME| NAME):[ ](.*?)>/i,'SkillName':/<VOICE SKILL(?:|NAME| NAME):[ ](.*?)>/i,'SpellName':/<VOICE SPELL(?:|NAME| NAME):[ ](.*?)>/i,'TraitVoiceSet':/<TRAIT VOICE(?:|SET| SET)(?:|S)>\s*([\s\S]*?)\s*<\/TRAIT VOICE(?:|SET| SET)(?:|S)>/i},VisuMZ[_0x1223bd(0x203)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x1223bd(0x10f)][_0x1223bd(0x1fe)],Scene_Boot[_0x1223bd(0x10f)][_0x1223bd(0x1fe)]=function(){const _0x52c2ec=_0x1223bd;VisuMZ[_0x52c2ec(0x203)][_0x52c2ec(0x1fb)][_0x52c2ec(0x16c)](this),this[_0x52c2ec(0x17b)]();},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x146)]={},Scene_Boot[_0x1223bd(0x10f)][_0x1223bd(0x17b)]=function(){const _0x26ac65=_0x1223bd,_0x341f3b=VisuMZ[_0x26ac65(0x203)][_0x26ac65(0x1d0)],_0x7e9daf=[_0x26ac65(0x11d),_0x26ac65(0x113),_0x26ac65(0x190),'ItemNames',_0x26ac65(0x1a3),_0x26ac65(0x1c2),_0x26ac65(0x117)];for(const _0x3bb019 of _0x7e9daf){for(const _0x1e590a of _0x341f3b[_0x3bb019]){const _0x12e67c=(_0x1e590a[_0x26ac65(0x157)]||'')['toUpperCase']()['trim']();if(_0x12e67c[_0x26ac65(0x13e)]<=0x0)continue;if(_0x12e67c===_0x26ac65(0x139))continue;VisuMZ[_0x26ac65(0x203)]['VoiceSet'][_0x12e67c]=VisuMZ[_0x26ac65(0x203)]['VoiceSet'][_0x12e67c]||{};for(const _0x1e4dd2 in _0x1e590a){if(_0x1e4dd2===_0x26ac65(0x157))continue;VisuMZ[_0x26ac65(0x203)]['VoiceSet'][_0x12e67c][_0x1e4dd2]=_0x1e590a[_0x1e4dd2];}}}},DataManager['getSkillHaveVoiceActionName']=function(_0x1317f2){const _0x5bc982=_0x1223bd;if(!_0x1317f2)return'';const _0x5f5a19=_0x1317f2['id'];this[_0x5bc982(0x1ee)]=this[_0x5bc982(0x1ee)]||{};if(this[_0x5bc982(0x1ee)][_0x5f5a19]!==undefined)return this['_getSkillHaveVoiceActionName'][_0x5f5a19];let _0x5eefc9='';const _0x47d5f3=VisuMZ[_0x5bc982(0x203)][_0x5bc982(0x1bd)],_0x13b053=_0x1317f2['note']||'';return _0x13b053[_0x5bc982(0x10d)](_0x47d5f3['ActionName'])&&(_0x5eefc9=_0x5bc982(0x1ef)+String(RegExp['$1'])[_0x5bc982(0x137)]()),this[_0x5bc982(0x1ee)][_0x5f5a19]=_0x5eefc9,this[_0x5bc982(0x1ee)][_0x5f5a19];},DataManager[_0x1223bd(0x19b)]=function(_0xf9716b){const _0x406659=_0x1223bd,_0x3dc77b=this[_0x406659(0x184)](_0xf9716b);return _0x3dc77b[_0x406659(0x13e)]>0x0;},DataManager[_0x1223bd(0x102)]=function(_0x464394){const _0x3af7c=_0x1223bd;if(!_0x464394)return'';const _0x44946b=_0x464394['id'];this['_getSkillHaveVoiceChantLine']=this[_0x3af7c(0x1c9)]||{};if(this['_getSkillHaveVoiceChantLine'][_0x44946b]!==undefined)return this[_0x3af7c(0x1c9)][_0x44946b];let _0x4a81cd='';const _0x1e42c1=VisuMZ[_0x3af7c(0x203)][_0x3af7c(0x1bd)],_0x54e302=_0x464394['note']||'';return _0x54e302[_0x3af7c(0x10d)](_0x1e42c1[_0x3af7c(0x12e)])&&(_0x4a81cd='ChantLine'+String(RegExp['$1'])[_0x3af7c(0x137)]()),this[_0x3af7c(0x1c9)][_0x44946b]=_0x4a81cd,this[_0x3af7c(0x1c9)][_0x44946b];},DataManager[_0x1223bd(0x128)]=function(_0x451bcf){const _0x4a546f=_0x1223bd,_0x877180=this[_0x4a546f(0x102)](_0x451bcf);return _0x877180[_0x4a546f(0x13e)]>0x0;},DataManager[_0x1223bd(0x1c4)]=function(_0x30e75b){const _0x32dd8c=_0x1223bd;if(!_0x30e75b)return'';const _0x1ab4f5=_0x30e75b['id'];this['_getSkillHaveVoiceItemName']=this['_getSkillHaveVoiceItemName']||{};if(this[_0x32dd8c(0x16f)][_0x1ab4f5]!==undefined)return this[_0x32dd8c(0x16f)][_0x1ab4f5];let _0x1d717a='';const _0x1568ad=VisuMZ[_0x32dd8c(0x203)][_0x32dd8c(0x1bd)],_0xe94c1a=_0x30e75b[_0x32dd8c(0x120)]||'';return _0xe94c1a[_0x32dd8c(0x10d)](_0x1568ad['ItemName'])&&(_0x1d717a=_0x32dd8c(0x11f)+String(RegExp['$1'])[_0x32dd8c(0x137)]()),this[_0x32dd8c(0x16f)][_0x1ab4f5]=_0x1d717a,this[_0x32dd8c(0x16f)][_0x1ab4f5];},DataManager[_0x1223bd(0x1c6)]=function(_0x4762ad){const _0x55b96e=_0x1223bd,_0x43799e=this[_0x55b96e(0x1c4)](_0x4762ad);return _0x43799e[_0x55b96e(0x13e)]>0x0;},DataManager[_0x1223bd(0x195)]=function(_0x4fef73){const _0x24e714=_0x1223bd;if(!_0x4fef73)return'';const _0xf75283=_0x4fef73['id'];this[_0x24e714(0x1f5)]=this[_0x24e714(0x1f5)]||{};if(this[_0x24e714(0x1f5)][_0xf75283]!==undefined)return this['_getSkillHaveVoiceSkillName'][_0xf75283];let _0x55a073='';const _0x4f0e62=VisuMZ['BattleVoices'][_0x24e714(0x1bd)],_0x59b18f=_0x4fef73['note']||'';return _0x59b18f[_0x24e714(0x10d)](_0x4f0e62[_0x24e714(0x129)])&&(_0x55a073=_0x24e714(0x129)+String(RegExp['$1'])['trim']()),this[_0x24e714(0x1f5)][_0xf75283]=_0x55a073,this[_0x24e714(0x1f5)][_0xf75283];},DataManager[_0x1223bd(0x163)]=function(_0x560d73){const _0x3c7ba4=_0x1223bd,_0x92545c=this[_0x3c7ba4(0x195)](_0x560d73);return _0x92545c[_0x3c7ba4(0x13e)]>0x0;},DataManager[_0x1223bd(0x1ea)]=function(_0x5e8ebe){const _0x21706b=_0x1223bd;if(!_0x5e8ebe)return'';const _0x63f6a2=_0x5e8ebe['id'];this[_0x21706b(0x167)]=this[_0x21706b(0x167)]||{};if(this[_0x21706b(0x167)][_0x63f6a2]!==undefined)return this[_0x21706b(0x167)][_0x63f6a2];let _0x47f1b1='';const _0x4b70cc=VisuMZ[_0x21706b(0x203)]['RegExp'],_0x5667ac=_0x5e8ebe['note']||'';return _0x5667ac[_0x21706b(0x10d)](_0x4b70cc[_0x21706b(0xfa)])&&(_0x47f1b1=_0x21706b(0xfa)+String(RegExp['$1'])[_0x21706b(0x137)]()),this['_getSkillHaveVoiceSpellName'][_0x63f6a2]=_0x47f1b1,this['_getSkillHaveVoiceSpellName'][_0x63f6a2];},DataManager[_0x1223bd(0x1b9)]=function(_0x374400){const _0x57b51=_0x1223bd,_0x388da4=this['getSkillHaveVoiceSpellName'](_0x374400);return _0x388da4[_0x57b51(0x13e)]>0x0;},DataManager[_0x1223bd(0x125)]=function(_0xf67161){const _0x959314=_0x1223bd;if(!_0xf67161)return{};const _0x1ced96=_0xf67161['id'];this[_0x959314(0x1f3)]=this['_getTraitVoiceSets']||{};if(this[_0x959314(0x1f3)][_0x1ced96]!==undefined)return this[_0x959314(0x1f3)][_0x1ced96];const _0xa5efe5={},_0x4f18d3=VisuMZ[_0x959314(0x203)]['RegExp'],_0x4c8c34=_0xf67161['note']||'';if(_0x4c8c34['match'](_0x4f18d3['TraitVoiceSet'])){const _0x4259db=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x55ffa0 of _0x4259db){if(_0x55ffa0[_0x959314(0x10d)](/(.*)[ ]SET:[ ](.*)/i)){const _0x1dcb38=String(RegExp['$1'])[_0x959314(0x1cd)]()[_0x959314(0x137)](),_0x14be57=String(RegExp['$2']);_0xa5efe5[_0x1dcb38]=_0xa5efe5[_0x1dcb38]||{},_0xa5efe5[_0x1dcb38][_0x959314(0x158)]=_0x14be57;}if(_0x55ffa0[_0x959314(0x10d)](/(.*)[ ]VOLUME:[ ](.*)/i)){const _0x35ea29=String(RegExp['$1'])['toUpperCase']()[_0x959314(0x137)](),_0x2f4032=Number(RegExp['$2']||0x0)[_0x959314(0x135)](0x0,0x64);_0xa5efe5[_0x35ea29]=_0xa5efe5[_0x35ea29]||{},_0xa5efe5[_0x35ea29][_0x959314(0xf2)]=_0x2f4032;}if(_0x55ffa0[_0x959314(0x10d)](/(.*)[ ]PITCH:[ ](.*)/i)){const _0x571cc6=String(RegExp['$1'])[_0x959314(0x1cd)]()['trim'](),_0xcd48f4=Math[_0x959314(0xef)](Number(RegExp['$2']||0x0),0x0);_0xa5efe5[_0x571cc6]=_0xa5efe5[_0x571cc6]||{},_0xa5efe5[_0x571cc6][_0x959314(0x1a1)]=_0xcd48f4;}if(_0x55ffa0[_0x959314(0x10d)](/(.*)[ ]PAN:[ ](.*)/i)){const _0x9225aa=String(RegExp['$1'])[_0x959314(0x1cd)]()[_0x959314(0x137)](),_0x2185e4=Number(RegExp['$2']||0x0);_0xa5efe5[_0x9225aa]=_0xa5efe5[_0x9225aa]||{},_0xa5efe5[_0x9225aa]['pan']=_0x2185e4;}}}return this[_0x959314(0x1f3)][_0x1ced96]=_0xa5efe5,this[_0x959314(0x1f3)][_0x1ced96];},ConfigManager[_0x1223bd(0x18e)]=!![],VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x105)]=ConfigManager[_0x1223bd(0x1d9)],ConfigManager[_0x1223bd(0x1d9)]=function(){const _0x2e78a7=_0x1223bd,_0x154cbc=VisuMZ[_0x2e78a7(0x203)][_0x2e78a7(0x105)][_0x2e78a7(0x16c)](this);return _0x154cbc[_0x2e78a7(0x18e)]=this['battleVoices'],_0x154cbc;},VisuMZ['BattleVoices']['ConfigManager_applyData']=ConfigManager[_0x1223bd(0x1ad)],ConfigManager[_0x1223bd(0x1ad)]=function(_0x4e608f){const _0x3e0b21=_0x1223bd;VisuMZ[_0x3e0b21(0x203)][_0x3e0b21(0x11a)][_0x3e0b21(0x16c)](this,_0x4e608f),this[_0x3e0b21(0x11c)](_0x4e608f,_0x3e0b21(0x18e),!![]),_0x3e0b21(0x18e)in _0x4e608f?this['battleVoices']=_0x4e608f[_0x3e0b21(0x18e)]:this[_0x3e0b21(0x18e)]=!![];},TextManager[_0x1223bd(0x18e)]=VisuMZ[_0x1223bd(0x203)]['Settings']['Options'][_0x1223bd(0x157)]??_0x1223bd(0x136),AudioManager[_0x1223bd(0x1cb)]={'defeatType':VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x1d0)][_0x1223bd(0x12a)]??_0x1223bd(0x13b)},AudioManager[_0x1223bd(0x1da)]=function(_0x5043a4){const _0x1ba895=_0x1223bd;if(!_0x5043a4)return{};return VisuMZ[_0x1ba895(0x203)][_0x1ba895(0x146)][_0x5043a4[_0x1ba895(0x1cd)]()[_0x1ba895(0x137)]()];},AudioManager[_0x1223bd(0x1c7)]=function(_0x5ad3ae){const _0x23958b=_0x1223bd;if(!_0x5ad3ae)return;const _0x5b85d6=Imported[_0x23958b(0x144)]?this[_0x23958b(0x14d)]:this[_0x23958b(0x19c)],_0x35541f=_0x5b85d6[_0x23958b(0x187)](_0xe13356=>_0xe13356[_0x23958b(0x122)]===_0x5ad3ae['battlerKey']());for(const _0x5c425c of _0x35541f){_0x5c425c['destroy'](),_0x5b85d6[_0x23958b(0x1d5)](_0x5c425c);}},AudioManager[_0x1223bd(0x1f9)]=function(_0x48fd84,_0x392060){const _0xdad863=_0x1223bd;if(!ConfigManager['battleVoices'])return;if(!_0x48fd84)return;if(!_0x392060)return;if($gameSystem[_0xdad863(0x181)]())return;this['_battleVoiceFrameCount']=this[_0xdad863(0x141)]||{};const _0x1ac069=_0x392060[_0xdad863(0x122)]();if(this['_battleVoiceFrameCount'][_0x1ac069]===Graphics['frameCount'])return;this[_0xdad863(0x141)][_0x1ac069]=Graphics[_0xdad863(0x186)],VisuMZ['BattleVoices'][_0xdad863(0x1d0)][_0xdad863(0x1f8)]&&AudioManager[_0xdad863(0x1c7)](_0x392060),Imported['VisuMZ_2_VoiceActControl']?(_0x48fd84['battleVoice']=!![],this[_0xdad863(0x17f)](_0x48fd84)):this[_0xdad863(0x205)](_0x48fd84),this[_0xdad863(0x189)](_0x48fd84,_0x392060);},VisuMZ['BattleVoices'][_0x1223bd(0x185)]=AudioManager[_0x1223bd(0x16e)],AudioManager['updateVoiceParameters']=function(_0x4e7fc6,_0x412644){const _0x4360f9=_0x1223bd;VisuMZ['BattleVoices']['AudioManager_updateVoiceParameters'][_0x4360f9(0x16c)](this,_0x4e7fc6,_0x412644),_0x412644&&_0x412644[_0x4360f9(0x143)]&&(_0x4e7fc6[_0x4360f9(0x1c8)]=!![]);},AudioManager[_0x1223bd(0x189)]=function(_0x3f5bfe,_0x55e745){const _0x5bd299=_0x1223bd;if(!_0x55e745)return;const _0x17af4f=Imported[_0x5bd299(0x144)]?this['_voiceBuffers']:this['_seBuffers'],_0x12d92d=_0x17af4f[_0x5bd299(0x201)](_0x3cba86=>_0x3cba86[_0x5bd299(0x130)]===_0x3f5bfe[_0x5bd299(0x130)]&&_0x3cba86['frameCount']===Graphics[_0x5bd299(0x186)]);if(!_0x12d92d)return;_0x12d92d['battlerKey']=_0x55e745[_0x5bd299(0x122)]();},VisuMZ[_0x1223bd(0x203)]['BattleManager_startBattle']=BattleManager[_0x1223bd(0x108)],BattleManager[_0x1223bd(0x108)]=function(){const _0x256ed8=_0x1223bd;VisuMZ[_0x256ed8(0x203)][_0x256ed8(0xf3)][_0x256ed8(0x16c)](this),$gameParty[_0x256ed8(0x1f9)](_0x256ed8(0x12f));},VisuMZ['BattleVoices']['BattleManager_processVictory']=BattleManager[_0x1223bd(0x1b1)],BattleManager[_0x1223bd(0x1b1)]=function(){const _0x3902d8=_0x1223bd;VisuMZ['BattleVoices']['BattleManager_processVictory'][_0x3902d8(0x16c)](this);if(Imported['VisuMZ_3_VictoryAftermath'])return;$gameParty[_0x3902d8(0x1f9)](_0x3902d8(0xf7));},VisuMZ['BattleVoices']['BattleManager_onEscapeSuccess']=BattleManager[_0x1223bd(0x1fa)],BattleManager[_0x1223bd(0x1fa)]=function(){const _0x3b4a13=_0x1223bd;VisuMZ[_0x3b4a13(0x203)]['BattleManager_onEscapeSuccess'][_0x3b4a13(0x16c)](this),this['_currentActor']?this[_0x3b4a13(0x1aa)]['playBattleVoice']('BattleEscapeSuccess'):$gameParty['playBattleVoice'](_0x3b4a13(0x1e4));},VisuMZ[_0x1223bd(0x203)]['BattleManager_onEscapeFailure']=BattleManager[_0x1223bd(0x18a)],BattleManager[_0x1223bd(0x18a)]=function(){const _0x40459b=_0x1223bd;VisuMZ['BattleVoices'][_0x40459b(0x17d)][_0x40459b(0x16c)](this),this[_0x40459b(0x1aa)]?this[_0x40459b(0x1aa)][_0x40459b(0x1f9)](_0x40459b(0x109)):$gameParty[_0x40459b(0x1f9)](_0x40459b(0x109));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x1f6)]=Window_ActorCommand[_0x1223bd(0x10f)][_0x1223bd(0xf6)],Window_ActorCommand[_0x1223bd(0x10f)][_0x1223bd(0xf6)]=function(_0x1d0e60){const _0x5a478b=_0x1223bd;VisuMZ[_0x5a478b(0x203)][_0x5a478b(0x1f6)][_0x5a478b(0x16c)](this,_0x1d0e60);if($gameTroop[_0x5a478b(0xff)]()[_0x5a478b(0x13e)]<=0x0)return;_0x1d0e60&&_0x1d0e60===BattleManager['_currentActor']&&_0x1d0e60['isInputting']()&&_0x1d0e60[_0x5a478b(0x1f9)](_0x5a478b(0x1cf));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x119)]=Game_System[_0x1223bd(0x10f)]['initialize'],Game_System['prototype'][_0x1223bd(0x204)]=function(){const _0x31afe9=_0x1223bd;VisuMZ['BattleVoices'][_0x31afe9(0x119)][_0x31afe9(0x16c)](this),this[_0x31afe9(0x1ed)]();},Game_System[_0x1223bd(0x10f)]['initBattleVoicesMute']=function(){const _0x257ff1=_0x1223bd;this[_0x257ff1(0x188)]=![];},Game_System[_0x1223bd(0x10f)][_0x1223bd(0x142)]=function(_0x35aa52){const _0x48a961=_0x1223bd;if(this['_muteBattleVoices']===undefined)this[_0x48a961(0x1ed)]();this[_0x48a961(0x188)]=_0x35aa52;},Game_System['prototype'][_0x1223bd(0x181)]=function(){const _0x262d6c=_0x1223bd;if(this[_0x262d6c(0x188)]===undefined)this[_0x262d6c(0x1ed)]();return this[_0x262d6c(0x188)];},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x10e)]=Game_Action[_0x1223bd(0x10f)][_0x1223bd(0x1e6)],Game_Action[_0x1223bd(0x10f)][_0x1223bd(0x1e6)]=function(_0x3b6928){const _0xa0d6a7=_0x1223bd;VisuMZ['BattleVoices'][_0xa0d6a7(0x10e)][_0xa0d6a7(0x16c)](this,_0x3b6928);if(!SceneManager[_0xa0d6a7(0x176)]())return;if(!BattleManager[_0xa0d6a7(0x206)])return;if(!_0x3b6928)return;this['subject']()[_0xa0d6a7(0x101)](this,_0x3b6928);},Game_BattlerBase['prototype'][_0x1223bd(0x1dd)]=function(){const _0x35745f=_0x1223bd,_0x45655b=VisuMZ['BattleVoices'][_0x35745f(0x1d0)],_0x5263ef=VisuMZ[_0x35745f(0x203)][_0x35745f(0x1bd)],_0x4a4076=this[_0x35745f(0x19d)]()?this[_0x35745f(0xf4)]():this[_0x35745f(0x1ca)](),_0x533942=_0x4a4076[_0x35745f(0x120)]||'';this['_battleVoice']={'set':'','volume':_0x45655b[_0x35745f(0xf2)]??0x64,'pitch':_0x45655b['pitch']??0x64,'pan':_0x45655b[_0x35745f(0x11b)]??0x0};_0x533942[_0x35745f(0x10d)](_0x5263ef[_0x35745f(0x146)])&&(this[_0x35745f(0x1c8)][_0x35745f(0x158)]=String(RegExp['$1'])[_0x35745f(0x137)]());_0x533942[_0x35745f(0x10d)](_0x5263ef[_0x35745f(0x1d4)])&&(this[_0x35745f(0x1c8)][_0x35745f(0xf2)]=(Number(RegExp['$1'])||0x0)[_0x35745f(0x135)](0x0,0x64));_0x533942[_0x35745f(0x10d)](_0x5263ef['VoicePitch'])&&(this[_0x35745f(0x1c8)]['pitch']=Math['max'](Number(RegExp['$1'])||0x0,0x0));_0x533942[_0x35745f(0x10d)](_0x5263ef[_0x35745f(0x168)])&&(this[_0x35745f(0x1c8)][_0x35745f(0x11b)]=Number(RegExp['$1'])||0x0);const _0x404927=_0x533942[_0x35745f(0x10d)](_0x5263ef[_0x35745f(0x179)]);if(_0x404927){this[_0x35745f(0x1c8)][_0x35745f(0x15f)]={};for(const _0x38a0c3 of _0x404927){_0x38a0c3[_0x35745f(0x10d)](_0x5263ef[_0x35745f(0x179)]);const _0x5ba9c9=String(RegExp['$1'])[_0x35745f(0x137)](),_0x9a0d21=String(RegExp['$2'])['trim']();this[_0x35745f(0x1c8)][_0x35745f(0x15f)][_0x5ba9c9]=_0x9a0d21;}}},VisuMZ[_0x1223bd(0x203)]['Game_Actor_setup']=Game_Actor[_0x1223bd(0x10f)][_0x1223bd(0xf6)],Game_Actor[_0x1223bd(0x10f)][_0x1223bd(0xf6)]=function(_0x118644){const _0x38e32b=_0x1223bd;VisuMZ['BattleVoices']['Game_Actor_setup']['call'](this,_0x118644),this[_0x38e32b(0x1dd)]();},Game_BattlerBase['prototype'][_0x1223bd(0x133)]=function(){const _0x2c95f9=_0x1223bd;if(this[_0x2c95f9(0x1c8)]===undefined)this[_0x2c95f9(0x1dd)]();return this[_0x2c95f9(0x1c8)];},Game_BattlerBase[_0x1223bd(0x10f)][_0x1223bd(0x177)]=function(){const _0x56220e=_0x1223bd;if(BattleManager['_subject']===this){if(!VisuMZ[_0x56220e(0x203)][_0x56220e(0x1d0)][_0x56220e(0x1ce)])return![];}return!![];},Game_Enemy['prototype']['setupBattleVoice']=function(){const _0x324a9f=_0x1223bd;Game_Battler[_0x324a9f(0x10f)][_0x324a9f(0x1dd)][_0x324a9f(0x16c)](this),Imported[_0x324a9f(0x1e3)]&&this[_0x324a9f(0x115)]();},Game_Enemy['prototype'][_0x1223bd(0x115)]=function(){const _0x1968e9=_0x1223bd,_0x33a4e2=this[_0x1968e9(0x1f0)]()[_0x1968e9(0x1d5)](_0x1968e9(0x15d)),_0x4867cf=DataManager['getTraitVoiceSets'](this[_0x1968e9(0x1ca)]());for(const _0x37dd31 of _0x33a4e2){const _0x5b3fe8=this[_0x1968e9(0x1b0)](_0x37dd31)['Name'][_0x1968e9(0x1cd)]()[_0x1968e9(0x137)]();traitData=_0x4867cf[_0x5b3fe8];if(traitData){if(traitData[_0x1968e9(0x158)])this[_0x1968e9(0x1c8)][_0x1968e9(0x158)]=traitData['set']['toUpperCase']()[_0x1968e9(0x137)]();if(traitData['volume'])this[_0x1968e9(0x1c8)]['set']=traitData['volume'];if(traitData[_0x1968e9(0x1a1)])this['_battleVoice']['set']=traitData[_0x1968e9(0x1a1)];if(traitData['pan'])this[_0x1968e9(0x1c8)][_0x1968e9(0x158)]=traitData[_0x1968e9(0x11b)];}}},Game_BattlerBase['prototype'][_0x1223bd(0x15a)]=function(_0x2d9b68){const _0x3e7101=_0x1223bd;if(this[_0x3e7101(0x1c8)]===undefined)this[_0x3e7101(0x1dd)]();this[_0x3e7101(0x1c8)]['set']=_0x2d9b68;},Game_BattlerBase['prototype'][_0x1223bd(0x202)]=function(_0x226f81){const _0xc57feb=_0x1223bd;if(this[_0xc57feb(0x1c8)]===undefined)this['setupBattleVoice']();this['_battleVoice'][_0xc57feb(0xf2)]=_0x226f81[_0xc57feb(0x135)](0x0,0x64);},Game_BattlerBase[_0x1223bd(0x10f)][_0x1223bd(0x1a8)]=function(_0x24b1fb){const _0x451eda=_0x1223bd;if(this['_battleVoice']===undefined)this['setupBattleVoice']();this[_0x451eda(0x1c8)][_0x451eda(0x1a1)]=Math[_0x451eda(0xef)](_0x24b1fb,0x0);},Game_BattlerBase[_0x1223bd(0x10f)][_0x1223bd(0x1c5)]=function(_0x538ff2){const _0x952d6=_0x1223bd;if(this['_battleVoice']===undefined)this[_0x952d6(0x1dd)]();this[_0x952d6(0x1c8)][_0x952d6(0x11b)]=_0x538ff2;},Game_BattlerBase['prototype'][_0x1223bd(0xed)]=function(_0x32646d){const _0x4bc517=_0x1223bd;if(this['_battleVoice']===undefined)this[_0x4bc517(0x1dd)]();this[_0x4bc517(0x1c8)][_0x4bc517(0x15f)]=_0x32646d;},VisuMZ['BattleVoices'][_0x1223bd(0x1b8)]=Game_BattlerBase[_0x1223bd(0x10f)][_0x1223bd(0x11e)],Game_BattlerBase[_0x1223bd(0x10f)][_0x1223bd(0x11e)]=function(_0x48e115){const _0x567882=_0x1223bd,_0x21a040=this[_0x567882(0x172)];VisuMZ['BattleVoices'][_0x567882(0x1b8)][_0x567882(0x16c)](this,_0x48e115);const _0x1a47fe=this[_0x567882(0x172)];this[_0x567882(0x175)](_0x21a040,_0x1a47fe);},AudioManager['BATTLE_VOICE_DEBUG']=![],AudioManager['canPlayDifferentLanguageBattleVoices']=function(){const _0x55ce7e=_0x1223bd;if(!Imported[_0x55ce7e(0x144)])return![];if(!AudioManager['isVisuMzLocalizationEnabled'])return![];if(!AudioManager[_0x55ce7e(0x159)]())return![];return!![];},Game_BattlerBase[_0x1223bd(0x10f)]['playBattleVoice']=function(_0x355f1a){const _0x543a1c=_0x1223bd;if(!ConfigManager['battleVoices'])return;const _0x146197=this[_0x543a1c(0x133)]();let _0x1c79ac=_0x146197['set'];if(AudioManager[_0x543a1c(0x1df)]()){if(_0x146197[_0x543a1c(0x15f)]){const _0x49bbf2=ConfigManager[_0x543a1c(0x123)],_0x18ef55=_0x146197[_0x543a1c(0x15f)][_0x49bbf2];if(_0x18ef55)_0x1c79ac=_0x18ef55;}}if(!_0x1c79ac)return;const _0x5a051c=AudioManager[_0x543a1c(0x1da)](_0x1c79ac);if(!_0x5a051c)return;const _0x1508ff=_0x5a051c[_0x355f1a];if(!_0x1508ff)return;if(_0x1508ff['length']<=0x0)return;const _0x406911=_0x1508ff[Math[_0x543a1c(0xf9)](_0x1508ff[_0x543a1c(0x13e)])],_0x550fd8={'name':_0x406911,'volume':_0x146197['volume'],'pitch':_0x146197[_0x543a1c(0x1a1)],'pan':_0x146197[_0x543a1c(0x11b)]};let _0x4121dc=0x0;[_0x543a1c(0xf7)][_0x543a1c(0x16a)](_0x355f1a)&&(_0x4121dc=VisuMZ['BattleVoices']['Settings'][_0x543a1c(0x12d)]??0x5dc),setTimeout(AudioManager[_0x543a1c(0x1f9)][_0x543a1c(0x1af)](AudioManager,_0x550fd8,this),_0x4121dc),AudioManager['BATTLE_VOICE_DEBUG']&&console[_0x543a1c(0x1eb)]('Battler:\x20%1\x0aKey:\x20%2\x0aFilename:\x20%3'[_0x543a1c(0x180)](this[_0x543a1c(0x130)](),_0x355f1a,_0x550fd8['name']));},Game_BattlerBase[_0x1223bd(0x10f)]['hasBattleVoiceKey']=function(_0x33ea92){const _0x57bf68=_0x1223bd;if(!ConfigManager[_0x57bf68(0x18e)])return![];const _0x48305c=this[_0x57bf68(0x133)]();let _0x53554a=_0x48305c['set'];if(AudioManager[_0x57bf68(0x1df)]()){if(_0x48305c[_0x57bf68(0x15f)]){const _0x5573ca=ConfigManager['voiceLocale'],_0xbadd89=_0x48305c['languages'][_0x5573ca];if(_0xbadd89)_0x53554a=_0xbadd89;}}if(!_0x53554a)return![];const _0x4056e2=AudioManager['getVoiceSet'](_0x53554a);if(!_0x4056e2)return![];const _0x474a72=_0x4056e2[_0x33ea92];return _0x474a72&&_0x474a72[_0x57bf68(0x13e)]>0x0;},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x18c)]=Game_Battler['prototype']['performActionStart'],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0xf0)]=function(_0x290890){const _0x141323=_0x1223bd;VisuMZ['BattleVoices'][_0x141323(0x18c)][_0x141323(0x16c)](this,_0x290890);if(!SceneManager[_0x141323(0x176)]())return;if(!_0x290890)return;this[_0x141323(0x1e1)](_0x290890);},Game_Battler[_0x1223bd(0x10f)]['performActionStartVoice']=function(_0x3c78b0){const _0x41fa03=_0x1223bd;if(DataManager[_0x41fa03(0x19b)](_0x3c78b0[_0x41fa03(0x13f)]())){const _0x2fc8c6=DataManager[_0x41fa03(0x184)](_0x3c78b0['item']());if(this[_0x41fa03(0x150)](_0x2fc8c6)){this['playBattleVoice'](_0x2fc8c6);return;}}if(DataManager['doesSkillHaveVoiceChantLine'](_0x3c78b0['item']())){const _0x2133c5=DataManager[_0x41fa03(0x102)](_0x3c78b0[_0x41fa03(0x13f)]());if(this['hasBattleVoiceKey'](_0x2133c5)){this[_0x41fa03(0x1f9)](_0x2133c5);return;}}if(DataManager['doesSkillHaveVoiceItemName'](_0x3c78b0[_0x41fa03(0x13f)]())){const _0xdc77cb=DataManager[_0x41fa03(0x1c4)](_0x3c78b0[_0x41fa03(0x13f)]());if(this[_0x41fa03(0x150)](_0xdc77cb)){this[_0x41fa03(0x1f9)](_0xdc77cb);return;}}if(DataManager[_0x41fa03(0x163)](_0x3c78b0[_0x41fa03(0x13f)]())){const _0x155f9e=DataManager[_0x41fa03(0x195)](_0x3c78b0[_0x41fa03(0x13f)]());if(this['hasBattleVoiceKey'](_0x155f9e)){this[_0x41fa03(0x1f9)](_0x155f9e);return;}}if(DataManager[_0x41fa03(0x1b9)](_0x3c78b0[_0x41fa03(0x13f)]())){const _0x4f6068=DataManager[_0x41fa03(0x1ea)](_0x3c78b0['item']());if(this['hasBattleVoiceKey'](_0x4f6068)){this[_0x41fa03(0x1f9)](_0x4f6068);return;}}this['performActionStartBaseVoice'](_0x3c78b0);},Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x1a5)]=function(_0x1d9e91){const _0x554939=_0x1223bd;let _0x2ee290='ActionStart';if(_0x1d9e91['isAttack']())_0x2ee290+=_0x554939(0x10c);else{if(_0x1d9e91[_0x554939(0x1d2)]())_0x2ee290+=_0x554939(0x156);else{if(_0x1d9e91[_0x554939(0x174)]()){_0x2ee290+=_0x554939(0x173),_0x2ee290+=_0x1d9e91['isForFriend']()&&!_0x1d9e91[_0x554939(0x196)]()?'Ally':'Enemy';if(_0x1d9e91[_0x554939(0x153)]())_0x2ee290+=_0x554939(0x1bc);if(_0x1d9e91[_0x554939(0x1d3)]())_0x2ee290+=_0x554939(0x148);if(_0x1d9e91[_0x554939(0x197)]())_0x2ee290+=_0x554939(0x19a);}else _0x1d9e91[_0x554939(0x1cc)]()&&(_0x2ee290+=_0x554939(0x100),_0x2ee290+=_0x1d9e91[_0x554939(0x1c1)]()&&!_0x1d9e91[_0x554939(0x196)]()?_0x554939(0x1a4):_0x554939(0x1a9));}}this[_0x554939(0x1f9)](_0x2ee290);},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x1e0)]=Game_Battler['prototype']['performAction'],Game_Battler[_0x1223bd(0x10f)]['performAction']=function(_0xf7bfc9){const _0x251543=_0x1223bd;VisuMZ['BattleVoices'][_0x251543(0x1e0)][_0x251543(0x16c)](this,_0xf7bfc9);if(!SceneManager[_0x251543(0x176)]())return;if(!_0xf7bfc9)return;this[_0x251543(0xfc)](_0xf7bfc9);},Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0xfc)]=function(_0x2a784b){const _0x24be44=_0x1223bd;let _0x492840='PerformAction';if(_0x2a784b[_0x24be44(0x112)]()||_0x2a784b[_0x24be44(0x1d2)]()||_0x2a784b[_0x24be44(0x1cc)]())return;else{if(_0x2a784b['isSkill']()){_0x492840+=_0x24be44(0x173);if(_0x2a784b['isCertainHit']())_0x492840+=_0x24be44(0x1bc);if(_0x2a784b[_0x24be44(0x1d3)]())_0x492840+=_0x24be44(0x148);if(_0x2a784b['isMagical']())_0x492840+=_0x24be44(0x19a);}}this[_0x24be44(0x1f9)](_0x492840);},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x14a)]=Game_Actor[_0x1223bd(0x10f)]['performAttack'],Game_Actor[_0x1223bd(0x10f)][_0x1223bd(0x19f)]=function(){const _0x18e6b5=_0x1223bd;VisuMZ[_0x18e6b5(0x203)][_0x18e6b5(0x14a)]['call'](this);if(!SceneManager[_0x18e6b5(0x176)]())return;this[_0x18e6b5(0x1f9)](_0x18e6b5(0xf5));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x132)]=Game_Enemy['prototype'][_0x1223bd(0x19f)],Game_Enemy[_0x1223bd(0x10f)][_0x1223bd(0x19f)]=function(){const _0x1144c9=_0x1223bd;VisuMZ[_0x1144c9(0x203)][_0x1144c9(0x132)]['call'](this);if(!SceneManager[_0x1144c9(0x176)]())return;this[_0x1144c9(0x1f9)](_0x1144c9(0xf5));},VisuMZ['BattleVoices']['Game_Battler_performCollapse']=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x1de)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x1de)]=function(){const _0xc67a6c=_0x1223bd;AudioManager[_0xc67a6c(0x1cb)][_0xc67a6c(0x1d1)]===_0xc67a6c(0x110)&&(this[_0xc67a6c(0x1f9)]('HpChangeDeath'),BattleManager[_0xc67a6c(0x206)]!==undefined&&BattleManager['_subject'][_0xc67a6c(0x1f9)](_0xc67a6c(0x15e))),VisuMZ[_0xc67a6c(0x203)][_0xc67a6c(0x13a)]['call'](this);},Game_Battler['prototype'][_0x1223bd(0x101)]=function(_0x138be5,_0x30b2c3){const _0x381991=_0x1223bd;if(!_0x138be5)return;if(!_0x30b2c3)return;if(_0x30b2c3[_0x381991(0x172)]<=0x0&&AudioManager[_0x381991(0x1cb)]['defeatType']===_0x381991(0x13b)){_0x138be5['_defeatedTargetsVoiced']=_0x138be5[_0x381991(0x17e)]||{};const _0x4bd886=_0x30b2c3[_0x381991(0x122)]();if(_0x138be5[_0x381991(0x17e)][_0x4bd886])return;_0x138be5[_0x381991(0x17e)][_0x4bd886]=!![],this[_0x381991(0x1f9)](_0x381991(0x15e));return;}const _0x38c59c=_0x30b2c3[_0x381991(0x126)]();if(!_0x38c59c)return;if(_0x38c59c[_0x381991(0x1d8)]){this[_0x381991(0x1f9)](_0x381991(0x160));return;}if(_0x38c59c[_0x381991(0x124)]||_0x38c59c['evaded']){this['playBattleVoice']('PerformActionMiss');return;}},Game_Battler[_0x1223bd(0x10f)]['performHpChangeVoice']=function(_0x54e687,_0x2d08f8){const _0x34742e=_0x1223bd;if(!SceneManager[_0x34742e(0x176)]())return;if(![_0x34742e(0x15c),_0x34742e(0x118)][_0x34742e(0x16a)](BattleManager[_0x34742e(0x171)]))return;if(!BattleManager[_0x34742e(0x206)])return;if(!this[_0x34742e(0x177)]())return;if(BattleManager['_endingBattle'])return;let _0x19a7e0=_0x34742e(0x1e5);const _0x5a302a=BattleManager[_0x34742e(0x206)]&&BattleManager[_0x34742e(0x206)][_0x34742e(0x19d)]()===this['isActor']();if(_0x54e687>0x0&&_0x2d08f8<=0x0)AudioManager[_0x34742e(0x1cb)]['defeatType']==='0\x20HP'?_0x19a7e0+=_0x34742e(0x17a):_0x19a7e0+=_0x34742e(0x12b);else{if(_0x54e687<=0x0&&_0x2d08f8>0x1)_0x19a7e0+='Revive';else{if(_0x54e687>_0x2d08f8){const _0x2a79b4=_0x54e687-_0x2d08f8,_0x149782=_0x2a79b4/this[_0x34742e(0x1f1)];_0x19a7e0+=_0x34742e(0x1b5);if(this[_0x34742e(0x1d2)]())_0x19a7e0+=_0x34742e(0x198);else{if(_0x149782>=0.5)_0x19a7e0+=_0x34742e(0x12c);else _0x149782>=0.25?_0x19a7e0+='Medium':_0x19a7e0+=_0x34742e(0x182);}}else{if(_0x5a302a){const _0x56ecf3=_0x2d08f8-_0x54e687,_0x1e8114=_0x56ecf3/this[_0x34742e(0x1f1)];_0x19a7e0+=_0x34742e(0x1b4);if(_0x1e8114>=0.5)_0x19a7e0+=_0x34742e(0x12c);else _0x1e8114>=0.25?_0x19a7e0+=_0x34742e(0x1e7):_0x19a7e0+=_0x34742e(0x182);}else{if(_0x54e687===_0x2d08f8&&!_0x5a302a)_0x19a7e0+=_0x34742e(0x1fc);else return;}}}}this['playBattleVoice'](_0x19a7e0);},VisuMZ['BattleVoices'][_0x1223bd(0x116)]=Game_Battler['prototype'][_0x1223bd(0x162)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x162)]=function(){const _0x2adb40=_0x1223bd;VisuMZ[_0x2adb40(0x203)][_0x2adb40(0x116)][_0x2adb40(0x16c)](this);if(!SceneManager[_0x2adb40(0x176)]())return;if(!this[_0x2adb40(0x177)]())return;this[_0x2adb40(0x1f9)](_0x2adb40(0x1ac));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x193)]=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x13c)],Game_Battler['prototype'][_0x1223bd(0x13c)]=function(){const _0x5658d1=_0x1223bd;VisuMZ[_0x5658d1(0x203)][_0x5658d1(0x193)]['call'](this);if(!SceneManager[_0x5658d1(0x176)]())return;if(!this[_0x5658d1(0x177)]())return;this['playBattleVoice']('ActionResultEvasion');},VisuMZ[_0x1223bd(0x203)]['Game_Battler_performMagicEvasion']=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x107)],Game_Battler[_0x1223bd(0x10f)]['performMagicEvasion']=function(){const _0x32a899=_0x1223bd;VisuMZ[_0x32a899(0x203)][_0x32a899(0x1f7)]['call'](this);if(!SceneManager[_0x32a899(0x176)]())return;if(!this['allowSelfResponseVoice']())return;this['playBattleVoice'](_0x32a899(0xfe));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x151)]=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0xec)],Game_Battler[_0x1223bd(0x10f)]['performCounter']=function(){const _0x4868a4=_0x1223bd;VisuMZ[_0x4868a4(0x203)][_0x4868a4(0x151)]['call'](this);if(!SceneManager[_0x4868a4(0x176)]())return;if(!this[_0x4868a4(0x177)]())return;this[_0x4868a4(0x1f9)](_0x4868a4(0x1a6));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x1d6)]=Game_Battler['prototype']['performReflection'],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x14c)]=function(){const _0x280064=_0x1223bd;VisuMZ[_0x280064(0x203)]['Game_Battler_performReflection'][_0x280064(0x16c)](this);if(!SceneManager[_0x280064(0x176)]())return;if(!this[_0x280064(0x177)]())return;this['playBattleVoice'](_0x280064(0x149));},VisuMZ[_0x1223bd(0x203)]['Game_Battler_performSubstitute']=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x155)],Game_Battler['prototype'][_0x1223bd(0x155)]=function(_0x731e75){const _0x3276ff=_0x1223bd;VisuMZ[_0x3276ff(0x203)][_0x3276ff(0x1be)][_0x3276ff(0x16c)](this,_0x731e75);if(!SceneManager[_0x3276ff(0x176)]())return;if(!this['allowSelfResponseVoice']())return;this['playBattleVoice'](_0x3276ff(0x1db));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x134)]=Game_Battler['prototype'][_0x1223bd(0x10b)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x10b)]=function(_0x3dbc9,_0x196edd){const _0x3fbd04=_0x1223bd;VisuMZ[_0x3fbd04(0x203)][_0x3fbd04(0x134)][_0x3fbd04(0x16c)](this,_0x3dbc9,_0x196edd);if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x3fbd04(0x206)])return;if(!this[_0x3fbd04(0x177)]())return;this['playBattleVoice'](_0x3fbd04(0x106));},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x1ab)]=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x200)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x200)]=function(){const _0x269f40=_0x1223bd;this[_0x269f40(0x191)]=!![],VisuMZ[_0x269f40(0x203)]['Game_Battler_removeBuffsAuto']['call'](this),this['_expireBuffsAuto']=undefined;},VisuMZ[_0x1223bd(0x203)]['Game_Battler_addDebuff']=Game_Battler['prototype'][_0x1223bd(0x199)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x199)]=function(_0x2541c1,_0x2418b8){const _0x1ff871=_0x1223bd;VisuMZ[_0x1ff871(0x203)]['Game_Battler_addDebuff'][_0x1ff871(0x16c)](this,_0x2541c1,_0x2418b8);if(!SceneManager['isSceneBattle']())return;if(!BattleManager['_subject'])return;if(!this['allowSelfResponseVoice']())return;this[_0x1ff871(0x1f9)]('DebuffAdd');},VisuMZ['BattleVoices'][_0x1223bd(0x111)]=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x1f2)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x1f2)]=function(_0x29995d){const _0x13bf97=_0x1223bd,_0x45df60=this['isBuffAffected'](_0x29995d),_0x5440f0=this['isDebuffAffected'](_0x29995d);VisuMZ[_0x13bf97(0x203)][_0x13bf97(0x111)][_0x13bf97(0x16c)](this,_0x29995d);if(!SceneManager[_0x13bf97(0x176)]())return;if(!BattleManager[_0x13bf97(0x206)])return;if(this[_0x13bf97(0x191)])return;if(!this[_0x13bf97(0x177)]())return;if(_0x45df60)this[_0x13bf97(0x1f9)](_0x13bf97(0x1d7));if(_0x5440f0)this[_0x13bf97(0x1f9)]('DebuffRemove');},VisuMZ['BattleVoices'][_0x1223bd(0x16b)]=Game_Battler[_0x1223bd(0x10f)]['addState'],Game_Battler[_0x1223bd(0x10f)]['addState']=function(_0x2da606){const _0x1e8905=_0x1223bd;VisuMZ[_0x1e8905(0x203)][_0x1e8905(0x16b)]['call'](this,_0x2da606);if(!SceneManager[_0x1e8905(0x176)]())return;if(!BattleManager['_subject'])return;if(!this[_0x1e8905(0x177)]())return;if(!this['isStateAffected'](_0x2da606))return;this[_0x1e8905(0x1e8)](_0x2da606);},Game_Battler['prototype'][_0x1223bd(0x1e8)]=function(_0x52628a){const _0x1e09f3=_0x1223bd,_0x58391e=$dataStates[_0x52628a];if(!_0x58391e)return;let _0x371bbc=_0x1e09f3(0x103);if(Imported[_0x1e09f3(0x19e)]&&_0x58391e[_0x1e09f3(0x120)]['match'](/<POSITIVE STATE>/i))_0x371bbc+=_0x1e09f3(0x170);else Imported[_0x1e09f3(0x19e)]&&_0x58391e[_0x1e09f3(0x120)][_0x1e09f3(0x10d)](/<NEGATIVE STATE>/i)?_0x371bbc+='Negative':_0x371bbc+='Neutral';_0x371bbc+=_0x1e09f3(0xeb),this[_0x1e09f3(0x1f9)](_0x371bbc);},VisuMZ['BattleVoices'][_0x1223bd(0x1b3)]=Game_Battler['prototype'][_0x1223bd(0x194)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x194)]=function(_0x2a20b3){const _0x1aa82a=_0x1223bd;this[_0x1aa82a(0x1ae)]=!![],VisuMZ[_0x1aa82a(0x203)][_0x1aa82a(0x1b3)][_0x1aa82a(0x16c)](this,_0x2a20b3),this[_0x1aa82a(0x1ae)]=undefined;},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x18b)]=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x15b)],Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x15b)]=function(_0x481a35){const _0x164c2f=_0x1223bd,_0x3b94b6=this[_0x164c2f(0xfb)](_0x481a35);VisuMZ[_0x164c2f(0x203)][_0x164c2f(0x18b)]['call'](this,_0x481a35);if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x164c2f(0x206)])return;if(this[_0x164c2f(0x1ae)])return;if(!this[_0x164c2f(0x177)]())return;if(!_0x3b94b6)return;this[_0x164c2f(0x114)](_0x481a35);},Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x114)]=function(_0xc5cf0b){const _0x51d3f7=_0x1223bd,_0x5aa0e4=$dataStates[_0xc5cf0b];if(!_0x5aa0e4)return;let _0x44e91c=_0x51d3f7(0x103);if(Imported[_0x51d3f7(0x19e)]&&_0x5aa0e4[_0x51d3f7(0x120)]['match'](/<POSITIVE STATE>/i))_0x44e91c+=_0x51d3f7(0x170);else Imported[_0x51d3f7(0x19e)]&&_0x5aa0e4[_0x51d3f7(0x120)][_0x51d3f7(0x10d)](/<NEGATIVE STATE>/i)?_0x44e91c+=_0x51d3f7(0x1b7):_0x44e91c+='Neutral';_0x44e91c+=_0x51d3f7(0x131),this['playBattleVoice'](_0x44e91c);},VisuMZ[_0x1223bd(0x203)]['Game_Battler_initMembers']=Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x14f)],Game_Battler['prototype'][_0x1223bd(0x14f)]=function(){const _0x2c3e00=_0x1223bd;VisuMZ['BattleVoices'][_0x2c3e00(0x165)][_0x2c3e00(0x16c)](this),this[_0x2c3e00(0x1ed)]();},Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x1ed)]=function(){const _0x4abac3=_0x1223bd;this[_0x4abac3(0x188)]=![];},Game_Battler[_0x1223bd(0x10f)][_0x1223bd(0x142)]=function(_0xbe9f67){const _0x27ff87=_0x1223bd;if(this[_0x27ff87(0x188)]===undefined)this[_0x27ff87(0x1ed)]();this['_muteBattleVoices']=_0xbe9f67;},Game_Battler['prototype'][_0x1223bd(0x181)]=function(){if(this['_muteBattleVoices']===undefined)this['initBattleVoicesMute']();return this['_muteBattleVoices'];},Game_Party[_0x1223bd(0x10f)][_0x1223bd(0x1f9)]=function(_0x2045f6){const _0x18c0d2=_0x1223bd,_0x4285c7=[];for(const _0x1e064a of this[_0x18c0d2(0xff)]()){const _0x6435be=_0x1e064a[_0x18c0d2(0x133)]();if(!_0x6435be)continue;const _0xa01c00=AudioManager[_0x18c0d2(0x1da)](_0x6435be[_0x18c0d2(0x158)]);if(!_0xa01c00)continue;const _0x58b755=_0xa01c00[_0x2045f6];if(!_0x58b755)continue;if(_0x58b755[_0x18c0d2(0x13e)]<=0x0)return;_0x4285c7[_0x18c0d2(0xfd)](_0x1e064a);}const _0x2894a4=_0x4285c7[Math[_0x18c0d2(0xf9)](_0x4285c7[_0x18c0d2(0x13e)])];_0x2894a4&&_0x2894a4[_0x18c0d2(0x1f9)](_0x2045f6);},VisuMZ['BattleVoices']['Scene_Options_maxCommands']=Scene_Options['prototype'][_0x1223bd(0x1a0)],Scene_Options[_0x1223bd(0x10f)][_0x1223bd(0x1a0)]=function(){const _0x3fdeba=_0x1223bd;let _0x47de4f=VisuMZ[_0x3fdeba(0x203)][_0x3fdeba(0x18f)][_0x3fdeba(0x16c)](this);const _0x1dc62e=VisuMZ['BattleVoices'][_0x3fdeba(0x1d0)];if(_0x1dc62e[_0x3fdeba(0xf1)][_0x3fdeba(0x169)]&&_0x1dc62e['Options']['AdjustRect'])_0x47de4f++;return _0x47de4f;},VisuMZ[_0x1223bd(0x203)][_0x1223bd(0x166)]=Window_Message[_0x1223bd(0x10f)]['registerLastPlayedVoiceSound'],Window_Message['prototype']['registerLastPlayedVoiceSound']=function(){const _0x4a5aab=_0x1223bd,_0x5bb0e6=AudioManager[_0x4a5aab(0x14d)];if(_0x5bb0e6[_0x4a5aab(0x13e)]<=0x0)return;const _0x40d0de=_0x5bb0e6[_0x5bb0e6['length']-0x1];if(!_0x40d0de[_0x4a5aab(0x1e9)]())return;if(_0x40d0de[_0x4a5aab(0x1c8)])return;VisuMZ[_0x4a5aab(0x203)]['Window_Message_registerLastPlayedVoiceSound']['call'](this);},VisuMZ['BattleVoices'][_0x1223bd(0x183)]=Window_Options['prototype'][_0x1223bd(0x1a7)],Window_Options[_0x1223bd(0x10f)][_0x1223bd(0x1a7)]=function(){const _0x11343a=_0x1223bd;VisuMZ[_0x11343a(0x203)][_0x11343a(0x183)][_0x11343a(0x16c)](this),this[_0x11343a(0x152)]();},Window_Options[_0x1223bd(0x10f)]['addBattleVoicesCommand']=function(){const _0x5bfba8=_0x1223bd;if(!VisuMZ[_0x5bfba8(0x203)][_0x5bfba8(0x1d0)][_0x5bfba8(0xf1)][_0x5bfba8(0x169)])return;const _0x54a62c=TextManager[_0x5bfba8(0x18e)],_0x56042a=_0x5bfba8(0x18e);this[_0x5bfba8(0x13d)](_0x54a62c,_0x56042a);};