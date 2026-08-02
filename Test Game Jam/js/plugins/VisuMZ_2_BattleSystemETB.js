//=============================================================================
// VisuStella MZ - Battle System - ETB - Energy Turn Battle
// VisuMZ_2_BattleSystemETB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemETB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemETB = VisuMZ.BattleSystemETB || {};
VisuMZ.BattleSystemETB.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.11] [BattleSystemETB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_ETB_VisuStella_MZ
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
 * Energy Turn Battle (ETB) is a type of battle system made for RPG Maker MZ,
 * where the teams for actors and enemies take turns attacking one another as
 * a whole. Energy is accumulated as turns pass on, allowing each team to
 * perform more actions each turn. Each team can freely perform actions among
 * their teammates as wanted. When the energy count is depleted or if one team
 * ran out of battler's that can act, the other team begins their turn and
 * so forth.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "etb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actor and enemy teams take turns attacking each other as a whole.
 * * As the battle continues, energy is accumulated and more actions can be
 *   performed each turn.
 * * Energy count are given to each team at the start of each turn, and the
 *   amount of actions that can be performed increase progressively.
 * * Actors can be freely switched around to perform actions with.
 * * Alter the mechanics of the Battle System ETB to your liking through the
 *   Plugin Parameters.
 * * An Energy Count Display is shown for each side to relay information to the
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
 * Agility, however, can influence Energy Count through buffs and debuffs if
 * enabled through the Plugin Parameters. Each stack of Agility buffs will
 * raise the Energy Count for a team while each stack of Agility debuffs will
 * decrease them for subsequent turns.
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
 * Energy Ramping
 * 
 * As the battle starts and goes forward, energy is accumulated across the two
 * teams, allowing them to perform more actions each turn that has passed.
 * 
 * The amount of actions that can be performed at base value can be determined
 * inside the Plugin Parameters > Mechanics Settings > Turn Base.
 * 
 * By default, assuming nothing else has changed, each team will have a base
 * energy count of 1 each turn they acquire until they reach 10 actions. This
 * cap will be different if you changed the Plugin Parameters mentioned above.
 * 
 * Once the maximum cap has been reached, that will be the finalized amount for
 * the start of each turn after.
 * 
 * The Energy Count can be altered by AGI buffs and/or debuffs depending on the
 * Plugin Parameter settings.
 * 
 * Further Energy Count can be altered by various notetag effects tied to the
 * trait objects of each battle member.
 * 
 * ---
 * 
 * Free Range Switching
 * 
 * Free Range Switching is always available to the player in the battle system.
 * The player can freely switch between actors in his/her party by pressing the
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
 * === General ETB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <ETB Help>
 *  description
 *  description
 * </ETB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under ETB.
 * - This is primarily used if the skill behaves differently in ETB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to ETB.
 *
 * ---
 * 
 * === Energy Cost-Related Notetags ===
 * 
 * ---
 *
 * <ETB Energy Cost: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the ETB energy cost of this skill/item to 'x'.
 * - Replace 'x' with a number value representing the energy cost required to
 *   perform the skill.
 *
 * ---
 *
 * <ETB Hide Energy Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the ETB energy cost for this skill/item hidden regardless of Plugin
 *   Parameter settings.
 * 
 * ---
 *
 * <ETB Show Energy Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the ETB energy cost for this skill/item visible regardless of Plugin
 *   Parameter settings.
 *
 * ---
 * 
 * === Mechanics-Related Notetags ===
 * 
 * ---
 *
 * <ETB Pass Turn>
 *
 * - Used for: Skill, Item Notetags
 * - If a battler uses this skill/item, then even if there is energy left for
 *   the team to perform, that battler would no longer be able to input as they
 *   have already passed their turn.
 * - By default, this applies to "Guard". If you don't want it to apply to the
 *   Guard skill, turn it off in the Plugin Parameters for mechanics.
 *
 * ---
 *
 * <ETB Energy: +x>
 * <ETB Energy: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Battlers associated with these trait objects can increase or decrease the
 *   maximum number of actions performed each turn.
 * - Replace 'x' with a number representing the increase or decrease in energy
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
 * System: ETB Energy Count Visibility
 * - Determine the visibility of the ETB Energy Count Display.
 *
 *   Visibility:
 *   - Changes the visibility of the ETB Energy Count Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Determines the general settings of the ETB Battle System. These settings
 * range from determining how the Action Count resources and costs are
 * displayed to the text that appear during team shifting.
 *
 * ---
 *
 * Energy Counts
 * 
 *   Full Name:
 *   - What is the full name of "Energy Counts" in your game?
 * 
 *   Abbreviation:
 *   - What is the abbreviation of "Energy Counts" in your game?
 * 
 *   Cost Format:
 *   - How are Energy Count costs displayed?
 *   - %1 - Cost, %2 - Abbr Text, %3 - Icon
 * 
 * ---
 * 
 * Icons
 * 
 *   Actor Energy Icon:
 *   - What icon is used to represent actor actions?
 * 
 *   Enemy Energy Icon:
 *   - What icon is used to represent enemy actions?
 * 
 *   Empty Energy Icon:
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
 *   - Put the energy cost at the front of skill/item costs?
 * 
 *   Show Cost: Attack:
 *   - Show the energy cost for the Attack command?
 * 
 *   Show Cost: Guard:
 *   - Show the energy cost for the Guard command?
 * 
 *   Show Cost: 0 Energy:
 *   - Show the energy cost when the cost is 0 energy?
 * 
 *   Show Cost: 1 Energy:
 *   - Show the energy cost when the cost is 1 energy?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the ETB Battle System. From here, you can
 * enable or disable core mechanics, determine how to determine turn advantage,
 * and how the various supporting mechanics operate.
 *
 * ---
 *
 * Main Mechanics
 * 
 *   Maintain Same Actor?:
 *   - Maintain the same actor after an action or move onto the next
 *     available actor?
 * 
 *   Current Turn Revival Act?:
 *   - Allow revived actors to act the current turn they're revived?
 * 
 *   Guard > Pass Turn?:
 *   - Does guarding cause a battler to pass turn?
 * 
 *   Gain Differences?:
 *   - If the max Energy Count for a team changes, gain the difference in value
 *     if positive?
 * 
 *   Lose Differences?:
 *   - If the max Energy Count for a team changes, lose the difference in value
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
 * Energy Generation
 * 
 *   Turn Base:
 *   - What is the starting base number of actions that's available at
 *     each turn?
 * 
 *   AGI Buff Influence?:
 *   - Do AGI buffs give +1 for each stack?
 * 
 *   AGI Debuff Influence?:
 *   - Do AGI debuffs give -1 for each stack?
 * 
 *   Maximum Energy:
 *   - What is the absolute maximum number of actions a team can have
 *     each turn?
 * 
 *   Minimum Energy:
 *   - What is the bare minimum number of actions a team can have each turn?
 * 
 *   Allow Overflow?:
 *   - Allow current actions to overflow?
 *   - Or let them cap at the current team max?
 *
 * ---
 *
 * Default Energy Costs
 * 
 *   Skills:
 *   - What is the default energy cost for skills?
 * 
 *   Items:
 *   - What is the default energy cost for items?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Energy Count Display Settings
 * ============================================================================
 *
 * Adjust the settings for the Energy Count Display. They appear in the upper
 * or lower corners of the screen for the player party and the enemy troop.
 *
 * ---
 *
 * Display Settings
 * 
 *   Draw Horizontally?:
 *   - Which direction do you want the Energy Count Display to go?
 * 
 *   Bottom Position?:
 *   - Place the Energy Count Display towards the bottom of the screen?
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
 *   Actor Energy Picture:
 *   Enemy Energy Picture:
 *   Empty Energy Picture:
 *   - Optional. Place an image for an actor, enemy, or empty energy instead of
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
 *   Max Energy Visible:
 *   - How many energy slots max should be drawn for each team?
 * 
 *   Image Size:
 *   - What is the size of the icons or pictures for the energy slots?
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
 *   - Show a number to display the energy remaining?
 * 
 *   Font Size:
 *   - What font size should be used for this number?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the remaining energy number X/Y.
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.11: May 15, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if an actor performs a forced action while "Maintain
 *    Same Actor?" plugin parameter is enabled, the forced action would double.
 *    This should now be fixed.
 * 
 * Version 1.10: January 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if the entire party is completely restricted via stun,
 *    charm, confusion, or berserk, entire turns would be skipped for both
 *    actors and enemies. Fix made by Irina.
 * 
 * Version 1.09: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Mechanics > Current Turn Revival Act?:
 * **** Allow revived actors to act the current turn they're revived?
 * 
 * Version 1.08: December 14, 2023
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
 * Version 1.07: April 13, 2023
 * * Bug Fixes!
 * ** Fixed a problem that caused actors to get skipped if they were revived
 *    during the same turn the rest of the party decided to guard. Fix made
 *    by Arisu.
 * 
 * Version 1.06: October 20, 2022
 * * Bug Fixes!
 * ** Fixed problem with the Energy Count Display's Actor Offset Y not working
 *    properly. Fix made by Arisu.
 * 
 * Version 1.05: June 2, 2022
 * * Bug Fixes!
 * ** Fixed a bug where Force Actions do not work when there's only one action
 *    left for the turn. Fix made by Olivia.
 * 
 * Version 1.04: April 21, 2022
 * * Bug Fixes!
 * ** Fixed a bug that prevents the battle system from shifting back to the
 *    default battle system after an enemy counter attack. Fix made by Olivia.
 * 
 * Version 1.03: April 14, 2022
 * * Compatibility Update!
 * ** Now works more compatible with counters. Update made by Olivia.
 * 
 * Verison 1.02: March 17, 2022
 * * Bug Fixes!
 * ** Death by slip damage will now perform the proper death animation.
 *    Fix made by Olivia.
 * 
 * Version 1.01: January 13, 2022
 * * Bug Fixes!
 * ** Fixed a redistribution error. Fix made by Olivia.
 * 
 * Version 1.00 Official Release Date: September 6, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemActionCountVisibility
 * @text System: ETB Energy Count Visibility
 * @desc Determine the visibility of the ETB Energy Count Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the ETB Energy Count Display.
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
 * @param BattleSystemETB
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
 * @desc Determines the general settings of the ETB Battle System.
 * @default {"ActionCounts":"","ActionCountFull:str":"Energy Points","ActionCountAbbr:str":"EP","ActionCountCostFmt:str":"\\FS[22]\\C[0]×%1%3\\C[0]","Icons":"","ActorActionsIcon:num":"165","EnemyActionsIcon:num":"162","EmptyActionsIcon:num":"161","TeamShift":"","PartyTeamShiftFmt:str":"%1's Turn!","TroopTeamShiftFmt:str":"Opponent's Turn!","TeamShiftWait:num":"60","DisplayedCosts":"","CostPosition:eval":"false","ShowCostForAttack:eval":"false","ShowCostForGuard:eval":"false","Show_0_Action_Cost:eval":"true","Show_1_Action_Cost:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of the ETB Battle System.
 * @default {"Main":"","KeepPrevActor:eval":"true","GuardPass:eval":"true","GainDiff:eval":"true","LoseDiff:eval":"false","StateBuffUpdate:eval":"true","TurnAdvantage":"","NeutralAdvantage:str":"average agi","ActionGeneration":"","TurnBase:arraynum":"[\"1\",\"1\",\"2\",\"2\",\"3\",\"3\",\"4\",\"4\",\"5\",\"5\",\"6\",\"6\",\"7\",\"7\",\"8\",\"8\",\"9\",\"9\",\"10\",\"10\"]","AgiBuff:eval":"false","AgiDebuff:eval":"false","MaxActions:num":"99","MinActions:num":"1","AllowOverflow:eval":"false","DefaultCost":"","DefaultCostSkill:num":"1","DefaultCostItem:num":"1"}
 *
 * @param ActionCountDisplay:struct
 * @text Energy Count Display
 * @type struct<ActionCountDisplay>
 * @desc Adjust the settings for the Energy Count Display.
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
 * @text Energy Count
 *
 * @param ActionCountFull:str
 * @text Full Name
 * @parent ActionCounts
 * @desc What is the full name of "Energy Count" in your game?
 * @default Energy Points
 *
 * @param ActionCountAbbr:str
 * @text Abbreviation
 * @parent ActionCounts
 * @desc What is the abbreviation of "Energy Count" in your game?
 * @default EP
 *
 * @param ActionCountCostFmt:str
 * @text Cost Format
 * @parent ActionCounts
 * @desc How are Energy Count costs displayed?
 * %1 - Cost, %2 - Abbr Text, %3 - Icon
 * @default \FS[22]\C[0]×%1%3\C[0]
 *
 * @param Icons
 *
 * @param ActorActionsIcon:num
 * @text Actor Energy Icon
 * @parent Icons
 * @desc What icon is used to represent actor energy?
 * @default 165
 *
 * @param EnemyActionsIcon:num
 * @text Enemy Energy Icon
 * @parent Icons
 * @desc What icon is used to represent enemy energy?
 * @default 162
 *
 * @param EmptyActionsIcon:num
 * @text Empty Energy Icon
 * @parent Icons
 * @desc What icon is used to represent empty energy?
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
 * @desc Put the energy cost at the front of skill/item costs?
 * @default false
 *
 * @param ShowCostForAttack:eval
 * @text Show Cost: Attack
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost for the Attack command?
 * @default false
 *
 * @param ShowCostForGuard:eval
 * @text Show Cost: Guard
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost for the Guard command?
 * @default false
 *
 * @param Show_0_Action_Cost:eval
 * @text Show Cost: 0 Energy
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost when the cost is 0 energy?
 * @default true
 *
 * @param Show_1_Action_Cost:eval
 * @text Show Cost: 1 Energy
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost when the cost is 1 energy?
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
 * @param KeepPrevActor:eval
 * @text Maintain Same Actor?
 * @parent Main
 * @type boolean
 * @on Maintain
 * @off Next Available
 * @desc Maintain the same actor after an action or move onto
 * the next available actor?
 * @default true
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
 * @desc If the max Energy Count for a team changes,
 * gain the difference in value if positive?
 * @default true
 *
 * @param LoseDiff:eval
 * @text Lose Differences?
 * @parent Main
 * @type boolean
 * @on Lose Differences
 * @off Keep Same
 * @desc If the max Energy Count for a team changes,
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
 * @text Energy Generation
 *
 * @param TurnBase:arraynum
 * @text Turn Base
 * @parent ActionGeneration
 * @type number[]
 * @desc What is the starting base number of actions that's available at each turn?
 * @default ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"]
 *
 * @param AgiBuff:eval
 * @text AGI Buff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI buffs give +1 for each stack?
 * @default false
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
 * @text Maximum Energy
 * @parent ActionGeneration
 * @type number
 * @desc What is the absolute maximum number of actions a team can have each turn?
 * @default 99
 *
 * @param MinActions:num
 * @text Minimum Energy
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
 * @desc What is the default energy cost for skills?
 * @default 1
 *
 * @param DefaultCostItem:num
 * @text Items
 * @parent DefaultCost
 * @type number
 * @desc What is the default energy cost for items?
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
 * @desc Which direction do you want the Energy Count Display to go?
 * @default true
 *
 * @param BottomPosition:eval
 * @text Bottom Position?
 * @parent Display
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Place the Energy Count Display towards the bottom of the screen?
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
 * @text Actor Energy Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an actor energy instead of an icon?
 * @default 
 *
 * @param EnemyActionPicture:str
 * @text Enemy Energy Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an enemy energy instead of an icon?
 * @default 
 *
 * @param EmptyActionPicture:str
 * @text Empty Energy Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an empty energy instead of an icon?
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
 * @text Max Energy Visible
 * @parent DrawSettings
 * @desc How many energy slots max should be drawn for each team?
 * @default 10
 *
 * @param ImageSize:num
 * @text Image Size
 * @parent DrawSettings
 * @desc What is the size of the icons or pictures for the energy slots?
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
 * @desc Show a number to display the energy remaining?
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
 * @desc Offset the remaining energy number X.
 * @default 0
 *
 * @param ActionsRemainingOffsetY:num
 * @text Offset Y
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining energy number Y.
 * @default 0
 *
 */
//=============================================================================

const _0x1e1aaa=_0x4db1;(function(_0x6230a4,_0x57ee5c){const _0x1a90f1=_0x4db1,_0x3c9c9b=_0x6230a4();while(!![]){try{const _0x11e81b=-parseInt(_0x1a90f1(0x1f7))/0x1*(parseInt(_0x1a90f1(0x9b))/0x2)+parseInt(_0x1a90f1(0x1ee))/0x3*(parseInt(_0x1a90f1(0x260))/0x4)+parseInt(_0x1a90f1(0xc1))/0x5*(parseInt(_0x1a90f1(0x1f2))/0x6)+parseInt(_0x1a90f1(0xa6))/0x7+parseInt(_0x1a90f1(0x248))/0x8+-parseInt(_0x1a90f1(0x13c))/0x9+parseInt(_0x1a90f1(0xe9))/0xa*(-parseInt(_0x1a90f1(0x1d8))/0xb);if(_0x11e81b===_0x57ee5c)break;else _0x3c9c9b['push'](_0x3c9c9b['shift']());}catch(_0x5a8c22){_0x3c9c9b['push'](_0x3c9c9b['shift']());}}}(_0x21bf,0x71a2b));function _0x21bf(){const _0x44858b=['keepPrevSubjectETB','Game_Actor_changeClass','startBattleETB','forceActionETB','clearActions','appear','toUpperCase','getMaxActionsETB','parameters','ShowCostForAttack','forceChangeEquip','return\x200','_ETB_BETWEEN_TEAMS_WAIT','player','BattleManager_isTeamBased','onBattleStart','select','_turnCountETB','clearBuffs','removeBuff','initBattleSystemETB','KeepPrevActor','_inBattle','onTouchSelectETB','allMembers','Game_Battler_onTurnEnd','setBackgroundType','createStartingCoordinates','Mechanics','BattleManager_invokeCounterAttack','Window_Help_setItem','cursorPageup','imageSmoothingEnabled','_ETB_ACTION_LAST','makeActionOrdersETB','_maxActions','sort','index','Game_Action_applyGlobal','_ETB_COST_SHOW_GUARD','height','makeAdditionalSkillCostText','etbActorActionsIcon','BattleManager_battleSys','updatePosition','close','Game_System_initialize','changeClass','endAction','iconWidth','prototype','setBattleSystemETBActionCountVisible','etbEmptyActionsIcon','VisuMZ_0_CoreEngine','_etbPartyActionCountWindow','drawText','_clearEtbForceActionSubject','canInput','_actionBattlers','TeamShiftWait','call','etbPartyTeamShift','registerCommand','_ETB_MIN_ACTIONS','agility','Game_Battler_forceAction','isSideView','MaxVisible','applyGlobal','updateBuffTurns','clearPassTurnETB','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','addDebuff','item','_ETB_COST_SHOW_1','push','textWidth','map','cursorLeft','ScreenBufferY','LogWindowTopOffsetY','selectNextActor','RegExp','SystemActionCountVisibility','BattleManager_forceAction','Scene_Battle_createAllWindows','canMove','TurnBase','initMembersETB','_ETB_ACTION_AGI_BUFF','_partyCommandWindow','_etbActionCountVisible','constructor','turnCount','_helpWindow','traitObjects','battler','BattleManager_setup','total\x20agi','etbCreateTeamSwitchText','setCurrentActionsETB','loadSystem','checkNeedsUpdate','stepForward','Game_Actor_releaseUnequippableItems','status','processTouch','PassTurn','update','_etbActionsMax','processTurnETB','shift','DefaultCostItem','_actor','commandFight','isAlive','_currentActions','Settings','etbCostFormat','startAction','FUNC','bind','_forcedActionETB','create','pop','selectNextActorETB','ItemsEquipsCore','friendsUnit','ActorOffsetX','_windowLayer','TroopTeamShiftFmt','isTurnBased','canActorBeSelectedETB','getBattleSystem','random','_doubleTouch','makeAdditionalCostTextETB','ARRAYSTRUCT','Actor','addLoadListener','isEnemy','Window_Selectable_cursorRight','ARRAYSTR','selectNextCommand','performTurnEndETB','createActorCommandWindow','_etbTeamEven','etbFreeRangeSwitch','floor','55Gyjxod','Game_Actor_forceChangeEquip','etb%1ActionsIcon','_ETB_ACTION_FIRST','_ETB_KEEP_PREV_ACTOR','playCursorSound','repositionLogWindowETB','Window_Base_makeAdditionalSkillCostText','_ETB_COST_SHOW_0','BattleManager_startBattle','waitCount','resetTurnCountETB','invokeCounterAttack','clear','isActiveTpb','currentAction','ConvertParams','_etbLastIndex','windowRect','some','isDrawItemNumber','agi','318sUXUFe','Window_Selectable_cursorPageup','initMembers','filter','12KHLzAR','ShowCostForGuard','BattleManager_endAllBattlersTurn','HideActionPointCost','Game_BattlerBase_clearStates','219179eIOlEo','etbSwitchActorDirection','_etbActionsCur','_ETB_COST_POSITION','resetFontSettings','drawItemNumberETB','ActionCountFull','drawImage','Visible','Show_0_Action_Cost','createActorCommandWindowETB','BattleManager_endAction','gainCurrentActionsETB','endActionETB','_actions','_ETB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS','commandCancelETB','isSkill','Game_Actor_changeEquipById','enemies','ActorActionsIcon','LoseDiff','isActor','ActionCountCostFmt','_phase','Show_1_Action_Cost','forceAction','cursorRight','Game_Battler_removeState','round','Window_Selectable_cursorLeft','VisuMZ_1_ItemsEquipsCore','General','startDamagePopup','Game_Battler_turnCount','JSON','_ETB_ACTION_AGI_DEBUFF','randomInt','_etbTroopActionCountWindow','hide','updateVisibility','active','concat','Game_Action_speed','ItemScene','isSceneBattle','BattleManager_isTpb','startTurnETB','_ETB_NEUTRAL_TURN_ADVANTAGE','StateBuffUpdate','textSizeEx','setSkill','finishActorInput','processTurn','setTarget','ScreenBufferX','cursorPagedown','speed','innerWidth','fontSize','center','makeActions','Game_Battler_performCollapse','Scene_Battle_createActorCommandWindow','addChildAt','_actorCommandWindow','discardEquip','removeState','AgiDebuff','_scene','addText','hitIndex','clearStates','Game_Enemy_transform','ActionsRemainingOffsetX','updatePadding','updateStateTurnsETB','ImageSize','match','recalculateActionsETB','ETB','7025000BRJpGM','Game_Battler_useItem','Game_Actor_discardEquip','BattleManager_isActiveTpb','setup','etbHighestAgility','aliveMembers','increaseTurn','startTurn','initialize','CostPosition','min','ARRAYJSON','ImageGapDistance','BattleManager_processTurn','etbEnemyActionsIcon','_buffs','ShowActionPointCost','NUM','createActionCountWindowsETB','getCurrentActionsETB','Game_BattlerBase_updateBuffTurns','Window_Selectable_processTouch','etbActionCount','34844ZoNGZp','MinActions','_etbCurrentUnit','contents','setItem','isDead','toLowerCase','calculateTotalActionsETB','_ETB_RESET_INDEX','transform','BattleManager_startAction','BattleManager_startInput','refresh','length','_etbTurnAdvantageUnit','ARRAYFUNC','_ETB_ACTION_SECOND','removeActionBattlersETB','ActionCountDisplay','_ETB_COST_SHOW_ATTACK','loseCurrentActionsETB','blt','_logWindow','ActorActionPicture','6KIWSKc','Scene_Battle_commandCancel','passTurnETB','opacity','reduceActionsETB','setLastEtbIndex','format','screenX','inBattle','applyGlobalETB','etbAliveMembers','1596658Kauqbe','Game_Battler_onBattleStart','etbTroopTeamShift','EVAL','STRUCT','RepositionTopHelpX','subject','decideRandomTarget','Window_Base_drawItemNumber','addBuff','ItemQuantityFontSize','Current','canActETB','_action','note','processTouchETB','_ETB_GUARD_PASS','_surprise','%1ActionPicture','VisuMZ_1_SkillsStatesCore','startInput','guardSkillId','updateStateTurns','PartyTeamShiftFmt','createActionsETB','unshift','useItem','299900aHHFtb','Game_BattlerBase_hide','clamp','createAllWindows','BattleSystemETB','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Game_Party_canInput','changeEquipById','_forcedBattlers','startActorInput','version','endTurnETB','actors','removeStatesAuto','EnemyActionPicture','drawBigIcon','_ETB_ACTION_OVERFLOW','indexOf','isETB','ActorOffsetY','processSwitchActors','maxCols','padding','setUnit','getActionCostETB','numItems','performCollapse','innerHeight','ActionsRemainingFontSize','Window_Selectable_cursorPagedown','Enemy','drawActionsRemaining','etbLowestAgility','_currentActor','etbActionPointsAbbr','isPassingTurnETB','Game_Battler_removeBuff','startBattle','canUse','Game_Actor_changeEquip','249790RnjNQM','Game_Battler_addBuff','Game_Actor_selectNextCommand','lowest\x20agi','RevivalAct','Game_BattlerBase_canUse','battleSys','BattleAI','AllowOverflow','payActionCostETB','_bypassStateTurnUpdatesETB','IconSet','trim','ActionsRemainingOffsetY','etbTotalAgility','EmptyActionsIcon','getNextSubject','RepositionTopHelpY','BattleManager_isTurnBased','_context','BattleManager_makeActionOrders','width','_passedTurnETB','RepositionTopForHelp','isBattleSystemETBActionCountVisible','enemy','refreshActionCountWindowsETB','_unit','VisuMZ_1_BattleCore','makeActionOrders','highest\x20agi','_inputting','endAllBattlersTurn','canDrawActionsRemaining','_ETB_RECALC_SUB_DIFF','Empty','_subject','ARRAYNUM','startActorCommandSelection','Nothing','startInputETB','_ETB_MAX_ACTIONS','loadPicture','_etbTeamOdd','drawItemNumber','iconHeight','BattleManager_selectNextActor','updateTurn','DTB','createContentsArray','EmptyActionPicture','Game_BattlerBase_appear','exit','isTeamBased','addState','drawTextEx','isTriggered','average\x20agi','endTurn','Game_Unit_onBattleStart','visible','BottomPosition','max','VisuMZ_3_BattleAI\x20needs\x20to\x20be\x20updated\x20','reviveETB','battleMembers','onTurnEnd','battleEnd','cancel','ActionCountAbbr','in\x20order\x20for\x20VisuMZ_2_BattleSystemETB\x20to\x20work.','BattleManager_finishActorInput','ItemQuantityFmt','Game_Troop_increaseTurn','DefaultCostSkill','skillCostSeparator','makeDeepCopy','changeEquip','includes','_ETB_ACTION_BASE','_ETB_RECALC_ADD_DIFF','parse','_forceAction','8114958RDZPmR','members','description','_ETB_FREE_CHANGE','Game_BattlerBase_updateStateTurns','Scene_Battle_commandFight','STR'];_0x21bf=function(){return _0x44858b;};return _0x21bf();}var label=_0x1e1aaa(0xc5),tier=tier||0x0,dependencies=[_0x1e1aaa(0x178),_0x1e1aaa(0x105),_0x1e1aaa(0x216),_0x1e1aaa(0xb9)],pluginData=$plugins[_0x1e1aaa(0x1f1)](function(_0x52442d){const _0x4bae35=_0x1e1aaa;return _0x52442d[_0x4bae35(0x1ac)]&&_0x52442d[_0x4bae35(0x13e)]['includes']('['+label+']');})[0x0];function _0x4db1(_0x3018f2,_0x37072b){const _0x21bf75=_0x21bf();return _0x4db1=function(_0x4db184,_0x1d69a8){_0x4db184=_0x4db184-0x90;let _0x1b280a=_0x21bf75[_0x4db184];return _0x1b280a;},_0x4db1(_0x3018f2,_0x37072b);}VisuMZ[label][_0x1e1aaa(0x1b8)]=VisuMZ[label][_0x1e1aaa(0x1b8)]||{},VisuMZ[_0x1e1aaa(0x1e8)]=function(_0x425297,_0x48ecac){const _0x19f4cb=_0x1e1aaa;for(const _0x487336 in _0x48ecac){if(_0x487336['match'](/(.*):(.*)/i)){const _0x386d0b=String(RegExp['$1']),_0x40ad6b=String(RegExp['$2'])[_0x19f4cb(0x149)]()['trim']();let _0x54cbdd,_0x3105c8,_0x3a98d6;switch(_0x40ad6b){case _0x19f4cb(0x25a):_0x54cbdd=_0x48ecac[_0x487336]!==''?Number(_0x48ecac[_0x487336]):0x0;break;case _0x19f4cb(0x10e):_0x3105c8=_0x48ecac[_0x487336]!==''?JSON[_0x19f4cb(0x13a)](_0x48ecac[_0x487336]):[],_0x54cbdd=_0x3105c8['map'](_0x57f302=>Number(_0x57f302));break;case _0x19f4cb(0xa9):_0x54cbdd=_0x48ecac[_0x487336]!==''?eval(_0x48ecac[_0x487336]):null;break;case'ARRAYEVAL':_0x3105c8=_0x48ecac[_0x487336]!==''?JSON['parse'](_0x48ecac[_0x487336]):[],_0x54cbdd=_0x3105c8['map'](_0x175860=>eval(_0x175860));break;case _0x19f4cb(0x21a):_0x54cbdd=_0x48ecac[_0x487336]!==''?JSON[_0x19f4cb(0x13a)](_0x48ecac[_0x487336]):'';break;case _0x19f4cb(0x254):_0x3105c8=_0x48ecac[_0x487336]!==''?JSON[_0x19f4cb(0x13a)](_0x48ecac[_0x487336]):[],_0x54cbdd=_0x3105c8[_0x19f4cb(0x190)](_0x3f8db8=>JSON[_0x19f4cb(0x13a)](_0x3f8db8));break;case _0x19f4cb(0x1bb):_0x54cbdd=_0x48ecac[_0x487336]!==''?new Function(JSON['parse'](_0x48ecac[_0x487336])):new Function(_0x19f4cb(0x14e));break;case _0x19f4cb(0x92):_0x3105c8=_0x48ecac[_0x487336]!==''?JSON[_0x19f4cb(0x13a)](_0x48ecac[_0x487336]):[],_0x54cbdd=_0x3105c8[_0x19f4cb(0x190)](_0x1bf4bd=>new Function(JSON[_0x19f4cb(0x13a)](_0x1bf4bd)));break;case _0x19f4cb(0x142):_0x54cbdd=_0x48ecac[_0x487336]!==''?String(_0x48ecac[_0x487336]):'';break;case _0x19f4cb(0x1d1):_0x3105c8=_0x48ecac[_0x487336]!==''?JSON[_0x19f4cb(0x13a)](_0x48ecac[_0x487336]):[],_0x54cbdd=_0x3105c8[_0x19f4cb(0x190)](_0x417125=>String(_0x417125));break;case _0x19f4cb(0xaa):_0x3a98d6=_0x48ecac[_0x487336]!==''?JSON['parse'](_0x48ecac[_0x487336]):{},_0x54cbdd=VisuMZ[_0x19f4cb(0x1e8)]({},_0x3a98d6);break;case _0x19f4cb(0x1cc):_0x3105c8=_0x48ecac[_0x487336]!==''?JSON[_0x19f4cb(0x13a)](_0x48ecac[_0x487336]):[],_0x54cbdd=_0x3105c8[_0x19f4cb(0x190)](_0x2922e9=>VisuMZ['ConvertParams']({},JSON[_0x19f4cb(0x13a)](_0x2922e9)));break;default:continue;}_0x425297[_0x386d0b]=_0x54cbdd;}}return _0x425297;},(_0x35aae1=>{const _0x5576e0=_0x1e1aaa,_0x11711b=_0x35aae1['name'];for(const _0x3609d0 of dependencies){if(!Imported[_0x3609d0]){alert(_0x5576e0(0xc6)['format'](_0x11711b,_0x3609d0)),SceneManager[_0x5576e0(0x11d)]();break;}}const _0xad3226=_0x35aae1[_0x5576e0(0x13e)];if(_0xad3226[_0x5576e0(0x245)](/\[Version[ ](.*?)\]/i)){const _0x24daa9=Number(RegExp['$1']);_0x24daa9!==VisuMZ[label][_0x5576e0(0xcb)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x5576e0(0xa1)](_0x11711b,_0x24daa9)),SceneManager[_0x5576e0(0x11d)]());}if(_0xad3226[_0x5576e0(0x245)](/\[Tier[ ](\d+)\]/i)){const _0x100472=Number(RegExp['$1']);_0x100472<tier?(alert(_0x5576e0(0x18a)[_0x5576e0(0xa1)](_0x11711b,_0x100472,tier)),SceneManager[_0x5576e0(0x11d)]()):tier=Math['max'](_0x100472,tier);}VisuMZ[_0x5576e0(0x1e8)](VisuMZ[label][_0x5576e0(0x1b8)],_0x35aae1[_0x5576e0(0x14b)]);})(pluginData),PluginManager[_0x1e1aaa(0x181)](pluginData['name'],_0x1e1aaa(0x196),_0x531b64=>{const _0x58a07b=_0x1e1aaa;VisuMZ['ConvertParams'](_0x531b64,_0x531b64);const _0x2f4c54=_0x531b64[_0x58a07b(0x1ff)];$gameSystem[_0x58a07b(0x176)](_0x2f4c54);}),VisuMZ[_0x1e1aaa(0xc5)]['RegExp']={'ActionPointCost':/<ETB (?:EP|ACTION|ENERGY) COST:[ ](\d+)>/i,'HideActionPointCost':/<ETB HIDE (?:EP|ACTION|ENERGY) COST>/i,'ShowActionPointCost':/<ETB SHOW (?:EP|ACTION|ENERGY) COST>/i,'PassTurn':/<ETB PASS TURN>/i,'ActionPointTraitPlus':/<ETB (?:EP|ACTION|ACTIONS|ENERGY):[ ]([\+\-]\d+)>/i},DataManager['getActionCostETB']=function(_0x5d3a1c){const _0x4a59ea=_0x1e1aaa;if(!_0x5d3a1c)return 0x0;const _0x2b37de=VisuMZ['BattleSystemETB'][_0x4a59ea(0x1b8)][_0x4a59ea(0x15f)],_0x58c540=VisuMZ[_0x4a59ea(0xc5)][_0x4a59ea(0x195)],_0xe7f30f=_0x5d3a1c['note'];if(_0xe7f30f['match'](_0x58c540['ActionPointCost']))return Number(RegExp['$1']);else{if(DataManager[_0x4a59ea(0x208)](_0x5d3a1c))return _0x2b37de[_0x4a59ea(0x133)];else return DataManager['isItem'](_0x5d3a1c)?_0x2b37de[_0x4a59ea(0x1b3)]:0x0;}},ImageManager[_0x1e1aaa(0x16d)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)][_0x1e1aaa(0x20b)],ImageManager[_0x1e1aaa(0x257)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)]['EnemyActionsIcon'],ImageManager[_0x1e1aaa(0x177)]=VisuMZ[_0x1e1aaa(0xc5)]['Settings'][_0x1e1aaa(0x217)][_0x1e1aaa(0xf8)],TextManager['etbActionPointsFull']=VisuMZ['BattleSystemETB']['Settings'][_0x1e1aaa(0x217)][_0x1e1aaa(0x1fd)],TextManager[_0x1e1aaa(0xe3)]=VisuMZ[_0x1e1aaa(0xc5)]['Settings']['General'][_0x1e1aaa(0x12e)],TextManager[_0x1e1aaa(0x1b9)]=VisuMZ['BattleSystemETB']['Settings'][_0x1e1aaa(0x217)][_0x1e1aaa(0x20e)],TextManager[_0x1e1aaa(0x180)]=VisuMZ['BattleSystemETB'][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)][_0x1e1aaa(0xbd)],TextManager[_0x1e1aaa(0xa8)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)][_0x1e1aaa(0x1c5)],SceneManager['isSceneBattle']=function(){const _0x14134f=_0x1e1aaa;return this[_0x14134f(0x23c)]&&this[_0x14134f(0x23c)]['constructor']===Scene_Battle;},BattleManager['_ETB_FREE_CHANGE']=!![],BattleManager[_0x1e1aaa(0x1dc)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x15f)][_0x1e1aaa(0x158)],BattleManager[_0x1e1aaa(0x268)]=![],BattleManager[_0x1e1aaa(0xb6)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x15f)]['GuardPass'],BattleManager[_0x1e1aaa(0x139)]=VisuMZ['BattleSystemETB']['Settings']['Mechanics']['GainDiff'],BattleManager['_ETB_RECALC_SUB_DIFF']=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x15f)][_0x1e1aaa(0x20c)],BattleManager[_0x1e1aaa(0x227)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)]['Mechanics']['NeutralAdvantage'],BattleManager['_ETB_BETWEEN_TEAMS_WAIT']=VisuMZ['BattleSystemETB'][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)][_0x1e1aaa(0x17e)],BattleManager['_ETB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS']=VisuMZ['BattleSystemETB']['Settings'][_0x1e1aaa(0x15f)][_0x1e1aaa(0x228)],VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x16e)]=BattleManager[_0x1e1aaa(0xef)],BattleManager[_0x1e1aaa(0xef)]=function(){const _0xa08e91=_0x1e1aaa;if(this['isETB']())return _0xa08e91(0x247);return VisuMZ[_0xa08e91(0xc5)][_0xa08e91(0x16e)][_0xa08e91(0x17f)](this);},BattleManager[_0x1e1aaa(0xd3)]=function(){const _0xf377ec=_0x1e1aaa;return $gameSystem[_0xf377ec(0x1c8)]()===_0xf377ec(0x247);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x225)]=BattleManager['isTpb'],BattleManager['isTpb']=function(){const _0x4e5d59=_0x1e1aaa;if(this[_0x4e5d59(0xd3)]())return![];return VisuMZ[_0x4e5d59(0xc5)][_0x4e5d59(0x225)][_0x4e5d59(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x24b)]=BattleManager[_0x1e1aaa(0x1e6)],BattleManager['isActiveTpb']=function(){const _0x587bf9=_0x1e1aaa;if(this[_0x587bf9(0xd3)]())return![];return VisuMZ[_0x587bf9(0xc5)][_0x587bf9(0x24b)][_0x587bf9(0x17f)](this);},VisuMZ['BattleSystemETB'][_0x1e1aaa(0xfb)]=BattleManager[_0x1e1aaa(0x1c6)],BattleManager[_0x1e1aaa(0x1c6)]=function(){const _0x46065a=_0x1e1aaa;if(this['isETB']())return!![];return VisuMZ[_0x46065a(0xc5)][_0x46065a(0xfb)][_0x46065a(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)]['BattleManager_isTeamBased']=BattleManager[_0x1e1aaa(0x11e)],BattleManager[_0x1e1aaa(0x11e)]=function(){const _0x7d5aac=_0x1e1aaa;if(this[_0x7d5aac(0xd3)]())return!![];return VisuMZ['BattleSystemETB'][_0x7d5aac(0x151)][_0x7d5aac(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x26b)]=BattleManager[_0x1e1aaa(0xba)],BattleManager[_0x1e1aaa(0xba)]=function(){const _0x2cd850=_0x1e1aaa;if(this[_0x2cd850(0xd3)]())this[_0x2cd850(0xb7)]=![];VisuMZ['BattleSystemETB'][_0x2cd850(0x26b)][_0x2cd850(0x17f)](this);if(this[_0x2cd850(0xd3)]()&&$gameParty[_0x2cd850(0x17c)]())this[_0x2cd850(0x111)]();},BattleManager[_0x1e1aaa(0x111)]=function(){this['startTurn']();},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x256)]=BattleManager[_0x1e1aaa(0x22c)],BattleManager['processTurn']=function(){const _0x27eb0e=_0x1e1aaa;this[_0x27eb0e(0xd3)]()?this[_0x27eb0e(0x1b1)]():VisuMZ[_0x27eb0e(0xc5)][_0x27eb0e(0x256)][_0x27eb0e(0x17f)](this);},BattleManager[_0x1e1aaa(0x1b1)]=function(){const _0x23f13f=_0x1e1aaa,_0x2d49ac=this[_0x23f13f(0x10d)];_0x2d49ac['isActor']()&&$gameTemp[_0x23f13f(0x1bd)]&&(_0x2d49ac[_0x23f13f(0x147)](),BattleManager['keepPrevSubjectETB'](_0x2d49ac)&&(this[_0x23f13f(0x17b)]=_0x2d49ac));$gameTemp[_0x23f13f(0x1bd)]=![];_0x2d49ac[_0x23f13f(0x1cf)]()&&(this[_0x23f13f(0x17b)]=undefined);if(_0x2d49ac&&!_0x2d49ac[_0x23f13f(0x1c2)]()[_0x23f13f(0xb2)]())this[_0x23f13f(0x173)](),this['_subject']=null,this[_0x23f13f(0x118)](![]);else{if(_0x2d49ac&&_0x2d49ac[_0x23f13f(0x20d)]()&&_0x2d49ac['canInput']()){const _0x49815a=_0x2d49ac['currentAction']();if(!_0x49815a)VisuMZ['BattleSystemETB'][_0x23f13f(0x256)][_0x23f13f(0x17f)](this);else _0x49815a['_forceAction']?VisuMZ[_0x23f13f(0xc5)][_0x23f13f(0x256)][_0x23f13f(0x17f)](this):(this[_0x23f13f(0xe2)]=_0x2d49ac,this[_0x23f13f(0x17b)]&&(this['_currentActor']=this[_0x23f13f(0x17b)],this[_0x23f13f(0x17b)]=undefined),this[_0x23f13f(0xca)]());}else VisuMZ[_0x23f13f(0xc5)]['BattleManager_processTurn']['call'](this);}},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x130)]=BattleManager[_0x1e1aaa(0x22b)],BattleManager['finishActorInput']=function(){const _0x594b63=_0x1e1aaa;this[_0x594b63(0xd3)]()?VisuMZ[_0x594b63(0xc5)]['BattleManager_processTurn'][_0x594b63(0x17f)](this):VisuMZ[_0x594b63(0xc5)][_0x594b63(0x130)][_0x594b63(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x117)]=BattleManager[_0x1e1aaa(0x194)],BattleManager[_0x1e1aaa(0x194)]=function(){const _0x3bb54d=_0x1e1aaa;this['isETB']()?this[_0x3bb54d(0x1c0)]():VisuMZ[_0x3bb54d(0xc5)]['BattleManager_selectNextActor'][_0x3bb54d(0x17f)](this);},BattleManager[_0x1e1aaa(0x1c0)]=function(){const _0x36ea5a=_0x1e1aaa;this[_0x36ea5a(0xe2)]=null,this[_0x36ea5a(0x108)]=![];},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x26a)]=BattleManager[_0x1e1aaa(0x1ba)],BattleManager[_0x1e1aaa(0x1ba)]=function(){const _0x5b5ae1=_0x1e1aaa;this[_0x5b5ae1(0xd3)]()&&(this['_subject']['isActor']()&&this[_0x5b5ae1(0x10d)][_0x5b5ae1(0x1e7)]()['_forcing']&&($gameTemp[_0x5b5ae1(0x1bd)]=!![])),VisuMZ[_0x5b5ae1(0xc5)][_0x5b5ae1(0x26a)][_0x5b5ae1(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)]['BattleManager_endAction']=BattleManager[_0x1e1aaa(0x173)],BattleManager[_0x1e1aaa(0x173)]=function(){const _0x201149=_0x1e1aaa,_0x5120ac=this[_0x201149(0x10d)];VisuMZ[_0x201149(0xc5)][_0x201149(0x202)][_0x201149(0x17f)](this),this[_0x201149(0x204)](_0x5120ac);},BattleManager[_0x1e1aaa(0x204)]=function(_0x375b48){const _0x4593f9=_0x1e1aaa;if(!this[_0x4593f9(0xd3)]())return;if(_0x375b48){const _0x276c3e=_0x375b48['_actions'][_0x4593f9(0x1f1)](_0x558ece=>_0x558ece[_0x4593f9(0x13b)]);_0x375b48['makeActions']();if(_0x276c3e){let _0x4442a1=_0x276c3e[_0x4593f9(0x90)];while(_0x4442a1--){_0x375b48[_0x4593f9(0x205)][_0x4593f9(0x1bf)]();}_0x375b48[_0x4593f9(0x205)]=_0x276c3e[_0x4593f9(0x221)](_0x375b48[_0x4593f9(0x205)]);}}if(this['_forcedBattlers']['length']>0x0)this[_0x4593f9(0x10d)]&&(!this[_0x4593f9(0x17d)][_0x4593f9(0x137)](this[_0x4593f9(0x10d)])&&this[_0x4593f9(0x17d)][_0x4593f9(0xbf)](this[_0x4593f9(0x10d)])),this[_0x4593f9(0x10d)]=this[_0x4593f9(0xf9)]();else this[_0x4593f9(0x143)](_0x375b48)&&(this[_0x4593f9(0x10d)]=_0x375b48);_0x375b48[_0x4593f9(0x1c2)]()[_0x4593f9(0xa0)](_0x375b48);},BattleManager['keepPrevSubjectETB']=function(_0x3d09cb){const _0x1790cb=_0x1e1aaa;if(!_0x3d09cb)return![];if(!_0x3d09cb[_0x1790cb(0x20d)]())return![];if(!_0x3d09cb[_0x1790cb(0x199)]())return![];if(!_0x3d09cb[_0x1790cb(0x17c)]())return![];if(_0x3d09cb[_0x1790cb(0xe4)]())return![];return BattleManager['_ETB_FREE_CHANGE']&&BattleManager['_ETB_KEEP_PREV_ACTOR'];},VisuMZ[_0x1e1aaa(0xc5)]['BattleManager_startBattle']=BattleManager['startBattle'],BattleManager[_0x1e1aaa(0xe6)]=function(){const _0x4d0b10=_0x1e1aaa;VisuMZ[_0x4d0b10(0xc5)][_0x4d0b10(0x1e1)][_0x4d0b10(0x17f)](this),this[_0x4d0b10(0x145)]();},BattleManager[_0x1e1aaa(0x145)]=function(){const _0x350c82=_0x1e1aaa;if(!this[_0x350c82(0xd3)]())return;if(this['_preemptive'])this[_0x350c82(0x91)]=_0x350c82(0xcd);else this['_surprise']?this[_0x350c82(0x91)]=_0x350c82(0x20a):this[_0x350c82(0x91)]=BattleManager['_ETB_NEUTRAL_TURN_ADVANTAGE'];this[_0x350c82(0x91)]=this[_0x350c82(0x91)]||'random';let _0x2386ed=0x0,_0x405ad2=0x0;switch(this[_0x350c82(0x91)][_0x350c82(0x266)]()[_0x350c82(0xf5)]()){case _0x350c82(0x1c9):let _0x54fe22=['actors',_0x350c82(0x20a)];this[_0x350c82(0x91)]=_0x54fe22[Math[_0x350c82(0x21c)](_0x54fe22[_0x350c82(0x90)])];break;case _0x350c82(0x150):this[_0x350c82(0x91)]=_0x350c82(0xcd);break;case _0x350c82(0x102):this[_0x350c82(0x91)]='enemies';break;case _0x350c82(0xec):_0x2386ed=$gameParty[_0x350c82(0xe1)](),_0x405ad2=$gameTroop[_0x350c82(0xe1)](),this[_0x350c82(0x91)]=_0x2386ed>=_0x405ad2?_0x350c82(0xcd):'enemies';break;case _0x350c82(0x122):_0x2386ed=$gameParty['agility'](),_0x405ad2=$gameTroop[_0x350c82(0x183)](),this[_0x350c82(0x91)]=_0x2386ed>=_0x405ad2?_0x350c82(0xcd):'enemies';break;case _0x350c82(0x107):_0x2386ed=$gameParty[_0x350c82(0x24d)](),_0x405ad2=$gameTroop[_0x350c82(0x24d)](),this[_0x350c82(0x91)]=_0x2386ed>=_0x405ad2?_0x350c82(0xcd):_0x350c82(0x20a);break;case _0x350c82(0x1a5):_0x2386ed=$gameParty[_0x350c82(0xf7)](),_0x405ad2=$gameTroop['etbTotalAgility'](),this[_0x350c82(0x91)]=_0x2386ed>=_0x405ad2?_0x350c82(0xcd):_0x350c82(0x20a);break;}this['_etbTeamOdd']=this[_0x350c82(0x91)]===_0x350c82(0xcd)?$gameParty:$gameTroop,this[_0x350c82(0x1d5)]=this['_etbTurnAdvantageUnit']===_0x350c82(0xcd)?$gameTroop:$gameParty,this[_0x350c82(0x114)][_0x350c82(0x267)](0x1),this[_0x350c82(0x1d5)][_0x350c82(0x267)](0x2),this[_0x350c82(0x1d5)]['setCurrentActionsETB'](this[_0x350c82(0x1d5)][_0x350c82(0x14a)]());},VisuMZ['BattleSystemETB'][_0x1e1aaa(0xfd)]=BattleManager[_0x1e1aaa(0x106)],BattleManager['makeActionOrders']=function(){const _0xa9c9ff=_0x1e1aaa;this[_0xa9c9ff(0xd3)]()?this[_0xa9c9ff(0x165)]():VisuMZ[_0xa9c9ff(0xc5)][_0xa9c9ff(0xfd)]['call'](this);},Game_Unit['prototype'][_0x1e1aaa(0x165)]=function(){const _0xff7eb1=_0x1e1aaa;this[_0xff7eb1(0x189)](),this[_0xff7eb1(0x267)](),this['startTurnETB']();},BattleManager[_0x1e1aaa(0x165)]=function(){const _0x2f3195=_0x1e1aaa;let _0x50abfa=[],_0x18d9d6=[],_0x129c51=0x0;const _0x448d5b=$gameTroop[_0x2f3195(0x1a0)]();let _0x58adb3=_0x448d5b%0x2===0x0?this[_0x2f3195(0x1d5)]:this[_0x2f3195(0x114)];_0x58adb3[_0x2f3195(0x165)](),this[_0x2f3195(0x262)]=_0x58adb3;const _0x39ae22=VisuMZ[_0x2f3195(0xc5)][_0x2f3195(0x1b8)][_0x2f3195(0x15f)];if(_0x58adb3===$gameParty){const _0x1bd51a=_0x39ae22[_0x2f3195(0xed)]?$gameParty[_0x2f3195(0x12a)]():$gameParty[_0x2f3195(0xa5)]();let _0x8f7ae4=_0x1bd51a[_0x2f3195(0x1f1)](_0x2047e7=>_0x2047e7[_0x2f3195(0x199)]()&&!_0x2047e7[_0x2f3195(0x17c)]()),_0x3c3b16=_0x1bd51a[_0x2f3195(0x1f1)](_0x49bf3e=>_0x49bf3e['canMove']()&&_0x49bf3e[_0x2f3195(0x17c)]());_0x50abfa=_0x50abfa[_0x2f3195(0x221)](_0x8f7ae4),_0x129c51=Game_Unit['_ETB_MAX_ACTIONS'];while(_0x129c51--){_0x50abfa=_0x50abfa[_0x2f3195(0x221)](_0x3c3b16);}_0x129c51=Game_Unit[_0x2f3195(0x112)]-0x1;while(_0x129c51--){_0x50abfa=_0x50abfa['concat'](_0x8f7ae4);}}if(_0x58adb3===$gameTroop){const _0x14c002=_0x39ae22['RevivalAct']?$gameTroop[_0x2f3195(0x13d)]():$gameTroop['etbAliveMembers']();let _0x2cb2ff=_0x14c002[_0x2f3195(0x1f1)](_0x2e6a40=>_0x2e6a40[_0x2f3195(0x199)]());$gameSystem[_0x2f3195(0x185)]()?_0x2cb2ff[_0x2f3195(0x167)]((_0x34e1a5,_0x1f4d77)=>_0x1f4d77[_0x2f3195(0xa2)]()-_0x34e1a5[_0x2f3195(0xa2)]()):_0x2cb2ff[_0x2f3195(0x167)]((_0x923f05,_0x1a75d0)=>_0x923f05['screenX']()-_0x1a75d0[_0x2f3195(0xa2)]());_0x129c51=Game_Unit['_ETB_MAX_ACTIONS'];while(_0x129c51--){_0x18d9d6=_0x18d9d6['concat'](_0x2cb2ff);}$gameTroop[_0x2f3195(0x234)]();}this[_0x2f3195(0x17d)]=_0x50abfa['concat'](_0x18d9d6);},BattleManager[_0x1e1aaa(0x94)]=function(){const _0x46a9f3=_0x1e1aaa;if(!this[_0x46a9f3(0xd3)]())return;this['_actionBattlers']=this['_actionBattlers']||[],this[_0x46a9f3(0x17d)]=this[_0x46a9f3(0x17d)][_0x46a9f3(0x1f1)](_0x496254=>_0x496254['canMove']()&&!_0x496254['isPassingTurnETB']());},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1a4)]=BattleManager[_0x1e1aaa(0x24c)],BattleManager['setup']=function(_0x2604c0,_0x13154e,_0x50ab8a){const _0x2fdcca=_0x1e1aaa;VisuMZ[_0x2fdcca(0xc5)][_0x2fdcca(0x1a4)]['call'](this,_0x2604c0,_0x13154e,_0x50ab8a),this['initMembersETB']();},BattleManager[_0x1e1aaa(0x19b)]=function(){const _0x205155=_0x1e1aaa;if(!BattleManager[_0x205155(0xd3)]())return;this[_0x205155(0x262)]=undefined,$gameParty[_0x205155(0x226)](),$gameTroop[_0x205155(0x226)]();},VisuMZ[_0x1e1aaa(0xc5)]['BattleManager_startTurn']=BattleManager[_0x1e1aaa(0x250)],BattleManager[_0x1e1aaa(0x250)]=function(){const _0x4a1b77=_0x1e1aaa;this['startTurnETB'](),VisuMZ['BattleSystemETB']['BattleManager_startTurn'][_0x4a1b77(0x17f)](this),this[_0x4a1b77(0x1a6)]();},BattleManager[_0x1e1aaa(0x226)]=function(){const _0xe7aeda=_0x1e1aaa;if(!BattleManager[_0xe7aeda(0xd3)]())return;$gameParty[_0xe7aeda(0x189)](),$gameTroop[_0xe7aeda(0x189)]();const _0x1c2d3d=$gameTroop['turnCount']()+0x1;let _0xf54009=_0x1c2d3d%0x2===0x0?this[_0xe7aeda(0x1d5)]:this[_0xe7aeda(0x114)],_0x297b9a=_0x1c2d3d%0x2===0x0?this[_0xe7aeda(0x114)]:this[_0xe7aeda(0x1d5)];_0x1c2d3d>0x1&&_0x297b9a[_0xe7aeda(0x1d3)](),_0xf54009['updateStateTurnsETB'](),_0xf54009['startTurnETB']();},VisuMZ['BattleSystemETB']['BattleManager_endTurn']=BattleManager[_0x1e1aaa(0x123)],BattleManager['endTurn']=function(){const _0x4f7aad=_0x1e1aaa;VisuMZ[_0x4f7aad(0xc5)]['BattleManager_endTurn']['call'](this),this[_0x4f7aad(0xcc)]();},BattleManager[_0x1e1aaa(0xcc)]=function(){const _0x528667=_0x1e1aaa;if(!BattleManager[_0x528667(0xd3)]())return;},VisuMZ['BattleSystemETB'][_0x1e1aaa(0xc7)]=Game_Party[_0x1e1aaa(0x175)]['canInput'],Game_Party[_0x1e1aaa(0x175)][_0x1e1aaa(0x17c)]=function(){const _0x567c38=_0x1e1aaa;if(BattleManager[_0x567c38(0xd3)]())return!![];return VisuMZ[_0x567c38(0xc5)][_0x567c38(0xc7)]['call'](this);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1f4)]=BattleManager[_0x1e1aaa(0x109)],BattleManager[_0x1e1aaa(0x109)]=function(){const _0x4086f8=_0x1e1aaa;if(this['isETB']())return;VisuMZ[_0x4086f8(0xc5)][_0x4086f8(0x1f4)][_0x4086f8(0x17f)](this);},BattleManager[_0x1e1aaa(0x1a6)]=function(){const _0xb0b1f7=_0x1e1aaa;if(!BattleManager['isETB']())return;let _0x2447b4='';if(this[_0xb0b1f7(0x262)]===$gameParty){let _0x316a8a=$gameParty['name']();_0x2447b4=TextManager[_0xb0b1f7(0x180)][_0xb0b1f7(0xa1)](_0x316a8a);}else _0x2447b4=TextManager[_0xb0b1f7(0xa8)];if(_0x2447b4!==''){this[_0xb0b1f7(0x99)][_0xb0b1f7(0x18e)](_0xb0b1f7(0x23d),_0x2447b4);const _0x50801f=BattleManager[_0xb0b1f7(0x14f)];this['_logWindow']['push'](_0xb0b1f7(0x1e2),_0x50801f),this['_logWindow']['push'](_0xb0b1f7(0x1e5));}},VisuMZ[_0x1e1aaa(0xc5)]['Game_Battler_onBattleStart']=Game_Battler['prototype'][_0x1e1aaa(0x152)],Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0x152)]=function(_0x344490){const _0x53c51f=_0x1e1aaa;VisuMZ[_0x53c51f(0xc5)][_0x53c51f(0xa7)][_0x53c51f(0x17f)](this,_0x344490),this[_0x53c51f(0x1e3)]();},Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0x1e3)]=function(){const _0x4c19b3=_0x1e1aaa;if(!BattleManager[_0x4c19b3(0xd3)]())return;this[_0x4c19b3(0x154)]=0x0;},VisuMZ['BattleSystemETB']['Game_Battler_turnCount']=Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0x1a0)],Game_Battler[_0x1e1aaa(0x175)]['turnCount']=function(){const _0xa21d4d=_0x1e1aaa;return BattleManager[_0xa21d4d(0xd3)]()?this[_0xa21d4d(0x154)]||0x0:VisuMZ[_0xa21d4d(0xc5)][_0xa21d4d(0x219)][_0xa21d4d(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x132)]=Game_Troop[_0x1e1aaa(0x175)][_0x1e1aaa(0x24f)],Game_Troop['prototype'][_0x1e1aaa(0x24f)]=function(){const _0x498a5b=_0x1e1aaa;VisuMZ['BattleSystemETB'][_0x498a5b(0x132)]['call'](this),this['increaseTurnETB']();},Game_Troop[_0x1e1aaa(0x175)]['increaseTurnETB']=function(){const _0x19167b=_0x1e1aaa;if(!BattleManager[_0x19167b(0xd3)]())return;if(Imported['VisuMZ_3_BattleAI']&&VisuMZ[_0x19167b(0xf0)][_0x19167b(0xcb)]<1.22){let _0x4db238='';_0x4db238+=_0x19167b(0x128),_0x4db238+=_0x19167b(0x12f),alert(_0x4db238),SceneManager[_0x19167b(0x11d)]();}let _0x477127=[];BattleManager[_0x19167b(0x262)]===$gameParty?_0x477127=$gameParty[_0x19167b(0x15b)]():_0x477127=$gameTroop[_0x19167b(0x13d)]();for(const _0x3b0f2d of _0x477127){_0x3b0f2d[_0x19167b(0x154)]=_0x3b0f2d[_0x19167b(0x154)]||0x0,_0x3b0f2d[_0x19167b(0x154)]++;}},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x160)]=BattleManager[_0x1e1aaa(0x1e4)],BattleManager[_0x1e1aaa(0x1e4)]=function(_0x132531,_0x371d49){const _0x1fba51=_0x1e1aaa,_0x1a5936=BattleManager['isETB']();if(_0x1a5936)$gameSystem['setBattleSystem'](_0x1fba51(0x119));VisuMZ['BattleSystemETB']['BattleManager_invokeCounterAttack'][_0x1fba51(0x17f)](this,_0x132531,_0x371d49);if(_0x1a5936)$gameSystem['setBattleSystem'](_0x1fba51(0x247));},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x171)]=Game_System[_0x1e1aaa(0x175)][_0x1e1aaa(0x251)],Game_System['prototype'][_0x1e1aaa(0x251)]=function(){const _0x5dd1fe=_0x1e1aaa;VisuMZ['BattleSystemETB'][_0x5dd1fe(0x171)][_0x5dd1fe(0x17f)](this),this[_0x5dd1fe(0x157)]();},Game_System['prototype']['initBattleSystemETB']=function(){const _0x113e72=_0x1e1aaa;this[_0x113e72(0x19e)]=!![];},Game_System['prototype']['isBattleSystemETBActionCountVisible']=function(){const _0x41b675=_0x1e1aaa;if(BattleManager[_0x41b675(0x20f)]===_0x41b675(0x12c))return![];return this[_0x41b675(0x19e)]===undefined&&this[_0x41b675(0x157)](),this[_0x41b675(0x19e)];},Game_System[_0x1e1aaa(0x175)][_0x1e1aaa(0x176)]=function(_0x21bfdc){const _0x18895e=_0x1e1aaa;this['_etbActionCountVisible']===undefined&&this['initBattleSystemETB'](),this[_0x18895e(0x19e)]=_0x21bfdc;},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x222)]=Game_Action['prototype']['speed'],Game_Action[_0x1e1aaa(0x175)][_0x1e1aaa(0x230)]=function(){const _0x477aa6=_0x1e1aaa;return BattleManager[_0x477aa6(0xd3)]()?0x0:VisuMZ[_0x477aa6(0xc5)][_0x477aa6(0x222)][_0x477aa6(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x169)]=Game_Action[_0x1e1aaa(0x175)][_0x1e1aaa(0x187)],Game_Action['prototype'][_0x1e1aaa(0x187)]=function(){const _0x24704f=_0x1e1aaa;VisuMZ[_0x24704f(0xc5)][_0x24704f(0x169)]['call'](this),this['applyGlobalETB']();},Game_Action[_0x1e1aaa(0x175)][_0x1e1aaa(0xa4)]=function(){const _0x26110b=_0x1e1aaa;if(!BattleManager[_0x26110b(0xd3)]())return;if(!this[_0x26110b(0xac)]())return;if(!this[_0x26110b(0x18c)]())return;this[_0x26110b(0x208)]()&&this[_0x26110b(0x18c)]()['id']===this[_0x26110b(0xac)]()[_0x26110b(0xbb)]()&&(BattleManager[_0x26110b(0xb6)]&&this[_0x26110b(0xac)]()[_0x26110b(0x9d)]());const _0x131274=VisuMZ['BattleSystemETB'][_0x26110b(0x195)],_0x3a8233=this['item']()[_0x26110b(0xb4)];_0x3a8233['match'](_0x131274[_0x26110b(0x1ae)])&&this[_0x26110b(0xac)]()[_0x26110b(0x9d)]();},VisuMZ[_0x1e1aaa(0xc5)]['Game_BattlerBase_hide']=Game_BattlerBase[_0x1e1aaa(0x175)]['hide'],Game_BattlerBase['prototype'][_0x1e1aaa(0x21e)]=function(){const _0x5b338e=_0x1e1aaa;VisuMZ[_0x5b338e(0xc5)][_0x5b338e(0xc2)][_0x5b338e(0x17f)](this),BattleManager[_0x5b338e(0x94)](),this[_0x5b338e(0x1c2)]()[_0x5b338e(0x246)]();},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x11c)]=Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0x148)],Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0x148)]=function(){const _0x191060=_0x1e1aaa;VisuMZ['BattleSystemETB'][_0x191060(0x11c)][_0x191060(0x17f)](this),BattleManager['removeActionBattlersETB'](),this[_0x191060(0x1c2)]()['recalculateActionsETB']();},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x235)]=Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0xdb)],Game_Battler[_0x1e1aaa(0x175)]['performCollapse']=function(){const _0x381008=_0x1e1aaa;VisuMZ['BattleSystemETB']['Game_Battler_performCollapse'][_0x381008(0x17f)](this),BattleManager[_0x381008(0x94)](),this[_0x381008(0x1c2)]()['recalculateActionsETB']();},Game_BattlerBase[_0x1e1aaa(0x175)]['passTurnETB']=function(){const _0x204a5c=_0x1e1aaa;this[_0x204a5c(0xff)]=!![],BattleManager[_0x204a5c(0x94)]();},Game_BattlerBase[_0x1e1aaa(0x175)]['isPassingTurnETB']=function(){const _0x406983=_0x1e1aaa;return!!this[_0x406983(0xff)];},Game_BattlerBase[_0x1e1aaa(0x19c)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x15f)]['AgiBuff'],Game_BattlerBase[_0x1e1aaa(0x21b)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x15f)][_0x1e1aaa(0x23b)],Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0x25f)]=function(){const _0x2aeaae=_0x1e1aaa;let _0x1e0a3c=0x0;if(this[_0x2aeaae(0x258)]===undefined)this[_0x2aeaae(0x155)]();const _0x16247b=this[_0x2aeaae(0x258)][0x6]||0x0;if(_0x16247b>0x0&&Game_BattlerBase[_0x2aeaae(0x19c)])_0x1e0a3c+=_0x16247b;else _0x16247b<0x0&&Game_BattlerBase[_0x2aeaae(0x21b)]&&(_0x1e0a3c+=_0x16247b);const _0x23aae1=VisuMZ[_0x2aeaae(0xc5)][_0x2aeaae(0x195)],_0x33e24c=this[_0x2aeaae(0x1a2)]();for(const _0x4b4d92 of _0x33e24c){if(!_0x4b4d92)continue;const _0x896320=_0x4b4d92[_0x2aeaae(0xb4)];_0x896320[_0x2aeaae(0x245)](_0x23aae1['ActionPointTraitPlus'])&&(_0x1e0a3c+=Number(RegExp['$1']));}return Math[_0x2aeaae(0x127)](0x0,_0x1e0a3c);},VisuMZ[_0x1e1aaa(0xc5)]['Game_BattlerBase_clearStates']=Game_BattlerBase['prototype'][_0x1e1aaa(0x23f)],Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0x23f)]=function(){const _0xb563a1=_0x1e1aaa;VisuMZ[_0xb563a1(0xc5)][_0xb563a1(0x1f6)][_0xb563a1(0x17f)](this),this[_0xb563a1(0x1c2)]()['recalculateActionsETB']();},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0xee)]=Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0xe7)],Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0xe7)]=function(_0x322c73){const _0x849110=_0x1e1aaa;if(SceneManager[_0x849110(0x224)]()&&BattleManager[_0x849110(0xd3)]()){const _0x4222f8=DataManager['getActionCostETB'](_0x322c73);if(_0x4222f8>this[_0x849110(0x1c2)]()['getCurrentActionsETB']())return![];}return VisuMZ[_0x849110(0xc5)]['Game_BattlerBase_canUse'][_0x849110(0x17f)](this,_0x322c73);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x249)]=Game_Battler['prototype'][_0x1e1aaa(0xc0)],Game_Battler[_0x1e1aaa(0x175)]['useItem']=function(_0x5914c1){const _0x1c1e15=_0x1e1aaa;VisuMZ['BattleSystemETB'][_0x1c1e15(0x249)][_0x1c1e15(0x17f)](this,_0x5914c1),this['payActionCostETB'](_0x5914c1);},Game_Battler['prototype'][_0x1e1aaa(0xf2)]=function(_0x4431fb){const _0x358db3=_0x1e1aaa;if(!_0x4431fb)return;if(!SceneManager[_0x358db3(0x224)]())return;if(!BattleManager[_0x358db3(0xd3)]())return;const _0x4ad6b8=BattleManager[_0x358db3(0xb3)];if(_0x4ad6b8&&_0x4ad6b8[_0x358db3(0x13b)])return;const _0x4c5ce0=DataManager[_0x358db3(0xd9)](_0x4431fb);this[_0x358db3(0x1c2)]()[_0x358db3(0x9f)](_0x4c5ce0);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x15c)]=Game_Battler[_0x1e1aaa(0x175)]['onTurnEnd'],Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0x12b)]=function(){const _0xcde164=_0x1e1aaa;this[_0xcde164(0xf3)]=BattleManager[_0xcde164(0xd3)]()&&BattleManager[_0xcde164(0x206)],VisuMZ[_0xcde164(0xc5)][_0xcde164(0x15c)][_0xcde164(0x17f)](this),delete this[_0xcde164(0xf3)];},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x140)]=Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0xbc)],Game_BattlerBase['prototype']['updateStateTurns']=function(){const _0x1e955c=_0x1e1aaa;if(this[_0x1e955c(0xf3)])return;VisuMZ['BattleSystemETB'][_0x1e955c(0x140)][_0x1e955c(0x17f)](this);},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x25d)]=Game_BattlerBase[_0x1e1aaa(0x175)][_0x1e1aaa(0x188)],Game_BattlerBase['prototype']['updateBuffTurns']=function(){const _0x418b99=_0x1e1aaa;if(this[_0x418b99(0xf3)])return;VisuMZ[_0x418b99(0xc5)][_0x418b99(0x25d)][_0x418b99(0x17f)](this);},VisuMZ['BattleSystemETB']['Game_Battler_addState']=Game_Battler['prototype'][_0x1e1aaa(0x11f)],Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0x11f)]=function(_0x3e7981){const _0x1269ca=_0x1e1aaa;VisuMZ['BattleSystemETB']['Game_Battler_addState'][_0x1269ca(0x17f)](this,_0x3e7981),this['friendsUnit']()[_0x1269ca(0x246)]();},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x213)]=Game_Battler['prototype'][_0x1e1aaa(0x23a)],Game_Battler['prototype'][_0x1e1aaa(0x23a)]=function(_0x2eb6c4){const _0x5975fb=_0x1e1aaa,_0x224ed7=this['isDead']();VisuMZ['BattleSystemETB'][_0x5975fb(0x213)][_0x5975fb(0x17f)](this,_0x2eb6c4),BattleManager['isETB']()&&_0x224ed7&&this[_0x5975fb(0x1b6)]()&&this[_0x5975fb(0x129)](),this[_0x5975fb(0x1c2)]()[_0x5975fb(0x246)]();},Game_Battler[_0x1e1aaa(0x175)]['reviveETB']=function(){const _0xa0b950=_0x1e1aaa;if(!this[_0xa0b950(0x199)]())return;if(!this['canInput']())return;this[_0xa0b950(0xff)]=![];const _0x904e9f=$gameTroop[_0xa0b950(0x1a0)]();let _0x42ec03=_0x904e9f%0x2===0x0?BattleManager['_etbTeamEven']:BattleManager[_0xa0b950(0x114)];if(_0x42ec03===this[_0xa0b950(0x1c2)]()){const _0xdc2b6f=BattleManager['_actionBattlers'];let _0x666922=Game_Unit[_0xa0b950(0x112)];while(_0x666922--){_0xdc2b6f[_0xa0b950(0x18e)](this);}}},VisuMZ['BattleSystemETB'][_0x1e1aaa(0xea)]=Game_Battler[_0x1e1aaa(0x175)]['addBuff'],Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0xaf)]=function(_0x13a1d0,_0x1c56e0){const _0x30bc74=_0x1e1aaa;VisuMZ[_0x30bc74(0xc5)][_0x30bc74(0xea)]['call'](this,_0x13a1d0,_0x1c56e0),this['friendsUnit']()[_0x30bc74(0x246)]();},VisuMZ['BattleSystemETB']['Game_Battler_addDebuff']=Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0x18b)],Game_Battler[_0x1e1aaa(0x175)]['addDebuff']=function(_0x213d8e,_0x3a38be){const _0x48852a=_0x1e1aaa;VisuMZ['BattleSystemETB']['Game_Battler_addDebuff'][_0x48852a(0x17f)](this,_0x213d8e,_0x3a38be),this[_0x48852a(0x1c2)]()[_0x48852a(0x246)]();},VisuMZ['BattleSystemETB'][_0x1e1aaa(0xe5)]=Game_Battler[_0x1e1aaa(0x175)][_0x1e1aaa(0x156)],Game_Battler[_0x1e1aaa(0x175)]['removeBuff']=function(_0x36f544){const _0x592dd2=_0x1e1aaa;VisuMZ[_0x592dd2(0xc5)][_0x592dd2(0xe5)][_0x592dd2(0x17f)](this,_0x36f544),this['friendsUnit']()[_0x592dd2(0x246)]();},VisuMZ[_0x1e1aaa(0xc5)]['Game_Battler_forceAction']=Game_Battler['prototype'][_0x1e1aaa(0x211)],Game_Battler['prototype'][_0x1e1aaa(0x211)]=function(_0x14e4bd,_0x399584){const _0x45d33b=_0x1e1aaa;BattleManager['isETB']()?this['forceActionETB'](_0x14e4bd,_0x399584):VisuMZ[_0x45d33b(0xc5)][_0x45d33b(0x184)][_0x45d33b(0x17f)](this,_0x14e4bd,_0x399584);},Game_Battler[_0x1e1aaa(0x175)]['forceActionETB']=function(_0x11a664,_0x23f499){const _0xe0181d=_0x1e1aaa,_0x2e9938=new Game_Action(this,!![]);_0x2e9938[_0xe0181d(0x22a)](_0x11a664),_0x2e9938[_0xe0181d(0x13b)]=!![];if(_0x23f499===-0x2)_0x2e9938[_0xe0181d(0x22d)](this['_lastTargetIndex']);else _0x23f499===-0x1?_0x2e9938[_0xe0181d(0xad)]():_0x2e9938[_0xe0181d(0x22d)](_0x23f499);this[_0xe0181d(0x205)][_0xe0181d(0xbf)](_0x2e9938);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x197)]=BattleManager[_0x1e1aaa(0x211)],BattleManager['forceAction']=function(_0x3d275e){const _0x11656b=_0x1e1aaa;BattleManager['isETB']()?this[_0x11656b(0x146)](_0x3d275e):VisuMZ['BattleSystemETB'][_0x11656b(0x197)]['call'](this,_0x3d275e);},BattleManager[_0x1e1aaa(0x146)]=function(_0x2114af){const _0x3c009f=_0x1e1aaa,_0x2249e6=JsonEx[_0x3c009f(0x135)](_0x2114af[_0x3c009f(0x1e7)]());this[_0x3c009f(0xc9)][_0x3c009f(0x18e)]([_0x2114af,_0x2249e6]);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0xeb)]=Game_Actor[_0x1e1aaa(0x175)][_0x1e1aaa(0x1d2)],Game_Actor['prototype'][_0x1e1aaa(0x1d2)]=function(){const _0x18fec5=_0x1e1aaa;if(BattleManager['isETB']()){if(this['battler']())this[_0x18fec5(0x1a3)]()[_0x18fec5(0x1aa)]();return![];}return VisuMZ[_0x18fec5(0xc5)][_0x18fec5(0xeb)][_0x18fec5(0x17f)](this);},VisuMZ['BattleSystemETB']['Game_Actor_changeEquip']=Game_Actor[_0x1e1aaa(0x175)]['changeEquip'],Game_Actor['prototype'][_0x1e1aaa(0x136)]=function(_0x4ff322,_0x19ec01){const _0x3c4f43=_0x1e1aaa;VisuMZ[_0x3c4f43(0xc5)][_0x3c4f43(0xe8)]['call'](this,_0x4ff322,_0x19ec01),this['friendsUnit']()['recalculateActionsETB']();},VisuMZ[_0x1e1aaa(0xc5)]['Game_Actor_forceChangeEquip']=Game_Actor[_0x1e1aaa(0x175)][_0x1e1aaa(0x14d)],Game_Actor[_0x1e1aaa(0x175)][_0x1e1aaa(0x14d)]=function(_0x2b3d2f,_0x405043){const _0x2fca70=_0x1e1aaa;VisuMZ['BattleSystemETB'][_0x2fca70(0x1d9)]['call'](this,_0x2b3d2f,_0x405043),this[_0x2fca70(0x1c2)]()[_0x2fca70(0x246)]();},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x209)]=Game_Actor[_0x1e1aaa(0x175)][_0x1e1aaa(0xc8)],Game_Actor['prototype'][_0x1e1aaa(0xc8)]=function(_0x405362,_0x3de574){const _0x2a0de4=_0x1e1aaa;VisuMZ[_0x2a0de4(0xc5)][_0x2a0de4(0x209)][_0x2a0de4(0x17f)](this,_0x405362,_0x3de574),this[_0x2a0de4(0x1c2)]()['recalculateActionsETB']();},VisuMZ[_0x1e1aaa(0xc5)]['Game_Actor_discardEquip']=Game_Actor[_0x1e1aaa(0x175)]['discardEquip'],Game_Actor[_0x1e1aaa(0x175)][_0x1e1aaa(0x239)]=function(_0x30b5e8){const _0x1ef524=_0x1e1aaa;VisuMZ[_0x1ef524(0xc5)][_0x1ef524(0x24a)][_0x1ef524(0x17f)](this,_0x30b5e8),this[_0x1ef524(0x1c2)]()['recalculateActionsETB']();},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1ab)]=Game_Actor[_0x1e1aaa(0x175)]['releaseUnequippableItems'],Game_Actor['prototype']['releaseUnequippableItems']=function(_0x3ddeed){const _0x4267da=_0x1e1aaa;VisuMZ[_0x4267da(0xc5)][_0x4267da(0x1ab)][_0x4267da(0x17f)](this,_0x3ddeed),this[_0x4267da(0x1c2)]()[_0x4267da(0x246)]();},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x144)]=Game_Actor[_0x1e1aaa(0x175)]['changeClass'],Game_Actor[_0x1e1aaa(0x175)][_0x1e1aaa(0x172)]=function(_0xff82ef,_0x4fc134){const _0x61a1b0=_0x1e1aaa;VisuMZ[_0x61a1b0(0xc5)][_0x61a1b0(0x144)][_0x61a1b0(0x17f)](this,_0xff82ef,_0x4fc134),this['friendsUnit']()[_0x61a1b0(0x246)]();},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x240)]=Game_Enemy['prototype'][_0x1e1aaa(0x269)],Game_Enemy[_0x1e1aaa(0x175)]['transform']=function(_0x7ac435){const _0x25e7d8=_0x1e1aaa;VisuMZ['BattleSystemETB'][_0x25e7d8(0x240)][_0x25e7d8(0x17f)](this,_0x7ac435),this['friendsUnit']()[_0x25e7d8(0x246)]();},Game_Unit[_0x1e1aaa(0x138)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x15f)][_0x1e1aaa(0x19a)]||[0x1],Game_Unit['_ETB_ACTION_FIRST']=Game_Unit['_ETB_ACTION_BASE'][0x0],Game_Unit[_0x1e1aaa(0x93)]=Game_Unit[_0x1e1aaa(0x138)][0x1]||Game_Unit[_0x1e1aaa(0x1db)],Game_Unit[_0x1e1aaa(0x138)][_0x1e1aaa(0xbf)](Game_Unit[_0x1e1aaa(0x93)]),Game_Unit[_0x1e1aaa(0x164)]=Game_Unit['_ETB_ACTION_BASE'][Game_Unit['_ETB_ACTION_BASE']['length']-0x1],Game_Unit[_0x1e1aaa(0x112)]=VisuMZ['BattleSystemETB'][_0x1e1aaa(0x1b8)]['Mechanics']['MaxActions'],Game_Unit[_0x1e1aaa(0x182)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x15f)][_0x1e1aaa(0x261)],Game_Unit[_0x1e1aaa(0xd1)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)]['Mechanics'][_0x1e1aaa(0xf1)],Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x226)]=function(){const _0x38b796=_0x1e1aaa;this[_0x38b796(0xbe)](),this[_0x38b796(0x1a7)](this[_0x38b796(0x14a)]());},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0xbe)]=function(){const _0x3e9186=_0x1e1aaa,_0x490354=$gameTroop['turnCount']();let _0x39f31b=_0x490354%0x2===0x0?BattleManager[_0x3e9186(0x1d5)]:BattleManager['_etbTeamOdd'];_0x39f31b===this&&this[_0x3e9186(0x267)]();},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x267)]=function(_0x21969a){const _0x78e429=_0x1e1aaa;this[_0x78e429(0x159)]=!![];let _0x325bec=0x0,_0x4f154a=this[_0x78e429(0x24e)]()[_0x78e429(0x1f1)](_0x40e2e8=>_0x40e2e8[_0x78e429(0x199)]());_0x21969a=_0x21969a||$gameTroop[_0x78e429(0x1a0)](),_0x325bec=Game_Unit['_ETB_ACTION_BASE'][_0x21969a]??Game_Unit[_0x78e429(0x164)],_0x325bec=_0x4f154a['reduce']((_0x367870,_0x45c506)=>_0x367870+_0x45c506[_0x78e429(0x25f)](),_0x325bec),_0x325bec=_0x325bec['clamp'](Game_Unit[_0x78e429(0x182)],Game_Unit[_0x78e429(0x112)]),this['_etbActionsMax']=_0x325bec;},Game_Unit['prototype']['recalculateActionsETB']=function(){const _0x24c237=_0x1e1aaa;if(!BattleManager['isETB']())return;if(!$gameParty[_0x24c237(0xa3)]())return;const _0x140bdb=this[_0x24c237(0x14a)]();this[_0x24c237(0xbe)]();let _0x2640db=this['getCurrentActionsETB']();const _0x48f676=this['getMaxActionsETB']()-_0x140bdb;if(BattleManager[_0x24c237(0x139)]&&_0x48f676>0x0)_0x2640db+=_0x48f676;if(BattleManager[_0x24c237(0x10b)]&&_0x48f676<0x0)_0x2640db+=_0x48f676;_0x2640db=Math[_0x24c237(0x253)](_0x2640db,Game_Unit[_0x24c237(0x112)]),this[_0x24c237(0x1a7)](_0x2640db);},Game_Unit[_0x1e1aaa(0x175)]['getCurrentActionsETB']=function(){const _0x745e20=_0x1e1aaa;return this[_0x745e20(0x1f9)]||0x0;},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x1a7)]=function(_0x19e9ec){const _0x3ae53a=_0x1e1aaa;this[_0x3ae53a(0x1f9)]=Math[_0x3ae53a(0x214)](_0x19e9ec)[_0x3ae53a(0xc3)](0x0,Game_Unit['_ETB_MAX_ACTIONS']),!Game_Unit[_0x3ae53a(0xd1)]&&(this[_0x3ae53a(0x1f9)]=Math[_0x3ae53a(0x253)](this[_0x3ae53a(0x1f9)],this[_0x3ae53a(0x14a)]()));},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x203)]=function(_0x780178){const _0x1617f7=_0x1e1aaa;this[_0x1617f7(0x1a7)](this['getCurrentActionsETB']()+_0x780178);},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x97)]=function(_0x166c68){const _0x218a7c=_0x1e1aaa;this[_0x218a7c(0x203)](-_0x166c68);},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x14a)]=function(){const _0x580517=_0x1e1aaa;return this[_0x580517(0x1b0)]||0x0;},Game_Unit[_0x1e1aaa(0x175)]['setMaxActionsETB']=function(_0x173db4){const _0x4061d6=_0x1e1aaa;this[_0x4061d6(0x1b0)]=_0x173db4[_0x4061d6(0xc3)](Game_Unit[_0x4061d6(0x182)],Game_Unit[_0x4061d6(0x112)]);},Game_Unit['prototype'][_0x1e1aaa(0x9f)]=function(_0x15041e){const _0x38a8e0=_0x1e1aaa;this[_0x38a8e0(0x97)](_0x15041e);},Game_Unit[_0x1e1aaa(0x175)]['canActETB']=function(){const _0x3af8a6=_0x1e1aaa;if(BattleManager[_0x3af8a6(0x10d)]){if(this['members']()[_0x3af8a6(0x137)](BattleManager[_0x3af8a6(0x10d)])){const _0x597d9b=BattleManager['_subject'][_0x3af8a6(0x1e7)]();if(_0x597d9b&&_0x597d9b[_0x3af8a6(0x13b)])return!![];}}return this['_etbActionsCur']=this['_etbActionsCur']||0x0,this['_etbActionsCur']>0x0;},Game_Unit[_0x1e1aaa(0x175)]['performTurnEndETB']=function(){const _0x7aa399=_0x1e1aaa;for(const _0x2c7308 of this[_0x7aa399(0x13d)]()){if(!_0x2c7308)continue;const _0x582b37=_0x2c7308['isAlive']();_0x2c7308[_0x7aa399(0x12b)](),_0x2c7308[_0x7aa399(0x218)](),_0x582b37&&_0x2c7308[_0x7aa399(0x265)]()&&_0x2c7308['performCollapse']();}},Game_Unit[_0x1e1aaa(0x175)]['meetEndTurnConditionsETB']=function(){const _0x2e350c=_0x1e1aaa;if(this[_0x2e350c(0x25c)]()<=0x0)return!![];if(!this[_0x2e350c(0x24e)]()[_0x2e350c(0x1eb)](_0x59a02d=>_0x59a02d['canMove']()))return!![];return![];},Game_Unit['prototype'][_0x1e1aaa(0x243)]=function(){const _0x3d2e45=_0x1e1aaa;for(const _0x281a68 of this[_0x3d2e45(0x13d)]()){if(!_0x281a68)continue;_0x281a68[_0x3d2e45(0xbc)](),_0x281a68[_0x3d2e45(0xce)](0x2),_0x281a68['updateBuffTurns'](),_0x281a68[_0x3d2e45(0x218)]();}},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x189)]=function(){const _0x37a1b2=_0x1e1aaa;for(const _0x6d37d7 of this[_0x37a1b2(0x13d)]()){if(!_0x6d37d7)continue;_0x6d37d7[_0x37a1b2(0xff)]=![];}},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0xe1)]=function(){const _0x5a0491=_0x1e1aaa,_0x4f6770=this[_0x5a0491(0x13d)]();return Math[_0x5a0491(0x253)](..._0x4f6770[_0x5a0491(0x190)](_0x43ff56=>_0x43ff56[_0x5a0491(0x1ed)]));},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x24d)]=function(){const _0x111e61=_0x1e1aaa,_0x3ca363=this[_0x111e61(0x13d)]();return Math['max'](..._0x3ca363[_0x111e61(0x190)](_0x5644e0=>_0x5644e0[_0x111e61(0x1ed)]));},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0xf7)]=function(){const _0x3ada26=_0x1e1aaa,_0x1b1d28=this[_0x3ada26(0x13d)]();return _0x1b1d28['reduce']((_0x2e41b5,_0x103d42)=>_0x2e41b5+_0x103d42[_0x3ada26(0x1ed)],0x0);},VisuMZ['BattleSystemETB']['Game_Unit_onBattleStart']=Game_Unit[_0x1e1aaa(0x175)]['onBattleStart'],Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0x152)]=function(_0xf66cb1){const _0x18bf70=_0x1e1aaa;VisuMZ[_0x18bf70(0xc5)][_0x18bf70(0x124)]['call'](this,_0xf66cb1),BattleManager[_0x18bf70(0xd3)]()&&(this['_etbLastIndex']=0x0);},Game_Unit['prototype'][_0x1e1aaa(0xa5)]=function(){const _0x19122f=_0x1e1aaa,_0x1f8903=this[_0x19122f(0x24e)]();if(BattleManager[_0x19122f(0x268)])return _0x1f8903;if(BattleManager[_0x19122f(0x13f)])return _0x1f8903;this['_etbLastIndex']=this['_etbLastIndex']||0x0;while(!_0x1f8903['some'](_0x99bd8b=>_0x99bd8b['index']()===this[_0x19122f(0x1e9)])){const _0x16094b=this['members'](),_0x44ccf0=_0x16094b[this[_0x19122f(0x1e9)]];let _0xeec1c7=_0x16094b[_0x19122f(0xd2)](_0x44ccf0)+0x1;if(_0xeec1c7>=_0x16094b['length'])_0xeec1c7=0x0;this[_0x19122f(0x1e9)]=_0xeec1c7;}for(;;){const _0x1b066a=_0x1f8903[0x0][_0x19122f(0x168)]();if(_0x1b066a===this['_etbLastIndex'])break;_0x1f8903[_0x19122f(0x18e)](_0x1f8903[_0x19122f(0x1b2)]());}return _0x1f8903;},Game_Unit[_0x1e1aaa(0x175)][_0x1e1aaa(0xa0)]=function(_0x4ecb51){const _0x4a9980=_0x1e1aaa;this[_0x4a9980(0x1e9)]=_0x4ecb51?_0x4ecb51[_0x4a9980(0x168)]():0x0;},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x236)]=Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0x1d4)],Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0x1d4)]=function(){const _0x255fc0=_0x1e1aaa;VisuMZ[_0x255fc0(0xc5)][_0x255fc0(0x236)]['call'](this),BattleManager['isETB']()&&this['createActorCommandWindowETB']();},Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0x201)]=function(){const _0x5a7046=_0x1e1aaa,_0x16241b=this[_0x5a7046(0x238)];this['isPartyCommandWindowDisabled']()&&delete _0x16241b['_handlers'][_0x5a7046(0x12d)];},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x9c)]=Scene_Battle[_0x1e1aaa(0x175)]['commandCancel'],Scene_Battle[_0x1e1aaa(0x175)]['commandCancel']=function(){const _0x1fbbe5=_0x1e1aaa;BattleManager[_0x1fbbe5(0xd3)]()?this[_0x1fbbe5(0x207)]():VisuMZ['BattleSystemETB'][_0x1fbbe5(0x9c)][_0x1fbbe5(0x17f)](this);},Scene_Battle['prototype'][_0x1e1aaa(0x207)]=function(){const _0x329368=_0x1e1aaa;this[_0x329368(0x19d)]['setup'](),this[_0x329368(0x238)][_0x329368(0x170)]();},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x141)]=Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0x1b5)],Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0x1b5)]=function(){const _0x24e30f=_0x1e1aaa;BattleManager[_0x24e30f(0xd3)]()?this[_0x24e30f(0x10f)]():VisuMZ[_0x24e30f(0xc5)][_0x24e30f(0x141)]['call'](this);},VisuMZ['BattleSystemETB'][_0x1e1aaa(0x198)]=Scene_Battle[_0x1e1aaa(0x175)]['createAllWindows'],Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0xc4)]=function(){const _0x110796=_0x1e1aaa;VisuMZ[_0x110796(0xc5)][_0x110796(0x198)][_0x110796(0x17f)](this),this[_0x110796(0x25b)]();},Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0x25b)]=function(){const _0x282bc0=_0x1e1aaa;if(!BattleManager[_0x282bc0(0xd3)]())return;const _0x4b8654=this['getChildIndex'](this[_0x282bc0(0x1c4)]);this[_0x282bc0(0x21d)]=new Window_ETB_ActionCount(),this[_0x282bc0(0x21d)][_0x282bc0(0xd8)]($gameTroop),this['addChildAt'](this[_0x282bc0(0x21d)],_0x4b8654),this[_0x282bc0(0x179)]=new Window_ETB_ActionCount(),this[_0x282bc0(0x179)][_0x282bc0(0xd8)]($gameParty),this[_0x282bc0(0x237)](this[_0x282bc0(0x179)],_0x4b8654),this['repositionLogWindowETB']();},Scene_Battle['prototype'][_0x1e1aaa(0x1de)]=function(){const _0x14609a=_0x1e1aaa;if(!BattleManager[_0x14609a(0xd3)]())return;if(!this[_0x14609a(0x99)])return;const _0x398464=Window_ETB_ActionCount['Settings'];if(_0x398464[_0x14609a(0x126)])return;this[_0x14609a(0x99)]['y']+=_0x398464[_0x14609a(0x193)];},Scene_Battle[_0x1e1aaa(0x175)][_0x1e1aaa(0x103)]=function(){const _0x4206d1=_0x1e1aaa;this['_etbTroopActionCountWindow']&&this[_0x4206d1(0x21d)][_0x4206d1(0x26c)](),this[_0x4206d1(0x179)]&&this[_0x4206d1(0x179)][_0x4206d1(0x26c)]();},Window_Base['_ETB_COST_POSITION']=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)][_0x1e1aaa(0x252)],Window_Base[_0x1e1aaa(0x96)]=VisuMZ['BattleSystemETB'][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)][_0x1e1aaa(0x14c)],Window_Base[_0x1e1aaa(0x16a)]=VisuMZ[_0x1e1aaa(0xc5)]['Settings'][_0x1e1aaa(0x217)][_0x1e1aaa(0x1f3)],Window_Base[_0x1e1aaa(0x1e0)]=VisuMZ['BattleSystemETB']['Settings'][_0x1e1aaa(0x217)][_0x1e1aaa(0x200)],Window_Base[_0x1e1aaa(0x18d)]=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x217)][_0x1e1aaa(0x210)],VisuMZ[_0x1e1aaa(0xc5)]['Window_Base_makeAdditionalSkillCostText']=Window_Base[_0x1e1aaa(0x175)][_0x1e1aaa(0x16c)],Window_Base[_0x1e1aaa(0x175)]['makeAdditionalSkillCostText']=function(_0x2bc9a9,_0xb71e05,_0x58d3e8){const _0x58971f=_0x1e1aaa;return _0x58d3e8=VisuMZ[_0x58971f(0xc5)][_0x58971f(0x1df)][_0x58971f(0x17f)](this,_0x2bc9a9,_0xb71e05,_0x58d3e8),_0x58d3e8=this[_0x58971f(0x1cb)](_0x2bc9a9,_0xb71e05,_0x58d3e8),_0x58d3e8;},VisuMZ['BattleSystemETB']['Window_Base_drawItemNumber']=Window_Base[_0x1e1aaa(0x175)][_0x1e1aaa(0x115)],Window_Base['prototype'][_0x1e1aaa(0x115)]=function(_0xae8bdd,_0x4e0fee,_0xe0a72a,_0x1af3d3){const _0x189f8d=_0x1e1aaa;BattleManager[_0x189f8d(0xd3)]()&&this[_0x189f8d(0x19f)]===Window_BattleItem?this[_0x189f8d(0x1fc)](_0xae8bdd,_0x4e0fee,_0xe0a72a,_0x1af3d3):VisuMZ[_0x189f8d(0xc5)][_0x189f8d(0xae)][_0x189f8d(0x17f)](this,_0xae8bdd,_0x4e0fee,_0xe0a72a,_0x1af3d3),this[_0x189f8d(0x1fb)]();},Window_Base[_0x1e1aaa(0x175)][_0x1e1aaa(0x1fc)]=function(_0x4481d4,_0x3c8ad5,_0x1bc4ac,_0x14945a){const _0x43c38a=_0x1e1aaa,_0x11fc1b=BattleManager[_0x43c38a(0x1b4)]||$gameParty[_0x43c38a(0x13d)]()[0x0],_0x45c9cb=this[_0x43c38a(0x1cb)](_0x11fc1b,_0x4481d4,''),_0x468e57=this[_0x43c38a(0x229)](_0x45c9cb)['width'],_0x2eef29=Window_Base[_0x43c38a(0x1fa)];let _0x1180e4=_0x3c8ad5+_0x14945a-_0x468e57;if(_0x45c9cb==='')VisuMZ['BattleSystemETB'][_0x43c38a(0xae)][_0x43c38a(0x17f)](this,_0x4481d4,_0x3c8ad5,_0x1bc4ac,_0x14945a);else{if(this[_0x43c38a(0x1ec)](_0x4481d4)){this[_0x43c38a(0x1fb)]();const _0x23e063=VisuMZ[_0x43c38a(0x1c1)][_0x43c38a(0x1b8)][_0x43c38a(0x223)];this['contents'][_0x43c38a(0x232)]=_0x23e063[_0x43c38a(0xb0)];if(_0x2eef29){const _0x4a9432=_0x23e063[_0x43c38a(0x131)],_0x1e8929=_0x4a9432[_0x43c38a(0xa1)]($gameParty[_0x43c38a(0xda)](_0x4481d4)),_0x2a530b=this[_0x43c38a(0x18f)](_0x1e8929+this['skillCostSeparator']());_0x1180e4-=_0x2a530b;}else _0x14945a-=this[_0x43c38a(0x18f)](this[_0x43c38a(0x134)]())+_0x468e57;VisuMZ[_0x43c38a(0xc5)]['Window_Base_drawItemNumber']['call'](this,_0x4481d4,_0x3c8ad5,_0x1bc4ac,_0x14945a);}}this[_0x43c38a(0x120)](_0x45c9cb,_0x1180e4,_0x1bc4ac);},Window_Base[_0x1e1aaa(0x175)][_0x1e1aaa(0x1cb)]=function(_0x4f8363,_0x91b120,_0x5d389f){const _0x1b45a0=_0x1e1aaa;if(!BattleManager[_0x1b45a0(0xd3)]())return _0x5d389f;if(!_0x4f8363)return _0x5d389f;if(!_0x91b120)return _0x5d389f;if(_0x91b120[_0x1b45a0(0xb4)]['match'](VisuMZ[_0x1b45a0(0xc5)]['RegExp'][_0x1b45a0(0x1f5)]))return _0x5d389f;let _0x5b45fc=DataManager[_0x1b45a0(0xd9)](_0x91b120);const _0x445fc4=Window_Base[_0x1b45a0(0x1fa)],_0x1baf71=Window_Base[_0x1b45a0(0x96)],_0x125a4e=Window_Base[_0x1b45a0(0x16a)],_0x3ea37d=Window_Base['_ETB_COST_SHOW_0'],_0x3db99a=Window_Base[_0x1b45a0(0x18d)];if(_0x91b120[_0x1b45a0(0xb4)][_0x1b45a0(0x245)](VisuMZ['BattleSystemETB'][_0x1b45a0(0x195)][_0x1b45a0(0x259)])){if(_0x5b45fc<0x0)return _0x5d389f;}else{if(DataManager['isSkill'](_0x91b120)&&this['constructor']===Window_ActorCommand){if(!_0x1baf71&&_0x91b120['id']===_0x4f8363['attackSkillId']())return _0x5d389f;if(!_0x125a4e&&_0x91b120['id']===_0x4f8363[_0x1b45a0(0xbb)]())return _0x5d389f;}if(_0x5b45fc<0x0)return _0x5d389f;if(!_0x3ea37d&&_0x5b45fc===0x0)return _0x5d389f;if(!_0x3db99a&&_0x5b45fc===0x1)return _0x5d389f;}const _0x3138d4='\x5cI[%1]'[_0x1b45a0(0xa1)](ImageManager[_0x1b45a0(0x16d)]),_0x13e23e=TextManager[_0x1b45a0(0xe3)];let _0x2ae728=TextManager[_0x1b45a0(0x1b9)][_0x1b45a0(0xa1)](_0x5b45fc,_0x13e23e,_0x3138d4);if(_0x5d389f==='')_0x5d389f+=_0x2ae728;else _0x445fc4?_0x5d389f=_0x2ae728+this[_0x1b45a0(0x134)]()+_0x5d389f:_0x5d389f=_0x5d389f+this[_0x1b45a0(0x134)]()+_0x2ae728;return _0x5d389f;},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x161)]=Window_Help['prototype'][_0x1e1aaa(0x264)],Window_Help[_0x1e1aaa(0x175)][_0x1e1aaa(0x264)]=function(_0x492c5d){const _0x21fdc3=_0x1e1aaa;BattleManager[_0x21fdc3(0xd3)]()&&_0x492c5d&&_0x492c5d['note']&&_0x492c5d['note'][_0x21fdc3(0x245)](/<(?:ETB) HELP>\s*([\s\S]*)\s*<\/(?:ETB) HELP>/i)?this['setText'](String(RegExp['$1'])):VisuMZ[_0x21fdc3(0xc5)][_0x21fdc3(0x161)][_0x21fdc3(0x17f)](this,_0x492c5d);},Window_Selectable[_0x1e1aaa(0x175)][_0x1e1aaa(0x1d6)]=function(){const _0x2ebb1b=_0x1e1aaa;return this['constructor']===Window_ActorCommand&&BattleManager[_0x2ebb1b(0xd3)]()&&BattleManager[_0x2ebb1b(0x13f)];},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1d0)]=Window_Selectable[_0x1e1aaa(0x175)][_0x1e1aaa(0x212)],Window_Selectable[_0x1e1aaa(0x175)]['cursorRight']=function(_0x264de0){const _0x297e2c=_0x1e1aaa;this[_0x297e2c(0x1d6)]()&&this['maxCols']()===0x1?this['etbSwitchActorDirection'](!![]):VisuMZ['BattleSystemETB']['Window_Selectable_cursorRight']['call'](this,_0x264de0);},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x215)]=Window_Selectable[_0x1e1aaa(0x175)][_0x1e1aaa(0x191)],Window_Selectable[_0x1e1aaa(0x175)]['cursorLeft']=function(_0x223ee9){const _0x5d4d4f=_0x1e1aaa;this[_0x5d4d4f(0x1d6)]()&&this[_0x5d4d4f(0xd6)]()===0x1?this[_0x5d4d4f(0x1f8)](![]):VisuMZ[_0x5d4d4f(0xc5)][_0x5d4d4f(0x215)]['call'](this,_0x223ee9);},VisuMZ['BattleSystemETB'][_0x1e1aaa(0xde)]=Window_Selectable[_0x1e1aaa(0x175)][_0x1e1aaa(0x22f)],Window_Selectable[_0x1e1aaa(0x175)][_0x1e1aaa(0x22f)]=function(){const _0x57d5aa=_0x1e1aaa;this['etbFreeRangeSwitch']()?this[_0x57d5aa(0x1f8)](!![]):VisuMZ[_0x57d5aa(0xc5)]['Window_Selectable_cursorPagedown'][_0x57d5aa(0x17f)](this);},VisuMZ[_0x1e1aaa(0xc5)]['Window_Selectable_cursorPageup']=Window_Selectable[_0x1e1aaa(0x175)][_0x1e1aaa(0x162)],Window_Selectable[_0x1e1aaa(0x175)]['cursorPageup']=function(){const _0x47cf8b=_0x1e1aaa;this[_0x47cf8b(0x1d6)]()?this['etbSwitchActorDirection'](![]):VisuMZ[_0x47cf8b(0xc5)][_0x47cf8b(0x1ef)][_0x47cf8b(0x17f)](this);},Window_ActorCommand['prototype'][_0x1e1aaa(0x1f8)]=function(_0x5c5c9a){const _0x5ee3fc=_0x1e1aaa,_0x1b739f=BattleManager[_0x5ee3fc(0xe2)];let _0x821e71=$gameParty[_0x5ee3fc(0x12a)]()[_0x5ee3fc(0xd2)](_0x1b739f);const _0x5208a0=$gameParty['battleMembers']()[_0x5ee3fc(0x90)]-0x1;let _0x42def8=$gameParty[_0x5ee3fc(0x12a)]()[_0x821e71];for(;;){_0x821e71+=_0x5c5c9a?0x1:-0x1;if(_0x821e71<0x0)_0x821e71=_0x5208a0;if(_0x821e71>_0x5208a0)_0x821e71=0x0;_0x42def8=$gameParty[_0x5ee3fc(0x12a)]()[_0x821e71];if(_0x42def8&&_0x42def8[_0x5ee3fc(0x17c)]()&&!_0x42def8['isPassingTurnETB']())break;if(_0x42def8===_0x1b739f)break;}this[_0x5ee3fc(0xd5)](_0x1b739f,_0x42def8);},Window_ActorCommand[_0x1e1aaa(0x175)][_0x1e1aaa(0xd5)]=function(_0x3e229c,_0x6410f){const _0x24958e=_0x1e1aaa;if(_0x3e229c===_0x6410f)return;if(_0x3e229c[_0x24958e(0x1a3)]())_0x3e229c[_0x24958e(0x1a3)]()['stepBack']();this[_0x24958e(0x1dd)](),BattleManager[_0x24958e(0x10d)]=_0x6410f,BattleManager[_0x24958e(0xe2)]=_0x6410f,BattleManager['startActorInput'](),SceneManager[_0x24958e(0x23c)]['startActorCommandSelection']();},VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x25e)]=Window_Selectable[_0x1e1aaa(0x175)][_0x1e1aaa(0x1ad)],Window_Selectable['prototype'][_0x1e1aaa(0x1ad)]=function(){const _0x149ad4=_0x1e1aaa;BattleManager[_0x149ad4(0xd3)]()&&BattleManager[_0x149ad4(0x13f)]&&this[_0x149ad4(0x19f)]===Window_BattleStatus?this[_0x149ad4(0xb5)]():VisuMZ['BattleSystemETB'][_0x149ad4(0x25e)][_0x149ad4(0x17f)](this);},Window_BattleStatus[_0x1e1aaa(0x175)][_0x1e1aaa(0xb5)]=function(){const _0x31c582=_0x1e1aaa;this['isOpen']()&&(TouchInput[_0x31c582(0x121)]()&&this[_0x31c582(0x15a)](!![]));},Window_BattleStatus[_0x1e1aaa(0x175)][_0x1e1aaa(0x15a)]=function(_0x4b7133){const _0xfeb748=_0x1e1aaa,_0x2ad9c4=SceneManager[_0xfeb748(0x23c)][_0xfeb748(0x238)];if(!_0x2ad9c4)return;if(!_0x2ad9c4[_0xfeb748(0x220)])return;this['_doubleTouch']=![];const _0x194f85=this[_0xfeb748(0x168)](),_0x59e5e5=this[_0xfeb748(0x23e)]();if(_0x59e5e5>=0x0){const _0x397fc0=$gameParty[_0xfeb748(0x12a)]()[_0x194f85],_0x11a48e=$gameParty[_0xfeb748(0x12a)]()[_0x59e5e5];this[_0xfeb748(0x1c7)](_0x11a48e)&&(_0x59e5e5===this[_0xfeb748(0x168)]()&&(this[_0xfeb748(0x1ca)]=!![]),this[_0xfeb748(0x153)](_0x59e5e5),_0x2ad9c4['processSwitchActors'](_0x397fc0,_0x11a48e));}},Window_BattleStatus['prototype']['canActorBeSelectedETB']=function(_0x44fb3b){const _0x26b741=_0x1e1aaa;if(!_0x44fb3b)return![];if(!_0x44fb3b[_0x26b741(0x199)]())return![];if(!_0x44fb3b[_0x26b741(0x17c)]())return![];if(_0x44fb3b[_0x26b741(0xe4)]())return![];return!![];};function Window_ETB_ActionCount(){this['initialize'](...arguments);}Window_ETB_ActionCount[_0x1e1aaa(0x175)]=Object[_0x1e1aaa(0x1be)](Window_Base[_0x1e1aaa(0x175)]),Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x19f)]=Window_ETB_ActionCount,Window_ETB_ActionCount['Settings']=VisuMZ[_0x1e1aaa(0xc5)][_0x1e1aaa(0x1b8)][_0x1e1aaa(0x95)],Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x251)]=function(){const _0x8d10ce=_0x1e1aaa,_0x12319b=this[_0x8d10ce(0x1ea)]();Window_Base[_0x8d10ce(0x175)][_0x8d10ce(0x251)]['call'](this,_0x12319b),this[_0x8d10ce(0x15d)](0x0),this[_0x8d10ce(0x1f0)](),this[_0x8d10ce(0x9e)]=0x0;},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x1ea)]=function(){const _0x3d37fb=_0x1e1aaa;return new Rectangle(0x0,0x0,Graphics[_0x3d37fb(0xfe)],Graphics[_0x3d37fb(0x16b)]);},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x1f0)]=function(){const _0x1f6c7b=_0x1e1aaa;this[_0x1f6c7b(0x104)]=null,this['_currentActions']=0x0,this['_maxActions']=0x0;const _0x52af4b=Window_ETB_ActionCount['Settings'];this['_storedBitmaps']={'ActorPicture':_0x52af4b[_0x1f6c7b(0x9a)]?ImageManager['loadPicture'](_0x52af4b['ActorActionPicture']):'','EnemyPicture':_0x52af4b[_0x1f6c7b(0xcf)]?ImageManager[_0x1f6c7b(0x113)](_0x52af4b[_0x1f6c7b(0xcf)]):'','EmptyPicture':_0x52af4b['EmptyActionPicture']?ImageManager[_0x1f6c7b(0x113)](_0x52af4b[_0x1f6c7b(0x11b)]):''};},Window_ETB_ActionCount['prototype'][_0x1e1aaa(0x242)]=function(){const _0x3963a5=_0x1e1aaa;this[_0x3963a5(0xd7)]=0x0;},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0xd8)]=function(_0x7acb96){const _0x40ae70=_0x1e1aaa;this[_0x40ae70(0x104)]=_0x7acb96,this[_0x40ae70(0x1af)]();},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x1af)]=function(){const _0x1f5618=_0x1e1aaa;Window_Base[_0x1f5618(0x175)]['update']['call'](this),this['checkNeedsUpdate'](),this[_0x1f5618(0x16f)](),this[_0x1f5618(0x21f)]();},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x1a9)]=function(){const _0x28130a=_0x1e1aaa;if(!this[_0x28130a(0x104)])return;(this[_0x28130a(0x1b7)]!==this[_0x28130a(0x104)][_0x28130a(0x25c)]()||this['_maxActions']!==this['_unit'][_0x28130a(0x14a)]())&&(this['_currentActions']=this['_unit']['getCurrentActionsETB'](),this[_0x28130a(0x166)]=this[_0x28130a(0x104)][_0x28130a(0x14a)](),this['refresh']());},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x21f)]=function(){const _0x24c1e3=_0x1e1aaa;this[_0x24c1e3(0x125)]=$gameSystem[_0x24c1e3(0x101)]();},Window_ETB_ActionCount[_0x1e1aaa(0x175)]['refresh']=function(){const _0x1c7c0d=_0x1e1aaa;this['contents'][_0x1c7c0d(0x1e5)]();if(!this[_0x1c7c0d(0x104)])return;const _0xf1f44b=Window_ETB_ActionCount[_0x1c7c0d(0x1b8)];if(!_0xf1f44b)return;const _0x106be7=this['createStartingCoordinates'](),_0x227169=this['createContentsArray'](),_0x207a38=_0xf1f44b[_0x1c7c0d(0x244)]+_0xf1f44b[_0x1c7c0d(0x255)],_0x1ed088=_0xf1f44b['DrawHorz'];let _0x117e4f=_0x106be7['x'],_0x56b508=_0x106be7['y'];while(_0x227169[_0x1c7c0d(0x90)]>_0xf1f44b[_0x1c7c0d(0x186)]){_0x227169['shift']();}while(_0x227169[_0x1c7c0d(0x90)]>0x0){const _0x5c2ba6=_0x227169[_0x1c7c0d(0x1b2)]();this[_0x1c7c0d(0x1fe)](_0x5c2ba6,_0x117e4f,_0x56b508,_0x227169[_0x1c7c0d(0x90)]),_0x1ed088?_0x117e4f+=_0x207a38:_0x56b508+=_0x207a38;}},Window_ETB_ActionCount['prototype'][_0x1e1aaa(0x15e)]=function(){const _0x532de4=_0x1e1aaa,_0xa6bee5=Window_ETB_ActionCount['Settings'],_0x49beba=this[_0x532de4(0x104)]===$gameParty,_0x34904a=_0xa6bee5['ImageSize'],_0x526d51=_0x34904a*(_0xa6bee5[_0x532de4(0x186)]-0x1)+_0xa6bee5['ImageGapDistance']*(_0xa6bee5[_0x532de4(0x186)]-0x2),_0x386c5c=_0xa6bee5['DrawHorz'],_0xf8ac8a=SceneManager[_0x532de4(0x23c)]['_statusWindow'][_0x532de4(0x16b)];let _0x3761f3=0x0,_0xd9d962=0x0;const _0x35ea8d=_0xa6bee5[_0x532de4(0x126)];if(_0x35ea8d){_0xd9d962=this[_0x532de4(0xdc)]-_0xf8ac8a-_0xa6bee5[_0x532de4(0x192)]-_0x34904a,_0x3761f3=_0x49beba?this[_0x532de4(0x231)]-_0xa6bee5['ScreenBufferX']-_0x34904a:_0xa6bee5[_0x532de4(0x22e)];if(_0x386c5c&&_0x49beba)_0x3761f3-=_0x526d51;else!_0x386c5c&&(_0xd9d962-=_0x526d51);}else _0xd9d962=_0xa6bee5[_0x532de4(0x192)],_0x3761f3=_0x49beba?this[_0x532de4(0x231)]-_0xa6bee5[_0x532de4(0x22e)]-_0x34904a:_0xa6bee5[_0x532de4(0x22e)],_0x386c5c&&_0x49beba&&(_0x3761f3-=_0x526d51);return _0x3761f3+=_0x49beba?_0xa6bee5[_0x532de4(0x1c3)]:_0xa6bee5['EnemyOffsetX'],_0xd9d962+=_0x49beba?_0xa6bee5[_0x532de4(0xd4)]:_0xa6bee5['EnemyOffsetY'],new Point(Math[_0x532de4(0x214)](_0x3761f3),Math[_0x532de4(0x214)](_0xd9d962));},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x11a)]=function(){const _0x433005=_0x1e1aaa,_0x4b699a=Window_ETB_ActionCount[_0x433005(0x1b8)];let _0x487105=!![];if(_0x4b699a['DrawHorz']){if(this['_unit']===$gameParty)_0x487105=!_0x487105;}else _0x487105=!_0x4b699a[_0x433005(0x126)];let _0x1b8a1c=this[_0x433005(0x104)][_0x433005(0x25c)](),_0x33b8e2=Math[_0x433005(0x127)](0x0,this[_0x433005(0x104)][_0x433005(0x14a)]()-_0x1b8a1c);const _0xceeda7=[];while(_0x1b8a1c--){const _0x4e4df2=_0x433005(0xb1);_0xceeda7[_0x433005(0x18e)](_0x4e4df2);}while(_0x33b8e2--){const _0x8240cd=_0x433005(0x10c);_0x487105?_0xceeda7['push'](_0x8240cd):_0xceeda7[_0x433005(0xbf)](_0x8240cd);}while(_0xceeda7[_0x433005(0x90)]<0xa){const _0x40eba9='Nothing';_0x487105?_0xceeda7[_0x433005(0x18e)](_0x40eba9):_0xceeda7[_0x433005(0xbf)](_0x40eba9);}return _0xceeda7;},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x1fe)]=function(_0x2006c0,_0x2c7b99,_0x54a1ff,_0x28c8b5){const _0xa50256=_0x1e1aaa;if(_0x2006c0===_0xa50256(0x110))return;if(_0x2006c0===_0xa50256(0xb1))_0x2006c0=this[_0xa50256(0x104)]===$gameParty?_0xa50256(0x1cd):_0xa50256(0xdf);const _0x1a896c=Window_ETB_ActionCount[_0xa50256(0x1b8)];if(_0x1a896c['%1ActionPicture'[_0xa50256(0xa1)](_0x2006c0)]){const _0x2e2b2f=_0x1a896c[_0xa50256(0xb8)['format'](_0x2006c0)],_0x19660a=ImageManager[_0xa50256(0x113)](_0x2e2b2f);_0x19660a[_0xa50256(0x1ce)](this['drawPicture'][_0xa50256(0x1bc)](this,_0x19660a,_0x2c7b99,_0x54a1ff,_0x28c8b5));}else{const _0x325f67=ImageManager[_0xa50256(0x1da)[_0xa50256(0xa1)](_0x2006c0)];this[_0xa50256(0xd0)](_0x325f67,_0x2c7b99,_0x54a1ff),this[_0xa50256(0x10a)](_0x28c8b5)&&this['drawActionsRemaining'](_0x2c7b99,_0x54a1ff);}},Window_ETB_ActionCount['prototype']['drawPicture']=function(_0x54c35f,_0x27f4cf,_0x17a5ab,_0xc5f3d){const _0x3daaf9=_0x1e1aaa;if(!_0x54c35f)return;const _0x501d31=Window_ETB_ActionCount['Settings'],_0x5255ca=_0x501d31[_0x3daaf9(0x244)],_0x3c99ff=_0x5255ca/_0x54c35f[_0x3daaf9(0xfe)],_0x47e38d=_0x5255ca/_0x54c35f[_0x3daaf9(0x16b)],_0x4ce008=Math[_0x3daaf9(0x253)](_0x3c99ff,_0x47e38d,0x1),_0x365916=_0x54c35f[_0x3daaf9(0x16b)],_0x4ac1ea=_0x54c35f[_0x3daaf9(0x16b)],_0x4f27c3=Math[_0x3daaf9(0x214)](_0x365916*_0x4ce008),_0x584aa2=Math[_0x3daaf9(0x214)](_0x4ac1ea*_0x4ce008),_0x42b0e5=Math[_0x3daaf9(0x214)](_0x27f4cf+(_0x5255ca-_0x4f27c3)/0x2),_0x4b3da4=Math[_0x3daaf9(0x214)](_0x17a5ab+(_0x5255ca-_0x584aa2)/0x2);this[_0x3daaf9(0x263)][_0x3daaf9(0xfc)][_0x3daaf9(0x163)]=_0x501d31['PictureSmoothing'],this[_0x3daaf9(0x263)][_0x3daaf9(0x98)](_0x54c35f,0x0,0x0,_0x365916,_0x4ac1ea,_0x42b0e5,_0x4b3da4,_0x4f27c3,_0x584aa2),this[_0x3daaf9(0x263)][_0x3daaf9(0xfc)][_0x3daaf9(0x163)]=!![],this[_0x3daaf9(0x10a)](_0xc5f3d)&&this[_0x3daaf9(0xe0)](_0x27f4cf,_0x17a5ab);},Window_ETB_ActionCount[_0x1e1aaa(0x175)]['drawBigIcon']=function(_0x1530d0,_0x4503cd,_0x584e50){const _0x5c952e=_0x1e1aaa,_0x295fca=Window_ETB_ActionCount[_0x5c952e(0x1b8)];let _0x1f3619=_0x295fca['ImageSize'];const _0x21e6aa=ImageManager[_0x5c952e(0x1a8)](_0x5c952e(0xf4)),_0x5e9465=ImageManager[_0x5c952e(0x174)],_0x56603e=ImageManager[_0x5c952e(0x116)],_0x3a6296=_0x1530d0%0x10*_0x5e9465,_0x438475=Math[_0x5c952e(0x1d7)](_0x1530d0/0x10)*_0x56603e;this['contents'][_0x5c952e(0xfc)][_0x5c952e(0x163)]=_0x295fca['IconSmoothing'],this['contents'][_0x5c952e(0x98)](_0x21e6aa,_0x3a6296,_0x438475,_0x5e9465,_0x56603e,_0x4503cd,_0x584e50,_0x1f3619,_0x1f3619),this[_0x5c952e(0x263)][_0x5c952e(0xfc)][_0x5c952e(0x163)]=!![];},Window_ETB_ActionCount['prototype']['updatePosition']=function(){const _0x29299a=_0x1e1aaa,_0x126d64=Window_ETB_ActionCount[_0x29299a(0x1b8)];if(_0x126d64[_0x29299a(0x126)])return;if(!_0x126d64[_0x29299a(0x100)])return;const _0x5b1b4c=SceneManager[_0x29299a(0x23c)][_0x29299a(0x1a1)];if(!_0x5b1b4c)return;_0x5b1b4c[_0x29299a(0x125)]?(this['x']=_0x126d64[_0x29299a(0xab)]||0x0,this['y']=_0x126d64[_0x29299a(0xfa)]||0x0):(this['x']=0x0,this['y']=0x0);},Window_ETB_ActionCount[_0x1e1aaa(0x175)][_0x1e1aaa(0x10a)]=function(_0xef1243){const _0x255227=_0x1e1aaa,_0x4329a9=Window_ETB_ActionCount[_0x255227(0x1b8)];if(!_0x4329a9['DrawActionsRemaining'])return![];const _0x2a5b62=_0x4329a9['BottomPosition'],_0x5e3a0f=_0x4329a9['DrawHorz'],_0x34cafb=this['_unit']===$gameParty;if(_0x5e3a0f)return _0x34cafb?_0xef1243===0x0:_0xef1243===_0x4329a9[_0x255227(0x186)]-0x1;else return _0x2a5b62?_0xef1243===0x0:_0xef1243===_0x4329a9['MaxVisible']-0x1;},Window_ETB_ActionCount[_0x1e1aaa(0x175)]['drawActionsRemaining']=function(_0x11f4b4,_0x36fff7){const _0x4318da=_0x1e1aaa;this['resetFontSettings']();const _0x5ba39b=Window_ETB_ActionCount['Settings'],_0x46b3e5=new Rectangle(_0x11f4b4,_0x36fff7,_0x5ba39b[_0x4318da(0x244)],_0x5ba39b[_0x4318da(0x244)]);_0x46b3e5['x']+=_0x5ba39b[_0x4318da(0x241)],_0x46b3e5['y']+=_0x5ba39b[_0x4318da(0xf6)];const _0xf6b616=this[_0x4318da(0x104)][_0x4318da(0x25c)]();this['contents']['fontSize']=_0x5ba39b[_0x4318da(0xdd)],this[_0x4318da(0x263)][_0x4318da(0x17a)](_0xf6b616,_0x46b3e5['x'],_0x46b3e5['y'],_0x46b3e5['width'],_0x46b3e5[_0x4318da(0x16b)],_0x4318da(0x233)),this[_0x4318da(0x1fb)]();};