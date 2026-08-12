/*:
@plugindesc [v0.1beta] Enhances pathfinding for RPGMaker MV and MZ
@author Solarflare Software
@target MV MZ

@param defaultSearchLimit
@text Path Search Limit
@desc Specifies how far to search when finding a path for an event or other character.
@type number
@min 1
@max 99999
@default 12

@param playerSearchLimit
@text Player Path Search Limit
@desc Specifies how far to search when finding a path for the player.
@type number
@min 1
@max 99999
@default 100

@help
This plugin enhances the pathfinding system used for touch/mouse movement
in RPGMaker MV and MZ, adding a great many options for customizing it.
*/

var CAE = CAE || {};

(function() {
	let params = Utils.parseRecursive(PluginManager.parameters('SFG_Pathfinding'));
	
	// The core A* pathfinding function
	// Overrides the core RPGMaker function without aliasing.
	// The function is mostly unchanged, but I've farmed out as much as I can to
	// external subroutines.
	Game_Character.prototype.findDirectionTo = function(goalX, goalY) {
		var searchLimit = this.searchLimit();
		var mapWidth = $gameMap.width();
		var nodeList = [];
		var openList = [];
		var closedList = [];
		var start = {};
		var best = start;
	
		if (this.x === goalX && this.y === goalY) {
			return 0;
		}
	
		start.parent = null;
		start.x = this.x;
		start.y = this.y;
		start.g = 0;
		start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
		nodeList.push(start);
		openList.push(start.y * mapWidth + start.x);
	
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
			var pos1 = y1 * mapWidth + x1;
			var g1 = current.g;
	
			nodeList.splice(bestIndex, 1);
			openList.splice(openList.indexOf(pos1), 1);
			closedList.push(pos1);
	
			if (current.x === goalX && current.y === goalY) {
				best = current;
				break;
			}
	
			if (g1 >= searchLimit) {
				continue;
			}
			
			for(var candidate of this.getNeighbors(x1, y1)) {
				var [x2, y2] = [candidate.x, candidate.y];
				var pos2 = y2 * mapWidth + x2;
	
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
	
		var deltaX1 = $gameMap.deltaX(node.x, start.x);
		var deltaY1 = $gameMap.deltaY(node.y, start.y);
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
	
	Game_Character.prototype.getNeighbors = function(x1, y1) {
		var j = 0;
		var owner = this;
		const iter = {
			next() {
				if(j >= 4) return {done: true};
				var direction = 2 + j * 2;
				j++;
				if(!owner.canPass(x1, y1, direction)) {
					return this.next();
				}
				var x2 = $gameMap.roundXWithDirection(x1, direction);
				var y2 = $gameMap.roundYWithDirection(y1, direction);
				var candidate = {x: x2, y: y2, cost: 1};
				candidate.cost += owner.getExitCost(x1, y1, direction);
				candidate.cost += owner.getEntryCost(x2, y2, direction);
				return {value: candidate};
			}
		};
		return {[Symbol.iterator]() {return iter;}};
	};
	
	Game_Character.prototype.getExitCost = function(x, y, dir) {
		if(CAE && CAE.SlopeMove && (dir == 2 || dir == 8)) {
			var region = $gameMap.regionId(x,y);
			if(CAE.SlopeMove.rUp.includes(region) || CAE.SlopeMove.rDn.includes(region)) {
				return 5;
			}
		}
		return 0;
	};
	
	Game_Character.prototype.getEntryCost = function(x, y, dir) {
		if($gameMap.isDamageFloor(x, y)) return 10;
		if($gameMap.isBush(x,y)) return 2;
		var events = $gameMap.eventsXy(x,y);
		for(let evt of events) {
			if(!evt.isNormalPriority()) {
				let p = evt.page();
				if(p) {
					let transfers = p.list.filter(cmd => cmd.code == 201);
					if(transfers.length > 0) return 100;
				}
			}
		}
		return 0;
	};
	
	Game_Character.prototype.searchLimit = function() {
		return params.defaultSearchLimit;
	};
	
	Game_Player.prototype.searchLimit = function() {
		return params.playerSearchLimit;
	};
})();
