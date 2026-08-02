//=============================================================================
// VisuStella MZ - Field Skills
// VisuMZ_3_FieldSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_FieldSkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FieldSkills = VisuMZ.FieldSkills || {};
VisuMZ.FieldSkills.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.01] [FieldSkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Field_Skills_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Field Skills differ from Menu skills where they can be also activated from
 * the map to utilize a common event. On top of that, if attached to a battle
 * skill, it allows skills to have a different function in-battle than when out
 * of battle. The Field Skills plugin allows the player to pull up a menu list
 * of skills that the player can select from and activate from the map scene.
 * When selected, the common event attached to the Field Skill will launch and
 * activate, allowing for custom unique effects to occur.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Field Skills will activate Common Events upon selection and can have a
 *   separate usage from their in-battle functionality.
 * * Field Skills can be activated from the map scene in a specialized window
 *   to keep everything in one scene.
 * * Plugin Commands can be used to manually open the Field Skills List Window.
 * * Notetags can be used to determine which Field Skills can be enabled,
 *   disabled, hidden, or shown via Switches and Region ID's.
 * * This means that you can have some conditional Field Skills that can only
 *   be used while the player is standing in a specific location marked by 
 *   certain Region types and/or while certain switches are ON.
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
 * * VisuMZ_1_EventsMoveCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scene_Skill Activation
 * 
 * If the Plugin Parameter for "Scene_Skill > Usable Field Skills?" is enabled,
 * then Field Skills (skills with the <Field Skill Common Event: x> notetag)
 * can be activated from the Skill Scene regardless of their original occassion
 * being limited to "Battle Only" or "Never".
 * 
 * Furthermore, they will have a different effect when activated from the Skill
 * scene than in battle. This new effect will be treated like a skill that can
 * launch a Common Event and immediately take the player to the map scene where
 * the Common Event is reserved and activated.
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
 * === Field Skill-Related Notetags ===
 * 
 * ---
 *
 * <Field Skill Common Event: x>
 *
 * - Used for: Skill Notetags
 * - Makes the skill into a Field Skill that activates Common Event 'x'.
 *   - If this is used for a "Battle Only" or "Never" skill while the Plugin
 *     Parameter for "Scene_Skill > Usable Field Skills?" is on, the skill can
 *     now be activated through the Skill scene.
 *   - Field Skills will have a different effect from their battle variants.
 * - Replace 'x' with a number representing the ID of the Common Event to
 *   activate for this Field Skill.
 *
 * ---
 *
 * <Field Skill Help Description>
 *  text
 *  text
 * </Field Skill Help Description>
 *
 * - Used for: Skill Notetags
 * - When usable as a Field Skill, display different help description.
 * - Replace 'text' with the text data you'd like displayed in place of the
 *   default skill description if this skill can be used as a Field Skill.
 *
 * ---
 *
 * <Disable Field Skills>
 *
 * - Used for: Map Notetags
 * - Disables Field Skills from being able to be used on this map.
 *
 * ---
 *
 * <Show Field Skill Switch: x>
 *
 * <Show Field Skill All Switches: x,x,x>
 * <Show Field Skill Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the Field Skill based on switches.
 *   - The invisibility will only affect the map Field Skill List Window.
 *   - However, invisibility will disable the Field Skill in the Skill scene.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 *   - Insert multiple 'x' values to cover more ID's.
 * - If 'All' notetag variant is used, skill will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 * 
 * <Show Field Skill Region ID: x>
 * <Show Field Skill Region ID: x,x,x>
 * 
 * - Used for: Skill Notetags
 * - If the player's current standing tile's Region ID is listed, then the
 *   Field Skill is considered visible and shown.
 *   - The invisibility will only affect the map Field Skill List Window.
 *   - However, invisibility will disable the Field Skill in the Skill scene.
 * - Replace 'x' with the ID of the region to determine the skill's visibility.
 *   - Insert multiple 'x' values to cover more ID's.
 * 
 * ---
 *
 * <Hide Field Skill Switch: x>
 *
 * <Hide Field Skill All Switches: x,x,x>
 * <Hide Field Skill Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the Field Skill based on switches.
 *   - The invisibility will only affect the map Field Skill List Window.
 *   - However, invisibility will disable the Field Skill in the Skill scene.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 *   - Insert multiple 'x' values to cover more ID's.
 * - If 'All' notetag variant is used, skill will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 * 
 * <Hide Field Skill Region ID: x>
 * <Hide Field Skill Region ID: x,x,x>
 * 
 * - Used for: Skill Notetags
 * - If the player's current standing tile's Region ID is listed, then the
 *   Field Skill is considered invisible and hidden.
 *   - The invisibility will only affect the map Field Skill List Window.
 *   - However, invisibility will disable the Field Skill in the Skill scene.
 * - Replace 'x' with the ID of the region to determine the skill's visibility.
 *   - Insert multiple 'x' values to cover more ID's.
 * 
 * ---
 *
 * <Enable Field Skill Switch: x>
 *
 * <Enable Field Skill All Switches: x,x,x>
 * <Enable Field Skill Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the Field Skill based on switches.
 *   - The usability only affects the Field Skill as a Field Skill and does
 *     not affect its usability as a battle skill.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 *   - Insert multiple 'x' values to cover more ID's.
 * - If 'All' notetag variant is used, skill will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, skill will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 * 
 * <Enable Field Skill Region ID: x>
 * <Enable Field Skill Region ID: x,x,x>
 * 
 * - Used for: Skill Notetags
 * - If the player's current standing tile's Region ID is listed, then the
 *   Field Skill is considered enabled.
 *   - The usability only affects the Field Skill as a Field Skill and does
 *     not affect its usability as a battle skill.
 * - Replace 'x' with the ID of the region to enable the skill.
 *   - Insert multiple 'x' values to cover more ID's.
 * 
 * ---
 *
 * <Disable Field Skill Switch: x>
 *
 * <Disable Field Skill All Switches: x,x,x>
 * <Disable Field Skill Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the Field Skill based on switches.
 *   - The usability only affects the Field Skill as a Field Skill and does
 *     not affect its usability as a battle skill.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 *   - Insert multiple 'x' values to cover more ID's.
 * - If 'All' notetag variant is used, skill will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, skill will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 * 
 * <Disable Field Skill Region ID: x>
 * <Disable Field Skill Region ID: x,x,x>
 * 
 * - Used for: Skill Notetags
 * - If the player's current standing tile's Region ID is listed, then the
 *   Field Skill is considered disabled.
 *   - The usability only affects the Field Skill as a Field Skill and does
 *     not affect its usability as a battle skill.
 * - Replace 'x' with the ID of the region to disable the skill.
 *   - Insert multiple 'x' values to cover more ID's.
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
 * Map: Open Field Skills List
 * - Open Field Skills list without shortcut key.
 * - Field Skills List Window Accessibility required.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Field Skills?
 * - Enable/disable Field Skills from being accessible?
 * - Does NOT bypass <Disable Field Skills> map notetag.
 *
 *   Enable/Disable?:
 *   - Enables/disables Field Skills on map scene?
 *   - Does NOT bypass <Disable Field Skills> map notetag.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Field Skills plugin.
 *
 * ---
 *
 * Map Field Skills List
 * 
 *   Default Enable?:
 *   - Enable access to the Map Field Skills List by default?
 * 
 *   Shortcut Key:
 *   - What key is used to activate the Map Field Skills List Window?
 * 
 *   Show Help Window?:
 *   - Show the Help Window when the Map Field Skills List window is active?
 *
 * ---
 *
 * Scene_Skill
 * 
 *   Usable Field Skills?:
 *   - In Skill scene, can the player use/activate Field Skills?
 * 
 *   Use Field Skill Help?:
 *   - In Skill scene, show <Field Skill Help Description> contents in
 *     Help Window?
 * 
 * ---
 * 
 * Scene_Map > Window_Help
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Scene_Map > Window_FieldSkillList
 * 
 *   All Members?:
 *   - Display which party members for their Field Skills in the window?
 * 
 *   Cancel Button?:
 *   - Add the Cancel Button to the window?
 * 
 *   Face or Name?:
 *   - Display the member's face or name?
 * 
 *   Buffer Skill Name:
 *   - Buffer the distance for the skill name by this much in x.
 * 
 *   Background Type:
 *   - Select background type for this window.
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
 * Sound Effect played when opening the Field Skills list on the map.
 *
 * ---
 *
 * Open List
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
 * Use Skill
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: December 15, 2022
 * * Bug Fixes!
 * ** Fixed an incompatibility with VisuMZ Skill Learn System. Fix by Irina.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.00 Official Release Date: December 7, 2022
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
 * @command OpenFieldSkills
 * @text Map: Open Field Skills List
 * @desc Open Field Skills list without shortcut key.
 * Field Skills List Window Accessibility required.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFieldSkillsEnable
 * @text System: Enable Field Skills?
 * @desc Enable/disable Field Skills from being accessible?
 * Does NOT bypass <Disable Field Skills> map notetag.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Field Skills on map scene?
 * Does NOT bypass <Disable Field Skills> map notetag.
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
 * @param FieldSkills
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
 * @desc General settings for the Field Skills plugin.
 * @default {"MapList":"","DefaultEnable:eval":"true","ShortcutKey:str":"pagedown","ShowHelpWindow:eval":"true","SceneSkill":"","SceneSkillCanActivate:eval":"true","SceneSkillDisplayHelp:eval":"true","SceneMap":"","SceneMapHelpWindow":"","HelpWindow_BgType:num":"0","HelpWindow_RectJS:func":"\"const ww = Math.ceil(Graphics.width * 0.60);\\nconst wh = this.calcWindowHeight(2, false);\\n\\nconst wx = Math.floor((Graphics.width - ww) / 2);\\nconst wy = 24;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","SceneMapSkillList":"","ListWindowAllMembers:eval":"true","ListWindowCancelButton:eval":"true","ListWindowFaceOrName:str":"face","ListWindowBufferX:num":"170","ListWindow_BgType:num":"0","ListWindow_RectJS:func":"\"const ww = Math.ceil(Graphics.width * 0.60);\\nconst wh = this.calcWindowHeight(8, true);\\n\\nconst wx = Math.floor((Graphics.width - ww) / 2);\\nconst wy = this.calcWindowHeight(2, false) + 24;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc Sound Effect played when opening the Field Skills list on the map.
 * @default {"Open":"","name:str":"Attack2","volume:num":"50","pitch:num":"140","pan:num":"0","Use":"","useName:str":"Attack2","useVolume:num":"80","usePitch:num":"100","usePan:num":"0"}
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
 * @param MapList
 * @text Map Field Skills List
 *
 * @param DefaultEnable:eval
 * @text Default Enable?
 * @parent MapList
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable access to the Map Field Skills List by default?
 * @default true
 * 
 * @param ShortcutKey:str
 * @text Shortcut Key
 * @parent MapList
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc What key is used to activate the Map Field Skills List Window?
 * @default pagedown
 *
 * @param ShowHelpWindow:eval
 * @text Show Help Window?
 * @parent MapList
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the Help Window when the Map Field Skills List window is active?
 * @default true
 * 
 * @param SceneSkill
 * @text Scene_Skill
 *
 * @param SceneSkillCanActivate:eval
 * @text Usable Field Skills?
 * @parent SceneSkill
 * @type boolean
 * @on Can Use
 * @off Cannot Use
 * @desc In Skill scene, can the player use/activate Field Skills?
 * @default true
 *
 * @param SceneSkillDisplayHelp:eval
 * @text Use Field Skill Help?
 * @parent SceneSkill
 * @type boolean
 * @on Field Help
 * @off Normal Help
 * @desc In Skill scene, show <Field Skill Help Description>
 * contents in Help Window?
 * @default true
 * 
 * @param SceneMap
 * @text Scene_Map
 * 
 * @param SceneMapHelpWindow
 * @text Window_Help
 * @parent SceneMap
 *
 * @param HelpWindow_BgType:num
 * @text Background Type
 * @parent SceneMapHelpWindow
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
 * @param HelpWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent SceneMapHelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.ceil(Graphics.width * 0.60);\nconst wh = this.calcWindowHeight(2, false);\n\nconst wx = Math.floor((Graphics.width - ww) / 2);\nconst wy = 24;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param SceneMapSkillList
 * @text Window_FieldSkillList
 * @parent SceneMap
 *
 * @param ListWindowAllMembers:eval
 * @text All Members?
 * @parent SceneMapSkillList
 * @type boolean
 * @on All Members
 * @off Battle Members
 * @desc Display which party members for their Field Skills in the window?
 * @default true
 *
 * @param ListWindowCancelButton:eval
 * @text Cancel Button?
 * @parent SceneMapSkillList
 * @type boolean
 * @on Add Button
 * @off Hide Button
 * @desc Add the Cancel Button to the window?
 * @default true
 *
 * @param ListWindowFaceOrName:str
 * @text Face or Name?
 * @parent SceneMapSkillList
 * @type select
 * @option face
 * @option name
 * @option none
 * @desc Display the member's face or name?
 * @default face
 *
 * @param ListWindowBufferX:num
 * @text Buffer Skill Name
 * @parent SceneMapSkillList
 * @type number
 * @min 0
 * @desc Buffer the distance for the skill name by this much in x.
 * @default 170
 *
 * @param ListWindow_BgType:num
 * @text Background Type
 * @parent SceneMapSkillList
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
 * @param ListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent SceneMapSkillList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.ceil(Graphics.width * 0.60);\nconst wh = this.calcWindowHeight(8, true);\n\nconst wx = Math.floor((Graphics.width - ww) / 2);\nconst wy = this.calcWindowHeight(2, false) + 24;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Open
 * @text Open List
 * 
 * @param name:str
 * @text Filename
 * @parent Open
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Attack2
 *
 * @param volume:num
 * @text Volume
 * @parent Open
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param pitch:num
 * @text Pitch
 * @parent Open
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 140
 *
 * @param pan:num
 * @text Pan
 * @parent Open
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Use
 * @text Use Skill
 * 
 * @param useName:str
 * @text Filename
 * @parent Use
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Attack2
 *
 * @param useVolume:num
 * @text Volume
 * @parent Use
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 80
 *
 * @param usePitch:num
 * @text Pitch
 * @parent Use
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param usePan:num
 * @text Pan
 * @parent Use
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x40cd65=_0x5935;(function(_0x203ca,_0x25b4d3){const _0x187f11=_0x5935,_0x3cb050=_0x203ca();while(!![]){try{const _0x418dd1=-parseInt(_0x187f11(0x1e5))/0x1*(-parseInt(_0x187f11(0x1b6))/0x2)+-parseInt(_0x187f11(0x23b))/0x3+parseInt(_0x187f11(0x264))/0x4+-parseInt(_0x187f11(0x204))/0x5*(-parseInt(_0x187f11(0x1b4))/0x6)+parseInt(_0x187f11(0x20f))/0x7*(parseInt(_0x187f11(0x22d))/0x8)+parseInt(_0x187f11(0x1f9))/0x9*(-parseInt(_0x187f11(0x1f5))/0xa)+-parseInt(_0x187f11(0x287))/0xb;if(_0x418dd1===_0x25b4d3)break;else _0x3cb050['push'](_0x3cb050['shift']());}catch(_0x280a7a){_0x3cb050['push'](_0x3cb050['shift']());}}}(_0x13c8,0x5c708));function _0x5935(_0x4b5826,_0x38b35e){const _0x13c894=_0x13c8();return _0x5935=function(_0x5935f3,_0x2c6d61){_0x5935f3=_0x5935f3-0x17b;let _0xb81037=_0x13c894[_0x5935f3];return _0xb81037;},_0x5935(_0x4b5826,_0x38b35e);}var label=_0x40cd65(0x27d),tier=tier||0x0,dependencies=[_0x40cd65(0x1cd),_0x40cd65(0x272),_0x40cd65(0x1b3)],pluginData=$plugins['filter'](function(_0x168422){const _0x196743=_0x40cd65;return _0x168422[_0x196743(0x22f)]&&_0x168422[_0x196743(0x1a8)][_0x196743(0x29f)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x40cd65(0x285)]=function(_0x3ef050,_0x1a65e6){const _0x5e4765=_0x40cd65;for(const _0x30d8fe in _0x1a65e6){if(_0x30d8fe[_0x5e4765(0x280)](/(.*):(.*)/i)){const _0x1a024c=String(RegExp['$1']),_0x22d3d7=String(RegExp['$2'])[_0x5e4765(0x17b)]()[_0x5e4765(0x198)]();let _0x2ae686,_0x32eadc,_0x2f5576;switch(_0x22d3d7){case _0x5e4765(0x254):_0x2ae686=_0x1a65e6[_0x30d8fe]!==''?Number(_0x1a65e6[_0x30d8fe]):0x0;break;case _0x5e4765(0x261):_0x32eadc=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):[],_0x2ae686=_0x32eadc[_0x5e4765(0x242)](_0x5db7e9=>Number(_0x5db7e9));break;case _0x5e4765(0x28b):_0x2ae686=_0x1a65e6[_0x30d8fe]!==''?eval(_0x1a65e6[_0x30d8fe]):null;break;case _0x5e4765(0x193):_0x32eadc=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):[],_0x2ae686=_0x32eadc[_0x5e4765(0x242)](_0x2ffcd2=>eval(_0x2ffcd2));break;case _0x5e4765(0x1e9):_0x2ae686=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):'';break;case _0x5e4765(0x24e):_0x32eadc=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):[],_0x2ae686=_0x32eadc[_0x5e4765(0x242)](_0x2dd22b=>JSON[_0x5e4765(0x1e6)](_0x2dd22b));break;case'FUNC':_0x2ae686=_0x1a65e6[_0x30d8fe]!==''?new Function(JSON['parse'](_0x1a65e6[_0x30d8fe])):new Function(_0x5e4765(0x1c2));break;case _0x5e4765(0x232):_0x32eadc=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):[],_0x2ae686=_0x32eadc['map'](_0x200c51=>new Function(JSON[_0x5e4765(0x1e6)](_0x200c51)));break;case _0x5e4765(0x1ad):_0x2ae686=_0x1a65e6[_0x30d8fe]!==''?String(_0x1a65e6[_0x30d8fe]):'';break;case _0x5e4765(0x29c):_0x32eadc=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):[],_0x2ae686=_0x32eadc[_0x5e4765(0x242)](_0x26b8a7=>String(_0x26b8a7));break;case'STRUCT':_0x2f5576=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):{},_0x2ae686=VisuMZ[_0x5e4765(0x285)]({},_0x2f5576);break;case _0x5e4765(0x22a):_0x32eadc=_0x1a65e6[_0x30d8fe]!==''?JSON[_0x5e4765(0x1e6)](_0x1a65e6[_0x30d8fe]):[],_0x2ae686=_0x32eadc[_0x5e4765(0x242)](_0x226857=>VisuMZ[_0x5e4765(0x285)]({},JSON[_0x5e4765(0x1e6)](_0x226857)));break;default:continue;}_0x3ef050[_0x1a024c]=_0x2ae686;}}return _0x3ef050;},(_0x242fdf=>{const _0x34b7ef=_0x40cd65,_0x36ac8a=_0x242fdf[_0x34b7ef(0x201)];for(const _0x239018 of dependencies){if(!Imported[_0x239018]){if(_0x34b7ef(0x183)===_0x34b7ef(0x183)){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x34b7ef(0x1e3)](_0x36ac8a,_0x239018)),SceneManager['exit']();break;}else this[_0x34b7ef(0x19e)][_0x34b7ef(0x283)]([null,null]);}}const _0x1c4d7f=_0x242fdf['description'];if(_0x1c4d7f[_0x34b7ef(0x280)](/\[Version[ ](.*?)\]/i)){const _0x39eb04=Number(RegExp['$1']);_0x39eb04!==VisuMZ[label][_0x34b7ef(0x1c7)]&&(alert(_0x34b7ef(0x1d8)[_0x34b7ef(0x1e3)](_0x36ac8a,_0x39eb04)),SceneManager[_0x34b7ef(0x210)]());}if(_0x1c4d7f[_0x34b7ef(0x280)](/\[Tier[ ](\d+)\]/i)){const _0x18b140=Number(RegExp['$1']);if(_0x18b140<tier)alert(_0x34b7ef(0x263)['format'](_0x36ac8a,_0x18b140,tier)),SceneManager[_0x34b7ef(0x210)]();else{if(_0x34b7ef(0x273)!==_0x34b7ef(0x1b8))tier=Math[_0x34b7ef(0x29a)](_0x18b140,tier);else{if(!_0x3d10b8[_0x34b7ef(0x1f8)][_0x34b7ef(0x1ee)])return;const _0x4ea70d=this[_0x34b7ef(0x1d7)](),_0x5e8cbb=new _0x4aff22(_0x4ea70d);this[_0x34b7ef(0x298)]=_0x5e8cbb,this['addChild'](_0x5e8cbb),_0x5e8cbb[_0x34b7ef(0x1e8)]=0x0,_0x5e8cbb[_0x34b7ef(0x25a)](_0x391c26[_0x34b7ef(0x1f8)]['bgTypeHelp']);}}}VisuMZ[_0x34b7ef(0x285)](VisuMZ[label][_0x34b7ef(0x192)],_0x242fdf[_0x34b7ef(0x181)]);})(pluginData),PluginManager[_0x40cd65(0x219)](pluginData[_0x40cd65(0x201)],_0x40cd65(0x24b),_0x1c954b=>{const _0x169137=_0x40cd65;if(!SceneManager[_0x169137(0x293)]())return;const _0x415085=SceneManager[_0x169137(0x276)];if(_0x415085){if('jiQLj'!==_0x169137(0x2a2)){const _0x50a05c=$gameTemp['getLastPluginCommandInterpreter']();_0x415085[_0x169137(0x27f)](),_0x50a05c[_0x169137(0x1dd)](0xa);}else{if(_0x287b74&&_0x90c44[_0x169137(0x268)]())return![];}}}),PluginManager[_0x40cd65(0x219)](pluginData['name'],_0x40cd65(0x21b),_0x16f5a5=>{const _0x1d0279=_0x40cd65;VisuMZ[_0x1d0279(0x285)](_0x16f5a5,_0x16f5a5);const _0x5452dd=_0x16f5a5['Enable'];$gameSystem['fieldSkillsData']()[_0x1d0279(0x26b)]=_0x5452dd;}),VisuMZ['FieldSkills']['RegExp']={'FieldSkill':/<FIELD (?:SKILL |)COMMON EVENT:[ ](\d+)>/i,'FieldHelpDesc':/<FIELD (?:SKILL |)(?:HELP |)DESCRIPTION>\s*([\s\S]*?)\s*<\/FIELD (?:SKILL |)(?:HELP |)DESCRIPTION>/i,'Require':{'EnableSwitchAll':/<ENABLE FIELD (?:SKILL |)(?:ALL |)(?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'EnableSwitchAny':/<ENABLE FIELD (?:SKILL |)ANY (?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'DisableSwitchAll':/<DISABLE FIELD (?:SKILL |)(?:ALL |)(?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'DisableSwitchAny':/<DISABLE FIELD (?:SKILL |)ANY (?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'RegionYes':/<ENABLE FIELD (?:SKILL |)(?:REGION|REGION ID):[ ](.*)>/i,'RegionNot':/<DISABLE FIELD (?:SKILL |)(?:REGION|REGION ID):[ ](.*)>/i},'Visible':{'ShowSwitchAll':/<SHOW FIELD (?:SKILL |)(?:ALL |)(?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'ShowSwitchAny':/<SHOW FIELD (?:SKILL |)ANY (?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'HideSwitchAll':/<HIDE FIELD (?:SKILL |)(?:ALL |)(?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'HideSwitchAny':/<HIDE FIELD (?:SKILL |)ANY (?:SW|SWITCH|SWITCHES):[ ](.*)>/i,'ShowRegion':/<SHOW FIELD (?:SKILL |)(?:REGION|REGION ID):[ ](.*)>/i,'HideRegion':/<HIDE FIELD (?:SKILL |)(?:REGION|REGION ID):[ ](.*)>/i},'DisableFieldSkill':/<DISABLE FIELD (?:SKILL|SKILLS)>/i,'Type1':/<(?:NOTETAG):[ ](\d+)([%％])>/i,'Type2':/<(?:NOTETAG):[ ]([\+\-]\d+)>/i,'Type3':/<(?:NOTETAG):[ ](.*)>/i,'Type3nonGreedy':/<(?:NOTETAG):[ ](.*?)>/i,'Type4':/<(?:NOTETAG):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,'Type5':/<(?:NOTETAG):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i,'Type6':/<(?:NOTETAG)>/i,'Type7':/<\/(?:NOTETAG)>/i,'Type8':/<(?:NOTETAG)>\s*([\s\S]*)\s*<\/(?:NOTETAG)>/i,'Type8nonGreedy':/<(?:NOTETAG)>\s*([\s\S]*?)\s*<\/(?:NOTETAG)>/i},DataManager[_0x40cd65(0x25f)]=function(_0x581bf3){const _0x3a563b=_0x40cd65;if(!_0x581bf3)return![];if(!this['isSkill'](_0x581bf3))return![];this[_0x3a563b(0x252)]=this[_0x3a563b(0x252)]||{};if(this[_0x3a563b(0x252)][_0x581bf3['id']]!==undefined)return this[_0x3a563b(0x252)][_0x581bf3['id']];this['_isFieldSkill'][_0x581bf3['id']]=![];const _0x2fa9c8=VisuMZ[_0x3a563b(0x27d)][_0x3a563b(0x270)],_0x15f623=[_0x3a563b(0x26c)],_0x4dc272=_0x581bf3[_0x3a563b(0x1c6)]||'';for(const _0x3e337b of _0x15f623){if(_0x3a563b(0x253)!==_0x3a563b(0x19b)){if(_0x4dc272['match'](_0x2fa9c8[_0x3e337b]))this[_0x3a563b(0x252)][_0x581bf3['id']]=!![];}else this[_0x3a563b(0x217)]()&&_0x1914b9[_0x3a563b(0x25f)](this['item']())?this[_0x3a563b(0x226)]():_0x4404cc[_0x3a563b(0x27d)][_0x3a563b(0x227)]['call'](this);}return this[_0x3a563b(0x252)][_0x581bf3['id']];},DataManager[_0x40cd65(0x208)]=function(_0x1bf004){const _0x356d2f=_0x40cd65;if(!_0x1bf004)return![];if(!this[_0x356d2f(0x188)](_0x1bf004))return![];this[_0x356d2f(0x2a1)]=this[_0x356d2f(0x2a1)]||{};if(this[_0x356d2f(0x2a1)][_0x1bf004['id']]!==undefined)return this[_0x356d2f(0x2a1)][_0x1bf004['id']];this[_0x356d2f(0x2a1)][_0x1bf004['id']]=0x0;const _0x370373=VisuMZ[_0x356d2f(0x27d)][_0x356d2f(0x270)],_0x56d653=_0x1bf004[_0x356d2f(0x1c6)]||'';if(_0x56d653[_0x356d2f(0x280)](_0x370373['FieldSkill'])){if(_0x356d2f(0x251)===_0x356d2f(0x20a)){const _0x58e13d=_0xac0da6[_0x356d2f(0x25c)];for(const _0x25db67 of _0x58e13d){if(!_0x223f9c[_0x356d2f(0x1f7)](_0x25db67))return![];}}else this[_0x356d2f(0x2a1)][_0x1bf004['id']]=Number(RegExp['$1']);}return this[_0x356d2f(0x2a1)][_0x1bf004['id']];},DataManager[_0x40cd65(0x1a0)]=function(_0x220251){const _0x2e178a=_0x40cd65;if(!_0x220251)return'';if(!this['isSkill'](_0x220251))return'';this[_0x2e178a(0x23d)]=this[_0x2e178a(0x23d)]||{};if(this[_0x2e178a(0x23d)][_0x220251['id']]!==undefined)return this['_fieldSkillHelp'][_0x220251['id']];this[_0x2e178a(0x23d)][_0x220251['id']]='';const _0x405307=VisuMZ[_0x2e178a(0x27d)][_0x2e178a(0x270)],_0x214643=_0x220251['note']||'';return _0x214643[_0x2e178a(0x280)](_0x405307[_0x2e178a(0x224)])&&(this['_fieldSkillHelp'][_0x220251['id']]=String(RegExp['$1'])),this['_fieldSkillHelp'][_0x220251['id']];},DataManager[_0x40cd65(0x278)]=function(_0x213b83,_0x975015){const _0x51fba2=_0x40cd65;if(!_0x975015)return![];if(!this[_0x51fba2(0x188)](_0x975015))return![];const _0x29d020=this[_0x51fba2(0x1b2)](_0x975015);if(_0x29d020['EnableSwitchAll'][_0x51fba2(0x230)]>0x0){const _0x3beca5=_0x29d020[_0x51fba2(0x1f6)];for(const _0x2f86f9 of _0x3beca5){if(!$gameSwitches['value'](_0x2f86f9))return![];}}if(_0x29d020['EnableSwitchAny'][_0x51fba2(0x230)]>0x0){if(_0x51fba2(0x185)==='MgEgh'){const _0x56cda7=_0x29d020[_0x51fba2(0x1c4)];let _0xb9bd47=!![];for(const _0x40da80 of _0x56cda7){if('POwLX'===_0x51fba2(0x297)){if($gameSwitches['value'](_0x40da80)){if(_0x51fba2(0x1d4)==='bKGNL'){_0xb9bd47=![];break;}else{if(!_0x372c31['value'](_0x2c30a3))return![];}}}else{const _0x1b846b=[_0x2c4f6d,_0x18497b];this[_0x51fba2(0x29f)](_0x1b846b)&&this[_0x51fba2(0x19e)]['push'](_0x1b846b);}}if(_0xb9bd47)return![];}else _0x1cafba[_0x51fba2(0x28e)][_0x51fba2(0x1db)][_0x51fba2(0x20d)](this),this[_0x51fba2(0x197)]&&(this[_0x51fba2(0x197)][_0x51fba2(0x189)]=!![]);}if(_0x29d020[_0x51fba2(0x19c)][_0x51fba2(0x230)]>0x0){const _0x115044=_0x29d020[_0x51fba2(0x19c)];for(const _0x34a76c of _0x115044){if(_0x51fba2(0x1ea)===_0x51fba2(0x212)){const _0xf23e49=_0x2edafd(_0x46b4f7['$1']);_0xf23e49!==_0x565d3e[_0x5ca1ca]['version']&&(_0x518102(_0x51fba2(0x1d8)[_0x51fba2(0x1e3)](_0x7f3764,_0xf23e49)),_0x192a64[_0x51fba2(0x210)]());}else{if($gameSwitches[_0x51fba2(0x1f7)](_0x34a76c))return![];}}}if(_0x29d020[_0x51fba2(0x21c)][_0x51fba2(0x230)]>0x0){if(_0x51fba2(0x256)!==_0x51fba2(0x184)){const _0x46204f=_0x29d020[_0x51fba2(0x21c)];let _0x568bfb=!![];for(const _0x456b9c of _0x46204f){if(_0x51fba2(0x288)!==_0x51fba2(0x288))return this['actorAt'](this[_0x51fba2(0x1a6)]());else{if(!$gameSwitches[_0x51fba2(0x1f7)](_0x456b9c)){_0x568bfb=![];break;}}}if(_0x568bfb)return![];}else return this[_0x51fba2(0x19e)]&&_0x4f12b8>=0x0?this[_0x51fba2(0x19e)][_0x406e6f][0x1]:null;}if(_0x29d020[_0x51fba2(0x17e)][_0x51fba2(0x230)]>0x0){if(_0x51fba2(0x213)!=='SodHk')this[_0x51fba2(0x1f2)][_0x51fba2(0x18f)](),this['_fieldSkillsListWindow'][_0x51fba2(0x1db)](),this['_fieldSkillsListWindow']['activate']();else{const _0x170c9b=$gamePlayer[_0x51fba2(0x24a)]();if(!_0x29d020[_0x51fba2(0x17e)]['includes'](_0x170c9b))return![];}}if(_0x29d020[_0x51fba2(0x22e)][_0x51fba2(0x230)]>0x0){if('GRfPW'!=='GRfPW'){const _0x3b437e=_0x4d9164['FieldSkills'][_0x51fba2(0x192)][_0x51fba2(0x1d5)],_0x29dc27={'name':_0x3b437e[_0x51fba2(0x201)],'volume':_0x3b437e[_0x51fba2(0x1e2)],'pitch':_0x3b437e[_0x51fba2(0x1cb)],'pan':_0x3b437e['pan']};_0x7cd9d[_0x51fba2(0x27a)](_0x29dc27);}else{const _0x2708ca=$gamePlayer[_0x51fba2(0x24a)]();if(_0x29d020[_0x51fba2(0x22e)][_0x51fba2(0x29f)](_0x2708ca))return![];}}return!![];},DataManager[_0x40cd65(0x1b2)]=function(_0x10e2ad){const _0x1406ea=_0x40cd65;this[_0x1406ea(0x1a1)]=this['_fieldSkillRequirements']||{};if(this[_0x1406ea(0x1a1)][_0x10e2ad['id']]!==undefined){if(_0x1406ea(0x1a9)!==_0x1406ea(0x1a9))this[_0x1406ea(0x18b)]();else return this[_0x1406ea(0x1a1)][_0x10e2ad['id']];}const _0x2bd228={},_0xbaff45=VisuMZ['FieldSkills']['RegExp'],_0x15518a=_0x10e2ad['note']||'',_0x1bad91=[_0x1406ea(0x1f6),_0x1406ea(0x1c4),_0x1406ea(0x19c),_0x1406ea(0x21c),_0x1406ea(0x17e),_0x1406ea(0x22e)];for(const _0x24bcca of _0x1bad91){_0x1406ea(0x243)!=='ZwRnJ'?(_0x2dacf4[_0x302adc]=[],_0x5f358b[_0x1406ea(0x280)](_0xa5f23a[_0x1406ea(0x1df)][_0x4e6454])&&(_0x49b5b9[_0x224756]=_0xf12eb7['$1']['split'](',')[_0x1406ea(0x242)](_0x517177=>_0x19a203(_0x517177)||0x0))):(_0x2bd228[_0x24bcca]=[],_0x15518a[_0x1406ea(0x280)](_0xbaff45[_0x1406ea(0x1ba)][_0x24bcca])&&(_0x2bd228[_0x24bcca]=RegExp['$1'][_0x1406ea(0x1d1)](',')[_0x1406ea(0x242)](_0x24abdc=>Number(_0x24abdc)||0x0)));}return this[_0x1406ea(0x1a1)][_0x10e2ad['id']]=_0x2bd228,this['_fieldSkillRequirements'][_0x10e2ad['id']];},DataManager[_0x40cd65(0x194)]=function(_0x454d14,_0x1b5f69){const _0x2609fd=_0x40cd65;if(!_0x1b5f69)return![];if(!this['isSkill'](_0x1b5f69))return![];const _0x3eeaf5=this['getFieldSkillVisibility'](_0x1b5f69);if(_0x3eeaf5[_0x2609fd(0x25c)][_0x2609fd(0x230)]>0x0){const _0x43f54c=_0x3eeaf5[_0x2609fd(0x25c)];for(const _0x167f03 of _0x43f54c){if(!$gameSwitches[_0x2609fd(0x1f7)](_0x167f03))return![];}}if(_0x3eeaf5[_0x2609fd(0x25e)][_0x2609fd(0x230)]>0x0){if(_0x2609fd(0x231)!=='bPaXE'){const _0x306ec1=_0x3eeaf5[_0x2609fd(0x25e)];let _0x1c3533=!![];for(const _0x5e9bef of _0x306ec1){if(_0x2609fd(0x28f)==='crxpj')return _0x16d2b2[_0x2609fd(0x27d)][_0x2609fd(0x192)][_0x2609fd(0x258)][_0x2609fd(0x222)][_0x2609fd(0x20d)](this);else{if($gameSwitches[_0x2609fd(0x1f7)](_0x5e9bef)){if(_0x2609fd(0x1d6)===_0x2609fd(0x26e))this['shouldUseFieldSkillsHelpDescription'](_0x517bb4)?this[_0x2609fd(0x275)](_0x547d6f[_0x2609fd(0x1a0)](_0x192159)):_0x371c3a['FieldSkills'][_0x2609fd(0x1d3)]['call'](this,_0x3511eb);else{_0x1c3533=![];break;}}}}if(_0x1c3533)return![];}else this[_0x2609fd(0x292)]={'lastSkill':null,'lastActor':null,'mapEnable':_0x27d460[_0x2609fd(0x1f8)]['defaultMapEnable']};}if(_0x3eeaf5[_0x2609fd(0x248)][_0x2609fd(0x230)]>0x0){const _0x9ff02c=_0x3eeaf5['HideSwitchAll'];for(const _0x5cc7ba of _0x9ff02c){if($gameSwitches[_0x2609fd(0x1f7)](_0x5cc7ba))return![];}}if(_0x3eeaf5['HideSwitchAny'][_0x2609fd(0x230)]>0x0){const _0x3ee36f=_0x3eeaf5[_0x2609fd(0x20b)];let _0x3681c2=!![];for(const _0xacc700 of _0x3ee36f){if(!$gameSwitches['value'](_0xacc700)){if(_0x2609fd(0x1f1)===_0x2609fd(0x1a4)){if(!_0xce7942[_0x2609fd(0x293)]())return;const _0x4dd303=_0x26c067[_0x2609fd(0x276)];if(_0x4dd303){const _0x1e2fce=_0x79f2c3[_0x2609fd(0x244)]();_0x4dd303['fieldSkillsOpen'](),_0x1e2fce[_0x2609fd(0x1dd)](0xa);}}else{_0x3681c2=![];break;}}}if(_0x3681c2)return![];}if(_0x3eeaf5[_0x2609fd(0x260)][_0x2609fd(0x230)]>0x0){const _0x4a6c26=$gamePlayer[_0x2609fd(0x24a)]();if(!_0x3eeaf5[_0x2609fd(0x260)]['includes'](_0x4a6c26))return![];}if(_0x3eeaf5[_0x2609fd(0x274)][_0x2609fd(0x230)]>0x0){const _0x22d48a=$gamePlayer[_0x2609fd(0x24a)]();if(_0x3eeaf5[_0x2609fd(0x274)][_0x2609fd(0x29f)](_0x22d48a))return![];}return!![];},DataManager[_0x40cd65(0x17d)]=function(_0x5e91d9){const _0x111438=_0x40cd65;this['_fieldSkillVisibility']=this[_0x111438(0x282)]||{};if(this[_0x111438(0x282)][_0x5e91d9['id']]!==undefined){if(_0x111438(0x1cf)===_0x111438(0x247)){if(!_0x5766ee)return'';if(!this[_0x111438(0x188)](_0x190c1b))return'';this[_0x111438(0x23d)]=this[_0x111438(0x23d)]||{};if(this[_0x111438(0x23d)][_0x281522['id']]!==_0xfac2c4)return this[_0x111438(0x23d)][_0x3b6b78['id']];this[_0x111438(0x23d)][_0x183979['id']]='';const _0x13d2f8=_0xfcc58f[_0x111438(0x27d)][_0x111438(0x270)],_0x214e44=_0x1e33e8[_0x111438(0x1c6)]||'';return _0x214e44[_0x111438(0x280)](_0x13d2f8[_0x111438(0x224)])&&(this[_0x111438(0x23d)][_0x54d0d3['id']]=_0x1557ab(_0x4f2154['$1'])),this[_0x111438(0x23d)][_0x17ee0d['id']];}else return this[_0x111438(0x282)][_0x5e91d9['id']];}const _0x1c3836={},_0x41961d=VisuMZ[_0x111438(0x27d)][_0x111438(0x270)],_0x5d4150=_0x5e91d9[_0x111438(0x1c6)]||'',_0x8de9ae=[_0x111438(0x25c),_0x111438(0x25e),_0x111438(0x248),_0x111438(0x20b),_0x111438(0x260),_0x111438(0x274)];for(const _0x3db3eb of _0x8de9ae){_0x111438(0x20c)!==_0x111438(0x21f)?(_0x1c3836[_0x3db3eb]=[],_0x5d4150[_0x111438(0x280)](_0x41961d[_0x111438(0x1df)][_0x3db3eb])&&(_0x1c3836[_0x3db3eb]=RegExp['$1'][_0x111438(0x1d1)](',')[_0x111438(0x242)](_0xb9302d=>Number(_0xb9302d)||0x0))):(this[_0x111438(0x1bd)](),this[_0x111438(0x290)]());}return this[_0x111438(0x282)][_0x5e91d9['id']]=_0x1c3836,this['_fieldSkillVisibility'][_0x5e91d9['id']];},SoundManager[_0x40cd65(0x209)]=function(){const _0x95a52=_0x40cd65,_0x98dbf8=VisuMZ[_0x95a52(0x27d)][_0x95a52(0x192)][_0x95a52(0x1d5)],_0x5e69b8={'name':_0x98dbf8[_0x95a52(0x201)],'volume':_0x98dbf8[_0x95a52(0x1e2)],'pitch':_0x98dbf8[_0x95a52(0x1cb)],'pan':_0x98dbf8['pan']};AudioManager['playSe'](_0x5e69b8);},SoundManager[_0x40cd65(0x266)]=function(){const _0x1d08db=_0x40cd65,_0x2a7be0=VisuMZ[_0x1d08db(0x27d)][_0x1d08db(0x192)][_0x1d08db(0x1d5)],_0x5d37a6={'name':_0x2a7be0[_0x1d08db(0x1a2)],'volume':_0x2a7be0[_0x1d08db(0x233)],'pitch':_0x2a7be0[_0x1d08db(0x220)],'pan':_0x2a7be0[_0x1d08db(0x21a)]};AudioManager[_0x1d08db(0x27a)](_0x5d37a6);},SceneManager[_0x40cd65(0x191)]=function(){const _0x61b3fe=_0x40cd65;return this[_0x61b3fe(0x276)]&&this[_0x61b3fe(0x276)]['constructor']===Scene_Skill;},SceneManager[_0x40cd65(0x293)]=function(){const _0x44a864=_0x40cd65;return this['_scene']&&this[_0x44a864(0x276)][_0x44a864(0x1ae)]===Scene_Map;},Game_System[_0x40cd65(0x1f8)]={'defaultMapEnable':VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x192)][_0x40cd65(0x258)][_0x40cd65(0x295)]},VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x1d2)]=Game_System[_0x40cd65(0x28e)][_0x40cd65(0x1a3)],Game_System[_0x40cd65(0x28e)][_0x40cd65(0x1a3)]=function(){const _0xd8a3f1=_0x40cd65;VisuMZ['FieldSkills'][_0xd8a3f1(0x1d2)][_0xd8a3f1(0x20d)](this),this[_0xd8a3f1(0x239)]();},Game_System[_0x40cd65(0x28e)]['initFieldSkills']=function(){const _0x1a8adf=_0x40cd65;this[_0x1a8adf(0x292)]={'lastSkill':null,'lastActor':null,'mapEnable':Game_System['FIELD_SKILLS'][_0x1a8adf(0x262)]};},Game_System[_0x40cd65(0x28e)][_0x40cd65(0x23a)]=function(){const _0x138b9a=_0x40cd65;if(this[_0x138b9a(0x292)]===undefined)this[_0x138b9a(0x239)]();return this[_0x138b9a(0x292)];},Game_System['prototype']['canOpenFieldSkillsList']=function(){const _0x46fd06=_0x40cd65;return this[_0x46fd06(0x23a)]()[_0x46fd06(0x26b)];},VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x277)]=Game_Map['prototype'][_0x40cd65(0x216)],Game_Map[_0x40cd65(0x28e)][_0x40cd65(0x216)]=function(_0x10ea29){const _0x917bd9=_0x40cd65;VisuMZ['FieldSkills'][_0x917bd9(0x277)][_0x917bd9(0x20d)](this,_0x10ea29),this[_0x917bd9(0x28d)]();},Game_Map[_0x40cd65(0x28e)][_0x40cd65(0x28d)]=function(){const _0x3a6e34=_0x40cd65;this[_0x3a6e34(0x1a7)]=![];const _0xf2565c=VisuMZ[_0x3a6e34(0x27d)]['RegExp'],_0x347d5f=$dataMap?$dataMap[_0x3a6e34(0x1c6)]||'':'';if(_0x347d5f[_0x3a6e34(0x280)](_0xf2565c[_0x3a6e34(0x1aa)])){if(_0x3a6e34(0x2a0)===_0x3a6e34(0x1b7)){if(!_0x2d4a04[_0x3a6e34(0x1ec)])return;if(!_0x15253b[_0x3a6e34(0x234)]())return;_0x2d1639[_0x3a6e34(0x249)]();const _0x442170=_0x394848-_0xb79d78['hp'],_0x4060cf=_0x228856-_0x1ead0b['mp'];if(_0x442170>0x0){const _0x10693c=_0x3ecf81[_0x3a6e34(0x255)];_0x10693c[_0x3a6e34(0x229)]=_0x442170,_0x10693c['hpAffected']=!![],_0x476056[_0x3a6e34(0x269)]['StartDamagePopup'](_0x2d5908),_0x452f94[_0x3a6e34(0x249)]();}if(_0x4060cf>0x0){const _0x5a58ed=_0x39adef['_result'];_0x5a58ed[_0x3a6e34(0x1de)]=_0x4060cf,_0x5a58ed[_0x3a6e34(0x271)]=!![],_0x56f65b['FrontviewBattleUI'][_0x3a6e34(0x186)](_0x287c44),_0x4dd39f[_0x3a6e34(0x249)]();}}else this['_disableFieldSkills']=!![];}},Game_Map[_0x40cd65(0x28e)]['areFieldSkillsDisabled']=function(){const _0x3b91a6=_0x40cd65;return this[_0x3b91a6(0x1a7)];},Scene_Map[_0x40cd65(0x1f8)]={'showHelp':VisuMZ['FieldSkills'][_0x40cd65(0x192)]['General'][_0x40cd65(0x238)],'shortcutKey':VisuMZ['FieldSkills']['Settings'][_0x40cd65(0x258)][_0x40cd65(0x24d)],'bgTypeHelp':VisuMZ[_0x40cd65(0x27d)]['Settings'][_0x40cd65(0x258)]['HelpWindow_BgType'],'bgTypeList':VisuMZ['FieldSkills']['Settings']['General'][_0x40cd65(0x1e0)]},VisuMZ['FieldSkills'][_0x40cd65(0x19f)]=Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x22c)],Scene_Map[_0x40cd65(0x28e)]['createAllWindows']=function(){const _0x5ac197=_0x40cd65;VisuMZ[_0x5ac197(0x27d)][_0x5ac197(0x19f)][_0x5ac197(0x20d)](this),this[_0x5ac197(0x1e1)]();},Scene_Map['prototype'][_0x40cd65(0x1e1)]=function(){const _0x4ed351=_0x40cd65;this['createFieldSkillsHelpWindow'](),this[_0x4ed351(0x290)]();},Scene_Map[_0x40cd65(0x28e)]['createFieldSkillsHelpWindow']=function(){const _0x2e2af6=_0x40cd65;if(!Scene_Map[_0x2e2af6(0x1f8)][_0x2e2af6(0x1ee)])return;const _0x157c5f=this[_0x2e2af6(0x1d7)](),_0xe0f539=new Window_Help(_0x157c5f);this['_fieldSkillsHelpWindow']=_0xe0f539,this[_0x2e2af6(0x18d)](_0xe0f539),_0xe0f539['openness']=0x0,_0xe0f539['setBackgroundType'](Scene_Map[_0x2e2af6(0x1f8)][_0x2e2af6(0x214)]);},Scene_Map[_0x40cd65(0x28e)]['fieldSkillsHelpWindowRect']=function(){const _0x575668=_0x40cd65;if(VisuMZ['FieldSkills']['Settings'][_0x575668(0x258)][_0x575668(0x222)])return VisuMZ['FieldSkills']['Settings']['General']['HelpWindow_RectJS'][_0x575668(0x20d)](this);const _0x3cec9a=Math[_0x575668(0x26d)](Graphics[_0x575668(0x296)]*0.6),_0x32c976=this[_0x575668(0x235)](0x2,![]),_0x1b4a42=Math['floor']((Graphics[_0x575668(0x296)]-_0x3cec9a)/0x2),_0x6f75ba=0x18;return new Rectangle(_0x1b4a42,_0x6f75ba,_0x3cec9a,_0x32c976);},Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x290)]=function(){const _0x5b49f4=_0x40cd65,_0x50e208=this[_0x5b49f4(0x279)](),_0x50ee83=new Window_FieldSkillList(_0x50e208);this[_0x5b49f4(0x1f2)]=_0x50ee83,this[_0x5b49f4(0x18d)](_0x50ee83),_0x50ee83[_0x5b49f4(0x1e8)]=0x0,_0x50ee83[_0x5b49f4(0x25a)](Scene_Map[_0x5b49f4(0x1f8)]['bgTypeList']),this[_0x5b49f4(0x298)]&&('IeMCY'!==_0x5b49f4(0x1c8)?(_0x432165('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x454360,_0x526d2f)),_0x3449e0[_0x5b49f4(0x210)]()):_0x50ee83[_0x5b49f4(0x1c3)](this[_0x5b49f4(0x298)])),_0x50ee83['setHandler']('ok',this[_0x5b49f4(0x26a)][_0x5b49f4(0x1b1)](this)),_0x50ee83[_0x5b49f4(0x1dc)](_0x5b49f4(0x286),this[_0x5b49f4(0x221)]['bind'](this));},Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x279)]=function(){const _0x722066=_0x40cd65;if(VisuMZ[_0x722066(0x27d)]['Settings'][_0x722066(0x258)][_0x722066(0x19d)])return VisuMZ[_0x722066(0x27d)]['Settings']['General'][_0x722066(0x19d)][_0x722066(0x20d)](this);const _0x987c39=Math[_0x722066(0x26d)](Graphics['width']*0.6),_0x4b9936=this[_0x722066(0x235)](0x8,!![]),_0x30bd65=Math[_0x722066(0x1bf)]((Graphics[_0x722066(0x296)]-_0x987c39)/0x2),_0xca8f6a=this['calcWindowHeight'](0x2,![])+0x18;return new Rectangle(_0x30bd65,_0xca8f6a,_0x987c39,_0x4b9936);},Scene_Map['prototype'][_0x40cd65(0x27f)]=function(){const _0x2b8b37=_0x40cd65;if(!$gameSystem[_0x2b8b37(0x1d9)]())return![];if($gameMap['areFieldSkillsDisabled']())return![];SoundManager[_0x2b8b37(0x209)](),this[_0x2b8b37(0x298)]&&('OsMqT'===_0x2b8b37(0x206)?this['_fieldSkillsHelpWindow'][_0x2b8b37(0x1db)]():(_0x291b1b[_0x2b8b37(0x27d)]['Scene_Map_updateMain'][_0x2b8b37(0x20d)](this),this['updateFieldSkillsShortcutKey']())),this['_fieldSkillsListWindow']&&(_0x2b8b37(0x289)===_0x2b8b37(0x1fd)?this['launchFieldSkillCommonEvent']():(this[_0x2b8b37(0x1f2)][_0x2b8b37(0x18f)](),this[_0x2b8b37(0x1f2)][_0x2b8b37(0x1db)](),this['_fieldSkillsListWindow'][_0x2b8b37(0x27e)]())),this['_active']=![];},Scene_Map[_0x40cd65(0x28e)]['fieldSkillsClose']=function(){const _0x88dd0d=_0x40cd65;if(this[_0x88dd0d(0x1f2)]){if(_0x88dd0d(0x236)===_0x88dd0d(0x236))this[_0x88dd0d(0x1f2)][_0x88dd0d(0x21e)](),this[_0x88dd0d(0x1f2)][_0x88dd0d(0x29b)]();else{if(!_0x3ef622)return![];if(_0x2d93aa[_0x88dd0d(0x1a0)](_0x28bad3)!==''){if(_0x11c69c[_0x88dd0d(0x293)]())return!![];if(_0xcc3805[_0x88dd0d(0x191)]())return _0x261bc5[_0x88dd0d(0x1f8)][_0x88dd0d(0x187)];}return![];}}this[_0x88dd0d(0x298)]&&this['_fieldSkillsHelpWindow'][_0x88dd0d(0x21e)](),this['_active']=!![];},Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x26a)]=function(){const _0x19e7cb=_0x40cd65;this[_0x19e7cb(0x1f2)][_0x19e7cb(0x1fb)]();const _0x3f674b=this[_0x19e7cb(0x1f2)]['actor'](),_0x1d643e=this['_fieldSkillsListWindow'][_0x19e7cb(0x284)](),_0x16472d=_0x3f674b['hp'],_0x3d62ae=_0x3f674b['mp'];_0x3f674b[_0x19e7cb(0x237)](_0x1d643e),VisuMZ[_0x19e7cb(0x27d)][_0x19e7cb(0x281)](_0x3f674b,_0x16472d,_0x3d62ae);const _0x429ba2=DataManager[_0x19e7cb(0x208)](_0x1d643e);$gameTemp[_0x19e7cb(0x299)](_0x429ba2),this[_0x19e7cb(0x18b)]();},VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x281)]=function(_0x3a5801,_0xfea2ee,_0x480cbc){const _0x113bed=_0x40cd65;if(!Imported[_0x113bed(0x1ec)])return;if(!SceneManager[_0x113bed(0x234)]())return;_0x3a5801[_0x113bed(0x249)]();const _0x5788ef=_0xfea2ee-_0x3a5801['hp'],_0x358b92=_0x480cbc-_0x3a5801['mp'];if(_0x5788ef>0x0){const _0x423344=_0x3a5801[_0x113bed(0x255)];_0x423344[_0x113bed(0x229)]=_0x5788ef,_0x423344[_0x113bed(0x19a)]=!![],VisuMZ[_0x113bed(0x269)][_0x113bed(0x186)](_0x3a5801),_0x3a5801[_0x113bed(0x249)]();}if(_0x358b92>0x0){const _0x3ed671=_0x3a5801[_0x113bed(0x255)];_0x3ed671[_0x113bed(0x1de)]=_0x358b92,_0x3ed671[_0x113bed(0x271)]=!![],VisuMZ[_0x113bed(0x269)][_0x113bed(0x186)](_0x3a5801),_0x3a5801['clearResult']();}},Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x221)]=function(){const _0x29cc46=_0x40cd65;this[_0x29cc46(0x18b)]();},VisuMZ['FieldSkills'][_0x40cd65(0x223)]=Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x215)],Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x215)]=function(){const _0x35beb4=_0x40cd65;VisuMZ['FieldSkills'][_0x35beb4(0x223)]['call'](this),this[_0x35beb4(0x218)]();},Scene_Map[_0x40cd65(0x28e)][_0x40cd65(0x218)]=function(){const _0x5b637f=_0x40cd65;if($gameMessage[_0x5b637f(0x1fe)]())return;if($gameMap[_0x5b637f(0x21d)]())return;if(!this[_0x5b637f(0x211)])return;if(!SceneManager[_0x5b637f(0x293)]())return;const _0x5bbed3=Scene_Map['FIELD_SKILLS'][_0x5b637f(0x17c)];Input[_0x5b637f(0x1ac)](_0x5bbed3)&&this['fieldSkillsOpen']();},Scene_Skill[_0x40cd65(0x1f8)]={'canMenuActivate':VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x192)][_0x40cd65(0x258)][_0x40cd65(0x28a)],'displayFieldHelp':VisuMZ['FieldSkills'][_0x40cd65(0x192)]['General']['SceneSkillDisplayHelp']},VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x27b)]=VisuMZ[_0x40cd65(0x27b)],VisuMZ['ParseSkillNotetags']=function(_0x4cb574){const _0x500600=_0x40cd65;VisuMZ[_0x500600(0x27d)][_0x500600(0x27b)][_0x500600(0x20d)](this,_0x4cb574);if(!Scene_Skill[_0x500600(0x1f8)][_0x500600(0x23f)])return;if(!_0x4cb574)return;if(!DataManager[_0x500600(0x25f)](_0x4cb574))return;if(_0x4cb574[_0x500600(0x190)]===0x1)_0x4cb574[_0x500600(0x190)]=0x0;if(_0x4cb574[_0x500600(0x190)]===0x3)_0x4cb574[_0x500600(0x190)]=0x2;},VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x227)]=Scene_Skill[_0x40cd65(0x28e)][_0x40cd65(0x1ed)],Scene_Skill[_0x40cd65(0x28e)][_0x40cd65(0x1ed)]=function(){const _0x401ca6=_0x40cd65;this[_0x401ca6(0x217)]()&&DataManager[_0x401ca6(0x25f)](this[_0x401ca6(0x284)]())?_0x401ca6(0x207)===_0x401ca6(0x207)?this['launchFieldSkillCommonEvent']():_0x332cf0[_0x1b245a]=_0x14a40c['$1'][_0x401ca6(0x1d1)](',')[_0x401ca6(0x242)](_0x5d56ee=>_0x138b75(_0x5d56ee)||0x0):_0x401ca6(0x1a5)==='MBYcj'?this[_0x401ca6(0x27f)]():VisuMZ[_0x401ca6(0x27d)][_0x401ca6(0x227)][_0x401ca6(0x20d)](this);},Scene_Skill['prototype'][_0x40cd65(0x217)]=function(){const _0x2c4916=_0x40cd65,_0x5a667a=this[_0x2c4916(0x1bc)];if(Imported[_0x2c4916(0x195)]){if(_0x5a667a&&_0x5a667a[_0x2c4916(0x257)]())return![];}if(Imported['VisuMZ_2_SkillLearnSystem']){if(_0x5a667a&&_0x5a667a[_0x2c4916(0x268)]())return![];}return!![];},Scene_Skill[_0x40cd65(0x28e)]['launchFieldSkillCommonEvent']=function(){const _0x4c4cea=_0x40cd65;this[_0x4c4cea(0x245)]()[_0x4c4cea(0x27c)](this[_0x4c4cea(0x284)]()),this[_0x4c4cea(0x1cc)](),this['actor']()[_0x4c4cea(0x237)](this[_0x4c4cea(0x284)]()),this[_0x4c4cea(0x29e)][_0x4c4cea(0x18f)]();const _0x1517f7=DataManager[_0x4c4cea(0x208)](this[_0x4c4cea(0x284)]());$gameTemp[_0x4c4cea(0x299)](_0x1517f7),SceneManager[_0x4c4cea(0x1c0)](Scene_Map);},VisuMZ['FieldSkills']['Window_Help_setItem']=Window_Help[_0x40cd65(0x28e)][_0x40cd65(0x25b)],Window_Help[_0x40cd65(0x28e)][_0x40cd65(0x25b)]=function(_0x5ed669){const _0x525f59=_0x40cd65;this[_0x525f59(0x1ff)](_0x5ed669)?this['setText'](DataManager[_0x525f59(0x1a0)](_0x5ed669)):VisuMZ[_0x525f59(0x27d)][_0x525f59(0x1d3)][_0x525f59(0x20d)](this,_0x5ed669);},Window_Help[_0x40cd65(0x28e)][_0x40cd65(0x1ff)]=function(_0x4fdeb0){const _0x11e629=_0x40cd65;if(!_0x4fdeb0)return![];if(DataManager[_0x11e629(0x1a0)](_0x4fdeb0)!==''){if(_0x11e629(0x267)===_0x11e629(0x1fa)){this[_0x11e629(0x1a7)]=![];const _0xd6e3b4=_0x338e7a[_0x11e629(0x27d)]['RegExp'],_0x5757a6=_0x564860?_0x207178[_0x11e629(0x1c6)]||'':'';_0x5757a6[_0x11e629(0x280)](_0xd6e3b4[_0x11e629(0x1aa)])&&(this[_0x11e629(0x1a7)]=!![]);}else{if(SceneManager[_0x11e629(0x293)]())return!![];if(SceneManager[_0x11e629(0x191)]())return Scene_Skill['FIELD_SKILLS'][_0x11e629(0x187)];}}return![];},VisuMZ['FieldSkills'][_0x40cd65(0x1e4)]=Window_SkillList[_0x40cd65(0x28e)][_0x40cd65(0x18a)],Window_SkillList[_0x40cd65(0x28e)]['isEnabled']=function(_0x5c54ee){const _0x1e87d8=_0x40cd65;if(SceneManager['isSceneSkill']()&&DataManager[_0x1e87d8(0x25f)](_0x5c54ee)){if(!Scene_Skill['FIELD_SKILLS'][_0x1e87d8(0x23f)])return![];if($gameMap['areFieldSkillsDisabled']())return![];if(!DataManager['meetsFieldSkillRequirements'](this['_actor'],_0x5c54ee))return![];if(!DataManager[_0x1e87d8(0x194)](this['_actor'],_0x5c54ee))return![];}return VisuMZ[_0x1e87d8(0x27d)][_0x1e87d8(0x1e4)][_0x1e87d8(0x20d)](this,_0x5c54ee);};function _0x13c8(){const _0xe38e42=['ListWindowCancelButton','_actorWindow','includes','IiBQM','_fieldSkillCommonEvent','xqYJF','toUpperCase','shortcutKey','getFieldSkillVisibility','RegionYes','touchUI','htmPE','parameters','LZrCE','WUAVH','AdRRs','MgEgh','StartDamagePopup','displayFieldHelp','isSkill','visible','isEnabled','fieldSkillsClose','ListWindowAllMembers','addChild','allMembers','refresh','occasion','isSceneSkill','Settings','ARRAYEVAL','meetsFieldSkillVisibility','VisuMZ_2_EquipBattleSkills','alterSkillName','_cancelButton','trim','playOkSound','hpAffected','pPQut','DisableSwitchAll','ListWindow_RectJS','_data','Scene_Map_createAllWindows','getFieldSkillHelp','_fieldSkillRequirements','useName','initialize','cvzTN','JJNVl','index','_disableFieldSkills','description','fLllH','DisableFieldSkill','ListWindowBufferX','isTriggered','STR','constructor','face','find','bind','getFieldSkillRequirements','VisuMZ_1_SkillsStatesCore','78iWAIIg','forceSelect','3422zchmXv','yMOwx','HzVMR','itemAt','Require','commandRemember','_itemWindow','createFieldSkillsHelpWindow','WPJZT','floor','goto','loadFace','return\x200','setHelpWindow','EnableSwitchAny','ListWindowFaceOrName','note','version','IeMCY','isCurrentItemEnabled','itemLineRect','pitch','playSeForItem','VisuMZ_0_CoreEngine','createCancelButton','uctnk','left','split','Game_System_initialize','Window_Help_setItem','bKGNL','Sound','CzNKH','fieldSkillsHelpWindowRect','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','canOpenFieldSkillsList','plhww','open','setHandler','wait','mpDamage','Visible','ListWindow_BgType','createFieldSkillsWindows','volume','format','Window_SkillList_isEnabled','262MAtjCv','parse','loadFaceImages','openness','JSON','aYZuQ','create','VisuMZ_3_FrontviewBattleUI','onItemOk','showHelp','drawSkillCost','drawFace','PQWZd','_fieldSkillsListWindow','faceName','vECSa','375010wgooKi','EnableSwitchAll','value','FIELD_SKILLS','171TMgUzo','CivYO','setCurrentAsLast','skills','sNpqV','isBusy','shouldUseFieldSkillsHelpDescription','faceOrName','name','setHelpWindowItem','Game_BattlerBase_isOccasionOk','274615ZKUpNX','drawText','OsMqT','LSObR','getFieldSkillCommonEvent','playOpenFieldSkillsList','LAkSz','HideSwitchAny','dTsGo','call','lastActor','366583YIqgfQ','exit','_active','KskXS','SodHk','bgTypeHelp','updateMain','setup','canUseFieldSkills','updateFieldSkillsShortcutKey','registerCommand','usePan','SystemFieldSkillsEnable','DisableSwitchAny','isEventRunning','close','fudpr','usePitch','onFieldSkillsCancel','HelpWindow_RectJS','Scene_Map_updateMain','FieldHelpDesc','faceIndex','launchFieldSkillCommonEvent','Scene_Skill_onItemOk','hLFdN','hpDamage','ARRAYSTRUCT','isOccasionOk','createAllWindows','40aAzzOY','RegionNot','status','length','DLVSS','ARRAYFUNC','useVolume','isUsingFrontviewUiLayout','calcWindowHeight','YgsMT','useItem','ShowHelpWindow','initFieldSkills','fieldSkillsData','647871hvsIyP','SETTINGS','_fieldSkillHelp','updateHelp','canMenuActivate','drawItemName','faceWidth','map','ZwRnJ','getLastPluginCommandInterpreter','actor','XiiTN','DCuqK','HideSwitchAll','clearResult','regionId','OpenFieldSkills','makeItemList','ShortcutKey','ARRAYJSON','filter','TqgyS','QvrTl','_isFieldSkill','lfFDC','NUM','_result','veZBC','isEquipBattleSkillMode','General','actorAt','setBackgroundType','setItem','ShowSwitchAll','itemPadding','ShowSwitchAny','isFieldSkill','ShowRegion','ARRAYNUM','defaultMapEnable','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','241144HXLFKl','selectLast','playUseFieldSkills','pUnSJ','isSkillLearnMode','FrontviewBattleUI','onFieldSkillsOk','mapEnable','FieldSkill','ceil','QtZom','lineHeight','RegExp','mpAffected','VisuMZ_1_EventsMoveCore','cDGGI','HideRegion','setText','_scene','Game_Map_setup','meetsFieldSkillRequirements','fieldSkillsListWindowRect','playSe','ParseSkillNotetags','setLastMenuSkill','FieldSkills','activate','fieldSkillsOpen','match','ApplyFrontviewBattleUiPopup','_fieldSkillVisibility','push','item','ConvertParams','cancel','1950344Ojzksx','rNEZW','flOCG','SceneSkillCanActivate','EVAL','canUse','setupFieldSkillNotetags','prototype','cdSIV','createFieldSkillsListWindow','maxCols','_fieldSkills','isSceneMap','lastSkill','DefaultEnable','width','POwLX','_fieldSkillsHelpWindow','reserveCommonEvent','max','deactivate','ARRAYSTR'];_0x13c8=function(){return _0xe38e42;};return _0x13c8();}function Window_FieldSkillList(){this['initialize'](...arguments);}Window_FieldSkillList[_0x40cd65(0x28e)]=Object[_0x40cd65(0x1eb)](Window_Selectable['prototype']),Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x1ae)]=Window_FieldSkillList,Window_FieldSkillList[_0x40cd65(0x23c)]={'allMembers':VisuMZ[_0x40cd65(0x27d)]['Settings']['General'][_0x40cd65(0x18c)],'addCancelButton':VisuMZ['FieldSkills'][_0x40cd65(0x192)][_0x40cd65(0x258)][_0x40cd65(0x29d)],'faceOrName':VisuMZ['FieldSkills'][_0x40cd65(0x192)][_0x40cd65(0x258)][_0x40cd65(0x1c5)],'faceBuffer':VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x192)]['General'][_0x40cd65(0x1ab)]},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x1a3)]=function(_0x5358de){const _0x385ad4=_0x40cd65;Window_Selectable[_0x385ad4(0x28e)][_0x385ad4(0x1a3)][_0x385ad4(0x20d)](this,_0x5358de),this['createCancelButton'](),this[_0x385ad4(0x1e7)](),this['_data']=[];},Window_FieldSkillList['prototype'][_0x40cd65(0x1ce)]=function(){const _0x342766=_0x40cd65;ConfigManager[_0x342766(0x17f)]&&Window_FieldSkillList[_0x342766(0x23c)]['addCancelButton']&&('XiiTN'!==_0x342766(0x246)?(_0x3170c2[_0x342766(0x27d)][_0x342766(0x1d2)][_0x342766(0x20d)](this),this[_0x342766(0x239)]()):(this['_cancelButton']=new Sprite_Button('cancel'),this['_cancelButton'][_0x342766(0x189)]=![],this[_0x342766(0x18d)](this[_0x342766(0x197)]),this[_0x342766(0x197)]['x']=this[_0x342766(0x296)]+this['padding'],this[_0x342766(0x197)]['y']=this['padding']));},Window_FieldSkillList['prototype']['loadFaceImages']=function(){const _0x53287e=_0x40cd65;for(const _0x129a54 of $gameParty['members']()){ImageManager[_0x53287e(0x1c1)](_0x129a54['faceName']());}},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x291)]=function(){return 0x1;},Window_FieldSkillList[_0x40cd65(0x28e)]['colSpacing']=function(){return 0x0;},Window_FieldSkillList[_0x40cd65(0x28e)]['maxItems']=function(){const _0x85c36=_0x40cd65;return this['_data']?this[_0x85c36(0x19e)]['length']:0x1;},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x284)]=function(){const _0x482231=_0x40cd65;return this['itemAt'](this[_0x482231(0x1a6)]());},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x1b9)]=function(_0x305216){const _0x4937f4=_0x40cd65;return this['_data']&&_0x305216>=0x0?this[_0x4937f4(0x19e)][_0x305216][0x0]:null;},Window_FieldSkillList[_0x40cd65(0x28e)]['actor']=function(){const _0x1449a8=_0x40cd65;return this[_0x1449a8(0x259)](this['index']());},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x259)]=function(_0x145f24){const _0xdcb6cb=_0x40cd65;return this['_data']&&_0x145f24>=0x0?this[_0xdcb6cb(0x19e)][_0x145f24][0x1]:null;},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x23e)]=function(){const _0x49f357=_0x40cd65;this[_0x49f357(0x202)](this[_0x49f357(0x284)]());},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x199)]=function(){const _0x5b3018=_0x40cd65;SoundManager[_0x5b3018(0x266)]();},Window_FieldSkillList['prototype'][_0x40cd65(0x1db)]=function(){const _0x182e00=_0x40cd65;Window_Selectable[_0x182e00(0x28e)]['open'][_0x182e00(0x20d)](this),this[_0x182e00(0x197)]&&(this['_cancelButton'][_0x182e00(0x189)]=!![]);},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x21e)]=function(){const _0x55f476=_0x40cd65;Window_Selectable[_0x55f476(0x28e)][_0x55f476(0x21e)][_0x55f476(0x20d)](this),this[_0x55f476(0x197)]&&(_0x55f476(0x250)!=='TqgyS'?this[_0x55f476(0x197)][_0x55f476(0x189)]=!![]:this[_0x55f476(0x197)][_0x55f476(0x189)]=![]);},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x1c9)]=function(){const _0x199a9e=_0x40cd65;return this[_0x199a9e(0x18a)](this['_data'][this[_0x199a9e(0x1a6)]()]);},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x18a)]=function(_0x30f05a){const _0x247675=_0x40cd65;if(!_0x30f05a)return![];const _0x59af84=_0x30f05a[0x0],_0x392b1d=_0x30f05a[0x1];return _0x59af84&&_0x392b1d&&_0x392b1d[_0x247675(0x28c)](_0x59af84)&&DataManager[_0x247675(0x278)](_0x392b1d,_0x59af84);},VisuMZ[_0x40cd65(0x27d)][_0x40cd65(0x203)]=Game_BattlerBase[_0x40cd65(0x28e)][_0x40cd65(0x22b)],Game_BattlerBase[_0x40cd65(0x28e)][_0x40cd65(0x22b)]=function(_0x4830fa){const _0x37bdf1=_0x40cd65;if(DataManager['isFieldSkill'](_0x4830fa)&&SceneManager['isSceneMap']())return!![];return VisuMZ[_0x37bdf1(0x27d)]['Game_BattlerBase_isOccasionOk'][_0x37bdf1(0x20d)](this,_0x4830fa);},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x29f)]=function(_0x46560a){if(!_0x46560a)return![];const _0x5495b3=_0x46560a[0x0],_0x38c9e8=_0x46560a[0x1];return _0x5495b3&&_0x38c9e8&&DataManager['meetsFieldSkillVisibility'](_0x38c9e8,_0x5495b3);},Window_FieldSkillList['prototype'][_0x40cd65(0x18f)]=function(){const _0x5d6a46=_0x40cd65;this[_0x5d6a46(0x24c)](),Window_Selectable[_0x5d6a46(0x28e)][_0x5d6a46(0x18f)][_0x5d6a46(0x20d)](this),this[_0x5d6a46(0x265)]();},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x24c)]=function(){const _0x5636b5=_0x40cd65;this[_0x5636b5(0x19e)]=[];const _0x166127=Window_FieldSkillList[_0x5636b5(0x23c)]['allMembers']?$gameParty[_0x5636b5(0x18e)]():$gameParty['battleMembers']();for(const _0x1710f7 of _0x166127){if(!_0x1710f7)continue;const _0x4013a4=_0x1710f7[_0x5636b5(0x1fc)]()[_0x5636b5(0x24f)](_0x3ca9de=>DataManager[_0x5636b5(0x25f)](_0x3ca9de));for(const _0x20ae18 of _0x4013a4){const _0x2b20c3=[_0x20ae18,_0x1710f7];if(this['includes'](_0x2b20c3)){if(_0x5636b5(0x1f4)===_0x5636b5(0x228))return this[_0x5636b5(0x1a7)];else this['_data'][_0x5636b5(0x283)](_0x2b20c3);}}}this[_0x5636b5(0x19e)]['length']<=0x0&&this[_0x5636b5(0x19e)][_0x5636b5(0x283)]([null,null]);},Window_FieldSkillList[_0x40cd65(0x28e)]['drawItem']=function(_0x3f7327){const _0x11b345=_0x40cd65,_0x47d384=this[_0x11b345(0x1b9)](_0x3f7327);if(!_0x47d384)return;const _0x8bfd5d=this[_0x11b345(0x259)](_0x3f7327);if(!_0x8bfd5d)return;const _0x1dd7c3=this[_0x11b345(0x1ca)](_0x3f7327);this['changePaintOpacity'](this[_0x11b345(0x18a)]([_0x47d384,_0x8bfd5d]));const _0x4ab324=Window_FieldSkillList[_0x11b345(0x23c)]['faceBuffer'];if(Window_FieldSkillList[_0x11b345(0x23c)][_0x11b345(0x200)]===_0x11b345(0x1af))_0x11b345(0x1be)!==_0x11b345(0x1da)?this[_0x11b345(0x1f0)](_0x8bfd5d[_0x11b345(0x1f3)](),_0x8bfd5d[_0x11b345(0x225)](),_0x1dd7c3['x'],_0x1dd7c3['y'],ImageManager[_0x11b345(0x241)],this[_0x11b345(0x26f)]()):_0x160581[_0x11b345(0x1c1)](_0x43154d[_0x11b345(0x1f3)]());else{if(Window_FieldSkillList[_0x11b345(0x23c)]['faceOrName']===_0x11b345(0x201)){if(_0x11b345(0x180)!==_0x11b345(0x180)){_0x3c35a6[_0x11b345(0x285)](_0x638356,_0x425c8d);const _0x48c27c=_0x712bd4['Enable'];_0x5ed540[_0x11b345(0x23a)]()[_0x11b345(0x26b)]=_0x48c27c;}else{const _0x3a72f8=_0x1dd7c3['x']+this[_0x11b345(0x25d)]();this[_0x11b345(0x205)](_0x8bfd5d['name'](),_0x3a72f8,_0x1dd7c3['y'],_0x4ab324-this['itemPadding'](),_0x11b345(0x1d0));}}}const _0x3537a3=_0x47d384[_0x11b345(0x201)];Window_SkillList[_0x11b345(0x28e)][_0x11b345(0x196)](_0x47d384),this[_0x11b345(0x240)](_0x47d384,_0x1dd7c3['x']+_0x4ab324,_0x1dd7c3['y'],_0x1dd7c3['width']),this[_0x11b345(0x1ef)](_0x8bfd5d,_0x47d384,_0x1dd7c3['x'],_0x1dd7c3['y'],_0x1dd7c3[_0x11b345(0x296)]);if(_0x47d384)_0x47d384[_0x11b345(0x201)]=_0x3537a3;},Window_FieldSkillList['prototype']['selectLast']=function(){const _0x17ced8=_0x40cd65;let _0x41c173=0x0;if(ConfigManager[_0x17ced8(0x1bb)]&&$gameSystem['fieldSkillsData']()[_0x17ced8(0x294)]&&$gameSystem[_0x17ced8(0x23a)]()[_0x17ced8(0x20e)]){const _0x2b8120=this[_0x17ced8(0x19e)][_0x17ced8(0x1b0)](_0x8ce357=>_0x8ce357[0x0]===$gameSystem[_0x17ced8(0x23a)]()['lastSkill']&&_0x8ce357[0x1]===$gameSystem[_0x17ced8(0x23a)]()[_0x17ced8(0x20e)]);_0x2b8120&&('LZrCE'===_0x17ced8(0x182)?_0x41c173=this['_data']['indexOf'](_0x2b8120):(_0x2650f7[_0x17ced8(0x28e)][_0x17ced8(0x21e)][_0x17ced8(0x20d)](this),this[_0x17ced8(0x197)]&&(this[_0x17ced8(0x197)]['visible']=![])));}this[_0x17ced8(0x1b5)](_0x41c173>=0x0?_0x41c173:0x0);},Window_FieldSkillList[_0x40cd65(0x28e)][_0x40cd65(0x1fb)]=function(){const _0x4329d7=_0x40cd65;$gameSystem[_0x4329d7(0x23a)]()['lastSkill']=this[_0x4329d7(0x284)](),$gameSystem[_0x4329d7(0x23a)]()[_0x4329d7(0x20e)]=this[_0x4329d7(0x245)]();};