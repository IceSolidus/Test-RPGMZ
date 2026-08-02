//==========================================================================
// EliMZ_WindowSkin.js *
//==========================================================================

/*:
@target MZ
@base EliMZ_Book
@orderBefore EliMZ_SmartSpeaker

@plugindesc ♦3.0.1♦ Can change the skin and other settings of any window mid-game.
@author Hakuen Studio
@url https://docs.google.com/document/d/1U-tWwwhItysA2l0E_C2Hf-EOGwiXaXYR5AJz3xhuNWo/edit?usp=sharing

@help
↑↑↑ HOW TO USE / HELP FILE ABOVE ↑↑↑

★★★★★ → Rate the plugin! Please, is very important to me ^^
https://hakuenstudio.itch.io/eli-change-window-skin-for-rpg-maker/rate?source=game

♦ TERMS OF USE
https://www.hakuenstudio.com/terms-of-use-5-0-0

♦ DOWNLOAD
https://hakuenstudio.itch.io/eli-change-window-skin-for-rpg-maker

♦ SUPPORT
https://hakuenstudio.itch.io/eli-change-window-skin-for-rpg-maker/community

♦ FEATURES

● Set different window skin for any window.
● Set window skin for all windows.
● Set window skin according to the scene.
● Change window skin through the options scene!
● Change tone and background types of windows

@param defaultWinSettings
@text Default Window Settings
@type struct<defaultSettingSt>
@desc The default settings applied to windows that does not have a custom settings.
@default

@param settingsList
@text Settings List
@type struct<allSkins>[]
@desc Select here if you want a custom skin for a window.
@default []

@param fixTextColor
@text Fix Text Color
@type boolean
@desc Set true if you want to get the text color from the windowskin.png color list.
@default true

@param fixOutlineTextColor
@text Fix Outline Text Color
@type boolean
@desc Set true if you want to get the outline text color from the windowskin.png color list.
@default true

@param options
@text Options Settings
@type struct<optionsStruct>
@desc Set true if you want to create an option command to change the window skin.
@default true

@command cmd_changeWindowSettings
@text Change / Apply Settings
@desc Change or Apply new window settings to Windows or Scenes.

    @arg id
    @text Id
    @type text
    @desc Choose a window settings from the plugin parameters by their ID.
    @default

    @arg windowNames
    @text Window names
    @type combo[]
    @option Window_ActorCommand @option Window_BattleActor @option Window_BattleEnemy @option Window_BattleItem @option Window_BattleLog @option Window_BattleSkill @option Window_BattleStatus @option Window_ChoiceList @option Window_CommandInfo @option Window_DebugEdit @option Window_DebugRange @option Window_DescriptionInfo @option Window_EquipCommand @option Window_EquipItem @option Window_EquipSlot @option Window_EquipStatus @option Window_EventItem @option Window_FaceMessage @option Window_GameEnd @option Window_Gold @option Window_Help @option Window_HelpActorCommand @option Window_HelpChoice @option Window_HelpNumberInput @option Window_HelpPartyCommand @option Window_HelpSelectItem @option Window_HelpTitle @option Window_ItemCategory @option Window_ItemList @option Window_LoadPoint @option Window_MapName @option Window_MapSelectCommand @option Window_MenuActor @option Window_MenuCommand @option Window_MenuStatus @option Window_Message @option Window_Minimap @option Window_NameBox @option Window_NameEdit @option Window_NameInput @option Window_NumberInput @option Window_Options @option Window_PartyCommand @option Window_Preview @option Window_SavefileList @option Window_SavePoint @option Window_ScrollText @option Window_ShopBuy @option Window_ShopCommand @option Window_ShopNumber @option Window_ShopSell @option Window_ShopStatus @option Window_SkillList @option Window_SkillStatus @option Window_SkillType @option Window_SoundList @option Window_SoundMainCategory @option Window_SoundPlaying @option Window_SoundSceneTitle @option Window_SoundSubCategory @option Window_Status @option Window_StatusEquip @option Window_StatusParam @option Window_TitleCommand @option Window_TitleInfo @option Window_ToastInfo 
    @desc Type the name of the window. It is case sensitive.
    @default []

    @arg sceneNames
    @text Scene names
    @type combo[]
    @option Scene_Battle @option Scene_Debug @option Scene_Equip @option Scene_GameEnd @option Scene_Gameover @option Scene_Item @option Scene_Load @option Scene_Map @option Scene_MapSelect @option Scene_Menu @option Scene_MenuInfo @option Scene_Minimap @option Scene_Name @option Scene_Name @option Scene_Options @option Scene_Save @option Scene_Shop @option Scene_Skill @option Scene_SoundTest @option Scene_Status @option Scene_Title 
    @desc Type the name of the scene. It is case sensitive.
    @default []

    @arg save
    @text Save Changes
    @type select
    @option Global
    @option Save File
    @option Both
    @desc Type the name of the window. It is case sensitive.
    @default Global

@command cmd_changeDefaultSettings
@text Change Default Settings
@desc Change default window settings making this one the default.

    @arg id
    @text Id
    @type text
    @desc Choose a window settings from the plugin parameters by their ID.
    @default

    @arg saveChanges
    @text Save Changes
    @type select
    @option Global
    @option Save File
    @option Both
    @desc Type the name of the window. It is case sensitive.
    @default Global

    @arg overwrite
    @text Overwrite Settings
    @type boolean
    @desc If true, the selected settings will be applied to all windows, regardless they have a specific skin already.
    @default true
    @parent saveChanges

*/

