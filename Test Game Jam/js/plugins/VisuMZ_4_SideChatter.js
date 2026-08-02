//=============================================================================
// VisuStella MZ - Side Chatter
// VisuMZ_4_SideChatter.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_SideChatter = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SideChatter = VisuMZ.SideChatter || {};
VisuMZ.SideChatter.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [SideChatter]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Side_Chatter_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to create dialogue that appears on the side of the
 * screen without interrupting gameplay. These can be accompanied by sound (and
 * thus, voice acting if desired). After a while, the side chatter that appears
 * on the side will fade out.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add in desired text to the side chatter you want displayed.
 * * Insert face graphics for the side chatter entries.
 * * Play sound effects (which also means voice acting) to side chatter.
 * * Side chatter can be delayed before appearing on the screen, giving a sense
 *   of timing without needing to setup wait commands.
 * * You can select which side of the screen the side chatter will appear on.
 *   Both are always available.
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
 * Clearing Up Misunderstandings
 * ============================================================================
 *
 * There are some misunderstandings regarding gabs.
 *
 * ---
 * 
 * Side chatter is NOT part of the Event List
 * 
 * For events with Show Text messages, the game goes through the event list one
 * by one until it reaches the end. This does not apply to side chatter. The
 * Plugin Commands that add side chatter add them into a queue outside of the
 * event list and therefore, any events that may be intended for side chatter
 * to be finished will launch immediately unless there are event commands or
 * plugin commands that will cause the event list to wait for them.
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
 * === Side Chatter Plugin Commands ===
 * 
 * ---
 *
 * Side Chatter: Add Entry
 * - Adds a side chatter entry.
 *
 *   Text:
 *   - What text do you wish to add to the side chatter?
 *   - Text codes are allowed.
 *
 *   Face Filename:
 *   - What face graphic do you wish to display in the side chatter?
 *   - Leave empty to not use.
 * 
 *     Face Index:
 *     - What is the index of the face graphic you wish to display?
 *     - Index values start at 0.
 *
 *   Sound Effect:
 *   - Filename of the sound effect played.
 *   - Leave empty for no sound effect.
 * 
 *     Volume:
 *     - Volume of the sound effect played.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played.
 * 
 *     Pan:
 *     - Pan of the sound effect played.
 *
 *   Delay:
 *   - Delay this side chatter from appearing in this many frames.
 *   - 60 frames = 1 second.
 *   - 0 for instant.
 *
 *   Screen Side:
 *   - Which side of the screen do you wish to add the Side Chatter to?
 *   - If Plugin Command is using "default" as its value, refer to whatever
 *     the setting is found in the Plugin Parameters.
 *
 * ---
 *
 * Side Chatter: Clear
 * - Clears Side Chatter.
 *
 *   Screen Side:
 *   - Which side of the screen do you wish to clear the Side Chatter from?
 *
 * ---
 * 
 * Side Chatter: Wait
 * - Causes the game to wait until there is no more side chatter.
 * 
 *   Screen Side:
 *   - Which side of the screen do you wish to wait for?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings related to the side chatter effects found in
 * this plugin. Adjust them to best fit your game.
 *
 * ---
 * 
 * General Settings
 * 
 *   Default Side:
 *   - Which side of the screen do you wish to add the Side Chatter to?
 *   - Only applies when the Plugin Command selects "default".
 *
 *   Auto-Clear:
 * 
 *     On Battle End:
 *     - Automatically clear battle-related side chatter at the end of battle?
 * 
 *     On Map Change:
 *     - Automatically clear battle-related side chatter when changing maps?
 * 
 *   Duration:
 * 
 *     Fade In Duration:
 *     - How many frames does a side chatter entry fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does a side chatter entry fade out?
 *     - 60 frames = 1 second.
 * 
 *     Stay Duration:
 *     - How many frames does a side chatter entry stay?
 *     - 60 frames = 1 second.
 * 
 *   Left-Side:
 * 
 *     Offset X:
 *     - Offsets the graphics x alignment from left side.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the graphics y position from bottom.
 *     - Negative: up. Positive: down.
 * 
 *     Scale:
 *     - What scale will left-side chatter boxes be?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * 
 *     Spacing:
 *     - How many pixels of spacing are there between side chatter entries?
 * 
 *   Right-Side:
 * 
 *     Offset X:
 *     - Offsets the graphics x alignment from right side.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the graphics y position from bottom.
 *     - Negative: up. Positive: down.
 * 
 *     Scale:
 *     - What scale will right-side chatter boxes be?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * 
 *     Spacing:
 *     - How many pixels of spacing are there between side chatter entries?
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: November 14, 2024
 * * Documentation Update!
 * ** Added section "Clearing Up Misunderstandings":
 * *** Side chatter is NOT part of the Event List
 * **** For events with Show Text messages, the game goes through the event
 *      list one by one until it reaches the end. This does not apply to side
 *      chatter. The Plugin Commands that add side chatter add them into a
 *      queue outside of the event list and therefore, any events that may be
 *      intended for side chatter to be finished will launch immediately unless
 *      there are event commands or plugin commands that will cause the event
 *      list to wait for them.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Side Chatter: Wait
 * **** Causes the game to wait until there is no more side chatter.
 * 
 * Version 1.01: September 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated Plugin Command help description.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Default Side
 * *** Which side of the screen do you wish to add the Side Chatter to?
 * * Feature Update!
 * ** Plugin Command "Side Chatter: Add Entry" now has the "Screen Side"
 *    parameter defaulted to the "default" value, referencing the value used
 *    by the new Plugin Parameter.
 * 
 * Version 1.00 Official Release Date: September 1, 2023
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
 * @command SideChatterAdd
 * @text Side Chatter: Add Entry
 * @desc Adds a side chatter entry.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc What text do you wish to add to the side chatter?
 * Text codes are allowed.
 * @default "Line1\nLine2\nLine3\nLine4"
 *
 * @arg faceName:str
 * @text Face Filename
 * @type file
 * @dir img/faces/
 * @require 1
 * @desc What face graphic do you wish to display in the side
 * chatter? Leave empty to not use.
 * @default 
 *
 * @arg faceIndex:num
 * @text Face Index
 * @parent faceName:str
 * @type number
 * @desc What is the index of the face graphic you wish to display?
 * Index values start at 0.
 * @default 0
 *
 * @arg sfxName:str
 * @text Sound Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Leave empty for no sound effect.
 * @default Book1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent sfxName:str
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent sfxName:str
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent sfxName:str
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @arg delay:eval
 * @text Delay
 * @desc Delay this side chatter from appearing in this many frames.
 * 60 frames = 1 second. 0 for instant.
 * @default 0
 *
 * @arg ScreenSide:str
 * @text Screen Side
 * @type select
 * @option default
 * @option -
 * @option left
 * @option right
 * @desc Which side of the screen do you wish to add the Side Chatter to?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SideChatterClear
 * @text Side Chatter: Clear
 * @desc Clears Side Chatter.
 *
 * @arg ScreenSide:str
 * @text Screen Side
 * @type select
 * @option left
 * @option right
 * @desc Which side of the screen do you wish to clear the Side Chatter from?
 * @default left
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SideChatterWait
 * @text Side Chatter: Wait
 * @desc Causes the game to wait until there is no more side chatter.
 *
 * @arg ScreenSide:str
 * @text Screen Side
 * @type select
 * @option both
 * @option left
 * @option right
 * @desc Which side of the screen do you wish to wait for?
 * @default both
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
 * @param SideChatter
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ScreenSide:str
 * @text Default Side
 * @type select
 * @option left
 * @option right
 * @desc Which side of the screen do you wish to add the Side Chatter to?
 * @default left
 * 
 * @param AutoClear
 * @text Auto-Clear
 *
 * @param AutoClearBattleEnd:eval
 * @text On Battle End
 * @parent AutoClear
 * @type boolean
 * @on Auto-Clear
 * @off Don't Clear
 * @desc Automatically clear battle-related side chatter at the end of battle?
 * @default true
 *
 * @param AutoClearMapChange:eval
 * @text On Map Change
 * @parent AutoClear
 * @type boolean
 * @on Auto-Clear
 * @off Don't Clear
 * @desc Automatically clear battle-related side chatter when changing maps?
 * @default false
 * 
 * @param Duration
 *
 * @param fadeInDuration:num
 * @text Fade In Duration
 * @parent Duration
 * @desc How many frames does a side chatter entry fade in?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param fadeOutDuration:num
 * @text Fade Out Duration
 * @parent Duration
 * @desc How many frames does a side chatter entry fade out?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param stayDuration:num
 * @text Stay Duration
 * @parent Duration
 * @desc How many frames does a side chatter entry stay?
 * 60 frames = 1 second.
 * @default 600
 * 
 * @param LeftSide
 * @text Left-Side
 *
 * @param LeftSideOffsetX:num
 * @text Offset X
 * @parent LeftSide
 * @desc Offsets the graphics x alignment from left side.
 * Negative: left. Positive: right.
 * @default +4
 *
 * @param LeftSideOffsetY:num
 * @text Offset Y
 * @parent LeftSide
 * @desc Offsets the graphics y position from bottom.
 * Negative: up. Positive: down.
 * @default -168
 *
 * @param LeftSideScale:num
 * @text Scale
 * @parent LeftSide
 * @desc What scale will left-side chatter boxes be?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.60
 *
 * @param LeftSideSpacing:num
 * @text Spacing
 * @parent LeftSide
 * @desc How many pixels of spacing are there between
 * side chatter entries?
 * @default 8
 * 
 * @param RightSide
 * @text Right-Side
 *
 * @param RightSideOffsetX:num
 * @text Offset X
 * @parent RightSide
 * @desc Offsets the graphics x alignment from right side.
 * Negative: left. Positive: right.
 * @default -4
 *
 * @param RightSideOffsetY:num
 * @text Offset Y
 * @parent RightSide
 * @desc Offsets the graphics y position from bottom.
 * Negative: up. Positive: down.
 * @default -168
 *
 * @param RightSideScale:num
 * @text Scale
 * @parent RightSide
 * @desc What scale will right-side chatter boxes be?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.60
 *
 * @param RightSideSpacing:num
 * @text Spacing
 * @parent RightSide
 * @desc How many pixels of spacing are there between
 * side chatter entries?
 * @default 8
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
//=============================================================================

