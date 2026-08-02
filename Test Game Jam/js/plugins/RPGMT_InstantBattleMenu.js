/*:
 * @target MZ
 * @plugindesc v1.1.1 Skips the party command window and opens actor battle commands immediately.
 * @author RPG Maker Tutorials
 * @url https://aerobiba.itch.io/rpgmt-instant-battle-menu
 *
 * @param DirectActorMenu
 * @text Instant Actor Menu
 * @desc Opens the actor command menu immediately instead of showing Fight and Escape first.
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @default true
 *
 * @param EscapeText
 * @text Escape Command Text
 * @desc Text displayed for the Escape command at the bottom of the actor command menu.
 * @type string
 * @default Escape
 *
 * @param DisabledEscape
 * @text Unavailable Escape Command
 * @desc Controls how Escape is displayed when escaping is not allowed in the current battle.
 * @type select
 * @option Show Disabled
 * @value show
 * @option Hide Command
 * @value hide
 * @default show
 *
 * @command SetInstantMenu
 * @text Set Instant Actor Menu
 * @desc Enables or disables the instant actor command menu during the game.
 *
 * @arg Enabled
 * @text Instant Actor Menu
 * @desc Enabled skips Fight/Escape. Disabled restores the normal party command window.
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @default true
 *
 * @command SetEscapeText
 * @text Change Escape Text
 * @desc Changes the text displayed for the Escape command.
 *
 * @arg Text
 * @text Escape Text
 * @desc New text for the Escape command.
 * @type string
 * @default Escape
 *
 * @command SetDisabledEscape
 * @text Set Unavailable Escape
 * @desc Changes whether an unavailable Escape command is shown disabled or hidden.
 *
 * @arg Display
 * @text Display Mode
 * @type select
 * @option Show Disabled
 * @value show
 * @option Hide Command
 * @value hide
 * @default show
 *
 * @command ResetSettings
 * @text Reset Plugin Settings
 * @desc Restores all settings to the values configured in the Plugin Manager.
 *
 * @help
 * ============================================================================
 * RPGMT Instant Battle Menu
 * ============================================================================
 *
 * RPGMT Instant Battle Menu shortens the default RPG Maker MZ battle command
 * flow by opening the actor command menu immediately.
 *
 * In the default battle system, the player first sees:
 *
 *   Fight
 *   Escape
 *
 * After choosing Fight, the command menu of the first actor opens.
 *
 * With this plugin enabled, the Fight/Escape window is skipped and the first
 * actor's commands appear immediately:
 *
 *   Attack
 *   Special
 *   Catch
 *   Guard
 *   Escape
 *
 * Escape is added as the final command in the actor command list.
 *
 *
 * ============================================================================
 * Features
 * ============================================================================
 *
 * - Skips the default Fight/Escape party command window.
 * - Opens the first actor's command menu immediately.
 * - Adds Escape to the bottom of the actor command list.
 * - Keeps Attack, Guard, Skill, Item and custom commands from other plugins.
 * - Allows the Escape command text to be customized.
 * - Can show Escape as disabled or hide it when escaping is unavailable.
 * - Includes Plugin Commands for changing every setting during the game.
 * - Saves Plugin Command changes inside the current save file.
 *
 *
 * ============================================================================
 * Plugin Parameters
 * ============================================================================
 *
 * Instant Actor Menu
 * ------------------
 * Enabled:
 *   The Fight/Escape party command window is skipped.
 *   The first actor's command menu opens immediately.
 *
 * Disabled:
 *   RPG Maker MZ uses the normal Fight/Escape party command window.
 *   Escape is still added to the actor command menu.
 *
 *
 * Escape Command Text
 * -------------------
 * Sets the name shown for the Escape command.
 *
 * Examples:
 *
 *   Escape
 *   Run
 *   Flee
 *   Retreat
 *
 *
 * Unavailable Escape Command
 * --------------------------
 * Controls what happens when the current battle does not allow escaping.
 *
 * Show Disabled:
 *   Escape remains visible but is greyed out and cannot be selected.
 *
 * Hide Command:
 *   Escape is completely removed from the actor command list.
 *
 * Escape availability is still controlled by RPG Maker MZ. For example, the
 * Battle Processing event command can disable escaping for a battle.
 *
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Set Instant Actor Menu
 * ----------------------
 * Enables or disables the instant actor menu while the game is running.
 *
 * Enabled:
 *   Skips the Fight/Escape window.
 *
 * Disabled:
 *   Restores the normal Fight/Escape window.
 *
 * Changes made during a battle are fully applied when the next command
 * selection begins.
 *
 *
 * Change Escape Text
 * ------------------
 * Changes the displayed Escape command text.
 *
 * Example:
 *
 *   Escape Text = Run Away
 *
 * The actor command list is refreshed immediately when possible.
 *
 *
 * Set Unavailable Escape
 * ----------------------
 * Changes how Escape is displayed when escaping is unavailable.
 *
 * Show Disabled:
 *   Escape remains visible but cannot be selected.
 *
 * Hide Command:
 *   Escape is removed from the actor command list.
 *
 *
 * Reset Plugin Settings
 * ---------------------
 * Restores all values to the defaults selected in the Plugin Manager.
 *
 * This is useful after temporary changes made with Plugin Commands.
 *
 *
 * ============================================================================
 * Save Data
 * ============================================================================
 *
 * Settings changed with Plugin Commands are stored in the current save file.
 * Loading that save restores the changed settings.
 *
 * A new game always starts with the values configured in the Plugin Manager.
 *
 *
 * ============================================================================
 * Escape Behavior
 * ============================================================================
 *
 * This plugin uses the normal RPG Maker MZ escape process.
 *
 * It does not:
 *
 * - Force escape success.
 * - Change the normal escape chance.
 * - Ignore battles where escaping is disabled.
 *
 * Escape success, failure, restrictions and sound effects continue to use the
 * default engine behavior.
 *
 *
 * ============================================================================
 * Compatibility
 * ============================================================================
 *
 * This plugin is designed for the default RPG Maker MZ battle system.
 *
 * Plugins that add commands such as Catch, Steal or additional skill commands
 * should remain compatible when they use the standard actor command window.
 *
 * Recommended Plugin Manager order:
 *
 *   Battle system plugins
 *   Actor command plugins
 *   Catch or monster plugins
 *   RPGMT_InstantBattleMenu
 *
 * Place this plugin below other plugins that modify the actor command window or
 * the party command window.
 *
 *
 * ============================================================================
 * Installation
 * ============================================================================
 *
 * 1. Copy RPGMT_InstantBattleMenu.js into the js/plugins folder.
 * 2. Open the Plugin Manager in RPG Maker MZ.
 * 3. Add RPGMT_InstantBattleMenu.
 * 4. Turn the plugin on.
 * 5. Configure the plugin parameters.
 *
 * When updating from RPGMT_DirectBattleMenu, remove or disable the old plugin
 * and add RPGMT_InstantBattleMenu instead. Do not activate both versions at the
 * same time.
 *
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * Free to use in commercial and non-commercial RPG Maker MZ projects.
 * You may edit the plugin for your own project.
 * Do not redistribute the plugin or edited versions as your own work.
 *
 *
 * ============================================================================
 * Links
 * ============================================================================
 *
 * itch.io:
 * https://aerobiba.itch.io/rpgmt-instant-battle-menu
 *
 * YouTube:
 * https://www.youtube.com/%40rpgmakertutorials3639
 *
 * Discord:
 * https://discord.gg/PmYhmSBr
 *
 * ============================================================================
 */

