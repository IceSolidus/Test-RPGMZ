// ========================================================================
// WindowsetBuilder.js
// ========================================================================

/*:
 * @target MZ
 * @plugindesc Gestion des skins et décorations de fenêtre (généré automatiquement par Windowset Builder)
 * @author Windowset Builder
 * @managedBy WindowsetBuilder
 * @managedVersion 0.0.1
 * @managedSchema ws_v1
 *
 * @help
 * Ce plugin est généré automatiquement par Windowset Builder.
 * Les modifications manuelles seront écrasées au prochain export.
 *
 * Les paramètres préfixés par "ws_" sont gérés par Windowset Builder.
 * Ne les modifiez pas à la main : réexportez le projet depuis WSB.
 *
 * @param ws_windowElements
 * @text Éléments de fenêtre (tableau JSON)
 * @type string
 * @default []
 *
 * @param ws_sceneTransitions
 * @text Transitions par scène (JSON)
 * @desc Transitions d’ouverture/fermeture par scène de menu (Scene_Menu, Scene_Item, ...). Objet vide les désactive. Géré par Windowset Builder.
 * @type string
 * @default {}
 *
 * @param ws_composerSelections
 * @text Sélections du compositeur WSB (JSON, interne)
 * @desc Instantané des onglets du compositeur en mode facile de WSB. Non utilisé à l’exécution ; restauré à la réouverture dans WSB.
 * @type string
 * @default {}
 *
 * @param ws_customWindows
 * @text Fenêtres personnalisées WSB (JSON, interne)
 * @desc Instantané des fenêtres personnalisées multi-instances. Non utilisé à l’exécution ; restauré à la réouverture dans WSB.
 * @type string
 * @default []
 *
 * @param ws_sceneAnims
 * @text Animations de scène WSB (JSON, interne)
 * @desc Instantané des réglages d’animation d’ouverture/fermeture par scène. Non utilisé à l’exécution (intégré aux installateurs) ; restauré à la réouverture dans WSB.
 * @type string
 * @default {}
 *
 * @param ws_categorySkins
 * @text Skins de fenêtre par catégorie (repli, JSON)
 * @desc Skins de repli par catégorie MADO (dialogue/menu/combat/autres), appliqués uniquement aux classes de fenêtre non gérées de cette catégorie (p. ex., habiller le menu s’applique aux fenêtres objets/compétences). Les skins par fenêtre priment. Géré par Windowset Builder.
 * @type string
 * @default {}
 *
 */

