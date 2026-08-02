//=============================================================================
// VisuStella MZ - Button Trigger Events
// VisuMZ_3_ButtonTriggerEvts.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ButtonTriggerEvts = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ButtonTriggerEvts = VisuMZ.ButtonTriggerEvts || {};
VisuMZ.ButtonTriggerEvts.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [ButtonTriggerEvts]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Button_Trigger_Events_VisuStella_MZ
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you, the game dev, the setup events that can be remotely
 * triggered by certain button presses even if the player character is across
 * the map. This can be used in a number of ways such as setting up specific
 * interactions or even reproducing a point and click navigation style.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Setup events that can remotely trigger upon the player pressing specific
 *   keyboard buttons. The player character doesn't need to be near the event.
 * * Setup which buttons will trigger the event. These buttons range from the
 *   directional arrows, the OK, cancel, Page Up, Page Down, CTRL, Shift, and
 *   Tab buttons on the keyboard.
 * * Automatically setup Click Triggers and icons based on the button assigned.
 * * When multiple events are assigned to a button key, the player will enter a
 *   spotlight mode to help determine which event the player wishes to interact
 *   with relative to the key press.
 * * Use custom settings or images for the spotlight mode.
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
 * * VisuMZ_1_EventsMoveCore
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Event-Related Notetags and Comment Tags ===
 * 
 * ---
 *
 * <Trigger Button: button>
 * <Trigger Buttons: button, button, button>
 *
 * - Used for: Event Notetags and Comment Tags
 * - Allows the event to remotely trigger upon the player pressing a specific
 *   keyboard button.
 *   - The event's Trigger condition must be either "Action Button",
 *     "Player Touch", or "Event Touch".
 *   - This does not work with "Autorun" or "Parallel".
 * - Insert the tag inside the Notebox to make the Button Trigger apply to ALL
 *   of the event's pages.
 * - Insert the tag inside of a Comment to make the Button Trigger apply ONLY
 *   to the specific event pages that have those comments on them.
 * - Replace 'button' with any of the following buttons (remove quotes):
 *   - "Down", "Left", "Right", "Up"
 *   - "OK", "Cancel", "PageUp", "PageDown",
 *   - "Control", "Shift", "Tab"
 *   - Typing in a button wrong (such as adding a space to "Page Up") will
 *     yield no results.
 *   - The "Cancel" button trigger will prevent the Main Menu from being called
 *     when pressed with the Keyboard, but it will NOT prevent the Main Menu
 *     from being called with mouse buttons or touch controls.
 * - Insert multiple buttons separated by commas to allow for multiple keyboard
 *   buttons to trigger them.
 * 
 * Examples:
 * 
 * <Trigger Button: OK>
 * <Trigger Button: Left, Down>
 * <Trigger Button: Up, Right>
 * <Trigger Button: PageUp, PageDown>
 *
 * ---
 *
 * <No Auto Trigger Icon>
 *
 * - Used for: Event Notetags and Comment Tags
 * - Prevents icons from being automatically assigned to the event if it is
 *   assigned a Trigger Button.
 *
 * ---
 *
 * <No Auto Click Trigger>
 *
 * - Used for: Event Notetags and Comment Tags
 * - Prevents click trigger from being automatically assigned to the event if
 *   it is assigned a Trigger Button.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Seal Input Move>
 *
 * - Used for: Map Notetags
 * - Prevents the player from being able to use directional inputs and touch
 *   navigation on this specific map.
 * - If this notetag is not used, the setting will default to whatever is set
 *   up in the Plugin Parameters > Auto QOL Settings > Auto <Seal Input Move>
 *   setting.
 *
 * ---
 *
 * <No Seal Input Move>
 *
 * - Used for: Map Notetags
 * - Allows the player to be able to use directional inputs and utilize touch
 *   navigation on this specific map.
 * - If this notetag is not used, the setting will default to whatever is set
 *   up in the Plugin Parameters > Auto QOL Settings > Auto <Seal Input Move>
 *   setting.
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
 * System: Enable Button Trigger Events
 * - Enable/disable Button Trigger Events from activating.
 *
 *   Enable/Disable?:
 *   - Enables Button Trigger Events and allows them to activate.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Automatic Quality of Life Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to quickly adjust and streamline your game
 * to utilize the Button Trigger Events in a more efficient manner.
 *
 * ---
 *
 * General
 * 
 *   Auto <Seal Input Move>:
 *   - Seal off input movement by default for every map?
 *   - Player will be unable to with the keyboard or with the mouse if enabled.
 * 
 *   Auto <Click Trigger>:
 *   - Add <Click Trigger> for events with Trigger Buttons?
 *   - Player can click the events and automatically trigger them.
 *
 * ---
 *
 * Auto <Icon: x>
 * 
 *   Auto-Synchronize?:
 *   - Automatically synchronize with VisuMZ_0_CoreEngine?
 *   - Will change from Keyboard to Controller icons on switch.
 *   - Does NOT take priority over events that already have <Icon: x>.
 *   - Does NOT take priority over specified icons in the Plugin Parameters.
 * 
 *   Direction:
 * 
 *     Down:
 *     Left:
 *     Right:
 *     Up:
 *     - Which icon do you wish to use for this button?
 *     - Use 0 for no changes.
 *     - If a Trigger Button is discovered using this key(s), this icon will
 *       be automatically assigned to the event.
 * 
 *   Actions:
 * 
 *     OK / Confirm:
 *     Menu / Cancel:
 *     Page Up:
 *     Page Down:
 *     - Which icon do you wish to use for this button?
 *     - Use 0 for no changes.
 *     - If a Trigger Button is discovered using this key(s), this icon will
 *       be automatically assigned to the event.
 * 
 *   Other:
 * 
 *     CTRL:
 *     Shift:
 *     Tab:
 *     - Which icon do you wish to use for this button?
 *     - Use 0 for no changes.
 *     - If a Trigger Button is discovered using this key(s), this icon will
 *       be automatically assigned to the event.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Spotlight Settings
 * ============================================================================
 *
 * If multiple events are assigned the same Trigger Button, then Spotlight Mode
 * will occur. The player character and all other events will freeze in place,
 * while the player selects which event to trigger.
 * 
 * Spotlight Mode will only enlist the events that are on the player's screen
 * and will filter out the ones that aren't close. If there aren't any near the
 * player's screen, then the one with the lowest event ID will automatically
 * trigger. Otherwise, the player will select from the events visible on the
 * screen close to the player.
 * 
 * You can assign a custom graphic for the spotlight. However, if no custom
 * graphic is used, an auto-generated one will be used instead. The generated
 * spotlight is a simplistic darkened screen with a light in the middle.
 *
 * ---
 *
 * Custom Graphic
 * 
 *   Filename:
 *   - Insert a filename here to use a custom graphic.
 *   - Leave empty to not use. Located in img/system/
 * 
 *   Anchor X:
 *   - Custom anchor X value for the custom spotlight.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 *   - This does NOT apply to the auto-generated spotlight.
 * 
 *   Anchor Y:
 *   - Custom anchor Y value for the custom spotlight.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 *   - This does NOT apply to the auto-generated spotlight.
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the custom spotlight?
 *   - This does NOT apply to the auto-generated spotlight.
 *
 * ---
 *
 * Generated Image
 * 
 *   Radius:
 *   - If no custom graphic is used, generate a spotlight bitmap.
 *   - This determines the radius.
 *
 * ---
 *
 * Fade Effect
 * 
 *   Target Opacity:
 *   - What is the target opacity when the spotlight is visible?
 *   - 1 - More Transparent
 *   - 255 - Max Opaque
 * 
 *   Fade Speed:
 *   - What speed does the opacity fade in and out at?
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
 * Version 1.05: July 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with Options Core's new key rebindings.
 * 
 * Version 1.04: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that was causing some events to not register under spotlight.
 *    Fix made by Arisu.
 * * Compatibility Update!
 * ** Added better compatibility for Spotlight Mode with Map Zoom Camera.
 * 
 * Version 1.03: December 15, 2022
 * * Compatibility Update!
 * ** Compatibility update with version RPG Maker MZ 1.6.0. This is not final
 *    as this was only tested on the open beta version of 1.6.0.
 * 
 * Version 1.02: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter by Arisu.
 * *** Automatic QOL Settings > Auto <Icon: x> > Auto-Synchronize?
 * **** Automatically synchronize with VisuMZ_0_CoreEngine?
 * **** Will change from Keyboard to Controller icons on switch.
 * **** Does NOT take priority over events that already have <Icon: x>.
 * **** Does NOT take priority over specified icons in the Plugin Parameters.
 * 
 * Version 1.01: February 3, 2022
 * * Documentation Update!
 * ** Added text for "Plugin Parameters: Spotlight Settings"
 * *** Spotlight Mode will only enlist the events that are on the player's
 *     screen and will filter out the ones that aren't close. If there aren't
 *     any near the player's screen, then the one with the lowest event ID will
 *     automatically trigger. Otherwise, the player will select from the events
 *     visible on the screen close to the player.
 * * Feature Update!
 * ** Updated the handling of event triggers for multiple events that may not
 *    appear on the player's screen. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: February 9, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableButtonTriggerEvtsMenu
 * @text System: Enable Button Trigger Events
 * @desc Enable/disable Button Trigger Events from activating.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables Button Trigger Events and allows them to activate.
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
 * @param ButtonTriggerEvts
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Auto:struct
 * @text Automatic QOL Settings
 * @type struct<Auto>
 * @desc Automatic Quality of Life settings.
 * @default {"AutoSealedMovement:eval":"false","AutoClickTrigger:eval":"true","AutoIcon":"","AutoSynchronize:eval":"true","AutoIconDirection":"","AutoIconDOWN:num":"349","AutoIconLEFT:num":"346","AutoIconRIGHT:num":"347","AutoIconUP:num":"348","AutoIconActions":"","AutoIconOK:num":"345","AutoIconCANCEL:num":"343","AutoIconPAGEUP:num":"336","AutoIconPAGEDOWN:num":"342","AutoIconOutter":"","AutoIconCONTROL:num":"0","AutoIconSHIFT:num":"0","AutoIconTAB:num":"0"}
 *
 * @param Spotlight:struct
 * @text Spotlight Settings
 * @type struct<Spotlight>
 * @desc Settings used for the Spotlight Mode.
 * @default {"Custom":"","Filename:str":"","AnchorX:num":"0.5","AnchorY:num":"0.5","BlendMode:num":"0","Bitmap":"","Radius:num":"72","Fading":"","Opacity:num":"160","FadeSpeed:num":"8"}
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
 * Automatic Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Auto:
 *
 * @param AutoSealedMovement:eval
 * @text Auto <Seal Input Move>
 * @parent Auto
 * @type boolean
 * @on Seal by Default
 * @off Normal Movement
 * @desc Seal off input movement by default for every map?
 * @default false
 *
 * @param AutoClickTrigger:eval
 * @text Auto <Click Trigger>
 * @parent Auto
 * @type boolean
 * @on Add <Click Trigger>
 * @off Do Not Add
 * @desc Add <Click Trigger> for events with Trigger Buttons?
 * @default true
 *
 * @param AutoIcon
 * @text Auto <Icon: x>
 * @parent Auto
 *
 * @param AutoSynchronize:eval
 * @text Auto-Synchronize?
 * @parent AutoIcon
 * @type boolean
 * @on Auto-Synchronize
 * @off Don't Synchronize
 * @desc Automatically synchronize with VisuMZ_0_CoreEngine?
 * Will change from Keyboard to Controller icons on switch.
 * @default true
 * 
 * @param AutoIconDirection
 * @text Direction
 * @parent AutoIcon
 *
 * @param AutoIconDOWN:num
 * @text Down
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconLEFT:num
 * @text Left
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconRIGHT:num
 * @text Right
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconUP:num
 * @text Up
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 * 
 * @param AutoIconActions
 * @text Actions
 * @parent AutoIcon
 *
 * @param AutoIconOK:num
 * @text OK / Confirm
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconCANCEL:num
 * @text Menu / Cancel
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconPAGEUP:num
 * @text Page Up
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconPAGEDOWN:num
 * @text Page Down
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 * 
 * @param AutoIconOutter
 * @text Other
 * @parent AutoIcon
 *
 * @param AutoIconCONTROL:num
 * @text CTRL
 * @parent AutoIconOutter
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconSHIFT:num
 * @text Shift
 * @parent AutoIconOutter
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconTAB:num
 * @text Tab
 * @parent AutoIconOutter
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Spotlight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Spotlight:
 *
 * @param Custom
 * @text Custom Graphic
 *
 * @param Filename:str
 * @text Filename
 * @parent Custom
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Insert a filename here to use a custom graphic.
 * Leave empty to not use. Located in img/system/
 * @default 
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Custom
 * @desc Custom anchor X value for the custom spotlight.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Custom
 * @desc Custom anchor Y value for the custom spotlight.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Custom
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the custom spotlight?
 * @default 0
 *
 * @param Bitmap
 * @text Generated Image
 *
 * @param Radius:num
 * @text Radius
 * @parent Bitmap
 * @type number
 * @min 1
 * @desc If no custom graphic is used, generate a spotlight bitmap. This determines the radius.
 * @default 72
 *
 * @param Fading
 * @text Fade Effect
 *
 * @param Opacity:num
 * @text Target Opacity
 * @parent Fading
 * @type number
 * @min 1
 * @max 255
 * @desc What is the target opacity when the spotlight is visible?
 * 1 - More Transparent; 255 - Max Opaque
 * @default 160
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent Fading
 * @type number
 * @min 1
 * @max 255
 * @desc What speed does the opacity fade in and out at?
 * @default 8
 *
 */
