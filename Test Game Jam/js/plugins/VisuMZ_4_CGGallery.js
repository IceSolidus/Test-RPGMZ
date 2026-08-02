//=============================================================================
// VisuStella MZ - CG Gallery
// VisuMZ_4_CGGallery.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_CGGallery = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CGGallery = VisuMZ.CGGallery || {};
VisuMZ.CGGallery.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.03] [CGGallery]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/CG_Gallery_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Does your game have a lot of pretty art? Especially pretty art that your
 * players would love to view again on their own? This plugin provides a new
 * scene called a CG Gallery for players to view art that they have encountered
 * on their game playthroughs. The CG Gallery allows you to separate art into
 * various categories where the player can view them individually, zooming in
 * and out and moving all about for that perfect angle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Automatically unlock art listings for the CG Gallery through Show Picture
 *   event commands or unlock them manually through Plugin Commands.
 * * The Plugin Parameters allow you the ability to add categories, listings,
 *   and adjust various aspects of the CG Gallery.
 * * When art listings are unlocked, they will be visible across all saves and
 *   can be accessible through the title scene even.
 * * Art listings can be paired with text descriptions to explain what the art
 *   piece is all about and/or even provide credit to the artist that drew it.
 * * Art listings can have variants so that you can bundle up similar art
 *   pieces together without cluttering the entire CG Gallery.
 * * When viewing art listings, extra features are added to allow players to
 *   zoom in, zoom out, toggle the borders, move the picture about, and change
 *   between art variations.
 * * Completion Rates and Variant Counts are displayed in-game to let the
 *   player know about the progress made in completing the CG Gallery.
 * * Some art listings can be automatically unlocked by default as a form of
 *   bonus art, similar to what you see in many commercial Visual Novels.
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
 * CG Gallery Storage
 * 
 * The CG Gallery unlock progress is stored in the configuration file. This is
 * primarily done so that the progress is readily accessible across all saves
 * and can be updated across all saves.
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
 * === CG Plugin Commands ===
 * 
 * ---
 *
 * CG: Unlock Image(s)
 * - Unlocks specific image(s) for the CG Gallery.
 *
 *   Filename(s):
 *   - List of filenames for CG's that will become unlocked.
 *
 *   Argument:
 *   - Description
 *
 *   Argument:
 *   - Description
 *
 *   Argument:
 *   - Description
 *
 *   Argument:
 *   - Description
 *
 * ---
 *
 * CG: Unlock All Images (Debug)
 * - Unlocks all image(s) for the CG Gallery.
 * - Only for playtesting. Resets upon game closing.
 *
 * ---
 *
 * CG: Unlock All Images (Permanent)
 * - Unlocks all image(s) for the CG Gallery.
 * - This is a permanent unlock.
 *
 * ---
 * 
 * CG: Reset All Unlocks (Permanent)
 * - Reset all unlocks for the CG Gallery.
 * - This is a permanent reset. Use SPARRINGLY!
 * 
 * ---
 * 
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open CG Gallery
 * - Opens CG Gallery.
 * - CANNOT be used inside of battle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable CG Gallery in Menu?
 * - Enables/disables CG Gallery menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables CG Gallery menu inside the main menu.
 *
 * ---
 *
 * System: Show CG Gallery in Menu?
 * - Shows/hides CG Gallery menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides CG Gallery menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Categories
 * ============================================================================
 *
 * List of categories that are used for this plugin. The order these categories
 * appear in the settings will be the order they're displayed in the gallery.
 *
 * ---
 *
 * Settings
 * 
 *   ID Key:
 *   - This category's identification key.
 *   - Categories require unique keys for the plugin to differentiate them.
 * 
 *   Text:
 *   - This category's command text.
 * 
 *   Icon:
 *   - Icon used for this category.
 *   - Use 0 for no icon.
 * 
 *   Help Description:
 *   - A description of the CG Gallery listing.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Listing Settings
 * ============================================================================
 *
 * A listing of all the pictures found in the CG Gallery. The order these
 * images appear in the settings will be the order they're displayed in the
 * CG Gallery.
 *
 * ---
 *
 * Settings
 * 
 *   Filename:
 *   - Filename used for the CG Gallery listing.
 *   - This will be used as the CG Gallery thumbnail, too.
 * 
 *     Variations:
 *     - Variations of the CG Gallery listing.
 * 
 *   Category:
 *   - The category this image is listed under.
 *   - If unlisted, the image will be listed under "Unlisted".
 * 
 *   Help Description:
 *   - A description of the CG Gallery listing.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Unlocks Settings
 * ============================================================================
 *
 * List of filenames for CG's that are already unlocked and viewable.
 *
 * ---
 * 
 * Settings
 * 
 *   Filename: 
 *   - Filename used for the default unlocked art listing.
 *   - Make sure the art listing is found inside Image Listings.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: System Settings
 * ============================================================================
 *
 * System settings for CG Gallery.
 *
 * ---
 *
 * Auto-Unlocks
 * 
 *   Show Picture?:
 *   - Auto-unlock listings for the CG Gallery when using "Show Picture"
 *     event commands?
 * 
 *   Variations?:
 *   - Auto-unlock variations for listings for the CG Gallery?
 * 
 * ---
 * 
 * Scene_CG_Gallery
 * 
 *   Move Distance:
 *   - How many pixels should pictures move per frame?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Main Menu settings for CG Gallery.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'CG Gallery' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'CG Gallery' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'CG Gallery' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_CG_Gallery.
 *
 * ---
 *
 * Background Settings
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
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Sound settings for the CG Gallery.
 *
 * ---
 *
 * Select Image
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
 * Change Variation
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
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Special Categories
 * 
 *   "All" Command:
 *   "Unlisted" Command:
 *   - Text used for the special Categories.
 * 
 * ---
 * 
 * Help Descriptions
 * 
 *   "All" Category:
 *   "Unlisted" Category:
 *   - A description used for the special Categories.
 *   - Text codes allowed.
 * 
 *   Not Unlocked Image:
 *   - A description used for yet to be unlocked images.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Gallery Window > Variations
 * 
 *   Complete Text:
 *   - Text displayed for listings with complete unlocks.
 *   - Leave empty to not use.
 * 
 *   Text Format:
 *   - Text format for listings with variations left.
 *   - %1 - Percent, %2 - Unlocked, %3 - Total
 *
 * ---
 * 
 * Gallery Window > Completion
 * 
 *   Vocabulary:
 *   - Main vocabulary used for this text.
 * 
 *   Text Format:
 *   - Text format used for completion percentage.
 *   - %1 - Percent, %2 - Unlocked, %3 - Total
 *
 * ---
 * 
 * Gallery Window > Progress
 * 
 *   Vocabulary:
 *   - Main vocabulary used for this text.
 * 
 *   Text Format:
 *   - Text format used for progress unlocked.
 *   - %1 - Percent, %2 - Unlocked, %3 - Total
 *
 * ---
 * 
 * Button Assist Window
 * 
 *   Border:
 *   - Text used for toggling border and borderless.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Gallery:
 *   - Text used for returning back to the gallery.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Next Variation:
 *   - Text used for going to next variation.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Previous Variation:
 *   - Text used for going to previous variation.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Reset Zoom/Position:
 *   - Text used for resetting the zoom and position.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Zoom Change:
 *   - Text used for changing the zoom scale.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Settings for all the windows inside the CG Gallery scene.
 *
 * ---
 *
 * Window_Help
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Window_CG_Category
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Special Categories:
 * 
 *     Add All Command?:
 *     - Add the "All" command for the CG Gallery Category window.
 * 
 *       "All" Icon:
 *       - Icon used for the "All" Category.
 * 
 *     Show Unlisted?:
 *     - Show the "Unlisted" command for the CG Gallery Category window
 *       if applicable.
 * 
 *       "Unlisted" Icon:
 *       - Icon used for the "Unlisted" Category.
 * 
 *   Style:
 *   - How do you wish to draw commands for this window?
 *     - Text Only
 *     - Icon Only
 *     - Icon + Text
 *     - Automatic
 * 
 *   Text Align:
 *   - Text alignment for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Window_CG_Gallery
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Custom Locked Image:
 *   - Custom picture graphic used for entries that have yet to be unlocked.
 * 
 *   Image Buffer:
 *   - How many pixels of buffer range should there be for selected images?
 * 
 *   Listing Background?:
 *   - Show the dark background for listings?
 * 
 *   Max Columns:
 *   - Max columns used for this window.
 * 
 *     Spacing:
 *     - Column spacing for this window.
 * 
 *   Max Rows:
 *   - Max rows used for this window.
 * 
 *     Spacing:
 *     - Row spacing for this window.
 * 
 *   Stagger:
 *   - How many pixels should the gallery entries stagger by?
 *   - This is the diagonal listing effect.
 * 
 *     Towards Left?:
 *     - Which direction should the stagger be going towards?
 * 
 *   Text:
 * 
 *     Variations:
 * 
 *       Show?:
 *       - Show variations on the gallery thumbnail?
 * 
 *       Display Singles?:
 *       - Show text on listings with no variations?
 * 
 *       Horz Text Align:
 *       Vert Text Align:
 *       - Horizontal/vertical alignment for this text?
 * 
 *     Completion:
 * 
 *       Show?:
 *       - Show this text?
 * 
 *       Decimal Places:
 *       - How many decimal places should the percentage value go to?
 * 
 *       Font Name:
 *       - What is the font family name (NOT filename) of the font?
 *       - Look up the name via Windows Font Preview.
 * 
 *         Font Size: Vocab:
 *         - What is the font size of the main vocabulary?
 * 
 *         Font Size: Value:
 *         - What is the font size of the main value?
 * 
 *       Offset:
 * 
 *         Angle:
 *         - What angle should this text be shown at?
 * 
 *         Offset X:
 *         - How many pixels to offset the x position?
 *         - Negative: left. Positive: right.
 * 
 *         Offset Y:
 *         - How many pixels to offset the y position?
 *         - Negative: up. Positive: down.
 * 
 *     Progress:
 * 
 *       Show?:
 *       - Show this text?
 * 
 *       Decimal Places:
 *       - How many decimal places should the percentage value go to?
 * 
 *       Font Name:
 *       - What is the font family name (NOT filename) of the font?
 *       - Look up the name via Windows Font Preview.
 * 
 *         Font Size: Vocab:
 *         - What is the font size of the main vocabulary?
 * 
 *         Font Size: Value:
 *         - What is the font size of the main value?
 * 
 *       Offset:
 * 
 *         Angle:
 *         - What angle should this text be shown at?
 * 
 *         Offset X:
 *         - How many pixels to offset the x position?
 *         - Negative: left. Positive: right.
 * 
 *         Offset Y:
 *         - How many pixels to offset the y position?
 *         - Negative: up. Positive: down.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Version 1.03: July 17, 2025
 * * Bug Fixes!
 * ** Fixed a bug where the CG Gallery would crash if Completion or Progress
 *    displays were turned off. Fix made by Irina.
 * 
 * Version 1.02: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause some Touch UI buttons to disappear from
 *    various menus. Fix made by Olivia.
 * 
 * Version 1.01: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a crash that would occur if the "Touch UI" option is off. Fix made
 *    by Arisu.
 * 
 * Version 1.00 Official Release Date: March 3, 2023
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
 * @command CG_UnlockImages
 * @text CG: Unlock Image(s)
 * @desc Unlocks specific image(s) for the CG Gallery.
 * 
 * @arg Filename:arraystr
 * @text Filename(s)
 * @type file[]
 * @dir img/pictures/
 * @desc List of filenames for CG's that will become unlocked.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CG_UnlockAllImagesDebug
 * @text CG: Unlock All Images (Debug)
 * @desc Unlocks all image(s) for the CG Gallery.
 * Only for playtesting. Resets upon game closing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CG_UnlockAllImagesPerma
 * @text CG: Unlock All Images (Permanent)
 * @desc Unlocks all image(s) for the CG Gallery.
 * This is a permanent unlock.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CG_ResetAllImagesPerma
 * @text CG: Reset All Unlocks (Permanent)
 * @desc Reset all unlocks for the CG Gallery.
 * This is a permanent reset. Use SPARRINGLY!
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Scene
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenCgGallery
 * @text Scene: Open CG Gallery
 * @desc Opens CG Gallery.
 * CANNOT be used inside of battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableCGGalleryMenu
 * @text System: Enable CG Gallery in Menu?
 * @desc Enables/disables CG Gallery menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables CG Gallery menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCGGalleryMenu
 * @text System: Show CG Gallery in Menu?
 * @desc Shows/hides CG Gallery menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides CG Gallery menu inside the main menu.
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
 * @param CGGallery
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Gallery
 * 
 * @param Categories:arraystruct
 * @text Image Categories
 * @parent Gallery
 * @type struct<Category>[]
 * @desc List of categories that are used for this plugin.
 * @default ["{\"Key:str\":\"CG\",\"Text:str\":\"CGs\",\"Icon:num\":\"309\",\"Description:json\":\"\\\"View major scenes found in the game!\\\"\"}","{\"Key:str\":\"Character\",\"Text:str\":\"Characters\",\"Icon:num\":\"310\",\"Description:json\":\"\\\"View character art found in the game!\\\"\"}","{\"Key:str\":\"Background\",\"Text:str\":\"Backgrounds\",\"Icon:num\":\"311\",\"Description:json\":\"\\\"View backgrounds found in the game!\\\"\"}","{\"Key:str\":\"Extra\",\"Text:str\":\"Extras\",\"Icon:num\":\"312\",\"Description:json\":\"\\\"View extra content!\\\"\"}"]
 * 
 * @param Listing:arraystruct
 * @text Image Listing
 * @parent Gallery
 * @type struct<Listing>[]
 * @desc A listing of all the pictures found in the CG Gallery.
 * @default ["{\"Filename:str\":\"Actor1_1\",\"Variations:arraystr\":\"[\\\"SF_Actor1_1\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A portrait of Reid.\\\\nHe is the main protagonist of RPG Maker MZ!\\\"\"}","{\"Filename:str\":\"Actor1_2\",\"Variations:arraystr\":\"[\\\"SF_Actor1_2\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"It's an image of Priscilla.\\\\nShe is Reid's female counterpart.\\\"\"}","{\"Filename:str\":\"Actor1_3\",\"Variations:arraystr\":\"[\\\"SF_Actor1_3\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Here's a portrait of Gale.\\\\nHe's quite the brawler.\\\"\"}","{\"Filename:str\":\"Actor1_4\",\"Variations:arraystr\":\"[\\\"SF_Actor1_4\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Michelle's portrait.\\\\nComplete with her cheerful smile!\\\"\"}","{\"Filename:str\":\"Actor1_5\",\"Variations:arraystr\":\"[\\\"SF_Actor1_5\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Albert and his handsome face.\\\\nDon't you wish you could just punch him?\\\"\"}","{\"Filename:str\":\"Actor1_6\",\"Variations:arraystr\":\"[\\\"SF_Actor1_6\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"An adorable portrait of Kasey.\\\\nHer energetic smile heals people.\\\"\"}","{\"Filename:str\":\"Actor1_7\",\"Variations:arraystr\":\"[\\\"SF_Actor1_7\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A tired portrait of Eliot.\\\\nHe's just so sick of Reid's shenanigans.\\\"\"}","{\"Filename:str\":\"Actor1_8\",\"Variations:arraystr\":\"[\\\"SF_Actor1_8\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Roza's nicely profiled portrait.\\\\nIf only we saw more of her.\\\"\"}","{\"Filename:str\":\"Actor2_1\",\"Variations:arraystr\":\"[\\\"SF_Actor2_1\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_1.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_2\",\"Variations:arraystr\":\"[\\\"SF_Actor2_2\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_2.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_3\",\"Variations:arraystr\":\"[\\\"SF_Actor2_3\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_3.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_4\",\"Variations:arraystr\":\"[\\\"SF_Actor2_4\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_4.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_5\",\"Variations:arraystr\":\"[\\\"SF_Actor2_5\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_5.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_6\",\"Variations:arraystr\":\"[\\\"SF_Actor2_6\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_6.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_7\",\"Variations:arraystr\":\"[\\\"SF_Actor2_7\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_7.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_8\",\"Variations:arraystr\":\"[\\\"SF_Actor2_8\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_8.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}"]
 * 
 * @param DefaultUnlocked:arraystr
 * @text Default Unlocks
 * @parent Listing:arraystruct
 * @type file[]
 * @dir img/pictures/
 * @desc List of filenames for CG's that are already unlocked and viewable.
 * @default ["Actor1_1","Actor1_2","Actor1_3","Actor1_4","Actor1_5","Actor1_6","Actor1_7","Actor1_8"]
 * 
 * @param Scenes
 *
 * @param System:struct
 * @text System Settings
 * @parent Scenes
 * @type struct<System>
 * @desc System settings for CG Gallery.
 * @default {"AutoUnlocks":"","AutoUnlockShowPicture:eval":"true","AutoUnlockVariations:eval":"false","Scene_CG_Gallery":"","MoveDistance:num":"4"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @parent Scenes
 * @type struct<MainMenu>
 * @desc Main Menu settings for CG Gallery.
 * @default {"Name:str":"CG Gallery","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true","ShowTitleCommand:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @parent Scenes
 * @type struct<BgSettings>
 * @desc Background settings for Scene_CG_Gallery.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @parent Scenes
 * @type struct<Sound>
 * @desc Sound settings for the CG Gallery.
 * @default {"View":"","viewName:str":"Book1","viewVolume:num":"90","viewPitch:num":"100","viewPan:num":"0","Change":"","changeName:str":"Book2","changeVolume:num":"90","changePitch:num":"100","changePan:num":"0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @parent Scenes
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"CategoryWindowCommands":"","AllCommandText:str":"All","UnlistedCommandText:str":"Unlisted","HelpDesc":"","AllCommandDescription:json":"\"View all types of images for this gallery.\"","UnlistedCommandDescription:json":"\"These images do not have a category.\"","LockedHelpDescription:json":"\"You have not unlocked this image yet.\"","GalleryWindow":"","GalleryWindowVariations":"","GalleryWindow_Text_VariationComplete:str":"\\}★","GalleryWindow_Text_VariationFmt:str":"\\}%2/%3","GalleryWindowCompletion":"","GalleryWindow_Text_CompletionVocab:str":"Completion","GalleryWindow_Text_CompletionFmt:str":"%1%","GalleryWindowProgress":"","GalleryWindow_Text_ProgressVocab:str":"Progress","GalleryWindow_Text_ProgressFmt:str":"%2/%3","ButtonAssist":"","ButtonAssistVocab_Border:str":"Border","ButtonAssistVocab_Gallery:str":"Gallery","ButtonAssistVocab_Next:str":"Next","ButtonAssistVocab_Prev:str":"Prev","ButtonAssistVocab_Reset:str":"Reset","ButtonAssistVocab_Zoom:str":"Zoom"}
 * 
 * @param Window:struct
 * @text Window Settings
 * @parent Scenes
 * @type struct<Window>
 * @desc Settings for all the windows inside the CG Gallery scene.
 * @default {"HelpWindow":"","HelpWindow_BgType:num":"0","HelpWindow_RectJS:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","CategoryWindow":"","CategoryWindow_BgType:num":"0","CategoryWindowCommands":"","CategoryWindow_AddAllCommand:eval":"true","AllCommandIcon:num":"307","CategoryWindow_ShowUnlistedCommand:eval":"true","UnlistedCommandIcon:num":"308","CategoryWindow_Style:str":"auto","CategoryWindow_TextAlign:str":"center","CategoryWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GalleryWindow":"","GalleryWindow_BgType:num":"0","LockedImgFilename:str":"","GalleryWindow_ImageBuffer:num":"4","GalleryWindow_ListingBack:eval":"true","GalleryWindow_MaxCols:num":"4","GalleryWindow_SpacingCols:num":"4","GalleryWindow_MaxRows:num":"3","GalleryWindow_SpacingRows:num":"4","GalleryWindow_Stagger:num":"160","GalleryWindow_StaggerToLeft:eval":"true","GalleryWindow_Text":"","GalleryWindow_Text_Variations":"","GalleryWindow_Text_VariationsShow:eval":"true","GalleryWindow_Text_VariationsShowSingles:eval":"false","GalleryWindow_Text_VariationsAlignX:str":"right","GalleryWindow_Text_VariationsAlignY:str":"bottom","GalleryWindow_Text_Completion":"","GalleryWindow_Text_CompletionShow:eval":"true","GalleryWindow_Text_CompletionDecimals:num":"2","GalleryWindow_Text_CompletionFontFace:str":"Arial","GalleryWindow_Text_CompletionFontSize1:num":"26","GalleryWindow_Text_CompletionFontSize2:num":"36","GalleryWindow_Text_CompletionOffset":"","GalleryWindow_Text_CompletionAngle:num":"20","GalleryWindow_Text_CompletionOffsetX:num":"+0","GalleryWindow_Text_CompletionOffsetY:num":"+0","GalleryWindow_Text_Progress":"","GalleryWindow_Text_ProgressShow:eval":"true","GalleryWindow_Text_ProgressDecimals:num":"2","GalleryWindow_Text_ProgressFontFace:str":"Arial","GalleryWindow_Text_ProgressFontSize1:num":"26","GalleryWindow_Text_ProgressFontSize2:num":"48","GalleryWindow_Text_ProgressOffset":"","GalleryWindow_Text_ProgressAngle:num":"-20","GalleryWindow_Text_ProgressOffsetX:num":"+0","GalleryWindow_Text_ProgressOffsetY:num":"+0","GalleryWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * @param Text:str
 * @text Text
 * @desc This category's command text.
 * @default Untitled
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param Description:json
 * @text Help Description
 * @type note
 * @desc A description of the CG Gallery listing.
 * Text codes allowed.
 * @default "Line1\nLine2"
 * 
 */
/* ----------------------------------------------------------------------------
 * Listing Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Listing:
 *
 * @param Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the CG Gallery listing.
 * This will be used as the CG Gallery thumbnail, too.
 * @default Untitled
 *
 * @param Variations:arraystr
 * @text Variations
 * @parent Filename:str
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Variations of the CG Gallery listing.
 * @default []
 *
 * @param Category:str
 * @text Category
 * @desc The category this image is listed under.
 * If unlisted, the image will be listed under "Unlisted".
 * @default Unlisted
 *
 * @param Description:json
 * @text Help Description
 * @type note
 * @desc A description of the CG Gallery listing.
 * Text codes allowed.
 * @default "Line1\nLine2"
 *
 */
/* ----------------------------------------------------------------------------
 * System Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~System:
 *
 * @param AutoUnlocks
 * @text Auto-Unlocks
 *
 * @param AutoUnlockShowPicture:eval
 * @text Show Picture?
 * @parent AutoUnlocks
 * @type boolean
 * @on Auto-Unlock
 * @off Ignore
 * @desc Auto-unlock listings for the CG Gallery when using
 * "Show Picture" event commands?
 * @default true
 *
 * @param AutoUnlockVariations:eval
 * @text Variations?
 * @parent AutoUnlocks
 * @type boolean
 * @on Auto-Unlock
 * @off Ignore
 * @desc Auto-unlock variations for listings for the CG Gallery?
 * @default false
 * 
 * @param Scene_CG_Gallery
 *
 * @param MoveDistance:num
 * @text Move Distance
 * @parent Scene_CG_Gallery
 * @desc How many pixels should pictures move per frame?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'CG Gallery' option in the Main Menu.
 * @default CG Gallery
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'CG Gallery' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'CG Gallery' option to the Main Menu by default?
 * @default true
 *
 * @param ShowTitleCommand:eval
 * @text Show in Title Command?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the "CG Gallery" the Title Command Window?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param View
 * @text Select Image
 * 
 * @param viewName:str
 * @text Filename
 * @parent View
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Book1
 *
 * @param viewVolume:num
 * @text Volume
 * @parent View
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param viewPitch:num
 * @text Pitch
 * @parent View
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param viewPan:num
 * @text Pan
 * @parent View
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Change
 * @text Change Variation
 * 
 * @param changeName:str
 * @text Filename
 * @parent Change
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Book2
 *
 * @param changeVolume:num
 * @text Volume
 * @parent Change
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param changePitch:num
 * @text Pitch
 * @parent Change
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param changePan:num
 * @text Pan
 * @parent Change
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param CategoryWindowCommands
 * @text Special Categories
 *
 * @param AllCommandText:str
 * @text "All" Command
 * @parent CategoryWindowCommands
 * @desc Text used for the "All" Category.
 * @default All
 *
 * @param UnlistedCommandText:str
 * @text "Unlisted" Command
 * @parent CategoryWindowCommands
 * @desc Text used for the "Unlisted" Category.
 * @default Unlisted
 *
 * @param HelpDesc
 * @text Help Descriptions
 *
 * @param AllCommandDescription:json
 * @text "All" Category
 * @parent HelpDesc
 * @type note
 * @desc A description used for the "All" Category.
 * Text codes allowed.
 * @default "View all types of images for this gallery."
 *
 * @param UnlistedCommandDescription:json
 * @text "Unlisted" Category
 * @parent HelpDesc
 * @type note
 * @desc A description used for the "Unlisted" Category.
 * Text codes allowed.
 * @default "These images do not have a category."
 *
 * @param LockedHelpDescription:json
 * @text Not Unlocked Image
 * @parent HelpDesc
 * @type note
 * @desc A description used for yet to be unlocked images.
 * Text codes allowed.
 * @default "You have not unlocked this image yet."
 * 
 * @param GalleryWindow
 * @text Gallery Window
 * 
 * @param GalleryWindowVariations
 * @text Variations
 * @parent GalleryWindow
 *
 * @param GalleryWindow_Text_VariationComplete:str
 * @text Complete Text
 * @parent GalleryWindowVariations
 * @desc Text displayed for listings with complete unlocks.
 * Leave empty to not use.
 * @default \}★
 *
 * @param GalleryWindow_Text_VariationFmt:str
 * @text Text Format
 * @parent GalleryWindowVariations
 * @desc Text format for listings with variations left.
 * %1 - Percent, %2 - Unlocked, %3 - Total
 * @default \}%2/%3
 * 
 * @param GalleryWindowCompletion
 * @text Completion
 * @parent GalleryWindow
 *
 * @param GalleryWindow_Text_CompletionVocab:str
 * @text Vocabulary
 * @parent GalleryWindowCompletion
 * @desc Main vocabulary used for this text.
 * @default Completion
 *
 * @param GalleryWindow_Text_CompletionFmt:str
 * @text Percentage Format
 * @parent GalleryWindowCompletion
 * @desc Text format used for completion percentage.
 * %1 - Percent, %2 - Unlocked, %3 - Total
 * @default %1%
 * 
 * @param GalleryWindowProgress
 * @text Progress
 * @parent GalleryWindow
 *
 * @param GalleryWindow_Text_ProgressVocab:str
 * @text Vocabulary
 * @parent GalleryWindowProgress
 * @desc Main vocabulary used for this text.
 * @default Progress
 *
 * @param GalleryWindow_Text_ProgressFmt:str
 * @text Progress Format
 * @parent GalleryWindowProgress
 * @desc Text format used for progress unlocked.
 * %1 - Percent, %2 - Unlocked, %3 - Total
 * @default %2/%3
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param ButtonAssistVocab_Border:str
 * @text Border
 * @parent ButtonAssist
 * @desc Text used for toggling border and borderless.
 * Requires VisuMZ_0_CoreEngine!
 * @default Border
 *
 * @param ButtonAssistVocab_Gallery:str
 * @text Gallery
 * @parent ButtonAssist
 * @desc Text used for returning back to the gallery.
 * Requires VisuMZ_0_CoreEngine!
 * @default Gallery
 *
 * @param ButtonAssistVocab_Next:str
 * @text Next Variation
 * @parent ButtonAssist
 * @desc Text used for going to next variation.
 * Requires VisuMZ_0_CoreEngine!
 * @default Next
 *
 * @param ButtonAssistVocab_Prev:str
 * @text Previous Variation
 * @parent ButtonAssist
 * @desc Text used for going to previous variation.
 * Requires VisuMZ_0_CoreEngine!
 * @default Prev
 *
 * @param ButtonAssistVocab_Reset:str
 * @text Reset Zoom/Position
 * @parent ButtonAssist
 * @desc Text used for resetting the zoom and position.
 * Requires VisuMZ_0_CoreEngine!
 * @default Reset
 *
 * @param ButtonAssistVocab_Zoom:str
 * @text Zoom Change
 * @parent ButtonAssist
 * @desc Text used for changing the zoom scale.
 * Requires VisuMZ_0_CoreEngine!
 * @default Zoom
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param HelpWindow
 * @text Window_Help
 *
 * @param HelpWindow_BgType:num
 * @text Background Type
 * @parent HelpWindow
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
 * @param HelpWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CategoryWindow
 * @text Window_CG_Category
 *
 * @param CategoryWindow_BgType:num
 * @text Background Type
 * @parent CategoryWindow
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
 * @param CategoryWindowCommands
 * @text Special Categories
 * @parent CategoryWindow
 *
 * @param CategoryWindow_AddAllCommand:eval
 * @text Add All Command?
 * @parent CategoryWindowCommands
 * @type boolean
 * @on Add
 * @off Ignore
 * @desc Add the "All" command for the CG Gallery Category window.
 * @default true
 *
 * @param AllCommandIcon:num
 * @text "All" Icon
 * @parent CategoryWindow_AddAllCommand:eval
 * @desc Icon used for the "All" Category.
 * @default 307
 *
 * @param CategoryWindow_ShowUnlistedCommand:eval
 * @text Show Unlisted?
 * @parent CategoryWindowCommands
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the "Unlisted" command for the CG Gallery Category window if applicable.
 * @default true
 *
 * @param UnlistedCommandIcon:num
 * @text "Unlisted" Icon
 * @parent CategoryWindow_ShowUnlistedCommand:eval
 * @desc Icon used for the "Unlisted" Category.
 * @default 308
 *
 * @param CategoryWindow_Style:str
 * @text Style
 * @parent CategoryWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands for this window?
 * @default auto
 *
 * @param CategoryWindow_TextAlign:str
 * @text Text Align
 * @parent CategoryWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for this window?
 * @default center
 *
 * @param CategoryWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GalleryWindow
 * @text Window_CG_Gallery
 *
 * @param GalleryWindow_BgType:num
 * @text Background Type
 * @parent GalleryWindow
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
 * @param LockedImgFilename:str
 * @text Custom Locked Image
 * @parent GalleryWindow
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Custom picture graphic used for entries that have yet to be unlocked.
 * @default 
 *
 * @param GalleryWindow_ImageBuffer:num
 * @text Image Buffer
 * @parent GalleryWindow
 * @type number
 * @desc How many pixels of buffer range should there be for selected images?
 * @default 4
 *
 * @param GalleryWindow_ListingBack:eval
 * @text Listing Background?
 * @parent GalleryWindow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the dark background for listings?
 * @default true
 *
 * @param GalleryWindow_MaxCols:num
 * @text Max Columns
 * @parent GalleryWindow
 * @type number
 * @min 1
 * @desc Max columns used for this window.
 * @default 4
 *
 * @param GalleryWindow_SpacingCols:num
 * @text Spacing
 * @parent GalleryWindow_MaxCols:num
 * @type number
 * @min 0
 * @desc Column spacing for this window.
 * @default 4
 *
 * @param GalleryWindow_MaxRows:num
 * @text Max Rows
 * @parent GalleryWindow
 * @type number
 * @min 1
 * @desc Max rows used for this window.
 * @default 3
 *
 * @param GalleryWindow_SpacingRows:num
 * @text Spacing
 * @parent GalleryWindow_MaxRows:num
 * @type number
 * @min 0
 * @desc Row spacing for this window.
 * @default 4
 *
 * @param GalleryWindow_Stagger:num
 * @text Stagger
 * @parent GalleryWindow
 * @type number
 * @desc How many pixels should the gallery entries stagger by?
 * This is the diagonal listing effect.
 * @default 160
 *
 * @param GalleryWindow_StaggerToLeft:eval
 * @text Towards Left?
 * @parent GalleryWindow_Stagger:num
 * @type boolean
 * @on Towards Left
 * @off Towards Right
 * @desc Which direction should the stagger be going towards?
 * @default true
 * 
 * @param GalleryWindow_Text
 * @text Text
 * @parent GalleryWindow
 * 
 * @param GalleryWindow_Text_Variations
 * @text Variations
 * @parent GalleryWindow_Text
 *
 * @param GalleryWindow_Text_VariationsShow:eval
 * @text Show?
 * @parent GalleryWindow_Text_Variations
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show variations on the gallery thumbnail?
 * @default true
 *
 * @param GalleryWindow_Text_VariationsShowSingles:eval
 * @text Display Singles?
 * @parent GalleryWindow_Text_Variations
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show text on listings with no variations?
 * @default false
 *
 * @param GalleryWindow_Text_VariationsAlignX:str
 * @text Horz Text Align
 * @parent GalleryWindow_Text_Variations
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Horizontal alignment for this text?
 * @default right
 *
 * @param GalleryWindow_Text_VariationsAlignY:str
 * @text Vert Text Align
 * @parent GalleryWindow_Text_Variations
 * @type combo
 * @option top
 * @option middle
 * @option bottom
 * @desc Vertical alignment for this text?
 * @default bottom
 * 
 * @param GalleryWindow_Text_Completion
 * @text Completion
 * @parent GalleryWindow_Text
 *
 * @param GalleryWindow_Text_CompletionShow:eval
 * @text Show?
 * @parent GalleryWindow_Text_Completion
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this text?
 * @default true
 *
 * @param GalleryWindow_Text_CompletionDecimals:num
 * @text Decimal Places
 * @parent GalleryWindow_Text_Completion
 * @type number
 * @desc How many decimal places should the percentage value go to?
 * @default 2
 *
 * @param GalleryWindow_Text_CompletionFontFace:str
 * @text Font Name
 * @parent GalleryWindow_Text_Completion
 * @desc What is the font family name (NOT filename) of the font?
 * Look up the name via Windows Font Preview.
 * @default Arial
 *
 * @param GalleryWindow_Text_CompletionFontSize1:num
 * @text Font Size: Vocab
 * @parent GalleryWindow_Text_CompletionFontFace:str
 * @type number
 * @desc What is the font size of the main vocabulary?
 * @default 26
 *
 * @param GalleryWindow_Text_CompletionFontSize2:num
 * @text Font Size: Value
 * @parent GalleryWindow_Text_CompletionFontFace:str
 * @type number
 * @desc What is the font size of the value?
 * @default 36
 *
 * @param GalleryWindow_Text_CompletionOffset
 * @text Offset
 * @parent GalleryWindow_Text_Completion
 *
 * @param GalleryWindow_Text_CompletionAngle:num
 * @text Angle
 * @parent GalleryWindow_Text_CompletionOffset
 * @desc What angle should this text be shown at?
 * @default 20
 *
 * @param GalleryWindow_Text_CompletionOffsetX:num
 * @text Offset X
 * @parent GalleryWindow_Text_CompletionOffset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GalleryWindow_Text_CompletionOffsetY:num
 * @text Offset Y
 * @parent GalleryWindow_Text_CompletionOffset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param GalleryWindow_Text_Progress
 * @text Progress
 * @parent GalleryWindow_Text
 *
 * @param GalleryWindow_Text_ProgressShow:eval
 * @text Show?
 * @parent GalleryWindow_Text_Progress
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this text?
 * @default true
 *
 * @param GalleryWindow_Text_ProgressDecimals:num
 * @text Decimal Places
 * @parent GalleryWindow_Text_Progress
 * @type number
 * @desc How many decimal places should the percentage value go to?
 * @default 2
 *
 * @param GalleryWindow_Text_ProgressFontFace:str
 * @text Font Name
 * @parent GalleryWindow_Text_Progress
 * @desc What is the font family name (NOT filename) of the font?
 * Look up the name via Windows Font Preview.
 * @default Arial
 *
 * @param GalleryWindow_Text_ProgressFontSize1:num
 * @text Font Size: Vocab
 * @parent GalleryWindow_Text_ProgressFontFace:str
 * @type number
 * @desc What is the font size of the main vocabulary?
 * @default 26
 *
 * @param GalleryWindow_Text_ProgressFontSize2:num
 * @text Font Size: Value
 * @parent GalleryWindow_Text_ProgressFontFace:str
 * @type number
 * @desc What is the font size of the value?
 * @default 48
 *
 * @param GalleryWindow_Text_ProgressOffset
 * @text Offset
 * @parent GalleryWindow_Text_Progress
 *
 * @param GalleryWindow_Text_ProgressAngle:num
 * @text Angle
 * @parent GalleryWindow_Text_ProgressOffset
 * @desc What angle should this text be shown at?
 * @default -20
 *
 * @param GalleryWindow_Text_ProgressOffsetX:num
 * @text Offset X
 * @parent GalleryWindow_Text_ProgressOffset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GalleryWindow_Text_ProgressOffsetY:num
 * @text Offset Y
 * @parent GalleryWindow_Text_ProgressOffset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GalleryWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent GalleryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x2daa2a=_0x12f7;(function(_0x2c2b91,_0x5e9058){const _0x535eb5=_0x12f7,_0x4a34f7=_0x2c2b91();while(!![]){try{const _0x2ea1c0=parseInt(_0x535eb5(0x263))/0x1*(parseInt(_0x535eb5(0x275))/0x2)+-parseInt(_0x535eb5(0x141))/0x3*(-parseInt(_0x535eb5(0x2b3))/0x4)+parseInt(_0x535eb5(0x13d))/0x5+-parseInt(_0x535eb5(0x14e))/0x6+parseInt(_0x535eb5(0x2c7))/0x7*(-parseInt(_0x535eb5(0x2e4))/0x8)+parseInt(_0x535eb5(0x23d))/0x9*(parseInt(_0x535eb5(0x18a))/0xa)+parseInt(_0x535eb5(0x28f))/0xb*(parseInt(_0x535eb5(0x14d))/0xc);if(_0x2ea1c0===_0x5e9058)break;else _0x4a34f7['push'](_0x4a34f7['shift']());}catch(_0x345c49){_0x4a34f7['push'](_0x4a34f7['shift']());}}}(_0x1865,0x699c8));function _0x12f7(_0x222d40,_0x52a7ff){const _0x18650d=_0x1865();return _0x12f7=function(_0x12f72c,_0x3d97e9){_0x12f72c=_0x12f72c-0x12c;let _0x35dbc2=_0x18650d[_0x12f72c];return _0x35dbc2;},_0x12f7(_0x222d40,_0x52a7ff);}var label=_0x2daa2a(0x174),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2daa2a(0x201)](function(_0x3bb45b){const _0x269b25=_0x2daa2a;return _0x3bb45b[_0x269b25(0x161)]&&_0x3bb45b[_0x269b25(0x22e)][_0x269b25(0x2db)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x2daa2a(0x215)]||{},VisuMZ[_0x2daa2a(0x1fe)]=function(_0x56d3fd,_0x35980c){const _0x645e91=_0x2daa2a;for(const _0x2ecdc6 in _0x35980c){if(_0x2ecdc6[_0x645e91(0x282)](/(.*):(.*)/i)){const _0x2e5b57=String(RegExp['$1']),_0x40e91c=String(RegExp['$2'])['toUpperCase']()[_0x645e91(0x19f)]();let _0x1a68ee,_0x49ad6a,_0x435bc6;switch(_0x40e91c){case _0x645e91(0x1da):_0x1a68ee=_0x35980c[_0x2ecdc6]!==''?Number(_0x35980c[_0x2ecdc6]):0x0;break;case _0x645e91(0x246):_0x49ad6a=_0x35980c[_0x2ecdc6]!==''?JSON[_0x645e91(0x14b)](_0x35980c[_0x2ecdc6]):[],_0x1a68ee=_0x49ad6a[_0x645e91(0x155)](_0x411e30=>Number(_0x411e30));break;case _0x645e91(0x229):_0x1a68ee=_0x35980c[_0x2ecdc6]!==''?eval(_0x35980c[_0x2ecdc6]):null;break;case _0x645e91(0x1f1):_0x49ad6a=_0x35980c[_0x2ecdc6]!==''?JSON['parse'](_0x35980c[_0x2ecdc6]):[],_0x1a68ee=_0x49ad6a[_0x645e91(0x155)](_0x336171=>eval(_0x336171));break;case _0x645e91(0x16d):_0x1a68ee=_0x35980c[_0x2ecdc6]!==''?JSON['parse'](_0x35980c[_0x2ecdc6]):'';break;case'ARRAYJSON':_0x49ad6a=_0x35980c[_0x2ecdc6]!==''?JSON[_0x645e91(0x14b)](_0x35980c[_0x2ecdc6]):[],_0x1a68ee=_0x49ad6a[_0x645e91(0x155)](_0xa7fda2=>JSON[_0x645e91(0x14b)](_0xa7fda2));break;case _0x645e91(0x228):_0x1a68ee=_0x35980c[_0x2ecdc6]!==''?new Function(JSON['parse'](_0x35980c[_0x2ecdc6])):new Function(_0x645e91(0x171));break;case'ARRAYFUNC':_0x49ad6a=_0x35980c[_0x2ecdc6]!==''?JSON[_0x645e91(0x14b)](_0x35980c[_0x2ecdc6]):[],_0x1a68ee=_0x49ad6a[_0x645e91(0x155)](_0x543d10=>new Function(JSON[_0x645e91(0x14b)](_0x543d10)));break;case'STR':_0x1a68ee=_0x35980c[_0x2ecdc6]!==''?String(_0x35980c[_0x2ecdc6]):'';break;case _0x645e91(0x28c):_0x49ad6a=_0x35980c[_0x2ecdc6]!==''?JSON['parse'](_0x35980c[_0x2ecdc6]):[],_0x1a68ee=_0x49ad6a[_0x645e91(0x155)](_0x1918a5=>String(_0x1918a5));break;case _0x645e91(0x163):_0x435bc6=_0x35980c[_0x2ecdc6]!==''?JSON['parse'](_0x35980c[_0x2ecdc6]):{},_0x1a68ee=VisuMZ[_0x645e91(0x1fe)]({},_0x435bc6);break;case _0x645e91(0x138):_0x49ad6a=_0x35980c[_0x2ecdc6]!==''?JSON['parse'](_0x35980c[_0x2ecdc6]):[],_0x1a68ee=_0x49ad6a[_0x645e91(0x155)](_0x170d6a=>VisuMZ[_0x645e91(0x1fe)]({},JSON['parse'](_0x170d6a)));break;default:continue;}_0x56d3fd[_0x2e5b57]=_0x1a68ee;}}return _0x56d3fd;},(_0x125037=>{const _0x55315a=_0x2daa2a,_0x560ffb=_0x125037[_0x55315a(0x192)];for(const _0x382266 of dependencies){if(!Imported[_0x382266]){alert(_0x55315a(0x159)[_0x55315a(0x210)](_0x560ffb,_0x382266)),SceneManager[_0x55315a(0x2a0)]();break;}}const _0x1410a8=_0x125037[_0x55315a(0x22e)];if(_0x1410a8[_0x55315a(0x282)](/\[Version[ ](.*?)\]/i)){const _0x36456a=Number(RegExp['$1']);_0x36456a!==VisuMZ[label][_0x55315a(0x1a2)]&&(alert(_0x55315a(0x14c)[_0x55315a(0x210)](_0x560ffb,_0x36456a)),SceneManager[_0x55315a(0x2a0)]());}if(_0x1410a8['match'](/\[Tier[ ](\d+)\]/i)){const _0x5d0912=Number(RegExp['$1']);_0x5d0912<tier?(alert(_0x55315a(0x217)[_0x55315a(0x210)](_0x560ffb,_0x5d0912,tier)),SceneManager[_0x55315a(0x2a0)]()):tier=Math['max'](_0x5d0912,tier);}VisuMZ[_0x55315a(0x1fe)](VisuMZ[label][_0x55315a(0x215)],_0x125037['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData[_0x2daa2a(0x192)],_0x2daa2a(0x1d4),_0x4b46a2=>{const _0x141784=_0x2daa2a;VisuMZ[_0x141784(0x1fe)](_0x4b46a2,_0x4b46a2);const _0x58fc4b=_0x4b46a2['Filename'][_0x141784(0x155)](_0x375b98=>_0x375b98['trim']());for(const _0x4df429 of _0x58fc4b){$gameSystem[_0x141784(0x20c)](_0x4df429);}}),PluginManager[_0x2daa2a(0x234)](pluginData[_0x2daa2a(0x192)],_0x2daa2a(0x1bc),_0x5b56c7=>{const _0x5c3a1=_0x2daa2a;VisuMZ['ConvertParams'](_0x5b56c7,_0x5b56c7),$gameTemp[_0x5c3a1(0x208)]=!![];}),PluginManager['registerCommand'](pluginData['name'],_0x2daa2a(0x180),_0xa9fbac=>{const _0x50e902=_0x2daa2a;VisuMZ[_0x50e902(0x1fe)](_0xa9fbac,_0xa9fbac);const _0x891614=VisuMZ[_0x50e902(0x174)][_0x50e902(0x215)][_0x50e902(0x1a0)];for(const _0x3e4509 of _0x891614){if(!_0x3e4509)continue;if(_0x3e4509[_0x50e902(0x158)][_0x50e902(0x23a)]()[_0x50e902(0x19f)]()===_0x50e902(0x2d5))continue;if(_0x3e4509[_0x50e902(0x158)][_0x50e902(0x19f)]()==='')continue;$gameSystem[_0x50e902(0x20c)](_0x3e4509[_0x50e902(0x158)]);for(const _0x4f112f of _0x3e4509[_0x50e902(0x273)]){if(_0x4f112f[_0x50e902(0x23a)]()['trim']()===_0x50e902(0x2d5))continue;if(_0x4f112f['trim']()==='')continue;$gameSystem[_0x50e902(0x20c)](_0x4f112f);}}}),PluginManager['registerCommand'](pluginData[_0x2daa2a(0x192)],_0x2daa2a(0x15a),_0x216c84=>{const _0x48098e=_0x2daa2a;VisuMZ[_0x48098e(0x1fe)](_0x216c84,_0x216c84),$gameTemp['_cgGalleryFullUnlock']=![],ConfigManager['cgGalleryUnlocks']=[],ConfigManager['save']();}),PluginManager[_0x2daa2a(0x234)](pluginData[_0x2daa2a(0x192)],_0x2daa2a(0x193),_0x11dde0=>{const _0x1f02ac=_0x2daa2a;if(SceneManager[_0x1f02ac(0x26b)]())return;SceneManager['push'](Scene_CG_Gallery);}),PluginManager[_0x2daa2a(0x234)](pluginData['name'],_0x2daa2a(0x230),_0x11065e=>{const _0x5d7530=_0x2daa2a;VisuMZ[_0x5d7530(0x1fe)](_0x11065e,_0x11065e),$gameSystem[_0x5d7530(0x1b1)](_0x11065e[_0x5d7530(0x1ac)]);}),PluginManager['registerCommand'](pluginData[_0x2daa2a(0x192)],_0x2daa2a(0x27b),_0x483e84=>{const _0xfcc7f6=_0x2daa2a;VisuMZ[_0xfcc7f6(0x1fe)](_0x483e84,_0x483e84),$gameSystem[_0xfcc7f6(0x214)](_0x483e84[_0xfcc7f6(0x2cc)]);}),ConfigManager[_0x2daa2a(0x15d)]=[],VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x2ec)]=ConfigManager['makeData'],ConfigManager[_0x2daa2a(0x1fc)]=function(){const _0x230382=_0x2daa2a,_0x559552=VisuMZ[_0x230382(0x174)][_0x230382(0x2ec)]['call'](this);return _0x559552['cgGalleryUnlocks']=this[_0x230382(0x15d)],_0x559552;},VisuMZ[_0x2daa2a(0x174)]['ConfigManager_applyData']=ConfigManager['applyData'],ConfigManager[_0x2daa2a(0x203)]=function(_0xb1e85f){const _0x121ca6=_0x2daa2a;VisuMZ[_0x121ca6(0x174)][_0x121ca6(0x2e0)][_0x121ca6(0x1ea)](this,_0xb1e85f),_0x121ca6(0x15d)in _0xb1e85f?this[_0x121ca6(0x15d)]=_0xb1e85f[_0x121ca6(0x15d)]:this[_0x121ca6(0x15d)]=[];},ConfigManager[_0x2daa2a(0x134)]=function(){const _0x317b5a=_0x2daa2a;return this['cgGalleryUnlocks'][_0x317b5a(0x2b0)]>0x0;},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x239)]=function(){const _0xf3599a=_0x2daa2a;if(this[_0xf3599a(0x149)]!==undefined)return this[_0xf3599a(0x149)];this['_defaultUnlocks']=this[_0xf3599a(0x149)]||[];const _0x51c6b3=VisuMZ['CGGallery']['Settings'][_0xf3599a(0x1a0)];for(const _0x1f9ee2 of _0x51c6b3){if(!_0x1f9ee2)continue;VisuMZ[_0xf3599a(0x174)][_0xf3599a(0x215)][_0xf3599a(0x2d2)][_0xf3599a(0x2db)](_0x1f9ee2[_0xf3599a(0x158)])&&this[_0xf3599a(0x149)][_0xf3599a(0x200)](_0x1f9ee2['Filename']);}return this[_0xf3599a(0x149)];},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x271)]=function(_0x2591fb){const _0x4ffc65=_0x2daa2a;if(this[_0x4ffc65(0x222)]===undefined){this['_listingNames']=[];const _0x586e89=VisuMZ[_0x4ffc65(0x174)][_0x4ffc65(0x215)][_0x4ffc65(0x1a0)];for(const _0x35ed65 of _0x586e89){if(!_0x35ed65)continue;if(_0x35ed65[_0x4ffc65(0x158)][_0x4ffc65(0x23a)]()[_0x4ffc65(0x19f)]()===_0x4ffc65(0x2d5))continue;if(_0x35ed65[_0x4ffc65(0x158)]['trim']()==='')continue;this['_listingNames'][_0x4ffc65(0x200)](_0x35ed65[_0x4ffc65(0x158)]);for(const _0x38bd14 of _0x35ed65[_0x4ffc65(0x273)]){if(_0x38bd14[_0x4ffc65(0x23a)]()['trim']()==='untitled')continue;if(_0x38bd14[_0x4ffc65(0x19f)]()==='')continue;this['_listingNames']['push'](_0x38bd14);}}}return this[_0x4ffc65(0x222)][_0x4ffc65(0x2db)](_0x2591fb);},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x258)]=function(_0x4fea83){const _0xd4054d=_0x2daa2a;_0x4fea83=_0x4fea83||'all',this[_0xd4054d(0x1de)]=this[_0xd4054d(0x1de)]||{};if(this[_0xd4054d(0x1de)][_0x4fea83]!==undefined)return this[_0xd4054d(0x1de)][_0x4fea83];this[_0xd4054d(0x1de)][_0x4fea83]=0x0;const _0x42bdb0=VisuMZ[_0xd4054d(0x174)][_0xd4054d(0x215)][_0xd4054d(0x1a0)];for(const _0x42ac1f of _0x42bdb0){if(!_0x42ac1f)continue;if(_0x42ac1f[_0xd4054d(0x158)][_0xd4054d(0x23a)]()[_0xd4054d(0x19f)]()==='untitled')continue;if(_0x42ac1f['Filename']['trim']()==='')continue;VisuMZ[_0xd4054d(0x174)][_0xd4054d(0x293)](_0x42ac1f,_0x4fea83)&&(this['_totalSize'][_0x4fea83]+=_0x42ac1f[_0xd4054d(0x273)]['length']+0x1);}return this[_0xd4054d(0x1de)][_0x4fea83];},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x293)]=function(_0x5e8e7f,_0x3c7803){const _0x4d72d2=_0x2daa2a;_0x3c7803=_0x3c7803||'all';if(_0x3c7803===_0x4d72d2(0x240))return!![];const _0x33e7cd=_0x5e8e7f[_0x4d72d2(0x2d0)][_0x4d72d2(0x23a)]()[_0x4d72d2(0x19f)]();if(_0x3c7803===_0x4d72d2(0x12d))return!this[_0x4d72d2(0x1eb)]()[_0x4d72d2(0x2db)](_0x33e7cd);return _0x33e7cd===_0x3c7803;},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x1eb)]=function(){const _0xee3ebe=_0x2daa2a;if(this[_0xee3ebe(0x1f8)]!==undefined)return this[_0xee3ebe(0x1f8)];this[_0xee3ebe(0x1f8)]=[];for(const _0x2ae770 of VisuMZ[_0xee3ebe(0x174)]['Settings']['Categories']){const _0x4c516c=_0x2ae770[_0xee3ebe(0x188)][_0xee3ebe(0x23a)]()[_0xee3ebe(0x19f)]();this[_0xee3ebe(0x1f8)][_0xee3ebe(0x200)](_0x4c516c);}return this['_categories'];},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x1e7)]=function(){const _0x297fb8=_0x2daa2a;if(this[_0x297fb8(0x289)]!==undefined)return this['_hasUnlistedCategories'];this[_0x297fb8(0x289)]=![];const _0x2b3b0b=VisuMZ[_0x297fb8(0x174)]['CgGalleryCategories'](),_0x51a2ec=VisuMZ[_0x297fb8(0x174)]['Settings'][_0x297fb8(0x1a0)];for(const _0x4d0745 of _0x51a2ec){if(!_0x4d0745)continue;if(_0x4d0745[_0x297fb8(0x158)][_0x297fb8(0x23a)]()['trim']()===_0x297fb8(0x2d5))continue;if(_0x4d0745[_0x297fb8(0x158)][_0x297fb8(0x19f)]()==='')continue;const _0x41f492=_0x4d0745[_0x297fb8(0x2d0)][_0x297fb8(0x23a)]()[_0x297fb8(0x19f)]();if(_0x2b3b0b[_0x297fb8(0x2db)](_0x41f492))continue;this[_0x297fb8(0x289)]=!![];break;}return this[_0x297fb8(0x289)];},ImageManager[_0x2daa2a(0x17d)]={'icons':{'all':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)]['AllCommandIcon'],'unlisted':VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x2c0)][_0x2daa2a(0x1b8)]},'lockedImgFilename':VisuMZ['CGGallery'][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x28a)]},ImageManager[_0x2daa2a(0x1f2)]=function(){const _0xdfd107=_0x2daa2a;if(this['_cached_CGGallery_Image'])return this[_0xdfd107(0x1db)];if(ImageManager[_0xdfd107(0x17d)][_0xdfd107(0x236)]!=='')return this['_cached_CGGallery_Image']=this[_0xdfd107(0x2bf)](ImageManager['CG_GALLERY'][_0xdfd107(0x236)]),this[_0xdfd107(0x1db)];const _0x47b49f=0x12c,_0x3475f3=0x12c,_0x30ecb0=new Bitmap(_0x47b49f,_0x3475f3);return _0x30ecb0[_0xdfd107(0x2b7)]=0x80,_0x30ecb0[_0xdfd107(0x17e)](0x96,0x96,0x78,_0xdfd107(0x279)),_0x30ecb0[_0xdfd107(0x2c1)]=_0xdfd107(0x195),_0x30ecb0['fontBold']=!![],_0x30ecb0[_0xdfd107(0x269)]=0x96,_0x30ecb0[_0xdfd107(0x132)]=_0xdfd107(0x168),_0x30ecb0[_0xdfd107(0x221)]('X',0x0,0x0,0x12c,0x12c,'center'),_0x30ecb0[_0xdfd107(0x2b7)]=0xff,_0x30ecb0[_0xdfd107(0x2dd)]=![],this['_cached_CGGallery_Image']=_0x30ecb0,this[_0xdfd107(0x1db)];},SoundManager[_0x2daa2a(0x1f4)]=function(){const _0x3b531e=_0x2daa2a,_0x550d0e=VisuMZ[_0x3b531e(0x174)]['Settings'][_0x3b531e(0x2cf)],_0x48f40c={'name':_0x550d0e[_0x3b531e(0x288)],'volume':_0x550d0e[_0x3b531e(0x164)],'pitch':_0x550d0e[_0x3b531e(0x256)],'pan':_0x550d0e[_0x3b531e(0x2bb)]};AudioManager[_0x3b531e(0x179)](_0x48f40c);},SoundManager[_0x2daa2a(0x29b)]=function(){const _0x6a4d79=_0x2daa2a,_0x38843b=VisuMZ['CGGallery'][_0x6a4d79(0x215)][_0x6a4d79(0x2cf)],_0x31d507={'name':_0x38843b['changeName'],'volume':_0x38843b[_0x6a4d79(0x2be)],'pitch':_0x38843b[_0x6a4d79(0x1dd)],'pan':_0x38843b['changePan']};AudioManager[_0x6a4d79(0x179)](_0x31d507);},TextManager['cgGalleryMenuCommand']=VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x187)]['Name'],TextManager['CG_GALLERY']={'category':{'all':VisuMZ['CGGallery'][_0x2daa2a(0x215)]['Vocab'][_0x2daa2a(0x1a9)],'unlisted':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x20d)][_0x2daa2a(0x238)]},'helpDesc':{'all':VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x20d)][_0x2daa2a(0x209)],'unlisted':VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x20d)][_0x2daa2a(0x1b6)],'lockedImg':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x20d)]['LockedHelpDescription']},'buttonAssist':{'border':VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x20d)][_0x2daa2a(0x20e)],'gallery':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x20d)]['ButtonAssistVocab_Gallery'],'next':VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x20d)][_0x2daa2a(0x249)],'prev':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)]['Vocab'][_0x2daa2a(0x1a4)],'reset':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x20d)]['ButtonAssistVocab_Reset'],'zoom':VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x20d)]['ButtonAssistVocab_Zoom']}},SceneManager[_0x2daa2a(0x26b)]=function(){const _0x2f26d9=_0x2daa2a;return this[_0x2f26d9(0x2e6)]&&this[_0x2f26d9(0x2e6)]['constructor']===Scene_Battle;},Game_System[_0x2daa2a(0x17d)]={'autoUnlock':VisuMZ['CGGallery']['Settings'][_0x2daa2a(0x191)][_0x2daa2a(0x1ee)],'unlockAllVariations':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x191)][_0x2daa2a(0x25a)]},VisuMZ[_0x2daa2a(0x174)]['Game_System_initialize']=Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x267)],Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x267)]=function(){const _0x3e2ba2=_0x2daa2a;VisuMZ['CGGallery'][_0x3e2ba2(0x190)][_0x3e2ba2(0x1ea)](this),this['initCgGalleryMainMenu']();},Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x23b)]=function(){const _0x2e26b2=_0x2daa2a;this[_0x2e26b2(0x2a3)]={'shown':VisuMZ[_0x2e26b2(0x174)][_0x2e26b2(0x215)][_0x2e26b2(0x187)]['ShowMainMenu'],'enabled':VisuMZ[_0x2e26b2(0x174)][_0x2e26b2(0x215)]['MainMenu'][_0x2e26b2(0x194)]};},Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x277)]=function(){const _0x2e4946=_0x2daa2a;if(this['_cgGallery_MainMenu']===undefined)this['initCgGalleryMainMenu']();return this['_cgGallery_MainMenu'][_0x2e4946(0x12f)];},Game_System['prototype']['setMainMenuCgGalleryVisible']=function(_0x243a57){const _0x44954b=_0x2daa2a;if(this['_cgGallery_MainMenu']===undefined)this['initCgGalleryMainMenu']();this['_cgGallery_MainMenu'][_0x44954b(0x12f)]=_0x243a57;},Game_System['prototype']['isMainMenuCgGalleryEnabled']=function(){const _0x3401ae=_0x2daa2a;if(this['_cgGallery_MainMenu']===undefined)this['initCgGalleryMainMenu']();return this[_0x3401ae(0x2a3)]['enabled']&&this[_0x3401ae(0x231)]();},Game_System['prototype'][_0x2daa2a(0x1b1)]=function(_0x472ab8){const _0x4be714=_0x2daa2a;if(this[_0x4be714(0x2a3)]===undefined)this[_0x4be714(0x23b)]();this[_0x4be714(0x2a3)]['enabled']=_0x472ab8;},Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x231)]=function(){const _0x2da442=_0x2daa2a;return ConfigManager[_0x2da442(0x134)]()||VisuMZ['CGGallery']['DefaultUnlocks']()['length']>0x0;},Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x26c)]=function(_0x15dd51,_0x5ad259){const _0x4fec93=_0x2daa2a;if(VisuMZ[_0x4fec93(0x174)][_0x4fec93(0x239)]()[_0x4fec93(0x2db)](_0x15dd51))return!![];if(_0x5ad259&&Game_System['CG_GALLERY']['unlockAllVariations'])return!![];if($gameTemp[_0x4fec93(0x208)]&&$gameTemp[_0x4fec93(0x18c)]())return!![];return ConfigManager[_0x4fec93(0x15d)]['includes'](_0x15dd51);},Game_System['prototype'][_0x2daa2a(0x20c)]=function(_0x152e94){const _0x49fbe6=_0x2daa2a;if(ConfigManager['cgGalleryUnlocks'][_0x49fbe6(0x2db)](_0x152e94))return;ConfigManager[_0x49fbe6(0x15d)][_0x49fbe6(0x200)](_0x152e94),ConfigManager[_0x49fbe6(0x15d)][_0x49fbe6(0x29a)](),ConfigManager[_0x49fbe6(0x140)]();},Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x2d6)]=function(_0x15519c){const _0xc0ed8c=_0x2daa2a;return _0x15519c=_0x15519c||_0xc0ed8c(0x240),VisuMZ[_0xc0ed8c(0x174)][_0xc0ed8c(0x258)](_0x15519c);},Game_System[_0x2daa2a(0x183)][_0x2daa2a(0x2c9)]=function(_0x23f92b){const _0x3b8898=_0x2daa2a;_0x23f92b=_0x23f92b||_0x3b8898(0x240);let _0x474cf0=0x0;const _0x541aca=VisuMZ['CGGallery'][_0x3b8898(0x215)][_0x3b8898(0x1a0)];for(const _0x45b476 of _0x541aca){if(!_0x45b476)continue;if(_0x45b476[_0x3b8898(0x158)][_0x3b8898(0x23a)]()['trim']()===_0x3b8898(0x2d5))continue;if(_0x45b476[_0x3b8898(0x158)]['trim']()==='')continue;if(!VisuMZ[_0x3b8898(0x174)][_0x3b8898(0x293)](_0x45b476,_0x23f92b))continue;if(this[_0x3b8898(0x26c)](_0x45b476['Filename']))_0x474cf0++;else continue;for(const _0x566311 of _0x45b476['Variations']){if(_0x566311[_0x3b8898(0x23a)]()[_0x3b8898(0x19f)]()===_0x3b8898(0x2d5))continue;if(_0x566311['trim']()==='')continue;if(this[_0x3b8898(0x26c)](_0x566311,!![]))_0x474cf0++;}}return _0x474cf0;},Game_System['prototype']['cgGalleryCompletionRate']=function(_0x35c9ce){const _0x35b51e=_0x2daa2a;_0x35c9ce=_0x35c9ce||_0x35b51e(0x240);const _0x253e63=this[_0x35b51e(0x2d6)](_0x35c9ce);let _0x30dbec=this['cgGalleryCurrentCount'](_0x35c9ce);return _0x30dbec/_0x253e63;},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x19a)]=Game_Picture[_0x2daa2a(0x183)][_0x2daa2a(0x2ea)],Game_Picture[_0x2daa2a(0x183)][_0x2daa2a(0x2ea)]=function(_0x5d69fa,_0x304081,_0x10c847,_0x2199e0,_0x122d78,_0x12a175,_0x3cc7b9,_0x442453){const _0x5c6f81=_0x2daa2a;VisuMZ[_0x5c6f81(0x174)][_0x5c6f81(0x19a)][_0x5c6f81(0x1ea)](this,_0x5d69fa,_0x304081,_0x10c847,_0x2199e0,_0x122d78,_0x12a175,_0x3cc7b9,_0x442453),Game_System['CG_GALLERY'][_0x5c6f81(0x2d9)]&&$gameSystem['unlockImageForCgGallery'](_0x5d69fa);},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x136)]=Scene_Title[_0x2daa2a(0x183)][_0x2daa2a(0x172)],Scene_Title['prototype'][_0x2daa2a(0x172)]=function(){const _0x5338b4=_0x2daa2a;VisuMZ['CGGallery'][_0x5338b4(0x136)]['call'](this),this[_0x5338b4(0x1e8)]['setHandler']('cgGallery',this[_0x5338b4(0x13c)][_0x5338b4(0x24e)](this));},Scene_Title[_0x2daa2a(0x183)][_0x2daa2a(0x13c)]=function(){const _0x6cac3d=_0x2daa2a;this['_commandWindow']['close'](),SceneManager[_0x6cac3d(0x200)](Scene_CG_Gallery);},VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x1b5)]=Scene_Menu['prototype']['createCommandWindow'],Scene_Menu[_0x2daa2a(0x183)]['createCommandWindow']=function(){const _0x26f35e=_0x2daa2a;VisuMZ['CGGallery'][_0x26f35e(0x1b5)][_0x26f35e(0x1ea)](this);const _0xbd8414=this['_commandWindow'];_0xbd8414[_0x26f35e(0x22d)]('cgGallery',this[_0x26f35e(0x13c)][_0x26f35e(0x24e)](this));},Scene_Menu[_0x2daa2a(0x183)][_0x2daa2a(0x13c)]=function(){SceneManager['push'](Scene_CG_Gallery);};function Scene_CG_Gallery(){this['initialize'](...arguments);}Scene_CG_Gallery[_0x2daa2a(0x183)]=Object[_0x2daa2a(0x2aa)](Scene_MenuBase[_0x2daa2a(0x183)]),Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2ac)]=Scene_CG_Gallery,Scene_CG_Gallery[_0x2daa2a(0x1c2)]=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x237)],Scene_CG_Gallery[_0x2daa2a(0x1d0)]=VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x19d)],Scene_CG_Gallery['CG_WINDOW_BGTYPE']=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x255)],Scene_CG_Gallery[_0x2daa2a(0x1e3)]=VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x191)]['MoveDistance'],Scene_CG_Gallery['prototype'][_0x2daa2a(0x267)]=function(){const _0x2efc1a=_0x2daa2a;Scene_MenuBase['prototype'][_0x2efc1a(0x267)][_0x2efc1a(0x1ea)](this),this[_0x2efc1a(0x20b)]();},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x20b)]=function(){const _0x54d51c=_0x2daa2a;this[_0x54d51c(0x207)]=![],this[_0x54d51c(0x199)]=!![],this['_variationIndex']=0x0,this[_0x54d51c(0x1e5)]=[];},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x142)]=function(){const _0x1c978e=_0x2daa2a;Scene_MenuBase[_0x1c978e(0x183)]['update']['call'](this),this[_0x1c978e(0x207)]&&this[_0x1c978e(0x182)]();},Scene_CG_Gallery[_0x2daa2a(0x183)]['createPageButtons']=function(){const _0x44f63f=_0x2daa2a;Scene_MenuBase[_0x44f63f(0x183)][_0x44f63f(0x276)][_0x44f63f(0x1ea)](this),this[_0x44f63f(0x16f)][_0x44f63f(0x206)](this[_0x44f63f(0x24c)][_0x44f63f(0x24e)](this,![])),this[_0x44f63f(0x2d8)][_0x44f63f(0x206)](this[_0x44f63f(0x24c)]['bind'](this,!![])),this['updatePageButtons']();},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x175)]=function(){return![];return!![];},Scene_CG_Gallery['prototype'][_0x2daa2a(0x2a1)]=function(){const _0x4c3c6e=_0x2daa2a;return this[_0x4c3c6e(0x207)]&&this[_0x4c3c6e(0x199)];},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2aa)]=function(){const _0x248df1=_0x2daa2a;Scene_MenuBase['prototype']['create'][_0x248df1(0x1ea)](this),this['createHelpWindow'](),this['createCategoryWindow'](),this[_0x248df1(0x15b)]();},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x291)]=function(){const _0x5b033f=_0x2daa2a;Scene_MenuBase[_0x5b033f(0x183)][_0x5b033f(0x291)][_0x5b033f(0x1ea)](this);const _0xc2f99e=this[_0x5b033f(0x167)];_0xc2f99e[_0x5b033f(0x18f)](Scene_CG_Gallery[_0x5b033f(0x1c2)]);},Scene_CG_Gallery['prototype'][_0x2daa2a(0x2ba)]=function(){const _0x134c94=_0x2daa2a;if(VisuMZ['CGGallery']['Settings']['Window']['HelpWindow_RectJS'])return VisuMZ[_0x134c94(0x174)][_0x134c94(0x215)][_0x134c94(0x2c0)][_0x134c94(0x1c3)][_0x134c94(0x1ea)](this);const _0x1b38a8=0x0,_0x4f966c=this[_0x134c94(0x133)](),_0x2a12d9=Graphics['boxWidth'],_0x10f713=this['helpAreaHeight']();return new Rectangle(_0x1b38a8,_0x4f966c,_0x2a12d9,_0x10f713);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x253)]=function(){const _0x461059=_0x2daa2a,_0x1a6456=this[_0x461059(0x1d8)](),_0x449071=new Window_CG_Category(_0x1a6456);_0x449071['setHelpWindow'](this[_0x461059(0x167)]),_0x449071['setHandler'](_0x461059(0x18e),this[_0x461059(0x2c4)][_0x461059(0x24e)](this)),_0x449071[_0x461059(0x22d)]('cancel',this[_0x461059(0x1ae)][_0x461059(0x24e)](this)),this[_0x461059(0x1c1)](_0x449071),this[_0x461059(0x1ab)]=_0x449071,_0x449071[_0x461059(0x18f)](Scene_CG_Gallery[_0x461059(0x1d0)]);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x1d8)]=function(){const _0x31eef3=_0x2daa2a;if(VisuMZ['CGGallery'][_0x31eef3(0x215)]['Window'][_0x31eef3(0x26d)])return VisuMZ[_0x31eef3(0x174)]['Settings'][_0x31eef3(0x2c0)][_0x31eef3(0x26d)][_0x31eef3(0x1ea)](this);const _0x39b95e=Graphics[_0x31eef3(0x1e2)],_0x418283=this['calcWindowHeight'](0x1,![]),_0x3f067d=0x0,_0x4dc5f4=this[_0x31eef3(0x166)]();return new Rectangle(_0x3f067d,_0x4dc5f4,_0x39b95e,_0x418283);},Scene_CG_Gallery['prototype'][_0x2daa2a(0x15b)]=function(){const _0x1d4908=_0x2daa2a,_0x53fad5=this[_0x1d4908(0x1a5)](),_0x3d3ca8=new Window_CG_Gallery(_0x53fad5);_0x3d3ca8[_0x1d4908(0x12c)](),_0x3d3ca8[_0x1d4908(0x19e)](),this[_0x1d4908(0x1ab)]['setGalleryWindow'](_0x3d3ca8),_0x3d3ca8[_0x1d4908(0x137)](this['_helpWindow']),_0x3d3ca8[_0x1d4908(0x22d)](_0x1d4908(0x2a9),this[_0x1d4908(0x2d1)][_0x1d4908(0x24e)](this)),_0x3d3ca8['setHandler'](_0x1d4908(0x19b),this[_0x1d4908(0x278)][_0x1d4908(0x24e)](this)),this[_0x1d4908(0x1c1)](_0x3d3ca8),this['_galleryWindow']=_0x3d3ca8,_0x3d3ca8['setBackgroundType'](Scene_CG_Gallery[_0x1d4908(0x1c4)]);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x1a5)]=function(){const _0x5d3e0a=_0x2daa2a;if(VisuMZ[_0x5d3e0a(0x174)]['Settings'][_0x5d3e0a(0x2c0)]['GalleryWindow_RectJS'])return VisuMZ[_0x5d3e0a(0x174)][_0x5d3e0a(0x215)][_0x5d3e0a(0x2c0)][_0x5d3e0a(0x1ff)][_0x5d3e0a(0x1ea)](this);const _0xcdc446=Graphics[_0x5d3e0a(0x1e2)],_0x3ffed8=this[_0x5d3e0a(0x2e8)]()-this['calcWindowHeight'](0x1,![]),_0x4c43b4=0x0,_0x58adb8=this[_0x5d3e0a(0x166)]()+this['calcWindowHeight'](0x1,![]);return new Rectangle(_0x4c43b4,_0x58adb8,_0xcdc446,_0x3ffed8);},Scene_CG_Gallery['prototype']['buttonAssistKey1']=function(){const _0x4c6a44=_0x2daa2a;return this[_0x4c6a44(0x207)]?TextManager[_0x4c6a44(0x264)](_0x4c6a44(0x1d2),_0x4c6a44(0x185)):Scene_MenuBase[_0x4c6a44(0x183)]['buttonAssistKey1'][_0x4c6a44(0x1ea)](this);},Scene_CG_Gallery[_0x2daa2a(0x183)]['buttonAssistKey2']=function(){const _0x36cada=_0x2daa2a;return this[_0x36cada(0x207)]?TextManager[_0x36cada(0x23e)](_0x36cada(0x16e)):Scene_MenuBase['prototype']['buttonAssistKey2'][_0x36cada(0x1ea)](this);},Scene_CG_Gallery[_0x2daa2a(0x183)]['buttonAssistKey3']=function(){const _0x143e77=_0x2daa2a;return this[_0x143e77(0x207)]?TextManager[_0x143e77(0x23e)](_0x143e77(0x204)):Scene_MenuBase[_0x143e77(0x183)][_0x143e77(0x1fa)]['call'](this);},Scene_CG_Gallery['prototype']['buttonAssistText1']=function(){const _0x52637b=_0x2daa2a;return this[_0x52637b(0x207)]?TextManager[_0x52637b(0x17d)][_0x52637b(0x147)][_0x52637b(0x274)]:Scene_MenuBase[_0x52637b(0x183)][_0x52637b(0x1d1)][_0x52637b(0x1ea)](this);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x218)]=function(){const _0x406019=_0x2daa2a;return this['_viewMode']?TextManager[_0x406019(0x17d)]['buttonAssist'][_0x406019(0x21a)]:Scene_MenuBase[_0x406019(0x183)][_0x406019(0x218)][_0x406019(0x1ea)](this);},Scene_CG_Gallery['prototype'][_0x2daa2a(0x2df)]=function(){const _0x17cc02=_0x2daa2a;return this[_0x17cc02(0x207)]?TextManager[_0x17cc02(0x17d)][_0x17cc02(0x147)][_0x17cc02(0x2af)]:Scene_MenuBase[_0x17cc02(0x183)][_0x17cc02(0x2df)]['call'](this);},Scene_CG_Gallery[_0x2daa2a(0x183)]['buttonAssistText4']=function(){const _0x21b788=_0x2daa2a;return this[_0x21b788(0x207)]?this[_0x21b788(0x1d3)]>=this[_0x21b788(0x1e5)][_0x21b788(0x2b0)]-0x1?TextManager[_0x21b788(0x17d)][_0x21b788(0x147)][_0x21b788(0x2e1)]:TextManager[_0x21b788(0x17d)][_0x21b788(0x147)][_0x21b788(0x1b7)]:Scene_MenuBase[_0x21b788(0x183)][_0x21b788(0x245)][_0x21b788(0x1ea)](this);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x21f)]=function(){const _0x139ff4=_0x2daa2a;return this[_0x139ff4(0x207)]?this[_0x139ff4(0x1d3)]<=0x0?TextManager[_0x139ff4(0x17d)]['buttonAssist'][_0x139ff4(0x2e1)]:TextManager[_0x139ff4(0x17d)][_0x139ff4(0x147)][_0x139ff4(0x1f5)]:Scene_MenuBase['prototype']['buttonAssistText5']['call'](this);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x1bb)]=function(){const _0x321d90=_0x2daa2a;Scene_MenuBase[_0x321d90(0x183)][_0x321d90(0x1bb)][_0x321d90(0x1ea)](this),this['setBackgroundOpacity'](this['getBackgroundOpacity']()),this['createCustomBackgroundImages'](),this[_0x321d90(0x1dc)](),this[_0x321d90(0x1d6)]();},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2eb)]=function(){const _0x21308b=_0x2daa2a;return VisuMZ[_0x21308b(0x174)][_0x21308b(0x215)][_0x21308b(0x16c)][_0x21308b(0x24d)];},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x20a)]=function(){const _0x2ebf58=_0x2daa2a,_0x95e346=VisuMZ[_0x2ebf58(0x174)][_0x2ebf58(0x215)][_0x2ebf58(0x16c)];_0x95e346&&(_0x95e346[_0x2ebf58(0x1d9)]!==''||_0x95e346[_0x2ebf58(0x157)]!=='')&&(this['_backSprite1']=new Sprite(ImageManager[_0x2ebf58(0x1e4)](_0x95e346['BgFilename1'])),this[_0x2ebf58(0x1cf)]=new Sprite(ImageManager[_0x2ebf58(0x2ad)](_0x95e346[_0x2ebf58(0x157)])),this[_0x2ebf58(0x225)](this[_0x2ebf58(0x1bd)]),this[_0x2ebf58(0x225)](this[_0x2ebf58(0x1cf)]),this[_0x2ebf58(0x1bd)][_0x2ebf58(0x15e)][_0x2ebf58(0x2c6)](this[_0x2ebf58(0x177)][_0x2ebf58(0x24e)](this,this[_0x2ebf58(0x1bd)])),this[_0x2ebf58(0x1cf)][_0x2ebf58(0x15e)][_0x2ebf58(0x2c6)](this[_0x2ebf58(0x177)]['bind'](this,this[_0x2ebf58(0x1cf)])));},Scene_CG_Gallery['prototype']['createBlackBackgroundImage']=function(){const _0xd2216f=_0x2daa2a;this[_0xd2216f(0x1c0)]=new Sprite(),this['addChild'](this[_0xd2216f(0x1c0)]),this['_blackBgSprite'][_0xd2216f(0x15e)]=new Bitmap(0x1,0x1),this[_0xd2216f(0x1c0)][_0xd2216f(0x15e)][_0xd2216f(0x1ad)](0x0,0x0,0x1,0x1,'black'),this[_0xd2216f(0x1c0)][_0xd2216f(0x13f)]['x']=Graphics[_0xd2216f(0x146)],this[_0xd2216f(0x1c0)][_0xd2216f(0x13f)]['y']=Graphics[_0xd2216f(0x286)],this['_blackBgSprite'][_0xd2216f(0x1ba)]=0x0;},Scene_CG_Gallery[_0x2daa2a(0x183)]['createViewSprite']=function(){const _0x275dc5=_0x2daa2a,_0x25ce05=new Sprite();_0x25ce05[_0x275dc5(0x15e)]=new Bitmap(0x64,0x64),_0x25ce05[_0x275dc5(0x1ba)]=0x0,this[_0x275dc5(0x1b0)]=_0x25ce05,this['addChild'](_0x25ce05),this['adjustSpriteDown'](_0x25ce05);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x177)]=function(_0x2d2f84){const _0x35511=_0x2daa2a;this[_0x35511(0x148)](_0x2d2f84),this['centerSprite'](_0x2d2f84);},Scene_CG_Gallery['prototype'][_0x2daa2a(0x196)]=function(_0x55def0){const _0x717932=_0x2daa2a;this[_0x717932(0x262)](_0x55def0),this[_0x717932(0x29c)](_0x55def0);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x262)]=function(_0x6cadf0){const _0x2bac81=_0x2daa2a,_0x3ac0b1=Graphics[_0x2bac81(0x146)]/_0x6cadf0[_0x2bac81(0x15e)][_0x2bac81(0x146)],_0x15f29c=Graphics['height']/_0x6cadf0['bitmap'][_0x2bac81(0x286)],_0x4132a0=Math[_0x2bac81(0x213)](_0x3ac0b1,_0x15f29c,0x1);_0x6cadf0[_0x2bac81(0x13f)]['x']=_0x4132a0,_0x6cadf0['scale']['y']=_0x4132a0;},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2c4)]=function(){const _0x405152=_0x2daa2a;this[_0x405152(0x1ab)][_0x405152(0x12c)](),this[_0x405152(0x17b)][_0x405152(0x23f)](),this[_0x405152(0x17b)][_0x405152(0x297)](),this[_0x405152(0x17b)][_0x405152(0x2c5)]()<0x0&&this['_galleryWindow'][_0x405152(0x29f)](0x0);},Scene_CG_Gallery['prototype']['onCategoryCancel']=function(){const _0x5d25ec=_0x2daa2a;this[_0x5d25ec(0x1ab)][_0x5d25ec(0x23f)](),this[_0x5d25ec(0x17b)][_0x5d25ec(0x12c)]();},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2d1)]=function(){const _0x5f0052=_0x2daa2a,_0x299f78=this[_0x5f0052(0x17b)]['currentExt']();if(!_0x299f78){this[_0x5f0052(0x17b)]['activate']();return;}this[_0x5f0052(0x1e5)]=[_0x299f78[_0x5f0052(0x158)]];for(const _0x3568cc of _0x299f78[_0x5f0052(0x273)]){if(_0x3568cc[_0x5f0052(0x23a)]()[_0x5f0052(0x19f)]()==='untitled')continue;if(_0x3568cc['trim']()==='')continue;$gameSystem[_0x5f0052(0x26c)](_0x3568cc,!![])&&this[_0x5f0052(0x1e5)][_0x5f0052(0x200)](_0x3568cc);}this['_viewSprite']['bitmap']=ImageManager[_0x5f0052(0x2bf)](_0x299f78[_0x5f0052(0x158)]),this['_viewSprite']['bitmap'][_0x5f0052(0x2c6)](this[_0x5f0052(0x170)][_0x5f0052(0x24e)](this)),Input[_0x5f0052(0x1cd)](),TouchInput[_0x5f0052(0x1cd)]();},Scene_CG_Gallery[_0x2daa2a(0x183)]['startViewMode']=function(){const _0x2b68fe=_0x2daa2a;this[_0x2b68fe(0x207)]=!![],this[_0x2b68fe(0x1d3)]=0x0,this[_0x2b68fe(0x199)]=!![],this[_0x2b68fe(0x167)][_0x2b68fe(0x156)](),this[_0x2b68fe(0x1ab)][_0x2b68fe(0x156)](),this[_0x2b68fe(0x17b)][_0x2b68fe(0x156)](),this[_0x2b68fe(0x196)](this[_0x2b68fe(0x1b0)]),this['_viewSprite'][_0x2b68fe(0x1ba)]=0xff,this[_0x2b68fe(0x1c0)][_0x2b68fe(0x1ba)]=0xff;},Scene_CG_Gallery['prototype'][_0x2daa2a(0x17c)]=function(){const _0x464549=_0x2daa2a;this['_viewMode']=![],this['_variationIndex']=0x0,this[_0x464549(0x199)]=![],this['updatePageButtons'](),this[_0x464549(0x167)][_0x464549(0x2ea)](),this[_0x464549(0x1ab)]['show'](),this[_0x464549(0x17b)][_0x464549(0x2ea)](),this[_0x464549(0x17b)]['activate']();if(this[_0x464549(0x165)])this['_buttonAssistWindow'][_0x464549(0x15c)]=!![];if(this[_0x464549(0x2a8)])this[_0x464549(0x2a8)]['visible']=!![];this[_0x464549(0x1b0)][_0x464549(0x1ba)]=0x0,this[_0x464549(0x1c0)][_0x464549(0x1ba)]=0x0,Input[_0x464549(0x1cd)](),TouchInput[_0x464549(0x1cd)]();},Scene_CG_Gallery[_0x2daa2a(0x183)]['updateViewMode']=function(){const _0x12edbb=_0x2daa2a,_0x228263=0x14;if(Input['isRepeated']('cancel'))this[_0x12edbb(0x241)]();else{if(Input[_0x12edbb(0x22b)]('ok'))this['processViewModeOk']();else{if(Input[_0x12edbb(0x22b)](_0x12edbb(0x204)))this[_0x12edbb(0x28d)]();else{if(Input['isRepeated'](_0x12edbb(0x16e)))this[_0x12edbb(0x1cb)]();else{if(Input[_0x12edbb(0x22b)]('pageup')||TouchInput[_0x12edbb(0x24f)]<=-_0x228263)this[_0x12edbb(0x154)](!![]);else{if(Input['isRepeated'](_0x12edbb(0x185))||TouchInput[_0x12edbb(0x24f)]>=_0x228263)this[_0x12edbb(0x154)](![]);else{if(Input[_0x12edbb(0x2da)]>0x0)this[_0x12edbb(0x280)](Input['dir8']);else{if(TouchInput['isPressed']())this[_0x12edbb(0x2e5)]();else TouchInput[_0x12edbb(0x162)]()&&this[_0x12edbb(0x29d)]();}}}}}}}},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x241)]=function(){const _0x10db18=_0x2daa2a;this[_0x10db18(0x1d3)]<=0x0?(SoundManager[_0x10db18(0x2a2)](),this['exitViewMode']()):this[_0x10db18(0x24c)](![]);},Scene_CG_Gallery[_0x2daa2a(0x183)]['processVariationChange']=function(_0xc7fca0){const _0x5598de=_0x2daa2a,_0x513ce2=this[_0x5598de(0x1d3)];this[_0x5598de(0x1d3)]+=_0xc7fca0?0x1:-0x1,this[_0x5598de(0x1d3)]=this['_variationIndex'][_0x5598de(0x1ef)](0x0,this[_0x5598de(0x1e5)][_0x5598de(0x2b0)]-0x1);if(_0x513ce2!==this['_variationIndex']){const _0x45f699=this[_0x5598de(0x1e5)][this[_0x5598de(0x1d3)]];this[_0x5598de(0x1b0)][_0x5598de(0x15e)]=ImageManager[_0x5598de(0x2bf)](_0x45f699),SoundManager['playNextCgVariation'](),this[_0x5598de(0x196)](this['_viewSprite']);}},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x270)]=function(){const _0x4f322f=_0x2daa2a;this[_0x4f322f(0x1d3)]>=this[_0x4f322f(0x1e5)][_0x4f322f(0x2b0)]-0x1?(SoundManager[_0x4f322f(0x2a2)](),this[_0x4f322f(0x17c)]()):this['processVariationChange'](!![]);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x28d)]=function(){const _0x152fb2=_0x2daa2a;SoundManager[_0x152fb2(0x244)](),this[_0x152fb2(0x196)](this['_viewSprite']),this[_0x152fb2(0x1b0)][_0x152fb2(0x1ba)]=0xff,this[_0x152fb2(0x1c0)]['opacity']=0xff;},Scene_CG_Gallery['prototype'][_0x2daa2a(0x1cb)]=function(){const _0x5d848e=_0x2daa2a;SoundManager[_0x5d848e(0x244)](),this[_0x5d848e(0x199)]=!this[_0x5d848e(0x199)],this[_0x5d848e(0x165)]&&(this[_0x5d848e(0x165)]['visible']=this[_0x5d848e(0x199)]),this[_0x5d848e(0x2a8)]&&(this[_0x5d848e(0x2a8)][_0x5d848e(0x15c)]=this[_0x5d848e(0x199)]),this[_0x5d848e(0x16f)]&&this[_0x5d848e(0x2d8)]&&(this[_0x5d848e(0x16f)]['visible']=this['_viewModeVisible'],this[_0x5d848e(0x2d8)][_0x5d848e(0x15c)]=this[_0x5d848e(0x199)]);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x154)]=function(_0x47c858){const _0x509b52=_0x2daa2a;let _0x370a9f=this[_0x509b52(0x1b0)][_0x509b52(0x13f)]['x'];const _0x1b0486=_0x370a9f;_0x370a9f+=_0x47c858?0.1:-0.1,_0x370a9f=Number(_0x370a9f['toFixed'](0x1)),this[_0x509b52(0x1b0)][_0x509b52(0x13f)]['x']=_0x370a9f[_0x509b52(0x1ef)](0.1,0x4),this[_0x509b52(0x1b0)][_0x509b52(0x13f)]['y']=_0x370a9f['clamp'](0.1,0x4),_0x1b0486!==this[_0x509b52(0x1b0)]['scale']['x']&&SoundManager[_0x509b52(0x257)]();},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x280)]=function(_0x54361f){const _0x367d02=_0x2daa2a,_0x67e050=Scene_CG_Gallery['CG_WINDOW_MOVE_DIST'];switch(_0x54361f){case 0x7:case 0x4:case 0x1:this[_0x367d02(0x1b0)]['x']-=_0x67e050;break;case 0x9:case 0x6:case 0x3:this[_0x367d02(0x1b0)]['x']+=_0x67e050;break;}switch(_0x54361f){case 0x1:case 0x2:case 0x3:this[_0x367d02(0x1b0)]['y']+=_0x67e050;break;case 0x7:case 0x8:case 0x9:this[_0x367d02(0x1b0)]['y']-=_0x67e050;break;}this[_0x367d02(0x1b0)]['x']=this[_0x367d02(0x1b0)]['x']['clamp'](0x0,Graphics['width']),this[_0x367d02(0x1b0)]['y']=this[_0x367d02(0x1b0)]['y'][_0x367d02(0x1ef)](0x0,Graphics[_0x367d02(0x286)]);},Scene_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2e5)]=function(){const _0x22cf8f=_0x2daa2a,_0x2e1aa5=this[_0x22cf8f(0x2a8)]?Math[_0x22cf8f(0x25f)](this['_cancelButton'][_0x22cf8f(0x146)]*1.3):0x0;TouchInput['x']>_0x2e1aa5&&TouchInput['x']<Graphics['width']-_0x2e1aa5&&(TouchInput['y']>_0x2e1aa5&&TouchInput['y']<Graphics[_0x22cf8f(0x286)]-_0x2e1aa5&&(this[_0x22cf8f(0x1b0)]['x']=TouchInput['x']['clamp'](0x0,Graphics[_0x22cf8f(0x146)]),this['_viewSprite']['y']=TouchInput['y'][_0x22cf8f(0x1ef)](0x0,Graphics[_0x22cf8f(0x286)])));},Scene_CG_Gallery[_0x2daa2a(0x183)]['processViewModeTouchRelease']=function(){const _0x1a4edc=_0x2daa2a,_0x1e7612=this[_0x1a4edc(0x2a8)]?Math['round'](this['_cancelButton'][_0x1a4edc(0x146)]*1.05):0x0;TouchInput['x']>_0x1e7612&&TouchInput['x']<Graphics[_0x1a4edc(0x146)]-_0x1e7612&&((TouchInput['y']<_0x1e7612||TouchInput['y']>Graphics[_0x1a4edc(0x286)]-_0x1e7612)&&this[_0x1a4edc(0x1cb)]());},VisuMZ[_0x2daa2a(0x174)]['Window_MenuCommand_addOriginalCommands']=Window_MenuCommand[_0x2daa2a(0x183)][_0x2daa2a(0x261)],Window_MenuCommand[_0x2daa2a(0x183)]['addOriginalCommands']=function(){const _0x386e0c=_0x2daa2a;VisuMZ[_0x386e0c(0x174)][_0x386e0c(0x1f6)]['call'](this),this['addCgGalleryCommand']();},Window_MenuCommand[_0x2daa2a(0x183)]['addCgGalleryCommand']=function(){const _0x1609ba=_0x2daa2a;if(!this[_0x1609ba(0x173)]())return;if(!this[_0x1609ba(0x1f7)]())return;const _0x5977b3=TextManager[_0x1609ba(0x12e)],_0x1ba0f8=this[_0x1609ba(0x144)]();this[_0x1609ba(0x28e)](_0x5977b3,_0x1609ba(0x1b9),_0x1ba0f8);},Window_MenuCommand['prototype'][_0x2daa2a(0x173)]=function(){const _0x1f60a5=_0x2daa2a;return Imported[_0x1f60a5(0x27e)]?![]:!![];},Window_MenuCommand['prototype']['isCgGalleryCommandVisible']=function(){const _0x3a7dea=_0x2daa2a;return $gameSystem[_0x3a7dea(0x277)]();},Window_MenuCommand['prototype']['isCgGalleryCommandEnabled']=function(){const _0xf68352=_0x2daa2a;return $gameSystem[_0xf68352(0x294)]();},Window_TitleCommand[_0x2daa2a(0x265)]=VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x187)]['ShowTitleCommand'],VisuMZ[_0x2daa2a(0x174)]['Window_TitleCommand_makeCommandList']=Window_TitleCommand[_0x2daa2a(0x183)]['makeCommandList'],Window_TitleCommand[_0x2daa2a(0x183)][_0x2daa2a(0x248)]=function(){const _0x3d2fa4=_0x2daa2a;VisuMZ[_0x3d2fa4(0x174)]['Window_TitleCommand_makeCommandList']['call'](this),this[_0x3d2fa4(0x26e)]();},Window_TitleCommand[_0x2daa2a(0x183)][_0x2daa2a(0x26e)]=function(){const _0x36728b=_0x2daa2a;if(!Window_TitleCommand['CG_GALLERY_ADD_COMMAND'])return;if(this['findSymbol']('cgGallery')>=0x0)return;const _0x475dbf=TextManager[_0x36728b(0x12e)],_0x38142f=$gameSystem[_0x36728b(0x231)]();this[_0x36728b(0x28e)](_0x475dbf,_0x36728b(0x1b9),_0x38142f);const _0x1068ed=this[_0x36728b(0x24b)](_0x36728b(0x1cc));if(_0x1068ed>0x0){const _0x272a07=this[_0x36728b(0x298)][_0x36728b(0x1ca)]();this[_0x36728b(0x298)][_0x36728b(0x2ab)](_0x1068ed,0x0,_0x272a07);}};function Window_CG_Category(){const _0x323076=_0x2daa2a;this[_0x323076(0x267)](...arguments);}Window_CG_Category[_0x2daa2a(0x183)]=Object[_0x2daa2a(0x2aa)](Window_HorzCommand[_0x2daa2a(0x183)]),Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x2ac)]=Window_CG_Category,Window_CG_Category[_0x2daa2a(0x169)]=VisuMZ['CGGallery']['Settings'][_0x2daa2a(0x232)],Window_CG_Category[_0x2daa2a(0x178)]=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x25d)],Window_CG_Category[_0x2daa2a(0x1d5)]=VisuMZ[_0x2daa2a(0x174)]['Settings']['Window']['CategoryWindow_TextAlign'],Window_CG_Category[_0x2daa2a(0x143)]=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x251)],Window_CG_Category[_0x2daa2a(0x19c)]=VisuMZ[_0x2daa2a(0x174)]['Settings']['Window'][_0x2daa2a(0x1e9)],Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x267)]=function(_0x1a3476){const _0x373cbf=_0x2daa2a;Window_HorzCommand[_0x373cbf(0x183)][_0x373cbf(0x267)][_0x373cbf(0x1ea)](this,_0x1a3476),this['createCommandNameWindow'](_0x1a3476);},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x1c9)]=function(){const _0x4ebb27=_0x2daa2a;return this[_0x4ebb27(0x2ae)]();},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x1b2)]=function(_0x2a2bf4){const _0x56e306=_0x2daa2a,_0x59259f=new Rectangle(0x0,0x0,_0x2a2bf4[_0x56e306(0x146)],_0x2a2bf4['height']);this[_0x56e306(0x29e)]=new Window_Base(_0x59259f),this['_commandNameWindow'][_0x56e306(0x1ba)]=0x0,this[_0x56e306(0x225)](this['_commandNameWindow']),this[_0x56e306(0x250)]();},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x292)]=function(){const _0x148a5d=_0x2daa2a;Window_HorzCommand['prototype'][_0x148a5d(0x292)]['call'](this);if(this[_0x148a5d(0x29e)])this[_0x148a5d(0x250)]();},Window_CG_Category['prototype'][_0x2daa2a(0x250)]=function(){const _0x52740a=_0x2daa2a,_0x3890ff=this['_commandNameWindow'];_0x3890ff[_0x52740a(0x268)][_0x52740a(0x1cd)]();const _0xa5659=this[_0x52740a(0x2c2)](this[_0x52740a(0x2c5)]());if(_0xa5659===_0x52740a(0x2bd)){const _0x2f5bd1=this['itemLineRect'](this[_0x52740a(0x2c5)]());let _0x3d9fc0=this['commandName'](this['index']());_0x3d9fc0=_0x3d9fc0[_0x52740a(0x2b2)](/\\I\[(\d+)\]/gi,''),_0x3890ff[_0x52740a(0x219)](),this[_0x52740a(0x211)](_0x3d9fc0,_0x2f5bd1),this['commandNameWindowDrawText'](_0x3d9fc0,_0x2f5bd1),this[_0x52740a(0x2d3)](_0x3d9fc0,_0x2f5bd1);}},Window_CG_Category[_0x2daa2a(0x183)]['commandNameWindowDrawBackground']=function(_0xb15a5d,_0x22fe6e){},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x2ed)]=function(_0x4db327,_0x56dad6){const _0x35b8a9=_0x2daa2a,_0x54da42=this[_0x35b8a9(0x29e)];_0x54da42['drawText'](_0x4db327,0x0,_0x56dad6['y'],_0x54da42[_0x35b8a9(0x2cd)],_0x35b8a9(0x189));},Window_CG_Category['prototype']['commandNameWindowCenter']=function(_0x18e3eb,_0x4732c6){const _0x627324=_0x2daa2a,_0x4d4b90=this['_commandNameWindow'],_0x1a675e=$gameSystem[_0x627324(0x212)](),_0x438b22=_0x4732c6['x']+Math['floor'](_0x4732c6[_0x627324(0x146)]/0x2)+_0x1a675e;_0x4d4b90['x']=_0x4d4b90['width']/-0x2+_0x438b22,_0x4d4b90['y']=Math[_0x627324(0x25b)](_0x4732c6[_0x627324(0x286)]/0x2);},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x223)]=function(){const _0x513022=_0x2daa2a;let _0x32b59c=Window_CG_Category[_0x513022(0x169)][_0x513022(0x2b0)];if(Window_CG_Category['ADD_ALL_COMMAND'])_0x32b59c+=0x1;if(VisuMZ[_0x513022(0x174)]['HasUnlistedCategories']())_0x32b59c+=0x1;return _0x32b59c;},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x248)]=function(){const _0x57028e=_0x2daa2a;this[_0x57028e(0x22c)](),this[_0x57028e(0x1ed)](),this[_0x57028e(0x2ce)]();},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x22c)]=function(){const _0x49494e=_0x2daa2a;if(!Window_CG_Category['ADD_ALL_COMMAND'])return;const _0x3807b7=_0x49494e(0x18e),_0xbf5f53=ImageManager[_0x49494e(0x17d)][_0x49494e(0x16a)][_0x49494e(0x240)];let _0x2e6aa3=TextManager[_0x49494e(0x17d)][_0x49494e(0x18e)][_0x49494e(0x240)];_0xbf5f53>0x0&&this[_0x49494e(0x21c)]()!=='text'&&(_0x2e6aa3=_0x49494e(0x287)[_0x49494e(0x210)](_0xbf5f53,_0x2e6aa3));const _0x190761={'Key':_0x49494e(0x240),'Description':TextManager[_0x49494e(0x17d)][_0x49494e(0x25e)][_0x49494e(0x240)]};this['addCommand'](_0x2e6aa3,_0x3807b7,!![],_0x190761);},Window_CG_Category['prototype']['addCommandListCommands']=function(){const _0x29a247=_0x2daa2a;for(const _0x440206 of Window_CG_Category[_0x29a247(0x169)]){const _0x3995fe=_0x29a247(0x18e),_0x2e713a=_0x440206[_0x29a247(0x1e6)];let _0x40b8b7=_0x440206[_0x29a247(0x18d)];if(['','Untitled'][_0x29a247(0x2db)](_0x40b8b7))continue;_0x2e713a>0x0&&this[_0x29a247(0x21c)]()!==_0x29a247(0x1aa)&&(_0x40b8b7=_0x29a247(0x287)['format'](_0x2e713a,_0x40b8b7)),this[_0x29a247(0x28e)](_0x40b8b7,_0x3995fe,!![],_0x440206);}},Window_CG_Category['prototype']['addUnlistedCommand']=function(){const _0x3ef5d7=_0x2daa2a;if(!Window_CG_Category['SHOW_UNLISTED_COMMAND'])return;if(!VisuMZ[_0x3ef5d7(0x174)]['HasUnlistedCategories']())return;const _0xbfafc5=_0x3ef5d7(0x18e),_0x43c066=ImageManager[_0x3ef5d7(0x17d)][_0x3ef5d7(0x16a)]['unlisted'];let _0x499cbc=TextManager['CG_GALLERY']['category']['unlisted'];_0x43c066>0x0&&this[_0x3ef5d7(0x21c)]()!==_0x3ef5d7(0x1aa)&&(_0x499cbc=_0x3ef5d7(0x287)[_0x3ef5d7(0x210)](_0x43c066,_0x499cbc));const _0x54f73c={'Key':_0x3ef5d7(0x240),'Description':TextManager['CG_GALLERY']['helpDesc'][_0x3ef5d7(0x12d)]};this[_0x3ef5d7(0x28e)](_0x499cbc,_0xbfafc5,!![],_0x54f73c);},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x1c8)]=function(){const _0x47f761=_0x2daa2a;this['_helpWindow'][_0x47f761(0x150)](this[_0x47f761(0x1a3)]()?this[_0x47f761(0x1a3)]()[_0x47f761(0x2e2)]:''),this[_0x47f761(0x224)]();},Window_CG_Category['prototype']['itemTextAlign']=function(){return Window_CG_Category['TEXT_ALIGN'];},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x1bf)]=function(_0x34ac19){const _0x25d50c=_0x2daa2a,_0x5b1365=this[_0x25d50c(0x2c2)](_0x34ac19);if(_0x5b1365==='iconText')this[_0x25d50c(0x2e3)](_0x34ac19);else _0x5b1365===_0x25d50c(0x2bd)?this['drawItemStyleIcon'](_0x34ac19):Window_HorzCommand[_0x25d50c(0x183)][_0x25d50c(0x1bf)]['call'](this,_0x34ac19);},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x21c)]=function(){const _0x38f698=_0x2daa2a;return Window_CG_Category[_0x38f698(0x178)];},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x2c2)]=function(_0xd9c92d){const _0x12a4ff=_0x2daa2a;if(_0xd9c92d<0x0)return _0x12a4ff(0x1aa);const _0x5c5f80=this[_0x12a4ff(0x21c)]();if(_0x5c5f80!==_0x12a4ff(0x27f))return _0x5c5f80;else{if(this[_0x12a4ff(0x1df)]()>0x0){const _0x3aae91=this[_0x12a4ff(0x17a)](_0xd9c92d);if(_0x3aae91[_0x12a4ff(0x282)](/\\I\[(\d+)\]/i)){const _0xd83c6d=this['itemLineRect'](_0xd9c92d),_0x49d5ec=this[_0x12a4ff(0x2b5)](_0x3aae91)['width'];return _0x49d5ec<=_0xd83c6d['width']?'iconText':_0x12a4ff(0x2bd);}}}return _0x12a4ff(0x1aa);},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x2e3)]=function(_0x3f86d4){const _0x294f6e=_0x2daa2a,_0x240870=this[_0x294f6e(0x13e)](_0x3f86d4),_0x197c71=this[_0x294f6e(0x17a)](_0x3f86d4),_0x17b306=this[_0x294f6e(0x2b5)](_0x197c71)[_0x294f6e(0x146)];this[_0x294f6e(0x2a5)](this[_0x294f6e(0x290)](_0x3f86d4));const _0x214b9c=this[_0x294f6e(0x2a4)]();if(_0x214b9c===_0x294f6e(0x2cb))this[_0x294f6e(0x2c3)](_0x197c71,_0x240870['x']+_0x240870[_0x294f6e(0x146)]-_0x17b306,_0x240870['y'],_0x17b306);else{if(_0x214b9c===_0x294f6e(0x189)){const _0x564dac=_0x240870['x']+Math[_0x294f6e(0x25b)]((_0x240870[_0x294f6e(0x146)]-_0x17b306)/0x2);this[_0x294f6e(0x2c3)](_0x197c71,_0x564dac,_0x240870['y'],_0x17b306);}else this[_0x294f6e(0x2c3)](_0x197c71,_0x240870['x'],_0x240870['y'],_0x17b306);}},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x1b4)]=function(_0x3b8fdd){const _0x3808d3=_0x2daa2a;this['commandName'](_0x3b8fdd)['match'](/\\I\[(\d+)\]/i);const _0x307edd=Number(RegExp['$1'])||0x0,_0x6e1cb0=this['itemLineRect'](_0x3b8fdd),_0x1a7145=_0x6e1cb0['x']+Math['floor']((_0x6e1cb0['width']-ImageManager[_0x3808d3(0x259)])/0x2),_0x44cfe5=_0x6e1cb0['y']+(_0x6e1cb0[_0x3808d3(0x286)]-ImageManager['iconHeight'])/0x2;this[_0x3808d3(0x28b)](_0x307edd,_0x1a7145,_0x44cfe5);},Window_CG_Category['prototype'][_0x2daa2a(0x26f)]=function(_0x1f8164){const _0xa91c8e=_0x2daa2a;this[_0xa91c8e(0x17b)]=_0x1f8164,this[_0xa91c8e(0x224)]();},Window_CG_Category[_0x2daa2a(0x183)][_0x2daa2a(0x224)]=function(){const _0x133374=_0x2daa2a;if(!this[_0x133374(0x17b)])return;const _0x4a0319=this[_0x133374(0x1a3)]()[_0x133374(0x188)][_0x133374(0x23a)]()[_0x133374(0x19f)]();this[_0x133374(0x17b)][_0x133374(0x14f)](_0x4a0319);};function Window_CG_Gallery(){const _0x5684f6=_0x2daa2a;this[_0x5684f6(0x267)](...arguments);}function _0x1865(){const _0x5c4631=['viewPitch','playCursor','CgGalleryTotalSize','iconWidth','AutoUnlockVariations','floor','padding','CategoryWindow_Style','helpDesc','round','GalleryWindow_ImageBuffer','addOriginalCommands','scaleSpriteDown','22IByPnL','getInputMultiButtonStrings','CG_GALLERY_ADD_COMMAND','GalleryWindow_Text_VariationsShow','initialize','contents','fontSize','GalleryWindow_Text_VariationComplete','isSceneBattle','isCgGalleryUnlocked','CategoryWindow_RectJS','addCgGalleryCommand','setGalleryWindow','processViewModeOk','IsCgGalleryListing','GalleryWindow_Text_ProgressFontFace','Variations','zoom','61192TpPKvy','createPageButtons','isMainMenuCgGalleryVisible','onCategoryCancel','gray','setTopRow','SystemShowCGGalleryMenu','drawItemBackground','_scrollTargetY','VisuMZ_1_MainMenuCore','auto','processViewModeMove','updateProgressSpriteBitmap','match','textFmt','GalleryWindow_Text_CompletionFmt','maxScrollX','height','\x5cI[%1]%2','viewName','_hasUnlistedCategories','LockedImgFilename','drawIcon','ARRAYSTR','processViewModeReset','addCommand','79057RLvlPx','isCommandEnabled','createHelpWindow','callUpdateHelp','listingMatchesCategory','isMainMenuCgGalleryEnabled','GalleryWindow_Text_VariationsShowSingles','playOkSound','reselect','_list','colSpacing','sort','playNextCgVariation','centerSprite','processViewModeTouchRelease','_commandNameWindow','select','exit','arePageButtonsEnabled','playCancel','_cgGallery_MainMenu','itemTextAlign','changePaintOpacity','imageSmoothingEnabled','_category','_cancelButton','listing','create','splice','constructor','loadTitle2','lineHeight','reset','length','updateCompletionSpriteBitmap','replace','4XvXmLY','xAlign','textSizeEx','smoothScrollTo','paintOpacity','GalleryWindow_Text_CompletionFontSize2','fontSize2','helpWindowRect','viewPan','isWheelScrollEnabled','icon','changeVolume','loadPicture','Window','fontFace','commandStyleCheck','drawTextEx','commandCategory','index','addLoadListener','441JcgTAp','_progressSprite','cgGalleryCurrentCount','GalleryWindow_SpacingCols','right','Show','innerWidth','addUnlistedCommand','Sound','Category','prepareViewMode','DefaultUnlocked','commandNameWindowCenter','GalleryWindow_Text_ProgressFmt','untitled','cgGalleryTotalSize','angle','_pagedownButton','autoUnlock','dir8','includes','GalleryWindow_Text_CompletionAngle','_customModified','GalleryWindow_Text_ProgressOffsetX','buttonAssistText3','ConfigManager_applyData','gallery','Description','drawItemStyleIconText','74816mAHEVX','processViewModeMouseMove','_scene','drawPicture','mainAreaHeight','decimals','show','getBackgroundOpacity','ConfigManager_makeData','commandNameWindowDrawText','deactivate','unlisted','cgGalleryMenuCommand','shown','COL_SPACING','undefined','outlineColor','helpAreaTop','cgGalleryHasUnlockedImage','variantComplete','Scene_Title_createCommandWindow','setHelpWindow','ARRAYSTRUCT','IMG_BUFFER','rowSpacing','offset','commandCgGallery','1129215jyuIjN','itemLineRect','scale','save','361506uuxvwb','update','ADD_ALL_COMMAND','isCgGalleryCommandEnabled','GalleryWindow_Text_CompletionDecimals','width','buttonAssist','scaleSprite','_defaultUnlocks','DRAW_ITEM_BACKGROUND','parse','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','636JVVcJq','4328736rEAoAl','setCategory','setText','anchor','scrollBaseX','drawVariationCount','processViewModeScale','map','hide','BgFilename2','Filename','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','CG_ResetAllImagesPerma','createGalleryWindow','visible','cgGalleryUnlocks','bitmap','STAGGER_LEFT','createProgressSprite','status','isReleased','STRUCT','viewVolume','_buttonAssistWindow','mainAreaTop','_helpWindow','rgba(0,\x200,\x200,\x200)','COMMAND_LIST','icons','createCompletionSprite','BgSettings','JSON','shift','_pageupButton','startViewMode','return\x200','createCommandWindow','addCgGalleryCommandAutomatically','CGGallery','needsPageButtons','itemRect','adjustSprite','COMMAND_STYLE','playSe','commandName','_galleryWindow','exitViewMode','CG_GALLERY','drawCircle','itemRectWithPadding','CG_UnlockAllImagesPerma','_scrollTargetX','updateViewMode','prototype','hideForSingles','pagedown','percentFmt','MainMenu','Key','center','320WIdONA','GalleryWindow_Stagger','isPlaytest','Text','category','setBackgroundType','Game_System_initialize','System','name','SceneOpenCgGallery','EnableMainMenu','Arial','adjustSpriteDown','GalleryWindow_Text_ProgressAngle','_completionSprite','_viewModeVisible','Game_Picture_show','cancel','SHOW_UNLISTED_COMMAND','CategoryWindow_BgType','deselect','trim','Listing','GalleryWindow_Text_ProgressVocab','version','currentExt','ButtonAssistVocab_Prev','galleryWindowRect','GalleryWindow_StaggerToLeft','COMPLETION_SPRITE','ROW_SPACING','AllCommandText','text','_categoryWindow','Enable','fillRect','popScene','yAlign','_viewSprite','setMainMenuCgGalleryEnabled','createCommandNameWindow','STAGGER_FULL','drawItemStyleIcon','Scene_Menu_createCommandWindow','UnlistedCommandDescription','next','UnlistedCommandIcon','cgGallery','opacity','createBackground','CG_UnlockAllImagesDebug','_backSprite1','toFixed','drawItem','_blackBgSprite','addWindow','HELP_WINDOW_BGTYPE','HelpWindow_RectJS','CG_WINDOW_BGTYPE','MAXROW','max','GalleryWindow_Text_CompletionFontSize1','updateHelp','itemHeight','pop','processViewModeBorderless','options','clear','maxScrollY','_backSprite2','CATEGORY_WINDOW_BGTYPE','buttonAssistText1','pageup','_variationIndex','CG_UnlockImages','TEXT_ALIGN','createViewSprite','stringify','categoryWindowRect','BgFilename1','NUM','_cached_CGGallery_Image','createBlackBackgroundImage','changePitch','_totalSize','maxItems','middle','_itemHeight','boxWidth','CG_WINDOW_MOVE_DIST','loadTitle1','_variationList','Icon','HasUnlistedCategories','_commandWindow','CategoryWindow_ShowUnlistedCommand','call','CgGalleryCategories','cgGalleryCompletionRate','addCommandListCommands','AutoUnlockShowPicture','clamp','cursorUp','ARRAYEVAL','cachedCgGalleryLockedImage','GalleryWindow_Text_CompletionShow','playViewCgImage','prev','Window_MenuCommand_addOriginalCommands','isCgGalleryCommandVisible','_categories','PROGRESS_SPRITE','buttonAssistKey3','DRAW_VARIATION','makeData','GalleryWindow_Text_CompletionVocab','ConvertParams','GalleryWindow_RectJS','push','filter','GalleryWindow_Text_ProgressShow','applyData','tab','MAXCOL','setClickHandler','_viewMode','_cgGalleryFullUnlock','AllCommandDescription','createCustomBackgroundImages','initMembers','unlockImageForCgGallery','Vocab','ButtonAssistVocab_Border','GalleryWindow_Text_VariationFmt','format','commandNameWindowDrawBackground','windowPadding','min','setMainMenuCgGalleryVisible','Settings','_context','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','buttonAssistText2','resetFontSettings','border','updateSmoothScroll','commandStyle','fontSize1','ext','buttonAssistText5','GalleryWindow_SpacingRows','drawText','_listingNames','maxCols','updateGalleryWindow','addChild','GalleryWindow_Text_ProgressFontSize1','itemWidth','FUNC','EVAL','GalleryWindow_Text_CompletionFontFace','isRepeated','addAllCommand','setHandler','description','GalleryWindow_Text_ProgressFontSize2','SystemEnableCGGalleryMenu','hasCgUnlockedImage','Categories','_itemWidth','registerCommand','topRow','lockedImgFilename','HelpWindow_BgType','UnlistedCommandText','DefaultUnlocks','toLowerCase','initCgGalleryMainMenu','bottom','96426mxNtfT','getInputButtonString','activate','all','processViewModeCancel','_wheelCooldown','blt','playEquip','buttonAssistText4','ARRAYNUM','active','makeCommandList','ButtonAssistVocab_Next','innerHeight','findSymbol','processVariationChange','SnapshotOpacity','bind','wheelY','updateCommandNameWindow','CategoryWindow_AddAllCommand','GalleryWindow_Text_ProgressOffsetY','createCategoryWindow','GalleryWindow_Text_CompletionOffsetY','GalleryWindow_BgType'];_0x1865=function(){return _0x5c4631;};return _0x1865();}Window_CG_Gallery[_0x2daa2a(0x183)]=Object[_0x2daa2a(0x2aa)](Window_Command[_0x2daa2a(0x183)]),Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2ac)]=Window_CG_Gallery,Window_CG_Gallery[_0x2daa2a(0x205)]=VisuMZ['CGGallery']['Settings']['Window']['GalleryWindow_MaxCols'],Window_CG_Gallery[_0x2daa2a(0x1c5)]=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)]['GalleryWindow_MaxRows'],Window_CG_Gallery[_0x2daa2a(0x130)]=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x2ca)],Window_CG_Gallery['ROW_SPACING']=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x220)],Window_CG_Gallery[_0x2daa2a(0x139)]=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x260)],Window_CG_Gallery[_0x2daa2a(0x1b3)]=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x18b)],Window_CG_Gallery['STAGGER_LEFT']=VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x1a6)],Window_CG_Gallery[_0x2daa2a(0x14a)]=VisuMZ['CGGallery']['Settings']['Window']['GalleryWindow_ListingBack'],Window_CG_Gallery['DRAW_VARIATION']={'show':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x266)],'hideForSingles':!VisuMZ[_0x2daa2a(0x174)]['Settings']['Window'][_0x2daa2a(0x295)],'xAlign':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)]['GalleryWindow_Text_VariationsAlignX'],'yAlign':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)]['Window']['GalleryWindow_Text_VariationsAlignY'],'variantComplete':VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x20d)][_0x2daa2a(0x26a)],'textFmt':VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x20d)][_0x2daa2a(0x20f)]},Window_CG_Gallery[_0x2daa2a(0x1a7)]={'show':VisuMZ['CGGallery'][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x1f3)],'text':VisuMZ['CGGallery']['Settings'][_0x2daa2a(0x20d)][_0x2daa2a(0x1fd)],'percentFmt':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x20d)][_0x2daa2a(0x284)],'decimals':VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x145)],'fontFace':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x22a)],'fontSize1':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x1c7)],'fontSize2':VisuMZ['CGGallery'][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x2b8)],'offset':{'x':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)]['GalleryWindow_Text_CompletionOffsetX'],'y':VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x254)]},'angle':VisuMZ['CGGallery'][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x2dc)]},Window_CG_Gallery['PROGRESS_SPRITE']={'show':VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x202)],'text':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x20d)][_0x2daa2a(0x1a1)],'percentFmt':VisuMZ['CGGallery'][_0x2daa2a(0x215)]['Vocab'][_0x2daa2a(0x2d4)],'decimals':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)]['GalleryWindow_Text_ProgressDecimals'],'fontFace':VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x272)],'fontSize1':VisuMZ[_0x2daa2a(0x174)]['Settings'][_0x2daa2a(0x2c0)][_0x2daa2a(0x226)],'fontSize2':VisuMZ['CGGallery'][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x22f)],'offset':{'x':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)]['Window'][_0x2daa2a(0x2de)],'y':VisuMZ[_0x2daa2a(0x174)][_0x2daa2a(0x215)][_0x2daa2a(0x2c0)][_0x2daa2a(0x252)]},'angle':VisuMZ[_0x2daa2a(0x174)]['Settings']['Window'][_0x2daa2a(0x197)]},Window_CG_Gallery['prototype'][_0x2daa2a(0x267)]=function(_0x4329ce){const _0x547dca=_0x2daa2a;this['_category']='',Window_Command['prototype'][_0x547dca(0x267)][_0x547dca(0x1ea)](this,_0x4329ce),this[_0x547dca(0x16b)](),this[_0x547dca(0x160)]();},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x227)]=function(){const _0x21a600=_0x2daa2a;if(this['_itemWidth']!==undefined)return this['_itemWidth'];const _0x1c8740=(this[_0x21a600(0x2cd)]-Window_CG_Gallery[_0x21a600(0x1b3)])/this[_0x21a600(0x223)]();return this[_0x21a600(0x233)]=Math[_0x21a600(0x25b)](_0x1c8740),this[_0x21a600(0x233)];},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x1c9)]=function(){const _0x4421cd=_0x2daa2a;if(this[_0x4421cd(0x1e1)]!==undefined)return this[_0x4421cd(0x1e1)];const _0x33ffcc=this[_0x4421cd(0x24a)]/Window_CG_Gallery[_0x4421cd(0x1c5)];return this[_0x4421cd(0x1e1)]=Math['ceil'](_0x33ffcc),this[_0x4421cd(0x1e1)];},Window_CG_Gallery['prototype'][_0x2daa2a(0x299)]=function(){return Window_CG_Gallery['COL_SPACING'];},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x13a)]=function(){const _0x18647=_0x2daa2a;return Window_CG_Gallery[_0x18647(0x1a8)];},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x223)]=function(){const _0x307656=_0x2daa2a;return Window_CG_Gallery[_0x307656(0x205)];},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x176)]=function(_0x5477b2){const _0x6920e6=_0x2daa2a,_0x2295be=this[_0x6920e6(0x223)](),_0x51e0a7=Window_CG_Gallery[_0x6920e6(0x1c5)]-0x1,_0x5f2024=this['itemWidth'](),_0x31fc37=this[_0x6920e6(0x1c9)](),_0x2604ab=this[_0x6920e6(0x299)](),_0x2085fd=this[_0x6920e6(0x13a)](),_0x129e4e=_0x5477b2%_0x2295be,_0x169d78=Math[_0x6920e6(0x25b)](_0x5477b2/_0x2295be),_0x3a18e=this[_0x6920e6(0x235)](),_0x5bcd26=Window_CG_Gallery[_0x6920e6(0x1b3)],_0x582450=_0x169d78-_0x3a18e;let _0x166252=0x0;Window_CG_Gallery[_0x6920e6(0x15f)]?_0x166252=Math[_0x6920e6(0x25b)]((_0x51e0a7-_0x582450)/_0x51e0a7*_0x5bcd26):_0x166252=Math[_0x6920e6(0x25b)](_0x582450/_0x51e0a7*_0x5bcd26);const _0x59d38f=_0x129e4e*_0x5f2024+_0x2604ab/0x2-this[_0x6920e6(0x152)]()+_0x166252,_0x118d47=_0x169d78*_0x31fc37+_0x2085fd/0x2-this['scrollBaseY'](),_0x14690a=_0x5f2024-_0x2604ab,_0x30d236=_0x31fc37-_0x2085fd;return new Rectangle(_0x59d38f,_0x118d47,_0x14690a,_0x30d236);},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2b6)]=function(_0x473792,_0x135ac0){const _0x4be483=_0x2daa2a;if(Window_CG_Gallery[_0x4be483(0x1b3)]<=0x0)return Window_Command[_0x4be483(0x183)][_0x4be483(0x2b6)][_0x4be483(0x1ea)](this,_0x473792,_0x135ac0);this[_0x4be483(0x181)]=_0x473792[_0x4be483(0x1ef)](0x0,this[_0x4be483(0x285)]()),this[_0x4be483(0x27d)]=_0x135ac0['clamp'](0x0,this[_0x4be483(0x1ce)]()),this['_scrollDuration']=0x1,this[_0x4be483(0x21b)](),this['refreshCursor']();},Window_CG_Gallery[_0x2daa2a(0x183)]['processWheelScroll']=function(){const _0x3ab419=_0x2daa2a;if(this[_0x3ab419(0x2bc)]()&&this[_0x3ab419(0x247)]){const _0x56118c=0x14;TouchInput['wheelY']>=_0x56118c&&(this['cursorDown'](![]),this['_wheelCooldown']=0x8),TouchInput[_0x3ab419(0x24f)]<=-_0x56118c&&(this[_0x3ab419(0x1f0)](![]),this[_0x3ab419(0x242)]=0x8);}},Window_CG_Gallery[_0x2daa2a(0x183)]['onTouchSelect']=function(_0x955cd0){const _0x2d1c37=_0x2daa2a;if(this[_0x2d1c37(0x242)]){this[_0x2d1c37(0x242)]--;return;}Window_Command['prototype']['onTouchSelect'][_0x2d1c37(0x1ea)](this,_0x955cd0);},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x296)]=function(){const _0x4b459f=_0x2daa2a;SoundManager[_0x4b459f(0x1f4)]();},Window_CG_Gallery[_0x2daa2a(0x183)]['setCategory']=function(_0x58c96c){const _0x19f7ec=_0x2daa2a;_0x58c96c=_0x58c96c['toLowerCase']()[_0x19f7ec(0x19f)]();if(this['_category']===_0x58c96c)return;this[_0x19f7ec(0x2a7)]=_0x58c96c,this['refresh'](),this[_0x19f7ec(0x27a)](0x0),this['deselect'](),this['updateCompletionSpriteBitmap'](),this[_0x19f7ec(0x281)]();},Window_CG_Gallery[_0x2daa2a(0x183)]['makeCommandList']=function(){const _0x360677=_0x2daa2a,_0x1f7935=VisuMZ['CGGallery'][_0x360677(0x215)][_0x360677(0x1a0)];for(const _0x492596 of _0x1f7935){if(!this[_0x360677(0x2db)](_0x492596))continue;const _0x694fe=$gameSystem[_0x360677(0x26c)](_0x492596[_0x360677(0x158)]);this[_0x360677(0x28e)]('',_0x360677(0x2a9),_0x694fe,_0x492596);}},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2db)]=function(_0x1f4f9d){const _0x256393=_0x2daa2a;if(!_0x1f4f9d)return![];if(_0x1f4f9d['Filename'][_0x256393(0x23a)]()[_0x256393(0x19f)]()===_0x256393(0x131))return![];if(_0x1f4f9d[_0x256393(0x158)][_0x256393(0x19f)]()==='')return![];if(this[_0x256393(0x2a7)]===_0x256393(0x240))return!![];const _0x383ef1=_0x1f4f9d[_0x256393(0x2d0)][_0x256393(0x23a)]()['trim']();if(this[_0x256393(0x2a7)]===_0x256393(0x12d)){const _0x2a881f=VisuMZ[_0x256393(0x174)]['CgGalleryCategories']();return!_0x2a881f['includes'](_0x383ef1);}else return this['_category']===_0x383ef1;},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x1c8)]=function(){const _0x58745b=_0x2daa2a;Window_Command[_0x58745b(0x183)][_0x58745b(0x1c8)]['call'](this);const _0xad33db=this[_0x58745b(0x1a3)]();_0xad33db&&($gameSystem[_0x58745b(0x26c)](_0xad33db[_0x58745b(0x158)])?this['_helpWindow'][_0x58745b(0x150)](_0xad33db[_0x58745b(0x2e2)]||''):this['_helpWindow'][_0x58745b(0x150)](TextManager[_0x58745b(0x17d)][_0x58745b(0x25e)]['lockedImg']));},Window_CG_Gallery[_0x2daa2a(0x183)]['drawItemBackground']=function(_0x1f62e9){const _0x5a7396=_0x2daa2a;if(!Window_CG_Gallery['DRAW_ITEM_BACKGROUND'])return;Window_Command[_0x5a7396(0x183)][_0x5a7396(0x27c)]['call'](this,_0x1f62e9);},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x1bf)]=function(_0x4326f8){const _0x12d15e=_0x2daa2a;if(!this[_0x12d15e(0x298)])return;if(!this['_list'][_0x4326f8])return;const _0x13bc2b=this[_0x12d15e(0x298)][_0x4326f8][_0x12d15e(0x21e)];if(!_0x13bc2b)return;const _0x34ccd0=this[_0x12d15e(0x176)](_0x4326f8),_0x31029c=_0x13bc2b[_0x12d15e(0x158)];if($gameSystem['isCgGalleryUnlocked'](_0x31029c)){const _0x2b6a35=ImageManager[_0x12d15e(0x2bf)](_0x31029c);_0x2b6a35[_0x12d15e(0x2c6)](this['drawPicture'][_0x12d15e(0x24e)](this,_0x13bc2b,_0x2b6a35,_0x4326f8,_0x34ccd0));}else{const _0x50b42c=ImageManager[_0x12d15e(0x1f2)]();_0x50b42c[_0x12d15e(0x2c6)](this[_0x12d15e(0x2e7)][_0x12d15e(0x24e)](this,_0x13bc2b,_0x50b42c,_0x4326f8,_0x34ccd0));}},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x2e7)]=function(_0x5da671,_0x4d794f,_0x149790,_0x4dd030){const _0x5d0da9=_0x2daa2a,_0x43c3dc=this[_0x5d0da9(0x176)](_0x149790);if(JSON['stringify'](_0x43c3dc)!==JSON[_0x5d0da9(0x1d7)](_0x4dd030))return;_0x43c3dc['width']-=Window_CG_Gallery['IMG_BUFFER']*0x2,_0x43c3dc['height']-=Window_CG_Gallery['IMG_BUFFER']*0x2,_0x43c3dc['x']+=Window_CG_Gallery[_0x5d0da9(0x139)],_0x43c3dc['y']+=Window_CG_Gallery[_0x5d0da9(0x139)];let _0x5c44b1=_0x43c3dc['x'],_0x4798bf=_0x43c3dc['y'];const _0x8a48db=_0x43c3dc[_0x5d0da9(0x146)]/_0x4d794f[_0x5d0da9(0x146)],_0x4bca8d=_0x43c3dc['height']/_0x4d794f[_0x5d0da9(0x286)],_0x318df2=Math[_0x5d0da9(0x213)](_0x8a48db,_0x4bca8d,0x1),_0xda8e20=Math[_0x5d0da9(0x25f)](_0x4d794f[_0x5d0da9(0x146)]*_0x318df2),_0x2b66bc=Math['round'](_0x4d794f['height']*_0x318df2);_0x5c44b1+=Math[_0x5d0da9(0x25f)]((_0x43c3dc[_0x5d0da9(0x146)]-_0xda8e20)/0x2),_0x4798bf+=Math[_0x5d0da9(0x25f)]((_0x43c3dc['height']-_0x2b66bc)/0x2);const _0x22b2df=_0x4d794f[_0x5d0da9(0x146)],_0x1066bb=_0x4d794f[_0x5d0da9(0x286)];this[_0x5d0da9(0x268)][_0x5d0da9(0x216)]['imageSmoothingEnabled']=!![],this[_0x5d0da9(0x268)][_0x5d0da9(0x243)](_0x4d794f,0x0,0x0,_0x22b2df,_0x1066bb,_0x5c44b1,_0x4798bf,_0xda8e20,_0x2b66bc),this['contents'][_0x5d0da9(0x216)][_0x5d0da9(0x2a6)]=!![],this[_0x5d0da9(0x153)](_0x5da671,_0x149790);},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x153)]=function(_0x193ef2,_0x442988){const _0x22662a=_0x2daa2a;if(!Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x2ea)])return;if(!$gameSystem[_0x22662a(0x26c)](_0x193ef2['Filename'],![]))return;const _0x100cfe=_0x193ef2['Variations'][_0x22662a(0x2b0)]+0x1;if(Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x184)]&&_0x100cfe===0x1)return;let _0x9839b7=0x1;for(let _0x57f378 of _0x193ef2[_0x22662a(0x273)]){if($gameSystem['isCgGalleryUnlocked'](_0x57f378,!![]))_0x9839b7+=0x1;}let _0x509461='';if(_0x100cfe===_0x9839b7&&Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x135)]!=='')_0x509461=Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x135)];else{const _0x263343=Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x283)],_0x351615=Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x2e9)],_0x480054=Math[_0x22662a(0x25f)](_0x9839b7/_0x100cfe*0x64);_0x509461=_0x263343[_0x22662a(0x210)](_0x480054,_0x9839b7,_0x100cfe);}const _0x45baea=this[_0x22662a(0x17f)](_0x442988);let _0x5e72ea=_0x45baea['x'],_0x24d25b=_0x45baea['y'];const _0x3d9a16=this[_0x22662a(0x2b5)](_0x509461)['width'],_0x3d4ca4=this[_0x22662a(0x2b5)](_0x509461)[_0x22662a(0x286)],_0x5465c8=Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x2b4)][_0x22662a(0x23a)]()[_0x22662a(0x19f)]();switch(_0x5465c8){case _0x22662a(0x189):_0x5e72ea+=Math['floor'](_0x45baea[_0x22662a(0x146)]-_0x3d9a16)/0x2;break;case _0x22662a(0x2cb):_0x5e72ea+=_0x45baea[_0x22662a(0x146)]-_0x3d9a16;break;}switch(Window_CG_Gallery[_0x22662a(0x1fb)][_0x22662a(0x1af)][_0x22662a(0x23a)]()[_0x22662a(0x19f)]()){case _0x22662a(0x1e0):_0x24d25b+=Math[_0x22662a(0x25b)](_0x45baea[_0x22662a(0x286)]-_0x3d4ca4)/0x2;break;case _0x22662a(0x23c):_0x24d25b+=_0x45baea[_0x22662a(0x286)]-_0x3d4ca4;break;}this['drawTextEx'](_0x509461,_0x5e72ea,_0x24d25b);},Window_CG_Gallery['prototype'][_0x2daa2a(0x16b)]=function(){const _0x33ab9b=_0x2daa2a;if(!Window_CG_Gallery[_0x33ab9b(0x1a7)][_0x33ab9b(0x2ea)])return;const _0x55876f=new Sprite();this[_0x33ab9b(0x225)](_0x55876f);const _0x429f81=Math[_0x33ab9b(0x1c6)](Window_CG_Gallery[_0x33ab9b(0x1b3)],0x64);_0x55876f[_0x33ab9b(0x15e)]=new Bitmap(_0x429f81,this[_0x33ab9b(0x1c9)]()),_0x55876f[_0x33ab9b(0x151)]['x']=0.5,_0x55876f[_0x33ab9b(0x151)]['y']=0.5,this[_0x33ab9b(0x198)]=_0x55876f,this[_0x33ab9b(0x2b1)](),Window_CG_Gallery[_0x33ab9b(0x15f)]?_0x55876f['x']=this[_0x33ab9b(0x25c)]+Math[_0x33ab9b(0x25b)](Window_CG_Gallery[_0x33ab9b(0x1b3)]/0x2):_0x55876f['x']=this['width']-(this[_0x33ab9b(0x25c)]+Math[_0x33ab9b(0x25b)](Window_CG_Gallery[_0x33ab9b(0x1b3)]/0x2)),_0x55876f['y']=this['padding']+Math[_0x33ab9b(0x25b)](this[_0x33ab9b(0x1c9)]()/0x2),_0x55876f['x']+=Window_CG_Gallery[_0x33ab9b(0x1a7)][_0x33ab9b(0x13b)]['x'],_0x55876f['y']+=Window_CG_Gallery[_0x33ab9b(0x1a7)][_0x33ab9b(0x13b)]['y'],_0x55876f[_0x33ab9b(0x2d7)]=-Window_CG_Gallery['COMPLETION_SPRITE'][_0x33ab9b(0x2d7)];},Window_CG_Gallery[_0x2daa2a(0x183)]['updateCompletionSpriteBitmap']=function(){const _0x57c93c=_0x2daa2a;if(!this['_completionSprite'])return;const _0x7290eb=this[_0x57c93c(0x198)],_0xa36d66=_0x7290eb[_0x57c93c(0x15e)];_0xa36d66['clear']();const _0x2ee355=Window_CG_Gallery[_0x57c93c(0x1a7)][_0x57c93c(0x1aa)];_0xa36d66[_0x57c93c(0x2c1)]=Window_CG_Gallery['COMPLETION_SPRITE'][_0x57c93c(0x2c1)],_0xa36d66[_0x57c93c(0x269)]=Window_CG_Gallery[_0x57c93c(0x1a7)]['fontSize1'];const _0x4e2aa6=Math[_0x57c93c(0x25f)](_0xa36d66[_0x57c93c(0x286)]/0x2)-(_0xa36d66['fontSize']+0x4);_0xa36d66[_0x57c93c(0x221)](_0x2ee355,0x0,_0x4e2aa6,_0xa36d66[_0x57c93c(0x146)],_0xa36d66['fontSize']+0x4,_0x57c93c(0x189));const _0x6fedf0=$gameSystem['cgGalleryCompletionRate'](this['_category']),_0x37823e=Window_CG_Gallery[_0x57c93c(0x1a7)][_0x57c93c(0x2e9)],_0x21f176=(_0x6fedf0*0x64)[_0x57c93c(0x1be)](_0x37823e),_0x5673a9=$gameSystem['cgGalleryCurrentCount'](this[_0x57c93c(0x2a7)]),_0x61492e=$gameSystem['cgGalleryTotalSize'](this[_0x57c93c(0x2a7)]),_0xd47d9c=Window_CG_Gallery[_0x57c93c(0x1a7)]['percentFmt'][_0x57c93c(0x210)](_0x21f176,_0x5673a9,_0x61492e);_0xa36d66[_0x57c93c(0x2c1)]=Window_CG_Gallery[_0x57c93c(0x1a7)]['fontFace'],_0xa36d66[_0x57c93c(0x269)]=Window_CG_Gallery[_0x57c93c(0x1a7)]['fontSize2'];const _0x10d6d2=Math[_0x57c93c(0x25f)](_0xa36d66[_0x57c93c(0x286)]/0x2);_0xa36d66[_0x57c93c(0x221)](_0xd47d9c,0x0,_0x10d6d2,_0xa36d66[_0x57c93c(0x146)],_0xa36d66[_0x57c93c(0x269)]+0x4,'center');},Window_CG_Gallery[_0x2daa2a(0x183)]['createProgressSprite']=function(){const _0x8db2a4=_0x2daa2a;if(!Window_CG_Gallery[_0x8db2a4(0x1f9)][_0x8db2a4(0x2ea)])return;const _0x3c1342=new Sprite();this[_0x8db2a4(0x225)](_0x3c1342);const _0x44f50a=Math[_0x8db2a4(0x1c6)](Window_CG_Gallery[_0x8db2a4(0x1b3)],0x64);_0x3c1342['bitmap']=new Bitmap(_0x44f50a,this[_0x8db2a4(0x1c9)]()),_0x3c1342[_0x8db2a4(0x151)]['x']=0.5,_0x3c1342[_0x8db2a4(0x151)]['y']=0.5,this[_0x8db2a4(0x2c8)]=_0x3c1342,this[_0x8db2a4(0x281)](),Window_CG_Gallery[_0x8db2a4(0x15f)]?_0x3c1342['x']=this[_0x8db2a4(0x146)]-(this['padding']+Math[_0x8db2a4(0x25b)](Window_CG_Gallery[_0x8db2a4(0x1b3)]/0x2)):_0x3c1342['x']=this[_0x8db2a4(0x25c)]+Math[_0x8db2a4(0x25b)](Window_CG_Gallery[_0x8db2a4(0x1b3)]/0x2),_0x3c1342['y']=this['height']-this[_0x8db2a4(0x25c)]-Math[_0x8db2a4(0x25b)](this[_0x8db2a4(0x1c9)]()/0x2),_0x3c1342['x']+=Window_CG_Gallery[_0x8db2a4(0x1f9)]['offset']['x'],_0x3c1342['y']+=Window_CG_Gallery[_0x8db2a4(0x1f9)]['offset']['y'],_0x3c1342[_0x8db2a4(0x2d7)]=-Window_CG_Gallery[_0x8db2a4(0x1f9)][_0x8db2a4(0x2d7)];},Window_CG_Gallery[_0x2daa2a(0x183)][_0x2daa2a(0x281)]=function(){const _0x1eb2bd=_0x2daa2a;if(!this[_0x1eb2bd(0x2c8)])return;const _0x511529=this['_progressSprite'],_0x1a2429=_0x511529['bitmap'];_0x1a2429['clear']();const _0x105c12=Window_CG_Gallery[_0x1eb2bd(0x1f9)][_0x1eb2bd(0x1aa)];_0x1a2429['fontFace']=Window_CG_Gallery[_0x1eb2bd(0x1f9)][_0x1eb2bd(0x2c1)],_0x1a2429[_0x1eb2bd(0x269)]=Window_CG_Gallery[_0x1eb2bd(0x1f9)][_0x1eb2bd(0x21d)];const _0x2fa775=Math['round'](_0x1a2429[_0x1eb2bd(0x286)]/0x2)-(_0x1a2429['fontSize']+0x4);_0x1a2429[_0x1eb2bd(0x221)](_0x105c12,0x0,_0x2fa775,_0x1a2429[_0x1eb2bd(0x146)],_0x1a2429[_0x1eb2bd(0x269)]+0x4,'center');const _0x4207a5=$gameSystem[_0x1eb2bd(0x1ec)](this[_0x1eb2bd(0x2a7)]),_0x51244e=Window_CG_Gallery[_0x1eb2bd(0x1f9)]['decimals'],_0x2ee01c=(_0x4207a5*0x64)[_0x1eb2bd(0x1be)](_0x51244e),_0x3f0b87=$gameSystem[_0x1eb2bd(0x2c9)](this[_0x1eb2bd(0x2a7)]),_0xc4be43=$gameSystem[_0x1eb2bd(0x2d6)](this['_category']),_0x295765=Window_CG_Gallery[_0x1eb2bd(0x1f9)][_0x1eb2bd(0x186)][_0x1eb2bd(0x210)](_0x2ee01c,_0x3f0b87,_0xc4be43);_0x1a2429['fontFace']=Window_CG_Gallery[_0x1eb2bd(0x1f9)][_0x1eb2bd(0x2c1)],_0x1a2429[_0x1eb2bd(0x269)]=Window_CG_Gallery[_0x1eb2bd(0x1f9)][_0x1eb2bd(0x2b9)];const _0x5d82c1=Math['round'](_0x1a2429['height']/0x2);_0x1a2429[_0x1eb2bd(0x221)](_0x295765,0x0,_0x5d82c1,_0x1a2429['width'],_0x1a2429[_0x1eb2bd(0x269)]+0x4,_0x1eb2bd(0x189));};