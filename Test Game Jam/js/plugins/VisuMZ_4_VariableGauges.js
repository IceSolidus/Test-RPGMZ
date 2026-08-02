//=============================================================================
// VisuStella MZ - Variable Gauges
// VisuMZ_4_VariableGauges.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VariableGauges = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VariableGauges = VisuMZ.VariableGauges || {};
VisuMZ.VariableGauges.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [VariableGauges]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Variable_Gauges_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you, the game dev, to place gauges on the screen whose
 * values are governed by variables. These gauges can appear on the map screen
 * or the battle screen to your liking. Their maximum values, placements, type,
 * colors, and more can be adjusted to suit your needs. Mark them with icons
 * and have tooltip windows appear explaining their purpose when the player
 * hovers the mouse cursor over them.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Display an unlimited number of Variable Gauges on the screen.
 * * Variable Gauges will automatically update when their assigned variables
 *   are updated through event commands.
 * * Adjust their screen position, colors, horizontal or vertical style type.
 * * Mark the gauges with icons to let the player distinguish them quickly.
 * * Provide tooltip support for when the player hovers the mouse cursor over
 *   them for more clarity on what the gauges are for.
 * * Adjust their visibility through Plugin Commands and Notetags.
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
 * If VisuMZ's Visual Gauge Styles plugin is installed, you can apply gauge
 * styles to the various gauges for this plugin.
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
 * VisuMZ_1_MessageCore
 * 
 * Word Wrap does not work the tooltips. This is because the tooltips are
 * automatically sized based on the text at hand.
 * 
 * ---
 * 
 * VisuMZ_3_MessageKeywords
 * 
 * Message Keywords do not work with the tooltips because you cannot hover the
 * mouse cursor over a window that only appears when hovering over a specific
 * section of the screen.
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
 * <Hide Variable Gauges>
 *
 * - Used for: Map Notetags
 * - Prevents Variable Gauges from being visible on the current map.
 *
 * ---
 *
 * <Force Variable Gauge: key>
 * <Force Variable Gauges: key, key, key>
 *
 * - Used for: Map Notetags
 * - Overrides map settings for the visible Variable Gauges and makes it so
 *   that only the listed Variable Gauges (marked by their keys) are visible
 *   while on this map.
 * - No other Variable Gauges are visible while on this map.
 * - Replace 'key' with a string representing the Variable Gauge that should be
 *   visible on the map.
 *
 * ---
 *
 * <Extra Variable Gauge: key>
 * <Extra Variable Gauges: key, key, key>
 *
 * - Used for: Map Notetags
 * - Shows extra Variable Gauge(s) in addition to the ones that are normally
 *   visible on the map while on this map.
 * - Replace 'key' with a string representing the Variable Gauge that is also
 *   visible on the map.
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
 * === Battle Plugin Commands ===
 * 
 * ---
 *
 * Battle: Add Variable Gauge(s)
 * - Adds Variable Gauge(s) to be visible in battle.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want visible in battle.
 *
 * ---
 *
 * Battle: Remove Variable Gauge(s)
 * - Remove Variable Gauge(s) from view in battle.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want removed from battle.
 *
 * ---
 *
 * Battle: Remove All Gauge(s)
 * - Remove All Variable Gauge(s) from view in battle.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 *
 * Map: Add Variable Gauge(s)
 * - Adds Variable Gauge(s) to be visible on the map.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want visible on the map.
 *
 * ---
 *
 * Map: Remove Variable Gauge(s)
 * - Remove Variable Gauge(s) from view in battle.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want removed from the
 *     map scene.
 *
 * ---
 *
 * Map: Remove All Gauge(s)
 * - Remove All Variable Gauge(s) from view on the map.
 *
 * ---
 * 
 * === Refresh Plugin Commands ===
 * 
 * ---
 *
 * Refresh: All Variable Gauge(s)
 * - Refresh all Variable Gauges currently visible.
 *
 * ---
 *
 * Refresh: Target Variable Gauge(s)
 * - Refresh Target Variable Gauges currently visible.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want refreshed.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Variable Gauge Visibility
 * - Shows/hides all variable gauges on the screen.
 *
 *   Visibility:
 *   - Shows/hides all Variable Gauges on the screen.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge List Settings
 * ============================================================================
 *
 * A list of the gauges you wish to show on screen. Here is where you adjust
 * ALL of the settings related to the Variable Gauges that can appear in your
 * game. Every setting needs to be carefully adjusted.
 *
 * ---
 *
 * Main
 * 
 *   Key:
 *   - Identification key used to reference this gauge.
 *   - Use unique keys for this to work.
 *   - If you do not change the ID Key for this Variable Gauge and leave it as
 *     >>>ATTENTION<<<, then the game will not let you move forward.
 * 
 *   Variable ID:
 *   - Select a variable to bind this gauge to.
 *   - Use a Variable ID other than 0 for this to work.
 * 
 *   JS: Maximum Value:
 *   - Code used to determine the maximum value for the gauge.
 *
 * ---
 *
 * Gauge Colors
 * 
 *   Color 1:
 *   Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Default Visibility
 * 
 *   Map Visible:
 *   Battle Visible:
 *   - Do you want this gauge to be visible or hidden by default?
 *
 * ---
 *
 * Icon Settings
 * 
 *   Icon Index:
 *   - Pairs the gauge with an icon.
 *   - Use 0 to not use any icons.
 * 
 *   Icon Buffer:
 *   - Pixel distance to buffer icon from gauge.
 *   - Direction depends on Gauge Type.
 *
 * ---
 *
 * Screen Settings
 * 
 *   Gauge Type:
 *   - What is the gauge type like?
 *     - Horizontal - Goes Left to Right
 *     - Vertical - Goes Down to Up
 * 
 *   Visual Gauge Style:
 *   - Select the gauge style to use for this gauge.
 *   - Requires VisuMZ_3_VisualGaugeStyles!
 * 
 *   JS: Position:
 *   - Code used to determine the screen position for this gauge.
 *
 * ---
 *
 * Tooltip Settings
 * 
 *   Tooltip Text:
 *   - Tooltip text that's displayed when the mouse hovers over.
 *   - Text codes allowed. Does not work with Word Wrap.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tooltip Settings
 * ============================================================================
 *
 * Settings for the Variable Gauges Tooltips Window.
 *
 * ---
 *
 * Appearance
 * 
 *   Scale:
 *   - What scale size do you want for the tooltip?
 *   - Use 1.0 for normal size.
 * 
 *   Skin Filename:
 *   - What window skin do you want to use for the tooltip?
 * 
 *   Skin Opacity:
 *   - What opacity setting is used for the tooltip?
 *   - Use a number between 0 and 255.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - Offset the tooltip X position from the mouse?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the tooltip Y position from the mouse?
 *   - Negative: up. Positive: down.
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
 * Version 1.02: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * *** VisuMZ_3_VisualGaugeStyles
 * **** You can now apply a style for each gauge in the "Gauge List" Plugin
 *      Parameters as long as VisuMZ_3_VisualGaugeStyles is installed.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added section: "Extra Features" for VisuMZ_3_VisualGaugeStyles:
 * *** If VisuMZ's Visual Gauge Styles plugin is installed, you can apply gauge
 *     styles to the various gauges for this plugin.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Gauge List > Settings > Visual Gauge Style
 * **** Select the gauge style to use for this gauge.
 * **** Requires VisuMZ_3_VisualGaugeStyles!
 * 
 * Version 1.01: January 20, 2022
 * * Feature Update!
 * ** Added fail safes for event test play to prevent crashes on maps without
 *    any tilesets assigned. Update made by Arisu.
 *
 * Version 1.00 Official Release Date: February 11, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleAddGauge
 * @text Battle: Add Variable Gauge(s)
 * @desc Adds Variable Gauge(s) to be visible in battle.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want visible in battle.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleRemoveGauge
 * @text Battle: Remove Variable Gauge(s)
 * @desc Remove Variable Gauge(s) from view in battle.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want removed from battle.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleRemoveAllGauge
 * @text Battle: Remove All Gauge(s)
 * @desc Remove All Variable Gauge(s) from view in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapAddGauge
 * @text Map: Add Variable Gauge(s)
 * @desc Adds Variable Gauge(s) to be visible on the map.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want visible on the map.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapRemoveGauge
 * @text Map: Remove Variable Gauge(s)
 * @desc Remove Variable Gauge(s) from view on the map.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want removed from the map scene.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapRemoveAllGauge
 * @text Map: Remove All Gauge(s)
 * @desc Remove All Variable Gauge(s) from view on the map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RefreshAllGauges
 * @text Refresh: All Variable Gauge(s)
 * @desc Refresh all Variable Gauges currently visible.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RefreshTargetGauges
 * @text Refresh: Target Variable Gauge(s)
 * @desc Refresh Target Variable Gauges currently visible.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want refreshed.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemVariableGaugeVisibility
 * @text System: Variable Gauge Visibility
 * @desc Shows/hides all variable gauges on the screen.
 *
 * @arg Visiblility:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Shows/hides all Variable Gauges on the screen.
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
 * @param VariableGauges
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Gauge:arraystruct
 * @text Gauge List
 * @type struct<Gauge>[]
 * @desc A list of the gauges you wish to show on screen.
 * @default ["{\"Key:str\":\"Example\",\"VariableID:num\":\"1\",\"MaximumJS:func\":\"\\\"// Declare Variables\\\\nlet max = 100;\\\\n\\\\n// Calculations\\\\n// Insert your calculations here\\\\n\\\\n// Return Maximum\\\\nreturn max;\\\"\",\"Colors\":\"\",\"Color1:str\":\"28\",\"Color2:str\":\"29\",\"DefaultVisible\":\"\",\"DefaultMapVisible:eval\":\"true\",\"DefaultBattleVisible:eval\":\"false\",\"IconSettings\":\"\",\"IconIndex:num\":\"23\",\"IconBuffer:num\":\"+4\",\"Screen\":\"\",\"Type:str\":\"horz\",\"PositionJS:func\":\"\\\"// Declare Variables\\\\nlet thick = 24;\\\\nlet length = 192;\\\\nlet x = Graphics.width - length - 50 - ImageManager.iconWidth - 4;\\\\nlet y = Graphics.height - thick - 50;\\\\n\\\\n// Check Horizontal\\\\nconst horz = this.isHorizontal();\\\\nconst width = horz ? length : thick;\\\\nconst height = horz ? thick : length;\\\\n\\\\n// Return Rectangle\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"TooltipSettings\":\"\",\"TooltipText:json\":\"\\\"This is an example of a \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0].\\\\nIt is directly tied to \\\\\\\\c[6]Variable 1\\\\\\\\c[0] with\\\\na maximum cap of \\\\\\\\c[24]100\\\\\\\\c[0].\\\\n\\\\nThis \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0] will update whenever\\\\n\\\\\\\\c[6]Variable 1\\\\\\\\c[0] is changed by \\\\\\\\c[4]Event Commands\\\\\\\\c[0].\\\"\"}","{\"Key:str\":\"Vertical\",\"VariableID:num\":\"2\",\"MaximumJS:func\":\"\\\"// Declare Variables\\\\nlet max = 100;\\\\n\\\\n// Calculations\\\\n// Insert your calculations here\\\\n\\\\n// Return Maximum\\\\nreturn max;\\\"\",\"Colors\":\"\",\"Color1:str\":\"30\",\"Color2:str\":\"31\",\"DefaultVisible\":\"\",\"DefaultMapVisible:eval\":\"true\",\"DefaultBattleVisible:eval\":\"false\",\"IconSettings\":\"\",\"IconIndex:num\":\"87\",\"IconBuffer:num\":\"+4\",\"Screen\":\"\",\"Type:str\":\"vert\",\"PositionJS:func\":\"\\\"// Declare Variables\\\\nlet thick = 24;\\\\nlet length = 192;\\\\nlet x = Graphics.width - thick - 50;\\\\nlet y = Graphics.height - length - 50 - ImageManager.iconHeight - 4;\\\\n\\\\n// Check Horizontal\\\\nconst horz = this.isHorizontal();\\\\nconst width = horz ? length : thick;\\\\nconst height = horz ? thick : length;\\\\n\\\\n// Return Rectangle\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"TooltipSettings\":\"\",\"TooltipText:json\":\"\\\"Here is another example of a \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0],\\\\nexcept that it is \\\\\\\\c[4]vertical\\\\\\\\c[0]. This gauge is\\\\ntied to \\\\\\\\c[6]Variable 2\\\\\\\\c[0].\\\\n\\\\nA \\\\\\\\c[4]vertical\\\\\\\\c[0] \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0] behaves similar to\\\\na regular \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0] except it is filled\\\\nfrom the bottom to the top.\\\"\"}","{\"Key:str\":\"Hidden\",\"VariableID:num\":\"3\",\"MaximumJS:func\":\"\\\"// Declare Variables\\\\nlet max = 100;\\\\n\\\\n// Calculations\\\\n// Insert your calculations here\\\\n\\\\n// Return Maximum\\\\nreturn max;\\\"\",\"Colors\":\"\",\"Color1:str\":\"20\",\"Color2:str\":\"21\",\"DefaultVisible\":\"\",\"DefaultMapVisible:eval\":\"false\",\"DefaultBattleVisible:eval\":\"false\",\"IconSettings\":\"\",\"IconIndex:num\":\"163\",\"IconBuffer:num\":\"+4\",\"Screen\":\"\",\"Type:str\":\"horz\",\"PositionJS:func\":\"\\\"// Declare Variables\\\\nlet thick = 24;\\\\nlet length = 192;\\\\nlet x = Graphics.width - length - 50 - ImageManager.iconWidth - 4;\\\\nlet y = Graphics.height - thick - 50 - ImageManager.iconHeight - 4;\\\\n\\\\n// Check Horizontal\\\\nconst horz = this.isHorizontal();\\\\nconst width = horz ? length : thick;\\\\nconst height = horz ? thick : length;\\\\n\\\\n// Return Rectangle\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"TooltipSettings\":\"\",\"TooltipText:json\":\"\\\"This is an example of a \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0]\\\\nthat is normally \\\\\\\\c[4]hidden\\\\\\\\c[0] from view until\\\\nyou, the game dev, manually \\\\\\\\c[24]add\\\\\\\\c[0] it to\\\\nthe game screen present.\\\\n\\\\nIt is based off \\\\\\\\c[6]Variable 3\\\\\\\\c[0] and will depict\\\\nthe values shown up to a cap of \\\\\\\\c[24]100\\\\\\\\c[0].\\\"\"}"]
 *
 * @param Tooltip:struct
 * @text Tooltip Settings
 * @type struct<Tooltip>
 * @desc Settings for the Variable Gauges Tooltips Window.
 * @default {"Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0"}
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
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param Key:str
 * @text Key
 * @desc Identification key used to reference this gauge.
 * Use unique keys for this to work.
 * @default >>>ATTENTION<<<
 *
 * @param VariableID:num
 * @text Variable ID
 * @parent Key:str
 * @type variable
 * @desc Select a variable to bind this gauge to.
 * Use a Variable ID other than 0 for this to work.
 * @default 0
 *
 * @param MaximumJS:func
 * @text JS: Maximum Value
 * @parent Key:str
 * @type note
 * @desc Code used to determine the maximum value for the gauge.
 * @default "// Declare Variables\nlet max = 100;\n\n// Calculations\n// Insert your calculations here\n\n// Return Maximum\nreturn max;"
 * 
 * @param Colors
 * @text Gauge Colors
 *
 * @param Color1:str
 * @text Color 1
 * @parent Colors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param Color2:str
 * @text Color 2
 * @parent Colors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 * 
 * @param DefaultVisible
 * @text Default Visibility
 *
 * @param DefaultMapVisible:eval
 * @text Map Visible
 * @parent DefaultVisible
 * @type boolean
 * @on Visible by Default
 * @off Hidden by Default
 * @desc Do you want this gauge to be visible or hidden by default?
 * @default true
 *
 * @param DefaultBattleVisible:eval
 * @text Battle Visible
 * @parent DefaultVisible
 * @type boolean
 * @on Visible by Default
 * @off Hidden by Default
 * @desc Do you want this gauge to be visible or hidden by default?
 * @default false
 * 
 * @param IconSettings
 * @text Icon Settings
 *
 * @param IconIndex:num
 * @text Icon Index
 * @parent IconSettings
 * @desc Pairs the gauge with an icon.
 * Use 0 to not use any icons.
 * @default 0
 *
 * @param IconBuffer:num
 * @text Icon Buffer
 * @parent IconSettings
 * @desc Pixel distance to buffer icon from gauge.
 * Direction depends on Gauge Type.
 * @default +4
 * 
 * @param Screen
 * @text Screen Settings
 *
 * @param Type:str
 * @text Gauge Type
 * @parent Screen
 * @type select
 * @option Horizontal - Goes Left to Right
 * @value horz
 * @option Vertical - Goes Down to Up
 * @value vert
 * @desc What is the gauge type like?
 * @default horz
 * 
 * @param Style:str
 * @text Visual Gauge Style
 * @parent Screen
 * @type select
 * @option Normal
 * @option Default
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
 * @desc Select the gauge style to use for this gauge.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Default
 *
 * @param PositionJS:func
 * @text JS: Position
 * @parent Screen
 * @type note
 * @desc Code used to determine the screen position for this gauge.
 * @default "// Declare Variables\nlet thick = 24;\nlet length = 192;\nlet x = 50;\nlet y = 50;\n\n// Check Horizontal\nconst horz = this.isHorizontal();\nconst width = horz ? length : thick;\nconst height = horz ? thick : length;\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 * 
 * @param TooltipSettings
 * @text Tooltip Settings
 *
 * @param TooltipText:json
 * @text Tooltip Text
 * @parent TooltipSettings
 * @type note
 * @desc Tooltip text that's displayed when the mouse hovers over.
 * Text codes allowed. Does not work with Word Wrap.
 * @default "Example text."
 *
 */