//=============================================================================

const _0x5b2c3b=_0x9816;(function(_0x24988b,_0x3b0233){const _0x496b00=_0x9816,_0xb964f1=_0x24988b();while(!![]){try{const _0x84dd9f=parseInt(_0x496b00(0x190))/0x1*(-parseInt(_0x496b00(0x179))/0x2)+-parseInt(_0x496b00(0x1f3))/0x3+-parseInt(_0x496b00(0x202))/0x4+-parseInt(_0x496b00(0x21e))/0x5+-parseInt(_0x496b00(0x230))/0x6*(-parseInt(_0x496b00(0x1b3))/0x7)+-parseInt(_0x496b00(0x224))/0x8+parseInt(_0x496b00(0x193))/0x9;if(_0x84dd9f===_0x3b0233)break;else _0xb964f1['push'](_0xb964f1['shift']());}catch(_0x2ce35f){_0xb964f1['push'](_0xb964f1['shift']());}}}(_0x8a1e,0x9dc22));var label=_0x5b2c3b(0x200),tier=tier||0x0,dependencies=[_0x5b2c3b(0x184)],pluginData=$plugins[_0x5b2c3b(0x1a2)](function(_0x30916f){const _0x53b996=_0x5b2c3b;return _0x30916f[_0x53b996(0x207)]&&_0x30916f[_0x53b996(0x17d)][_0x53b996(0x189)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x5b2c3b(0x1e6)]||{},VisuMZ['ConvertParams']=function(_0x24083d,_0x8626cb){const _0x3e7c78=_0x5b2c3b;for(const _0xc11dca in _0x8626cb){if(_0xc11dca[_0x3e7c78(0x1c0)](/(.*):(.*)/i)){const _0x291810=String(RegExp['$1']),_0x58d6d4=String(RegExp['$2'])[_0x3e7c78(0x1da)]()['trim']();let _0xbf49c2,_0x475456,_0x16c768;switch(_0x58d6d4){case _0x3e7c78(0x180):_0xbf49c2=_0x8626cb[_0xc11dca]!==''?Number(_0x8626cb[_0xc11dca]):0x0;break;case _0x3e7c78(0x1d6):_0x475456=_0x8626cb[_0xc11dca]!==''?JSON[_0x3e7c78(0x23c)](_0x8626cb[_0xc11dca]):[],_0xbf49c2=_0x475456['map'](_0x28a583=>Number(_0x28a583));break;case'EVAL':_0xbf49c2=_0x8626cb[_0xc11dca]!==''?eval(_0x8626cb[_0xc11dca]):null;break;case _0x3e7c78(0x1af):_0x475456=_0x8626cb[_0xc11dca]!==''?JSON[_0x3e7c78(0x23c)](_0x8626cb[_0xc11dca]):[],_0xbf49c2=_0x475456['map'](_0x326b40=>eval(_0x326b40));break;case _0x3e7c78(0x194):_0xbf49c2=_0x8626cb[_0xc11dca]!==''?JSON['parse'](_0x8626cb[_0xc11dca]):'';break;case'ARRAYJSON':_0x475456=_0x8626cb[_0xc11dca]!==''?JSON['parse'](_0x8626cb[_0xc11dca]):[],_0xbf49c2=_0x475456[_0x3e7c78(0x1a8)](_0x36e7da=>JSON[_0x3e7c78(0x23c)](_0x36e7da));break;case'FUNC':_0xbf49c2=_0x8626cb[_0xc11dca]!==''?new Function(JSON['parse'](_0x8626cb[_0xc11dca])):new Function(_0x3e7c78(0x22b));break;case _0x3e7c78(0x1b7):_0x475456=_0x8626cb[_0xc11dca]!==''?JSON['parse'](_0x8626cb[_0xc11dca]):[],_0xbf49c2=_0x475456[_0x3e7c78(0x1a8)](_0x1978dd=>new Function(JSON[_0x3e7c78(0x23c)](_0x1978dd)));break;case _0x3e7c78(0x1f9):_0xbf49c2=_0x8626cb[_0xc11dca]!==''?String(_0x8626cb[_0xc11dca]):'';break;case'ARRAYSTR':_0x475456=_0x8626cb[_0xc11dca]!==''?JSON[_0x3e7c78(0x23c)](_0x8626cb[_0xc11dca]):[],_0xbf49c2=_0x475456[_0x3e7c78(0x1a8)](_0x2c1a56=>String(_0x2c1a56));break;case _0x3e7c78(0x20b):_0x16c768=_0x8626cb[_0xc11dca]!==''?JSON[_0x3e7c78(0x23c)](_0x8626cb[_0xc11dca]):{},_0xbf49c2=VisuMZ[_0x3e7c78(0x23a)]({},_0x16c768);break;case'ARRAYSTRUCT':_0x475456=_0x8626cb[_0xc11dca]!==''?JSON[_0x3e7c78(0x23c)](_0x8626cb[_0xc11dca]):[],_0xbf49c2=_0x475456[_0x3e7c78(0x1a8)](_0x2f782b=>VisuMZ['ConvertParams']({},JSON[_0x3e7c78(0x23c)](_0x2f782b)));break;default:continue;}_0x24083d[_0x291810]=_0xbf49c2;}}return _0x24083d;},(_0x285565=>{const _0x2f4c7c=_0x5b2c3b,_0x3ee69c=_0x285565[_0x2f4c7c(0x204)];for(const _0x39b3d9 of dependencies){if(!Imported[_0x39b3d9]){alert(_0x2f4c7c(0x1cd)[_0x2f4c7c(0x205)](_0x3ee69c,_0x39b3d9)),SceneManager[_0x2f4c7c(0x227)]();break;}}const _0x34b7e0=_0x285565[_0x2f4c7c(0x17d)];if(_0x34b7e0['match'](/\[Version[ ](.*?)\]/i)){const _0x2f4bed=Number(RegExp['$1']);_0x2f4bed!==VisuMZ[label]['version']&&(alert(_0x2f4c7c(0x21f)['format'](_0x3ee69c,_0x2f4bed)),SceneManager['exit']());}if(_0x34b7e0[_0x2f4c7c(0x1c0)](/\[Tier[ ](\d+)\]/i)){const _0x390746=Number(RegExp['$1']);_0x390746<tier?(alert(_0x2f4c7c(0x214)['format'](_0x3ee69c,_0x390746,tier)),SceneManager[_0x2f4c7c(0x227)]()):tier=Math[_0x2f4c7c(0x237)](_0x390746,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x285565['parameters']);})(pluginData),VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1ae)]={'TriggerButtons':/<TRIGGER (?:BUTTON|BUTTONS):[ ](.*?)>/gi,'NoAutoTriggerIcon':/<NO AUTO TRIGGER ICON>/i,'NoAutoClickTrigger':/<NO AUTO CLICK TRIGGER>/i,'SealMovement':/<(?:SEAL|SEALED) INPUT (?:MOVE|MOVEMENT)>/i,'NoSealMovement':/<NO (?:SEAL|SEALED) INPUT (?:MOVE|MOVEMENT)>/i},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1c8)]=Scene_Boot[_0x5b2c3b(0x197)]['loadSystemImages'],Scene_Boot[_0x5b2c3b(0x197)]['loadSystemImages']=function(){const _0xc436e9=_0x5b2c3b;VisuMZ[_0xc436e9(0x200)]['Scene_Boot_loadSystemImages'][_0xc436e9(0x1dd)](this),ImageManager[_0xc436e9(0x1c5)]();},PluginManager[_0x5b2c3b(0x18a)](pluginData['name'],_0x5b2c3b(0x1ff),_0x59c4c4=>{const _0x1770f8=_0x5b2c3b;VisuMZ[_0x1770f8(0x23a)](_0x59c4c4,_0x59c4c4),$gameSystem[_0x1770f8(0x1ca)](_0x59c4c4[_0x1770f8(0x1ac)]);}),ImageManager['buttonTriggerEventSpotlight']=function(){const _0x26af78=_0x5b2c3b;if(this[_0x26af78(0x1d0)])return this['_cached_ButtonTriggerEvts_Spotlight'];const _0x4c792f=Math['ceil']($dataSystem['advanced'][_0x26af78(0x21a)]*2.5),_0x590edf=Math[_0x26af78(0x1f4)]($dataSystem[_0x26af78(0x1f6)]['screenHeight']*2.5),_0x492f74=new Bitmap(_0x4c792f,_0x590edf),_0x5104cf=Spriteset_Map[_0x26af78(0x1d1)];return _0x492f74[_0x26af78(0x18d)](0x0,0x0,_0x4c792f,_0x590edf,'#000000'),_0x492f74[_0x26af78(0x20f)](_0x4c792f/0x2,_0x590edf/0x2,_0x5104cf['radius'],_0x26af78(0x1e3)),_0x492f74[_0x26af78(0x1e8)]=![],this[_0x26af78(0x1d0)]=_0x492f74,this[_0x26af78(0x1d0)];},SceneManager['isSceneMap']=function(){const _0x3bf09b=_0x5b2c3b;return this['_scene']&&this['_scene'][_0x3bf09b(0x1db)]===Scene_Map;},VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x1a9)]=Game_System[_0x5b2c3b(0x197)][_0x5b2c3b(0x218)],Game_System[_0x5b2c3b(0x197)][_0x5b2c3b(0x218)]=function(){const _0x45ca87=_0x5b2c3b;VisuMZ[_0x45ca87(0x200)]['Game_System_initialize'][_0x45ca87(0x1dd)](this),this['initButtonTriggerEventSettings']();},Game_System[_0x5b2c3b(0x197)][_0x5b2c3b(0x20e)]=function(){const _0x5025bc=_0x5b2c3b;this[_0x5025bc(0x1b6)]=!![];},Game_System[_0x5b2c3b(0x197)]['isButtonTriggerEventEnabled']=function(){const _0x8b3d92=_0x5b2c3b;return this[_0x8b3d92(0x1b6)]===undefined&&this[_0x8b3d92(0x20e)](),this['_buttonTriggerEventsEnabled'];},Game_System[_0x5b2c3b(0x197)][_0x5b2c3b(0x1ca)]=function(_0x3acb84){const _0x550e97=_0x5b2c3b;this[_0x550e97(0x1b6)]===undefined&&this[_0x550e97(0x20e)](),this['_buttonTriggerEventsEnabled']=_0x3acb84;},Game_Map[_0x5b2c3b(0x1c7)]=VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1e6)][_0x5b2c3b(0x1b1)][_0x5b2c3b(0x1d9)],Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x17f)]=function(){const _0x251858=_0x5b2c3b,_0x1758ea=VisuMZ['ButtonTriggerEvts'][_0x251858(0x1ae)],_0x11f690=($dataMap?$dataMap[_0x251858(0x19a)]:'')||'';if(_0x11f690[_0x251858(0x1c0)](_0x1758ea[_0x251858(0x21c)]))return!![];else{if(_0x11f690[_0x251858(0x1c0)](_0x1758ea[_0x251858(0x1c6)]))return![];}return Game_Map['BUTTON_TRIGGER_EVENTS_DEFAULT_SEALED_MOVEMENT'];},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1f7)]=function(_0x4532d3){for(const _0x55960d of this['events']()){if(!_0x55960d)continue;if(_0x55960d['hasButtonTriggerKey'](_0x4532d3))return!![];}return![];},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1b9)]=function(_0x4d2a53){const _0x160e29=_0x5b2c3b,_0x1214ed=this[_0x160e29(0x20c)]()[_0x160e29(0x1a2)](_0x27095a=>_0x27095a&&_0x27095a['hasButtonTriggerKey'](_0x4d2a53));if(_0x1214ed['length']<=0x0)return;else{if(_0x1214ed[_0x160e29(0x18c)]===0x1)this[_0x160e29(0x23b)](_0x1214ed);else{if(_0x1214ed[_0x160e29(0x18c)]>0x1){const _0x5aa0c8=_0x1214ed['filter'](_0x12acaa=>_0x12acaa[_0x160e29(0x235)]());_0x5aa0c8[_0x160e29(0x18c)]===0x0?this[_0x160e29(0x23b)](_0x1214ed):this[_0x160e29(0x187)](_0x5aa0c8);}}}},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x23b)]=function(_0x52547a){const _0x5e8bf2=_0x5b2c3b,_0x2d1b95=_0x52547a[0x0];_0x2d1b95[_0x5e8bf2(0x198)](),this['setupStartingMapEvent']();},Game_Map[_0x5b2c3b(0x197)]['clearButtonTriggerEventMultiple']=function(){const _0x3daa8c=_0x5b2c3b;this[_0x3daa8c(0x1f0)]=undefined,Input[_0x3daa8c(0x242)]();},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x187)]=function(_0x547e17){const _0x2df31c=_0x5b2c3b;$gameTemp['_lastButtonTriggerEvents']=$gameTemp[_0x2df31c(0x1c2)]||[],$gameTemp[_0x2df31c(0x1c2)][_0x2df31c(0x23d)]()!==_0x547e17[_0x2df31c(0x1a8)](_0x2ff698=>_0x2ff698[_0x2df31c(0x223)]())['toString']()&&(this['_buttonTriggerEventTargetIndex']=0x0),$gameTemp['_lastButtonTriggerEvents']=_0x547e17[_0x2df31c(0x1a8)](_0x378971=>_0x378971[_0x2df31c(0x223)]()),this[_0x2df31c(0x1f0)]=_0x547e17,this[_0x2df31c(0x1c9)]=this[_0x2df31c(0x1c9)]||0x0;},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1ef)]=function(){const _0x26fd2b=_0x5b2c3b;return this[_0x26fd2b(0x1f0)]&&this[_0x26fd2b(0x1f0)][_0x26fd2b(0x18c)]>0x0;},Game_Map[_0x5b2c3b(0x197)]['getSelectedButtonTriggerEvent']=function(){const _0x31bdf5=_0x5b2c3b;if(this[_0x31bdf5(0x1f0)]){const _0x9ee9f=this[_0x31bdf5(0x1c9)];return this['_buttonTriggerEventTargets'][_0x9ee9f];}return null;},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1f2)]=function(){const _0xfcf0ea=_0x5b2c3b;if(Input[_0xfcf0ea(0x181)]('cancel'))SoundManager[_0xfcf0ea(0x178)](),this[_0xfcf0ea(0x19f)]();else{if(Input[_0xfcf0ea(0x181)]('ok'))this[_0xfcf0ea(0x215)]();else(Input[_0xfcf0ea(0x1bd)](_0xfcf0ea(0x21b))||Input[_0xfcf0ea(0x1bd)]('up')||Input['isRepeated'](_0xfcf0ea(0x19c))||Input['isRepeated']('right'))&&this[_0xfcf0ea(0x191)]();}},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x215)]=function(){const _0x442811=_0x5b2c3b,_0x4f211a=this[_0x442811(0x19b)]();_0x4f211a&&(_0x4f211a['start'](),this[_0x442811(0x1e5)]()),this[_0x442811(0x19f)]();},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x191)]=function(){const _0x1c104=_0x5b2c3b,_0x103af8=this[_0x1c104(0x1c9)];this[_0x1c104(0x1e2)](Input['dir4']),this[_0x1c104(0x1c9)]!==_0x103af8&&SoundManager[_0x1c104(0x216)]();},Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1e2)]=function(_0x52976a){const _0x198434=_0x5b2c3b;Input[_0x198434(0x242)]();const _0x4c4d85=this[_0x198434(0x1f0)],_0x554d37=this[_0x198434(0x19b)]();let _0x4a60d1=[];if(!_0x554d37){this[_0x198434(0x1f0)][_0x198434(0x212)](null)[_0x198434(0x212)](undefined),this[_0x198434(0x1c9)]=0x0;return;}(_0x52976a===0x2||_0x52976a===0x8)&&(_0x52976a===0x2?_0x4a60d1=_0x4c4d85[_0x198434(0x1a2)](_0x195823=>_0x195823&&_0x195823['y']>_0x554d37['y']):_0x4a60d1=_0x4c4d85['filter'](_0x44be65=>_0x44be65&&_0x44be65['y']<_0x554d37['y']),_0x4a60d1[_0x198434(0x18c)]>0x0&&_0x4a60d1[_0x198434(0x1f1)]((_0x4edbf6,_0x314a18)=>{const _0x1dfba7=_0x198434,_0x1c59af=Math[_0x1dfba7(0x18e)](_0x554d37['y']-_0x4edbf6['y']),_0x1a80fe=Math[_0x1dfba7(0x18e)](_0x554d37['y']-_0x314a18['y']);if(_0x1c59af!==_0x1a80fe)return _0x1c59af-_0x1a80fe;const _0x2e1149=Math['abs'](this[_0x1dfba7(0x1a7)](_0x554d37['x'],_0x554d37['y'],_0x4edbf6['x'],_0x4edbf6['y'])),_0x1df9ca=Math[_0x1dfba7(0x18e)](this[_0x1dfba7(0x1a7)](_0x554d37['x'],_0x554d37['y'],_0x314a18['x'],_0x314a18['y']));if(_0x2e1149!==_0x1df9ca)return _0x2e1149-_0x1df9ca;return _0x4edbf6['eventId']()-_0x314a18[_0x1dfba7(0x223)]();}));(_0x52976a===0x4||_0x52976a===0x6)&&(_0x52976a===0x4?_0x4a60d1=_0x4c4d85['filter'](_0x378980=>_0x378980&&_0x378980['x']<_0x554d37['x']):_0x4a60d1=_0x4c4d85['filter'](_0x46fb67=>_0x46fb67&&_0x46fb67['x']>_0x554d37['x']),_0x4a60d1[_0x198434(0x18c)]>0x0&&_0x4a60d1[_0x198434(0x1f1)]((_0x508428,_0x599a1f)=>{const _0x582a29=_0x198434,_0x396a7c=Math[_0x582a29(0x18e)](_0x554d37['x']-_0x508428['x']),_0x33a33e=Math[_0x582a29(0x18e)](_0x554d37['x']-_0x599a1f['x']);if(_0x396a7c!==_0x33a33e)return _0x396a7c-_0x33a33e;const _0x39139f=Math['abs'](this[_0x582a29(0x1a7)](_0x554d37['x'],_0x554d37['y'],_0x508428['x'],_0x508428['y'])),_0x482270=Math[_0x582a29(0x18e)](this[_0x582a29(0x1a7)](_0x554d37['x'],_0x554d37['y'],_0x599a1f['x'],_0x599a1f['y']));if(_0x39139f!==_0x482270)return _0x39139f-_0x482270;return _0x508428[_0x582a29(0x223)]()-_0x599a1f['eventId']();}));if(_0x4a60d1[_0x198434(0x18c)]>0x0){const _0x31bd3e=_0x4a60d1[0x0];this['_buttonTriggerEventTargetIndex']=_0x4c4d85['indexOf'](_0x31bd3e);}},VisuMZ[_0x5b2c3b(0x200)]['Game_CharacterBase_updateMove']=Game_CharacterBase[_0x5b2c3b(0x197)][_0x5b2c3b(0x1d5)],Game_CharacterBase[_0x5b2c3b(0x197)][_0x5b2c3b(0x1d5)]=function(){const _0x45be4f=_0x5b2c3b;if($gameMap&&$gameMap[_0x45be4f(0x1ef)]())return;VisuMZ[_0x45be4f(0x200)][_0x45be4f(0x177)][_0x45be4f(0x1dd)](this);},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1a6)]=Game_Event['prototype'][_0x5b2c3b(0x185)],Game_Event[_0x5b2c3b(0x197)]['updateSelfMovement']=function(){const _0x493267=_0x5b2c3b;if($gameMap&&$gameMap['isButtonTriggerEventSpotlightMode']())return;VisuMZ[_0x493267(0x200)]['Game_Event_updateSelfMovement'][_0x493267(0x1dd)](this);},Game_Event['prototype']['isNearThePlayerScreen']=function(){const _0x22b194=_0x5b2c3b,_0x36bad8=Math[_0x22b194(0x1f4)](Graphics[_0x22b194(0x1fa)]/0x2/$gameMap[_0x22b194(0x1bf)]()),_0x3c80ce=Math[_0x22b194(0x1f4)](Graphics[_0x22b194(0x19e)]/0x2/$gameMap[_0x22b194(0x1ce)]()),_0x3543e8=Math[_0x22b194(0x18e)](this[_0x22b194(0x1a4)]($gamePlayer['x'])),_0x715500=Math['abs'](this[_0x22b194(0x1e4)]($gamePlayer['y']));return _0x3543e8<_0x36bad8&&_0x715500<_0x3c80ce;},Game_Event['prototype'][_0x5b2c3b(0x235)]=function(){const _0x129b1c=_0x5b2c3b,_0x52f68f=$gameScreen[_0x129b1c(0x206)](),_0xd35f2=Math[_0x129b1c(0x186)]($gameMap['displayX']()),_0x179449=Math[_0x129b1c(0x1f4)](Graphics[_0x129b1c(0x1fa)]/_0x52f68f/$gameMap[_0x129b1c(0x1bf)]())+_0xd35f2,_0x461f4f=Math[_0x129b1c(0x186)]($gameMap['displayY']()),_0x29f357=Math[_0x129b1c(0x1f4)](Graphics[_0x129b1c(0x19e)]/_0x52f68f/$gameMap[_0x129b1c(0x1ce)]())+_0x461f4f;return this['x']>=_0xd35f2&&this['x']<=_0x179449&&this['y']>=_0x461f4f&&this['y']<=_0x29f357;},VisuMZ['ButtonTriggerEvts']['Game_Player_moveByInput']=Game_Player['prototype'][_0x5b2c3b(0x225)],Game_Player['prototype'][_0x5b2c3b(0x225)]=function(){const _0x178bcb=_0x5b2c3b;if(Imported['VisuMZ_2_FurnitureSystem']){if($gameMap&&$gameMap[_0x178bcb(0x229)]()){VisuMZ['ButtonTriggerEvts'][_0x178bcb(0x183)][_0x178bcb(0x1dd)](this);return;}}if($gameMap&&$gameMap['isButtonTriggerEventSpotlightMode']()){$gameMap[_0x178bcb(0x1f2)]();return;}if(!this[_0x178bcb(0x1b5)]()&&this[_0x178bcb(0x1ea)]()){if(this[_0x178bcb(0x21d)]())return!![];}if($gameMap&&$gameMap['hasSealedMovement']())return;VisuMZ[_0x178bcb(0x200)]['Game_Player_moveByInput'][_0x178bcb(0x1dd)](this);},Game_Player[_0x5b2c3b(0x197)][_0x5b2c3b(0x21d)]=function(){const _0x14facc=_0x5b2c3b;if(!$gameSystem[_0x14facc(0x1c4)]())return![];if(!this[_0x14facc(0x1b2)]())return![];if(!SceneManager[_0x14facc(0x217)]())return![];const _0x5427f8=['down',_0x14facc(0x19c),'right','up','ok','cancel',_0x14facc(0x1d3),_0x14facc(0x1ab),'control',_0x14facc(0x213),_0x14facc(0x232)];for(let _0x1cde55 of _0x5427f8){if(Input['isTriggered'](_0x1cde55)&&$gameMap[_0x14facc(0x1f7)](_0x1cde55))return $gameMap[_0x14facc(0x1b9)](_0x1cde55),!![];}return![];},VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x1fc)]=Game_Player[_0x5b2c3b(0x197)]['canStartLocalEvents'],Game_Player[_0x5b2c3b(0x197)][_0x5b2c3b(0x1b2)]=function(){const _0x38b63f=_0x5b2c3b;if($gameMap&&$gameMap[_0x38b63f(0x1ef)]())return![];return VisuMZ[_0x38b63f(0x200)][_0x38b63f(0x1fc)][_0x38b63f(0x1dd)](this);},Game_Event[_0x5b2c3b(0x1d2)]=VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1e6)][_0x5b2c3b(0x1b1)][_0x5b2c3b(0x17c)];;function _0x9816(_0x24e4ea,_0xc2fa6a){const _0x8a1e7=_0x8a1e();return _0x9816=function(_0x98162b,_0x119f36){_0x98162b=_0x98162b-0x177;let _0x5d0e1a=_0x8a1e7[_0x98162b];return _0x5d0e1a;},_0x9816(_0x24e4ea,_0xc2fa6a);}VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x1cf)]=Game_Event['prototype'][_0x5b2c3b(0x196)],Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x196)]=function(){const _0x4f136f=_0x5b2c3b;VisuMZ[_0x4f136f(0x200)][_0x4f136f(0x1cf)]['call'](this),this[_0x4f136f(0x20e)]();},Game_Event[_0x5b2c3b(0x197)]['initButtonTriggerEventSettings']=function(){const _0x408db3=_0x5b2c3b;this[_0x408db3(0x199)]=[],this[_0x408db3(0x1eb)]=!![],this['_antiAutoButtonTriggerClickTrigger']=![];},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1bc)]=Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x240)],Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x240)]=function(){const _0x4b5741=_0x5b2c3b;VisuMZ[_0x4b5741(0x200)]['Game_Event_setupPageSettings'][_0x4b5741(0x1dd)](this),this[_0x4b5741(0x17a)]();},Game_Event[_0x5b2c3b(0x197)]['setupButtonTriggerEventSettings']=function(){const _0x1d8a7e=_0x5b2c3b;if(!this[_0x1d8a7e(0x1b4)]())return;this[_0x1d8a7e(0x20e)](),this[_0x1d8a7e(0x1dc)](),this[_0x1d8a7e(0x22a)]();},Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x1dc)]=function(){const _0x2da2a8=_0x5b2c3b;if(!this[_0x2da2a8(0x1b4)]())return;const _0x3be04c=this[_0x2da2a8(0x1b4)]()[_0x2da2a8(0x19a)];if(_0x3be04c==='')return;this[_0x2da2a8(0x1f8)](_0x3be04c);},Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x22a)]=function(){const _0xb6e52c=_0x5b2c3b;if(!this[_0xb6e52c(0x1b4)]())return;if(!this[_0xb6e52c(0x20d)]())return;const _0x2f1eaa=this[_0xb6e52c(0x192)]();let _0x45928d='';for(const _0x57f437 of _0x2f1eaa){if([0x6c,0x198]['includes'](_0x57f437[_0xb6e52c(0x1d4)])){if(_0x45928d!=='')_0x45928d+='\x0a';_0x45928d+=_0x57f437[_0xb6e52c(0x19d)][0x0];}}this[_0xb6e52c(0x1f8)](_0x45928d);},Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x1f8)]=function(_0x4d0fc0){const _0x50431a=_0x5b2c3b,_0x1ffab3=VisuMZ[_0x50431a(0x200)][_0x50431a(0x1ae)],_0x2c66ba=_0x4d0fc0[_0x50431a(0x1c0)](_0x1ffab3[_0x50431a(0x1cb)]);if(_0x2c66ba)for(const _0x2cb9a1 of _0x2c66ba){_0x2cb9a1['match'](_0x1ffab3[_0x50431a(0x1cb)]);const _0x32ebb9=String(RegExp['$1'])[_0x50431a(0x22f)](',')[_0x50431a(0x1a8)](_0x1c3321=>_0x1c3321[_0x50431a(0x203)]()[_0x50431a(0x219)]());this[_0x50431a(0x199)]=this['_triggerButtonKeys']||[];for(const _0x44d1de of _0x32ebb9){!this['_triggerButtonKeys'][_0x50431a(0x189)](_0x44d1de)&&this[_0x50431a(0x199)][_0x50431a(0x1bb)](_0x44d1de);}}_0x4d0fc0[_0x50431a(0x1c0)](_0x1ffab3[_0x50431a(0x233)])&&(this[_0x50431a(0x1eb)]=![]),_0x4d0fc0[_0x50431a(0x1c0)](_0x1ffab3[_0x50431a(0x1c3)])&&(this[_0x50431a(0x17b)]=!![]);},Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x1ed)]=function(_0x56e7c0){const _0x390d6d=_0x5b2c3b;if(!this[_0x390d6d(0x1cc)]([0x0,0x1,0x2]))return![];return _0x56e7c0=_0x56e7c0||'',this[_0x390d6d(0x199)]=this[_0x390d6d(0x199)]||[],this['_triggerButtonKeys'][_0x390d6d(0x189)](_0x56e7c0['toLowerCase']()[_0x390d6d(0x219)]());},VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x201)]=Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x23f)],Game_Event[_0x5b2c3b(0x197)][_0x5b2c3b(0x23f)]=function(){const _0x3e813a=_0x5b2c3b;if(this['_erased'])return![];if(Game_Event['BUTTON_TRIGGER_AUTO_CLICK_TRIGGER']&&this[_0x3e813a(0x199)]&&this[_0x3e813a(0x199)][_0x3e813a(0x18c)]>0x0)return this[_0x3e813a(0x17b)]?![]:!![];return VisuMZ[_0x3e813a(0x200)]['Game_Event_hasClickTrigger'][_0x3e813a(0x1dd)](this);},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1d8)]=Scene_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x209)],Scene_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x209)]=function(){const _0x40d484=_0x5b2c3b;if($gameMap[_0x40d484(0x1ef)]())return![];return VisuMZ[_0x40d484(0x200)]['Scene_Map_isSceneChangeOk'][_0x40d484(0x1dd)](this);},VisuMZ[_0x5b2c3b(0x200)]['Scene_Map_onMapTouch']=Scene_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1ee)],Scene_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1ee)]=function(){const _0x21d133=_0x5b2c3b;$gameMap['isButtonTriggerEventSpotlightMode']()&&$gameMap['clearButtonTriggerEventMultiple'](),VisuMZ['ButtonTriggerEvts'][_0x21d133(0x1fb)][_0x21d133(0x1dd)](this);},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x222)]=Scene_Map['prototype'][_0x5b2c3b(0x220)],Scene_Map[_0x5b2c3b(0x197)]['isMenuEnabled']=function(){const _0x3c9392=_0x5b2c3b;if($gameMap[_0x3c9392(0x1ef)]())return![];return VisuMZ[_0x3c9392(0x200)][_0x3c9392(0x222)]['call'](this);},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x18b)]=Sprite_Character[_0x5b2c3b(0x197)]['isAllowCharacterTilt'],Sprite_Character['prototype'][_0x5b2c3b(0x1e9)]=function(){const _0x3f0b1a=_0x5b2c3b;if($gameMap&&$gameMap['isButtonTriggerEventSpotlightMode']())return![];if($gameMap&&$gameMap[_0x3f0b1a(0x17f)]())return![];return VisuMZ['ButtonTriggerEvts'][_0x3f0b1a(0x18b)]['call'](this);},VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x22c)]=Sprite_Character['prototype'][_0x5b2c3b(0x238)],Sprite_Character[_0x5b2c3b(0x197)][_0x5b2c3b(0x238)]=function(){const _0x2a64e1=_0x5b2c3b;let _0x443bde=VisuMZ['ButtonTriggerEvts'][_0x2a64e1(0x22c)][_0x2a64e1(0x1dd)](this);if(_0x443bde>0x0)return _0x443bde;if(!this['_character'])return _0x443bde;if(this['_character'][_0x2a64e1(0x1db)][_0x2a64e1(0x204)]!==_0x2a64e1(0x1c1))return _0x443bde;if(!this[_0x2a64e1(0x18f)][_0x2a64e1(0x1eb)])return _0x443bde;return this[_0x2a64e1(0x1ad)](_0x443bde);},Sprite_Character[_0x5b2c3b(0x1fe)]=VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1e6)]['Auto'][_0x5b2c3b(0x208)]??!![],Sprite_Character[_0x5b2c3b(0x197)]['getButtonTriggerEventKeyIconIndex']=function(_0x532b96){const _0x301884=_0x5b2c3b;this[_0x301884(0x18f)][_0x301884(0x199)]=this[_0x301884(0x18f)]['_triggerButtonKeys']||[];if(this[_0x301884(0x18f)]['_triggerButtonKeys'][_0x301884(0x18c)]>0x0){const _0x49d5ef=VisuMZ['ButtonTriggerEvts'][_0x301884(0x1e6)][_0x301884(0x1b1)],_0xf5d21e='AutoIcon%1'[_0x301884(0x205)](this[_0x301884(0x18f)]['_triggerButtonKeys'][0x0][_0x301884(0x1da)]()['trim']());_0x532b96=_0x49d5ef[_0xf5d21e];if(_0x532b96>0x0)return _0x532b96;if(Sprite_Character[_0x301884(0x1fe)]&&Imported[_0x301884(0x211)]){const _0x40d2f0=this[_0x301884(0x18f)][_0x301884(0x199)][0x0],_0x525f28=VisuMZ[_0x301884(0x200)][_0x301884(0x1ba)](_0x40d2f0);if(_0x525f28>0x0)_0x532b96=_0x525f28;}}return _0x532b96;},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1ba)]=function(_0x8ad53f){const _0xfd9669=_0x5b2c3b;this['_gamepadType']=this[_0xfd9669(0x23e)]||{};const _0x52d1b5=Input[_0xfd9669(0x22d)]();this[_0xfd9669(0x23e)][_0x52d1b5]=this[_0xfd9669(0x23e)][_0x52d1b5]||{};if(this[_0xfd9669(0x23e)][_0x52d1b5][_0x8ad53f]!==undefined)return this[_0xfd9669(0x23e)][_0x52d1b5][_0x8ad53f];this[_0xfd9669(0x23e)][_0x52d1b5][_0x8ad53f]=0x0;const _0x5abea1=TextManager[_0xfd9669(0x195)](_0x8ad53f);return _0x5abea1[_0xfd9669(0x1c0)](/\\I\[(\d+)\]/i)&&(this['_gamepadType'][_0x52d1b5][_0x8ad53f]=Number(RegExp['$1'])),this[_0xfd9669(0x23e)][_0x52d1b5][_0x8ad53f];},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x22e)]=Game_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x231)],Game_Map[_0x5b2c3b(0x197)]['requestRefresh']=function(){const _0x2931b9=_0x5b2c3b;VisuMZ[_0x2931b9(0x200)][_0x2931b9(0x22e)]['call'](this),VisuMZ[_0x2931b9(0x200)][_0x2931b9(0x23e)]={};},Spriteset_Map['BUTTON_TRIGGER_EVENT_SPOTLIGHT_SETTINGS']={'filename':VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x1e6)][_0x5b2c3b(0x1fd)][_0x5b2c3b(0x236)]||'','customAnchorX':VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x1e6)]['Spotlight'][_0x5b2c3b(0x188)]||0x0,'customAnchorY':VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1e6)][_0x5b2c3b(0x1fd)][_0x5b2c3b(0x1a0)]||0x0,'customBlendMode':VisuMZ['ButtonTriggerEvts']['Settings'][_0x5b2c3b(0x1fd)]['BlendMode']||0x0,'radius':VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1e6)][_0x5b2c3b(0x1fd)][_0x5b2c3b(0x1a5)]||0x1,'opacity':VisuMZ['ButtonTriggerEvts'][_0x5b2c3b(0x1e6)]['Spotlight'][_0x5b2c3b(0x221)]||0x1,'fadeSpeed':VisuMZ[_0x5b2c3b(0x200)]['Settings'][_0x5b2c3b(0x1fd)]['FadeSpeed']||0x1},VisuMZ[_0x5b2c3b(0x200)]['Spriteset_Map_createLowerLayer']=Spriteset_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1a3)],Spriteset_Map['prototype'][_0x5b2c3b(0x1a3)]=function(){const _0x1250a2=_0x5b2c3b;VisuMZ[_0x1250a2(0x200)][_0x1250a2(0x1be)][_0x1250a2(0x1dd)](this),this[_0x1250a2(0x17e)]();},Spriteset_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x17e)]=function(){const _0xcfcc5a=_0x5b2c3b,_0x316fba=Spriteset_Map[_0xcfcc5a(0x1d1)],_0x29af1c=new Sprite();_0x316fba[_0xcfcc5a(0x234)]!==''?_0x29af1c[_0xcfcc5a(0x1a1)]=ImageManager[_0xcfcc5a(0x1aa)](_0x316fba[_0xcfcc5a(0x234)]):_0x29af1c[_0xcfcc5a(0x1a1)]=ImageManager[_0xcfcc5a(0x1c5)](),_0x29af1c[_0xcfcc5a(0x20a)]=0x0,_0x316fba[_0xcfcc5a(0x234)]!==''?(_0x29af1c[_0xcfcc5a(0x1e7)]['x']=_0x316fba[_0xcfcc5a(0x1ec)],_0x29af1c[_0xcfcc5a(0x1e7)]['y']=_0x316fba[_0xcfcc5a(0x226)],_0x29af1c[_0xcfcc5a(0x1df)]=_0x316fba['customBlendMode']):(_0x29af1c[_0xcfcc5a(0x1e7)]['x']=0.5,_0x29af1c[_0xcfcc5a(0x1e7)]['y']=0.5,_0x29af1c[_0xcfcc5a(0x1df)]=0x2),this[_0xcfcc5a(0x1b8)]=_0x29af1c,this['addChild'](this[_0xcfcc5a(0x1b8)]);},VisuMZ[_0x5b2c3b(0x200)][_0x5b2c3b(0x1f5)]=Spriteset_Map['prototype'][_0x5b2c3b(0x1e1)],Spriteset_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1e1)]=function(){const _0x28f641=_0x5b2c3b;VisuMZ[_0x28f641(0x200)]['Spriteset_Map_update'][_0x28f641(0x1dd)](this),this['updateButtonTriggerEventSpotlightSprite']();},Spriteset_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x239)]=function(){const _0x21c809=_0x5b2c3b;this[_0x21c809(0x1b0)](),$gameMap[_0x21c809(0x1ef)]()&&this[_0x21c809(0x241)]();},Spriteset_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x1b0)]=function(){const _0x3f6607=_0x5b2c3b,_0x2d3452=this['_buttonTriggerEventSpotlightSprite'],_0x2b8da2=Spriteset_Map[_0x3f6607(0x1d1)],_0x4d7e64=$gameMap[_0x3f6607(0x1ef)]()?_0x2b8da2[_0x3f6607(0x20a)]:0x0,_0x4c2c68=_0x2b8da2[_0x3f6607(0x1d7)];if(_0x2d3452&&_0x2d3452[_0x3f6607(0x20a)]!==_0x4d7e64){if(_0x2d3452['opacity']>_0x4d7e64)_0x2d3452[_0x3f6607(0x20a)]=Math[_0x3f6607(0x237)](_0x2d3452[_0x3f6607(0x20a)]-_0x4c2c68,_0x4d7e64);else _0x2d3452[_0x3f6607(0x20a)]<_0x4d7e64&&(_0x2d3452['opacity']=Math[_0x3f6607(0x228)](_0x2d3452[_0x3f6607(0x20a)]+_0x4c2c68,_0x4d7e64));}},Spriteset_Map[_0x5b2c3b(0x197)][_0x5b2c3b(0x241)]=function(){const _0x1f27e4=_0x5b2c3b,_0x7b55c7=this[_0x1f27e4(0x1b8)];let _0x53f08c=this[_0x1f27e4(0x1e0)]($gamePlayer);const _0x52b400=$gameMap[_0x1f27e4(0x19b)]();_0x52b400&&(_0x53f08c=this[_0x1f27e4(0x1e0)](_0x52b400)),_0x7b55c7['x']=_0x53f08c['_character'][_0x1f27e4(0x210)](),_0x7b55c7['y']=_0x53f08c[_0x1f27e4(0x18f)][_0x1f27e4(0x1de)]()-Math[_0x1f27e4(0x182)](_0x53f08c[_0x1f27e4(0x19e)]/0x2);};function _0x8a1e(){const _0xc5accc=['NUM','isTriggered','round','Game_Player_moveByInput','VisuMZ_1_EventsMoveCore','updateSelfMovement','floor','setupButtonTriggerEventMultiple','AnchorX','includes','registerCommand','Sprite_Character_isAllowCharacterTilt','length','fillRect','abs','_character','4cFNAIf','onButtonTriggerEventSpotlightInputDir','list','21988665FmkWjU','JSON','getInputButtonString','clearPageSettings','prototype','start','_triggerButtonKeys','note','getSelectedButtonTriggerEvent','left','parameters','height','clearButtonTriggerEventMultiple','AnchorY','bitmap','filter','createLowerLayer','deltaXFrom','Radius','Game_Event_updateSelfMovement','distance','map','Game_System_initialize','loadSystem','pagedown','Enable','getButtonTriggerEventKeyIconIndex','RegExp','ARRAYEVAL','updateButtonTriggerEventSpotlightOpacity','Auto','canStartLocalEvents','73241AUlGED','event','isMoving','_buttonTriggerEventsEnabled','ARRAYFUNC','_buttonTriggerEventSpotlightSprite','setupEventButtonTrigger','GetCoreEngineButtonKeyIcon','push','Game_Event_setupPageSettings','isRepeated','Spriteset_Map_createLowerLayer','tileWidth','match','Game_Event','_lastButtonTriggerEvents','NoAutoClickTrigger','isButtonTriggerEventEnabled','buttonTriggerEventSpotlight','NoSealMovement','BUTTON_TRIGGER_EVENTS_DEFAULT_SEALED_MOVEMENT','Scene_Boot_loadSystemImages','_buttonTriggerEventTargetIndex','setButtonTriggerEventEnabled','TriggerButtons','isTriggerIn','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','tileHeight','Game_Event_clearPageSettings','_cached_ButtonTriggerEvts_Spotlight','BUTTON_TRIGGER_EVENT_SPOTLIGHT_SETTINGS','BUTTON_TRIGGER_AUTO_CLICK_TRIGGER','pageup','code','updateMove','ARRAYNUM','fadeSpeed','Scene_Map_isSceneChangeOk','AutoSealedMovement','toUpperCase','constructor','setupButtonTriggerEventNotetags','call','screenY','blendMode','findTargetSprite','update','updateButtonTriggerEventSpotlightSelect','#ffffff','deltaYFrom','setupStartingMapEvent','Settings','anchor','_customModified','isAllowCharacterTilt','canMove','_autoButtonTriggerEventIcon','customAnchorX','hasButtonTriggerKey','onMapTouch','isButtonTriggerEventSpotlightMode','_buttonTriggerEventTargets','sort','updateButtonTriggerEventSpotlightInput','354585FpWXSQ','ceil','Spriteset_Map_update','advanced','isEventButtonTriggered','checkButtonTriggerEventStringTags','STR','width','Scene_Map_onMapTouch','Game_Player_canStartLocalEvents','Spotlight','BUTTON_TRIGGER_EVENT_AUTO_SYNCHRONIZE','SystemEnableButtonTriggerEvtsMenu','ButtonTriggerEvts','Game_Event_hasClickTrigger','5065568gLTtpD','toLowerCase','name','format','zoomScale','status','AutoSynchronize','isSceneChangeOk','opacity','STRUCT','events','page','initButtonTriggerEventSettings','drawCircle','screenX','VisuMZ_0_CoreEngine','remove','shift','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','onButtonTriggerEventSpotlightOk','playCursor','isSceneMap','initialize','trim','screenWidth','down','SealMovement','isButtonTriggerEvent','1139675EryJKN','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','isMenuEnabled','Opacity','Scene_Map_isMenuEnabled','eventId','1654976CTYvgV','moveByInput','customAnchorY','exit','min','isFurnitureSystemMode','setupButtonTriggerEventCommentTags','return\x200','Sprite_Character_getEventIconIndex','getLastUsedGamepadType','Game_Map_requestRefresh','split','510NOIVii','requestRefresh','tab','NoAutoTriggerIcon','filename','isNearThePlayerScreen','Filename','max','getEventIconIndex','updateButtonTriggerEventSpotlightSprite','ConvertParams','setupEventButtonTriggerEventList','parse','toString','_gamepadType','hasClickTrigger','setupPageSettings','updateButtonTriggerEventSpotlightPosition','clear','Game_CharacterBase_updateMove','playCancel','433484vzKVuP','setupButtonTriggerEventSettings','_antiAutoButtonTriggerClickTrigger','AutoClickTrigger','description','createButtonTriggerEventSpotlightSprite','hasSealedMovement'];_0x8a1e=function(){return _0xc5accc;};return _0x8a1e();}