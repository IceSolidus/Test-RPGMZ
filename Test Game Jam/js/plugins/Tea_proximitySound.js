//Tea_proximitySound.js
/*:
 * @target MZ
 * @plugindesc Adds proximity based sound to events (YT tutorial linked below)
 * @author Tea
 * @url https://discord.gg/pCSbpqYfPM
 *
 * @help
 * ############################################################################
 *                                Tea_proximitySound
 *                                    Version 1.1
 *                                        Tea
 * ############################################################################
 *
 * Special thanks to Drifty, Zeriab and SirLegna for their help!
 * 
 * @help https://discord.gg/pCSbpqYfPM
 * ^^^ Please follow the link above for the comprehensive help file, which includes 
 * screen shots and videos.
 *
 * 
 * 
 * @command proximitySound
 * @text proximity sound
 * @desc Indicate ranges from an event where the ME volume set in that event will decrement evenly.
 * 
 * @arg arg1
 * @text Event ID
 * @desc The ID of the event you want to be the center point of your sound.
 *  
 * @arg arg2
 * @text BGS (Background Sound)
 * @desc The BGS you want to use for the proximity sound
 * @type file
 * @dir audio/bgs/
 * @default  Choose BGS
 * 
 * @arg argSub2
 * @text BGS Pitch
 * @parent arg2
 * @type number
 * @default 100
 * @min 50
 * @max 150
 * 
 * @arg arg3
 * @text Range for BGS vol 100%.
 * @desc The tile radius around the event that will play the BGS at 100% volume.
 * @default 1
 * 
 * @arg arg4
 * @text Range for BGS vol 90%
 * @desc The tile radius around the event that will play the BGS at 90% volume.
 * @default 2
 * 
 * @arg arg5
 * @text Range for BGS vol 80%
 * @desc The tile radius around the event that will play the BGS at 80% volume.
 * @default 3
 * 
 * @arg arg6
 * @text Range for BGS vol 70%
 * @desc The tile radius around the event that will play the BGS at 70% volume.
 * @default 4
 * 
 * @arg arg7
 * @text Range for BGS vol 60%
 * @desc The tile radius around the event that will play the BGS at 60% volume.
 * @default 5
 * 
 * @arg arg8
 * @text Range for BGS vol 50%
 * @desc The tile radius around the event that will play the BGS at 50% volume.
 * @default 6
 * 
 * @arg arg9
 * @text Range for BGS vol 40%
 * @desc The tile radius around the event that will play the BGS at 40% volume.
 * @default 7
 * 
 * @arg arg10
 * @text Range for BGS vol 30%
 * @desc The tile radius around the event that will play the BGS at 30% volume.
 * @default 8
 * 
 * @arg arg11
 * @text Range for BGS vol 20%
 * @desc The tile radius around the event that will play the BGS at 20% volume.
 * @default 9
 * 
 * @arg arg12
 * @text Range for BGS vol 10%
 * @desc The tile radius around the event that will play the BGS at 10% volume.
 * @default 10
 * 
 * @arg arg13
 * @text The range that you want the sound to stop playing
 * @desc The tile radius around the event that will cancel the BGS.
 * @default 11
 *
 * @arg arg14
 * @text Turn dynamic 3D panning on?
 * @desc Pans sound more to the right or the left depending on player position and direction in relation to event. Works best in 3D. 
 * @type boolean
 * @on True
 * @off false
 * @default false
 * 
 * @arg arg15
 * @text Turn dynamic 2D panning on?
 * @desc Pans sound more to the right or the left depending on which side the event is in relation to the player. Works best in 2D.
 * @type boolean
 * @on True
 * @off false
 * @default false
 * 
 * 
 * @
 * ############################################################################
 *  End
 * ############################################################################
 * 
 * Change Log:
 * 1.0.0 - Release 
 * 1.1 - Fixed a bug where if you entered a map in a location that wasn't 
 * specified in your parameters, but in range of the proximity sound event
 * the sound wouldn't play until you stepped on the exact range coordinates
 * specified in the parameters.  
 *
 * https://discord.gg/DriftwoodGaming
 * https://www.youtube.com/DriftwoodGamingMV
 * https://www.patreon.com/DriftwoodGaming
 * https://driftwoodGaming.com
 * 
 */

