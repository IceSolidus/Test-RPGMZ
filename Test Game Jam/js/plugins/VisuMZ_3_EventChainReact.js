//=============================================================================
// VisuStella MZ - Event Chain Reactions
// VisuMZ_3_EventChainReact.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_EventChainReact = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventChainReact = VisuMZ.EventChainReact || {};
VisuMZ.EventChainReact.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [EventChainReact]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Event_Chain_Reactions_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Making events react to anything but the player requires so much work in RPG
 * Maker MZ. This plugin will change that by adding in many different ways to
 * cause event changes to take place. This includes streamlined forms of push
 * and pull, catalysts that cause reactions, pressure plates and heavy objects,
 * chargers and conductors, a form of timed decay, and objects that submerge
 * when moved into the water.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Plugin Command added to let you push events with more efficiency and less
 *   headache, allowing them to only move and play sound effects when possible.
 * * The ability to pull objects, an absolute headache to event, is now also
 *   added through the form of a Plugin Command for ease of use.
 * * Events can react to calaytic events that spread energy outward. When
 *   reacting, the target event(s) can turn on/off switches and self switches.
 * * Plugin Commands added to help you create catalysts at specific coordinates
 *   so you can fire off your own chain reactions.
 * * Objects can be assigned as a heavy weight and placed on top of pressure
 *   plate events to turn on switches when there's a heavy object on top or
 *   turn off switches when there isn't one.
 * * Events can produce charges and others can conduct them. When events have a
 *   conduction current running through them, they can become powered up and
 *   turn on switches. When they don't, those switches are turned off.
 * * Events can decay over time. When the decay timer runs out, switches can be
 *   turned on or off.
 * * Events can submerge into the water if pushed into it. When done, they can
 *   become bridges for the player or other events to walk over.
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
 * Event Mechanics - Pushing and Pulling
 * ============================================================================
 *
 * While push and pull mechanics can be achieved through common event systems,
 * sometimes, hiccups can occur that makes life a little bit more difficult,
 * such as determining if an event has successfully moved in order to decide if
 * a sound effect should be played or not.
 * 
 * This plugin streamlines the push and pull mechanics by incorporating them
 * into simplistic Plugin Commands for you to use as you wish.
 *
 * ---
 * 
 * ==== Push ====
 * 
 * Pushing an event requires the player to be located adjacent to the event
 * (meaning next to the event and not diagonally). The direction the player is
 * facing will determine the direction the event will go. If there is a viable
 * tile for the event to move, the event will be "pushed" in that direction.
 * Pushing can only travel in the down, left, right, up directions.
 * 
 * Through the push-related Plugin Commands, you can decide if you want the
 * player to move forward alongside the event. If you do, both the player's and
 * the event's speeds will become synchronized to whoever has the lower move
 * speed. Otherwise, if the player does not move with the event, then the speed
 * at which the event is pushed will be its own.
 * 
 * The player cannot push an event onto a ladder tile nor can the player push
 * while on a ladder tile.
 * 
 * Pushing an event can have a sound effect. This sound effect will only play
 * if the event is pushed successfully.
 * 
 * ---
 * 
 * ==== Pull ====
 * 
 * Pulling an event requires the player to be located adjacent to the event
 * (meaning next to the event and not diagonally). There must be an empty tile
 * behind the player for the player to back into. If there is a viable tile for
 * the player to move to, the player will move backwards into that tile while
 * "pulling" the event into the player's previous position. Pulling can only
 * travel in the down, left, right, up directions.
 * 
 * Unlike the push-related Plugin Commands, the pull-related Plugin Commands do
 * not have an option to determine if the player can or cannot move. The player
 * character will always move backwards while pulling the event backwards. Both
 * the player's and event's move speeds will be synchronized to whoever has the
 * lower move speed.
 * 
 * Pulling an event can have a sound effect. This sound effect will only play
 * if the event is pulled successfully.
 * 
 * ---
 * 
 * Pushing and pulling event objects do not inherently have chain reaction
 * effects. However, there's a lot of position-based chain reactions for events
 * meaning that being able to push or pull the events into position will cause
 * a potential chain reaction to occur.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Catalysts and Reactors
 * ============================================================================
 *
 * A new type of event interaction added through this plugin comes in the form
 * of catalysts and reactors. These are things like events that are sources of
 * fire that when put near flammable events will make those flammable events
 * burst aflame.
 *
 * ---
 * 
 * ==== Catalysts ====
 * 
 * A catalyst event is one that spreads a reactionary source like a "flame".
 * The flame's spread direction can be determined through notetags. If there
 * are any nearby events that would react to the catalyst, those events will
 * change switches and/or self switches as instructed, allowing a chain
 * reaction to occur.
 * 
 * For example, a torch is considered a "flame" source and therefore serves as
 * a catalyst for the "flame" reactor type. If placed near flammable objects
 * like dried plants, those dried plants can react to it by burning up.
 * 
 * A catalyst event will spread this reactionary source in timed intervals.
 * The reason why they're not immediate or instant is to prevent lag as well as
 * some catalysts work slower than others, even in real life scenarios. This is
 * to mimic the nature of how catalysts work in ways that are familiar to
 * players experience the chain reactions.
 * 
 * Catalysts don't have to come from events. They can be manually started with
 * Plugin Commands at specific coordinates.
 * 
 * ---
 * 
 * ==== Reactors ====
 * 
 * A reactor event is one that, upon exposure to a specific type of catalyst,
 * like a "flame", will react a certain way, by either turning ON or OFF a
 * switch, multiple switches, or self switches.
 * 
 * For example, dried plants will react to a "flame" type catalyst. When they
 * are near a "flame" source like a torch, the dried plant event will turn on
 * a self switch to change it into a burning flame sprite, indicating that it's
 * been set on fire.
 * 
 * Reactor events can also trigger from non-event catalysts through Plugin
 * Commands, assuming that the Plugin Command catalyst aims at the reactor
 * event with a matching catalyst type.
 * 
 * ---
 * 
 * ==== Types ====
 * 
 * An event chain reaction is based off a "type". The catalyst will have a type
 * that it spreads while the target event will have a type that it reacts to.
 * These catalyst types can be named to your needs as the game developer.
 * 
 * Catalyst events can generate multiple types and reactor events can react to
 * multiple types as well. Some events can spread one type as a catalyst while
 * reacting to another type. Mix and match them as needed.
 * 
 * ---
 * 
 * Knowing how to utilize catalysts and reactors will allow you to create a
 * very interactable environment in your game. Dried plants can be set aflame
 * and spread to other nearby dried plants. When on fire, they can be doused
 * with water creating puddles. The puddles can conduct electricity and more.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Pressure Plates and Heavy Objects
 * ============================================================================
 *
 * A common mechanic you see in RPG puzzles is the pressure plate. When a heavy
 * object is on top of it, something will turn on or open. When there is no
 * heavy object on top, something will turn off or close. The pressure plate
 * chain reaction works similarly here.
 *
 * ---
 * 
 * ==== Pressure Plates ====
 * 
 * Pressure plate events are events that will trigger a switch or self switch
 * to the ON position if there is a heavy object located on top of it. If there
 * isn't, then the linked switch or self switches will be set to OFF.
 * 
 * Once an event is declared a pressure plate, it will automatically change its
 * priority type to "Below characters", allowing the player and other events
 * to travel on top of it.
 * 
 * A common example of a pressure plate event used would be a button on the
 * floor linked to a normally closed gate. Both the pressure plate button and
 * the gate are linked to a switch. If that switch is ON, then the gate opens
 * allowing the player to pass through it. A common solution to this puzzle
 * would be that the player needs to find a heavy object to hold down the
 * pressure plate and pass through the gate.
 * 
 * ---
 * 
 * ==== Heavy Objects ====
 * 
 * Events marked as heavy objects are capable of activating pressure plates on
 * the map. They just simply have to share the same coordinates as the pressure
 * plates they're on top of to activate them.
 * 
 * When events are marked as heavy objects, their priority level becomes
 * "Same as characters" in order to be able to register the connection between
 * heavy objects and pressure plates.
 * 
 * The Plugin Parameters allow you to determine if the player and the player's
 * followers are considered heavy objects. This means that the player is
 * capable of activating pressure plates if he/she is considered heavy. However
 * this can ruin certain types of games so there is an option to turn that off.
 * 
 * The Plugin Parameters also allow you to set events with "Same as Characters"
 * priority level to automatically be heavy objects. This allows wandering
 * NPC's to set on pressure plates and activate them as well. Events that are
 * "Below characters" or "Above characters" will be exempt from this automatic
 * assignment by default.
 * 
 * ---
 * 
 * ==== Switches and Self Switches ====
 * 
 * Unlike catalysts and reactors, decay, and submerging, the switches and self
 * switches here will only turn ON and OFF under specific conditions. If a
 * heavy object is on top of the pressure plate, the assigned switch(es) will
 * turn ON. If there is no heavy object on top of the pressure plate, then the
 * assigned switch(es) will turn OFF.
 * 
 * ---
 * 
 * Heavy objects are the key to making pressure plates work. Therefore, it's
 * important to be able to move around the heavy objects, too. Pushing and
 * pulling can make this a reality. By assigning the ability to push or pull
 * the heavy objects, pressure plate utility becomes very accessible.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Chargers and Conductors
 * ============================================================================
 *
 * Conduction is a new event mechanic added through this plugin. Some events
 * can produce a type of current while another event conducts it. Conducting
 * events will have a switch, multiple switches, and/or self switches that turn
 * ON or OFF depending on the events' conduction state.
 *
 * ---
 * 
 * ==== Chargers ====
 * 
 * Charger events can emit a "current" of a specific type like "electricity".
 * This electricity is emitted in the specified direction as a current. Any
 * nearby events that conduct this type of current will have their linked
 * switch(es) turned ON or OFF.
 * 
 * An event charger is always emitting the current instantaneously. Therefore,
 * anything that conducts the matching current type will also be set to the
 * appropriate conduction state a frame or two later and remain that way.
 * 
 * Event chargers do not interact with reactors or catalysts inherently (though
 * you can make them do so with catalyst and/or reactor notetags).
 * 
 * ---
 * 
 * ==== Conductors ====
 * 
 * Conductor events can receive a current and change its conduction state. They
 * can take something like "electricity", conduct it, and pass it to other
 * conductor events. Conductors will only conduct the specified current "type"
 * marked by its notetag(s) and/or comment tag(s).
 * 
 * Once conducted, any linked switch(es) or self switch(es) to the conductor
 * event will turn ON. If there is no matching current running through it,
 * those linked switch(es) will turn OFF.
 * 
 * Event chargers do not interact with reactors or catalysts inherently (though
 * you can make them do so with catalyst and/or reactor notetags).
 * 
 * ---
 * 
 * ==== Direction ====
 * 
 * Both chargers and conductors have a direction in which the current travels.
 * By default, if no notetags or comment tags are used to control this, then
 * the current will emit to adjacent conductor events. Otherwise, you can
 * control the flow of a current to go left and right, up and down, etc.
 * 
 * The same notetag and comment tag is used for both chargers and conductors.
 * 
 * ---
 * 
 * ==== Types ====
 * 
 * Event chargers and conductors are based off a "type" of current. Conductors
 * can only receive and pass on matching current types from chargers and/or
 * other conductors. These current types can be named to your needs as the
 * game developer.
 * 
 * Charger events can generate multiple types of currents and the conductor
 * events can conduct to multiple types as well. Some events can charge on type
 * of current while conducting another. Mix and match them as needed.
 * 
 * ---
 * 
 * ==== Switches and Self Switches ====
 * 
 * Unlike catalysts and reactors, decay, and submerging, the switches and self
 * switches here will only turn ON and OFF under specific conditions. If a
 * conductor has a current running through it, the assigned switch(es) will
 * turn ON. If there is no current going through the conductor, then the
 * assigned switch(es) will turn OFF.
 * 
 * ---
 * 
 * Chargers and conductors allow you to create environmental interactions that
 * differ from catalysts and reactions. Where catalysts and reactions typically
 * have a one directional change, the chargers and conductors utilize the
 * current and conduction system to produce a toggleable change capable of
 * shifting back and forth.
 * 
 * This can be used for a system where the player can choose which door to 
 * temporarily open or close depending on where the current goes based off the
 * conductors on the map.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Decay
 * ============================================================================
 *
 * Not all events need to interact with one another to produce a reaction. An
 * event with decay mechanic will simply react to itself existing for a set
 * amount of time on the map.
 *
 * ---
 * 
 * ==== Decay Timing ====
 * 
 * A decaying event can be set to decay in a preset amount of frames or a
 * custom amount of frames (your choice as the developer). Once the decay timer
 * is set, it automatically starts counting down. Once it reaches 0, then any
 * linked switch(es) or self switch(es) will turn ON or OFF.
 * 
 * The event does not necessarily have to remove itself once the decay timer
 * has reached 0. It can if it wants to, but all the same, the event can remain
 * in its current state if it doesn't.
 * 
 * If the event page changes while a decay countdown is happening, the
 * countdown timer will reset to whatever is the newest countdown timer on the
 * event page's comments. If an event notetag is used to encompass the global
 * countdown timer, then it will reset to that timer each time the page changes
 * forward.
 * 
 * ---
 * 
 * This can be used for a number of things, ranging from bombs to ever so
 * slightly transforming events. It removes the need to utilize a parallel
 * process event to make a change.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Submerge
 * ============================================================================
 *
 * Events can now interact with water tiles by submerging into them. If an
 * event is submerged, any linked switch(es) and/or self switch(es) will turn
 * ON or OFF. These can be used to form temporary bridges and the like.
 *
 * ---
 * 
 * ==== Submersive ====
 * 
 * When an object is submersive, it can be moved into a water tile. Immediate
 * contact with the water tile will cause it to submerge and linked switch(es)
 * and/or self switch(es) will be turned ON or OFF depending on the notetags
 * and/or comment tags used.
 * 
 * Once an event is moved into the water and submerges, it can no longer be
 * pushed or pulled.
 * 
 * ---
 * 
 * ==== Bridge ====
 * 
 * A common usage for submersive events is to change them into a temporary
 * bridge that lets the player and other events to travel over what was
 * otherwise intraversable waters. Though this normally could be done with
 * events that use graphics from the tileset with passabilities, becoming a
 * bridge was not available to events that used graphics from other sources.
 * 
 * The notetag/comment tag allows the event to become a bridge and allowing it
 * to become passable no matter from which direction. This ignores the tileset
 * graphic source requirement and binds it to a tag instead.
 * 
 * ---
 * 
 * This feature is best used with the push/pull mechanics. Submersive objects
 * forming temporary land bridges allows for a more interactable environment.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_0_CoreEngine
 * 
 * Due to the nature of this plugin, the VisuStella MZ Core Engine's plugin
 * parameter "Smart Event Collision" will be automatically turned on in order
 * for the features provided by this plugin to properly work.
 * 
 * ---
 *
 * ============================================================================
 * Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!
 * ============================================================================
 *
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * Naturally, this causes problems with the Event Chain Reactions plugin as the
 * water tiles are important for submerging reactions.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 *
 * ---
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
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
 * === Positioning-Related Notetags ===
 * 
 * ---
 *
 * <Push>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be pushed when using the Plugin Command:
 *   "Positioning: Push Player Front".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Pull>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Allows this event to be pushed when using the Plugin Command:
 *   "Positioning: Pull Player Front".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Push Pull>
 * <Pull Push>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be pushed when using the Plugin Commands:
 *   "Positioning: Push Player Front" and "Positioning: Pull Player Front".
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Catalyst and Reactor-Related Notetags ===
 * 
 * ---
 *
 * <type speed Catalyst: range>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes this event into a 'type' catalyst source that spreads at 'speed'
 *   intervals onto events within 'range'.
 * - Replace 'type' with a string representing the reaction type to be spread
 *   to other event reactors of the same 'type'.
 *   - This is NOT case sensitive.
 * - Replace 'speed' with any of the following text to represent the repeating
 *   interval at which the catalyst event spreads:
 *   - 'tick', 'fast', 'quick', 'short', 'average', 'slow', 'long', 'late'
 *   - Do NOT include the quotes.
 *   - Faster speeds can potentially cause lag, so use slower speeds to ensure
 *     FPS stability.
 * - Replace 'range' with any of the following to determine the range:
 *   - 'exact' - Coordinates must equal the catalyst event's X, Y position.
 *   - 'front' - Coordinates equal the tile in front of the catalyst.
 *   - 'back' - Coordinates equal the tile behind the catalyst.
 *   - 'cw' - Coordinates equal the tile clockwise from catalyst.
 *   - 'ccw' - Coordinates equal the tile counterclockwise from catalyst.
 *   - 'adjacent' - Any of the 4 tiles surrounding the catalyst.
 *   - 'near' - Any of the 8 tiles surrounding the catalyst.
 *   - 'down' - Coordinates equal the tile below the catalyst on the map.
 *   - 'left' - Coordinates equal the tile left of the catalyst on the map.
 *   - 'right' - Coordinates equal the tile right of the catalyst on the map.
 *   - 'up' - Coordinates equal the tile above the catalyst on the map.
 *   - 'lower left' - Coordinates equal the tile to catalyst's lower left.
 *   - 'lower right' - Coordinates equal the tile to catalyst's lower right.
 *   - 'upper left' - Coordinates equal the tile to catalyst's upper left.
 *   - 'upper right' - Coordinates equal the tile to catalyst's upper right.
 *   - Do NOT include the quotes.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <type x Frames Catalyst: range>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes this event into a 'type' catalyst source that spreads at 'x' frame
 *   intervals onto events within 'range'.
 * - Replace 'type' with a string representing the reaction type to be spread
 *   to other event reactors of the same 'type'.
 *   - This is NOT case sensitive.
 * - Replace 'x' with a number representing the number of frames that determine
 *   the ongoing intervals the catalysts cycle through.
 *   - Faster speeds can potentially cause lag, so use slower speeds to ensure
 *     FPS stability.
 * - Replace 'range' with any of the following to determine the range:
 *   - 'exact' - Coordinates must equal the catalyst event's X, Y position.
 *   - 'front' - Coordinates equal the tile in front of the catalyst.
 *   - 'back' - Coordinates equal the tile behind the catalyst.
 *   - 'cw' - Coordinates equal the tile clockwise from catalyst.
 *   - 'ccw' - Coordinates equal the tile counterclockwise from catalyst.
 *   - 'adjacent' - Any of the 4 tiles surrounding the catalyst.
 *   - 'near' - Any of the 8 tiles surrounding the catalyst.
 *   - 'down' - Coordinates equal the tile below the catalyst on the map.
 *   - 'left' - Coordinates equal the tile left of the catalyst on the map.
 *   - 'right' - Coordinates equal the tile right of the catalyst on the map.
 *   - 'up' - Coordinates equal the tile above the catalyst on the map.
 *   - 'lower left' - Coordinates equal the tile to catalyst's lower left.
 *   - 'lower right' - Coordinates equal the tile to catalyst's lower right.
 *   - 'upper left' - Coordinates equal the tile to catalyst's upper left.
 *   - 'upper right' - Coordinates equal the tile to catalyst's upper right.
 *   - Do NOT include the quotes.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <type Reactor Switch On: x>
 * <type Reactor Switches On: x, x, x>
 * 
 * <type Reactor Switch Off: x>
 * <type Reactor Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes this event into a 'type' reactor that upon a catalyst creating a
 *   reaction will turn any linked switch(es) or self switch(es) ON or OFF.
 *   - The ON variant will turn the linked switch ON when a reaction occurs.
 *   - The OFF variant will turn the linked switch OFF when a reaction occurs.
 * - Replace 'type' with a string representing the reaction type to be react
 *   to from catalysts of the same 'type'.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon a successful reaction.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Pressure Plate and Heavy Object-Related Notetags ===
 * 
 * ---
 *
 * <Pressure Plate Switch: x>
 * <Pressure Plate Switches: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Turns this event into a pressure plate that upon having a heavy object on
 *   it will trigger any linked switch(es) and self switch(es) to turn ON and
 *   upon stepping off will also turn them OFF.
 * - Using this notetag will set the event's priority to "Below characters".
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon a successful activation.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Heavy>
 * <Heavy Object>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a heavy object that can stand on top of and activate
 *   pressure plate events.
 * - Using this notetag will set the event's priority to "Same as characters".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Not Heavy>
 * <Not Heavy Object>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as an object not heavy enough to activate pressure
 *   plates events.
 * - This is used to offset the Plugin Parameter that sets "Same as characters"
 *   events as heavy objects.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <All Pressure Plates Switch: x>
 * <All Pressure Plates Switches: x, x, x>
 *
 * - Used for: Map Notetags
 * - If all native pressure plate events on the map has been stepped on, turn
 *   ON the switch(es). Otherwise, set the switch(es) to OFF.
 * - Erased and spawned pressure plate events do not count.
 * - Replace 'x' with a number to represent a numeric global switch.
 *   - If a numeric switch value happens to be a map switch or map self due to
 *     VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *
 * ---
 * 
 * === Charger and Conductor-Related Notetags ===
 * 
 * ---
 *
 * <type Charger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a charger event that produces a 'type' current that
 *   can be received by same 'type' conductors.
 * - Replace 'type' with a string representing the current type released from
 *   this charger event to other conductor events of the same 'type'.
 *   - This is NOT case sensitive.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <type Conductor Switch: x>
 * <type Conductor Switches: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a conductor event that receives a 'type' current and
 *   will turn on any linked switch(es) or self switch(es) based on its current
 *   conduction state.
 * - Conductor events will also transfer its current to other conductors of the
 *   same 'type'.
 * - Replace 'type' with a string representing the current type released from
 *   this charger event to other conductor events of the same 'type'.
 *   - This is NOT case sensitive.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to apply multiple switches or self switches
 *     based on the conduction state.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Current Direction: range>
 * <Charge Direction: range>
 * <Conduct Direction: range>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used for charger events and conductor events to determine which direction
 *   the current will travel.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Replace 'range' with any of the following to determine the range:
 *   - 'exact' - Coordinates must equal the catalyst event's X, Y position.
 *   - 'front' - Coordinates equal the tile in front of the catalyst.
 *   - 'back' - Coordinates equal the tile behind the catalyst.
 *   - 'cw' - Coordinates equal the tile clockwise from catalyst.
 *   - 'ccw' - Coordinates equal the tile counterclockwise from catalyst.
 *   - 'adjacent' - Any of the 4 tiles surrounding the catalyst.
 *   - 'near' - Any of the 8 tiles surrounding the catalyst.
 *   - 'down' - Coordinates equal the tile below the catalyst on the map.
 *   - 'left' - Coordinates equal the tile left of the catalyst on the map.
 *   - 'right' - Coordinates equal the tile right of the catalyst on the map.
 *   - 'up' - Coordinates equal the tile above the catalyst on the map.
 *   - 'lower left' - Coordinates equal the tile to catalyst's lower left.
 *   - 'lower right' - Coordinates equal the tile to catalyst's lower right.
 *   - 'upper left' - Coordinates equal the tile to catalyst's upper left.
 *   - 'upper right' - Coordinates equal the tile to catalyst's upper right.
 *   - Do NOT include the quotes.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Decay-Related Notetags ===
 * 
 * ---
 *
 * <speed Decay Switch On: x>
 * <speed Decay Switches On: x, x, x>
 *
 * <speed Decay Switch Off: x>
 * <speed Decay Switches On: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as one that upon availability, will start decaying and
 *   start a countdown timer, where upon reaching 0, any linked switch(es) and
 *   self switch(es) will have their values changed.
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - Replace 'speed' with any of the following text to represent the duration
 *   time of the decay countdown:
 *   - 'tick', 'fast', 'quick', 'short', 'average', 'slow', 'long', 'late'
 *   - Do NOT include the quotes.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon the decay countdown reaching 0.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <x Frames Decay Switch On: id>
 * <x Frames Decay Switches On: id, id, id>
 * 
 * <x Frames Decay Switch Off: id>
 * <x Frames Decay Switches Off: id, id, id>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as one that upon availability, will start decaying and
 *   after x frames, any linked switch(es) and self switch(es) will have their
 *   values changed.
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - Replace 'x' with a number representing the number of frames that determine
 *   the total frames before the decay occurs.
 *   - Faster speeds can potentially cause lag, so use slower speeds to ensure
 *     FPS stability.
 * - Replace 'id' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'id' values to change multiple switches or self switches
 *     upon the decay countdown reaching 0.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * === Submerge-Related Notetags ===
 * 
 * ---
 *
 * <Submerge Switch On: x>
 * <Submerge Switches On: x, x, x>
 * 
 * <Submerge Switch Off: x>
 * <Submerge Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a submersive event, which upon being on top of a water
 *   tile, will instantly alter any linked switch(es) and self switch(es).
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - This notetag variant will treat both shallow water and deep water tiles
 *   the same as one another.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon being submerged into water.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Shallow Submerge Switch On: x>
 * <Shallow Submerge Switches On: x, x, x>
 * 
 * <Shallow Submerge Switch Off: x>
 * <Shallow Submerge Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a submersive event, which upon being on top of a water
 *   tile, will instantly alter any linked switch(es) and self switch(es).
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - This notetag variant will only trigger on shallow water tiles and not
 *   deep water tiles.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon being submerged into shallow water.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Deep Submerge Switch On: x>
 * <Deep Submerge Switches On: x, x, x>
 * 
 * <Deep Submerge Switch Off: x>
 * <Deep Submerge Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a submersive event, which upon being on top of a water
 *   tile, will instantly alter any linked switch(es) and self switch(es).
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - This notetag variant will only trigger on deep water tiles and not
 *   shallow water tiles.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon being submerged into deep water.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Submerged Effect>
 * 
 * <Submerged Effect: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a visual effect to the event, making it bob up and down like at the
 *   surface of the water.
 * - Use the <Submerged Effect: x> variant to visually submerge the event
 *   further, making it appear heavier and deeper in the water.
 * - Replace 'x' with a number representing how many pixels deep to submerge
 *   the event visually.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Bridge>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks the event as a bridge, allowing the player and other events to walk
 *   on top of it, even if it is over water.
 * - Using this notetag will set the event's priority to "Below characters".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Useful-Related Notetags ===
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * - This notetag is a part of VisuMZ_1_EventsMoveCore but is recommended to be
 *   listed here with this plugin.
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
 * === Catalyst Plugin Commands ===
 * 
 * ---
 *
 * Catalyst: Create Catalyst at Event Location
 * - Creates a catalyst for a spreadable event chain reaction at a target
 *   event's relative coordinates.
 *
 *   Event ID:
 *   - The ID of the event to start catalyst from.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Reaction Type:
 *   - What is the reaction type's string?
 *   - Case does not matter.
 *
 *   Relative Location:
 *   - What is the location of the reaction relative to the event?
 *
 * ---
 *
 * Catalyst: Create Catalyst at Player Location
 * - Creates a catalyst for a spreadable event chain reaction at the player's
 *   relative coordinates.
 *
 *   Reaction Type:
 *   - What is the reaction type's string?
 *   - Case does not matter.
 *
 *   Relative Location:
 *   - What is the location of the reaction relative to the player?
 *
 * ---
 *
 * Catalyst: Create Catalyst at X, Y
 * - Creates a catalyst for a spreadable event chain reaction at
 *   X, Y coordinates.
 *
 *   Reaction Type:
 *   - What is the reaction type's string?
 *   - Case does not matter.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to create catalyst at.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Positioning Plugin Commands ===
 * 
 * ---
 *
 * Positioning: Pull Player Front
 * - If an event in front the player can be pulled, do so.
 * - Event requires <Pull> or <Pull Push> notetag.
 * 
 *   Check Touch Triggers?:
 *   - Check triggers after moving and pulling?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pulled.
 *
 * ---
 *
 * Positioning: Pull This Event
 * - Pulls this event backward by one tile if possible.
 * - Requires the player to align up adjacently.
 * 
 *   Check Touch Triggers?:
 *   - Check triggers after moving and pulling?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pulled.
 *
 * ---
 *
 * Positioning: Push Player Front
 * - If an event in front the player can be pushed, do so.
 * - Event requires <Push> or <Push Pull> notetag.
 *
 *   Move Player Forward?:
 *   - Move player forward while pushing the event?
 * 
 *     Check Touch Triggers?:
 *     - Check triggers after moving and pushing?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pushed.
 *
 * ---
 *
 * Positioning: Push This Event
 * - Pushes this event forward by one tile if possible.
 * - Requires the player to align up adjacently.
 *
 *   Move Player Forward?:
 *   - Move player forward while pushing the event?
 * 
 *     Check Touch Triggers?:
 *     - Check triggers after moving and pushing?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pushed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Pressure Plate Settings
 * ============================================================================
 *
 * Pressure Plate-related settings used by this plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Heavy Player?:
 *   - Make the player character a "heavy object" capable of activating
 *     pressure plates?
 * 
 *   Heavy Followers?:
 *   - Make the player followers "heavy objects" capable of activating
 *     pressure plates?
 * 
 *   Heavy "Same" Events?:
 *   - Make events with "Same as Characters" priority capable of
 *     activating pressure plates?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Speed Settings
 * ============================================================================
 *
 * Speed-related settings for specific notetags used by this plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Tick:
 *   Fast:
 *   Quick:
 *   Short:
 *   Average:
 *   Slow:
 *   Long:
 *   Late:
 *   - How many frames to pass when using this speed for an Event Chain
 *     Reaction notetag?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Submerge Settings
 * ============================================================================
 *
 * Settings related to the submerge function for this plugin.
 *
 * ---
 *
 * Sound Effect
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
 * Visual
 * 
 *   Submerge Speed:
 *   - What speed should objects submerge at?
 *   - Lower numbers are faster.
 *   - Higher numbers are slower.
 * 
 *   Oscillation Distance:
 *   - What is the maximum oscillation distance?
 *   - Lower numbers are closer.
 *   - Higher numbers are further.
 * 
 *   Submerge Rate:
 *   - What rate should objects oscillate at?
 *   - Lower numbers are slower.
 *   - Higher numbers are faster.
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
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where if player would still be considered a heavy object
 *    after pushing a heavy object off a pressure plate if Plugin Parameters
 *    have set the player as non-Heavy. Fix made by Arisu.
 * 
 * Version 1.04: October 12, 2023
 * * Documentation Update!
 * ** It appears we've left out some notetags/comment tags that could be used:
 * *** <x Frames Decay Switch On: id>
 * *** <x Frames Decay Switches On: id, id, id>
 * *** <x Frames Decay Switch Off: id>
 * *** <x Frames Decay Switches Off: id, id, id>
 * ** These should now appear in the help file.
 * 
 * Version 1.03: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon using the "Return to Title
 *    Screen" event command with the "Event Title Screen" plugin installed. Fix
 *    made by Irina.
 * 
 * Version 1.02: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause certain notetags to not work properly when
 *    they have another notetag in front of them. Fix made by Arisu.
 * 
 * Version 1.01: December 15, 2022
 * * Documentation Update!
 * ** Added new section: "Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!"
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** Naturally, this causes problems with the Event Chain Reactions plugin as
 *     the water tiles are important for submerging reactions.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * 
 * Version 1.00 Official Release Date: January 4, 2023
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
 * @command CatalystCreateAtEvent
 * @text Catalyst: Create Catalyst at Event Location
 * @desc Creates a catalyst for a spreadable event chain reaction
 * at a target event's relative coordinates.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc The ID of the event to start catalyst from.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg Type:str
 * @text Reaction Type
 * @desc What is the reaction type's string?
 * Case does not matter.
 * @default >>>ATTENTION<<<
 *
 * @arg Location:str
 * @text Relative Location
 * @type select
 * @option -
 * @option exact
 * @option -
 * @option front
 * @option back
 * @option cw
 * @option ccw
 * @option -
 * @option adjacent
 * @option nearby
 * @option -
 * @option down
 * @option left
 * @option right
 * @option up
 * @option -
 * @option lower left
 * @option lower right
 * @option upper left
 * @option upper right
 * @option -
 * @desc What is the location of the reaction relative to the event?
 * @default exact
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CatalystCreateAtPlayer
 * @text Catalyst: Create Catalyst at Player Location
 * @desc Creates a catalyst for a spreadable event chain reaction
 * at the player's relative coordinates.
 *
 * @arg Type:str
 * @text Reaction Type
 * @desc What is the reaction type's string?
 * Case does not matter.
 * @default >>>ATTENTION<<<
 *
 * @arg Location:str
 * @text Relative Location
 * @type select
 * @option -
 * @option exact
 * @option -
 * @option front
 * @option back
 * @option cw
 * @option ccw
 * @option -
 * @option adjacent
 * @option nearby
 * @option -
 * @option down
 * @option left
 * @option right
 * @option up
 * @option -
 * @option lower left
 * @option lower right
 * @option upper left
 * @option upper right
 * @option -
 * @desc What is the location of the reaction relative to the player?
 * @default front
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CatalystCreateAtXy
 * @text Catalyst: Create Catalyst at X, Y
 * @desc Creates a catalyst for a spreadable event chain reaction
 * at X, Y coordinates.
 *
 * @arg Type:str
 * @text Reaction Type
 * @desc What is the reaction type's string?
 * Case does not matter.
 * @default >>>ATTENTION<<<
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option 0
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @desc Target X coordinate to create catalyst at.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option 0
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @desc Target Y coordinate to create catalyst at.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Positioning
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPullPlayerFront
 * @text Positioning: Pull Player Front
 * @desc If an event in front the player can be pulled, do so.
 * Event requires <Pull> or <Pull Push> notetag.
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pulling?
 * @default true
 * 
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pulled.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPullThisEvent
 * @text Positioning: Pull This Event
 * @desc Pulls this event backward by one tile if possible.
 * Requires the player to align up adjacently.
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pulling?
 * @default true
 * 
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pulled.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPushPlayerFront
 * @text Positioning: Push Player Front
 * @desc If an event in front the player can be pushed, do so.
 * Event requires <Push> or <Push Pull> notetag.
 * 
 * @arg MoveForward:eval
 * @text Move Player Forward?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Move player forward while pushing the event?
 * @default true
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @parent MoveForward:eval
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pushing?
 * @default true
 *
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pushed.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPushThisEvent
 * @text Positioning: Push This Event
 * @desc Pushes this event forward by one tile if possible.
 * Requires the player to align up adjacently.
 * 
 * @arg MoveForward:eval
 * @text Move Player Forward?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Move player forward while pushing the event?
 * @default true
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @parent MoveForward:eval
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pushing?
 * @default true
 *
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pushed.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
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
 * @param EventChainReact
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param PressurePlate:struct
 * @text Pressure Plate Settings
 * @type struct<PressurePlate>
 * @desc Pressure Plate-related settings used by this plugin.
 * @default {"HeavyPlayerCharacter:eval":"true","HeavyFollowers:eval":"true","HeavySameEvents:eval":"true"}
 *
 * @param Speed:struct
 * @text Speed Settings
 * @type struct<Speed>
 * @desc Speed-related settings for specific notetags used by this plugin.
 * @default {"tick:num":"1","fast:num":"8","quick:num":"15","short:num":"20","avg:num":"30","slow:num":"40","long:num":"60","late:num":"120"}
 *
 * @param Submerge:struct
 * @text Submerge Settings
 * @type struct<Submerge>
 * @desc Settings related to the submerge function for this plugin.
 * @default {"Sound":"","soundName:str":"Water1","soundVolume:num":"50","soundPitch:num":"60","soundPan:num":"0","Visual":"","updateFrequency:num":"4","oscillationDistance:num":"8","oscillationSpeed:num":"0.05"}
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
 * PressurePlate Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PressurePlate:
 *
 * @param HeavyPlayerCharacter:eval
 * @text Heavy Player?
 * @type boolean
 * @on Heavy
 * @off Not Heavy
 * @desc Make the player character a "heavy object"
 * capable of activating pressure plates?
 * @default true
 * 
 * @param HeavyFollowers:eval
 * @text Heavy Followers?
 * @type boolean
 * @on Heavy
 * @off Not Heavy
 * @desc Make the player followers "heavy objects"
 * capable of activating pressure plates?
 * @default true
 * 
 * @param HeavySameEvents:eval
 * @text Heavy "Same" Events?
 * @type boolean
 * @on Heavy
 * @off Not Heavy
 * @desc Make events with "Same as Characters" priority
 * capable of activating pressure plates?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Speed Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Speed:
 *
 * @param tick:num
 * @text Tick
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 1
 *
 * @param fast:num
 * @text Fast
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 8
 *
 * @param quick:num
 * @text Quick
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 15
 *
 * @param short:num
 * @text Short
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 20
 *
 * @param avg:num
 * @text Average
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 30
 *
 * @param slow:num
 * @text Slow
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 40
 *
 * @param long:num
 * @text Long
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 60
 *
 * @param late:num
 * @text Late
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 120
 *
 */
