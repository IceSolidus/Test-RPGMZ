//=============================================================================
// VisuStella MZ - Battle System - FTB - Free Turn Battle
// VisuMZ_2_BattleSystemFTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemFTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemFTB = VisuMZ.BattleSystemFTB || {};
VisuMZ.BattleSystemFTB.version = 1.14;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.14] [BattleSystemFTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_FTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_ItemsEquipsCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Free Turn Battle (FTB) is a type of battle system made for RPG Maker MZ,
 * where the teams for actors and enemies take turns attacking one another as
 * a whole. During each team's turns, an action count is given to them and they
 * can freely perform actions among their teammates as wanted (or if turned off
 * by the Plugin Parameters, in a cycle). When the action count is depleted or
 * if one team ran out of battler's that can act, the other team begins their
 * turn and so forth.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "ftb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actor and enemy teams take turns attacking each other as a whole.
 * * Action counts are given to each team at the start of each turn to utilize
 *   actions for.
 * * If enabled, actors can be freely switched around to perform actions with.
 * * Alter the mechanics of the Battle System FTB to your liking through the
 *   Plugin Parameters.
 * * An Action Count Display is shown for each side to relay information to the
 *   player about the current state of each turn.
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
 * * VisuMZ_1_ItemsEquipsCore
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
 * Surprise Attacks and Preemptive Bonuses
 * 
 * Due to the nature of a team-based battle system, surprise attacks and
 * preemptive bonuses no longer prevent the other team from being able to act
 * for a turn as that gives the initiating team too much advantage. Instead,
 * a surprise attack means the enemy team will always start first for each turn
 * while a preemptive bonus means the actor team will always start first for
 * each turn.
 * 
 * ---
 * 
 * Agility and Speed
 * 
 * When there is no surprise attack or preemptive bonus, aka a neutral battle
 * initiative, then the team that goes first is determined by their Agility
 * value at the start of battle (unless determined otherwise through the Plugin
 * Parameters).
 * 
 * However, because of the nature of team-based battle systems, agility and
 * speed have no impact on action speeds as action speeds are now instantly
 * performed.
 * 
 * Agility, however, can influence Action Counts through buffs and debuffs if
 * enabled through the Plugin Parameters. Each stack of Agility buffs will
 * raise the Action Count for a team while each stack of Agility debuffs will
 * decrease them for subsequent turns.
 * 
 * ---
 * 
 * Action Count
 * 
 * Each team will have an allotted number of actions available for usage. This
 * amount is determined by the number of alive members they have available by
 * default multiplied by their action count base.
 * 
 * The amount of actions that can be performed at base value can be determined
 * inside the Plugin Parameters > Mechanics Settings > Base.
 * 
 * The action count can be altered by AGI buffs and/or debuffs depending on the
 * Plugin Parameter settings.
 * 
 * Further action counts can be altered by various notetag effects tied to the
 * trait objects of each battle member.
 * 
 * ---
 * 
 * Action Orders
 * 
 * As team-based battle systems always have teams go between each other, the
 * standard action orders seen for turn-based and tick-based battle systems no
 * longer exist. However, in the event the actor team has berserk, confused, or
 * autobattlers, the actions will be performed in the following order:
 * 
 * 1. Berserk, confused, and auto battlers go first.
 * 2. If any actions are left, inputtable actors go next.
 * 3. If any actions are left, but there are no inputtable actors, berserk,
 *    confused, and auto battlers use up the remaining actions.
 * 4. Switch to the next team.
 * 
 * For enemy teams, enemies will always go in order from left-to-right for the
 * front view or right-to-left for sideview. If there are actions left, the
 * enemy team will cycle back to the first acting enemy.
 * 
 * ---
 * 
 * Free Range Switching
 * 
 * If this is enabled (it's an optional feature) and it's the player's turn,
 * the player can freely switch between actors in his/her party by pressing the
 * left/right buttons or the page up/page down buttons. The Actor Command
 * Window will automatically update to the newly selected actor. This gives the
 * player complete control and freedom over the party and the party's actions.
 * 
 * For touch controls, instead of pressing left/right or page up/page down on
 * the keyboard, click on the Battle Status Window for the target actor to be
 * selected to perform an action. The Actor Command Window will automatically
 * update to the newly selected actor.
 * 
 * ---
 *
 * Turn Structure
 * 
 * Each battle turn is dedicated to one team or the other. You need to design
 * your turns with this in mind. When one team finishes its actions, the next
 * turn will have the other team perform theirs.
 * 
 * As a result, both teams will not benefit from their turn end activities such
 * as regeneration at the end of each battle turn. Instead, they will only
 * occur at the end of their own respective turns.
 * 
 * However, for states and buffs, this is slightly different. States and buffs
 * update at the end of the opposing team's turn. This is so that 1 turn states
 * like Guard will last until the opponent's turn is over instead of being over
 * immediately after the player's turn ends (rendering the effect useless).
 * 
 * The state and buff turn updates can be disabled in the Plugin Parameters.
 * However, the durations must be accounted for if disabled (ie. making Guard
 * last two turns instead of 1).
 * 
 * ---
 * 
 * Turn Count for Enemies
 * 
 * Because the turn structure is changed, enemies will now have a different
 * turn count structure. Their turn count only raises when the enemy troops
 * have a turn instead of every battle turn. This means if an enemy skill page
 * has a Turn Count condition of 3, it'll mean when the enemy team has gotten
 * 3 turns, which will usually be around turn 6 for the whole battle.
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
 * === General FTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <FTB Help>
 *  description
 *  description
 * </FTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under FTB.
 * - This is primarily used if the skill behaves differently in FTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to FTB.
 *
 * ---
 * 
 * === Action Cost-Related Notetags ===
 * 
 * ---
 *
 * <FTB Action Cost: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the FTB action cost of this skill/item to 'x'.
 * - Replace 'x' with a number value representing the action cost required to
 *   perform the skill.
 *
 * ---
 *
 * <FTB Hide Action Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the FTB action cost for this skill/item hidden regardless of Plugin
 *   Parameter settings.
 *
 * ---
 *
 * <FTB Show Action Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the FTB action cost for this skill/item visible regardless of Plugin
 *   Parameter settings.
 *
 * ---
 * 
 * === Mechanics-Related Notetags ===
 * 
 * ---
 *
 * <FTB Pass Turn>
 *
 * - Used for: Skill, Item Notetags
 * - If a battler uses this skill/item, then even if there are actions left for
 *   the team to perform, that battler would no longer be able to input as they
 *   have already passed their turn.
 * - By default, this applies to "Guard". If you don't want it to apply to the
 *   Guard skill, turn it off in the Plugin Parameters for mechanics.
 *
 * ---
 *
 * <FTB Actions: +x>
 * <FTB Actions: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Battlers associated with these trait objects can increase or decrease the
 *   maximum number of actions performed each turn.
 * - Replace 'x' with a number representing the increase or decrease in action
 *   count per turn.
 * - Depending on the Plugin Parameters, altering the max value can result in
 *   gaining or losing remaining actions for the current turn.
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
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: FTB Action Count Visibility
 * - Determine the visibility of the FTB Action Count Display.
 *
 *   Visibility:
 *   - Changes the visibility of the FTB Action Count Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Determines the general settings of the FTB Battle System. These settings
 * range from determining how the Action Count resources and costs are
 * displayed to the text that appear during team shifting.
 *
 * ---
 *
 * Action Counts
 * 
 *   Full Name:
 *   - What is the full name of "Action Counts" in your game?
 * 
 *   Abbreviation:
 *   - What is the abbreviation of "Action Counts" in your game?
 * 
 *   Cost Format:
 *   - How are Action Count costs displayed?
 *   - %1 - Cost, %2 - Abbr Text, %3 - Icon
 * 
 * ---
 * 
 * Icons
 * 
 *   Actor Action Icon:
 *   - What icon is used to represent actor actions?
 * 
 *   Enemy Action Icon:
 *   - What icon is used to represent enemy actions?
 * 
 *   Empty Action Icon:
 *   - What icon is used to represent empty actions?
 *
 * ---
 *
 * Team Shift
 * 
 *   Party's Turn:
 *   - Text that appears when it's the party's turn.
 *   - %1 - Party Name
 * 
 *   Enemy's Turn:
 *   - Text that appears when it's the enemy's turn.
 * 
 *   Wait Frames:
 *   - How many frames to wait in between team changes?
 *
 * ---
 *
 * Displayed Costs
 * 
 *   Cost Position Front?:
 *   - Put the action cost at the front of skill/item costs?
 * 
 *   Show Cost: Attack:
 *   - Show the action cost for the Attack command?
 * 
 *   Show Cost: Guard:
 *   - Show the action cost for the Guard command?
 * 
 *   Show Cost: 0 Action:
 *   - Show the action cost when the cost is 0 action?
 * 
 *   Show Cost: 1 Action:
 *   - Show the action cost when the cost is 1 action?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the FTB Battle System. From here, you can
 * enable or disable core mechanics, determine how to determine turn advantage,
 * and how the various supporting mechanics operate.
 *
 * ---
 *
 * Main Mechanics
 * 
 *   Enable Free Switch?:
 *   - Enable free range switching between actors?
 * 
 *     Maintain Same Actor?:
 *     - Requires Free Switching.
 *     - Maintain the same actor after an action or move onto the next
 *       available actor?
 * 
 *   Reset Index New Turns:
 *   - Resets the selected actor whenever a new turn starts?
 *   - Needs "Free Switching" to be off.
 * 
 *   Current Turn Revival Act?:
 *   - Allow revived actors to act the current turn they're revived?
 * 
 *   Guard > Pass Turn?:
 *   - Does guarding cause a battler to pass turn?
 * 
 *   Gain Differences?:
 *   - If the max Action Count for a team changes, gain the difference in value
 *     if positive?
 * 
 *   Lose Differences?:
 *   - If the max Action Count for a team changes, lose the difference in value
 *     if negative?
 * 
 *   State/Buff Updates:
 *   - If enabled, update state/buff turns only on opponent turns.
 *   - Otherwise, they occur every turn.
 *
 * ---
 *
 * Turn Advantage
 * 
 *   Neutral Advantage:
 *   - For a neutral advantage battle, what determines which team goes first?
 *     - Random - 50% chance on which team goes first
 *     - Player - Player's team always goes first.
 *     - Lowest AGI - Battler with lowest AGI's team goes first
 *     - Average AGI - Team with the highest average AGI goes first
 *     - Highest AGI - Battler with highest AGI's team goes first
 *     - Total AGI - Team with highest total AGI goes first
 *
 * ---
 *
 * Action Generation
 * 
 *   Base:
 *   - What is the starting base number of actions that are generated per
 *     battler each turn?
 * 
 *   AGI Buff Influence?:
 *   - Do AGI buffs give +1 for each stack?
 * 
 *   AGI Debuff Influence?:
 *   - Do AGI debuffs give -1 for each stack?
 * 
 *   Maximum Actions:
 *   - What is the absolute maximum number of actions a team can have
 *     each turn?
 * 
 *   Minimum Actions:
 *   - What is the bare minimum number of actions a team can have each turn?
 * 
 *   Allow Overflow?:
 *   - Allow current actions to overflow?
 *   - Or let them cap at the current team max?
 *
 * ---
 *
 * Default Action Costs
 * 
 *   Skills:
 *   - What is the default action cost for skills?
 * 
 *   Items:
 *   - What is the default action cost for items?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Action Count Display Settings
 * ============================================================================
 *
 * Adjust the settings for the Action Count Display. They appear in the upper
 * or lower corners of the screen for the player party and the enemy troop.
 *
 * ---
 *
 * Display Settings
 * 
 *   Draw Horizontally?:
 *   - Which direction do you want the Action Count Display to go?
 * 
 *   Bottom Position?:
 *   - Place the Action Count Display towards the bottom of the screen?
 * 
 *     Offset Top Log Y?:
 *     - If using the top position, offset the log window's Y position.
 * 
 *     Reposition for Help?:
 *     - If using the top position, reposition the display when the help window
 *       is open?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's X/Y coordinates by this much when the
 *     Help Window is visible.
 *
 * ---
 *
 * Picture Settings
 * 
 *   Actor Action Picture:
 *   Enemy Action Picture:
 *   Empty Action Picture:
 *   - Optional. Place an image for an actor, enemy, or empty action instead of
 *     an icon?
 *
 * ---
 *
 * Coordinates
 * 
 *   Screen Buffer X:
 *   Screen Buffer Y:
 *   - Buffer from the the edge of the screen's X/Y by this much.
 * 
 *   Actor Offset X:
 *   Actor Offset Y:
 *   Enemy Offset X:
 *   Enemy Offset Y:
 *   - Offset the actor/enemy images' X/Y by this much.
 *
 * ---
 *
 * Draw Settings
 * 
 *   Max Actions Visible:
 *   - How many action slots max should be drawn for each team?
 * 
 *   Image Size:
 *   - What is the size of the icons or pictures for the action slots?
 * 
 *   Gap Distance:
 *   - How wide should the gab between each slot be in pixels?
 * 
 *   Icon Smoothing?:
 *   - Smooth the display for icons?
 *   - Or pixelate them?
 * 
 *   Picture Smoothing?:
 *   - Smooth the display for pictures?
 *   - Or pixelate them?
 *
 * ---
 *
 * Turns Remaining
 * 
 *   Show Number?:
 *   - Show a number to display the actions remaining?
 * 
 *   Font Size:
 *   - What font size should be used for this number?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the remaining actions number X/Y.
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
 * Version 1.14: May 15, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if an actor performs a forced action while "Maintain
 *    Same Actor?" plugin parameter is enabled, the forced action would double.
 *    This should now be fixed.
 * 
 * Version 1.13: January 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if the entire party is completely restricted via stun,
 *    charm, confusion, or berserk, entire turns would be skipped for both
 *    actors and enemies. Fix made by Irina.
 * 
 * Version 1.12: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Mechanics > Current Turn Revival Act?:
 * **** Allow revived actors to act the current turn they're revived?
 * 
 * Version 1.11: December 14, 2023
 * * Bug Fixes!
 * ** Enemy skills with Turn Count conditions will now apply a local turn count
 *    instead of the battle turn count. Fix made by Olivia.
 * * Documentation Update!
 * ** Updated "Major Changes" section:
 * *** Turn Count for Enemies
 * **** Because the turn structure is changed, enemies will now have a
 *      different turn count structure. Their turn count only raises when the
 *      enemy troops have a turn instead of every battle turn. This means if an
 *      enemy skill page has a Turn Count condition of 3, it'll mean when the
 *      enemy team has gotten 3 turns, which will usually be around turn 6 for
 *      the whole battle.
 * 
 * Version 1.10: October 20, 2022
 * * Bug Fixes!
 * ** Fixed problem with the Action Count Display's Actor Offset Y not working
 *    properly. Fix made by Arisu.
 * 
 * Version 1.09: June 2, 2022
 * * Bug Fixes!
 * ** Fixed a bug where Force Actions do not work when there's only one action
 *    left for the turn. Fix made by Olivia.
 * 
 * Version 1.08: April 21, 2022
 * * Bug Fixes!
 * ** Fixed a bug that prevents the battle system from shifting back to the
 *    default battle system after an enemy counter attack. Fix made by Olivia.
 * 
 * Version 1.07: April 14, 2022
 * * Compatibility Update!
 * ** Now works more compatible with counters. Update made by Olivia.
 * 
 * Verison 1.06: March 17, 2022
 * * Bug Fixes!
 * ** Death by slip damage will now perform the proper death animation.
 *    Fix made by Olivia.
 * 
 * Version 1.05: August 13, 2021
 * * Bug Fixes!
 * ** Fixed some Plugin Parameters that did not work properly when
 *    showing/hiding action costs. Fix made by Irina.
 * 
 * Version 1.04: June 18, 2021
 * * Documentation Update!
 * ** Added "Action Count" section to Major Changes for extra clarity on how
 *    action counts are determined.
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Olivia:
 * *** <FTB Show Action Cost>
 * **** Makes the FTB action cost for this skill/item visible regardless of
 *      Plugin Parameter settings.
 * 
 * Version 1.03: May 28, 2021
 * * Documentation Update!
 * ** Updated the text for Plugin Parameter "Maintain Same Actor?"
 * *** Requires Free Switching. Maintain the same actor after an action or move
 *     onto the next available actor?
 * * Feature Update!
 * ** When there are more actions available than the number of actions that can
 *    be shown at a time, the visible icons displayed will be trimmed to fit
 *    the number of maximum visible icons displayed. Update by Olivia.
 * 
 * Version 1.02: April 2, 2021
 * * Bug Fixes!
 * ** Action costs for FTP will now only take effect if inside battle only.
 *    Fix made by Olivia.
 * 
 * Version 1.01: March 19, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: February 22, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemActionCountVisibility
 * @text System: FTB Action Count Visibility
 * @desc Determine the visibility of the FTB Action Count Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the FTB Action Count Display.
 * @default true
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
 * @param BattleSystemFTB
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
 * @desc Determines the general settings of the FTB Battle System.
 * @default {"ActionCounts":"","ActionCountFull:str":"Fight Points","ActionCountAbbr:str":"FP","ActionCountCostFmt:str":"\\FS[22]\\C[0]×%1%3\\C[0]","Icons":"","ActorActionsIcon:num":"165","EnemyActionsIcon:num":"162","EmptyActionsIcon:num":"161","TeamShift":"","PartyTeamShiftFmt:str":"%1's Turn!","TroopTeamShiftFmt:str":"Opponent's Turn!","TeamShiftWait:num":"60","DisplayedCosts":"","CostPosition:eval":"false","ShowCostForAttack:eval":"false","ShowCostForGuard:eval":"false","Show_0_Action_Cost:eval":"true","Show_1_Action_Cost:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of the FTB Battle System.
 * @default {"Main":"","FreeChange:eval":"true","KeepPrevActor:eval":"true","GuardPass:eval":"true","GainDiff:eval":"true","LoseDiff:eval":"false","StateBuffUpdate:eval":"true","TurnAdvantage":"","NeutralAdvantage:str":"average agi","ActionGeneration":"","GenerateBase:num":"1","AgiBuff:eval":"true","AgiDebuff:eval":"false","MaxActions:num":"99","MinActions:num":"1","AllowOverflow:eval":"false","DefaultCost":"","DefaultCostSkill:num":"1","DefaultCostItem:num":"1"}
 *
 * @param ActionCountDisplay:struct
 * @text Action Count Display
 * @type struct<ActionCountDisplay>
 * @desc Adjust the settings for the Action Count Display.
 * @default {"Display":"","DrawHorz:eval":"true","BottomPosition:eval":"true","LogWindowTopOffsetY:num":"40","RepositionTopForHelp:eval":"true","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"160","Pictures":"","ActorActionPicture:str":"","EnemyActionPicture:str":"","EmptyActionPicture:str":"","Coordinates":"","ScreenBufferX:num":"16","ScreenBufferY:num":"16","ActorOffsetX:num":"0","ActorOffsetY:num":"0","EnemyOffsetX:num":"0","EnemyOffsetY:num":"0","DrawSettings":"","MaxVisible:num":"10","ImageSize:num":"32","ImageGapDistance:num":"2","IconSmoothing:eval":"false","PictureSmoothing:eval":"true","TurnsRemaining":"","DrawActionsRemaining:eval":"true","ActionsRemainingFontSize:num":"26","ActionsRemainingOffsetX:num":"0","ActionsRemainingOffsetY:num":"0"}
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
 * @param ActionCounts
 * @text Action Counts
 *
 * @param ActionCountFull:str
 * @text Full Name
 * @parent ActionCounts
 * @desc What is the full name of "Action Counts" in your game?
 * @default Fight Points
 *
 * @param ActionCountAbbr:str
 * @text Abbreviation
 * @parent ActionCounts
 * @desc What is the abbreviation of "Action Counts" in your game?
 * @default FP
 *
 * @param ActionCountCostFmt:str
 * @text Cost Format
 * @parent ActionCounts
 * @desc How are Action Count costs displayed?
 * %1 - Cost, %2 - Abbr Text, %3 - Icon
 * @default \FS[22]\C[0]×%1%3\C[0]
 *
 * @param Icons
 *
 * @param ActorActionsIcon:num
 * @text Actor Action Icon
 * @parent Icons
 * @desc What icon is used to represent actor actions?
 * @default 165
 *
 * @param EnemyActionsIcon:num
 * @text Enemy Action Icon
 * @parent Icons
 * @desc What icon is used to represent enemy actions?
 * @default 162
 *
 * @param EmptyActionsIcon:num
 * @text Empty Action Icon
 * @parent Icons
 * @desc What icon is used to represent empty actions?
 * @default 161
 *
 * @param TeamShift
 * @text Team Shift
 *
 * @param PartyTeamShiftFmt:str
 * @text Party's Turn
 * @parent TeamShift
 * @desc Text that appears when it's the party's turn.
 * %1 - Party Name
 * @default %1's Turn!
 *
 * @param TroopTeamShiftFmt:str
 * @text Enemy's Turn
 * @parent TeamShift
 * @desc Text that appears when it's the enemy's turn.
 * @default Opponent's Turn!
 *
 * @param TeamShiftWait:num
 * @text Wait Frames
 * @parent TeamShift
 * @type number
 * @desc How many frames to wait in between team changes?
 * @default 60
 *
 * @param DisplayedCosts
 * @text Displayed Costs
 *
 * @param CostPosition:eval
 * @text Cost Position Front?
 * @parent DisplayedCosts
 * @type boolean
 * @on Front
 * @off Back
 * @desc Put the action cost at the front of skill/item costs?
 * @default false
 *
 * @param ShowCostForAttack:eval
 * @text Show Cost: Attack
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost for the Attack command?
 * @default false
 *
 * @param ShowCostForGuard:eval
 * @text Show Cost: Guard
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost for the Guard command?
 * @default false
 *
 * @param Show_0_Action_Cost:eval
 * @text Show Cost: 0 Action
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost when the cost is 0 action?
 * @default true
 *
 * @param Show_1_Action_Cost:eval
 * @text Show Cost: 1 Action
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost when the cost is 1 action?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Main
 * @text Main Mechanics
 *
 * @param FreeChange:eval
 * @text Enable Free Switch?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable free range switching between actors?
 * @default true
 *
 * @param KeepPrevActor:eval
 * @text Maintain Same Actor?
 * @parent FreeChange:eval
 * @type boolean
 * @on Maintain
 * @off Next Available
 * @desc Requires Free Switching. Maintain the same actor after
 * an action or move onto the next available actor?
 * @default true
 *
 * @param NewTurnResetIndex:eval
 * @text Reset Index New Turns
 * @parent Main
 * @type boolean
 * @on Reset
 * @off Keep
 * @desc Resets the selected actor whenever a new turn starts?
 * Needs "Free Switching" to be off.
 * @default false
 *
 * @param RevivalAct:eval
 * @text Current Revival Act?
 * @parent Main
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow revived actors to act the current turn they're revived?
 * @default false
 *
 * @param GuardPass:eval
 * @text Guard > Pass Turn?
 * @parent Main
 * @type boolean
 * @on Pass Turn
 * @off Don't Pass
 * @desc Does guarding cause a battler to pass turn?
 * @default true
 *
 * @param GainDiff:eval
 * @text Gain Differences?
 * @parent Main
 * @type boolean
 * @on Gain Differences
 * @off Keep Same
 * @desc If the max Action Count for a team changes,
 * gain the difference in value if positive?
 * @default true
 *
 * @param LoseDiff:eval
 * @text Lose Differences?
 * @parent Main
 * @type boolean
 * @on Lose Differences
 * @off Keep Same
 * @desc If the max Action Count for a team changes,
 * lose the difference in value if negative?
 * @default false
 *
 * @param StateBuffUpdate:eval
 * @text State/Buff Updates
 * @parent Main
 * @type boolean
 * @on Opponent Turns Only
 * @off All Turns
 * @desc If enabled, update state/buff turns only on opponent
 * turns. Otherwise, they occur every turn.
 * @default true
 *
 * @param TurnAdvantage
 * @text Turn Advantage
 *
 * @param NeutralAdvantage:str
 * @text Neutral Advantage
 * @parent TurnAdvantage
 * @type select
 * @option Random - 50% chance on which team goes first
 * @value random
 * @option Player - Player's team always goes first
 * @value player
 * @option Enemy - Enemy's team always goes first
 * @value enemy
 * @option Lowest AGI - Battler with lowest AGI's team goes first
 * @value lowest agi
 * @option Average AGI - Team with the highest average AGI goes first
 * @value average agi
 * @option Highest AGI - Battler with highest AGI's team goes first
 * @value highest agi
 * @option Total AGI - Team with highest total AGI goes first
 * @value total agi
 * @desc For a neutral advantage battle, what determines which team goes first?
 * @default average agi
 *
 * @param ActionGeneration
 * @text Action Generation
 *
 * @param GenerateBase:num
 * @text Base
 * @parent ActionGeneration
 * @type number
 * @desc What is the starting base number of actions that are generated per battler each turn?
 * @default 1
 *
 * @param AgiBuff:eval
 * @text AGI Buff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI buffs give +1 for each stack?
 * @default true
 *
 * @param AgiDebuff:eval
 * @text AGI Debuff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI debuffs give -1 for each stack?
 * @default false
 *
 * @param MaxActions:num
 * @text Maximum Actions
 * @parent ActionGeneration
 * @type number
 * @desc What is the absolute maximum number of actions a team can have each turn?
 * @default 99
 *
 * @param MinActions:num
 * @text Minimum Actions
 * @parent ActionGeneration
 * @type number
 * @desc What is the bare minimum number of actions a team can have each turn?
 * @default 1
 *
 * @param AllowOverflow:eval
 * @text Allow Overflow?
 * @parent ActionGeneration
 * @type boolean
 * @on Allow
 * @off Cap to Max
 * @desc Allow current actions to overflow?
 * Or let them cap at the current team max?
 * @default false
 *
 * @param DefaultCost
 * @text Default Action Costs
 *
 * @param DefaultCostSkill:num
 * @text Skills
 * @parent DefaultCost
 * @type number
 * @desc What is the default action cost for skills?
 * @default 1
 *
 * @param DefaultCostItem:num
 * @text Items
 * @parent DefaultCost
 * @type number
 * @desc What is the default action cost for items?
 * @default 1
 * 
 */
/* ----------------------------------------------------------------------------
 * Action Count Display Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ActionCountDisplay:
 *
 * @param Display
 * @text Display Settings
 *
 * @param DrawHorz:eval
 * @text Draw Horizontally?
 * @parent Display
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Which direction do you want the Action Count Display to go?
 * @default true
 *
 * @param BottomPosition:eval
 * @text Bottom Position?
 * @parent Display
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Place the Action Count Display towards the bottom of the screen?
 * @default true
 *
 * @param LogWindowTopOffsetY:num
 * @text Offset Top Log Y?
 * @parent BottomPosition:eval
 * @type number
 * @desc If using the top position, offset the log window's Y position.
 * @default 40
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent BottomPosition:eval
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If using the top position, reposition the display when the help window is open?
 * @default true
 *
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default 160
 *
 * @param Pictures
 * @text Picture Settings
 *
 * @param ActorActionPicture:str
 * @text Actor Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an actor action instead of an icon?
 * @default 
 *
 * @param EnemyActionPicture:str
 * @text Enemy Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an enemy action instead of an icon?
 * @default 
 *
 * @param EmptyActionPicture:str
 * @text Empty Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an empty action instead of an icon?
 * @default 
 *
 * @param Coordinates
 *
 * @param ScreenBufferX:num
 * @text Screen Buffer X
 * @parent Coordinates
 * @desc Buffer from the the edge of the screen's X by this much.
 * @default 16
 *
 * @param ScreenBufferY:num
 * @text Screen Buffer Y
 * @parent Coordinates
 * @desc Buffer from the the edge of the screen's Y by this much.
 * @default 16
 *
 * @param ActorOffsetX:num
 * @text Actor Offset X
 * @parent Coordinates
 * @desc Offset the actor images' X by this much.
 * @default 0
 *
 * @param ActorOffsetY:num
 * @text Actor Offset Y
 * @parent Coordinates
 * @desc Offset the actor images' Y by this much.
 * @default 0
 *
 * @param EnemyOffsetX:num
 * @text Enemy Offset X
 * @parent Coordinates
 * @desc Offset the enemy images' X by this much.
 * @default 0
 *
 * @param EnemyOffsetY:num
 * @text Enemy Offset Y
 * @parent Coordinates
 * @desc Offset the enemy images' Y by this much.
 * @default 0
 *
 * @param DrawSettings
 * @text Draw Settings
 *
 * @param MaxVisible:num
 * @text Max Actions Visible
 * @parent DrawSettings
 * @desc How many action slots max should be drawn for each team?
 * @default 10
 *
 * @param ImageSize:num
 * @text Image Size
 * @parent DrawSettings
 * @desc What is the size of the icons or pictures for the action slots?
 * @default 32
 *
 * @param ImageGapDistance:num
 * @text Gap Distance
 * @parent DrawSettings
 * @desc How wide should the gab between each slot be in pixels?
 * @default 2
 *
 * @param IconSmoothing:eval
 * @text Icon Smoothing?
 * @parent DrawSettings
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Smooth the display for icons?
 * Or pixelate them?
 * @default false
 *
 * @param PictureSmoothing:eval
 * @text Picture Smoothing?
 * @parent DrawSettings
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Smooth the display for pictures?
 * Or pixelate them?
 * @default true
 *
 * @param TurnsRemaining
 * @text Turns Remaining
 *
 * @param DrawActionsRemaining:eval
 * @text Show Number?
 * @parent TurnsRemaining
 * @type boolean
 * @on Show Number
 * @off Don't Show
 * @desc Show a number to display the actions remaining?
 * @default true
 *
 * @param ActionsRemainingFontSize:num
 * @text Font Size
 * @parent DrawActionsRemaining:eval
 * @desc What font size should be used for this number?
 * @default 26
 *
 * @param ActionsRemainingOffsetX:num
 * @text Offset X
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining actions number X.
 * @default 0
 *
 * @param ActionsRemainingOffsetY:num
 * @text Offset Y
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining actions number Y.
 * @default 0
 *
 */
//=============================================================================

const _0x3f8e30=_0x238c;(function(_0x12633d,_0x28cc2a){const _0x35751a=_0x238c,_0x34018f=_0x12633d();while(!![]){try{const _0x52d44c=parseInt(_0x35751a(0x165))/0x1+-parseInt(_0x35751a(0x224))/0x2*(parseInt(_0x35751a(0x1c4))/0x3)+parseInt(_0x35751a(0x15a))/0x4*(parseInt(_0x35751a(0x1c0))/0x5)+parseInt(_0x35751a(0x20a))/0x6+-parseInt(_0x35751a(0x206))/0x7+-parseInt(_0x35751a(0x174))/0x8*(parseInt(_0x35751a(0x233))/0x9)+-parseInt(_0x35751a(0xd9))/0xa;if(_0x52d44c===_0x28cc2a)break;else _0x34018f['push'](_0x34018f['shift']());}catch(_0x411cfd){_0x34018f['push'](_0x34018f['shift']());}}}(_0x5942,0xc15e0));var label=_0x3f8e30(0x140),tier=tier||0x0,dependencies=[_0x3f8e30(0x252),_0x3f8e30(0x17e),'VisuMZ_1_ItemsEquipsCore',_0x3f8e30(0x24a)],pluginData=$plugins[_0x3f8e30(0x232)](function(_0x3d633c){const _0x63d122=_0x3f8e30;return _0x3d633c[_0x63d122(0x1bb)]&&_0x3d633c['description']['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x3f8e30(0xe4)]=function(_0x23a898,_0x4f6b30){const _0x9be173=_0x3f8e30;for(const _0x43d8de in _0x4f6b30){if(_0x43d8de[_0x9be173(0x1a4)](/(.*):(.*)/i)){const _0x19dafe=String(RegExp['$1']),_0x4d3c1d=String(RegExp['$2'])[_0x9be173(0x187)]()[_0x9be173(0x95)]();let _0x5f3c2d,_0x578bbb,_0x6cc1a;switch(_0x4d3c1d){case _0x9be173(0xae):_0x5f3c2d=_0x4f6b30[_0x43d8de]!==''?Number(_0x4f6b30[_0x43d8de]):0x0;break;case _0x9be173(0x12b):_0x578bbb=_0x4f6b30[_0x43d8de]!==''?JSON[_0x9be173(0xd8)](_0x4f6b30[_0x43d8de]):[],_0x5f3c2d=_0x578bbb[_0x9be173(0xc5)](_0xc6465a=>Number(_0xc6465a));break;case _0x9be173(0x17d):_0x5f3c2d=_0x4f6b30[_0x43d8de]!==''?eval(_0x4f6b30[_0x43d8de]):null;break;case _0x9be173(0x175):_0x578bbb=_0x4f6b30[_0x43d8de]!==''?JSON[_0x9be173(0xd8)](_0x4f6b30[_0x43d8de]):[],_0x5f3c2d=_0x578bbb[_0x9be173(0xc5)](_0x284a5a=>eval(_0x284a5a));break;case _0x9be173(0x162):_0x5f3c2d=_0x4f6b30[_0x43d8de]!==''?JSON['parse'](_0x4f6b30[_0x43d8de]):'';break;case _0x9be173(0x241):_0x578bbb=_0x4f6b30[_0x43d8de]!==''?JSON[_0x9be173(0xd8)](_0x4f6b30[_0x43d8de]):[],_0x5f3c2d=_0x578bbb[_0x9be173(0xc5)](_0x14297d=>JSON[_0x9be173(0xd8)](_0x14297d));break;case _0x9be173(0x253):_0x5f3c2d=_0x4f6b30[_0x43d8de]!==''?new Function(JSON[_0x9be173(0xd8)](_0x4f6b30[_0x43d8de])):new Function('return\x200');break;case'ARRAYFUNC':_0x578bbb=_0x4f6b30[_0x43d8de]!==''?JSON[_0x9be173(0xd8)](_0x4f6b30[_0x43d8de]):[],_0x5f3c2d=_0x578bbb[_0x9be173(0xc5)](_0x1644bf=>new Function(JSON[_0x9be173(0xd8)](_0x1644bf)));break;case _0x9be173(0x148):_0x5f3c2d=_0x4f6b30[_0x43d8de]!==''?String(_0x4f6b30[_0x43d8de]):'';break;case _0x9be173(0x1c2):_0x578bbb=_0x4f6b30[_0x43d8de]!==''?JSON[_0x9be173(0xd8)](_0x4f6b30[_0x43d8de]):[],_0x5f3c2d=_0x578bbb[_0x9be173(0xc5)](_0x1abf39=>String(_0x1abf39));break;case'STRUCT':_0x6cc1a=_0x4f6b30[_0x43d8de]!==''?JSON[_0x9be173(0xd8)](_0x4f6b30[_0x43d8de]):{},_0x5f3c2d=VisuMZ['ConvertParams']({},_0x6cc1a);break;case'ARRAYSTRUCT':_0x578bbb=_0x4f6b30[_0x43d8de]!==''?JSON['parse'](_0x4f6b30[_0x43d8de]):[],_0x5f3c2d=_0x578bbb['map'](_0x405cf7=>VisuMZ[_0x9be173(0xe4)]({},JSON['parse'](_0x405cf7)));break;default:continue;}_0x23a898[_0x19dafe]=_0x5f3c2d;}}return _0x23a898;},(_0x2b4058=>{const _0x5d09a8=_0x3f8e30,_0xb152a0=_0x2b4058[_0x5d09a8(0x194)];for(const _0xce6159 of dependencies){if(!Imported[_0xce6159]){alert(_0x5d09a8(0x237)['format'](_0xb152a0,_0xce6159)),SceneManager['exit']();break;}}const _0x49256b=_0x2b4058[_0x5d09a8(0x245)];if(_0x49256b['match'](/\[Version[ ](.*?)\]/i)){const _0x239127=Number(RegExp['$1']);_0x239127!==VisuMZ[label][_0x5d09a8(0xd6)]&&(alert(_0x5d09a8(0x1bd)[_0x5d09a8(0x18c)](_0xb152a0,_0x239127)),SceneManager[_0x5d09a8(0x8c)]());}if(_0x49256b[_0x5d09a8(0x1a4)](/\[Tier[ ](\d+)\]/i)){const _0x114bcc=Number(RegExp['$1']);_0x114bcc<tier?(alert(_0x5d09a8(0x91)[_0x5d09a8(0x18c)](_0xb152a0,_0x114bcc,tier)),SceneManager[_0x5d09a8(0x8c)]()):tier=Math[_0x5d09a8(0x23f)](_0x114bcc,tier);}VisuMZ[_0x5d09a8(0xe4)](VisuMZ[label][_0x5d09a8(0xb1)],_0x2b4058[_0x5d09a8(0x9f)]);})(pluginData),PluginManager[_0x3f8e30(0x143)](pluginData[_0x3f8e30(0x194)],'SystemActionCountVisibility',_0x3d576b=>{const _0x17e9c=_0x3f8e30;VisuMZ[_0x17e9c(0xe4)](_0x3d576b,_0x3d576b);const _0x4a8830=_0x3d576b[_0x17e9c(0xde)];$gameSystem[_0x17e9c(0x14a)](_0x4a8830);}),VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xc7)]={'ActionPointCost':/<FTB (?:FP|ACTION) COST:[ ](\d+)>/i,'HideActionPointCost':/<FTB HIDE (?:FP|ACTION) COST>/i,'ShowActionPointCost':/<FTB SHOW (?:FP|ACTION) COST>/i,'PassTurn':/<FTB PASS TURN>/i,'ActionPointTraitPlus':/<FTB (?:FP|ACTION|ACTIONS):[ ]([\+\-]\d+)>/i},DataManager[_0x3f8e30(0xda)]=function(_0x1cd5a4){const _0x181489=_0x3f8e30;if(!_0x1cd5a4)return 0x0;const _0x4b26a5=VisuMZ[_0x181489(0x140)]['Settings']['Mechanics'],_0x530f53=VisuMZ[_0x181489(0x140)][_0x181489(0xc7)],_0x148be1=_0x1cd5a4[_0x181489(0xa8)];if(_0x148be1[_0x181489(0x1a4)](_0x530f53[_0x181489(0x108)]))return Number(RegExp['$1']);else{if(DataManager[_0x181489(0x181)](_0x1cd5a4))return _0x4b26a5['DefaultCostSkill'];else return DataManager[_0x181489(0x1e1)](_0x1cd5a4)?_0x4b26a5['DefaultCostItem']:0x0;}},ImageManager['ftbActorActionsIcon']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)]['General'][_0x3f8e30(0x190)],ImageManager[_0x3f8e30(0x1ee)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)]['General'][_0x3f8e30(0x1cb)],ImageManager[_0x3f8e30(0x215)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)]['General'][_0x3f8e30(0x1b4)],TextManager['ftbActionPointsFull']=VisuMZ[_0x3f8e30(0x140)]['Settings'][_0x3f8e30(0xab)][_0x3f8e30(0x13f)],TextManager['ftbActionPointsAbbr']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0xab)]['ActionCountAbbr'],TextManager['ftbCostFormat']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)]['General'][_0x3f8e30(0x186)],TextManager[_0x3f8e30(0xbd)]=VisuMZ['BattleSystemFTB'][_0x3f8e30(0xb1)][_0x3f8e30(0xab)][_0x3f8e30(0x114)],TextManager[_0x3f8e30(0x130)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0xab)][_0x3f8e30(0x21e)],SceneManager['isSceneBattle']=function(){const _0x12ce63=_0x3f8e30;return this[_0x12ce63(0xb8)]&&this[_0x12ce63(0xb8)][_0x12ce63(0x167)]===Scene_Battle;},BattleManager[_0x3f8e30(0xc2)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0x161)],BattleManager[_0x3f8e30(0x1d2)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0xa4)],BattleManager[_0x3f8e30(0x226)]=VisuMZ[_0x3f8e30(0x140)]['Settings'][_0x3f8e30(0x11d)][_0x3f8e30(0x19e)]??![],BattleManager[_0x3f8e30(0x156)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)]['GuardPass'],BattleManager[_0x3f8e30(0x23a)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)]['Mechanics'][_0x3f8e30(0x182)],BattleManager[_0x3f8e30(0x1da)]=VisuMZ['BattleSystemFTB']['Settings']['Mechanics'][_0x3f8e30(0x18f)],BattleManager[_0x3f8e30(0xb7)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0x1fa)],BattleManager[_0x3f8e30(0x147)]=VisuMZ['BattleSystemFTB'][_0x3f8e30(0xb1)]['General'][_0x3f8e30(0x21f)],BattleManager[_0x3f8e30(0xad)]=VisuMZ['BattleSystemFTB']['Settings']['Mechanics']['StateBuffUpdate'],VisuMZ['BattleSystemFTB'][_0x3f8e30(0x1aa)]=BattleManager[_0x3f8e30(0xef)],BattleManager['battleSys']=function(){const _0x8e6537=_0x3f8e30;if(this[_0x8e6537(0x159)]())return'FTB';return VisuMZ[_0x8e6537(0x140)][_0x8e6537(0x1aa)]['call'](this);},BattleManager[_0x3f8e30(0x159)]=function(){const _0x4dea08=_0x3f8e30;return $gameSystem[_0x4dea08(0x8b)]()===_0x4dea08(0xe6);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x122)]=BattleManager[_0x3f8e30(0xa1)],BattleManager[_0x3f8e30(0xa1)]=function(){const _0x4c9223=_0x3f8e30;if(this['isFTB']())return![];return VisuMZ[_0x4c9223(0x140)][_0x4c9223(0x122)]['call'](this);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xaf)]=BattleManager['isActiveTpb'],BattleManager['isActiveTpb']=function(){const _0x1cd05f=_0x3f8e30;if(this[_0x1cd05f(0x159)]())return![];return VisuMZ[_0x1cd05f(0x140)][_0x1cd05f(0xaf)][_0x1cd05f(0x1e6)](this);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x247)]=BattleManager[_0x3f8e30(0x23e)],BattleManager['isTurnBased']=function(){const _0x5ba39f=_0x3f8e30;if(this[_0x5ba39f(0x159)]())return!![];return VisuMZ['BattleSystemFTB']['BattleManager_isTurnBased'][_0x5ba39f(0x1e6)](this);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0xe7)]=BattleManager[_0x3f8e30(0x208)],BattleManager['isTeamBased']=function(){const _0xf73607=_0x3f8e30;if(this[_0xf73607(0x159)]())return!![];return VisuMZ[_0xf73607(0x140)][_0xf73607(0xe7)][_0xf73607(0x1e6)](this);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x121)]=BattleManager[_0x3f8e30(0x18b)],BattleManager[_0x3f8e30(0x18b)]=function(){const _0x2ff0df=_0x3f8e30;if(this[_0x2ff0df(0x159)]())this[_0x2ff0df(0x125)]=![];VisuMZ['BattleSystemFTB'][_0x2ff0df(0x121)][_0x2ff0df(0x1e6)](this);if(this[_0x2ff0df(0x159)]()&&$gameParty[_0x2ff0df(0x135)]())this[_0x2ff0df(0x24c)]();},BattleManager[_0x3f8e30(0x24c)]=function(){const _0x312ddf=_0x3f8e30;this[_0x312ddf(0x1cf)]();},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x1fc)]=BattleManager[_0x3f8e30(0xf4)],BattleManager[_0x3f8e30(0xf4)]=function(){const _0xb7932d=_0x3f8e30;this[_0xb7932d(0x159)]()?this[_0xb7932d(0x88)]():VisuMZ[_0xb7932d(0x140)][_0xb7932d(0x1fc)]['call'](this);},BattleManager[_0x3f8e30(0x88)]=function(){const _0xf9007b=_0x3f8e30,_0x3894a6=this[_0xf9007b(0xb0)];_0x3894a6[_0xf9007b(0x209)]()&&$gameTemp[_0xf9007b(0x1b8)]&&(_0x3894a6['clearActions'](),BattleManager[_0xf9007b(0x20d)](_0x3894a6)&&(this[_0xf9007b(0x142)]=_0x3894a6));$gameTemp['_forcedActionFTB']=![];_0x3894a6['isEnemy']()&&(this[_0xf9007b(0x142)]=undefined);if(_0x3894a6&&!_0x3894a6['friendsUnit']()[_0xf9007b(0x154)]())this[_0xf9007b(0x221)](),this['_subject']=null,this[_0xf9007b(0xba)](![]);else{if(_0x3894a6&&_0x3894a6[_0xf9007b(0x209)]()&&_0x3894a6[_0xf9007b(0x135)]()){const _0x1ada46=_0x3894a6[_0xf9007b(0xbb)]();if(!_0x1ada46)VisuMZ['BattleSystemFTB'][_0xf9007b(0x1fc)][_0xf9007b(0x1e6)](this);else _0x1ada46[_0xf9007b(0x227)]?VisuMZ['BattleSystemFTB'][_0xf9007b(0x1fc)][_0xf9007b(0x1e6)](this):(this[_0xf9007b(0x18a)]=_0x3894a6,this[_0xf9007b(0x142)]&&(this['_currentActor']=this[_0xf9007b(0x142)],this[_0xf9007b(0x142)]=undefined),this[_0xf9007b(0x21a)]());}else VisuMZ[_0xf9007b(0x140)][_0xf9007b(0x1fc)][_0xf9007b(0x1e6)](this);}},VisuMZ[_0x3f8e30(0x140)]['BattleManager_finishActorInput']=BattleManager['finishActorInput'],BattleManager[_0x3f8e30(0xa7)]=function(){const _0x48a227=_0x3f8e30;this[_0x48a227(0x159)]()?VisuMZ['BattleSystemFTB'][_0x48a227(0x1fc)][_0x48a227(0x1e6)](this):VisuMZ[_0x48a227(0x140)][_0x48a227(0x220)][_0x48a227(0x1e6)](this);},VisuMZ['BattleSystemFTB']['BattleManager_selectNextActor']=BattleManager[_0x3f8e30(0x18d)],BattleManager[_0x3f8e30(0x18d)]=function(){const _0x3c4cd4=_0x3f8e30;this['isFTB']()?this['selectNextActorFTB']():VisuMZ[_0x3c4cd4(0x140)][_0x3c4cd4(0x12d)][_0x3c4cd4(0x1e6)](this);},BattleManager[_0x3f8e30(0xb9)]=function(){const _0x353fff=_0x3f8e30;this[_0x353fff(0x18a)]=null,this[_0x353fff(0x97)]=![];},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xf1)]=BattleManager['startAction'],BattleManager['startAction']=function(){const _0x12d981=_0x3f8e30;this[_0x12d981(0x159)]()&&(this[_0x12d981(0xb0)][_0x12d981(0x209)]()&&this['_subject'][_0x12d981(0xbb)]()['_forcing']&&($gameTemp[_0x12d981(0x1b8)]=!![])),VisuMZ['BattleSystemFTB'][_0x12d981(0xf1)]['call'](this);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x1d6)]=BattleManager[_0x3f8e30(0x221)],BattleManager['endAction']=function(){const _0x41c07d=_0x3f8e30,_0x4244e2=this[_0x41c07d(0xb0)];VisuMZ[_0x41c07d(0x140)][_0x41c07d(0x1d6)][_0x41c07d(0x1e6)](this),this['endActionFTB'](_0x4244e2);},BattleManager[_0x3f8e30(0x89)]=function(_0x55cb12){const _0x6eaf88=_0x3f8e30;if(!this[_0x6eaf88(0x159)]())return;if(_0x55cb12){const _0x42986f=_0x55cb12[_0x6eaf88(0x94)][_0x6eaf88(0x232)](_0xb143c=>_0xb143c[_0x6eaf88(0x227)]);_0x55cb12[_0x6eaf88(0xdf)]();if(_0x42986f){let _0x254d30=_0x42986f[_0x6eaf88(0x99)];while(_0x254d30--){_0x55cb12[_0x6eaf88(0x94)][_0x6eaf88(0x1be)]();}_0x55cb12[_0x6eaf88(0x94)]=_0x42986f['concat'](_0x55cb12[_0x6eaf88(0x94)]);}}if(this['_forcedBattlers'][_0x6eaf88(0x99)]>0x0)this[_0x6eaf88(0xb0)]&&(!this[_0x6eaf88(0x9a)]['includes'](this[_0x6eaf88(0xb0)])&&this[_0x6eaf88(0x9a)][_0x6eaf88(0xb6)](this['_subject'])),this[_0x6eaf88(0xb0)]=this['getNextSubject']();else this[_0x6eaf88(0x20d)](_0x55cb12)&&(this[_0x6eaf88(0xb0)]=_0x55cb12);_0x55cb12[_0x6eaf88(0x14c)]()[_0x6eaf88(0x124)](_0x55cb12);},BattleManager[_0x3f8e30(0x20d)]=function(_0x9d61eb){const _0x598986=_0x3f8e30;if(!_0x9d61eb)return![];if(!_0x9d61eb[_0x598986(0x209)]())return![];if(!_0x9d61eb[_0x598986(0x15e)]())return![];if(!_0x9d61eb[_0x598986(0x135)]())return![];if(_0x9d61eb[_0x598986(0x146)]())return![];return BattleManager[_0x598986(0xc2)]&&BattleManager[_0x598986(0x1d2)];},VisuMZ['BattleSystemFTB'][_0x3f8e30(0xb5)]=BattleManager[_0x3f8e30(0x134)],BattleManager['startBattle']=function(){const _0xe56b95=_0x3f8e30;VisuMZ[_0xe56b95(0x140)][_0xe56b95(0xb5)][_0xe56b95(0x1e6)](this),this[_0xe56b95(0x111)]();},BattleManager[_0x3f8e30(0x111)]=function(){const _0x587641=_0x3f8e30;if(!this[_0x587641(0x159)]())return;if(this[_0x587641(0x179)])this[_0x587641(0x248)]='actors';else this[_0x587641(0x125)]?this[_0x587641(0x248)]=_0x587641(0xcd):this[_0x587641(0x248)]=BattleManager[_0x587641(0xb7)];this[_0x587641(0x248)]=this[_0x587641(0x248)]||_0x587641(0x110);let _0x456fc6=0x0,_0x17dccc=0x0;switch(this[_0x587641(0x248)]['toLowerCase']()[_0x587641(0x95)]()){case _0x587641(0x110):let _0x354c10=[_0x587641(0x1a1),_0x587641(0xcd)];this['_ftbTurnAdvantageUnit']=_0x354c10[Math['randomInt'](_0x354c10['length'])];break;case _0x587641(0xf6):this['_ftbTurnAdvantageUnit']=_0x587641(0x1a1);break;case'enemy':this[_0x587641(0x248)]='enemies';break;case _0x587641(0x1c7):_0x456fc6=$gameParty[_0x587641(0x1b7)](),_0x17dccc=$gameTroop[_0x587641(0x1b7)](),this['_ftbTurnAdvantageUnit']=_0x456fc6>=_0x17dccc?'actors':_0x587641(0xcd);break;case _0x587641(0x23b):_0x456fc6=$gameParty[_0x587641(0x160)](),_0x17dccc=$gameTroop[_0x587641(0x160)](),this[_0x587641(0x248)]=_0x456fc6>=_0x17dccc?_0x587641(0x1a1):_0x587641(0xcd);break;case _0x587641(0xc6):_0x456fc6=$gameParty[_0x587641(0xac)](),_0x17dccc=$gameTroop[_0x587641(0xac)](),this[_0x587641(0x248)]=_0x456fc6>=_0x17dccc?'actors':_0x587641(0xcd);break;case _0x587641(0x22d):_0x456fc6=$gameParty[_0x587641(0x212)](),_0x17dccc=$gameTroop[_0x587641(0x212)](),this[_0x587641(0x248)]=_0x456fc6>=_0x17dccc?'actors':'enemies';break;}this[_0x587641(0x22b)]=this[_0x587641(0x248)]==='actors'?$gameParty:$gameTroop,this[_0x587641(0x14b)]=this[_0x587641(0x248)]===_0x587641(0x1a1)?$gameTroop:$gameParty;},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x222)]=BattleManager[_0x3f8e30(0x9c)],BattleManager[_0x3f8e30(0x9c)]=function(){const _0x2c8354=_0x3f8e30;this['isFTB']()?this['makeActionOrdersFTB']():VisuMZ[_0x2c8354(0x140)][_0x2c8354(0x222)][_0x2c8354(0x1e6)](this);},BattleManager[_0x3f8e30(0xeb)]=function(){const _0x3c0a4a=_0x3f8e30;let _0x3774ce=[],_0x1f83c0=[],_0x111f99=0x0;const _0x1b4797=$gameTroop['turnCount']();let _0xf78b1e=_0x1b4797%0x2===0x0?this['_ftbTeamEven']:this[_0x3c0a4a(0x22b)];this[_0x3c0a4a(0xfc)]=_0xf78b1e;const _0x4521e7=VisuMZ[_0x3c0a4a(0x140)]['Settings']['Mechanics'];if(_0xf78b1e===$gameParty){const _0x4168c3=_0x4521e7['RevivalAct']?$gameParty[_0x3c0a4a(0xb2)]():$gameParty['ftbAliveMembers']();let _0x32f182=_0x4168c3[_0x3c0a4a(0x232)](_0x9af553=>_0x9af553[_0x3c0a4a(0x15e)]()&&!_0x9af553[_0x3c0a4a(0x135)]()),_0x4f2c47=_0x4168c3[_0x3c0a4a(0x232)](_0x55c548=>_0x55c548[_0x3c0a4a(0x15e)]()&&_0x55c548[_0x3c0a4a(0x135)]());_0x3774ce=_0x3774ce[_0x3c0a4a(0x1b1)](_0x32f182),_0x111f99=Game_Unit[_0x3c0a4a(0x164)];while(_0x111f99--){_0x3774ce=_0x3774ce[_0x3c0a4a(0x1b1)](_0x4f2c47);}_0x111f99=Game_Unit[_0x3c0a4a(0x164)]-0x1;while(_0x111f99--){_0x3774ce=_0x3774ce[_0x3c0a4a(0x1b1)](_0x32f182);}}if(_0xf78b1e===$gameTroop){const _0x282567=_0x4521e7[_0x3c0a4a(0x193)]?$gameTroop[_0x3c0a4a(0x180)]():$gameTroop[_0x3c0a4a(0x1f1)]();let _0x255e40=_0x282567['filter'](_0x562606=>_0x562606[_0x3c0a4a(0x15e)]());$gameSystem[_0x3c0a4a(0x1d1)]()?_0x255e40[_0x3c0a4a(0xc9)]((_0x2f4ab4,_0x2d1534)=>_0x2d1534[_0x3c0a4a(0x195)]()-_0x2f4ab4[_0x3c0a4a(0x195)]()):_0x255e40[_0x3c0a4a(0xc9)]((_0xe650d8,_0x556a1d)=>_0xe650d8[_0x3c0a4a(0x195)]()-_0x556a1d[_0x3c0a4a(0x195)]());_0x111f99=Game_Unit[_0x3c0a4a(0x164)];while(_0x111f99--){_0x1f83c0=_0x1f83c0[_0x3c0a4a(0x1b1)](_0x255e40);}$gameTroop[_0x3c0a4a(0xdf)]();}this[_0x3c0a4a(0x9a)]=_0x3774ce[_0x3c0a4a(0x1b1)](_0x1f83c0);},BattleManager[_0x3f8e30(0x17b)]=function(){const _0x3f0915=_0x3f8e30;if(!this['isFTB']())return;this['_actionBattlers']=this[_0x3f0915(0x9a)]||[],this[_0x3f0915(0x9a)]=this[_0x3f0915(0x9a)][_0x3f0915(0x232)](_0x545d02=>_0x545d02['canMove']()&&!_0x545d02[_0x3f0915(0x146)]());},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x166)]=BattleManager[_0x3f8e30(0xf9)],BattleManager[_0x3f8e30(0xf9)]=function(_0x4bf116,_0x25177a,_0x305480){const _0x171514=_0x3f8e30;VisuMZ[_0x171514(0x140)][_0x171514(0x166)][_0x171514(0x1e6)](this,_0x4bf116,_0x25177a,_0x305480),this[_0x171514(0x24e)]();},BattleManager[_0x3f8e30(0x24e)]=function(){const _0x23a336=_0x3f8e30;if(!BattleManager[_0x23a336(0x159)]())return;this['_ftbCurrentUnit']=undefined,$gameParty['startTurnFTB'](),$gameTroop[_0x23a336(0x14e)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x1e2)]=BattleManager['startTurn'],BattleManager[_0x3f8e30(0x1cf)]=function(){const _0x56fec1=_0x3f8e30;this['startTurnFTB'](),VisuMZ['BattleSystemFTB']['BattleManager_startTurn'][_0x56fec1(0x1e6)](this),this[_0x56fec1(0x197)]();},BattleManager[_0x3f8e30(0x14e)]=function(){const _0x378ebb=_0x3f8e30;if(!BattleManager[_0x378ebb(0x159)]())return;$gameParty['clearPassTurnFTB'](),$gameTroop[_0x378ebb(0x1fe)]();const _0x54c88e=$gameTroop[_0x378ebb(0x169)]()+0x1;let _0x3228d9=_0x54c88e%0x2===0x0?this['_ftbTeamEven']:this['_ftbTeamOdd'],_0x1edc28=_0x54c88e%0x2===0x0?this[_0x378ebb(0x22b)]:this[_0x378ebb(0x14b)];_0x54c88e>0x1&&_0x1edc28[_0x378ebb(0x132)](),_0x3228d9[_0x378ebb(0x20b)](),_0x3228d9[_0x378ebb(0x14e)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x229)]=BattleManager['endTurn'],BattleManager[_0x3f8e30(0x107)]=function(){const _0xb64f9a=_0x3f8e30;VisuMZ['BattleSystemFTB']['BattleManager_endTurn'][_0xb64f9a(0x1e6)](this),this[_0xb64f9a(0xee)]();},BattleManager[_0x3f8e30(0xee)]=function(){const _0x23294c=_0x3f8e30;if(!BattleManager[_0x23294c(0x159)]())return;},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x158)]=Game_Party[_0x3f8e30(0xf3)][_0x3f8e30(0x135)],Game_Party['prototype'][_0x3f8e30(0x135)]=function(){const _0x3f7f11=_0x3f8e30;if(BattleManager[_0x3f7f11(0x159)]())return!![];return VisuMZ[_0x3f7f11(0x140)][_0x3f7f11(0x158)][_0x3f7f11(0x1e6)](this);},VisuMZ[_0x3f8e30(0x140)]['BattleManager_endAllBattlersTurn']=BattleManager['endAllBattlersTurn'],BattleManager['endAllBattlersTurn']=function(){const _0x2f5f5f=_0x3f8e30;if(this[_0x2f5f5f(0x159)]())return;VisuMZ[_0x2f5f5f(0x140)][_0x2f5f5f(0xf2)][_0x2f5f5f(0x1e6)](this);},BattleManager[_0x3f8e30(0x197)]=function(){const _0x4f6baa=_0x3f8e30;if(!BattleManager[_0x4f6baa(0x159)]())return;let _0xcc600a='';if(this['_ftbCurrentUnit']===$gameParty){let _0x38ab99=$gameParty[_0x4f6baa(0x194)]();_0xcc600a=TextManager[_0x4f6baa(0xbd)][_0x4f6baa(0x18c)](_0x38ab99);}else _0xcc600a=TextManager[_0x4f6baa(0x130)];if(_0xcc600a!==''){this[_0x4f6baa(0x104)][_0x4f6baa(0x1b9)](_0x4f6baa(0x1b3),_0xcc600a);const _0x5efa3b=BattleManager[_0x4f6baa(0x147)];this[_0x4f6baa(0x104)][_0x4f6baa(0x1b9)](_0x4f6baa(0x225),_0x5efa3b),this[_0x4f6baa(0x104)][_0x4f6baa(0x1b9)]('clear');}},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x1f4)]=Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x19a)],Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x19a)]=function(_0x2ac3ad){const _0x3f59b7=_0x3f8e30;VisuMZ['BattleSystemFTB'][_0x3f59b7(0x1f4)][_0x3f59b7(0x1e6)](this,_0x2ac3ad),this[_0x3f59b7(0xa6)]();},Game_Battler[_0x3f8e30(0xf3)]['resetTurnCountFTB']=function(){const _0x59b90c=_0x3f8e30;if(!BattleManager[_0x59b90c(0x159)]())return;this[_0x59b90c(0xc1)]=0x0;},VisuMZ['BattleSystemFTB']['Game_Battler_turnCount']=Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x169)],Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x169)]=function(){const _0x567a18=_0x3f8e30;return BattleManager[_0x567a18(0x159)]()?this[_0x567a18(0xc1)]||0x0:VisuMZ[_0x567a18(0x140)]['Game_Battler_turnCount'][_0x567a18(0x1e6)](this);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xca)]=Game_Troop[_0x3f8e30(0xf3)][_0x3f8e30(0x238)],Game_Troop[_0x3f8e30(0xf3)]['increaseTurn']=function(){const _0x151738=_0x3f8e30;VisuMZ[_0x151738(0x140)][_0x151738(0xca)][_0x151738(0x1e6)](this),this[_0x151738(0x23c)]();},Game_Troop[_0x3f8e30(0xf3)][_0x3f8e30(0x23c)]=function(){const _0x21024b=_0x3f8e30;if(!BattleManager[_0x21024b(0x159)]())return;if(Imported[_0x21024b(0x201)]&&VisuMZ[_0x21024b(0x205)][_0x21024b(0xd6)]<1.22){let _0x41f112='';_0x41f112+='VisuMZ_3_BattleAI\x20needs\x20to\x20be\x20updated\x20',_0x41f112+=_0x21024b(0x15b),alert(_0x41f112),SceneManager[_0x21024b(0x8c)]();}let _0x28dead=[];BattleManager[_0x21024b(0xfc)]===$gameParty?_0x28dead=$gameParty[_0x21024b(0x1bf)]():_0x28dead=$gameTroop[_0x21024b(0x180)]();for(const _0x244dd1 of _0x28dead){_0x244dd1['_turnCountFTB']=_0x244dd1['_turnCountFTB']||0x0,_0x244dd1[_0x21024b(0xc1)]++;}},VisuMZ['BattleSystemFTB']['BattleManager_invokeCounterAttack']=BattleManager[_0x3f8e30(0x1e0)],BattleManager[_0x3f8e30(0x1e0)]=function(_0x37832b,_0x3e4b5d){const _0x377f82=_0x3f8e30,_0x21a788=BattleManager[_0x377f82(0x159)]();if(_0x21a788)$gameSystem[_0x377f82(0x188)](_0x377f82(0x244));VisuMZ[_0x377f82(0x140)][_0x377f82(0x13d)]['call'](this,_0x37832b,_0x3e4b5d);if(_0x21a788)$gameSystem[_0x377f82(0x188)](_0x377f82(0xe6));},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x1c8)]=Game_System[_0x3f8e30(0xf3)]['initialize'],Game_System['prototype'][_0x3f8e30(0x11a)]=function(){const _0x330bd3=_0x3f8e30;VisuMZ[_0x330bd3(0x140)]['Game_System_initialize'][_0x330bd3(0x1e6)](this),this['initBattleSystemFTB']();},Game_System[_0x3f8e30(0xf3)][_0x3f8e30(0x178)]=function(){this['_ftbActionCountVisible']=!![];},Game_System[_0x3f8e30(0xf3)]['isBattleSystemFTBActionCountVisible']=function(){const _0x21ab06=_0x3f8e30;if(BattleManager[_0x21ab06(0x17c)]===_0x21ab06(0x118))return![];return this[_0x21ab06(0xc3)]===undefined&&this[_0x21ab06(0x178)](),this[_0x21ab06(0xc3)];},Game_System[_0x3f8e30(0xf3)]['setBattleSystemFTBActionCountVisible']=function(_0x3f486d){const _0x145a1b=_0x3f8e30;this[_0x145a1b(0xc3)]===undefined&&this[_0x145a1b(0x178)](),this[_0x145a1b(0xc3)]=_0x3f486d;},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x157)]=Game_Action[_0x3f8e30(0xf3)][_0x3f8e30(0xbc)],Game_Action[_0x3f8e30(0xf3)]['speed']=function(){const _0x1b376d=_0x3f8e30;return BattleManager[_0x1b376d(0x159)]()?0x0:VisuMZ[_0x1b376d(0x140)][_0x1b376d(0x157)]['call'](this);},VisuMZ['BattleSystemFTB']['Game_Action_applyGlobal']=Game_Action[_0x3f8e30(0xf3)]['applyGlobal'],Game_Action[_0x3f8e30(0xf3)][_0x3f8e30(0x1ce)]=function(){const _0xb1d924=_0x3f8e30;VisuMZ[_0xb1d924(0x140)]['Game_Action_applyGlobal'][_0xb1d924(0x1e6)](this),this[_0xb1d924(0xdd)]();},Game_Action[_0x3f8e30(0xf3)]['applyGlobalFTB']=function(){const _0x785128=_0x3f8e30;if(!BattleManager[_0x785128(0x159)]())return;if(!this['subject']())return;if(!this[_0x785128(0x198)]())return;this[_0x785128(0x181)]()&&this[_0x785128(0x198)]()['id']===this[_0x785128(0xb4)]()[_0x785128(0x228)]()&&(BattleManager[_0x785128(0x156)]&&this[_0x785128(0xb4)]()['passTurnFTB']());const _0x5e4e90=VisuMZ[_0x785128(0x140)]['RegExp'],_0x49c5d1=this['item']()[_0x785128(0xa8)];_0x49c5d1[_0x785128(0x1a4)](_0x5e4e90['PassTurn'])&&this['subject']()['passTurnFTB']();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x12c)]=Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x1ff)],Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x1ff)]=function(){const _0x142e97=_0x3f8e30;VisuMZ[_0x142e97(0x140)][_0x142e97(0x12c)][_0x142e97(0x1e6)](this),BattleManager['removeActionBattlersFTB'](),this[_0x142e97(0x14c)]()[_0x142e97(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x24b)]=Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x1d4)],Game_BattlerBase[_0x3f8e30(0xf3)]['appear']=function(){const _0x5d177c=_0x3f8e30;VisuMZ['BattleSystemFTB']['Game_BattlerBase_appear']['call'](this),BattleManager['removeActionBattlersFTB'](),this[_0x5d177c(0x14c)]()[_0x5d177c(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x251)]=Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x1c3)],Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x1c3)]=function(){const _0x3fa186=_0x3f8e30;VisuMZ[_0x3fa186(0x140)][_0x3fa186(0x251)][_0x3fa186(0x1e6)](this),BattleManager[_0x3fa186(0x17b)](),this[_0x3fa186(0x14c)]()['recalculateActionsFTB']();},Game_BattlerBase[_0x3f8e30(0xf3)]['passTurnFTB']=function(){const _0x5e7a45=_0x3f8e30;this[_0x5e7a45(0x21b)]=!![],BattleManager[_0x5e7a45(0x17b)]();},Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x146)]=function(){const _0x4eda9e=_0x3f8e30;return!!this[_0x4eda9e(0x21b)];},Game_BattlerBase['_FTB_ACTION_BASE']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0xed)],Game_BattlerBase['_FTB_ACTION_AGI_BUFF']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0x115)],Game_BattlerBase[_0x3f8e30(0xe2)]=VisuMZ['BattleSystemFTB'][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)]['AgiDebuff'],Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x112)]=function(){const _0x35f48b=_0x3f8e30;let _0x5d1ea4=Game_BattlerBase[_0x35f48b(0x236)];if(this[_0x35f48b(0x1e7)]===undefined)this[_0x35f48b(0xb3)]();const _0x20f1d2=this[_0x35f48b(0x1e7)][0x6]||0x0;if(_0x20f1d2>0x0&&Game_BattlerBase['_FTB_ACTION_AGI_BUFF'])_0x5d1ea4+=_0x20f1d2;else _0x20f1d2<0x0&&Game_BattlerBase[_0x35f48b(0xe2)]&&(_0x5d1ea4+=_0x20f1d2);const _0x4ae4eb=VisuMZ[_0x35f48b(0x140)][_0x35f48b(0xc7)],_0x1921c5=this['traitObjects']();for(const _0x41feb1 of _0x1921c5){if(!_0x41feb1)continue;const _0x34d320=_0x41feb1['note'];_0x34d320[_0x35f48b(0x1a4)](_0x4ae4eb['ActionPointTraitPlus'])&&(_0x5d1ea4+=Number(RegExp['$1']));}return Math[_0x35f48b(0x23f)](0x0,_0x5d1ea4);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x17a)]=Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x153)],Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x153)]=function(){const _0x3815a3=_0x3f8e30;VisuMZ[_0x3815a3(0x140)][_0x3815a3(0x17a)][_0x3815a3(0x1e6)](this),this['friendsUnit']()[_0x3815a3(0x223)]();},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x184)]=Game_BattlerBase['prototype'][_0x3f8e30(0x185)],Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x185)]=function(_0xb95096){const _0x1ebbab=_0x3f8e30;if(SceneManager['isSceneBattle']()&&BattleManager[_0x1ebbab(0x159)]()){const _0x862f5a=DataManager[_0x1ebbab(0xda)](_0xb95096);if(_0x862f5a>this[_0x1ebbab(0x14c)]()[_0x1ebbab(0x10d)]())return![];}return VisuMZ['BattleSystemFTB'][_0x1ebbab(0x184)][_0x1ebbab(0x1e6)](this,_0xb95096);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x203)]=Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x13b)],Game_Battler['prototype'][_0x3f8e30(0x13b)]=function(_0x214b8f){const _0x4136ec=_0x3f8e30;VisuMZ[_0x4136ec(0x140)]['Game_Battler_useItem'][_0x4136ec(0x1e6)](this,_0x214b8f),this['payActionCostFTB'](_0x214b8f);},Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0xd4)]=function(_0x866a1b){const _0x232f7c=_0x3f8e30;if(!_0x866a1b)return;if(!SceneManager[_0x232f7c(0x1f5)]())return;if(!BattleManager[_0x232f7c(0x159)]())return;const _0x15003b=BattleManager[_0x232f7c(0x22e)];if(_0x15003b&&_0x15003b['_forceAction'])return;const _0x3f545a=DataManager[_0x232f7c(0xda)](_0x866a1b);this['friendsUnit']()['reduceActionsFTB'](_0x3f545a);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x22a)]=Game_Battler['prototype'][_0x3f8e30(0x1eb)],Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x1eb)]=function(){const _0x4b68ee=_0x3f8e30;this['_bypassStateTurnUpdatesFTB']=BattleManager[_0x4b68ee(0x159)]()&&BattleManager['_FTB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS'],VisuMZ[_0x4b68ee(0x140)][_0x4b68ee(0x22a)][_0x4b68ee(0x1e6)](this),delete this[_0x4b68ee(0x242)];},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x15d)]=Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x207)],Game_BattlerBase[_0x3f8e30(0xf3)][_0x3f8e30(0x207)]=function(){const _0x468739=_0x3f8e30;if(this[_0x468739(0x242)])return;VisuMZ[_0x468739(0x140)]['Game_BattlerBase_updateStateTurns'][_0x468739(0x1e6)](this);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x102)]=Game_BattlerBase['prototype'][_0x3f8e30(0x1c5)],Game_BattlerBase['prototype'][_0x3f8e30(0x1c5)]=function(){const _0x26300c=_0x3f8e30;if(this[_0x26300c(0x242)])return;VisuMZ[_0x26300c(0x140)][_0x26300c(0x102)]['call'](this);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x213)]=Game_Battler[_0x3f8e30(0xf3)]['addState'],Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x1f9)]=function(_0x20a825){const _0x15baa5=_0x3f8e30;VisuMZ['BattleSystemFTB']['Game_Battler_addState'][_0x15baa5(0x1e6)](this,_0x20a825),this[_0x15baa5(0x14c)]()[_0x15baa5(0x223)]();},VisuMZ['BattleSystemFTB']['Game_Battler_removeState']=Game_Battler['prototype'][_0x3f8e30(0xa0)],Game_Battler['prototype'][_0x3f8e30(0xa0)]=function(_0x2adb64){const _0x8dbd56=_0x3f8e30;VisuMZ[_0x8dbd56(0x140)]['Game_Battler_removeState']['call'](this,_0x2adb64),this['friendsUnit']()[_0x8dbd56(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xe9)]=Game_Battler[_0x3f8e30(0xf3)]['addBuff'],Game_Battler['prototype'][_0x3f8e30(0x189)]=function(_0x10118f,_0x12f555){const _0xdf905c=_0x3f8e30;VisuMZ['BattleSystemFTB']['Game_Battler_addBuff'][_0xdf905c(0x1e6)](this,_0x10118f,_0x12f555),this[_0xdf905c(0x14c)]()[_0xdf905c(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x9d)]=Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x1d7)],Game_Battler['prototype'][_0x3f8e30(0x1d7)]=function(_0x5d8ca6,_0x48ab7f){const _0x2e93e2=_0x3f8e30;VisuMZ[_0x2e93e2(0x140)][_0x2e93e2(0x9d)]['call'](this,_0x5d8ca6,_0x48ab7f),this[_0x2e93e2(0x14c)]()[_0x2e93e2(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x128)]=Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x1bc)],Game_Battler['prototype']['removeBuff']=function(_0x599669){const _0x1a227b=_0x3f8e30;VisuMZ[_0x1a227b(0x140)][_0x1a227b(0x128)][_0x1a227b(0x1e6)](this,_0x599669),this[_0x1a227b(0x14c)]()[_0x1a227b(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x1a5)]=Game_Battler[_0x3f8e30(0xf3)][_0x3f8e30(0x12f)],Game_Battler['prototype'][_0x3f8e30(0x12f)]=function(_0xa3a1e,_0x2c7950){const _0x358454=_0x3f8e30;BattleManager[_0x358454(0x159)]()?this[_0x358454(0x12e)](_0xa3a1e,_0x2c7950):VisuMZ[_0x358454(0x140)][_0x358454(0x1a5)][_0x358454(0x1e6)](this,_0xa3a1e,_0x2c7950);},Game_Battler[_0x3f8e30(0xf3)]['forceActionFTB']=function(_0x4af415,_0x561d40){const _0x1bf243=_0x3f8e30,_0x3b16f3=new Game_Action(this,!![]);_0x3b16f3[_0x1bf243(0xf0)](_0x4af415),_0x3b16f3[_0x1bf243(0x227)]=!![];if(_0x561d40===-0x2)_0x3b16f3[_0x1bf243(0x117)](this[_0x1bf243(0x200)]);else _0x561d40===-0x1?_0x3b16f3[_0x1bf243(0x1a6)]():_0x3b16f3[_0x1bf243(0x117)](_0x561d40);this[_0x1bf243(0x94)][_0x1bf243(0xb6)](_0x3b16f3);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x1b6)]=BattleManager[_0x3f8e30(0x12f)],BattleManager[_0x3f8e30(0x12f)]=function(_0xcb5db2){const _0x105c16=_0x3f8e30;BattleManager[_0x105c16(0x159)]()?this[_0x105c16(0x12e)](_0xcb5db2):VisuMZ['BattleSystemFTB'][_0x105c16(0x1b6)]['call'](this,_0xcb5db2);},BattleManager[_0x3f8e30(0x12e)]=function(_0x30fab9){const _0x4ad79e=_0x3f8e30,_0x1d8627=JsonEx[_0x4ad79e(0x19f)](_0x30fab9[_0x4ad79e(0xbb)]());this[_0x4ad79e(0x1c1)][_0x4ad79e(0x1b9)]([_0x30fab9,_0x1d8627]);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x150)]=Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x20c)],Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x20c)]=function(){const _0x491d55=_0x3f8e30;if(BattleManager[_0x491d55(0x159)]()){if(this['battler']())this['battler']()[_0x491d55(0x120)]();return![];}return VisuMZ[_0x491d55(0x140)][_0x491d55(0x150)]['call'](this);},VisuMZ[_0x3f8e30(0x140)]['Game_Actor_changeEquip']=Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0xd1)],Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0xd1)]=function(_0x3f907e,_0x2a9150){const _0x36729a=_0x3f8e30;VisuMZ[_0x36729a(0x140)][_0x36729a(0x19b)][_0x36729a(0x1e6)](this,_0x3f907e,_0x2a9150),this[_0x36729a(0x14c)]()[_0x36729a(0x223)]();},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x1f2)]=Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0xa2)],Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0xa2)]=function(_0x4af6e0,_0x51f5ee){const _0x357a6f=_0x3f8e30;VisuMZ[_0x357a6f(0x140)][_0x357a6f(0x1f2)][_0x357a6f(0x1e6)](this,_0x4af6e0,_0x51f5ee),this['friendsUnit']()[_0x357a6f(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x138)]=Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x1fb)],Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x1fb)]=function(_0x1f6d91,_0x28062e){const _0x2dddff=_0x3f8e30;VisuMZ[_0x2dddff(0x140)][_0x2dddff(0x138)]['call'](this,_0x1f6d91,_0x28062e),this[_0x2dddff(0x14c)]()[_0x2dddff(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x8d)]=Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x192)],Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x192)]=function(_0x5f1469){const _0x1d6861=_0x3f8e30;VisuMZ[_0x1d6861(0x140)][_0x1d6861(0x8d)][_0x1d6861(0x1e6)](this,_0x5f1469),this[_0x1d6861(0x14c)]()['recalculateActionsFTB']();},VisuMZ['BattleSystemFTB']['Game_Actor_releaseUnequippableItems']=Game_Actor[_0x3f8e30(0xf3)]['releaseUnequippableItems'],Game_Actor[_0x3f8e30(0xf3)]['releaseUnequippableItems']=function(_0x1ddfbc){const _0x3be98f=_0x3f8e30;VisuMZ[_0x3be98f(0x140)][_0x3be98f(0x1e3)][_0x3be98f(0x1e6)](this,_0x1ddfbc),this[_0x3be98f(0x14c)]()[_0x3be98f(0x223)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xd3)]=Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x109)],Game_Actor[_0x3f8e30(0xf3)][_0x3f8e30(0x109)]=function(_0x153a10,_0x58c07c){const _0x9f85f9=_0x3f8e30;VisuMZ[_0x9f85f9(0x140)][_0x9f85f9(0xd3)][_0x9f85f9(0x1e6)](this,_0x153a10,_0x58c07c),this[_0x9f85f9(0x14c)]()[_0x9f85f9(0x223)]();},VisuMZ[_0x3f8e30(0x140)]['Game_Enemy_transform']=Game_Enemy['prototype'][_0x3f8e30(0x105)],Game_Enemy[_0x3f8e30(0xf3)][_0x3f8e30(0x105)]=function(_0x402add){const _0x4f5234=_0x3f8e30;VisuMZ[_0x4f5234(0x140)][_0x4f5234(0x13e)][_0x4f5234(0x1e6)](this,_0x402add),this[_0x4f5234(0x14c)]()[_0x4f5234(0x223)]();},Game_Unit['_FTB_MAX_ACTIONS']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0xdb)],Game_Unit[_0x3f8e30(0x1fd)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0x1f0)],Game_Unit[_0x3f8e30(0xd5)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0x11d)][_0x3f8e30(0x101)],Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0x14e)]=function(){const _0x46248c=_0x3f8e30;this[_0x46248c(0x19c)](),this['setCurrentActionsFTB'](this[_0x46248c(0xd0)]());},Game_Unit['prototype'][_0x3f8e30(0x19c)]=function(){const _0x4e9fd1=_0x3f8e30;this[_0x4e9fd1(0x131)]=!![];let _0xd1c173=0x0,_0x295a33=this[_0x4e9fd1(0x1a9)]()[_0x4e9fd1(0x232)](_0x35cfd7=>_0x35cfd7[_0x4e9fd1(0x15e)]());_0xd1c173=_0x295a33[_0x4e9fd1(0x196)]((_0x2ca902,_0x50d575)=>_0x2ca902+_0x50d575[_0x4e9fd1(0x112)](),_0xd1c173),_0xd1c173=_0xd1c173['clamp'](Game_Unit['_FTB_MIN_ACTIONS'],Game_Unit['_FTB_MAX_ACTIONS']),this[_0x4e9fd1(0x1ac)]=_0xd1c173;},Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0x223)]=function(){const _0x4601e2=_0x3f8e30;if(!BattleManager['isFTB']())return;if(!$gameParty[_0x4601e2(0x1d0)]())return;const _0xa461b3=this[_0x4601e2(0xd0)]();this[_0x4601e2(0x19c)]();let _0x56135a=this['getCurrentActionsFTB']();const _0x390a21=this[_0x4601e2(0xd0)]()-_0xa461b3;if(BattleManager['_FTB_RECALC_ADD_DIFF']&&_0x390a21>0x0)_0x56135a+=_0x390a21;if(BattleManager[_0x4601e2(0x1da)]&&_0x390a21<0x0)_0x56135a+=_0x390a21;_0x56135a=Math[_0x4601e2(0x10c)](_0x56135a,Game_Unit[_0x4601e2(0x164)]),this[_0x4601e2(0x1e4)](_0x56135a);},Game_Unit[_0x3f8e30(0xf3)]['getCurrentActionsFTB']=function(){const _0x42bc2f=_0x3f8e30;return this[_0x42bc2f(0xce)]||0x0;},Game_Unit[_0x3f8e30(0xf3)]['setCurrentActionsFTB']=function(_0x970194){const _0x4eec18=_0x3f8e30;this[_0x4eec18(0xce)]=Math['round'](_0x970194)[_0x4eec18(0xe5)](0x0,Game_Unit[_0x4eec18(0x164)]),!Game_Unit['_FTB_ACTION_OVERFLOW']&&(this['_ftbActionsCur']=Math[_0x4eec18(0x10c)](this['_ftbActionsCur'],this['getMaxActionsFTB']()));},Game_Unit['prototype']['gainCurrentActionsFTB']=function(_0x5686a5){this['setCurrentActionsFTB'](this['getCurrentActionsFTB']()+_0x5686a5);},Game_Unit['prototype'][_0x3f8e30(0x1e8)]=function(_0x495ead){const _0x260597=_0x3f8e30;this[_0x260597(0x16a)](-_0x495ead);},Game_Unit['prototype'][_0x3f8e30(0xd0)]=function(){const _0x5c1244=_0x3f8e30;return this[_0x5c1244(0x1ac)]||0x0;},Game_Unit[_0x3f8e30(0xf3)]['setMaxActionsFTB']=function(_0x4829f1){const _0x52a42e=_0x3f8e30;this[_0x52a42e(0x1ac)]=_0x4829f1[_0x52a42e(0xe5)](Game_Unit[_0x52a42e(0x1fd)],Game_Unit['_FTB_MAX_ACTIONS']);},Game_Unit['prototype']['reduceActionsFTB']=function(_0x2eae7c){this['loseCurrentActionsFTB'](_0x2eae7c);},Game_Unit['prototype'][_0x3f8e30(0x154)]=function(){const _0x34eaf9=_0x3f8e30;if(BattleManager['_subject']){if(this[_0x34eaf9(0x180)]()[_0x34eaf9(0x22c)](BattleManager[_0x34eaf9(0xb0)])){const _0x177558=BattleManager[_0x34eaf9(0xb0)][_0x34eaf9(0xbb)]();if(_0x177558&&_0x177558['_forceAction'])return!![];}}return this[_0x34eaf9(0xce)]=this[_0x34eaf9(0xce)]||0x0,this[_0x34eaf9(0xce)]>0x0;},Game_Unit['prototype'][_0x3f8e30(0x132)]=function(){const _0x49a818=_0x3f8e30;for(const _0x51f480 of this[_0x49a818(0x180)]()){if(!_0x51f480)continue;const _0x23da2f=_0x51f480['isAlive']();_0x51f480[_0x49a818(0x1eb)](),_0x51f480[_0x49a818(0x1b2)](),_0x23da2f&&_0x51f480[_0x49a818(0x1ab)]()&&_0x51f480[_0x49a818(0x1c3)]();}},Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0xfd)]=function(){const _0x539e72=_0x3f8e30;if(this[_0x539e72(0x10d)]()<=0x0)return!![];if(!this[_0x539e72(0x1a9)]()[_0x539e72(0x199)](_0x319bc3=>_0x319bc3[_0x539e72(0x15e)]()))return!![];return![];},Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0x20b)]=function(){const _0x4b1adc=_0x3f8e30;for(const _0x27cdbe of this[_0x4b1adc(0x180)]()){if(!_0x27cdbe)continue;_0x27cdbe[_0x4b1adc(0x207)](),_0x27cdbe[_0x4b1adc(0xa3)](0x2),_0x27cdbe[_0x4b1adc(0x1c5)](),_0x27cdbe[_0x4b1adc(0x1b2)]();}},Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0x1fe)]=function(){const _0x4dcb23=_0x3f8e30;for(const _0x1f25e5 of this[_0x4dcb23(0x180)]()){if(!_0x1f25e5)continue;_0x1f25e5[_0x4dcb23(0x21b)]=![];}},Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0x1b7)]=function(){const _0x3abe2d=_0x3f8e30,_0x558823=this[_0x3abe2d(0x180)]();return Math[_0x3abe2d(0x10c)](..._0x558823[_0x3abe2d(0xc5)](_0x4126e9=>_0x4126e9[_0x3abe2d(0x231)]));},Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0xac)]=function(){const _0x13d456=_0x3f8e30,_0x3c76b2=this[_0x13d456(0x180)]();return Math['max'](..._0x3c76b2[_0x13d456(0xc5)](_0x2ca755=>_0x2ca755[_0x13d456(0x231)]));},Game_Unit[_0x3f8e30(0xf3)]['ftbTotalAgility']=function(){const _0x35f6f9=_0x3f8e30,_0x4fecbc=this[_0x35f6f9(0x180)]();return _0x4fecbc[_0x35f6f9(0x196)]((_0x2c9dbc,_0x512a6e)=>_0x2c9dbc+_0x512a6e['agi'],0x0);},VisuMZ['BattleSystemFTB']['Game_Unit_onBattleStart']=Game_Unit[_0x3f8e30(0xf3)][_0x3f8e30(0x19a)],Game_Unit['prototype'][_0x3f8e30(0x19a)]=function(_0x5a4a3d){const _0x79f3a6=_0x3f8e30;VisuMZ[_0x79f3a6(0x140)][_0x79f3a6(0x191)][_0x79f3a6(0x1e6)](this,_0x5a4a3d),BattleManager[_0x79f3a6(0x159)]()&&(this[_0x79f3a6(0x1a2)]=0x0);},Game_Unit['prototype'][_0x3f8e30(0x1f1)]=function(){const _0x39f1db=_0x3f8e30,_0x4769a9=this[_0x39f1db(0x1a9)]();if(BattleManager[_0x39f1db(0x226)])return _0x4769a9;if(BattleManager[_0x39f1db(0xc2)])return _0x4769a9;this['_ftbLastIndex']=this[_0x39f1db(0x1a2)]||0x0;while(!_0x4769a9[_0x39f1db(0x199)](_0x44de08=>_0x44de08[_0x39f1db(0x24d)]()===this[_0x39f1db(0x1a2)])){const _0x12bed1=this['members'](),_0x55b452=_0x12bed1[this[_0x39f1db(0x1a2)]];let _0x1eb9dd=_0x12bed1[_0x39f1db(0x1ec)](_0x55b452)+0x1;if(_0x1eb9dd>=_0x12bed1[_0x39f1db(0x99)])_0x1eb9dd=0x0;this[_0x39f1db(0x1a2)]=_0x1eb9dd;}for(;;){const _0x12ba08=_0x4769a9[0x0]['index']();if(_0x12ba08===this[_0x39f1db(0x1a2)])break;_0x4769a9[_0x39f1db(0x1b9)](_0x4769a9[_0x39f1db(0x152)]());}return _0x4769a9;},Game_Unit['prototype'][_0x3f8e30(0x124)]=function(_0x384330){const _0x52ade8=_0x3f8e30;this[_0x52ade8(0x1a2)]=_0x384330?_0x384330[_0x52ade8(0x24d)]():0x0,this[_0x52ade8(0x1a2)]++;},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x1c9)]=Scene_Battle[_0x3f8e30(0xf3)]['createActorCommandWindow'],Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0x1ef)]=function(){const _0x91b784=_0x3f8e30;VisuMZ[_0x91b784(0x140)][_0x91b784(0x1c9)][_0x91b784(0x1e6)](this),BattleManager[_0x91b784(0x159)]()&&this[_0x91b784(0x139)]();},Scene_Battle['prototype'][_0x3f8e30(0x139)]=function(){const _0x38efbc=_0x3f8e30,_0x269410=this[_0x38efbc(0x14d)];this[_0x38efbc(0x9e)]()&&delete _0x269410['_handlers'][_0x38efbc(0xdc)];},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x92)]=Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0x11c)],Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0x11c)]=function(){const _0x40f02f=_0x3f8e30;BattleManager['isFTB']()?this[_0x40f02f(0x1c6)]():VisuMZ['BattleSystemFTB'][_0x40f02f(0x92)][_0x40f02f(0x1e6)](this);},Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0x1c6)]=function(){const _0x3338a2=_0x3f8e30;this['_partyCommandWindow'][_0x3338a2(0xf9)](),this[_0x3338a2(0x14d)][_0x3338a2(0x8a)]();},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xc0)]=Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0x1d8)],Scene_Battle['prototype'][_0x3f8e30(0x1d8)]=function(){const _0xffaa45=_0x3f8e30;BattleManager[_0xffaa45(0x159)]()?this[_0xffaa45(0x177)]():VisuMZ[_0xffaa45(0x140)]['Scene_Battle_commandFight']['call'](this);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x1ed)]=Scene_Battle[_0x3f8e30(0xf3)]['createAllWindows'],Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0xff)]=function(){const _0x442044=_0x3f8e30;VisuMZ['BattleSystemFTB'][_0x442044(0x1ed)][_0x442044(0x1e6)](this),this[_0x442044(0x163)]();},Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0x163)]=function(){const _0x1d8b68=_0x3f8e30;if(!BattleManager[_0x1d8b68(0x159)]())return;const _0x12b821=this[_0x1d8b68(0x240)](this['_windowLayer']);this[_0x1d8b68(0x96)]=new Window_FTB_ActionCount(),this[_0x1d8b68(0x96)][_0x1d8b68(0xc4)]($gameTroop),this[_0x1d8b68(0x1e5)](this[_0x1d8b68(0x96)],_0x12b821),this[_0x1d8b68(0x1d5)]=new Window_FTB_ActionCount(),this['_ftbPartyActionCountWindow'][_0x1d8b68(0xc4)]($gameParty),this[_0x1d8b68(0x1e5)](this['_ftbPartyActionCountWindow'],_0x12b821),this[_0x1d8b68(0x123)]();},Scene_Battle[_0x3f8e30(0xf3)][_0x3f8e30(0x123)]=function(){const _0x2ed54e=_0x3f8e30;if(!BattleManager['isFTB']())return;if(!this[_0x2ed54e(0x104)])return;const _0x31b810=Window_FTB_ActionCount['Settings'];if(_0x31b810[_0x2ed54e(0xea)])return;this[_0x2ed54e(0x104)]['y']+=_0x31b810[_0x2ed54e(0x234)];},Window_Base['_FTB_COST_POSITION']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0xab)][_0x3f8e30(0xa5)],Window_Base[_0x3f8e30(0x20e)]=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)][_0x3f8e30(0xab)][_0x3f8e30(0x218)],Window_Base['_FTB_COST_SHOW_GUARD']=VisuMZ['BattleSystemFTB'][_0x3f8e30(0xb1)][_0x3f8e30(0xab)][_0x3f8e30(0x13c)],Window_Base[_0x3f8e30(0x17f)]=VisuMZ[_0x3f8e30(0x140)]['Settings'][_0x3f8e30(0xab)]['Show_0_Action_Cost'],Window_Base[_0x3f8e30(0x127)]=VisuMZ[_0x3f8e30(0x140)]['Settings'][_0x3f8e30(0xab)][_0x3f8e30(0x98)],VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xaa)]=Window_Base[_0x3f8e30(0xf3)][_0x3f8e30(0x126)],Window_Base[_0x3f8e30(0xf3)]['makeAdditionalSkillCostText']=function(_0x5135ff,_0x47df40,_0x83c7b2){const _0x9f2ff6=_0x3f8e30;return _0x83c7b2=VisuMZ[_0x9f2ff6(0x140)][_0x9f2ff6(0xaa)][_0x9f2ff6(0x1e6)](this,_0x5135ff,_0x47df40,_0x83c7b2),_0x83c7b2=this['makeAdditionalCostTextFTB'](_0x5135ff,_0x47df40,_0x83c7b2),_0x83c7b2;},VisuMZ['BattleSystemFTB']['Window_Base_drawItemNumber']=Window_Base['prototype'][_0x3f8e30(0x1cc)],Window_Base['prototype']['drawItemNumber']=function(_0x5cdc8c,_0x201f5a,_0x586857,_0x563b58){const _0x3b9cf9=_0x3f8e30;BattleManager[_0x3b9cf9(0x159)]()&&this['constructor']===Window_BattleItem?this[_0x3b9cf9(0x18e)](_0x5cdc8c,_0x201f5a,_0x586857,_0x563b58):VisuMZ['BattleSystemFTB'][_0x3b9cf9(0x11f)][_0x3b9cf9(0x1e6)](this,_0x5cdc8c,_0x201f5a,_0x586857,_0x563b58),this[_0x3b9cf9(0x216)]();},Window_Base[_0x3f8e30(0xf3)][_0x3f8e30(0x18e)]=function(_0x5e4ff3,_0x8318d1,_0x1943eb,_0x16e109){const _0x508885=_0x3f8e30,_0x28e5b8=BattleManager[_0x508885(0xbe)]||$gameParty[_0x508885(0x180)]()[0x0],_0x5b5963=this['makeAdditionalCostTextFTB'](_0x28e5b8,_0x5e4ff3,''),_0x5655a3=this[_0x508885(0x129)](_0x5b5963)[_0x508885(0x219)],_0x375e76=Window_Base['_FTB_COST_POSITION'];let _0xa886fe=_0x8318d1+_0x16e109-_0x5655a3;if(_0x5b5963==='')VisuMZ[_0x508885(0x140)]['Window_Base_drawItemNumber'][_0x508885(0x1e6)](this,_0x5e4ff3,_0x8318d1,_0x1943eb,_0x16e109);else{if(this[_0x508885(0x183)](_0x5e4ff3)){this[_0x508885(0x216)]();const _0x751db3=VisuMZ[_0x508885(0x10a)][_0x508885(0xb1)]['ItemScene'];this['contents'][_0x508885(0x202)]=_0x751db3[_0x508885(0x1f8)];if(_0x375e76){const _0x279f34=_0x751db3['ItemQuantityFmt'],_0x11e30f=_0x279f34[_0x508885(0x18c)]($gameParty[_0x508885(0x246)](_0x5e4ff3)),_0x5324ba=this[_0x508885(0x19d)](_0x11e30f+this['skillCostSeparator']());_0xa886fe-=_0x5324ba;}else _0x16e109-=this[_0x508885(0x19d)](this['skillCostSeparator']())+_0x5655a3;VisuMZ[_0x508885(0x140)][_0x508885(0x11f)][_0x508885(0x1e6)](this,_0x5e4ff3,_0x8318d1,_0x1943eb,_0x16e109);}}this[_0x508885(0x113)](_0x5b5963,_0xa886fe,_0x1943eb);},Window_Base['prototype']['makeAdditionalCostTextFTB']=function(_0x1f9b4c,_0x32a635,_0x4766b1){const _0x305c08=_0x3f8e30;if(!BattleManager[_0x305c08(0x159)]())return _0x4766b1;if(!_0x1f9b4c)return _0x4766b1;if(!_0x32a635)return _0x4766b1;if(_0x32a635[_0x305c08(0xa8)][_0x305c08(0x1a4)](VisuMZ[_0x305c08(0x140)][_0x305c08(0xc7)][_0x305c08(0x24f)]))return _0x4766b1;let _0x5a1767=DataManager[_0x305c08(0xda)](_0x32a635);const _0x39b071=Window_Base[_0x305c08(0xcb)],_0xdde45a=Window_Base[_0x305c08(0x20e)],_0x1c73d8=Window_Base['_FTB_COST_SHOW_GUARD'],_0x50837a=Window_Base['_FTB_COST_SHOW_0'],_0x3d9d22=Window_Base[_0x305c08(0x127)];if(_0x32a635[_0x305c08(0xa8)][_0x305c08(0x1a4)](VisuMZ[_0x305c08(0x140)][_0x305c08(0xc7)][_0x305c08(0x145)])){if(_0x5a1767<0x0)return _0x4766b1;}else{if(DataManager[_0x305c08(0x181)](_0x32a635)&&this[_0x305c08(0x167)]===Window_ActorCommand){if(!_0xdde45a&&_0x32a635['id']===_0x1f9b4c[_0x305c08(0x210)]())return _0x4766b1;if(!_0x1c73d8&&_0x32a635['id']===_0x1f9b4c[_0x305c08(0x228)]())return _0x4766b1;}if(_0x5a1767<0x0)return _0x4766b1;if(!_0x50837a&&_0x5a1767===0x0)return _0x4766b1;if(!_0x3d9d22&&_0x5a1767===0x1)return _0x4766b1;}const _0x1e4b88=_0x305c08(0x1db)[_0x305c08(0x18c)](ImageManager['ftbActorActionsIcon']),_0x2a1919=TextManager[_0x305c08(0x155)];let _0x2bab08=TextManager[_0x305c08(0x15f)]['format'](_0x5a1767,_0x2a1919,_0x1e4b88);if(_0x4766b1==='')_0x4766b1+=_0x2bab08;else _0x39b071?_0x4766b1=_0x2bab08+this[_0x305c08(0x15c)]()+_0x4766b1:_0x4766b1=_0x4766b1+this[_0x305c08(0x15c)]()+_0x2bab08;return _0x4766b1;},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x119)]=Window_Help[_0x3f8e30(0xf3)][_0x3f8e30(0x16f)],Window_Help['prototype'][_0x3f8e30(0x16f)]=function(_0x268f54){const _0x2587c0=_0x3f8e30;BattleManager[_0x2587c0(0x159)]()&&_0x268f54&&_0x268f54[_0x2587c0(0xa8)]&&_0x268f54[_0x2587c0(0xa8)]['match'](/<(?:FTB) HELP>\s*([\s\S]*)\s*<\/(?:FTB) HELP>/i)?this['setText'](String(RegExp['$1'])):VisuMZ['BattleSystemFTB'][_0x2587c0(0x119)]['call'](this,_0x268f54);},Window_Selectable['prototype'][_0x3f8e30(0x204)]=function(){const _0xe78e9e=_0x3f8e30;return this[_0xe78e9e(0x167)]===Window_ActorCommand&&BattleManager[_0xe78e9e(0x159)]()&&BattleManager['_FTB_FREE_CHANGE'];},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x16b)]=Window_Selectable[_0x3f8e30(0xf3)]['cursorRight'],Window_Selectable[_0x3f8e30(0xf3)]['cursorRight']=function(_0x594dce){const _0x3969c9=_0x3f8e30;this['ftbFreeRangeSwitch']()&&this['maxCols']()===0x1?this[_0x3969c9(0x9b)](!![]):VisuMZ[_0x3969c9(0x140)][_0x3969c9(0x16b)][_0x3969c9(0x1e6)](this,_0x594dce);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x1f3)]=Window_Selectable['prototype'][_0x3f8e30(0xd2)],Window_Selectable[_0x3f8e30(0xf3)][_0x3f8e30(0xd2)]=function(_0x52d874){const _0x2098b3=_0x3f8e30;this[_0x2098b3(0x204)]()&&this[_0x2098b3(0x13a)]()===0x1?this[_0x2098b3(0x9b)](![]):VisuMZ['BattleSystemFTB'][_0x2098b3(0x1f3)][_0x2098b3(0x1e6)](this,_0x52d874);},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x136)]=Window_Selectable[_0x3f8e30(0xf3)][_0x3f8e30(0x10b)],Window_Selectable[_0x3f8e30(0xf3)]['cursorPagedown']=function(){const _0x5b4947=_0x3f8e30;this[_0x5b4947(0x204)]()?this[_0x5b4947(0x9b)](!![]):VisuMZ['BattleSystemFTB'][_0x5b4947(0x136)][_0x5b4947(0x1e6)](this);},VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0x8f)]=Window_Selectable[_0x3f8e30(0xf3)]['cursorPageup'],Window_Selectable['prototype'][_0x3f8e30(0x1a7)]=function(){const _0xe43954=_0x3f8e30;this[_0xe43954(0x204)]()?this[_0xe43954(0x9b)](![]):VisuMZ[_0xe43954(0x140)][_0xe43954(0x8f)][_0xe43954(0x1e6)](this);},Window_ActorCommand[_0x3f8e30(0xf3)]['ftbSwitchActorDirection']=function(_0x36e116){const _0x4d1673=_0x3f8e30,_0x228654=BattleManager[_0x4d1673(0x18a)];let _0x552b45=$gameParty[_0x4d1673(0xb2)]()[_0x4d1673(0x1ec)](_0x228654);const _0x1132f4=$gameParty['battleMembers']()['length']-0x1;let _0x50f133=$gameParty[_0x4d1673(0xb2)]()[_0x552b45];for(;;){_0x552b45+=_0x36e116?0x1:-0x1;if(_0x552b45<0x0)_0x552b45=_0x1132f4;if(_0x552b45>_0x1132f4)_0x552b45=0x0;_0x50f133=$gameParty[_0x4d1673(0xb2)]()[_0x552b45];if(_0x50f133&&_0x50f133[_0x4d1673(0x135)]()&&!_0x50f133[_0x4d1673(0x146)]())break;if(_0x50f133===_0x228654)break;}this[_0x4d1673(0xe1)](_0x228654,_0x50f133);},Window_ActorCommand[_0x3f8e30(0xf3)]['processSwitchActors']=function(_0x1c753a,_0x489c31){const _0x4333a2=_0x3f8e30;if(_0x1c753a===_0x489c31)return;if(_0x1c753a[_0x4333a2(0x11b)]())_0x1c753a[_0x4333a2(0x11b)]()[_0x4333a2(0x249)]();this['playCursorSound'](),BattleManager['_subject']=_0x489c31,BattleManager['_currentActor']=_0x489c31,BattleManager[_0x4333a2(0x21a)](),SceneManager[_0x4333a2(0xb8)][_0x4333a2(0x177)]();},VisuMZ['BattleSystemFTB'][_0x3f8e30(0x106)]=Window_Selectable[_0x3f8e30(0xf3)][_0x3f8e30(0x21c)],Window_Selectable[_0x3f8e30(0xf3)][_0x3f8e30(0x21c)]=function(){const _0x132983=_0x3f8e30;BattleManager['isFTB']()&&BattleManager['_FTB_FREE_CHANGE']&&this['constructor']===Window_BattleStatus?this[_0x132983(0xe3)]():VisuMZ[_0x132983(0x140)][_0x132983(0x106)][_0x132983(0x1e6)](this);},Window_BattleStatus[_0x3f8e30(0xf3)][_0x3f8e30(0xe3)]=function(){const _0x37cc63=_0x3f8e30;this[_0x37cc63(0x239)]()&&(TouchInput[_0x37cc63(0xe0)]()&&this[_0x37cc63(0x214)](!![]));},Window_BattleStatus[_0x3f8e30(0xf3)][_0x3f8e30(0x214)]=function(_0x1d0712){const _0x50d890=_0x3f8e30,_0x47e1fc=SceneManager[_0x50d890(0xb8)]['_actorCommandWindow'];if(!_0x47e1fc)return;if(!_0x47e1fc[_0x50d890(0xf5)])return;this[_0x50d890(0x133)]=![];const _0x5be6a3=this[_0x50d890(0x24d)](),_0xc0bdb1=this[_0x50d890(0x168)]();if(_0xc0bdb1>=0x0){const _0x445b13=$gameParty[_0x50d890(0xb2)]()[_0x5be6a3],_0x52f091=$gameParty[_0x50d890(0xb2)]()[_0xc0bdb1];this['canActorBeSelectedFTB'](_0x52f091)&&(_0xc0bdb1===this[_0x50d890(0x24d)]()&&(this[_0x50d890(0x133)]=!![]),this[_0x50d890(0xcc)](_0xc0bdb1),_0x47e1fc[_0x50d890(0xe1)](_0x445b13,_0x52f091));}},Window_BattleStatus[_0x3f8e30(0xf3)][_0x3f8e30(0x90)]=function(_0x3f3155){const _0x50d1b6=_0x3f8e30;if(!_0x3f3155)return![];if(!_0x3f3155[_0x50d1b6(0x15e)]())return![];if(!_0x3f3155[_0x50d1b6(0x135)]())return![];if(_0x3f3155['isPassingTurnFTB']())return![];return!![];};function _0x238c(_0x319ece,_0x5ba61e){const _0x594245=_0x5942();return _0x238c=function(_0x238c8c,_0x191c7a){_0x238c8c=_0x238c8c-0x88;let _0x175e4f=_0x594245[_0x238c8c];return _0x175e4f;},_0x238c(_0x319ece,_0x5ba61e);}function _0x5942(){const _0x3eed22=['_ftbTeamEven','friendsUnit','_actorCommandWindow','startTurnFTB','RepositionTopHelpX','Game_Actor_selectNextCommand','createStartingCoordinates','shift','clearStates','canActFTB','ftbActionPointsAbbr','_FTB_GUARD_PASS','Game_Action_speed','Game_Party_canInput','isFTB','1753012CTCcgF','in\x20order\x20for\x20VisuMZ_2_BattleSystemFTB\x20to\x20work.','skillCostSeparator','Game_BattlerBase_updateStateTurns','canMove','ftbCostFormat','agility','FreeChange','JSON','createActionCountWindowsFTB','_FTB_MAX_ACTIONS','835228HkOIuR','BattleManager_setup','constructor','hitIndex','turnCount','gainCurrentActionsFTB','Window_Selectable_cursorRight','EnemyActionPicture','loadSystem','ScreenBufferY','setItem','DrawActionsRemaining','ImageSize','PictureSmoothing','create','274888ovPYwN','ARRAYEVAL','imageSmoothingEnabled','startActorCommandSelection','initBattleSystemFTB','_preemptive','Game_BattlerBase_clearStates','removeActionBattlersFTB','_phase','EVAL','VisuMZ_1_BattleCore','_FTB_COST_SHOW_0','members','isSkill','GainDiff','isDrawItemNumber','Game_BattlerBase_canUse','canUse','ActionCountCostFmt','toUpperCase','setBattleSystem','addBuff','_currentActor','startInput','format','selectNextActor','drawItemNumberFTB','LoseDiff','ActorActionsIcon','Game_Unit_onBattleStart','discardEquip','RevivalAct','name','screenX','reduce','ftbCreateTeamSwitchText','item','some','onBattleStart','Game_Actor_changeEquip','createActionsFTB','textWidth','NewTurnResetIndex','makeDeepCopy','addLoadListener','actors','_ftbLastIndex','ActorActionPicture','match','Game_Battler_forceAction','decideRandomTarget','cursorPageup','drawText','aliveMembers','BattleManager_battleSys','isDead','_ftbActionsMax','initMembers','bind','Actor','ActorOffsetX','concat','startDamagePopup','addText','EmptyActionsIcon','IconSet','BattleManager_forceAction','ftbLowestAgility','_forcedActionFTB','push','createContentsArray','status','removeBuff','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','pop','allMembers','15HakYaG','_forcedBattlers','ARRAYSTR','performCollapse','64236OcOkXH','updateBuffTurns','commandCancelFTB','lowest\x20agi','Game_System_initialize','Scene_Battle_createActorCommandWindow','Nothing','EnemyActionsIcon','drawItemNumber','ActionsRemainingOffsetY','applyGlobal','startTurn','inBattle','isSideView','_FTB_KEEP_PREV_ACTOR','drawPicture','appear','_ftbPartyActionCountWindow','BattleManager_endAction','addDebuff','commandFight','RepositionTopHelpY','_FTB_RECALC_SUB_DIFF','\x5cI[%1]','padding','ImageGapDistance','_storedBitmaps','updatePadding','invokeCounterAttack','isItem','BattleManager_startTurn','Game_Actor_releaseUnequippableItems','setCurrentActionsFTB','addChildAt','call','_buffs','loseCurrentActionsFTB','drawImage','setBackgroundType','onTurnEnd','indexOf','Scene_Battle_createAllWindows','ftbEnemyActionsIcon','createActorCommandWindow','MinActions','ftbAliveMembers','Game_Actor_forceChangeEquip','Window_Selectable_cursorLeft','Game_Battler_onBattleStart','isSceneBattle','updatePosition','_statusWindow','ItemQuantityFontSize','addState','NeutralAdvantage','changeEquipById','BattleManager_processTurn','_FTB_MIN_ACTIONS','clearPassTurnFTB','hide','_lastTargetIndex','VisuMZ_3_BattleAI','fontSize','Game_Battler_useItem','ftbFreeRangeSwitch','BattleAI','2961427TBbXQN','updateStateTurns','isTeamBased','isActor','3134304eraXkp','updateStateTurnsFTB','selectNextCommand','keepPrevSubjectFTB','_FTB_COST_SHOW_ATTACK','refresh','attackSkillId','innerWidth','ftbTotalAgility','Game_Battler_addState','onTouchSelectFTB','ftbEmptyActionsIcon','resetFontSettings','visible','ShowCostForAttack','width','startActorInput','_passedTurnFTB','processTouch','Current','TroopTeamShiftFmt','TeamShiftWait','BattleManager_finishActorInput','endAction','BattleManager_makeActionOrders','recalculateActionsFTB','22byvvUI','waitCount','_FTB_RESET_INDEX','_forceAction','guardSkillId','BattleManager_endTurn','Game_Battler_onTurnEnd','_ftbTeamOdd','includes','total\x20agi','_action','_currentActions','windowRect','agi','filter','279Sjiysx','LogWindowTopOffsetY','DrawHorz','_FTB_ACTION_BASE','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','increaseTurn','isOpen','_FTB_RECALC_ADD_DIFF','average\x20agi','increaseTurnFTB','IconSmoothing','isTurnBased','max','getChildIndex','ARRAYJSON','_bypassStateTurnUpdatesFTB','ftb%1ActionsIcon','DTB','description','numItems','BattleManager_isTurnBased','_ftbTurnAdvantageUnit','stepBack','VisuMZ_1_SkillsStatesCore','Game_BattlerBase_appear','startInputFTB','index','initMembersFTB','HideActionPointCost','_unit','Game_Battler_performCollapse','VisuMZ_0_CoreEngine','FUNC','processTurnFTB','endActionFTB','close','getBattleSystem','exit','Game_Actor_discardEquip','RepositionTopForHelp','Window_Selectable_cursorPageup','canActorBeSelectedFTB','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Scene_Battle_commandCancel','_context','_actions','trim','_ftbTroopActionCountWindow','_inputting','Show_1_Action_Cost','length','_actionBattlers','ftbSwitchActorDirection','makeActionOrders','Game_Battler_addDebuff','isPartyCommandWindowDisabled','parameters','removeState','isTpb','forceChangeEquip','removeStatesAuto','KeepPrevActor','CostPosition','resetTurnCountFTB','finishActorInput','note','ScreenBufferX','Window_Base_makeAdditionalSkillCostText','General','ftbHighestAgility','_FTB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS','NUM','BattleManager_isActiveTpb','_subject','Settings','battleMembers','clearBuffs','subject','BattleManager_startBattle','unshift','_FTB_NEUTRAL_TURN_ADVANTAGE','_scene','selectNextActorFTB','updateTurn','currentAction','speed','ftbPartyTeamShift','_actor','blt','Scene_Battle_commandFight','_turnCountFTB','_FTB_FREE_CHANGE','_ftbActionCountVisible','setUnit','map','highest\x20agi','RegExp','innerHeight','sort','Game_Troop_increaseTurn','_FTB_COST_POSITION','select','enemies','_ftbActionsCur','EnemyOffsetX','getMaxActionsFTB','changeEquip','cursorLeft','Game_Actor_changeClass','payActionCostFTB','_FTB_ACTION_OVERFLOW','version','EnemyOffsetY','parse','1565550DibrZV','getActionCostFTB','MaxActions','cancel','applyGlobalFTB','Visible','makeActions','isTriggered','processSwitchActors','_FTB_ACTION_AGI_DEBUFF','processTouchFTB','ConvertParams','clamp','FTB','BattleManager_isTeamBased','ActionsRemainingOffsetX','Game_Battler_addBuff','BottomPosition','makeActionOrdersFTB','canDrawActionsRemaining','GenerateBase','endTurnFTB','battleSys','setSkill','BattleManager_startAction','BattleManager_endAllBattlersTurn','prototype','processTurn','active','player','round','update','setup','iconHeight','drawActionsRemaining','_ftbCurrentUnit','meetEndTurnConditionsFTB','MaxVisible','createAllWindows','opacity','AllowOverflow','Game_BattlerBase_updateBuffTurns','checkNeedsUpdate','_logWindow','transform','Window_Selectable_processTouch','endTurn','ActionPointCost','changeClass','ItemsEquipsCore','cursorPagedown','min','getCurrentActionsFTB','drawBigIcon','%1ActionPicture','random','startBattleFTB','ftbActionCount','drawTextEx','PartyTeamShiftFmt','AgiBuff','clear','setTarget','battleEnd','Window_Help_setItem','initialize','battler','commandCancel','Mechanics','floor','Window_Base_drawItemNumber','stepForward','BattleManager_startInput','BattleManager_isTpb','repositionLogWindowFTB','setLastFtbIndex','_surprise','makeAdditionalSkillCostText','_FTB_COST_SHOW_1','Game_Battler_removeBuff','textSizeEx','height','ARRAYNUM','Game_BattlerBase_hide','BattleManager_selectNextActor','forceActionFTB','forceAction','ftbTroopTeamShift','_inBattle','performTurnEndFTB','_doubleTouch','startBattle','canInput','Window_Selectable_cursorPagedown','updateVisibility','Game_Actor_changeEquipById','createActorCommandWindowFTB','maxCols','useItem','ShowCostForGuard','BattleManager_invokeCounterAttack','Game_Enemy_transform','ActionCountFull','BattleSystemFTB','loadPicture','_clearFtbForceActionSubject','registerCommand','_maxActions','ShowActionPointCost','isPassingTurnFTB','_FTB_BETWEEN_TEAMS_WAIT','STR','contents','setBattleSystemFTBActionCountVisible'];_0x5942=function(){return _0x3eed22;};return _0x5942();}function Window_FTB_ActionCount(){const _0x246589=_0x3f8e30;this[_0x246589(0x11a)](...arguments);}Window_FTB_ActionCount['prototype']=Object[_0x3f8e30(0x173)](Window_Base['prototype']),Window_FTB_ActionCount[_0x3f8e30(0xf3)][_0x3f8e30(0x167)]=Window_FTB_ActionCount,Window_FTB_ActionCount['Settings']=VisuMZ[_0x3f8e30(0x140)][_0x3f8e30(0xb1)]['ActionCountDisplay'],Window_FTB_ActionCount[_0x3f8e30(0xf3)]['initialize']=function(){const _0x32c922=_0x3f8e30,_0x533dc7=this['windowRect']();Window_Base[_0x32c922(0xf3)][_0x32c922(0x11a)][_0x32c922(0x1e6)](this,_0x533dc7),this[_0x32c922(0x1ea)](0x0),this[_0x32c922(0x1ad)](),this[_0x32c922(0x100)]=0x0;},Window_FTB_ActionCount[_0x3f8e30(0xf3)][_0x3f8e30(0x230)]=function(){const _0x1fbb45=_0x3f8e30;return new Rectangle(0x0,0x0,Graphics[_0x1fbb45(0x219)],Graphics[_0x1fbb45(0x12a)]);},Window_FTB_ActionCount['prototype'][_0x3f8e30(0x1ad)]=function(){const _0x29b9a1=_0x3f8e30;this[_0x29b9a1(0x250)]=null,this[_0x29b9a1(0x22f)]=0x0,this[_0x29b9a1(0x144)]=0x0;const _0x90ea5a=Window_FTB_ActionCount[_0x29b9a1(0xb1)];this[_0x29b9a1(0x1de)]={'ActorPicture':_0x90ea5a[_0x29b9a1(0x1a3)]?ImageManager['loadPicture'](_0x90ea5a[_0x29b9a1(0x1a3)]):'','EnemyPicture':_0x90ea5a[_0x29b9a1(0x16c)]?ImageManager[_0x29b9a1(0x141)](_0x90ea5a['EnemyActionPicture']):'','EmptyPicture':_0x90ea5a['EmptyActionPicture']?ImageManager[_0x29b9a1(0x141)](_0x90ea5a['EmptyActionPicture']):''};},Window_FTB_ActionCount[_0x3f8e30(0xf3)][_0x3f8e30(0x1df)]=function(){const _0x8a3f84=_0x3f8e30;this[_0x8a3f84(0x1dc)]=0x0;},Window_FTB_ActionCount[_0x3f8e30(0xf3)]['setUnit']=function(_0x2e3e12){const _0x42cf1c=_0x3f8e30;this['_unit']=_0x2e3e12,this[_0x42cf1c(0xf8)]();},Window_FTB_ActionCount[_0x3f8e30(0xf3)]['update']=function(){const _0x225d7b=_0x3f8e30;Window_Base[_0x225d7b(0xf3)][_0x225d7b(0xf8)][_0x225d7b(0x1e6)](this),this[_0x225d7b(0x103)](),this[_0x225d7b(0x1f6)](),this[_0x225d7b(0x137)]();},Window_FTB_ActionCount[_0x3f8e30(0xf3)]['checkNeedsUpdate']=function(){const _0x5bcd30=_0x3f8e30;if(!this[_0x5bcd30(0x250)])return;(this[_0x5bcd30(0x22f)]!==this[_0x5bcd30(0x250)][_0x5bcd30(0x10d)]()||this['_maxActions']!==this['_unit']['getMaxActionsFTB']())&&(this[_0x5bcd30(0x22f)]=this[_0x5bcd30(0x250)][_0x5bcd30(0x10d)](),this[_0x5bcd30(0x144)]=this[_0x5bcd30(0x250)][_0x5bcd30(0xd0)](),this[_0x5bcd30(0x20f)]());},Window_FTB_ActionCount['prototype'][_0x3f8e30(0x137)]=function(){const _0x2cfd42=_0x3f8e30;this[_0x2cfd42(0x217)]=$gameSystem['isBattleSystemFTBActionCountVisible']();},Window_FTB_ActionCount[_0x3f8e30(0xf3)]['refresh']=function(){const _0x473765=_0x3f8e30;this[_0x473765(0x149)][_0x473765(0x116)]();if(!this['_unit'])return;const _0x5960af=Window_FTB_ActionCount['Settings'];if(!_0x5960af)return;const _0xddac8d=this['createStartingCoordinates'](),_0x3694b3=this[_0x473765(0x1ba)](),_0x70989a=_0x5960af[_0x473765(0x171)]+_0x5960af[_0x473765(0x1dd)],_0x1d2ece=_0x5960af[_0x473765(0x235)];let _0x564e63=_0xddac8d['x'],_0x1d9f5c=_0xddac8d['y'];while(_0x3694b3[_0x473765(0x99)]>_0x5960af['MaxVisible']){_0x3694b3['shift']();}while(_0x3694b3[_0x473765(0x99)]>0x0){const _0xe030fe=_0x3694b3['shift']();this[_0x473765(0x1e9)](_0xe030fe,_0x564e63,_0x1d9f5c,_0x3694b3[_0x473765(0x99)]),_0x1d2ece?_0x564e63+=_0x70989a:_0x1d9f5c+=_0x70989a;}},Window_FTB_ActionCount[_0x3f8e30(0xf3)][_0x3f8e30(0x151)]=function(){const _0x142d8d=_0x3f8e30,_0x223b4f=Window_FTB_ActionCount[_0x142d8d(0xb1)],_0x343a0d=this[_0x142d8d(0x250)]===$gameParty,_0x5afa13=_0x223b4f['ImageSize'],_0x2fc940=_0x5afa13*(_0x223b4f['MaxVisible']-0x1)+_0x223b4f[_0x142d8d(0x1dd)]*(_0x223b4f[_0x142d8d(0xfe)]-0x2),_0x1bd95a=_0x223b4f[_0x142d8d(0x235)],_0x1abe5e=SceneManager[_0x142d8d(0xb8)][_0x142d8d(0x1f7)][_0x142d8d(0x12a)];let _0x487056=0x0,_0x42e7c4=0x0;const _0x22cc7d=_0x223b4f['BottomPosition'];if(_0x22cc7d){_0x42e7c4=this[_0x142d8d(0xc8)]-_0x1abe5e-_0x223b4f[_0x142d8d(0x16e)]-_0x5afa13,_0x487056=_0x343a0d?this[_0x142d8d(0x211)]-_0x223b4f[_0x142d8d(0xa9)]-_0x5afa13:_0x223b4f[_0x142d8d(0xa9)];if(_0x1bd95a&&_0x343a0d)_0x487056-=_0x2fc940;else!_0x1bd95a&&(_0x42e7c4-=_0x2fc940);}else _0x42e7c4=_0x223b4f[_0x142d8d(0x16e)],_0x487056=_0x343a0d?this['innerWidth']-_0x223b4f[_0x142d8d(0xa9)]-_0x5afa13:_0x223b4f['ScreenBufferX'],_0x1bd95a&&_0x343a0d&&(_0x487056-=_0x2fc940);return _0x487056+=_0x343a0d?_0x223b4f[_0x142d8d(0x1b0)]:_0x223b4f[_0x142d8d(0xcf)],_0x42e7c4+=_0x343a0d?_0x223b4f['ActorOffsetY']:_0x223b4f[_0x142d8d(0xd7)],new Point(Math[_0x142d8d(0xf7)](_0x487056),Math[_0x142d8d(0xf7)](_0x42e7c4));},Window_FTB_ActionCount[_0x3f8e30(0xf3)][_0x3f8e30(0x1ba)]=function(){const _0x3b68f1=_0x3f8e30,_0x1eca7a=Window_FTB_ActionCount[_0x3b68f1(0xb1)];let _0x20668c=!![];if(_0x1eca7a[_0x3b68f1(0x235)]){if(this[_0x3b68f1(0x250)]===$gameParty)_0x20668c=!_0x20668c;}else _0x20668c=!_0x1eca7a['BottomPosition'];let _0xb95328=this[_0x3b68f1(0x250)][_0x3b68f1(0x10d)](),_0x249b00=Math[_0x3b68f1(0x23f)](0x0,this[_0x3b68f1(0x250)][_0x3b68f1(0xd0)]()-_0xb95328);const _0x186222=[];while(_0xb95328--){const _0x3448f7=_0x3b68f1(0x21d);_0x186222[_0x3b68f1(0x1b9)](_0x3448f7);}while(_0x249b00--){const _0x2f5424='Empty';_0x20668c?_0x186222['push'](_0x2f5424):_0x186222[_0x3b68f1(0xb6)](_0x2f5424);}while(_0x186222[_0x3b68f1(0x99)]<0xa){const _0x409072=_0x3b68f1(0x1ca);_0x20668c?_0x186222[_0x3b68f1(0x1b9)](_0x409072):_0x186222[_0x3b68f1(0xb6)](_0x409072);}return _0x186222;},Window_FTB_ActionCount[_0x3f8e30(0xf3)]['drawImage']=function(_0x190885,_0x3c518e,_0x2f8656,_0x3d645f){const _0x1606b7=_0x3f8e30;if(_0x190885===_0x1606b7(0x1ca))return;if(_0x190885===_0x1606b7(0x21d))_0x190885=this[_0x1606b7(0x250)]===$gameParty?_0x1606b7(0x1af):'Enemy';const _0x52a9fe=Window_FTB_ActionCount[_0x1606b7(0xb1)];if(_0x52a9fe[_0x1606b7(0x10f)[_0x1606b7(0x18c)](_0x190885)]){const _0x549e1d=_0x52a9fe[_0x1606b7(0x10f)['format'](_0x190885)],_0x5449b6=ImageManager[_0x1606b7(0x141)](_0x549e1d);_0x5449b6[_0x1606b7(0x1a0)](this[_0x1606b7(0x1d3)][_0x1606b7(0x1ae)](this,_0x5449b6,_0x3c518e,_0x2f8656,_0x3d645f));}else{const _0x57a0de=ImageManager[_0x1606b7(0x243)[_0x1606b7(0x18c)](_0x190885)];this[_0x1606b7(0x10e)](_0x57a0de,_0x3c518e,_0x2f8656),this[_0x1606b7(0xec)](_0x3d645f)&&this[_0x1606b7(0xfb)](_0x3c518e,_0x2f8656);}},Window_FTB_ActionCount[_0x3f8e30(0xf3)][_0x3f8e30(0x1d3)]=function(_0x55aca0,_0x5e1bea,_0x59a696,_0x2945d7){const _0x40c601=_0x3f8e30;if(!_0x55aca0)return;const _0x286b0d=Window_FTB_ActionCount[_0x40c601(0xb1)],_0x51c24d=_0x286b0d[_0x40c601(0x171)],_0x32d1cb=_0x51c24d/_0x55aca0[_0x40c601(0x219)],_0x4f7c58=_0x51c24d/_0x55aca0['height'],_0x184d90=Math[_0x40c601(0x10c)](_0x32d1cb,_0x4f7c58,0x1),_0x1e17ee=_0x55aca0['height'],_0x388131=_0x55aca0['height'],_0x473b76=Math[_0x40c601(0xf7)](_0x1e17ee*_0x184d90),_0x5afd9b=Math[_0x40c601(0xf7)](_0x388131*_0x184d90),_0x5e58ca=Math[_0x40c601(0xf7)](_0x5e1bea+(_0x51c24d-_0x473b76)/0x2),_0x9c61c6=Math['round'](_0x59a696+(_0x51c24d-_0x5afd9b)/0x2);this['contents'][_0x40c601(0x93)]['imageSmoothingEnabled']=_0x286b0d[_0x40c601(0x172)],this[_0x40c601(0x149)][_0x40c601(0xbf)](_0x55aca0,0x0,0x0,_0x1e17ee,_0x388131,_0x5e58ca,_0x9c61c6,_0x473b76,_0x5afd9b),this[_0x40c601(0x149)][_0x40c601(0x93)][_0x40c601(0x176)]=!![],this['canDrawActionsRemaining'](_0x2945d7)&&this['drawActionsRemaining'](_0x5e1bea,_0x59a696);},Window_FTB_ActionCount[_0x3f8e30(0xf3)]['drawBigIcon']=function(_0xabf690,_0x1e047e,_0x2a9f3f){const _0x4364c9=_0x3f8e30,_0x3b2110=Window_FTB_ActionCount['Settings'];let _0x20b5d4=_0x3b2110['ImageSize'];const _0x2382eb=ImageManager[_0x4364c9(0x16d)](_0x4364c9(0x1b5)),_0x2349f0=ImageManager['iconWidth'],_0x20c2fd=ImageManager[_0x4364c9(0xfa)],_0x192bac=_0xabf690%0x10*_0x2349f0,_0x538bb0=Math[_0x4364c9(0x11e)](_0xabf690/0x10)*_0x20c2fd;this[_0x4364c9(0x149)][_0x4364c9(0x93)]['imageSmoothingEnabled']=_0x3b2110[_0x4364c9(0x23d)],this[_0x4364c9(0x149)][_0x4364c9(0xbf)](_0x2382eb,_0x192bac,_0x538bb0,_0x2349f0,_0x20c2fd,_0x1e047e,_0x2a9f3f,_0x20b5d4,_0x20b5d4),this['contents']['_context'][_0x4364c9(0x176)]=!![];},Window_FTB_ActionCount['prototype'][_0x3f8e30(0x1f6)]=function(){const _0x16c956=_0x3f8e30,_0x32d1fd=Window_FTB_ActionCount[_0x16c956(0xb1)];if(_0x32d1fd['BottomPosition'])return;if(!_0x32d1fd[_0x16c956(0x8e)])return;const _0x45ee8e=SceneManager[_0x16c956(0xb8)]['_helpWindow'];if(!_0x45ee8e)return;_0x45ee8e[_0x16c956(0x217)]?(this['x']=_0x32d1fd[_0x16c956(0x14f)]||0x0,this['y']=_0x32d1fd[_0x16c956(0x1d9)]||0x0):(this['x']=0x0,this['y']=0x0);},Window_FTB_ActionCount[_0x3f8e30(0xf3)][_0x3f8e30(0xec)]=function(_0x21d22c){const _0x159eb2=_0x3f8e30,_0x56c2be=Window_FTB_ActionCount[_0x159eb2(0xb1)];if(!_0x56c2be[_0x159eb2(0x170)])return![];const _0x42da4e=_0x56c2be[_0x159eb2(0xea)],_0x51422a=_0x56c2be['DrawHorz'],_0x311157=this[_0x159eb2(0x250)]===$gameParty;if(_0x51422a)return _0x311157?_0x21d22c===0x0:_0x21d22c===_0x56c2be[_0x159eb2(0xfe)]-0x1;else return _0x42da4e?_0x21d22c===0x0:_0x21d22c===_0x56c2be[_0x159eb2(0xfe)]-0x1;},Window_FTB_ActionCount['prototype'][_0x3f8e30(0xfb)]=function(_0x2ab3a5,_0x977367){const _0x51b606=_0x3f8e30;this['resetFontSettings']();const _0x5cf4a2=Window_FTB_ActionCount[_0x51b606(0xb1)],_0x315d1a=new Rectangle(_0x2ab3a5,_0x977367,_0x5cf4a2[_0x51b606(0x171)],_0x5cf4a2[_0x51b606(0x171)]);_0x315d1a['x']+=_0x5cf4a2[_0x51b606(0xe8)],_0x315d1a['y']+=_0x5cf4a2[_0x51b606(0x1cd)];const _0xa90788=this[_0x51b606(0x250)][_0x51b606(0x10d)]();this[_0x51b606(0x149)][_0x51b606(0x202)]=_0x5cf4a2['ActionsRemainingFontSize'],this[_0x51b606(0x149)][_0x51b606(0x1a8)](_0xa90788,_0x315d1a['x'],_0x315d1a['y'],_0x315d1a[_0x51b606(0x219)],_0x315d1a[_0x51b606(0x12a)],'center'),this[_0x51b606(0x216)]();};