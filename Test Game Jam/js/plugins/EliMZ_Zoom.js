//==========================================================================
// EliMZ_Zoom.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦1.3.1♦ Add the default zoom feature to plugin command.
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-zoom-for-rpg-maker-mz/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

============================================================================
Features
============================================================================

● Zoom in events, players, or followers.
● Zoom in a screen position(pixel).
● Zoom in a map position(tiles).
● Make Zoom persistent across the maps with a switch.

============================================================================
How to use
============================================================================

Just use the plugin commands.
https://docs.google.com/document/d/1uEa30gwV-LJljK9t91Q2sRfYt1ajur1Rd17k4nv0y3E/edit?usp=sharing

============================================================================
NEED SUPPORT? 
============================================================================

Create a thread on the plugin Itch Io Page.
https://hakuenstudio.itch.io/eli-zoom-for-rpg-maker-mz

============================================================================

@param persistentZoomSw
@text Persistent Zoom Switch
@type switch
@desc If this switch is true, the zoom will not reset when changing map/scene.
@default 0

@command zoomChar
@text Characters
@desc Zoom events, player or follower.

    @arg character
    @text Target
    @type text
    @desc -2 First Follower, -1 Player, 0 This event, 1+ Event's Id. Vehicles: Ship, Boat, Airship. You can use \v[id].
    @default 0

    @arg followCharacter
    @text Follow Character
    @type boolean
    @desc If true, the zoom will keep following the character.
    @default false
    @parent character

    @arg scale
    @text Scale
    @type text
    @desc The power of the zoom.
    @default 2

    @arg duration
    @text Duration
    @type text
    @desc How much it will take, in frames, to complete zoom.
    @default 60

    @arg offset
    @text Offset
    @type text
    @desc Set an offset value for x and y. Separate by comma.
    @default 0, 0

@command zoomScreen
@text Screen Coordinates
@desc Zoom on the screen.

    @arg x
    @text X
    @type text
    @desc The x position on the screen. Can use formulas and \v[id].
    @default 0

    @arg y
    @text Y
    @type text
    @desc The y position on the screen. Can use formulas and \v[id].
    @default 0

    @arg scale
    @text Scale
    @type text
    @desc The power of the zoom.
    @default 2

    @arg duration
    @text Duration
    @type text
    @desc How much it will take, in frames, to complete zoom.
    @default 60

@command zoomCoordinates
@text Tile Coordinates
@desc Zoom on the screen.

    @arg x
    @text X
    @type text
    @desc The x position on the screen. Can use formulas and \v[id].
    @default 0

    @arg y
    @text Y
    @type text
    @desc The y position on the screen. Can use formulas and \v[id].
    @default 0

    @arg scale
    @text Scale
    @type text
    @desc The power of the zoom.
    @default 2

    @arg duration
    @text Duration
    @type text
    @desc How much it will take, in frames, to complete zoom.
    @default 60

@command clearZoom
@text Clear
@desc Reset the zoom to default value.

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_Zoom = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.Zoom = {

    Parameters: class {
        constructor(parameters){
            this.persistentZoomSw = Number(parameters.persistentZoomSw)
        }
    },

    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        const parameters = PluginManager.parameters("EliMZ_Zoom")
        this.parameters = new this.Parameters(parameters)
    },

    initPluginCommands(){
        const commands = ['zoomChar', 'zoomScreen', 'zoomCoordinates', 'clearZoom']
        Eli.PluginManager.registerCommands(this, commands)
    },

    getParam(){
        return this.parameters
    },

    canvasToMapXY(x, y) {
        return { 
            x: this.canvasToMapX(x), 
            y: this.canvasToMapY(y) 
        }
    },

    canvasToMapX(x){
        const scale = $gameScreen.zoomScale()
        const zoomX = $gameScreen.zoomX()
        const cx = Graphics.width / 2
        const adjustX = (x - cx) / scale + cx + (zoomX - cx) * (1 - 1 / scale)

        return adjustX
    },

    canvasToMapY(y){
        const scale = $gameScreen.zoomScale()
        const zoomY = $gameScreen.zoomY()
        const cy = Graphics.height / 2
        const adjustY = (y - cy) / scale + cy + (zoomY - cy) * (1 - 1 / scale)

        return adjustY
    },

    zoomChar(args){
        this.cmd_zoomChar(args)
    },

    cmd_zoomChar(args){
        const id = Eli.PluginManager.parseVariables(args.character)
        const character = Eli.Utils.getMapCharacter(id)

        if(character){
            const [offsetX, offsetY] = args.offset.split(",")
            const x = character.screenX() + Number(offsetX)
            const y = character.screenY() + Number(offsetY)

            if(args.followCharacter){
                $eliData.contents.zoom.charGlobalKey = character.getGlobalKey()
            }else{
                $eliData.contents.zoom.charGlobalKey = "none"
            }
            
            $gameScreen.startZoom(x, y, Number(args.scale), Number(args.duration))
        }
    },

    zoomScreen(args){
        this.cmd_zoomScreen(args)
    },

    cmd_zoomScreen(args){
        const x = new Function(`return Number(${Eli.PluginManager.parseVariables(args.x)})`)()
        const y = new Function(`return Number(${Eli.PluginManager.parseVariables(args.y)})`)()

        $gameScreen.startZoom(x, y, Number(args.scale), Number(args.duration))
    },

    zoomCoordinates(args){
        this.cmd_zoomCoordinates(args)
    },

    cmd_zoomCoordinates(args){
        const x = new Function(`return Number(${Eli.PluginManager.parseVariables(args.x)})`)() * $gameMap.tileWidth()
        const y = new Function(`return Number(${Eli.PluginManager.parseVariables(args.y)})`)() * $gameMap.tileHeight()
        
        $gameScreen.startZoom(x, y, Number(args.scale), Number(args.duration))
    },

    clearZoom(args){
        this.cmd_clearZoom(args)
    },

    cmd_clearZoom(args){
        const oldValue = $gameSwitches.value(this.getParam().persistentZoomSw)
        $gameSwitches.setValue(this.getParam().persistentZoomSw, false)
        $gameSwitches.setValue(this.getParam().persistentZoomSw, oldValue)
        $gameScreen.clearZoom()
    },
    
}

