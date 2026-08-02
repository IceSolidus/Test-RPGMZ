/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/controlswindow/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Show a window letting the player know scene controls
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.0.0
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.10.0
 * ----------------------------------------------------------------------------
 * Description: Shows a window in each scene where you can list the controls
 * to move around and select things within the scene. Each scene can be
 * configured separately, or the window can be completely hidden if not desired
 * in certain scenes such as third party scenes with their own control windows.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ---------------------------Quick Start Guide--------------------------------
 * To get started using this plugin, follow the below steps:
 *
 * 1) Set up the default controls window parameters
 *
 * 2) Set up any custom scene parameters in the Scene Presets parameter
 *
 * 3) If you do not want the window to display in some scenes, enter those
 * scenes into the No Display Scenes parameter
 *
 * 4) The plugin handles the rest
 * ---------------------------------Option-------------------------------------
 * If you would like to give your player the option to turn controls windows
 * on or off via the Options menu, you can create a custom option using a
 * plugin such as [CGMZ] Options with the symbol: cgmz_controlswindow
 *
 * This option should be created as a toggle (boolean) option.
 * --------------------------------Advanced------------------------------------
 * [USERS]
 * Would you like to switch the [CGMZ] Controls Window plugin window mid-scene?
 * If you are using a plugin that accepts custom JavaScript, you can call the
 * below JavaScript to change the window to one set up in the Other Presets
 * parameter:
 * this.CGMZ_changeControlsWindow("yourIdHere");
 *
 * If your custom JavaScript is not running within a scene context (or if your
 * game crashes when running the above code and you don't know what a context
 * is), try instead running the following code:
 * SceneManager._scene.CGMZ_changeControlsWindow("yourIdHere");
 *
 * If it is still not working, the scene is not coded as a menu scene and the
 * [CGMZ] Controls Window is set up to only work in menu scenes.
 * 
 * [DEVELOPERS]
 * Would you like to provide an easy way to show the [CGMZ] Controls Window
 * plugin window in your custom scene? Add a text parameter that takes an id,
 * then in your scene implement the function:
 * Scene_MenuBase.prototype.CGMZ_getControlsWindowOtherPreset
 * This should return the following:
 * return $cgmzTemp.getControlWindowPresetOther(yourPresetId);
 *
 * Now your custom scene will show the [CGMZ] Controls Window with the options
 * the user set up in their Other Presets parameter with that id in this
 * plugin.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not contain any plugin commands.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games
 *
 * This means the following will work in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify plugin parameters
 * ✓ Remove this plugin from your game
 * ----------------------------Required Plugin---------------------------------
 * Please note that all [CGMZ] plugins require [CGMZ] Core to be installed
 * above them in the plugin manager. You can download it from my website:
 * https://www.caspergaming.com/plugins/cgmz/core/
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_ControlsWindow.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -----------------------------Latest Version---------------------------------
 * Hi all, this latest version adds a new No Display Scenes parameter. This
 * should be an easier way to set up scenes you do not want the controls
 * window to display in, as you can now just list the scene name with a
 * selectable option for each of the default menu scenes. Previously, you had
 * to make a scene preset with the scene name and set the Display parameter to
 * false, which was more tedious and harder to see what scenes displayed the
 * window at a glance.
 *
 * As a result of the above, the display parameter has been removed from preset
 * setup. If you previously had some of your presets set to false, you will
 * need to remove those presets and migrate the scene constructor name to the
 * No Display Scenes parameter.
 *
 * This update also adds a config manager flag to check for if the player has
 * turned controls windows on or off in the options. You will need a plugin
 * that can allow you to add custom options, such as [CGMZ] Options to use
 * this. A similar ability to disable controls windows was added as a game
 * switch, which is controllable by you the developer.
 *
 * Version 1.0.0
 * - Added no display scenes
 * - Added ConfigManager option to turn on/off the controls window
 * - Added switch to turn on/off the controls window
 * - Organized integration parameters
 *
 * @param Scene Settings
 *
 * @param Scene Presets
 * @parent Scene Settings
 * @type struct<ControlSetting>[]
 * @default []
 * @desc Set up scene specific settings here
 *
 * @param No Display Scenes
 * @parent Scene Settings
 * @type select[]
 * @option Scene_Debug
 * @option Scene_Equip
 * @option Scene_GameEnd
 * @option Scene_Item
 * @option Scene_Load
 * @option Scene_Menu
 * @option Scene_Name
 * @option Scene_Options
 * @option Scene_Save
 * @option Scene_Shop
 * @option Scene_Skill
 * @option Scene_Status
 * @default ["Scene_Debug"]
 * @desc Select scenes you do not want the window to display in.
 *
 * @param Mechanics
 *
 * @param Disable Switch
 * @parent Mechanics
 * @type switch
 * @default 0
 * @desc If set and this switch is turned ON, controls windows will not display
 *
 * @param Other Plugins
 *
 * @param Other Presets
 * @parent Other Plugins
 * @type struct<ControlSetting>[]
 * @default []
 * @desc Set up control window settings for use in other plugins
 *
 * @param Fallback Settings
 *
 * @param Window Width
 * @parent Fallback Settings
 * @type number
 * @default 75
 * @desc Percentage of the screen width to take up
 *
 * @param Window Height
 * @parent Fallback Settings
 * @type number
 * @default 0
 * @desc Number of text lines tall to make the window.
 *
 * @param Use Selectable Height
 * @parent Fallback Settings
 * @type boolean
 * @default true
 * @desc When calculating window height, make it slightly larger for selectable lines?
 *
 * @param Window X
 * @parent Fallback Settings
 * @type number
 * @default 12
 * @desc Percentage across the screen to start the window. 100 = along right edge
 *
 * @param Window Y
 * @parent Fallback Settings
 * @type number
 * @default 0
 * @desc Percentage down the screen to start the window. 100 = along bottom
 *
 * @param Font Size
 * @parent Fallback Settings
 * @type number
 * @default 0
 * @desc Font size in the controls window. 0 = game default
 *
 * @param Font Face
 * @parent Fallback Settings
 * @desc Font face to use in the controls window. Blank = game default
 *
 * @param Text Alignment
 * @parent Fallback Settings
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc Alignment for text in the window
 *
 * @param Background Image
 * @parent Fallback Settings
 * @type file
 * @dir img
 * @desc Image to draw in the back of the window
 *
 * @param Keyboard Controls
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]Z     \c[1]Cancel: \c[0]X
 * @desc Default text to show for keyboard controls. Text codes supported.
 *
 * @param Keyboard Controls Flash
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]Z     \c[1]Cancel: \c[0]X
 * @desc Default text to show for keyboard controls. Text codes supported.
 *
 * @param Gamepad Controls
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Default text to show for gamepad controls. Text codes supported.
 *
 * @param Gamepad Controls Flash
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Default text to show for gamepad controls. Text codes supported.
 *
 * @param PS Controls
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]\c[3]X\c[0]     \c[1]Cancel: \c[0]\c[2]O\c[0]
 * @desc Gamepad controls if the last controller was playstation brand. Text codes supported.
 *
 * @param PS Controls Flash
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]\c[3]X\c[0]     \c[1]Cancel: \c[0]\c[2]O\c[0]
 * @desc Gamepad controls if the last controller was playstation brand. Text codes supported.
 *
 * @param Nintendo Controls
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Gamepad controls if the last controller was nintendo brand. Text codes supported.
 *
 * @param Nintendo Controls Flash
 * @parent Fallback Settings
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Gamepad controls if the last controller was nintendo brand. Text codes supported.
 *
 * @param Control Flash Time
 * @parent Fallback Settings
 * @default 0
 * @desc Amount of frames to wait before changing control text to the flash version (and back). 0 = no flash effect
 *
 * @param Other Settings
 *
 * @param Match Button Area Height
 * @parent Other Settings
 * @type boolean
 * @default false
 * @desc If true, will set the button area height to fit the window with 1 line of text
 *
 * @param Debug Options
 *
 * @param Report Back Image Dimensions
 * @parent Debug Options
 * @type boolean
 * @default false
 * @desc If true, will report expected width/height of the back image (only in playtest).
 *
 * @param Report Scene Constructor
 * @parent Debug Options
 * @type boolean
 * @default false
 * @desc If true, will report scene constructor name when a scene is created
 *
 * @param Integrations
 *
 * @param Window Backgrounds Preset
 * @parent Integrations
 * @desc [CGMZ] Window Backgrounds preset id to fall back to, if any.
 *
 * @param Window Settings Preset
 * @parent Integrations
 * @desc [CGMZ] Window Settings preset id to fall back to, if any.
