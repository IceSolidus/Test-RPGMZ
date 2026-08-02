//=============================================================================
// VisuStella MZ - Tutorial Panel System
// VisuMZ_2_TutorialPanelSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_TutorialPanelSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.TutorialPanelSys = VisuMZ.TutorialPanelSys || {};
VisuMZ.TutorialPanelSys.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.02] [TutorialPanelSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Tutorial_Panel_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The plugin adds the ability to display tutorial panels seen in many recent
 * JRPG's. The tutorial panel system allows the player to read forward and
 * backward at their own pace while having visuals displayed on the relevant
 * tutorial pages. The player can later reread the tutorials found in a
 * dedicated Tutorial List scene that is accessible through the main menu.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds modern JRPG Tutorial Panel system.
 * * Players can read tutorials at their own pace, advancing forward and
 *   backward as needed, all while tutorials provide visuals.
 * * The list of already read tutorials can be accessed from the Main Menu
 *   if enabled and made visible through the Plugin Commands/Parameters.
 * * Tutorials can be viewed from the map scene or battle scene.
 * * Tutorial calls can be bypassed if the player has already viewed them, in
 *   order to prevent tediousness.
 * * Tutorials can be bypassed manually by the player through the Options scene
 *   if they do not wish to read tutorials for whatever reason (such as their
 *   second or third playthrough of the game).
 * * Tutorials can still be forcefully opened ignoring the bypass options of
 *   having already been read or turned off through the Options menu.
 * * Game devs can silently register tutorials to be placed into the Tutorial
 *   List scene for the player to read without having to show the tutorial.
 * * Within the Tutorial List scene, tutorials are separated into categories,
 *   allowing players to sort through them easily.
 * * Players can expand and collapse categories as needed if there are too many
 *   tutorials to navigate through.
 * * Some tutorials can already be made visible and registered by default.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * VisuMZ_0_CoreEngine
 * 
 * This plugin provides vocabulary that can be used for the Button Assist
 * Window added through the VisuMZ Core Engine.
 * 
 * ---
 *
 * VisuMZ_1_MainMenuCore
 *
 * The latest version of the VisuMZ Main Menu Core already has the settings for
 * the Tutorial List command.
 *
 * ---
 *
 * VisuMZ_1_OptionsCore
 *
 * The latest version of the VisuMZ Options Core should have the settings for
 * showing/hiding tutorials.
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
 * === Tutorial Plugin Commands ===
 * 
 * ---
 *
 * Tutorial: Call
 * - Call forth a tutorial of the designated Tutorial ID Key.
 * - Use on the map or battle scenes.
 *
 *   Tutorial ID Key:
 *   - What is the tutorial identification key?
 *
 *   Force View?:
 *   - Forcefully opens the tutorial regardless of the Options settings or if
 *     "Bypass if Registered?" is enabled.
 *
 *   Bypass if Registered?:
 *   - Ignores opening the tutorial if the tutorial has already been
 *     viewed once.
 *
 *   Register Tutorial?:
 *   - Registers the tutorial to the Tutorial List that the player can revisit.
 *
 * ---
 *
 * Tutorial: Register ID Key(s)
 * - Register specific Tutorial ID Key(s) without opening the tutorial.
 *
 *   Tutorial ID Key(s):
 *   - Add which tutorial identification key(s)?
 *
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Full Tutorial List?
 * - For playtest only! Allows you to fully view Tutorial.
 * - Resets when the game client is closed.
 * 
 *   Reveal?:
 *   - Fully reveals Tutorial list for playtesting.
 *   - Resets when the game client is closed.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Tutorial List in Menu?
 * - Enables/disables "Tutorial List" menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables "Tutorial List" menu inside the main menu.
 *
 * ---
 *
 * System: Show Tutorial List in Menu?
 * - Shows/hides "Tutorial List" inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides "Tutorial List" inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Category List Settings
 * ============================================================================
 *
 * List of categories that are used for this plugin. Categories will be listed
 * in the order they appear with "Unlisted" category displayed first.
 *
 * ---
 *
 * Category
 * 
 *   ID Key:
 *   - This category's identification key.
 *   - Categories require unique keys for the plugin to differentiate them.
 * 
 *   Title:
 *   - This category's title.
 *   - You may use text codes.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tutorial List Settings
 * ============================================================================
 *
 * List of tutorials that are used for this plugin. Here is where you add all
 * the tutorials seen in game. How they appear and such is all handled here.
 *
 * ---
 *
 * Tutorial
 * 
 *   ID Key:
 *   - This tutorial's identification key.
 *   - Tutorials require unique keys for the plugin to differentiate them.
 * 
 *   Title:
 *   - This tutorial's title. Displayed in a separate window.
 *   - You may use text codes.
 * 
 *   Category:
 *   - The category this tutorial is listed under.
 *   - If unlisted, the tutorial will be listed under "Unlisted".
 * 
 *   Pages:
 *   - List of pages that are shown for this tutorial.
 *   - Pages are displayed in the order listed.
 *
 * ---
 *
 * Page Settings
 * 
 *   Filename:
 *   - Displayed image associated with this page.
 *   - Found in the game project's /img/pictures/ folder.
 * 
 *   Description:
 *   - The description text displayed for this page.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_TutorialData Settings
 * ============================================================================
 *
 * Settings for Scene_TutorialData. This scene is where the contents of the
 * tutorials are displayed.
 *
 * ---
 *
 * Background
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
 * Button Assist Vocab
 * 
 *   Change Page:
 *   - Vocabulary used for changing pages.
 *   - You may use text codes.
 * 
 *   Next Page:
 *   - Vocabulary used for moving to the next page.
 *   - You may use text codes.
 * 
 *   Done Tutorial:
 *   - Vocabulary used for being done with the tutorial.
 *   - You may use text codes.
 *
 * ---
 *
 * Windows > Pages Window
 * 
 *   Active Page Text:
 *   - Vocabulary used for active page.
 *   - You may use text codes.
 * 
 *   Inactive Page Text:
 *   - Vocabulary used for inactive page.
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
 * Windows > Description Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Picture Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Title Window
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
 * Plugin Parameters: Scene_TutorialList Settings
 * ============================================================================
 *
 * Settings for Scene_TutorialList. This is the scene where the player can go
 * to reread previously viewed tutorials.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'Tutorials' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Tutorials' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Tutorials' option to the Main Menu by default?
 *
 * Background
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
 * Button Assist Vocab
 * 
 *   View Tutorial:
 *   - Text for viewing tutorial.
 * 
 *   Expand Category:
 *   - Text for expanding categories.
 * 
 *   Collapse Category:
 *   - Text for collapsing categories.
 *
 * ---
 *
 * Windows > List Window
 * 
 *   Open Categories:
 *   - Text format for an open category.
 *   - %1 - Category Name, %2 - Quest Amount
 * 
 *   Closed Categories:
 *   - Text format for an open category.
 *   - %1 - Category Name, %2 - Quest Amount
 * 
 *   Unlisted Category:
 *   - Text used for "unlisted" category.
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
 * ============================================================================
 * Plugin Parameters: Scene_Battle Settings
 * ============================================================================
 *
 * Settings for Scene_Battle. This governs how tutorials appear in battle.
 *
 * ---
 *
 * Windows > Battle Status Window
 * 
 *   Hide During?:
 *   - Hide the battle status window during tutorials?
 *   - Does NOT affect VisuMZ_3_SideviewBattleUI!
 *
 * ---
 *
 * Windows > Pages Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Description Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Picture Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Title Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Button Assist Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings for this plugin.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Tutorials' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Sound settings when changing tutorial pages.
 *
 * ---
 *
 * Sound
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
 * Version 1.02: March 20, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Scene Battle > Button Assist Window
 * **** Button Assist Window > Background Type
 * **** Button Assist Window > JS: X, Y, W, H
 * ***** Added menu button assist to the battle scene where it previously was
 *       not available.
 * ***** Requires VisuMZ_0_CoreEngine!
 * 
 * Version 1.01: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu:
 * *** Debug: Full Tutorial List?
 * **** For playtest only! Allows you to fully view Tutorial.
 * **** Resets when the game client is closed.
 *
 * Version 1.00 Official Release Date: January 2, 2023
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
 * @command TutorialCall
 * @text Tutorial: Call
 * @desc Call forth a tutorial of the designated Tutorial ID Key.
 * Use on the map or battle scenes.
 *
 * @arg Key:str
 * @text Tutorial ID Key
 * @desc What is the tutorial identification key?
 * @default Untitled
 *
 * @arg ForceView:eval
 * @text Force View?
 * @type boolean
 * @on Force Open
 * @off Conditional
 * @desc Forcefully opens the tutorial regardless of the Options settings or if "Bypass if Registered?" is enabled.
 * @default false
 *
 * @arg BypassIfRegistered:eval
 * @text Bypass if Registered?
 * @type boolean
 * @on Bypass
 * @off Open Always
 * @desc Ignores opening the tutorial if the tutorial has already been viewed once.
 * @default false
 *
 * @arg RegisterTutorial:eval
 * @text Register Tutorial?
 * @type boolean
 * @on Register
 * @off Bypass
 * @desc Registers the tutorial to the Tutorial List that the player can revisit.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TutorialRegisterKeys
 * @text Tutorial: Register ID Key(s)
 * @desc Register specific Tutorial ID Key(s) without opening the tutorial.
 *
 * @arg KeyIDs:arraystr
 * @text Tutorial ID Key(s)
 * @type string[]
 * @desc Add which tutorial identification key(s)?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugFullTutorial
 * @text Debug: Full Tutorial List?
 * @desc For playtest only! Allows you to fully view Tutorial.
 * Resets when the game client is closed.
 *
 * @arg Reveal:eval
 * @text Reveal?
 * @type boolean
 * @on Reveal
 * @off Normal
 * @desc Fully reveals Tutorial list for playtesting.
 * Resets when the game client is closed.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableTutorialListMenu
 * @text System: Enable Tutorial List in Menu?
 * @desc Enables/disables "Tutorial List" menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables "Tutorial List" menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowTutorialListMenu
 * @text System: Show Tutorial List in Menu?
 * @desc Shows/hides "Tutorial List" inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides "Tutorial List" inside the main menu.
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
 * @param TutorialPanelSys
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Data
 *
 * @param Categories:arraystruct
 * @text Category List
 * @parent Data
 * @type struct<Category>[]
 * @desc List of categories that are used for this plugin.
 * @default ["{\"Key:str\":\"General\",\"Title:str\":\"\\\\C[4]General Tutorials\"}","{\"Key:str\":\"Battle\",\"Title:str\":\"\\\\C[6]Battle Tutorials\"}","{\"Key:str\":\"Field\",\"Title:str\":\"\\\\C[24]Field Tutorials\"}","{\"Key:str\":\"Menu\",\"Title:str\":\"\\\\C[5]Menu Tutorials\"}"]
 *
 * @param Tutorials:arraystruct
 * @text Tutorial List
 * @parent Data
 * @type struct<Tutorial>[]
 * @desc List of tutorials that are used for this plugin.
 * @default ["{\"Key:str\":\"Sample\",\"Title:str\":\"\\\\i[7]Sample Tutorial\",\"Category:str\":\"Unlisted\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]sample tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] description.\\\\\\\\\\\\\\\\nPress \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and/or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]right\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to change tutorial pages.\\\\\\\\\\\\\\\\nYou may use \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]text codes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to highlight words.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]page 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\nYou can use different pictures from the project's\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\img\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\pictures\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] folder to display for each page.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Press \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]LEFT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]RIGHT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to change between \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial pages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\nYou can also press \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Z\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to move the page forward.\\\\\\\\\\\\\\\\nPressing \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]X\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will exit out of the tutorial completely.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips1\",\"Title:str\":\"\\\\I[84]Tip #1 - Usefulness\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Here are some tips that we have for\\\\\\\\\\\\\\\\nmaking useful \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Provide \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]in-game screenshots\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to accompany the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\ndescriptions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] for each \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial page\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] since players\\\\\\\\\\\\\\\\ntend to be more \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]visual learners\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips2\",\"Title:str\":\"\\\\I[87]Tip #2 - Legibility\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Use text codes to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]highlight words\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and/or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]add icons\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial pages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to make them more vivid\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I[7].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Make sure the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]messages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] for your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial descriptions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nare \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]short\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]concise\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]Avoid\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] wordiness in order to\\\\\\\\\\\\\\\\nmake sure your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial's message\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] gets across.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips3\",\"Title:str\":\"\\\\I[88]Tip #3 - Concise\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Although you can have lots of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]pages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] for each\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], keep the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]quantity\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] small. You don't want\\\\\\\\\\\\\\\\nto \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]overload\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] your players with too much information.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Make sure your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] appear timely. Have them\\\\\\\\\\\\\\\\nappear right before the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]contents\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\ncan be practiced for \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]maximum impact\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips4\",\"Title:str\":\"\\\\I[89]Tip #4 - Retention\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Players can revisit \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] from the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Tutorial List\\\\\\\\\\\\\\\\nScene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], but this should \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]never\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] be a requirement!\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Keep \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] sparse. You don't want one \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\npopping up right after another. Keeping them sparse\\\\\\\\\\\\\\\\nhelps players \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]retain\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] what they've learned.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"BattleTutorialTips1\",\"Title:str\":\"\\\\I[97]Tip #1 - Accessible\",\"Category:str\":\"Battle\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Use the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to open up a\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial panel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Unlike opening \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] elsewhere, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that\\\\\\\\\\\\\\\\nare displayed in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will not send the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to\\\\\\\\\\\\\\\\na \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]different scene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in order to preserve the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"While the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is open in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is\\\\\\\\\\\\\\\\nconsidered frozen and will \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]not\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] advance until the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] finishes reading the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"BattleTutorialTips2\",\"Title:str\":\"\\\\I[98]Tip #2 - One Time\",\"Category:str\":\"Battle\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"As you already know, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] have to be launched in\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This can be done through either the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Troop Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] or\\\\\\\\\\\\\\\\nskill/item \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Common Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If they are repeatable \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Troop Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Common Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\nthen we recommend using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Bypass if Registered?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nand \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Register Tutorial?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] options.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This will prevent the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] from popping up each\\\\\\\\\\\\\\\\ntime the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Troop Event\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] conditions are met or whenever\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Common Event\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] actions are \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]triggered\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"BattleTutorialTips3\",\"Title:str\":\"\\\\I[99]Tip #3 - Action Sequences\",\"Category:str\":\"Battle\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If a skill has a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]unique effect\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] added through an\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Action Sequence\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], throw in a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], too.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Do it either at the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]start\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Action Sequence\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so\\\\\\\\\\\\\\\\nthat the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] knows what to look for.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"As the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]unique effect\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] occurs, the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will have a\\\\\\\\\\\\\\\\nbetter understanding of what happened and ideally\\\\\\\\\\\\\\\\nlearned a whole \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]new\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] mechanic.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Remember to use the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Bypass if Registered?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Register Tutorial?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] options to prevent \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]unnecessary\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nrepetition for future uses of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]skill/item\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"FieldTutorialTips1\",\"Title:str\":\"\\\\I[181]Tip #1 - Map Call\",\"Category:str\":\"Field\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Calling a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] from the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]map scene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be done\\\\\\\\\\\\\\\\nthrough the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This will send the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]different\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] scene where\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is displayed in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]private\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so that there is\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]no\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] map \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]event interference\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"FieldTutorialTips2\",\"Title:str\":\"\\\\I[182]Tip #2 - Proximity\",\"Category:str\":\"Field\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If you are using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]VisuMZ Events & Movement Core\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\nyou can take advantage of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]proximity\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]-based \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]event\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]activation triggers\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Notetags\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] like \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]<Activation Radius: x>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] allow certain\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]trigger\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] upon the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] getting close.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This allows for \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]tutorial calls\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to pop up at more\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]relevant\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] times and positions so that the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] knows\\\\\\\\\\\\\\\\nwhat they're looking at and learning about.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"FieldTutorialTips3\",\"Title:str\":\"\\\\I[183]Tip #3 - Options\",\"Category:str\":\"Field\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Be sure to remind your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that there is an \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nfound in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Options scene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]turn off\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Although \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be very helpful, they \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]aren't\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nalways \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]relevant\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]returning players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] who may have\\\\\\\\\\\\\\\\nplayed your game \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]multiple\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] times.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips1\",\"Title:str\":\"\\\\I[234]Tip #1 - Tutorial List\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"When you call \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and have the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Register Tutorial?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] set to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]true\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], that \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]revisited\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can revisit \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Main Menu\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]'s\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[189]Tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] command if it is \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]available\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If there are \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]no\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] available for reading,\\\\\\\\\\\\\\\\nthen this \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will be \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]disabled\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips2\",\"Title:str\":\"\\\\I[233]Tip #2 - Registration\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"You don't always have to throw \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] into your\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]' faces in order to register them.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"By using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Register ID Key(s)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin\\\\\\\\\\\\\\\\nCommand\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], you can just \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]quietly\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] add \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Tutorial List\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] scene.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]great way\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to add \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that may be a\\\\\\\\\\\\\\\\nbit more on the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]obscure\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] side that your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] may\\\\\\\\\\\\\\\\nor may not need to read.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips3\",\"Title:str\":\"\\\\I[232]Tip #3 - Libraries\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Does your game feature a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]library\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of some sort that\\\\\\\\\\\\\\\\nyour \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can read? \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]Transcribe\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]contents\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] into a\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so that the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]read on the go\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]!\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is particularly \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]helpful\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] if there are \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]hints\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and\\\\\\\\\\\\\\\\nsuch found in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]library\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] books.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Set the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Force View?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]true\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to have the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] be able to read the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]book\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] regardless of their\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Options settings\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]skip tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips4\",\"Title:str\":\"\\\\I[231]Tip #4 - Stored Hints\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Do you have \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]puzzles\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]game\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]? If so, you can use\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Tutorial List\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to store \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]hints\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] may\\\\\\\\\\\\\\\\nhave found across their playthrough.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]Silently\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] register hints through the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Register ID Key(s)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so that your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\ndoesn't need to be bombarded with them.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Adding \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]hints\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in the form of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can help the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] save a few \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]backtracking\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] trips.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}"]
 * 
 * @param DefaultUnlocked:arraystr
 * @text Default Unlocks
 * @parent Tutorials:arraystruct
 * @type string[]
 * @desc List of ID Keys for tutorials that are already unlocked and viewable.
 * @default ["Sample","TutorialTips1","TutorialTips2","TutorialTips3","TutorialTips4","BattleTutorialTips1","BattleTutorialTips2","BattleTutorialTips3","FieldTutorialTips1","FieldTutorialTips2","FieldTutorialTips3","MenuTutorialTips1","MenuTutorialTips2","MenuTutorialTips3","MenuTutorialTips4"]
 * 
 * @param Scenes
 *
 * @param SceneTutorialData:struct
 * @text Scene_TutorialData
 * @parent Scenes
 * @type struct<SceneTutorialData>
 * @desc Settings for Scene_TutorialData.
 * @default {"Background":"","SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":"","Vocab":"","VocabChangePage:str":"Change Page","VocabNextPage:str":"Next","VocabDoneTutorial:str":"Done","Windows":"","Window_TutorialPages":"","VocabActivePage:str":"\\I[163]","VocabInactivePage:str":"\\I[161]","PageWindow_BgType:num":"2","PageWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialDescription":"","DescWindow_BgType:num":"0","DescWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh - this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialPicture":"","PictureWindow_BgType:num":"2","PictureWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = descWindow.width;\\nconst wh = this.mainAreaHeight() - descWindow.height - this.calcWindowHeight(1, true);\\nconst wx = descWindow.x;\\nconst wy = this.mainAreaTop();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialTitle":"","TitleWindow_BgType:num":"0","TitleWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = Math.max(descWindow.width - 300, 480);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = descWindow.y - Math.floor(wh / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneTutorialList:struct
 * @text Scene_TutorialList
 * @parent Scenes
 * @type struct<SceneTutorialList>
 * @desc Settings for Scene_TutorialList.
 * @default {"MainMenu":"","MainMenuName:str":"Tutorials","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true","Background":"","SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":"","Vocab":"","VocabView:str":"View","VocabExpand:str":"Expand","VocabCollapse:str":"Collapse","Windows":"","Window_TutorialList":"","VocabOpenCategory:str":"- %1(%2)","VocabClosedCategory:str":"+ %1(%2)","VocabUnlisted:str":"\\C[8]Uncategorized","ListWindow_BgType:num":"0","ListWindow_RectJS:func":"\"const fw = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst ww = Math.max(fw - 300, 480);\\nconst wh = this.calcWindowHeight(10, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneBattle:struct
 * @text Scene_Battle
 * @parent Scenes
 * @type struct<SceneBattle>
 * @desc Settings for Scene_Battle.
 * @default {"Windows":"","Window_BattleStatus":"","HideDuring:eval":"true","Window_TutorialPages":"","PageWindow_BgType:num":"2","PageWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Graphics.boxHeight - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialDescription":"","DescWindow_BgType:num":"0","DescWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Graphics.boxHeight - wh - this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialPicture":"","PictureWindow_BgType:num":"2","PictureWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = descWindow.width;\\nconst wh = (Graphics.boxHeight - this.buttonAreaHeight()) - descWindow.height - this.calcWindowHeight(1, true);\\nconst wx = descWindow.x;\\nconst wy = this.buttonAreaHeight();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialTitle":"","TitleWindow_BgType:num":"0","TitleWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = Math.max(descWindow.width - 300, 480);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = descWindow.y - Math.floor(wh / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialButtonAssist":"","ButtonAssistWindow_BgType:num":"0","ButtonAssistWindow_RectJS:func":"\"const wx = Math.floor((Sprite_Button.prototype.blockWidth() + 6) * 2);\\nconst wy = 0;\\nconst ww = Graphics.boxWidth - wx * 2;\\nconst wh = this.buttonAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Options:struct
 * @text Options Settings
 * @parent Scenes
 * @type struct<Options>
 * @desc Options settings for this plugin.
 * @default {"Options":"","AddTutorialsOption:eval":"true","AdjustRect:eval":"true","Name:str":"Tutorials"}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @parent Scenes
 * @type struct<Sound>
 * @desc Sound settings when changing tutorial pages.
 * @default {"name:str":"Book1","volume:num":"90","pitch:num":"120","pan:num":"0"}
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
 * Category List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Key:str
 * @text ID Key
 * @desc This category's identification key. Categories require
 * unique keys for the plugin to differentiate them.
 * @default (Needs Key)
 *
 * @param Title:str
 * @text Title
 * @desc This category's title.
 * You may use text codes.
 * @default Untitled
 * 
 */
/* ----------------------------------------------------------------------------
 * Tutorial List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tutorial:
 *
 * @param Key:str
 * @text ID Key
 * @desc This tutorial's identification key. Tutorials require
 * unique keys for the plugin to differentiate them.
 * @default (Needs Key)
 *
 * @param Title:str
 * @text Title
 * @desc This tutorial's title. Displayed in a separate window.
 * You may use text codes.
 * @default Untitled
 *
 * @param Category:str
 * @text Category
 * @desc The category this tutorial is listed under.
 * If unlisted, the tutorial will be listed under "Unlisted".
 * @default Unlisted
 *
 * @param Pages:arraystruct
 * @text Pages
 * @type struct<Page>[]
 * @desc List of pages that are shown for this tutorial.
 * Pages are displayed in the order listed.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Page Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Page:
 *
 * @param Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Displayed image associated with this page.
 * Found in the game project's /img/pictures/ folder.
 * @default Untitled
 *
 * @param Description:json
 * @text Description
 * @type note
 * @desc The description text displayed for this page.
 * Text codes are allowed.
 * @default "Line 1\nLine 2\nLine 3"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_TutorialData Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneTutorialData:
 *
 * @param Background
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @parent Background
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @parent Background
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @parent Background
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 * 
 * @param Vocab
 * @text Button Assist Vocab
 *
 * @param VocabChangePage:str
 * @text Change Page
 * @parent Vocab
 * @desc Vocabulary used for changing pages.
 * You may use text codes.
 * @default Change Page
 *
 * @param VocabNextPage:str
 * @text Next Page
 * @parent Vocab
 * @desc Vocabulary used for moving to the next page.
 * You may use text codes.
 * @default Next
 *
 * @param VocabDoneTutorial:str
 * @text Done Tutorial
 * @parent Vocab
 * @desc Vocabulary used for being done with the tutorial.
 * You may use text codes.
 * @default Done
 * 
 * @param Windows
 * 
 * @param Window_TutorialPages
 * @text Pages Window
 * @parent Windows
 *
 * @param VocabActivePage:str
 * @text Active Page Text
 * @parent Window_TutorialPages
 * @desc Vocabulary used for active page.
 * You may use text codes.
 * @default \I[163]
 *
 * @param VocabInactivePage:str
 * @text Inactive Page Text
 * @parent Window_TutorialPages
 * @desc Vocabulary used for inactive page.
 * You may use text codes.
 * @default \I[161]
 *
 * @param PageWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPages
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PageWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPages
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialDescription
 * @text Description Window
 * @parent Windows
 *
 * @param DescWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialDescription
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
 * @param DescWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialDescription
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh - this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialPicture
 * @text Picture Window
 * @parent Windows
 *
 * @param PictureWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPicture
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PictureWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPicture
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = descWindow.width;\nconst wh = this.mainAreaHeight() - descWindow.height - this.calcWindowHeight(1, true);\nconst wx = descWindow.x;\nconst wy = this.mainAreaTop();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialTitle
 * @text Title Window
 * @parent Windows
 *
 * @param TitleWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialTitle
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
 * @param TitleWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialTitle
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = Math.max(descWindow.width - 300, 480);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = descWindow.y - Math.floor(wh / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_TutorialList Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneTutorialList:
 *
 * @param MainMenu
 * @text Main Menu Settings
 *
 * @param MainMenuName:str
 * @text Command Name
 * @parent MainMenu
 * @desc Name of the 'Tutorials' option in the Main Menu.
 * @default Tutorials
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Tutorials' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Tutorials' option to the Main Menu by default?
 * @default true
 *
 * @param Background
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @parent Background
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @parent Background
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @parent Background
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 * 
 * @param Vocab
 * @text Button Assist Vocab
 * 
 * @param VocabView:str
 * @text View Tutorial
 * @parent Vocab
 * @desc Text for viewing tutorial.
 * @default View
 * 
 * @param VocabExpand:str
 * @text Expand Category
 * @parent Vocab
 * @desc Text for expanding categories.
 * @default Expand
 *
 * @param VocabCollapse:str
 * @text Collapse Category
 * @parent Vocab
 * @desc Text for collapsing categories.
 * @default Collapse
 * 
 * @param Windows
 * 
 * @param Window_TutorialList
 * @text List Window
 * @parent Windows
 *
 * @param VocabOpenCategory:str
 * @text Open Categories
 * @parent Window_TutorialList
 * @desc Text format for an open category.
 * %1 - Category Name, %2 - Quest Amount
 * @default - %1(%2)
 *
 * @param VocabClosedCategory:str
 * @text Closed Categories
 * @parent Window_TutorialList
 * @desc Text format for an open category.
 * %1 - Category Name, %2 - Quest Amount
 * @default + %1(%2)
 *
 * @param VocabUnlisted:str
 * @text Unlisted Category
 * @parent Window_TutorialList
 * @desc Text used for "unlisted" category.
 * You may use text codes.
 * @default \C[8]Uncategorized
 *
 * @param ListWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialList
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
 * @parent Window_TutorialList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const fw = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst ww = Math.max(fw - 300, 480);\nconst wh = this.calcWindowHeight(10, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_Battle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneBattle:
 *
 * @param Windows
 * 
 * @param Window_BattleStatus
 * @text Battle Status Window
 * @parent Windows
 *
 * @param HideDuring:eval
 * @text Hide During?
 * @parent Window_BattleStatus
 * @type boolean
 * @on Hide
 * @off Normal
 * @desc Hide the battle status window during tutorials?
 * Does NOT affect VisuMZ_3_SideviewBattleUI!
 * @default true
 * 
 * @param Window_TutorialPages
 * @text Pages Window
 * @parent Windows
 *
 * @param PageWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPages
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PageWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPages
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Graphics.boxHeight - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialDescription
 * @text Description Window
 * @parent Windows
 *
 * @param DescWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialDescription
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
 * @param DescWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialDescription
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Graphics.boxHeight - wh - this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialPicture
 * @text Picture Window
 * @parent Windows
 *
 * @param PictureWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPicture
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PictureWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPicture
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = descWindow.width;\nconst wh = (Graphics.boxHeight - this.buttonAreaHeight()) - descWindow.height - this.calcWindowHeight(1, true);\nconst wx = descWindow.x;\nconst wy = this.buttonAreaHeight();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialTitle
 * @text Title Window
 * @parent Windows
 *
 * @param TitleWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialTitle
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
 * @param TitleWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialTitle
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = Math.max(descWindow.width - 300, 480);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = descWindow.y - Math.floor(wh / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialButtonAssist
 * @text Button Assist Window
 * @parent Windows
 *
 * @param ButtonAssistWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialButtonAssist
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_0_CoreEngine!
 * @default 0
 *
 * @param ButtonAssistWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialButtonAssist
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Requires VisuMZ_0_CoreEngine!
 * @default "const wx = Math.floor((Sprite_Button.prototype.blockWidth() + 6) * 2);\nconst wy = 0;\nconst ww = Graphics.boxWidth - wx * 2;\nconst wh = this.buttonAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
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
 * @param AddTutorialsOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Tutorials' option to the Options menu?
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
 * @default Tutorials
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
 * @default Book1
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

function _0x2c0c(_0x469e0c,_0x2b7655){const _0x385f5b=_0x385f();return _0x2c0c=function(_0x2c0cd3,_0x5b8b11){_0x2c0cd3=_0x2c0cd3-0x125;let _0x21605b=_0x385f5b[_0x2c0cd3];return _0x21605b;},_0x2c0c(_0x469e0c,_0x2b7655);}const _0x3b2e5e=_0x2c0c;(function(_0xcd7e1a,_0x4d0891){const _0x37f0d2=_0x2c0c,_0x11eeab=_0xcd7e1a();while(!![]){try{const _0x5cd33b=parseInt(_0x37f0d2(0x1dd))/0x1+-parseInt(_0x37f0d2(0x16b))/0x2*(-parseInt(_0x37f0d2(0x144))/0x3)+parseInt(_0x37f0d2(0x23b))/0x4+-parseInt(_0x37f0d2(0x1c1))/0x5*(-parseInt(_0x37f0d2(0x17a))/0x6)+parseInt(_0x37f0d2(0x153))/0x7*(parseInt(_0x37f0d2(0x19b))/0x8)+parseInt(_0x37f0d2(0x20f))/0x9*(-parseInt(_0x37f0d2(0x291))/0xa)+-parseInt(_0x37f0d2(0x1e3))/0xb;if(_0x5cd33b===_0x4d0891)break;else _0x11eeab['push'](_0x11eeab['shift']());}catch(_0x2967ee){_0x11eeab['push'](_0x11eeab['shift']());}}}(_0x385f,0x5fd1d));var label='TutorialPanelSys',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x3b2e5e(0x27d)](function(_0x4eb31b){const _0x99d3fa=_0x3b2e5e;return _0x4eb31b[_0x99d3fa(0x17c)]&&_0x4eb31b[_0x99d3fa(0x219)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3b2e5e(0x1ba)]=VisuMZ[label][_0x3b2e5e(0x1ba)]||{},VisuMZ[_0x3b2e5e(0x26b)]=function(_0x5b3aaf,_0x1275fd){const _0x2d93ea=_0x3b2e5e;for(const _0x193eb7 in _0x1275fd){if(_0x193eb7[_0x2d93ea(0x195)](/(.*):(.*)/i)){const _0x1b4189=String(RegExp['$1']),_0x55aa2b=String(RegExp['$2'])[_0x2d93ea(0x228)]()[_0x2d93ea(0x1d7)]();let _0x4c68f7,_0x4e9add,_0x5e5be2;switch(_0x55aa2b){case _0x2d93ea(0x1f1):_0x4c68f7=_0x1275fd[_0x193eb7]!==''?Number(_0x1275fd[_0x193eb7]):0x0;break;case _0x2d93ea(0x1fd):_0x4e9add=_0x1275fd[_0x193eb7]!==''?JSON[_0x2d93ea(0x1e1)](_0x1275fd[_0x193eb7]):[],_0x4c68f7=_0x4e9add[_0x2d93ea(0x1f7)](_0x28681c=>Number(_0x28681c));break;case _0x2d93ea(0x26e):_0x4c68f7=_0x1275fd[_0x193eb7]!==''?eval(_0x1275fd[_0x193eb7]):null;break;case _0x2d93ea(0x16e):_0x4e9add=_0x1275fd[_0x193eb7]!==''?JSON[_0x2d93ea(0x1e1)](_0x1275fd[_0x193eb7]):[],_0x4c68f7=_0x4e9add[_0x2d93ea(0x1f7)](_0x413829=>eval(_0x413829));break;case _0x2d93ea(0x275):_0x4c68f7=_0x1275fd[_0x193eb7]!==''?JSON[_0x2d93ea(0x1e1)](_0x1275fd[_0x193eb7]):'';break;case _0x2d93ea(0x27e):_0x4e9add=_0x1275fd[_0x193eb7]!==''?JSON[_0x2d93ea(0x1e1)](_0x1275fd[_0x193eb7]):[],_0x4c68f7=_0x4e9add[_0x2d93ea(0x1f7)](_0x104787=>JSON[_0x2d93ea(0x1e1)](_0x104787));break;case _0x2d93ea(0x17e):_0x4c68f7=_0x1275fd[_0x193eb7]!==''?new Function(JSON[_0x2d93ea(0x1e1)](_0x1275fd[_0x193eb7])):new Function('return\x200');break;case _0x2d93ea(0x1f2):_0x4e9add=_0x1275fd[_0x193eb7]!==''?JSON['parse'](_0x1275fd[_0x193eb7]):[],_0x4c68f7=_0x4e9add[_0x2d93ea(0x1f7)](_0x11f828=>new Function(JSON[_0x2d93ea(0x1e1)](_0x11f828)));break;case _0x2d93ea(0x210):_0x4c68f7=_0x1275fd[_0x193eb7]!==''?String(_0x1275fd[_0x193eb7]):'';break;case _0x2d93ea(0x259):_0x4e9add=_0x1275fd[_0x193eb7]!==''?JSON['parse'](_0x1275fd[_0x193eb7]):[],_0x4c68f7=_0x4e9add[_0x2d93ea(0x1f7)](_0x2b5313=>String(_0x2b5313));break;case'STRUCT':_0x5e5be2=_0x1275fd[_0x193eb7]!==''?JSON[_0x2d93ea(0x1e1)](_0x1275fd[_0x193eb7]):{},_0x4c68f7=VisuMZ[_0x2d93ea(0x26b)]({},_0x5e5be2);break;case _0x2d93ea(0x1e0):_0x4e9add=_0x1275fd[_0x193eb7]!==''?JSON[_0x2d93ea(0x1e1)](_0x1275fd[_0x193eb7]):[],_0x4c68f7=_0x4e9add[_0x2d93ea(0x1f7)](_0xb29316=>VisuMZ['ConvertParams']({},JSON[_0x2d93ea(0x1e1)](_0xb29316)));break;default:continue;}_0x5b3aaf[_0x1b4189]=_0x4c68f7;}}return _0x5b3aaf;},(_0x26b3a4=>{const _0x57a05a=_0x3b2e5e,_0x471ea5=_0x26b3a4[_0x57a05a(0x188)];for(const _0x4aae2b of dependencies){if(!Imported[_0x4aae2b]){alert(_0x57a05a(0x1fc)[_0x57a05a(0x185)](_0x471ea5,_0x4aae2b)),SceneManager[_0x57a05a(0x156)]();break;}}const _0x5d32f4=_0x26b3a4[_0x57a05a(0x219)];if(_0x5d32f4[_0x57a05a(0x195)](/\[Version[ ](.*?)\]/i)){const _0x5bafd4=Number(RegExp['$1']);_0x5bafd4!==VisuMZ[label][_0x57a05a(0x26f)]&&(alert(_0x57a05a(0x274)['format'](_0x471ea5,_0x5bafd4)),SceneManager[_0x57a05a(0x156)]());}if(_0x5d32f4[_0x57a05a(0x195)](/\[Tier[ ](\d+)\]/i)){const _0x5f5b51=Number(RegExp['$1']);_0x5f5b51<tier?(alert(_0x57a05a(0x1fb)[_0x57a05a(0x185)](_0x471ea5,_0x5f5b51,tier)),SceneManager['exit']()):tier=Math[_0x57a05a(0x142)](_0x5f5b51,tier);}VisuMZ[_0x57a05a(0x26b)](VisuMZ[label][_0x57a05a(0x1ba)],_0x26b3a4[_0x57a05a(0x16a)]);})(pluginData),PluginManager[_0x3b2e5e(0x254)](pluginData[_0x3b2e5e(0x188)],_0x3b2e5e(0x1b5),_0x2165f8=>{const _0x725522=_0x3b2e5e;VisuMZ[_0x725522(0x26b)](_0x2165f8,_0x2165f8);const _0x116ee3=_0x2165f8['Key'],_0x21be2c=_0x2165f8[_0x725522(0x18d)],_0x3d8c54=_0x2165f8[_0x725522(0x1e5)],_0x125b56=_0x2165f8[_0x725522(0x201)];if(VisuMZ[_0x725522(0x183)][_0x725522(0x26d)](_0x116ee3)){if(!_0x21be2c&&_0x3d8c54&&$gameSystem[_0x725522(0x258)](_0x116ee3))return;(_0x21be2c||ConfigManager[_0x725522(0x261)])&&$gameTemp['openTutorial'](_0x116ee3),_0x125b56&&$gameSystem[_0x725522(0x173)](_0x116ee3);}}),PluginManager[_0x3b2e5e(0x254)](pluginData[_0x3b2e5e(0x188)],'TutorialRegisterKeys',_0x2d242b=>{const _0x2782f6=_0x3b2e5e;VisuMZ[_0x2782f6(0x26b)](_0x2d242b,_0x2d242b);const _0x3ccbe0=_0x2d242b['KeyIDs'];for(const _0x3285df of _0x3ccbe0){$gameSystem['registerTutorialKey'](_0x3285df);}}),PluginManager[_0x3b2e5e(0x254)](pluginData['name'],_0x3b2e5e(0x280),_0x40cb7d=>{const _0x49e46c=_0x3b2e5e;if(!$gameTemp[_0x49e46c(0x1e7)]())return;VisuMZ[_0x49e46c(0x26b)](_0x40cb7d,_0x40cb7d),$gameTemp[_0x49e46c(0x143)](_0x40cb7d['Reveal']);}),PluginManager[_0x3b2e5e(0x254)](pluginData[_0x3b2e5e(0x188)],_0x3b2e5e(0x14c),_0x98441e=>{const _0x55c6cd=_0x3b2e5e;VisuMZ[_0x55c6cd(0x26b)](_0x98441e,_0x98441e),$gameSystem[_0x55c6cd(0x293)](_0x98441e[_0x55c6cd(0x20e)]);}),PluginManager['registerCommand'](pluginData[_0x3b2e5e(0x188)],'SystemShowTutorialListMenu',_0x31b514=>{const _0x5e9f52=_0x3b2e5e;VisuMZ[_0x5e9f52(0x26b)](_0x31b514,_0x31b514),$gameSystem['setMainMenuTutorialListVisible'](_0x31b514[_0x5e9f52(0x21d)]);}),VisuMZ['TutorialPanelSys']['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype'][_0x3b2e5e(0x23c)],Scene_Boot['prototype'][_0x3b2e5e(0x23c)]=function(){const _0x22a7cb=_0x3b2e5e;VisuMZ[_0x22a7cb(0x183)][_0x22a7cb(0x198)]['call'](this),this[_0x22a7cb(0x1a7)]();},Scene_Boot['prototype'][_0x3b2e5e(0x1a7)]=function(){const _0x1e62d5=_0x3b2e5e;this[_0x1e62d5(0x28a)](),this[_0x1e62d5(0x252)]();},Scene_Boot[_0x3b2e5e(0x194)][_0x3b2e5e(0x28a)]=function(){const _0x2ab6bd=_0x3b2e5e;VisuMZ[_0x2ab6bd(0x183)]['CategoryOrder']=[_0x2ab6bd(0x1bd)],VisuMZ[_0x2ab6bd(0x183)]['CategoryData']={},VisuMZ[_0x2ab6bd(0x183)][_0x2ab6bd(0x12b)]={},VisuMZ[_0x2ab6bd(0x183)][_0x2ab6bd(0x12b)][_0x2ab6bd(0x1bd)]=[];const _0x2f1d46=VisuMZ[_0x2ab6bd(0x183)][_0x2ab6bd(0x1ba)]['Categories'];for(const _0x94c833 of _0x2f1d46){const _0x429fd9=(_0x94c833[_0x2ab6bd(0x1d4)]||'')[_0x2ab6bd(0x20c)]()['trim']();if(_0x429fd9==='')continue;if(_0x429fd9==='(needs\x20key)')continue;VisuMZ[_0x2ab6bd(0x183)][_0x2ab6bd(0x24e)][_0x2ab6bd(0x202)](_0x429fd9),VisuMZ['TutorialPanelSys']['CategoryData'][_0x429fd9]=_0x94c833,VisuMZ['TutorialPanelSys'][_0x2ab6bd(0x12b)][_0x429fd9]=[];}},Scene_Boot['prototype'][_0x3b2e5e(0x252)]=function(){const _0x3b8444=_0x3b2e5e;VisuMZ[_0x3b8444(0x183)][_0x3b8444(0x24d)]={},VisuMZ['TutorialPanelSys'][_0x3b8444(0x19e)]=[];const _0x2d20a8=VisuMZ[_0x3b8444(0x183)][_0x3b8444(0x1ba)][_0x3b8444(0x24d)];for(const _0x4aea4f of _0x2d20a8){const _0x4cc5bb=(_0x4aea4f[_0x3b8444(0x1d4)]||'')[_0x3b8444(0x20c)]()[_0x3b8444(0x1d7)]();if(_0x4cc5bb==='')continue;if(_0x4cc5bb===_0x3b8444(0x21c))continue;VisuMZ[_0x3b8444(0x183)][_0x3b8444(0x24d)][_0x4cc5bb]=_0x4aea4f,VisuMZ[_0x3b8444(0x183)][_0x3b8444(0x19e)][_0x3b8444(0x202)](_0x4cc5bb);const _0x24edcb=(_0x4aea4f[_0x3b8444(0x162)]||'')['toLowerCase']()['trim']();VisuMZ[_0x3b8444(0x183)][_0x3b8444(0x12b)][_0x24edcb]?VisuMZ[_0x3b8444(0x183)][_0x3b8444(0x12b)][_0x24edcb][_0x3b8444(0x202)](_0x4cc5bb):VisuMZ[_0x3b8444(0x183)][_0x3b8444(0x12b)][_0x3b8444(0x1bd)][_0x3b8444(0x202)](_0x4cc5bb);}},VisuMZ['TutorialPanelSys']['isValidTutorial']=function(_0x3aeb60){const _0x2faed1=_0x3b2e5e;return _0x3aeb60=_0x3aeb60['toLowerCase']()[_0x2faed1(0x1d7)](),VisuMZ[_0x2faed1(0x183)][_0x2faed1(0x19e)][_0x2faed1(0x20a)](_0x3aeb60);},ConfigManager['showTutorials']=!![],VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x22d)]=ConfigManager[_0x3b2e5e(0x174)],ConfigManager[_0x3b2e5e(0x174)]=function(){const _0x3cf897=_0x3b2e5e,_0x4008b6=VisuMZ[_0x3cf897(0x183)]['ConfigManager_makeData'][_0x3cf897(0x1a9)](this);return _0x4008b6['showTutorials']=this[_0x3cf897(0x261)],_0x4008b6;},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x13d)]=ConfigManager['applyData'],ConfigManager[_0x3b2e5e(0x1e9)]=function(_0x44f604){const _0x188334=_0x3b2e5e;VisuMZ[_0x188334(0x183)]['ConfigManager_applyData'][_0x188334(0x1a9)](this,_0x44f604),this[_0x188334(0x1ef)](_0x44f604,_0x188334(0x261),!![]),_0x188334(0x261)in _0x44f604?this[_0x188334(0x261)]=_0x44f604[_0x188334(0x261)]:this['showTutorials']=!![];},SoundManager[_0x3b2e5e(0x19c)]=function(){const _0x169ded=_0x3b2e5e,_0x51ade6=VisuMZ[_0x169ded(0x183)][_0x169ded(0x1ba)][_0x169ded(0x1ec)],_0x17b3a4={'name':_0x51ade6[_0x169ded(0x188)],'volume':_0x51ade6[_0x169ded(0x1b8)],'pitch':_0x51ade6['pitch'],'pan':_0x51ade6['pan']};AudioManager[_0x169ded(0x1b7)](_0x17b3a4);},TextManager[_0x3b2e5e(0x16d)]={'changePage':VisuMZ['TutorialPanelSys'][_0x3b2e5e(0x1ba)][_0x3b2e5e(0x245)]['VocabChangePage'],'nextPage':VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1ba)]['SceneTutorialData'][_0x3b2e5e(0x15e)],'finish':VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1ba)][_0x3b2e5e(0x245)][_0x3b2e5e(0x17b)],'view':VisuMZ['TutorialPanelSys'][_0x3b2e5e(0x1ba)][_0x3b2e5e(0x21a)]['VocabView'],'expand':VisuMZ[_0x3b2e5e(0x183)]['Settings'][_0x3b2e5e(0x21a)][_0x3b2e5e(0x218)],'collapse':VisuMZ[_0x3b2e5e(0x183)]['Settings']['SceneTutorialList'][_0x3b2e5e(0x1a0)],'activePage':VisuMZ['TutorialPanelSys']['Settings'][_0x3b2e5e(0x245)][_0x3b2e5e(0x227)],'inactivePage':VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1ba)][_0x3b2e5e(0x245)][_0x3b2e5e(0x1d3)],'optionsCmd':VisuMZ[_0x3b2e5e(0x183)]['Settings']['Options']['Name'],'menuCmd':VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1ba)][_0x3b2e5e(0x21a)][_0x3b2e5e(0x17f)],'openCategoriesFmt':VisuMZ['TutorialPanelSys']['Settings'][_0x3b2e5e(0x21a)][_0x3b2e5e(0x272)],'closedCategoriesFmt':VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1ba)]['SceneTutorialList'][_0x3b2e5e(0x28c)],'unlisted':VisuMZ[_0x3b2e5e(0x183)]['Settings'][_0x3b2e5e(0x21a)][_0x3b2e5e(0x1ac)]},SceneManager[_0x3b2e5e(0x163)]=function(){const _0x2bdbb3=_0x3b2e5e;return this['_scene']&&this['_scene'][_0x2bdbb3(0x1d0)]===Scene_Battle;},SceneManager[_0x3b2e5e(0x247)]=function(){const _0x338ad9=_0x3b2e5e;return this['_scene']&&this[_0x338ad9(0x1ad)][_0x338ad9(0x1d0)]===Scene_Map;},Game_Temp[_0x3b2e5e(0x194)][_0x3b2e5e(0x217)]=function(_0x3b7de7){const _0x1080ff=_0x3b2e5e;if(!VisuMZ[_0x1080ff(0x183)][_0x1080ff(0x26d)](_0x3b7de7))return;this[_0x1080ff(0x177)]=_0x3b7de7;if(SceneManager[_0x1080ff(0x163)]()){const _0x1220bc=SceneManager[_0x1080ff(0x1ad)];_0x1220bc[_0x1080ff(0x217)](_0x3b7de7);}else{SceneManager[_0x1080ff(0x202)](Scene_TutorialData);const _0x28f691=this[_0x1080ff(0x12f)]();_0x28f691&&_0x28f691[_0x1080ff(0x1e4)](0xa);}},Game_Temp[_0x3b2e5e(0x194)][_0x3b2e5e(0x1c9)]=function(_0x2f5e22){this['_lastPluginCommandInterpreter']=_0x2f5e22;},Game_Temp['prototype'][_0x3b2e5e(0x12f)]=function(){return this['_lastPluginCommandInterpreter'];},VisuMZ['TutorialPanelSys'][_0x3b2e5e(0x23a)]=Game_Interpreter[_0x3b2e5e(0x194)][_0x3b2e5e(0x264)],Game_Interpreter[_0x3b2e5e(0x194)][_0x3b2e5e(0x264)]=function(_0x3c6309){const _0x2a2899=_0x3b2e5e;return $gameTemp[_0x2a2899(0x1c9)](this),VisuMZ['TutorialPanelSys']['Game_Interpreter_PluginCommand'][_0x2a2899(0x1a9)](this,_0x3c6309);},Game_Temp[_0x3b2e5e(0x194)][_0x3b2e5e(0x129)]=function(){const _0x329f40=_0x3b2e5e;return this[_0x329f40(0x1e7)]()&&this[_0x329f40(0x215)];},Game_Temp['prototype'][_0x3b2e5e(0x143)]=function(_0x432342){const _0x3e5047=_0x3b2e5e;this[_0x3e5047(0x215)]=_0x432342;},VisuMZ['TutorialPanelSys'][_0x3b2e5e(0x24c)]=Game_System[_0x3b2e5e(0x194)]['initialize'],Game_System[_0x3b2e5e(0x194)][_0x3b2e5e(0x190)]=function(){const _0x13e1ba=_0x3b2e5e;VisuMZ[_0x13e1ba(0x183)][_0x13e1ba(0x24c)]['call'](this),this[_0x13e1ba(0x18e)](),this[_0x13e1ba(0x290)]();},Game_System[_0x3b2e5e(0x194)][_0x3b2e5e(0x18e)]=function(){const _0x5d713c=_0x3b2e5e;this[_0x5d713c(0x207)]={'shown':VisuMZ[_0x5d713c(0x183)]['Settings'][_0x5d713c(0x21a)][_0x5d713c(0x152)],'enabled':VisuMZ[_0x5d713c(0x183)][_0x5d713c(0x1ba)][_0x5d713c(0x21a)][_0x5d713c(0x22e)]};},Game_System[_0x3b2e5e(0x194)][_0x3b2e5e(0x169)]=function(){const _0x243a6c=_0x3b2e5e;if(this[_0x243a6c(0x207)]===undefined)this[_0x243a6c(0x18e)]();return this[_0x243a6c(0x207)][_0x243a6c(0x191)];},Game_System[_0x3b2e5e(0x194)][_0x3b2e5e(0x13a)]=function(_0x131dd7){const _0x23a0d4=_0x3b2e5e;if(this[_0x23a0d4(0x207)]===undefined)this[_0x23a0d4(0x18e)]();this[_0x23a0d4(0x207)][_0x23a0d4(0x191)]=_0x131dd7;},Game_System[_0x3b2e5e(0x194)][_0x3b2e5e(0x256)]=function(){const _0x32097a=_0x3b2e5e;if(this['_TutorialPanelSys_MainMenu']===undefined)this[_0x32097a(0x18e)]();if(!this[_0x32097a(0x1b2)])return![];if(this[_0x32097a(0x1b2)][_0x32097a(0x1bb)]<=0x0)return![];return this['_TutorialPanelSys_MainMenu'][_0x32097a(0x1df)];},Game_System['prototype']['setMainMenuTutorialLabelEnabled']=function(_0x4f3f68){const _0x2ff6f7=_0x3b2e5e;if(this[_0x2ff6f7(0x207)]===undefined)this[_0x2ff6f7(0x18e)]();this[_0x2ff6f7(0x207)][_0x2ff6f7(0x1df)]=_0x4f3f68;},Game_System[_0x3b2e5e(0x194)]['initTutorialPanelSysSettings']=function(){const _0x2f50a9=_0x3b2e5e;this['_visibleTutorialKeys']=this[_0x2f50a9(0x1b2)]||[];const _0x582cc8=VisuMZ['TutorialPanelSys'][_0x2f50a9(0x1ba)][_0x2f50a9(0x212)];for(const _0x31588d of _0x582cc8){this[_0x2f50a9(0x173)](_0x31588d);}},Game_System[_0x3b2e5e(0x194)][_0x3b2e5e(0x173)]=function(_0x24eab0){const _0x2dc252=_0x3b2e5e;if(this[_0x2dc252(0x1b2)]===undefined)this[_0x2dc252(0x290)]();_0x24eab0=_0x24eab0[_0x2dc252(0x20c)]()[_0x2dc252(0x1d7)](),VisuMZ['TutorialPanelSys'][_0x2dc252(0x26d)](_0x24eab0)&&!this['isTutorialKeyRegistered'](_0x24eab0)&&this[_0x2dc252(0x1b2)][_0x2dc252(0x202)](_0x24eab0);},Game_System[_0x3b2e5e(0x194)]['removeTutorialKey']=function(_0x1adb20){const _0x1fddc2=_0x3b2e5e;if(this[_0x1fddc2(0x1b2)]===undefined)this[_0x1fddc2(0x290)]();_0x1adb20=_0x1adb20['toLowerCase']()['trim'](),this['_visibleTutorialKeys']['remove'](_0x1adb20);},Game_System['prototype'][_0x3b2e5e(0x258)]=function(_0x233bfc){const _0x8598c=_0x3b2e5e;if(this[_0x8598c(0x1b2)]===undefined)this['initTutorialPanelSysSettings']();return _0x233bfc=_0x233bfc[_0x8598c(0x20c)]()[_0x8598c(0x1d7)](),this[_0x8598c(0x1b2)][_0x8598c(0x20a)](_0x233bfc);},Game_System[_0x3b2e5e(0x194)]['isTutorialCategoryPopulated']=function(_0x1744fb){const _0x1865c1=_0x3b2e5e;_0x1744fb=_0x1744fb[_0x1865c1(0x20c)]()[_0x1865c1(0x1d7)]();if(!VisuMZ[_0x1865c1(0x183)]['CategoryTutorials'][_0x1744fb])return![];const _0x41c967=VisuMZ[_0x1865c1(0x183)][_0x1865c1(0x12b)][_0x1744fb];for(const _0x4d650b of _0x41c967){if(this['isTutorialKeyRegistered'](_0x4d650b))return!![];}return![];},Game_System[_0x3b2e5e(0x194)][_0x3b2e5e(0x276)]=function(_0x242184){const _0x27faa1=_0x3b2e5e;_0x242184=_0x242184[_0x27faa1(0x20c)]()['trim']();if(!VisuMZ[_0x27faa1(0x183)][_0x27faa1(0x12b)][_0x242184])return 0x0;let _0x161d9c=0x0;const _0x22fef8=VisuMZ[_0x27faa1(0x183)]['CategoryTutorials'][_0x242184];for(const _0x5551cc of _0x22fef8){if($gameTemp[_0x27faa1(0x129)]()){_0x161d9c++;continue;}if(this[_0x27faa1(0x258)](_0x5551cc))_0x161d9c++;}return _0x161d9c;},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1f3)]=Game_Interpreter[_0x3b2e5e(0x194)][_0x3b2e5e(0x1f9)],Game_Interpreter['prototype']['updateWaitMode']=function(){const _0x38b3ea=_0x3b2e5e;if(this[_0x38b3ea(0x289)]===_0x38b3ea(0x16d))return!![];return VisuMZ[_0x38b3ea(0x183)][_0x38b3ea(0x1f3)]['call'](this);},VisuMZ['TutorialPanelSys'][_0x3b2e5e(0x1ea)]=Scene_Menu[_0x3b2e5e(0x194)][_0x3b2e5e(0x267)],Scene_Menu['prototype']['createCommandWindow']=function(){const _0x289e47=_0x3b2e5e;VisuMZ['TutorialPanelSys'][_0x289e47(0x1ea)]['call'](this);const _0x271edb=this[_0x289e47(0x13c)];_0x271edb[_0x289e47(0x136)](_0x289e47(0x1da),this[_0x289e47(0x281)][_0x289e47(0x192)](this));},Scene_Menu[_0x3b2e5e(0x194)][_0x3b2e5e(0x281)]=function(){const _0x2e29fe=_0x3b2e5e;SceneManager[_0x2e29fe(0x202)](Scene_TutorialList);},VisuMZ[_0x3b2e5e(0x183)]['Scene_Options_maxCommands']=Scene_Options['prototype'][_0x3b2e5e(0x1a3)],Scene_Options['prototype'][_0x3b2e5e(0x1a3)]=function(){const _0x58244e=_0x3b2e5e;let _0x215873=VisuMZ[_0x58244e(0x183)][_0x58244e(0x167)][_0x58244e(0x1a9)](this);const _0x53f494=VisuMZ['TutorialPanelSys'][_0x58244e(0x1ba)][_0x58244e(0x164)];if(_0x53f494[_0x58244e(0x14d)]&&_0x53f494[_0x58244e(0x234)])_0x215873++;return _0x215873;},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1c6)]=Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x190)],Scene_Battle[_0x3b2e5e(0x194)]['initialize']=function(){const _0x4d0eb4=_0x3b2e5e;VisuMZ[_0x4d0eb4(0x183)][_0x4d0eb4(0x1c6)][_0x4d0eb4(0x1a9)](this),this[_0x4d0eb4(0x1d2)]();},Scene_Battle[_0x3b2e5e(0x194)]['initTutorialMembers']=function(){const _0x41101f=_0x3b2e5e;this[_0x41101f(0x177)]='',this[_0x41101f(0x224)]=VisuMZ['TutorialPanelSys'][_0x41101f(0x24d)][this[_0x41101f(0x177)]],this[_0x41101f(0x24b)]=0x0;},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x125)]=function(){const _0x70fcdc=_0x3b2e5e;return this[_0x70fcdc(0x177)];},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x1c2)]=function(){const _0x5f5272=_0x3b2e5e;return this[_0x5f5272(0x224)]||{};},Scene_Battle['prototype'][_0x3b2e5e(0x253)]=function(){const _0x39601e=_0x3b2e5e;return this[_0x39601e(0x1c2)]()[_0x39601e(0x233)]||'';},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x26c)]=function(){const _0x3d1c40=_0x3b2e5e;return this['tutorialData']()[_0x3d1c40(0x28e)]||[];},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x180)]=function(){return this['_tutorialPageIndex'];},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x26a)]=function(){const _0x12252c=_0x3b2e5e;return this['tutorialPages']()[this[_0x12252c(0x180)]()];},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x16f)]=Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x229)],Scene_Battle[_0x3b2e5e(0x194)]['createAllWindows']=function(){const _0x3f1f16=_0x3b2e5e;VisuMZ[_0x3f1f16(0x183)][_0x3f1f16(0x16f)][_0x3f1f16(0x1a9)](this),this[_0x3f1f16(0x149)]();},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x149)]=function(){const _0x404313=_0x3b2e5e;this[_0x404313(0x199)](),this['createTutorialPageWindow'](),this[_0x404313(0x251)](),this[_0x404313(0x19d)](),this[_0x404313(0x23e)]();},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x199)]=function(){const _0x342152=_0x3b2e5e;if(!Imported[_0x342152(0x165)])return;if(!VisuMZ['CoreEngine'][_0x342152(0x1ba)][_0x342152(0x1ed)][_0x342152(0x20e)])return;const _0x24fd0e=this['tutorialButtonAssistWindowSideRect'](),_0x37d023=new Window_ButtonAssist(_0x24fd0e);this[_0x342152(0x1e2)]=_0x37d023,this[_0x342152(0x158)](this[_0x342152(0x1e2)]),_0x37d023['hide'](),_0x37d023[_0x342152(0x1fa)](VisuMZ['TutorialPanelSys'][_0x342152(0x1ba)][_0x342152(0x132)][_0x342152(0x147)]??0x0);},Scene_Battle['prototype']['tutorialButtonAssistWindowSideRect']=function(){const _0x2dbb4e=_0x3b2e5e;if(VisuMZ['TutorialPanelSys'][_0x2dbb4e(0x1ba)][_0x2dbb4e(0x132)]['ButtonAssistWindow_RectJS'])return VisuMZ['TutorialPanelSys'][_0x2dbb4e(0x1ba)][_0x2dbb4e(0x132)]['ButtonAssistWindow_RectJS'][_0x2dbb4e(0x1a9)](this);const _0x37d30e=Math[_0x2dbb4e(0x182)]((Sprite_Button[_0x2dbb4e(0x194)][_0x2dbb4e(0x170)]()+0x6)*0x2),_0x3540d0=0x0,_0x4c6b72=Graphics[_0x2dbb4e(0x189)]-_0x37d30e*0x2,_0x23c4f9=this[_0x2dbb4e(0x138)]();return new Rectangle(_0x37d30e,_0x3540d0,_0x4c6b72,_0x23c4f9);},Scene_Battle['prototype'][_0x3b2e5e(0x240)]=function(){return'top';},Scene_Battle[_0x3b2e5e(0x194)]['createTutorialPageWindow']=function(){const _0x599cfd=_0x3b2e5e,_0x48c474=this[_0x599cfd(0x148)](),_0xa25ae7=new Window_TutorialPages(_0x48c474);this[_0x599cfd(0x158)](_0xa25ae7),this[_0x599cfd(0x21b)]=_0xa25ae7,_0xa25ae7[_0x599cfd(0x27c)](),_0xa25ae7[_0x599cfd(0x19f)](),_0xa25ae7[_0x599cfd(0x136)](_0x599cfd(0x268),this[_0x599cfd(0x28f)][_0x599cfd(0x192)](this)),_0xa25ae7[_0x599cfd(0x136)](_0x599cfd(0x22b),this['nextTutorialPage']['bind'](this)),_0xa25ae7[_0x599cfd(0x1fa)](VisuMZ['TutorialPanelSys']['Settings'][_0x599cfd(0x132)]['PageWindow_BgType']);},Scene_Battle[_0x3b2e5e(0x194)]['tutorialPageWindowRect']=function(){const _0x37fe5a=_0x3b2e5e;if(VisuMZ[_0x37fe5a(0x183)]['Settings']['SceneBattle'][_0x37fe5a(0x1be)])return VisuMZ[_0x37fe5a(0x183)][_0x37fe5a(0x1ba)][_0x37fe5a(0x132)]['PageWindow_RectJS'][_0x37fe5a(0x1a9)](this);const _0x3f4661=Math[_0x37fe5a(0x142)](0x2d0,Math[_0x37fe5a(0x182)](Graphics['boxWidth']*0.75)),_0x2b024d=this['calcWindowHeight'](0x1,!![]),_0x5291ec=Math['floor']((Graphics['boxWidth']-_0x3f4661)/0x2),_0x4d1f47=Graphics[_0x37fe5a(0x216)]-_0x2b024d;return new Rectangle(_0x5291ec,_0x4d1f47,_0x3f4661,_0x2b024d);},Scene_Battle['prototype']['createTutorialDescriptionWindow']=function(){const _0x30c686=_0x3b2e5e,_0x2534b1=this[_0x30c686(0x257)](),_0x7619c0=new Window_TutorialDescription(_0x2534b1);this[_0x30c686(0x158)](_0x7619c0),this[_0x30c686(0x161)]=_0x7619c0,_0x7619c0[_0x30c686(0x27c)](),_0x7619c0['setBackgroundType'](VisuMZ[_0x30c686(0x183)][_0x30c686(0x1ba)][_0x30c686(0x132)][_0x30c686(0x255)]);},Scene_Battle['prototype'][_0x3b2e5e(0x257)]=function(){const _0x1f894e=_0x3b2e5e;if(VisuMZ['TutorialPanelSys']['Settings'][_0x1f894e(0x132)]['DescWindow_RectJS'])return VisuMZ['TutorialPanelSys'][_0x1f894e(0x1ba)]['SceneBattle'][_0x1f894e(0x1f4)][_0x1f894e(0x1a9)](this);const _0x36d27f=Math[_0x1f894e(0x142)](0x2d0,Math['floor'](Graphics[_0x1f894e(0x189)]*0.75)),_0xe6b551=this[_0x1f894e(0x1fe)](0x4,![]),_0x1b4439=Math[_0x1f894e(0x182)]((Graphics[_0x1f894e(0x189)]-_0x36d27f)/0x2),_0x199f0a=Graphics[_0x1f894e(0x216)]-_0xe6b551-this[_0x1f894e(0x1fe)](0x1,!![]);return new Rectangle(_0x1b4439,_0x199f0a,_0x36d27f,_0xe6b551);},Scene_Battle['prototype']['createTutorialPictureWindow']=function(){const _0x3a073e=_0x3b2e5e,_0x3b5671=this[_0x3a073e(0x1d8)](),_0x4e363a=new Window_TutorialPicture(_0x3b5671);this[_0x3a073e(0x158)](_0x4e363a),this['_tutorialPictureWindow']=_0x4e363a,_0x4e363a[_0x3a073e(0x27c)](),_0x4e363a['setBackgroundType'](VisuMZ[_0x3a073e(0x183)][_0x3a073e(0x1ba)][_0x3a073e(0x132)][_0x3a073e(0x277)]),this[_0x3a073e(0x158)](this[_0x3a073e(0x161)]);},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x1d8)]=function(){const _0x4b2c07=_0x3b2e5e;if(VisuMZ[_0x4b2c07(0x183)][_0x4b2c07(0x1ba)][_0x4b2c07(0x132)]['PictureWindow_RectJS'])return VisuMZ[_0x4b2c07(0x183)][_0x4b2c07(0x1ba)][_0x4b2c07(0x132)]['PictureWindow_RectJS'][_0x4b2c07(0x1a9)](this,this['_tutorialDescriptionWindow']);const _0x40344a=this[_0x4b2c07(0x161)],_0x7604d4=_0x40344a[_0x4b2c07(0x260)],_0x2b22ae=Graphics['boxHeight']-this[_0x4b2c07(0x138)]()-_0x40344a['height']-this['calcWindowHeight'](0x1,!![]),_0x457924=_0x40344a['x'],_0x509f04=this['buttonAreaHeight']();return new Rectangle(_0x457924,_0x509f04,_0x7604d4,_0x2b22ae);},Scene_Battle['prototype']['createTutorialTitleWindow']=function(){const _0x3744d3=_0x3b2e5e,_0x3c1671=this[_0x3744d3(0x1d9)](),_0x38c66f=new Window_TutorialTitle(_0x3c1671);this[_0x3744d3(0x158)](_0x38c66f),this['_tutorialTitleWindow']=_0x38c66f,_0x38c66f[_0x3744d3(0x27c)](),_0x38c66f[_0x3744d3(0x1fa)](VisuMZ[_0x3744d3(0x183)]['Settings'][_0x3744d3(0x132)][_0x3744d3(0x139)]);},Scene_Battle[_0x3b2e5e(0x194)]['tutorialTitleWindowRect']=function(){const _0x342e72=_0x3b2e5e;if(VisuMZ[_0x342e72(0x183)]['Settings'][_0x342e72(0x132)][_0x342e72(0x24f)])return VisuMZ[_0x342e72(0x183)][_0x342e72(0x1ba)][_0x342e72(0x132)][_0x342e72(0x24f)][_0x342e72(0x1a9)](this,this[_0x342e72(0x161)]);const _0x5ce04f=this[_0x342e72(0x161)],_0x54499a=Math[_0x342e72(0x142)](_0x5ce04f[_0x342e72(0x260)]-0x12c,0x1e0),_0x42a54e=this[_0x342e72(0x1fe)](0x1,![]),_0x238b26=Math[_0x342e72(0x182)]((Graphics['boxWidth']-_0x54499a)/0x2),_0x5c91c6=_0x5ce04f['y']-Math[_0x342e72(0x182)](_0x42a54e/0x2);return new Rectangle(_0x238b26,_0x5c91c6,_0x54499a,_0x42a54e);},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x135)]=function(){const _0x1e67a2=_0x3b2e5e;let _0x522f1b=this['_tutorialPageWindow'][_0x1e67a2(0x1a6)]()+0x1;_0x522f1b>=this[_0x1e67a2(0x26c)]()['length']?(SoundManager[_0x1e67a2(0x262)](),this[_0x1e67a2(0x28f)]()):(this[_0x1e67a2(0x21b)]['activate'](),this[_0x1e67a2(0x21b)][_0x1e67a2(0x1ee)](_0x522f1b));},Scene_Battle[_0x3b2e5e(0x194)]['openTutorial']=function(_0x44d9ba){const _0x267261=_0x3b2e5e;if(!VisuMZ[_0x267261(0x183)][_0x267261(0x26d)](_0x44d9ba))return;this[_0x267261(0x177)]=_0x44d9ba[_0x267261(0x20c)]()['trim'](),this[_0x267261(0x224)]=VisuMZ[_0x267261(0x183)]['Tutorials'][this[_0x267261(0x177)]],this['_tutorialPageIndex']=0x0,this[_0x267261(0x21b)]&&(this[_0x267261(0x21b)][_0x267261(0x13f)](),this[_0x267261(0x21b)][_0x267261(0x200)](),this[_0x267261(0x21b)][_0x267261(0x270)](),this[_0x267261(0x21b)][_0x267261(0x203)]()),this[_0x267261(0x161)]&&(this[_0x267261(0x161)][_0x267261(0x13f)](),this[_0x267261(0x161)][_0x267261(0x1b1)](!![]),this[_0x267261(0x161)][_0x267261(0x203)]()),this[_0x267261(0x134)]&&(this[_0x267261(0x134)][_0x267261(0x13f)](),this[_0x267261(0x134)]['updatePage'](!![]),this[_0x267261(0x134)][_0x267261(0x203)]()),this['_tutorialTitleWindow']&&(this[_0x267261(0x263)][_0x267261(0x13f)](),this[_0x267261(0x263)][_0x267261(0x222)](this[_0x267261(0x253)]())),this[_0x267261(0x1e2)]&&this[_0x267261(0x1e2)][_0x267261(0x13f)](),$gameTroop[_0x267261(0x1e6)][_0x267261(0x284)]('tutorial');},Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x28f)]=function(){const _0xaf205e=_0x3b2e5e;this['_tutorialPageWindow']&&(this[_0xaf205e(0x21b)][_0xaf205e(0x27c)](),this[_0xaf205e(0x21b)][_0xaf205e(0x19f)]()),this[_0xaf205e(0x161)]&&this[_0xaf205e(0x161)][_0xaf205e(0x27c)](),this[_0xaf205e(0x134)]&&this[_0xaf205e(0x134)][_0xaf205e(0x27c)](),this[_0xaf205e(0x263)]&&this[_0xaf205e(0x263)]['hide'](),this[_0xaf205e(0x1e2)]&&this[_0xaf205e(0x1e2)]['hide'](),$gameTroop[_0xaf205e(0x1e6)][_0xaf205e(0x284)]('');},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1d6)]=Scene_Battle[_0x3b2e5e(0x194)]['updateStatusWindowVisibility'],Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x155)]=function(){const _0x1bad23=_0x3b2e5e;this[_0x1bad23(0x204)]()?this['_statusWindow']['close']():VisuMZ['TutorialPanelSys'][_0x1bad23(0x1d6)][_0x1bad23(0x1a9)](this);},Scene_Battle[_0x3b2e5e(0x194)]['isHideStatusWindowTutorial']=function(){const _0x312548=_0x3b2e5e;if(!VisuMZ[_0x312548(0x183)][_0x312548(0x1ba)]['SceneBattle']['HideDuring'])return![];return this['_tutorialPageWindow']&&this['_tutorialPageWindow'][_0x312548(0x197)];},VisuMZ['TutorialPanelSys'][_0x3b2e5e(0x225)]=Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x244)],Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x244)]=function(){const _0x5a6e2b=_0x3b2e5e;if(this[_0x5a6e2b(0x21b)]&&this[_0x5a6e2b(0x21b)][_0x5a6e2b(0x197)])return!![];return VisuMZ['TutorialPanelSys'][_0x5a6e2b(0x225)][_0x5a6e2b(0x1a9)](this);},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x141)]=Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x1f5)],Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x1f5)]=function(){const _0x1e9e37=_0x3b2e5e;return this[_0x1e9e37(0x1e2)]&&this[_0x1e9e37(0x1e2)][_0x1e9e37(0x231)]?this[_0x1e9e37(0x26c)]()[_0x1e9e37(0x1bb)]>0x0?TextManager[_0x1e9e37(0x175)](_0x1e9e37(0x206),_0x1e9e37(0x179)):Scene_MenuBase[_0x1e9e37(0x194)][_0x1e9e37(0x1f5)]['call'](this):VisuMZ[_0x1e9e37(0x183)][_0x1e9e37(0x141)][_0x1e9e37(0x1a9)](this);},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1eb)]=Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x157)],Scene_Battle['prototype'][_0x3b2e5e(0x157)]=function(){const _0xec27e4=_0x3b2e5e;return this[_0xec27e4(0x1e2)]&&this[_0xec27e4(0x1e2)][_0xec27e4(0x231)]?TextManager[_0xec27e4(0x16d)][_0xec27e4(0x14f)]:VisuMZ['TutorialPanelSys']['Scene_Battle_buttonAssistText1'][_0xec27e4(0x1a9)](this);},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x22c)]=Scene_Battle[_0x3b2e5e(0x194)]['buttonAssistText4'],Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x27b)]=function(){const _0x50b7de=_0x3b2e5e;return this['_tutorialButtonAssistWindow']&&this[_0x50b7de(0x1e2)]['visible']?this[_0x50b7de(0x24b)]===this[_0x50b7de(0x26c)]()[_0x50b7de(0x1bb)]-0x1?TextManager[_0x50b7de(0x16d)][_0x50b7de(0x176)]:TextManager['tutorial']['nextPage']:VisuMZ[_0x50b7de(0x183)]['Scene_Battle_buttonAssistText4'][_0x50b7de(0x1a9)](this);},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x28d)]=Scene_Battle[_0x3b2e5e(0x194)][_0x3b2e5e(0x25f)],Scene_Battle['prototype']['buttonAssistText5']=function(){const _0x3ea06b=_0x3b2e5e;return this[_0x3ea06b(0x1e2)]&&this[_0x3ea06b(0x1e2)]['visible']?TextManager[_0x3ea06b(0x16d)]['finish']:VisuMZ[_0x3ea06b(0x183)][_0x3ea06b(0x28d)][_0x3ea06b(0x1a9)](this);};function Scene_TutorialData(){this['initialize'](...arguments);}Scene_TutorialData['prototype']=Object[_0x3b2e5e(0x127)](Scene_MenuBase[_0x3b2e5e(0x194)]),Scene_TutorialData[_0x3b2e5e(0x194)]['constructor']=Scene_TutorialData,Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x190)]=function(){const _0x5e4f72=_0x3b2e5e;Scene_MenuBase[_0x5e4f72(0x194)][_0x5e4f72(0x190)]['call'](this),this[_0x5e4f72(0x1d2)]();},Scene_TutorialData[_0x3b2e5e(0x194)]['initTutorialMembers']=function(){const _0x16e99e=_0x3b2e5e;this[_0x16e99e(0x177)]=$gameTemp[_0x16e99e(0x177)][_0x16e99e(0x20c)]()[_0x16e99e(0x1d7)](),this[_0x16e99e(0x224)]=VisuMZ[_0x16e99e(0x183)][_0x16e99e(0x24d)][this['_tutorialKey']],this['_tutorialPageIndex']=0x0;},Scene_TutorialData['prototype'][_0x3b2e5e(0x125)]=function(){const _0x3d7180=_0x3b2e5e;return this[_0x3d7180(0x177)];},Scene_TutorialData['prototype'][_0x3b2e5e(0x1c2)]=function(){const _0x56b5f0=_0x3b2e5e;return this[_0x56b5f0(0x224)]||{};},Scene_TutorialData['prototype'][_0x3b2e5e(0x253)]=function(){const _0x10b0bb=_0x3b2e5e;return this[_0x10b0bb(0x1c2)]()[_0x10b0bb(0x233)]||'';},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x26c)]=function(){const _0x18fc09=_0x3b2e5e;return this[_0x18fc09(0x1c2)]()['Pages']||[];},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x180)]=function(){const _0x28d7c3=_0x3b2e5e;return this[_0x28d7c3(0x24b)];},Scene_TutorialData['prototype'][_0x3b2e5e(0x26a)]=function(){const _0xa13957=_0x3b2e5e;return this[_0xa13957(0x26c)]()[this[_0xa13957(0x180)]()];},Scene_TutorialData['prototype'][_0x3b2e5e(0x223)]=function(){return 0x0;},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x172)]=function(){const _0xa52d80=_0x3b2e5e;Scene_MenuBase[_0xa52d80(0x194)][_0xa52d80(0x172)][_0xa52d80(0x1a9)](this),this[_0xa52d80(0x265)](this[_0xa52d80(0x18b)]()),this[_0xa52d80(0x23f)]();},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x18b)]=function(){const _0x59b7b1=_0x3b2e5e;return VisuMZ[_0x59b7b1(0x183)][_0x59b7b1(0x1ba)][_0x59b7b1(0x245)][_0x59b7b1(0x1d1)];},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x23f)]=function(){const _0x146b7a=_0x3b2e5e,_0x5006b4=VisuMZ['TutorialPanelSys'][_0x146b7a(0x1ba)][_0x146b7a(0x245)];_0x5006b4&&(_0x5006b4[_0x146b7a(0x18a)]!==''||_0x5006b4['BgFilename2']!=='')&&(this[_0x146b7a(0x168)]=new Sprite(ImageManager[_0x146b7a(0x18f)](_0x5006b4[_0x146b7a(0x18a)])),this[_0x146b7a(0x1cc)]=new Sprite(ImageManager['loadTitle2'](_0x5006b4[_0x146b7a(0x239)])),this[_0x146b7a(0x273)](this[_0x146b7a(0x168)]),this['addChild'](this[_0x146b7a(0x1cc)]),this[_0x146b7a(0x168)][_0x146b7a(0x15d)][_0x146b7a(0x1d5)](this[_0x146b7a(0x232)][_0x146b7a(0x192)](this,this[_0x146b7a(0x168)])),this[_0x146b7a(0x1cc)][_0x146b7a(0x15d)]['addLoadListener'](this[_0x146b7a(0x232)][_0x146b7a(0x192)](this,this[_0x146b7a(0x1cc)])));},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x232)]=function(_0x2f833d){const _0x5862e0=_0x3b2e5e;this[_0x5862e0(0x242)](_0x2f833d),this[_0x5862e0(0x1f0)](_0x2f833d);},Scene_TutorialData['prototype']['buttonAssistKey1']=function(){const _0x4115eb=_0x3b2e5e;return this[_0x4115eb(0x26c)]()[_0x4115eb(0x1bb)]>0x0?TextManager[_0x4115eb(0x175)](_0x4115eb(0x206),'right'):Scene_MenuBase[_0x4115eb(0x194)][_0x4115eb(0x1f5)][_0x4115eb(0x1a9)](this);},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x157)]=function(){const _0x557002=_0x3b2e5e;return TextManager[_0x557002(0x16d)][_0x557002(0x14f)];},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x27b)]=function(){const _0x170351=_0x3b2e5e;return this[_0x170351(0x24b)]===this[_0x170351(0x26c)]()[_0x170351(0x1bb)]-0x1?TextManager['tutorial']['finish']:TextManager[_0x170351(0x16d)][_0x170351(0x20d)];},Scene_TutorialData[_0x3b2e5e(0x194)]['buttonAssistText5']=function(){const _0x375a99=_0x3b2e5e;return TextManager[_0x375a99(0x16d)][_0x375a99(0x176)];},Scene_TutorialData[_0x3b2e5e(0x194)]['create']=function(){const _0x4ab953=_0x3b2e5e;Scene_MenuBase['prototype'][_0x4ab953(0x127)]['call'](this),this[_0x4ab953(0x181)](),this[_0x4ab953(0x1a4)](),this[_0x4ab953(0x266)](),this[_0x4ab953(0x221)]();},Scene_TutorialData[_0x3b2e5e(0x194)]['createPageWindow']=function(){const _0xf015a6=_0x3b2e5e,_0x3f2f97=this[_0xf015a6(0x1b3)](),_0x34be66=new Window_TutorialPages(_0x3f2f97);this[_0xf015a6(0x158)](_0x34be66),this[_0xf015a6(0x243)]=_0x34be66,_0x34be66[_0xf015a6(0x136)](_0xf015a6(0x268),this['popScene'][_0xf015a6(0x192)](this)),_0x34be66[_0xf015a6(0x136)](_0xf015a6(0x22b),this[_0xf015a6(0x20d)]['bind'](this)),_0x34be66[_0xf015a6(0x1fa)](VisuMZ[_0xf015a6(0x183)][_0xf015a6(0x1ba)]['SceneTutorialData'][_0xf015a6(0x12e)]);},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x1b3)]=function(){const _0x546f83=_0x3b2e5e;if(VisuMZ[_0x546f83(0x183)][_0x546f83(0x1ba)][_0x546f83(0x245)][_0x546f83(0x1be)])return VisuMZ['TutorialPanelSys'][_0x546f83(0x1ba)][_0x546f83(0x245)][_0x546f83(0x1be)][_0x546f83(0x1a9)](this);const _0x4e37df=Math['max'](0x2d0,Math['floor'](Graphics[_0x546f83(0x189)]*0.75)),_0x516e1c=this[_0x546f83(0x1fe)](0x1,!![]),_0xd6c4da=Math[_0x546f83(0x182)]((Graphics[_0x546f83(0x189)]-_0x4e37df)/0x2),_0x4fe46f=this[_0x546f83(0x22a)]()-_0x516e1c;return new Rectangle(_0xd6c4da,_0x4fe46f,_0x4e37df,_0x516e1c);},Scene_TutorialData[_0x3b2e5e(0x194)]['createDescriptionWindow']=function(){const _0x3c2a6c=_0x3b2e5e,_0x164566=this[_0x3c2a6c(0x27f)](),_0x598196=new Window_TutorialDescription(_0x164566);this[_0x3c2a6c(0x158)](_0x598196),this['_descriptionWindow']=_0x598196,_0x598196['setBackgroundType'](VisuMZ[_0x3c2a6c(0x183)]['Settings'][_0x3c2a6c(0x245)][_0x3c2a6c(0x255)]);},Scene_TutorialData[_0x3b2e5e(0x194)]['descriptionWindowRect']=function(){const _0x1ab6b2=_0x3b2e5e;if(VisuMZ[_0x1ab6b2(0x183)]['Settings'][_0x1ab6b2(0x245)][_0x1ab6b2(0x1f4)])return VisuMZ[_0x1ab6b2(0x183)][_0x1ab6b2(0x1ba)][_0x1ab6b2(0x245)][_0x1ab6b2(0x1f4)][_0x1ab6b2(0x1a9)](this);const _0x4589e5=Math[_0x1ab6b2(0x142)](0x2d0,Math['floor'](Graphics[_0x1ab6b2(0x189)]*0.75)),_0x67b3f9=this[_0x1ab6b2(0x1fe)](0x4,![]),_0x243cde=Math[_0x1ab6b2(0x182)]((Graphics[_0x1ab6b2(0x189)]-_0x4589e5)/0x2),_0x101f90=this[_0x1ab6b2(0x22a)]()-_0x67b3f9-this[_0x1ab6b2(0x1fe)](0x1,!![]);return new Rectangle(_0x243cde,_0x101f90,_0x4589e5,_0x67b3f9);},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x266)]=function(){const _0x53f483=_0x3b2e5e,_0x305967=this['pictureWindowRect'](),_0x71d847=new Window_TutorialPicture(_0x305967);this[_0x53f483(0x158)](_0x71d847),this[_0x53f483(0x140)]=_0x71d847,_0x71d847[_0x53f483(0x1fa)](VisuMZ[_0x53f483(0x183)][_0x53f483(0x1ba)][_0x53f483(0x245)][_0x53f483(0x277)]),this[_0x53f483(0x158)](this[_0x53f483(0x294)]);},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x14a)]=function(){const _0x4d41bc=_0x3b2e5e;if(VisuMZ[_0x4d41bc(0x183)][_0x4d41bc(0x1ba)][_0x4d41bc(0x245)][_0x4d41bc(0x286)])return VisuMZ[_0x4d41bc(0x183)]['Settings'][_0x4d41bc(0x245)][_0x4d41bc(0x286)]['call'](this,this[_0x4d41bc(0x294)]);const _0x1d9fdf=this[_0x4d41bc(0x294)],_0x3e5fc0=_0x1d9fdf[_0x4d41bc(0x260)],_0x5ae44a=this[_0x4d41bc(0x1e8)]()-_0x1d9fdf[_0x4d41bc(0x1a5)]-this[_0x4d41bc(0x1fe)](0x1,!![]),_0x4aa151=_0x1d9fdf['x'],_0x56841d=this[_0x4d41bc(0x131)]();return new Rectangle(_0x4aa151,_0x56841d,_0x3e5fc0,_0x5ae44a);},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x221)]=function(){const _0x5d6b67=_0x3b2e5e,_0x10cb82=this['titleWindowRect'](),_0x38b254=new Window_TutorialTitle(_0x10cb82);this[_0x5d6b67(0x158)](_0x38b254),this[_0x5d6b67(0x193)]=_0x38b254,_0x38b254['setBackgroundType'](VisuMZ[_0x5d6b67(0x183)][_0x5d6b67(0x1ba)][_0x5d6b67(0x245)][_0x5d6b67(0x139)]),_0x38b254[_0x5d6b67(0x222)](this[_0x5d6b67(0x253)]());},Scene_TutorialData[_0x3b2e5e(0x194)][_0x3b2e5e(0x241)]=function(){const _0xe4884b=_0x3b2e5e;if(VisuMZ[_0xe4884b(0x183)]['Settings']['SceneTutorialData']['TitleWindow_RectJS'])return VisuMZ['TutorialPanelSys']['Settings'][_0xe4884b(0x245)][_0xe4884b(0x24f)][_0xe4884b(0x1a9)](this,this['_descriptionWindow']);const _0x3b2887=this[_0xe4884b(0x294)],_0x4c4140=Math[_0xe4884b(0x142)](_0x3b2887[_0xe4884b(0x260)]-0x12c,0x1e0),_0xec3fee=this[_0xe4884b(0x1fe)](0x1,![]),_0x16c57e=Math[_0xe4884b(0x182)]((Graphics['boxWidth']-_0x4c4140)/0x2),_0x2cddb0=_0x3b2887['y']-Math[_0xe4884b(0x182)](_0xec3fee/0x2);return new Rectangle(_0x16c57e,_0x2cddb0,_0x4c4140,_0xec3fee);},Scene_TutorialData[_0x3b2e5e(0x194)]['nextPage']=function(){const _0x2ded92=_0x3b2e5e;let _0x2ac702=this[_0x2ded92(0x243)]['index']()+0x1;_0x2ac702>=this[_0x2ded92(0x26c)]()[_0x2ded92(0x1bb)]?(SoundManager[_0x2ded92(0x262)](),this[_0x2ded92(0x159)]()):(this[_0x2ded92(0x243)][_0x2ded92(0x200)](),this[_0x2ded92(0x243)]['select'](_0x2ac702));};function Scene_TutorialList(){const _0x2a8677=_0x3b2e5e;this[_0x2a8677(0x190)](...arguments);}Scene_TutorialList[_0x3b2e5e(0x194)]=Object['create'](Scene_MenuBase[_0x3b2e5e(0x194)]),Scene_TutorialList['prototype'][_0x3b2e5e(0x1d0)]=Scene_TutorialList,Scene_TutorialList['prototype'][_0x3b2e5e(0x190)]=function(){const _0x2ff4fa=_0x3b2e5e;Scene_MenuBase['prototype'][_0x2ff4fa(0x190)][_0x2ff4fa(0x1a9)](this);},Scene_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x172)]=function(){const _0x27fec6=_0x3b2e5e;Scene_MenuBase[_0x27fec6(0x194)][_0x27fec6(0x172)][_0x27fec6(0x1a9)](this),this['setBackgroundOpacity'](this[_0x27fec6(0x18b)]()),this[_0x27fec6(0x23f)]();},Scene_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x18b)]=function(){const _0x23e934=_0x3b2e5e;return VisuMZ[_0x23e934(0x183)][_0x23e934(0x1ba)][_0x23e934(0x21a)][_0x23e934(0x1d1)];},Scene_TutorialList[_0x3b2e5e(0x194)]['createCustomBackgroundImages']=function(){const _0x27f2ed=_0x3b2e5e,_0x463e78=VisuMZ['TutorialPanelSys'][_0x27f2ed(0x1ba)][_0x27f2ed(0x21a)];_0x463e78&&(_0x463e78['BgFilename1']!==''||_0x463e78[_0x27f2ed(0x239)]!=='')&&(this[_0x27f2ed(0x168)]=new Sprite(ImageManager[_0x27f2ed(0x18f)](_0x463e78['BgFilename1'])),this[_0x27f2ed(0x1cc)]=new Sprite(ImageManager[_0x27f2ed(0x285)](_0x463e78[_0x27f2ed(0x239)])),this[_0x27f2ed(0x273)](this[_0x27f2ed(0x168)]),this[_0x27f2ed(0x273)](this[_0x27f2ed(0x1cc)]),this[_0x27f2ed(0x168)][_0x27f2ed(0x15d)][_0x27f2ed(0x1d5)](this[_0x27f2ed(0x232)]['bind'](this,this[_0x27f2ed(0x168)])),this[_0x27f2ed(0x1cc)]['bitmap'][_0x27f2ed(0x1d5)](this['adjustSprite'][_0x27f2ed(0x192)](this,this[_0x27f2ed(0x1cc)])));},Scene_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x232)]=function(_0x6dd83c){const _0x3afecd=_0x3b2e5e;this[_0x3afecd(0x242)](_0x6dd83c),this[_0x3afecd(0x1f0)](_0x6dd83c);},Scene_TutorialList['prototype'][_0x3b2e5e(0x27b)]=function(){const _0x8cceb=_0x3b2e5e;if(this['_listWindow']&&this[_0x8cceb(0x1bf)]['active']){const _0x563aae=this[_0x8cceb(0x1bf)][_0x8cceb(0x1ce)]();if(_0x563aae===_0x8cceb(0x15a))return this['_listWindow'][_0x8cceb(0x208)](this[_0x8cceb(0x1bf)][_0x8cceb(0x25e)]())?TextManager['tutorial'][_0x8cceb(0x205)]:TextManager[_0x8cceb(0x16d)]['expand'];else{if(_0x563aae===_0x8cceb(0x16d))return TextManager[_0x8cceb(0x16d)][_0x8cceb(0x15f)];}}return Scene_MenuBase[_0x8cceb(0x194)][_0x8cceb(0x27b)]['call'](this);},Scene_TutorialList['prototype'][_0x3b2e5e(0x127)]=function(){const _0x21fdab=_0x3b2e5e;Scene_MenuBase[_0x21fdab(0x194)][_0x21fdab(0x127)][_0x21fdab(0x1a9)](this),this[_0x21fdab(0x213)]();if(this[_0x21fdab(0x1af)])this[_0x21fdab(0x1af)]['update']();},Scene_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x213)]=function(){const _0x112e84=_0x3b2e5e,_0x5d6ea1=this[_0x112e84(0x154)](),_0x1a6685=new Window_TutorialList(_0x5d6ea1);this[_0x112e84(0x158)](_0x1a6685),this[_0x112e84(0x1bf)]=_0x1a6685,_0x1a6685['setHandler'](_0x112e84(0x268),this[_0x112e84(0x159)]['bind'](this)),_0x1a6685[_0x112e84(0x136)](_0x112e84(0x15a),this[_0x112e84(0x220)][_0x112e84(0x192)](this)),_0x1a6685['setHandler'](_0x112e84(0x16d),this[_0x112e84(0x230)][_0x112e84(0x192)](this)),_0x1a6685[_0x112e84(0x1fa)](VisuMZ[_0x112e84(0x183)][_0x112e84(0x1ba)][_0x112e84(0x21a)]['ListWindow_BgType']);},Scene_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x154)]=function(){const _0x53df86=_0x3b2e5e;if(VisuMZ[_0x53df86(0x183)][_0x53df86(0x1ba)][_0x53df86(0x21a)][_0x53df86(0x1b9)])return VisuMZ['TutorialPanelSys'][_0x53df86(0x1ba)][_0x53df86(0x21a)]['ListWindow_RectJS']['call'](this);const _0x2f9920=Math[_0x53df86(0x142)](0x2d0,Math[_0x53df86(0x182)](Graphics[_0x53df86(0x189)]*0.75)),_0xf11bba=Math[_0x53df86(0x142)](_0x2f9920-0x12c,0x1e0),_0x55bcb0=this['calcWindowHeight'](0xa,!![]),_0x1c3197=Math[_0x53df86(0x182)]((Graphics[_0x53df86(0x189)]-_0xf11bba)/0x2),_0x224c20=Math[_0x53df86(0x182)]((Graphics[_0x53df86(0x216)]-_0x55bcb0)/0x2);return new Rectangle(_0x1c3197,_0x224c20,_0xf11bba,_0x55bcb0);},Scene_TutorialList['prototype'][_0x3b2e5e(0x220)]=function(){const _0x2d9488=_0x3b2e5e;this[_0x2d9488(0x1bf)]['openCloseCurrentCategory'](),this['_listWindow'][_0x2d9488(0x200)]();},Scene_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x230)]=function(){const _0x4b720a=_0x3b2e5e,_0x64bfd5=this[_0x4b720a(0x1bf)][_0x4b720a(0x17d)]()||'';if(_0x64bfd5===''){this[_0x4b720a(0x1bf)][_0x4b720a(0x200)]();return;}$gameTemp[_0x4b720a(0x279)]=_0x64bfd5,$gameTemp[_0x4b720a(0x217)](_0x64bfd5);},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x237)]=Window_MenuCommand['prototype'][_0x3b2e5e(0x137)],Window_MenuCommand[_0x3b2e5e(0x194)][_0x3b2e5e(0x137)]=function(){const _0xb2a9c6=_0x3b2e5e;VisuMZ[_0xb2a9c6(0x183)]['Window_MenuCommand_addOriginalCommands'][_0xb2a9c6(0x1a9)](this),this['addTutorialListCommand']();},Window_MenuCommand[_0x3b2e5e(0x194)][_0x3b2e5e(0x128)]=function(){const _0x563d26=_0x3b2e5e;if(!this[_0x563d26(0x13b)]())return;if(!this[_0x563d26(0x1f6)]())return;const _0x3e9a18=TextManager[_0x563d26(0x16d)][_0x563d26(0x287)],_0x65753d=this[_0x563d26(0x1aa)]();this[_0x563d26(0x1db)](_0x3e9a18,_0x563d26(0x1da),_0x65753d);},Window_MenuCommand[_0x3b2e5e(0x194)][_0x3b2e5e(0x13b)]=function(){const _0xe6850c=_0x3b2e5e;return Imported[_0xe6850c(0x1de)]?![]:!![];},Window_MenuCommand[_0x3b2e5e(0x194)][_0x3b2e5e(0x1f6)]=function(){const _0xde7d93=_0x3b2e5e;if($gameTemp[_0xde7d93(0x129)]())return!![];return $gameSystem[_0xde7d93(0x169)]();},Window_MenuCommand[_0x3b2e5e(0x194)][_0x3b2e5e(0x1aa)]=function(){const _0x376b23=_0x3b2e5e;if($gameTemp[_0x376b23(0x129)]())return!![];return $gameSystem[_0x376b23(0x256)]();},VisuMZ[_0x3b2e5e(0x183)][_0x3b2e5e(0x1bc)]=Window_Options[_0x3b2e5e(0x194)]['addGeneralOptions'],Window_Options[_0x3b2e5e(0x194)][_0x3b2e5e(0x21f)]=function(){const _0x119954=_0x3b2e5e;VisuMZ[_0x119954(0x183)]['Window_Options_addGeneralOptions'][_0x119954(0x1a9)](this),this['addTutorialListCommands']();},Window_Options[_0x3b2e5e(0x194)][_0x3b2e5e(0x1b6)]=function(){const _0x3a194f=_0x3b2e5e;VisuMZ[_0x3a194f(0x183)]['Settings'][_0x3a194f(0x164)][_0x3a194f(0x14d)]&&this[_0x3a194f(0x14e)]();},Window_Options['prototype'][_0x3b2e5e(0x14e)]=function(){const _0x5d51ee=_0x3b2e5e,_0x56c9a1=TextManager[_0x5d51ee(0x16d)][_0x5d51ee(0x171)],_0x5675c7=_0x5d51ee(0x261);this[_0x5d51ee(0x1db)](_0x56c9a1,_0x5675c7);};function _0x385f(){const _0x2cee20=['ButtonAssist','select','readFlag','centerSprite','NUM','ARRAYFUNC','Game_Interpreter_updateWaitMode','DescWindow_RectJS','buttonAssistKey1','isTutorialListCommandVisible','map','drawItemBackground','updateWaitMode','setBackgroundType','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','ARRAYNUM','calcWindowHeight','itemPadding','activate','RegisterTutorial','push','refresh','isHideStatusWindowTutorial','collapse','left','_TutorialPanelSys_MainMenu','isCategoryOpen','itemRect','includes','_lastIndex','toLowerCase','nextPage','Enable','9243zFUyfT','STR','cursorLeft','DefaultUnlocked','createListWindow','update','_debugViewTutorialList','boxHeight','openTutorial','VocabExpand','description','SceneTutorialList','_tutorialPageWindow','(needs\x20key)','Show','includeCategory','addGeneralOptions','onListCategory','createTitleWindow','setText','helpAreaHeight','_tutorialData','Scene_Battle_isAnyInputWindowActive','setTopRow','VocabActivePage','toUpperCase','createAllWindows','mainAreaBottom','page','Scene_Battle_buttonAssistText4','ConfigManager_makeData','EnableMainMenu','Description','onListTutorial','visible','adjustSprite','Title','AdjustRect','_list','drawTextEx','Window_MenuCommand_addOriginalCommands','ext','BgFilename2','Game_Interpreter_PluginCommand','1471564kyGarq','onDatabaseLoaded','updateSmoothScroll','createTutorialTitleWindow','createCustomBackgroundImages','getButtonAssistLocation','titleWindowRect','scaleSprite','_pageWindow','isAnyInputWindowActive','SceneTutorialData','itemTextAlign','isSceneMap','makeCommandList','reselectReturnTutorialKey','refreshCursor','_tutorialPageIndex','Game_System_initialize','Tutorials','CategoryOrder','TitleWindow_RectJS','_scrollDuration','createTutorialDescriptionWindow','process_VisuMZ_TutorialData','tutorialTitle','registerCommand','DescWindow_BgType','isMainMenuTutorialListEnabled','tutorialDescriptionWindowRect','isTutorialKeyRegistered','ARRAYSTR','isWheelScrollEnabled','inactivePage','ceil','_text','currentCategory','buttonAssistText5','width','showTutorials','playCancel','_tutorialTitleWindow','command357','setBackgroundOpacity','createPictureWindow','createCommandWindow','cancel','colSpacing','currentTutorialPage','ConvertParams','tutorialPages','isValidTutorial','EVAL','version','clearCache','addTutorial','VocabOpenCategory','addChild','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','JSON','getTutorialCategoryPopulation','PictureWindow_BgType','_index','_returnTutorialKey','isUseModernControls','buttonAssistText4','hide','filter','ARRAYJSON','descriptionWindowRect','DebugFullTutorial','commandTutorialList','contents','closedCategoriesFmt','setWaitMode','loadTitle2','PictureWindow_RectJS','menuCmd','setFilename','_waitMode','process_VisuMZ_TutorialCategories','cursorPageup','VocabClosedCategory','Scene_Battle_buttonAssistText5','Pages','closeTutorial','initTutorialPanelSysSettings','3190VfIMOr','innerHeight','setMainMenuTutorialLabelEnabled','_descriptionWindow','tutorialKey','findIndex','create','addTutorialListCommand','canDebugViewTutorialList','onTouchSelect','CategoryTutorials','isTouchedInsideFrame','_pictureSprite','PageWindow_BgType','getLastPluginCommandInterpreter','drawItem','mainAreaTop','SceneBattle','itemLineRect','_tutorialPictureWindow','nextTutorialPage','setHandler','addOriginalCommands','buttonAreaHeight','TitleWindow_BgType','setMainMenuTutorialListVisible','addTutorialListCommandAutomatically','_commandWindow','ConfigManager_applyData','textSizeEx','show','_pictureWindow','Scene_Battle_buttonAssistKey1','max','setDebugViewTutorialList','3NgGJYy','_filename','center','ButtonAssistWindow_BgType','tutorialPageWindowRect','createTutorialWindows','pictureWindowRect','wheelY','SystemEnableTutorialListMenu','AddTutorialsOption','addTutorialPanelSysNewOptionCommand','changePage','_lastPage','CategoryData','ShowMainMenu','7vUntTp','listWindowRect','updateStatusWindowVisibility','exit','buttonAssistText1','addWindow','popScene','category','min','maxCols','bitmap','VocabNextPage','view','openCategoriesFmt','_tutorialDescriptionWindow','Category','isSceneBattle','Options','VisuMZ_0_CoreEngine','_maxColCache','Scene_Options_maxCommands','_backSprite1','isMainMenuTutorialListVisible','parameters','274826CKlFuP','_itemWidthCache','tutorial','ARRAYEVAL','Scene_Battle_createAllWindows','blockWidth','optionsCmd','createBackground','registerTutorialKey','makeData','getInputMultiButtonStrings','finish','_tutorialKey','smoothSelect','right','14226EqnOQA','VocabDoneTutorial','status','currentExt','FUNC','MainMenuName','tutorialPageIndex','createPageWindow','floor','TutorialPanelSys','symbol','format','anchor','cursorRight','name','boxWidth','BgFilename1','getBackgroundOpacity','processWheelScroll','ForceView','initTutorialPanelSysMainMenu','loadTitle1','initialize','shown','bind','_titleWindow','prototype','match','itemWidth','active','Scene_Boot_onDatabaseLoaded','createTutorialButtonAssistWindow','clear','2866976xEgnot','playTutorialPageChange','createTutorialPictureWindow','TutorialList','deactivate','VocabCollapse','isTutorialCategoryPopulated','Filename','maxCommands','createDescriptionWindow','height','index','process_VisuMZ_TutorialPanelSys','isCommandEnabled','call','isTutorialListCommandEnabled','findSymbolExt','VocabUnlisted','_scene','callUpdateHelp','_buttonAssistWindow','commandName','updatePage','_visibleTutorialKeys','pageWindowRect','changePaintOpacity','TutorialCall','addTutorialListCommands','playSe','volume','ListWindow_RectJS','Settings','length','Window_Options_addGeneralOptions','unlisted','PageWindow_RectJS','_listWindow','createPictureSprite','150dhFXPD','tutorialData','addCategory','openCloseCurrentCategory','_categoryStatus','Scene_Battle_initialize','innerWidth','initCategoryStatus','setLastPluginCommandInterpreter','makeTutorialList','playCursorSound','_backSprite2','cursorPagedown','currentSymbol','includeTutorial','constructor','SnapshotOpacity','initTutorialMembers','VocabInactivePage','Key','addLoadListener','Scene_Battle_updateStatusWindowVisibility','trim','tutorialPictureWindowRect','tutorialTitleWindowRect','tutorialList','addCommand','isMenuCursorBlacklisted','746959KCRZOt','VisuMZ_1_MainMenuCore','enabled','ARRAYSTRUCT','parse','_tutorialButtonAssistWindow','10578425BGKInw','wait','BypassIfRegistered','_interpreter','isPlaytest','mainAreaHeight','applyData','Scene_Menu_createCommandWindow','Scene_Battle_buttonAssistText1','Sound'];_0x385f=function(){return _0x2cee20;};return _0x385f();}function Window_TutorialPages(){const _0x1f63d5=_0x3b2e5e;this[_0x1f63d5(0x190)](...arguments);}Window_TutorialPages['prototype']=Object[_0x3b2e5e(0x127)](Window_HorzCommand[_0x3b2e5e(0x194)]),Window_TutorialPages['prototype'][_0x3b2e5e(0x1d0)]=Window_TutorialPages,Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x190)]=function(_0x2a83e0){const _0x229334=_0x3b2e5e;this[_0x229334(0x20b)]=0x0,Window_HorzCommand[_0x229334(0x194)][_0x229334(0x190)]['call'](this,_0x2a83e0),this[_0x229334(0x1ee)](0x0),this[_0x229334(0x203)]();},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x270)]=function(){const _0x27d195=_0x3b2e5e;delete this[_0x27d195(0x166)],delete this[_0x27d195(0x16c)],this['_lastIndex']=0x0,this[_0x27d195(0x278)]=0x0;},Window_TutorialPages[_0x3b2e5e(0x194)]['maxCols']=function(){const _0x19b579=_0x3b2e5e;if(this[_0x19b579(0x166)]!==undefined)return this['_maxColCache'];return this[_0x19b579(0x166)]=SceneManager[_0x19b579(0x1ad)]['tutorialPages']()[_0x19b579(0x1bb)],this[_0x19b579(0x166)];},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x269)]=function(){return 0x0;},Window_TutorialPages['prototype'][_0x3b2e5e(0x196)]=function(){const _0x14155e=_0x3b2e5e;if(this[_0x14155e(0x16c)]!==undefined)return this[_0x14155e(0x16c)];const _0x34ee5c=TextManager['tutorial']['activePage'],_0x315976=TextManager[_0x14155e(0x16d)][_0x14155e(0x25b)],_0x32e384=Math['max'](this[_0x14155e(0x13e)](_0x34ee5c)[_0x14155e(0x260)],this[_0x14155e(0x13e)](_0x315976)[_0x14155e(0x260)]);return this[_0x14155e(0x16c)]=Math[_0x14155e(0x25c)](_0x32e384+0x1*this[_0x14155e(0x1ff)]()),this[_0x14155e(0x16c)];},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x209)]=function(_0x1328bb){const _0x167a03=_0x3b2e5e,_0x524730=this['maxCols'](),_0x3c003b=this[_0x167a03(0x196)](),_0x1e3bef=this['itemHeight'](),_0x1ebf78=_0x3c003b*_0x524730,_0x7b004f=Math[_0x167a03(0x182)]((this[_0x167a03(0x1c7)]-_0x1ebf78)/0x2)+_0x1328bb*_0x3c003b,_0xe1f62b=0x0,_0x1d5455=_0x3c003b,_0x28fcdd=_0x1e3bef;return new Rectangle(_0x7b004f,_0xe1f62b,_0x1d5455,_0x28fcdd);},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x248)]=function(){const _0x5d0cfa=_0x3b2e5e;let _0x35a3e7=this[_0x5d0cfa(0x15c)]();while(_0x35a3e7--){this['addCommand']('',_0x5d0cfa(0x22b),!![],this[_0x5d0cfa(0x235)]['length']);}},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x1f8)]=function(_0x43f4f2){},Window_TutorialPages['prototype'][_0x3b2e5e(0x130)]=function(_0x37da5e){const _0x41d658=_0x3b2e5e,_0x371375=this[_0x41d658(0x133)](_0x37da5e),_0x4c5e09=this[_0x41d658(0x1b0)](_0x37da5e),_0x21ae20=this[_0x41d658(0x13e)](_0x4c5e09)['width'];this['changePaintOpacity'](this[_0x41d658(0x1a8)](_0x37da5e));const _0x209d37=this[_0x41d658(0x246)]();if(_0x209d37===_0x41d658(0x179))this[_0x41d658(0x236)](_0x4c5e09,_0x371375['x']+_0x371375['width']-_0x21ae20,_0x371375['y'],_0x21ae20);else{if(_0x209d37===_0x41d658(0x146)){const _0x207ce3=_0x371375['x']+Math[_0x41d658(0x182)]((_0x371375[_0x41d658(0x260)]-_0x21ae20)/0x2);this[_0x41d658(0x236)](_0x4c5e09,_0x207ce3,_0x371375['y'],_0x21ae20);}else this[_0x41d658(0x236)](_0x4c5e09,_0x371375['x'],_0x371375['y'],_0x21ae20);}},Window_TutorialPages['prototype'][_0x3b2e5e(0x1b0)]=function(_0x218303){const _0x922003=_0x3b2e5e;return _0x218303===SceneManager[_0x922003(0x1ad)]['tutorialPageIndex']()?TextManager[_0x922003(0x16d)]['activePage']:TextManager['tutorial'][_0x922003(0x25b)];},Window_TutorialPages[_0x3b2e5e(0x194)]['select']=function(_0x39e9c7){const _0x1d83e5=_0x3b2e5e;Window_HorzCommand['prototype'][_0x1d83e5(0x1ee)][_0x1d83e5(0x1a9)](this,_0x39e9c7),this[_0x1d83e5(0x20b)]!==this[_0x1d83e5(0x278)]&&(this[_0x1d83e5(0x20b)]>=0x0&&this[_0x1d83e5(0x278)]>=0x0&&SoundManager[_0x1d83e5(0x19c)](),this[_0x1d83e5(0x20b)]=this['_index'],SceneManager[_0x1d83e5(0x1ad)][_0x1d83e5(0x24b)]=this[_0x1d83e5(0x278)],this['refresh']());},Window_TutorialPages['prototype'][_0x3b2e5e(0x24a)]=function(){this['setCursorRect'](0x0,0x0,0x0,0x0);},Window_TutorialPages['prototype'][_0x3b2e5e(0x246)]=function(){const _0x237290=_0x3b2e5e;return _0x237290(0x146);},Window_TutorialPages['prototype'][_0x3b2e5e(0x1dc)]=function(){return!![];},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x1cb)]=function(){},Window_TutorialPages[_0x3b2e5e(0x194)]['playOkSound']=function(){},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x27a)]=function(){return![];},Window_TutorialPages[_0x3b2e5e(0x194)]['cursorRight']=function(_0x4b4aaa){const _0x3955cd=_0x3b2e5e;Window_HorzCommand['prototype'][_0x3955cd(0x187)][_0x3955cd(0x1a9)](this,![]);},Window_TutorialPages[_0x3b2e5e(0x194)]['cursorLeft']=function(_0x56c951){const _0x304377=_0x3b2e5e;Window_HorzCommand[_0x304377(0x194)][_0x304377(0x211)][_0x304377(0x1a9)](this,![]);},Window_TutorialPages['prototype'][_0x3b2e5e(0x1cd)]=function(){const _0x459dcc=_0x3b2e5e;this[_0x459dcc(0x187)]();},Window_TutorialPages[_0x3b2e5e(0x194)][_0x3b2e5e(0x28b)]=function(){const _0x2bc300=_0x3b2e5e;this[_0x2bc300(0x211)]();},Window_TutorialPages[_0x3b2e5e(0x194)]['onTouchSelect']=function(_0x439232){const _0x411cc4=_0x3b2e5e;if(_0x439232)return;Window_HorzCommand['prototype'][_0x411cc4(0x12a)][_0x411cc4(0x1a9)](this,_0x439232);},Window_TutorialPages['prototype']['onTouchOk']=function(){const _0x405dee=_0x3b2e5e,_0x447633=this['hitIndex']();if(_0x447633>=0x0)return;const _0x52d25a=0x3c;if(TouchInput['y']<_0x52d25a||TouchInput['y']>Graphics[_0x405dee(0x1a5)]-_0x52d25a)return;if(TouchInput['x']>=Graphics[_0x405dee(0x260)]/0x2){const _0x4c2017=Math['min'](this[_0x405dee(0x1a6)]()+0x1,this[_0x405dee(0x15c)]()-0x1),_0x11d561=this[_0x405dee(0x1a6)]();this[_0x405dee(0x1ee)](_0x4c2017);if(this['index']()===_0x11d561){const _0x217686=SceneManager[_0x405dee(0x1ad)];if(_0x217686[_0x405dee(0x135)])_0x217686[_0x405dee(0x135)]();if(_0x217686[_0x405dee(0x20d)])_0x217686[_0x405dee(0x20d)]();}}else{if(TouchInput['x']<Graphics[_0x405dee(0x260)]/0x2){const _0x11287b=Math[_0x405dee(0x142)](this['index']()-0x1,0x0);this['select'](_0x11287b);}}},Window_TutorialPages['prototype'][_0x3b2e5e(0x18c)]=function(){const _0x75ca6=_0x3b2e5e;if(this[_0x75ca6(0x25a)]()&&!this[_0x75ca6(0x12c)]()){const _0x53443c=0x14;if(TouchInput[_0x75ca6(0x14b)]>=_0x53443c){const _0x7af78d=Math[_0x75ca6(0x15b)](this[_0x75ca6(0x1a6)]()+0x1,this[_0x75ca6(0x15c)]()-0x1);this[_0x75ca6(0x1ee)](_0x7af78d);}if(TouchInput[_0x75ca6(0x14b)]<=-_0x53443c){const _0xd3308a=Math['max'](this[_0x75ca6(0x1a6)]()-0x1,0x0);this['select'](_0xd3308a);}}};function Window_TutorialDescription(){const _0x3b791e=_0x3b2e5e;this[_0x3b791e(0x190)](...arguments);}Window_TutorialDescription[_0x3b2e5e(0x194)]=Object['create'](Window_Base[_0x3b2e5e(0x194)]),Window_TutorialDescription['prototype'][_0x3b2e5e(0x1d0)]=Window_TutorialDescription,Window_TutorialDescription[_0x3b2e5e(0x194)][_0x3b2e5e(0x190)]=function(_0x2de955){const _0x3a820e=_0x3b2e5e;Window_Base[_0x3a820e(0x194)]['initialize'][_0x3a820e(0x1a9)](this,_0x2de955),this['_text']='',this[_0x3a820e(0x150)]=-0x1;},Window_TutorialDescription[_0x3b2e5e(0x194)][_0x3b2e5e(0x222)]=function(_0x458139){const _0x1f1549=_0x3b2e5e;this[_0x1f1549(0x25d)]!==_0x458139&&(this['_text']=_0x458139,this[_0x1f1549(0x203)]());},Window_TutorialDescription[_0x3b2e5e(0x194)][_0x3b2e5e(0x203)]=function(){const _0x2ebb63=_0x3b2e5e;this['contents']['clear']();const _0x2999cc=this[_0x2ebb63(0x25d)],_0x5704a5=this[_0x2ebb63(0x13e)](_0x2999cc),_0xdd3e0e=Math[_0x2ebb63(0x182)]((this[_0x2ebb63(0x1c7)]-_0x5704a5[_0x2ebb63(0x260)])/0x2),_0x6d3ffe=Math[_0x2ebb63(0x182)]((this[_0x2ebb63(0x292)]-_0x5704a5[_0x2ebb63(0x1a5)])/0x2);this[_0x2ebb63(0x236)](_0x2999cc,_0xdd3e0e,_0x6d3ffe);},Window_TutorialDescription[_0x3b2e5e(0x194)][_0x3b2e5e(0x214)]=function(){const _0x463b5c=_0x3b2e5e;Window_Base[_0x463b5c(0x194)][_0x463b5c(0x214)]['call'](this),this['updatePage']();},Window_TutorialDescription['prototype'][_0x3b2e5e(0x1b1)]=function(_0x15000c){const _0x40b0f2=_0x3b2e5e;if(!_0x15000c&&this['_lastPage']===SceneManager[_0x40b0f2(0x1ad)][_0x40b0f2(0x180)]())return;const _0x2fe4bd=SceneManager['_scene'];this['_lastPage']=_0x2fe4bd['tutorialPageIndex']();const _0x45b4d7=_0x2fe4bd[_0x40b0f2(0x26a)]()?_0x2fe4bd[_0x40b0f2(0x26a)]()[_0x40b0f2(0x22f)]||'':'';this[_0x40b0f2(0x222)](_0x45b4d7[_0x40b0f2(0x1d7)]());};function Window_TutorialPicture(){this['initialize'](...arguments);}Window_TutorialPicture[_0x3b2e5e(0x194)]=Object[_0x3b2e5e(0x127)](Window_Base[_0x3b2e5e(0x194)]),Window_TutorialPicture[_0x3b2e5e(0x194)][_0x3b2e5e(0x1d0)]=Window_TutorialPicture,Window_TutorialPicture[_0x3b2e5e(0x194)][_0x3b2e5e(0x190)]=function(_0x35bdd2){const _0x18edaa=_0x3b2e5e;Window_Base[_0x18edaa(0x194)][_0x18edaa(0x190)]['call'](this,_0x35bdd2),this[_0x18edaa(0x1c0)](),this[_0x18edaa(0x145)]='',this[_0x18edaa(0x150)]=-0x1;},Window_TutorialPicture['prototype'][_0x3b2e5e(0x1c0)]=function(){const _0x51174b=_0x3b2e5e;this[_0x51174b(0x12d)]=new Sprite(),this[_0x51174b(0x273)](this[_0x51174b(0x12d)]),this[_0x51174b(0x12d)][_0x51174b(0x186)]['x']=0.5,this[_0x51174b(0x12d)][_0x51174b(0x186)]['y']=0.5,this[_0x51174b(0x12d)]['x']=Math[_0x51174b(0x182)](this[_0x51174b(0x260)]/0x2),this[_0x51174b(0x12d)]['y']=Math[_0x51174b(0x182)](this[_0x51174b(0x1a5)]/0x2);},Window_TutorialPicture[_0x3b2e5e(0x194)][_0x3b2e5e(0x288)]=function(_0x33c742){const _0x509504=_0x3b2e5e;if(!this[_0x509504(0x12d)])return;this[_0x509504(0x145)]!==_0x33c742&&(this[_0x509504(0x145)]=_0x33c742,this[_0x509504(0x203)]());},Window_TutorialPicture[_0x3b2e5e(0x194)]['refresh']=function(){const _0x1da939=_0x3b2e5e;this[_0x1da939(0x145)]!==''?this['_pictureSprite']['bitmap']=ImageManager['loadPicture'](this[_0x1da939(0x145)]):this[_0x1da939(0x12d)]['bitmap']=new Bitmap(0x1,0x1);},Window_TutorialPicture['prototype']['update']=function(){const _0x45237e=_0x3b2e5e;Window_Base[_0x45237e(0x194)][_0x45237e(0x214)][_0x45237e(0x1a9)](this),this['updatePage']();},Window_TutorialPicture[_0x3b2e5e(0x194)][_0x3b2e5e(0x1b1)]=function(_0x1608c1){const _0x263a35=_0x3b2e5e;if(!_0x1608c1&&this['_lastPage']===SceneManager['_scene']['tutorialPageIndex']())return;const _0x16e8c2=SceneManager[_0x263a35(0x1ad)];this[_0x263a35(0x150)]=_0x16e8c2[_0x263a35(0x180)]();const _0xe8782=_0x16e8c2[_0x263a35(0x26a)]()?_0x16e8c2[_0x263a35(0x26a)]()[_0x263a35(0x1a2)]||'':'';this['setFilename'](_0xe8782);};function Window_TutorialTitle(){const _0x42891d=_0x3b2e5e;this[_0x42891d(0x190)](...arguments);}Window_TutorialTitle[_0x3b2e5e(0x194)]=Object[_0x3b2e5e(0x127)](Window_Base[_0x3b2e5e(0x194)]),Window_TutorialTitle[_0x3b2e5e(0x194)]['constructor']=Window_TutorialTitle,Window_TutorialTitle[_0x3b2e5e(0x194)]['initialize']=function(_0x128520){const _0x371cb1=_0x3b2e5e;Window_Base['prototype'][_0x371cb1(0x190)][_0x371cb1(0x1a9)](this,_0x128520),this[_0x371cb1(0x25d)]='';},Window_TutorialTitle[_0x3b2e5e(0x194)][_0x3b2e5e(0x222)]=function(_0x113cfa){const _0x36be03=_0x3b2e5e;this['_text']!==_0x113cfa&&(this[_0x36be03(0x25d)]=_0x113cfa,this[_0x36be03(0x203)]());},Window_TutorialTitle['prototype'][_0x3b2e5e(0x19a)]=function(){const _0x4c355f=_0x3b2e5e;this[_0x4c355f(0x222)]('');},Window_TutorialTitle[_0x3b2e5e(0x194)][_0x3b2e5e(0x203)]=function(){const _0x4373ee=_0x3b2e5e;this[_0x4373ee(0x282)][_0x4373ee(0x19a)]();const _0x38b7b7=this[_0x4373ee(0x25d)],_0x2ebfc6=this[_0x4373ee(0x13e)](_0x38b7b7),_0x514587=Math[_0x4373ee(0x182)]((this[_0x4373ee(0x1c7)]-_0x2ebfc6[_0x4373ee(0x260)])/0x2),_0x2ce415=Math[_0x4373ee(0x182)]((this[_0x4373ee(0x292)]-_0x2ebfc6[_0x4373ee(0x1a5)])/0x2);this[_0x4373ee(0x236)](_0x38b7b7,_0x514587,_0x2ce415);};function Window_TutorialList(){const _0x380184=_0x3b2e5e;this[_0x380184(0x190)](...arguments);}Window_TutorialList[_0x3b2e5e(0x194)]=Object[_0x3b2e5e(0x127)](Window_Command[_0x3b2e5e(0x194)]),Window_TutorialList[_0x3b2e5e(0x194)]['constructor']=Window_TutorialList,Window_TutorialList['prototype'][_0x3b2e5e(0x190)]=function(_0x4b7364){const _0x5ec53d=_0x3b2e5e;this[_0x5ec53d(0x1c8)](),Window_Command[_0x5ec53d(0x194)][_0x5ec53d(0x190)][_0x5ec53d(0x1a9)](this,_0x4b7364),this[_0x5ec53d(0x249)]();},Window_TutorialList['prototype']['initCategoryStatus']=function(){const _0xbbc9c1=_0x3b2e5e;this[_0xbbc9c1(0x1c5)]={};const _0x33eacd=VisuMZ[_0xbbc9c1(0x183)][_0xbbc9c1(0x24e)];for(const _0x27693d of _0x33eacd){if(!this['includeCategory'](_0x27693d))continue;this['_categoryStatus'][_0x27693d[_0xbbc9c1(0x20c)]()[_0xbbc9c1(0x1d7)]()]=!![];}},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x249)]=function(){const _0x59c4e9=_0x3b2e5e;if($gameTemp['_returnTutorialKey']===undefined)return;const _0x17844a=$gameTemp[_0x59c4e9(0x279)];$gameTemp[_0x59c4e9(0x279)]=undefined;const _0x5d74b4=this['findSymbolExt'](_0x59c4e9(0x16d),_0x17844a),_0x5519ba=Math[_0x59c4e9(0x182)](this['maxVisibleItems']()/0x2)-0x1;this[_0x59c4e9(0x178)](_0x5d74b4),this[_0x59c4e9(0x250)]>0x1&&(this[_0x59c4e9(0x250)]=0x1,this[_0x59c4e9(0x23d)]()),this[_0x59c4e9(0x226)](_0x5d74b4-_0x5519ba),this[_0x59c4e9(0x1ae)]();},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x1ab)]=function(_0x374541,_0x53bc81){const _0x42084b=_0x3b2e5e;return this[_0x42084b(0x235)][_0x42084b(0x126)](_0xe9706e=>_0xe9706e[_0x42084b(0x184)]===_0x374541&&_0xe9706e[_0x42084b(0x238)]===_0x53bc81);},Window_TutorialList['prototype'][_0x3b2e5e(0x248)]=function(){const _0x2a66ca=_0x3b2e5e,_0x48275b=VisuMZ[_0x2a66ca(0x183)]['CategoryOrder'];for(const _0x2ecf57 of _0x48275b){if(!this['includeCategory'](_0x2ecf57))continue;this[_0x2a66ca(0x1c3)](_0x2ecf57);}},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x21e)]=function(_0x134265){const _0x3007e2=_0x3b2e5e;if($gameTemp[_0x3007e2(0x129)]())return!![];return $gameSystem[_0x3007e2(0x1a1)](_0x134265);},Window_TutorialList[_0x3b2e5e(0x194)]['isCategoryOpen']=function(_0x587ef8){const _0x21b5d7=_0x3b2e5e;return _0x587ef8=_0x587ef8[_0x21b5d7(0x20c)]()['trim'](),this['_categoryStatus'][_0x587ef8];},Window_TutorialList[_0x3b2e5e(0x194)]['addCategory']=function(_0x4894f2){const _0x2d4d5b=_0x3b2e5e;_0x4894f2=_0x4894f2['toLowerCase']()[_0x2d4d5b(0x1d7)]();const _0x53761d=_0x4894f2===_0x2d4d5b(0x1bd),_0x1c2a8a=this[_0x2d4d5b(0x208)](_0x4894f2)?TextManager[_0x2d4d5b(0x16d)][_0x2d4d5b(0x160)]:TextManager['tutorial'][_0x2d4d5b(0x283)],_0x35a6ed=_0x53761d?{}:VisuMZ[_0x2d4d5b(0x183)][_0x2d4d5b(0x151)][_0x4894f2];if(!_0x35a6ed)return;const _0x2e95c5=_0x53761d?TextManager['tutorial'][_0x2d4d5b(0x1bd)]:_0x35a6ed[_0x2d4d5b(0x233)],_0x31deff=$gameSystem[_0x2d4d5b(0x276)](_0x4894f2);if(_0x31deff<=0x0)return;const _0x5aefcc=_0x1c2a8a[_0x2d4d5b(0x185)](_0x2e95c5,_0x31deff);this[_0x2d4d5b(0x1db)](_0x5aefcc,_0x2d4d5b(0x15a),!![],_0x4894f2),this['makeTutorialList'](_0x4894f2);},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x1c4)]=function(){const _0x2dbe5b=_0x3b2e5e,_0xf1efc8=this[_0x2dbe5b(0x25e)]();this['_categoryStatus'][_0xf1efc8]=!this['_categoryStatus'][_0xf1efc8],this[_0x2dbe5b(0x203)]();},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x25e)]=function(){const _0xee6890=_0x3b2e5e;return this['currentSymbol']()===_0xee6890(0x15a)?this[_0xee6890(0x17d)]():null;},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x1ca)]=function(_0x4ac4a5){const _0x4ccd9b=_0x3b2e5e;if(!this[_0x4ccd9b(0x208)](_0x4ac4a5))return;const _0x2eb91a=VisuMZ[_0x4ccd9b(0x183)][_0x4ccd9b(0x12b)][_0x4ac4a5];for(const _0x57a053 of _0x2eb91a){if(!this[_0x4ccd9b(0x1cf)](_0x57a053))continue;this[_0x4ccd9b(0x271)](_0x57a053);}},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x1cf)]=function(_0x160571){const _0x240436=_0x3b2e5e;if(!VisuMZ[_0x240436(0x183)][_0x240436(0x26d)](_0x160571))return![];if($gameTemp[_0x240436(0x129)]())return!![];return $gameSystem[_0x240436(0x258)](_0x160571);},Window_TutorialList['prototype'][_0x3b2e5e(0x271)]=function(_0x89c3e5){const _0x14dacf=_0x3b2e5e;_0x89c3e5=_0x89c3e5['toLowerCase']()['trim']();const _0x59de69=VisuMZ['TutorialPanelSys']['Tutorials'][_0x89c3e5];if(!_0x59de69)return;const _0x5d7954=_0x59de69[_0x14dacf(0x233)];this[_0x14dacf(0x1db)](_0x5d7954,_0x14dacf(0x16d),!![],_0x89c3e5);},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x246)]=function(){return'left';},Window_TutorialList[_0x3b2e5e(0x194)][_0x3b2e5e(0x130)]=function(_0x868029){const _0x200d6f=_0x3b2e5e,_0x3ff416=this[_0x200d6f(0x133)](_0x868029),_0x1119a8=this[_0x200d6f(0x1b0)](_0x868029),_0x5e343b=this[_0x200d6f(0x13e)](_0x1119a8)[_0x200d6f(0x260)];this[_0x200d6f(0x1b4)](this[_0x200d6f(0x1a8)](_0x868029));const _0x5c0855=this[_0x200d6f(0x246)]();if(_0x5c0855===_0x200d6f(0x179))this[_0x200d6f(0x236)](_0x1119a8,_0x3ff416['x']+_0x3ff416[_0x200d6f(0x260)]-_0x5e343b,_0x3ff416['y'],_0x5e343b);else{if(_0x5c0855===_0x200d6f(0x146)){const _0x415129=_0x3ff416['x']+Math[_0x200d6f(0x182)]((_0x3ff416[_0x200d6f(0x260)]-_0x5e343b)/0x2);this[_0x200d6f(0x236)](_0x1119a8,_0x415129,_0x3ff416['y'],_0x5e343b);}else this[_0x200d6f(0x236)](_0x1119a8,_0x3ff416['x'],_0x3ff416['y'],_0x5e343b);}};