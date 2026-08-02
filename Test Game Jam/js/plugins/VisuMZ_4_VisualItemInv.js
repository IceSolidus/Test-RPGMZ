//=============================================================================
// VisuStella MZ - Visual Item Inventory
// VisuMZ_4_VisualItemInv.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualItemInv = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualItemInv = VisuMZ.VisualItemInv || {};
VisuMZ.VisualItemInv.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.08] [VisualItemInv]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Item_Inventory_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the item list displayed in-game to become more visual
 * and show bigger images, either as icons or pictures. The enlarged item,
 * weapon, and armor images will show their item quantities next to them while
 * a tooltip window appears above their selected cell to show the item's name.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Changes the item inventory windows to become more visual.
 * * Enlarged item images can be either icons or picture images.
 * * Alter how large you want the images to appear with the Plugin Parameters.
 * * Add different color backgrounds for different items.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Window Columns and Spacing
 * 
 * It should come off as no surprise that these windows will have their usual
 * column counts changed to adjust for the item images shown. The columns will
 * be based on how many of the item icons can fit inside of the window.
 *
 * ---
 * 
 * Item Quantity Positioning
 * 
 * The item quantity will now be positioned to show in the lower right of any
 * window cell with an enlarged icon. Due to this being a much smaller area
 * than what is usually provided, some plugins may have incredibly squished
 * appearances when it comes to displaying item quantity in some areas.
 * 
 * This needs to be adjusted in those plugins individually.
 * 
 * ---
 * 
 * Items and Equips Core
 * 
 * For the Equip Menu, the remove item entry has been changed to show only the
 * enlarged icon. This is to keep consistency with the rest of the plugin.
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
 * === Picture-Related Notetags ===
 * 
 * ---
 * 
 * <Visual Item Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   item's icon inside the item windows instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of this plugin, too.
 * - The size used for the image will vary based on the icon size settings.
 * 
 * ---
 * 
 * === Background Colors-Related Notetags ===
 * 
 * ---
 *
 * <Visual Item BG Color 1: x>
 * <Visual Item BG Color 2: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the background color(s) for the item to text color 'x'.
 * - Replace 'x' with a number from 0 to 31 to represent a text color.
 *
 * ---
 *
 * <Visual Item BG Color 1: #rrggbb>
 * <Visual Item BG Color 2: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the background color(s) for the item to a hex color.
 * - Use #rrggbb for custom colors.
 * - You can find out what hex codes belong to which color from this website:
 *   https://htmlcolorcodes.com/
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Visual Item Inventory Settings
 * ============================================================================
 *
 * These settings allow you to adjust how the Visual Item Inventory windows
 * appear and which ones they appear in.
 *
 * ---
 *
 * General
 * 
 *   Applied Windows:
 *   - Insert the name of their constructors here to apply them.
 *   - Only works with windows made from Window_ItemList.
 * 
 *   Icon Size:
 *   - The icon size used for the Visual Item windows.
 * 
 *   Icon Smoothing?:
 *   - Do you wish to smooth out the icons or pixelate them?
 *
 * ---
 *
 * Item Quantity Outline
 * 
 *   Outline Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 * 
 *   Outline Size:
 *   - How thick are the outlines for the item quantity?
 *
 * ---
 *
 * Tooltip Window
 * 
 *   Show Tooltip Window?:
 *   - Show the tooltip window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Buffer Width:
 *   - How much to buffer this window's width by?
 * 
 *   Font Size:
 *   - What should this window's font size be?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset this window's X/Y position by?
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.08: January 19, 2026
 * * Compatibility Update!
 * ** When used together with the Battle Grid System, item slots will no longer
 *    be covered by the Battle Grid targeting and usage nodes. Update by Arisu.
 * ** When used together with the More Currencies plugin, no longer display the
 *    extra currency count on item grid. Update by Arisu. 
 * 
 * Version 1.07: May 15, 2025
 * * Compatibility Update!
 * ** Tooltip window now accounts for target window's scaling (ie Frontview
 *    Battle UI). Update made by Arisu.
 * 
 * Version 1.06: June 13, 2024
 * * Bug Fixes!
 * ** Fixed a visual overlapping error. Fix made by Olivia.
 * 
 * Version 1.05: March 14, 2024
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_ItemAmplifySkills! The confirm
 *    icon should now be displayed properly. Update made by Irina.
 * 
 * Version 1.04: July 13, 2023
 * * Compatibility Update!
 * ** Added compatibility with Quest Journal System's newest Quest Label update
 *    in order for the Quest Label to show up in the visual inventory. Update
 *    made by Irina.
 * 
 * Version 1.03: August 25, 2022
 * * Feature Update!
 * ** Updated the boundaries for visual item name display positions to always
 *    fit within the verticality of the game screen. Fix made by Irina.
 * 
 * Version 1.02: July 16, 2021
 * * Bug Fixes!
 * ** Visual glitch fixed that would make item quantity not appear. Fix made
 *    by Arisu.
 * 
 * Version 1.01: February 19, 2021
 * * Feature Update!
 * ** No longer requires VisuStella MZ Items and Equips Core dependency.
 *
 * Version 1.00 Official Release Date: February 26, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param VisualItemInv
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param General
 *
 * @param Constructors:arraystr
 * @text Applied Windows
 * @parent General
 * @type string[]
 * @desc Insert the name of their constructors here to apply them.
 * Only works with windows made from Window_ItemList.
 * @default ["Window_ItemList","Window_EquipItem","Window_ShopSell","Window_EventItem","Window_BattleItem"]
 *
 * @param IconSize:num
 * @text Icon Size
 * @parent General
 * @desc The icon size used for the Visual Item windows.
 * @default 64
 *
 * @param IconSmoothing:eval
 * @text Icon Smoothing?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Do you wish to smooth out the icons or pixelate them?
 * @default false
 * 
 * @param Outline
 * @text Item Quantity Outline
 *
 * @param OutlineColor:num
 * @text Outline Color
 * @parent Outline
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param OutlineSize:num
 * @text Outline Size
 * @parent Outline
 * @desc How thick are the outlines for the item quantity?
 * @default 4
 * 
 * @param Tooltip
 * @text Tooltip Window
 *
 * @param ShowTooltip:eval
 * @text Show Tooltip Window?
 * @parent Tooltip
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the tooltip window?
 * @default true
 *
 * @param TooltipBgType:num
 * @text Background Type
 * @parent Tooltip
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
 * @param TooltipBufferWidth:num
 * @text Buffer Width
 * @parent Tooltip
 * @desc How much to buffer this window's width by?
 * @default 16
 *
 * @param TooltipFontSize:num
 * @text Font Size
 * @parent Tooltip
 * @desc What should this window's font size be?
 * @default 22
 *
 * @param TooltipOffsetX:num
 * @text Offset X
 * @parent Tooltip
 * @desc How much to offset this window's X position by?
 * @default 0
 *
 * @param TooltipOffsetY:num
 * @text Offset Y
 * @parent Tooltip
 * @desc How much to offset this window's Y position by?
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

