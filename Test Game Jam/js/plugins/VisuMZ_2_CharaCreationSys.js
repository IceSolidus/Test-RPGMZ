//=============================================================================
// VisuStella MZ - Character Creation System
// VisuMZ_2_CharaCreationSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_CharaCreationSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CharaCreationSys = VisuMZ.CharaCreationSys || {};
VisuMZ.CharaCreationSys.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.09] [CharaCreationSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Character_Creation_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Character Creation System allows players to pick and choose how they
 * want their party members to be created. Players can pick from different
 * classes, appearances, traits, and names for their desired characters. This
 * plugin allows your game to have a Character Creation System so that your
 * players can add a bit more of a personal touch into their game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Character Creation System is called scene in which the player can create
 *   characters of their liking.
 * * Created character features range from selecting classes, appearances,
 *   traits (if using the VisuMZ Elements and Status Menu Core), and name.
 * * Some classes can be locked behind switches, meaning they cannot be picked
 *   by the player in the Character Creation System until those switches are
 *   turned on, functioning as an unlocking system. Classes can cost gold
 *   and/or items in order to be selected, making the possibility of having
 *   premium classes.
 * * Selected appearances allow the player to pick a set of graphics that will
 *   define the created character's face graphic, map sprite graphic, battle
 *   sprite graphic, menu portrait, and battle portrait (for any related
 *   VisuStella plugins). Each class can have a batch of graphics assigned to
 *   them for the player to pick and choose from.
 * * If the player wants more, the player can (optionally) pick graphic sets
 *   from a global pool of image combinations. These graphic sets can also be
 *   locked away behind switches, allowing for an unlocking system. If desired,
 *   you can let players pick graphic sets from other classes as  well.
 * * If using the VisuStella MZ Elements and Status Menu Core plugin, traits
 *   can be selected for each of the 10 available Trait Types. Trait Sets can
 *   be selected and picked. Some of them can even require switches to appear,
 *   cost gold and items to pick, and more.
 * * Players can enter in the names of their created characters or select from
 *   randomized name pools that are defined by the plugin.
 * * Other scenes have been added for the player to select created characters
 *   to dismiss from the player's party or even retrain them to bring them back
 *   to the Character Creation System for further customization.
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
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
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
 * Follow these instructions to use this plugin properly.
 *
 * ---
 *
 * Step 1: Create Extra Actor Slots
 * 
 * In order for this plugin to be able to allow players to create their own
 * characters, the game must have enough actor slots. Do this by raising the
 * maximum number of actors in the Database.
 * 
 * While you can use the plugin to overwrite specific actors, you would
 * normally want the plugin to automatically select unused actors by itself.
 * Either leave the unused actors with nothing in their name or <Empty> as
 * their database name. The <Empty> character must not be in your party.
 * 
 * Player created characters can still be affected by traits, notes, max level
 * differences between them so keep these "empty actors" the same if possible.
 * The plugin chooses not to interfere with these details in case they are
 * needed by other plugins for any specific reason.
 * 
 * The maximum number of created characters a player can create will depend on
 * the number of "empty actors" available in the database in order to prevent
 * flooding the game.
 *
 * ---
 *
 * Step 2: Make a Plugin Command on a Regular Map
 * 
 * Create a new event on a map. Add a "Scene: Open Character Creation Scene"
 * Plugin Command from this plugin and keep the "Actor ID" parameter at "0".
 * This will have the Plugin Command automatically select the first available
 * "empty actor" in the database.
 * 
 * While not needed, it is recommended that the "Fail Switch", "Join Switch",
 * and "Register Variable" parameters are all bound to switches and variables.
 * You can use "Conditional Branch" events after this Plugin Command runs in
 * order to tell if a character failed to be created (using the "Fail switch"),
 * successfully joined (using the "Join Switch"), and which actor ID is used
 * to create the new character (using the "Register Variable").
 * 
 * ---
 * 
 * Step 3: Play Test Character Creation
 * 
 * Go ahead and test the new Character Creation feature. If all the other
 * Plugin Parameters are left as default and the RPG Maker MZ default assets
 * are still present, you'll see that the first 8 classes are available to be
 * selected along with a batch of graphics to pick from.
 * 
 * Otherwise, if you have changed these for your game project, you'll need to
 * adjust these accordingly in the Plugin Parameters. There is no plug and play
 * aspect to this particular feature for games that have fewer than 8 classes
 * and have removed their default RPG Maker MZ assets.
 *
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * VisuMZ_1_MainMenuCore
 * 
 * If these plugins are installed, you can set battle portraits and menu
 * portraits for selectable appearances.
 * 
 * ---
 * 
 * VisuMZ_1_ElementStatusCore
 * 
 * If installed and the other Plugin Parameters are enabled, the player can
 * select traits for the created characters. This step during the character
 * creation process will not be available otherwise. Character biographies can
 * also be generated for this plugin.
 * 
 * ---
 *
 * VisuMZ_1_MessageCore
 *
 * Allows usage of Auto-Word Wrap for class descriptions when selecting which
 * class to create a character as. Likewise, created character biographies for
 * the Elements and Status Menu Core with Auto-Word Wrap.
 *
 * ---
 * 
 * VisuMZ_3_BattleVoices
 * 
 * If installed, allows the player to select what battle voice set to apply to
 * the character in question.
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
 * === Actor-Related Notetags ===
 * 
 * ---
 *
 * <Cannot Select Dismiss>
 *
 * - Used for: Actor Notetags
 * - This actor cannot be selected as a dismissal target through the actor
 *   selection scene.
 * - This actor can still be manually dismissed from the party through event
 *   commands and/or script calls.
 * 
 * ---
 * 
 * <Cannot Select Retrain>
 * 
 * - Used for: Actor Notetags
 * - This actor cannot be selected as a retrain target through the actor
 *   selection scene.
 * - This actor can still be manually retrained by having the associated Plugin
 *   Command directly target the actor (instead of using 0 for selection).
 *
 * ---
 * 
 * === Class-Related Notetags ===
 *
 * <Icon: x>
 *
 * - Used for: Class Notetags
 * - Sets the icon used for this class to icon index 'x'.
 * - Replace 'x' with a number representing the index of the icon you wish to
 *   use as a marker for this class.
 *
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. These will
 * require that you have VisuMZ_1_MessageCore in order for these to work.
 *
 * === Character Creation-Related Text Codes ===
 * 
 * These text codes require VisuMZ_1_MessageCore!
 * 
 * ---
 *
 * -----------------------------------   --------------------------------------
 * Text Code                             Effect (Show Choice Text Only)
 * -----------------------------------   --------------------------------------
 * 
 * <Enable if Can Create Characters>     Makes the choice enabled if there are
 *                                       any available slots to create new
 *                                       characters with using the plugin. If
 *                                       not, this choice becomes disabled.
 *                                       Requires VisuMZ_1_MessageCore!
 * 
 * <Enable if Can Dismiss Characters>    Makes the choice enabled if there are
 *                                       members currently in the party that
 *                                       have been created with the plugin's
 *                                       Character Creation System that can be
 *                                       dismissed via selection.
 *                                       Requires VisuMZ_1_MessageCore!
 * 
 * <Enable if Can Retrain Characters>    Makes the choice enabled if there are
 *                                       members currently in the party that
 *                                       have been created with the plugin's
 *                                       Character Creation System that can be
 *                                       retrained via selection.
 *                                       Requires VisuMZ_1_MessageCore!
 * 
 * <Enable if Have Created Characters>   Makes the choice enabled if there are
 *                                       members currently in the party that
 *                                       have been created with the plugin's
 *                                       Character Creation System.
 *                                       Requires VisuMZ_1_MessageCore!
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
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Create Character Process
 * - Opens the Character Creation Scene.
 * - Cannot be used in battle.
 * - Does not affect <Empty> named characters that have joined the party.
 *
 *   Actor ID?:
 *   - Pick a specific actor to create a character onto.
 *   - Use 0 for first available unnamed actor or named <Empty>.
 *
 *     Actor Level:
 *     - What level should the actor be created at?
 *
 *     Default Name:
 *     - Enter the name you want this actor to have as default.
 *     - The name can still be changed.
 *     - Leave empty for random.
 * 
 *   Data Gathering:
 * 
 *     Fail Switch:
 *     - If searching for first available unnamed actor and is unable to do so
 *       successfully, this Switch turns on.
 *     - This is mainly used for event systems.
 * 
 *     Join Switch:
 *     - If an actor is successfully recruited, turn Switch ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Register Variable:
 *     - When searching for first available unnamed actor, register that
 *       actor's ID number to this variable.
 *     - This is mainly used for event systems.
 * 
 *   Other Settings:
 *
 *     Cancel -> Exit?:
 *     - Allow cancel button let you exit the scene?
 *
 *     Show Gold Window?:
 *     - Shows/hides the gold window.
 *     - Gold costs still apply.
 *
 * ---
 *
 * Scene: Dismiss Select Created Character
 * - Opens the Selected Character Dismissal Scene.
 * - Cannot be used in battle.
 * 
 *   Data Gathering:
 * 
 *     Fail Switch:
 *     - If there is no created character to dismiss from the player's party,
 *       this Switch turns on.
 *     - This is mainly used for event systems.
 * 
 *     Dismiss Switch:
 *     - If an actor is successfully dismissed, turn Switch ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Register Variable:
 *     - When a character is dismissed from the player party, register that
 *       actor's ID number to this variable.
 *     - This is mainly used for event systems.
 *
 * ---
 *
 * Scene: Retrain Created Character
 * - Retrains a created character.
 * - Cannot be used in battle.
 *
 *   Actor ID?:
 *   - Pick a specific actor to retrain.
 *   - Use 0 if you want the player to select the character.
 *
 *     Change Class?:
 *     - Is the target actor's class changeable?
 * 
 *       Preserve Level?:
 *       - If the actor retrains its class, preserve the actor's
 *         previous level?
 *
 *     Change Appearance?:
 *     - Is the target actor's appearance changeable?
 *
 *     Change Traits?:
 *     - Are the target actor's traits changeable?
 *     - Requires VisuMZ_1_ElementStatusCore!
 * 
 *     Change Battle Voice?
 *     - Is the target actor's battle voice changeable?
 *     - Requires VisuMZ_3_BattleVoices!
 *
 *     Change Name?:
 *     - Is the target actor's name changeable?
 *
 *     Reset Profile?:
 *     - Reset target actor's profile or keep it the same?
 *
 *     Reset Biography?:
 *     - Reset target actor's biography or keep it the same?
 *     - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   Data Gathering:
 * 
 *     Fail Switch:
 *     - If there is no actor to retrain, then this switch is turned ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Retrain Switch:
 *     - If an actor is successfully retrained, turn Switch ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Register Variable:
 *     - This variable records the actor ID of the retrained actor if the actor
 *       is successfully retrained.
 *     - This is mainly used for event systems.
 * 
 *   Other Settings:
 *
 *     Show Gold Window?:
 *     - Shows/hides the gold window.
 *     - Gold costs still apply.
 *
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 *
 * Variable: Set Created Character Count
 * - Target variable will have a value equal to the total number of created
 *   characters in the player's party.
 *
 *   Variable ID:
 *   - Target variable will have a value equal to the total number of created
 *     characters in the player's party.
 *
 * ---
 *
 * Variable: Set Available Empty Character Slots
 * - Target variable will have a value equal to the total number of empty
 *   character slots left available.
 *
 *   Variable ID:
 *   - Target variable will have a value equal to the total number of empty
 *     character slots left available.
 *
 * ---
 *
 * Variable: Set Total Empty Character Slots
 * - Target variable will have a value equal to the total number of empty
 *   character slots in total.
 *
 *   Variable ID:
 *   - Target variable will have a value equal to the total number of empty
 *     character slots in total.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Class List Settings
 * ============================================================================
 *
 * A list of classes that can be selected as the to-be-created character's
 * primary class. This is the first screen the player sees in the Character
 * Creation System when creating new characters.
 *
 * ---
 *
 * Settings
 * 
 *   Class ID:
 *   - The ID of the class that can be selected.
 * 
 *     Preview Picture:
 *     - Filename of the preview picture.
 *     - Located in /img/pictures/
 * 
 *     Preview Background:
 *     - Filename of the preview background.
 *     - Located in /img/parallaxes/
 * 
 *     Text Description:
 *     - Text description used for this class.
 *     - Shown in the preview window.
 *     - Text codes allowed.
 * 
 * ---
 * 
 * Graphic Sets
 * 
 *   Graphics List:
 *   - A list of graphic sets that are tied to this class.
 *   - For more information, look under the Graphic Set Entry Settings.
 *
 * ---
 *
 * Requirements
 * 
 *   Required Switch:
 *   - What switch must be turned on for this class to show?
 *   - Use 0 to not require a switch.
 * 
 *   Gold Cost:
 *   - How much gold should it cost to pick this class?
 *   - Use 0 to not require a gold cost.
 * 
 *   Item Cost Type:
 *   - What item is needed to pick this class?
 *   - This determines the item type's ID.
 * 
 *     Item Cost Quantity:
 *     - How many of the item is needed to pick this class?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Global Graphic Sets Settings
 * ============================================================================
 *
 * A list of graphic sets that can be selected by the player to use for the
 * created character. This list contains the global graphic sets that the
 * player can pick from.
 *
 * ---
 *
 * Settings
 * 
 *   Display Text:
 *   - The text used to represent this graphic set.
 *   - Text codes allowed.
 * 
 *     Display Icon:
 *     - The icon shown next to the Display Text.
 * 
 *     Preview Picture:
 *     - Filename of the preview picture.
 *     - Located in /img/pictures/
 * 
 *     Preview Background:
 *     - Filename of the preview background.
 *     - Located in /img/parallaxes/
 * 
 *   Required Switch:
 *   - What switch must be turned on for this set to show?
 *   - Use 0 to not require a switch.
 * 
 *   Graphics List:
 *   - A list of graphic sets that are tied to this graphic set.
 *   - For more information, look under the Graphic Set Entry Settings section.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Graphic Set Entry Settings
 * ============================================================================
 *
 * These are the graphic set entries that are found in the Class List settings
 * and Global Graphic Sets. These help define the graphics that will be applied
 * to the created characters based on what they are assigned with.
 *
 * ---
 *
 * Display
 * 
 *   Display Text:
 *   - The text used to represent these graphics.
 *   - Text codes allowed.
 * 
 *   Display Icon:
 *   - The icon shown next to the Display Text.
 * 
 *   Display Background:
 *   - Filename of the display background.
 *   - Located in /img/parallaxes/
 * 
 * ---
 * 
 * Graphics
 * 
 *   Face Graphic:
 *   - Filename of the face graphic used.
 * 
 *     Face Index:
 *     - What is the face index used?
 *     - Index values start at 0.
 * 
 *   Character Graphic:
 *   - Filename of the character graphic used.
 * 
 *     Character Index:
 *     - What is the character index used?
 *     - Index values start at 0.
 * 
 *   SV Battler:
 *   - Filename of the sideview battler used.
 * 
 *   Battle Portrait:
 *   - Filename of the battle portrait.
 *   - Used for VisuMZ_1_BattleCore.
 * 
 *   Menu Portrait:
 *   - Filename of the main menu portrait.
 *   - Used for VisuMZ_1_MainMenuCore.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Traits Settings
 * ============================================================================
 * 
 * This requires VisuStella MZ's VisuMZ_1_ElementStatusCore in order to use.
 * This utilizes that plugin's traits system to allow for better customization.
 *
 * These settings will allow you to select which Trait Types can have which
 * Trait Sets be selectable. The actual Trait Set effects are adjusted in the
 * VisuMZ_1_ElementStatusCore plugin. These settings will refer to those but
 * apply things like costs and availability.
 *
 * ---
 *
 * General
 * 
 *   Enable Traits Step:
 *   - Enable traits step for Character Creation?
 *   - Requires VisuMZ_1_ElementStatusCore.js!
 *
 * ---
 *
 * Trait Types
 * 
 *   Main Element Settings:
 *   Sub Element Settings:
 *   Gender Settings:
 *   Race Settings:
 *   Nature Settings:
 *   Alignment Settings:
 *   Blessing Settings:
 *   Curse Settings:
 *   Zodiac Settings:
 *   Variant Settings:
 *   - Settings regarding the this specific trait type.
 *   - For more information, look under the Trait Type Settings section.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Trait Type Settings
 * ============================================================================
 *
 * These are the various Trait Types made available through the VisuStella MZ
 * VisuMZ_1_ElementStatusCore plugin. There are ten different types and these
 * will adjust their main settings.
 *
 * ---
 *
 * Settings
 * 
 *   Visible:
 *   - Is command visible in the Character Creation scene?
 *   - Also needs to be Visible in VisuMZ_1_ElementStatusCore.
 * 
 *   Create -> Randomize?:
 *   - Randomize the default setting for this trait type?
 *   - If not randomized, the default is selected.
 * 
 *     Default:
 *     - If not randomized, insert the name of the trait used.
 *     - The default cannot cost gold or items.
 * 
 *   Create -> Change?:
 *   - Changeable trait types can be adjusted.
 *   - Otherwise, they're stuck the way they are.
 * 
 *     Retrain -> Change?:
 *     - If a character is being retrained, can this trait type be changed?
 *     - Must also be changeable on creation.
 * 
 *   Trait Options:
 *   - A list of traits that the character can change to.
 *   - Automatically include the Default trait if used.
 *   - For more information, look under the Trait Set Settings section.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Trait Set Settings
 * ============================================================================
 *
 * These are the individual Trait Sets that can be picked for each of the ten
 * Trait Types. These parameters do not define the effects of the Trait Sets.
 * Instead, they only refer to the Trait Sets whose effects are defined in the
 * Plugin Parameters for the VisuMZ_1_ElementStatusCore plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - Name of this Trait Set. Must match the name of a trait found in
 *     VisuMZ_1_ElementStatusCore plugin.
 * 
 * ---
 * 
 * Requirements
 * 
 *   Required Switch:
 *   - What switch must be turned on for this trait to show?
 *   - Use 0 to not require a switch.
 * 
 *   Gold Cost:
 *   - How much gold should it cost to pick this trait?
 *   - Use 0 to not require a gold cost.
 * 
 *   Item Cost Type:
 *   - What item is needed to pick this trait?
 *   - This determines the item type's ID.
 * 
 *     Item Cost Quantity:
 *     - How many of the item is needed to pick this trait?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Random Name Sets
 * ============================================================================
 *
 * When selecting random names to work with, you can adjust which names will
 * appear in which set.
 *
 * ---
 *
 * Settings
 * 
 *   Display Text:
 *   - The text used to represent this name set.
 *   - Text codes allowed.
 * 
 *   Display Icon:
 *   - The icon shown next to the Display Text.
 * 
 *   Random Names:
 *   - A list of random names to pick from.
 *   - Insert a possible random name here.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_CreateCharacter and Scene_SelectCreatedChara.
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
 * These settings let you adjust the sound effects used for this plugin.
 *
 * ---
 *
 * Create
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
 * Dismiss
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
 * Retrain
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
 * Instruction Window
 * 
 *   For Class:
 *   For Appearance:
 *   For Graphic Set:
 *   For Traits:
 *   For Battle Voices:
 *   For Naming:
 *   For Confirmation:
 *   For Dismissal:
 *   For Retraining:
 *   - Instruction text when on this step.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Preview Window
 * 
 *   Cost Text:
 *   - Text displayed when showing a gold cost.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Appearance Window
 * 
 *   More Command Name:
 *   - Text used for More Appearances command.
 *   - Text codes allowed.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Graphic Sets Window
 * 
 *   Class Name Format:
 *   - Text for class graphic set command names.
 *   - Text codes allowed.
 *   - %1 - Class Name.
 * 
 * ---
 * 
 * Trait Types Window
 * 
 *   Accept Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *   Trait Types Format:
 *   - Text format used for trait type command names.
 *   - %1 - Command Name Text
 * 
 *     Icon:
 *     - Icon used for this command.
 *
 * ---
 * 
 * Battle Voice Window
 * 
 *   Accept Text:
 *   - Text used for this command.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *     Icon:
 *     - Icon used for this command.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   No Voice:
 *   - Text used for this command.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 * ---
 *
 * Name Command Window
 * 
 *   Accept Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *   Manual Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Confirm Data Window
 * 
 *   Name Text:
 *   Class Text:
 *   Cost Text:
 *   - Text used for this data category.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Confirm Command Window
 * 
 *   Confirm Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *   Cancel Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Button Assist Window
 * 
 *   Exit Text:
 *   - Text used for button assist shortcut to exit.
 * 
 * ---
 * 
 * Status Menu
 * 
 *   Profile Text:
 *   - Text used for a created character's profile.
 *   - %1 - Character's Actor ID
 * 
 *   Biography Text:
 *   - Text used for a created character's biography.
 *   - %1 - Character's Actor ID, %2 - Class Name
 * 
 *   Auto-Word Wrap:
 *   - Automatically apply word wrap to biography?
 *   - Requires VisuMZ_1_MessageCore.js!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin.
 *
 * ---
 *
 * General
 * 
 *   Side Buffer:
 *   - How many pixels from the edges of the screen should be buffered?
 * 
 *   Show List Icons:
 *   - Show/hide icons for most list elements?
 *   - Some elements will always have icons.
 * 
 * ---
 * 
 * Instruction Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Text Align:
 *   - Text alignment for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Gold Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Preview Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Padding:
 *   - What is the window edge padding value?
 * 
 *   Preview Contents:
 * 
 *     Auto-Word Wrap:
 *     - Automatically apply word wrap to preview text?
 *     - Requires VisuMZ_1_MessageCore.js!
 * 
 *     Draw Dark Rectangle:
 *     - Draw dark rectangles to make text more visible?
 * 
 *     Draw Gold Cost:
 *     - Draw the gold cost on the preview image?
 * 
 *   Foreground Picture:
 * 
 *     Anchor X:
 *     - Anchor value X. Use a number between 0 and 1.
 *     - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *     Anchor Y:
 *     - Anchor value Y. Use a number between 0 and 1.
 *     - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *     Scale Up:
 *     - Scale foreground picture size up to fit window?
 * 
 *   Background Parallax:
 * 
 *     Anchor X:
 *     - Anchor value X. Use a number between 0 and 1.
 *     - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *     Anchor Y:
 *     - Anchor value Y. Use a number between 0 and 1.
 *     - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *     Scale Up:
 *     - Scale foreground picture size up to fit window?
 * 
 *     Retrain Parallax:
 *     - Filename of the preview background for retraining.
 *     - Located in /img/parallaxes/
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Class List Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Current Text Color:
 *   - Use text colors from the Window Skin only.
 *   - This does NOT use #rrggbb format.
 * 
 *   Default Class Icon:
 *   - What icon should be used by default for classes without the <Icon: x>
 *     notetag?
 * 
 *   Item Cost:
 * 
 *     Cost Type Format:
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Icon, %2 - Cost Text
 * 
 *     Item Quantity :
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Cost, %2 - Owned
 * 
 *     Draw Cost of 1?:
 *     - Draws the cost format if there is a cost of 1?
 *     - Otherwise, just show the icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Appearance Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show More Command?:
 *   - Shows a "More Appearances" command for the player to select.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Graphic Sets Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show Other Classes?:
 *   - Allows player to select graphic sets from other classes?
 * 
 *   Other Classes First?:
 *   - Shows other class graphic sets before global graphics or after global
 *     graphics.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Trait Types Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 *
 * ---
 * 
 * Trait Sets Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   Current Text Color:
 *   - Use text colors from the Window Skin only.
 *   - This does NOT use #rrggbb format.
 * 
 *   Line Thickness:
 *   - How many lines thick is each selectable option?
 *   - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   Item Cost:
 * 
 *     Cost Type Format:
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Icon, %2 - Cost Text
 * 
 *     Item Quantity :
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Cost, %2 - Owned
 * 
 *     Draw Cost of 1?:
 *     - Draws the cost format if there is a cost of 1?
 *     - Otherwise, just show the icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 *
 * ---
 * 
 * Battle Voice Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   Current Text Color:
 *   - Use text colors from the Window Skin only.
 *   - This does NOT use #rrggbb format.
 * 
 *   Enable?:
 *   - Enables adjusting battle voice sets?
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   Voice Set Icon:
 *   - Icon used for voice sets.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 * ---
 * 
 * Current Name Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Name Command Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Name Edit Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Max Character Length:
 *   - What is the maximum character length for entering in a name?
 * 
 *   Name Width Padding:
 *   - What is the padding between characters?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Name Input Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Confirm Data Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Confirm Command Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Play Shop Sound?:
 *   - Play the shop sound when gold and items are involved?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Select Actor Window
 * 
 *   Background Type:
 *   - Select background type for this window.
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
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.09: July 17, 2025
 * * Compatibility Update!
 * ** If traits were turned off, there would be a crash. Crash is now fixed.
 *    Applies to retraining, too. Fix made by Arisu.
 * 
 * Version 1.08: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Better compatibility with different icon sizes.
 * 
 * Version 1.07: January 16, 2025
 * * Bug Fixes!
 * ** Fixed an issue where certain icons were not aligning properly at
 *    different lineheight settings. Fix made by Olivia.
 * 
 * Version 1.06: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the audio bgm being played would fade out and not
 *    return upon finishing a scene. Fix made by Irina.
 * 
 * Version 1.05: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the selected battle voice did not carry over properly.
 *    Fix made by Irina.
 * 
 * Version 1.04: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause the traits selected in the character creator
 *    would not carry over. Fix made by Irina.
 * 
 * Version 1.03: December 14, 2023
 * * Documentation Update!
 * ** Added extra clarity for Instructions - Quick Start
 * *** Step 1: Create Extra Actor Slots
 * **** The <Empty> character must not be in your party.
 * ** Added extra clarity for "Scene: Create Character Process" Plugin Command.
 * *** Does not affect <Empty> named characters that have joined the party.
 * * Feature Update!
 * ** If Traits Step is disabled, check for trait setups does not need to be
 *    adhered to. Fix made by Arisu.
 * 
 * Version 1.02: November 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that deducted all of an item amount upon creation.
 *    Fix by Arisu.
 * 
 * Version 1.01: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash due to missing icon. Fix by Olivia.
 * 
 * Version 1.00 Official Release Date: September 29, 2023
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
 * @command SceneOpenCharaCreateScene
 * @text Scene: Create Character Process
 * @desc Opens the Character Creation Scene.
 * Cannot be used in battle.
 *
 * @arg ActorID:num
 * @text Actor ID?
 * @type actor
 * @desc Pick a specific actor to create a character onto.
 * Use 0 for first available unnamed actor or named <Empty>.
 * @default 0
 *
 * @arg ActorLevel:eval
 * @text Actor Level
 * @parent ActorID:num
 * @desc What level should the actor be created at?
 * @default 1
 *
 * @arg DefaultName:str
 * @text Default Name
 * @parent ActorID:num
 * @desc Enter the name you want this actor to have as default.
 * The name can still be changed. Leave empty for random.
 * @default 
 * 
 * @arg Data
 * @text Data Gathering
 *
 * @arg FailSwitchID:num
 * @text Fail Switch
 * @parent Data
 * @type switch
 * @desc If searching for first available unnamed actor and is
 * unable to do so successfully, this Switch turns on.
 * @default 1
 *
 * @arg JoinSwitchID:num
 * @text Join Switch
 * @parent Data
 * @type switch
 * @desc If an actor is successfully recruited, turn Switch ON.
 * Otherwise, it stays OFF.
 * @default 2
 *
 * @arg RegisterVarID:num
 * @text Register Variable
 * @parent Data
 * @type variable
 * @desc When searching for first available unnamed actor,
 * register that actor's ID number to this variable.
 * @default 1
 * 
 * @arg Settings
 * @text Other Settings
 *
 * @arg CancelExit:eval
 * @text Cancel -> Exit?
 * @parent Settings
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow cancel button let you exit the scene?
 * @default true
 *
 * @arg ShowGoldWindow:eval
 * @text Show Gold Window?
 * @parent Settings
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides the gold window.
 * Gold costs still apply.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenCharaDismissScene
 * @text Scene: Dismiss Select Created Character
 * @desc Opens the Selected Character Dismissal Scene.
 * Cannot be used in battle.
 * 
 * @arg Data
 * @text Data Gathering
 *
 * @arg FailSwitchID:num
 * @text Fail Switch
 * @parent Data
 * @type switch
 * @desc If there is no created character to dismiss from the
 * player's party, this Switch turns on.
 * @default 1
 *
 * @arg DismissSwitchID:num
 * @text Dismiss Switch
 * @parent Data
 * @type switch
 * @desc If an actor is successfully dismissed, turn Switch ON.
 * Otherwise, it stays OFF.
 * @default 2
 *
 * @arg RegisterVarID:num
 * @text Register Variable
 * @parent Data
 * @type variable
 * @desc When a character is dismissed from the player party,
 * register that actor's ID number to this variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenCharaRetrainScene
 * @text Scene: Retrain Created Character
 * @desc Retrains a created character.
 * Cannot be used in battle.
 *
 * @arg ActorID:num
 * @text Actor ID?
 * @type actor
 * @desc Pick a specific actor to retrain.
 * Use 0 if you want the player to select the character.
 * @default 0
 *
 * @arg RetrainClass:eval
 * @text Change Class?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's class changeable?
 * @default true
 *
 * @arg PreserveLevel:eval
 * @text Preserve Level?
 * @parent RetrainClass:eval
 * @type boolean
 * @on Preserve
 * @off Reset
 * @desc If the actor retrains its class,
 * preserve the actor's previous level?
 * @default false
 *
 * @arg RetrainAppearance:eval
 * @text Change Appearance?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's appearance changeable?
 * @default true
 *
 * @arg RetrainTraits:eval
 * @text Change Traits?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Are the target actor's traits changeable?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default true
 *
 * @arg RetrainVoice:eval
 * @text Change Battle Voice?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's battle voice changeable?
 * Requires VisuMZ_3_BattleVoices!
 * @default true
 *
 * @arg RetrainName:eval
 * @text Change Name?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's name changeable?
 * @default true
 *
 * @arg ResetProfile:eval
 * @text Reset Profile?
 * @parent ActorID:num
 * @type boolean
 * @on Reset
 * @off Keep Old
 * @desc Reset target actor's profile or keep it the same?
 * @default true
 *
 * @arg ResetBiography:eval
 * @text Reset Biography?
 * @parent ActorID:num
 * @type boolean
 * @on Reset
 * @off Keep Old
 * @desc Reset target actor's biography or keep it the same?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default true
 * 
 * @arg Data
 * @text Data Gathering
 *
 * @arg FailSwitchID:num
 * @text Fail Switch
 * @parent Data
 * @type switch
 * @desc If there is no actor to retrain, then this
 * switch is turned ON. Otherwise, it stays OFF.
 * @default 1
 *
 * @arg RetrainSwitchID:num
 * @text Retrain Switch
 * @parent Data
 * @type switch
 * @desc If an actor is successfully retrained, turn Switch ON.
 * Otherwise, it stays OFF.
 * @default 2
 *
 * @arg RegisterVarID:num
 * @text Register Variable
 * @parent Data
 * @type variable
 * @desc This variable records the actor ID of the retrained
 * actor if the actor is successfully retrained.
 * @default 1
 * 
 * @arg Settings
 * @text Other Settings
 *
 * @arg ShowGoldWindow:eval
 * @text Show Gold Window?
 * @parent Settings
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides the gold window.
 * Gold costs still apply.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableSetCreatedCharacterCount
 * @text Variable: Set Created Character Count
 * @desc Target variable will have a value equal to the total number
 * of created characters in the player's party.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Target variable will have a value equal to the total
 * number of created characters in the player's party.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableSetAvailableEmptyCharacterSlots
 * @text Variable: Set Available Empty Character Slots
 * @desc Target variable will have a value equal to the total number
 * of empty character slots left available.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Target variable will have a value equal to the total
 * number of empty character slots left available.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableSetTotalEmptyCharacterSlots
 * @text Variable: Set Total Empty Character Slots
 * @desc Target variable will have a value equal to the total number
 * of empty character slots in total.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Target variable will have a value equal to the total
 * number of empty character slots in total.
 * @default 1
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
 * @param CharaCreationSys
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CharacterCreate
 * @text Character Creation
 *
 * @param ClassList:arraystruct
 * @text Class List
 * @parent CharacterCreate
 * @type struct<ClassData>[]
 * @desc A list of classes that can be selected as the
 * to-be-created character's primary class.
 * @default ["{\"ClassID:num\":\"1\",\"PreviewPicture:str\":\"Actor1_1\",\"PreviewParallax:str\":\"Mountains1\",\"Description:json\":\"\\\"A strong and dextrous\\\\nclass with various\\\\ncapabilities.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_2\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"2\",\"PreviewPicture:str\":\"Actor1_6\",\"PreviewParallax:str\":\"Clouds\",\"Description:json\":\"\\\"Uses elemental magic to\\\\ndefeat their opponents.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_5\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"3\",\"PreviewPicture:str\":\"Actor1_7\",\"PreviewParallax:str\":\"Universe\",\"Description:json\":\"\\\"Uses holy magic to aid\\\\nallies and defeat foes.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_8\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"4\",\"PreviewPicture:str\":\"Actor2_1\",\"PreviewParallax:str\":\"Town2\",\"Description:json\":\"\\\"Has sturdy defense to\\\\nprotect the party.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_2\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"5\",\"PreviewPicture:str\":\"Actor1_4\",\"PreviewParallax:str\":\"Ocean\",\"Description:json\":\"\\\"A highly dextrous\\\\nspecialist in barefist\\\\ncombat arts.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_3\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"6\",\"PreviewPicture:str\":\"Actor2_4\",\"PreviewParallax:str\":\"Mountains3\",\"Description:json\":\"\\\"An expert in sword and\\\\nmagical arts.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_3\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"7\",\"PreviewPicture:str\":\"Actor2_8\",\"PreviewParallax:str\":\"Forest\",\"Description:json\":\"\\\"Equips bows to attack\\\\nenemies from afar.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_8\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_7\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"8\",\"PreviewPicture:str\":\"Actor3_5\",\"PreviewParallax:str\":\"Town1\",\"Description:json\":\"\\\"A crafty character\\\\ncapable of many feats.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor3_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor3_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor3_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor3_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor3_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor3_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor3_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor3_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor3_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor3_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor3_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor3_6\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}"]
 *
 * @param GraphicSets:arraystruct
 * @text Graphic Sets
 * @parent CharacterCreate
 * @type struct<GraphicSet>[]
 * @desc A list of graphic sets that can be selected by
 * the player to use for the created character.
 * @default ["{\"DisplayText:str\":\"Primary Actors\",\"DisplayIcon:num\":\"162\",\"PreviewPicture:str\":\"Actor1_1\",\"PreviewParallax:str\":\"Mountains1\",\"SwitchReq:num\":\"0\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-1\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-2\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-3\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-4\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-5\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-6\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-7\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-8\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\"}\\\"]\"}","{\"DisplayText:str\":\"Secondary Actors\",\"DisplayIcon:num\":\"163\",\"PreviewPicture:str\":\"Actor2_1\",\"PreviewParallax:str\":\"Mountains3\",\"SwitchReq:num\":\"0\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-1\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-2\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-3\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-4\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-5\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-6\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-7\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-8\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\"}\\\"]\"}"]
 *
 * @param Traits:struct
 * @text Traits Settings
 * @parent CharacterCreate
 * @type struct<Traits>
 * @desc These settings let you adjust traits.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default {"EnableTraitsStep:eval":"true","Element:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Neutral\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fire\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Ice\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Thunder\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Water\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Earth\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wind\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Light\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Darkness\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","SubElement:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"-\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"-\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fire\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Ice\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Thunder\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Water\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Earth\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wind\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Light\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Darkness\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Gender:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"true\",\"Default:str\":\"\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Male\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Female\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Race:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Human\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Human\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"High Elf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wood Elf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dark Elf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dwarf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Gnome\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Halfling\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wolfkin\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Felyne\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lizardman\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Nature:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"true\",\"Default:str\":\"\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chill\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Hardy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lonely\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Adamant\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Naughty\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Brave\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Bold\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Docile\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Impish\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lax\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Relaxed\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Modest\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Mild\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Bashful\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Rash\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Quiet\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Calm\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Gentle\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Careful\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Quirky\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Sassy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Timid\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Hasty\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Jolly\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Naive\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Serious\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Alignment:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Neutral\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lawful Good\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral Good\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chaotic Good\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lawful Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chaotic Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lawful Evil\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral Evil\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chaotic Evil\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Blessing:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"No Blessing\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"No Blessing\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dextrous\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Elusive\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Impact\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Healthy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Focused\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Energetic\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Curse:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"No Curse\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"No Curse\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Clumsy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dazed\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fitful\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Drained\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Inefficient\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Unmotivated\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Zodiac:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"true\",\"Default:str\":\"\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Aries\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Taurus\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Gemini\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Cancer\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Leo\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Virgo\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Libra\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Scorpio\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Sagittarius\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Capricorn\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Aquarius\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Pisces\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Ophiuchus\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Variant:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Normal\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Mighty\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"100000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Major\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Greater\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Normal\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lesser\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Minor\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Puny\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}"}
 *
 * @param NameSets:arraystruct
 * @text Random Name Sets
 * @parent CharacterCreate
 * @type struct<NameSet>[]
 * @desc A list of random names to use when naming
 * a created character.
 * @default ["{\"DisplayText:str\":\"Random Neutral Names\",\"DisplayIcon:num\":\"307\",\"NameSets:arraystr\":\"[\\\"Addison\\\",\\\"Adrian\\\",\\\"Aeron\\\",\\\"Ainsley\\\",\\\"Alex\\\",\\\"Alexis\\\",\\\"Amandus\\\",\\\"Amari\\\",\\\"Andi\\\",\\\"Andie\\\",\\\"Andy\\\",\\\"Angel\\\",\\\"Aran\\\",\\\"Ari\\\",\\\"Ariel\\\",\\\"Armani\\\",\\\"Artemis\\\",\\\"Ash\\\",\\\"Asher\\\",\\\"Ashlyn\\\",\\\"Asia\\\",\\\"Aspen\\\",\\\"August\\\",\\\"Autumn\\\",\\\"Azariah\\\",\\\"Bay\\\",\\\"Berenice\\\",\\\"Berni\\\",\\\"Berny\\\",\\\"Bertie\\\",\\\"Berty\\\",\\\"Blaine\\\",\\\"Blair\\\",\\\"Blue\\\",\\\"Bobby\\\",\\\"Brett\\\",\\\"Brody\\\",\\\"Brogan\\\",\\\"Brook\\\",\\\"Cadence\\\",\\\"Caelan\\\",\\\"Cameron\\\",\\\"Campbell\\\",\\\"Carey\\\",\\\"Carroll\\\",\\\"Carter\\\",\\\"Cas\\\",\\\"Casey\\\",\\\"Casper\\\",\\\"Cassi\\\",\\\"Cassian\\\",\\\"Cassidy\\\",\\\"Cassie\\\",\\\"Cassy\\\",\\\"Castiel\\\",\\\"Chance\\\",\\\"Charli\\\",\\\"Charlie\\\",\\\"Charly\\\",\\\"Chase\\\",\\\"Clay\\\",\\\"Cody\\\",\\\"Corey\\\",\\\"Dakota\\\",\\\"Dale\\\",\\\"Dallas\\\",\\\"Dana\\\",\\\"Danni\\\",\\\"Dannie\\\",\\\"Danny\\\",\\\"Darby\\\",\\\"Darcy\\\",\\\"Darnell\\\",\\\"Daryl\\\",\\\"Dominique\\\",\\\"Dorian\\\",\\\"Eli\\\",\\\"Emerson\\\",\\\"Emery\\\",\\\"Emory\\\",\\\"Ennis\\\",\\\"Finley\\\",\\\"Fran\\\",\\\"Franni\\\",\\\"Frannie\\\",\\\"Franny\\\",\\\"Gabbi\\\",\\\"Gabbie\\\",\\\"Gabby\\\",\\\"Gabriel\\\",\\\"Gale\\\",\\\"Gray\\\",\\\"Grey\\\",\\\"Hadley\\\",\\\"Harley\\\",\\\"Harlow\\\",\\\"Harper\\\",\\\"Haven\\\",\\\"Hayden\\\",\\\"Hollis\\\",\\\"Hunter\\\",\\\"Indigo\\\",\\\"Isidore\\\",\\\"Isolde\\\",\\\"Izzi\\\",\\\"Izzie\\\",\\\"Izzy\\\",\\\"Jace\\\",\\\"Jack\\\",\\\"Jacki\\\",\\\"Jackie\\\",\\\"Jackson\\\",\\\"Jacky\\\",\\\"Jaden\\\",\\\"Jaeden\\\",\\\"Jamie\\\",\\\"Jay\\\",\\\"Jayden\\\",\\\"Jean\\\",\\\"Jeremiah\\\",\\\"Jerri\\\",\\\"Jerrie\\\",\\\"Jerry\\\",\\\"Jesse\\\",\\\"Jessica\\\",\\\"Jessie\\\",\\\"Joanne\\\",\\\"Jocelyn\\\",\\\"Jordan\\\",\\\"Jordyn\\\",\\\"Josiah\\\",\\\"Joss\\\",\\\"Joyce\\\",\\\"Jules\\\",\\\"Julian\\\",\\\"Justice\\\",\\\"Kaden\\\",\\\"Kai\\\",\\\"Kamryn\\\",\\\"Karter\\\",\\\"Kayden\\\",\\\"Keelan\\\",\\\"Kel\\\",\\\"Kendall\\\",\\\"Kim\\\",\\\"Kris\\\",\\\"Kristin\\\",\\\"Lake\\\",\\\"Landry\\\",\\\"Layton\\\",\\\"Lee\\\",\\\"Leighton\\\",\\\"Lennon\\\",\\\"Leslie\\\",\\\"Lester\\\",\\\"Lewis\\\",\\\"Liv\\\",\\\"Loren\\\",\\\"Louie\\\",\\\"Lynn\\\",\\\"Lyric\\\",\\\"Mackenzie\\\",\\\"Maddi\\\",\\\"Maddie\\\",\\\"Maddy\\\",\\\"Madison\\\",\\\"Mallory\\\",\\\"Mandel\\\",\\\"Mandi\\\",\\\"Mandie\\\",\\\"Mandy\\\",\\\"Manni\\\",\\\"Mannie\\\",\\\"Manny\\\",\\\"Marley\\\",\\\"Mathilda\\\",\\\"Matilda\\\",\\\"Matti\\\",\\\"Mattie\\\",\\\"Matty\\\",\\\"Max\\\",\\\"Maxine\\\",\\\"Maxwell\\\",\\\"Mel\\\",\\\"Melody\\\",\\\"Melvin\\\",\\\"Micah\\\",\\\"Mickey\\\",\\\"Micki\\\",\\\"Mickie\\\",\\\"Mikayla\\\",\\\"Milan\\\",\\\"Misha\\\",\\\"Montana\\\",\\\"Morgan\\\",\\\"Murphy\\\",\\\"Nat\\\",\\\"Nathalie\\\",\\\"Nathan\\\",\\\"Nathanael\\\",\\\"Nathaniel\\\",\\\"Nevada\\\",\\\"Nicki\\\",\\\"Nickie\\\",\\\"Nicky\\\",\\\"Nikita\\\",\\\"Oakley\\\",\\\"Ocean\\\",\\\"Oli\\\",\\\"Olive\\\",\\\"Oliver\\\",\\\"Olli\\\",\\\"Ollie\\\",\\\"Olly\\\",\\\"Paige\\\",\\\"Paisley\\\",\\\"Paris\\\",\\\"Parker\\\",\\\"Pat\\\",\\\"Patti\\\",\\\"Pattie\\\",\\\"Patty\\\",\\\"Payton\\\",\\\"Peyton\\\",\\\"Phoenix\\\",\\\"Piper\\\",\\\"Quinn\\\",\\\"Rain\\\",\\\"Raven\\\",\\\"Ray\\\",\\\"Reagan\\\",\\\"Reed\\\",\\\"Reese\\\",\\\"Remington\\\",\\\"Remy\\\",\\\"Rey\\\",\\\"Riley\\\",\\\"Ripley\\\",\\\"River\\\",\\\"Roan\\\",\\\"Robbi\\\",\\\"Robbie\\\",\\\"Robby\\\",\\\"Robin\\\",\\\"Rohan\\\",\\\"Ronni\\\",\\\"Ronnie\\\",\\\"Ronny\\\",\\\"Rory\\\",\\\"Rowan\\\",\\\"Rudy\\\",\\\"Rylan\\\",\\\"Rylee\\\",\\\"Sacha\\\",\\\"Sage\\\",\\\"Sal\\\",\\\"Sally\\\",\\\"Salvador\\\",\\\"Sammi\\\",\\\"Sammie\\\",\\\"Sammy\\\",\\\"Samuel\\\",\\\"Sandi\\\",\\\"Sandie\\\",\\\"Sandy\\\",\\\"Sascha\\\",\\\"Sasha\\\",\\\"Sawyer\\\",\\\"Scout\\\",\\\"Sean\\\",\\\"September\\\",\\\"Sevan\\\",\\\"Shannon\\\",\\\"Shawn\\\",\\\"Shelby\\\",\\\"Shelli\\\",\\\"Shellie\\\",\\\"Shelly\\\",\\\"Shelton\\\",\\\"Sheridan\\\",\\\"Shiloh\\\",\\\"Shirley\\\",\\\"Sidney\\\",\\\"Silver\\\",\\\"Sky\\\",\\\"Skylar\\\",\\\"Skyler\\\",\\\"Sloane\\\",\\\"Sparrow\\\",\\\"Spirit\\\",\\\"Stacey\\\",\\\"Steph\\\",\\\"Storm\\\",\\\"Sunny\\\",\\\"Tanner\\\",\\\"Tate\\\",\\\"Tatum\\\",\\\"Taylor\\\",\\\"Teagan\\\",\\\"Terri\\\",\\\"Terrie\\\",\\\"Terry\\\",\\\"Toby\\\",\\\"Toni\\\",\\\"Tonie\\\",\\\"Tony\\\",\\\"Tracy\\\",\\\"Trinidad\\\",\\\"Tyler\\\",\\\"Val\\\",\\\"Valentine\\\",\\\"Vic\\\",\\\"Vicky\\\",\\\"Viv\\\",\\\"West\\\",\\\"Whitney\\\",\\\"Willow\\\",\\\"Winter\\\",\\\"Zara\\\",\\\"Zion\\\"]\"}","{\"DisplayText:str\":\"Random Male Names\",\"DisplayIcon:num\":\"312\",\"NameSets:arraystr\":\"[\\\"Aamir\\\",\\\"Abbey\\\",\\\"Abbot\\\",\\\"Abdul\\\",\\\"Abdulkarim\\\",\\\"Abdullah\\\",\\\"Abner\\\",\\\"Ace\\\",\\\"Adam\\\",\\\"Addie\\\",\\\"Aditya\\\",\\\"Adolphe\\\",\\\"Adolphus\\\",\\\"Adrick\\\",\\\"Agamemnon\\\",\\\"Aguste\\\",\\\"Ahmad\\\",\\\"Ajay\\\",\\\"Alaa\\\",\\\"Albatros\\\",\\\"Alberto\\\",\\\"Alden\\\",\\\"Aldwin\\\",\\\"Aleck\\\",\\\"Aleks\\\",\\\"Aleksandrs\\\",\\\"Alex\\\",\\\"Alexander\\\",\\\"Alexei\\\",\\\"Algernon\\\",\\\"Alister\\\",\\\"Alix\\\",\\\"Allan\\\",\\\"Alley\\\",\\\"Alonso\\\",\\\"Alonzo\\\",\\\"Alvin\\\",\\\"Alwin\\\",\\\"Ambros\\\",\\\"Ambrosio\\\",\\\"Ambrosius\\\",\\\"Anatole\\\",\\\"Anders\\\",\\\"Andres\\\",\\\"Andrew\\\",\\\"Andy\\\",\\\"Angel\\\",\\\"Angelico\\\",\\\"Angus\\\",\\\"Ansell\\\",\\\"Antin\\\",\\\"Anton\\\",\\\"Antoni\\\",\\\"Antonin\\\",\\\"Antonio\\\",\\\"Antonius\\\",\\\"Apostolos\\\",\\\"Aram\\\",\\\"Archibold\\\",\\\"Arel\\\",\\\"Aristotle\\\",\\\"Arlo\\\",\\\"Armando\\\",\\\"Arne\\\",\\\"Arnie\\\",\\\"Aron\\\",\\\"Art\\\",\\\"Artur\\\",\\\"Arvie\\\",\\\"Arvin\\\",\\\"Arvind\\\",\\\"Arvy\\\",\\\"Ash\\\",\\\"Ashley\\\",\\\"Aubert\\\",\\\"Augustine\\\",\\\"Austen\\\",\\\"Avery\\\",\\\"Avi\\\",\\\"Avraham\\\",\\\"Baldwin\\\",\\\"Bancroft\\\",\\\"Barclay\\\",\\\"Barn\\\",\\\"Barnabas\\\",\\\"Barnaby\\\",\\\"Barnard\\\",\\\"Barnebas\\\",\\\"Baron\\\",\\\"Barret\\\",\\\"Barry\\\",\\\"Bart\\\",\\\"Bartel\\\",\\\"Barthel\\\",\\\"Bartlet\\\",\\\"Bartlett\\\",\\\"Basil\\\",\\\"Batholomew\\\",\\\"Bay\\\",\\\"Bealle\\\",\\\"Bearnard\\\",\\\"Beauregard\\\",\\\"Beck\\\",\\\"Bennet\\\",\\\"Berke\\\",\\\"Berkeley\\\",\\\"Bernd\\\",\\\"Bernhard\\\",\\\"Bernie\\\",\\\"Bertie\\\",\\\"Bill\\\",\\\"Bing\\\",\\\"Binky\\\",\\\"Bishop\\\",\\\"Blair\\\",\\\"Bob\\\",\\\"Bobby\\\",\\\"Boyd\\\",\\\"Bradly\\\",\\\"Brandon\\\",\\\"Bret\\\",\\\"Brewster\\\",\\\"Brian\\\",\\\"Broddy\\\",\\\"Broderick\\\",\\\"Bronson\\\",\\\"Brooke\\\",\\\"Bryan\\\",\\\"Burton\\\",\\\"Butch\\\",\\\"Byron\\\",\\\"Cal\\\",\\\"Cam\\\",\\\"Carlyle\\\",\\\"Carroll\\\",\\\"Carter\\\",\\\"Caryl\\\",\\\"Casey\\\",\\\"Cecil\\\",\\\"Cesar\\\",\\\"Chaddie\\\",\\\"Chaddy\\\",\\\"Chalmers\\\",\\\"Chan\\\",\\\"Chanderjit\\\",\\\"Charles\\\",\\\"Charlie\\\",\\\"Chauncey\\\",\\\"Chen\\\",\\\"Chester\\\",\\\"Cheston\\\",\\\"Chet\\\",\\\"Chevy\\\",\\\"Christof\\\",\\\"Christofer\\\",\\\"Christophe\\\",\\\"Christopher\\\",\\\"Christos\\\",\\\"Christy\\\",\\\"Chrisy\\\",\\\"Clair\\\",\\\"Clark\\\",\\\"Clarke\\\",\\\"Claus\\\",\\\"Clayborn\\\",\\\"Cleland\\\",\\\"Clem\\\",\\\"Clemmie\\\",\\\"Clive\\\",\\\"Clyde\\\",\\\"Cobby\\\",\\\"Colbert\\\",\\\"Collin\\\",\\\"Connor\\\",\\\"Constantine\\\",\\\"Corby\\\",\\\"Cornellis\\\",\\\"Corwin\\\",\\\"Crawford\\\",\\\"Creighton\\\",\\\"Cristopher\\\",\\\"Curtice\\\",\\\"Cyrill\\\",\\\"Cyrille\\\",\\\"Cyrus\\\",\\\"Dabney\\\",\\\"Dale\\\",\\\"Dan\\\",\\\"Dani\\\",\\\"Dannie\\\",\\\"Dante\\\",\\\"Darby\\\",\\\"Darrel\\\",\\\"Darrick\\\",\\\"Darryl\\\",\\\"Darth\\\",\\\"Darwin\\\",\\\"Daryl\\\",\\\"Daryle\\\",\\\"David\\\",\\\"Davie\\\",\\\"Davy\\\",\\\"Dawson\\\",\\\"Deane\\\",\\\"Delbert\\\",\\\"Delmar\\\",\\\"Demetris\\\",\\\"Derrek\\\",\\\"Derrol\\\",\\\"Derron\\\",\\\"Deryl\\\",\\\"Desmond\\\",\\\"Devon\\\",\\\"Dexter\\\",\\\"Dimitrou\\\",\\\"Dion\\\",\\\"Dmitri\\\",\\\"Dom\\\",\\\"Domenico\\\",\\\"Donal\\\",\\\"Donn\\\",\\\"Douglas\\\",\\\"Douglass\\\",\\\"Douglis\\\",\\\"Dov\\\",\\\"Doyle\\\",\\\"Drake\\\",\\\"Dryke\\\",\\\"Duane\\\",\\\"Duffie\\\",\\\"Duncan\\\",\\\"Durante\\\",\\\"Dwayne\\\",\\\"Dwight\\\",\\\"Dyson\\\",\\\"Earle\\\",\\\"Ebeneser\\\",\\\"Ed\\\",\\\"Eddy\\\",\\\"Eduard\\\",\\\"Edwin\\\",\\\"Ehud\\\",\\\"Eldon\\\",\\\"Eli\\\",\\\"Elias\\\",\\\"Elihu\\\",\\\"Elijah\\\",\\\"Elliott\\\",\\\"Elroy\\\",\\\"Elton\\\",\\\"Elvin\\\",\\\"Elvis\\\",\\\"Ely\\\",\\\"Emery\\\",\\\"Emmery\\\",\\\"Emmott\\\",\\\"Emmy\\\",\\\"Engelbert\\\",\\\"Englebart\\\",\\\"Enoch\\\",\\\"Enrico\\\",\\\"Erek\\\",\\\"Eric\\\",\\\"Ernie\\\",\\\"Ernst\\\",\\\"Erny\\\",\\\"Errol\\\",\\\"Erwin\\\",\\\"Esau\\\",\\\"Esteban\\\",\\\"Ethelred\\\",\\\"Etienne\\\",\\\"Euclid\\\",\\\"Eugene\\\",\\\"Evelyn\\\",\\\"Ezechiel\\\",\\\"Ezra\\\",\\\"Ferdie\\\",\\\"Ferdinand\\\",\\\"Ferdy\\\",\\\"Fergus\\\",\\\"Ferinand\\\",\\\"Filbert\\\",\\\"Filipe\\\",\\\"Filmore\\\",\\\"Finley\\\",\\\"Finn\\\",\\\"Fitzgerald\\\",\\\"Fletcher\\\",\\\"Floyd\\\",\\\"Flynn\\\",\\\"Fons\\\",\\\"Fonz\\\",\\\"Fonzie\\\",\\\"Forest\\\",\\\"Forrest\\\",\\\"Forster\\\",\\\"Foster\\\",\\\"Fox\\\",\\\"Francesco\\\",\\\"Frank\\\",\\\"Frankie\\\",\\\"Franklyn\\\",\\\"Franz\\\",\\\"Freddie\\\",\\\"Frederico\\\",\\\"Fredric\\\",\\\"Fredrick\\\",\\\"Freeman\\\",\\\"Friedric\\\",\\\"Fritz\\\",\\\"Fyodor\\\",\\\"Gabriel\\\",\\\"Gale\\\",\\\"Galen\\\",\\\"Gardener\\\",\\\"Gardiner\\\",\\\"Garey\\\",\\\"Garfinkel\\\",\\\"Garret\\\",\\\"Garwood\\\",\\\"Gasper\\\",\\\"Gav\\\",\\\"Gaven\\\",\\\"Gearard\\\",\\\"Geoffrey\\\",\\\"Geoffry\\\",\\\"Gere\\\",\\\"Gerhard\\\",\\\"Germaine\\\",\\\"Gerome\\\",\\\"Gerrard\\\",\\\"Gershon\\\",\\\"Giacomo\\\",\\\"Giancarlo\\\",\\\"Giavani\\\",\\\"Giffard\\\",\\\"Giffer\\\",\\\"Giffie\\\",\\\"Giffy\\\",\\\"Gilburt\\\",\\\"Giordano\\\",\\\"Giorgio\\\",\\\"Giraldo\\\",\\\"Glen\\\",\\\"Glenn\\\",\\\"Godart\\\",\\\"Godfrey\\\",\\\"Gomer\\\",\\\"Goober\\\",\\\"Gordie\\\",\\\"Grady\\\",\\\"Graham\\\",\\\"Grant\\\",\\\"Greg\\\",\\\"Gregor\\\",\\\"Gregorio\\\",\\\"Gregory\\\",\\\"Gretchen\\\",\\\"Grover\\\",\\\"Guillaume\\\",\\\"Gunner\\\",\\\"Gunther\\\",\\\"Gustavo\\\",\\\"Gustavus\\\",\\\"Guy\\\",\\\"Hadleigh\\\",\\\"Hadrian\\\",\\\"Hagen\\\",\\\"Hailey\\\",\\\"Hakeem\\\",\\\"Haleigh\\\",\\\"Halvard\\\",\\\"Ham\\\",\\\"Hamlet\\\",\\\"Hamlin\\\",\\\"Hans\\\",\\\"Harald\\\",\\\"Harman\\\",\\\"Harris\\\",\\\"Harry\\\",\\\"Hartley\\\",\\\"Hartwell\\\",\\\"Harv\\\",\\\"Hasheem\\\",\\\"Haskel\\\",\\\"Hastings\\\",\\\"Haven\\\",\\\"Haydon\\\",\\\"Hector\\\",\\\"Heinrich\\\",\\\"Hendrick\\\",\\\"Hermy\\\",\\\"Herschel\\\",\\\"Hew\\\",\\\"Hewe\\\",\\\"Hewet\\\",\\\"Hewitt\\\",\\\"Hilbert\\\",\\\"Hill\\\",\\\"Hillary\\\",\\\"Hillery\\\",\\\"Hiro\\\",\\\"Hodge\\\",\\\"Horace\\\",\\\"Horatius\\\",\\\"Howard\\\",\\\"Hoyt\\\",\\\"Hudson\\\",\\\"Hugh\\\",\\\"Hugo\\\",\\\"Ian\\\",\\\"Ichabod\\\",\\\"Iggie\\\",\\\"Ignace\\\",\\\"Ignacius\\\",\\\"Ignazio\\\",\\\"Igor\\\",\\\"Ikey\\\",\\\"Immanuel\\\",\\\"Ingamar\\\",\\\"Ingemar\\\",\\\"Inglebert\\\",\\\"Ingmar\\\",\\\"Ira\\\",\\\"Irvine\\\",\\\"Isaak\\\",\\\"Isaiah\\\",\\\"Ismail\\\",\\\"Israel\\\",\\\"Ivan\\\",\\\"Jackson\\\",\\\"Jan\\\",\\\"Janos\\\",\\\"Jared\\\",\\\"Jarrett\\\",\\\"Jarvis\\\",\\\"Jason\\\",\\\"Jean-Lou\\\",\\\"Jean-Pierre\\\",\\\"Jeb\\\",\\\"Jedediah\\\",\\\"Jefferey\\\",\\\"Jeffie\\\",\\\"Jeffrey\\\",\\\"Jephthah\\\",\\\"Jeremias\\\",\\\"Jermain\\\",\\\"Jermayne\\\",\\\"Jeromy\\\",\\\"Jerrie\\\",\\\"Jerrold\\\",\\\"Jerrome\\\",\\\"Jerry\\\",\\\"Jervis\\\",\\\"Jessie\\\",\\\"Jethro\\\",\\\"Jimmie\\\",\\\"Jo\\\",\\\"Joaquin\\\",\\\"Jock\\\",\\\"Jodie\\\",\\\"Joel\\\",\\\"Johann\\\",\\\"Johannes\\\",\\\"John-David\\\",\\\"John-Patrick\\\",\\\"Johnnie\\\",\\\"Johny\\\",\\\"Jonathan\\\",\\\"Jonathon\\\",\\\"Jordan\\\",\\\"Jordy\\\",\\\"Jorge\\\",\\\"Jory\\\",\\\"Joshua\\\",\\\"Judith\\\",\\\"Jules\\\",\\\"Julian\\\",\\\"Julio\\\",\\\"Kalle\\\",\\\"Kalman\\\",\\\"Kam\\\",\\\"Karim\\\",\\\"Karsten\\\",\\\"Keefe\\\",\\\"Keenan\\\",\\\"Keil\\\",\\\"Keith\\\",\\\"Kellen\\\",\\\"Kelley\\\",\\\"Kelsey\\\",\\\"Ken\\\",\\\"Kendall\\\",\\\"Kendrick\\\",\\\"Kenneth\\\",\\\"Kermit\\\",\\\"Kingsley\\\",\\\"Kip\\\",\\\"Kit\\\",\\\"Klee\\\",\\\"Knox\\\",\\\"Konrad\\\",\\\"Kory\\\",\\\"Kostas\\\",\\\"Krishna\\\",\\\"Kristopher\\\",\\\"Kurtis\\\",\\\"Kyle\\\",\\\"Lamar\\\",\\\"Lambert\\\",\\\"Lance\\\",\\\"Lauren\\\",\\\"Laurens\\\",\\\"Laurent\\\",\\\"Laurie\\\",\\\"Lawson\\\",\\\"Lawton\\\",\\\"Layton\\\",\\\"Lazaro\\\",\\\"Lefty\\\",\\\"Lemar\\\",\\\"Leo\\\",\\\"Leon\\\",\\\"Leonardo\\\",\\\"Leonerd\\\",\\\"Leopold\\\",\\\"Leroy\\\",\\\"Lester\\\",\\\"Liam\\\",\\\"Linus\\\",\\\"Llewellyn\\\",\\\"Lon\\\",\\\"Lonny\\\",\\\"Loren\\\",\\\"Lorenzo\\\",\\\"Lorne\\\",\\\"Lothar\\\",\\\"Lou\\\",\\\"Louis\\\",\\\"Luciano\\\",\\\"Ludvig\\\",\\\"Lukas\\\",\\\"Lyn\\\",\\\"Mack\\\",\\\"Magnum\\\",\\\"Magnus\\\",\\\"Mahmoud\\\",\\\"Major\\\",\\\"Manuel\\\",\\\"Marc\\\",\\\"Marcio\\\",\\\"Marietta\\\",\\\"Marion\\\",\\\"Marko\\\",\\\"Markos\\\",\\\"Marshal\\\",\\\"Marshall\\\",\\\"Marten\\\",\\\"Martin\\\",\\\"Matthaeus\\\",\\\"Mattheus\\\",\\\"Matthias\\\",\\\"Matthieu\\\",\\\"Maurie\\\",\\\"Maury\\\",\\\"Maynard\\\",\\\"Mead\\\",\\\"Melvin\\\",\\\"Mendie\\\",\\\"Meredith\\\",\\\"Merlin\\\",\\\"Merril\\\",\\\"Mervin\\\",\\\"Merwin\\\",\\\"Mic\\\",\\\"Michal\\\",\\\"Michale\\\",\\\"Micheal\\\",\\\"Mick\\\",\\\"Miguel\\\",\\\"Mika\\\",\\\"Mikael\\\",\\\"Mikel\\\",\\\"Mikhail\\\",\\\"Milo\\\",\\\"Mitchael\\\",\\\"Mitchell\\\",\\\"Moe\\\",\\\"Mohammad\\\",\\\"Moises\\\",\\\"Moishe\\\",\\\"Monte\\\",\\\"Mordecai\\\",\\\"Morley\\\",\\\"Morly\\\",\\\"Morris\\\",\\\"Morry\\\",\\\"Morse\\\",\\\"Mort\\\",\\\"Mose\\\",\\\"Muffin\\\",\\\"Muhammad\\\",\\\"Murdock\\\",\\\"Myron\\\",\\\"Nahum\\\",\\\"Neale\\\",\\\"Neil\\\",\\\"Nels\\\",\\\"Nelsen\\\",\\\"Nevile\\\",\\\"Nick\\\",\\\"Nickey\\\",\\\"Nickie\\\",\\\"Nicky\\\",\\\"Nico\\\",\\\"Niels\\\",\\\"Nigel\\\",\\\"Nikita\\\",\\\"Nikolai\\\",\\\"Nils\\\",\\\"Nilson\\\",\\\"Noble\\\",\\\"Noe\\\",\\\"Noel\\\",\\\"Noland\\\",\\\"Norbert\\\",\\\"Normand\\\",\\\"Northrup\\\",\\\"Norwood\\\",\\\"Odin\\\",\\\"Olag\\\",\\\"Olivier\\\",\\\"Orazio\\\",\\\"Orin\\\",\\\"Orion\\\",\\\"Osbert\\\",\\\"Osborn\\\",\\\"Osgood\\\",\\\"Osmund\\\",\\\"Oswald\\\",\\\"Othello\\\",\\\"Otto\\\",\\\"Ozzie\\\",\\\"Pace\\\",\\\"Paco\\\",\\\"Paige\\\",\\\"Pail\\\",\\\"Parke\\\",\\\"Parker\\\",\\\"Parrnell\\\",\\\"Parsifal\\\",\\\"Pasquale\\\",\\\"Pat\\\",\\\"Paten\\\",\\\"Patric\\\",\\\"Patrice\\\",\\\"Patrick\\\",\\\"Paul\\\",\\\"Pavel\\\",\\\"Pepe\\\",\\\"Perry\\\",\\\"Petey\\\",\\\"Petr\\\",\\\"Peyton\\\",\\\"Philbert\\\",\\\"Phillip\\\",\\\"Piotr\\\",\\\"Pip\\\",\\\"Praneetf\\\",\\\"Prasad\\\",\\\"Prentiss\\\",\\\"Prescott\\\",\\\"Preston\\\",\\\"Prince\\\",\\\"Purcell\\\",\\\"Quent\\\",\\\"Quiggly\\\",\\\"Quigman\\\",\\\"Quill\\\",\\\"Quincey\\\",\\\"Quincy\\\",\\\"Quint\\\",\\\"Rab\\\",\\\"Rad\\\",\\\"Radcliffe\\\",\\\"Rafe\\\",\\\"Rahul\\\",\\\"Ralph\\\",\\\"Ramon\\\",\\\"Ramsey\\\",\\\"Rand\\\",\\\"Randal\\\",\\\"Randall\\\",\\\"Ray\\\",\\\"Raymundo\\\",\\\"Raynor\\\",\\\"Reagan\\\",\\\"Redford\\\",\\\"Redmond\\\",\\\"Reg\\\",\\\"Regan\\\",\\\"Regen\\\",\\\"Reggie\\\",\\\"Reggis\\\",\\\"Reginald\\\",\\\"Reginauld\\\",\\\"Reinhard\\\",\\\"Rem\\\",\\\"Remus\\\",\\\"Renaldo\\\",\\\"Renaud\\\",\\\"Reube\\\",\\\"Reuben\\\",\\\"Reynard\\\",\\\"Reza\\\",\\\"Rich\\\",\\\"Richard\\\",\\\"Richie\\\",\\\"Rickie\\\",\\\"Ricky\\\",\\\"Rik\\\",\\\"Ripley\\\",\\\"Robert\\\",\\\"Roberto\\\",\\\"Robinson\\\",\\\"Rocky\\\",\\\"Rodd\\\",\\\"Roddy\\\",\\\"Roderich\\\",\\\"Rodney\\\",\\\"Rodolphe\\\",\\\"Rodrigo\\\",\\\"Rog\\\",\\\"Roger\\\",\\\"Roice\\\",\\\"Roland\\\",\\\"Rolfe\\\",\\\"Rolph\\\",\\\"Roni\\\",\\\"Ronnie\\\",\\\"Roosevelt\\\",\\\"Roscoe\\\",\\\"Rowland\\\",\\\"Royce\\\",\\\"Ruby\\\",\\\"Rudolf\\\",\\\"Rudyard\\\",\\\"Rufe\\\",\\\"Russel\\\",\\\"Russell\\\",\\\"Rutledge\\\",\\\"Rutter\\\",\\\"Salem\\\",\\\"Salim\\\",\\\"Salmon\\\",\\\"Salomo\\\",\\\"Salvador\\\",\\\"Salvidor\\\",\\\"Sammy\\\",\\\"Sander\\\",\\\"Sandy\\\",\\\"Sanford\\\",\\\"Sasha\\\",\\\"Saul\\\",\\\"Sauncho\\\",\\\"Saunders\\\",\\\"Saw\\\",\\\"Sawyer\\\",\\\"Say\\\",\\\"Sayer\\\",\\\"Sayers\\\",\\\"Sayres\\\",\\\"Schroeder\\\",\\\"Schuyler\\\",\\\"Scot\\\",\\\"Scotti\\\",\\\"Scottie\\\",\\\"Selby\\\",\\\"Sergio\\\",\\\"Shaine\\\",\\\"Shannon\\\",\\\"Shaun\\\",\\\"Shawn\\\",\\\"Shayne\\\",\\\"Shea\\\",\\\"Sheffie\\\",\\\"Sheffield\\\",\\\"Sheffy\\\",\\\"Shell\\\",\\\"Shepperd\\\",\\\"Sherlocke\\\",\\\"Shurlocke\\\",\\\"Shurwood\\\",\\\"Siffre\\\",\\\"Sig\\\",\\\"Sigfried\\\",\\\"Sigmund\\\",\\\"Silvan\\\",\\\"Silvano\\\",\\\"Silvester\\\",\\\"Simeon\\\",\\\"Simone\\\",\\\"Sinclare\\\",\\\"Siward\\\",\\\"Skell\\\",\\\"Skip\\\",\\\"Skipp\\\",\\\"Skylar\\\",\\\"Sloane\\\",\\\"Sly\\\",\\\"Sol\\\",\\\"Sollie\\\",\\\"Solly\\\",\\\"Son\\\",\\\"Sonny\\\",\\\"Spence\\\",\\\"Spike\\\",\\\"Staford\\\",\\\"Stanford\\\",\\\"Stanislaw\\\",\\\"Stanly\\\",\\\"Stanton\\\",\\\"Stanwood\\\",\\\"Sterne\\\",\\\"Steve\\\",\\\"Steven\\\",\\\"Stew\\\",\\\"Stillmann\\\",\\\"Sting\\\",\\\"Stu\\\",\\\"Stuart\\\",\\\"Sturgis\\\",\\\"Sunny\\\",\\\"Sven\\\",\\\"Swen\\\",\\\"Sydney\\\",\\\"Sylvan\\\",\\\"Taber\\\",\\\"Tabor\\\",\\\"Taddeus\\\",\\\"Tadeas\\\",\\\"Taite\\\",\\\"Talbert\\\",\\\"Talbot\\\",\\\"Tallie\\\",\\\"Tamas\\\",\\\"Tanner\\\",\\\"Tanney\\\",\\\"Tanny\\\",\\\"Tarrant\\\",\\\"Tarzan\\\",\\\"Tate\\\",\\\"Ted\\\",\\\"Teddie\\\",\\\"Teddy\\\",\\\"Tedrick\\\",\\\"Teodoor\\\",\\\"Teodor\\\",\\\"Terence\\\",\\\"Terrell\\\",\\\"Terrence\\\",\\\"Terri\\\",\\\"Terrill\\\",\\\"Thaddus\\\",\\\"Thadeus\\\",\\\"Thaine\\\",\\\"Thane\\\",\\\"Thaxter\\\",\\\"Theodore\\\",\\\"Thor\\\",\\\"Thorndike\\\",\\\"Thornton\\\",\\\"Thorny\\\",\\\"Thurstan\\\",\\\"Thurston\\\",\\\"Tiebold\\\",\\\"Tim\\\",\\\"Timmie\\\",\\\"Timotheus\\\",\\\"Tobe\\\",\\\"Tobiah\\\",\\\"Tobie\\\",\\\"Toddy\\\",\\\"Tomas\\\",\\\"Tomlin\\\",\\\"Tony\\\",\\\"Torey\\\",\\\"Torin\\\",\\\"Torrin\\\",\\\"Town\\\",\\\"Tracey\\\",\\\"Travers\\\",\\\"Tray\\\",\\\"Tre\\\",\\\"Trent\\\",\\\"Trev\\\",\\\"Trever\\\",\\\"Trevor\\\",\\\"Truman\\\",\\\"Tuckie\\\",\\\"Tucky\\\",\\\"Tull\\\",\\\"Tulley\\\",\\\"Ty\\\",\\\"Tyler\\\",\\\"Tymon\\\",\\\"Tyrus\\\",\\\"Tyson\\\",\\\"Ugo\\\",\\\"Ulberto\\\",\\\"Ulric\\\",\\\"Ulrich\\\",\\\"Ulrick\\\",\\\"Urbanus\\\",\\\"Uri\\\",\\\"Urson\\\",\\\"Val\\\",\\\"Valdemar\\\",\\\"Vale\\\",\\\"Vasilis\\\",\\\"Vasily\\\",\\\"Vassily\\\",\\\"Vern\\\",\\\"Verne\\\",\\\"Verney\\\",\\\"Vernon\\\",\\\"Vibhu\\\",\\\"Vijay\\\",\\\"Vin\\\",\\\"Vince\\\",\\\"Vincents\\\",\\\"Vinny\\\",\\\"Virgilio\\\",\\\"Vito\\\",\\\"Vladimir\\\",\\\"Wait\\\",\\\"Waiter\\\",\\\"Wald\\\",\\\"Waldemar\\\",\\\"Walden\\\",\\\"Waldo\\\",\\\"Waldon\\\",\\\"Wallace\\\",\\\"Wallache\\\",\\\"Wallas\\\",\\\"Wallis\\\",\\\"Wally\\\",\\\"Walsh\\\",\\\"Walter\\\",\\\"Warde\\\",\\\"Warden\\\",\\\"Ware\\\",\\\"Waring\\\",\\\"Warren\\\",\\\"Waylan\\\",\\\"Wayland\\\",\\\"Waylon\\\",\\\"Webb\\\",\\\"Weider\\\",\\\"Wendall\\\",\\\"Wendell\\\",\\\"Wesley\\\",\\\"Westbrook\\\",\\\"Westbrooke\\\",\\\"Weston\\\",\\\"Whitaker\\\",\\\"Wiley\\\",\\\"Wilhelm\\\",\\\"Willdon\\\",\\\"Willie\\\",\\\"Wilmer\\\",\\\"Winford\\\",\\\"Winn\\\",\\\"Winny\\\",\\\"Winston\\\",\\\"Wit\\\",\\\"Witold\\\",\\\"Wittie\\\",\\\"Witty\\\",\\\"Woodrow\\\",\\\"Woody\\\",\\\"Wyatan\\\",\\\"Wyatt\\\",\\\"Wynton\\\",\\\"Yanaton\\\",\\\"Yance\\\",\\\"Yehudi\\\",\\\"Yigal\\\",\\\"Zacharias\\\",\\\"Zachery\\\",\\\"Zack\\\",\\\"Zak\\\",\\\"Zane\\\",\\\"Zary\\\",\\\"Zebulon\\\",\\\"Zed\\\",\\\"Zerk\\\",\\\"Zollie\\\",\\\"Zolly\\\"]\"}","{\"DisplayText:str\":\"Random Female Names\",\"DisplayIcon:num\":\"309\",\"NameSets:arraystr\":\"[\\\"Abbi\\\",\\\"Abigael\\\",\\\"Adah\\\",\\\"Addie\\\",\\\"Adeline\\\",\\\"Adena\\\",\\\"Adiana\\\",\\\"Adora\\\",\\\"Adore\\\",\\\"Adorne\\\",\\\"Adrian\\\",\\\"Adriana\\\",\\\"Adriane\\\",\\\"Adrianna\\\",\\\"Adrianne\\\",\\\"Adriena\\\",\\\"Agna\\\",\\\"Agnola\\\",\\\"Aida\\\",\\\"Aidan\\\",\\\"Aila\\\",\\\"Aile\\\",\\\"Aime\\\",\\\"Alayne\\\",\\\"Aleece\\\",\\\"Alessandra\\\",\\\"Alfie\\\",\\\"Alica\\\",\\\"Alice\\\",\\\"Alina\\\",\\\"Aline\\\",\\\"Alis\\\",\\\"Alisun\\\",\\\"Aliza\\\",\\\"Alleen\\\",\\\"Allene\\\",\\\"Allison\\\",\\\"Allyce\\\",\\\"Allyson\\\",\\\"Alma\\\",\\\"Almeria\\\",\\\"Alvinia\\\",\\\"Amalie\\\",\\\"Ame\\\",\\\"Amie\\\",\\\"Anabel\\\",\\\"Anabella\\\",\\\"Andi\\\",\\\"Andra\\\",\\\"Andreana\\\",\\\"Andromache\\\",\\\"Anette\\\",\\\"Ange\\\",\\\"Angelina\\\",\\\"Ania\\\",\\\"Anitra\\\",\\\"Ann\\\",\\\"Anna\\\",\\\"Annabela\\\",\\\"Annalena\\\",\\\"Annamaria\\\",\\\"Annette\\\",\\\"Annice\\\",\\\"Appolonia\\\",\\\"Arda\\\",\\\"Ardelis\\\",\\\"Ardine\\\",\\\"Ardith\\\",\\\"Ardyth\\\",\\\"Aridatha\\\",\\\"Arleta\\\",\\\"Arleyne\\\",\\\"Arlina\\\",\\\"Arline\\\",\\\"Arly\\\",\\\"Ashlen\\\",\\\"Ashley\\\",\\\"Ashlie\\\",\\\"Asia\\\",\\\"Astra\\\",\\\"Atalanta\\\",\\\"Athena\\\",\\\"Atlante\\\",\\\"Aubrie\\\",\\\"Audrey\\\",\\\"Aurel\\\",\\\"Aurelia\\\",\\\"Avie\\\",\\\"Avrit\\\",\\\"Bamby\\\",\\\"Barbey\\\",\\\"Barbie\\\",\\\"Barry\\\",\\\"Bathsheba\\\",\\\"Batsheva\\\",\\\"Bea\\\",\\\"Beatrice\\\",\\\"Beatrisa\\\",\\\"Beatriz\\\",\\\"Beau\\\",\\\"Becca\\\",\\\"Becki\\\",\\\"Beckie\\\",\\\"Becky\\\",\\\"Beitris\\\",\\\"Bel\\\",\\\"Belita\\\",\\\"Bell\\\",\\\"Bellina\\\",\\\"Benetta\\\",\\\"Benita\\\",\\\"Beret\\\",\\\"Berna\\\",\\\"Bernadine\\\",\\\"Bernardine\\\",\\\"Berri\\\",\\\"Berry\\\",\\\"Berte\\\",\\\"Bertha\\\",\\\"Betta\\\",\\\"Bette\\\",\\\"Betti\\\",\\\"Bevvy\\\",\\\"Bianca\\\",\\\"Bianka\\\",\\\"Billy\\\",\\\"Binny\\\",\\\"Birgit\\\",\\\"Blanch\\\",\\\"Blinni\\\",\\\"Blithe\\\",\\\"Blondell\\\",\\\"Bobina\\\",\\\"Bobinette\\\",\\\"Brandea\\\",\\\"Brandise\\\",\\\"Breena\\\",\\\"Brenda\\\",\\\"Brenn\\\",\\\"Brianne\\\",\\\"Bridgett\\\",\\\"Bridie\\\",\\\"Brier\\\",\\\"Brietta\\\",\\\"Brita\\\",\\\"Britni\\\",\\\"Britta\\\",\\\"Brook\\\",\\\"Brooks\\\",\\\"Camila\\\",\\\"Cammie\\\",\\\"Cappella\\\",\\\"Caprice\\\",\\\"Carena\\\",\\\"Carie\\\",\\\"Carlee\\\",\\\"Carline\\\",\\\"Carlita\\\",\\\"Carlyn\\\",\\\"Carlynne\\\",\\\"Carmelia\\\",\\\"Carmella\\\",\\\"Carmine\\\",\\\"Carmon\\\",\\\"Carola\\\",\\\"Carolyne\\\",\\\"Carrie\\\",\\\"Caryn\\\",\\\"Casia\\\",\\\"Cassandry\\\",\\\"Cassey\\\",\\\"Cassi\\\",\\\"Cat\\\",\\\"Cate\\\",\\\"Catherina\\\",\\\"Cathryn\\\",\\\"Catrina\\\",\\\"Ceil\\\",\\\"Cele\\\",\\\"Celene\\\",\\\"Celestia\\\",\\\"Celinka\\\",\\\"Chanda\\\",\\\"Charin\\\",\\\"Charity\\\",\\\"Charlean\\\",\\\"Charlot\\\",\\\"Charmaine\\\",\\\"Charmane\\\",\\\"Chelsey\\\",\\\"Cherida\\\",\\\"Cherlyn\\\",\\\"Chickie\\\",\\\"Chloe\\\",\\\"Chloris\\\",\\\"Chriss\\\",\\\"Chrissy\\\",\\\"Christal\\\",\\\"Christean\\\",\\\"Christen\\\",\\\"Christie\\\",\\\"Chrysa\\\",\\\"Chrystal\\\",\\\"Chryste\\\",\\\"Cindee\\\",\\\"Cindelyn\\\",\\\"Cinderella\\\",\\\"Cindie\\\",\\\"Cindra\\\",\\\"Claire\\\",\\\"Clara\\\",\\\"Claretta\\\",\\\"Clarette\\\",\\\"Clari\\\",\\\"Claribel\\\",\\\"Clarissa\\\",\\\"Clarisse\\\",\\\"Claudette\\\",\\\"Clea\\\",\\\"Clemence\\\",\\\"Clovis\\\",\\\"Colleen\\\",\\\"Collete\\\",\\\"Colly\\\",\\\"Conchita\\\",\\\"Connie\\\",\\\"Constantina\\\",\\\"Corabel\\\",\\\"Cordelia\\\",\\\"Cordula\\\",\\\"Coreen\\\",\\\"Corette\\\",\\\"Corey\\\",\\\"Cori\\\",\\\"Coriss\\\",\\\"Cosette\\\",\\\"Crista\\\",\\\"Cristabel\\\",\\\"Cristin\\\",\\\"Crystie\\\",\\\"Cynthea\\\",\\\"Dalenna\\\",\\\"Daloris\\\",\\\"Danell\\\",\\\"Danica\\\",\\\"Daniela\\\",\\\"Daniele\\\",\\\"Danita\\\",\\\"Danya\\\",\\\"Darb\\\",\\\"Darda\\\",\\\"Daria\\\",\\\"Darya\\\",\\\"Davida\\\",\\\"Davine\\\",\\\"Deana\\\",\\\"Deb\\\",\\\"Debra\\\",\\\"Dee\\\",\\\"Deena\\\",\\\"Deidre\\\",\\\"Deina\\\",\\\"Dell\\\",\\\"Delores\\\",\\\"Demetris\\\",\\\"Denice\\\",\\\"Denyse\\\",\\\"Desaree\\\",\\\"Desiree\\\",\\\"Devan\\\",\\\"Devin\\\",\\\"Devinne\\\",\\\"Devon\\\",\\\"Devonne\\\",\\\"Dew\\\",\\\"Diamond\\\",\\\"Diandra\\\",\\\"Diane\\\",\\\"Dianna\\\",\\\"Didi\\\",\\\"Dierdre\\\",\\\"Dion\\\",\\\"Dody\\\",\\\"Dollie\\\",\\\"Dona\\\",\\\"Donnamarie\\\",\\\"Donny\\\",\\\"Doralin\\\",\\\"Doreen\\\",\\\"Dorelia\\\",\\\"Dorella\\\",\\\"Dorie\\\",\\\"Doris\\\",\\\"Dorit\\\",\\\"Dorita\\\",\\\"Dorolisa\\\",\\\"Dorri\\\",\\\"Dorthy\\\",\\\"Dosi\\\",\\\"Dot\\\",\\\"Dotti\\\",\\\"Dove\\\",\\\"Dulcia\\\",\\\"E'Lane\\\",\\\"Eadith\\\",\\\"Edeline\\\",\\\"Eden\\\",\\\"Edie\\\",\\\"Editha\\\",\\\"Edwina\\\",\\\"Edythe\\\",\\\"Eilis\\\",\\\"Elane\\\",\\\"Elbertina\\\",\\\"Eleanora\\\",\\\"Eleonora\\\",\\\"Elfreda\\\",\\\"Elisabeth\\\",\\\"Elizabet\\\",\\\"Elka\\\",\\\"Elke\\\",\\\"Elladine\\\",\\\"Ellie\\\",\\\"Ellissa\\\",\\\"Elmira\\\",\\\"Elnora\\\",\\\"Eloisa\\\",\\\"Eloise\\\",\\\"Elvina\\\",\\\"Elvira\\\",\\\"Elyn\\\",\\\"Elysha\\\",\\\"Emeline\\\",\\\"Emelita\\\",\\\"Emmaline\\\",\\\"Emmalynne\\\",\\\"Emmye\\\",\\\"Emylee\\\",\\\"Engracia\\\",\\\"Enrica\\\",\\\"Eolande\\\",\\\"Erica\\\",\\\"Ericha\\\",\\\"Ermina\\\",\\\"Ernestine\\\",\\\"Esma\\\",\\\"Esme\\\",\\\"Esmerelda\\\",\\\"Essa\\\",\\\"Ester\\\",\\\"Ethelda\\\",\\\"Ethyl\\\",\\\"Etta\\\",\\\"Evangelina\\\",\\\"Evelina\\\",\\\"Eveline\\\",\\\"Evelyn\\\",\\\"Evvy\\\",\\\"Eyde\\\",\\\"Eydie\\\",\\\"Fae\\\",\\\"Faith\\\",\\\"Fancie\\\",\\\"Fania\\\",\\\"Fannie\\\",\\\"Fanny\\\",\\\"Farica\\\",\\\"Faustina\\\",\\\"Fayth\\\",\\\"Felicle\\\",\\\"Fernande\\\",\\\"Fifine\\\",\\\"Filippa\\\",\\\"Fleurette\\\",\\\"Flo\\\",\\\"Florella\\\",\\\"Floria\\\",\\\"Florice\\\",\\\"Florinda\\\",\\\"Floris\\\",\\\"Florri\\\",\\\"Flossi\\\",\\\"Flower\\\",\\\"Francene\\\",\\\"Francis\\\",\\\"Franky\\\",\\\"Franni\\\",\\\"Frannie\\\",\\\"Fred\\\",\\\"Freida\\\",\\\"Gabbey\\\",\\\"Gabie\\\",\\\"Gail\\\",\\\"Galina\\\",\\\"Gayla\\\",\\\"Gayleen\\\",\\\"Genevieve\\\",\\\"Genevra\\\",\\\"Genna\\\",\\\"Genovera\\\",\\\"Georgetta\\\",\\\"Georgianne\\\",\\\"Gerhardine\\\",\\\"Gerrie\\\",\\\"Gert\\\",\\\"Gertrudis\\\",\\\"Giacinta\\\",\\\"Giana\\\",\\\"Gianna\\\",\\\"Gilli\\\",\\\"Gillian\\\",\\\"Gillie\\\",\\\"Ginelle\\\",\\\"Ginnifer\\\",\\\"Gisele\\\",\\\"Gisella\\\",\\\"Glennie\\\",\\\"Glennis\\\",\\\"Glori\\\",\\\"Gloriana\\\",\\\"Glorianna\\\",\\\"Glory\\\",\\\"Glynda\\\",\\\"Glynis\\\",\\\"Goldia\\\",\\\"Greta\\\",\\\"Gretel\\\",\\\"Grethel\\\",\\\"Grier\\\",\\\"Griselda\\\",\\\"Guillemette\\\",\\\"Gusty\\\",\\\"Gwenny\\\",\\\"Gwenora\\\",\\\"Haleigh\\\",\\\"Hannah\\\",\\\"Hannie\\\",\\\"Harmonie\\\",\\\"Harriette\\\",\\\"Harriot\\\",\\\"Heddi\\\",\\\"Heida\\\",\\\"Heidi\\\",\\\"Heidie\\\",\\\"Helaine\\\",\\\"Helsa\\\",\\\"Helyn\\\",\\\"Hendrika\\\",\\\"Henriette\\\",\\\"Hephzibah\\\",\\\"Hestia\\\",\\\"Hetti\\\",\\\"Hillary\\\",\\\"Honey\\\",\\\"Honor\\\",\\\"Honoria\\\",\\\"Horatia\\\",\\\"Hortensia\\\",\\\"Hulda\\\",\\\"Hyacinthe\\\",\\\"Idalia\\\",\\\"Ike\\\",\\\"Ileana\\\",\\\"Illa\\\",\\\"Inesita\\\",\\\"Inga\\\",\\\"Ingaberg\\\",\\\"Ingaborg\\\",\\\"Inge\\\",\\\"Ingeberg\\\",\\\"Inger\\\",\\\"Ioana\\\",\\\"Irene\\\",\\\"Isa\\\",\\\"Isabeau\\\",\\\"Isabella\\\",\\\"Isadore\\\",\\\"Ivett\\\",\\\"Izabel\\\",\\\"Izzi\\\",\\\"Jacquelin\\\",\\\"Jacquelyn\\\",\\\"Jacynth\\\",\\\"Jada\\\",\\\"Jade\\\",\\\"Jaimie\\\",\\\"Jami\\\",\\\"Jamie\\\",\\\"Janela\\\",\\\"Janet\\\",\\\"Janeta\\\",\\\"Janice\\\",\\\"Janna\\\",\\\"Jaquenetta\\\",\\\"Jasmina\\\",\\\"Jayme\\\",\\\"Jayne\\\",\\\"Jean\\\",\\\"Jeanelle\\\",\\\"Jeanette\\\",\\\"Jeanine\\\",\\\"Jeanna\\\",\\\"Jeannine\\\",\\\"Jelene\\\",\\\"Jemima\\\",\\\"Jeniffer\\\",\\\"Jenine\\\",\\\"Jennie\\\",\\\"Jennifer\\\",\\\"Jeralee\\\",\\\"Jerrie\\\",\\\"Jerrilee\\\",\\\"Jessalyn\\\",\\\"Jessi\\\",\\\"Jessica\\\",\\\"Jessie\\\",\\\"Jilleen\\\",\\\"JoAnn\\\",\\\"JoAnne\\\",\\\"Joanna\\\",\\\"Jobie\\\",\\\"Jobina\\\",\\\"Joby\\\",\\\"Jody\\\",\\\"Joell\\\",\\\"Joelle\\\",\\\"Joelynn\\\",\\\"Johannah\\\",\\\"Joleen\\\",\\\"Jolene\\\",\\\"Joli\\\",\\\"Joni\\\",\\\"Jorie\\\",\\\"Joselyn\\\",\\\"Josi\\\",\\\"Josselyn\\\",\\\"Jourdan\\\",\\\"Joyann\\\",\\\"Joyce\\\",\\\"Julee\\\",\\\"Julianna\\\",\\\"Juliet\\\",\\\"Kaile\\\",\\\"Kaitlin\\\",\\\"Kalindi\\\",\\\"Karalee\\\",\\\"Karie\\\",\\\"Karil\\\",\\\"Karlee\\\",\\\"Karlotta\\\",\\\"Karly\\\",\\\"Karna\\\",\\\"Kate\\\",\\\"Katee\\\",\\\"Kath\\\",\\\"Kathe\\\",\\\"Katheleen\\\",\\\"Kathy\\\",\\\"Kati\\\",\\\"Katinka\\\",\\\"Katusha\\\",\\\"Kee\\\",\\\"Kelcie\\\",\\\"Kelcy\\\",\\\"Kelley\\\",\\\"Keriann\\\",\\\"Kerri\\\",\\\"Kerrin\\\",\\\"Kesley\\\",\\\"Kessia\\\",\\\"Kiele\\\",\\\"Kimmi\\\",\\\"Kirbee\\\",\\\"Kirby\\\",\\\"Konstanze\\\",\\\"Kordula\\\",\\\"Korry\\\",\\\"Krissy\\\",\\\"Kristien\\\",\\\"Krystalle\\\",\\\"Lacy\\\",\\\"Lamb\\\",\\\"Laney\\\",\\\"Lanny\\\",\\\"Lara\\\",\\\"Larisa\\\",\\\"Laryssa\\\",\\\"Latashia\\\",\\\"Latrena\\\",\\\"Lauren\\\",\\\"Laurene\\\",\\\"Lauretta\\\",\\\"Leah\\\",\\\"Leanne\\\",\\\"Leanora\\\",\\\"Leeann\\\",\\\"Leena\\\",\\\"Leia\\\",\\\"Leiah\\\",\\\"Leigha\\\",\\\"Leland\\\",\\\"Lelia\\\",\\\"Lena\\\",\\\"Lenna\\\",\\\"Leone\\\",\\\"Leonie\\\",\\\"Leontyne\\\",\\\"Leora\\\",\\\"Lesli\\\",\\\"Letitia\\\",\\\"Lia\\\",\\\"Lib\\\",\\\"Libbey\\\",\\\"Libbie\\\",\\\"Lilas\\\",\\\"Lilli\\\",\\\"Lindy\\\",\\\"Linea\\\",\\\"Linell\\\",\\\"Linnea\\\",\\\"Linzy\\\",\\\"Lise\\\",\\\"Lissie\\\",\\\"Lissy\\\",\\\"Lizabeth\\\",\\\"Lizbeth\\\",\\\"Lizette\\\",\\\"Lolita\\\",\\\"Lonni\\\",\\\"Lora\\\",\\\"Loree\\\",\\\"Lorena\\\",\\\"Lorettalorna\\\",\\\"Lorianne\\\",\\\"Lorie\\\",\\\"Lorine\\\",\\\"Lorrie\\\",\\\"Lotta\\\",\\\"Lou\\\",\\\"Louise\\\",\\\"Luana\\\",\\\"Lucinda\\\",\\\"Lucky\\\",\\\"Lurline\\\",\\\"Lust\\\",\\\"Lynde\\\",\\\"Lyndell\\\",\\\"Lyndsey\\\",\\\"Lynette\\\",\\\"Lynnell\\\",\\\"Mabel\\\",\\\"Mable\\\",\\\"Madalyn\\\",\\\"Maddi\\\",\\\"Maddy\\\",\\\"Madelaine\\\",\\\"Madelena\\\",\\\"Madella\\\",\\\"Madlen\\\",\\\"Madona\\\",\\\"Mae\\\",\\\"Maegan\\\",\\\"Magdaia\\\",\\\"Magdalen\\\",\\\"Maggee\\\",\\\"Maggy\\\",\\\"Malia\\\",\\\"Malinde\\\",\\\"Malissa\\\",\\\"Malka\\\",\\\"Mallissa\\\",\\\"Malory\\\",\\\"Mandi\\\",\\\"Mandie\\\",\\\"Mandy\\\",\\\"Marcella\\\",\\\"Mareah\\\",\\\"Maressa\\\",\\\"Marga\\\",\\\"Margaux\\\",\\\"Margeaux\\\",\\\"Marget\\\",\\\"Margie\\\",\\\"Marglerite\\\",\\\"Margurite\\\",\\\"Mariam\\\",\\\"Marianne\\\",\\\"Maribelle\\\",\\\"Marieann\\\",\\\"Marigold\\\",\\\"Marin\\\",\\\"Marina\\\",\\\"Marita\\\",\\\"Marja\\\",\\\"Marjory\\\",\\\"Marketa\\\",\\\"Marlena\\\",\\\"Marney\\\",\\\"Marthena\\\",\\\"Martica\\\",\\\"Martita\\\",\\\"Mary\\\",\\\"Marya\\\",\\\"Maryanna\\\",\\\"Maryjane\\\",\\\"Maryjo\\\",\\\"Masha\\\",\\\"Maud\\\",\\\"Maxie\\\",\\\"Maxine\\\",\\\"Maybelle\\\",\\\"Meagan\\\",\\\"Meggy\\\",\\\"Mel\\\",\\\"Melanie\\\",\\\"Melantha\\\",\\\"Melany\\\",\\\"Melba\\\",\\\"Melesa\\\",\\\"Melisenda\\\",\\\"Melisent\\\",\\\"Melissa\\\",\\\"Mellissa\\\",\\\"Mercie\\\",\\\"Merilee\\\",\\\"Merissa\\\",\\\"Merla\\\",\\\"Merridie\\\",\\\"Meryl\\\",\\\"Meta\\\",\\\"Mignon\\\",\\\"Milly\\\",\\\"Mimi\\\",\\\"Mina\\\",\\\"Mindy\\\",\\\"Minetta\\\",\\\"Mirabel\\\",\\\"Miran\\\",\\\"Mirilla\\\",\\\"Misha\\\",\\\"Misti\\\",\\\"Modestia\\\",\\\"Mona\\\",\\\"Monah\\\",\\\"Monica\\\",\\\"Monika\\\",\\\"Moreen\\\",\\\"Morgana\\\",\\\"Morganica\\\",\\\"Morissa\\\",\\\"Morna\\\",\\\"Muriel\\\",\\\"Myrah\\\",\\\"Myrilla\\\",\\\"Myrna\\\",\\\"Myrtie\\\",\\\"Nadeen\\\",\\\"Nananne\\\",\\\"Nanette\\\",\\\"Nannette\\\",\\\"Natalya\\\",\\\"Neda\\\",\\\"Nedi\\\",\\\"Neile\\\",\\\"Nelle\\\",\\\"Nelli\\\",\\\"Nellie\\\",\\\"Nerty\\\",\\\"Nessie\\\",\\\"Nevsa\\\",\\\"Neysa\\\",\\\"Nicholle\\\",\\\"Nicola\\\",\\\"Nicolina\\\",\\\"Niki\\\",\\\"Nina\\\",\\\"Ninon\\\",\\\"Nissy\\\",\\\"Noel\\\",\\\"Noelani\\\",\\\"Noelle\\\",\\\"Noemi\\\",\\\"Nola\\\",\\\"Nomi\\\",\\\"Nonie\\\",\\\"Norma\\\",\\\"Odessa\\\",\\\"Odilia\\\",\\\"Olenka\\\",\\\"Oneida\\\",\\\"Onlea\\\",\\\"Ophelia\\\",\\\"Ophelie\\\",\\\"Ora\\\",\\\"Orella\\\",\\\"Otha\\\",\\\"Othilie\\\",\\\"Ottilie\\\",\\\"Pacifica\\\",\\\"Pam\\\",\\\"Pammi\\\",\\\"Patti\\\",\\\"Paulita\\\",\\\"Pearla\\\",\\\"Perle\\\",\\\"Pet\\\",\\\"Petra\\\",\\\"Petrina\\\",\\\"Phelia\\\",\\\"Philly\\\",\\\"Phoebe\\\",\\\"Phylis\\\",\\\"Phyllys\\\",\\\"Pier\\\",\\\"Poppy\\\",\\\"Pris\\\",\\\"Prudence\\\",\\\"Queada\\\",\\\"Quintina\\\",\\\"Rachael\\\",\\\"Rae\\\",\\\"Raf\\\",\\\"Rahal\\\",\\\"Ralina\\\",\\\"Ramona\\\",\\\"Randee\\\",\\\"Randene\\\",\\\"Ranee\\\",\\\"Rani\\\",\\\"Raquela\\\",\\\"Raven\\\",\\\"Ray\\\",\\\"Regan\\\",\\\"Reggie\\\",\\\"Reine\\\",\\\"Rennie\\\",\\\"Reta\\\",\\\"Rhody\\\",\\\"Rikki\\\",\\\"Rivalee\\\",\\\"Robbi\\\",\\\"Robinetta\\\",\\\"Rochell\\\",\\\"Rochella\\\",\\\"Romonda\\\",\\\"Rora\\\",\\\"Rory\\\",\\\"Rosalinda\\\",\\\"Rosalinde\\\",\\\"Rosario\\\",\\\"Roseanna\\\",\\\"Roseanne\\\",\\\"Rosemaria\\\",\\\"Rosene\\\",\\\"Rosy\\\",\\\"Rubetta\\\",\\\"Rubi\\\",\\\"Ruthie\\\",\\\"Rycca\\\",\\\"Sadella\\\",\\\"Salli\\\",\\\"Salome\\\",\\\"Samuella\\\",\\\"Sande\\\",\\\"Sandye\\\",\\\"Sapphira\\\",\\\"Savina\\\",\\\"Scotty\\\",\\\"Sean\\\",\\\"Seka\\\",\\\"Selena\\\",\\\"Selma\\\",\\\"Shamit\\\",\\\"Shanie\\\",\\\"Shannon\\\",\\\"Shanon\\\",\\\"Sharla\\\",\\\"Sharleen\\\",\\\"Sharna\\\",\\\"Sharon\\\",\\\"Sharona\\\",\\\"Sharron\\\",\\\"Sharyl\\\",\\\"Shauna\\\",\\\"Shawnee\\\",\\\"Shay\\\",\\\"Sheilakathryn\\\",\\\"Shelia\\\",\\\"Sheri\\\",\\\"Sherrie\\\",\\\"Shilpa\\\",\\\"Shirlee\\\",\\\"Shirlene\\\",\\\"Shirley\\\",\\\"Shirline\\\",\\\"Sibbie\\\",\\\"Sibley\\\",\\\"Silva\\\",\\\"Simonne\\\",\\\"Sonja\\\",\\\"Sonya\\\",\\\"Sophronia\\\",\\\"Stacey\\\",\\\"Stefania\\\",\\\"Steffane\\\",\\\"Stoddard\\\",\\\"Stormie\\\",\\\"Susannah\\\",\\\"Susette\\\",\\\"Susi\\\",\\\"Suzann\\\",\\\"Suzy\\\",\\\"Sybil\\\",\\\"Sybilla\\\",\\\"Sybille\\\",\\\"Sybyl\\\",\\\"Taffy\\\",\\\"Tallia\\\",\\\"Tallie\\\",\\\"Tally\\\",\\\"Tamra\\\",\\\"Tandie\\\",\\\"Tania\\\",\\\"Tara\\\",\\\"Tatiana\\\",\\\"Tawnya\\\",\\\"Teane\\\",\\\"Ted\\\",\\\"Tella\\\",\\\"Tera\\\",\\\"TeresaAnne\\\",\\\"Terese\\\",\\\"Teresita\\\",\\\"Terrye\\\",\\\"Terza\\\",\\\"Thea\\\",\\\"Theada\\\",\\\"Thekla\\\",\\\"Theodora\\\",\\\"Therese\\\",\\\"Thomasin\\\",\\\"Tiff\\\",\\\"Tildi\\\",\\\"Timmie\\\",\\\"Tiphany\\\",\\\"Tisha\\\",\\\"Tobey\\\",\\\"Toinette\\\",\\\"Tory\\\",\\\"Tova\\\",\\\"Trescha\\\",\\\"Tressa\\\",\\\"Trish\\\",\\\"Truda\\\",\\\"Trudey\\\",\\\"Ulla\\\",\\\"Ulrike\\\",\\\"Una\\\",\\\"Ursa\\\",\\\"Ursala\\\",\\\"Ursuline\\\",\\\"Uta\\\",\\\"Valaria\\\",\\\"Valentia\\\",\\\"Valerie\\\",\\\"Valina\\\",\\\"Vallie\\\",\\\"Vanessa\\\",\\\"Vanya\\\",\\\"Venita\\\",\\\"Vera\\\",\\\"Verena\\\",\\\"Verina\\\",\\\"Victoria\\\",\\\"Vikkie\\\",\\\"Vilma\\\",\\\"Vinnie\\\",\\\"Violante\\\",\\\"Virginia\\\",\\\"Viv\\\",\\\"Vivian\\\",\\\"Viviana\\\",\\\"Vivianne\\\",\\\"Wallie\\\",\\\"Wendeline\\\",\\\"Willow\\\",\\\"Willy\\\",\\\"Wilma\\\",\\\"Windy\\\",\\\"Winifred\\\",\\\"Winnie\\\",\\\"Wynne\\\",\\\"Yehudit\\\",\\\"Zaneta\\\",\\\"Zarah\\\",\\\"Zaria\\\",\\\"Zarla\\\",\\\"Zenia\\\",\\\"Zita\\\",\\\"Zonda\\\"]\"}"]
 * 
 * @param Scene
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @parent Scene
 * @type struct<BgSettings>
 * @desc Background settings for Scene_CreateCharacter.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @parent Scene
 * @type struct<Sound>
 * @desc These settings let you adjust the sound effects used for this plugin.
 * @default {"Create":"","create_name:str":"Chime2","create_volume:num":"90","create_pitch:num":"100","create_pan:num":"0","Dismiss":"","dismiss_name:str":"Fog1","dismiss_volume:num":"90","dismiss_pitch:num":"100","dismiss_pan:num":"0","Retrain":"","retrain_name:str":"Raise3","retrain_volume:num":"90","retrain_pitch:num":"100","retrain_pan:num":"0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @parent Scene
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"InstructionWindow":"","InstructionWindow_Class:str":"Please select a class.","InstructionWindow_Appearance:str":"Select an appearance!","InstructionWindow_Graphics:str":"Select graphics set!","InstructionWindow_Traits:str":"Select character traits!","InstructionWindow_Voices:str":"Select character traits!","InstructionWindow_Name:str":"Enter character name!","InstructionWindow_Confirm:str":"Confirm character details!","InstructionWindow_Dismiss:str":"Select a character to dismiss from the party.","InstructionWindow_Retrain:str":"Select a character to retrain anew.","PreviewWindow":"","PreviewWindow_CostText:str":"\\C[16]Cost","AppearanceWindow":"","AppearanceWindow_MoreCommand:str":"More...","AppearanceWindow_MoreIcon:num":"83","GraphicSetsWindow":"","GraphicSetsWindow_ClassNameFmt:str":"%1 Set","TraitTypesWindow":"","TraitTypesWindow_AcceptText:str":"Accept Traits","TraitTypesWindow_AcceptIcon:num":"164","TraitTypesWindow_TypeFmt:str":"\\C[16]%1","TraitTypesWindow_TypeIcon:num":"83","BattleVoiceWindow":"","BattleVoiceWindow_AcceptText:str":"Accept Traits","BattleVoiceWindow_AcceptIcon:num":"83","BattleVoiceWindow_NoVoice:str":"No Voice","NameCommandWindow":"","NameCommandWindow_AcceptText:str":"Accept Name","NameCommandWindow_AcceptIcon:num":"164","NameCommandWindow_ManualText:str":"Manual Name Entry","NameCommandWindow_ManualIcon:num":"83","ConfirmDataWindow":"","ConfirmDataWindow_NameText:str":"\\C[16]Name","ConfirmDataWindow_ClassText:str":"\\C[16]Class","ConfirmDataWindow_CostText:str":"\\C[16]Cost","ConfirmCommandWindow":"","ConfirmCommandWindow_ConfirmText:str":"Confirm","ConfirmCommandWindow_ConfirmIcon:num":"164","ConfirmCommandWindow_CancelText:str":"Revise","ConfirmCommandWindow_CancelIcon:num":"168","ButtonAssist":"","ButtonAssist_ClassText:str":"Exit","StatusMenu":"","StatusMenu_Profile:json":"\"\\\\N[%1] is hired recruit that joined \\\\N[1]'s party.\"","StatusMenu_Biography:json":"\"\\\\N[%1] is a %2 who joined \\\\N[1]\\\\'s party with goals and aspirations in mind.\"","StatusMenu_Biography_AutoWordWrap:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @parent Scene
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"General":"","SideBuffer:num":"48","ShowIcons:eval":"true","InstructionWindow":"","InstructionWindow_BgType:num":"0","InstructionWindow_TextAlign:str":"center","InstructionWindow_RectJS:func":"\"const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + Math.floor(this.calcWindowHeight(1, false) * 0.5);\\nreturn new Rectangle(wx, wy, ww - (this.showGoldWindow() ? this.mainCommandWidth() : 0), wh);\"","GoldWindow":"","GoldWindow_BgType:num":"0","GoldWindow_RectJS:func":"\"const instructRect = this.instructionWindowRect();\\n\\nconst ww = this.mainCommandWidth();\\nconst wh = instructRect.height;\\nconst wx = instructRect.x + instructRect.width;\\nconst wy = instructRect.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","PreviewWindow":"","PreviewWindow_BgType:num":"0","PreviewWindow_Padding:num":"4","PreviewWindow_Draw":"","PreviewWindow_Draw_AutoWordWrap:eval":"true","PreviewWindow_Draw_DarkRect:eval":"true","PreviewWindow_Draw_GoldCost:eval":"true","PreviewWindow_Picture":"","PreviewWindow_Picture_AnchorX:num":"0.5","PreviewWindow_Picture_AnchorY:num":"0.0","PreviewWindow_Picture_ScaleUp:eval":"true","PreviewWindow_Background":"","PreviewWindow_Background_AnchorX:num":"0.5","PreviewWindow_Background_AnchorY:num":"0.0","PreviewWindow_Background_ScaleUp:eval":"true","PreviewWindow_Background_RetrainBg:str":"Mountains1","GraphicsPreviewWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ClassWindow":"","ClassWindow_BgType:num":"0","ClassWindow_TextColorID:num":"17","ClassWindow_DefaultIcon:num":"96","ClassWindowItemCost":"","ClassWindow_CostTypeFmt:str":"\\}%2\\{%1","ClassWindow_QuantityFmt:str":"%2/%1","ClassWindow_DrawCost1:eval":"false","ClassListWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","AppearanceWindow":"","AppearanceWindow_BgType:num":"0","AppearanceWindow_MoreCommand:eval":"true","AppearanceWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","GraphicSetsWindow":"","GraphicSetsWindow_BgType:num":"0","GraphicSetsWindow_OtherClasses:eval":"true","GraphicSetsWindow_OtherFirst:eval":"true","GraphicSetsWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","TraitTypesWindow":"","TraitTypesWindow_BgType:num":"0","TraitTypesWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","TraitSetsWindow":"","TraitSetsWindow_BgType:num":"0","TraitSetsWindow_TextColorID:num":"17","TraitSetsWindow_Thickness:num":"3","TraitSetsWindowItemCost":"","TraitSetsWindow_CostTypeFmt:str":"\\}%2\\{%1","TraitSetsWindow_QuantityFmt:str":"%2/%1","TraitSetsWindow_DrawCost1:eval":"false","TraitSetsWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","BattleVoiceWindow":"","BattleVoiceWindow_BgType:num":"0","BattleVoiceWindow_TextColorID:num":"17","BattleVoiceWindow_Enable:eval":"true","BattleVoiceWindow_VoiceCommandIcon:num":"4","BattleVoiceWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameCurrentWindow":"","NameCurrentWindow_BgType:num":"0","NameCurrentWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameCommandWindow":"","NameCommandWindow_BgType:num":"0","NameCommandWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 4);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 3);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameEditWindow":"","NameEditWindow_BgType:num":"0","NameEditWindow_MaxLength:num":"16","NameEditWindow_NameWidthPadding:num":"8","NameEditWindow_RectJS:func":"\"const ww = 600;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaTop() + Math.ceil(this.calcWindowHeight(1, false) * (Graphics.boxHeight >= 700 ? 2 : 1.5));\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameInputWindow":"","NameInputWindow_BgType:num":"0","NameInputWindow_RectJS:func":"\"const editWindow = this.nameEditWindowRect();\\n\\nconst ww = editWindow.width;\\nconst wh = this.calcWindowHeight(9, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = editWindow.y + editWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConfirmDataWindow":"","ConfirmDataWindow_BgType:num":"0","ConfirmDataWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.calcWindowHeight(6, false);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConfirmCommandWindow":"","ConfirmCommandWindow_BgType:num":"0","ConfirmCommandWindow_PlayShopSound:eval":"true","ConfirmCommandWindow_RectJS:func":"\"const previewRect = this.graphicsPreviewWindowRect();\\n\\nconst ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = this.sideBuffer();\\nconst wy = previewRect.y + previewRect.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SelectCharaWindow":"","SelectCharaWindow_BgType:num":"0","SelectActorWindow_RectJS:func":"\"const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * Class List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ClassData:
 *
 * @param ClassID:num
 * @text Class ID
 * @type class
 * @desc The ID of the class that can be selected.
 * @default 1
 *
 * @param PreviewPicture:str
 * @text Preview Picture
 * @parent ClassID:num
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the preview picture.
 * Located in /img/pictures/
 * @default 
 *
 * @param PreviewParallax:str
 * @text Preview Background
 * @parent ClassID:num
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the preview background.
 * Located in /img/parallaxes/
 * @default 
 *
 * @param Description:json
 * @text Text Description
 * @parent ClassID:num
 * @type note
 * @desc Text description used for this class.
 * Shown in the preview window. Text codes allowed.
 * @default "Line1\nLine2\nLine3"
 * 
 * @param GraphicSet
 * @text Graphic Sets
 *
 * @param Graphics:arraystruct
 * @text Graphics List
 * @parent GraphicSet
 * @type struct<Graphic>[]
 * @desc A list of graphic sets that are tied to this class.
 * @default []
 * 
 * @param Requirements
 *
 * @param SwitchReq:num
 * @text Required Switch
 * @parent Requirements
 * @type switch
 * @desc What switch must be turned on for this class to show?
 * Use 0 to not require a switch.
 * @default 0
 *
 * @param GoldCost:num
 * @text Gold Cost
 * @parent Requirements
 * @type number
 * @desc How much gold should it cost to pick this class?
 * Use 0 to not require a gold cost.
 * @default 0
 *
 * @param ItemIdCost:num
 * @text Item Cost Type
 * @parent Requirements
 * @type item
 * @desc What item is needed to pick this class?
 * This determines the item type's ID.
 * @default 0
 *
 * @param ItemCountCost:num
 * @text Item Cost Quantity
 * @parent ItemIdCost:num
 * @type number
 * @min 1
 * @desc How many of the item is needed to pick this class?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * Graphic Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Graphic:
 *
 * @param Display
 * 
 * @param DisplayText:str
 * @text Display Text
 * @parent Display
 * @desc The text used to represent these graphics.
 * Text codes allowed.
 * @default Graphic Name
 * 
 * @param DisplayIcon:num
 * @text Display Icon
 * @parent Display
 * @desc The icon shown next to the Display Text.
 * @default 160
 *
 * @param PreviewParallax:str
 * @text Display Background
 * @parent Display
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the display background.
 * Located in /img/parallaxes/
 * @default 
 * 
 * @param Graphics
 *
 * @param FaceGraphic:str
 * @text Face Graphic
 * @parent Graphics
 * @type file
 * @dir img/faces/
 * @require 1
 * @desc Filename of the face graphic used.
 * @default 
 * 
 * @param FaceIndex:num
 * @text Face Index
 * @parent FaceGraphic:str
 * @type number
 * @desc What is the face index used?
 * Index values start at 0.
 * @default 0
 *
 * @param CharacterGraphic:str
 * @text Character Graphic
 * @parent Graphics
 * @type file
 * @dir img/characters/
 * @require 1
 * @desc Filename of the character graphic used.
 * @default 
 * 
 * @param CharacterIndex:num
 * @text Character Index
 * @parent CharacterGraphic:str
 * @type number
 * @desc What is the character index used?
 * Index values start at 0.
 * @default 0
 *
 * @param SvBattler:str
 * @text SV Battler
 * @parent Graphics
 * @type file
 * @dir img/sv_actors/
 * @require 1
 * @desc Filename of the sideview battler used.
 * @default 
 *
 * @param BattlePortrait:str
 * @text Battle Portrait
 * @parent Graphics
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the battle portrait.
 * Used for VisuMZ_1_BattleCore.
 * @default 
 *
 * @param MenuPortrait:str
 * @text Menu Portrait
 * @parent Graphics
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the main menu portrait.
 * Used for VisuMZ_1_MainMenuCore.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Graphic Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GraphicSet:
 * 
 * @param DisplayText:str
 * @text Display Text
 * @parent Display
 * @desc The text used to represent this graphic set.
 * Text codes allowed.
 * @default Graphic Set Name
 * 
 * @param DisplayIcon:num
 * @text Display Icon
 * @parent DisplayText:str
 * @desc The icon shown next to the Display Text.
 * @default 160
 *
 * @param PreviewPicture:str
 * @text Preview Picture
 * @parent DisplayText:str
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the preview picture.
 * Located in /img/pictures/
 * @default 
 *
 * @param PreviewParallax:str
 * @text Preview Background
 * @parent DisplayText:str
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the preview background.
 * Located in /img/parallaxes/
 * @default 
 *
 * @param SwitchReq:num
 * @text Required Switch
 * @parent DisplayText:str
 * @type switch
 * @desc What switch must be turned on for this set to show?
 * Use 0 to not require a switch.
 * @default 0
 *
 * @param Graphics:arraystruct
 * @text Graphics List
 * @parent GraphicSet
 * @type struct<Graphic>[]
 * @desc A list of graphic sets that are tied to this graphic set.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Name Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameSet:
 * 
 * @param DisplayText:str
 * @text Display Text
 * @parent Display
 * @desc The text used to represent this name set.
 * Text codes allowed.
 * @default Random Name Set
 * 
 * @param DisplayIcon:num
 * @text Display Icon
 * @parent DisplayText:str
 * @desc The icon shown next to the Display Text.
 * @default 160
 *
 * @param NameSets:arraystr
 * @text Random Names
 * @type string[]
 * @desc A list of random names to pick from.
 * Insert a possible random name here.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Traits Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Traits:
 *
 * @param EnableTraitsStep:eval
 * @text Enable Traits Step
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable traits step for Character Creation?
 * Requires VisuMZ_1_ElementStatusCore.js!
 * @default true
 *
 * @param Element:struct
 * @text Main Element Settings
 * @type struct<TraitType>
 * @desc Settings regarding the main element trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Neutral","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Fire\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Ice\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Thunder\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Water\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Earth\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wind\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Light\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Darkness\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param SubElement:struct
 * @text Sub Element Settings
 * @type struct<TraitType>
 * @desc Settings regarding the sub element trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"-","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"-\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Fire\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Ice\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Thunder\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Water\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Earth\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wind\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Light\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Darkness\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Gender:struct
 * @text Gender Settings
 * @type struct<TraitType>
 * @desc Settings regarding the gender trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"true","Default:str":"","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Male\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Female\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Race:struct
 * @text Race Settings
 * @type struct<TraitType>
 * @desc Settings regarding the race trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Human","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Human\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"High Elf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wood Elf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Dark Elf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Dwarf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Gnome\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Halfling\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wolfkin\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Felyne\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lizardman\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Nature:struct
 * @text Nature Settings
 * @type struct<TraitType>
 * @desc Settings regarding the nature trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"true","Default:str":"","Changeable:eval":"true","RetrainChange:eval":"true","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Chill\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Hardy\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lonely\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Adamant\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Naughty\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Brave\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Bold\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Docile\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Impish\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lax\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Relaxed\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Modest\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Mild\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Bashful\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Rash\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Quiet\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Calm\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Gentle\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Careful\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Quirky\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Sassy\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Timid\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Hasty\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Jolly\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Naive\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Serious\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Alignment:struct
 * @text Alignment Settings
 * @type struct<TraitType>
 * @desc Settings regarding the alignment trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Neutral","Changeable:eval":"true","RetrainChange:eval":"true","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Lawful Good\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral Good\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Good\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lawful Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lawful Evil\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral Evil\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Evil\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Blessing:struct
 * @text Blessing Settings
 * @type struct<TraitType>
 * @desc Settings regarding the blessing trait type.
 * @default ["{\"Name:str\":\"No Blessing\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Dextrous\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Elusive\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Impact\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Healthy\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Focused\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Energetic\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}"]
 *
 * @param Curse:struct
 * @text Curse Settings
 * @type struct<TraitType>
 * @desc Settings regarding the curse trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"No Curse","Changeable:eval":"true","RetrainChange:eval":"true","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"No Curse\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Clumsy\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Dazed\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Fitful\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Drained\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Inefficient\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Unmotivated\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Zodiac:struct
 * @text Zodiac Settings
 * @type struct<TraitType>
 * @desc Settings regarding the zodiac trait type.
 * @default ["{\"Name:str\":\"Aries\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Taurus\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Gemini\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Cancer\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Leo\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Virgo\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Libra\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Scorpio\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Sagittarius\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Capricorn\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Aquarius\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Pisces\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Ophiuchus\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}"]
 *
 * @param Variant:struct
 * @text Variant Settings
 * @type struct<TraitType>
 * @desc Settings regarding the variant trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Normal","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Mighty\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"100000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Major\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"10000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Greater\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Normal\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lesser\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Minor\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Puny\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 */
/* ----------------------------------------------------------------------------
 * Trait Type Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TraitType:
 *
 * @param Visible:eval
 * @text Visible
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Is command visible in the Character Creation scene?
 * Also needs to be Visible in VisuMZ_1_ElementStatusCore.
 * @default true
 *
 * @param Randomize:eval
 * @text Create -> Randomize?
 * @type boolean
 * @on Randomize
 * @off Default
 * @desc Randomize the default setting for this trait type?
 * If not randomized, the default is selected.
 * @default true
 *
 * @param Default:str
 * @text Default
 * @parent Randomize:eval
 * @desc If not randomized, insert the name of the trait used.
 * The default cannot cost gold or items.
 * @default 
 *
 * @param Changeable:eval
 * @text Create -> Change?
 * @type boolean
 * @on Can Change
 * @off Cannot Change
 * @desc Changeable trait types can be adjusted.
 * Otherwise, they're stuck the way they are.
 * @default true
 *
 * @param RetrainChange:eval
 * @text Retrain -> Change?
 * @parent Changeable:eval
 * @type boolean
 * @on Can Change
 * @off Cannot Change
 * @desc If a character is being retrained, can this trait type
 * be changed? Must also be changeable on creation.
 * @default true
 *
 * @param Options:arraystruct
 * @text Trait Options
 * @parent Changeable:eval
 * @type struct<TraitSet>[]
 * @desc A list of traits that the character can change to.
 * Automatically include the Default trait if used.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Trait Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TraitSet:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Trait Set. Must match the name of a
 * trait found in VisuMZ_1_ElementStatusCore.
 * @default >>>NEEDS ATTENTION<<<
 * 
 * @param Requirements
 *
 * @param SwitchReq:num
 * @text Required Switch
 * @parent Requirements
 * @type switch
 * @desc What switch must be turned on for this trait to show?
 * Use 0 to not require a switch.
 * @default 0
 *
 * @param GoldCost:num
 * @text Gold Cost
 * @parent Requirements
 * @type number
 * @desc How much gold should it cost to pick this trait?
 * Use 0 to not require a gold cost.
 * @default 0
 *
 * @param ItemIdCost:num
 * @text Item Cost Type
 * @parent Requirements
 * @type item
 * @desc What item is needed to pick this trait?
 * This determines the item type's ID.
 * @default 0
 *
 * @param ItemCountCost:num
 * @text Item Cost Quantity
 * @parent ItemIdCost:num
 * @type number
 * @min 1
 * @desc How many of the item is needed to pick this trait?
 * @default 1
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
 * @param Create
 * 
 * @param create_name:str
 * @text Filename
 * @parent Create
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Chime2
 *
 * @param create_volume:num
 * @text Volume
 * @parent Create
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param create_pitch:num
 * @text Pitch
 * @parent Create
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param create_pan:num
 * @text Pan
 * @parent Create
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Dismiss
 * 
 * @param dismiss_name:str
 * @text Filename
 * @parent Dismiss
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Fog1
 *
 * @param dismiss_volume:num
 * @text Volume
 * @parent Dismiss
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param dismiss_pitch:num
 * @text Pitch
 * @parent Dismiss
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param dismiss_pan:num
 * @text Pan
 * @parent Dismiss
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Retrain
 * 
 * @param retrain_name:str
 * @text Filename
 * @parent Retrain
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Raise3
 *
 * @param retrain_volume:num
 * @text Volume
 * @parent Retrain
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param retrain_pitch:num
 * @text Pitch
 * @parent Retrain
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param retrain_pan:num
 * @text Pan
 * @parent Retrain
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
 * @param InstructionWindow
 * @text Instruction Window
 *
 * @param InstructionWindow_Class:str
 * @text For Class
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Please select a class.
 *
 * @param InstructionWindow_Appearance:str
 * @text For Appearance
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select an appearance!
 *
 * @param InstructionWindow_Graphics:str
 * @text For Graphic Set
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select graphics set!
 *
 * @param InstructionWindow_Traits:str
 * @text For Traits
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed. Requires VisuMZ_1_ElementStatusCore!
 * @default Select character traits!
 *
 * @param InstructionWindow_Voices:str
 * @text For Battle Voices
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed. Requires VisuMZ_3_BattleVoices!
 * @default Select character traits!
 *
 * @param InstructionWindow_Name:str
 * @text For Naming
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Enter character name!
 *
 * @param InstructionWindow_Confirm:str
 * @text For Confirmation
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Confirm character details!
 *
 * @param InstructionWindow_Dismiss:str
 * @text For Dismissal
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select a character to dismiss from the party.
 *
 * @param InstructionWindow_Retrain:str
 * @text For Retraining
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select a character to retrain anew.
 *
 * @param PreviewWindow
 * @text Preview Window
 *
 * @param PreviewWindow_CostText:str
 * @text Cost Text
 * @parent PreviewWindow
 * @desc Text displayed when showing a gold cost.
 * Text codes allowed.
 * @default \C[16]Cost
 *
 * @param AppearanceWindow
 * @text Appearance Window
 *
 * @param AppearanceWindow_MoreCommand:str
 * @text More Command Name
 * @parent AppearanceWindow
 * @desc Text used for More Appearances command.
 * Text codes allowed.
 * @default More...
 *
 * @param AppearanceWindow_MoreIcon:num
 * @text Icon
 * @parent AppearanceWindow_MoreCommand:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param GraphicSetsWindow
 * @text Graphic Sets Window
 *
 * @param GraphicSetsWindow_ClassNameFmt:str
 * @text Class Name Format
 * @parent GraphicSetsWindow
 * @desc Text for class graphic set command names.
 * Text codes allowed. %1 - Class Name.
 * @default %1 Set
 *
 * @param TraitTypesWindow
 * @text Trait Types Window
 *
 * @param TraitTypesWindow_AcceptText:str
 * @text Accept Text
 * @parent TraitTypesWindow
 * @desc Text used for this command.
 * @default Accept Traits
 *
 * @param TraitTypesWindow_AcceptIcon:num
 * @text Icon
 * @parent TraitTypesWindow_AcceptText:str
 * @desc Icon used for this command.
 * @default 164
 *
 * @param TraitTypesWindow_TypeFmt:str
 * @text Trait Types Format
 * @parent TraitTypesWindow
 * @desc Text format used for trait type command names.
 * %1 - Command Name Text
 * @default \C[16]%1
 *
 * @param TraitTypesWindow_TypeIcon:num
 * @text Icon
 * @parent TraitTypesWindow_TypeFmt:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param BattleVoiceWindow
 * @text Battle Voice Window
 *
 * @param BattleVoiceWindow_AcceptText:str
 * @text Accept Text
 * @parent BattleVoiceWindow
 * @desc Text used for this command.
 * Requires VisuMZ_3_BattleVoices!
 * @default Accept Traits
 *
 * @param BattleVoiceWindow_AcceptIcon:num
 * @text Icon
 * @parent BattleVoiceWindow_AcceptText:str
 * @desc Icon used for this command.
 * Requires VisuMZ_3_BattleVoices!
 * @default 83
 *
 * @param BattleVoiceWindow_NoVoice:str
 * @text No Voice
 * @parent BattleVoiceWindow
 * @desc Text used for this command.
 * Requires VisuMZ_3_BattleVoices!
 * @default No Voice
 *
 * @param NameCommandWindow
 * @text Name Command Window
 *
 * @param NameCommandWindow_AcceptText:str
 * @text Accept Text
 * @parent NameCommandWindow
 * @desc Text used for this command.
 * @default Accept Name
 *
 * @param NameCommandWindow_AcceptIcon:num
 * @text Icon
 * @parent NameCommandWindow_AcceptText:str
 * @desc Icon used for this command.
 * @default 164
 *
 * @param NameCommandWindow_ManualText:str
 * @text Manual Text
 * @parent NameCommandWindow
 * @desc Text used for this command.
 * @default Manual Name Entry
 *
 * @param NameCommandWindow_ManualIcon:num
 * @text Icon
 * @parent NameCommandWindow_ManualText:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param ConfirmDataWindow
 * @text Confirm Data Window
 *
 * @param ConfirmDataWindow_NameText:str
 * @text Name Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Name
 *
 * @param ConfirmDataWindow_ClassText:str
 * @text Class Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Class
 *
 * @param ConfirmDataWindow_CostText:str
 * @text Cost Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Cost
 *
 * @param ConfirmDataWindow_NameText:str
 * @text Name Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Name
 *
 * @param ConfirmCommandWindow
 * @text Confirm Command Window
 *
 * @param ConfirmCommandWindow_ConfirmText:str
 * @text Confirm Text
 * @parent ConfirmCommandWindow
 * @desc Text used for this command.
 * @default Confirm
 *
 * @param ConfirmCommandWindow_ConfirmIcon:num
 * @text Icon
 * @parent ConfirmCommandWindow_ConfirmText:str
 * @desc Icon used for this command.
 * @default 164
 *
 * @param ConfirmCommandWindow_CancelText:str
 * @text Cancel Text
 * @parent ConfirmCommandWindow
 * @desc Text used for this command.
 * @default Revise
 *
 * @param ConfirmCommandWindow_CancelIcon:num
 * @text Icon
 * @parent ConfirmCommandWindow_CancelText:str
 * @desc Icon used for this command.
 * @default 168
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param ButtonAssist_ClassText:str
 * @text Exit Text
 * @parent ButtonAssist
 * @desc Text used for button assist shortcut to exit.
 * @default Exit
 *
 * @param StatusMenu
 * @text Status Menu
 *
 * @param StatusMenu_Profile:json
 * @text Profile Text
 * @parent StatusMenu
 * @type note
 * @desc Text used for a created character's profile.
 * %1 - Character's Actor ID
 * @default "\\N[%1] is hired recruit that joined \\N[1]'s party."
 *
 * @param StatusMenu_Biography:json
 * @text Biography Text
 * @parent StatusMenu
 * @type note
 * @desc Text used for a created character's biography.
 * %1 - Character's Actor ID, %2 - Class Name
 * @default "\\N[%1] is a %2 who joined \\N[1]\\'s party with goals and aspirations in mind."
 *
 * @param StatusMenu_Biography_AutoWordWrap:eval
 * @text Auto-Word Wrap
 * @parent StatusMenu_Biography:json
 * @type boolean
 * @on Auto-Word Wrap
 * @off No Word Wrap
 * @desc Automatically apply word wrap to biography?
 * Requires VisuMZ_1_MessageCore.js!
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param General
 *
 * @param SideBuffer:num
 * @text Side Buffer
 * @parent General
 * @desc How many pixels from the edges of the screen should be buffered?
 * @default 48
 *
 * @param ShowIcons:eval
 * @text Show List Icons
 * @parent General
 * @type boolean
 * @on Show Icons
 * @off Hide Icons
 * @desc Show/hide icons for most list elements?
 * Some elements will always have icons.
 * @default true
 *
 * @param InstructionWindow
 * @text Instruction Window
 *
 * @param InstructionWindow_BgType:num
 * @text Background Type
 * @parent InstructionWindow
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
 * @param InstructionWindow_TextAlign:str
 * @text Text Align
 * @parent InstructionWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for this window?
 * @default center
 *
 * @param InstructionWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent InstructionWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + Math.floor(this.calcWindowHeight(1, false) * 0.5);\nreturn new Rectangle(wx, wy, ww - (this.showGoldWindow() ? this.mainCommandWidth() : 0), wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldWindow_BgType:num
 * @text Background Type
 * @parent GoldWindow
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
 * @param GoldWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const instructRect = this.instructionWindowRect();\n\nconst ww = this.mainCommandWidth();\nconst wh = instructRect.height;\nconst wx = instructRect.x + instructRect.width;\nconst wy = instructRect.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param PreviewWindow
 * @text Preview Window
 *
 * @param PreviewWindow_BgType:num
 * @text Background Type
 * @parent PreviewWindow
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
 * @param PreviewWindow_Padding:num
 * @text Padding
 * @parent PreviewWindow
 * @type number
 * @desc What is the window edge padding value?
 * @default 4
 * 
 * @param PreviewWindow_Draw
 * @text Preview Contents
 * @parent PreviewWindow
 *
 * @param PreviewWindow_Draw_AutoWordWrap:eval
 * @text Auto-Word Wrap
 * @parent PreviewWindow_Draw
 * @type boolean
 * @on Auto-Word Wrap
 * @off No Word Wrap
 * @desc Automatically apply word wrap to preview text?
 * Requires VisuMZ_1_MessageCore.js!
 * @default true
 *
 * @param PreviewWindow_Draw_DarkRect:eval
 * @text Draw Dark Rectangle
 * @parent PreviewWindow_Draw
 * @type boolean
 * @on Draw Dark Rect
 * @off Don't Draw
 * @desc Draw dark rectangles to make text more visible?
 * @default true
 *
 * @param PreviewWindow_Draw_GoldCost:eval
 * @text Draw Gold Cost
 * @parent PreviewWindow_Draw
 * @type boolean
 * @on Draw Cost
 * @off Don't Draw
 * @desc Draw the gold cost on the preview image?
 * @default true
 * 
 * @param PreviewWindow_Picture
 * @text Foreground Picture
 * @parent PreviewWindow
 *
 * @param PreviewWindow_Picture_AnchorX:num
 * @text Anchor X
 * @parent PreviewWindow_Picture
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param PreviewWindow_Picture_AnchorY:num
 * @text Anchor Y
 * @parent PreviewWindow_Picture
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param PreviewWindow_Picture_ScaleUp:eval
 * @text Scale Up
 * @parent PreviewWindow_Picture
 * @type boolean
 * @on Scale Up
 * @off Same Size
 * @desc Scale foreground picture size up to fit window?
 * @default true
 * 
 * @param PreviewWindow_Background
 * @text Background Parallax
 * @parent PreviewWindow
 *
 * @param PreviewWindow_Background_AnchorX:num
 * @text Anchor X
 * @parent PreviewWindow_Background
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param PreviewWindow_Background_AnchorY:num
 * @text Anchor Y
 * @parent PreviewWindow_Background
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param PreviewWindow_Background_ScaleUp:eval
 * @text Scale Up
 * @parent PreviewWindow_Background
 * @type boolean
 * @on Scale Up
 * @off Same Size
 * @desc Scale background parallax size up to fit window?
 * @default true
 *
 * @param PreviewWindow_Background_RetrainBg:str
 * @text Retrain Parallax
 * @parent PreviewWindow_Background
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the preview background for retraining.
 * Located in /img/parallaxes/
 * @default Mountains1
 *
 * @param GraphicsPreviewWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent PreviewWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ClassWindow
 * @text Class List Window
 *
 * @param ClassWindow_BgType:num
 * @text Background Type
 * @parent ClassWindow
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
 * @param ClassWindow_TextColorID:num
 * @text Current Text Color
 * @parent ClassWindow
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 17
 *
 * @param ClassWindow_DefaultIcon:num
 * @text Default Class Icon
 * @parent ClassWindow
 * @desc What icon should be used by default for classes
 * without the <Icon: x> notetag?
 * @default 96
 *
 * @param ClassWindowItemCost
 * @text Item Cost
 * @parent ClassWindow
 *
 * @param ClassWindow_CostTypeFmt:str
 * @text Cost Type Format
 * @parent ClassWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Icon, %2 - Cost Text
 * @default \}%2\{%1
 *
 * @param ClassWindow_QuantityFmt:str
 * @text Item Quantity Format
 * @parent ClassWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Cost, %2 - Owned
 * @default %2/%1
 *
 * @param ClassWindow_DrawCost1:eval
 * @text Draw Cost of 1?
 * @parent ClassWindowItemCost
 * @type boolean
 * @on Draw Whole Cost
 * @off Draw Only Icon
 * @desc Draws the cost format if there is a cost of 1?
 * Otherwise, just show the icon.
 * @default false
 *
 * @param ClassListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ClassWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param AppearanceWindow
 * @text Appearance Window
 *
 * @param AppearanceWindow_BgType:num
 * @text Background Type
 * @parent AppearanceWindow
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
 * @param AppearanceWindow_MoreCommand:eval
 * @text Show More Command?
 * @parent AppearanceWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows a "More Appearances" command for the player to select.
 * @default true
 *
 * @param AppearanceWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent AppearanceWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GraphicSetsWindow
 * @text Graphic Sets Window
 *
 * @param GraphicSetsWindow_BgType:num
 * @text Background Type
 * @parent GraphicSetsWindow
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
 * @param GraphicSetsWindow_OtherClasses:eval
 * @text Show Other Classes?
 * @parent GraphicSetsWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Allows player to select graphic sets from other classes?
 * @default true
 *
 * @param GraphicSetsWindow_OtherFirst:eval
 * @text Other Classes First?
 * @parent GraphicSetsWindow_OtherClasses:eval
 * @type boolean
 * @on Before Global
 * @off After Global
 * @desc Shows other class graphic sets before global graphics
 * or after global graphics.
 * @default true
 *
 * @param GraphicSetsWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent GraphicSetsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param TraitTypesWindow
 * @text Trait Types Window
 *
 * @param TraitTypesWindow_BgType:num
 * @text Background Type
 * @parent TraitTypesWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default 0
 *
 * @param TraitTypesWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent TraitTypesWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param TraitSetsWindow
 * @text Trait Sets Window
 *
 * @param TraitSetsWindow_BgType:num
 * @text Background Type
 * @parent TraitSetsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default 0
 *
 * @param TraitSetsWindow_TextColorID:num
 * @text Current Text Color
 * @parent TraitSetsWindow
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 17
 *
 * @param TraitSetsWindow_Thickness:num
 * @text Line Thickness
 * @parent TraitSetsWindow
 * @type number
 * @min 1
 * @desc How many lines thick is each selectable option?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default 3
 *
 * @param TraitSetsWindowItemCost
 * @text Item Cost
 * @parent TraitSetsWindow
 *
 * @param TraitSetsWindow_CostTypeFmt:str
 * @text Cost Type Format
 * @parent TraitSetsWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Icon, %2 - Cost Text
 * @default \}%2\{%1
 *
 * @param TraitSetsWindow_QuantityFmt:str
 * @text Item Quantity Format
 * @parent TraitSetsWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Cost, %2 - Owned
 * @default %2/%1
 *
 * @param TraitSetsWindow_DrawCost1:eval
 * @text Draw Cost of 1?
 * @parent TraitSetsWindowItemCost
 * @type boolean
 * @on Draw Whole Cost
 * @off Draw Only Icon
 * @desc Draws the cost format if there is a cost of 1?
 * Otherwise, just show the icon.
 * @default false
 *
 * @param TraitSetsWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent TraitSetsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BattleVoiceWindow
 * @text Battle Voice Window
 *
 * @param BattleVoiceWindow_BgType:num
 * @text Background Type
 * @parent BattleVoiceWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_3_BattleVoices!
 * @default 0
 *
 * @param BattleVoiceWindow_TextColorID:num
 * @text Current Text Color
 * @parent BattleVoiceWindow
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 17
 *
 * @param BattleVoiceWindow_Enable:eval
 * @text Enable?
 * @parent BattleVoiceWindow
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables adjusting battle voice sets?
 * Requires VisuMZ_3_BattleVoices!
 * @default true
 *
 * @param BattleVoiceWindow_VoiceCommandIcon:num
 * @text Voice Set Icon
 * @parent BattleVoiceWindow
 * @desc Icon used for voice sets.
 * Requires VisuMZ_3_BattleVoices!
 * @default 4
 *
 * @param BattleVoiceWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent BattleVoiceWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Requires VisuMZ_3_BattleVoices!
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameCurrentWindow
 * @text Current Name Window
 *
 * @param NameCurrentWindow_BgType:num
 * @text Background Type
 * @parent NameCurrentWindow
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
 * @param NameCurrentWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameCurrentWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameCommandWindow
 * @text Name Command Window
 *
 * @param NameCommandWindow_BgType:num
 * @text Background Type
 * @parent NameCommandWindow
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
 * @param NameCommandWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameCommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 4);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 3);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameEditWindow
 * @text Name Edit Window
 *
 * @param NameEditWindow_BgType:num
 * @text Background Type
 * @parent NameEditWindow
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
 * @param NameEditWindow_MaxLength:num
 * @text Max Character Length
 * @parent NameEditWindow
 * @min 4
 * @desc What is the maximum character length for entering in a name?
 * @default 16
 *
 * @param NameEditWindow_NameWidthPadding:num
 * @text Name Width Padding
 * @parent NameEditWindow
 * @min 1
 * @desc What is the padding between characters?
 * @default 8
 *
 * @param NameEditWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameEditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = 600;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaTop() + Math.ceil(this.calcWindowHeight(1, false) * (Graphics.boxHeight >= 700 ? 2 : 1.5));\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameInputWindow
 * @text Name Input Window
 *
 * @param NameInputWindow_BgType:num
 * @text Background Type
 * @parent NameInputWindow
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
 * @param NameInputWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameInputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const editWindow = this.nameEditWindowRect();\n\nconst ww = editWindow.width;\nconst wh = this.calcWindowHeight(9, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = editWindow.y + editWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConfirmDataWindow
 * @text Confirm Data Window
 *
 * @param ConfirmDataWindow_BgType:num
 * @text Background Type
 * @parent ConfirmDataWindow
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
 * @param ConfirmDataWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ConfirmDataWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.calcWindowHeight(6, false);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConfirmCommandWindow
 * @text Confirm Command Window
 *
 * @param ConfirmCommandWindow_BgType:num
 * @text Background Type
 * @parent ConfirmCommandWindow
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
 * @param ConfirmCommandWindow_PlayShopSound:eval
 * @text Play Shop Sound?
 * @parent ConfirmCommandWindow
 * @type boolean
 * @on Play Sound
 * @off Don't Play
 * @desc Play the shop sound when gold and items are involved?
 * @default true
 *
 * @param ConfirmCommandWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ConfirmCommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const previewRect = this.graphicsPreviewWindowRect();\n\nconst ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.calcWindowHeight(1, true);\nconst wx = this.sideBuffer();\nconst wy = previewRect.y + previewRect.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SelectCharaWindow
 * @text Select Actor Window
 *
 * @param SelectCharaWindow_BgType:num
 * @text Background Type
 * @parent SelectCharaWindow
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
 * @param SelectActorWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent SelectCharaWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x4b42a7=_0x4974;(function(_0x5b8505,_0x406ef9){const _0x1aadde=_0x4974,_0x32bcb7=_0x5b8505();while(!![]){try{const _0x5c2931=-parseInt(_0x1aadde(0x29a))/0x1*(parseInt(_0x1aadde(0x43f))/0x2)+parseInt(_0x1aadde(0x33e))/0x3*(parseInt(_0x1aadde(0x3c5))/0x4)+parseInt(_0x1aadde(0x40d))/0x5+parseInt(_0x1aadde(0x469))/0x6*(-parseInt(_0x1aadde(0x323))/0x7)+parseInt(_0x1aadde(0x2bf))/0x8+-parseInt(_0x1aadde(0x349))/0x9+parseInt(_0x1aadde(0x3a9))/0xa;if(_0x5c2931===_0x406ef9)break;else _0x32bcb7['push'](_0x32bcb7['shift']());}catch(_0x463b91){_0x32bcb7['push'](_0x32bcb7['shift']());}}}(_0x2e92,0x247fb));var label='CharaCreationSys',tier=tier||0x0,dependencies=[_0x4b42a7(0x3f4)],pluginData=$plugins[_0x4b42a7(0x25d)](function(_0x147076){const _0x23a60a=_0x4b42a7;return _0x147076['status']&&_0x147076[_0x23a60a(0x2d6)][_0x23a60a(0x405)]('['+label+']');})[0x0];VisuMZ[label][_0x4b42a7(0x412)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x4b42a7(0x35a)]=function(_0x155ec7,_0x25b3e9){const _0x289ec4=_0x4b42a7;for(const _0x2a65ec in _0x25b3e9){if(_0x2a65ec[_0x289ec4(0x241)](/(.*):(.*)/i)){const _0x2812c2=String(RegExp['$1']),_0x299c44=String(RegExp['$2'])[_0x289ec4(0x399)]()[_0x289ec4(0x465)]();let _0x4224aa,_0x411c2a,_0x5a491f;switch(_0x299c44){case _0x289ec4(0x2b2):_0x4224aa=_0x25b3e9[_0x2a65ec]!==''?Number(_0x25b3e9[_0x2a65ec]):0x0;break;case _0x289ec4(0x3d5):_0x411c2a=_0x25b3e9[_0x2a65ec]!==''?JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec]):[],_0x4224aa=_0x411c2a[_0x289ec4(0x234)](_0x376171=>Number(_0x376171));break;case'EVAL':_0x4224aa=_0x25b3e9[_0x2a65ec]!==''?eval(_0x25b3e9[_0x2a65ec]):null;break;case _0x289ec4(0x3fc):_0x411c2a=_0x25b3e9[_0x2a65ec]!==''?JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec]):[],_0x4224aa=_0x411c2a['map'](_0xf989ed=>eval(_0xf989ed));break;case _0x289ec4(0x35b):_0x4224aa=_0x25b3e9[_0x2a65ec]!==''?JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec]):'';break;case _0x289ec4(0x23e):_0x411c2a=_0x25b3e9[_0x2a65ec]!==''?JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec]):[],_0x4224aa=_0x411c2a[_0x289ec4(0x234)](_0x2e1e37=>JSON['parse'](_0x2e1e37));break;case'FUNC':_0x4224aa=_0x25b3e9[_0x2a65ec]!==''?new Function(JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec])):new Function(_0x289ec4(0x476));break;case _0x289ec4(0x219):_0x411c2a=_0x25b3e9[_0x2a65ec]!==''?JSON['parse'](_0x25b3e9[_0x2a65ec]):[],_0x4224aa=_0x411c2a[_0x289ec4(0x234)](_0x39c78d=>new Function(JSON[_0x289ec4(0x301)](_0x39c78d)));break;case _0x289ec4(0x3ed):_0x4224aa=_0x25b3e9[_0x2a65ec]!==''?String(_0x25b3e9[_0x2a65ec]):'';break;case _0x289ec4(0x274):_0x411c2a=_0x25b3e9[_0x2a65ec]!==''?JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec]):[],_0x4224aa=_0x411c2a['map'](_0x1d918f=>String(_0x1d918f));break;case _0x289ec4(0x3b9):_0x5a491f=_0x25b3e9[_0x2a65ec]!==''?JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec]):{},_0x4224aa=VisuMZ[_0x289ec4(0x35a)]({},_0x5a491f);break;case _0x289ec4(0x309):_0x411c2a=_0x25b3e9[_0x2a65ec]!==''?JSON[_0x289ec4(0x301)](_0x25b3e9[_0x2a65ec]):[],_0x4224aa=_0x411c2a['map'](_0x331a15=>VisuMZ['ConvertParams']({},JSON[_0x289ec4(0x301)](_0x331a15)));break;default:continue;}_0x155ec7[_0x2812c2]=_0x4224aa;}}return _0x155ec7;},(_0x3faf97=>{const _0x23ae57=_0x4b42a7,_0x5ba1d2=_0x3faf97['name'];for(const _0x34e5a0 of dependencies){if(!Imported[_0x34e5a0]){alert(_0x23ae57(0x458)[_0x23ae57(0x34f)](_0x5ba1d2,_0x34e5a0)),SceneManager[_0x23ae57(0x3b2)]();break;}}const _0x2f9f1b=_0x3faf97['description'];if(_0x2f9f1b['match'](/\[Version[ ](.*?)\]/i)){const _0x272f02=Number(RegExp['$1']);_0x272f02!==VisuMZ[label][_0x23ae57(0x335)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x23ae57(0x34f)](_0x5ba1d2,_0x272f02)),SceneManager['exit']());}if(_0x2f9f1b[_0x23ae57(0x241)](/\[Tier[ ](\d+)\]/i)){const _0x27b13f=Number(RegExp['$1']);_0x27b13f<tier?(alert(_0x23ae57(0x2e5)[_0x23ae57(0x34f)](_0x5ba1d2,_0x27b13f,tier)),SceneManager[_0x23ae57(0x3b2)]()):tier=Math[_0x23ae57(0x2e3)](_0x27b13f,tier);}VisuMZ[_0x23ae57(0x35a)](VisuMZ[label]['Settings'],_0x3faf97[_0x23ae57(0x1a6)]);})(pluginData),VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x1cb)]=function(_0x331e00){const _0x1ab986=_0x4b42a7;_0x331e00=_0x331e00||VisuMZ[_0x1ab986(0x1bd)][_0x1ab986(0x412)][_0x1ab986(0x384)][0x0];const _0x59a7f6=_0x331e00[_0x1ab986(0x384)];return _0x59a7f6[Math[_0x1ab986(0x31a)](_0x59a7f6[_0x1ab986(0x47e)])];},PluginManager[_0x4b42a7(0x32b)](pluginData[_0x4b42a7(0x3a3)],'SceneOpenCharaCreateScene',_0x3d774f=>{const _0x2515eb=_0x4b42a7;if(SceneManager[_0x2515eb(0x3e1)]())return;if($gameParty[_0x2515eb(0x1fb)]())return;VisuMZ[_0x2515eb(0x35a)](_0x3d774f,_0x3d774f);const _0x155cf6={'actorID':_0x3d774f['ActorID']||$gameActors[_0x2515eb(0x236)](),'level':Math['max'](Math['ceil'](_0x3d774f[_0x2515eb(0x23a)]||0x1),0x1),'name':String(_0x3d774f[_0x2515eb(0x1b0)])||VisuMZ[_0x2515eb(0x1bd)][_0x2515eb(0x1cb)](),'cancelExit':_0x3d774f['CancelExit']??!![],'showGold':_0x3d774f['ShowGoldWindow']??!![],'joinSwitchID':_0x3d774f[_0x2515eb(0x2b5)]||0x0},_0x3d80ca=_0x3d774f[_0x2515eb(0x2bc)]||0x0;if(_0x155cf6[_0x2515eb(0x308)]>0x0&&!$gameParty[_0x2515eb(0x44f)]()[_0x2515eb(0x405)]($gameActors[_0x2515eb(0x43d)](_0x155cf6[_0x2515eb(0x308)]))){$gameActors[_0x2515eb(0x43d)](_0x155cf6[_0x2515eb(0x308)])[_0x2515eb(0x329)](_0x155cf6[_0x2515eb(0x207)]),SceneManager[_0x2515eb(0x32f)](Scene_CreateCharacter),SceneManager[_0x2515eb(0x258)](_0x2515eb(0x426),_0x155cf6);if(_0x3d80ca)$gameSwitches[_0x2515eb(0x35d)](_0x3d80ca,![]);}else{if(_0x3d80ca)$gameSwitches[_0x2515eb(0x35d)](_0x3d80ca,!![]);}const _0x1facb2=_0x3d774f[_0x2515eb(0x313)]||0x0;if(_0x1facb2)$gameVariables['setValue'](_0x1facb2,_0x155cf6[_0x2515eb(0x308)]);_0x155cf6[_0x2515eb(0x37b)]&&$gameSwitches[_0x2515eb(0x35d)](_0x155cf6[_0x2515eb(0x37b)],![]);}),PluginManager['registerCommand'](pluginData[_0x4b42a7(0x3a3)],_0x4b42a7(0x26d),_0x159bb1=>{const _0x25d561=_0x4b42a7;if(SceneManager['isSceneBattle']())return;if($gameParty[_0x25d561(0x1fb)]())return;VisuMZ[_0x25d561(0x35a)](_0x159bb1,_0x159bb1);const _0x172845={'dismissSwitchID':_0x159bb1[_0x25d561(0x2b5)]||0x0,'registerVarID':_0x159bb1[_0x25d561(0x313)]||0x0},_0x51226c=_0x159bb1[_0x25d561(0x2bc)]||0x0;if($gameParty[_0x25d561(0x27d)]()[_0x25d561(0x47e)]>0x0){SceneManager[_0x25d561(0x32f)](Scene_SelectCreatedChara),SceneManager[_0x25d561(0x258)](_0x25d561(0x39d),_0x172845);if(_0x51226c)$gameSwitches[_0x25d561(0x35d)](_0x51226c,![]);}else{if(_0x51226c)$gameSwitches[_0x25d561(0x35d)](_0x51226c,!![]);}_0x172845[_0x25d561(0x407)]&&$gameSwitches['setValue'](_0x172845[_0x25d561(0x407)],![]),_0x172845[_0x25d561(0x1ca)]&&$gameVariables[_0x25d561(0x35d)](_0x172845[_0x25d561(0x1ca)],0x0);}),PluginManager[_0x4b42a7(0x32b)](pluginData[_0x4b42a7(0x3a3)],_0x4b42a7(0x1d8),_0xb55758=>{const _0x5b9d2e=_0x4b42a7;if(SceneManager[_0x5b9d2e(0x3e1)]())return;if($gameParty['inBattle']())return;VisuMZ[_0x5b9d2e(0x35a)](_0xb55758,_0xb55758);const _0x5016d3={'actorID':_0xb55758['ActorID']||0x0,'retrain':{'class':_0xb55758[_0x5b9d2e(0x3be)],'preserveClassLevel':_0xb55758[_0x5b9d2e(0x3e0)],'appearance':_0xb55758[_0x5b9d2e(0x2e4)],'traits':_0xb55758[_0x5b9d2e(0x3f6)],'voice':_0xb55758['RetrainVoice']??!![],'name':_0xb55758[_0x5b9d2e(0x3ae)],'profile':_0xb55758[_0x5b9d2e(0x413)],'bio':_0xb55758[_0x5b9d2e(0x22e)]},'retrainSwitchID':_0xb55758[_0x5b9d2e(0x32d)]||0x0,'registerVarID':_0xb55758['RegisterVarID']||0x0,'showGold':_0xb55758[_0x5b9d2e(0x210)]??!![]},_0x3ba04c=_0xb55758[_0x5b9d2e(0x2bc)]||0x0;if(_0x3ba04c)$gameSwitches['setValue'](_0x3ba04c,![]);if(_0x5016d3['actorID']>0x0)$gameActors['actor'](_0x5016d3[_0x5b9d2e(0x308)])[_0x5b9d2e(0x378)](_0x5016d3),SceneManager[_0x5b9d2e(0x32f)](Scene_CreateCharacter),SceneManager['prepareNextScene']('retrain',_0x5016d3);else{if(_0x5016d3[_0x5b9d2e(0x308)]<=0x0&&$gameParty[_0x5b9d2e(0x44b)]()[_0x5b9d2e(0x47e)]>0x0)SceneManager[_0x5b9d2e(0x32f)](Scene_SelectCreatedChara),SceneManager[_0x5b9d2e(0x258)]('retrain',_0x5016d3);else{if(_0x3ba04c)$gameSwitches[_0x5b9d2e(0x35d)](_0x3ba04c,!![]);}}_0x5016d3[_0x5b9d2e(0x47f)]&&$gameSwitches[_0x5b9d2e(0x35d)](_0x5016d3['retrainSwitchID'],![]),_0x5016d3[_0x5b9d2e(0x1ca)]&&$gameVariables['setValue'](_0x5016d3[_0x5b9d2e(0x1ca)],0x0);}),PluginManager['registerCommand'](pluginData['name'],_0x4b42a7(0x296),_0x29eb4c=>{const _0x2f9e7f=_0x4b42a7;VisuMZ[_0x2f9e7f(0x35a)](_0x29eb4c,_0x29eb4c);const _0xb19022=_0x29eb4c[_0x2f9e7f(0x29c)]||0x0;if(!_0xb19022)return;const _0xc2945c=$gameParty[_0x2f9e7f(0x3e8)]();$gameVariables[_0x2f9e7f(0x35d)](_0xb19022,_0xc2945c);}),PluginManager[_0x4b42a7(0x32b)](pluginData[_0x4b42a7(0x3a3)],'VariableSetAvailableEmptyCharacterSlots',_0x2c7ca5=>{const _0x4f2fb2=_0x4b42a7;VisuMZ[_0x4f2fb2(0x35a)](_0x2c7ca5,_0x2c7ca5);const _0x4dd0b8=_0x2c7ca5[_0x4f2fb2(0x29c)]||0x0;if(!_0x4dd0b8)return;const _0x5c5bb9=$gameParty[_0x4f2fb2(0x3b6)]();$gameVariables[_0x4f2fb2(0x35d)](_0x4dd0b8,_0x5c5bb9);}),PluginManager[_0x4b42a7(0x32b)](pluginData[_0x4b42a7(0x3a3)],_0x4b42a7(0x406),_0x3089b7=>{const _0x40c20e=_0x4b42a7;VisuMZ[_0x40c20e(0x35a)](_0x3089b7,_0x3089b7);const _0x291eb9=_0x3089b7[_0x40c20e(0x29c)]||0x0;if(!_0x291eb9)return;const _0x4799e7=$gameParty['totalEmptyCreatableCharacterSlots']();$gameVariables['setValue'](_0x291eb9,_0x4799e7);}),VisuMZ[_0x4b42a7(0x1bd)]['RegExp']={'CannotSelectDismiss':/<CANNOT SELECT DISMISS>/i,'CannotSelectRetrain':/<CANNOT SELECT RETRAIN>/i,'ClassIcon':/<ICON:[ ](\d+)>/i,'EnableCanCreate':/<ENABLE IF CAN CREATE CHARACTER>/gi,'EnableCanDismiss':/<ENABLE IF CAN DISMISS CHARACTERS>/gi,'EnableCanRetrain':/<ENABLE IF CAN RETRAIN CHARACTERS>/gi,'EnableHaveCreated':/<ENABLE IF HAVE CREATED CHARACTERS>/gi},SoundManager[_0x4b42a7(0x2bd)]=function(){const _0x3ecb8a=_0x4b42a7,_0x32d9de=VisuMZ[_0x3ecb8a(0x1bd)][_0x3ecb8a(0x412)]['Sound'],_0x579a86={'name':_0x32d9de['create_name'],'volume':_0x32d9de['create_volume'],'pitch':_0x32d9de['create_pitch'],'pan':_0x32d9de['create_pan']};AudioManager[_0x3ecb8a(0x1c7)](_0x579a86);},SoundManager[_0x4b42a7(0x35f)]=function(){const _0x2f2a85=_0x4b42a7,_0x27bd86=VisuMZ[_0x2f2a85(0x1bd)]['Settings'][_0x2f2a85(0x1ac)],_0x96c86b={'name':_0x27bd86[_0x2f2a85(0x2dd)],'volume':_0x27bd86[_0x2f2a85(0x451)],'pitch':_0x27bd86['dismiss_pitch'],'pan':_0x27bd86[_0x2f2a85(0x1df)]};AudioManager[_0x2f2a85(0x1c7)](_0x96c86b);},SoundManager[_0x4b42a7(0x422)]=function(){const _0x57b7f7=_0x4b42a7,_0x316404=VisuMZ['CharaCreationSys'][_0x57b7f7(0x412)][_0x57b7f7(0x1ac)],_0x5ec22c={'name':_0x316404[_0x57b7f7(0x454)],'volume':_0x316404[_0x57b7f7(0x2d8)],'pitch':_0x316404[_0x57b7f7(0x1e0)],'pan':_0x316404['retrain_pan']};AudioManager['playSe'](_0x5ec22c);},TextManager[_0x4b42a7(0x1f4)]={'instructions':{'class':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x20d)]??_0x4b42a7(0x1c1),'appearance':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x44e)]??_0x4b42a7(0x29b),'traits':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x20b)]??_0x4b42a7(0x2cd),'voice':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x369)]??'Select\x20a\x20voice!','name':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x281)]??'Enter\x20character\x20name!','confirm':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x385)]??_0x4b42a7(0x3f0),'graphics':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x221)]??'Select\x20graphics\x20set!','dismiss':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x427)]??_0x4b42a7(0x2d9),'retrain':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)]['InstructionWindow_Retrain']??_0x4b42a7(0x314)},'preview':{'cost':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)]['Vocab'][_0x4b42a7(0x1ee)]??'\x5cC[16]Cost'},'appearances':{'command':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x20e)]??_0x4b42a7(0x461),'icon':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x2b7)]??0x53},'graphicSets':{'classSetNameFmt':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x2e8)]??_0x4b42a7(0x1c8)},'traits':{'accept':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)]['TraitTypesWindow_AcceptText']??_0x4b42a7(0x1ad),'traitFmt':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)]['TraitTypesWindow_TypeFmt']??_0x4b42a7(0x440)},'voice':{'accept':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Vocab']['BattleVoiceWindow_AcceptText']??_0x4b42a7(0x421),'none':VisuMZ['CharaCreationSys']['Settings'][_0x4b42a7(0x30b)]['BattleVoiceWindow_NoVoice']??'No\x20Voice'},'naming':{'accept':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Vocab'][_0x4b42a7(0x45d)]??_0x4b42a7(0x394),'manual':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x30b)][_0x4b42a7(0x318)]??'Manual\x20Name\x20Entry'},'confirm':{'name':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x30b)][_0x4b42a7(0x1fa)]??'\x5cC[16]Name','class':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x31d)]??_0x4b42a7(0x300),'cost':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Vocab'][_0x4b42a7(0x2f3)]??'\x5cC[16]Cost','ok':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x3b1)]??_0x4b42a7(0x2c8),'cancel':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x23d)]??'Revise'},'buttonAssist':{'exit':VisuMZ['CharaCreationSys']['Settings'][_0x4b42a7(0x30b)][_0x4b42a7(0x3d3)]??'Exit'},'character':{'profile':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x2f2)]??_0x4b42a7(0x3e5),'bio':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Vocab'][_0x4b42a7(0x2b9)]??'\x5cN[%1]\x20is\x20a\x20%2\x20who\x20joined\x20\x5cN[1]\x27s\x20party\x20with\x20goals\x20and\x20aspirations\x20in\x20mind.','bioWordWrap':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x371)]??!![]}},VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x365)]=Scene_Boot[_0x4b42a7(0x39c)][_0x4b42a7(0x42d)],Scene_Boot[_0x4b42a7(0x39c)][_0x4b42a7(0x42d)]=function(){const _0x3b58eb=_0x4b42a7;VisuMZ['CharaCreationSys'][_0x3b58eb(0x365)][_0x3b58eb(0x1da)](this),this[_0x3b58eb(0x26c)]();},Scene_Boot[_0x4b42a7(0x39c)][_0x4b42a7(0x26c)]=function(){const _0x41157d=_0x4b42a7;Imported[_0x41157d(0x2c6)]&&this[_0x41157d(0x295)]();},Scene_Boot[_0x4b42a7(0x39c)][_0x4b42a7(0x295)]=function(){const _0x254860=_0x4b42a7;if(!Scene_CreateCharacter[_0x254860(0x21f)][_0x254860(0x2cf)])return;const _0x4e950b=Game_BattlerBase[_0x254860(0x39c)][_0x254860(0x42b)](),_0x447f00=VisuMZ[_0x254860(0x1bd)][_0x254860(0x412)]['Traits'];for(const _0x20e7e6 of _0x4e950b){const _0x4ffcda=_0x20e7e6['toUpperCase']()[_0x254860(0x465)](),_0x4d1f4c=_0x447f00[_0x20e7e6],_0x4c7ef3=DataManager[_0x254860(0x34b)][_0x4ffcda];let _0x49ec35=![];if(_0x4d1f4c[_0x254860(0x2c5)])for(const _0x573c10 of _0x4d1f4c[_0x254860(0x2f0)]){const _0x3ffa79=_0x573c10[_0x254860(0x205)]['toUpperCase']()['trim']();if(!_0x4c7ef3[_0x3ffa79])continue;const _0x1fd94a={'SwitchReq':_0x573c10[_0x254860(0x424)]||0x0,'GoldCost':_0x573c10[_0x254860(0x477)]||0x0,'ItemIdCost':_0x573c10[_0x254860(0x293)]||0x0,'ItemCountCost':_0x573c10[_0x254860(0x2de)],'noCostOption':!![]};_0x4c7ef3[_0x3ffa79][_0x254860(0x481)]=_0x1fd94a,!_0x1fd94a[_0x254860(0x424)]&&!_0x1fd94a[_0x254860(0x477)]&&!_0x1fd94a[_0x254860(0x293)]&&(_0x49ec35=!![],_0x573c10[_0x254860(0x474)]=!![]);}if(!_0x4d1f4c[_0x254860(0x333)]){const _0x5722d3=_0x4d1f4c[_0x254860(0x2c9)][_0x254860(0x399)]()[_0x254860(0x465)]();if(_0x4c7ef3[_0x5722d3]){const _0x30b610={'SwitchReq':0x0,'GoldCost':0x0,'ItemIdCost':0x0,'ItemCountCost':0x1};_0x4c7ef3[_0x5722d3][_0x254860(0x481)]=_0x30b610,_0x49ec35=!![];}else{let _0x1688fd=_0x254860(0x251);_0x1688fd+=_0x254860(0x2e9)[_0x254860(0x34f)](_0x20e7e6),_0x1688fd+=_0x254860(0x2a5),alert(_0x1688fd),SceneManager[_0x254860(0x3b2)]();}!_0x4d1f4c['Options'][_0x254860(0x45f)](_0x2f1f92=>_0x2f1f92[_0x254860(0x205)][_0x254860(0x399)]()['trim']())===_0x5722d3&&_0x4d1f4c[_0x254860(0x2f0)][_0x254860(0x32f)]({'Name':_0x5722d3,'SwitchReq':0x0,'GoldCost':0x0,'ItemIdCost':0x0,'ItemCountCost':0x1,'noCostOption':!![]});}if(!_0x49ec35){let _0x1fb827=_0x254860(0x251);_0x1fb827+='VisuMZ_2_CharaCreationSys\x20is\x20lacking\x20a\x20trait\x20option\x20for\x20%1\x20trait\x20type\x20that\x20lacks\x20cost\x20options.\x0a'['format'](_0x20e7e6),_0x1fb827+=_0x254860(0x3bf),alert(_0x1fb827),SceneManager['exit']();}}},Game_Actor['prototype'][_0x4b42a7(0x329)]=function(_0x5c5ac8){const _0x4539f1=_0x4b42a7;this[_0x4539f1(0x46f)](this['_actorId']),this[_0x4539f1(0x31f)](''),this[_0x4539f1(0x23f)](_0x5c5ac8,![]),this[_0x4539f1(0x38e)]=[],this['initEquips']([]),this['_skills']=[],this['recoverAll'](),this[_0x4539f1(0x277)]=!![];},Game_Actor[_0x4b42a7(0x39c)][_0x4b42a7(0x378)]=function(_0x3e81d6){const _0x16a895=_0x4b42a7;_0x3e81d6[_0x16a895(0x3a3)]=this[_0x16a895(0x3a3)](),_0x3e81d6[_0x16a895(0x2ab)]=JsonEx[_0x16a895(0x33d)](this);},Game_Actor[_0x4b42a7(0x39c)]['isCreatedCharacter']=function(){const _0x2a8abb=_0x4b42a7;return this[_0x2a8abb(0x277)];},Game_Actor[_0x4b42a7(0x39c)][_0x4b42a7(0x431)]=function(){const _0x30ec72=_0x4b42a7;if(!this[_0x30ec72(0x31e)]())return![];const _0x307ca4=VisuMZ[_0x30ec72(0x1bd)]['RegExp'],_0x44e0c8=this[_0x30ec72(0x43d)]()['note']||'';if(_0x44e0c8[_0x30ec72(0x241)](_0x307ca4['CannotSelectDismiss']))return![];return!![];},Game_Actor[_0x4b42a7(0x39c)]['canBeRetrainSelected']=function(){const _0x1e73c7=_0x4b42a7;if(!this[_0x1e73c7(0x31e)]())return![];const _0x29721a=VisuMZ[_0x1e73c7(0x1bd)]['RegExp'],_0x3db14a=this['actor']()[_0x1e73c7(0x1f8)]||'';if(_0x3db14a['match'](_0x29721a[_0x1e73c7(0x2b4)]))return![];return!![];},Game_Actor[_0x4b42a7(0x39c)]['learnAllAvailableClassSkillsByLevel']=function(){const _0x236146=_0x4b42a7;for(const _0x356d56 of this[_0x236146(0x1e4)]()[_0x236146(0x3ea)]){_0x356d56[_0x236146(0x207)]<=this[_0x236146(0x282)]&&this['learnSkill'](_0x356d56[_0x236146(0x46b)]);}},Game_Actors[_0x4b42a7(0x39c)][_0x4b42a7(0x236)]=function(){const _0x51b135=_0x4b42a7;for(let _0x14f772=0x1;_0x14f772<$dataActors[_0x51b135(0x47e)];_0x14f772++){const _0x546671=this[_0x51b135(0x43d)](_0x14f772);if($gameParty[_0x51b135(0x44f)]()['includes'](_0x546671))continue;const _0x334768=$dataActors[_0x14f772][_0x51b135(0x3a3)][_0x51b135(0x399)]()[_0x51b135(0x465)]();if(_0x334768==='')return _0x14f772;if(_0x334768===_0x51b135(0x25c))return _0x14f772;}return 0x0;},Game_Party['prototype'][_0x4b42a7(0x3e8)]=function(){const _0x598374=_0x4b42a7;return this[_0x598374(0x3fb)]()[_0x598374(0x47e)];},Game_Party['prototype'][_0x4b42a7(0x3fb)]=function(){const _0x3b6470=_0x4b42a7;return this[_0x3b6470(0x44f)]()[_0x3b6470(0x25d)](_0x1788c1=>_0x1788c1['isCreatedCharacter']());},Game_Party['prototype'][_0x4b42a7(0x27d)]=function(){const _0x181eae=_0x4b42a7;return this['createdMembers']()[_0x181eae(0x25d)](_0xe88b33=>_0xe88b33[_0x181eae(0x431)]());},Game_Party['prototype'][_0x4b42a7(0x44b)]=function(){const _0x2ef0d9=_0x4b42a7;return this['createdMembers']()[_0x2ef0d9(0x25d)](_0x4a6555=>_0x4a6555[_0x2ef0d9(0x372)]());},Game_Party[_0x4b42a7(0x39c)][_0x4b42a7(0x2b1)]=function(){const _0x12ba84=_0x4b42a7;let _0x482b17=0x0;for(let _0x38ac58=0x1;_0x38ac58<$dataActors[_0x12ba84(0x47e)];_0x38ac58++){const _0x404d64=$dataActors[_0x38ac58],_0x64e73=_0x404d64['name'][_0x12ba84(0x399)]()['trim']();(_0x64e73===''||_0x64e73===_0x12ba84(0x25c))&&(_0x482b17+=0x1);}return _0x482b17;},Game_Party[_0x4b42a7(0x39c)][_0x4b42a7(0x3b6)]=function(){const _0x375b2f=_0x4b42a7;let _0x3ac002=0x0;for(let _0x40c07d=0x1;_0x40c07d<$dataActors[_0x375b2f(0x47e)];_0x40c07d++){if($gameParty[_0x375b2f(0x44f)]()[_0x375b2f(0x405)]($gameActors['actor'](_0x40c07d)))continue;const _0x10b9e9=$dataActors[_0x40c07d],_0x33bd2b=_0x10b9e9['name'][_0x375b2f(0x399)]()[_0x375b2f(0x465)]();(_0x33bd2b===''||_0x33bd2b===_0x375b2f(0x25c))&&(_0x3ac002+=0x1);}return _0x3ac002;},VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x34c)]=Scene_Map[_0x4b42a7(0x39c)][_0x4b42a7(0x25a)],Scene_Map[_0x4b42a7(0x39c)]['needsFadeIn']=function(){const _0x7641b4=_0x4b42a7;if($gameTemp[_0x7641b4(0x1e3)]){$gameTemp[_0x7641b4(0x1e3)]=![];if(SceneManager['isPreviousScene'](Scene_CreateCharacter))return!![];if(SceneManager[_0x7641b4(0x3b4)](Scene_SelectCreatedChara))return!![];}return VisuMZ[_0x7641b4(0x1bd)][_0x7641b4(0x34c)][_0x7641b4(0x1da)](this);};function Scene_SelectCreatedChara(){const _0x304682=_0x4b42a7;this[_0x304682(0x1dd)](...arguments);}Scene_SelectCreatedChara[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Scene_MenuBase['prototype']),Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['constructor']=Scene_SelectCreatedChara,Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(){const _0x3a7bf9=_0x4b42a7;Scene_MenuBase[_0x3a7bf9(0x39c)][_0x3a7bf9(0x1dd)][_0x3a7bf9(0x1da)](this);},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x27e)]=function(_0x4ad6ea,_0x76fb19){const _0x5c57ea=_0x4b42a7;this['_type']=_0x4ad6ea,this[_0x5c57ea(0x242)]=_0x76fb19;},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x2bb)]=function(){return![];},Scene_SelectCreatedChara['prototype'][_0x4b42a7(0x280)]=function(){return 0x0;},Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['sideBuffer']=function(){const _0x5ae6ff=_0x4b42a7;return Scene_CreateCharacter[_0x5ae6ff(0x21f)][_0x5ae6ff(0x225)];},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x426)]=function(){const _0x366af9=_0x4b42a7;Scene_MenuBase['prototype']['create'][_0x366af9(0x1da)](this),this[_0x366af9(0x1c4)](),this[_0x366af9(0x220)]();},Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['createInstructionWindow']=function(){const _0x5acaf9=_0x4b42a7,_0x1741cc=this[_0x5acaf9(0x223)](),_0x3b1e89=new Window_CharaCreateInstruction(_0x1741cc);this[_0x5acaf9(0x243)](_0x3b1e89),this['_instructionWindow']=_0x3b1e89,_0x3b1e89[_0x5acaf9(0x3f2)](Window_CharaCreateInstruction[_0x5acaf9(0x21f)][_0x5acaf9(0x1d1)]),this[_0x5acaf9(0x358)]();},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x223)]=function(){const _0x44358b=_0x4b42a7;if(VisuMZ['CharaCreationSys'][_0x44358b(0x412)]['Window']['InstructionWindow_RectJS'])return VisuMZ['CharaCreationSys']['Settings'][_0x44358b(0x408)][_0x44358b(0x1d7)][_0x44358b(0x1da)](this);const _0x465e69=Graphics['boxWidth']-this[_0x44358b(0x395)]()*0x2,_0x3cac9c=this[_0x44358b(0x3bd)](0x1,![]),_0x35b96c=this[_0x44358b(0x395)](),_0x3d7e15=this[_0x44358b(0x286)]()+Math[_0x44358b(0x3ca)](this[_0x44358b(0x3bd)](0x1,![])*0.5);return new Rectangle(_0x35b96c,_0x3d7e15,_0x465e69-(this[_0x44358b(0x2bb)]()?this['mainCommandWidth']():0x0),_0x3cac9c);},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x220)]=function(){const _0x36aa3b=_0x4b42a7,_0x2d73e0=this[_0x36aa3b(0x2c4)](),_0x207b22=new Window_SelectCreateCharacter(_0x2d73e0);_0x207b22['setFilterType'](this[_0x36aa3b(0x468)]),_0x207b22['setHandler']('ok',this[_0x36aa3b(0x3c7)][_0x36aa3b(0x1b2)](this)),_0x207b22[_0x36aa3b(0x24c)](_0x36aa3b(0x21b),this[_0x36aa3b(0x1b3)]['bind'](this)),this[_0x36aa3b(0x243)](_0x207b22),this[_0x36aa3b(0x289)]=_0x207b22,_0x207b22['setBackgroundType'](Window_SelectCreateCharacter[_0x36aa3b(0x21f)][_0x36aa3b(0x1d1)]);},Scene_SelectCreatedChara['prototype'][_0x4b42a7(0x2c4)]=function(){const _0x32c9b8=_0x4b42a7;if(VisuMZ[_0x32c9b8(0x1bd)][_0x32c9b8(0x412)][_0x32c9b8(0x408)]['SelectActorWindow_RectJS'])return VisuMZ[_0x32c9b8(0x1bd)][_0x32c9b8(0x412)][_0x32c9b8(0x408)][_0x32c9b8(0x387)][_0x32c9b8(0x1da)](this);const _0x339ccb=Graphics[_0x32c9b8(0x473)]-this['sideBuffer']()*0x2,_0x287b68=this[_0x32c9b8(0x22f)]()-this[_0x32c9b8(0x3bd)](0x1,![])*0x3,_0x228111=this['sideBuffer'](),_0x34ad1d=this[_0x32c9b8(0x286)]()+this[_0x32c9b8(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x228111,_0x34ad1d,_0x339ccb,_0x287b68);},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x358)]=function(){const _0x2a949c=_0x4b42a7,_0x2296f2=this[_0x2a949c(0x468)];this['updateInstructionTextKey'](_0x2296f2);},Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['updateInstructionTextKey']=function(_0x8edd32){const _0x5a5468=_0x4b42a7,_0x7b6cd8=TextManager['CHARA_CREATION_SYS'][_0x5a5468(0x2a1)][_0x8edd32]||'';this[_0x5a5468(0x264)][_0x5a5468(0x327)](_0x7b6cd8);},Scene_SelectCreatedChara['prototype'][_0x4b42a7(0x3c7)]=function(){const _0xa87d63=_0x4b42a7;if(this[_0xa87d63(0x468)]===_0xa87d63(0x39d))this[_0xa87d63(0x1d0)]();else this[_0xa87d63(0x468)]===_0xa87d63(0x2a6)&&this[_0xa87d63(0x2f1)]();},Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['onActorDismiss']=function(){const _0x79c0a8=_0x4b42a7,_0x39d69e=this['_actorWindow']['targetActor']();this[_0x79c0a8(0x242)][_0x79c0a8(0x407)]&&$gameSwitches[_0x79c0a8(0x35d)](this[_0x79c0a8(0x242)]['dismissSwitchID'],!![]),this[_0x79c0a8(0x242)]['registerVarID']&&$gameVariables[_0x79c0a8(0x35d)](this[_0x79c0a8(0x242)][_0x79c0a8(0x1ca)],_0x39d69e[_0x79c0a8(0x398)]()),_0x39d69e[_0x79c0a8(0x1f5)](),$gameParty[_0x79c0a8(0x2ef)](_0x39d69e[_0x79c0a8(0x398)]()),$gameTemp['_characterCreated']=!![],this[_0x79c0a8(0x2ed)](this[_0x79c0a8(0x438)]()),this['popScene']();},Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['onActorRetrain']=function(){const _0x555f76=_0x4b42a7,_0x65e3ea=this[_0x555f76(0x289)][_0x555f76(0x368)]();this[_0x555f76(0x242)]['actorID']=_0x65e3ea[_0x555f76(0x398)](),_0x65e3ea['prepareForRetraining'](this[_0x555f76(0x242)]),SceneManager[_0x555f76(0x32f)](Scene_CreateCharacter),SceneManager[_0x555f76(0x258)]('retrain',this['_settings']);},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x37a)]=function(){const _0x23e631=_0x4b42a7;Scene_MenuBase[_0x23e631(0x39c)][_0x23e631(0x37a)][_0x23e631(0x1da)](this),this[_0x23e631(0x39f)](this[_0x23e631(0x2fb)]()),this['createCustomBackgroundImages']();},Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['getBackgroundOpacity']=function(){const _0x1b8bb9=_0x4b42a7;return VisuMZ[_0x1b8bb9(0x1bd)][_0x1b8bb9(0x412)]['BgSettings'][_0x1b8bb9(0x334)];},Scene_SelectCreatedChara[_0x4b42a7(0x39c)][_0x4b42a7(0x411)]=function(){const _0x4facfa=_0x4b42a7,_0x2cd927=VisuMZ[_0x4facfa(0x1bd)][_0x4facfa(0x412)]['BgSettings'];_0x2cd927&&(_0x2cd927[_0x4facfa(0x21c)]!==''||_0x2cd927[_0x4facfa(0x24e)]!=='')&&(this['_backSprite1']=new Sprite(ImageManager[_0x4facfa(0x3c0)](_0x2cd927[_0x4facfa(0x21c)])),this[_0x4facfa(0x22b)]=new Sprite(ImageManager['loadTitle2'](_0x2cd927['BgFilename2'])),this['addChild'](this[_0x4facfa(0x41c)]),this[_0x4facfa(0x283)](this[_0x4facfa(0x22b)]),this[_0x4facfa(0x41c)]['bitmap'][_0x4facfa(0x2d4)](this[_0x4facfa(0x222)][_0x4facfa(0x1b2)](this,this[_0x4facfa(0x41c)])),this[_0x4facfa(0x22b)][_0x4facfa(0x363)][_0x4facfa(0x2d4)](this[_0x4facfa(0x222)]['bind'](this,this[_0x4facfa(0x22b)])));},Scene_SelectCreatedChara[_0x4b42a7(0x39c)]['adjustSprite']=function(_0x258305){const _0x1ce798=_0x4b42a7;this[_0x1ce798(0x1ff)](_0x258305),this['centerSprite'](_0x258305);};function Scene_CreateCharacter(){const _0x4d2eea=_0x4b42a7;this[_0x4d2eea(0x1dd)](...arguments);}Scene_CreateCharacter[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Scene_MenuBase[_0x4b42a7(0x39c)]),Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Scene_CreateCharacter,Scene_CreateCharacter['SETTINGS']={'steps':[_0x4b42a7(0x1d2),_0x4b42a7(0x1f6),_0x4b42a7(0x351),_0x4b42a7(0x2b0),_0x4b42a7(0x3a3),_0x4b42a7(0x2f9)],'buffer':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x238)]??0x30,'showListIcons':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x364)]??!![],'traitsStep':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x475)][_0x4b42a7(0x25e)]??!![],'voiceStep':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x2ae)]??!![]},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(){const _0x47843c=_0x4b42a7;Scene_MenuBase[_0x47843c(0x39c)][_0x47843c(0x1dd)][_0x47843c(0x1da)](this),this['_step']=-0x1;},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x27e)]=function(_0x2ee1a3,_0x471de3){const _0x18043f=_0x4b42a7;this[_0x18043f(0x468)]=_0x2ee1a3,this['_settings']=_0x471de3,this[_0x18043f(0x1af)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x43d)]=function(){const _0x33ec3c=_0x4b42a7;return $gameActors[_0x33ec3c(0x43d)](this[_0x33ec3c(0x242)][_0x33ec3c(0x308)])||null;},Scene_CreateCharacter['prototype'][_0x4b42a7(0x2bb)]=function(){return this['_settings']['showGold'];},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x280)]=function(){return 0x0;},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x395)]=function(){const _0x50bdba=_0x4b42a7;return Scene_CreateCharacter['SETTINGS'][_0x50bdba(0x225)];},Scene_CreateCharacter['prototype'][_0x4b42a7(0x386)]=function(){const _0x417c68=_0x4b42a7;return this['_type']===_0x417c68(0x2a6);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['prepareTraits']=function(){const _0x11fbb3=_0x4b42a7;if(!Imported['VisuMZ_1_ElementStatusCore'])return;if(!DataManager[_0x11fbb3(0x325)]())return;if(!Scene_CreateCharacter[_0x11fbb3(0x21f)][_0x11fbb3(0x2cf)])return;this[_0x11fbb3(0x1b9)]={};const _0x20ab5a=this[_0x11fbb3(0x43d)]()['getTraitSetKeys']();for(const _0x3b30ad of _0x20ab5a){this['_traits'][_0x3b30ad[_0x11fbb3(0x399)]()[_0x11fbb3(0x465)]()]=this['getPreparedTrait'](_0x3b30ad);}},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x342)]=function(_0x4f25e8){const _0x57c8f8=_0x4b42a7;if(this[_0x57c8f8(0x386)]()){const _0x1757bc=this[_0x57c8f8(0x242)][_0x57c8f8(0x2ab)],_0x4a46d7=_0x1757bc[_0x57c8f8(0x34b)][_0x4f25e8]||'';return _0x4a46d7[_0x57c8f8(0x399)]()[_0x57c8f8(0x465)]();}const _0x4fcdfd=VisuMZ[_0x57c8f8(0x1bd)][_0x57c8f8(0x412)][_0x57c8f8(0x475)],_0x54c361=_0x4fcdfd[_0x4f25e8];if(_0x54c361[_0x57c8f8(0x333)]){const _0x31e08e=_0x54c361[_0x57c8f8(0x2f0)][_0x57c8f8(0x25d)](_0x1acd2c=>_0x1acd2c['noCostOption']);if(_0x31e08e['length']>0x0){const _0x31a085=_0x31e08e[Math[_0x57c8f8(0x31a)](_0x31e08e[_0x57c8f8(0x47e)])];return _0x31a085[_0x57c8f8(0x205)][_0x57c8f8(0x399)]()['trim']();}else return _0x54c361['Default'][_0x57c8f8(0x399)]()['trim']();}else return _0x54c361[_0x57c8f8(0x2c9)][_0x57c8f8(0x399)]()[_0x57c8f8(0x465)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1fc)]=function(){const _0x5912f0=_0x4b42a7;Scene_MenuBase[_0x5912f0(0x39c)][_0x5912f0(0x1fc)]['call'](this),this[_0x5912f0(0x386)]()&&this['onRetrainStart'](),this[_0x5912f0(0x1f9)](),this[_0x5912f0(0x358)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1f9)]=function(){const _0x1bb82e=_0x4b42a7;this[_0x1bb82e(0x261)]=-0x1,this[_0x1bb82e(0x383)]='',this[_0x1bb82e(0x215)](),this[_0x1bb82e(0x20a)]=this[_0x1bb82e(0x261)],this[_0x1bb82e(0x1ef)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)]['gotoNextStep']=function(){const _0x464d18=_0x4b42a7,_0x5541c1=Scene_CreateCharacter[_0x464d18(0x21f)][_0x464d18(0x3ab)];for(;;){this[_0x464d18(0x261)]+=0x1;if(this[_0x464d18(0x3a7)](_0x5541c1[this[_0x464d18(0x261)]]))break;if(this[_0x464d18(0x261)]>=_0x5541c1[_0x464d18(0x47e)]){alert(_0x464d18(0x375)['format'](this[_0x464d18(0x261)])),SceneManager[_0x464d18(0x3b2)]();return;}}this[_0x464d18(0x383)]=_0x5541c1[this['_step']];},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1c5)]=function(){const _0x3e15ff=_0x4b42a7,_0x21e7b4=Scene_CreateCharacter['SETTINGS'][_0x3e15ff(0x3ab)];for(;;){this[_0x3e15ff(0x261)]-=0x1;if(this[_0x3e15ff(0x20a)]===this['_step'])break;if(this[_0x3e15ff(0x3a7)](_0x21e7b4[this[_0x3e15ff(0x261)]]))break;if(this[_0x3e15ff(0x261)]>=_0x21e7b4[_0x3e15ff(0x47e)]){alert(_0x3e15ff(0x375)['format'](this[_0x3e15ff(0x261)])),SceneManager[_0x3e15ff(0x3b2)]();return;}}this[_0x3e15ff(0x383)]=_0x21e7b4[this[_0x3e15ff(0x261)]];},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3a7)]=function(_0x5097ca){const _0x12bec4=_0x4b42a7;switch(_0x5097ca[_0x12bec4(0x332)]()[_0x12bec4(0x465)]()){case _0x12bec4(0x1d2):if(this[_0x12bec4(0x386)]())return this[_0x12bec4(0x242)]['retrain'][_0x12bec4(0x1d2)];return!![];case _0x12bec4(0x1f6):if(this[_0x12bec4(0x386)]())return this[_0x12bec4(0x242)][_0x12bec4(0x2a6)][_0x12bec4(0x1f6)];return!![];case _0x12bec4(0x351):if(!Imported[_0x12bec4(0x2c6)])return![];if(!Scene_CreateCharacter[_0x12bec4(0x21f)][_0x12bec4(0x2cf)])return![];if(this['isRetrainMode']())return this[_0x12bec4(0x242)]['retrain'][_0x12bec4(0x351)];return!![];case'voice':if(!Imported[_0x12bec4(0x3c4)])return![];if(!Scene_CreateCharacter['SETTINGS'][_0x12bec4(0x2f7)])return![];if(this['isRetrainMode']())return this[_0x12bec4(0x242)][_0x12bec4(0x2a6)][_0x12bec4(0x2b0)];return!![];case'name':if(this['isRetrainMode']())return this['_settings'][_0x12bec4(0x2a6)][_0x12bec4(0x3a3)];return!![];case _0x12bec4(0x2f9):return!![];default:return![];}},Scene_CreateCharacter['prototype'][_0x4b42a7(0x389)]=function(){const _0xbedbea=_0x4b42a7;if(!this[_0xbedbea(0x353)])return;for(const _0x37cab2 of this[_0xbedbea(0x353)]){_0x37cab2[_0xbedbea(0x320)](),_0x37cab2[_0xbedbea(0x2d7)]();}},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x244)]=function(){const _0x47a101=_0x4b42a7;if(this['_stepName']===_0x47a101(0x2f9)){this[_0x47a101(0x1b3)]();return;}this[_0x47a101(0x389)](),this[_0x47a101(0x215)](),this[_0x47a101(0x358)](),this[_0x47a101(0x1ef)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2ec)]=function(){const _0x950fa=_0x4b42a7;if(this[_0x950fa(0x20a)]===this[_0x950fa(0x261)]){this[_0x950fa(0x1b3)]();return;}this['closeAllWindows'](),this[_0x950fa(0x1c5)](),this['updateInstructionText'](),this[_0x950fa(0x1ef)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)]['openCurrentStepWindows']=function(){const _0x4016f7=_0x4b42a7;Input[_0x4016f7(0x256)](),this[_0x4016f7(0x2dc)]['open']();const _0x490aab=this['_stepName'];switch(_0x490aab[_0x4016f7(0x332)]()[_0x4016f7(0x465)]()){case'class':this['_classListWindow']['activate'](),this[_0x4016f7(0x23c)][_0x4016f7(0x204)](),this[_0x4016f7(0x23c)][_0x4016f7(0x43a)]();break;case _0x4016f7(0x1f6):this['_appearanceWindow']['activate'](),this['_appearanceWindow'][_0x4016f7(0x204)](),this[_0x4016f7(0x3c1)][_0x4016f7(0x43a)]();break;case _0x4016f7(0x351):this['_traitTypesWindow'][_0x4016f7(0x43a)](),this[_0x4016f7(0x340)]['activate'](),this[_0x4016f7(0x340)][_0x4016f7(0x204)]();break;case _0x4016f7(0x2b0):this[_0x4016f7(0x447)][_0x4016f7(0x43a)](),this[_0x4016f7(0x447)][_0x4016f7(0x268)](),this[_0x4016f7(0x447)]['refresh']();break;case _0x4016f7(0x3a3):this['_nameCurrentWindow'][_0x4016f7(0x43a)](),this[_0x4016f7(0x47c)][_0x4016f7(0x204)](),this['_nameCommandWindow']['open'](),this[_0x4016f7(0x298)][_0x4016f7(0x268)]();break;case'confirm':this[_0x4016f7(0x3a4)][_0x4016f7(0x43a)](),this[_0x4016f7(0x3a4)][_0x4016f7(0x204)](),this['_confirmCommandWindow'][_0x4016f7(0x43a)](),this['_confirmCommandWindow']['activate'](),this[_0x4016f7(0x278)]['refresh']();break;default:break;}},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x426)]=function(){const _0x208234=_0x4b42a7;Scene_MenuBase['prototype'][_0x208234(0x426)][_0x208234(0x1da)](this),this['_stepWindows']=[],this[_0x208234(0x1c4)](),this[_0x208234(0x3c6)](),this['createGraphicsPreviewWindow'](),this['createClassListWindow'](),this[_0x208234(0x27a)](),this[_0x208234(0x230)](),this['createTraitTypesWindow'](),this['createTraitSetsWindow'](),this[_0x208234(0x1eb)](),this[_0x208234(0x1de)](),this[_0x208234(0x1db)](),this[_0x208234(0x30e)](),this['createNameInputWindow'](),this['createConfirmDataWindow'](),this[_0x208234(0x1e2)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x382)]=function(){const _0x1703cf=_0x4b42a7,_0x3a4596=[this[_0x1703cf(0x2dc)],this[_0x1703cf(0x23c)],this[_0x1703cf(0x3c1)],this[_0x1703cf(0x340)],this[_0x1703cf(0x40a)],this['_confirmDataWindow']];for(const _0x4f2f0c of _0x3a4596){if(_0x4f2f0c)_0x4f2f0c[_0x1703cf(0x403)](this[_0x1703cf(0x242)]);}},Scene_CreateCharacter[_0x4b42a7(0x39c)]['createInstructionWindow']=function(){const _0x54e449=_0x4b42a7,_0xe58cc=this[_0x54e449(0x223)](),_0xed34fd=new Window_CharaCreateInstruction(_0xe58cc);this[_0x54e449(0x243)](_0xed34fd),this[_0x54e449(0x264)]=_0xed34fd,_0xed34fd[_0x54e449(0x3f2)](Window_CharaCreateInstruction[_0x54e449(0x21f)][_0x54e449(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['instructionWindowRect']=function(){const _0x26ba4e=_0x4b42a7;if(VisuMZ['CharaCreationSys'][_0x26ba4e(0x412)][_0x26ba4e(0x408)][_0x26ba4e(0x1d7)])return VisuMZ[_0x26ba4e(0x1bd)][_0x26ba4e(0x412)]['Window'][_0x26ba4e(0x1d7)][_0x26ba4e(0x1da)](this);const _0x32f64c=Graphics[_0x26ba4e(0x473)]-this[_0x26ba4e(0x395)]()*0x2,_0x32d4f5=this[_0x26ba4e(0x3bd)](0x1,![]),_0x3e35f6=this['sideBuffer'](),_0x2cef6c=this[_0x26ba4e(0x286)]()+Math[_0x26ba4e(0x3ca)](this[_0x26ba4e(0x3bd)](0x1,![])*0.5);return new Rectangle(_0x3e35f6,_0x2cef6c,_0x32f64c-(this[_0x26ba4e(0x2bb)]()?this['mainCommandWidth']():0x0),_0x32d4f5);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3c6)]=function(){const _0x9a5ab3=_0x4b42a7;if(!this[_0x9a5ab3(0x2bb)]())return;const _0x4c180a=this[_0x9a5ab3(0x346)](),_0x40e49b=new Window_CharaCreateGold(_0x4c180a);this['addWindow'](_0x40e49b),this[_0x9a5ab3(0x42c)]=_0x40e49b,_0x40e49b['setBackgroundType'](Window_CharaCreateGold[_0x9a5ab3(0x21f)][_0x9a5ab3(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['goldWindowRect']=function(){const _0x3cade1=_0x4b42a7;if(VisuMZ[_0x3cade1(0x1bd)][_0x3cade1(0x412)][_0x3cade1(0x408)]['GoldWindow_RectJS'])return VisuMZ[_0x3cade1(0x1bd)][_0x3cade1(0x412)][_0x3cade1(0x408)][_0x3cade1(0x388)][_0x3cade1(0x1da)](this);const _0x20ee3c=this[_0x3cade1(0x223)](),_0xe5ac96=this[_0x3cade1(0x40e)](),_0x4bba21=_0x20ee3c[_0x3cade1(0x3da)],_0x199a9c=_0x20ee3c['x']+_0x20ee3c[_0x3cade1(0x2c0)],_0x6694fe=_0x20ee3c['y'];return new Rectangle(_0x199a9c,_0x6694fe,_0xe5ac96,_0x4bba21);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2c3)]=function(){const _0x5a1a84=_0x4b42a7,_0x1627ea=this[_0x5a1a84(0x217)](),_0x539b4a=new Window_CharaCreateGraphicsPreview(_0x1627ea);this[_0x5a1a84(0x243)](_0x539b4a),this[_0x5a1a84(0x2dc)]=_0x539b4a,_0x539b4a[_0x5a1a84(0x3f2)](Window_CharaCreateGraphicsPreview[_0x5a1a84(0x21f)][_0x5a1a84(0x1d1)]);},Scene_CreateCharacter['prototype']['graphicsPreviewWindowRect']=function(){const _0x437d0c=_0x4b42a7;if(VisuMZ['CharaCreationSys'][_0x437d0c(0x412)]['Window'][_0x437d0c(0x24d)])return VisuMZ['CharaCreationSys'][_0x437d0c(0x412)]['Window'][_0x437d0c(0x24d)][_0x437d0c(0x1da)](this);const _0xf2ff9b=Math[_0x437d0c(0x3ca)](Graphics[_0x437d0c(0x473)]/0x2)-Math['ceil'](this['sideBuffer']()*1.5),_0x2bd9e1=this[_0x437d0c(0x22f)]()-this[_0x437d0c(0x3bd)](0x1,![])*0x3,_0x168cae=Graphics[_0x437d0c(0x473)]-_0xf2ff9b-this[_0x437d0c(0x395)](),_0x21d9cb=this['mainAreaTop']()+this[_0x437d0c(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x168cae,_0x21d9cb,_0xf2ff9b,_0x2bd9e1);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['createClassListWindow']=function(){const _0x39db40=_0x4b42a7,_0x50a69a=this['classListWindowRect'](),_0x1434b0=new Window_CharaCreateClassList(_0x50a69a);_0x1434b0[_0x39db40(0x449)](this['_graphicsPreviewWindow']),_0x1434b0[_0x39db40(0x24c)](_0x39db40(0x1d2),this[_0x39db40(0x452)][_0x39db40(0x1b2)](this)),_0x1434b0[_0x39db40(0x24c)]('cancel',this[_0x39db40(0x2ec)][_0x39db40(0x1b2)](this)),this[_0x39db40(0x243)](_0x1434b0),this[_0x39db40(0x23c)]=_0x1434b0,this[_0x39db40(0x353)]['push'](_0x1434b0),_0x1434b0['setBackgroundType'](Window_CharaCreateClassList[_0x39db40(0x21f)][_0x39db40(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x28c)]=function(){const _0x2d05ae=_0x4b42a7;if(VisuMZ[_0x2d05ae(0x1bd)][_0x2d05ae(0x412)][_0x2d05ae(0x408)]['ClassListWindow_RectJS'])return VisuMZ[_0x2d05ae(0x1bd)][_0x2d05ae(0x412)][_0x2d05ae(0x408)]['ClassListWindow_RectJS']['call'](this);const _0x5d6c23=Math[_0x2d05ae(0x3ca)](Graphics['boxWidth']/0x2)-Math[_0x2d05ae(0x470)](this[_0x2d05ae(0x395)]()*1.5),_0x55b7fe=this[_0x2d05ae(0x22f)]()-this['calcWindowHeight'](0x1,![])*0x3,_0x1ed271=this[_0x2d05ae(0x395)](),_0x3002ee=this[_0x2d05ae(0x286)]()+this[_0x2d05ae(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x1ed271,_0x3002ee,_0x5d6c23,_0x55b7fe);},Scene_CreateCharacter['prototype']['createAppearanceWindow']=function(){const _0x5e64b1=_0x4b42a7,_0xd76b32=this[_0x5e64b1(0x463)](),_0x46df07=new Window_CharaCreateAppearance(_0xd76b32);_0x46df07[_0x5e64b1(0x449)](this[_0x5e64b1(0x2dc)]),_0x46df07['setHandler'](_0x5e64b1(0x472),this[_0x5e64b1(0x244)][_0x5e64b1(0x1b2)](this)),_0x46df07[_0x5e64b1(0x24c)](_0x5e64b1(0x39b),this[_0x5e64b1(0x437)]['bind'](this)),_0x46df07['setHandler'](_0x5e64b1(0x21b),this['processPrevStep'][_0x5e64b1(0x1b2)](this)),this[_0x5e64b1(0x243)](_0x46df07),this[_0x5e64b1(0x3c1)]=_0x46df07,this[_0x5e64b1(0x353)][_0x5e64b1(0x32f)](_0x46df07),_0x46df07[_0x5e64b1(0x3f2)](Window_CharaCreateAppearance[_0x5e64b1(0x21f)][_0x5e64b1(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x463)]=function(){const _0x58520b=_0x4b42a7;if(VisuMZ['CharaCreationSys'][_0x58520b(0x412)][_0x58520b(0x408)][_0x58520b(0x22c)])return VisuMZ[_0x58520b(0x1bd)][_0x58520b(0x412)][_0x58520b(0x408)][_0x58520b(0x22c)][_0x58520b(0x1da)](this);const _0x44ec51=Math['floor'](Graphics[_0x58520b(0x473)]/0x2)-Math[_0x58520b(0x470)](this['sideBuffer']()*1.5),_0x25004c=this[_0x58520b(0x22f)]()-this[_0x58520b(0x3bd)](0x1,![])*0x3,_0x5af2fa=this[_0x58520b(0x395)](),_0x5a5001=this['mainAreaTop']()+this[_0x58520b(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x5af2fa,_0x5a5001,_0x44ec51,_0x25004c);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x230)]=function(){const _0x4121bb=_0x4b42a7,_0x57efd7=this['graphicSetsWindowRect'](),_0xbae3b=new Window_CharaCreateGraphicSets(_0x57efd7);_0xbae3b['setHelpWindow'](this['_graphicsPreviewWindow']),_0xbae3b['setHandler'](_0x4121bb(0x472),this['onGraphicSetsOk']['bind'](this)),_0xbae3b[_0x4121bb(0x24c)](_0x4121bb(0x21b),this[_0x4121bb(0x233)][_0x4121bb(0x1b2)](this)),this[_0x4121bb(0x243)](_0xbae3b),this[_0x4121bb(0x3dc)]=_0xbae3b,this[_0x4121bb(0x353)][_0x4121bb(0x32f)](_0xbae3b),_0xbae3b[_0x4121bb(0x3f2)](Window_CharaCreateGraphicSets[_0x4121bb(0x21f)][_0x4121bb(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x47d)]=function(){const _0x412675=_0x4b42a7;if(VisuMZ['CharaCreationSys'][_0x412675(0x412)][_0x412675(0x408)][_0x412675(0x337)])return VisuMZ[_0x412675(0x1bd)]['Settings']['Window'][_0x412675(0x337)][_0x412675(0x1da)](this);const _0x23844c=Math[_0x412675(0x3ca)](Graphics[_0x412675(0x473)]/0x2)-Math[_0x412675(0x470)](this[_0x412675(0x395)]()*1.5),_0x2108e4=this['mainAreaHeight']()-this['calcWindowHeight'](0x1,![])*0x3,_0x97d758=this[_0x412675(0x395)](),_0x15a829=this['mainAreaTop']()+this[_0x412675(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x97d758,_0x15a829,_0x23844c,_0x2108e4);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x38f)]=function(){const _0x4b23b8=_0x4b42a7;if(!Imported[_0x4b23b8(0x2c6)])return;if(!DataManager['traitSetsEnabled']())return;if(!Scene_CreateCharacter[_0x4b23b8(0x21f)][_0x4b23b8(0x2cf)])return;const _0x274578=this[_0x4b23b8(0x3d0)](),_0x3d8104=new Window_CharaCreateTraitTypes(_0x274578);_0x3d8104['setHandler'](_0x4b23b8(0x352),this['processNextStep'][_0x4b23b8(0x1b2)](this)),_0x3d8104['setHandler']('cancel',this[_0x4b23b8(0x2ec)][_0x4b23b8(0x1b2)](this));const _0x28cd1e=this[_0x4b23b8(0x43d)]()['getTraitSetKeys']();for(const _0xdb09b1 of _0x28cd1e){_0x3d8104['setHandler'](_0xdb09b1,this[_0x4b23b8(0x319)]['bind'](this,_0xdb09b1));}this[_0x4b23b8(0x243)](_0x3d8104),this[_0x4b23b8(0x340)]=_0x3d8104,this[_0x4b23b8(0x353)][_0x4b23b8(0x32f)](_0x3d8104),_0x3d8104['setBackgroundType'](Window_CharaCreateTraitTypes['SETTINGS'][_0x4b23b8(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['traitTypesWindowRect']=function(){const _0x174b2c=_0x4b42a7;if(VisuMZ[_0x174b2c(0x1bd)][_0x174b2c(0x412)][_0x174b2c(0x408)]['TraitTypesWindow_RectJS'])return VisuMZ[_0x174b2c(0x1bd)][_0x174b2c(0x412)][_0x174b2c(0x408)][_0x174b2c(0x3ff)]['call'](this);const _0x725676=Math['floor'](Graphics[_0x174b2c(0x473)]/0x2)-Math['ceil'](this[_0x174b2c(0x395)]()*1.5),_0x19267b=this[_0x174b2c(0x22f)]()-this['calcWindowHeight'](0x1,![])*0x3,_0x30bb64=this[_0x174b2c(0x395)](),_0x3cd827=this[_0x174b2c(0x286)]()+this[_0x174b2c(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x30bb64,_0x3cd827,_0x725676,_0x19267b);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1b5)]=function(){const _0x58f3e4=_0x4b42a7;if(!Imported[_0x58f3e4(0x2c6)])return;const _0x5d5148=this['traitSetsWindowRect'](),_0x20de55=new Window_CharaCreateTraitSets(_0x5d5148);_0x20de55[_0x58f3e4(0x24c)](_0x58f3e4(0x1e7),this[_0x58f3e4(0x404)][_0x58f3e4(0x1b2)](this)),_0x20de55[_0x58f3e4(0x24c)]('cancel',this['onTraitSetsCancel'][_0x58f3e4(0x1b2)](this)),this[_0x58f3e4(0x243)](_0x20de55),this[_0x58f3e4(0x40a)]=_0x20de55,this['_stepWindows'][_0x58f3e4(0x32f)](_0x20de55),_0x20de55[_0x58f3e4(0x3f2)](Window_CharaCreateTraitSets['SETTINGS'][_0x58f3e4(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x410)]=function(){const _0x4aa90f=_0x4b42a7;if(VisuMZ[_0x4aa90f(0x1bd)][_0x4aa90f(0x412)][_0x4aa90f(0x408)][_0x4aa90f(0x214)])return VisuMZ['CharaCreationSys'][_0x4aa90f(0x412)]['Window'][_0x4aa90f(0x214)]['call'](this);const _0xd88896=Math[_0x4aa90f(0x3ca)](Graphics[_0x4aa90f(0x473)]/0x2)-Math[_0x4aa90f(0x470)](this[_0x4aa90f(0x395)]()*1.5),_0x492eb6=this[_0x4aa90f(0x22f)]()-this['calcWindowHeight'](0x1,![])*0x3,_0x1f7f8d=Graphics[_0x4aa90f(0x473)]-_0xd88896-this[_0x4aa90f(0x395)](),_0x54b8b5=this[_0x4aa90f(0x286)]()+this[_0x4aa90f(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x1f7f8d,_0x54b8b5,_0xd88896,_0x492eb6);},Scene_CreateCharacter['prototype'][_0x4b42a7(0x1eb)]=function(){const _0x3d22b9=_0x4b42a7;if(!Imported['VisuMZ_3_BattleVoices'])return;const _0x347828=this[_0x3d22b9(0x3e9)](),_0x39bd4f=new Window_CharaCreateBattleVoice(_0x347828);_0x39bd4f[_0x3d22b9(0x24c)](_0x3d22b9(0x352),this[_0x3d22b9(0x244)][_0x3d22b9(0x1b2)](this)),_0x39bd4f[_0x3d22b9(0x24c)](_0x3d22b9(0x2b0),this[_0x3d22b9(0x1aa)][_0x3d22b9(0x1b2)](this)),_0x39bd4f[_0x3d22b9(0x24c)](_0x3d22b9(0x21b),this['processPrevStep'][_0x3d22b9(0x1b2)](this)),this['addWindow'](_0x39bd4f),this[_0x3d22b9(0x447)]=_0x39bd4f,this[_0x3d22b9(0x353)]['push'](_0x39bd4f),_0x39bd4f[_0x3d22b9(0x3f2)](Window_CharaCreateBattleVoice[_0x3d22b9(0x21f)][_0x3d22b9(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['battleVoiceWindowRect']=function(){const _0x55c6d3=_0x4b42a7;if(VisuMZ[_0x55c6d3(0x1bd)][_0x55c6d3(0x412)][_0x55c6d3(0x408)][_0x55c6d3(0x36b)])return VisuMZ[_0x55c6d3(0x1bd)][_0x55c6d3(0x412)][_0x55c6d3(0x408)]['BattleVoiceWindow_RectJS'][_0x55c6d3(0x1da)](this);const _0x186107=Math[_0x55c6d3(0x3ca)](Graphics[_0x55c6d3(0x473)]/0x2)-Math[_0x55c6d3(0x470)](this[_0x55c6d3(0x395)]()*1.5),_0x38e5e7=this[_0x55c6d3(0x22f)]()-this[_0x55c6d3(0x3bd)](0x1,![])*0x3,_0x2a7110=this[_0x55c6d3(0x395)](),_0x1fb477=this[_0x55c6d3(0x286)]()+this['calcWindowHeight'](0x1,![])*0x2;return new Rectangle(_0x2a7110,_0x1fb477,_0x186107,_0x38e5e7);},Scene_CreateCharacter['prototype'][_0x4b42a7(0x1de)]=function(){const _0x18587a=_0x4b42a7,_0x46a5c4=this['nameCurrentWindowRect'](),_0x2079a8=new Window_CharaCreateNameCurrent(_0x46a5c4);_0x2079a8[_0x18587a(0x327)](this[_0x18587a(0x242)][_0x18587a(0x3a3)]||''),this['addWindow'](_0x2079a8),this[_0x18587a(0x47c)]=_0x2079a8,this['_stepWindows'][_0x18587a(0x32f)](_0x2079a8),_0x2079a8[_0x18587a(0x3f2)](Window_CharaCreateNameCurrent['SETTINGS'][_0x18587a(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x439)]=function(){const _0x106087=_0x4b42a7;if(VisuMZ[_0x106087(0x1bd)][_0x106087(0x412)][_0x106087(0x408)]['NameCurrentWindow_RectJS'])return VisuMZ['CharaCreationSys'][_0x106087(0x412)][_0x106087(0x408)][_0x106087(0x2e7)][_0x106087(0x1da)](this);const _0x2d04f6=Math[_0x106087(0x3ca)](Graphics['boxWidth']/0x2)-Math[_0x106087(0x470)](this[_0x106087(0x395)]()*1.5),_0x264820=this[_0x106087(0x3bd)](0x1,![]),_0x2bcadb=this[_0x106087(0x395)](),_0x4a65ab=this['mainAreaTop']()+this[_0x106087(0x3bd)](0x1,![])*0x2;return new Rectangle(_0x2bcadb,_0x4a65ab,_0x2d04f6,_0x264820);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1db)]=function(){const _0x3a4273=_0x4b42a7,_0x594e93=this[_0x3a4273(0x328)](),_0x3b5489=new Window_CharaCreateNameCommand(_0x594e93);_0x3b5489['setHandler'](_0x3a4273(0x352),this[_0x3a4273(0x244)][_0x3a4273(0x1b2)](this)),_0x3b5489[_0x3a4273(0x24c)](_0x3a4273(0x44d),this[_0x3a4273(0x441)]['bind'](this)),_0x3b5489[_0x3a4273(0x24c)](_0x3a4273(0x292),this[_0x3a4273(0x2f4)][_0x3a4273(0x1b2)](this)),_0x3b5489[_0x3a4273(0x24c)](_0x3a4273(0x21b),this[_0x3a4273(0x2ec)][_0x3a4273(0x1b2)](this)),this[_0x3a4273(0x243)](_0x3b5489),this['_nameCommandWindow']=_0x3b5489,this[_0x3a4273(0x353)][_0x3a4273(0x32f)](_0x3b5489),_0x3b5489['setBackgroundType'](Window_CharaCreateNameCommand[_0x3a4273(0x21f)][_0x3a4273(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x328)]=function(){const _0x425933=_0x4b42a7;if(VisuMZ[_0x425933(0x1bd)][_0x425933(0x412)][_0x425933(0x408)][_0x425933(0x1fd)])return VisuMZ['CharaCreationSys']['Settings'][_0x425933(0x408)][_0x425933(0x1fd)][_0x425933(0x1da)](this);const _0x999a91=Math[_0x425933(0x3ca)](Graphics[_0x425933(0x473)]/0x2)-Math[_0x425933(0x470)](this[_0x425933(0x395)]()*1.5),_0x1cbf80=this['mainAreaHeight']()-this[_0x425933(0x3bd)](0x1,![])*0x4,_0x1a2aae=this[_0x425933(0x395)](),_0x5df542=this['mainAreaTop']()+this[_0x425933(0x3bd)](0x1,![])*0x3;return new Rectangle(_0x1a2aae,_0x5df542,_0x999a91,_0x1cbf80);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['createNameEditWindow']=function(){const _0x230c25=_0x4b42a7,_0x466afa=this['nameEditWindowRect'](),_0x4e5381=new Window_CharaCreateNameEdit(_0x466afa);_0x4e5381['setup'](this['actor']()),this[_0x230c25(0x243)](_0x4e5381),this[_0x230c25(0x478)]=_0x4e5381,this['_stepWindows'][_0x230c25(0x32f)](_0x4e5381),_0x4e5381[_0x230c25(0x3f2)](Window_CharaCreateNameEdit[_0x230c25(0x21f)][_0x230c25(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x430)]=function(){const _0x4bbf24=_0x4b42a7;if(VisuMZ[_0x4bbf24(0x1bd)]['Settings'][_0x4bbf24(0x408)][_0x4bbf24(0x2ea)])return VisuMZ[_0x4bbf24(0x1bd)][_0x4bbf24(0x412)][_0x4bbf24(0x408)]['NameEditWindow_RectJS']['call'](this);const _0x13847d=0x258,_0x11c08c=this[_0x4bbf24(0x3bd)](0x1,!![]),_0x75b65e=Math[_0x4bbf24(0x3ca)]((Graphics[_0x4bbf24(0x473)]-_0x13847d)/0x2),_0x455bd9=this['mainAreaTop']()+Math[_0x4bbf24(0x470)](this[_0x4bbf24(0x3bd)](0x1,![])*(Graphics[_0x4bbf24(0x24a)]>=0x2bc?0x2:1.5));return new Rectangle(_0x75b65e,_0x455bd9,_0x13847d,_0x11c08c);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3ce)]=function(){const _0x311eb2=_0x4b42a7,_0x28b469=this['nameInputWindowRect'](),_0x3a7693=new Window_CharaCreateNameInput(_0x28b469);_0x3a7693[_0x311eb2(0x25f)](this[_0x311eb2(0x478)]),_0x3a7693[_0x311eb2(0x24c)]('ok',this[_0x311eb2(0x443)][_0x311eb2(0x1b2)](this)),this[_0x311eb2(0x243)](_0x3a7693),this[_0x311eb2(0x453)]=_0x3a7693,this[_0x311eb2(0x353)][_0x311eb2(0x32f)](_0x3a7693),_0x3a7693['setBackgroundType'](Window_CharaCreateNameInput['SETTINGS'][_0x311eb2(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1be)]=function(){const _0xc3b2d0=_0x4b42a7;if(VisuMZ[_0xc3b2d0(0x1bd)][_0xc3b2d0(0x412)]['Window'][_0xc3b2d0(0x2db)])return VisuMZ[_0xc3b2d0(0x1bd)][_0xc3b2d0(0x412)][_0xc3b2d0(0x408)][_0xc3b2d0(0x2db)][_0xc3b2d0(0x1da)](this);const _0x3f0315=this[_0xc3b2d0(0x430)](),_0x41e4ad=_0x3f0315[_0xc3b2d0(0x2c0)],_0x4e48d7=this[_0xc3b2d0(0x3bd)](0x9,!![]),_0x376c61=Math['floor']((Graphics[_0xc3b2d0(0x473)]-_0x41e4ad)/0x2),_0x4e2346=_0x3f0315['y']+_0x3f0315[_0xc3b2d0(0x3da)];return new Rectangle(_0x376c61,_0x4e2346,_0x41e4ad,_0x4e48d7);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['createConfirmDataWindow']=function(){const _0x3568f1=_0x4b42a7,_0x233d5c=this[_0x3568f1(0x3d1)](),_0x14f42a=new Window_CharaCreateConfirmData(_0x233d5c);this[_0x3568f1(0x243)](_0x14f42a),this[_0x3568f1(0x3a4)]=_0x14f42a,this[_0x3568f1(0x353)][_0x3568f1(0x32f)](_0x14f42a),_0x14f42a[_0x3568f1(0x3f2)](Window_CharaCreateConfirmData[_0x3568f1(0x21f)][_0x3568f1(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3d1)]=function(){const _0x7c29c3=_0x4b42a7;if(VisuMZ[_0x7c29c3(0x1bd)][_0x7c29c3(0x412)][_0x7c29c3(0x408)][_0x7c29c3(0x41e)])return VisuMZ[_0x7c29c3(0x1bd)][_0x7c29c3(0x412)][_0x7c29c3(0x408)][_0x7c29c3(0x41e)]['call'](this);const _0x48b0b7=Math['floor'](Graphics[_0x7c29c3(0x473)]/0x2)-Math['ceil'](this[_0x7c29c3(0x395)]()*1.5),_0x31dc8e=this[_0x7c29c3(0x3bd)](0x6,![]),_0x5292be=this['sideBuffer'](),_0x198beb=this[_0x7c29c3(0x286)]()+this['calcWindowHeight'](0x1,![])*0x2;return new Rectangle(_0x5292be,_0x198beb,_0x48b0b7,_0x31dc8e);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1e2)]=function(){const _0x2f725f=_0x4b42a7,_0xb0263b=this['confirmCommandWindowRect'](),_0x30300b=new Window_CharaCreateConfirmCommand(_0xb0263b);_0x30300b[_0x2f725f(0x24c)]('finalize',this['onConfirmFinalize'][_0x2f725f(0x1b2)](this)),_0x30300b['setHandler']('cancel',this[_0x2f725f(0x2ec)][_0x2f725f(0x1b2)](this)),this['addWindow'](_0x30300b),this[_0x2f725f(0x278)]=_0x30300b,this[_0x2f725f(0x353)]['push'](_0x30300b),_0x30300b[_0x2f725f(0x3f2)](Window_CharaCreateConfirmCommand['SETTINGS'][_0x2f725f(0x1d1)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x28f)]=function(){const _0x2f4743=_0x4b42a7;if(VisuMZ[_0x2f4743(0x1bd)][_0x2f4743(0x412)][_0x2f4743(0x408)][_0x2f4743(0x212)])return VisuMZ['CharaCreationSys'][_0x2f4743(0x412)][_0x2f4743(0x408)]['ConfirmCommandWindow_RectJS'][_0x2f4743(0x1da)](this);const _0x1ed032=this[_0x2f4743(0x217)](),_0x5307c8=Math[_0x2f4743(0x3ca)](Graphics['boxWidth']/0x2)-Math[_0x2f4743(0x470)](this[_0x2f4743(0x395)]()*1.5),_0x17e4e0=this['calcWindowHeight'](0x1,!![]),_0x3cd771=this[_0x2f4743(0x395)](),_0x517a27=_0x1ed032['y']+_0x1ed032['height']-_0x17e4e0;return new Rectangle(_0x3cd771,_0x517a27,_0x5307c8,_0x17e4e0);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x358)]=function(){const _0x4704a5=_0x4b42a7,_0x357161=this['_stepName'];this[_0x4704a5(0x272)](_0x357161);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['updateInstructionTextKey']=function(_0x5986a4){const _0x23e54a=_0x4b42a7,_0x8cccc5=TextManager[_0x23e54a(0x1f4)][_0x23e54a(0x2a1)][_0x5986a4]||'';this[_0x23e54a(0x264)][_0x23e54a(0x327)](_0x8cccc5);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x452)]=function(){const _0x179f21=_0x4b42a7;if(this[_0x179f21(0x3a7)](_0x179f21(0x1f6))){const _0x5464fd=this['_classListWindow'][_0x179f21(0x306)](),_0x694900=_0x5464fd[_0x179f21(0x3cb)],_0x216144=_0x5464fd[_0x179f21(0x21d)];this[_0x179f21(0x3c1)][_0x179f21(0x260)](_0x694900,_0x216144);}this[_0x179f21(0x244)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x437)]=function(){const _0x18428b=_0x4b42a7;this[_0x18428b(0x3c1)][_0x18428b(0x320)](),this['_graphicSetsWindow'][_0x18428b(0x43a)](),this[_0x18428b(0x3dc)][_0x18428b(0x268)](),this['_graphicSetsWindow'][_0x18428b(0x3a2)](0x0),this[_0x18428b(0x272)](_0x18428b(0x2c1));},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x315)]=function(){const _0x4e832=_0x4b42a7,_0x37e389=this[_0x4e832(0x3dc)][_0x4e832(0x306)](),_0x27ed11=_0x37e389[_0x4e832(0x21d)];this[_0x4e832(0x3c1)][_0x4e832(0x1e8)](_0x27ed11),this['_appearanceWindow'][_0x4e832(0x3a2)](0x0),this[_0x4e832(0x233)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x233)]=function(){const _0x1d24bb=_0x4b42a7;this['_appearanceWindow']['open'](),this['_appearanceWindow'][_0x1d24bb(0x268)](),this[_0x1d24bb(0x3dc)][_0x1d24bb(0x320)](),this[_0x1d24bb(0x358)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x319)]=function(_0x400c1f){const _0x3feba3=_0x4b42a7;this[_0x3feba3(0x40a)][_0x3feba3(0x1ba)](_0x400c1f),this[_0x3feba3(0x40a)][_0x3feba3(0x43a)](),this['_traitSetsWindow'][_0x3feba3(0x268)](),this[_0x3feba3(0x40a)][_0x3feba3(0x3df)](),this[_0x3feba3(0x2dc)][_0x3feba3(0x320)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x404)]=function(){const _0x3ec8ff=_0x4b42a7,_0x149d16=this[_0x3ec8ff(0x40a)][_0x3ec8ff(0x455)][_0x3ec8ff(0x399)]()['trim'](),_0x270ec4=this['_traitSetsWindow'][_0x3ec8ff(0x1b1)](this[_0x3ec8ff(0x40a)][_0x3ec8ff(0x3e7)]());this['_traits'][_0x149d16]=_0x270ec4,this[_0x3ec8ff(0x2e6)](),this[_0x3ec8ff(0x2dc)]['refresh']();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2e6)]=function(){const _0x216068=_0x4b42a7;this['_traitSetsWindow']['close'](),this[_0x216068(0x340)][_0x216068(0x268)](),this[_0x216068(0x340)][_0x216068(0x204)](),this[_0x216068(0x2dc)][_0x216068(0x43a)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1aa)]=function(){const _0x1dfd01=_0x4b42a7;this['_battleVoiceWindow'][_0x1dfd01(0x29e)](),this[_0x1dfd01(0x447)][_0x1dfd01(0x268)](),this[_0x1dfd01(0x447)][_0x1dfd01(0x204)]();},Scene_CreateCharacter['prototype'][_0x4b42a7(0x441)]=function(){const _0x28e44f=_0x4b42a7;Input[_0x28e44f(0x256)]();const _0x3ba267=this[_0x28e44f(0x47c)]['_text'][_0x28e44f(0x465)]();this[_0x28e44f(0x47c)]['close'](),this[_0x28e44f(0x298)][_0x28e44f(0x320)](),this[_0x28e44f(0x2dc)][_0x28e44f(0x320)](),this[_0x28e44f(0x478)]['setName'](_0x3ba267),this[_0x28e44f(0x478)][_0x28e44f(0x43a)](),this[_0x28e44f(0x453)][_0x28e44f(0x43a)](),this['_nameInputWindow'][_0x28e44f(0x268)]();},Scene_CreateCharacter['prototype'][_0x4b42a7(0x45c)]=function(){const _0x1eee55=_0x4b42a7;this['_nameEditWindow'][_0x1eee55(0x320)](),this[_0x1eee55(0x453)][_0x1eee55(0x320)](),this[_0x1eee55(0x453)][_0x1eee55(0x2d7)](),this[_0x1eee55(0x47c)][_0x1eee55(0x43a)](),this['_nameCommandWindow']['open'](),this[_0x1eee55(0x298)]['activate'](),this[_0x1eee55(0x298)][_0x1eee55(0x204)](),this['_graphicsPreviewWindow']['open']();},Scene_CreateCharacter[_0x4b42a7(0x39c)]['onNameInputOk']=function(){const _0x1ef8c7=_0x4b42a7;this[_0x1ef8c7(0x47c)][_0x1ef8c7(0x327)](this[_0x1ef8c7(0x478)][_0x1ef8c7(0x3a3)]()),this[_0x1ef8c7(0x45c)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2f4)]=function(){const _0x3901ee=_0x4b42a7,_0x3d9176=this[_0x3901ee(0x298)][_0x3901ee(0x306)](),_0xe91c6b=_0x3d9176[_0x3901ee(0x384)];let _0x438385=this[_0x3901ee(0x47c)][_0x3901ee(0x392)],_0x209c39=0x14;while(_0x209c39--){_0x438385=_0xe91c6b[Math['randomInt'](_0xe91c6b[_0x3901ee(0x47e)])];if(this[_0x3901ee(0x47c)][_0x3901ee(0x392)]!==_0x438385)break;}this['_nameCurrentWindow'][_0x3901ee(0x327)](_0x438385),this[_0x3901ee(0x298)][_0x3901ee(0x268)](),this['_nameCommandWindow']['refresh']();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x31b)]=function(){const _0x392090=_0x4b42a7;this['finalizeCustomSettings'](),this[_0x392090(0x312)](),this['finalizeDeductCosts'](),this[_0x392090(0x33b)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x45a)]=function(){const _0x25287f=_0x4b42a7;this['finalizeApplyClass'](),this[_0x25287f(0x22a)](),this[_0x25287f(0x409)](),this['finalizeApplyVoiceSet'](),this[_0x25287f(0x32a)](),this['finalizeApplyProfile'](),this['finalizeApplyBiography']();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2fe)]=function(){const _0x3f7eea=_0x4b42a7;if(this[_0x3f7eea(0x386)]()&&!this[_0x3f7eea(0x242)]['retrain']['class'])return;const _0x408889=this['_classListWindow'][_0x3f7eea(0x306)](),_0x16b66b=_0x408889[_0x3f7eea(0x3cb)],_0x3d0d8e=this['isRetrainMode']()&&this[_0x3f7eea(0x242)]['retrain'][_0x3f7eea(0x3a1)];this['actor']()[_0x3f7eea(0x339)](_0x16b66b,_0x3d0d8e);if(this[_0x3f7eea(0x386)]()){this[_0x3f7eea(0x43d)]()[_0x3f7eea(0x30c)]();return;}this[_0x3f7eea(0x43d)]()['changeLevel'](this[_0x3f7eea(0x242)][_0x3f7eea(0x207)],![]),this[_0x3f7eea(0x43d)]()[_0x3f7eea(0x3c8)]=[],this['actor']()[_0x3f7eea(0x1a5)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x22a)]=function(){const _0x1e0705=_0x4b42a7;if(this[_0x1e0705(0x386)]()&&!this[_0x1e0705(0x242)]['retrain'][_0x1e0705(0x1f6)])return;const _0x453c1d=this[_0x1e0705(0x3c1)][_0x1e0705(0x306)]();this[_0x1e0705(0x43d)]()[_0x1e0705(0x381)](_0x453c1d[_0x1e0705(0x3b7)]||'',_0x453c1d[_0x1e0705(0x34e)]),this[_0x1e0705(0x43d)]()['setFaceImage'](_0x453c1d['FaceGraphic']||'',_0x453c1d[_0x1e0705(0x317)]),this[_0x1e0705(0x43d)]()[_0x1e0705(0x331)](_0x453c1d[_0x1e0705(0x3bc)]||''),Imported[_0x1e0705(0x3dd)]&&this['actor']()[_0x1e0705(0x231)](_0x453c1d['BattlePortrait']||_0x453c1d[_0x1e0705(0x265)]||''),Imported[_0x1e0705(0x47b)]&&this[_0x1e0705(0x43d)]()['setMenuImage'](_0x453c1d[_0x1e0705(0x265)]||'');},Scene_CreateCharacter[_0x4b42a7(0x39c)]['finalizeApplyTraits']=function(){const _0x4b7e32=_0x4b42a7;if(!Imported[_0x4b7e32(0x2c6)])return;if(!DataManager['traitSetsEnabled']())return;if(!Scene_CreateCharacter[_0x4b7e32(0x21f)][_0x4b7e32(0x2cf)])return;if(this['isRetrainMode']()&&!this[_0x4b7e32(0x242)][_0x4b7e32(0x2a6)]['traits'])return;const _0xe69d99=this['actor']()[_0x4b7e32(0x42b)]();for(const _0x92c6cf of _0xe69d99){const _0x1e12ff=this[_0x4b7e32(0x1b9)][_0x92c6cf['toUpperCase']()[_0x4b7e32(0x465)]()][_0x4b7e32(0x399)]()['trim']();this[_0x4b7e32(0x43d)]()[_0x4b7e32(0x36c)](_0x92c6cf,_0x1e12ff);}},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3d8)]=function(){const _0x1b0526=_0x4b42a7;if(!Imported['VisuMZ_3_BattleVoices'])return;if(this[_0x1b0526(0x386)]()&&!this[_0x1b0526(0x242)][_0x1b0526(0x2a6)][_0x1b0526(0x2b0)])return;const _0x37a51d=this[_0x1b0526(0x447)][_0x1b0526(0x1b6)]||null;this['actor']()[_0x1b0526(0x3d9)](_0x37a51d);const _0x5d237f=VisuMZ[_0x1b0526(0x2eb)][_0x1b0526(0x412)];this[_0x1b0526(0x43d)]()[_0x1b0526(0x448)](_0x5d237f[_0x1b0526(0x202)]),this[_0x1b0526(0x43d)]()[_0x1b0526(0x39a)](_0x5d237f[_0x1b0526(0x33f)]),this[_0x1b0526(0x43d)]()[_0x1b0526(0x347)](_0x5d237f[_0x1b0526(0x46e)]);},Scene_CreateCharacter['prototype'][_0x4b42a7(0x32a)]=function(){const _0x46235b=_0x4b42a7;if(this['isRetrainMode']()&&!this[_0x46235b(0x242)]['retrain'][_0x46235b(0x3a3)])return;const _0x1ab0cd=this[_0x46235b(0x47c)][_0x46235b(0x392)]||'';this['actor']()[_0x46235b(0x31f)](_0x1ab0cd);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2b8)]=function(){const _0x4ebcb2=_0x4b42a7;if(this[_0x4ebcb2(0x386)]()&&!this[_0x4ebcb2(0x242)][_0x4ebcb2(0x2a6)][_0x4ebcb2(0x330)])return;const _0x538305=TextManager['CHARA_CREATION_SYS'][_0x4ebcb2(0x3f8)][_0x4ebcb2(0x330)],_0xc05a2b=_0x538305[_0x4ebcb2(0x34f)](this[_0x4ebcb2(0x43d)]()[_0x4ebcb2(0x398)]());this['actor']()[_0x4ebcb2(0x229)](_0xc05a2b);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2d5)]=function(){const _0x30822a=_0x4b42a7;if(!Imported[_0x30822a(0x2c6)])return;if(this[_0x30822a(0x386)]()&&!this['_settings'][_0x30822a(0x2a6)][_0x30822a(0x26f)])return;const _0x1a2501=TextManager[_0x30822a(0x1f4)]['character'][_0x30822a(0x26f)];let _0x244213=_0x1a2501[_0x30822a(0x34f)](this['actor']()['actorId'](),this[_0x30822a(0x43d)]()[_0x30822a(0x1e4)]()[_0x30822a(0x3a3)]);TextManager[_0x30822a(0x1f4)][_0x30822a(0x3f8)]['bioWordWrap']&&Imported[_0x30822a(0x344)]&&(_0x244213='<WordWrap>'+_0x244213),this['actor']()[_0x30822a(0x1ab)](_0x244213);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x312)]=function(){const _0x4683d6=_0x4b42a7;if(this[_0x4683d6(0x386)]()){this[_0x4683d6(0x242)][_0x4683d6(0x47f)]>0x0&&$gameSwitches['setValue'](this[_0x4683d6(0x242)][_0x4683d6(0x47f)],!![]);this['_settings'][_0x4683d6(0x1ca)]&&$gameVariables['setValue'](this[_0x4683d6(0x242)]['registerVarID'],this[_0x4683d6(0x43d)]()[_0x4683d6(0x398)]());return;}this[_0x4683d6(0x43d)]()[_0x4683d6(0x204)](),$gameParty['addActor'](this['actor']()['actorId']()),this['actor']()[_0x4683d6(0x304)](),this['_settings'][_0x4683d6(0x37b)]>0x0&&$gameSwitches[_0x4683d6(0x35d)](this['_settings']['joinSwitchID'],!![]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x33b)]=function(){const _0x5cac2d=_0x4b42a7;$gameTemp[_0x5cac2d(0x1e3)]=!![],this[_0x5cac2d(0x2ed)](this['slowFadeSpeed']()),SceneManager[_0x5cac2d(0x2cb)](Scene_Map);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['totalGoldCost']=function(_0x3f40c4){const _0x327b5a=_0x4b42a7;let _0x18fa44=0x0;return _0x18fa44+=this[_0x327b5a(0x27f)](),_0x18fa44+=this['totalGoldCostFromTraits'](),_0x18fa44;},Scene_CreateCharacter['prototype'][_0x4b42a7(0x27f)]=function(){const _0xd793f7=_0x4b42a7;if(this[_0xd793f7(0x386)]()&&!this['_settings'][_0xd793f7(0x2a6)][_0xd793f7(0x1d2)])return 0x0;let _0x5ab401=0x0;const _0x10ee92=this[_0xd793f7(0x23c)][_0xd793f7(0x306)]();if(this[_0xd793f7(0x386)]()){const _0x39cf0b=this[_0xd793f7(0x242)][_0xd793f7(0x2ab)];if(_0x10ee92[_0xd793f7(0x3cb)]===_0x39cf0b[_0xd793f7(0x1e4)]()['id'])return 0x0;}return _0x5ab401+=_0x10ee92?_0x10ee92[_0xd793f7(0x477)]||0x0:0x0,_0x5ab401;},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1ea)]=function(_0x36885a){const _0x8e4351=_0x4b42a7;if(!Imported[_0x8e4351(0x2c6)])return 0x0;if(!this[_0x8e4351(0x1b9)])return 0x0;if(this[_0x8e4351(0x386)]()&&!this[_0x8e4351(0x242)][_0x8e4351(0x2a6)][_0x8e4351(0x351)])return 0x0;let _0x3a2c04=0x0;const _0x111945=this[_0x8e4351(0x43d)]()[_0x8e4351(0x42b)]();for(const _0x46f346 of _0x111945){if(_0x46f346===_0x36885a)continue;const _0x4a983c=this[_0x8e4351(0x1b9)][_0x46f346[_0x8e4351(0x399)]()[_0x8e4351(0x465)]()];if(this['isRetrainMode']()){const _0xdbf063=this[_0x8e4351(0x242)]['tempActor'];if(_0x4a983c===_0xdbf063['_traitSets'][_0x46f346][_0x8e4351(0x399)]()[_0x8e4351(0x465)]())continue;}const _0x946c98=DataManager['_traitSets'][_0x46f346[_0x8e4351(0x399)]()[_0x8e4351(0x465)]()][_0x4a983c];_0x946c98&&_0x946c98[_0x8e4351(0x481)]&&(_0x3a2c04+=_0x946c98['createCostData']['GoldCost']||0x0);}return _0x3a2c04;},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x232)]=function(){const _0x559291=_0x4b42a7,_0x23fef4=this[_0x559291(0x420)]();return $gameParty['gold']()>=_0x23fef4;},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3b5)]=function(){const _0x3e48f8=_0x4b42a7;this[_0x3e48f8(0x3a6)](),this[_0x3e48f8(0x435)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3a6)]=function(){const _0x11e33b=_0x4b42a7,_0x2d5e54=this[_0x11e33b(0x420)]();$gameParty['loseGold'](_0x2d5e54);if(this[_0x11e33b(0x42c)])this[_0x11e33b(0x42c)][_0x11e33b(0x204)]();_0x2d5e54>0x0&&Window_CharaCreateConfirmCommand['SETTINGS'][_0x11e33b(0x228)]&&SoundManager[_0x11e33b(0x450)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x250)]=function(_0x23460f){const _0x33bee0=_0x4b42a7,_0x1d0b2a={};return this[_0x33bee0(0x211)](_0x1d0b2a),this[_0x33bee0(0x245)](_0x1d0b2a,_0x23460f),_0x1d0b2a;},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x211)]=function(_0x3617d2){const _0x905cdc=_0x4b42a7;if(this[_0x905cdc(0x386)]()&&!this['_settings'][_0x905cdc(0x2a6)]['class'])return;const _0x593528=this[_0x905cdc(0x23c)][_0x905cdc(0x306)]();if(this['isRetrainMode']()){const _0x2010b5=this[_0x905cdc(0x242)][_0x905cdc(0x2ab)];if(_0x593528[_0x905cdc(0x3cb)]===_0x2010b5[_0x905cdc(0x1e4)]()['id'])return;}const _0x326a78=_0x593528['ItemIdCost'];_0x326a78>0x0&&(_0x3617d2[_0x326a78]=_0x593528[_0x905cdc(0x2de)]);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x245)]=function(_0xebcbad,_0x16210c){const _0x250c54=_0x4b42a7;if(!Imported['VisuMZ_1_ElementStatusCore'])return;if(!this[_0x250c54(0x1b9)])return;if(this[_0x250c54(0x386)]()&&!this[_0x250c54(0x242)][_0x250c54(0x2a6)][_0x250c54(0x351)])return;const _0x1288c4=this[_0x250c54(0x43d)]()[_0x250c54(0x42b)]();for(const _0x260826 of _0x1288c4){if(_0x260826===_0x16210c)continue;const _0x31314b=this['_traits'][_0x260826[_0x250c54(0x399)]()[_0x250c54(0x465)]()];if(this['isRetrainMode']()){const _0x57dd9b=this[_0x250c54(0x242)][_0x250c54(0x2ab)];if(_0x31314b===_0x57dd9b[_0x250c54(0x34b)][_0x260826][_0x250c54(0x399)]()['trim']())continue;}const _0x4f2178=DataManager[_0x250c54(0x34b)][_0x260826['toUpperCase']()[_0x250c54(0x465)]()][_0x31314b];_0x4f2178&&_0x4f2178[_0x250c54(0x481)]&&_0x4f2178[_0x250c54(0x481)][_0x250c54(0x293)]>0x0&&(_0xebcbad[_0x4f2178[_0x250c54(0x293)]]=_0xebcbad[_0x4f2178[_0x250c54(0x481)][_0x250c54(0x293)]]||0x0,_0xebcbad[_0x4f2178['ItemIdCost']]+=_0x4f2178[_0x250c54(0x481)][_0x250c54(0x2de)]||0x0);}},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x22d)]=function(_0x4ba330){const _0x54f829=_0x4b42a7;_0x4ba330=_0x4ba330||this[_0x54f829(0x250)]();for(const _0x5bfed7 in _0x4ba330){const _0xfc8270=$dataItems[Number(_0x5bfed7)],_0x729d30=_0x4ba330[_0x5bfed7];if($gameParty[_0x54f829(0x2ba)](_0xfc8270)<_0x729d30)return![];}return!![];},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x435)]=function(){const _0x1bdde1=_0x4b42a7,_0x7ea9fc=this[_0x1bdde1(0x250)]();for(const _0x212995 in _0x7ea9fc){const _0x57f56b=$dataItems[Number(_0x212995)],_0x25ce85=_0x7ea9fc[_0x212995];$gameParty[_0x1bdde1(0x1bc)](_0x57f56b,_0x25ce85);}},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3d7)]=function(){const _0x264f88=_0x4b42a7;if(this[_0x264f88(0x453)]&&this[_0x264f88(0x453)][_0x264f88(0x254)]&&VisuMZ[_0x264f88(0x252)][_0x264f88(0x412)][_0x264f88(0x1c9)]['EnableNameInput']){if(this[_0x264f88(0x453)][_0x264f88(0x284)]!==_0x264f88(0x26e))return TextManager['getInputMultiButtonStrings'](_0x264f88(0x2cc),_0x264f88(0x20f));}return Scene_MenuBase['prototype'][_0x264f88(0x3d7)][_0x264f88(0x1da)](this);},Scene_CreateCharacter['prototype'][_0x4b42a7(0x402)]=function(){const _0x38234f=_0x4b42a7;if(this['_nameInputWindow']&&this[_0x38234f(0x453)]['active']&&VisuMZ['CoreEngine'][_0x38234f(0x412)][_0x38234f(0x1c9)]['EnableNameInput'])return TextManager[_0x38234f(0x321)](_0x38234f(0x1e6));return Scene_MenuBase['prototype'][_0x38234f(0x402)][_0x38234f(0x1da)](this);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['buttonAssistKey4']=function(){const _0x34fb5c=_0x4b42a7;if(this[_0x34fb5c(0x453)]&&this[_0x34fb5c(0x453)][_0x34fb5c(0x254)]&&VisuMZ[_0x34fb5c(0x252)][_0x34fb5c(0x412)]['KeyboardInput'][_0x34fb5c(0x37e)]){if(this[_0x34fb5c(0x453)][_0x34fb5c(0x284)]==='keyboard')return TextManager[_0x34fb5c(0x2a4)](['ENTER']);}return Scene_MenuBase[_0x34fb5c(0x39c)][_0x34fb5c(0x33a)][_0x34fb5c(0x1da)](this);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2ee)]=function(){const _0x182c9c=_0x4b42a7;if(this[_0x182c9c(0x453)]&&this[_0x182c9c(0x453)]['active']&&VisuMZ[_0x182c9c(0x252)]['Settings']['KeyboardInput'][_0x182c9c(0x37e)]){if(this['_nameInputWindow'][_0x182c9c(0x284)]===_0x182c9c(0x26e))return TextManager['makeInputButtonString'](['BKSP']);}return Scene_MenuBase[_0x182c9c(0x39c)]['buttonAssistKey5'][_0x182c9c(0x1da)](this);},Scene_CreateCharacter['prototype'][_0x4b42a7(0x423)]=function(){const _0x1c52fa=_0x4b42a7;if(this['_nameInputWindow']&&this[_0x1c52fa(0x453)][_0x1c52fa(0x254)]&&VisuMZ['CoreEngine'][_0x1c52fa(0x412)][_0x1c52fa(0x1c9)][_0x1c52fa(0x37e)]){if(this[_0x1c52fa(0x453)]['_mode']!==_0x1c52fa(0x26e)){const _0x268d06=VisuMZ[_0x1c52fa(0x252)]['Settings'][_0x1c52fa(0x1c9)];return _0x268d06[_0x1c52fa(0x43e)]||_0x1c52fa(0x46a);}}return Scene_MenuBase[_0x1c52fa(0x39c)]['buttonAssistText1'][_0x1c52fa(0x1da)](this);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x464)]=function(){const _0x617f9f=_0x4b42a7;if(this[_0x617f9f(0x453)]&&this[_0x617f9f(0x453)][_0x617f9f(0x254)]&&VisuMZ['CoreEngine'][_0x617f9f(0x412)][_0x617f9f(0x1c9)][_0x617f9f(0x37e)]){const _0x5dabf3=VisuMZ[_0x617f9f(0x252)]['Settings']['KeyboardInput'];return this[_0x617f9f(0x453)][_0x617f9f(0x284)]===_0x617f9f(0x26e)?_0x5dabf3[_0x617f9f(0x36d)]||_0x617f9f(0x36d):_0x5dabf3[_0x617f9f(0x42e)]||_0x617f9f(0x42e);}return Scene_MenuBase[_0x617f9f(0x39c)][_0x617f9f(0x464)][_0x617f9f(0x1da)](this);},Scene_CreateCharacter[_0x4b42a7(0x39c)]['buttonAssistText4']=function(){const _0x567712=_0x4b42a7;if(this['_nameInputWindow']&&this['_nameInputWindow']['active']&&VisuMZ[_0x567712(0x252)]['Settings']['KeyboardInput'][_0x567712(0x37e)]){const _0x49ca69=VisuMZ[_0x567712(0x252)]['Settings'][_0x567712(0x1c9)];if(this['_nameInputWindow'][_0x567712(0x284)]===_0x567712(0x26e))return _0x49ca69[_0x567712(0x322)]||_0x567712(0x322);}return Scene_MenuBase['prototype'][_0x567712(0x460)][_0x567712(0x1da)](this);},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x28d)]=function(){const _0x25dce2=_0x4b42a7;if(this[_0x25dce2(0x20a)]===this[_0x25dce2(0x261)])return this[_0x25dce2(0x242)]&&this[_0x25dce2(0x242)][_0x25dce2(0x391)]?TextManager[_0x25dce2(0x1f4)]['buttonAssist'][_0x25dce2(0x3b2)]:'';return Scene_MenuBase[_0x25dce2(0x39c)][_0x25dce2(0x28d)]['call'](this);},Scene_CreateCharacter['prototype'][_0x4b42a7(0x37a)]=function(){const _0x5a9cd7=_0x4b42a7;Scene_MenuBase[_0x5a9cd7(0x39c)][_0x5a9cd7(0x37a)]['call'](this),this[_0x5a9cd7(0x39f)](this[_0x5a9cd7(0x2fb)]()),this[_0x5a9cd7(0x411)]();},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2fb)]=function(){const _0x523d4c=_0x4b42a7;return VisuMZ[_0x523d4c(0x1bd)]['Settings'][_0x523d4c(0x287)]['SnapshotOpacity'];},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x411)]=function(){const _0xf5f291=_0x4b42a7,_0x1bc92f=VisuMZ[_0xf5f291(0x1bd)][_0xf5f291(0x412)][_0xf5f291(0x287)];_0x1bc92f&&(_0x1bc92f[_0xf5f291(0x21c)]!==''||_0x1bc92f['BgFilename2']!=='')&&(this[_0xf5f291(0x41c)]=new Sprite(ImageManager['loadTitle1'](_0x1bc92f[_0xf5f291(0x21c)])),this[_0xf5f291(0x22b)]=new Sprite(ImageManager['loadTitle2'](_0x1bc92f[_0xf5f291(0x24e)])),this[_0xf5f291(0x283)](this[_0xf5f291(0x41c)]),this[_0xf5f291(0x283)](this[_0xf5f291(0x22b)]),this[_0xf5f291(0x41c)][_0xf5f291(0x363)][_0xf5f291(0x2d4)](this[_0xf5f291(0x222)][_0xf5f291(0x1b2)](this,this[_0xf5f291(0x41c)])),this[_0xf5f291(0x22b)]['bitmap'][_0xf5f291(0x2d4)](this[_0xf5f291(0x222)][_0xf5f291(0x1b2)](this,this[_0xf5f291(0x22b)])));},Scene_CreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x222)]=function(_0x2c7ff1){const _0x25406b=_0x4b42a7;this[_0x25406b(0x1ff)](_0x2c7ff1),this['centerSprite'](_0x2c7ff1);},VisuMZ[_0x4b42a7(0x1bd)]['Window_ChoiceList_parseChoiceText']=Window_ChoiceList[_0x4b42a7(0x39c)][_0x4b42a7(0x361)],Window_ChoiceList[_0x4b42a7(0x39c)][_0x4b42a7(0x361)]=function(_0x4085ed){const _0x27d202=_0x4b42a7;let _0x5e0704=VisuMZ[_0x27d202(0x1bd)]['Window_ChoiceList_parseChoiceText'][_0x27d202(0x1da)](this,_0x4085ed);const _0x5e4b94=VisuMZ['CharaCreationSys'][_0x27d202(0x227)];return _0x5e0704=_0x5e0704['replace'](_0x5e4b94[_0x27d202(0x356)],''),_0x5e0704=_0x5e0704[_0x27d202(0x246)](_0x5e4b94[_0x27d202(0x390)],''),_0x5e0704=_0x5e0704['replace'](_0x5e4b94['EnableCanRetrain'],''),_0x5e0704=_0x5e0704[_0x27d202(0x246)](_0x5e4b94[_0x27d202(0x1ae)],''),_0x5e0704;},VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x1e5)]=Window_ChoiceList[_0x4b42a7(0x39c)]['isChoiceEnabled'],Window_ChoiceList[_0x4b42a7(0x39c)][_0x4b42a7(0x374)]=function(_0x4c03a9){const _0x18fba8=_0x4b42a7,_0x372e31=VisuMZ[_0x18fba8(0x1bd)][_0x18fba8(0x227)];if(_0x4c03a9[_0x18fba8(0x241)](_0x372e31[_0x18fba8(0x356)])){if($gameParty[_0x18fba8(0x3b6)]()<=0x0)return![];}if(_0x4c03a9['match'](_0x372e31[_0x18fba8(0x390)])){if($gameParty['createdDismissableMembers']()[_0x18fba8(0x47e)]<=0x0)return![];}if(_0x4c03a9[_0x18fba8(0x241)](_0x372e31[_0x18fba8(0x2fc)])){if($gameParty[_0x18fba8(0x44b)]()[_0x18fba8(0x47e)]<=0x0)return![];}if(_0x4c03a9[_0x18fba8(0x241)](_0x372e31['EnableHaveCreated'])){if($gameParty[_0x18fba8(0x3e8)]()<=0x0)return![];}return VisuMZ[_0x18fba8(0x1bd)][_0x18fba8(0x1e5)]['call'](this,_0x4c03a9);};function Window_CharaCreateInstruction(){const _0x4599c9=_0x4b42a7;this[_0x4599c9(0x1dd)](...arguments);}Window_CharaCreateInstruction[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Base['prototype']),Window_CharaCreateInstruction[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_CharaCreateInstruction,Window_CharaCreateInstruction[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x480)]??0x0,'align':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x290)]??_0x4b42a7(0x3a5)},Window_CharaCreateInstruction[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x1ca39e){const _0x50c8f6=_0x4b42a7;Window_Base[_0x50c8f6(0x39c)][_0x50c8f6(0x1dd)][_0x50c8f6(0x1da)](this,_0x1ca39e),this[_0x50c8f6(0x392)]='';},Window_CharaCreateInstruction[_0x4b42a7(0x39c)][_0x4b42a7(0x3cc)]=function(){return![];},Window_CharaCreateInstruction['prototype'][_0x4b42a7(0x327)]=function(_0x52749e){const _0x5b4e80=_0x4b42a7;this[_0x5b4e80(0x392)]!==_0x52749e&&(this[_0x5b4e80(0x392)]=_0x52749e,this['refresh']());},Window_CharaCreateInstruction[_0x4b42a7(0x39c)][_0x4b42a7(0x256)]=function(){const _0x14c86f=_0x4b42a7;this[_0x14c86f(0x327)]('');},Window_CharaCreateInstruction[_0x4b42a7(0x39c)]['refresh']=function(){const _0x205cdc=_0x4b42a7;this[_0x205cdc(0x3c9)][_0x205cdc(0x256)]();const _0x24395d=this[_0x205cdc(0x2d3)](this[_0x205cdc(0x392)]),_0x5b2bb1=_0x24395d[_0x205cdc(0x2c0)],_0x16f3eb=this[_0x205cdc(0x380)]();let _0x367e30=0x0;if(_0x16f3eb===_0x205cdc(0x3a5))_0x367e30=Math[_0x205cdc(0x3ca)]((this['innerWidth']-_0x5b2bb1)/0x2);else _0x16f3eb===_0x205cdc(0x235)?_0x367e30=Math[_0x205cdc(0x3ca)](this[_0x205cdc(0x3fa)]-_0x5b2bb1-this[_0x205cdc(0x41a)]()):_0x367e30=this[_0x205cdc(0x41a)]();this[_0x205cdc(0x247)](this['_text'],_0x367e30,0x0,_0x5b2bb1);},Window_CharaCreateInstruction[_0x4b42a7(0x39c)][_0x4b42a7(0x380)]=function(){const _0x47be47=_0x4b42a7;return Window_CharaCreateInstruction[_0x47be47(0x21f)][_0x47be47(0x28a)];};function Window_CharaCreateGold(){const _0x5da1c7=_0x4b42a7;this[_0x5da1c7(0x1dd)](...arguments);}Window_CharaCreateGold['prototype']=Object[_0x4b42a7(0x426)](Window_Gold[_0x4b42a7(0x39c)]),Window_CharaCreateGold[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_CharaCreateGold,Window_CharaCreateGold[_0x4b42a7(0x21f)]={'bgType':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x354)]??0x0},Window_CharaCreateGold[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x243074){const _0x444575=_0x4b42a7;Window_Gold[_0x444575(0x39c)][_0x444575(0x1dd)][_0x444575(0x1da)](this,_0x243074);},Window_CharaCreateGold[_0x4b42a7(0x39c)][_0x4b42a7(0x1a9)]=function(){return this['lineHeight']();};function Window_CharaCreateGraphicsPreview(){this['initialize'](...arguments);}Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Base[_0x4b42a7(0x39c)]),Window_CharaCreateGraphicsPreview['prototype'][_0x4b42a7(0x2a8)]=Window_CharaCreateGraphicsPreview,Window_CharaCreateGraphicsPreview['SETTINGS']={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x1bf)]??0x0,'padding':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x3a0)]??0x4,'pictureAnchorX':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x408)]['PreviewWindow_Picture_AnchorX']??0.5,'pictureAnchorY':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x3ba)]??0x0,'pictureScaleUp':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x26a)]??!![],'backgroundAnchorX':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x3f1)]??0.5,'backgroundAnchorY':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x41d)]??0x1,'backgroundScaleUp':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['PreviewWindow_Background_ScaleUp']??!![],'retrainParallax':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['PreviewWindow_Background_RetrainBg']??_0x4b42a7(0x2d1),'autoWordwrap':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['PreviewWindow_Draw_AutoWordWrap']??!![],'drawDarkRect':VisuMZ['CharaCreationSys']['Settings']['Window'][_0x4b42a7(0x2f5)]??!![],'drawGoldCost':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x3cd)]??!![]},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x309a92){const _0x747414=_0x4b42a7;Window_Base[_0x747414(0x39c)][_0x747414(0x1dd)]['call'](this,_0x309a92),this[_0x747414(0x343)](),this[_0x747414(0x3aa)]=0x0;},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x2e1)]=function(){const _0x6f2883=_0x4b42a7;this['padding']=Window_CharaCreateGraphicsPreview[_0x6f2883(0x21f)][_0x6f2883(0x208)];},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x343)]=function(){const _0x1012f4=_0x4b42a7,_0x4cb36a=Window_CharaCreateGraphicsPreview[_0x1012f4(0x21f)];this[_0x1012f4(0x2f8)]=new Sprite(),this[_0x1012f4(0x2f8)]['anchor']['x']=_0x4cb36a['pictureAnchorX'],this[_0x1012f4(0x2f8)][_0x1012f4(0x1c0)]['y']=_0x4cb36a[_0x1012f4(0x396)],this[_0x1012f4(0x1d5)](this[_0x1012f4(0x2f8)]),this[_0x1012f4(0x35e)]['addChildAt'](this['_pictureSprite'],0x0),this[_0x1012f4(0x262)]=new Sprite(),this[_0x1012f4(0x262)][_0x1012f4(0x1c0)]['x']=_0x4cb36a['backgroundAnchorX'],this[_0x1012f4(0x262)][_0x1012f4(0x1c0)]['y']=_0x4cb36a[_0x1012f4(0x43b)],this['addInnerChild'](this[_0x1012f4(0x262)]),this[_0x1012f4(0x35e)][_0x1012f4(0x462)](this[_0x1012f4(0x262)],0x0);},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x393)]=function(_0x4f7a23){const _0x47b9f9=_0x4b42a7;this[_0x47b9f9(0x269)]=_0x4f7a23,this[_0x47b9f9(0x204)](),this[_0x47b9f9(0x206)]();},Window_CharaCreateGraphicsPreview['prototype'][_0x4b42a7(0x1c6)]=function(){const _0x1ca3a8=_0x4b42a7;if(!Imported['VisuMZ_1_MessageCore'])return;return Window_CharaCreateGraphicsPreview[_0x1ca3a8(0x21f)][_0x1ca3a8(0x1c6)];},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)]['setupRetrain']=function(_0x358a72){const _0x383d28=_0x4b42a7,_0x530886=_0x358a72[_0x383d28(0x2ab)],_0x491d3d={'PreviewPicture':[_0x530886[_0x383d28(0x1e9)](),_0x530886[_0x383d28(0x3ee)]()],'PreviewParallax':Window_CharaCreateGraphicsPreview[_0x383d28(0x21f)][_0x383d28(0x2a7)]};if(_0x530886[_0x383d28(0x291)])_0x491d3d[_0x383d28(0x444)]=_0x530886['_menuImage'];else _0x530886[_0x383d28(0x310)]&&(_0x491d3d['PreviewPicture']=_0x530886['_battlePortrait']);this[_0x383d28(0x393)](_0x491d3d);},Window_CharaCreateGraphicsPreview['prototype'][_0x4b42a7(0x204)]=function(){const _0x4f769a=_0x4b42a7;this[_0x4f769a(0x3c9)][_0x4f769a(0x256)](),this[_0x4f769a(0x397)]();let _0xebdfd2=this['_entry'][_0x4f769a(0x27c)]||'';if(!_0xebdfd2)return;if(this[_0x4f769a(0x1c6)]())_0xebdfd2='<WordWrap>'+_0xebdfd2;this[_0x4f769a(0x208)]=$gameSystem[_0x4f769a(0x359)]();const _0x202998=this[_0x4f769a(0x2d3)](_0xebdfd2);this[_0x4f769a(0x2e1)]();const _0x41a849=_0x202998[_0x4f769a(0x3da)],_0x37282c=Math[_0x4f769a(0x2e3)](0x0,$gameSystem[_0x4f769a(0x359)]()-this[_0x4f769a(0x208)]),_0x5d9c4d=this[_0x4f769a(0x42f)]-_0x41a849;if(Window_CharaCreateGraphicsPreview[_0x4f769a(0x21f)]['drawDarkRect']){const _0x52b342=ColorManager[_0x4f769a(0x44a)]();this['contents']['fillRect'](0x0,_0x5d9c4d,this[_0x4f769a(0x3fa)],_0x41a849,_0x52b342);}this[_0x4f769a(0x247)](_0xebdfd2,_0x37282c,_0x5d9c4d);},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x397)]=function(){const _0x1f9d79=_0x4b42a7,_0x358b41=SceneManager[_0x1f9d79(0x1d4)][_0x1f9d79(0x420)]();if(_0x358b41<=0x0)return;if(!Window_CharaCreateGraphicsPreview[_0x1f9d79(0x21f)][_0x1f9d79(0x397)])return;if(Window_CharaCreateGraphicsPreview[_0x1f9d79(0x21f)]['drawDarkRect']){const _0x48344f=ColorManager['dimColor1']();this[_0x1f9d79(0x3c9)][_0x1f9d79(0x209)](0x0,0x0,this[_0x1f9d79(0x3fa)],this[_0x1f9d79(0x482)](),_0x48344f);}const _0x1fcc12=TextManager['CHARA_CREATION_SYS'][_0x1f9d79(0x21e)][_0x1f9d79(0x2a3)],_0x2fb31f=this[_0x1f9d79(0x41a)]()*0x2;this[_0x1f9d79(0x247)](_0x1fcc12,_0x2fb31f,0x0),this[_0x1f9d79(0x436)](_0x358b41,TextManager['currencyUnit'],0x0,0x0,this[_0x1f9d79(0x3fa)]-_0x2fb31f);},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x297)]=function(){return!![];},Window_CharaCreateGraphicsPreview['prototype'][_0x4b42a7(0x206)]=function(){const _0x62f25=_0x4b42a7;if(this[_0x62f25(0x269)])this[_0x62f25(0x1b4)](this[_0x62f25(0x269)][_0x62f25(0x444)]||''),this[_0x62f25(0x20c)](this[_0x62f25(0x269)][_0x62f25(0x434)]||'');else{this['changePicture'](''),this[_0x62f25(0x20c)]('');return;}},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x1b4)]=function(_0x4883d2){const _0x10bb1f=_0x4b42a7;if(!_0x4883d2){this[_0x10bb1f(0x2f8)][_0x10bb1f(0x363)]=new Bitmap(0x1,0x1);return;}if(Array[_0x10bb1f(0x259)](_0x4883d2)){const _0x589fc2=ImageManager[_0x10bb1f(0x267)](_0x4883d2[0x0]),_0x34b491=_0x4883d2[0x1];_0x589fc2[_0x10bb1f(0x2d4)](this['processFaceChange']['bind'](this,_0x589fc2,_0x34b491,this[_0x10bb1f(0x269)]));}else{const _0x1d6bbb=ImageManager[_0x10bb1f(0x1f7)](_0x4883d2);_0x1d6bbb['addLoadListener'](this[_0x10bb1f(0x3b0)][_0x10bb1f(0x1b2)](this,_0x1d6bbb,this[_0x10bb1f(0x269)]));}},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x20c)]=function(_0x3630d8){const _0x44be16=_0x4b42a7;if(!_0x3630d8){this['_parallaxSprite'][_0x44be16(0x363)]=new Bitmap(0x1,0x1);return;}const _0x33afc1=ImageManager[_0x44be16(0x201)](_0x3630d8);_0x33afc1['addLoadListener'](this[_0x44be16(0x3b8)]['bind'](this,_0x33afc1,this[_0x44be16(0x269)]));},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)]['processFaceChange']=function(_0x4bcc2c,_0x4c9cdc,_0x391844){const _0xcf70e0=_0x4b42a7;if(_0x391844!==this[_0xcf70e0(0x269)])return;const _0x40f9a9=this[_0xcf70e0(0x2f8)];_0x40f9a9[_0xcf70e0(0x363)]=new Bitmap(ImageManager[_0xcf70e0(0x38a)],ImageManager[_0xcf70e0(0x2fa)]);const _0x38fc2e=ImageManager[_0xcf70e0(0x38a)],_0x102f44=ImageManager[_0xcf70e0(0x2fa)],_0x1e673c=Math[_0xcf70e0(0x3ca)](_0x4c9cdc%0x4*ImageManager[_0xcf70e0(0x38a)]),_0x2f3f78=Math[_0xcf70e0(0x3ca)](Math[_0xcf70e0(0x3ca)](_0x4c9cdc/0x4)*ImageManager[_0xcf70e0(0x2fa)]);_0x40f9a9['bitmap'][_0xcf70e0(0x47a)](_0x4bcc2c,_0x1e673c,_0x2f3f78,_0x38fc2e,_0x102f44,0x0,0x0),_0x40f9a9['x']=Math[_0xcf70e0(0x33c)](this[_0xcf70e0(0x3fa)]*_0x40f9a9[_0xcf70e0(0x1c0)]['x']),_0x40f9a9['y']=Math[_0xcf70e0(0x33c)](this[_0xcf70e0(0x42f)]*_0x40f9a9[_0xcf70e0(0x1c0)]['y']);if(Window_CharaCreateGraphicsPreview[_0xcf70e0(0x21f)][_0xcf70e0(0x30a)]){const _0x20d1e2=this[_0xcf70e0(0x3fa)]/_0x40f9a9[_0xcf70e0(0x363)][_0xcf70e0(0x2c0)],_0x900e0f=this[_0xcf70e0(0x42f)]/_0x40f9a9[_0xcf70e0(0x363)]['height'],_0x3526c0=Math[_0xcf70e0(0x2e3)](_0x20d1e2,_0x900e0f,0x1);_0x40f9a9[_0xcf70e0(0x34d)]['x']=_0x3526c0,_0x40f9a9[_0xcf70e0(0x34d)]['y']=_0x3526c0;}},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)]['processPictureChange']=function(_0x26c985,_0x34291d){const _0x59bc24=_0x4b42a7;if(_0x34291d!==this[_0x59bc24(0x269)])return;const _0x52cd88=this[_0x59bc24(0x2f8)];_0x52cd88['bitmap']=_0x26c985,_0x52cd88['x']=Math[_0x59bc24(0x33c)](this[_0x59bc24(0x3fa)]*_0x52cd88['anchor']['x']),_0x52cd88['y']=Math['round'](this['innerHeight']*_0x52cd88['anchor']['y']);if(Window_CharaCreateGraphicsPreview[_0x59bc24(0x21f)][_0x59bc24(0x30a)]){const _0x22abf0=this[_0x59bc24(0x3fa)]/_0x26c985[_0x59bc24(0x2c0)],_0x9243f7=this['innerHeight']/_0x26c985[_0x59bc24(0x3da)],_0x206276=Math[_0x59bc24(0x2e3)](_0x22abf0,_0x9243f7,0x1);_0x52cd88[_0x59bc24(0x34d)]['x']=_0x206276,_0x52cd88[_0x59bc24(0x34d)]['y']=_0x206276;}},Window_CharaCreateGraphicsPreview[_0x4b42a7(0x39c)][_0x4b42a7(0x3b8)]=function(_0x1eb0ac,_0x311723){const _0x4e0762=_0x4b42a7;if(_0x311723!==this['_entry'])return;const _0x273171=this['_parallaxSprite'];_0x273171['bitmap']=_0x1eb0ac,_0x273171['x']=Math[_0x4e0762(0x33c)](this[_0x4e0762(0x3fa)]*_0x273171[_0x4e0762(0x1c0)]['x']),_0x273171['y']=Math[_0x4e0762(0x33c)](this[_0x4e0762(0x42f)]*_0x273171['anchor']['y']);if(Window_CharaCreateGraphicsPreview[_0x4e0762(0x21f)]['backgroundScaleUp']){const _0x3c7cb9=this[_0x4e0762(0x3fa)]/_0x1eb0ac[_0x4e0762(0x2c0)],_0x6c25db=this[_0x4e0762(0x42f)]/_0x1eb0ac[_0x4e0762(0x3da)],_0x22ed0c=Math[_0x4e0762(0x2e3)](_0x3c7cb9,_0x6c25db,0x1);_0x273171[_0x4e0762(0x34d)]['x']=_0x22ed0c,_0x273171['scale']['y']=_0x22ed0c;}};function _0x2e92(){const _0x29eed7=['GraphicSetsWindow_OtherClasses','traitSetsEnabled','createBattleVoiceEntry','setText','nameCommandWindowRect','prepareForNewCharacter','finalizeApplyName','registerCommand','DisplayIcon','RetrainSwitchID','addReviseCommand','push','profile','setBattlerImage','toLowerCase','Randomize','SnapshotOpacity','version','isAcceptTraitsEnabled','GraphicSetsWindow_RectJS','otherClassesFirst','changeClass','buttonAssistKey4','finalizeExitScene','round','makeDeepCopy','18342TcwjEC','pitch','_traitTypesWindow','NameEditWindow_MaxLength','getPreparedTrait','createChildSprites','VisuMZ_1_MessageCore','addManualEntryCommand','goldWindowRect','changeBattleVoicePan','untitled','1826118WgLMYf','GraphicSetsWindow_OtherFirst','_traitSets','Scene_Map_needsFadeIn','scale','CharacterIndex','format','drawing','traits','accept','_stepWindows','GoldWindow_BgType','characterIndex','EnableCanCreate','naming','updateInstructionText','windowPadding','ConvertParams','JSON','isTraitSetEnabled','setValue','_clientArea','playDismissCreatedCharacter','addGraphicsSetEntry','parseChoiceText','nameWidthPadding','bitmap','ShowIcons','Scene_Boot_onDatabaseLoaded','isCommandEnabled','VoiceSet','targetActor','InstructionWindow_Voices','\x5c}%2\x5c{%1','BattleVoiceWindow_RectJS','setTraitSet','Keyboard','resetDescriptionFontSize','loadSystem','fontSizeRatio','StatusMenu_Biography_AutoWordWrap','canBeRetrainSelected','CharaCreateDisplayName','isChoiceEnabled','Error!\x20Impossible\x20step!\x20%1','_name','FaceGraphic','prepareForRetraining','icon','createBackground','joinSwitchID','value','itemDrawCost1','EnableNameInput','TraitTypesWindow_BgType','itemTextAlign','setCharacterImage','onRetrainStart','_stepName','NameSets','InstructionWindow_Confirm','isRetrainMode','SelectActorWindow_RectJS','GoldWindow_RectJS','closeAllWindows','faceWidth','ClassList','drawName','playCancel','_equips','createTraitTypesWindow','EnableCanDismiss','cancelExit','_text','setEntryData','Accept\x20Name','sideBuffer','pictureAnchorY','drawGoldCost','actorId','toUpperCase','changeBattleVoicePitch','more','prototype','dismiss','Label','setBackgroundOpacity','PreviewWindow_Padding','preserveClassLevel','smoothSelect','name','_confirmDataWindow','center','finalizeDeductGold','isValidStep','charWidth','2805430QKRZeR','openness','steps','VisualGoldDisplay','_graphicsData','RetrainName','currentTextColor','processPictureChange','ConfirmCommandWindow_ConfirmText','exit','addCommand','isPreviousScene','finalizeDeductCosts','availableEmptyCreatableCharacterSlots','CharacterGraphic','processParallaxChange','STRUCT','PreviewWindow_Picture_AnchorY','addConfirmCommand','SvBattler','calcWindowHeight','RetrainClass','Please\x20make\x20an\x20option\x20WITHOUT\x20a\x20Required\x20Switch,\x20Gold\x20Cost,\x20and\x20Item\x20Cost\x20Type!','loadTitle1','_appearanceWindow','processOk','addOtherClassGraphics','VisuMZ_3_BattleVoices','156JIjlHe','createGoldWindow','onActorOk','_skills','contents','floor','ClassID','isAutoColorAffected','PreviewWindow_Draw_GoldCost','createNameInputWindow','voiceIcon','traitTypesWindowRect','confirmDataWindowRect','addAcceptNameCommand','ButtonAssist_ClassText','NameCommandWindow_ManualIcon','ARRAYNUM','fontSize','buttonAssistKey1','finalizeApplyVoiceSet','changeBattleVoiceSet','height','iconIndex','_graphicSetsWindow','VisuMZ_1_BattleCore','itemRect','selectLast','PreserveLevel','isSceneBattle','none','ClassWindow_TextColorID','acceptIcon','\x5cN[%1]\x20is\x20a\x20hired\x20recruit\x20that\x20joined\x20\x5cN[1]\x27s\x20party.','AppearanceWindow_BgType','index','totalCreatedCharacters','battleVoiceWindowRect','learnings','processDrawIcon','createNoVoiceCommand','STR','faceIndex','manualIcon','Confirm\x20character\x20details!','PreviewWindow_Background_AnchorX','setBackgroundType','isEnabled','VisuMZ_0_CoreEngine','currentTraitSetTextColor','RetrainTraits','canPickMoreAppearances','character','classSetNameFmt','innerWidth','createdMembers','ARRAYEVAL','%2/%1','Color','TraitTypesWindow_RectJS','isEntryValid','stringify','buttonAssistKey3','setupRetrain','onTraitSetsOk','includes','VariableSetTotalEmptyCharacterSlots','dismissSwitchID','Window','finalizeApplyTraits','_traitSetsWindow','maxItems','itemCostQuantityFmt','201865LVqpmd','mainCommandWidth','_resetFontSize','traitSetsWindowRect','createCustomBackgroundImages','Settings','ResetProfile','GraphicSets','addClassEntry','actorGroup','NameCommandWindow_AcceptIcon','makeTraitTypeExt','processBack','itemPadding','changePaintOpacity','_backSprite1','PreviewWindow_Background_AnchorY','ConfirmDataWindow_RectJS','ConfirmDataWindow_BgType','totalGoldCost','Accept\x20Voice','playRetrainCreatedCharacter','buttonAssistText1','SwitchReq','ClassIcon','create','InstructionWindow_Dismiss','drawItem','mainFontSize','selectCurrentClassID','getTraitSetKeys','_goldWindow','onDatabaseLoaded','Manual','innerHeight','nameEditWindowRect','canBeDismissSelected','isTraitSetIncluded','TraitSetsWindow_BgType','PreviewParallax','finalizeDeductItems','drawCurrencyValue','onAppearanceMore','slowFadeSpeed','nameCurrentWindowRect','open','backgroundAnchorY','CharaCreatePreview','actor','PageChange','100hWjjpa','\x5cC[16]%1','onNameManualEntry','StatusMenu','onNameInputOk','PreviewPicture','includesGraphicsSet','_filterType','_battleVoiceWindow','changeBattleVoiceVolume','setHelpWindow','dimColor1','createdRetrainableMembers','ClassWindow_DrawCost1','manual','InstructionWindow_Appearance','members','playShop','dismiss_volume','onClassOk','_nameInputWindow','retrain_name','_traitType','drawActorFace','addMoreCommand','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','ConfirmCommandWindow_PlayShopSound','finalizeCustomSettings','clearBattleVoice','onNameInputCancel','NameCommandWindow_AcceptText','addGraphicEntry','find','buttonAssistText4','More...','addChildAt','appearanceWindowRect','buttonAssistText3','trim','updateHelp','drawFadedItemBackground','_type','6ZSJOAt','Page','skillId','_helpWindow','\x5cC[%1]%2\x5cC[0]','pan','setup','ceil','addGlobalGraphics','graphic','boxWidth','noCostOption','Traits','return\x200','GoldCost','_nameEditWindow','ext','blt','VisuMZ_1_MainMenuCore','_nameCurrentWindow','graphicSetsWindowRect','length','retrainSwitchID','InstructionWindow_BgType','createCostData','lineHeight','initSkills','parameters','NameCommandWindow_BgType','drawText','itemHeight','onBattleVoiceOk','setBiography','Sound','Accept\x20Traits','EnableHaveCreated','prepareTraits','DefaultName','commandName','bind','popScene','changePicture','createTraitSetsWindow','_currentVoice','addAcceptTraitsCommand','includesClass','_traits','setTraitType','playBattleVoice','loseItem','CharaCreationSys','nameInputWindowRect','PreviewWindow_BgType','anchor','Please\x20select\x20a\x20class!','playOkSound','Gold','createInstructionWindow','gotoPrevStep','autoWordwrap','playSe','%1\x20Set','KeyboardInput','registerVarID','GetRandomName','ElementStatusCore','drawCost','defaultIcon','commandSymbol','onActorDismiss','bgType','class','checkRetrainClassAppearanceSet','_scene','addInnerChild','resetTextColor','InstructionWindow_RectJS','SceneOpenCharaRetrainScene','checkRetrainGlobalAppearanceSet','call','createNameCommandWindow','findIndex','initialize','createNameCurrentWindow','dismiss_pan','retrain_pitch','selectCurrentAppearance','createConfirmCommandWindow','_characterCreated','currentClass','Window_ChoiceList_isChoiceEnabled','tab','select','setGraphicsData','faceName','totalGoldCostFromTraits','createBattleVoiceWindow','currencyUnit','RetrainChange','PreviewWindow_CostText','openCurrentStepWindows','cancelIcon','itemCostTypeFmt','BattlePortrait','addRandomNamePools','CHARA_CREATION_SYS','clearEquipments','appearance','loadPicture','note','setInitialStep','ConfirmDataWindow_NameText','inBattle','start','NameCommandWindow_RectJS','showListIcons','scaleSprite','appearances','loadParallax','volume','pickOtherClassApperances','refresh','Name','updateImages','level','padding','fillRect','_firstStep','InstructionWindow_Traits','changeParallax','InstructionWindow_Class','AppearanceWindow_MoreCommand','pagedown','ShowGoldWindow','addTotalItemCostsFromClasses','ConfirmCommandWindow_RectJS','GraphicSetsWindow_BgType','TraitSetsWindow_RectJS','gotoNextStep','setFilterType','graphicsPreviewWindowRect','addNamePoolCommand','ARRAYFUNC','_defaultName','cancel','BgFilename1','Graphics','preview','SETTINGS','createActorWindow','InstructionWindow_Graphics','adjustSprite','instructionWindowRect','standardIconHeight','buffer','command','RegExp','playShopSound','setProfile','finalizeApplyAppearance','_backSprite2','AppearanceWindow_RectJS','meetsTotalItemCosts','ResetBiography','mainAreaHeight','createGraphicSetsWindow','setBattlePortrait','meetsTotalGoldCosts','onGraphicSetsCancel','map','right','findFirstAvailableCharacterCreationActorID','BattleVoiceWindow_TextColorID','SideBuffer','drawItemCost','ActorLevel','graphicSets','_classListWindow','ConfirmCommandWindow_CancelText','ARRAYJSON','changeLevel','VoiceSets','match','_settings','addWindow','processNextStep','addTotalItemCostsFromTraits','replace','drawTextEx','itemLineRect','ClassWindow_BgType','boxHeight','drawIcon','setHandler','GraphicsPreviewWindow_RectJS','BgFilename2','createBattleVoiceList','totalItemCosts','ERROR!\x20ERROR!\x20ERROR!\x20\x0a\x0a','CoreEngine','gradientFillRect','active','GoldIcon','clear','setTopRow','prepareNextScene','isArray','needsFadeIn','NameEditWindow_NameWidthPadding','<EMPTY>','filter','EnableTraitsStep','setEditWindow','setAppearanceSet','_step','_parallaxSprite','TraitSetsWindow_DrawCost1','_instructionWindow','MenuPortrait','isTraitTypeIncluded','loadFace','activate','_entry','PreviewWindow_Picture_ScaleUp','Display','process_VisuMZ_CharaCreationSys','SceneOpenCharaDismissScene','keyboard','bio','-----','maxCols','updateInstructionTextKey','\x5cC[%1]%2','ARRAYSTR','DisplayText','drawTraitSetName','_createdCharacter','_confirmCommandWindow','createAcceptVoiceCommand','createAppearanceWindow','_index','Description','createdDismissableMembers','prepare','totalGoldCostFromClass','helpAreaHeight','InstructionWindow_Name','_level','addChild','_mode','iconWidth','mainAreaTop','BgSettings','drawClass','_actorWindow','align','CharaCreateSelect','classListWindowRect','buttonAssistText5','NameInputWindow_BgType','confirmCommandWindowRect','InstructionWindow_TextAlign','_menuImage','randomName','ItemIdCost','_retrainMode','process_VisuMZ_CharaCreationSys_Traits','VariableSetCreatedCharacterCount','visualGoldDisplayPadding','_nameCommandWindow','addTraitTypeCommands','679tCJNof','Select\x20an\x20appearance!','VariableID','_tempActor','setNewBattleVoice','isNamePoolIncluded','TraitSetsWindow_Thickness','instructions','isTraitTypeEnabled','cost','makeInputButtonString','Please\x20change\x20this\x20value\x20with\x20a\x20trait\x20set\x20that\x20exists.','retrain','retrainParallax','constructor','iconHeight','_list','tempActor','resetFontSettings','currentSymbol','BattleVoiceWindow_Enable','_editWindow','voice','totalEmptyCreatableCharacterSlots','NUM','makeCommandList','CannotSelectRetrain','JoinSwitchID','lineThickness','AppearanceWindow_MoreIcon','finalizeApplyProfile','StatusMenu_Biography','numItems','showGoldWindow','FailSwitchID','playCreateCharacter','gold','42528VzakdT','width','graphics','_retrainSettings','createGraphicsPreviewWindow','actorWindowRect','Changeable','VisuMZ_1_ElementStatusCore','Visible','Confirm','Default','characterName','goto','pageup','Select\x20character\x20traits!','drawTraitCost','traitsStep','\x5cI[%1]','Mountains1','drawClassCost','textSizeEx','addLoadListener','finalizeApplyBiography','description','deactivate','retrain_volume','Select\x20a\x20character\x20to\x20dismiss\x20from\x20the\x20party.','\x5cI[%1]%2','NameInputWindow_RectJS','_graphicsPreviewWindow','dismiss_name','ItemCountCost','HasAnyMatchingGraphics','currentClassTextColor','updatePadding','drawEntry','max','RetrainAppearance','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','onTraitSetsCancel','NameCurrentWindow_RectJS','GraphicSetsWindow_ClassNameFmt','VisuMZ_2_CharaCreationSys\x20is\x20using\x20a\x20non-existent\x20trait\x20set\x20for\x20%1\x20trait\x20type\x27s\x20\x22Default\x22\x20parameter.\x0a','NameEditWindow_RectJS','BattleVoices','processPrevStep','startFadeOut','buttonAssistKey5','removeActor','Options','onActorRetrain','StatusMenu_Profile','ConfirmDataWindow_CostText','onNameRandom','PreviewWindow_Draw_DarkRect','_classID','voiceStep','_pictureSprite','confirm','faceHeight','getBackgroundOpacity','EnableCanRetrain','pickMoreAppearances','finalizeApplyClass','playOk','\x5cC[16]Class','parse','IconSet','BattleVoiceWindow_AcceptIcon','recoverAll','ClassWindow_QuantityFmt','currentExt','setDescriptionFontSizeToTraitSet','actorID','ARRAYSTRUCT','pictureScaleUp','Vocab','learnAllAvailableClassSkillsByLevel','ConfirmCommandWindow_BgType','createNameEditWindow','CreateVisualGoldText','_battlePortrait','traitIcon','finalizeAddCharacterToParty','RegisterVarID','Select\x20a\x20character\x20to\x20retrain\x20anew.','onGraphicSetsOk','TraitSetsWindow_QuantityFmt','FaceIndex','NameCommandWindow_ManualText','onTraitTypeChange','randomInt','onConfirmFinalize','BattleVoiceWindow_VoiceCommandIcon','ConfirmDataWindow_ClassText','isCreatedCharacter','setName','close','getInputButtonString','Finish','1248289SZshZu'];_0x2e92=function(){return _0x29eed7;};return _0x2e92();}function Window_CharaCreateClassList(){this['initialize'](...arguments);}Window_CharaCreateClassList['prototype']=Object[_0x4b42a7(0x426)](Window_Command[_0x4b42a7(0x39c)]),Window_CharaCreateClassList[_0x4b42a7(0x39c)]['constructor']=Window_CharaCreateClassList,Window_CharaCreateClassList[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x249)]??0x0,'defaultIcon':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x249)]??0x60,'currentClassTextColor':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x3e3)]??0x11,'itemCostTypeFmt':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['ClassWindow_CostTypeFmt']??_0x4b42a7(0x36a),'itemCostQuantityFmt':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x305)]??_0x4b42a7(0x3fd),'itemDrawCost1':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x44c)]??![]},Window_CharaCreateClassList[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x2ca5af){const _0x16350a=_0x4b42a7;Window_Command[_0x16350a(0x39c)][_0x16350a(0x1dd)]['call'](this,_0x2ca5af),this[_0x16350a(0x3aa)]=0x0,this[_0x16350a(0x2d7)]();},Window_CharaCreateClassList[_0x4b42a7(0x39c)][_0x4b42a7(0x2b3)]=function(){const _0x38106f=_0x4b42a7,_0x59d5c0=VisuMZ[_0x38106f(0x1bd)][_0x38106f(0x412)][_0x38106f(0x38b)];for(const _0x20bd1f of _0x59d5c0){if(!this['includes'](_0x20bd1f))continue;this[_0x38106f(0x415)](_0x20bd1f);}},Window_CharaCreateClassList[_0x4b42a7(0x39c)][_0x4b42a7(0x405)]=function(_0x41456f){const _0x5583cf=_0x4b42a7;if(!_0x41456f)return![];const _0x5f177c=_0x41456f['ClassID']||0x0;if(!$dataClasses[_0x5f177c])return![];const _0x59373c=$dataClasses[_0x5f177c];if(_0x59373c[_0x5583cf(0x3a3)]['trim']()==='')return![];if(_0x59373c[_0x5583cf(0x3a3)]['includes']('-----'))return![];if(_0x41456f[_0x5583cf(0x424)]>0x0){if(!$gameSwitches[_0x5583cf(0x37c)](_0x41456f['SwitchReq']))return![];}return!![];},Window_CharaCreateClassList[_0x4b42a7(0x39c)]['addClassEntry']=function(_0x3cfd77){const _0x59776e=_0x4b42a7,_0x5d0b3e=_0x3cfd77['ClassID']||0x0,_0x3aab1a=$dataClasses[_0x5d0b3e];let _0x392143=_0x3aab1a['name'];if(this[_0x59776e(0x29d)]&&this['_tempActor'][_0x59776e(0x1e4)]()['id']===_0x3cfd77['ClassID']){const _0x2e79e3=Window_CharaCreateClassList[_0x59776e(0x21f)][_0x59776e(0x2e0)];_0x392143=_0x59776e(0x273)[_0x59776e(0x34f)](_0x2e79e3,_0x392143);}let _0x435d9f=Window_CharaCreateClassList['SETTINGS'][_0x59776e(0x1ce)];if(Scene_CreateCharacter['SETTINGS'][_0x59776e(0x1fe)]){const _0x5f4889=VisuMZ[_0x59776e(0x1bd)][_0x59776e(0x227)],_0x405a3e=_0x3aab1a[_0x59776e(0x1f8)]||'';_0x405a3e[_0x59776e(0x241)](_0x5f4889[_0x59776e(0x425)])&&(_0x435d9f=Number(RegExp['$1'])),_0x392143=_0x59776e(0x2da)[_0x59776e(0x34f)](_0x435d9f,_0x392143);}const _0x3ad12a=this[_0x59776e(0x3f3)](_0x3cfd77);this['addCommand'](_0x392143,_0x59776e(0x1d2),_0x3ad12a,_0x3cfd77);},Window_CharaCreateClassList[_0x4b42a7(0x39c)][_0x4b42a7(0x3f3)]=function(_0x5f3fbd){const _0x4bef62=_0x4b42a7;if(!_0x5f3fbd)return![];if(_0x5f3fbd[_0x4bef62(0x477)]>0x0){if($gameParty[_0x4bef62(0x2be)]()<_0x5f3fbd[_0x4bef62(0x477)])return![];}if(_0x5f3fbd['ItemIdCost']>0x0){const _0x2de580=$dataItems[_0x5f3fbd[_0x4bef62(0x293)]];if(!_0x2de580)return![];const _0x4160ab=_0x5f3fbd[_0x4bef62(0x2de)];if($gameParty['numItems'](_0x2de580)<_0x4160ab)return![];}return _0x5f3fbd['Graphics']['length']>0x0;},Window_CharaCreateClassList[_0x4b42a7(0x39c)]['drawItem']=function(_0x6f4f3e){const _0x424de5=_0x4b42a7,_0x50167d=this[_0x424de5(0x248)](_0x6f4f3e);this['resetTextColor'](),this[_0x424de5(0x41b)](this[_0x424de5(0x366)](_0x6f4f3e)),this[_0x424de5(0x247)](this[_0x424de5(0x1b1)](_0x6f4f3e),_0x50167d['x'],_0x50167d['y'],_0x50167d[_0x424de5(0x2c0)]),this['drawClassCost'](_0x6f4f3e);},Window_CharaCreateClassList[_0x4b42a7(0x39c)][_0x4b42a7(0x2d2)]=function(_0x415082){const _0x53ef15=_0x4b42a7,_0x482ea9=this[_0x53ef15(0x248)](_0x415082),_0x121922=this[_0x53ef15(0x2aa)][_0x415082][_0x53ef15(0x479)];if(this[_0x53ef15(0x29d)]&&this[_0x53ef15(0x29d)][_0x53ef15(0x1e4)]()['id']===_0x121922[_0x53ef15(0x3cb)])return;let _0x161a22=$dataItems[_0x121922['ItemIdCost']||0x0];_0x161a22&&this[_0x53ef15(0x239)](_0x121922,_0x161a22,_0x482ea9);let _0x53807b=_0x121922[_0x53ef15(0x477)]||0x0;_0x53807b>0x0&&this[_0x53ef15(0x397)](_0x53807b,_0x482ea9);},Window_CharaCreateClassList[_0x4b42a7(0x39c)][_0x4b42a7(0x239)]=function(_0x1f9598,_0x35eb7,_0x2d43a6){const _0x30dcde=_0x4b42a7,_0x326406=Window_CharaCreateClassList[_0x30dcde(0x21f)],_0x183dfb=_0x1f9598[_0x30dcde(0x2de)],_0x27cd55=$gameParty['numItems'](_0x35eb7);let _0x40c486='';(_0x183dfb>0x1||_0x326406[_0x30dcde(0x37d)])&&(_0x40c486=_0x326406[_0x30dcde(0x40c)][_0x30dcde(0x34f)](_0x183dfb,_0x27cd55));const _0x2cee79='\x5cI[%1]'[_0x30dcde(0x34f)](_0x35eb7[_0x30dcde(0x3db)]);let _0x48576a=_0x326406[_0x30dcde(0x1f1)]['format'](_0x2cee79,_0x40c486);const _0x46dbff=this[_0x30dcde(0x2d3)](_0x48576a)['width'],_0x55f736=_0x2d43a6['x']+_0x2d43a6['width']-_0x46dbff,_0x4013c1=_0x2d43a6['y'];this[_0x30dcde(0x247)](_0x48576a,_0x55f736,_0x4013c1),_0x2d43a6[_0x30dcde(0x2c0)]-=_0x46dbff+this[_0x30dcde(0x41a)]()*0x2;},Window_CharaCreateClassList[_0x4b42a7(0x39c)]['drawGoldCost']=function(_0x370e6a,_0x4ae873){const _0x26eb15=_0x4b42a7;this[_0x26eb15(0x436)](_0x370e6a,TextManager[_0x26eb15(0x1ec)],_0x4ae873['x'],_0x4ae873['y'],_0x4ae873[_0x26eb15(0x2c0)]);},Window_CharaCreateClassList[_0x4b42a7(0x39c)][_0x4b42a7(0x466)]=function(){const _0x93376e=_0x4b42a7;this[_0x93376e(0x46c)]['setEntryData'](this[_0x93376e(0x306)]());},Window_CharaCreateClassList[_0x4b42a7(0x39c)]['setupRetrain']=function(_0x1cb243){const _0x52a95c=_0x4b42a7;_0x1cb243['retrain'][_0x52a95c(0x1d2)]&&this[_0x52a95c(0x42a)](_0x1cb243);},Window_CharaCreateClassList['prototype'][_0x4b42a7(0x42a)]=function(_0x3a7251){const _0x19cd08=_0x4b42a7;this[_0x19cd08(0x29d)]=_0x3a7251['tempActor'];const _0x26e0a8=this[_0x19cd08(0x29d)]['currentClass']()['id'],_0x5c6ec7=this[_0x19cd08(0x2aa)]['findIndex'](_0x519f36=>_0x519f36[_0x19cd08(0x479)]&&_0x519f36[_0x19cd08(0x479)][_0x19cd08(0x3cb)]===_0x26e0a8);this['smoothSelect'](Math[_0x19cd08(0x2e3)](0x0,_0x5c6ec7)),this[_0x19cd08(0x204)]();};function Window_CharaCreateAppearance(){this['initialize'](...arguments);}Window_CharaCreateAppearance[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Command[_0x4b42a7(0x39c)]),Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_CharaCreateAppearance,Window_CharaCreateAppearance[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x3e6)]??0x0,'pickMoreAppearances':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x20e)]??!![]},Window_CharaCreateAppearance[_0x4b42a7(0x39c)]['initialize']=function(_0x367c7c){const _0x27f402=_0x4b42a7;Window_Command[_0x27f402(0x39c)][_0x27f402(0x1dd)][_0x27f402(0x1da)](this,_0x367c7c),this['openness']=0x0,this[_0x27f402(0x2d7)]();},Window_CharaCreateAppearance[_0x4b42a7(0x39c)]['setAppearanceSet']=function(_0x237eac,_0x163164){const _0x49c35c=_0x4b42a7;if(this[_0x49c35c(0x2f6)]===_0x237eac)return;this[_0x49c35c(0x2f6)]=_0x237eac,this[_0x49c35c(0x1e8)](_0x163164);},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x1e8)]=function(_0x192561){const _0x190657=_0x4b42a7;this[_0x190657(0x3ad)]=JSON[_0x190657(0x301)](JSON[_0x190657(0x401)](_0x192561)),this['refresh'](),this['smoothSelect'](0x0);},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x2b3)]=function(){const _0x1107c7=_0x4b42a7;if(!this[_0x1107c7(0x3ad)])return;for(const _0x3bca02 of this[_0x1107c7(0x3ad)]){this['addGraphicEntry'](_0x3bca02);}this[_0x1107c7(0x3f7)]()&&this[_0x1107c7(0x457)]();},Window_CharaCreateAppearance['prototype'][_0x4b42a7(0x45e)]=function(_0x43cbb7){const _0x1913ee=_0x4b42a7;if(!_0x43cbb7)return;let _0x4eca53=_0x43cbb7['DisplayText'],_0x2ce38b=0x0;Scene_CreateCharacter['SETTINGS'][_0x1913ee(0x1fe)]&&(_0x2ce38b=_0x43cbb7[_0x1913ee(0x32c)],_0x4eca53=_0x1913ee(0x2da)[_0x1913ee(0x34f)](_0x2ce38b,_0x4eca53)),this[_0x1913ee(0x3b3)](_0x4eca53,'graphic',!![],_0x43cbb7);},Window_CharaCreateAppearance[_0x4b42a7(0x39c)]['canPickMoreAppearances']=function(){const _0x3652ad=_0x4b42a7,_0x192aee=Window_CharaCreateAppearance[_0x3652ad(0x21f)];if(!_0x192aee[_0x3652ad(0x2fd)])return![];if(Window_CharaCreateGraphicSets[_0x3652ad(0x21f)][_0x3652ad(0x203)])return!![];for(const _0x28b0ac of VisuMZ[_0x3652ad(0x1bd)][_0x3652ad(0x412)][_0x3652ad(0x414)]){const _0x28fa6f=_0x28b0ac[_0x3652ad(0x424)]||0x0;if(_0x28fa6f===0x0)return!![];if($gameSwitches[_0x3652ad(0x37c)](_0x28fa6f))return!![];}return![];},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x457)]=function(){const _0x58c598=_0x4b42a7,_0x2c4a2a=TextManager[_0x58c598(0x1f4)][_0x58c598(0x200)];let _0x20bbd5=_0x2c4a2a[_0x58c598(0x226)],_0x63ce69=0x0;Scene_CreateCharacter[_0x58c598(0x21f)][_0x58c598(0x1fe)]&&(_0x63ce69=_0x2c4a2a[_0x58c598(0x379)],_0x20bbd5=_0x58c598(0x2da)['format'](_0x63ce69,_0x20bbd5)),this[_0x58c598(0x3b3)](_0x20bbd5,_0x58c598(0x39b),!![]);},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x428)]=function(_0x4ccf4c){const _0x53afce=_0x4b42a7,_0x91d141=this[_0x53afce(0x248)](_0x4ccf4c);this[_0x53afce(0x1d6)](),this[_0x53afce(0x41b)](this[_0x53afce(0x366)](_0x4ccf4c)),this[_0x53afce(0x247)](this[_0x53afce(0x1b1)](_0x4ccf4c),_0x91d141['x'],_0x91d141['y'],_0x91d141[_0x53afce(0x2c0)]);},Window_CharaCreateAppearance['prototype'][_0x4b42a7(0x466)]=function(){const _0x4b8108=_0x4b42a7;this['currentSymbol']()===_0x4b8108(0x472)&&this[_0x4b8108(0x306)]()?this['_helpWindow'][_0x4b8108(0x393)]({'PreviewPicture':this['currentExt']()[_0x4b8108(0x265)]||this[_0x4b8108(0x306)]()[_0x4b8108(0x1f2)]||[this[_0x4b8108(0x306)]()[_0x4b8108(0x377)],this[_0x4b8108(0x306)]()[_0x4b8108(0x317)]],'PreviewParallax':this[_0x4b8108(0x306)]()['PreviewParallax']}):this[_0x4b8108(0x46c)][_0x4b8108(0x393)]({'PreviewPicture':'','PreviewParallax':''});},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x403)]=function(_0x3a931b){const _0x4d648f=_0x4b42a7;_0x3a931b[_0x4d648f(0x2a6)][_0x4d648f(0x1f6)]&&this['selectCurrentAppearance'](_0x3a931b);},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x1e1)]=function(_0x3333cd){const _0x4b7be6=_0x4b42a7;this[_0x4b7be6(0x29d)]=_0x3333cd[_0x4b7be6(0x2ab)];const _0x367acd=this['_tempActor']['currentClass']()['id'];if(this[_0x4b7be6(0x1d3)](_0x367acd))return;if(Window_CharaCreateAppearance['SETTINGS']['pickMoreAppearances']){if(Window_CharaCreateGraphicSets[_0x4b7be6(0x21f)][_0x4b7be6(0x203)]){const _0x6e0a28=VisuMZ[_0x4b7be6(0x1bd)][_0x4b7be6(0x412)][_0x4b7be6(0x38b)];for(const _0xf35876 of _0x6e0a28){if(this[_0x4b7be6(0x1d3)](_0xf35876[_0x4b7be6(0x3cb)]))return;}}const _0x5d22a4=VisuMZ['CharaCreationSys']['Settings'][_0x4b7be6(0x414)];for(const _0x272051 of _0x5d22a4){if(this[_0x4b7be6(0x1d9)](_0x272051))return;}}_0x3333cd[_0x4b7be6(0x2a6)][_0x4b7be6(0x1f6)]=![];},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x1d3)]=function(_0x373e3b){const _0x27ab52=_0x4b42a7,_0x452f54=VisuMZ[_0x27ab52(0x1bd)][_0x27ab52(0x412)][_0x27ab52(0x38b)],_0x5a61ae=_0x452f54[_0x27ab52(0x45f)](_0x5ad300=>_0x5ad300[_0x27ab52(0x3cb)]===_0x373e3b);if(_0x5a61ae[_0x27ab52(0x424)]&&!$gameSwitches['value'](_0x5a61ae[_0x27ab52(0x424)]))return![];if(_0x5a61ae){const _0x2e89bd=_0x5a61ae[_0x27ab52(0x21d)],_0x58afb3=_0x2e89bd[_0x27ab52(0x45f)](_0x4a8032=>VisuMZ['CharaCreationSys'][_0x27ab52(0x2df)](_0x4a8032,this['_tempActor']));if(_0x58afb3){this[_0x27ab52(0x260)](_0x373e3b,_0x2e89bd);const _0x2822c1=this['_list'][_0x27ab52(0x1dc)](_0x3637fd=>VisuMZ[_0x27ab52(0x1bd)][_0x27ab52(0x2df)](_0x3637fd[_0x27ab52(0x479)],this[_0x27ab52(0x29d)]));return this[_0x27ab52(0x3a2)](Math[_0x27ab52(0x2e3)](0x0,_0x2822c1)),!![];}}return![];},Window_CharaCreateAppearance[_0x4b42a7(0x39c)][_0x4b42a7(0x1d9)]=function(_0xc7a0e7){const _0x28f151=_0x4b42a7;if(_0xc7a0e7[_0x28f151(0x424)]&&!$gameSwitches['value'](_0xc7a0e7[_0x28f151(0x424)]))return![];const _0x4acef3=_0xc7a0e7[_0x28f151(0x21d)],_0x226f47=_0x4acef3[_0x28f151(0x45f)](_0x57af5=>VisuMZ[_0x28f151(0x1bd)][_0x28f151(0x2df)](_0x57af5,this['_tempActor']));if(_0x226f47){this['setGraphicsData'](_0x4acef3);const _0x14e126=this[_0x28f151(0x2aa)]['findIndex'](_0x194ba4=>VisuMZ[_0x28f151(0x1bd)][_0x28f151(0x2df)](_0x194ba4[_0x28f151(0x479)],this['_tempActor']));return this[_0x28f151(0x3a2)](Math[_0x28f151(0x2e3)](0x0,_0x14e126)),!![];}return![];},VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x2df)]=function(_0x41f496,_0x1b4c31){const _0x103d1b=_0x4b42a7;if(_0x41f496[_0x103d1b(0x377)]&&_0x41f496[_0x103d1b(0x377)]===_0x1b4c31[_0x103d1b(0x1e9)]()&&_0x41f496[_0x103d1b(0x317)]===_0x1b4c31['faceIndex']())return!![];if(_0x41f496[_0x103d1b(0x3b7)]&&_0x41f496[_0x103d1b(0x3b7)]===_0x1b4c31[_0x103d1b(0x2ca)]()&&_0x41f496[_0x103d1b(0x34e)]===_0x1b4c31[_0x103d1b(0x355)]())return!![];if(_0x41f496[_0x103d1b(0x3bc)]&&_0x41f496[_0x103d1b(0x3bc)]===_0x1b4c31['battlerName']())return!![];if(_0x41f496['BattlePortrait']&&_0x41f496[_0x103d1b(0x1f2)]===_0x1b4c31['_battlePortrait'])return!![];if(_0x41f496[_0x103d1b(0x265)]&&_0x41f496[_0x103d1b(0x265)]===_0x1b4c31[_0x103d1b(0x291)])return!![];return![];};function Window_CharaCreateGraphicSets(){const _0x49c375=_0x4b42a7;this[_0x49c375(0x1dd)](...arguments);}Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Command['prototype']),Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_CharaCreateGraphicSets,Window_CharaCreateGraphicSets[_0x4b42a7(0x21f)]={'bgType':VisuMZ['CharaCreationSys']['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x213)]??0x0,'otherClassesFirst':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x34a)]??!![],'pickOtherClassApperances':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x324)]??!![]},Window_CharaCreateGraphicSets['prototype'][_0x4b42a7(0x1dd)]=function(_0x56666f){const _0x5bef1f=_0x4b42a7;Window_Command[_0x5bef1f(0x39c)]['initialize'][_0x5bef1f(0x1da)](this,_0x56666f),this['openness']=0x0,this[_0x5bef1f(0x2d7)]();},Window_CharaCreateGraphicSets['prototype'][_0x4b42a7(0x2b3)]=function(){const _0x23e652=_0x4b42a7,_0x522832=Window_CharaCreateGraphicSets['SETTINGS'];if(_0x522832[_0x23e652(0x203)]&&_0x522832[_0x23e652(0x338)])this[_0x23e652(0x3c3)]();this[_0x23e652(0x471)]();if(_0x522832[_0x23e652(0x203)]&&!_0x522832[_0x23e652(0x338)])this['addOtherClassGraphics']();},Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)][_0x4b42a7(0x3c3)]=function(){const _0x348030=_0x4b42a7,_0x464528=VisuMZ[_0x348030(0x1bd)][_0x348030(0x412)][_0x348030(0x38b)];for(const _0x3a7652 of _0x464528){if(!this['includesClass'](_0x3a7652))continue;this[_0x348030(0x415)](_0x3a7652);}},Window_CharaCreateGraphicSets['prototype'][_0x4b42a7(0x1b8)]=function(_0x4cff4d){const _0x5db9a4=_0x4b42a7;if(!_0x4cff4d)return![];const _0x3f2e79=_0x4cff4d[_0x5db9a4(0x3cb)]||0x0;if(!$dataClasses[_0x3f2e79])return![];const _0x17217f=$dataClasses[_0x3f2e79];if(_0x17217f['name'][_0x5db9a4(0x465)]()==='')return![];if(_0x17217f[_0x5db9a4(0x3a3)][_0x5db9a4(0x405)](_0x5db9a4(0x270)))return![];if(_0x4cff4d['SwitchReq']>0x0){if(!$gameSwitches['value'](_0x4cff4d[_0x5db9a4(0x424)]))return![];}return _0x4cff4d[_0x5db9a4(0x21d)]['length']>0x0;},Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)]['addClassEntry']=function(_0x2c8a91){const _0x45988c=_0x4b42a7,_0x13f28e=_0x2c8a91[_0x45988c(0x3cb)]||0x0,_0x261018=$dataClasses[_0x13f28e],_0x3a223a=TextManager[_0x45988c(0x1f4)][_0x45988c(0x23b)][_0x45988c(0x3f9)];let _0x64488f=_0x3a223a[_0x45988c(0x34f)](_0x261018[_0x45988c(0x3a3)]),_0x35f821=Window_CharaCreateClassList[_0x45988c(0x21f)][_0x45988c(0x1ce)];if(Scene_CreateCharacter['SETTINGS'][_0x45988c(0x1fe)]){const _0x715136=VisuMZ['CharaCreationSys'][_0x45988c(0x227)],_0x1dc792=_0x261018[_0x45988c(0x1f8)]||'';_0x1dc792[_0x45988c(0x241)](_0x715136[_0x45988c(0x425)])&&(_0x35f821=Number(RegExp['$1'])),_0x64488f=_0x45988c(0x2da)[_0x45988c(0x34f)](_0x35f821,_0x64488f);}this[_0x45988c(0x3b3)](_0x64488f,_0x45988c(0x472),!![],_0x2c8a91);},Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)][_0x4b42a7(0x471)]=function(){const _0x3c03f4=_0x4b42a7,_0x26896b=VisuMZ[_0x3c03f4(0x1bd)]['Settings'][_0x3c03f4(0x414)];for(const _0x3b2493 of _0x26896b){if(!this['includesGraphicsSet'](_0x3b2493))continue;this[_0x3c03f4(0x360)](_0x3b2493);}},Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)][_0x4b42a7(0x445)]=function(_0xccb65f){const _0x96af08=_0x4b42a7;if(!_0xccb65f)return![];if(_0xccb65f[_0x96af08(0x424)]>0x0){if(!$gameSwitches['value'](_0xccb65f[_0x96af08(0x424)]))return![];}return _0xccb65f[_0x96af08(0x21d)]['length']>0x0;},Window_CharaCreateGraphicSets['prototype']['addGraphicsSetEntry']=function(_0x45db1d){const _0x458037=_0x4b42a7;let _0x54b082=_0x45db1d[_0x458037(0x275)],_0x12dd23=0x0;Scene_CreateCharacter[_0x458037(0x21f)]['showListIcons']&&(_0x12dd23=_0x45db1d[_0x458037(0x32c)],_0x54b082='\x5cI[%1]%2'['format'](_0x12dd23,_0x54b082)),this[_0x458037(0x3b3)](_0x54b082,_0x458037(0x472),!![],_0x45db1d);},Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)][_0x4b42a7(0x428)]=function(_0x3fd13f){const _0x4d396b=_0x4b42a7,_0x3d22ca=this[_0x4d396b(0x248)](_0x3fd13f);this[_0x4d396b(0x1d6)](),this[_0x4d396b(0x41b)](this[_0x4d396b(0x366)](_0x3fd13f)),this[_0x4d396b(0x247)](this[_0x4d396b(0x1b1)](_0x3fd13f),_0x3d22ca['x'],_0x3d22ca['y'],_0x3d22ca[_0x4d396b(0x2c0)]);},Window_CharaCreateGraphicSets[_0x4b42a7(0x39c)]['updateHelp']=function(){const _0x2d92f9=_0x4b42a7;this['_helpWindow'][_0x2d92f9(0x393)](this[_0x2d92f9(0x306)]());};function Window_CharaCreateTraitTypes(){const _0x3ec2c6=_0x4b42a7;this[_0x3ec2c6(0x1dd)](...arguments);}Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Command[_0x4b42a7(0x39c)]),Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_CharaCreateTraitTypes,Window_CharaCreateTraitTypes['SETTINGS']={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x37f)]??0x0,'acceptIcon':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)]['TraitTypesWindow_AcceptIcon']??0xa4,'traitIcon':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x30b)]['TraitTypesWindow_TypeIcon']??0x53},Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x504c78){const _0x3e25bb=_0x4b42a7;Window_Command[_0x3e25bb(0x39c)][_0x3e25bb(0x1dd)][_0x3e25bb(0x1da)](this,_0x504c78),this[_0x3e25bb(0x3aa)]=0x0,this[_0x3e25bb(0x2d7)]();},Window_CharaCreateTraitTypes['prototype'][_0x4b42a7(0x2b3)]=function(){const _0x1424e0=_0x4b42a7;this[_0x1424e0(0x1b7)](),this[_0x1424e0(0x299)]();},Window_CharaCreateTraitTypes['prototype'][_0x4b42a7(0x1b7)]=function(){const _0x39f2ec=_0x4b42a7;let _0x1b3f71=TextManager[_0x39f2ec(0x1f4)][_0x39f2ec(0x351)][_0x39f2ec(0x352)],_0x40b51c=0x0;Scene_CreateCharacter['SETTINGS'][_0x39f2ec(0x1fe)]&&(_0x40b51c=Window_CharaCreateTraitTypes['SETTINGS'][_0x39f2ec(0x3e4)],_0x1b3f71=_0x39f2ec(0x2da)['format'](_0x40b51c,_0x1b3f71));const _0x52f030=this[_0x39f2ec(0x336)]();this[_0x39f2ec(0x3b3)](_0x1b3f71,_0x39f2ec(0x352),_0x52f030);},Window_CharaCreateTraitTypes['prototype'][_0x4b42a7(0x336)]=function(){const _0x448b2e=_0x4b42a7;if(!SceneManager[_0x448b2e(0x1d4)][_0x448b2e(0x232)]())return![];if(!SceneManager[_0x448b2e(0x1d4)]['meetsTotalItemCosts']())return![];return!![];},Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)][_0x4b42a7(0x299)]=function(){const _0x2487e8=_0x4b42a7,_0x5e3888=SceneManager[_0x2487e8(0x1d4)][_0x2487e8(0x43d)]()[_0x2487e8(0x42b)](),_0x1222b3=VisuMZ[_0x2487e8(0x1cc)]['Settings'];for(const _0x198c9f of _0x5e3888){const _0x186fbf=_0x1222b3[_0x198c9f];if(!_0x186fbf)continue;if(!_0x186fbf[_0x2487e8(0x2c7)])continue;if(!this['isTraitTypeIncluded'](_0x198c9f))continue;const _0x14f9e4=TextManager[_0x2487e8(0x1f4)]['traits']['traitFmt'];let _0x299cdc=_0x14f9e4[_0x2487e8(0x34f)](_0x186fbf[_0x2487e8(0x39e)]),_0x40125d=0x0;Scene_CreateCharacter[_0x2487e8(0x21f)][_0x2487e8(0x1fe)]&&(_0x40125d=Window_CharaCreateTraitTypes['SETTINGS'][_0x2487e8(0x311)],_0x299cdc=_0x2487e8(0x2da)['format'](_0x40125d,_0x299cdc));const _0x2271f8=_0x198c9f,_0x458a81=this[_0x2487e8(0x2a2)](_0x198c9f),_0x41b231=this[_0x2487e8(0x418)](_0x198c9f);this[_0x2487e8(0x3b3)](_0x299cdc,_0x2271f8,_0x458a81,_0x41b231);}},Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)][_0x4b42a7(0x266)]=function(_0xe178f9){const _0x3df5c6=_0x4b42a7,_0x2d02e8=VisuMZ['CharaCreationSys'][_0x3df5c6(0x412)]['Traits'],_0x15c6c1=_0x2d02e8[_0xe178f9];return _0x15c6c1['Visible'];},Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)]['isTraitTypeEnabled']=function(_0x2aa682){const _0x5afce9=_0x4b42a7,_0x2e3cfe=VisuMZ[_0x5afce9(0x1bd)]['Settings'][_0x5afce9(0x475)],_0xab39dc=_0x2e3cfe[_0x2aa682];return this[_0x5afce9(0x294)]?_0xab39dc[_0x5afce9(0x1ed)]:_0xab39dc[_0x5afce9(0x2c5)];},Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)]['makeTraitTypeExt']=function(_0x2e30d3){const _0x185020=_0x4b42a7;_0x2e30d3=_0x2e30d3['toUpperCase']()[_0x185020(0x465)]();const _0x2682d4=SceneManager[_0x185020(0x1d4)][_0x185020(0x1b9)][_0x2e30d3][_0x185020(0x399)]()[_0x185020(0x465)](),_0x2ee504=DataManager[_0x185020(0x34b)][_0x2e30d3][_0x2682d4];return _0x2ee504?_0x2ee504['Display']||'':'';},Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)]['drawItem']=function(_0xc3b4a2){const _0xbd6ccc=_0x4b42a7,_0x35fec9=this[_0xbd6ccc(0x248)](_0xc3b4a2);this[_0xbd6ccc(0x1d6)](),this[_0xbd6ccc(0x41b)](this[_0xbd6ccc(0x366)](_0xc3b4a2)),this[_0xbd6ccc(0x247)](this[_0xbd6ccc(0x1b1)](_0xc3b4a2),_0x35fec9['x'],_0x35fec9['y']);const _0x46d7bf=this[_0xbd6ccc(0x2aa)][_0xc3b4a2][_0xbd6ccc(0x479)]||'';if(_0x46d7bf){const _0x5e6755=_0x35fec9['x']+Math[_0xbd6ccc(0x3ca)](_0x35fec9[_0xbd6ccc(0x2c0)]/0x2);this[_0xbd6ccc(0x247)](_0x46d7bf,_0x5e6755,_0x35fec9['y']);}},Window_CharaCreateTraitTypes[_0x4b42a7(0x39c)]['setupRetrain']=function(_0x20b9f8){const _0x5d457b=_0x4b42a7;this[_0x5d457b(0x294)]=!![];};function Window_CharaCreateTraitSets(){const _0x3eef4a=_0x4b42a7;this[_0x3eef4a(0x1dd)](...arguments);}Window_CharaCreateTraitSets[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Command[_0x4b42a7(0x39c)]),Window_CharaCreateTraitSets['prototype'][_0x4b42a7(0x2a8)]=Window_CharaCreateTraitSets,Window_CharaCreateTraitSets[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x433)]??0x0,'lineThickness':VisuMZ['CharaCreationSys']['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x2a0)]??0x3,'currentTraitSetTextColor':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)]['Window']['TraitSetsWindow_TextColorID']??0x11,'itemCostTypeFmt':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['TraitSetsWindow_CostTypeFmt']??_0x4b42a7(0x36a),'itemCostQuantityFmt':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x316)]??_0x4b42a7(0x3fd),'itemDrawCost1':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x263)]??![]},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x547806){const _0x1f2aec=_0x4b42a7;Window_Command[_0x1f2aec(0x39c)][_0x1f2aec(0x1dd)]['call'](this,_0x547806),this['openness']=0x0,this['deactivate']();},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x1a9)]=function(){const _0xd38efe=_0x4b42a7,_0x39b9e6=Math['max'](Window_CharaCreateTraitSets['SETTINGS'][_0xd38efe(0x2b6)],0x1);return Math[_0xd38efe(0x470)](this[_0xd38efe(0x482)]()*_0x39b9e6)+0x8;},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x1ba)]=function(_0x46f434){const _0x3e893d=_0x4b42a7;this[_0x3e893d(0x455)]=_0x46f434,this[_0x3e893d(0x204)]();},Window_CharaCreateTraitSets['prototype'][_0x4b42a7(0x3df)]=function(){const _0xadf8cb=_0x4b42a7,_0x195e01=this[_0xadf8cb(0x455)][_0xadf8cb(0x399)]()[_0xadf8cb(0x465)](),_0x567f52=SceneManager[_0xadf8cb(0x1d4)]['_traits'][_0x195e01],_0x170e2c=Math[_0xadf8cb(0x2e3)](this['_list'][_0xadf8cb(0x1dc)](_0x5bd194=>_0x5bd194[_0xadf8cb(0x3a3)]===_0x567f52),0x0);_0x170e2c>0x0?(this[_0xadf8cb(0x257)](_0x170e2c-0x1),this['smoothSelect'](_0x170e2c)):(this['setTopRow'](0x0),this[_0xadf8cb(0x3a2)](0x0));},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x2b3)]=function(){const _0x437477=_0x4b42a7;if(!this[_0x437477(0x455)])return;const _0x130d79=VisuMZ[_0x437477(0x1bd)][_0x437477(0x412)]['Traits'][this[_0x437477(0x455)]],_0x12359d=_0x130d79[_0x437477(0x2f0)];for(const _0x434143 of _0x12359d){if(!this[_0x437477(0x432)](_0x434143))continue;const _0x231c1a=_0x434143[_0x437477(0x205)][_0x437477(0x399)]()[_0x437477(0x465)](),_0x15eafd=this[_0x437477(0x35c)](_0x434143),_0x1613bc=_0x434143;this[_0x437477(0x3b3)](_0x231c1a,_0x437477(0x1e7),_0x15eafd,_0x1613bc);}},Window_CharaCreateTraitSets['prototype']['isTraitSetIncluded']=function(_0x9e7073){const _0x3348e8=_0x4b42a7;if(_0x9e7073[_0x3348e8(0x424)]>0x0){if(!$gameSwitches['value'](_0x9e7073[_0x3348e8(0x424)]))return![];}const _0x1c16f4=_0x9e7073[_0x3348e8(0x205)][_0x3348e8(0x399)]()['trim'](),_0x55f124=this[_0x3348e8(0x455)][_0x3348e8(0x399)]()[_0x3348e8(0x465)]();return!!DataManager[_0x3348e8(0x34b)][_0x55f124][_0x1c16f4];},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x35c)]=function(_0x112640){const _0x51bebd=_0x4b42a7;if(_0x112640[_0x51bebd(0x477)]>0x0){let _0x5d95be=SceneManager[_0x51bebd(0x1d4)][_0x51bebd(0x420)](this[_0x51bebd(0x455)]);_0x5d95be+=_0x112640['GoldCost'];if($gameParty[_0x51bebd(0x2be)]()<_0x5d95be)return![];}if(_0x112640['ItemIdCost']>0x0){const _0x4b953b=SceneManager[_0x51bebd(0x1d4)][_0x51bebd(0x250)](this[_0x51bebd(0x455)]),_0x18a2ce=_0x112640['ItemIdCost'];_0x4b953b[_0x18a2ce]=_0x4b953b[_0x18a2ce]||0x0,_0x4b953b[_0x18a2ce]+=_0x112640[_0x51bebd(0x2de)];if(!SceneManager['_scene'][_0x51bebd(0x22d)](_0x4b953b))return![];}return!![];},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x428)]=function(_0x434648){const _0x49952b=_0x4b42a7,_0x484cbc=this['itemRect'](_0x434648);this[_0x49952b(0x36e)](),this[_0x49952b(0x2ac)]();const _0x54946f=DataManager[_0x49952b(0x34b)][this[_0x49952b(0x455)]['toUpperCase']()['trim']()][this[_0x49952b(0x1b1)](_0x434648)],_0x458eb3=this[_0x49952b(0x2aa)][_0x434648][_0x49952b(0x479)],_0x1dff9d=this[_0x49952b(0x366)](_0x434648),_0x229de2=Window_CharaCreateTraitSets[_0x49952b(0x21f)][_0x49952b(0x2b6)];this['changePaintOpacity'](!![]);if(_0x229de2>0x1)this[_0x49952b(0x467)](_0x484cbc,0x2);this[_0x49952b(0x41b)](_0x1dff9d),this[_0x49952b(0x276)](_0x54946f,_0x484cbc),this[_0x49952b(0x2ce)](_0x458eb3,_0x434648);if(_0x229de2>0x1)this['drawTraitDescription'](_0x54946f,_0x484cbc);this[_0x49952b(0x41b)](!![]);},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x467)]=function(_0x54660c,_0x1a5653){const _0x5672e3=_0x4b42a7;_0x1a5653=_0x1a5653||0x1,this[_0x5672e3(0x41b)](![]);const _0x5f46ce=ColorManager[_0x5672e3(0x44a)](),_0x52f941=ColorManager['dimColor2'](),_0x474c90=_0x54660c['width']/0x2,_0x4940ff=this[_0x5672e3(0x482)]();while(_0x1a5653--){this[_0x5672e3(0x3c9)][_0x5672e3(0x253)](_0x54660c['x'],_0x54660c['y'],_0x474c90,_0x4940ff,_0x52f941,_0x5f46ce),this[_0x5672e3(0x3c9)][_0x5672e3(0x253)](_0x54660c['x']+_0x474c90,_0x54660c['y'],_0x474c90,_0x4940ff,_0x5f46ce,_0x52f941);}this['changePaintOpacity'](!![]);},Window_CharaCreateTraitSets['prototype'][_0x4b42a7(0x276)]=function(_0x5612ea,_0x1dd43c){const _0x5bf4ec=_0x4b42a7;if(!_0x5612ea)return;let _0x51ea8e=_0x5612ea[_0x5bf4ec(0x26b)]||'';if(this['_tempActor']){const _0x362695=this[_0x5bf4ec(0x29d)]['_traitSets'][this['_traitType']]['toUpperCase']()[_0x5bf4ec(0x465)]();_0x362695===_0x5612ea[_0x5bf4ec(0x205)][_0x5bf4ec(0x399)]()[_0x5bf4ec(0x465)]()&&(_0x51ea8e=_0x5bf4ec(0x273)[_0x5bf4ec(0x34f)](Window_CharaCreateTraitSets['SETTINGS'][_0x5bf4ec(0x3f5)],_0x51ea8e));}this[_0x5bf4ec(0x247)](_0x51ea8e,_0x1dd43c['x']+this[_0x5bf4ec(0x41a)](),_0x1dd43c['y']);},Window_CharaCreateTraitSets['prototype'][_0x4b42a7(0x2ce)]=function(_0x3f4c8c,_0x1d4a4c){const _0x2a7e2b=_0x4b42a7;if(this[_0x2a7e2b(0x29d)]){const _0x19d81b=this['_tempActor'][_0x2a7e2b(0x34b)][this[_0x2a7e2b(0x455)]]['toUpperCase']()[_0x2a7e2b(0x465)]();if(_0x19d81b===_0x3f4c8c[_0x2a7e2b(0x205)][_0x2a7e2b(0x399)]()[_0x2a7e2b(0x465)]())return;}const _0x579257=this['itemRect'](_0x1d4a4c);_0x579257[_0x2a7e2b(0x2c0)]-=this[_0x2a7e2b(0x41a)]()*0x2;let _0x268c6f=$dataItems[_0x3f4c8c[_0x2a7e2b(0x293)]||0x0];_0x268c6f&&this['drawItemCost'](_0x3f4c8c,_0x268c6f,_0x579257);let _0x560a8f=_0x3f4c8c[_0x2a7e2b(0x477)]||0x0;_0x560a8f>0x0&&this[_0x2a7e2b(0x397)](_0x560a8f,_0x579257);},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x239)]=function(_0x19f136,_0x294be9,_0x2b2ea0){const _0x1726a9=_0x4b42a7,_0x1b574f=Window_CharaCreateTraitSets[_0x1726a9(0x21f)],_0x248fbb=_0x19f136[_0x1726a9(0x2de)],_0x42d655=$gameParty['numItems'](_0x294be9);let _0x2be3a4='';(_0x248fbb>0x1||_0x1b574f[_0x1726a9(0x37d)])&&(_0x2be3a4=_0x1b574f[_0x1726a9(0x40c)][_0x1726a9(0x34f)](_0x248fbb,_0x42d655));const _0x19fee9=_0x1726a9(0x2d0)[_0x1726a9(0x34f)](_0x294be9['iconIndex']);let _0x161333=_0x1b574f[_0x1726a9(0x1f1)][_0x1726a9(0x34f)](_0x19fee9,_0x2be3a4);const _0x5c515f=this[_0x1726a9(0x2d3)](_0x161333)[_0x1726a9(0x2c0)],_0x59eae9=_0x2b2ea0['x']+_0x2b2ea0['width']-_0x5c515f,_0xf4fddc=_0x2b2ea0['y'];this[_0x1726a9(0x247)](_0x161333,_0x59eae9,_0xf4fddc),_0x2b2ea0['width']-=_0x5c515f+this[_0x1726a9(0x41a)]()*0x2;},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x397)]=function(_0x178c7e,_0x1d7ab3){const _0x158624=_0x4b42a7;this[_0x158624(0x436)](_0x178c7e,TextManager[_0x158624(0x1ec)],_0x1d7ab3['x'],_0x1d7ab3['y'],_0x1d7ab3[_0x158624(0x2c0)]);},Window_CharaCreateTraitSets['prototype']['drawTraitDescription']=function(_0x5616b1,_0x28783d){const _0x108196=_0x4b42a7;let _0x386fb5=_0x28783d['x']+this[_0x108196(0x41a)]()*0x4,_0x243e98=_0x28783d['y']+this[_0x108196(0x482)](),_0x469d5f=_0x5616b1[_0x108196(0x27c)]||'';this[_0x108196(0x307)](),this['resetFontSettings'](),this[_0x108196(0x247)](_0x469d5f,_0x386fb5,_0x243e98),this[_0x108196(0x36e)]();},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)]['resetFontSettings']=function(){const _0x4c6b98=_0x4b42a7;Window_Command[_0x4c6b98(0x39c)]['resetFontSettings'][_0x4c6b98(0x1da)](this),this[_0x4c6b98(0x3c9)][_0x4c6b98(0x3d6)]=this['_resetFontSize'];},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x307)]=function(){const _0x4d744d=_0x4b42a7;this[_0x4d744d(0x40f)]=VisuMZ[_0x4d744d(0x1cc)][_0x4d744d(0x412)][_0x4d744d(0x442)]['TraitDescriptionFontSize'];},Window_CharaCreateTraitSets['prototype'][_0x4b42a7(0x36e)]=function(){const _0x23743e=_0x4b42a7;this['_resetFontSize']=$gameSystem[_0x23743e(0x429)]();},Window_CharaCreateTraitSets['prototype'][_0x4b42a7(0x3eb)]=function(_0x136638,_0x391a94){const _0x18c909=_0x4b42a7,_0x52144f=ImageManager['standardIconWidth']||0x20,_0x264604=ImageManager[_0x18c909(0x224)]||0x20;if(_0x391a94[_0x18c909(0x350)]){const _0x40372c=_0x52144f-ImageManager['iconWidth'],_0x56e3c7=_0x264604-ImageManager['iconHeight'];let _0x44e024=0x2,_0x109789=0x2;this[_0x18c909(0x482)]()!==0x24&&(_0x109789=Math[_0x18c909(0x3ca)]((this[_0x18c909(0x482)]()-_0x264604)/0x2));const _0x33bd59=_0x391a94['x']+Math[_0x18c909(0x470)](Math[_0x18c909(0x3ca)](_0x40372c/0x2)*this[_0x18c909(0x370)]())+_0x44e024,_0x526869=_0x391a94['y']+Math[_0x18c909(0x470)](Math[_0x18c909(0x3ca)](_0x56e3c7/0x2)*this[_0x18c909(0x370)]())+_0x109789;this['drawIcon'](_0x136638,_0x33bd59,_0x526869);}_0x391a94['x']+=Math[_0x18c909(0x470)](_0x52144f*this[_0x18c909(0x370)]()),_0x391a94['x']+=Math[_0x18c909(0x470)](0x4*this[_0x18c909(0x370)]());},Window_CharaCreateTraitSets['prototype'][_0x4b42a7(0x24b)]=function(_0x48a312,_0x2afdbc,_0x4f2b4b){const _0x58ab77=_0x4b42a7,_0x53e9f8=ImageManager[_0x58ab77(0x36f)](_0x58ab77(0x302)),_0x5854ee=ImageManager[_0x58ab77(0x285)],_0x31157b=ImageManager[_0x58ab77(0x2a9)],_0x4ce7a2=_0x48a312%0x10*_0x5854ee,_0x46d796=Math[_0x58ab77(0x3ca)](_0x48a312/0x10)*_0x31157b,_0x2fc442=Math['ceil'](_0x5854ee*this[_0x58ab77(0x370)]()),_0x44d6e1=Math[_0x58ab77(0x470)](_0x31157b*this[_0x58ab77(0x370)]());this[_0x58ab77(0x3c9)][_0x58ab77(0x47a)](_0x53e9f8,_0x4ce7a2,_0x46d796,_0x5854ee,_0x31157b,_0x2afdbc,_0x4f2b4b,_0x2fc442,_0x44d6e1);},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x370)]=function(){const _0x105e54=_0x4b42a7;return this['contents'][_0x105e54(0x3d6)]/$gameSystem[_0x105e54(0x429)]();},Window_CharaCreateTraitSets[_0x4b42a7(0x39c)][_0x4b42a7(0x403)]=function(_0x92faa3){const _0x1ccb7b=_0x4b42a7;_0x92faa3[_0x1ccb7b(0x2a6)][_0x1ccb7b(0x351)]&&(this[_0x1ccb7b(0x29d)]=_0x92faa3['tempActor']);};function Window_CharaCreateBattleVoice(){const _0x388f9a=_0x4b42a7;this[_0x388f9a(0x1dd)](...arguments);}Window_CharaCreateBattleVoice['prototype']=Object[_0x4b42a7(0x426)](Window_Command[_0x4b42a7(0x39c)]),Window_CharaCreateBattleVoice['prototype'][_0x4b42a7(0x2a8)]=Window_CharaCreateBattleVoice,Window_CharaCreateBattleVoice[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['BattleVoiceWindow_BgType']??0x0,'currentTextColor':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x237)]??0x11,'acceptIcon':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x303)]??0xa4,'voiceIcon':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x31c)]??0x4},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)]['initialize']=function(_0x3d2c82){const _0x5aa39c=_0x4b42a7;Window_Command[_0x5aa39c(0x39c)][_0x5aa39c(0x1dd)][_0x5aa39c(0x1da)](this,_0x3d2c82),this['_currentVoice']='',this['openness']=0x0,this[_0x5aa39c(0x2d7)]();},Window_CharaCreateBattleVoice['prototype'][_0x4b42a7(0x2b3)]=function(){const _0x5194eb=_0x4b42a7;this[_0x5194eb(0x279)](),this[_0x5194eb(0x3ec)](),this[_0x5194eb(0x24f)]();},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)][_0x4b42a7(0x279)]=function(){const _0x181817=_0x4b42a7;let _0x4beef8=TextManager[_0x181817(0x1f4)][_0x181817(0x2b0)][_0x181817(0x352)],_0x3e25a4=0x0;Scene_CreateCharacter['SETTINGS']['showListIcons']&&(_0x3e25a4=Window_CharaCreateBattleVoice[_0x181817(0x21f)][_0x181817(0x3e4)],_0x4beef8=_0x181817(0x2da)['format'](_0x3e25a4,_0x4beef8)),this[_0x181817(0x3b3)](_0x4beef8,_0x181817(0x352),!![]);},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)][_0x4b42a7(0x3ec)]=function(){const _0x4a3aba=_0x4b42a7;let _0x1d1235=TextManager[_0x4a3aba(0x1f4)][_0x4a3aba(0x2b0)][_0x4a3aba(0x3e2)],_0x113df2=0x0;Scene_CreateCharacter[_0x4a3aba(0x21f)]['showListIcons']&&(_0x113df2=Window_CharaCreateBattleVoice['SETTINGS'][_0x4a3aba(0x3cf)],_0x1d1235=_0x4a3aba(0x2da)['format'](_0x113df2,_0x1d1235)),this['addCommand'](_0x1d1235,_0x4a3aba(0x2b0),!![],'');},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)][_0x4b42a7(0x24f)]=function(){const _0xdafe91=_0x4b42a7,_0x2c3c05=VisuMZ[_0xdafe91(0x2eb)][_0xdafe91(0x412)][_0xdafe91(0x240)];for(const _0x4207d8 of _0x2c3c05){if(!this[_0xdafe91(0x400)](_0x4207d8))continue;this[_0xdafe91(0x326)](_0x4207d8);}},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)][_0x4b42a7(0x400)]=function(_0xb33b5c){const _0xd7fa86=_0x4b42a7;if(!_0xb33b5c)return![];if(_0xb33b5c[_0xd7fa86(0x205)]['trim']()==='')return![];if(_0xb33b5c[_0xd7fa86(0x205)][_0xd7fa86(0x332)]()[_0xd7fa86(0x465)]()===_0xd7fa86(0x348))return![];if(!_0xb33b5c[_0xd7fa86(0x28b)])return![];if(!_0xb33b5c[_0xd7fa86(0x43c)])return![];if(_0xb33b5c[_0xd7fa86(0x43c)][_0xd7fa86(0x47e)]<=0x0)return![];const _0x5efd91=_0xb33b5c[_0xd7fa86(0x373)];return _0x5efd91[_0xd7fa86(0x332)]()[_0xd7fa86(0x465)]()!==_0xd7fa86(0x348);},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)]['createBattleVoiceEntry']=function(_0x4a3c48){const _0x122e5a=_0x4b42a7;let _0x275415=_0x4a3c48[_0x122e5a(0x373)],_0x1482b0=0x0;Scene_CreateCharacter[_0x122e5a(0x21f)]['showListIcons']&&(_0x1482b0=Window_CharaCreateBattleVoice[_0x122e5a(0x21f)][_0x122e5a(0x3cf)],_0x275415='\x5cI[%1]%2'['format'](_0x1482b0,_0x275415)),this[_0x122e5a(0x3b3)](_0x275415,'voice',!![],_0x4a3c48[_0x122e5a(0x205)]);},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)][_0x4b42a7(0x428)]=function(_0x5b0be1){const _0x153a99=_0x4b42a7,_0x5c47e6=this[_0x153a99(0x248)](_0x5b0be1);this[_0x153a99(0x1d6)](),this[_0x153a99(0x41b)](this[_0x153a99(0x366)](_0x5b0be1));const _0x48aa32=this[_0x153a99(0x1cf)](_0x5b0be1),_0x5df86f=this['_list'][_0x5b0be1]['ext'];let _0x1f6f4b=this[_0x153a99(0x1b1)](_0x5b0be1);if(_0x48aa32==='voice'&&this[_0x153a99(0x1b6)]===_0x5df86f){const _0x589712=Window_CharaCreateBattleVoice[_0x153a99(0x21f)][_0x153a99(0x3af)];_0x1f6f4b='\x5cC[%1]%2'['format'](_0x589712,_0x1f6f4b);}this[_0x153a99(0x247)](_0x1f6f4b,_0x5c47e6['x'],_0x5c47e6['y']);},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)][_0x4b42a7(0x1c2)]=function(){const _0x348a59=_0x4b42a7;this[_0x348a59(0x2ad)]()===_0x348a59(0x352)&&SoundManager[_0x348a59(0x2ff)]();},Window_CharaCreateBattleVoice[_0x4b42a7(0x39c)][_0x4b42a7(0x29e)]=function(){const _0x15804d=_0x4b42a7,_0x165b11=this[_0x15804d(0x306)]();if(_0x165b11===''){this['_currentVoice']=_0x165b11;return;}const _0x589b95=VisuMZ['BattleVoices'][_0x15804d(0x367)][_0x165b11[_0x15804d(0x399)]()[_0x15804d(0x465)]()];if(!_0x589b95)return;this[_0x15804d(0x1b6)]=_0x165b11;const _0x2bea87=SceneManager['_scene'][_0x15804d(0x43d)](),_0x289689=VisuMZ[_0x15804d(0x2eb)][_0x15804d(0x412)],_0x411dd0=_0x589b95[_0x15804d(0x43c)];if(!_0x411dd0)return;if(_0x411dd0[_0x15804d(0x47e)]<=0x0)return;const _0x15547e=_0x411dd0[Math[_0x15804d(0x31a)](_0x411dd0[_0x15804d(0x47e)])],_0x29fc71={'name':_0x15547e,'volume':_0x289689[_0x15804d(0x202)],'pitch':_0x289689[_0x15804d(0x33f)],'pan':_0x289689[_0x15804d(0x46e)]};AudioManager[_0x15804d(0x45b)](_0x2bea87),AudioManager[_0x15804d(0x1bb)](_0x29fc71,_0x2bea87);};function Window_CharaCreateNameCurrent(){const _0x709f29=_0x4b42a7;this[_0x709f29(0x1dd)](...arguments);}Window_CharaCreateNameCurrent[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Base['prototype']),Window_CharaCreateNameCurrent['prototype'][_0x4b42a7(0x2a8)]=Window_CharaCreateNameCurrent,Window_CharaCreateNameCurrent[_0x4b42a7(0x21f)]={'bgType':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['NameCurrentWindow_BgType']??0x0},Window_CharaCreateNameCurrent[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x163af4){const _0x47448d=_0x4b42a7;Window_Base[_0x47448d(0x39c)][_0x47448d(0x1dd)][_0x47448d(0x1da)](this,_0x163af4),this[_0x47448d(0x3aa)]=0x0,this[_0x47448d(0x392)]='';},Window_CharaCreateNameCurrent['prototype']['setText']=function(_0x255d65){const _0x244ba9=_0x4b42a7;this[_0x244ba9(0x392)]!==_0x255d65&&(this[_0x244ba9(0x392)]=_0x255d65,this[_0x244ba9(0x204)]());},Window_CharaCreateNameCurrent['prototype'][_0x4b42a7(0x256)]=function(){this['setText']('');},Window_CharaCreateNameCurrent[_0x4b42a7(0x39c)][_0x4b42a7(0x204)]=function(){const _0x2724ee=_0x4b42a7;this[_0x2724ee(0x3c9)][_0x2724ee(0x256)]();const _0x2c9f78=this['textSizeEx'](this[_0x2724ee(0x392)])['width'],_0x35a2ac=Math['floor']((this[_0x2724ee(0x3fa)]-_0x2c9f78)/0x2);this[_0x2724ee(0x247)](this[_0x2724ee(0x392)],_0x35a2ac,0x0);};function Window_CharaCreateNameCommand(){const _0x235e68=_0x4b42a7;this[_0x235e68(0x1dd)](...arguments);}Window_CharaCreateNameCommand['prototype']=Object[_0x4b42a7(0x426)](Window_Command[_0x4b42a7(0x39c)]),Window_CharaCreateNameCommand['prototype'][_0x4b42a7(0x2a8)]=Window_CharaCreateNameCommand,Window_CharaCreateNameCommand[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Window'][_0x4b42a7(0x1a7)]??0x0,'acceptIcon':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x417)]??0xa4,'manualIcon':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)][_0x4b42a7(0x3d4)]??0x53},Window_CharaCreateNameCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x356532){const _0x40b782=_0x4b42a7;Window_Command['prototype'][_0x40b782(0x1dd)][_0x40b782(0x1da)](this,_0x356532),this['openness']=0x0,this[_0x40b782(0x2d7)]();},Window_CharaCreateNameCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x2b3)]=function(){const _0x371517=_0x4b42a7;this[_0x371517(0x3d2)](),this[_0x371517(0x345)](),this[_0x371517(0x1f3)]();},Window_CharaCreateNameCommand[_0x4b42a7(0x39c)]['addAcceptNameCommand']=function(){const _0x2d03aa=_0x4b42a7;let _0x18511c=TextManager[_0x2d03aa(0x1f4)][_0x2d03aa(0x357)][_0x2d03aa(0x352)],_0x5d7eae=Window_CharaCreateNameCommand[_0x2d03aa(0x21f)][_0x2d03aa(0x3e4)];Scene_CreateCharacter[_0x2d03aa(0x21f)]['showListIcons']&&(_0x18511c=_0x2d03aa(0x2da)[_0x2d03aa(0x34f)](_0x5d7eae,_0x18511c));const _0x41c557=SceneManager['_scene'][_0x2d03aa(0x47c)][_0x2d03aa(0x392)]!=='';this[_0x2d03aa(0x3b3)](_0x18511c,'accept',_0x41c557);},Window_CharaCreateNameCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x345)]=function(){const _0x17e5cb=_0x4b42a7;let _0x20dc03=TextManager[_0x17e5cb(0x1f4)][_0x17e5cb(0x357)][_0x17e5cb(0x44d)],_0x3da69f=Window_CharaCreateNameCommand[_0x17e5cb(0x21f)][_0x17e5cb(0x3ef)];Scene_CreateCharacter['SETTINGS'][_0x17e5cb(0x1fe)]&&(_0x20dc03=_0x17e5cb(0x2da)[_0x17e5cb(0x34f)](_0x3da69f,_0x20dc03)),this[_0x17e5cb(0x3b3)](_0x20dc03,_0x17e5cb(0x44d),!![]);},Window_CharaCreateNameCommand['prototype']['addRandomNamePools']=function(){const _0x28285a=_0x4b42a7,_0x5268b3=VisuMZ['CharaCreationSys'][_0x28285a(0x412)][_0x28285a(0x384)];for(const _0x3acbec of _0x5268b3){if(!this[_0x28285a(0x29f)](_0x3acbec))continue;this[_0x28285a(0x218)](_0x3acbec);}},Window_CharaCreateNameCommand[_0x4b42a7(0x39c)]['isNamePoolIncluded']=function(_0x38c0be){const _0x592292=_0x4b42a7;if(!_0x38c0be)return![];return _0x38c0be[_0x592292(0x384)][_0x592292(0x47e)]>0x0;},Window_CharaCreateNameCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x218)]=function(_0x3064bd){const _0x4ea15c=_0x4b42a7;let _0x70b252=_0x3064bd['DisplayText'],_0x43cd73=_0x3064bd[_0x4ea15c(0x32c)];Scene_CreateCharacter[_0x4ea15c(0x21f)][_0x4ea15c(0x1fe)]&&(_0x70b252=_0x4ea15c(0x2da)['format'](_0x43cd73,_0x70b252)),this[_0x4ea15c(0x3b3)](_0x70b252,'randomName',!![],_0x3064bd);},Window_CharaCreateNameCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x428)]=function(_0x612be2){const _0x56cdb2=_0x4b42a7,_0x4623a1=this[_0x56cdb2(0x248)](_0x612be2);this[_0x56cdb2(0x1d6)](),this[_0x56cdb2(0x41b)](this['isCommandEnabled'](_0x612be2)),this[_0x56cdb2(0x247)](this[_0x56cdb2(0x1b1)](_0x612be2),_0x4623a1['x'],_0x4623a1['y'],_0x4623a1[_0x56cdb2(0x2c0)]);};function Window_CharaCreateNameEdit(){this['initialize'](...arguments);}Window_CharaCreateNameEdit['prototype']=Object[_0x4b42a7(0x426)](Window_NameEdit['prototype']),Window_CharaCreateNameEdit[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_CharaCreateNameEdit,Window_CharaCreateNameEdit[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)]['Window']['NameEditWindow_BgType']??0x0,'maxLength':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x341)]??0x10,'nameWidthPadding':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x25b)]??0x8},Window_CharaCreateNameEdit['prototype'][_0x4b42a7(0x1dd)]=function(_0x5a0147){const _0x106c31=_0x4b42a7;Window_NameEdit[_0x106c31(0x39c)][_0x106c31(0x1dd)]['call'](this,_0x5a0147),this[_0x106c31(0x3aa)]=0x0,this[_0x106c31(0x2d7)]();},Window_CharaCreateNameEdit[_0x4b42a7(0x39c)]['faceWidth']=function(){return 0x0;},Window_CharaCreateNameEdit[_0x4b42a7(0x39c)][_0x4b42a7(0x456)]=function(){},Window_CharaCreateNameEdit[_0x4b42a7(0x39c)][_0x4b42a7(0x46f)]=function(_0x14c275,_0x477b6b){const _0xc8bd08=_0x4b42a7;_0x477b6b=_0x477b6b||Window_CharaCreateNameEdit[_0xc8bd08(0x21f)]['maxLength'],Window_NameEdit[_0xc8bd08(0x39c)][_0xc8bd08(0x46f)]['call'](this,_0x14c275,_0x477b6b),this[_0xc8bd08(0x204)]();},Window_CharaCreateNameEdit['prototype'][_0x4b42a7(0x31f)]=function(_0x58863d){const _0x4ea7eb=_0x4b42a7;this[_0x4ea7eb(0x376)]=_0x58863d,this[_0x4ea7eb(0x27b)]=this['_name']['length'],this[_0x4ea7eb(0x21a)]=this[_0x4ea7eb(0x376)],this['refresh']();},Window_CharaCreateNameEdit[_0x4b42a7(0x39c)]['itemRect']=function(_0x3778de){const _0xecbaff=_0x4b42a7,_0x533099=Window_NameEdit[_0xecbaff(0x39c)][_0xecbaff(0x3de)]['call'](this,_0x3778de);return _0x533099['y']=0x0,_0x533099;},Window_CharaCreateNameEdit['prototype'][_0x4b42a7(0x3a8)]=function(){const _0x566dd5=_0x4b42a7;let _0x5eb492=Window_NameEdit[_0x566dd5(0x39c)]['charWidth'][_0x566dd5(0x1da)](this);return _0x5eb492+=Window_CharaCreateNameEdit[_0x566dd5(0x21f)][_0x566dd5(0x362)],_0x5eb492;},Window_CharaCreateNameEdit['prototype']['drawChar']=function(_0x1c7504){const _0x52b915=_0x4b42a7,_0x849fd2=this[_0x52b915(0x3de)](_0x1c7504);this['resetTextColor'](),this[_0x52b915(0x1a8)](this[_0x52b915(0x376)][_0x1c7504]||'',_0x849fd2['x'],_0x849fd2['y'],_0x849fd2['width'],_0x52b915(0x3a5));};function Window_CharaCreateNameInput(){const _0x89ccd7=_0x4b42a7;this[_0x89ccd7(0x1dd)](...arguments);}Window_CharaCreateNameInput['prototype']=Object[_0x4b42a7(0x426)](Window_NameInput[_0x4b42a7(0x39c)]),Window_CharaCreateNameInput[_0x4b42a7(0x39c)]['constructor']=Window_CharaCreateNameInput,Window_CharaCreateNameInput['SETTINGS']={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x28e)]??0x0},Window_CharaCreateNameInput[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x526a64){const _0x34af49=_0x4b42a7;Window_NameInput[_0x34af49(0x39c)][_0x34af49(0x1dd)][_0x34af49(0x1da)](this,_0x526a64),this[_0x34af49(0x3aa)]=0x0,this[_0x34af49(0x2d7)]();},Window_CharaCreateNameInput[_0x4b42a7(0x39c)][_0x4b42a7(0x25f)]=function(_0x108ccb){const _0x2174e1=_0x4b42a7;this[_0x2174e1(0x2af)]=_0x108ccb,this[_0x2174e1(0x204)](),this['updateCursor']();},Window_CharaCreateNameInput['prototype'][_0x4b42a7(0x419)]=function(){const _0x3faa0c=_0x4b42a7;this[_0x3faa0c(0x2af)]['back']()?SoundManager[_0x3faa0c(0x38d)]():(SoundManager[_0x3faa0c(0x38d)](),SceneManager[_0x3faa0c(0x1d4)][_0x3faa0c(0x45c)]());};function Window_CharaCreateConfirmData(){const _0x6c295b=_0x4b42a7;this[_0x6c295b(0x1dd)](...arguments);}function _0x4974(_0x2635f4,_0x5210dd){const _0x2e9257=_0x2e92();return _0x4974=function(_0x497473,_0x25d783){_0x497473=_0x497473-0x1a5;let _0x16157e=_0x2e9257[_0x497473];return _0x16157e;},_0x4974(_0x2635f4,_0x5210dd);}Window_CharaCreateConfirmData[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_Base['prototype']),Window_CharaCreateConfirmData[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_CharaCreateConfirmData,Window_CharaCreateConfirmData['SETTINGS']={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)][_0x4b42a7(0x41f)]??0x0},Window_CharaCreateConfirmData[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x15310a){const _0x31ca68=_0x4b42a7;Window_Base[_0x31ca68(0x39c)][_0x31ca68(0x1dd)][_0x31ca68(0x1da)](this,_0x15310a),this[_0x31ca68(0x3aa)]=0x0;},Window_CharaCreateConfirmData[_0x4b42a7(0x39c)]['refresh']=function(){const _0x1881f6=_0x4b42a7;this['contents'][_0x1881f6(0x256)](),this[_0x1881f6(0x38c)](),this[_0x1881f6(0x288)](),this[_0x1881f6(0x1cd)]();},Window_CharaCreateConfirmData['prototype'][_0x4b42a7(0x2e2)]=function(_0x12b4c7,_0x54db5d,_0x277d15){const _0x7d5f69=_0x4b42a7,_0x28f7cc=this[_0x7d5f69(0x41a)](),_0x1133fa=_0x28f7cc,_0x5dacea=this[_0x7d5f69(0x482)]()*_0x277d15;this['drawTextEx'](_0x12b4c7,_0x1133fa,_0x5dacea),this[_0x7d5f69(0x2ac)](),this[_0x7d5f69(0x247)](_0x54db5d,_0x1133fa+_0x28f7cc*0x4,_0x5dacea+this[_0x7d5f69(0x482)]());},Window_CharaCreateConfirmData['prototype']['drawName']=function(){const _0xe694fa=_0x4b42a7,_0x2e9d19=TextManager[_0xe694fa(0x1f4)]['confirm'][_0xe694fa(0x3a3)],_0x22a83e=SceneManager[_0xe694fa(0x1d4)][_0xe694fa(0x47c)]['_text'];this[_0xe694fa(0x2e2)](_0x2e9d19,_0x22a83e,0x0);},Window_CharaCreateConfirmData['prototype']['drawClass']=function(){const _0x37ce75=_0x4b42a7,_0xe654b0=TextManager[_0x37ce75(0x1f4)][_0x37ce75(0x2f9)][_0x37ce75(0x1d2)],_0x22cb26=SceneManager[_0x37ce75(0x1d4)][_0x37ce75(0x23c)][_0x37ce75(0x306)]();let _0x1749c1=_0x22cb26['ClassID'];this[_0x37ce75(0x294)]&&!this[_0x37ce75(0x2c2)]['retrain'][_0x37ce75(0x1d2)]&&(_0x1749c1=this[_0x37ce75(0x2c2)][_0x37ce75(0x2ab)]['currentClass']()['id']);const _0x30183a=$dataClasses[_0x1749c1];let _0x40b811=_0x30183a[_0x37ce75(0x3a3)];if(Scene_CreateCharacter[_0x37ce75(0x21f)][_0x37ce75(0x1fe)]){const _0x33288b=VisuMZ[_0x37ce75(0x1bd)][_0x37ce75(0x227)],_0x2e0b3f=_0x30183a['note']||'';let _0x35f7d1=0x0;_0x2e0b3f[_0x37ce75(0x241)](_0x33288b[_0x37ce75(0x425)])&&(_0x35f7d1=Number(RegExp['$1'])),_0x40b811='\x5cI[%1]%2'[_0x37ce75(0x34f)](_0x35f7d1,_0x40b811);}this[_0x37ce75(0x2e2)](_0xe654b0,_0x40b811,0x2);},Window_CharaCreateConfirmData[_0x4b42a7(0x39c)][_0x4b42a7(0x1cd)]=function(){const _0x53a8b9=_0x4b42a7,_0x880fdb=TextManager[_0x53a8b9(0x1f4)]['confirm'][_0x53a8b9(0x2a3)],_0x489971=SceneManager['_scene'][_0x53a8b9(0x420)]();if(_0x489971<=0x0)return;let _0xf5f8c7=String(_0x489971);Imported['VisuMZ_3_VisualGoldDisplay']?_0xf5f8c7=VisuMZ[_0x53a8b9(0x3ac)][_0x53a8b9(0x30f)](_0x489971):(_0xf5f8c7+=_0x53a8b9(0x46d)['format'](VisuMZ[_0x53a8b9(0x252)][_0x53a8b9(0x412)][_0x53a8b9(0x3fe)]['ColorSystem'],TextManager['currencyUnit']),_0xf5f8c7+=_0x53a8b9(0x2d0)['format'](VisuMZ[_0x53a8b9(0x252)][_0x53a8b9(0x412)][_0x53a8b9(0x1c3)][_0x53a8b9(0x255)]||0x0)),this[_0x53a8b9(0x2e2)](_0x880fdb,_0xf5f8c7,0x4);},Window_CharaCreateConfirmData[_0x4b42a7(0x39c)][_0x4b42a7(0x403)]=function(_0x3cec54){const _0x22cf33=_0x4b42a7;this['_retrainMode']=!![],this[_0x22cf33(0x2c2)]=_0x3cec54;};function Window_CharaCreateConfirmCommand(){this['initialize'](...arguments);}Window_CharaCreateConfirmCommand[_0x4b42a7(0x39c)]=Object['create'](Window_HorzCommand['prototype']),Window_CharaCreateConfirmCommand['prototype'][_0x4b42a7(0x2a8)]=Window_CharaCreateConfirmCommand,Window_CharaCreateConfirmCommand[_0x4b42a7(0x21f)]={'bgType':VisuMZ['CharaCreationSys']['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x30d)]??0x0,'confirmIcon':VisuMZ['CharaCreationSys'][_0x4b42a7(0x412)][_0x4b42a7(0x30b)]['ConfirmCommandWindow_ConfirmIcon']??0xa4,'cancelIcon':VisuMZ[_0x4b42a7(0x1bd)]['Settings']['Vocab'][_0x4b42a7(0x30d)]??0xa8,'playShopSound':VisuMZ[_0x4b42a7(0x1bd)]['Settings'][_0x4b42a7(0x408)][_0x4b42a7(0x459)]??!![]},Window_CharaCreateConfirmCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x1dd)]=function(_0x4eab79){const _0x5046c9=_0x4b42a7;Window_HorzCommand['prototype']['initialize']['call'](this,_0x4eab79),this[_0x5046c9(0x3aa)]=0x0,this[_0x5046c9(0x2d7)]();},Window_CharaCreateConfirmCommand['prototype'][_0x4b42a7(0x271)]=function(){return 0x2;},Window_CharaCreateConfirmCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x2b3)]=function(){const _0xccea98=_0x4b42a7;this[_0xccea98(0x3bb)](),this['addReviseCommand']();},Window_CharaCreateConfirmCommand['prototype']['addConfirmCommand']=function(){const _0x21b2e3=_0x4b42a7;let _0x1e2c14=TextManager[_0x21b2e3(0x1f4)][_0x21b2e3(0x2f9)]['ok'],_0x103046=Window_CharaCreateConfirmCommand['SETTINGS']['confirmIcon'];Scene_CreateCharacter[_0x21b2e3(0x21f)][_0x21b2e3(0x1fe)]&&(_0x1e2c14=_0x21b2e3(0x2da)[_0x21b2e3(0x34f)](_0x103046,_0x1e2c14)),this[_0x21b2e3(0x3b3)](_0x1e2c14,'finalize',!![]);},Window_CharaCreateConfirmCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x32e)]=function(){const _0xb5aee4=_0x4b42a7;let _0x43f31b=TextManager[_0xb5aee4(0x1f4)][_0xb5aee4(0x2f9)][_0xb5aee4(0x21b)],_0x3e042a=Window_CharaCreateConfirmCommand[_0xb5aee4(0x21f)][_0xb5aee4(0x1f0)];Scene_CreateCharacter[_0xb5aee4(0x21f)][_0xb5aee4(0x1fe)]&&(_0x43f31b='\x5cI[%1]%2'[_0xb5aee4(0x34f)](_0x3e042a,_0x43f31b)),this['addCommand'](_0x43f31b,_0xb5aee4(0x21b),!![]);},Window_CharaCreateConfirmCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x428)]=function(_0x4e2f4d){const _0x2acdea=_0x4b42a7,_0x3febae=this[_0x2acdea(0x248)](_0x4e2f4d);this[_0x2acdea(0x1d6)](),this[_0x2acdea(0x41b)](this[_0x2acdea(0x366)](_0x4e2f4d));const _0x4868d3=this[_0x2acdea(0x1b1)](_0x4e2f4d),_0x467120=this[_0x2acdea(0x2d3)](_0x4868d3)[_0x2acdea(0x2c0)],_0x15c68c=_0x3febae['x']+Math['floor']((_0x3febae['width']-_0x467120)/0x2);this[_0x2acdea(0x247)](_0x4868d3,_0x15c68c,_0x3febae['y']);},Window_CharaCreateConfirmCommand[_0x4b42a7(0x39c)][_0x4b42a7(0x1c2)]=function(){SoundManager['playCreateCharacter']();};function Window_SelectCreateCharacter(){const _0x566031=_0x4b42a7;this[_0x566031(0x1dd)](...arguments);}Window_SelectCreateCharacter[_0x4b42a7(0x39c)]=Object[_0x4b42a7(0x426)](Window_MenuStatus[_0x4b42a7(0x39c)]),Window_SelectCreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x2a8)]=Window_SelectCreateCharacter,Window_SelectCreateCharacter[_0x4b42a7(0x21f)]={'bgType':VisuMZ[_0x4b42a7(0x1bd)][_0x4b42a7(0x412)][_0x4b42a7(0x408)]['SelectCharaWindow_BgType']??0x0},Window_SelectCreateCharacter['prototype'][_0x4b42a7(0x1dd)]=function(_0x31e491){const _0x239a13=_0x4b42a7;this[_0x239a13(0x446)]=_0x239a13(0x3e2),Window_MenuStatus[_0x239a13(0x39c)][_0x239a13(0x1dd)][_0x239a13(0x1da)](this,_0x31e491),this[_0x239a13(0x268)](),this['selectLast']();},Window_SelectCreateCharacter['prototype'][_0x4b42a7(0x216)]=function(_0x3c8c37){const _0x44c8b8=_0x4b42a7;this['_filterType']=_0x3c8c37,this[_0x44c8b8(0x204)]();},Window_SelectCreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x416)]=function(){const _0x1172f3=_0x4b42a7;if(this['_filterType']===_0x1172f3(0x39d))return $gameParty[_0x1172f3(0x27d)]();if(this['_filterType']==='retrain')return $gameParty[_0x1172f3(0x44b)]();return $gameParty[_0x1172f3(0x3fb)]();},Window_SelectCreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x40b)]=function(){return this['actorGroup']()['length'];},Window_SelectCreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1a9)]=function(){const _0x4dbfb3=_0x4b42a7;return ImageManager[_0x4dbfb3(0x2fa)];},Window_SelectCreateCharacter['prototype'][_0x4b42a7(0x43d)]=function(_0x48e3f3){const _0x2750a7=_0x4b42a7;return this[_0x2750a7(0x416)]()[_0x48e3f3];},Window_SelectCreateCharacter['prototype'][_0x4b42a7(0x368)]=function(){const _0xd4616a=_0x4b42a7;return this['actor'](this[_0xd4616a(0x3e7)]());},Window_SelectCreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x3c2)]=function(){const _0x300fdc=_0x4b42a7;Window_Selectable[_0x300fdc(0x39c)][_0x300fdc(0x3c2)][_0x300fdc(0x1da)](this);},Window_SelectCreateCharacter[_0x4b42a7(0x39c)]['selectLast']=function(){const _0x1e5d67=_0x4b42a7;this[_0x1e5d67(0x3a2)](0x0);},Window_SelectCreateCharacter[_0x4b42a7(0x39c)][_0x4b42a7(0x1c2)]=function(){const _0x1172dc=_0x4b42a7;if(this['_filterType']===_0x1172dc(0x39d))SoundManager[_0x1172dc(0x35f)]();else this[_0x1172dc(0x446)]==='retrain'?SoundManager[_0x1172dc(0x422)]():Window_Selectable['prototype'][_0x1172dc(0x1c2)][_0x1172dc(0x1da)](this);};