const _0x1ad409=_0x2798;function _0x2798(_0x2c24d1,_0x4dfb10){const _0x5c1e65=_0x5c1e();return _0x2798=function(_0x27982d,_0x16fed9){_0x27982d=_0x27982d-0xc2;let _0x2b900e=_0x5c1e65[_0x27982d];return _0x2b900e;},_0x2798(_0x2c24d1,_0x4dfb10);}(function(_0x283b2a,_0x2b8730){const _0x1cfbc1=_0x2798,_0x2e0d3e=_0x283b2a();while(!![]){try{const _0x5a2c0e=parseInt(_0x1cfbc1(0x134))/0x1+parseInt(_0x1cfbc1(0xc6))/0x2*(parseInt(_0x1cfbc1(0x163))/0x3)+parseInt(_0x1cfbc1(0x15b))/0x4*(parseInt(_0x1cfbc1(0xd2))/0x5)+-parseInt(_0x1cfbc1(0x14a))/0x6+-parseInt(_0x1cfbc1(0x12d))/0x7*(parseInt(_0x1cfbc1(0xc7))/0x8)+-parseInt(_0x1cfbc1(0x14d))/0x9+-parseInt(_0x1cfbc1(0x14e))/0xa*(-parseInt(_0x1cfbc1(0xe2))/0xb);if(_0x5a2c0e===_0x2b8730)break;else _0x2e0d3e['push'](_0x2e0d3e['shift']());}catch(_0x28a902){_0x2e0d3e['push'](_0x2e0d3e['shift']());}}}(_0x5c1e,0x35240));var label=_0x1ad409(0x14f),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1ad409(0x12e)](function(_0x7f1c44){const _0x505e74=_0x1ad409;return _0x7f1c44['status']&&_0x7f1c44['description'][_0x505e74(0x10b)]('['+label+']');})[0x0];VisuMZ[label][_0x1ad409(0x165)]=VisuMZ[label][_0x1ad409(0x165)]||{},VisuMZ[_0x1ad409(0x15e)]=function(_0x31564c,_0x3e4075){const _0x5d20d0=_0x1ad409;for(const _0x5aa3c2 in _0x3e4075){if(_0x5aa3c2[_0x5d20d0(0xdc)](/(.*):(.*)/i)){const _0x471de3=String(RegExp['$1']),_0xd23e32=String(RegExp['$2'])[_0x5d20d0(0x110)]()[_0x5d20d0(0xcd)]();let _0x171924,_0x1a5e41,_0x30442f;switch(_0xd23e32){case _0x5d20d0(0xde):_0x171924=_0x3e4075[_0x5aa3c2]!==''?Number(_0x3e4075[_0x5aa3c2]):0x0;break;case _0x5d20d0(0x106):_0x1a5e41=_0x3e4075[_0x5aa3c2]!==''?JSON[_0x5d20d0(0x15c)](_0x3e4075[_0x5aa3c2]):[],_0x171924=_0x1a5e41[_0x5d20d0(0xff)](_0x5d136d=>Number(_0x5d136d));break;case'EVAL':_0x171924=_0x3e4075[_0x5aa3c2]!==''?eval(_0x3e4075[_0x5aa3c2]):null;break;case _0x5d20d0(0x11b):_0x1a5e41=_0x3e4075[_0x5aa3c2]!==''?JSON['parse'](_0x3e4075[_0x5aa3c2]):[],_0x171924=_0x1a5e41[_0x5d20d0(0xff)](_0x22fdb8=>eval(_0x22fdb8));break;case _0x5d20d0(0x13f):_0x171924=_0x3e4075[_0x5aa3c2]!==''?JSON['parse'](_0x3e4075[_0x5aa3c2]):'';break;case _0x5d20d0(0xda):_0x1a5e41=_0x3e4075[_0x5aa3c2]!==''?JSON[_0x5d20d0(0x15c)](_0x3e4075[_0x5aa3c2]):[],_0x171924=_0x1a5e41[_0x5d20d0(0xff)](_0x4b9b5c=>JSON[_0x5d20d0(0x15c)](_0x4b9b5c));break;case _0x5d20d0(0x114):_0x171924=_0x3e4075[_0x5aa3c2]!==''?new Function(JSON[_0x5d20d0(0x15c)](_0x3e4075[_0x5aa3c2])):new Function(_0x5d20d0(0x111));break;case _0x5d20d0(0x108):_0x1a5e41=_0x3e4075[_0x5aa3c2]!==''?JSON['parse'](_0x3e4075[_0x5aa3c2]):[],_0x171924=_0x1a5e41[_0x5d20d0(0xff)](_0x24d25a=>new Function(JSON['parse'](_0x24d25a)));break;case _0x5d20d0(0xca):_0x171924=_0x3e4075[_0x5aa3c2]!==''?String(_0x3e4075[_0x5aa3c2]):'';break;case _0x5d20d0(0xe8):_0x1a5e41=_0x3e4075[_0x5aa3c2]!==''?JSON['parse'](_0x3e4075[_0x5aa3c2]):[],_0x171924=_0x1a5e41[_0x5d20d0(0xff)](_0x2ceb58=>String(_0x2ceb58));break;case _0x5d20d0(0xee):_0x30442f=_0x3e4075[_0x5aa3c2]!==''?JSON['parse'](_0x3e4075[_0x5aa3c2]):{},_0x171924=VisuMZ[_0x5d20d0(0x15e)]({},_0x30442f);break;case _0x5d20d0(0x13d):_0x1a5e41=_0x3e4075[_0x5aa3c2]!==''?JSON[_0x5d20d0(0x15c)](_0x3e4075[_0x5aa3c2]):[],_0x171924=_0x1a5e41[_0x5d20d0(0xff)](_0x1ae00c=>VisuMZ[_0x5d20d0(0x15e)]({},JSON['parse'](_0x1ae00c)));break;default:continue;}_0x31564c[_0x471de3]=_0x171924;}}return _0x31564c;},(_0x35b528=>{const _0x3a9c00=_0x1ad409,_0x1ffcd3=_0x35b528[_0x3a9c00(0x123)];for(const _0x1ca008 of dependencies){if(!Imported[_0x1ca008]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x3a9c00(0x11f)](_0x1ffcd3,_0x1ca008)),SceneManager[_0x3a9c00(0x11e)]();break;}}const _0x3d6145=_0x35b528[_0x3a9c00(0xe5)];if(_0x3d6145[_0x3a9c00(0xdc)](/\[Version[ ](.*?)\]/i)){const _0x2fe269=Number(RegExp['$1']);_0x2fe269!==VisuMZ[label]['version']&&(alert(_0x3a9c00(0xd3)[_0x3a9c00(0x11f)](_0x1ffcd3,_0x2fe269)),SceneManager[_0x3a9c00(0x11e)]());}if(_0x3d6145[_0x3a9c00(0xdc)](/\[Tier[ ](\d+)\]/i)){const _0x46dac8=Number(RegExp['$1']);_0x46dac8<tier?(alert(_0x3a9c00(0x167)[_0x3a9c00(0x11f)](_0x1ffcd3,_0x46dac8,tier)),SceneManager[_0x3a9c00(0x11e)]()):tier=Math[_0x3a9c00(0xd7)](_0x46dac8,tier);}VisuMZ[_0x3a9c00(0x15e)](VisuMZ[label]['Settings'],_0x35b528[_0x3a9c00(0x164)]);})(pluginData),PluginManager[_0x1ad409(0xea)](pluginData[_0x1ad409(0x123)],_0x1ad409(0x119),_0x4baa03=>{const _0x5a029b=_0x1ad409;VisuMZ[_0x5a029b(0x15e)](_0x4baa03,_0x4baa03);const _0x2b2bfd=_0x4baa03[_0x5a029b(0x16c)]||'',_0x5ef734=_0x4baa03[_0x5a029b(0x146)]||'',_0x58b2e1=_0x4baa03[_0x5a029b(0xc4)]||0x0,_0x506cb1={'name':_0x4baa03[_0x5a029b(0x149)]||'','volume':_0x4baa03['sfxVolume']||0x0,'pitch':_0x4baa03['sfxPitch']||0x0,'pan':_0x4baa03['sfxPan']||0x0},_0x2d06f7=_0x4baa03['delay']||0x0;let _0x5d5fa7=![];const _0x391bae=_0x4baa03['ScreenSide'];switch(_0x391bae[_0x5a029b(0xdd)]()[_0x5a029b(0xcd)]()){case'left':_0x5d5fa7=!![];break;case'right':_0x5d5fa7=![];break;default:_0x5d5fa7=Game_Screen[_0x5a029b(0x112)][_0x5a029b(0xfc)]==='left';break;}$gameScreen[_0x5a029b(0x14b)](_0x2b2bfd,_0x5ef734,_0x58b2e1,_0x506cb1,_0x2d06f7,_0x5d5fa7);}),PluginManager[_0x1ad409(0xea)](pluginData['name'],_0x1ad409(0x14c),_0x454825=>{const _0x1af24d=_0x1ad409;VisuMZ[_0x1af24d(0x15e)](_0x454825,_0x454825);const _0x1c0ac1=_0x454825[_0x1af24d(0xfa)]===_0x1af24d(0x10e);$gameScreen[_0x1af24d(0xd9)](_0x1c0ac1);}),PluginManager[_0x1ad409(0xea)](pluginData[_0x1ad409(0x123)],_0x1ad409(0xce),_0x3e3e47=>{const _0x5bde95=_0x1ad409;VisuMZ['ConvertParams'](_0x3e3e47,_0x3e3e47);const _0x414d7b=_0x3e3e47['ScreenSide']??_0x5bde95(0x16b),_0x27413a=$gameTemp[_0x5bde95(0x124)]();_0x27413a&&_0x27413a['waitForSideChatter'](_0x414d7b);}),BattleManager[_0x1ad409(0x112)]={'clearOnEnd':VisuMZ['SideChatter'][_0x1ad409(0x165)]['AutoClearBattleEnd']??!![]},VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x140)]=BattleManager[_0x1ad409(0xef)],BattleManager[_0x1ad409(0xef)]=function(_0x5a8f07){const _0x40986b=_0x1ad409;VisuMZ['SideChatter'][_0x40986b(0x140)][_0x40986b(0x147)](this,_0x5a8f07),BattleManager[_0x40986b(0x112)][_0x40986b(0xc8)]&&this[_0x40986b(0x120)]();},BattleManager['endBattleSideChatter']=function(){const _0x545027=_0x1ad409;$gameScreen[_0x545027(0xd9)](!![]),$gameScreen[_0x545027(0xd9)](![]);},Game_Temp[_0x1ad409(0x125)][_0x1ad409(0xf9)]=function(_0x554aad){const _0x3c0a36=_0x1ad409;this[_0x3c0a36(0x15a)]=_0x554aad;},Game_Temp[_0x1ad409(0x125)]['getLastPluginCommandInterpreter']=function(){const _0x3594e1=_0x1ad409;return this[_0x3594e1(0x15a)];},VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0xe0)]=Game_Interpreter[_0x1ad409(0x125)][_0x1ad409(0xcf)],Game_Interpreter['prototype']['command357']=function(_0x5614f5){const _0x129dbd=_0x1ad409;return $gameTemp[_0x129dbd(0xf9)](this),VisuMZ['SideChatter'][_0x129dbd(0xe0)][_0x129dbd(0x147)](this,_0x5614f5);},Game_Screen[_0x1ad409(0x112)]={'defaultSide':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)]['ScreenSide']??_0x1ad409(0x10e),'fadeInDuration':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)][_0x1ad409(0x100)]??0x14,'fadeOutDuration':VisuMZ['SideChatter'][_0x1ad409(0x165)][_0x1ad409(0x130)]??0x14,'duration':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)]['stayDuration']??0x258},Game_Screen[_0x1ad409(0x125)][_0x1ad409(0x168)]=function(){const _0x493ec5=_0x1ad409;this[_0x493ec5(0xe7)]={'left':[],'right':[]},this[_0x493ec5(0x156)]={'left':[],'right':[]};},Game_Screen['prototype'][_0x1ad409(0xec)]=function(_0x57e8d9){const _0x456470=_0x1ad409;if(this[_0x456470(0xe7)]===undefined)this[_0x456470(0x168)]();const _0x3ef31e=_0x57e8d9?'left':'right';return $gameParty[_0x456470(0x128)]()?this['_sideChatterBattle'][_0x3ef31e]:this['_sideChatterMap'][_0x3ef31e];},Game_Screen[_0x1ad409(0x125)][_0x1ad409(0xd9)]=function(_0x357e4f){const _0x1c1bf5=_0x1ad409,_0x355c93=this[_0x1c1bf5(0xec)](_0x357e4f);while(_0x355c93['length']){_0x355c93[_0x1c1bf5(0xcb)]();}},Game_Screen[_0x1ad409(0x125)][_0x1ad409(0x14b)]=function(_0x541e1c,_0x4c35b7,_0x28961f,_0x1e6ee5,_0x39cd46,_0x5aa8d2){const _0x17db8a=_0x1ad409;_0x541e1c=VisuMZ[_0x17db8a(0x14f)][_0x17db8a(0xf2)](_0x541e1c);const _0x5915e7=Game_Screen[_0x17db8a(0x112)],_0x104dd6={'text':_0x541e1c,'faceName':_0x4c35b7||'','faceIndex':_0x28961f||0x0,'sound':_0x1e6ee5||null,'delay':_0x39cd46,'stayDuration':_0x5915e7[_0x17db8a(0x169)],'fadeInDuration':_0x5915e7[_0x17db8a(0x100)],'fadeOutDuration':_0x5915e7['fadeOutDuration'],'stage':''};stage=_0x39cd46>0x0?_0x17db8a(0x107):_0x17db8a(0xdb);const _0x1c07cc=this[_0x17db8a(0xec)](_0x5aa8d2);if(_0x1c07cc[_0x17db8a(0xd0)]>0x0){const _0x1e3089=_0x1c07cc[_0x1c07cc[_0x17db8a(0xd0)]-0x1];if(_0x1e3089[_0x17db8a(0x16c)]===_0x541e1c&&_0x1e3089[_0x17db8a(0x146)]===_0x4c35b7&&_0x1e3089[_0x17db8a(0xc4)]===_0x28961f)return;}_0x1c07cc[_0x17db8a(0xe9)](_0x104dd6);},VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0xf2)]=function(_0x301cd9){const _0x54140a=_0x1ad409;Imported[_0x54140a(0xcc)]&&(_0x301cd9=_0x301cd9[_0x54140a(0xc5)](_0x54140a(0x13b),Window_Base[_0x54140a(0x125)]['lastGainedObjectName'](![])),_0x301cd9=_0x301cd9[_0x54140a(0xc5)](_0x54140a(0xd8),Window_Base[_0x54140a(0x125)][_0x54140a(0x121)]()),_0x301cd9=_0x301cd9['replace']('\x5cLastGainObj',Window_Base[_0x54140a(0x125)]['lastGainedObjectName'](!![])));for(;;){if(_0x301cd9[_0x54140a(0xdc)](/\\V\[(\d+)\]/gi))_0x301cd9=_0x301cd9['replace'](/\\V\[(\d+)\]/gi,(_0x48a8a5,_0x1db244)=>$gameVariables[_0x54140a(0x135)](parseInt(_0x1db244)));else break;}return _0x301cd9;},VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x13c)]=Game_Screen[_0x1ad409(0x125)][_0x1ad409(0xfe)],Game_Screen[_0x1ad409(0x125)]['update']=function(){const _0x1ec0fd=_0x1ad409;VisuMZ['SideChatter'][_0x1ec0fd(0x13c)][_0x1ec0fd(0x147)](this),this[_0x1ec0fd(0x12f)](!![]),this[_0x1ec0fd(0x12f)](![]);},Game_Screen[_0x1ad409(0x125)][_0x1ad409(0x12f)]=function(_0x565a6c){const _0x13e7e9=_0x1ad409,_0x391b29=this[_0x13e7e9(0xec)](_0x565a6c),_0x33024d=[];for(const _0x3f993b of _0x391b29){VisuMZ[_0x13e7e9(0x14f)][_0x13e7e9(0xd6)](_0x3f993b),_0x3f993b&&_0x3f993b[_0x13e7e9(0xf5)]===_0x13e7e9(0x161)&&_0x33024d[_0x13e7e9(0xe9)](_0x3f993b);}for(const _0x294688 of _0x33024d){_0x391b29[_0x13e7e9(0x141)](_0x294688);}},VisuMZ['SideChatter']['updateSideChatterData']=function(_0x437904){const _0x50f790=_0x1ad409;if(_0x437904['delay']>0x0)_0x437904[_0x50f790(0x107)]--,_0x437904[_0x50f790(0xf5)]=_0x50f790(0x107);else{if(_0x437904[_0x50f790(0x100)]>0x0)_0x437904[_0x50f790(0x100)]--,_0x437904[_0x50f790(0xf5)]='fadeIn';else{if(_0x437904[_0x50f790(0xdf)]>0x0)_0x437904[_0x50f790(0xdf)]--,_0x437904[_0x50f790(0xf5)]='stay';else _0x437904['fadeOutDuration']>0x0?(_0x437904[_0x50f790(0x130)]--,_0x437904[_0x50f790(0xf5)]=_0x50f790(0x129)):_0x437904[_0x50f790(0xf5)]=_0x50f790(0x161);}}},Game_Player[_0x1ad409(0x112)]={'clearOnTransfer':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)][_0x1ad409(0x127)]??![]},VisuMZ[_0x1ad409(0x14f)]['Game_Player_performTransfer']=Game_Player[_0x1ad409(0x125)]['performTransfer'],Game_Player[_0x1ad409(0x125)][_0x1ad409(0x158)]=function(){const _0xf6009e=_0x1ad409;Game_Player[_0xf6009e(0x112)][_0xf6009e(0x166)]&&this[_0xf6009e(0xfb)]()&&((this[_0xf6009e(0xc9)]!==$gameMap[_0xf6009e(0x136)]()||this['_needsMapReload'])&&this['clearTransferSideChatter']()),VisuMZ[_0xf6009e(0x14f)][_0xf6009e(0x13a)][_0xf6009e(0x147)](this);},Game_Player[_0x1ad409(0x125)][_0x1ad409(0x15f)]=function(){const _0x42d9f1=_0x1ad409;$gameScreen[_0x42d9f1(0xd9)](!![]),$gameScreen[_0x42d9f1(0xd9)](![]);},Game_Interpreter['prototype'][_0x1ad409(0x109)]=function(_0x13b6fc){const _0x5d5241=_0x1ad409;this[_0x5d5241(0xc2)]('sideChatter\x20'+_0x13b6fc);},VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x117)]=Game_Interpreter[_0x1ad409(0x125)][_0x1ad409(0x10c)],Game_Interpreter[_0x1ad409(0x125)]['updateWaitMode']=function(){const _0x1a5ddc=_0x1ad409;if(this['_waitMode']===_0x1a5ddc(0x142))return this['isSideChatterRunning'](_0x1a5ddc(0x16b));else{if(this[_0x1a5ddc(0x16d)]==='sideChatter\x20left')return this[_0x1a5ddc(0x12b)](_0x1a5ddc(0x10e));else return this['_waitMode']===_0x1a5ddc(0x139)?this[_0x1a5ddc(0x12b)](_0x1a5ddc(0xed)):VisuMZ[_0x1a5ddc(0x14f)]['Game_Interpreter_updateWaitMode'][_0x1a5ddc(0x147)](this);}},Game_Interpreter[_0x1ad409(0x125)][_0x1ad409(0x12b)]=function(_0x5424da){const _0x2c878b=_0x1ad409,_0x2b7e92=$gameParty[_0x2c878b(0x128)]()?$gameScreen[_0x2c878b(0x156)]:$gameScreen[_0x2c878b(0xe7)],_0x34f194=SceneManager['_scene'][_0x2c878b(0x12a)]['left'],_0xac8627=SceneManager[_0x2c878b(0x113)]['_sideChatterContainers'][_0x2c878b(0xed)];switch(_0x5424da){case _0x2c878b(0x16b):if(_0x2b7e92[_0x2c878b(0x10e)][_0x2c878b(0xd0)]>0x0)return!![];if(_0x2b7e92[_0x2c878b(0xed)][_0x2c878b(0xd0)]>0x0)return!![];if(_0x34f194[_0x2c878b(0x143)][_0x2c878b(0xd0)]>0x0)return!![];if(_0xac8627[_0x2c878b(0x143)][_0x2c878b(0xd0)]>0x0)return!![];break;case _0x2c878b(0x10e):if(_0x2b7e92[_0x2c878b(0x10e)][_0x2c878b(0xd0)]>0x0)return!![];if(_0x34f194[_0x2c878b(0x143)]['length']>0x0)return!![];break;case'right':if(_0x2b7e92['right'][_0x2c878b(0xd0)]>0x0)return!![];if(_0xac8627['children'][_0x2c878b(0xd0)]>0x0)return!![];break;}return![];},VisuMZ[_0x1ad409(0x14f)]['Scene_Map_createSpriteset']=Scene_Map[_0x1ad409(0x125)][_0x1ad409(0xf6)],Scene_Map[_0x1ad409(0x125)]['createSpriteset']=function(){const _0xa81b37=_0x1ad409;VisuMZ[_0xa81b37(0x14f)]['Scene_Map_createSpriteset'][_0xa81b37(0x147)](this),this[_0xa81b37(0xf7)]();},VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x11a)]=Scene_Battle[_0x1ad409(0x125)][_0x1ad409(0xf6)],Scene_Battle['prototype']['createSpriteset']=function(){const _0x44c873=_0x1ad409;VisuMZ[_0x44c873(0x14f)][_0x44c873(0x11a)][_0x44c873(0x147)](this),this['createSideChatterContainers']();},Scene_Message[_0x1ad409(0x125)][_0x1ad409(0xf7)]=function(){const _0xe0f43d=_0x1ad409;this[_0xe0f43d(0x12a)]={'left':new Sprite_SideChatterContainer(!![]),'right':new Sprite_SideChatterContainer(![])},this['addChild'](this[_0xe0f43d(0x12a)][_0xe0f43d(0x10e)]),this[_0xe0f43d(0x126)](this[_0xe0f43d(0x12a)]['right']);};function Sprite_SideChatterContainer(){const _0x242c14=_0x1ad409;this[_0x242c14(0xd4)](...arguments);}Sprite_SideChatterContainer[_0x1ad409(0x125)]=Object[_0x1ad409(0x122)](Sprite[_0x1ad409(0x125)]),Sprite_SideChatterContainer[_0x1ad409(0x125)]['constructor']=Sprite_SideChatterContainer,Sprite_SideChatterContainer[_0x1ad409(0x132)]={'offsetLeft':{'x':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)][_0x1ad409(0xf0)]??0x4,'y':VisuMZ[_0x1ad409(0x14f)]['Settings'][_0x1ad409(0xe4)]??-0xa8},'offsetRight':{'x':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)][_0x1ad409(0x160)]??-0x4,'y':VisuMZ[_0x1ad409(0x14f)]['Settings'][_0x1ad409(0x101)]??-0xa8},'scale':{'left':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)][_0x1ad409(0x154)]??0.6,'right':VisuMZ[_0x1ad409(0x14f)][_0x1ad409(0x165)][_0x1ad409(0x131)]??0.6},'spacing':{'left':VisuMZ['SideChatter'][_0x1ad409(0x165)][_0x1ad409(0x137)]??0x8,'right':VisuMZ[_0x1ad409(0x14f)]['Settings'][_0x1ad409(0x162)]??0x8}},Sprite_SideChatterContainer[_0x1ad409(0x125)][_0x1ad409(0xd4)]=function(_0x149710){const _0x27e2c2=_0x1ad409;this[_0x27e2c2(0x116)]=_0x149710,Sprite[_0x27e2c2(0x125)][_0x27e2c2(0xd4)][_0x27e2c2(0x147)](this),this['initMembers'](),this[_0x27e2c2(0x118)](),this[_0x27e2c2(0x102)](![]);},Sprite_SideChatterContainer[_0x1ad409(0x125)][_0x1ad409(0x138)]=function(){const _0x2509d7=_0x1ad409;this[_0x2509d7(0x148)]['x']=0.5,this[_0x2509d7(0x148)]['y']=0x1,this['x']=this[_0x2509d7(0x152)]()?0x0:Graphics[_0x2509d7(0x10a)],this['y']=Graphics['height'];const _0x112d53=this[_0x2509d7(0x152)]()?'offsetLeft':_0x2509d7(0x103),_0x3e1b9e=Sprite_SideChatterContainer[_0x2509d7(0x132)][_0x112d53];this['x']+=_0x3e1b9e['x'],this['y']+=_0x3e1b9e['y'];},Sprite_SideChatterContainer[_0x1ad409(0x125)]['createDummyWindow']=function(){const _0x14308d=_0x1ad409,_0x1c9f19=new Rectangle(0x0,0x0,Graphics['width'],Graphics[_0x14308d(0x10f)]);this[_0x14308d(0x145)]=new Window_Base(_0x1c9f19);},Sprite_SideChatterContainer[_0x1ad409(0x125)][_0x1ad409(0x152)]=function(){const _0x24de6c=_0x1ad409;return this[_0x24de6c(0x116)];},Sprite_SideChatterContainer[_0x1ad409(0x125)][_0x1ad409(0xfe)]=function(){const _0x15f3ba=_0x1ad409;Sprite[_0x15f3ba(0x125)]['update'][_0x15f3ba(0x147)](this);if(!this[_0x15f3ba(0x145)])return;this['checkNewEntries'](!![]),this['removeOldEntries']();},Sprite_SideChatterContainer['prototype'][_0x1ad409(0x102)]=function(_0x391e9a){const _0x3e572d=_0x1ad409,_0x3bcc27=$gameScreen[_0x3e572d(0xec)](this[_0x3e572d(0x116)]);if(_0x3bcc27[_0x3e572d(0xd0)]<=0x0)return;for(const _0x422408 of _0x3bcc27){if(!_0x422408)continue;if(_0x422408[_0x3e572d(0xf5)]===_0x3e572d(0x107))continue;if(this['isEntryMade'](_0x422408))continue;this[_0x3e572d(0x13e)](_0x422408,_0x391e9a);}},Sprite_SideChatterContainer[_0x1ad409(0x125)][_0x1ad409(0xd1)]=function(_0x2989b7){const _0x465694=_0x1ad409;return this['children'][_0x465694(0xfd)](_0x4b00e7=>_0x4b00e7[_0x465694(0x12c)]===_0x2989b7);},Sprite_SideChatterContainer[_0x1ad409(0x125)][_0x1ad409(0x13e)]=function(_0x333c5e,_0x1b0a55){const _0x538f4f=_0x1ad409,_0x9551c5=$gameSystem[_0x538f4f(0x16a)]()*0x2,_0x4acd16=this[_0x538f4f(0x145)][_0x538f4f(0x157)](_0x333c5e[_0x538f4f(0x16c)]);let _0x3db4e3=_0x4acd16['width']+_0x9551c5+0x8,_0x457baa=_0x4acd16[_0x538f4f(0x10f)]+_0x9551c5;_0x333c5e[_0x538f4f(0x146)]!==''&&(_0x3db4e3+=ImageManager[_0x538f4f(0xd5)]+0x14,_0x457baa=Math[_0x538f4f(0xd7)](ImageManager['faceWidth']+_0x9551c5,_0x457baa));const _0x48e3b8=this['isLeftSide']()?'left':'right',_0x5553dc=Sprite_SideChatterContainer[_0x538f4f(0x132)][_0x538f4f(0xe3)][_0x48e3b8],_0x2c3130=new Rectangle(0x0,0x0,_0x3db4e3,_0x457baa),_0xb62555=new Window_SideChatter(_0x2c3130,this[_0x538f4f(0x152)](),_0x333c5e);_0xb62555[_0x538f4f(0xe3)]['x']=_0xb62555[_0x538f4f(0xe3)]['y']=_0x5553dc,this[_0x538f4f(0x126)](_0xb62555);_0x1b0a55&&_0x333c5e[_0x538f4f(0xf1)]&&_0x333c5e['sound'][_0x538f4f(0x123)]!==''&&AudioManager['playSe'](_0x333c5e[_0x538f4f(0xf1)]);const _0x37dc1b=Sprite_SideChatterContainer['SETTINGS']['spacing'][_0x48e3b8],_0x29df67=Math['ceil'](_0x457baa*_0x5553dc)+_0x37dc1b;this[_0x538f4f(0xf4)](_0x29df67);},Sprite_SideChatterContainer['prototype']['shiftAllChildrenUpward']=function(_0x4698ef){const _0x188785=_0x1ad409;for(const _0x486870 of this[_0x188785(0x143)]){_0x486870['y']-=_0x4698ef;};},Sprite_SideChatterContainer[_0x1ad409(0x125)][_0x1ad409(0x11c)]=function(){const _0x5c4d1d=_0x1ad409;if(this[_0x5c4d1d(0x143)][_0x5c4d1d(0xd0)]<=0x0)return;const _0x1d1c3a=[],_0xff2cb7=$gameScreen[_0x5c4d1d(0xec)](this[_0x5c4d1d(0x152)]());for(const _0x2252a2 of this[_0x5c4d1d(0x143)]){const _0x1628c4=_0x2252a2[_0x5c4d1d(0x12c)];if(_0xff2cb7['includes'](_0x1628c4))continue;_0x1d1c3a['push'](_0x2252a2);}while(_0x1d1c3a[_0x5c4d1d(0xd0)]){const _0x2a7734=_0x1d1c3a[_0x5c4d1d(0xcb)]();this[_0x5c4d1d(0x104)](_0x2a7734);}};function Window_SideChatter(){const _0x8fd2c1=_0x1ad409;this[_0x8fd2c1(0xd4)](...arguments);}function _0x5c1e(){const _0x1460b5=['sound','ConvertSideChatterText','floor','shiftAllChildrenUpward','stage','createSpriteset','createSideChatterContainers','clear','setLastPluginCommandInterpreter','ScreenSide','isTransferring','defaultSide','find','update','map','fadeInDuration','RightSideOffsetY','checkNewEntries','offsetRight','removeChild','updateOpacity','ARRAYNUM','delay','ARRAYFUNC','waitForSideChatter','width','includes','updateWaitMode','drawTextEx','left','height','toUpperCase','return\x200','SIDE_CHATTER_SETTINGS','_scene','FUNC','prepareFace','_leftSide','Game_Interpreter_updateWaitMode','createDummyWindow','SideChatterAdd','Scene_Battle_createSpriteset','ARRAYEVAL','removeOldEntries','drawFace','exit','format','endBattleSideChatter','lastGainedObjectQuantity','create','name','getLastPluginCommandInterpreter','prototype','addChild','AutoClearMapChange','inBattle','fadeOut','_sideChatterContainers','isSideChatterRunning','_data','7EKZPbd','filter','updateSideChatter','fadeOutDuration','RightSideScale','SETTINGS','refresh','213129uLLXbr','value','mapId','LeftSideSpacing','initMembers','sideChatter\x20right','Game_Player_performTransfer','\x5cLastGainObjName','Game_Screen_update','ARRAYSTRUCT','createNewEntry','JSON','BattleManager_endBattle','remove','sideChatter\x20both','children','min','_dummyWindow','faceName','call','anchor','sfxName','1386720FzTdNf','addSideChatter','SideChatterClear','1802223ofHLmB','100sIvVBe','SideChatter','opacity','contents','isLeftSide','updatePositionX','LeftSideScale','faceHeight','_sideChatterBattle','textSizeEx','performTransfer','constructor','_lastPluginCommandInterpreter','4cJBSBt','parse','loadFace','ConvertParams','clearTransferSideChatter','RightSideOffsetX','end','RightSideSpacing','3GmTXOF','parameters','Settings','clearOnTransfer','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','initSideChatter','duration','windowPadding','both','text','_waitMode','setWaitMode','bind','faceIndex','replace','705416MiMPfr','2785240OKntQZ','clearOnEnd','_newMapId','STR','pop','VisuMZ_1_MessageCore','trim','SideChatterWait','command357','length','isEntryMade','1158595ZKJCRw','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','initialize','faceWidth','updateSideChatterData','max','\x5cLastGainObjQuantity','clearSideChatter','ARRAYJSON','fadeIn','match','toLowerCase','NUM','stayDuration','Game_Interpreter_PluginCommand','stay','219593nLHhyq','scale','LeftSideOffsetY','description','drawText','_sideChatterMap','ARRAYSTR','push','registerCommand','blt','sideChatter','right','STRUCT','endBattle','LeftSideOffsetX'];_0x5c1e=function(){return _0x1460b5;};return _0x5c1e();}Window_SideChatter[_0x1ad409(0x125)]=Object[_0x1ad409(0x122)](Window_Base[_0x1ad409(0x125)]),Window_SideChatter['prototype'][_0x1ad409(0x159)]=Window_SideChatter,Window_SideChatter[_0x1ad409(0x132)]={},Window_SideChatter['prototype'][_0x1ad409(0xd4)]=function(_0x215c0f,_0x35f504,_0x2a8847){const _0x27adbc=_0x1ad409;this[_0x27adbc(0x116)]=_0x35f504,this[_0x27adbc(0x12c)]=_0x2a8847,Window_Base[_0x27adbc(0x125)][_0x27adbc(0xd4)][_0x27adbc(0x147)](this,_0x215c0f),this[_0x27adbc(0x133)](),this[_0x27adbc(0xfe)]();},Window_SideChatter[_0x1ad409(0x125)]['refresh']=function(){const _0x531600=_0x1ad409;this['contents'][_0x531600(0xf8)](),this[_0x531600(0x115)](),this[_0x531600(0xe6)]();},Window_SideChatter['prototype'][_0x1ad409(0x115)]=function(){const _0x28b71a=_0x1ad409;if(!this[_0x28b71a(0x12c)])return;if(this[_0x28b71a(0x12c)][_0x28b71a(0x146)]==='')return;const _0x57d490=ImageManager[_0x28b71a(0x15d)](this[_0x28b71a(0x12c)][_0x28b71a(0x146)]);_0x57d490['addLoadListener'](this['drawFace'][_0x28b71a(0xc3)](this,_0x57d490));},Window_SideChatter[_0x1ad409(0x125)][_0x1ad409(0x11d)]=function(_0x1b72f1){const _0x49581b=_0x1ad409,_0x1c49c7=this['_data'][_0x49581b(0xc4)],_0x5cbf7a=0x0,_0xb2e76f=0x0,_0x39ce88=ImageManager[_0x49581b(0xd5)],_0x53c0e8=ImageManager[_0x49581b(0x155)],_0x454582=ImageManager[_0x49581b(0xd5)],_0x510900=ImageManager[_0x49581b(0x155)],_0x1f90b2=Math['min'](_0x39ce88,_0x454582),_0x2af886=Math[_0x49581b(0x144)](_0x53c0e8,_0x510900),_0x4ad249=Math[_0x49581b(0xf3)](_0x5cbf7a+Math['max'](_0x39ce88-_0x454582,0x0)/0x2),_0x3a5082=Math[_0x49581b(0xf3)](_0xb2e76f+Math[_0x49581b(0xd7)](_0x53c0e8-_0x510900,0x0)/0x2),_0x11f2f7=Math['floor'](_0x1c49c7%0x4*_0x454582+(_0x454582-_0x1f90b2)/0x2),_0x98e1c9=Math[_0x49581b(0xf3)](Math[_0x49581b(0xf3)](_0x1c49c7/0x4)*_0x510900+(_0x510900-_0x2af886)/0x2);this[_0x49581b(0x151)][_0x49581b(0xeb)](_0x1b72f1,_0x11f2f7,_0x98e1c9,_0x1f90b2,_0x2af886,_0x4ad249,_0x3a5082);},Window_SideChatter[_0x1ad409(0x125)][_0x1ad409(0xe6)]=function(){const _0x57d545=_0x1ad409;if(!this[_0x57d545(0x12c)])return;if(this[_0x57d545(0x12c)][_0x57d545(0x16c)]==='')return;const _0x3651c3=this[_0x57d545(0x12c)]['faceName']!=='',_0x5494a9=_0x3651c3?ImageManager['faceWidth']+0x14:0x4,_0x3d5385=0x0;this[_0x57d545(0x10d)](this[_0x57d545(0x12c)][_0x57d545(0x16c)],_0x5494a9,_0x3d5385);},Window_SideChatter[_0x1ad409(0x125)][_0x1ad409(0xfe)]=function(){const _0xaa8db4=_0x1ad409;Window_Base[_0xaa8db4(0x125)]['update'][_0xaa8db4(0x147)](this),this[_0xaa8db4(0x105)](),this[_0xaa8db4(0x153)]();},Window_SideChatter[_0x1ad409(0x125)][_0x1ad409(0x105)]=function(){const _0x157b25=_0x1ad409,_0x38583d=Game_Screen[_0x157b25(0x112)],_0x5e5c32=this[_0x157b25(0x12c)][_0x157b25(0xf5)];if(_0x5e5c32===_0x157b25(0xe1))this['opacity']=0xff;else{if(_0x5e5c32===_0x157b25(0x107)||_0x5e5c32===_0x157b25(0x161))this[_0x157b25(0x150)]=0x0;else{if(_0x5e5c32===_0x157b25(0xdb)){const _0x289bcf=_0x38583d[_0x157b25(0x100)],_0xcc318c=this['_data'][_0x157b25(0x100)];this['opacity']=(_0x289bcf-_0xcc318c)/(_0x289bcf||0x1)*0xff;}else{if(_0x5e5c32==='fadeOut'){const _0x5bdd09=_0x38583d[_0x157b25(0x130)],_0xee8735=this['_data']['fadeOutDuration'];this[_0x157b25(0x150)]=_0xee8735/(_0x5bdd09||0x1)*0xff;}else this[_0x157b25(0x150)]=0xff;}}}this['contentsOpacity']=this[_0x157b25(0x150)];},Window_SideChatter[_0x1ad409(0x125)][_0x1ad409(0x153)]=function(){const _0x544b05=_0x1ad409,_0x42d3fe=this['_data']['stage'],_0x517fb6=this[_0x544b05(0xe3)]['x'],_0x5d12af=this[_0x544b05(0x116)]?Math['floor'](-this[_0x544b05(0x10a)]*_0x517fb6):0x0,_0x1fb6a7=this[_0x544b05(0x116)]?0x0:Math[_0x544b05(0xf3)](-this[_0x544b05(0x10a)]*_0x517fb6);;if(_0x42d3fe===_0x544b05(0xe1))this['x']=_0x1fb6a7;else{if(_0x42d3fe==='delay')this['x']=_0x5d12af;else{if(_0x42d3fe===_0x544b05(0xdb)){const _0x3938dd=Game_Screen['SIDE_CHATTER_SETTINGS'][_0x544b05(0x100)],_0x464e2a=this[_0x544b05(0x12c)]['fadeInDuration'];if(this[_0x544b05(0x116)]){const _0x599cb1=_0x464e2a/(_0x3938dd||0x1);this['x']=(_0x5d12af+_0x1fb6a7)*_0x599cb1;}else{const _0x2cbcb4=(_0x3938dd-_0x464e2a)/(_0x3938dd||0x1);this['x']=(_0x5d12af+_0x1fb6a7)*_0x2cbcb4;}}else this['x']=_0x1fb6a7;}}};