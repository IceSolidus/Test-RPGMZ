//=============================================================================
// VisuStella MZ - Furniture System
// VisuMZ_2_FurnitureSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_FurnitureSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FurnitureSystem = VisuMZ.FurnitureSystem || {};
VisuMZ.FurnitureSystem.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.10] [FurnitureSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Furniture_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to let your player decorate certain maps with furniture items?
 * Letting players let loose is a great way for players to turn a playthrough
 * into something that they can call their own and express themselves. This
 * plugin allows you to create furniture items that the player can place on
 * designated maps and create a place they feel at home.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Select which maps that players can decorate with furniture.
 * * Players can select special furniture items directly from the Item Menu to
 *   place onto these maps.
 * * Furniture pieces are events that are spawned and can have functionality!
 * * Template variations allow you to create furniture pieces that can rotate
 *   in different ways or provide different variations of a piece of furniture.
 * * Restrict certain furniture objects so that they can only be placed onto
 *   specific regions or terrain tags or forbid them from being placed there.
 * * Furniture pieces, once placed, can be moved again by the player by simply
 *   holding down the mouse button or through interactive Plugin Commands.
 * * Specialized notetags that prevent furniture pieces from being moved so
 *   that you can use them on unmovable objects, like crops!
 * * Run Common Events whenever furniture pieces are placed down to add special
 *   interactive effects.
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_EventsMoveCore
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Instructions - Quick Start
 * ============================================================================
 * 
 * Here are some instructions to get yourself started quickly on using the
 * Furniture System.
 * 
 * ---
 * 
 * Step 1: Creating a Furniture Storage Map
 * 
 * 1. Create a new map (or use an old one if you know what you're doing).
 * 2. On this map, create the furniture pieces that will be seen in the game.
 * 3. Record the Map ID and any Event ID(s) that you want to use.
 * 
 * ---
 * 
 * Step 2: Registering the Map and Events
 * 
 * 1. Open up VisuStella MZ's Events & Movement Core's Plugin Parameters.
 *    (VisuMZ_1_EventsMoveCore)
 * 2. Open up "Event Template Settings".
 * 3. Store the furniture map's Map ID into "Preloaded Maps".
 * 4. Create new Event Templates in "Event Template List" using the Map ID and
 *    any Event ID(s) that will be used as furniture.
 * 5. Write down any "Template names" that you want to use later.
 * 6. Close the Plugin Parameters and save everything.
 * 
 * ---
 * 
 * Step 3: Creating Furniture Items in the Database
 * 
 * 1. Open up the RPG Maker MZ Database Editor.
 * 2. Go to the Item's tab.
 * 3. Create a regular item. It doesn't need any specific function but give it
 *    a name, icon, and/or description.
 * 4. Add in the following notetag into the item's note box:
 *    <Furniture Template: name>
 * 5. Replace 'name' in the notetag with a name of the Event Template to refer
 *    to for a furniture event.
 * 6. You do NOT need to modify the "Occassion" setting as this will be
 *    automatically decided by the plugin.
 * 7. Create as many items this way as needed.
 * 8. Close the item database by clicking OK and save the game project.
 * 
 * ---
 * 
 * Step 4: Creating a Furniture-Allowed Map
 * 
 * 1. Create a new map where you want your player to be able to place
 *    furniture on any way they wish.
 * 2. Right click the map's name in the editor and go to the Map's Properties.
 * 3. Add the <Allow Furniture> notetag to the map's notebox.
 * 4. Alternatively, you can go to the Furniture System's Plugin Parameters,
 *    go to "Default Settings", and allow all maps to have furniture access by
 *    default unless they have the <No Furniture> notetag.
 * 5. Give your player a way to acquire some of the furniture database items.
 * 6. Save the game project.
 * 7. Let's test it out!
 * 
 * ---
 * 
 * Step 5: Play Testing
 * 
 * 1. As the player, acquire the database items for the Furniture pieces.
 * 2. Go to the map where you can place furniture.
 * 3. Open up the Main Menu and go to "Items".
 * 4. From there, select the furniture item and use it.
 * 5. The game should take you back to the map scene but this time, with an
 *    event in front of the player resembling the piece of furniture that can
 *    be placed on the map.
 * 6. Place the piece of furniture on the map using the arrow keys or mouse.
 * 7. Press Z or the Left Mouse Button to put down the piece of furniture.
 * 8. Press X or the Right Mouse Button to exit Furniture Mode.
 * 9. Alternatively, if you run out of furniture items to put down, the game
 *    will automatically exit you out of Furniture Mode.
 * 10. If you want to quickly move furniture events that have already been
 *     placed, left click and hold the mouse button on them for 1.5 seconds.
 * 
 * ---
 * 
 * Enjoy!
 * 
 * ---
 *
 * ============================================================================
 * Understanding Features
 * ============================================================================
 *
 * Here are the newest features added to RPG Maker MZ through this plugin.
 *
 * ---
 *
 * Furniture Mode
 * 
 * When furniture objects are being placed, the map scene will freeze up,
 * preventing the player and events from being able to move or open up the main
 * menu until Furniture Mode is finished.
 * 
 * Furniture Mode can only be entered on maps where furniture is enabled to be
 * placed on. This can be setup via the Plugin Parameters (so that they can all
 * be on or off by default) or by using the <Allow Furniture> or <No Furniture>
 * notetags inside of the map's note box.
 *
 * ---
 * 
 * Furniture Events
 * 
 * Furniture Events are spawned events that are made through VisuStella MZ's
 * Events & Movement Core. As such, the VisuMZ_1_EventsMoveCore plugin is
 * required for this plugin to run.
 * 
 * For those unfamiliar with Event Templates, please read through the Event &
 * Movement Core's helpfile for Event Templates. These templates need to be
 * stored within the designated "Preloaded Maps" and "Templates" list found in
 * the Event & Movement Core's Plugin Parameters.
 * 
 * As Furniture Events are also spawned items, they are also affected by any
 * Despawn effects that come from either Events & Movement Core or this
 * plugin's Plugin Commands.
 * 
 * ---
 * 
 * Furniture Items (Database Objects)
 * 
 * Furniture database objects are items. In fact, they can't be weapons or
 * armors or anything else. They have to be items. A furniture item will
 * require the <Furniture Template: name> notetag in it for it to be properly
 * registered as a furniture item.
 * 
 * Furniture items will automatically be unusable outside of the item scene,
 * meaning that you cannot use them in battle. When inside the item scene, the
 * furniture item will check to see if the current map is one that supports
 * furniture items.
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
 * <Allow Furniture>
 *
 * - Used for: Map Notetags
 * - Allows furniture objects to be placed on this map by the player.
 * - If this notetag is not present, the furniture-accessibility for the player
 *   is depending on the settings found in the Plugin Parameters.
 *
 * ---
 *
 * <No Furniture>
 *
 * - Used for: Map Notetags
 * - Prevents furniture objects from being placed on this map by the player.
 * - You can still spawn furniture objects onto the map via Plugin Command.
 * - If this notetag is not present, the furniture-accessibility for the player
 *   is depending on the settings found in the Plugin Parameters.
 *
 * ---
 * 
 * <Furniture Type: type>
 * <Furniture Types: type, type, type>
 * 
 * - Used for: Map Notetags
 * - Determines which furniture types are allowed on the map to be placed from
 *   the item menu.
 * - Furniture items with those any of matching furniture types are allowed to
 *   be placed on the map.
 *   - This does NOT affect the furniture types placed through the Plugin
 *     Commands or pre-existing pieces of furniture placed there.
 * - Replace 'type' with text categories explaining the type.
 * - All maps allow the 'any' furniture type.
 * - This will also provide the effect of the <Allow Furniture> notetag.
 * 
 *   Example:
 * 
 *   <Furniture Type: Outdoor>
 *   <Furniture Types: Outdoor, Lighting>
 * 
 * ---
 * 
 * === Furniture-Related Notetags ===
 * 
 * ---
 *
 * <Furniture Template: name>
 * <Furniture Templates: name, name, name>
 *
 * - Used for: Item Notetags
 * - Marks this item database object as a furniture piece of item.
 * - Replace 'name' with the name of a stored Event Template found within the
 *   Events and Movement Core's Plugin Parameters.
 *   - Insert multiple names if you want more variations associated with this
 *     furniture item.
 *   - These variations can be different rotations of the item or different
 *     colors of them, or maybe even both. The choice is yours.
 * - This notetag is absolutely needed in order to mark this database object as
 *   a piece of furniture item.
 *
 * ---
 * 
 * <Furniture Type: type>
 * <Furniture Types: type, type, type>
 * 
 * - Used for: Items Notetags
 * - Determines which furniture types this furniture item is considered to be
 *   when being placed by the player from the item menu.
 * - Furniture items can only be placed on maps that allow any of the matching
 *   furniture types.
 *   - This does NOT affect the furniture types placed through the Plugin
 *     Commands or pre-existing pieces of furniture placed there.
 * - Replace 'type' with text categories explaining the type.
 * - If no 'type' is used, this furniture item will default to the 'any' type.
 * 
 *   Example:
 * 
 *   <Furniture Type: Outdoor>
 *   <Furniture Types: Outdoor, Lighting>
 * 
 * ---
 *
 * <Furniture Allow Region: x>
 * <Furniture Allow Regions: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the regions that the player can ONLY place this piece of
 *   furniture on. In other words, you cannot place furniture on tiles without
 *   the region.
 * - This will bypass passability rules (so that you can use them for wall
 *   decorations).
 * - Replace 'x' with a number between 1 and 255 representing the Region ID
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the regions that the furniture can
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Forbid Region: x> and variants.
 * - If this notetag is not used, then the Allowed Regions settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Forbid Region: x>
 * <Furniture Forbid Regions: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the regions that the player CANNOT place this piece of furniture
 *   on. In other words, you cannot place furniture on tiles with this region.
 * - Replace 'x' with a number between 1 and 255 representing the Region ID
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the regions that the furniture cannot
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Allow Region: x> and variants.
 * - If this notetag is not used, then the Forbid Regions settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Allow Terrain Tag: x>
 * <Furniture Allow Terrain Tags: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the terrain tag tiles that the player can ONLY place this piece
 *   of furniture on. In other words, you cannot place furniture on tiles
 *   without the terrain tag.
 * - This will bypass passability rules (so that you can use them for wall
 *   decorations).
 * - Replace 'x' with a number between 1 and 7 representing the Terrain Tag
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the tiles that the furniture can
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Allow Terrain Tag: x> and variants.
 * - If this notetag is not used, then the Allowed Terrain Tag settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Forbid Terrain Tag: x>
 * <Furniture Forbid Terrain Tags: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the terrain tag tiles that the player CANNOT place this piece of
 *   furniture on. In other words, you cannot place furniture on tiles with
 *   this terrain tag.
 * - Replace 'x' with a number between 1 and 7 representing the Terrain Tag
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the tiles that the furniture cannot
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Forbid Terrain Tag: x> and variants.
 * - If this notetag is not used, then the Forbid Terrain Tag settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Check Event Collision>
 * <Furniture Allow Event Stacking>
 *
 * - Used for: Item Notetags
 * - Causes the furniture object to check for event collision or let the player
 *   stack events on a single tile infinitely.
 * - We recommend not using the "Allow" version. Best leave this notetag alone
 *   unless you absolutely know what you're doing with it.
 * - If either of these notetags are not used, then the default settings will
 *   be determined by the setting found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Need Passability>
 * <Furniture Free Passability>
 *
 * - Used for: Item Notetags
 * - The "Need" notetag variant determines if the furniture object checks if
 *   the tile it's placed on must have passability in order to be valid.
 * - The "Free" notetag variant version does the opposite; it does not need any
 *   passability settings.
 * - This effect is ignored with the Allowed Region/Terrain Tag notetags.
 * - If either of these notetags are not used, then the default settings will
 *   be determined by the setting found in this plugin's Plugin Parameters.
 * - *NOTE!* The passability check does not work well with the A4 Tiles.
 *   Unfortunately, there is not much we can do about this because of the way
 *   RPG Maker MZ handles it. No matter how you mark them in the database, RPG
 *   Maker MZ will decide that they are passable. You have to work around this
 *   with Forbid Region notetags or Forbid Terrain Tag notetags.
 *
 * ---
 *
 * <Furniture Place Common Event: x>
 *
 * - Used for: Item Notetags
 * - Runs a Common Event when the furniture object is placed.
 * - Replace 'x' with a number representing the ID of the Common Event to run.
 * - If this notetag is not used, then the default settings for this effect
 *   will be determined by this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Place Once>
 * <Furniture Place Until Empty>
 *
 * - Used for: Item Notetags
 * - Automatically exit "Furniture Mode" once a furniture object is placed or
 *   only exit after the items placing them have been emptied out (or until the
 *   player presses cancel).
 * - If this notetag is not used, then the default settings for this effect
 *   will be determined by this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Prevent Cancel Exit>
 *
 * - Used for: Item Notetags
 * - For those weird times where you don't want the player to be able to cancel
 *   out of furniture mode when using this item.
 * - There is no Plugin Parameter default for this.
 *
 * ---
 * 
 * === JavaScript-Furniture Notetags ===
 * 
 * ---
 * 
 * <JS On Place Furniture>
 *  code
 *  code
 *  code
 * </JS On Place Furniture>
 * 
 * - Used for: Item Notetags
 * - When this furniture item is placed, run JavaScript 'code'.
 * - The 'item' variable will refer to this item.
 * - This JS code will run when the furniture item is placed down be it
 *   directly from the inventory or upon being moved and stamped down.
 * 
 * ---
 * 
 * <JS On Remove Furniture>
 *  code
 *  code
 *  code
 * </JS On Remove Furniture>
 * 
 * - Used for: Item Notetags
 * - When this furniture item is removed, run JavaScript 'code'.
 * - The 'item' variable will refer to this item.
 * - This JS code will run when the furniture item is removed after originally
 *   being placed down from an item.
 * - This code will also run at the start of a furniture item being moved.
 * 
 * ---
 * 
 * === Event-Related Notetags ===
 * 
 * ---
 *
 * <Furniture Not Movable>
 *
 * - Used for: Event Notetags
 * - NOTE! This does NOT work if you put it inside an event's comments.
 * - Prevents the furniture from being movable by either player interaction or
 *   Plugin Command.
 * - Use for things like crops.
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
 * === Furniture Plugin Commands ===
 * 
 * ---
 *
 * Furniture: Add Player Placement
 * - Start furniture placement mode for a specific template type.
 * - Player determines the actual position.
 * - Cannot use this Plugin Command during Furniture Mode.
 *
 *   Furniture Item:
 *   - Which furniture item is used to be placed?
 *   - Non-furniture items won't work.
 *
 *   Generate Item?:
 *   - Generate an item for the player?
 *   - If the player does not have the furniture item in stock, this will not
 *     work.
 *
 * ---
 *
 * Furniture: Spawn At X, Y
 * - Spawns desired furniture at X, Y location on the current map.
 * - Cannot use this Plugin Command during Furniture Mode.
 *
 *   Furniture Item:
 *   - Which furniture item is used to be placed?
 *   - Non-furniture items won't work.
 *
 *   Template Index:
 *   - Which template index do you wish to use for the spawned furniture item?
 *   - Index starts at 0.
 * 
 *   Location:
 *
 *     X Coordinate:
 *     Y Coordinate:
 *     - Target X/Y coordinate to spawn at.
 *     - You may use JavaScript code.
 *
 *   Success Switch ID:
 *   - Target switch ID to record spawning success.
 *   - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 * 
 * === Event At X/Y Plugin Commands ===
 * 
 * ---
 *
 * Event At X/Y: Despawn Furniture
 * - Completely remove the furniture event at X/Y.
 * - Can use on either furniture or non-furniture.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to search for Furniture Event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event At X/Y: Move Furniture
 * - Move the furniture item event at X/Y.
 * - Use on a template event that can be spawned and moved.
 * - Cannot use this Plugin Command during Furniture Mode.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to search for Furniture Event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event At X/Y: Retrieve Furniture
 * - Retrieve the furniture at X/Y to Player's inventory.
 * - Use on a template event that can be spawned and moved.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to search for Furniture Event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === This Event Plugin Commands ===
 * 
 * ---
 *
 * This Event: Despawn Furniture
 * - Completely remove this current furniture event.
 * - Can use on either furniture or non-furniture.
 *
 * ---
 *
 * This Event: Move Furniture
 * - Move this current furniture item.
 * - Use on a template event that can be spawned and moved.
 *
 * ---
 *
 * This Event: Retrieve Furniture
 * - Retrieve this current furniture to Player's inventory.
 * - Use on a template event that can be spawned and moved.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Settings
 * ============================================================================
 *
 * Default settings that are applied to maps and database objects unless
 * specified otherwise.
 *
 * ---
 *
 * Default Map Settings
 * 
 *   Allow Furniture Mode?:
 *   - Allow all maps the ability to put furniture on them by default?
 *   - If not, requires notetags.
 *
 * ---
 *
 * Default Item Settings
 * 
 *   Allowed Regions:
 *   - Furniture with this MUST be placed in these regions.
 *   - CANNOT be used with Forbid Regions.
 * 
 *   Forbid Regions:
 *   - Furniture CANNOT be placed in these regions.
 *   - CANNOT be used with Allowed Regions
 * 
 *   Allowed Terrain Tags:
 *   - Furniture with this MUST be placed in these tags.
 *   - CANNOT be used with Forbid Terrain Tags.
 * 
 *   Forbid Terrain Tags:
 *   - Furniture CANNOT be placed in these tags.
 *   - CANNOT be used with Allowed Terrain Tags.
 * 
 *   Placeable Priority:
 *   - Prioritize placeable furniture when sorting items in the item menu?
 *   - Placeable furniture will be sorted higher than non-placeable furniture.
 *
 * ---
 *
 * Default Check Settings
 * 
 *   Event Collision?:
 *   - Check event collision by default before placement?
 *   - Recommended to be enabled.
 * 
 *   Passability?:
 *   - Check passability by default before placement?
 *   - Recommended to be enabled.
 *
 * ---
 *
 * Default Misc Settings
 * 
 *   Common Event:
 *   - Run which Common Event by default after placing furniture?
 *   - Use 0 for no Common Event.
 * 
 *   End on Place?:
 *   - End Furniture Mode after placing 1 item?
 *   - Or end until items are empty or cancelled?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Filter Settings
 * ============================================================================
 *
 * Settings used for the filter effects found with this plugin.
 * 
 * The outline filter requires you to have Pixi JS Filters installed.
 * Otherwise, you will not see anything from it.
 *
 * ---
 *
 * Tone Filter
 * 
 *   Allowed Tone:
 *   - Tone when furniture is over a placeable tile.
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Forbidden Tone:
 *   - Tone when furniture is over a forbidden tile.
 *   - Format: [Red, Green, Blue, Gray]
 *
 * ---
 *
 * Outline Filter
 * 
 *   Thickness:
 *   - What outline thickness do you want for furniture cursor?
 *   - Requires Pixi JS Filters.
 * 
 *   Quality:
 *   - Quality level for the outline filter.
 *   - Requires Pixi JS Filters.
 * 
 *   Allowed Color:
 *   - System hex code color for allowed color.
 *   - Format: 0xRRGGBB
 *   - Requires Pixi JS Filters.
 * 
 *   Forbidden Color:
 *   - System hex code color for forbidden color.
 *   - Format: 0xRRGGBB
 *   - Requires Pixi JS Filters.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Sound effect settings when interacting with furniture.
 *
 * ---
 *
 * Place Furniture
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
 * Move Furniture
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
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Settings that adjust how Furniture Mode windows appear in-game and how
 * they behave.
 *
 * ---
 *
 * Mechanical Settings
 * 
 *   Hold Time:
 *   - How many frames must a furniture event be clicked and held before
 *     entering move furniture mode?
 *
 * ---
 *
 * Help Window Settings
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   Fade Target: Opacity:
 *   - What opacity value should this window fade to when the mouse cursor is
 *     over it?
 * 
 *   Column 1: Offset:
 *   Column 2: Offset
 *   - Offset the column 1/2 text by how many pixels?
 *   - Negative: Left; Positive: Right
 * 
 *   JS: Draw:
 *   - Code used to determine what is drawn inside this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Item Window Settings
 * 
 *   Fade Target: Opacity:
 *   - What opacity value should this window fade to when the mouse cursor is
 *     over it?
 * 
 *   JS: Draw:
 *   - Code used to determine what is drawn inside this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Cancel Button Settings
 * 
 *   JS: X Position:
 *   JS: Y Position:
 *   - Code used to determine the x/y coordinates for this button.
 *
 * ---
 *
 * Vocabulary Settings
 * 
 *   Position: Button(s):
 *   Variant: Button(s):
 *   Confirm: Button(s):
 *   Cancel: Button(s):
 *   - Buttons to use for this feature.
 *   - Text codes allowed.
 *   - Supports VisuMZ_1_MessageCore's dynamic button text codes:
 *     - ie: <OK Button>, <Cancel Button>, etc.
 * 
 *   Position: Action:
 *   Variant: Action:
 *   Confirm: Action:
 *   Cancel: Action:
 *   - Text used explaining this feature.
 *   - Text codes allowed.
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
 * Version 1.10: June 12, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if a template is not the neutral center pattern, the
 *    furniture cursor would not display it correctly. Fix made by Arisu.
 * 
 * Version 1.09: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the added hitboxes from Events and Movement Core
 *    were factored into event collision but not tile collision. Now, larger
 *    events should be able to factor in tile-based environmental collision.
 *    Fix made by Irina.
 * 
 * Version 1.08: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility with Message Core's <x Button> text codes to
 *    automatically update the Help Window's displayed button types when
 *    switching between keyboard and controller.
 * ** Be sure to update these parameters if you want them updating in-game.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** Map Notetag: <Furniture Types: type, type, type>
 * **** Determines which furniture types are allowed on the map to be placed
 *      from the item menu.
 * **** Furniture items with those any of matching furniture types are allowed
 *      to be placed on the map.
 * **** This does NOT affect the furniture types placed through the Plugin
 *      Commands or pre-existing pieces of furniture placed there.
 * *** Item Notetag: <Furniture Types: type, type, type>
 * **** Determines which furniture types this furniture item is considered to
 *      be when being placed by the player from the item menu.
 * **** Furniture items can only be placed on maps that allow any of the
 *      matching furniture types.
 * **** This does NOT affect the furniture types placed through the Plugin
 *      Commands or pre-existing pieces of furniture placed there.
 * *** Item Notetags: <JS On Place Furniture>
 * *** Item Notetags: <JS On Remove Furniture>
 * **** JavaScript code that is ran whenever furniture is being placed down or
 *      removed. 'Remove' variant will also run at the start of being moved.
 * ** New Plugin Paramter added by Arisu:
 * *** Plugin Parameters > Default > Placeable Priority
 * **** Prioritize placeable furniture when sorting items in the item menu?
 * **** Placeable furniture will be sorted higher than non-placeable furniture.
 * 
 * Version 1.07: June 15, 2023
 * * Bug Fix!
 * ** Plugin should now be compatible with the more recent versions of the
 *    Events and Movement Core! Fix made by Olivia.
 * 
 * Version 1.06: June 30, 2022
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: June 23, 2022
 * * Bug Fixes!
 * ** Stacking hitboxes should no longer be a problem for manual player
 *    placement. Fix made by Arisu.
 * 
 * Version 1.04: February 24, 2022
 * * Compatibility Update
 * ** Hitbox support should now work better. Update made by Arisu.
 * 
 * Version 1.03: February 3, 2022
 * * Bug Fixes!
 * ** Local events should no longer trigger while in Furniture Mode.
 * ** Opacity dimming for the help window will now adjust accordingly when the
 *    sprite is placed on the far left.
 * ** Spelling error fixed with one of the default Plugin Parameters.
 *    Fix made by Arisu.
 * * Feature Updates!
 * ** Default values for Plugin Parameters have been changed to fit the 4:3
 *    ratio resolution sizes. Update made by Arisu.
 * 
 * Verison 1.02: January 20, 2022
 * * Bug Fixes!
 * ** Fixed a typo that caused an error to occur. Fix made by Irina.
 * 
 * Version 1.01: January 6, 2022
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon item usage. Fix by Arisu.
 * 
 * Version 1.00 Official Release Date: February 7, 2022
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
 * @command FurniturePlacement
 * @text Furniture: Add Player Placement
 * @desc Start furniture placement mode for a specific template type.
 * Player determines the actual position.
 *
 * @arg FurnitureItem:eval
 * @text Furniture Item
 * @type item
 * @desc Which furniture item is used to be placed?
 * Non-furniture items won't work.
 * @default 0
 *
 * @arg GenerateItem:eval
 * @text Generate Item?
 * @type boolean
 * @on Generate Item for Player
 * @off Do Not Generate
 * @desc Generate an item for the player? If the player does not
 * have the furniture item in stock, this will not work.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FurnitureSpawnAtXY
 * @text Furniture: Spawn At X, Y
 * @desc Spawns desired furniture at X, Y location on the current map.
 * Cannot use this Plugin Command during Furniture Mode.
 *
 * @arg FurnitureItem:eval
 * @text Furniture Item
 * @type item
 * @desc Which furniture item is used to be placed?
 * Non-furniture items won't work.
 * @default 0
 *
 * @arg TemplateIndex:eval
 * @text Template Index
 * @parent FurnitureItem:eval
 * @desc Which template index do you wish to use for the spawned
 * furniture item? Index starts at 0.
 * @default 0
 *
 * @arg Step2
 * @text Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_E
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TargetEventDespawnFurniture
 * @text Event At X/Y: Despawn Furniture
 * @desc Completely remove the furniture event at X/Y.
 * Can use on either furniture or non-furniture.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TargetEventMoveFurniture
 * @text Event At X/Y: Move Furniture
 * @desc Move the furniture item event at X/Y.
 * Use on a template event that can be spawned and moved.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TargetEventRetrieveFurniture
 * @text Event At X/Y: Retrieve Furniture
 * @desc Retrieve the furniture at X/Y to Player's inventory.
 * Use on a template event that can be spawned and moved.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_T
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ThisEventDespawnFurniture
 * @text This Event: Despawn Furniture
 * @desc Completely remove this current furniture event.
 * Can use on either furniture or non-furniture.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ThisEventMoveFurniture
 * @text This Event: Move Furniture
 * @desc Move this current furniture item.
 * Use on a template event that can be spawned and moved.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ThisEventRetrieveFurniture
 * @text This Event: Retrieve Furniture
 * @desc Retrieve this current furniture to Player's inventory.
 * Use on a template event that can be spawned and moved.
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
 * @param FurnitureSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Default:struct
 * @text Default Settings
 * @type struct<Default>
 * @desc Default settings that are applied to maps and database objects unless specified otherwise.
 * @default {"Maps":"","MapsAllowFurniture:eval":"true","Items":"","RegionsAllow:arraynum":"[]","RegionsForbid:arraynum":"[]","TerrainTagsAllow:arraynum":"[]","TerrainTagsForbid:arraynum":"[]","Checks":"","CheckEventCollision:eval":"true","CheckPassability:eval":"true","Misc":"","CommonEvent:num":"0","EndOnPlace:eval":"false"}
 *
 * @param Filter:struct
 * @text Filter Settings
 * @type struct<Filter>
 * @desc Settings used for the filter effects found with this plugin.
 * @default {"Tone":"","AllowTone:eval":"[0, 0, 0, 0]","ForbidTone:eval":"[255, -64, -64, 64]","Outline":"","OutlineThickness:num":"2","OutlineQuality:num":"0.1","OutlineAllowedColor:eval":"0x00ff00","OutlineForbidColor:eval":"0xff0000"}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc Sound effect settings when interacting with furniture.
 * @default {"Place":"","PlaceName:str":"Equip1","PlaceVolume:num":"90","PlacePitch:num":"100","PlacePan:num":"0","Move":"","MoveName:str":"Equip2","MoveVolume:num":"90","MovePitch:num":"100","MovePan:num":"0"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Settings that adjust how Furniture Mode windows appear in-game and how they behave.
 * @default {"Mechanics":"","HoldTime:num":"90","HelpWindow":"","HelpWindow_BgType:num":"0","HelpWindow_FadeTarget:num":"128","HelpWindow_Col1_OffsetX:num":"+0","HelpWindow_Col2_OffsetX:num":"-48","HelpWindow_DrawJS:func":"\"// Declare Variables\\nlet x1 = Math.round(this.contents.width * 1/4);\\nx1 += Window_FurnitureHelp.OFFSET_COLUMN_1_X;\\nlet x2 = Math.round(this.contents.width * 3/4);\\nx2 += Window_FurnitureHelp.OFFSET_COLUMN_2_X;\\nconst bufferX = this.textWidth(' ');\\n\\n{ // Draw Position Text\\n    this.changePaintOpacity(true);\\n    const text1 = TextManager.FurnitureSystem.PositionButtons;\\n    const text2 = TextManager.FurnitureSystem.PositionText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = 0;\\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\\n} // End Position Text\\n\\n{ // Draw Variant Text\\n    this.changePaintOpacity(this.isHasMultipleVariants());\\n    const text1 = TextManager.FurnitureSystem.VariantButtons;\\n    const text2 = TextManager.FurnitureSystem.VariantText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = this.lineHeight();\\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\\n} // End Variant Text\\n\\n{ // Draw Confirm Text\\n    this.changePaintOpacity(true);\\n    const text1 = TextManager.FurnitureSystem.ConfirmButtons;\\n    const text2 = TextManager.FurnitureSystem.ConfirmText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = 0;\\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\\n} // End Confirm Text\\n\\n{ // Draw Cancel Text\\n    this.changePaintOpacity(this.isCancelExitPrevented());\\n    const text1 = TextManager.FurnitureSystem.CancelButtons;\\n    const text2 = TextManager.FurnitureSystem.CancelText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = this.lineHeight();\\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\\n} // End Cancel Text\"","HelpWindow_RectJS:func":"\"let ww = Graphics.width;\\nlet wh = this.calcWindowHeight(2, false);\\nlet wx = 0;\\nlet wy = Graphics.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ItemWindow":"","ItemWindow_FadeTarget:num":"128","ItemWindow_DrawJS:func":"\"// Declare Variables\\nconst color1 = ColorManager.dimColor1();\\nconst color2 = ColorManager.dimColor2();\\nconst halfX = Math.round(this.innerWidth / 2);\\nconst height = this.innerHeight;\\nthis.contents.fillRect(0, 0, halfX, height, color1);\\nthis.contents.gradientFillRect(0 + halfX, 0, halfX, height, color1, color2);\\n\\n// Draw Item\\n// With VisuMZ_1_ItemsEquipsCore\\nif (Imported.VisuMZ_1_ItemsEquipsCore) {\\n    const x = this.itemPadding();\\n    const y = 0;\\n    const w = this.innerWidth - (x * 16);\\n    this.drawItemNumber(this._item, x, y, x * 8);\\n    this.drawItemName(this._item, x * 10, y, w);\\n// Without VisuMZ_1_ItemsEquipsCore\\n} else {\\n    const x = this.itemPadding();\\n    const y = 0;\\n    const w = this.innerWidth - (x * 2);\\n    this.drawItemName(this._item, x, y, w);\\n    this.drawItemNumber(this._item, x, y, w - (x * 8));\\n}\"","ItemWindow_RectJS:func":"\"let ww = Math.max(Math.round(Graphics.width / 3), 408);\\nlet wh = this.calcWindowHeight(1, false);\\nlet wx = -$gameSystem.windowPadding();\\nlet wy = Math.round(Graphics.height * 1 / 6);\\nreturn new Rectangle(wx, wy, ww, wh);\"","CancelButton":"","CancelButtonXPositionJS:func":"\"// Declare Variables\\nconst button = arguments[0];\\n\\n// Return Value\\nreturn Graphics.width - button.width - 4;\"","CancelButtonYPositionJS:func":"\"// Declare Variables\\nconst button = arguments[0];\\n\\n// Return Value\\nreturn Math.round((Graphics.height - Graphics.boxHeight) / 2);\"","Vocab":"","PositionButtons:str":"Arrows/Mouse","PositionText:str":"Position","VariantButtons:str":"Q/W/Scroll Wheel","VariantText:str":"Swap Variants","ConfirmButtons:str":"Z/Enter/LMB","ConfirmText:str":"Place Object","CancelButtons:str":"X/ESC/RMB","CancelText:str":"Finish Placement"}
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
 * Default Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Maps
 * @text Default Map Settings
 *
 * @param MapsAllowFurniture:eval
 * @text Allow Furniture Mode?
 * @parent Maps
 * @type boolean
 * @on Allow By Default
 * @off Disallow By Default
 * @desc Allow all maps the ability to put furniture on them by
 * default? If not, requires notetags.
 * @default true
 *
 * @param Items
 * @text Default Item Settings
 *
 * @param RegionsAllow:arraynum
 * @text Allowed Regions
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture with this MUST be placed in these regions.
 * CANNOT be used with Forbid Regions.
 * @default []
 *
 * @param RegionsForbid:arraynum
 * @text Forbid Regions
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture CANNOT be placed in these regions.
 * CANNOT be used with Allowed Regions
 * @default []
 *
 * @param TerrainTagsAllow:arraynum
 * @text Allowed Terrain Tags
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture with this MUST be placed in these tags.
 * CANNOT be used with Forbid Terrain Tags.
 * @default []
 *
 * @param TerrainTagsForbid:arraynum
 * @text Forbid Terrain Tags
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture CANNOT be placed in these tags.
 * CANNOT be used with Allowed Terrain Tags.
 * @default []
 *
 * @param prioritizePlaceable:eval
 * @text Placeable Priority
 * @type boolean
 * @on Prioritize
 * @off Normal
 * @desc Prioritize placeable furniture when sorting items in the item menu?
 * @default true
 * 
 * @param Checks
 * @text Default Check Settings
 *
 * @param CheckEventCollision:eval
 * @text Event Collision?
 * @parent Checks
 * @type boolean
 * @on Check By Default
 * @off Don't Check By Default
 * @desc Check event collision by default before placement?
 * Recommended to be enabled.
 * @default true
 *
 * @param CheckPassability:eval
 * @text Passability?
 * @parent Checks
 * @type boolean
 * @on Check By Default
 * @off Don't Check By Default
 * @desc Check passability by default before placement?
 * Recommended to be enabled.
 * @default true
 * 
 * @param Misc
 * @text Default Misc Settings
 *
 * @param CommonEvent:num
 * @text Common Event
 * @parent Misc
 * @type common_event
 * @desc Run which Common Event by default after placing furniture?
 * Use 0 for no Common Event.
 * @default 0
 *
 * @param EndOnPlace:eval
 * @text End on Place?
 * @parent Misc
 * @type boolean
 * @on End After Placing 1
 * @off End Until Empty/Cancelled
 * @desc End Furniture Mode after placing 1 item?
 * Or end until items are empty or cancelled?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Filter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Filter:
 *
 * @param Tone
 * @text Tone Filter
 *
 * @param AllowTone:eval
 * @text Allowed Tone
 * @parent Tone
 * @desc Tone when furniture is over a placeable tile.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param ForbidTone:eval
 * @text Forbidden Tone
 * @parent Tone
 * @desc Tone when furniture is over a forbidden tile.
 * Format: [Red, Green, Blue, Gray]
 * @default [255, -64, -64, 64]
 *
 * @param Outline
 * @text Outline Filter
 *
 * @param OutlineThickness:num
 * @text Thickness
 * @parent Outline
 * @type number
 * @min 1
 * @desc What outline thickness do you want for furniture cursor?
 * Requires Pixi JS Filters.
 * @default 2
 *
 * @param OutlineQuality:num
 * @text Quality
 * @parent Outline
 * @desc Quality level for the outline filter.
 * Requires Pixi JS Filters.
 * @default 0.1
 *
 * @param OutlineAllowedColor:eval
 * @text Allowed Color
 * @parent Outline
 * @desc System hex code color for allowed color.
 * Format: 0xRRGGBB   Requires Pixi JS Filters.
 * @default 0x00ff00
 *
 * @param OutlineForbidColor:eval
 * @text Forbidden Color
 * @parent Outline
 * @desc System hex code color for forbidden color.
 * Format: 0xRRGGBB   Requires Pixi JS Filters.
 * @default 0xff0000
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Place
 * @text Place Furniture
 *
 * @param PlaceName:str
 * @text Filename
 * @parent Place
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Equip1
 *
 * @param PlaceVolume:num
 * @text Volume
 * @parent Place
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param PlacePitch:num
 * @text Pitch
 * @parent Place
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param PlacePan:num
 * @text Pan
 * @parent Place
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Move
 * @text Move Furniture
 *
 * @param MoveName:str
 * @text Filename
 * @parent Move
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Equip2
 *
 * @param MoveVolume:num
 * @text Volume
 * @parent Move
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param MovePitch:num
 * @text Pitch
 * @parent Move
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param MovePan:num
 * @text Pan
 * @parent Move
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Mechanics
 * @text Mechanical Settings
 *
 * @param HoldTime:num
 * @text Hold Time
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc How many frames must a furniture event be clicked and held before entering move furniture mode?
 * @default 90
 *
 * @param HelpWindow
 * @text Help Window Settings
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
 * @default 1
 *
 * @param HelpWindow_FadeTarget:num
 * @text Fade Target: Opacity
 * @parent HelpWindow
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value should this window fade to when the mouse cursor is over it?
 * @default 128
 *
 * @param HelpWindow_Col1_OffsetX:num
 * @text Column 1: Offset
 * @parent HelpWindow
 * @desc Offset the column 1 text by how many pixels?
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param HelpWindow_Col2_OffsetX:num
 * @text Column 2: Offset
 * @parent HelpWindow
 * @desc Offset the column 2 text by how many pixels?
 * Negative: Left; Positive: Right
 * @default -48
 * 
 * @param HelpWindow_DrawJS:func
 * @text JS: Draw
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine what is drawn inside this window.
 * @default "// Declare Variables\nlet x1 = Math.round(this.contents.width * 1/4);\nx1 += Window_FurnitureHelp.OFFSET_COLUMN_1_X;\nlet x2 = Math.round(this.contents.width * 3/4);\nx2 += Window_FurnitureHelp.OFFSET_COLUMN_2_X;\nconst bufferX = this.textWidth(' ');\n\n{ // Draw Position Text\n    this.changePaintOpacity(true);\n    const text1 = TextManager.FurnitureSystem.PositionButtons;\n    const text2 = TextManager.FurnitureSystem.PositionText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = 0;\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\n} // End Position Text\n\n{ // Draw Variant Text\n    this.changePaintOpacity(this.isHasMultipleVariants());\n    const text1 = TextManager.FurnitureSystem.VariantButtons;\n    const text2 = TextManager.FurnitureSystem.VariantText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = this.lineHeight();\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\n} // End Variant Text\n\n{ // Draw Confirm Text\n    this.changePaintOpacity(true);\n    const text1 = TextManager.FurnitureSystem.ConfirmButtons;\n    const text2 = TextManager.FurnitureSystem.ConfirmText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = 0;\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\n} // End Confirm Text\n\n{ // Draw Cancel Text\n    this.changePaintOpacity(this.isCancelExitPrevented());\n    const text1 = TextManager.FurnitureSystem.CancelButtons;\n    const text2 = TextManager.FurnitureSystem.CancelText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = this.lineHeight();\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\n} // End Cancel Text"
 *
 * @param HelpWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "let ww = Graphics.width;\nlet wh = this.calcWindowHeight(2, false);\nlet wx = 0;\nlet wy = Graphics.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ItemWindow
 * @text Item Window Settings
 *
 * @param ItemWindow_FadeTarget:num
 * @text Fade Target: Opacity
 * @parent ItemWindow
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value should this window fade to when the mouse cursor is over it?
 * @default 128
 * 
 * @param ItemWindow_DrawJS:func
 * @text JS: Draw
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine what is drawn inside this window.
 * @default "// Declare Variables\nconst color1 = ColorManager.dimColor1();\nconst color2 = ColorManager.dimColor2();\nconst halfX = Math.round(this.innerWidth / 2);\nconst height = this.innerHeight;\nthis.contents.fillRect(0, 0, halfX, height, color1);\nthis.contents.gradientFillRect(0 + halfX, 0, halfX, height, color1, color2);\n\n// Draw Item\n// With VisuMZ_1_ItemsEquipsCore\nif (Imported.VisuMZ_1_ItemsEquipsCore) {\n    const x = this.itemPadding();\n    const y = 0;\n    const w = this.innerWidth - (x * 16);\n    this.drawItemNumber(this._item, x, y, x * 8);\n    this.drawItemName(this._item, x * 10, y, w);\n// Without VisuMZ_1_ItemsEquipsCore\n} else {\n    const x = this.itemPadding();\n    const y = 0;\n    const w = this.innerWidth - (x * 2);\n    this.drawItemName(this._item, x, y, w);\n    this.drawItemNumber(this._item, x, y, w - (x * 8));\n}"
 *
 * @param ItemWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "let ww = Math.max(Math.round(Graphics.width / 3), 408);\nlet wh = this.calcWindowHeight(1, false);\nlet wx = -$gameSystem.windowPadding();\nlet wy = Math.round(Graphics.height * 1 / 6);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CancelButton
 * @text Cancel Button Settings
 *
 * @param CancelButtonXPositionJS:func
 * @text JS: X Position
 * @parent CancelButton
 * @type note
 * @desc Code used to determine the x coordinate for this button.
 * @default "// Declare Variables\nconst button = arguments[0];\n\n// Return Value\nreturn Graphics.width - button.width - 4;"
 *
 * @param CancelButtonYPositionJS:func
 * @text JS: Y Position
 * @parent CancelButton
 * @type note
 * @desc Code used to determine the y coordinate for this button.
 * @default "// Declare Variables\nconst button = arguments[0];\n\n// Return Value\nreturn Math.round((Graphics.height - Graphics.boxHeight) / 2);"
 *
 * @param Vocab
 * @text Vocabulary Settings
 *
 * @param PositionButtons:str
 * @text Position: Button(s)
 * @parent Vocab
 * @desc Buttons to use for positioning furniture.
 * Text codes allowed.
 * @default <>/Mouse
 *
 * @param PositionText:str
 * @text Position: Action
 * @parent Vocab
 * @desc Text to use for positioning furniture.
 * Text codes allowed.
 * @default Position
 *
 * @param VariantButtons:str
 * @text Variant: Button(s)
 * @parent Vocab
 * @desc Buttons to use for changing variants.
 * Text codes allowed.
 * @default Q/W/Scroll Wheel
 *
 * @param VariantText:str
 * @text Variant: Action
 * @parent Vocab
 * @desc Text to use for changing variants.
 * Text codes allowed.
 * @default Swap Variants
 *
 * @param ConfirmButtons:str
 * @text Confirm: Button(s)
 * @parent Vocab
 * @desc Buttons to use for confirming location.
 * Text codes allowed.
 * @default Z/Enter/LMB
 *
 * @param ConfirmText:str
 * @text Confirm: Action
 * @parent Vocab
 * @desc Text to use for confirming location.
 * Text codes allowed.
 * @default Place Object
 *
 * @param CancelButtons:str
 * @text Cancel: Button(s)
 * @parent Vocab
 * @desc Buttons to use for confirming location.
 * Text codes allowed.
 * @default X/ESC/RMB
 *
 * @param CancelText:str
 * @text Cancel: Action
 * @parent Vocab
 * @desc Text to use for confirming location.
 * Text codes allowed.
 * @default Finish Placement
 *
 */
//=============================================================================

const _0x5de8fc=_0x2ed7;(function(_0x185ca7,_0x11b0ad){const _0x3af33d=_0x2ed7,_0x2915b9=_0x185ca7();while(!![]){try{const _0x3b886e=parseInt(_0x3af33d(0x18a))/0x1+-parseInt(_0x3af33d(0x241))/0x2*(-parseInt(_0x3af33d(0x2c1))/0x3)+-parseInt(_0x3af33d(0x25f))/0x4*(parseInt(_0x3af33d(0x15c))/0x5)+-parseInt(_0x3af33d(0x2ad))/0x6+-parseInt(_0x3af33d(0x1c3))/0x7*(-parseInt(_0x3af33d(0x1a3))/0x8)+parseInt(_0x3af33d(0x242))/0x9+-parseInt(_0x3af33d(0x245))/0xa;if(_0x3b886e===_0x11b0ad)break;else _0x2915b9['push'](_0x2915b9['shift']());}catch(_0x1a15e5){_0x2915b9['push'](_0x2915b9['shift']());}}}(_0x2851,0xc5d1b));function _0x2ed7(_0x3a81c1,_0xed0766){const _0x285182=_0x2851();return _0x2ed7=function(_0x2ed789,_0x2db459){_0x2ed789=_0x2ed789-0x152;let _0x534595=_0x285182[_0x2ed789];return _0x534595;},_0x2ed7(_0x3a81c1,_0xed0766);}var label=_0x5de8fc(0x206),tier=tier||0x0,dependencies=['VisuMZ_1_EventsMoveCore'],pluginData=$plugins[_0x5de8fc(0x163)](function(_0x2eca04){const _0x5e08a1=_0x5de8fc;return _0x2eca04[_0x5e08a1(0x1c8)]&&_0x2eca04[_0x5e08a1(0x257)][_0x5e08a1(0x212)]('['+label+']');})[0x0];VisuMZ[label][_0x5de8fc(0x2a2)]=VisuMZ[label][_0x5de8fc(0x2a2)]||{},VisuMZ[_0x5de8fc(0x2e9)]=function(_0x470730,_0x5865fa){const _0x4be7fd=_0x5de8fc;for(const _0x187a4c in _0x5865fa){if(_0x187a4c[_0x4be7fd(0x228)](/(.*):(.*)/i)){const _0xd08a7d=String(RegExp['$1']),_0x140505=String(RegExp['$2'])['toUpperCase']()[_0x4be7fd(0x2c6)]();let _0x18131c,_0x57698a,_0x207063;switch(_0x140505){case _0x4be7fd(0x2ae):_0x18131c=_0x5865fa[_0x187a4c]!==''?Number(_0x5865fa[_0x187a4c]):0x0;break;case _0x4be7fd(0x1cf):_0x57698a=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):[],_0x18131c=_0x57698a[_0x4be7fd(0x27d)](_0x4acdac=>Number(_0x4acdac));break;case'EVAL':_0x18131c=_0x5865fa[_0x187a4c]!==''?eval(_0x5865fa[_0x187a4c]):null;break;case _0x4be7fd(0x264):_0x57698a=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):[],_0x18131c=_0x57698a[_0x4be7fd(0x27d)](_0x37bb18=>eval(_0x37bb18));break;case _0x4be7fd(0x24d):_0x18131c=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):'';break;case _0x4be7fd(0x1f6):_0x57698a=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):[],_0x18131c=_0x57698a[_0x4be7fd(0x27d)](_0x11bf73=>JSON[_0x4be7fd(0x160)](_0x11bf73));break;case _0x4be7fd(0x1ad):_0x18131c=_0x5865fa[_0x187a4c]!==''?new Function(JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c])):new Function('return\x200');break;case _0x4be7fd(0x169):_0x57698a=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):[],_0x18131c=_0x57698a[_0x4be7fd(0x27d)](_0x26588c=>new Function(JSON[_0x4be7fd(0x160)](_0x26588c)));break;case _0x4be7fd(0x215):_0x18131c=_0x5865fa[_0x187a4c]!==''?String(_0x5865fa[_0x187a4c]):'';break;case _0x4be7fd(0x265):_0x57698a=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):[],_0x18131c=_0x57698a[_0x4be7fd(0x27d)](_0x40a9e6=>String(_0x40a9e6));break;case _0x4be7fd(0x305):_0x207063=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):{},_0x18131c=VisuMZ[_0x4be7fd(0x2e9)]({},_0x207063);break;case _0x4be7fd(0x211):_0x57698a=_0x5865fa[_0x187a4c]!==''?JSON[_0x4be7fd(0x160)](_0x5865fa[_0x187a4c]):[],_0x18131c=_0x57698a[_0x4be7fd(0x27d)](_0x39cd9e=>VisuMZ[_0x4be7fd(0x2e9)]({},JSON[_0x4be7fd(0x160)](_0x39cd9e)));break;default:continue;}_0x470730[_0xd08a7d]=_0x18131c;}}return _0x470730;},(_0x1b1462=>{const _0x3b3f22=_0x5de8fc,_0x33ac41=_0x1b1462[_0x3b3f22(0x19f)];for(const _0x4c31b5 of dependencies){if(!Imported[_0x4c31b5]){alert(_0x3b3f22(0x29f)['format'](_0x33ac41,_0x4c31b5)),SceneManager[_0x3b3f22(0x2ef)]();break;}}const _0x21893f=_0x1b1462['description'];if(_0x21893f[_0x3b3f22(0x228)](/\[Version[ ](.*?)\]/i)){const _0x35af27=Number(RegExp['$1']);_0x35af27!==VisuMZ[label][_0x3b3f22(0x2e3)]&&(alert(_0x3b3f22(0x2be)[_0x3b3f22(0x25c)](_0x33ac41,_0x35af27)),SceneManager[_0x3b3f22(0x2ef)]());}if(_0x21893f[_0x3b3f22(0x228)](/\[Tier[ ](\d+)\]/i)){const _0x50c1bf=Number(RegExp['$1']);_0x50c1bf<tier?(alert(_0x3b3f22(0x2d6)[_0x3b3f22(0x25c)](_0x33ac41,_0x50c1bf,tier)),SceneManager[_0x3b3f22(0x2ef)]()):tier=Math[_0x3b3f22(0x23c)](_0x50c1bf,tier);}VisuMZ[_0x3b3f22(0x2e9)](VisuMZ[label][_0x3b3f22(0x2a2)],_0x1b1462[_0x3b3f22(0x1a6)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],'FurniturePlacement',_0x8f585a=>{const _0x297544=_0x5de8fc;if(!SceneManager['isSceneMap']())return;if(!SceneManager['canPlaceFurniture']())return;if($gameMap['isFurnitureSystemMode']())return;VisuMZ[_0x297544(0x2e9)](_0x8f585a,_0x8f585a);const _0x54ee8b=_0x8f585a['FurnitureItem'],_0x3e1d8e=$dataItems[_0x54ee8b];if(!DataManager[_0x297544(0x266)](_0x3e1d8e))return;const _0x448201=_0x8f585a[_0x297544(0x201)];_0x448201&&$gameParty[_0x297544(0x28a)](_0x3e1d8e,0x1);if($gameParty[_0x297544(0x2d9)](_0x3e1d8e)<=0x0)return;$gameMap[_0x297544(0x281)](_0x3e1d8e);}),PluginManager[_0x5de8fc(0x1a2)](pluginData[_0x5de8fc(0x19f)],_0x5de8fc(0x2ce),_0x3b2f65=>{const _0x43ac4a=_0x5de8fc;if(!SceneManager['isSceneMap']())return;if(!SceneManager['canPlaceFurniture']())return;if($gameMap[_0x43ac4a(0x307)]())return;VisuMZ[_0x43ac4a(0x2e9)](_0x3b2f65,_0x3b2f65);const _0x243f0e=_0x3b2f65[_0x43ac4a(0x24a)],_0x1383d6=$dataItems[_0x243f0e];if(!DataManager[_0x43ac4a(0x266)](_0x1383d6))return;const _0x2e8f38=_0x3b2f65[_0x43ac4a(0x1f0)],_0x2cc829=_0x3b2f65[_0x43ac4a(0x1d5)],_0x3106fb=_0x3b2f65[_0x43ac4a(0x2b6)],_0x1eece7=$gameMap['devPlaceFurnitureAtXY'](_0x1383d6,_0x2e8f38,_0x2cc829,_0x3106fb),_0x447bb6=_0x3b2f65[_0x43ac4a(0x1da)]||0x0;_0x447bb6&&$gameSwitches[_0x43ac4a(0x2a7)](_0x447bb6,!!_0x1eece7);}),PluginManager[_0x5de8fc(0x1a2)](pluginData[_0x5de8fc(0x19f)],_0x5de8fc(0x309),_0x29de94=>{const _0x1683b4=_0x5de8fc;if(!SceneManager[_0x1683b4(0x16e)]())return;if(!SceneManager[_0x1683b4(0x1af)]())return;if($gameMap[_0x1683b4(0x307)]())return;VisuMZ['ConvertParams'](_0x29de94,_0x29de94);const _0x55fa77=_0x29de94[_0x1683b4(0x24a)],_0x104996=$dataItems[_0x55fa77];if(!DataManager[_0x1683b4(0x266)](_0x104996))return;const _0x5716a1=_0x29de94[_0x1683b4(0x1f0)],_0x1ef400=_0x29de94[_0x1683b4(0x193)],_0x44c4d5=$gameMap[_0x1683b4(0x28f)](_0x104996,_0x5716a1,_0x1ef400),_0x4345d5=_0x29de94[_0x1683b4(0x1da)]||0x0;_0x4345d5&&$gameSwitches['setValue'](_0x4345d5,!!_0x44c4d5);}),PluginManager[_0x5de8fc(0x1a2)](pluginData['name'],_0x5de8fc(0x175),_0x29f250=>{const _0x4997c0=_0x5de8fc;if(!SceneManager[_0x4997c0(0x16e)]())return;if(!SceneManager[_0x4997c0(0x1af)]())return;if($gameMap[_0x4997c0(0x307)]())return;VisuMZ['ConvertParams'](_0x29f250,_0x29f250);const _0x2e286f=_0x29f250[_0x4997c0(0x24a)],_0x271fde=$dataItems[_0x2e286f];if(!DataManager[_0x4997c0(0x266)](_0x271fde))return;const _0x834330=_0x29f250[_0x4997c0(0x1f0)],_0x20d61a=_0x29f250[_0x4997c0(0x269)],_0x187b41=$gameMap[_0x4997c0(0x30b)](_0x271fde,_0x834330,_0x20d61a),_0x168fa1=_0x29f250[_0x4997c0(0x1da)]||0x0;_0x168fa1&&$gameSwitches[_0x4997c0(0x2a7)](_0x168fa1,!!_0x187b41);}),PluginManager[_0x5de8fc(0x1a2)](pluginData[_0x5de8fc(0x19f)],'TargetEventDespawnFurniture',_0x53f6e6=>{const _0xf1740c=_0x5de8fc;if(!SceneManager[_0xf1740c(0x16e)]())return;if(!SceneManager[_0xf1740c(0x1af)]())return;const _0x1f8742=_0x53f6e6[_0xf1740c(0x1d5)],_0x4a3bfe=_0x53f6e6[_0xf1740c(0x2b6)],_0x255d2a=$gameMap[_0xf1740c(0x20d)](_0x1f8742,_0x4a3bfe);if(_0x255d2a['length']<=0x0)return;const _0x4a0adf=_0x255d2a[0x0];if(!_0x4a0adf)return;$gameMap[_0xf1740c(0x2ff)](_0x4a0adf['eventId']());}),PluginManager[_0x5de8fc(0x1a2)](pluginData[_0x5de8fc(0x19f)],_0x5de8fc(0x20e),_0x55b47d=>{const _0x1f4848=_0x5de8fc;if(!SceneManager['isSceneMap']())return;if(!SceneManager['canPlaceFurniture']())return;if($gameMap[_0x1f4848(0x307)]())return;const _0xd03b49=_0x55b47d['PosX'],_0x10ddef=_0x55b47d[_0x1f4848(0x2b6)],_0xbcc176=$gameMap[_0x1f4848(0x20d)](_0xd03b49,_0x10ddef);if(_0xbcc176['length']<=0x0)return;const _0x5cb596=_0xbcc176[0x0];if(!_0x5cb596)return;if(!_0x5cb596[_0x1f4848(0x2ec)]())return;SceneManager[_0x1f4848(0x20c)][_0x1f4848(0x26b)](_0x5cb596);}),PluginManager['registerCommand'](pluginData[_0x5de8fc(0x19f)],_0x5de8fc(0x1bb),_0x23f5f4=>{const _0x3518d8=_0x5de8fc;if(!SceneManager[_0x3518d8(0x16e)]())return;if(!SceneManager['canPlaceFurniture']())return;const _0x4abf8d=_0x23f5f4[_0x3518d8(0x1d5)],_0x357928=_0x23f5f4[_0x3518d8(0x2b6)],_0x368e4b=$gameMap[_0x3518d8(0x20d)](_0x4abf8d,_0x357928);if(_0x368e4b[_0x3518d8(0x187)]<=0x0)return;const _0x23ece0=_0x368e4b[0x0];if(!_0x23ece0)return;if(!_0x23ece0[_0x3518d8(0x2ec)]())return;const _0x10f1df=_0x23ece0['_furnitureSystemSettings'],_0x5cb262=_0x10f1df[_0x3518d8(0x1be)],_0x13910a=$dataItems[_0x5cb262];$gameMap[_0x3518d8(0x1f9)](_0x13910a),_0x13910a&&_0x13910a[_0x3518d8(0x1d9)]&&$gameParty[_0x3518d8(0x28a)](_0x13910a,0x1),$gameMap[_0x3518d8(0x2ff)](_0x23ece0['eventId']());}),PluginManager[_0x5de8fc(0x1a2)](pluginData['name'],_0x5de8fc(0x19a),_0xc9389=>{const _0x16ecca=_0x5de8fc;if(!SceneManager[_0x16ecca(0x16e)]())return;if(!SceneManager['canPlaceFurniture']())return;const _0x46a2df=$gameTemp['getLastPluginCommandInterpreter']();if(!_0x46a2df)return;const _0x3f189d=$gameMap[_0x16ecca(0x2ba)](_0x46a2df['eventId']());if(!_0x3f189d)return;$gameMap[_0x16ecca(0x2ff)](_0x3f189d['eventId']());}),PluginManager[_0x5de8fc(0x1a2)](pluginData[_0x5de8fc(0x19f)],_0x5de8fc(0x274),_0x8d247a=>{const _0xbd20f8=_0x5de8fc;if(!SceneManager[_0xbd20f8(0x16e)]())return;if(!SceneManager[_0xbd20f8(0x1af)]())return;if($gameMap[_0xbd20f8(0x307)]())return;const _0x212757=$gameTemp[_0xbd20f8(0x197)]();if(!_0x212757)return;const _0x2214ec=$gameMap[_0xbd20f8(0x2ba)](_0x212757[_0xbd20f8(0x16b)]());if(!_0x2214ec)return;if(!_0x2214ec[_0xbd20f8(0x2ec)]())return;SceneManager[_0xbd20f8(0x20c)][_0xbd20f8(0x26b)](_0x2214ec);}),PluginManager[_0x5de8fc(0x1a2)](pluginData[_0x5de8fc(0x19f)],_0x5de8fc(0x1c0),_0x485914=>{const _0x31d5a0=_0x5de8fc;if(!SceneManager[_0x31d5a0(0x16e)]())return;if(!SceneManager[_0x31d5a0(0x1af)]())return;const _0xf4d847=$gameTemp[_0x31d5a0(0x197)]();if(!_0xf4d847)return;const _0x54915a=$gameMap[_0x31d5a0(0x2ba)](_0xf4d847['eventId']());if(!_0x54915a)return;if(!_0x54915a[_0x31d5a0(0x2ec)]())return;const _0x47bde9=_0x54915a[_0x31d5a0(0x259)],_0x553e53=_0x47bde9['OnPlaceConsumeItem'],_0x17fe01=$dataItems[_0x553e53];$gameMap[_0x31d5a0(0x1f9)](_0x17fe01),_0x17fe01&&_0x17fe01['consumable']&&$gameParty['gainItem'](_0x17fe01,0x1),$gameMap[_0x31d5a0(0x2ff)](_0x54915a['eventId']());}),VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x1b3)]={'FurnitureTemplates':/<FURNITURE (?:TEMPLATE|TEMPLATES):[ ](.*)>/i,'FurnitureAllowRegions':/<FURNITURE (?:ALLOW|ALLOWED) (?:REGION|REGIONS):[ ](.*)>/i,'FurnitureForbidRegions':/<FURNITURE (?:FORBID|FORBIDDEN) (?:REGION|REGIONS):[ ](.*)>/i,'FurnitureAllowTerrainTags':/<FURNITURE (?:ALLOW|ALLOWED) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'FurnitureForbidTerrainTags':/<FURNITURE (?:FORBID|FORBIDDEN) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'FurnitureNeedPassability':/<FURNITURE NEED PASSABILITY>/i,'FurnitureFreePassability':/<FURNITURE FREE PASSABILITY>/i,'FurnitureNeedEventCollisionCheck':/<FURNITURE CHECK EVENT COLLISION>/i,'FurnitureFreeEventCollisionCheck':/<FURNITURE ALLOW EVENT STACKING>/i,'FurnitureOnPlaceCommonEvent':/<FURNITURE PLACE COMMON EVENT:[ ](\d+)>/i,'FurnitureOnPlaceEndOnce':/<FURNITURE PLACE ONCE>/i,'FurnitureOnPlaceEndless':/<FURNITURE PLACE UNTIL EMPTY>/i,'FurniturePreventCancelExit':/<FURNITURE PREVENT CANCEL EXIT>/i,'FurnitureType':/<FURNITURE TYPE(?:|S):[ ](.*)>/i,'JsOnPlace':/<JS ON PLACE FURNITURE>\s*([\s\S]*)\s*<\/JS ON PLACE FURNITURE>/i,'JsOnRemove':/<JS ON REMOVE FURNITURE>\s*([\s\S]*)\s*<\/JS ON REMOVE FURNITURE>/i,'FurnitureNotMovable':/<FURNITURE NOT MOVABLE>/i,'DisallowFurniture':/<NO FURNITURE>/i,'AllowFurniture':/<ALLOW FURNITURE>/i},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x229)]=Scene_Boot[_0x5de8fc(0x2d3)]['onDatabaseLoaded'],Scene_Boot[_0x5de8fc(0x2d3)][_0x5de8fc(0x2a4)]=function(){const _0x436e25=_0x5de8fc;VisuMZ[_0x436e25(0x206)][_0x436e25(0x229)]['call'](this),this[_0x436e25(0x18d)]();},Scene_Boot[_0x5de8fc(0x2d3)][_0x5de8fc(0x18d)]=function(){const _0x4cf07c=_0x5de8fc;if(VisuMZ[_0x4cf07c(0x29c)])return;const _0xb0de6e=VisuMZ[_0x4cf07c(0x206)][_0x4cf07c(0x1b3)],_0x428fea=$dataItems;for(const _0x566490 of _0x428fea){if(!_0x566490)continue;VisuMZ[_0x4cf07c(0x206)][_0x4cf07c(0x155)](_0x566490,_0x4cf07c(0x320),_0xb0de6e[_0x4cf07c(0x198)]),VisuMZ[_0x4cf07c(0x206)][_0x4cf07c(0x155)](_0x566490,'OnRemoveFurniture',_0xb0de6e[_0x4cf07c(0x230)]);}},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x306)]=VisuMZ[_0x5de8fc(0x306)],VisuMZ[_0x5de8fc(0x306)]=function(_0x3963a8){const _0x595c8d=_0x5de8fc;VisuMZ[_0x595c8d(0x206)]['ParseItemNotetags'][_0x595c8d(0x1ef)](this,_0x3963a8);const _0x14a4cb=VisuMZ['FurnitureSystem'][_0x595c8d(0x1b3)];VisuMZ[_0x595c8d(0x206)]['createJS'](_0x3963a8,_0x595c8d(0x320),_0x14a4cb[_0x595c8d(0x198)]),VisuMZ[_0x595c8d(0x206)][_0x595c8d(0x155)](_0x3963a8,_0x595c8d(0x165),_0x14a4cb['JsOnRemove']);},VisuMZ[_0x5de8fc(0x206)]['JS']={},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x155)]=function(_0x44da00,_0x515c0e,_0x298646){const _0x2975c3=_0x5de8fc,_0x5cdd60=_0x44da00[_0x2975c3(0x26a)];if(_0x5cdd60[_0x2975c3(0x228)](_0x298646)){const _0x159508=String(RegExp['$1']),_0x560df5=_0x2975c3(0x17e)['format'](_0x159508),_0x43457b=VisuMZ['FurnitureSystem'][_0x2975c3(0x1c7)](_0x44da00,_0x515c0e);VisuMZ[_0x2975c3(0x206)]['JS'][_0x43457b]=new Function(_0x560df5);}},VisuMZ[_0x5de8fc(0x206)]['createKeyJS']=function(_0x4c006e,_0x433db2){const _0x4d3c6d=_0x5de8fc;if(VisuMZ['createKeyJS'])return VisuMZ['createKeyJS'](_0x4c006e,_0x433db2);let _0x15a197='';if($dataActors['includes'](_0x4c006e))_0x15a197=_0x4d3c6d(0x1aa)[_0x4d3c6d(0x25c)](_0x4c006e['id'],_0x433db2);if($dataClasses['includes'](_0x4c006e))_0x15a197=_0x4d3c6d(0x26e)[_0x4d3c6d(0x25c)](_0x4c006e['id'],_0x433db2);if($dataSkills[_0x4d3c6d(0x212)](_0x4c006e))_0x15a197=_0x4d3c6d(0x21a)['format'](_0x4c006e['id'],_0x433db2);if($dataItems['includes'](_0x4c006e))_0x15a197=_0x4d3c6d(0x22b)[_0x4d3c6d(0x25c)](_0x4c006e['id'],_0x433db2);if($dataWeapons[_0x4d3c6d(0x212)](_0x4c006e))_0x15a197=_0x4d3c6d(0x1ee)['format'](_0x4c006e['id'],_0x433db2);if($dataArmors[_0x4d3c6d(0x212)](_0x4c006e))_0x15a197=_0x4d3c6d(0x2d1)[_0x4d3c6d(0x25c)](_0x4c006e['id'],_0x433db2);if($dataEnemies[_0x4d3c6d(0x212)](_0x4c006e))_0x15a197=_0x4d3c6d(0x319)[_0x4d3c6d(0x25c)](_0x4c006e['id'],_0x433db2);if($dataStates['includes'](_0x4c006e))_0x15a197=_0x4d3c6d(0x26c)[_0x4d3c6d(0x25c)](_0x4c006e['id'],_0x433db2);return _0x15a197;},DataManager[_0x5de8fc(0x266)]=function(_0x5420cf){const _0x1032a8=_0x5de8fc;if(!_0x5420cf)return![];if(!DataManager[_0x1032a8(0x2ac)](_0x5420cf))return![];const _0x136d7=VisuMZ[_0x1032a8(0x206)]['RegExp'],_0x175546=_0x5420cf[_0x1032a8(0x26a)];if(_0x175546[_0x1032a8(0x228)](_0x136d7[_0x1032a8(0x182)]))return!![];return![];},DataManager['getFurnitureTypes']=function(_0x82d923){const _0xd7d268=_0x5de8fc;if(!DataManager['isFurnitureItem'](_0x82d923))return[_0xd7d268(0x1ff)];this[_0xd7d268(0x204)]=this['_cache_getFurnitureTypes']||{};if(this[_0xd7d268(0x204)][_0x82d923['id']])return this['_cache_getFurnitureTypes'][_0x82d923['id']];let _0x10494d=[];const _0x1f499f=VisuMZ[_0xd7d268(0x206)][_0xd7d268(0x1b3)],_0x3defa0=_0x82d923[_0xd7d268(0x26a)];if(_0x3defa0[_0xd7d268(0x228)](_0x1f499f[_0xd7d268(0x200)])){const _0xd651d1=String(RegExp['$1'])[_0xd7d268(0x1d0)](',')['map'](_0x12335d=>_0x12335d[_0xd7d268(0x316)]()[_0xd7d268(0x2c6)]());_0x10494d=_0xd651d1;}if(_0x10494d['length']<=0x0)_0x10494d=[_0xd7d268(0x1ff)];return this[_0xd7d268(0x204)][_0x82d923['id']]=_0x10494d,this[_0xd7d268(0x204)][_0x82d923['id']];},DataManager['getMapFurnitureTypes']=function(){const _0xe11ec7=_0x5de8fc;if(!$gameMap)return[_0xe11ec7(0x1ff)];if(!$dataMap)return['any'];this['_cache_getMapFurnitureTypes']=this[_0xe11ec7(0x2a3)]||{};if(this['_cache_getMapFurnitureTypes'][$gameMap['mapId']()])return this[_0xe11ec7(0x2a3)][$gameMap[_0xe11ec7(0x25b)]()];let _0x18b836=[_0xe11ec7(0x1ff)];const _0x2aff44=VisuMZ[_0xe11ec7(0x206)][_0xe11ec7(0x1b3)],_0x1ce0bd=$dataMap['note'];if(_0x1ce0bd[_0xe11ec7(0x228)](_0x2aff44[_0xe11ec7(0x200)])){const _0x528839=String(RegExp['$1'])['split'](',')[_0xe11ec7(0x27d)](_0x1d2c0c=>_0x1d2c0c[_0xe11ec7(0x316)]()['trim']());_0x18b836=_0x18b836[_0xe11ec7(0x288)](_0x528839);}return this[_0xe11ec7(0x2a3)][$gameMap[_0xe11ec7(0x25b)]()]=_0x18b836,this[_0xe11ec7(0x2a3)][$gameMap['mapId']()];},SoundManager[_0x5de8fc(0x161)]=function(){const _0x2e34cd=_0x5de8fc,_0x20d6ba=VisuMZ['FurnitureSystem'][_0x2e34cd(0x2a2)][_0x2e34cd(0x31d)],_0x2b9e17=_0x2e34cd(0x17d),_0x2a7059={'name':_0x20d6ba['%1Name'['format'](_0x2b9e17)],'volume':_0x20d6ba[_0x2e34cd(0x2f3)[_0x2e34cd(0x25c)](_0x2b9e17)],'pitch':_0x20d6ba[_0x2e34cd(0x2c3)[_0x2e34cd(0x25c)](_0x2b9e17)],'pan':_0x20d6ba['%1Pant'[_0x2e34cd(0x25c)](_0x2b9e17)]};AudioManager[_0x2e34cd(0x1f8)](_0x2a7059);},SoundManager[_0x5de8fc(0x1bc)]=function(){const _0x3440c1=_0x5de8fc,_0x1a6f30=VisuMZ[_0x3440c1(0x206)][_0x3440c1(0x2a2)][_0x3440c1(0x31d)],_0x5d4f10=_0x3440c1(0x180),_0x489629={'name':_0x1a6f30[_0x3440c1(0x1fa)[_0x3440c1(0x25c)](_0x5d4f10)],'volume':_0x1a6f30[_0x3440c1(0x2f3)[_0x3440c1(0x25c)](_0x5d4f10)],'pitch':_0x1a6f30[_0x3440c1(0x2c3)['format'](_0x5d4f10)],'pan':_0x1a6f30[_0x3440c1(0x253)['format'](_0x5d4f10)]};AudioManager['playSe'](_0x489629);},TextManager[_0x5de8fc(0x206)]={'PositionButtons':VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x247)],'VariantButtons':VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x223)],'ConfirmButtons':VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)]['ConfirmButtons'],'CancelButtons':VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x2e5)],'PositionText':VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)]['Window'][_0x5de8fc(0x1b8)],'VariantText':VisuMZ[_0x5de8fc(0x206)]['Settings']['Window']['VariantText'],'ConfirmText':VisuMZ['FurnitureSystem'][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x1dd)],'CancelText':VisuMZ['FurnitureSystem'][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)]['CancelText']},SceneManager[_0x5de8fc(0x16e)]=function(){const _0x31ad39=_0x5de8fc;return this[_0x31ad39(0x20c)]&&this[_0x31ad39(0x20c)][_0x31ad39(0x16a)]===Scene_Map;},SceneManager[_0x5de8fc(0x184)]=function(){const _0x4f5de2=_0x5de8fc;return this[_0x4f5de2(0x20c)]&&this['_scene']['constructor']===Scene_Item;},SceneManager[_0x5de8fc(0x1af)]=function(){const _0x29b557=_0x5de8fc;if($gameParty['inBattle']())return![];return $gameMap&&$gameMap[_0x29b557(0x2e2)]()&&(this[_0x29b557(0x16e)]()||this['isSceneItem']());},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x28b)]=Game_Action[_0x5de8fc(0x2d3)][_0x5de8fc(0x2bd)],Game_Action[_0x5de8fc(0x2d3)]['isForFriend']=function(){const _0xf86e19=_0x5de8fc;if(DataManager[_0xf86e19(0x266)](this[_0xf86e19(0x2da)]())&&SceneManager[_0xf86e19(0x1af)]())return![];return VisuMZ[_0xf86e19(0x206)]['Game_Action_isForFriend']['call'](this);},Game_Map['DEFAULT_ALLOW_FURNITURE']=VisuMZ['FurnitureSystem']['Settings'][_0x5de8fc(0x2ed)][_0x5de8fc(0x217)],Game_Map[_0x5de8fc(0x27c)]=VisuMZ['FurnitureSystem']['Settings']['Default'][_0x5de8fc(0x2c5)],Game_Map['DEFAULT_FURNITURE_FORBID_REGIONS']=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2ed)][_0x5de8fc(0x2c4)],Game_Map['DEFAULT_FURNITURE_ALLOW_TERRAIN_TAGS']=VisuMZ[_0x5de8fc(0x206)]['Settings'][_0x5de8fc(0x2ed)][_0x5de8fc(0x26d)],Game_Map[_0x5de8fc(0x286)]=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2ed)][_0x5de8fc(0x268)],Game_Map[_0x5de8fc(0x1c9)]=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)]['Default'][_0x5de8fc(0x1e1)],Game_Map[_0x5de8fc(0x18f)]=VisuMZ['FurnitureSystem']['Settings'][_0x5de8fc(0x2ed)][_0x5de8fc(0x2e6)],Game_Map['DEFAULT_FURNITURE_ON_PLACE_COMMON_EVENT']=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2ed)][_0x5de8fc(0x1e8)],Game_Map[_0x5de8fc(0x1cc)]=VisuMZ['FurnitureSystem'][_0x5de8fc(0x2a2)][_0x5de8fc(0x2ed)][_0x5de8fc(0x2f6)],Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x2e2)]=function(){const _0x41c311=_0x5de8fc;if($dataMap){const _0x5d0b25=VisuMZ[_0x41c311(0x206)][_0x41c311(0x1b3)],_0xa6e816=$dataMap[_0x41c311(0x26a)];if(_0xa6e816[_0x41c311(0x228)](_0x5d0b25['DisallowFurniture']))return![];else{if(_0xa6e816[_0x41c311(0x228)](_0x5d0b25[_0x41c311(0x2f8)]))return!![];else{if(_0xa6e816[_0x41c311(0x228)](_0x5d0b25[_0x41c311(0x200)]))return!![];}}return Game_Map[_0x41c311(0x278)];}else return![];},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x22c)]=function(_0x6e7a9){const _0x4d893d=_0x5de8fc,_0x2d6e3a=VisuMZ[_0x4d893d(0x206)][_0x4d893d(0x1b3)],_0x2412b6=_0x6e7a9[_0x4d893d(0x26a)];let _0x393b50=[];return _0x2412b6[_0x4d893d(0x228)](_0x2d6e3a[_0x4d893d(0x182)])&&(_0x393b50=RegExp['$1']['split'](',')['map'](_0xa31e93=>_0xa31e93[_0x4d893d(0x2b7)]()[_0x4d893d(0x2c6)]())),_0x393b50=VisuMZ[_0x4d893d(0x206)][_0x4d893d(0x1ed)](_0x393b50),_0x393b50;},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x192)]=function(_0x119948){const _0x50f415=_0x5de8fc,_0x4622d5=VisuMZ[_0x50f415(0x206)][_0x50f415(0x1b3)],_0x2eee70=_0x119948[_0x50f415(0x26a)];let _0x53301b={'AllowRegions':Game_Map[_0x50f415(0x27c)]['clone'](),'ForbidRegions':Game_Map[_0x50f415(0x267)]['clone'](),'AllowTerrainTags':Game_Map[_0x50f415(0x2f9)][_0x50f415(0x248)](),'ForbidTerrainTags':Game_Map[_0x50f415(0x286)][_0x50f415(0x248)](),'CheckPassability':Game_Map[_0x50f415(0x18f)],'CheckEventCollision':Game_Map['DEFAULT_FURNITURE_CHECK_EVENT_COLLISION'],'OnPlaceCommonEventID':Game_Map[_0x50f415(0x1ca)],'OnPlaceEndMode':Game_Map[_0x50f415(0x1cc)],'OnPlaceConsumeItem':_0x119948['id'],'PreventCancelExit':![]};_0x2eee70[_0x50f415(0x228)](_0x4622d5['FurnitureAllowRegions'])&&(_0x53301b[_0x50f415(0x21d)]=RegExp['$1']['split'](',')[_0x50f415(0x27d)](_0x4c0dd7=>Number(_0x4c0dd7)[_0x50f415(0x1f2)](0x1,0xff)));_0x2eee70[_0x50f415(0x228)](_0x4622d5['FurnitureForbidRegions'])&&(_0x53301b[_0x50f415(0x2ea)]=RegExp['$1'][_0x50f415(0x1d0)](',')['map'](_0x1143a8=>Number(_0x1143a8)[_0x50f415(0x1f2)](0x1,0xff)));_0x2eee70[_0x50f415(0x228)](_0x4622d5[_0x50f415(0x2fc)])&&(_0x53301b[_0x50f415(0x261)]=RegExp['$1'][_0x50f415(0x1d0)](',')[_0x50f415(0x27d)](_0x5a6de7=>Number(_0x5a6de7)[_0x50f415(0x1f2)](0x1,0xff)));_0x2eee70[_0x50f415(0x228)](_0x4622d5[_0x50f415(0x296)])&&(_0x53301b[_0x50f415(0x2b0)]=RegExp['$1']['split'](',')[_0x50f415(0x27d)](_0x13125a=>Number(_0x13125a)['clamp'](0x1,0xff)));if(_0x2eee70[_0x50f415(0x228)](_0x4622d5[_0x50f415(0x28e)]))_0x53301b[_0x50f415(0x2e6)]=!![];else _0x2eee70[_0x50f415(0x228)](_0x4622d5[_0x50f415(0x16f)])&&(_0x53301b[_0x50f415(0x2e6)]=![]);if(_0x2eee70[_0x50f415(0x228)](_0x4622d5['FurnitureNeedEventCollisionCheck']))_0x53301b['CheckEventCollision']=!![];else _0x2eee70[_0x50f415(0x228)](_0x4622d5[_0x50f415(0x26f)])&&(_0x53301b[_0x50f415(0x1e1)]=![]);_0x2eee70[_0x50f415(0x228)](_0x4622d5['FurnitureOnPlaceCommonEvent'])&&(_0x53301b['OnPlaceCommonEventID']=Number(RegExp['$1']));if(_0x2eee70[_0x50f415(0x228)](_0x4622d5[_0x50f415(0x2c9)]))_0x53301b[_0x50f415(0x231)]=!![];else _0x2eee70['match'](_0x4622d5[_0x50f415(0x236)])&&(_0x53301b[_0x50f415(0x231)]=![]);if(_0x2eee70[_0x50f415(0x228)](_0x4622d5[_0x50f415(0x2a9)])){_0x53301b[_0x50f415(0x2f4)]=!![];const _0x126254=$dataItems[_0x53301b[_0x50f415(0x1be)]];if(!_0x53301b['OnPlaceEndMode']&&(!_0x126254||!_0x126254[_0x50f415(0x1d9)])){_0x53301b[_0x50f415(0x2f4)]=![];if($gameTemp['isPlaytest']()){if(!$gameTemp[_0x50f415(0x287)]){$gameTemp[_0x50f415(0x287)]=!![];let _0x2c9a64=_0x50f415(0x152);alert(_0x2c9a64);}}}}return _0x53301b;},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x1ed)]=function(_0x207fee){const _0x31002b=_0x5de8fc;return _0x207fee[_0x31002b(0x163)](_0x1d7e2c=>!!VisuMZ[_0x31002b(0x158)][_0x1d7e2c]);},Game_Map[_0x5de8fc(0x2d3)]['setupFurnitureData']=function(_0x7c48ce,_0x373da4,_0x483a12){const _0x22895a=_0x5de8fc;this['_furnitureSystemTemplateIndex']=$gameTemp[_0x22895a(0x227)]||0x0,this[_0x22895a(0x2b1)]=_0x7c48ce[_0x22895a(0x248)](),this['_furnitureSystemSettings']=JsonEx[_0x22895a(0x272)](_0x373da4),this[_0x22895a(0x273)]={'x':Math[_0x22895a(0x208)]($gamePlayer['x']),'y':Math[_0x22895a(0x208)]($gamePlayer['y']),'lastPosX':Math['round']($gamePlayer['x']),'lastPosY':Math[_0x22895a(0x208)]($gamePlayer['y']),'lastCursorX':TouchInput['x'],'lastCursorY':TouchInput['y']};if(_0x483a12){const _0x171e67=$gamePlayer['direction']();if([0x7,0x4,0x1][_0x22895a(0x212)](_0x171e67))this[_0x22895a(0x273)]['x']-=0x1;if([0x9,0x6,0x3][_0x22895a(0x212)](_0x171e67))this[_0x22895a(0x273)]['x']+=0x1;if([0x7,0x8,0x9][_0x22895a(0x212)](_0x171e67))this[_0x22895a(0x273)]['y']-=0x1;if([0x1,0x2,0x3]['includes'](_0x171e67))this[_0x22895a(0x273)]['y']+=0x1;this[_0x22895a(0x273)]['lastPosX']=this[_0x22895a(0x273)]['x'],this[_0x22895a(0x273)]['lastPosY']=this['_furnitureSystemEventPosition']['y'];}},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2f2)]=function(_0x364b00,_0x3c0a28){const _0x4d80da=_0x5de8fc,_0x4df4e9=$gameMap['furnitureEventTemplateData'](),_0x349319={'template':_0x364b00[$gameMap[_0x4d80da(0x227)]],'mapId':_0x4df4e9[_0x4d80da(0x249)],'eventId':_0x4df4e9[_0x4d80da(0x252)],'x':$gameMap[_0x4d80da(0x273)]['x'],'y':$gameMap[_0x4d80da(0x273)]['y'],'spawnPreserved':![],'spawnEventId':$gameMap['_spawnedEvents']['length']+0x3e8};return _0x349319;},Game_Map['prototype'][_0x5de8fc(0x29a)]=function(_0x5b7c4f,_0x1dd1dd){const _0x4283d2=_0x5de8fc,_0x51c320=VisuMZ['FurnitureSystem'][_0x4283d2(0x2f2)](_0x5b7c4f,_0x1dd1dd);$gameTemp[_0x4283d2(0x1ba)]=_0x51c320,this[_0x4283d2(0x190)]=new Game_Event(_0x51c320[_0x4283d2(0x249)],_0x51c320['EventID']),$gameTemp['_furnitureModeRegisterEvent']=!![],this[_0x4283d2(0x190)][_0x4283d2(0x312)](_0x51c320),$gameTemp[_0x4283d2(0x170)]=undefined,$gameTemp['_spawnData']=undefined,this[_0x4283d2(0x190)][_0x4283d2(0x1e7)](),this[_0x4283d2(0x190)][_0x4283d2(0x291)]();},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x31f)]=function(){const _0xb946d8=_0x5de8fc;SceneManager[_0xb946d8(0x20c)][_0xb946d8(0x297)]&&SceneManager[_0xb946d8(0x20c)][_0xb946d8(0x297)]['_furnitureEventSprite']&&SceneManager[_0xb946d8(0x20c)][_0xb946d8(0x297)][_0xb946d8(0x30e)][_0xb946d8(0x280)]();const _0x17ea5d=SceneManager[_0xb946d8(0x20c)][_0xb946d8(0x19e)];if(_0x17ea5d)_0x17ea5d[_0xb946d8(0x1e7)]();VisuMZ[_0xb946d8(0x206)]['RefreshFurnitureCursorBitmap']();},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x24e)]=function(){const _0x1a0ca0=_0x5de8fc;if(SceneManager[_0x1a0ca0(0x20c)][_0x1a0ca0(0x297)]){const _0xdc50bc=SceneManager['_scene']['_spriteset']['_furnitureEventSprite'];if(_0xdc50bc)_0xdc50bc[_0x1a0ca0(0x209)]();}},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x153)]=function(_0x1fd0db,_0x5b1e12){const _0x4c12f7=_0x5de8fc,_0x355146=$gameMap[_0x4c12f7(0x195)](),_0xba7db4=$gameMap[_0x4c12f7(0x1ce)](),_0x2cd401=VisuMZ[_0x4c12f7(0x158)][_0xba7db4],_0xe7bd2d={'template':_0xba7db4,'mapId':_0x2cd401[_0x4c12f7(0x249)],'eventId':_0x2cd401[_0x4c12f7(0x252)],'x':_0x1fd0db,'y':_0x5b1e12,'spawnPreserved':!![],'spawnEventId':$gameMap[_0x4c12f7(0x196)][_0x4c12f7(0x187)]+0x3e8};let _0x5567f3=_0x355146[_0x4c12f7(0x2e6)];(_0x355146['AllowRegions'][_0x4c12f7(0x187)]>0x0||_0x355146[_0x4c12f7(0x261)][_0x4c12f7(0x187)]>0x0)&&(_0x5567f3=![]);const _0x2b7402=$gameMap[_0x4c12f7(0x159)](_0xe7bd2d,_0x355146[_0x4c12f7(0x1e1)],_0x5567f3),_0x2b0289=$gameMap['lastSpawnedEvent']();_0x2b0289[_0x4c12f7(0x271)](),_0x2b0289[_0x4c12f7(0x291)]();if(SceneManager['_scene']&&SceneManager[_0x4c12f7(0x20c)][_0x4c12f7(0x297)]){const _0x9fce9a=SceneManager[_0x4c12f7(0x20c)][_0x4c12f7(0x297)],_0x1b3419=_0x9fce9a['findTargetSprite'](_0x2b0289);if(_0x1b3419)_0x1b3419[_0x4c12f7(0x1e5)]();}return _0x2b7402;},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x307)]=function(){const _0x313c59=_0x5de8fc;return this[_0x313c59(0x2b1)]&&this[_0x313c59(0x2b1)][_0x313c59(0x187)]>0x0;},Game_Map[_0x5de8fc(0x2d3)]['prepareFurniturePlacementMode']=function(_0x2b93e4){const _0x579fb2=_0x5de8fc,_0x5500bd=VisuMZ['FurnitureSystem'][_0x579fb2(0x22c)](_0x2b93e4),_0x464f6f=VisuMZ[_0x579fb2(0x206)][_0x579fb2(0x192)](_0x2b93e4);this['startFurnitureSystemMode'](_0x5500bd,_0x464f6f);},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x27b)]=function(_0x482b4e,_0x2c35f5){const _0x6b7424=_0x5de8fc;_0x482b4e=VisuMZ[_0x6b7424(0x206)][_0x6b7424(0x1ed)](_0x482b4e);if(_0x482b4e[_0x6b7424(0x187)]<=0x0)return;this[_0x6b7424(0x24f)](_0x482b4e,_0x2c35f5,!![]),this['setupFurnitureCursor'](_0x482b4e,_0x2c35f5),VisuMZ['FurnitureSystem'][_0x6b7424(0x31f)]();},Game_Map['prototype']['endFurnitureSystemMode']=function(){const _0x4bd489=_0x5de8fc;this[_0x4bd489(0x227)]=undefined,this['_furnitureSystemTemplates']=undefined,this[_0x4bd489(0x259)]=undefined,this[_0x4bd489(0x273)]=undefined,this['_furnitureSystemEvent']=undefined;},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x2de)]=function(_0xf3fdef){const _0xf27ff=_0x5de8fc;this[_0xf27ff(0x1c2)](_0xf3fdef);const _0x5a3772=this['furnitureSettings']();if(_0x5a3772['OnPlaceEndMode']){this['endFurnitureSystemMode']();if(_0x5a3772[_0xf27ff(0x1be)]>0x0){const _0x1c0d98=$dataItems[_0x5a3772['OnPlaceConsumeItem']];$gameParty[_0xf27ff(0x285)](_0x1c0d98);}}else{if(_0x5a3772[_0xf27ff(0x1be)]>0x0){const _0x58d200=$dataItems[_0x5a3772[_0xf27ff(0x1be)]];$gameParty[_0xf27ff(0x285)](_0x58d200),$gameParty[_0xf27ff(0x2d9)](_0x58d200)<=0x0?this[_0xf27ff(0x2ca)]():VisuMZ['FurnitureSystem'][_0xf27ff(0x15d)]();}}},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1c2)]=function(_0xaf2775){const _0x45ec31=_0x5de8fc;this['onPlaceFurnitureSpawnEvent'](_0xaf2775),this[_0x45ec31(0x18e)](),this['onPlaceFurnitureJS']();},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x189)]=function(_0x58a37e){const _0x3a4ca9=_0x5de8fc,_0x46c3b8=this[_0x3a4ca9(0x255)](_0x58a37e),_0x3a5f27=_0x46c3b8['x'],_0x4f58ab=_0x46c3b8['y'];return VisuMZ[_0x3a4ca9(0x206)][_0x3a4ca9(0x153)](_0x3a5f27,_0x4f58ab);},Game_Map['prototype']['onPlaceFurnitureRunCommonEvent']=function(){const _0x434f4e=_0x5de8fc,_0x5ed0f9=this['_furnitureSystemSettings'],_0x2deae3=_0x5ed0f9[_0x434f4e(0x1a4)],_0x1474d8=$gameMap['lastSpawnedEvent']()['eventId']();if(_0x2deae3){const _0x4eca86=$dataCommonEvents[_0x2deae3];if(_0x4eca86){if(_0x5ed0f9[_0x434f4e(0x231)])this[_0x434f4e(0x2f5)]&&this[_0x434f4e(0x2f5)][_0x434f4e(0x15f)]()?this[_0x434f4e(0x2f5)][_0x434f4e(0x20f)](_0x4eca86[_0x434f4e(0x1d3)],_0x1474d8):($gameTemp[_0x434f4e(0x2cc)](_0x2deae3),this['_interpreter']['setupReservedCommonEvent'](),this['_interpreter'][_0x434f4e(0x1b5)]=_0x1474d8);else{SceneManager[_0x434f4e(0x20c)][_0x434f4e(0x1c4)](_0x2deae3);const _0x4c1a68=SceneManager['_scene'][_0x434f4e(0x166)];if(_0x4c1a68&&_0x4c1a68[_0x434f4e(0x187)]>0x0){const _0x14259b=_0x4c1a68[_0x4c1a68[_0x434f4e(0x187)]-0x1];_0x14259b['_eventId']=_0x1474d8;}}}}},Game_Map['prototype'][_0x5de8fc(0x203)]=function(){const _0x4dc69f=_0x5de8fc,_0x3c6ff3=this[_0x4dc69f(0x259)];if(!_0x3c6ff3[_0x4dc69f(0x1be)])return;const _0x36c46e=$dataItems[_0x3c6ff3[_0x4dc69f(0x1be)]];if(!_0x36c46e)return;const _0x296149=VisuMZ[_0x4dc69f(0x206)][_0x4dc69f(0x1c7)](_0x36c46e,_0x4dc69f(0x320));VisuMZ[_0x4dc69f(0x206)]['JS'][_0x296149]&&VisuMZ[_0x4dc69f(0x206)]['JS'][_0x296149][_0x4dc69f(0x1ef)](this,_0x36c46e);},Game_Map['prototype']['onRemoveFurnitureJS']=function(_0x2522fb){const _0x390269=_0x5de8fc;if(!_0x2522fb)return;const _0xee34df=VisuMZ['FurnitureSystem']['createKeyJS'](_0x2522fb,'OnRemoveFurniture');VisuMZ[_0x390269(0x206)]['JS'][_0xee34df]&&VisuMZ[_0x390269(0x206)]['JS'][_0xee34df]['call'](this,_0x2522fb);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x15d)]=function(){const _0x4cd724=_0x5de8fc,_0x442563=SceneManager[_0x4cd724(0x20c)],_0x38617c=_0x442563[_0x4cd724(0x1cd)];_0x38617c&&_0x38617c[_0x4cd724(0x1e7)]();},Game_Map[_0x5de8fc(0x2d3)]['devPlaceFurnitureAtXY']=function(_0x464bea,_0x2b6dae,_0x2a658b,_0x2b244e){const _0x297c59=_0x5de8fc;let _0x3eac51=VisuMZ[_0x297c59(0x206)]['extractFurnitureTemplates'](_0x464bea),_0x16e70f=VisuMZ[_0x297c59(0x206)][_0x297c59(0x192)](_0x464bea);_0x3eac51=VisuMZ[_0x297c59(0x206)][_0x297c59(0x1ed)](_0x3eac51),_0x2b6dae=_0x2b6dae[_0x297c59(0x1f2)](0x0,_0x3eac51['length']-0x1),this[_0x297c59(0x24f)](_0x3eac51,_0x16e70f,!![]),this[_0x297c59(0x29a)](_0x3eac51,_0x16e70f),this[_0x297c59(0x227)]=_0x2b6dae,this[_0x297c59(0x2e4)]()['x']=_0x2a658b,this[_0x297c59(0x2e4)]()['y']=_0x2b244e;const _0x5bb27d=this[_0x297c59(0x189)](!![]);return this[_0x297c59(0x2ca)](),_0x5bb27d;},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x28f)]=function(_0x500f69,_0x1b4169,_0x145621){const _0x4a1466=_0x5de8fc;let _0x4b2bf3=VisuMZ[_0x4a1466(0x206)]['extractFurnitureTemplates'](_0x500f69),_0x1fb3d4=VisuMZ[_0x4a1466(0x206)][_0x4a1466(0x192)](_0x500f69);_0x4b2bf3=VisuMZ[_0x4a1466(0x206)]['PurgeNonTemplateData'](_0x4b2bf3),_0x1b4169=_0x1b4169[_0x4a1466(0x1f2)](0x0,_0x4b2bf3[_0x4a1466(0x187)]-0x1),this['setupFurnitureData'](_0x4b2bf3,_0x1fb3d4,!![]),this[_0x4a1466(0x29a)](_0x4b2bf3,_0x1fb3d4),this[_0x4a1466(0x227)]=_0x1b4169,this[_0x4a1466(0x2ab)]()[_0x4a1466(0x1e7)]();const _0x4e8633=this[_0x4a1466(0x2ab)]()['_addedHitbox'],_0x215884=VisuMZ[_0x4a1466(0x206)][_0x4a1466(0x2f2)](_0x4b2bf3,_0x1fb3d4),_0x121f38=this[_0x4a1466(0x2d5)](_0x145621,_0x215884,_0x4e8633,_0x1fb3d4);if(_0x121f38[_0x4a1466(0x187)]<=0x0)return this[_0x4a1466(0x2ca)](),![];const _0x8b868b=_0x121f38[Math[_0x4a1466(0x31e)](_0x121f38[_0x4a1466(0x187)])],_0x4744ee=_0x8b868b[0x0]||0x0,_0x12fb9b=_0x8b868b[0x1]||0x0;this[_0x4a1466(0x2e4)]()['x']=_0x4744ee,this[_0x4a1466(0x2e4)]()['y']=_0x12fb9b;const _0x722c73=this[_0x4a1466(0x189)](!![]);return this['endFurnitureSystemMode'](),_0x722c73;},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x2d5)]=function(_0x4f4730,_0x42e0b3,_0x34c820,_0x392dc3){const _0x5dcfae=_0x5de8fc,_0x346850=[],_0x4378c3=this[_0x5dcfae(0x2f1)](),_0x22fe14=this[_0x5dcfae(0x1ea)]();let _0x3c9c70=_0x392dc3[_0x5dcfae(0x2e6)];(_0x392dc3[_0x5dcfae(0x21d)][_0x5dcfae(0x187)]>0x0||_0x392dc3[_0x5dcfae(0x261)]['length']>0x0)&&(_0x3c9c70=![]);const _0x2cfe6d=_0x34c820[_0x5dcfae(0x1ae)],_0x681b84=_0x4378c3-_0x34c820[_0x5dcfae(0x254)],_0x3bed14=_0x34c820['up'],_0x2fe29f=_0x22fe14-_0x34c820[_0x5dcfae(0x251)];for(let _0x9760a5=_0x2cfe6d;_0x9760a5<_0x681b84;_0x9760a5++){for(let _0x3e5004=_0x3bed14;_0x3e5004<_0x2fe29f;_0x3e5004++){if(!_0x4f4730[_0x5dcfae(0x212)](this[_0x5dcfae(0x233)](_0x9760a5,_0x3e5004)))continue;if(!this[_0x5dcfae(0x2b5)](_0x9760a5,_0x3e5004))continue;if(_0x392dc3[_0x5dcfae(0x1e1)]){if(this['checkExistingEntitiesAt'](_0x9760a5,_0x3e5004))continue;if(!this[_0x5dcfae(0x23a)](_0x42e0b3,_0x9760a5,_0x3e5004))continue;}if(_0x3c9c70){if(!this[_0x5dcfae(0x234)](_0x9760a5,_0x3e5004))continue;}_0x346850[_0x5dcfae(0x295)]([_0x9760a5,_0x3e5004]);}}return _0x346850;},Game_Map[_0x5de8fc(0x2d3)]['devPlaceFurnitureAtTerrainTag']=function(_0x360f9f,_0x377713,_0x9dd54b){const _0x3cf5cd=_0x5de8fc;let _0x388586=VisuMZ[_0x3cf5cd(0x206)]['extractFurnitureTemplates'](_0x360f9f),_0x58760f=VisuMZ['FurnitureSystem']['extractFurnitureSettings'](_0x360f9f);_0x388586=VisuMZ[_0x3cf5cd(0x206)][_0x3cf5cd(0x1ed)](_0x388586),_0x377713=_0x377713['clamp'](0x0,_0x388586[_0x3cf5cd(0x187)]-0x1),this[_0x3cf5cd(0x24f)](_0x388586,_0x58760f,!![]),this[_0x3cf5cd(0x29a)](_0x388586,_0x58760f),this[_0x3cf5cd(0x227)]=_0x377713,this[_0x3cf5cd(0x2ab)]()[_0x3cf5cd(0x1e7)]();const _0x3ddd60=this[_0x3cf5cd(0x2ab)]()[_0x3cf5cd(0x29d)],_0xcf128c=VisuMZ[_0x3cf5cd(0x206)][_0x3cf5cd(0x2f2)](_0x388586,_0x58760f),_0x3aeb02=this[_0x3cf5cd(0x299)](_0x9dd54b,_0xcf128c,_0x3ddd60,_0x58760f);if(_0x3aeb02[_0x3cf5cd(0x187)]<=0x0)return this[_0x3cf5cd(0x2ca)](),![];const _0x312f25=_0x3aeb02[Math[_0x3cf5cd(0x31e)](_0x3aeb02[_0x3cf5cd(0x187)])],_0x50875f=_0x312f25[0x0]||0x0,_0x3d5bb4=_0x312f25[0x1]||0x0;this['furnitureEventPosition']()['x']=_0x50875f,this[_0x3cf5cd(0x2e4)]()['y']=_0x3d5bb4;const _0x2b7f25=this[_0x3cf5cd(0x189)](!![]);return this['endFurnitureSystemMode'](),_0x2b7f25;},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x299)]=function(_0x5dbfb3,_0x10a498,_0x1fc702,_0x8acb96){const _0xf6f1e=_0x5de8fc,_0x5aa7ec=[],_0x146db8=this['width'](),_0x2db758=this[_0xf6f1e(0x1ea)]();let _0x5dc039=_0x8acb96['CheckPassability'];(_0x8acb96[_0xf6f1e(0x21d)][_0xf6f1e(0x187)]>0x0||_0x8acb96['AllowTerrainTags']['length']>0x0)&&(_0x5dc039=![]);const _0x2f19c7=_0x1fc702[_0xf6f1e(0x1ae)],_0x5090ae=_0x146db8-_0x1fc702[_0xf6f1e(0x254)],_0xde3736=_0x1fc702['up'],_0x407a77=_0x2db758-_0x1fc702[_0xf6f1e(0x251)];for(let _0x53f2c3=_0x2f19c7;_0x53f2c3<_0x5090ae;_0x53f2c3++){for(let _0x51dda1=_0xde3736;_0x51dda1<_0x407a77;_0x51dda1++){if(!_0x5dbfb3[_0xf6f1e(0x212)](this[_0xf6f1e(0x1e0)](_0x53f2c3,_0x51dda1)))continue;if(!this[_0xf6f1e(0x2b5)](_0x53f2c3,_0x51dda1))continue;if(_0x8acb96['CheckEventCollision']){if(this[_0xf6f1e(0x1bd)](_0x53f2c3,_0x51dda1))continue;if(!this[_0xf6f1e(0x23a)](_0x10a498,_0x53f2c3,_0x51dda1))continue;}if(_0x5dc039){if(!this[_0xf6f1e(0x234)](_0x53f2c3,_0x51dda1))continue;}_0x5aa7ec[_0xf6f1e(0x295)]([_0x53f2c3,_0x51dda1]);}}return _0x5aa7ec;},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1ce)]=function(){const _0x577a1b=_0x5de8fc;if(this[_0x577a1b(0x227)]===undefined)return'';const _0x19683a=this[_0x577a1b(0x227)];return this[_0x577a1b(0x2b1)][_0x19683a]||'';},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x260)]=function(){const _0x337a42=_0x5de8fc,_0x323f19=this[_0x337a42(0x1ce)]();return VisuMZ[_0x337a42(0x158)][_0x323f19]||null;},Game_Map[_0x5de8fc(0x2d3)]['furnitureEvent']=function(){return this['_furnitureSystemEvent']||null;},Game_Map['prototype'][_0x5de8fc(0x2e4)]=function(){return this['_furnitureSystemEventPosition'];},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x195)]=function(){const _0x2aa564=_0x5de8fc;return this[_0x2aa564(0x259)]||{};},Game_Map['prototype'][_0x5de8fc(0x30d)]=function(){const _0x778f25=_0x5de8fc;this[_0x778f25(0x178)](),this[_0x778f25(0x2df)](),this['updateFurnitureModeInputCancel'](),this[_0x778f25(0x2a6)]();},Game_Map[_0x5de8fc(0x2d3)]['updateFurnitureModeInputScrollWheel']=function(){const _0x5e24d0=_0x5de8fc,_0xa7bbd4=0x14;if(Input[_0x5e24d0(0x2b3)](_0x5e24d0(0x1d6))||TouchInput[_0x5e24d0(0x263)]<=-_0xa7bbd4)this['shiftFurnitureTemplateIndex'](![]);else(Input[_0x5e24d0(0x2b3)](_0x5e24d0(0x24c))||TouchInput['wheelY']>=_0xa7bbd4)&&this[_0x5e24d0(0x156)](!![]);},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x156)]=function(_0x43d9ae){const _0x2fa4de=_0x5de8fc,_0x556efb=this[_0x2fa4de(0x227)],_0x56e281=this['_furnitureSystemTemplates'][_0x2fa4de(0x187)];this[_0x2fa4de(0x227)]+=_0x43d9ae?0x1:-0x1;if(this[_0x2fa4de(0x227)]<0x0)this[_0x2fa4de(0x227)]=_0x56e281-0x1;else this['_furnitureSystemTemplateIndex']>=_0x56e281&&(this[_0x2fa4de(0x227)]=0x0);if(_0x556efb!==this[_0x2fa4de(0x227)]){SoundManager['playCursor']();const _0x4081b3=this[_0x2fa4de(0x1ce)]();this[_0x2fa4de(0x2ab)]()[_0x2fa4de(0x2dd)](_0x4081b3,!![]);}},Game_Map['prototype']['updateFurnitureModeInputDirection']=function(){const _0x43d88a=_0x5de8fc,_0x3b8622=this[_0x43d88a(0x2e4)]();Input[_0x43d88a(0x185)]!==0x0&&(_0x3b8622[_0x43d88a(0x304)]!==TouchInput['x']||_0x3b8622[_0x43d88a(0x1fe)]!==TouchInput['y'])&&(_0x3b8622['x']=_0x3b8622[_0x43d88a(0x183)]=$gameMap[_0x43d88a(0x300)](TouchInput['x'])[_0x43d88a(0x1f2)](0x0,this['width']()-0x1),_0x3b8622['y']=_0x3b8622[_0x43d88a(0x225)]=$gameMap[_0x43d88a(0x2d7)](TouchInput['y'])[_0x43d88a(0x1f2)](0x0,this[_0x43d88a(0x1ea)]()-0x1),_0x3b8622[_0x43d88a(0x304)]=TouchInput['x'],_0x3b8622[_0x43d88a(0x1fe)]=TouchInput['y']);if(Input[_0x43d88a(0x2b3)](_0x43d88a(0x1ae)))_0x3b8622['x']-=0x1;else{if(Input[_0x43d88a(0x2b3)](_0x43d88a(0x254)))_0x3b8622['x']+=0x1;else{if(Input['isRepeated']('up'))_0x3b8622['y']-=0x1;else{if(Input[_0x43d88a(0x2b3)](_0x43d88a(0x251)))_0x3b8622['y']+=0x1;else return;}}}const _0x2498eb=Math[_0x43d88a(0x23c)](0x0,Math['floor'](this[_0x43d88a(0x205)])),_0x138d7f=Math[_0x43d88a(0x173)](this['width']()-0x1,Math[_0x43d88a(0x164)](this[_0x43d88a(0x205)]+this[_0x43d88a(0x250)]())),_0x185fda=Math['max'](0x0,Math[_0x43d88a(0x164)](this['_displayY'])),_0x1a69cd=Math['min'](this[_0x43d88a(0x1ea)]()-0x1,Math[_0x43d88a(0x164)](this[_0x43d88a(0x27a)]+this[_0x43d88a(0x2e1)]()-0x1));_0x3b8622['x']=_0x3b8622['x'][_0x43d88a(0x1f2)](_0x2498eb,_0x138d7f),_0x3b8622['y']=_0x3b8622['y'][_0x43d88a(0x1f2)](_0x185fda,_0x1a69cd),(_0x3b8622[_0x43d88a(0x183)]!==_0x3b8622['x']||_0x3b8622[_0x43d88a(0x225)]!==_0x3b8622['y'])&&(SoundManager[_0x43d88a(0x1fc)](),_0x3b8622[_0x43d88a(0x183)]=_0x3b8622['x'],_0x3b8622[_0x43d88a(0x225)]=_0x3b8622['y']);},Game_Map['prototype']['updateFurnitureModeInputCancel']=function(){const _0x566ef3=_0x5de8fc,_0x3d9e7c=this[_0x566ef3(0x195)]();if(_0x3d9e7c['PreventCancelExit'])return;(Input[_0x566ef3(0x290)](_0x566ef3(0x15b))||TouchInput['isCancelled']())&&(SoundManager[_0x566ef3(0x30c)](),this['endFurnitureSystemMode'](),Input[_0x566ef3(0x22e)](),TouchInput[_0x566ef3(0x22e)]());},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x2a6)]=function(){const _0x2bfbb6=_0x5de8fc,_0x4d224f=SceneManager['_scene'][_0x2bfbb6(0x21e)];if(_0x4d224f&&_0x4d224f['isBeingTouched']())return;if(Input[_0x2bfbb6(0x290)]('ok')||TouchInput[_0x2bfbb6(0x157)]()){const _0x446ec5=Input[_0x2bfbb6(0x290)]('ok');if(this['canPlaceFurniture'](_0x446ec5)){SoundManager['playPlaceFurnitureSound'](),this[_0x2bfbb6(0x2de)](_0x446ec5),Input[_0x2bfbb6(0x22e)]();const _0x59cc5d=TouchInput['x'],_0x452fc8=TouchInput['y'];TouchInput[_0x2bfbb6(0x22e)](),TouchInput['_x']=_0x59cc5d,TouchInput['_y']=_0x452fc8;}else SoundManager['playBuzzer']();}},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x255)]=function(_0x52ef43){const _0x54dd63=_0x5de8fc,_0x3e92a2=this[_0x54dd63(0x2e4)]();let _0x524ec7=_0x3e92a2['x'],_0x23e3c4=_0x3e92a2['y'];return _0x52ef43?(_0x524ec7=_0x3e92a2['x'],_0x23e3c4=_0x3e92a2['y']):(_0x524ec7=$gameMap[_0x54dd63(0x300)](TouchInput['x'])[_0x54dd63(0x1f2)](0x0,this[_0x54dd63(0x2f1)]()-0x1),_0x23e3c4=$gameMap['canvasToMapY'](TouchInput['y'])[_0x54dd63(0x1f2)](0x0,this['height']()-0x1),_0x3e92a2['x']=_0x3e92a2[_0x54dd63(0x183)]=_0x524ec7,_0x3e92a2['y']=_0x3e92a2[_0x54dd63(0x225)]=_0x23e3c4),{'x':_0x524ec7,'y':_0x23e3c4};},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1af)]=function(_0x4deeaa){const _0x4d8c1c=_0x5de8fc,_0x4cee25=this[_0x4d8c1c(0x255)](_0x4deeaa),_0x326fbb=_0x4cee25['x'],_0x4d8a67=_0x4cee25['y'];return this['canPlaceFurnitureAtLocation'](_0x326fbb,_0x4d8a67);},Game_Map['prototype'][_0x5de8fc(0x25a)]=function(_0x397162,_0x5b0862){const _0x467f52=_0x5de8fc;if(!this['checkPlaceFurnitureCollision'](_0x397162,_0x5b0862))return![];if(this[_0x467f52(0x202)](_0x397162,_0x5b0862))return!![];if(this[_0x467f52(0x1fb)](_0x397162,_0x5b0862))return!![];if(!this[_0x467f52(0x321)](_0x397162,_0x5b0862))return![];if(!this[_0x467f52(0x176)](_0x397162,_0x5b0862))return![];if(!this[_0x467f52(0x219)](_0x397162,_0x5b0862))return![];return!![];},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x202)]=function(_0x2e6877,_0x59fdca){const _0x2f94ed=_0x5de8fc,_0x1c4125=this[_0x2f94ed(0x195)](),_0x11084a=this['furnitureEvent']();let _0x1a2688=_0x2e6877-_0x11084a[_0x2f94ed(0x29d)][_0x2f94ed(0x1ae)],_0x213459=_0x2e6877+_0x11084a[_0x2f94ed(0x29d)]['right'],_0x1c9a30=_0x59fdca-_0x11084a[_0x2f94ed(0x29d)]['up'],_0x2c74bb=_0x59fdca+_0x11084a[_0x2f94ed(0x29d)][_0x2f94ed(0x251)];_0x1c4125[_0x2f94ed(0x21d)]=_0x1c4125[_0x2f94ed(0x21d)]||[];if(_0x1c4125['AllowRegions'][_0x2f94ed(0x187)]<=0x0)return![];for(let _0x181b42=_0x1a2688;_0x181b42<=_0x213459;_0x181b42++){for(let _0x2cba06=_0x1c9a30;_0x2cba06<=_0x2c74bb;_0x2cba06++){const _0x156553=this[_0x2f94ed(0x233)](_0x181b42,_0x2cba06);if(!_0x1c4125[_0x2f94ed(0x21d)][_0x2f94ed(0x212)](_0x156553))return![];}}return!![];},Game_Map['prototype']['checkPlaceFurnitureAtForbidRegion']=function(_0x2ebee0,_0x1b3850){const _0x25cc41=_0x5de8fc,_0x58b73c=this[_0x25cc41(0x195)]();_0x58b73c[_0x25cc41(0x21d)]=_0x58b73c[_0x25cc41(0x21d)]||[],_0x58b73c[_0x25cc41(0x2ea)]=_0x58b73c[_0x25cc41(0x2ea)]||[];const _0x1423dd=this[_0x25cc41(0x2ab)]();let _0x5481aa=_0x2ebee0-_0x1423dd[_0x25cc41(0x29d)]['left'],_0x51321b=_0x2ebee0+_0x1423dd[_0x25cc41(0x29d)][_0x25cc41(0x254)],_0x3ecaa3=_0x1b3850-_0x1423dd[_0x25cc41(0x29d)]['up'],_0x274937=_0x1b3850+_0x1423dd['_addedHitbox'][_0x25cc41(0x251)];for(let _0x5f1a5a=_0x5481aa;_0x5f1a5a<=_0x51321b;_0x5f1a5a++){for(let _0x39b1d5=_0x3ecaa3;_0x39b1d5<=_0x274937;_0x39b1d5++){const _0x1a52d8=this[_0x25cc41(0x233)](_0x5f1a5a,_0x39b1d5);if(_0x58b73c[_0x25cc41(0x2ea)]['includes'](_0x1a52d8))return![];if(_0x58b73c[_0x25cc41(0x21d)][_0x25cc41(0x187)]>0x0){if(!_0x58b73c[_0x25cc41(0x21d)][_0x25cc41(0x212)](_0x1a52d8))return![];}}}return!![];},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1fb)]=function(_0x5b68b3,_0x4383f6){const _0x3b3ece=_0x5de8fc,_0x491435=this['furnitureSettings'](),_0x5d51e2=this['furnitureEvent']();let _0x513fc8=_0x5b68b3-_0x5d51e2[_0x3b3ece(0x29d)]['left'],_0x4cecbf=_0x5b68b3+_0x5d51e2[_0x3b3ece(0x29d)][_0x3b3ece(0x254)],_0x37f62b=_0x4383f6-_0x5d51e2[_0x3b3ece(0x29d)]['up'],_0x380d03=_0x4383f6+_0x5d51e2[_0x3b3ece(0x29d)]['down'];_0x491435[_0x3b3ece(0x261)]=_0x491435[_0x3b3ece(0x261)]||[];if(_0x491435[_0x3b3ece(0x261)][_0x3b3ece(0x187)]<=0x0)return![];for(let _0x21e920=_0x513fc8;_0x21e920<=_0x4cecbf;_0x21e920++){for(let _0x1fcf2d=_0x37f62b;_0x1fcf2d<=_0x380d03;_0x1fcf2d++){const _0x4c950a=this[_0x3b3ece(0x1e0)](_0x21e920,_0x1fcf2d);if(!_0x491435['AllowTerrainTags'][_0x3b3ece(0x212)](_0x4c950a))return![];}}return!![];},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x176)]=function(_0x1d24ae,_0x14f6e4){const _0x248260=_0x5de8fc,_0x5d2c89=this['furnitureSettings']();_0x5d2c89['AllowTerrainTags']=_0x5d2c89[_0x248260(0x261)]||[],_0x5d2c89[_0x248260(0x2b0)]=_0x5d2c89[_0x248260(0x2b0)]||[];const _0x28b39d=this[_0x248260(0x2ab)]();let _0x1e227a=_0x1d24ae-_0x28b39d['_addedHitbox'][_0x248260(0x1ae)],_0xfde6d2=_0x1d24ae+_0x28b39d[_0x248260(0x29d)][_0x248260(0x254)],_0x16b144=_0x14f6e4-_0x28b39d[_0x248260(0x29d)]['up'],_0x7aee7b=_0x14f6e4+_0x28b39d[_0x248260(0x29d)][_0x248260(0x251)];for(let _0x127dbd=_0x1e227a;_0x127dbd<=_0xfde6d2;_0x127dbd++){for(let _0x1c4360=_0x16b144;_0x1c4360<=_0x7aee7b;_0x1c4360++){const _0x5c8d36=this[_0x248260(0x1e0)](_0x127dbd,_0x1c4360);if(_0x5d2c89[_0x248260(0x2b0)]['includes'](_0x5c8d36))return![];if(_0x5d2c89[_0x248260(0x261)]['length']>0x0){if(!_0x5d2c89[_0x248260(0x261)][_0x248260(0x212)](_0x5c8d36))return![];}}}return!![];},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x219)]=function(_0x6f30fa,_0x144d8e){const _0x4dcbf9=_0x5de8fc,_0x4df240=this['furnitureSettings']();if(_0x4df240[_0x4dcbf9(0x2e6)]){if(!this[_0x4dcbf9(0x2ee)](_0x6f30fa,_0x144d8e))return![];}return!![];},Game_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x2ee)]=function(_0x1ee937,_0x26595d){const _0x2f0e92=_0x5de8fc,_0x2e31e8=this[_0x2f0e92(0x2ab)]();let _0xc33cd5=_0x1ee937-_0x2e31e8[_0x2f0e92(0x29d)][_0x2f0e92(0x1ae)],_0x2419ac=_0x1ee937+_0x2e31e8[_0x2f0e92(0x29d)][_0x2f0e92(0x254)],_0x50f3f7=_0x26595d-_0x2e31e8[_0x2f0e92(0x29d)]['up'],_0x1ddbe5=_0x26595d+_0x2e31e8[_0x2f0e92(0x29d)][_0x2f0e92(0x251)];for(let _0x3ebee0=_0xc33cd5;_0x3ebee0<=_0x2419ac;_0x3ebee0++){for(let _0x531bef=_0x50f3f7;_0x531bef<=_0x1ddbe5;_0x531bef++){if(!this[_0x2f0e92(0x234)](_0x3ebee0,_0x531bef))return![];}}return!![];},Game_Map['prototype']['checkPlaceFurnitureCollision']=function(_0x51dfc0,_0x4b8fc2){const _0x593e3e=_0x5de8fc,_0x56c601=this[_0x593e3e(0x195)]();if(_0x56c601[_0x593e3e(0x1e1)]){if(this['checkExistingEntitiesAt'](_0x51dfc0,_0x4b8fc2))return![];const _0x194ad6=this['furnitureEventTemplateName'](),_0x3e9f0b=VisuMZ['EventTemplates'][_0x194ad6],_0x732b25={'template':_0x194ad6,'mapId':_0x3e9f0b[_0x593e3e(0x249)],'eventId':_0x3e9f0b[_0x593e3e(0x252)],'x':_0x51dfc0,'y':_0x4b8fc2,'spawnPreserved':!![],'spawnEventId':$gameMap[_0x593e3e(0x196)][_0x593e3e(0x187)]+0x3e8};if(!this[_0x593e3e(0x23a)](_0x732b25,_0x51dfc0,_0x4b8fc2))return![];}return!![];},VisuMZ['FurnitureSystem'][_0x5de8fc(0x1f7)]=Game_CharacterBase[_0x5de8fc(0x2d3)][_0x5de8fc(0x1de)],Game_CharacterBase['prototype'][_0x5de8fc(0x1de)]=function(){const _0xec4914=_0x5de8fc;if($gameMap&&$gameMap[_0xec4914(0x307)]())return;VisuMZ[_0xec4914(0x206)][_0xec4914(0x1f7)][_0xec4914(0x1ef)](this);},VisuMZ[_0x5de8fc(0x206)]['Game_Player_moveByInput']=Game_Player['prototype'][_0x5de8fc(0x1ab)],Game_Player[_0x5de8fc(0x2d3)][_0x5de8fc(0x1ab)]=function(){const _0x1f1c4b=_0x5de8fc;if($gameMap&&$gameMap[_0x1f1c4b(0x307)]()){$gameMap[_0x1f1c4b(0x30d)]();return;}VisuMZ[_0x1f1c4b(0x206)]['Game_Player_moveByInput'][_0x1f1c4b(0x1ef)](this);},VisuMZ['FurnitureSystem'][_0x5de8fc(0x1e6)]=Game_Player['prototype']['canStartLocalEvents'],Game_Player['prototype'][_0x5de8fc(0x2fa)]=function(){const _0x28d439=_0x5de8fc;if($gameMap&&$gameMap[_0x28d439(0x307)]())return![];return VisuMZ[_0x28d439(0x206)][_0x28d439(0x1e6)][_0x28d439(0x1ef)](this);},VisuMZ['FurnitureSystem'][_0x5de8fc(0x171)]=Game_Event[_0x5de8fc(0x2d3)][_0x5de8fc(0x21b)],Game_Event[_0x5de8fc(0x2d3)]['updateSelfMovement']=function(){const _0x318754=_0x5de8fc;if($gameMap&&$gameMap['isFurnitureSystemMode']())return;VisuMZ[_0x318754(0x206)]['Game_Event_updateSelfMovement']['call'](this);},Game_Event[_0x5de8fc(0x2d3)][_0x5de8fc(0x271)]=function(){const _0x25749c=_0x5de8fc;this[_0x25749c(0x2eb)]=this[_0x25749c(0x2b8)](),this[_0x25749c(0x227)]=$gameMap[_0x25749c(0x227)],this[_0x25749c(0x2b1)]=$gameMap[_0x25749c(0x2b1)][_0x25749c(0x248)](),this['_furnitureSystemSettings']=JsonEx['makeDeepCopy']($gameMap[_0x25749c(0x259)]);},Game_Event['prototype'][_0x5de8fc(0x2b8)]=function(){const _0x3d99f8=_0x5de8fc,_0xb98bd9=this[_0x3d99f8(0x2ba)]();if(_0xb98bd9){const _0x3f213e=VisuMZ[_0x3d99f8(0x206)][_0x3d99f8(0x1b3)],_0x1c9682=_0xb98bd9[_0x3d99f8(0x26a)];if(_0x1c9682[_0x3d99f8(0x228)](_0x3f213e[_0x3d99f8(0x23b)]))return![];}return!![];},Game_Event[_0x5de8fc(0x2d3)][_0x5de8fc(0x2ec)]=function(){const _0x393c18=_0x5de8fc;return this[_0x393c18(0x2eb)];},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2cb)]=Game_Interpreter[_0x5de8fc(0x2d3)][_0x5de8fc(0x20b)],Game_Interpreter['prototype'][_0x5de8fc(0x20b)]=function(){const _0x67553d=_0x5de8fc;if(this[_0x67553d(0x16a)][_0x67553d(0x19f)]!==_0x67553d(0x1d1)){if(SceneManager[_0x67553d(0x16e)]()&&$gameMap&&$gameMap['isFurnitureSystemMode']())return!![];}return VisuMZ[_0x67553d(0x206)]['Game_Interpreter_updateWaitMode'][_0x67553d(0x1ef)](this);},Scene_Map['FURNITURE_TOUCH_HOLD_TIME']=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x226)]||0x5a,VisuMZ[_0x5de8fc(0x206)]['Scene_Map_start']=Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x220)],Scene_Map['prototype'][_0x5de8fc(0x220)]=function(){const _0x14cd06=_0x5de8fc;VisuMZ[_0x14cd06(0x206)][_0x14cd06(0x2bb)][_0x14cd06(0x1ef)](this),$gameMap&&$gameMap[_0x14cd06(0x307)]()&&this[_0x14cd06(0x177)](this[_0x14cd06(0x168)](),![]);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x28d)]=Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x25d)],Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x25d)]=function(){const _0x2c73be=_0x5de8fc;if($gameMap&&$gameMap[_0x2c73be(0x307)]())return this[_0x2c73be(0x1ec)](),![];return VisuMZ[_0x2c73be(0x206)][_0x2c73be(0x28d)][_0x2c73be(0x1ef)](this);},VisuMZ['FurnitureSystem'][_0x5de8fc(0x2b9)]=Scene_Map['prototype'][_0x5de8fc(0x1d7)],Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1d7)]=function(){const _0x128096=_0x5de8fc;if($gameMap&&$gameMap[_0x128096(0x307)]())return;VisuMZ[_0x128096(0x206)][_0x128096(0x2b9)][_0x128096(0x1ef)](this);},VisuMZ['FurnitureSystem']['Scene_Map_isMenuEnabled']=Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1fd)],Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1fd)]=function(){const _0x702a15=_0x5de8fc;if($gameMap&&$gameMap['isFurnitureSystemMode']())return![];return VisuMZ[_0x702a15(0x206)][_0x702a15(0x262)][_0x702a15(0x1ef)](this);},VisuMZ['FurnitureSystem'][_0x5de8fc(0x16c)]=Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x2d0)],Scene_Map[_0x5de8fc(0x2d3)]['createAllWindows']=function(){const _0x5db2c4=_0x5de8fc;VisuMZ[_0x5db2c4(0x206)][_0x5db2c4(0x16c)][_0x5db2c4(0x1ef)](this),this[_0x5db2c4(0x1b1)]();},Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1b1)]=function(){const _0x3b1569=_0x5de8fc;this[_0x3b1569(0x207)](),this[_0x3b1569(0x2d8)](),this[_0x3b1569(0x1e9)]();},Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x207)]=function(){const _0x1b476c=_0x5de8fc,_0x238d4b=this['furnitureHelpWindowRect']();this[_0x1b476c(0x19e)]=new Window_FurnitureHelp(_0x238d4b),this[_0x1b476c(0x2e8)](this[_0x1b476c(0x19e)]);},Scene_Map['prototype']['furnitureHelpWindowRect']=function(){const _0x4a8562=_0x5de8fc;return VisuMZ[_0x4a8562(0x206)][_0x4a8562(0x2a2)][_0x4a8562(0x2af)][_0x4a8562(0x31c)]['call'](this);let _0xcf5fb5=Graphics['width'],_0x4a5254=this['calcWindowHeight'](0x2,![]),_0x4727c9=0x0,_0x277c91=Graphics[_0x4a8562(0x1ea)]-_0x4a5254;return new Rectangle(_0x4727c9,_0x277c91,_0xcf5fb5,_0x4a5254);},Scene_Map[_0x5de8fc(0x2d3)]['createFurnitureItemWindow']=function(){const _0x5578ec=_0x5de8fc,_0x5f4809=this[_0x5578ec(0x31a)]();this['_furnitureItemWindow']=new Window_FurnitureItem(_0x5f4809),this['addChild'](this['_furnitureItemWindow']);},Scene_Map['prototype'][_0x5de8fc(0x31a)]=function(){const _0x3e9c0e=_0x5de8fc;return VisuMZ[_0x3e9c0e(0x206)][_0x3e9c0e(0x2a2)][_0x3e9c0e(0x2af)][_0x3e9c0e(0x1a0)]['call'](this);let _0x3b5acf=Math[_0x3e9c0e(0x208)](Graphics['width']/0x3),_0x14c8b2=this[_0x3e9c0e(0x2d2)](0x1,![]),_0x419d9f=-$gameSystem[_0x3e9c0e(0x2b2)](),_0x5933d7=Math[_0x3e9c0e(0x208)](Graphics[_0x3e9c0e(0x1ea)]*0x1/0x6);return new Rectangle(_0x419d9f,_0x5933d7,_0x3b5acf,_0x14c8b2);},Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x1e9)]=function(){const _0x26d80e=_0x5de8fc,_0x3535e2=new Sprite_Button(_0x26d80e(0x15b)),_0x264865=VisuMZ[_0x26d80e(0x206)][_0x26d80e(0x2a2)][_0x26d80e(0x2af)];_0x3535e2['x']=_0x264865[_0x26d80e(0x276)]['call'](this,_0x3535e2),_0x3535e2['y']=_0x264865[_0x26d80e(0x210)]['call'](this,_0x3535e2),_0x3535e2[_0x26d80e(0x17b)]=![],_0x3535e2['setFurnitureButton'](),this[_0x26d80e(0x2e8)](_0x3535e2),this['_furnitureCancelButton']=_0x3535e2;},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x1ac)]=Scene_Map[_0x5de8fc(0x2d3)]['processMapTouch'],Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x15a)]=function(){const _0x28db3c=_0x5de8fc;if($gameMap&&$gameMap[_0x28db3c(0x307)]())return;if(this['_touchCount']>=0x1&&this[_0x28db3c(0x232)]()){if(TouchInput[_0x28db3c(0x199)]()&&this[_0x28db3c(0x317)]>=Scene_Map[_0x28db3c(0x167)])TouchInput[_0x28db3c(0x2cf)]=!![],SoundManager[_0x28db3c(0x1bc)](),this['startMoveFurnitureModeByTouch']();else{if(TouchInput[_0x28db3c(0x199)]())this[_0x28db3c(0x317)]++;else TouchInput['isReleased']()&&this['_touchCount']<Scene_Map[_0x28db3c(0x167)]?this['onMapTouch']():this[_0x28db3c(0x317)]=0x0;}}else TouchInput['isTriggered']()&&this[_0x28db3c(0x317)]===0x0&&this[_0x28db3c(0x232)]()&&this[_0x28db3c(0x317)]++,VisuMZ[_0x28db3c(0x206)][_0x28db3c(0x1ac)][_0x28db3c(0x1ef)](this);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x1b7)]=TouchInput[_0x5de8fc(0x303)],TouchInput[_0x5de8fc(0x303)]=function(_0x5a471e,_0x5c69b1){const _0x5b713d=_0x5de8fc;if(TouchInput['_preventTouchReleaseOnce']){TouchInput['_preventTouchReleaseOnce']=![];return;}VisuMZ[_0x5b713d(0x206)][_0x5b713d(0x1b7)][_0x5b713d(0x1ef)](this,_0x5a471e,_0x5c69b1);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x283)]=function(_0x3e8dad,_0x293fd4){if(_0x3e8dad===undefined)_0x3e8dad=TouchInput['x'];if(_0x293fd4===undefined)_0x293fd4=TouchInput['y'];return _0x3e8dad=$gameMap['canvasToMapX'](_0x3e8dad),_0x293fd4=$gameMap['canvasToMapY'](_0x293fd4),this['GetFurnitureAtXy'](_0x3e8dad,_0x293fd4);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x216)]=function(_0x46bad8,_0x30849d){const _0x47f280=_0x5de8fc,_0x476db9=$gameMap['eventsXy'](_0x46bad8,_0x30849d);for(const _0x4aa8d9 of _0x476db9){if(!_0x4aa8d9)continue;if(_0x4aa8d9[_0x47f280(0x238)])continue;if(_0x4aa8d9[_0x47f280(0x2ec)]())return _0x4aa8d9;}return null;},Scene_Map['prototype'][_0x5de8fc(0x232)]=function(){const _0x31378f=_0x5de8fc;return!!VisuMZ[_0x31378f(0x206)][_0x31378f(0x283)]();},Scene_Map['prototype']['startMoveFurnitureModeByTouch']=function(){const _0x5595e9=_0x5de8fc,_0x3e4943=TouchInput['x'],_0x80394a=TouchInput['y'];TouchInput[_0x5595e9(0x22e)](),Input[_0x5595e9(0x22e)](),TouchInput['_x']=_0x3e4943,TouchInput['_y']=_0x80394a;const _0xc73713=VisuMZ[_0x5595e9(0x206)][_0x5595e9(0x283)](_0x3e4943,_0x80394a);this['startMoveFurnitureMode'](_0xc73713);},Scene_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x26b)]=function(_0x922b31){const _0x43eedf=_0x5de8fc,_0x2d6294=_0x922b31['x'],_0x5aac96=_0x922b31['y'],_0x40d2f8=_0x922b31[_0x43eedf(0x227)],_0x410f66=_0x922b31[_0x43eedf(0x2b1)]['clone'](),_0x540bb6=JsonEx['makeDeepCopy'](_0x922b31['_furnitureSystemSettings']);_0x540bb6[_0x43eedf(0x231)]=!![],_0x540bb6[_0x43eedf(0x2f4)]=![];if(_0x540bb6[_0x43eedf(0x1be)]>0x0){const _0x1f56ac=$dataItems[_0x540bb6[_0x43eedf(0x1be)]];if(_0x1f56ac[_0x43eedf(0x1d9)])$gameParty['gainItem'](_0x1f56ac,0x1);$gameMap[_0x43eedf(0x1f9)](_0x1f56ac);}$gameMap[_0x43eedf(0x2ff)](_0x922b31[_0x43eedf(0x16b)]()),$gameTemp[_0x43eedf(0x227)]=_0x40d2f8,$gameMap[_0x43eedf(0x27b)](_0x410f66,_0x540bb6),$gameMap['_furnitureSystemTemplateIndex']=_0x40d2f8,$gameTemp['_furnitureSystemTemplateIndex']=undefined;const _0x159996=$gameMap[_0x43eedf(0x273)];_0x159996['x']=_0x159996[_0x43eedf(0x183)]=_0x2d6294,_0x159996['y']=_0x159996[_0x43eedf(0x225)]=_0x5aac96,_0x159996[_0x43eedf(0x304)]=TouchInput['x'],_0x159996['lastCursorY']=TouchInput['y'],VisuMZ[_0x43eedf(0x206)][_0x43eedf(0x24e)]();},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2fe)]=Scene_Item[_0x5de8fc(0x2d3)][_0x5de8fc(0x1dc)],Scene_Item[_0x5de8fc(0x2d3)][_0x5de8fc(0x1dc)]=function(){const _0x23aecb=_0x5de8fc;this[_0x23aecb(0x282)]()?this['processPlaceFurniture']():VisuMZ[_0x23aecb(0x206)]['Scene_Item_useItem'][_0x23aecb(0x1ef)](this);},Scene_Item[_0x5de8fc(0x2d3)][_0x5de8fc(0x282)]=function(){const _0x45620f=_0x5de8fc;return DataManager[_0x45620f(0x266)](this[_0x45620f(0x2da)]())&&SceneManager[_0x45620f(0x1af)]();},Scene_Item[_0x5de8fc(0x2d3)][_0x5de8fc(0x1db)]=function(){const _0x25c8db=_0x5de8fc;$gameMap[_0x25c8db(0x281)](this[_0x25c8db(0x2da)]()),this[_0x25c8db(0x214)](this[_0x25c8db(0x168)](),![]),SceneManager[_0x25c8db(0x1eb)](Scene_Map);},VisuMZ['FurnitureSystem'][_0x5de8fc(0x27e)]=Scene_ItemBase[_0x5de8fc(0x2d3)][_0x5de8fc(0x1d2)],Scene_ItemBase[_0x5de8fc(0x2d3)][_0x5de8fc(0x1d2)]=function(){const _0x51dc31=_0x5de8fc;if($gameMap&&$gameMap[_0x51dc31(0x307)]())return;VisuMZ[_0x51dc31(0x206)][_0x51dc31(0x27e)]['call'](this);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x22d)]=Sprite_Button[_0x5de8fc(0x2d3)][_0x5de8fc(0x277)],Sprite_Button[_0x5de8fc(0x2d3)][_0x5de8fc(0x277)]=function(_0x23d384){const _0x2103dd=_0x5de8fc;VisuMZ[_0x2103dd(0x206)][_0x2103dd(0x22d)]['call'](this,_0x23d384),this[_0x2103dd(0x1a9)]=![];},Sprite_Button[_0x5de8fc(0x2d3)][_0x5de8fc(0x2c7)]=function(){this['_forFurnitureMode']=!![];},Sprite_Button['prototype'][_0x5de8fc(0x1e3)]=function(){const _0xf3bd9d=_0x5de8fc;return this[_0xf3bd9d(0x1a9)];},VisuMZ['FurnitureSystem'][_0x5de8fc(0x270)]=Sprite_Button[_0x5de8fc(0x2d3)][_0x5de8fc(0x280)],Sprite_Button[_0x5de8fc(0x2d3)][_0x5de8fc(0x280)]=function(){const _0x4a1709=_0x5de8fc;VisuMZ['FurnitureSystem'][_0x4a1709(0x270)][_0x4a1709(0x1ef)](this),this[_0x4a1709(0x2f0)]();},Sprite_Button[_0x5de8fc(0x2d3)][_0x5de8fc(0x2f0)]=function(){const _0x2e2985=_0x5de8fc;if(!this[_0x2e2985(0x1e3)]())return;$gameMap&&$gameMap[_0x2e2985(0x307)]()?this[_0x2e2985(0x2b4)]===_0x2e2985(0x15b)&&$gameMap[_0x2e2985(0x195)]()['PreventCancelExit']?this['visible']=![]:this['visible']=!![]:this[_0x2e2985(0x17b)]=![];},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x17a)]=Sprite_Character[_0x5de8fc(0x2d3)][_0x5de8fc(0x213)],Sprite_Character[_0x5de8fc(0x2d3)][_0x5de8fc(0x213)]=function(){const _0x51f2aa=_0x5de8fc;if($gameMap&&$gameMap[_0x51f2aa(0x307)]())return![];return VisuMZ[_0x51f2aa(0x206)][_0x51f2aa(0x17a)][_0x51f2aa(0x1ef)](this);};function Sprite_FurnitureCursor(){const _0x3de3ea=_0x5de8fc;this[_0x3de3ea(0x277)](...arguments);}Sprite_FurnitureCursor[_0x5de8fc(0x2d3)]=Object[_0x5de8fc(0x30a)](Sprite_Character['prototype']),Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x16a)]=Sprite_FurnitureCursor,Sprite_FurnitureCursor[_0x5de8fc(0x1df)]=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x1f4)][_0x5de8fc(0x258)],Sprite_FurnitureCursor[_0x5de8fc(0x23e)]=VisuMZ[_0x5de8fc(0x206)]['Settings'][_0x5de8fc(0x1f4)][_0x5de8fc(0x17f)],Sprite_FurnitureCursor[_0x5de8fc(0x1a1)]=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)]['Filter'][_0x5de8fc(0x22f)],Sprite_FurnitureCursor[_0x5de8fc(0x162)]=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x1f4)]['OutlineForbidColor'],Sprite_FurnitureCursor[_0x5de8fc(0x172)]=VisuMZ[_0x5de8fc(0x206)]['Settings']['Filter'][_0x5de8fc(0x218)][_0x5de8fc(0x248)](),Sprite_FurnitureCursor['COLORFILTER_FORBID_TONE']=VisuMZ['FurnitureSystem'][_0x5de8fc(0x2a2)][_0x5de8fc(0x1f4)][_0x5de8fc(0x22a)][_0x5de8fc(0x248)](),Sprite_FurnitureCursor['prototype'][_0x5de8fc(0x277)]=function(){const _0x1cb504=_0x5de8fc;this[_0x1cb504(0x2fd)]='',this[_0x1cb504(0x221)]=![],Sprite_Character[_0x1cb504(0x2d3)]['initialize'][_0x1cb504(0x1ef)](this,null),this[_0x1cb504(0x310)]();},Sprite_FurnitureCursor['prototype'][_0x5de8fc(0x2dc)]=function(){const _0x40972b=_0x5de8fc;if(this[_0x40972b(0x2fd)]!==$gameMap[_0x40972b(0x1ce)]()){this['_lastTemplateName']=$gameMap['furnitureEventTemplateName'](),this[_0x40972b(0x256)]($gameMap[_0x40972b(0x2ab)]());if(!this[_0x40972b(0x2fd)])this[_0x40972b(0x314)]=new Bitmap(0x1,0x1);}},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x28c)]=function(){const _0x396698=_0x5de8fc;return this[_0x396698(0x298)]!==null&&$gameMap&&$gameMap[_0x396698(0x307)]();},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)]['update']=function(){const _0xfbd86f=_0x5de8fc;this[_0xfbd86f(0x2dc)](),this[_0xfbd86f(0x28c)]()?(Sprite_Character[_0xfbd86f(0x2d3)][_0xfbd86f(0x280)][_0xfbd86f(0x1ef)](this),this['updateFilters']()):Sprite[_0xfbd86f(0x2d3)][_0xfbd86f(0x280)][_0xfbd86f(0x1ef)](this),this[_0xfbd86f(0x2f0)]();},Sprite_FurnitureCursor['prototype'][_0x5de8fc(0x2f0)]=function(){const _0x463bc8=_0x5de8fc;this['visible']=this[_0x463bc8(0x28c)]();},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x1b2)]=function(){const _0x312fb0=_0x5de8fc;this[_0x312fb0(0x1f3)](),this['z']=0xa,this['_mouseMode']?(this['x']=$gameMap['canvasToMapX'](TouchInput['x'])[_0x312fb0(0x1f2)](0x0,$gameMap[_0x312fb0(0x2f1)]()-0x1),this['y']=$gameMap[_0x312fb0(0x2d7)](TouchInput['y'])[_0x312fb0(0x1f2)](0x0,$gameMap['height']()-0x1)):(this['x']=$gameMap[_0x312fb0(0x2e4)]()['x'],this['y']=$gameMap[_0x312fb0(0x2e4)]()['y']),this['x']=this[_0x312fb0(0x311)](this['x']),this['y']=this['converScreenPositionY'](this['y']);},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x311)]=function(_0x454afe){const _0x95ce7f=_0x5de8fc,_0xe45f11=$gameMap['tileWidth'](),_0x173ffd=$gameMap[_0x95ce7f(0x1cb)](_0x454afe);return Math[_0x95ce7f(0x164)](_0x173ffd*_0xe45f11+_0xe45f11/0x2);},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x2c8)]=function(_0x31b39c){const _0x14ff98=_0x5de8fc,_0xcd0da9=$gameMap[_0x14ff98(0x2c2)](),_0x1282b4=$gameMap[_0x14ff98(0x1f5)](_0x31b39c);return Math[_0x14ff98(0x164)](_0x1282b4*_0xcd0da9+_0xcd0da9);},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)]['updateMouseMode']=function(){const _0x234c14=_0x5de8fc,_0x11dddb=$gameMap[_0x234c14(0x2e4)]();this[_0x234c14(0x221)]=_0x11dddb[_0x234c14(0x304)]!==TouchInput['x']||_0x11dddb['lastCursorY']!==TouchInput['y'];},Sprite_FurnitureCursor['prototype'][_0x5de8fc(0x310)]=function(){const _0x1e98bd=_0x5de8fc;this[_0x1e98bd(0x318)]=this[_0x1e98bd(0x318)]||[],this['createOutlineFilter'](),this[_0x1e98bd(0x2db)]();},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)]['createOutlineFilter']=function(){const _0xb870e2=_0x5de8fc;if(!PIXI['filters'][_0xb870e2(0x279)])return;!this[_0xb870e2(0x1b9)]&&(this[_0xb870e2(0x1b9)]=new PIXI['filters'][(_0xb870e2(0x279))](),this[_0xb870e2(0x318)]['push'](this['_outlineFilter'])),this['_outlineFilter'][_0xb870e2(0x2a8)]=Sprite_FurnitureCursor[_0xb870e2(0x1df)],this['_outlineFilter'][_0xb870e2(0x1bf)]=Sprite_FurnitureCursor[_0xb870e2(0x23e)];},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x2db)]=function(){const _0x113066=_0x5de8fc;this[_0x113066(0x191)]=new ColorFilter(),this[_0x113066(0x318)][_0x113066(0x295)](this[_0x113066(0x191)]);},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x15e)]=function(){const _0x5263cf=_0x5de8fc;this['updateOutlineFilter'](),this[_0x5263cf(0x275)]();},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)]['updateOutlineFilter']=function(){const _0x23e94a=_0x5de8fc;if(!this[_0x23e94a(0x1b9)])return;const _0x36237b=$gameMap[_0x23e94a(0x1af)](!this[_0x23e94a(0x221)]);_0x36237b?this[_0x23e94a(0x1b9)][_0x23e94a(0x284)]=Sprite_FurnitureCursor[_0x23e94a(0x1a1)]:this[_0x23e94a(0x1b9)][_0x23e94a(0x284)]=Sprite_FurnitureCursor[_0x23e94a(0x162)];},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x275)]=function(){const _0xda97e5=_0x5de8fc,_0x2a0d65=$gameMap[_0xda97e5(0x1af)](!this[_0xda97e5(0x221)]);_0x2a0d65?this['_colorFilter']['setColorTone'](Sprite_FurnitureCursor[_0xda97e5(0x172)]):this[_0xda97e5(0x191)][_0xda97e5(0x289)](Sprite_FurnitureCursor['COLORFILTER_FORBID_TONE']);},Sprite_FurnitureCursor[_0x5de8fc(0x2d3)][_0x5de8fc(0x209)]=function(){const _0x5ecb30=_0x5de8fc;this[_0x5ecb30(0x243)]=undefined,this['_tileId']=undefined,this[_0x5ecb30(0x2c0)]=undefined,this[_0x5ecb30(0x18c)]=undefined,this['_mouseMode']=![],this['updateBitmap'](),this[_0x5ecb30(0x280)](),this[_0x5ecb30(0x1b2)]();},Sprite_FurnitureCursor['prototype'][_0x5de8fc(0x2e0)]=function(){const _0x44455e=_0x5de8fc;this[_0x44455e(0x2d4)]['x']=this[_0x44455e(0x298)][_0x44455e(0x2cd)]??0x1,this[_0x44455e(0x2d4)]['y']=this[_0x44455e(0x298)][_0x44455e(0x2fb)]??0x1;},VisuMZ[_0x5de8fc(0x206)]['Spriteset_Map_createLowerLayer']=Spriteset_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x2f7)],Spriteset_Map[_0x5de8fc(0x2d3)]['createLowerLayer']=function(){const _0x39cab8=_0x5de8fc;VisuMZ[_0x39cab8(0x206)][_0x39cab8(0x315)][_0x39cab8(0x1ef)](this),this[_0x39cab8(0x186)]();},Spriteset_Map[_0x5de8fc(0x2d3)][_0x5de8fc(0x186)]=function(){const _0x49b824=_0x5de8fc;this['_furnitureEventSprite']=new Sprite_FurnitureCursor(),this[_0x49b824(0x30e)]['visible']=![],this[_0x49b824(0x25e)][_0x49b824(0x2e8)](this['_furnitureEventSprite']);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x1c5)]=Spriteset_Map['prototype'][_0x5de8fc(0x1d8)],Spriteset_Map[_0x5de8fc(0x2d3)]['createSpawnedEvent']=function(_0x57a911){const _0x323686=_0x5de8fc;if($gameTemp[_0x323686(0x170)])return;VisuMZ[_0x323686(0x206)][_0x323686(0x1c5)]['call'](this,_0x57a911);},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x292)]=Window_ItemList['prototype'][_0x5de8fc(0x24b)],Window_ItemList[_0x5de8fc(0x2d3)][_0x5de8fc(0x24b)]=function(_0x1bf0b6){const _0x28c0dd=_0x5de8fc;return DataManager[_0x28c0dd(0x266)](_0x1bf0b6)?SceneManager[_0x28c0dd(0x1af)]()&&this['isFurnitureMapCompatible'](_0x1bf0b6):VisuMZ['FurnitureSystem'][_0x28c0dd(0x292)][_0x28c0dd(0x1ef)](this,_0x1bf0b6);},Window_ItemList[_0x5de8fc(0x2d3)][_0x5de8fc(0x2e7)]=function(_0x4cecc2){const _0x241962=_0x5de8fc,_0x1017a0=DataManager[_0x241962(0x23f)](_0x4cecc2),_0x21b5a3=DataManager[_0x241962(0x1e2)]();return _0x1017a0['some'](_0x36455b=>_0x21b5a3[_0x241962(0x212)](_0x36455b));},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x1c1)]=Window_ItemList[_0x5de8fc(0x2d3)][_0x5de8fc(0x29e)],Window_ItemList[_0x5de8fc(0x2d3)][_0x5de8fc(0x29e)]=function(){const _0x3130c1=_0x5de8fc;VisuMZ['FurnitureSystem']['Window_ItemList_makeItemList']['call'](this),SceneManager[_0x3130c1(0x184)]()&&this['sortFurnitureItems']();},Window_ItemList[_0x5de8fc(0x2d3)][_0x5de8fc(0x174)]=function(){const _0x5a5bad=_0x5de8fc,_0xdffb5c=VisuMZ[_0x5a5bad(0x206)]['Settings'][_0x5a5bad(0x2ed)],_0x42041b=_0xdffb5c[_0x5a5bad(0x1d4)]??!![];if(!_0x42041b)return;this['_data']=this['_data'][_0x5a5bad(0x21f)]((_0x1dc274,_0x1baa32)=>{const _0x12b212=_0x5a5bad;if(DataManager[_0x12b212(0x266)](_0x1dc274)&&DataManager[_0x12b212(0x266)](_0x1baa32)){if(this[_0x12b212(0x24b)](_0x1dc274)&&!this[_0x12b212(0x24b)](_0x1baa32))return-0x1;if(this[_0x12b212(0x24b)](_0x1baa32)&&!this[_0x12b212(0x24b)](_0x1dc274))return 0x1;}return 0x0;});};function Window_FurnitureHelp(){const _0x1ee576=_0x5de8fc;this[_0x1ee576(0x277)](...arguments);}function _0x2851(){const _0x49acd7=['push','FurnitureForbidTerrainTags','_spriteset','_character','getSpawnPointsWithTerrainTags','setupFurnitureCursor','OFFSET_COLUMN_2_X','ParseAllNotetags','_addedHitbox','makeItemList','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','OFFSET_COLUMN_1_X','updateOpacity','Settings','_cache_getMapFurnitureTypes','onDatabaseLoaded','itemPadding','updateFurnitureModeInputConfirm','setValue','thickness','FurniturePreventCancelExit','_dimmerSprite','furnitureEvent','isItem','4753878sbYIqi','NUM','Window','ForbidTerrainTags','_furnitureSystemTemplates','windowPadding','isRepeated','_buttonType','isValid','PosY','toUpperCase','canRegisterFurnitureData','Scene_Map_onMapTouch','event','Scene_Map_start','HelpWindow_Col1_OffsetX','isForFriend','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_data','_characterName','450003QfSWye','tileHeight','%1Pitch','RegionsForbid','RegionsAllow','trim','setFurnitureButton','converScreenPositionY','FurnitureOnPlaceEndOnce','endFurnitureSystemMode','Game_Interpreter_updateWaitMode','reserveCommonEvent','_scaleX','FurnitureSpawnAtXY','_preventTouchReleaseOnce','createAllWindows','Armor-%1-%2','calcWindowHeight','prototype','scale','getSpawnPointsInRegion','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','canvasToMapY','createFurnitureItemWindow','numItems','item','createColorFilter','checkTemplateChange','morphIntoTemplate','finishFurnitureSystemMode','updateFurnitureModeInputDirection','updateScaleBase','screenTileY','isAllowFurniture','version','furnitureEventPosition','CancelButtons','CheckPassability','isFurnitureMapCompatible','addChild','ConvertParams','ForbidRegions','_furniture','isSpawnedFurniture','Default','checkFurniturePassableAnyDirection','exit','updateFurnitureVisibility','width','CreateSpawnData','%1Volume','PreventCancelExit','_interpreter','EndOnPlace','createLowerLayer','AllowFurniture','DEFAULT_FURNITURE_ALLOW_TERRAIN_TAGS','canStartLocalEvents','_scaleY','FurnitureAllowTerrainTags','_lastTemplateName','Scene_Item_useItem','despawnEventId','canvasToMapX','VariantText','HelpWindow_FadeTarget','_onRelease','lastCursorX','STRUCT','ParseItemNotetags','isFurnitureSystemMode','CancelText','FurnitureSpawnAtRegion','create','devPlaceFurnitureAtTerrainTag','playCancel','updateFurnitureModeInput','_furnitureEventSprite','ItemWindow_DrawJS','createFilters','converScreenPositionX','setupSpawn','dimColor1','bitmap','Spriteset_Map_createLowerLayer','toLowerCase','_touchCount','filters','Enemy-%1-%2','furnitureItemWindowRect','HelpWindow_BgType','HelpWindow_RectJS','Sound','randomInt','RefreshFurnitureModeVisuals','OnPlaceFurniture','checkPlaceFurnitureAtForbidRegion','This\x20furniture\x27s\x20settings\x20will\x20softlock\x20the\x20player.\x0aCancel\x20is\x20reenabled.','spawnFurnitureEventAtXy','changePaintOpacity','createJS','shiftFurnitureTemplateIndex','isReleased','EventTemplates','prepareSpawnedEventAtXY','processMapTouch','cancel','25GeMJnY','updateFurnitureItemWindowCount','updateFilters','isRunning','parse','playPlaceFurnitureSound','OUTLINE_FILTER_FORBID_COLOR','filter','floor','OnRemoveFurniture','_onceParallelInterpreters','FURNITURE_TOUCH_HOLD_TIME','fadeSpeed','ARRAYFUNC','constructor','eventId','Scene_Map_createAllWindows','innerWidth','isSceneMap','FurnitureFreePassability','_furnitureModeRegisterEvent','Game_Event_updateSelfMovement','COLORFILTER_ALLOW_TONE','min','sortFurnitureItems','FurnitureSpawnAtTerrainTag','checkPlaceFurnitureAtForbidTerrainTag','startFadeIn','updateFurnitureModeInputScrollWheel','updateVisibility','Sprite_Character_isAllowCharacterTilt','visible','key%1','Place','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20item\x20=\x20arguments[0];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','OutlineQuality','Move','opacity','FurnitureTemplates','lastPosX','isSceneItem','dir4','createFurnitureSystemEventSprite','length','drawItemNumber','onPlaceFurnitureSpawnEvent','33606BPKJpe','Window_ItemList_drawItemNumber','_characterIndex','process_VisuMZ_FurnitureSystem_JS','onPlaceFurnitureRunCommonEvent','DEFAULT_FURNITURE_CHECK_PASSABILITY','_furnitureSystemEvent','_colorFilter','extractFurnitureSettings','Region','isHasMultipleVariants','furnitureSettings','_spawnedEvents','getLastPluginCommandInterpreter','JsOnPlace','isPressed','ThisEventDespawnFurniture','contentsOpacity','contents','lineHeight','_furnitureHelpWindow','name','ItemWindow_RectJS','OUTLINE_FILTER_ALLOW_COLOR','registerCommand','10494880NanozU','OnPlaceCommonEventID','BG_TYPE','parameters','updateKeyText','fullRect','_forFurnitureMode','Actor-%1-%2','moveByInput','Scene_Map_processMapTouch','FUNC','left','canPlaceFurniture','HelpWindow_Col2_OffsetX','createFurnitureSystemDisplayObjects','updatePosition','RegExp','buttonAssistKey%1','_eventId','ConfirmButtons','TouchInput_onRelease','PositionText','_outlineFilter','_spawnData','TargetEventRetrieveFurniture','playMoveFurnitureSound','checkExistingEntitiesAt','OnPlaceConsumeItem','quality','ThisEventRetrieveFurniture','Window_ItemList_makeItemList','onPlaceFurniture','7EWJpEB','playOnceParallelInterpreter','Spriteset_Map_createSpawnedEvent','FADE_OPACITY_TARGET','createKeyJS','status','DEFAULT_FURNITURE_CHECK_EVENT_COLLISION','DEFAULT_FURNITURE_ON_PLACE_COMMON_EVENT','adjustX','DEFAULT_FURNITURE_END_MODE_ON_PLACE','_furnitureItemWindow','furnitureEventTemplateName','ARRAYNUM','split','Game_OnceParallelInterpreter','activateItemWindow','list','prioritizePlaceable','PosX','pageup','onMapTouch','createSpawnedEvent','consumable','SuccessSwitchId','processPlaceFurniture','useItem','ConfirmText','updateMove','OUTLINE_FILTER_THICKNESS','terrainTag','CheckEventCollision','getMapFurnitureTypes','isFurnitureButton','text%1','updateFrame','Game_Player_canStartLocalEvents','refresh','CommonEvent','createFurnitureCancelButton','height','goto','updateOnceParallelInterpreters','PurgeNonTemplateData','Weapon-%1-%2','call','TemplateIndex','needsNumber','clamp','updateMouseMode','Filter','adjustY','ARRAYJSON','Game_CharacterBase_updateMove','playSe','onRemoveFurnitureJS','%1Name','checkPlaceFurnitureAtAlowTerrainTag','playCursor','isMenuEnabled','lastCursorY','any','FurnitureType','GenerateItem','checkPlaceFurnitureAtAllowRegion','onPlaceFurnitureJS','_cache_getFurnitureTypes','_displayX','FurnitureSystem','createFurnitureHelpWindow','round','resetForNewFurnitureMode','ItemWindow_FadeTarget','updateWaitMode','_scene','eventsXy','TargetEventMoveFurniture','setupChild','CancelButtonYPositionJS','ARRAYSTRUCT','includes','isAllowCharacterTilt','startFadeOut','STR','GetFurnitureAtXy','MapsAllowFurniture','AllowTone','checkPlaceFurniturePassability','Skill-%1-%2','updateSelfMovement','drawTextEx','AllowRegions','_furnitureCancelButton','sort','start','_mouseMode','buttonAssistText%1','VariantButtons','isCancelExitPrevented','lastPosY','HoldTime','_furnitureSystemTemplateIndex','match','Scene_Boot_onDatabaseLoaded','ForbidTone','Item-%1-%2','extractFurnitureTemplates','Sprite_Button_initialize','clear','OutlineAllowedColor','JsOnRemove','OnPlaceEndMode','checkFurnitureAtTouchLocation','regionId','isPassableByAnyDirection','hide','FurnitureOnPlaceEndless','updateItemType','_erased','_item','isSpawnHitboxCollisionOk','FurnitureNotMovable','max','gradientFillRect','OUTLINE_FILTER_QUALITY','getFurnitureTypes','_itemID','20zeGcVh','7423128jLHJdo','_tilesetId','dimColor2','19304230pbJyvy','VisuMZ_1_ItemsEquipsCore','PositionButtons','clone','MapID','FurnitureItem','isEnabled','pagedown','JSON','RefreshFurnitureCursorBitmap','setupFurnitureData','screenTileX','down','EventID','%1Pant','right','getTargetFurnitureLocation','setCharacter','description','OutlineThickness','_furnitureSystemSettings','canPlaceFurnitureAtLocation','mapId','format','isSceneChangeOk','_baseSprite','109812UQWTDd','furnitureEventTemplateData','AllowTerrainTags','Scene_Map_isMenuEnabled','wheelY','ARRAYEVAL','ARRAYSTR','isFurnitureItem','DEFAULT_FURNITURE_FORBID_REGIONS','TerrainTagsForbid','TerrainTags','note','startMoveFurnitureMode','State-%1-%2','TerrainTagsAllow','Class-%1-%2','FurnitureFreeEventCollisionCheck','Sprite_Button_update','registerFurnitureData','makeDeepCopy','_furnitureSystemEventPosition','ThisEventMoveFurniture','updateColorFilter','CancelButtonXPositionJS','initialize','DEFAULT_ALLOW_FURNITURE','OutlineFilter','_displayY','startFurnitureSystemMode','DEFAULT_FURNITURE_ALLOW_REGIONS','map','Scene_ItemBase_activateItemWindow','textSizeEx','update','prepareFurniturePlacementMode','checkFurniturePlacement','GetFurnitureAtTouchedXy','color','consumeItem','DEFAULT_FURNITURE_FORBID_TERRAIN_TAGS','_furnitureModeAntiSoftlockAlert','concat','setColorTone','gainItem','Game_Action_isForFriend','allowUpdate','Scene_Map_isSceneChangeOk','FurnitureNeedPassability','devPlaceFurnitureAtRegion','isTriggered','resetPattern','Window_ItemList_isEnabled','drawItemName','setBackgroundType'];_0x2851=function(){return _0x49acd7;};return _0x2851();}Window_FurnitureHelp['prototype']=Object[_0x5de8fc(0x30a)](Window_Base[_0x5de8fc(0x2d3)]),Window_FurnitureHelp[_0x5de8fc(0x2d3)][_0x5de8fc(0x16a)]=Window_FurnitureHelp,Window_FurnitureHelp[_0x5de8fc(0x1a5)]=VisuMZ['FurnitureSystem'][_0x5de8fc(0x2a2)]['Window'][_0x5de8fc(0x31b)],Window_FurnitureHelp['FADE_OPACITY_TARGET']=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x302)],Window_FurnitureHelp[_0x5de8fc(0x2a0)]=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)]['Window'][_0x5de8fc(0x2bc)],Window_FurnitureHelp[_0x5de8fc(0x29b)]=VisuMZ['FurnitureSystem'][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x1b0)],Window_FurnitureHelp[_0x5de8fc(0x2d3)][_0x5de8fc(0x277)]=function(_0x53a919){const _0x46e695=_0x5de8fc;this[_0x46e695(0x1a8)]=_0x53a919,this[_0x46e695(0x2bf)]={},Window_Base['prototype'][_0x46e695(0x277)][_0x46e695(0x1ef)](this,_0x53a919),this[_0x46e695(0x294)](Window_FurnitureHelp[_0x46e695(0x1a5)]),this[_0x46e695(0x1e7)](),this[_0x46e695(0x235)]();},Window_FurnitureHelp[_0x5de8fc(0x2d3)]['refresh']=function(){const _0x37231a=_0x5de8fc;this[_0x37231a(0x19c)][_0x37231a(0x22e)](),this['resetFontSettings']();return VisuMZ[_0x37231a(0x206)][_0x37231a(0x2a2)]['Window']['HelpWindow_DrawJS']['call'](this);let _0x9badbd=Math[_0x37231a(0x208)](this[_0x37231a(0x19c)][_0x37231a(0x2f1)]*0x1/0x4);_0x9badbd+=Window_FurnitureHelp[_0x37231a(0x2a0)];let _0xa7f361=Math[_0x37231a(0x208)](this[_0x37231a(0x19c)]['width']*0x3/0x4);_0xa7f361+=Window_FurnitureHelp[_0x37231a(0x29b)];const _0x1b1870=this['textWidth']('\x20');{this['changePaintOpacity'](!![]);const _0x160192=TextManager[_0x37231a(0x206)][_0x37231a(0x247)],_0x300986=TextManager['FurnitureSystem'][_0x37231a(0x1b8)],_0x3d3e64=this[_0x37231a(0x27f)](_0x160192)[_0x37231a(0x2f1)],_0x17ccc6=this[_0x37231a(0x27f)](_0x300986)[_0x37231a(0x2f1)],_0x5b6b9a=0x0;this['drawTextEx'](_0x160192,_0x9badbd-_0x3d3e64-_0x1b1870,_0x5b6b9a,_0x3d3e64),this[_0x37231a(0x21c)](_0x300986,_0x9badbd+_0x1b1870,_0x5b6b9a,_0x17ccc6);}{this[_0x37231a(0x154)](this[_0x37231a(0x194)]());const _0x54f721=TextManager[_0x37231a(0x206)][_0x37231a(0x223)],_0x387a43=TextManager[_0x37231a(0x206)][_0x37231a(0x301)],_0x3f8794=this[_0x37231a(0x27f)](_0x54f721)['width'],_0x34ec7d=this[_0x37231a(0x27f)](_0x387a43)[_0x37231a(0x2f1)],_0x1b604a=this['lineHeight']();this['drawTextEx'](_0x54f721,_0x9badbd-_0x3f8794-_0x1b1870,_0x1b604a,_0x3f8794),this[_0x37231a(0x21c)](_0x387a43,_0x9badbd+_0x1b1870,_0x1b604a,_0x34ec7d);}{this[_0x37231a(0x154)](!![]);const _0x2c670b=TextManager[_0x37231a(0x206)][_0x37231a(0x1b6)],_0x18a39e=TextManager[_0x37231a(0x206)][_0x37231a(0x1dd)],_0x464d7a=this['textSizeEx'](_0x2c670b)[_0x37231a(0x2f1)],_0x18b051=this[_0x37231a(0x27f)](_0x18a39e)[_0x37231a(0x2f1)],_0x22bfb9=0x0;this[_0x37231a(0x21c)](_0x2c670b,_0xa7f361-_0x464d7a-_0x1b1870,_0x22bfb9,_0x464d7a),this['drawTextEx'](_0x18a39e,_0xa7f361+_0x1b1870,_0x22bfb9,_0x18b051);}{this['changePaintOpacity'](this[_0x37231a(0x224)]());const _0x1feb75=TextManager['FurnitureSystem'][_0x37231a(0x2e5)],_0x2aa775=TextManager[_0x37231a(0x206)][_0x37231a(0x308)],_0x34e89d=this['textSizeEx'](_0x1feb75)['width'],_0x2ee8c2=this[_0x37231a(0x27f)](_0x2aa775)[_0x37231a(0x2f1)],_0x1df3aa=this[_0x37231a(0x19d)]();this[_0x37231a(0x21c)](_0x1feb75,_0xa7f361-_0x34e89d-_0x1b1870,_0x1df3aa,_0x34e89d),this['drawTextEx'](_0x2aa775,_0xa7f361+_0x1b1870,_0x1df3aa,_0x2ee8c2);}},Window_FurnitureHelp[_0x5de8fc(0x2d3)][_0x5de8fc(0x194)]=function(){const _0x5387d2=_0x5de8fc;return $gameMap['_furnitureSystemTemplates']&&$gameMap[_0x5387d2(0x2b1)]['length']>0x1;},Window_FurnitureHelp[_0x5de8fc(0x2d3)]['isCancelExitPrevented']=function(){const _0x372828=_0x5de8fc,_0x356256=$gameMap['furnitureSettings']();return!_0x356256[_0x372828(0x2f4)];},Window_FurnitureHelp['prototype'][_0x5de8fc(0x280)]=function(){const _0x581da1=_0x5de8fc;Window_Base[_0x581da1(0x2d3)]['update'][_0x581da1(0x1ef)](this),this[_0x581da1(0x179)](),this[_0x581da1(0x2a1)](),this[_0x581da1(0x1a7)]();},Window_FurnitureHelp['prototype'][_0x5de8fc(0x179)]=function(){const _0x2de1e1=_0x5de8fc;this[_0x2de1e1(0x17b)]=$gameMap[_0x2de1e1(0x307)]();},Window_FurnitureHelp['prototype']['updateOpacity']=function(){const _0x362afd=_0x5de8fc,_0x212469=SceneManager[_0x362afd(0x20c)][_0x362afd(0x297)][_0x362afd(0x30e)];if(!_0x212469)return;const _0x57b328=SceneManager[_0x362afd(0x20c)][_0x362afd(0x297)][_0x362afd(0x25e)],_0x3a35df=_0x57b328['x'],_0x4e58f9=_0x57b328['y'],_0x432008=new Point(_0x212469['x']-_0x3a35df,_0x212469['y']-_0x4e58f9),_0x5f3bce=_0x432008['x']-_0x212469[_0x362afd(0x2f1)]/0x2>=this[_0x362afd(0x1a8)]['x']&&_0x432008['x']+_0x212469[_0x362afd(0x2f1)]/0x2<=this[_0x362afd(0x1a8)]['x']+this[_0x362afd(0x1a8)][_0x362afd(0x2f1)]&&_0x432008['y']>=this['fullRect']['y']&&_0x432008['y']-_0x212469[_0x362afd(0x1ea)]<=this[_0x362afd(0x1a8)]['y']+this[_0x362afd(0x1a8)][_0x362afd(0x1ea)],_0x458b06=Window_FurnitureHelp['BG_TYPE'],_0x2f9eca=_0x5f3bce?Window_FurnitureHelp[_0x362afd(0x1c6)]:0xff;this[_0x362afd(0x19b)]=_0x2f9eca;if(_0x458b06===0x0)this['opacity']=_0x2f9eca;if(_0x458b06===0x1)this[_0x362afd(0x2aa)][_0x362afd(0x181)]=_0x2f9eca;},Window_FurnitureHelp['prototype']['updateKeyText']=function(){const _0x5a36c6=_0x5de8fc,_0x33fb5c=SceneManager[_0x5a36c6(0x20c)];for(let _0x246102=0x1;_0x246102<=0x5;_0x246102++){if(this[_0x5a36c6(0x2bf)][_0x5a36c6(0x17c)['format'](_0x246102)]!==_0x33fb5c[_0x5a36c6(0x1b4)[_0x5a36c6(0x25c)](_0x246102)]())return this[_0x5a36c6(0x1e7)]();if(this[_0x5a36c6(0x2bf)][_0x5a36c6(0x1e4)['format'](_0x246102)]!==_0x33fb5c[_0x5a36c6(0x222)[_0x5a36c6(0x25c)](_0x246102)]())return this[_0x5a36c6(0x1e7)]();}};function Window_FurnitureItem(){this['initialize'](...arguments);}Window_FurnitureItem[_0x5de8fc(0x2d3)]=Object[_0x5de8fc(0x30a)](Window_Base[_0x5de8fc(0x2d3)]),Window_FurnitureItem[_0x5de8fc(0x2d3)][_0x5de8fc(0x16a)]=Window_FurnitureItem,Window_FurnitureItem[_0x5de8fc(0x1c6)]=VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x2a2)][_0x5de8fc(0x2af)][_0x5de8fc(0x20a)],Window_FurnitureItem[_0x5de8fc(0x2d3)]['initialize']=function(_0xe809b9){const _0x4cd97a=_0x5de8fc;this['fullRect']=_0xe809b9,this[_0x4cd97a(0x240)]=0x0,Window_Base[_0x4cd97a(0x2d3)]['initialize'][_0x4cd97a(0x1ef)](this,_0xe809b9),this[_0x4cd97a(0x294)](0x2),this[_0x4cd97a(0x235)]();},Window_FurnitureItem[_0x5de8fc(0x2d3)][_0x5de8fc(0x1e7)]=function(){const _0x19b2b9=_0x5de8fc;this[_0x19b2b9(0x19c)][_0x19b2b9(0x22e)]();if(!this[_0x19b2b9(0x240)])return;this[_0x19b2b9(0x239)]=$dataItems[this[_0x19b2b9(0x240)]];return VisuMZ[_0x19b2b9(0x206)][_0x19b2b9(0x2a2)][_0x19b2b9(0x2af)][_0x19b2b9(0x30f)][_0x19b2b9(0x1ef)](this);const _0x5260c3=ColorManager[_0x19b2b9(0x313)](),_0x175aa9=ColorManager[_0x19b2b9(0x244)](),_0x294470=Math[_0x19b2b9(0x208)](this['innerWidth']/0x2),_0x5e7b4a=this['innerHeight'];this['contents']['fillRect'](0x0,0x0,_0x294470,_0x5e7b4a,_0x5260c3),this[_0x19b2b9(0x19c)][_0x19b2b9(0x23d)](0x0+_0x294470,0x0,_0x294470,_0x5e7b4a,_0x5260c3,_0x175aa9);if(Imported[_0x19b2b9(0x246)]){const _0x41c56c=this[_0x19b2b9(0x2a5)](),_0x5c6646=0x0,_0x4f9ef2=this[_0x19b2b9(0x16d)]-_0x41c56c*0x10;this['drawItemNumber'](this['_item'],_0x41c56c,_0x5c6646,_0x41c56c*0x8),this[_0x19b2b9(0x293)](this[_0x19b2b9(0x239)],_0x41c56c*0xa,_0x5c6646,_0x4f9ef2);}else{const _0x47f512=this[_0x19b2b9(0x2a5)](),_0x543a09=0x0,_0x49bcba=this[_0x19b2b9(0x16d)]-_0x47f512*0x2;this['drawItemName'](this[_0x19b2b9(0x239)],_0x47f512,_0x543a09,_0x49bcba),this['drawItemNumber'](this[_0x19b2b9(0x239)],_0x47f512,_0x543a09,_0x49bcba-_0x47f512*0x8);}},VisuMZ[_0x5de8fc(0x206)][_0x5de8fc(0x18b)]=Window_ItemList[_0x5de8fc(0x2d3)][_0x5de8fc(0x188)],Window_FurnitureItem[_0x5de8fc(0x2d3)]['drawItemNumber']=function(_0x30fd14,_0xfdc53,_0x2c0296,_0x21ed9c){const _0x3c4689=_0x5de8fc;try{Window_ItemList[_0x3c4689(0x2d3)][_0x3c4689(0x188)][_0x3c4689(0x1ef)](this,_0x30fd14,_0xfdc53,_0x2c0296,_0x21ed9c);}catch(_0x540236){VisuMZ['FurnitureSystem'][_0x3c4689(0x18b)][_0x3c4689(0x1ef)](this,_0x30fd14,_0xfdc53,_0x2c0296,_0x21ed9c);}},Window_FurnitureItem[_0x5de8fc(0x2d3)]['update']=function(){const _0xc7b728=_0x5de8fc;Window_Base[_0xc7b728(0x2d3)][_0xc7b728(0x280)][_0xc7b728(0x1ef)](this),this['updateItemType'](),this[_0xc7b728(0x179)](),this[_0xc7b728(0x2a1)]();},Window_FurnitureItem[_0x5de8fc(0x2d3)][_0x5de8fc(0x237)]=function(){const _0x3f580f=_0x5de8fc;if($gameMap[_0x3f580f(0x307)]()){const _0x5f036b=$gameMap[_0x3f580f(0x195)]();this[_0x3f580f(0x240)]!==_0x5f036b['OnPlaceConsumeItem']&&(this[_0x3f580f(0x240)]=_0x5f036b[_0x3f580f(0x1be)],this[_0x3f580f(0x1e7)]());}else this[_0x3f580f(0x240)]&&(this['_itemID']=0x0,this[_0x3f580f(0x1e7)]());},Window_FurnitureItem['prototype'][_0x5de8fc(0x1f1)]=function(){return!![];},Window_FurnitureItem['prototype'][_0x5de8fc(0x179)]=function(){const _0x210c5a=_0x5de8fc;this['visible']=$gameMap[_0x210c5a(0x307)]()&&this[_0x210c5a(0x240)];},Window_FurnitureItem[_0x5de8fc(0x2d3)][_0x5de8fc(0x2a1)]=function(){const _0x1d6e47=_0x5de8fc,_0x353f4f=SceneManager['_scene'][_0x1d6e47(0x297)]['_furnitureEventSprite'];if(!_0x353f4f)return;const _0x5cf05c=SceneManager['_scene'][_0x1d6e47(0x297)][_0x1d6e47(0x25e)],_0x4e7b55=_0x5cf05c['x'],_0x2fe209=_0x5cf05c['y'],_0x4e8e6b=new Point(_0x353f4f['x']-_0x4e7b55,_0x353f4f['y']-_0x2fe209),_0x317e5a=_0x4e8e6b['x']-_0x353f4f['width']/0x2>this[_0x1d6e47(0x1a8)]['x']&&_0x4e8e6b['x']+_0x353f4f[_0x1d6e47(0x2f1)]/0x2<=this['fullRect']['x']+this[_0x1d6e47(0x1a8)][_0x1d6e47(0x2f1)]&&_0x4e8e6b['y']>this[_0x1d6e47(0x1a8)]['y']&&_0x4e8e6b['y']-_0x353f4f[_0x1d6e47(0x1ea)]<=this[_0x1d6e47(0x1a8)]['y']+this['fullRect'][_0x1d6e47(0x1ea)],_0x18caf9=_0x317e5a?Window_FurnitureItem[_0x1d6e47(0x1c6)]:0xff;this[_0x1d6e47(0x19b)]=_0x18caf9;};