{

const Plugin = Eli.Zoom
const Alias = {}

Plugin.initialize()

/* ---------------------------- ELI SAVE CONTENTS --------------------------- */
Alias.Eli_SavedContents_initialize = Eli_SavedContents.prototype.initialize
Eli_SavedContents.prototype.initialize = function(){
    Alias.Eli_SavedContents_initialize.call(this)
    this.contents.zoom = {
        charGlobalKey: "none",
    }
}

/* --------------------------- GAME CHARACTER BASE -------------------------- */
Alias.Game_CharacterBase_screenX = Game_CharacterBase.prototype.screenX
Game_CharacterBase.prototype.screenX = function() {
    if(this.isBeingZoomed() && $gameScreen._zoomDuration === 0){
        const screenX = Alias.Game_CharacterBase_screenX.call(this)
        $gameScreen._zoomX = screenX
        return screenX
    }else{
        return Alias.Game_CharacterBase_screenX.call(this)
    }
}

Alias.Game_CharacterBase_screenY = Game_CharacterBase.prototype.screenY
Game_CharacterBase.prototype.screenY = function() {
    if(this.isBeingZoomed() && $gameScreen._zoomDuration === 0){
        const screenY = Alias.Game_CharacterBase_screenY.call(this)
        $gameScreen._zoomY = screenY
        return screenY
    }else{
        return Alias.Game_CharacterBase_screenY.call(this)
    }
}

Game_CharacterBase.prototype.isBeingZoomed = function() {
    return this.getGlobalKey() === $eliData.contents.zoom.charGlobalKey
}

/* -------------------------------- GAME MAP -------------------------------- */
Alias.GameMap_canvasToMapX = Game_Map.prototype.canvasToMapX
Game_Map.prototype.canvasToMapX = function(x) {
    const adjustX = Eli.Zoom.canvasToMapX(x)
    return Alias.GameMap_canvasToMapX.call(this, adjustX)
}

Alias.GameMap_canvasToMapY = Game_Map.prototype.canvasToMapY
Game_Map.prototype.canvasToMapY = function(y) {
    const adjustY = Eli.Zoom.canvasToMapY(y)
    return Alias.GameMap_canvasToMapY.call(this, adjustY)
}

Alias.GameMap_setDisplayPos = Game_Map.prototype.setDisplayPos
Game_Map.prototype.setDisplayPos = function(x, y) {
    const scale = $gameScreen.zoomScale()
    Alias.GameMap_setDisplayPos.call(this, x / scale, y / scale)
}

/* ------------------------------- GAME SCREEN ------------------------------ */
Alias.Game_Screen_clearZoom = Game_Screen.prototype.clearZoom
Game_Screen.prototype.clearZoom = function() {
    if(!$gameSwitches?.value(Plugin.getParam().persistentZoomSw)){
        Alias.Game_Screen_clearZoom.call(this)
        $eliData.contents.zoom.charGlobalKey = "none"
    }
}

}