/* ---------------------------- DEFAULT SETTINGS ---------------------------- */
{

/*~struct~defaultSettingSt:

@param id
@text Id/Name
@type text
@desc Cannot be a number. Works like an id. Will also be name shown on the options for this setting.
@default Default

@param skin
@text Skin file
@type file
@dir img/system
@desc Choose a window skin file
@default

@param tone
@text Window Tone
@type text
@dir img/system
@desc The window tone on the format R, G, B. Leave empty to not use.
@default 0,0,0

@param backgroundType
@text Background Type
@type combo
@option None
@option Window
@option Dim
@option Transparent
@option Strong
@option Light Gradient Vertical
@option Faded Horizontal
@option Message Window
@desc The background type. Set None to not use this feature.
@default None

*/

}

/* -------------------------------- ALL SKINS ------------------------------- */
{

/*~struct~allSkins:

@param id
@text Id / Name
@type text
@desc Cannot be a number. Works like an id. Will also be name shown on the options for this setting.
@default 

@param skin
@text Skin file
@type file
@dir img/system
@desc Choose a window skin file
@default

@param windowNames
@text Apply to Windows
@type combo[]
@option Window_ActorCommand @option Window_BattleActor @option Window_BattleEnemy @option Window_BattleItem @option Window_BattleLog @option Window_BattleSkill @option Window_BattleStatus @option Window_ChoiceList @option Window_CommandInfo @option Window_DebugEdit @option Window_DebugRange @option Window_DescriptionInfo @option Window_EquipCommand @option Window_EquipItem @option Window_EquipSlot @option Window_EquipStatus @option Window_EventItem @option Window_FaceMessage @option Window_GameEnd @option Window_Gold @option Window_Help @option Window_HelpActorCommand @option Window_HelpChoice @option Window_HelpNumberInput @option Window_HelpPartyCommand @option Window_HelpSelectItem @option Window_HelpTitle @option Window_ItemCategory @option Window_ItemList @option Window_LoadPoint @option Window_MapName @option Window_MapSelectCommand @option Window_MenuActor @option Window_MenuCommand @option Window_MenuStatus @option Window_Message @option Window_Minimap @option Window_NameBox @option Window_NameEdit @option Window_NameInput @option Window_NumberInput @option Window_Options @option Window_PartyCommand @option Window_Preview @option Window_SavefileList @option Window_SavePoint @option Window_ScrollText @option Window_ShopBuy @option Window_ShopCommand @option Window_ShopNumber @option Window_ShopSell @option Window_ShopStatus @option Window_SkillList @option Window_SkillStatus @option Window_SkillType @option Window_SoundList @option Window_SoundMainCategory @option Window_SoundPlaying @option Window_SoundSceneTitle @option Window_SoundSubCategory @option Window_Status @option Window_StatusEquip @option Window_StatusParam @option Window_TitleCommand @option Window_TitleInfo @option Window_ToastInfo 
@desc Type the name of the window. It is case sensitive.
@default []

@param sceneNames
@text Apply to Scenes
@type combo[]
@option Scene_Battle @option Scene_Debug @option Scene_Equip @option Scene_GameEnd @option Scene_Gameover @option Scene_Item @option Scene_Load @option Scene_Map @option Scene_MapSelect @option Scene_Menu @option Scene_MenuInfo @option Scene_Minimap @option Scene_Name @option Scene_Name @option Scene_Options @option Scene_Save @option Scene_Shop @option Scene_Skill @option Scene_SoundTest @option Scene_Status @option Scene_Title 
@desc Type the name of the scene. It is case sensitive.
@default []

@param useSceneSkin
@text Force Scene Skin
@type boolean
@desc If true, the window will get the skin from the scene parameters, if there is one.
@default false

@param showOnOptions
@text Show on options
@type boolean
@desc If true, this setting will be available on the options scene to be chosen.
@default false

@param tone
@text Window Tone
@type text
@dir img/system
@desc The window tone on the format R, G, B. Leave empty to not use.
@default 0,0,0

@param backgroundType
@text Background Type
@type combo
@option None
@option Window
@option Dim
@option Transparent
@option Strong
@option Light Gradient Vertical
@option Faded Horizontal
@option Message Window
@desc The background type. Set None to not use this feature.
@default None

*/

}