*/
/*~struct~ControlSetting:
 * @param Scene
 * @desc The scene which will use these control settings (or the preset id)
 *
 * @param Window Width
 * @type number
 * @default 75
 * @desc Percentage of the screen width to take up
 *
 * @param Window Height
 * @type number
 * @default 1
 * @desc Number of text lines tall to make the window. When 0, will match button height.
 *
 * @param Use Selectable Height
 * @type boolean
 * @default true
 * @desc When calculating window height, make it slightly larger for selectable lines?
 *
 * @param Window X
 * @type number
 * @default 12
 * @desc Percentage across the screen to start the window. 100 = along right edge
 *
 * @param Window Y
 * @type number
 * @default 0
 * @desc Percentage down the screen to start the window. 100 = along bottom
 *
 * @param Font Size
 * @type number
 * @default 0
 * @desc Font size in the controls window. 0 = game default
 *
 * @param Font Face
 * @desc Font face to use in the controls window. Blank = game default
 *
 * @param Text Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc Alignment for text in the window
 *
 * @param Background Image
 * @type file
 * @dir img
 * @desc Image to draw in the back of the window
 *
 * @param Keyboard Controls
 * @default \c[1]OK: \c[0]Z     \c[1]Cancel: \c[0]X
 * @desc Default text to show for keyboard controls. Text codes supported.
 *
 * @param Keyboard Controls Flash
 * @default \c[1]OK: \c[0]Z     \c[1]Cancel: \c[0]X
 * @desc Default text to show for keyboard controls. Text codes supported.
 *
 * @param Gamepad Controls
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Default text to show for gamepad controls. Text codes supported.
 *
 * @param Gamepad Controls Flash
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Default text to show for gamepad controls. Text codes supported.
 *
 * @param PS Controls
 * @default \c[1]OK: \c[0]\c[3]X\c[0]     \c[1]Cancel: \c[0]\c[2]O\c[0]
 * @desc Default text to show for gamepad controls (playstation). Text codes supported.
 *
 * @param PS Controls Flash
 * @default \c[1]OK: \c[0]\c[3]X\c[0]     \c[1]Cancel: \c[0]\c[2]O\c[0]
 * @desc Default text to show for gamepad controls (playstation). Text codes supported.
 *
 * @param Nintendo Controls
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Default text to show for gamepad controls (nintendo). Text codes supported.
 *
 * @param Nintendo Controls Flash
 * @default \c[1]OK: \c[0]\c[3]A\c[0]     \c[1]Cancel: \c[0]\c[2]B\c[0]
 * @desc Default text to show for gamepad controls (nintendo). Text codes supported.
 *
 * @param Control Flash Time
 * @default 0
 * @desc Amount of frames to wait before changing control text to the flash version (and back). 0 = no flash effect
 *
 * @param Integrations
 *
 * @param Window Backgrounds Preset
 * @parent Integrations
 * @desc [CGMZ] Window Backgrounds preset id to use, if any
 *
 * @param Window Settings Preset
 * @parent Integrations
 * @desc [CGMZ] Window Backgrounds preset id to use, if any
*/
Imported.CGMZ_ControlsWindow = true;
CGMZ.Versions["Controls Window"] = "1.0.0";
CGMZ.ControlsWindow = {};
CGMZ.ControlsWindow.parameters = PluginManager.parameters('CGMZ_ControlsWindow');
CGMZ.ControlsWindow.FontFace = CGMZ.ControlsWindow.parameters["Font Face"];
CGMZ.ControlsWindow.TextAlignment = CGMZ.ControlsWindow.parameters["Text Alignment"];
CGMZ.ControlsWindow.KeyboardControls = CGMZ.ControlsWindow.parameters["Keyboard Controls"];
CGMZ.ControlsWindow.KeyboardControlsFlash = CGMZ.ControlsWindow.parameters["Keyboard Controls Flash"];
CGMZ.ControlsWindow.GamepadControls = CGMZ.ControlsWindow.parameters["Gamepad Controls"];
CGMZ.ControlsWindow.GamepadControlsFlash = CGMZ.ControlsWindow.parameters["Gamepad Controls Flash"];
CGMZ.ControlsWindow.PSControls = CGMZ.ControlsWindow.parameters["PS Controls"];
CGMZ.ControlsWindow.PSControlsFlash = CGMZ.ControlsWindow.parameters["PS Controls Flash"];
CGMZ.ControlsWindow.NintendoControls = CGMZ.ControlsWindow.parameters["Nintendo Controls"];
CGMZ.ControlsWindow.NintendoControlsFlash = CGMZ.ControlsWindow.parameters["Nintendo Controls Flash"];
CGMZ.ControlsWindow.BackgroundImage = CGMZ.ControlsWindow.parameters["Background Image"];
CGMZ.ControlsWindow.WindowBackgroundsPreset = CGMZ.ControlsWindow.parameters["Window Backgrounds Preset"];
CGMZ.ControlsWindow.WindowSettingsPreset = CGMZ.ControlsWindow.parameters["Window Settings Preset"];
CGMZ.ControlsWindow.WindowWidth = Number(CGMZ.ControlsWindow.parameters["Window Width"]);
CGMZ.ControlsWindow.WindowHeight = Number(CGMZ.ControlsWindow.parameters["Window Height"]);
CGMZ.ControlsWindow.WindowX = Number(CGMZ.ControlsWindow.parameters["Window X"]);
CGMZ.ControlsWindow.WindowY = Number(CGMZ.ControlsWindow.parameters["Window Y"]);
CGMZ.ControlsWindow.FontSize = Number(CGMZ.ControlsWindow.parameters["Font Size"]);
CGMZ.ControlsWindow.ControlFlashTime = Number(CGMZ.ControlsWindow.parameters["Control Flash Time"]);
CGMZ.ControlsWindow.DisableSwitch = Number(CGMZ.ControlsWindow.parameters["Disable Switch"]);
CGMZ.ControlsWindow.MatchButtonAreaHeight = (CGMZ.ControlsWindow.parameters["Match Button Area Height"] === 'true');
CGMZ.ControlsWindow.UseSelectableHeight = (CGMZ.ControlsWindow.parameters["Use Selectable Height"] === 'true');
CGMZ.ControlsWindow.ReportBackImgDimensions = (CGMZ.ControlsWindow.parameters["Report Back Image Dimensions"] === 'true');
CGMZ.ControlsWindow.ReportSceneConstructor = (CGMZ.ControlsWindow.parameters["Report Scene Constructor"] === 'true');
CGMZ.ControlsWindow.ScenePresets = CGMZ_Utils.parseJSON(CGMZ.ControlsWindow.parameters["Scene Presets"], [], "[CGMZ] Controls Window", "Your Scene Presets parameter had invalid JSON and could not be read.");
CGMZ.ControlsWindow.OtherPresets = CGMZ_Utils.parseJSON(CGMZ.ControlsWindow.parameters["Other Presets"], [], "[CGMZ] Controls Window", "Your Other Presets parameter had invalid JSON and could not be read.");
CGMZ.ControlsWindow.NoDisplayScenes = CGMZ_Utils.parseJSON(CGMZ.ControlsWindow.parameters["No Display Scenes"], [], "[CGMZ] Controls Window", "Your No Display Scenes parameter had invalid JSON and could not be read.");
//=============================================================================
// CGMZ_ControlWindowPreset
//-----------------------------------------------------------------------------
// Data class used to store preset data. Not saved.
//=============================================================================
function CGMZ_ControlWindowPreset() {
	this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_ControlWindowPreset.prototype.initialize = function(preset) {
	this.scene = preset.Scene;
	this.useSelectableHeight = (preset["Use Selectable Height"] === 'true');
	this.windowX = Number(preset["Window X"]);
	this.windowY = Number(preset["Window Y"]);
	this.windowWidth = Number(preset["Window Width"]);
	this.windowHeight = Number(preset["Window Height"]);
	this.fontSize = Number(preset["Font Size"]);
	this.controlFlashTime = Number(preset["Control Flash Time"]);
	this.fontFace = preset["Font Face"];
	this.textAlign = preset["Text Alignment"];
	this.backImg = preset["Background Image"];
	this.cgmzWindowBackground = preset["Window Backgrounds Preset"];
	this.cgmzWindowSettings = preset["Window Settings Preset"];
	this.keyboardControls = preset["Keyboard Controls"];
	this.keyboardControlsFlash = preset["Keyboard Controls Flash"];
	this.gamepadControls = preset["Gamepad Controls"];
	this.gamepadControlsFlash = preset["Gamepad Controls Flash"];
	this.psControls = preset["PS Controls"];
	this.psControlsFlash = preset["PS Controls Flash"];
	this.nintendoControls = preset["Nintendo Controls"];
	this.nintendoControlsFlash = preset["Nintendo Controls Flash"];
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Load presets
//=============================================================================
//-----------------------------------------------------------------------------
// Also load control window presets
//-----------------------------------------------------------------------------
const alias_CGMZ_ControlsWindow_CGMZ_Temp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_ControlsWindow_CGMZ_Temp_createPluginData.call(this);
	this.initializeControlWindowPresets();
};
//-----------------------------------------------------------------------------
// Initialize control window presets
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeControlWindowPresets = function() {
	this._controlWindowPresets = {};
	this._controlWindowPresetsOther = {};
	for(const preset of CGMZ.ControlsWindow.ScenePresets) {
		const parsedPreset = CGMZ_Utils.parseJSON(preset, null, "[CGMZ] Controls Window", "One of your scene presets had invalid JSON and could not be read. It will be skipped.");
		if(!parsedPreset) continue;
		const presetObj = new CGMZ_ControlWindowPreset(parsedPreset);
		this._controlWindowPresets[presetObj.scene] = presetObj;
	}
	for(const preset of CGMZ.ControlsWindow.OtherPresets) {
		const parsedPreset = CGMZ_Utils.parseJSON(preset, null, "[CGMZ] Controls Window", "One of your other presets had invalid JSON and could not be read. It will be skipped.");
		if(!parsedPreset) continue;
		const presetObj = new CGMZ_ControlWindowPreset(parsedPreset);
		this._controlWindowPresetsOther[presetObj.scene] = presetObj;
	}
};
//-----------------------------------------------------------------------------
// Get a control window preset - this plugin
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getControlWindowPreset = function(scene) {
	return this._controlWindowPresets[scene];
};
//-----------------------------------------------------------------------------
// Get a control window preset - other plugins
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getControlWindowPresetOther = function(id) {
	return this._controlWindowPresetsOther[id];
};
//=============================================================================
// Scene_MenuBase
//-----------------------------------------------------------------------------
// Create the controls window
//=============================================================================
//-----------------------------------------------------------------------------
// Change button area height if setting enabled
//-----------------------------------------------------------------------------
const alias_CGMZControlsWindow_SceneMenuBase_buttonAreaHeight = Scene_MenuBase.prototype.buttonAreaHeight;
Scene_MenuBase.prototype.buttonAreaHeight = function() {
	if(CGMZ.ControlsWindow.MatchButtonAreaHeight) return this.calcWindowHeight(1, false);
	return alias_CGMZControlsWindow_SceneMenuBase_buttonAreaHeight.call(this);
};
//-----------------------------------------------------------------------------
// Try to create the controls window
//-----------------------------------------------------------------------------
const alias_CGMZControlsWindow_SceneMenuBase_create = Scene_MenuBase.prototype.create;
Scene_MenuBase.prototype.create = function() {
	alias_CGMZControlsWindow_SceneMenuBase_create.call(this);
	if($gameTemp.isPlaytest() && CGMZ.ControlsWindow.ReportSceneConstructor) {
		console.info(`%c[CGMZ] Controls Window - Scene created with constructor name: ${this.constructor.name}`, 'color: #7AA7D7; font-weight: bold; font-size: 1.2em');
	}
	this.CGMZ_createControlsWindow();
};
//-----------------------------------------------------------------------------
// Create the controls window
//-----------------------------------------------------------------------------
Scene_MenuBase.prototype.CGMZ_getControlsWindowOtherPreset = function() {
	return undefined;
	// Implement this function in other plugins, for example:
	// return $cgmzTemp.getControlWindowPresetOther(yourPresetId);
};
//-----------------------------------------------------------------------------
// Try to create the controls window
//-----------------------------------------------------------------------------
Scene_MenuBase.prototype.CGMZ_createControlsWindow = function() {
	const sceneName = this.constructor.name;
	if(CGMZ.ControlsWindow.NoDisplayScenes.includes(sceneName)) return;
	if(CGMZ.ControlsWindow.DisableSwitch && $gameSwitches.value(CGMZ.ControlsWindow.DisableSwitch)) return;
	if(ConfigManager.hasOwnProperty('cgmz_controlswindow') && !ConfigManager.cgmz_controlswindow) return;
	const preset = $cgmzTemp.getControlWindowPreset(sceneName) || this.CGMZ_getControlsWindowOtherPreset();
	const rect = this.CGMZ_controlsWindowRect(preset);
	this._CGMZ_controlsWindow = new CGMZ_Window_ControlsWindow(rect, preset);
	this.addWindow(this._CGMZ_controlsWindow);
};
//-----------------------------------------------------------------------------
// Get the controls window rect
//-----------------------------------------------------------------------------
Scene_MenuBase.prototype.CGMZ_controlsWindowRect = function(preset) {
	const px = (preset) ? preset.windowX : CGMZ.ControlsWindow.WindowX;
	const py = (preset) ? preset.windowY : CGMZ.ControlsWindow.WindowY;
	const pw = (preset) ? preset.windowWidth : CGMZ.ControlsWindow.WindowWidth;
	const ph = (preset) ? preset.windowHeight : CGMZ.ControlsWindow.WindowHeight;
	const selectable = (preset) ? preset.useSelectableHeight : CGMZ.ControlsWindow.UseSelectableHeight;
	const width = Graphics.boxWidth * (pw / 100.0);
	const height = (ph === 0) ? this.buttonAreaHeight() : this.calcWindowHeight(ph, selectable);
	const x = (px === 100) ? Graphics.boxWidth - width : Graphics.boxWidth * (px / 100.0);
	const y = (py === 100) ? Graphics.boxHeight - height : Graphics.boxHeight * (py / 100.0);
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Change the controls window preset (or create controls window if previously
// did not exist)
//-----------------------------------------------------------------------------
Scene_MenuBase.prototype.CGMZ_changeControlsWindow = function(id) {
	const preset = $cgmzTemp.getControlWindowPresetOther(id);
	if(preset) {
		if(preset.display) {
			const rect = this.CGMZ_controlsWindowRect(preset);
			if(!this._CGMZ_controlsWindow) {
				this._CGMZ_controlsWindow = new CGMZ_Window_ControlsWindow(rect, preset);
				this.addWindow(this._CGMZ_controlsWindow);
			} else {
				this._CGMZ_controlsWindow.setControlWindowPreset(preset, rect);
			}
		} else {
			if(this._CGMZ_controlsWindow) this._CGMZ_controlsWindow.hide();
		}
	} else {
		CGMZ_Utils.reportError(`Could not find control window preset with id: ${id}`, '[CGMZ] Controls Window', 'Make sure your call to CGMZ_changeControlsWindow passes the correct window id as a parameter.');
	}
};
//=============================================================================
// CGMZ_Window_ControlsWindow
//-----------------------------------------------------------------------------
// Displays the controls
//=============================================================================
function CGMZ_Window_ControlsWindow(rect) {
	this.initialize.apply(this, arguments);
}
CGMZ_Window_ControlsWindow.prototype = Object.create(Window_Base.prototype);
CGMZ_Window_ControlsWindow.prototype.constructor = CGMZ_Window_ControlsWindow;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.initialize = function(rect, preset) {
	this._preset = preset;
	Window_Base.prototype.initialize.call(this, rect);
	this._flashTimer = 0;
	this._isFlashing = false;
	this._needsRefresh = false;
	this._controlType = $cgmzTemp._lastInputType;
	const cgmzBackground = preset?.cgmzWindowBackground || CGMZ.ControlsWindow.WindowBackgroundsPreset;
	const cgmzSettings = preset?.cgmzWindowSettings || CGMZ.ControlsWindow.WindowSettingsPreset;
	if(Imported.CGMZ_WindowBackgrounds && cgmzBackground) this.CGMZ_setWindowBackground(cgmzBackground);
	if(Imported.CGMZ_WindowSettings && cgmzSettings) this.CGMZ_setWindowSettings(cgmzSettings);
	this.refresh();
	if($gameTemp.isPlaytest() && CGMZ.ControlsWindow.ReportBackImgDimensions) {
		CGMZ_Utils.reportDimensions(this.contentsBack.width, this.contentsBack.height, '[CGMZ] Control Window Dimensions');
	}
};
//-----------------------------------------------------------------------------
// Update - check for control type change
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.update = function() {
	Window_Base.prototype.update.call(this);
	const controlType = $cgmzTemp._lastInputType;
	this.updateFlashTiming();
	if(controlType !== this._controlType) {
		this._flashTimer = 0;
		this._isFlashing = false;
		this._needsRefresh = true;
		this._controlType = controlType;
	}
	if(this._needsRefresh) this.refresh();
};
//-----------------------------------------------------------------------------
// Update flash timing
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.updateFlashTiming = function() {
	const flashTime = (this._preset) ? this._preset.controlFlashTime : CGMZ.ControlsWindow.ControlFlashTime;
	if(flashTime) {
		this._flashTimer++;
		if(this._flashTimer > flashTime) {
			this._flashTimer = 0;
			this._isFlashing = !this._isFlashing;
			this._needsRefresh = true;
		}
	}
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.refresh = function() {
	this._needsRefresh = false;
	this.contents.clear();
	this.contentsBack.clear();
	this.resetFontSettings();
	this.loadBackImage();
	const fs = (this._preset) ? this._preset.fontSize : CGMZ.ControlsWindow.FontSize;
	const ff = (this._preset) ? this._preset.fontFace : CGMZ.ControlsWindow.FontFace;
	this.contents.fontSize = (fs === 0) ? $gameSystem.mainFontSize() : fs;
	this.contents.fontFace = (ff) ? ff : $gameSystem.mainFontFace();
	switch(this._controlType) {
		case "gamepad": this.drawGamepadControls(); break;
		case "keyboard": this.drawKeyboardControls(); break;
		default: this.drawKeyboardControls();
	}
};
//-----------------------------------------------------------------------------
// Draw Gamepad Controls
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.drawGamepadControls = function() {
	const brand = $cgmzTemp.getLastGamepadBrand();
	let string = (this._isFlashing) ? this._preset?.gamepadControlsFlash || CGMZ.ControlsWindow.GamepadControlsFlash : this._preset?.gamepadControls || CGMZ.ControlsWindow.GamepadControls;
	switch(brand) {
		case 'xbox': break;
		case 'playstation': 
			if(this._preset?.psControls || CGMZ.ControlsWindow.PSControls) {
				string = (this._isFlashing) ? this._preset?.psControlsFlash || CGMZ.ControlsWindow.PSControlsFlash : this._preset?.psControls || CGMZ.ControlsWindow.PSControls;
			}
			break;
		case 'nintendo':
			if(this._preset?.nintendoControls || CGMZ.ControlsWindow.NintendoControls) {
				string = (this._isFlashing) ? this._preset?.nintendoControlsFlash || CGMZ.ControlsWindow.NintendoControlsFlash : this._preset?.nintendoControls || CGMZ.ControlsWindow.NintendoControls;
			}
			break;
	}
	const alignment = (this._preset) ? this._preset.textAlign : CGMZ.ControlsWindow.TextAlignment;
	this.CGMZ_drawTextLine(string, 0, 0, this.contents.width, alignment);
};
//-----------------------------------------------------------------------------
// Draw Keyboard Controls
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.drawKeyboardControls = function() {
	const string = (this._isFlashing) ? this._preset?.keyboardControlsFlash || CGMZ.ControlsWindow.KeyboardControlsFlash : this._preset?.keyboardControls || CGMZ.ControlsWindow.KeyboardControls;
	const alignment = (this._preset) ? this._preset.textAlign : CGMZ.ControlsWindow.TextAlignment;
	this.CGMZ_drawTextLine(string, 0, 0, this.contents.width, alignment);
};
//-----------------------------------------------------------------------------
// Start loading the Background Image
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.loadBackImage = function() {
	const path = (this._preset) ? this._preset.backImg : CGMZ.ControlsWindow.BackgroundImage;
	if(path) {
		const imgData = CGMZ_Utils.getImageData(path, "img");
		const bitmap = ImageManager.loadBitmap(imgData.folder, imgData.filename);
		bitmap.addLoadListener(this.drawBackImage.bind(this, bitmap));
	}
};
//-----------------------------------------------------------------------------
// Draw the Background Image after load
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.drawBackImage = function(bitmap) {
	const sx = sy = dx = dy = 0;
	const dw = sw = this.contentsBack.width;
	const dh = sh = this.contentsBack.height;
	this.contentsBack.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
};
//-----------------------------------------------------------------------------
// Draw the Background Image after load
//-----------------------------------------------------------------------------
CGMZ_Window_ControlsWindow.prototype.setControlWindowPreset = function(preset, rect) {
	this._preset = preset;
	this.move(rect.x, rect.y, rect.width, rect.height);
	this.createContents();
	this.setBackgroundType(preset.windowBackground);
	const cgmzBackground = (preset && preset.cgmzWindowBackground) ? preset.cgmzWindowBackground : CGMZ.ControlsWindow.WindowBackgroundsPreset;
	const cgmzSettings = (preset && preset.cgmzWindowSettings) ? preset.cgmzWindowSettings : CGMZ.ControlsWindow.WindowSettingsPreset;
	if(Imported.CGMZ_WindowBackgrounds && cgmzBackground) this.CGMZ_setWindowBackground(cgmzBackground);
	if(Imported.CGMZ_WindowSettings) {
		if(cgmzSettings) {
			this.CGMZ_setWindowSettings(cgmzSettings);
		} else {
			this.CGMZ_setWindowSettings('default');
		}
	}
	this.refresh();
	this.show();
};