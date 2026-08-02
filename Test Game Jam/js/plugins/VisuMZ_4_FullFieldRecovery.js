//=============================================================================
// VisuStella MZ - Full Field Recovery
// VisuMZ_4_FullFieldRecovery.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_FullFieldRecovery = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FullFieldRecovery = VisuMZ.FullFieldRecovery || {};
VisuMZ.FullFieldRecovery.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [FullFieldRecovery]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Full_Field_Recovery_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Do you shower your players with items only to find out that they don't use
 * them? Or perhaps they're always hoarding the items despite being incredibly
 * low on health while they explore dungeons? This plugin adds in a simple
 * button press for your players to push in order to pull up a Full Field
 * Recovery window and uses items to fully recover the party's HP, MP, and
 * status by using lower cost items first to higher cost ones (or if you want,
 * create your own priority list). This quality of life feature will make the
 * dungeon crawling aspect of your game more comfortable for your players
 * provided that you give them a plethora of items to heal with.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds Quality of Life command that's found throughout most modern JRPG's to
 *   let the player quickly heal the party by automatically using items.
 * * Items used will automatically prioritized from lowest cost to highest cost
 *   as to not waste the player's more valuable items.
 * * If you prefer to make your own priority list, you can do so via the Plugin
 *   Parameters based on the healing type for HP, MP, and States.
 * * Shortcut key on the map allows the player to quickly pull up the Full
 *   Field Recovery option.
 * * Notetags can be used to include or exclude items from the priority list.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Understanding Auto-Priority List
 * ============================================================================
 *
 * If you left the Plugin Parameter item lists empty, then you're allowing the
 * plugin to create its own priority list. Here's how the list rulings work
 * for each healing type (State, HP, and MP).
 * 
 * When healing via Full Field Recovery, states are healed first, followed by
 * HP, followed by MP. Battle-participants will be given priority for healing
 * items first. Once they have received full recovery, reserve party members
 * will then be focused on for full team field recovery.
 *
 * ---
 *
 * Automatic State Recovery Item Inclusion Rulings
 * 
 * 1. Nonconsumable items are listed at the top of the priority list regardless
 *    of their price that can be used with "Always" / "Menu Only".
 * 
 * 2. Consumable items are added in order listed by price first then by ID from
 *    lowest to highest that can be used with "Always" / "Menu Only".
 *    Items must have at least a price of 1.
 * 
 * 3. If an item has the notetags <Exclude Field State Recovery> or
 *    <Exclude Field Recovery>, then that item is excluded from the list.
 * 
 * 4. If an item has the notetag <Include Field State Recovery>, then that item
 *    is included into the list.
 * 
 * 5. If an item has the "Remove State" type in their database entry's Effects
 *    list and nothing else, then that item is included into the list. However,
 *    any other effects like "Add State" or "Recover HP" or "Recover MP" or
 *    "Gain TP" will invalidate the automatic addition and will therefore
 *    require the aid of the <Include Field State Recovery> notetag.
 *
 * ---
 *
 * Automatic HP Recovery Item Inclusion Rulings
 * 
 * 1. Nonconsumable items are listed at the top of the priority list regardless
 *    of their price that can be used with "Always" / "Menu Only".
 * 
 * 2. Consumable items are added in order listed by price first then by ID from
 *    lowest to highest that can be used with "Always" / "Menu Only".
 *    Items must have at least a price of 1.
 * 
 * 3. If an item has the notetags <Exclude Field HP Recovery> or
 *    <Exclude Field Recovery>, then that item is excluded from the list.
 * 
 * 4. If an item has the notetag <Include Field HP Recovery>, then that item
 *    is included into the list.
 * 
 * 5. If an item has the "Recover HP" type in their database entry's Effects
 *    list and nothing else, then that item is included into the list. However,
 *    any other effects like "Add State" or "Remove State" or "Recover MP" or
 *    "Gain TP" will invalidate the automatic addition and will therefore
 *    require the aid of the <Include Field HP Recovery> notetag.
 *
 * ---
 *
 * Automatic MP Recovery Item Inclusion Rulings
 * 
 * 1. Nonconsumable items are listed at the top of the priority list regardless
 *    of their price that can be used with "Always" / "Menu Only".
 * 
 * 2. Consumable items are added in order listed by price first then by ID from
 *    lowest to highest that can be used with "Always" / "Menu Only".
 *    Items must have at least a price of 1.
 * 
 * 3. If an item has the notetags <Exclude Field MP Recovery> or
 *    <Exclude Field Recovery>, then that item is excluded from the list.
 * 
 * 4. If an item has the notetag <Include Field MP Recovery>, then that item
 *    is included into the list.
 * 
 * 5. If an item has the "Recover MP" type in their database entry's Effects
 *    list and nothing else, then that item is included into the list. However,
 *    any other effects like "Add State" or "Remove State" or "Recover MP" or
 *    "Gain TP" will invalidate the automatic addition and will therefore
 *    require the aid of the <Include Field MP Recovery> notetag.
 *
 * ---
 * 
 * For those wondering why number 5 of each option is so strict as to not allow
 * other effect types, it's in order to streamline the process so that there is
 * no unfavorable prioritization as multi-purpose items have more inherent
 * value than their price typically suggests. However, if you do wish to
 * include these hybrid effect items into your priority lists, either add them
 * through notetags or through the Plugin Parameters.
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
 * <Disable Full Field Recovery>
 *
 * - Used for: Map Notetags
 * - Disables Full Field Recovery from being used on this map.
 *
 * ---
 * 
 * === Item-Related Notetags ===
 *
 * <Exclude Field Recovery>
 * <Exclude Field HP Recovery>
 * <Exclude Field MP Recovery>
 * <Exclude Field State Recovery>
 *
 * - Used for: Item Notetags
 * - Excludes this specific item from being included into the automatically
 *   generated lists of field recovery items.
 * - If using a planned priority list, ignore this notetag.
 * - The general <Exclude Field Recovery> notetag will exclude from all three
 *   lists while the HP, MP, and State specific ones target only those lists.
 *
 * ---
 *
 * <Include Field HP Recovery>
 * <Include Field MP Recovery>
 * <Include Field State Recovery>
 *
 * - Used for: Item Notetags
 * - Includes this specific item into the automatic field recovery item list.
 * - If using a planned priority list, ignore this notetag.
 * - This still requires the item to have an occassion type of "Always" or
 *   "Menu Only" in order to be usable via Full Field Recovery.
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
 * === Map Plugin Commands ===
 * 
 * ---
 *
 * Map: Open Full Field Recovery Message
 * - Open Full Field Recovery Message without shortcut key.
 * - Full Field Recovery Accessibility required.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Full Field Recovery?
 * - Enable/disable Full Field Recovery from being accessible?
 * - Does NOT bypass <Disable Full Field Recovery> map notetag.
 *
 *   Enable/Disable?:
 *   - Enables/disables Full Field Recovery on map scene?
 *   - Does NOT bypass <Disable Full Field Recovery> map notetag.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Full Field Recovery plugin.
 *
 * ---
 *
 * Full Field Recovery
 * 
 *   Default Enable?:
 *   - Enable access to the map Full Field Recovery by default?
 * 
 *   Shortcut Key:
 *   - What key is used to activate the Full Field Recovery Window?
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *
 * ---
 *
 * Mechanics
 * 
 *   Heal HP?:
 *   - Use healing items to recover HP?
 * 
 *     HP Item List:
 *     - Priority list of items to use for HP recovery.
 *     - Leave empty to automatically populate.
 * 
 *     Prioritize Lowest %?
 *     - Prioritize using healing items on lowest HP% member first?
 *     - If off, heal members in party order.
 * 
 *   Heal MP?:
 *   - Use healing items to recover MP?
 * 
 *     MP Item List:
 *     - Priority list of items to use for MP recovery.
 *     - Leave empty to automatically populate.
 * 
 *     Prioritize Lowest %?
 *     - Prioritize using healing items on lowest MP% member first?
 *     - If off, heal members in party order.
 * 
 *   Heal States?:
 *   - Use healing items to recover states?
 * 
 *     States Item List:
 *     - Priority list of items to use for state recovery.
 *     - Leave empty to automatically populate.
 *
 * ---
 *
 * Scene_Map > Message Window
 * 
 *   Vocab: Already Full:
 *   - Text used when all members are fully healed.
 *   - You may use text codes.
 * 
 *   Vocab: Lacking Items:
 *   - Text used when not enough items to heal with.
 *   - You may use text codes.
 * 
 *   Vocab: Heal Prompt:
 *   - Text used when not enough items to heal with.
 *   - You may use text codes.
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Scene_Map > Choice Window
 * 
 *   Vocab: Heal Option:
 *   - Text used for the heal option.
 *   - You may use text codes.
 * 
 *   Vocab: Cancel Option:
 *   - Text used for the cancel option.
 *   - You may use text codes.
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Text Alignment:
 *   - Pick the text alignment for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Settings for the Full Field Recovery sound effect
 *
 * ---
 *
 * Ask Full Recovery
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
 * Use Full Recovery
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
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: April 17, 2025
 * * Bug Fixes!
 * ** Fixed a bug where items would get used on dead party members even if the
 *    item did not allow targeting dead party members in its scope. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > General > Mechanics > Heal HP? > Prioritize Lowest %?
 * **** Prioritize using healing items on lowest HP% member first?
 * **** If off, heal members in party order.
 * *** Parameters > General > Mechanics > Heal MP? > Prioritize Lowest %?
 * **** Prioritize using healing items on lowest MP% member first?
 * **** If off, heal members in party order.
 * 
 * Version 1.01: November 24, 2022
 * * Documentation Update!
 * ** Updated "Understanding Auto-Priority List" section to given more info on
 *    priority healing.
 * * Feature Update!
 * ** Battle-participants will be given priority for healing items first. Once
 *    they have received full recovery, reserve party members will then be
 *    focused on for full team field recovery.
 * 
 * Version 1.00 Official Release Date: December 9, 2022
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
 * @command OpenFullFieldRecovery
 * @text Map: Open Full Field Recovery Message
 * @desc Open Full Field Recovery Message without shortcut key.
 * Full Field Recovery Accessibility required.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFullFieldRecoveryEnable
 * @text System: Enable Full Field Recovery?
 * @desc Enable/disable Full Field Recovery from being accessible?
 * Does NOT bypass <Disable Full Field Recovery> map notetag.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Full Field Recovery on map scene?
 * Does NOT bypass <Disable Full Field Recovery> map notetag.
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
 * @param FullFieldRecovery
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
 * @desc General settings for the Full Field Recovery plugin.
 * @default {"FullFieldRecovery":"","DefaultEnable:eval":"true","ShortcutKey:str":"pageup","AnimationID:num":"45","Mechanics":"","HealHp:eval":"true","HpItemList:arraynum":"[]","HealMp:eval":"true","MpItemList:arraynum":"[]","HealStates:eval":"true","StateItemList:arraynum":"[]","SceneMap":"","Window_FullFieldRecoveryMessage":"","MsgWindow_AlreadyFull:json":"\"All \\\\c[6]party members\\\\c[0] are at \\\\c[24]full health\\\\c[0].\"","MsgWindow_NotEnoughItems:json":"\"There are \\\\c[2]insufficient\\\\c[0] items to \\\\c[24]heal\\\\c[0] with.\"","MsgWindow_HealPrompt:json":"\"Do you wish to use your \\\\c[4]items\\\\c[0] to fully\\n\\\\c[24]heal\\\\c[0] your \\\\c[6]party's\\\\c[0] \\\\c[21]HP\\\\c[0], \\\\c[23]MP\\\\c[0], and \\\\c[5]status\\\\c[0]?\"","MsgWindow_BgType:num":"0","MsgWindow_RectJS:func":"\"const ww = 720;\\nconst wh = this.calcWindowHeight(3, true);\\n\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Math.ceil((Graphics.boxHeight - wh) / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_FullFieldRecoveryChoice":"","ChoiceWindow_HealPrompt:str":"\\I[164]Heal","ChoiceWindow_CancelPrompt:str":"\\I[162]Cancel","ChoiceWindow_BgType:num":"0","ChoiceWindowTextAlign:str":"left","ChoiceWindow_RectJS:func":"\"const msgWindow = arguments[0];\\n\\nconst ww = 192;\\nconst wh = this.calcWindowHeight(2, true);\\n\\nconst wx = msgWindow.x + msgWindow.width - ww;\\nconst wy = msgWindow.y - wh;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc Settings for the Full Field Recovery sound effect
 * @default {"Ask":"","askName:str":"Raise3","askVolume:num":"90","askPitch:num":"80","askPan:num":"0","Use":"","name:str":"Raise3","volume:num":"90","pitch:num":"120","pan:num":"0"}
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
 * @param FullFieldRecovery
 * @text Full Field Recovery
 *
 * @param DefaultEnable:eval
 * @text Default Enable?
 * @parent FullFieldRecovery
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable access to the map Full Field Recovery by default?
 * @default true
 * 
 * @param ShortcutKey:str
 * @text Shortcut Key
 * @parent FullFieldRecovery
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc What key is used to activate the Full Field Recovery Window?
 * @default pageup
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent FullFieldRecovery
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 45
 *
 * @param Mechanics
 *
 * @param HealHp:eval
 * @text Heal HP?
 * @parent Mechanics
 * @type boolean
 * @on Heal
 * @off Ignore
 * @desc Use healing items to recover HP?
 * @default true
 * 
 * @param HpItemList:arraynum
 * @text HP Item List
 * @parent HealHp:eval
 * @type item[]
 * @desc Priority list of items to use for HP recovery.
 * Leave empty to automatically populate.
 * @default []
 *
 * @param HealHpLowestRateFirst:eval
 * @text Prioritize Lowest %?
 * @parent HealHp:eval
 * @type boolean
 * @on Lowest First
 * @off In Order
 * @desc Prioritize using healing items on lowest HP% member first?
 * @default true
 *
 * @param HealMp:eval
 * @text Heal MP?
 * @parent Mechanics
 * @type boolean
 * @on Heal
 * @off Ignore
 * @desc Use healing items to recover MP?
 * @default true
 * 
 * @param MpItemList:arraynum
 * @text MP Item List
 * @parent HealMp:eval
 * @type item[]
 * @desc Priority list of items to use for MP recovery.
 * Leave empty to automatically populate.
 * @default []
 *
 * @param HealMpLowestRateFirst:eval
 * @text Prioritize Lowest %?
 * @parent HealMp:eval
 * @type boolean
 * @on Lowest First
 * @off In Order
 * @desc Prioritize using healing items on lowest MP% member first?
 * @default true
 *
 * @param HealStates:eval
 * @text Heal States?
 * @parent Mechanics
 * @type boolean
 * @on Heal
 * @off Ignore
 * @desc Use healing items to recover states?
 * @default true
 * 
 * @param StateItemList:arraynum
 * @text States Item List
 * @parent HealStates:eval
 * @type item[]
 * @desc Priority list of items to use for state recovery.
 * Leave empty to automatically populate.
 * @default []
 * 
 * @param SceneMap
 * @text Scene_Map
 * 
 * @param Window_FullFieldRecoveryMessage
 * @text Message Window
 * @parent SceneMap
 *
 * @param MsgWindow_AlreadyFull:json
 * @text Vocab: Already Full
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Text used when all members are fully healed.
 * You may use text codes.
 * @default "All \\c[6]party members\\c[0] are at \\c[24]full health\\c[0]."
 *
 * @param MsgWindow_NotEnoughItems:json
 * @text Vocab: Lacking Items
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Text used when not enough items to heal with.
 * You may use text codes.
 * @default "There are \\c[2]insufficient\\c[0] items to \\c[24]heal\\c[0] with."
 *
 * @param MsgWindow_HealPrompt:json
 * @text Vocab: Heal Prompt
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Text used when not enough items to heal with.
 * You may use text codes.
 * @default "Do you wish to use your \\c[4]items\\c[0] to fully\n\\c[24]heal\\c[0] your \\c[6]party's\\c[0] \\c[21]HP\\c[0], \\c[23]MP\\c[0], and \\c[5]status\\c[0]?"
 *
 * @param MsgWindow_BgType:num
 * @text Background Type
 * @parent Window_FullFieldRecoveryMessage
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
 * @param MsgWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = 720;\nconst wh = this.calcWindowHeight(3, true);\n\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Math.ceil((Graphics.boxHeight - wh) / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_FullFieldRecoveryChoice
 * @text Choice Window
 * @parent SceneMap
 *
 * @param ChoiceWindow_HealPrompt:str
 * @text Vocab: Heal Option
 * @parent Window_FullFieldRecoveryChoice
 * @type note
 * @desc Text used for the heal option.
 * You may use text codes.
 * @default \I[164]Heal
 *
 * @param ChoiceWindow_CancelPrompt:str
 * @text Vocab: Cancel Option
 * @parent Window_FullFieldRecoveryChoice
 * @type note
 * @desc Text used for the cancel option.
 * You may use text codes.
 * @default \I[162]Cancel
 *
 * @param ChoiceWindow_BgType:num
 * @text Background Type
 * @parent Window_FullFieldRecoveryChoice
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
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent Window_FullFieldRecoveryChoice
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Pick the text alignment for this window.
 * @default left
 *
 * @param ChoiceWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_FullFieldRecoveryChoice
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const msgWindow = arguments[0];\n\nconst ww = 192;\nconst wh = this.calcWindowHeight(2, true);\n\nconst wx = msgWindow.x + msgWindow.width - ww;\nconst wy = msgWindow.y - wh;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Ask
 * @text Ask Full Recovery
 *
 * @param askName:str
 * @text Filename
 * @parent Ask
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Raise3
 *
 * @param askVolume:num
 * @text Volume
 * @parent Ask
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param askPitch:num
 * @text Pitch
 * @parent Ask
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param askPan:num
 * @text Pan
 * @parent Ask
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Use
 * @text Use Full Recovery
 *
 * @param name:str
 * @text Filename
 * @parent Use
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Raise3
 *
 * @param volume:num
 * @text Volume
 * @parent Use
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @parent Use
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @parent Use
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

function _0x43e3(){const _0x3e601b=['isFieldStateRecoveryItem','2479428hyTUTR','Scene_Map_updateMain','map','getLastPluginCommandInterpreter','open','mmp','_scene','ChoiceWindow_CancelPrompt','code','floor','askPitch','hpDamage','drawTextEx','createAllWindows','call','fieldMembersNeedMpRecovery','updateMain','ExcludeRecovery','ChoiceWindow_RectJS','Enable','MsgWindow_BgType','VisuMZ_3_FrontviewBattleUI','MsgWindow_AlreadyFull','playFullFieldRecoveryUse','mpItems','setup','remove','onFullFieldRecoveryCancel','itemLineRect','Game_System_initialize','ChoiceWindow_HealPrompt','description','processFullFieldHpRecoveryUsage','occasion','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','scope','HpItemList','testLifeAndDeath','boxWidth','IncludeMpRecovery','ARRAYFUNC','useItem','processFullFieldStateRecoveryUsage','needsHealing','1248bcXHDo','processFullFieldHpRecovery','damage','heal','fullFieldRecoveryOpen','needsAnyFieldRecovery','RegExp','getFullFieldRecoveryStateItems','fieldMembersNeedHpRecovery','JSON','HealMp','parse','createFullFieldRecoveryWindows','effects','return\x200','isEventRunning','hpRate','numRepeats','sort','2CNHUzn','NUM','MsgWindow_NotEnoughItems','push','testItemStateRecoveryEffect','isCommandEnabled','bgTypeChoice','_active','name','prioritizeLowestHP','hasItemAnyValidStateRecoveryEffects','isStateAffected','consumable','activate','numItems','trim','constructor','initFullFieldRecovery','DefaultEnable','close','_states','commandName','isDead','mpDamage','FullFieldRecovery','some','calcWindowHeight','type','Settings','itemTextAlign','initialize','includes','ShortcutKey','FrontviewBattleUI','requestAnimation','allMembers','concat','playCancel','pan','getFullFieldRecoveryHpItems','isSceneMap','_fullFieldRecoveryItems','EFFECT_REMOVE_STATE','select','MsgWindow_HealPrompt','fieldMembersNeedStateRecovery','generateFieldRecoveryHpItemsList','stateHeal','showFullFieldRecoveryAnimation','81EcgGBY','Game_Interpreter_PluginCommand','MsgWindow_RectJS','volume','ARRAYEVAL','askPan','1738910HrfYqp','cancel','926813nQOSAG','hpItems','pitch','ExcludeStateRecovery','processFullFieldMpRecoveryItem','mhp','isFullFieldRecoveryDisabled','playOkSound','STR','version','getMessageText','changePaintOpacity','STRUCT','EVAL','6741372dQIpHQ','stateItems','exit','selectFirstAvailable','value1','playSe','length','onFullFieldRecoveryHeal','HealHp','height','22315DZqSDo','processFullFieldMpRecovery','MpItemList','hasAnyFieldRecoveryItems','_bypassFieldDamagePopup','battleMembers','prioritizeLowestMP','General','ARRAYJSON','isFieldMpRecoveryItem','setLastPluginCommandInterpreter','format','FUNC','SystemFullFieldRecoveryEnable','EFFECT_RECOVER_HP','hasItemAnyValidStateRecoveryNotetags','isFieldHpRecoveryItem','defaultMapEnable','createFullFieldRecoveryChoiceWindow','prototype','800807myvXIu','optionCancel','dataId','bind','drawItem','innerWidth','fullFieldRecoveryMessageWindowRect','setupFullFieldRecoveryNotetags','fullFieldRecoveryChoiceWindowRect','result','hpAffected','price','addCommand','addCancelCommand','setBackgroundType','refresh','fullFieldRecoveryClose','value2','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','bgTypeMessage','state','filter','width','IncludeStateRecovery','22xbDAsH','Scene_Map_createAllWindows','apply','_disableFullFieldRecovery','innerHeight','setHandler','center','wait','isUsingFrontviewUiLayout','processFullFieldStateRecovery','setFullFieldRecovery','ARRAYSTRUCT','HealHpLowestRateFirst','ARRAYNUM','FULL_FIELD_RECOVERY','_lastPluginCommandInterpreter','openness','createFullFieldRecoveryMessageWindow','ARRAYSTR','textAlign','note','generateFieldRecoveryMpItemsList','setItemObject','toUpperCase','ConvertParams','addHealCommand','OpenFullFieldRecovery','isForAll','textSizeEx','getFullFieldRecoveryMpItems','56yACzfz','EFFECT_RECOVER_MP','processFullFieldRecovery','processFullFieldMpRecoveryUsage','checkForMatchingFieldEffects','status','mpHeal','addWindow','animationID','_mapEnableFullFieldRecovery','mpRate','2050316eZBUEI','command357','SETTINGS','generateFieldRecoveryStateItemsList','ExcludeHpRecovery','processFullFieldHpRecoveryItem','Game_Map_setup','_fullFieldRecoveryMessageWindow','registerCommand','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','create','parameters','match','updateFullFieldRecoveryShortcutKey','_fullFieldRecoveryChoiceWindow','bypassFrontviewUiFieldPopup','StartDamagePopup','boxHeight','IncludeHpRecovery'];_0x43e3=function(){return _0x3e601b;};return _0x43e3();}const _0x17c912=_0x325d;(function(_0x49989c,_0x539e8d){const _0x25487f=_0x325d,_0x31d87c=_0x49989c();while(!![]){try{const _0x1e30e8=-parseInt(_0x25487f(0x1ed))/0x1*(-parseInt(_0x25487f(0x1b4))/0x2)+parseInt(_0x25487f(0x175))/0x3+-parseInt(_0x25487f(0x25a))/0x4+parseInt(_0x25487f(0x205))/0x5*(parseInt(_0x25487f(0x1a1))/0x6)+parseInt(_0x25487f(0x219))/0x7*(-parseInt(_0x25487f(0x24f))/0x8)+parseInt(_0x25487f(0x1e5))/0x9*(-parseInt(_0x25487f(0x1eb))/0xa)+parseInt(_0x25487f(0x231))/0xb*(parseInt(_0x25487f(0x1fb))/0xc);if(_0x1e30e8===_0x539e8d)break;else _0x31d87c['push'](_0x31d87c['shift']());}catch(_0x52d493){_0x31d87c['push'](_0x31d87c['shift']());}}}(_0x43e3,0xe241e));var label=_0x17c912(0x1cc),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x17c912(0x22e)](function(_0x1a2430){const _0x3398f5=_0x17c912;return _0x1a2430[_0x3398f5(0x254)]&&_0x1a2430[_0x3398f5(0x194)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x17c912(0x1d0)]||{},VisuMZ[_0x17c912(0x249)]=function(_0x57ff99,_0xfcfcb){const _0x39bb1b=_0x17c912;for(const _0x3b6aed in _0xfcfcb){if(_0x3b6aed[_0x39bb1b(0x266)](/(.*):(.*)/i)){const _0x44a17f=String(RegExp['$1']),_0x55d790=String(RegExp['$2'])[_0x39bb1b(0x248)]()[_0x39bb1b(0x1c3)]();let _0x2ee083,_0x512ec8,_0x578155;switch(_0x55d790){case _0x39bb1b(0x1b5):_0x2ee083=_0xfcfcb[_0x3b6aed]!==''?Number(_0xfcfcb[_0x3b6aed]):0x0;break;case _0x39bb1b(0x23e):_0x512ec8=_0xfcfcb[_0x3b6aed]!==''?JSON['parse'](_0xfcfcb[_0x3b6aed]):[],_0x2ee083=_0x512ec8[_0x39bb1b(0x177)](_0x3ca36b=>Number(_0x3ca36b));break;case _0x39bb1b(0x1fa):_0x2ee083=_0xfcfcb[_0x3b6aed]!==''?eval(_0xfcfcb[_0x3b6aed]):null;break;case _0x39bb1b(0x1e9):_0x512ec8=_0xfcfcb[_0x3b6aed]!==''?JSON[_0x39bb1b(0x1ac)](_0xfcfcb[_0x3b6aed]):[],_0x2ee083=_0x512ec8[_0x39bb1b(0x177)](_0x19e4a8=>eval(_0x19e4a8));break;case _0x39bb1b(0x1aa):_0x2ee083=_0xfcfcb[_0x3b6aed]!==''?JSON['parse'](_0xfcfcb[_0x3b6aed]):'';break;case _0x39bb1b(0x20d):_0x512ec8=_0xfcfcb[_0x3b6aed]!==''?JSON[_0x39bb1b(0x1ac)](_0xfcfcb[_0x3b6aed]):[],_0x2ee083=_0x512ec8['map'](_0x25f316=>JSON['parse'](_0x25f316));break;case _0x39bb1b(0x211):_0x2ee083=_0xfcfcb[_0x3b6aed]!==''?new Function(JSON[_0x39bb1b(0x1ac)](_0xfcfcb[_0x3b6aed])):new Function(_0x39bb1b(0x1af));break;case _0x39bb1b(0x19d):_0x512ec8=_0xfcfcb[_0x3b6aed]!==''?JSON[_0x39bb1b(0x1ac)](_0xfcfcb[_0x3b6aed]):[],_0x2ee083=_0x512ec8[_0x39bb1b(0x177)](_0x5ce03d=>new Function(JSON[_0x39bb1b(0x1ac)](_0x5ce03d)));break;case _0x39bb1b(0x1f5):_0x2ee083=_0xfcfcb[_0x3b6aed]!==''?String(_0xfcfcb[_0x3b6aed]):'';break;case _0x39bb1b(0x243):_0x512ec8=_0xfcfcb[_0x3b6aed]!==''?JSON[_0x39bb1b(0x1ac)](_0xfcfcb[_0x3b6aed]):[],_0x2ee083=_0x512ec8['map'](_0x47f591=>String(_0x47f591));break;case _0x39bb1b(0x1f9):_0x578155=_0xfcfcb[_0x3b6aed]!==''?JSON[_0x39bb1b(0x1ac)](_0xfcfcb[_0x3b6aed]):{},_0x2ee083=VisuMZ[_0x39bb1b(0x249)]({},_0x578155);break;case _0x39bb1b(0x23c):_0x512ec8=_0xfcfcb[_0x3b6aed]!==''?JSON[_0x39bb1b(0x1ac)](_0xfcfcb[_0x3b6aed]):[],_0x2ee083=_0x512ec8['map'](_0x5845a9=>VisuMZ[_0x39bb1b(0x249)]({},JSON[_0x39bb1b(0x1ac)](_0x5845a9)));break;default:continue;}_0x57ff99[_0x44a17f]=_0x2ee083;}}return _0x57ff99;},(_0x3ec86a=>{const _0x58f012=_0x17c912,_0x284374=_0x3ec86a[_0x58f012(0x1bc)];for(const _0xfee463 of dependencies){if(!Imported[_0xfee463]){alert(_0x58f012(0x263)['format'](_0x284374,_0xfee463)),SceneManager['exit']();break;}}const _0x2eabbf=_0x3ec86a[_0x58f012(0x194)];if(_0x2eabbf[_0x58f012(0x266)](/\[Version[ ](.*?)\]/i)){const _0x274bd6=Number(RegExp['$1']);_0x274bd6!==VisuMZ[label][_0x58f012(0x1f6)]&&(alert(_0x58f012(0x22b)['format'](_0x284374,_0x274bd6)),SceneManager[_0x58f012(0x1fd)]());}if(_0x2eabbf[_0x58f012(0x266)](/\[Tier[ ](\d+)\]/i)){const _0x25cae3=Number(RegExp['$1']);_0x25cae3<tier?(alert(_0x58f012(0x197)[_0x58f012(0x210)](_0x284374,_0x25cae3,tier)),SceneManager['exit']()):tier=Math['max'](_0x25cae3,tier);}VisuMZ[_0x58f012(0x249)](VisuMZ[label][_0x58f012(0x1d0)],_0x3ec86a[_0x58f012(0x265)]);})(pluginData),PluginManager[_0x17c912(0x262)](pluginData[_0x17c912(0x1bc)],_0x17c912(0x24b),_0x56d77e=>{const _0x1ece95=_0x17c912;if(!SceneManager[_0x1ece95(0x1dc)]())return;const _0x530020=SceneManager[_0x1ece95(0x17b)];if(_0x530020){const _0x5829ac=$gameTemp['getLastPluginCommandInterpreter']();_0x530020[_0x1ece95(0x1a5)](),_0x5829ac[_0x1ece95(0x238)](0xa);}}),PluginManager['registerCommand'](pluginData[_0x17c912(0x1bc)],_0x17c912(0x212),_0x2da9d4=>{const _0xb305d=_0x17c912;VisuMZ[_0xb305d(0x249)](_0x2da9d4,_0x2da9d4);const _0x119d72=_0x2da9d4[_0xb305d(0x188)];$gameSystem[_0xb305d(0x23b)](_0x119d72);}),VisuMZ['FullFieldRecovery'][_0x17c912(0x1a7)]={'DisableFieldRec':/<DISABLE (?:FULL |)FIELD (?:RECOVER|RECOVERY)>/i,'ExcludeRecovery':/<EXCLUDE FIELD (?:RECOVER|RECOVERY)>/i,'ExcludeHpRecovery':/<EXCLUDE FIELD HP (?:RECOVER|RECOVERY)>/i,'ExcludeMpRecovery':/<EXCLUDE FIELD MP (?:RECOVER|RECOVERY)>/i,'ExcludeStateRecovery':/<EXCLUDE FIELD STATE (?:RECOVER|RECOVERY)>/i,'IncludeHpRecovery':/<INCLUDE FIELD HP (?:RECOVER|RECOVERY)>/i,'IncludeMpRecovery':/<INCLUDE FIELD MP (?:RECOVER|RECOVERY)>/i,'IncludeStateRecovery':/<INCLUDE FIELD STATE (?:RECOVER|RECOVERY)>/i},DataManager[_0x17c912(0x23f)]={'hpItems':VisuMZ['FullFieldRecovery'][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x199)],'mpItems':VisuMZ[_0x17c912(0x1cc)]['Settings'][_0x17c912(0x20c)][_0x17c912(0x207)],'stateItems':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)]['StateItemList']},DataManager[_0x17c912(0x253)]=function(_0x22a34d,_0x468340){const _0x54e6a9=_0x17c912;for(const _0x36a8eb of _0x22a34d[_0x54e6a9(0x1ae)]){if(_0x36a8eb['code']!==_0x468340)return!![];}return![];},DataManager[_0x17c912(0x1db)]=function(){const _0x415110=_0x17c912;this[_0x415110(0x1dd)]=this[_0x415110(0x1dd)]||{};if(this[_0x415110(0x1dd)]['hp']!==undefined)return this['_fullFieldRecoveryItems']['hp'];return this[_0x415110(0x1dd)]['hp']=this[_0x415110(0x1e2)](),this[_0x415110(0x1dd)]['hp'];},DataManager[_0x17c912(0x1e2)]=function(){const _0x1e84e4=_0x17c912;if(DataManager[_0x1e84e4(0x23f)][_0x1e84e4(0x1ee)]['length']>0x0)return DataManager[_0x1e84e4(0x23f)][_0x1e84e4(0x1ee)][_0x1e84e4(0x177)](_0x4140d6=>$dataItems[_0x4140d6])[_0x1e84e4(0x18f)](null)[_0x1e84e4(0x18f)](undefined);const _0x1c76be=[],_0x563c50=[];for(const _0x1e9d95 of $dataItems){if(!_0x1e9d95)continue;if(!this[_0x1e84e4(0x215)](_0x1e9d95))continue;_0x1e9d95[_0x1e84e4(0x1c0)]?_0x1c76be[_0x1e84e4(0x1b7)](_0x1e9d95):_0x563c50[_0x1e84e4(0x1b7)](_0x1e9d95);}return _0x1c76be[_0x1e84e4(0x1b3)]((_0x597932,_0x380243)=>{const _0xf7f937=_0x1e84e4;return _0x597932[_0xf7f937(0x224)]!==_0x380243[_0xf7f937(0x224)]&&_0x597932[_0xf7f937(0x224)]>0x0&&_0x380243[_0xf7f937(0x224)]>0x0?_0x597932['price']-_0x380243[_0xf7f937(0x224)]:_0x597932['id']-_0x380243['id'];}),_0x563c50[_0x1e84e4(0x1d8)](_0x1c76be);},DataManager[_0x17c912(0x215)]=function(_0x5d904a){const _0x11689a=_0x17c912;if(!_0x5d904a)return![];if(![0x0,0x2]['includes'](_0x5d904a[_0x11689a(0x196)]))return![];if(_0x5d904a[_0x11689a(0x1a3)]['type']===0x4)return![];if(this['checkForMatchingFieldEffects'](_0x5d904a,Game_Action[_0x11689a(0x213)]))return![];const _0x173120=_0x5d904a[_0x11689a(0x245)]||'',_0xf71318=VisuMZ['FullFieldRecovery'][_0x11689a(0x1a7)];if(_0x173120[_0x11689a(0x266)](_0xf71318[_0x11689a(0x186)]))return![];if(_0x173120[_0x11689a(0x266)](_0xf71318[_0x11689a(0x25e)]))return![];if(_0x173120[_0x11689a(0x266)](_0xf71318[_0x11689a(0x26c)]))return!![];if(_0x5d904a[_0x11689a(0x1a3)][_0x11689a(0x1cf)]===0x3)return!![];for(const _0x1f6656 of _0x5d904a[_0x11689a(0x1ae)]){if(_0x1f6656[_0x11689a(0x17d)]===Game_Action['EFFECT_RECOVER_HP']){if(_0x1f6656[_0x11689a(0x1ff)]>0x0)return!![];if(_0x1f6656[_0x11689a(0x22a)]>0x0)return!![];}}return![];},DataManager[_0x17c912(0x24e)]=function(){const _0x36cebc=_0x17c912;this[_0x36cebc(0x1dd)]=this[_0x36cebc(0x1dd)]||{};if(this['_fullFieldRecoveryItems']['mp']!==undefined)return this[_0x36cebc(0x1dd)]['mp'];return this[_0x36cebc(0x1dd)]['mp']=this[_0x36cebc(0x246)](),this[_0x36cebc(0x1dd)]['mp'];},DataManager[_0x17c912(0x246)]=function(){const _0x39f613=_0x17c912;if(DataManager[_0x39f613(0x23f)][_0x39f613(0x18d)][_0x39f613(0x201)]>0x0)return DataManager[_0x39f613(0x23f)]['mpItems'][_0x39f613(0x177)](_0x39d651=>$dataItems[_0x39d651])[_0x39f613(0x18f)](null)['remove'](undefined);const _0xc78249=[],_0x486676=[];for(const _0x238468 of $dataItems){if(!_0x238468)continue;if(!this[_0x39f613(0x20e)](_0x238468))continue;_0x238468['consumable']?_0xc78249[_0x39f613(0x1b7)](_0x238468):_0x486676[_0x39f613(0x1b7)](_0x238468);}return _0xc78249[_0x39f613(0x1b3)]((_0x5c89ef,_0x238ff7)=>{const _0x3db5f7=_0x39f613;return _0x5c89ef[_0x3db5f7(0x224)]!==_0x238ff7['price']?_0x5c89ef[_0x3db5f7(0x224)]-_0x238ff7[_0x3db5f7(0x224)]:_0x5c89ef['id']-_0x238ff7['id'];}),_0x486676[_0x39f613(0x1d8)](_0xc78249);},DataManager[_0x17c912(0x20e)]=function(_0x16d299){const _0x1a2740=_0x17c912;if(!_0x16d299)return![];if(![0x0,0x2][_0x1a2740(0x1d3)](_0x16d299[_0x1a2740(0x196)]))return![];if(_0x16d299[_0x1a2740(0x1a3)]['type']===0x3)return![];if(this[_0x1a2740(0x253)](_0x16d299,Game_Action[_0x1a2740(0x250)]))return![];const _0x18bfc8=_0x16d299['note']||'',_0x3065d8=VisuMZ[_0x1a2740(0x1cc)]['RegExp'];if(_0x18bfc8[_0x1a2740(0x266)](_0x3065d8['ExcludeRecovery']))return![];if(_0x18bfc8['match'](_0x3065d8['ExcludeMpRecovery']))return![];if(_0x18bfc8[_0x1a2740(0x266)](_0x3065d8[_0x1a2740(0x19c)]))return!![];if(_0x16d299['damage']['type']===0x4)return!![];for(const _0x18109f of _0x16d299[_0x1a2740(0x1ae)]){if(_0x18109f[_0x1a2740(0x17d)]===Game_Action[_0x1a2740(0x250)]){if(_0x18109f[_0x1a2740(0x1ff)]>0x0)return!![];if(_0x18109f['value2']>0x0)return!![];}}return![];},DataManager['getFullFieldRecoveryStateItems']=function(){const _0x2ca929=_0x17c912;this['_fullFieldRecoveryItems']=this['_fullFieldRecoveryItems']||{};if(this[_0x2ca929(0x1dd)][_0x2ca929(0x22d)]!==undefined)return this[_0x2ca929(0x1dd)][_0x2ca929(0x22d)];return this[_0x2ca929(0x1dd)]['state']=this[_0x2ca929(0x25d)](),this[_0x2ca929(0x1dd)][_0x2ca929(0x22d)];},DataManager['generateFieldRecoveryStateItemsList']=function(){const _0x1e7ea2=_0x17c912;if(DataManager[_0x1e7ea2(0x23f)][_0x1e7ea2(0x1fc)]['length']>0x0)return DataManager[_0x1e7ea2(0x23f)][_0x1e7ea2(0x1fc)][_0x1e7ea2(0x177)](_0x375d07=>$dataItems[_0x375d07])['remove'](null)[_0x1e7ea2(0x18f)](undefined);const _0x1e43a2=[],_0x33579c=[];for(const _0x47179d of $dataItems){if(!_0x47179d)continue;if(!this[_0x1e7ea2(0x174)](_0x47179d))continue;_0x47179d['consumable']?_0x1e43a2['push'](_0x47179d):_0x33579c[_0x1e7ea2(0x1b7)](_0x47179d);}return _0x1e43a2['sort']((_0x55c2d1,_0xb8a18c)=>{const _0x72cfda=_0x1e7ea2;return _0x55c2d1[_0x72cfda(0x224)]!==_0xb8a18c[_0x72cfda(0x224)]?_0x55c2d1['price']-_0xb8a18c['price']:_0x55c2d1['id']-_0xb8a18c['id'];}),_0x33579c[_0x1e7ea2(0x1d8)](_0x1e43a2);},DataManager[_0x17c912(0x174)]=function(_0x20c273){const _0x15d9f3=_0x17c912;if(!_0x20c273)return![];if(![0x0,0x2][_0x15d9f3(0x1d3)](_0x20c273[_0x15d9f3(0x196)]))return![];if(_0x20c273['damage']['type']===0x3)return![];if(_0x20c273['damage'][_0x15d9f3(0x1cf)]===0x4)return![];if(this[_0x15d9f3(0x253)](_0x20c273,Game_Action[_0x15d9f3(0x1de)]))return![];const _0x43c916=_0x20c273[_0x15d9f3(0x245)]||'',_0x561779=VisuMZ['FullFieldRecovery'][_0x15d9f3(0x1a7)];if(_0x43c916[_0x15d9f3(0x266)](_0x561779[_0x15d9f3(0x186)]))return![];if(_0x43c916[_0x15d9f3(0x266)](_0x561779[_0x15d9f3(0x1f0)]))return![];if(_0x43c916[_0x15d9f3(0x266)](_0x561779[_0x15d9f3(0x230)]))return!![];for(const _0x38a1be of _0x20c273[_0x15d9f3(0x1ae)]){if(_0x38a1be[_0x15d9f3(0x17d)]===Game_Action[_0x15d9f3(0x1de)])return!![];}return![];},SoundManager['playFullFieldRecoveryOpen']=function(){const _0x14b99d=_0x17c912,_0x3bdd84=VisuMZ[_0x14b99d(0x1cc)][_0x14b99d(0x1d0)]['Sound'],_0x2e52bc={'name':_0x3bdd84[_0x14b99d(0x1bc)],'volume':_0x3bdd84[_0x14b99d(0x1e8)],'pitch':_0x3bdd84[_0x14b99d(0x1ef)],'pan':_0x3bdd84[_0x14b99d(0x1da)]};AudioManager[_0x14b99d(0x200)](_0x2e52bc);},SoundManager['playFullFieldRecoveryUse']=function(){const _0x27dab8=_0x17c912,_0x46790e=VisuMZ['FullFieldRecovery']['Settings']['Sound'],_0x3458fd={'name':_0x46790e['askName'],'volume':_0x46790e['askVolume'],'pitch':_0x46790e[_0x27dab8(0x17f)],'pan':_0x46790e[_0x27dab8(0x1ea)]};AudioManager['playSe'](_0x3458fd);},TextManager['FULL_FIELD_RECOVERY']={'alreadyFull':VisuMZ[_0x17c912(0x1cc)]['Settings'][_0x17c912(0x20c)][_0x17c912(0x18b)],'noItemsToHeal':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x1b6)],'needsHealing':VisuMZ['FullFieldRecovery'][_0x17c912(0x1d0)]['General'][_0x17c912(0x1e0)],'optionHeal':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x193)],'optionCancel':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x17c)]},SceneManager[_0x17c912(0x1dc)]=function(){const _0x3eabb3=_0x17c912;return this[_0x3eabb3(0x17b)]&&this[_0x3eabb3(0x17b)][_0x3eabb3(0x1c4)]===Scene_Map;},Game_Temp['prototype'][_0x17c912(0x20f)]=function(_0x1d3b16){const _0x102c6d=_0x17c912;this[_0x102c6d(0x240)]=_0x1d3b16;},Game_Temp[_0x17c912(0x218)][_0x17c912(0x178)]=function(){const _0x2bc43b=_0x17c912;return this[_0x2bc43b(0x240)];},VisuMZ['FullFieldRecovery'][_0x17c912(0x1e6)]=Game_Interpreter['prototype']['command357'],Game_Interpreter[_0x17c912(0x218)][_0x17c912(0x25b)]=function(_0x408aae){const _0x462f64=_0x17c912;return $gameTemp[_0x462f64(0x20f)](this),VisuMZ['FullFieldRecovery'][_0x462f64(0x1e6)][_0x462f64(0x183)](this,_0x408aae);},Game_System[_0x17c912(0x23f)]={'defaultMapEnable':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x1c6)]},VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x192)]=Game_System[_0x17c912(0x218)][_0x17c912(0x1d2)],Game_System['prototype'][_0x17c912(0x1d2)]=function(){const _0xda9bb1=_0x17c912;VisuMZ[_0xda9bb1(0x1cc)][_0xda9bb1(0x192)][_0xda9bb1(0x183)](this),this['initFullFieldRecovery']();},Game_System['prototype']['initFullFieldRecovery']=function(){const _0xead4fe=_0x17c912;this[_0xead4fe(0x258)]=Game_System[_0xead4fe(0x23f)][_0xead4fe(0x216)];},Game_System[_0x17c912(0x218)]['canFullFieldRecovery']=function(){const _0x2616f5=_0x17c912;if(this[_0x2616f5(0x258)]===undefined)this[_0x2616f5(0x1c5)]();return this[_0x2616f5(0x258)];},Game_System[_0x17c912(0x218)][_0x17c912(0x23b)]=function(_0x3dbd7c){const _0xafd52=_0x17c912;if(this[_0xafd52(0x258)]===undefined)this['initFullFieldRecovery']();this[_0xafd52(0x258)]=_0x3dbd7c;},VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x260)]=Game_Map['prototype'][_0x17c912(0x18e)],Game_Map[_0x17c912(0x218)][_0x17c912(0x18e)]=function(_0x5321e3){const _0x46d856=_0x17c912;VisuMZ['FullFieldRecovery'][_0x46d856(0x260)]['call'](this,_0x5321e3),this[_0x46d856(0x220)]();},Game_Map[_0x17c912(0x218)][_0x17c912(0x220)]=function(){const _0x4114f0=_0x17c912;this[_0x4114f0(0x234)]=![];const _0x2e3f33=VisuMZ[_0x4114f0(0x1cc)][_0x4114f0(0x1a7)],_0x5edeea=$dataMap?$dataMap[_0x4114f0(0x245)]||'':'';_0x5edeea['match'](_0x2e3f33['DisableFieldRec'])&&(this['_disableFullFieldRecovery']=!![]);},Game_Map[_0x17c912(0x218)][_0x17c912(0x1f3)]=function(){const _0x13aad5=_0x17c912;return this[_0x13aad5(0x234)];},Game_Action['prototype']['testFieldStateRecovery']=function(_0x4bdae7){const _0x3926ac=_0x17c912;return this[_0x3926ac(0x19a)](_0x4bdae7)&&this[_0x3926ac(0x1be)](_0x4bdae7)&&this['hasItemAnyValidStateRecoveryNotetags']();},Game_Action[_0x17c912(0x218)][_0x17c912(0x214)]=function(){const _0x3bcec1=_0x17c912,_0x47b9d7=VisuMZ[_0x3bcec1(0x1cc)][_0x3bcec1(0x1a7)],_0x27d91a=this['item']()[_0x3bcec1(0x245)];if(_0x27d91a['match'](_0x47b9d7[_0x3bcec1(0x230)]))return!![];return![];},Game_Action[_0x17c912(0x218)]['hasItemAnyValidStateRecoveryEffects']=function(_0x1d1e20){const _0x4ae7d7=_0x17c912;return this['item']()[_0x4ae7d7(0x1ae)]['some'](_0x3a3c46=>this['testItemStateRecoveryEffect'](_0x1d1e20,_0x3a3c46));},Game_Action[_0x17c912(0x218)][_0x17c912(0x1b8)]=function(_0x234a3e,_0x49a3f7){const _0x19ecae=_0x17c912;switch(_0x49a3f7[_0x19ecae(0x17d)]){case Game_Action['EFFECT_REMOVE_STATE']:return _0x234a3e[_0x19ecae(0x1bf)](_0x49a3f7[_0x19ecae(0x21b)]);default:return![];}},Game_Party[_0x17c912(0x23f)]={'stateHeal':VisuMZ['FullFieldRecovery']['Settings'][_0x17c912(0x20c)]['HealStates'],'hpHeal':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)]['General'][_0x17c912(0x203)],'mpHeal':VisuMZ[_0x17c912(0x1cc)]['Settings']['General'][_0x17c912(0x1ab)],'prioritizeLowestHP':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x23d)]??!![],'prioritizeLowestMP':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)]['HealMpLowestRateFirst']??!![]},Game_Party[_0x17c912(0x218)][_0x17c912(0x1a6)]=function(){const _0x14bf34=_0x17c912;return this[_0x14bf34(0x1e1)]()||this[_0x14bf34(0x1a9)]()||this['fieldMembersNeedMpRecovery']();},Game_Party[_0x17c912(0x218)][_0x17c912(0x208)]=function(){const _0x1cd8e5=_0x17c912;if(this[_0x1cd8e5(0x1e1)]()){const _0xf60360=DataManager[_0x1cd8e5(0x1a8)]();if(_0xf60360[_0x1cd8e5(0x1cd)](_0x4b586c=>this[_0x1cd8e5(0x1c2)](_0x4b586c)>0x0))return!![];}if(this[_0x1cd8e5(0x1a9)]()){const _0x343417=DataManager[_0x1cd8e5(0x1db)]();if(_0x343417['some'](_0x448ae7=>this[_0x1cd8e5(0x1c2)](_0x448ae7)>0x0))return!![];}if(this[_0x1cd8e5(0x184)]()){const _0x9bb2ec=DataManager[_0x1cd8e5(0x24e)]();if(_0x9bb2ec[_0x1cd8e5(0x1cd)](_0x4c7bd0=>this[_0x1cd8e5(0x1c2)](_0x4c7bd0)>0x0))return!![];}return![];},Game_Party['prototype'][_0x17c912(0x251)]=function(){const _0x231a0c=_0x17c912;this[_0x231a0c(0x23a)](),this[_0x231a0c(0x1a2)](),this[_0x231a0c(0x206)]();},Game_Party[_0x17c912(0x218)]['bypassFrontviewUiFieldPopup']=function(_0x1418ed){const _0x4ac1bf=_0x17c912;if(!Imported[_0x4ac1bf(0x18a)])return;if(!SceneManager[_0x4ac1bf(0x239)]())return;for(const _0x3f22cc of this[_0x4ac1bf(0x1d7)]()){if(!_0x3f22cc)continue;_0x3f22cc[_0x4ac1bf(0x209)]=_0x1418ed;if(_0x1418ed)continue;const _0x8584c=_0x3f22cc['result']();if(!_0x8584c)continue;(_0x8584c[_0x4ac1bf(0x223)]&&_0x8584c[_0x4ac1bf(0x180)]!==0x0||_0x8584c[_0x4ac1bf(0x1cb)]!==0x0)&&VisuMZ[_0x4ac1bf(0x1d5)]['StartDamagePopup'](_0x3f22cc);}};Imported[_0x17c912(0x18a)]&&(VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x26a)]=VisuMZ[_0x17c912(0x1d5)][_0x17c912(0x26a)],VisuMZ[_0x17c912(0x1d5)][_0x17c912(0x26a)]=function(_0x133508){const _0xa4acea=_0x17c912;if(_0x133508&&_0x133508['_bypassFieldDamagePopup'])return;VisuMZ[_0xa4acea(0x1cc)][_0xa4acea(0x26a)][_0xa4acea(0x183)](this,_0x133508);});;Game_Party[_0x17c912(0x218)][_0x17c912(0x23a)]=function(){const _0x36ffb0=_0x17c912;if(!Game_Party[_0x36ffb0(0x23f)][_0x36ffb0(0x1e3)])return;const _0x304c35=DataManager['getFullFieldRecoveryStateItems']();for(const _0x834526 of _0x304c35){if(!_0x834526)continue;this['processFullFieldStateRecoveryItem'](_0x834526);}},Game_Party[_0x17c912(0x218)]['fieldMembersNeedStateRecovery']=function(_0x551774){const _0x3bcde6=_0x17c912;if(!Game_Party[_0x3bcde6(0x23f)][_0x3bcde6(0x1e3)])return![];const _0x51369c=_0x551774?this['allMembers']():this[_0x3bcde6(0x20a)]();return _0x51369c[_0x3bcde6(0x1cd)](_0x345ede=>_0x345ede&&_0x345ede[_0x3bcde6(0x1c8)]&&_0x345ede[_0x3bcde6(0x1c8)][_0x3bcde6(0x201)]>0x0);},Game_Party['prototype']['processFullFieldStateRecoveryItem']=function(_0x5abd9d){this['processFullFieldStateRecoveryUsage'](_0x5abd9d,![]),this['processFullFieldStateRecoveryUsage'](_0x5abd9d,!![]);},Game_Party[_0x17c912(0x218)][_0x17c912(0x19f)]=function(_0x41e9d2,_0x10ed11){const _0x277cd6=_0x17c912,_0x4c9029=_0x10ed11?this['allMembers']():this[_0x277cd6(0x20a)]();if(this[_0x277cd6(0x1c2)](_0x41e9d2)>0x0&&this[_0x277cd6(0x1e1)](_0x10ed11))for(const _0x2eedb1 of _0x4c9029){if(this[_0x277cd6(0x1c2)](_0x41e9d2)<=0x0)break;if(!_0x2eedb1)continue;if(!_0x2eedb1['_states'])continue;if(_0x2eedb1[_0x277cd6(0x1c8)][_0x277cd6(0x201)]<=0x0)continue;if(_0x2eedb1[_0x277cd6(0x1ca)]()){if(![0x9,0xa,0xc,0xd][_0x277cd6(0x1d3)](_0x41e9d2[_0x277cd6(0x198)]))continue;}else{if([0x9,0xa][_0x277cd6(0x1d3)](_0x41e9d2['scope']))continue;}const _0x36f457=new Game_Action(_0x2eedb1);_0x36f457[_0x277cd6(0x247)](_0x41e9d2);let _0xa6877f=![];const _0x491904=_0x36f457[_0x277cd6(0x24c)]()?this['allMembers']():[_0x2eedb1];for(const _0x3ceb56 of _0x491904){if(!_0x36f457['testFieldStateRecovery'](_0x3ceb56))continue;if(!_0x3ceb56[_0x277cd6(0x1c8)])continue;if(_0x3ceb56[_0x277cd6(0x1c8)][_0x277cd6(0x201)]<=0x0)continue;for(let _0x372a33=0x0;_0x372a33<_0x36f457[_0x277cd6(0x1b2)]();_0x372a33++){_0x36f457['apply'](_0x3ceb56),_0xa6877f=!![];}}if(_0xa6877f)_0x2eedb1[_0x277cd6(0x19e)](_0x41e9d2);}},Game_Party[_0x17c912(0x218)][_0x17c912(0x1a2)]=function(){const _0x44ab40=_0x17c912;if(!Game_Party[_0x44ab40(0x23f)]['hpHeal'])return;const _0x54de01=DataManager[_0x44ab40(0x1db)]();for(const _0x2670d1 of _0x54de01){if(!_0x2670d1)continue;this[_0x44ab40(0x25f)](_0x2670d1);}},Game_Party['prototype']['fieldMembersNeedHpRecovery']=function(_0x4335d0){const _0x150892=_0x17c912;if(!Game_Party['FULL_FIELD_RECOVERY']['hpHeal'])return![];const _0x461a13=_0x4335d0?this['allMembers']():this[_0x150892(0x20a)]();return _0x461a13[_0x150892(0x1cd)](_0x550b15=>_0x550b15&&_0x550b15[_0x150892(0x1f2)]>_0x550b15['hp']);},Game_Party[_0x17c912(0x218)][_0x17c912(0x25f)]=function(_0x52ef4d){const _0xef7404=_0x17c912;this[_0xef7404(0x269)](!![]),this['processFullFieldHpRecoveryUsage'](_0x52ef4d,![]),this['processFullFieldHpRecoveryUsage'](_0x52ef4d,!![]),this['bypassFrontviewUiFieldPopup'](![]);},Game_Party[_0x17c912(0x218)][_0x17c912(0x195)]=function(_0x4140a5,_0x402c15){const _0x2c8665=_0x17c912,_0x38f01e=_0x402c15?this[_0x2c8665(0x1d7)]():this[_0x2c8665(0x20a)]();let _0x18d753=0x0;while(this[_0x2c8665(0x1c2)](_0x4140a5)>0x0&&this[_0x2c8665(0x1a9)](_0x402c15)){if(_0x18d753++>=0xa)break;Game_Party['FULL_FIELD_RECOVERY']['prioritizeLowestHP']&&_0x38f01e['sort']((_0x14420f,_0x3d1a8f)=>_0x14420f['hpRate']()-_0x3d1a8f[_0x2c8665(0x1b1)]());for(const _0x3e7e01 of _0x38f01e){if(this[_0x2c8665(0x1c2)](_0x4140a5)<=0x0)break;if(!_0x3e7e01)continue;if(_0x3e7e01[_0x2c8665(0x1f2)]===_0x3e7e01['hp'])continue;if(_0x3e7e01[_0x2c8665(0x1ca)]()){if(![0x9,0xa,0xc,0xd][_0x2c8665(0x1d3)](_0x4140a5['scope']))continue;}else{if([0x9,0xa][_0x2c8665(0x1d3)](_0x4140a5[_0x2c8665(0x198)]))continue;}const _0x27a81a=new Game_Action(_0x3e7e01);_0x27a81a[_0x2c8665(0x247)](_0x4140a5);const _0x358493=_0x27a81a[_0x2c8665(0x24c)]()?this['allMembers']():[_0x3e7e01];for(const _0x1bedc2 of _0x358493){if(_0x1bedc2[_0x2c8665(0x1f2)]===_0x1bedc2['hp'])continue;_0x18d753=0x0;const _0x167163=_0x3e7e01[_0x2c8665(0x222)](),_0x3d9de4=_0x167163?_0x167163[_0x2c8665(0x180)]:0x0;for(let _0x5f3711=0x0;_0x5f3711<_0x27a81a[_0x2c8665(0x1b2)]();_0x5f3711++){_0x27a81a[_0x2c8665(0x233)](_0x1bedc2);}_0x167163&&_0x3e7e01[_0x2c8665(0x209)]&&(_0x167163[_0x2c8665(0x180)]+=_0x3d9de4);}_0x3e7e01['useItem'](_0x4140a5);if(Game_Party['FULL_FIELD_RECOVERY'][_0x2c8665(0x1bd)])break;;}}},Game_Party[_0x17c912(0x218)]['processFullFieldMpRecovery']=function(){const _0xbae71e=_0x17c912;if(!Game_Party[_0xbae71e(0x23f)][_0xbae71e(0x255)])return;const _0x4baaab=DataManager[_0xbae71e(0x24e)]();for(const _0xdae248 of _0x4baaab){if(!_0xdae248)continue;this[_0xbae71e(0x1f1)](_0xdae248);}},Game_Party[_0x17c912(0x218)][_0x17c912(0x184)]=function(_0x3a915c){const _0x5a07d2=_0x17c912;if(!Game_Party['FULL_FIELD_RECOVERY']['mpHeal'])return![];const _0x2d1a56=_0x3a915c?this[_0x5a07d2(0x1d7)]():this[_0x5a07d2(0x20a)]();return _0x2d1a56[_0x5a07d2(0x1cd)](_0x113658=>_0x113658&&_0x113658['mmp']>_0x113658['mp']);},Game_Party[_0x17c912(0x218)]['processFullFieldMpRecoveryItem']=function(_0x27e7b6){const _0x2ee472=_0x17c912;this[_0x2ee472(0x269)](!![]),this['processFullFieldMpRecoveryUsage'](_0x27e7b6,![]),this['processFullFieldMpRecoveryUsage'](_0x27e7b6,!![]),this['bypassFrontviewUiFieldPopup'](![]);},Game_Party['prototype'][_0x17c912(0x252)]=function(_0xeec6fe,_0x55a854){const _0x375120=_0x17c912,_0x35bd09=_0x55a854?this[_0x375120(0x1d7)]():this[_0x375120(0x20a)]();let _0x163159=0x0;while(this[_0x375120(0x1c2)](_0xeec6fe)>0x0&&this[_0x375120(0x184)](_0x55a854)){if(_0x163159++>=0xa)break;Game_Party[_0x375120(0x23f)][_0x375120(0x20b)]&&_0x35bd09[_0x375120(0x1b3)]((_0x556398,_0x3c1cc6)=>_0x556398[_0x375120(0x259)]()-_0x3c1cc6['mpRate']());for(const _0x21c63a of _0x35bd09){if(this[_0x375120(0x1c2)](_0xeec6fe)<=0x0)break;if(!_0x21c63a)continue;if(_0x21c63a[_0x375120(0x17a)]===_0x21c63a['mp'])continue;if(_0x21c63a['isDead']()){if(![0x9,0xa,0xc,0xd][_0x375120(0x1d3)](_0xeec6fe['scope']))continue;}else{if([0x9,0xa][_0x375120(0x1d3)](_0xeec6fe[_0x375120(0x198)]))continue;}const _0x4fccbc=new Game_Action(_0x21c63a);_0x4fccbc[_0x375120(0x247)](_0xeec6fe);const _0x4bf27d=_0x4fccbc[_0x375120(0x24c)]()?this[_0x375120(0x1d7)]():[_0x21c63a];for(const _0x250cd0 of _0x4bf27d){if(_0x250cd0[_0x375120(0x17a)]===_0x250cd0['mp'])continue;_0x163159=0x0;const _0x41bc15=_0x21c63a[_0x375120(0x222)](),_0x4513d4=_0x41bc15?_0x41bc15['mpDamage']:0x0;for(let _0x2267b3=0x0;_0x2267b3<_0x4fccbc[_0x375120(0x1b2)]();_0x2267b3++){_0x4fccbc[_0x375120(0x233)](_0x250cd0);}_0x41bc15&&_0x21c63a[_0x375120(0x209)]&&(_0x41bc15[_0x375120(0x1cb)]+=_0x4513d4);}_0x21c63a['useItem'](_0xeec6fe);if(Game_Party[_0x375120(0x23f)][_0x375120(0x20b)])break;;}}},Scene_Map[_0x17c912(0x23f)]={'shortcutKey':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x1d4)],'bgTypeMessage':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)][_0x17c912(0x189)],'bgTypeChoice':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)]['ChoiceWindow_BgType'],'animationID':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)][_0x17c912(0x20c)]['AnimationID']},VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x232)]=Scene_Map[_0x17c912(0x218)][_0x17c912(0x182)],Scene_Map[_0x17c912(0x218)]['createAllWindows']=function(){const _0x444517=_0x17c912;this['createFullFieldRecoveryWindows'](),VisuMZ['FullFieldRecovery']['Scene_Map_createAllWindows'][_0x444517(0x183)](this);},Scene_Map[_0x17c912(0x218)][_0x17c912(0x1ad)]=function(){const _0x229f09=_0x17c912;this[_0x229f09(0x242)](),this['createFullFieldRecoveryChoiceWindow']();},Scene_Map[_0x17c912(0x218)]['createFullFieldRecoveryMessageWindow']=function(){const _0x41cbe7=_0x17c912,_0x2969b7=this[_0x41cbe7(0x21f)](),_0x5f9169=new Window_FullFieldRecoveryMessage(_0x2969b7);this[_0x41cbe7(0x261)]=_0x5f9169,this[_0x41cbe7(0x256)](_0x5f9169),_0x5f9169[_0x41cbe7(0x241)]=0x0,_0x5f9169[_0x41cbe7(0x227)](Scene_Map[_0x41cbe7(0x23f)][_0x41cbe7(0x22c)]);},Scene_Map['prototype'][_0x17c912(0x21f)]=function(){const _0x31d8d3=_0x17c912;if(VisuMZ[_0x31d8d3(0x1cc)]['Settings'][_0x31d8d3(0x20c)][_0x31d8d3(0x1e7)])return VisuMZ[_0x31d8d3(0x1cc)]['Settings'][_0x31d8d3(0x20c)][_0x31d8d3(0x1e7)]['call'](this);const _0x2baf1d=0x2d0,_0x40a1af=this[_0x31d8d3(0x1ce)](0x3,!![]),_0x514770=Math[_0x31d8d3(0x17e)]((Graphics[_0x31d8d3(0x19b)]-_0x2baf1d)/0x2),_0x59924f=Math['ceil']((Graphics[_0x31d8d3(0x26b)]-_0x40a1af)/0x2);return new Rectangle(_0x514770,_0x59924f,_0x2baf1d,_0x40a1af);},Scene_Map[_0x17c912(0x218)][_0x17c912(0x217)]=function(){const _0x2d76e6=_0x17c912,_0x235a89=this[_0x2d76e6(0x221)](),_0x1e4c2c=new Window_FullFieldRecoveryChoice(_0x235a89);this[_0x2d76e6(0x268)]=_0x1e4c2c,this[_0x2d76e6(0x256)](_0x1e4c2c),_0x1e4c2c[_0x2d76e6(0x241)]=0x0,_0x1e4c2c[_0x2d76e6(0x227)](Scene_Map[_0x2d76e6(0x23f)][_0x2d76e6(0x1ba)]),_0x1e4c2c['setHandler'](_0x2d76e6(0x1a4),this['onFullFieldRecoveryHeal']['bind'](this)),_0x1e4c2c[_0x2d76e6(0x236)]('cancel',this['onFullFieldRecoveryCancel'][_0x2d76e6(0x21c)](this));},Scene_Map['prototype'][_0x17c912(0x221)]=function(){const _0x5717a9=_0x17c912,_0x168b3c=this[_0x5717a9(0x261)];if(VisuMZ[_0x5717a9(0x1cc)][_0x5717a9(0x1d0)][_0x5717a9(0x20c)][_0x5717a9(0x187)])return VisuMZ[_0x5717a9(0x1cc)]['Settings'][_0x5717a9(0x20c)][_0x5717a9(0x187)][_0x5717a9(0x183)](this,_0x168b3c);const _0x2642f3=0xc0,_0x28a79d=this['calcWindowHeight'](0x2,!![]),_0x170d9b=_0x168b3c['x']+_0x168b3c['width']-_0x2642f3,_0x3d0258=_0x168b3c['y']-_0x28a79d;return new Rectangle(_0x170d9b,_0x3d0258,_0x2642f3,_0x28a79d);},Scene_Map['prototype']['fullFieldRecoveryOpen']=function(){const _0x3d8008=_0x17c912;if(!$gameSystem['canFullFieldRecovery']())return![];if($gameMap[_0x3d8008(0x1f3)]())return![];SoundManager['playFullFieldRecoveryOpen'](),this[_0x3d8008(0x261)]&&(this[_0x3d8008(0x261)][_0x3d8008(0x179)](),this[_0x3d8008(0x261)][_0x3d8008(0x228)]()),this['_fullFieldRecoveryChoiceWindow']&&(this[_0x3d8008(0x268)][_0x3d8008(0x179)](),this[_0x3d8008(0x268)][_0x3d8008(0x228)](),this[_0x3d8008(0x268)][_0x3d8008(0x1c1)](),this['_fullFieldRecoveryChoiceWindow'][_0x3d8008(0x1fe)]()),this[_0x3d8008(0x1bb)]=![];},Scene_Map[_0x17c912(0x218)][_0x17c912(0x229)]=function(){const _0x35b4ce=_0x17c912;this[_0x35b4ce(0x261)]&&this['_fullFieldRecoveryMessageWindow'][_0x35b4ce(0x1c7)](),this['_fullFieldRecoveryChoiceWindow']&&(this[_0x35b4ce(0x268)]['close'](),this['_fullFieldRecoveryChoiceWindow']['deactivate']()),this[_0x35b4ce(0x1bb)]=!![];},Scene_Map[_0x17c912(0x218)][_0x17c912(0x202)]=function(){const _0x2f3e14=_0x17c912;$gameParty[_0x2f3e14(0x251)](),SoundManager[_0x2f3e14(0x18c)](),this[_0x2f3e14(0x1e4)](),this['fullFieldRecoveryClose']();},Scene_Map[_0x17c912(0x218)][_0x17c912(0x1e4)]=function(){const _0x1dbe18=_0x17c912,_0x521b1d=Scene_Map[_0x1dbe18(0x23f)][_0x1dbe18(0x257)];if(_0x521b1d<=0x0)return;const _0x20a04a=[$gamePlayer];$gameTemp[_0x1dbe18(0x1d6)](_0x20a04a,_0x521b1d);},Scene_Map[_0x17c912(0x218)][_0x17c912(0x190)]=function(){const _0x4741bd=_0x17c912;SoundManager[_0x4741bd(0x1d9)](),this[_0x4741bd(0x229)]();},VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x176)]=Scene_Map[_0x17c912(0x218)]['updateMain'],Scene_Map['prototype'][_0x17c912(0x185)]=function(){const _0x269b2e=_0x17c912;VisuMZ[_0x269b2e(0x1cc)][_0x269b2e(0x176)][_0x269b2e(0x183)](this),this[_0x269b2e(0x267)]();},Scene_Map[_0x17c912(0x218)][_0x17c912(0x267)]=function(){const _0x39fdbb=_0x17c912;if($gameMessage['isBusy']())return;if($gameMap[_0x39fdbb(0x1b0)]())return;if(!this[_0x39fdbb(0x1bb)])return;if(!SceneManager[_0x39fdbb(0x1dc)]())return;const _0x57a67b=Scene_Map[_0x39fdbb(0x23f)]['shortcutKey'];Input['isTriggered'](_0x57a67b)&&this[_0x39fdbb(0x1a5)]();};function _0x325d(_0x56d3fe,_0x4c9ff5){const _0x43e30d=_0x43e3();return _0x325d=function(_0x325dcc,_0x4541a9){_0x325dcc=_0x325dcc-0x174;let _0x6a8c16=_0x43e30d[_0x325dcc];return _0x6a8c16;},_0x325d(_0x56d3fe,_0x4c9ff5);}function Window_FullFieldRecoveryMessage(){const _0x137534=_0x17c912;this[_0x137534(0x1d2)](...arguments);}Window_FullFieldRecoveryMessage[_0x17c912(0x218)]=Object[_0x17c912(0x264)](Window_Base[_0x17c912(0x218)]),Window_FullFieldRecoveryMessage[_0x17c912(0x218)][_0x17c912(0x1c4)]=Window_FullFieldRecoveryMessage,Window_FullFieldRecoveryMessage[_0x17c912(0x218)][_0x17c912(0x1d2)]=function(_0x55a22e){const _0x44ab5c=_0x17c912;Window_Base[_0x44ab5c(0x218)][_0x44ab5c(0x1d2)][_0x44ab5c(0x183)](this,_0x55a22e),this[_0x44ab5c(0x228)]();},Window_FullFieldRecoveryMessage[_0x17c912(0x218)]['refresh']=function(){const _0x33f5aa=_0x17c912;this['contents']['clear']();const _0x247126=this[_0x33f5aa(0x1f7)](),_0x30ccb4=this[_0x33f5aa(0x24d)](_0x247126),_0x508d00=Math['floor']((this[_0x33f5aa(0x21e)]-_0x30ccb4[_0x33f5aa(0x22f)])/0x2),_0x3f8091=Math[_0x33f5aa(0x17e)]((this[_0x33f5aa(0x235)]-_0x30ccb4[_0x33f5aa(0x204)])/0x2);this['drawTextEx'](_0x247126,_0x508d00,_0x3f8091);},Window_FullFieldRecoveryMessage[_0x17c912(0x218)][_0x17c912(0x1f7)]=function(){const _0xbb2d17=_0x17c912;if($gameParty[_0xbb2d17(0x1a6)]())return $gameParty[_0xbb2d17(0x208)]()?TextManager[_0xbb2d17(0x23f)][_0xbb2d17(0x1a0)]:TextManager[_0xbb2d17(0x23f)]['noItemsToHeal'];return TextManager[_0xbb2d17(0x23f)]['alreadyFull'];};function Window_FullFieldRecoveryChoice(){const _0x26c078=_0x17c912;this[_0x26c078(0x1d2)](...arguments);}Window_FullFieldRecoveryChoice[_0x17c912(0x218)]=Object[_0x17c912(0x264)](Window_Command[_0x17c912(0x218)]),Window_FullFieldRecoveryChoice[_0x17c912(0x218)][_0x17c912(0x1c4)]=Window_FullFieldRecoveryChoice,Window_FullFieldRecoveryChoice[_0x17c912(0x25c)]={'textAlign':VisuMZ[_0x17c912(0x1cc)][_0x17c912(0x1d0)]['General']['ChoiceWindowTextAlign']},Window_FullFieldRecoveryChoice[_0x17c912(0x218)][_0x17c912(0x1d2)]=function(_0x4203b0){const _0x113a89=_0x17c912;Window_Command[_0x113a89(0x218)]['initialize'][_0x113a89(0x183)](this,_0x4203b0);},Window_FullFieldRecoveryChoice[_0x17c912(0x218)]['makeCommandList']=function(){const _0x2d114b=_0x17c912;this[_0x2d114b(0x24a)](),this[_0x2d114b(0x226)]();},Window_FullFieldRecoveryChoice[_0x17c912(0x218)]['selectFirstAvailable']=function(){const _0x44beba=_0x17c912;this[_0x44beba(0x1df)](this[_0x44beba(0x1b9)](0x0)?0x0:0x1);},Window_FullFieldRecoveryChoice[_0x17c912(0x218)]['addHealCommand']=function(){const _0x5b6877=_0x17c912,_0x148f98=TextManager[_0x5b6877(0x23f)]['optionHeal'],_0xe5750b=_0x5b6877(0x1a4),_0x3d6a9e=$gameParty[_0x5b6877(0x1a6)]()&&$gameParty[_0x5b6877(0x208)]();this[_0x5b6877(0x225)](_0x148f98,_0xe5750b,_0x3d6a9e);},Window_FullFieldRecoveryChoice['prototype'][_0x17c912(0x226)]=function(){const _0x2b412e=_0x17c912,_0x3081b5=TextManager['FULL_FIELD_RECOVERY'][_0x2b412e(0x21a)],_0x3a9c67=_0x2b412e(0x1ec),_0xfd1b66=!![];this[_0x2b412e(0x225)](_0x3081b5,_0x3a9c67,_0xfd1b66);},Window_FullFieldRecoveryChoice[_0x17c912(0x218)][_0x17c912(0x1d1)]=function(){const _0x2a2432=_0x17c912;return Window_FullFieldRecoveryChoice['SETTINGS'][_0x2a2432(0x244)];},Window_FullFieldRecoveryChoice[_0x17c912(0x218)][_0x17c912(0x21d)]=function(_0x52f81d){const _0x321c22=_0x17c912,_0x4b55b1=this[_0x321c22(0x191)](_0x52f81d),_0x36752b=this[_0x321c22(0x1c9)](_0x52f81d),_0x28886d=this[_0x321c22(0x24d)](_0x36752b)[_0x321c22(0x22f)];this[_0x321c22(0x1f8)](this['isCommandEnabled'](_0x52f81d));const _0x426ac2=this[_0x321c22(0x1d1)]();if(_0x426ac2==='right')this[_0x321c22(0x181)](_0x36752b,_0x4b55b1['x']+_0x4b55b1[_0x321c22(0x22f)]-_0x28886d,_0x4b55b1['y'],_0x28886d);else{if(_0x426ac2===_0x321c22(0x237)){const _0xd5bf02=_0x4b55b1['x']+Math[_0x321c22(0x17e)]((_0x4b55b1[_0x321c22(0x22f)]-_0x28886d)/0x2);this[_0x321c22(0x181)](_0x36752b,_0xd5bf02,_0x4b55b1['y'],_0x28886d);}else this[_0x321c22(0x181)](_0x36752b,_0x4b55b1['x'],_0x4b55b1['y'],_0x28886d);}},Window_FullFieldRecoveryChoice[_0x17c912(0x218)][_0x17c912(0x1f4)]=function(){};