(() => {
    "use strict";

    const PLUGIN_NAME = "RPGMT_InstantBattleMenu";
    const parameters = PluginManager.parameters(PLUGIN_NAME);

    const DEFAULT_SETTINGS = Object.freeze({
        directActorMenu: String(parameters.DirectActorMenu || "true") === "true",
        escapeText: String(parameters.EscapeText || "Escape"),
        disabledEscape: String(parameters.DisabledEscape || "show")
    });

    const ESCAPE_SYMBOL = "rpgmtInstantEscape";

    function copyDefaultSettings() {
        return {
            directActorMenu: DEFAULT_SETTINGS.directActorMenu,
            escapeText: DEFAULT_SETTINGS.escapeText,
            disabledEscape: DEFAULT_SETTINGS.disabledEscape
        };
    }

    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call(this);
        this._rpgmtInstantBattleMenuSettings = copyDefaultSettings();
    };

    Game_System.prototype.rpgmtInstantBattleMenuSettings = function() {
        if (!this._rpgmtInstantBattleMenuSettings) {
            this._rpgmtInstantBattleMenuSettings = copyDefaultSettings();
        }

        const settings = this._rpgmtInstantBattleMenuSettings;

        if (typeof settings.directActorMenu !== "boolean") {
            settings.directActorMenu = DEFAULT_SETTINGS.directActorMenu;
        }

        if (typeof settings.escapeText !== "string" || settings.escapeText.length === 0) {
            settings.escapeText = DEFAULT_SETTINGS.escapeText;
        }

        if (settings.disabledEscape !== "show" && settings.disabledEscape !== "hide") {
            settings.disabledEscape = DEFAULT_SETTINGS.disabledEscape;
        }

        return settings;
    };

    function currentSettings() {
        if ($gameSystem) {
            return $gameSystem.rpgmtInstantBattleMenuSettings();
        }
        return DEFAULT_SETTINGS;
    }

    function refreshActorCommandWindow() {
        const scene = SceneManager._scene;

        if (!(scene instanceof Scene_Battle) || !scene._actorCommandWindow) {
            return;
        }

        const window = scene._actorCommandWindow;

        if (!window._actor) {
            return;
        }

        const oldIndex = window.index();
        const wasActive = window.active;

        window.refresh();

        if (window.maxItems() > 0) {
            window.select(Math.max(0, Math.min(oldIndex, window.maxItems() - 1)));
        }

        if (wasActive) {
            window.activate();
        } else {
            window.deactivate();
        }
    }

    function hidePartyCommandWindow(scene) {
        if (!scene || !scene._partyCommandWindow) {
            return;
        }

        scene._partyCommandWindow.visible = false;
        scene._partyCommandWindow.deactivate();
        scene._partyCommandWindow.close();
    }

    PluginManager.registerCommand(PLUGIN_NAME, "SetInstantMenu", args => {
        const settings = $gameSystem.rpgmtInstantBattleMenuSettings();
        settings.directActorMenu = String(args.Enabled) === "true";

        const scene = SceneManager._scene;
        if (scene instanceof Scene_Battle && scene._partyCommandWindow) {
            if (settings.directActorMenu) {
                hidePartyCommandWindow(scene);
            } else {
                scene._partyCommandWindow.visible = true;
            }
        }
    });

    PluginManager.registerCommand(PLUGIN_NAME, "SetEscapeText", args => {
        const settings = $gameSystem.rpgmtInstantBattleMenuSettings();
        const text = String(args.Text || "").trim();
        settings.escapeText = text || DEFAULT_SETTINGS.escapeText;
        refreshActorCommandWindow();
    });

    PluginManager.registerCommand(PLUGIN_NAME, "SetDisabledEscape", args => {
        const settings = $gameSystem.rpgmtInstantBattleMenuSettings();
        settings.disabledEscape = String(args.Display) === "hide" ? "hide" : "show";
        refreshActorCommandWindow();
    });

    PluginManager.registerCommand(PLUGIN_NAME, "ResetSettings", () => {
        $gameSystem._rpgmtInstantBattleMenuSettings = copyDefaultSettings();
        refreshActorCommandWindow();

        const scene = SceneManager._scene;
        if (scene instanceof Scene_Battle && scene._partyCommandWindow) {
            scene._partyCommandWindow.visible = !DEFAULT_SETTINGS.directActorMenu;
            if (DEFAULT_SETTINGS.directActorMenu) {
                hidePartyCommandWindow(scene);
            }
        }
    });

    const _Scene_Battle_createPartyCommandWindow =
        Scene_Battle.prototype.createPartyCommandWindow;

    Scene_Battle.prototype.createPartyCommandWindow = function() {
        _Scene_Battle_createPartyCommandWindow.call(this);

        if (currentSettings().directActorMenu) {
            hidePartyCommandWindow(this);
            this._partyCommandWindow.openness = 0;
        }
    };

    const _Scene_Battle_startPartyCommandSelection =
        Scene_Battle.prototype.startPartyCommandSelection;

    Scene_Battle.prototype.startPartyCommandSelection = function() {
        if (!currentSettings().directActorMenu) {
            if (this._partyCommandWindow) {
                this._partyCommandWindow.visible = true;
            }

            _Scene_Battle_startPartyCommandSelection.call(this);
            return;
        }

        if (this._statusWindow) {
            this._statusWindow.deselect();
            this._statusWindow.show();
            this._statusWindow.open();
        }

        hidePartyCommandWindow(this);

        if (this._actorCommandWindow) {
            this._actorCommandWindow.close();
        }

        if (BattleManager.actor()) {
            this.startActorCommandSelection();
        } else {
            BattleManager.selectNextCommand();
            this.changeInputWindow();
        }
    };

    const _Window_ActorCommand_makeCommandList =
        Window_ActorCommand.prototype.makeCommandList;

    Window_ActorCommand.prototype.makeCommandList = function() {
        _Window_ActorCommand_makeCommandList.call(this);
        this.rpgmtAddInstantEscapeCommand();
    };

    Window_ActorCommand.prototype.rpgmtAddInstantEscapeCommand = function() {
        if (!this._actor) {
            return;
        }

        const settings = currentSettings();
        const canEscape = BattleManager.canEscape();

        if (settings.disabledEscape === "hide" && !canEscape) {
            return;
        }

        this.addCommand(settings.escapeText, ESCAPE_SYMBOL, canEscape);
    };

    const _Scene_Battle_createActorCommandWindow =
        Scene_Battle.prototype.createActorCommandWindow;

    Scene_Battle.prototype.createActorCommandWindow = function() {
        _Scene_Battle_createActorCommandWindow.call(this);

        this._actorCommandWindow.setHandler(
            ESCAPE_SYMBOL,
            this.rpgmtCommandInstantEscape.bind(this)
        );
    };

    Scene_Battle.prototype.rpgmtCommandInstantEscape = function() {
        if (!BattleManager.canEscape()) {
            SoundManager.playBuzzer();
            this._actorCommandWindow.activate();
            return;
        }

        hidePartyCommandWindow(this);
        this._actorCommandWindow.deactivate();
        this._actorCommandWindow.close();

        BattleManager.processEscape();
        this.changeInputWindow();
    };
})();
