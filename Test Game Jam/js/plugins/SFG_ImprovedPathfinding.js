/*:
@plugindesc [v1.1] Enhances pathfinding for RPGMaker MV and MZ
@author Solarflare Software
@target MV MZ

@param Limits

@param defaultSearchLimit
@parent Limits
@text Path Search Limit
@desc Specifies how far to search when finding a path for an event or other character.
@type number
@min 1
@max 99999
@default 12

@param playerSearchLimit
@parent Limits
@text Player Path Search Limit
@desc Specifies how far to search when finding a path for the player.
@type number
@min 1
@max 99999
@default 100

@param airshipSearchLimit
@parent Limits
@text Airship Path Search Limit
@desc Specifies how far to search when finding a path for the airship.
@type number
@min 1
@max 99999
@default 6

@param Teleporters

@param pathThruTransfers
@parent Teleporters
@text Path Through Transfers
@desc Specifies whether the pathfinding should recognize map transfer events that don't change the map as a "tunnel" between tiles.2
@type boolean
@default true
@on yes
@off no

@param transferCost
@parent Teleporters
@text Transfer Cost
@desc A higher number makes the pathfinding less likely to try to pass through transfer events that don't change the map.
@type number
@min 0
@max 99999
@default 2

@param Avoidance

@param dmgFloorCost
@parent Avoidance
@text Damage Floor Cost
@desc The cost to step on a damage floor. If greater than 1, pathfinding will attempt to avoid them.
@type number
@default 10

@param exitCost
@parent Avoidance
@text Map Transfer Cost
@desc The cost to step on an event that transfers to another map. If > 1, pathfinding will attempt to avoid them.
@type number
@default 100

@param bushCost
@parent Avoidance
@text Bush Cost
@desc The cost to step on a bush tile. If greater than 1, pathfinding will attempt to avoid them.
@type number
@default 2

@param ladderCost
@parent Avoidance
@text Ladder Cost
@desc The cost to step on a ladder tile. If greater than 1, pathfinding will attempt to avoid them.
@type number
@default 0

@param bridgeOverCost
@parent Avoidance
@text Bridge Crossing Cost
@desc The cost to pass over a bridge. If greater than 1, pathfinding will attempt to avoid this.
@type number
@default 0

@param bridgeUnderCost
@parent Avoidance
@text Bridge Underpass Cost
@desc The cost to pass under a bridge. If greater than 1, pathfinding will attempt to avoid this.
@type number
@default 0

@param Bridges

@param bridgeEvents
@parent Bridges
@text Bridge events
@desc Whether to path through events that act like an over/under bridge.
@type boolean
@default true

@param bridgeTilesets
@parent Bridges
@text Ttileset swaps
@desc Whether to path through bridges that rely on a tileset swap.
@type boolean
@default true

@param chase
@text Chase Events
@desc Whether to track moving events when you click on them.
@type boolean
@default true
@on yes
@off no

@help
This plugin enhances the pathfinding system used for touch/mouse movement
in RPGMaker MV and MZ, adding a great many options for customizing it.

Note Tags
=========

<PathThru> or <PathThrough> (events, event comments)
  Placed in an event note tag, this allows the player to keep moving when
  the event triggers, no matter which page is active. Placed in an event
  comment, it has the same effect but only if that page is active.
  Note: If the event page contains any of the following commands, the note
  tag will have no effect:
   • Messages of any kind (any command in the Messages section)
   • A move route that applies to the player
   • Commands to enter or exit vehicles
   • A gather followers command
   • Map transfers (even to the same map)

<PathCost:n> (event, event comments)
  Specifies the cost of entering the tile this event is on.
  By default, this is 0 for events set to Below Characters or
  Above Characters, and Infinity for events set to Same as Characters.
  This cost is added to any costs based on other factors, such as the
  underlying tiles on the map.
  Higher numbers means a lower chance of entering this tile while following
  a path. However, if there is no path that avoids the tile, then this will
  not prevent the path from entering it.
  Avoidance of events with transfer commands takes priority over this tag.
  That is, if the event contains a transfer command on the active page,
  its cost will be the Map Transfer Cost from plugin parameters instead of
  whatever this note tag specifies.
  A tag placed in the comments of an individual page takes priority over
  a tag placed in the event note box.

<PathCostUp:n> (event, event comments)
<PathCostDown:n> (event, event comments)
<PathCostLeft:n> (event, event comments)
<PathCostRight:n> (event, event comments)
  Specifies the cost of entering the tile this event is on while moving in
  the indicated direction. If present, this takes priority over the base
  <PathCost> for the given direction (it does not accumulate).

<TagCost[n]:m> (tilesets)
  Specifies the cost of entering a tile with terrain tag n.

<RegionCost[n]:m> (maps)
  Specifies the cost of entering a tile with region ID n.

<BridgeOver:n> (tilesets)
  Indicates that the game intends to swap to tileset N when you need to
  cross over a bridge on the map using this tileset.
  This doesn't effect the swap; it only informs pathfinding about it.

<BridgeUnder:n> (tileset)
  Indicates that the game intends to swap to tileset N when you need to
  pas under a bridge on the map using this tileset.
  This doesn't effect the swap; it only informs pathfinding about it.

<PathChase> (event, event comments)
  Specifies that this event should be tracked when clicked on.

<NoPathChase> (event, event comments)
  Specifies that this event should NOT be tracked when clicked on.

<SearchLimit:n> (tileset, map)
  Override the search limit for events on a given map, or on all maps
  using a given tileset.

<PlayerSearchLimit:n> (tileset, map)
  Override the search limit for the player on a given map, or on all maps
  using a given tileset.

<AirshipSearchLimit:n> (tileset, map)
  Override the search limit for the airship on a given map, or on all maps
  using a given tileset.

Plugin Parameters
=================

Limits
------

These determine how far the game will look when trying to find a path.
A higher number means it will have an easier time getting around obstacles.
However, a higher number will slightly reduce performance, and really high
numbers may cause lag while pathing, especially on maps with few obstacles.

The default Path Search Limit is used by events. However, by default, events
do not use full pathfinding at all. An additional plugin, such as Shaz's
Smart Pathfinding, would be required for this parameter to have any effect.

The Player Path Search Limit is used only when the player is the one
pathfinding, usually as a result of a mouse click.

Because the airship by default can enter any tile, it has a separate
search limit setting. The boat and ship use the Player Path Search
Limit however.

You can override these settings on specific maps or on all maps using a
specific tileset by using the <SearchLimit> or <PlayerSearchLimit>
not tags. A limit set on a map overrides a limit set on a tileset.
You can also override the setting on a specific event by using the
<SearchLimit> note tag in the event note box or an event comment.

Teleporters
-----------

These two parameters allow the pathfinder to treat "teleporters"
as transparent. A teleporter is defined as an event that transfers to a
different location on the same map. By enabling this feature, pathfinding
can even work between two areas that are completely disconnected, as long as
there is a teleporter that connects them. The teleporter does not even need
to be two-way (if it is one-way, pathfinding would only work
in that direction).

The Transfer Cost makes the pathfinder prefer not to use teleporters if
there is another path. The higher the number, the less likely it is to
use teleporters. However, if the teleporter really is the only path,
changing this number will have no effect.

Avoidance
---------

These parameters specify costs of various tiles that the pathfinder will
prefer not to step on if possible. The higher the number, the less likely it
is to step on the tile.

Each of these parameters can be set to 0 to disable the behaviour.

Note that this won't prevent stepping on a tile if it really is the only
path available, but it will try to minimize how many of the tile are passed
through. If the cost is low, the pathfinder may choose to step on a few
of them even if there is a path that could avoid them.

Bridges
-------

The two options here can be used to disable bridge detection if your game does
not use bridges, as the bridge detection may have some performance impact.

The plugin can currently detect three different types of bridges:

1. Bridge events. This is an event that has two pages with the same tile,
   but swaps between them based on some condition (commonly a switch, but
   could be anything). One page is Below Characters, and the other is Above
   Characters. The event may have other pages too – it will only be treated
   as a bridge if one of the bridge pages is currently active.

2. Tileset swaps. For this type of bridge, you set up two tilesets that are
   identical except for the passability settings on the bridges. In one
   tileset, all the bridges are star; in the other, they are NOT star. You
   must then annotate both tilesets with the <BridgeUnder> and <BridgeOver>
   note tags to enable this plugin to recognize that they are used in this
   way.

3. Overpass tiles. The official OverpassTile plugin allows defining a bridge
   via regions. There is no plugin parameter to disable the detection of
   these bridges - they are detected if and only if the OverpassTile plugin
   is enabled.

Chase
-----

The Chase feature means that, if you click on an event that happens to be
moving, the destination will dynamically update as you move so that you end
up hitting the event in the end, rather than simply stopping at the location
the event occupied when you first clicked.

By default, it is enabled for all events that move, either because their
active page settings say so or because they were targeted by a
Set Movement Route command.

You can enable it or disable it on a per-event or per-page basis using
note tags. Note that this will even force it on an event that does not move.

If using SFG_EventTriggers, a <horz> or <vert> note tag in an event will
automatically prevent chase, unless a <PathChase> note tag is also present.
*/