/* --------------------------------- OPTIONS -------------------------------- */
{

/*~struct~optionsStruct:

@param add
@text Enable Command
@type boolean
@desc Set true if you want to create an option command to change the window skin.
@default true

@param name
@text Options Name
@type text
@desc The name of this command under the options menu.
@default true

@param index
@text Position
@type combo
@option auto
@desc Set a number to the position of the command, or leave auto.
@default auto

@param saveChanges
@text Save Changes
@type select
@option Global
@option Save File
@option Both
@desc Choose where the changes will be applied.
@default Both

@param overwrite
@text Overwrite Settings
@type boolean
@desc If true, the selected skin will be applied to all windows, regardless they have a specific skin already.
@default true
@parent storeChanges

*/

}
    
"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_WindowSkin = true

if(!Imported.Eli_Book && !window.eliErrorTriggered) {
    window.eliErrorTriggered = true
    if(confirm(`All EliMZ plugins need the core plugin EliMZ_Book. Click OK to download it and install somewhere above all other EliMZ plugins.`)) {
        window.location.href = "https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz"
    }
    SceneManager.exit()
}

Eli.WindowSkin = {

    Parameters: class{
        constructor(parameters){
            const defaultSettings = this.parseDefaultSettings(JSON.parse(parameters.defaultWinSettings))
            const [settings, containers] = this.parseSettings(JSON.parse(parameters.settingsList))

            this.defaultId = defaultSettings.id
            this.settingsList = this.createSettingsList([defaultSettings, ...settings])
            this.containersList = containers
            this.options = this.parseOptions(JSON.parse(parameters.options))
            this.fixTextColor = parameters.fixTextColor === "true"
            this.fixOutlineTextColor = parameters.fixOutlineTextColor === "true"
        }

        parseDefaultSettings(parameters){
            return {
                id: parameters.id || "Default",
                skin: parameters.skin,
                useSceneSkin: false,
                showOnOptions: true,
                tone: parameters.tone ? parameters.tone.split(",").map(item => Number(item)) : false,
                backgroundType: parameters.backgroundType === "None" ? false : this.parseBackgroundType(parameters.backgroundType)
            }
        }

        parseSettings(parameters){
            const settingsList = []
            const containerWithSettings = {}

            for(let i = 0; i < parameters.length; i++){
                const param = JSON.parse(parameters[i])
                const setting = {
                    id: param.id,
                    skin: param.skin,
                    windowNames: JSON.parse(param.windowNames),
                    sceneNames: JSON.parse(param.sceneNames),
                    useSceneSkin: param.useSceneSkin === "true",
                    showOnOptions: param.showOnOptions === "true",
                    tone: param.tone ? param.tone.split(",").map(item => Number(item)) : false,
                    backgroundType: param.backgroundType === "None" ? false : this.parseBackgroundType(param.backgroundType)
                }

                for(const name of setting.windowNames){
                    containerWithSettings[name] = setting.id
                }

                for(const name of setting.sceneNames){
                    containerWithSettings[name] = setting.id
                }

                settingsList.push(setting)
            }

            return [settingsList, containerWithSettings]
        }

        parseBackgroundType(type){
            return {
                "Window":                   0,
                "Dim":                      1,
                "Transparent":              2,
                "Strong":                   3,
                "Light Gradient Vertical":  4,
                "Faded Horizontal":         5,
            }[type]
        }

        createSettingsList(parameters){
            const settings = {}

            for(const param of parameters){
                settings[param.id] = param
            }

            return settings
        }

        parseOptions(parameters){
            return {
                name: parameters.name,
                add: parameters.add === "true",
                index: parameters.index === "auto" ? -1 : Number(parameters.index),
                overwrite: parameters.overwrite === "true",
                storeChanges: parameters.storeChanges,
            }
        }
    },

    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        const parameters = PluginManager.parameters("EliMZ_WindowSkin")
        this.parameters = new this.Parameters(parameters)
    },

    initPluginCommands(){
        const commands = ['cmd_changeWindowSettings', 'cmd_changeDefaultSettings']
        Eli.PluginManager.registerCommands(this, commands)
    },

    getParam(){
        return this.parameters
    },

    cmd_changeWindowSettings(args){
        const id = args.id
        const windowNames = JSON.parse(args.windowNames || "[]")
        const sceneNames = JSON.parse(args.sceneNames || "[]")
        const targetSettings = args.save === "Global" ? this.getGlobalContainers() : this.getSaveFileContainers()

        for(const name of windowNames){
            targetSettings[name] = id
        }

        for(const name of sceneNames){
            targetSettings[name] = id
        }

        this.applyAndRefreshSettings()
    },

    cmd_changeDefaultSettings(args){
        const id = args.id
        const overwrite = args.overwrite === "true"
        const isOnSceneTitle = SceneManager._stack[0]?.name === "Scene_Title"

        if(this.getParam().settingsList[id]){

            if(args.saveChanges === "Global"){
                this.changeDefaultIdFromGlobal(id)
                if(overwrite) this.resetGlobalContainers()

            }else if(args.saveChanges === "Save File" && !isOnSceneTitle){
                this.changeDefaultIdFromSaveFile(id)
                if(overwrite) this.resetSaveFileContainers()
                
            }else{
                this.changeDefaultIdFromGlobal(id)
                if(!isOnSceneTitle) this.changeDefaultIdFromSaveFile(id)

                if(overwrite){
                    this.resetGlobalContainers()
                    if(!isOnSceneTitle) this.resetSaveFileContainers()
                }
            }

            this.applyAndRefreshSettings()
        }
    },

    applyAndRefreshSettings(){
        const windowLayer = SceneManager._scene._windowLayer

        if(windowLayer){
    
            for(const win of windowLayer.children){
    
                if(win instanceof Window){
                    win.setCustomSettings()
                    win.refreshCustomSettings()
                }
            }
        }
    },

    getWindowSettings(winName, sceneName){
        return  this.getSettingsFromSaveFile(winName, sceneName) || 
                this.getSettingsFromGlobal(winName, sceneName) ||
                this.getDefaultSettingsFromSaveFile() ||
                this.getDefaultSettingsFromGlobal()
    },

    getSettingsFromSaveFile(winName, sceneName){
        const winId = this.getSaveFileContainers()[winName]
        const sceneId = this.getSaveFileContainers()[sceneName]
        
        return this.findSettings(winId, sceneId)
    },

    getSettingsFromGlobal(winName, sceneName){
        const winId = this.getGlobalContainers()[winName]
        const sceneId = this.getGlobalContainers()[sceneName]

        return this.findSettings(winId, sceneId)
    },

    findSettings(winId, sceneId){
        const winSettings = this.getParam().settingsList[winId]
        const sceneSettings = this.getParam().settingsList[sceneId]

        if(winSettings && sceneSettings){
            return winSettings.useSceneSkin ? sceneSettings : winSettings

        }else if(winSettings){
            return winSettings

        }else if(sceneSettings){
            return sceneSettings
            
        }else{
            return null
        }
    },

    getDefaultSettingsFromSaveFile(){
        const defaultId = $eliData.WindowSkin.defaultId ?? ConfigManager.defaultWindowSettingId
        return this.getParam().settingsList[defaultId]
    },

    getDefaultSettingsFromGlobal(){
        return this.getParam().settingsList[ConfigManager.defaultWindowSettingId]
    },

    getSaveFileContainers(){
        return $eliData.WindowSkin.containers
    },

    getGlobalContainers(){
        return ConfigManager.windowSkinContainers
    },

    getParamContainers(){
        return this.getParam().containersList
    },

    changeDefaultIdFromSaveFile(id){
        $eliData.WindowSkin.defaultId = id
    },

    changeDefaultIdFromGlobal(id){
        ConfigManager.defaultWindowSettingId = id
        ConfigManager.save()
    },

    resetGlobalContainers(id){
        ConfigManager.windowSkinContainers = {}
    },

    resetSaveFileContainers(id){
        $eliData.WindowSkin.containers = {}
    },
    
}