/* ----------------------------------------------------------------------------
 * Submerge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Submerge:
 *
 * @param Sound
 * @text Sound Effect
 *
 * @param soundName:str
 * @text Filename
 * @parent Sound
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Water1
 *
 * @param soundVolume:num
 * @text Volume
 * @parent Sound
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param soundPitch:num
 * @text Pitch
 * @parent Sound
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 60
 *
 * @param soundPan:num
 * @text Pan
 * @parent Sound
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Visual
 * 
 * @param updateFrequency:num
 * @text Submerge Speed
 * @parent Visual
 * @type number
 * @min 1
 * @desc What speed should objects submerge at?
 * Lower numbers are faster. Higher numbers are slower.
 * @default 4
 * 
 * @param oscillationDistance:num
 * @text Oscillation Distance
 * @parent Visual
 * @type number
 * @min 1
 * @desc What is the maximum oscillation distance?
 * Lower numbers are closer. Higher numbers are further.
 * @default 8
 * 
 * @param oscillationSpeed:num
 * @text Submerge Rate
 * @parent Visual
 * @desc What rate should objects oscillate at?
 * Lower numbers are slower. Higher numbers are faster.
 * @default 0.05
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Earth3
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x4bad61=_0xa894;function _0x4396(){const _0x4f54e0=['DecaySpeedOn','setupEventChainReactEffects','pan','erase','name','ROUTE_MOVE_DOWN','_submergeShallowOn','updateRoutineMove','PositioningPullThisEvent','updateSubmergedOffset','Game_Event_erase','push','PositioningPushThisEvent','_submergeEffect','isWaterTile','cos','split','isLowest','_scene','setValue','synchConductionStates','isMoving','_requestRefreshPressurePlate','21nrrYHr','playSe','front','CatalystCreateAtEvent','_requestRefreshConduction','_conductDir','isShipPassable','CanPull','registerCommand','isInAirship','isBusy','setupEventChainReactCommentTags','page','pitch','EventID','_through','RelativeCoordinates','PositioningPushPlayerFront','isConductor','eventId','isJumping','jumpHeight','initEventChainReactType','isVisible','realMoveSpeed','refreshEventChainReact','Game_Map_setup','isRegionAllowPass','inWaterTile','Game_Map_refreshIfNeeded','requestRefreshPressurePlate','moveStraight','isBridge','isFurnitureSystemMode','list','chasePull','submergedEventsXy','events','parse','refreshPressurePlate','_submergeEffectOffset','gatherFollowers','%1,%2','avg','refreshConduction','_submergeShallowOff','anyHeavyObjOnThisTile','description','isLadder','Sprite_Character_initialize','getPressurePlateSwitches','_mapId','_submergeDeepOn','moveSpeed','cwX','_addedHitbox','ARRAYNUM','_submergeOffsetY','map','canResurface','pos','updateFrequency','initSubmerged','initialize','canBePulled','isHeavyObject','oscillationDistance','and\x20add\x20it\x20onto\x20this\x20one.','setWaitMode','getChargeTypes','_submergeCache','note','clearPageSettings','requestRefreshConduction','clearConductionState','ROUTE_THROUGH_ON','ROUTE_CHANGE_SPEED','158376VaMdlp','_erased','frontX','RegExp','clearSubmergeData','down','isShallowSubmersible','_displayedPassageError','isDeepSubmersible','deltaXFrom','Map\x20%1\x20Switch\x20%2','SpreadReactFrame','status','_chainReactions','212ROhbWD','reactSwitchOff','setFrame','_pageIndex','STR','ROUTE_MOVE_LEFT','replace','slow','_resurfaceOff','_decayOffDuration','_spriteset','round','canPass','_canPush','getConductionTypes','fast','ResurfaceOff','refresh','Sprite_Character_updatePosition','exact','late','NotHeavyObj','tick','ARRAYSTR','soundVolume','_conductTypes','219370sBGGmk','randomInt','frameCount','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Conductor','_bridge','eventsXy','isMoveOnlyRegionPassable','ARRAYSTRUCT','spreadChargeAtLocation','route','counterclockwise','playSubmerge','VisuMZ_0_CoreEngine','isSelfSwitch','_bridgeEventsXy','_conductionState','ROUTE_DIR_FIX_ON','setup','_heavyObject','lower\x20right','updateSubmerge','shiftY','setupEventChainReactNotetags','soundName','Settings','volume','log','refreshIfNeeded','pullTargetEvent','PosY','trim','keys','return\x200','Game_Character_updateRoutineMove','long','adjacent','updateDecay','requestRefreshCondution','27989OZjeqF','soundPitch','isMapSwitch','spreadChargeAtCoordinate','spreadCharges','AddEntries','8733439MCZFHb','CatalystCreateAtPlayer','tilesetFlags','Game_Map_refresh','updateFrame','mapId','gatherFollowersAndWait','33665IDtWcY','updateSubmergeFrame','cwY','_submergeDeepOff','HeavySameEvents','_heavyObjCache','Game_Follower_chaseCharacter','_decaySwitchOff','this._gatherWait\x20=\x20true','ROUTE_PLAY_SE','PositioningPullPlayerFront','Submerge','updateEventChainReact','PressurePlate','EventsMoveCore','needsUpdateDecay','areFollowersGathering','this.pullFollowers(false)','setupPressurePlateNotetags','left','checkPassage','Bridge','_chargeTypes','soundPan','characterName','isSceneMap','upper\x20left','_canPull','ROUTE_MOVE_RIGHT','_character','version','_decayOnDuration','HeavyFollowers','_submergeDistance','canBePushed','update','isSubmergePassable','_gatherWait','length','getConductionState','_priorityType','this._gatherWait\x20=\x20false','CheckTriggers','bridgeEventsXy','Game_Map_checkPassage','ConvertParams','Speed','72bUpDnh','processPressurePlateChanges','forceMoveRoute','roundXWithDirection','_resurfaceOn','>\x0a<','getLastPluginCommandInterpreter','event','clearEventChainReactionCache','test','right','prototype','Type','in\x20order\x20for\x20VisuMZ_3_EventChainReact\x20to\x20work.','updateEventChainReactSpread','includes','_pullingFollowers','CanPush','canUpdateSubmergeFrame','chasePullXy','ROUTE_MOVE_UP','_characterId','_allPressurePlateSwitches','_pressurePlateSwitches','floor','DecaySpeedOff','followers','call','roundYWithDirection','ROUTE_THROUGH_OFF','STRUCT','ShallowSubmergeOff','spreadChargeType','setupPageSettings','ROUTE_DIR_FIX_OFF','layeredTiles','Game_CharacterBase_update','some','canSubmergeDeep','SUBMERGE','createChainReactionCatalystAtXy','checkPassageNoEvents','DeepSubmergeOn','format','lastX','short','_submergeHeight','canConductType','reactToType','submergedEffectOffset','min','_followers','direction','upper\x20right','distance','toLowerCase','exit','18vZUSMC','getConductDirections','canSubmergeShallow','pullFollowers','lastY','clockwise','MoveForward','initEventChainReactEffects','Charger','_chainSpreads','1607874xfqsWA','ccwX','PosX','VisuMZ_1_EventsMoveCore','EVAL','frontY','setConductionState','turnOffAllConductions','parameters','Sound','quick','isMapPassable','checkEventChainReactStringTags','Game_Event_clearPageSettings','HeavyObj','pushTargetEvent','_submergedEventsXy','EVENT_CHAIN_REACT_SPEED','ResurfaceOn','_conductCache','isBoatPassable','eventChainReactSwitchChange','match','max','findTargetSprite','hasCharge','VisuMZ_2_FurnitureSystem','canSpreadEventChainReact','EventChainReact','near','ROUTE_END','moveDiagonally','needsUpdateSubmerge','ccw','Location','CatalystCreateAtXy','FUNC','spreadChainReactionFromTarget','isSubmerged','submergedEffect','Game_Event_isMapPassable','Sprite_Character_updateFrame','nearby','isSmartEventCollisionOn','_decaySwitchOn','filter','reactSwitchOn','applyPressurePlateSwitchChange','_submergeRng','setMoveSpeed','_data','isOnLadder','backX','SubmergedEffectOffset','ROUTE_SCRIPT','ccwY','Game_Event_setupPageSettings','isPressurePlate','toUpperCase','chaseCharacter','oscillationSpeed','AllWeightSwitch','back','this.checkEventTriggerHere([1,\x202])','HeavyPlayerCharacter','updatePosition','823647CptRPb','needsUpdatePressurePlate','height'];_0x4396=function(){return _0x4f54e0;};return _0x4396();}(function(_0x20283d,_0x36085f){const _0x556a4c=_0xa894,_0xe0a5d0=_0x20283d();while(!![]){try{const _0x2da053=parseInt(_0x556a4c(0x13e))/0x1*(-parseInt(_0x556a4c(0x1b3))/0x2)+-parseInt(_0x556a4c(0x1ff))/0x3+parseInt(_0x556a4c(0x274))/0x4*(parseInt(_0x556a4c(0x14b))/0x5)+-parseInt(_0x556a4c(0x1bd))/0x6+parseInt(_0x556a4c(0x219))/0x7*(parseInt(_0x556a4c(0x266))/0x8)+-parseInt(_0x556a4c(0x17a))/0x9*(parseInt(_0x556a4c(0x28e))/0xa)+parseInt(_0x556a4c(0x144))/0xb;if(_0x2da053===_0x36085f)break;else _0xe0a5d0['push'](_0xe0a5d0['shift']());}catch(_0x47aa7b){_0xe0a5d0['push'](_0xe0a5d0['shift']());}}}(_0x4396,0x3aa88));var label=_0x4bad61(0x1d9),tier=tier||0x0,dependencies=[_0x4bad61(0x124),_0x4bad61(0x1c0)],pluginData=$plugins[_0x4bad61(0x1ea)](function(_0x63a610){const _0x1e6e92=_0x4bad61;return _0x63a610[_0x1e6e92(0x272)]&&_0x63a610[_0x1e6e92(0x248)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x4bad61(0x130)]||{},VisuMZ[_0x4bad61(0x178)]=function(_0x5ab0bb,_0x4f05fa){const _0x6cc6b7=_0x4bad61;for(const _0x3b76d6 in _0x4f05fa){if(_0x3b76d6[_0x6cc6b7(0x1d3)](/(.*):(.*)/i)){const _0x10e38d=String(RegExp['$1']),_0x19fe97=String(RegExp['$2'])[_0x6cc6b7(0x1f7)]()['trim']();let _0x564889,_0x5d2777,_0x15bfdf;switch(_0x19fe97){case'NUM':_0x564889=_0x4f05fa[_0x3b76d6]!==''?Number(_0x4f05fa[_0x3b76d6]):0x0;break;case _0x6cc6b7(0x251):_0x5d2777=_0x4f05fa[_0x3b76d6]!==''?JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6]):[],_0x564889=_0x5d2777[_0x6cc6b7(0x253)](_0x2a9a36=>Number(_0x2a9a36));break;case _0x6cc6b7(0x1c1):_0x564889=_0x4f05fa[_0x3b76d6]!==''?eval(_0x4f05fa[_0x3b76d6]):null;break;case'ARRAYEVAL':_0x5d2777=_0x4f05fa[_0x3b76d6]!==''?JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6]):[],_0x564889=_0x5d2777[_0x6cc6b7(0x253)](_0x1f1648=>eval(_0x1f1648));break;case'JSON':_0x564889=_0x4f05fa[_0x3b76d6]!==''?JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6]):'';break;case'ARRAYJSON':_0x5d2777=_0x4f05fa[_0x3b76d6]!==''?JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6]):[],_0x564889=_0x5d2777[_0x6cc6b7(0x253)](_0x23fb7b=>JSON[_0x6cc6b7(0x23f)](_0x23fb7b));break;case _0x6cc6b7(0x1e1):_0x564889=_0x4f05fa[_0x3b76d6]!==''?new Function(JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6])):new Function(_0x6cc6b7(0x138));break;case'ARRAYFUNC':_0x5d2777=_0x4f05fa[_0x3b76d6]!==''?JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6]):[],_0x564889=_0x5d2777[_0x6cc6b7(0x253)](_0x3dd218=>new Function(JSON[_0x6cc6b7(0x23f)](_0x3dd218)));break;case _0x6cc6b7(0x278):_0x564889=_0x4f05fa[_0x3b76d6]!==''?String(_0x4f05fa[_0x3b76d6]):'';break;case _0x6cc6b7(0x28b):_0x5d2777=_0x4f05fa[_0x3b76d6]!==''?JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6]):[],_0x564889=_0x5d2777['map'](_0x56993b=>String(_0x56993b));break;case _0x6cc6b7(0x198):_0x15bfdf=_0x4f05fa[_0x3b76d6]!==''?JSON[_0x6cc6b7(0x23f)](_0x4f05fa[_0x3b76d6]):{},_0x564889=VisuMZ[_0x6cc6b7(0x178)]({},_0x15bfdf);break;case _0x6cc6b7(0x11f):_0x5d2777=_0x4f05fa[_0x3b76d6]!==''?JSON['parse'](_0x4f05fa[_0x3b76d6]):[],_0x564889=_0x5d2777['map'](_0x300fa4=>VisuMZ['ConvertParams']({},JSON[_0x6cc6b7(0x23f)](_0x300fa4)));break;default:continue;}_0x5ab0bb[_0x10e38d]=_0x564889;}}return _0x5ab0bb;},(_0xa94b08=>{const _0x5d5dc8=_0x4bad61,_0xbb735b=_0xa94b08['name'];for(const _0x1dd7ff of dependencies){if(!Imported[_0x1dd7ff]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x5d5dc8(0x1a5)](_0xbb735b,_0x1dd7ff)),SceneManager[_0x5d5dc8(0x1b2)]();break;}}const _0x41e933=_0xa94b08[_0x5d5dc8(0x248)];if(_0x41e933['match'](/\[Version[ ](.*?)\]/i)){const _0x2426ca=Number(RegExp['$1']);_0x2426ca!==VisuMZ[label][_0x5d5dc8(0x169)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0xbb735b,_0x2426ca)),SceneManager[_0x5d5dc8(0x1b2)]());}if(_0x41e933['match'](/\[Tier[ ](\d+)\]/i)){const _0x2db3d1=Number(RegExp['$1']);_0x2db3d1<tier?(alert(_0x5d5dc8(0x291)['format'](_0xbb735b,_0x2db3d1,tier)),SceneManager[_0x5d5dc8(0x1b2)]()):tier=Math[_0x5d5dc8(0x1d4)](_0x2db3d1,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0xa94b08[_0x5d5dc8(0x1c5)]);})(pluginData);function _0xa894(_0x2df1bf,_0x4fd818){const _0x439658=_0x4396();return _0xa894=function(_0xa894ae,_0x3c6da3){_0xa894ae=_0xa894ae-0x11d;let _0xaac399=_0x439658[_0xa894ae];return _0xaac399;},_0xa894(_0x2df1bf,_0x4fd818);}if(VisuMZ[_0x4bad61(0x159)]['version']<1.42){let text='';text+='VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x4bad61(0x187),alert(text),SceneManager[_0x4bad61(0x1b2)]();}PluginManager[_0x4bad61(0x221)](pluginData[_0x4bad61(0x206)],_0x4bad61(0x21c),_0x19e3b9=>{const _0x20be20=_0x4bad61;if(!SceneManager[_0x20be20(0x164)]())return;if(!$gameMap)return;VisuMZ[_0x20be20(0x178)](_0x19e3b9,_0x19e3b9);const _0x441761=$gameTemp[_0x20be20(0x180)](),_0x4c1429=_0x19e3b9[_0x20be20(0x227)]||_0x441761[_0x20be20(0x22c)](),_0x5dc30f=_0x19e3b9['Type']||'',_0x4ff2e6=_0x19e3b9[_0x20be20(0x1df)]||'exact',_0x44b859=$gameMap[_0x20be20(0x181)](_0x4c1429);$gameMap[_0x20be20(0x1e2)](_0x44b859,_0x5dc30f,_0x4ff2e6);}),PluginManager[_0x4bad61(0x221)](pluginData[_0x4bad61(0x206)],_0x4bad61(0x145),_0x36ca4b=>{const _0x17e8dd=_0x4bad61;if(!SceneManager[_0x17e8dd(0x164)]())return;if(!$gameMap)return;VisuMZ['ConvertParams'](_0x36ca4b,_0x36ca4b);const _0x48139c=_0x36ca4b['Type']||'',_0x47995c=_0x36ca4b[_0x17e8dd(0x1df)]||_0x17e8dd(0x287),_0x243e04=$gamePlayer;$gameMap[_0x17e8dd(0x1e2)](_0x243e04,_0x48139c,_0x47995c);}),PluginManager[_0x4bad61(0x221)](pluginData[_0x4bad61(0x206)],_0x4bad61(0x1e0),_0x1c7b01=>{const _0x2b56cd=_0x4bad61;if(!SceneManager[_0x2b56cd(0x164)]())return;if(!$gameMap)return;VisuMZ[_0x2b56cd(0x178)](_0x1c7b01,_0x1c7b01);const _0x51fc47=_0x1c7b01[_0x2b56cd(0x186)]||'',_0x20a1bb=_0x1c7b01[_0x2b56cd(0x1bf)]||0x0,_0x195d58=_0x1c7b01[_0x2b56cd(0x135)]||0x0;$gameMap[_0x2b56cd(0x1a2)](_0x51fc47,_0x20a1bb,_0x195d58);}),PluginManager['registerCommand'](pluginData[_0x4bad61(0x206)],_0x4bad61(0x155),_0x1df81c=>{const _0x25f006=_0x4bad61;if(!SceneManager[_0x25f006(0x164)]())return;VisuMZ[_0x25f006(0x178)](_0x1df81c,_0x1df81c);const _0x1f1500=$gameMap[_0x25f006(0x11d)]($gamePlayer[_0x25f006(0x268)](),$gamePlayer[_0x25f006(0x1c2)]())[_0x25f006(0x1ea)](_0xc179f0=>_0xc179f0&&_0xc179f0['canBePulled']());if(_0x1f1500[_0x25f006(0x171)]<=0x0)return;const _0x5a21a3=_0x1f1500[0x0],_0x59dca9={'name':_0x1df81c['Sound'][_0x25f006(0x206)]||'','volume':_0x1df81c[_0x25f006(0x1c6)]['volume']||0x5a,'pitch':_0x1df81c[_0x25f006(0x1c6)][_0x25f006(0x226)]||0x64,'pan':_0x1df81c[_0x25f006(0x1c6)][_0x25f006(0x204)]||0x0},_0x561f87=_0x1df81c[_0x25f006(0x175)]??!![];$gamePlayer[_0x25f006(0x134)](_0x5a21a3,_0x59dca9,_0x561f87);}),PluginManager[_0x4bad61(0x221)](pluginData[_0x4bad61(0x206)],_0x4bad61(0x20a),_0x3a5cf6=>{const _0x56f758=_0x4bad61;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x56f758(0x178)](_0x3a5cf6,_0x3a5cf6);const _0x9ea76=$gameTemp[_0x56f758(0x180)](),_0x25243b=$gameMap[_0x56f758(0x181)](_0x9ea76[_0x56f758(0x22c)]());if(!_0x25243b)return;const _0x2ec3aa={'name':_0x3a5cf6['Sound'][_0x56f758(0x206)]||'','volume':_0x3a5cf6[_0x56f758(0x1c6)][_0x56f758(0x131)]||0x5a,'pitch':_0x3a5cf6[_0x56f758(0x1c6)][_0x56f758(0x226)]||0x64,'pan':_0x3a5cf6[_0x56f758(0x1c6)]['pan']||0x0},_0xbdd985=_0x3a5cf6[_0x56f758(0x175)]??!![];$gamePlayer[_0x56f758(0x134)](_0x25243b,_0x2ec3aa,_0xbdd985);}),PluginManager[_0x4bad61(0x221)](pluginData[_0x4bad61(0x206)],_0x4bad61(0x22a),_0x38ee78=>{const _0x6e4c91=_0x4bad61;if(!SceneManager[_0x6e4c91(0x164)]())return;VisuMZ[_0x6e4c91(0x178)](_0x38ee78,_0x38ee78);const _0xb73320=$gameMap[_0x6e4c91(0x11d)]($gamePlayer[_0x6e4c91(0x268)](),$gamePlayer[_0x6e4c91(0x1c2)]())[_0x6e4c91(0x1ea)](_0x23699b=>_0x23699b&&_0x23699b[_0x6e4c91(0x16d)]());if(_0xb73320['length']<=0x0)return;const _0x2f5fbf=_0xb73320[0x0],_0x48fdd8={'name':_0x38ee78[_0x6e4c91(0x1c6)][_0x6e4c91(0x206)]||'','volume':_0x38ee78['Sound'][_0x6e4c91(0x131)]||0x5a,'pitch':_0x38ee78[_0x6e4c91(0x1c6)][_0x6e4c91(0x226)]||0x64,'pan':_0x38ee78['Sound']['pan']||0x0},_0x15d13e=_0x38ee78[_0x6e4c91(0x175)]??!![];$gamePlayer[_0x6e4c91(0x1cc)](_0x2f5fbf,_0x48fdd8,_0x38ee78['MoveForward'],_0x15d13e);}),PluginManager[_0x4bad61(0x221)](pluginData[_0x4bad61(0x206)],_0x4bad61(0x20e),_0x114706=>{const _0x2ee757=_0x4bad61;if(!SceneManager[_0x2ee757(0x164)]())return;VisuMZ[_0x2ee757(0x178)](_0x114706,_0x114706);const _0x8d03ec=$gameTemp[_0x2ee757(0x180)](),_0x19f0b1=$gameMap[_0x2ee757(0x181)](_0x8d03ec[_0x2ee757(0x22c)]());if(!_0x19f0b1)return;const _0x4f0f57={'name':_0x114706[_0x2ee757(0x1c6)][_0x2ee757(0x206)]||'','volume':_0x114706['Sound'][_0x2ee757(0x131)]||0x5a,'pitch':_0x114706[_0x2ee757(0x1c6)][_0x2ee757(0x226)]||0x64,'pan':_0x114706[_0x2ee757(0x1c6)][_0x2ee757(0x204)]||0x0},_0x3dfef4=_0x114706[_0x2ee757(0x175)]??!![];$gamePlayer[_0x2ee757(0x1cc)](_0x19f0b1,_0x4f0f57,_0x114706[_0x2ee757(0x1b9)],_0x3dfef4);}),VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x269)]={'CanPush':/<(?:PUSH|REPOSITION|PUSH PULL|PULL PUSH)>/i,'CanPull':/<(?:PULL|REPOSITION|PUSH PULL|PULL PUSH)>/i,'EventReactOn':/<(.*?) (?:REACT|REACTION|REACTOR) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/gi,'EventReactOff':/<(.*?) (?:REACT|REACTION|REACTOR) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/gi,'SpreadReactSpeed':/<(.*?)[ ](TICK|FAST|QUICK|SHORT|AVG|AVERAGE|SLOW|LONG|LATE)[ ](?:SPREAD|SPREADS|CATALYST):[ ](.*?)>/gi,'SpreadReactFrame':/<(.*?)[ ](\d+)[ ](?:FRAME|FRAMES)[ ](?:SPREAD|SPREADS|CATALYST):[ ](.*?)>/gi,'HeavyObj':/<(?:HEAVY OBJECT|HEAVY OBJ|HEAVY)>/i,'NotHeavyObj':/<NOT (?:HEAVY OBJECT|HEAVY OBJ|HEAVY)>/i,'PressurePlate':/<(?:PRESSURE PLATE|PLATE) (?:SW|SWITCH|SWITCHES):[ ](.*?)>/i,'AllWeightSwitch':/<ALL (?:PRESSURE PLATES|PLATES) (?:SW|SWITCH|SWITCHES):[ ](.*?)>/i,'Charger':/<(.*?)[ ](?:CHARGER|CHARGE)>/gi,'Conductor':/<(.*?)[ ](?:CONDUCTOR|CONDUCT) (?:SW|SWITCH|SWITCHES):[ ](.*?)>/gi,'ChargeDir':/<(?:CHARGER|CHARGE|CONDUCTOR|CONDUCT|CURRENT)[ ](?:DIR|DIRECTION|DIRECTIONS):[ ](.*?)>/i,'DecaySpeedOn':/<(TICK|FAST|QUICK|SHORT|AVG|AVERAGE|SLOW|LONG|LATE) DECAY (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'DecaySpeedOff':/<(TICK|FAST|QUICK|SHORT|AVG|AVERAGE|SLOW|LONG|LATE) DECAY (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'DecayFrameOn':/<(\d+)[ ](?:FRAME|FRAMES) DECAY (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'DecayFrameOff':/<(\d+)[ ](?:FRAME|FRAMES) DECAY (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'ShallowSubmergeOn':/<(?:SHALLOW SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'ShallowSubmergeOff':/<(?:SHALLOW SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'DeepSubmergeOn':/<(?:DEEP SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'DeepSubmergeOff':/<(?:DEEP SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'ResurfaceOn':/<(?:SURFACE|RESURFACE) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'ResurfaceOff':/<(?:SURFACE|RESURFACE) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'SubmergedEffect':/<SUBMERGED EFFECT>/i,'SubmergedEffectOffset':/<SUBMERGED EFFECT:[ ](\d+)>/i,'Bridge':/<BRIDGE>/i},SoundManager[_0x4bad61(0x123)]=function(){const _0x587677=_0x4bad61,_0x5c3dd0=VisuMZ[_0x587677(0x1d9)][_0x587677(0x130)][_0x587677(0x156)],_0x3e1f8a={'name':_0x5c3dd0[_0x587677(0x12f)]||'','volume':_0x5c3dd0[_0x587677(0x28c)]||0x5a,'pitch':_0x5c3dd0[_0x587677(0x13f)]||0x64,'pan':_0x5c3dd0[_0x587677(0x162)]||0x0};AudioManager[_0x587677(0x21a)](_0x3e1f8a);},SceneManager['isSceneMap']=function(){const _0x37a7a0=_0x4bad61;return this[_0x37a7a0(0x214)]&&this[_0x37a7a0(0x214)]['constructor']===Scene_Map;},Game_Temp[_0x4bad61(0x185)][_0x4bad61(0x182)]=function(){const _0x51615a=_0x4bad61;this[_0x51615a(0x1cd)]={},this[_0x51615a(0x126)]={};},Game_Temp['prototype'][_0x4bad61(0x23d)]=function(_0x320ace,_0x3f740b){const _0x849787=_0x4bad61;this[_0x849787(0x1cd)]=this['_submergedEventsXy']||{};const _0x139c7c=_0x849787(0x243)['format'](_0x320ace,_0x3f740b);if(this[_0x849787(0x1cd)][_0x139c7c])return this['_submergedEventsXy'][_0x139c7c];return this[_0x849787(0x1cd)][_0x139c7c]=$gameMap['eventsXy'](_0x320ace,_0x3f740b)[_0x849787(0x1ea)](_0x4cf5a9=>_0x4cf5a9&&_0x4cf5a9[_0x849787(0x1e4)]()),this[_0x849787(0x1cd)][_0x139c7c];},Game_Temp[_0x4bad61(0x185)][_0x4bad61(0x176)]=function(_0x1a17d1,_0x52d66c){const _0x4bb4be=_0x4bad61;this['_bridgeEventsXy']=this[_0x4bb4be(0x126)]||{};const _0x288a4f=_0x4bb4be(0x243)[_0x4bb4be(0x1a5)](_0x1a17d1,_0x52d66c);if(this[_0x4bb4be(0x126)][_0x288a4f])return this['_bridgeEventsXy'][_0x288a4f];return this[_0x4bb4be(0x126)][_0x288a4f]=$gameMap[_0x4bb4be(0x11d)](_0x1a17d1,_0x52d66c)['filter'](_0x10af1a=>_0x10af1a&&_0x10af1a[_0x4bb4be(0x239)]()),this['_bridgeEventsXy'][_0x288a4f];},VisuMZ[_0x4bad61(0x1d9)]['Game_Map_setup']=Game_Map[_0x4bad61(0x185)][_0x4bad61(0x129)],Game_Map[_0x4bad61(0x185)][_0x4bad61(0x129)]=function(_0x13721e){const _0x29ff76=_0x4bad61;VisuMZ[_0x29ff76(0x1d9)][_0x29ff76(0x233)][_0x29ff76(0x195)](this,_0x13721e),this[_0x29ff76(0x12e)](),this['refreshEventChainReact']();},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x12e)]=function(){const _0x147c5f=_0x4bad61;this[_0x147c5f(0x15d)]();},VisuMZ[_0x4bad61(0x1d9)]['Game_Map_refreshIfNeeded']=Game_Map[_0x4bad61(0x185)][_0x4bad61(0x133)],Game_Map[_0x4bad61(0x185)][_0x4bad61(0x133)]=function(){const _0x23eea4=_0x4bad61;VisuMZ['EventChainReact'][_0x23eea4(0x236)]['call'](this),this['refreshEventChainReact']();},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x232)]=function(){const _0x53a507=_0x4bad61;this['_requestRefreshPressurePlate']&&this[_0x53a507(0x240)](),this['_requestRefreshConduction']&&this['refreshConduction']();},VisuMZ[_0x4bad61(0x1d9)]['Game_Map_refresh']=Game_Map[_0x4bad61(0x185)][_0x4bad61(0x285)],Game_Map[_0x4bad61(0x185)]['refresh']=function(){const _0x1349d7=_0x4bad61;VisuMZ['EventChainReact'][_0x1349d7(0x147)]['call'](this),$gameTemp[_0x1349d7(0x182)]();},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x229)]=function(_0x114cc5,_0x14bb14){const _0x4c774f=_0x4bad61,_0xc6d44f=_0x114cc5['x'],_0x536fad=_0x114cc5['y'],_0x5160a7=[];switch(_0x14bb14['toLowerCase']()[_0x4c774f(0x136)]()){case _0x4c774f(0x287):_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f,'y':_0x536fad});break;case _0x4c774f(0x21b):_0x5160a7[_0x4c774f(0x20d)]({'x':_0x114cc5[_0x4c774f(0x268)](),'y':_0x114cc5[_0x4c774f(0x1c2)]()});break;case _0x4c774f(0x1fb):_0x5160a7[_0x4c774f(0x20d)]({'x':_0x114cc5[_0x4c774f(0x1f1)](),'y':_0x114cc5['backY']()});break;case'cw':case _0x4c774f(0x1b8):_0x5160a7[_0x4c774f(0x20d)]({'x':_0x114cc5[_0x4c774f(0x24f)](),'y':_0x114cc5[_0x4c774f(0x14d)]()});break;case _0x4c774f(0x1de):case _0x4c774f(0x122):_0x5160a7[_0x4c774f(0x20d)]({'x':_0x114cc5[_0x4c774f(0x1be)](),'y':_0x114cc5[_0x4c774f(0x1f4)]()});break;case _0x4c774f(0x13b):case'next':_0x5160a7['push']({'x':_0xc6d44f-0x1,'y':_0x536fad}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f+0x1,'y':_0x536fad}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f,'y':_0x536fad}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f,'y':_0x536fad-0x1}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f,'y':_0x536fad+0x1});break;case _0x4c774f(0x1da):case _0x4c774f(0x1e7):_0x5160a7['push']({'x':_0xc6d44f-0x1,'y':_0x536fad-0x1}),_0x5160a7['push']({'x':_0xc6d44f-0x1,'y':_0x536fad}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f-0x1,'y':_0x536fad+0x1}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f,'y':_0x536fad-0x1}),_0x5160a7['push']({'x':_0xc6d44f,'y':_0x536fad}),_0x5160a7['push']({'x':_0xc6d44f,'y':_0x536fad+0x1}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f+0x1,'y':_0x536fad-0x1}),_0x5160a7['push']({'x':_0xc6d44f+0x1,'y':_0x536fad}),_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f+0x1,'y':_0x536fad+0x1});break;case _0x4c774f(0x26b):_0x5160a7['push']({'x':_0xc6d44f,'y':_0x536fad+0x1});break;case _0x4c774f(0x15e):_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f-0x1,'y':_0x536fad});break;case _0x4c774f(0x184):_0x5160a7['push']({'x':_0xc6d44f+0x1,'y':_0x536fad});break;case'up':_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f,'y':_0x536fad-0x1});break;case'lower\x20left':_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f-0x1,'y':_0x536fad+0x1});break;case _0x4c774f(0x12b):_0x5160a7['push']({'x':_0xc6d44f+0x1,'y':_0x536fad+0x1});break;case _0x4c774f(0x165):_0x5160a7['push']({'x':_0xc6d44f-0x1,'y':_0x536fad-0x1});break;case _0x4c774f(0x1af):_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f+0x1,'y':_0x536fad-0x1});break;default:_0x5160a7[_0x4c774f(0x20d)]({'x':_0xc6d44f,'y':_0x536fad});break;}return _0x5160a7;},Game_Map['prototype'][_0x4bad61(0x1a2)]=function(_0x4f0002,_0x23db0b,_0x3847f2,_0x2bf4df){const _0x125fe5=_0x4bad61,_0x4ca8b0=this['eventsXy'](_0x23db0b,_0x3847f2)[_0x125fe5(0x1ea)](_0x5e485d=>_0x5e485d&&_0x5e485d!==_0x2bf4df);for(const _0x6f744d of _0x4ca8b0){_0x6f744d&&!_0x6f744d['_erased']&&_0x6f744d[_0x125fe5(0x1aa)](_0x4f0002);}},Game_Map['prototype'][_0x4bad61(0x1e2)]=function(_0x2a123b,_0x503064,_0x468d86){const _0x3d7f40=_0x4bad61;if(!_0x2a123b)return;const _0x17e789=VisuMZ[_0x3d7f40(0x1d9)]['RelativeCoordinates'](_0x2a123b,_0x468d86),_0xae1797=_0x2a123b===$gamePlayer?0x0:-_0x2a123b[_0x3d7f40(0x250)]['left'],_0x3d5247=_0x2a123b===$gamePlayer?0x0:_0x2a123b['_addedHitbox'][_0x3d7f40(0x184)],_0x302fde=_0x2a123b===$gamePlayer?0x0:-_0x2a123b[_0x3d7f40(0x250)]['up'],_0x58c89e=_0x2a123b===$gamePlayer?0x0:_0x2a123b[_0x3d7f40(0x250)][_0x3d7f40(0x26b)];for(let _0x8fcfb3=_0xae1797;_0x8fcfb3<=_0x3d5247;_0x8fcfb3++){for(let _0x574c55=_0x302fde;_0x574c55<=_0x58c89e;_0x574c55++){for(const _0x4598ee of _0x17e789){const _0x3dde93=_0x4598ee['x']??-0x1,_0x705237=_0x4598ee['y']??-0x1;this[_0x3d7f40(0x1a2)](_0x503064,_0x3dde93+_0x8fcfb3,_0x705237+_0x574c55,this);}}}},Game_Map[_0x4bad61(0x185)]['setupPressurePlateNotetags']=function(){const _0x408821=_0x4bad61;this[_0x408821(0x190)]=[];const _0x707d3=VisuMZ['EventChainReact']['RegExp'],_0x41d809=$dataMap?$dataMap[_0x408821(0x260)]||'':'';_0x41d809[_0x408821(0x1d3)](_0x707d3[_0x408821(0x1fa)])&&(this[_0x408821(0x190)]=String(RegExp['$1'])[_0x408821(0x212)](',')[_0x408821(0x253)](_0x80b084=>Number(_0x80b084)||0x0));},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x237)]=function(){const _0x165000=_0x4bad61;this[_0x165000(0x218)]=!![];},Game_Map[_0x4bad61(0x185)]['refreshPressurePlate']=function(){const _0x33757a=_0x4bad61;this[_0x33757a(0x218)]=![];const _0x404d0f=this['events']()[_0x33757a(0x1ea)](_0x2a3263=>_0x2a3263&&_0x2a3263['isPressurePlate']());for(const _0x5d32df of _0x404d0f){_0x5d32df&&_0x5d32df[_0x33757a(0x17b)]();}this[_0x33757a(0x190)]===undefined&&this[_0x33757a(0x15d)]();if(this['_allPressurePlateSwitches'][_0x33757a(0x171)]>0x0){const _0x76604f=_0x404d0f['every'](_0x82316b=>_0x82316b[_0x33757a(0x247)]()&&!_0x82316b['isSpawnedEvent']()&&!_0x82316b[_0x33757a(0x267)]);for(const _0x1ac26b of this[_0x33757a(0x190)]){$gameSwitches[_0x33757a(0x215)](_0x1ac26b,_0x76604f);}}},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x13d)]=function(){const _0x27361f=_0x4bad61;this[_0x27361f(0x21d)]=!![];},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x245)]=function(){const _0x2d0b8b=_0x4bad61;this['_requestRefreshConduction']=![];const _0x490145=this['events']()[_0x2d0b8b(0x1ea)](_0x1fc7df=>_0x1fc7df&&_0x1fc7df[_0x2d0b8b(0x22b)]());for(const _0xeb78d5 of _0x490145){_0xeb78d5[_0x2d0b8b(0x1c4)]();}const _0x24b1af=this[_0x2d0b8b(0x23e)]()[_0x2d0b8b(0x1ea)](_0x56f523=>_0x56f523&&_0x56f523[_0x2d0b8b(0x1d6)]());for(const _0x187cff of _0x24b1af){_0x187cff[_0x2d0b8b(0x142)]();}for(const _0x2261e7 of _0x490145){_0x2261e7[_0x2d0b8b(0x216)]();}},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x141)]=function(_0x2582b8,_0x1c6618,_0x384fe7){const _0x1a7620=_0x4bad61,_0x1cab16=this[_0x1a7620(0x11d)](_0x1c6618,_0x384fe7)[_0x1a7620(0x1ea)](_0x3a77a4=>_0x3a77a4&&_0x3a77a4[_0x1a7620(0x22b)]()&&_0x3a77a4[_0x1a7620(0x1a9)](_0x2582b8)&&_0x3a77a4['getConductionState'](_0x2582b8)===![]);for(const _0x5c79aa of _0x1cab16){_0x5c79aa[_0x1a7620(0x1c3)](_0x2582b8,!![]),_0x5c79aa['spreadChargeType'](_0x2582b8),_0x5c79aa[_0x1a7620(0x16e)]();}},VisuMZ['EventChainReact']['Game_Map_checkPassage']=Game_Map[_0x4bad61(0x185)]['checkPassage'],Game_Map[_0x4bad61(0x185)][_0x4bad61(0x15f)]=function(_0x458039,_0x3bf486,_0x43f7bc){const _0x291a07=_0x4bad61,_0x1aafbc=$gameTemp[_0x291a07(0x176)](_0x458039,_0x3bf486);if(_0x1aafbc[_0x291a07(0x171)]>0x0){if(_0x43f7bc===0x200)return![];if(_0x43f7bc===0x400)return![];return!![];}else return VisuMZ['EventChainReact'][_0x291a07(0x177)][_0x291a07(0x195)](this,_0x458039,_0x3bf486,_0x43f7bc);},Game_Map[_0x4bad61(0x185)]['isWaterTile']=function(_0x549cb7,_0x356987){const _0x4b5464=_0x4bad61;return this[_0x4b5464(0x26c)](_0x549cb7,_0x356987)||this[_0x4b5464(0x26e)](_0x549cb7,_0x356987);},Game_Map['prototype'][_0x4bad61(0x26c)]=function(_0x5889c6,_0x238c34){const _0x235307=_0x4bad61;return this[_0x235307(0x1a3)](_0x5889c6,_0x238c34,0x200);},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x26e)]=function(_0x17f559,_0x8194c3){return this['checkPassageNoEvents'](_0x17f559,_0x8194c3,0x400);},Game_Map[_0x4bad61(0x185)][_0x4bad61(0x1a3)]=function(_0x2b9eb4,_0x4a5023,_0x458bd6){const _0x39903e=_0x4bad61,_0x901503=this[_0x39903e(0x146)](),_0x38dcdf=this[_0x39903e(0x19d)](_0x2b9eb4,_0x4a5023);for(const _0x9ebfcc of _0x38dcdf){const _0x117f56=_0x901503[_0x9ebfcc];if(_0x117f56===undefined||_0x117f56===null){let _0x5d3462='Current\x20tileset\x20has\x20incomplete\x20flag\x20data.'+'\x0a';_0x5d3462+='Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages'+'\x0a',_0x5d3462+=_0x39903e(0x25c);if(!this[_0x39903e(0x26d)])console[_0x39903e(0x132)](_0x5d3462);this[_0x39903e(0x26d)]=!![];continue;}if((_0x117f56&0x10)!==0x0)continue;if((_0x117f56&_0x458bd6)===0x0)return!![];if((_0x117f56&_0x458bd6)===_0x458bd6)return![];}return![];},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x19e)]=Game_CharacterBase['prototype']['update'],Game_CharacterBase[_0x4bad61(0x185)][_0x4bad61(0x16e)]=function(){const _0xde051d=_0x4bad61;this[_0xde051d(0x157)](),VisuMZ[_0xde051d(0x1d9)][_0xde051d(0x19e)]['call'](this);},Game_CharacterBase['prototype'][_0x4bad61(0x157)]=function(){const _0x167a7c=_0x4bad61;this['needsUpdatePressurePlate']()&&this[_0x167a7c(0x237)]();},Game_CharacterBase[_0x4bad61(0x185)][_0x4bad61(0x200)]=function(){const _0x406721=_0x4bad61;if(!this['isHeavyObject']())return![];this[_0x406721(0x150)]=this[_0x406721(0x150)]||{};if(this['_heavyObjCache'][_0x406721(0x1a6)]!==this['x'])return!![];if(this[_0x406721(0x150)][_0x406721(0x1b7)]!==this['y'])return!![];if(this['_heavyObjCache'][_0x406721(0x22e)]!==this[_0x406721(0x22e)]())return!![];if(this['_heavyObjCache']['_pageIndex']!==this[_0x406721(0x277)])return!![];return![];},Game_CharacterBase['prototype'][_0x4bad61(0x25a)]=function(){return![];},Game_CharacterBase['prototype'][_0x4bad61(0x237)]=function(){const _0x751071=_0x4bad61;this['_heavyObjCache']=this['_heavyObjCache']||{},this['_heavyObjCache'][_0x751071(0x1a6)]=this['x'],this[_0x751071(0x150)][_0x751071(0x1b7)]=this['y'],this[_0x751071(0x150)][_0x751071(0x22e)]=this['jumpHeight'](),this['_heavyObjCache'][_0x751071(0x277)]=this[_0x751071(0x277)],$gameMap[_0x751071(0x237)]();};!Game_CharacterBase[_0x4bad61(0x185)]['ccwX']&&(Game_CharacterBase[_0x4bad61(0x185)]['ccwX']=function(){const _0x14352b=_0x4bad61,_0x496023=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x14352b(0x1ae)]()];return $gameMap[_0x14352b(0x17d)](this['x'],_0x496023);},Game_CharacterBase['prototype'][_0x4bad61(0x1f4)]=function(){const _0x354504=_0x4bad61,_0x10759e=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x354504(0x1ae)]()];return $gameMap[_0x354504(0x196)](this['y'],_0x10759e);},Game_CharacterBase[_0x4bad61(0x185)][_0x4bad61(0x24f)]=function(){const _0x546bbe=_0x4bad61,_0x269574=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this['direction']()];return $gameMap[_0x546bbe(0x17d)](this['x'],_0x269574);},Game_CharacterBase['prototype'][_0x4bad61(0x14d)]=function(){const _0x1f862f=_0x4bad61,_0x50b403=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x1f862f(0x1ae)]()];return $gameMap[_0x1f862f(0x196)](this['y'],_0x50b403);});Game_CharacterBase['prototype'][_0x4bad61(0x1e4)]=function(){return this['_submergeEffect'];},Game_CharacterBase[_0x4bad61(0x185)]['submergedEffectOffset']=function(){const _0x15a1f3=_0x4bad61;return this[_0x15a1f3(0x241)]||0x0;},Game_Player[_0x4bad61(0x185)][_0x4bad61(0x134)]=function(_0x83354,_0x923c26,_0x18959c){const _0x3f9520=_0x4bad61;if(!_0x83354)return;if(_0x83354[_0x3f9520(0x217)]())return;if(_0x83354[_0x3f9520(0x235)](_0x83354['x'],_0x83354['y']))return;const _0x5a9408=$gameMap[_0x3f9520(0x1b0)](this['x'],this['y'],_0x83354['x'],_0x83354['y']);if(_0x5a9408>0x1)return;if(_0x83354[_0x3f9520(0x1f0)]())return;if(this[_0x3f9520(0x1f0)]())return;const _0x549ff1=0xa-this['direction']();if(_0x549ff1%0x2!==0x0)return;if(!this[_0x3f9520(0x280)](this['x'],this['y'],_0x549ff1))return;const _0x9f243c=this[_0x3f9520(0x228)];this['_through']=!![];if(!_0x83354[_0x3f9520(0x280)](_0x83354['x'],_0x83354['y'],_0x549ff1))return;this[_0x3f9520(0x228)]=_0x9f243c;const _0x15cf70=$gameMap[_0x3f9520(0x17d)](this['x'],_0x549ff1),_0x36dedd=$gameMap[_0x3f9520(0x196)](this['y'],_0x549ff1);if($gameMap['isLadder'](_0x15cf70,_0x36dedd))return;let _0xbb4964=0x0;if(_0x549ff1===0x2)_0xbb4964=Game_Character[_0x3f9520(0x207)];if(_0x549ff1===0x4)_0xbb4964=Game_Character[_0x3f9520(0x279)];if(_0x549ff1===0x6)_0xbb4964=Game_Character[_0x3f9520(0x167)];if(_0x549ff1===0x8)_0xbb4964=Game_Character[_0x3f9520(0x18e)];const _0x41b5a5=_0x83354[_0x3f9520(0x24e)](),_0x12f9fe=$gamePlayer[_0x3f9520(0x24e)](),_0x5a2585=Math['min'](_0x41b5a5,_0x12f9fe);{const _0x2b89ff={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x2b89ff['list'][_0x3f9520(0x20d)]({'code':Game_Character['ROUTE_SCRIPT'],'parameters':['this.gatherFollowersAndWait()'],'indent':null}),_0x2b89ff['list'][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x1f3)],'parameters':['this.pullFollowers(true)'],'indent':null});_0x923c26&&_0x923c26[_0x3f9520(0x206)]!==''&&_0x2b89ff['list']['push']({'code':Game_Character[_0x3f9520(0x154)],'parameters':[_0x923c26],'indent':null});_0x2b89ff['list']['push']({'code':Game_Character[_0x3f9520(0x128)],'indent':null}),_0x2b89ff[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x265)],'parameters':[_0x5a2585],'indent':null}),_0x2b89ff[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':_0xbb4964,'indent':null}),_0x2b89ff[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x265)],'parameters':[_0x12f9fe],'indent':null}),_0x2b89ff[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character['ROUTE_DIR_FIX_OFF'],'indent':null}),_0x2b89ff[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x1f3)],'parameters':[_0x3f9520(0x15c)],'indent':null});if(_0x18959c)_0x2b89ff['list'][_0x3f9520(0x20d)]({'code':Game_Character['ROUTE_SCRIPT'],'parameters':['this.checkEventTriggerHere([1,\x202])'],'indent':null});_0x2b89ff[_0x3f9520(0x23b)]['push']({'code':Game_Character[_0x3f9520(0x1db)]}),this['forceMoveRoute'](_0x2b89ff);}{const _0x59423e={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x59423e['list'][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x1f3)],'parameters':[_0x3f9520(0x153)],'indent':null}),_0x59423e[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x264)],'indent':null}),_0x59423e[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x265)],'parameters':[_0x5a2585],'indent':null}),_0x59423e[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':_0xbb4964,'indent':null}),_0x59423e[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character['ROUTE_CHANGE_SPEED'],'parameters':[_0x41b5a5],'indent':null}),_0x59423e[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x197)],'indent':null}),_0x59423e[_0x3f9520(0x23b)][_0x3f9520(0x20d)]({'code':Game_Character['ROUTE_SCRIPT'],'parameters':[_0x3f9520(0x174)],'indent':null}),_0x59423e['list'][_0x3f9520(0x20d)]({'code':Game_Character[_0x3f9520(0x1db)]}),_0x83354['forceMoveRoute'](_0x59423e);}const _0x5e526e=$gameTemp[_0x3f9520(0x180)]();_0x5e526e['_characterId']=_0x83354[_0x3f9520(0x22c)](),_0x5e526e[_0x3f9520(0x25d)](_0x3f9520(0x121));},Game_Player['prototype'][_0x4bad61(0x1cc)]=function(_0x174590,_0x10c503,_0x2ec02c,_0x215509){const _0x54369e=_0x4bad61;if(!_0x174590)return;if(_0x174590['isMoving']())return;if(_0x174590['inWaterTile'](_0x174590['x'],_0x174590['y']))return;const _0x25532d=$gameMap[_0x54369e(0x1b0)](this['x'],this['y'],_0x174590['x'],_0x174590['y']);if(_0x25532d>0x1)return;if(_0x174590[_0x54369e(0x1f0)]())return;if(this[_0x54369e(0x1f0)]())return;const _0x4cd4b1=this[_0x54369e(0x1ae)]();if(_0x4cd4b1%0x2!==0x0)return;if(!_0x174590['canPass'](_0x174590['x'],_0x174590['y'],_0x4cd4b1))return;const _0x1fbc55=$gameMap[_0x54369e(0x17d)](_0x174590['x'],_0x4cd4b1),_0x36930e=$gameMap[_0x54369e(0x196)](_0x174590['y'],_0x4cd4b1);if($gameMap[_0x54369e(0x249)](_0x1fbc55,_0x36930e))return;if(_0x10c503&&_0x10c503[_0x54369e(0x206)]!=='')AudioManager[_0x54369e(0x21a)](_0x10c503);let _0x5dade7=0x0;if(_0x4cd4b1===0x2)_0x5dade7=Game_Character[_0x54369e(0x207)];if(_0x4cd4b1===0x4)_0x5dade7=Game_Character[_0x54369e(0x279)];if(_0x4cd4b1===0x6)_0x5dade7=Game_Character[_0x54369e(0x167)];if(_0x4cd4b1===0x8)_0x5dade7=Game_Character[_0x54369e(0x18e)];const _0x55ac0e=_0x174590[_0x54369e(0x24e)](),_0x2c69d9=_0x2ec02c?$gamePlayer[_0x54369e(0x24e)]():_0x55ac0e,_0x4643f8=Math[_0x54369e(0x1ac)](_0x55ac0e,_0x2c69d9);{const _0x5b8da1={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x5b8da1[_0x54369e(0x23b)]['push']({'code':Game_Character[_0x54369e(0x265)],'parameters':[_0x4643f8],'indent':null}),_0x5b8da1[_0x54369e(0x23b)][_0x54369e(0x20d)]({'code':_0x5dade7,'indent':null}),_0x5b8da1[_0x54369e(0x23b)][_0x54369e(0x20d)]({'code':Game_Character[_0x54369e(0x265)],'parameters':[_0x55ac0e],'indent':null}),_0x5b8da1['list'][_0x54369e(0x20d)]({'code':Game_Character[_0x54369e(0x1db)]}),_0x174590['forceMoveRoute'](_0x5b8da1);}if(_0x2ec02c){const _0x2aace2={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x2aace2['list'][_0x54369e(0x20d)]({'code':Game_Character['ROUTE_CHANGE_SPEED'],'parameters':[_0x4643f8],'indent':null}),_0x2aace2['list'][_0x54369e(0x20d)]({'code':_0x5dade7,'indent':null}),_0x2aace2['list'][_0x54369e(0x20d)]({'code':Game_Character['ROUTE_CHANGE_SPEED'],'parameters':[_0x2c69d9],'indent':null}),_0x2aace2[_0x54369e(0x23b)][_0x54369e(0x20d)]({'code':Game_Character[_0x54369e(0x19c)],'indent':null});if(_0x215509)_0x2aace2['list'][_0x54369e(0x20d)]({'code':Game_Character[_0x54369e(0x1f3)],'parameters':[_0x54369e(0x1fc)],'indent':null});_0x2aace2[_0x54369e(0x23b)][_0x54369e(0x20d)]({'code':Game_Character[_0x54369e(0x1db)]}),this[_0x54369e(0x17c)](_0x2aace2);}const _0xfe99b4=$gameTemp['getLastPluginCommandInterpreter']();_0xfe99b4[_0x54369e(0x18f)]=_0x174590['eventId'](),_0xfe99b4[_0x54369e(0x25d)](_0x54369e(0x121));},Game_Player[_0x4bad61(0x185)][_0x4bad61(0x14a)]=function(){const _0xcdd129=_0x4bad61;this[_0xcdd129(0x242)](),this[_0xcdd129(0x170)]=!![];},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x139)]=Game_Character[_0x4bad61(0x185)][_0x4bad61(0x209)],Game_Character[_0x4bad61(0x185)]['updateRoutineMove']=function(){const _0x307403=_0x4bad61;if(this[_0x307403(0x170)]&&$gamePlayer[_0x307403(0x15b)]())return;VisuMZ[_0x307403(0x1d9)]['Game_Character_updateRoutineMove'][_0x307403(0x195)](this);},Game_Player[_0x4bad61(0x185)][_0x4bad61(0x1b6)]=function(_0x57ea5c){const _0x189b83=_0x4bad61;this[_0x189b83(0x1ad)][_0x189b83(0x1b6)](_0x57ea5c);if(!_0x57ea5c)this[_0x189b83(0x170)]=![];},Game_Player[_0x4bad61(0x185)]['isHeavyObject']=function(){const _0x558d43=_0x4bad61;return VisuMZ[_0x558d43(0x1d9)]['Settings'][_0x558d43(0x158)][_0x558d43(0x1fd)];},Game_Follower[_0x4bad61(0x185)]['isHeavyObject']=function(){const _0x492ea4=_0x4bad61;if(!VisuMZ['EventChainReact'][_0x492ea4(0x130)][_0x492ea4(0x158)][_0x492ea4(0x16b)])return![];return this[_0x492ea4(0x230)]()&&this[_0x492ea4(0x163)]()!=='';},Game_Followers['prototype'][_0x4bad61(0x1b6)]=function(_0x22a1bc){const _0x3b576f=_0x4bad61;for(let _0xabdbbf=this[_0x3b576f(0x1ef)][_0x3b576f(0x171)]-0x1;_0xabdbbf>=0x0;_0xabdbbf--){this[_0x3b576f(0x1ef)][_0xabdbbf][_0x3b576f(0x18a)]=_0x22a1bc;if(this['_data'][_0xabdbbf][_0x3b576f(0x217)]())continue;if(_0x22a1bc)this[_0x3b576f(0x1ef)][_0xabdbbf]['chasePull']($gamePlayer);}},Game_Follower[_0x4bad61(0x185)][_0x4bad61(0x23c)]=function(_0x23c56a){const _0x2eb43d=_0x4bad61;this[_0x2eb43d(0x18d)](_0x23c56a[_0x2eb43d(0x1f1)](),_0x23c56a['backY'](),_0x23c56a[_0x2eb43d(0x1ae)]());},Game_Follower[_0x4bad61(0x185)][_0x4bad61(0x18d)]=function(_0x1847ce,_0x4a3de4,_0x46b224){const _0x513896=_0x4bad61,_0x3f51d2=this[_0x513896(0x26f)](_0x1847ce),_0xa70be8=this['deltaYFrom'](_0x4a3de4);if(_0x3f51d2!==0x0||_0xa70be8!==0x0){if(_0x3f51d2!==0x0&&_0xa70be8!==0x0)this[_0x513896(0x1dc)](_0x3f51d2>0x0?0x4:0x6,_0xa70be8>0x0?0x8:0x2);else{if(_0x3f51d2!==0x0)this[_0x513896(0x238)](_0x3f51d2>0x0?0x4:0x6);else _0xa70be8!==0x0&&this[_0x513896(0x238)](_0xa70be8>0x0?0x8:0x2);}}this['setDirection'](_0x46b224),this[_0x513896(0x1ee)]($gamePlayer[_0x513896(0x231)]());},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x151)]=Game_Follower['prototype']['chaseCharacter'],Game_Follower[_0x4bad61(0x185)][_0x4bad61(0x1f8)]=function(_0x5ac348){const _0x505923=_0x4bad61;if(this['_pullingFollowers'])return;VisuMZ[_0x505923(0x1d9)]['Game_Follower_chaseCharacter'][_0x505923(0x195)](this,_0x5ac348);},Game_Event[_0x4bad61(0x1ce)]={'tick':VisuMZ['EventChainReact'][_0x4bad61(0x130)][_0x4bad61(0x179)][_0x4bad61(0x28a)]||0x1,'fast':VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x130)][_0x4bad61(0x179)][_0x4bad61(0x283)]||0x8,'quick':VisuMZ['EventChainReact'][_0x4bad61(0x130)][_0x4bad61(0x179)][_0x4bad61(0x1c7)]||0xf,'short':VisuMZ['EventChainReact']['Settings'][_0x4bad61(0x179)][_0x4bad61(0x1a7)]||0x14,'avg':VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x130)][_0x4bad61(0x179)][_0x4bad61(0x244)]||0x1e,'average':VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x130)]['Speed'][_0x4bad61(0x244)]||0x1e,'slow':VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x130)]['Speed'][_0x4bad61(0x27b)]||0x28,'long':VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x130)][_0x4bad61(0x179)][_0x4bad61(0x13a)]||0x3c,'late':VisuMZ['EventChainReact'][_0x4bad61(0x130)][_0x4bad61(0x179)][_0x4bad61(0x288)]||0x78},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x1ca)]=Game_Event[_0x4bad61(0x185)][_0x4bad61(0x261)],Game_Event[_0x4bad61(0x185)][_0x4bad61(0x261)]=function(){const _0x4a7390=_0x4bad61;VisuMZ[_0x4a7390(0x1d9)][_0x4a7390(0x1ca)][_0x4a7390(0x195)](this),this[_0x4a7390(0x1ba)]();},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x1f5)]=Game_Event[_0x4bad61(0x185)][_0x4bad61(0x19b)],Game_Event[_0x4bad61(0x185)][_0x4bad61(0x19b)]=function(){const _0x43c2f8=_0x4bad61;VisuMZ[_0x43c2f8(0x1d9)][_0x43c2f8(0x1f5)][_0x43c2f8(0x195)](this),this[_0x43c2f8(0x203)]();},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x203)]=function(){const _0x426210=_0x4bad61;if(!this[_0x426210(0x181)]())return;this[_0x426210(0x1ba)](),this['setupEventChainReactNotetags'](),this['setupEventChainReactCommentTags']();},Game_Event['prototype']['setupEventChainReactNotetags']=function(){const _0x3e7127=_0x4bad61;let _0x573dcd=this[_0x3e7127(0x181)]()[_0x3e7127(0x260)];if(_0x573dcd==='')return;_0x573dcd=_0x573dcd[_0x3e7127(0x27a)](/>[ ]*</i,_0x3e7127(0x17f)),this['checkEventChainReactStringTags'](_0x573dcd);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x224)]=function(){const _0x472f6a=_0x4bad61;if(!this[_0x472f6a(0x225)]())return;const _0x4f166f=this[_0x472f6a(0x23b)]();let _0x1a9790='';for(const _0x46d69f of _0x4f166f){if([0x6c,0x198][_0x472f6a(0x189)](_0x46d69f['code'])){if(_0x1a9790!=='')_0x1a9790+='\x0a';_0x1a9790+=_0x46d69f['parameters'][0x0];}}this['checkEventChainReactStringTags'](_0x1a9790);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1e8)]=function(){return!![];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1ba)]=function(){const _0x5aa956=_0x4bad61;this[_0x5aa956(0x281)]=![],this[_0x5aa956(0x166)]=![],this[_0x5aa956(0x273)]={},this[_0x5aa956(0x1bc)]=[],this['_pressurePlateSwitches']=[],this[_0x5aa956(0x12a)]=![],this[_0x5aa956(0x173)]===0x1&&(this['_heavyObject']=VisuMZ[_0x5aa956(0x1d9)][_0x5aa956(0x130)][_0x5aa956(0x158)][_0x5aa956(0x14f)]),this[_0x5aa956(0x161)]=[],this[_0x5aa956(0x28d)]={},this[_0x5aa956(0x21e)]=[_0x5aa956(0x13b)],this[_0x5aa956(0x16a)]=-0x1,this['_decayOffDuration']=-0x1,this[_0x5aa956(0x1e9)]=[],this['_decaySwitchOff']=[],this['_submergeShallowOn']=[],this[_0x5aa956(0x246)]=[],this[_0x5aa956(0x24d)]=[],this[_0x5aa956(0x14e)]=[],this['_resurfaceOn']=[],this[_0x5aa956(0x27c)]=[],this[_0x5aa956(0x20f)]=![],this['_submergeEffectOffset']=0x0,this[_0x5aa956(0x293)]=![];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x22f)]=function(_0x172c9c){const _0x4a0538=_0x4bad61;if(this[_0x4a0538(0x273)]===undefined)this[_0x4a0538(0x1ba)]();_0x172c9c=_0x172c9c[_0x4a0538(0x1b1)]()['trim'](),this['_chainReactions'][_0x172c9c]=this[_0x4a0538(0x273)][_0x172c9c]||{},this[_0x4a0538(0x273)][_0x172c9c][_0x4a0538(0x1eb)]=[],this[_0x4a0538(0x273)][_0x172c9c][_0x4a0538(0x275)]=[];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1c9)]=function(_0x5b6525){const _0x45ad3c=_0x4bad61,_0x206021=VisuMZ['EventChainReact'][_0x45ad3c(0x269)];_0x5b6525[_0x45ad3c(0x1d3)](_0x206021[_0x45ad3c(0x18b)])&&(this[_0x45ad3c(0x281)]=!![],this[_0x45ad3c(0x173)]=0x1);_0x5b6525[_0x45ad3c(0x1d3)](_0x206021[_0x45ad3c(0x220)])&&(this[_0x45ad3c(0x166)]=!![],this[_0x45ad3c(0x173)]=0x1);{const _0xc7585b=_0x206021['EventReactOn'],_0x1ca3ce=_0x5b6525['match'](_0xc7585b);if(_0x1ca3ce)for(const _0x534d7f of _0x1ca3ce){_0x534d7f['match'](_0xc7585b);const _0x16fd1a=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)](),_0x1191d4=String(RegExp['$2'])[_0x45ad3c(0x212)](',')['map'](_0x2a9585=>_0x2a9585[_0x45ad3c(0x136)]());this[_0x45ad3c(0x22f)](_0x16fd1a);const _0x38c87a=this[_0x45ad3c(0x273)][_0x16fd1a][_0x45ad3c(0x1eb)];VisuMZ['EventChainReact'][_0x45ad3c(0x143)](_0x38c87a,_0x1191d4);}}{const _0x1dd3dc=_0x206021['EventReactOff'],_0x13999c=_0x5b6525[_0x45ad3c(0x1d3)](_0x1dd3dc);if(_0x13999c)for(const _0x5b362a of _0x13999c){_0x5b362a[_0x45ad3c(0x1d3)](_0x1dd3dc);const _0x24f7c7=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)](),_0x3a7248=String(RegExp['$2'])['split'](',')['map'](_0x5f4447=>_0x5f4447[_0x45ad3c(0x136)]());this[_0x45ad3c(0x22f)](_0x24f7c7);const _0x4d85bc=this['_chainReactions'][_0x24f7c7][_0x45ad3c(0x275)];VisuMZ[_0x45ad3c(0x1d9)][_0x45ad3c(0x143)](_0x4d85bc,_0x3a7248);}}{const _0x32ed54=_0x206021['SpreadReactSpeed'],_0x473b3e=_0x5b6525[_0x45ad3c(0x1d3)](_0x32ed54);if(_0x473b3e)for(const _0x432b8a of _0x473b3e){_0x432b8a[_0x45ad3c(0x1d3)](_0x32ed54);const _0x3d0edc=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)](),_0x5fc1b8=String(RegExp['$2'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)](),_0x5419e6=String(RegExp['$3'])['split'](',')[_0x45ad3c(0x253)](_0x5ee653=>_0x5ee653[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)]()),_0x5101a5=Game_Event['EVENT_CHAIN_REACT_SPEED'],_0x2b24aa=_0x5101a5[_0x5fc1b8]||_0x5101a5[_0x45ad3c(0x283)];for(const _0x411bd7 of _0x5419e6){const _0x1aec0d=[_0x2b24aa,_0x3d0edc,_0x411bd7];this[_0x45ad3c(0x1bc)][_0x45ad3c(0x20d)](_0x1aec0d);}}}{const _0x924f68=_0x206021[_0x45ad3c(0x271)],_0x4b9a4d=_0x5b6525[_0x45ad3c(0x1d3)](_0x924f68);if(_0x4b9a4d)for(const _0x51235d of _0x4b9a4d){_0x51235d['match'](_0x924f68);const _0x4597b0=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)](),_0x233d7d=Number(RegExp['$2'])||0x1,_0x1b0079=String(RegExp['$3'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x40a5fb=>_0x40a5fb[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)]());for(const _0x5851cb of _0x1b0079){const _0x471349=[_0x233d7d,_0x4597b0,_0x5851cb];this[_0x45ad3c(0x1bc)][_0x45ad3c(0x20d)](_0x471349);}}}_0x5b6525['match'](_0x206021[_0x45ad3c(0x158)])&&(this[_0x45ad3c(0x191)]=String(RegExp['$1'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x2e02fe=>_0x2e02fe[_0x45ad3c(0x1f7)]()['trim']()),this[_0x45ad3c(0x173)]=0x0,this[_0x45ad3c(0x12a)]=![],this[_0x45ad3c(0x281)]=![],this[_0x45ad3c(0x166)]=![]);_0x5b6525['match'](_0x206021[_0x45ad3c(0x1cb)])&&(this['_pressurePlateSwitches'][_0x45ad3c(0x171)]<=0x0&&(this[_0x45ad3c(0x173)]=0x1,this[_0x45ad3c(0x12a)]=!![]));_0x5b6525['match'](_0x206021[_0x45ad3c(0x289)])&&(this[_0x45ad3c(0x12a)]=![]);{const _0x394c12=_0x206021[_0x45ad3c(0x1bb)],_0x3f1990=_0x5b6525['match'](_0x394c12);if(_0x3f1990)for(const _0x3ae360 of _0x3f1990){_0x3ae360[_0x45ad3c(0x1d3)](_0x394c12);const _0x333232=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)]();!this[_0x45ad3c(0x161)][_0x45ad3c(0x189)](_0x333232)&&this[_0x45ad3c(0x161)]['push'](_0x333232);}}{const _0x383897=_0x206021[_0x45ad3c(0x292)],_0x245bed=_0x5b6525[_0x45ad3c(0x1d3)](_0x383897);if(_0x245bed)for(const _0x5b87f3 of _0x245bed){_0x5b87f3[_0x45ad3c(0x1d3)](_0x383897);const _0x466205=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)](),_0x1411c5=String(RegExp['$2'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x10b204=>_0x10b204[_0x45ad3c(0x136)]());this[_0x45ad3c(0x28d)][_0x466205]=_0x1411c5;}}_0x5b6525[_0x45ad3c(0x1d3)](_0x206021['ChargeDir'])&&(this['_conductDir']=String(RegExp['$1'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x54a3c7=>_0x54a3c7[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)]()));if(_0x5b6525['match'](_0x206021['DecayFrameOn']))this[_0x45ad3c(0x16a)]=Math[_0x45ad3c(0x1d4)](Number(RegExp['$1']),0x1),this[_0x45ad3c(0x1e9)]=String(RegExp['$2'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x32eddf=>_0x32eddf[_0x45ad3c(0x136)]());else{if(_0x5b6525[_0x45ad3c(0x1d3)](_0x206021[_0x45ad3c(0x202)])){const _0x4fe00d=Game_Event[_0x45ad3c(0x1ce)],_0x4528ed=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)]();this['_decayOnDuration']=_0x4fe00d[_0x4528ed]||_0x4fe00d[_0x45ad3c(0x283)],this[_0x45ad3c(0x1e9)]=String(RegExp['$2'])[_0x45ad3c(0x212)](',')['map'](_0x3095d1=>_0x3095d1['trim']());}}if(_0x5b6525[_0x45ad3c(0x1d3)](_0x206021['DecayFrameOff']))this[_0x45ad3c(0x27d)]=Math[_0x45ad3c(0x1d4)](Number(RegExp['$1']),0x1),this['_decaySwitchOff']=String(RegExp['$2'])['split'](',')[_0x45ad3c(0x253)](_0x16f96d=>_0x16f96d['trim']());else{if(_0x5b6525['match'](_0x206021[_0x45ad3c(0x193)])){const _0x120991=Game_Event[_0x45ad3c(0x1ce)],_0x196729=String(RegExp['$1'])[_0x45ad3c(0x1b1)]()[_0x45ad3c(0x136)]();this[_0x45ad3c(0x27d)]=_0x120991[_0x196729]||_0x120991[_0x45ad3c(0x283)],this['_decaySwitchOff']=String(RegExp['$2'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x35a38d=>_0x35a38d[_0x45ad3c(0x136)]());}}_0x5b6525[_0x45ad3c(0x1d3)](_0x206021['ShallowSubmergeOn'])&&(this[_0x45ad3c(0x208)]=String(RegExp['$1'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x251e22=>_0x251e22[_0x45ad3c(0x136)]())),_0x5b6525[_0x45ad3c(0x1d3)](_0x206021[_0x45ad3c(0x199)])&&(this[_0x45ad3c(0x246)]=String(RegExp['$1'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x1802d9=>_0x1802d9[_0x45ad3c(0x136)]())),_0x5b6525['match'](_0x206021[_0x45ad3c(0x1a4)])&&(this[_0x45ad3c(0x24d)]=String(RegExp['$1'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x2db6bf=>_0x2db6bf[_0x45ad3c(0x136)]())),_0x5b6525['match'](_0x206021['DeepSubmergeOff'])&&(this['_submergeDeepOff']=String(RegExp['$1'])['split'](',')[_0x45ad3c(0x253)](_0x1aa7ed=>_0x1aa7ed['trim']())),_0x5b6525[_0x45ad3c(0x1d3)](_0x206021[_0x45ad3c(0x1cf)])&&(this[_0x45ad3c(0x17e)]=String(RegExp['$1'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x588ba9=>_0x588ba9[_0x45ad3c(0x136)]())),_0x5b6525[_0x45ad3c(0x1d3)](_0x206021[_0x45ad3c(0x284)])&&(this[_0x45ad3c(0x27c)]=String(RegExp['$1'])[_0x45ad3c(0x212)](',')[_0x45ad3c(0x253)](_0x541651=>_0x541651['trim']())),_0x5b6525[_0x45ad3c(0x1d3)](_0x206021['SubmergedEffect'])&&(this[_0x45ad3c(0x20f)]=!![]),_0x5b6525['match'](_0x206021[_0x45ad3c(0x1f2)])&&(this[_0x45ad3c(0x20f)]=!![],this[_0x45ad3c(0x241)]=Number(RegExp['$1'])),_0x5b6525['match'](_0x206021[_0x45ad3c(0x160)])&&(this[_0x45ad3c(0x293)]=!![],this['_priorityType']=0x0,this[_0x45ad3c(0x12a)]=![],this[_0x45ad3c(0x281)]=![],this['_canPull']=![]);},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x143)]=function(_0x176da5,_0x2c819f){const _0x5353b6=_0x4bad61;for(const _0x581018 of _0x2c819f){const _0xb6c410=/^\d+$/['test'](_0x581018);_0x176da5[_0x5353b6(0x20d)](_0xb6c410?Number(_0x581018):String(_0x581018)[_0x5353b6(0x1f7)]()[_0x5353b6(0x136)]());}},Game_Event['prototype'][_0x4bad61(0x1d2)]=function(_0x5afde4,_0x311ced){const _0x3fce51=_0x4bad61,_0x91bcc9=$gameMap[_0x3fce51(0x24c)],_0x5dc11e=this['_eventId']||0x0;for(const _0x3449be of _0x5afde4){let _0x40262e='';const _0x272bbf=/^\d+$/[_0x3fce51(0x183)](_0x3449be);if(_0x272bbf){const _0x68dd78=Number(_0x3449be);if(DataManager[_0x3fce51(0x125)](_0x68dd78))_0x40262e='%1,%2,Self\x20Switch\x20%3'['format'](_0x91bcc9,_0x5dc11e,_0x68dd78);else{if(DataManager[_0x3fce51(0x140)](_0x68dd78)){const _0x241de7=_0x3fce51(0x270)[_0x3fce51(0x1a5)](_0x91bcc9,_0x68dd78),_0x520518=!!$gameSelfSwitches['_data'][_0x241de7];_0x520518!==_0x311ced&&$gameSwitches[_0x3fce51(0x215)](_0x68dd78,_0x311ced);}else{const _0x532f23=!!$gameSwitches[_0x3fce51(0x1ef)][_0x68dd78];_0x532f23!==_0x311ced&&$gameSwitches[_0x3fce51(0x215)](_0x68dd78,_0x311ced);}}}else _0x40262e='%1,%2,%3'[_0x3fce51(0x1a5)](_0x91bcc9,_0x5dc11e,String(_0x3449be));if(_0x40262e!==''){const _0x4e72fe=!!$gameSelfSwitches[_0x3fce51(0x1ef)][_0x40262e];_0x4e72fe!==_0x311ced&&$gameSelfSwitches[_0x3fce51(0x215)](_0x40262e,_0x311ced);}}},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x20c)]=Game_Event['prototype'][_0x4bad61(0x205)],Game_Event['prototype']['erase']=function(){const _0x3f112e=_0x4bad61;if(this['isHeavyObject']())this[_0x3f112e(0x237)]();VisuMZ['EventChainReact'][_0x3f112e(0x20c)]['call'](this);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x157)]=function(){const _0x27bf7e=_0x4bad61;Game_Character[_0x27bf7e(0x185)][_0x27bf7e(0x157)]['call'](this),this['canSpreadEventChainReact']()&&this[_0x27bf7e(0x188)](),this['needsUpdateConduction']()&&this[_0x27bf7e(0x262)](),this['needsUpdateDecay']()&&this[_0x27bf7e(0x13c)](),this[_0x27bf7e(0x1dd)]()&&this['updateSubmerge']();},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x16d)]=function(){const _0x346d8f=_0x4bad61;if(this[_0x346d8f(0x267)])return![];if(this[_0x346d8f(0x217)]())return![];if(this[_0x346d8f(0x235)](this['x'],this['y']))return![];if(this[_0x346d8f(0x1f0)]())return![];if($gamePlayer['isOnLadder']())return![];return this[_0x346d8f(0x281)];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x259)]=function(){const _0x2885a0=_0x4bad61;if(this[_0x2885a0(0x267)])return![];if(this['isMoving']())return![];if(this[_0x2885a0(0x235)](this['x'],this['y']))return![];if(this[_0x2885a0(0x1f0)]())return![];if($gamePlayer['isOnLadder']())return![];return this[_0x2885a0(0x166)];},Game_Event['prototype']['reactToType']=function(_0x36aca2){const _0x31537c=_0x4bad61;if(!this[_0x31537c(0x273)])return;_0x36aca2=_0x36aca2[_0x31537c(0x1b1)]()['trim']();if(this[_0x31537c(0x273)]===undefined)return;if(this['_chainReactions'][_0x36aca2]===undefined)return;const _0x3d4b5f=this[_0x31537c(0x273)][_0x36aca2][_0x31537c(0x1eb)],_0xf805ed=this['_chainReactions'][_0x36aca2][_0x31537c(0x275)];this[_0x31537c(0x1d2)](_0x3d4b5f,!![]),this[_0x31537c(0x1d2)](_0xf805ed,![]);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1d8)]=function(){const _0x5018eb=_0x4bad61;if(!this[_0x5018eb(0x1bc)])return![];if($gameMessage['isBusy']())return![];if(this['isMoving']())return![];if(Imported[_0x5018eb(0x1d7)]&&$gameMap[_0x5018eb(0x23a)]())return![];return this[_0x5018eb(0x1bc)]['length']>0x0;},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x188)]=function(){const _0x1dd5d8=_0x4bad61;for(const _0x5d5bf7 of this['_chainSpreads']){const _0x12a1c6=_0x5d5bf7[0x0];if(Graphics[_0x1dd5d8(0x290)]%_0x12a1c6!==0x0)continue;const _0x30a2d9=_0x5d5bf7[0x1],_0x3b050f=_0x5d5bf7[0x2];$gameMap[_0x1dd5d8(0x1e2)](this,_0x30a2d9,_0x3b050f);}},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x25a)]=function(){const _0x6a56b6=_0x4bad61;if(this['_erased'])return![];if(this[_0x6a56b6(0x12a)]!==undefined)return this[_0x6a56b6(0x12a)];return this[_0x6a56b6(0x12a)]||[];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1f6)]=function(){return this['getPressurePlateSwitches']()['length']>0x0;},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x24b)]=function(){const _0x3ed17f=_0x4bad61;if(this[_0x3ed17f(0x267)])return[];return this[_0x3ed17f(0x191)]||[];},Game_Event[_0x4bad61(0x185)]['processPressurePlateChanges']=function(){const _0x2d5baf=_0x4bad61;let _0x1552bd=this[_0x2d5baf(0x247)]();this['applyPressurePlateSwitchChange'](_0x1552bd);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x247)]=function(){const _0x5a6483=_0x4bad61,_0x446043=-this[_0x5a6483(0x250)][_0x5a6483(0x15e)],_0x527295=this[_0x5a6483(0x250)][_0x5a6483(0x184)],_0x4fa631=-this[_0x5a6483(0x250)]['up'],_0x517ef1=this[_0x5a6483(0x250)]['down'];for(let _0x534402=_0x446043;_0x534402<=_0x527295;_0x534402++){for(let _0x5c2d1a=_0x4fa631;_0x5c2d1a<=_0x517ef1;_0x5c2d1a++){if($gamePlayer[_0x5a6483(0x25a)]()){if($gamePlayer[_0x5a6483(0x255)](this['x']+_0x534402,this['y']+_0x5c2d1a)&&!$gamePlayer[_0x5a6483(0x222)]()&&!$gamePlayer[_0x5a6483(0x22d)]())return!![];}if($gamePlayer[_0x5a6483(0x194)]()[_0x5a6483(0x230)]()&&!$gamePlayer[_0x5a6483(0x222)]()&&!$gamePlayer[_0x5a6483(0x22d)]()){const _0x2fc078=$gamePlayer[_0x5a6483(0x194)]()[_0x5a6483(0x1ef)]['filter'](_0x3c276b=>_0x3c276b[_0x5a6483(0x230)]()&&_0x3c276b[_0x5a6483(0x163)]()!==''&&!_0x3c276b[_0x5a6483(0x22d)]());if(_0x2fc078[_0x5a6483(0x19f)](_0x32dc2a=>_0x32dc2a[_0x5a6483(0x255)](this['x']+_0x534402,this['y']+_0x5c2d1a)))return!![];}for(const _0x5129b6 of $gameMap['vehicles']()){if(!_0x5129b6)continue;if(_0x5129b6[_0x5a6483(0x24c)]!==$gameMap[_0x5a6483(0x149)]())continue;if(!_0x5129b6[_0x5a6483(0x213)]())continue;if(_0x5129b6[_0x5a6483(0x255)](this['x']+_0x534402,this['y']+_0x5c2d1a))return!![];}const _0x206012=$gameMap['eventsXy'](this['x']+_0x534402,this['y']+_0x5c2d1a)[_0x5a6483(0x1ea)](_0x44ad6f=>_0x44ad6f[_0x5a6483(0x25a)]()&&!_0x44ad6f[_0x5a6483(0x22d)]());if(_0x206012[_0x5a6483(0x171)]>0x0)return!![];}}return![];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1ec)]=function(_0x24ac8e){const _0xa01c47=_0x4bad61,_0x25c98d=this[_0xa01c47(0x24b)]();this['eventChainReactSwitchChange'](_0x25c98d,_0x24ac8e);},Game_Event[_0x4bad61(0x185)]['isConductor']=function(){const _0x200de7=_0x4bad61;return this[_0x200de7(0x282)]()[_0x200de7(0x171)]>0x0;},Game_Event[_0x4bad61(0x185)]['getConductionTypes']=function(){const _0x289b00=_0x4bad61;if(this[_0x289b00(0x267)])return[];return Object[_0x289b00(0x137)](this['_conductTypes']||{});},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1a9)]=function(_0x200eb3){const _0x2e8e7d=_0x4bad61;return _0x200eb3=_0x200eb3[_0x2e8e7d(0x1b1)]()[_0x2e8e7d(0x136)](),this[_0x2e8e7d(0x282)]()[_0x2e8e7d(0x189)](_0x200eb3);},Game_Event['prototype']['clearConductionState']=function(){const _0x3d866d=_0x4bad61;this[_0x3d866d(0x127)]={};},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1c3)]=function(_0x479e01,_0x408720){const _0x3750f7=_0x4bad61;_0x479e01=_0x479e01[_0x3750f7(0x1b1)]()['trim'](),this[_0x3750f7(0x127)]=this['_conductionState']||{},this[_0x3750f7(0x127)][_0x479e01]=_0x408720;},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x172)]=function(_0x8cd9e4){const _0x4dfb45=_0x4bad61;return _0x8cd9e4=_0x8cd9e4['toLowerCase']()['trim'](),this[_0x4dfb45(0x127)]=this[_0x4dfb45(0x127)]||{},this[_0x4dfb45(0x127)][_0x8cd9e4]||![];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1d6)]=function(){const _0x3a9d96=_0x4bad61;return this['getChargeTypes']()[_0x3a9d96(0x171)]>0x0;},Game_Event[_0x4bad61(0x185)]['getChargeTypes']=function(){const _0x68584=_0x4bad61;if(this[_0x68584(0x267)])return[];return this['_chargeTypes']||[];},Game_Event[_0x4bad61(0x185)]['getConductDirections']=function(){const _0xdc7f95=_0x4bad61;if(this[_0xdc7f95(0x267)])return[];return this[_0xdc7f95(0x21e)]||[];},Game_Event[_0x4bad61(0x185)]['needsUpdateConduction']=function(){const _0x4aa089=_0x4bad61;if(!this[_0x4aa089(0x22b)]()&&!this[_0x4aa089(0x1d6)]())return![];this[_0x4aa089(0x1d0)]=this[_0x4aa089(0x1d0)]||{};if(this[_0x4aa089(0x1d0)][_0x4aa089(0x1a6)]!==this['x'])return!![];if(this[_0x4aa089(0x1d0)][_0x4aa089(0x1b7)]!==this['y'])return!![];if(this[_0x4aa089(0x1d0)][_0x4aa089(0x22e)]!==this['jumpHeight']())return!![];if(this[_0x4aa089(0x1d0)][_0x4aa089(0x277)]!==this[_0x4aa089(0x277)])return!![];return![];},Game_Event['prototype'][_0x4bad61(0x262)]=function(){const _0x2306ee=_0x4bad61;this['_conductCache']=this[_0x2306ee(0x1d0)]||{},this[_0x2306ee(0x1d0)][_0x2306ee(0x1a6)]=this['x'],this[_0x2306ee(0x1d0)][_0x2306ee(0x1b7)]=this['y'],this[_0x2306ee(0x1d0)]['jumpHeight']=this['jumpHeight'](),this[_0x2306ee(0x1d0)]['_pageIndex']=this['_pageIndex'],$gameMap[_0x2306ee(0x13d)]();},Game_Event[_0x4bad61(0x185)]['turnOffAllConductions']=function(){this['clearConductionState']();},Game_Event['prototype'][_0x4bad61(0x142)]=function(){const _0x12c176=_0x4bad61,_0x2656a2=this[_0x12c176(0x25e)]();for(const _0x3e8fa7 of _0x2656a2){this[_0x12c176(0x19a)](_0x3e8fa7);}},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x19a)]=function(_0xe505bc){const _0x4a1bbe=_0x4bad61,_0x2d1ab7=this[_0x4a1bbe(0x1b4)]();for(const _0x5ea273 of _0x2d1ab7){this[_0x4a1bbe(0x120)](_0x5ea273,_0xe505bc);}},Game_Event[_0x4bad61(0x185)]['spreadChargeAtLocation']=function(_0x27a152,_0x5a9e37){const _0xcd1e7f=_0x4bad61,_0x323da7=VisuMZ['EventChainReact'][_0xcd1e7f(0x229)](this,_0x27a152),_0x34e074=-this[_0xcd1e7f(0x250)][_0xcd1e7f(0x15e)],_0x2fc06e=this['_addedHitbox'][_0xcd1e7f(0x184)],_0x5982d4=-this['_addedHitbox']['up'],_0x40f349=this[_0xcd1e7f(0x250)][_0xcd1e7f(0x26b)];for(let _0x2361ca=_0x34e074;_0x2361ca<=_0x2fc06e;_0x2361ca++){for(let _0x148380=_0x5982d4;_0x148380<=_0x40f349;_0x148380++){for(const _0xbab466 of _0x323da7){const _0x4297d6=(_0xbab466['x']??-0x1)+_0x2361ca,_0x561bd8=(_0xbab466['y']??-0x1)+_0x148380;$gameMap[_0xcd1e7f(0x141)](_0x5a9e37,_0x4297d6,_0x561bd8);}}}},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x216)]=function(){const _0x1b88f2=_0x4bad61,_0x123ad6=this[_0x1b88f2(0x282)]();for(const _0x23f88e of _0x123ad6){const _0x5d44e0=this['_conductTypes'][_0x23f88e]||[],_0x110d8e=this['getConductionState'](_0x23f88e);this[_0x1b88f2(0x1d2)](_0x5d44e0,_0x110d8e);}this[_0x1b88f2(0x263)]();const _0xa6df84=SceneManager[_0x1b88f2(0x214)],_0x449146=_0xa6df84?_0xa6df84['_spriteset']:null;if(_0x449146){const _0x409008=_0x449146[_0x1b88f2(0x1d5)](this);if(_0x409008)_0x409008[_0x1b88f2(0x16e)]();}},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x15a)]=function(){const _0x466540=_0x4bad61;if($gameMessage[_0x466540(0x223)]())return![];if(Imported[_0x466540(0x1d7)]&&$gameMap[_0x466540(0x23a)]())return![];return this[_0x466540(0x16a)]>0x0||this['_decayOffDuration']>0x0;},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x13c)]=function(){this['updateDecayOn'](),this['updateDecayOff']();},Game_Event['prototype']['updateDecayOn']=function(){const _0x29e9ca=_0x4bad61;if(this['_decayOnDuration']<=0x0)return;this[_0x29e9ca(0x16a)]--;if(this[_0x29e9ca(0x16a)]<=0x0){const _0x3ebf11=this[_0x29e9ca(0x1e9)];this[_0x29e9ca(0x1d2)](_0x3ebf11,!![]);}},Game_Event[_0x4bad61(0x185)]['updateDecayOff']=function(){const _0x2cb9ee=_0x4bad61;if(this[_0x2cb9ee(0x27d)]<=0x0)return;this['_decayOffDuration']--;if(this['_decayOffDuration']<=0x0){const _0x2b3380=this[_0x2cb9ee(0x152)];this[_0x2cb9ee(0x1d2)](_0x2b3380,![]);}},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1b5)]=function(){const _0x5242fe=_0x4bad61;if(this[_0x5242fe(0x267)])return![];return this[_0x5242fe(0x208)][_0x5242fe(0x171)]>0x0||this[_0x5242fe(0x246)][_0x5242fe(0x171)]>0x0;},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1a0)]=function(){const _0x901632=_0x4bad61;if(this[_0x901632(0x267)])return![];return this[_0x901632(0x24d)][_0x901632(0x171)]>0x0||this[_0x901632(0x14e)][_0x901632(0x171)]>0x0;},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x254)]=function(){const _0x352f6c=_0x4bad61;if(this[_0x352f6c(0x267)])return![];return this[_0x352f6c(0x17e)][_0x352f6c(0x171)]>0x0||this[_0x352f6c(0x27c)][_0x352f6c(0x171)]>0x0;},VisuMZ['EventChainReact'][_0x4bad61(0x1e5)]=Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1c8)],Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1c8)]=function(_0x121dc3,_0x38e14b,_0x3dc864){const _0x164dec=_0x4bad61;if(this['hasMoveOnlyRegions']()&&!this[_0x164dec(0x11e)](_0x121dc3,_0x38e14b,_0x3dc864))return![];if($gameMap[_0x164dec(0x234)](_0x121dc3,_0x38e14b,_0x3dc864,'event'))return!![];if($gameMap['isRegionForbidPass'](_0x121dc3,_0x38e14b,_0x3dc864,_0x164dec(0x181)))return![];if(this['isSubmergePassable'](_0x121dc3,_0x38e14b,_0x3dc864))return!![];return VisuMZ['EventChainReact'][_0x164dec(0x1e5)][_0x164dec(0x195)](this,_0x121dc3,_0x38e14b,_0x3dc864);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x16f)]=function(_0xb19f43,_0x15dd9d,_0x50e021){const _0x51c9d1=_0x4bad61,_0x37fd4a=$gameMap[_0x51c9d1(0x17d)](_0xb19f43,_0x50e021),_0x17e296=$gameMap['roundYWithDirection'](_0x15dd9d,_0x50e021);if($gameMap[_0x51c9d1(0x1d1)](_0x37fd4a,_0x17e296)&&this['canSubmergeShallow']())return!![];if($gameMap[_0x51c9d1(0x21f)](_0x37fd4a,_0x17e296)&&!$gameMap[_0x51c9d1(0x1d1)](_0x37fd4a,_0x17e296)&&this[_0x51c9d1(0x1a0)]())return!![];return![];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x1dd)]=function(){const _0x3ea1d4=_0x4bad61;if(this[_0x3ea1d4(0x267)])return![];if(!this[_0x3ea1d4(0x1b5)]()&&!this[_0x3ea1d4(0x1a0)]()&&!this['canResurface']())return![];this[_0x3ea1d4(0x25f)]=this[_0x3ea1d4(0x25f)]||{};if(this[_0x3ea1d4(0x25f)][_0x3ea1d4(0x1a6)]!==this['x'])return!![];if(this['_submergeCache']['lastY']!==this['y'])return!![];if(this[_0x3ea1d4(0x25f)][_0x3ea1d4(0x22e)]!==this[_0x3ea1d4(0x22e)]())return!![];if(this[_0x3ea1d4(0x25f)][_0x3ea1d4(0x277)]!==this[_0x3ea1d4(0x277)])return!![];return![];},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x12c)]=function(){const _0x256312=_0x4bad61,_0xd07992=this['isSubmerged'](this[_0x256312(0x25f)][_0x256312(0x1a6)]??this['x'],this['_submergeCache']['lastY']??this['y']),_0x59eb6c=this[_0x256312(0x235)](this[_0x256312(0x25f)][_0x256312(0x1a6)]??this['x'],this[_0x256312(0x25f)][_0x256312(0x1b7)]??this['y']);this[_0x256312(0x25f)][_0x256312(0x1a6)]=this['x'],this[_0x256312(0x25f)]['lastY']=this['y'],this[_0x256312(0x25f)]['jumpHeight']=this['jumpHeight'](),this[_0x256312(0x25f)]['_pageIndex']=this[_0x256312(0x277)],$gameMap['isBoatPassable'](this['x'],this['y'])&&this[_0x256312(0x1b5)]()&&(this[_0x256312(0x1d2)](this['_submergeShallowOn']||[],!![]),this[_0x256312(0x1d2)](this[_0x256312(0x246)]||[],![])),$gameMap['isShipPassable'](this['x'],this['y'])&&!$gameMap[_0x256312(0x1d1)](this['x'],this['y'])&&this[_0x256312(0x1a0)]()&&(this[_0x256312(0x1d2)](this[_0x256312(0x24d)]||[],!![]),this[_0x256312(0x1d2)](this[_0x256312(0x14e)]||[],![])),!_0xd07992&&this[_0x256312(0x1e3)](this['x'],this['y'])&&SoundManager[_0x256312(0x123)](),_0x59eb6c&&!this[_0x256312(0x1e3)](this['x'],this['y'])&&(this[_0x256312(0x1d2)](this['_resurfaceOn']||[],!![]),this['eventChainReactSwitchChange'](this[_0x256312(0x27c)]||[],![]),SoundManager[_0x256312(0x123)]());},Game_Event['prototype'][_0x4bad61(0x1e3)]=function(_0x1990e1,_0x308edb){const _0xe4416=_0x4bad61;if(!this[_0xe4416(0x1b5)]()&&!this['canSubmergeDeep']())return![];return $gameMap[_0xe4416(0x1d1)](_0x1990e1,_0x308edb)||$gameMap[_0xe4416(0x21f)](_0x1990e1,_0x308edb);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x235)]=function(_0x28e748,_0x50cfff){const _0x49afce=_0x4bad61;return $gameMap[_0x49afce(0x210)](_0x28e748,_0x50cfff)&&this[_0x49afce(0x1e3)](_0x28e748,_0x50cfff);},Game_Event[_0x4bad61(0x185)][_0x4bad61(0x239)]=function(){const _0x2e7734=_0x4bad61;if(this[_0x2e7734(0x267)])return![];return this[_0x2e7734(0x293)];},Sprite_Character[_0x4bad61(0x1a1)]={'updateFrequency':VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x130)][_0x4bad61(0x156)][_0x4bad61(0x256)]||0x4,'oscillationDistance':VisuMZ[_0x4bad61(0x1d9)]['Settings'][_0x4bad61(0x156)][_0x4bad61(0x25b)]||0x8,'oscillationSpeed':VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x130)][_0x4bad61(0x156)][_0x4bad61(0x1f9)]||0.05},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x24a)]=Sprite_Character[_0x4bad61(0x185)][_0x4bad61(0x258)],Sprite_Character['prototype'][_0x4bad61(0x258)]=function(_0x2f59f0){const _0x440923=_0x4bad61;VisuMZ[_0x440923(0x1d9)]['Sprite_Character_initialize'][_0x440923(0x195)](this,_0x2f59f0),this[_0x440923(0x257)]();},Sprite_Character['prototype'][_0x4bad61(0x257)]=function(){const _0xea08ce=_0x4bad61;if(!this[_0xea08ce(0x168)])return;if(this[_0xea08ce(0x168)][_0xea08ce(0x267)])return;if(!this[_0xea08ce(0x18c)]())return;this['_submergeRng']=Math[_0xea08ce(0x28f)](0xf4240),this[_0xea08ce(0x1a8)]=this['_character'][_0xea08ce(0x1ab)](),this[_0xea08ce(0x16c)]=Sprite_Character['SUBMERGE'][_0xea08ce(0x25b)];},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x1e6)]=Sprite_Character[_0x4bad61(0x185)]['updateFrame'],Sprite_Character[_0x4bad61(0x185)][_0x4bad61(0x148)]=function(){const _0x4f91da=_0x4bad61;VisuMZ['EventChainReact'][_0x4f91da(0x1e6)][_0x4f91da(0x195)](this),this[_0x4f91da(0x18c)]()?this[_0x4f91da(0x14c)]():this[_0x4f91da(0x26a)]();},Sprite_Character['prototype'][_0x4bad61(0x18c)]=function(){const _0x741d09=_0x4bad61;return this[_0x741d09(0x168)]&&this['_character']['submergedEffect']();},Sprite_Character[_0x4bad61(0x185)][_0x4bad61(0x26a)]=function(){const _0x28518b=_0x4bad61;this[_0x28518b(0x1ed)]=0x0,this['_submergeHeight']=0x0,this[_0x28518b(0x16c)]=0x0,this[_0x28518b(0x252)]=0x0;},Sprite_Character[_0x4bad61(0x185)][_0x4bad61(0x14c)]=function(){const _0x544a3f=_0x4bad61,_0x3ffba2=this['_frame'];this[_0x544a3f(0x1ed)]=this[_0x544a3f(0x1ed)]||Math['randomInt'](0xf4240);const _0xecb5ee=this[_0x544a3f(0x1ed)]+Graphics[_0x544a3f(0x290)];this['_submergeHeight']=this[_0x544a3f(0x1a8)]||0x0;if(Graphics[_0x544a3f(0x290)]%Sprite_Character['SUBMERGE'][_0x544a3f(0x256)]===0x0&&!this[_0x544a3f(0x168)]['isMoving']()){if(this[_0x544a3f(0x168)][_0x544a3f(0x1ab)]()>this[_0x544a3f(0x1a8)])this[_0x544a3f(0x1a8)]++;else this[_0x544a3f(0x168)][_0x544a3f(0x1ab)]()<this[_0x544a3f(0x1a8)]?this[_0x544a3f(0x1a8)]--:(this[_0x544a3f(0x16c)]=this[_0x544a3f(0x16c)]||0x0,this[_0x544a3f(0x16c)]=Math[_0x544a3f(0x1ac)](this[_0x544a3f(0x16c)]+0x1,Sprite_Character[_0x544a3f(0x1a1)][_0x544a3f(0x25b)]));}let _0x2440bd=_0x3ffba2[_0x544a3f(0x201)];_0x2440bd-=this[_0x544a3f(0x1a8)]||0x0;if(this['_character'][_0x544a3f(0x1ab)]()===this[_0x544a3f(0x1a8)]){const _0x5947d3=Sprite_Character['SUBMERGE'][_0x544a3f(0x1f9)],_0x30b29d=Math[_0x544a3f(0x27f)]((this[_0x544a3f(0x16c)]||0x0)/0x2);this[_0x544a3f(0x252)]=Math[_0x544a3f(0x192)](Math[_0x544a3f(0x211)](_0xecb5ee*_0x5947d3)*_0x30b29d+_0x30b29d),_0x2440bd-=this[_0x544a3f(0x252)];}this[_0x544a3f(0x276)](_0x3ffba2['x'],_0x3ffba2['y'],_0x3ffba2['width'],_0x2440bd);},VisuMZ[_0x4bad61(0x1d9)][_0x4bad61(0x286)]=Sprite_Character[_0x4bad61(0x185)][_0x4bad61(0x1fe)],Sprite_Character[_0x4bad61(0x185)][_0x4bad61(0x1fe)]=function(){const _0x95b34b=_0x4bad61;VisuMZ[_0x95b34b(0x1d9)][_0x95b34b(0x286)][_0x95b34b(0x195)](this),this['canUpdateSubmergedOffset']()&&this[_0x95b34b(0x20b)]();},Sprite_Character[_0x4bad61(0x185)]['canUpdateSubmergedOffset']=function(){const _0x428392=_0x4bad61;if(SceneManager[_0x428392(0x214)])return![];if(SceneManager['_scene']['_spriteset'])return![];if(!this[_0x428392(0x168)])return![];if(!this['_character']['isNormalPriority']())return![];const _0x223c61=this['_character']['x'],_0x3efee6=this[_0x428392(0x168)]['y'];return $gameMap[_0x428392(0x210)](_0x223c61,_0x3efee6);},Sprite_Character[_0x4bad61(0x185)][_0x4bad61(0x20b)]=function(){const _0x19898d=_0x4bad61,_0x378fc3=this[_0x19898d(0x168)]['x'],_0x44d807=this[_0x19898d(0x168)]['y'],_0x43256f=$gameTemp['submergedEventsXy'](_0x378fc3,_0x44d807);if(_0x43256f[_0x19898d(0x171)]<=0x0)return;const _0x2759f0=SceneManager['_scene'][_0x19898d(0x27e)];if(!_0x2759f0)return;const _0xd9b12e=_0x43256f[_0x19898d(0x253)](_0x34d116=>_0x2759f0[_0x19898d(0x1d5)](_0x34d116));if(_0xd9b12e[_0x19898d(0x171)]<=0x0)return;const _0x81f6e5=Math[_0x19898d(0x1d4)](..._0xd9b12e[_0x19898d(0x253)](_0x49bfa3=>_0x49bfa3[_0x19898d(0x252)]||0x0),0x0);this['y']+=_0x81f6e5-this['_character'][_0x19898d(0x12d)]();};