var CAE = CAE || {};

function BridgeInfo() {
    this.initialize.apply(this, arguments);
}

BridgeInfo.prototype.initialize = function() {};

BridgeInfo.prototype.at = function(x,y) {
	return false;
}

/// Return whether it is possible to step off the bridge's tile in the indicated direction.
/// Layer is either 1 (lower level) or 2 (upper level)
BridgeInfo.prototype.canExit = function(who, dir, layer) {
	return false;
};

/// Return whether it is possible to enter the bridge's tile in the indicated direction from the upper level.
BridgeInfo.prototype.canCross = function(who, dir) {
	return false;
};

/// Return whether it is possible to enter the bridge's tile in the indicated direction from the lower level.
BridgeInfo.prototype.canPass = function(who, dir) {
	return false;
};

/// Return whether a character is currently above or below the bridge.
BridgeInfo.prototype.isOnTop = function(who) {
	return false;
};

/// Return whether the bridge can currently be used
BridgeInfo.prototype.isActive = function() {
	return true;
};

function BridgeInfo_Event() {
    this.initialize.apply(this, arguments);
}

BridgeInfo_Event.prototype = Object.create(BridgeInfo.prototype);
BridgeInfo_Event.prototype.constructor = BridgeInfo_Event;

BridgeInfo_Event.prototype.initialize = function(event, below, above, tile) {
	this.eventId = event;
	this.pageBelow = below;
	this.pageAbove = above;
	this.tileId = tile;
};

function BridgeInfo_Tileset() {
    this.initialize.apply(this, arguments);
}

BridgeInfo_Tileset.prototype = Object.create(BridgeInfo.prototype);
BridgeInfo_Tileset.prototype.constructor = BridgeInfo_Tileset;

BridgeInfo_Tileset.prototype.initialize = function(x, y, belowTS, aboveTS, t) {
	this.x = x;
	this.y = y;
	this.belowTS = belowTS;
	this.aboveTS = aboveTS;
	this.tileId = t;
};

