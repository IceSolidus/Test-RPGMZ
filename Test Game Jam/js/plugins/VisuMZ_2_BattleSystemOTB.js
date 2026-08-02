//=============================================================================
// VisuStella MZ - Battle System - OTB - Order Turn Battle
// VisuMZ_2_BattleSystemOTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemOTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemOTB = VisuMZ.BattleSystemOTB || {};
VisuMZ.BattleSystemOTB.version = 1.19;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.19] [BattleSystemOTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_OTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ battle system to "Order Turn Battle",
 * a turn-based battle system where actions are executed immediately and the
 * orders for both the current and next turn are not only visible, but also
 * malleable. New mechanics are introduced where the player can manipulate the
 * turn order of an action's user or action's target in various ways they want.
 * 
 * The two Turn Orders are displayed at the top of the top of the screen to
 * give the player a clear understanding of who's turn it will be when it
 * becomes time to act, making it easier and viable for the player to formulate
 * strategies and adapt to the situation in battle.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "otb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Utilizes the balanced AGI nature of the Default Turn Battle system.
 * * Allows for actions to execute immediately upon selection.
 * * Two Turn Order Displays appear at the top of the screen, giving the player
 *   an idea of who's turn it will be and when, for both the current turn and
 *   the next turn.
 * * Skills and Items can have an "Instant Use" effect, which allows them to
 *   perform an action immediately without using up a turn.
 * * Skills and Items can manipulate the turn order of the action's user or the
 *   action's target(s). This can apply to either the current turn or the next
 *   turn, depending on the notetags and/or action effects used.
 * * The Turn Order Display will give a preview on how turn orders will change
 *   upon specific skills and/or items being used.
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
 * Turn Order Displays
 * 
 * The Two Turn Order Displays will capture the battle's current and next turn
 * orders determined by the BattleManager. This feature does not overwrite any
 * functions, but the Turn Order Displays may or may not conflict with any
 * existing HUD elements that are already positioned on the screen. If so, you
 * can choose to offset the Turn Order Display or move it to a different part
 * of the screen through the plugin parameters.
 * 
 * ---
 * 
 * Agility
 * 
 * Agility behaves slightly different from normal when it comes to the Order
 * Turn Battle system. Aside from the first turn in battle, agility will always
 * calculate the turn order for the "Next Turn" when conducted. This means that
 * any changes to agility values will not have any effect on the next turn's
 * already established turn order.
 * 
 * However, this can be remedied by utilizing the notetags provided by this
 * plugin to alter the Next Turn orders for specific targets. In fact, for
 * skill and item "effects" that add AGI Buffs and/or Debuffs, the target's
 * turn position on the Turn Order Display will be manipulated in accordance.
 * This auto-conversion feature can be disabled in the Plugin Parameters.
 * 
 * ---
 * 
 * Action Speed
 * 
 * Because the Order Turn Battle system already calculates agility speeds
 * before selecting an action to perform, the effects of the actioon speed will
 * not work the same way it did with the default battle system. Instead, the
 * Action Speed will be sent through a formula to determine its effect on the
 * following turn, either pushing the user ahead in next turn's turn order
 * (with a positive speed value) or back (with a negative speed value).
 * 
 * This option can have its formula altered or straight up disabled in the
 * Plugin Parameters.
 * 
 * ---
 * 
 * Infinity Speed and Clamping
 * 
 * Since Action Speeds are decided in such a way, enemies that will survive a
 * stun state past two turns will have "Infinity" speed on the recovery turn,
 * allowing them to act first relative to the rest of the battle participants
 * in order to balance out the turns they've lost.
 * 
 * Enemies with "Infinity" speed cannot be overtaken through turn order
 * manipulation while they are on the "Next Turn" order. If anything, battlers
 * who shift their turn order faster will be just trailing behind them, thus
 * the "clamping" effect. However if this occurs during the "Current Turn"
 * order, all is fair game and any battler can overtake them. Plan out your
 * battle system effects carefully with these rules in mind.
 * 
 * If you do not like the idea of Infinity Speed and/or Clamping, you can turn
 * them off in the Plugin Parameters.
 * 
 * This effect does not affect stun states that last only one turn. The effect
 * will only occur with stun states that last 2 turns or more.
 * 
 * ---
 * 
 * Instant Use
 * 
 * Skills and Items can have an "Instant Use" property which allows them to be
 * used immediately without consuming a turn. This can be used for actions that
 * otherwise do not warrant a whole turn. These can be used for minor buffs,
 * debuffs, toggles, etc.
 * 
 * ---
 * 
 * Force Actions
 * 
 * Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 * system. With other battle systems, force actions are added into a hidden
 * queue that would act upon after the current battler finishes his/her current
 * action. The new changes made with force actions is that they now appear on
 * the queue visibly.
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
 * VisuMZ_2_PartySystem
 * 
 * In battle, the player cannot change entire parties at once from the Party
 * Command Window. The feature will be unaccessible while Order Turn Battle is
 * in play. However, the player can still change party members through the
 * Actor Command Window by having actors replace other actors. Party changing
 * is also available through battle events, Common Events, and script calls.
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
 * === General OTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <OTB Help>
 *  description
 *  description
 * </OTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under OTB.
 * - This is primarily used if the skill behaves differently in OTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to OTB.
 *
 * ---
 * 
 * === OTB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the OTB Turn Order Display
 * 
 * ---
 *
 * <OTB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <OTB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <OTB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Instant Use-Related Notetags ===
 * 
 * ---
 *
 * <OTB Instant>
 * <OTB Instant Use>
 * <OTB Instant Cast>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to be used immediately without consuming a turn.
 *
 * ---
 * 
 * === Added Action Notetags ===
 * 
 * ---
 * 
 * <OTB User Add Current Turn Actions: x>
 * <OTB User Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the user to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * <OTB Target Add Current Turn Actions: x>
 * <OTB Target Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the target to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * === Turn Order Manipulation-Related Notetags ===
 * 
 * ---
 *
 * <OTB User Current Turn: +x>
 * <OTB User Next Turn: +x>
 * <OTB User Follow Turn: +x>
 *
 * <OTB User Current Turn: -x>
 * <OTB User Next Turn: -x>
 * <OTB User Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the user's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the user has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the user closer to the front.
 *   - Positive numbers move the user towards the back.
 * - This effect only occurs once per skill/item use and at the start of the
 *   action when initializing the skill/item.
 *
 * ---
 *
 * <OTB Target Current Turn: +x>
 * <OTB Target Next Turn: +x>
 * <OTB Target Follow Turn: +x>
 *
 * <OTB Target Current Turn: -x>
 * <OTB Target Next Turn: -x>
 * <OTB Target Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the target's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the target has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the target closer to the front.
 *   - Positive numbers move the target towards the back.
 * - This effect will occur as many times as there are successfully connected
 *   hits for each target, meaning a target can have its turn order shifted
 *   multiple times.
 * - These are best used with single target skills/items as multi-target skills
 *   may shift multiple targets back and forth with each other if they are
 *   adjacent to one another.
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
 * Actor: Change OTB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the OTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change OTB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the OTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Actor: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change OTB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change OTB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: OTB Turn Order Visibility
 * - Determine the visibility of the OTB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the OTB Turn Order Display.
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
 * === Add Action-Related Script Calls ===
 * 
 * ---
 * 
 * $otbAddBattlerToCurrentTurnEnd(battler, times)
 * 
 * - Adds a battler to current turn's end
 * - Replace 'battler' with a battler object or target
 * - Replace 'times' with a number representing the number of actions to add
 * 
 * ---
 * 
 * $otbAddBattlerToNextTurnEnd(battler, times)
 * 
 * - Adds a battler to next turn's end
 * - Replace 'battler' with a battler object or target
 * - Replace 'times' with a number representing the number of actions to add
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Conversion Settings
 * ============================================================================
 *
 * Automatically converts specific mechanics to fit OTB.
 *
 * ---
 *
 * Buffs
 * 
 *   AGI Buff => Current:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Buff => Next:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * Debuffs
 * 
 *   AGI Debuff => Current:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Debuff => Next:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of Battle System OTB. These range from how Action
 * Times are handled to speed.
 *
 * ---
 *
 * Action Times+
 * 
 *   Enable Action Times?:
 *   - Enable Action Times+ to have an effect on OTB?
 * 
 *     Randomize Order?:
 *     - If enabled, randomize the action order for added actions?
 *
 * ---
 *
 * Speed
 * 
 *   Allow Random Speed?:
 *   - Allow speed to be randomized base off the user's AGI?
 * 
 *   Post-Stun Infinity?:
 *   - After a 2+ turn stun states, battlers have infinity speed for their
 *     recovery turn.
 *   - Once again, this only applies to stun states that last 2+ turns.
 * 
 *     Infinity Clamp?:
 *     - Prevents turn order manipulation from going faster than infinity
 *       speed battlers.
 * 
 *   JS: Initial Speed:
 *   - Code used to calculate initial speed at the start of battle.
 * 
 *   JS: Speed => Order:
 *   - Code used to calculate how action speeds alter next turn's order.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Display
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System OTB. These adjust how the
 * two visible turn orders appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 *     - Top
 *     - Bottom
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *     Offset X:
 *     - Reposition the display's X coordinates by this much when the Help
 *       Window is visible.
 * 
 *     Offset Y:
 *     - Reposition the display's Y coordinates by this much when the Help
 *       Window is visible.
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *     - Left to Right
 *     - Right to Left
 * 
 *   Subject Distance:
 *   - How far do you want the currently active battler to distance itself from
 *     the rest of the Turn Order?
 * 
 *   Screen Buffer:
 *   - What distance do you want the display to be away from the edge of the
 *     screen by?
 * 
 * ---
 * 
 * UI Background
 * 
 *   Background Style:
 *   - Select the style you want for the background.
 *     - fill
 *     - gradient
 *     - image
 *     - transparent
 * 
 *   Image Filename:
 *   - When using the "image" style, select an image from /img/system/ as the
 *     background image.
 * 
 *     Offset X:
 *     - How much do you want to offset the Background Image's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Background Image's Y position?
 * 
 * ---
 * 
 * UI Text
 * 
 *   Font Size:
 *   - The font size used for parameter values.
 * 
 *   Active Battler Text:
 *   - Text used to display the active battler.
 *   - This text will always be center aligned.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Current Turn Text:
 *   - Text used to display the current turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Next Turn Text:
 *   - Text used to display the next turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Text Align:
 *   - Text alignment for the Current and Next Turn texts?
 *     - auto
 *     - left
 *     - center
 *     - right
 * 
 * ---
 * 
 * Slots
 * 
 *   Width:
 *   - How many pixels wide should the slots be on the Turn Order display?
 * 
 *   Height:
 *   - How many pixels tall should the slots be on the Turn Order display?
 * 
 *   Preview Scale:
 *   - How much do you want to scale the preview sprites by?
 *   - Use a number between 0 and 1 for the best results.
 * 
 *     Offset X:
 *     - How much do you want to offset the Preview Sprites' X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Preview Sprites' Y position?
 * 
 *   Update Frames:
 *   - How many frames should it take for the slots to update their
 *     positions by?
 *
 * ---
 *
 * Slot Border
 * 
 *   Show Border?:
 *   - Show borders for the slot sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 * ---
 * 
 * Slot Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Slot Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the slot sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Slot Background
 * 
 *   Show Background?:
 *   - Show the background on the slot sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
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
 * Version 1.19: November 13, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New script calls added by Olivia:
 * *** $otbAddBattlerToCurrentTurnEnd(battler, times)
 * *** $otbAddBattlerToNextTurnEnd(battler, times)
 * **** Adds actions for target battler to the end of current/next turn.
 * 
 * Version 1.18: May 15, 2025
 * * Bug Fixes!
 * ** Fixed a bug where adding states with Action Times+ would add too many
 *    actions. Fix made by Olivia.
 * 
 * Version 1.17: November 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the <OTB Target Follow Turn: +x> and similar notetags
 *    altered the following turn regardless of the presence of the target in 
 *    current turn order. Fix made by Olivia.
 * 
 * Version 1.16: September 19, 2024
 * * Compatibility Update!
 * ** Added better compatibility with Auto Skill Triggers. Update by Arisu.
 * 
 * Version 1.15: May 16, 2024
 * * Feature Update!
 * ** Direct removal of stun states will restore actions for battlers for
 *    current turns and follow up turns. Update made by Olivia.
 * 
 * Version 1.14: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused turn order glitches with Action Times+ that
 *    aren't at 100% value. Fix made by Olivia.
 * ** Fixed a bug that caused added Action Times+ to not trigger on actors that
 *    have already exhausted their current turns if raised due to a state.
 *    Fix made by Olivia.
 * 
 * Version 1.13: January 20, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the Forced Action of a battler is not used properly.
 *    Fix made by Arisu.
 * 
 * Version 1.12: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the OTB Turn Order faces and icons to not change
 *    properly for actors and enemies.
 * 
 * Version 1.10: July 7, 2022
 * * Feature Update!
 * ** When the "Recover All" event command revives a dead unit, that revived
 *    unit can gain actions back if all other conditions are met. Update made
 *    by Olivia.
 * 
 * Version 1.09: June 2, 2022
 * * Documentation Update!
 * ** Added "Force Actions" to "Major Updates" section.
 * *** Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 *     system. With other battle systems, force actions are added into a hidden
 *     queue that would act upon after the current battler finishes his/her
 *     current action. The new changes made with force actions is that they now
 *     appear on the queue visibly.
 * * Bug Fixes!
 * ** Fixed a bug that caused Forced Actions to not work properly while in OTB.
 *    Changes made to Forced Actions will now insert new actions at the front
 *    of the current action queue. Fix made by Olivia.
 * 
 * Version 1.08: March 10, 2022
 * * Feature Update!
 * ** OTB Instant Actions should now appear in the turn order in a more
 *    sensible fashion. Update made by Olivia.
 * 
 * Version 1.07: February 24, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia:
 * *** <OTB User Add Current Turn Actions: x>
 * *** <OTB User Add Next Turn Actions: x>
 * *** <OTB Target Add Current Turn Actions: x>
 * *** <OTB Target Add Next Turn Actions: x>
 * **** Adds extra actions for the user/target to perform during the
 *      current/next turn.
 * **** Added actions will go towards the back of the action list.
 * **** Multi-hit skills/items will trigger this effect multiple times.
 * 
 * Version 1.05: October 28, 2021
 * * Bug Fixes!
 * ** Turn Order display will no longer appear at differing X and Y positions
 *    when using specific battle layouts. Update made by Olivia.
 * 
 * Version 1.04: August 6, 2021
 * * Bug Fixes!
 * ** Enemies with multiple actions will no longer step forward when it's not
 *    their turn. Fix made by Olivia.
 * 
 * Version 1.03: June 25, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: April 16, 2021
 * * Bug Fixes!
 * ** Post-stun infinity clamping should now be adjusted properly for
 *    previewing turn order changes.
 * 
 * Version 1.01: April 9, 2021
 * * Bug Fixes!
 * ** Subsequent battles will properly reset the turn order. Fix by Olivia.
 * 
 * Version 1.00 Official Release Date: April 26, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderActorIcon
 * @text Actor: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the OTB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderActorFace
 * @text Actor: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the OTB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderClearActorGraphic
 * @text Actor: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderEnemyIcon
 * @text Enemy: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderEnemyFace
 * @text Enemy: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemTurnOrderVisibility
 * @text System: OTB Turn Order Visibility
 * @desc Determine the visibility of the OTB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the OTB Turn Order Display.
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
 * @param BattleSystemOTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Conversion:struct
 * @text Conversion Settings
 * @type struct<Conversion>
 * @desc Automatically converts specific mechanics to fit OTB.
 * @default {"Buffs":"","ConvertAgiBuffCurrent:eval":"true","ConvertAgiBuffNext:eval":"true","Debuffs":"","ConvertAgiDebuffCurrent:eval":"true","ConvertAgiDebuffNext:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of Battle System OTB.
 * @default {"Actions":"","EnableActionTimes:eval":"true","RandomizeActionTimesOrder:eval":"true","Speed":"","AllowRandomSpeed:eval":"false","PostStunInfinitySpeed:eval":"true","InfinityClamp:eval":"true","InitialSpeedJS:func":"\"// Declare Constants\\nconst agi = this.subject().agi;\\n\\n// Create Speed\\nlet speed = agi;\\nif (this.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Return Speed\\nreturn speed;\"","ConvertSpeedJS:func":"\"// Declare Constants\\nconst item = this.item();\\nconst modifier = 50;\\n\\n// Calculate Order Slots Changed\\nlet change = item.speed / (-modifier);\\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\\n\\n// Return Change\\nreturn change || 0;\""}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System OTB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","RepositionTopHelpX:num":"+0","RepositionTopHelpY:num":"+96","RepositionLogWindow:eval":"true","LogWindowOffsetY:num":"+0","OrderDirection:eval":"false","SubjectDistance:num":"16","ScreenBuffer:num":"36","UiBackground":"","BgDimStyle:str":"gradient","BgImageFilename:str":"","BgImageOffsetX:num":"+0","BgImageOffsetY:num":"+0","UiText":"","UiFontSize:num":"16","UiSubjectText:str":"★","UiSubjectOffsetX:num":"+0","UiSubjectOffsetY:num":"-6","UiCurrentText:str":"✦CURRENT TURN✦","UiCurrentOffsetX:num":"+6","UiCurrentOffsetY:num":"-6","UiNextText:str":"✧NEXT TURN✧","UiNextOffsetX:num":"+6","UiNextOffsetY:num":"-6","UiAlignment:str":"auto","Slots":"","SpriteThin:num":"72","SpriteLength:num":"72","PreviewScale:num":"0.5","PreviewOffsetX:num":"+0","PreviewOffsetY:num":"+0","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","PreviewActorBorderColor:str":"0","ActorSystemBorder:str":"","PreviewActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","PreviewEnemyBorderColor:str":"0","EnemySystemBorder:str":"","PreviewEnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","PreviewActorBgColor1:str":"19","ActorBgColor2:str":"9","PreviewActorBgColor2:str":"0","ActorSystemBg:str":"","PreviewActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","PreviewEnemyBgColor1:str":"19","EnemyBgColor2:str":"18","PreviewEnemyBgColor2:str":"0","EnemySystemBg:str":"","PreviewEnemySystemBg:str":""}
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
 * Conversion Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Conversion:
 * 
 * @param Buffs
 *
 * @param ConvertAgiBuffCurrent:eval
 * @text AGI Buff => Current
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiBuffNext:eval
 * @text AGI Buff => Next
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 * 
 * @param Debuffs
 *
 * @param ConvertAgiDebuffCurrent:eval
 * @text AGI Debuff => Current
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiDebuffNext:eval
 * @text AGI Debuff => Next
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Actions
 * @text Action Times+
 *
 * @param EnableActionTimes:eval
 * @text Enable Action Times?
 * @parent Actions
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Action Times+ to have an effect on OTB?
 * @default true
 *
 * @param RandomizeActionTimesOrder:eval
 * @text Randomize Order?
 * @parent EnableActionTimes:eval
 * @type boolean
 * @on Randomize
 * @off Clumped
 * @desc If enabled, randomize the action order for added actions?
 * @default true
 * 
 * @param Speed
 *
 * @param AllowRandomSpeed:eval
 * @text Allow Random Speed?
 * @parent Speed
 * @type boolean
 * @on Allow
 * @off Disable
 * @desc Allow speed to be randomized base off the user's AGI?
 * @default false
 *
 * @param PostStunInfinitySpeed:eval
 * @text Post-Stun Infinity?
 * @parent Speed
 * @type boolean
 * @on Infinity
 * @off Normal
 * @desc After a 2+ turn stun states, battlers have infinity speed for their recovery turn.
 * @default true
 *
 * @param InfinityClamp:eval
 * @text Infinity Clamp?
 * @parent PostStunInfinitySpeed:eval
 * @type boolean
 * @on Enable Clamp
 * @off Disable Clamp
 * @desc Prevents turn order manipulation from going faster than infinity speed battlers.
 * @default true
 *
 * @param InitialSpeedJS:func
 * @text JS: Initial Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst agi = this.subject().agi;\n\n// Create Speed\nlet speed = agi;\nif (this.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Return Speed\nreturn speed;"
 *
 * @param ConvertSpeedJS:func
 * @text JS: Speed => Order
 * @parent Speed
 * @type note
 * @desc Code used to calculate how action speeds alter next turn's order.
 * @default "// Declare Constants\nconst item = this.item();\nconst modifier = 50;\n\n// Calculate Order Slots Changed\nlet change = item.speed / (-modifier);\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\n\n// Return Change\nreturn change || 0;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Turn Order Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TurnOrder:
 *
 * @param General
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @desc Select where the Turn Order will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * display when the help window is open?
 * @default true
 *
 * @param RepositionTopHelpX:num
 * @text Offset X
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default +0
 *
 * @param RepositionTopHelpY:num
 * @text Offset Y
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default +96
 *
 * @param RepositionLogWindow:eval
 * @text Reposition Log?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * Battle Log Window to be lower?
 * @default true
 *
 * @param LogWindowOffsetY:num
 * @text Offset Y
 * @parent RepositionLogWindow:eval
 * @desc How much do you want to offset the Log Window's Y position?
 * @default +0
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right
 * @off Right to Left
 * @desc Decide on the direction of the Turn Order.
 * @default false
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 16
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 36
 *
 * @param UiBackground
 * @text UI Background
 *
 * @param BgDimStyle:str
 * @text Background Style
 * @parent UiBackground
 * @type select
 * @option fill
 * @option gradient
 * @option image
 * @option transparent
 * @desc Select the style you want for the background.
 * @default gradient
 *
 * @param BgImageFilename:str
 * @text Image Filename
 * @parent UiBackground
 * @type file
 * @dir img/system/
 * @desc When using the "image" style, select an image from /img/system/ as the background image.
 * @default 
 *
 * @param BgImageOffsetX:num
 * @text Offset X
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's X position?
 * @default +0
 *
 * @param BgImageOffsetY:num
 * @text Offset Y
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's Y position?
 * @default +0
 *
 * @param UiText
 * @text UI Text
 *
 * @param UiFontSize:num
 * @text Font Size
 * @parent UiText
 * @desc The font size used for parameter values.
 * @default 16
 *
 * @param UiSubjectText:str
 * @text Active Battler Text
 * @parent UiText
 * @desc Text used to display the active battler.
 * This text will always be center aligned.
 * @default ★
 *
 * @param UiSubjectOffsetX:num
 * @text Offset X
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's X position?
 * @default +0
 *
 * @param UiSubjectOffsetY:num
 * @text Offset Y
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiCurrentText:str
 * @text Current Turn Text
 * @parent UiText
 * @desc Text used to display the current turn.
 * @default ✦CURRENT TURN✦
 *
 * @param UiCurrentOffsetX:num
 * @text Offset X
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiCurrentOffsetY:num
 * @text Offset Y
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiNextText:str
 * @text Next Turn Text
 * @parent UiText
 * @desc Text used to display the next turn.
 * @default ✧NEXT TURN✧
 *
 * @param UiNextOffsetX:num
 * @text Offset X
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiNextOffsetY:num
 * @text Offset Y
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiAlignment:str
 * @text Text Align
 * @parent UiText
 * @type combo
 * @option auto
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Current and Next Turn texts?
 * @default auto
 * 
 * @param Slots
 *
 * @param SpriteThin:num
 * @text Width
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels wide should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteLength:num
 * @text Height
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels tall should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param PreviewScale:num
 * @text Preview Scale
 * @parent Slots
 * @desc How much do you want to scale the preview sprites by?
 * Use a number between 0 and 1 for the best results.
 * @default 0.5
 *
 * @param PreviewOffsetX:num
 * @text Offset X
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' X position?
 * @default +0
 *
 * @param PreviewOffsetY:num
 * @text Offset Y
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' Y position?
 * @default +0
 *
 * @param UpdateFrames:num
 * @text Update Frames
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many frames should it take for the slots to
 * update their positions by?
 * @default 24
 *
 * @param Border
 * @text Slot Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the slot sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param PreviewActorBorderColor:str
 * @text Preview Version
 * @parent ActorBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBorder:str
 * @text Preview Version
 * @parent ActorSystemBorder:str
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param PreviewEnemyBorderColor:str
 * @text Preview Version
 * @parent EnemyBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBorder:str
 * @text Preview Version
 * @parent EnemySystemBorder:str
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Slot Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Slot Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the slot sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Slot Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the slot sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PreviewActorBgColor1:str
 * @text Preview Version
 * @parent ActorBgColor1:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param PreviewActorBgColor2:str
 * @text Preview Version
 * @parent ActorBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBg:str
 * @text Preview Version
 * @parent ActorSystemBg:str
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PreviewEnemyBgColor1:str
 * @text Preview Version
 * @parent EnemyBgColor1:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param PreviewEnemyBgColor2:str
 * @text Preview Version
 * @parent EnemyBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBg:str
 * @text Preview Version
 * @parent EnemySystemBg:str
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 */
//=============================================================================

const _0x105b2f=_0xb525;(function(_0x37300e,_0xf95cfb){const _0x4819ab=_0xb525,_0x24e98d=_0x37300e();while(!![]){try{const _0x2c5dc5=-parseInt(_0x4819ab(0x1b9))/0x1+parseInt(_0x4819ab(0x150))/0x2*(parseInt(_0x4819ab(0x149))/0x3)+-parseInt(_0x4819ab(0x242))/0x4+parseInt(_0x4819ab(0x8a))/0x5*(parseInt(_0x4819ab(0xa0))/0x6)+-parseInt(_0x4819ab(0x1d1))/0x7*(-parseInt(_0x4819ab(0x1db))/0x8)+-parseInt(_0x4819ab(0x8c))/0x9+parseInt(_0x4819ab(0x22f))/0xa*(parseInt(_0x4819ab(0x18e))/0xb);if(_0x2c5dc5===_0xf95cfb)break;else _0x24e98d['push'](_0x24e98d['shift']());}catch(_0x3cbfe7){_0x24e98d['push'](_0x24e98d['shift']());}}}(_0x5b1b,0xb257b));function _0xb525(_0x490bd1,_0x4c7434){const _0x5b1b55=_0x5b1b();return _0xb525=function(_0xb52576,_0x3a7e71){_0xb52576=_0xb52576-0x7a;let _0xb73eae=_0x5b1b55[_0xb52576];return _0xb73eae;},_0xb525(_0x490bd1,_0x4c7434);}var label=_0x105b2f(0x1ca),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine',_0x105b2f(0x290)],pluginData=$plugins[_0x105b2f(0x84)](function(_0x2ed3bc){const _0x150569=_0x105b2f;return _0x2ed3bc[_0x150569(0x81)]&&_0x2ed3bc['description'][_0x150569(0x1de)]('['+label+']');})[0x0];VisuMZ[label][_0x105b2f(0x220)]=VisuMZ[label][_0x105b2f(0x220)]||{},VisuMZ[_0x105b2f(0x21c)]=function(_0x944886,_0x43062c){const _0x2f3c8c=_0x105b2f;for(const _0x2bfa19 in _0x43062c){if(_0x2bfa19[_0x2f3c8c(0x1e7)](/(.*):(.*)/i)){const _0x239eac=String(RegExp['$1']),_0x417fee=String(RegExp['$2'])['toUpperCase']()[_0x2f3c8c(0x23e)]();let _0x36f263,_0x32ecaa,_0x15c063;switch(_0x417fee){case _0x2f3c8c(0x1af):_0x36f263=_0x43062c[_0x2bfa19]!==''?Number(_0x43062c[_0x2bfa19]):0x0;break;case'ARRAYNUM':_0x32ecaa=_0x43062c[_0x2bfa19]!==''?JSON[_0x2f3c8c(0x1e4)](_0x43062c[_0x2bfa19]):[],_0x36f263=_0x32ecaa[_0x2f3c8c(0x20b)](_0x512f9e=>Number(_0x512f9e));break;case _0x2f3c8c(0x24b):_0x36f263=_0x43062c[_0x2bfa19]!==''?eval(_0x43062c[_0x2bfa19]):null;break;case _0x2f3c8c(0x179):_0x32ecaa=_0x43062c[_0x2bfa19]!==''?JSON[_0x2f3c8c(0x1e4)](_0x43062c[_0x2bfa19]):[],_0x36f263=_0x32ecaa[_0x2f3c8c(0x20b)](_0x152722=>eval(_0x152722));break;case'JSON':_0x36f263=_0x43062c[_0x2bfa19]!==''?JSON[_0x2f3c8c(0x1e4)](_0x43062c[_0x2bfa19]):'';break;case'ARRAYJSON':_0x32ecaa=_0x43062c[_0x2bfa19]!==''?JSON['parse'](_0x43062c[_0x2bfa19]):[],_0x36f263=_0x32ecaa[_0x2f3c8c(0x20b)](_0x469de1=>JSON[_0x2f3c8c(0x1e4)](_0x469de1));break;case _0x2f3c8c(0x24c):_0x36f263=_0x43062c[_0x2bfa19]!==''?new Function(JSON['parse'](_0x43062c[_0x2bfa19])):new Function('return\x200');break;case'ARRAYFUNC':_0x32ecaa=_0x43062c[_0x2bfa19]!==''?JSON[_0x2f3c8c(0x1e4)](_0x43062c[_0x2bfa19]):[],_0x36f263=_0x32ecaa[_0x2f3c8c(0x20b)](_0x34f3fc=>new Function(JSON[_0x2f3c8c(0x1e4)](_0x34f3fc)));break;case _0x2f3c8c(0x253):_0x36f263=_0x43062c[_0x2bfa19]!==''?String(_0x43062c[_0x2bfa19]):'';break;case _0x2f3c8c(0x1d9):_0x32ecaa=_0x43062c[_0x2bfa19]!==''?JSON['parse'](_0x43062c[_0x2bfa19]):[],_0x36f263=_0x32ecaa[_0x2f3c8c(0x20b)](_0x505518=>String(_0x505518));break;case _0x2f3c8c(0x230):_0x15c063=_0x43062c[_0x2bfa19]!==''?JSON[_0x2f3c8c(0x1e4)](_0x43062c[_0x2bfa19]):{},_0x36f263=VisuMZ['ConvertParams']({},_0x15c063);break;case'ARRAYSTRUCT':_0x32ecaa=_0x43062c[_0x2bfa19]!==''?JSON['parse'](_0x43062c[_0x2bfa19]):[],_0x36f263=_0x32ecaa['map'](_0x458f48=>VisuMZ[_0x2f3c8c(0x21c)]({},JSON[_0x2f3c8c(0x1e4)](_0x458f48)));break;default:continue;}_0x944886[_0x239eac]=_0x36f263;}}return _0x944886;},(_0x161b09=>{const _0x1c36df=_0x105b2f,_0x43b192=_0x161b09[_0x1c36df(0x27f)];for(const _0xd16b17 of dependencies){if(!Imported[_0xd16b17]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x1c36df(0x16d)](_0x43b192,_0xd16b17)),SceneManager[_0x1c36df(0x24e)]();break;}}const _0x44a330=_0x161b09[_0x1c36df(0x114)];if(_0x44a330['match'](/\[Version[ ](.*?)\]/i)){const _0x14d3c4=Number(RegExp['$1']);_0x14d3c4!==VisuMZ[label][_0x1c36df(0x168)]&&(alert(_0x1c36df(0x2af)[_0x1c36df(0x16d)](_0x43b192,_0x14d3c4)),SceneManager['exit']());}if(_0x44a330[_0x1c36df(0x1e7)](/\[Tier[ ](\d+)\]/i)){const _0x50c0b1=Number(RegExp['$1']);_0x50c0b1<tier?(alert(_0x1c36df(0x118)[_0x1c36df(0x16d)](_0x43b192,_0x50c0b1,tier)),SceneManager[_0x1c36df(0x24e)]()):tier=Math[_0x1c36df(0x255)](_0x50c0b1,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x1c36df(0x220)],_0x161b09[_0x1c36df(0x1a1)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x105b2f(0x27f)],_0x105b2f(0x226),_0x217a6d=>{const _0x231580=_0x105b2f;VisuMZ[_0x231580(0x21c)](_0x217a6d,_0x217a6d);const _0x302f20=_0x217a6d[_0x231580(0x15c)],_0x346981=_0x217a6d[_0x231580(0x10b)];for(const _0x340318 of _0x302f20){const _0x742a90=$gameActors[_0x231580(0x7f)](_0x340318);if(!_0x742a90)continue;_0x742a90[_0x231580(0x119)]=_0x231580(0x18d),_0x742a90[_0x231580(0x231)]=_0x346981;}}),PluginManager[_0x105b2f(0x279)](pluginData[_0x105b2f(0x27f)],'OtbTurnOrderActorFace',_0x4a036c=>{const _0xeed30a=_0x105b2f;VisuMZ[_0xeed30a(0x21c)](_0x4a036c,_0x4a036c);const _0x370846=_0x4a036c[_0xeed30a(0x15c)],_0x3d624d=_0x4a036c[_0xeed30a(0x1a6)],_0x4a76dc=_0x4a036c[_0xeed30a(0x115)];for(const _0x15f12f of _0x370846){const _0x45a4b5=$gameActors[_0xeed30a(0x7f)](_0x15f12f);if(!_0x45a4b5)continue;_0x45a4b5[_0xeed30a(0x119)]='face',_0x45a4b5[_0xeed30a(0x275)]=_0x3d624d,_0x45a4b5[_0xeed30a(0x233)]=_0x4a76dc;}}),PluginManager[_0x105b2f(0x279)](pluginData[_0x105b2f(0x27f)],'OtbTurnOrderClearActorGraphic',_0x3fd773=>{const _0x317c33=_0x105b2f;VisuMZ[_0x317c33(0x21c)](_0x3fd773,_0x3fd773);const _0x1b820c=_0x3fd773[_0x317c33(0x15c)];for(const _0x386f13 of _0x1b820c){const _0x2fa949=$gameActors[_0x317c33(0x7f)](_0x386f13);if(!_0x2fa949)continue;_0x2fa949[_0x317c33(0x12e)]();}}),PluginManager['registerCommand'](pluginData[_0x105b2f(0x27f)],_0x105b2f(0xc3),_0x2b70a2=>{const _0x4d7d3b=_0x105b2f;VisuMZ[_0x4d7d3b(0x21c)](_0x2b70a2,_0x2b70a2);const _0xf882bc=_0x2b70a2[_0x4d7d3b(0x29d)],_0x47ebd8=_0x2b70a2['IconIndex'];for(const _0x384610 of _0xf882bc){const _0x179260=$gameTroop[_0x4d7d3b(0x14c)]()[_0x384610];if(!_0x179260)continue;_0x179260[_0x4d7d3b(0x119)]=_0x4d7d3b(0x18d),_0x179260['_otbTurnOrderIconIndex']=_0x47ebd8;}}),PluginManager[_0x105b2f(0x279)](pluginData[_0x105b2f(0x27f)],_0x105b2f(0xe9),_0x1a08a8=>{const _0x4fe88d=_0x105b2f;VisuMZ[_0x4fe88d(0x21c)](_0x1a08a8,_0x1a08a8);const _0xf364eb=_0x1a08a8[_0x4fe88d(0x29d)],_0x3b1967=_0x1a08a8[_0x4fe88d(0x1a6)],_0x4c3dc6=_0x1a08a8['FaceIndex'];for(const _0x3a1133 of _0xf364eb){const _0x13fd57=$gameTroop['members']()[_0x3a1133];if(!_0x13fd57)continue;_0x13fd57[_0x4fe88d(0x119)]='face',_0x13fd57[_0x4fe88d(0x275)]=_0x3b1967,_0x13fd57['_otbTurnOrderFaceIndex']=_0x4c3dc6;}}),PluginManager['registerCommand'](pluginData[_0x105b2f(0x27f)],_0x105b2f(0xcd),_0x3a5007=>{const _0x3eb4d3=_0x105b2f;VisuMZ[_0x3eb4d3(0x21c)](_0x3a5007,_0x3a5007);const _0x34b095=_0x3a5007['Enemies'];for(const _0x1e7036 of _0x34b095){const _0x24328f=$gameTroop['members']()[_0x1e7036];if(!_0x24328f)continue;_0x24328f[_0x3eb4d3(0x12e)]();}}),PluginManager[_0x105b2f(0x279)](pluginData[_0x105b2f(0x27f)],_0x105b2f(0x2a3),_0x51cc12=>{const _0x105f50=_0x105b2f;VisuMZ[_0x105f50(0x21c)](_0x51cc12,_0x51cc12);const _0x12c8fb=_0x51cc12[_0x105f50(0x2aa)];$gameSystem[_0x105f50(0x20f)](_0x12c8fb);}),VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x28e)]={'Instant':/<OTB (?:INSTANT|INSTANT CAST|INSTANT USE)>/i,'UserFollOrder':/<OTB USER FOLLOW TURN: ([\+\-]\d+)>/i,'UserCurrOrder':/<OTB USER CURRENT TURN: ([\+\-]\d+)>/i,'UserNextOrder':/<OTB USER NEXT TURN: ([\+\-]\d+)>/i,'TargetFollOrder':/<OTB TARGET FOLLOW TURN: ([\+\-]\d+)>/i,'TargetCurrOrder':/<OTB TARGET CURRENT TURN: ([\+\-]\d+)>/i,'TargetNextOrder':/<OTB TARGET NEXT TURN: ([\+\-]\d+)>/i,'UserAddActionCurrent':/<OTB USER ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,'UserAddActionNext':/<OTB USER ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i,'TargetAddActionCurrent':/<OTB TARGET ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,'TargetAddActionNext':/<OTB TARGET ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i},DataManager[_0x105b2f(0x298)]=function(_0xa39aaf){const _0x2ce2dc=_0x105b2f;_0xa39aaf=_0xa39aaf[_0x2ce2dc(0xa8)]()[_0x2ce2dc(0x23e)](),this['_stateIDs']=this['_stateIDs']||{};if(this[_0x2ce2dc(0x21b)][_0xa39aaf])return this[_0x2ce2dc(0x21b)][_0xa39aaf];for(const _0x24023d of $dataStates){if(!_0x24023d)continue;this[_0x2ce2dc(0x21b)][_0x24023d[_0x2ce2dc(0x27f)][_0x2ce2dc(0xa8)]()[_0x2ce2dc(0x23e)]()]=_0x24023d['id'];}return this[_0x2ce2dc(0x21b)][_0xa39aaf]||0x0;},ImageManager[_0x105b2f(0x1bc)]=ImageManager['svActorHorzCells']||0x9,ImageManager['svActorVertCells']=ImageManager[_0x105b2f(0x153)]||0x6,SceneManager['isSceneBattle']=function(){const _0x2aa6d1=_0x105b2f;return this[_0x2aa6d1(0xb2)]&&this[_0x2aa6d1(0xb2)][_0x2aa6d1(0x132)]===Scene_Battle;},VisuMZ['BattleSystemOTB'][_0x105b2f(0x145)]=BattleManager[_0x105b2f(0x17c)],BattleManager[_0x105b2f(0x17c)]=function(_0x557e5b,_0x1cc5c4,_0x475949){const _0x4fe876=_0x105b2f;VisuMZ[_0x4fe876(0x1ca)][_0x4fe876(0x145)][_0x4fe876(0x1a5)](this,_0x557e5b,_0x1cc5c4,_0x475949),this[_0x4fe876(0x1c9)]();},BattleManager['initMembersOTB']=function(){const _0x4659e8=_0x105b2f;if(!this[_0x4659e8(0x185)]())return;this['_otb_actionBattlersNext']=[],this[_0x4659e8(0x1bb)]=![];},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x10a)]=BattleManager['battleSys'],BattleManager[_0x105b2f(0xc5)]=function(){const _0x38dfd7=_0x105b2f;if(this[_0x38dfd7(0x185)]())return _0x38dfd7(0x293);return VisuMZ['BattleSystemOTB'][_0x38dfd7(0x10a)]['call'](this);},BattleManager['isOTB']=function(){const _0x4414c5=_0x105b2f;return $gameSystem[_0x4414c5(0x137)]()==='OTB';},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0xfd)]=BattleManager[_0x105b2f(0x13c)],BattleManager[_0x105b2f(0x13c)]=function(){const _0x318fc1=_0x105b2f;if(this[_0x318fc1(0x185)]())return![];return VisuMZ[_0x318fc1(0x1ca)][_0x318fc1(0xfd)][_0x318fc1(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)]['BattleManager_isActiveTpb']=BattleManager[_0x105b2f(0x21f)],BattleManager['isActiveTpb']=function(){const _0x4df995=_0x105b2f;if(this['isOTB']())return![];return VisuMZ[_0x4df995(0x1ca)]['BattleManager_isActiveTpb'][_0x4df995(0x1a5)](this);},VisuMZ['BattleSystemOTB']['BattleManager_isTurnBased']=BattleManager['isTurnBased'],BattleManager[_0x105b2f(0x9e)]=function(){const _0x37184b=_0x105b2f;if(this[_0x37184b(0x185)]())return!![];return VisuMZ['BattleSystemOTB'][_0x37184b(0x171)][_0x37184b(0x1a5)](this);},VisuMZ['BattleSystemOTB']['BattleManager_startInput']=BattleManager[_0x105b2f(0x116)],BattleManager['startInput']=function(){const _0x38286f=_0x105b2f;VisuMZ['BattleSystemOTB'][_0x38286f(0x258)][_0x38286f(0x1a5)](this),this['isOTB']()&&$gameParty[_0x38286f(0xd8)]()&&!this[_0x38286f(0x8b)]&&this['startInputOTB']();},BattleManager[_0x105b2f(0x1f0)]=function(){this['startTurn']();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x218)]=BattleManager[_0x105b2f(0x1fa)],BattleManager[_0x105b2f(0x1fa)]=function(){const _0x55b8bf=_0x105b2f;this[_0x55b8bf(0x185)]()?this[_0x55b8bf(0x176)]():VisuMZ[_0x55b8bf(0x1ca)][_0x55b8bf(0x218)]['call'](this);},BattleManager[_0x105b2f(0x176)]=function(){const _0x382a96=_0x105b2f,_0x4bb22f=this['_subject'];if(_0x4bb22f[_0x382a96(0x240)]()&&_0x4bb22f[_0x382a96(0xd8)]()){const _0x49fbfd=_0x4bb22f[_0x382a96(0x140)]();if(!_0x49fbfd)VisuMZ[_0x382a96(0x1ca)][_0x382a96(0x218)][_0x382a96(0x1a5)](this);else _0x49fbfd[_0x382a96(0x214)]?VisuMZ[_0x382a96(0x1ca)][_0x382a96(0x218)][_0x382a96(0x1a5)](this):(this['_currentActor']=_0x4bb22f,this[_0x382a96(0xdc)]());}else VisuMZ[_0x382a96(0x1ca)]['BattleManager_processTurn']['call'](this);},VisuMZ[_0x105b2f(0x1ca)]['BattleManager_finishActorInput']=BattleManager['finishActorInput'],BattleManager[_0x105b2f(0x1c6)]=function(){const _0x2d18aa=_0x105b2f;this[_0x2d18aa(0x185)]()?VisuMZ[_0x2d18aa(0x1ca)][_0x2d18aa(0x218)][_0x2d18aa(0x1a5)](this):VisuMZ[_0x2d18aa(0x1ca)][_0x2d18aa(0xea)]['call'](this);},VisuMZ['BattleSystemOTB'][_0x105b2f(0x2a0)]=BattleManager[_0x105b2f(0x123)],BattleManager[_0x105b2f(0x123)]=function(){const _0x50b53f=_0x105b2f;this[_0x50b53f(0x185)]()?this[_0x50b53f(0x103)]():VisuMZ[_0x50b53f(0x1ca)][_0x50b53f(0x2a0)][_0x50b53f(0x1a5)](this);},BattleManager[_0x105b2f(0x103)]=function(){const _0x3510a0=_0x105b2f;this['_currentActor']=null,this[_0x3510a0(0x142)]=![];},VisuMZ[_0x105b2f(0x1ca)]['BattleManager_endAction']=BattleManager[_0x105b2f(0x1f2)],BattleManager[_0x105b2f(0x1f2)]=function(){const _0x1c0504=_0x105b2f;this[_0x1c0504(0xcb)](),VisuMZ['BattleSystemOTB'][_0x1c0504(0x2ae)][_0x1c0504(0x1a5)](this),this[_0x1c0504(0x187)]();},BattleManager['preEndActionOTB']=function(){const _0x9b1f45=_0x105b2f;if(!this['isOTB']())return;this[_0x9b1f45(0xb6)]();this['_subject']&&this[_0x9b1f45(0x210)][_0x9b1f45(0x209)]();if(this[_0x9b1f45(0x210)]&&this['_subject'][_0x9b1f45(0x170)]()&&this[_0x9b1f45(0x190)][_0x9b1f45(0x1de)](this[_0x9b1f45(0x210)])){const _0x428268=this[_0x9b1f45(0x210)][_0x9b1f45(0x23a)][_0x9b1f45(0x84)](_0x174a5b=>_0x174a5b[_0x9b1f45(0x214)]);this[_0x9b1f45(0x210)]['makeActions']();if(_0x428268){let _0x1806ae=_0x428268[_0x9b1f45(0x22b)];while(_0x1806ae--){this[_0x9b1f45(0x210)][_0x9b1f45(0x23a)][_0x9b1f45(0x13a)]();}this['_subject'][_0x9b1f45(0x23a)]=_0x428268[_0x9b1f45(0xfb)](this[_0x9b1f45(0x210)]['_actions']);}}},BattleManager['postEndActionOTB']=function(){const _0x3bfa4e=_0x105b2f;if(!this[_0x3bfa4e(0x185)]())return;this['removeActionBattlersOTB']();this[_0x3bfa4e(0x210)]&&(this[_0x3bfa4e(0xca)](this[_0x3bfa4e(0x210)]),this['_subject']=null);this[_0x3bfa4e(0x10d)]['length']>0x0&&(this[_0x3bfa4e(0x210)]=this[_0x3bfa4e(0x232)]());;},BattleManager[_0x105b2f(0x1d5)]=VisuMZ['BattleSystemOTB']['Settings'][_0x105b2f(0x281)][_0x105b2f(0x247)],BattleManager['OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER']=VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x220)][_0x105b2f(0x281)][_0x105b2f(0x16a)],BattleManager['OTB_STUN_INFINITY_CLAMP']=VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x220)][_0x105b2f(0x281)][_0x105b2f(0x1da)],VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0xab)]=BattleManager[_0x105b2f(0x1a7)],BattleManager[_0x105b2f(0x1a7)]=function(){const _0x3129a6=_0x105b2f;this['isOTB']()?this[_0x3129a6(0x13b)]():VisuMZ[_0x3129a6(0x1ca)]['BattleManager_makeActionOrders'][_0x3129a6(0x1a5)](this);},BattleManager['makeActionOrdersOTB']=function(){const _0xfc89d4=_0x105b2f;let _0x5b17cb=this[_0xfc89d4(0x1bb)]?0x1:0x2;while(_0x5b17cb--){this[_0xfc89d4(0x261)]();}const _0x399aab=!this[_0xfc89d4(0x1bb)];this[_0xfc89d4(0x1bb)]=!![];},BattleManager[_0x105b2f(0x261)]=function(){const _0x2cc076=_0x105b2f;this[_0x2cc076(0x190)]=this['_otb_actionBattlersNext'],this[_0x2cc076(0x12f)]();const _0x517c8f=[];_0x517c8f[_0x2cc076(0x297)](...$gameParty['battleMembers']()),_0x517c8f[_0x2cc076(0x297)](...$gameTroop[_0x2cc076(0x14c)]());for(const _0x55c47b of _0x517c8f){_0x55c47b['makeSpeed']();}_0x517c8f[_0x2cc076(0x82)]((_0x57690d,_0x3470a7)=>_0x3470a7[_0x2cc076(0x2a6)]()-_0x57690d[_0x2cc076(0x2a6)]()),this[_0x2cc076(0x24a)]=_0x517c8f,this[_0x2cc076(0x11f)](),this[_0x2cc076(0xb6)](),this[_0x2cc076(0x1be)]();},BattleManager[_0x105b2f(0x11f)]=function(){const _0x8a6aa3=_0x105b2f;if(!BattleManager[_0x8a6aa3(0x1d5)])return;const _0x4784a3=this[_0x8a6aa3(0x24a)],_0x59665c=this[_0x8a6aa3(0x1b0)]();for(const _0x30c154 of _0x59665c){if(!_0x30c154)continue;if(!_0x30c154[_0x8a6aa3(0x16f)]())continue;if(!_0x30c154[_0x8a6aa3(0xba)]())continue;if(!_0x4784a3[_0x8a6aa3(0x1de)](_0x30c154))continue;const _0x5b75cd=_0x4784a3['indexOf'](_0x30c154);let _0x5b3dc5=_0x30c154[_0x8a6aa3(0x93)]()-0x1;while(_0x5b3dc5--){let _0x184afc=_0x5b75cd;BattleManager['OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER']&&(_0x184afc=Math[_0x8a6aa3(0x27e)](_0x4784a3[_0x8a6aa3(0x22b)]-_0x5b75cd)+_0x5b75cd),_0x4784a3[_0x8a6aa3(0x2a8)](_0x184afc,0x0,_0x30c154);}}},BattleManager[_0x105b2f(0xb6)]=function(){const _0x2c0a93=_0x105b2f;if(!this['isOTB']())return;this['_actionBattlers']=this[_0x2c0a93(0x190)]||[],this['_actionBattlers'][_0x2c0a93(0x88)](null),this[_0x2c0a93(0x190)][_0x2c0a93(0x88)](undefined),this[_0x2c0a93(0x190)]=this[_0x2c0a93(0x190)][_0x2c0a93(0x84)](_0x846c9f=>_0x846c9f[_0x2c0a93(0x20e)]()),this[_0x2c0a93(0x190)]=this[_0x2c0a93(0x190)][_0x2c0a93(0x84)](_0x386a80=>VisuMZ['BattleSystemOTB'][_0x2c0a93(0x199)](_0x386a80)),this['_surprise']&&(this[_0x2c0a93(0x190)]=this[_0x2c0a93(0x190)]['filter'](_0x3f9d4a=>!_0x3f9d4a['isActor']())),this['_preemptive']&&(this['_actionBattlers']=this['_actionBattlers'][_0x2c0a93(0x84)](_0x473e3b=>!_0x473e3b[_0x2c0a93(0x296)]())),this[_0x2c0a93(0x24a)]=this[_0x2c0a93(0x24a)]||[],this[_0x2c0a93(0x24a)][_0x2c0a93(0x88)](null),this['_otb_actionBattlersNext'][_0x2c0a93(0x88)](undefined),this[_0x2c0a93(0x24a)]=this[_0x2c0a93(0x24a)]['filter'](_0x45c572=>_0x45c572[_0x2c0a93(0x20e)]()),this[_0x2c0a93(0x24a)]=this['_otb_actionBattlersNext'][_0x2c0a93(0x84)](_0x24dee7=>VisuMZ[_0x2c0a93(0x1ca)][_0x2c0a93(0x21a)](_0x24dee7)),this[_0x2c0a93(0x1b4)](),this[_0x2c0a93(0x97)]();},VisuMZ['BattleSystemOTB'][_0x105b2f(0x199)]=function(_0x2ae514){const _0x3aa0dc=_0x105b2f;if(!_0x2ae514)return![];if(!_0x2ae514[_0x3aa0dc(0xba)]())return![];if(!_0x2ae514['isAppeared']())return![];return _0x2ae514[_0x3aa0dc(0x170)]();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x21a)]=function(_0xe43b01){const _0xfc6f68=_0x105b2f;if(!_0xe43b01)return![];const _0x55d9c7=JsonEx[_0xfc6f68(0x138)](_0xe43b01);return _0x55d9c7[_0xfc6f68(0x11b)]=!![],_0x55d9c7[_0xfc6f68(0x198)]=!![],_0x55d9c7[_0xfc6f68(0x29e)](),_0x55d9c7[_0xfc6f68(0x299)](0x1),_0x55d9c7[_0xfc6f68(0x299)](0x2),_0x55d9c7[_0xfc6f68(0x18a)](),VisuMZ[_0xfc6f68(0x1ca)][_0xfc6f68(0x199)](_0x55d9c7);},BattleManager['turnOrderChangeOTB']=function(_0x1eb169,_0x4cc153,_0x4ccd7c){const _0x189c67=_0x105b2f;if(!_0x4cc153)return;const _0x3d7610=_0x4ccd7c?this[_0x189c67(0x24a)]:this[_0x189c67(0x190)];if(!_0x3d7610)return;if(!_0x3d7610[_0x189c67(0x1de)](_0x1eb169))return;const _0x128393=VisuMZ[_0x189c67(0x1ca)][_0x189c67(0x1ee)](_0x1eb169,_0x3d7610),_0x59fd93=_0x4ccd7c?VisuMZ[_0x189c67(0x1ca)][_0x189c67(0x16e)](_0x3d7610):0x0,_0x437d8b=_0x128393[_0x189c67(0x22b)]-0x1;for(let _0x5d2c16=_0x437d8b;_0x5d2c16>=0x0;_0x5d2c16--){_0x3d7610[_0x189c67(0x2a8)](_0x128393[_0x5d2c16],0x1);}for(var _0x5b8927=0x0;_0x5b8927<_0x128393[_0x189c67(0x22b)];_0x5b8927++){var _0x34a704=(_0x128393[_0x5b8927]-_0x4cc153)[_0x189c67(0x284)](_0x59fd93,_0x3d7610['length']);_0x3d7610[_0x189c67(0x2a8)](_0x34a704,0x0,_0x1eb169);}this['removeActionBattlersOTB'](),this[_0x189c67(0x97)]();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x1ee)]=function(_0x28ea79,_0x2fa982){const _0x2c8484=_0x105b2f,_0x11b3a5=[],_0x354464=_0x2fa982[_0x2c8484(0x22b)];for(let _0x325ea6=0x0;_0x325ea6<_0x354464;_0x325ea6++){if(_0x2fa982[_0x325ea6]===_0x28ea79)_0x11b3a5[_0x2c8484(0x297)](_0x325ea6);}return _0x11b3a5;},VisuMZ['BattleSystemOTB'][_0x105b2f(0x16e)]=function(_0x23380e){const _0x18ee2b=_0x105b2f;if(!BattleManager['OTB_STUN_INFINITY_CLAMP'])return 0x0;if(!_0x23380e)return 0x0;let _0x268e50=0x0;const _0x396919=_0x23380e[_0x18ee2b(0x22b)];for(let _0x4ea20f=0x0;_0x4ea20f<_0x396919;_0x4ea20f++){const _0x275386=_0x23380e[_0x4ea20f];if(!_0x275386)continue;if(_0x275386[_0x18ee2b(0x2a6)]()!==Infinity)return _0x4ea20f;else _0x268e50++;}return _0x268e50;},BattleManager[_0x105b2f(0x12f)]=function(){const _0x2debb1=_0x105b2f;if(!this[_0x2debb1(0x185)]())return;const _0x1e86cd=SceneManager[_0x2debb1(0xb2)][_0x2debb1(0x28a)];if(!_0x1e86cd)return;_0x1e86cd['shiftNextTurnSpritesToCurrentTurn']();},BattleManager[_0x105b2f(0x1be)]=function(){const _0x56cf6c=_0x105b2f;if(!this[_0x56cf6c(0x185)]())return;const _0x116dd0=SceneManager['_scene'][_0x56cf6c(0x28a)];if(!_0x116dd0)return;_0x116dd0['createNewTurnOrderSprites']();},VisuMZ['BattleSystemOTB'][_0x105b2f(0x17e)]=BattleManager[_0x105b2f(0x232)],BattleManager[_0x105b2f(0x232)]=function(){const _0x47f3de=_0x105b2f;return this[_0x47f3de(0x210)]=VisuMZ[_0x47f3de(0x1ca)][_0x47f3de(0x17e)][_0x47f3de(0x1a5)](this),this['isOTB']()&&this[_0x47f3de(0x210)]&&this[_0x47f3de(0xda)](this[_0x47f3de(0x210)]),this['_subject'];},BattleManager[_0x105b2f(0xda)]=function(_0x120b4b){const _0x101371=_0x105b2f;if(!this[_0x101371(0x185)]())return;const _0x3caf67=SceneManager[_0x101371(0xb2)][_0x101371(0x28a)];if(!_0x3caf67)return;if(!_0x120b4b)return;_0x3caf67[_0x101371(0x193)](_0x120b4b);},BattleManager['refreshTurnOrder']=function(){const _0x273c53=_0x105b2f;if(!this[_0x273c53(0x185)]())return;const _0x424dc6=SceneManager['_scene'][_0x273c53(0x28a)];if(!_0x424dc6)return;_0x424dc6[_0x273c53(0xa1)]();},VisuMZ['BattleSystemOTB'][_0x105b2f(0x201)]=BattleManager['endTurn'],BattleManager[_0x105b2f(0x236)]=function(){const _0x309288=_0x105b2f;VisuMZ[_0x309288(0x1ca)][_0x309288(0x201)]['call'](this),this[_0x309288(0x185)]()&&(this[_0x309288(0x196)](),$gameParty[_0x309288(0x25c)](),$gameTroop['clearMakeActionTimesCacheOTB']());},BattleManager[_0x105b2f(0x196)]=function(){const _0x3db9bb=_0x105b2f;if(!this[_0x3db9bb(0x185)]())return;const _0x54374a=SceneManager[_0x3db9bb(0xb2)]['_otbTurnOrderWindow'];if(!_0x54374a)return;_0x54374a[_0x3db9bb(0xed)]();},BattleManager[_0x105b2f(0x1b4)]=function(){const _0x3494c6=_0x105b2f;if(!this[_0x3494c6(0x185)]())return;const _0x30f2d6=SceneManager[_0x3494c6(0xb2)]['_otbTurnOrderWindow'];if(!_0x30f2d6)return;_0x30f2d6['removeUnableTurnOrderSprites']();},BattleManager[_0x105b2f(0x259)]=function(_0x1e62cb){const _0x5dd17d=_0x105b2f;if(!_0x1e62cb)return;const _0x2112ab=_0x1e62cb[_0x5dd17d(0x93)]();_0x1e62cb[_0x5dd17d(0x9c)]();if(!this[_0x5dd17d(0x190)]['includes'](_0x1e62cb)){const _0x26eaa5=Math[_0x5dd17d(0x255)](0x0,_0x2112ab-(_0x1e62cb[_0x5dd17d(0x256)]||0x0));this[_0x5dd17d(0x105)](_0x1e62cb,_0x26eaa5,this[_0x5dd17d(0x190)]);}if(!this['_otb_actionBattlersNext'][_0x5dd17d(0x1de)](_0x1e62cb)){const _0x1df686=_0x2112ab;this[_0x5dd17d(0x105)](_0x1e62cb,_0x1df686,this[_0x5dd17d(0x24a)]);}},BattleManager[_0x105b2f(0x105)]=function(_0x48371d,_0x59bf4e,_0x326a91){const _0x566996=_0x105b2f;if(!this[_0x566996(0x185)]())return;const _0x467cc1=SceneManager[_0x566996(0xb2)][_0x566996(0x28a)];_0x48371d[_0x566996(0x9c)]();while(_0x59bf4e--){_0x326a91['push'](_0x48371d),_0x467cc1&&_0x467cc1[_0x566996(0x173)](_0x48371d,_0x326a91);}},BattleManager[_0x105b2f(0x14e)]=function(_0x5b9ec){const _0x298f79=_0x105b2f;if(!_0x5b9ec)return;const _0x347993=_0x5b9ec[_0x298f79(0x93)]();_0x5b9ec[_0x298f79(0x9c)]();if(!this[_0x298f79(0x190)]['includes'](_0x5b9ec)){const _0xead8f1=Math['max'](0x0,_0x347993-(_0x5b9ec[_0x298f79(0x256)]||0x0));this[_0x298f79(0x12a)](_0x5b9ec,_0xead8f1,this[_0x298f79(0x190)]);}if(!this[_0x298f79(0x24a)][_0x298f79(0x1de)](_0x5b9ec)){const _0x17302a=_0x347993;this[_0x298f79(0x12a)](_0x5b9ec,_0x17302a,this[_0x298f79(0x24a)]);}},BattleManager[_0x105b2f(0x272)]=function(_0x5436e4,_0x5cd92e,_0x48ad5c){const _0x24f4ba=_0x105b2f;if(!this['isOTB']())return;const _0x2a6e21=SceneManager[_0x24f4ba(0xb2)][_0x24f4ba(0x28a)];while(_0x5cd92e--){_0x48ad5c[_0x24f4ba(0xe6)](_0x5436e4),_0x2a6e21&&_0x2a6e21[_0x24f4ba(0x12a)](_0x5436e4,_0x48ad5c);}},BattleManager[_0x105b2f(0x1e6)]=function(_0x1c287e){const _0x432c44=_0x105b2f;if(!this['isOTB']())return;const _0x4cae7e=this[_0x432c44(0x190)],_0x1ca3ce=_0x1c287e===this[_0x432c44(0x210)]?0x0:0x1;let _0x14d58f=0x0;for(let _0x546811=0x0;_0x546811<_0x4cae7e[_0x432c44(0x22b)];_0x546811++){const _0x193aee=_0x4cae7e[_0x546811];if(!_0x193aee)continue;if(!_0x193aee[_0x432c44(0x23a)])continue;if(!_0x193aee[_0x432c44(0x23a)][_0x1ca3ce])continue;if(!_0x193aee['_actions'][_0x1ca3ce][_0x432c44(0x214)])continue;_0x14d58f=_0x546811;}this[_0x432c44(0x190)][_0x432c44(0x2a8)](_0x14d58f,0x0,_0x1c287e);const _0xd03a0a=SceneManager[_0x432c44(0xb2)]['_otbTurnOrderWindow'];_0xd03a0a&&_0xd03a0a[_0x432c44(0xe3)](_0x1c287e,_0x14d58f);},BattleManager[_0x105b2f(0x286)]=function(){const _0x1618cb=_0x105b2f;if(!this[_0x1618cb(0x185)]())return;const _0x46e87e=SceneManager['_scene']['_otbTurnOrderWindow'];if(!_0x46e87e)return;_0x46e87e[_0x1618cb(0x183)](null);},BattleManager[_0x105b2f(0x1d6)]=function(){const _0x2bbca1=_0x105b2f;if(!this[_0x2bbca1(0x185)]())return;const _0x392f4a=SceneManager[_0x2bbca1(0xb2)][_0x2bbca1(0x28a)];if(!_0x392f4a)return;_0x392f4a['previewOrderByAction'](this['inputtingAction']());},VisuMZ['BattleSystemOTB'][_0x105b2f(0x1b3)]=Game_System['prototype']['initialize'],Game_System[_0x105b2f(0x271)][_0x105b2f(0x80)]=function(){const _0x51950f=_0x105b2f;VisuMZ[_0x51950f(0x1ca)][_0x51950f(0x1b3)][_0x51950f(0x1a5)](this),this[_0x51950f(0xd6)]();},Game_System['prototype'][_0x105b2f(0xd6)]=function(){const _0x36db81=_0x105b2f;this[_0x36db81(0x15a)]=!![];},Game_System[_0x105b2f(0x271)][_0x105b2f(0xbc)]=function(){const _0x4fc27c=_0x105b2f;return this[_0x4fc27c(0x15a)]===undefined&&this[_0x4fc27c(0xd6)](),this[_0x4fc27c(0x15a)];},Game_System[_0x105b2f(0x271)][_0x105b2f(0x20f)]=function(_0x25a610){const _0x253218=_0x105b2f;this[_0x253218(0x15a)]===undefined&&this['initBattleSystemOTB'](),this[_0x253218(0x15a)]=_0x25a610;},Game_Action[_0x105b2f(0x1c1)]=VisuMZ[_0x105b2f(0x1ca)]['Settings'][_0x105b2f(0xa4)][_0x105b2f(0x1b8)],Game_Action['OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN']=VisuMZ[_0x105b2f(0x1ca)]['Settings'][_0x105b2f(0xa4)]['ConvertAgiDebuffCurrent'],Game_Action[_0x105b2f(0x1b2)]=VisuMZ[_0x105b2f(0x1ca)]['Settings']['Conversion']['ConvertAgiBuffNext'],Game_Action[_0x105b2f(0x25f)]=VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x220)][_0x105b2f(0xa4)][_0x105b2f(0x295)],VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x276)]=Game_Action[_0x105b2f(0x271)][_0x105b2f(0x2a6)],Game_Action[_0x105b2f(0x271)][_0x105b2f(0x2a6)]=function(){const _0x45ed7c=_0x105b2f;return BattleManager[_0x45ed7c(0x185)]()?0x0:VisuMZ[_0x45ed7c(0x1ca)][_0x45ed7c(0x276)][_0x45ed7c(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x22d)]=Game_Action[_0x105b2f(0x271)]['applyGlobal'],Game_Action[_0x105b2f(0x271)][_0x105b2f(0x192)]=function(){const _0x322d4c=_0x105b2f;VisuMZ['BattleSystemOTB'][_0x322d4c(0x22d)][_0x322d4c(0x1a5)](this),this[_0x322d4c(0x17a)]();},Game_Action[_0x105b2f(0x271)][_0x105b2f(0x17a)]=function(){const _0x3d333d=_0x105b2f;if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x3d333d(0x185)]())return;if(!this[_0x3d333d(0x7c)]())return;if(!this[_0x3d333d(0x1c8)]())return;const _0x3dbe93=VisuMZ[_0x3d333d(0x1ca)]['RegExp'],_0x2c74e5=this['item']()[_0x3d333d(0xb0)];_0x2c74e5['match'](_0x3dbe93['Instant'])&&this[_0x3d333d(0x1c8)]()[_0x3d333d(0x12b)](0x1);let _0x24a1da=this[_0x3d333d(0x1d7)](),_0x17a990=this[_0x3d333d(0x87)]();_0x24a1da!==0x0&&BattleManager[_0x3d333d(0xf5)](this[_0x3d333d(0x1c8)](),-_0x24a1da,![]),_0x17a990!==0x0&&BattleManager[_0x3d333d(0xf5)](this[_0x3d333d(0x1c8)](),-_0x17a990,!![]);},Game_Action[_0x105b2f(0x271)][_0x105b2f(0x1d7)]=function(){const _0x224a13=_0x105b2f;if(!SceneManager[_0x224a13(0x15b)]())return 0x0;if(!BattleManager[_0x224a13(0x185)]())return 0x0;if(!this[_0x224a13(0x7c)]())return 0x0;if(!this[_0x224a13(0x1c8)]())return 0x0;if(!this[_0x224a13(0x1c8)]()['canChangeOtbTurnOrder']())return 0x0;const _0x3db4a0=VisuMZ[_0x224a13(0x1ca)]['RegExp'],_0x2a8c03=this['item']()[_0x224a13(0xb0)],_0x30cc60=BattleManager[_0x224a13(0x190)]||[];let _0x3c7871=0x0;return _0x2a8c03[_0x224a13(0x1e7)](_0x3db4a0['UserFollOrder'])&&(_0x30cc60['includes'](this[_0x224a13(0x1c8)]())&&(_0x3c7871+=Number(RegExp['$1']))),_0x2a8c03['match'](_0x3db4a0['UserCurrOrder'])&&(_0x3c7871+=Number(RegExp['$1'])),_0x3c7871;},Game_Action[_0x105b2f(0x271)][_0x105b2f(0x87)]=function(){const _0x4a76b3=_0x105b2f;if(!SceneManager[_0x4a76b3(0x15b)]())return 0x0;if(!BattleManager[_0x4a76b3(0x185)]())return 0x0;if(!this[_0x4a76b3(0x7c)]())return 0x0;if(!this[_0x4a76b3(0x1c8)]())return 0x0;if(!this[_0x4a76b3(0x1c8)]()[_0x4a76b3(0xd7)]())return 0x0;const _0x4d3591=VisuMZ[_0x4a76b3(0x1ca)][_0x4a76b3(0x220)][_0x4a76b3(0x281)],_0x56212f=VisuMZ[_0x4a76b3(0x1ca)][_0x4a76b3(0x28e)],_0x76be14=this[_0x4a76b3(0x7c)]()['note'],_0x1602ec=BattleManager[_0x4a76b3(0x190)]||[],_0x525d05=BattleManager[_0x4a76b3(0x24a)]||[];let _0x348203=0x0;return _0x4d3591[_0x4a76b3(0x1f6)]&&(_0x348203+=_0x4d3591[_0x4a76b3(0x1f6)]['call'](this)),_0x76be14[_0x4a76b3(0x1e7)](_0x56212f[_0x4a76b3(0x86)])&&(_0x525d05[_0x4a76b3(0x1de)](this[_0x4a76b3(0x1c8)]())&&!_0x1602ec[_0x4a76b3(0x1de)](this[_0x4a76b3(0x1c8)]())&&(_0x348203+=Number(RegExp['$1']))),_0x76be14[_0x4a76b3(0x1e7)](_0x56212f[_0x4a76b3(0x29c)])&&(_0x348203+=Number(RegExp['$1'])),_0x348203;},VisuMZ[_0x105b2f(0x1ca)]['Game_Action_applyItemUserEffect']=Game_Action[_0x105b2f(0x271)][_0x105b2f(0x1a2)],Game_Action['prototype'][_0x105b2f(0x1a2)]=function(_0x12dce0){const _0x2fd95c=_0x105b2f;VisuMZ[_0x2fd95c(0x1ca)][_0x2fd95c(0x26d)][_0x2fd95c(0x1a5)](this,_0x12dce0),this[_0x2fd95c(0x1ec)](_0x12dce0),this[_0x2fd95c(0x91)](_0x12dce0);},Game_Action[_0x105b2f(0x271)]['applyItemAddedActionOTB']=function(_0x1f7849){const _0x19dac7=_0x105b2f;if(!SceneManager[_0x19dac7(0x15b)]())return;if(!BattleManager['isOTB']())return;if(!this[_0x19dac7(0x7c)]())return;if(!_0x1f7849)return;const _0x41af4e=VisuMZ['BattleSystemOTB'][_0x19dac7(0x28e)],_0x26bf3a=this[_0x19dac7(0x7c)]()[_0x19dac7(0xb0)];if(_0x26bf3a[_0x19dac7(0x1e7)](_0x41af4e[_0x19dac7(0x117)])){const _0x341235=!![],_0x20cfd6=Number(RegExp['$1'])||0x0;this[_0x19dac7(0x1c8)]()[_0x19dac7(0x17d)](_0x20cfd6,_0x341235);}if(_0x26bf3a['match'](_0x41af4e[_0x19dac7(0x1dc)])){const _0x28b8bb=![],_0x23f5bd=Number(RegExp['$1'])||0x0;this[_0x19dac7(0x1c8)]()[_0x19dac7(0x17d)](_0x23f5bd,_0x28b8bb);}if(_0x26bf3a[_0x19dac7(0x1e7)](_0x41af4e[_0x19dac7(0x1a3)])){const _0x4bee40=!![],_0x2969c2=Number(RegExp['$1'])||0x0;_0x1f7849[_0x19dac7(0x17d)](_0x2969c2,_0x4bee40);}if(_0x26bf3a[_0x19dac7(0x1e7)](_0x41af4e[_0x19dac7(0x167)])){const _0x52f3c3=![],_0x37773d=Number(RegExp['$1'])||0x0;_0x1f7849[_0x19dac7(0x17d)](_0x37773d,_0x52f3c3);}},Game_Action[_0x105b2f(0x271)][_0x105b2f(0x91)]=function(_0x4608aa){const _0x5881a7=_0x105b2f;if(!SceneManager['isSceneBattle']())return;if(!BattleManager['isOTB']())return;if(!this['item']())return;if(!_0x4608aa)return;if(!_0x4608aa[_0x5881a7(0xd7)]())return 0x0;let _0x3a098a=this[_0x5881a7(0xbb)](_0x4608aa),_0x2e609f=this[_0x5881a7(0x208)](_0x4608aa);_0x3a098a!==0x0&&BattleManager[_0x5881a7(0xf5)](_0x4608aa,-_0x3a098a,![]),_0x2e609f!==0x0&&BattleManager['turnOrderChangeOTB'](_0x4608aa,-_0x2e609f,!![]);},Game_Action['prototype']['otbCalcTargetCurrentOrderChange']=function(_0x5822eb){const _0x13bff7=_0x105b2f;if(!SceneManager['isSceneBattle']())return 0x0;if(!BattleManager[_0x13bff7(0x185)]())return 0x0;if(!this['item']())return 0x0;if(!_0x5822eb)return 0x0;if(!_0x5822eb[_0x13bff7(0xd7)]())return 0x0;const _0x35f327=VisuMZ['BattleSystemOTB']['RegExp'],_0x1e16ad=this[_0x13bff7(0x7c)]()[_0x13bff7(0xb0)],_0x5ed917=BattleManager[_0x13bff7(0x190)]||[];let _0x1f1408=0x0;_0x1e16ad[_0x13bff7(0x1e7)](_0x35f327[_0x13bff7(0x277)])&&(_0x5ed917[_0x13bff7(0x1de)](_0x5822eb)&&(_0x1f1408+=Number(RegExp['$1'])));_0x1e16ad['match'](_0x35f327['TargetCurrOrder'])&&(_0x1f1408+=Number(RegExp['$1']));const _0x1305d7=this['item']()[_0x13bff7(0x200)];for(const _0x4192ad of _0x1305d7){if(!_0x4192ad)continue;if(_0x4192ad[_0x13bff7(0x251)]===Game_Action['EFFECT_ADD_BUFF']&&_0x4192ad[_0x13bff7(0x223)]===0x6){if(Game_Action[_0x13bff7(0x1c1)])_0x1f1408-=0x1;}if(_0x4192ad[_0x13bff7(0x251)]===Game_Action[_0x13bff7(0xe1)]&&_0x4192ad['dataId']===0x6){if(Game_Action[_0x13bff7(0x127)])_0x1f1408+=0x1;}}return _0x1f1408;},Game_Action['prototype'][_0x105b2f(0x208)]=function(_0x52ab3e){const _0x46eccb=_0x105b2f;if(!SceneManager['isSceneBattle']())return 0x0;if(!BattleManager[_0x46eccb(0x185)]())return 0x0;if(!this[_0x46eccb(0x7c)]())return 0x0;if(!_0x52ab3e)return 0x0;if(!_0x52ab3e[_0x46eccb(0xd7)]())return 0x0;const _0x5c432b=VisuMZ['BattleSystemOTB'][_0x46eccb(0x28e)],_0x351096=this[_0x46eccb(0x7c)]()[_0x46eccb(0xb0)],_0x2e9d7a=BattleManager[_0x46eccb(0x190)]||[],_0x436c4f=BattleManager[_0x46eccb(0x24a)]||[];let _0x10eaf3=0x0;_0x351096[_0x46eccb(0x1e7)](_0x5c432b['TargetFollOrder'])&&(_0x436c4f['includes'](_0x52ab3e)&&!_0x2e9d7a['includes'](_0x52ab3e)&&(_0x10eaf3+=Number(RegExp['$1'])));_0x351096[_0x46eccb(0x1e7)](_0x5c432b[_0x46eccb(0x197)])&&(_0x10eaf3+=Number(RegExp['$1']));const _0x1f6be7=this[_0x46eccb(0x7c)]()[_0x46eccb(0x200)];for(const _0x4531d4 of _0x1f6be7){if(!_0x4531d4)continue;if(_0x4531d4['code']===Game_Action[_0x46eccb(0x14a)]&&_0x4531d4[_0x46eccb(0x223)]===0x6){if(Game_Action['OTB_CONVERT_AGI_BUFF_NEXT_TURN'])_0x10eaf3-=0x1;}if(_0x4531d4[_0x46eccb(0x251)]===Game_Action[_0x46eccb(0xe1)]&&_0x4531d4['dataId']===0x6){if(Game_Action[_0x46eccb(0x25f)])_0x10eaf3+=0x1;}}return _0x10eaf3;},Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x12e)]=function(){const _0x56f96e=_0x105b2f;delete this[_0x56f96e(0x119)],delete this[_0x56f96e(0x275)],delete this['_otbTurnOrderFaceIndex'],delete this[_0x56f96e(0x231)];},Game_BattlerBase['prototype'][_0x105b2f(0x14f)]=function(){const _0x361ae1=_0x105b2f;return this[_0x361ae1(0x119)]===undefined&&(this[_0x361ae1(0x119)]=this[_0x361ae1(0x1aa)]()),this[_0x361ae1(0x119)];},Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x1aa)]=function(){return Window_OTB_TurnOrder['Settings']['EnemyBattlerType'];},Game_BattlerBase['prototype'][_0x105b2f(0x1f9)]=function(){const _0x3e6b86=_0x105b2f;return this[_0x3e6b86(0x275)]===undefined&&(this[_0x3e6b86(0x275)]=this[_0x3e6b86(0x7a)]()),this[_0x3e6b86(0x275)];},Game_BattlerBase[_0x105b2f(0x271)]['createTurnOrderOTBGraphicFaceName']=function(){const _0x15e43f=_0x105b2f;return Window_OTB_TurnOrder[_0x15e43f(0x220)][_0x15e43f(0x135)];},Game_BattlerBase['prototype']['TurnOrderOTBGraphicFaceIndex']=function(){const _0x1f651d=_0x105b2f;return this[_0x1f651d(0x233)]===undefined&&(this['_otbTurnOrderFaceIndex']=this[_0x1f651d(0x164)]()),this['_otbTurnOrderFaceIndex'];},Game_BattlerBase['prototype'][_0x105b2f(0x164)]=function(){const _0x13e677=_0x105b2f;return Window_OTB_TurnOrder[_0x13e677(0x220)][_0x13e677(0x238)];},Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x273)]=function(){const _0x1ff59a=_0x105b2f;return this[_0x1ff59a(0x231)]===undefined&&(this['_otbTurnOrderIconIndex']=this['createTurnOrderOTBGraphicIconIndex']()),this[_0x1ff59a(0x231)];},Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x28f)]=function(){const _0x482dc0=_0x105b2f;return Window_OTB_TurnOrder[_0x482dc0(0x220)]['EnemyBattlerIcon'];},Game_BattlerBase[_0x105b2f(0x271)]['setOTBGraphicIconIndex']=function(_0x986a01){const _0x5ee97d=_0x105b2f;this[_0x5ee97d(0x231)]=_0x986a01;},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x205)]=Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x1d4)],Game_BattlerBase[_0x105b2f(0x271)]['hide']=function(){const _0x549c83=_0x105b2f;VisuMZ['BattleSystemOTB'][_0x549c83(0x205)][_0x549c83(0x1a5)](this),BattleManager['removeActionBattlersOTB']();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x155)]=Game_BattlerBase[_0x105b2f(0x271)]['appear'],Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x152)]=function(){const _0x5a4081=_0x105b2f,_0x262851=this[_0x5a4081(0xec)];VisuMZ[_0x5a4081(0x1ca)][_0x5a4081(0x155)][_0x5a4081(0x1a5)](this),BattleManager[_0x5a4081(0x185)]()&&SceneManager[_0x5a4081(0x15b)]()&&_0x262851&&!this[_0x5a4081(0xec)]&&BattleManager['otbReturnBattlerToTurnOrders'](this);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0xaf)]=Game_Battler['prototype'][_0x105b2f(0x254)],Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x254)]=function(){const _0x446f58=_0x105b2f;VisuMZ[_0x446f58(0x1ca)]['Game_Battler_performCollapse'][_0x446f58(0x1a5)](this),BattleManager[_0x446f58(0xb6)]();},Game_Battler[_0x105b2f(0x160)]=VisuMZ[_0x105b2f(0x1ca)]['Settings']['Mechanics'][_0x105b2f(0x287)],VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x16c)]=Game_Battler[_0x105b2f(0x271)][_0x105b2f(0xb4)],Game_Battler[_0x105b2f(0x271)][_0x105b2f(0xb4)]=function(_0x4005f0){const _0x2598ed=_0x105b2f;VisuMZ[_0x2598ed(0x1ca)][_0x2598ed(0x16c)][_0x2598ed(0x1a5)](this,_0x4005f0),this[_0x2598ed(0x22e)](_0x4005f0);},Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x22e)]=function(_0x4f685e){const _0x48ff89=_0x105b2f;if(!BattleManager[_0x48ff89(0x185)]())return;this[_0x48ff89(0x256)]=0x0,this[_0x48ff89(0xe4)]=undefined;},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x25a)]=Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x177)],Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x177)]=function(){const _0x52d976=_0x105b2f;VisuMZ[_0x52d976(0x1ca)][_0x52d976(0x25a)][_0x52d976(0x1a5)](this),this[_0x52d976(0xb8)]();},Game_Battler['prototype'][_0x105b2f(0xb8)]=function(){const _0x446da9=_0x105b2f;if(!BattleManager[_0x446da9(0x185)]())return;this[_0x446da9(0x256)]=0x0;},Game_Battler[_0x105b2f(0x271)]['performActionEndOTB']=function(){const _0x59e700=_0x105b2f;if(!BattleManager['isOTB']())return;this['_otbTimesActedThisTurn']=this[_0x59e700(0x256)]||0x0,this[_0x59e700(0x256)]++;if(this[_0x59e700(0x27d)]()>0x0&&this===BattleManager[_0x59e700(0x210)]){const _0x5a3235=BattleManager[_0x59e700(0x10d)];if(_0x5a3235['length']>0x0&&_0x5a3235[0x0]!==this)return;const _0x9178f1=this[_0x59e700(0x129)]();if(_0x9178f1&&BattleManager['isNextOtbSubject'](this))_0x9178f1[_0x59e700(0xac)]();}},BattleManager['isNextOtbSubject']=function(_0x15859a){const _0x58009c=_0x105b2f;if(!_0x15859a)return![];return this[_0x58009c(0x190)][0x0]===_0x15859a;},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x234)]=Game_Battler[_0x105b2f(0x271)]['onTurnEnd'],Game_Battler[_0x105b2f(0x271)]['onTurnEnd']=function(){const _0x59db18=_0x105b2f;VisuMZ['BattleSystemOTB'][_0x59db18(0x234)][_0x59db18(0x1a5)](this),this['onTurnEndOTB']();},Game_Battler[_0x105b2f(0x271)]['onTurnEndOTB']=function(){const _0x3f3604=_0x105b2f;if(!BattleManager['isOTB']())return;this[_0x3f3604(0x256)]=0x0;},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x1e5)]=Game_Battler['prototype']['makeSpeed'],Game_Battler[_0x105b2f(0x271)]['makeSpeed']=function(){const _0x2ee2f3=_0x105b2f;BattleManager[_0x2ee2f3(0x185)]()?this['makeOTBSpeed']():VisuMZ['BattleSystemOTB']['Game_Battler_makeSpeed'][_0x2ee2f3(0x1a5)](this);},Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x228)]=function(){const _0x4fb3c6=_0x105b2f;if(this['isInfinitySpeedOTB']())this['_speed']=Infinity;else{const _0x4b1363=this[_0x4fb3c6(0x140)]()||new Game_Action(this);this[_0x4fb3c6(0x266)]=VisuMZ['BattleSystemOTB'][_0x4fb3c6(0x220)][_0x4fb3c6(0x281)][_0x4fb3c6(0x1a8)][_0x4fb3c6(0x1a5)](_0x4b1363);}},Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x99)]=function(){const _0x3644d1=_0x105b2f;if(!Game_Battler[_0x3644d1(0x160)])return![];if(!this['isAlive']())return![];if(!this[_0x3644d1(0x16f)]())return![];if(this[_0x3644d1(0x170)]())return![];const _0x854aad=JsonEx[_0x3644d1(0x138)](this);return _0x854aad['_tempActor']=!![],_0x854aad[_0x3644d1(0x198)]=!![],_0x854aad[_0x3644d1(0x29e)](),_0x854aad[_0x3644d1(0x299)](0x1),_0x854aad[_0x3644d1(0x299)](0x2),_0x854aad[_0x3644d1(0x18a)](),_0x854aad[_0x3644d1(0x170)]();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0xc1)]=Game_Action['prototype'][_0x105b2f(0xf3)],Game_Action[_0x105b2f(0x271)][_0x105b2f(0xf3)]=function(){const _0x2607b1=_0x105b2f;return BattleManager[_0x2607b1(0x185)]()?VisuMZ[_0x2607b1(0x1ca)][_0x2607b1(0x220)]['Mechanics']['AllowRandomSpeed']:VisuMZ[_0x2607b1(0x1ca)][_0x2607b1(0xc1)][_0x2607b1(0x1a5)](this);},Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x12b)]=function(_0x60ba2f){const _0x26ba2e=_0x105b2f;if(!this['canMove']())return;this['_otbTimesActedThisTurn']=this['_otbTimesActedThisTurn']||0x0,this['_otbTimesActedThisTurn']--,BattleManager[_0x26ba2e(0x272)](this,_0x60ba2f,BattleManager[_0x26ba2e(0x190)]);},Game_Battler['prototype']['otbAddActions']=function(_0x2d4f84,_0x3ebc85){const _0x1034c8=_0x105b2f;if(!this['canMove']())return;_0x3ebc85?BattleManager[_0x1034c8(0x105)](this,_0x2d4f84,BattleManager[_0x1034c8(0x190)]):BattleManager['otbAddBattlerToTurnOrderAtEnd'](this,_0x2d4f84,BattleManager['_otb_actionBattlersNext']);},VisuMZ['BattleSystemOTB'][_0x105b2f(0xf4)]=Game_Battler[_0x105b2f(0x271)]['makeActionTimes'],Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x93)]=function(){const _0x5d75d7=_0x105b2f;return BattleManager['isOTB']()?this['makeActionTimesOTB']():VisuMZ[_0x5d75d7(0x1ca)][_0x5d75d7(0xf4)][_0x5d75d7(0x1a5)](this);},Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x282)]=function(){const _0x55e3bb=_0x105b2f;if(this[_0x55e3bb(0xe4)]!==undefined)return this[_0x55e3bb(0xe4)];this[_0x55e3bb(0x131)]=this[_0x55e3bb(0xf7)]()[_0x55e3bb(0x22b)];const _0x4c88f5=this[_0x55e3bb(0xf7)](),_0x573f57=_0x4c88f5[_0x55e3bb(0x124)]((_0x5c9213,_0x51dec1)=>Math[_0x55e3bb(0x257)]()<_0x51dec1?_0x5c9213+0x1:_0x5c9213,0x1);return this['_cache_makeActionTimesOTB']=_0x573f57,this[_0x55e3bb(0xe4)];},Game_Unit[_0x105b2f(0x271)][_0x105b2f(0x25c)]=function(){const _0x3c5508=_0x105b2f;for(const _0x418202 of this[_0x3c5508(0x14c)]()){_0x418202&&(_0x418202[_0x3c5508(0xe4)]=undefined);}},Game_Battler[_0x105b2f(0x271)][_0x105b2f(0xd7)]=function(){const _0x4c257c=_0x105b2f;if(this[_0x4c257c(0x2a6)]()===Infinity)return![];return!![];},Game_Battler[_0x105b2f(0x271)][_0x105b2f(0x19d)]=function(_0x4548c5,_0x5d573d){const _0x3b9928=_0x105b2f;if(this[_0x3b9928(0x198)]||this[_0x3b9928(0x11b)])return;if(!SceneManager[_0x3b9928(0x15b)]())return;if(!BattleManager[_0x3b9928(0x185)]())return;if(this[_0x3b9928(0x131)]!==this[_0x3b9928(0xf7)]()[_0x3b9928(0x22b)])this[_0x3b9928(0x131)]=this[_0x3b9928(0xf7)]()[_0x3b9928(0x22b)],this['_cache_makeActionTimesOTB']=undefined;else return;if(_0x4548c5&&!this['canMove']())BattleManager[_0x3b9928(0xb6)]();else!_0x4548c5&&this['canMove']()&&BattleManager[_0x3b9928(0x259)](this);if(this[_0x3b9928(0x170)]()){const _0x1e3363=this['makeActionTimes']()-_0x5d573d;_0x1e3363>0x0&&(BattleManager[_0x3b9928(0x105)](this,_0x1e3363,BattleManager[_0x3b9928(0x190)]),BattleManager[_0x3b9928(0x105)](this,_0x1e3363,BattleManager['_otb_actionBattlersNext']));}},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x1e8)]=Game_Battler[_0x105b2f(0x271)]['addState'],Game_Battler[_0x105b2f(0x271)][_0x105b2f(0xd4)]=function(_0x35f10d){const _0xff15b4=_0x105b2f,_0x905445=this[_0xff15b4(0x170)](),_0x1842b6=this['makeActionTimes']();VisuMZ[_0xff15b4(0x1ca)][_0xff15b4(0x1e8)][_0xff15b4(0x1a5)](this,_0x35f10d),this[_0xff15b4(0x131)]=undefined,this[_0xff15b4(0x19d)](_0x905445,_0x1842b6);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x1ad)]=Game_Battler[_0x105b2f(0x271)][_0x105b2f(0xe8)],Game_Battler[_0x105b2f(0x271)][_0x105b2f(0xe8)]=function(_0x51559d){const _0x1d937e=_0x105b2f,_0x33f3a1=this[_0x1d937e(0x170)](),_0x5ab7e5=this[_0x1d937e(0x93)](),_0x51f51e=this[_0x1d937e(0x17b)](_0x51559d);VisuMZ['BattleSystemOTB'][_0x1d937e(0x1ad)][_0x1d937e(0x1a5)](this,_0x51559d),_0x51f51e&&!this['isStateAffected'](_0x51559d)&&(this[_0x1d937e(0x131)]=undefined,this[_0x1d937e(0x19d)](_0x33f3a1,_0x5ab7e5));},VisuMZ['BattleSystemOTB'][_0x105b2f(0x292)]=Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x26a)],Game_BattlerBase[_0x105b2f(0x271)][_0x105b2f(0x26a)]=function(){const _0x4bee77=_0x105b2f;if(BattleManager[_0x4bee77(0x185)]())this[_0x4bee77(0xe8)](this[_0x4bee77(0x246)]());VisuMZ[_0x4bee77(0x1ca)][_0x4bee77(0x292)]['call'](this);if(BattleManager[_0x4bee77(0x185)]())this[_0x4bee77(0x18a)]();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0xd5)]=Game_Battler['prototype'][_0x105b2f(0x146)],Game_Battler['prototype']['forceAction']=function(_0x48edd3,_0x3e8a7e){const _0x4a524f=_0x105b2f;BattleManager[_0x4a524f(0x185)]()?this['forceActionOTB'](_0x48edd3,_0x3e8a7e):VisuMZ['BattleSystemOTB'][_0x4a524f(0xd5)]['call'](this,_0x48edd3,_0x3e8a7e);},Game_Battler[_0x105b2f(0x271)]['forceActionOTB']=function(_0x40bdf3,_0xea91a2){const _0x286a98=_0x105b2f,_0x5e1323=new Game_Action(this,!![]);_0x5e1323[_0x286a98(0x120)](_0x40bdf3),_0x5e1323[_0x286a98(0x214)]=!![];if(_0xea91a2===-0x2)_0x5e1323[_0x286a98(0x268)](this[_0x286a98(0xc9)]);else _0xea91a2===-0x1?_0x5e1323[_0x286a98(0x1e3)]():_0x5e1323[_0x286a98(0x268)](_0xea91a2);let _0x9e764c=this[_0x286a98(0x23a)][_0x286a98(0xf8)](_0x23899d=>_0x23899d[_0x286a98(0x214)]);if(this===BattleManager[_0x286a98(0x210)])_0x9e764c=Math[_0x286a98(0x255)](_0x9e764c,0x0);_0x9e764c++,this[_0x286a98(0x23a)][_0x286a98(0x2a8)](_0x9e764c,0x0,_0x5e1323);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x194)]=BattleManager[_0x105b2f(0x146)],BattleManager[_0x105b2f(0x146)]=function(_0x5625a1){const _0x524f15=_0x105b2f;BattleManager['isOTB']()?this[_0x524f15(0x13f)](_0x5625a1):VisuMZ[_0x524f15(0x1ca)][_0x524f15(0x194)][_0x524f15(0x1a5)](this,_0x5625a1);},BattleManager[_0x105b2f(0x13f)]=function(_0x1676d4){const _0x27a8d3=_0x105b2f;BattleManager[_0x27a8d3(0x1e6)](_0x1676d4);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x1c4)]=Game_Actor[_0x105b2f(0x271)][_0x105b2f(0x211)],Game_Actor[_0x105b2f(0x271)][_0x105b2f(0x211)]=function(){const _0x20fd88=_0x105b2f;if(BattleManager[_0x20fd88(0x185)]()){if(this[_0x20fd88(0x129)]())this['battler']()[_0x20fd88(0xac)]();return![];}return VisuMZ[_0x20fd88(0x1ca)][_0x20fd88(0x1c4)][_0x20fd88(0x1a5)](this);},Game_Actor[_0x105b2f(0x271)][_0x105b2f(0x1aa)]=function(){const _0x406078=_0x105b2f,_0x3a18da=this[_0x406078(0x7f)]()[_0x406078(0xb0)];if(_0x3a18da[_0x406078(0x1e7)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x406078(0xb5);else{if(_0x3a18da[_0x406078(0x1e7)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return'icon';}return Window_OTB_TurnOrder[_0x406078(0x220)][_0x406078(0xef)];},Game_Actor[_0x105b2f(0x271)][_0x105b2f(0x7a)]=function(){const _0x469faa=_0x105b2f,_0x217def=this[_0x469faa(0x7f)]()['note'];if(_0x217def[_0x469faa(0x1e7)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x469faa(0xc0)]();},Game_Actor[_0x105b2f(0x271)][_0x105b2f(0x164)]=function(){const _0x5a158e=_0x105b2f,_0x576797=this['actor']()[_0x5a158e(0xb0)];if(_0x576797[_0x5a158e(0x1e7)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x5a158e(0x215)]();},Game_Actor[_0x105b2f(0x271)]['createTurnOrderOTBGraphicIconIndex']=function(){const _0x2206ed=_0x105b2f,_0x236188=this[_0x2206ed(0x7f)]()[_0x2206ed(0xb0)];if(_0x236188[_0x2206ed(0x1e7)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_OTB_TurnOrder[_0x2206ed(0x220)]['ActorBattlerIcon'];},Game_Enemy[_0x105b2f(0x271)][_0x105b2f(0x1aa)]=function(){const _0x59a0bd=_0x105b2f,_0x4f9b9d=this['enemy']()[_0x59a0bd(0xb0)];if(_0x4f9b9d[_0x59a0bd(0x1e7)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x59a0bd(0xb5);else{if(_0x4f9b9d[_0x59a0bd(0x1e7)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return _0x59a0bd(0x18d);}return Window_OTB_TurnOrder[_0x59a0bd(0x220)][_0x59a0bd(0x12c)];},Game_Enemy[_0x105b2f(0x271)][_0x105b2f(0x7a)]=function(){const _0x55e9c1=_0x105b2f,_0x37eddc=this[_0x55e9c1(0x181)]()[_0x55e9c1(0xb0)];if(_0x37eddc['match'](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Window_OTB_TurnOrder[_0x55e9c1(0x220)][_0x55e9c1(0x135)];},Game_Enemy[_0x105b2f(0x271)]['createTurnOrderOTBGraphicFaceIndex']=function(){const _0x46b088=_0x105b2f,_0x362b72=this['enemy']()[_0x46b088(0xb0)];if(_0x362b72['match'](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Window_OTB_TurnOrder[_0x46b088(0x220)]['EnemyBattlerFaceIndex'];},Game_Enemy[_0x105b2f(0x271)][_0x105b2f(0x28f)]=function(){const _0x5374d5=_0x105b2f,_0x30813a=this['enemy']()[_0x5374d5(0xb0)];if(_0x30813a['match'](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_OTB_TurnOrder[_0x5374d5(0x220)][_0x5374d5(0x1c2)];},VisuMZ[_0x105b2f(0x1ca)]['Game_Party_addActor']=Game_Party[_0x105b2f(0x271)]['addActor'],Game_Party['prototype'][_0x105b2f(0x1dd)]=function(_0x32a0d4){const _0x83fd49=_0x105b2f;VisuMZ[_0x83fd49(0x1ca)][_0x83fd49(0x126)][_0x83fd49(0x1a5)](this,_0x32a0d4);if(Imported[_0x83fd49(0x1f7)])return;SceneManager['isSceneBattle']()&&BattleManager[_0x83fd49(0x185)]()&&(BattleManager[_0x83fd49(0xb6)](),BattleManager[_0x83fd49(0x259)]($gameActors['actor'](_0x32a0d4)));},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x11e)]=Game_Party[_0x105b2f(0x271)]['removeActor'],Game_Party['prototype'][_0x105b2f(0x151)]=function(_0x41ce4f){const _0xf5f4f1=_0x105b2f;VisuMZ[_0xf5f4f1(0x1ca)]['Game_Party_removeActor'][_0xf5f4f1(0x1a5)](this,_0x41ce4f),SceneManager['isSceneBattle']()&&BattleManager[_0xf5f4f1(0x185)]()&&BattleManager[_0xf5f4f1(0xb6)]();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0xa3)]=Scene_Battle[_0x105b2f(0x271)]['createActorCommandWindow'],Scene_Battle[_0x105b2f(0x271)]['createActorCommandWindow']=function(){const _0x3b1aed=_0x105b2f;VisuMZ[_0x3b1aed(0x1ca)]['Scene_Battle_createActorCommandWindow'][_0x3b1aed(0x1a5)](this),BattleManager[_0x3b1aed(0x185)]()&&this['createActorCommandWindowOTB']();},Scene_Battle['prototype'][_0x105b2f(0xaa)]=function(){const _0x4e5a9c=_0x105b2f,_0x486fbe=this['_actorCommandWindow'];this['isPartyCommandWindowDisabled']()&&delete _0x486fbe['_handlers'][_0x4e5a9c(0xeb)];},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x225)]=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0xf6)],Scene_Battle[_0x105b2f(0x271)]['commandCancel']=function(){const _0x58e07a=_0x105b2f;BattleManager['isOTB']()?this[_0x58e07a(0xa2)]():VisuMZ[_0x58e07a(0x1ca)][_0x58e07a(0x225)][_0x58e07a(0x1a5)](this);},Scene_Battle['prototype'][_0x105b2f(0xa2)]=function(){const _0x52e4dd=_0x105b2f;BattleManager[_0x52e4dd(0x286)](),this[_0x52e4dd(0x270)][_0x52e4dd(0x17c)](),this[_0x52e4dd(0x157)]['close']();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x10c)]=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x189)],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x189)]=function(){const _0x155ddc=_0x105b2f;BattleManager['isOTB']()?this[_0x155ddc(0x1b6)]():VisuMZ[_0x155ddc(0x1ca)][_0x155ddc(0x10c)][_0x155ddc(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)]['Scene_Battle_createAllWindows']=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x83)],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x83)]=function(){const _0x38470a=_0x105b2f;VisuMZ[_0x38470a(0x1ca)][_0x38470a(0xd0)][_0x38470a(0x1a5)](this),this[_0x38470a(0x1cb)]();},Scene_Battle['prototype']['createOTBTurnOrderWindow']=function(){const _0x101004=_0x105b2f;if(!BattleManager[_0x101004(0x185)]())return;this['_otbTurnOrderWindow']=new Window_OTB_TurnOrder();const _0x312638=this[_0x101004(0x22c)](this[_0x101004(0xd1)]);this[_0x101004(0x28c)](this[_0x101004(0x28a)],_0x312638),this['repositionLogWindowOTB'](),SceneManager[_0x101004(0x2ac)]()&&this[_0x101004(0x28a)][_0x101004(0x222)]();},Scene_Battle[_0x105b2f(0x271)]['repositionLogWindowOTB']=function(){const _0x5998a1=_0x105b2f,_0x18f9c9=Window_OTB_TurnOrder[_0x5998a1(0x220)];if(_0x18f9c9[_0x5998a1(0x8f)]!==_0x5998a1(0x122))return;if(!_0x18f9c9[_0x5998a1(0x241)])return;if(!this[_0x5998a1(0x102)])return;const _0x48a245=this[_0x5998a1(0x28a)]['y']-Math['round']((Graphics[_0x5998a1(0x20a)]-Graphics[_0x5998a1(0x172)])/0x2),_0x3b2cf1=_0x48a245+this[_0x5998a1(0x28a)][_0x5998a1(0x20a)];this['_logWindow']['y']=_0x3b2cf1+(_0x18f9c9['LogWindowOffsetY']||0x0);},VisuMZ['BattleSystemOTB'][_0x105b2f(0x1b7)]=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x1a4)],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x1a4)]=function(){const _0x412605=_0x105b2f;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x412605(0x1ca)][_0x412605(0x1b7)]['call'](this);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x26f)]=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x92)],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x92)]=function(){const _0x16f34f=_0x105b2f;BattleManager[_0x16f34f(0x286)](),VisuMZ['BattleSystemOTB'][_0x16f34f(0x26f)][_0x16f34f(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x294)]=Scene_Battle['prototype']['onActorOk'],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x1ab)]=function(){const _0x18cb91=_0x105b2f;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x18cb91(0x1ca)]['Scene_Battle_onActorOk']['call'](this);},VisuMZ['BattleSystemOTB']['Scene_Battle_onActorCancel']=Scene_Battle['prototype'][_0x105b2f(0xc7)],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0xc7)]=function(){const _0x1d8ede=_0x105b2f;BattleManager[_0x1d8ede(0x286)](),VisuMZ['BattleSystemOTB']['Scene_Battle_onActorCancel'][_0x1d8ede(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)]['Scene_Battle_onEnemyOk']=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x20d)],Scene_Battle[_0x105b2f(0x271)]['onEnemyOk']=function(){const _0x5896da=_0x105b2f;BattleManager[_0x5896da(0x286)](),VisuMZ[_0x5896da(0x1ca)]['Scene_Battle_onEnemyOk'][_0x5896da(0x1a5)](this);},VisuMZ['BattleSystemOTB'][_0x105b2f(0x100)]=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x11a)],Scene_Battle['prototype'][_0x105b2f(0x11a)]=function(){const _0x4fa8ed=_0x105b2f;BattleManager[_0x4fa8ed(0x286)](),VisuMZ[_0x4fa8ed(0x1ca)][_0x4fa8ed(0x100)][_0x4fa8ed(0x1a5)](this);},VisuMZ['BattleSystemOTB'][_0x105b2f(0xe2)]=Scene_Battle['prototype'][_0x105b2f(0xe0)],Scene_Battle['prototype'][_0x105b2f(0xe0)]=function(){const _0x3e664b=_0x105b2f;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x3e664b(0x1ca)][_0x3e664b(0xe2)][_0x3e664b(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0xc8)]=Scene_Battle[_0x105b2f(0x271)]['onSkillCancel'],Scene_Battle['prototype'][_0x105b2f(0x108)]=function(){const _0x4bf4e6=_0x105b2f;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x4bf4e6(0x1ca)][_0x4bf4e6(0xc8)][_0x4bf4e6(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)]['Scene_Battle_onItemOk']=Scene_Battle['prototype'][_0x105b2f(0x89)],Scene_Battle[_0x105b2f(0x271)]['onItemOk']=function(){const _0x31537d=_0x105b2f;BattleManager[_0x31537d(0x286)](),VisuMZ['BattleSystemOTB'][_0x31537d(0xa6)][_0x31537d(0x1a5)](this);},VisuMZ['BattleSystemOTB'][_0x105b2f(0x1ae)]=Scene_Battle[_0x105b2f(0x271)]['onItemCancel'],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x1e2)]=function(){const _0xcfe60e=_0x105b2f;BattleManager[_0xcfe60e(0x286)](),VisuMZ['BattleSystemOTB'][_0xcfe60e(0x1ae)][_0xcfe60e(0x1a5)](this);},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x28b)]=Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x18b)],Scene_Battle[_0x105b2f(0x271)][_0x105b2f(0x18b)]=function(){const _0x4fcc21=_0x105b2f;BattleManager[_0x4fcc21(0x286)](),VisuMZ['BattleSystemOTB'][_0x4fcc21(0x28b)]['call'](this);};function Sprite_OTB_TurnOrder_Battler(){this['initialize'](...arguments);}Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]=Object[_0x105b2f(0x90)](Sprite_Clickable[_0x105b2f(0x271)]),Sprite_OTB_TurnOrder_Battler['prototype']['constructor']=Sprite_OTB_TurnOrder_Battler,Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x80)]=function(_0x1ebfa3,_0x56b25b,_0x31057b){const _0x16c169=_0x105b2f;this['initMembers'](_0x1ebfa3,_0x56b25b,_0x31057b),Sprite_Clickable[_0x16c169(0x271)]['initialize'][_0x16c169(0x1a5)](this),this[_0x16c169(0x9a)]=0x0,this['createChildren'](),this['checkOpacity']();},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x249)]=function(_0x341f07,_0x820361,_0x543f5e){const _0x586d72=_0x105b2f;this['_unit']=_0x341f07[_0x586d72(0x240)]()?$gameParty:$gameTroop,this['_index']=_0x341f07['index'](),this[_0x586d72(0xc6)]=_0x820361,this['_sourceArray']=_0x543f5e;const _0x54aceb=Window_OTB_TurnOrder[_0x586d72(0x220)],_0x4146fc=this['isHorz']();this[_0x586d72(0xee)]=0x0,this[_0x586d72(0x113)]=_0x54aceb[_0x586d72(0x162)]?-_0x54aceb[_0x586d72(0x245)]:this[_0x586d72(0x9d)]()[_0x586d72(0x1b5)],this[_0x586d72(0x1cc)]=0x0,this[_0x586d72(0x202)]=0x0,this[_0x586d72(0x169)]=0xff,this[_0x586d72(0x267)]=![],this['_isAppeared']=![],this[_0x586d72(0x278)]=0x0,this['_containerHeight']=0x0;},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x26c)]=function(){const _0x308524=_0x105b2f;this['createInitialPositions'](),this[_0x308524(0x13e)](),this['createGraphicSprite'](),this[_0x308524(0x264)](),this['createLetterSprite']();},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['createInitialPositions']=function(){const _0xd0a9d6=_0x105b2f;this['x']=this['_positionTargetX'],this['y']=this[_0xd0a9d6(0x1cc)];},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x191)]=function(){return!![];},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x147)]=function(){const _0x5d3924=_0x105b2f,_0x2cc8f8=Window_OTB_TurnOrder['Settings'];return _0x2cc8f8[_0x5d3924(0x245)];},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['bitmapHeight']=function(){const _0x68661b=_0x105b2f,_0xb291c8=Window_OTB_TurnOrder[_0x68661b(0x220)];return _0xb291c8['SpriteLength'];},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x19e)]=function(){const _0x219953=_0x105b2f;return this['_unit']===$gameParty?_0x219953(0xa7):_0x219953(0x1fd);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x13e)]=function(){const _0x91a650=_0x105b2f;if(!Window_OTB_TurnOrder[_0x91a650(0x220)][_0x91a650(0x15e)])return;const _0x2f76bf=Window_OTB_TurnOrder[_0x91a650(0x220)],_0x1fd8a8=this[_0x91a650(0x19e)](),_0x2e58e4=_0x91a650(0x28d)[_0x91a650(0x16d)](_0x1fd8a8),_0x59452f=new Sprite();_0x59452f[_0x91a650(0x26e)]['x']=this['anchor']['x'],_0x59452f[_0x91a650(0x26e)]['y']=this[_0x91a650(0x26e)]['y'];if(_0x2f76bf[_0x2e58e4])_0x59452f['bitmap']=ImageManager[_0x91a650(0x166)](_0x2f76bf[_0x2e58e4]);else{const _0x5c563c=this[_0x91a650(0x147)](),_0x2dc6f3=this[_0x91a650(0x141)]();_0x59452f[_0x91a650(0x20c)]=new Bitmap(_0x5c563c,_0x2dc6f3);const _0x2d9832=ColorManager['getColor'](_0x2f76bf[_0x91a650(0x1cf)['format'](_0x1fd8a8)]),_0x2b47b4=ColorManager[_0x91a650(0x12d)](_0x2f76bf['%1BgColor2'[_0x91a650(0x16d)](_0x1fd8a8)]);_0x59452f[_0x91a650(0x20c)][_0x91a650(0x11c)](0x0,0x0,_0x5c563c,_0x2dc6f3,_0x2d9832,_0x2b47b4,!![]);}this[_0x91a650(0x262)]=_0x59452f,this[_0x91a650(0x2a4)](this[_0x91a650(0x262)]),this[_0x91a650(0x1b5)]=this[_0x91a650(0x262)][_0x91a650(0x1b5)],this[_0x91a650(0x20a)]=this[_0x91a650(0x262)]['height'];},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['createGraphicSprite']=function(){const _0x1c77f0=_0x105b2f,_0x55e9f6=new Sprite();_0x55e9f6[_0x1c77f0(0x26e)]['x']=this[_0x1c77f0(0x26e)]['x'],_0x55e9f6[_0x1c77f0(0x26e)]['y']=this[_0x1c77f0(0x26e)]['y'],this['_graphicSprite']=_0x55e9f6,this[_0x1c77f0(0x2a4)](this[_0x1c77f0(0x1fb)]),this[_0x1c77f0(0x1c5)]();},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x264)]=function(){const _0x3d9025=_0x105b2f;if(!Window_OTB_TurnOrder['Settings']['ShowMarkerBorder'])return;const _0x52287c=Window_OTB_TurnOrder[_0x3d9025(0x220)],_0x31ebb2=this[_0x3d9025(0x19e)](),_0x258812=_0x3d9025(0x130)[_0x3d9025(0x16d)](_0x31ebb2),_0x4af287=new Sprite();_0x4af287[_0x3d9025(0x26e)]['x']=this[_0x3d9025(0x26e)]['x'],_0x4af287[_0x3d9025(0x26e)]['y']=this['anchor']['y'];if(_0x52287c[_0x258812])_0x4af287[_0x3d9025(0x20c)]=ImageManager[_0x3d9025(0x166)](_0x52287c[_0x258812]);else{let _0x676d50=this[_0x3d9025(0x147)](),_0x35f2a3=this[_0x3d9025(0x141)](),_0xc91fc3=this[_0x3d9025(0xc4)]();_0x4af287['bitmap']=new Bitmap(_0x676d50,_0x35f2a3);const _0x3d615f=_0x3d9025(0xff),_0x3e8109=ColorManager['getColor'](_0x52287c[_0x3d9025(0x9b)[_0x3d9025(0x16d)](_0x31ebb2)]);_0x4af287[_0x3d9025(0x20c)][_0x3d9025(0x110)](0x0,0x0,_0x676d50,_0x35f2a3,_0x3d615f),_0x676d50-=0x2,_0x35f2a3-=0x2,_0x4af287['bitmap'][_0x3d9025(0x110)](0x1,0x1,_0x676d50,_0x35f2a3,_0x3e8109),_0x676d50-=_0xc91fc3*0x2,_0x35f2a3-=_0xc91fc3*0x2,_0x4af287[_0x3d9025(0x20c)]['fillRect'](0x1+_0xc91fc3,0x1+_0xc91fc3,_0x676d50,_0x35f2a3,_0x3d615f),_0x676d50-=0x2,_0x35f2a3-=0x2,_0xc91fc3+=0x1,_0x4af287[_0x3d9025(0x20c)]['clearRect'](0x1+_0xc91fc3,0x1+_0xc91fc3,_0x676d50,_0x35f2a3);}this[_0x3d9025(0x262)]=_0x4af287,this[_0x3d9025(0x2a4)](this['_backgroundSprite']);},Sprite_OTB_TurnOrder_Battler['prototype']['getBorderThickness']=function(){const _0x2f3684=_0x105b2f,_0x43d5fa=Window_OTB_TurnOrder[_0x2f3684(0x220)];return _0x43d5fa['BorderThickness'];},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x289)]=function(){const _0xaf4f0b=_0x105b2f,_0x172130=Window_OTB_TurnOrder['Settings'];if(!_0x172130['EnemyBattlerDrawLetter'])return;if(this[_0xaf4f0b(0x1d2)]===$gameParty)return;const _0x125be7=this[_0xaf4f0b(0x147)](),_0x1faebb=this[_0xaf4f0b(0x141)](),_0xd7ee10=new Sprite();_0xd7ee10[_0xaf4f0b(0x26e)]['x']=this[_0xaf4f0b(0x26e)]['x'],_0xd7ee10['anchor']['y']=this[_0xaf4f0b(0x26e)]['y'],_0xd7ee10[_0xaf4f0b(0x20c)]=new Bitmap(_0x125be7,_0x1faebb),this[_0xaf4f0b(0x15d)]=_0xd7ee10,this[_0xaf4f0b(0x2a4)](this[_0xaf4f0b(0x15d)]);},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x129)]=function(){const _0x349080=_0x105b2f;return this[_0x349080(0x1d2)]?this[_0x349080(0x1d2)]['members']()[this[_0x349080(0x22a)]]:null;},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x274)]=function(){const _0x86ab48=_0x105b2f;Sprite_Clickable[_0x86ab48(0x271)][_0x86ab48(0x274)][_0x86ab48(0x1a5)](this),this[_0x86ab48(0x1f3)](),this[_0x86ab48(0x1c0)](),this[_0x86ab48(0x180)](),this[_0x86ab48(0x24d)](),this[_0x86ab48(0x221)](),this[_0x86ab48(0x288)](),this['updateSelectionEffect']();},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x27b)]=function(_0x2e3e4d,_0x2a2699){const _0x2ef3b1=_0x105b2f,_0x3f6b=Window_OTB_TurnOrder[_0x2ef3b1(0x220)];this[_0x2ef3b1(0xee)]=_0x3f6b[_0x2ef3b1(0x1b1)],this['_positionTargetX']=_0x2e3e4d,this[_0x2ef3b1(0x1cc)]=_0x2a2699;},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x1f3)]=function(){const _0x2788bf=_0x105b2f;if(this[_0x2788bf(0xee)]>0x0){const _0x2857b4=this[_0x2788bf(0xee)];this['x']=(this['x']*(_0x2857b4-0x1)+this['_positionTargetX'])/_0x2857b4,this['y']=(this['y']*(_0x2857b4-0x1)+this[_0x2788bf(0x1cc)])/_0x2857b4,this[_0x2788bf(0xee)]--;}if(this[_0x2788bf(0xee)]<=0x0){this['x']=this[_0x2788bf(0x113)],this['y']=this[_0x2788bf(0x1cc)];if(this['opacity']<0xff&&!this['_isBattleOver']&&this['_fadeDuration']<=0x0){const _0x533b61=this[_0x2788bf(0x129)]();_0x533b61&&(this[_0x2788bf(0x169)]=_0x533b61[_0x2788bf(0xba)]()&&_0x533b61[_0x2788bf(0x16f)]()?0xff:0x0);}}},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x263)]=function(){return 0x1;},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x9d)]=function(){const _0x81d023=_0x105b2f;return SceneManager[_0x81d023(0xb2)][_0x81d023(0x28a)];},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0xdb)]=function(){const _0x2218e7=_0x105b2f,_0x207e8b=this['battler']();if(!_0x207e8b)return this[_0x2218e7(0x263)]();if(_0x207e8b===BattleManager[_0x2218e7(0x210)])return 0x0;if(BattleManager[_0x2218e7(0x190)][_0x2218e7(0x1de)](_0x207e8b)){const _0x5f2fb8=BattleManager[_0x2218e7(0x190)][_0x2218e7(0xb9)](_0x207e8b)+0x1;return _0x5f2fb8;}return this[_0x2218e7(0x263)]();},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x24f)]=function(_0x55c381){const _0x18c70a=_0x105b2f,_0x6c5eda=Window_OTB_TurnOrder[_0x18c70a(0x220)];this[_0x18c70a(0x202)]=_0x6c5eda[_0x18c70a(0x1b1)],this[_0x18c70a(0x169)]=_0x55c381;},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['checkOpacity']=function(){const _0x44af43=_0x105b2f,_0x571405=this[_0x44af43(0x129)]();if(!_0x571405)return;if(this['_isAlive']===_0x571405[_0x44af43(0xba)]()&&this[_0x44af43(0xde)]===_0x571405[_0x44af43(0x16f)]())return;this[_0x44af43(0x267)]=_0x571405[_0x44af43(0xba)](),this[_0x44af43(0xde)]=_0x571405[_0x44af43(0x16f)]();let _0x4e7a00=this[_0x44af43(0x267)]&&this['_isAppeared']?0xff:0x0;this['startFade'](_0x4e7a00);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x180)]=function(){const _0x2f7f4e=_0x105b2f;if(this['_fadeDuration']>0x0){const _0x5c7bcc=this['_fadeDuration'];this['opacity']=(this['opacity']*(_0x5c7bcc-0x1)+this[_0x2f7f4e(0x169)])/_0x5c7bcc,this[_0x2f7f4e(0x202)]--,this[_0x2f7f4e(0x202)]<=0x0&&(this['opacity']=this[_0x2f7f4e(0x169)]);}if(this[_0x2f7f4e(0x27c)])return;BattleManager['_phase']===_0x2f7f4e(0xdd)&&(this[_0x2f7f4e(0x27c)]=!![],this[_0x2f7f4e(0x24f)](0x0));},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x24d)]=function(){const _0x6b73fe=_0x105b2f,_0x5f38ed=this[_0x6b73fe(0x129)]();if(!_0x5f38ed)return;const _0x33ab13=Window_OTB_TurnOrder['Settings'],_0x40e5f3=this[_0x6b73fe(0x1d2)]===$gameParty?_0x6b73fe(0xa7):_0x6b73fe(0x1fd);let _0x4a74c6=_0x5f38ed[_0x6b73fe(0x14f)]();if(_0x5f38ed['isActor']()&&_0x4a74c6==='enemy')_0x4a74c6=_0x6b73fe(0xb5);else _0x5f38ed[_0x6b73fe(0x296)]()&&_0x4a74c6===_0x6b73fe(0x260)&&(_0x4a74c6=_0x6b73fe(0x181));if(this[_0x6b73fe(0x207)]!==_0x4a74c6)return this[_0x6b73fe(0x1c5)]();switch(this[_0x6b73fe(0x207)]){case _0x6b73fe(0xb5):if(this[_0x6b73fe(0x23b)]!==_0x5f38ed[_0x6b73fe(0x1f9)]())return this[_0x6b73fe(0x1c5)]();if(this[_0x6b73fe(0x7b)]!==_0x5f38ed[_0x6b73fe(0x1d0)]())return this[_0x6b73fe(0x1c5)]();break;case _0x6b73fe(0x18d):if(this[_0x6b73fe(0x25b)]!==_0x5f38ed['TurnOrderOTBGraphicIconIndex']())return this[_0x6b73fe(0x1c5)]();break;case'enemy':if(_0x5f38ed['hasSvBattler']()){if(this[_0x6b73fe(0x21d)]!==_0x5f38ed['svBattlerName']())return this[_0x6b73fe(0x1c5)]();}else{if(this[_0x6b73fe(0x280)]!==_0x5f38ed[_0x6b73fe(0xcf)]())return this[_0x6b73fe(0x1c5)]();}break;case _0x6b73fe(0x260):if(_0x5f38ed['isActor']()){if(this['_graphicSv']!==_0x5f38ed[_0x6b73fe(0xcf)]())return this['processUpdateGraphic']();}else{if(this[_0x6b73fe(0x280)]!==_0x5f38ed[_0x6b73fe(0xcf)]())return this[_0x6b73fe(0x1c5)]();}break;}},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x1c5)]=function(){const _0x30cb53=_0x105b2f,_0x10eba0=this['battler']();if(!_0x10eba0)return;this[_0x30cb53(0x207)]=_0x10eba0['TurnOrderOTBGraphicType']();if(_0x10eba0[_0x30cb53(0x240)]()&&this[_0x30cb53(0x207)]===_0x30cb53(0x181))this[_0x30cb53(0x207)]='face';else _0x10eba0['isEnemy']()&&this[_0x30cb53(0x207)]===_0x30cb53(0x260)&&(this[_0x30cb53(0x207)]=_0x30cb53(0x181));let _0x4a8f8f;switch(this[_0x30cb53(0x207)]){case _0x30cb53(0xb5):this[_0x30cb53(0x23b)]=_0x10eba0[_0x30cb53(0x1f9)](),this[_0x30cb53(0x7b)]=_0x10eba0[_0x30cb53(0x1d0)](),_0x4a8f8f=ImageManager[_0x30cb53(0xbd)](this['_graphicFaceName']),_0x4a8f8f[_0x30cb53(0x2a5)](this[_0x30cb53(0x1ed)][_0x30cb53(0x10e)](this,_0x4a8f8f));break;case _0x30cb53(0x18d):this[_0x30cb53(0x25b)]=_0x10eba0[_0x30cb53(0x28f)](),_0x4a8f8f=ImageManager[_0x30cb53(0x166)](_0x30cb53(0x144)),_0x4a8f8f['addLoadListener'](this['changeIconGraphicBitmap']['bind'](this,_0x4a8f8f));break;case _0x30cb53(0x181):if(_0x10eba0['hasSvBattler']())this['_graphicSv']=_0x10eba0[_0x30cb53(0x13d)](),_0x4a8f8f=ImageManager[_0x30cb53(0xa5)](this[_0x30cb53(0x21d)]),_0x4a8f8f['addLoadListener'](this[_0x30cb53(0x188)][_0x30cb53(0x10e)](this,_0x4a8f8f));else $gameSystem[_0x30cb53(0x1fc)]()?(this[_0x30cb53(0x280)]=_0x10eba0[_0x30cb53(0xcf)](),_0x4a8f8f=ImageManager['loadSvEnemy'](this[_0x30cb53(0x280)]),_0x4a8f8f[_0x30cb53(0x2a5)](this[_0x30cb53(0x98)]['bind'](this,_0x4a8f8f))):(this['_graphicEnemy']=_0x10eba0[_0x30cb53(0xcf)](),_0x4a8f8f=ImageManager[_0x30cb53(0xf2)](this[_0x30cb53(0x280)]),_0x4a8f8f[_0x30cb53(0x2a5)](this[_0x30cb53(0x98)][_0x30cb53(0x10e)](this,_0x4a8f8f)));break;case'svactor':this[_0x30cb53(0x21d)]=_0x10eba0[_0x30cb53(0xcf)](),_0x4a8f8f=ImageManager[_0x30cb53(0xa5)](this['_graphicSv']),_0x4a8f8f['addLoadListener'](this[_0x30cb53(0x188)][_0x30cb53(0x10e)](this,_0x4a8f8f));break;}},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x1ed)]=function(_0x276e77){const _0x5cfef8=_0x105b2f,_0x8aca89=this[_0x5cfef8(0x7b)],_0x3830a1=this['bitmapWidth'](),_0x48bbde=this['bitmapHeight'](),_0x485079=Math['max'](_0x3830a1,_0x48bbde);this['_graphicSprite']['bitmap']=new Bitmap(_0x3830a1,_0x48bbde);const _0xe6bca6=this['_graphicSprite']['bitmap'],_0x41f537=ImageManager[_0x5cfef8(0x1ff)],_0x107514=ImageManager['faceHeight'],_0x676088=_0x485079/Math[_0x5cfef8(0x255)](_0x41f537,_0x107514),_0x473d2b=ImageManager[_0x5cfef8(0x1ff)],_0x42272e=ImageManager[_0x5cfef8(0x148)],_0xdf242c=_0x8aca89%0x4*_0x41f537+(_0x41f537-_0x473d2b)/0x2,_0x4627fe=Math[_0x5cfef8(0x1df)](_0x8aca89/0x4)*_0x107514+(_0x107514-_0x42272e)/0x2,_0x42da5b=(_0x3830a1-_0x41f537*_0x676088)/0x2,_0x138df8=(_0x48bbde-_0x107514*_0x676088)/0x2;_0xe6bca6[_0x5cfef8(0xae)](_0x276e77,_0xdf242c,_0x4627fe,_0x473d2b,_0x42272e,_0x42da5b,_0x138df8,_0x485079,_0x485079);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['changeIconGraphicBitmap']=function(_0x30b918){const _0x58788e=_0x105b2f,_0x4b7db6=this[_0x58788e(0x25b)],_0x3676b5=this[_0x58788e(0x147)](),_0x73750d=this[_0x58788e(0x141)]();this[_0x58788e(0x1fb)][_0x58788e(0x20c)]=new Bitmap(_0x3676b5,_0x73750d);const _0x1985be=this[_0x58788e(0x1fb)][_0x58788e(0x20c)],_0x16e037=ImageManager[_0x58788e(0x134)],_0x2f6c83=ImageManager[_0x58788e(0x23f)],_0x53a65f=Math[_0x58788e(0x1f8)](_0x16e037,_0x2f6c83,_0x3676b5,_0x73750d),_0x279b57=_0x4b7db6%0x10*_0x16e037,_0x2128a0=Math[_0x58788e(0x1df)](_0x4b7db6/0x10)*_0x2f6c83,_0x16a2e8=Math[_0x58788e(0x1df)](Math['max'](_0x3676b5-_0x53a65f,0x0)/0x2),_0x5031be=Math[_0x58788e(0x1df)](Math['max'](_0x73750d-_0x53a65f,0x0)/0x2);_0x1985be[_0x58788e(0xae)](_0x30b918,_0x279b57,_0x2128a0,_0x16e037,_0x2f6c83,_0x16a2e8,_0x5031be,_0x53a65f,_0x53a65f);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['changeSvActorGraphicBitmap']=function(_0x3baa82){const _0x5b8e95=_0x105b2f,_0x2beb66=this[_0x5b8e95(0x147)](),_0x584192=this[_0x5b8e95(0x141)](),_0x314f11=Math[_0x5b8e95(0x1f8)](_0x2beb66,_0x584192);this['_graphicSprite'][_0x5b8e95(0x20c)]=new Bitmap(_0x2beb66,_0x584192);const _0x5423b4=this[_0x5b8e95(0x1fb)][_0x5b8e95(0x20c)],_0x8ff46d=this['_graphicSv'][_0x5b8e95(0x1e7)](/\$/i),_0x10a78a=_0x8ff46d?0x1:ImageManager[_0x5b8e95(0x1bc)],_0xc07cca=_0x8ff46d?0x1:ImageManager['svActorVertCells'],_0x3b49fb=_0x3baa82[_0x5b8e95(0x1b5)]/_0x10a78a,_0x1ba09b=_0x3baa82[_0x5b8e95(0x20a)]/_0xc07cca,_0x226c89=Math[_0x5b8e95(0x1f8)](0x1,_0x314f11/_0x3b49fb,_0x314f11/_0x1ba09b),_0x24c01f=_0x3b49fb*_0x226c89,_0x35acc4=_0x1ba09b*_0x226c89,_0x4ef4c1=Math[_0x5b8e95(0x1e0)]((_0x2beb66-_0x24c01f)/0x2),_0x196257=Math[_0x5b8e95(0x1e0)]((_0x584192-_0x35acc4)/0x2);_0x5423b4[_0x5b8e95(0xae)](_0x3baa82,0x0,0x0,_0x3b49fb,_0x1ba09b,_0x4ef4c1,_0x196257,_0x24c01f,_0x35acc4);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x98)]=function(_0x2cd6ac){const _0x237491=_0x105b2f,_0x34886d=Window_OTB_TurnOrder[_0x237491(0x220)],_0x540a51=this['bitmapWidth'](),_0x426c29=this['bitmapHeight'](),_0x102e3a=Math[_0x237491(0x1f8)](_0x540a51,_0x426c29);this[_0x237491(0x1fb)][_0x237491(0x20c)]=new Bitmap(_0x540a51,_0x426c29);const _0x2c85d4=this[_0x237491(0x1fb)][_0x237491(0x20c)],_0x1e8210=Math[_0x237491(0x1f8)](0x1,_0x102e3a/_0x2cd6ac['width'],_0x102e3a/_0x2cd6ac[_0x237491(0x20a)]),_0x48bb56=_0x2cd6ac[_0x237491(0x1b5)]*_0x1e8210,_0x5160e0=_0x2cd6ac[_0x237491(0x20a)]*_0x1e8210,_0x4ad6a8=Math['round']((_0x540a51-_0x48bb56)/0x2),_0x28dbf5=Math['round']((_0x426c29-_0x5160e0)/0x2);_0x2c85d4['blt'](_0x2cd6ac,0x0,0x0,_0x2cd6ac[_0x237491(0x1b5)],_0x2cd6ac['height'],_0x4ad6a8,_0x28dbf5,_0x48bb56,_0x5160e0);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x221)]=function(){const _0x5e8ddc=_0x105b2f,_0x2019b4=this[_0x5e8ddc(0x129)]();if(!_0x2019b4)return;if(!_0x2019b4[_0x5e8ddc(0x296)]())return;if(this['_graphicHue']===_0x2019b4[_0x5e8ddc(0x15f)]())return;this['_graphicHue']=_0x2019b4[_0x5e8ddc(0x15f)](),this[_0x5e8ddc(0x1fb)][_0x5e8ddc(0x85)](_0x2019b4[_0x5e8ddc(0x23d)]()?0x0:this[_0x5e8ddc(0x1d3)]);},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x288)]=function(){const _0x26b1d4=_0x105b2f;if(!this[_0x26b1d4(0x15d)])return;const _0x3df6c3=this['battler']();if(!_0x3df6c3)return;if(this[_0x26b1d4(0x1fe)]===_0x3df6c3[_0x26b1d4(0x1fe)]&&this['_plural']===_0x3df6c3[_0x26b1d4(0xa9)])return;this[_0x26b1d4(0x1fe)]=_0x3df6c3[_0x26b1d4(0x1fe)],this[_0x26b1d4(0xa9)]=_0x3df6c3[_0x26b1d4(0xa9)];const _0x4a970e=Window_OTB_TurnOrder[_0x26b1d4(0x220)],_0x279d6d=this[_0x26b1d4(0x147)](),_0x2ab28c=this[_0x26b1d4(0x141)](),_0x402ff9=this[_0x26b1d4(0x15d)][_0x26b1d4(0x20c)];_0x402ff9['clear']();if(!this['_plural'])return;_0x402ff9[_0x26b1d4(0x2ab)]=_0x4a970e[_0x26b1d4(0x243)]||$gameSystem[_0x26b1d4(0x213)](),_0x402ff9[_0x26b1d4(0x235)]=_0x4a970e[_0x26b1d4(0x10f)]||0x10,_0x4a970e[_0x26b1d4(0x162)]?_0x402ff9[_0x26b1d4(0x227)](this[_0x26b1d4(0x1fe)][_0x26b1d4(0x23e)](),_0x279d6d*0x1/0x8,_0x2ab28c/0x2,_0x279d6d,_0x2ab28c/0x2,_0x26b1d4(0x106)):_0x402ff9[_0x26b1d4(0x227)](this[_0x26b1d4(0x1fe)][_0x26b1d4(0x23e)](),0x0,_0x2ab28c/0x2,_0x279d6d*0x7/0x8,_0x2ab28c/0x2,_0x26b1d4(0xe5));},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['updateSelectionEffect']=function(){const _0x110412=_0x105b2f,_0xfa34ab=this[_0x110412(0x129)]();if(!_0xfa34ab)return;const _0x5af11e=_0xfa34ab[_0x110412(0x129)]();if(!_0x5af11e)return;const _0x18d665=_0x5af11e[_0x110412(0x8d)]();if(!_0x18d665)return;this['setBlendColor'](_0x18d665[_0x110412(0x8e)]);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0xc2)]=function(){return null;},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)]['changeSourceArray']=function(_0x3800f0){const _0x58fff7=_0x105b2f;this[_0x58fff7(0x14d)]=_0x3800f0,this['calculateTargetPositions'](),this[_0x58fff7(0x14d)]===null&&(this[_0x58fff7(0xc6)]=-0x1);},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x1f5)]=function(){const _0x401fc8=_0x105b2f,_0x482d24=this['containerWindow']();if(!_0x482d24)return;const _0x163c58=Window_OTB_TurnOrder[_0x401fc8(0x220)],_0xbc593c=_0x163c58[_0x401fc8(0x162)],_0x2438c7=this[_0x401fc8(0x14d)]===_0x482d24[_0x401fc8(0xf1)]?!![]:![],_0x201bec=this[_0x401fc8(0xc6)]===-0x1&&BattleManager[_0x401fc8(0x210)]===this[_0x401fc8(0x129)](),_0x57bf79=_0x482d24['_spriteGroupWidth']-_0x163c58[_0x401fc8(0x245)];let _0x514290=Math['ceil'](_0x57bf79/(this[_0x401fc8(0x14d)][_0x401fc8(0x22b)]-0x1||0x1));_0x514290=Math[_0x401fc8(0x1f8)](_0x163c58[_0x401fc8(0x245)],_0x514290);let _0x5e1268=0x0,_0x4d87c3=0x0,_0x4c7f1b=_0x201bec?-0x1:this[_0x401fc8(0x14d)]['indexOf'](this);!_0x201bec&&(_0x4c7f1b=this[_0x401fc8(0x29f)]());if(_0x201bec)_0x5e1268=_0x482d24[_0x401fc8(0xce)];else _0xbc593c?(_0x5e1268=(_0x2438c7?_0x482d24[_0x401fc8(0x154)]:_0x482d24['_currentX'])+_0x57bf79,_0x5e1268-=_0x4c7f1b*_0x514290):(_0x5e1268=_0x2438c7?_0x482d24[_0x401fc8(0x154)]:_0x482d24[_0x401fc8(0x19c)],_0x5e1268+=_0x4c7f1b*_0x514290);_0x5e1268+=this['additionalTargetXAdjustments'](_0x4c7f1b,_0x163c58[_0x401fc8(0x245)]-_0x514290),!_0x201bec&&_0x4c7f1b<0x0&&(_0x5e1268=this['x'],_0x4d87c3=this['y'],this[_0x401fc8(0x24f)](0x0)),this[_0x401fc8(0x27b)](_0x5e1268,_0x4d87c3);},Sprite_OTB_TurnOrder_Battler['prototype'][_0x105b2f(0x175)]=function(_0x31fe5e,_0x76d9b6){return 0x0;},Sprite_OTB_TurnOrder_Battler[_0x105b2f(0x271)][_0x105b2f(0x29f)]=function(){const _0xe93d85=_0x105b2f,_0xa229f3=this[_0xe93d85(0x9d)]();if(!_0xa229f3)return 0x0;const _0x2915c0=this[_0xe93d85(0x14d)]===_0xa229f3[_0xe93d85(0xf1)]?!![]:![],_0x2db12b=_0x2915c0?BattleManager[_0xe93d85(0x24a)]:BattleManager[_0xe93d85(0x190)],_0x47c4f0=this[_0xe93d85(0x129)](),_0x157503=VisuMZ[_0xe93d85(0x1ca)]['GetAllIndicies'](_0x47c4f0,_0x2db12b);return _0x157503[this[_0xe93d85(0xc6)]]??_0x157503[_0x157503[_0xe93d85(0x22b)]-0x1]??-0x1;};function Sprite_OTB_TurnOrder_Preview(){this['initialize'](...arguments);}Sprite_OTB_TurnOrder_Preview['prototype']=Object[_0x105b2f(0x90)](Sprite_OTB_TurnOrder_Battler['prototype']),Sprite_OTB_TurnOrder_Preview['prototype'][_0x105b2f(0x132)]=Sprite_OTB_TurnOrder_Preview,Sprite_OTB_TurnOrder_Preview['prototype'][_0x105b2f(0x80)]=function(_0x4d4892,_0x47e93f,_0x5415b8,_0x488a91){const _0x545eee=_0x105b2f;this['_offset']=_0x488a91,Sprite_OTB_TurnOrder_Battler[_0x545eee(0x271)][_0x545eee(0x80)][_0x545eee(0x1a5)](this,_0x4d4892,_0x47e93f,_0x5415b8),this[_0x545eee(0x111)]();},Sprite_OTB_TurnOrder_Preview[_0x105b2f(0x271)]['adjustForPreview']=function(){const _0x2d205a=_0x105b2f,_0x10fc52=Window_OTB_TurnOrder[_0x2d205a(0x220)];this[_0x2d205a(0x195)]['x']=this[_0x2d205a(0x195)]['y']=_0x10fc52[_0x2d205a(0x224)];},Sprite_OTB_TurnOrder_Preview[_0x105b2f(0x271)][_0x105b2f(0x19e)]=function(){const _0x2129f0=_0x105b2f;return this[_0x2129f0(0x1d2)]===$gameParty?_0x2129f0(0xad):_0x2129f0(0x1a0);},Sprite_OTB_TurnOrder_Preview['prototype'][_0x105b2f(0xc4)]=function(){const _0x43b6c3=_0x105b2f,_0x3afa89=Window_OTB_TurnOrder[_0x43b6c3(0x220)];return Math[_0x43b6c3(0x94)](_0x3afa89[_0x43b6c3(0x248)]/(_0x3afa89[_0x43b6c3(0x224)]||0.01));},Sprite_OTB_TurnOrder_Preview['prototype'][_0x105b2f(0x27b)]=function(_0xe4eaf2,_0x67db32){const _0x2db0ff=_0x105b2f;Sprite_OTB_TurnOrder_Battler[_0x2db0ff(0x271)][_0x2db0ff(0x27b)][_0x2db0ff(0x1a5)](this,_0xe4eaf2,_0x67db32),this['x']=this[_0x2db0ff(0x113)],this['y']=this['_positionTargetY'];},Sprite_OTB_TurnOrder_Preview['prototype'][_0x105b2f(0x24f)]=function(_0x31e1b2){const _0x59afb5=_0x105b2f;Sprite_OTB_TurnOrder_Battler[_0x59afb5(0x271)]['startFade']['call'](this,_0x31e1b2),_0x31e1b2>0x0?this[_0x59afb5(0x202)]=0x1:(this['_fadeDuration']/=0x2,this[_0x59afb5(0x202)]=Math[_0x59afb5(0x1df)](this[_0x59afb5(0x202)]));},Sprite_OTB_TurnOrder_Preview['prototype']['additionalTargetXAdjustments']=function(_0x2cdbc4,_0x165983){const _0xf74f8b=_0x105b2f,_0x381910=Window_OTB_TurnOrder['Settings'];if(_0x2cdbc4>0x0){if(this['_offset']>0x0)return _0x381910[_0xf74f8b(0x162)]?-_0x381910[_0xf74f8b(0x245)]:_0x381910[_0xf74f8b(0x245)];else{if(this['_offset']<0x0)return _0x381910[_0xf74f8b(0x162)]?-_0x165983:_0x165983;}}return 0x0;},Sprite_OTB_TurnOrder_Preview[_0x105b2f(0x271)]['calculateTargetIndex']=function(){const _0x4ac900=_0x105b2f,_0x301aac=this[_0x4ac900(0x9d)](),_0x59f637=this['_sourceArray']===_0x301aac['_nextTurn']?!![]:![],_0x302027=_0x59f637?BattleManager[_0x4ac900(0x24a)]:BattleManager[_0x4ac900(0x190)];let _0x549247=0x0,_0x5838a2=_0x302027['length']-0x1;_0x59f637&&(_0x549247=Math[_0x4ac900(0x255)](0x0,VisuMZ[_0x4ac900(0x1ca)][_0x4ac900(0x16e)](_0x302027)));let _0x5683a8=Sprite_OTB_TurnOrder_Battler[_0x4ac900(0x271)]['calculateTargetIndex']['call'](this);return _0x5683a8+=this[_0x4ac900(0x158)],_0x5683a8[_0x4ac900(0x284)](_0x549247,_0x5838a2);},Sprite_OTB_TurnOrder_Preview[_0x105b2f(0x271)][_0x105b2f(0x17f)]=function(){},Window_Selectable['prototype']['isBattleItemWindowOTB']=function(){return![];},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x1f4)]=Window_Selectable[_0x105b2f(0x271)][_0x105b2f(0x291)],Window_Selectable[_0x105b2f(0x271)][_0x105b2f(0x291)]=function(_0x194d20){const _0xb42ccd=_0x105b2f;VisuMZ[_0xb42ccd(0x1ca)][_0xb42ccd(0x1f4)][_0xb42ccd(0x1a5)](this,_0x194d20),this[_0xb42ccd(0x252)]()&&this[_0xb42ccd(0x2a1)]&&this[_0xb42ccd(0x23c)]();},Window_Selectable[_0x105b2f(0x271)][_0x105b2f(0x23c)]=function(){const _0x25ec71=_0x105b2f;BattleManager[_0x25ec71(0x1d6)]();},VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x217)]=Window_Help[_0x105b2f(0x271)][_0x105b2f(0xfa)],Window_Help[_0x105b2f(0x271)][_0x105b2f(0xfa)]=function(_0x156cbf){const _0x8e3106=_0x105b2f;BattleManager['isOTB']()&&_0x156cbf&&_0x156cbf['note']&&_0x156cbf[_0x8e3106(0xb0)]['match'](/<(?:OTB) HELP>\s*([\s\S]*)\s*<\/(?:OTB) HELP>/i)?this[_0x8e3106(0x2ad)](String(RegExp['$1'])):VisuMZ['BattleSystemOTB']['Window_Help_setItem']['call'](this,_0x156cbf);},Window_ActorCommand['prototype'][_0x105b2f(0x252)]=function(){const _0x32a6ae=_0x105b2f;return BattleManager[_0x32a6ae(0x185)]();},Window_ActorCommand[_0x105b2f(0x271)][_0x105b2f(0x23c)]=function(){const _0x491f9a=_0x105b2f,_0x124cfa=BattleManager[_0x491f9a(0x1bf)]();if(_0x124cfa){const _0x1e9d22=this[_0x491f9a(0x212)]();switch(_0x1e9d22){case'attack':_0x124cfa['setAttack']();break;case _0x491f9a(0x237):_0x124cfa[_0x491f9a(0x107)]();break;case _0x491f9a(0x163):_0x124cfa[_0x491f9a(0x120)](this['currentExt']());break;default:_0x124cfa[_0x491f9a(0x120)](null);break;}}Window_Command[_0x491f9a(0x271)][_0x491f9a(0x23c)][_0x491f9a(0x1a5)](this);},Window_BattleSkill['prototype'][_0x105b2f(0x252)]=function(){return BattleManager['isOTB']();},Window_BattleSkill[_0x105b2f(0x271)]['applyBattleItemWindowOTB']=function(){const _0x35e2d=_0x105b2f,_0x31a2b0=this[_0x35e2d(0x7c)](),_0x4bcb92=BattleManager[_0x35e2d(0x1bf)]();if(_0x4bcb92)_0x4bcb92['setSkill'](_0x31a2b0?_0x31a2b0['id']:null);Window_SkillList[_0x35e2d(0x271)][_0x35e2d(0x23c)]['call'](this);},Window_BattleItem[_0x105b2f(0x271)][_0x105b2f(0x252)]=function(){return BattleManager['isOTB']();},Window_BattleItem[_0x105b2f(0x271)][_0x105b2f(0x23c)]=function(){const _0x261418=_0x105b2f,_0x59f777=this[_0x261418(0x7c)](),_0x162440=BattleManager[_0x261418(0x1bf)]();if(_0x162440)_0x162440[_0x261418(0xfa)](_0x59f777?_0x59f777['id']:null);Window_ItemList[_0x261418(0x271)][_0x261418(0x23c)]['call'](this);},Window_BattleActor[_0x105b2f(0x271)][_0x105b2f(0x252)]=function(){const _0x58154b=_0x105b2f;return BattleManager[_0x58154b(0x185)]();},Window_BattleEnemy['prototype'][_0x105b2f(0x252)]=function(){const _0x3d539b=_0x105b2f;return BattleManager[_0x3d539b(0x185)]();};function Window_OTB_TurnOrder(){this['initialize'](...arguments);}Window_OTB_TurnOrder['prototype']=Object[_0x105b2f(0x90)](Window_Base[_0x105b2f(0x271)]),Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x132)]=Window_OTB_TurnOrder,Window_OTB_TurnOrder[_0x105b2f(0x220)]=VisuMZ[_0x105b2f(0x1ca)][_0x105b2f(0x220)][_0x105b2f(0x25e)],Window_OTB_TurnOrder[_0x105b2f(0x271)]['initialize']=function(){const _0x3cddc6=_0x105b2f,_0x1a351f=this[_0x3cddc6(0x104)]();this[_0x3cddc6(0xcc)](_0x1a351f),Window_Base[_0x3cddc6(0x271)][_0x3cddc6(0x80)][_0x3cddc6(0x1a5)](this,_0x1a351f),this[_0x3cddc6(0x9a)]=0x0,this[_0x3cddc6(0x11d)](),this['drawUiText'](),this[_0x3cddc6(0x143)](),this['updateVisibility']();},Window_OTB_TurnOrder[_0x105b2f(0x271)]['windowRect']=function(){const _0x3ef49b=_0x105b2f,_0x4534a0=Window_OTB_TurnOrder[_0x3ef49b(0x220)],_0x3f2517=SceneManager['_scene'][_0x3ef49b(0x18c)]['height'];let _0x5a0e01=Graphics[_0x3ef49b(0x1b5)]-_0x4534a0[_0x3ef49b(0x229)]*0x2,_0x34aac1=_0x4534a0[_0x3ef49b(0x1a9)]+this[_0x3ef49b(0x7e)](),_0x3edcab=_0x4534a0['ScreenBuffer'],_0x5893de=0x0;switch(_0x4534a0['DisplayPosition']){case _0x3ef49b(0x250):_0x5893de=Graphics['height']-_0x3f2517-_0x4534a0[_0x3ef49b(0x229)]-_0x34aac1;break;default:_0x5893de=_0x4534a0['ScreenBuffer'];break;}if(Imported[_0x3ef49b(0x204)]&&BattleManager['isUsingSideviewUiLayout']()){const _0x5b4637=VisuMZ[_0x3ef49b(0x1bd)][_0x3ef49b(0x220)][_0x3ef49b(0x1cd)];_0x5a0e01-=_0x5b4637[_0x3ef49b(0x133)]+_0x5b4637[_0x3ef49b(0x19b)],_0x5a0e01-=_0x4534a0[_0x3ef49b(0x229)];}return _0x3edcab+=_0x4534a0[_0x3ef49b(0x1e9)]||0x0,_0x5893de+=_0x4534a0[_0x3ef49b(0x216)]||0x0,new Rectangle(_0x3edcab,_0x5893de,_0x5a0e01,_0x34aac1);},Window_OTB_TurnOrder['prototype'][_0x105b2f(0xcc)]=function(_0x2e55b0){const _0x23df06=_0x105b2f;this[_0x23df06(0xd3)]=this[_0x23df06(0xdf)]=_0x2e55b0['x'],this['_targetHomeY']=this['_homeY']=_0x2e55b0['y'],this[_0x23df06(0x101)]=0x0;const _0x223a73=Window_OTB_TurnOrder[_0x23df06(0x220)];this['_spriteGroupWidth']=Math[_0x23df06(0x94)]((_0x2e55b0[_0x23df06(0x1b5)]-_0x223a73[_0x23df06(0x245)]-_0x223a73[_0x23df06(0x14b)]*0x2)/0x2),_0x223a73['OrderDirection']?(this[_0x23df06(0xce)]=_0x2e55b0[_0x23df06(0x1b5)]-_0x223a73[_0x23df06(0x245)],this[_0x23df06(0x19c)]=this[_0x23df06(0x109)]+_0x223a73[_0x23df06(0x14b)],this[_0x23df06(0x154)]=0x0):(this[_0x23df06(0xce)]=0x0,this[_0x23df06(0x19c)]=_0x223a73['SpriteThin']+_0x223a73['SubjectDistance'],this[_0x23df06(0x154)]=this[_0x23df06(0x19c)]+_0x223a73[_0x23df06(0x14b)]+this[_0x23df06(0x109)]);},Window_OTB_TurnOrder['prototype'][_0x105b2f(0x16b)]=function(){const _0x1da4f6=_0x105b2f;this[_0x1da4f6(0x29b)]=0x0;},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x11d)]=function(){const _0x4df696=_0x105b2f,_0x202ebe=Window_OTB_TurnOrder['Settings'];if(_0x202ebe['BgDimStyle']===_0x4df696(0xf0))return;if(_0x202ebe[_0x4df696(0x203)]===_0x4df696(0x29a)&&_0x202ebe[_0x4df696(0x128)]!==''){const _0x403057=ImageManager['loadSystem'](_0x202ebe[_0x4df696(0x128)]);_0x403057[_0x4df696(0x2a5)](this[_0x4df696(0x1f1)][_0x4df696(0x10e)](this,_0x403057));return;};const _0x348913=this[_0x4df696(0x96)],_0xa71276=ColorManager[_0x4df696(0xbe)](),_0x1330ca=ColorManager[_0x4df696(0xd9)](),_0x51c1b1=this['_subjectX'],_0x2e0f77=_0x202ebe[_0x4df696(0x245)],_0x406e58=0x0,_0x25f024=_0x202ebe[_0x4df696(0x1a9)],_0x4f2001=this[_0x4df696(0x19c)],_0x25c7d9=this[_0x4df696(0x154)],_0x33cb15=this['_spriteGroupWidth'];switch(_0x202ebe[_0x4df696(0x203)]){case'gradient':_0x202ebe[_0x4df696(0x162)]?(_0x348913[_0x4df696(0x11c)](_0x51c1b1,_0x406e58,_0x2e0f77/0x2,_0x25f024,_0x1330ca,_0xa71276,![]),_0x348913[_0x4df696(0x110)](_0x51c1b1+_0x2e0f77/0x2,_0x406e58,_0x2e0f77/0x2,_0x25f024,_0xa71276),_0x348913['gradientFillRect'](_0x4f2001,_0x406e58,_0x33cb15/0x2,_0x25f024,_0x1330ca,_0xa71276,![]),_0x348913['fillRect'](_0x4f2001+_0x33cb15/0x2,_0x406e58,_0x33cb15/0x2,_0x25f024,_0xa71276),_0x348913['gradientFillRect'](_0x25c7d9,_0x406e58,_0x33cb15/0x2,_0x25f024,_0x1330ca,_0xa71276,![]),_0x348913[_0x4df696(0x110)](_0x25c7d9+_0x33cb15/0x2,_0x406e58,_0x33cb15/0x2,_0x25f024,_0xa71276)):(_0x348913[_0x4df696(0x110)](_0x51c1b1,_0x406e58,_0x2e0f77/0x2,_0x25f024,_0xa71276),_0x348913['gradientFillRect'](_0x51c1b1+_0x2e0f77/0x2,_0x406e58,_0x2e0f77/0x2,_0x25f024,_0xa71276,_0x1330ca,![]),_0x348913[_0x4df696(0x110)](_0x4f2001,_0x406e58,_0x33cb15/0x2,_0x25f024,_0xa71276),_0x348913['gradientFillRect'](_0x4f2001+_0x33cb15/0x2,_0x406e58,_0x33cb15/0x2,_0x25f024,_0xa71276,_0x1330ca,![]),_0x348913[_0x4df696(0x110)](_0x25c7d9,_0x406e58,_0x33cb15/0x2,_0x25f024,_0xa71276),_0x348913['gradientFillRect'](_0x25c7d9+_0x33cb15/0x2,_0x406e58,_0x33cb15/0x2,_0x25f024,_0xa71276,_0x1330ca,![]));break;default:_0x348913[_0x4df696(0x110)](_0x51c1b1,_0x406e58,_0x2e0f77,_0x25f024,_0xa71276),_0x348913[_0x4df696(0x110)](_0x4f2001,_0x406e58,_0x33cb15,_0x25f024,_0xa71276),_0x348913['fillRect'](_0x25c7d9,_0x406e58,_0x33cb15,_0x25f024,_0xa71276);break;}},Window_OTB_TurnOrder['prototype'][_0x105b2f(0x1f1)]=function(_0x4db9e5){const _0x1d8d5c=_0x105b2f;this[_0x1d8d5c(0x1e1)]=new Sprite(),this[_0x1d8d5c(0x1e1)][_0x1d8d5c(0x20c)]=_0x4db9e5,this[_0x1d8d5c(0x19a)](this[_0x1d8d5c(0x1e1)]);const _0x5c414a=Window_OTB_TurnOrder[_0x1d8d5c(0x220)];this[_0x1d8d5c(0x1e1)]['x']=_0x5c414a[_0x1d8d5c(0x219)],this['_bgImageSprite']['y']=_0x5c414a[_0x1d8d5c(0x165)];},Window_OTB_TurnOrder[_0x105b2f(0x271)]['drawUiText']=function(){const _0x6d6754=_0x105b2f;this[_0x6d6754(0xb1)][_0x6d6754(0x26b)](),this[_0x6d6754(0x269)]();const _0x562a00=Window_OTB_TurnOrder[_0x6d6754(0x220)];this[_0x6d6754(0xb1)][_0x6d6754(0x235)]=_0x562a00[_0x6d6754(0x27a)];let _0x1c6d60=_0x562a00[_0x6d6754(0x2b0)];_0x1c6d60===_0x6d6754(0xf9)&&(_0x1c6d60=_0x562a00[_0x6d6754(0x162)]?_0x6d6754(0xe5):'left');let _0x7a6584=_0x562a00['SpriteLength'];if(_0x562a00['UiSubjectText']!==''){const _0x1fa335=this[_0x6d6754(0xce)]+_0x562a00['UiSubjectOffsetX'],_0x3a12ba=_0x7a6584+_0x562a00[_0x6d6754(0xfe)],_0x2b75f3=_0x562a00[_0x6d6754(0x245)];this['drawText'](_0x562a00[_0x6d6754(0xfc)],_0x1fa335,_0x3a12ba,_0x2b75f3,_0x6d6754(0x121));}if(_0x562a00[_0x6d6754(0xb3)]!==''){const _0x4fb3ce=this[_0x6d6754(0x19c)]+_0x562a00[_0x6d6754(0x1c3)],_0x25c7b7=_0x7a6584+_0x562a00['UiCurrentOffsetY'],_0x2871a1=this[_0x6d6754(0x109)];this['drawText'](_0x562a00[_0x6d6754(0xb3)],_0x4fb3ce,_0x25c7b7,_0x2871a1,_0x1c6d60);}if(_0x562a00[_0x6d6754(0x25d)]!==''){const _0x24bc34=this[_0x6d6754(0x154)]+_0x562a00[_0x6d6754(0x1d8)],_0x8c1b92=_0x7a6584+_0x562a00['UiNextOffsetY'],_0x599808=this[_0x6d6754(0x109)];this['drawText'](_0x562a00[_0x6d6754(0x25d)],_0x24bc34,_0x8c1b92,_0x599808,_0x1c6d60);}},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x143)]=function(){const _0x3da555=_0x105b2f,_0x485203=Window_OTB_TurnOrder[_0x3da555(0x220)];this[_0x3da555(0x244)]=new Sprite(),this[_0x3da555(0x2a4)](this[_0x3da555(0x244)]),this[_0x3da555(0x210)]=null,this[_0x3da555(0x156)]=[],this[_0x3da555(0xf1)]=[],this[_0x3da555(0x7d)]=new Sprite(),this['_previewContainer']['x']=_0x485203[_0x3da555(0x18f)],this[_0x3da555(0x7d)]['y']=_0x485203[_0x3da555(0x2a2)],this[_0x3da555(0x7d)]['x']-=Math[_0x3da555(0x94)](_0x485203['SpriteThin']*0.5*_0x485203[_0x3da555(0x224)]),_0x485203[_0x3da555(0x162)]&&(this[_0x3da555(0x7d)]['x']+=_0x485203[_0x3da555(0x245)]),this[_0x3da555(0x7d)]['y']-=Math[_0x3da555(0x94)](_0x485203['SpriteLength']*0.5*_0x485203['PreviewScale']),this[_0x3da555(0x2a4)](this[_0x3da555(0x7d)]),this[_0x3da555(0x206)]=[],this[_0x3da555(0xb7)]=[];},Window_OTB_TurnOrder['prototype'][_0x105b2f(0x274)]=function(){const _0x178956=_0x105b2f;Window_Base[_0x178956(0x271)][_0x178956(0x274)][_0x178956(0x1a5)](this),this['updateTurnOrders'](),this['updatePosition'](),this['updateVisibility'](),this[_0x178956(0x9f)]();},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0xa1)]=function(){const _0x58c0ad=_0x105b2f;this[_0x58c0ad(0x2a7)]=!![];},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x182)]=function(){const _0x3a383f=_0x105b2f;if(!this[_0x3a383f(0x2a7)])return;this[_0x3a383f(0x2a7)]=![];for(const _0x24bf31 of this[_0x3a383f(0x156)]){if(!_0x24bf31)continue;_0x24bf31[_0x3a383f(0x1f5)]();}for(const _0x527e5b of this[_0x3a383f(0xf1)]){if(!_0x527e5b)continue;_0x527e5b[_0x3a383f(0x1f5)]();}},Window_OTB_TurnOrder['prototype']['updatePosition']=function(){const _0x58dc3d=_0x105b2f,_0xc063ca=Window_OTB_TurnOrder['Settings'];if(_0xc063ca[_0x58dc3d(0x8f)]!==_0x58dc3d(0x122))return;if(!_0xc063ca['RepositionTopForHelp'])return;const _0x2ca5da=SceneManager[_0x58dc3d(0xb2)][_0x58dc3d(0x1ea)];if(!_0x2ca5da)return;_0x2ca5da[_0x58dc3d(0x136)]?(this['x']=this[_0x58dc3d(0xdf)]+(_0xc063ca[_0x58dc3d(0x112)]||0x0),this['y']=this['_homeY']+(_0xc063ca[_0x58dc3d(0x1ef)]||0x0)):(this['x']=this[_0x58dc3d(0xdf)],this['y']=this[_0x58dc3d(0x2a9)]);const _0x80f6f5=SceneManager[_0x58dc3d(0xb2)][_0x58dc3d(0xd1)];Window_OTB_TurnOrder[_0x58dc3d(0xd2)]===undefined&&(Window_OTB_TurnOrder[_0x58dc3d(0xd2)]=Math[_0x58dc3d(0x1e0)]((Graphics[_0x58dc3d(0x1b5)]-Math[_0x58dc3d(0x1f8)](Graphics[_0x58dc3d(0x159)],_0x80f6f5['width']))/0x2));Window_OTB_TurnOrder['_ogWindowLayerY']===undefined&&(Window_OTB_TurnOrder[_0x58dc3d(0x178)]=Math['round']((Graphics[_0x58dc3d(0x20a)]-Math[_0x58dc3d(0x1f8)](Graphics['boxHeight'],_0x80f6f5['height']))/0x2));;this['x']+=_0x80f6f5['x']-Window_OTB_TurnOrder[_0x58dc3d(0xd2)],this['y']+=_0x80f6f5['y']-Window_OTB_TurnOrder[_0x58dc3d(0x178)];},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x1c7)]=function(){const _0x127bfc=_0x105b2f;this[_0x127bfc(0x136)]=$gameSystem[_0x127bfc(0xbc)]();if(BattleManager[_0x127bfc(0x21e)]===_0x127bfc(0xdd)){if(!this['_fadeSpeed']){const _0x118791=Window_OTB_TurnOrder['Settings'];this['_fadeSpeed']=Math[_0x127bfc(0x94)](0xff/(_0x118791[_0x127bfc(0x1b1)]||0x1));}this[_0x127bfc(0x9a)]-=this[_0x127bfc(0x239)],this[_0x127bfc(0x95)]-=this[_0x127bfc(0x239)],this['_contentsBackSprite']['opacity']-=this[_0x127bfc(0x239)];}},Window_OTB_TurnOrder['prototype']['sortContainer']=function(){const _0x202826=_0x105b2f;if(!this[_0x202826(0x244)])return;const _0x5bc6b0=Window_OTB_TurnOrder[_0x202826(0x220)],_0x5b28f1=_0x5bc6b0['OrderDirection'];_0x5b28f1?this['_spriteContainer']['children'][_0x202826(0x82)]((_0x3b8c00,_0x329f48)=>_0x3b8c00['x']-_0x329f48['x']):this[_0x202826(0x244)][_0x202826(0x265)][_0x202826(0x82)]((_0x32edb2,_0x1d3239)=>_0x1d3239['x']-_0x32edb2['x']);},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x139)]=function(_0x52ce69){const _0x29f3f2=_0x105b2f;if(!_0x52ce69)return;_0x52ce69[_0x29f3f2(0x14d)]&&_0x52ce69[_0x29f3f2(0x14d)][_0x29f3f2(0x88)](_0x52ce69);const _0x2fda81=Window_OTB_TurnOrder['Settings'],_0x11db8f=0x3e8/0x3c*_0x2fda81['UpdateFrames']+0x1f4;_0x52ce69['startFade'](0x0),setTimeout(this[_0x29f3f2(0xe7)][_0x29f3f2(0x10e)](this,_0x52ce69),_0x11db8f);},Window_OTB_TurnOrder['prototype'][_0x105b2f(0xe7)]=function(_0x24753a){const _0x1ddaa1=_0x105b2f;_0x24753a[_0x1ddaa1(0x14d)]&&_0x24753a[_0x1ddaa1(0x14d)][_0x1ddaa1(0x88)](_0x24753a),this[_0x1ddaa1(0x244)][_0x1ddaa1(0x19f)](_0x24753a),this[_0x1ddaa1(0x7d)][_0x1ddaa1(0x19f)](_0x24753a);},Window_OTB_TurnOrder['prototype']['removeCurrentSubject']=function(){const _0x4632ab=_0x105b2f;if(!this['_subject'])return;this['removeSprite'](this[_0x4632ab(0x210)]);},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x161)]=function(){const _0x1c5564=_0x105b2f;while(this[_0x1c5564(0x156)][_0x1c5564(0x22b)]){const _0x53a9c7=this['_currentTurn'][_0x1c5564(0x184)]();_0x53a9c7[_0x1c5564(0x24f)](0x0);}while(this[_0x1c5564(0xf1)][_0x1c5564(0x22b)]){const _0x5ab57d=this[_0x1c5564(0xf1)][_0x1c5564(0x184)]();if(!_0x5ab57d)continue;this[_0x1c5564(0x156)][_0x1c5564(0x297)](_0x5ab57d);}for(const _0x58c078 of this[_0x1c5564(0x156)]){if(!_0x58c078)continue;_0x58c078['changeSourceArray'](this[_0x1c5564(0x156)]);}},Window_OTB_TurnOrder[_0x105b2f(0x271)]['createTurnOrderSprites']=function(_0x2afb7e,_0x40b938){const _0x2ac4f5=_0x105b2f,_0x255f90=_0x2afb7e===BattleManager[_0x2ac4f5(0x190)]?this[_0x2ac4f5(0x156)]:this['_nextTurn'],_0x250316={};for(const _0x4fe21e of _0x2afb7e){const _0x31f28b=_0x2ac4f5(0xbf)[_0x2ac4f5(0x16d)](_0x4fe21e[_0x2ac4f5(0x240)]()?_0x2ac4f5(0x7f):_0x2ac4f5(0x181),_0x4fe21e['index']());_0x250316[_0x31f28b]=_0x250316[_0x31f28b]||0x0;const _0x218319=_0x250316[_0x31f28b]++,_0x770787=new Sprite_OTB_TurnOrder_Battler(_0x4fe21e,_0x218319,_0x255f90);this[_0x2ac4f5(0x244)][_0x2ac4f5(0x2a4)](_0x770787),_0x255f90['push'](_0x770787);}for(const _0x2cc5a3 of _0x255f90){if(!_0x2cc5a3)continue;_0x2cc5a3[_0x2ac4f5(0x24f)](0xff),_0x2cc5a3['calculateTargetPositions'](),_0x40b938&&(_0x2cc5a3['opacity']=0xff,_0x2cc5a3['x']=_0x2cc5a3[_0x2ac4f5(0x113)],_0x2cc5a3[_0x2ac4f5(0xee)]=0x0);}},Window_OTB_TurnOrder['prototype'][_0x105b2f(0x1ba)]=function(){const _0x318254=BattleManager['_otb_actionBattlersNext'];this['createTurnOrderSprites'](_0x318254);},Window_OTB_TurnOrder[_0x105b2f(0x271)]['shiftTurnOrderForSubject']=function(_0x11fb7e,_0x3240b5){const _0x313689=_0x105b2f;this[_0x313689(0xed)]();for(const _0x3c3319 of this[_0x313689(0x156)]){if(!_0x3c3319)continue;_0x3c3319['battler']()===_0x11fb7e&&(_0x3c3319['_instance']=_0x3c3319[_0x313689(0xc6)]||0x0,_0x3c3319['_instance']--);}const _0x455638=this['_currentTurn'][_0x313689(0xf8)](_0x1291e6=>_0x1291e6['battler']()===_0x11fb7e);if(this[_0x313689(0x156)][_0x455638])this[_0x313689(0x210)]=this[_0x313689(0x156)][_0x455638],this[_0x313689(0x156)][_0x455638][_0x313689(0x1f5)](),this[_0x313689(0x156)][_0x313689(0x2a8)](_0x455638,0x1);else{if(_0x11fb7e){const _0xa3452c=new Sprite_OTB_TurnOrder_Battler(_0x11fb7e,-0x1,null);this['_spriteContainer'][_0x313689(0x2a4)](_0xa3452c),this[_0x313689(0x210)]=_0xa3452c,_0xa3452c['startFade'](0xff),_0xa3452c['_positionDuration']=0x258,_0xa3452c['x']=this[_0x313689(0xce)],_0xa3452c[_0x313689(0x113)]=this[_0x313689(0xce)],_0x3240b5&&(_0xa3452c[_0x313689(0x9a)]=0xff);}}for(const _0x218508 of this['_currentTurn']){if(!_0x218508)continue;_0x218508[_0x313689(0x1f5)]();}},Window_OTB_TurnOrder['prototype'][_0x105b2f(0x285)]=function(){const _0x18e131=_0x105b2f;for(const _0x58b329 of this['_currentTurn']){if(!_0x58b329)continue;const _0x35b1aa=_0x58b329[_0x18e131(0x129)]();if(BattleManager['_actionBattlers'][_0x18e131(0x1de)](_0x35b1aa))continue;this[_0x18e131(0x139)](_0x58b329);}for(const _0x5acbb3 of this[_0x18e131(0xf1)]){if(!_0x5acbb3)continue;const _0x3d5ad0=_0x5acbb3[_0x18e131(0x129)]();if(BattleManager[_0x18e131(0x24a)]['includes'](_0x3d5ad0))continue;this['removeSprite'](_0x5acbb3);}},Window_OTB_TurnOrder['prototype'][_0x105b2f(0x173)]=function(_0x28aa28,_0x56d2eb){const _0x30106b=_0x105b2f,_0x391c7a=_0x56d2eb===BattleManager['_actionBattlers']?this['_currentTurn']:this[_0x30106b(0xf1)];if(!_0x391c7a)return;const _0x1585d9=VisuMZ['BattleSystemOTB'][_0x30106b(0x1ee)](_0x28aa28,_0x56d2eb),_0x3a3404=_0x1585d9[_0x30106b(0x22b)]-0x1,_0x118992=new Sprite_OTB_TurnOrder_Battler(_0x28aa28,_0x3a3404,_0x391c7a);this['_spriteContainer']['addChild'](_0x118992),_0x391c7a[_0x30106b(0x297)](_0x118992),_0x118992[_0x30106b(0x24f)](0xff),this[_0x30106b(0xa1)]();},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x12a)]=function(_0x2715e6,_0x1d630f){const _0xd6ebbe=_0x105b2f,_0x218b0e=_0x1d630f===BattleManager['_actionBattlers']?this['_currentTurn']:this[_0xd6ebbe(0xf1)];if(!_0x218b0e)return;for(const _0x224058 of _0x218b0e){if(!_0x224058)continue;_0x224058[_0xd6ebbe(0x129)]()===_0x2715e6&&(_0x224058[_0xd6ebbe(0xc6)]=_0x224058[_0xd6ebbe(0xc6)]||0x0,_0x224058[_0xd6ebbe(0xc6)]++);}const _0x336971=0x0,_0x9f338a=new Sprite_OTB_TurnOrder_Battler(_0x2715e6,_0x336971,_0x218b0e);this[_0xd6ebbe(0x244)]['addChild'](_0x9f338a),_0x218b0e[_0xd6ebbe(0xe6)](_0x9f338a),_0x9f338a[_0xd6ebbe(0x24f)](0xff),_0x9f338a[_0xd6ebbe(0xee)]=0x258,_0x9f338a['x']=this['_subjectX'],this[_0xd6ebbe(0xa1)]();},Window_OTB_TurnOrder['prototype']['addForceActionBattler']=function(_0x311704,_0x112048){const _0x37252f=_0x105b2f,_0x54ab53=this[_0x37252f(0x156)];if(!_0x54ab53)return;let _0x654366=0x0;for(let _0x163958=0x0;_0x163958<_0x112048;_0x163958++){const _0x368dd6=_0x54ab53[_0x163958];if(!_0x368dd6)continue;if(_0x368dd6[_0x37252f(0x129)]()!==_0x311704)continue;_0x654366=_0x368dd6['_instance']+0x1;}for(let _0x3d6465=_0x112048;_0x3d6465<_0x54ab53[_0x37252f(0x22b)];_0x3d6465++){const _0x4f9ec5=_0x54ab53[_0x3d6465];if(!_0x4f9ec5)continue;if(_0x4f9ec5['battler']()!==_0x311704)continue;_0x4f9ec5[_0x37252f(0xc6)]=_0x4f9ec5[_0x37252f(0xc6)]||0x0,_0x4f9ec5[_0x37252f(0xc6)]++;}const _0x373c07=new Sprite_OTB_TurnOrder_Battler(_0x311704,_0x654366,_0x54ab53);this[_0x37252f(0x244)]['addChild'](_0x373c07),_0x54ab53[_0x37252f(0x2a8)](_0x112048,0x0,_0x373c07),_0x373c07[_0x37252f(0x24f)](0xff),_0x373c07[_0x37252f(0xee)]=0x258,_0x373c07['x']=this[_0x37252f(0xce)],this[_0x37252f(0xa1)]();},Window_OTB_TurnOrder['prototype'][_0x105b2f(0x222)]=function(){const _0x452e06=_0x105b2f;this[_0x452e06(0x1ce)](BattleManager[_0x452e06(0x190)],!![]),this['createTurnOrderSprites'](BattleManager[_0x452e06(0x24a)],!![]),this[_0x452e06(0x193)](BattleManager[_0x452e06(0x210)],!![]),this['sortContainer']();},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x183)]=function(_0x5d10dc){const _0xf046ef=_0x105b2f;this[_0xf046ef(0x283)](),_0x5d10dc&&_0x5d10dc['item']()!==null&&this[_0xf046ef(0x174)](_0x5d10dc);},Window_OTB_TurnOrder['prototype']['clearOrderPreview']=function(){const _0x4dbce9=_0x105b2f;for(const _0x509696 of this[_0x4dbce9(0x7d)][_0x4dbce9(0x265)]){if(!_0x509696)continue;this[_0x4dbce9(0x139)](_0x509696);}},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x174)]=function(_0x4fed18){const _0x4a40ec=_0x105b2f,_0xfa376=_0x4fed18[_0x4a40ec(0x1c8)](),_0x5be68c=_0x4fed18[_0x4a40ec(0x1d7)](),_0x20c749=_0x4fed18[_0x4a40ec(0x87)]();_0x5be68c!==0x0&&this[_0x4a40ec(0x1ac)](_0xfa376,![],_0x5be68c);_0x20c749!==0x0&&this[_0x4a40ec(0x1ac)](_0xfa376,!![],_0x20c749);if(!_0x4fed18[_0x4a40ec(0x125)]())return;const _0x2dc7ce=SceneManager['_scene'][_0x4a40ec(0x186)],_0x321570=SceneManager[_0x4a40ec(0xb2)]['_enemyWindow'];let _0x193760=null;if(_0x2dc7ce&&_0x2dc7ce['active'])_0x193760=_0x2dc7ce['actor'](_0x2dc7ce[_0x4a40ec(0x1eb)]());else _0x321570&&_0x321570[_0x4a40ec(0x2a1)]&&(_0x193760=_0x321570['enemy']());if(!_0x193760)return;const _0x27776f=_0x4fed18[_0x4a40ec(0xbb)](_0x193760),_0x248e92=_0x4fed18[_0x4a40ec(0x208)](_0x193760);_0x27776f!==0x0&&this['createOrderPreviewSprite'](_0x193760,![],_0x27776f),_0x248e92!==0x0&&this[_0x4a40ec(0x1ac)](_0x193760,!![],_0x248e92);},Window_OTB_TurnOrder[_0x105b2f(0x271)][_0x105b2f(0x1ac)]=function(_0x389f49,_0x474708,_0x320799){const _0x44aa94=_0x105b2f;if(!_0x389f49)return;if(_0x320799===0x0)return;const _0x469bd6=_0x474708?BattleManager[_0x44aa94(0x24a)]:BattleManager[_0x44aa94(0x190)],_0x3b4264=VisuMZ[_0x44aa94(0x1ca)][_0x44aa94(0x1ee)](_0x389f49,_0x469bd6),_0x16b0c5=_0x474708?this['_nextTurn']:this[_0x44aa94(0x156)],_0x26f9c3=_0x474708?this[_0x44aa94(0xb7)]:this['_previewCurrent'];if(_0x3b4264[_0x44aa94(0x22b)]<=0x0)return;for(let _0x3c1cee=0x0;_0x3c1cee<_0x3b4264[_0x44aa94(0x22b)];_0x3c1cee++){const _0x5d57ba=new Sprite_OTB_TurnOrder_Preview(_0x389f49,_0x3c1cee,_0x16b0c5,_0x320799);this['_previewContainer']['addChild'](_0x5d57ba),_0x26f9c3[_0x44aa94(0x297)](_0x5d57ba),_0x5d57ba[_0x44aa94(0x1f5)](),_0x5d57ba[_0x44aa94(0x24f)](0xff);}};var $otbAddBattlerToTurnEnd=function(_0x2951a6,_0x377d1e,_0xf94b8f){const _0x3953c4=_0x105b2f;if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x3953c4(0x185)]())return;if(!_0x2951a6)return;if(!_0x2951a6[_0x3953c4(0xba)]())return;if(!_0x2951a6['canMove']())return;_0x377d1e=_0x377d1e||0x1;if(_0x377d1e<=0x0)return;if(!_0xf94b8f)return;BattleManager[_0x3953c4(0x105)](_0x2951a6,_0x377d1e,_0xf94b8f);},$otbAddBattlerToCurrentTurnEnd=function(_0x269895,_0x42ddcc){const _0x3116fd=_0x105b2f,_0x526125=BattleManager[_0x3116fd(0x190)];BattleManager['otbAddBattlerToTurnOrderAtEnd'](_0x269895,_0x42ddcc,_0x526125);},$otbAddBattlerToNextTurnEnd=function(_0x4254d1,_0x32b24e){const _0x262fa7=_0x105b2f,_0x1660e4=BattleManager[_0x262fa7(0x24a)];BattleManager[_0x262fa7(0x105)](_0x4254d1,_0x32b24e,_0x1660e4);};function _0x5b1b(){const _0x76b6ad=['setItem','concat','UiSubjectText','BattleManager_isTpb','UiSubjectOffsetY','#000000','Scene_Battle_onEnemyCancel','_homeDuration','_logWindow','selectNextActorOTB','windowRect','otbAddBattlerToTurnOrderAtEnd','left','setGuard','onSkillCancel','_spriteGroupWidth','BattleManager_battleSys','IconIndex','Scene_Battle_commandFight','_forcedBattlers','bind','EnemyBattlerFontSize','fillRect','adjustForPreview','RepositionTopHelpX','_positionTargetX','description','FaceIndex','startInput','UserAddActionCurrent','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_otbTurnOrderGraphicType','onEnemyCancel','_tempActor','gradientFillRect','drawDimmedArea','Game_Party_removeActor','otbApplyActionTimes','setSkill','center','top','selectNextActor','reduce','needsSelection','Game_Party_addActor','OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN','BgImageFilename','battler','addBattlerToTurnOrderAtStart','otbGainInstant','EnemyBattlerType','getColor','clearTurnOrderOTBGraphics','otbShiftNextTurnSpritesToCurrentTurn','%1SystemBorder','_last_otb_actionPlusSetLength','constructor','WidthBase','iconWidth','EnemyBattlerFaceName','visible','getBattleSystem','makeDeepCopy','removeSprite','pop','makeActionOrdersOTB','isTpb','svBattlerName','createBackgroundSprite','forceActionOTB','currentAction','bitmapHeight','_inputting','createSpriteContainers','IconSet','BattleManager_setup','forceAction','bitmapWidth','faceHeight','3PjTOLE','EFFECT_ADD_BUFF','SubjectDistance','members','_sourceArray','otbUnshiftBattlerToTurnOrders','TurnOrderOTBGraphicType','150746dETBcz','removeActor','appear','svActorVertCells','_nextX','Game_BattlerBase_appear','_currentTurn','_actorCommandWindow','_offset','boxWidth','_otbTurnOrderVisible','isSceneBattle','Actors','_letterSprite','ShowMarkerBg','battlerHue','OTB_STUN_INFINITY_SPEED','shiftNextTurnSpritesToCurrentTurn','OrderDirection','singleSkill','createTurnOrderOTBGraphicFaceIndex','BgImageOffsetY','loadSystem','TargetAddActionNext','version','_fadeTarget','RandomizeActionTimesOrder','updatePadding','Game_Battler_onBattleStart','format','getInfinityClamp','isAppeared','canMove','BattleManager_isTurnBased','boxHeight','addBattlerToTurnOrderAtEnd','createOrderPreview','additionalTargetXAdjustments','processTurnOTB','onBattleEnd','_ogWindowLayerY','ARRAYEVAL','applyGlobalBattleSystemOTB','isStateAffected','setup','otbAddActions','BattleManager_getNextSubject','updateSelectionEffect','updateOpacity','enemy','updateTurnOrders','previewOrderByAction','shift','isOTB','_actorWindow','postEndActionOTB','changeSvActorGraphicBitmap','commandFight','refresh','actorCommandSingleSkill','_statusWindow','icon','121gOsAUH','PreviewOffsetX','_actionBattlers','isHorz','applyGlobal','shiftTurnOrderForSubject','BattleManager_forceAction','scale','otbRemoveCurrentSubject','TargetNextOrder','_tempBattler','ActionBattlersFilter','addChildToBack','MoveDistance','_currentX','otbProcessActionCheck','getUnitSideSide','removeChild','PreviewEnemy','parameters','applyItemUserEffect','TargetAddActionCurrent','commandAttack','call','FaceName','makeActionOrders','InitialSpeedJS','SpriteLength','createTurnOrderOTBGraphicType','onActorOk','createOrderPreviewSprite','Game_Battler_removeState','Scene_Battle_onItemCancel','NUM','allBattleMembers','UpdateFrames','OTB_CONVERT_AGI_BUFF_NEXT_TURN','Game_System_initialize','otbRemoveUnableTurnOrderSprites','width','startActorCommandSelection','Scene_Battle_commandAttack','ConvertAgiBuffCurrent','1290753tVCWLw','createNewTurnOrderSprites','_otb_createdFirstTurnOrders','svActorHorzCells','SideviewBattleUI','otbCreateNewTurnOrderSprites','inputtingAction','checkOpacity','OTB_CONVERT_AGI_BUFF_CURRENT_TURN','EnemyBattlerIcon','UiCurrentOffsetX','Game_Actor_selectNextCommand','processUpdateGraphic','finishActorInput','updateVisibility','subject','initMembersOTB','BattleSystemOTB','createOTBTurnOrderWindow','_positionTargetY','StatusWindow','createTurnOrderSprites','%1BgColor1','TurnOrderOTBGraphicFaceIndex','35hKopcB','_unit','_graphicHue','hide','OTB_ADDED_ACTION_TIMES','otbPreviewOrderChange','otbCalcUserCurrentOrderChange','UiNextOffsetX','ARRAYSTR','InfinityClamp','292696RAsjhb','UserAddActionNext','addActor','includes','floor','round','_bgImageSprite','onItemCancel','decideRandomTarget','parse','Game_Battler_makeSpeed','otbAddForceActionBattler','match','Game_Battler_addState','DisplayOffsetX','_helpWindow','index','applyItemAddedActionOTB','changeFaceGraphicBitmap','GetAllIndicies','RepositionTopHelpY','startInputOTB','drawBgImage','endAction','updatePosition','Window_Selectable_select','calculateTargetPositions','ConvertSpeedJS','VisuMZ_2_PartySystem','min','TurnOrderOTBGraphicFaceName','processTurn','_graphicSprite','isSideView','Enemy','_letter','faceWidth','effects','BattleManager_endTurn','_fadeDuration','BgDimStyle','VisuMZ_3_SideviewBattleUI','Game_BattlerBase_hide','_previewCurrent','_graphicType','otbCalcTargetNextOrderChange','performActionEndOTB','height','map','bitmap','onEnemyOk','isBattleMember','setBattleSystemOTBTurnOrderVisible','_subject','selectNextCommand','currentSymbol','mainFontFace','_forceAction','faceIndex','DisplayOffsetY','Window_Help_setItem','BattleManager_processTurn','BgImageOffsetX','ActionBattlersNextFilter','_stateIDs','ConvertParams','_graphicSv','_phase','isActiveTpb','Settings','updateGraphicHue','resumeTurnOrderSprites','dataId','PreviewScale','Scene_Battle_commandCancel','OtbTurnOrderActorIcon','drawText','makeOTBSpeed','ScreenBuffer','_index','length','getChildIndex','Game_Action_applyGlobal','onBattleStartOTB','2730190EJMvrh','STRUCT','_otbTurnOrderIconIndex','getNextSubject','_otbTurnOrderFaceIndex','Game_Battler_onTurnEnd','fontSize','endTurn','guard','EnemyBattlerFaceIndex','_fadeSpeed','_actions','_graphicFaceName','applyBattleItemWindowOTB','hasSvBattler','trim','iconHeight','isActor','RepositionLogWindow','5482552jaLmXR','EnemyBattlerFontFace','_spriteContainer','SpriteThin','deathStateId','EnableActionTimes','BorderThickness','initMembers','_otb_actionBattlersNext','EVAL','FUNC','updateGraphic','exit','startFade','bottom','code','isBattleItemWindowOTB','STR','performCollapse','max','_otbTimesActedThisTurn','random','BattleManager_startInput','otbReturnBattlerToTurnOrders','Game_Battler_onBattleEnd','_graphicIconIndex','clearMakeActionTimesCacheOTB','UiNextText','TurnOrder','OTB_CONVERT_AGI_DEBUFF_NEXT_TURN','svactor','makeNextActionOrdersOTB','_backgroundSprite','defaultPosition','createBorderSprite','children','_speed','_isAlive','setTarget','resetFontSettings','recoverAll','clear','createChildren','Game_Action_applyItemUserEffect','anchor','Scene_Battle_commandGuard','_partyCommandWindow','prototype','otbAddBattlerToTurnOrderAtStart','TurnOrderOTBGraphicIconIndex','update','_otbTurnOrderFaceName','Game_Action_speed','TargetFollOrder','_containerWidth','registerCommand','UiFontSize','moveToPosition','_isBattleOver','numActions','randomInt','name','_graphicEnemy','Mechanics','makeActionTimesOTB','clearOrderPreview','clamp','removeUnableTurnOrderSprites','otbPreviewOrderClear','PostStunInfinitySpeed','updateLetter','createLetterSprite','_otbTurnOrderWindow','Scene_Battle_actorCommandSingleSkill','addChildAt','%1SystemBg','RegExp','createTurnOrderOTBGraphicIconIndex','VisuMZ_1_BattleCore','select','Game_BattlerBase_recoverAll','OTB','Scene_Battle_onActorOk','ConvertAgiDebuffNext','isEnemy','push','getStateIdWithName','removeStatesAuto','image','padding','UserNextOrder','Enemies','updateStateTurns','calculateTargetIndex','BattleManager_selectNextActor','active','PreviewOffsetY','SystemTurnOrderVisibility','addChild','addLoadListener','speed','_requestTurnOrderUpdate','splice','_homeY','Visible','fontFace','isPreviousSceneBattleTransitionable','setText','BattleManager_endAction','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','UiAlignment','createTurnOrderOTBGraphicFaceName','_graphicFaceIndex','item','_previewContainer','lineHeight','actor','initialize','status','sort','createAllWindows','filter','setHue','UserFollOrder','otbCalcUserNextOrderChange','remove','onItemOk','533815nJYTuJ','_surprise','3631050RZUxhJ','mainSprite','_blendColor','DisplayPosition','create','applyItemTargetEffectOTB','commandGuard','makeActionTimes','ceil','contentsOpacity','contentsBack','refreshTurnOrder','changeEnemyGraphicBitmap','isInfinitySpeedOTB','opacity','%1BorderColor','makeActions','containerWindow','isTurnBased','sortContainer','30kMxSAQ','requestUpdateTurnOrders','commandCancelOTB','Scene_Battle_createActorCommandWindow','Conversion','loadSvActor','Scene_Battle_onItemOk','Actor','toUpperCase','_plural','createActorCommandWindowOTB','BattleManager_makeActionOrders','stepForward','PreviewActor','blt','Game_Battler_performCollapse','note','contents','_scene','UiCurrentText','onBattleStart','face','removeActionBattlersOTB','_previewNext','onBattleEndOTB','indexOf','isAlive','otbCalcTargetCurrentOrderChange','isBattleSystemOTBTurnOrderVisible','loadFace','dimColor1','%1-%2','faceName','Game_Action_allowRandomSpeed','getStateTooltipBattler','OtbTurnOrderEnemyIcon','getBorderThickness','battleSys','_instance','onActorCancel','Scene_Battle_onSkillCancel','_lastTargetIndex','endBattlerActions','preEndActionOTB','initHomePositions','OtbTurnOrderClearEnemyGraphic','_subjectX','battlerName','Scene_Battle_createAllWindows','_windowLayer','_ogWindowLayerX','_targetHomeX','addState','Game_Battler_forceAction','initBattleSystemOTB','canChangeOtbTurnOrder','canInput','dimColor2','otbShiftTurnOrderForSubject','containerPosition','startActorInput','battleEnd','_isAppeared','_homeX','onSkillOk','EFFECT_ADD_DEBUFF','Scene_Battle_onSkillOk','addForceActionBattler','_cache_makeActionTimesOTB','right','unshift','processSpriteRemoval','removeState','OtbTurnOrderEnemyFace','BattleManager_finishActorInput','cancel','_hidden','removeCurrentSubject','_positionDuration','ActorBattlerType','transparent','_nextTurn','loadEnemy','allowRandomSpeed','Game_Battler_makeActionTimes','turnOrderChangeOTB','commandCancel','actionPlusSet','findIndex','auto'];_0x5b1b=function(){return _0x76b6ad;};return _0x5b1b();}