const _0x5c5eda=_0xc6b1;(function(_0x22b219,_0x727db){const _0x2f0be6=_0xc6b1,_0x14335e=_0x22b219();while(!![]){try{const _0x593308=parseInt(_0x2f0be6(0x1b2))/0x1*(-parseInt(_0x2f0be6(0x1f4))/0x2)+parseInt(_0x2f0be6(0x213))/0x3*(-parseInt(_0x2f0be6(0x191))/0x4)+-parseInt(_0x2f0be6(0x1bd))/0x5*(parseInt(_0x2f0be6(0x1b6))/0x6)+parseInt(_0x2f0be6(0x176))/0x7+parseInt(_0x2f0be6(0x1a7))/0x8+-parseInt(_0x2f0be6(0x1db))/0x9*(parseInt(_0x2f0be6(0x216))/0xa)+parseInt(_0x2f0be6(0x1b4))/0xb;if(_0x593308===_0x727db)break;else _0x14335e['push'](_0x14335e['shift']());}catch(_0x238356){_0x14335e['push'](_0x14335e['shift']());}}}(_0x1d57,0x6a299));var label=_0x5c5eda(0x1e8),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5c5eda(0x172)](function(_0x3443c2){const _0x5c31c7=_0x5c5eda;return _0x3443c2[_0x5c31c7(0x1d2)]&&_0x3443c2[_0x5c31c7(0x17c)][_0x5c31c7(0x1b3)]('['+label+']');})[0x0];VisuMZ[label][_0x5c5eda(0x18b)]=VisuMZ[label][_0x5c5eda(0x18b)]||{},VisuMZ[_0x5c5eda(0x18c)]=function(_0x3637b5,_0xebffdc){const _0x4dd5c5=_0x5c5eda;for(const _0x4a0666 in _0xebffdc){if(_0x4a0666['match'](/(.*):(.*)/i)){const _0x540c6c=String(RegExp['$1']),_0x23f811=String(RegExp['$2'])[_0x4dd5c5(0x1f6)]()[_0x4dd5c5(0x1ba)]();let _0x40ad5a,_0x42212a,_0x56f8d7;switch(_0x23f811){case'NUM':_0x40ad5a=_0xebffdc[_0x4a0666]!==''?Number(_0xebffdc[_0x4a0666]):0x0;break;case'ARRAYNUM':_0x42212a=_0xebffdc[_0x4a0666]!==''?JSON[_0x4dd5c5(0x1aa)](_0xebffdc[_0x4a0666]):[],_0x40ad5a=_0x42212a['map'](_0x55a3c7=>Number(_0x55a3c7));break;case _0x4dd5c5(0x20a):_0x40ad5a=_0xebffdc[_0x4a0666]!==''?eval(_0xebffdc[_0x4a0666]):null;break;case'ARRAYEVAL':_0x42212a=_0xebffdc[_0x4a0666]!==''?JSON[_0x4dd5c5(0x1aa)](_0xebffdc[_0x4a0666]):[],_0x40ad5a=_0x42212a[_0x4dd5c5(0x1af)](_0x22f452=>eval(_0x22f452));break;case _0x4dd5c5(0x21e):_0x40ad5a=_0xebffdc[_0x4a0666]!==''?JSON['parse'](_0xebffdc[_0x4a0666]):'';break;case'ARRAYJSON':_0x42212a=_0xebffdc[_0x4a0666]!==''?JSON[_0x4dd5c5(0x1aa)](_0xebffdc[_0x4a0666]):[],_0x40ad5a=_0x42212a[_0x4dd5c5(0x1af)](_0x102d5f=>JSON[_0x4dd5c5(0x1aa)](_0x102d5f));break;case _0x4dd5c5(0x1be):_0x40ad5a=_0xebffdc[_0x4a0666]!==''?new Function(JSON['parse'](_0xebffdc[_0x4a0666])):new Function(_0x4dd5c5(0x177));break;case _0x4dd5c5(0x1e5):_0x42212a=_0xebffdc[_0x4a0666]!==''?JSON[_0x4dd5c5(0x1aa)](_0xebffdc[_0x4a0666]):[],_0x40ad5a=_0x42212a[_0x4dd5c5(0x1af)](_0x374027=>new Function(JSON['parse'](_0x374027)));break;case'STR':_0x40ad5a=_0xebffdc[_0x4a0666]!==''?String(_0xebffdc[_0x4a0666]):'';break;case _0x4dd5c5(0x1ec):_0x42212a=_0xebffdc[_0x4a0666]!==''?JSON[_0x4dd5c5(0x1aa)](_0xebffdc[_0x4a0666]):[],_0x40ad5a=_0x42212a['map'](_0x27c9d0=>String(_0x27c9d0));break;case'STRUCT':_0x56f8d7=_0xebffdc[_0x4a0666]!==''?JSON[_0x4dd5c5(0x1aa)](_0xebffdc[_0x4a0666]):{},_0x40ad5a=VisuMZ[_0x4dd5c5(0x18c)]({},_0x56f8d7);break;case _0x4dd5c5(0x1dc):_0x42212a=_0xebffdc[_0x4a0666]!==''?JSON[_0x4dd5c5(0x1aa)](_0xebffdc[_0x4a0666]):[],_0x40ad5a=_0x42212a[_0x4dd5c5(0x1af)](_0x36a9e7=>VisuMZ['ConvertParams']({},JSON['parse'](_0x36a9e7)));break;default:continue;}_0x3637b5[_0x540c6c]=_0x40ad5a;}}return _0x3637b5;},(_0x38c387=>{const _0x55473b=_0x5c5eda,_0x2caeae=_0x38c387[_0x55473b(0x1cc)];for(const _0x149d55 of dependencies){if(!Imported[_0x149d55]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x55473b(0x200)](_0x2caeae,_0x149d55)),SceneManager[_0x55473b(0x21d)]();break;}}const _0x52f076=_0x38c387[_0x55473b(0x17c)];if(_0x52f076['match'](/\[Version[ ](.*?)\]/i)){const _0x3dafb5=Number(RegExp['$1']);_0x3dafb5!==VisuMZ[label][_0x55473b(0x169)]&&(alert(_0x55473b(0x199)[_0x55473b(0x200)](_0x2caeae,_0x3dafb5)),SceneManager[_0x55473b(0x21d)]());}if(_0x52f076['match'](/\[Tier[ ](\d+)\]/i)){const _0x29cef9=Number(RegExp['$1']);_0x29cef9<tier?(alert(_0x55473b(0x1fb)[_0x55473b(0x200)](_0x2caeae,_0x29cef9,tier)),SceneManager[_0x55473b(0x21d)]()):tier=Math[_0x55473b(0x17b)](_0x29cef9,tier);}VisuMZ[_0x55473b(0x18c)](VisuMZ[label][_0x55473b(0x18b)],_0x38c387[_0x55473b(0x20d)]);})(pluginData),VisuMZ['VisualItemInv'][_0x5c5eda(0x192)]={'visualPicture':/<(?:VISUAL|VISUAL ITEM) (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i,'bgColorNum1':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]1:[ ](\d+)>/i,'bgColorNum2':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]2:[ ](\d+)>/i,'bgColorHex1':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]1:[ ]#(.*)>/i,'bgColorHex2':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]2:[ ]#(.*)>/i},Window_ItemList[_0x5c5eda(0x210)]=VisuMZ['VisualItemInv'][_0x5c5eda(0x18b)][_0x5c5eda(0x207)]||0x40,Window_ItemList[_0x5c5eda(0x16d)]=VisuMZ[_0x5c5eda(0x1e8)]['Settings'][_0x5c5eda(0x1a6)]||![],Window_ItemList['VISUAL_ITEM_OUTLINE_COLOR']=VisuMZ[_0x5c5eda(0x1e8)]['Settings'][_0x5c5eda(0x215)]||_0x5c5eda(0x1fe),Window_ItemList[_0x5c5eda(0x19f)]=VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x18b)][_0x5c5eda(0x1cb)]||0x0,Window_ItemList[_0x5c5eda(0x1b0)]=VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x18b)][_0x5c5eda(0x20b)]||0x0,Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x211)]=function(){const _0x5d09ac=_0x5c5eda;return Window_ItemList[_0x5d09ac(0x1b0)]['includes'](this[_0x5d09ac(0x1d1)][_0x5d09ac(0x1cc)]);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x186)]=Window_ItemList[_0x5c5eda(0x168)]['canDrawUsableGridNodes'],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x16a)]=function(){const _0x4015fe=_0x5c5eda;if(this[_0x4015fe(0x211)]())return![];return VisuMZ[_0x4015fe(0x1e8)]['Window_ItemList_canDrawUsableGridNodes']['call'](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1a0)]=Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x182)],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x182)]=function(){const _0x1fa750=_0x5c5eda;if(this[_0x1fa750(0x211)]())return![];return VisuMZ[_0x1fa750(0x1e8)][_0x1fa750(0x1a0)][_0x1fa750(0x20c)](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1d7)]=Window_ItemList[_0x5c5eda(0x168)]['drawItemMoreCurrencies'],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1f0)]=function(_0x1d7caa,_0x4b2b7,_0x116203,_0x4eb2d8){const _0x442e95=_0x5c5eda;if(this[_0x442e95(0x211)]())return;VisuMZ[_0x442e95(0x1e8)]['Window_ItemList_drawItemMoreCurrencies'][_0x442e95(0x20c)](this,_0x1d7caa,_0x4b2b7,_0x116203,_0x4eb2d8);},VisuMZ['VisualItemInv'][_0x5c5eda(0x1a4)]=Window_Selectable[_0x5c5eda(0x168)][_0x5c5eda(0x19a)],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x19a)]=function(){const _0x24e660=_0x5c5eda;if(this[_0x24e660(0x211)]()){if(this[_0x24e660(0x1ac)]!==undefined)return this[_0x24e660(0x1ac)];const _0x433e71=Math[_0x24e660(0x218)](Window_ItemList[_0x24e660(0x210)]/this[_0x24e660(0x1e2)]());return this[_0x24e660(0x1ac)]=Math[_0x24e660(0x195)](_0x433e71*this[_0x24e660(0x1e2)]())+0x8,this[_0x24e660(0x1ac)];}else return VisuMZ['VisualItemInv'][_0x24e660(0x1a4)][_0x24e660(0x20c)](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x185)]=Window_ItemList['prototype'][_0x5c5eda(0x219)],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x219)]=function(){const _0x183185=_0x5c5eda;return this[_0x183185(0x211)]()?Math['ceil'](this['innerWidth']/this[_0x183185(0x19a)]()):VisuMZ[_0x183185(0x1e8)][_0x183185(0x185)][_0x183185(0x20c)](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1df)]=Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1e3)],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1e3)]=function(){const _0x5770d4=_0x5c5eda;return this['usesVisualItemInventory']()?0x0:VisuMZ[_0x5770d4(0x1e8)]['Window_ItemList_colSpacing'][_0x5770d4(0x20c)](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1fc)]=Window_ItemList['prototype'][_0x5c5eda(0x179)],Window_ItemList['prototype'][_0x5c5eda(0x179)]=function(){const _0x361192=_0x5c5eda;return this[_0x361192(0x211)]()?0x0:VisuMZ['VisualItemInv'][_0x361192(0x1fc)][_0x361192(0x20c)](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1a5)]=Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1de)],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1de)]=function(_0x125e0c){const _0x22b1c4=_0x5c5eda;this[_0x22b1c4(0x211)]()?this[_0x22b1c4(0x1c5)](_0x125e0c):VisuMZ[_0x22b1c4(0x1e8)][_0x22b1c4(0x1a5)][_0x22b1c4(0x20c)](this,_0x125e0c);},Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1c5)]=function(_0x895ee2){const _0x1415fb=_0x5c5eda,_0x4197ba=this[_0x1415fb(0x205)](_0x895ee2);if(this[_0x1415fb(0x183)]&&_0x4197ba===null)return this[_0x1415fb(0x21f)](_0x895ee2);if(!_0x4197ba)return;const _0x2787e7=VisuMZ[_0x1415fb(0x1e8)][_0x1415fb(0x192)],_0x15b620=_0x4197ba[_0x1415fb(0x17e)],_0x16e72e=this[_0x1415fb(0x1da)](_0x895ee2);if(_0x15b620[_0x1415fb(0x1f7)](_0x2787e7[_0x1415fb(0x187)])||_0x15b620['match'](_0x2787e7['bigPicture'])){const _0x5322a3=String(RegExp['$1'])[_0x1415fb(0x1ba)](),_0x555fb9=ImageManager[_0x1415fb(0x17a)](_0x5322a3);_0x555fb9[_0x1415fb(0x1eb)](this['drawBigItemPicture']['bind'](this,_0x4197ba,_0x555fb9,_0x16e72e));}else this[_0x1415fb(0x175)](this['isEnabled'](_0x4197ba)),this[_0x1415fb(0x1e6)](_0x4197ba,_0x16e72e),this['drawItemNumber'](_0x4197ba,_0x16e72e['x'],_0x16e72e['y']+_0x16e72e['height']-this[_0x1415fb(0x1e2)](),_0x16e72e[_0x1415fb(0x1e7)]),this['resetFontSettings'](),this[_0x1415fb(0x175)](!![]);this[_0x1415fb(0x1ca)](_0x895ee2),this[_0x1415fb(0x167)](_0x895ee2);},Window_ItemList[_0x5c5eda(0x168)]['drawBigItemPicture']=function(_0x54c949,_0x2ab90a,_0x47b021){const _0x671b71=_0x5c5eda;this[_0x671b71(0x175)](this[_0x671b71(0x1d4)](_0x54c949));let _0x51b287=_0x47b021['x']+0x2,_0xfa8917=_0x47b021['y']+0x2,_0x1049ef=_0x47b021[_0x671b71(0x1e7)]-0x4,_0x3368cf=_0x47b021[_0x671b71(0x202)]-0x4,_0x498eaf=Math[_0x671b71(0x170)](_0x1049ef,_0x3368cf);const _0x2eeece=_0x498eaf/_0x2ab90a[_0x671b71(0x1e7)],_0x3206dd=_0x498eaf/_0x2ab90a[_0x671b71(0x202)],_0x4bac31=Math[_0x671b71(0x170)](_0x2eeece,_0x3206dd,0x1);let _0x15a47c=Math['round'](_0x2ab90a[_0x671b71(0x1e7)]*_0x4bac31),_0x170d45=Math[_0x671b71(0x195)](_0x2ab90a[_0x671b71(0x202)]*_0x4bac31);_0x51b287+=Math[_0x671b71(0x195)]((_0x1049ef-_0x15a47c)/0x2),_0xfa8917+=Math[_0x671b71(0x195)]((_0x3368cf-_0x170d45)/0x2);const _0x14bc39=_0x2ab90a['width'],_0x3c0938=_0x2ab90a['height'],_0x59fd62=this[_0x671b71(0x166)][_0x671b71(0x18e)][_0x671b71(0x1f2)];this[_0x671b71(0x166)][_0x671b71(0x18e)][_0x671b71(0x1f2)]=!![],this['contents'][_0x671b71(0x1c0)](_0x2ab90a,0x0,0x0,_0x14bc39,_0x3c0938,_0x51b287,_0xfa8917,_0x15a47c,_0x170d45),this[_0x671b71(0x166)]['_context']['imageSmoothingEnabled']=_0x59fd62,this[_0x671b71(0x19d)](_0x54c949,_0x47b021['x'],_0x47b021['y']+_0x47b021[_0x671b71(0x202)]-this[_0x671b71(0x1e2)](),_0x47b021[_0x671b71(0x1e7)]),this[_0x671b71(0x197)](),this['changePaintOpacity'](!![]);},Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1e6)]=function(_0x2762bb,_0x22938b){const _0x49f3b8=_0x5c5eda,_0x41b97e=_0x2762bb['iconIndex'];this[_0x49f3b8(0x223)](_0x41b97e,_0x22938b);},Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x223)]=function(_0x45af3b,_0x5949c7){const _0x17bd50=_0x5c5eda;let _0x38821f=_0x5949c7['x'],_0x1158ea=_0x5949c7['y'],_0x4f8b71=Window_ItemList[_0x17bd50(0x210)];_0x38821f+=Math[_0x17bd50(0x195)]((_0x5949c7[_0x17bd50(0x1e7)]-_0x4f8b71)/0x2),_0x1158ea+=Math[_0x17bd50(0x195)]((_0x5949c7[_0x17bd50(0x202)]-_0x4f8b71)/0x2);const _0x177742=ImageManager['loadSystem'](_0x17bd50(0x1ab)),_0x33a043=ImageManager[_0x17bd50(0x1a3)],_0x1a6300=ImageManager['iconHeight'],_0x5d9573=_0x45af3b%0x10*_0x33a043,_0x59d1ee=Math[_0x17bd50(0x1d5)](_0x45af3b/0x10)*_0x1a6300;this['contents'][_0x17bd50(0x18e)][_0x17bd50(0x1f2)]=Window_ItemList[_0x17bd50(0x16d)],this[_0x17bd50(0x166)][_0x17bd50(0x1c0)](_0x177742,_0x5d9573,_0x59d1ee,_0x33a043,_0x1a6300,_0x38821f,_0x1158ea,_0x4f8b71,_0x4f8b71),this[_0x17bd50(0x166)][_0x17bd50(0x18e)][_0x17bd50(0x1f2)]=!![];},VisuMZ['VisualItemInv']['Window_ItemList_drawItemNumber']=Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x19d)],Window_ItemList[_0x5c5eda(0x168)]['drawItemNumber']=function(_0x25a809,_0x5756e0,_0x3f9534,_0x3aa826){const _0x259c09=_0x5c5eda;this[_0x259c09(0x211)]()?(this[_0x259c09(0x18d)](),VisuMZ[_0x259c09(0x1e8)][_0x259c09(0x1d0)][_0x259c09(0x20c)](this,_0x25a809,_0x5756e0,_0x3f9534,_0x3aa826),this['resetFontSettings']()):VisuMZ[_0x259c09(0x1e8)][_0x259c09(0x1d0)][_0x259c09(0x20c)](this,_0x25a809,_0x5756e0,_0x3f9534,_0x3aa826);},Window_Base[_0x5c5eda(0x168)]['setupVisualItemInvFontSettings']=function(){const _0x26a178=_0x5c5eda;this[_0x26a178(0x197)](),this[_0x26a178(0x166)][_0x26a178(0x1ae)]=Window_ItemList[_0x26a178(0x1f5)],this[_0x26a178(0x166)]['outlineWidth']=Window_ItemList[_0x26a178(0x19f)];},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x184)]=Window_ItemList[_0x5c5eda(0x168)]['initialize'],Window_ItemList['prototype'][_0x5c5eda(0x174)]=function(_0x410997){const _0x4e562a=_0x5c5eda;VisuMZ[_0x4e562a(0x1e8)][_0x4e562a(0x184)]['call'](this,_0x410997),this['createVisualItemInventoryTooltipWindow']();},Window_ItemList['prototype'][_0x5c5eda(0x203)]=function(){const _0x2a1b93=_0x5c5eda;if(!this[_0x2a1b93(0x211)]())return;if(!VisuMZ[_0x2a1b93(0x1e8)][_0x2a1b93(0x18b)][_0x2a1b93(0x1dd)])return;this['_visualItemInventoryTooltipWindow']=new Window_VisualItemTooltip(this),SceneManager[_0x2a1b93(0x173)]['addChild'](this['_visualItemInventoryTooltipWindow']);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1e0)]=Window_ItemList[_0x5c5eda(0x168)]['callUpdateHelp'],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1b7)]=function(){const _0x1b6d8b=_0x5c5eda;VisuMZ[_0x1b6d8b(0x1e8)][_0x1b6d8b(0x1e0)]['call'](this),this['_visualItemInventoryTooltipWindow']&&(this['_visualItemInventoryTooltipWindow'][_0x1b6d8b(0x190)](this[_0x1b6d8b(0x1c4)]()),this[_0x1b6d8b(0x183)]&&this['_visualItemInventoryTooltipWindow'][_0x1b6d8b(0x181)]());},VisuMZ['VisualItemInv']['Window_ItemList_drawItemBackground']=Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x20f)],Window_ItemList['prototype']['drawItemBackground']=function(_0x1b1c26){const _0x52666f=_0x5c5eda;this['usesVisualItemInventory']()?this[_0x52666f(0x221)](_0x1b1c26):VisuMZ[_0x52666f(0x1e8)][_0x52666f(0x1e9)][_0x52666f(0x20c)](this,_0x1b1c26);const _0x53df23=this[_0x52666f(0x1a9)](_0x1b1c26);this[_0x52666f(0x1a1)](_0x53df23);},Window_ItemList['prototype'][_0x5c5eda(0x221)]=function(_0x1709e8){const _0x3f6e4b=_0x5c5eda,_0x548669=this[_0x3f6e4b(0x205)](_0x1709e8);if(!_0x548669){VisuMZ[_0x3f6e4b(0x1e8)][_0x3f6e4b(0x1e9)][_0x3f6e4b(0x20c)](this,_0x1709e8);return;}const _0x527a32=VisuMZ[_0x3f6e4b(0x1e8)][_0x3f6e4b(0x192)],_0x2eb128=_0x548669[_0x3f6e4b(0x17e)];let _0x5c9abd=ColorManager['itemBackColor1'](),_0x41e729=ColorManager[_0x3f6e4b(0x204)]();_0x2eb128['match'](_0x527a32[_0x3f6e4b(0x19b)])&&(_0x5c9abd=ColorManager[_0x3f6e4b(0x201)](Number(RegExp['$1'])));_0x2eb128['match'](_0x527a32['bgColorNum2'])&&(_0x41e729=ColorManager[_0x3f6e4b(0x201)](Number(RegExp['$1'])));_0x2eb128['match'](_0x527a32[_0x3f6e4b(0x1fd)])&&(_0x5c9abd='#'+String(RegExp['$1']));_0x2eb128[_0x3f6e4b(0x1f7)](_0x527a32[_0x3f6e4b(0x1cf)])&&(_0x41e729='#'+String(RegExp['$1']));const _0x55b04d=this[_0x3f6e4b(0x1a9)](_0x1709e8),_0x1ce425=_0x55b04d['x'],_0x5989fd=_0x55b04d['y'],_0x4c30dc=_0x55b04d[_0x3f6e4b(0x1e7)],_0x25747a=_0x55b04d[_0x3f6e4b(0x202)];this['contentsBack'][_0x3f6e4b(0x16f)]=0xff,this[_0x3f6e4b(0x1d8)][_0x3f6e4b(0x1c9)](_0x1ce425,_0x5989fd,_0x4c30dc,_0x25747a,_0x5c9abd,_0x41e729,!![]),this['contentsBack']['strokeRect'](_0x1ce425,_0x5989fd,_0x4c30dc,_0x25747a,_0x5c9abd);},VisuMZ[_0x5c5eda(0x1e8)]['ConvertHexToRgba']=function(_0x3b9fc4){const _0x8bdc4=_0x5c5eda;_0x3b9fc4=_0x3b9fc4['replace']('#','');_0x3b9fc4[_0x8bdc4(0x1ff)]===0x3&&(_0x3b9fc4=_0x3b9fc4[0x0]+_0x3b9fc4[0x0]+_0x3b9fc4[0x1]+_0x3b9fc4[0x1]+_0x3b9fc4[0x2]+_0x3b9fc4[0x2]);var _0x25acb6=parseInt(_0x3b9fc4[_0x8bdc4(0x1f3)](0x0,0x2),0x10),_0x48cf1b=parseInt(_0x3b9fc4[_0x8bdc4(0x1f3)](0x2,0x4),0x10),_0x3470f3=parseInt(_0x3b9fc4[_0x8bdc4(0x1f3)](0x4,0x6),0x10);return _0x8bdc4(0x1ee)+_0x25acb6+','+_0x48cf1b+','+_0x3470f3+','+_0x8bdc4(0x1c6)+')';},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x178)]=Window_Base[_0x5c5eda(0x168)][_0x5c5eda(0x19d)],Window_Base[_0x5c5eda(0x168)][_0x5c5eda(0x19d)]=function(_0x15e695,_0x5e5b65,_0x536c9d,_0x4b4400){const _0x12c232=_0x5c5eda;this[_0x12c232(0x211)]&&this[_0x12c232(0x211)]()?this[_0x12c232(0x1c7)](_0x15e695,_0x5e5b65,_0x536c9d,_0x4b4400):VisuMZ[_0x12c232(0x1e8)]['Window_Base_drawItemNumber'][_0x12c232(0x20c)](this,_0x15e695,_0x5e5b65,_0x536c9d,_0x4b4400);},Window_Base[_0x5c5eda(0x168)][_0x5c5eda(0x1c7)]=function(_0x2c3e19,_0xd66976,_0x3194a2,_0x49089f){const _0x3dc2be=_0x5c5eda;if(this[_0x3dc2be(0x21a)](_0x2c3e19)){this[_0x3dc2be(0x18d)]();const _0x4c71d9=VisuMZ[_0x3dc2be(0x1b8)][_0x3dc2be(0x18b)][_0x3dc2be(0x21c)],_0x540ec8=_0x4c71d9['ItemQuantityFmt'],_0x5f0572=_0x540ec8[_0x3dc2be(0x200)]($gameParty[_0x3dc2be(0x1f8)](_0x2c3e19));this[_0x3dc2be(0x166)][_0x3dc2be(0x18a)]=_0x4c71d9[_0x3dc2be(0x1f1)],this['drawText'](_0x5f0572,_0xd66976,_0x3194a2,_0x49089f,_0x3dc2be(0x193)),this[_0x3dc2be(0x197)]();}},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x188)]=Window_ItemList['prototype'][_0x5c5eda(0x1ca)],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1ca)]=function(_0xeeb3c6){const _0x49ffdb=_0x5c5eda;this[_0x49ffdb(0x211)]()?this['placeItemNewLabelVisualItemInventory'](_0xeeb3c6):VisuMZ[_0x49ffdb(0x1e8)][_0x49ffdb(0x188)]['call'](this,_0xeeb3c6);},Window_ItemList[_0x5c5eda(0x168)]['placeItemNewLabelVisualItemInventory']=function(_0x173432){const _0x2004ae=_0x5c5eda;if(!Imported[_0x2004ae(0x1bb)])return;const _0x25b817=this['itemAt'](_0x173432);if(!_0x25b817||!this['isShowNew']())return;if(!$gameParty[_0x2004ae(0x16c)](_0x25b817))return;const _0x88dcaa=this['itemRectWithPadding'](_0x173432),_0x5cea6c=_0x88dcaa['x'],_0x2deee1=_0x88dcaa['y'],_0x3a6aeb=VisuMZ[_0x2004ae(0x1b8)]['Settings'][_0x2004ae(0x1d3)][_0x2004ae(0x18f)],_0x482ff9=VisuMZ[_0x2004ae(0x1b8)][_0x2004ae(0x18b)]['New'][_0x2004ae(0x189)];this[_0x2004ae(0x1b5)](_0x25b817,_0x5cea6c+_0x3a6aeb,_0x2deee1+_0x482ff9);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1c3)]=Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x167)],Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x167)]=function(_0x33ee19){const _0x516a79=_0x5c5eda;this['usesVisualItemInventory']()?this[_0x516a79(0x1f9)](_0x33ee19):VisuMZ[_0x516a79(0x1e8)][_0x516a79(0x1c3)][_0x516a79(0x20c)](this,_0x33ee19);},Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x1f9)]=function(_0x1c52a4){const _0xaf7e4e=_0x5c5eda;if(!Imported[_0xaf7e4e(0x19e)])return;const _0x4a970c=this[_0xaf7e4e(0x205)](_0x1c52a4);if(!_0x4a970c||!this['isShowQuest']())return;if(!$gameParty['isQuestItem'](_0x4a970c))return;const _0xa5090a=this[_0xaf7e4e(0x1da)](_0x1c52a4),_0x54235e=_0xa5090a['x'],_0x1618fe=_0xa5090a['y'],_0x2a2867=VisuMZ[_0xaf7e4e(0x1cd)][_0xaf7e4e(0x18b)]['Label'][_0xaf7e4e(0x18f)],_0x3cd51d=VisuMZ[_0xaf7e4e(0x1cd)]['Settings'][_0xaf7e4e(0x206)][_0xaf7e4e(0x189)];this['placeQuestLabel'](_0x4a970c,_0x54235e+_0x2a2867,_0x1618fe+_0x3cd51d);},Window_ItemList[_0x5c5eda(0x168)][_0x5c5eda(0x21f)]=function(_0x4420e3){const _0x1973b9=_0x5c5eda,_0x51bf3a=this[_0x1973b9(0x1da)](_0x4420e3);this[_0x1973b9(0x175)](this[_0x1973b9(0x1d4)](null)),this[_0x1973b9(0x197)]();const _0x2e89b3=Window_BattleItem[_0x1973b9(0x1a8)][_0x1973b9(0x1c2)];this['drawBigIcon'](_0x2e89b3,_0x51bf3a);},VisuMZ[_0x5c5eda(0x1e8)]['Window_EquipItem_maxCols']=Window_EquipItem['prototype']['maxCols'],Window_EquipItem[_0x5c5eda(0x168)][_0x5c5eda(0x219)]=function(){const _0x388efc=_0x5c5eda;return this[_0x388efc(0x211)]()?Window_ItemList[_0x388efc(0x168)][_0x388efc(0x219)]['call'](this):VisuMZ[_0x388efc(0x1e8)]['Window_EquipItem_maxCols'][_0x388efc(0x20c)](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x1c8)]=Window_EquipItem['prototype'][_0x5c5eda(0x1e3)],Window_EquipItem[_0x5c5eda(0x168)]['colSpacing']=function(){const _0x56afe5=_0x5c5eda;return this[_0x56afe5(0x211)]()?Window_ItemList[_0x56afe5(0x168)][_0x56afe5(0x1e3)][_0x56afe5(0x20c)](this):VisuMZ[_0x56afe5(0x1e8)][_0x56afe5(0x1c8)]['call'](this);},Window_EquipItem[_0x5c5eda(0x168)]['drawRemoveItem']=function(_0x170ae6){const _0x304f8e=_0x5c5eda,_0x54a97d=this['itemRectWithPadding'](_0x170ae6),_0xa33e01=VisuMZ[_0x304f8e(0x1b8)][_0x304f8e(0x18b)]['EquipScene'],_0x8f0c5d=_0xa33e01[_0x304f8e(0x21b)];this[_0x304f8e(0x175)](![]),this[_0x304f8e(0x223)](_0x8f0c5d,_0x54a97d),this[_0x304f8e(0x175)](!![]);},VisuMZ['VisualItemInv'][_0x5c5eda(0x1e1)]=Window_ShopSell[_0x5c5eda(0x168)][_0x5c5eda(0x219)],Window_ShopSell[_0x5c5eda(0x168)][_0x5c5eda(0x219)]=function(){const _0x40af9e=_0x5c5eda;return this[_0x40af9e(0x211)]()?Window_ItemList[_0x40af9e(0x168)]['maxCols'][_0x40af9e(0x20c)](this):VisuMZ['VisualItemInv']['Window_ShopSell_maxCols'][_0x40af9e(0x20c)](this);},VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x217)]=Window_ShopSell['prototype']['colSpacing'],Window_ShopSell[_0x5c5eda(0x168)]['colSpacing']=function(){const _0x204418=_0x5c5eda;return this[_0x204418(0x211)]()?Window_ItemList[_0x204418(0x168)][_0x204418(0x1e3)][_0x204418(0x20c)](this):VisuMZ['VisualItemInv']['Window_ShopSell_colSpacing'][_0x204418(0x20c)](this);};function _0xc6b1(_0x2abe04,_0x383abd){const _0x1d57b1=_0x1d57();return _0xc6b1=function(_0xc6b1da,_0x41e075){_0xc6b1da=_0xc6b1da-0x166;let _0x566952=_0x1d57b1[_0xc6b1da];return _0x566952;},_0xc6b1(_0x2abe04,_0x383abd);}function Window_VisualItemTooltip(){const _0x2adca1=_0x5c5eda;this[_0x2adca1(0x174)](...arguments);}Window_VisualItemTooltip[_0x5c5eda(0x168)]=Object[_0x5c5eda(0x1e4)](Window_Base[_0x5c5eda(0x168)]),Window_VisualItemTooltip[_0x5c5eda(0x168)][_0x5c5eda(0x1d1)]=Window_VisualItemTooltip,Window_VisualItemTooltip[_0x5c5eda(0x16e)]=VisuMZ['VisualItemInv'][_0x5c5eda(0x18b)]['TooltipBgType'],Window_VisualItemTooltip['BUFFER_WIDTH']=VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x18b)][_0x5c5eda(0x20e)],Window_VisualItemTooltip[_0x5c5eda(0x17f)]=VisuMZ[_0x5c5eda(0x1e8)][_0x5c5eda(0x18b)][_0x5c5eda(0x171)],Window_VisualItemTooltip['OFFSET_X']=VisuMZ['VisualItemInv'][_0x5c5eda(0x18b)]['TooltipOffsetX'],Window_VisualItemTooltip[_0x5c5eda(0x220)]=VisuMZ[_0x5c5eda(0x1e8)]['Settings'][_0x5c5eda(0x19c)],Window_VisualItemTooltip['prototype']['initialize']=function(_0x1b0b5d){const _0x32d284=_0x5c5eda;this[_0x32d284(0x1ad)]=_0x1b0b5d;const _0x4ded63=new Rectangle(0x0,0x0,0x0,this[_0x32d284(0x1e2)]());Window_Base[_0x32d284(0x168)][_0x32d284(0x174)][_0x32d284(0x20c)](this,_0x4ded63),this['visible']=![],this['backOpacity']=0xff,this[_0x32d284(0x222)]=0xff,this[_0x32d284(0x1ed)]=null;},Window_VisualItemTooltip['prototype'][_0x5c5eda(0x17d)]=function(){this['padding']=0x0;},Window_VisualItemTooltip[_0x5c5eda(0x168)][_0x5c5eda(0x190)]=function(_0x27a605){const _0x3ef54b=_0x5c5eda;if(this[_0x3ef54b(0x1ed)]===_0x27a605&&!this[_0x3ef54b(0x183)])return;this[_0x3ef54b(0x1ed)]=_0x27a605,this[_0x3ef54b(0x181)]();},Window_VisualItemTooltip[_0x5c5eda(0x168)][_0x5c5eda(0x209)]=function(){const _0xc9c97f=_0x5c5eda;if(this[_0xc9c97f(0x1ad)]&&this[_0xc9c97f(0x1ad)][_0xc9c97f(0x183)]){if(!this[_0xc9c97f(0x1ed)])return!![];}return!!this[_0xc9c97f(0x1ed)];},Window_VisualItemTooltip[_0x5c5eda(0x168)][_0x5c5eda(0x198)]=function(){const _0x5b1dfd=_0x5c5eda;if(this[_0x5b1dfd(0x1ad)]&&this['_parentWindow'][_0x5b1dfd(0x183)]&&!this['_item'])return TextManager['ITEM_AMPLIFY_CONFIRM'];return this[_0x5b1dfd(0x1ed)]?this['_item'][_0x5b1dfd(0x1cc)]:'';},Window_VisualItemTooltip[_0x5c5eda(0x168)][_0x5c5eda(0x181)]=function(){const _0x40610c=_0x5c5eda;this[_0x40610c(0x166)]['clear']();if(!this[_0x40610c(0x209)]())return;this['resetFontSettings'](),this[_0x40610c(0x166)][_0x40610c(0x18a)]=Window_VisualItemTooltip[_0x40610c(0x17f)];const _0x16d3d1=this[_0x40610c(0x198)](),_0x313c54=this[_0x40610c(0x1c1)](_0x16d3d1)+Window_VisualItemTooltip[_0x40610c(0x194)];this['width']=Math[_0x40610c(0x218)](_0x313c54),this[_0x40610c(0x208)](),this['contents'][_0x40610c(0x18a)]=Window_VisualItemTooltip['FONT_SIZE'];if(Imported[_0x40610c(0x1bb)]){const _0x186000=ColorManager[_0x40610c(0x1ce)](this['_item']);this[_0x40610c(0x1d6)](_0x186000);}this[_0x40610c(0x214)](_0x16d3d1,0x0,0x0,this[_0x40610c(0x180)],_0x40610c(0x1b9)),this[_0x40610c(0x1ea)](),this['setBackgroundType'](Window_VisualItemTooltip['BG_TYPE']);},Window_VisualItemTooltip[_0x5c5eda(0x168)][_0x5c5eda(0x212)]=function(){const _0x5beb65=_0x5c5eda;Window_Base['prototype']['update']['call'](this),this[_0x5beb65(0x1bf)](),this['updatePosition']();},Window_VisualItemTooltip[_0x5c5eda(0x168)][_0x5c5eda(0x1bf)]=function(){const _0x569a8a=_0x5c5eda,_0x1396fd=this[_0x569a8a(0x1bc)];this[_0x569a8a(0x1bc)]=this[_0x569a8a(0x1ed)]&&this[_0x569a8a(0x1ad)][_0x569a8a(0x1fa)]&&this[_0x569a8a(0x1ad)][_0x569a8a(0x1b1)](),this['_parentWindow']&&this['_parentWindow'][_0x569a8a(0x183)]&&!this[_0x569a8a(0x1ed)]&&(this[_0x569a8a(0x1bc)]=!![]),_0x1396fd!==this[_0x569a8a(0x1bc)]&&SceneManager[_0x569a8a(0x173)]['addChild'](this);},Window_VisualItemTooltip[_0x5c5eda(0x168)]['updatePosition']=function(){const _0x3f2727=_0x5c5eda;if(!this[_0x3f2727(0x1bc)])return;const _0x171ef3=SceneManager['_scene']['_windowLayer'],_0x2a1edd=this[_0x3f2727(0x1ad)];let _0x1dd1d2=_0x2a1edd['x']+_0x171ef3['x'],_0xb6d52f=_0x2a1edd['y']+_0x171ef3['y'];const _0x501381=_0x2a1edd[_0x3f2727(0x196)],_0x58a478=_0x2a1edd[_0x3f2727(0x1d9)],_0x5eb21b=_0x2a1edd[_0x3f2727(0x16b)]['x'],_0x5bd27a=_0x2a1edd[_0x3f2727(0x16b)]['y'];_0x1dd1d2+=_0x501381['x']*_0x5eb21b+_0x501381[_0x3f2727(0x1e7)]*_0x5eb21b/0x2-this['width']/0x2+_0x58a478['x']*_0x5eb21b,_0xb6d52f+=_0x501381['y']*_0x5bd27a-this['height']+_0x58a478['y']*_0x5bd27a;let _0x88fcf1=_0x2a1edd['y']+_0x171ef3['y']-this[_0x3f2727(0x202)]+_0x2a1edd[_0x3f2727(0x1a2)]*_0x5bd27a;_0x88fcf1+=Window_VisualItemTooltip[_0x3f2727(0x220)],_0x1dd1d2+=Window_VisualItemTooltip[_0x3f2727(0x1ef)],_0xb6d52f+=Window_VisualItemTooltip[_0x3f2727(0x220)],this['x']=Math['round'](_0x1dd1d2)['clamp'](0x0,Graphics[_0x3f2727(0x1e7)]-this[_0x3f2727(0x1e7)]),this['y']=Math['round'](_0xb6d52f)['clamp'](0x0,Graphics[_0x3f2727(0x202)]-this[_0x3f2727(0x202)]);};function _0x1d57(){const _0x579233=['lineHeight','colSpacing','create','ARRAYFUNC','drawBigItemIcon','width','VisualItemInv','Window_ItemList_drawItemBackground','resetTextColor','addLoadListener','ARRAYSTR','_item','rgba(','OFFSET_X','drawItemMoreCurrencies','ItemQuantityFontSize','imageSmoothingEnabled','substring','862058IoEJBm','VISUAL_ITEM_OUTLINE_COLOR','toUpperCase','match','numItems','placeItemQuestLabelVisualItemInventory','active','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Window_ItemList_rowSpacing','bgColorHex1','rgba(0,\x200,\x200,\x201.0)','length','format','textColor','height','createVisualItemInventoryTooltipWindow','itemBackColor2','itemAt','Label','IconSize','createContents','refreshReturnCheck','EVAL','Constructors','call','parameters','TooltipBufferWidth','drawItemBackground','VISUAL_ITEM_ICON_SIZE','usesVisualItemInventory','update','834135kkhskw','drawText','OutlineColor','8305410oliexp','Window_ShopSell_colSpacing','ceil','maxCols','isDrawItemNumber','RemoveEquipIcon','ItemScene','exit','JSON','drawItemAmplifyConfirm','OFFSET_Y','drawItemBackgroundVisualItemInventory','opacity','drawBigIcon','contents','placeItemQuestLabel','prototype','version','canDrawUsableGridNodes','scale','isNewItem','VISUAL_ITEM_ICON_SMOOTHING','BG_TYPE','paintOpacity','min','TooltipFontSize','filter','_scene','initialize','changePaintOpacity','5357317fCfcOB','return\x200','Window_Base_drawItemNumber','rowSpacing','loadPicture','max','description','updatePadding','note','FONT_SIZE','innerWidth','refresh','canDrawTargetGridNodes','_amplifySkill','Window_ItemList_initialize','Window_ItemList_maxCols','Window_ItemList_canDrawUsableGridNodes','visualPicture','Window_ItemList_placeItemNewLabel','OffsetY','fontSize','Settings','ConvertParams','setupVisualItemInvFontSettings','_context','OffsetX','setItem','12zRDEBD','RegExp','right','BUFFER_WIDTH','round','_cursorRect','resetFontSettings','getItemName','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','itemHeight','bgColorNum1','TooltipOffsetY','drawItemNumber','VisuMZ_2_QuestSystem','VISUAL_ITEM_OUTLINE_SIZE','Window_ItemList_canDrawTargetGridNodes','drawBackgroundRect','padding','iconWidth','Window_Selectable_itemHeight','Window_ItemList_drawItem','IconSmoothing','4620832qqmwJL','ITEM_AMPLIFY_SETTINGS','itemRect','parse','IconSet','_visualItemHeight','_parentWindow','outlineColor','map','VISUAL_ITEM_CONSTRUCTORS','isOpen','1oDvIvd','includes','21225116TfKIZR','placeNewLabel','30NdGDuA','callUpdateHelp','ItemsEquipsCore','center','trim','VisuMZ_1_ItemsEquipsCore','visible','741945mTIgpB','FUNC','updateVisibility','blt','textWidth','confirmIcon','Window_ItemList_placeItemQuestLabel','item','drawItemVisualItemInventory','0.5','drawItemNumberVisualItemInventory','Window_EquipItem_colSpacing','gradientFillRect','placeItemNewLabel','OutlineSize','name','QuestSystem','getItemColor','bgColorHex2','Window_ItemList_drawItemNumber','constructor','status','New','isEnabled','floor','changeTextColor','Window_ItemList_drawItemMoreCurrencies','contentsBack','_clientArea','itemRectWithPadding','9nUGPFZ','ARRAYSTRUCT','ShowTooltip','drawItem','Window_ItemList_colSpacing','Window_ItemList_callUpdateHelp','Window_ShopSell_maxCols'];_0x1d57=function(){return _0x579233;};return _0x1d57();}