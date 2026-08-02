//=============================================================================
// VisuStella MZ - Dice Rolls & RNG Seeds
// VisuMZ_4_DiceRollsRngSeeds.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_DiceRollsRngSeeds = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DiceRollsRngSeeds = VisuMZ.DiceRollsRngSeeds || {};
VisuMZ.DiceRollsRngSeeds.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [DiceRollsRngSeeds]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Dice_Rolls_and_RNG_Seeds_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * Games that use random elements in their game can benefit by using visualized
 * Dice Rolls in order to give players an understanding of what kind of logic
 * is happening behind the randomization. Various things like switches, items,
 * and skills can also affect the roll values to give the player more control
 * over the nature of RNG. However, to give the game developer more control,
 * Random Number Seeds are also provided through this plugin. These seeds allow
 * for games to function in a more controlled pattern and prevent things like
 * save scumming for better results. Though the numbers themselves are still
 * random, they will exhibit predetermined and predictable outcomes through the
 * usage of Plugin Commands.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Visualized Dice Rolls can be called through Plugin Commands, using 4-sided
 *   dice, 6-sided dice, 8-sided, 10-sided, 12-sided, and 20-sided dice.
 * * Dice Rolls can be modified through dice effects, either automatic or bonus
 *   effets using player input.
 * * Dice effects include changing the number of Dice Rolled, the sides each
 *   dice has, and/or modifiers that affect the final roll.
 * * Random Number Seeds allow for predetermined randomized outcomes when
 *   rolling for random numbers.
 * * Custom Random Number Seeds can be numbers or text, allowing you to make
 *   truly unique cases for various random number batches.
 * * Dice Rolls can also be controlled through Random Number Seeds.
 * * Reset the custom seed state and begin the seed anew.
 * * Notetags can allow skills and items to also utilize Random Number Seeds to
 *   give RNG-generated results.
 * * "Daily" effect can affect and provide specialized Random Number Seeds for
 *   just that day.
 * * "Unique" effect will affect and provide specialized Random Number Seed for
 *   that save game and any other branching saves made after.
 * * Control these seeded random numbers through Plugin Commands or JavaScript
 *   script calls.
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
 * Dice Rolls Visualized
 * ============================================================================
 *
 * This section explains how visualized Dice Rolls work. These visualized Dice
 * Rolls give a player a visual understanding of how the randomized numbers
 * play out before them.
 *
 * ---
 * 
 * === Dice Count, Advantage, Disadvantage ===
 * 
 * Depending on the type of Dice Roll you're making, dice count can mean
 * different things. For the Plugin Command "Dice: Roll Value", the dice count
 * refers to just the total number of Dice Rolled, and from there, the highest,
 * lowest, average, or total amount calculated from the dice will be recorded.
 * 
 * However, when using the Plugin Command "Dice: Target Value", the mechanics
 * known as "Advantage" and "Disadvantage" are used.
 * 
 * When in an "Advantage" state, the player throws multiple dice (anything
 * above 1 dice). From there, the highest value is selected if going for
 * "above/equal" target value. The lowest value is selected if the Plugin
 * Command has the player aiming for below/equal target value.
 * 
 * In a "Disadvantage" state, just like with the "Advantage" state, the player
 * throws multiple dice. However, the opposite happens. When going for
 * above/equal target value, instead of selecting the highest value, the lowest
 * dice value is selected instead. When going for "below/equal" target value,
 * the highest value is selected rather than the lowest.
 * 
 * ---
 * 
 * === Dice Sides ===
 * 
 * The number of sides a dice has will be either 4, 6, 8, 10, 12, or 20 for the
 * purpose of this plugin. While we can create more options, these are the most
 * popular polyhedral dice that you will see, stemming from a variety of board
 * games and tabletop RPG's. These dice will also be known as D4, D6, D8, D10,
 * D12, and D20 each referring to the number of sides they have.
 * 
 * The number of sides a dice has will determine its rank also. For the purpose
 * of this plugin, there are six ranks to match the six types of dice we have
 * available.
 * 
 *   Rank 1 - D4
 *   Rank 2 - D6
 *   Rank 3 - D8
 *   Rank 4 - D10
 *   Rank 5 - D12
 *   Rank 6 - D20
 * 
 * Ranks are used in Dice Roll automatic effects and bonus effects. By raising
 * a dice's rank, a D6 can transform into a D8 for example. Lowering a dice's
 * rank can transform said D6 into a D4. For this plugin, ranks cannot go below
 * Rank 1 (D4) and cannot go above Rank 6 (D20).
 * 
 * ---
 * 
 * === Dice Modifiers ===
 * 
 * When rolls are decided, modifiers are then applied to the Dice Roll number.
 * For example, if a player has "Modifier +3" and rolls a 10, the number adds
 * the +3 modifier and becomes a 13. The 13 is then used to record the numeric
 * value of the roll and/or determine if the roll is successful or not. The
 * modified roll number can also exceed the number of sides on the dice.
 * 
 * Negative modifiers can also exist and send the roll value going the other
 * way. For example, if a player has "Modifier -2" and rolls a 10, the number
 * applies the -2 modifier and becomes 8 instead. The 8 is then used to record
 * the numeric value of the roll and/or determine if the roll is successful or
 * not. The modified roll number can also go below 1 and reach 0 or negative
 * numbers, too.
 * 
 * Modifiers can also have a random element. This random element is calculated
 * when the modifier is being applied and will utilize the Dice Roll's Random
 * Number Seed if specified. As such, the display range for the modifier will
 * show the modifier minimum with the potential maximum modifier.
 * 
 * ---
 * 
 * === Natural Rolls ===
 * 
 * Regarding dice modifiers, there is a slight rule tweak if you are using the
 * Plugin Command "Dice: Target Value" to roll dice. If the command option of
 * "Allow Natural Rolls?" parameter is enabled and set to "true", then there
 * are two special numbers that, when rolled, will ignore modifiers and will
 * count as either an automatic success or an automatic failure. These numbers
 * are 1 and whatever number is the maximum number of sides on the dice.
 * 
 * For example, on a D20, a Natural 1 will result in instant failure while a
 * Natural 20 will result in instant success regardless of the modifiers or
 * whatever target value needs to be reached. If a target value needed to be
 * reached happens to be 25, and the player rolls a Natural 20, it will still
 * count as a success provided that the player is going for an "above/equal"
 * target value.
 * 
 * The opposite is true when going for a "below/equal" target value. Rolling a
 * Natural 1 will count as an automatic success while rolling the max value of
 * the dice will count as an automatic failure regardless of the target value.
 * 
 * Natural rolls will still be recorded normally to variables and switches.
 * There's no indicators suggesting that they are "critical successes" or
 * "critical failures". Instead, just as "success" and "failure". If you wish
 * to portray the "critical" nature of the roll, best use the variable to
 * determine if anything 1 and below, or anything equal or higher than max to
 * be considered "criticals" of either extreme.
 * 
 * ---
 * 
 * === Automatic Effects ===
 * 
 * Automatic Effects are dice effects that are automatically applied at the
 * start of a Dice Roll, from before the Dice Roll appears on screen. These
 * effects can modify dice counts, alter advantage and disadvantage, raise or
 * lower dice ranks, and adjust Dice Roll modifiers. The effects range from
 * general effects that always occur or based off certain JavaScript conditions
 * to other effects like if a certain actor has a skill available to use.
 * 
 * If, for whatever reason, an Automatic Effect's conditions were to suddenly
 * be enabled during the middle of the Dice Roll, it would not suddenly become
 * active and grant the dice effects to the roll. Likewise, if an Automatic
 * Effect's conditions were to suddenly be unmet during the middle of a Dice
 * Roll, the dice effects would not be revoked either. The Automatic Effects to
 * be used will always be determined at the start, before the Dice Roll even
 * appears on screen.
 * 
 * ---
 * 
 * === Bonus Effects ===
 * 
 * Unlike Automatic Effects, Bonus Effects are applied by the player manually.
 * They can alter dice counts, advantage, disadvantage, ranks, and modifiers
 * just like Automatic Effects can, but the player has the option of doing so.
 * Some effects have a limited number of times they can be used while others.
 * Other effects will not only require an actor to know a specific skill, but
 * also to be able to pay for them.
 * 
 * These Bonus Effects, once selected and activated, will grant their dice
 * effects for the rest of the Dice Roll. Even if the conditions would be unmet
 * later, the dice effects will remain until the Dice Roll finishes. However,
 * the Bonus Effects that are available to be selected from the start will be
 * the only ones available for selection at all during the Dice Roll. This
 * means that even if a show condition (like switches or JS: Show) is met
 * halfway through, it will not appear in the list unless it was there from the
 * start. The same goes for variable, item, and skill conditions. This is to
 * match the same enabling/visibility settings that Automatic Effects have.
 * 
 * ---
 *
 * ============================================================================
 * Random Number Seeds
 * ============================================================================
 *
 * This section explains how Random Number Seeds work.
 *
 * ---
 *
 * === Random Number Seeds ===
 * 
 * Seeds will initialize a random number generator. Retrieving random numbers
 * from this same seed will give the same sequence of random numbers when
 * restarted or continued. If a different seed is used, then different number
 * sequences will occur. It's useful for replication experiments or simulations
 * while preventing things like save scumming for different randomized results.
 * 
 * Let's take a look at how this works. If we use the Plugin Command to
 * generate a random number between 0 and 100 using the seed "RpgTsukuru", then
 * the numbers will appear in this order:
 * 
 *   11   82   25   2   16   44   69   41   87   97   43   99   2   21   15
 * 
 * And so on. This will occur whenever you start a new game or reset the 
 * "RpgTsukuru" seed in that exact order when looking for numbers between 0 and
 * 100. This is because the algorithm used to solve for the Random Number Seed
 * will always yield those results adding a level of predictability.
 * 
 * *NOTE* Keep in mind that when you are using the script call, the value you
 * will get will be a float (a decimal number between 0 and 1 like 0.123456789)
 * and not a clean and clear integar like with the Plugin Commands. This is to
 * replicate the "Math.random()" JavaScript function so all you have to do is
 * simply replace "Math.random()" with "$rngSeed('RpgTsukuru')" to get the kind
 * of randomized results you would with Math.random() except through a seed.
 * 
 * Now, the reason why we would have multiple seed keys is so that you can have
 * repeatable results for things that are totally different from one another.
 * For instance, "SafeCombination" will have a different door locked than
 * "HideAndSeek" for different simulations. This allows you to do them in any
 * order and have the safe combinations and hide and seek locations be the same
 * per the simulation you are doing things in.
 *
 * ---
 *
 * === Daily Marker ===
 * 
 * For those who want certain puzzles to vary from day to day, but will always
 * have the same starting pattern upon a reset, then apply the Daily Marker to
 * the Random Number Seed either in the Plugin Command or script call. This
 * will make it yield different results than from the non-version, so do NOT
 * expect it to give the same number results.
 * 
 * The daily marker will change at 12:00am on the dot based on the player's
 * PC's current time zone and time/date settings.
 *
 * ---
 *
 * === Save-Unique Marker ===
 * 
 * This plugin will drop a unique marker for each playthrough and that marker
 * is the "Save-Unique" marker. It can be applied to a Random Number Seed to
 * make it different from the pure seed and/or daily marker-applied seed. This
 * way, the "RpgTsukuru" seed won't yield the same numbers as it did for a past
 * playthrough.
 * 
 * Keep in mind that since this is per save/playthrough, that means any
 * branching saves will retain the same marker and provide the same results
 * through seeded random numbers.
 * 
 * *NOTE* If this plugin is installed after multiple saves have been made, then
 * each of those saves will have their own "Save-Unique" marker regardless of
 * their origins, shared or not. This is NOT a bug and it cannot be changed.
 *
 * ---
 * 
 * === Potential Uses for Random Number Seeds ===
 * 
 * Here are some potential uses for Random Number Seeds:
 * 
 * * Randomized puzzles: Puzzles can have different randomized starting points,
 * and by seeding them, it prevents the player from abusing the reset
 * function to get a favorable starting point.
 * 
 * * Randomized cutscenes: Sometimes, you want certain event cutscenes to
 * trigger randomly. This allows for that to happen without the player save
 * scumming to get the desired cutscene. Instead, the player will have to
 * make do with whatever cutscene they found.
 * 
 * * Randomized gambling: Does your game have a casino? Do you want to make
 * sure your player has to live with the conequences of the risks taken? By
 * using a Random Number Seed, reloading a save is no longer possible to let
 * them escape their fate from chance.
 * 
 * * Randomized choices: If you're using the VisuStella MZ Message Core and
 * using the <Shuffle> text code for choices, you can use this plugin's text
 * codes to add in Random Number Seeds to allow for randomized choices, too.
 * By using the Random Number Seed, reloading a save won't let the player get
 * new choices with the shuffled choices.
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
 * Those using VisuStella MZ's Battle Core can launch visualized Dice Roll
 * Plugin Commands from this plugin during the middle of Action Sequences as
 * long as there is not a conflicting effect during it.
 * 
 * Conflict effects include Active Chain Skills, Input Combo Skills, or 
 * Evolution Matrix Skills. Dice-related Plugin Commands will not run at all
 * while these skill mechanics are active.
 * 
 * ---
 * 
 * VisuMZ_1_ItemsEquipsCore
 * 
 * During Dice Rolls, you can have certain Automatic Effects or Bonus Effects
 * require the presence or usage of items, weapons, and/or armors. If those
 * items have a <Color: x> notetag inside them, the VisuStella MZ Items &
 * Equips Core will allow the color effect to go through. However, if the color
 * notetag is <Color: #rrggbb>, extra help will be required from the VisuStella
 * MZ Message Core for it to work.
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
 * === Action-Related Notetags ===
 * 
 * ---
 *
 * <RNG Seed: x>
 * <Daily Seed: x>
 * <Unique Seed: x>
 * <Daily Unique Seed: x>
 *
 * - Used for: Skill, Item Notetags
 * - Causes the skill or item to utilize Random Number Seeds to yield
 *   predictable outcomes for damage, hit rate, critical rate, etc.
 * - Replace 'x' with the "seed" you would like to use.
 *   - Replace 'x' with "auto" to automatically name the seed based on the
 *     skill/item's name.
 *   - Seed will be furthered modified by the plugin based on the user, the
 *     target, and the action used as to prevent RNG manipulation.
 * - "RNG Seed" variant is a generalized seed.
 * - "Daily Seed" variant will have results vary based on the day.
 * - "Unique Seed" variant will have results vary based on save marker.
 * - "Daily Unique Seed" variant will have results vary based on the day and
 *     and save marker.
 * - Only applies to the happenings of inside Game_Action.prototype.apply and
 *   Action Sequence - MECH: Action Effect.
 *   - For all other things, utilize the Plugin Commands for this plugin to
 *     grab RNG-generated values within variables and use that or use the
 *     script calls to access RNG-generated results.
 * - If this notetag is not used, default to the settings found in the Plugin
 *   Parameters for the default action Random Number Generator seed.
 * 
 *   Example:
 * 
 *     <Unique Seed: RpgTsukuru>
 *
 * ---
 * 
 * <No RNG Seed>
 * 
 * - Used for: Skill, Item Notetags
 * - Used to suppress the Plugin Parameter's default action Random Number
 *   Generator seed and to prevent this skill/item from using RNG seeds.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Type-Related Text Codes ===
 * 
 * ---
 *
 * ----------------------   ---------------------------------------------------
 * Text Code                Effect (Show Choice Text Only)
 * ----------------------   ---------------------------------------------------
 * 
 * <RNG Seed: x>            Allows <Shuffle> text code to use seed 'x'.
 *                          Requires VisuMZ_1_MessageCore!
 * 
 * <Daily Seed: x>          Allows <Shuffle> text code to use daily seed 'x'.
 *                          Requires VisuMZ_1_MessageCore!
 * 
 * <Unique Seed: x>         Allows <Shuffle> text code to use save unique
 *                          seed 'x'. Requires VisuMZ_1_MessageCore!
 * 
 * <Daily Unique Seed: x>   Allows <Shuffle> text code to use daily and save
 *                          unique seed 'x'. Requires VisuMZ_1_MessageCore!
 * 
 * Example:
 * 
 *   Show Choices:
 *   
 *     Choice A <Shuffle: 3>
 *     Choice B <Unique Seed: RpgTsukuru>
 *     Choice C
 *     Choice D
 *     Choice E
 *     Choice F
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
 * === Dice Plugin Commands ===
 * 
 * ---
 * 
 * Dice: Roll Value
 * - Rolls a dice for any value and stores the result to a variable.
 * 
 *   Dice Sides:
 *   - How many sides does this dice have?
 * 
 *     Total Dice Rolls:
 *     - How many Dice Rolls do you want out of this?
 *     - You may use code.
 *     - Dice Rolls have a cap.
 * 
 *   Variable ID:
 *   - Insert the ID of the Variable to save the Dice Roll results to.
 *   - Use 0 to not use.
 *   - Results are after modifiers.
 * 
 *     Result Type:
 *     - What type of result do you want recorded to the variable?
 * 
 *   Title Text:
 *   - What is the title of this Dice Roll?
 *   - Text codes allowed.
 *   - Leave empty to not use.
 * 
 *   Appearance & Seed:
 *   - What are the dice appearance & seed settings used for this Dice Roll?
 * 
 *   Auto Dice Effects:
 *   - Adjust the modifier settings that automatically apply to the Dice Roll.
 * 
 *   Bonus Dice Effects:
 *   - Adjust the modifier settings are optionally applied to the Dice Roll
 *    selected by the player.
 * 
 * ---
 * 
 * Dice: Target Value
 * - Rolls a dice for a target value and stores the result to a variable.
 * 
 *   Dice Sides:
 *   - How many sides does this dice have?
 * 
 *   Switch ID:
 *   - Insert the ID of the Switch to save the Dice Roll results to.
 *   - Use 0 to not use.
 * 
 *     Allow Natural Rolls?:
 *     - Allow natural rolls which bypass modifiers?
 *     - Natural 1 or Max = auto-fail or auto-success
 * 
 *     Result Type:
 *     - What type of result do you want recorded to the switch?
 * 
 *     Target Roll Value:
 *     - What should the target value be equal to?
 *     - You may use code.
 * 
 *     Variable ID:
 *     - Insert the ID of the Variable to save the Dice Roll value to.
 *     - Use 0 to not use.
 *     - Results are after modifiers.
 * 
 *   Title Text:
 *   - What is the title of this Dice Roll?
 *   - Text codes allowed. Leave empty to not use.
 * 
 *   Appearance & Seed:
 *   - What are the dice appearance & seed settings used for this Dice Roll?
 * 
 *   Auto Dice Effects:
 *   - Adjust the modifier settings that automatically apply to the Dice Roll.
 * 
 *   Bonus Dice Effects:
 *   - Adjust the modifier settings are optionally applied to the Dice Roll
 *    selected by the player.
 * 
 * ---
 * 
 * Dice Appearance & Seed Settings
 * 
 *   Appearance Overrides:
 * 
 *     D4 Image Filename(s):
 *     D6 Image Filename(s):
 *     D8 Image Filename(s):
 *     D10 Image Filename(s):
 *     D12 Image Filename(s):
 *     D20 Image Filename(s):
 *     - Use custom images for this dice?
 *     - Priority over colors.
 *     - Overrides default parameters.
 *     - Location: img/pictures/
 * 
 *     Dice Colors(s):
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 *     - Overrides default parameters.
 * 
 *   Seed:
 *   - What is the Random Number Seed used for this Dice Roll?
 *   - Use numbers or text.
 *   - Use "none" to not use a seed.
 * 
 *     Daily Marker:
 *     - Apply daily marker to Random Number results?
 * 
 *     Save-Unique Marker:
 *     - Apply save-unique marker to Random Number results?
 * 
 * ---
 * 
 * Auto Dice Effects
 * 
 *   General Auto-Effects:
 *   - These auto-effects will be automatically activated as long its
 *     conditions are met at the start of the dice-roll.
 * 
 *   Variable Requirements:
 *   - These auto-effects require a variable(s) to be at least a certain value
 *     to automatically activate.
 * 
 *   Item Requirements:
 *   - These auto-effects require an item(s) to have a certain quantity to
 *     automatically activate.
 * 
 *   Weapon Requirements:
 *   - These auto-effects require a weapon(s) to be in party possession or is
 *     equipped to automatically activate.
 * 
 *   Armor Requirements:
 *   - These auto-effects require an armor(s) to be in party possession or is
 *     equipped to automatically activate.
 * 
 *   Skill Requirements:
 *   - These auto-effects require a skill(s) to be available within the party
 *     to automatically activate.
 * 
 * ---
 * 
 * Auto-Effects
 * - This section is a consolidation of the various Auto Dice Effects.
 * 
 *   Auto Effect Name:
 *   - What is the name of this effect?
 *   - Text codes allowed.
 * 
 *     Auto Effect Icon:
 *     - The icon used for this effect.
 * 
 *   Reference Data:
 * 
 *     Required Variable ID:
 *     - This variable is to be checked from.
 *     - Changes don't affect effect mid-roll.
 * 
 *       Required Value:
 *       - Variable requires at least this much in value.
 *       - You may use code.
 *       - Changes don't affect effect mid-roll.
 * 
 *     Required Item ID:
 *     - This is the item whose quantity is checked.
 *     - Changes don't affect effect mid-roll.
 * 
 *       Required Value:
 *       - Quantity requires at least this much in value.
 *       - You may use code.
 *       - Changes don't affect effect mid-roll.
 * 
 *     Required Weapon ID:
 *     - This is the weapon whose presence is checked.
 *     - Changes don't affect effect mid-roll.
 * 
 *       Include Equipped?:
 *       - Allow equipped weapons to be included in the count.
 * 
 *     Required Armor ID:
 *     - This is the armor whose presence is checked.
 *     - Changes don't affect effect mid-roll.
 * 
 *       Include Equipped?:
 *       - Allow equipped armors to be included in the count.
 * 
 *     Required Skill ID:
 *     - This is the skill whose presence is checked.
 *     - Changes don't affect effect mid-roll.
 * 
 *       Skill Learned Only?:
 *       - Require the skill to be learned only or allow temporary skills?
 * 
 *       Skill User(s):
 *       - Select which actor(s) to check for the required skill.
 *         - Party Leader
 *         - Any Party Member
 *         - Every Party Member
 *         - Any Battle Member
 *         - Every Battle Member
 *         - Any Specific Actor(s)
 *         - Every Specific Actor(s)
 * 
 *       Specific Actor ID(s):
 *       - Determine which "Specific Actor(s)" to pick from.
 *       - Specific actor(s) must be in the party, main or reserve.
 * 
 *       Show User Name?:
 *       - Shows the skill user's name next to the skill name?
 * 
 *       Require User Alive?:
 *       - Requires the skill user to be alive?
 *       - Or can they be dead or alive?
 * 
 *   Dice Effects:
 * 
 *     Count/Advantage:
 *     - Change dice count (roll value) or advantage/disadvantage
 *       (target value).
 *     - You may use code.
 * 
 *     Rank/Type:
 *     - Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 *     - You may use code.
 *     - Higher rank = more sides.
 * 
 *     Modifier (Static):
 *     - Alters the finalized rolled dice value.
 *     - You may use code.
 * 
 *     Modifier (Random):
 *     - Adds a random element to the dice value.
 *     - You may use code.
 * 
 *   Additional Text:
 * 
 *     Pre-Effect Text:
 *     - What text is added before the dice effects text?
 *     - Text codes allowed.
 * 
 *     Post-Effect Text:
 *     - What text is added after the dice effects text?
 *     - Text codes allowed.
 * 
 *   Effect Conditions:
 * 
 *     Switch ID:
 *     - This Switch is required to be ON to meet conditions.
 *     - Use 0 to not use.
 *     - Does not reveal mid-Dice Roll.
 * 
 *     JS: Condition:
 *     - JavaScript code used to determine the conditions for this dice effect
 *       to be automatically activated.
 *     - Does not reveal mid-Dice Roll.
 * 
 * ---
 * 
 * Bonus Dice Effects
 * 
 *   General Bonus Effects:
 *   - Add general bonus dice effects here that the player can select to use
 *     the effect.
 * 
 *   Variable Cost Effects:
 *   - Variable Bonus Effects require deducting from variable(s) as a cost to
 *     use the effect.
 * 
 *   Item Cost Effects:
 *   - Item Bonus Effects require consuming the target item(s) as a cost to use
 *     the effect.
 * 
 *   Weapon Cost Effects:
 *   - Weapon Bonus Effects require consuming the target weapon(s) as a cost to
 *     use the effect.
 * 
 *   Armor Cost Effects:
 *   - Armor Bonus Effects require consuming target the armor(s) as a cost to
 *     use the effect.
 * 
 *   Skill Cost Effects:
 *   - Skill Bonus Effects require paying skill costs to activate and use the
 *     effect.
 * 
 * ---
 * 
 * Bonus Effects
 * - This section is a consolidation of the various Bonus Dice Effects.
 * 
 *   Bonus Effect Name:
 *   - What is the name of this effect?
 *   - Text codes allowed.
 * 
 *     Bonus Effect Icon:
 *     - The icon used for this effect.
 * 
 *     Animation ID:
 *     - Play this animation when the effect activates.
 *     - Animation will play on the player character.
 * 
 *   Effect Costs:
 * 
 *     Variable Cost ID:
 *     - This variable is to be deducted from.
 *     - Changes do not reveal effect mid-Dice Roll.
 * 
 *       Cost Value:
 *       - Deduct this much from the target variable.
 *       - You may use code.
 * 
 *       Show Variable Cost?:
 *       - Show variable cost?
 * 
 *     Item Cost ID:
 *     - This item is to be deducted from.
 *     - Changes do not reveal effect mid-Dice Roll.
 * 
 *       Cost Value:
 *       - Deduct this much from the target item.
 *       - You may use code.
 * 
 *       Show Item Cost?:
 *       - Show item cost?
 * 
 *     Weapon Cost ID:
 *     - This weapon is to be deducted from.
 *     - Changes do not reveal effect mid-Dice Roll.
 * 
 *       Cost Value:
 *       - Deduct this much from the target weapon.
 *       - You may use code.
 * 
 *       Show Weapon Cost?:
 *       - Show weapon cost?
 * 
 *     Armor Cost ID:
 *     - This armor is to be deducted from.
 *     - Changes do not reveal effect mid-Dice Roll.
 * 
 *       Cost Value:
 *       - Deduct this much from the target armor.
 *       - You may use code.
 * 
 *       Show Armor Cost?:
 *       - Show armor cost?
 * 
 *     Skill Cost ID:
 *     - This skill's cost is to be paid by an actor.
 *     - Changes do not reveal effect mid-Dice Roll.
 * 
 *       Skill Learned Only?:
 *       - Require the skill to be learned only or allow temporary skills?
 * 
 *       Skill User(s):
 *       - Select which actor(s) to check for the required skill.
 *         - Party Leader
 *         - Any Party Member
 *         - Every Party Member
 *         - Any Battle Member
 *         - Every Battle Member
 *         - Any Specific Actor(s)
 *         - Every Specific Actor(s)
 * 
 *       Specific Actor ID(s):
 *       - Determine which "Specific Actor(s)" to pick from.
 *       - Specific actor(s) must be in the party, main or reserve.
 * 
 *       Show User Name?:
 *       - Shows the skill user's name next to the skill name?
 * 
 *       Require User Alive?:
 *       - Requires the skill user to be alive? Or can they be dead or alive?
 * 
 *       Show Skill Cost?:
 *       - Show skill cost?
 * 
 *     Maximum Uses:
 *     - How many times can this effect be used?
 *     - You may use code.
 *     - Over 1000000 for unlimited.
 * 
 *       Show Uses Left?:
 *       - Show how many uses are left?
 * 
 *   Dice Effects:
 * 
 *     Count/Advantage:
 *     - Change dice count (roll value) or advantage/disadvantage
 *       (target value).
 *     - You may use code.
 * 
 *     Rank/Type:
 *     - Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 *     - You may use code.
 *     - Higher rank = more sides.
 * 
 *     Modifier (Static):
 *     - Alters the finalized rolled dice value.
 *     - You may use code.
 * 
 *     Modifier (Random):
 *     - Adds a random element to the dice value.
 *     - You may use code.
 * 
 *   Additional Text:
 * 
 *     Pre-Cost Text:
 *     - What text is added before the dice cost text?
 *     - Text codes allowed.
 * 
 *     Post-Cost Text:
 *     - What text is added after the dice cost text?
 *     - Text codes allowed.
 * 
 *     Pre-Effect Text:
 *     - What text is added before the dice effects text?
 *     - Text codes allowed.
 * 
 *     Post-Effect Text:
 *     - What text is added after the dice effects text?
 *     - Text codes allowed.
 * 
 *   Effect Conditions:
 * 
 *     Show Switch ID:
 *     - This Switch is required to be ON to show effect.
 *     - Use 0 to not use.
 *     - Does not reveal mid-Dice Roll.
 * 
 *     Enable Switch ID:
 *     - This Switch is required to be ON to enable effect.
 *     - Use 0 to not use.
 * 
 *     JS: Show:
 *     - JavaScript code used to determine show conditions for this dice
 *       effect to become available for use.
 *     - Does not reveal mid-Dice Roll.
 * 
 *     JS: Enable:
 *     - JavaScript code used to determine enable conditions for this dice
 *       effect to become usable.
 * 
 *     JS: On Select:
 *     - JavaScript code used to determine what happens when this dice effect
 *       is selected and activated.
 * 
 * ---
 * 
 * === RNG Plugin Commands ===
 * 
 * ---
 *
 * RNG: Random Number Between X and Y
 * - Uses a seed to determine a random number between X and Y.
 * 
 *   Variable ID:
 *   - Insert the ID of the Variable to save this value to.
 * 
 *   Minimum:
 *   - Minimum value the random number can be.
 *   - You may use JavaScript code.
 * 
 *   Maximum:
 *   - Maximum value the random number can be.
 *   - You may use JavaScript code.
 * 
 *   Seed:
 *   - What is the Random Number Seed?
 *   - Use numbers or text.
 * 
 *   Daily Marker:
 *   - Apply daily marker to Random Number results?
 * 
 *   Save-Unique Marker:
 *   - Apply save-unique marker to Random Number results?
 * 
 * ---
 * 
 * RNG: Reset Random Seed
 * - Resets the random state for the target Random Number Seed.
 * 
 *   Seed:
 *   - What is the Random Number Seed?
 *   - Use numbers or text.
 * 
 *   Daily Marker:
 *   - Apply daily marker to Random Number Seed?
 * 
 *   Save-Unique Marker:
 *   - Apply save-unique marker to Random Number Seed?
 *
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Dice Roll-Related Script Calls ===
 * 
 * ---
 * 
 * $addDiceCount(value)
 * 
 * - Adds 'value' to the current Dice Count.
 * - Use with "Dice: Roll Value". Adds 'value' to current dice count.
 * - Best used with the "JS: On Select" parameter found within the bonus
 *   effects you can add to a Dice Roll Plugin Command.
 * 
 * ---
 * 
 * $addDiceAdvantage(value)
 * $addDiceDisadvantage(value)
 * 
 * - Adds 'value' to the current Dice Advantage/Disadvantage.
 * - Use with "Dice: Target Value". Adds 'value' to dice advantage or
 *   disadvantage. Advantages and disadvantages offset each other.
 * - Best used with the "JS: On Select" parameter found within the bonus
 *   effects you can add to a Dice Roll Plugin Command.
 * 
 * ---
 * 
 * $addDiceRank(value)
 * 
 * - Adds 'value' to the current Dice Rank.
 * - Ranks range from 1 to 6.
 *   - Rank 1 - D4
 *   - Rank 2 - D6
 *   - Rank 3 - D8
 *   - Rank 4 - D10
 *   - Rank 5 - D12
 *   - Rank 6 - D20
 * - Best used with the "JS: On Select" parameter found within the bonus
 *   effects you can add to a Dice Roll Plugin Command.
 * 
 * ---
 * 
 * $addDiceModifier(value)
 * $addDiceModRand(value)
 * 
 * - Adds 'value' to the current Dice Modifier or the potential Dice Modifier
 *   Random Range.
 * - Best used with the "JS: On Select" parameter found within the bonus
 *   effects you can add to a Dice Roll Plugin Command.
 * 
 * ---
 * 
 * === Random Seed-Related Script Calls ===
 * 
 * ---
 *
 * $rngSeed(seed)
 * $dailyRngSeed(seed)
 * $uniqueRngSeed(seed)
 * $dailyUniqueRngSeed(seed)
 * 
 * - Returns a float (a decimal number between 0 and 1) randomized from 'seed'.
 * - Replace 'seed' with a number or string representing the seed you wish to
 *   use to retrieve random numbers from.
 * - This will bump up the seed state to the next random number.
 * - Use the 'daily' variant for a customized seed based on the current date.
 * - Use the 'unique' variant for a customized seed based on the current save
 *   that will differ from other saves.
 * 
 * - Examples:
 * 
 *   - $rngSeed(12345)
 *   - $rngSeed("Don Miguel")
 * 
 *   - $dailyRngSeed(67890)
 *   - $dailyRngSeed("Yoji Ojima")
 * 
 *   - $uniqueRngSeed(246810)
 *   - $uniqueRngSeed("VisuStella")
 *
 * ---
 *
 * $resetRngSeed(seed)
 * $resetDailyRngSeed(seed)
 * $resetUniqueRngSeed(seed)
 * $resetDailyUniqueRngSeed(seed)
 * 
 * - Resets the seed state for random number generator 'seed' set.
 * - Replace 'seed' with a number or string representing the seed you wish to
 *   reset the seed state for.
 * - Use the 'daily' variant to reset the customized seed based on the current
 *   date.
 * - Use the 'unique' variant to reset the customized seed based on the current
 *   save that differs from other saves.
 * 
 * - Examples:
 * 
 *   - $resetRngSeed(12345)
 *   - $resetRngSeed("Don Miguel")
 * 
 *   - $resetDailyRngSeed(67890)
 *   - $resetDailyRngSeed("Yoji Ojima")
 * 
 *   - $resetUniqueRngSeed(246810)
 *   - $resetUniqueRngSeed("VisuStella")
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Dice Roll Settings
 * ============================================================================
 *
 * Adjust the Dice Roll settings to fit your game. These range from mechanics
 * to how the many-sided dice appear in-game and how the rolling animation will
 * play out.
 * 
 * If you do not use images for the various sided-dice, do not worry. This
 * plugin will use pre-rendered graphics to generate them for usage.
 *
 * ---
 *
 * Mechanics:
 * 
 *   Max Dice Count:
 *   - What is the maximum number of dice that can be thrown at a time?
 * 
 * ---
 * 
 * Dice Appearances:
 * 
 *   D4 Appearance:
 *   D6 Appearance:
 *   D8 Appearance:
 *   D10 Appearance:
 *   D12 Appearance:
 *   D20 Appearance:
 *   - Adjust the Dice Appearance settings for the dice here.
 * 
 *     Image Filename(s):
 *     - Use custom images for this dice?
 *     - Priority over colors.
 *     - Location: img/pictures/
 * 
 *     Dice Colors(s):
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Number Settings:
 * 
 *       Font Size:
 *       - Font size used for dice number.
 * 
 *       Number Outline:
 *       - What width to use for number outline?
 *       - Use 0 to not use an outline.
 * 
 *       Offset X:
 *       - Offsets the number x position.
 *       - Negative: left. Positive: right.
 * 
 *       Offset Y:
 *       - Offsets the number y position.
 *       - Negative: up. Positive: down.
 * 
 *     Position Settings:
 * 
 *       Offset X:
 *       - Offsets the sprite x position.
 *       - Negative: left. Positive: right.
 * 
 *       Offset Y:
 *       - Offsets the sprite y position.
 *       - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Color Ratios
 * 
 *   Border Ratio:
 *   - Used for generated colors.
 *   - Darkness ratio for border color.
 * 
 *   Color 1 Ratio:
 *   - Used for generated colors.
 *   - Darkness ratio for darker color.
 * 
 *   Color 2 Ratio:
 *   - Used for generated colors.
 *   - Darkness ratio for middle color.
 * 
 *   Color 3 Ratio:
 *   - Used for generated colors.
 *   - Darkness ratio for main color.
 * 
 * ---
 * 
 * Arrange Offset:
 * 
 *   Offset X:
 *   - Offsets the dice arrangement x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the dice arrangement y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Fade Settings:
 * 
 *   Fade In Duration:
 *   - How many frames it takes to fade in dice?
 *   - 60 frames = 1 second.
 * 
 *   Fade Out Duration:
 *   - How many frames it takes to fade out dice?
 *   - 60 frames = 1 second.
 * 
 *   Finalize Delay:
 *   - How many frames to wait before fading out?
 *   - 60 frames = 1 second.
 * 
 * ---
 * 
 * Rolling Effect:
 * 
 *   Dice Roll Duration:
 *   - How many frames it takes to roll a dice?
 *   - 60 frames = 1 second.
 * 
 *   Between Roll Delay:
 *   - How many frames between multiple dice rolls?
 *   - 60 frames = 1 second.
 * 
 *   Dice Roll Height:
 *   - How high should the dice jump up for its roll in pixels?
 * 
 *   Dice Rotate Speed:
 *   - How many degrees does the dice rotate per frame while rolling?
 * 
 * ---
 * 
 * Movement Settings:
 * 
 *   Move Duration:
 *   - How many frames it takes to move dice?
 *   - 60 frames = 1 second.
 * 
 *   Scaling Duration:
 *   - How many frames it takes to change dice scale?
 *   - 60 frames = 1 second.
 * 
 *   Number Climb Tick:
 *   - How many frames are there between number ticks?
 *   - 60 frames = 1 second.
 * 
 *   Max Number Duration:
 *   - Max number of frames to process number ticks?
 *   - 60 frames = 1 second.
 * 
 *   Number Color Shift:
 *   - Allow dice number colors to change due to modifiers?
 * 
 *   Pre-Modifier Delay:
 *   - Delay frames before applying modifiers?
 *   -60 frames = 1 second.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Random Seed Settings
 * ============================================================================
 *
 * Random Number Seeds are generated using the linear congruential generator
 * (LCG) algorithm to yield a sequence of pseudo-randomized numbers calculated
 * with a nearly predictable but non-repeating piecewise linear equation.
 * 
 * More information regarding the algorithm can be found here:
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 *
 * ---
 *
 * Linear Congruential Generator
 * 
 *   Modulus:
 *   - The linear congruential generator modulus.
 *   - Do not change unless you know what you're doing.
 * 
 *   Multiplier:
 *   - The linear congruential generator multiplier.
 *   - Do not change unless you know what you're doing.
 * 
 *   Increment:
 *   - The linear congruential generator increment.
 *   - Do not change unless you know what you're doing.
 *
 * ---
 * 
 * Action Defaults
 * 
 *   Default RNG Seed?
 *   - Default seed used for actions.
 *   - Use 'auto' to automatically create the seed based off the item or
 *     skill's database name.
 *   - Leave empty or 'none' to not use.
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
 * Sound Types
 * 
 *   Dice Throw Sound:
 *   Increment Tick Sound:
 *   Bonus Use Sound:
 *   Roll Success Sound:
 *   Roll Failure Sound:
 *   Critical Failure Sound:
 *   Critical Success Sound:
 * 
 *     Filename:
 *     - Filename of the sound effect played.
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
 * Command Window:
 * 
 *   Roll Command:
 *   - Text used for the Roll Dice command.
 *   - Text codes allowed.
 * 
 *   Effects Command:
 *   - Text used for the View Effects command.
 *   - Text codes allowed.
 * 
 *   Bonus Command:
 *   - Text used for the Add Bonus command.
 *   -Text codes allowed.
 * 
 * ---
 * 
 * Text Colors:
 * 
 *   Dice Count Up:
 *   Dice Count Down:
 *   Dice Rank Up:
 *   Dice Rank Down:
 *   Roll Modifier Up:
 *   Roll Modifier Down:
 *   - Text color used for this effect type.
 *   - Insert number for text colors from the Window Skin.
 * 
 * ---
 * 
 * Data Window Labels:
 * 
 *   Dice Count:
 *   Advantage:
 *   Disadvantage:
 *   Dice Rank:
 *   Modifiers:
 *   - Text used to display this data label.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Data Window Ranks:
 * 
 *   Rank 1: D4:
 *   Rank 2: D6:
 *   Rank 3: D8:
 *   Rank 4: D10:
 *   Rank 5: D12:
 *   Rank 6: D20:
 *   - Text used to display this dice rank.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Dice Effects:
 * 
 *   Dice Display Format:
 *   - How the overall dice effect is displayed.
 *   - %1 - Effect
 * 
 *   Pre/Post-Effect:
 *   - How pre/post effect is displayed.
 *   - %1 - Prev; %2 - Post
 * 
 *   Order Format:
 *   - Order format used for dice effects.
 *   - %1 - Count; %2 - Rank; %3 - Modifier
 * 
 *   Positive Plus Sign?:
 *   - Show + sign for positive numbers?
 * 
 *   Dice Count Format:
 *   - Text format used for Dice Count effect.
 *   - %1 - Effect Number
 * 
 *   Advantage Format:
 *   - Text format used for Advantage effect.
 *   - %1 - Effect Number
 * 
 *   Disadvantage Format:
 *   - Text format used for Disdvantage effect.
 *   - %1 - Effect Number
 * 
 *   Dice Rank Format:
 *   - Text format used for Dice Rank effect.
 *   - %1 - Effect Number
 * 
 *   Roll Modifier Format:
 *   - Text format used for Roll Modifier effect.
 *   - %1 - Effect Number
 * 
 * ---
 * 
 * Effect Costs:
 * 
 *   Cost Display Format:
 *   - How the overall cost is displayed.
 *   - %1 - Cost Text
 * 
 *   Pre/Post-Cost:
 *   - How pre/post cost text is displayed.
 *   - %1 - Prev; %2 - Post
 * 
 *   Used Up:
 *   - How a cost is displayed when its uses are spent.
 *   - Text codes allowed.
 * 
 *   Use Times Format:
 *   - How use times are formated.
 *   - %1 - Current; %2 - Max Uses; %3 - Remaining
 * 
 *     Show Max Use of 1?:
 *     - Show the use cost when there's only 1 max use?
 * 
 *     Unlimited Uses:
 *     - Text used to indicate unlimited usage.
 *     - Text codes allowed.
 * 
 *   Variable Cost Format:
 *   - How variable cost is displayed.
 *   - %1 - Cost; %2 - Quantity
 * 
 *   Item Cost Format:
 *   - How item cost is displayed.
 *   - %1 - Cost; %2 - Quantity
 * 
 *   Weapon Cost Format:
 *   - How weapon cost is displayed.
 *   - %1 - Cost; %2 - Quantity
 * 
 *   Armor Cost Format:
 *   - How armor cost is displayed.
 *   - %1 - Cost; %2 - Quantity
 * 
 *   Skill User's Name:
 *   - How the skill user's name is displayed.
 *   - %1 - Name
 * 
 *     User to Cost Format:
 *     - How the skill user's name is displayed to cost.
 *     - %1 - Name; %2 - Skill Cost
 * 
 * ---
 * 
 * Subtitle Window:
 * 
 *   Roll for Total:
 *   - Subtitle text for a roll total.
 * 
 *   Roll for Highest:
 *   - Subtitle text to roll for highest.
 * 
 *   Roll for Average:
 *   - Subtitle text to roll for average.
 * 
 *   Roll for Lowest:
 *   - Subtitle text to roll for lowest.
 * 
 *   Roll: > Target:
 *   - Subtitle text to roll for above target.
 *   - %1 - Target Roll
 * 
 *   Roll: >= Target:
 *   - Subtitle text to roll for above/equal target.
 *   - %1 - Target Roll
 * 
 *   Roll: <= Target:
 *   - Subtitle text to roll for below/equal target.
 *   - %1 - Target Roll
 * 
 *   Roll: < Target:
 *   - Subtitle text to roll for below target.
 *   - %1 - Target Roll
 * 
 *   Critical Success:
 *   - Subtitle text for a Critical Success on a Natural Roll.
 * 
 *   Critical Failure:
 *   - Subtitle text for a Critical Failure on a Natural Roll.
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
 * Sprite Container:
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Title Window:
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Subtitle Window:
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Data Windows:
 * 
 *   Dice Count: BG Type:
 *   - Select background type for this window.
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the dimensions for this window.
 * 
 *   Dice Rank: BG Type:
 *   - Select background type for this window.
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the dimensions for this window.
 * 
 *   Modifier: BG Type:
 *   - Select background type for this window.
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Command Window:
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show "View Effects"?:
 *   - Show "View Effects" command?
 * 
 *   Show "Add Bonus"?:
 *   - Show "Add Bonus" command?
 * 
 *   Text Align:
 *   - Text alignment for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * List Windows:
 * 
 *   Effect List: BG Type:
 *   - Select background type for this window.
 * 
 *   Bonus List: BG Type:
 *   - Select background type for this window.
 * 
 *   Window Columns:
 *   - How many columns are used for these windows?
 * 
 *   Column Spacing:
 *   - How much spacing is there between columns?
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
 * Creazilla Open-Source
 * * Many of the canvas drawings are made by various artists under Creazilla.
 * * These are under the Creazilla Open-Source License.
 * * They are free for personal and commercial use. No attribution required.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: June 13, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the Plugin Parameter text for "Armor Cost Format" has
 *    an incorrect label as "Variable Cost Format". Fix made by Arisu.
 * 
 * Version 1.00 Official Release Date: January 26, 2024
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
 * @command Dice_RollValue
 * @text Dice: Roll Value
 * @desc Rolls a dice for any value and stores the result to a variable.
 *
 * @arg DiceSides:num
 * @text Dice Sides
 * @type select
 * @option 4
 * @option 6
 * @option 8
 * @option 10
 * @option 12
 * @option 20
 * @desc How many sides does this dice have?
 * @default 20
 *
 * @arg TotalRolls:eval
 * @text Total Dice Rolls
 * @parent DiceSides:num
 * @desc How many Dice Rolls do you want out of this?
 * You may use code. Dice Rolls have a cap.
 * @default 1
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Insert the ID of the Variable to save the Dice Roll
 * results to. Use 0 to not use. Results are after modifiers.
 * @default 1
 *
 * @arg ResultType:str
 * @text Result Type
 * @parent VariableID:num
 * @type select
 * @option total
 * @option highest
 * @option average
 * @option lowest
 * @desc What type of result do you want recorded to the variable?
 * @default highest
 *
 * @arg Title:str
 * @text Title Text
 * @desc What is the title of this Dice Roll?
 * Text codes allowed. Leave empty to not use.
 * @default Dice Check
 *
 * @arg DiceSeed:struct
 * @text Appearance & Seed
 * @type struct<DiceSeed>
 * @desc What are the dice appearance & seed settings used for this Dice Roll?
 * @default {"Seed:str":"none","ApplyDaily:eval":"false","ApplyUnique:eval":"false"}
 *
 * @arg AutoMods:struct
 * @text Auto Dice Effects
 * @type struct<AutoMods>
 * @desc Adjust the modifier settings that automatically apply to
 * the Dice Roll.
 * @default {"GeneralEffects:arraystruct":"[]","VariableEffects:arraystruct":"[]","ItemEffects:arraystruct":"[]","WeaponEffects:arraystruct":"[]","ArmorEffects:arraystruct":"[]","SkillEffects:arraystruct":"[]"}
 *
 * @arg BonusMods:struct
 * @text Bonus Dice Effects
 * @type struct<BonusMods>
 * @desc Adjust the modifier settings are optionally applied to
 * the Dice Roll selected by the player.
 * @default {"GeneralEffects:arraystruct":"[]","VariableEffects:arraystruct":"[]","ItemEffects:arraystruct":"[]","WeaponEffects:arraystruct":"[]","ArmorEffects:arraystruct":"[]","SkillEffects:arraystruct":"[]"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dice_TargetValue
 * @text Dice: Target Value
 * @desc Rolls a dice for a target value and stores the result to a variable.
 *
 * @arg DiceSides:num
 * @text Dice Sides
 * @type select
 * @option 4
 * @option 6
 * @option 8
 * @option 10
 * @option 12
 * @option 20
 * @desc How many sides does this dice have?
 * @default 20
 *
 * @arg SwitchID:num
 * @text Switch ID
 * @type switch
 * @desc Insert the ID of the Switch to save the Dice Roll
 * results to. Use 0 to not use.
 * @default 1
 *
 * @arg NaturalRolls:eval
 * @text Allow Natural Rolls?
 * @parent SwitchID:num
 * @type boolean
 * @on Allow
 * @off Don't Allow
 * @desc Allow natural rolls which bypass modifiers?
 * Natural 1 or Max = auto-fail or auto-success
 * @default true
 *
 * @arg ResultType:str
 * @text Result Type
 * @parent SwitchID:num
 * @type select
 * @option above target
 * @value aboveTarget
 * @option above/equal to target
 * @value aboveEqualTarget
 * @option below/equal to target
 * @value belowEqualTarget
 * @option below target
 * @value belowTarget
 * @desc What type of result do you want recorded to the switch?
 * @default aboveEqualTarget
 *
 * @arg TargetValue:eval
 * @text Target Roll Value
 * @parent SwitchID:num
 * @desc What should the target value be equal to?
 * You may use code.
 * @default 10
 *
 * @arg VariableID:num
 * @text Variable ID
 * @parent SwitchID:num
 * @type variable
 * @desc Insert the ID of the Variable to save the Dice Roll
 * value to. Use 0 to not use. Results are after modifiers.
 * @default 1
 *
 * @arg Title:str
 * @text Title Text
 * @desc What is the title of this Dice Roll?
 * Text codes allowed. Leave empty to not use.
 * @default Dice Check
 *
 * @arg DiceSeed:struct
 * @text Appearance & Seed
 * @type struct<DiceSeed>
 * @desc What are the dice appearance & seed settings used for this Dice Roll?
 * @default {"Seed:str":"none","ApplyDaily:eval":"false","ApplyUnique:eval":"false"}
 *
 * @arg AutoMods:struct
 * @text Auto Dice Effects
 * @type struct<AutoMods>
 * @desc Adjust the modifier settings that automatically apply to
 * the Dice Roll.
 * @default {"GeneralEffects:arraystruct":"[]","VariableEffects:arraystruct":"[]","ItemEffects:arraystruct":"[]","WeaponEffects:arraystruct":"[]","ArmorEffects:arraystruct":"[]","SkillEffects:arraystruct":"[]"}
 *
 * @arg BonusMods:struct
 * @text Bonus Dice Effects
 * @type struct<BonusMods>
 * @desc Adjust the modifier settings are optionally applied to
 * the Dice Roll selected by the player.
 * @default {"GeneralEffects:arraystruct":"[]","VariableEffects:arraystruct":"[]","ItemEffects:arraystruct":"[]","WeaponEffects:arraystruct":"[]","ArmorEffects:arraystruct":"[]","SkillEffects:arraystruct":"[]"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Rng
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Variable_RngRange
 * @text RNG: Random Number Between X and Y
 * @desc Uses a seed to determine a random number between X and Y.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Insert the ID of the Variable to save this value to.
 * @default 1
 *
 * @arg Min:eval
 * @text Minimum
 * @parent VariableID:num
 * @desc Minimum value the random number can be.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Max:eval
 * @text Maximum
 * @parent VariableID:num
 * @desc Maximum value the random number can be.
 * You may use JavaScript code.
 * @default 100
 *
 * @arg Seed:str
 * @text Seed
 * @desc What is the Random Number Seed?
 * Use numbers or text.
 * @default RpgTsukuru
 *
 * @arg ApplyDaily:eval
 * @text Daily Marker
 * @parent Seed:str
 * @type boolean
 * @on Apply To Seed
 * @off Don't Apply
 * @desc Apply daily marker to Random Number results?
 * @default false
 *
 * @arg ApplyUnique:eval
 * @text Save-Unique Marker
 * @parent Seed:str
 * @type boolean
 * @on Apply To Seed
 * @off Don't Apply
 * @desc Apply save-unique marker to Random Number results?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Reset_RngSeed
 * @text RNG: Reset Random Seed
 * @desc Resets the random state for the target Random Number Seed.
 *
 * @arg Seed:str
 * @text Seed
 * @desc What is the Random Number Seed?
 * Use numbers or text.
 * @default RpgTsukuru
 *
 * @arg ApplyDaily:eval
 * @text Daily Marker
 * @parent Seed:str
 * @type boolean
 * @on Apply To Seed
 * @off Don't Apply
 * @desc Apply daily marker to Random Number Seed?
 * @default false
 *
 * @arg ApplyUnique:eval
 * @text Save-Unique Marker
 * @parent Seed:str
 * @type boolean
 * @on Apply To Seed
 * @off Don't Apply
 * @desc Apply save-unique marker to Random Number Seed?
 * @default false
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
 * @param DiceRollsRngSeeds
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Dice:struct
 * @text Dice Roll Settings
 * @parent Defaults
 * @type struct<Dice>
 * @desc Adjust the Dice Roll settings to fit your game.
 * @default {"Mechanics":"","MaxDiceCount:num":"10","Appearances":"","D4:struct":"{\"filenames:arraystr\":\"[]\",\"colors:arraystr\":\"[\\\"#ff7479\\\",\\\"#ffa67b\\\",\\\"#f7941d\\\",\\\"#fff200\\\",\\\"#d3a87d\\\",\\\"#8dc63f\\\",\\\"#6cf77f\\\",\\\"#2aec88\\\",\\\"#22e6d8\\\",\\\"#6bd6ff\\\",\\\"#2eacfe\\\",\\\"#2895ff\\\",\\\"#7477e4\\\",\\\"#af70df\\\",\\\"#e16ede\\\",\\\"#ff8bd0\\\"]\",\"NumberSettings\":\"\",\"fontSize:num\":\"60\",\"outlineWidth:num\":\"4\",\"fontOffsetX:num\":\"+0\",\"fontOffsetY:num\":\"+18\",\"PositionSettings\":\"\",\"positionOffsetX:num\":\"+0\",\"positionOffsetY:num\":\"+8\"}","D6:struct":"{\"filenames:arraystr\":\"[]\",\"colors:arraystr\":\"[\\\"#ff7479\\\",\\\"#ffa67b\\\",\\\"#f7941d\\\",\\\"#fff200\\\",\\\"#d3a87d\\\",\\\"#8dc63f\\\",\\\"#6cf77f\\\",\\\"#2aec88\\\",\\\"#22e6d8\\\",\\\"#6bd6ff\\\",\\\"#2eacfe\\\",\\\"#2895ff\\\",\\\"#7477e4\\\",\\\"#af70df\\\",\\\"#e16ede\\\",\\\"#ff8bd0\\\"]\",\"NumberSettings\":\"\",\"fontSize:num\":\"72\",\"outlineWidth:num\":\"4\",\"fontOffsetX:num\":\"+4\",\"fontOffsetY:num\":\"+4\",\"PositionSettings\":\"\",\"positionOffsetX:num\":\"+0\",\"positionOffsetY:num\":\"+0\"}","D8:struct":"{\"filenames:arraystr\":\"[]\",\"colors:arraystr\":\"[\\\"#ff7479\\\",\\\"#ffa67b\\\",\\\"#f7941d\\\",\\\"#fff200\\\",\\\"#d3a87d\\\",\\\"#8dc63f\\\",\\\"#6cf77f\\\",\\\"#2aec88\\\",\\\"#22e6d8\\\",\\\"#6bd6ff\\\",\\\"#2eacfe\\\",\\\"#2895ff\\\",\\\"#7477e4\\\",\\\"#af70df\\\",\\\"#e16ede\\\",\\\"#ff8bd0\\\"]\",\"NumberSettings\":\"\",\"fontSize:num\":\"40\",\"outlineWidth:num\":\"4\",\"fontOffsetX:num\":\"+0\",\"fontOffsetY:num\":\"+0\",\"PositionSettings\":\"\",\"positionOffsetX:num\":\"+0\",\"positionOffsetY:num\":\"+0\"}","D10:struct":"{\"filenames:arraystr\":\"[]\",\"colors:arraystr\":\"[\\\"#ff7479\\\",\\\"#ffa67b\\\",\\\"#f7941d\\\",\\\"#fff200\\\",\\\"#d3a87d\\\",\\\"#8dc63f\\\",\\\"#6cf77f\\\",\\\"#2aec88\\\",\\\"#22e6d8\\\",\\\"#6bd6ff\\\",\\\"#2eacfe\\\",\\\"#2895ff\\\",\\\"#7477e4\\\",\\\"#af70df\\\",\\\"#e16ede\\\",\\\"#ff8bd0\\\"]\",\"NumberSettings\":\"\",\"fontSize:num\":\"40\",\"outlineWidth:num\":\"4\",\"fontOffsetX:num\":\"+0\",\"fontOffsetY:num\":\"+8\",\"PositionSettings\":\"\",\"positionOffsetX:num\":\"+0\",\"positionOffsetY:num\":\"+0\"}","D12:struct":"{\"filenames:arraystr\":\"[]\",\"colors:arraystr\":\"[\\\"#ff7479\\\",\\\"#ffa67b\\\",\\\"#f7941d\\\",\\\"#fff200\\\",\\\"#d3a87d\\\",\\\"#8dc63f\\\",\\\"#6cf77f\\\",\\\"#2aec88\\\",\\\"#22e6d8\\\",\\\"#6bd6ff\\\",\\\"#2eacfe\\\",\\\"#2895ff\\\",\\\"#7477e4\\\",\\\"#af70df\\\",\\\"#e16ede\\\",\\\"#ff8bd0\\\"]\",\"NumberSettings\":\"\",\"fontSize:num\":\"40\",\"outlineWidth:num\":\"4\",\"fontOffsetX:num\":\"+0\",\"fontOffsetY:num\":\"+0\",\"PositionSettings\":\"\",\"positionOffsetX:num\":\"+0\",\"positionOffsetY:num\":\"+0\"}","D20:struct":"{\"filenames:arraystr\":\"[]\",\"colors:arraystr\":\"[\\\"#ff7479\\\",\\\"#ffa67b\\\",\\\"#f7941d\\\",\\\"#fff200\\\",\\\"#d3a87d\\\",\\\"#8dc63f\\\",\\\"#6cf77f\\\",\\\"#2aec88\\\",\\\"#22e6d8\\\",\\\"#6bd6ff\\\",\\\"#2eacfe\\\",\\\"#2895ff\\\",\\\"#7477e4\\\",\\\"#af70df\\\",\\\"#e16ede\\\",\\\"#ff8bd0\\\"]\",\"NumberSettings\":\"\",\"fontSize:num\":\"32\",\"outlineWidth:num\":\"4\",\"fontOffsetX:num\":\"+0\",\"fontOffsetY:num\":\"+0\",\"PositionSettings\":\"\",\"positionOffsetX:num\":\"+0\",\"positionOffsetY:num\":\"+0\"}","ColorRatio":"","ColorBorderRatio:num":"0.30","Color1Ratio:num":"0.60","Color2Ratio:num":"0.80","Color3Ratio:num":"1.00","ArrangeOffset":"","ArrangeOffsetX:num":"+0","ArrangeOffsetY:num":"+0","FadeSettings":"","fadeInDuration:num":"30","fadeOutDuration:num":"20","finalizeDelay:num":"60","RollSettings":"","rollDuration:num":"60","rollDelay:num":"10","rollHeight:num":"160","rotateSpeed:num":"+15","MoveSettings":"","moveDuration:num":"20","scaleDuration:num":"40","numberDuration:num":"4","maxNumberDuration:num":"80","numberColorShift:eval":"true","rollModDelay:num":"60"}
 *
 * @param RngSeed:struct
 * @text Random Seed Settings
 * @type struct<RngSeed>
 * @desc Set up the Random Number Seed algorithm settings.
 * @default {"LCG":"","modulus:num":"2147483648","multiplier:num":"1103515245","increment:num":"12345","Action":"","DefaultRngSeed:str":"none"}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc These settings let you adjust the sound effects used for this plugin.
 * @default {"Throw":"","throw_name:str":"Bow2","throw_volume:num":"90","throw_pitch:num":"120","throw_pan:num":"0","Tick":"","tick_name:str":"Cursor1","tick_volume:num":"90","tick_pitch:num":"150","tick_pan:num":"0","Bonus":"","bonus_name:str":"Skill3","bonus_volume:num":"90","bonus_pitch:num":"120","bonus_pan:num":"0","Success":"","success_name:str":"Chime2","success_volume:num":"90","success_pitch:num":"100","success_pan:num":"0","Failure":"","failure_name:str":"Buzzer2","failure_volume:num":"90","failure_pitch:num":"100","failure_pan:num":"0","CritSuccess":"","crit_success_name:str":"Bell1","crit_success_volume:num":"90","crit_success_pitch:num":"100","crit_success_pan:num":"0","CritFailure":"","crit_failure_name:str":"Battle2","crit_failure_volume:num":"90","crit_failure_pitch:num":"100","crit_failure_pan:num":"0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"CommandWindow":"","CommandRoll:str":"Roll Dice","CommandEffects:str":"View Effects","CommandBonus:str":"Add Bonus","TextColors":"","diceUpColor:num":"24","diceDownColor:num":"27","rankUpColor:num":"21","rankDownColor:num":"4","modUpColor:num":"6","modDownColor:num":"2","DataWindows":"","DataDiceCount:str":"\\C[16]Dice Count:","DataAdvantage:str":"\\C[24]Advantage:","DataDisadvantage:str":"\\C[27]Disadvantage:","DataDiceRank:str":"\\C[16]Dice Rank:","DataModifiers:str":"\\C[16]Modifiers:","DataWindowRanks":"","DataRank1:str":"D4","DataRank2:str":"D6","DataRank3:str":"D8","DataRank4:str":"D10","DataRank5:str":"D12","DataRank6:str":"D20","DiceEffects":"","DiceDisplayFormat:str":"\\}%1\\{","DicePrePostFormat:str":"%1 %2","DiceOrderFmt:str":"%1 %2 %3","DicePlusSigns:eval":"true","DiceCount:str":"Dice%1","DiceAdvantage:str":"Adv%1","DiceDisadvantage:str":"Dis%1","DiceRank:str":"Rank%1","DiceModifier:str":"Roll%1","EffectCosts":"","CostDisplayFormat:str":"\\}%1\\{","CostPrePostFormat:str":"%1 %2","CostUsedUp:str":"USED!","CostUseTimesFmt:str":"(×%1/%2)","CostShowMaxUse1:eval":"false","CostUnlimitedUse:str":"∞","CostVarFormat:str":"(×%2-%1)","CostItemFormat:str":"(×%2-%1)","CostWeaponFormat:str":"(×%2-%1)","CostArmorFormat:str":"(×%2-%1)","CostSkillUserName:str":"[%1]","CostSkillUserFmt:str":"%1➤%2","Subtitle":"","SubtitleTotal:str":"Roll for \\C[23]total\\C[0] number","SubtitleHighest:str":"Roll for \\C[24]highest\\C[0] number","SubtitleAverage:str":"Roll for \\C[21]average\\C[0] number","SubtitleLowest:str":"Roll for \\C[21]lowest\\C[0] number","SubtitleAboveTarget:str":"\\C[5]Difficulty Class:\\C[0] Above \\C[24]%1\\C[0]","SubtitleAboveEqualTarget:str":"\\C[5]Difficulty Class:\\C[0] At least \\C[24]%1\\C[0]","SubtitleBelowEqualTarget:str":"\\C[5]Difficulty Class:\\C[0] At most \\C[24]%1\\C[0]","SubtitleBelowTarget:str":"\\C[5]Difficulty Class:\\C[0] Below \\C[24]%1\\C[0]","SubtitleCritSuccess:str":"\\C[17]CRITICAL SUCCESS!","SubtitleCritFailure:str":"\\C[2]CRITICAL FAILURE!"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Container":"","Container_RectJS:func":"\"const ww = Math.min(Math.round(Graphics.width * 0.90), 816);\\nconst wx = Math.round((Graphics.width - ww) / 2);\\nconst wy = this.calcWindowHeight(2, false) + this.calcWindowHeight(1, false);\\nconst wh = Graphics.height - wy - this.calcWindowHeight(4, true) - this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","TitleWindow":"","Title_BgType:num":"0","Title_RectJS:func":"\"const ww = Math.min(Math.round(Graphics.width * 0.80), 716);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.round((Graphics.width - ww) / 2);\\nconst wy = this.calcWindowHeight(2, false) - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SubtitleWindow":"","Subtitle_BgType:num":"0","Subtitle_RectJS:func":"\"const ww = Math.min(Math.round(Graphics.width * 0.80), 716);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.round((Graphics.width - ww) / 2);\\nconst wy = Graphics.height - this.calcWindowHeight(4, true) - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","DataWindows":"","DataCount_BgType:num":"0","DataCount_RectJS:func":"\"const base = Math.min(Math.round(Graphics.width * 0.90), 816);\\nconst ww = Math.floor(base / 3);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.round((Graphics.width - base) / 2);\\nconst wy = this.calcWindowHeight(2, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","DataRank_BgType:num":"0","DataRank_RectJS:func":"\"const base = Math.min(Math.round(Graphics.width * 0.90), 816);\\nconst ww = Math.ceil(base / 3);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.round((Graphics.width - ww) / 2);\\nconst wy = this.calcWindowHeight(2, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","DataMod_BgType:num":"0","DataMod_RectJS:func":"\"const base = Math.min(Math.round(Graphics.width * 0.90), 816);\\nconst ww = Math.floor(base / 3);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.round((Graphics.width + ww) / 2);\\nconst wy = this.calcWindowHeight(2, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","CommandWindow":"","Command_BgType:num":"0","Command_TextAlign:str":"center","Command_RectJS:func":"\"const ww = Math.min(Math.round(Graphics.width * 0.50), 360);\\nconst wh = this.calcWindowHeight(this.totalDiceRollChoices(), true);\\nconst wx = Math.round((Graphics.width - ww) / 2);\\nconst wy = Graphics.height - this.calcWindowHeight(4, true) + Math.round((this.calcWindowHeight(4, true) - this.calcWindowHeight(3, true)) / 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","CommandShowEffects:eval":"true","CommandShowBonus:eval":"true","ListWindows":"","EffectList_BgType:num":"0","BonusList_BgType:num":"0","ListColumns:num":"2","ListColSpacing:num":"16","List_RectJS:func":"\"const ww = Math.min(Graphics.width, 1016);\\nconst wh = this.calcWindowHeight(4, true);\\nconst wx = Math.round((Graphics.width - ww) / 2);\\nconst wy = Graphics.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * Dice Roll Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Dice:
 *
 * @param Mechanics
 * @text Mechanics
 *
 * @param MaxDiceCount:num
 * @text Max Dice Count
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc What is the maximum number of dice that can be thrown at a time?
 * @default 10
 *
 * @param Appearances
 * @text Dice Appearances
 *
 * @param D4:struct
 * @text D4 Appearance
 * @parent Appearances
 * @type struct<DiceType>
 * @desc Adjust the Dice Appearance settings for the D4 here.
 * @default {"filenames:arraystr":"[]","colors:arraystr":"[\"#ff7479\",\"#ffa67b\",\"#f7941d\",\"#fff200\",\"#d3a87d\",\"#8dc63f\",\"#6cf77f\",\"#2aec88\",\"#22e6d8\",\"#6bd6ff\",\"#2eacfe\",\"#2895ff\",\"#7477e4\",\"#af70df\",\"#e16ede\",\"#ff8bd0\"]","NumberSettings":"","fontSize:num":"60","outlineWidth:num":"4","fontOffsetX:num":"+0","fontOffsetY:num":"+18","PositionSettings":"","positionOffsetX:num":"+0","positionOffsetY:num":"+8"}
 *
 * @param D6:struct
 * @text D6 Appearance
 * @parent Appearances
 * @type struct<DiceType>
 * @desc Adjust the Dice Appearance settings for the D6 here.
 * @default {"filenames:arraystr":"[]","colors:arraystr":"[\"#ff7479\",\"#ffa67b\",\"#f7941d\",\"#fff200\",\"#d3a87d\",\"#8dc63f\",\"#6cf77f\",\"#2aec88\",\"#22e6d8\",\"#6bd6ff\",\"#2eacfe\",\"#2895ff\",\"#7477e4\",\"#af70df\",\"#e16ede\",\"#ff8bd0\"]","NumberSettings":"","fontSize:num":"72","outlineWidth:num":"4","fontOffsetX:num":"+4","fontOffsetY:num":"+4","PositionSettings":"","positionOffsetX:num":"+0","positionOffsetY:num":"+0"}
 *
 * @param D8:struct
 * @text D8 Appearance
 * @parent Appearances
 * @type struct<DiceType>
 * @desc Adjust the Dice Appearance settings for the D8 here.
 * @default {"filenames:arraystr":"[]","colors:arraystr":"[\"#ff7479\",\"#ffa67b\",\"#f7941d\",\"#fff200\",\"#d3a87d\",\"#8dc63f\",\"#6cf77f\",\"#2aec88\",\"#22e6d8\",\"#6bd6ff\",\"#2eacfe\",\"#2895ff\",\"#7477e4\",\"#af70df\",\"#e16ede\",\"#ff8bd0\"]","NumberSettings":"","fontSize:num":"40","outlineWidth:num":"4","fontOffsetX:num":"+0","fontOffsetY:num":"+0","PositionSettings":"","positionOffsetX:num":"+0","positionOffsetY:num":"+0"}
 *
 * @param D10:struct
 * @text D10 Appearance
 * @parent Appearances
 * @type struct<DiceType>
 * @desc Adjust the Dice Appearance settings for the D10 here.
 * @default {"filenames:arraystr":"[]","colors:arraystr":"[\"#ff7479\",\"#ffa67b\",\"#f7941d\",\"#fff200\",\"#d3a87d\",\"#8dc63f\",\"#6cf77f\",\"#2aec88\",\"#22e6d8\",\"#6bd6ff\",\"#2eacfe\",\"#2895ff\",\"#7477e4\",\"#af70df\",\"#e16ede\",\"#ff8bd0\"]","NumberSettings":"","fontSize:num":"40","outlineWidth:num":"4","fontOffsetX:num":"+0","fontOffsetY:num":"+8","PositionSettings":"","positionOffsetX:num":"+0","positionOffsetY:num":"+0"}
 *
 * @param D12:struct
 * @text D12 Appearance
 * @parent Appearances
 * @type struct<DiceType>
 * @desc Adjust the Dice Appearance settings for the D12 here.
 * @default {"filenames:arraystr":"[]","colors:arraystr":"[\"#ff7479\",\"#ffa67b\",\"#f7941d\",\"#fff200\",\"#d3a87d\",\"#8dc63f\",\"#6cf77f\",\"#2aec88\",\"#22e6d8\",\"#6bd6ff\",\"#2eacfe\",\"#2895ff\",\"#7477e4\",\"#af70df\",\"#e16ede\",\"#ff8bd0\"]","NumberSettings":"","fontSize:num":"40","outlineWidth:num":"4","fontOffsetX:num":"+0","fontOffsetY:num":"+0","PositionSettings":"","positionOffsetX:num":"+0","positionOffsetY:num":"+0"}
 *
 * @param D20:struct
 * @text D20 Appearance
 * @parent Appearances
 * @type struct<DiceType>
 * @desc Adjust the Dice Appearance settings for the D20 here.
 * @default {"filenames:arraystr":"[]","colors:arraystr":"[\"#ff7479\",\"#ffa67b\",\"#f7941d\",\"#fff200\",\"#d3a87d\",\"#8dc63f\",\"#6cf77f\",\"#2aec88\",\"#22e6d8\",\"#6bd6ff\",\"#2eacfe\",\"#2895ff\",\"#7477e4\",\"#af70df\",\"#e16ede\",\"#ff8bd0\"]","NumberSettings":"","fontSize:num":"32","outlineWidth:num":"4","fontOffsetX:num":"+0","fontOffsetY:num":"+0","PositionSettings":"","positionOffsetX:num":"+0","positionOffsetY:num":"+0"}
 *
 * @param ColorRatio
 * @text Color Ratios
 *
 * @param ColorBorderRatio:num
 * @text Border Ratio
 * @parent ColorRatio
 * @desc Used for generated colors.
 * Darkness ratio for border color.
 * @default 0.30
 *
 * @param Color1Ratio:num
 * @text Color 1 Ratio
 * @parent ColorRatio
 * @desc Used for generated colors.
 * Darkness ratio for darker color.
 * @default 0.60
 *
 * @param Color2Ratio:num
 * @text Color 2 Ratio
 * @parent ColorRatio
 * @desc Used for generated colors.
 * Darkness ratio for middle color.
 * @default 0.80
 *
 * @param Color3Ratio:num
 * @text Color 3 Ratio
 * @parent ColorRatio
 * @desc Used for generated colors.
 * Darkness ratio for main color.
 * @default 1.00
 *
 * @param ArrangeOffset
 * @text Arrange Offset
 *
 * @param ArrangeOffsetX:num
 * @text Offset X
 * @parent ArrangeOffset
 * @desc Offsets the dice arrangement x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ArrangeOffsetY:num
 * @text Offset Y
 * @parent ArrangeOffset
 * @desc Offsets the dice arrangement y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param FadeSettings
 * @text Fade Settings
 *
 * @param fadeInDuration:num
 * @text Fade In Duration
 * @parent FadeSettings
 * @type number
 * @min 1
 * @desc How many frames it takes to fade in dice?
 * 60 frames = 1 second.
 * @default 30
 *
 * @param fadeOutDuration:num
 * @text Fade Out Duration
 * @parent FadeSettings
 * @type number
 * @min 1
 * @desc How many frames it takes to fade out dice?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param finalizeDelay:num
 * @text Finalize Delay
 * @parent FadeSettings
 * @type number
 * @min 1
 * @desc How many frames to wait before fading out?
 * 60 frames = 1 second.
 * @default 60
 *
 * @param RollSettings
 * @text Rolling Effect
 *
 * @param rollDuration:num
 * @text Dice Roll Duration
 * @parent RollSettings
 * @type number
 * @min 1
 * @desc How many frames it takes to roll a dice?
 * 60 frames = 1 second.
 * @default 60
 *
 * @param rollDelay:num
 * @text Between Roll Delay
 * @parent RollSettings
 * @type number
 * @min 1
 * @desc How many frames between multiple dice rolls?
 * 60 frames = 1 second.
 * @default 10
 *
 * @param rollHeight:num
 * @text Dice Roll Height
 * @parent RollSettings
 * @type number
 * @min 1
 * @desc How high should the dice jump up for its roll in pixels?
 * @default 160
 *
 * @param rotateSpeed:num
 * @text Dice Rotate Speed
 * @parent RollSettings
 * @desc How many degrees does the dice rotate per frame while rolling?
 * @default +15
 *
 * @param MoveSettings
 * @text Movement Settings
 *
 * @param moveDuration:num
 * @text Move Duration
 * @parent MoveSettings
 * @type number
 * @min 1
 * @desc How many frames it takes to move dice?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param scaleDuration:num
 * @text Scaling Duration
 * @parent MoveSettings
 * @type number
 * @min 1
 * @desc How many frames it takes to change dice scale?
 * 60 frames = 1 second.
 * @default 40
 *
 * @param numberDuration:num
 * @text Number Climb Tick
 * @parent MoveSettings
 * @type number
 * @min 1
 * @desc How many frames are there between number ticks?
 * 60 frames = 1 second.
 * @default 4
 *
 * @param maxNumberDuration:num
 * @text Max Number Duration
 * @parent MoveSettings
 * @type number
 * @min 1
 * @desc Max number of frames to process number ticks?
 * 60 frames = 1 second.
 * @default 80
 *
 * @param numberColorShift:eval
 * @text Number Color Shift
 * @parent MoveSettings
 * @type boolean
 * @on Shift Color
 * @off Don't Shift
 * @desc Allow dice number colors to change due to modifiers?
 * @default true
 *
 * @param rollModDelay:num
 * @text Pre-Modifier Delay
 * @parent MoveSettings
 * @type number
 * @min 1
 * @desc Delay frames before applying modifiers?
 * 60 frames = 1 second.
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Dice Type Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DiceType:
 *
 * @param filenames:arraystr
 * @text Image Filename(s)
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Use custom images for this dice? Priority over colors.
 * Location: img/pictures/
 * @default []
 *
 * @param colors:arraystr
 * @text Dice Colors(s)
 * @type string[]
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default ["#ff7479","#ffa67b","#f7941d","#fff200","#d3a87d","#8dc63f","#6cf77f","#2aec88","#22e6d8","#6bd6ff","#2eacfe","#2895ff","#7477e4","#af70df","#e16ede","#ff8bd0"]
 * 
 * @param NumberSettings
 * @text Number Settings
 *
 * @param fontSize:num
 * @text Font Size
 * @parent NumberSettings
 * @type number
 * @min 1
 * @desc Font size used for dice number.
 * @default 40
 *
 * @param outlineWidth:num
 * @text Number Outline
 * @parent NumberSettings
 * @type number
 * @min 0
 * @desc What width to use for number outline?
 * Use 0 to not use an outline.
 * @default 4
 *
 * @param fontOffsetX:num
 * @text Offset X
 * @parent NumberSettings
 * @desc Offsets the number x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param fontOffsetY:num
 * @text Offset Y
 * @parent NumberSettings
 * @desc Offsets the number y position.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param PositionSettings
 * @text Position Settings
 *
 * @param positionOffsetX:num
 * @text Offset X
 * @parent PositionSettings
 * @desc Offsets the sprite x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param positionOffsetY:num
 * @text Offset Y
 * @parent PositionSettings
 * @desc Offsets the sprite y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * RNG Seed Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RngSeed:
 * 
 * @param LCG
 * @text Linear Congruential
 *
 * @param modulus:num
 * @text Modulus
 * @parent LCG
 * @desc The linear congruential generator modulus.
 * Do not change unless you know what you're doing.
 * @default 2147483648
 *
 * @param multiplier:num
 * @text Multiplier
 * @parent LCG
 * @desc The linear congruential generator multiplier.
 * Do not change unless you know what you're doing.
 * @default 1103515245
 *
 * @param increment:num
 * @text Increment
 * @parent LCG
 * @desc The linear congruential generator increment.
 * Do not change unless you know what you're doing.
 * @default 12345
 * 
 * @param Action
 * @text Action Defaults
 *
 * @param DefaultRngSeed:str
 * @text Default RNG Seed?
 * @parent Action
 * @desc Default seed used for actions. Use 'auto' to auto seed.
 * Leave empty or 'none' to not use.
 * @default none
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Throw
 * @text Dice Throw Sound
 * 
 * @param throw_name:str
 * @text Filename
 * @parent Throw
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Bow2
 *
 * @param throw_volume:num
 * @text Volume
 * @parent Throw
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param throw_pitch:num
 * @text Pitch
 * @parent Throw
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param throw_pan:num
 * @text Pan
 * @parent Throw
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Tick
 * @text Increment Tick Sound
 * 
 * @param tick_name:str
 * @text Filename
 * @parent Tick
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Cursor1
 *
 * @param tick_volume:num
 * @text Volume
 * @parent Tick
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param tick_pitch:num
 * @text Pitch
 * @parent Tick
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 150
 *
 * @param tick_pan:num
 * @text Pan
 * @parent Tick
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Bonus
 * @text Bonus Use Sound
 * 
 * @param bonus_name:str
 * @text Filename
 * @parent Bonus
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill3
 *
 * @param bonus_volume:num
 * @text Volume
 * @parent Bonus
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param bonus_pitch:num
 * @text Pitch
 * @parent Bonus
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param bonus_pan:num
 * @text Pan
 * @parent Bonus
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Success
 * @text Roll Success Sound
 * 
 * @param success_name:str
 * @text Filename
 * @parent Success
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Chime2
 *
 * @param success_volume:num
 * @text Volume
 * @parent Success
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param success_pitch:num
 * @text Pitch
 * @parent Success
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param success_pan:num
 * @text Pan
 * @parent Success
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Failure
 * @text Roll Failure Sound
 * 
 * @param failure_name:str
 * @text Filename
 * @parent Failure
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Buzzer2
 *
 * @param failure_volume:num
 * @text Volume
 * @parent Failure
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param failure_pitch:num
 * @text Pitch
 * @parent Failure
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param failure_pan:num
 * @text Pan
 * @parent Failure
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param CritSuccess
 * @text Critical Success Sound
 * 
 * @param crit_success_name:str
 * @text Filename
 * @parent CritSuccess
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Bell1
 *
 * @param crit_success_volume:num
 * @text Volume
 * @parent CritSuccess
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param crit_success_pitch:num
 * @text Pitch
 * @parent CritSuccess
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param crit_success_pan:num
 * @text Pan
 * @parent CritSuccess
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param CritFailure
 * @text Critical Failure Sound
 * 
 * @param crit_failure_name:str
 * @text Filename
 * @parent CritFailure
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Battle2
 *
 * @param crit_failure_volume:num
 * @text Volume
 * @parent CritFailure
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param crit_failure_pitch:num
 * @text Pitch
 * @parent CritFailure
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param crit_failure_pan:num
 * @text Pan
 * @parent CritFailure
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
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandRoll:str
 * @text Roll Command
 * @parent CommandWindow
 * @desc Text used for the Roll Dice command.
 * Text codes allowed.
 * @default Roll Dice
 *
 * @param CommandEffects:str
 * @text Effects Command
 * @parent CommandWindow
 * @desc Text used for the View Effects command.
 * Text codes allowed.
 * @default View Effects
 *
 * @param CommandBonus:str
 * @text Bonus Command
 * @parent CommandWindow
 * @desc Text used for the Add Bonus command.
 * Text codes allowed.
 * @default Add Bonus
 *
 * @param TextColors
 * @text Text Colors
 *
 * @param diceUpColor:num
 * @text Dice Count Up
 * @parent TextColors
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this effect type.
 * Insert number for text colors from the Window Skin.
 * @default 24
 *
 * @param diceDownColor:num
 * @text Dice Count Down
 * @parent TextColors
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this effect type.
 * Insert number for text colors from the Window Skin.
 * @default 27
 *
 * @param rankUpColor:num
 * @text Dice Rank Up
 * @parent TextColors
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this effect type.
 * Insert number for text colors from the Window Skin.
 * @default 21
 *
 * @param rankDownColor:num
 * @text Dice Rank Down
 * @parent TextColors
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this effect type.
 * Insert number for text colors from the Window Skin.
 * @default 4
 *
 * @param modUpColor:num
 * @text Roll Modifier Up
 * @parent TextColors
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this effect type.
 * Insert number for text colors from the Window Skin.
 * @default 6
 *
 * @param modDownColor:num
 * @text Roll Modifier Down
 * @parent TextColors
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this effect type.
 * Insert number for text colors from the Window Skin.
 * @default 2
 *
 * @param DataWindows
 * @text Data Window Labels
 *
 * @param DataDiceCount:str
 * @text Dice Count
 * @parent DataWindows
 * @desc Text used to display this data label.
 * Text codes allowed.
 * @default \C[16]Dice Count:
 *
 * @param DataAdvantage:str
 * @text Advantage
 * @parent DataWindows
 * @desc Text used to display this data label.
 * Text codes allowed.
 * @default \C[24]Advantage:
 *
 * @param DataDisadvantage:str
 * @text Disadvantage
 * @parent DataWindows
 * @desc Text used to display this data label.
 * Text codes allowed.
 * @default \C[27]Disadvantage:
 *
 * @param DataDiceRank:str
 * @text Dice Rank
 * @parent DataWindows
 * @desc Text used to display this data label.
 * Text codes allowed.
 * @default \C[16]Dice Rank:
 *
 * @param DataModifiers:str
 * @text Modifiers
 * @parent DataWindows
 * @desc Text used to display this data label.
 * Text codes allowed.
 * @default \C[16]Modifiers:
 *
 * @param DataWindowRanks
 * @text Data Window Ranks
 *
 * @param DataRank1:str
 * @text Rank 1: D4
 * @parent DataWindowRanks
 * @desc Text used to display this dice rank.
 * Text codes allowed.
 * @default D4
 *
 * @param DataRank2:str
 * @text Rank 2: D6
 * @parent DataWindowRanks
 * @desc Text used to display this dice rank.
 * Text codes allowed.
 * @default D6
 *
 * @param DataRank3:str
 * @text Rank 3: D8
 * @parent DataWindowRanks
 * @desc Text used to display this dice rank.
 * Text codes allowed.
 * @default D8
 *
 * @param DataRank4:str
 * @text Rank 4: D10
 * @parent DataWindowRanks
 * @desc Text used to display this dice rank.
 * Text codes allowed.
 * @default D10
 *
 * @param DataRank5:str
 * @text Rank 5: D12
 * @parent DataWindowRanks
 * @desc Text used to display this dice rank.
 * Text codes allowed.
 * @default D12
 *
 * @param DataRank6:str
 * @text Rank 6: D20
 * @parent DataWindowRanks
 * @desc Text used to display this dice rank.
 * Text codes allowed.
 * @default D20
 *
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param DiceDisplayFormat:str
 * @text Dice Display Format
 * @parent DiceEffects
 * @desc How the overall dice effect is displayed.
 * %1 - Effect
 * @default \}%1\{
 *
 * @param DicePrePostFormat:str
 * @text Pre/Post-Effect
 * @parent DiceEffects
 * @desc How pre/post effect is displayed.
 * %1 - Prev; %2 - Post
 * @default %1 %2
 *
 * @param DiceOrderFmt:str
 * @text Order Format
 * @parent DiceEffects
 * @desc Order format used for dice effects.
 * %1 - Count; %2 - Rank; %3 - Modifier
 * @default %1 %2 %3
 *
 * @param DicePlusSigns:eval
 * @text Positive Plus Sign?
 * @parent DiceEffects
 * @type boolean
 * @on Use +
 * @off Don't Use
 * @desc Show + sign for positive numbers?
 * @default true
 *
 * @param DiceCount:str
 * @text Dice Count Format
 * @parent DiceEffects
 * @desc Text format used for Dice Count effect.
 * %1 - Effect Number
 * @default Dice%1
 *
 * @param DiceAdvantage:str
 * @text Advantage Format
 * @parent DiceEffects
 * @desc Text format used for Advantage effect.
 * %1 - Effect Number
 * @default Adv%1
 *
 * @param DiceDisadvantage:str
 * @text Disadvantage Format
 * @parent DiceEffects
 * @desc Text format used for Disdvantage effect.
 * %1 - Effect Number
 * @default Dis%1
 *
 * @param DiceRank:str
 * @text Dice Rank Format
 * @parent DiceEffects
 * @desc Text format used for Dice Rank effect.
 * %1 - Effect Number
 * @default Rank%1
 *
 * @param DiceModifier:str
 * @text Roll Modifier Format
 * @parent DiceEffects
 * @desc Text format used for Roll Modifier effect.
 * %1 - Effect Number
 * @default Roll%1
 *
 * @param EffectCosts
 * @text Effect Costs
 *
 * @param CostDisplayFormat:str
 * @text Cost Display Format
 * @parent EffectCosts
 * @desc How the overall cost is displayed.
 * %1 - Cost Text
 * @default \}%1\{
 *
 * @param CostPrePostFormat:str
 * @text Pre/Post-Cost
 * @parent EffectCosts
 * @desc How pre/post cost text is displayed.
 * %1 - Prev; %2 - Post
 * @default %1 %2
 *
 * @param CostUsedUp:str
 * @text Used Up
 * @parent EffectCosts
 * @desc How a cost is displayed when its uses are spent.
 * Text codes allowed.
 * @default USED!
 *
 * @param CostUseTimesFmt:str
 * @text Use Times Format
 * @parent EffectCosts
 * @desc How use times are formated.
 * %1 - Current; %2 - Max Uses; %3 - Remaining
 * @default (×%1/%2)
 *
 * @param CostShowMaxUse1:eval
 * @text Show Max Use of 1?
 * @parent CostUseTimesFmt:str
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the use cost when there's only 1 max use?
 * @default false
 *
 * @param CostUnlimitedUse:str
 * @text Unlimited Uses
 * @parent CostUseTimesFmt:str
 * @desc Text used to indicate unlimited usage.
 * Text codes allowed.
 * @default ∞
 *
 * @param CostVarFormat:str
 * @text Variable Cost Format
 * @parent EffectCosts
 * @desc How variable cost is displayed.
 * %1 - Cost; %2 - Quantity
 * @default (×%2-%1)
 *
 * @param CostItemFormat:str
 * @text Item Cost Format
 * @parent EffectCosts
 * @desc How item cost is displayed.
 * %1 - Cost; %2 - Quantity
 * @default (×%2-%1)
 *
 * @param CostWeaponFormat:str
 * @text Weapon Cost Format
 * @parent EffectCosts
 * @desc How weapon cost is displayed.
 * %1 - Cost; %2 - Quantity
 * @default (×%2-%1)
 *
 * @param CostArmorFormat:str
 * @text Armor Cost Format
 * @parent EffectCosts
 * @desc How armor cost is displayed.
 * %1 - Cost; %2 - Quantity
 * @default (×%2-%1)
 *
 * @param CostSkillUserName:str
 * @text Skill User's Name
 * @parent EffectCosts
 * @desc How the skill user's name is displayed.
 * %1 - Name
 * @default [%1]
 *
 * @param CostSkillUserFmt:str
 * @text User to Cost Format
 * @parent CostSkillUserName:str
 * @desc How the skill user's name is displayed to cost.
 * %1 - Name; %2 - Skill Cost
 * @default %1➤%2
 *
 * @param Subtitle
 * @text Subtitle Window
 *
 * @param SubtitleTotal:str
 * @text Roll for Total
 * @parent Subtitle
 * @desc Subtitle text for a roll total.
 * @default Roll for \C[23]total\C[0] number
 *
 * @param SubtitleHighest:str
 * @text Roll for Highest
 * @parent Subtitle
 * @desc Subtitle text to roll for highest.
 * @default Roll for \C[24]highest\C[0] number
 *
 * @param SubtitleAverage:str
 * @text Roll for Average
 * @parent Subtitle
 * @desc Subtitle text to roll for average.
 * @default Roll for \C[21]average\C[0] number
 *
 * @param SubtitleLowest:str
 * @text Roll for Lowest
 * @parent Subtitle
 * @desc Subtitle text to roll for lowest.
 * @default Roll for \C[21]lowest\C[0] number
 *
 * @param SubtitleAboveTarget:str
 * @text Roll: > Target
 * @parent Subtitle
 * @desc Subtitle text to roll for above target.
 * %1 - Target Roll
 * @default \C[5]Difficulty Class:\C[0] Above \C[24]%1\C[0]
 *
 * @param SubtitleAboveEqualTarget:str
 * @text Roll: >= Target
 * @parent Subtitle
 * @desc Subtitle text to roll for above/equal target.
 * %1 - Target Roll
 * @default \C[5]Difficulty Class:\C[0] At least \C[24]%1\C[0]
 *
 * @param SubtitleBelowEqualTarget:str
 * @text Roll: <= Target
 * @parent Subtitle
 * @desc Subtitle text to roll for below/equal target.
 * %1 - Target Roll
 * @default \C[5]Difficulty Class:\C[0] At most \C[24]%1\C[0]
 *
 * @param SubtitleBelowTarget:str
 * @text Roll: < Target
 * @parent Subtitle
 * @desc Subtitle text to roll for below target.
 * %1 - Target Roll
 * @default \C[5]Difficulty Class:\C[0] Below \C[24]%1\C[0]
 *
 * @param SubtitleCritSuccess:str
 * @text Critical Success
 * @parent Subtitle
 * @desc Subtitle text for a Critical Success on a Natural Roll.
 * @default \C[17]CRITICAL SUCCESS!
 *
 * @param SubtitleCritFailure:str
 * @text Critical Failure
 * @parent Subtitle
 * @desc Subtitle text for a Critical Failure on a Natural Roll.
 * @default \C[2]CRITICAL FAILURE!
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Container
 * @text Sprite Container
 *
 * @param Container_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Container
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Math.round(Graphics.width * 0.90), 816);\nconst wx = Math.round((Graphics.width - ww) / 2);\nconst wy = this.calcWindowHeight(2, false) + this.calcWindowHeight(1, false);\nconst wh = Graphics.height - wy - this.calcWindowHeight(4, true) - this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param TitleWindow
 * @text Title Window
 *
 * @param Title_BgType:num
 * @text Background Type
 * @parent TitleWindow
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
 * @param Title_RectJS:func
 * @text JS: X, Y, W, H
 * @parent TitleWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Math.round(Graphics.width * 0.80), 716);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.round((Graphics.width - ww) / 2);\nconst wy = this.calcWindowHeight(2, false) - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SubtitleWindow
 * @text Subtitle Window
 *
 * @param Subtitle_BgType:num
 * @text Background Type
 * @parent SubtitleWindow
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
 * @param Subtitle_RectJS:func
 * @text JS: X, Y, W, H
 * @parent SubtitleWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Math.round(Graphics.width * 0.80), 716);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.round((Graphics.width - ww) / 2);\nconst wy = Graphics.height - this.calcWindowHeight(4, true) - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param DataWindows
 * @text Data Windows
 *
 * @param DataCount_BgType:num
 * @text Dice Count: BG Type
 * @parent DataWindows
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
 * @param DataCount_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DataCount_BgType:num
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const base = Math.min(Math.round(Graphics.width * 0.90), 816);\nconst ww = Math.floor(base / 3);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.round((Graphics.width - base) / 2);\nconst wy = this.calcWindowHeight(2, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param DataRank_BgType:num
 * @text Dice Rank: BG Type
 * @parent DataWindows
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
 * @param DataRank_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DataRank_BgType:num
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const base = Math.min(Math.round(Graphics.width * 0.90), 816);\nconst ww = Math.ceil(base / 3);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.round((Graphics.width - ww) / 2);\nconst wy = this.calcWindowHeight(2, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param DataMod_BgType:num
 * @text Modifier: BG Type
 * @parent DataWindows
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
 * @param DataMod_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DataMod_BgType:num
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const base = Math.min(Math.round(Graphics.width * 0.90), 816);\nconst ww = Math.floor(base / 3);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.round((Graphics.width + ww) / 2);\nconst wy = this.calcWindowHeight(2, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param Command_BgType:num
 * @text Background Type
 * @parent CommandWindow
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
 * @param CommandShowEffects:eval
 * @text Show "View Effects"?
 * @parent Animation
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show "View Effects" command?
 * @default true
 *
 * @param CommandShowBonus:eval
 * @text Show "Add Bonus"?
 * @parent Animation
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show "Add Bonus" command?
 * @default true
 *
 * @param Command_TextAlign:str
 * @text Text Align
 * @parent CommandWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for this window?
 * @default center
 *
 * @param Command_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Math.round(Graphics.width * 0.50), 360);\nconst wh = this.calcWindowHeight(this.totalDiceRollChoices(), true);\nconst wx = Math.round((Graphics.width - ww) / 2);\nconst wy = Graphics.height - this.calcWindowHeight(4, true) + Math.round((this.calcWindowHeight(4, true) - this.calcWindowHeight(3, true)) / 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ListWindows
 * @text List Windows
 *
 * @param EffectList_BgType:num
 * @text Effect List: BG Type
 * @parent ListWindows
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
 * @param BonusList_BgType:num
 * @text Bonus List: BG Type
 * @parent ListWindows
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
 * @param ListColumns:num
 * @text Window Columns
 * @parent ListWindows
 * @type number
 * @min 1
 * @desc How many columns are used for these windows?
 * @default 2
 *
 * @param ListColSpacing:num
 * @text Column Spacing
 * @parent ListWindows
 * @type number
 * @min 0
 * @desc How much spacing is there between columns?
 * @default 16
 *
 * @param List_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ListWindows
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Graphics.width, 1016);\nconst wh = this.calcWindowHeight(4, true);\nconst wx = Math.round((Graphics.width - ww) / 2);\nconst wy = Graphics.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Dice Seed Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DiceSeed:
 *
 * @param Appearance
 * @text Appearance Overrides
 * 
 * @param d4_filenames:arraystr
 * @text D4 Image Filename(s)
 * @parent Appearance
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Use custom images for this dice? Priority over colors.
 * Overrides default parameters. Location: img/pictures/
 * @default []
 * 
 * @param d6_filenames:arraystr
 * @text D6 Image Filename(s)
 * @parent Appearance
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Use custom images for this dice? Priority over colors.
 * Overrides default parameters. Location: img/pictures/
 * @default []
 * 
 * @param d8_filenames:arraystr
 * @text D8 Image Filename(s)
 * @parent Appearance
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Use custom images for this dice? Priority over colors.
 * Overrides default parameters. Location: img/pictures/
 * @default []
 * 
 * @param d10_filenames:arraystr
 * @text D10 Image Filename(s)
 * @parent Appearance
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Use custom images for this dice? Priority over colors.
 * Overrides default parameters. Location: img/pictures/
 * @default []
 * 
 * @param d12_filenames:arraystr
 * @text D12 Image Filename(s)
 * @parent Appearance
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Use custom images for this dice? Priority over colors.
 * Overrides default parameters. Location: img/pictures/
 * @default []
 * 
 * @param d20_filenames:arraystr
 * @text D20 Image Filename(s)
 * @parent Appearance
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Use custom images for this dice? Priority over colors.
 * Overrides default parameters. Location: img/pictures/
 * @default []
 *
 * @param colors:arraystr
 * @text Dice Colors(s)
 * @parent Appearance
 * @type string[]
 * @desc Use #rrggbb for custom colors or regular numbers for text
 * colors from the Window Skin. Overrides default parameters.
 * @default []
 *
 * @param Seed:str
 * @text Seed
 * @desc What is the Random Number Seed used for this Dice Roll?
 * Use numbers or text. Use "none" to not use a seed.
 * @default none
 *
 * @param ApplyDaily:eval
 * @text Daily Marker
 * @parent Seed:str
 * @type boolean
 * @on Apply To Seed
 * @off Don't Apply
 * @desc Apply daily marker to Random Number results?
 * @default false
 *
 * @param ApplyUnique:eval
 * @text Save-Unique Marker
 * @parent Seed:str
 * @type boolean
 * @on Apply To Seed
 * @off Don't Apply
 * @desc Apply save-unique marker to Random Number results?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Dice Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoMods:
 *
 * @param GeneralEffects:arraystruct
 * @text General Auto-Effects
 * @type struct<GeneralAutoEffect>[]
 * @desc These auto-effects will be automatically activated as long
 * its conditions are met at the start of the dice-roll.
 * @default []
 *
 * @param VariableEffects:arraystruct
 * @text Variable Requirements
 * @type struct<VariableAutoEffect>[]
 * @desc These auto-effects require a variable(s) to be at least a
 * certain value to automatically activate.
 * @default []
 *
 * @param ItemEffects:arraystruct
 * @text Item Requirements
 * @type struct<ItemAutoEffect>[]
 * @desc These auto-effects require an item(s) to have a certain
 * quantity to automatically activate.
 * @default []
 *
 * @param WeaponEffects:arraystruct
 * @text Weapon Requirements
 * @type struct<WeaponAutoEffect>[]
 * @desc These auto-effects require a weapon(s) to be in party
 * possession or is equipped to automatically activate.
 * @default []
 *
 * @param ArmorEffects:arraystruct
 * @text Armor Requirements
 * @type struct<ArmorAutoEffect>[]
 * @desc These auto-effects require an armor(s) to be in party
 * possession or is equipped to automatically activate.
 * @default []
 *
 * @param SkillEffects:arraystruct
 * @text Skill Requirements
 * @type struct<SkillAutoEffect>[]
 * @desc These auto-effects require a skill(s) to be available
 * within the party to automatically activate.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Bonus Dice Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BonusMods:
 *
 * @param GeneralEffects:arraystruct
 * @text General Bonus Effects
 * @type struct<GeneralBonusEffect>[]
 * @desc Add general bonus dice effects here that the player can
 * select to use the effect.
 * @default []
 *
 * @param VariableEffects:arraystruct
 * @text Variable Cost Effects
 * @type struct<VariableBonusEffect>[]
 * @desc Variable Bonus Effects require deducting from variable(s)
 * as a cost to use the effect.
 * @default []
 *
 * @param ItemEffects:arraystruct
 * @text Item Cost Effects
 * @type struct<ItemBonusEffect>[]
 * @desc Item Bonus Effects require consuming the target item(s)
 * as a cost to use the effect.
 * @default []
 *
 * @param WeaponEffects:arraystruct
 * @text Weapon Cost Effects
 * @type struct<WeaponBonusEffect>[]
 * @desc Weapon Bonus Effects require consuming the target
 * weapon(s) as a cost to use the effect.
 * @default []
 *
 * @param ArmorEffects:arraystruct
 * @text Armor Cost Effects
 * @type struct<ArmorBonusEffect>[]
 * @desc Armor Bonus Effects require consuming target the armor(s)
 * as a cost to use the effect.
 * @default []
 *
 * @param SkillEffects:arraystruct
 * @text Skill Cost Effects
 * @type struct<SkillBonusEffect>[]
 * @desc Skill Bonus Effects require paying skill costs to
 * activate and use the effect.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * General Auto Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GeneralAutoEffect:
 *
 * @param Name:str
 * @text Auto Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed.
 * @default Untitled
 *
 * @param Icon:num
 * @text Auto Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * @default 87
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param SwitchID:num
 * @text Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to meet conditions.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param ConditionJS:func
 * @text JS: Condition
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine the conditions for
 * this dice effect to be automatically activated.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 */
/* ----------------------------------------------------------------------------
 * General Bonus Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GeneralBonusEffect:
 *
 * @param Name:str
 * @text Bonus Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed.
 * @default Untitled
 *
 * @param Icon:num
 * @text Bonus Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * @default 87
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Name:str
 * @type animation
 * @desc Play this animation when the effect activates.
 * Animation will play on the player character.
 * @default 0
 * 
 * @param Costs
 * @text Effect Costs
 *
 * @param MaxUses:eval
 * @text Maximum Uses
 * @parent Costs
 * @desc How many times can this effect be used?
 * You may use code. Over 1000000 for unlimited.
 * @default 1
 *
 * @param ShowUses:eval
 * @text Show Uses Left?
 * @parent MaxUses:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how many uses are left?
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreCostText:str
 * @text Pre-Cost Text
 * @parent Text
 * @desc What text is added before the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PostCostText:str
 * @text Post-Cost Text
 * @parent Text
 * @desc What text is added after the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param ShowSwitchID:num
 * @text Show Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to show effect.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param EnableSwitchID:num
 * @text Enable Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to enable effect.
 * Use 0 to not use.
 * @default 0
 *
 * @param ShowJS:func
 * @text JS: Show
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine show conditions for
 * this dice effect to become available for use.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine enable conditions for
 * this dice effect to become usable.
 * @default "return true;"
 *
 * @param ActivateJS:func
 * @text JS: On Select
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine what happens when this
 * dice effect is selected and activated.
 * @default "// Do Nothing"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Auto Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VariableAutoEffect:
 *
 * @param Name:str
 * @text Auto Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed.
 * @default Untitled
 *
 * @param Icon:num
 * @text Auto Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * @default 87
 * 
 * @param RefData
 * @text Reference Data
 *
 * @param VariableReqID:num
 * @text Required Variable ID
 * @parent RefData
 * @type variable
 * @desc This variable is to be checked from.
 * Changes don't affect effect mid-roll.
 * @default 2
 *
 * @param VariableReqValue:eval
 * @text Required Value
 * @parent VariableReqID:num
 * @desc Variable requires at least this much in value.
 * You may use code. Changes don't affect effect mid-roll.
 * @default 1
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param SwitchID:num
 * @text Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to meet conditions.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param ConditionJS:func
 * @text JS: Condition
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine the conditions for
 * this dice effect to be automatically activated.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Bonus Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VariableBonusEffect:
 *
 * @param Name:str
 * @text Bonus Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed.
 * @default Untitled
 *
 * @param Icon:num
 * @text Bonus Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * @default 87
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Name:str
 * @type animation
 * @desc Play this animation when the effect activates.
 * Animation will play on the player character.
 * @default 0
 * 
 * @param Costs
 * @text Effect Costs
 *
 * @param VariableCostID:num
 * @text Variable Cost ID
 * @parent Costs
 * @type variable
 * @desc This variable is to be deducted from.
 * Changes do not reveal effect mid-Dice Roll.
 * @default 2
 *
 * @param VariableCostValue:eval
 * @text Cost Value
 * @parent VariableCostID:num
 * @desc Deduct this much from the target variable.
 * You may use code.
 * @default 1
 *
 * @param ShowVariableCost:eval
 * @text Show Variable Cost?
 * @parent VariableCostID:num
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show variable cost?
 * @default true
 *
 * @param MaxUses:eval
 * @text Maximum Uses
 * @parent Costs
 * @desc How many times can this effect be used?
 * You may use code. Over 1000000 for unlimited.
 * @default 1
 *
 * @param ShowUses:eval
 * @text Show Uses Left?
 * @parent MaxUses:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how many uses are left?
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreCostText:str
 * @text Pre-Cost Text
 * @parent Text
 * @desc What text is added before the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PostCostText:str
 * @text Post-Cost Text
 * @parent Text
 * @desc What text is added after the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param ShowSwitchID:num
 * @text Show Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to show effect.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param EnableSwitchID:num
 * @text Enable Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to enable effect.
 * Use 0 to not use.
 * @default 0
 *
 * @param ShowJS:func
 * @text JS: Show
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine show conditions for
 * this dice effect to become available for use.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine enable conditions for
 * this dice effect to become usable.
 * @default "return true;"
 *
 * @param ActivateJS:func
 * @text JS: On Select
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine what happens when this
 * dice effect is selected and activated.
 * @default "// Do Nothing"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Auto Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemAutoEffect:
 *
 * @param Name:str
 * @text Auto Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Auto Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 * 
 * @param RefData
 * @text Reference Data
 *
 * @param ItemReqID:num
 * @text Required Item ID
 * @parent RefData
 * @type item
 * @desc This is the item whose quantity is checked.
 * Changes don't affect effect mid-roll.
 * @default 7
 *
 * @param ItemReqValue:eval
 * @text Required Value
 * @parent ItemReqID:num
 * @desc Quantity requires at least this much in value.
 * You may use code. Changes don't affect effect mid-roll.
 * @default 1
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param SwitchID:num
 * @text Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to meet conditions.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param ConditionJS:func
 * @text JS: Condition
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine the conditions for
 * this dice effect to be automatically activated.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Bonus Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemBonusEffect:
 *
 * @param Name:str
 * @text Bonus Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Bonus Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Name:str
 * @type animation
 * @desc Play this animation when the effect activates.
 * Animation will play on the player character.
 * @default 0
 * 
 * @param Costs
 * @text Effect Costs
 *
 * @param ItemCostID:num
 * @text Item Cost ID
 * @parent Costs
 * @type item
 * @desc This item is to be deducted from.
 * Changes do not reveal effect mid-Dice Roll.
 * @default 7
 *
 * @param ItemCostValue:eval
 * @text Cost Value
 * @parent ItemCostID:num
 * @desc Deduct this much from the target item.
 * You may use code.
 * @default 1
 *
 * @param ShowItemCost:eval
 * @text Show Item Cost?
 * @parent ItemCostID:num
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show item cost?
 * @default true
 *
 * @param MaxUses:eval
 * @text Maximum Uses
 * @parent Costs
 * @desc How many times can this effect be used?
 * You may use code. Over 1000000 for unlimited.
 * @default 1
 *
 * @param ShowUses:eval
 * @text Show Uses Left?
 * @parent MaxUses:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how many uses are left?
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreCostText:str
 * @text Pre-Cost Text
 * @parent Text
 * @desc What text is added before the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PostCostText:str
 * @text Post-Cost Text
 * @parent Text
 * @desc What text is added after the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param ShowSwitchID:num
 * @text Show Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to show effect.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param EnableSwitchID:num
 * @text Enable Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to enable effect.
 * Use 0 to not use.
 * @default 0
 *
 * @param ShowJS:func
 * @text JS: Show
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine show conditions for
 * this dice effect to become available for use.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine enable conditions for
 * this dice effect to become usable.
 * @default "return true;"
 *
 * @param ActivateJS:func
 * @text JS: On Select
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine what happens when this
 * dice effect is selected and activated.
 * @default "// Do Nothing"
 *
 */
/* ----------------------------------------------------------------------------
 * Weapon Auto Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WeaponAutoEffect:
 *
 * @param Name:str
 * @text Auto Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Auto Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 * 
 * @param RefData
 * @text Reference Data
 *
 * @param WeaponReqID:num
 * @text Required Weapon ID
 * @parent RefData
 * @type weapon
 * @desc This is the weapon whose presence is checked.
 * Changes don't affect effect mid-roll.
 * @default 1
 *
 * @param WeaponIncludeEquip:eval
 * @text Include Equipped?
 * @type boolean
 * @parent WeaponReqID:num
 * @on Include Equipped
 * @off Unequipped Only
 * @desc Allow equipped weapons to be included in the count.
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param SwitchID:num
 * @text Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to meet conditions.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param ConditionJS:func
 * @text JS: Condition
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine the conditions for
 * this dice effect to be automatically activated.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 */
/* ----------------------------------------------------------------------------
 * Weapon Bonus Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WeaponBonusEffect:
 *
 * @param Name:str
 * @text Bonus Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Bonus Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Name:str
 * @type animation
 * @desc Play this animation when the effect activates.
 * Animation will play on the player character.
 * @default 0
 * 
 * @param Costs
 * @text Effect Costs
 *
 * @param WeaponCostID:num
 * @text Weapon Cost ID
 * @parent Costs
 * @type weapon
 * @desc This weapon is to be deducted from.
 * Changes do not reveal effect mid-Dice Roll.
 * @default 1
 *
 * @param WeaponCostValue:eval
 * @text Cost Value
 * @parent WeaponCostID:num
 * @desc Deduct this much from the target weapon.
 * You may use code.
 * @default 1
 *
 * @param ShowWeaponCost:eval
 * @text Show Weapon Cost?
 * @parent WeaponCostID:num
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show weapon cost?
 * @default true
 *
 * @param MaxUses:eval
 * @text Maximum Uses
 * @parent Costs
 * @desc How many times can this effect be used?
 * You may use code. Over 1000000 for unlimited.
 * @default 1
 *
 * @param ShowUses:eval
 * @text Show Uses Left?
 * @parent MaxUses:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how many uses are left?
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreCostText:str
 * @text Pre-Cost Text
 * @parent Text
 * @desc What text is added before the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PostCostText:str
 * @text Post-Cost Text
 * @parent Text
 * @desc What text is added after the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param ShowSwitchID:num
 * @text Show Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to show effect.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param EnableSwitchID:num
 * @text Enable Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to enable effect.
 * Use 0 to not use.
 * @default 0
 *
 * @param ShowJS:func
 * @text JS: Show
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine show conditions for
 * this dice effect to become available for use.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine enable conditions for
 * this dice effect to become usable.
 * @default "return true;"
 *
 * @param ActivateJS:func
 * @text JS: On Select
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine what happens when this
 * dice effect is selected and activated.
 * @default "// Do Nothing"
 *
 */
/* ----------------------------------------------------------------------------
 * Armor Auto Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ArmorAutoEffect:
 *
 * @param Name:str
 * @text Auto Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Auto Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 * 
 * @param RefData
 * @text Reference Data
 *
 * @param ArmorReqID:num
 * @text Required Armor ID
 * @parent RefData
 * @type armor
 * @desc This is the armor whose presence is checked.
 * Changes don't affect effect mid-roll.
 * @default 1
 *
 * @param ArmorIncludeEquip:eval
 * @text Include Equipped?
 * @type boolean
 * @parent ArmorReqID:num
 * @on Include Equipped
 * @off Unequipped Only
 * @desc Allow equipped armors to be included in the count.
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param SwitchID:num
 * @text Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to meet conditions.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param ConditionJS:func
 * @text JS: Condition
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine the conditions for
 * this dice effect to be automatically activated.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 */
/* ----------------------------------------------------------------------------
 * Armor Bonus Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ArmorBonusEffect:
 *
 * @param Name:str
 * @text Bonus Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Bonus Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Name:str
 * @type animation
 * @desc Play this animation when the effect activates.
 * Animation will play on the player character.
 * @default 0
 * 
 * @param Costs
 * @text Effect Costs
 *
 * @param ArmorCostID:num
 * @text Armor Cost ID
 * @parent Costs
 * @type armor
 * @desc This armor is to be deducted from.
 * Changes do not reveal effect mid-Dice Roll.
 * @default 2
 *
 * @param ArmorCostValue:eval
 * @text Cost Value
 * @parent ArmorCostID:num
 * @desc Deduct this much from the target armor.
 * You may use code.
 * @default 1
 *
 * @param ShowArmorCost:eval
 * @text Show Armor Cost?
 * @parent ArmorCostID:num
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show armor cost?
 * @default true
 *
 * @param MaxUses:eval
 * @text Maximum Uses
 * @parent Costs
 * @desc How many times can this effect be used?
 * You may use code. Over 1000000 for unlimited.
 * @default 1
 *
 * @param ShowUses:eval
 * @text Show Uses Left?
 * @parent MaxUses:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how many uses are left?
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreCostText:str
 * @text Pre-Cost Text
 * @parent Text
 * @desc What text is added before the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PostCostText:str
 * @text Post-Cost Text
 * @parent Text
 * @desc What text is added after the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param ShowSwitchID:num
 * @text Show Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to show effect.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param EnableSwitchID:num
 * @text Enable Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to enable effect.
 * Use 0 to not use.
 * @default 0
 *
 * @param ShowJS:func
 * @text JS: Show
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine show conditions for
 * this dice effect to become available for use.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine enable conditions for
 * this dice effect to become usable.
 * @default "return true;"
 *
 * @param ActivateJS:func
 * @text JS: On Select
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine what happens when this
 * dice effect is selected and activated.
 * @default "// Do Nothing"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Auto Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillAutoEffect:
 *
 * @param Name:str
 * @text Auto Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Auto Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 * 
 * @param RefData
 * @text Reference Data
 *
 * @param SkillReqID:num
 * @text Required Skill ID
 * @parent RefData
 * @type skill
 * @desc This is the skill whose presence is checked.
 * Changes don't affect effect mid-roll.
 * @default 52
 *
 * @param SkillLearnedOnly:eval
 * @text Skill Learned Only?
 * @parent SkillReqID:num
 * @type boolean
 * @on Learned Only
 * @off Temp Skills Allowed
 * @desc Require the skill to be learned only or allow temporary skills?
 * @default false
 *
 * @param SkillUser:str
 * @text Skill User(s)
 * @parent SkillReqID:num
 * @type select
 * @option Party Leader
 * @value leader
 * @option Any Party Member
 * @value anyMember
 * @option Every Party Member
 * @value everyMember
 * @option Any Battle Member
 * @value anyBattleMember
 * @option Every Battle Member
 * @value everyBattleMember
 * @option Any Specific Actor(s)
 * @value anySpecificActor
 * @option Every Specific Actor(s)
 * @value everySpecificActor
 * @desc Select which actor(s) to check for the required skill.
 * @default everyBattleMember
 *
 * @param SpecificActorIDs:arraynum
 * @text Specific Actor ID(s)
 * @parent SkillReqID:num
 * @type actor[]
 * @desc Determine which "Specific Actor(s)" to pick from.
 * Specific actor(s) must be in the party, main or reserve.
 * @default ["1"]
 *
 * @param SkillListUserName:eval
 * @text Show User Name?
 * @parent SkillReqID:num
 * @type boolean
 * @on Show Name
 * @off Don't Show
 * @desc Shows the skill user's name next to the skill name?
 * @default true
 *
 * @param SkillUserAlive:eval
 * @text Require User Alive?
 * @parent SkillReqID:num
 * @type boolean
 * @on Must Be Alive
 * @off Can Be Dead
 * @desc Requires the skill user to be alive?
 * Or can they be dead or alive?
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param SwitchID:num
 * @text Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to meet conditions.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param ConditionJS:func
 * @text JS: Condition
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine the conditions for
 * this dice effect to be automatically activated.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Bonus Effects Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillBonusEffect:
 *
 * @param Name:str
 * @text Bonus Effect Name
 * @desc What is the name of this effect?
 * Text codes allowed. Use "AutoName" to auto-name.
 * @default AutoName
 *
 * @param Icon:num
 * @text Bonus Effect Icon
 * @parent Name:str
 * @desc The icon used for this effect.
 * Use 1000000 to auto-select icon.
 * @default 1000000
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Name:str
 * @type animation
 * @desc Play this animation when the effect activates.
 * Animation will play on the player character.
 * @default 0
 * 
 * @param Costs
 * @text Effect Costs
 *
 * @param SkillCostID:num
 * @text Skill Cost ID
 * @parent Costs
 * @type skill
 * @desc This skill's cost is to be paid by an actor.
 * Changes do not reveal effect mid-Dice Roll.
 * @default 52
 *
 * @param SkillLearnedOnly:eval
 * @text Skill Learned Only?
 * @parent SkillCostID:num
 * @type boolean
 * @on Learned Only
 * @off Temp Skills Allowed
 * @desc Require the skill to be learned only or allow temporary skills?
 * @default false
 *
 * @param SkillUser:str
 * @text Skill User(s)
 * @parent SkillCostID:num
 * @type select
 * @option Party Leader
 * @value leader
 * @option Any Party Member
 * @value anyMember
 * @option Every Party Member
 * @value everyMember
 * @option Any Battle Member
 * @value anyBattleMember
 * @option Every Battle Member
 * @value everyBattleMember
 * @option Any Specific Actor(s)
 * @value anySpecificActor
 * @option Every Specific Actor(s)
 * @value everySpecificActor
 * @desc Select which actor(s) to check for the required skill.
 * @default everyBattleMember
 *
 * @param SpecificActorIDs:arraynum
 * @text Specific Actor ID(s)
 * @parent SkillCostID:num
 * @type actor[]
 * @desc Determine which "Specific Actor(s)" to pick from.
 * Specific actor(s) must be in the party, main or reserve.
 * @default ["1"]
 *
 * @param SkillListUserName:eval
 * @text Show User Name?
 * @parent SkillCostID:num
 * @type boolean
 * @on Show Name
 * @off Don't Show
 * @desc Shows the skill user's name next to the skill name?
 * @default true
 *
 * @param SkillUserAlive:eval
 * @text Require User Alive?
 * @parent SkillCostID:num
 * @type boolean
 * @on Must Be Alive
 * @off Can Be Dead
 * @desc Requires the skill user to be alive?
 * Or can they be dead or alive?
 * @default true
 *
 * @param ShowSkillCost:eval
 * @text Show Skill Cost?
 * @parent SkillCostID:num
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show skill cost?
 * @default true
 *
 * @param MaxUses:eval
 * @text Maximum Uses
 * @parent Costs
 * @desc How many times can this effect be used?
 * You may use code. Over 1000000 for unlimited.
 * @default 1
 *
 * @param ShowUses:eval
 * @text Show Uses Left?
 * @parent MaxUses:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how many uses are left?
 * @default true
 * 
 * @param DiceEffects
 * @text Dice Effects
 *
 * @param Advantage:eval
 * @text Count/Advantage
 * @parent DiceEffects
 * @desc Change dice count (roll value) or advantage/disadvantage
 * (target value). You may use code.
 * @default +0
 *
 * @param DiceRank:eval
 * @text Rank/Type
 * @parent DiceEffects
 * @desc Raises/lowers dice rank: D4, D6, D8, D10, D12, D20.
 * You may use code. Higher rank = more sides.
 * @default +0
 *
 * @param DiceModifier:eval
 * @text Modifier (Static)
 * @parent DiceEffects
 * @desc Alters the finalized rolled dice value.
 * You may use code.
 * @default +0
 *
 * @param DiceModifierRand:eval
 * @text Modifier (Random)
 * @parent DiceEffects
 * @desc Adds a random element to the dice value.
 * You may use code.
 * @default +0
 * 
 * @param Text
 * @text Additional Text
 *
 * @param PreCostText:str
 * @text Pre-Cost Text
 * @parent Text
 * @desc What text is added before the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PostCostText:str
 * @text Post-Cost Text
 * @parent Text
 * @desc What text is added after the dice cost text?
 * Text codes allowed.
 * @default 
 *
 * @param PreEffectText:str
 * @text Pre-Effect Text
 * @parent Text
 * @desc What text is added before the dice effects text?
 * Text codes allowed.
 * @default 
 *
 * @param PostEffectText:str
 * @text Post-Effect Text
 * @parent Text
 * @desc What text is added after the dice effects text?
 * Text codes allowed.
 * @default 
 * 
 * @param Conditions
 * @text Effect Conditions
 *
 * @param ShowSwitchID:num
 * @text Show Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to show effect.
 * Use 0 to not use. Does not reveal mid-Dice Roll.
 * @default 0
 *
 * @param EnableSwitchID:num
 * @text Enable Switch ID
 * @parent Conditions
 * @type switch
 * @desc This Switch is required to be ON to enable effect.
 * Use 0 to not use.
 * @default 0
 *
 * @param ShowJS:func
 * @text JS: Show
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine show conditions for
 * this dice effect to become available for use.
 * @default "// Does not reveal mid-Dice Roll.\nreturn true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine enable conditions for
 * this dice effect to become usable.
 * @default "return true;"
 *
 * @param ActivateJS:func
 * @text JS: On Select
 * @parent Conditions
 * @type note
 * @desc JavaScript code used to determine what happens when this
 * dice effect is selected and activated.
 * @default "// Do Nothing"
 *
 */
//=============================================================================

const _0x497107=_0x2bf7;(function(_0x5b7bf3,_0x439308){const _0x25e4f1=_0x2bf7,_0x1cde88=_0x5b7bf3();while(!![]){try{const _0x2e92c6=-parseInt(_0x25e4f1(0x37c))/0x1*(parseInt(_0x25e4f1(0x48d))/0x2)+parseInt(_0x25e4f1(0x350))/0x3+-parseInt(_0x25e4f1(0x317))/0x4+parseInt(_0x25e4f1(0x448))/0x5+parseInt(_0x25e4f1(0x236))/0x6+parseInt(_0x25e4f1(0x2ca))/0x7+parseInt(_0x25e4f1(0x25a))/0x8*(-parseInt(_0x25e4f1(0x3f9))/0x9);if(_0x2e92c6===_0x439308)break;else _0x1cde88['push'](_0x1cde88['shift']());}catch(_0x19cfe2){_0x1cde88['push'](_0x1cde88['shift']());}}}(_0xcfab,0xadf67));var label=_0x497107(0x384),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x24f776){const _0x5112d2=_0x497107;return _0x24f776[_0x5112d2(0x2af)]&&_0x24f776[_0x5112d2(0x48c)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x497107(0x293)]=VisuMZ[label][_0x497107(0x293)]||{},VisuMZ[_0x497107(0x2b1)]=function(_0x262cb1,_0x4d43f8){const _0x4367b8=_0x497107;for(const _0x3ee605 in _0x4d43f8){if(_0x3ee605['match'](/(.*):(.*)/i)){const _0xad27d6=String(RegExp['$1']),_0x54da9f=String(RegExp['$2'])[_0x4367b8(0x200)]()['trim']();let _0x5d9949,_0xd14927,_0x4723f6;switch(_0x54da9f){case _0x4367b8(0x41b):_0x5d9949=_0x4d43f8[_0x3ee605]!==''?Number(_0x4d43f8[_0x3ee605]):0x0;break;case _0x4367b8(0x3fd):_0xd14927=_0x4d43f8[_0x3ee605]!==''?JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605]):[],_0x5d9949=_0xd14927['map'](_0x2404dd=>Number(_0x2404dd));break;case _0x4367b8(0x40d):_0x5d9949=_0x4d43f8[_0x3ee605]!==''?eval(_0x4d43f8[_0x3ee605]):null;break;case _0x4367b8(0x32f):_0xd14927=_0x4d43f8[_0x3ee605]!==''?JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605]):[],_0x5d9949=_0xd14927['map'](_0x20d733=>eval(_0x20d733));break;case _0x4367b8(0x367):_0x5d9949=_0x4d43f8[_0x3ee605]!==''?JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605]):'';break;case _0x4367b8(0x3eb):_0xd14927=_0x4d43f8[_0x3ee605]!==''?JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605]):[],_0x5d9949=_0xd14927['map'](_0x553c3b=>JSON[_0x4367b8(0x325)](_0x553c3b));break;case _0x4367b8(0x375):_0x5d9949=_0x4d43f8[_0x3ee605]!==''?new Function(JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605])):new Function(_0x4367b8(0x3ee));break;case _0x4367b8(0x296):_0xd14927=_0x4d43f8[_0x3ee605]!==''?JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605]):[],_0x5d9949=_0xd14927[_0x4367b8(0x37a)](_0xb7dd98=>new Function(JSON[_0x4367b8(0x325)](_0xb7dd98)));break;case'STR':_0x5d9949=_0x4d43f8[_0x3ee605]!==''?String(_0x4d43f8[_0x3ee605]):'';break;case'ARRAYSTR':_0xd14927=_0x4d43f8[_0x3ee605]!==''?JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605]):[],_0x5d9949=_0xd14927[_0x4367b8(0x37a)](_0x513aa5=>String(_0x513aa5));break;case _0x4367b8(0x41f):_0x4723f6=_0x4d43f8[_0x3ee605]!==''?JSON[_0x4367b8(0x325)](_0x4d43f8[_0x3ee605]):{},_0x5d9949=VisuMZ[_0x4367b8(0x2b1)]({},_0x4723f6);break;case _0x4367b8(0x3f5):_0xd14927=_0x4d43f8[_0x3ee605]!==''?JSON['parse'](_0x4d43f8[_0x3ee605]):[],_0x5d9949=_0xd14927[_0x4367b8(0x37a)](_0x51e7f0=>VisuMZ['ConvertParams']({},JSON['parse'](_0x51e7f0)));break;default:continue;}_0x262cb1[_0xad27d6]=_0x5d9949;}}return _0x262cb1;},(_0x38f0d7=>{const _0x332784=_0x497107,_0x165fb2=_0x38f0d7[_0x332784(0x237)];for(const _0x17be2e of dependencies){if(!Imported[_0x17be2e]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x332784(0x329)](_0x165fb2,_0x17be2e)),SceneManager[_0x332784(0x2b7)]();break;}}const _0x21be91=_0x38f0d7[_0x332784(0x48c)];if(_0x21be91[_0x332784(0x31d)](/\[Version[ ](.*?)\]/i)){const _0x55123b=Number(RegExp['$1']);_0x55123b!==VisuMZ[label][_0x332784(0x3b5)]&&(alert(_0x332784(0x3e0)[_0x332784(0x329)](_0x165fb2,_0x55123b)),SceneManager[_0x332784(0x2b7)]());}if(_0x21be91['match'](/\[Tier[ ](\d+)\]/i)){const _0x460b71=Number(RegExp['$1']);_0x460b71<tier?(alert(_0x332784(0x467)['format'](_0x165fb2,_0x460b71,tier)),SceneManager[_0x332784(0x2b7)]()):tier=Math[_0x332784(0x407)](_0x460b71,tier);}VisuMZ[_0x332784(0x2b1)](VisuMZ[label][_0x332784(0x293)],_0x38f0d7[_0x332784(0x2bf)]);})(pluginData),PluginManager[_0x497107(0x406)](pluginData[_0x497107(0x237)],'Dice_RollValue',_0x339650=>{const _0x138c3b=_0x497107;if(!SceneManager['canRollDice']())return;VisuMZ[_0x138c3b(0x2b1)](_0x339650,_0x339650);const _0x1931cd={};_0x1931cd[_0x138c3b(0x46e)]=_0x138c3b(0x43c),VisuMZ[_0x138c3b(0x384)][_0x138c3b(0x401)](_0x1931cd,_0x339650);}),PluginManager[_0x497107(0x406)](pluginData[_0x497107(0x237)],'Dice_TargetValue',_0x3bdb03=>{const _0x3e8f02=_0x497107;if(!SceneManager[_0x3e8f02(0x3b0)]())return;VisuMZ[_0x3e8f02(0x2b1)](_0x3bdb03,_0x3bdb03);const _0xf3bf91={};_0xf3bf91[_0x3e8f02(0x46e)]=_0x3e8f02(0x28e),VisuMZ[_0x3e8f02(0x384)][_0x3e8f02(0x401)](_0xf3bf91,_0x3bdb03);}),VisuMZ[_0x497107(0x384)][_0x497107(0x401)]=function(_0x49453,_0x214a57){const _0x2dbb89=_0x497107;for(const _0x45e872 in _0x214a57){_0x49453[_0x45e872]=_0x214a57[_0x45e872];}_0x49453[_0x2dbb89(0x2fe)]=_0x49453[_0x2dbb89(0x2fe)]||0x1,_0x49453['TotalRolls']=_0x49453[_0x2dbb89(0x2fe)][_0x2dbb89(0x250)](0x1,VisuMZ[_0x2dbb89(0x384)][_0x2dbb89(0x444)]),![0x4,0x6,0x8,0xa,0xc,0x14][_0x2dbb89(0x2b0)](_0x49453[_0x2dbb89(0x3fa)])&&(_0x49453[_0x2dbb89(0x3fa)]=0x14),_0x49453[_0x2dbb89(0x438)]=[0x0,0x4,0x6,0x8,0xa,0xc,0x14][_0x2dbb89(0x3cd)](_0x49453['DiceSides']),_0x49453[_0x2dbb89(0x473)]&&$gameSwitches[_0x2dbb89(0x1f4)](_0x49453['SwitchID'],![]),_0x49453['VariableID']&&$gameVariables['setValue'](_0x49453[_0x2dbb89(0x459)],0x0),SceneManager['setupDiceRoll'](_0x49453);},PluginManager[_0x497107(0x406)](pluginData[_0x497107(0x237)],'Variable_RngRange',_0x26bab2=>{const _0x158aa0=_0x497107;VisuMZ[_0x158aa0(0x2b1)](_0x26bab2,_0x26bab2);const _0x1e2f49=_0x26bab2[_0x158aa0(0x459)]||0x1,_0xc09b5d=Math[_0x158aa0(0x2c2)](_0x26bab2[_0x158aa0(0x44c)]||0x0,_0x26bab2['Max']||0x0),_0x47c17e=Math[_0x158aa0(0x407)](_0x26bab2['Min']||0x0,_0x26bab2[_0x158aa0(0x370)]||0x0),_0x3b7b7c=String(_0x26bab2['Seed'])||'-',_0x45b14b=_0x26bab2[_0x158aa0(0x3df)],_0x3473b8=_0x26bab2[_0x158aa0(0x2ce)],_0x1ef127=$gameSystem[_0x158aa0(0x222)](_0xc09b5d,_0x47c17e,_0x3b7b7c,_0x45b14b,_0x3473b8);$gameVariables['setValue'](_0x1e2f49,_0x1ef127);}),PluginManager[_0x497107(0x406)](pluginData[_0x497107(0x237)],_0x497107(0x3e5),_0xda103e=>{const _0x205a9c=_0x497107;VisuMZ['ConvertParams'](_0xda103e,_0xda103e);const _0x4c2b32=String(_0xda103e[_0x205a9c(0x332)])||'-',_0x33d971=_0xda103e[_0x205a9c(0x3df)],_0x351323=_0xda103e[_0x205a9c(0x2ce)];$gameSystem[_0x205a9c(0x278)](_0x4c2b32,_0x33d971,_0x351323);}),VisuMZ[_0x497107(0x384)]['RegExp']={'rngSeed':/<(?:RNG|SEED|RNG SEED):[ ](.*?)>/gi,'dailySeed':/<DAILY (?:RNG|SEED|RNG SEED):[ ](.*?)>/gi,'uniqueSeed':/<UNIQUE (?:RNG|SEED|RNG SEED):[ ](.*?)>/gi,'dailyUniqueSeed':/<DAILY UNIQUE (?:RNG|SEED|RNG SEED):[ ](.*?)>/gi,'noRngSeed':/<NO (?:RNG|SEED|RNG SEED)>/gi},ImageManager[_0x497107(0x357)]={'border':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x3a2)]??0.3,'color1':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x22b)]??0.6,'color2':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x493)]??0.8,'color3':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)]['Color3Ratio']??0x1},ImageManager['loadDicePicture']=function(_0x1aa585){const _0x5943e5=_0x497107,_0x481962=_0x1aa585[Math[_0x5943e5(0x355)](_0x1aa585['length'])];return this[_0x5943e5(0x353)](_0x481962);},ImageManager[_0x497107(0x266)]=function(_0x10b8eb,_0x83b561){const _0x5f357d=_0x497107,_0x20a638=_0x83b561[Math[_0x5f357d(0x355)](_0x83b561['length'])]??'6';switch(_0x10b8eb){case'd4':return this['createDiceGraphic_D4'](_0x20a638);case'd6':return this[_0x5f357d(0x36c)](_0x20a638);case'd8':return this[_0x5f357d(0x47c)](_0x20a638);case _0x5f357d(0x31e):return this[_0x5f357d(0x1ea)](_0x20a638);case _0x5f357d(0x226):return this[_0x5f357d(0x2ba)](_0x20a638);case'd20':default:return this['createDiceGraphic_D20'](_0x20a638);}},ImageManager[_0x497107(0x488)]=function(_0x2bfd57){const _0x4d278d=_0x497107,_0x26a803=_0x4d278d(0x40f)[_0x4d278d(0x329)](_0x2bfd57);this[_0x4d278d(0x1ff)]=this[_0x4d278d(0x1ff)]||{};if(this[_0x4d278d(0x1ff)][_0x26a803]!==undefined)return this[_0x4d278d(0x1ff)][_0x26a803];const _0x282480=ImageManager[_0x4d278d(0x357)],_0x3944e6=ColorManager['darkenColor'](_0x2bfd57,_0x282480[_0x4d278d(0x1e1)]),_0x364cd8=ColorManager['darkenColor'](_0x2bfd57,_0x282480[_0x4d278d(0x362)]),_0x2f742d=ColorManager['darkenColor'](_0x2bfd57,_0x282480[_0x4d278d(0x388)]),_0x103e4d=ColorManager[_0x4d278d(0x24a)](_0x2bfd57,_0x282480['color3']),_0x4d3e36=new Bitmap(0x90,0x84),_0x1466d2=_0x4d3e36[_0x4d278d(0x40b)];return _0x1466d2[_0x4d278d(0x3aa)](),_0x1466d2[_0x4d278d(0x20d)](),_0x1466d2['fillStyle']=_0x364cd8,_0x1466d2[_0x4d278d(0x34b)]=0.070004,_0x1466d2[_0x4d278d(0x36a)]=_0x4d278d(0x27d),_0x1466d2['lineJoin']=_0x4d278d(0x377),_0x1466d2[_0x4d278d(0x402)](71.362275,2.51497),_0x1466d2[_0x4d278d(0x418)](3.772455,80.793412),_0x1466d2['lineTo'](3.458084,128.57784),_0x1466d2[_0x4d278d(0x418)](138.63772,128.89221),_0x1466d2[_0x4d278d(0x418)](141.15269,123.5479),_0x1466d2[_0x4d278d(0x418)](74.820358,3.143712),_0x1466d2[_0x4d278d(0x2d0)](),_0x1466d2[_0x4d278d(0x20d)](),_0x1466d2[_0x4d278d(0x43f)]=_0x2f742d,_0x1466d2[_0x4d278d(0x34b)]=0.070004,_0x1466d2[_0x4d278d(0x36a)]='butt',_0x1466d2['lineJoin']=_0x4d278d(0x377),_0x1466d2[_0x4d278d(0x402)](27.979042,51.242515),_0x1466d2[_0x4d278d(0x418)](7.54491,129.20659),_0x1466d2[_0x4d278d(0x418)](102.48503,130.1497),_0x1466d2['lineTo'](78.907184,8.802395),_0x1466d2[_0x4d278d(0x418)](73.562873,2.200599),_0x1466d2[_0x4d278d(0x418)](65.703592,6.916168),_0x1466d2['fill'](),_0x1466d2[_0x4d278d(0x20d)](),_0x1466d2[_0x4d278d(0x43f)]=_0x103e4d,_0x1466d2[_0x4d278d(0x34b)]=0.070004,_0x1466d2['lineCap']='butt',_0x1466d2[_0x4d278d(0x221)]=_0x4d278d(0x377),_0x1466d2[_0x4d278d(0x402)](74.034429,3.733159),_0x1466d2[_0x4d278d(0x418)](6.051647,130.77844),_0x1466d2[_0x4d278d(0x418)](138.9521,129.52096),_0x1466d2[_0x4d278d(0x418)](139.58084,115.68862),_0x1466d2[_0x4d278d(0x2d0)](),_0x1466d2[_0x4d278d(0x20d)](),_0x1466d2[_0x4d278d(0x34b)]=0.200081,_0x1466d2[_0x4d278d(0x43f)]=_0x3944e6,_0x1466d2['moveTo'](142.99234,119.79907),_0x1466d2['lineTo'](80.034674,4.285633),_0x1466d2['bezierCurveTo'](78.746093,1.921966,76.388647,0.339813,73.721044,0.048365),_0x1466d2[_0x4d278d(0x43e)](71.05344,-0.243082,68.412353,0.792958,66.647774,2.823054),_0x1466d2['lineTo'](2.022392,77.187254),_0x1466d2[_0x4d278d(0x43e)](0.718566,78.688698,0.00016,80.613438,0x0,82.605604),_0x1466d2[_0x4d278d(0x418)](0.0086,123.69423),_0x1466d2[_0x4d278d(0x43e)](0.008596,128.244864,3.679844,131.935056,8.211283,131.93924),_0x1466d2['lineTo'](135.78679,132.00004),_0x1466d2[_0x4d278d(0x43e)](138.686568,132.001109,141.371843,130.465961,142.851216,127.961372),_0x1466d2[_0x4d278d(0x43e)](144.33059,125.456782,144.384624,122.35426,142.99337,119.79925),_0x1466d2[_0x4d278d(0x402)](138.06471,122.459),_0x1466d2[_0x4d278d(0x43e)](138.498285,123.259091,138.480377,124.229324,138.017574,125.012729),_0x1466d2[_0x4d278d(0x43e)](137.554772,125.796134,136.715441,126.276987,135.80839,126.27837),_0x1466d2[_0x4d278d(0x418)](8.134774,126.38434),_0x1466d2[_0x4d278d(0x43e)](6.713611,126.384341,5.56153,125.227382,5.561529,123.8002),_0x1466d2[_0x4d278d(0x418)](5.570129,82.635814),_0x1466d2[_0x4d278d(0x43e)](5.570355,82.011671,5.795514,81.408699,6.204007,80.938304),_0x1466d2[_0x4d278d(0x418)](70.911354,6.490869),_0x1466d2[_0x4d278d(0x43e)](71.464977,5.854944,72.293144,5.530881,73.129255,5.623001),_0x1466d2[_0x4d278d(0x43e)](73.965366,5.715121,74.703867,6.211795,75.107024,6.953136),_0x1466d2[_0x4d278d(0x2d0)](),_0x1466d2[_0x4d278d(0x20d)](),_0x1466d2[_0x4d278d(0x34b)]=0.200081,_0x1466d2[_0x4d278d(0x43f)]=_0x3944e6,_0x1466d2[_0x4d278d(0x402)](37.330905,75.898964),_0x1466d2['bezierCurveTo'](48.287944,54.473064,59.227374,32.888023,70.149194,11.14384),_0x1466d2[_0x4d278d(0x43e)](70.194461,11.052912,70.171827,10.982186,70.081294,10.931663),_0x1466d2[_0x4d278d(0x418)](70.081294,10.931663),_0x1466d2[_0x4d278d(0x43e)](70.000807,10.886196,69.937921,10.903876,69.892634,10.984703),_0x1466d2[_0x4d278d(0x43e)](56.148547,35.143784,42.542805,59.451901,29.075406,83.909054),_0x1466d2[_0x4d278d(0x43e)](22.233555,96.342231,15.950114,109.240203,10.225085,122.60297),_0x1466d2['bezierCurveTo'](10.169752,122.724223,10.209966,122.78485,10.345728,122.78485),_0x1466d2[_0x4d278d(0x43e)](10.406001,122.79085,10.476448,122.78075,10.557069,122.75455),_0x1466d2[_0x4d278d(0x43e)](10.582169,122.74495,10.602322,122.72975,10.617529,122.70895),_0x1466d2[_0x4d278d(0x43e)](19.109484,109.720043,28.013963,94.116678,37.330965,75.898854),_0x1466d2[_0x4d278d(0x2d0)](),_0x1466d2[_0x4d278d(0x27e)](),_0x4d3e36[_0x4d278d(0x2c3)][_0x4d278d(0x2d6)](),_0x4d3e36[_0x4d278d(0x2ed)]=![],_0x4d3e36[_0x4d278d(0x3a3)]=!![],this['_cache_createDiceGraphic_D4'][_0x26a803]=_0x4d3e36,this[_0x4d278d(0x1ff)][_0x26a803];},ImageManager['createDiceGraphic_D6']=function(_0x1bd57e){const _0x29f056=_0x497107,_0x10f1f7='color-%1'[_0x29f056(0x329)](_0x1bd57e);this[_0x29f056(0x219)]=this['_cache_createDiceGraphic_D6']||{};if(this[_0x29f056(0x219)][_0x10f1f7]!==undefined)return this[_0x29f056(0x219)][_0x10f1f7];const _0x3a413a=ImageManager['DICE_ROLL_RATIOS'],_0x156378=ColorManager['darkenColor'](_0x1bd57e,_0x3a413a[_0x29f056(0x1e1)]),_0xcf13f3=ColorManager[_0x29f056(0x24a)](_0x1bd57e,_0x3a413a[_0x29f056(0x362)]),_0x528362=ColorManager[_0x29f056(0x24a)](_0x1bd57e,_0x3a413a[_0x29f056(0x388)]),_0x28e81b=ColorManager[_0x29f056(0x24a)](_0x1bd57e,_0x3a413a[_0x29f056(0x2fd)]),_0x2257b7=new Bitmap(0x90,0x90),_0x572fbf=_0x2257b7[_0x29f056(0x40b)];return _0x572fbf[_0x29f056(0x3aa)](),_0x572fbf[_0x29f056(0x20d)](),_0x572fbf[_0x29f056(0x43f)]=_0xcf13f3,_0x572fbf[_0x29f056(0x34b)]=0.070004,_0x572fbf[_0x29f056(0x36a)]='butt',_0x572fbf[_0x29f056(0x221)]='miter',_0x572fbf[_0x29f056(0x402)](4.715569,5.02994),_0x572fbf[_0x29f056(0x418)](3.772455,126.69162),_0x572fbf[_0x29f056(0x418)](16.661676,140.83832),_0x572fbf['lineTo'](138.9521,140.52395),_0x572fbf[_0x29f056(0x418)](141.46706,17.290419),_0x572fbf[_0x29f056(0x418)](127.32036,2.200599),_0x572fbf[_0x29f056(0x2d0)](),_0x572fbf[_0x29f056(0x20d)](),_0x572fbf[_0x29f056(0x43f)]=_0x528362,_0x572fbf['lineWidth']=0.070004,_0x572fbf[_0x29f056(0x36a)]=_0x29f056(0x27d),_0x572fbf[_0x29f056(0x221)]='miter',_0x572fbf[_0x29f056(0x402)](3.693862,3.772455),_0x572fbf[_0x29f056(0x418)](18.547904,18.233533),_0x572fbf[_0x29f056(0x418)](141.46706,20.11976),_0x572fbf[_0x29f056(0x418)](124.17665,2.51497),_0x572fbf[_0x29f056(0x2d0)](),_0x572fbf[_0x29f056(0x20d)](),_0x572fbf[_0x29f056(0x43f)]=_0x28e81b,_0x572fbf['lineWidth']=0.070004,_0x572fbf[_0x29f056(0x36a)]=_0x29f056(0x27d),_0x572fbf[_0x29f056(0x221)]=_0x29f056(0x377),_0x572fbf[_0x29f056(0x402)](16.976048,17.919161),_0x572fbf[_0x29f056(0x418)](17.565494,139.10929),_0x572fbf[_0x29f056(0x418)](138.9521,139.89521),_0x572fbf[_0x29f056(0x418)](138.20546,17.290418),_0x572fbf['fill'](),_0x572fbf[_0x29f056(0x20d)](),_0x572fbf['fillStyle']=_0x156378,_0x572fbf[_0x29f056(0x34b)]=0.236709,_0x572fbf[_0x29f056(0x402)](14.173331,142.03073),_0x572fbf[_0x29f056(0x43e)](15.56833,143.31965,18.197349,144.00885,20.164647,143.9999),_0x572fbf[_0x29f056(0x43e)](56.821931,143.91636,93.485179,143.91336,130.15439,143.9909),_0x572fbf[_0x29f056(0x43e)](134.285703,144.002833,137.078667,143.686573,138.53328,143.04212),_0x572fbf['bezierCurveTo'](142.85239,141.1265,143.997,137.28663,143.997,132.50693),_0x572fbf[_0x29f056(0x43e)](144.003,94.675085,0x90,56.840257,143.988,19.002446),_0x572fbf[_0x29f056(0x43e)](143.988,16.746858,142.35157,14.491268,140.581,12.710067),_0x572fbf[_0x29f056(0x43e)](137.236733,9.338616,133.791053,5.883626,130.24396,2.345096),_0x572fbf[_0x29f056(0x43e)](128.30348,0.411734,126.01427,0x0,123.09909,0x0),_0x572fbf['bezierCurveTo'](85.947002,0.005867,48.791933,0.005867,11.633883,0x0),_0x572fbf[_0x29f056(0x43e)](8.581591,0x0,6.298333,0.402783,4.784107,1.20835),_0x572fbf['bezierCurveTo'](1.594702,2.903027,0x0,5.776219,0x0,9.827926),_0x572fbf['bezierCurveTo'](0.0178,48.316157,0.029733,86.804389,0.0358,125.29262),_0x572fbf[_0x29f056(0x43e)](0.0358,126.754573,0.631946,128.21355,1.824239,129.66955),_0x572fbf['bezierCurveTo'](1.860039,129.71735,2.924168,130.812323,5.016627,132.95447),_0x572fbf['bezierCurveTo'](9.141984,137.173263,12.194276,140.198617,14.173501,142.03053),_0x572fbf['moveTo'](6.867516,125.0243),_0x572fbf[_0x29f056(0x43e)](6.749547,124.752693,6.688663,124.457155,6.688656,124.15609),_0x572fbf[_0x29f056(0x418)](6.715356,10.069795),_0x572fbf[_0x29f056(0x43e)](6.715356,7.670994,7.913619,6.471593,10.310144,6.471593),_0x572fbf[_0x29f056(0x418)](123.85904,6.471593),_0x572fbf[_0x29f056(0x43e)](124.609764,6.471537,125.332823,6.770686,125.87105,7.304014),_0x572fbf[_0x29f056(0x418)](136.70906,18.143374),_0x572fbf[_0x29f056(0x43e)](137.10848,18.543175,137.30819,19.023532,137.30819,19.584446),_0x572fbf[_0x29f056(0x418)](137.29919,134.46735),_0x572fbf[_0x29f056(0x43e)](137.299189,136.118432,135.961994,137.456898,134.31248,137.4569),_0x572fbf[_0x29f056(0x43e)](93.899449,137.468833,55.996208,137.468833,20.602757,137.4569),_0x572fbf[_0x29f056(0x43e)](19.511804,137.4569,18.593735,137.086933,17.848549,136.347),_0x572fbf[_0x29f056(0x43e)](14.450491,132.969587,11.055413,129.580237,7.663315,126.17895),_0x572fbf['bezierCurveTo'](7.311589,125.826883,7.046302,125.442,6.867456,125.0243),_0x572fbf[_0x29f056(0x2d0)](),_0x572fbf[_0x29f056(0x20d)](),_0x572fbf[_0x29f056(0x43f)]=_0x156378,_0x572fbf['lineWidth']=0.236709,_0x572fbf['moveTo'](129.27809,17.337767),_0x572fbf[_0x29f056(0x43e)](130.166357,17.27214,131.054623,17.32585,131.94289,17.498897),_0x572fbf[_0x29f056(0x43e)](132.044237,17.51671,132.109813,17.498804,132.13962,17.445177),_0x572fbf['bezierCurveTo'](132.151553,17.427364,132.15752,17.40648,132.15752,17.382527),_0x572fbf[_0x29f056(0x43e)](132.15752,17.33478,132.12772,17.310907,132.06812,17.310907),_0x572fbf[_0x29f056(0x43e)](95.649281,16.606782,58.029211,15.950393,19.207908,15.341742),_0x572fbf[_0x29f056(0x43e)](18.510409,15.329789,17.878489,15.117954,17.312149,14.706239),_0x572fbf[_0x29f056(0x418)](9.210464,8.753989),_0x572fbf[_0x29f056(0x43e)](9.106352,8.680326,8.964189,8.693342,8.875156,8.784688),_0x572fbf[_0x29f056(0x43e)](8.786122,8.876034,8.776633,9.01861,8.852775,9.12097),_0x572fbf[_0x29f056(0x418)](15.121291,17.67789),_0x572fbf[_0x29f056(0x43e)](15.294177,17.922543,15.383593,18.197032,15.38954,18.501357),_0x572fbf[_0x29f056(0x43e)](15.902233,46.505278,16.414923,74.789653,16.927609,103.35448),_0x572fbf['bezierCurveTo'](17.052796,110.532987,17.201836,118.081453,17.374729,125.99988),_0x572fbf[_0x29f056(0x43e)](17.380729,126.077473,17.422456,126.11627,17.499909,126.11627),_0x572fbf[_0x29f056(0x418)](17.499909,126.11627),_0x572fbf[_0x29f056(0x43e)](17.577416,126.11027,17.616169,126.071473,17.616169,125.99988),_0x572fbf['bezierCurveTo'](17.562569,122.87607,17.893379,119.38528,17.929139,116.70005),_0x572fbf[_0x29f056(0x43e)](18.388172,84.542985,18.930668,52.368018,19.556628,20.175148),_0x572fbf[_0x29f056(0x43e)](19.568561,19.685841,19.818944,19.438204,20.307777,19.432236),_0x572fbf['bezierCurveTo'](56.297375,18.942929,92.009759,18.286541,127.44493,17.463072),_0x572fbf['bezierCurveTo'](127.480663,17.463072,128.09172,17.421304,129.2781,17.337767),_0x572fbf[_0x29f056(0x2d0)](),_0x572fbf[_0x29f056(0x27e)](),_0x2257b7[_0x29f056(0x2c3)]['update'](),_0x2257b7['_customModified']=![],_0x2257b7['_smooth']=!![],this['_cache_createDiceGraphic_D6'][_0x10f1f7]=_0x2257b7,this[_0x29f056(0x219)][_0x10f1f7];},ImageManager[_0x497107(0x47c)]=function(_0x50b25b){const _0x264b22=_0x497107,_0x4c2640='color-%1'['format'](_0x50b25b);this['_cache_createDiceGraphic_D8']=this[_0x264b22(0x466)]||{};if(this['_cache_createDiceGraphic_D8'][_0x4c2640]!==undefined)return this[_0x264b22(0x466)][_0x4c2640];const _0x269394=ImageManager[_0x264b22(0x357)],_0x22fd1b=ColorManager['darkenColor'](_0x50b25b,_0x269394[_0x264b22(0x1e1)]),_0x267065=ColorManager[_0x264b22(0x24a)](_0x50b25b,_0x269394[_0x264b22(0x362)]),_0x52c262=ColorManager[_0x264b22(0x24a)](_0x50b25b,_0x269394[_0x264b22(0x388)]),_0x6e82e=ColorManager['darkenColor'](_0x50b25b,_0x269394[_0x264b22(0x2fd)]),_0x1b99e6=new Bitmap(0x80,0x90),_0x229c5b=_0x1b99e6[_0x264b22(0x40b)];return _0x229c5b[_0x264b22(0x3aa)](),_0x229c5b[_0x264b22(0x20d)](),_0x229c5b[_0x264b22(0x43f)]=_0x267065,_0x229c5b[_0x264b22(0x34b)]=0.070004,_0x229c5b[_0x264b22(0x36a)]='butt',_0x229c5b[_0x264b22(0x221)]='miter',_0x229c5b[_0x264b22(0x402)](63.798391,2.667529),_0x229c5b[_0x264b22(0x418)](2.445235,54.017452),_0x229c5b[_0x264b22(0x418)](2.889823,106.92344),_0x229c5b['lineTo'](63.576096,142.49048),_0x229c5b[_0x264b22(0x418)](124.04008,106.92344),_0x229c5b[_0x264b22(0x418)](124.92925,52.68369),_0x229c5b[_0x264b22(0x2d0)](),_0x229c5b[_0x264b22(0x20d)](),_0x229c5b[_0x264b22(0x43f)]=_0x52c262,_0x229c5b[_0x264b22(0x34b)]=0.070004,_0x229c5b[_0x264b22(0x36a)]=_0x264b22(0x27d),_0x229c5b['lineJoin']=_0x264b22(0x377),_0x229c5b[_0x264b22(0x402)](62.020039,2.889823),_0x229c5b[_0x264b22(0x418)](2.667529,52.905982),_0x229c5b[_0x264b22(0x418)](2.39361,107.04248),_0x229c5b[_0x264b22(0x418)](125.46592,107.029),_0x229c5b[_0x264b22(0x418)](123.81778,54.239747),_0x229c5b['fill'](),_0x229c5b[_0x264b22(0x20d)](),_0x229c5b[_0x264b22(0x43f)]=_0x6e82e,_0x229c5b[_0x264b22(0x34b)]=0.070004,_0x229c5b[_0x264b22(0x36a)]=_0x264b22(0x27d),_0x229c5b['lineJoin']=_0x264b22(0x377),_0x229c5b[_0x264b22(0x402)](63.517153,5.07973),_0x229c5b[_0x264b22(0x418)](4.821002,107.09016),_0x229c5b[_0x264b22(0x418)](122.09753,107.08341),_0x229c5b[_0x264b22(0x2d0)](),_0x229c5b['beginPath'](),_0x229c5b[_0x264b22(0x34b)]=0.171967,_0x229c5b[_0x264b22(0x43f)]=_0x22fd1b,_0x229c5b['moveTo'](55.320945,140.39891),_0x229c5b[_0x264b22(0x43e)](38.24877,130.50225,20.777956,120.39327,2.908502,110.07197),_0x229c5b['bezierCurveTo'](0.744151,108.81754,0.0097,106.13323,0.0032,103.52041),_0x229c5b['bezierCurveTo'](-0.001067,87.505495,-0.001067,71.490582,0.0032,55.475671),_0x229c5b[_0x264b22(0x43e)](0.0032,53.560466,0.869808,51.85758,2.603023,50.367014),_0x229c5b[_0x264b22(0x43e)](21.278424,34.269773,39.997156,18.135701,58.759217,1.964798),_0x229c5b[_0x264b22(0x43e)](60.713418,0.283579,62.756445,-0.318713,64.888299,0.157921),_0x229c5b[_0x264b22(0x43e)](66.157877,0.439568,67.76977,1.425334,69.723977,3.115219),_0x229c5b[_0x264b22(0x43e)](88.174044,19.008808,106.624118,34.902397,125.0742,50.795984),_0x229c5b[_0x264b22(0x43e)](126.73811,52.225889,127.20607,54.611228,127.20607,56.977067),_0x229c5b[_0x264b22(0x43e)](127.223403,72.615004,127.22997,88.255111,127.22577,103.89739),_0x229c5b[_0x264b22(0x43e)](127.22577,105.78659,126.699313,107.383313,125.6464,108.68756),_0x229c5b['bezierCurveTo'](125.057087,109.41984,123.768007,110.360107,121.77916,111.50836),_0x229c5b[_0x264b22(0x43e)](104.28668,121.59568,86.653375,131.776153,68.879244,142.04978),_0x229c5b[_0x264b22(0x43e)](67.098364,143.076727,65.796286,143.68119,64.97301,143.86317),_0x229c5b[_0x264b22(0x43e)](61.710228,144.57163,58.785427,142.40727,55.321155,140.39891),_0x229c5b[_0x264b22(0x402)](64.556818,138.982),_0x229c5b[_0x264b22(0x418)](121.40197,106.15923),_0x229c5b[_0x264b22(0x43e)](122.000949,105.813192,122.370041,105.171617,122.3704,104.47585),_0x229c5b[_0x264b22(0x418)](122.3704,55.800642),_0x229c5b[_0x264b22(0x43e)](122.370061,55.193745,122.10681,54.61744,121.64895,54.221257),_0x229c5b[_0x264b22(0x418)](65.00529,5.416064),_0x229c5b[_0x264b22(0x43e)](64.186735,4.712585,62.977044,4.712585,62.158489,5.416064),_0x229c5b[_0x264b22(0x43e)](43.392094,21.586967,24.608367,37.775201,5.807306,53.980766),_0x229c5b[_0x264b22(0x43e)](5.092354,54.600395,4.734878,55.477838,4.734878,56.613095),_0x229c5b[_0x264b22(0x43e)](4.739145,72.212032,4.741278,88.03629,4.741278,104.08587),_0x229c5b[_0x264b22(0x43e)](4.741668,104.999757,5.22686,105.843896,6.015193,106.30223),_0x229c5b[_0x264b22(0x418)](62.613351,138.982),_0x229c5b[_0x264b22(0x43e)](63.212683,139.327803,63.952775,139.327803,64.556718,138.982),_0x229c5b['fill'](),_0x229c5b['beginPath'](),_0x229c5b['lineWidth']=0.171967,_0x229c5b['fillStyle']=_0x22fd1b,_0x229c5b[_0x264b22(0x402)](60.676584,10.524717),_0x229c5b['bezierCurveTo'](52.30082,26.032666,41.526718,45.61367,28.354277,69.267731),_0x229c5b[_0x264b22(0x43e)](21.599069,81.404575,14.622875,92.629315,7.425695,102.94195),_0x229c5b['bezierCurveTo'](7.365035,103.032937,7.28704,103.05027,7.191711,102.99395),_0x229c5b['lineTo'](7.055227,102.90945),_0x229c5b[_0x264b22(0x43e)](7.02924,102.896517,7.02277,102.879183,7.035817,102.85745),_0x229c5b[_0x264b22(0x43e)](12.863754,90.46496,19.384979,78.234957,26.59949,66.16744),_0x229c5b[_0x264b22(0x43e)](38.298703,46.584261,50.049905,26.897097,62.035089,7.463416),_0x229c5b[_0x264b22(0x43e)](62.065422,7.411416,62.108756,7.400583,62.165089,7.430916),_0x229c5b['lineTo'](62.171089,7.430916),_0x229c5b[_0x264b22(0x43e)](62.227422,7.46125,62.240422,7.504583,62.210089,7.560916),_0x229c5b[_0x264b22(0x43e)](61.71612,8.553182,61.204822,9.541115,60.676193,10.524714),_0x229c5b[_0x264b22(0x2d0)](),_0x229c5b[_0x264b22(0x20d)](),_0x229c5b[_0x264b22(0x34b)]=0.171967,_0x229c5b[_0x264b22(0x43f)]=_0x22fd1b,_0x229c5b[_0x264b22(0x402)](89.8401,53.220321),_0x229c5b[_0x264b22(0x43e)](81.464329,38.10668,73.140562,22.949709,64.868799,7.749407),_0x229c5b[_0x264b22(0x43e)](64.855866,7.727741,64.860199,7.710407,64.881799,7.697407),_0x229c5b[_0x264b22(0x418)](65.03779,7.606417),_0x229c5b['bezierCurveTo'](65.128777,7.554424,65.20027,7.573921,65.252271,7.664907),_0x229c5b[_0x264b22(0x43e)](77.350121,27.479895,89.309311,47.344711,101.12984,67.259354),_0x229c5b[_0x264b22(0x43e)](108.080033,78.967229,114.284943,90.636105,119.74457,102.26598),_0x229c5b[_0x264b22(0x43e)](119.831203,102.4523,119.872393,102.567127,119.86814,102.61046),_0x229c5b['bezierCurveTo'](119.816073,102.965767,119.68825,102.9961,119.48467,102.70146),_0x229c5b['bezierCurveTo'](110.714603,89.862668,102.626986,76.636067,95.221819,63.021658),_0x229c5b[_0x264b22(0x43e)](93.540606,59.932201,91.746727,56.665089,89.84018,53.220322),_0x229c5b[_0x264b22(0x2d0)](),_0x229c5b[_0x264b22(0x20d)](),_0x229c5b[_0x264b22(0x34b)]=0.171967,_0x229c5b[_0x264b22(0x43f)]=_0x22fd1b,_0x229c5b['moveTo'](11.331931,107.17316),_0x229c5b[_0x264b22(0x43e)](11.305944,107.17316,11.292951,107.16016,11.292951,107.13416),_0x229c5b[_0x264b22(0x418)](11.292951,107.12816),_0x229c5b[_0x264b22(0x43e)](11.288684,107.067493,11.316851,107.039327,11.377451,107.04366),_0x229c5b[_0x264b22(0x43e)](12.709861,107.04366,13.983774,106.78368,15.342182,106.72518),_0x229c5b['bezierCurveTo'](48.104293,105.299607,80.684415,105.3451,113.08255,106.86166),_0x229c5b[_0x264b22(0x43e)](113.823497,106.896327,114.642443,106.96132,115.53939,107.05664),_0x229c5b[_0x264b22(0x43e)](115.85137,107.091307,115.85137,107.11514,115.53939,107.12814),_0x229c5b[_0x264b22(0x43e)](92.444281,108.1594,70.230952,108.512543,48.899401,108.18757),_0x229c5b[_0x264b22(0x43e)](36.901218,108.00125,24.378735,107.663273,11.331954,107.17364),_0x229c5b[_0x264b22(0x2d0)](),_0x229c5b['restore'](),_0x1b99e6[_0x264b22(0x2c3)][_0x264b22(0x2d6)](),_0x1b99e6[_0x264b22(0x2ed)]=![],_0x1b99e6[_0x264b22(0x3a3)]=!![],this[_0x264b22(0x466)][_0x4c2640]=_0x1b99e6,this[_0x264b22(0x466)][_0x4c2640];},ImageManager['createDiceGraphic_D10']=function(_0x225585){const _0xf66e01=_0x497107,_0x28ecc0=_0xf66e01(0x40f)['format'](_0x225585);this['_cache_createDiceGraphic_D10']=this['_cache_createDiceGraphic_D10']||{};if(this['_cache_createDiceGraphic_D10'][_0x28ecc0]!==undefined)return this['_cache_createDiceGraphic_D10'][_0x28ecc0];const _0x3f17f9=ImageManager[_0xf66e01(0x357)],_0x4fd51d=ColorManager[_0xf66e01(0x24a)](_0x225585,_0x3f17f9[_0xf66e01(0x1e1)]),_0x936f8b=ColorManager[_0xf66e01(0x24a)](_0x225585,_0x3f17f9[_0xf66e01(0x362)]),_0x354442=ColorManager[_0xf66e01(0x24a)](_0x225585,_0x3f17f9[_0xf66e01(0x388)]),_0x250479=ColorManager[_0xf66e01(0x24a)](_0x225585,_0x3f17f9[_0xf66e01(0x2fd)]),_0xd5b14=new Bitmap(0x8a,0x90),_0x490fa5=_0xd5b14[_0xf66e01(0x40b)];return _0x490fa5[_0xf66e01(0x3aa)](),_0x490fa5['beginPath'](),_0x490fa5[_0xf66e01(0x43f)]=_0x936f8b,_0x490fa5['lineWidth']=0.070004,_0x490fa5['lineCap']='butt',_0x490fa5[_0xf66e01(0x221)]=_0xf66e01(0x377),_0x490fa5[_0xf66e01(0x402)](68.466567,2.22294),_0x490fa5[_0xf66e01(0x418)](3.112117,73.579328),_0x490fa5['lineTo'](2.000646,91.140559),_0x490fa5[_0xf66e01(0x418)](69.800329,142.26819),_0x490fa5[_0xf66e01(0x418)](136.26625,90.918264),_0x490fa5[_0xf66e01(0x418)](135.59937,73.801623),_0x490fa5[_0xf66e01(0x2d0)](),_0x490fa5['beginPath'](),_0x490fa5[_0xf66e01(0x43f)]=_0x354442,_0x490fa5[_0xf66e01(0x34b)]=0.070004,_0x490fa5[_0xf66e01(0x36a)]=_0xf66e01(0x27d),_0x490fa5[_0xf66e01(0x221)]=_0xf66e01(0x377),_0x490fa5[_0xf66e01(0x402)](1.02811,88.111803),_0x490fa5['lineTo'](27.564461,96.920205),_0x490fa5[_0xf66e01(0x418)](109.14638,96.475615),_0x490fa5[_0xf66e01(0x418)](136.26625,88.473029),_0x490fa5['lineTo'](135.59937,75.357682),_0x490fa5['lineTo'](69.355742,1.333764),_0x490fa5['lineTo'](2.667529,74.24621),_0x490fa5[_0xf66e01(0x2d0)](),_0x490fa5[_0xf66e01(0x20d)](),_0x490fa5['fillStyle']=_0x250479,_0x490fa5[_0xf66e01(0x34b)]=0.070004,_0x490fa5[_0xf66e01(0x36a)]=_0xf66e01(0x27d),_0x490fa5['lineJoin']=_0xf66e01(0x377),_0x490fa5[_0xf66e01(0x402)](69.022301,3.973506),_0x490fa5[_0xf66e01(0x418)](27.460057,96.239837),_0x490fa5['lineTo'](69.133449,119.14961),_0x490fa5['lineTo'](110.88543,95.972083),_0x490fa5['fill'](),_0x490fa5[_0xf66e01(0x20d)](),_0x490fa5[_0xf66e01(0x43f)]=_0x4fd51d,_0x490fa5['lineWidth']=0.170223,_0x490fa5[_0xf66e01(0x402)](70.860844,143.75437),_0x490fa5['bezierCurveTo'](68.613957,144.34416,66.425179,143.85693,64.610885,142.45298),_0x490fa5[_0xf66e01(0x43e)](43.941256,126.494447,23.275932,110.52737,2.614911,94.55175),_0x490fa5[_0xf66e01(0x43e)](0.931899,93.248223,0.073175,91.3891,0.03874,88.97438),_0x490fa5['bezierCurveTo'](-0.012913,84.70908,-0.012913,80.40532,0.03874,76.0631),_0x490fa5[_0xf66e01(0x43e)](0.064563,74.03088,0.923289,72.49871,2.369561,70.87679),_0x490fa5[_0xf66e01(0x43e)](22.350489,48.575871,42.327113,26.272817,62.299433,3.967626),_0x490fa5[_0xf66e01(0x43e)](64.12449,1.933276,65.553543,0.747285,66.586594,0.409653),_0x490fa5['bezierCurveTo'](68.368607,-0.163043,70.070989,-0.135266,71.69374,0.492983),_0x490fa5['bezierCurveTo'](72.662226,0.864809,73.858844,1.847793,75.283593,3.441937),_0x490fa5[_0xf66e01(0x43e)](95.707871,26.234346,116.127847,49.02889,136.54352,71.82557),_0x490fa5['bezierCurveTo'](137.55074,72.94104,137.97042,74.59502,137.98333,76.22335),_0x490fa5['bezierCurveTo'](138.013463,81.074163,138.00273,85.75616,137.95113,90.26934),_0x490fa5[_0xf66e01(0x43e)](137.92533,92.29514,136.07226,94.07734,134.42584,95.35308),_0x490fa5[_0xf66e01(0x43e)](114.56544,110.700453,94.705035,126.04569,74.844624,141.38879),_0x490fa5[_0xf66e01(0x43e)](73.127175,142.71795,71.799274,143.506473,70.860921,143.75436),_0x490fa5[_0xf66e01(0x402)](69.459768,139.2476),_0x490fa5[_0xf66e01(0x43e)](69.817339,139.158905,70.151647,138.997306,70.441167,138.77321),_0x490fa5[_0xf66e01(0x43e)](91.123709,122.780483,111.593183,106.96085,131.84959,91.31431),_0x490fa5[_0xf66e01(0x43e)](133.06343,90.37192,133.28941,89.81419,133.28941,88.36535),_0x490fa5[_0xf66e01(0x43e)](133.30221,84.35649,133.29581,80.371133,133.27021,76.40928),_0x490fa5[_0xf66e01(0x43e)](133.266169,75.719594,133.00893,75.056053,132.54699,74.54375),_0x490fa5[_0xf66e01(0x418)](70.680058,5.467746),_0x490fa5[_0xf66e01(0x43e)](70.263495,5.002932,69.666728,4.737032,69.040089,4.737032),_0x490fa5[_0xf66e01(0x43e)](68.413451,4.737032,67.816684,5.002932,67.400121,5.467746),_0x490fa5[_0xf66e01(0x418)](5.404149,74.63991),_0x490fa5['bezierCurveTo'](5.029741,75.056805,4.822905,75.595327,4.823058,76.15285),_0x490fa5['lineTo'](4.823058,89.17311),_0x490fa5[_0xf66e01(0x43e)](4.822819,89.840556,5.132664,90.470052,5.662411,90.87838),_0x490fa5[_0xf66e01(0x43e)](26.392302,106.90102,47.053322,122.87451,67.645472,138.79885),_0x490fa5[_0xf66e01(0x43e)](68.235172,139.25615,68.839937,139.405733,69.459768,139.2476),_0x490fa5['fill'](),_0x490fa5[_0xf66e01(0x20d)](),_0x490fa5[_0xf66e01(0x43f)]=_0x4fd51d,_0x490fa5['lineWidth']=0.170223,_0x490fa5[_0xf66e01(0x402)](111.14983,94.5261),_0x490fa5[_0xf66e01(0x43e)](111.494183,94.5261,111.83638,94.48336,112.17642,94.39788),_0x490fa5[_0xf66e01(0x43e)](118.181033,92.927673,124.18134,91.50662,130.17734,90.13472),_0x490fa5[_0xf66e01(0x43e)](130.263433,90.117653,130.319387,90.14972,130.3452,90.23092),_0x490fa5[_0xf66e01(0x418)](130.3452,90.23692),_0x490fa5['bezierCurveTo'](130.366733,90.3053,130.343067,90.352313,130.2742,90.37796),_0x490fa5[_0xf66e01(0x43e)](124.002727,92.745673,117.750617,95.128343,111.51787,97.52597),_0x490fa5['bezierCurveTo'](110.315917,97.989569,108.961418,97.424938,108.45746,96.25022),_0x490fa5[_0xf66e01(0x43e)](95.957533,67.047222,83.520025,37.918929,71.144935,8.865341),_0x490fa5[_0xf66e01(0x43e)](71.114808,8.805508,71.132032,8.760635,71.196605,8.730721),_0x490fa5[_0xf66e01(0x418)](71.202905,8.730721),_0x490fa5[_0xf66e01(0x43e)](71.263165,8.705068,71.308359,8.722165,71.338487,8.782011),_0x490fa5['bezierCurveTo'](84.518528,37.194524,97.722225,65.730981,110.94958,94.39138),_0x490fa5[_0xf66e01(0x43e)](110.985536,94.473528,111.064271,94.526485,111.14973,94.526),_0x490fa5[_0xf66e01(0x2d0)](),_0x490fa5[_0xf66e01(0x20d)](),_0x490fa5[_0xf66e01(0x43f)]=_0x4fd51d,_0x490fa5[_0xf66e01(0x34b)]=0.170223,_0x490fa5[_0xf66e01(0x402)](26.555869,94.55175),_0x490fa5['bezierCurveTo'](26.803164,94.61133,27.059474,94.4881,27.169243,94.25685),_0x490fa5[_0xf66e01(0x43e)](40.254556,65.895621,53.357086,37.566448,66.476833,9.269329),_0x490fa5[_0xf66e01(0x43e)](66.50696,9.200953,66.554309,9.181723,66.618881,9.211639),_0x490fa5['lineTo'](66.625181,9.217939),_0x490fa5[_0xf66e01(0x43e)](66.694046,9.247853,66.713412,9.294866,66.683281,9.35898),_0x490fa5[_0xf66e01(0x43e)](54.226438,38.664727,41.851363,67.654207,29.558056,96.32742),_0x490fa5[_0xf66e01(0x43e)](29.072454,97.464199,27.762897,98.013768,26.594493,97.57111),_0x490fa5['bezierCurveTo'](20.387577,95.19913,14.103183,92.827147,7.74131,90.45516),_0x490fa5[_0xf66e01(0x43e)](7.659528,90.425227,7.631553,90.36967,7.657385,90.28849),_0x490fa5[_0xf66e01(0x418)](7.657385,90.28249),_0x490fa5[_0xf66e01(0x43e)](7.678911,90.218357,7.721957,90.192723,7.786524,90.20559),_0x490fa5[_0xf66e01(0x43e)](14.101049,91.63305,20.357465,93.081883,26.555771,94.55209),_0x490fa5[_0xf66e01(0x2d0)](),_0x490fa5[_0xf66e01(0x20d)](),_0x490fa5[_0xf66e01(0x43f)]=_0x4fd51d,_0x490fa5[_0xf66e01(0x34b)]=0.170223,_0x490fa5[_0xf66e01(0x402)](67.238707,119.92555),_0x490fa5[_0xf66e01(0x43e)](56.219497,113.232717,45.137873,106.57407,33.993836,99.94961),_0x490fa5['bezierCurveTo'](33.92066,99.906877,33.905597,99.849177,33.948646,99.77651),_0x490fa5[_0xf66e01(0x418)](33.948646,99.77051),_0x490fa5['bezierCurveTo'](33.991693,99.697857,34.049804,99.680757,34.12298,99.71921),_0x490fa5[_0xf66e01(0x43e)](45.641499,105.56155,57.147104,111.397483,68.639797,117.22701),_0x490fa5[_0xf66e01(0x43e)](68.879128,117.348042,69.162341,117.348042,69.401672,117.22701),_0x490fa5[_0xf66e01(0x43e)](81.083757,111.307737,92.830406,105.34145,104.64162,99.32815),_0x490fa5[_0xf66e01(0x43e)](104.714793,99.29395,104.77075,99.31105,104.80949,99.37945),_0x490fa5['lineTo'](104.81549,99.38545),_0x490fa5['bezierCurveTo'](104.854223,99.45811,104.839157,99.51581,104.77029,99.55855),_0x490fa5[_0xf66e01(0x43e)](93.406727,106.33687,82.120645,113.087407,70.912043,119.81016),_0x490fa5['bezierCurveTo'](70.675632,119.955797,70.520616,120.202065,70.492367,120.47688),_0x490fa5[_0xf66e01(0x43e)](69.98445,125.994413,69.575535,131.2662,69.26562,136.29224),_0x490fa5[_0xf66e01(0x43e)](69.26562,136.304973,69.259193,136.31134,69.24634,136.31134),_0x490fa5['lineTo'](69.072006,136.31134),_0x490fa5[_0xf66e01(0x43e)](68.977307,136.31534,68.925654,136.270467,68.917049,136.17672),_0x490fa5[_0xf66e01(0x418)](67.600227,120.50885),_0x490fa5['bezierCurveTo'](67.580353,120.267319,67.445899,120.050402,67.238675,119.92555),_0x490fa5[_0xf66e01(0x2d0)](),_0x490fa5[_0xf66e01(0x27e)](),_0xd5b14[_0xf66e01(0x2c3)]['update'](),_0xd5b14[_0xf66e01(0x2ed)]=![],_0xd5b14[_0xf66e01(0x3a3)]=!![],this['_cache_createDiceGraphic_D10'][_0x28ecc0]=_0xd5b14,this['_cache_createDiceGraphic_D10'][_0x28ecc0];},ImageManager[_0x497107(0x2ba)]=function(_0x1d1ef3){const _0x111e2e=_0x497107,_0x213b60=_0x111e2e(0x40f)['format'](_0x1d1ef3);this['_cache_createDiceGraphic_D12']=this[_0x111e2e(0x477)]||{};if(this['_cache_createDiceGraphic_D12'][_0x213b60]!==undefined)return this[_0x111e2e(0x477)][_0x213b60];const _0x40a2ec=ImageManager[_0x111e2e(0x357)],_0x2f046d=ColorManager['darkenColor'](_0x1d1ef3,_0x40a2ec[_0x111e2e(0x1e1)]),_0x24b91e=ColorManager[_0x111e2e(0x24a)](_0x1d1ef3,_0x40a2ec['color1']),_0x194fc0=ColorManager[_0x111e2e(0x24a)](_0x1d1ef3,_0x40a2ec[_0x111e2e(0x388)]),_0x1096cf=ColorManager[_0x111e2e(0x24a)](_0x1d1ef3,_0x40a2ec[_0x111e2e(0x2fd)]),_0x25684a=new Bitmap(0x8a,0x90),_0xdc48aa=_0x25684a['_context'];return _0xdc48aa[_0x111e2e(0x3aa)](),_0xdc48aa[_0x111e2e(0x20d)](),_0xdc48aa['fillStyle']=_0x24b91e,_0xdc48aa[_0x111e2e(0x34b)]=0.070004,_0xdc48aa[_0x111e2e(0x36a)]=_0x111e2e(0x27d),_0xdc48aa[_0x111e2e(0x221)]='miter',_0xdc48aa[_0x111e2e(0x402)](68.532932,2.829341),_0xdc48aa['lineTo'](27.035929,15.404191),_0xdc48aa['lineTo'](3.143712,49.98503),_0xdc48aa[_0x111e2e(0x418)](3.143712,93.053891),_0xdc48aa['lineTo'](26.407185,127.9491),_0xdc48aa[_0x111e2e(0x418)](67.275447,142.72455),_0xdc48aa[_0x111e2e(0x418)](108.77245,129.20659),_0xdc48aa[_0x111e2e(0x418)](135.17964,94.311376),_0xdc48aa[_0x111e2e(0x418)](134.86527,49.670657),_0xdc48aa[_0x111e2e(0x418)](109.71557,15.08982),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa['beginPath'](),_0xdc48aa['fillStyle']=_0x194fc0,_0xdc48aa[_0x111e2e(0x34b)]=0.070004,_0xdc48aa[_0x111e2e(0x36a)]='butt',_0xdc48aa['lineJoin']=_0x111e2e(0x377),_0xdc48aa[_0x111e2e(0x402)](68.847305,2.829341),_0xdc48aa['lineTo'](27.664672,15.718563),_0xdc48aa[_0x111e2e(0x418)](1.848088,50.002463),_0xdc48aa[_0x111e2e(0x418)](27.979042,59.101796),_0xdc48aa[_0x111e2e(0x418)](69.901565,29.293736),_0xdc48aa['lineTo'](109.34399,59.212943),_0xdc48aa[_0x111e2e(0x418)](94.052578,107.68169),_0xdc48aa[_0x111e2e(0x418)](110.32524,128.50484),_0xdc48aa[_0x111e2e(0x418)](134.5509,93.053891),_0xdc48aa[_0x111e2e(0x418)](133.92215,50.2994),_0xdc48aa['lineTo'](110.34431,15.404191),_0xdc48aa['fill'](),_0xdc48aa[_0x111e2e(0x20d)](),_0xdc48aa[_0x111e2e(0x43f)]=_0x1096cf,_0xdc48aa[_0x111e2e(0x34b)]=0.070004,_0xdc48aa[_0x111e2e(0x36a)]=_0x111e2e(0x27d),_0xdc48aa[_0x111e2e(0x221)]=_0x111e2e(0x377),_0xdc48aa[_0x111e2e(0x402)](69.911477,28.453639),_0xdc48aa[_0x111e2e(0x418)](27.675608,57.852024),_0xdc48aa[_0x111e2e(0x418)](42.680456,106.64557),_0xdc48aa[_0x111e2e(0x418)](94.141528,107.70147),_0xdc48aa['lineTo'](110.25785,59.130215),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa[_0x111e2e(0x20d)](),_0xdc48aa[_0x111e2e(0x34b)]=0.179435,_0xdc48aa['fillStyle']=_0x2f046d,_0xdc48aa[_0x111e2e(0x402)](28.253509,12.808104),_0xdc48aa['bezierCurveTo'](40.529028,8.788817,53.209656,4.672435,66.295394,0.458958),_0xdc48aa[_0x111e2e(0x43e)](68.169311,-0.150709,69.696963,-0.164256,71.720249,0.486046),_0xdc48aa[_0x111e2e(0x43e)](84.552511,4.622748,97.377985,8.782032,110.19667,12.963897),_0xdc48aa['bezierCurveTo'](111.101943,13.261956,112.004953,14.025168,112.9057,15.253533),_0xdc48aa[_0x111e2e(0x43e)](120.695587,25.88432,128.469627,36.528655,136.22782,47.186538),_0xdc48aa[_0x111e2e(0x43e)](137.66721,49.157793,138.00669,50.451642,137.9999,53.059662),_0xdc48aa[_0x111e2e(0x43e)](137.990833,65.921377,137.984067,78.780835,137.9796,91.638035),_0xdc48aa[_0x111e2e(0x43e)](137.9726,94.611853,136.86612,95.905704,134.86999,98.64243),_0xdc48aa[_0x111e2e(0x43e)](127.55085,108.677097,120.240763,118.718537,112.93973,128.76675),_0xdc48aa[_0x111e2e(0x43e)](112.084237,129.949957,110.952643,130.76962,109.54495,131.22574),_0xdc48aa[_0x111e2e(0x43e)](96.866582,135.34438,84.195005,139.46528,71.53022,143.58844),_0xdc48aa['bezierCurveTo'](69.859988,144.13036,68.203337,144.137093,66.560266,143.60864),_0xdc48aa['bezierCurveTo'](53.791373,139.471933,41.022479,135.337487,28.253586,131.2053),_0xdc48aa[_0x111e2e(0x43e)](26.732725,130.7108,25.564923,129.54566,24.526122,128.12987),_0xdc48aa['bezierCurveTo'](15.161074,115.304297,7.377985,104.612552,1.176856,96.054636),_0xdc48aa[_0x111e2e(0x43e)](0.420953,95.011427,0.040738,93.877899,0.036211,92.65405),_0xdc48aa[_0x111e2e(0x43e)](-0.000006,78.771706,-0.009056,65.108391,0.009061,51.664104),_0xdc48aa[_0x111e2e(0x43e)](0.013509,50.182839,0.552147,48.710607,1.624975,47.247406),_0xdc48aa[_0x111e2e(0x43e)](9.279068,36.801779,17.001056,26.19809,24.790941,15.436337),_0xdc48aa[_0x111e2e(0x43e)](25.741479,14.126682,26.895703,13.250568,28.253614,12.807996),_0xdc48aa['moveTo'](30.127426,126.53809),_0xdc48aa['lineTo'](67.992782,138.8195),_0xdc48aa['bezierCurveTo'](68.611049,139.017805,69.278067,139.017805,69.90065,138.8195),_0xdc48aa[_0x111e2e(0x418)](107.55552,126.61938),_0xdc48aa['bezierCurveTo'](108.151101,126.425483,108.669361,126.048349,109.03565,125.5423),_0xdc48aa[_0x111e2e(0x418)](132.5411,93.297694),_0xdc48aa['bezierCurveTo'](132.784022,92.963133,132.914722,92.560065,132.91452,92.1461),_0xdc48aa[_0x111e2e(0x418)](132.90752,51.874208),_0xdc48aa[_0x111e2e(0x43e)](132.90752,51.445183,132.783043,51.059061,132.53409,50.715842),_0xdc48aa[_0x111e2e(0x43e)](125.137923,40.545693,117.71011,30.3349,110.25065,20.083461),_0xdc48aa[_0x111e2e(0x43e)](109.77538,19.426377,108.7909,17.780275,107.95578,17.509313),_0xdc48aa[_0x111e2e(0x43e)](95.178057,13.359061,82.468118,9.233647,69.825963,5.133071),_0xdc48aa[_0x111e2e(0x43e)](69.261362,4.948454,68.652437,4.948454,68.087836,5.133071),_0xdc48aa[_0x111e2e(0x418)](30.439745,17.33996),_0xdc48aa[_0x111e2e(0x43e)](29.78194,17.551412,29.206865,17.966324,28.796674,18.525424),_0xdc48aa[_0x111e2e(0x418)](5.413442,50.634554),_0xdc48aa['bezierCurveTo'](5.087021,51.079141,4.911036,51.617755,4.911014,52.172269),_0xdc48aa[_0x111e2e(0x43e)](4.906561,64.695281,4.904334,77.33571,4.904334,90.093556),_0xdc48aa['bezierCurveTo'](4.904334,91.109667,4.788909,92.47803,5.352445,93.25705),_0xdc48aa['bezierCurveTo'](13.296227,104.158797,21.176639,114.979257,28.993682,125.71843),_0xdc48aa[_0x111e2e(0x43e)](29.283369,126.115843,29.66132,126.389063,30.127537,126.53809),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa['beginPath'](),_0xdc48aa[_0x111e2e(0x34b)]=0.179435,_0xdc48aa[_0x111e2e(0x43f)]=_0x2f046d,_0xdc48aa['moveTo'](68.821109,7.165295),_0xdc48aa[_0x111e2e(0x43e)](68.830176,7.074968,68.879967,7.029805,68.970483,7.029805),_0xdc48aa[_0x111e2e(0x418)](68.977183,7.029805),_0xdc48aa['bezierCurveTo'](69.058648,7.029805,69.101648,7.070453,69.106182,7.151751),_0xdc48aa[_0x111e2e(0x43e)](69.64482,13.975505,70.192511,20.69539,70.749256,27.311407),_0xdc48aa['bezierCurveTo'](70.780943,27.681722,70.943892,27.984297,71.238103,28.219132),_0xdc48aa[_0x111e2e(0x418)](105.2402,54.976739),_0xdc48aa['bezierCurveTo'](105.317147,55.039959,105.326213,55.109957,105.2674,55.186734),_0xdc48aa[_0x111e2e(0x418)](105.15196,55.349312),_0xdc48aa['bezierCurveTo'](105.138493,55.367372,105.12266,55.369605,105.10446,55.356012),_0xdc48aa['bezierCurveTo'](92.933075,47.10975,80.725465,38.947011,68.48163,30.867794),_0xdc48aa[_0x111e2e(0x43e)](67.534853,30.240487,67.004401,29.148276,67.09656,28.015907),_0xdc48aa[_0x111e2e(0x43e)](67.644251,21.250861,68.219101,14.300657,68.821109,7.165295),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa[_0x111e2e(0x20d)](),_0xdc48aa[_0x111e2e(0x34b)]=0.179435,_0xdc48aa[_0x111e2e(0x43f)]=_0x2f046d,_0xdc48aa[_0x111e2e(0x402)](24.043983,59.210536),_0xdc48aa[_0x111e2e(0x43e)](18.318124,56.731223,12.605845,54.342231,6.907144,52.043561),_0xdc48aa[_0x111e2e(0x43e)](6.821144,52.007427,6.791719,51.946458,6.818869,51.860654),_0xdc48aa[_0x111e2e(0x418)](6.825549,51.853954),_0xdc48aa['bezierCurveTo'](6.857231,51.750091,6.925123,51.711704,7.029223,51.738792),_0xdc48aa[_0x111e2e(0x43e)](13.569828,53.314893,20.17154,54.875188,26.834359,56.419678),_0xdc48aa[_0x111e2e(0x43e)](27.241793,56.514746,27.669203,56.438772,28.015742,56.209683),_0xdc48aa['lineTo'](63.402901,32.703679),_0xdc48aa['bezierCurveTo'](63.479851,32.654012,63.545484,32.667566,63.5998,32.744339),_0xdc48aa[_0x111e2e(0x418)](63.708425,32.893373),_0xdc48aa[_0x111e2e(0x43e)](63.717492,32.90686,63.715258,32.91815,63.701725,32.927243),_0xdc48aa[_0x111e2e(0x43e)](52.340533,41.77419,41.022342,50.684361,29.747151,59.657756),_0xdc48aa['bezierCurveTo'](27.920761,61.114182,25.836367,59.982911,24.043924,59.210666),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa[_0x111e2e(0x20d)](),_0xdc48aa['lineWidth']=0.179435,_0xdc48aa['fillStyle']=_0x2f046d,_0xdc48aa['moveTo'](111.48669,60.511159),_0xdc48aa[_0x111e2e(0x43e)](106.322097,74.140603,101.241243,87.90327,96.244128,101.79916),_0xdc48aa[_0x111e2e(0x43e)](96.239661,101.82176,96.226078,101.828493,96.203378,101.81936),_0xdc48aa[_0x111e2e(0x418)](96.026853,101.76516),_0xdc48aa['bezierCurveTo'](95.949904,101.738027,95.922744,101.688347,95.945373,101.61612),_0xdc48aa['lineTo'](108.03079,58.776886),_0xdc48aa[_0x111e2e(0x43e)](108.324507,57.73976,109.15528,56.941965,110.20345,56.690471),_0xdc48aa['lineTo'](130.70112,51.833456),_0xdc48aa[_0x111e2e(0x43e)](130.778067,51.815396,130.827857,51.842493,130.85049,51.914746),_0xdc48aa['lineTo'](130.91159,52.124741),_0xdc48aa['bezierCurveTo'](130.920657,52.151848,130.91159,52.169914,130.88439,52.178941),_0xdc48aa[_0x111e2e(0x43e)](124.57011,54.622124,118.262613,57.232401,111.9619,60.009774),_0xdc48aa[_0x111e2e(0x43e)](111.735587,60.10913,111.577167,60.276224,111.48664,60.511056),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa[_0x111e2e(0x20d)](),_0xdc48aa[_0x111e2e(0x34b)]=0.179435,_0xdc48aa['fillStyle']=_0x2f046d,_0xdc48aa[_0x111e2e(0x402)](29.536737,63.593364),_0xdc48aa[_0x111e2e(0x43e)](34.850696,77.647317,40.053758,91.687722,45.145924,105.71458),_0xdc48aa[_0x111e2e(0x43e)](45.50686,106.702147,45.304356,107.808202,44.616339,108.60711),_0xdc48aa[_0x111e2e(0x43e)](39.981336,114.012823,35.28749,119.48402,30.5348,125.0207),_0xdc48aa[_0x111e2e(0x43e)](30.471433,125.097473,30.399009,125.106507,30.317526,125.0478),_0xdc48aa['lineTo'](30.310826,125.0408),_0xdc48aa[_0x111e2e(0x43e)](30.229361,124.982067,30.215787,124.909807,30.270106,124.82402),_0xdc48aa[_0x111e2e(0x43e)](33.936467,118.894447,37.566616,112.982933,41.160553,107.08948),_0xdc48aa[_0x111e2e(0x43e)](41.350922,106.773789,41.402463,106.391764,41.303127,106.03273),_0xdc48aa['bezierCurveTo'](37.338042,91.997061,33.348053,77.848381,29.333162,63.586689),_0xdc48aa[_0x111e2e(0x43e)](29.319642,63.550556,29.330959,63.527972,29.367112,63.518939),_0xdc48aa[_0x111e2e(0x418)](29.373812,63.512239),_0xdc48aa[_0x111e2e(0x43e)](29.450761,63.489659,29.505078,63.516756,29.536761,63.593529),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa[_0x111e2e(0x20d)](),_0xdc48aa[_0x111e2e(0x34b)]=0.179435,_0xdc48aa[_0x111e2e(0x43f)]=_0x2f046d,_0xdc48aa[_0x111e2e(0x402)](49.579507,106.77133),_0xdc48aa['bezierCurveTo'](50.439517,106.613277,51.313106,106.5207,52.200275,106.4936),_0xdc48aa[_0x111e2e(0x43e)](65.770334,106.114247,79.50787,105.597157,93.412881,104.94233),_0xdc48aa['bezierCurveTo'](94.9609,104.87463,96.054018,105.76877,96.834818,107.10326),_0xdc48aa['bezierCurveTo'](100.292966,113.001227,103.84843,118.817903,107.50121,124.55329),_0xdc48aa['bezierCurveTo'](107.514743,124.580357,107.51021,124.60069,107.48761,124.61429),_0xdc48aa['lineTo'](107.33824,124.72267),_0xdc48aa[_0x111e2e(0x43e)](107.27034,124.772337,107.20923,124.765603,107.15491,124.70247),_0xdc48aa[_0x111e2e(0x418)](93.731956,109.09492),_0xdc48aa['bezierCurveTo'](93.537347,108.869067,93.290671,108.749367,92.99193,108.73582),_0xdc48aa['bezierCurveTo'](79.707031,108.202927,66.791032,107.708417,54.243931,107.25229),_0xdc48aa[_0x111e2e(0x43e)](52.560122,107.18909,50.935155,107.049093,49.369031,106.8323),_0xdc48aa['bezierCurveTo'](49.361744,106.8323,49.355011,106.828421,49.351367,106.822125),_0xdc48aa[_0x111e2e(0x43e)](49.347724,106.815829,49.347724,106.808071,49.351367,106.801775),_0xdc48aa[_0x111e2e(0x43e)](49.355011,106.795479,49.361744,106.7916,49.369031,106.7916),_0xdc48aa[_0x111e2e(0x43e)](49.441447,106.7916,49.511605,106.784867,49.579505,106.7714),_0xdc48aa[_0x111e2e(0x2d0)](),_0xdc48aa['restore'](),_0x25684a['_baseTexture']['update'](),_0x25684a['_customModified']=![],_0x25684a[_0x111e2e(0x3a3)]=!![],this[_0x111e2e(0x477)][_0x213b60]=_0x25684a,this[_0x111e2e(0x477)][_0x213b60];},ImageManager[_0x497107(0x424)]=function(_0x1e9d44){const _0xea5af8=_0x497107,_0x7af7b6=_0xea5af8(0x40f)[_0xea5af8(0x329)](_0x1e9d44);this[_0xea5af8(0x3b7)]=this[_0xea5af8(0x3b7)]||{};if(this['_cache_createDiceGraphic_D20'][_0x7af7b6]!==undefined)return this['_cache_createDiceGraphic_D20'][_0x7af7b6];const _0x5c1797=ImageManager[_0xea5af8(0x357)],_0x2f69cb=ColorManager['darkenColor'](_0x1e9d44,_0x5c1797[_0xea5af8(0x1e1)]),_0xda7854=ColorManager['darkenColor'](_0x1e9d44,_0x5c1797[_0xea5af8(0x362)]),_0x56dae8=ColorManager[_0xea5af8(0x24a)](_0x1e9d44,_0x5c1797[_0xea5af8(0x388)]),_0x952a46=ColorManager['darkenColor'](_0x1e9d44,_0x5c1797[_0xea5af8(0x2fd)]),_0x1ffda0=new Bitmap(0x80,0x90),_0x34968c=_0x1ffda0['_context'];return _0x34968c[_0xea5af8(0x3aa)](),_0x34968c[_0xea5af8(0x20d)](),_0x34968c['fillStyle']=_0xda7854,_0x34968c['lineWidth']=0.070004,_0x34968c[_0xea5af8(0x36a)]=_0xea5af8(0x27d),_0x34968c['lineJoin']=_0xea5af8(0x377),_0x34968c['moveTo'](64.242978,2.445235),_0x34968c[_0xea5af8(0x418)](3.556705,36.678518),_0x34968c['lineTo'](2.22294,107.36802),_0x34968c[_0xea5af8(0x418)](63.798391,142.04589),_0x34968c['lineTo'](125.59614,107.81261),_0x34968c[_0xea5af8(0x418)](124.70696,36.23393),_0x34968c['fill'](),_0x34968c[_0xea5af8(0x20d)](),_0x34968c[_0xea5af8(0x43f)]=_0x56dae8,_0x34968c[_0xea5af8(0x34b)]=0.070004,_0x34968c[_0xea5af8(0x36a)]=_0xea5af8(0x27d),_0x34968c[_0xea5af8(0x221)]=_0xea5af8(0x377),_0x34968c[_0xea5af8(0x402)](64.242978,20.006464),_0x34968c[_0xea5af8(0x418)](5.446204,38.915352),_0x34968c['lineTo'](16.894348,100.6992),_0x34968c['lineTo'](64.020685,138.0446),_0x34968c[_0xea5af8(0x418)](110.92473,100.81035),_0x34968c[_0xea5af8(0x418)](122.03943,38.234576),_0x34968c[_0xea5af8(0x2d0)](),_0x34968c[_0xea5af8(0x20d)](),_0x34968c[_0xea5af8(0x43f)]=_0x952a46,_0x34968c[_0xea5af8(0x34b)]=0.070004,_0x34968c[_0xea5af8(0x36a)]=_0xea5af8(0x27d),_0x34968c[_0xea5af8(0x221)]=_0xea5af8(0x377),_0x34968c[_0xea5af8(0x402)](63.974551,20.748503),_0x34968c[_0xea5af8(0x418)](16.504491,100.75598),_0x34968c[_0xea5af8(0x418)](110.65868,100.5988),_0x34968c[_0xea5af8(0x2d0)](),_0x34968c[_0xea5af8(0x20d)](),_0x34968c[_0xea5af8(0x34b)]=0.171604,_0x34968c[_0xea5af8(0x43f)]=_0x2f69cb,_0x34968c[_0xea5af8(0x402)](59.025664,142.33392),_0x34968c[_0xea5af8(0x43e)](40.596453,131.78455,22.147669,121.26744,3.698885,110.74387),_0x34968c[_0xea5af8(0x43e)](2.268039,109.93139,1.241657,108.835183,0.619739,107.45525),_0x34968c[_0xea5af8(0x43e)](0.215275,106.56539,0.013043,105.153217,0.013043,103.21873),_0x34968c[_0xea5af8(0x43e)](0.013043,82.02973,0.008695,60.840728,0x0,39.651723),_0x34968c[_0xea5af8(0x43e)](0x0,36.926258,1.217741,34.867113,3.653224,33.474286),_0x34968c['bezierCurveTo'](23.02836,22.387567,42.075141,11.498594,60.793568,0.807368),_0x34968c[_0xea5af8(0x43e)](62.863729,-0.374814,65.14047,-0.258746,67.623793,1.155574),_0x34968c[_0xea5af8(0x43e)](86.955442,12.139122,105.963085,22.955014,124.64672,33.60325),_0x34968c[_0xea5af8(0x43e)](127.15831,35.03477,128.0129,37.678554,127.99985,40.496442),_0x34968c[_0xea5af8(0x43e)](127.904177,62.386162,127.878077,83.869638,127.92155,104.94687),_0x34968c[_0xea5af8(0x43e)](127.92755,108.10007,125.91227,109.75728,123.05493,111.38869),_0x34968c[_0xea5af8(0x43e)](104.632258,121.907963,86.207403,132.42294,67.780365,142.93362),_0x34968c[_0xea5af8(0x43e)](64.720788,144.68109,62.183104,144.13944,59.025675,142.33392),_0x34968c[_0xea5af8(0x402)](123.21152,39.729104),_0x34968c['bezierCurveTo'](123.210686,38.859111,122.740792,38.055514,121.97855,37.62052),_0x34968c[_0xea5af8(0x418)](65.210052,5.211534),_0x34968c['bezierCurveTo'](64.447092,4.776126,63.507086,4.776126,62.744126,5.211534),_0x34968c['lineTo'](5.962579,37.626971),_0x34968c[_0xea5af8(0x43e)](5.200339,38.061967,4.730448,38.865565,4.729616,39.735557),_0x34968c[_0xea5af8(0x418)](4.729616,104.37943),_0x34968c[_0xea5af8(0x43e)](4.73045,105.24942,5.200341,106.053015,5.962579,106.48801),_0x34968c[_0xea5af8(0x418)](62.744126,138.89055),_0x34968c[_0xea5af8(0x43e)](63.507086,139.325957,64.447092,139.325957,65.210052,138.89055),_0x34968c[_0xea5af8(0x418)](122.00465,106.48156),_0x34968c[_0xea5af8(0x43e)](122.766887,106.046564,123.236777,105.242969,123.23761,104.37298),_0x34968c['fill'](),_0x34968c[_0xea5af8(0x20d)](),_0x34968c['lineWidth']=0.171604,_0x34968c[_0xea5af8(0x43f)]=_0x2f69cb,_0x34968c[_0xea5af8(0x402)](67.60422,23.086129),_0x34968c[_0xea5af8(0x43e)](67.325879,23.090462,67.254118,23.21298,67.388938,23.453681),_0x34968c[_0xea5af8(0x43e)](80.910215,47.381048,94.307546,71.198795,107.58093,94.906922),_0x34968c[_0xea5af8(0x43e)](107.61573,94.967095,107.602697,95.016532,107.54183,95.055231),_0x34968c[_0xea5af8(0x418)](107.54183,95.055231),_0x34968c[_0xea5af8(0x43e)](107.480963,95.089624,107.433127,95.076738,107.39832,95.016571),_0x34968c[_0xea5af8(0x43e)](92.733193,70.908633,78.083307,46.749118,63.448663,22.538026),_0x34968c[_0xea5af8(0x43e)](63.339938,22.353176,63.181197,22.290843,62.97244,22.351027),_0x34968c[_0xea5af8(0x43e)](44.828089,27.625709,26.666343,32.881046,8.487204,38.117038),_0x34968c['bezierCurveTo'](8.404571,38.142838,8.350209,38.114895,8.324117,38.033208),_0x34968c[_0xea5af8(0x418)](8.324117,38.026408),_0x34968c['bezierCurveTo'](8.298021,37.944743,8.326289,37.89101,8.408922,37.865208),_0x34968c[_0xea5af8(0x43e)](26.022684,31.825333,43.934356,25.695181,62.143939,19.474753),_0x34968c[_0xea5af8(0x43e)](62.444021,19.37588,62.607111,19.169536,62.633208,18.855719),_0x34968c['lineTo'](63.75527,6.4686),_0x34968c['bezierCurveTo'](63.759537,6.404116,63.794333,6.371874,63.85966,6.371874),_0x34968c['lineTo'](64.048864,6.365414),_0x34968c['bezierCurveTo'](64.092377,6.365414,64.116301,6.38476,64.120634,6.423452),_0x34968c[_0xea5af8(0x418)](65.360123,18.765433),_0x34968c[_0xea5af8(0x43e)](65.395549,19.118212,65.637947,19.41834,65.979866,19.532777),_0x34968c[_0xea5af8(0x43e)](83.567532,25.400698,101.189993,31.27507,118.84725,37.155892),_0x34968c[_0xea5af8(0x43e)](118.925537,37.181665,118.953803,37.233256,118.93205,37.310664),_0x34968c[_0xea5af8(0x418)](118.92605,37.317264),_0x34968c[_0xea5af8(0x43e)](118.904383,37.398935,118.85002,37.426882,118.76296,37.401104),_0x34968c[_0xea5af8(0x43e)](102.058039,32.723967,85.127026,27.967299,67.969919,23.131099),_0x34968c[_0xea5af8(0x43e)](67.848142,23.096706,67.726366,23.081659,67.604589,23.085959),_0x34968c[_0xea5af8(0x2d0)](),_0x34968c[_0xea5af8(0x20d)](),_0x34968c[_0xea5af8(0x34b)]=0.171604,_0x34968c['fillStyle']=_0x2f69cb,_0x34968c[_0xea5af8(0x402)](17.750752,96.183678),_0x34968c[_0xea5af8(0x43e)](17.811639,96.458807,17.913842,96.476003,18.057363,96.235268),_0x34968c[_0xea5af8(0x43e)](31.343792,74.255287,44.701981,52.268853,58.13193,30.275964),_0x34968c['bezierCurveTo'](58.16673,30.215784,58.214566,30.202884,58.275439,30.237264),_0x34968c[_0xea5af8(0x418)](58.281839,30.243864),_0x34968c[_0xea5af8(0x43e)](58.355767,30.282551,58.370987,30.338433,58.327499,30.411512),_0x34968c[_0xea5af8(0x43e)](45.323852,53.612344,32.29189,76.830387,19.231613,100.06564),_0x34968c[_0xea5af8(0x43e)](19.116793,100.267839,19.16332,100.522137,19.342512,100.67178),_0x34968c[_0xea5af8(0x43e)](33.916271,112.824607,48.509598,125.020427,63.122494,137.25924),_0x34968c['bezierCurveTo'](63.170341,137.30224,63.174624,137.34737,63.135344,137.39463),_0x34968c['lineTo'](63.135344,137.39463),_0x34968c[_0xea5af8(0x43e)](63.096191,137.44623,63.050534,137.452663,62.998374,137.41393),_0x34968c[_0xea5af8(0x43e)](47.698309,125.880163,32.385205,114.292643,17.059061,102.65137),_0x34968c[_0xea5af8(0x43e)](16.859006,102.500923,16.637203,102.460093,16.393652,102.52888),_0x34968c['lineTo'](7.091036,105.1855),_0x34968c[_0xea5af8(0x43e)](5.603652,105.61108,5.536241,105.447723,6.888805,104.69543),_0x34968c['lineTo'](15.082465,100.14295),_0x34968c[_0xea5af8(0x43e)](15.291222,100.022563,15.37603,99.844151,15.336889,99.607715),_0x34968c[_0xea5af8(0x418)](5.792966,41.760309),_0x34968c['bezierCurveTo'](5.784273,41.687238,5.81689,41.644253,5.890818,41.631352),_0x34968c[_0xea5af8(0x418)](6.086525,41.592652),_0x34968c[_0xea5af8(0x43e)](6.103936,41.588385,6.114808,41.594812,6.119142,41.611932),_0x34968c[_0xea5af8(0x43e)](9.872396,59.88202,13.749598,78.072581,17.750749,96.183614),_0x34968c['fill'](),_0x34968c[_0xea5af8(0x20d)](),_0x34968c[_0xea5af8(0x34b)]=0.171604,_0x34968c[_0xea5af8(0x43f)]=_0x2f69cb,_0x34968c['moveTo'](112.75416,100.07843),_0x34968c[_0xea5af8(0x43e)](115.615853,101.776477,118.494943,103.47452,121.39143,105.17256),_0x34968c['bezierCurveTo'](121.447963,105.20696,121.471897,105.273593,121.46323,105.37246),_0x34968c[_0xea5af8(0x43e)](121.450163,105.50144,121.38057,105.546567,121.25445,105.50784),_0x34968c['lineTo'](111.51469,102.56098),_0x34968c[_0xea5af8(0x43e)](111.298152,102.495879,111.062316,102.539122,110.8819,102.67701),_0x34968c[_0xea5af8(0x43e)](95.616641,114.270997,80.405746,125.809093,65.249215,137.2913),_0x34968c['bezierCurveTo'](65.197008,137.3343,65.149172,137.327867,65.105706,137.272),_0x34968c[_0xea5af8(0x418)](65.099306,137.272),_0x34968c[_0xea5af8(0x43e)](65.060153,137.2204,65.066703,137.170963,65.118956,137.12369),_0x34968c['bezierCurveTo'](79.788394,124.807497,94.433909,112.532143,109.0555,100.29763),_0x34968c[_0xea5af8(0x43e)](109.334214,100.067917,109.525292,99.749342,109.59696,99.394878),_0x34968c[_0xea5af8(0x43e)](113.4198,80.454168,117.303523,61.444678,121.24813,42.366409),_0x34968c[_0xea5af8(0x43e)](121.26553,42.28903,121.315547,42.25679,121.39818,42.269689),_0x34968c[_0xea5af8(0x418)](121.39818,42.269689),_0x34968c[_0xea5af8(0x43e)](121.476467,42.282542,121.5091,42.32767,121.49608,42.405072),_0x34968c[_0xea5af8(0x43e)](118.56046,61.513439,115.59222,80.621803,112.59136,99.730165),_0x34968c[_0xea5af8(0x43e)](112.568158,99.869788,112.633014,100.008271,112.75444,100.07838),_0x34968c[_0xea5af8(0x2d0)](),_0x34968c['beginPath'](),_0x34968c[_0xea5af8(0x34b)]=0.171604,_0x34968c[_0xea5af8(0x43f)]=_0x2f69cb,_0x34968c[_0xea5af8(0x402)](103.73853,100.7426),_0x34968c['bezierCurveTo'](103.73853,100.807067,103.705897,100.841447,103.64063,100.84574),_0x34968c[_0xea5af8(0x43e)](77.154751,102.079507,50.658001,102.075207,24.15038,100.83284),_0x34968c[_0xea5af8(0x43e)](24.093847,100.82884,24.06558,100.79874,24.06558,100.74254),_0x34968c[_0xea5af8(0x418)](24.06558,100.74254),_0x34968c['bezierCurveTo'](24.06558,100.678073,24.096023,100.64369,24.15691,100.63939),_0x34968c[_0xea5af8(0x43e)](50.625389,99.470108,77.113442,99.463675,103.62107,100.62009),_0x34968c[_0xea5af8(0x43e)](103.699357,100.62009,103.7385,100.65878,103.7385,100.73616),_0x34968c[_0xea5af8(0x2d0)](),_0x34968c[_0xea5af8(0x27e)](),_0x1ffda0[_0xea5af8(0x2c3)][_0xea5af8(0x2d6)](),_0x1ffda0[_0xea5af8(0x2ed)]=![],_0x1ffda0[_0xea5af8(0x3a3)]=!![],this[_0xea5af8(0x3b7)][_0x7af7b6]=_0x1ffda0,this['_cache_createDiceGraphic_D20'][_0x7af7b6];},SoundManager['playDiceSound']=function(_0x5506d2){const _0x33a99c=_0x497107,_0x1b1f7c=VisuMZ['DiceRollsRngSeeds'][_0x33a99c(0x293)][_0x33a99c(0x2e3)],_0x31ae34={'name':_0x1b1f7c['%1_name'[_0x33a99c(0x329)](_0x5506d2)]||'','volume':_0x1b1f7c[_0x33a99c(0x24b)[_0x33a99c(0x329)](_0x5506d2)]||0x0,'pitch':_0x1b1f7c['%1_pitch'['format'](_0x5506d2)]||0x0,'pan':_0x1b1f7c[_0x33a99c(0x463)['format'](_0x5506d2)]||0x0};if(_0x31ae34[_0x33a99c(0x237)]==='')return;AudioManager[_0x33a99c(0x26b)](_0x31ae34);},SoundManager[_0x497107(0x1ed)]=function(){const _0x14e789=_0x497107;this[_0x14e789(0x22e)](_0x14e789(0x44a));},SoundManager[_0x497107(0x2a4)]=function(){const _0x41560c=_0x497107;this['playDiceSound'](_0x41560c(0x256));},SoundManager[_0x497107(0x48f)]=function(){const _0x5bc95a=_0x497107;this[_0x5bc95a(0x22e)](_0x5bc95a(0x264));},SoundManager['playDiceSuccess']=function(_0x50666b){const _0x33741b=_0x497107;this[_0x33741b(0x22e)](_0x50666b?_0x33741b(0x1f7):_0x33741b(0x2f7));},SoundManager[_0x497107(0x46c)]=function(_0x1cbf89){const _0x5ad8cd=_0x497107;this[_0x5ad8cd(0x22e)](_0x1cbf89?_0x5ad8cd(0x40e):'failure');},TextManager['DICE_ROLL']={'choices':{'roll':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['CommandRoll']??_0x497107(0x27b),'effects':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x41d)][_0x497107(0x239)]??_0x497107(0x316),'bonus':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x451)]??_0x497107(0x270)},'colors':{'diceUpColor':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Vocab'][_0x497107(0x23c)]??0x18,'diceDownColor':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x3b8)]??0x1b,'rankUpColor':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x314)]??0x15,'rankDownColor':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x385)]??0x4,'modUpColor':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Vocab']['modUpColor']??0x6,'modDownColor':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)]['Vocab'][_0x497107(0x2bb)]??0x2},'data':{'count':VisuMZ['DiceRollsRngSeeds']['Settings']['Vocab'][_0x497107(0x1e6)]??_0x497107(0x3ed),'advantage':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x287)]??_0x497107(0x326),'disadvantage':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['DataDisadvantage']??'\x5cC[27]Disadvantage:','rank':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['DataDiceRank']??_0x497107(0x34e),'modifier':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Vocab']['DataModifiers']??_0x497107(0x315),'rank1':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['DataRank1']??'D4','rank2':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['DataRank2']??'D6','rank3':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Vocab'][_0x497107(0x366)]??'D8','rank4':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['DataRank4']??'D10','rank5':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x1fd)]??_0x497107(0x238),'rank6':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['DataRank6']??_0x497107(0x464)},'bonus':{'displayFmt':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x320)]??_0x497107(0x26c),'costTextFmt':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x41d)][_0x497107(0x2a9)]??_0x497107(0x2a8),'usedUp':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x224)]??_0x497107(0x2a6),'useTimesFmt':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x41d)][_0x497107(0x397)]??_0x497107(0x2d1),'showUseMax1':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['CostShowMaxUse1']??![],'unlimitedUse':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x371)]??'∞','variableCostFmt':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['CostVarFormat']??_0x497107(0x232),'itemCostFmt':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x39c)]??_0x497107(0x232),'weaponCostFmt':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x41d)]['CostWeaponFormat']??'(×%2-%1)','armorCostFmt':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x41d)][_0x497107(0x2b3)]??_0x497107(0x232),'skillUserFmt':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Vocab'][_0x497107(0x389)]??_0x497107(0x267),'skillUserCostFmt':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)]['Vocab'][_0x497107(0x2a2)]??_0x497107(0x25c)},'effectList':{'displayFmt':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x295)]??_0x497107(0x26c),'effectTextFmt':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x430)]??_0x497107(0x2a8),'orderFmt':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x425)]??'%1\x20%2\x20%3','plusSign':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x41d)]['DicePlusSigns']??!![],'diceCountFmt':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x3d7)]??'Dice%1','advantageFmt':VisuMZ['DiceRollsRngSeeds']['Settings']['Vocab']['DiceAdvantage']??_0x497107(0x1fe),'disadvantageFmt':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x409)]??'Dis%1','rankFmt':VisuMZ[_0x497107(0x384)]['Settings']['Vocab'][_0x497107(0x438)]??_0x497107(0x475),'modifierFmt':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x41d)][_0x497107(0x25d)]??'Roll%1'},'subtitle':{'total':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x306)]??_0x497107(0x2e6),'highest':VisuMZ['DiceRollsRngSeeds']['Settings'][_0x497107(0x41d)][_0x497107(0x290)]??_0x497107(0x2ff),'average':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Vocab'][_0x497107(0x2aa)]??_0x497107(0x339),'lowest':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x248)]??_0x497107(0x22a),'aboveTarget':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x30e)]??'\x5cC[5]Difficulty\x20Class:\x5cC[0]\x20Above\x20\x5cC[24]%1\x5cC[0]','aboveEqualTarget':VisuMZ[_0x497107(0x384)]['Settings']['Vocab'][_0x497107(0x321)]??_0x497107(0x275),'belowEqualTarget':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x416)]??_0x497107(0x1e8),'belowTarget':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x47b)]??_0x497107(0x303),'criticalSuccess':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x41d)][_0x497107(0x2eb)]??_0x497107(0x413),'criticalFailure':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x41d)]['SubtitleCritFailure']??_0x497107(0x3f4)}},TextManager[_0x497107(0x276)]=function(){const _0x1553e2=_0x497107,_0x3946f2=SceneManager['_diceRollSettings']||{},_0x29233c=_0x3946f2[_0x1553e2(0x437)][_0x1553e2(0x2fc)]();switch(_0x29233c){case _0x1553e2(0x247):case _0x1553e2(0x2bd):case _0x1553e2(0x46f):case'lowest':return TextManager['DICE_ROLL']['subtitle'][_0x29233c]||'';case _0x1553e2(0x205):case'aboveEqualTarget':case'belowEqualTarget':case _0x1553e2(0x2f3):const _0x4c554e=_0x3946f2[_0x1553e2(0x1f2)]||0x0,_0x4d89ef=TextManager[_0x1553e2(0x3f0)][_0x1553e2(0x381)][_0x29233c]||'';return _0x4d89ef[_0x1553e2(0x329)](_0x4c554e);}return'';},TextManager[_0x497107(0x374)]=function(_0x1fa7bd){const _0x3a66d6=_0x497107;if(!_0x1fa7bd)return'';const _0x59baca=SceneManager[_0x3a66d6(0x1eb)]||{},_0x33d794=TextManager[_0x3a66d6(0x3f0)][_0x3a66d6(0x368)],_0x3e1b3a=TextManager[_0x3a66d6(0x3f0)][_0x3a66d6(0x369)],_0x3b9f17=_0x33d794['plusSign'];let _0x21bc6e='';if(_0x1fa7bd[_0x3a66d6(0x3fe)]){if(_0x59baca[_0x3a66d6(0x46e)]===_0x3a66d6(0x43c)){let _0x7d5044=String(_0x1fa7bd[_0x3a66d6(0x3fe)]);if(_0x3b9f17&&_0x1fa7bd['Advantage']>=0x0)_0x7d5044='+'+_0x7d5044;_0x21bc6e=_0x33d794[_0x3a66d6(0x2f5)][_0x3a66d6(0x329)](_0x7d5044);}else{let _0x293e76=String(Math['abs'](_0x1fa7bd['Advantage']));if(_0x3b9f17)_0x293e76='+'+_0x293e76;const _0xfb2b18=_0x1fa7bd[_0x3a66d6(0x3fe)]>=0x0?_0x33d794['advantageFmt']:_0x33d794[_0x3a66d6(0x3af)];_0x21bc6e=_0xfb2b18[_0x3a66d6(0x329)](_0x293e76);}const _0x34de3a=_0x1fa7bd[_0x3a66d6(0x3fe)]>=0x0?_0x3e1b3a[_0x3a66d6(0x23c)]:_0x3e1b3a['diceDownColor'];_0x21bc6e=_0x3a66d6(0x2e7)['format'](_0x21bc6e,_0x34de3a);}let _0x37c070='';if(_0x1fa7bd[_0x3a66d6(0x438)]){let _0x3391a9=String(_0x1fa7bd[_0x3a66d6(0x438)]);if(_0x3b9f17&&_0x1fa7bd[_0x3a66d6(0x438)]>=0x0)_0x3391a9='+'+_0x3391a9;_0x37c070=_0x33d794['rankFmt']['format'](_0x3391a9);const _0x10158b=_0x1fa7bd[_0x3a66d6(0x438)]>=0x0?_0x3e1b3a[_0x3a66d6(0x314)]:_0x3e1b3a[_0x3a66d6(0x385)];_0x37c070='\x5cC[%2]%1\x5cC[0]'[_0x3a66d6(0x329)](_0x37c070,_0x10158b);}let _0x3792cc='';if(_0x1fa7bd[_0x3a66d6(0x25d)]||_0x1fa7bd[_0x3a66d6(0x38b)]){const _0x2624c9=_0x1fa7bd[_0x3a66d6(0x25d)]||0x0,_0x1f821c=_0x2624c9+(_0x1fa7bd[_0x3a66d6(0x38b)]||0x0),_0x936358=Math[_0x3a66d6(0x2c2)](_0x2624c9,_0x1f821c),_0x40bc69=Math[_0x3a66d6(0x407)](_0x2624c9,_0x1f821c);let _0x53e58d=String(_0x936358||0x0);Math[_0x3a66d6(0x3a7)](_0x936358)>Math[_0x3a66d6(0x3a7)](_0x40bc69)&&(_0x53e58d=String(_0x40bc69||0x0));if(_0x3b9f17&&_0x936358>=0x0)_0x53e58d='+'+_0x53e58d;_0x40bc69!==_0x936358&&(Math[_0x3a66d6(0x3a7)](_0x936358)>Math[_0x3a66d6(0x3a7)](_0x40bc69)?_0x53e58d=_0x3a66d6(0x37e)[_0x3a66d6(0x329)](_0x53e58d,_0x936358):_0x53e58d=_0x3a66d6(0x37e)[_0x3a66d6(0x329)](_0x53e58d,_0x40bc69));_0x3792cc=_0x33d794[_0x3a66d6(0x2d9)]['format'](_0x53e58d);const _0x9bc6df=_0x936358>=0x0||_0x40bc69>=0x0?_0x3e1b3a['modUpColor']:_0x3e1b3a[_0x3a66d6(0x2bb)];_0x3792cc=_0x3a66d6(0x2e7)[_0x3a66d6(0x329)](_0x3792cc,_0x9bc6df);}let _0x4be9e7=_0x33d794[_0x3a66d6(0x245)][_0x3a66d6(0x329)](_0x21bc6e,_0x37c070,_0x3792cc)[_0x3a66d6(0x2fc)]();return _0x4be9e7=_0x4be9e7[_0x3a66d6(0x258)](/[ ][ ]*/gi,'\x20'),_0x4be9e7=_0x4be9e7[_0x3a66d6(0x258)](/[ ]*\\}[ ]*/gi,'\x5c}'),_0x4be9e7=_0x4be9e7[_0x3a66d6(0x258)](/[ ]*\\{[ ]*/gi,'\x5c{'),_0x4be9e7['trim']();},ColorManager['getColor']=function(_0x189ed9){const _0x532ee1=_0x497107;return _0x189ed9=String(_0x189ed9),_0x189ed9[_0x532ee1(0x31d)](/#(.*)/i)?_0x532ee1(0x349)[_0x532ee1(0x329)](String(RegExp['$1'])):this[_0x532ee1(0x1e3)](Number(_0x189ed9));},ColorManager[_0x497107(0x24a)]=function(_0x5f3e86,_0x4d24fa){const _0x170233=_0x497107;_0x4d24fa=_0x4d24fa||0x0;let _0x56d052=ColorManager[_0x170233(0x3d5)](_0x5f3e86),_0x29c35f=parseInt(_0x56d052['slice'](0x1,0x3),0x10),_0x56a1ac=parseInt(_0x56d052[_0x170233(0x206)](0x3,0x5),0x10),_0x3e2d12=parseInt(_0x56d052[_0x170233(0x206)](0x5,0x7),0x10);return _0x29c35f=Math[_0x170233(0x407)](0x0,Math[_0x170233(0x2c2)](0xff,Math[_0x170233(0x289)](_0x29c35f*_0x4d24fa)))[_0x170233(0x213)](0x10),_0x56a1ac=Math[_0x170233(0x407)](0x0,Math[_0x170233(0x2c2)](0xff,Math[_0x170233(0x289)](_0x56a1ac*_0x4d24fa)))[_0x170233(0x213)](0x10),_0x3e2d12=Math[_0x170233(0x407)](0x0,Math['min'](0xff,Math[_0x170233(0x289)](_0x3e2d12*_0x4d24fa)))[_0x170233(0x213)](0x10),'#'+_0x29c35f[_0x170233(0x2d5)](0x2,'0')+_0x56a1ac['padStart'](0x2,'0')+_0x3e2d12[_0x170233(0x2d5)](0x2,'0');},SceneManager[_0x497107(0x36b)]=function(){const _0x378b7f=_0x497107;return this[_0x378b7f(0x343)];},SceneManager['canRollDice']=function(){const _0xf10958=_0x497107;if(this[_0xf10958(0x36b)]()){if($gameTemp[_0xf10958(0x3dc)]()){const _0x450730=_0xf10958(0x342);console['log'](_0x450730);}return![];}if(Imported[_0xf10958(0x30a)]){if(this[_0xf10958(0x382)]()){if($gameTemp[_0xf10958(0x3dc)]()){const _0x3301db=_0xf10958(0x328);console[_0xf10958(0x39f)](_0x3301db);}return![];}}if(this['isSceneBattle']()){const _0x3bcdd4=this[_0xf10958(0x331)][_0xf10958(0x2b9)];if(Imported[_0xf10958(0x2d2)]){if(this[_0xf10958(0x331)][_0xf10958(0x2f6)]()){const _0x21811c='Cannot\x20roll\x20dice\x20during\x20Active\x20Chain\x20Skills.';return console[_0xf10958(0x39f)](_0x21811c),![];}}if(Imported['VisuMZ_3_InputComboSkills']){if(_0x3bcdd4[_0xf10958(0x282)]){const _0x392aeb='Cannot\x20roll\x20dice\x20during\x20Input\x20Combo\x20Skills.';return console['log'](_0x392aeb),![];}}if(Imported[_0xf10958(0x3bc)]){if(_0x3bcdd4[_0xf10958(0x441)]){const _0x72f078='Cannot\x20roll\x20dice\x20during\x20Evolution\x20Matrix\x20Skills.';return console[_0xf10958(0x39f)](_0x72f078),![];}}}return!this[_0xf10958(0x343)];},SceneManager['setupDiceRoll']=function(_0x343358){const _0x16fe6f=_0x497107;if(!this[_0x16fe6f(0x3b0)]())return;this[_0x16fe6f(0x343)]=!![],this[_0x16fe6f(0x1eb)]=_0x343358,this[_0x16fe6f(0x43d)]=0x0,this[_0x16fe6f(0x346)]();const _0x70dcee=$gameTemp[_0x16fe6f(0x33a)]();_0x70dcee&&_0x70dcee['setWaitMode'](_0x16fe6f(0x2b6));const _0x2483f3=this['_scene'];_0x2483f3?(this[_0x16fe6f(0x43d)]=0x3c,_0x2483f3[_0x16fe6f(0x33e)]()):this[_0x16fe6f(0x251)]();},SceneManager[_0x497107(0x346)]=function(){const _0x449419=_0x497107,_0x4124fe=this[_0x449419(0x1eb)];_0x4124fe[_0x449419(0x227)]=[],_0x4124fe[_0x449419(0x471)]=0x0,_0x4124fe[_0x449419(0x2c9)]=0x0,_0x4124fe[_0x449419(0x2c6)]=0x0,_0x4124fe[_0x449419(0x3c6)]=0x0,this['setupDiceAutoEffects'](),this['setupDiceBonusEffects']();},VisuMZ[_0x497107(0x384)]['EFFECT_LIST_KEYS']=['GeneralEffects',_0x497107(0x474),'ItemEffects','WeaponEffects','ArmorEffects'],SceneManager[_0x497107(0x462)]=function(){const _0x8a796a=_0x497107,_0x450de8=this[_0x8a796a(0x1eb)],_0x1e9c01=_0x450de8[_0x8a796a(0x28f)]||{},_0x23e2a5=VisuMZ[_0x8a796a(0x384)][_0x8a796a(0x261)][_0x8a796a(0x47f)]();for(const _0x2ada71 of _0x23e2a5){if(!_0x1e9c01[_0x2ada71])continue;const _0x4618f8=_0x1e9c01[_0x2ada71]||[];for(const _0x183151 of _0x4618f8){this[_0x8a796a(0x2e0)](_0x183151)&&this[_0x8a796a(0x26e)](_0x183151);}}if(_0x1e9c01['SkillEffects']){const _0x4f14d6=_0x1e9c01[_0x8a796a(0x312)]||[];for(const _0x367148 of _0x4f14d6){const _0x443527=this[_0x8a796a(0x334)](_0x367148);for(const _0x1f26e1 of _0x443527){this['meetsDiceAutoEffectConditions'](_0x1f26e1)&&this[_0x8a796a(0x26e)](_0x1f26e1);}}}},SceneManager['meetsDiceAutoEffectConditions']=function(_0x3c1b69){const _0x2a4c89=_0x497107;if(_0x3c1b69['VariableReqID']){const _0x53b321=_0x3c1b69[_0x2a4c89(0x40a)]??0x1;if($gameVariables[_0x2a4c89(0x2ad)](_0x3c1b69[_0x2a4c89(0x25e)])<_0x53b321)return![];}if(_0x3c1b69['ItemReqID']){const _0x665f20=$dataItems[_0x3c1b69[_0x2a4c89(0x386)]],_0x5b5960=_0x3c1b69[_0x2a4c89(0x408)]??0x1;if($gameParty[_0x2a4c89(0x395)](_0x665f20)<_0x5b5960)return![];}if(_0x3c1b69['WeaponReqID']){const _0x25a2bf=$dataWeapons[_0x3c1b69[_0x2a4c89(0x3e8)]],_0x1dbde8=_0x3c1b69[_0x2a4c89(0x38f)];if(!$gameParty[_0x2a4c89(0x2f9)](_0x25a2bf,_0x1dbde8))return![];}if(_0x3c1b69[_0x2a4c89(0x428)]){const _0x3e4b0d=$dataArmors[_0x3c1b69[_0x2a4c89(0x428)]],_0x3207da=_0x3c1b69[_0x2a4c89(0x3db)];if(!$gameParty[_0x2a4c89(0x2f9)](_0x3e4b0d,_0x3207da))return![];}if(_0x3c1b69[_0x2a4c89(0x2c1)]){const _0x573a55=$gameActors[_0x2a4c89(0x31a)](_0x3c1b69[_0x2a4c89(0x3ae)]);if(!_0x573a55)return![];if(_0x3c1b69[_0x2a4c89(0x398)]&&_0x573a55[_0x2a4c89(0x39a)]())return![];}if(_0x3c1b69[_0x2a4c89(0x473)]){if(!$gameSwitches['value'](_0x3c1b69[_0x2a4c89(0x473)]))return![];}if(_0x3c1b69['ConditionJS']){if(!_0x3c1b69[_0x2a4c89(0x2d8)]())return![];}return!![];},SceneManager['applyDiceEffect']=function(_0x1e06e4){const _0xb8c891=_0x497107,_0x5d833f=this[_0xb8c891(0x1eb)];_0x5d833f[_0xb8c891(0x227)][_0xb8c891(0x483)](_0x1e06e4),_0x1e06e4[_0xb8c891(0x3fe)]&&(_0x5d833f['advantage']+=_0x1e06e4[_0xb8c891(0x3fe)]),_0x1e06e4[_0xb8c891(0x438)]&&(_0x5d833f['rankAdjust']+=_0x1e06e4[_0xb8c891(0x438)]),_0x1e06e4[_0xb8c891(0x25d)]&&(_0x5d833f[_0xb8c891(0x2c6)]+=_0x1e06e4[_0xb8c891(0x25d)]),_0x1e06e4[_0xb8c891(0x38b)]&&(_0x5d833f[_0xb8c891(0x3c6)]+=_0x1e06e4[_0xb8c891(0x38b)]);},SceneManager['createSkillEffectDupes']=function(_0x27d4d4){const _0xcdaec5=_0x497107,_0x45e9ac=_0x27d4d4[_0xcdaec5(0x2c1)]||_0x27d4d4[_0xcdaec5(0x3e2)]||0x0;if(_0x45e9ac<=0x0)return[];const _0x458a68=$dataSkills[_0x45e9ac];if(!_0x458a68)return[];const _0x2de222=_0x27d4d4['SkillLearnedOnly']??![],_0x2f7472=[],_0x3e833d=_0x27d4d4[_0xcdaec5(0x3b3)];switch(_0x3e833d){case _0xcdaec5(0x1e0):$gameParty[_0xcdaec5(0x1e0)]()&&_0x2f7472[_0xcdaec5(0x483)]($gameParty[_0xcdaec5(0x1e0)]()['actorId']());break;case _0xcdaec5(0x37d):case _0xcdaec5(0x240):case _0xcdaec5(0x403):{let _0x3387fb=[];if(_0x3e833d===_0xcdaec5(0x37d))_0x3387fb=$gameParty[_0xcdaec5(0x3a5)]();else{if(_0x3e833d===_0xcdaec5(0x240))_0x3387fb=$gameParty[_0xcdaec5(0x279)]();else{if(_0x3e833d==='anySpecificActor'){const _0x36d4e3=_0x27d4d4[_0xcdaec5(0x440)]||[];_0x3387fb=_0x36d4e3[_0xcdaec5(0x37a)](_0x54ac9d=>$gameActors[_0xcdaec5(0x31a)](_0x54ac9d))['filter'](_0x552bf3=>$gameParty[_0xcdaec5(0x3a5)]()[_0xcdaec5(0x2b0)](_0x552bf3));}}}const _0x1b9c0d=_0x3387fb['find'](_0x321b0f=>_0x321b0f&&(_0x2de222?_0x321b0f['isLearnedSkill'](_0x45e9ac):_0x321b0f[_0xcdaec5(0x450)](_0x45e9ac))&&_0x321b0f[_0xcdaec5(0x304)](_0x458a68));if(_0x1b9c0d)_0x2f7472[_0xcdaec5(0x483)](_0x1b9c0d['actorId']());}break;case'everyMember':case _0xcdaec5(0x29b):case _0xcdaec5(0x485):{let _0x5788b6=[];if(_0x3e833d===_0xcdaec5(0x294))_0x5788b6=$gameParty['allMembers']();else{if(_0x3e833d==='everyBattleMember')_0x5788b6=$gameParty[_0xcdaec5(0x279)]();else{if(_0x3e833d===_0xcdaec5(0x485)){const _0x29fbd2=_0x27d4d4[_0xcdaec5(0x440)]||[];_0x5788b6=_0x29fbd2[_0xcdaec5(0x37a)](_0x506acc=>$gameActors[_0xcdaec5(0x31a)](_0x506acc))[_0xcdaec5(0x28d)](_0x25d8ac=>$gameParty[_0xcdaec5(0x3a5)]()[_0xcdaec5(0x2b0)](_0x25d8ac));}}}for(const _0x2cbe74 of _0x5788b6){if(_0x2de222&&!_0x2cbe74[_0xcdaec5(0x2f1)](_0x45e9ac))continue;if(!_0x2cbe74['hasSkill'](_0x45e9ac))continue;_0x2f7472[_0xcdaec5(0x483)](_0x2cbe74['actorId']());}}break;}if(_0x2f7472[_0xcdaec5(0x417)]<=0x0)return[];const _0x41f480=[],_0x2d40df=[_0xcdaec5(0x3b3),_0xcdaec5(0x440)];for(const _0x367625 of _0x2f7472){const _0x3f58d4={};_0x3f58d4[_0xcdaec5(0x3ae)]=_0x367625;for(const _0x556438 in _0x27d4d4){if(_0x2d40df['includes'](_0x556438))continue;_0x3f58d4[_0x556438]=_0x27d4d4[_0x556438];}_0x41f480[_0xcdaec5(0x483)](_0x3f58d4);}return _0x41f480;},SceneManager[_0x497107(0x23d)]=function(){const _0x39d46=_0x497107,_0xf46a86=this[_0x39d46(0x1eb)];_0xf46a86[_0x39d46(0x204)]=[];const _0x46eee4=_0xf46a86['BonusMods']||{},_0x150e8d=VisuMZ['DiceRollsRngSeeds']['EFFECT_LIST_KEYS']['clone']();for(const _0x510466 of _0x150e8d){if(!_0x46eee4[_0x510466])continue;const _0x23ccf8=_0x46eee4[_0x510466]||[];for(const _0x520c84 of _0x23ccf8){this['isDiceBonusEffectIncluded'](_0x520c84)&&this['addDiceBonusEffects'](_0x520c84);}}if(_0x46eee4[_0x39d46(0x312)]){const _0x1db9c8=_0x46eee4[_0x39d46(0x312)]||[];for(const _0x1b88e4 of _0x1db9c8){const _0x397ca9=this['createSkillEffectDupes'](_0x1b88e4);for(const _0x2aa1a8 of _0x397ca9){this[_0x39d46(0x40c)](_0x2aa1a8)&&this[_0x39d46(0x3b2)](_0x2aa1a8);}}}},SceneManager[_0x497107(0x40c)]=function(_0x48ecc8){const _0x480a08=_0x497107;if(_0x48ecc8[_0x480a08(0x2c5)]){if($gameVariables[_0x480a08(0x2ad)](_0x48ecc8['VariableCostID'])<=0x0)return![];}if(_0x48ecc8['ItemCostID']){const _0x1164fc=$dataItems[_0x48ecc8[_0x480a08(0x356)]];if($gameParty['numItems'](_0x1164fc)<=0x0)return![];}if(_0x48ecc8['WeaponCostID']){const _0x1837e0=$dataWeapons[_0x48ecc8[_0x480a08(0x24d)]];if($gameParty['numItems'](_0x1837e0)<=0x0)return![];}if(_0x48ecc8[_0x480a08(0x2b4)]){const _0x2e8ec7=$dataArmors[_0x48ecc8[_0x480a08(0x2b4)]];if($gameParty[_0x480a08(0x395)](_0x2e8ec7)<=0x0)return![];}if(_0x48ecc8[_0x480a08(0x3e2)]){const _0x26284a=$gameActors['actor'](_0x48ecc8[_0x480a08(0x3ae)]);if(!_0x26284a)return![];if(_0x48ecc8[_0x480a08(0x398)]&&_0x26284a['isDead']())return![];}if(_0x48ecc8[_0x480a08(0x31c)]){if(!$gameSwitches[_0x480a08(0x2ad)](_0x48ecc8[_0x480a08(0x31c)]))return![];}if(_0x48ecc8[_0x480a08(0x2ec)]){if(!_0x48ecc8[_0x480a08(0x2ec)]())return![];}return!![];},SceneManager[_0x497107(0x3b2)]=function(_0x317914){const _0x1ab999=_0x497107,_0x59b8ae=this[_0x1ab999(0x1eb)];_0x59b8ae[_0x1ab999(0x204)]['push'](_0x317914),_0x317914[_0x1ab999(0x284)]=Math[_0x1ab999(0x407)](Math[_0x1ab999(0x35d)](_0x317914[_0x1ab999(0x284)]||0x1),0x1),_0x317914['CurrentUses']=0x0;},SceneManager[_0x497107(0x251)]=function(){const _0x102830=_0x497107;this[_0x102830(0x343)]=![],this[_0x102830(0x1eb)]=undefined;const _0x534f27=this[_0x102830(0x331)];_0x534f27&&_0x534f27['endDiceRoll']();},SceneManager['isSceneBattle']=function(){const _0x61095=_0x497107;return this[_0x61095(0x331)]&&this[_0x61095(0x331)][_0x61095(0x269)]===Scene_Battle;},Game_Temp[_0x497107(0x26d)][_0x497107(0x3ea)]=function(_0xe1c96d){this['_lastPluginCommandInterpreter']=_0xe1c96d;},Game_Temp[_0x497107(0x26d)][_0x497107(0x33a)]=function(){const _0x53e767=_0x497107;return this[_0x53e767(0x427)];},VisuMZ[_0x497107(0x384)][_0x497107(0x453)]=Game_Interpreter['prototype'][_0x497107(0x1dc)],Game_Interpreter[_0x497107(0x26d)][_0x497107(0x1dc)]=function(_0x4126b3){const _0x20e568=_0x497107;return $gameTemp[_0x20e568(0x3ea)](this),VisuMZ[_0x20e568(0x384)]['Game_Interpreter_PluginCommand'][_0x20e568(0x2c8)](this,_0x4126b3);},VisuMZ[_0x497107(0x384)][_0x497107(0x29f)]=Game_Interpreter['prototype'][_0x497107(0x28c)],Game_Interpreter['prototype'][_0x497107(0x28c)]=function(){const _0x356aa2=_0x497107;if(this['_waitMode']===_0x356aa2(0x2b6)){if(SceneManager[_0x356aa2(0x36b)]())return!![];this[_0x356aa2(0x3fb)]='';}return VisuMZ['DiceRollsRngSeeds'][_0x356aa2(0x29f)][_0x356aa2(0x2c8)](this);},VisuMZ[_0x497107(0x384)]['m']=VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x281)][_0x497107(0x29d)]??0x80000000,VisuMZ[_0x497107(0x384)]['a']=VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x281)][_0x497107(0x433)]??0x41c64e6d,VisuMZ[_0x497107(0x384)]['c']=VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x281)][_0x497107(0x3d3)]??0x3039,VisuMZ[_0x497107(0x384)][_0x497107(0x3d4)]=Game_System[_0x497107(0x26d)][_0x497107(0x2b8)],Game_System[_0x497107(0x26d)][_0x497107(0x2b8)]=function(){const _0x9d11b=_0x497107;VisuMZ[_0x9d11b(0x384)][_0x9d11b(0x3d4)][_0x9d11b(0x2c8)](this),this[_0x9d11b(0x21f)]();},Game_System[_0x497107(0x26d)]['initRandomNumberSeeds']=function(){const _0x108bd9=_0x497107;this[_0x108bd9(0x481)]={},this['_randomNumberSeedUniqueKey']=Math[_0x108bd9(0x355)](0x80000000);},Game_System['prototype'][_0x497107(0x358)]=function(_0xa05190,_0xcc28cd,_0x5d1089){const _0xd1e1a9=_0x497107;this[_0xd1e1a9(0x481)]===undefined&&this[_0xd1e1a9(0x21f)]();const _0x13dbfa=this[_0xd1e1a9(0x47a)](_0xa05190,_0xcc28cd,_0x5d1089);return this[_0xd1e1a9(0x481)][_0x13dbfa]===undefined&&this[_0xd1e1a9(0x2e8)](_0x13dbfa),this[_0xd1e1a9(0x481)][_0x13dbfa];},Game_System[_0x497107(0x26d)]['getRandomNumberSeedUniqueKey']=function(){const _0x5f16e1=_0x497107;return this[_0x5f16e1(0x2f0)]===undefined&&this['initRandomNumberSeeds'](),this['_randomNumberSeedUniqueKey'];},VisuMZ[_0x497107(0x384)][_0x497107(0x262)]=function(_0x3d1917,_0x2ca206){const _0x3846b9=_0x497107;_0x3d1917=String(_0x3d1917),_0x2ca206=String(_0x2ca206);let _0x1a5797='',_0x48d21a=0x0,_0x7abe59=0x0;while(_0x48d21a<_0x3d1917[_0x3846b9(0x417)]||_0x7abe59<_0x2ca206[_0x3846b9(0x417)]){if(_0x48d21a<_0x3d1917['length'])_0x1a5797+=_0x3d1917[_0x48d21a++];if(_0x7abe59<_0x2ca206[_0x3846b9(0x417)])_0x1a5797+=_0x2ca206[_0x7abe59++];}return _0x1a5797;},VisuMZ[_0x497107(0x384)][_0x497107(0x208)]=function(){const _0x395fbd=_0x497107,_0x115b7a=new Date();let _0x21202d=String(_0x115b7a['getDate']())[_0x395fbd(0x2d5)](0x2,'0'),_0x31106a=String(_0x115b7a[_0x395fbd(0x429)]()+0x1)[_0x395fbd(0x2d5)](0x2,'0'),_0x2924f4=_0x115b7a[_0x395fbd(0x338)]();return _0x21202d+'-'+_0x31106a+'-'+_0x2924f4;},Game_System['prototype'][_0x497107(0x47a)]=function(_0x407769,_0x3b24a9,_0x5ac7f6){const _0x269c2d=_0x497107;_0x407769=String(_0x407769);if(_0x3b24a9){const _0x1c407a=VisuMZ[_0x269c2d(0x384)][_0x269c2d(0x208)]();_0x407769=VisuMZ['DiceRollsRngSeeds'][_0x269c2d(0x262)](_0x407769,_0x1c407a);}if(_0x5ac7f6){const _0x5e2275=this['getRandomNumberSeedUniqueKey']();_0x407769=VisuMZ['DiceRollsRngSeeds'][_0x269c2d(0x262)](_0x407769,_0x5e2275);}return _0x407769;},Game_System[_0x497107(0x26d)][_0x497107(0x2e8)]=function(_0x513dae){const _0x2d7d58=_0x497107;_0x513dae=String(_0x513dae);var _0x4503f3=[];const _0x53fe55=_0x513dae[_0x2d7d58(0x417)];for(var _0x316495=0x0;_0x316495<_0x53fe55;_0x316495++){_0x4503f3[_0x2d7d58(0x483)](_0x513dae['charCodeAt'](_0x316495));}let _0x406762=_0x4503f3[_0x2d7d58(0x38a)]('')+0x0;while(_0x406762>VisuMZ['DiceRollsRngSeeds']['m']){_0x406762=Math[_0x2d7d58(0x289)](_0x406762/VisuMZ[_0x2d7d58(0x384)]['m']);}this[_0x2d7d58(0x481)][_0x513dae]=_0x406762%VisuMZ['DiceRollsRngSeeds']['m'];},Game_System['prototype'][_0x497107(0x3d1)]=function(_0x4debd8,_0x5f45ee,_0x59ca79){const _0x336c5e=_0x497107,_0x4921bc=VisuMZ[_0x336c5e(0x384)];let _0x7e16f8=this[_0x336c5e(0x358)](_0x4debd8,_0x5f45ee,_0x59ca79);const _0x1de71f=_0x4921bc['m'];_0x7e16f8=(_0x4921bc['a']*_0x7e16f8+_0x4921bc['c'])%_0x1de71f;const _0x3411f8=this[_0x336c5e(0x47a)](_0x4debd8,_0x5f45ee,_0x59ca79);return this['_randomNumberSeeds'][_0x3411f8]=_0x7e16f8,this['_randomNumberSeeds'][_0x3411f8];},Game_System[_0x497107(0x26d)]['getNextFloatRandomNumberFromSeed']=function(_0x578ca8,_0x2fe649,_0x103228){const _0x44fb8d=VisuMZ['DiceRollsRngSeeds']['m']-0x1;return this['getNextIntRandomNumberFromSeed'](_0x578ca8,_0x2fe649,_0x103228)/_0x44fb8d;},Game_System['prototype'][_0x497107(0x222)]=function(_0x316ec1,_0x2fba36,_0x18341e,_0x29ea26,_0x3bd2ca){const _0x3b79f6=_0x497107,_0xeb094a=_0x2fba36-_0x316ec1+0x1,_0x449b32=this[_0x3b79f6(0x1df)](_0x18341e,_0x29ea26,_0x3bd2ca),_0x205031=Math[_0x3b79f6(0x289)](_0x449b32*_0xeb094a);return _0x316ec1+_0x205031;},Game_System[_0x497107(0x26d)]['resetRandomNumberSeed']=function(_0x5da53a,_0x4b857d,_0x11acc7){const _0xe42fc1=_0x497107;if(_0x5da53a===undefined)return;const _0x5b3670=this[_0xe42fc1(0x47a)](_0x5da53a,_0x4b857d,_0x11acc7);this[_0xe42fc1(0x2e8)](_0x5b3670);},VisuMZ['DiceRollsRngSeeds'][_0x497107(0x35a)]=Game_Message[_0x497107(0x26d)]['setupShuffleChoices'],Game_Message['prototype'][_0x497107(0x46a)]=function(){const _0x3b42c6=_0x497107;this[_0x3b42c6(0x414)](),VisuMZ[_0x3b42c6(0x384)][_0x3b42c6(0x35a)][_0x3b42c6(0x2c8)](this),this[_0x3b42c6(0x1f9)]();},Game_Message[_0x497107(0x26d)][_0x497107(0x1f9)]=function(){const _0x21841b=_0x497107;this[_0x21841b(0x22c)]='',this[_0x21841b(0x345)]=![],this['_rngSaveUnique']=![];},Game_Message[_0x497107(0x26d)][_0x497107(0x414)]=function(){const _0x4778b2=_0x497107;this[_0x4778b2(0x1f9)]();const _0x21a4a2=VisuMZ[_0x4778b2(0x384)]['RegExp'],_0x1504bd=this[_0x4778b2(0x3bd)]['length'];for(let _0x1cecee=0x0;_0x1cecee<_0x1504bd;_0x1cecee++){let _0x1729a9=this[_0x4778b2(0x3bd)][_0x1cecee];_0x1729a9[_0x4778b2(0x31d)](_0x21a4a2[_0x4778b2(0x210)])&&(this[_0x4778b2(0x22c)]=String(RegExp['$1']),_0x1729a9=_0x1729a9[_0x4778b2(0x258)](_0x21a4a2['rngSeed'],'')),_0x1729a9[_0x4778b2(0x31d)](_0x21a4a2['dailySeed'])&&(this[_0x4778b2(0x22c)]=String(RegExp['$1']),this[_0x4778b2(0x345)]=!![],_0x1729a9=_0x1729a9['replace'](_0x21a4a2[_0x4778b2(0x1ec)],'')),_0x1729a9[_0x4778b2(0x31d)](_0x21a4a2[_0x4778b2(0x1f6)])&&(this['_rngSeed']=String(RegExp['$1']),this[_0x4778b2(0x435)]=!![],_0x1729a9=_0x1729a9['replace'](_0x21a4a2[_0x4778b2(0x1f6)],'')),_0x1729a9['match'](_0x21a4a2[_0x4778b2(0x300)])&&(this['_rngSeed']=String(RegExp['$1']),this[_0x4778b2(0x345)]=!![],this[_0x4778b2(0x435)]=!![],_0x1729a9=_0x1729a9[_0x4778b2(0x258)](_0x21a4a2[_0x4778b2(0x300)],'')),this[_0x4778b2(0x3bd)][_0x1cecee]=_0x1729a9[_0x4778b2(0x2fc)]();}};VisuMZ[_0x497107(0x3c0)]&&(VisuMZ['DiceRollsRngSeeds'][_0x497107(0x449)]=VisuMZ[_0x497107(0x3c0)][_0x497107(0x3ad)],VisuMZ[_0x497107(0x3c0)][_0x497107(0x3ad)]=function(_0x5efe9a){const _0x432c84=_0x497107;return $gameMessage&&$gameMessage[_0x432c84(0x22c)]!==''?VisuMZ[_0x432c84(0x3c0)][_0x432c84(0x299)][_0x432c84(0x2c8)](this,_0x5efe9a):VisuMZ[_0x432c84(0x384)][_0x432c84(0x449)][_0x432c84(0x2c8)](this,_0x5efe9a);},VisuMZ['MessageCore'][_0x497107(0x299)]=function(_0x226c19){const _0x231fad=_0x497107,_0x503da5=$gameMessage[_0x231fad(0x22c)]||'',_0x4f2dfc=$gameMessage[_0x231fad(0x345)]||![],_0x5bb041=$gameMessage[_0x231fad(0x435)]||![];var _0x2b7153,_0x6dd68,_0x1213f6;for(_0x1213f6=_0x226c19[_0x231fad(0x417)]-0x1;_0x1213f6>0x0;_0x1213f6--){const _0x381cf2=$rngSeed(_0x503da5,_0x4f2dfc,_0x5bb041);_0x2b7153=Math['floor'](_0x381cf2*(_0x1213f6+0x1)),_0x6dd68=_0x226c19[_0x1213f6],_0x226c19[_0x1213f6]=_0x226c19[_0x2b7153],_0x226c19[_0x2b7153]=_0x6dd68;}return _0x226c19;});;Game_Temp[_0x497107(0x26d)]['clearRngAspects']=function(){const _0x4f765a=_0x497107;this[_0x4f765a(0x22c)]='',this['_rngDaily']=![],this[_0x4f765a(0x435)]=![];},VisuMZ[_0x497107(0x384)][_0x497107(0x220)]=Game_Action[_0x497107(0x26d)][_0x497107(0x33f)],Game_Action[_0x497107(0x26d)]['apply']=function(_0x375082){const _0x399a9d=_0x497107;$gameTemp[_0x399a9d(0x1f9)](),this[_0x399a9d(0x28a)](_0x375082),VisuMZ[_0x399a9d(0x384)]['Game_Action_apply']['call'](this,_0x375082),$gameTemp[_0x399a9d(0x1f9)]();},Game_Action[_0x497107(0x26d)][_0x497107(0x28a)]=function(_0x1aeba3){const _0x580efc=_0x497107;if(!this[_0x580efc(0x3a8)]())return;if(!_0x1aeba3)return;let _0x24495d=VisuMZ['DiceRollsRngSeeds'][_0x580efc(0x293)][_0x580efc(0x281)][_0x580efc(0x387)]??'';if(_0x24495d['toLowerCase']()['trim']()===_0x580efc(0x2f8))_0x24495d='';let _0x498a47=![],_0xf2e57b=VisuMZ[_0x580efc(0x384)]['Settings'][_0x580efc(0x281)][_0x580efc(0x387)]?!![]:![];const _0xabd44c=VisuMZ['DiceRollsRngSeeds'][_0x580efc(0x492)],_0x6b26c0=this[_0x580efc(0x3a8)]()[_0x580efc(0x341)]||'';if(_0x6b26c0[_0x580efc(0x31d)](_0xabd44c[_0x580efc(0x43b)]))_0x24495d='',_0x498a47=![],_0xf2e57b=![];else{if(_0x6b26c0[_0x580efc(0x31d)](_0xabd44c[_0x580efc(0x210)]))_0x24495d=String(RegExp['$1'])[_0x580efc(0x2fc)](),_0x498a47=![],_0xf2e57b=![];else{if(_0x6b26c0[_0x580efc(0x31d)](_0xabd44c['dailySeed']))_0x24495d=String(RegExp['$1'])[_0x580efc(0x2fc)](),_0x498a47=!![],_0xf2e57b=![];else{if(_0x6b26c0[_0x580efc(0x31d)](_0xabd44c['uniqueSeed']))_0x24495d=String(RegExp['$1'])[_0x580efc(0x2fc)](),_0x498a47=![],_0xf2e57b=!![];else _0x6b26c0[_0x580efc(0x31d)](_0xabd44c['dailyUniqueSeed'])&&(_0x24495d=String(RegExp['$1'])[_0x580efc(0x2fc)](),_0x498a47=!![],_0xf2e57b=!![]);}}}_0x24495d[_0x580efc(0x470)]()[_0x580efc(0x2fc)]()===_0x580efc(0x37f)&&(_0x24495d=this[_0x580efc(0x3a8)]()['name']||'unknownName'),_0x24495d&&(this[_0x580efc(0x469)]()['isActor']()?_0x24495d+=_0x580efc(0x1fa)['format'](this[_0x580efc(0x469)]()[_0x580efc(0x38c)]()):_0x24495d+=_0x580efc(0x372)[_0x580efc(0x329)](this['subject']()[_0x580efc(0x46b)](),this['subject']()[_0x580efc(0x45d)]()),_0x24495d+=_0x580efc(0x265),_0x1aeba3[_0x580efc(0x43a)]()?_0x24495d+=_0x580efc(0x1fa)[_0x580efc(0x329)](_0x1aeba3[_0x580efc(0x38c)]()):_0x24495d+=_0x580efc(0x372)[_0x580efc(0x329)](_0x1aeba3[_0x580efc(0x46b)](),_0x1aeba3['index']()),this[_0x580efc(0x301)]()?_0x24495d+=_0x580efc(0x47d)[_0x580efc(0x329)](this[_0x580efc(0x3a8)]()['id']):_0x24495d+=_0x580efc(0x30b)[_0x580efc(0x329)](this[_0x580efc(0x3a8)]()['id']),$gameTemp[_0x580efc(0x22c)]=_0x24495d,$gameTemp['_rngDaily']=_0x498a47,$gameTemp['_rngSaveUnique']=_0xf2e57b);},VisuMZ[_0x497107(0x384)]['Math_random']=Math[_0x497107(0x1f3)],Math[_0x497107(0x1f3)]=function(){const _0x197a6d=_0x497107;return $gameTemp&&$gameTemp['_rngSeed']?VisuMZ[_0x197a6d(0x384)][_0x197a6d(0x21d)]():VisuMZ[_0x197a6d(0x384)][_0x197a6d(0x439)]['call'](this);},VisuMZ[_0x497107(0x384)][_0x497107(0x21d)]=function(){const _0x3742a7=_0x497107,_0x3206bd=$gameTemp[_0x3742a7(0x22c)]||'',_0x241988=$gameTemp[_0x3742a7(0x345)]||![],_0x38da8a=$gameTemp[_0x3742a7(0x435)]||![];return $rngSeed(_0x3206bd,_0x241988,_0x38da8a);},Scene_Message[_0x497107(0x3f0)]={'choiceBgType':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)]['Window']['Command_BgType']??0x0,'titleBgType':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x32e)][_0x497107(0x20f)]??0x0,'advantageBgType':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x32e)][_0x497107(0x41c)]??0x0,'rankBgType':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x32e)]['DataRank_BgType']??0x0,'modifierBgType':VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)]['Window'][_0x497107(0x268)]??0x0,'subtitleBgType':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Window'][_0x497107(0x230)]??0x0,'effectsBgType':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x32e)][_0x497107(0x31b)]??0x0,'bonusBgType':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Window'][_0x497107(0x491)]??0x0},Scene_Message[_0x497107(0x26d)][_0x497107(0x33e)]=function(){const _0x8aef3d=_0x497107;this[_0x8aef3d(0x24f)]();},Scene_Message[_0x497107(0x26d)][_0x497107(0x251)]=function(){const _0x338a2d=_0x497107;this[_0x338a2d(0x263)]();},Scene_Message['prototype'][_0x497107(0x24f)]=function(){const _0x5b30d5=_0x497107;this[_0x5b30d5(0x48b)](),this[_0x5b30d5(0x494)](),this[_0x5b30d5(0x2bc)](),this['createDiceRollAdvantageWindow'](),this[_0x5b30d5(0x490)](),this[_0x5b30d5(0x32c)](),this[_0x5b30d5(0x277)](),this[_0x5b30d5(0x2de)](),this[_0x5b30d5(0x20a)]();},Scene_Message[_0x497107(0x26d)][_0x497107(0x48b)]=function(){const _0x436d20=_0x497107,_0x5eac7a=this[_0x436d20(0x2b2)](),_0x15815c=new Window_DiceSprite(_0x5eac7a);this['addChild'](_0x15815c),this['_diceRoll_SpriteWindow']=_0x15815c,_0x15815c['setBackgroundType'](0x2);},Scene_Message[_0x497107(0x26d)][_0x497107(0x2b2)]=function(){const _0xc041df=_0x497107;if(VisuMZ[_0xc041df(0x384)][_0xc041df(0x293)][_0xc041df(0x32e)][_0xc041df(0x20c)])return VisuMZ[_0xc041df(0x384)]['Settings'][_0xc041df(0x32e)]['Container_RectJS']['call'](this);const _0x467d3c=Math[_0xc041df(0x2c2)](Math[_0xc041df(0x212)](Graphics[_0xc041df(0x39b)]*0.9),0x330),_0x50fa48=Math[_0xc041df(0x212)]((Graphics[_0xc041df(0x39b)]-_0x467d3c)/0x2),_0x3381d4=this[_0xc041df(0x3e3)](0x2,![])+this['calcWindowHeight'](0x1,![]),_0x499c98=Graphics[_0xc041df(0x465)]-_0x3381d4-this[_0xc041df(0x3e3)](0x4,!![])-this[_0xc041df(0x3e3)](0x1,![]);return new Rectangle(_0x50fa48,_0x3381d4,_0x467d3c,_0x499c98);},Scene_Message[_0x497107(0x26d)][_0x497107(0x494)]=function(){const _0x202e11=_0x497107,_0x1c2563=this[_0x202e11(0x392)](),_0x53150d=new Window_DiceChoice(_0x1c2563);this['addChild'](_0x53150d),_0x53150d['setHandler'](_0x202e11(0x319),this[_0x202e11(0x3cb)][_0x202e11(0x400)](this)),_0x53150d[_0x202e11(0x308)](_0x202e11(0x227),this[_0x202e11(0x30d)][_0x202e11(0x400)](this)),_0x53150d[_0x202e11(0x308)](_0x202e11(0x264),this['commandDiceBonus'][_0x202e11(0x400)](this)),this['_diceRoll_ChoiceWindow']=_0x53150d,_0x53150d[_0x202e11(0x29e)](Scene_Message[_0x202e11(0x3f0)]['choiceBgType']);},Scene_Message[_0x497107(0x26d)][_0x497107(0x392)]=function(){const _0x56d644=_0x497107;if(VisuMZ[_0x56d644(0x384)][_0x56d644(0x293)][_0x56d644(0x32e)][_0x56d644(0x363)])return VisuMZ[_0x56d644(0x384)]['Settings'][_0x56d644(0x32e)][_0x56d644(0x363)][_0x56d644(0x2c8)](this);const _0x16277a=Math[_0x56d644(0x2c2)](Math[_0x56d644(0x212)](Graphics[_0x56d644(0x39b)]*0.5),0x168),_0xf933be=this[_0x56d644(0x3e3)](this[_0x56d644(0x2c7)](),!![]),_0xff61ac=Math['round']((Graphics['width']-_0x16277a)/0x2),_0x498bfd=Graphics[_0x56d644(0x465)]-this['calcWindowHeight'](0x4,!![])+Math[_0x56d644(0x212)]((this[_0x56d644(0x3e3)](0x4,!![])-this[_0x56d644(0x3e3)](0x3,!![]))/0x2);return new Rectangle(_0xff61ac,_0x498bfd,_0x16277a,_0xf933be);},Scene_Message[_0x497107(0x26d)][_0x497107(0x2c7)]=function(){const _0x20fe8b=_0x497107;return VisuMZ['DiceRollsRngSeeds'][_0x20fe8b(0x3ab)]();},Scene_Message['prototype'][_0x497107(0x2bc)]=function(){const _0x754d2f=_0x497107,_0x2c5e26=SceneManager[_0x754d2f(0x1eb)]||{},_0x4e0cbb=_0x2c5e26[_0x754d2f(0x3c4)]||'';if(!_0x4e0cbb)return;const _0x500116=this['diceRollTitleWindowRect'](),_0x485f41=new Window_DiceText(_0x500116);this[_0x754d2f(0x487)](_0x485f41),_0x485f41[_0x754d2f(0x2ac)](_0x4e0cbb),this[_0x754d2f(0x324)]=_0x485f41,_0x485f41[_0x754d2f(0x29e)](Scene_Message[_0x754d2f(0x3f0)]['titleBgType']);},Scene_Message[_0x497107(0x26d)][_0x497107(0x286)]=function(){const _0x5826e3=_0x497107;if(VisuMZ['DiceRollsRngSeeds']['Settings'][_0x5826e3(0x32e)][_0x5826e3(0x3b4)])return VisuMZ[_0x5826e3(0x384)][_0x5826e3(0x293)][_0x5826e3(0x32e)][_0x5826e3(0x3b4)][_0x5826e3(0x2c8)](this);const _0x42bd33=Math[_0x5826e3(0x2c2)](Math['round'](Graphics[_0x5826e3(0x39b)]*0.8),0x2cc),_0x33dbcc=this[_0x5826e3(0x3e3)](0x1,![]),_0x91cad5=Math[_0x5826e3(0x212)]((Graphics[_0x5826e3(0x39b)]-_0x42bd33)/0x2),_0x474b7b=this[_0x5826e3(0x3e3)](0x2,![])-_0x33dbcc;return new Rectangle(_0x91cad5,_0x474b7b,_0x42bd33,_0x33dbcc);},Scene_Message[_0x497107(0x26d)][_0x497107(0x434)]=function(){const _0x4f4ff0=_0x497107,_0x4b0f91=this[_0x4f4ff0(0x3a0)](),_0x18e1d1=new Window_DiceData(_0x4b0f91);_0x18e1d1[_0x4f4ff0(0x285)](_0x4f4ff0(0x471)),this[_0x4f4ff0(0x487)](_0x18e1d1),this[_0x4f4ff0(0x2ea)]=_0x18e1d1,_0x18e1d1[_0x4f4ff0(0x29e)](Scene_Message['DICE_ROLL']['advantageBgType']);},Scene_Message[_0x497107(0x26d)]['diceRollAdvantageWindowRect']=function(){const _0x16ac5e=_0x497107;if(VisuMZ['DiceRollsRngSeeds'][_0x16ac5e(0x293)][_0x16ac5e(0x32e)][_0x16ac5e(0x32d)])return VisuMZ[_0x16ac5e(0x384)][_0x16ac5e(0x293)][_0x16ac5e(0x32e)][_0x16ac5e(0x32d)][_0x16ac5e(0x2c8)](this);const _0x843c8c=Math['min'](Math[_0x16ac5e(0x212)](Graphics[_0x16ac5e(0x39b)]*0.9),0x330),_0x35e20e=Math[_0x16ac5e(0x289)](_0x843c8c/0x3),_0x13b5d1=this['calcWindowHeight'](0x1,![]),_0x44beee=Math['round']((Graphics[_0x16ac5e(0x39b)]-_0x843c8c)/0x2),_0x567af4=this[_0x16ac5e(0x3e3)](0x2,![]);return new Rectangle(_0x44beee,_0x567af4,_0x35e20e,_0x13b5d1);},Scene_Message[_0x497107(0x26d)][_0x497107(0x490)]=function(){const _0xd5f192=_0x497107,_0x2603b3=this['diceRollRankWindowRect'](),_0x2403cc=new Window_DiceData(_0x2603b3);_0x2403cc[_0xd5f192(0x285)](_0xd5f192(0x34d)),this[_0xd5f192(0x487)](_0x2403cc),this[_0xd5f192(0x404)]=_0x2403cc,_0x2403cc[_0xd5f192(0x29e)](Scene_Message[_0xd5f192(0x3f0)][_0xd5f192(0x243)]);},Scene_Message['prototype'][_0x497107(0x297)]=function(){const _0x5a4552=_0x497107;if(VisuMZ[_0x5a4552(0x384)]['Settings']['Window']['DataRank_RectJS'])return VisuMZ[_0x5a4552(0x384)]['Settings'][_0x5a4552(0x32e)][_0x5a4552(0x3fc)][_0x5a4552(0x2c8)](this);const _0x2510dc=Math[_0x5a4552(0x2c2)](Math['round'](Graphics[_0x5a4552(0x39b)]*0.9),0x330),_0x53e452=Math[_0x5a4552(0x35d)](_0x2510dc/0x3),_0x2cd0de=this[_0x5a4552(0x3e3)](0x1,![]),_0x281614=Math[_0x5a4552(0x212)]((Graphics[_0x5a4552(0x39b)]-_0x53e452)/0x2),_0x33ed86=this[_0x5a4552(0x3e3)](0x2,![]);return new Rectangle(_0x281614,_0x33ed86,_0x53e452,_0x2cd0de);},Scene_Message[_0x497107(0x26d)][_0x497107(0x32c)]=function(){const _0x1a3565=_0x497107,_0x16ce42=this[_0x1a3565(0x2e9)](),_0x588402=new Window_DiceData(_0x16ce42);_0x588402[_0x1a3565(0x285)](_0x1a3565(0x249)),this[_0x1a3565(0x487)](_0x588402),this[_0x1a3565(0x422)]=_0x588402,_0x588402[_0x1a3565(0x29e)](Scene_Message[_0x1a3565(0x3f0)][_0x1a3565(0x1f5)]);},Scene_Message['prototype']['diceRollModifierWindowRect']=function(){const _0x5e8f23=_0x497107;if(VisuMZ[_0x5e8f23(0x384)][_0x5e8f23(0x293)][_0x5e8f23(0x32e)]['DataMod_RectJS'])return VisuMZ['DiceRollsRngSeeds'][_0x5e8f23(0x293)][_0x5e8f23(0x32e)][_0x5e8f23(0x3f7)][_0x5e8f23(0x2c8)](this);const _0x290fdc=Math[_0x5e8f23(0x2c2)](Math[_0x5e8f23(0x212)](Graphics[_0x5e8f23(0x39b)]*0.9),0x330),_0x213b06=Math[_0x5e8f23(0x289)](_0x290fdc/0x3),_0x51bfa2=this[_0x5e8f23(0x3e3)](0x1,![]),_0x438ee2=Math[_0x5e8f23(0x212)]((Graphics[_0x5e8f23(0x39b)]+_0x213b06)/0x2),_0x192245=this[_0x5e8f23(0x3e3)](0x2,![]);return new Rectangle(_0x438ee2,_0x192245,_0x213b06,_0x51bfa2);},Scene_Message['prototype'][_0x497107(0x277)]=function(){const _0x929cf9=_0x497107,_0x4436de=TextManager[_0x929cf9(0x276)]();if(!_0x4436de)return;const _0x368aef=this[_0x929cf9(0x2dd)](),_0x3d6d2a=new Window_DiceText(_0x368aef);this[_0x929cf9(0x487)](_0x3d6d2a),_0x3d6d2a[_0x929cf9(0x2ac)](_0x4436de),this['_diceRoll_SubtitleWindow']=_0x3d6d2a,_0x3d6d2a[_0x929cf9(0x29e)](Scene_Message[_0x929cf9(0x3f0)][_0x929cf9(0x20b)]);},Scene_Message[_0x497107(0x26d)][_0x497107(0x2dd)]=function(){const _0x3492f0=_0x497107;if(VisuMZ['DiceRollsRngSeeds'][_0x3492f0(0x293)][_0x3492f0(0x32e)][_0x3492f0(0x2c4)])return VisuMZ['DiceRollsRngSeeds']['Settings']['Window']['Subtitle_RectJS'][_0x3492f0(0x2c8)](this);const _0x4a1493=Math[_0x3492f0(0x2c2)](Math['round'](Graphics[_0x3492f0(0x39b)]*0.8),0x2cc),_0xed71f4=this['calcWindowHeight'](0x1,![]),_0x33555d=Math[_0x3492f0(0x212)]((Graphics[_0x3492f0(0x39b)]-_0x4a1493)/0x2),_0x276e2d=Graphics['height']-this['calcWindowHeight'](0x4,!![])-_0xed71f4;return new Rectangle(_0x33555d,_0x276e2d,_0x4a1493,_0xed71f4);},Scene_Message[_0x497107(0x26d)][_0x497107(0x2de)]=function(){const _0x55d64d=_0x497107,_0x439fa8=this[_0x55d64d(0x42e)](),_0x1991fb=new Window_DiceEffectsList(_0x439fa8);this[_0x55d64d(0x487)](_0x1991fb),_0x1991fb['setHandler'](_0x55d64d(0x2ae),this[_0x55d64d(0x3da)][_0x55d64d(0x400)](this)),this[_0x55d64d(0x3f3)]=_0x1991fb,_0x1991fb[_0x55d64d(0x29e)](Scene_Message['DICE_ROLL']['effectsBgType']);},Scene_Message[_0x497107(0x26d)][_0x497107(0x20a)]=function(){const _0x14402b=_0x497107,_0x27e40d=this['diceRollEffectsWindowRect'](),_0x32e4d3=new Window_DiceBonusList(_0x27e40d);this['addChild'](_0x32e4d3),_0x32e4d3[_0x14402b(0x308)](_0x14402b(0x2ae),this[_0x14402b(0x2d3)]['bind'](this)),_0x32e4d3[_0x14402b(0x308)](_0x14402b(0x234),this[_0x14402b(0x2fb)]['bind'](this)),this[_0x14402b(0x38e)]=_0x32e4d3,_0x32e4d3['setBackgroundType'](Scene_Message[_0x14402b(0x3f0)][_0x14402b(0x38d)]);},Scene_Message[_0x497107(0x26d)][_0x497107(0x42e)]=function(){const _0x378ee3=_0x497107;if(VisuMZ['DiceRollsRngSeeds'][_0x378ee3(0x293)][_0x378ee3(0x32e)][_0x378ee3(0x274)])return VisuMZ['DiceRollsRngSeeds'][_0x378ee3(0x293)]['Window'][_0x378ee3(0x274)][_0x378ee3(0x2c8)](this);const _0x446dcc=Math[_0x378ee3(0x2c2)](Graphics[_0x378ee3(0x39b)],0x3f8),_0x5c6bd4=this[_0x378ee3(0x3e3)](0x4,!![]),_0x310c47=Math[_0x378ee3(0x212)]((Graphics[_0x378ee3(0x39b)]-_0x446dcc)/0x2),_0x3ea424=Graphics[_0x378ee3(0x465)]-_0x5c6bd4;return new Rectangle(_0x310c47,_0x3ea424,_0x446dcc,_0x5c6bd4);},Scene_Message['prototype']['startClosingDiceWindows']=function(){const _0x23c65c=_0x497107,_0x202ec5=[_0x23c65c(0x324),_0x23c65c(0x2ea),_0x23c65c(0x404),_0x23c65c(0x422),_0x23c65c(0x228)];for(const _0x153298 of _0x202ec5){if(!this[_0x153298])continue;this[_0x153298][_0x23c65c(0x34c)]();}},Scene_Message[_0x497107(0x26d)]['removeAllDiceRollWindows']=function(){const _0x45995d=_0x497107,_0x5bb2f3=[_0x45995d(0x309),_0x45995d(0x3a1),_0x45995d(0x324),'_diceRoll_AdvantageWindow',_0x45995d(0x404),'_diceRoll_ModifierWindow',_0x45995d(0x228),_0x45995d(0x3f3),'_diceRoll_BonusWindow'];for(const _0x4482c1 of _0x5bb2f3){if(!this[_0x4482c1])continue;this[_0x45995d(0x420)](this[_0x4482c1]),this[_0x4482c1]=undefined;}},Scene_Message[_0x497107(0x26d)]['commandDiceRoll']=function(){const _0x3af487=_0x497107;this['_diceRoll_SpriteWindow']['startDiceRoll'](),this['_diceRoll_ChoiceWindow'][_0x3af487(0x34c)]();},Scene_Message[_0x497107(0x26d)][_0x497107(0x30d)]=function(){const _0x322982=_0x497107;this[_0x322982(0x3a1)][_0x322982(0x34c)](),this['_diceRoll_EffectsWindow'][_0x322982(0x45e)](),this[_0x322982(0x3f3)][_0x322982(0x2dc)](),this[_0x322982(0x3f3)][_0x322982(0x2a5)]();},Scene_Message['prototype']['onDiceRollEffectCancel']=function(){const _0x59de03=_0x497107;this[_0x59de03(0x3f3)][_0x59de03(0x34c)](),this['_diceRoll_EffectsWindow'][_0x59de03(0x310)](),this[_0x59de03(0x3a1)][_0x59de03(0x45e)](),this[_0x59de03(0x3a1)][_0x59de03(0x2dc)]();},Scene_Message['prototype'][_0x497107(0x36d)]=function(){const _0x45a709=_0x497107;this['_diceRoll_ChoiceWindow'][_0x45a709(0x34c)](),this[_0x45a709(0x38e)][_0x45a709(0x45e)](),this[_0x45a709(0x38e)]['activate'](),this['_diceRoll_BonusWindow'][_0x45a709(0x2a5)]();},Scene_Message[_0x497107(0x26d)]['onDiceRollBonusCancel']=function(){const _0x565e72=_0x497107;this['_diceRoll_BonusWindow'][_0x565e72(0x34c)](),this['_diceRoll_BonusWindow']['deactivate'](),this[_0x565e72(0x3a1)][_0x565e72(0x45e)](),this['_diceRoll_ChoiceWindow'][_0x565e72(0x2dc)](),this['_diceRoll_ChoiceWindow'][_0x565e72(0x2a5)]();},Scene_Message['prototype'][_0x497107(0x2fb)]=function(){const _0x122fd2=_0x497107,_0x55fffd=this[_0x122fd2(0x38e)][_0x122fd2(0x3e1)]();_0x55fffd&&this['useCurrentDiceBonusEffect'](_0x55fffd),this[_0x122fd2(0x38e)][_0x122fd2(0x2dc)](),this['_diceRoll_BonusWindow'][_0x122fd2(0x2a5)]();},Scene_Message[_0x497107(0x26d)][_0x497107(0x25b)]=function(_0x549c53){const _0x215cfd=_0x497107;SceneManager[_0x215cfd(0x26e)](_0x549c53);_0x549c53['AnimationID']&&$gameTemp[_0x215cfd(0x41a)]([$gamePlayer],_0x549c53[_0x215cfd(0x335)]);if(_0x549c53[_0x215cfd(0x2c5)]){const _0x440367=$gameVariables[_0x215cfd(0x2ad)](_0x549c53['VariableCostID']),_0x41e9cf=Math[_0x215cfd(0x407)](_0x549c53[_0x215cfd(0x1ee)]||0x1,0x1),_0x5de135=_0x440367-_0x41e9cf;$gameVariables['setValue'](_0x549c53[_0x215cfd(0x2c5)],_0x5de135);}if(_0x549c53[_0x215cfd(0x356)]){const _0x49cee2=$dataItems[_0x549c53[_0x215cfd(0x356)]],_0x443202=Math['max'](_0x549c53['ItemCostValue']||0x1,0x1);$gameParty[_0x215cfd(0x337)](_0x49cee2,_0x443202,![]);}if(_0x549c53[_0x215cfd(0x24d)]){const _0x6dbacd=$dataWeapons[_0x549c53[_0x215cfd(0x24d)]],_0x26d74d=Math[_0x215cfd(0x407)](_0x549c53[_0x215cfd(0x442)]||0x1,0x1);$gameParty[_0x215cfd(0x337)](_0x6dbacd,_0x26d74d,![]);}if(_0x549c53[_0x215cfd(0x2b4)]){const _0x56c2ee=$dataArmors[_0x549c53['ArmorCostID']],_0x116876=Math[_0x215cfd(0x407)](_0x549c53['ArmorCostValue']||0x1,0x1);$gameParty[_0x215cfd(0x337)](_0x56c2ee,_0x116876,![]);}if(_0x549c53[_0x215cfd(0x3e2)]){const _0x525b08=$gameActors[_0x215cfd(0x31a)](_0x549c53[_0x215cfd(0x3ae)]);if(_0x525b08){const _0x168e79=$dataSkills[_0x549c53['SkillCostID']];_0x525b08['paySkillCost'](_0x168e79);}}_0x549c53['MaxUses']&&(_0x549c53[_0x215cfd(0x44d)]=_0x549c53[_0x215cfd(0x44d)]||0x0,_0x549c53[_0x215cfd(0x44d)]+=0x1),_0x549c53[_0x215cfd(0x3bb)]&&_0x549c53[_0x215cfd(0x3bb)]();};function Sprite_DiceCheck(){const _0x323e6f=_0x497107;this[_0x323e6f(0x2b8)](...arguments);}Sprite_DiceCheck[_0x497107(0x26d)]=Object[_0x497107(0x2cb)](Sprite[_0x497107(0x26d)]),Sprite_DiceCheck['prototype'][_0x497107(0x269)]=Sprite_DiceCheck,Sprite_DiceCheck[_0x497107(0x46d)]={'d4':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)]['D4']??{},'d6':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)]['D6']??{},'d8':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)]['D8']??{},'d10':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Dice'][_0x497107(0x446)]??{},'d12':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x35c)][_0x497107(0x238)]??{},'d20':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x35c)][_0x497107(0x464)]??{},'offsetX':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x376)]??0x0,'offsetY':VisuMZ['DiceRollsRngSeeds']['Settings'][_0x497107(0x35c)][_0x497107(0x2a7)]??0x0,'fadeInDuration':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x29c)]??0x1e,'fadeOutDuration':VisuMZ['DiceRollsRngSeeds']['Settings'][_0x497107(0x35c)][_0x497107(0x257)]??0x14,'finalizeDelay':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x3ff)]??0x3c,'rollDuration':VisuMZ['DiceRollsRngSeeds']['Settings'][_0x497107(0x35c)][_0x497107(0x218)]??0x3c,'rollDelay':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x35c)]['rollDelay']??0xa,'rollHeight':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Dice'][_0x497107(0x45c)]??0xa0,'rotateSpeed':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Dice'][_0x497107(0x242)]??0xf,'moveDuration':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Dice'][_0x497107(0x482)]??0x14,'scaleDuration':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x22f)]??0x28,'numberDuration':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x23a)]??0x4,'maxNumberDuration':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)]['maxNumberDuration']??0x50,'numberColorShift':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x35c)]['numberColorShift']??!![],'rollModDelay':VisuMZ[_0x497107(0x384)]['Settings'][_0x497107(0x35c)][_0x497107(0x35f)]??0x3c},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x2b8)]=function(){const _0xd785cf=_0x497107;Sprite['prototype'][_0xd785cf(0x2b8)][_0xd785cf(0x2c8)](this),this['initMembers'](),this[_0xd785cf(0x3a6)](),this[_0xd785cf(0x3ce)](),this[_0xd785cf(0x318)]();},Sprite_DiceCheck[_0x497107(0x26d)]['initMembers']=function(){const _0x598d0a=_0x497107;this[_0x598d0a(0x34f)]['x']=0.5,this['anchor']['y']=0.5,this['opacity']=0x0,this[_0x598d0a(0x3ef)]=_0x598d0a(0x246)[_0x598d0a(0x329)](VisuMZ[_0x598d0a(0x384)][_0x598d0a(0x3a4)]()),this[_0x598d0a(0x35e)]=0x0,this['_fadeTarget']=0xff,this['_finalizeDuration']=0x0,this[_0x598d0a(0x365)]=0x0,this[_0x598d0a(0x44f)]=0x0,this['_delayRollDuration']=0x0,this[_0x598d0a(0x39e)]=0x0,this[_0x598d0a(0x412)]=0x0,this[_0x598d0a(0x29a)]=0x0,this[_0x598d0a(0x27c)]=0x0,this['_scaleDuration']=0x0,this[_0x598d0a(0x23b)]=0x0;},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x26f)]=function(){const _0xb16d1f=_0x497107,_0x17aef4=this['_settingsKey']||_0xb16d1f(0x2ee);return Sprite_DiceCheck[_0xb16d1f(0x46d)][_0x17aef4];},Sprite_DiceCheck['prototype'][_0x497107(0x458)]=function(){const _0xa1bd53=_0x497107,_0x3dc095=SceneManager['_diceRollSettings']||{};if(_0x3dc095[_0xa1bd53(0x298)]){const _0x29f625=_0xa1bd53(0x1dd)[_0xa1bd53(0x329)](this['_settingsKey']||_0xa1bd53(0x2ee));if(_0x3dc095[_0xa1bd53(0x298)][_0x29f625])return _0x3dc095[_0xa1bd53(0x298)][_0x29f625];}const _0x8b4847=this[_0xa1bd53(0x26f)]();return _0x8b4847['filenames']||[];},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x478)]=function(){const _0xbb2801=_0x497107,_0x59830f=SceneManager[_0xbb2801(0x1eb)]||{};if(_0x59830f[_0xbb2801(0x298)]){if(_0x59830f[_0xbb2801(0x298)][_0xbb2801(0x369)]&&_0x59830f[_0xbb2801(0x298)][_0xbb2801(0x369)][_0xbb2801(0x417)]>0x0)return _0x59830f['DiceSeed'][_0xbb2801(0x369)];}const _0x320e6c=this[_0xbb2801(0x26f)]();return _0x320e6c['colors']||[0x8,0xa,0x15,0x11,0x1d,0x17,0x1f,0x1b];},Sprite_DiceCheck['prototype']['createBitmap']=function(){const _0x5f47cc=_0x497107,_0x1a2eb5=this[_0x5f47cc(0x458)]();if(_0x1a2eb5['length']>0x0)this[_0x5f47cc(0x460)]=ImageManager['loadDicePicture'](_0x1a2eb5);else{const _0x127e3d=this['_settingsKey'],_0x452250=this[_0x5f47cc(0x478)]();this[_0x5f47cc(0x460)]=ImageManager[_0x5f47cc(0x266)](_0x127e3d,_0x452250);}},Sprite_DiceCheck['prototype'][_0x497107(0x3ce)]=function(){const _0x1c5c0f=_0x497107,_0x2e27cb=new Sprite();_0x2e27cb[_0x1c5c0f(0x460)]=new Bitmap(0x64,0x64),this['addChild'](_0x2e27cb);const _0x479fa7=this[_0x1c5c0f(0x26f)]();_0x2e27cb['x']=_0x479fa7[_0x1c5c0f(0x2d4)]||0x0,_0x2e27cb['y']=_0x479fa7[_0x1c5c0f(0x225)]||0x0,_0x2e27cb['anchor']['x']=0.5,_0x2e27cb['anchor']['y']=0.5,this[_0x1c5c0f(0x1e9)]=_0x2e27cb,this[_0x1c5c0f(0x457)]=0x0,this[_0x1c5c0f(0x2da)]='?',this['_numberColor']=0x0,this[_0x1c5c0f(0x1fb)]();},Sprite_DiceCheck['prototype'][_0x497107(0x318)]=function(){const _0x24a309=_0x497107;this['_blurFilter']=new PIXI[(_0x24a309(0x33b))][(_0x24a309(0x36e))](),this[_0x24a309(0x28b)][_0x24a309(0x273)]=0x0,this[_0x24a309(0x33b)]=this['filters']||[],this['filters'][_0x24a309(0x483)](this[_0x24a309(0x28b)]);},Sprite_DiceCheck[_0x497107(0x26d)]['setBaseXy']=function(_0x19748a,_0x2be009){const _0x341412=_0x497107;this[_0x341412(0x3c9)]=_0x19748a,this[_0x341412(0x32a)]=_0x2be009;{const _0x5bf02a=Sprite_DiceCheck['SETTINGS'];this[_0x341412(0x3c9)]+=_0x5bf02a['offsetX'],this[_0x341412(0x32a)]+=_0x5bf02a[_0x341412(0x431)];}{const _0x126da3=this['diceSettings']();this[_0x341412(0x3c9)]+=_0x126da3[_0x341412(0x480)],this[_0x341412(0x32a)]+=_0x126da3[_0x341412(0x436)];}this['x']=this[_0x341412(0x3c9)],this['y']=this[_0x341412(0x32a)],this[_0x341412(0x44e)]();},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x2f4)]=function(_0x5b5581){const _0x25bdb8=_0x497107;this[_0x25bdb8(0x24c)]=_0x5b5581,this[_0x25bdb8(0x201)]['x']=this['scale']['y']=_0x5b5581;},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x211)]=function(_0x2b36b6){const _0x318d6b=_0x497107,_0x327674=Sprite_DiceCheck[_0x318d6b(0x46d)];this[_0x318d6b(0x365)]=_0x327674[_0x318d6b(0x218)],this[_0x318d6b(0x44f)]=this[_0x318d6b(0x365)],this[_0x318d6b(0x443)]=(_0x2b36b6||0x0)*(_0x327674[_0x318d6b(0x33c)]||0x0);},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x2d6)]=function(){const _0x58b5ec=_0x497107;Sprite[_0x58b5ec(0x26d)][_0x58b5ec(0x2d6)][_0x58b5ec(0x2c8)](this),this[_0x58b5ec(0x21b)](),this[_0x58b5ec(0x2f2)](),this[_0x58b5ec(0x3d9)](),this[_0x58b5ec(0x360)](),this[_0x58b5ec(0x259)](),this[_0x58b5ec(0x1ef)](),this[_0x58b5ec(0x394)]();},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x3b1)]=function(){const _0x345f70=_0x497107;if(this['isRolling']())return!![];if(this[_0x345f70(0x253)]())return!![];if(this[_0x345f70(0x215)]())return!![];if(this['isChangingScale']())return!![];return![];},Sprite_DiceCheck[_0x497107(0x26d)]['updateRoll']=function(){const _0x33ae75=_0x497107;if(this['_delayRollDuration']>0x0)return this[_0x33ae75(0x443)]--;if(this['_rollDuration']<=0x0)return;const _0x286fde=this[_0x33ae75(0x365)],_0x3e7527=this[_0x33ae75(0x44f)],_0x11a628=_0x3e7527-_0x286fde,_0x57ecae=_0x3e7527/0x2,_0x77c421=Sprite_DiceCheck['SETTINGS'][_0x33ae75(0x45c)]||0x1,_0x4df721=-_0x77c421/Math[_0x33ae75(0x378)](_0x57ecae,0x2),_0x28e9cd=-(_0x4df721*Math[_0x33ae75(0x378)](_0x11a628-_0x57ecae,0x2)+_0x77c421);this['y']=this['_baseY']+_0x28e9cd,this[_0x33ae75(0x1fc)](),_0x286fde===_0x3e7527&&SoundManager['playDiceThrow'](),this['_rollDuration']--,this[_0x33ae75(0x365)]<=0x0&&(this['y']=this[_0x33ae75(0x32a)],this[_0x33ae75(0x1fc)](!![]));},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x260)]=function(){return this['_delayRollDuration']>0x0||this['_rollDuration']>0x0;},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x2f2)]=function(){const _0x406f74=_0x497107;if(this['y']===this[_0x406f74(0x32a)]){if(this[_0x406f74(0x393)]!==0x0)this[_0x406f74(0x393)]=0x0;return;}const _0x1fcbf4=Sprite_DiceCheck['SETTINGS'][_0x406f74(0x242)]||0x0;this['angle']+=_0x1fcbf4;},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x3d9)]=function(){const _0xcbc3d7=_0x497107;if(this['_moveDuration']<=0x0)return;const _0x23407f=this[_0xcbc3d7(0x39e)];this['x']=(this['x']*(_0x23407f-0x1)+this[_0xcbc3d7(0x412)])/_0x23407f,this[_0xcbc3d7(0x39e)]--,this[_0xcbc3d7(0x39e)]<=0x0&&(this['x']=this[_0xcbc3d7(0x412)]);},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x3d8)]=function(_0x3fb5e9){const _0x9b8c81=_0x497107,_0x127738=Sprite_DiceCheck[_0x9b8c81(0x46d)],_0x4dff32=this['diceSettings']();_0x3fb5e9=_0x3fb5e9||0x0,_0x3fb5e9+=_0x127738[_0x9b8c81(0x41e)]||0x0,_0x3fb5e9+=_0x4dff32[_0x9b8c81(0x480)]||0x0;if(this['x']===_0x3fb5e9)return;this[_0x9b8c81(0x412)]=_0x3fb5e9,this['_moveDuration']=_0x127738[_0x9b8c81(0x482)]||0x1;},Sprite_DiceCheck[_0x497107(0x26d)]['isMoving']=function(){const _0x537fa9=_0x497107;return this[_0x537fa9(0x39e)]>0x0;},Sprite_DiceCheck['prototype'][_0x497107(0x360)]=function(){const _0x48d393=_0x497107;if(this['isMoving']())return;if(this['_numberShiftDuration']<=0x0)return;const _0x5e8004=this[_0x48d393(0x29a)];this[_0x48d393(0x457)]=(this[_0x48d393(0x457)]*(_0x5e8004-0x1)+this[_0x48d393(0x27c)])/_0x5e8004,this[_0x48d393(0x29a)]--;this[_0x48d393(0x29a)]<=0x0&&(this[_0x48d393(0x457)]=this['_numberShiftTarget']);const _0x5bfe4f=this[_0x48d393(0x2da)];this[_0x48d393(0x2da)]=String(Math['round'](this['_numberValue'])),this['drawNumber'](),_0x5bfe4f!==this[_0x48d393(0x2da)]&&SoundManager['playDiceIncrement']();},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x1fc)]=function(_0x221d5f){const _0x5adc57=_0x497107,_0xfc6737=SceneManager['_diceRollSettings']||{},_0x127599=_0xfc6737['DiceSeed']||{},_0x10fee4=VisuMZ['DiceRollsRngSeeds'][_0x5adc57(0x3a4)]();if(_0x221d5f&&_0x127599[_0x5adc57(0x332)]&&_0x127599[_0x5adc57(0x332)]!==_0x5adc57(0x2f8)){const _0x1354e7=_0x127599[_0x5adc57(0x332)],_0x374bc4=_0x127599[_0x5adc57(0x3df)],_0x158d10=_0x127599['ApplyUnique'];this[_0x5adc57(0x457)]=$gameSystem[_0x5adc57(0x222)](0x1,_0x10fee4,_0x1354e7,_0x374bc4,_0x158d10);}else this[_0x5adc57(0x457)]=Math[_0x5adc57(0x355)](_0x10fee4)+0x1;this[_0x5adc57(0x2da)]=String(Math[_0x5adc57(0x212)](this['_numberValue'])),this[_0x5adc57(0x1fb)]();},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x1fb)]=function(){const _0x367f5d=_0x497107,_0x43e17c=this[_0x367f5d(0x1e9)],_0x599b6c=_0x43e17c[_0x367f5d(0x460)],_0x3c122e=this['diceSettings']();_0x599b6c['clear'](),_0x599b6c[_0x367f5d(0x23f)]=$gameSystem[_0x367f5d(0x244)](),_0x599b6c[_0x367f5d(0x411)]=_0x3c122e['fontSize']??$gameSystem[_0x367f5d(0x447)]()+0x4,_0x599b6c[_0x367f5d(0x3de)]='rgba(0,\x200,\x200,\x200.9)',_0x599b6c['outlineWidth']=_0x3c122e[_0x367f5d(0x2d7)]??0x4,_0x599b6c['textColor']=ColorManager[_0x367f5d(0x3d5)](this[_0x367f5d(0x21e)]),_0x599b6c[_0x367f5d(0x3ba)](this['_numberText'],0x0,0x0,0x64,0x64,_0x367f5d(0x344));},Sprite_DiceCheck[_0x497107(0x26d)]['setNumberColor']=function(_0x2aabb5){const _0x11daef=_0x497107;if(!Sprite_DiceCheck[_0x11daef(0x46d)][_0x11daef(0x48e)])return;this[_0x11daef(0x21e)]=_0x2aabb5,this[_0x11daef(0x1fb)]();},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x3c8)]=function(_0x3a5731,_0x194d3b){const _0x597b64=_0x497107;_0x194d3b&&(this['_numberValue']=0x1,this[_0x597b64(0x2da)]='1');if(this[_0x597b64(0x271)]()===_0x3a5731)return;const _0xfd0269=Sprite_DiceCheck[_0x597b64(0x46d)],_0x34a3bd=Math['abs'](this[_0x597b64(0x271)]()-_0x3a5731),_0x5c5e20=_0xfd0269['numberDuration']||0x1,_0x18932f=_0xfd0269['maxNumberDuration']||0x1;this[_0x597b64(0x27c)]=_0x3a5731,this[_0x597b64(0x29a)]=(_0x5c5e20*_0x34a3bd)[_0x597b64(0x250)](0x1,_0x18932f);},Sprite_DiceCheck['prototype']['number']=function(){const _0xed717=_0x497107;return Math[_0xed717(0x212)](this['_numberValue']);},Sprite_DiceCheck['prototype'][_0x497107(0x215)]=function(){return this['_numberShiftDuration']>0x0;},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x259)]=function(){const _0xc03f5d=_0x497107;if(this['_finalizeDuration']>0x0)return this['_finalizeDuration']--;if(this[_0xc03f5d(0x35e)]<=0x0)return;const _0x242799=this['_fadeDuration'];this[_0xc03f5d(0x44b)]=(this[_0xc03f5d(0x44b)]*(_0x242799-0x1)+this[_0xc03f5d(0x3f2)])/_0x242799,this[_0xc03f5d(0x35e)]--,this['_fadeDuration']<=0x0&&(this[_0xc03f5d(0x44b)]=this[_0xc03f5d(0x3f2)]);},Sprite_DiceCheck['prototype'][_0x497107(0x44e)]=function(){const _0xaa36b8=_0x497107,_0x33b788=Sprite_DiceCheck[_0xaa36b8(0x46d)];this['_fadeDuration']=_0x33b788[_0xaa36b8(0x29c)],this[_0xaa36b8(0x3f2)]=0xff;},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x3a9)]=function(_0x5b559c){const _0x39a458=_0x497107,_0x31e80e=Sprite_DiceCheck[_0x39a458(0x46d)];this[_0x39a458(0x35e)]=_0x31e80e[_0x39a458(0x257)],this[_0x39a458(0x3f2)]=0x0,_0x5b559c&&(this['_finalizeDuration']=_0x31e80e[_0x39a458(0x3ff)]||0x1);},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x1ef)]=function(){const _0x4d1b93=_0x497107;if(this[_0x4d1b93(0x253)]())return;if(this[_0x4d1b93(0x333)]<=0x0)return;const _0x1a0b82=this[_0x4d1b93(0x333)];this['scale']['x']=(this[_0x4d1b93(0x201)]['x']*(_0x1a0b82-0x1)+this[_0x4d1b93(0x23b)])/_0x1a0b82,this[_0x4d1b93(0x201)]['y']=(this[_0x4d1b93(0x201)]['y']*(_0x1a0b82-0x1)+this[_0x4d1b93(0x23b)])/_0x1a0b82,this[_0x4d1b93(0x333)]--,this['_scaleDuration']<=0x0&&(this['scale']['x']=this[_0x4d1b93(0x23b)],this[_0x4d1b93(0x201)]['y']=this[_0x4d1b93(0x23b)]);},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x42b)]=function(_0x29c839){const _0x4c5bba=_0x497107;if(this[_0x4c5bba(0x201)]['x']===_0x29c839&&this[_0x4c5bba(0x201)]['y']===_0x29c839)return;this[_0x4c5bba(0x23b)]=_0x29c839,this[_0x4c5bba(0x333)]=Sprite_DiceCheck[_0x4c5bba(0x46d)][_0x4c5bba(0x22f)]||0x1;},Sprite_DiceCheck[_0x497107(0x26d)][_0x497107(0x410)]=function(){const _0x3b389b=_0x497107;return this[_0x3b389b(0x333)]>0x0;},Sprite_DiceCheck[_0x497107(0x26d)]['updateBlurEffect']=function(){const _0x459f9d=_0x497107;if(!this[_0x459f9d(0x28b)])return;if(this['y']===this[_0x459f9d(0x32a)]){if(this['_blurFilter']['blur']!==0x0)this[_0x459f9d(0x28b)][_0x459f9d(0x273)]=0x0;return;}this[_0x459f9d(0x28b)][_0x459f9d(0x273)]=Math[_0x459f9d(0x2c2)](this['_blurFilter'][_0x459f9d(0x273)]+0.2,0x2);};function Window_DiceText(){const _0x8514b3=_0x497107;this[_0x8514b3(0x2b8)](...arguments);}Window_DiceText['prototype']=Object['create'](Window_Base[_0x497107(0x26d)]),Window_DiceText[_0x497107(0x26d)][_0x497107(0x269)]=Window_DiceText,Window_DiceText[_0x497107(0x26d)][_0x497107(0x2b8)]=function(_0x55cb7f){const _0x272e18=_0x497107;Window_Base[_0x272e18(0x26d)][_0x272e18(0x2b8)]['call'](this,_0x55cb7f),this[_0x272e18(0x45b)]=0x0,this[_0x272e18(0x45e)]();},Window_DiceText['prototype']['drawCenteredText']=function(_0x5094e8,_0x23631e,_0x13422e){const _0x11f07f=_0x497107;_0x23631e=_0x23631e||0x0,_0x13422e=_0x13422e||0x0,this['contents'][_0x11f07f(0x3e9)]();const _0x24f190=this[_0x11f07f(0x330)](_0x5094e8),_0x281552=Math[_0x11f07f(0x212)]((this['innerWidth']-_0x24f190[_0x11f07f(0x39b)])/0x2)+_0x23631e,_0x21add7=Math[_0x11f07f(0x212)]((this['innerHeight']-_0x24f190[_0x11f07f(0x465)])/0x2)+_0x13422e;this['drawTextEx'](_0x5094e8,_0x281552,_0x21add7);};function Window_DiceData(){this['initialize'](...arguments);}Window_DiceData[_0x497107(0x26d)]=Object['create'](Window_Base[_0x497107(0x26d)]),Window_DiceData[_0x497107(0x26d)][_0x497107(0x269)]=Window_DiceData,Window_DiceData[_0x497107(0x26d)]['initialize']=function(_0x4904c3){const _0xe725d5=_0x497107;Window_Base[_0xe725d5(0x26d)][_0xe725d5(0x2b8)][_0xe725d5(0x2c8)](this,_0x4904c3),this[_0xe725d5(0x45b)]=0x0,this['open']();},Window_DiceData[_0x497107(0x26d)][_0x497107(0x26f)]=function(){const _0x53e604=_0x497107;return SceneManager[_0x53e604(0x1eb)]||{};},Window_DiceData[_0x497107(0x26d)][_0x497107(0x285)]=function(_0x5b3c17){const _0x1b15b4=_0x497107;this[_0x1b15b4(0x364)]=_0x5b3c17,this[_0x1b15b4(0x2a5)]();},Window_DiceData[_0x497107(0x26d)]['update']=function(){const _0x36a3c5=_0x497107;Window_Base['prototype'][_0x36a3c5(0x2d6)][_0x36a3c5(0x2c8)](this),this[_0x36a3c5(0x229)]()&&(this[_0x36a3c5(0x472)](),this[_0x36a3c5(0x2a5)]());},Window_DiceData[_0x497107(0x26d)][_0x497107(0x229)]=function(){const _0x5eeafa=_0x497107,_0x54f561=this[_0x5eeafa(0x26f)]();switch(this[_0x5eeafa(0x364)]){case _0x5eeafa(0x471):return this[_0x5eeafa(0x3b6)]!==(_0x54f561[_0x5eeafa(0x471)]||0x0);case _0x5eeafa(0x34d):return this['_lastRank']!==(_0x54f561[_0x5eeafa(0x2c9)]||0x0);case _0x5eeafa(0x249):return this[_0x5eeafa(0x3be)]!==(_0x54f561[_0x5eeafa(0x2c6)]||0x0)||this[_0x5eeafa(0x26a)]!==(_0x54f561[_0x5eeafa(0x3c6)]||0x0);}return![];},Window_DiceData['prototype'][_0x497107(0x472)]=function(){const _0x1a1efb=_0x497107,_0x1701c9=this[_0x1a1efb(0x26f)]();switch(this['_dataType']){case _0x1a1efb(0x471):this[_0x1a1efb(0x3b6)]=_0x1701c9['advantage']||0x0;break;case _0x1a1efb(0x34d):this[_0x1a1efb(0x3c5)]=_0x1701c9[_0x1a1efb(0x2c9)]||0x0;break;case _0x1a1efb(0x249):this[_0x1a1efb(0x3be)]=_0x1701c9[_0x1a1efb(0x2c6)]||0x0,this[_0x1a1efb(0x26a)]=_0x1701c9['modRand']||0x0;break;}},Window_DiceData[_0x497107(0x26d)][_0x497107(0x2a5)]=function(){const _0x5bbc89=_0x497107;this[_0x5bbc89(0x3d6)][_0x5bbc89(0x3e9)](),this['cacheData'](),this[_0x5bbc89(0x426)](),this[_0x5bbc89(0x3d0)]();},Window_DiceData[_0x497107(0x26d)][_0x497107(0x426)]=function(){const _0x482cd6=_0x497107,_0x115e02=TextManager['DICE_ROLL'][_0x482cd6(0x27a)];let _0xb0cb42=this[_0x482cd6(0x364)];if(_0xb0cb42===_0x482cd6(0x471)){const _0x4c9b84=this[_0x482cd6(0x26f)]();if(_0x4c9b84[_0x482cd6(0x46e)]===_0x482cd6(0x43c)||_0x4c9b84['advantage']===0x0)_0xb0cb42=_0x482cd6(0x3cc);else{if(_0x4c9b84['advantage']>0x0)_0xb0cb42=_0x482cd6(0x471);else _0x4c9b84[_0x482cd6(0x471)]<0x0&&(_0xb0cb42='disadvantage');}}const _0x3def08=_0x115e02[_0xb0cb42];this[_0x482cd6(0x479)](_0x3def08,this[_0x482cd6(0x21c)](),0x0);},Window_DiceData[_0x497107(0x26d)][_0x497107(0x3d0)]=function(){const _0x18a631=_0x497107,_0x4880d2=this['diceSettings'](),_0x5a2b8c=TextManager['DICE_ROLL'][_0x18a631(0x368)][_0x18a631(0x47e)];let _0x19d934='';switch(this[_0x18a631(0x364)]){case _0x18a631(0x471):if(_0x4880d2[_0x18a631(0x46e)]==='rollValue')_0x19d934=VisuMZ['DiceRollsRngSeeds'][_0x18a631(0x24e)]();else{_0x19d934=Math[_0x18a631(0x3a7)](this[_0x18a631(0x3b6)])[_0x18a631(0x250)](0x0,VisuMZ[_0x18a631(0x384)]['MAX_DICE']-0x1);if(_0x5a2b8c)_0x19d934='+'+_0x19d934;}break;case'rank':const _0x24d2b8=VisuMZ[_0x18a631(0x384)]['CurrentDiceRank'](),_0x26031a=_0x18a631(0x352)[_0x18a631(0x329)](_0x24d2b8);_0x19d934=TextManager[_0x18a631(0x3f0)][_0x18a631(0x27a)][_0x26031a];break;case'modifier':const _0x1e5f51=this[_0x18a631(0x3be)]||0x0,_0xffc695=_0x1e5f51+(this[_0x18a631(0x26a)]||0x0),_0x1887d8=Math[_0x18a631(0x2c2)](_0x1e5f51,_0xffc695),_0x698311=Math[_0x18a631(0x407)](_0x1e5f51,_0xffc695);_0x19d934=String(_0x1887d8||0x0);Math[_0x18a631(0x3a7)](_0x1887d8)>Math[_0x18a631(0x3a7)](_0x698311)&&(_0x19d934=String(_0x698311||0x0));if(_0x5a2b8c&&_0x1887d8>=0x0)_0x19d934='+'+_0x19d934;_0x698311!==_0x1887d8&&(Math[_0x18a631(0x3a7)](_0x1887d8)>Math['abs'](_0x698311)?_0x19d934='%1~%2'[_0x18a631(0x329)](_0x19d934,_0x1887d8):_0x19d934=_0x18a631(0x37e)['format'](_0x19d934,_0x698311));break;}_0x19d934=String(_0x19d934);const _0x2bdb37=this[_0x18a631(0x330)](_0x19d934)[_0x18a631(0x39b)],_0x36f019=this[_0x18a631(0x302)]-_0x2bdb37-this[_0x18a631(0x21c)]();this[_0x18a631(0x479)](_0x19d934,_0x36f019,0x0);};function Window_DiceSprite(){const _0x3f681c=_0x497107;this[_0x3f681c(0x2b8)](...arguments);}Window_DiceSprite['prototype']=Object[_0x497107(0x2cb)](Window_Base['prototype']),Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x269)]=Window_DiceSprite,Window_DiceSprite[_0x497107(0x26d)]['initialize']=function(_0x175a52){const _0x443302=_0x497107;Window_Base[_0x443302(0x26d)]['initialize'][_0x443302(0x2c8)](this,_0x175a52),this[_0x443302(0x361)](),this['createSpriteContainers']();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x361)]=function(){const _0x1af113=_0x497107;this[_0x1af113(0x2cf)]=_0x1af113(0x37b),this['_finalizeDuration']=0x0,this[_0x1af113(0x3cf)]();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x3cf)]=function(){const _0x520268=_0x497107;this[_0x520268(0x419)]=VisuMZ[_0x520268(0x384)][_0x520268(0x3a4)]();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x399)]=function(){const _0x4004c4=_0x497107;this[_0x4004c4(0x3c1)]=new Sprite(),this[_0x4004c4(0x231)](this[_0x4004c4(0x3c1)]),this['_subContainer']=new Sprite(),this[_0x4004c4(0x231)](this[_0x4004c4(0x2ab)]),this['_mainContainer']['x']=this[_0x4004c4(0x2ab)]['x']=0x0,this[_0x4004c4(0x3c1)]['y']=this['_subContainer']['y']=this[_0x4004c4(0x465)]-0x48-this[_0x4004c4(0x2e1)]();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x23e)]=function(){const _0x13508c=_0x497107;if(this[_0x13508c(0x3c1)]&&this[_0x13508c(0x3c1)][_0x13508c(0x32b)][_0x13508c(0x417)]>0x0)return!![];if(this['_subContainer']&&this[_0x13508c(0x2ab)][_0x13508c(0x32b)]['length']>0x0)return!![];return![];},Window_DiceSprite[_0x497107(0x26d)]['update']=function(){const _0x1daed3=_0x497107;Window_Base[_0x1daed3(0x26d)][_0x1daed3(0x2d6)][_0x1daed3(0x2c8)](this);if(!this[_0x1daed3(0x3c1)])return;if(!this[_0x1daed3(0x2ab)])return;this[_0x1daed3(0x3d2)](),this['needsNewDiceBatch']()&&(this[_0x1daed3(0x20e)](),this[_0x1daed3(0x3cf)](),this[_0x1daed3(0x45a)]()),this[_0x1daed3(0x42c)]();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x22d)]=function(){const _0xe3a8bb=_0x497107,_0x4e2b68=this[_0xe3a8bb(0x3c1)][_0xe3a8bb(0x32b)];return _0x4e2b68[_0xe3a8bb(0x3bf)](_0x5f5c01=>_0x5f5c01[_0xe3a8bb(0x3b1)]());},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x3d2)]=function(){const _0x585f2a=_0x497107;if([_0x585f2a(0x37b),'animation','final'][_0x585f2a(0x2b0)](this[_0x585f2a(0x2cf)]))return;if(this[_0x585f2a(0x22d)]())return;switch(this[_0x585f2a(0x2cf)]){case _0x585f2a(0x396):this[_0x585f2a(0x39d)]();break;case'modifiers':this['startModifiersPhase']();break;case _0x585f2a(0x390):this[_0x585f2a(0x373)]();break;case _0x585f2a(0x292):this['startEndingPhase']();break;}},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x211)]=function(){const _0x37d1e4=_0x497107;this[_0x37d1e4(0x2cf)]='rolling';const _0xdf0b7d=this[_0x37d1e4(0x3c1)][_0x37d1e4(0x32b)][_0x37d1e4(0x47f)]();VisuMZ['DiceRollsRngSeeds'][_0x37d1e4(0x3ad)](_0xdf0b7d);let _0x556cf4=0x0;for(const _0x52d3ff of _0xdf0b7d){_0x52d3ff[_0x37d1e4(0x211)](_0x556cf4),_0x556cf4++;}},VisuMZ['DiceRollsRngSeeds'][_0x497107(0x3ad)]=function(_0xf1f1bd){const _0x24ba50=_0x497107;var _0x1ede4d,_0x78fb9,_0x2ab597;for(_0x2ab597=_0xf1f1bd[_0x24ba50(0x417)]-0x1;_0x2ab597>0x0;_0x2ab597--){_0x1ede4d=Math['floor'](Math[_0x24ba50(0x1f3)]()*(_0x2ab597+0x1)),_0x78fb9=_0xf1f1bd[_0x2ab597],_0xf1f1bd[_0x2ab597]=_0xf1f1bd[_0x1ede4d],_0xf1f1bd[_0x1ede4d]=_0x78fb9;}return _0xf1f1bd;},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x39d)]=function(){const _0x21c757=_0x497107;this[_0x21c757(0x2b5)](),this['endRollingPhase']();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x2b5)]=function(){const _0x39acb5=_0x497107,_0x573b8e=SceneManager['_diceRollSettings']||{},_0x22f5a0=_0x573b8e[_0x39acb5(0x437)]||'',_0x4b0b6e=Math[_0x39acb5(0x212)](this[_0x39acb5(0x39b)]/0x2),_0x433947=this[_0x39acb5(0x3c1)][_0x39acb5(0x32b)],_0x1bbe09=_0x433947[_0x39acb5(0x37a)](_0x128ef9=>_0x128ef9[_0x39acb5(0x271)]());let _0xf28735=null;if([_0x39acb5(0x247),_0x39acb5(0x46f)][_0x39acb5(0x2b0)](_0x22f5a0)){_0xf28735=_0x433947[Math[_0x39acb5(0x355)](_0x433947[_0x39acb5(0x417)])];for(const _0x344535 of _0x433947){_0x344535['startMoveToX'](_0x4b0b6e);if(_0x344535===_0xf28735){let _0x44bdab=_0x1bbe09[_0x39acb5(0x30c)]((_0x59acb6,_0x17b9b7)=>_0x59acb6+_0x17b9b7,0x0);_0x22f5a0===_0x39acb5(0x46f)&&(_0x44bdab=Math[_0x39acb5(0x212)](_0x44bdab/_0x1bbe09['length'])),_0x344535[_0x39acb5(0x3c8)](_0x44bdab,!![]);}else _0x344535[_0x39acb5(0x3a9)]();}}else{if(['highest',_0x39acb5(0x359)][_0x39acb5(0x2b0)](_0x22f5a0)){const _0x39aefb=_0x22f5a0===_0x39acb5(0x2bd)?Math[_0x39acb5(0x407)](..._0x1bbe09):Math[_0x39acb5(0x2c2)](..._0x1bbe09),_0x40ac84=_0x1bbe09['indexOf'](_0x39aefb);_0xf28735=_0x433947[_0x40ac84];}else{if(_0x573b8e[_0x39acb5(0x46e)]===_0x39acb5(0x28e)){const _0x542c12=_0x573b8e[_0x39acb5(0x471)]>=0x0;let _0x53710b=0x0;[_0x39acb5(0x205),'aboveEqualTarget'][_0x39acb5(0x2b0)](_0x22f5a0)?_0x53710b=_0x542c12?Math[_0x39acb5(0x407)](..._0x1bbe09):Math[_0x39acb5(0x2c2)](..._0x1bbe09):_0x53710b=_0x542c12?Math[_0x39acb5(0x2c2)](..._0x1bbe09):Math[_0x39acb5(0x407)](..._0x1bbe09);if(this[_0x39acb5(0x31f)]()){const _0xe7f5d3=VisuMZ[_0x39acb5(0x384)]['CurrentDiceSides']();if(_0x53710b===0x1)this[_0x39acb5(0x489)]=!![];else _0x53710b===_0xe7f5d3&&(this[_0x39acb5(0x489)]=!![]);}const _0x12e407=_0x1bbe09['indexOf'](_0x53710b);_0xf28735=_0x433947[_0x12e407];}}}_0xf28735&&(_0xf28735['startMoveToX'](_0x4b0b6e),_0xf28735[_0x39acb5(0x42b)](0x1),this['moveSpriteToSubContainerExcept'](_0xf28735));},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x207)]=function(){const _0x901256=_0x497107;this[_0x901256(0x2cf)]=_0x901256(0x2c6),this['_rollingDelay']=0x0;if(this[_0x901256(0x489)])return;const _0x53423a=SceneManager[_0x901256(0x1eb)]||{};if(_0x53423a[_0x901256(0x2c6)]===0x0&&_0x53423a[_0x901256(0x3c6)]===0x0)return;this[_0x901256(0x3ac)]+=Sprite_DiceCheck['SETTINGS'][_0x901256(0x35f)]||0x1;},Window_DiceSprite['prototype'][_0x497107(0x2cd)]=function(){const _0x5c8374=_0x497107;if(this[_0x5c8374(0x3ac)]>0x0)return this[_0x5c8374(0x3ac)]--;this[_0x5c8374(0x3b9)](),this[_0x5c8374(0x283)]();},Window_DiceSprite[_0x497107(0x26d)]['processModifiersPhase']=function(){const _0xd1d245=_0x497107,_0x456af3=SceneManager[_0xd1d245(0x1eb)]||{},_0x774156=_0x456af3['ResultType']||'',_0x5181f6=this[_0xd1d245(0x3c1)][_0xd1d245(0x32b)][0x0],_0x20e1f7=TextManager[_0xd1d245(0x3f0)][_0xd1d245(0x369)];if(this[_0xd1d245(0x489)]){const _0xa47f95=SceneManager[_0xd1d245(0x331)][_0xd1d245(0x228)];if(_0x5181f6[_0xd1d245(0x271)]()===0x1){[_0xd1d245(0x205),_0xd1d245(0x1e7)][_0xd1d245(0x2b0)](_0x774156)?(_0x5181f6[_0xd1d245(0x2a3)](_0x20e1f7[_0xd1d245(0x2bb)]),_0xa47f95&&_0xa47f95[_0xd1d245(0x2ac)](TextManager[_0xd1d245(0x3f0)][_0xd1d245(0x381)]['criticalFailure'])):(_0x5181f6[_0xd1d245(0x2a3)](_0x20e1f7[_0xd1d245(0x2e4)]),_0xa47f95&&_0xa47f95[_0xd1d245(0x2ac)](TextManager[_0xd1d245(0x3f0)][_0xd1d245(0x381)][_0xd1d245(0x217)]));return;}else{if(_0x5181f6[_0xd1d245(0x271)]()===VisuMZ[_0xd1d245(0x384)]['CurrentDiceSides']()){[_0xd1d245(0x205),_0xd1d245(0x1e7)]['includes'](_0x774156)?(_0x5181f6[_0xd1d245(0x2a3)](_0x20e1f7[_0xd1d245(0x2e4)]),_0xa47f95&&_0xa47f95[_0xd1d245(0x2ac)](TextManager[_0xd1d245(0x3f0)][_0xd1d245(0x381)][_0xd1d245(0x217)])):(_0x5181f6[_0xd1d245(0x2a3)](_0x20e1f7[_0xd1d245(0x2bb)]),_0xa47f95&&_0xa47f95['drawCenteredText'](TextManager[_0xd1d245(0x3f0)][_0xd1d245(0x381)]['criticalFailure']));return;}}}const _0x160eb4=_0x456af3[_0xd1d245(0x2c6)]||0x0,_0x2e48dd=_0x456af3['modRand']||0x0,_0x23c93b=_0x5181f6[_0xd1d245(0x271)]()+_0x160eb4,_0x4bea38=_0x23c93b+_0x2e48dd;let _0x51b955=_0x23c93b;if(_0x23c93b!==_0x4bea38){const _0x343211=_0x456af3[_0xd1d245(0x298)]||{};if(_0x343211['Seed']&&_0x343211[_0xd1d245(0x332)]!==_0xd1d245(0x2f8)){const _0x4670a3=_0x343211[_0xd1d245(0x332)],_0x4f93bd=_0x343211[_0xd1d245(0x3df)],_0x5099fe=_0x343211[_0xd1d245(0x2ce)];_0x51b955=$gameSystem[_0xd1d245(0x222)](_0x23c93b,_0x4bea38,_0x4670a3,_0x4f93bd,_0x5099fe);}else _0x51b955=_0x23c93b+Math['randomInt'](_0x2e48dd+0x1);}if(_0x51b955===_0x5181f6['number']())return;_0x5181f6['startNumberShift'](_0x51b955),_0x51b955>_0x5181f6[_0xd1d245(0x271)]()?_0x5181f6[_0xd1d245(0x2a3)](_0x20e1f7[_0xd1d245(0x2e4)]):_0x5181f6[_0xd1d245(0x2a3)](_0x20e1f7[_0xd1d245(0x2bb)]);},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x31f)]=function(){const _0x43575c=_0x497107,_0x32c9df=SceneManager['_diceRollSettings']||{};return _0x32c9df[_0x43575c(0x34a)];},Window_DiceSprite[_0x497107(0x26d)]['endModifiersPhase']=function(){this['_phase']='recording';},Window_DiceSprite['prototype'][_0x497107(0x373)]=function(){const _0x508378=_0x497107;this[_0x508378(0x421)](),this[_0x508378(0x27f)]();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x421)]=function(){const _0x476026=_0x497107,_0x30d0ba=SceneManager[_0x476026(0x1eb)]||{},_0x4b4589=_0x30d0ba[_0x476026(0x437)]||'',_0x519e63=this[_0x476026(0x3c1)]['children'][0x0],_0x202b7e=_0x519e63[_0x476026(0x271)](),_0x5d945d=_0x30d0ba[_0x476026(0x1f2)]||0x0;let _0x3e5b42=![];if(_0x30d0ba[_0x476026(0x34a)]&&this[_0x476026(0x489)])[_0x476026(0x205),_0x476026(0x1e7)]['includes'](_0x4b4589)?_0x3e5b42=_0x202b7e!==0x1:_0x3e5b42=_0x202b7e===0x1;else{if(_0x4b4589===_0x476026(0x205))_0x3e5b42=_0x202b7e>_0x5d945d;else{if(_0x4b4589===_0x476026(0x1e7))_0x3e5b42=_0x202b7e>=_0x5d945d;else{if(_0x4b4589===_0x476026(0x484))_0x3e5b42=_0x202b7e<=_0x5d945d;else _0x4b4589==='belowTarget'&&(_0x3e5b42=_0x202b7e<_0x5d945d);}}}_0x30d0ba['SwitchID']&&$gameSwitches['setValue'](_0x30d0ba[_0x476026(0x473)],_0x3e5b42),_0x30d0ba[_0x476026(0x459)]&&$gameVariables[_0x476026(0x1f4)](_0x30d0ba[_0x476026(0x459)],_0x202b7e),_0x30d0ba[_0x476026(0x46e)]===_0x476026(0x28e)&&(_0x3e5b42?SoundManager['playDiceSuccess'](this[_0x476026(0x489)]):SoundManager['playDiceFailure'](this[_0x476026(0x489)])),_0x519e63[_0x476026(0x3a9)](!![]),this[_0x476026(0x340)]=_0x519e63[_0x476026(0x340)]+_0x519e63[_0x476026(0x35e)]||0x1;},Window_DiceSprite[_0x497107(0x26d)]['endRecordingPhase']=function(){const _0x48d83e=_0x497107;this[_0x48d83e(0x2cf)]='ending';},Window_DiceSprite[_0x497107(0x26d)]['startEndingPhase']=function(){const _0x2cee45=_0x497107;if(this[_0x2cee45(0x340)]>0x0)return this[_0x2cee45(0x340)]--;this[_0x2cee45(0x2a1)](),this[_0x2cee45(0x202)]();},Window_DiceSprite['prototype'][_0x497107(0x2a1)]=function(){const _0x50a748=_0x497107,_0x596ca5=this[_0x50a748(0x3c1)][_0x50a748(0x32b)][0x0];this[_0x50a748(0x3c1)][_0x50a748(0x420)](_0x596ca5),_0x596ca5[_0x50a748(0x423)]();},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x202)]=function(){const _0x56282b=_0x497107;this['_phase']=_0x56282b(0x223),SceneManager[_0x56282b(0x331)][_0x56282b(0x2db)]();const _0x293ebe=Math[_0x56282b(0x35d)](0xc/0x3c*0x3e8);setTimeout(SceneManager[_0x56282b(0x251)][_0x56282b(0x400)](SceneManager),_0x293ebe);},Window_DiceSprite['prototype'][_0x497107(0x288)]=function(){const _0x578a19=_0x497107;if(this['_phase']!==_0x578a19(0x37b))return![];const _0x13a2c8=VisuMZ[_0x578a19(0x384)]['TotalDiceToRoll']();if(this[_0x578a19(0x3c1)]&&this[_0x578a19(0x3c1)][_0x578a19(0x32b)][_0x578a19(0x417)]!==_0x13a2c8)return!![];if(this[_0x578a19(0x419)]!==VisuMZ[_0x578a19(0x384)][_0x578a19(0x3a4)]())return!![];return![];},Window_DiceSprite[_0x497107(0x26d)]['removeOldDice']=function(){const _0x5acc80=_0x497107;while(this['_mainContainer'][_0x5acc80(0x32b)][_0x5acc80(0x417)]>0x0){const _0x48492c=this[_0x5acc80(0x3c1)][_0x5acc80(0x32b)][0x0];this[_0x5acc80(0x216)](_0x48492c);}},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x1f1)]=function(_0x486201){const _0x548bf8=_0x497107,_0x18c307=this['_mainContainer'][_0x548bf8(0x32b)],_0x204205=_0x18c307[_0x548bf8(0x47f)]();_0x204205[_0x548bf8(0x3f1)](_0x486201);while(_0x204205[_0x548bf8(0x417)]>0x0){const _0xb144d2=_0x204205[_0x548bf8(0x21a)]();this[_0x548bf8(0x216)](_0xb144d2);}},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x216)]=function(_0x27bca2){const _0xde5b2c=_0x497107;_0x27bca2[_0xde5b2c(0x3a9)](),this[_0xde5b2c(0x3c1)]['removeChild'](_0x27bca2),this[_0xde5b2c(0x2ab)]['addChild'](_0x27bca2);},Window_DiceSprite[_0x497107(0x26d)]['createNewDice']=function(){const _0x57bdb3=_0x497107,_0x3e7dfa=VisuMZ[_0x57bdb3(0x384)][_0x57bdb3(0x24e)](),_0x2e4234=0x0,_0x189b87=0xa0,_0x4125f6=Math['floor'](this[_0x57bdb3(0x39b)]/_0x3e7dfa),_0x334f89=(_0x4125f6/_0x189b87)['clamp'](0.2,0x1);for(let _0x1132d3=0x0;_0x1132d3<_0x3e7dfa;_0x1132d3++){const _0x19014f=new Sprite_DiceCheck();this[_0x57bdb3(0x3c1)]['addChild'](_0x19014f);const _0x31ae86=(_0x1132d3+0x1)/(_0x3e7dfa+0x1),_0x551813=Math[_0x57bdb3(0x212)](_0x31ae86*this['width']);_0x19014f[_0x57bdb3(0x379)](_0x551813,_0x2e4234),_0x19014f[_0x57bdb3(0x2f4)](_0x334f89);}},Window_DiceSprite[_0x497107(0x26d)][_0x497107(0x42c)]=function(){const _0x22c757=_0x497107,_0x5f49ef=[];for(const _0x633ce1 of this['_subContainer'][_0x22c757(0x32b)]){if(_0x633ce1[_0x22c757(0x44b)]<=0x0)_0x5f49ef[_0x22c757(0x483)](_0x633ce1);}for(const _0x5f32c1 of _0x5f49ef){this[_0x22c757(0x2ab)][_0x22c757(0x420)](_0x5f32c1),_0x5f32c1['destroy']();}};function Window_DiceChoice(){const _0x3f2cb0=_0x497107;this[_0x3f2cb0(0x2b8)](...arguments);}function _0x2bf7(_0x5e345,_0x405627){const _0xcfab59=_0xcfab();return _0x2bf7=function(_0x2bf7ca,_0x55e47f){_0x2bf7ca=_0x2bf7ca-0x1dc;let _0x10c8a1=_0xcfab59[_0x2bf7ca];return _0x10c8a1;},_0x2bf7(_0x5e345,_0x405627);}Window_DiceChoice[_0x497107(0x26d)]=Object[_0x497107(0x2cb)](Window_Command[_0x497107(0x26d)]),Window_DiceChoice['prototype'][_0x497107(0x269)]=Window_DiceChoice,Window_DiceChoice[_0x497107(0x46d)]={'textAlign':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x32e)][_0x497107(0x468)]??_0x497107(0x344),'showEffects':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x32e)][_0x497107(0x36f)]??!![],'showBonuses':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x32e)][_0x497107(0x383)]??!![]},Window_DiceChoice['prototype']['initialize']=function(_0x170771){const _0x295bdc=_0x497107;Window_Command[_0x295bdc(0x26d)][_0x295bdc(0x2b8)][_0x295bdc(0x2c8)](this,_0x170771),this[_0x295bdc(0x45b)]=0x0,this[_0x295bdc(0x45e)]();},Window_DiceChoice[_0x497107(0x26d)][_0x497107(0x307)]=function(){const _0x3aadd7=_0x497107;this['addRollCommand'](),this['addEffectsCommand'](),this[_0x3aadd7(0x405)]();},Window_DiceChoice[_0x497107(0x26d)][_0x497107(0x291)]=function(){const _0x3b0ea4=_0x497107,_0x180438=TextManager['DICE_ROLL'][_0x3b0ea4(0x347)][_0x3b0ea4(0x319)];this['addCommand'](_0x180438,'roll',!![]);},Window_DiceChoice['prototype'][_0x497107(0x336)]=function(){const _0xdcbfa6=_0x497107;if(!VisuMZ[_0xdcbfa6(0x384)]['AllowDiceEffects']())return;const _0x2f22e5=TextManager[_0xdcbfa6(0x3f0)][_0xdcbfa6(0x347)][_0xdcbfa6(0x227)],_0x3490f2=SceneManager[_0xdcbfa6(0x1eb)]||{};_0x3490f2[_0xdcbfa6(0x227)]=_0x3490f2[_0xdcbfa6(0x227)]||[],this[_0xdcbfa6(0x209)](_0x2f22e5,_0xdcbfa6(0x227),_0x3490f2[_0xdcbfa6(0x227)][_0xdcbfa6(0x417)]>0x0);},Window_DiceChoice['prototype'][_0x497107(0x405)]=function(){const _0x5c756c=_0x497107;if(!VisuMZ['DiceRollsRngSeeds']['AllowDiceBonuses']())return;const _0x45dd60=TextManager[_0x5c756c(0x3f0)]['choices']['bonus'];this['addCommand'](_0x45dd60,_0x5c756c(0x264),!![]);},VisuMZ['DiceRollsRngSeeds'][_0x497107(0x3ab)]=function(){const _0x3c8464=_0x497107;let _0x25d768=0x1;return VisuMZ['DiceRollsRngSeeds'][_0x3c8464(0x2e2)]()&&(_0x25d768+=0x1),VisuMZ[_0x3c8464(0x384)]['AllowDiceBonuses']()&&(_0x25d768+=0x1),_0x25d768;},VisuMZ[_0x497107(0x384)]['AllowDiceEffects']=function(){const _0x26c854=_0x497107;if(!Window_DiceChoice['SETTINGS'][_0x26c854(0x3dd)])return![];if(this[_0x26c854(0x1f8)]())return!![];const _0x2e2d50=SceneManager[_0x26c854(0x1eb)]||{};return _0x2e2d50[_0x26c854(0x227)]=_0x2e2d50['effects']||[],_0x2e2d50[_0x26c854(0x227)][_0x26c854(0x417)]>0x0;},VisuMZ[_0x497107(0x384)][_0x497107(0x1f8)]=function(){const _0x48205a=_0x497107;if(!Window_DiceChoice[_0x48205a(0x46d)][_0x48205a(0x351)])return![];const _0x595ee7=SceneManager['_diceRollSettings']||{};return _0x595ee7[_0x48205a(0x204)]=_0x595ee7[_0x48205a(0x204)]||[],_0x595ee7['bonusEffects']['length']>0x0;},Window_DiceChoice[_0x497107(0x26d)]['itemTextAlign']=function(){const _0x4e20fa=_0x497107;return Window_DiceChoice[_0x4e20fa(0x46d)][_0x4e20fa(0x1e2)];},Window_DiceChoice['prototype'][_0x497107(0x3c2)]=function(_0x2f28c7){const _0x18e15a=_0x497107,_0x1615bf=this['itemLineRect'](_0x2f28c7),_0x576b51=this[_0x18e15a(0x35b)](_0x2f28c7),_0x718d64=this[_0x18e15a(0x330)](_0x576b51)[_0x18e15a(0x39b)];this[_0x18e15a(0x3e7)](this[_0x18e15a(0x2e5)](_0x2f28c7));const _0x3530ce=this[_0x18e15a(0x214)]();if(_0x3530ce==='right')this['drawTextEx'](_0x576b51,_0x1615bf['x']+_0x1615bf['width']-_0x718d64,_0x1615bf['y'],_0x718d64);else{if(_0x3530ce===_0x18e15a(0x344)){const _0x1fad55=_0x1615bf['x']+Math[_0x18e15a(0x289)]((_0x1615bf[_0x18e15a(0x39b)]-_0x718d64)/0x2);this[_0x18e15a(0x479)](_0x576b51,_0x1fad55,_0x1615bf['y'],_0x718d64);}else this['drawTextEx'](_0x576b51,_0x1615bf['x'],_0x1615bf['y'],_0x718d64);}};function Window_DiceListBase(){const _0x1c9ad9=_0x497107;this[_0x1c9ad9(0x2b8)](...arguments);}Window_DiceListBase['prototype']=Object['create'](Window_Command[_0x497107(0x26d)]),Window_DiceListBase['prototype'][_0x497107(0x269)]=Window_DiceListBase,Window_DiceListBase[_0x497107(0x46d)]={'columns':VisuMZ[_0x497107(0x384)][_0x497107(0x293)]['Window'][_0x497107(0x3ec)]??0x2,'colSpacing':VisuMZ[_0x497107(0x384)][_0x497107(0x293)][_0x497107(0x32e)]['ListColSpacing']??0x10},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x2b8)]=function(_0x17888f){const _0x228ef9=_0x497107;Window_Command[_0x228ef9(0x26d)]['initialize'][_0x228ef9(0x2c8)](this,_0x17888f),this[_0x228ef9(0x45b)]=0x0,this['deactivate']();},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x255)]=function(){const _0x24c43f=_0x497107;return Window_DiceListBase[_0x24c43f(0x46d)]['columns']||0x1;},Window_DiceListBase['prototype'][_0x497107(0x415)]=function(){const _0x8b1191=_0x497107;return Window_DiceListBase[_0x8b1191(0x46d)]['colSpacing']||0x0;},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x307)]=function(){const _0x3f78a9=_0x497107,_0x347bd8=this[_0x3f78a9(0x252)]();for(const _0x3fe1df of _0x347bd8){if(!this['isIncluded'](_0x3fe1df))return;this[_0x3f78a9(0x311)](_0x3fe1df);}},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x252)]=function(){return[];},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x454)]=function(_0x2fcbb3){if(!_0x2fcbb3)return![];return!![];},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x311)]=function(_0xe1ffb5){const _0x39796c=_0x497107,_0xeb9d1b=this[_0x39796c(0x2c0)](_0xe1ffb5),_0x52acf9=_0x39796c(0x234),_0x1c29a8=this[_0x39796c(0x322)](_0xe1ffb5),_0x35ce59=_0xe1ffb5;this['addCommand'](_0xeb9d1b,_0x52acf9,_0x1c29a8,_0x35ce59);},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x2c0)]=function(_0x33b731){const _0x239af8=_0x497107;if(_0x33b731[_0x239af8(0x241)]||_0x33b731[_0x239af8(0x2cc)]){let _0x5d805d=_0x33b731[_0x239af8(0x241)]||'',_0x1036da=_0x33b731[_0x239af8(0x2cc)]||0x0,_0x2609dd=null;(_0x33b731[_0x239af8(0x386)]||_0x33b731[_0x239af8(0x356)])&&(_0x2609dd=$dataItems[_0x33b731[_0x239af8(0x386)]||_0x33b731[_0x239af8(0x356)]]);(_0x33b731['WeaponReqID']||_0x33b731[_0x239af8(0x24d)])&&(_0x2609dd=$dataWeapons[_0x33b731[_0x239af8(0x3e8)]||_0x33b731[_0x239af8(0x24d)]]);(_0x33b731['ArmorReqID']||_0x33b731[_0x239af8(0x2b4)])&&(_0x2609dd=$dataArmors[_0x33b731[_0x239af8(0x428)]||_0x33b731['ArmorCostID']]);(_0x33b731[_0x239af8(0x2c1)]||_0x33b731[_0x239af8(0x3e2)])&&(_0x2609dd=$dataSkills[_0x33b731['SkillReqID']||_0x33b731['SkillCostID']]);if(_0x5d805d[_0x239af8(0x200)]()[_0x239af8(0x2fc)]()===_0x239af8(0x280)){_0x5d805d=_0x2609dd?_0x2609dd[_0x239af8(0x237)]:'';if(Imported[_0x239af8(0x3e6)]&&_0x2609dd){if(_0x2609dd[_0x239af8(0x341)][_0x239af8(0x31d)](/<COLOR:[ ](\d+)>/i)){const _0x51d5d2=Number(RegExp['$1']);_0x5d805d='\x5cC[%1]%2\x5cC[0]'['format'](_0x51d5d2,_0x5d805d[_0x239af8(0x2fc)]());}else{if(Imported[_0x239af8(0x3c7)]&&_0x2609dd[_0x239af8(0x341)][_0x239af8(0x31d)](/<COLOR:[ ]#(.*)>/i)){const _0x13a231='#'+String(RegExp['$1']);_0x5d805d=_0x239af8(0x391)['format'](_0x13a231,_0x5d805d[_0x239af8(0x2fc)]());}}}_0x5d805d=_0x5d805d[_0x239af8(0x2fc)]();}return _0x1036da>=0xf4240&&(_0x1036da=_0x2609dd?_0x2609dd['iconIndex']:0x0),_0x239af8(0x42a)[_0x239af8(0x329)](_0x5d805d||_0x239af8(0x272),_0x1036da||0x0);}return'\x5cI[16]Undefined';},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x322)]=function(_0x2f4640){if(!_0x2f4640)return![];return!![];},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x3c2)]=function(_0x57d9bc){const _0x23f1d9=_0x497107,_0x2e0d48=this[_0x23f1d9(0x48a)](_0x57d9bc);this[_0x23f1d9(0x486)](),this[_0x23f1d9(0x3e7)](this[_0x23f1d9(0x2e5)](_0x57d9bc));const _0x12a7b0=this['_list'][_0x57d9bc][_0x23f1d9(0x380)]||{},_0x1ad9a0=this['getNameText'](_0x12a7b0,_0x57d9bc)[_0x23f1d9(0x2fc)]();this[_0x23f1d9(0x479)](_0x1ad9a0,_0x2e0d48['x'],_0x2e0d48['y'],_0x2e0d48[_0x23f1d9(0x39b)]),this['drawEffects'](_0x12a7b0,_0x2e0d48);},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x455)]=function(_0x465c98,_0x2d86dc){const _0x21cb29=_0x497107,_0x53bb71=this[_0x21cb29(0x35b)](_0x2d86dc)['trim']();let _0x4da854=this['getNameExtra'](_0x465c98)[_0x21cb29(0x2fc)]();const _0xa9f406=TextManager[_0x21cb29(0x3f0)][_0x21cb29(0x264)]['displayFmt'];return _0x53bb71+'\x20'+_0xa9f406['format'](_0x4da854);},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x432)]=function(_0x5d45f1){const _0x276296=_0x497107,_0x31ce11=TextManager['DICE_ROLL'][_0x276296(0x264)];let _0x150446=this[_0x276296(0x2fa)](_0x5d45f1);if(_0x5d45f1[_0x276296(0x3ca)]){const _0x16f713=$gameActors[_0x276296(0x31a)](_0x5d45f1[_0x276296(0x3ae)]);if(_0x16f713){const _0x41c915=_0x31ce11[_0x276296(0x1e5)],_0x2cf312=_0x41c915['format'](_0x16f713[_0x276296(0x237)]())[_0x276296(0x2fc)]();if(_0x150446[_0x276296(0x417)]>0x0){const _0x396b8f=_0x31ce11[_0x276296(0x45f)];_0x150446=_0x396b8f['format'](_0x2cf312,_0x150446)[_0x276296(0x2fc)]();}else _0x150446+=_0x2cf312;}_0x150446=_0x150446[_0x276296(0x2fc)]();}return _0x150446;},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x2fa)]=function(_0x26edf1){return'';},Window_DiceListBase[_0x497107(0x26d)][_0x497107(0x203)]=function(_0x44efe3,_0x1f7423){const _0x52a3d6=_0x497107;let _0x5323bf=this[_0x52a3d6(0x3c3)](_0x44efe3)[_0x52a3d6(0x2fc)]();const _0x194511=TextManager[_0x52a3d6(0x3f0)][_0x52a3d6(0x368)];if(_0x44efe3[_0x52a3d6(0x348)]){const _0x1b593c=_0x194511[_0x52a3d6(0x461)];_0x5323bf=_0x1b593c[_0x52a3d6(0x329)](_0x44efe3['PreEffectText'],_0x5323bf),_0x5323bf=_0x5323bf[_0x52a3d6(0x2fc)]();}if(_0x44efe3[_0x52a3d6(0x254)]){const _0x4d26b8=_0x194511[_0x52a3d6(0x461)];_0x5323bf=_0x4d26b8['format'](_0x5323bf,_0x44efe3[_0x52a3d6(0x254)]),_0x5323bf=_0x5323bf[_0x52a3d6(0x2fc)]();}_0x5323bf=_0x194511[_0x52a3d6(0x233)][_0x52a3d6(0x329)](_0x5323bf)[_0x52a3d6(0x2fc)]();const _0x4255df=this[_0x52a3d6(0x330)](_0x5323bf)[_0x52a3d6(0x39b)];this[_0x52a3d6(0x479)](_0x5323bf,_0x1f7423['x']+_0x1f7423[_0x52a3d6(0x39b)]-_0x4255df,_0x1f7423['y']);},Window_DiceListBase['prototype']['getEffectText']=function(_0x8b7701){const _0x3b8be1=_0x497107,_0x245d37=TextManager[_0x3b8be1(0x3f0)][_0x3b8be1(0x264)];let _0x2e84fa=TextManager['getDiceRollEffectsText'](_0x8b7701);return _0x2e84fa;};function Window_DiceEffectsList(){const _0x304223=_0x497107;this[_0x304223(0x2b8)](...arguments);}Window_DiceEffectsList[_0x497107(0x26d)]=Object[_0x497107(0x2cb)](Window_DiceListBase['prototype']),Window_DiceEffectsList[_0x497107(0x26d)][_0x497107(0x269)]=Window_DiceEffectsList,Window_DiceEffectsList[_0x497107(0x26d)][_0x497107(0x2b8)]=function(_0x4b3d1e){const _0x3c5202=_0x497107;Window_DiceListBase[_0x3c5202(0x26d)][_0x3c5202(0x2b8)][_0x3c5202(0x2c8)](this,_0x4b3d1e);},Window_DiceEffectsList[_0x497107(0x26d)]['playOkSound']=function(){},Window_DiceEffectsList[_0x497107(0x26d)]['playBuzzerSound']=function(){},Window_DiceEffectsList[_0x497107(0x26d)][_0x497107(0x252)]=function(){const _0x4ee83c=_0x497107,_0x18a4ec=SceneManager[_0x4ee83c(0x1eb)]||{},_0x39e548=_0x18a4ec[_0x4ee83c(0x227)]||[];return _0x39e548;};function Window_DiceBonusList(){this['initialize'](...arguments);}Window_DiceBonusList[_0x497107(0x26d)]=Object['create'](Window_DiceListBase['prototype']),Window_DiceBonusList[_0x497107(0x26d)][_0x497107(0x269)]=Window_DiceBonusList,Window_DiceBonusList[_0x497107(0x26d)][_0x497107(0x2b8)]=function(_0x2dc4fc){const _0x31f057=_0x497107;Window_DiceListBase[_0x31f057(0x26d)][_0x31f057(0x2b8)][_0x31f057(0x2c8)](this,_0x2dc4fc);},Window_DiceBonusList[_0x497107(0x26d)]['playOkSound']=function(){const _0x47ff0=_0x497107;SoundManager[_0x47ff0(0x48f)]();},Window_DiceBonusList[_0x497107(0x26d)]['effectsList']=function(){const _0x4ffcf8=_0x497107,_0x2aa315=SceneManager['_diceRollSettings']||{},_0x4e1807=_0x2aa315[_0x4ffcf8(0x204)]||[];return _0x4e1807;},Window_DiceBonusList[_0x497107(0x26d)][_0x497107(0x322)]=function(_0xe098ac){const _0xf86909=_0x497107;if(!_0xe098ac)return![];if(_0xe098ac[_0xf86909(0x2c5)]){const _0x4ee9f2=$gameVariables[_0xf86909(0x2ad)](_0xe098ac[_0xf86909(0x2c5)]),_0x4a10ac=Math[_0xf86909(0x407)](_0xe098ac[_0xf86909(0x1ee)]||0x1,0x1);if(_0x4a10ac>_0x4ee9f2)return![];}if(_0xe098ac[_0xf86909(0x356)]){const _0x42dd8e=$dataItems[_0xe098ac[_0xf86909(0x356)]],_0x2c3263=Math[_0xf86909(0x407)](_0xe098ac[_0xf86909(0x323)]||0x1,0x1),_0x22ed05=$gameParty['numItems'](_0x42dd8e);if(_0x2c3263>_0x22ed05)return![];}if(_0xe098ac[_0xf86909(0x24d)]){const _0x286280=$dataWeapons[_0xe098ac[_0xf86909(0x24d)]],_0x36f439=Math[_0xf86909(0x407)](_0xe098ac[_0xf86909(0x442)]||0x1,0x1),_0x85baac=$gameParty[_0xf86909(0x395)](_0x286280);if(_0x36f439>_0x85baac)return![];}if(_0xe098ac['ArmorCostID']){const _0x4bd813=$dataArmors[_0xe098ac[_0xf86909(0x2b4)]],_0x345a7d=Math[_0xf86909(0x407)](_0xe098ac[_0xf86909(0x354)]||0x1,0x1),_0x54c50e=$gameParty[_0xf86909(0x395)](_0x4bd813);if(_0x345a7d>_0x54c50e)return![];}if(_0xe098ac[_0xf86909(0x3e2)]){const _0x4d886d=$gameActors['actor'](_0xe098ac[_0xf86909(0x3ae)]),_0x2bff92=$dataSkills[_0xe098ac[_0xf86909(0x3e2)]];if(!_0x4d886d[_0xf86909(0x304)](_0x2bff92))return![];}if(_0xe098ac[_0xf86909(0x284)]){const _0x1be108=_0xe098ac['CurrentUses']||0x0,_0x194a80=_0xe098ac[_0xf86909(0x284)]||0x1;if(_0x194a80<0xf4240&&_0x1be108>=_0x194a80)return![];}if(_0xe098ac[_0xf86909(0x3f8)]){if(!$gameSwitches[_0xf86909(0x2ad)](_0xe098ac[_0xf86909(0x3f8)]))return![];}if(_0xe098ac[_0xf86909(0x327)]){if(!_0xe098ac[_0xf86909(0x327)]())return![];}return!![];},Window_DiceBonusList['prototype'][_0x497107(0x432)]=function(_0x171ff8){const _0x422db5=_0x497107,_0x526359=TextManager[_0x422db5(0x3f0)][_0x422db5(0x264)];let _0x5bcbd0=Window_DiceListBase[_0x422db5(0x26d)][_0x422db5(0x432)][_0x422db5(0x2c8)](this,_0x171ff8);if(_0x526359[_0x422db5(0x305)]){const _0xb59a18=_0x171ff8[_0x422db5(0x44d)]||0x0,_0x2e6461=_0x171ff8[_0x422db5(0x284)]||0x1;if(_0xb59a18>=_0x2e6461)return _0x526359['usedUp'][_0x422db5(0x2fc)]();}if(_0x171ff8[_0x422db5(0x452)]){const _0x40a614=_0x526359['costTextFmt'];_0x5bcbd0=_0x40a614[_0x422db5(0x329)](_0x171ff8['PreCostText'],_0x5bcbd0),_0x5bcbd0=_0x5bcbd0[_0x422db5(0x2fc)]();}if(_0x171ff8[_0x422db5(0x1e4)]){const _0x399e8c=_0x526359[_0x422db5(0x25f)];_0x5bcbd0=_0x399e8c['format'](_0x5bcbd0,_0x171ff8[_0x422db5(0x1e4)]),_0x5bcbd0=_0x5bcbd0[_0x422db5(0x2fc)]();}return _0x5bcbd0;},Window_DiceBonusList[_0x497107(0x26d)][_0x497107(0x2fa)]=function(_0x1e2516){const _0x5643ff=_0x497107,_0x5ea068=TextManager['DICE_ROLL'][_0x5643ff(0x264)];let _0x20b6c3=Window_DiceListBase['prototype'][_0x5643ff(0x2fa)][_0x5643ff(0x2c8)](this,_0x1e2516);if(_0x1e2516[_0x5643ff(0x2be)]){const _0x147a99=_0x1e2516[_0x5643ff(0x44d)]||0x0,_0x58cf61=_0x1e2516[_0x5643ff(0x284)]||0x1,_0x4b95b7=_0x58cf61-_0x147a99,_0x37614c=_0x5ea068[_0x5643ff(0x42f)];if(_0x58cf61>=0xf4240)_0x20b6c3+='\x20'+_0x5ea068[_0x5643ff(0x313)];else(_0x58cf61>=0x2||_0x58cf61===0x1&&_0x5ea068[_0x5643ff(0x235)])&&(_0x20b6c3+='\x20'+_0x37614c['format'](_0x147a99,_0x58cf61,_0x4b95b7));_0x20b6c3=_0x20b6c3[_0x5643ff(0x2fc)]();}if(_0x1e2516[_0x5643ff(0x2c5)]&&_0x1e2516[_0x5643ff(0x30f)]){const _0x59cca1=$gameVariables[_0x5643ff(0x2ad)](_0x1e2516['VariableCostID']),_0x174db9=Math['max'](_0x1e2516['VariableCostValue']||0x1,0x1),_0x3a769a=_0x5ea068[_0x5643ff(0x1f0)];_0x20b6c3+='\x20'+_0x3a769a['format'](_0x174db9,_0x59cca1),_0x20b6c3=_0x20b6c3[_0x5643ff(0x2fc)]();}if(_0x1e2516['ItemCostID']&&_0x1e2516[_0x5643ff(0x2a0)]){const _0x2b607a=$dataItems[_0x1e2516[_0x5643ff(0x356)]],_0x207d3c=Math[_0x5643ff(0x407)](_0x1e2516[_0x5643ff(0x323)]||0x1,0x1),_0x270de6=$gameParty[_0x5643ff(0x395)](_0x2b607a),_0x5111f4=_0x5ea068[_0x5643ff(0x456)];_0x20b6c3+='\x20'+_0x5111f4[_0x5643ff(0x329)](_0x207d3c,_0x270de6),_0x20b6c3=_0x20b6c3['trim']();}if(_0x1e2516[_0x5643ff(0x24d)]&&_0x1e2516[_0x5643ff(0x1de)]){const _0x399eeb=$dataWeapons[_0x1e2516[_0x5643ff(0x24d)]],_0xf28565=Math[_0x5643ff(0x407)](_0x1e2516[_0x5643ff(0x442)]||0x1,0x1),_0x38d8cc=$gameParty['numItems'](_0x399eeb),_0x2a831d=_0x5ea068[_0x5643ff(0x42d)];_0x20b6c3+='\x20'+_0x2a831d['format'](_0xf28565,_0x38d8cc),_0x20b6c3=_0x20b6c3[_0x5643ff(0x2fc)]();}if(_0x1e2516[_0x5643ff(0x2b4)]&&_0x1e2516[_0x5643ff(0x3e4)]){const _0x2adf8a=$dataArmors[_0x1e2516[_0x5643ff(0x2b4)]],_0x3559ab=Math[_0x5643ff(0x407)](_0x1e2516['ArmorCostValue']||0x1,0x1),_0x518b87=$gameParty[_0x5643ff(0x395)](_0x2adf8a),_0x10b36f=_0x5ea068['armorCostFmt'];_0x20b6c3+='\x20'+_0x10b36f[_0x5643ff(0x329)](_0x3559ab,_0x518b87),_0x20b6c3=_0x20b6c3[_0x5643ff(0x2fc)]();}if(_0x1e2516[_0x5643ff(0x3e2)]&&_0x1e2516[_0x5643ff(0x2ef)]){const _0x563a8b=$gameActors[_0x5643ff(0x31a)](_0x1e2516[_0x5643ff(0x3ae)]);if(_0x563a8b){const _0x51d465=$dataSkills[_0x1e2516[_0x5643ff(0x3e2)]];if(Imported[_0x5643ff(0x445)]){let _0xac118c=this['createAllSkillCostText'](_0x563a8b,_0x51d465);_0xac118c=_0xac118c[_0x5643ff(0x258)](/\\FS\[(\d+)\]/gi,''),_0xac118c=_0xac118c[_0x5643ff(0x258)](/\\{/gi,''),_0xac118c=_0xac118c[_0x5643ff(0x258)](/\\}/gi,''),_0x20b6c3+='\x20'+_0xac118c['trim'](),_0x20b6c3=_0x20b6c3['trim']();}else{const _0x45f142=_0x563a8b[_0x5643ff(0x3f6)](_0x51d465);_0x45f142>0x0&&(_0x20b6c3+='\x20'+_0x5643ff(0x2df)[_0x5643ff(0x329)](_0x45f142,TextManager['mpA']),_0x20b6c3=_0x20b6c3['trim']());const _0xb833a3=_0x563a8b['skillTpCost'](_0x51d465);_0xb833a3>0x0&&(_0x20b6c3+='\x20'+_0x5643ff(0x33d)['format'](_0xb833a3,TextManager['tpA']),_0x20b6c3=_0x20b6c3[_0x5643ff(0x2fc)]());}}}return _0x20b6c3;},VisuMZ['DiceRollsRngSeeds']['MAX_DICE']=VisuMZ['DiceRollsRngSeeds'][_0x497107(0x293)][_0x497107(0x35c)][_0x497107(0x476)]??0x5,VisuMZ[_0x497107(0x384)][_0x497107(0x24e)]=function(){const _0x1019c4=_0x497107;if(!SceneManager[_0x1019c4(0x36b)]())return 0x0;const _0x5868cc=SceneManager[_0x1019c4(0x1eb)]||{};let _0xf624ff=_0x5868cc[_0x1019c4(0x2fe)]||0x1;if(_0x5868cc[_0x1019c4(0x46e)]===_0x1019c4(0x43c))_0xf624ff+=_0x5868cc[_0x1019c4(0x471)]||0x0;else _0x5868cc[_0x1019c4(0x46e)]===_0x1019c4(0x28e)&&(_0xf624ff+=Math[_0x1019c4(0x3a7)](_0x5868cc['advantage']||0x0));return _0xf624ff=_0xf624ff['clamp'](0x1,VisuMZ[_0x1019c4(0x384)][_0x1019c4(0x444)]),_0xf624ff;},VisuMZ[_0x497107(0x384)]['CurrentDiceRank']=function(){const _0x2ba129=_0x497107;if(!SceneManager[_0x2ba129(0x36b)]())return 0x0;const _0xc0084=SceneManager[_0x2ba129(0x1eb)]||{};let _0x4ccdfd=_0xc0084['DiceRank'];return _0x4ccdfd+=_0xc0084[_0x2ba129(0x2c9)]||0x0,_0x4ccdfd=_0x4ccdfd['clamp'](0x1,0x6),_0x4ccdfd;},VisuMZ[_0x497107(0x384)][_0x497107(0x3a4)]=function(){const _0x11e81d=this['CurrentDiceRank']();return[0x0,0x4,0x6,0x8,0xa,0xc,0x14][_0x11e81d];};var $rngSeed=function(_0x3a6c84,_0x42b093,_0x13e517){const _0x3983dc=_0x497107;if(_0x3a6c84===undefined)return Math[_0x3983dc(0x1f3)]();return $gameSystem[_0x3983dc(0x1df)](_0x3a6c84,_0x42b093,_0x13e517);},$resetRngSeed=function(_0x359966,_0x32adda,_0x2e51c4){const _0x9c010d=_0x497107;$gameSystem[_0x9c010d(0x278)](_0x359966,_0x32adda,_0x2e51c4);},$dailyRngSeed=function(_0x2a4962){return $rngSeed(_0x2a4962,!![],![]);},$resetDailyRngSeed=function(_0x22d23e){$resetRngSeed(_0x22d23e,!![],![]);},$uniqueRngSeed=function(_0x59ac57){return $rngSeed(_0x59ac57,![],!![]);},$resetUniqueRngSeed=function(_0x64c208){$resetRngSeed(_0x64c208,![],!![]);},$dailyUniqueRngSeed=function(_0x3a8892){return $rngSeed(_0x3a8892,!![],!![]);},$resetDailyUniqueRngSeed=function(_0x4e09d4){$resetRngSeed(_0x4e09d4,!![],!![]);},$addDiceCount=function(_0x23e107){const _0x36c2bc=_0x497107,_0x303330=SceneManager[_0x36c2bc(0x1eb)]||{};_0x303330[_0x36c2bc(0x46e)]===_0x36c2bc(0x43c)&&(_0x303330[_0x36c2bc(0x471)]=_0x303330[_0x36c2bc(0x471)]||0x0,_0x303330['advantage']+=_0x23e107,_0x303330[_0x36c2bc(0x471)]=Math['round'](_0x303330[_0x36c2bc(0x471)]));},$addDiceAdvantage=function(_0x4fd8df){const _0x1c8fa8=_0x497107,_0x15024e=SceneManager[_0x1c8fa8(0x1eb)]||{};_0x15024e[_0x1c8fa8(0x46e)]===_0x1c8fa8(0x28e)&&(_0x15024e[_0x1c8fa8(0x471)]=_0x15024e[_0x1c8fa8(0x471)]||0x0,_0x15024e[_0x1c8fa8(0x471)]+=_0x4fd8df,_0x15024e[_0x1c8fa8(0x471)]=Math[_0x1c8fa8(0x212)](_0x15024e[_0x1c8fa8(0x471)]));},$addDiceDisadvantage=function(_0x489f5c){$addDiceAdvantage(-_0x489f5c);},$addDiceRank=function(_0x1b67e4){const _0x5b3fcf=_0x497107,_0x256155=SceneManager['_diceRollSettings']||{};_0x256155[_0x5b3fcf(0x2c9)]=_0x256155[_0x5b3fcf(0x2c9)]||0x1,_0x256155[_0x5b3fcf(0x2c9)]+=_0x1b67e4,_0x256155[_0x5b3fcf(0x2c9)]=Math[_0x5b3fcf(0x212)](_0x256155[_0x5b3fcf(0x2c9)]);},$addDiceModifier=function(_0x3aec63){const _0x4fa7b=_0x497107,_0x4f1c50=SceneManager[_0x4fa7b(0x1eb)]||{};_0x4f1c50[_0x4fa7b(0x2c6)]=_0x4f1c50[_0x4fa7b(0x2c6)]||0x0,_0x4f1c50['modifiers']+=_0x3aec63,_0x4f1c50[_0x4fa7b(0x2c6)]=Math[_0x4fa7b(0x212)](_0x4f1c50[_0x4fa7b(0x2c6)]);},$addDiceModRand=function(_0x560350){const _0x2f8937=_0x497107,_0x24857f=SceneManager[_0x2f8937(0x1eb)]||{};_0x24857f[_0x2f8937(0x3c6)]=_0x24857f['modRand']||0x0,_0x24857f[_0x2f8937(0x3c6)]+=_0x560350,_0x24857f['modRand']=Math['round'](_0x24857f[_0x2f8937(0x3c6)]);};function _0xcfab(){const _0x5536d3=['_diceSides','requestAnimation','NUM','DataCount_BgType','Vocab','offsetX','STRUCT','removeChild','processRecordingPhase','_diceRoll_ModifierWindow','destroy','createDiceGraphic_D20','DiceOrderFmt','drawLabelText','_lastPluginCommandInterpreter','ArmorReqID','getMonth','\x5cI[%2]%1','changeScaleTo','updateSubContainer','weaponCostFmt','diceRollEffectsWindowRect','useTimesFmt','DicePrePostFormat','offsetY','getNameExtra','multiplier','createDiceRollAdvantageWindow','_rngSaveUnique','positionOffsetY','ResultType','DiceRank','Math_random','isActor','noRngSeed','rollValue','_diceRollDelay','bezierCurveTo','fillStyle','SpecificActorIDs','_evoMatrixSkillMode','WeaponCostValue','_delayRollDuration','MAX_DICE','VisuMZ_1_SkillsStatesCore','D10','mainFontSize','4097250zrLnyq','VisuMZ_ShuffleArray','throw','opacity','Min','CurrentUses','startFadeIn','_wholeRollDuration','hasSkill','CommandBonus','PreCostText','Game_Interpreter_PluginCommand','isIncluded','getNameText','itemCostFmt','_numberValue','getImageFilenames','VariableID','createNewDice','openness','rollHeight','index','open','skillUserCostFmt','bitmap','effectTextFmt','setupDiceAutoEffects','%1_pan','D20','height','_cache_createDiceGraphic_D8','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Command_TextAlign','subject','setupShuffleChoices','enemyId','playDiceFailure','SETTINGS','type','average','toLowerCase','advantage','cacheData','SwitchID','VariableEffects','Rank%1','MaxDiceCount','_cache_createDiceGraphic_D12','getImageColors','drawTextEx','getRandomNumberSeedKey','SubtitleBelowTarget','createDiceGraphic_D8','-skill-%1','plusSign','clone','positionOffsetX','_randomNumberSeeds','moveDuration','push','belowEqualTarget','everySpecificActor','resetFontSettings','addChild','createDiceGraphic_D4','_naturalRoll','itemLineRect','createDiceRollSpriteWindow','description','2675974qDXRDw','numberColorShift','playDiceBonusUse','createDiceRollRankWindow','BonusList_BgType','RegExp','Color2Ratio','createDiceRollChoiceWindow','command357','%1_filenames','ShowWeaponCost','getNextFloatRandomNumberFromSeed','leader','border','textAlign','textColor','PostCostText','skillUserFmt','DataDiceCount','aboveEqualTarget','\x5cC[5]Difficulty\x20Class:\x5cC[0]\x20At\x20most\x20\x5cC[24]%1\x5cC[0]','_numberSprite','createDiceGraphic_D10','_diceRollSettings','dailySeed','playDiceThrow','VariableCostValue','updateScaleEffect','variableCostFmt','moveSpriteToSubContainerExcept','TargetValue','random','setValue','modifierBgType','uniqueSeed','crit_success','AllowDiceBonuses','clearRngAspects','-actor-%1','drawNumber','randomizeNumber','DataRank5','Adv%1','_cache_createDiceGraphic_D4','toUpperCase','scale','endEndingPhase','drawEffects','bonusEffects','aboveTarget','slice','endRollingPhase','GetDailyKey','addCommand','createDiceRollBonusWindow','subtitleBgType','Container_RectJS','beginPath','removeOldDice','Title_BgType','rngSeed','startDiceRoll','round','toString','itemTextAlign','isNumberShifting','moveSpriteToSubContainer','criticalSuccess','rollDuration','_cache_createDiceGraphic_D6','pop','updateRoll','itemPadding','InjectedRngSeed','_numberColor','initRandomNumberSeeds','Game_Action_apply','lineJoin','getNextRangeRandomNumberFromSeed','final','CostUsedUp','fontOffsetY','d12','effects','_diceRoll_SubtitleWindow','needsRefresh','Roll\x20for\x20\x5cC[27]lowest\x5cC[0]\x20number','Color1Ratio','_rngSeed','isAnyDiceAnimating','playDiceSound','scaleDuration','Subtitle_BgType','addChildToBack','(×%2-%1)','displayFmt','effect','showUseMax1','7868946VYoIZQ','name','D12','CommandEffects','numberDuration','_scaleTarget','diceUpColor','setupDiceBonusEffects','isAnyDiceVisible','fontFace','anyBattleMember','Name','rotateSpeed','rankBgType','numberFontFace','orderFmt','d%1','total','SubtitleLowest','modifier','darkenColor','%1_volume','_baseScale','WeaponCostID','TotalDiceToRoll','createAllDiceRollWindows','clamp','endDiceRoll','effectsList','isMoving','PostEffectText','maxCols','tick','fadeOutDuration','replace','updateOpacity','24TARauT','useCurrentDiceBonusEffect','%1➤%2','DiceModifier','VariableReqID','costTextFmt','isRolling','EFFECT_LIST_KEYS','Interweave','removeAllDiceRollWindows','bonus','vs-','createDiceGraphic','[%1]','DataMod_BgType','constructor','_lastModRand','playSe','\x5c}%1\x5c{','prototype','applyDiceEffect','diceSettings','Add\x20Bonus','number','Undefined','blur','List_RectJS','\x5cC[5]Difficulty\x20Class:\x5cC[0]\x20At\x20least\x20\x5cC[24]%1\x5cC[0]','getDiceRollSubtitle','createDiceRollSubtitleWindow','resetRandomNumberSeed','battleMembers','data','Roll\x20Dice','_numberShiftTarget','butt','restore','endRecordingPhase','AUTONAME','RngSeed','_inputComboSkillMode','endModifiersPhase','MaxUses','setDataType','diceRollTitleWindowRect','DataAdvantage','needsNewDiceBatch','floor','applyRngAspects','_blurFilter','updateWaitMode','filter','targetValue','AutoMods','SubtitleHighest','addRollCommand','ending','Settings','everyMember','DiceDisplayFormat','ARRAYFUNC','diceRollRankWindowRect','DiceSeed','ShuffleSeededArray','_numberShiftDuration','everyBattleMember','fadeInDuration','modulus','setBackgroundType','Game_Interpreter_updateWaitMode','ShowItemCost','processEndingPhase','CostSkillUserFmt','setNumberColor','playDiceIncrement','refresh','USED!','ArrangeOffsetY','%1\x20%2','CostPrePostFormat','SubtitleAverage','_subContainer','drawCenteredText','value','cancel','status','includes','ConvertParams','diceRollSpriteWindowRect','CostArmorFormat','ArmorCostID','processRollingPhase','diceRoll','exit','initialize','_logWindow','createDiceGraphic_D12','modDownColor','createDiceRollTitleWindow','highest','ShowUses','parameters','makeEffectName','SkillReqID','min','_baseTexture','Subtitle_RectJS','VariableCostID','modifiers','totalDiceRollChoices','call','rankAdjust','1378272GjnuoC','create','Icon','startModifiersPhase','ApplyUnique','_phase','fill','(×%1/%2)','VisuMZ_3_ActiveChainSkills','onDiceRollBonusCancel','fontOffsetX','padStart','update','outlineWidth','ConditionJS','modifierFmt','_numberText','startClosingDiceWindows','activate','diceRollSubtitleWindowRect','createDiceRollEffectsWindow','\x5cC[23]%1\x20%2','meetsDiceAutoEffectConditions','lineHeight','AllowDiceEffects','Sound','modUpColor','isCommandEnabled','Roll\x20for\x20\x5cC[23]total\x5cC[0]\x20number','\x5cC[%2]%1\x5cC[0]','createNewRandomNumberSeed','diceRollModifierWindowRect','_diceRoll_AdvantageWindow','SubtitleCritSuccess','ShowJS','_customModified','d20','ShowSkillCost','_randomNumberSeedUniqueKey','isLearnedSkill','updateRotation','belowTarget','setBaseScale','diceCountFmt','isActiveChainSkillsUiVisible','success','none','hasItem','getNameCost','onDiceRollBonusUseEffect','trim','color3','TotalRolls','Roll\x20for\x20\x5cC[24]highest\x5cC[0]\x20number','dailyUniqueSeed','isSkill','innerWidth','\x5cC[5]Difficulty\x20Class:\x5cC[0]\x20Below\x20\x5cC[24]%1\x5cC[0]','canPaySkillCost','usedUp','SubtitleTotal','makeCommandList','setHandler','_diceRoll_SpriteWindow','VisuMZ_2_QTE_TriggerSys','-item-%1','reduce','commandDiceEffects','SubtitleAboveTarget','ShowVariableCost','deactivate','makeEffectCommand','SkillEffects','unlimitedUse','rankUpColor','\x5cC[16]Modifiers:','View\x20Effects','114676nQIOzr','createBlurFilter','roll','actor','EffectList_BgType','ShowSwitchID','match','d10','allowNaturalRolls','CostDisplayFormat','SubtitleAboveEqualTarget','isEnabled','ItemCostValue','_diceRoll_TitleWindow','parse','\x5cC[24]Advantage:','EnableJS','Cannot\x20roll\x20dice\x20during\x20a\x20QTE.','format','_baseY','children','createDiceRollModifierWindow','DataCount_RectJS','Window','ARRAYEVAL','textSizeEx','_scene','Seed','_scaleDuration','createSkillEffectDupes','AnimationID','addEffectsCommand','loseItem','getFullYear','Roll\x20for\x20\x5cC[21]average\x5cC[0]\x20number','getLastPluginCommandInterpreter','filters','rollDelay','\x5cC[29]%1\x20%2','setupDiceRoll','apply','_finalizeDuration','note','Cannot\x20roll\x20multiple\x20dice\x20at\x20the\x20same\x20time.','_diceRoll','center','_rngDaily','setupDiceEffects','choices','PreEffectText','#%1','NaturalRolls','lineWidth','close','rank','\x5cC[16]Dice\x20Rank:','anchor','1873344DXQlYv','showBonuses','rank%1','loadPicture','ArmorCostValue','randomInt','ItemCostID','DICE_ROLL_RATIOS','getRandomNumberSeeds','lowest','Game_Message_setupShuffleChoices','commandName','Dice','ceil','_fadeDuration','rollModDelay','updateNumberShift','initMembers','color1','Command_RectJS','_dataType','_rollDuration','DataRank3','JSON','effectList','colors','lineCap','isRollingDice','createDiceGraphic_D6','commandDiceBonus','BlurFilter','CommandShowEffects','Max','CostUnlimitedUse','-enemy-%1-%2','startRecordingPhase','getDiceRollEffectsText','FUNC','ArrangeOffsetX','miter','pow','setBaseXy','map','prepare','1hlDzUB','anyMember','%1~%2','auto','ext','subtitle','isPlayingQTE','CommandShowBonus','DiceRollsRngSeeds','rankDownColor','ItemReqID','DefaultRngSeed','color2','CostSkillUserName','join','DiceModifierRand','actorId','bonusBgType','_diceRoll_BonusWindow','WeaponIncludeEquip','recording','\x5cHEXCOLOR<%1>%2\x5cC[0]','diceRollChoiceWindowRect','angle','updateBlurEffect','numItems','rolling','CostUseTimesFmt','SkillUserAlive','createSpriteContainers','isDead','width','CostItemFormat','startRollingPhase','_moveDuration','log','diceRollAdvantageWindowRect','_diceRoll_ChoiceWindow','ColorBorderRatio','_smooth','CurrentDiceSides','allMembers','createBitmap','abs','item','startFadeOut','save','TotalDiceChoices','_rollingDelay','ShuffleArray','SkillUserActorID','disadvantageFmt','canRollDice','isAnimating','addDiceBonusEffects','SkillUser','Title_RectJS','version','_lastAdvantage','_cache_createDiceGraphic_D20','diceDownColor','processModifiersPhase','drawText','ActivateJS','VisuMZ_3_EvoMatrixSkills','_choices','_lastModifier','some','MessageCore','_mainContainer','drawItem','getEffectText','Title','_lastRank','modRand','VisuMZ_1_MessageCore','startNumberShift','_baseX','SkillListUserName','commandDiceRoll','count','indexOf','createNumberSprite','updateCacheInfo','drawDataText','getNextIntRandomNumberFromSeed','updatePhase','increment','Game_System_initialize','getColor','contents','DiceCount','startMoveToX','updateMove','onDiceRollEffectCancel','ArmorIncludeEquip','isPlaytest','showEffects','outlineColor','ApplyDaily','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','currentExt','SkillCostID','calcWindowHeight','ShowArmorCost','Reset_RngSeed','VisuMZ_1_ItemsEquipsCore','changePaintOpacity','WeaponReqID','clear','setLastPluginCommandInterpreter','ARRAYJSON','ListColumns','\x5cC[16]Dice\x20Count:','return\x200','_settingsKey','DICE_ROLL','remove','_fadeTarget','_diceRoll_EffectsWindow','\x5cC[2]CRITICAL\x20FAILURE!\x5cC[0]','ARRAYSTRUCT','skillMpCost','DataMod_RectJS','EnableSwitchID','2619234GazHGb','DiceSides','_waitMode','DataRank_RectJS','ARRAYNUM','Advantage','finalizeDelay','bind','SetupDiceRoll','moveTo','anySpecificActor','_diceRoll_RankWindow','addBonusCommand','registerCommand','max','ItemReqValue','DiceDisadvantage','VariableReqValue','_context','isDiceBonusEffectIncluded','EVAL','crit_failure','color-%1','isChangingScale','fontSize','_moveTargetX','\x5cC[17]CRITICAL\x20SUCCESS!\x5cC[0]','setupShuffleChoiceSeed','colSpacing','SubtitleBelowEqualTarget','length','lineTo'];_0xcfab=function(){return _0x5536d3;};return _0xcfab();}