function BridgeInfo_Overpass() {
    this.initialize.apply(this, arguments);
}

BridgeInfo_Overpass.prototype = Object.create(BridgeInfo.prototype);
BridgeInfo_Overpass.prototype.constructor = BridgeInfo_Overpass;

BridgeInfo_Overpass.prototype.initialize = function(x, y) {
	this.x = x;
	this.y = y;
};

(function() {
	let params = Utils.parseRecursive(PluginManager.parameters('SFG_ImprovedPathfinding'));
	
	const flatten = function(node) {
		let list = [node];
		while(node.parent) {
			node = node.parent;
			list.push(node);
		}
		list.reverse();
		return list;
	};
	
	/// The core A* pathfinding function
	/// Overrides the core RPGMaker function without aliasing.
	/// The function is mostly unchanged, but I've farmed out as much as I can to external subroutines.
	Game_Character.prototype.findDirectionTo = function(goalX, goalY) {
		var searchLimit = this.searchLimit();
		var nodeList = [];
		var openList = [];
		var closedList = [];
		var start = {};
		var best = start;
	
		if (this.x === goalX && this.y === goalY) {
			this._lastPath = null;
			return 0;
		}
		
		if(this._lastPath) {
			if($gameMap.mapId() == this._lastPath.map && goalX === this._lastPath.goalX && goalY === this._lastPath.goalY) {
				while(this._lastPath.path.length > 0 && (this._lastPath.path[0].x != this.x || this._lastPath.path[0].y != this.y)) {
					this._lastPath.path.shift();
				}
				let node = this._lastPath.path[1];
				if(node) {
					let direction = this.adjacentFindDirectionTo(this.x, this.y, node.seekX, node.seekY, goalX, goalY);
					if(this.canPass(this.x, this.y, direction)) {
						return direction;
					}
				}
			}
		}
		
		var isGoalPassable = $gameMap.checkPassage(goalX, goalY, 0xf);
		if(isGoalPassable) {
			isGoalPassable = $gameMap.eventsXyNt(goalX, goalY).every(evt => !evt.isNormalPriority());
		}
		
		start.parent = null;
		start.x = this.x;
		start.y = this.y;
		start.seekX = this.x;
		start.seekY = this.y;
		start.layer = this.getBridgeLayer();
		start.g = 0;
		start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
		nodeList.push(start);
		openList.push($gameMap.makeTileKey(start.x, start.y, start.layer));
	
		while (nodeList.length > 0) {
			var bestIndex = 0;
			for (var i = 0; i < nodeList.length; i++) {
				if (nodeList[i].f < nodeList[bestIndex].f) {
					bestIndex = i;
				}
			}
	
			var current = nodeList[bestIndex];
			var x1 = current.x;
			var y1 = current.y;
			var pos1 = $gameMap.makeTileKey(x1,y1, current.layer);
			var g1 = current.g;
	
			nodeList.splice(bestIndex, 1);
			openList.splice(openList.indexOf(pos1), 1);
			closedList.push(pos1);
	
			if (current.x === goalX && current.y === goalY) {
				best = current;
				break;
			} else if(!isGoalPassable && $gameMap.distance(current.x, current.y, goalX, goalY) < 2) {
				best = current;
				break;
			}
	
			if (g1 >= searchLimit) {
				continue;
			}
			
			for(var candidate of this.getNeighbors(x1, y1, current.layer)) {
				var [x2, y2] = [candidate.x, candidate.y];
				var pos2 = $gameMap.makeTileKey(x2,y2, candidate.layer);
	
				if (closedList.contains(pos2)) {
					continue;
				}
	
				var g2 = g1 + candidate.cost;
				var index2 = openList.indexOf(pos2);
	
				if (index2 < 0 || g2 < nodeList[index2].g) {
					var neighbor;
					if (index2 >= 0) {
						neighbor = nodeList[index2];
					} else {
						neighbor = {};
						nodeList.push(neighbor);
						openList.push(pos2);
					}
					neighbor.parent = current;
					neighbor.x = x2;
					neighbor.y = y2;
					neighbor.seekX = candidate.enterX;
					neighbor.seekY = candidate.enterY;
					neighbor.layer = candidate.layer;
					neighbor.g = g2;
					neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
					if (!best || neighbor.f - neighbor.g < best.f - best.g) {
						best = neighbor;
					}
				}
			}
		}
	
		var node = best;
		while (node.parent && node.parent !== start) {
			node = node.parent;
		}
		
		this._lastPath = {
			goalX, goalY,
			map: $gameMap.mapId(),
			path: flatten(best),
		};
		
		return this.adjacentFindDirectionTo(start.x, start.y, node.seekX, node.seekY, goalX, goalY);
	};
	
	Game_Character.prototype.adjacentFindDirectionTo = function(startX, startY, seekX, seekY, goalX, goalY) {
		var deltaX1 = $gameMap.deltaX(seekX, startX);
		var deltaY1 = $gameMap.deltaY(seekY, startY);
		if (deltaY1 > 0) {
			return 2;
		} else if (deltaX1 < 0) {
			return 4;
		} else if (deltaX1 > 0) {
			return 6;
		} else if (deltaY1 < 0) {
			return 8;
		}
	
		var deltaX2 = this.deltaXFrom(goalX);
		var deltaY2 = this.deltaYFrom(goalY);
		if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
			return deltaX2 > 0 ? 4 : 6;
		} else if (deltaY2 !== 0) {
			return deltaY2 > 0 ? 8 : 2;
		}
	
		return 0;
	};
	
	/// Returns an iterable yielding all possible neighbours of the tile at (x1,y1), and the cost to enter each.
	/// A neighbour is a tile that can be reached from the current tile in a single step (for example, by pressing any directional key once and immediately releasing it).
	/// Each neighbour has the following attributes:
	///   x,y: The real coordinates of the neighbouring tile.
	///   enterX,enterY: The coordinates of the tile that was entered
	///          This is used for map transfers and represents the coordinates of the tile that has the transfer event placed on it, whereas x,y in such a situation would be the tile transferred to.
	///   cost: The cost to enter the tile.
	///   direction: The direction moved to enter the tile.
	///   layer: A layering number, used for bridge tiles. Usually 0 and ignored.
	/// Default behaviour is that the tiles in the 4 cardinal directions are the only neighbours.
	Game_Character.prototype.getNeighbors = function(x1, y1, layer) {
		var j = 0;
		var owner = this;
		const iter = {
			next() {
				if(j >= 4) return {done: true};
				var direction = 2 + j * 2;
				j++;
				var bridgeFrom = $gameMap.bridge(x1,y1);
				if(bridgeFrom) {
					if(!bridgeFrom.canExit(owner, direction, layer)) return this.next();
				}
				var x2 = $gameMap.roundXWithDirection(x1, direction);
				var y2 = $gameMap.roundYWithDirection(y1, direction);
				var bridgeTo = $gameMap.bridge(x2,y2);
				var toLayer = 0;
				if(bridgeTo) {
					if(bridgeFrom) toLayer = layer || 0;
					else if(bridgeTo.canCross(owner, direction)) toLayer = 2;
					else if(bridgeTo.canPass(owner, direction)) toLayer = 1;
				} else if(!bridgeFrom && !owner.canPathThrough(x1, y1, direction)) {
					return this.next();
				}
				var candidate = {x: x2, y: y2, enterX: x2, enterY: y2, cost: 1, direction: direction, layer: toLayer};
				candidate.cost += owner.getExitCost(x1, y1, direction);
				candidate.cost += owner.getEntryCost(x2, y2, direction);
				return {value: candidate};
			}
		};
		return {[Symbol.iterator]() {return iter;}};
	};
	
	/// Get the cost to step OFF a specific tile from a particular direction.
	/// The specified direction is the direction of movement, so "up" means that the tile is being entered from the bottom.
	/// Called from the default getNeighbors function.
	Game_Character.prototype.getExitCost = function(x, y, dir) {
		if(CAE && CAE.SlopeMove && (dir == 2 || dir == 8)) {
			var region = $gameMap.regionId(x,y);
			if(CAE.SlopeMove.rUp.includes(region) || CAE.SlopeMove.rDn.includes(region)) {
				return 5;
			}
		}
		return 0;
	};
	
	/// Get the cost to step ONTO a specific tile in a specific direction.
	/// Called from the default getNeighbors function.
	Game_Character.prototype.getEntryCost = function(x, y, dir) {
		var cost = 0;
		var events = $gameMap.eventsXy(x,y);
		for(let evt of events) {
			cost += evt.getPathCost(dir);
		}
		if($gameMap.isDamageFloor(x, y)) cost += params.dmgFloorCost;
		if($gameMap.isBush(x,y)) cost += params.bushCost;
		if($gameMap.isLadder(x,y)) cost += params.ladderCost;
		var tag = $gameMap.terrainTag(x,y);
		if(tag > 0) {
			let ts = $gameMap.tileset();
			let note = 'TagCost[%1]'.format(tag);
			if(ts.meta[note]) {
				cost += Number(ts.meta[note]) || 1;
			}
		}
		var region = $gameMap.regionId(x,y);
		if(region > 0) {
			let note = 'RegionCost[%1]'.format(region);
			if($dataMap.meta[note]) {
				cost += Number($dataMap.meta[note]) || 1;
			}
		}
		var bridge = $gameMap.bridge(x,y);
		if(bridge) {
			if(bridge.canCross(this, dir)) cost += params.bridgeOverCost;
			if(bridge.canPass(this, dir)) cost += params.bridgeUnderCost;
		}
		return cost;
	};
	
	const parsePathCost = function(cost) {
		if(cost.match(/inf(inity)?|∞/i)) {
			return Infinity;
		}
		let n = Number(cost);
		if(isNaN(n)) return 1;
		return n;
	};
	
	const getPathCost = function(meta, dir) {
		if(dir == 8 && meta.PathCostUp) {
			return parsePathCost(meta.PathCostUp);
		}
		if(dir == 4 && meta.PathCostLeft) {
			return parsePathCost(meta.PathCostLeft);
		}
		if(dir == 6 && meta.PathCostRight) {
			return parsePathCost(meta.PathCostRight);
		}
		if(dir == 2 && meta.PathCostDown) {
			return parsePathCost(meta.PathCostDown);
		}
		if(meta.PathCost) {
			return parsePathCost(meta.PathCost);
		}
	};
	
	/// Get the cost to cross the tile this event is on.
	Game_Event.prototype.getPathCost = function(dir) {
		// If there's no page active (either none meet the conditions, or the event was erased), then it essentially doesn't exist and thus has no cost to enter.
		if(this._pageIndex == -1) return 0;
		let p = this.page();
		if(p) { // Always true, due to the pageIndex check
			let transfers = p.list.filter(cmd => cmd.code == 201);
			if(transfers.length > 0) return params.exitCost;
			if(p.meta) {
				let cost = getPathCost(p.meta, dir);
				if(cost != undefined) return cost;
			}
		}
		let evt = this.event();
		if(evt.meta) {
			let cost = getPathCost(evt.meta, dir);
			if(cost != undefined) return cost;
		}
		return this.isNormalPriority() ? Infinity : 0;
	};
	
	Game_Event.prototype.searchLimit = function() {
		if(this.page() && this.page().meta && this.page().meta.SearchLimit) {
			let n = Number(this.page().meta.SearchLimit);
			if(n) return n;
		}
		if(this.event() && this.event().meta && this.event().meta.SearchLimit) {
			let n = Number(this.event().meta.SearchLimit);
			if(n) return n;
		}
		return Game_Character.prototype.searchLimit.call(this);
	};
	
	/// Determines whether a space should be treated as passable for pathfinding.
	/// This may be different from actually being passable.
	/// For example, a tree may be impassable, but if a player touch event is placed on it that transfers you somewhere else on the map, you may want pathfinding to treat it as passable.
	Game_Character.prototype.canPathThrough = function(x, y, dir) {
		if(this.isThrough() || this.isDebugThrough()) {
			return true;
		}
		var x2 = $gameMap.roundXWithDirection(x, dir);
		var y2 = $gameMap.roundYWithDirection(y, dir);
		if(this.isMapPassable(x2, y2) && this.isCollidedWithEvents(x2,y2)) {
			// Override pathability based on the PathCost.
			let pathCost = $gameMap.eventsXy(x2,y2).reduce((a,b) => a + b.getPathCost(), 0);
			return pathCost < Infinity;
		}
		return this.canPass(x, y, dir);
	};
	
	Game_Character.prototype.searchLimit = function() {
		if($dataMap.meta.SearchLimit) {
			return Number($dataMap.meta.SearchLimit);
		}
		if($gameMap.tileset().meta.SearchLimit) {
			return Number($gameMap.tileset().meta.SearchLimit);
		}
		return params.defaultSearchLimit;
	};
	
	Game_Character.prototype.getBridgeLayer = function() {
		var bridge = $gameMap.bridge(this.x, this.y);
		if(!bridge) return 0;
		return bridge.isOnTop(this) ? 2 : 1;
	};
	
	Game_Player.prototype.searchLimit = function() {
		var tag = this.isInAirship() ? 'AirshipSearchLimit' : 'PlayerSearchLimit';
		if($dataMap.meta[tag]) {
			return Number($dataMap.meta[tag]);
		}
		if($gameMap.tileset().meta[tag]) {
			return Number($gameMap.tileset().meta[tag]);
		}
		return tag = this.isInAirship() ? params.airshipSearchLimit : params.playerSearchLimit;
	};
	
	Game_Player.prototype.getNeighbors = function(x, y, layer) {
		const N = Game_Character.prototype.getNeighbors.call(this, x, y, layer);
		var owner = this;
		if(params.pathThruTransfers) {
			let baseIter = N[Symbol.iterator]();
			const iter = {
				next() {
					let check = baseIter.next();
					if(check.done) return check;
					var events = $gameMap.eventsXy(check.value.x,check.value.y);
					for(let evt of events) {
						let p = evt.page();
						if(p) {
							let transfer = p.list.find(cmd => cmd.code == 201 && cmd.parameters[1] == $gameMap.mapId());
							if(transfer) {
								check.value.x = transfer.parameters[2];
								check.value.y = transfer.parameters[3];
								// The subtraction is to cancel out the base penalty for transfers.
								check.value.cost += params.transferCost - params.exitCost;
								return check;
							}
						}
					}
					return check;
				}
			};
			return {[Symbol.iterator]() {return iter;}};
		}
		return N;
	};
	
	const old_player_canPass = Utils.makeAliasProxy(Game_Player, 'canPathThrough');
	Game_Player.prototype.canPathThrough = function(x, y, dir) {
		if(params.pathThruTransfers) {
			var x2 = $gameMap.roundXWithDirection(x, dir);
			var y2 = $gameMap.roundYWithDirection(y, dir);
			var events = $gameMap.eventsXy(x2,y2);
			for(let evt of events) {
				if(evt.isLocalTeleporter()) return true;
			}
		}
		return old_player_canPass(this, x, y, dir);
	};
	
	/// Checks whether this event teleports the player to another location on the same map.
	Game_Event.prototype.isLocalTeleporter = function() {
		let p = this.page();
		// If no page is active, then no
		if(!p) return false;
		// If its priority is Same as Characters, only consider it if it triggers on Player Touch or Event Touch.
		// If its priority is Above or Below characters, always consider it.
		if(this.isNormalPriority()) {
			if(p.trigger < 1 || p.trigger > 2) return false;
		}
		let transfer = p.list.find(cmd => cmd.code == 201);
		// If it doesn't contain a transfer command at all, then no
		if(!transfer) return false;
		// If the transfer command specifies a different map, then no.
		if(transfer.parameters[1] != $gameMap.mapId()) return false;
		return true;
	};
	
	/// Check whether this event should interrupt pathfinding when it activates.
	Game_Event.prototype.interruptsPathfinding = function() {
		let evt = this.event();
		if(evt.meta && (evt.meta.PathThru || evt.meta.PathThrough)) {
			return false;
		}
		let page = this.page();
		if(page && page.meta && (page.meta.PathThru || page.meta.PathThrough)) {
			return false;
		}
		return true;
	};
	
	Game_Event.prototype.forcePage = function(pageIndex) {
		if(this._pageIndex != pageIndex) {
			this._pageIndex = pageIndex;
			this.setupPage();
			$gameMap.refreshTileEvents();
		}
	};
	
	const moves = [
		Game_Character.ROUTE_MOVE_DOWN, Game_Character.ROUTE_MOVE_LEFT,
		Game_Character.ROUTE_MOVE_RIGHT, Game_Character.ROUTE_MOVE_UP,
		Game_Character.ROUTE_MOVE_LOWER_L, Game_Character.ROUTE_MOVE_LOWER_R,
		Game_Character.ROUTE_MOVE_UPPER_L, Game_Character.ROUTE_MOVE_UPPER_R,
		Game_Character.ROUTE_MOVE_TOWARD, Game_Character.ROUTE_MOVE_AWAY,
		Game_Character.ROUTE_MOVE_FORWARD, Game_Character.ROUTE_MOVE_BACKWARD,
		Game_Character.ROUTE_MOVE_RANDOM, Game_Character.ROUTE_JUMP,
		Game_Character.ROUTE_SCRIPT,
	];
	Game_Character.prototype.isMoveCommand = function(cmd) {
		return moves.contains(cmd.code);
	};
	Game_Character.prototype.isMoveRouteMoving = function() {
		return this._moveRoute && this._moveRoute.list.some(cmd => this.isMoveCommand(cmd));
	};
	
	Game_Event.prototype.shouldChase = function() {
		let p = this.page();
		if(!p) return false;
		if(p.meta && p.meta.PathChase) return true;
		if(p.mete && p.meta.NoPathChase) return false;
		let e = this.event();
		if(e.meta.PathChase) return true;
		if(e.meta.NoPathChase) return false;
		if(PluginManager.isEnabled("SFG_EventTriggers")) {
			// Don't chase line-trigger events.
			if(e.meta.horz || e.meta.vert) return false;
		}
		// Don't chase events that don't move.
		// For events with a move route, only consider them if the route causes the event to move.
		// There are two ways for an event to have a move route:
		// - "Custom" movement type (moveType = 3)
		// - Forcing (Set Movement Route command)
		if((p.moveType == 3 || this.isMoveRouteForcing()) && !this.isMoveRouteMoving()) {
			return false;
		}
		// For events without a movement route, skip Fixed events (moveType = 0)
		if(p.moveType == 0 && !this.isMoveRouteForcing()) return false;
		return params.chase;
	};
	
	const old_playerCanMove = Game_Player.prototype.canMove;
	Game_Player.prototype.canMove = function() {
		if($gameMap.isEventRunning()) {
			// Temporarily pretend the event is NOT running, and check base canMove.
			let temp = $gameMap._interpreter._list;
			$gameMap._interpreter._list = null;
			let canMove = old_playerCanMove.call(this);
			$gameMap._interpreter._list = temp;
			if(!canMove) return false;
			// Check for a note tag that indicates we can move during this event.
			let evt = $gameMap.event($gameMap._interpreter.eventId());
			if(evt && !evt.interruptsPathfinding()) return true;
			return false;
		}
		return old_playerCanMove.call(this);
	};
	
	Game_Map.prototype.makeTileKey = function(x,y,n) {
		let k = y * this.width() + x;
		if(n > 0) {
			k += n * this.width() * this.height();
		}
		return k;
	};
	
	Game_Map.prototype.bridge = function(x,y) {
		for(let b of this.bridges) {
			if(b.isActive() && b.at(x,y)) return b;
		}
		return false;
	};
	
	const old_onMapSetup = Game_Map.prototype.setup;
	Game_Map.prototype.setup = function(obj) {
		old_onMapSetup.call(this, obj);
		this.refreshBridges();
	}
	
	Game_Map.prototype.refreshBridges = function() {
		this.bridges = [];
		if(this.mapId() < 1) return;
		if(params.bridgeEvents) {
			// Event bridges - there's a page where the bridge is below characters and a page where it's above characters.
			// I currently require both pages to have the same tile ID. Perhaps that requirement could be relaxed later.
			for(let i = 1; i < $dataMap.events.length; i++) {
				let event = $dataMap.events[i];
				if(!event) continue;
				for(let j = 0; j < event.pages.length; j++) {
					let pageBelow = event.pages[j];
					if(pageBelow.image.tileId && pageBelow.trigger < 3 && pageBelow.priorityType == 0) {
						for(let k = 0; k < event.pages.length; k++) {
							let pageAbove = event.pages[k];
							if(pageAbove.priorityType == 2 && pageAbove.trigger < 3 && pageAbove.image.tileId == pageBelow.image.tileId) {
								// It looks like a bridge!
								// Store it as such.
								this.bridges.push(new BridgeInfo_Event(i, j, k, pageBelow.image.tileId));
							}
						}
					}
				}
			}
		}
		if(params.bridgeTilesets && (this.tileset().meta.BridgeOver || this.tileset().meta.BridgeUnder)) {
			// This is a bridge that works by swapping the tileset. One tileset specifies the bridge as star passability, the other specifies it as NOT star. Normally it would be passable in the second tileset; we don't require that however.
			let belowTS, aboveTS;
			if(this.tileset().meta.BridgeOver) {
				belowTS = $dataTilesets[Number(this.tileset().meta.BridgeOver)];
				aboveTS = this.tileset();
			} else {
				belowTS = this.tileset();
				aboveTS = $dataTilesets[Number(this.tileset().meta.BridgeUnder)];
			}
			if(belowTS && aboveTS) {
				for(let x = 0; x < this.width(); x++) {
					for(let y = 0; y < this.height(); y++) {
						let tiles  = this.layeredTiles(x,y);
						for(let t of tiles) {
							if((belowTS.flags[t] & 0x10) !== 0 && (aboveTS.flags[t] & 0x10) === 0) {
								// Found a bridge!
								this.bridges.push(new BridgeInfo_Tileset(x, y, belowTS.id, aboveTS.id, t));
								break; // Don't check the other tiles on this space
							}
						}
					}
				}
			}
		}
	};
	
	BridgeInfo_Event.prototype.at = function(x,y) {
		return $gameMap.event(this.eventId).pos(x,y);
	};
	
	BridgeInfo_Event.prototype.forceLayer = function(layer) {
		var event = $gameMap.event(this.eventId);
		var savePage = event._pageIndex;
		var targetPage;
		if(layer == 1) {
			// Below bridge (bridge is above the character)
			targetPage = this.pageAbove;
		} else if(layer == 2) {
			// Above bridge (bridge is below the character)
			targetPage = this.pageBelow;
		}
		event.forcePage(targetPage);
		return savePage;
	};
	
	BridgeInfo_Event.prototype.canExit = function(who, dir, layer) {
		var event = $gameMap.event(this.eventId);
		var x = event.x, y = event.y;
		if(layer < 1 || layer > 2) return false;
		var savePage = this.forceLayer(layer);
		var fromBridge = $gameMap.bridge($gameMap.roundXWithDirection(x, dir), $gameMap.roundYWithDirection(y, dir));
		if(fromBridge instanceof BridgeInfo_Event) {
			var savePage2 = fromBridge.forceLayer(layer);
		}
		let result = who.isMapPassable(x, y, dir);
		event.forcePage(savePage);
		if(fromBridge instanceof BridgeInfo_Event) {
			$gameMap.event(fromBridge.eventId).forcePage(savePage2);
		}
		return result;
	};
	
	BridgeInfo_Event.prototype.canCross = function(who, dir) {
		dir = who.reverseDir(dir);
		var event = $gameMap.event(this.eventId);
		var x = event.x, y = event.y;
		var savePage = this.forceLayer(2);
		var toBridge = $gameMap.bridge($gameMap.roundXWithDirection(x, dir), $gameMap.roundYWithDirection(y, dir));
		if(toBridge instanceof BridgeInfo_Event) {
			var savePage2 = toBridge.forceLayer(2);
		}
		let result = who.isMapPassable(x, y, dir);
		event.forcePage(savePage);
		if(toBridge instanceof BridgeInfo_Event) {
			$gameMap.event(toBridge.eventId).forcePage(savePage2);
		}
		return result;
	};
	
	BridgeInfo_Event.prototype.canPass = function(who, dir) {
		dir = who.reverseDir(dir);
		var event = $gameMap.event(this.eventId);
		var x = event.x, y = event.y;
		var savePage = this.forceLayer(1);
		var toBridge = $gameMap.bridge($gameMap.roundXWithDirection(x, dir), $gameMap.roundYWithDirection(y, dir));
		if(toBridge instanceof BridgeInfo_Event) {
			var savePage2 = toBridge.forceLayer(1);
		}
		let result = who.isMapPassable(x, y, dir);
		event.forcePage(savePage);
		if(toBridge instanceof BridgeInfo_Event) {
			$gameMap.event(toBridge.eventId).forcePage(savePage2);
		}
		return result;
	};
	
	BridgeInfo_Event.prototype.isOnTop = function(who) {
		var event = $gameMap.event(this.eventId);
		return event._pageIndex == this.pageBelow;
	};
	
	BridgeInfo_Event.prototype.isActive = function() {
		var event = $gameMap.event(this.eventId);
		return event._pageIndex == this.pageAbove || event._pageIndex == this.pageBelow;
	};
	
	BridgeInfo_Tileset.prototype.at = function(x,y) {
		return this.x == x && this.y == y;
	};
	
	BridgeInfo_Tileset.prototype.canExit = function(who, dir, layer) {
		var saveTS = $gameMap.tilesetId();
		var targetTS;
		if(layer == 1) {
			targetTS = this.belowTS;
		} else if(layer == 2) {
			targetTS = this.aboveTS;
		} else return false;
		if(saveTS != targetTS) $gameMap.changeTileset(targetTS);
		let result = who.isMapPassable(this.x, this.y, dir);
		if(saveTS != targetTS) $gameMap.changeTileset(saveTS);
		return result;
	};
	
	BridgeInfo_Tileset.prototype.canCross = function(who, dir) {
		dir = who.reverseDir(dir);
		var saveTS = $gameMap.tilesetId();
		if(saveTS != this.aboveTS) $gameMap.changeTileset(this.aboveTS);
		let result = who.isMapPassable(this.x, this.y, dir);
		if(saveTS != this.aboveTS) $gameMap.changeTileset(saveTS);
		return result;
	};
	
	BridgeInfo_Tileset.prototype.canPass = function(who, dir) {
		dir = who.reverseDir(dir);
		var saveTS = $gameMap.tilesetId();
		if(saveTS != this.belowTS) $gameMap.changeTileset(this.belowTS);
		let result = who.isMapPassable(this.x, this.y, dir);
		if(saveTS != this.belowTS) $gameMap.changeTileset(saveTS);
		return result;
	};
	
	BridgeInfo_Tileset.prototype.isOnTop = function(who) {
		return $gameMap.tilesetId() == this.aboveTS;
	};
	
	if(PluginManager.isEnabled("OverpassTile")) {
		BridgeInfo_Overpass.prototype.at = function(x,y) {
			return this.x == x && this.y == y;
		};
		
		// There are two different plugins with the same name:
		// * The MV version of OverpassTile
		// * The MZ version of OverpassTile
		// I think both versions probably work in both engines,
		// though I'm not completely certain.
		// Thus, I use the plugin parameters to distinguish them instead
		// of checking whether I'm in MZ.
		var opParams = PluginManager.parameters('OverpassTile');
		let isOverpassMZ = 'gatewayTerrainTag' in opParams;
		if(isOverpassMZ) {
			const old_refreshBridges = Game_Map.prototype.refreshBridges;
			Game_Map.prototype.refreshBridges = function() {
				old_refreshBridges.call(this);
				for(let x = 0; x < $gameMap.width(); x++) {
					for(let y = 0; y < $gameMap.height(); y++) {
						if($gameMap.isOverPath()) {
							this.bridges.push(new BridgeInfo_Overpass(x, y));
						}
					}
				}
			};
			
			BridgeInfo_Overpass.prototype.canExit = function(who, dir, layer) {
				var level = who._higher;
				if(layer == 1) {
					who._higher = false;
				} else if(layer == 2) {
					who._higher = true;
				} else {
					return false;
				}
				let result = who.isMapPassable(this.x, this.y, dir);
				$gamePlayer._higher = level;
				return result;
			};
			
			BridgeInfo_Overpass.prototype.canCross = function(who, dir) {
				dir = who.reverseDir(dir);
				var level = who._higher;
				who._higher = true;
				let result = who.isMapPassable(this.x, this.y, dir);
				$gamePlayer._higher = level;
				return result;
			};
			
			BridgeInfo_Overpass.prototype.canPass = function(who, dir) {
				dir = who.reverseDir(dir);
				var level = who._higher;
				who._higher = false;
				let result = who.isMapPassable(this.x, this.y, dir);
				$gamePlayer._higher = level;
				return result;
			};
			
			BridgeInfo_Overpass.prototype.isOnTop = function(who) {
				return who._higher;
			};
			
			const old_canPass = Game_Character.prototype.canPathThrough;
			Game_Character.prototype.canPathThrough = function(x, y, dir) {
				if(this._higher && !$gameMap.isOverPath(x,y) && !$gameMap.isGatewayOverPath(x,y)) {
					this._higher = false;
					let result = old_canPass.call(this, x, y, dir);
					this._higher = true;
					return result;
				}
				return old_canPass.call(this, x, y, dir);
			};
		} else {
			var overpassRegion = Number(opParams['Overpass Region ID'] || 255);
			var gatewayRegion = Number(opParams['Gateway Region ID'] || 254);
			
			const old_refreshBridges = Game_Map.prototype.refreshBridges;
			Game_Map.prototype.refreshBridges = function() {
				old_refreshBridges.call(this);
				for(let x = 0; x < $gameMap.width(); x++) {
					for(let y = 0; y < $gameMap.height(); y++) {
						if($gameMap.regionId(x, y) == overpassRegion) {
							this.bridges.push(new BridgeInfo_Overpass(x, y));
						}
					}
				}
			};
			
			BridgeInfo_Overpass.prototype.canExit = function(who, dir, layer) {
				var level = who._higherLevel;
				if(layer == 1) {
					who._higherLevel = false;
				} else if(layer == 2) {
					who._higherLevel = true;
				} else {
					return false;
				}
				let result = who.isMapPassable(this.x, this.y, dir);
				who._higherLevel = level;
				return result;
			};
			
			BridgeInfo_Overpass.prototype.canCross = function(who, dir) {
				dir = who.reverseDir(dir);
				var level = who._higherLevel;
				who._higherLevel = true;
				let result = who.isMapPassable(this.x, this.y, dir);
				who._higherLevel = level;
				return result;
			};
			
			BridgeInfo_Overpass.prototype.canPass = function(who, dir) {
				dir = who.reverseDir(dir);
				var level = who._higherLevel;
				who._higherLevel = false;
				let result = who.isMapPassable(this.x, this.y, dir);
				who._higherLevel = level;
				return result;
			};
			
			BridgeInfo_Overpass.prototype.isOnTop = function(who) {
				return who._higherLevel;
			};
			
			const old_canPass = Game_Character.prototype.canPathThrough;
			Game_Character.prototype.canPathThrough = function(x, y, dir) {
				var region = $gameMap.regionId(x,y);
				if(this._higherLevel && region != overpassRegion && region != gatewayRegion) {
					this._higherLevel = false;
					let result = old_canPass.call(this, x, y, dir);
					this._higherLevel = true;
					return result;
				}
				return old_canPass.call(this, x, y, dir);
			};
		}
	}
	
	Game_Temp.prototype.setDestination = function(x, y) {
		for(let evt of $gameMap.eventsXy(x, y)) {
			if(evt.shouldChase()) {
				this._destinationEvt = evt.eventId();
				return;
			}
		}
		// If we were previously tracking an event, stop.
		this._destinationEvt = null;
		this._destinationX = x;
		this._destinationY = y;
	};

	Game_Temp.prototype.clearDestination = function() {
		this._destinationX = null;
		this._destinationY = null;
		this._destinationEvt = null;
	};

	Game_Temp.prototype.isDestinationValid = function() {
		return this._destinationX !== null || this._destinationEvt != null;
	};
	
	Game_Temp.prototype.destinationX = function() {
		if(this._destinationEvt) {
			return $gameMap.event(this._destinationEvt).x;
		}
		return this._destinationX;
	};
	
	Game_Temp.prototype.destinationY = function() {
		if(this._destinationEvt) {
			return $gameMap.event(this._destinationEvt).y;
		}
		return this._destinationY;
	};
})();