/* ----------------------------------------------------------------------------
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
 *
 * @param Appearance
 *
 * @param Scale:num
 * @text Scale
 * @parent Appearance
 * @desc What scale size do you want for the tooltip?
 * Use 1.0 for normal size.
 * @default 0.6
 *
 * @param WindowSkin:str
 * @text Skin Filename
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @desc What window skin do you want to use for the tooltip?
 * @default Window
 *
 * @param WindowOpacity:num
 * @text Skin Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What opacity setting is used for the tooltip?
 * Use a number between 0 and 255.
 * @default 240
 *
 * @param Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offset the tooltip X position from the mouse?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offset the tooltip Y position from the mouse?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

function _0x4f6d(){const _0x2ebbdb=['xpHwc','updateVerticalGaugeSpritePosition','wOLvd','createWindowLayer','MapRemoveAllGauge','zLtZQ','DefaultMapVisible','WINDOW_SCALE','IconIndex','clamp','_variableGaugeLayer','clone','horz','isHorizontal','format','getGaugeRate','53893NXnsPd','VisibleGauges','forcedVariableGauges','ArBqx','_hoverState','loadSystem','split','iqPBr','isSceneBattle','convertMessageKeywords','gaugeBackColor','show','textSizeEx','updateIconSprite','parameters','ARRAYSTRUCT','Color1','length','CCyAl','WINDOW_SKIN_FILENAME','ARRAYJSON','JpVSg','areVariableGaugesVisible','FafYM','constructor','getStyleName','xiazY','NXooX','STR','bitmap','round','viTyd','jRbGt','updateBackOpacity','Settings','isOptionValid','1986grjVDF','NUM','setVisibleUI','match','onMouseExit','exit','654WkihvP','ForcedGauges','isWordWrapEnabled','ttIKw','FEcvG','PositionJS','iconWidth','xpAiw','You\x20have\x20a\x20Variable\x20Gauge\x20key\x20named\x20>>>ATTENTION<<<\x0a','drawGaugeBack','_key','isSceneMap','DefaultBattleVisibleGauges','call','includes','process_VisuMZ_VariableGauges','name','DefaultBattleVisible','bhgSx','loadWindowskin','createNewVariableGaugeSprites','ARRAYSTR','remove','updateIconPosition','push','scale','Color2','isBusy','_variableGaugeTooltipWindow','536184SyQSvq','WindowSkin','resetFontSettings','MaximumJS','gradientFillRect','setFrame','qyuEJ','GqDcl','juvCb','create','YFonI','LLxoh','indexOf','RegExp','adjustBitmap','default','addMapVisibleVariableGauge','adjustVerticalGaugeSpriteBitmap','DefaultMapVisibleGauges','VariableGauges','addBattleVisibleVariableGauge','hideVariableGauges','20732630KygKfN','find','vertStyle','STRUCT','RZzMS','clear','_verticalGaugeSprite','qXyGG','HideGauges','adjustPosition','_lastRate','update','refreshBitmap','Game_System_initialize','HkTMg','updateVariableGauges','Tooltip','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','createVariableGaugeTooltipWindow','targetWindow','setupText','peeKz','updateRefreshRequest','settings','#%1','YmUxV','IconSet','resizeWindow','Please\x20change\x20this\x20to\x20an\x20appropriate\x20key\x20name.','VariableID','MapAddGauge','setupKeywordText','backOpacity','createVariableGaugeLayer','trim','225zlTGLx','MOUSE_OFFSET_X','_iconIndex','clampPosition','createIconSprite','description','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','toLowerCase','oQNes','resize','RefreshAllGauges','trhAV','ConvertParams','_maxValueSegment','qouTp','RefreshTargetGauges','parse','setKey','13482450lHzaeh','updateVariableGaugeVisibility','_variableGaugeVisibile','contents','removeMapVisibleVariableGauge','drawTextEx','angle','iconHeight','updateIconSpriteFrame','hide','concat','initialize','anchor','visibleVariableGauges','_requestRefresh','number','getColor','removeBattleVisibleVariableGauge','isSupportMessageKeywords','createVerticalGaugeSprite','processTouch','ccWNx','Qucvz','floor','note','kiOQN','visible','ARRAYEVAL','max','rPYbu','value','Key','setVariableGaugesVisible','prototype','isBeingTouched','QxLJG','Rlfoy','Gauge','itemPadding','createVariableGaugeSprites','SystemVariableGaugeVisibility','IconBuffer','Scene_Boot_onDatabaseLoaded','OffsetX','GaugeKey','styleName','EVAL','VisualGaugeStyles','vbtAH','removeVariableGauge','Scene_Base_createWindowLayer','Keys','addChild','filter','WindowOpacity','UcCVt','baseTextRect','dLPps','width','drawVisualStyleGauge','XdHMc','56ZGWTvd','version','_iconSprite','return\x200','requestRefresh','refresh','status','VariableReference','updatePosition','ChWke','WINDOW_SKIN_OPACITY','_battleVisibleVariableGauges','toUpperCase','Scene_Battle_setVisibleUI','BattleRemoveGauge','oNyaG','ARRAYNUM','initVariableGauges','setValue','opacity','125665rTsKoF','textColor','_scene','BattleAddGauge','map','_mapVisibleVariableGauges','updateOpacity','registerCommand','drawGaugeFront','hhyhn','children','onMouseEnter','_text','height','10674888MYqRpQ','horzStyle','drawGauge','refreshVariableGauge','SuQXN','createContents'];_0x4f6d=function(){return _0x2ebbdb;};return _0x4f6d();}function _0x6e39(_0x44d932,_0x54291c){const _0x4f6d72=_0x4f6d();return _0x6e39=function(_0x6e3982,_0x4965a1){_0x6e3982=_0x6e3982-0x7d;let _0x289609=_0x4f6d72[_0x6e3982];return _0x289609;},_0x6e39(_0x44d932,_0x54291c);}const _0x267021=_0x6e39;(function(_0x575197,_0x307d73){const _0x289a3f=_0x6e39,_0x2c6920=_0x575197();while(!![]){try{const _0xd2a457=-parseInt(_0x289a3f(0x11a))/0x1*(-parseInt(_0x289a3f(0xbe))/0x2)+-parseInt(_0x289a3f(0xe1))/0x3+parseInt(_0x289a3f(0x169))/0x4*(-parseInt(_0x289a3f(0x17d))/0x5)+parseInt(_0x289a3f(0xc4))/0x6*(-parseInt(_0x289a3f(0x9a))/0x7)+parseInt(_0x289a3f(0x84))/0x8+-parseInt(_0x289a3f(0x12c))/0x9+parseInt(_0x289a3f(0xf7))/0xa;if(_0xd2a457===_0x307d73)break;else _0x2c6920['push'](_0x2c6920['shift']());}catch(_0xda1e57){_0x2c6920['push'](_0x2c6920['shift']());}}}(_0x4f6d,0xba552));var label=_0x267021(0xf4),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x54b2d0){const _0x4305ec=_0x267021;return _0x54b2d0[_0x4305ec(0x16f)]&&_0x54b2d0['description'][_0x4305ec(0xd2)]('['+label+']');})[0x0];VisuMZ[label][_0x267021(0xbc)]=VisuMZ[label][_0x267021(0xbc)]||{},VisuMZ[_0x267021(0x126)]=function(_0x7e9d3,_0x319e24){const _0x437ff9=_0x267021;for(const _0x529612 in _0x319e24){if('nYFtW'!==_0x437ff9(0xe9)){if(_0x529612['match'](/(.*):(.*)/i)){const _0x1a6952=String(RegExp['$1']),_0x19c86e=String(RegExp['$2'])[_0x437ff9(0x175)]()[_0x437ff9(0x119)]();let _0x40de8e,_0x1134bc,_0x4a4f3d;switch(_0x19c86e){case _0x437ff9(0xbf):_0x40de8e=_0x319e24[_0x529612]!==''?Number(_0x319e24[_0x529612]):0x0;break;case _0x437ff9(0x179):_0x1134bc=_0x319e24[_0x529612]!==''?JSON['parse'](_0x319e24[_0x529612]):[],_0x40de8e=_0x1134bc[_0x437ff9(0x181)](_0x3f8995=>Number(_0x3f8995));break;case _0x437ff9(0x15a):_0x40de8e=_0x319e24[_0x529612]!==''?eval(_0x319e24[_0x529612]):null;break;case _0x437ff9(0x147):_0x1134bc=_0x319e24[_0x529612]!==''?JSON['parse'](_0x319e24[_0x529612]):[],_0x40de8e=_0x1134bc['map'](_0x100aa5=>eval(_0x100aa5));break;case'JSON':_0x40de8e=_0x319e24[_0x529612]!==''?JSON[_0x437ff9(0x12a)](_0x319e24[_0x529612]):'';break;case _0x437ff9(0xae):_0x1134bc=_0x319e24[_0x529612]!==''?JSON[_0x437ff9(0x12a)](_0x319e24[_0x529612]):[],_0x40de8e=_0x1134bc[_0x437ff9(0x181)](_0x3ce4d1=>JSON[_0x437ff9(0x12a)](_0x3ce4d1));break;case'FUNC':_0x40de8e=_0x319e24[_0x529612]!==''?new Function(JSON[_0x437ff9(0x12a)](_0x319e24[_0x529612])):new Function(_0x437ff9(0x16c));break;case'ARRAYFUNC':_0x1134bc=_0x319e24[_0x529612]!==''?JSON[_0x437ff9(0x12a)](_0x319e24[_0x529612]):[],_0x40de8e=_0x1134bc[_0x437ff9(0x181)](_0x4be79a=>new Function(JSON[_0x437ff9(0x12a)](_0x4be79a)));break;case _0x437ff9(0xb6):_0x40de8e=_0x319e24[_0x529612]!==''?String(_0x319e24[_0x529612]):'';break;case _0x437ff9(0xd9):_0x1134bc=_0x319e24[_0x529612]!==''?JSON['parse'](_0x319e24[_0x529612]):[],_0x40de8e=_0x1134bc[_0x437ff9(0x181)](_0x3073fa=>String(_0x3073fa));break;case _0x437ff9(0xfa):_0x4a4f3d=_0x319e24[_0x529612]!==''?JSON['parse'](_0x319e24[_0x529612]):{},_0x40de8e=VisuMZ[_0x437ff9(0x126)]({},_0x4a4f3d);break;case _0x437ff9(0xa9):_0x1134bc=_0x319e24[_0x529612]!==''?JSON[_0x437ff9(0x12a)](_0x319e24[_0x529612]):[],_0x40de8e=_0x1134bc[_0x437ff9(0x181)](_0xdcd46=>VisuMZ[_0x437ff9(0x126)]({},JSON['parse'](_0xdcd46)));break;default:continue;}_0x7e9d3[_0x1a6952]=_0x40de8e;}}else return this[_0x437ff9(0x17f)]&&this[_0x437ff9(0x17f)][_0x437ff9(0xb2)]===_0x3eb43e;}return _0x7e9d3;},(_0x4154ca=>{const _0x2f4717=_0x267021,_0x5655f3=_0x4154ca['name'];for(const _0x2875ae of dependencies){if('ceiKC'!==_0x2f4717(0xeb)){if(!Imported[_0x2875ae]){alert(_0x2f4717(0x120)[_0x2f4717(0x98)](_0x5655f3,_0x2875ae)),SceneManager[_0x2f4717(0xc3)]();break;}}else{const _0x224b71=new _0x333261(0x0,0x0,_0x4a04c9[_0x2f4717(0x166)],_0x5f53c9[_0x2f4717(0x83)]);_0x501a8b[_0x2f4717(0x14d)][_0x2f4717(0x137)][_0x2f4717(0xd1)](this,_0x224b71),this[_0x2f4717(0xdd)]['x']=this[_0x2f4717(0xdd)]['y']=_0x2552be['WINDOW_SCALE'],this[_0x2f4717(0x135)](),this[_0x2f4717(0xce)]='';}}const _0x48de71=_0x4154ca[_0x2f4717(0x11f)];if(_0x48de71[_0x2f4717(0xc1)](/\[Version[ ](.*?)\]/i)){const _0x1fdf0c=Number(RegExp['$1']);_0x1fdf0c!==VisuMZ[label][_0x2f4717(0x16a)]&&(alert(_0x2f4717(0x108)['format'](_0x5655f3,_0x1fdf0c)),SceneManager[_0x2f4717(0xc3)]());}if(_0x48de71[_0x2f4717(0xc1)](/\[Tier[ ](\d+)\]/i)){if(_0x2f4717(0xcb)===_0x2f4717(0x165))return this[_0x2f4717(0x97)]()?_0x24035b[_0x2f4717(0x15b)][_0x2f4717(0xbc)][_0x2f4717(0x85)][_0x2f4717(0x121)]()['trim']():_0x28157d[_0x2f4717(0x15b)][_0x2f4717(0xbc)][_0x2f4717(0xf9)][_0x2f4717(0x121)]()['trim']();else{const _0x8b25f=Number(RegExp['$1']);if(_0x8b25f<tier){if('iqPBr'===_0x2f4717(0xa1))alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x2f4717(0x98)](_0x5655f3,_0x8b25f,tier)),SceneManager[_0x2f4717(0xc3)]();else return _0xbb0d81[_0x2f4717(0x15b)][_0x2f4717(0xbc)][_0x2f4717(0xf9)][_0x2f4717(0x121)]()[_0x2f4717(0x119)]();}else _0x2f4717(0xe7)!==_0x2f4717(0xe7)?(_0x3ed105(_0x2f4717(0x108)[_0x2f4717(0x98)](_0xec69ba,_0x114b48)),_0x4e1c47['exit']()):tier=Math[_0x2f4717(0x148)](_0x8b25f,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x2f4717(0xbc)],_0x4154ca[_0x2f4717(0xa8)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],_0x267021(0x180),_0x3f5bc9=>{const _0x46dcdc=_0x267021;VisuMZ[_0x46dcdc(0x126)](_0x3f5bc9,_0x3f5bc9);const _0x3812ef=_0x3f5bc9[_0x46dcdc(0x15f)][_0x46dcdc(0x181)](_0x26fca5=>_0x26fca5[_0x46dcdc(0x175)]()['trim']());for(const _0x4bf60f of _0x3812ef){$gameSystem[_0x46dcdc(0xf5)](_0x4bf60f);}}),PluginManager[_0x267021(0x7d)](pluginData[_0x267021(0xd4)],_0x267021(0x177),_0x1380a2=>{const _0x1a2f5d=_0x267021;VisuMZ['ConvertParams'](_0x1380a2,_0x1380a2);const _0x4187b1=_0x1380a2[_0x1a2f5d(0x15f)][_0x1a2f5d(0x181)](_0x56a418=>_0x56a418[_0x1a2f5d(0x175)]()[_0x1a2f5d(0x119)]());for(const _0x4e8660 of _0x4187b1){$gameSystem['removeBattleVisibleVariableGauge'](_0x4e8660);}}),PluginManager[_0x267021(0x7d)](pluginData[_0x267021(0xd4)],'BattleRemoveAllGauge',_0x2b99bf=>{const _0x189243=_0x267021;VisuMZ[_0x189243(0x126)](_0x2b99bf,_0x2b99bf);const _0x2fe1e5=$gameSystem[_0x189243(0x174)]||[];for(const _0x4dbcdd of _0x2fe1e5){_0x189243(0x149)===_0x189243(0x8f)?_0x1a07b9[_0x189243(0x17f)][_0x189243(0x15d)](_0x1f3b6f):$gameSystem['removeBattleVisibleVariableGauge'](_0x4dbcdd);}}),PluginManager[_0x267021(0x7d)](pluginData[_0x267021(0xd4)],_0x267021(0x115),_0x450677=>{const _0x265546=_0x267021;VisuMZ['ConvertParams'](_0x450677,_0x450677);const _0x293236=_0x450677[_0x265546(0x15f)][_0x265546(0x181)](_0x2aad3b=>_0x2aad3b[_0x265546(0x175)]()['trim']());for(const _0x295da9 of _0x293236){'TRcRc'!==_0x265546(0xba)?$gameSystem[_0x265546(0xf1)](_0x295da9):this[_0x265546(0xb7)]=new _0x4090b2(_0x356a13['width'],_0x3b2bed[_0x265546(0x83)]);}}),PluginManager['registerCommand'](pluginData[_0x267021(0xd4)],'MapRemoveGauge',_0x40b132=>{const _0x309f1a=_0x267021;VisuMZ[_0x309f1a(0x126)](_0x40b132,_0x40b132);const _0x1f1b6a=_0x40b132[_0x309f1a(0x15f)][_0x309f1a(0x181)](_0x101ba9=>_0x101ba9[_0x309f1a(0x175)]()[_0x309f1a(0x119)]());for(const _0x4dfd1 of _0x1f1b6a){if(_0x309f1a(0xec)!==_0x309f1a(0xec)){_0x56f456['prototype'][_0x309f1a(0xc2)][_0x309f1a(0xd1)](this);const _0x527958=this['targetWindow']();_0x527958&&_0x527958['_key']===this[_0x309f1a(0xce)]&&_0x527958[_0x309f1a(0x12b)](null);}else $gameSystem[_0x309f1a(0x130)](_0x4dfd1);}}),PluginManager[_0x267021(0x7d)](pluginData[_0x267021(0xd4)],_0x267021(0x8e),_0x3067d3=>{const _0x358d3a=_0x267021;VisuMZ[_0x358d3a(0x126)](_0x3067d3,_0x3067d3);const _0x541832=$gameSystem[_0x358d3a(0x182)]||[];for(const _0xe0fe69 of _0x541832){_0x358d3a(0xd6)==='cOpZZ'?_0x21c608=_0x5c164f[_0x358d3a(0x148)](_0x514cc2,_0x754bf1):$gameSystem['removeMapVisibleVariableGauge'](_0xe0fe69);}}),PluginManager[_0x267021(0x7d)](pluginData[_0x267021(0xd4)],_0x267021(0x124),_0x746b85=>{const _0x4536bd=_0x267021;VisuMZ[_0x4536bd(0x126)](_0x746b85,_0x746b85);const _0x44b0e3=$gameSystem['visibleVariableGauges']()||[];for(const _0x427bb7 of _0x44b0e3){SceneManager[_0x4536bd(0x17f)][_0x4536bd(0x87)](_0x427bb7);}}),PluginManager[_0x267021(0x7d)](pluginData[_0x267021(0xd4)],_0x267021(0x129),_0x4cec2f=>{const _0x3484f3=_0x267021;VisuMZ[_0x3484f3(0x126)](_0x4cec2f,_0x4cec2f);const _0x2d1853=_0x4cec2f[_0x3484f3(0x15f)][_0x3484f3(0x181)](_0x43944c=>_0x43944c[_0x3484f3(0x175)]()['trim']());for(const _0x4c467b of _0x2d1853){SceneManager[_0x3484f3(0x17f)][_0x3484f3(0x87)](_0x4c467b);}}),PluginManager['registerCommand'](pluginData[_0x267021(0xd4)],_0x267021(0x154),_0xf41a4b=>{const _0x413287=_0x267021;VisuMZ[_0x413287(0x126)](_0xf41a4b,_0xf41a4b);const _0x44151d=_0xf41a4b['Visiblility'];$gameSystem['setVariableGaugesVisible'](_0x44151d);}),VisuMZ[_0x267021(0xf4)][_0x267021(0xee)]={'HideGauges':/<HIDE VARIABLE (?:GAUGE|GAUGES)>/i,'ForcedGauges':/<(?:FORCE|FORCED) VARIABLE (?:GAUGE|GAUGES):[ ](.*)>/i,'VisibleGauges':/<(?:EXTRA|VISIBLE) VARIABLE (?:GAUGE|GAUGES):[ ](.*)>/i},VisuMZ['VariableGauges']['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x267021(0x14d)]['onDatabaseLoaded'],Scene_Boot[_0x267021(0x14d)]['onDatabaseLoaded']=function(){const _0x1fd4eb=_0x267021;VisuMZ['VariableGauges'][_0x1fd4eb(0x156)][_0x1fd4eb(0xd1)](this),this[_0x1fd4eb(0xd3)]();},VisuMZ[_0x267021(0xf4)]['GaugeKey']={},VisuMZ[_0x267021(0xf4)][_0x267021(0xf3)]=[],VisuMZ[_0x267021(0xf4)][_0x267021(0xd0)]=[],VisuMZ[_0x267021(0xf4)][_0x267021(0x170)]={},Scene_Boot[_0x267021(0x14d)][_0x267021(0xd3)]=function(){const _0x3b5b32=_0x267021,_0x2b6c6a=VisuMZ[_0x3b5b32(0xf4)][_0x3b5b32(0xbc)][_0x3b5b32(0x151)];for(const _0x53343c of _0x2b6c6a){if(!_0x53343c)continue;const _0x1e48a9=_0x53343c[_0x3b5b32(0x14b)]['toUpperCase']()[_0x3b5b32(0x119)]();if(_0x1e48a9==='>>>ATTENTION<<<'&&Utils[_0x3b5b32(0xbd)]('test')){let _0x488464=_0x3b5b32(0xcc);_0x488464+=_0x3b5b32(0x113),alert(_0x488464),SceneManager[_0x3b5b32(0xc3)]();}if(VisuMZ[_0x3b5b32(0xf4)]['GaugeKey'][_0x1e48a9])continue;VisuMZ[_0x3b5b32(0xf4)][_0x3b5b32(0x158)][_0x1e48a9]=_0x53343c;_0x53343c[_0x3b5b32(0x90)]&&VisuMZ['VariableGauges'][_0x3b5b32(0xf3)][_0x3b5b32(0xdc)](_0x1e48a9);_0x53343c[_0x3b5b32(0xd5)]&&VisuMZ[_0x3b5b32(0xf4)][_0x3b5b32(0xd0)][_0x3b5b32(0xdc)](_0x1e48a9);const _0x30f093=_0x53343c[_0x3b5b32(0x114)];VisuMZ[_0x3b5b32(0xf4)]['VariableReference'][_0x30f093]=VisuMZ['VariableGauges'][_0x3b5b32(0x170)][_0x30f093]||[],VisuMZ[_0x3b5b32(0xf4)]['VariableReference'][_0x30f093][_0x3b5b32(0xdc)](_0x1e48a9);}},ColorManager[_0x267021(0x13c)]=function(_0x414912){const _0x2076cd=_0x267021;return _0x414912=String(_0x414912),_0x414912[_0x2076cd(0xc1)](/#(.*)/i)?_0x2076cd(0x10f)[_0x2076cd(0x98)](String(RegExp['$1'])):this[_0x2076cd(0x17e)](Number(_0x414912));},SceneManager['isSceneBattle']=function(){const _0x14d1cf=_0x267021;return this['_scene']&&this[_0x14d1cf(0x17f)][_0x14d1cf(0xb2)]===Scene_Battle;},SceneManager[_0x267021(0xcf)]=function(){const _0x11744e=_0x267021;return this[_0x11744e(0x17f)]&&this[_0x11744e(0x17f)]['constructor']===Scene_Map;},VisuMZ['VariableGauges'][_0x267021(0x104)]=Game_System[_0x267021(0x14d)][_0x267021(0x137)],Game_System['prototype'][_0x267021(0x137)]=function(){const _0x4bae48=_0x267021;VisuMZ[_0x4bae48(0xf4)][_0x4bae48(0x104)]['call'](this),this[_0x4bae48(0x17a)]();},Game_System[_0x267021(0x14d)]['initVariableGauges']=function(){const _0x5c08c7=_0x267021;this[_0x5c08c7(0x182)]=VisuMZ[_0x5c08c7(0xf4)][_0x5c08c7(0xf3)][_0x5c08c7(0x95)](),this[_0x5c08c7(0x174)]=VisuMZ[_0x5c08c7(0xf4)][_0x5c08c7(0xd0)]['clone'](),this[_0x5c08c7(0x12e)]=!![];},Game_System[_0x267021(0x14d)][_0x267021(0x139)]=function(){const _0x22bcdc=_0x267021;if(this['_mapVisibleVariableGauges']===undefined)this[_0x22bcdc(0x17a)]();if(this['_battleVisibleVariableGauges']===undefined)this['initVariableGauges']();if(SceneManager[_0x22bcdc(0xcf)]()){let _0x31d1c2=this['_mapVisibleVariableGauges']['clone']();if($gameMap){if($gameMap['hideVariableGauges']())return[];else{if($gameMap['forcedVariableGauges']()[_0x22bcdc(0xab)]>0x0)return $gameMap[_0x22bcdc(0x9c)]();}$gameMap[_0x22bcdc(0x139)]()['length']>0x0&&(_0x31d1c2=_0x31d1c2[_0x22bcdc(0x136)]($gameMap[_0x22bcdc(0x139)]()));}return _0x31d1c2[_0x22bcdc(0x161)]((_0x43961b,_0xc3c5a4,_0x1bf909)=>_0x1bf909[_0x22bcdc(0xed)](_0x43961b)===_0xc3c5a4);}else return SceneManager[_0x22bcdc(0xa2)]()?this[_0x22bcdc(0x174)]:[];},Game_System['prototype']['isVariableGaugeVisible']=function(_0x30b800){const _0x34edad=_0x267021;return _0x30b800=_0x30b800[_0x34edad(0x175)]()[_0x34edad(0x119)](),this['visibleVariableGauges']()['includes'](_0x30b800);},Game_System[_0x267021(0x14d)][_0x267021(0xf1)]=function(_0x2f2610){const _0x386d2f=_0x267021;if(this[_0x386d2f(0x182)]===undefined)this[_0x386d2f(0x17a)]();_0x2f2610=_0x2f2610[_0x386d2f(0x175)]()[_0x386d2f(0x119)]();if(!VisuMZ[_0x386d2f(0xf4)][_0x386d2f(0x158)][_0x2f2610])return;if(!this[_0x386d2f(0x182)][_0x386d2f(0xd2)](_0x2f2610)){if(_0x386d2f(0x150)!==_0x386d2f(0x110)){this['_mapVisibleVariableGauges'][_0x386d2f(0xdc)](_0x2f2610);if(SceneManager[_0x386d2f(0xcf)]()){if(_0x386d2f(0x142)===_0x386d2f(0xfb)){const _0x131290=this[_0x386d2f(0x166)]*(_0xab547d[_0x386d2f(0x91)]||0.01),_0x3ae6cd=this['height']*(_0x151596[_0x386d2f(0x91)]||0.01);this['x']=_0x47b9c9[_0x386d2f(0xb8)](this['x'][_0x386d2f(0x93)](0x0,_0x3f6e15[_0x386d2f(0x166)]-_0x131290)),this['y']=_0x29e1a7[_0x386d2f(0xb8)](this['y'][_0x386d2f(0x93)](0x0,_0x4a36ad[_0x386d2f(0x83)]-_0x3ae6cd));}else SceneManager[_0x386d2f(0x17f)][_0x386d2f(0xd8)](_0x2f2610);}}else{const _0x29c176=this[_0x386d2f(0x99)](),_0x3958a1=_0x5a638a[_0x386d2f(0x13c)](this[_0x386d2f(0x10e)]()[_0x386d2f(0xaa)]),_0x3be3aa=_0x4d48d4['getColor'](this[_0x386d2f(0x10e)]()['Color2']),_0x557ad1=this[_0x386d2f(0x97)](),_0x4e020b=_0x557ad1?_0x2f31cb['floor']((_0x3e554a[_0x386d2f(0x166)]-0x2)*_0x29c176):_0x2fb4d8[_0x386d2f(0x166)]-0x2,_0x365aea=_0x557ad1?_0x3b838e[_0x386d2f(0x83)]-0x2:_0x401da5[_0x386d2f(0x143)]((_0x410dca['height']-0x2)*_0x29c176),_0x219060=_0x557ad1?0x1:_0x28ce5b['height']-0x1-_0x365aea,_0x32a31d=_0x557ad1?_0x3958a1:_0x3be3aa,_0x20abb1=_0x557ad1?_0x3be3aa:_0x3958a1;this['bitmap'][_0x386d2f(0xe5)](0x1,_0x219060,_0x4e020b,_0x365aea,_0x32a31d,_0x20abb1,!_0x557ad1);}}},Game_System[_0x267021(0x14d)][_0x267021(0x130)]=function(_0x24177d){const _0x265312=_0x267021;if(this[_0x265312(0x182)]===undefined)this['initVariableGauges']();_0x24177d=_0x24177d['toUpperCase']()['trim'](),this[_0x265312(0x182)][_0x265312(0xd2)](_0x24177d)&&(this[_0x265312(0x182)][_0x265312(0xda)](_0x24177d),SceneManager[_0x265312(0xcf)]()&&(_0x265312(0x125)===_0x265312(0x125)?SceneManager['_scene'][_0x265312(0x15d)](_0x24177d):(_0x25aac0[_0x265312(0x14d)][_0x265312(0x102)][_0x265312(0xd1)](this),this[_0x265312(0x10d)](),this[_0x265312(0x134)](),this[_0x265312(0x8b)]())));},Game_System[_0x267021(0x14d)][_0x267021(0xf5)]=function(_0x27623b){const _0x4cd4a0=_0x267021;if(this[_0x4cd4a0(0x174)]===undefined)this['initVariableGauges']();_0x27623b=_0x27623b[_0x4cd4a0(0x175)]()[_0x4cd4a0(0x119)]();if(!VisuMZ['VariableGauges'][_0x4cd4a0(0x158)][_0x27623b])return;if(!this[_0x4cd4a0(0x174)]['includes'](_0x27623b)){this[_0x4cd4a0(0x174)]['push'](_0x27623b);if(SceneManager[_0x4cd4a0(0xa2)]()){if(_0x4cd4a0(0xb5)!==_0x4cd4a0(0xb5)){let _0x20f857=0xff;if(_0x187d62['x']<=0x0)_0x20f857=0x0;if(_0x537be5['x']>=_0x58759d['width'])_0x20f857=0x0;if(_0x3967b0['y']<=0x0)_0x20f857=0x0;if(_0x2faec0['y']>=_0x183e90[_0x4cd4a0(0x83)])_0x20f857=0x0;this[_0x4cd4a0(0x17c)]=_0x20f857;}else SceneManager['_scene'][_0x4cd4a0(0xd8)](_0x27623b);}}},Game_System[_0x267021(0x14d)][_0x267021(0x13d)]=function(_0x4ed420){const _0x7a80ba=_0x267021;if(this['_battleVisibleVariableGauges']===undefined)this[_0x7a80ba(0x17a)]();_0x4ed420=_0x4ed420[_0x7a80ba(0x175)]()[_0x7a80ba(0x119)]();if(this['_battleVisibleVariableGauges'][_0x7a80ba(0xd2)](_0x4ed420)){if(_0x7a80ba(0x14f)==='oarNY'){this[_0x7a80ba(0x112)]();const _0x1f945e=this['baseTextRect']();this[_0x7a80ba(0x131)](this[_0x7a80ba(0x82)],_0x1f945e['x'],_0x1f945e['y'],_0x1f945e[_0x7a80ba(0x166)]),this[_0x7a80ba(0xa5)]();}else this[_0x7a80ba(0x174)][_0x7a80ba(0xda)](_0x4ed420),SceneManager[_0x7a80ba(0xa2)]()&&SceneManager['_scene'][_0x7a80ba(0x15d)](_0x4ed420);}},Game_System[_0x267021(0x14d)]['areVariableGaugesVisible']=function(){const _0x37c484=_0x267021;if(this[_0x37c484(0x12e)]===undefined)this[_0x37c484(0x17a)]();return this[_0x37c484(0x12e)];},Game_System[_0x267021(0x14d)][_0x267021(0x14c)]=function(_0x650e4a){const _0x2790bb=_0x267021;if(this[_0x2790bb(0x12e)]===undefined)this[_0x2790bb(0x17a)]();this[_0x2790bb(0x12e)]=_0x650e4a;const _0x1afb93=SceneManager['_scene'];_0x1afb93&&_0x1afb93['updateVariableGaugeVisibility']();},VisuMZ[_0x267021(0xf4)]['Game_Variables_setValue']=Game_Variables[_0x267021(0x14d)][_0x267021(0x17b)],Game_Variables['prototype'][_0x267021(0x17b)]=function(_0x39e097,_0x55ef74){const _0x3ba587=_0x267021;VisuMZ[_0x3ba587(0xf4)]['Game_Variables_setValue']['call'](this,_0x39e097,_0x55ef74),this['updateVariableGauges'](_0x39e097);},Game_Variables[_0x267021(0x14d)][_0x267021(0x106)]=function(_0x5a2e27){const _0x5bdbb1=_0x267021;if(!SceneManager[_0x5bdbb1(0xa2)]()&&!SceneManager['isSceneMap']())return;if(VisuMZ[_0x5bdbb1(0xf4)][_0x5bdbb1(0x170)][_0x5a2e27]){if('BkBJk'!=='BkBJk')this[_0x5bdbb1(0x94)]&&(this[_0x5bdbb1(0x94)][_0x5bdbb1(0x146)]=_0x4066e3['areVariableGaugesVisible']());else{const _0x400500=VisuMZ['VariableGauges'][_0x5bdbb1(0x170)][_0x5a2e27];for(const _0x5f5423 of _0x400500){'qouTp'!==_0x5bdbb1(0x128)?(this[_0x5bdbb1(0xdb)](),this[_0x5bdbb1(0x134)]()):SceneManager[_0x5bdbb1(0x17f)][_0x5bdbb1(0x87)](_0x5f5423);}}}},Game_Map[_0x267021(0x14d)][_0x267021(0xf6)]=function(){const _0x64bf41=_0x267021;if($dataMap){const _0x4d48f5=VisuMZ[_0x64bf41(0xf4)][_0x64bf41(0xee)],_0x4b0605=$dataMap[_0x64bf41(0x144)]||'';if(_0x4b0605[_0x64bf41(0xc1)](_0x4d48f5[_0x64bf41(0xff)]))return!![];}return![];},Game_Map[_0x267021(0x14d)][_0x267021(0x9c)]=function(){const _0x3663c2=_0x267021;if($dataMap){if(_0x3663c2(0x145)!==_0x3663c2(0xfe)){const _0x50c95b=VisuMZ[_0x3663c2(0xf4)][_0x3663c2(0xee)],_0x4bad63=$dataMap[_0x3663c2(0x144)]||'';if(_0x4bad63[_0x3663c2(0xc1)](_0x50c95b[_0x3663c2(0xc5)])){if(_0x3663c2(0x122)!=='oQNes'){const _0x5aba8d=_0x15bcfa(_0x3bb470['$1'])['split'](',')[_0x3663c2(0x181)](_0x353095=>_0x353095[_0x3663c2(0x175)]()[_0x3663c2(0x119)]());return _0x5aba8d;}else{const _0x1aeed9=String(RegExp['$1'])[_0x3663c2(0xa0)](',')[_0x3663c2(0x181)](_0x435fe6=>_0x435fe6[_0x3663c2(0x175)]()[_0x3663c2(0x119)]());return _0x1aeed9;}}}else return _0x2025ca=_0x8ed33e['toUpperCase']()[_0x3663c2(0x119)](),this[_0x3663c2(0x139)]()[_0x3663c2(0xd2)](_0x1f4890);}return[];},Game_Map['prototype'][_0x267021(0x139)]=function(){const _0x54fe8c=_0x267021;if($dataMap){const _0x384339=VisuMZ[_0x54fe8c(0xf4)]['RegExp'],_0x1fabd0=$dataMap[_0x54fe8c(0x144)]||'';if(_0x1fabd0['match'](_0x384339[_0x54fe8c(0x9b)])){if(_0x54fe8c(0xac)===_0x54fe8c(0xac)){const _0x19a37d=String(RegExp['$1'])[_0x54fe8c(0xa0)](',')[_0x54fe8c(0x181)](_0x81bca7=>_0x81bca7[_0x54fe8c(0x175)]()[_0x54fe8c(0x119)]());return _0x19a37d;}else{const _0x3d6f45=this[_0x54fe8c(0x159)]()['toLowerCase']()[_0x54fe8c(0x119)](),_0x2e7d6d=this[_0x54fe8c(0x101)]['clamp'](0x0,0x1),_0x4a8bae=this[_0x54fe8c(0x10e)]()[_0x54fe8c(0xe4)]['call'](this);_0x453832['VisualGaugeStyles']['_maxValueSegment']=_0x4a8bae||0x64;const _0xbebc60=_0x5f1d25[_0x54fe8c(0xa4)](),_0x4b6527=_0x1f5a60[_0x54fe8c(0x13c)](this[_0x54fe8c(0x10e)]()[_0x54fe8c(0xaa)]),_0x594f5e=_0x55a230[_0x54fe8c(0x13c)](this['settings']()[_0x54fe8c(0xde)]);if(this[_0x54fe8c(0x97)]())this[_0x54fe8c(0xb7)][_0x54fe8c(0xfc)](),this[_0x54fe8c(0xb7)][_0x54fe8c(0x167)](_0x3d6f45,0x0,0x0,_0x434597[_0x54fe8c(0x166)],_0x35190f[_0x54fe8c(0x83)],_0x2e7d6d,_0xbebc60,_0x4b6527,_0x594f5e);else{const _0x3863ac=this[_0x54fe8c(0xfd)][_0x54fe8c(0xb7)];_0x3863ac[_0x54fe8c(0xfc)](),_0x3863ac[_0x54fe8c(0x167)](_0x3d6f45,0x0,0x0,_0x5099b2[_0x54fe8c(0x83)],_0x2190c0[_0x54fe8c(0x166)],_0x2e7d6d,_0xbebc60,_0x4b6527,_0x594f5e);}}}}return[];},VisuMZ[_0x267021(0xf4)][_0x267021(0x15e)]=Scene_Base[_0x267021(0x14d)][_0x267021(0x8d)],Scene_Base[_0x267021(0x14d)][_0x267021(0x8d)]=function(){const _0x2d2a6b=_0x267021;this[_0x2d2a6b(0x118)](),this['createVariableGaugeSprites'](),this[_0x2d2a6b(0x12d)](),VisuMZ['VariableGauges'][_0x2d2a6b(0x15e)]['call'](this),this[_0x2d2a6b(0x109)]();},Scene_Base[_0x267021(0x14d)][_0x267021(0x118)]=function(){const _0x18b80e=_0x267021;this[_0x18b80e(0x94)]=new Sprite(),this[_0x18b80e(0x160)](this[_0x18b80e(0x94)]);},Scene_Base['prototype'][_0x267021(0x153)]=function(){const _0x3580f5=_0x267021,_0x53013c=$gameSystem['visibleVariableGauges']();for(let _0x50bf32 of _0x53013c){if(_0x3580f5(0x8c)==='VFHtN')this[_0x3580f5(0x174)][_0x3580f5(0xdc)](_0x199166),_0x4ccffa[_0x3580f5(0xa2)]()&&_0x4191e5[_0x3580f5(0x17f)][_0x3580f5(0xd8)](_0x4ad933);else{_0x50bf32=_0x50bf32[_0x3580f5(0x175)]()[_0x3580f5(0x119)]();if(!VisuMZ['VariableGauges']['GaugeKey'][_0x50bf32])continue;this[_0x3580f5(0xd8)](_0x50bf32);}}},Scene_Base[_0x267021(0x14d)]['createNewVariableGaugeSprites']=function(_0x3b205b){const _0x360125=_0x267021;_0x3b205b=_0x3b205b[_0x360125(0x175)]()['trim']();if($gameMap){if(_0x360125(0x10c)!==_0x360125(0x163)){if($gameMap[_0x360125(0xf6)]())return;if($gameMap[_0x360125(0x9c)]()[_0x360125(0xab)]>0x0){if(_0x360125(0x178)!=='oNyaG'){_0x165ae9[_0x360125(0x126)](_0x3f4a66,_0x25b1ed);const _0x67568e=_0x1a645b[_0x360125(0x15f)][_0x360125(0x181)](_0x1709ab=>_0x1709ab[_0x360125(0x175)]()['trim']());for(const _0x59f2cc of _0x67568e){_0x48d6f5[_0x360125(0x13d)](_0x59f2cc);}}else{if(!$gameMap['forcedVariableGauges']()[_0x360125(0xd2)](_0x3b205b))return;}}}else this[_0x360125(0x16b)]['x']=_0x144928[_0x360125(0xb8)]((this['bitmap'][_0x360125(0x166)]-_0x1af716[_0x360125(0xca)])/0x2),this[_0x360125(0x16b)]['y']=this['bitmap'][_0x360125(0x83)]+_0x2707b3;}const _0x4fefd1=this[_0x360125(0x94)][_0x360125(0x80)],_0x444491=_0x4fefd1[_0x360125(0xf8)](_0x434d08=>_0x434d08[_0x360125(0xce)]===_0x3b205b);if(!_0x444491){const _0x5a9568=new Sprite_VariableGauge(_0x3b205b);this[_0x360125(0x94)][_0x360125(0x160)](_0x5a9568);}},Scene_Base[_0x267021(0x14d)]['refreshVariableGauge']=function(_0x2afdc9){const _0x1f7681=_0x267021;_0x2afdc9=_0x2afdc9[_0x1f7681(0x175)]()[_0x1f7681(0x119)]();const _0x2d166a=this[_0x1f7681(0x94)][_0x1f7681(0x80)],_0x4b5569=_0x2d166a[_0x1f7681(0xf8)](_0x4ca447=>_0x4ca447[_0x1f7681(0xce)]===_0x2afdc9);_0x4b5569&&(_0x1f7681(0xb9)===_0x1f7681(0xc7)?_0x53880d[_0x1f7681(0x17f)]['refreshVariableGauge'](_0x53d997):_0x4b5569['refresh']());},Scene_Base[_0x267021(0x14d)][_0x267021(0x15d)]=function(_0x2fd2a7){const _0x596cf0=_0x267021;_0x2fd2a7=_0x2fd2a7[_0x596cf0(0x175)]()['trim']();const _0x1b0898=this[_0x596cf0(0x94)][_0x596cf0(0x80)],_0x91e057=_0x1b0898['find'](_0x4d08b8=>_0x4d08b8['_key']===_0x2fd2a7);_0x91e057&&this['_variableGaugeLayer']['removeChild'](_0x91e057);},Scene_Base['prototype'][_0x267021(0x109)]=function(){const _0x2dfbf2=_0x267021;this[_0x2dfbf2(0xe0)]=new Window_VariableGaugeTooltip(),this[_0x2dfbf2(0x160)](this[_0x2dfbf2(0xe0)]);},Scene_Base[_0x267021(0x14d)]['updateVariableGaugeVisibility']=function(){const _0x14cdec=_0x267021;this[_0x14cdec(0x94)]&&(this[_0x14cdec(0x94)]['visible']=$gameSystem[_0x14cdec(0xb0)]());},VisuMZ['VariableGauges'][_0x267021(0x176)]=Scene_Battle[_0x267021(0x14d)][_0x267021(0xc0)],Scene_Battle[_0x267021(0x14d)][_0x267021(0xc0)]=function(_0x1ceaf8){const _0x13e88b=_0x267021;VisuMZ['VariableGauges'][_0x13e88b(0x176)][_0x13e88b(0xd1)](this,_0x1ceaf8);if(this['_variableGaugeLayer']){if('NtBOv'===_0x13e88b(0x141)){_0x5a0e19[_0x13e88b(0x126)](_0xabf459,_0x403d06);const _0x3abb39=_0x4748ad[_0x13e88b(0x139)]()||[];for(const _0x18fba1 of _0x3abb39){_0x293126['_scene']['refreshVariableGauge'](_0x18fba1);}}else this[_0x13e88b(0x94)][_0x13e88b(0x146)]=_0x1ceaf8&&$gameSystem[_0x13e88b(0xb0)]();}};function Sprite_VariableGauge(){const _0x237982=_0x267021;this[_0x237982(0x137)](...arguments);}Sprite_VariableGauge[_0x267021(0x14d)]=Object[_0x267021(0xea)](Sprite_Clickable[_0x267021(0x14d)]),Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0xb2)]=Sprite_VariableGauge,Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x137)]=function(_0x4ed4a6){const _0x3d5954=_0x267021;Sprite_Clickable['prototype'][_0x3d5954(0x137)][_0x3d5954(0xd1)](this),this['_key']=_0x4ed4a6['toUpperCase']()[_0x3d5954(0x119)](),this[_0x3d5954(0x13a)]=![],this[_0x3d5954(0x13f)](),this[_0x3d5954(0x103)](),this[_0x3d5954(0x11e)]();},Sprite_VariableGauge['prototype'][_0x267021(0x10e)]=function(){const _0x1b53ce=_0x267021;return VisuMZ['VariableGauges']['GaugeKey'][this[_0x1b53ce(0xce)]];},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x97)]=function(){const _0x3cf745=_0x267021;return this[_0x3cf745(0x10e)]()['Type']===_0x3cf745(0x96);},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x102)]=function(){const _0x15201b=_0x267021;Sprite_Clickable[_0x15201b(0x14d)]['update'][_0x15201b(0xd1)](this),this[_0x15201b(0x10d)](),this[_0x15201b(0x134)](),this[_0x15201b(0x8b)]();},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x11e)]=function(){const _0x378991=_0x267021;this[_0x378991(0x16b)]=new Sprite(),this[_0x378991(0x160)](this['_iconSprite']),this['_iconSprite'][_0x378991(0xb7)]=ImageManager[_0x378991(0x9f)](_0x378991(0x111)),this[_0x378991(0xa7)]();},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0xa7)]=function(){const _0x518ed5=_0x267021;this[_0x518ed5(0xdb)](),this['updateIconSpriteFrame']();},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0xdb)]=function(){const _0x40d2bb=_0x267021;if(!this[_0x40d2bb(0x16b)])return;const _0x69623e=this[_0x40d2bb(0x10e)]()[_0x40d2bb(0x155)];if(this['isHorizontal']()){if('rpRyM'===_0x40d2bb(0xb1))return![];else this[_0x40d2bb(0x16b)]['x']=-ImageManager[_0x40d2bb(0xca)]-_0x69623e,this[_0x40d2bb(0x16b)]['y']=Math[_0x40d2bb(0xb8)]((this['bitmap'][_0x40d2bb(0x83)]-ImageManager[_0x40d2bb(0x133)])/0x2);}else{if(_0x40d2bb(0x15c)===_0x40d2bb(0x15c))this[_0x40d2bb(0x16b)]['x']=Math[_0x40d2bb(0xb8)]((this[_0x40d2bb(0xb7)][_0x40d2bb(0x166)]-ImageManager[_0x40d2bb(0xca)])/0x2),this[_0x40d2bb(0x16b)]['y']=this[_0x40d2bb(0xb7)][_0x40d2bb(0x83)]+_0x69623e;else{if(this['_key']===_0x3e001e)return;if(_0x220f62!==null&&!_0xed819[_0x40d2bb(0xf4)][_0x40d2bb(0x158)][_0x28cb6e])return;this[_0x40d2bb(0xce)]=_0x2634cd||'',this[_0x40d2bb(0xce)][_0x40d2bb(0x119)]()['length']>0x0?this[_0x40d2bb(0x16e)]():this[_0x40d2bb(0x135)]();}}},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x134)]=function(){const _0x2f142a=_0x267021;if(!this[_0x2f142a(0x16b)])return;if(this[_0x2f142a(0x11c)]===this[_0x2f142a(0x10e)]()[_0x2f142a(0x92)])return;this[_0x2f142a(0x11c)]=this[_0x2f142a(0x10e)]()['IconIndex'];const _0x56311c=ImageManager[_0x2f142a(0xca)],_0x2be58c=ImageManager[_0x2f142a(0x133)],_0x23c5bb=this[_0x2f142a(0x11c)]%0x10*_0x56311c,_0x1c5f59=Math[_0x2f142a(0x143)](this['_iconIndex']/0x10)*_0x2be58c;this[_0x2f142a(0x16b)][_0x2f142a(0xe6)](_0x23c5bb,_0x1c5f59,_0x56311c,_0x2be58c);},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x16e)]=function(){const _0x3c34c1=_0x267021;this[_0x3c34c1(0x13a)]=!![];},Sprite_VariableGauge['prototype'][_0x267021(0x10d)]=function(){const _0x460efd=_0x267021;if(!this[_0x460efd(0x13a)])return;this['refreshBitmap'](),this['_requestRefresh']=![];},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x103)]=function(){const _0xe83934=_0x267021,_0x2f7de4=this[_0xe83934(0x10e)]()[_0xe83934(0xc9)][_0xe83934(0xd1)](this);this[_0xe83934(0x100)](_0x2f7de4),this[_0xe83934(0xef)](_0x2f7de4),this[_0xe83934(0x86)](_0x2f7de4);},Sprite_VariableGauge['prototype']['adjustPosition']=function(_0x1feafd){this['x']=_0x1feafd['x'],this['y']=_0x1feafd['y'];},Sprite_VariableGauge['prototype'][_0x267021(0xef)]=function(_0x3751ab){const _0x3f4166=_0x267021;this['bitmap']?_0x3f4166(0x7f)!==_0x3f4166(0xb4)?(this[_0x3f4166(0xb7)]['width']!==_0x3751ab[_0x3f4166(0x166)]||this['bitmap']['height']!==_0x3751ab[_0x3f4166(0x83)])&&('eSWRe'==='PZYGi'?_0x16a9d0['_scene'][_0x3f4166(0xd8)](_0x55592a):(this[_0x3f4166(0xb7)][_0x3f4166(0x123)](_0x3751ab[_0x3f4166(0x166)],_0x3751ab['height']),this[_0x3f4166(0xa7)]())):(this['_iconSprite']=new _0x3f332e(),this['addChild'](this['_iconSprite']),this['_iconSprite'][_0x3f4166(0xb7)]=_0x5a5dff[_0x3f4166(0x9f)](_0x3f4166(0x111)),this[_0x3f4166(0xa7)]()):this['bitmap']=new Bitmap(_0x3751ab[_0x3f4166(0x166)],_0x3751ab[_0x3f4166(0x83)]),this[_0x3f4166(0xf2)](_0x3751ab);},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x99)]=function(){const _0x1ba7c6=_0x267021,_0x1e9900=this['settings']()[_0x1ba7c6(0x114)];let _0x11ca7a=$gameVariables[_0x1ba7c6(0x14a)](_0x1e9900)||0x0;if(typeof _0x11ca7a!==_0x1ba7c6(0x13b))_0x11ca7a=0x0;const _0x41de4e=this[_0x1ba7c6(0x10e)]()[_0x1ba7c6(0xe4)]['call'](this),_0x47dfed=(_0x11ca7a/_0x41de4e)[_0x1ba7c6(0x93)](0x0,0x1);return _0x47dfed;},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x86)]=function(_0x3a2e9f){const _0x31d24f=_0x267021,_0x105522=this['getGaugeRate']();if(this[_0x31d24f(0x101)]===_0x105522)return;this[_0x31d24f(0x101)]=_0x105522;if(this[_0x31d24f(0x159)]()!==''){if('eRrDK'==='NGdWy'){_0x2e2f89=_0x390b6e['toUpperCase']()['trim']();if(_0x4c99c4){if(_0x241e2b[_0x31d24f(0xf6)]())return;if(_0x2c3190['forcedVariableGauges']()[_0x31d24f(0xab)]>0x0){if(!_0x2be586[_0x31d24f(0x9c)]()[_0x31d24f(0xd2)](_0x4f8d7e))return;}}const _0x14bcd2=this['_variableGaugeLayer']['children'],_0x36c6e9=_0x14bcd2[_0x31d24f(0xf8)](_0x2935b1=>_0x2935b1['_key']===_0x34e4be);if(!_0x36c6e9){const _0x9ccb54=new _0x5f0002(_0x5f2c75);this[_0x31d24f(0x94)]['addChild'](_0x9ccb54);}}else this[_0x31d24f(0x167)](_0x3a2e9f);}else'UviNt'!=='UviNt'?_0x2f3672=_0x217092['concat'](_0x1ea7e2[_0x31d24f(0x139)]()):(this[_0x31d24f(0xcd)](_0x3a2e9f),this[_0x31d24f(0x7e)](_0x3a2e9f));},Sprite_VariableGauge['prototype'][_0x267021(0xcd)]=function(_0x348319){const _0x3a7500=_0x267021,_0x5d2d03=ColorManager[_0x3a7500(0xa4)]();this[_0x3a7500(0xb7)]['fillRect'](0x0,0x0,_0x348319[_0x3a7500(0x166)],_0x348319[_0x3a7500(0x83)],_0x5d2d03);},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x7e)]=function(_0x15beb3){const _0x2f24c4=_0x267021,_0x171b3a=this['getGaugeRate'](),_0x55fe50=ColorManager[_0x2f24c4(0x13c)](this[_0x2f24c4(0x10e)]()['Color1']),_0x2280d0=ColorManager[_0x2f24c4(0x13c)](this[_0x2f24c4(0x10e)]()[_0x2f24c4(0xde)]),_0x6a79ef=this['isHorizontal'](),_0x49f65c=_0x6a79ef?Math[_0x2f24c4(0x143)]((_0x15beb3[_0x2f24c4(0x166)]-0x2)*_0x171b3a):_0x15beb3[_0x2f24c4(0x166)]-0x2,_0x15e24b=_0x6a79ef?_0x15beb3[_0x2f24c4(0x83)]-0x2:Math[_0x2f24c4(0x143)]((_0x15beb3[_0x2f24c4(0x83)]-0x2)*_0x171b3a),_0x4d1da5=_0x6a79ef?0x1:_0x15beb3['height']-0x1-_0x15e24b,_0x4506ec=_0x6a79ef?_0x55fe50:_0x2280d0,_0x5850e6=_0x6a79ef?_0x2280d0:_0x55fe50;this[_0x2f24c4(0xb7)][_0x2f24c4(0xe5)](0x1,_0x4d1da5,_0x49f65c,_0x15e24b,_0x4506ec,_0x5850e6,!_0x6a79ef);},Sprite_VariableGauge['prototype'][_0x267021(0x159)]=function(){const _0x5cd8b6=_0x267021;if(!Imported['VisuMZ_3_VisualGaugeStyles'])return'';return this[_0x5cd8b6(0xb3)]();},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0xb3)]=function(){const _0x4d78a6=_0x267021,_0x448aeb=(this[_0x4d78a6(0x10e)]()['Style']??_0x4d78a6(0xf0))['toLowerCase']()['trim']();if(_0x448aeb===_0x4d78a6(0xf0))return this[_0x4d78a6(0x97)]()?VisuMZ[_0x4d78a6(0x15b)]['Settings'][_0x4d78a6(0x85)]['toLowerCase']()['trim']():VisuMZ[_0x4d78a6(0x15b)]['Settings'][_0x4d78a6(0xf9)][_0x4d78a6(0x121)]()[_0x4d78a6(0x119)]();return _0x448aeb;},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x167)]=function(_0x3cda02){const _0xb887d3=_0x267021,_0x36c928=this[_0xb887d3(0x159)]()[_0xb887d3(0x121)]()[_0xb887d3(0x119)](),_0x3e6e1e=this['_lastRate'][_0xb887d3(0x93)](0x0,0x1),_0x1ee383=this[_0xb887d3(0x10e)]()[_0xb887d3(0xe4)]['call'](this);VisuMZ[_0xb887d3(0x15b)][_0xb887d3(0x127)]=_0x1ee383||0x64;const _0x3e74d3=ColorManager['gaugeBackColor'](),_0xbd303b=ColorManager[_0xb887d3(0x13c)](this[_0xb887d3(0x10e)]()[_0xb887d3(0xaa)]),_0x2e8a95=ColorManager[_0xb887d3(0x13c)](this['settings']()['Color2']);if(this[_0xb887d3(0x97)]())this['bitmap']['clear'](),this[_0xb887d3(0xb7)][_0xb887d3(0x167)](_0x36c928,0x0,0x0,_0x3cda02[_0xb887d3(0x166)],_0x3cda02[_0xb887d3(0x83)],_0x3e6e1e,_0x3e74d3,_0xbd303b,_0x2e8a95);else{if(_0xb887d3(0x168)==='wbbWL'){const _0x517f59=this[_0xb887d3(0xfd)][_0xb887d3(0xb7)];_0x517f59[_0xb887d3(0xfc)](),_0x517f59[_0xb887d3(0x167)](_0x4893a0,0x0,0x0,_0x105231[_0xb887d3(0x83)],_0x37e911[_0xb887d3(0x166)],_0x2cce4a,_0x33f48c,_0x24411e,_0x1e3d56);}else{const _0x2344b8=this[_0xb887d3(0xfd)][_0xb887d3(0xb7)];_0x2344b8[_0xb887d3(0xfc)](),_0x2344b8['drawVisualStyleGauge'](_0x36c928,0x0,0x0,_0x3cda02[_0xb887d3(0x83)],_0x3cda02[_0xb887d3(0x166)],_0x3e6e1e,_0x3e74d3,_0xbd303b,_0x2e8a95);}}},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x13f)]=function(){const _0x3b5386=_0x267021;this[_0x3b5386(0xfd)]=new Sprite(),this[_0x3b5386(0x160)](this[_0x3b5386(0xfd)]),this[_0x3b5386(0xfd)]['anchor']['x']=0x0,this['_verticalGaugeSprite'][_0x3b5386(0x138)]['y']=0.5,this['_verticalGaugeSprite'][_0x3b5386(0x132)]=-0x5a;},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0xf2)]=function(_0x490b14){const _0x337a88=_0x267021;if(!this['_verticalGaugeSprite'])return;if(this['_verticalGaugeSprite']['bitmap'])(this[_0x337a88(0xfd)][_0x337a88(0xb7)][_0x337a88(0x166)]!==_0x490b14[_0x337a88(0x83)]||this[_0x337a88(0xfd)]['bitmap']['height']!==_0x490b14[_0x337a88(0x166)])&&this['_verticalGaugeSprite'][_0x337a88(0xb7)][_0x337a88(0x123)](_0x490b14['height'],_0x490b14[_0x337a88(0x166)]);else{if(_0x337a88(0x8a)==='sbozf'){const _0x17a11e=_0x21e43d(_0x1feb94['$1']);_0x17a11e!==_0x567b6e[_0x47de59][_0x337a88(0x16a)]&&(_0xa7a6fe(_0x337a88(0x108)[_0x337a88(0x98)](_0x5850c5,_0x17a11e)),_0x2f8d23['exit']());}else this[_0x337a88(0xfd)]['bitmap']=new Bitmap(_0x490b14[_0x337a88(0x83)],_0x490b14[_0x337a88(0x166)]);}},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x8b)]=function(){const _0x5c1f98=_0x267021;if(!this[_0x5c1f98(0xfd)])return;this[_0x5c1f98(0xfd)]['x']=this['width']/0x2,this[_0x5c1f98(0xfd)]['y']=this[_0x5c1f98(0x83)];},Sprite_VariableGauge[_0x267021(0x14d)]['targetWindow']=function(){const _0x59b5b3=_0x267021;return SceneManager['_scene'][_0x59b5b3(0xe0)];},Sprite_VariableGauge[_0x267021(0x14d)]['onMouseEnter']=function(){const _0x31d561=_0x267021;Sprite_Clickable[_0x31d561(0x14d)][_0x31d561(0x81)][_0x31d561(0xd1)](this);const _0x1a460d=this['targetWindow']();_0x1a460d&&_0x1a460d[_0x31d561(0x12b)](this[_0x31d561(0xce)]);},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0xc2)]=function(){const _0x2cced6=_0x267021;Sprite_Clickable[_0x2cced6(0x14d)][_0x2cced6(0xc2)][_0x2cced6(0xd1)](this);const _0x466b97=this[_0x2cced6(0x10a)]();_0x466b97&&_0x466b97['_key']===this['_key']&&(_0x2cced6(0x172)===_0x2cced6(0x172)?_0x466b97['setKey'](null):_0x46a36a[_0x2cced6(0xf4)][_0x2cced6(0xd0)]['push'](_0x54cf1e));},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x140)]=function(){const _0x551752=_0x267021,_0x313b21=this[_0x551752(0x9e)];this[_0x551752(0x9e)]=this[_0x551752(0x14e)]();if(this['_hoverState']!==_0x313b21){if(_0x551752(0xe8)===_0x551752(0x88))return![];else{if(this[_0x551752(0x9e)]){if(_0x551752(0xaf)!==_0x551752(0xaf)){_0x445e41[_0x551752(0x14d)][_0x551752(0x81)]['call'](this);const _0x1e6a1b=this['targetWindow']();_0x1e6a1b&&_0x1e6a1b[_0x551752(0x12b)](this['_key']);}else this[_0x551752(0x81)]();}else _0x551752(0xc8)!=='KoIXu'?this[_0x551752(0xc2)]():(this[_0x551752(0x16b)]['x']=-_0x480b12[_0x551752(0xca)]-_0x334ca7,this[_0x551752(0x16b)]['y']=_0x409d70[_0x551752(0xb8)]((this['bitmap'][_0x551752(0x83)]-_0xae5312[_0x551752(0x133)])/0x2));}}},Sprite_VariableGauge[_0x267021(0x14d)][_0x267021(0x14e)]=function(){const _0x2aabe3=_0x267021;if($gameMessage[_0x2aabe3(0xdf)]())return![];const _0x4812b6=new Point(TouchInput['x'],TouchInput['y']),_0x4f77c2=this['worldTransform']['applyInverse'](_0x4812b6);return this['hitTest'](_0x4f77c2['x'],_0x4f77c2['y']);};function Window_VariableGaugeTooltip(){const _0x193fc3=_0x267021;this[_0x193fc3(0x137)](...arguments);}Window_VariableGaugeTooltip[_0x267021(0x14d)]=Object['create'](Window_Base[_0x267021(0x14d)]),Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0xb2)]=Window_VariableGaugeTooltip,Window_VariableGaugeTooltip[_0x267021(0x91)]=VisuMZ['VariableGauges']['Settings'][_0x267021(0x107)]['Scale'],Window_VariableGaugeTooltip[_0x267021(0xad)]=VisuMZ[_0x267021(0xf4)][_0x267021(0xbc)][_0x267021(0x107)][_0x267021(0xe2)],Window_VariableGaugeTooltip[_0x267021(0x173)]=VisuMZ[_0x267021(0xf4)][_0x267021(0xbc)][_0x267021(0x107)][_0x267021(0x162)],Window_VariableGaugeTooltip['MOUSE_OFFSET_X']=VisuMZ[_0x267021(0xf4)][_0x267021(0xbc)][_0x267021(0x107)][_0x267021(0x157)],Window_VariableGaugeTooltip['MOUSE_OFFSET_Y']=VisuMZ['VariableGauges']['Settings'][_0x267021(0x107)]['OffsetY'],Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0x137)]=function(){const _0x412f19=_0x267021,_0x4e9bbb=new Rectangle(0x0,0x0,Graphics['width'],Graphics[_0x412f19(0x83)]);Window_Base['prototype'][_0x412f19(0x137)][_0x412f19(0xd1)](this,_0x4e9bbb),this['scale']['x']=this[_0x412f19(0xdd)]['y']=Window_VariableGaugeTooltip['WINDOW_SCALE'],this['hide'](),this[_0x412f19(0xce)]='';},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0xd7)]=function(){const _0x82d721=_0x267021;this['windowskin']=ImageManager['loadSystem'](Window_VariableGaugeTooltip[_0x82d721(0xad)]);},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0xbb)]=function(){const _0x1ee698=_0x267021;this[_0x1ee698(0x117)]=Window_VariableGaugeTooltip[_0x1ee698(0x173)];},Window_VariableGaugeTooltip['prototype'][_0x267021(0x12b)]=function(_0x1154ae){const _0x150281=_0x267021;if(this[_0x150281(0xce)]===_0x1154ae)return;if(_0x1154ae!==null&&!VisuMZ[_0x150281(0xf4)][_0x150281(0x158)][_0x1154ae])return;this[_0x150281(0xce)]=_0x1154ae||'',this[_0x150281(0xce)][_0x150281(0x119)]()[_0x150281(0xab)]>0x0?this['refresh']():this[_0x150281(0x135)]();},Window_VariableGaugeTooltip['prototype'][_0x267021(0x16e)]=function(){const _0x133402=_0x267021;this[_0x133402(0x12f)][_0x133402(0xfc)](),this['setupText']();if(this[_0x133402(0x82)][_0x133402(0xab)]>0x0){this[_0x133402(0x112)]();const _0x395e9a=this[_0x133402(0x164)]();this[_0x133402(0x131)](this[_0x133402(0x82)],_0x395e9a['x'],_0x395e9a['y'],_0x395e9a['width']),this[_0x133402(0xa5)]();}else{if(_0x133402(0x9d)===_0x133402(0x105))return _0x4969ea[_0x133402(0x15b)][_0x133402(0xbc)][_0x133402(0x85)][_0x133402(0x121)]()[_0x133402(0x119)]();else this[_0x133402(0x135)]();}},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0xc6)]=function(){return![];},Window_VariableGaugeTooltip['prototype'][_0x267021(0xa3)]=function(_0x51c7ed){return _0x51c7ed;},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0x13e)]=function(){return![];},Window_VariableGaugeTooltip['prototype'][_0x267021(0x10b)]=function(){const _0x1cb8f7=_0x267021;this[_0x1cb8f7(0x82)]='';if(!this[_0x1cb8f7(0xce)])return;this[_0x1cb8f7(0x116)](),this[_0x1cb8f7(0x82)]=this[_0x1cb8f7(0x82)][_0x1cb8f7(0x119)]();},Window_VariableGaugeTooltip[_0x267021(0x14d)]['setupKeywordText']=function(){const _0x4558f0=_0x267021,_0x102303=VisuMZ[_0x4558f0(0xf4)][_0x4558f0(0x158)][this[_0x4558f0(0xce)]];this['_text']=_0x102303['TooltipText']||'';},Window_VariableGaugeTooltip['prototype'][_0x267021(0x112)]=function(){const _0x247034=_0x267021,_0x49765b=this[_0x247034(0xa6)](this[_0x247034(0x82)]);this[_0x247034(0x166)]=_0x49765b[_0x247034(0x166)]+(this[_0x247034(0x152)]()+this['padding'])*0x2,this['height']=_0x49765b[_0x247034(0x83)]+this['padding']*0x2,this[_0x247034(0x89)](),this[_0x247034(0xe3)]();},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0x102)]=function(){const _0x32da0e=_0x267021;Window_Base[_0x32da0e(0x14d)][_0x32da0e(0x102)][_0x32da0e(0xd1)](this),this['_requestRefresh']&&(this['_requestRefresh']=![],this[_0x32da0e(0x16e)]()),this[_0x32da0e(0x171)](),this[_0x32da0e(0x183)]();},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0x16d)]=function(){const _0x536440=_0x267021;this[_0x536440(0x13a)]=!![];},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0x171)]=function(){const _0x4decfd=_0x267021;if(!this[_0x4decfd(0x146)])return;this['x']=TouchInput['x']+Window_VariableGaugeTooltip[_0x4decfd(0x11b)],this['y']=TouchInput['y']+Window_VariableGaugeTooltip['MOUSE_OFFSET_Y'],this[_0x4decfd(0x11d)]();},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0x11d)]=function(){const _0x36e4af=_0x267021,_0x4a377f=this[_0x36e4af(0x166)]*(Window_VariableGaugeTooltip[_0x36e4af(0x91)]||0.01),_0x334f7e=this[_0x36e4af(0x83)]*(Window_VariableGaugeTooltip['WINDOW_SCALE']||0.01);this['x']=Math[_0x36e4af(0xb8)](this['x'][_0x36e4af(0x93)](0x0,Graphics[_0x36e4af(0x166)]-_0x4a377f)),this['y']=Math[_0x36e4af(0xb8)](this['y']['clamp'](0x0,Graphics[_0x36e4af(0x83)]-_0x334f7e));},Window_VariableGaugeTooltip[_0x267021(0x14d)][_0x267021(0x183)]=function(){const _0x5bf3eb=_0x267021;let _0x130feb=0xff;if(TouchInput['x']<=0x0)_0x130feb=0x0;if(TouchInput['x']>=Graphics[_0x5bf3eb(0x166)])_0x130feb=0x0;if(TouchInput['y']<=0x0)_0x130feb=0x0;if(TouchInput['y']>=Graphics['height'])_0x130feb=0x0;this[_0x5bf3eb(0x17c)]=_0x130feb;};