Eli.WindowSkin.initialize()

{

const Plugin = Eli.WindowSkin
const Alias = {}

/* -------------------------------- SAVE DATA ------------------------------- */
Alias.Eli_SavedContents_initialize = Eli_SavedContents.prototype.initialize
Eli_SavedContents.prototype.initialize = function(){
    Alias.Eli_SavedContents_initialize.call(this)

    this.WindowSkin = {
        containers: {},
        defaultId: null,
    }
}

/* ----------------------------- CONFIG MANAGER ----------------------------- */
ConfigManager.windowSkinContainers = Plugin.getParamContainers()
ConfigManager.defaultWindowSettingId = Plugin.getParam().defaultId

Alias.ConfigManager_makeData = ConfigManager.makeData
ConfigManager.makeData = function() {
    const config = Alias.ConfigManager_makeData.call(this)
    config.defaultWindowSettingId = this.defaultWindowSettingId

    return config
}

Alias.ConfigManager_applyData = ConfigManager.applyData
ConfigManager.applyData = function(config) {
    Alias.ConfigManager_applyData.call(this, config)
    this.defaultWindowSettingId = this.readDefaultWinSettings(config, "defaultWindowSettingId", Plugin.getParam().defaultId)
}

ConfigManager.readDefaultWinSettings = function(config, name, defaultValue) {
    if(name in config){
        return config[name]
    }else{
        return defaultValue
    }
}

/* ------------------------------- GAME SYSTEM ------------------------------ */
Alias.Game_System_onAfterLoad = Game_System.prototype.onAfterLoad
Game_System.prototype.onAfterLoad = function() {
    Alias.Game_System_onAfterLoad.call(this)
    this.loadWindowSkinFromSaveFile()
}

Game_System.prototype.loadWindowSkinFromSaveFile = function() {
    const skin = Plugin.getDefaultSettingsFromSaveFile().skin
    ImageManager.loadSystem(skin)

    if(Plugin.getParam().fixTextColor || Plugin.getParam().fixOutlineTextColor){
        const ids = new Set(Object.values(Plugin.getSaveFileContainers()))

        for(const id of ids){
            const skin = Plugin.getParam().settingsList[id].skin
            ImageManager.loadSystem(skin)
        }
    }
}

/* ------------------------------- SCENE BOOT ------------------------------- */
Alias.Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages
Scene_Boot.prototype.loadSystemImages = function() {
    Alias.Scene_Boot_loadSystemImages.call(this)
    this.loadCustomWindowSkins()
}

Scene_Boot.prototype.loadCustomWindowSkins = function(){
    const skin = Plugin.getDefaultSettingsFromGlobal().skin
    ImageManager.loadSystem(skin)

    if(Plugin.getParam().fixTextColor || Plugin.getParam().fixOutlineTextColor){
        const ids = new Set(Object.values(Plugin.getGlobalContainers()))

        for(const id of ids){
            const skin = Plugin.getParam().settingsList[id].skin
            ImageManager.loadSystem(skin)
        }
    }
}

/* ------------------------------- WINDOW BASE ------------------------------ */
Alias.Window_Base_initialize = Window_Base.prototype.initialize
Window_Base.prototype.initialize = function(rect) {
    this.setCustomSettings()
    Alias.Window_Base_initialize.call(this, rect)
    this.refreshCustomBackgroundType()
}

Window_Base.prototype.setCustomSettings = function() {
    const winName = this.constructor.name
    const sceneName = SceneManager._scene.constructor.name

    this.customWinSettings = Plugin.getWindowSettings(winName, sceneName)
}

Alias.Window_Base_loadWindowskin = Window_Base.prototype.loadWindowskin
Window_Base.prototype.loadWindowskin = function() {
    Alias.Window_Base_loadWindowskin.call(this)
    if(this.customWinSettings.skin) this.loadCustomWindowSkin()
}

Window_Base.prototype.loadCustomWindowSkin = function() {
    this.windowskin = ImageManager.loadSystem(this.customWinSettings.skin)
}

Alias.Window_Base_updateTone = Window_Base.prototype.updateTone
Window_Base.prototype.updateTone = function() {
    if(this.customWinSettings.tone){
        this.updateCustomTone()
    }else{
        Alias.Window_Base_updateTone.call(this)
    }
}

Window_Base.prototype.updateCustomTone = function() {
    const tone = this.customWinSettings.tone
    this.setTone(tone[0], tone[1], tone[2])
}

Window_Base.prototype.refreshCustomSettings = function() {
    this.updateCustomTone()
    this.loadCustomWindowSkin()
    this.refreshCustomBackgroundType()
}

Window_Base.prototype.refreshCustomBackgroundType = function(){
    if(this.customWinSettings.backgroundType){
        this.setBackgroundType(this.customWinSettings.backgroundType)
    }
}

Window_Base.prototype.findColorOnWindowSkin = function(color) {
    if(typeof color === "string" && color.startsWith("#")){

        for(let i = 0; i < 32; i++){
            const managerColor = ColorManager.textColor(i)

            if(managerColor === color){
                const px = 96 + (i % 8) * 12 + 6;
                const py = 144 + Math.floor(i / 8) * 12 + 6;
                color = this.windowskin.getPixel(px, py)
                break
            }
        }
    }

    return color
}

if(Plugin.getParam().fixTextColor){

    Alias.Window_Base_changeTextColor = Window_Base.prototype.changeTextColor
    Window_Base.prototype.changeTextColor = function(color) {
        color = this.findColorOnWindowSkin(color)
        Alias.Window_Base_changeTextColor.call(this, color)
    }
}

if(Plugin.getParam().fixOutlineTextColor){

    Alias.Window_Base_changeOutlineColor = Window_Base.prototype.changeOutlineColor
    Window_Base.prototype.changeOutlineColor = function(color) {
        color = this.findColorOnWindowSkin(color)
        Alias.Window_Base_changeOutlineColor.call(this, color)
    }
}

/* ----------------------------- WINDOW OPTIONS ----------------------------- */
const SYMBOL = "defaultWindowSettingId"

Alias.Window_Options_initialize = Window_Options.prototype.initialize
Window_Options.prototype.initialize = function(rect) {
    this.skinOptions = this.createWindowSkinOptions()
    Alias.Window_Options_initialize.call(this, rect)
}

Window_Options.prototype.createWindowSkinOptions = function(){
    const skinList = []

    for(const id in Plugin.getParam().settingsList){
        const settings = Plugin.getParam().settingsList[id]

        if(settings.showOnOptions){
            skinList.push(id)
        }
    }

    return skinList
}

Alias.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList
Window_Options.prototype.makeCommandList = function() {
    Alias.Window_Options_makeCommandList.call(this)

    if(Plugin.getParam().options.add){
        this.addWindowSkinCommand()
    }
}

Window_Options.prototype.addWindowSkinCommand = function(){
    this.addCommand(Plugin.getParam().options.name, SYMBOL)

    if(Plugin.getParam().options.index > -1){
        this.changeWindowSkinCommandPosition()
    }
}

Window_Options.prototype.changeWindowSkinCommandPosition = function(){
    const index = this._list.findIndex(item => item.symbol === SYMBOL)
    const command = this._list.splice(index, 1)[0]
    this._list.splice(Plugin.getParam().options.index, 0, command)
}

Alias.Window_Options_cursorRight = Window_Options.prototype.cursorRight
Window_Options.prototype.cursorRight = function() {
    const symbol = this.commandSymbol(this.index())

    if(symbol === SYMBOL){
        this.changeWindowSkinCommand(1)
    }else{
        Alias.Window_Options_cursorRight.call(this)
    }
}

Alias.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft
Window_Options.prototype.cursorLeft = function() {
    const symbol = this.commandSymbol(this.index())

    if(symbol === SYMBOL){
        this.changeWindowSkinCommand(-1)
    }else{
        Alias.Window_Options_cursorLeft.call(this)
    }
}

Alias.Window_Options_processOk = Window_Options.prototype.processOk
Window_Options.prototype.processOk = function() {
    if(this.commandSymbol(this.index()) === SYMBOL){
        this.playCursorSound()
    }else{
        Alias.Window_Options_processOk.call(this)
    }
}

Window_Options.prototype.changeWindowSkinCommand = function(increment){
    const value = this.getNewWindowSkinValue(SYMBOL, increment)
    this.changeValue(SYMBOL, value)
    this.onWindowSettingsChange(value)
}

Window_Options.prototype.getNewWindowSkinValue = function(symbol, increment){
    const skinArr = this.skinOptions
    const configValue = this.getConfigValue(symbol)
    const currentIndex = skinArr.indexOf(configValue)
    const maxIndex = skinArr.length - 1
    const newIndex = (currentIndex + increment).clamp(0, maxIndex)

    return skinArr[newIndex]
}

Alias.Window_Options_statusText = Window_Options.prototype.statusText
Window_Options.prototype.statusText = function(index) {
    if(this.commandSymbol(index) === SYMBOL){
        return this.getWindowSkinText()

    }else{
        return Alias.Window_Options_statusText.call(this, index)
    }
}

Window_Options.prototype.getWindowSkinText = function(){
    return this.getConfigValue(SYMBOL)
}

Window_Options.prototype.onWindowSettingsChange = function(id){
    const windowLayer = SceneManager._scene._windowLayer

    if(windowLayer){
        const args = {
            id: id, 
            overwrite: Plugin.getParam().options.overwrite,
            save: Plugin.getParam().options.saveChanges
        }
        Plugin.cmd_changeDefaultSettings(args)
    }

}

}