(() => {
    'use strict';
    let dirCheck = false;
    PluginManager.registerCommand("Tea_proximitySound", "proximitySound", proximitySound); 
    function proximitySound(args) {
        //let currBgm = $dataMap.bgs;
        let evtX = $gameMap.event(args.arg1).x;
        let evtY = $gameMap.event(args.arg1).y; 
        let plaX = $gamePlayer.x;
        let plaY = $gamePlayer.y;
        let bgs = args.arg2;
        let pitch = args.argSub2;
        let obj = { "name": bgs, "volume": 100, "pitch": pitch, "pan": 0 };
        let cond1 = plaX >= evtX && plaY <= evtY && $gamePlayer.direction() === 2 || plaX >= evtX && plaY <= evtY && $gamePlayer.direction() === 6 ||
        plaX >= evtX && plaY >= evtY && $gamePlayer.direction() === 2 || plaX >= evtX && plaY >= evtY && $gamePlayer.direction() === 6 ||
        plaX <= evtX && plaY >= evtY && $gamePlayer.direction() === 8 || plaX <= evtX && plaY >= evtY && $gamePlayer.direction() === 4 ||
        plaX <= evtX && plaY <= evtY && $gamePlayer.direction() === 8 || plaX <= evtX && plaY <= evtY && $gamePlayer.direction() === 4
        let cond2 = plaX >= evtX && plaY <= evtY && $gamePlayer.direction() === 8 || plaX >= evtX && plaY <= evtY && $gamePlayer.direction() === 4 ||
        plaX >= evtX && plaY >= evtY && $gamePlayer.direction() === 8 || plaX >= evtX && plaY >= evtY && $gamePlayer.direction() === 4 ||
        plaX <= evtX && plaY >= evtY && $gamePlayer.direction() === 2 || plaX <= evtX && plaY >= evtY && $gamePlayer.direction() === 6 ||
        plaX <= evtX && plaY <= evtY && $gamePlayer.direction() === 2 || plaX <= evtX && plaY <= evtY && $gamePlayer.direction() === 6 
        AudioManager.playBgs = function(bgs, pos) {
            if (this.isCurrentBgs(bgs)) {
                this.updateBgsParameters(bgs);
            } else {
                if (bgs.name) {
                    this._bgsBuffer = this.createBuffer("bgs/", bgs.name);
                    this.updateBgsParameters(bgs);
                    this._bgsBuffer.play(true, pos || 0);
                }
            }
            this.updateCurrentBgs(bgs, pos);
        }; 
        if($gameMap.distance(plaX, plaY, evtX, evtY) >= 0 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg3 || Math.floor(plaX) == evtX && Math.floor(plaY) == evtY){
            dirCheck = true;
            //2D dynamic panning
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 100, "pitch": obj.pitch, "pan": obj.pan = -10 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 100, "pitch": obj.pitch, "pan": obj.pan = 10 });
                };
            };
            if(args.arg14 == "true"){
                //3D dynamic panning
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 100, "pitch": obj.pitch, "pan": obj.pan = 10 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 100, "pitch": obj.pitch, "pan": obj.pan = -10 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 100, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg3 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg4){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 90, "pitch": obj.pitch, "pan": obj.pan = -20 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 90, "pitch": obj.pitch, "pan": obj.pan = 20 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 90, "pitch": obj.pitch, "pan": obj.pan = 20 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 90, "pitch": obj.pitch, "pan": obj.pan = -20 });  
                };   
            }else 
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 90, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg4 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg5){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 80, "pitch": obj.pitch, "pan": obj.pan = -30 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 80, "pitch": obj.pitch, "pan": obj.pan = 30 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 80, "pitch": obj.pitch, "pan": obj.pan = 30 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 80, "pitch": obj.pitch, "pan": obj.pan = -30 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 80, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg5 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg6){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 70, "pitch": obj.pitch, "pan": obj.pan = -40 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 70, "pitch": obj.pitch, "pan": obj.pan = 40 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 70, "pitch": obj.pitch, "pan": obj.pan = 40 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 70, "pitch": obj.pitch, "pan": obj.pan = -40 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 70, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg6 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg7){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 60, "pitch": obj.pitch, "pan": obj.pan = -50 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 60, "pitch": obj.pitch, "pan": obj.pan = 50 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 60, "pitch": obj.pitch, "pan": obj.pan = 50 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 60, "pitch": obj.pitch, "pan": obj.pan = -50 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 60, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg7 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg8){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 50, "pitch": obj.pitch, "pan": obj.pan = -60 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 50, "pitch": obj.pitch, "pan": obj.pan = 60 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 50, "pitch": obj.pitch, "pan": obj.pan = 60 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 50, "pitch": obj.pitch, "pan": obj.pan = -60 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 50, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg8 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg9){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 40, "pitch": obj.pitch, "pan": obj.pan = -70 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 40, "pitch": obj.pitch, "pan": obj.pan = 70 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 40, "pitch": obj.pitch, "pan": obj.pan = 70 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 40, "pitch": obj.pitch, "pan": obj.pan = -70 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 40, "pitch": obj.pitch, "pan": obj.pan });  
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg9 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg10){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 30, "pitch": obj.pitch, "pan": obj.pan = -80 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 30, "pitch": obj.pitch, "pan": obj.pan = 80 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 30, "pitch": obj.pitch, "pan": obj.pan = 80 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 30, "pitch": obj.pitch, "pan": obj.pan = -80 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 30, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg10 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg11){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 20, "pitch": obj.pitch, "pan": obj.pan = -90 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 20, "pitch": obj.pitch, "pan": obj.pan = 90 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 20, "pitch": obj.pitch, "pan": obj.pan = 90 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 20, "pitch": obj.pitch, "pan": obj.pan = -90 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 20, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) > args.arg11 && $gameMap.distance(plaX, plaY, evtX, evtY) <= args.arg12){
            dirCheck = true;
            if (args.arg15 == "true"){
                if(plaX >= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 10, "pitch": obj.pitch, "pan": obj.pan = -100 });
                };
                if(plaX <= evtX){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 10, "pitch": obj.pitch, "pan": obj.pan = 100 });
                };
            };
            if(args.arg14 == "true"){
                if(cond1){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 10, "pitch": obj.pitch, "pan": obj.pan = 100 });  
                };
                if(cond2){
                    AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 10, "pitch": obj.pitch, "pan": obj.pan = -100 });  
                };
            }else
                AudioManager.playBgs({ "name": obj.name, "volume": obj.volume = 10, "pitch": obj.pitch, "pan": obj.pan });
        };
        if($gameMap.distance(plaX, plaY, evtX, evtY) == args.arg13){
            if(dirCheck === true){
                AudioManager.fadeOutBgs(1); 
                dirCheck = false;
            };   
        };
        const Tea_Game_Player_performTransfer = Game_Player.prototype.performTransfer;
        Game_Player.prototype.performTransfer = function() {
            Tea_Game_Player_performTransfer.call(this)
            if (dirCheck === true && this._newMapId !== $gameMap.mapId()){
                AudioManager.fadeOutBgs(1);
                dirCheck = false;
            };
        };  
    };
})();

