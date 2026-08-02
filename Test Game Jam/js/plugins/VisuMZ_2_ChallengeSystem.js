//=============================================================================
// VisuStella MZ - Challenge System
// VisuMZ_2_ChallengeSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ChallengeSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ChallengeSystem = VisuMZ.ChallengeSystem || {};
VisuMZ.ChallengeSystem.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.01] [ChallengeSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Challenge_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Challenge System allows the player to select their own challenges. These
 * challenges can range from things like decreasing the party's MaxHP or
 * raising the enemies' ATK power. These challenges can affect the whole game
 * on a global scale or locally through specific maps. With the challenge
 * system, subsequent playthroughs of specific dungeons can feel a whole lot
 * less boring and more interesting with the challenges in play. The more
 * challenges enabled, the more the player is rewarded, too.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Challenge Sets can house a multitude of Challenge Entries that the player
 *   can select and turn on at their own choice.
 * * Design your own Challenge Entries. Such design choices include the ability
 *   to adjust the stats of allies and/or enemies in positive or negative ways.
 * * Challenge Entries can also affect units with passive states while enabled
 *   or temporarily by afflicting them with states at the start of battle.
 * * Challenge Entries can also turn ON certain switches while enabled (and OFF
 *   when they're disabled). This allows you, the game dev, to create custom
 *   challenge effects if desired.
 * * Some Challenge Entries can require Switches to be turned ON before they
 *   can be seen or enabled. This means Challenge Sets can grow over time as
 *   the player unlocks more Challenge Entries.
 * * Different Challenge Entries can have a different Challenge Level applied
 *   to them to indicate their difficulty.
 * * The higher the total Challenge Level, the more the player is rewarded with
 *   EXP multipliers, Gold multipliers, Drop Rate multipliers, and more.
 * * Assign the total Challenge Level to Variables to keep track of in case you
 *   want to do something custom with it as the game dev.
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
 * * VisuMZ_1_SkillsStatesCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * Switches
 * 
 * Some challenge entries will require switches to be accessible. This will
 * require them to be in the ON state. If the game dev has set the switch ON,
 * and then the player has enabled that challenge entry, the game dev can no
 * longer set the switch to OFF until the player has set the entry to off. This
 * is to prevent the player from getting confused as to why the challenge entry
 * is suddenly disabled without their knowledge.
 * 
 * If the player sets the switch to OFF and then the game dev sets the required
 * switch to OFF, then the effect can be turned off properly in the Challenge
 * System menu and hidden from accessibility.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_ClassChangeSystem
 * 
 * VisuMZ_2_SkillLearnSystem
 * 
 * If you are using the VisuStella MZ Class Change System and/or Skill Learn
 * System, then there will be some features that will be made available. The
 * Challenge System plugin will allow the CP and JP gains for the Class Change
 * System and the AP and SP gains for the Skill Learn System to be amplified
 * through the reward multipliers.
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
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Challenge Set: name>
 * <Challenge Sets: name, name, name>
 *
 * - Used for: Map Notetags
 * - Use this to define which local Challenge Sets will affect this map.
 * - Replace 'name' with the named 'Challenge Set ID' found in the Challenge
 *   Set groups in the Plugin Parameters.
 * - Insert multiple 'name' entries to allow more than one Challenge Set to
 *   affect this map.
 * - The Global Challenge Set affects all maps except those marked with the
 *   <No Global Challenges> notetag.
 *
 * ---
 *
 * <No Global Challenges>
 *
 * - Used for: Map Notetags
 * - Prevents this map from being affected by the Global Challenge Set found in
 *   the Plugin Parameters.
 * - This map can still be affected by local Challenge Sets marked through the
 *   <Challenge Set: name> notetag.
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
 * === Reset Plugin Commands ===
 * 
 * ---
 * 
 * Reset: Global Challenge Entries
 * - Resets all global challenges and turns off all entries.
 * 
 * ---
 * 
 * Reset: Local Challenge Entries
 * - Resets target local challenge set and turns off all enetries.
 * 
 *   Challenge Set Name:
 *   - What is the name of the Challenge Set that you want to reset?
 * 
 * ---
 * 
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open Challenge Menu - Global
 * - Opens Challenge Menu settings for Global Challenge Set.
 * - CANNOT be used inside of battle.
 *
 * ---
 *
 * Scene: Open Challenge Menu - Local Set
 * - Opens Challenge Menu settings for a local Challenge Set.
 * - CANNOT be used inside of battle.
 *
 *   Challenge Set Name:
 *   - What is the name of the Challenge Set that you want the player to be
 *     able to modify challenges for?
 *   - This is the 'Challenge Set ID' found in the Challenge Set groups in the
 *     Plugin Parameters.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Challenge Set Settings
 * ============================================================================
 *
 * These Plugin Parameters are used for both the Global and Local Challenge
 * Sets. There are no differences between them other than the Global Challenge
 * Set is always active except for maps with the <No Global Challenges> notetag
 * and the Local Challenge Sets are only active in maps with the notetag:
 * <Challenge Set: name>.
 *
 * ---
 *
 * General
 * 
 *   Challenge Set ID:
 *   - What is the name ID of this Challenge Set?
 *   - This is used for <Challenge: name> notetag.
 *   - Ignore this for the Global Challenge Set as it will always be "Global".
 * 
 *     Display Title:
 *     - How does the Challenge Set title appear visually?
 *     - Text codes allowed.
 * 
 *     Title Background:
 *     - Filename of the background image displayed.
 *     - Image found in the game project's img/titles1/ folder.
 * 
 * ---
 * 
 * Challenges
 * 
 *   Challenge List:
 *   - A list of challenges that can be selected for this challenge set.
 *   - Look in the "Challenge Entry Settings" section for more details.
 * 
 *   Total Level Variable:
 *   - What variable is used to record the total challenge level?
 *   - Insert 0 to not use this feature.
 *
 * ---
 *
 * Rewards Per Level
 * 
 *   EXP% Per Level:
 *   Gold% Per Level:
 *   Drop% Per Level:
 *   AP% Per Level:
 *   CP% Per Level:
 *   JP% Per Level:
 *   SP% Per Level:
 *   - Reward multiplier given per challenge level?
 *   - AP and SP require VisuMZ_2_SkillLearnSystem!
 *   - CP and JP require VisuMZ_2_ClassChangeSystem!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Challenge Entry Settings
 * ============================================================================
 *
 * These Plugin Parameters are used Challenge Entries. Challenge Entries are
 * the various challenges that players can pick from within each Challenge Set.
 * They can be turned on or off at the player's decision.
 *
 * ---
 *
 * General
 * 
 *   Challenge Entry ID:
 *   - What is the name ID of this Challenge Entry?
 *   - This is used for "Not Used With" setting.
 * 
 *     Display Name:
 *     - How does the Challenge Entry title appear visually?
 *     - Text codes allowed.
 * 
 *     Display Icon:
 *     - What icon should this Challenge Entry use?
 * 
 *     Display Description:
 *     - A description of this Challenge Entry.
 *     - Appears under the Display Name.
 *     - Text codes allowed.
 * 
 *     Level Modifier:
 *     - How does this affect the total Challenge Level?
 *     - Positive: Danger. Negative: Safety.
 * 
 *     Not Used With:
 *     - A list of Challenge Entries found in the same set that cannot be used
 *       together with this Entry.
 * 
 *     Required Switch:
 *     - If a Switch ID is used, this Challenge Entry only appears if this
 *       Switch ID is ON.
 *
 * ---
 * 
 * Effects
 * 
 *   Basic Parameters:
 *   - The basic parameter rates altered by this Entry.
 *   - The modifiers are multiplicative.
 *     - MaxHP Rate
 *     - MaxMP Rate
 *     - ATK Rate
 *     - DEF Rate
 *     - MAT Rate
 *     - MDF Rate
 *     - AGI Rate
 *     - LUK Rate
 * 
 *   X Parameters:
 *   - The X parameter rates altered by this Entry.
 *   - The modifiers are additive.
 *     - HIT Rate
 *     - EVA Rate
 *     - CRI Rate
 *     - CEV Rate
 *     - MEV Rate
 *     - MRF Rate
 *     - CNT Rate
 *     - HRG Rate
 *     - MRG Rate
 *     - TRG Rate
 * 
 *   S Parameters:
 *   - The S parameter rates altered by this Entry.
 *   - The modifiers are multiplicative.
 *     - TGR Rate
 *     - GRD Rate
 *     - REC Rate
 *     - PHA Rate
 *     - MCR Rate
 *     - TCR Rate
 *     - PDR Rate
 *     - MDR Rate
 *     - FDR Rate
 *     - EXR Rate
 * 
 *   Battle Start States:
 *   - A list of states that will be added onto the targets at the start of
 *     battle if this is used.
 *   - This does NOT bypass State Restrictions.
 * 
 *   Passive States:
 *   - A list of states that will be used as passives if this Challenge Entry
 *     is used.
 *   - As these are passives, they will behave as passives, too, which means
 *     no stacking unless specified otherwise (see VisuMZ_1_SkillsStatesCore
 *     help file).
 * 
 *   Effect Switch:
 *   - If Challenge Entry is enabled, turn ON this switch.
 *   - Otherwise, turn OFF this switch.
 * 
 * ---
 * 
 * Affected Targets
 * 
 *   All Actors?:
 *   - Affect all actors with this Challenge Entry?
 * 
 *     Specific Actors:
 *     - A list of actors that this Challenge Entry specifically affects.
 * 
 *     Specific Classes:
 *     - A list of classes that this Challenge Entry specifically affects.
 * 
 *   All Enemies?:
 *   - Affect all enemies with this Challenge Entry?
 * 
 *     Specific Enemies:
 *     - A list of enemies that this Challenge Entry specifically affects.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * These settings let you adjust the mechanics used for this plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Adjust HP/MP:
 *   - Adjust HP/MP differences for changing Challenge Sets with
 *     MaxHP/MaxMP values.
 * 
 *   Allow Safety Level:
 *   - Allow levels to go into the negatives for Safety Levels?
 * 
 *     Negative Rewards Rate:
 *     - Reduce penalty changes to battle rewards for Safety Level by this
 *       multiplicative rate modifier.
 * 
 *   Lowest Reward Cap:
 *   - Absolute lowest reward cap that can be given out.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Challenge.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * These settings let you adjust the sound effects used for this plugin.
 *
 * ---
 *
 * Danger Sound
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
 * Safety Sound
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
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Level Display Window
 * 
 *   Danger Level:
 *   - Text used for a positive level.
 * 
 *   Safety Level:
 *   - Text used for a negative level.
 * 
 * ---
 * 
 * Rewards Display Window
 * 
 *   Display Title:
 *   - Text used for this window's title.
 * 
 *   Drop Rate:
 *   - Text used to designate drop rate.
 *
 * ---
 *
 * List Entry Window
 * 
 *   Danger Level Change:
 *   - Indicate how much level change there is.
 *   - %1 - Level
 * 
 *   Safety Level Change:
 *   - Indicate how much level change there is.
 *   - %1 - Level
 * 
 * ---
 * 
 * Button Assist Window
 * 
 *   Reset:
 *   - Text used for a full Challenge Set reset.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin.
 *
 * ---
 *
 * Title Display Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Padding:
 *   - How much padding is used for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Level Display Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Level Number Settings:
 * 
 *     Base Font Size:
 *     - What is the base font size for the level number?
 * 
 *     New Size Per Level?:
 *     - Increase the size of the font per level?
 * 
 *       Level Modifier:
 *       - How much should font size increase per level?
 * 
 *       Max Font Size:
 *       - What is the maximum font size that can be reached?
 * 
 *     Use Numbers Font?:
 *     - Use the damage numbers font for the number display?
 * 
 *   Level Text Colors:
 * 
 *     Danger Color:
 *     Neutral Color:
 *     Safety Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Update Frequency:
 *   - How often should this window update in frames?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Rewards Display Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Rewards Order:
 *   - What order do you want the rewards to appear in?
 * 
 *   Reward EXP Icon:
 *   Reward Gold Icon:
 *   Reward Drops Icon:
 *   - Icon used for this reward.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * List Entry Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Icon Smoothing?:
 *   - Use a smooth icon for an extended icon size?
 * 
 *   Thickness:
 *   - How many lines thick is each Challenge Entry?
 * 
 *   Level Text Colors:
 * 
 *     Danger Color:
 *     Safety Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   List Name Color:
 * 
 *     Normal Entry:
 *     Excluded Entry:
 *     On Danger Entry:
 *     Safety Entry:
 *     - Use text colors from the Window Skin only.
 *     - This does NOT use #rrggbb format.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Version 1.01: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where a crash would occur upon trying to set the challenge
 *    level to a variable. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added section: Major Changes > Switches:
 * *** Some challenge entries will require switches to be accessible. This will
 *     require them to be in the ON state. If the game dev has set the switch
 *     ON, and then the player has enabled that challenge entry, the game dev
 *     can no longer set the switch to OFF until the player has set the entry
 *     to off. This is to prevent the player from getting confused as to why
 *     the challenge entry is suddenly disabled without their knowledge.
 * *** If the player sets the switch to OFF and then the game dev sets the
 *     required switch to OFF, then the effect can be turned off properly in
 *     the Challenge System menu and hidden from accessibility.
 * * Feature Update!
 * ** Changing Required Switch states to OFF will be locked out if a challenge
 *    entry is using it in order to prevent confusion. Update by Irina.
 * * New Features!
 * ** New Plugin Commands added:
 * *** Reset: Global Challenge Entries
 * *** Reset: Local Challenge Entries
 * **** Resets all global challenges/local challenge and turns off all related
 *      entries to that challenge set.
 * 
 * Version 1.00 Official Release Date: September 27, 2023
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
 * @command Reset_GlobalChallenges
 * @text Reset: Global Challenge Entries
 * @desc Resets all global challenges and turns off all entries.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Reset_GlobalLocalSet
 * @text Reset: Local Challenge Entries
 * @desc Resets target local challenge set and turns off all enetries.
 *
 * @arg SetName:str
 * @text Challenge Set Name
 * @desc What is the name of the Challenge Set that you want to reset?
 * @default Example
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Scene
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Scene_OpenChallengeMenu_Global
 * @text Scene: Open Challenge Menu - Global
 * @desc Opens Challenge Menu settings for Global Challenge Set.
 * CANNOT be used inside of battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Scene_OpenChallengeMenu_LocalSet
 * @text Scene: Open Challenge Menu - Local Set
 * @desc Opens Challenge Menu settings for a local Challenge Set.
 * CANNOT be used inside of battle.
 *
 * @arg SetName:str
 * @text Challenge Set Name
 * @desc What is the name of the Challenge Set that you want the
 * player to be able to modify challenges for?
 * @default Example
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
 * @param ChallengeSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Challenges
 *
 * @param Global:struct
 * @text Global Challenge Set
 * @parent Challenges
 * @type struct<ChallengeSet>
 * @desc Challenges that can accepted globally and used on every
 * map except those with <No Global Challenges> notetag.
 * @default {"Name:str":"Global","Title:str":"\\I[76] Global Challenges \\I[76]","TitleBgFilename:str":"","Challenges":"","ChallengeList:arraystruct":"[\"{\\\"Name:str\\\":\\\"Fragility1\\\",\\\"Title:str\\\":\\\"Fragility I\\\",\\\"Icon:num\\\":\\\"48\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -25% less MaxHP.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Fragility2\\\\\\\",\\\\\\\"Fragility3\\\\\\\",\\\\\\\"Unstoppable\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Fragility2\\\",\\\"Title:str\\\":\\\"Fragility II\\\",\\\"Icon:num\\\":\\\"48\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -33% less MaxHP.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Fragility1\\\\\\\",\\\\\\\"Fragility3\\\\\\\",\\\\\\\"Unstoppable\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.67\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Fragility3\\\",\\\"Title:str\\\":\\\"Fragility III\\\",\\\"Icon:num\\\":\\\"56\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -50% less MaxHP.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Fragility1\\\\\\\",\\\\\\\"Fragility2\\\\\\\",\\\\\\\"Unstoppable\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Unstoppable\\\",\\\"Title:str\\\":\\\"Unstoppable\\\",\\\"Icon:num\\\":\\\"72\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies gain +100% more MaxHP.\\\\\\\\nAllies gain \\\\\\\\\\\\\\\\I[72]HP Regeneration.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Fragility1\\\\\\\",\\\\\\\"Fragility2\\\\\\\",\\\\\\\"Fragility3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[\\\\\\\"15\\\\\\\"]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Weakness1\\\",\\\"Title:str\\\":\\\"Weakness I\\\",\\\"Icon:num\\\":\\\"50\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -20% less ATK and MAT.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Weakness2\\\\\\\",\\\\\\\"Weakness3\\\\\\\",\\\\\\\"Power\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Weakness2\\\",\\\"Title:str\\\":\\\"Weakness II\\\",\\\"Icon:num\\\":\\\"50\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -40% less ATK and MAT.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Weakness1\\\\\\\",\\\\\\\"Weakness3\\\\\\\",\\\\\\\"Power\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.60\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.60\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Weakness3\\\",\\\"Title:str\\\":\\\"Weakness III\\\",\\\"Icon:num\\\":\\\"58\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -60% less ATK and MAT.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Weakness1\\\\\\\",\\\\\\\"Weakness2\\\\\\\",\\\\\\\"Power\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.40\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.40\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Power\\\",\\\"Title:str\\\":\\\"Overpowered\\\",\\\"Icon:num\\\":\\\"76\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies gain +100% more ATK and MAT.\\\\\\\\nAllies gain +100% Hit Rate.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Weakness1\\\\\\\",\\\\\\\"Weakness2\\\\\\\",\\\\\\\"Weakness3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Brittle1\\\",\\\"Title:str\\\":\\\"Brittle I\\\",\\\"Icon:num\\\":\\\"51\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -20% less DEF and MDF.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Brittle2\\\\\\\",\\\\\\\"Brittle3\\\\\\\",\\\\\\\"Aegis\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Brittle2\\\",\\\"Title:str\\\":\\\"Brittle II\\\",\\\"Icon:num\\\":\\\"51\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -40% less DEF and MDF.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Brittle1\\\\\\\",\\\\\\\"Brittle3\\\\\\\",\\\\\\\"Aegis\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.60\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.60\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Brittle3\\\",\\\"Title:str\\\":\\\"Brittle III\\\",\\\"Icon:num\\\":\\\"59\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -60% less DEF and MDF.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Brittle1\\\\\\\",\\\\\\\"Brittle2\\\\\\\",\\\\\\\"Aegis\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.40\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.40\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Aegis\\\",\\\"Title:str\\\":\\\"Aegis\\\",\\\"Icon:num\\\":\\\"81\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies gain +100% more DEF and MDF.\\\\\\\\nAllies gain +100% Critical Evasion.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Brittle1\\\\\\\",\\\\\\\"Brittle2\\\\\\\",\\\\\\\"Brittle3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Sluggish1\\\",\\\"Title:str\\\":\\\"Sluggish I\\\",\\\"Icon:num\\\":\\\"54\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -20% less AGI.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Sluggish2\\\\\\\",\\\\\\\"Sluggish3\\\\\\\",\\\\\\\"Blitzkrieg\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Sluggish2\\\",\\\"Title:str\\\":\\\"Sluggish II\\\",\\\"Icon:num\\\":\\\"54\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -40% less AGI.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Sluggish1\\\\\\\",\\\\\\\"Sluggish3\\\\\\\",\\\\\\\"Blitzkrieg\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.60\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Sluggish3\\\",\\\"Title:str\\\":\\\"Sluggish III\\\",\\\"Icon:num\\\":\\\"62\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies have -60% less AGI.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Sluggish1\\\\\\\",\\\\\\\"Sluggish2\\\\\\\",\\\\\\\"Blitzkrieg\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.40\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Blitzkrieg\\\",\\\"Title:str\\\":\\\"Blitzkrieg\\\",\\\"Icon:num\\\":\\\"82\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Allies gain +100% more AGI.\\\\\\\\nAllies gain +20% more Evasion.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Sluggish1\\\\\\\",\\\\\\\"Sluggish2\\\\\\\",\\\\\\\"Sluggish3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.20\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"true\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"false\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Vitality1\\\",\\\"Title:str\\\":\\\"Vitality I\\\",\\\"Icon:num\\\":\\\"32\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +25% more MaxHP.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vitality2\\\\\\\",\\\\\\\"Vitality3\\\\\\\",\\\\\\\"Pushover\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.25\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Vitality2\\\",\\\"Title:str\\\":\\\"Vitality II\\\",\\\"Icon:num\\\":\\\"32\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +50% more MaxHP.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vitality1\\\\\\\",\\\\\\\"Vitality3\\\\\\\",\\\\\\\"Pushover\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Vitality3\\\",\\\"Title:str\\\":\\\"Vitality III\\\",\\\"Icon:num\\\":\\\"40\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +75% more MaxHP.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vitality1\\\\\\\",\\\\\\\"Vitality2\\\\\\\",\\\\\\\"Pushover\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.75\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Pushover\\\",\\\"Title:str\\\":\\\"Pushover\\\",\\\"Icon:num\\\":\\\"78\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies have -80% less MaxHP.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vitality1\\\\\\\",\\\\\\\"Vitality2\\\\\\\",\\\\\\\"Vitality3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.20\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Vicious1\\\",\\\"Title:str\\\":\\\"Vicious I\\\",\\\"Icon:num\\\":\\\"34\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +15% more ATK and MAT.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vicious2\\\\\\\",\\\\\\\"Vicious3\\\\\\\",\\\\\\\"Pathetic\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.15\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.15\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Vicious2\\\",\\\"Title:str\\\":\\\"Vicious II\\\",\\\"Icon:num\\\":\\\"34\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +30% more ATK and MAT.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vicious1\\\\\\\",\\\\\\\"Vicious3\\\\\\\",\\\\\\\"Pathetic\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Vicious3\\\",\\\"Title:str\\\":\\\"Vicious III\\\",\\\"Icon:num\\\":\\\"42\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +45% more ATK and MAT.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vicious1\\\\\\\",\\\\\\\"Vicious2\\\\\\\",\\\\\\\"Pathetic\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.45\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.45\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Pathetic\\\",\\\"Title:str\\\":\\\"Pathetic\\\",\\\"Icon:num\\\":\\\"74\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies have -66% less ATK and MAT.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Vicious1\\\\\\\",\\\\\\\"Vicious2\\\\\\\",\\\\\\\"Vicious3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.33\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.33\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Toughness1\\\",\\\"Title:str\\\":\\\"Toughness I\\\",\\\"Icon:num\\\":\\\"35\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +15% more DEF and MDF.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Toughness2\\\\\\\",\\\\\\\"Toughness3\\\\\\\",\\\\\\\"PunchingBag\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.15\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.15\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Toughness2\\\",\\\"Title:str\\\":\\\"Toughness II\\\",\\\"Icon:num\\\":\\\"35\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +30% more DEF and MDF.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Toughness1\\\\\\\",\\\\\\\"Toughness3\\\\\\\",\\\\\\\"PunchingBag\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Toughness3\\\",\\\"Title:str\\\":\\\"Toughness III\\\",\\\"Icon:num\\\":\\\"43\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +45% more DEF and MDF.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Toughness1\\\\\\\",\\\\\\\"Toughness2\\\\\\\",\\\\\\\"PunchingBag\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.45\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.45\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"PunchingBag\\\",\\\"Title:str\\\":\\\"Punching Bag\\\",\\\"Icon:num\\\":\\\"77\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies have -66% less DEF and MDF.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Toughness1\\\\\\\",\\\\\\\"Toughness2\\\\\\\",\\\\\\\"Toughness3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.33\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.33\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Agile1\\\",\\\"Title:str\\\":\\\"Agile I\\\",\\\"Icon:num\\\":\\\"38\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +15% more AGI.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+1\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Agile2\\\\\\\",\\\\\\\"Agile3\\\\\\\",\\\\\\\"Snail\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.15\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Agile2\\\",\\\"Title:str\\\":\\\"Agile II\\\",\\\"Icon:num\\\":\\\"38\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +30% more AGI.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+2\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Agile1\\\\\\\",\\\\\\\"Agile3\\\\\\\",\\\\\\\"Snail\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Agile3\\\",\\\"Title:str\\\":\\\"Agile III\\\",\\\"Icon:num\\\":\\\"46\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies gain +45% more AGI.\\\\\\\"\\\",\\\"Level:num\\\":\\\"+3\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Agile1\\\\\\\",\\\\\\\"Agile2\\\\\\\",\\\\\\\"Snail\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.45\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\",\"{\\\"Name:str\\\":\\\"Snail\\\",\\\"Title:str\\\":\\\"Snail-Paced\\\",\\\"Icon:num\\\":\\\"6\\\",\\\"Desc:json\\\":\\\"\\\\\\\"Enemies have -66% less AGI.\\\\\\\"\\\",\\\"Level:num\\\":\\\"-5\\\",\\\"Excludes:arraystr\\\":\\\"[\\\\\\\"Agile1\\\\\\\",\\\\\\\"Agile2\\\\\\\",\\\\\\\"Agile3\\\\\\\"]\\\",\\\"ReqSwitch:num\\\":\\\"0\\\",\\\"Effects\\\":\\\"\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.33\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"BattleStartStates:arraynum\\\":\\\"[]\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"EffectSwitch:num\\\":\\\"0\\\",\\\"Affects\\\":\\\"\\\",\\\"AffectsAllActors:eval\\\":\\\"false\\\",\\\"AffectsSpecificActors:arraynum\\\":\\\"[]\\\",\\\"AffectsSpecificClasses:arraynum\\\":\\\"[]\\\",\\\"AffectsAllEnemies:eval\\\":\\\"true\\\",\\\"AffectsSpecificEnemies:arraynum\\\":\\\"[]\\\"}\"]","VariableID:num":"0","Rewards":"","ExpRatePerLevel:num":"+0.20","GoldRatePerLevel:num":"+0.25","DropRatePerLevel:num":"+0.10","ApRatePerLevel:num":"+0.15","CpRatePerLevel:num":"+0.15","JpRatePerLevel:num":"+0.15","SpRatePerLevel:num":"+0.15"}
 *
 * @param Local:arraystruct
 * @text Local Challenge Sets
 * @parent Challenges
 * @type struct<ChallengeSet>[]
 * @desc Local challenge sets that require maps to have a
 * <Challenge Set: name> notetag to have any effect.
 * @default ["{\"Name:str\":\"Example\",\"Title:str\":\"\\\\I[84] Example \\\\I[84]\",\"TitleBgFilename:str\":\"\",\"Challenges\":\"\",\"ChallengeList:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fragility1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Fragility I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"48\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -25% less MaxHP.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Fragility2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Fragility3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Unstoppable\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.75\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fragility2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Fragility II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"48\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -33% less MaxHP.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Fragility1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Fragility3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Unstoppable\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.67\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Weakness1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Weakness I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"50\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -20% less ATK and MAT.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Weakness2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Weakness3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Power\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.80\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.80\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Weakness2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Weakness II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"50\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -40% less ATK and MAT.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Weakness1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Weakness3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Power\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.60\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.60\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Brittle1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Brittle I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"51\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -20% less DEF and MDF.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Brittle2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Brittle3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Aegis\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.80\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.80\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Brittle2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Brittle II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"51\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -40% less DEF and MDF.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Brittle1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Brittle3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Aegis\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.60\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.60\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Sluggish1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Sluggish I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -20% less AGI.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Sluggish2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Sluggish3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Blitzkrieg\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.80\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Sluggish2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Sluggish II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Allies have -40% less AGI.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Sluggish1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Sluggish3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Blitzkrieg\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0.60\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Vitality1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Vitality I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +25% more MaxHP.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Vitality2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Vitality3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Pushover\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.25\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Vitality2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Vitality II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +50% more MaxHP.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Vitality1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Vitality3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Pushover\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.50\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Vicious1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Vicious I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"34\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +15% more ATK and MAT.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Vicious2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Vicious3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Pathetic\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.15\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.15\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Vicious2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Vicious II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"34\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +30% more ATK and MAT.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Vicious1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Vicious3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Pathetic\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.30\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.30\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Toughness1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Toughness I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"35\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +15% more DEF and MDF.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Toughness2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Toughness3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"PunchingBag\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.15\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.15\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Toughness2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Toughness II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"35\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +30% more DEF and MDF.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Toughness1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Toughness3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"PunchingBag\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.30\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.30\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Agile1\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Agile I\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"38\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +15% more AGI.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+1\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Agile2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Agile3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Snail\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.15\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Agile2\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"Agile II\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"38\\\\\\\",\\\\\\\"Desc:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Enemies gain +30% more AGI.\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Level:num\\\\\\\":\\\\\\\"+2\\\\\\\",\\\\\\\"Excludes:arraystr\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"Agile1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Agile3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Snail\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"ReqSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Effects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Params:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"Param0:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param1:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param2:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param3:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param4:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param5:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param6:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.30\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Param7:num\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1.00\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"XParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"SParams:struct\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"BattleStartStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"PassiveStates:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"EffectSwitch:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Affects\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"AffectsAllActors:eval\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"AffectsSpecificActors:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsSpecificClasses:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"AffectsAllEnemies:eval\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"AffectsSpecificEnemies:arraynum\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\"]\",\"VariableID:num\":\"0\",\"Rewards\":\"\",\"ExpRatePerLevel:num\":\"+0.20\",\"GoldRatePerLevel:num\":\"+0.25\",\"DropRatePerLevel:num\":\"+0.10\",\"ApRatePerLevel:num\":\"+0.15\",\"CpRatePerLevel:num\":\"+0.15\",\"JpRatePerLevel:num\":\"+0.15\",\"SpRatePerLevel:num\":\"+0.15\"}"]
 * 
 * @param Game
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @parent Game
 * @type struct<Mechanics>
 * @desc These settings let you adjust the mechanics used for this plugin.
 * @default {"adjustMaxHpMpChanges:eval":"true","allowNegativeLevel:eval":"true","negativeLevelRewardRate:num":"0.50","lowestRewardCap:num":"0.20"}
 * 
 * @param Scene
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @parent Scene
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Challenge.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @parent Scene
 * @type struct<Sound>
 * @desc These settings let you adjust the sound effects used for this plugin.
 * @default {"Danger":"","dangerName:str":"Attack2","dangerVolume:num":"90","dangerPitch:num":"100","dangerPan:num":"0","Safety":"","safetyName:str":"Barrier","safetyVolume:num":"90","safetyPitch:num":"100","safetyPan:num":"0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @parent Scene
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"Window_ChallengeLevel":"","displayDangerLevel:str":"Danger Level","displaySafetyLevel:str":"Safety Level","Window_ChallengeRewards":"","rewardsTitle:str":"Battle Rewards","rewardsDropRate:str":"Drop%","Window_ChallengeList":"","listDangerLevel:str":"Danger %1","listSafetyLevel:str":"Safety %1","ButtonAssist":"","buttonAssistReset:str":"Reset"}
 *
 * @param Window:struct
 * @text Window Settings
 * @parent Scene
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Window_ChallengeTitle":"","TitleWindow_BgType:num":"0","TitleWindow_Padding:num":"4","TitleWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ChallengeLevel":"","LevelWindow_BgType:num":"0","LevelNumber":"","LevelWindow_BaseFontSize:num":"100","LevelWindow_UpdateSize:eval":"true","LevelWindow_LevelModifier:num":"4","LevelWindow_MaxFontSize:num":"150","LevelWindow_NumbersFont:eval":"true","ListWindow_IconSmooth:eval":"false","LevelTextColor":"","LevelWindow_DangerColor:str":"2","LevelWindow_NeutralColor:str":"0","LevelWindow_SafetyColor:str":"24","LevelWindow_UpdateFreq:num":"4","LevelWindow_RectJS:func":"\"const ww = 352;\\nconst wh = this.calcWindowHeight(5, false);\\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\\nconst wy = this.mainAreaTop() + this.titleWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ChallengeRewards":"","RewardsWindow_BgType:num":"0","RewardsWindow_RewardsOrder:arraystr":"[\"exp\",\"ap\",\"cp\",\"jp\",\"sp\",\"gold\",\"items\"]","EXP_Icon:num":"87","Gold_Icon:num":"314","Drops_Icon:num":"176","RewardsWindow_RectJS:func":"\"const ww = this.levelWindowRect().width;\\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(5, false) - this.calcWindowHeight(1, false);\\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(5, false) + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ChallengeList":"","ListWindow_BgType:num":"0","ListWindow_Thickness:num":"3","ListTextColor":"","ListWindow_DangerColor:str":"2","ListWindow_SafetyColor:str":"24","ListNameColor":"","ListWindow_NormalEntry:num":"0","ListWindow_ExcludeEntry:num":"18","ListWindow_DangerEntry:num":"17","ListWindow_SafetyEntry:num":"24","ListWindow_RectJS:func":"\"const ww = Graphics.boxWidth - this.levelWindowRect().width;\\nconst wh = this.mainAreaHeight() - this.titleWindowRect().height;\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nconst wy = this.mainAreaTop() + this.titleWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * Challenge Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ChallengeSet:
 *
 * @param Name:str
 * @text Challenge Set ID
 * @desc What is the name ID of this Challenge Set?
 * This is used for <Challenge: name> notetag.
 * @default >>>NEEDS ATTENTION<<<
 *
 * @param Title:str
 * @text Display Title
 * @parent Name:str
 * @desc How does the Challenge Set title appear visually?
 * Text codes allowed.
 * @default \I[77]Challenge Set Title
 * 
 * @param TitleBgFilename:str
 * @text Title Background
 * @parent Name:str
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename of the background image displayed.
 * Image found in the game project's img/titles1/ folder.
 * @default 
 * 
 * @param Challenges
 *
 * @param ChallengeList:arraystruct
 * @text Challenge List
 * @parent Challenges
 * @type struct<Challenge>[]
 * @desc A list of challenges that can be selected for this challenge set.
 * @default []
 *
 * @param VariableID:num
 * @text Total Level Variable
 * @parent Challenges
 * @type variable
 * @desc What variable is used to record the total challenge level?
 * Insert 0 to not use this feature.
 * @default 0
 * 
 * @param Rewards
 * @text Rewards Per Level
 *
 * @param ExpRatePerLevel:num
 * @text EXP% Per Level
 * @parent Rewards
 * @desc EXP multiplier given per challenge level?
 * @default +0.20
 *
 * @param GoldRatePerLevel:num
 * @text Gold% Per Level
 * @parent Rewards
 * @desc Gold multiplier given per challenge level?
 * @default +0.25
 *
 * @param DropRatePerLevel:num
 * @text Drop Rate% Per Level
 * @parent Rewards
 * @desc Drop rate multiplier given per challenge level?
 * @default +0.10
 *
 * @param ApRatePerLevel:num
 * @text AP% Per Level
 * @parent Rewards
 * @desc AP rate multiplier given per challenge level?
 * Requires VisuMZ_2_SkillLearnSystem!
 * @default +0.15
 *
 * @param CpRatePerLevel:num
 * @text CP% Per Level
 * @parent Rewards
 * @desc CP rate multiplier given per challenge level?
 * Requires VisuMZ_2_ClassChangeSystem!
 * @default +0.15
 *
 * @param JpRatePerLevel:num
 * @text JP% Per Level
 * @parent Rewards
 * @desc JP rate multiplier given per challenge level?
 * Requires VisuMZ_2_ClassChangeSystem!
 * @default +0.15
 *
 * @param SpRatePerLevel:num
 * @text SP% Per Level
 * @parent Rewards
 * @desc AP rate multiplier given per challenge level?
 * Requires VisuMZ_2_SkillLearnSystem!
 * @default +0.15
 *
 */
/* ----------------------------------------------------------------------------
 * Challenge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Challenge:
 *
 * @param Name:str
 * @text Challenge Entry ID
 * @desc What is the name ID of this Challenge Entry?
 * This is used for "Not Used With" setting.
 * @default >>>NEEDS ATTENTION<<<
 *
 * @param Title:str
 * @text Display Name
 * @parent Name:str
 * @desc How does the Challenge Entry title appear visually?
 * Text codes allowed.
 * @default Challenge Entry Title
 *
 * @param Icon:num
 * @text Display Icon
 * @parent Name:str
 * @desc What icon should this Challenge Entry use?
 * @default 89
 *
 * @param Desc:json
 * @text Display Description
 * @parent Name:str
 * @type note
 * @desc A description of this Challenge Entry.
 * Appears under Display Name. Text codes allowed.
 * @default "Test1\nTest2"
 *
 * @param Level:num
 * @text Level Modifier
 * @parent Name:str
 * @desc How does this affect the total Challenge Level?
 * Positive: Danger. Negative: Safety.
 * @default +0
 *
 * @param Excludes:arraystr
 * @text Not Used With
 * @parent Name:str
 * @type string[]
 * @desc A list of Challenge Entries found in the same set
 * that cannot be used together with this Entry.
 * @default []
 *
 * @param ReqSwitch:num
 * @text Required Switch
 * @parent Name:str
 * @type switch
 * @desc If a Switch ID is used, this Challenge Entry only
 * appears if this Switch ID is ON.
 * @default 0
 * 
 * @param Effects
 *
 * @param Params:struct
 * @text Basic Parameters
 * @parent Effects
 * @type struct<Params>
 * @desc The basic parameter rates altered by this Entry.
 * The modifiers are multiplicative.
 * @default {}
 *
 * @param XParams:struct
 * @text X Parameters
 * @parent Effects
 * @type struct<XParams>
 * @desc The X parameter rates altered by this Entry.
 * The modifiers are additive.
 * @default {}
 *
 * @param SParams:struct
 * @text S Parameters
 * @parent Effects
 * @type struct<SParams>
 * @desc The S parameter rates altered by this Entry.
 * The modifiers are multiplicative.
 * @default {}
 *
 * @param BattleStartStates:arraynum
 * @text Battle Start States
 * @parent Effects
 * @type state[]
 * @desc A list of states that will be added onto the targets
 * at the start of battle if this is used.
 * @default []
 *
 * @param PassiveStates:arraynum
 * @text Passive States
 * @parent Effects
 * @type state[]
 * @desc A list of states that will be used as passives if this
 * Challenge Entry is used.
 * @default []
 *
 * @param EffectSwitch:num
 * @text Effect Switch
 * @parent Effects
 * @type switch
 * @desc If Challenge Entry is enabled, turn ON this switch.
 * Otherwise, turn OFF this switch.
 * @default 0
 * 
 * @param Affects
 * @text Affected Targets
 *
 * @param AffectsAllActors:eval
 * @text All Actors?
 * @parent Affects
 * @type boolean
 * @on Affect
 * @off No Effect
 * @desc Affect all actors with this Challenge Entry?
 * @default false
 *
 * @param AffectsSpecificActors:arraynum
 * @text Specific Actors
 * @parent AffectsAllActors:eval
 * @type actor[]
 * @desc A list of actors that this Challenge Entry specifically affects.
 * @default []
 *
 * @param AffectsSpecificClasses:arraynum
 * @text Specific Classes
 * @parent AffectsAllActors:eval
 * @type actor[]
 * @desc A list of classes that this Challenge Entry specifically affects.
 * @default []
 *
 * @param AffectsAllEnemies:eval
 * @text All Enemies?
 * @parent Affects
 * @type boolean
 * @on Affect
 * @off No Effect
 * @desc Affect all actors with this Challenge Entry?
 * @default false
 *
 * @param AffectsSpecificEnemies:arraynum
 * @text Specific Enemies
 * @parent AffectsAllEnemies:eval
 * @type actor[]
 * @desc A list of enemies that this Challenge Entry specifically affects.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Basic Parameters
 * ----------------------------------------------------------------------------
 */
/*~struct~Params:
 *
 * @param Param0:num
 * @text MaxHP Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param1:num
 * @text MaxMP Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param2:num
 * @text ATK Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param3:num
 * @text DEF Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param4:num
 * @text MAT Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param5:num
 * @text MDF Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param6:num
 * @text AGI Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param7:num
 * @text LUK Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * X Parameters
 * ----------------------------------------------------------------------------
 */
/*~struct~XParams:
 *
 * @param XParam0:num
 * @text HIT Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam1:num
 * @text EVA Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam2:num
 * @text CRI Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam3:num
 * @text CEV Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam4:num
 * @text MEV Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam5:num
 * @text MRF Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam6:num
 * @text CNT Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam7:num
 * @text HRG Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam8:num
 * @text MRG Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam9:num
 * @text TRG Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 */
/* ----------------------------------------------------------------------------
 * S Parameters
 * ----------------------------------------------------------------------------
 */
/*~struct~SParams:
 *
 * @param SParam0:num
 * @text TGR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam1:num
 * @text GRD Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam2:num
 * @text REC Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam3:num
 * @text PHA Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam4:num
 * @text MCR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam5:num
 * @text TCR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam6:num
 * @text PDR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam7:num
 * @text MDR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam8:num
 * @text FDR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam9:num
 * @text EXR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param adjustMaxHpMpChanges:eval
 * @text Adjust HP/MP
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences for changing Challenge Sets with MaxHP/MaxMP values.
 * @default true
 *
 * @param allowNegativeLevel:eval
 * @text Allow Safety Level
 * @type boolean
 * @on Allow
 * @off Danger Only
 * @desc Allow levels to go into the negatives for Safety Levels?
 * @default true
 *
 * @param negativeLevelRewardRate:num
 * @text Negative Rewards Rate
 * @parent allowNegativeLevel:eval
 * @desc Reduce penalty changes to battle rewards for Safety Level
 * by this multiplicative rate modifier.
 * @default 0.50
 *
 * @param lowestRewardCap:num
 * @text Lowest Reward Cap
 * @desc Absolute lowest reward cap that can be given out.
 * @default 0.20
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Danger
 * @text Danger Sound
 * 
 * @param dangerName:str
 * @text Filename
 * @parent Danger
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Attack2
 *
 * @param dangerVolume:num
 * @text Volume
 * @parent Danger
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param dangerPitch:num
 * @text Pitch
 * @parent Danger
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param dangerPan:num
 * @text Pan
 * @parent Danger
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Safety
 * @text Safety Sound
 * 
 * @param safetyName:str
 * @text Filename
 * @parent Safety
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Barrier
 *
 * @param safetyVolume:num
 * @text Volume
 * @parent Safety
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param safetyPitch:num
 * @text Pitch
 * @parent Safety
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param safetyPan:num
 * @text Pan
 * @parent Safety
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param Window_ChallengeLevel
 * @text Level Display Window
 *
 * @param displayDangerLevel:str
 * @text Danger Level
 * @parent Window_ChallengeLevel
 * @desc Text used for a positive level.
 * @default Danger Level
 *
 * @param displaySafetyLevel:str
 * @text Safety Level
 * @parent Window_ChallengeLevel
 * @desc Text used for a negative level.
 * @default Safety Level
 *
 * @param Window_ChallengeRewards
 * @text Rewards Display Window
 *
 * @param rewardsTitle:str
 * @text Display Title
 * @parent Window_ChallengeRewards
 * @desc Text used for this window's title.
 * @default Battle Rewards
 *
 * @param rewardsDropRate:str
 * @text Drop Rate
 * @parent Window_ChallengeRewards
 * @desc Text used to designate drop rate.
 * @default Drop%
 *
 * @param Window_ChallengeList
 * @text List Entry Window
 *
 * @param listDangerLevel:str
 * @text Danger Level Change
 * @parent Window_ChallengeList
 * @desc Indicate how much level change there is.
 * %1 - Level
 * @default Danger %1
 *
 * @param listSafetyLevel:str
 * @text Safety Level Change
 * @parent Window_ChallengeList
 * @desc Indicate how much level change there is.
 * %1 - Level
 * @default Safety %1
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistReset:str
 * @text Reset
 * @parent ButtonAssist
 * @desc Text used for a full Challenge Set reset.
 * @default Reset
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_ChallengeTitle
 * @text Title Display Window
 *
 * @param TitleWindow_BgType:num
 * @text Background Type
 * @parent Window_ChallengeTitle
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param TitleWindow_Padding:num
 * @text Padding
 * @parent Window_ChallengeTitle
 * @type number
 * @desc How much padding is used for this window?
 * @default 4
 *
 * @param TitleWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ChallengeTitle
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ChallengeLevel
 * @text Level Display Window
 *
 * @param LevelWindow_BgType:num
 * @text Background Type
 * @parent Window_ChallengeLevel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 * 
 * @param LevelNumber
 * @text Level Number Settings
 * @parent Window_ChallengeLevel
 *
 * @param LevelWindow_BaseFontSize:num
 * @text Base Font Size
 * @parent LevelNumber
 * @type number
 * @min 1
 * @desc What is the base font size for the level number?
 * @default 100
 *
 * @param LevelWindow_UpdateSize:eval
 * @text New Size Per Level?
 * @parent LevelNumber
 * @type boolean
 * @on Increase Per Level
 * @off Keep the Same
 * @desc Increase the size of the font per level?
 * @default true
 *
 * @param LevelWindow_LevelModifier:num
 * @text Level Modifier
 * @parent LevelWindow_UpdateSize:eval
 * @type number
 * @desc How much should font size increase per level?
 * @default 4
 *
 * @param LevelWindow_MaxFontSize:num
 * @text Max Font Size
 * @parent LevelWindow_UpdateSize:eval
 * @type number
 * @min 1
 * @desc What is the maximum font size that can be reached?
 * @default 150
 *
 * @param LevelWindow_NumbersFont:eval
 * @text Use Numbers Font?
 * @parent LevelNumber
 * @type boolean
 * @on Numbers Font
 * @off Main Font
 * @desc Use the damage numbers font for the number display?
 * @default true
 * 
 * @param LevelTextColor
 * @text Level Text Colors
 * @parent Window_ChallengeLevel
 *
 * @param LevelWindow_DangerColor:str
 * @text Danger Color
 * @parent LevelTextColor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param LevelWindow_NeutralColor:str
 * @text Neutral Color
 * @parent LevelTextColor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param LevelWindow_SafetyColor:str
 * @text Safety Color
 * @parent LevelTextColor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param LevelWindow_UpdateFreq:num
 * @text Update Frequency
 * @parent Window_ChallengeLevel
 * @type number
 * @min 1
 * @desc How often should this window update in frames?
 * @default 4
 *
 * @param LevelWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ChallengeLevel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = 352;\nconst wh = this.calcWindowHeight(5, false);\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\nconst wy = this.mainAreaTop() + this.titleWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ChallengeRewards
 * @text Rewards Display Window
 *
 * @param RewardsWindow_BgType:num
 * @text Background Type
 * @parent Window_ChallengeRewards
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param RewardsWindow_RewardsOrder:arraystr
 * @text Rewards Order
 * @parent Window_ChallengeRewards
 * @type select[]
 * @option EXP - Experience Points
 * @value exp
 * @option Gold - Gold Currency
 * @value gold
 * @option Drop Items - Enemy Drop Items
 * @value items
 * @option AP - For VisuMZ_2_SkillLearnSystem.js
 * @value ap
 * @option CP - For VisuMZ_2_ClassChangeSystem.js
 * @value cp
 * @option JP - For VisuMZ_2_ClassChangeSystem.js
 * @value jp
 * @option SP - For VisuMZ_2_SkillLearnSystem.js
 * @value sp
 * @desc What order do you want the rewards to appear in?
 * @default ["exp","ap","cp","jp","sp","gold","items"]
 *
 * @param EXP_Icon:num
 * @text Reward EXP Icon
 * @parent Window_ChallengeRewards
 * @desc Icon used for EXP reward.
 * @default 87
 *
 * @param Gold_Icon:num
 * @text Reward Gold Icon
 * @parent Window_ChallengeRewards
 * @desc Icon used for Gold reward.
 * @default 314
 *
 * @param Drops_Icon:num
 * @text Reward Drops Icon
 * @parent Window_ChallengeRewards
 * @desc Icon used for Drops reward.
 * @default 176
 *
 * @param RewardsWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ChallengeRewards
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.levelWindowRect().width;\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(5, false) - this.calcWindowHeight(1, false);\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(5, false) + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ChallengeList
 * @text List Entry Window
 *
 * @param ListWindow_BgType:num
 * @text Background Type
 * @parent Window_ChallengeList
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListWindow_IconSmooth:eval
 * @text Icon Smoothing?
 * @parent LevelNumber
 * @type boolean
 * @on Smooth Icon
 * @off Pixelated Icon
 * @desc Use a smooth icon for an extended icon size?
 * @default false
 *
 * @param ListWindow_Thickness:num
 * @text Thickness
 * @parent Window_ChallengeList
 * @type number
 * @min 1
 * @desc How many lines thick is each Challenge Entry?
 * @default 3
 * 
 * @param ListTextColor
 * @text Level Text Colors
 * @parent Window_ChallengeList
 *
 * @param ListWindow_DangerColor:str
 * @text Danger Color
 * @parent ListTextColor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param ListWindow_SafetyColor:str
 * @text Safety Color
 * @parent ListTextColor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 * 
 * @param ListNameColor
 * @text List Name Color
 * @parent Window_ChallengeList
 *
 * @param ListWindow_NormalEntry:num
 * @text Normal Entry
 * @parent ListNameColor
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 0
 *
 * @param ListWindow_ExcludeEntry:num
 * @text Excluded Entry
 * @parent ListNameColor
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 18
 *
 * @param ListWindow_DangerEntry:num
 * @text On Danger Entry
 * @parent ListNameColor
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 17
 *
 * @param ListWindow_SafetyEntry:num
 * @text On Safety Entry
 * @parent ListNameColor
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 24
 *
 * @param ListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ChallengeList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this.levelWindowRect().width;\nconst wh = this.mainAreaHeight() - this.titleWindowRect().height;\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nconst wy = this.mainAreaTop() + this.titleWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

function _0xf8aa(_0x177896,_0x21702e){const _0x10c9d0=_0x10c9();return _0xf8aa=function(_0xf8aa21,_0x14449f){_0xf8aa21=_0xf8aa21-0x17b;let _0xa9090f=_0x10c9d0[_0xf8aa21];return _0xa9090f;},_0xf8aa(_0x177896,_0x21702e);}const _0x197daa=_0xf8aa;(function(_0x43a278,_0x5cb0f5){const _0x3d72d3=_0xf8aa,_0x4fbfa9=_0x43a278();while(!![]){try{const _0x3e712b=parseInt(_0x3d72d3(0x295))/0x1*(-parseInt(_0x3d72d3(0x25c))/0x2)+-parseInt(_0x3d72d3(0x1a8))/0x3*(-parseInt(_0x3d72d3(0x25a))/0x4)+parseInt(_0x3d72d3(0x32f))/0x5*(parseInt(_0x3d72d3(0x2b8))/0x6)+parseInt(_0x3d72d3(0x1aa))/0x7*(parseInt(_0x3d72d3(0x31e))/0x8)+-parseInt(_0x3d72d3(0x297))/0x9*(parseInt(_0x3d72d3(0x287))/0xa)+-parseInt(_0x3d72d3(0x253))/0xb*(-parseInt(_0x3d72d3(0x2f7))/0xc)+-parseInt(_0x3d72d3(0x316))/0xd;if(_0x3e712b===_0x5cb0f5)break;else _0x4fbfa9['push'](_0x4fbfa9['shift']());}catch(_0x3f6546){_0x4fbfa9['push'](_0x4fbfa9['shift']());}}}(_0x10c9,0x750f8));var label=_0x197daa(0x2b1),tier=tier||0x0,dependencies=[_0x197daa(0x208),_0x197daa(0x2ca),_0x197daa(0x2fa)],pluginData=$plugins['filter'](function(_0x43de67){const _0x281f8c=_0x197daa;return _0x43de67[_0x281f8c(0x1f0)]&&_0x43de67[_0x281f8c(0x2d2)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x197daa(0x200)]||{},VisuMZ[_0x197daa(0x2dc)]=function(_0x36bd4b,_0x5b53bc){const _0x55d563=_0x197daa;for(const _0x1ea572 in _0x5b53bc){if(_0x55d563(0x26f)==='zoMpS')return _0x4f45f[_0x55d563(0x2b1)][_0x55d563(0x200)]['Window'][_0x55d563(0x2d8)][_0x55d563(0x310)](this);else{if(_0x1ea572[_0x55d563(0x25e)](/(.*):(.*)/i)){const _0xf7c373=String(RegExp['$1']),_0x1fc48e=String(RegExp['$2'])[_0x55d563(0x17d)]()[_0x55d563(0x257)]();let _0x4607de,_0x50aeb7,_0x3b0fb6;switch(_0x1fc48e){case'NUM':_0x4607de=_0x5b53bc[_0x1ea572]!==''?Number(_0x5b53bc[_0x1ea572]):0x0;break;case _0x55d563(0x2ee):_0x50aeb7=_0x5b53bc[_0x1ea572]!==''?JSON[_0x55d563(0x185)](_0x5b53bc[_0x1ea572]):[],_0x4607de=_0x50aeb7[_0x55d563(0x2e6)](_0x363402=>Number(_0x363402));break;case _0x55d563(0x315):_0x4607de=_0x5b53bc[_0x1ea572]!==''?eval(_0x5b53bc[_0x1ea572]):null;break;case _0x55d563(0x216):_0x50aeb7=_0x5b53bc[_0x1ea572]!==''?JSON['parse'](_0x5b53bc[_0x1ea572]):[],_0x4607de=_0x50aeb7[_0x55d563(0x2e6)](_0x9aa85b=>eval(_0x9aa85b));break;case _0x55d563(0x282):_0x4607de=_0x5b53bc[_0x1ea572]!==''?JSON[_0x55d563(0x185)](_0x5b53bc[_0x1ea572]):'';break;case _0x55d563(0x1c8):_0x50aeb7=_0x5b53bc[_0x1ea572]!==''?JSON['parse'](_0x5b53bc[_0x1ea572]):[],_0x4607de=_0x50aeb7[_0x55d563(0x2e6)](_0x49d221=>JSON[_0x55d563(0x185)](_0x49d221));break;case _0x55d563(0x1b4):_0x4607de=_0x5b53bc[_0x1ea572]!==''?new Function(JSON[_0x55d563(0x185)](_0x5b53bc[_0x1ea572])):new Function('return\x200');break;case'ARRAYFUNC':_0x50aeb7=_0x5b53bc[_0x1ea572]!==''?JSON[_0x55d563(0x185)](_0x5b53bc[_0x1ea572]):[],_0x4607de=_0x50aeb7['map'](_0x2d8dbf=>new Function(JSON[_0x55d563(0x185)](_0x2d8dbf)));break;case _0x55d563(0x2f9):_0x4607de=_0x5b53bc[_0x1ea572]!==''?String(_0x5b53bc[_0x1ea572]):'';break;case _0x55d563(0x1da):_0x50aeb7=_0x5b53bc[_0x1ea572]!==''?JSON[_0x55d563(0x185)](_0x5b53bc[_0x1ea572]):[],_0x4607de=_0x50aeb7[_0x55d563(0x2e6)](_0x52e769=>String(_0x52e769));break;case _0x55d563(0x322):_0x3b0fb6=_0x5b53bc[_0x1ea572]!==''?JSON[_0x55d563(0x185)](_0x5b53bc[_0x1ea572]):{},_0x4607de=VisuMZ[_0x55d563(0x2dc)]({},_0x3b0fb6);break;case _0x55d563(0x17f):_0x50aeb7=_0x5b53bc[_0x1ea572]!==''?JSON[_0x55d563(0x185)](_0x5b53bc[_0x1ea572]):[],_0x4607de=_0x50aeb7[_0x55d563(0x2e6)](_0x5c03a2=>VisuMZ[_0x55d563(0x2dc)]({},JSON[_0x55d563(0x185)](_0x5c03a2)));break;default:continue;}_0x36bd4b[_0xf7c373]=_0x4607de;}}}return _0x36bd4b;},(_0x18c119=>{const _0x4d6141=_0x197daa,_0x47e343=_0x18c119[_0x4d6141(0x218)];for(const _0x19c9c7 of dependencies){if(!Imported[_0x19c9c7]){alert(_0x4d6141(0x32d)['format'](_0x47e343,_0x19c9c7)),SceneManager[_0x4d6141(0x31f)]();break;}}const _0x247f34=_0x18c119[_0x4d6141(0x2d2)];if(_0x247f34['match'](/\[Version[ ](.*?)\]/i)){const _0x3e5025=Number(RegExp['$1']);_0x3e5025!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4d6141(0x304)](_0x47e343,_0x3e5025)),SceneManager[_0x4d6141(0x31f)]());}if(_0x247f34[_0x4d6141(0x25e)](/\[Tier[ ](\d+)\]/i)){if(_0x4d6141(0x2a7)!==_0x4d6141(0x2f4)){const _0x4e8b0f=Number(RegExp['$1']);_0x4e8b0f<tier?(alert(_0x4d6141(0x255)['format'](_0x47e343,_0x4e8b0f,tier)),SceneManager[_0x4d6141(0x31f)]()):tier=Math[_0x4d6141(0x1fe)](_0x4e8b0f,tier);}else this['_challengeLevel']=_0x232a2b,this['refresh']();}VisuMZ[_0x4d6141(0x2dc)](VisuMZ[label][_0x4d6141(0x200)],_0x18c119[_0x4d6141(0x2c2)]);})(pluginData);if(VisuMZ[_0x197daa(0x28b)][_0x197daa(0x1f6)]<1.7){let text='';text+=_0x197daa(0x243),text+='in\x20order\x20for\x20VisuMZ_2_ChallengeSystem\x20to\x20work.',alert(text),SceneManager[_0x197daa(0x31f)]();}if(VisuMZ[_0x197daa(0x28c)][_0x197daa(0x1f6)]<1.7){let text='';text+=_0x197daa(0x1b8),text+='in\x20order\x20for\x20VisuMZ_2_ChallengeSystem\x20to\x20work.',alert(text),SceneManager[_0x197daa(0x31f)]();}if(VisuMZ[_0x197daa(0x2b4)][_0x197daa(0x1f6)]<1.38){let text='';text+=_0x197daa(0x24a),text+=_0x197daa(0x1d5),alert(text),SceneManager[_0x197daa(0x31f)]();}PluginManager[_0x197daa(0x285)](pluginData[_0x197daa(0x218)],_0x197daa(0x300),_0x6de121=>{const _0xd0b4e5=_0x197daa;if(SceneManager['isSceneBattle']())return;if($gameParty['inBattle']())return;$gameSystem[_0xd0b4e5(0x20b)]('global'),$gameParty[_0xd0b4e5(0x2a1)]();}),PluginManager[_0x197daa(0x285)](pluginData[_0x197daa(0x218)],_0x197daa(0x1e2),_0x1183c3=>{const _0x621905=_0x197daa;if(SceneManager[_0x621905(0x213)]())return;if($gameParty[_0x621905(0x2ac)]())return;VisuMZ[_0x621905(0x2dc)](_0x1183c3,_0x1183c3);const _0x2e1c8f=(_0x1183c3[_0x621905(0x193)]||'')['toLowerCase']()[_0x621905(0x257)]();$gameSystem['resetChallengeEntries'](_0x2e1c8f),$gameParty[_0x621905(0x2a1)]();}),PluginManager[_0x197daa(0x285)](pluginData[_0x197daa(0x218)],'Scene_OpenChallengeMenu_Global',_0x2b79f8=>{const _0x4a28f9=_0x197daa;if(SceneManager[_0x4a28f9(0x213)]())return;if($gameParty['inBattle']())return;SceneManager[_0x4a28f9(0x2ed)](Scene_Challenge),SceneManager[_0x4a28f9(0x1df)]('global');}),PluginManager['registerCommand'](pluginData[_0x197daa(0x218)],_0x197daa(0x29e),_0x43d399=>{const _0x461cc5=_0x197daa;if(SceneManager[_0x461cc5(0x213)]())return;if($gameParty[_0x461cc5(0x2ac)]())return;VisuMZ[_0x461cc5(0x2dc)](_0x43d399,_0x43d399),SceneManager['push'](Scene_Challenge),SceneManager[_0x461cc5(0x1df)]((_0x43d399['SetName']||'')['toLowerCase']()['trim']());}),VisuMZ[_0x197daa(0x2b1)]['RegExp']={'ChallengeSets':/<CHALLENGE SET(?:|S):[ ](.*)>/gi,'NoGlobalChallenge':/<NO GLOBAL CHALLENGES>/i},VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x2c6)]=Scene_Boot[_0x197daa(0x1ea)]['onDatabaseLoaded'],Scene_Boot[_0x197daa(0x1ea)][_0x197daa(0x327)]=function(){const _0x21cb5d=_0x197daa;VisuMZ[_0x21cb5d(0x2b1)]['Scene_Boot_onDatabaseLoaded'][_0x21cb5d(0x310)](this),this[_0x21cb5d(0x2e4)]();},VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x2bd)]={},Scene_Boot['prototype'][_0x197daa(0x2e4)]=function(){const _0x546194=_0x197daa;this['process_VisuMZ_ChallengeSystem_AddSets'](),this[_0x546194(0x280)](),this[_0x546194(0x18b)](),this[_0x546194(0x1fa)]();},Scene_Boot[_0x197daa(0x1ea)][_0x197daa(0x275)]=function(){const _0x4d2de7=_0x197daa,_0xde5552=VisuMZ[_0x4d2de7(0x2b1)][_0x4d2de7(0x2bd)];_0xde5552[_0x4d2de7(0x1c6)]=JSON[_0x4d2de7(0x185)](JSON['stringify'](VisuMZ['ChallengeSystem'][_0x4d2de7(0x200)][_0x4d2de7(0x284)]));for(const _0x259e53 of VisuMZ[_0x4d2de7(0x2b1)]['Settings'][_0x4d2de7(0x1b1)]){const _0x4c6c82=_0x259e53[_0x4d2de7(0x2b9)][_0x4d2de7(0x26b)]()[_0x4d2de7(0x257)]();if(_0x4c6c82==='')continue;if(_0x4c6c82===_0x4d2de7(0x330))continue;_0xde5552[_0x4c6c82]=_0x259e53;}},Scene_Boot[_0x197daa(0x1ea)]['process_VisuMZ_ChallengeSystem_SetLowerCase']=function(){const _0x56b5e7=_0x197daa,_0x545756=VisuMZ[_0x56b5e7(0x2b1)]['ChallengeSet'];for(const _0x5b0752 in _0x545756){const _0x25ea95=_0x545756[_0x5b0752];_0x25ea95[_0x56b5e7(0x2b9)]=(_0x25ea95[_0x56b5e7(0x2b9)]||'')['toLowerCase']();const _0x58e6cd=_0x25ea95[_0x56b5e7(0x30d)];for(const _0x291dc1 of _0x58e6cd){_0x291dc1[_0x56b5e7(0x2b9)]=_0x291dc1[_0x56b5e7(0x2b9)][_0x56b5e7(0x26b)]()['trim'](),_0x291dc1[_0x56b5e7(0x202)]=_0x291dc1[_0x56b5e7(0x202)][_0x56b5e7(0x2e6)](_0x5a6729=>String(_0x5a6729)[_0x56b5e7(0x26b)]()[_0x56b5e7(0x257)]());}}},Scene_Boot[_0x197daa(0x1ea)][_0x197daa(0x18b)]=function(){const _0x4c60f5=_0x197daa;VisuMZ[_0x4c60f5(0x2b1)][_0x4c60f5(0x20a)]={};const _0x4a7b7c=VisuMZ[_0x4c60f5(0x2b1)]['ChallengeSet'];for(const _0x63b90c in _0x4a7b7c){if('FzNVD'==='FzNVD'){const _0x169fe1=_0x4a7b7c[_0x63b90c],_0x367106=_0x169fe1['ChallengeList'];for(const _0x204a13 of _0x367106){if(!_0x204a13[_0x4c60f5(0x331)])continue;const _0x2c23f3=_0x204a13[_0x4c60f5(0x331)],_0x40695f=_0x169fe1[_0x4c60f5(0x2b9)],_0x503c0d=_0x204a13[_0x4c60f5(0x2b9)];VisuMZ['ChallengeSystem'][_0x4c60f5(0x20a)][_0x2c23f3]=VisuMZ[_0x4c60f5(0x2b1)][_0x4c60f5(0x20a)][_0x2c23f3]||[],VisuMZ['ChallengeSystem'][_0x4c60f5(0x20a)][_0x2c23f3][_0x4c60f5(0x2ed)]({'setName':_0x40695f,'entryName':_0x503c0d});}}else{const _0x1b34c7=this['levelWindowRect'](),_0xc9f2d4=new _0x4efd3b(_0x1b34c7);_0xc9f2d4[_0x4c60f5(0x2f1)](this[_0x4c60f5(0x1e0)]()),this['addWindow'](_0xc9f2d4),this[_0x4c60f5(0x237)]=_0xc9f2d4,_0xc9f2d4[_0x4c60f5(0x230)](_0x154846['SETTINGS'][_0x4c60f5(0x1a2)]);}}},Scene_Boot[_0x197daa(0x1ea)][_0x197daa(0x1fa)]=function(){const _0x175903=_0x197daa;Imported['VisuMZ_2_ClassChangeSystem']&&(VisuMZ[_0x175903(0x2b1)][_0x175903(0x23c)]=Game_Enemy[_0x175903(0x1ea)]['classPoints'],Game_Enemy[_0x175903(0x1ea)]['classPoints']=function(){const _0x54ad69=_0x175903;let _0x593ed6=VisuMZ[_0x54ad69(0x2b1)][_0x54ad69(0x23c)][_0x54ad69(0x310)](this);const _0x4e6c97=$gameMap[_0x54ad69(0x269)]();for(const _0x1102c1 of _0x4e6c97){const _0x19752a=$gameSystem[_0x54ad69(0x2f2)](_0x1102c1),_0x1292ff=$gameSystem[_0x54ad69(0x2a9)](_0x1102c1),_0x41cb90=BattleManager[_0x54ad69(0x19f)]['lowestRewardCap'],_0x3dd2a8=0x1+_0x1292ff*_0x19752a[_0x54ad69(0x274)];_0x593ed6*=Math[_0x54ad69(0x1fe)](_0x41cb90,_0x3dd2a8);}return Math[_0x54ad69(0x1f5)](_0x593ed6);},VisuMZ[_0x175903(0x2b1)][_0x175903(0x2e8)]=Game_Enemy[_0x175903(0x1ea)]['jobPoints'],Game_Enemy['prototype'][_0x175903(0x2b5)]=function(){const _0x57943e=_0x175903;let _0x441b08=VisuMZ[_0x57943e(0x2b1)]['Game_Enemy_jobPoints']['call'](this);const _0x43863f=$gameMap[_0x57943e(0x269)]();for(const _0x3ab667 of _0x43863f){const _0x5a13b2=$gameSystem[_0x57943e(0x2f2)](_0x3ab667),_0x4ae83f=$gameSystem['getChallengeSetTotalLevel'](_0x3ab667),_0x5d91e8=BattleManager[_0x57943e(0x19f)][_0x57943e(0x211)],_0x580387=0x1+_0x4ae83f*_0x5a13b2['JpRatePerLevel'];_0x441b08*=Math[_0x57943e(0x1fe)](_0x5d91e8,_0x580387);}return Math[_0x57943e(0x1f5)](_0x441b08);}),Imported[_0x175903(0x205)]&&(VisuMZ[_0x175903(0x2b1)][_0x175903(0x1ae)]=Game_Enemy[_0x175903(0x1ea)][_0x175903(0x27c)],Game_Enemy[_0x175903(0x1ea)]['abilityPoints']=function(){const _0xed53e=_0x175903;let _0x1dff38=VisuMZ[_0xed53e(0x2b1)][_0xed53e(0x1ae)]['call'](this);const _0x7f46f3=$gameMap[_0xed53e(0x269)]();for(const _0x310350 of _0x7f46f3){const _0x4a353e=$gameSystem[_0xed53e(0x2f2)](_0x310350),_0x37a6b0=$gameSystem[_0xed53e(0x2a9)](_0x310350),_0x1cc403=BattleManager[_0xed53e(0x19f)]['lowestRewardCap'],_0x2a9493=0x1+_0x37a6b0*_0x4a353e[_0xed53e(0x267)];_0x1dff38*=Math[_0xed53e(0x1fe)](_0x1cc403,_0x2a9493);}return Math[_0xed53e(0x1f5)](_0x1dff38);},VisuMZ[_0x175903(0x2b1)][_0x175903(0x303)]=Game_Enemy[_0x175903(0x1ea)][_0x175903(0x32b)],Game_Enemy[_0x175903(0x1ea)][_0x175903(0x32b)]=function(){const _0x110b93=_0x175903;let _0xfe6b9e=VisuMZ['ChallengeSystem']['Game_Enemy_skillPoints']['call'](this);const _0x2eda90=$gameMap[_0x110b93(0x269)]();for(const _0x8f738c of _0x2eda90){if('EYkMn'!==_0x110b93(0x1a5)){const _0x581825=$gameSystem[_0x110b93(0x2f2)](_0x8f738c),_0x73fa0e=$gameSystem[_0x110b93(0x2a9)](_0x8f738c),_0x2caf78=BattleManager[_0x110b93(0x19f)][_0x110b93(0x211)],_0x3aaaa6=0x1+_0x73fa0e*_0x581825[_0x110b93(0x1e5)];_0xfe6b9e*=Math[_0x110b93(0x1fe)](_0x2caf78,_0x3aaaa6);}else{this[_0x110b93(0x328)]['clear']();const _0x3b640e=this[_0x110b93(0x1dc)](this[_0x110b93(0x299)]),_0x58e959=_0x471c41[_0x110b93(0x1c9)]((this[_0x110b93(0x240)]-_0x3b640e['width'])/0x2),_0x496102=_0x59b6a2[_0x110b93(0x1c9)]((this['innerHeight']-_0x3b640e[_0x110b93(0x1b9)])/0x2);this[_0x110b93(0x1ac)](this['_text'],_0x58e959,_0x496102);}}return Math[_0x110b93(0x1f5)](_0xfe6b9e);});},SoundManager[_0x197daa(0x1a0)]=function(){const _0x32f5c8=_0x197daa,_0x1e0db5=VisuMZ[_0x32f5c8(0x2b1)][_0x32f5c8(0x200)][_0x32f5c8(0x333)],_0x2e9423={'name':_0x1e0db5[_0x32f5c8(0x2c7)],'volume':_0x1e0db5['dangerVolume'],'pitch':_0x1e0db5[_0x32f5c8(0x29c)],'pan':_0x1e0db5[_0x32f5c8(0x27a)]};AudioManager[_0x32f5c8(0x24c)](_0x2e9423);},SoundManager[_0x197daa(0x1c2)]=function(){const _0x20a1be=_0x197daa,_0x4878c9=VisuMZ[_0x20a1be(0x2b1)][_0x20a1be(0x200)][_0x20a1be(0x333)],_0x2060e1={'name':_0x4878c9[_0x20a1be(0x22a)],'volume':_0x4878c9['safetyVolume'],'pitch':_0x4878c9[_0x20a1be(0x308)],'pan':_0x4878c9['safetyPan']};AudioManager[_0x20a1be(0x24c)](_0x2060e1);},TextManager['CHALLENGE_SYSTEM']={'displayDangerLevel':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x21e)]['displayDangerLevel']??_0x197daa(0x28d),'displaySafetyLevel':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x21e)]['displaySafetyLevel']??_0x197daa(0x283),'rewardsTitle':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x21e)][_0x197daa(0x2b3)]??_0x197daa(0x1a7),'rewardsDropRate':VisuMZ[_0x197daa(0x2b1)]['Settings'][_0x197daa(0x21e)][_0x197daa(0x239)]??_0x197daa(0x181),'listDangerLevel':VisuMZ[_0x197daa(0x2b1)]['Settings']['Vocab']['listDangerLevel']??_0x197daa(0x26a),'listSafetyLevel':VisuMZ['ChallengeSystem']['Settings'][_0x197daa(0x21e)][_0x197daa(0x1cd)]??_0x197daa(0x276),'buttonAssist':{'reset':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x21e)][_0x197daa(0x25b)]??_0x197daa(0x2c3)}},ColorManager['getColor']=function(_0x4b986a){const _0x37c8f3=_0x197daa;return _0x4b986a=String(_0x4b986a),_0x4b986a[_0x37c8f3(0x25e)](/#(.*)/i)?_0x37c8f3(0x17e)[_0x37c8f3(0x304)](String(RegExp['$1'])):this[_0x37c8f3(0x21b)](Number(_0x4b986a));},SceneManager[_0x197daa(0x213)]=function(){const _0x3b6a59=_0x197daa;return this[_0x3b6a59(0x323)]&&this[_0x3b6a59(0x323)][_0x3b6a59(0x1f9)]===Scene_Battle;},SceneManager[_0x197daa(0x30a)]=function(){const _0x230c79=_0x197daa;return this[_0x230c79(0x323)]&&this[_0x230c79(0x323)][_0x230c79(0x1f9)]===Scene_Map;},SceneManager[_0x197daa(0x29b)]=function(){const _0x450a9b=_0x197daa;return this['_scene']&&this[_0x450a9b(0x323)]instanceof Scene_Map;},BattleManager[_0x197daa(0x19f)]={'adjustMaxHpMpChanges':VisuMZ[_0x197daa(0x2b1)]['Settings'][_0x197daa(0x256)][_0x197daa(0x24b)]??!![],'allowNegativeLevel':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x256)][_0x197daa(0x2a0)]??!![],'negativeLevelRewardRate':VisuMZ[_0x197daa(0x2b1)]['Settings'][_0x197daa(0x256)][_0x197daa(0x2a0)]??0.5,'lowestRewardCap':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x256)][_0x197daa(0x211)]??0.2},VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x271)]=Game_System[_0x197daa(0x1ea)][_0x197daa(0x1e9)],Game_System['prototype'][_0x197daa(0x1e9)]=function(){const _0x1a1efa=_0x197daa;VisuMZ[_0x1a1efa(0x2b1)][_0x1a1efa(0x271)][_0x1a1efa(0x310)](this),this[_0x1a1efa(0x232)]();},Game_System[_0x197daa(0x1ea)][_0x197daa(0x232)]=function(){const _0x59689=_0x197daa;this[_0x59689(0x1db)]={};},Game_System[_0x197daa(0x1ea)][_0x197daa(0x2ab)]=function(){const _0x3c79b9=_0x197daa;if(this[_0x3c79b9(0x1db)]===undefined)this[_0x3c79b9(0x232)]();return this[_0x3c79b9(0x1db)];},Game_System[_0x197daa(0x1ea)][_0x197daa(0x32c)]=function(_0x5e1e0f){const _0x9d2fc4=_0x197daa;_0x5e1e0f=_0x5e1e0f[_0x9d2fc4(0x26b)]()[_0x9d2fc4(0x257)]();const _0x4b266a=this[_0x9d2fc4(0x2ab)]();return _0x4b266a[_0x5e1e0f]=_0x4b266a[_0x5e1e0f]||{'totalLevel':0x0,'enabled':[]},_0x4b266a[_0x5e1e0f];},Game_System[_0x197daa(0x1ea)]['getChallengeSetOnEntries']=function(_0x4513d7){const _0x31896e=_0x197daa;_0x4513d7=_0x4513d7[_0x31896e(0x26b)]()[_0x31896e(0x257)]();const _0x29c0ab=this['challengeSetSystemData'](_0x4513d7);return _0x29c0ab[_0x31896e(0x2aa)];},Game_System[_0x197daa(0x1ea)][_0x197daa(0x2a9)]=function(_0x408ba7){const _0x4f8e34=_0x197daa;_0x408ba7=_0x408ba7[_0x4f8e34(0x26b)]()[_0x4f8e34(0x257)]();const _0x1e7093=this[_0x4f8e34(0x32c)](_0x408ba7),_0x33c597=_0x1e7093[_0x4f8e34(0x2ae)];return BattleManager[_0x4f8e34(0x19f)][_0x4f8e34(0x2a0)]?_0x33c597:Math[_0x4f8e34(0x1fe)](0x0,_0x33c597);},Game_System['prototype'][_0x197daa(0x20d)]=function(_0xd120ae,_0x1d9a8c){const _0x387d07=_0x197daa;_0x1d9a8c=_0x1d9a8c[_0x387d07(0x26b)]()[_0x387d07(0x257)]();const _0x57f154=this['getChallengeSetOnEntries'](_0xd120ae);return _0x57f154[_0x387d07(0x2d6)](_0x1d9a8c);},Game_System[_0x197daa(0x1ea)][_0x197daa(0x2f2)]=function(_0x482cdd){const _0xd57bb6=_0x197daa;return _0x482cdd=_0x482cdd[_0xd57bb6(0x26b)]()[_0xd57bb6(0x257)](),VisuMZ[_0xd57bb6(0x2b1)][_0xd57bb6(0x2bd)][_0x482cdd];},Game_System[_0x197daa(0x1ea)]['getChallengeEntryData']=function(_0x1d28b0,_0x328ad0){const _0xccc395=_0x197daa,_0x29f892=this[_0xccc395(0x2f2)](_0x1d28b0);return _0x328ad0=_0x328ad0[_0xccc395(0x26b)]()[_0xccc395(0x257)](),_0x29f892[_0xccc395(0x30d)]['find'](_0x458a44=>_0x458a44[_0xccc395(0x2b9)]===_0x328ad0);},Game_System[_0x197daa(0x1ea)]['getAllCurrentChallengeEntriesData']=function(){const _0x2f3a9f=_0x197daa;if(!$gameMap)return[];const _0xa55cdc=[],_0x3c904f=$gameMap[_0x2f3a9f(0x269)]();for(const _0x413418 of _0x3c904f){if('ihoqS'===_0x2f3a9f(0x1ef))this['process_VisuMZ_ChallengeSystem_AddSets'](),this[_0x2f3a9f(0x280)](),this[_0x2f3a9f(0x18b)](),this[_0x2f3a9f(0x1fa)]();else{const _0x24e40d=this['getChallengeSetOnEntries'](_0x413418);for(const _0x20f0e8 of _0x24e40d){if(_0x2f3a9f(0x1bd)!==_0x2f3a9f(0x1bd)){if(_0x9a332c['ChallengeSystem'][_0x2f3a9f(0x200)]['Window'][_0x2f3a9f(0x2d3)])return _0x17f063[_0x2f3a9f(0x2b1)][_0x2f3a9f(0x200)]['Window'][_0x2f3a9f(0x2d3)][_0x2f3a9f(0x310)](this);const _0x45b024=0x160,_0x540756=this[_0x2f3a9f(0x1b3)](0x5,![]),_0x121fa6=this[_0x2f3a9f(0x1e3)]()?0x0:_0x2f6a02[_0x2f3a9f(0x22b)]-_0x45b024,_0x2475ea=this['mainAreaTop']()+this[_0x2f3a9f(0x1c5)]()['height'];return new _0x56e1c1(_0x121fa6,_0x2475ea,_0x45b024,_0x540756);}else{const _0x596524=this[_0x2f3a9f(0x189)](_0x413418,_0x20f0e8);if(_0x596524)_0xa55cdc['push'](_0x596524);}}}}return _0xa55cdc;},Game_System['prototype'][_0x197daa(0x20f)]=function(_0x2e21cf,_0x23020d){const _0x189214=_0x197daa;this[_0x189214(0x20d)](_0x2e21cf,_0x23020d)?this[_0x189214(0x301)](_0x2e21cf,_0x23020d):this[_0x189214(0x298)](_0x2e21cf,_0x23020d),this['recalculateChallengeLevel'](_0x2e21cf);},Game_System[_0x197daa(0x1ea)]['disableChallengeEntry']=function(_0x3e77cc,_0x5b317a){const _0x289a8d=_0x197daa,_0x22e78a=this[_0x289a8d(0x2e0)](_0x3e77cc);if(_0x22e78a[_0x289a8d(0x2d6)](_0x5b317a)){if('naJPz'!=='naJPz')this[_0x289a8d(0x301)](_0x39a5c2,_0x471c11);else{_0x22e78a[_0x289a8d(0x192)](_0x5b317a);const _0x5936d2=this[_0x289a8d(0x189)](_0x3e77cc,_0x5b317a);_0x5936d2[_0x289a8d(0x2d5)]&&$gameSwitches[_0x289a8d(0x2bb)](_0x5936d2[_0x289a8d(0x2d5)],![]);}}},Game_System[_0x197daa(0x1ea)][_0x197daa(0x298)]=function(_0x7fba93,_0x50afb2){const _0x391268=_0x197daa,_0x222d23=this['getChallengeSetOnEntries'](_0x7fba93);if(!_0x222d23['includes'](_0x50afb2)){if(_0x391268(0x242)===_0x391268(0x242)){_0x222d23[_0x391268(0x2ed)](_0x50afb2);const _0x4a00ff=this[_0x391268(0x189)](_0x7fba93,_0x50afb2);_0x4a00ff[_0x391268(0x2d5)]&&$gameSwitches['setValue'](_0x4a00ff[_0x391268(0x2d5)],!![]);}else return _0xa7b47f[_0x391268(0x2b1)][_0x391268(0x200)]['Window'][_0x391268(0x214)][_0x391268(0x310)](this);}this[_0x391268(0x1a3)](_0x7fba93,_0x50afb2);},Game_System['prototype'][_0x197daa(0x1a3)]=function(_0x3adc4f,_0x4615a7){const _0x143c49=_0x197daa,_0xb4ea86=this[_0x143c49(0x2e0)](_0x3adc4f),_0x5dab09=this[_0x143c49(0x189)](_0x3adc4f,_0x4615a7),_0x2fa36f=_0x5dab09[_0x143c49(0x202)];for(const _0x655ee4 of _0x2fa36f){if(_0x143c49(0x25d)==='jFeZw'){const _0x14311a=_0x32d910[_0x143c49(0x1fe)](_0x6e852c[_0x143c49(0x221)][_0x44d320],0x0);_0x3c1ce5*=_0x14311a;}else{if(_0x655ee4===_0x4615a7)continue;_0xb4ea86['includes'](_0x655ee4)&&this[_0x143c49(0x301)](_0x3adc4f,_0x655ee4);}}const _0x16f880=this[_0x143c49(0x2e0)](_0x3adc4f);for(const _0x3df1d0 of _0x16f880){if(_0x143c49(0x215)!=='AeMDr'){const _0x372f25=_0x2d58e1[_0x143c49(0x2f2)](_0x1c77d9),_0x217bb2=_0x1bc35e[_0x143c49(0x2a9)](_0x25dd63),_0x318a9b=_0x8f4120[_0x143c49(0x19f)]['lowestRewardCap'],_0x29c403=0x1+_0x217bb2*_0x372f25[_0x143c49(0x1e5)];_0x33dec7*=_0x518398[_0x143c49(0x1fe)](_0x318a9b,_0x29c403);}else{const _0x22d92e=this[_0x143c49(0x189)](_0x3adc4f,_0x3df1d0),_0x2b2f70=_0x22d92e[_0x143c49(0x202)];_0x2b2f70[_0x143c49(0x2d6)](_0x4615a7)&&(_0x143c49(0x31a)==='jihDH'?(this['contents']['gradientFillRect'](_0x5e1a36['x'],_0x3d2cea['y'],_0x3eb446,_0x50fa5f,_0x39ff81,_0x51ee1b),this[_0x143c49(0x328)][_0x143c49(0x1e1)](_0x5bf704['x']+_0x27a08f,_0x3ebb39['y'],_0x45f4d1,_0x3ed04b,_0x3c30dd,_0x140e47)):this[_0x143c49(0x301)](_0x3adc4f,_0x3df1d0));}}},Game_System['prototype'][_0x197daa(0x26c)]=function(_0x2a7dd6){const _0x24a977=_0x197daa;let _0x10dbe5=0x0;const _0x2901d8=this[_0x24a977(0x2e0)](_0x2a7dd6);for(const _0x3806da of _0x2901d8){if(_0x24a977(0x254)!==_0x24a977(0x2dd)){const _0x5b2c3b=this[_0x24a977(0x189)](_0x2a7dd6,_0x3806da);_0x10dbe5+=_0x5b2c3b[_0x24a977(0x2ad)]||0x0;}else{const _0x5ea2a5=_0x14a5f7(_0x3b150f['$1']);_0x5ea2a5!==_0x265b36[_0x4fc102][_0x24a977(0x1f6)]&&(_0x2e3ed3(_0x24a977(0x2cd)['format'](_0xbb70ec,_0x5ea2a5)),_0x24c960['exit']());}}const _0x1f0029=this[_0x24a977(0x32c)](_0x2a7dd6);_0x1f0029['totalLevel']=_0x10dbe5;const _0x22f42b=this[_0x24a977(0x2f2)](_0x2a7dd6);_0x22f42b[_0x24a977(0x2d4)]&&('kHONl'!==_0x24a977(0x1f1)?(_0x5a01d5[_0x24a977(0x228)](),_0x2e66cd['clear'](),_0x168f5b[_0x24a977(0x20b)](this['_challenge'][_0x24a977(0x2b9)]),this['refresh']()):$gameVariables[_0x24a977(0x2bb)](_0x22f42b['VariableID'],_0x1f0029[_0x24a977(0x2ae)]));},Game_System['prototype'][_0x197daa(0x20b)]=function(_0xc35c6e){const _0x47050a=_0x197daa,_0x41a062=this[_0x47050a(0x2e0)](_0xc35c6e)['slice']();for(const _0x3b6b5d of _0x41a062){this[_0x47050a(0x301)](_0xc35c6e,_0x3b6b5d);}this[_0x47050a(0x26c)](_0xc35c6e);},Game_System['prototype'][_0x197daa(0x1bf)]=function(){const _0x2a8899=_0x197daa;this[_0x2a8899(0x21f)](),this[_0x2a8899(0x293)]();},Game_System['prototype']['resetAllChallengeSwitches']=function(){const _0x508838=_0x197daa,_0x243b33=VisuMZ[_0x508838(0x2b1)][_0x508838(0x2bd)];for(let _0xd9e6c3 in _0x243b33){if(_0x508838(0x1de)==='MaMbK'){const _0x5cb017=_0x29ace5[_0x508838(0x2f5)],_0xce112f=_0x1a10b4[_0x508838(0x2fb)];if(_0x33045a['isChallengeEntryOn'](_0x5cb017,_0xce112f))return this[_0x508838(0x2d0)][_0x35b099]=!![],!![];}else{const _0x3bf5aa=_0x243b33[_0xd9e6c3],_0x44f705=_0x3bf5aa[_0x508838(0x30d)];for(const _0x56a615 of _0x44f705){if(_0x508838(0x24e)===_0x508838(0x24e)){const _0x450ae2=_0x56a615[_0x508838(0x2d5)]||0x0;if(_0x450ae2<=0x0)continue;const _0x3c3a30=_0x56a615[_0x508838(0x2b9)],_0x5da0b3=this[_0x508838(0x20d)](_0xd9e6c3,_0x3c3a30);$gameSwitches[_0x508838(0x2bb)](_0x450ae2,_0x5da0b3);}else this[_0x508838(0x2b6)]=_0x5dea7e;}}}},Game_System[_0x197daa(0x1ea)][_0x197daa(0x293)]=function(){const _0x4118a7=_0x197daa,_0x7b390c=VisuMZ[_0x4118a7(0x2b1)]['ChallengeSet'];for(let _0xcf79e1 in _0x7b390c){this[_0x4118a7(0x26c)](_0xcf79e1);}},VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x2ea)]=Game_Switches[_0x197daa(0x1ea)][_0x197daa(0x319)],Game_Switches[_0x197daa(0x1ea)]['value']=function(_0x485aa9){const _0x44c7c1=_0x197daa;if(this['isChallengeSystemSwitchOn'](_0x485aa9))return!![];return VisuMZ['ChallengeSystem'][_0x44c7c1(0x2ea)]['call'](this,_0x485aa9);},Game_Switches[_0x197daa(0x1ea)][_0x197daa(0x18d)]=function(_0x2647df){const _0x4c542d=_0x197daa;if(!VisuMZ['ChallengeSystem'][_0x4c542d(0x20a)])return![];if(!VisuMZ[_0x4c542d(0x2b1)]['ReqSwitches'][_0x2647df])return![];for(const _0x38b603 of VisuMZ[_0x4c542d(0x2b1)][_0x4c542d(0x20a)][_0x2647df]){const _0x12a915=_0x38b603[_0x4c542d(0x2f5)],_0x3bb762=_0x38b603[_0x4c542d(0x2fb)];if($gameSystem[_0x4c542d(0x20d)](_0x12a915,_0x3bb762))return this[_0x4c542d(0x2d0)][_0x2647df]=!![],!![];}return![];},Game_BattlerBase[_0x197daa(0x1ea)][_0x197daa(0x1b6)]=function(_0x3b6fc0){const _0x14423a=_0x197daa;if(!_0x3b6fc0)return![];if(this[_0x14423a(0x1fb)]()){if(_0x3b6fc0[_0x14423a(0x204)])return!![];if(_0x3b6fc0['AffectsSpecificActors'][_0x14423a(0x2d6)](this[_0x14423a(0x1d7)]))return!![];if(_0x3b6fc0[_0x14423a(0x196)][_0x14423a(0x2d6)](this[_0x14423a(0x1d2)]))return!![];}else{if(this[_0x14423a(0x261)]()){if(_0x3b6fc0[_0x14423a(0x249)])return!![];if(_0x3b6fc0[_0x14423a(0x312)][_0x14423a(0x2d6)](this[_0x14423a(0x1cf)]))return!![];}}return![];},VisuMZ[_0x197daa(0x2b1)]['Game_BattlerBase_paramRate']=Game_BattlerBase[_0x197daa(0x1ea)][_0x197daa(0x30f)],Game_BattlerBase[_0x197daa(0x1ea)][_0x197daa(0x30f)]=function(_0x2602e3){const _0x5ab3c9=_0x197daa;let _0x3597fd=VisuMZ['ChallengeSystem'][_0x5ab3c9(0x2d9)][_0x5ab3c9(0x310)](this,_0x2602e3);const _0x187bd3=$gameSystem[_0x5ab3c9(0x2eb)]();for(const _0x119dde of _0x187bd3){if(_0x5ab3c9(0x2c1)!==_0x5ab3c9(0x2c1)){const _0x5bd3d4=_0x54af05[_0x5ab3c9(0x326)];let _0xd2a544=_0x5bd3d4[_0x5ab3c9(0x1d3)]*_0x15a4d6['iconHeight'],_0x16b400=_0x4517eb['y']+_0x5577a3[_0x5ab3c9(0x1f5)]((_0x1e7452[_0x5ab3c9(0x1b9)]-_0xd2a544)/0x2),_0x4565e3=_0x46c54b['x']+_0x1720b6[_0x5ab3c9(0x1f5)]((_0x113468[_0x5ab3c9(0x1b9)]-_0xd2a544)/0x2);const _0x4029b5=_0x152d99[_0x5ab3c9(0x1f2)](_0x5ab3c9(0x332)),_0xdc5e91=_0x3214b7[_0x5ab3c9(0x2bf)],_0x10180a=_0x5c5fe5[_0x5ab3c9(0x2b2)],_0x130f2a=_0x37c07a%0x10*_0xdc5e91,_0x7e57fc=_0x117eea['floor'](_0x258860/0x10)*_0x10180a;this[_0x5ab3c9(0x328)][_0x5ab3c9(0x27d)][_0x5ab3c9(0x226)]=_0x5bd3d4[_0x5ab3c9(0x1bc)],this[_0x5ab3c9(0x328)][_0x5ab3c9(0x19c)](_0x4029b5,_0x130f2a,_0x7e57fc,_0xdc5e91,_0x10180a,_0x4565e3,_0x16b400,_0xd2a544,_0xd2a544),this[_0x5ab3c9(0x328)][_0x5ab3c9(0x27d)][_0x5ab3c9(0x226)]=!![];}else{if(!this[_0x5ab3c9(0x1b6)](_0x119dde))continue;const _0x35ecd7=_0x5ab3c9(0x260)[_0x5ab3c9(0x304)](_0x2602e3);if(_0x119dde[_0x5ab3c9(0x221)][_0x35ecd7]!==undefined){const _0x2b725a=Math[_0x5ab3c9(0x1fe)](_0x119dde['Params'][_0x35ecd7],0x0);_0x3597fd*=_0x2b725a;}}}return _0x3597fd;},VisuMZ['ChallengeSystem']['Game_BattlerBase_xparamRate']=Game_BattlerBase[_0x197daa(0x1ea)][_0x197daa(0x194)],Game_BattlerBase['prototype']['xparamRate']=function(_0xab4e7c){const _0xd44658=_0x197daa;let _0x1d13b9=VisuMZ[_0xd44658(0x2b1)][_0xd44658(0x187)][_0xd44658(0x310)](this,_0xab4e7c);const _0x1f8d23=$gameSystem[_0xd44658(0x2eb)]();for(const _0xa689bb of _0x1f8d23){if(!this[_0xd44658(0x1b6)](_0xa689bb))continue;const _0x1bf24d=_0xd44658(0x19a)[_0xd44658(0x304)](_0xab4e7c);if(_0xa689bb['XParams'][_0x1bf24d]!==undefined){const _0x35c9e5=_0xa689bb[_0xd44658(0x1ff)][_0x1bf24d];_0x1d13b9+=_0x35c9e5;}}return _0x1d13b9;},VisuMZ['ChallengeSystem'][_0x197daa(0x24f)]=Game_BattlerBase['prototype'][_0x197daa(0x1f4)],Game_BattlerBase[_0x197daa(0x1ea)][_0x197daa(0x1f4)]=function(_0x39c848){const _0x18955e=_0x197daa;let _0x405421=VisuMZ[_0x18955e(0x2b1)][_0x18955e(0x24f)][_0x18955e(0x310)](this,_0x39c848);const _0x53b52e=$gameSystem['getAllCurrentChallengeEntriesData']();for(const _0x350731 of _0x53b52e){if(_0x18955e(0x23f)!==_0x18955e(0x23f))_0xfd7c7d('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x18955e(0x304)](_0x58cf66,_0x178ac1,_0x5d630f)),_0x5e2117[_0x18955e(0x31f)]();else{if(!this[_0x18955e(0x1b6)](_0x350731))continue;const _0x429797=_0x18955e(0x2da)[_0x18955e(0x304)](_0x39c848);if(_0x350731[_0x18955e(0x302)][_0x429797]!==undefined){if(_0x18955e(0x335)===_0x18955e(0x335)){const _0xabae87=Math[_0x18955e(0x1fe)](_0x350731[_0x18955e(0x302)][_0x429797],0x0);_0x405421*=_0xabae87;}else this[_0x18955e(0x23a)]=new _0xcb35cd(_0x4d2119[_0x18955e(0x31c)](_0x4d0dab[_0x18955e(0x278)])),this[_0x18955e(0x26e)]=new _0x415518(_0x1d3a75['loadTitle2'](_0x1cd5ea['BgFilename2'])),this[_0x18955e(0x1a9)](this[_0x18955e(0x23a)]),this[_0x18955e(0x1a9)](this[_0x18955e(0x26e)]),this['_backSprite1'][_0x18955e(0x268)][_0x18955e(0x206)](this[_0x18955e(0x317)][_0x18955e(0x225)](this,this[_0x18955e(0x23a)])),this['_backSprite2'][_0x18955e(0x268)][_0x18955e(0x206)](this[_0x18955e(0x317)]['bind'](this,this[_0x18955e(0x26e)]));}}}return _0x405421;},VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x1ee)]=Game_BattlerBase['prototype']['addPassiveStatesFromOtherPlugins'],Game_BattlerBase[_0x197daa(0x1ea)][_0x197daa(0x28f)]=function(){const _0x2b1093=_0x197daa;VisuMZ[_0x2b1093(0x2b1)][_0x2b1093(0x1ee)][_0x2b1093(0x310)](this),this[_0x2b1093(0x265)]();},Game_BattlerBase[_0x197daa(0x1ea)]['addPassiveStatesFromChallengeEntries']=function(){const _0xa43cce=_0x197daa,_0x44c6a4=this[_0xa43cce(0x2cf)]['passiveStates'],_0x5bf87e=$gameSystem[_0xa43cce(0x2eb)]();for(const _0x44e753 of _0x5bf87e){if(!this[_0xa43cce(0x1b6)](_0x44e753))continue;const _0x498456=_0x44e753[_0xa43cce(0x23b)];for(const _0x2bb14b of _0x498456){_0x44c6a4[_0xa43cce(0x2ed)](_0x2bb14b);}}},VisuMZ[_0x197daa(0x2b1)]['Game_Battler_onBattleStart']=Game_Battler[_0x197daa(0x1ea)][_0x197daa(0x2a4)],Game_Battler['prototype'][_0x197daa(0x2a4)]=function(_0x1e4cbf){const _0x39d7c4=_0x197daa;VisuMZ[_0x39d7c4(0x2b1)]['Game_Battler_onBattleStart'][_0x39d7c4(0x310)](this,_0x1e4cbf),this[_0x39d7c4(0x318)]();},Game_Battler[_0x197daa(0x1ea)][_0x197daa(0x318)]=function(){const _0x16998d=_0x197daa,_0x3e02c3=$gameSystem[_0x16998d(0x2eb)]();for(const _0x3abfbe of _0x3e02c3){if(!this[_0x16998d(0x1b6)](_0x3abfbe))continue;const _0xb6874c=_0x3abfbe[_0x16998d(0x251)];for(const _0x9b4730 of _0xb6874c){_0x16998d(0x1ed)!==_0x16998d(0x1e6)?this[_0x16998d(0x1b7)](_0x9b4730):this['enableChallengeEntry'](_0x3225df,_0x47e3ce);}}},Game_Actor[_0x197daa(0x1ea)][_0x197daa(0x1a1)]=function(_0x212f7c){const _0x411770=_0x197daa;if(this['_tempActor'])return;if(!BattleManager['CHALLENGE_SYSTEM']['adjustMaxHpMpChanges'])return;const _0x4134f9=Math[_0x411770(0x250)](_0x212f7c[_0x411770(0x2a2)]()*this[_0x411770(0x201)]),_0x51f040=Math[_0x411770(0x250)](_0x212f7c[_0x411770(0x23d)]()*this[_0x411770(0x314)]);if(this['hp']>0x0)this[_0x411770(0x1e4)](_0x4134f9);if(this['mp']>0x0)this[_0x411770(0x209)](_0x51f040);},VisuMZ['ChallengeSystem']['Game_Enemy_exp']=Game_Enemy['prototype'][_0x197daa(0x2d7)],Game_Enemy[_0x197daa(0x1ea)][_0x197daa(0x2d7)]=function(){const _0x539544=_0x197daa;let _0x3d088c=VisuMZ[_0x539544(0x2b1)][_0x539544(0x2ef)][_0x539544(0x310)](this);const _0x44d057=$gameMap[_0x539544(0x269)]();for(const _0xe3d89 of _0x44d057){const _0x225392=$gameSystem[_0x539544(0x2f2)](_0xe3d89),_0x5a5780=$gameSystem['getChallengeSetTotalLevel'](_0xe3d89),_0x48fe2e=BattleManager[_0x539544(0x19f)][_0x539544(0x211)],_0x21db2f=0x1+_0x5a5780*_0x225392[_0x539544(0x272)];_0x3d088c*=Math[_0x539544(0x1fe)](_0x48fe2e,_0x21db2f);}return Math[_0x539544(0x1f5)](_0x3d088c);},VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x291)]=Game_Enemy[_0x197daa(0x1ea)]['gold'],Game_Enemy['prototype'][_0x197daa(0x20e)]=function(){const _0x3a6579=_0x197daa;let _0xaefd21=VisuMZ[_0x3a6579(0x2b1)]['Game_Enemy_gold']['call'](this);const _0x55eb0e=$gameMap[_0x3a6579(0x269)]();for(const _0x299234 of _0x55eb0e){const _0x56f577=$gameSystem[_0x3a6579(0x2f2)](_0x299234),_0x43c790=$gameSystem[_0x3a6579(0x2a9)](_0x299234),_0x4be6bb=BattleManager[_0x3a6579(0x19f)][_0x3a6579(0x211)],_0x17e02f=0x1+_0x43c790*_0x56f577[_0x3a6579(0x18c)];_0xaefd21*=Math['max'](_0x4be6bb,_0x17e02f);}return Math['ceil'](_0xaefd21);},VisuMZ['ChallengeSystem'][_0x197daa(0x1d9)]=Game_Enemy[_0x197daa(0x1ea)][_0x197daa(0x2fe)],Game_Enemy['prototype'][_0x197daa(0x2fe)]=function(){const _0x49b8fb=_0x197daa;let _0x30d7ee=VisuMZ[_0x49b8fb(0x2b1)]['Game_Enemy_dropItemRate']['call'](this);const _0x58cfd3=$gameMap[_0x49b8fb(0x269)]();for(const _0x5baccf of _0x58cfd3){if('azZBx'!==_0x49b8fb(0x313)){if(this[_0x49b8fb(0x1ec)])return;if(!_0x1b184e[_0x49b8fb(0x19f)][_0x49b8fb(0x24b)])return;const _0x5e0ae6=_0x2aacaa['round'](_0x2903fe[_0x49b8fb(0x2a2)]()*this['mhp']),_0x5e4f91=_0x1a2488['round'](_0x5cbddb[_0x49b8fb(0x23d)]()*this[_0x49b8fb(0x314)]);if(this['hp']>0x0)this[_0x49b8fb(0x1e4)](_0x5e0ae6);if(this['mp']>0x0)this[_0x49b8fb(0x209)](_0x5e4f91);}else{const _0x3edf10=$gameSystem[_0x49b8fb(0x2f2)](_0x5baccf),_0xec62a7=$gameSystem[_0x49b8fb(0x2a9)](_0x5baccf),_0x7ab58b=BattleManager[_0x49b8fb(0x19f)]['lowestRewardCap'],_0xe3885a=0x1+_0xec62a7*_0x3edf10[_0x49b8fb(0x2ba)];_0x30d7ee*=Math[_0x49b8fb(0x1fe)](_0x7ab58b,_0xe3885a);}}return _0x30d7ee;},VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x25f)]=Game_Player[_0x197daa(0x1ea)][_0x197daa(0x219)],Game_Player[_0x197daa(0x1ea)][_0x197daa(0x219)]=function(){const _0x2c46a3=_0x197daa;VisuMZ[_0x2c46a3(0x2b1)][_0x2c46a3(0x25f)]['call'](this),$gameSystem[_0x2c46a3(0x1bf)]();},Game_Party[_0x197daa(0x1ea)]['refreshMembersForChallengeUpdates']=function(){const _0x43e1d8=_0x197daa;for(const _0x1b14c7 of this['members']()){if(_0x43e1d8(0x30c)==='TbenS'){const _0x39cee9=JsonEx[_0x43e1d8(0x233)](_0x1b14c7);_0x39cee9[_0x43e1d8(0x1ec)]=!![],_0x1b14c7['refresh'](),_0x1b14c7[_0x43e1d8(0x2cf)]={},_0x1b14c7['challengeAdjustHpMp'](_0x39cee9);}else _0x54e043[_0x43e1d8(0x1ea)][_0x43e1d8(0x1e9)][_0x43e1d8(0x310)](this,_0x338fcf);}},VisuMZ['ChallengeSystem'][_0x197daa(0x231)]=Game_Map[_0x197daa(0x1ea)][_0x197daa(0x224)],Game_Map[_0x197daa(0x1ea)]['setup']=function(_0x78d231){const _0x116e44=_0x197daa;VisuMZ[_0x116e44(0x2b1)]['Game_Map_setup'][_0x116e44(0x310)](this,_0x78d231),this['setupChallengeSets'](),$gameParty[_0x116e44(0x2a1)]();},Game_Map['prototype'][_0x197daa(0x273)]=function(){const _0x3b5675=_0x197daa;this[_0x3b5675(0x245)]=[_0x3b5675(0x1c6)];const _0x57643f=VisuMZ['ChallengeSystem'][_0x3b5675(0x195)],_0x36f423=$dataMap?$dataMap['note']||'':'';if(_0x36f423[_0x3b5675(0x25e)](_0x57643f[_0x3b5675(0x26d)])){const _0x484e71=String(RegExp['$1'])[_0x3b5675(0x1cc)](',')[_0x3b5675(0x2e6)](_0x34ef71=>_0x34ef71[_0x3b5675(0x26b)]()[_0x3b5675(0x257)]());for(const _0x134c6f of _0x484e71){if(!!VisuMZ[_0x3b5675(0x2b1)][_0x3b5675(0x2bd)][_0x134c6f]){if(_0x3b5675(0x17b)==='dMFBE'){_0x1a3580=_0x217beb[_0x3b5675(0x26b)]()['trim']();const _0x34ae20=this[_0x3b5675(0x2e0)](_0x374772);return _0x34ae20[_0x3b5675(0x2d6)](_0x583898);}else this[_0x3b5675(0x245)][_0x3b5675(0x2ed)](_0x134c6f);}}}_0x36f423['match'](_0x57643f['NoGlobalChallenge'])&&this['_challengeSets'][_0x3b5675(0x192)](_0x3b5675(0x1c6));},Game_Map[_0x197daa(0x1ea)]['challengeSetsInEffect']=function(){const _0xfc190a=_0x197daa;if(this[_0xfc190a(0x245)]===undefined)this[_0xfc190a(0x273)]();return this[_0xfc190a(0x245)];};function Scene_Challenge(){const _0x22227b=_0x197daa;this[_0x22227b(0x1e9)](...arguments);}Scene_Challenge[_0x197daa(0x1ea)]=Object[_0x197daa(0x281)](Scene_MenuBase[_0x197daa(0x1ea)]),Scene_Challenge['prototype']['constructor']=Scene_Challenge,Scene_Challenge[_0x197daa(0x1ea)]['initialize']=function(){const _0x41e516=_0x197daa;Scene_MenuBase[_0x41e516(0x1ea)][_0x41e516(0x1e9)][_0x41e516(0x310)](this);},Scene_Challenge['prototype'][_0x197daa(0x1ba)]=function(_0x4e46c2){const _0xab1a3b=_0x197daa;this[_0xab1a3b(0x2a5)]=_0x4e46c2[_0xab1a3b(0x26b)]()[_0xab1a3b(0x257)]();},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x1e0)]=function(){const _0xe2bd2e=_0x197daa;return VisuMZ[_0xe2bd2e(0x2b1)][_0xe2bd2e(0x2bd)][this[_0xe2bd2e(0x2a5)]]||{};},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x28a)]=function(){return 0x0;},Scene_Challenge['prototype'][_0x197daa(0x281)]=function(){const _0x5f4d2d=_0x197daa;Scene_MenuBase[_0x5f4d2d(0x1ea)]['create'][_0x5f4d2d(0x310)](this),this['createTitleWindow'](),this[_0x5f4d2d(0x246)](),this[_0x5f4d2d(0x199)](),this[_0x5f4d2d(0x1a6)]();},Scene_Challenge[_0x197daa(0x1ea)]['createTitleWindow']=function(){const _0x1717b7=_0x197daa,_0x116617=this['titleWindowRect'](),_0xba64af=new Window_ChallengeTitle(_0x116617);_0xba64af[_0x1717b7(0x2f1)](this[_0x1717b7(0x1e0)]()),this[_0x1717b7(0x31d)](_0xba64af),this[_0x1717b7(0x2f0)]=_0xba64af,_0xba64af['setBackgroundType'](Window_ChallengeTitle[_0x1717b7(0x326)][_0x1717b7(0x1a2)]);},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x1c5)]=function(){const _0x46a939=_0x197daa;if(VisuMZ[_0x46a939(0x2b1)][_0x46a939(0x200)][_0x46a939(0x2b0)][_0x46a939(0x2d8)])return VisuMZ[_0x46a939(0x2b1)][_0x46a939(0x200)][_0x46a939(0x2b0)][_0x46a939(0x2d8)]['call'](this);const _0x332016=Graphics[_0x46a939(0x22b)],_0x47e95e=this[_0x46a939(0x1b3)](0x1,![]),_0x4fe1d1=0x0,_0x34aa02=this['mainAreaTop']();return new Rectangle(_0x4fe1d1,_0x34aa02,_0x332016,_0x47e95e);},Scene_Challenge[_0x197daa(0x1ea)]['createLevelWindow']=function(){const _0xbb751c=_0x197daa,_0x5a76ce=this[_0xbb751c(0x241)](),_0x472778=new Window_ChallengeLevel(_0x5a76ce);_0x472778[_0xbb751c(0x2f1)](this[_0xbb751c(0x1e0)]()),this[_0xbb751c(0x31d)](_0x472778),this[_0xbb751c(0x237)]=_0x472778,_0x472778[_0xbb751c(0x230)](Window_ChallengeLevel['SETTINGS']['bgType']);},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x241)]=function(){const _0x1859b6=_0x197daa;if(VisuMZ[_0x1859b6(0x2b1)][_0x1859b6(0x200)][_0x1859b6(0x2b0)][_0x1859b6(0x2d3)])return VisuMZ['ChallengeSystem'][_0x1859b6(0x200)]['Window']['LevelWindow_RectJS'][_0x1859b6(0x310)](this);const _0x2a0250=0x160,_0x4dfa9a=this[_0x1859b6(0x1b3)](0x5,![]),_0x192ac0=this[_0x1859b6(0x1e3)]()?0x0:Graphics[_0x1859b6(0x22b)]-_0x2a0250,_0x4d5f50=this[_0x1859b6(0x1ce)]()+this[_0x1859b6(0x1c5)]()[_0x1859b6(0x1b9)];return new Rectangle(_0x192ac0,_0x4d5f50,_0x2a0250,_0x4dfa9a);},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x199)]=function(){const _0x2194b4=_0x197daa,_0x248ad4=this[_0x2194b4(0x29a)](),_0x2e5376=new Window_ChallengeRewards(_0x248ad4);_0x2e5376[_0x2194b4(0x2f1)](this[_0x2194b4(0x1e0)]()),this[_0x2194b4(0x237)][_0x2194b4(0x1b2)](_0x2e5376),this[_0x2194b4(0x31d)](_0x2e5376),this[_0x2194b4(0x22e)]=_0x2e5376,_0x2e5376['setBackgroundType'](Window_ChallengeRewards[_0x2194b4(0x326)][_0x2194b4(0x1a2)]);},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x29a)]=function(){const _0xa7d80f=_0x197daa;if(VisuMZ[_0xa7d80f(0x2b1)][_0xa7d80f(0x200)][_0xa7d80f(0x2b0)][_0xa7d80f(0x2be)])return VisuMZ[_0xa7d80f(0x2b1)][_0xa7d80f(0x200)][_0xa7d80f(0x2b0)][_0xa7d80f(0x2be)][_0xa7d80f(0x310)](this);const _0x40ac18=this[_0xa7d80f(0x241)]()[_0xa7d80f(0x2c8)],_0x580bee=this[_0xa7d80f(0x188)]()-this[_0xa7d80f(0x1b3)](0x5,![])-this[_0xa7d80f(0x1b3)](0x1,![]),_0x38f1de=this['isRightInputMode']()?0x0:Graphics['boxWidth']-_0x40ac18,_0x3fb9e9=this[_0xa7d80f(0x1ce)]()+this[_0xa7d80f(0x1b3)](0x5,![])+this[_0xa7d80f(0x1b3)](0x1,![]);return new Rectangle(_0x38f1de,_0x3fb9e9,_0x40ac18,_0x580bee);},Scene_Challenge['prototype'][_0x197daa(0x1a6)]=function(){const _0x5f30a4=_0x197daa,_0x5b8fcb=this[_0x5f30a4(0x290)](),_0x4fe314=new Window_ChallengeList(_0x5b8fcb);_0x4fe314[_0x5f30a4(0x2f1)](this[_0x5f30a4(0x1e0)]()),_0x4fe314[_0x5f30a4(0x279)]('challenge',this[_0x5f30a4(0x22c)]['bind'](this)),_0x4fe314['setHandler'](_0x5f30a4(0x19d),this[_0x5f30a4(0x2af)][_0x5f30a4(0x225)](this)),this[_0x5f30a4(0x31d)](_0x4fe314),this[_0x5f30a4(0x229)]=_0x4fe314,_0x4fe314[_0x5f30a4(0x230)](Window_ChallengeList[_0x5f30a4(0x326)][_0x5f30a4(0x1a2)]);},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x290)]=function(){const _0x3faff0=_0x197daa;if(VisuMZ[_0x3faff0(0x2b1)][_0x3faff0(0x200)][_0x3faff0(0x2b0)][_0x3faff0(0x214)])return VisuMZ[_0x3faff0(0x2b1)]['Settings'][_0x3faff0(0x2b0)][_0x3faff0(0x214)][_0x3faff0(0x310)](this);const _0xd28a17=Graphics['boxWidth']-this[_0x3faff0(0x241)]()['width'],_0x2f7349=this[_0x3faff0(0x188)]()-this[_0x3faff0(0x1c5)]()[_0x3faff0(0x1b9)],_0x59dfcd=this[_0x3faff0(0x1e3)]()?Graphics[_0x3faff0(0x22b)]-_0xd28a17:0x0,_0x524bdb=this['mainAreaTop']()+this['titleWindowRect']()[_0x3faff0(0x1b9)];return new Rectangle(_0x59dfcd,_0x524bdb,_0xd28a17,_0x2f7349);},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x2af)]=function(){const _0x1745e8=_0x197daa;$gameParty[_0x1745e8(0x2a1)](),this[_0x1745e8(0x217)]();},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x22c)]=function(){const _0x4f4ea3=_0x197daa,_0x5150a9=this['_listWindow'][_0x4f4ea3(0x1af)](),_0x2a7422=this['challengeSet']()[_0x4f4ea3(0x2b9)],_0x165f84=_0x5150a9[_0x4f4ea3(0x2b9)];$gameSystem[_0x4f4ea3(0x20f)](_0x2a7422,_0x165f84),this[_0x4f4ea3(0x229)][_0x4f4ea3(0x1eb)](),this[_0x4f4ea3(0x229)]['activate']();},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x190)]=function(){const _0x34aa3b=_0x197daa;if(this[_0x34aa3b(0x1e0)]()&&$gameSystem[_0x34aa3b(0x2e0)](this[_0x34aa3b(0x1e0)]()['Name'])[_0x34aa3b(0x2e2)]>0x0){if(_0x34aa3b(0x2a3)!=='UrVhJ'){if(this[_0x34aa3b(0x1db)]===_0xa68053)this[_0x34aa3b(0x232)]();return this[_0x34aa3b(0x1db)];}else return TextManager[_0x34aa3b(0x277)](_0x34aa3b(0x2e5));}else return'';},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x307)]=function(){const _0x2ab485=_0x197daa;return TextManager['CHALLENGE_SYSTEM'][_0x2ab485(0x296)][_0x2ab485(0x263)];},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x30b)]=function(){const _0x58489f=_0x197daa;Scene_MenuBase['prototype'][_0x58489f(0x30b)][_0x58489f(0x310)](this),this[_0x58489f(0x197)](this[_0x58489f(0x1cb)]()),this[_0x58489f(0x23e)]();},Scene_Challenge[_0x197daa(0x1ea)]['getBackgroundOpacity']=function(){const _0x14d0fc=_0x197daa;return VisuMZ[_0x14d0fc(0x2b1)]['Settings'][_0x14d0fc(0x309)]['SnapshotOpacity'];},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x23e)]=function(){const _0xecaba5=_0x197daa,_0x4db0b1=VisuMZ[_0xecaba5(0x2b1)][_0xecaba5(0x200)][_0xecaba5(0x309)];_0x4db0b1&&(_0x4db0b1[_0xecaba5(0x278)]!==''||_0x4db0b1['BgFilename2']!=='')&&(this['_backSprite1']=new Sprite(ImageManager['loadTitle1'](_0x4db0b1[_0xecaba5(0x278)])),this[_0xecaba5(0x26e)]=new Sprite(ImageManager[_0xecaba5(0x2e9)](_0x4db0b1[_0xecaba5(0x321)])),this[_0xecaba5(0x1a9)](this['_backSprite1']),this[_0xecaba5(0x1a9)](this['_backSprite2']),this[_0xecaba5(0x23a)]['bitmap']['addLoadListener'](this[_0xecaba5(0x317)][_0xecaba5(0x225)](this,this[_0xecaba5(0x23a)])),this[_0xecaba5(0x26e)][_0xecaba5(0x268)][_0xecaba5(0x206)](this[_0xecaba5(0x317)]['bind'](this,this['_backSprite2'])));},Scene_Challenge[_0x197daa(0x1ea)][_0x197daa(0x317)]=function(_0x4ca136){const _0x29bc93=_0x197daa;this[_0x29bc93(0x2cb)](_0x4ca136),this[_0x29bc93(0x2de)](_0x4ca136);};function _0x10c9(){const _0x4e475f=['rewardsDropRate','_backSprite1','PassiveStates','Game_Enemy_classPoints','mpRate','createCustomBackgroundImages','hEgoi','innerWidth','levelWindowRect','MBXUJ','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','processShiftResetShortcut','_challengeSets','createLevelWindow','IrLrn','LevelWindow_UpdateSize','AffectsAllEnemies','VisuMZ_1_SkillsStatesCore\x20needs\x20to\x20be\x20updated\x20','adjustMaxHpMpChanges','playSe','LevelWindow_BaseFontSize','NYIEI','Game_BattlerBase_sparamRate','round','BattleStartStates','lineHeight','2226708RkMDPR','kDnag','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Mechanics','trim','powerDownColor','makeCommandList','35224NMdqzX','buttonAssistReset','8HdMlem','nHqFM','match','Game_Player_requestMapReload','Param%1','isEnemy','isEntryEnabled','reset','drawFadedItemBackground','addPassiveStatesFromChallengeEntries','numbersFont','ApRatePerLevel','bitmap','challengeSetsInEffect','Danger\x20%1','toLowerCase','recalculateChallengeLevel','ChallengeSets','_backSprite2','QewHE','ITOgh','Game_System_initialize','ExpRatePerLevel','setupChallengeSets','CpRatePerLevel','process_VisuMZ_ChallengeSystem_AddSets','Safety\x20%1','getInputButtonString','BgFilename1','setHandler','dangerPan','setLevel','abilityPoints','_context','ubdJL','lunpi','process_VisuMZ_ChallengeSystem_SetLowerCase','create','JSON','Safety\x20Level','Global','registerCommand','EFsmc','750KbySMS','excludeEntryColor','changePaintOpacity','helpAreaHeight','CoreEngine','BattleCore','Danger\x20Level','changeTextColor','addPassiveStatesFromOtherPlugins','listWindowRect','Game_Enemy_gold','_challengeLevel','resetAllChallengeVariables','drawBigIcon','82328Hqdkfb','buttonAssist','71190mWSrLv','enableChallengeEntry','_text','rewardsWindowRect','isInstanceOfSceneMap','dangerPitch','checkShiftResetShortcut','Scene_OpenChallengeMenu_LocalSet','Icon','allowNegativeLevel','refreshMembersForChallengeUpdates','hpRate','UrVhJ','onBattleStart','_challengeSetKey','LevelWindow_BgType','VKISV','RewardsWindow_RewardsOrder','getChallengeSetTotalLevel','enabled','challengeSystemData','inBattle','Level','totalLevel','onListCancel','Window','ChallengeSystem','iconHeight','rewardsTitle','SkillsStatesCore','jobPoints','_challenge','EXP_Icon','6ocIlcT','Name','DropRatePerLevel','setValue','_clientArea','ChallengeSet','RewardsWindow_RectJS','iconWidth','displayDangerLevel','eNMlM','parameters','Reset','items','TitleWindow_BgType','Scene_Boot_onDatabaseLoaded','dangerName','width','abs','VisuMZ_1_BattleCore','scaleSprite','update','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','setBackgroundImage','_cache','_data','_currentLevel','description','LevelWindow_RectJS','VariableID','EffectSwitch','includes','exp','TitleWindow_RectJS','Game_BattlerBase_paramRate','SParam%1','dimColor2','ConvertParams','KCkuq','centerSprite','LevelWindow_MaxFontSize','getChallengeSetOnEntries','itemRect','length','drawEntryDescription','process_VisuMZ_ChallengeSystem','shift','map','right','Game_Enemy_jobPoints','loadTitle2','Game_Switches_value','getAllCurrentChallengeEntriesData','LevelWindow_DangerColor','push','ARRAYNUM','Game_Enemy_exp','_titleWindow','setChallenge','getChallengeSetData','replace','NnMWL','setName','powerUpColor','12Ksgfiq','isEntryExcluded','STR','VisuMZ_1_SkillsStatesCore','entryName','aAvdR','ext','dropItemRate','adjustFontSizeByLevel','Reset_GlobalChallenges','disableChallengeEntry','SParams','Game_Enemy_skillPoints','format','itemPadding','INsJM','buttonAssistText3','safetyPitch','BgSettings','isSceneMap','createBackground','TbenS','ChallengeList','padding','paramRate','call','neutralColor','AffectsSpecificEnemies','azZBx','mmp','EVAL','4611022EPlfsz','adjustSprite','addChallengeSystemBattleStartStates','value','rMXUQ','jtdbR','loadTitle1','addWindow','2038104Huykgn','exit','_list','BgFilename2','STRUCT','_scene','updateFrequency','fontFace','SETTINGS','onDatabaseLoaded','contents','systemColor','LevelWindow_LevelModifier','skillPoints','challengeSetSystemData','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Gold_Icon','912025FWDgum','>>>needs\x20attention<<<','ReqSwitch','IconSet','Sound','ListWindow_NormalEntry','FTHMw','qmHDd','classPointsAbbr','toUpperCase','#%1','ARRAYSTRUCT','expIcon','Drop%','frameCount','drawEntryDangerLevel','abilityPointsIcon','parse','itemHeight','Game_BattlerBase_xparamRate','mainAreaHeight','getChallengeEntryData','nTbkW','process_VisuMZ_ChallengeSystem_ReqSwitches','GoldRatePerLevel','isChallengeSystemSwitchOn','getColor','isTriggered','buttonAssistKey3','dropsIcon','remove','SetName','xparamRate','RegExp','AffectsSpecificClasses','setBackgroundOpacity','center','createRewardsWindow','XParam%1','Title','blt','cancel','levelFontSize','CHALLENGE_SYSTEM','playChallengeDangerEntry','challengeAdjustHpMp','bgType','removeChallengeEntryExclusives','displaySafetyLevel','fBpbv','createListWindow','Battle\x20Rewards','207ecXiyd','addChild','21WlwFRk','drawText','drawTextEx','JpRatePerLevel','Game_Enemy_abilityPoints','currentExt','isShiftResetShortcutEnabled','Local','setRewardsWindow','calcWindowHeight','FUNC','TitleBgFilename','isChallengeEntryAffected','addState','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','height','prepare','drawItem','iconSmoothing','lOufA','numberFontFace','mapReloadAllChallenges','\x5cC[%1]%2','min','playChallengeSafetyEntry','ListWindow_BgType','currencyUnit','titleWindowRect','global','listDangerLevel','ARRAYJSON','floor','addInnerChild','getBackgroundOpacity','split','listSafetyLevel','mainAreaTop','_enemyId','ListWindow_SafetyEntry','dangerColor','_classId','lineThickness','normalColor','in\x20order\x20for\x20VisuMZ_2_ChallengeSystem\x20to\x20work.','drawEntry','_actorId','LevelWindow_NumbersFont','Game_Enemy_dropItemRate','ARRAYSTR','_challengeSystem','textSizeEx','LevelWindow_SafetyColor','TYNBg','prepareNextScene','challengeSet','gradientFillRect','Reset_GlobalLocalSet','isRightInputMode','setHp','SpRatePerLevel','zrwSS','bFxZJ','safetyColor','initialize','prototype','refresh','_tempActor','wOcmA','Game_BattlerBase_addPassiveStatesFromOtherPlugins','mjcfy','status','kHONl','loadSystem','Desc','sparamRate','ceil','version','LevelWindow_NeutralColor','JFoHl','constructor','process_VisuMZ_ChallengeSystem_Compatibility','isActor','goldIcon','clear','max','XParams','Settings','mhp','Excludes','ListWindow_SafetyColor','AffectsAllActors','VisuMZ_2_SkillLearnSystem','addLoadListener','resetFontSettings','VisuMZ_0_CoreEngine','setMp','ReqSwitches','resetChallengeEntries','processCursorMove','isChallengeEntryOn','gold','toggleChallengeEntry','playOkSound','lowestRewardCap','processBackgroundImage','isSceneBattle','ListWindow_RectJS','AeMDr','ARRAYEVAL','popScene','name','requestMapReload','fontSize','textColor','jobPointsAbbr','canShowEntry','Vocab','resetAllChallengeSwitches','ListWindow_ExcludeEntry','Params','drawIcon','RewardsWindow_BgType','setup','bind','imageSmoothingEnabled','VisuMZ_2_ClassChangeSystem','playCancel','_listWindow','safetyName','boxWidth','onListOk','jobPointsIcon','_rewardsWindow','classPointsIcon','setBackgroundType','Game_Map_setup','initChallengeSystem','makeDeepCopy','dimColor1','negativeLevelRewardRate','ListWindow_DangerEntry','_levelWindow','innerHeight'];_0x10c9=function(){return _0x4e475f;};return _0x10c9();}function Window_ChallengeTitle(){const _0xee3888=_0x197daa;this[_0xee3888(0x1e9)](...arguments);}Window_ChallengeTitle[_0x197daa(0x1ea)]=Object[_0x197daa(0x281)](Window_Base[_0x197daa(0x1ea)]),Window_ChallengeTitle[_0x197daa(0x1ea)][_0x197daa(0x1f9)]=Window_ChallengeTitle,Window_ChallengeTitle[_0x197daa(0x326)]={'bgType':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x2c5)]??0x0,'padding':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)]['TitleWindow_Padding']??0x4},Window_ChallengeTitle[_0x197daa(0x1ea)]['initialize']=function(_0x42e27d){const _0x3cb45d=_0x197daa;Window_Base[_0x3cb45d(0x1ea)][_0x3cb45d(0x1e9)]['call'](this,_0x42e27d),this['_text']='';},Window_ChallengeTitle[_0x197daa(0x1ea)]['updatePadding']=function(){const _0x52ba57=_0x197daa;this[_0x52ba57(0x30e)]=Window_ChallengeTitle['SETTINGS'][_0x52ba57(0x30e)];},Window_ChallengeTitle['prototype'][_0x197daa(0x2f1)]=function(_0x2c612b){const _0x12bf7d=_0x197daa;this[_0x12bf7d(0x299)]=_0x2c612b[_0x12bf7d(0x19b)]||'',this[_0x12bf7d(0x1eb)](),this['setBackgroundImage'](_0x2c612b[_0x12bf7d(0x1b5)]||'');},Window_ChallengeTitle[_0x197daa(0x1ea)][_0x197daa(0x1eb)]=function(){const _0x44c191=_0x197daa;this[_0x44c191(0x328)][_0x44c191(0x1fd)]();const _0x4e202d=this[_0x44c191(0x1dc)](this[_0x44c191(0x299)]),_0x91a71=Math[_0x44c191(0x1c9)]((this['innerWidth']-_0x4e202d[_0x44c191(0x2c8)])/0x2),_0x13d095=Math[_0x44c191(0x1c9)]((this[_0x44c191(0x238)]-_0x4e202d['height'])/0x2);this[_0x44c191(0x1ac)](this[_0x44c191(0x299)],_0x91a71,_0x13d095);},Window_ChallengeTitle['prototype'][_0x197daa(0x2ce)]=function(_0x37ceda){const _0x2e48c2=_0x197daa;if(_0x37ceda[_0x2e48c2(0x257)]()==='')return;const _0x1db9f4=ImageManager[_0x2e48c2(0x31c)](_0x37ceda);_0x1db9f4[_0x2e48c2(0x206)](this[_0x2e48c2(0x212)]['bind'](this,_0x1db9f4));},Window_ChallengeTitle[_0x197daa(0x1ea)][_0x197daa(0x212)]=function(_0x58fce7){const _0x253677=_0x197daa,_0x43741e=new Sprite();_0x43741e['bitmap']=_0x58fce7,_0x43741e['anchor']['x']=_0x43741e['anchor']['y']=0.5,_0x43741e['x']=Math[_0x253677(0x250)](this[_0x253677(0x240)]/0x2),_0x43741e['y']=Math['round'](this['innerHeight']/0x2);const _0x2f9b33=this['innerWidth']/_0x58fce7[_0x253677(0x2c8)],_0xca73bb=this['innerHeight']/_0x58fce7[_0x253677(0x1b9)],_0x52d290=Math[_0x253677(0x1fe)](_0x2f9b33,_0xca73bb,0x1);_0x43741e['scale']['x']=_0x52d290,_0x43741e['scale']['y']=_0x52d290,this[_0x253677(0x1ca)](_0x43741e),this[_0x253677(0x2bc)]['addChildAt'](_0x43741e,0x0);};function Window_ChallengeLevel(){const _0x1a062b=_0x197daa;this[_0x1a062b(0x1e9)](...arguments);}Window_ChallengeLevel[_0x197daa(0x1ea)]=Object['create'](Window_Base['prototype']),Window_ChallengeLevel[_0x197daa(0x1ea)]['constructor']=Window_ChallengeLevel,Window_ChallengeLevel[_0x197daa(0x326)]={'bgType':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x2a6)]??0x0,'updateFrequency':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)]['LevelWindow_UpdateFreq']??0x4,'dangerColor':VisuMZ[_0x197daa(0x2b1)]['Settings']['Window'][_0x197daa(0x2ec)]??0x2,'neutralColor':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x1f7)]??0x0,'safetyColor':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x1dd)]??0x18,'numbersFont':VisuMZ[_0x197daa(0x2b1)]['Settings'][_0x197daa(0x2b0)][_0x197daa(0x1d8)]??!![],'levelFontSize':VisuMZ['ChallengeSystem']['Settings'][_0x197daa(0x2b0)][_0x197daa(0x24d)]??0x64,'adjustFontSizeByLevel':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)]['Window'][_0x197daa(0x248)]??!![],'adjustModifier':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x32a)]??0x4,'adjustMaxSize':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x2df)]??0x96},Window_ChallengeLevel[_0x197daa(0x1ea)][_0x197daa(0x1e9)]=function(_0x2512a9){const _0x248a9e=_0x197daa;Window_Base[_0x248a9e(0x1ea)]['initialize'][_0x248a9e(0x310)](this,_0x2512a9);},Window_ChallengeLevel[_0x197daa(0x1ea)][_0x197daa(0x2f1)]=function(_0x1b5b70){const _0x20e977=_0x197daa;this['_challenge']=_0x1b5b70,this[_0x20e977(0x2d1)]=$gameSystem[_0x20e977(0x2a9)](this[_0x20e977(0x2b6)][_0x20e977(0x2b9)]),this[_0x20e977(0x1eb)]();},Window_ChallengeLevel[_0x197daa(0x1ea)][_0x197daa(0x1b2)]=function(_0x414762){const _0x42ae65=_0x197daa;this[_0x42ae65(0x22e)]=_0x414762,this[_0x42ae65(0x22e)][_0x42ae65(0x27b)](this['_currentLevel']);},Window_ChallengeLevel['prototype'][_0x197daa(0x1eb)]=function(){const _0xd639fa=_0x197daa;this['contents']['clear']();if(!this[_0xd639fa(0x2b6)])return;const _0x147691=Window_ChallengeLevel[_0xd639fa(0x326)];let _0x55653b='';this[_0xd639fa(0x207)]();if(this[_0xd639fa(0x2d1)]>0x0)this[_0xd639fa(0x28e)](ColorManager[_0xd639fa(0x18e)](_0x147691[_0xd639fa(0x1d1)])),_0x55653b=TextManager[_0xd639fa(0x19f)][_0xd639fa(0x2c0)];else{if(this['_currentLevel']<0x0){if(_0xd639fa(0x270)!==_0xd639fa(0x270))return _0x204661=_0x409ec8['toLowerCase']()['trim'](),_0x2c297e['ChallengeSystem'][_0xd639fa(0x2bd)][_0x195ecf];else this[_0xd639fa(0x28e)](ColorManager[_0xd639fa(0x18e)](_0x147691[_0xd639fa(0x1e8)])),_0x55653b=TextManager[_0xd639fa(0x19f)][_0xd639fa(0x1a4)];}else this['changeTextColor'](ColorManager[_0xd639fa(0x18e)](_0x147691[_0xd639fa(0x311)])),_0x55653b=TextManager[_0xd639fa(0x19f)][_0xd639fa(0x2c0)];}this['drawText'](_0x55653b,0x0,0x0,this[_0xd639fa(0x240)],_0xd639fa(0x198));_0x147691[_0xd639fa(0x266)]&&(this['contents'][_0xd639fa(0x325)]=$gameSystem[_0xd639fa(0x1be)]());this[_0xd639fa(0x328)][_0xd639fa(0x21a)]=_0x147691[_0xd639fa(0x19e)];_0x147691[_0xd639fa(0x2ff)]&&(this['contents'][_0xd639fa(0x21a)]+=Math[_0xd639fa(0x1f5)](Math[_0xd639fa(0x2c9)](this[_0xd639fa(0x2d1)])*_0x147691['adjustModifier']),this[_0xd639fa(0x328)][_0xd639fa(0x21a)]=Math[_0xd639fa(0x1c1)](this['contents'][_0xd639fa(0x21a)],_0x147691['adjustMaxSize']));const _0x244e8e=Math[_0xd639fa(0x2c9)](this[_0xd639fa(0x2d1)]);this['contents'][_0xd639fa(0x1ab)](_0x244e8e,0x0,this[_0xd639fa(0x252)](),this['innerWidth'],this[_0xd639fa(0x238)]-this[_0xd639fa(0x252)](),_0xd639fa(0x198));},Window_ChallengeLevel[_0x197daa(0x1ea)]['update']=function(){const _0x2f1249=_0x197daa;Window_Base[_0x2f1249(0x1ea)][_0x2f1249(0x2cc)][_0x2f1249(0x310)](this);if(!this['_challenge'])return;const _0x493e9a=Window_ChallengeLevel['SETTINGS'][_0x2f1249(0x324)];if(Graphics[_0x2f1249(0x182)]%_0x493e9a!==0x0)return;this['updateLevel']();},Window_ChallengeLevel[_0x197daa(0x1ea)]['updateLevel']=function(){const _0x57be1b=_0x197daa,_0x478830=$gameSystem[_0x57be1b(0x2a9)](this[_0x57be1b(0x2b6)]['Name']);if(this[_0x57be1b(0x2d1)]===_0x478830)return;const _0x55b1ff=Math[_0x57be1b(0x2c9)](this['_currentLevel']-_0x478830),_0x1c3717=Math[_0x57be1b(0x1fe)](0x1,Math[_0x57be1b(0x1f5)](_0x55b1ff/0xa));if(this['_currentLevel']>_0x478830){if(_0x57be1b(0x18a)!==_0x57be1b(0x18a)){if(_0x455ae9[_0x57be1b(0x213)]())return;if(_0x2a9f92[_0x57be1b(0x2ac)]())return;_0xe19108[_0x57be1b(0x2dc)](_0x991118,_0x15571e),_0x35e26a[_0x57be1b(0x2ed)](_0x4abd3c),_0x34e0c9['prepareNextScene']((_0x48cc93['SetName']||'')[_0x57be1b(0x26b)]()[_0x57be1b(0x257)]());}else this[_0x57be1b(0x2d1)]-=_0x1c3717;}else this[_0x57be1b(0x2d1)]<_0x478830&&(_0x57be1b(0x31b)===_0x57be1b(0x2fc)?_0x386e71[_0x57be1b(0x1ea)]['initialize'][_0x57be1b(0x310)](this,_0x3b3e8e):this['_currentLevel']+=_0x1c3717);this[_0x57be1b(0x1eb)](),this[_0x57be1b(0x22e)]['setLevel'](this[_0x57be1b(0x2d1)]);};function Window_ChallengeRewards(){const _0x207e07=_0x197daa;this[_0x207e07(0x1e9)](...arguments);}Window_ChallengeRewards[_0x197daa(0x1ea)]=Object[_0x197daa(0x281)](Window_Base['prototype']),Window_ChallengeRewards[_0x197daa(0x1ea)][_0x197daa(0x1f9)]=Window_ChallengeRewards,Window_ChallengeRewards[_0x197daa(0x326)]={'bgType':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x223)]??0x0,'rewardsOrder':VisuMZ['ChallengeSystem'][_0x197daa(0x200)]['Window'][_0x197daa(0x2a8)]??[_0x197daa(0x2d7),'ap','cp','jp','sp',_0x197daa(0x20e),'drops'],'expIcon':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)]['Window'][_0x197daa(0x2b7)]??0x57,'goldIcon':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x32e)]??0x13a,'dropsIcon':VisuMZ[_0x197daa(0x2b1)]['Settings']['Window']['Drops_Icon']??0xb0},Window_ChallengeRewards[_0x197daa(0x1ea)][_0x197daa(0x1e9)]=function(_0x180db1){const _0x487159=_0x197daa;Window_Base[_0x487159(0x1ea)][_0x487159(0x1e9)][_0x487159(0x310)](this,_0x180db1);},Window_ChallengeRewards[_0x197daa(0x1ea)][_0x197daa(0x2f1)]=function(_0x5ef7ed){const _0x4f854b=_0x197daa;this[_0x4f854b(0x2b6)]=_0x5ef7ed;},Window_ChallengeRewards[_0x197daa(0x1ea)][_0x197daa(0x27b)]=function(_0x2f4417){const _0x256f6e=_0x197daa;this[_0x256f6e(0x292)]=_0x2f4417,this[_0x256f6e(0x1eb)]();},Window_ChallengeRewards[_0x197daa(0x1ea)][_0x197daa(0x1eb)]=function(){const _0x3c21f3=_0x197daa;this['contents'][_0x3c21f3(0x1fd)]();if(!this[_0x3c21f3(0x2b6)])return;if(this[_0x3c21f3(0x292)]===undefined)return;const _0x1b50aa=Window_ChallengeRewards['SETTINGS'],_0x487fb5=this[_0x3c21f3(0x2b6)],_0x12e524=this['_challengeLevel'],_0x4bf116=_0x12e524<0x0?BattleManager[_0x3c21f3(0x19f)][_0x3c21f3(0x235)]:0x1;let _0x530e5b=0x0,_0x1e7362=0x0;this['resetFontSettings']();const _0x1f6023=TextManager[_0x3c21f3(0x19f)][_0x3c21f3(0x2b3)];this[_0x3c21f3(0x28e)](ColorManager[_0x3c21f3(0x329)]()),this[_0x3c21f3(0x1ab)](_0x1f6023,_0x530e5b,_0x1e7362,this[_0x3c21f3(0x240)],_0x3c21f3(0x198)),_0x1e7362+=this[_0x3c21f3(0x252)]();const _0x328c7f=Window_ChallengeRewards[_0x3c21f3(0x326)]['rewardsOrder'];for(const _0x771162 of _0x328c7f){let _0xcde131=0x0,_0x348057='',_0x9edf0a=0x1;switch(_0x771162[_0x3c21f3(0x26b)]()[_0x3c21f3(0x257)]()){case _0x3c21f3(0x2d7):_0xcde131=_0x1b50aa[_0x3c21f3(0x180)],_0x348057=TextManager['exp'],_0x9edf0a+=_0x12e524*_0x487fb5[_0x3c21f3(0x272)]*_0x4bf116;break;case'ap':if(!Imported['VisuMZ_2_SkillLearnSystem'])continue;_0xcde131=ImageManager[_0x3c21f3(0x184)],_0x348057=TextManager['abilityPointsAbbr'],_0x9edf0a+=_0x12e524*_0x487fb5[_0x3c21f3(0x267)]*_0x4bf116;break;case'cp':if(!Imported[_0x3c21f3(0x227)])continue;_0xcde131=ImageManager[_0x3c21f3(0x22f)],_0x348057=TextManager[_0x3c21f3(0x17c)],_0x9edf0a+=_0x12e524*_0x487fb5[_0x3c21f3(0x274)]*_0x4bf116;break;case'jp':if(!Imported['VisuMZ_2_ClassChangeSystem'])continue;_0xcde131=ImageManager[_0x3c21f3(0x22d)],_0x348057=TextManager[_0x3c21f3(0x21c)],_0x9edf0a+=_0x12e524*_0x487fb5[_0x3c21f3(0x1ad)]*_0x4bf116;break;case'sp':if(!Imported['VisuMZ_2_SkillLearnSystem'])continue;_0xcde131=ImageManager['skillPointsIcon'],_0x348057=TextManager['skillPointsAbbr'],_0x9edf0a+=_0x12e524*_0x487fb5['SpRatePerLevel']*_0x4bf116;break;case'gold':_0xcde131=_0x1b50aa[_0x3c21f3(0x1fc)],_0x348057=TextManager[_0x3c21f3(0x1c4)],_0x9edf0a+=_0x12e524*_0x487fb5[_0x3c21f3(0x18c)]*_0x4bf116;break;case'drops':case _0x3c21f3(0x2c4):_0xcde131=_0x1b50aa[_0x3c21f3(0x191)],_0x348057=TextManager['CHALLENGE_SYSTEM'][_0x3c21f3(0x239)],_0x9edf0a+=_0x12e524*_0x487fb5[_0x3c21f3(0x2ba)]*_0x4bf116;break;default:continue;}_0x9edf0a=Math[_0x3c21f3(0x1fe)](BattleManager[_0x3c21f3(0x19f)][_0x3c21f3(0x211)],_0x9edf0a),this[_0x3c21f3(0x1d6)](_0xcde131,_0x348057,_0x9edf0a,_0x530e5b,_0x1e7362),_0x1e7362+=this[_0x3c21f3(0x252)]();}},Window_ChallengeRewards[_0x197daa(0x1ea)][_0x197daa(0x1d6)]=function(_0x2b77e8,_0x55d1e1,_0x3b6446,_0x1378c4,_0x4ef1f0){const _0x4a8ade=_0x197daa;this[_0x4a8ade(0x222)](_0x2b77e8,_0x1378c4+0x2,_0x4ef1f0+0x2),_0x1378c4+=ImageManager[_0x4a8ade(0x2bf)]+0x4;const _0x491375=this['innerWidth']-_0x1378c4-this['itemPadding']();this[_0x4a8ade(0x207)](),this[_0x4a8ade(0x1ab)](_0x55d1e1,_0x1378c4,_0x4ef1f0,_0x491375);const _0x11f961=String(Math[_0x4a8ade(0x250)](_0x3b6446*0x64))+'%';if(_0x3b6446>0x1)this[_0x4a8ade(0x28e)](ColorManager[_0x4a8ade(0x2f6)]());else _0x3b6446<0x1?this['changeTextColor'](ColorManager[_0x4a8ade(0x258)]()):this[_0x4a8ade(0x28e)](ColorManager[_0x4a8ade(0x1d4)]());this[_0x4a8ade(0x1ab)](_0x11f961,_0x1378c4,_0x4ef1f0,_0x491375,_0x4a8ade(0x2e7));};function Window_ChallengeList(){const _0x471587=_0x197daa;this[_0x471587(0x1e9)](...arguments);}Window_ChallengeList['prototype']=Object[_0x197daa(0x281)](Window_Command[_0x197daa(0x1ea)]),Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x1f9)]=Window_ChallengeList,Window_ChallengeList[_0x197daa(0x326)]={'bgType':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x1c3)]??0x0,'lineThickness':VisuMZ['ChallengeSystem']['Settings'][_0x197daa(0x2b0)]['ListWindow_Thickness']??0x3,'iconSmoothing':VisuMZ[_0x197daa(0x2b1)]['Settings']['Window']['ListWindow_IconSmooth']??![],'dangerColor':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)]['ListWindow_DangerColor']??0x2,'safetyColor':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x203)]??0x18,'normalEntryColor':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x334)]??0x0,'enabledEntryDangerColor':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x236)]??0x11,'enabledEntrySafetyColor':VisuMZ[_0x197daa(0x2b1)][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x1d0)]??0x18,'excludeEntryColor':VisuMZ['ChallengeSystem'][_0x197daa(0x200)][_0x197daa(0x2b0)][_0x197daa(0x220)]??0x12},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x1e9)]=function(_0x2fc97a){const _0x35b781=_0x197daa;Window_Command[_0x35b781(0x1ea)]['initialize'][_0x35b781(0x310)](this,_0x2fc97a);},Window_ChallengeList[_0x197daa(0x1ea)]['setChallenge']=function(_0xddbd1b){const _0x58a76e=_0x197daa;this[_0x58a76e(0x2b6)]=_0xddbd1b,this['refresh']();},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x186)]=function(){const _0x36c0f7=_0x197daa,_0xed56d5=Math['max'](Window_ChallengeList[_0x36c0f7(0x326)]['lineThickness'],0x1);return Math['ceil'](this[_0x36c0f7(0x252)]()*_0xed56d5)+0x8;},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x210)]=function(){const _0x33fa0f=_0x197daa,_0x17ca17=this['currentExt']();if(this[_0x33fa0f(0x262)](_0x17ca17))SoundManager[_0x33fa0f(0x228)]();else _0x17ca17[_0x33fa0f(0x2ad)]>0x0?SoundManager[_0x33fa0f(0x1a0)]():SoundManager[_0x33fa0f(0x1c2)]();},Window_ChallengeList[_0x197daa(0x1ea)]['isAutoColorAffected']=function(){return![];},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x20c)]=function(){const _0x37d559=_0x197daa;Window_Command[_0x37d559(0x1ea)]['processCursorMove'][_0x37d559(0x310)](this),this[_0x37d559(0x29d)]();},Window_ChallengeList['prototype']['checkShiftResetShortcut']=function(){const _0x45e94f=_0x197daa;if(!this[_0x45e94f(0x1b0)]())return;Input[_0x45e94f(0x18f)](_0x45e94f(0x2e5))&&this[_0x45e94f(0x244)]();},Window_ChallengeList[_0x197daa(0x1ea)]['processShiftResetShortcut']=function(){const _0x2ad038=_0x197daa;SoundManager[_0x2ad038(0x228)](),Input['clear'](),$gameSystem[_0x2ad038(0x20b)](this['_challenge'][_0x2ad038(0x2b9)]),this['refresh']();},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x1b0)]=function(){const _0xf9e868=_0x197daa;return this[_0xf9e868(0x2b6)]&&$gameSystem[_0xf9e868(0x2e0)](this[_0xf9e868(0x2b6)]['Name'])[_0xf9e868(0x2e2)]>0x0;},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x259)]=function(){const _0x42bc92=_0x197daa;if(!this['_challenge'])return;const _0x1bf7a4=this[_0x42bc92(0x2b6)]['ChallengeList'];for(const _0x38316d of _0x1bf7a4){if(!this[_0x42bc92(0x21d)](_0x38316d))continue;this['addCommand'](_0x38316d[_0x42bc92(0x19b)],'challenge',!![],_0x38316d);}},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x21d)]=function(_0x4be3f3){const _0x660676=_0x197daa;if(!_0x4be3f3)return![];if(_0x4be3f3[_0x660676(0x331)]&&!$gameSwitches[_0x660676(0x319)](_0x4be3f3[_0x660676(0x331)]))return![];return!![];},Window_ChallengeList['prototype'][_0x197daa(0x1bb)]=function(_0x538206){const _0xaa6899=_0x197daa,_0x31ade4=this[_0xaa6899(0x2e1)](_0x538206);this[_0xaa6899(0x207)]();const _0x3c2b7a=this[_0xaa6899(0x320)][_0x538206][_0xaa6899(0x2fd)],_0x58239a=this['isEntryEnabled'](_0x3c2b7a),_0x2e3bef=Window_ChallengeList[_0xaa6899(0x326)][_0xaa6899(0x1d3)];this[_0xaa6899(0x289)](!![]);if(_0x2e3bef>0x1)this[_0xaa6899(0x264)](_0x31ade4,0x2);this[_0xaa6899(0x289)](_0x58239a),this[_0xaa6899(0x294)](_0x3c2b7a[_0xaa6899(0x29f)],_0x31ade4),this[_0xaa6899(0x289)](!![]),this['drawEntryName'](_0x3c2b7a,_0x31ade4),this['changePaintOpacity'](_0x58239a),this['drawEntryDangerLevel'](_0x3c2b7a,_0x31ade4);if(_0x2e3bef>0x1)this[_0xaa6899(0x2e3)](_0x3c2b7a,_0x31ade4);this[_0xaa6899(0x289)](!![]);},Window_ChallengeList[_0x197daa(0x1ea)]['isEntryEnabled']=function(_0x84a7a5){const _0x482172=_0x197daa,_0xb75198=(this[_0x482172(0x2b6)][_0x482172(0x2b9)]||'')[_0x482172(0x26b)]()[_0x482172(0x257)](),_0x484fbe=(_0x84a7a5['Name']||'')[_0x482172(0x26b)]()[_0x482172(0x257)]();return $gameSystem[_0x482172(0x20d)](_0xb75198,_0x484fbe);},Window_ChallengeList[_0x197daa(0x1ea)]['drawFadedItemBackground']=function(_0x2a32a5,_0x2dd9ff){const _0x4a9c33=_0x197daa;_0x2dd9ff=_0x2dd9ff||0x1,this[_0x4a9c33(0x289)](![]);const _0x2d1b9f=ColorManager[_0x4a9c33(0x234)](),_0x27dc7a=ColorManager[_0x4a9c33(0x2db)](),_0x1ce15f=_0x2a32a5['width']/0x2,_0x4cceab=this[_0x4a9c33(0x252)]();while(_0x2dd9ff--){this[_0x4a9c33(0x328)][_0x4a9c33(0x1e1)](_0x2a32a5['x'],_0x2a32a5['y'],_0x1ce15f,_0x4cceab,_0x27dc7a,_0x2d1b9f),this[_0x4a9c33(0x328)][_0x4a9c33(0x1e1)](_0x2a32a5['x']+_0x1ce15f,_0x2a32a5['y'],_0x1ce15f,_0x4cceab,_0x2d1b9f,_0x27dc7a);}this[_0x4a9c33(0x289)](!![]);},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x294)]=function(_0x516c81,_0x555330){const _0x1737f4=_0x197daa,_0x5421ae=Window_ChallengeList[_0x1737f4(0x326)];let _0x1ca396=_0x5421ae['lineThickness']*ImageManager[_0x1737f4(0x2b2)],_0x3f898d=_0x555330['y']+Math['ceil']((_0x555330[_0x1737f4(0x1b9)]-_0x1ca396)/0x2),_0xc1c358=_0x555330['x']+Math[_0x1737f4(0x1f5)]((_0x555330[_0x1737f4(0x1b9)]-_0x1ca396)/0x2);const _0x2af5a0=ImageManager[_0x1737f4(0x1f2)]('IconSet'),_0x64ecc9=ImageManager['iconWidth'],_0x1131de=ImageManager[_0x1737f4(0x2b2)],_0x3fce09=_0x516c81%0x10*_0x64ecc9,_0x187126=Math[_0x1737f4(0x1c9)](_0x516c81/0x10)*_0x1131de;this[_0x1737f4(0x328)][_0x1737f4(0x27d)]['imageSmoothingEnabled']=_0x5421ae[_0x1737f4(0x1bc)],this[_0x1737f4(0x328)][_0x1737f4(0x19c)](_0x2af5a0,_0x3fce09,_0x187126,_0x64ecc9,_0x1131de,_0xc1c358,_0x3f898d,_0x1ca396,_0x1ca396),this['contents'][_0x1737f4(0x27d)][_0x1737f4(0x226)]=!![];},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x2f8)]=function(_0x385986){const _0x9397a5=_0x197daa,_0x354053=(this[_0x9397a5(0x2b6)][_0x9397a5(0x2b9)]||'')[_0x9397a5(0x26b)]()[_0x9397a5(0x257)](),_0x53c3c9=(_0x385986[_0x9397a5(0x2b9)]||'')['toLowerCase']()[_0x9397a5(0x257)](),_0x1ac722=$gameSystem[_0x9397a5(0x2e0)](_0x354053);for(const _0x1e931c of _0x1ac722){if(_0x9397a5(0x286)!==_0x9397a5(0x306)){const _0x2f0a09=$gameSystem[_0x9397a5(0x189)](_0x354053,_0x1e931c);if(_0x2f0a09[_0x9397a5(0x202)]&&_0x2f0a09['Excludes'][_0x9397a5(0x2d6)](_0x53c3c9)){if(_0x9397a5(0x1f8)===_0x9397a5(0x1f8))return!![];else _0x4ee648['playChallengeSafetyEntry']();}}else this[_0x9397a5(0x1e9)](...arguments);}return![];},Window_ChallengeList['prototype']['drawEntryName']=function(_0x33c10a,_0x28e67e){const _0x33ca0e=_0x197daa;let _0x23318a=_0x28e67e['x']+_0x28e67e['height'],_0x484c15=_0x28e67e['y'],_0xc6af9e=_0x33c10a[_0x33ca0e(0x19b)];_0xc6af9e=_0xc6af9e[_0x33ca0e(0x2f3)](/\\C\[(\d+)\]/gi,''),_0xc6af9e=_0xc6af9e[_0x33ca0e(0x2f3)](/\\HexColor<(.*?)>/gi,'');const _0x87f812=Window_ChallengeList[_0x33ca0e(0x326)];if(this[_0x33ca0e(0x262)](_0x33c10a)){if(_0x33ca0e(0x27e)===_0x33ca0e(0x27f)){_0x352147=_0x2c9a08[_0x33ca0e(0x26b)]()[_0x33ca0e(0x257)]();const _0x466fe2=this[_0x33ca0e(0x32c)](_0x1cb322),_0xc2ccf7=_0x466fe2[_0x33ca0e(0x2ae)];return _0xf731a5['CHALLENGE_SYSTEM'][_0x33ca0e(0x2a0)]?_0xc2ccf7:_0x56c2a4[_0x33ca0e(0x1fe)](0x0,_0xc2ccf7);}else _0x33c10a[_0x33ca0e(0x2ad)]>0x0?_0xc6af9e=_0x33ca0e(0x1c0)[_0x33ca0e(0x304)](_0x87f812['enabledEntryDangerColor'],_0xc6af9e):_0xc6af9e=_0x33ca0e(0x1c0)[_0x33ca0e(0x304)](_0x87f812['enabledEntrySafetyColor'],_0xc6af9e);}else{if(this[_0x33ca0e(0x2f8)](_0x33c10a)){if(_0x33ca0e(0x1e7)!=='UsjBm')_0xc6af9e='\x5cC[%1]%2'[_0x33ca0e(0x304)](_0x87f812[_0x33ca0e(0x288)],_0xc6af9e);else{_0x2df85b=_0x36b0bd||0x1,this[_0x33ca0e(0x289)](![]);const _0x5a1a26=_0x5dcef2[_0x33ca0e(0x234)](),_0x3ac37e=_0x559ada[_0x33ca0e(0x2db)](),_0x48683f=_0x42b1a0[_0x33ca0e(0x2c8)]/0x2,_0x396eba=this['lineHeight']();while(_0x3644d9--){this[_0x33ca0e(0x328)][_0x33ca0e(0x1e1)](_0x299660['x'],_0x5afada['y'],_0x48683f,_0x396eba,_0x3ac37e,_0x5a1a26),this[_0x33ca0e(0x328)][_0x33ca0e(0x1e1)](_0x26630f['x']+_0x48683f,_0x5b9c22['y'],_0x48683f,_0x396eba,_0x5a1a26,_0x3ac37e);}this[_0x33ca0e(0x289)](!![]);}}else _0xc6af9e=_0x33ca0e(0x1c0)[_0x33ca0e(0x304)](_0x87f812['normalEntryColor'],_0xc6af9e);}this[_0x33ca0e(0x1ac)](_0xc6af9e,_0x23318a,_0x484c15);},Window_ChallengeList['prototype'][_0x197daa(0x183)]=function(_0x35e80f,_0x59db2d){const _0x2a1f3f=_0x197daa;if(_0x35e80f[_0x2a1f3f(0x2ad)]===0x0)return;const _0x31717d=TextManager[_0x2a1f3f(0x19f)],_0x194492=Window_ChallengeList[_0x2a1f3f(0x326)];let _0x140694='';if(_0x35e80f[_0x2a1f3f(0x2ad)]>0x0){if(_0x2a1f3f(0x247)===_0x2a1f3f(0x247))_0x140694=_0x31717d[_0x2a1f3f(0x1c7)][_0x2a1f3f(0x304)](_0x35e80f[_0x2a1f3f(0x2ad)]),this[_0x2a1f3f(0x28e)](ColorManager[_0x2a1f3f(0x18e)](_0x194492['dangerColor']));else{const _0x37b0b3=_0x347080(_0x33d31c['$1']);_0x37b0b3<_0x42e3d3?(_0x3bda92(_0x2a1f3f(0x255)['format'](_0x2ac9c1,_0x37b0b3,_0x559a2d)),_0x5534d1[_0x2a1f3f(0x31f)]()):_0x4b7ecd=_0xd36ec4[_0x2a1f3f(0x1fe)](_0x37b0b3,_0xe6c698);}}else _0x140694=_0x31717d[_0x2a1f3f(0x1cd)][_0x2a1f3f(0x304)](Math[_0x2a1f3f(0x2c9)](_0x35e80f['Level'])),this['changeTextColor'](ColorManager[_0x2a1f3f(0x18e)](_0x194492[_0x2a1f3f(0x1e8)]));this[_0x2a1f3f(0x1ab)](_0x140694,_0x59db2d['x'],_0x59db2d['y'],_0x59db2d[_0x2a1f3f(0x2c8)]-this[_0x2a1f3f(0x305)]()*0x2,'right');},Window_ChallengeList[_0x197daa(0x1ea)][_0x197daa(0x2e3)]=function(_0x20053a,_0x37d931){const _0x5ae6b9=_0x197daa;let _0x4a2f4e=_0x37d931['x']+_0x37d931['height']+this[_0x5ae6b9(0x305)]()*0x2,_0x320a84=_0x37d931['y']+this['lineHeight'](),_0x480cc4=_0x20053a[_0x5ae6b9(0x1f3)];this[_0x5ae6b9(0x1ac)](_0x480cc4,_0x4a2f4e,_0x320a84);};