(function() {
  "use strict";

  (function() {
    if (typeof ImageManager === "undefined" || typeof ImageManager.loadSystem !== "function") return;
    if (ImageManager._wsbSubdirHooked) return;
    ImageManager._wsbSubdirHooked = true;
    var _wsp_loadSystem = ImageManager.loadSystem;
    ImageManager.loadSystem = function(filename, hue) {
      if (typeof filename === "string" && /^Window_(WSB|LIB)_/.test(filename)) {
        return this.loadBitmap("img/system/wsb/", filename, hue || 0, true);
      }
      return _wsp_loadSystem.call(this, filename, hue);
    };
  })();

  (function() {
    if (typeof TilingSprite === "undefined" || !TilingSprite.prototype) return;
    if (TilingSprite.prototype._wsbNullBitmapGuard) return;
    var _wsp_ts_onBitmapLoad = TilingSprite.prototype._onBitmapLoad;
    if (typeof _wsp_ts_onBitmapLoad !== "function") return;
    TilingSprite.prototype._wsbNullBitmapGuard = true;
    TilingSprite.prototype._onBitmapLoad = function() {
      if (!this._bitmap) return;
      return _wsp_ts_onBitmapLoad.apply(this, arguments);
    };
  })();

  var pluginName = "WindowsetBuilder";
  var params = PluginManager.parameters(pluginName);

  function ws_parseJSON(s) { try { return JSON.parse(s); } catch (e) { return null; } }

  var ws_windowElements = (ws_parseJSON(params["ws_windowElements"] || "[]") || []).map(function(e) {
    return typeof e === "string" ? ws_parseJSON(e) : e;
  }).filter(Boolean);
  var ws_categorySkins = ws_parseJSON(params["ws_categorySkins"] || "{}") || {};

  function ws_isPluginEnabled(name) {
    return typeof $plugins !== "undefined" && !!$plugins && $plugins.some(function(p) {
      return p && p.name === name && p.status;
    });
  }

  function ws_applyWindowskin(win, skinName) {
    if (!win || !skinName) return;
    win._windowskin = ImageManager.loadSystem(skinName);
    var _wsp_doRefresh = function() {
      if (typeof win._refreshAllParts === "function") {
        try { win._refreshAllParts(); } catch (e) { /* ignore */ }
      }
      if (typeof win.refresh === "function") {
        try { win.refresh(); } catch (e) { /* ignore */ }
      }
    };
    if (win._windowskin && win._windowskin.isReady && win._windowskin.isReady()) {
      _wsp_doRefresh();
    } else if (win._windowskin && typeof win._windowskin.addLoadListener === "function") {
      win._windowskin.addLoadListener(_wsp_doRefresh);
    }
  }

  (function() {
    var _wsp_catOf = {
      Window_ItemList: 'status', Window_SkillType: 'status', Window_SkillList: 'status',
      Window_SkillStatus: 'status', Window_EquipStatus: 'status', Window_EquipCommand: 'status',
      Window_EquipSlot: 'status', Window_EquipItem: 'status', Window_Status: 'status',
      Window_StatusParams: 'status', Window_StatusEquip: 'status', Window_GameEnd: 'status',
      Window_MenuActor: 'status', Window_EventItem: 'talk', Window_Gold: 'status',
      Window_NumberInput: 'talk', Window_ShopBuy: 'other', Window_ShopSell: 'other',
      Window_ShopNumber: 'other', Window_ShopStatus: 'other', Window_NameInput: 'other',
      Window_MapName: 'other', Window_ScrollText: 'talk'
    };
    var _wsp_names = Object.keys(_wsp_catOf);
    for (var _wsp_si = 0; _wsp_si < _wsp_names.length; _wsp_si++) {
      (function(_wsp_cn) {
        var _wsp_skin = ws_categorySkins[_wsp_catOf[_wsp_cn]];
        if (!_wsp_skin || _wsp_skin === "Window") return;
        var _wsp_C = window[_wsp_cn];
        if (!_wsp_C || !_wsp_C.prototype || !_wsp_C.prototype.initialize) return;
        if (_wsp_C.prototype._wsp_catSkinHooked) return;
        _wsp_C.prototype._wsp_catSkinHooked = true;
        var _wsp_origInit = _wsp_C.prototype.initialize;
        _wsp_C.prototype.initialize = function() {
          _wsp_origInit.apply(this, arguments);
          ws_applyWindowskin(this, _wsp_skin);
        };
      })(_wsp_names[_wsp_si]);
    }
  })();

  var _wsp_titleCmd_element = {"key":"titleCmd","targetClass":"Window_TitleCommand","hookType":"sceneRect","x":998,"y":388,"w":282,"h":246,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Title Command","visible":true,"windowskin":"Window_WSB_titleCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","confirmEffect":{"type":"cursorGlow"},"opacityGradient":{"h":[{"p":0,"a":0.6},{"p":0.513,"a":1},{"p":1,"a":0.6}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#7afffd","a":0.39}},"sceneAnim":{"in":{"move":{"direction":"right","distance":"screen_1_4","tween":"easeOut"},"delay":{"order":"none","timing":"normal"},"speed":"slow"},"out":{"move":{"direction":"right","distance":"screen_1_4","tween":"easeOut"},"delay":{"order":"none","timing":"normal"},"speed":"slow"}}};
  (function() {
    var el = _wsp_titleCmd_element;
    if (true) {
      if (typeof Scene_Title !== 'undefined' && Scene_Title.prototype && Scene_Title.prototype.commandWindowRect) {
        var _wsp_titleCmd_commandWindowRect = Scene_Title.prototype.commandWindowRect;
        Scene_Title.prototype.commandWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Title.prototype._wsp_titleCmd_original_commandWindowRect = _wsp_titleCmd_commandWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_titleCmd_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_titleCmd_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_menu_element = {"key":"menu","targetClass":"Window_MenuCommand","hookType":"sceneRect","x":8,"y":212,"w":228,"h":335,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Menu Command","visible":true,"windowskin":"Window_WSB_menu","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","roundBgCorners":false,"confirmEffect":{"type":"ripple","amp":20},"opacityGradient":{"h":[{"p":0,"a":0.46},{"p":0.458,"a":1},{"p":1,"a":0.46}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#8bebfe","a":0.19}}};
  (function() {
    var el = _wsp_menu_element;
    if (!ws_isPluginEnabled("AltMenuScreen")) {
      if (typeof Scene_Menu !== 'undefined' && Scene_Menu.prototype && Scene_Menu.prototype.commandWindowRect) {
        var _wsp_menu_commandWindowRect = Scene_Menu.prototype.commandWindowRect;
        Scene_Menu.prototype.commandWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Menu.prototype._wsp_menu_original_commandWindowRect = _wsp_menu_commandWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_menu_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_menu_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_status_element = {"key":"status","targetClass":"Window_MenuStatus","hookType":"sceneRect","x":409,"y":222,"w":510,"h":294,"opacity":0.9803921568627451,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Menu Status","visible":true,"windowskin":"Window_WSB_status","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","roundBgCorners":false,"confirmEffect":{"type":"cursorGlow"},"opacityGradient":{"h":[{"p":0,"a":0.46},{"p":0.464,"a":1},{"p":1,"a":0.46}]},"itemBackground":{"v":true,"t":{"h":"#ffb3b3","a":0.72},"b":{"h":"#a9fef4","a":0.65}}};
  (function() {
    var el = _wsp_status_element;
    if (!ws_isPluginEnabled("AltMenuScreen")) {
      if (typeof Scene_Menu !== 'undefined' && Scene_Menu.prototype && Scene_Menu.prototype.statusWindowRect) {
        var _wsp_status_statusWindowRect = Scene_Menu.prototype.statusWindowRect;
        Scene_Menu.prototype.statusWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Menu.prototype._wsp_status_original_statusWindowRect = _wsp_status_statusWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_status_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_status_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_gold_element = {"key":"gold","targetClass":"Window_Gold","hookType":"sceneRect","x":8,"y":650,"w":223,"h":57,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Gold Window","visible":true,"windowskin":"Window_WSB_gold","bgPartId":"000","framePartId":"user:ua_msfssllf_1","roundBgCorners":false,"opacityGradient":{"h":[{"p":0,"a":0.46},{"p":0.464,"a":1},{"p":1,"a":0.46}]}};
  (function() {
    var el = _wsp_gold_element;
    if (true) {
      if (typeof Scene_Menu !== 'undefined' && Scene_Menu.prototype && Scene_Menu.prototype.goldWindowRect) {
        var _wsp_gold_goldWindowRect = Scene_Menu.prototype.goldWindowRect;
        Scene_Menu.prototype.goldWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Menu.prototype._wsp_gold_original_goldWindowRect = _wsp_gold_goldWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_gold_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_gold_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_options_element = {"key":"options","targetClass":"Window_Options","hookType":"sceneRect","x":440,"y":194,"w":400,"h":332,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Options","visible":true,"windowskin":"Window_WSB_options","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":false,"t":{"h":"#202020","a":0.5},"b":{"h":"#000000","a":0.5}}};
  (function() {
    var el = _wsp_options_element;
    if (!ws_isPluginEnabled("OptionEx")) {
      if (typeof Scene_Options !== 'undefined' && Scene_Options.prototype && Scene_Options.prototype.optionsWindowRect) {
        var _wsp_options_optionsWindowRect = Scene_Options.prototype.optionsWindowRect;
        Scene_Options.prototype.optionsWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Options.prototype._wsp_options_original_optionsWindowRect = _wsp_options_optionsWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_options_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_options_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_itemCat_element = {"key":"itemCat","targetClass":"Window_ItemCategory","hookType":"sceneRect","x":0,"y":154,"w":1272,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Item Category","visible":true,"windowskin":"Window_WSB_itemCat","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9aedfe","a":0.78}}};
  (function() {
    var el = _wsp_itemCat_element;
    if (true) {
      if (typeof Scene_Item !== 'undefined' && Scene_Item.prototype && Scene_Item.prototype.categoryWindowRect) {
        var _wsp_itemCat_categoryWindowRect = Scene_Item.prototype.categoryWindowRect;
        Scene_Item.prototype.categoryWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Item.prototype._wsp_itemCat_original_categoryWindowRect = _wsp_itemCat_categoryWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_itemCat_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_itemCat_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_save_element = {"key":"save","targetClass":"Window_SavefileList","hookType":"sceneRect","x":4,"y":100,"w":1272,"h":616,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Savefile List","visible":true,"windowskin":"Window_WSB_save","framePartId":"000"};
  (function() {
    var el = _wsp_save_element;
    if (!ws_isPluginEnabled("AltSaveScreen")) {
      if (typeof Scene_File !== 'undefined' && Scene_File.prototype && Scene_File.prototype.listWindowRect) {
        var _wsp_save_listWindowRect = Scene_File.prototype.listWindowRect;
        Scene_File.prototype.listWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          var _wsp_hh = this._helpWindow ? this._helpWindow.height : 0;
          var _wsp_top = this.mainAreaTop ? this.mainAreaTop() : 0;
          var _wsp_mh = this.mainAreaHeight ? this.mainAreaHeight() : (el.h + _wsp_hh);
          return new Rectangle(el.x - _wsp_mx, _wsp_top + _wsp_hh, el.w, _wsp_mh - _wsp_hh);
        };
        Scene_File.prototype._wsp_save_original_listWindowRect = _wsp_save_listWindowRect;
        if (Scene_File.prototype.helpWindowRect) {
          var _wsp_save_helpRect = Scene_File.prototype.helpWindowRect;
          Scene_File.prototype.helpWindowRect = function() {
            var _wsp_hr = _wsp_save_helpRect.call(this);
            var _wsp_hmx = (Graphics.width - Graphics.boxWidth) / 2;
            return new Rectangle(el.x - _wsp_hmx, _wsp_hr.y, el.w, _wsp_hr.height);
          };
        }
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_save_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_save_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_itemList_element = {"key":"itemList","targetClass":"Window_ItemList","hookType":"sceneRect","x":4,"y":224,"w":1272,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Item List","visible":true,"windowskin":"Window_WSB_itemList","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#b3f2ff","a":0.71}}};
  (function() {
    var el = _wsp_itemList_element;
    if (true) {
      if (typeof Scene_Item !== 'undefined' && Scene_Item.prototype && Scene_Item.prototype.itemWindowRect) {
        var _wsp_itemList_itemWindowRect = Scene_Item.prototype.itemWindowRect;
        Scene_Item.prototype.itemWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Item.prototype._wsp_itemList_original_itemWindowRect = _wsp_itemList_itemWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_itemList_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_itemList_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_skillType_element = {"key":"skillType","targetClass":"Window_SkillType","hookType":"sceneRect","x":1036,"y":154,"w":240,"h":156,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Skill Type","visible":true,"windowskin":"Window_WSB_skillType","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fdff","a":0.56}}};
  (function() {
    var el = _wsp_skillType_element;
    if (true) {
      if (typeof Scene_Skill !== 'undefined' && Scene_Skill.prototype && Scene_Skill.prototype.skillTypeWindowRect) {
        var _wsp_skillType_skillTypeWindowRect = Scene_Skill.prototype.skillTypeWindowRect;
        Scene_Skill.prototype.skillTypeWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Skill.prototype._wsp_skillType_original_skillTypeWindowRect = _wsp_skillType_skillTypeWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_skillType_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_skillType_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_skillStatus_element = {"key":"skillStatus","targetClass":"Window_SkillStatus","hookType":"sceneRect","x":4,"y":151,"w":1032,"h":156,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Skill Status","visible":true,"windowskin":"Window_WSB_skillStatus","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fdff","a":0.56}}};
  (function() {
    var el = _wsp_skillStatus_element;
    if (true) {
      if (typeof Scene_Skill !== 'undefined' && Scene_Skill.prototype && Scene_Skill.prototype.statusWindowRect) {
        var _wsp_skillStatus_statusWindowRect = Scene_Skill.prototype.statusWindowRect;
        Scene_Skill.prototype.statusWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Skill.prototype._wsp_skillStatus_original_statusWindowRect = _wsp_skillStatus_statusWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_skillStatus_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_skillStatus_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_skillList_element = {"key":"skillList","targetClass":"Window_SkillList","hookType":"sceneRect","x":4,"y":312,"w":1272,"h":408,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Skill List","visible":true,"windowskin":"Window_WSB_skillList","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fdff","a":0.56}}};
  (function() {
    var el = _wsp_skillList_element;
    if (true) {
      if (typeof Scene_Skill !== 'undefined' && Scene_Skill.prototype && Scene_Skill.prototype.itemWindowRect) {
        var _wsp_skillList_itemWindowRect = Scene_Skill.prototype.itemWindowRect;
        Scene_Skill.prototype.itemWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Skill.prototype._wsp_skillList_original_itemWindowRect = _wsp_skillList_itemWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_skillList_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_skillList_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_equipCmd_element = {"key":"equipCmd","targetClass":"Window_EquipCommand","hookType":"sceneRect","x":316,"y":156,"w":960,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Command","visible":true,"windowskin":"Window_WSB_equipCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#94edff","a":0.61}}};
  (function() {
    var el = _wsp_equipCmd_element;
    if (true) {
      if (typeof Scene_Equip !== 'undefined' && Scene_Equip.prototype && Scene_Equip.prototype.commandWindowRect) {
        var _wsp_equipCmd_commandWindowRect = Scene_Equip.prototype.commandWindowRect;
        Scene_Equip.prototype.commandWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Equip.prototype._wsp_equipCmd_original_commandWindowRect = _wsp_equipCmd_commandWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_equipCmd_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_equipCmd_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_equipSlot_element = {"key":"equipSlot","targetClass":"Window_EquipSlot","hookType":"sceneRect","x":316,"y":230,"w":956,"h":149,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Slot","visible":true,"windowskin":"Window_WSB_equipSlot","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","opacityGradient":{"h":[{"p":0,"a":1},{"p":0.01,"a":1}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fff9","a":0.8}}};
  (function() {
    var el = _wsp_equipSlot_element;
    if (true) {
      if (typeof Scene_Equip !== 'undefined' && Scene_Equip.prototype && Scene_Equip.prototype.slotWindowRect) {
        var _wsp_equipSlot_slotWindowRect = Scene_Equip.prototype.slotWindowRect;
        Scene_Equip.prototype.slotWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Equip.prototype._wsp_equipSlot_original_slotWindowRect = _wsp_equipSlot_slotWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_equipSlot_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_equipSlot_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_equipItem_element = {"key":"equipItem","targetClass":"Window_EquipItem","hookType":"sceneRect","x":316,"y":230,"w":960,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Item List","visible":true,"windowskin":"Window_WSB_equipItem","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"};
  (function() {
    var el = _wsp_equipItem_element;
    if (true) {
      if (typeof Scene_Equip !== 'undefined' && Scene_Equip.prototype && Scene_Equip.prototype.itemWindowRect) {
        var _wsp_equipItem_itemWindowRect = Scene_Equip.prototype.itemWindowRect;
        Scene_Equip.prototype.itemWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Equip.prototype._wsp_equipItem_original_itemWindowRect = _wsp_equipItem_itemWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_equipItem_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_equipItem_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_equipStatus_element = {"key":"equipStatus","targetClass":"Window_EquipStatus","hookType":"sceneRect","x":4,"y":151,"w":312,"h":564,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Status","visible":true,"windowskin":"Window_WSB_equipStatus","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"};
  (function() {
    var el = _wsp_equipStatus_element;
    if (true) {
      if (typeof Scene_Equip !== 'undefined' && Scene_Equip.prototype && Scene_Equip.prototype.statusWindowRect) {
        var _wsp_equipStatus_statusWindowRect = Scene_Equip.prototype.statusWindowRect;
        Scene_Equip.prototype.statusWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Equip.prototype._wsp_equipStatus_original_statusWindowRect = _wsp_equipStatus_statusWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_equipStatus_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_equipStatus_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_statusDetail_element = {"key":"statusDetail","targetClass":"Window_Status","hookType":"sceneRect","x":4,"y":105,"w":1272,"h":324,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Status Detail","visible":true,"windowskin":"Window_WSB_statusDetail","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"};
  (function() {
    var el = _wsp_statusDetail_element;
    if (true) {
      if (typeof Scene_Status !== 'undefined' && Scene_Status.prototype && Scene_Status.prototype.statusWindowRect) {
        var _wsp_statusDetail_statusWindowRect = Scene_Status.prototype.statusWindowRect;
        Scene_Status.prototype.statusWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Status.prototype._wsp_statusDetail_original_statusWindowRect = _wsp_statusDetail_statusWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_statusDetail_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_statusDetail_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_statusParams_element = {"key":"statusParams","targetClass":"Window_StatusParams","hookType":"sceneRect","x":8,"y":429,"w":300,"h":240,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Status Params","visible":true,"windowskin":"Window_WSB_statusParams","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"};
  (function() {
    var el = _wsp_statusParams_element;
    if (true) {
      if (typeof Scene_Status !== 'undefined' && Scene_Status.prototype && Scene_Status.prototype.statusParamsWindowRect) {
        var _wsp_statusParams_statusParamsWindowRect = Scene_Status.prototype.statusParamsWindowRect;
        Scene_Status.prototype.statusParamsWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Status.prototype._wsp_statusParams_original_statusParamsWindowRect = _wsp_statusParams_statusParamsWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_statusParams_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_statusParams_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_statusEquip_element = {"key":"statusEquip","targetClass":"Window_StatusEquip","hookType":"sceneRect","x":304,"y":429,"w":972,"h":240,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Status Equipment","visible":true,"windowskin":"Window_WSB_statusEquip","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"};
  (function() {
    var el = _wsp_statusEquip_element;
    if (true) {
      if (typeof Scene_Status !== 'undefined' && Scene_Status.prototype && Scene_Status.prototype.statusEquipWindowRect) {
        var _wsp_statusEquip_statusEquipWindowRect = Scene_Status.prototype.statusEquipWindowRect;
        Scene_Status.prototype.statusEquipWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Status.prototype._wsp_statusEquip_original_statusEquipWindowRect = _wsp_statusEquip_statusEquipWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_statusEquip_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_statusEquip_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_gameEnd_element = {"key":"gameEnd","targetClass":"Window_GameEnd","hookType":"sceneRect","x":414,"y":319,"w":430,"h":96,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Game End Command","visible":true,"windowskin":"Window_WSB_gameEnd","framePartId":"000"};
  (function() {
    var el = _wsp_gameEnd_element;
    if (true) {
      if (typeof Scene_GameEnd !== 'undefined' && Scene_GameEnd.prototype && Scene_GameEnd.prototype.commandWindowRect) {
        var _wsp_gameEnd_commandWindowRect = Scene_GameEnd.prototype.commandWindowRect;
        Scene_GameEnd.prototype.commandWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_GameEnd.prototype._wsp_gameEnd_original_commandWindowRect = _wsp_gameEnd_commandWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_gameEnd_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_gameEnd_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_shopCmd_element = {"key":"shopCmd","targetClass":"Window_ShopCommand","hookType":"sceneRect","x":8,"y":139,"w":1032,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Command","visible":true,"windowskin":"Window","scrollBgEnabled":true,"scrollBgSpeedX":-0.3,"scrollBgSpeedY":-0.3,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#7afff6","a":0.45}}};
  (function() {
    var el = _wsp_shopCmd_element;
    if (true) {
      if (typeof Scene_Shop !== 'undefined' && Scene_Shop.prototype && Scene_Shop.prototype.commandWindowRect) {
        var _wsp_shopCmd_commandWindowRect = Scene_Shop.prototype.commandWindowRect;
        Scene_Shop.prototype.commandWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Shop.prototype._wsp_shopCmd_original_commandWindowRect = _wsp_shopCmd_commandWindowRect;
      }
      if (typeof Scene_Shop !== 'undefined' && Scene_Shop.prototype && Scene_Shop.prototype.createCommandWindow) {
        var _wsp_shopCmd_create = Scene_Shop.prototype.createCommandWindow;
        Scene_Shop.prototype.createCommandWindow = function() {
          _wsp_shopCmd_create.call(this);
          if (this._commandWindow) {
            var _wsp_cy = (Graphics.height - Graphics.boxHeight) / 2;
            this._commandWindow.y = el.y - _wsp_cy;
          }
        };
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_shopCmd_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_shopCmd_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_shopBuy_element = {"key":"shopBuy","targetClass":"Window_ShopBuy","hookType":"sceneRect","x":0,"y":224,"w":920,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Buy","visible":true,"windowskin":"Window","roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#7af0ff","a":0.43}}};
  (function() {
    var el = _wsp_shopBuy_element;
    if (true) {
      if (typeof Scene_Shop !== 'undefined' && Scene_Shop.prototype && Scene_Shop.prototype.buyWindowRect) {
        var _wsp_shopBuy_buyWindowRect = Scene_Shop.prototype.buyWindowRect;
        Scene_Shop.prototype.buyWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Shop.prototype._wsp_shopBuy_original_buyWindowRect = _wsp_shopBuy_buyWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_shopBuy_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_shopBuy_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_shopSell_element = {"key":"shopSell","targetClass":"Window_ShopSell","hookType":"sceneRect","x":8,"y":284,"w":1272,"h":428,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Sell","visible":true,"windowskin":"Window","scrollBgEnabled":true,"scrollBgSpeedX":0.3,"scrollBgSpeedY":0.3,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#90fefc","a":0.41}}};
  (function() {
    var el = _wsp_shopSell_element;
    if (true) {
      if (typeof Scene_Shop !== 'undefined' && Scene_Shop.prototype && Scene_Shop.prototype.sellWindowRect) {
        var _wsp_shopSell_sellWindowRect = Scene_Shop.prototype.sellWindowRect;
        Scene_Shop.prototype.sellWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Shop.prototype._wsp_shopSell_original_sellWindowRect = _wsp_shopSell_sellWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_shopSell_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_shopSell_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_shopNumber_element = {"key":"shopNumber","targetClass":"Window_ShopNumber","hookType":"sceneRect","x":8,"y":207,"w":920,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Number","visible":true,"windowskin":"Window"};
  (function() {
    var el = _wsp_shopNumber_element;
    if (true) {
      if (typeof Scene_Shop !== 'undefined' && Scene_Shop.prototype && Scene_Shop.prototype.numberWindowRect) {
        var _wsp_shopNumber_numberWindowRect = Scene_Shop.prototype.numberWindowRect;
        Scene_Shop.prototype.numberWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Shop.prototype._wsp_shopNumber_original_numberWindowRect = _wsp_shopNumber_numberWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_shopNumber_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_shopNumber_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_shopStatus_element = {"key":"shopStatus","targetClass":"Window_ShopStatus","hookType":"sceneRect","x":928,"y":224,"w":352,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Status","visible":true,"windowskin":"Window"};
  (function() {
    var el = _wsp_shopStatus_element;
    if (true) {
      if (typeof Scene_Shop !== 'undefined' && Scene_Shop.prototype && Scene_Shop.prototype.statusWindowRect) {
        var _wsp_shopStatus_statusWindowRect = Scene_Shop.prototype.statusWindowRect;
        Scene_Shop.prototype.statusWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Shop.prototype._wsp_shopStatus_original_statusWindowRect = _wsp_shopStatus_statusWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_shopStatus_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_shopStatus_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_shopDummy_element = {"key":"shopDummy","targetClass":"Window_Base","hookType":"sceneRect","x":8,"y":207,"w":1272,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Dummy","visible":true,"windowskin":"Window_WSB_shopDummy","bgPartId":"000","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":0.3,"scrollBgSpeedY":0.3};
  (function() {
    var el = _wsp_shopDummy_element;
    if (typeof Scene_Shop === 'undefined' || !Scene_Shop.prototype) return;
    if (Scene_Shop.prototype.dummyWindowRect) {
      var _wsp_shopDummy_rect = Scene_Shop.prototype.dummyWindowRect;
      Scene_Shop.prototype._wsp_shopDummy_original_dummyWindowRect = _wsp_shopDummy_rect;
      Scene_Shop.prototype.dummyWindowRect = function() {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
      };
    }
    if (Scene_Shop.prototype.createDummyWindow) {
      var _wsp_shopDummy_create = Scene_Shop.prototype.createDummyWindow;
      Scene_Shop.prototype.createDummyWindow = function() {
        _wsp_shopDummy_create.call(this);
        var _wsp_w = this._dummyWindow;
        if (!_wsp_w) return;
        if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(_wsp_w, el.windowskin);
        if (el.bgType) {
          var bgMap = { window: 0, dim: 1, transparent: 2 };
          _wsp_w.setBackgroundType(bgMap[el.bgType] || 0);
        }
        if (typeof el.opacity === 'number') _wsp_w.opacity = Math.round(el.opacity * 255);
        if (typeof el.frameVisible === 'boolean' && 'frameVisible' in _wsp_w) {
          _wsp_w.frameVisible = el.frameVisible;
        }
      };
    }
  })();

  var _wsp_shopGold_element = {"key":"shopGold","targetClass":"Window_Gold","hookType":"sceneRect","x":1040,"y":139,"w":240,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Gold","visible":true,"windowskin":"Window","scrollBgEnabled":true,"scrollBgSpeedX":0.3,"scrollBgSpeedY":-0.3,"roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#000000","a":0.5}}};
  (function() {
    var el = _wsp_shopGold_element;
    if (true) {
      if (typeof Scene_Shop !== 'undefined' && Scene_Shop.prototype && Scene_Shop.prototype.goldWindowRect) {
        var _wsp_shopGold_goldWindowRect = Scene_Shop.prototype.goldWindowRect;
        Scene_Shop.prototype.goldWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Shop.prototype._wsp_shopGold_original_goldWindowRect = _wsp_shopGold_goldWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_shopGold_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_shopGold_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_battle_element = {"key":"battle","targetClass":"Window_BattleStatus","hookType":"sceneRect","x":0,"y":504,"w":514,"h":203,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Status","visible":true,"windowskin":"Window_WSB_battle","bgPartId":"000","framePartId":"000","roundBgCorners":false,"confirmEffect":{"type":"cursorGlow","dur":21},"sceneAnim":{"in":{"move":{"direction":"outer","distance":"screen_1_4","tween":"easeOutBack"},"delay":{"order":"none","timing":"normal"},"speed":"normal"}}};
  (function() {
    var el = _wsp_battle_element;
    if (!ws_isPluginEnabled("HDLayout")) {
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype && Scene_Battle.prototype.statusWindowRect) {
        var _wsp_battle_statusWindowRect = Scene_Battle.prototype.statusWindowRect;
        Scene_Battle.prototype.statusWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Battle.prototype._wsp_battle_original_statusWindowRect = _wsp_battle_statusWindowRect;
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype) {
        if (typeof Utils === 'undefined' || Utils.RPGMAKER_NAME === 'MZ') {
          Scene_Battle.prototype.statusWindowX = function() {
            var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
            return el.x - _wsp_mx;
          };
        } else if (Scene_Battle.prototype.updateWindowPositions) {
          var _wsp_battle_updateWindowPositions = Scene_Battle.prototype.updateWindowPositions;
          Scene_Battle.prototype.updateWindowPositions = function() {
            _wsp_battle_updateWindowPositions.call(this);
            if (this._statusWindow) {
              var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
              this._statusWindow.x = el.x - _wsp_mx;
            }
          };
        }
      }
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_battle_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_battle_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_partyCmd_element = {"key":"partyCmd","targetClass":"Window_PartyCommand","hookType":"sceneRect","x":414,"y":320,"w":452,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Party Command","visible":true,"windowskin":"Window_WSB_partyCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","roundBgCorners":false,"animation":{"idle":{"type":"bob","amp":2}},"confirmEffect":{"type":"cursorGlow","dur":21}};
  (function() {
    var el = _wsp_partyCmd_element;
    if (!ws_isPluginEnabled("HDLayout")) {
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype && Scene_Battle.prototype.partyCommandWindowRect) {
        var _wsp_partyCmd_partyCommandWindowRect = Scene_Battle.prototype.partyCommandWindowRect;
        Scene_Battle.prototype.partyCommandWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Battle.prototype._wsp_partyCmd_original_partyCommandWindowRect = _wsp_partyCmd_partyCommandWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_partyCmd_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_partyCmd_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_actorCmd_element = {"key":"actorCmd","targetClass":"Window_ActorCommand","hookType":"sceneRect","x":0,"y":444,"w":240,"h":271,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Actor Command","visible":true,"windowskin":"Window_WSB_actorCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9aeafe","a":0.63}}};
  (function() {
    var el = _wsp_actorCmd_element;
    if (!ws_isPluginEnabled("HDLayout")) {
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype && Scene_Battle.prototype.actorCommandWindowRect) {
        var _wsp_actorCmd_actorCommandWindowRect = Scene_Battle.prototype.actorCommandWindowRect;
        Scene_Battle.prototype.actorCommandWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Battle.prototype._wsp_actorCmd_original_actorCommandWindowRect = _wsp_actorCmd_actorCommandWindowRect;
        if (Scene_Battle.prototype.createActorCommandWindow) {
          var _wsp_actorCmd_create = Scene_Battle.prototype.createActorCommandWindow;
          Scene_Battle.prototype.createActorCommandWindow = function() {
            _wsp_actorCmd_create.call(this);
            if (this._actorCommandWindow) {
              var _wsp_cy = (Graphics.height - Graphics.boxHeight) / 2;
              this._actorCommandWindow.y = el.y - _wsp_cy;
            }
          };
        }
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_actorCmd_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_actorCmd_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_enemySel_element = {"key":"enemySel","targetClass":"Window_BattleEnemy","hookType":"sceneRect","x":1020,"y":383.5,"w":260,"h":89,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Enemy","visible":false,"windowskin":"Window_WSB_enemySel","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#94f3ff","a":0.5}}};
  (function() {
    var el = _wsp_enemySel_element;
    if (true) {
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype && Scene_Battle.prototype.enemyWindowRect) {
        var _wsp_enemySel_enemyWindowRect = Scene_Battle.prototype.enemyWindowRect;
        Scene_Battle.prototype.enemyWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Battle.prototype._wsp_enemySel_original_enemyWindowRect = _wsp_enemySel_enemyWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_enemySel_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_enemySel_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_skillSel_element = {"key":"skillSel","targetClass":"Window_BattleSkill","hookType":"sceneRect","x":4,"y":520,"w":1272,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Skill","visible":false,"windowskin":"Window_WSB_skillSel","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9efffd","a":0.56}}};
  (function() {
    var el = _wsp_skillSel_element;
    if (true) {
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype && Scene_Battle.prototype.skillWindowRect) {
        var _wsp_skillSel_skillWindowRect = Scene_Battle.prototype.skillWindowRect;
        Scene_Battle.prototype.skillWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Battle.prototype._wsp_skillSel_original_skillWindowRect = _wsp_skillSel_skillWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_skillSel_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_skillSel_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_itemSel_element = {"key":"itemSel","targetClass":"Window_BattleItem","hookType":"sceneRect","x":4,"y":516,"w":1272,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Item","visible":false,"windowskin":"Window_WSB_itemSel","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#b4fef9","a":0.63}}};
  (function() {
    var el = _wsp_itemSel_element;
    if (true) {
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype && Scene_Battle.prototype.itemWindowRect) {
        var _wsp_itemSel_itemWindowRect = Scene_Battle.prototype.itemWindowRect;
        Scene_Battle.prototype.itemWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Battle.prototype._wsp_itemSel_original_itemWindowRect = _wsp_itemSel_itemWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_itemSel_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_itemSel_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_helpWin_element = {"key":"helpWin","targetClass":"Window_Help","hookType":"sceneRect","x":114,"y":19,"w":1166,"h":89,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Help Window","visible":true,"windowskin":"Window_WSB_helpWin","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":-0.3,"scrollBgSpeedY":-0.3,"roundBgCorners":false,"opacityGradient":{"h":[{"p":0.428,"a":1},{"p":1,"a":0}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9efffd","a":0.56}}};
  (function() {
    var el = _wsp_helpWin_element;
    if (true) {
      if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype && Scene_Battle.prototype.helpWindowRect) {
        var _wsp_helpWin_helpWindowRect = Scene_Battle.prototype.helpWindowRect;
        Scene_Battle.prototype.helpWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Battle.prototype._wsp_helpWin_original_helpWindowRect = _wsp_helpWin_helpWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_helpWin_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_helpWin_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_message_element = {"key":"message","targetClass":"Window_Message","hookType":"sceneRect","x":4,"y":532,"w":1272,"h":162,"opacity":0.9803921568627451,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Message Window","visible":true,"windowskin":"Window_WSB_message","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","messageLineCount":4,"scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"roundBgCorners":false,"opacityGradient":{"h":[{"p":0,"a":0.4},{"p":0.55,"a":1},{"p":1,"a":0.4}]},"sceneAnim":{"in":{"move":{"direction":"bottom","distance":"screen_1_4","tween":"linear"},"delay":{"order":"none","timing":"normal"},"speed":"fast"},"out":{"move":{"direction":"bottom","distance":"screen_1_8","tween":"easeOutBack"},"delay":{"order":"none","timing":"normal"},"speed":"slow"}}};
  (function() {
    var el = _wsp_message_element;
    if (!ws_isPluginEnabled("HDLayout")) {
      if (typeof Scene_Message !== 'undefined' && Scene_Message.prototype && Scene_Message.prototype.messageWindowRect) {
        var _wsp_message_messageWindowRect = Scene_Message.prototype.messageWindowRect;
        Scene_Message.prototype.messageWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Message.prototype._wsp_message_original_messageWindowRect = _wsp_message_messageWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_message_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_message_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();
  (function() {
    var el = _wsp_message_element;
    if (typeof Window_Message === 'undefined' || !Window_Message.prototype) return;
    var _wsp_message_updatePlacement = Window_Message.prototype.updatePlacement;
    Window_Message.prototype._wsp_message_original_updatePlacement = _wsp_message_updatePlacement;
    Window_Message.prototype.updatePlacement = function() {
      _wsp_message_updatePlacement.apply(this, arguments);
      if (false) return;
      this._positionType = $gameMessage.positionType();
      if (this._positionType === 2) {
        this.y = el.y - (Graphics.height - Graphics.boxHeight) / 2;
      } else if (this._positionType === 1) {
        this.y = Math.round((Graphics.height - this.height) / 2);
      } else {
        this.y = 0;
      }
      if (this._goldWindow) {
        this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;
      }
    };
  })();
  (function() {
    var el = _wsp_message_element;
    if (typeof Window_Message === 'undefined' || !Window_Message.prototype) return;
    if (typeof el.messageLineCount !== 'number') return;
    var _wsp_message_numVisibleRows = Window_Message.prototype.numVisibleRows;
    Window_Message.prototype._wsp_message_original_numVisibleRows = _wsp_message_numVisibleRows;
    Window_Message.prototype.numVisibleRows = function() {
      return el.messageLineCount;
    };
  })();

  var _wsp_nameBox_element = {"key":"nameBox","targetClass":"Window_NameBox","hookType":"placement","x":4,"y":466,"w":240,"h":60,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Name Box","visible":true,"windowskin":"Window_WSB_nameBox","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","dynamicWidth":true,"scrollBgEnabled":true,"scrollBgSpeedX":-0.3,"scrollBgSpeedY":-0.3,"opacityGradient":{"h":[{"p":0,"a":0.7},{"p":0.562,"a":1},{"p":1,"a":0.7}]}};
  (function() {
    var el = _wsp_nameBox_element;
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype.updatePlacement) return;
    var _wsp_nameBox_updatePlacement = WindowClass.prototype.updatePlacement;
    WindowClass.prototype._wsp_nameBox_original_updatePlacement = _wsp_nameBox_updatePlacement;
    WindowClass.prototype.updatePlacement = function() {
      _wsp_nameBox_updatePlacement.apply(this, arguments);
      var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
      var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
      var _wsp_h = el.dynamicHeight && typeof this.windowHeight === 'function' ? this.windowHeight() : el.h;
      var _wsp_w = el.dynamicWidth && typeof this.windowWidth === 'function' ? this.windowWidth() : el.w;
      var _wsp_x = el.x;
      if (el.dynamicWidth && _wsp_x + _wsp_w > Graphics.boxWidth) {
        _wsp_x = Math.max(0, Graphics.boxWidth - _wsp_w);
      }
      this.move(_wsp_x - _wsp_mx, el.y - _wsp_my, _wsp_w, _wsp_h);
      if (this.createContents) {
        var _wsp_cw = typeof this.contentsWidth === "function" ? this.contentsWidth() : 0;
        var _wsp_ch = typeof this.contentsHeight === "function" ? this.contentsHeight() : 0;
        if (!this.contents || this.contents.width !== _wsp_cw || this.contents.height !== _wsp_ch) {
          this.createContents();
        }
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        var _wsp_bt = bgMap[el.bgType] || 0;
        if (this._wsbPlacementBgType !== _wsp_bt) {
          this._wsbPlacementBgType = _wsp_bt;
          this.setBackgroundType(_wsp_bt);
        }
      }
      if (el.windowskin && el.windowskin !== "Window") {
        var _wsp_wantSkin = ImageManager.loadSystem(el.windowskin);
        if (this._windowskin !== _wsp_wantSkin) ws_applyWindowskin(this, el.windowskin);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_choice_element = {"key":"choice","targetClass":"Window_ChoiceList","hookType":"placement","x":1088,"y":408,"w":192,"h":112,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Choice List","visible":true,"windowskin":"Window_WSB_choice","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","dynamicHeight":true,"dynamicWidth":true,"scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"opacityGradient":{"h":[{"p":0,"a":0.7},{"p":0.53,"a":1},{"p":1,"a":0.7}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#8afffd","a":0.47}}};
  (function() {
    var el = _wsp_choice_element;
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype.updatePlacement) return;
    var _wsp_choice_updatePlacement = WindowClass.prototype.updatePlacement;
    WindowClass.prototype._wsp_choice_original_updatePlacement = _wsp_choice_updatePlacement;
    WindowClass.prototype.updatePlacement = function() {
      _wsp_choice_updatePlacement.apply(this, arguments);
      var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
      var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
      var _wsp_h = el.dynamicHeight && typeof this.windowHeight === 'function' ? this.windowHeight() : el.h;
      var _wsp_w = el.dynamicWidth && typeof this.windowWidth === 'function' ? this.windowWidth() : el.w;
      var _wsp_x = el.x;
      if (el.dynamicWidth && _wsp_x + _wsp_w > Graphics.boxWidth) {
        _wsp_x = Math.max(0, Graphics.boxWidth - _wsp_w);
      }
      this.move(_wsp_x - _wsp_mx, el.y - _wsp_my, _wsp_w, _wsp_h);
      if (this.createContents) {
        var _wsp_cw = typeof this.contentsWidth === "function" ? this.contentsWidth() : 0;
        var _wsp_ch = typeof this.contentsHeight === "function" ? this.contentsHeight() : 0;
        if (!this.contents || this.contents.width !== _wsp_cw || this.contents.height !== _wsp_ch) {
          this.createContents();
        }
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        var _wsp_bt = bgMap[el.bgType] || 0;
        if (this._wsbPlacementBgType !== _wsp_bt) {
          this._wsbPlacementBgType = _wsp_bt;
          this.setBackgroundType(_wsp_bt);
        }
      }
      if (el.windowskin && el.windowskin !== "Window") {
        var _wsp_wantSkin = ImageManager.loadSystem(el.windowskin);
        if (this._windowskin !== _wsp_wantSkin) ws_applyWindowskin(this, el.windowskin);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_numberInput_element = {"key":"numberInput","targetClass":"Window_NumberInput","hookType":"placement","x":436,"y":464,"w":408,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Number Input","visible":true,"windowskin":"Window","dynamicWidth":true};
  (function() {
    var el = _wsp_numberInput_element;
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype.updatePlacement) return;
    var _wsp_numberInput_updatePlacement = WindowClass.prototype.updatePlacement;
    WindowClass.prototype._wsp_numberInput_original_updatePlacement = _wsp_numberInput_updatePlacement;
    WindowClass.prototype.updatePlacement = function() {
      _wsp_numberInput_updatePlacement.apply(this, arguments);
      var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
      var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
      var _wsp_h = el.dynamicHeight && typeof this.windowHeight === 'function' ? this.windowHeight() : el.h;
      var _wsp_w = el.dynamicWidth && typeof this.windowWidth === 'function' ? this.windowWidth() : el.w;
      var _wsp_x = el.x;
      if (el.dynamicWidth && _wsp_x + _wsp_w > Graphics.boxWidth) {
        _wsp_x = Math.max(0, Graphics.boxWidth - _wsp_w);
      }
      this.move(_wsp_x - _wsp_mx, el.y - _wsp_my, _wsp_w, _wsp_h);
      if (this.createContents) {
        var _wsp_cw = typeof this.contentsWidth === "function" ? this.contentsWidth() : 0;
        var _wsp_ch = typeof this.contentsHeight === "function" ? this.contentsHeight() : 0;
        if (!this.contents || this.contents.width !== _wsp_cw || this.contents.height !== _wsp_ch) {
          this.createContents();
        }
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        var _wsp_bt = bgMap[el.bgType] || 0;
        if (this._wsbPlacementBgType !== _wsp_bt) {
          this._wsbPlacementBgType = _wsp_bt;
          this.setBackgroundType(_wsp_bt);
        }
      }
      if (el.windowskin && el.windowskin !== "Window") {
        var _wsp_wantSkin = ImageManager.loadSystem(el.windowskin);
        if (this._windowskin !== _wsp_wantSkin) ws_applyWindowskin(this, el.windowskin);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_eventItem_element = {"key":"eventItem","targetClass":"Window_EventItem","hookType":"placement","x":4,"y":4,"w":1272,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Event Item Select","visible":true,"windowskin":"Window"};
  (function() {
    var el = _wsp_eventItem_element;
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype.updatePlacement) return;
    var _wsp_eventItem_updatePlacement = WindowClass.prototype.updatePlacement;
    WindowClass.prototype._wsp_eventItem_original_updatePlacement = _wsp_eventItem_updatePlacement;
    WindowClass.prototype.updatePlacement = function() {
      _wsp_eventItem_updatePlacement.apply(this, arguments);
      var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
      var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
      var _wsp_h = el.dynamicHeight && typeof this.windowHeight === 'function' ? this.windowHeight() : el.h;
      var _wsp_w = el.dynamicWidth && typeof this.windowWidth === 'function' ? this.windowWidth() : el.w;
      var _wsp_x = el.x;
      if (el.dynamicWidth && _wsp_x + _wsp_w > Graphics.boxWidth) {
        _wsp_x = Math.max(0, Graphics.boxWidth - _wsp_w);
      }
      this.move(_wsp_x - _wsp_mx, el.y - _wsp_my, _wsp_w, _wsp_h);
      if (this.createContents) {
        var _wsp_cw = typeof this.contentsWidth === "function" ? this.contentsWidth() : 0;
        var _wsp_ch = typeof this.contentsHeight === "function" ? this.contentsHeight() : 0;
        if (!this.contents || this.contents.width !== _wsp_cw || this.contents.height !== _wsp_ch) {
          this.createContents();
        }
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        var _wsp_bt = bgMap[el.bgType] || 0;
        if (this._wsbPlacementBgType !== _wsp_bt) {
          this._wsbPlacementBgType = _wsp_bt;
          this.setBackgroundType(_wsp_bt);
        }
      }
      if (el.windowskin && el.windowskin !== "Window") {
        var _wsp_wantSkin = ImageManager.loadSystem(el.windowskin);
        if (this._windowskin !== _wsp_wantSkin) ws_applyWindowskin(this, el.windowskin);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_nameInput_element = {"key":"nameInput","targetClass":"Window_NameEdit","hookType":"sceneRect","x":340,"y":62,"w":600,"h":168,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Name Edit","visible":true,"windowskin":"Window"};
  (function() {
    var el = _wsp_nameInput_element;
    if (true) {
      if (typeof Scene_Name !== 'undefined' && Scene_Name.prototype && Scene_Name.prototype.editWindowRect) {
        var _wsp_nameInput_editWindowRect = Scene_Name.prototype.editWindowRect;
        Scene_Name.prototype.editWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Name.prototype._wsp_nameInput_original_editWindowRect = _wsp_nameInput_editWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_nameInput_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_nameInput_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  var _wsp_nameTable_element = {"key":"nameTable","targetClass":"Window_NameInput","hookType":"sceneRect","x":340,"y":238,"w":600,"h":420,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Name Input","visible":true,"windowskin":"Window"};
  (function() {
    var el = _wsp_nameTable_element;
    if (true) {
      if (typeof Scene_Name !== 'undefined' && Scene_Name.prototype && Scene_Name.prototype.inputWindowRect) {
        var _wsp_nameTable_inputWindowRect = Scene_Name.prototype.inputWindowRect;
        Scene_Name.prototype.inputWindowRect = function() {
          var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
          var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
          return new Rectangle(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        };
        Scene_Name.prototype._wsp_nameTable_original_inputWindowRect = _wsp_nameTable_inputWindowRect;
      }
    }
    var WindowClass = window[el.targetClass];
    if (!WindowClass || !WindowClass.prototype) return;
    var _wsp_nameTable_init = WindowClass.prototype.initialize;
    WindowClass.prototype.initialize = function() {
      _wsp_nameTable_init.apply(this, arguments);
      if (typeof Utils !== 'undefined' && Utils.RPGMAKER_NAME !== 'MZ') {
        var _wsp_mx = (Graphics.width - Graphics.boxWidth) / 2;
        var _wsp_my = (Graphics.height - Graphics.boxHeight) / 2;
        this.move(el.x - _wsp_mx, el.y - _wsp_my, el.w, el.h);
        if (this.createContents) this.createContents();
      }
      if (el.windowskin && el.windowskin !== "Window") ws_applyWindowskin(this, el.windowskin);
      if (el.bgType) {
        var bgMap = { window: 0, dim: 1, transparent: 2 };
        this.setBackgroundType(bgMap[el.bgType] || 0);
      }
      if (typeof el.opacity === 'number') {
        this.opacity = Math.round(el.opacity * 255);
      }
      if (typeof el.frameVisible === 'boolean' && 'frameVisible' in this) {
        this.frameVisible = el.frameVisible;
      }
    };
  })();

  (function() {
    var CORNER_SIZE = 48;
    var CORNER_SRC_Y = 384;
    var CORNER_SRC_XS = [0, 48, 96, 144]; // TL, TR, BL, BR
    var FRAME_SRC_X = 96;
    var FRAME_SRC_Y = 0;
    var FRAME_SRC_SIZE = 96;
    var FRAME_M = 24;
    var MADO_H = 384;

    function ws_cornerLayer() {
      var scene = (typeof SceneManager !== "undefined") ? SceneManager._scene : null;
      if (!scene || typeof scene.addChild !== "function") return null;
      if (scene._wsbCornerLayer && scene._wsbCornerLayer.parent === scene) {
        return scene._wsbCornerLayer;
      }
      var layer = new Sprite();
      var wlIndex = (scene._windowLayer && scene.children)
        ? scene.children.indexOf(scene._windowLayer)
        : -1;
      if (wlIndex >= 0 && typeof scene.addChildAt === "function") {
        scene.addChildAt(layer, wlIndex + 1);
      } else {
        scene.addChild(layer);
      }
      layer._wsbWins = [];
      layer.update = function() {
        for (var i = this._wsbWins.length - 1; i >= 0; i--) {
          var w = this._wsbWins[i];
          if (!w || !w._wsbCornerSprites || w.destroyed) {
            this._wsbWins.splice(i, 1);
            continue;
          }
          try { ws_syncCornerSprites(w); } catch (e) { /* ignore */ }
        }
        Sprite.prototype.update.call(this);
      };
      scene._wsbCornerLayer = layer;
      return layer;
    }

    function ws_ensureCornerSprites(win) {
      var layer0 = ws_cornerLayer();
      if (!win._wsbFrameOverlay || !win._wsbFrameOverlay.parent) {
        var fsp0 = new Sprite();
        fsp0.visible = false;
        win.addChild(fsp0);
        win._wsbFrameOverlay = fsp0;
        win._wsbFrameOverlayKey = null;
      }
      if (win._wsbCornerSprites && win._wsbCornerSprites[0] &&
          win._wsbCornerSprites[0].parent) {
        return win._wsbCornerSprites;
      }
      var layer = layer0;
      var arr = [];
      for (var i = 0; i < 4; i++) {
        var sp = new Sprite();
        sp.visible = false;
        if (layer) layer.addChild(sp);
        else win.addChild(sp);
        arr.push(sp);
      }
      win._wsbCornerSprites = arr;
      if (layer && layer._wsbWins && layer._wsbWins.indexOf(win) < 0) {
        layer._wsbWins.push(win);
      }
      return arr;
    }

    function ws_applyCornerFrames(win) {
      var skin = win._windowskin;
      var _wsbActive = !!skin && (skin.height >= MADO_H ||
        ((typeof ws_frameFrontFor === "function") && ws_frameFrontFor(skin)));
      if (!_wsbActive && !win._wsbCornerSprites && !win._wsbFrameOverlay) return;
      var sprites = ws_ensureCornerSprites(win);
      win._wsbFrameOverlayActive = _wsbActive;
      win._wsbFrameOverlayKey = null;
      if (!skin || skin.height < CORNER_SRC_Y + CORNER_SIZE) {
        for (var i = 0; i < 4; i++) sprites[i].visible = false;
        win._wsbCornerActive = false;
        ws_syncCornerSprites(win);
        return;
      }
      for (var i = 0; i < 4; i++) {
        var sp = sprites[i];
        sp.bitmap = skin;
        sp.setFrame(CORNER_SRC_XS[i], CORNER_SRC_Y, CORNER_SIZE, CORNER_SIZE);
      }
      win._wsbCornerActive = true;
      ws_syncCornerSprites(win);
    }

    function ws_cornerCovered(win) {
      var wl = win.parent;
      if (!wl || !wl.children) return false;
      var me = wl.children.indexOf(win);
      if (me < 0) return false;
      for (var i = me + 1; i < wl.children.length; i++) {
        var o = wl.children[i];
        if (!o || o === win) continue;
        if (o.visible === false) continue;
        if (typeof o.openness === "number" && o.openness < 255) continue;
        if (!(o.width > 0) || !(o.height > 0)) continue;
        if (o.x <= win.x && o.y <= win.y &&
            o.x + o.width >= win.x + win.width &&
            o.y + o.height >= win.y + win.height) return true;
      }
      return false;
    }

    function ws_syncCornerSprites(win) {
      var sprites = win._wsbCornerSprites;
      if (!sprites) return;
      var w = win.width || 0;
      var h = win.height || 0;
      var s = CORNER_SIZE;
      var wl = win.parent;
      var baseX = (wl && typeof wl.x === "number" ? wl.x : 0) + (win.x || 0);
      var baseY = (wl && typeof wl.y === "number" ? wl.y : 0) + (win.y || 0);
      var winShown = !!wl && win.visible !== false &&
        (typeof win.openness !== "number" || win.openness >= 255);
      var shown = win._wsbCornerActive === true && winShown && !ws_cornerCovered(win);
      var op = (typeof win.opacity === "number") ? win.opacity : 255;
      var wa = (typeof win.alpha === "number") ? win.alpha : 1;
      var alpha = Math.max(0, Math.min(1, op / 255)) * Math.max(0, Math.min(1, wa));
      var scx = (win.scale && typeof win.scale.x === "number") ? win.scale.x : 1;
      var scy = (win.scale && typeof win.scale.y === "number") ? win.scale.y : 1;
      var dests = [[0, 0], [w - s, 0], [0, h - s], [w - s, h - s]];
      for (var i = 0; i < 4; i++) {
        var sp = sprites[i];
        if (sp.parent === win) {
          sp.x = dests[i][0];
          sp.y = dests[i][1];
        } else {
          sp.x = baseX + dests[i][0] * scx;
          sp.y = baseY + dests[i][1] * scy;
          if (sp.scale && sp.scale.set) sp.scale.set(scx, scy);
        }
        sp.visible = shown;
        sp.alpha = alpha;
      }
      ws_syncFrameOverlay(win, baseX, baseY, w, h, winShown, alpha);
    }

    function ws_drawFrameTo(bmp, skin, w, h) {
      var m = FRAME_M;
      var fsrc = (typeof ws_madoFrameSrc === "function") ? ws_madoFrameSrc(skin) : null;
      var src = fsrc ? fsrc.bmp : skin;
      var sx = fsrc ? fsrc.x : FRAME_SRC_X;
      var sy = fsrc ? fsrc.y : FRAME_SRC_Y;
      var szw = fsrc ? fsrc.w : FRAME_SRC_SIZE;
      var szh = fsrc ? fsrc.h : FRAME_SRC_SIZE;
      if (!ws_cornerReplacesFrame(skin)) {
        bmp.blt(src, sx, sy, m, m, 0, 0, m, m);
        bmp.blt(src, sx + szw - m, sy, m, m, w - m, 0, m, m);
        bmp.blt(src, sx, sy + szh - m, m, m, 0, h - m, m, m);
        bmp.blt(src, sx + szw - m, sy + szh - m, m, m, w - m, h - m, m, m);
      }
      var tile = (typeof ws_frameTileFor === "function") && ws_frameTileFor(skin);
      if (tile) {
        ws_bltEdgeTiled(bmp, src, sx + m, sy, szw - 2 * m, m, m, 0, w - 2 * m, m);
        ws_bltEdgeTiled(bmp, src, sx + m, sy + szh - m, szw - 2 * m, m, m, h - m, w - 2 * m, m);
        ws_bltEdgeTiled(bmp, src, sx, sy + m, m, szh - 2 * m, 0, m, m, h - 2 * m);
        ws_bltEdgeTiled(bmp, src, sx + szw - m, sy + m, m, szh - 2 * m, w - m, m, m, h - 2 * m);
      } else {
        bmp.blt(src, sx + m, sy, szw - 2 * m, m, m, 0, w - 2 * m, m);
        bmp.blt(src, sx + m, sy + szh - m, szw - 2 * m, m, m, h - m, w - 2 * m, m);
        bmp.blt(src, sx, sy + m, m, szh - 2 * m, 0, m, m, h - 2 * m);
        bmp.blt(src, sx + szw - m, sy + m, m, szh - 2 * m, w - m, m, m, h - 2 * m);
      }
    }

    function ws_syncFrameOverlay(win, baseX, baseY, w, h, shown, alpha) {
      var fsp = win._wsbFrameOverlay;
      if (!fsp) return;
      var nf = win._frameSprite || win._windowFrameSprite;
      var active = win._wsbFrameOverlayActive === true;
      var frameOn = active && (!nf || nf.visible !== false);
      var skin = win._windowskin;
      if (frameOn && skin && (!skin.isReady || skin.isReady()) && w > 0 && h > 0) {
        var key = w + "|" + h + "|" + (skin.url || skin._url || "");
        if (win._wsbFrameOverlayKey !== key) {
          var bmp = fsp.bitmap;
          if (!bmp || bmp.width !== w || bmp.height !== h) {
            bmp = new Bitmap(w, h);
            fsp.bitmap = bmp;
          } else {
            bmp.clear();
          }
          ws_drawFrameTo(bmp, skin, w, h);
          if (fsp.setFrame) fsp.setFrame(0, 0, w, h);
          win._wsbFrameOverlayKey = key;
        }
      }
      var fshown = shown && frameOn && win._wsbFrameOverlayKey !== null;
      fsp.visible = fshown;
      if (fsp.parent === win) {
        var fop = (typeof win.opacity === "number") ? win.opacity : 255;
        fsp.alpha = Math.max(0, Math.min(1, fop / 255));
        fsp.x = 0;
        fsp.y = 0;
      } else {
        fsp.alpha = alpha;
        fsp.x = baseX;
        fsp.y = baseY;
        var fsx = (win.scale && typeof win.scale.x === "number") ? win.scale.x : 1;
        var fsy = (win.scale && typeof win.scale.y === "number") ? win.scale.y : 1;
        if (fsp.scale && fsp.scale.set) fsp.scale.set(fsx, fsy);
        if (fsp.transform && fsp.transform.skew && win.transform && win.transform.skew) {
          fsp.transform.skew.x = win.transform.skew.x;
        }
      }
      if (nf) nf.renderable = !fshown;
    }

    var _wsp_orig_refreshAllParts = Window.prototype._refreshAllParts;
    Window.prototype._refreshAllParts = function() {
      _wsp_orig_refreshAllParts.apply(this, arguments);
      try { ws_applyCornerFrames(this); } catch (e) { /* ignore */ }
    };

    var _wsp_orig_move = Window.prototype.move;
    Window.prototype.move = function(x, y, w, h) {
      _wsp_orig_move.apply(this, arguments);
      if (this._wsbCornerSprites) { try { ws_syncCornerSprites(this); } catch (e) { /* ignore */ } }
    };

    var _wsp_orig_update = Window.prototype.update;
    Window.prototype.update = function() {
      _wsp_orig_update.apply(this, arguments);
      if (this._wsbCornerSprites) { try { ws_syncCornerSprites(this); } catch (e) { /* ignore */ } }
    };
  })();

  var WS_BG_INSET = { "Window_WSB_choice": [6, 6, 6, 6], "Window_WSB_gold": [6, 6, 6, 6], "Window_WSB_menu": [6, 6, 6, 6], "Window_WSB_menu_csc_mt3cogc4_p_win_mt3cp5v9_q": [6, 6, 6, 6], "Window_WSB_message": [6, 6, 6, 6], "Window_WSB_nameBox": [6, 6, 6, 6], "Window_WSB_status": [6, 6, 6, 6], "Window_WSB_titleCmd": [6, 6, 6, 6] };
  function ws_bgInsetFor(skin) {
    if (!WS_BG_INSET || !skin) return null;
    var url = String(skin.url || skin._url || "");
    var match = /([^\/\\]+)\.png$/i.exec(url);
    return (match && WS_BG_INSET[match[1]]) || null;
  }

  var WS_BG_RADIUS = { "Window_WSB_choice": 1, "Window_WSB_gold": 1, "Window_WSB_menu": 1, "Window_WSB_menu_csc_mt3cogc4_p_win_mt3cp5v9_q": 1, "Window_WSB_message": 1, "Window_WSB_nameBox": 1, "Window_WSB_status": 1, "Window_WSB_titleCmd": 1 };
  var WS_BG_RADIUS_DEFAULT = 16;
  function ws_bgRadiusFor(skin) {
    if (!WS_BG_RADIUS || !skin) return WS_BG_RADIUS_DEFAULT;
    var url = String(skin.url || skin._url || "");
    var match = /([^\/\\]+)\.png$/i.exec(url);
    var v = match ? WS_BG_RADIUS[match[1]] : undefined;
    return (typeof v === "number") ? v : WS_BG_RADIUS_DEFAULT;
  }

  var WS_FRAME_FRONT = { "Window": 1, "Window_WSB_actorCmd": 1, "Window_WSB_battle": 1, "Window_WSB_choice": 1, "Window_WSB_enemySel": 1, "Window_WSB_equipCmd": 1, "Window_WSB_equipItem": 1, "Window_WSB_equipSlot": 1, "Window_WSB_equipStatus": 1, "Window_WSB_gameEnd": 1, "Window_WSB_gold": 1, "Window_WSB_helpWin": 1, "Window_WSB_hud_hud_msd7h60z_2": 1, "Window_WSB_hud_hud_msd8vuet_4": 1, "Window_WSB_hud_hud_msd92nt2_5": 1, "Window_WSB_itemCat": 1, "Window_WSB_itemList": 1, "Window_WSB_itemSel": 1, "Window_WSB_menu": 1, "Window_WSB_menu_csc_mt3cogc4_p_win_mt3cp5v9_q": 1, "Window_WSB_message": 1, "Window_WSB_nameBox": 1, "Window_WSB_options": 1, "Window_WSB_partyCmd": 1, "Window_WSB_save": 1, "Window_WSB_shopDummy": 1, "Window_WSB_skillList": 1, "Window_WSB_skillSel": 1, "Window_WSB_skillStatus": 1, "Window_WSB_skillType": 1, "Window_WSB_status": 1, "Window_WSB_statusDetail": 1, "Window_WSB_statusEquip": 1, "Window_WSB_statusParams": 1, "Window_WSB_titleCmd": 1 };
  function ws_frameFrontFor(skin) {
    if (!WS_FRAME_FRONT || !skin) return false;
    var url = String(skin.url || skin._url || "");
    var match = /([^\/\\]+)\.png$/i.exec(url);
    return !!(match && WS_FRAME_FRONT[match[1]]);
  }

  var WS_FRAME_TILE = null;
  function ws_frameTileFor(skin) {
    if (!WS_FRAME_TILE || !skin) return false;
    var url = String(skin.url || skin._url || "");
    var match = /([^\/\\]+)\.png$/i.exec(url);
    return !!(match && WS_FRAME_TILE[match[1]]);
  }
  function ws_bltEdgeTiled(bmp, skin, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0) return;
    if (sh === dh) {
      for (var ox = 0; ox < dw; ox += sw) {
        var cw = Math.min(sw, dw - ox);
        bmp.blt(skin, sx, sy, cw, sh, dx + ox, dy, cw, dh);
      }
    } else if (sw === dw) {
      for (var oy = 0; oy < dh; oy += sh) {
        var ch = Math.min(sh, dh - oy);
        bmp.blt(skin, sx, sy, sw, ch, dx, dy + oy, dw, ch);
      }
    } else {
      bmp.blt(skin, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

  function ws_madoFrameSrc(skin) {
    if (!skin || !skin.height || skin.height < 384) return null;
    if (skin._wsbFlushFrame !== undefined) return skin._wsbFlushFrame;
    var out = null;
    try {
      var S = 96;
      var bmp = new Bitmap(S, S);
      bmp.blt(skin, 96, 0, S, S, 0, 0, S, S);
      var arrows = [[34, 22, 28, 16], [34, 58, 28, 16], [22, 34, 16, 28], [58, 34, 16, 28]];
      for (var i = 0; i < arrows.length; i++) {
        bmp.clearRect(arrows[i][0], arrows[i][1], arrows[i][2], arrows[i][3]);
      }
      var cv = bmp.canvas || bmp._canvas;
      var cx = cv && cv.getContext ? cv.getContext("2d") : null;
      if (cx) {
        var d = cx.getImageData(0, 0, S, S).data;
        var minX = S, minY = S, maxX = -1, maxY = -1;
        for (var y = 0; y < S; y++) {
          for (var x = 0; x < S; x++) {
            if (d[(y * S + x) * 4 + 3] > 8) {
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
            }
          }
        }
        var bw = maxX + 1 - minX;
        var bh = maxY + 1 - minY;
        if (maxX >= 0 && bw >= 48 && bh >= 48) {
          out = { bmp: bmp, x: minX, y: minY, w: bw, h: bh };
        }
      }
    } catch (e) { out = null; }
    skin._wsbFlushFrame = out;
    return out;
  }

  function ws_cornerReplacesFrame(skin) {
    if (!skin) return false;
    if (typeof skin._wsbCornerReplaces === "boolean") return skin._wsbCornerReplaces;
    var rep = false;
    try {
      if (skin.height >= 432) {
        var ccv = skin.canvas || skin._canvas;
        var cctx = ccv && ccv.getContext ? ccv.getContext("2d") : null;
        if (cctx) {
          var fd = cctx.getImageData(96, 0, 96, 96).data;
          var bd = cctx.getImageData(0, 384, 192, 48).data;
          var hasCell = false;
          for (var bi = 3; bi < bd.length; bi += 4) {
            if (bd[bi] > 32) { hasCell = true; break; }
          }
          if (hasCell) {
            var specs = [[0, 0, 0, 0], [72, 0, 72, 0], [0, 72, 96, 24], [72, 72, 168, 24]];
            var minCov = 1;
            for (var si = 0; si < 4; si++) {
              var fx0 = specs[si][0], fy0 = specs[si][1];
              var cx0 = specs[si][2], cy0 = specs[si][3];
              var tot = 0, cov = 0;
              for (var yy = 0; yy < 24; yy++) {
                for (var xx = 0; xx < 24; xx++) {
                  if (fd[((fy0 + yy) * 96 + fx0 + xx) * 4 + 3] > 32) {
                    tot++;
                    if (bd[((cy0 + yy) * 192 + cx0 + xx) * 4 + 3] > 32) cov++;
                  }
                }
              }
              var ratio = tot === 0 ? 1 : cov / tot;
              if (ratio < minCov) minCov = ratio;
            }
            rep = minCov >= 0.9;
          }
        }
      }
    } catch (e) { rep = false; }
    skin._wsbCornerReplaces = rep;
    return rep;
  }

  (function() {
    var MADO_BG_SRC_Y = 192;
    var MADO_BG_SRC_SIZE = 192;
    var MADO_FORMAT_HEIGHT_THRESHOLD = 384;

    function ws_madoRoundClip(bm, bw, bh, skin) {
      var ctx = bm.context || bm._context;
      if (!ctx) return;
      var r = (typeof ws_bgRadiusFor === "function") ? ws_bgRadiusFor(skin) : 16;
      var maxR = Math.floor(Math.min(bw, bh) / 2);
      if (r > maxR) r = maxR;
      if (r <= 0) return;
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(bw - r, 0);
      ctx.arcTo(bw, 0, bw, r, r);
      ctx.lineTo(bw, bh - r);
      ctx.arcTo(bw, bh, bw - r, bh, r);
      ctx.lineTo(r, bh);
      ctx.arcTo(0, bh, 0, bh - r, r);
      ctx.lineTo(0, r);
      ctx.arcTo(0, 0, r, 0, r);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      if (typeof bm._setDirty === "function") bm._setDirty();
      else if (bm._baseTexture && typeof bm._baseTexture.update === "function") bm._baseTexture.update();
    }

    function ws_madoTilePeriod(skin) {
      if (skin._wsbTilePd) return skin._wsbTilePd;
      var pd = { x: MADO_BG_SRC_SIZE, y: MADO_BG_SRC_SIZE };
      try {
        var cv = skin.canvas || skin._canvas;
        var cx = cv && cv.getContext ? cv.getContext("2d") : null;
        if (cx) {
          var d = cx.getImageData(0, MADO_BG_SRC_Y, MADO_BG_SRC_SIZE, MADO_BG_SRC_SIZE).data;
          var S = MADO_BG_SRC_SIZE;
          var rowDiff = function(y1, y2) {
            var s = 0;
            for (var x = 0; x < S; x++) {
              var i1 = (y1 * S + x) * 4;
              var i2 = (y2 * S + x) * 4;
              for (var c = 0; c < 4; c++) s += Math.abs(d[i1 + c] - d[i2 + c]);
            }
            return s / (S * 4);
          };
          var colDiff = function(x1, x2) {
            var s = 0;
            for (var y = 0; y < S; y++) {
              var i1 = (y * S + x1) * 4;
              var i2 = (y * S + x2) * 4;
              for (var c = 0; c < 4; c++) s += Math.abs(d[i1 + c] - d[i2 + c]);
            }
            return s / (S * 4);
          };
          var OFFS = [0, 24, 48, 72];
          var skinUrl = String(skin.url || skin._url || "");
          var trimTrailingBorder = /(?:^|[\\/])Window_ID04[6-8]\.png(?:[?#].*)?$/i.test(skinUrl);
          var pick = function(diffPair) {
            if (diffPair(0, S - 1) <= 2) return S;
            for (var p = 96; p < S; p++) {
              var worst = 0;
              for (var ki = 0; ki < OFFS.length; ki++) {
                var k = OFFS[ki];
                if (k + p >= S) break;
                var dv = diffPair(k, k + p);
                if (dv > worst) worst = dv;
                if (worst > 2) break;
              }
              if (worst <= 2) return p;
            }
            if (trimTrailingBorder && S >= 98 &&
                diffPair(S - 2, S - 1) >= 12 &&
                diffPair(S - 3, S - 2) >= 8 &&
                diffPair(S - 4, S - 3) <= 4 &&
                diffPair(S - 3, 0) <= 6) {
              return S - 2;
            }
            return S;
          };
          pd.x = pick(colDiff);
          pd.y = pick(rowDiff);
        }
      } catch (e) { /* ignore */ }
      skin._wsbTilePd = pd;
      return pd;
    }

    function ws_sbSpec(win) {
      var sc = win && win._wsbScrollBg;
      if (!sc) return null;
      var sx = typeof sc.x === "number" ? sc.x : 0;
      var sy = typeof sc.y === "number" ? sc.y : 0;
      return (sx === 0 && sy === 0) ? null : { x: sx, y: sy };
    }
    function ws_sbWrap(v, p) {
      if (!(p > 0)) return 0;
      return ((v % p) + p) % p;
    }
    function ws_sbPeriod(skin) {
      if (skin && skin.height >= MADO_FORMAT_HEIGHT_THRESHOLD) return ws_madoTilePeriod(skin);
      return { x: 96, y: 96 };
    }
    function ws_sbBakeOffset(win) {
      if (!ws_sbSpec(win)) return { x: 0, y: 0 };
      return { x: win._wsbSbOx || 0, y: win._wsbSbOy || 0 };
    }

    var _wsp_orig_refreshBack = Window.prototype._refreshBack;
    Window.prototype._refreshBack = function() {
      var skin = this._windowskin;
      if (!skin || !skin.isReady()) {
        return _wsp_orig_refreshBack.apply(this, arguments);
      }
      var inset = ws_bgInsetFor(skin);
      var isMado = skin.height >= MADO_FORMAT_HEIGHT_THRESHOLD;
      if (!isMado && !inset) {
        return _wsp_orig_refreshBack.apply(this, arguments);
      }
      var m = this._margin;
      var mL = isMado ? 0 : (inset ? inset[0] : m); // L, T, R, B
      var mT = isMado ? 0 : (inset ? inset[1] : m);
      var mR = isMado ? 0 : (inset ? inset[2] : m);
      var mB = isMado ? 0 : (inset ? inset[3] : m);
      var w = Math.max(0, this._width - mL - mR);
      var h = Math.max(0, this._height - mT - mB);
      var mzBack = this._backSprite;
      var mvBack = this._windowBackSprite;
      if (!isMado) {
        if (mzBack) {
          mzBack.bitmap = skin;
          mzBack.setFrame(0, 0, 95, 95);
          mzBack.move(mL, mT);
          mzBack.scale.x = w / 95;
          mzBack.scale.y = h / 95;
          var stdTs = mzBack.children && mzBack.children[0];
          if (stdTs) {
            stdTs.bitmap = skin;
            stdTs.setFrame(0, 96, 96, 96);
            stdTs.move(0, 0, w, h);
            stdTs.scale.x = 96 / 95;
            stdTs.scale.y = 96 / 95;
          }
          if (mzBack.setColorTone && this._colorTone) {
            mzBack.setColorTone(this._colorTone);
          }
          return;
        }
        if (mvBack) {
          if (w <= 0 || h <= 0) return;
          var stdBitmap = new Bitmap(w, h);
          mvBack.bitmap = stdBitmap;
          mvBack.setFrame(0, 0, w, h);
          mvBack.move(mL, mT);
          stdBitmap.blt(skin, 0, 0, 96, 96, 0, 0, w, h);
          var sbStd = ws_sbBakeOffset(this);
          for (var sy = sbStd.y > 0 ? sbStd.y - 96 : 0; sy < h; sy += 96) {
            for (var sx = sbStd.x > 0 ? sbStd.x - 96 : 0; sx < w; sx += 96) {
              stdBitmap.blt(skin, 0, 96, 96, 96, sx, sy, 96, 96);
            }
          }
          var stdTone = this._colorTone;
          if (stdTone && stdBitmap.adjustTone) {
            stdBitmap.adjustTone(stdTone[0], stdTone[1], stdTone[2]);
          }
          return;
        }
        return _wsp_orig_refreshBack.apply(this, arguments);
      }
      {
        if (mzBack) {
          if (w <= 0 || h <= 0) return;
          var pdz = ws_madoTilePeriod(skin);
          var bmz = this._wsbMadoBakedBmp;
          if (!bmz || bmz.width !== w || bmz.height !== h) {
            bmz = new Bitmap(w, h);
          } else {
            bmz.clear();
          }
          var sbMz = ws_sbBakeOffset(this);
          for (var mzy = sbMz.y > 0 ? sbMz.y - pdz.y : 0; mzy < h; mzy += pdz.y) {
            for (var mzx = sbMz.x > 0 ? sbMz.x - pdz.x : 0; mzx < w; mzx += pdz.x) {
              bmz.blt(skin, 0, MADO_BG_SRC_Y, pdz.x, pdz.y, mzx, mzy, pdz.x, pdz.y);
            }
          }
          ws_madoRoundClip(bmz, w, h, skin);
          this._wsbMadoBakedBmp = bmz;
          mzBack.bitmap = bmz;
          if (mzBack.setFrame) mzBack.setFrame(0, 0, w, h);
          mzBack.move(mL, mT);
          mzBack.scale.x = 1;
          mzBack.scale.y = 1;
          var ts = mzBack.children && mzBack.children[0];
          if (ts) {
            ts.bitmap = null;
            if (ts.move) ts.move(0, 0, 0, 0);
          }
          if (mzBack.setColorTone && this._colorTone) {
            mzBack.setColorTone(this._colorTone);
          }
          return;
        }
        if (mvBack) {
          if (w <= 0 || h <= 0) return;
          var tileBitmap = new Bitmap(w, h);
          mvBack.bitmap = tileBitmap;
          mvBack.setFrame(0, 0, w, h);
          mvBack.move(mL, mT);
          var pdv = ws_madoTilePeriod(skin);
          var sbMv = ws_sbBakeOffset(this);
          for (var tty = sbMv.y > 0 ? sbMv.y - pdv.y : 0; tty < h; tty += pdv.y) {
            for (var ttx = sbMv.x > 0 ? sbMv.x - pdv.x : 0; ttx < w; ttx += pdv.x) {
              tileBitmap.blt(skin, 0, MADO_BG_SRC_Y, pdv.x, pdv.y, ttx, tty, pdv.x, pdv.y);
            }
          }
          ws_madoRoundClip(tileBitmap, w, h, skin);
          var tileTone = this._colorTone;
          if (tileTone && tileBitmap.adjustTone) {
            tileBitmap.adjustTone(tileTone[0], tileTone[1], tileTone[2]);
          }
          return;
        }
      }
      return _wsp_orig_refreshBack.apply(this, arguments);
    };

    if (typeof Window.prototype.update === "function") {
      var _wsp_sb_update = Window.prototype.update;
      Window.prototype.update = function() {
        _wsp_sb_update.apply(this, arguments);
        try {
          var sc = ws_sbSpec(this);
          if (!sc) return;
          if (this._wsbOg) return;
          if (this.visible === false) return;
          if (typeof this.openness === "number" && !(this.openness > 0)) return;
          this._wsbSbX = (this._wsbSbX || 0) + sc.x;
          this._wsbSbY = (this._wsbSbY || 0) + sc.y;
          var mzTs = this._backSprite && this._backSprite.children && this._backSprite.children[0];
          if (mzTs && mzTs.bitmap && mzTs.origin) {
            mzTs.origin.x = -this._wsbSbX;
            mzTs.origin.y = -this._wsbSbY;
            return;
          }
          if (!this._backSprite && !this._windowBackSprite) return;
          var sbSkin = this._windowskin;
          if (!sbSkin) return;
          if (typeof sbSkin.isReady === "function" && !sbSkin.isReady()) return;
          var sbPd = ws_sbPeriod(sbSkin);
          var sbOx = Math.floor(ws_sbWrap(this._wsbSbX, sbPd.x));
          var sbOy = Math.floor(ws_sbWrap(this._wsbSbY, sbPd.y));
          if (sbOx === this._wsbSbOx && sbOy === this._wsbSbOy) return;
          this._wsbSbOx = sbOx;
          this._wsbSbOy = sbOy;
          if (typeof this._refreshBack === "function") this._refreshBack();
        } catch (err) { /* ignore */ }
      };
    }
  })();

  if (typeof Window_NameBox === "function") {
    var _wsp_orig_nameBox_refresh = Window_NameBox.prototype.refresh;
    Window_NameBox.prototype.refresh = function() {
      _wsp_orig_nameBox_refresh.apply(this, arguments);
      var name = this._text || this._name || "";
      if (typeof name === "string" && name.trim() === "") {
        this.openness = 0;
        this.visible = false;
      } else {
        this.visible = true;
      }
    };
    var _wsp_nb_baseTextRect = Window_NameBox.prototype.baseTextRect;
    Window_NameBox.prototype.baseTextRect = function() {
      var rect = _wsp_nb_baseTextRect.apply(this, arguments);
      var off = Math.floor((this.innerHeight - this.lineHeight()) / 2);
      if (off > 0) rect.y += off;
      return rect;
    };
  }

  (function() {
    var ws_animByClass = {"Window_PartyCommand":{"idle":{"type":"bob","amp":2}},"Window_TitleCommand":{"enter":{"type":"slide","ox":320,"oy":0,"dur":48,"easing":"easeOut"},"exit":{"type":"slide","ox":320,"oy":0,"dur":48,"easing":"easeOut"}},"Window_BattleStatus":{"enter":{"type":"slide","ox":0,"oy":180,"dur":30,"easing":"easeOutBack"}},"Window_Message":{"enter":{"type":"slide","ox":0,"oy":180,"dur":18,"easing":"linear"},"exit":{"type":"slide","ox":0,"oy":90,"dur":48,"easing":"easeOutBack"}},"Window_MenuCommand":{"enter":{"type":"slide","ox":-160,"oy":0,"dur":18,"easing":"linear"},"exit":{"type":"slide","ox":160,"oy":0,"dur":18,"easing":"easeOut","delay":6}},"Window_MenuStatus":{"enter":{"type":"slide","ox":160,"oy":0,"dur":18,"easing":"linear","delay":12},"exit":{"type":"slide","ox":-160,"oy":0,"dur":18,"easing":"easeOut"}}};
    var ws_animBySceneClass = {"Window_Gold":{"Scene_Menu":{"enter":{"type":"slide","ox":0,"oy":90,"dur":18,"easing":"linear","delay":6},"exit":{"type":"slide","ox":0,"oy":-90,"dur":18,"easing":"easeOut","delay":12}}}};
    function wsbAnimFor(win) {
      var cn = (win && win.constructor) ? win.constructor.name : "";
      if (!cn) return null;
      var byScene = ws_animBySceneClass[cn];
      if (byScene) {
        try {
          var sc = (typeof SceneManager !== "undefined") ? SceneManager._scene : null;
          if (sc) {
            for (var sk in byScene) {
              var K = (typeof window !== "undefined") ? window[sk] : null;
              if (K && sc instanceof K) return byScene[sk];
            }
          }
        } catch (efs) { /* ignore */ }
      }
      return ws_animByClass[cn] || null;
    }

    var ws_animStaggerClasses = {};
    Object.keys(ws_animByClass).forEach(function(cn) {
      var sa = ws_animByClass[cn];
      if (sa && sa.itemStagger) ws_animStaggerClasses[cn] = true;
    });
    Object.keys(ws_animBySceneClass).forEach(function(cn) {
      var m = ws_animBySceneClass[cn];
      for (var sk in m) { if (m[sk] && m[sk].itemStagger) ws_animStaggerClasses[cn] = true; }
    });
    Object.keys(ws_animStaggerClasses).forEach(function(cn) {
      var klass = (typeof window !== "undefined") ? window[cn] : null;
      if (!klass || !klass.prototype || typeof klass.prototype.drawItem !== "function") return;
      var _wsbOrigDrawItem = klass.prototype.drawItem;
      klass.prototype.drawItem = function(index) {
        var sa = wsbAnimFor(this);
        if (sa && sa.itemStagger && this._wsbStaggerActive && this.contents) {
          var sper = (sa.itemStagger.per && sa.itemStagger.per > 0) ? sa.itemStagger.per : 4;
          var sdur = (sa.enter && sa.enter.dur && sa.enter.dur > 0) ? sa.enter.dur : 18;
          var sstart = (this._wsbEnterStart !== undefined) ? this._wsbEnterStart : 0;
          var sfc = (typeof Graphics !== "undefined" && typeof Graphics.frameCount === "number") ? Graphics.frameCount : 0;
          var stt = (sfc - sstart - (index || 0) * sper) / sdur;
          var sal = stt < 0 ? 0 : (stt > 1 ? 1 : stt);
          var sprev = this.contents.paintOpacity;
          this.contents.paintOpacity = Math.round(255 * sal);
          try { _wsbOrigDrawItem.call(this, index); } finally { this.contents.paintOpacity = sprev; }
          return;
        }
        _wsbOrigDrawItem.call(this, index);
      };
    });

    var WSB_ANIM_BACK_C1 = 1.70158;
    var WSB_ANIM_BACK_C3 = WSB_ANIM_BACK_C1 + 1;
    function wsbAnimEase(easing, t) {
      var x = t < 0 ? 0 : (t > 1 ? 1 : t);
      if (easing === 'linear') return x;
      if (easing === 'easeOutBack') {
        var u = x - 1;
        return 1 + WSB_ANIM_BACK_C3 * u * u * u + WSB_ANIM_BACK_C1 * u * u;
      }
      var v = 1 - x;
      return 1 - v * v * v;
    }

    function wsbAnimOpennessClosed(win) {
      return typeof win.openness === "number" && win.openness < 255;
    }

    function wsbAnimApplySplit(win, offX, offY, scale, alpha, skew, spec) {
      if (!win._wspSplitContainer || typeof win._wspApplySplitAnimation !== "function") return false;
      win._wspApplySplitAnimation(offX, offY, scale, alpha, skew, spec || null);
      return true;
    }
    function wsbAnimResetSplit(win) {
      if (win._wspSplitContainer && typeof win._wspResetSplitAnimation === "function") win._wspResetSplitAnimation();
    }
    function wsbAnimBattleStatusInBattle(win) {
      if (!win || !win.constructor || win.constructor.name !== "Window_BattleStatus") return false;
      try {
        return typeof Scene_Battle !== "undefined" && typeof SceneManager !== "undefined" && SceneManager._scene instanceof Scene_Battle;
      } catch (eb) { return false; }
    }
    function wsbAnimFrame() {
      return (typeof Graphics !== "undefined" && typeof Graphics.frameCount === "number") ? Graphics.frameCount : 0;
    }

    function wsbAnimEnterGate(win, enter, startFrame) {
      var gd = (enter.dur && enter.dur > 0) ? enter.dur : 18;
      var gdl = (enter.delay && enter.delay > 0) ? enter.delay : 0;
      win._wsbEnterGateUntil = startFrame + gdl + gd;
    }
    if (typeof Window_Selectable !== 'undefined' && Window_Selectable.prototype && typeof Window_Selectable.prototype.isOpenAndActive === 'function') {
      var _wsp_anim_orig_isOpenAndActive = Window_Selectable.prototype.isOpenAndActive;
      Window_Selectable.prototype.isOpenAndActive = function() {
        if (this._wsbEnterGateUntil !== undefined) {
          if (wsbAnimFrame() < this._wsbEnterGateUntil) return false;
          this._wsbEnterGateUntil = undefined;
        }
        return _wsp_anim_orig_isOpenAndActive.apply(this, arguments);
      };
    }

    function wsbAnimMenuRootEnterSkip() {
      try {
        if (typeof Scene_Menu === 'undefined' || typeof Scene_MenuBase === 'undefined') return false;
        var sc = SceneManager._scene;
        if (!sc || !(sc instanceof Scene_Menu)) return false;
        var prev = SceneManager._previousClass;
        return !!(prev && prev.prototype && prev.prototype instanceof Scene_MenuBase);
      } catch (eg) { return false; }
    }

    function wsbAnimApply(win, a, frame) {
      if (win._wsbBaseX === undefined) {
        if (!(win.width > 0)) return;
        if (wsbAnimOpennessClosed(win) || win.visible === false) return;
        win._wsbBaseX = win.x;
        win._wsbBaseY = win.y;
        win._wsbEnterStart = frame;
        if (a.enter && a.enter.type && wsbAnimMenuRootEnterSkip()) {
          win._wsbEnterStart = frame - 9999;
        }
        win._wsbRestAlpha = (typeof win.alpha === "number") ? win.alpha : 1;
      }
      if (win._wsbExitArmed) {
        win._wsbExitArmed = false;
        var armedClosing = (typeof win.isClosing === "function") ? win.isClosing() : !!win._closing;
        if (armedClosing && !win._wsbExiting && !wsbAnimOpennessClosed(win) && win.visible !== false && a.exit) {
          win._closing = false;
          win._wsbExiting = true;
          win._wsbExitStart = frame;
          win._wsbPendingClose = true;
        }
      }
      var offX = 0, offY = 0, scale = 1, alpha = 1, skew = 0;
      if (win._wsbExiting && a.exit) {
        var xe = a.exit;
        var xdur = (xe.dur && xe.dur > 0) ? xe.dur : 18;
        var xdelay = (xe.delay && xe.delay > 0) ? xe.delay : 0;
        var xstart = (win._wsbExitStart !== undefined) ? win._wsbExitStart : frame;
        var xpp = wsbAnimEase(xe.easing || 'easeOut', (frame - xstart - xdelay) / xdur);
        if (xpp < 0) xpp = 0; else if (xpp > 1) xpp = 1;
        if (xpp >= 1 && (win._wsbPendingClose || win._wsbPendingHide)) {
          if (win._wsbPendingClose) { win._wsbPendingClose = false; win.openness = 0; }
          if (win._wsbPendingHide) { win._wsbPendingHide = false; win.visible = false; }
          win._wsbExiting = false;
          wsbAnimResetSplit(win);
          win.x = win._wsbBaseX;
          win.y = win._wsbBaseY;
          if (win.scale) win.scale.set(1, 1);
          win.alpha = win._wsbRestAlpha;
          if (win.transform && win.transform.skew) win.transform.skew.x = 0;
          win._wsbAnimFaded = false;
          if (win._wsbOpenQueued) {
            win._wsbOpenQueued = false;
            try {
              if (typeof _wsp_anim_orig_open === "function") _wsp_anim_orig_open.call(win);
            } catch (eq) { /* ignore */ }
            win.visible = true;
            if (typeof win.openness === "number") win.openness = 255;
            win._wsbEnterStart = frame;
            if (a.enter && a.enter.type) wsbAnimEnterGate(win, a.enter, frame);
          }
          return;
        }
        var xoffX = 0, xoffY = 0, xscale = 1, xskew = 0;
        if (xe.type === 'slide' || xe.type === 'skewSlide') {
          if (typeof xe.ox === 'number' || typeof xe.oy === 'number') {
            xoffX = xpp * (xe.ox || 0);
            xoffY = xpp * (xe.oy || 0);
          } else {
            var xdir = xe.dir || 'up';
            var xdist = (xdir === 'left' || xdir === 'right') ? win.width : win.height;
            if (xdir === 'left') xoffX = -xpp * xdist;
            else if (xdir === 'right') xoffX = xpp * xdist;
            else if (xdir === 'up') xoffY = -xpp * xdist;
            else xoffY = xpp * xdist;
          }
          if (xe.type === 'skewSlide') xskew = xpp * 0.35;
          if (typeof xe.sc === 'number') xscale = 1 - (1 - xe.sc) * xpp;
        } else if (xe.type === 'scale') {
          xscale = 1 - 0.8 * xpp;
        }
        var xfa = (xe.al === 0) ? 1 : ((1 - xpp) < 0 ? 0 : (1 - xpp));
        if (!wsbAnimApplySplit(win, xoffX, xoffY, xscale, xfa, xskew, xe)) {
          win.x = Math.round(win._wsbBaseX + xoffX + (win.width * (1 - xscale)) / 2);
          win.y = Math.round(win._wsbBaseY + xoffY + (win.height * (1 - xscale)) / 2);
          if (win.scale) win.scale.set(xscale, xscale);
          win.alpha = win._wsbRestAlpha * xfa;
          if (win.transform && win.transform.skew) win.transform.skew.x = xskew;
        }
        return;
      }
      var e = a.enter;
      var enterDone = true;
      if (e && e.type) {
        var dur = (e.dur && e.dur > 0) ? e.dur : 18;
        var delay = (e.delay && e.delay > 0) ? e.delay : 0;
        var tt = (frame - win._wsbEnterStart - delay) / dur;
        enterDone = tt >= 1;
        var p = wsbAnimEase(e.easing || 'easeOut', tt);
        if (tt < 0 && e.al !== 0) {
          alpha = 0;
        } else if (tt < 1) {
          var inv = 1 - p;
          var dir = e.dir || 'up';
          if (e.type === 'slide' || e.type === 'skewSlide') {
            if (typeof e.ox === 'number' || typeof e.oy === 'number') {
              offX = inv * (e.ox || 0);
              offY = inv * (e.oy || 0);
            } else {
              var dist = (dir === 'left' || dir === 'right') ? win.width : win.height;
              if (dir === 'left') offX = -inv * dist;
              else if (dir === 'right') offX = inv * dist;
              else if (dir === 'up') offY = -inv * dist;
              else offY = inv * dist;
            }
            if (e.type === 'skewSlide') skew = inv * 0.35;
            if (typeof e.sc === 'number') scale = e.sc + (1 - e.sc) * p;
            alpha = (e.al === 0) ? 1 : p;
          } else if (e.type === 'scale') {
            scale = 0.2 + 0.8 * p;
            alpha = p;
          } else if (e.type === 'fade') {
            alpha = p;
          }
        }
      }
      var id = a.idle;
      if (id && id.type && enterDone) {
        var period = (id.period && id.period > 0) ? id.period : 90;
        var ph = Math.sin((2 * Math.PI * frame) / period);
        if (id.type === 'bob') offY += ph * ((id.amp && id.amp > 0) ? id.amp : 4);
        else if (id.type === 'pulse') scale *= 1 + ph * ((id.amp && id.amp > 0) ? id.amp : 0.04);
        else if (id.type === 'pulseHold') {
          var amp2 = (id.amp && id.amp > 0) ? id.amp : 0.04;
          var phase2 = (frame % period) / period;
          if (phase2 < 0.5) scale *= 1 + Math.sin(Math.PI * (phase2 / 0.5)) * amp2;
        }
      }
      var splitSpec = (!enterDone && e && e.type) ? e : null;
      if (!wsbAnimApplySplit(win, offX, offY, scale, alpha, skew, splitSpec)) {
        win.x = Math.round(win._wsbBaseX + offX + (win.width * (1 - scale)) / 2);
        win.y = Math.round(win._wsbBaseY + offY + (win.height * (1 - scale)) / 2);
        if (win.scale) win.scale.set(scale, scale);
        if (alpha < 1) {
          var fa = alpha < 0 ? 0 : alpha;
          win.alpha = win._wsbRestAlpha * fa;
          win._wsbAnimFaded = true;
        } else if (win._wsbAnimFaded) {
          win.alpha = win._wsbRestAlpha;
          win._wsbAnimFaded = false;
        }
        if (win.transform && win.transform.skew) win.transform.skew.x = skew;
      }
      if (a.cursorPulse && win._cursorSprite) {
        var cp = 0.7 + 0.3 * (0.5 + 0.5 * Math.sin((2 * Math.PI * frame) / 45));
        win._cursorSprite.alpha *= cp;
      }
      if (a.itemStagger && typeof win.refresh === "function" && typeof win.maxItems === "function") {
        var sper2 = (a.itemStagger.per && a.itemStagger.per > 0) ? a.itemStagger.per : 4;
        var sdur2 = (a.enter && a.enter.dur && a.enter.dur > 0) ? a.enter.dur : 18;
        var sN = 0; try { sN = win.maxItems(); } catch (e2) { sN = 0; }
        var sEnd = win._wsbEnterStart + sdur2 + Math.max(0, sN - 1) * sper2;
        if (frame <= sEnd) {
          win._wsbStaggerActive = true;
          try { win.refresh(); } catch (e3) { /* ignore */ }
        } else if (win._wsbStaggerActive) {
          win._wsbStaggerActive = false;
          try { win.refresh(); } catch (e4) { /* ignore */ }
        }
      }
    }

    var _wsp_anim_orig_update = Window.prototype.update;
    Window.prototype.update = function() {
      _wsp_anim_orig_update.apply(this, arguments);
      try {
        var a = wsbAnimFor(this);
        if (a && typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') {
          wsbAnimApply(this, a, Graphics.frameCount);
        }
      } catch (err) { /* ignore */ }
    };

    if (typeof Window !== 'undefined' && Window.prototype && typeof Window.prototype._updateFilterArea === 'function') {
      var _wsp_anim_orig_updateFilterArea = Window.prototype._updateFilterArea;
      Window.prototype._updateFilterArea = function() {
        _wsp_anim_orig_updateFilterArea.apply(this, arguments);
        try {
          var sx = (this.scale && typeof this.scale.x === "number") ? this.scale.x : 1;
          var sy = (this.scale && typeof this.scale.y === "number") ? this.scale.y : 1;
          var sk = (this.transform && this.transform.skew) ? (this.transform.skew.x || 0) : 0;
          if (sx === 1 && sy === 1 && sk === 0) return;
          var ca = this._clientArea;
          var fa = ca && ca.filterArea;
          if (!ca || !fa || !ca.worldTransform) return;
          var iw = this.innerWidth;
          var ih = this.innerHeight;
          var pts = [[0, 0], [iw, 0], [0, ih], [iw, ih]];
          var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          for (var q = 0; q < 4; q++) {
            var wp = ca.worldTransform.apply({ x: pts[q][0], y: pts[q][1] });
            if (wp.x < minX) minX = wp.x;
            if (wp.y < minY) minY = wp.y;
            if (wp.x > maxX) maxX = wp.x;
            if (wp.y > maxY) maxY = wp.y;
          }
          fa.x = minX + this.origin.x;
          fa.y = minY + this.origin.y;
          fa.width = maxX - minX;
          fa.height = maxY - minY;
        } catch (efa) { /* ignore */ }
      };
    }

    if (typeof Scene_Base !== 'undefined' && Scene_Base.prototype) {
      var _wsp_anim_orig_sceneStart = Scene_Base.prototype.start;
      Scene_Base.prototype.start = function() {
        _wsp_anim_orig_sceneStart.apply(this, arguments);
        try {
          var wl = this._windowLayer;
          var ch = wl && wl.children;
          if (ch && typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') {
            for (var si = 0; si < ch.length; si++) {
              var sw = ch[si];
              var sa = wsbAnimFor(sw);
              if (sa) wsbAnimApply(sw, sa, Graphics.frameCount);
            }
          }
        } catch (errSS) { /* ignore */ }
      };
    }

    function wsbAnimQueueEnterAfterExit(win, a) {
      if (!a || !a.enter || !a.enter.type || !a.exit || !a.exit.type) return false;
      if (!win._wsbExiting || !(win._wsbPendingClose || win._wsbPendingHide)) return false;
      win._wsbOpenQueued = true;
      return true;
    }

    function wsbAnimCancelExit(win) {
      win._wsbOpenQueued = false;
      if (!win._wsbExiting && !win._wsbPendingClose && !win._wsbPendingHide) return false;
      win._wsbExiting = false;
      win._wsbPendingClose = false;
      wsbAnimResetSplit(win);
      win._wsbPendingHide = false;
      if (win._wsbBaseX !== undefined) {
        win.x = win._wsbBaseX;
        win.y = win._wsbBaseY;
        if (win.scale && win.scale.set) win.scale.set(1, 1);
        win.alpha = (typeof win._wsbRestAlpha === "number") ? win._wsbRestAlpha : 1;
        if (win.transform && win.transform.skew) win.transform.skew.x = 0;
        win._wsbAnimFaded = false;
      }
      return true;
    }

    if (typeof Window_Base !== 'undefined' && Window_Base.prototype) {
      var _wsp_anim_orig_open = Window_Base.prototype.open;
      Window_Base.prototype.open = function() {
        if (wsbAnimBattleStatusInBattle(this)) {
          try {
            var oab = ws_animByClass.Window_BattleStatus;
            if (oab && oab.enter && oab.enter.type && this._wsbBaseX === undefined && wsbAnimOpennessClosed(this) && this.visible !== false) {
              _wsp_anim_orig_open.apply(this, arguments);
              this.openness = 255;
              return;
            }
          } catch (errOB) { /* ignore */ }
          _wsp_anim_orig_open.apply(this, arguments);
          return;
        }
        try {
          if (this._wsbAnimBypass) { _wsp_anim_orig_open.apply(this, arguments); return; }
          var oa = wsbAnimFor(this);
          if (oa) {
            if (wsbAnimQueueEnterAfterExit(this, oa)) return;
            var reopening = wsbAnimCancelExit(this);
            if (oa.enter && oa.enter.type && (reopening || wsbAnimOpennessClosed(this))) {
              var wasClosed = wsbAnimOpennessClosed(this);
              _wsp_anim_orig_open.apply(this, arguments);
              this.openness = 255;
              var ofc = (typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') ? Graphics.frameCount : 0;
              if (this._wsbBaseX !== undefined) {
                this._wsbBaseX = this.x;
                this._wsbBaseY = this.y;
                this._wsbEnterStart = ofc;
              }
              if (wasClosed) this._wsbOpenForcedFrame = ofc;
              if (wasClosed) wsbAnimEnterGate(this, oa.enter, ofc);
              return;
            }
          }
        } catch (errO) { /* ignore */ }
        _wsp_anim_orig_open.apply(this, arguments);
      };
      var _wsp_anim_orig_close = Window_Base.prototype.close;
      Window_Base.prototype.close = function() {
        if (wsbAnimBattleStatusInBattle(this)) {
          if (this._wsbExiting) return;
          _wsp_anim_orig_close.apply(this, arguments);
          return;
        }
        try {
          if (this._wsbAnimBypass) {
            wsbAnimCancelExit(this);
            _wsp_anim_orig_close.apply(this, arguments);
            return;
          }
          var ca = wsbAnimFor(this);
          if (ca) {
            this._wsbOpenQueued = false;
            var cfc = (typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') ? Graphics.frameCount : 0;
            if (this._wsbOpenForcedFrame === cfc && !wsbAnimOpennessClosed(this) && !this._wsbExiting) {
              this._wsbOpenForcedFrame = undefined;
              this._wsbEnterGateUntil = undefined;
              this.openness = 0;
              this._opening = false;
              return;
            }
          }
          if (ca && ca.exit) {
            if (this._wsbPendingClose) return;
            if (typeof this.doesContinue === "function" && typeof this.isClosing === "function" &&
                !this._wsbExiting && !wsbAnimOpennessClosed(this) &&
                this._wsbBaseX !== undefined && this.visible) {
              this._wsbExitArmed = true;
              _wsp_anim_orig_close.apply(this, arguments);
              return;
            }
            if (this._wsbExiting) { this._wsbPendingClose = true; return; }
            if (!wsbAnimOpennessClosed(this) && this._wsbBaseX !== undefined && this.visible) {
              this._wsbExiting = true;
              this._wsbExitStart = (typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') ? Graphics.frameCount : 0;
              this._wsbPendingClose = true;
              return;
            }
          }
        } catch (errC) { /* ignore */ }
        _wsp_anim_orig_close.apply(this, arguments);
      };
      var _wsp_anim_orig_showW = Window_Base.prototype.show;
      Window_Base.prototype.show = function() {
        if (wsbAnimBattleStatusInBattle(this)) { _wsp_anim_orig_showW.apply(this, arguments); return; }
        try {
          var sa2 = wsbAnimFor(this);
          if (sa2) {
            if (wsbAnimQueueEnterAfterExit(this, sa2)) return;
            var reshowing = wsbAnimCancelExit(this);
            if (sa2.enter && sa2.enter.type && (reshowing || this.visible === false)) {
              _wsp_anim_orig_showW.apply(this, arguments);
              var sfc2 = (typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') ? Graphics.frameCount : 0;
              if (this._wsbBaseX !== undefined) this._wsbEnterStart = sfc2;
              return;
            }
          }
        } catch (errS) { /* ignore */ }
        _wsp_anim_orig_showW.apply(this, arguments);
      };
      var _wsp_anim_orig_hideW = Window_Base.prototype.hide;
      Window_Base.prototype.hide = function() {
        if (wsbAnimBattleStatusInBattle(this)) { _wsp_anim_orig_hideW.apply(this, arguments); return; }
        try {
          var ha = wsbAnimFor(this);
          if (ha) this._wsbOpenQueued = false;
          if (ha && ha.exit) {
            if (this._wsbPendingHide) return;
            if (this._wsbExiting) { this._wsbPendingHide = true; return; }
            if (this.visible !== false && !wsbAnimOpennessClosed(this) && this._wsbBaseX !== undefined) {
              this._wsbExiting = true;
              this._wsbExitStart = (typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') ? Graphics.frameCount : 0;
              this._wsbPendingHide = true;
              return;
            }
          }
        } catch (errH) { /* ignore */ }
        _wsp_anim_orig_hideW.apply(this, arguments);
      };
    }

    if (typeof Scene_Battle !== 'undefined' && Scene_Battle.prototype) {
      var wsbAnimHoldInputWindows = function(scene) {
        try {
          var pc = scene._partyCommandWindow;
          if (pc) {
            if (typeof pc.deactivate === "function") pc.deactivate();
            if (typeof pc.close === "function") pc.close();
          }
          var ac = scene._actorCommandWindow;
          if (ac) {
            if (typeof ac.deactivate === "function") ac.deactivate();
            if (typeof ac.close === "function") ac.close();
          }
        } catch (eh) { /* ignore */ }
      };
      var wsbAnimEnterFrames = function(a) {
        if (!a || !a.enter || !a.enter.type) return 0;
        var d = (a.enter.dur && a.enter.dur > 0) ? a.enter.dur : 18;
        var dl = (a.enter.delay && a.enter.delay > 0) ? a.enter.delay : 0;
        return d + dl;
      };
      var wsbAnimStatusEnterHold = function(scene) {
        try {
          var sw = scene._statusWindow;
          var ba = ws_animByClass.Window_BattleStatus;
          if (!sw || !ba || !ba.enter || !ba.enter.type) return false;
          if (!wsbAnimBattleStatusInBattle(sw)) return false;
          if (sw.visible === false || wsbAnimOpennessClosed(sw)) return false;
          if (sw._wsbBaseX === undefined) return true;
          if (sw._wsbEnterStart === undefined) return false;
          return wsbAnimFrame() < sw._wsbEnterStart + wsbAnimEnterFrames(ba);
        } catch (ew) { return false; }
      };
      var _wsp_anim_orig_startParty = Scene_Battle.prototype.startPartyCommandSelection;
      if (_wsp_anim_orig_startParty) {
        Scene_Battle.prototype.startPartyCommandSelection = function() {
          if (wsbAnimStatusEnterHold(this)) {
            wsbAnimHoldInputWindows(this);
            return;
          }
          try {
            if (typeof BattleManager !== 'undefined' && typeof BattleManager.isTpb === 'function' && BattleManager.isTpb() &&
                typeof BattleManager.isPartyTpbInputtable === 'function' && !BattleManager.isPartyTpbInputtable()) {
              wsbAnimHoldInputWindows(this);
              var wsbSw = this._statusWindow;
              if (wsbSw) {
                if (typeof wsbSw.deselect === "function") wsbSw.deselect();
                if (typeof wsbSw.show === "function") wsbSw.show();
                if (typeof wsbSw.open === "function") wsbSw.open();
              }
              return;
            }
          } catch (etp) { /* ignore */ }
          var wsbAc = this._actorCommandWindow;
          if (wsbAc) wsbAc._wsbAnimBypass = true;
          try {
            return _wsp_anim_orig_startParty.apply(this, arguments);
          } finally {
            if (wsbAc) wsbAc._wsbAnimBypass = false;
          }
        };
      }
      var _wsp_anim_orig_startActor = Scene_Battle.prototype.startActorCommandSelection;
      if (_wsp_anim_orig_startActor) {
        Scene_Battle.prototype.startActorCommandSelection = function() {
          if (wsbAnimStatusEnterHold(this)) {
            wsbAnimHoldInputWindows(this);
            return;
          }
          return _wsp_anim_orig_startActor.apply(this, arguments);
        };
      }
    }

    if (typeof BattleManager !== 'undefined' && typeof BattleManager.selectNextCommand === 'function' &&
        typeof BattleManager.isTpb === 'function') {
      var _wsp_anim_orig_selNextCmd = BattleManager.selectNextCommand;
      BattleManager.selectNextCommand = function() {
        var r = _wsp_anim_orig_selNextCmd.apply(this, arguments);
        try {
          if (this.isTpb() && this._inputting === true && !this._currentActor) {
            this._inputting = false;
          }
        } catch (etn) { /* ignore */ }
        return r;
      };
    }

    if (typeof Window_Message !== 'undefined' && Window_Message.prototype &&
        typeof Window_Message.prototype.synchronizeNameBox === 'function') {
      var _wsp_anim_orig_syncNameBox = Window_Message.prototype.synchronizeNameBox;
      Window_Message.prototype.synchronizeNameBox = function() {
        try {
          var nb = this._nameBoxWindow;
          if (nb) {
            var na = wsbAnimFor(nb);
            var nbExiting = nb._wsbExiting === true || nb._wsbPendingClose === true;
            var msgExiting = this._wsbExiting === true || this._wsbPendingClose === true;
            if (!nbExiting && na && na.exit && na.exit.type && nb._wsbBaseX !== undefined &&
                nb.visible !== false && typeof nb.openness === "number" && nb.openness >= 255) {
              var nativeClosing = typeof this.isClosing === "function" && this.isClosing() &&
                typeof this.openness === "number" && this.openness < 255;
              if (msgExiting || nativeClosing) {
                nb._wsbExiting = true;
                nb._wsbExitStart = wsbAnimFrame();
                nb._wsbPendingClose = true;
                return;
              }
            }
            if (nbExiting || msgExiting) return;
            if (na && na.enter && na.enter.type && typeof nb.openness === "number") {
              var nbBefore = nb.openness;
              _wsp_anim_orig_syncNameBox.apply(this, arguments);
              if (nbBefore < 255 && nb.openness >= 255 &&
                  nb._wsbBaseX !== undefined && nb.visible !== false) {
                nb._wsbBaseX = nb.x;
                nb._wsbBaseY = nb.y;
                nb._wsbEnterStart = wsbAnimFrame();
              }
              return;
            }
          }
        } catch (enb) { /* ignore */ }
        _wsp_anim_orig_syncNameBox.apply(this, arguments);
      };
    }

    if (typeof BattleManager !== 'undefined' && typeof BattleManager.endBattle === 'function') {
      var _wsp_anim_orig_endBattle = BattleManager.endBattle;
      BattleManager.endBattle = function(result) {
        try {
          var eba = ws_animByClass.Window_BattleStatus;
          var esc = (typeof SceneManager !== "undefined") ? SceneManager._scene : null;
          var esw = (esc && typeof Scene_Battle !== "undefined" && esc instanceof Scene_Battle) ? esc._statusWindow : null;
          if (esw && eba && eba.exit && eba.exit.type && esw._wsbBaseX !== undefined && !esw._wsbExiting &&
              esw.visible !== false && !wsbAnimOpennessClosed(esw)) {
            esw._wsbExiting = true;
            esw._wsbExitStart = wsbAnimFrame();
            esw._wsbPendingClose = true;
          }
        } catch (ee2) { /* ignore */ }
        return _wsp_anim_orig_endBattle.apply(this, arguments);
      };
    }

    if (typeof Scene_Base !== 'undefined' && Scene_Base.prototype) {
      var _wsp_anim_orig_stop = Scene_Base.prototype.stop;
      Scene_Base.prototype.stop = function() {
        try {
          if (typeof Scene_Menu !== "undefined" && typeof Scene_MenuBase !== "undefined" &&
              this instanceof Scene_Menu && SceneManager._nextScene &&
              SceneManager._nextScene instanceof Scene_MenuBase) {
            return _wsp_anim_orig_stop.apply(this, arguments);
          }
          var fc = (typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') ? Graphics.frameCount : 0;
          var maxEnd = 0, any = false;
          var kids = (this._windowLayer && this._windowLayer.children) ? this._windowLayer.children : [];
          for (var i = 0; i < kids.length; i++) {
            var w = kids[i];
            var wa = wsbAnimFor(w);
            if (wa && wa.exit) {
              var d = ((wa.exit.dur && wa.exit.dur > 0) ? wa.exit.dur : 18) + ((wa.exit.delay && wa.exit.delay > 0) ? wa.exit.delay : 0);
              if (w._wsbExiting) {
                var rem = ((w._wsbExitStart || fc) + d) - fc;
                if (rem > 0) { if (rem > maxEnd) maxEnd = rem; any = true; }
              } else if (!wsbAnimOpennessClosed(w) && w.visible !== false) {
                w._wsbExiting = true; w._wsbExitStart = fc;
                if (d > maxEnd) maxEnd = d;
                any = true;
              }
            }
          }
          if (any) this._wsbExitUntil = fc + Math.min(maxEnd, 120) + 2;
        } catch (e5) { /* ignore */ }
        _wsp_anim_orig_stop.apply(this, arguments);
      };
      var _wsp_anim_orig_isBusy = Scene_Base.prototype.isBusy;
      Scene_Base.prototype.isBusy = function() {
        var busy = _wsp_anim_orig_isBusy ? _wsp_anim_orig_isBusy.apply(this, arguments) : false;
        if (this._wsbExitUntil) {
          var fc2 = (typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number') ? Graphics.frameCount : 0;
          if (fc2 < this._wsbExitUntil) return true;
        }
        return busy;
      };
    }
  })();

  (function() {
    var ws_confirmFxByClass = {"Window_TitleCommand":{"type":"cursorGlow"},"Window_MenuCommand":{"type":"ripple","amp":20},"Window_MenuStatus":{"type":"cursorGlow"},"Window_BattleStatus":{"type":"cursorGlow","dur":21},"Window_PartyCommand":{"type":"cursorGlow","dur":21}};
    if (!Object.keys(ws_confirmFxByClass).length) return;
    function wsbCfxFor(win) {
      var cn = (win && win.constructor) ? win.constructor.name : "";
      return cn ? (ws_confirmFxByClass[cn] || null) : null;
    }
    function wsbCfxCursor(win) {
      return (win && (win._cursorSprite || win._windowCursorSprite)) || null;
    }
    function wsbCfxClearSprites(fx) {
      if (!fx) return;
      if (fx._hs) {
        if (fx._hs.parent) { fx._hs.parent.removeChild(fx._hs); }
        if (fx._hs.bitmap && typeof fx._hs.bitmap.destroy === 'function') { fx._hs.bitmap.destroy(); }
        fx._hs = null;
      }
    }
    function wsbCfxRestoreCursor(win, fx) {
      if (!fx || !fx._cr) return;
      var b = fx._cr;
      fx._cr = null;
      fx._gx = 0;
      fx._gy = 0;
      if (win && typeof win.setCursorRect === 'function') {
        win.setCursorRect(b.x, b.y, b.width, b.height);
      }
    }
    function wsbCfxHideCursorSprite(win, fx) {
      if (!fx || fx.type !== 'ripple') return;
      var cs = wsbCfxCursor(win);
      if (!cs) return;
      if (fx._csr === undefined) fx._csr = (cs.renderable !== false);
      cs.renderable = false;
    }
    function wsbCfxShowCursorSprite(win, fx) {
      if (!fx || fx._csr === undefined) return;
      var cs = wsbCfxCursor(win);
      if (cs) cs.renderable = (fx._csr !== false);
      fx._csr = undefined;
    }
    var WSB_CFX_GLOW_PAD = 24;
    function wsbCfxPad(win) {
      return (win && typeof win._padding === 'number') ? win._padding : 0;
    }
    function wsbCfxDrawGlow(bm, pad, w, h, a) {
      if (!bm) return;
      var ctx = bm.context || bm._context;
      if (!ctx) return;
      ctx.clearRect(0, 0, w + pad * 2, h + pad * 2);
      if (a > 0) {
        var outer = Math.round(10 * a) + 2;
        var inner = Math.round(8 * a);
        ctx.save();
        ctx.shadowColor = "rgba(255,255,255," + a + ")";
        ctx.shadowBlur = outer;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fillRect(pad, pad, w, h);
        ctx.restore();
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(pad, pad, w, h);
        ctx.restore();
        if (inner > 0) {
          var t = inner + 8;
          ctx.save();
          ctx.beginPath();
          ctx.rect(pad, pad, w, h);
          ctx.clip();
          ctx.shadowColor = "rgba(255,255,255," + (a * 0.6) + ")";
          ctx.shadowBlur = inner;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.fillStyle = "rgba(0,0,0,1)";
          ctx.beginPath();
          ctx.moveTo(pad - t, pad - t);
          ctx.lineTo(pad + w + t, pad - t);
          ctx.lineTo(pad + w + t, pad + h + t);
          ctx.lineTo(pad - t, pad + h + t);
          ctx.closePath();
          ctx.moveTo(pad, pad);
          ctx.lineTo(pad, pad + h);
          ctx.lineTo(pad + w, pad + h);
          ctx.lineTo(pad + w, pad);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }
      if (typeof bm._setDirty === "function") { bm._setDirty(); }
      if (bm._baseTexture && typeof bm._baseTexture.update === "function") { bm._baseTexture.update(); }
    }
    function wsbCfxCtx(bm, pad, w, h) {
      if (!bm) return null;
      var ctx = bm.context || bm._context;
      if (!ctx) return null;
      ctx.clearRect(0, 0, w + pad * 2, h + pad * 2);
      return ctx;
    }
    function wsbCfxFlush(bm) {
      if (!bm) return;
      if (typeof bm._setDirty === "function") { bm._setDirty(); }
      if (bm._baseTexture && typeof bm._baseTexture.update === "function") { bm._baseTexture.update(); }
    }
    function wsbCfxDrawRipple(bm, pad, w, h, p, amp) {
      var ctx = wsbCfxCtx(bm, pad, w, h);
      if (!ctx) return;
      var a = 1 - p;
      if (a > 0) {
        var e = amp * p;
        ctx.save();
        ctx.strokeStyle = "rgba(255,255,255," + a + ")";
        ctx.lineWidth = 2;
        ctx.strokeRect(pad - e, pad - e, w + e * 2, h + e * 2);
        ctx.restore();
      }
      wsbCfxFlush(bm);
    }
    function wsbCfxDrawFlash(bm, pad, w, h, p, amp) {
      var ctx = wsbCfxCtx(bm, pad, w, h);
      if (!ctx) return;
      var a = Math.min(1, amp) * (1 - p);
      if (a > 0) {
        ctx.save();
        ctx.fillStyle = "rgba(255,255,255," + a + ")";
        ctx.fillRect(pad, pad, w, h);
        ctx.restore();
      }
      wsbCfxFlush(bm);
    }
    function wsbCfxDrawShine(bm, pad, w, h, p, amp) {
      var ctx = wsbCfxCtx(bm, pad, w, h);
      if (!ctx) return;
      if (typeof ctx.createLinearGradient !== 'function') { wsbCfxFlush(bm); return; }
      var a = Math.min(1, amp);
      var bw = Math.max(16, Math.round(h * 1.5));
      var cx = pad - bw + p * (w + bw * 2);
      ctx.save();
      ctx.beginPath();
      ctx.rect(pad, pad, w, h);
      ctx.clip();
      var g = ctx.createLinearGradient(cx - bw / 2, 0, cx + bw / 2, 0);
      g.addColorStop(0, "rgba(255,255,255,0)");
      g.addColorStop(0.5, "rgba(255,255,255," + a + ")");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      var sk = Math.round(h * 0.35);
      ctx.beginPath();
      ctx.moveTo(cx - bw / 2 + sk, pad);
      ctx.lineTo(cx + bw / 2 + sk, pad);
      ctx.lineTo(cx + bw / 2 - sk, pad + h);
      ctx.lineTo(cx - bw / 2 - sk, pad + h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      wsbCfxFlush(bm);
    }
    var WSB_CFX_DEF_DUR = 20;
    var WSB_CFX_DEF_AMP = { ripple: 12, itemFlash: 0.6, itemPop: 0.08, shine: 0.7 };
    function wsbCfxAmp(fx) {
      if (typeof fx.amp === 'number' && fx.amp > 0) return fx.amp;
      var d = WSB_CFX_DEF_AMP[fx.type];
      return (typeof d === 'number') ? d : 0;
    }
    function wsbCfxPadFor(fx) {
      return fx.type === 'ripple' ? Math.max(WSB_CFX_GLOW_PAD, Math.ceil(wsbCfxAmp(fx)) + 8) : WSB_CFX_GLOW_PAD;
    }
    var WSB_CFX_OVERLAY = { cursorGlow: 1, ripple: 1, itemFlash: 1, shine: 1 };
    if (typeof Window_Selectable !== 'undefined' && Window_Selectable.prototype && typeof Window_Selectable.prototype.processOk === 'function') {
      var _wsp_cfx_processOk = Window_Selectable.prototype.processOk;
      Window_Selectable.prototype.processOk = function() {
        var spec = wsbCfxFor(this);
        var enabled = true;
        try { if (typeof this.isCurrentItemEnabled === 'function') enabled = this.isCurrentItemEnabled(); } catch (e0) { enabled = true; }
        if (spec && spec.type && enabled) {
          wsbCfxShowCursorSprite(this, this._wsbCfx);
          wsbCfxRestoreCursor(this, this._wsbCfx);
          wsbCfxClearSprites(this._wsbCfx);
          this._wsbCfx = { t: 0, dur: (spec.dur > 0 ? spec.dur : WSB_CFX_DEF_DUR), type: spec.type, amp: spec.amp };
          try { if (typeof this.playOkSound === 'function') this.playOkSound(); } catch (e1) { /* ignore */ }
          try { if (typeof this.updateInputData === 'function') this.updateInputData(); } catch (e2) { /* ignore */ }
          this._wsbCfxWaitLock = true;
          this._wsbCfxDeferredOk = true;
          return;
        }
        _wsp_cfx_processOk.apply(this, arguments);
      };
    }
    if (typeof Window_Selectable !== 'undefined' && Window_Selectable.prototype && typeof Window_Selectable.prototype.isOpenAndActive === 'function') {
      var _wsp_cfx_isOpenActive = Window_Selectable.prototype.isOpenAndActive;
      Window_Selectable.prototype.isOpenAndActive = function() {
        if (this._wsbCfxWaitLock) return false;
        return _wsp_cfx_isOpenActive.apply(this, arguments);
      };
    }
    if (typeof Window !== 'undefined' && Window.prototype && typeof Window.prototype.update === 'function') {
      var _wsp_cfx_update = Window.prototype.update;
      Window.prototype.update = function() {
        _wsp_cfx_update.apply(this, arguments);
        var fx = this._wsbCfx;
        if (!fx) return;
        fx.t++;
        var p = fx.t / fx.dur;
        if (p >= 1) {
          wsbCfxShowCursorSprite(this, fx);
          wsbCfxRestoreCursor(this, fx);
          wsbCfxClearSprites(fx);
          this._wsbCfx = null;
          if (this._wsbCfxDeferredOk) {
            this._wsbCfxDeferredOk = false;
            this._wsbCfxWaitLock = false;
            try { if (typeof this.deactivate === 'function') this.deactivate(); } catch (e4) { /* ignore */ }
            try { if (typeof this.callOkHandler === 'function') this.callOkHandler(); } catch (e5) { /* ignore */ }
          }
          return;
        }
        if (WSB_CFX_OVERLAY[fx.type]) {
          var cg = wsbCfxCursor(this);
          var cr = this._cursorRect;
          if (cr && cr.width > 0 && cr.height > 0 && typeof Bitmap !== 'undefined' && typeof Sprite !== 'undefined') {
            wsbCfxHideCursorSprite(this, fx);
            var gp = wsbCfxPadFor(fx);
            if (!fx._hs) {
              fx._gw = cr.width;
              fx._gh = cr.height;
              var gsp = new Sprite(new Bitmap(fx._gw + gp * 2, fx._gh + gp * 2));
              this.addChild(gsp);
              fx._hs = gsp;
            }
            if (fx._hs) {
              var gox = cg ? ((cg.parent ? cg.parent.x : 0) + cg.x) : (wsbCfxPad(this) - (this.origin ? this.origin.x : 0) + cr.x);
              var goy = cg ? ((cg.parent ? cg.parent.y : 0) + cg.y) : (wsbCfxPad(this) - (this.origin ? this.origin.y : 0) + cr.y);
              fx._hs.x = gox - gp;
              fx._hs.y = goy - gp;
              var cAmp = wsbCfxAmp(fx);
              if (fx.type === 'ripple') { wsbCfxDrawRipple(fx._hs.bitmap, gp, fx._gw, fx._gh, p, cAmp); }
              else if (fx.type === 'itemFlash') { wsbCfxDrawFlash(fx._hs.bitmap, gp, fx._gw, fx._gh, p, cAmp); }
              else if (fx.type === 'shine') { wsbCfxDrawShine(fx._hs.bitmap, gp, fx._gw, fx._gh, p, cAmp); }
              else { wsbCfxDrawGlow(fx._hs.bitmap, gp, fx._gw, fx._gh, 1 - p); }
            }
          }
        } else if (fx.type === 'itemPop') {
          var pr = this._cursorRect;
          if (pr && pr.width > 0 && pr.height > 0 && typeof this.setCursorRect === 'function') {
            if (!fx._cr) {
              fx._cr = { x: pr.x, y: pr.y, width: pr.width, height: pr.height };
              fx._gx = 0;
              fx._gy = 0;
            }
            var pb = fx._cr;
            var pe = wsbCfxAmp(fx) * Math.sin(Math.PI * p);
            var pgx = Math.round((pb.width * pe) / 2);
            var pgy = Math.round((pb.height * pe) / 2);
            if (pgx !== fx._gx || pgy !== fx._gy) {
              fx._gx = pgx;
              fx._gy = pgy;
              this.setCursorRect(pb.x - pgx, pb.y - pgy, pb.width + pgx * 2, pb.height + pgy * 2);
            }
          }
        }
      };
    }
  })();

  (function() {
    var ws_ogByClass = {"Window_TitleCommand":{"h":[{"p":0,"a":0.6},{"p":0.513,"a":1},{"p":1,"a":0.6}]},"Window_MenuCommand":{"h":[{"p":0,"a":0.46},{"p":0.458,"a":1},{"p":1,"a":0.46}]},"Window_MenuStatus":{"h":[{"p":0,"a":0.46},{"p":0.464,"a":1},{"p":1,"a":0.46}]},"Window_Gold":{"h":[{"p":0,"a":0.46},{"p":0.464,"a":1},{"p":1,"a":0.46}]},"Window_EquipSlot":{"h":[{"p":0,"a":1},{"p":0.01,"a":1}]},"Window_Help":{"h":[{"p":0.428,"a":1},{"p":1,"a":0}]},"Window_Message":{"h":[{"p":0,"a":0.4},{"p":0.55,"a":1},{"p":1,"a":0.4}]},"Window_NameBox":{"h":[{"p":0,"a":0.7},{"p":0.562,"a":1},{"p":1,"a":0.7}]},"Window_ChoiceList":{"h":[{"p":0,"a":0.7},{"p":0.53,"a":1},{"p":1,"a":0.7}]}};
    var ws_roundByClass = {"Window_TitleCommand":true,"Window_Options":true,"Window_ItemCategory":true,"Window_SavefileList":true,"Window_ItemList":true,"Window_SkillType":true,"Window_SkillStatus":true,"Window_SkillList":true,"Window_EquipCommand":true,"Window_EquipSlot":true,"Window_EquipItem":true,"Window_EquipStatus":true,"Window_Status":true,"Window_StatusParams":true,"Window_StatusEquip":true,"Window_GameEnd":true,"Window_ShopCommand":true,"Window_ShopSell":true,"Window_ShopNumber":true,"Window_ShopStatus":true,"Window_Base":true,"Window_NameBox":true,"Window_ChoiceList":true,"Window_NumberInput":true,"Window_EventItem":true,"Window_NameEdit":true,"Window_NameInput":true};
    var ws_ogScrollByClass = {"Window_ShopCommand":{"x":-0.3,"y":-0.3},"Window_ShopSell":{"x":0.3,"y":0.3},"Window_Base":{"x":0.3,"y":0.3},"Window_Gold":{"x":0.3,"y":-0.3},"Window_Help":{"x":-0.3,"y":-0.3},"Window_Message":{"x":1,"y":1},"Window_NameBox":{"x":-0.3,"y":-0.3},"Window_ChoiceList":{"x":1,"y":1}};
    var ws_roundRadius = 16;
    if (typeof Window === "undefined" || !Window.prototype) return;
    if (typeof Bitmap === "undefined") return;

    function ws_ogClamp01(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }

    function ws_ogAddStops(grad, stops) {
      var i, st, p, a;
      for (i = 0; i < stops.length; i++) {
        st = stops[i] || {};
        p = ws_ogClamp01(typeof st.p === "number" ? st.p : 0);
        a = ws_ogClamp01(typeof st.a === "number" ? st.a : 1);
        grad.addColorStop(p, "rgba(255,255,255," + a + ")");
      }
    }

    function ws_ogMultiplyGradientAlpha(bm, og, bw, bh) {
      var ctx = bm.context || bm._context;
      if (!ctx) return false;
      var hs = (og.h && og.h.length >= 2) ? og.h : null;
      var vs = (og.v && og.v.length >= 2) ? og.v : null;
      if (!hs && !vs) return false;
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      if (hs) {
        var hg = ctx.createLinearGradient(0, 0, bw, 0);
        ws_ogAddStops(hg, hs);
        ctx.fillStyle = hg;
        ctx.fillRect(0, 0, bw, bh);
      }
      if (vs) {
        var vg = ctx.createLinearGradient(0, 0, 0, bh);
        ws_ogAddStops(vg, vs);
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, bw, bh);
      }
      ctx.restore();
      if (typeof bm._setDirty === "function") bm._setDirty();
      else if (bm._baseTexture && typeof bm._baseTexture.update === "function") bm._baseTexture.update();
      return true;
    }

    function ws_roundClipAlpha(bm, bw, bh, skin) {
      var ctx = bm.context || bm._context;
      if (!ctx) return false;
      var r = (typeof ws_bgRadiusFor === "function") ? ws_bgRadiusFor(skin) : ws_roundRadius;
      var maxR = Math.floor(Math.min(bw, bh) / 2);
      if (r > maxR) r = maxR;
      if (r <= 0) return false;
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(bw - r, 0);
      ctx.arcTo(bw, 0, bw, r, r);
      ctx.lineTo(bw, bh - r);
      ctx.arcTo(bw, bh, bw - r, bh, r);
      ctx.lineTo(r, bh);
      ctx.arcTo(0, bh, 0, bh - r, r);
      ctx.lineTo(0, r);
      ctx.arcTo(0, 0, r, 0, r);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      if (typeof bm._setDirty === "function") bm._setDirty();
      else if (bm._baseTexture && typeof bm._baseTexture.update === "function") bm._baseTexture.update();
      return true;
    }

    function ws_ogInsets(win, skin) {
      var m = (typeof win._margin === "number") ? win._margin : 4;
      if (skin && skin.height >= 384) return [0, 0, 0, 0];
      var inset = (typeof ws_bgInsetFor === "function") ? ws_bgInsetFor(skin) : null;
      return inset ? inset : [m, m, m, m];
    }

    function ws_ogBackSize(win, skin) {
      var ins = ws_ogInsets(win, skin);
      var bw = Math.max(1, Math.round((win.width || win._width || 0) - ins[0] - ins[2]));
      var bh = Math.max(1, Math.round((win.height || win._height || 0) - ins[1] - ins[3]));
      return [bw, bh, ins[0], ins[1]];
    }

    function ws_ogWrap(v, period) {
      return ((v % period) + period) % period;
    }

    function ws_ogBakeMz(win, og, round) {
      var skin = win._windowskin;
      if (!skin || (typeof skin.isReady === "function" && !skin.isReady())) return false;
      var sprite = win._backSprite;
      if (!sprite) return false;
      var size = ws_ogBackSize(win, skin);
      var bw = size[0], bh = size[1], mL = size[2], mT = size[3];
      var shaped = !!win._wsbShapeContentMask && !!sprite.bitmap && sprite.bitmap.width > 0;
      var bm;
      if (shaped) {
        bm = sprite.bitmap;
        bw = bm.width;
        bh = bm.height;
        if (og && !ws_ogMultiplyGradientAlpha(bm, og, bw, bh)) return false;
        if (round) ws_roundClipAlpha(bm, bw, bh, skin);
      } else {
        if (win._wsbOgBakedBitmap && sprite.bitmap === win._wsbOgBakedBitmap &&
            win._wsbOgBakedBitmap.width === bw && win._wsbOgBakedBitmap.height === bh) {
          bm = win._wsbOgBakedBitmap;
          bm.clear();
        } else {
          bm = new Bitmap(bw, bh);
        }
        var pdB = skin.height >= 384
          ? (skin._wsbTilePd || { x: 192, y: 192 })
          : { x: 96, y: 96 };
        var ox = Math.floor(ws_ogWrap(win._wsbOgScrollX || 0, pdB.x));
        var oy = Math.floor(ws_ogWrap(win._wsbOgScrollY || 0, pdB.y));
        if (skin.height >= 384) {
          for (var ty = oy - pdB.y; ty < bh; ty += pdB.y) {
            for (var tx = ox - pdB.x; tx < bw; tx += pdB.x) {
              bm.blt(skin, 0, 192, pdB.x, pdB.y, tx, ty, pdB.x, pdB.y);
            }
          }
        } else {
          bm.blt(skin, 0, 0, 95, 95, 0, 0, bw, bh);
          for (var sy = oy - 96; sy < bh; sy += 96) {
            for (var sx = ox - 96; sx < bw; sx += 96) {
              bm.blt(skin, 0, 96, 96, 96, sx, sy, 96, 96);
            }
          }
        }
        if (og && !ws_ogMultiplyGradientAlpha(bm, og, bw, bh)) return false;
        if (round) ws_roundClipAlpha(bm, bw, bh, skin);
        sprite.bitmap = bm;
        if (sprite.setFrame) sprite.setFrame(0, 0, bw, bh);
        if (sprite.scale && sprite.scale.set) sprite.scale.set(1, 1);
        if (sprite.move) sprite.move(mL, mT);
        var ts = sprite.children && sprite.children[0];
        if (ts) { ts.bitmap = null; if (ts.move) ts.move(0, 0, 0, 0); }
        win._wsbOgBakedOx = ox;
        win._wsbOgBakedOy = oy;
      }
      win._wsbOgBakedKey = bw + "x" + bh;
      win._wsbOgBakedBitmap = bm;
      return true;
    }

    function ws_ogBakeMv(win, og, round) {
      var back = win._windowBackSprite;
      if (!back) return false;
      var skin = win._windowskin;
      var nm = win.constructor && win.constructor.name;
      var sc = nm ? ws_ogScrollByClass[nm] : null;
      if (!sc && win._wsbOg && win._wsbScrollBg) sc = win._wsbScrollBg;
      var ready = !!skin && (typeof skin.isReady !== "function" || skin.isReady());
      if (sc && ready && typeof Bitmap !== "undefined") {
        var size = ws_ogBackSize(win, skin);
        var bw = size[0], bh = size[1], mL = size[2], mT = size[3];
        var bm = win._wsbOgBakedBitmap;
        if (!bm || back.bitmap !== bm || bm.width !== bw || bm.height !== bh) {
          bm = new Bitmap(bw, bh);
        } else {
          bm.clear();
        }
        var pdB = skin.height >= 384
          ? (skin._wsbTilePd || { x: 192, y: 192 })
          : { x: 96, y: 96 };
        var ox = Math.floor(ws_ogWrap(win._wsbOgScrollX || 0, pdB.x));
        var oy = Math.floor(ws_ogWrap(win._wsbOgScrollY || 0, pdB.y));
        if (skin.height >= 384) {
          for (var ty = oy - pdB.y; ty < bh; ty += pdB.y) {
            for (var tx = ox - pdB.x; tx < bw; tx += pdB.x) {
              bm.blt(skin, 0, 192, pdB.x, pdB.y, tx, ty, pdB.x, pdB.y);
            }
          }
        } else {
          bm.blt(skin, 0, 0, 96, 96, 0, 0, bw, bh);
          for (var sy = oy - 96; sy < bh; sy += 96) {
            for (var sx = ox - 96; sx < bw; sx += 96) {
              bm.blt(skin, 0, 96, 96, 96, sx, sy, 96, 96);
            }
          }
        }
        var tone = win._colorTone;
        if (tone && bm.adjustTone) bm.adjustTone(tone[0], tone[1], tone[2]);
        if (og && !ws_ogMultiplyGradientAlpha(bm, og, bw, bh)) return false;
        if (round) ws_roundClipAlpha(bm, bw, bh, skin);
        back.bitmap = bm;
        if (back.setFrame) back.setFrame(0, 0, bw, bh);
        if (back.move) back.move(mL, mT);
        win._wsbOgBakedOx = ox;
        win._wsbOgBakedOy = oy;
        win._wsbOgBakedKey = bw + "x" + bh;
        win._wsbOgBakedBitmap = bm;
        return true;
      }
      if (!back.bitmap) return false;
      var pbw = Math.max(1, Math.round(back.bitmap.width || 0));
      var pbh = Math.max(1, Math.round(back.bitmap.height || 0));
      if (og && !ws_ogMultiplyGradientAlpha(back.bitmap, og, pbw, pbh)) return false;
      if (round) ws_roundClipAlpha(back.bitmap, pbw, pbh, skin);
      win._wsbOgBakedKey = pbw + "x" + pbh;
      win._wsbOgBakedBitmap = back.bitmap;
      return true;
    }

    function ws_ogBake(win, og, round) {
      if (win._wspSplitContainer) return false;
      if (!round && win._wsbOg) {
        var rsk = win._windowskin;
        round = !!(rsk && rsk.height >= 384);
      }
      if (win._backSprite) return ws_ogBakeMz(win, og, round);
      if (win._windowBackSprite) return ws_ogBakeMv(win, og, round);
      return false;
    }

    function ws_ogDrawFrame(bm, skin, w, h) {
      var m = 24;
      if (w <= 0 || h <= 0) return;
      var fsrc = (typeof ws_madoFrameSrc === "function") ? ws_madoFrameSrc(skin) : null;
      var fsk = fsrc ? fsrc.bmp : skin;
      var p = fsrc ? fsrc.x : 96;
      var py = fsrc ? fsrc.y : 0;
      var qw = fsrc ? fsrc.w : 96;
      var qh = fsrc ? fsrc.h : 96;
      var ew = w - m * 2, eh = h - m * 2, edgeW = qw - m * 2, edgeH = qh - m * 2;
      var tile = (typeof ws_frameTileFor === "function") && ws_frameTileFor(skin);
      if (ew > 0) {
        if (tile) {
          ws_bltEdgeTiled(bm, fsk, p + m, py, edgeW, m, m, 0, ew, m);
          ws_bltEdgeTiled(bm, fsk, p + m, py + qh - m, edgeW, m, m, h - m, ew, m);
        } else {
          bm.blt(fsk, p + m, py, edgeW, m, m, 0, ew, m);
          bm.blt(fsk, p + m, py + qh - m, edgeW, m, m, h - m, ew, m);
        }
      }
      if (eh > 0) {
        if (tile) {
          ws_bltEdgeTiled(bm, fsk, p, py + m, m, edgeH, 0, m, m, eh);
          ws_bltEdgeTiled(bm, fsk, p + qw - m, py + m, m, edgeH, w - m, m, m, eh);
        } else {
          bm.blt(fsk, p, py + m, m, edgeH, 0, m, m, eh);
          bm.blt(fsk, p + qw - m, py + m, m, edgeH, w - m, m, m, eh);
        }
      }
      if (!ws_cornerReplacesFrame(skin)) {
        bm.blt(fsk, p, py, m, m, 0, 0, m, m);
        bm.blt(fsk, p + qw - m, py, m, m, w - m, 0, m, m);
        bm.blt(fsk, p, py + qh - m, m, m, 0, h - m, m, m);
        bm.blt(fsk, p + qw - m, py + qh - m, m, m, w - m, h - m, m, m);
      }
    }

    function ws_ogBakeFrame(win, og) {
      if (win._wspSplitContainer) return false;
      if (!og || win.frameVisible === false || win._wsbShapeContentMask) return false;
      var nf = win._frameSprite || win._windowFrameSprite;
      if (!nf) return false;
      var skin = win._windowskin;
      if (!skin || (typeof skin.isReady === "function" && !skin.isReady())) return false;
      if (typeof Bitmap === "undefined" || typeof Sprite === "undefined") return false;
      var w = Math.max(1, Math.round(win.width || win._width || 0));
      var h = Math.max(1, Math.round(win.height || win._height || 0));
      var key = w + "x" + h;
      if (win._wsbOgFrameBakedKey === key && win._wsbFrameSprite &&
          win._wsbFrameSprite.bitmap === win._wsbOgFrameBakedBitmap) {
        nf.alpha = 0;
        return true;
      }
      var bm = new Bitmap(w, h);
      ws_ogDrawFrame(bm, skin, w, h);
      if (!ws_ogMultiplyGradientAlpha(bm, og, w, h)) return false;
      if (!win._wsbFrameSprite) {
        win._wsbFrameSprite = new Sprite();
        var host = nf.parent || win._container || win;
        if (host && host.addChild) host.addChild(win._wsbFrameSprite);
      }
      win._wsbFrameSprite.bitmap = bm;
      if (win._wsbFrameSprite.setFrame) win._wsbFrameSprite.setFrame(0, 0, w, h);
      if (win._wsbFrameSprite.move) win._wsbFrameSprite.move(nf.x || 0, nf.y || 0);
      nf.alpha = 0;
      win._wsbOgFrameBakedKey = key;
      win._wsbOgFrameBakedBitmap = bm;
      return true;
    }

    function ws_ogHookRefresh(name) {
      if (typeof Window.prototype[name] !== "function") return;
      var orig = Window.prototype[name];
      Window.prototype[name] = function() {
        orig.apply(this, arguments);
        try {
          var nm = this.constructor && this.constructor.name;
          var og = this._wsbOg || ws_ogByClass[nm];
          var round = !!ws_roundByClass[nm];
          if (og || round) { this._wsbOgBakedKey = ""; ws_ogBake(this, og, round); }
        } catch (err) { /* ignore */ }
      };
    }
    ws_ogHookRefresh("_refreshBack");
    ws_ogHookRefresh("_refreshBackground");

    (function() {
      if (typeof Window.prototype._refreshFrame !== "function") return;
      var _wsp_og_orig_refreshFrame = Window.prototype._refreshFrame;
      Window.prototype._refreshFrame = function() {
        _wsp_og_orig_refreshFrame.apply(this, arguments);
        try {
          var nm = this.constructor && this.constructor.name;
          var og = this._wsbOg || ws_ogByClass[nm];
          if (og) { this._wsbOgFrameBakedKey = ""; ws_ogBakeFrame(this, og); }
        } catch (err) { /* ignore */ }
      };
    })();

    function ws_ogUpdateWindow(win) {
      try {
        if (win._wspSplitContainer) return;
        if (typeof Graphics !== "undefined" && typeof Graphics.frameCount === "number") {
          if (win._wsbOgTickFrame === Graphics.frameCount) return;
          win._wsbOgTickFrame = Graphics.frameCount;
        }
        var nm = win.constructor && win.constructor.name;
        var og = win._wsbOg || ws_ogByClass[nm];
        var round = !!ws_roundByClass[nm];
        if (!og && !round) return;
        var w = Math.round(win.width || win._width || 0);
        var h = Math.round(win.height || win._height || 0);
        if (w <= 0 || h <= 0) return;
        var sc = ws_ogScrollByClass[nm];
        if (!sc && win._wsbOg && win._wsbScrollBg) {
          var isc = win._wsbScrollBg;
          var ix = typeof isc.x === "number" ? isc.x : 0;
          var iy = typeof isc.y === "number" ? isc.y : 0;
          if (ix !== 0 || iy !== 0) sc = { x: ix, y: iy };
        }
        var scSkin = win._windowskin;
        var scReady = scSkin && (typeof scSkin.isReady !== "function" || scSkin.isReady());
        var scBack = win._backSprite || win._windowBackSprite;
        if (sc && scReady && scBack && win.visible && win.openness > 0) {
          win._wsbOgScrollX = (win._wsbOgScrollX || 0) + sc.x;
          win._wsbOgScrollY = (win._wsbOgScrollY || 0) + sc.y;
          var scPd = scSkin.height >= 384
            ? (scSkin._wsbTilePd || { x: 192, y: 192 })
            : { x: 96, y: 96 };
          var scOx = Math.floor(ws_ogWrap(win._wsbOgScrollX, scPd.x));
          var scOy = Math.floor(ws_ogWrap(win._wsbOgScrollY, scPd.y));
          var scSize = ws_ogBackSize(win, scSkin);
          var scKey = scSize[0] + "x" + scSize[1];
          if (scOx !== win._wsbOgBakedOx || scOy !== win._wsbOgBakedOy ||
              scKey !== win._wsbOgBakedKey || scBack.bitmap !== win._wsbOgBakedBitmap) {
            ws_ogBake(win, og, round);
          }
        } else {
          var key = win._backSprite
            ? (function(w2) { var s = ws_ogBackSize(w2, w2._windowskin); return s[0] + "x" + s[1]; })(win)
            : (win._windowBackSprite && win._windowBackSprite.bitmap
                ? (win._windowBackSprite.bitmap.width + "x" + win._windowBackSprite.bitmap.height)
                : null);
          var backBmp = win._backSprite
            ? win._backSprite.bitmap
            : (win._windowBackSprite ? win._windowBackSprite.bitmap : null);
          if (key !== null && (win._wsbOgBakedKey !== key || backBmp !== win._wsbOgBakedBitmap)) {
            ws_ogBake(win, og, round);
          }
        }
        if (og) {
          var fsU = win._frameSprite || win._windowFrameSprite;
          if (fsU && win._wsbOgFrameBakedKey !== (Math.max(1, w) + "x" + Math.max(1, h))) {
            ws_ogBakeFrame(win, og);
          }
        }
      } catch (err) { /* ignore */ }
    }

    var _wsp_og_orig_update = Window.prototype.update;
    Window.prototype.update = function() {
      _wsp_og_orig_update.apply(this, arguments);
      ws_ogUpdateWindow(this);
    };
  })();

  (function() {
    if (typeof Window_Selectable === "undefined" || !Window_Selectable.prototype) return;
    if (typeof Window_Selectable.prototype.drawItemBackground !== "function") return;
    var ws_ibByClass = {"Window_TitleCommand":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(122, 255, 253, 0.39)"},"Window_MenuCommand":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(139, 235, 254, 0.19)"},"Window_MenuStatus":{"v":true,"c1":"rgba(255, 179, 179, 0.72)","c2":"rgba(169, 254, 244, 0.65)"},"Window_Options":{"v":false,"c1":"rgba(32, 32, 32, 0.5)","c2":"rgba(0, 0, 0, 0.5)"},"Window_ItemCategory":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(154, 237, 254, 0.78)"},"Window_ItemList":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(179, 242, 255, 0.71)"},"Window_SkillType":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(163, 253, 255, 0.56)"},"Window_SkillStatus":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(163, 253, 255, 0.56)"},"Window_SkillList":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(163, 253, 255, 0.56)"},"Window_EquipCommand":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(148, 237, 255, 0.61)"},"Window_EquipSlot":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(163, 255, 249, 0.8)"},"Window_ShopCommand":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(122, 255, 246, 0.45)"},"Window_ShopBuy":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(122, 240, 255, 0.43)"},"Window_ShopSell":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(144, 254, 252, 0.41)"},"Window_Gold":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(0, 0, 0, 0.5)"},"Window_ActorCommand":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(154, 234, 254, 0.63)"},"Window_BattleEnemy":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(148, 243, 255, 0.5)"},"Window_BattleSkill":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(158, 255, 253, 0.56)"},"Window_BattleItem":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(180, 254, 249, 0.63)"},"Window_Help":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(158, 255, 253, 0.56)"},"Window_ChoiceList":{"v":true,"c1":"rgba(32, 32, 32, 0)","c2":"rgba(138, 255, 253, 0.47)"}};
    var _wsp_ib_orig = Window_Selectable.prototype.drawItemBackground;
    Window_Selectable.prototype.drawItemBackground = function(index) {
      var ib = ws_ibByClass[this.constructor && this.constructor.name];
      if (!ib) { _wsp_ib_orig.apply(this, arguments); return; }
      if (!ib.v) return;
      var rect = this.itemRect(index);
      var back = this.contentsBack || this.contents;
      if (!back || !back.gradientFillRect) { _wsp_ib_orig.apply(this, arguments); return; }
      back.gradientFillRect(rect.x, rect.y, rect.width, rect.height, ib.c1, ib.c2, true);
      if (back.strokeRect) back.strokeRect(rect.x, rect.y, rect.width, rect.height, ib.c1);
    };
  })();

  (function() {
    if (typeof Window_BattleStatus === "undefined" || !Window_BattleStatus.prototype) return;
    Window_BattleStatus.prototype.drawItemBackground = function() {};
  })();

  (function() {
    if (typeof Window_Selectable === "undefined" || !Window_Selectable.prototype) return;
    if (typeof Window_Selectable.prototype.update !== "function") return;
    var WSB_RAISE_CLASSES = {"Window_TitleCommand":true,"Window_Options":true,"Window_ItemCategory":true,"Window_SavefileList":true,"Window_ItemList":true,"Window_SkillType":true,"Window_SkillStatus":true,"Window_SkillList":true,"Window_EquipCommand":true,"Window_EquipSlot":true,"Window_EquipItem":true,"Window_EquipStatus":true,"Window_Status":true,"Window_StatusParams":true,"Window_StatusEquip":true,"Window_GameEnd":true,"Window_ShopCommand":true,"Window_ShopSell":true,"Window_ShopNumber":true,"Window_ShopStatus":true,"Window_Base":true,"Window_NameBox":true,"Window_ChoiceList":true,"Window_NumberInput":true,"Window_EventItem":true,"Window_NameEdit":true,"Window_NameInput":true};
    function ws_raiseManaged(w) {
      if (!w || !w.constructor) return false;
      if (w._wsbRaiseOptIn === true) return true;
      return WSB_RAISE_CLASSES[w.constructor.name] === true;
    }
    function ws_rectsOverlap(a, b) {
      return a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;
    }
    function ws_raiseEligible(w) {
      if (!w || w.visible === false) return false;
      if (typeof w.openness === "number" && !(w.openness > 0)) return false;
      return true;
    }
    var ws_raisePending = [];
    var _wsp_actraise_orig = Window_Selectable.prototype.update;
    Window_Selectable.prototype.update = function() {
      _wsp_actraise_orig.apply(this, arguments);
      try {
        if (!this.active) return;
        if (!ws_raiseManaged(this)) return;
        if (!ws_raiseEligible(this)) return;
        if (!(this.width > 0) || !(this.height > 0)) return;
        var p = this.parent;
        if (!p || !p.children || typeof p.addChild !== "function") return;
        var me = p.children.indexOf(this);
        if (me < 0 || me === p.children.length - 1) return;
        for (var i = me + 1; i < p.children.length; i++) {
          var w = p.children[i];
          if (w && w !== this && ws_raiseManaged(w) && w.width > 0 && w.height > 0 && ws_raiseEligible(w) && ws_rectsOverlap(this, w)) {
            if (ws_raisePending.indexOf(this) < 0) ws_raisePending.push(this);
            break;
          }
        }
      } catch (err) { /* ignore */ }
    };
    if (typeof Scene_Base !== "undefined" && Scene_Base.prototype && typeof Scene_Base.prototype.update === "function") {
      var _wsp_actraise_sceneUpdate = Scene_Base.prototype.update;
      Scene_Base.prototype.update = function() {
        _wsp_actraise_sceneUpdate.apply(this, arguments);
        if (ws_raisePending.length > 0) {
          var list = ws_raisePending;
          ws_raisePending = [];
          for (var i = 0; i < list.length; i++) {
            try {
              var w = list[i];
              var p = w ? w.parent : null;
              if (!p || !p.children || typeof p.addChild !== "function") continue;
              var me = p.children.indexOf(w);
              if (me < 0 || me === p.children.length - 1) continue;
              p.addChild(w);
            } catch (err2) { /* ignore */ }
          }
        }
      };
    }
  })();

  (function() {
    if (typeof WindowLayer === "undefined" || !WindowLayer.prototype) return;
    if (typeof WindowLayer.prototype.render !== "function") return;
    var WSB_BLEND_CLASSES = {"Window_TitleCommand":true,"Window_Options":true,"Window_ItemCategory":true,"Window_SavefileList":true,"Window_ItemList":true,"Window_SkillType":true,"Window_SkillStatus":true,"Window_SkillList":true,"Window_EquipCommand":true,"Window_EquipSlot":true,"Window_EquipItem":true,"Window_EquipStatus":true,"Window_Status":true,"Window_StatusParams":true,"Window_StatusEquip":true,"Window_GameEnd":true,"Window_ShopCommand":true,"Window_ShopSell":true,"Window_ShopNumber":true,"Window_ShopStatus":true,"Window_Base":true,"Window_NameBox":true,"Window_ChoiceList":true,"Window_NumberInput":true,"Window_EventItem":true,"Window_NameEdit":true,"Window_NameInput":true};
    var _wsp_wl_origRender = WindowLayer.prototype.render;
    function ws_wlManaged(win) {
      if (!win || !win.constructor) return false;
      if (win._wsbBlendOptIn === true) return true;
      return WSB_BLEND_CLASSES[win.constructor.name] === true;
    }
    function ws_wlOverlap(a, b) {
      return a.x < b.x + b.width && b.x < a.x + a.width &&
        a.y < b.y + b.height && b.y < a.y + a.height;
    }
    function ws_wlNeedsBlend(layer) {
      var ch = layer.children;
      var list = [];
      for (var i = 0; i < ch.length; i++) {
        var w = ch[i];
        if (!w || !w._isWindow || !w.visible || !(w.openness > 0)) continue;
        if (!(w.width > 0) || !(w.height > 0)) continue;
        if (w.rotation) return true;
        if (ws_wlManaged(w)) list.push(w);
      }
      for (var a = 0; a < list.length; a++) {
        for (var b = a + 1; b < list.length; b++) {
          if (ws_wlOverlap(list[a], list[b])) return true;
        }
      }
      return false;
    }
    WindowLayer.prototype.render = function(renderer) {
      if (!this.visible) return;
      var blend = false;
      try { blend = ws_wlNeedsBlend(this); } catch (e) { blend = false; }
      if (!blend) return _wsp_wl_origRender.call(this, renderer);
      var children = this.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (!child || !child.visible) continue;
        if (child._isWindow && !(child.openness > 0)) continue;
        child.render(renderer);
      }
    };
  })();

  (function() {
    if (typeof Window_StatusBase === 'undefined' || !Window_StatusBase.prototype) return;
    var _wsp_orig_simpleStatus = Window_StatusBase.prototype.drawActorSimpleStatus;
    if (!_wsp_orig_simpleStatus) return;
    Window_StatusBase.prototype.drawActorSimpleStatus = function(actor, x, y) {
      var gaugeW = 128;
      var pad = (typeof this.itemPadding === "function") ? this.itemPadding() : 8;
      if (x + 180 + gaugeW + pad <= this.innerWidth) {
        return _wsp_orig_simpleStatus.call(this, actor, x, y);
      }
      var lineHeight = this.lineHeight();
      var x2 = Math.max(x + 80, this.innerWidth - gaugeW - pad);
      this.drawActorName(actor, x, y);
      this.drawActorLevel(actor, x, y + lineHeight * 1);
      this.drawActorIcons(actor, x, y + lineHeight * 2);
      this.drawActorClass(actor, x2, y);
      this.placeBasicGauges(actor, x2, y + lineHeight);
    };
    if (typeof Window_Selectable !== "undefined" && Window_Selectable.prototype) {
      var WSB_FIT_CLASSES = {"Window_TitleCommand":true,"Window_MenuCommand":true,"Window_MenuStatus":true,"Window_Gold":true,"Window_Options":true,"Window_ItemCategory":true,"Window_SavefileList":true,"Window_ItemList":true,"Window_SkillType":true,"Window_SkillStatus":true,"Window_SkillList":true,"Window_EquipCommand":true,"Window_EquipSlot":true,"Window_EquipItem":true,"Window_EquipStatus":true,"Window_Status":true,"Window_StatusParams":true,"Window_StatusEquip":true,"Window_GameEnd":true,"Window_ShopCommand":true,"Window_ShopBuy":true,"Window_ShopSell":true,"Window_ShopNumber":true,"Window_ShopStatus":true,"Window_Base":true,"Window_BattleStatus":true,"Window_PartyCommand":true,"Window_ActorCommand":true,"Window_BattleEnemy":true,"Window_BattleSkill":true,"Window_BattleItem":true,"Window_Help":true,"Window_Message":true,"Window_NameBox":true,"Window_ChoiceList":true,"Window_NumberInput":true,"Window_EventItem":true,"Window_NameEdit":true,"Window_NameInput":true};
      function ws_fitManaged(w) {
        if (!w || !w.constructor) return false;
        if (w._wsbFitOptIn === true) return true;
        return WSB_FIT_CLASSES[w.constructor.name] === true;
      }
      var _wsp_orig_selUpdate = Window_Selectable.prototype.update;
      Window_Selectable.prototype.update = function() {
        if (_wsp_orig_selUpdate) _wsp_orig_selUpdate.call(this);
        if (!ws_fitManaged(this)) return;
        if (this._wsbFitInnerW !== this.innerWidth || this._wsbFitInnerH !== this.innerHeight) {
          this._wsbFitInnerW = this.innerWidth;
          this._wsbFitInnerH = this.innerHeight;
          try {
            if (typeof this.refresh === "function") this.refresh();
          } catch (e) { }
        }
      };
    }
  })();

  window.$_wsbRuntime = {
    windowElements: ws_windowElements,
    pluginParams: {"ws_windowElements":[{"key":"titleCmd","targetClass":"Window_TitleCommand","hookType":"sceneRect","x":998,"y":388,"w":282,"h":246,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Title Command","visible":true,"windowskin":"Window_WSB_titleCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","confirmEffect":{"type":"cursorGlow"},"opacityGradient":{"h":[{"p":0,"a":0.6},{"p":0.513,"a":1},{"p":1,"a":0.6}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#7afffd","a":0.39}},"sceneAnim":{"in":{"move":{"direction":"right","distance":"screen_1_4","tween":"easeOut"},"delay":{"order":"none","timing":"normal"},"speed":"slow"},"out":{"move":{"direction":"right","distance":"screen_1_4","tween":"easeOut"},"delay":{"order":"none","timing":"normal"},"speed":"slow"}}},{"key":"menu","targetClass":"Window_MenuCommand","hookType":"sceneRect","x":8,"y":212,"w":228,"h":335,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Menu Command","visible":true,"windowskin":"Window_WSB_menu","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","roundBgCorners":false,"confirmEffect":{"type":"ripple","amp":20},"opacityGradient":{"h":[{"p":0,"a":0.46},{"p":0.458,"a":1},{"p":1,"a":0.46}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#8bebfe","a":0.19}}},{"key":"status","targetClass":"Window_MenuStatus","hookType":"sceneRect","x":409,"y":222,"w":510,"h":294,"opacity":0.9803921568627451,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Menu Status","visible":true,"windowskin":"Window_WSB_status","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","roundBgCorners":false,"confirmEffect":{"type":"cursorGlow"},"opacityGradient":{"h":[{"p":0,"a":0.46},{"p":0.464,"a":1},{"p":1,"a":0.46}]},"itemBackground":{"v":true,"t":{"h":"#ffb3b3","a":0.72},"b":{"h":"#a9fef4","a":0.65}}},{"key":"gold","targetClass":"Window_Gold","hookType":"sceneRect","x":8,"y":650,"w":223,"h":57,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Gold Window","visible":true,"windowskin":"Window_WSB_gold","bgPartId":"000","framePartId":"user:ua_msfssllf_1","roundBgCorners":false,"opacityGradient":{"h":[{"p":0,"a":0.46},{"p":0.464,"a":1},{"p":1,"a":0.46}]}},{"key":"options","targetClass":"Window_Options","hookType":"sceneRect","x":440,"y":194,"w":400,"h":332,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Options","visible":true,"windowskin":"Window_WSB_options","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":false,"t":{"h":"#202020","a":0.5},"b":{"h":"#000000","a":0.5}}},{"key":"itemCat","targetClass":"Window_ItemCategory","hookType":"sceneRect","x":0,"y":154,"w":1272,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Item Category","visible":true,"windowskin":"Window_WSB_itemCat","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9aedfe","a":0.78}}},{"key":"save","targetClass":"Window_SavefileList","hookType":"sceneRect","x":4,"y":100,"w":1272,"h":616,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Savefile List","visible":true,"windowskin":"Window_WSB_save","framePartId":"000"},{"key":"itemList","targetClass":"Window_ItemList","hookType":"sceneRect","x":4,"y":224,"w":1272,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Item List","visible":true,"windowskin":"Window_WSB_itemList","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#b3f2ff","a":0.71}}},{"key":"skillType","targetClass":"Window_SkillType","hookType":"sceneRect","x":1036,"y":154,"w":240,"h":156,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Skill Type","visible":true,"windowskin":"Window_WSB_skillType","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fdff","a":0.56}}},{"key":"skillStatus","targetClass":"Window_SkillStatus","hookType":"sceneRect","x":4,"y":151,"w":1032,"h":156,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Skill Status","visible":true,"windowskin":"Window_WSB_skillStatus","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fdff","a":0.56}}},{"key":"skillList","targetClass":"Window_SkillList","hookType":"sceneRect","x":4,"y":312,"w":1272,"h":408,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Skill List","visible":true,"windowskin":"Window_WSB_skillList","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fdff","a":0.56}}},{"key":"equipCmd","targetClass":"Window_EquipCommand","hookType":"sceneRect","x":316,"y":156,"w":960,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Command","visible":true,"windowskin":"Window_WSB_equipCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#94edff","a":0.61}}},{"key":"equipSlot","targetClass":"Window_EquipSlot","hookType":"sceneRect","x":316,"y":230,"w":956,"h":149,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Slot","visible":true,"windowskin":"Window_WSB_equipSlot","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","opacityGradient":{"h":[{"p":0,"a":1},{"p":0.01,"a":1}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#a3fff9","a":0.8}}},{"key":"equipItem","targetClass":"Window_EquipItem","hookType":"sceneRect","x":316,"y":230,"w":960,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Item List","visible":true,"windowskin":"Window_WSB_equipItem","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"},{"key":"equipStatus","targetClass":"Window_EquipStatus","hookType":"sceneRect","x":4,"y":151,"w":312,"h":564,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Equip Status","visible":true,"windowskin":"Window_WSB_equipStatus","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"},{"key":"statusDetail","targetClass":"Window_Status","hookType":"sceneRect","x":4,"y":105,"w":1272,"h":324,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Status Detail","visible":true,"windowskin":"Window_WSB_statusDetail","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"},{"key":"statusParams","targetClass":"Window_StatusParams","hookType":"sceneRect","x":8,"y":429,"w":300,"h":240,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Status Params","visible":true,"windowskin":"Window_WSB_statusParams","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"},{"key":"statusEquip","targetClass":"Window_StatusEquip","hookType":"sceneRect","x":304,"y":429,"w":972,"h":240,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Status Equipment","visible":true,"windowskin":"Window_WSB_statusEquip","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000"},{"key":"gameEnd","targetClass":"Window_GameEnd","hookType":"sceneRect","x":414,"y":319,"w":430,"h":96,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Game End Command","visible":true,"windowskin":"Window_WSB_gameEnd","framePartId":"000"},{"key":"shopCmd","targetClass":"Window_ShopCommand","hookType":"sceneRect","x":8,"y":139,"w":1032,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Command","visible":true,"windowskin":"Window","scrollBgEnabled":true,"scrollBgSpeedX":-0.3,"scrollBgSpeedY":-0.3,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#7afff6","a":0.45}}},{"key":"shopBuy","targetClass":"Window_ShopBuy","hookType":"sceneRect","x":0,"y":224,"w":920,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Buy","visible":true,"windowskin":"Window","roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#7af0ff","a":0.43}}},{"key":"shopSell","targetClass":"Window_ShopSell","hookType":"sceneRect","x":8,"y":284,"w":1272,"h":428,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Sell","visible":true,"windowskin":"Window","scrollBgEnabled":true,"scrollBgSpeedX":0.3,"scrollBgSpeedY":0.3,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#90fefc","a":0.41}}},{"key":"shopNumber","targetClass":"Window_ShopNumber","hookType":"sceneRect","x":8,"y":207,"w":920,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Number","visible":true,"windowskin":"Window"},{"key":"shopStatus","targetClass":"Window_ShopStatus","hookType":"sceneRect","x":928,"y":224,"w":352,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Status","visible":true,"windowskin":"Window"},{"key":"shopDummy","targetClass":"Window_Base","hookType":"sceneRect","x":8,"y":207,"w":1272,"h":496,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Dummy","visible":true,"windowskin":"Window_WSB_shopDummy","bgPartId":"000","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":0.3,"scrollBgSpeedY":0.3},{"key":"shopGold","targetClass":"Window_Gold","hookType":"sceneRect","x":1040,"y":139,"w":240,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Shop Gold","visible":true,"windowskin":"Window","scrollBgEnabled":true,"scrollBgSpeedX":0.3,"scrollBgSpeedY":-0.3,"roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#000000","a":0.5}}},{"key":"battle","targetClass":"Window_BattleStatus","hookType":"sceneRect","x":0,"y":504,"w":514,"h":203,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Status","visible":true,"windowskin":"Window_WSB_battle","bgPartId":"000","framePartId":"000","roundBgCorners":false,"confirmEffect":{"type":"cursorGlow","dur":21},"sceneAnim":{"in":{"move":{"direction":"outer","distance":"screen_1_4","tween":"easeOutBack"},"delay":{"order":"none","timing":"normal"},"speed":"normal"}}},{"key":"partyCmd","targetClass":"Window_PartyCommand","hookType":"sceneRect","x":414,"y":320,"w":452,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Party Command","visible":true,"windowskin":"Window_WSB_partyCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","roundBgCorners":false,"animation":{"idle":{"type":"bob","amp":2}},"confirmEffect":{"type":"cursorGlow","dur":21}},{"key":"actorCmd","targetClass":"Window_ActorCommand","hookType":"sceneRect","x":0,"y":444,"w":240,"h":271,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Actor Command","visible":true,"windowskin":"Window_WSB_actorCmd","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9aeafe","a":0.63}}},{"key":"enemySel","targetClass":"Window_BattleEnemy","hookType":"sceneRect","x":1020,"y":383.5,"w":260,"h":89,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Enemy","visible":false,"windowskin":"Window_WSB_enemySel","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#94f3ff","a":0.5}}},{"key":"skillSel","targetClass":"Window_BattleSkill","hookType":"sceneRect","x":4,"y":520,"w":1272,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Skill","visible":false,"windowskin":"Window_WSB_skillSel","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9efffd","a":0.56}}},{"key":"itemSel","targetClass":"Window_BattleItem","hookType":"sceneRect","x":4,"y":516,"w":1272,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Battle Item","visible":false,"windowskin":"Window_WSB_itemSel","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"roundBgCorners":false,"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#b4fef9","a":0.63}}},{"key":"helpWin","targetClass":"Window_Help","hookType":"sceneRect","x":114,"y":19,"w":1166,"h":89,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Help Window","visible":true,"windowskin":"Window_WSB_helpWin","bgPartId":"user:ua_ms7xv6db_1","framePartId":"000","scrollBgEnabled":true,"scrollBgSpeedX":-0.3,"scrollBgSpeedY":-0.3,"roundBgCorners":false,"opacityGradient":{"h":[{"p":0.428,"a":1},{"p":1,"a":0}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#9efffd","a":0.56}}},{"key":"message","targetClass":"Window_Message","hookType":"sceneRect","x":4,"y":532,"w":1272,"h":162,"opacity":0.9803921568627451,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Message Window","visible":true,"windowskin":"Window_WSB_message","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","messageLineCount":4,"scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"roundBgCorners":false,"opacityGradient":{"h":[{"p":0,"a":0.4},{"p":0.55,"a":1},{"p":1,"a":0.4}]},"sceneAnim":{"in":{"move":{"direction":"bottom","distance":"screen_1_4","tween":"linear"},"delay":{"order":"none","timing":"normal"},"speed":"fast"},"out":{"move":{"direction":"bottom","distance":"screen_1_8","tween":"easeOutBack"},"delay":{"order":"none","timing":"normal"},"speed":"slow"}}},{"key":"nameBox","targetClass":"Window_NameBox","hookType":"placement","x":4,"y":466,"w":240,"h":60,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Name Box","visible":true,"windowskin":"Window_WSB_nameBox","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","dynamicWidth":true,"scrollBgEnabled":true,"scrollBgSpeedX":-0.3,"scrollBgSpeedY":-0.3,"opacityGradient":{"h":[{"p":0,"a":0.7},{"p":0.562,"a":1},{"p":1,"a":0.7}]}},{"key":"choice","targetClass":"Window_ChoiceList","hookType":"placement","x":1088,"y":408,"w":192,"h":112,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Choice List","visible":true,"windowskin":"Window_WSB_choice","bgPartId":"user:ua_ms7xv6db_1","framePartId":"user:ua_msfssllf_1","dynamicHeight":true,"dynamicWidth":true,"scrollBgEnabled":true,"scrollBgSpeedX":1,"scrollBgSpeedY":1,"opacityGradient":{"h":[{"p":0,"a":0.7},{"p":0.53,"a":1},{"p":1,"a":0.7}]},"itemBackground":{"v":true,"t":{"h":"#202020","a":0},"b":{"h":"#8afffd","a":0.47}}},{"key":"numberInput","targetClass":"Window_NumberInput","hookType":"placement","x":436,"y":464,"w":408,"h":68,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Number Input","visible":true,"windowskin":"Window","dynamicWidth":true},{"key":"eventItem","targetClass":"Window_EventItem","hookType":"placement","x":4,"y":4,"w":1272,"h":200,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Event Item Select","visible":true,"windowskin":"Window"},{"key":"nameInput","targetClass":"Window_NameEdit","hookType":"sceneRect","x":340,"y":62,"w":600,"h":168,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Name Edit","visible":true,"windowskin":"Window"},{"key":"nameTable","targetClass":"Window_NameInput","hookType":"sceneRect","x":340,"y":238,"w":600,"h":420,"opacity":1,"bgType":"window","fontSize":26,"frameVisible":true,"displayName":"Name Input","visible":true,"windowskin":"Window"}],"ws_composerSelections":{},"ws_customWindows":[],"ws_sceneTransitions":{},"ws_categorySkins":"{\"other\":\"Window_WSB_titleCmd\",\"status\":\"Window_WSB_menu\",\"battle\":\"Window_WSB_battle\",\"talk\":\"Window_WSB_message\"}"},
  };

})();
