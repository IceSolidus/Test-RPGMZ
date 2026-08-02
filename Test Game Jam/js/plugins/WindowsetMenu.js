/*:
 * @target MZ
 * @plugindesc Runtime de menu personnalisé et disposition des commandes d’UI (généré automatiquement par Windowset Builder)
 * @author Windowset Builder
 * @base WindowsetBuilder
 * @orderAfter WindowsetBuilder
 * @managedBy WindowsetBuilder
 * @managedVersion 0.0.1
 * @managedSchema ws_menu_v1
 *
 * @param ws_scenes
 * @text Scènes de menu personnalisé
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default []
 *
 * @param ws_mainMenu
 * @text Ordre des commandes du menu principal
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default []
 *
 * @param ws_battleParty
 * @text Ordre des commandes de groupe
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default []
 *
 * @param ws_battleActor
 * @text Ordre des commandes d’acteur
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default []
 *
 * @param ws_battleGauges
 * @text Jauges d’état de combat
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default {}
 *
 * @param ws_battleSplitHud
 * @text ATH de combat divisé
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default {}
 *
 * @param ws_battleFaces
 * @text Images de visage en combat
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default {}
 *
 * @param ws_titleCommands
 * @text Ordre des commandes du titre
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default []
 *
 * @param ws_titleHorizontal
 * @text Commandes de titre à l’horizontale
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default false
 *
 * @param ws_menuColumns
 * @text Colonnes des commandes du menu
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default 1
 *
 * @param ws_title
 * @text Arrière-plan/images de l’écran-titre
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default 
 *
 * @param ws_battleMaxMembers
 * @text Taille du groupe en combat
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default 0
 *
 * @param ws_menuStatusRows
 * @text Lignes visibles de la liste de statut
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default 0
 *
 * @param ws_menuStatusCols
 * @text Colonnes de la liste de statut
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default 1
 *
 * @param ws_scmWindows
 * @text Remplacements liés à SceneCustomMenu
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default 
 *
 * @param ws_battleEnemySelHidden
 * @text Masquer la fenêtre de sélection d’ennemi
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default false
 *
 * @param ws_menuStatusHidden
 * @text Masquer la liste des acteurs
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default false
 *
 * @param ws_battleLogHidden
 * @text Masquer la fenêtre du journal de combat
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default false
 *
 * @param ws_battleEnemySelKeepStatus
 * @text Garder le statut pendant la sélection d’ennemi
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default false
 *
 * @param ws_battleActorDmgPopup
 * @text Popups de dégâts des acteurs
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default false
 *
 * @param ws_battleActorAnim
 * @text Afficher les animations sur les acteurs
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default false
 *
 * @param ws_battleSkillNameWindow
 * @text Fenêtre du nom de compétence/objet
 * @desc Une valeur gérée et générée automatiquement par Windowset Builder. Ne la modifiez pas à la main (modifiez-la dans Windowset Builder).
 * @type string
 * @default {}
 *
 * @command callScene
 * @text Ouvrir une scène de menu personnalisé
 * @desc Ouvre une scène de menu personnalisé de Windowset Builder à partir de son symbole.
 *
 * @arg symbol
 * @text Symbole de la scène
 * @type select
 * @option Control（Controls）
 * @value Controls
 * @option Custom Scene（CustomScene）
 * @value CustomScene
 * @default Controls
 *
 * @help
 *
 * Ce plugin est généré automatiquement par Windowset Builder.
 * Ne le modifiez pas à la main ; réexportez-le depuis Windowset Builder.
 * - Si vous le modifiez manuellement, vos changements sont écrasés au prochain export.
 * - Les paramètres préfixés par "ws_" sont gérés par Windowset Builder.
 *
 * Exécute les scènes de menu personnalisé et la disposition des commandes menu/titre/combat dans votre jeu.
 * - Chargez-le après WindowsetBuilder.js.
 * - Ouvrez un menu personnalisé avec la commande de plugin « Ouvrir une scène de menu personnalisé » et choisissez la scène.
 */

(() => {
  'use strict';

  const PLUGIN_NAME = 'WindowsetMenu';

  const WsbMenu = {
    _scenes: {},
    _sceneList: [],
  };
  window.WsbMenu = WsbMenu;

  const _wsp_imp = typeof Imported !== 'undefined' && Imported ? Imported : {};
  const WSB_YIELD_BATTLE = !!_wsp_imp.VisuMZ_1_BattleCore || !!_wsp_imp.VisuMZ_3_SideviewBattleUI;
  const WSB_YIELD_MAINMENU = !!_wsp_imp.VisuMZ_1_MainMenuCore;
  const WSB_YIELD_PARTY = !!_wsp_imp.VisuMZ_2_PartySystem;
  WsbMenu._coexist = {
    battle: WSB_YIELD_BATTLE,
    mainMenu: WSB_YIELD_MAINMENU,
    party: WSB_YIELD_PARTY,
  };

  function readScenes() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_scenes ? params.ws_scenes : '[]';
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('[WindowsetMenu] ws_scenes parse error', e);
      return [];
    }
  }

  function wsbIsActor(x) {
    return typeof Game_Actor !== 'undefined' && x instanceof Game_Actor;
  }
  function wsbIsPersonalToken(token) {
    return token === 'std:skill' || token === 'std:equip' || token === 'std:status';
  }

  function wsbOpenSceneToken(token, actor) {
    if (!token || typeof token !== 'string') return false;
    if (token.indexOf('scene:') === 0) {
      WsbMenu.call(token.slice(6));
      return true;
    }
    if (token.indexOf('std:') !== 0) return false;
    var key = token.slice(4);
    if (key === 'skill' || key === 'equip' || key === 'status') {
      if (wsbIsActor(actor)) {
        $gameParty.setMenuActor(actor);
      } else if (
        $gameParty.members().length > 0 &&
        (!$gameParty.menuActor || !$gameParty.menuActor())
      ) {
        $gameParty.setMenuActor($gameParty.members()[0]);
      }
    }
    if (key === 'title') {
      if (typeof Scene_Title !== 'undefined') SceneManager.goto(Scene_Title);
      return true;
    }
    var map = {
      item: typeof Scene_Item !== 'undefined' ? Scene_Item : null,
      skill: typeof Scene_Skill !== 'undefined' ? Scene_Skill : null,
      equip: typeof Scene_Equip !== 'undefined' ? Scene_Equip : null,
      status: typeof Scene_Status !== 'undefined' ? Scene_Status : null,
      options: typeof Scene_Options !== 'undefined' ? Scene_Options : null,
      save: typeof Scene_Save !== 'undefined' ? Scene_Save : null,
      load: typeof Scene_Load !== 'undefined' ? Scene_Load : null,
      gameEnd: typeof Scene_GameEnd !== 'undefined' ? Scene_GameEnd : null,
      menu: typeof Scene_Menu !== 'undefined' ? Scene_Menu : null,
    };
    var Klass = map[key];
    if (Klass) {
      SceneManager.push(Klass);
      return true;
    }
    return false;
  }

  function runMenuEvent(scene, ev, item, resumeWindowId) {
    if (!ev) return;
    if (ev.switchId) {
      $gameSwitches.setValue(ev.switchId, true);
    }
    if (ev.openScene) {
      if (
        wsbIsPersonalToken(ev.openScene) &&
        !wsbIsActor(item) &&
        scene &&
        typeof scene.wsbBeginActorSelect === 'function' &&
        scene.wsbBeginActorSelect(ev.openScene, resumeWindowId)
      ) {
        return;
      }
      if (wsbOpenSceneToken(ev.openScene, item)) return;
    }
    if (ev.focusWindowId) {
      scene.wsbFocusWindow(ev.focusWindowId);
      return;
    }
    if (ev.script) {
      try {
        new Function('item', ev.script).call(scene, item);
      } catch (e) {
        console.error('[WindowsetMenu] script error', e);
      }
    }
    if (ev.commonEventId) {
      scene.wsbRunCommonEvent(ev.commonEventId, resumeWindowId);
      return;
    }
    if (ev.popScene) {
      scene.popScene();
    }
  }

  const WSB_MAP_ONLY_CODES = [101, 102, 103, 104, 105, 401, 405, 201, 301, 302, 303];
  function wsbCommonEventNeedsMap(list) {
    return (
      Array.isArray(list) && list.some((c) => c && WSB_MAP_ONLY_CODES.indexOf(c.code) >= 0)
    );
  }

  const WSB_ANIM_BACK_C1 = 1.70158;
  const WSB_ANIM_BACK_C3 = WSB_ANIM_BACK_C1 + 1;
  function wsbEase(easing, t) {
    const x = t < 0 ? 0 : t > 1 ? 1 : t;
    if (easing === 'linear') return x;
    if (easing === 'easeOutBack') {
      const u = x - 1;
      return 1 + WSB_ANIM_BACK_C3 * u * u * u + WSB_ANIM_BACK_C1 * u * u;
    }
    const u = 1 - x;
    return 1 - u * u * u;
  }

  function wsbSetScroll(win, x, y) {
    if (!win) return;
    if (!x && !y) return;
    win._wsbScrollBg = { x: x || 0, y: y || 0 };
  }
  function wsbApplyWindowAnim(win, frame) {
    const a = win._wsbAnim;
    if (!a) return;
    const restAlpha = typeof win._wsbRestAlpha === 'number' ? win._wsbRestAlpha : 1;
    if (win._wsbExiting && a.exit) {
      const xe = a.exit;
      const xdur = xe.dur && xe.dur > 0 ? xe.dur : 18;
      const xdelay = xe.delay && xe.delay > 0 ? xe.delay : 0;
      const xstart = typeof win._wsbExitStart === 'number' ? win._wsbExitStart : frame;
      let xpp = wsbEase(xe.easing || 'easeOut', (frame - xstart - xdelay) / xdur);
      if (xpp < 0) xpp = 0;
      else if (xpp > 1) xpp = 1;
      let xoffX = 0;
      let xoffY = 0;
      let xscale = 1;
      let xskew = 0;
      if (xe.type === 'slide' || xe.type === 'skewSlide') {
        if (typeof xe.ox === 'number' || typeof xe.oy === 'number') {
          xoffX = xpp * (xe.ox || 0);
          xoffY = xpp * (xe.oy || 0);
        } else {
          const xdir = xe.dir || 'up';
          const xdist = xdir === 'left' || xdir === 'right' ? win.width : win.height;
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
      win.x = Math.round(win._wsbBaseX + xoffX + (win.width * (1 - xscale)) / 2);
      win.y = Math.round(win._wsbBaseY + xoffY + (win.height * (1 - xscale)) / 2);
      if (win.scale) win.scale.set(xscale, xscale);
      const xfa = xe.al === 0 ? 1 : 1 - xpp < 0 ? 0 : 1 - xpp;
      win.alpha = restAlpha * xfa;
      if (win.transform && win.transform.skew) win.transform.skew.x = xskew;
      return;
    }
    let offX = 0;
    let offY = 0;
    let scale = 1;
    let alpha = 1;
    let skew = 0;
    const e = a.enter;
    let enterDone = true;
    if (e) {
      const dur = e.dur && e.dur > 0 ? e.dur : 18;
      const delay = e.delay && e.delay > 0 ? e.delay : 0;
      const tt = (frame - win._wsbEnterStart - delay) / dur;
      enterDone = tt >= 1;
      const p = wsbEase(e.easing || 'easeOut', tt);
      if (tt < 0 && e.al !== 0) {
        alpha = 0;
      } else if (tt < 1) {
        const inv = 1 - p;
        const dir = e.dir || 'up';
        if (e.type === 'slide' || e.type === 'skewSlide') {
          if (typeof e.ox === 'number' || typeof e.oy === 'number') {
            offX = inv * (e.ox || 0);
            offY = inv * (e.oy || 0);
          } else {
            const dist = dir === 'left' || dir === 'right' ? win.width : win.height;
            if (dir === 'left') offX = -inv * dist;
            else if (dir === 'right') offX = inv * dist;
            else if (dir === 'up') offY = -inv * dist;
            else offY = inv * dist;
          }
          if (e.type === 'skewSlide') skew = inv * 0.35;
          if (typeof e.sc === 'number') scale = e.sc + (1 - e.sc) * p;
          alpha = e.al === 0 ? 1 : p;
        } else if (e.type === 'scale') {
          scale = 0.2 + 0.8 * p;
          alpha = p;
        } else if (e.type === 'fade') {
          alpha = p;
        }
      }
    }
    const id = a.idle;
    if (id && enterDone) {
      const period = id.period && id.period > 0 ? id.period : 90;
      const ph = Math.sin((2 * Math.PI * frame) / period);
      if (id.type === 'bob') offY += ph * (id.amp && id.amp > 0 ? id.amp : 4);
      else if (id.type === 'pulse') scale *= 1 + ph * (id.amp && id.amp > 0 ? id.amp : 0.04);
      else if (id.type === 'pulseHold') {
        const amp2 = id.amp && id.amp > 0 ? id.amp : 0.04;
        const phase2 = (frame % period) / period;
        if (phase2 < 0.5) scale *= 1 + Math.sin(Math.PI * (phase2 / 0.5)) * amp2;
      }
    }
    win.x = Math.round(win._wsbBaseX + offX + (win.width * (1 - scale)) / 2);
    win.y = Math.round(win._wsbBaseY + offY + (win.height * (1 - scale)) / 2);
    if (win.scale) win.scale.set(scale, scale);
    const fa = alpha < 0 ? 0 : alpha > 1 ? 1 : alpha;
    win.alpha = restAlpha * fa;
    if (win.transform && win.transform.skew) win.transform.skew.x = skew;
    if (a.cursorPulse && win._cursorSprite) {
      const cp = 0.7 + 0.3 * (0.5 + 0.5 * Math.sin((2 * Math.PI * frame) / 45));
      win._cursorSprite.alpha *= cp;
    }
    if (a.itemStagger && typeof win.refresh === 'function' && typeof win.maxItems === 'function') {
      const sper = a.itemStagger.per && a.itemStagger.per > 0 ? a.itemStagger.per : 4;
      const sdur = a.enter && a.enter.dur && a.enter.dur > 0 ? a.enter.dur : 18;
      let sN = 0;
      try {
        sN = win.maxItems();
      } catch (e) {
        sN = 0;
      }
      const sEnd = (win._wsbEnterStart || 0) + sdur + Math.max(0, sN - 1) * sper;
      win._wsbStaggerFrame = frame;
      if (frame <= sEnd) {
        win._wsbStaggerActive = true;
        try {
          win.refresh();
        } catch (e) {
        }
      } else if (win._wsbStaggerActive) {
        win._wsbStaggerActive = false;
        try {
          win.refresh();
        } catch (e) {
        }
      }
    }
  }
  function wsbStaggerItemAlpha(win, index) {
    const a = win._wsbAnim;
    if (!a || !a.itemStagger) return 1;
    const per = a.itemStagger.per && a.itemStagger.per > 0 ? a.itemStagger.per : 4;
    const dur = a.enter && a.enter.dur && a.enter.dur > 0 ? a.enter.dur : 18;
    const start = win._wsbEnterStart || 0;
    const fc = win._wsbStaggerFrame || 0;
    const tt = (fc - start - (index || 0) * per) / dur;
    return tt < 0 ? 0 : tt > 1 ? 1 : tt;
  }

  function wsbBackRoundClip(ctx, x, y, w, h) {
    let r = 16;
    const maxR = Math.floor(Math.min(w, h) / 2);
    if (r > maxR) r = maxR;
    if (r <= 0) {
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      ctx.clip();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    ctx.clip();
  }

  function wsbBackPanel(win, bl) {
    const w = Math.max(1, Math.round(win.width || 1));
    const h = Math.max(1, Math.round(win.height || 1));
    const sx = bl.sx && bl.sx > 0 ? bl.sx : 1;
    const sy = bl.sy && bl.sy > 0 ? bl.sy : 1;
    const pw = Math.max(1, Math.round(w * sx));
    const ph = Math.max(1, Math.round(h * sy));
    const ox = Math.round(bl.ox || 0);
    const oy = Math.round(bl.oy || 0);
    if (!bl.ovf) return { x: 0, y: 0, w: w, h: h, pw: pw, ph: ph, ox: ox, oy: oy };
    const amp = bl.bobAmp && bl.bobAmp > 0 ? Math.ceil(bl.bobAmp) : 0;
    const mx = bl.bobAxis === 'x' ? amp : 0;
    const my = bl.bobAxis === 'x' ? 0 : amp;
    const x0 = Math.min(0, ox - mx);
    const y0 = Math.min(0, oy - my);
    const x1 = Math.max(w, ox + pw + mx);
    const y1 = Math.max(h, oy + ph + my);
    return {
      x: x0,
      y: y0,
      w: Math.max(1, x1 - x0),
      h: Math.max(1, y1 - y0),
      pw: pw,
      ph: ph,
      ox: ox,
      oy: oy
    };
  }
  function wsbBackKey(p, dx, dy, ready) {
    return p.w + 'x' + p.h + '@' + p.x + ',' + p.y + ':' + dx + ',' + dy + ':' + (ready ? 'r' : 'l');
  }
  function wsbAssignBackImage(sp, folder, name) {
    sp._wsbSrcBitmap = ImageManager.loadBitmap(folder, name);
    sp._wsbComposedKey = '';
  }
  function wsbCreateBackLayer(win, bl) {
    const sp = new Sprite();
    if (bl.image) {
      sp._wsbImgName = bl.image;
      sp._wsbTriedSys = false;
      wsbAssignBackImage(sp, 'img/pictures/', bl.image);
    }
    const op = typeof bl.op === 'number' ? bl.op : 1;
    sp.opacity = Math.round(255 * (op < 0 ? 0 : op > 1 ? 1 : op));
    return sp;
  }
  function wsbComposeBackLayer(win, bl, sp, p, dx, dy, key) {
    const src = sp._wsbSrcBitmap;
    const srcReady = !!(src && (typeof src.isReady !== 'function' || src.isReady()));
    let bm = sp._wsbComposedBm;
    if (!bm || bm.width !== p.w || bm.height !== p.h) {
      bm = new Bitmap(p.w, p.h);
      sp._wsbComposedBm = bm;
    } else {
      bm.clear();
    }
    const ctx = bm.context || bm._context;
    if (ctx) {
      ctx.save();
      wsbBackRoundClip(ctx, dx, dy, p.pw, p.ph);
      if (bl.skew) ctx.transform(1, 0, Math.tan((bl.skew * Math.PI) / 180), 1, 0, 0);
      if (bl.blur && bl.blur > 0 && typeof ctx.filter === 'string') {
        ctx.filter = 'blur(' + bl.blur + 'px)';
      }
    }
    if (bl.image) {
      if (srcReady && src.width > 0 && src.height > 0) {
        bm.blt(src, 0, 0, src.width, src.height, dx, dy, p.pw, p.ph);
      }
    } else if (bl.color) {
      if (bl.c2) bm.gradientFillRect(dx, dy, p.pw, p.ph, bl.color, bl.c2, bl.gdir !== 'horizontal');
      else bm.fillRect(dx, dy, p.pw, p.ph, bl.color);
    }
    if (ctx) ctx.restore();
    if (typeof bm._setDirty === 'function') bm._setDirty();
    else if (bm._baseTexture && typeof bm._baseTexture.update === 'function') bm._baseTexture.update();
    sp.bitmap = bm;
    if (sp.scale && sp.scale.set) sp.scale.set(1, 1);
    sp.x = p.x;
    sp.y = p.y;
    sp._wsbComposedKey = key;
  }
  function wsbApplyBackLayer(win, frame) {
    const sp = win._wsbBackLayer;
    const bl = win._wsbBackLayerParam;
    if (!sp || !bl) return;
    if (bl.image && sp._wsbSrcBitmap && !sp._wsbTriedSys && sp._wsbSrcBitmap.isError && sp._wsbSrcBitmap.isError()) {
      sp._wsbTriedSys = true;
      wsbAssignBackImage(sp, 'img/system/', sp._wsbImgName);
    }
    let bob = 0;
    if (bl.bobAmp && bl.bobAmp > 0) {
      const per = bl.bobPer && bl.bobPer > 0 ? bl.bobPer : 90;
      bob = Math.sin((2 * Math.PI * frame) / per) * bl.bobAmp;
    }
    const p = wsbBackPanel(win, bl);
    const dx = Math.round(p.ox - p.x + (bl.bobAxis === 'x' ? bob : 0));
    const dy = Math.round(p.oy - p.y + (bl.bobAxis === 'x' ? 0 : bob));
    const src = sp._wsbSrcBitmap;
    const srcReady = !!(src && (typeof src.isReady !== 'function' || src.isReady()));
    const key = wsbBackKey(p, dx, dy, srcReady);
    if (sp._wsbComposedKey !== key) wsbComposeBackLayer(win, bl, sp, p, dx, dy, key);
  }

  function wsbItemBgRgba(stop) {
    const hex = typeof stop.h === 'string' && /^#[0-9a-fA-F]{6}$/.test(stop.h) ? stop.h : '#000000';
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const a = typeof stop.a === 'number' ? Math.max(0, Math.min(1, stop.a)) : 1;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  }
  function wsbDrawItemBackgroundWith(win, superDraw, index) {
    const ib = win._wsbParam && win._wsbParam.ib;
    if (!ib) {
      superDraw(index);
      return;
    }
    if (!ib.v) return;
    const rect = win.itemRect(index);
    const back = win.contentsBack || win.contents;
    if (!back || !back.gradientFillRect) {
      superDraw(index);
      return;
    }
    const c1 = wsbItemBgRgba(ib.t);
    const c2 = wsbItemBgRgba(ib.b);
    back.gradientFillRect(rect.x, rect.y, rect.width, rect.height, c1, c2, true);
    if (back.strokeRect) back.strokeRect(rect.x, rect.y, rect.width, rect.height, c1);
  }

  class Window_WsbMenuCommand extends Window_Command {
    initialize(rect, param) {
      this._wsbParam = param || { commands: [], columns: 1 };
      super.initialize(rect);
    }
    maxCols() {
      const c = this._wsbParam.columns;
      return c && c > 0 ? c : 1;
    }
    itemHeight() {
      const h = this._wsbParam.itemHeight;
      return h && h > 0 ? h : super.itemHeight();
    }
    makeCommandList() {
      this._wsbCommands = [];
      const list = this._wsbParam.commands || [];
      for (let i = 0; i < list.length; i++) {
        const cmd = list[i];
        if (cmd.visibleSwitchId && !$gameSwitches.value(cmd.visibleSwitchId)) continue;
        const enabled = !cmd.enableSwitchId || $gameSwitches.value(cmd.enableSwitchId);
        this.addCommand(cmd.text, 'wsb' + i, enabled);
        this._wsbCommands.push(cmd);
      }
    }
    currentWsbCommand() {
      return this._wsbCommands ? this._wsbCommands[this.index()] : null;
    }
    itemTextAlign() {
      return 'left';
    }
    drawItemBackground(index) {
      wsbDrawItemBackgroundWith(this, super.drawItemBackground.bind(this), index);
    }
    drawItem(index) {
      const cmd = this._wsbCommands ? this._wsbCommands[index] : null;
      const rect = this.itemLineRect(index);
      this.resetTextColor();
      this.changePaintOpacity(this.isCommandEnabled(index));
      if (this._wsbStaggerActive && this.contents) {
        this.contents.paintOpacity = Math.round(
          this.contents.paintOpacity * wsbStaggerItemAlpha(this, index),
        );
      }
      const align = cmd && cmd.align ? cmd.align : 'left';
      this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
    }
  }
  window.Window_WsbMenuCommand = Window_WsbMenuCommand;

  function wsbTouchBitmap(bitmap) {
    if (!bitmap) return;
    if (bitmap._baseTexture && typeof bitmap._baseTexture.update === 'function') {
      bitmap._baseTexture.update();
    } else if (typeof bitmap._setDirty === 'function') {
      bitmap._setDirty();
    }
  }
  function wsbGaugeInt(v, def, lo, hi) {
    const n = Number(v);
    if (!Number.isFinite(n)) return def;
    return Math.max(lo, Math.min(hi, Math.round(n)));
  }
  function wsbMenuGaugeColors(type) {
    const CM = typeof ColorManager !== 'undefined' ? ColorManager : null;
    if (type === 'hp') {
      return {
        c1: CM ? CM.hpGaugeColor1() : '#e08040',
        c2: CM ? CM.hpGaugeColor2() : '#ffc060',
      };
    }
    if (type === 'mp') {
      return {
        c1: CM ? CM.mpGaugeColor1() : '#4080c0',
        c2: CM ? CM.mpGaugeColor2() : '#40c0f0',
      };
    }
    return {
      c1: CM ? CM.tpGaugeColor1() : '#20a060',
      c2: CM ? CM.tpGaugeColor2() : '#60e090',
    };
  }
  function wsbGaugeOff(v) {
    return typeof v === 'number' && isFinite(v) ? Math.round(v) : 0;
  }
  function wsbGaugeBarHeight(g, h) {
    const t = g && typeof g.barThickness === 'number' ? g.barThickness : 0;
    if (t > 0) return Math.max(2, Math.min(h, Math.round(t)));
    return Math.max(6, Math.min(h, 18));
  }
  function wsbGaugeLabel(type) {
    if (typeof TextManager === 'undefined') return String(type).toUpperCase();
    if (type === 'hp') return TextManager.hpA;
    if (type === 'mp') return TextManager.mpA;
    return TextManager.tpA;
  }
  function wsbGaugeValues(actor, type) {
    let cur = 0;
    let max = 0;
    if (type === 'hp') {
      cur = actor.hp;
      max = actor.mhp;
    } else if (type === 'mp') {
      cur = actor.mp;
      max = actor.mmp;
    } else {
      cur = actor.tp;
      max = typeof actor.maxTp === 'function' ? actor.maxTp() : 100;
    }
    return { cur: cur, max: max, rate: max > 0 ? cur / max : 0 };
  }
  function wsbDrawMenuGauge(bitmap, layout, x, y, width, height, rate, color1, color2, backColor, opts) {
    if (!bitmap || !bitmap.context) return;
    const ctx = bitmap.context;
    const r = Math.max(0, Math.min(1, Number(rate) || 0));
    const o = opts || {};
    const lay = typeof layout === 'string' ? layout : 'bar';
    ctx.save();
    const mkGrad = () => {
      const g = ctx.createLinearGradient(x, 0, x + width, 0);
      g.addColorStop(0, color1);
      g.addColorStop(1, color2);
      return g;
    };
    if (lay === 'ring') {
      const lineW = wsbGaugeInt(o.ringThickness, 6, 2, 12);
      const d = Math.min(width, height);
      const cx = x + width / 2;
      const cy = y + height / 2;
      const radius = Math.max(3, Math.floor((d - lineW) / 2) - 1);
      ctx.lineWidth = lineW;
      ctx.strokeStyle = backColor;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
      if (r > 0) {
        const rg = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy);
        rg.addColorStop(0, color1);
        rg.addColorStop(1, color2);
        ctx.strokeStyle = rg;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * r);
        ctx.stroke();
      }
    } else if (lay === 'slant') {
      const slantTan = Math.tan((wsbGaugeInt(o.slantAngle, 31, 10, 60) * Math.PI) / 180);
      const slope = Math.max(2, Math.round(height * slantTan));
      const SHADOW_OFF = 3;
      const wEff = Math.max(slope + 6, width - SHADOW_OFF);
      const para = (px, py, w) => {
        ctx.beginPath();
        ctx.moveTo(px + slope, py);
        ctx.lineTo(px + w, py);
        ctx.lineTo(px + w - slope, py + height);
        ctx.lineTo(px, py + height);
        ctx.closePath();
      };
      para(x + SHADOW_OFF, y + SHADOW_OFF, wEff);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fill();
      para(x, y, wEff);
      ctx.fillStyle = backColor;
      ctx.fill();
      const innerW = Math.max(0, Math.round((wEff - slope - 2) * r));
      if (innerW > 0) {
        ctx.fillStyle = mkGrad();
        ctx.beginPath();
        ctx.moveTo(x + slope + 1, y + 1);
        ctx.lineTo(x + slope + 1 + innerW, y + 1);
        ctx.lineTo(x + 1 + innerW, y + height - 1);
        ctx.lineTo(x + 1, y + height - 1);
        ctx.closePath();
        ctx.fill();
      }
      para(x, y, wEff);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    } else if (lay === 'segment') {
      const segCount = wsbGaugeInt(o.segmentCount, 10, 4, 20);
      const gap = 2;
      const cellW = (width - gap * (segCount - 1)) / segCount;
      const grad = mkGrad();
      const filledCells = r * segCount;
      for (let i = 0; i < segCount; i++) {
        const cx = x + i * (cellW + gap);
        ctx.fillStyle = backColor;
        ctx.fillRect(cx, y, cellW, height);
        const cellFill = Math.max(0, Math.min(1, filledCells - i));
        if (cellFill > 0) {
          ctx.fillStyle = grad;
          ctx.fillRect(cx + 1, y + 1, Math.max(1, (cellW - 2) * cellFill), height - 2);
        }
      }
    } else if (lay === 'capsule') {
      const capsulePath = (px, py, w, h) => {
        const rr = Math.min(h / 2, w / 2);
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(px, py, w, h, rr);
        } else {
          ctx.moveTo(px + rr, py);
          ctx.lineTo(px + w - rr, py);
          ctx.arc(px + w - rr, py + rr, rr, -Math.PI / 2, Math.PI / 2);
          ctx.lineTo(px + rr, py + h);
          ctx.arc(px + rr, py + rr, rr, Math.PI / 2, (3 * Math.PI) / 2);
        }
        ctx.closePath();
      };
      capsulePath(x, y, width, height);
      ctx.fillStyle = backColor;
      ctx.fill();
      const innerW = Math.max(0, Math.round((width - 2) * r));
      if (innerW > 0) {
        ctx.save();
        capsulePath(x + 1, y + 1, width - 2, height - 2);
        ctx.clip();
        ctx.fillStyle = mkGrad();
        ctx.fillRect(x + 1, y + 1, innerW, height - 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.fillRect(x + 1, y + 1, innerW, Math.max(1, Math.floor((height - 2) / 2)));
        ctx.restore();
      }
      capsulePath(x + 0.5, y + 0.5, width - 1, height - 1);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1;
      ctx.stroke();
    } else if (lay === 'thin') {
      const cy = y + Math.floor(height / 2);
      ctx.fillStyle = backColor;
      ctx.fillRect(x, cy - 1, width, 2);
      const fw = Math.round((width - 4) * r);
      if (fw > 0) {
        ctx.fillStyle = mkGrad();
        ctx.fillRect(x, cy - 2, fw, 4);
        ctx.beginPath();
        ctx.arc(x + fw, cy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = color2;
        ctx.fill();
      }
    } else if (lay === 'diamond') {
      const n = 8;
      const gap = 2;
      const cellW = (width - gap * (n - 1)) / n;
      const cells = r * n;
      const grad = mkGrad();
      for (let i = 0; i < n; i++) {
        const cx = x + i * (cellW + gap);
        const diamond = () => {
          ctx.beginPath();
          ctx.moveTo(cx + cellW / 2, y);
          ctx.lineTo(cx + cellW, y + height / 2);
          ctx.lineTo(cx + cellW / 2, y + height);
          ctx.lineTo(cx, y + height / 2);
          ctx.closePath();
        };
        diamond();
        ctx.fillStyle = backColor;
        ctx.fill();
        const f = Math.max(0, Math.min(1, cells - i));
        if (f > 0) {
          ctx.save();
          diamond();
          ctx.clip();
          ctx.fillStyle = grad;
          ctx.fillRect(cx, y, cellW * f, height);
          ctx.restore();
        }
      }
    } else if (lay === 'pixel') {
      const n = 12;
      const gap = 2;
      const cellW = (width - gap * (n - 1)) / n;
      const grad = mkGrad();
      const filled = Math.floor(r * n + 0.000001);
      for (let i = 0; i < n; i++) {
        const cx = x + i * (cellW + gap);
        ctx.fillStyle = i < filled ? grad : backColor;
        ctx.fillRect(Math.round(cx), y, Math.ceil(cellW), height);
        if (i < filled) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
          ctx.fillRect(Math.round(cx), y + Math.floor(height / 2), Math.ceil(cellW), Math.ceil(height / 2));
        }
      }
    } else if (lay === 'chevron') {
      const n = 12;
      const gap = 2;
      const skew = Math.floor(height / 2);
      const cellW = (width - skew - gap * (n - 1)) / n;
      const cells = r * n;
      const grad = mkGrad();
      for (let i = 0; i < n; i++) {
        const cx = x + i * (cellW + gap);
        const paraCell = (w) => {
          ctx.beginPath();
          ctx.moveTo(cx + skew, y);
          ctx.lineTo(cx + skew + w, y);
          ctx.lineTo(cx + w, y + height);
          ctx.lineTo(cx, y + height);
          ctx.closePath();
        };
        paraCell(cellW);
        ctx.fillStyle = backColor;
        ctx.fill();
        const f = Math.max(0, Math.min(1, cells - i));
        if (f > 0) {
          paraCell(Math.max(1, cellW * f));
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }
    } else if (lay === 'neon') {
      ctx.fillStyle = backColor;
      ctx.fillRect(x, y, width, height);
      const fw = Math.max(0, Math.round((width - 4) * r));
      if (fw > 0) {
        const cy = y + Math.floor(height / 2);
        ctx.shadowColor = color2;
        ctx.shadowBlur = 6;
        ctx.fillStyle = mkGrad();
        ctx.fillRect(x + 2, cy - 2, fw, 4);
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillRect(x + 2, cy - 1, fw, 1);
      }
    } else if (lay === 'stripe') {
      ctx.fillStyle = backColor;
      ctx.fillRect(x, y, width, height);
      const fw = Math.max(0, Math.round((width - 2) * r));
      if (fw > 0) {
        ctx.fillStyle = mkGrad();
        ctx.fillRect(x + 1, y + 1, fw, height - 2);
        ctx.save();
        ctx.beginPath();
        ctx.rect(x + 1, y + 1, fw, height - 2);
        ctx.clip();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 3;
        for (let sxp = x - height; sxp < x + fw + height; sxp += 8) {
          ctx.beginPath();
          ctx.moveTo(sxp, y + height + 1);
          ctx.lineTo(sxp + height, y - 1);
          ctx.stroke();
        }
        ctx.restore();
      }
    } else {
      ctx.fillStyle = backColor;
      ctx.fillRect(x, y, width, height);
      const fw = Math.round((width - 2) * r);
      if (fw > 0) {
        ctx.fillStyle = mkGrad();
        ctx.fillRect(x + 1, y + 1, fw, height - 2);
      }
    }
    ctx.restore();
    wsbTouchBitmap(bitmap);
  }

  const WsbMenuDataBase =
    typeof Window_StatusBase !== 'undefined' ? Window_StatusBase : Window_Selectable;
  class Window_WsbMenuData extends WsbMenuDataBase {
    initialize(rect, param) {
      this._wsbParam = param || {};
      this._wsbItems = [];
      super.initialize(rect);
      this.refresh();
      if (this._wsbParam.selectable === false) {
        this.deselect();
        this.deactivate();
      } else {
        this.select(0);
      }
    }
    maxCols() {
      const c = this._wsbParam.columns;
      return c && c > 0 ? c : 1;
    }
    maxItems() {
      return this._wsbItems ? this._wsbItems.length : 0;
    }
    currentWsbItem() {
      return this._wsbItems ? this._wsbItems[this.index()] : null;
    }
    wsbBuildItems() {
      let arr = [];
      let fromScript = false;
      const src = this._wsbParam.dataScript;
      if (src) {
        try {
          const fn = new Function(
            '$gameParty',
            '$gameActors',
            '$gameSystem',
            '$gameVariables',
            '$gameSwitches',
            'return (' + src + ');',
          );
          const result = fn($gameParty, $gameActors, $gameSystem, $gameVariables, $gameSwitches);
          if (Array.isArray(result)) {
            arr = result;
            fromScript = true;
          }
        } catch (e) {
          console.error('[WindowsetMenu] dataScript error', e);
        }
      }
      if (
        !fromScript &&
        this._wsbParam.elements &&
        this._wsbParam.elements.length > 0 &&
        typeof $gameParty !== 'undefined' &&
        $gameParty
      ) {
        const needActor = this._wsbParam.elements.some(function (e) {
          return (
            e &&
            (e.type === 'face' ||
              e.type === 'name' ||
              e.type === 'class' ||
              e.type === 'level' ||
              e.type === 'exp' ||
              e.type === 'hp' ||
              e.type === 'mp' ||
              e.type === 'tp' ||
              (e.type === 'variable' && e.variablePerActor) ||
              (e.type === 'text' && e.textPerActor) ||
              (e.type === 'picture' && e.picturePerActor))
          );
        });
        arr = needActor ? $gameParty.members() : [0];
      }
      const filter = this._wsbParam.filterScript;
      if (filter) {
        try {
          const ffn = new Function('item', 'index', 'return (' + filter + ');');
          arr = arr.filter((it, i) => {
            try {
              return !!ffn(it, i);
            } catch (e) {
              return true;
            }
          });
        } catch (e) {
          console.error('[WindowsetMenu] filterScript error', e);
        }
      }
      this._wsbItems = arr;
    }
    itemHeight() {
      const ih = this._wsbParam && this._wsbParam.itemHeight;
      const base = ih && ih > 0 ? ih : super.itemHeight();
      if (this._wsbParam && this._wsbParam.fitItems) {

        const n = Math.min(this.maxItems(), 4);
        if (n > 0) {
          const inner = this.innerHeight || this.height - this.padding * 2;
          const fit = Math.floor(inner / n);
          const line = super.itemHeight();
          if (fit >= line && fit < base) return fit;
        }
      }
      return base;
    }
    refresh() {
      this.wsbBuildItems();
      this.wsbEnsureFacesLoaded();
      this.wsbEnsurePicturesLoaded();
      super.refresh();
    }
    drawItemBackground(index) {
      wsbDrawItemBackgroundWith(this, super.drawItemBackground.bind(this), index);
    }
    wsbResolvePictureName(name, item) {
      if (String(name).indexOf('%1') < 0) return name;
      const id = item && typeof item.actorId === 'function' ? item.actorId() : 0;
      return String(name).replace(/%1/g, String(id));
    }
    wsbEnsurePicturesLoaded() {
      const els = this._wsbParam && this._wsbParam.elements;
      if (!els || !els.length) return;
      if (!this._wsbPicWaited) this._wsbPicWaited = {};
      const items = this._wsbItems || [];
      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        if (!el || el.type !== 'picture') continue;
        const names = {};
        if (el.picturePerActor) {
          const list = el.actorPictures || [];
          for (let k = 0; k < list.length; k++) {
            const it = list[k];
            if (it && it.picture) {
              names[String(it.picture).replace(/%1/g, String(it.actorId))] = true;
            }
          }
        } else if (!el.picture) {
          continue;
        } else if (String(el.picture).indexOf('%1') < 0) {
          names[el.picture] = true;
        } else {
          for (let k = 0; k < items.length; k++) {
            names[this.wsbResolvePictureName(el.picture, items[k])] = true;
          }
        }
        for (const nm in names) {
          if (this._wsbPicWaited[nm]) continue;
          const bmp = ImageManager.loadPicture(nm);
          if (bmp && !bmp.isReady()) {
            this._wsbPicWaited[nm] = true;
            bmp.addLoadListener(this.refresh.bind(this));
          }
        }
      }
    }
    wsbEnsureFacesLoaded() {
      const items = this._wsbItems || [];
      if (!this._wsbFaceWaited) this._wsbFaceWaited = {};
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        if (it && typeof it.faceName === 'function') {
          const name = it.faceName();
          if (name && !this._wsbFaceWaited[name]) {
            const bmp = ImageManager.loadFace(name);
            if (bmp && !bmp.isReady()) {
              this._wsbFaceWaited[name] = true;
              bmp.addLoadListener(this.refresh.bind(this));
            }
          }
        }
      }
    }
    drawItem(index) {
      const item = this._wsbItems ? this._wsbItems[index] : null;
      if (item == null) return;
      const els = this._wsbParam.elements;
      if (els && els.length > 0) {
        const rect =
          typeof this.itemRect === 'function' ? this.itemRect(index) : this.itemLineRect(index);
        for (let i = 0; i < els.length; i++) {
          try {
            this.wsbDrawElement(item, els[i], rect);
          } catch (e) {
            console.error('[WindowsetMenu] element draw error', e);
          }
        }
        this.resetFontSettings();
        return;
      }
      const rect = this.itemLineRect(index);
      const src = this._wsbParam.drawScript;
      if (src) {
        try {
          const fn = new Function('item', 'rect', 'index', src);
          fn.call(this, item, rect, index);
          return;
        } catch (e) {
          console.error('[WindowsetMenu] drawScript error', e);
        }
      }
      this.resetTextColor();
      const text =
        item && typeof item === 'object' && 'name' in item ? String(item.name) : String(item);
      this.drawText(text, rect.x, rect.y, rect.width, 'left');
    }
    wsbDrawElement(actor, el, rect) {
      if (!el || !el.type) return;
      if (
        el.visibleSwitchId &&
        typeof $gameSwitches !== 'undefined' &&
        $gameSwitches &&
        !$gameSwitches.value(el.visibleSwitchId)
      ) {
        return;
      }
      const ex = rect.x + (el.x || 0);
      const ey = rect.y + (el.y || 0);
      const w = el.width && el.width > 0 ? el.width : 0;
      const h = el.height && el.height > 0 ? el.height : 0;
      const lineH = typeof this.lineHeight === 'function' ? this.lineHeight() : 36;
      const align = el.align || 'left';
      const sys = () => this.changeTextColor(ColorManager.systemColor());
      const applyTextFont = () => {
        if (el.fontSize) this.contents.fontSize = el.fontSize;
        if (typeof el.color === 'string') this.changeTextColor(el.color);
      };
      switch (el.type) {
        case 'face': {
          if (typeof this.drawActorFace === 'function') {
            const prev = this.contents.paintOpacity;
            if (typeof el.opacity === 'number') this.contents.paintOpacity = el.opacity;
            this.drawActorFace(actor, ex, ey, w || 144, h || 144);
            this.contents.paintOpacity = prev;
          }
          break;
        }
        case 'picture':
          if (el.picture || el.picturePerActor) this.wsbDrawPictureElement(el, ex, ey, w, h, actor);
          break;
        case 'name':
          applyTextFont();
          this.drawText(actor.name(), ex, ey, w || 168, align);
          this.resetFontSettings();
          break;
        case 'class': {
          applyTextFont();
          const cls =
            actor.currentClass && actor.currentClass() ? actor.currentClass().name : '';
          this.drawText(cls, ex, ey, w || 168, align);
          this.resetFontSettings();
          break;
        }
        case 'level': {
          const lbl = typeof TextManager !== 'undefined' ? TextManager.levelA : 'Lv';
          if (el.fontSize) this.contents.fontSize = el.fontSize;
          sys();
          const lw = this.textWidth(lbl) + 4;
          this.drawText(lbl, ex, ey, lw, 'left');
          this.resetTextColor();
          if (el.fontSize) this.contents.fontSize = el.fontSize;
          this.drawText(String(actor.level), ex + lw, ey, (w || 168) - lw, align);
          this.resetFontSettings();
          break;
        }
        case 'exp': {
          const lbl =
            typeof TextManager !== 'undefined' && TextManager.expA ? TextManager.expA : 'EXP';
          if (el.fontSize) this.contents.fontSize = el.fontSize;
          sys();
          const lw = this.textWidth(lbl) + 4;
          this.drawText(lbl, ex, ey, lw, 'left');
          this.resetTextColor();
          if (el.fontSize) this.contents.fontSize = el.fontSize;
          const expVal = typeof actor.currentExp === 'function' ? actor.currentExp() : 0;
          this.drawText(String(expVal), ex + lw, ey, (w || 168) - lw, align);
          this.resetFontSettings();
          break;
        }
        case 'gold': {
          if (
            typeof this.drawCurrencyValue === 'function' &&
            typeof $gameParty !== 'undefined' &&
            $gameParty
          ) {
            const unit =
              typeof TextManager !== 'undefined' && TextManager.currencyUnit
                ? TextManager.currencyUnit
                : '';
            if (el.fontSize) this.contents.fontSize = el.fontSize;
            this.drawCurrencyValue($gameParty.gold(), unit, ex, ey, w || 200);
            this.resetFontSettings();
          }
          break;
        }
        case 'hp':
        case 'mp':
        case 'tp':
          this.wsbDrawGaugeElement(actor, el, ex, ey, lineH);
          break;
        case 'variable':
          this.wsbDrawVariableElement(actor, el, ex, ey, lineH);
          break;
        case 'text': {
          let tx = el.text;
          if (el.textPerActor) {
            tx = '';
            const list = el.actorTexts || [];
            const aid = actor && typeof actor.actorId === 'function' ? actor.actorId() : 0;
            for (let i = 0; i < list.length; i++) {
              const it = list[i];
              if (it && it.actorId === aid) {
                tx = it.text;
                break;
              }
            }
          }
          if (typeof tx === 'string' && tx !== '') {
            if (el.fontSize) this.contents.fontSize = el.fontSize;
            if (typeof el.color === 'string') this.changeTextColor(el.color);
            if (typeof this.drawTextEx === 'function') {
              this.drawTextEx(tx, ex, ey, w || this.innerWidth);
            } else {
              this.drawText(tx, ex, ey, w || 168, align);
            }
            this.resetFontSettings();
          }
          break;
        }
        default:
          break;
      }
    }
    wsbDrawGaugeElement(actor, el, ex, ey, lineH) {
      const type = el.type;
      const w = el.width && el.width > 0 ? el.width : 128;
      const h = el.height && el.height > 0 ? el.height : 24;
      const vals = wsbGaugeValues(actor, type);
      const g = el.gauge || {};
      const dflt = wsbMenuGaugeColors(type);
      const color1 = typeof g.color1 === 'string' ? g.color1 : dflt.c1;
      const color2 = typeof g.color2 === 'string' ? g.color2 : dflt.c2;
      const backColor =
        typeof g.backColor === 'string'
          ? g.backColor
          : typeof ColorManager !== 'undefined'
            ? ColorManager.gaugeBackColor()
            : 'rgba(0, 0, 0, 0.5)';
      const layout = g.visible !== false && typeof g.layout === 'string' ? g.layout : 'bar';
      const opts = {
        slantAngle: g.slantAngle,
        segmentCount: g.segmentCount,
        ringThickness: g.ringThickness,
      };
      const lox = wsbGaugeOff(g.labelOffsetX);
      const loy = wsbGaugeOff(g.labelOffsetY);
      const box = wsbGaugeOff(g.barOffsetX);
      const boy = wsbGaugeOff(g.barOffsetY);
      const bld = wsbGaugeOff(g.barLengthDelta);
      const vox = wsbGaugeOff(g.valueOffsetX);
      const voy = wsbGaugeOff(g.valueOffsetY);
      const vcy = ey + Math.round((h - lineH) / 2);
      if (layout === 'ring') {
        wsbDrawMenuGauge(this.contents, 'ring', ex + box, ey + boy, w, h, vals.rate, color1, color2, backColor, opts);
        const d = Math.min(w, h);
        this.contents.fontSize = Math.max(10, Math.round(d * 0.3));
        this.changeTextColor(ColorManager.normalColor());
        this.drawText(String(vals.cur), ex + box + vox, vcy + boy + voy, w, 'center');
        this.resetFontSettings();
        return;
      }
      const label = wsbGaugeLabel(type);
      const labelW = label ? Math.min(Math.floor(w * 0.4), this.textWidth(label) + 6) : 0;
      if (labelW > 0) {
        this.changeTextColor(ColorManager.systemColor());
        this.drawText(label, ex + lox, vcy + loy, labelW, 'left');
        this.resetTextColor();
      }
      const gx = ex + labelW + box;
      const gw = Math.max(4, w - labelW + bld);
      const gh = wsbGaugeBarHeight(g, h);
      const gy = ey + Math.floor((h - gh) / 2) + boy;
      wsbDrawMenuGauge(this.contents, layout, gx, gy, gw, gh, vals.rate, color1, color2, backColor, opts);
      this.changeTextColor(ColorManager.normalColor());
      this.drawText(String(vals.cur), gx + vox, vcy + boy + voy, gw - 2, 'right');
      this.resetFontSettings();
    }
    wsbDrawVariableElement(actor, el, ex, ey, lineH) {
      const w = el.width && el.width > 0 ? el.width : 128;
      const h = el.height && el.height > 0 ? el.height : 24;
      const gv = typeof $gameVariables !== 'undefined' ? $gameVariables : null;
      let vid = el.variableId || 0;
      if (vid > 0 && el.variablePerActor && actor && typeof actor.actorId === 'function') {
        vid = vid + (actor.actorId() - 1);
      }
      const cur = vid > 0 && gv ? Number(gv.value(vid)) || 0 : 0;
      const maxId = el.variableMaxId || 0;
      let max = maxId > 0 && gv ? Number(gv.value(maxId)) || 0 : el.variableMax || 0;
      if (!(max > 0)) max = 100;
      const rate = Math.max(0, Math.min(1, cur / max));
      const g = el.gauge || {};
      const color1 = typeof g.color1 === 'string' ? g.color1 : '#40c0a0';
      const color2 = typeof g.color2 === 'string' ? g.color2 : '#80e0c0';
      const backColor =
        typeof g.backColor === 'string'
          ? g.backColor
          : typeof ColorManager !== 'undefined'
            ? ColorManager.gaugeBackColor()
            : 'rgba(0, 0, 0, 0.5)';
      const layout = g.visible !== false && typeof g.layout === 'string' ? g.layout : 'bar';
      const opts = {
        slantAngle: g.slantAngle,
        segmentCount: g.segmentCount,
        ringThickness: g.ringThickness,
      };
      const lox = wsbGaugeOff(g.labelOffsetX);
      const loy = wsbGaugeOff(g.labelOffsetY);
      const box = wsbGaugeOff(g.barOffsetX);
      const boy = wsbGaugeOff(g.barOffsetY);
      const bld = wsbGaugeOff(g.barLengthDelta);
      const vox = wsbGaugeOff(g.valueOffsetX);
      const voy = wsbGaugeOff(g.valueOffsetY);
      const vcy = ey + Math.round((h - lineH) / 2);
      if (layout === 'ring') {
        wsbDrawMenuGauge(this.contents, 'ring', ex + box, ey + boy, w, h, rate, color1, color2, backColor, opts);
        if (el.showValue) {
          const d = Math.min(w, h);
          this.contents.fontSize = Math.max(10, Math.round(d * 0.3));
          this.changeTextColor(ColorManager.normalColor());
          this.drawText(String(cur), ex + box + vox, vcy + boy + voy, w, 'center');
          this.resetFontSettings();
        }
        return;
      }
      const label = typeof el.label === 'string' ? el.label : '';
      const labelW = label ? Math.min(Math.floor(w * 0.4), this.textWidth(label) + 6) : 0;
      if (labelW > 0) {
        this.changeTextColor(ColorManager.systemColor());
        this.drawText(label, ex + lox, vcy + loy, labelW, 'left');
        this.resetTextColor();
      }
      const gx = ex + labelW + box;
      const gw = Math.max(4, w - labelW + bld);
      const gh = wsbGaugeBarHeight(g, h);
      const gy = ey + Math.floor((h - gh) / 2) + boy;
      wsbDrawMenuGauge(this.contents, layout, gx, gy, gw, gh, rate, color1, color2, backColor, opts);
      if (el.showValue) {
        this.changeTextColor(ColorManager.normalColor());
        this.drawText(String(cur), gx + vox, vcy + boy + voy, gw - 2, 'right');
      }
      this.resetFontSettings();
    }
    wsbDrawPictureElement(el, ex, ey, w, h, actor) {
      let raw = el.picture;
      if (el.picturePerActor) {
        raw = '';
        const list = el.actorPictures || [];
        const aid = actor && typeof actor.actorId === 'function' ? actor.actorId() : 0;
        for (let i = 0; i < list.length; i++) {
          const it = list[i];
          if (it && it.actorId === aid) {
            raw = it.picture;
            break;
          }
        }
      }
      if (!raw) return;
      const name = this.wsbResolvePictureName(raw, actor);
      const bmp = ImageManager.loadPicture ? ImageManager.loadPicture(name) : null;
      if (!bmp || !bmp.isReady()) return;
      const dw = w || 144;
      const dh = h || 144;
      const prev = this.contents.paintOpacity;
      if (typeof el.opacity === 'number') this.contents.paintOpacity = el.opacity;
      this.contents.blt(bmp, 0, 0, bmp.width, bmp.height, ex, ey, dw, dh);
      this.contents.paintOpacity = prev;
    }
  }
  window.Window_WsbMenuData = Window_WsbMenuData;

  class Scene_WsbMenu extends Scene_MenuBase {
    wsbSceneParam() {
      return { symbol: '', name: '', background: 'snap', windows: [] };
    }
    create() {
      super.create();
      this._wsbWindows = {};
      this._wsbInterpreter = new Game_Interpreter();
      this._wsbResumeWindowId = null;
      this._wsbFrame = 0;
      const param = this.wsbSceneParam();
      const windows = param.windows || [];
      for (let i = 0; i < windows.length; i++) {
        this.wsbCreateWindow(windows[i]);
      }
      this.wsbActivateInitial(param);
      this.wsbStartTransition('in');
    }
    update() {
      super.update();
      this._wsbFrame = (this._wsbFrame || 0) + 1;
      this.wsbUpdateAnims();
      this.wsbUpdateTransition();
      this.wsbUpdateInterpreter();
      if (this._wsbExitPop && (this._wsbFrame || 0) >= this._wsbExitPopUntil) {
        this._wsbExitPop = false;
        this.popScene();
      }
    }
    wsbStartTransition(mode) {
      const param = this.wsbSceneParam();
      const tr = mode === 'in' ? param.transitionIn : param.transitionOut;
      if (!tr || !tr.type) {
        if (mode === 'out') Scene_Base.prototype.popScene.call(this);
        return;
      }
      const w = Graphics.width;
      const h = Graphics.height;
      const col = tr.color || '#000000';
      const wsbFillImg = (bm, sxf, swf) => {
        if (!tr.img) return;
        try {
          const pic = ImageManager.loadPicture(tr.img);
          pic.addLoadListener(() => {
            try {
              const ctx = bm._context || bm.context;
              const src = pic._canvas || pic._image;
              if (!ctx || !src) return;
              const pw = pic.width || src.width || bm.width;
              const ph = pic.height || src.height || bm.height;
              ctx.save();
              ctx.globalCompositeOperation = 'source-in';
              ctx.drawImage(src, (sxf || 0) * pw, 0, (swf == null ? 1 : swf) * pw, ph, 0, 0, bm.width, bm.height);
              ctx.restore();
              if (bm._setDirty) bm._setDirty();
              else if (bm._baseTexture) bm._baseTexture.update();
            } catch (e) {
            }
          });
        } catch (e) {
        }
      };
      let sp;
      if (tr.type === 'iris') {
        const D = Math.ceil(Math.sqrt(w * w + h * h));
        const cbm = new Bitmap(D, D);
        if (cbm.drawCircle) cbm.drawCircle(D / 2, D / 2, D / 2, col);
        else cbm.fillRect(0, 0, D, D, col);
        wsbFillImg(cbm);
        sp = new Sprite(cbm);
      } else if (tr.type === 'curtain') {
        sp = new Sprite();
        const hw = Math.ceil(w / 2);
        const lbm = new Bitmap(hw, h);
        lbm.fillRect(0, 0, hw, h, col);
        const rbm = new Bitmap(hw, h);
        rbm.fillRect(0, 0, hw, h, col);
        wsbFillImg(lbm, 0, 0.5);
        wsbFillImg(rbm, 0.5, 0.5);
        const ls = new Sprite(lbm);
        const rs = new Sprite(rbm);
        rs.x = w - hw;
        sp.addChild(ls);
        sp.addChild(rs);
      } else {
        const bm = new Bitmap(w, h);
        bm.fillRect(0, 0, w, h, col);
        wsbFillImg(bm);
        sp = new Sprite(bm);
      }
      this.addChild(sp);
      this._wsbTransition = {
        sprite: sp,
        type: tr.type,
        dir: tr.dir || 'left',
        dur: tr.dur && tr.dur > 0 ? tr.dur : 20,
        easing: tr.easing || 'easeOut',
        mode: mode,
        start: this._wsbFrame || 0,
      };
      this.wsbApplyTransition(0);
    }
    wsbApplyTransition(p) {
      const t = this._wsbTransition;
      if (!t) return;
      const sp = t.sprite;
      const e = wsbEase(t.easing, p < 0 ? 0 : p > 1 ? 1 : p);
      const cover = t.mode === 'in' ? 1 - e : e;
      const w = Graphics.width;
      const h = Graphics.height;
      sp.x = 0;
      sp.y = 0;
      if (sp.scale) sp.scale.set(1, 1);
      if (sp.transform && sp.transform.skew) {
        sp.transform.skew.x = 0;
        sp.transform.skew.y = 0;
      }
      if (sp.anchor) sp.anchor.set(0, 0);
      sp.rotation = 0;
      const coveringTr = t.mode === 'out';
      const WSB_TR_OPP = { left: 'right', right: 'left', up: 'down', down: 'up' };
      const dirW = coveringTr ? WSB_TR_OPP[t.dir] || 'right' : t.dir;
      if (t.type === 'fade') {
        sp.opacity = Math.round(255 * cover);
      } else if (t.type === 'wipe') {
        sp.opacity = 255;
        if (dirW === 'left' || dirW === 'right') {
          if (sp.scale) sp.scale.set(cover, 1);
          sp.x = dirW === 'right' ? w * (1 - cover) : 0;
        } else {
          if (sp.scale) sp.scale.set(1, cover);
          sp.y = dirW === 'down' ? h * (1 - cover) : 0;
        }
      } else if (t.type === 'shapeSweep') {
        sp.opacity = 255;
        const offSweep = 1 - cover;
        const dirS = t.dir || 'left';
        const sweepSign = dirS === 'right' || dirS === 'down' ? -1 : 1;
        if (sp.scale) sp.scale.set(2, 2);
        if (dirS === 'up' || dirS === 'down') {
          if (sp.transform && sp.transform.skew) sp.transform.skew.y = dirS === 'up' ? -0.25 : 0.25;
          sp.y = -0.5 * h + sweepSign * 2 * h * offSweep;
        } else {
          if (sp.transform && sp.transform.skew) sp.transform.skew.x = dirS === 'left' ? -0.25 : 0.25;
          sp.x = -0.5 * w + sweepSign * 2 * w * offSweep;
        }
      } else if (t.type === 'zoom') {
        if (sp.anchor) sp.anchor.set(0.5, 0.5);
        sp.x = w / 2;
        sp.y = h / 2;
        sp.opacity = Math.round(255 * cover);
        if (sp.scale) {
          const zs = 0.3 + cover * 0.7;
          sp.scale.set(zs, zs);
        }
      } else if (t.type === 'box') {
        if (sp.anchor) sp.anchor.set(0.5, 0.5);
        sp.x = w / 2;
        sp.y = h / 2;
        sp.opacity = 255;
        if (sp.scale) sp.scale.set(cover, cover);
      } else if (t.type === 'diamond') {
        if (sp.anchor) sp.anchor.set(0.5, 0.5);
        sp.x = w / 2;
        sp.y = h / 2;
        sp.opacity = 255;
        sp.rotation = Math.PI / 4;
        if (sp.scale) {
          const ds = cover * 2;
          sp.scale.set(ds, ds);
        }
      } else if (t.type === 'iris') {
        if (sp.anchor) sp.anchor.set(0.5, 0.5);
        sp.x = w / 2;
        sp.y = h / 2;
        sp.opacity = 255;
        if (sp.scale) sp.scale.set(cover, cover);
      } else if (t.type === 'curtain') {
        sp.opacity = 255;
        const hwC = Math.ceil(w / 2);
        const slide = (1 - cover) * hwC;
        if (sp.children && sp.children.length >= 2) {
          sp.children[0].x = -slide;
          sp.children[1].x = w - hwC + slide;
        }
      } else {
        sp.opacity = 255;
        const off = 1 - cover;
        if (dirW === 'left') sp.x = -w * off;
        else if (dirW === 'right') sp.x = w * off;
        else if (dirW === 'up') sp.y = -h * off;
        else sp.y = h * off;
      }
    }
    wsbUpdateTransition() {
      const t = this._wsbTransition;
      if (!t) return;
      const elapsed = (this._wsbFrame || 0) - t.start;
      const p = t.dur > 0 ? elapsed / t.dur : 1;
      this.wsbApplyTransition(p);
      if (p >= 1) {
        const mode = t.mode;
        if (t.sprite && t.sprite.parent) t.sprite.parent.removeChild(t.sprite);
        this._wsbTransition = null;
        if (mode === 'out') Scene_Base.prototype.popScene.call(this);
      }
    }
    popScene() {
      const param = this.wsbSceneParam();
      if (!this._wsbExitPopDone) {
        this._wsbExitPopDone = true;
        const exitEnd = this.wsbStartWindowExits();
        if (exitEnd > (this._wsbFrame || 0)) {
          this._wsbExitPop = true;
          this._wsbExitPopUntil = Math.min(exitEnd, (this._wsbFrame || 0) + 120) + 1;
          return;
        }
      }
      if (param.transitionOut && param.transitionOut.type && !this._wsbTransition && !this._wsbPopping) {
        this._wsbPopping = true;
        this.wsbStartTransition('out');
        return;
      }
      Scene_Base.prototype.popScene.call(this);
    }
    wsbStartWindowExits() {
      const fc = this._wsbFrame || 0;
      let end = 0;
      Object.keys(this._wsbWindows).forEach((k) => {
        const w = this._wsbWindows[k];
        const a = w && w._wsbAnim;
        if (!a || !a.exit) return;
        if (!w._wsbExiting) {
          w._wsbExiting = true;
          w._wsbExitStart = fc;
        }
        const d =
          (a.exit.dur && a.exit.dur > 0 ? a.exit.dur : 18) +
          (a.exit.delay && a.exit.delay > 0 ? a.exit.delay : 0);
        const e = (typeof w._wsbExitStart === 'number' ? w._wsbExitStart : fc) + d;
        if (e > end) end = e;
      });
      if (end > 0) {
        Object.keys(this._wsbWindows).forEach((k) => this._wsbWindows[k].deactivate());
      }
      return end;
    }
    stop() {
      const exitEnd = this.wsbStartWindowExits();
      if (exitEnd > (this._wsbFrame || 0)) {
        this._wsbExitBusyUntil = Math.min(exitEnd, (this._wsbFrame || 0) + 120) + 2;
      }
      super.stop();
    }
    isBusy() {
      if (this._wsbExitBusyUntil && (this._wsbFrame || 0) < this._wsbExitBusyUntil) return true;
      return super.isBusy();
    }
    wsbUpdateAnims() {
      const self = this;
      Object.keys(this._wsbWindows).forEach((k) => {
        wsbApplyWindowAnim(self._wsbWindows[k], self._wsbFrame);
        wsbApplyBackLayer(self._wsbWindows[k], self._wsbFrame);
      });
    }
    wsbUpdateInterpreter() {
      const it = this._wsbInterpreter;
      if (!it) return;
      if (it.isRunning()) {
        it.update();
        if (!it.isRunning()) {
          Object.keys(this._wsbWindows).forEach((k) => {
            const w = this._wsbWindows[k];
            if (w.refresh) w.refresh();
          });
          const target = this._wsbResumeWindowId && this._wsbWindows[this._wsbResumeWindowId];
          if (target) target.activate();
          this._wsbResumeWindowId = null;
        }
      }
    }
    wsbRunCommonEvent(id, resumeWindowId) {
      const ce = $dataCommonEvents && $dataCommonEvents[id];
      if (!ce) return;
      if (wsbCommonEventNeedsMap(ce.list)) {
        $gameTemp.reserveCommonEvent(id);
        SceneManager.goto(Scene_Map);
        return;
      }
      let activeId = null;
      Object.keys(this._wsbWindows).forEach((k) => {
        if (this._wsbWindows[k].active) activeId = k;
        this._wsbWindows[k].deactivate();
      });
      this._wsbResumeWindowId = activeId || resumeWindowId || null;
      this._wsbInterpreter.setup(ce.list);
      if (!this._wsbInterpreter.isRunning()) {
        const back = this._wsbResumeWindowId && this._wsbWindows[this._wsbResumeWindowId];
        if (back) back.activate();
        this._wsbResumeWindowId = null;
      }
    }
    createBackground() {
      const param = this.wsbSceneParam();
      if (param.background === 'color') {
        Scene_Base.prototype.createBackground.call(this);
        const bm = new Bitmap(Graphics.width, Graphics.height);
        const c1 = param.backgroundColor || '#000000';
        if (param.bgColor2) {
          bm.gradientFillRect(0, 0, Graphics.width, Graphics.height, c1, param.bgColor2, param.bgGradDir !== 'horizontal');
        } else {
          bm.fillAll(c1);
        }
        this._backgroundSprite = new Sprite(bm);
        this.addChild(this._backgroundSprite);
      } else if (param.background === 'panorama' && param.panorama) {
        Scene_Base.prototype.createBackground.call(this);
        this._backgroundSprite = new Sprite(ImageManager.loadParallax(param.panorama));
        this.addChild(this._backgroundSprite);
      } else {
        super.createBackground();
      }
      this.wsbCreatePictures();
    }
    wsbCreatePictures() {
      const param = this.wsbSceneParam();
      const pics = param.pictures || [];
      for (let i = 0; i < pics.length; i++) {
        const p = pics[i];
        if (!p || !p.image) continue;
        const sprite = new Sprite(ImageManager.loadPicture(p.image));
        sprite.x = p.x || 0;
        sprite.y = p.y || 0;
        if (typeof p.opacity === 'number') sprite.opacity = p.opacity;
        this.addChild(sprite);
      }
    }
    wsbCreateWindow(winParam) {
      const rect = this.wsbWindowRect(winParam);
      let win = null;
      if (winParam.kind === 'dataScript') {
        win = new Window_WsbMenuData(rect, winParam);
      } else {
        win = new Window_WsbMenuCommand(rect, winParam);
      }
      win.setHandler('ok', this.wsbOnOk.bind(this, winParam));

      if (winParam.cancelable !== false || winParam.cancelEvent) {
        win.setHandler('cancel', this.wsbOnCancel.bind(this, winParam));
      }
      if (winParam.windowskin) {
        win.windowskin = ImageManager.loadSystem(winParam.windowskin);
      }
      if (winParam.backgroundType) {
        win.setBackgroundType(winParam.backgroundType);
      }
      if (winParam.tone && typeof win.setTone === 'function') {
        const wsbTone = [winParam.tone[0] || 0, winParam.tone[1] || 0, winParam.tone[2] || 0];
        win.updateTone = function () {
          const st =
            typeof $gameSystem !== 'undefined' && $gameSystem && $gameSystem.windowTone
              ? $gameSystem.windowTone()
              : [0, 0, 0];
          const cl = (v) => (v < -255 ? -255 : v > 255 ? 255 : v);
          this.setTone(
            cl((st[0] || 0) + wsbTone[0]),
            cl((st[1] || 0) + wsbTone[1]),
            cl((st[2] || 0) + wsbTone[2]),
          );
        };
        win.updateTone();
      }
      wsbSetScroll(win, winParam.scrollX, winParam.scrollY);
      win._wsbAnim = winParam.animation || null;
      win._wsbBaseX = win.x;
      win._wsbBaseY = win.y;
      win._wsbEnterStart = this._wsbFrame || 0;
      win._wsbRestAlpha = typeof win.alpha === 'number' ? win.alpha : 1;
      if (winParam.backLayer) {
        win._wsbBackLayerParam = winParam.backLayer;
        win._wsbBackLayer = wsbCreateBackLayer(win, winParam.backLayer);
        if (typeof win.addChildAt === 'function') win.addChildAt(win._wsbBackLayer, 0);
        wsbApplyBackLayer(win, this._wsbFrame || 0);
      }
      this._wsbWindows[winParam.id] = win;
      this.addWindow(win);
      if (win._wsbAnim) wsbApplyWindowAnim(win, this._wsbFrame || 0);
    }
    wsbWindowRect(winParam) {
      let x = winParam.x || 0;
      let y = winParam.y || 0;
      const base = winParam.relativeToWindowId && this._wsbWindows[winParam.relativeToWindowId];
      if (base) {
        x += base.x;
        y += base.y;
      }
      return new Rectangle(x, y, winParam.width || 240, winParam.height || 120);
    }
    wsbActivateInitial(param) {
      const id = param.initialFocusWindowId;
      let target = id && this._wsbWindows[id];
      if (!target) {
        const list = param.windows || [];
        let first = null;
        for (let i = 0; i < list.length; i++) {
          if (list[i] && list[i].selectable !== false) {
            first = list[i];
            break;
          }
        }
        if (!first) first = list[0];
        target = first && this._wsbWindows[first.id];
      }
      if (target) {
        Object.keys(this._wsbWindows).forEach((k) => this._wsbWindows[k].deactivate());
        target.activate();
        if (target.select && target.index() < 0) target.select(0);
      }
    }
    wsbFocusWindow(id) {
      const target = this._wsbWindows[id];
      if (!target) return;
      Object.keys(this._wsbWindows).forEach((k) => this._wsbWindows[k].deactivate());
      target.activate();
      if (target.select && target.index() < 0) target.select(0);
    }
    wsbBeginActorSelect(token, resumeId) {
      const keys = Object.keys(this._wsbWindows);
      let actorWin = null;
      for (let i = 0; i < keys.length; i++) {
        const w = this._wsbWindows[keys[i]];
        if (!w || w.selectable === false) continue;
        if (typeof w.maxItems !== 'function' || w.maxItems() <= 0) continue;
        const items = w._wsbItems;
        if (items && items.length > 0 && wsbIsActor(items[0])) {
          actorWin = w;
          break;
        }
      }
      if (!actorWin) return false;
      const winId = actorWin._wsbParam ? actorWin._wsbParam.id : keys.find((k) => this._wsbWindows[k] === actorWin);
      this._wsbPendingPersonal = { token: token, resumeId: resumeId, winId: winId };
      keys.forEach((k) => this._wsbWindows[k].deactivate());
      actorWin.activate();
      if (actorWin.select && actorWin.index() < 0) actorWin.select(0);
      return true;
    }
    wsbOnOk(winParam) {
      const win = this._wsbWindows[winParam.id];
      if (this._wsbPendingPersonal && this._wsbPendingPersonal.winId === winParam.id) {
        const pend = this._wsbPendingPersonal;
        this._wsbPendingPersonal = null;
        const sel = win && win.currentWsbItem ? win.currentWsbItem() : null;
        wsbOpenSceneToken(pend.token, sel);
        return;
      }
      const cmd = win && win.currentWsbCommand ? win.currentWsbCommand() : null;
      const item = win && win.currentWsbItem ? win.currentWsbItem() : null;
      const ev = (cmd && cmd.event) || winParam.decisionEvent;
      if (ev) {
        runMenuEvent(this, ev, item, winParam.id);
      }
      if ((!ev || ev.focusWindowId) && win && win.active === false && !ev) {
        win.activate();
      } else if (!ev && win) {
        win.activate();
      }
    }
    wsbOnCancel(winParam) {
      if (this._wsbPendingPersonal && this._wsbPendingPersonal.winId === winParam.id) {
        const resumeId = this._wsbPendingPersonal.resumeId;
        this._wsbPendingPersonal = null;
        this.wsbFocusWindow(resumeId);
        return;
      }
      const ev = winParam.cancelEvent;
      if (ev) {
        runMenuEvent(this, ev, null, winParam.id);
      } else {
        this.popScene();
      }
    }
  }
  window.Scene_WsbMenu = Scene_WsbMenu;

  WsbMenu.registerScene = function (param) {
    const Klass = class extends Scene_WsbMenu {};
    Klass.prototype.wsbSceneParam = function () {
      return param;
    };
    WsbMenu._scenes[param.symbol] = Klass;
    WsbMenu._sceneList.push(param);
  };
  WsbMenu.call = function (symbol) {
    const p = WsbMenu._sceneList.find((s) => s && s.symbol === symbol);
    if (p && p.menuCommand) {
      if (p.menuCommand.directScript) {
        try {
          new Function(p.menuCommand.directScript).call(SceneManager._scene);
        } catch (e) {
          console.error('[WindowsetMenu] scene item script error', e);
        }
        return;
      }
      if (p.menuCommand.directCommonEventId > 0) {
        $gameTemp.reserveCommonEvent(p.menuCommand.directCommonEventId);
        SceneManager.goto(Scene_Map);
        return;
      }
    }
    const Klass = WsbMenu._scenes[symbol];
    if (Klass) {
      SceneManager.push(Klass);
    } else {
      console.warn('[WindowsetMenu] unknown scene symbol:', symbol);
    }
  };

  WsbMenu._sceneList = [];
  readScenes().forEach((p) => {
    if (p && typeof p.symbol === 'string' && p.symbol) WsbMenu.registerScene(p);
  });

  PluginManager.registerCommand(PLUGIN_NAME, 'callScene', (args) => {
    if (args && args.symbol) WsbMenu.call(args.symbol);
  });

  WsbMenu._replaceScene = function () {
    return WsbMenu._sceneList.find((p) => p.menuCommand && p.menuCommand.replaceMap) || null;
  };

  const _wsp_Window_MenuCommand_addOriginalCommands =
    Window_MenuCommand.prototype.addOriginalCommands;
  Window_MenuCommand.prototype.addOriginalCommands = function () {
    _wsp_Window_MenuCommand_addOriginalCommands.call(this);
    WsbMenu._sceneList.forEach((p) => {
      if (p.menuCommand && !p.menuCommand.replaceMap) {
        this.addCommand(p.menuCommand.label || p.name, 'wsbMenu_' + p.symbol, true);
      }
    });
  };

  const _wsp_Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
  Scene_Menu.prototype.createCommandWindow = function () {
    _wsp_Scene_Menu_createCommandWindow.call(this);
    WsbMenu._sceneList.forEach((p) => {
      if (p.menuCommand && !p.menuCommand.replaceMap) {
        this._commandWindow.setHandler('wsbMenu_' + p.symbol, () => {
          if (p.menuCommand && p.menuCommand.directScript) {
            try {
              new Function(p.menuCommand.directScript).call(this);
            } catch (e) {
              console.error('[WindowsetMenu] menu item script error', e);
            }
            this._commandWindow.activate();
            return;
          }
          if (p.menuCommand && p.menuCommand.directCommonEventId > 0) {
            $gameTemp.reserveCommonEvent(p.menuCommand.directCommonEventId);
            SceneManager.goto(Scene_Map);
            return;
          }
          WsbMenu.call(p.symbol);
        });
      }
    });
  };

  function readMainMenuOrder() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_mainMenu ? params.ws_mainMenu : '[]';
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('[WindowsetMenu] ws_mainMenu parse error', e);
      return [];
    }
  }
  WsbMenu._mainOrder = readMainMenuOrder();

  WsbMenu._applyMainOrder = function (list) {
    const order = WsbMenu._mainOrder;
    if (!order || order.length === 0) return list;
    const index = {};
    const hidden = {};
    order.forEach((o, i) => {
      if (o && typeof o.symbol === 'string') {
        index[o.symbol] = i;
        if (o.visible === false) hidden[o.symbol] = true;
      }
    });
    const kept = list.filter((cmd) => !hidden[cmd.symbol]);
    const matched = kept
      .filter((cmd) => index[cmd.symbol] !== undefined)
      .sort((a, b) => index[a.symbol] - index[b.symbol]);
    const unmatched = kept.filter((cmd) => index[cmd.symbol] === undefined);
    return matched.concat(unmatched);
  };

  const _wsp_Window_MenuCommand_makeCommandList = Window_MenuCommand.prototype.makeCommandList;
  Window_MenuCommand.prototype.makeCommandList = function () {
    _wsp_Window_MenuCommand_makeCommandList.call(this);
    this._list = WsbMenu._applyMainOrder(this._list);
  };

  function readMenuColumns() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const n = parseInt((params && params.ws_menuColumns) || '1', 10);
    return isFinite(n) && n >= 2 ? n : 1;
  }
  WsbMenu._menuColumns = readMenuColumns();
  if (WsbMenu._menuColumns >= 2) {
    Window_MenuCommand.prototype.maxCols = function () {
      return WsbMenu._menuColumns;
    };
  }

  function readBattleMaxMembers() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const n = parseInt((params && params.ws_battleMaxMembers) || '0', 10);
    return isFinite(n) && n >= 1 ? n : 0;
  }
  WsbMenu._battleMaxMembers = readBattleMaxMembers();
  if (WsbMenu._battleMaxMembers >= 1) {
    if (!WSB_YIELD_PARTY && typeof Game_Party !== 'undefined') {
      Game_Party.prototype.maxBattleMembers = function () {
        return WsbMenu._battleMaxMembers;
      };
    }
    if (!WSB_YIELD_BATTLE && typeof Window_BattleStatus !== 'undefined') {
      Window_BattleStatus.prototype.maxCols = function () {
        return WsbMenu._battleMaxMembers;
      };
    }
  }

  function readMenuStatusRows() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = String((params && params.ws_menuStatusRows) || '0');
    if (raw === 'p') return 'p';
    const n = parseInt(raw, 10);
    return isFinite(n) && n >= 1 ? n : 0;
  }
  function readMenuStatusCols() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const n = parseInt((params && params.ws_menuStatusCols) || '1', 10);
    return isFinite(n) && n >= 2 ? Math.min(4, n) : 1;
  }
  WsbMenu._menuStatusRows = readMenuStatusRows();
  WsbMenu._menuStatusCols = readMenuStatusCols();
  if (
    (WsbMenu._menuStatusRows !== 0 || WsbMenu._menuStatusCols >= 2) &&
    !WSB_YIELD_MAINMENU &&
    typeof Window_MenuStatus !== 'undefined'
  ) {
    Window_MenuStatus.prototype.numVisibleRows = function () {
      const r = WsbMenu._menuStatusRows;
      const cols = Math.max(1, WsbMenu._menuStatusCols);
      if (r === 'p') {
        const size = typeof $gameParty !== 'undefined' && $gameParty ? $gameParty.size() : 4;
        return Math.max(1, Math.ceil(Math.max(1, size) / cols));
      }
      if (typeof r === 'number' && r >= 1) return r;
      return Math.max(1, Math.ceil(4 / cols));
    };
    if (WsbMenu._menuStatusCols >= 2) {
      Window_MenuStatus.prototype.maxCols = function () {
        return WsbMenu._menuStatusCols;
      };

      Window_MenuStatus.prototype._wsbGridBottomH = function () {
        const gauges = $dataSystem.optDisplayTp ? 3 : 2;
        return this.lineHeight() * 2 + this.gaugeLineHeight() * gauges;
      };
      Window_MenuStatus.prototype.drawItemImage = function (index) {
        const actor = this.actor(index);
        const rect = this.itemRect(index);
        const nameH = this.lineHeight();
        const fw = Math.min(ImageManager.faceWidth, Math.max(0, rect.width - 8));
        const fh = Math.max(
          0,
          Math.min(ImageManager.faceHeight, rect.height - nameH - this._wsbGridBottomH() - 4),
        );
        const fx = rect.x + Math.floor((rect.width - fw) / 2);
        this.changePaintOpacity(actor.isBattleMember());
        this.drawActorFace(actor, fx, rect.y + nameH + 2, fw, fh);
        this.changePaintOpacity(true);
      };
      Window_MenuStatus.prototype.drawItemStatus = function (index) {
        const actor = this.actor(index);
        const rect = this.itemRect(index);
        const line = this.lineHeight();
        const x = rect.x + 4;
        const w = Math.max(0, rect.width - 8);
        this.changeTextColor(ColorManager.hpColor(actor));
        this.drawText(actor.name(), x, rect.y, w, 'center');
        this.resetTextColor();
        let y = rect.y + rect.height - this._wsbGridBottomH();
        this.changeTextColor(ColorManager.systemColor());
        this.drawText(TextManager.levelA, x, y, w);
        this.resetTextColor();
        this.drawText(String(actor.level), x, y, w, 'right');
        y += line;
        this.drawText(actor.currentClass().name, x, y, w);
        y += line;
        this._wsbGridGaugeW = Math.max(48, w);
        this.placeBasicGauges(actor, x, y);
      };
      let _wsp_CellGauge = null;
      Window_MenuStatus.prototype.placeGauge = function (actor, type, x, y) {
        if (_wsp_CellGauge === null && typeof Sprite_Gauge !== 'undefined') {
          _wsp_CellGauge = class extends Sprite_Gauge {
            bitmapWidth() {
              return Math.max(48, WsbMenu._menuStatusGaugeW || 128);
            }
          };
        }
        if (_wsp_CellGauge === null) return;
        WsbMenu._menuStatusGaugeW = Math.min(128, this._wsbGridGaugeW || 128);
        const key = 'actor%1-gauge-%2'.format(actor.actorId(), type);
        const sprite = this.createInnerSprite(key, _wsp_CellGauge);
        sprite.setup(actor, type);
        sprite.move(x, y);
        sprite.show();
      };
    }
  }

  function readTitleScreen() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_title ? String(params.ws_title) : '';
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
      const hasImg = !!(parsed.bg && typeof parsed.bg.img === 'string' && parsed.bg.img !== '');
      const hasMap = !!(
        parsed.bg &&
        parsed.bg.map &&
        typeof parsed.bg.map.id === 'number' &&
        parsed.bg.map.id >= 1
      );
      const pics = Array.isArray(parsed.pics)
        ? parsed.pics.filter(function (p) {
            return !!(p && typeof p.img === 'string' && p.img !== '');
          })
        : [];
      if (!hasImg && !hasMap && pics.length === 0) return null;
      return { bg: hasImg || hasMap ? parsed.bg : null, pics: pics };
    } catch (e) {
      console.error('[WindowsetMenu] ws_title parse error', e);
      return null;
    }
  }
  WsbMenu._title = readTitleScreen();

  function readTitleText() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_title ? String(params.ws_title) : '';
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
      const t = parsed.txt;
      if (!t || typeof t !== 'object' || Array.isArray(t)) return null;
      const num = (v) => (typeof v === 'number' && isFinite(v) ? v : null);
      const str = (v) => (typeof v === 'string' && v ? v : null);
      const out = {
        x: num(t.x),
        y: num(t.y),
        size: num(t.size),
        font: str(t.font),
        col: str(t.col),
        oc: str(t.oc),
        ow: num(t.ow),
      };
      for (const k in out) {
        if (out[k] !== null) return out;
      }
      return null;
    } catch (e) {
      console.error('[WindowsetMenu] ws_title txt parse error', e);
      return null;
    }
  }
  WsbMenu._titleText = readTitleText();

  if (WsbMenu._titleText && typeof Scene_Title !== 'undefined') {
    const TT = WsbMenu._titleText;
    const WSB_TITLE_FONT = 'wsb-title-font';
    const TITLE_LINE_H = 48;
    const TITLE_SIDE = 20;
    if (TT.font && typeof FontManager !== 'undefined' && typeof FontManager.load === 'function') {
      try {
        FontManager.load(WSB_TITLE_FONT, TT.font);
      } catch (e) {}
    }
    const wsbTitleFontReady = () => {
      if (!TT.font) return true;
      try {
        const size = TT.size && TT.size > 0 ? TT.size : 72;
        return document.fonts.check(size + 'px "' + WSB_TITLE_FONT + '"');
      } catch (e) {
        return true;
      }
    };
    const wsbTitleFontFace = () => {
      if (TT.font && wsbTitleFontReady()) return WSB_TITLE_FONT;
      try {
        if ($gameSystem && typeof $gameSystem.mainFontFace === 'function') {
          return $gameSystem.mainFontFace();
        }
      } catch (e) {}
      return 'sans-serif';
    };

    const _wsp_Scene_Title_drawGameTitle = Scene_Title.prototype.drawGameTitle;
    Scene_Title.prototype.drawGameTitle = function () {
      const sprite = this._gameTitleSprite;
      const bitmap = sprite ? sprite.bitmap : null;
      if (!bitmap || typeof bitmap.drawText !== 'function') {
        _wsp_Scene_Title_drawGameTitle.call(this);
        return;
      }
      const mw = Math.max(1, Graphics.width - TITLE_SIDE * 2);
      const cx = TT.x === null ? Graphics.width / 2 : TT.x;
      const cy = TT.y === null ? Graphics.height / 4 + TITLE_LINE_H / 2 : TT.y;
      bitmap.clear();
      bitmap.fontFace = wsbTitleFontFace();
      bitmap.fontSize = TT.size && TT.size > 0 ? TT.size : 72;
      bitmap.textColor = TT.col || '#ffffff';
      bitmap.outlineColor = TT.oc || '#000000';
      bitmap.outlineWidth = TT.ow === null ? 8 : TT.ow;
      bitmap.drawText(
        $dataSystem.gameTitle,
        cx - mw / 2,
        cy - TITLE_LINE_H / 2,
        mw,
        TITLE_LINE_H,
        'center',
      );
      this._wsbTitleTextRetry = wsbTitleFontReady() ? 0 : 600;
    };

    const _wsp_Scene_Title_update_text = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function () {
      _wsp_Scene_Title_update_text.call(this);
      if (this._wsbTitleTextRetry > 0) {
        this._wsbTitleTextRetry--;
        if (wsbTitleFontReady()) this.drawGameTitle();
      }
    };
  }

  WsbMenu._fitTitleSprite = function (sprite, fit) {
    const bmp = sprite.bitmap;
    if (!bmp || !bmp.width || !bmp.height) return;
    const gw = Graphics.width;
    const gh = Graphics.height;
    let sx = 1;
    let sy = 1;
    if (fit === 'stretch') {
      sx = gw / bmp.width;
      sy = gh / bmp.height;
    } else if (fit === 'contain') {
      sx = sy = Math.min(gw / bmp.width, gh / bmp.height);
    } else if (fit === 'center') {
      sx = sy = 1;
    } else {

      sx = sy = Math.max(gw / bmp.width, gh / bmp.height);
    }
    sprite.scale.x = sx;
    sprite.scale.y = sy;
    sprite.x = Math.floor((gw - bmp.width * sx) / 2);
    sprite.y = Math.floor((gh - bmp.height * sy) / 2);
  };
  WsbMenu._makeTitlePic = function (p) {
    const s = new Sprite(ImageManager.loadPicture(p.img));
    s.x = Math.round(p.x || 0);
    s.y = Math.round(p.y || 0);
    s.opacity = typeof p.op === 'number' ? Math.max(0, Math.min(255, p.op)) : 255;
    const sc = typeof p.sc === 'number' && p.sc > 0 ? p.sc / 100 : 1;
    s.scale.x = sc;
    s.scale.y = sc;
    s._wsbBaseX = s.x;
    s._wsbBaseY = s.y;
    s._wsbBaseScale = sc;
    s._wsbBaseOpacity = s.opacity;
    if (p.an) s._wsbAn = p.an;
    return s;
  };
  function _wsp_titleEase(easing, t) {
    const x = t < 0 ? 0 : t > 1 ? 1 : t;
    if (easing === 'linear') return x;
    if (easing === 'easeOutBack') {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      const u = x - 1;
      return 1 + c3 * u * u * u + c1 * u * u;
    }
    const u = 1 - x;
    return 1 - u * u * u;
  }
  function _wsp_titleMoveEnd(m) {
    return (m && m.delay > 0 ? m.delay : 0) + (m && m.dur > 0 ? m.dur : 18);
  }

  WsbMenu._applyTitleSpriteAnim = function (sprite, frame, exitStart) {
    const an = sprite._wsbAn;
    if (!an) return;
    let ox = 0;
    let oy = 0;
    let sc = 1;
    let al = 1;
    let skew = 0;
    let enterDone = true;
    const distOf = function (dir) {
      return dir === 'left' || dir === 'right' ? Graphics.width : Graphics.height;
    };
    if (exitStart !== null && an.x) {
      const e = an.x;
      const dur = e.dur > 0 ? e.dur : 18;
      const delay = e.delay > 0 ? e.delay : 0;
      const tt = (frame - exitStart - delay) / dur;
      if (tt >= 0) {
        const p = _wsp_titleEase(e.easing || 'easeOut', tt);
        const dir = e.dir || 'up';
        if (e.type === 'slide' || e.type === 'skewSlide') {

          if (typeof e.ox === 'number' || typeof e.oy === 'number') {
            ox = p * (e.ox || 0);
            oy = p * (e.oy || 0);
          } else {
            const d = distOf(dir);
            if (dir === 'left') ox = -p * d;
            else if (dir === 'right') ox = p * d;
            else if (dir === 'up') oy = -p * d;
            else oy = p * d;
          }
          if (e.type === 'skewSlide') skew = p * 0.35;
          if (typeof e.sc === 'number') sc = 1 - (1 - e.sc) * p;
          al = e.al === 0 ? 1 : 1 - p;
        } else if (e.type === 'scale') {
          sc = 1 - 0.8 * p;
          al = 1 - p;
        } else {
          al = e.al === 0 ? 1 : 1 - p;
        }
      }
    } else if (an.e) {
      const e = an.e;
      const dur = e.dur > 0 ? e.dur : 18;
      const delay = e.delay > 0 ? e.delay : 0;
      const tt = (frame - delay) / dur;
      enterDone = tt >= 1;
      const p = _wsp_titleEase(e.easing || 'easeOut', tt);
      if (tt < 0) {
        al = e.al === 0 ? 1 : 0;
      } else if (tt < 1) {
        const inv = 1 - p;
        const dir = e.dir || 'up';
        if (e.type === 'slide' || e.type === 'skewSlide') {
          if (typeof e.ox === 'number' || typeof e.oy === 'number') {
            ox = inv * (e.ox || 0);
            oy = inv * (e.oy || 0);
          } else {
            const d = distOf(dir);
            if (dir === 'left') ox = -inv * d;
            else if (dir === 'right') ox = inv * d;
            else if (dir === 'up') oy = -inv * d;
            else oy = inv * d;
          }
          if (e.type === 'skewSlide') skew = inv * 0.35;
          if (typeof e.sc === 'number') sc = e.sc + (1 - e.sc) * p;
          al = e.al === 0 ? 1 : p;
        } else if (e.type === 'scale') {
          sc = 0.2 + 0.8 * p;
          al = p;
        } else if (e.type === 'fade') {
          al = p;
        }
      }
    }
    if (an.i && enterDone && exitStart === null) {
      const i = an.i;
      const period = i.period > 0 ? i.period : 90;
      const ph = Math.sin((2 * Math.PI * frame) / period);
      if (i.type === 'bob') {
        oy += ph * (i.amp > 0 ? i.amp : 4);
      } else if (i.type === 'pulse') {
        sc *= 1 + ph * (i.amp > 0 ? i.amp : 0.04);
      } else if (i.type === 'pulseHold') {
        const amp = i.amp > 0 ? i.amp : 0.04;
        const phase = (((frame % period) + period) % period) / period;
        if (phase < 0.5) sc *= 1 + Math.sin(Math.PI * (phase / 0.5)) * amp;
      }
    }
    sprite.x = sprite._wsbBaseX + ox;
    sprite.y = sprite._wsbBaseY + oy;
    const base = sprite._wsbBaseScale || 1;
    sprite.scale.x = base * sc;
    sprite.scale.y = base * sc;
    const a = al < 0 ? 0 : al > 1 ? 1 : al;
    sprite.opacity = Math.round((sprite._wsbBaseOpacity !== undefined ? sprite._wsbBaseOpacity : 255) * a);
    if (sprite.skew) sprite.skew.x = skew;
  };
  if (WsbMenu._title && typeof Scene_Title !== 'undefined') {
    const _wsp_titleHasMap = !!(WsbMenu._title.bg && WsbMenu._title.bg.map);
    const _wsp_titleAnims = (function () {
      const t = WsbMenu._title;
      const list = [];
      if (t.bg && t.bg.an) list.push(t.bg.an);
      for (let i = 0; i < t.pics.length; i++) if (t.pics[i].an) list.push(t.pics[i].an);
      return list;
    })();
    const _wsp_titleHasAnim = _wsp_titleAnims.length > 0;
    const _wsp_titleExitEnd = (function () {
      let max = 0;
      for (let i = 0; i < _wsp_titleAnims.length; i++) {
        if (_wsp_titleAnims[i].x) max = Math.max(max, _wsp_titleMoveEnd(_wsp_titleAnims[i].x));
      }
      return max;
    })();
    const _wsp_addAnimSprite = function (scene, sprite) {
      if (!sprite._wsbAn) return;
      if (!scene._wsbAnimSprites) scene._wsbAnimSprites = [];
      scene._wsbAnimSprites.push(sprite);
      WsbMenu._applyTitleSpriteAnim(sprite, 0, null);
    };
    const _wsp_Scene_Title_createBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function () {
      _wsp_Scene_Title_createBackground.call(this);
      const t = WsbMenu._title;
      if (t.bg) {
        if (t.bg.replace) {
          if (this._backSprite1) this._backSprite1.visible = false;
          if (this._backSprite2) this._backSprite2.visible = false;
        }
        if (t.bg.map) {

          this._wsbTitleMapIndex = this.children.length;
          this._wsbTitleMapPending = true;
          if (typeof DataManager !== 'undefined') DataManager.loadMapData(t.bg.map.id);
        } else if (t.bg.img) {
          const fit = t.bg.fit;
          const sprite = new Sprite(ImageManager.loadPicture(t.bg.img));
          sprite._wsbBaseOpacity = 255;
          sprite._wsbBaseScale = 1;
          if (t.bg.an) sprite._wsbAn = t.bg.an;
          sprite.bitmap.addLoadListener(function () {
            WsbMenu._fitTitleSprite(sprite, fit);
            sprite._wsbBaseX = sprite.x;
            sprite._wsbBaseY = sprite.y;
            sprite._wsbBaseScale = sprite.scale.x;
          });
          this._wsbTitleBg = sprite;
          this.addChild(sprite);
          _wsp_addAnimSprite(this, sprite);
        }
      }
      for (let i = 0; i < t.pics.length; i++) {
        if (!t.pics[i].front) {
          const s = WsbMenu._makeTitlePic(t.pics[i]);
          this.addChild(s);
          _wsp_addAnimSprite(this, s);
        }
      }
    };
    const _wsp_Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function () {
      _wsp_Scene_Title_create.call(this);
      const t = WsbMenu._title;
      for (let i = 0; i < t.pics.length; i++) {
        if (t.pics[i].front) {
          const s = WsbMenu._makeTitlePic(t.pics[i]);
          this.addChild(s);
          _wsp_addAnimSprite(this, s);
        }
      }
    };
    if (_wsp_titleHasMap) {
      let _wsp_TitleMapSpriteset = null;
      const _wsp_titleMapSpritesetClass = function () {
        if (_wsp_TitleMapSpriteset) return _wsp_TitleMapSpriteset;
        if (typeof Spriteset_Map === 'undefined') return null;
        _wsp_TitleMapSpriteset = class extends Spriteset_Map {

          createCharacters() {
            this._characterSprites = [];
            const m = WsbMenu._title.bg.map;
            if (m.ev !== false) {
              const events = $gameMap.events();
              for (let i = 0; i < events.length; i++) {
                this._characterSprites.push(new Sprite_Character(events[i]));
              }
            }
            for (let i = 0; i < this._characterSprites.length; i++) {
              this._tilemap.addChild(this._characterSprites[i]);
            }
          }

          update() {
            if ($gameMap && $gameMap.mapId() === WsbMenu._title.bg.map.id) {
              super.update();
            }
          }
        };
        WsbMenu._TitleMapSpriteset = _wsp_TitleMapSpriteset;
        return _wsp_TitleMapSpriteset;
      };
      WsbMenu._setupTitleMap = function (scene) {
        const m = WsbMenu._title.bg.map;
        $gameMap.setup(m.id);

        if (!m.run) {
          const events = $gameMap.events();
          for (let i = 0; i < events.length; i++) {
            events[i].updateParallel = function () {};
          }
          $gameMap._commonEvents = [];
        }
        const stx = $gameMap.screenTileX();
        const sty = $gameMap.screenTileY();
        const cx = typeof m.cx === 'number' ? m.cx : $gameMap.width() / 2;
        const cy = typeof m.cy === 'number' ? m.cy : $gameMap.height() / 2;
        $gameMap.setDisplayPos(cx - stx / 2, cy - sty / 2);
        const Klass = _wsp_titleMapSpritesetClass();
        if (Klass === null) {
          scene._wsbTitleMapPending = false;
          return;
        }
        const spriteset = new Klass();
        const idx = Math.min(scene._wsbTitleMapIndex || 0, scene.children.length);
        scene.addChildAt(spriteset, idx);
        scene._wsbTitleMapSpriteset = spriteset;
        scene._wsbTitleMapPending = false;
      };
    }
    if (_wsp_titleHasMap || _wsp_titleHasAnim) {
      const _wsp_Scene_Title_update = Scene_Title.prototype.update;
      Scene_Title.prototype.update = function () {
        _wsp_Scene_Title_update.call(this);
        this._wsbTitleFrame = (this._wsbTitleFrame || 0) + 1;
        if (
          this._wsbTitleMapPending &&
          typeof DataManager !== 'undefined' &&
          DataManager.isMapLoaded()
        ) {
          WsbMenu._setupTitleMap(this);
        }

        if (this._wsbTitleMapSpriteset && $gameMap && $gameMap.mapId() === WsbMenu._title.bg.map.id) {
          const m = WsbMenu._title.bg.map;

          if (m.run && typeof $gameMap.updateInterpreter === 'function') $gameMap.updateInterpreter();
          if (m.sx) {
            if (m.sx > 0) $gameMap.scrollRight(m.sx / $gameMap.tileWidth());
            else $gameMap.scrollLeft(-m.sx / $gameMap.tileWidth());
          }
          if (m.sy) {
            if (m.sy > 0) $gameMap.scrollDown(m.sy / $gameMap.tileHeight());
            else $gameMap.scrollUp(-m.sy / $gameMap.tileHeight());
          }

          $gameMap.updateScroll();
          const _wsbEvs = $gameMap.events();
          for (let _wsbEi = 0; _wsbEi < _wsbEvs.length; _wsbEi++) _wsbEvs[_wsbEi].update();
          if (m.run && $gameMap._commonEvents) {
            for (let _wsbCi = 0; _wsbCi < $gameMap._commonEvents.length; _wsbCi++) {
              $gameMap._commonEvents[_wsbCi].update();
            }
          }
          if (typeof $gameMap.updateParallax === 'function') $gameMap.updateParallax();
          this._wsbTitleMapSpriteset.update();
        }
        if (this._wsbAnimSprites) {
          const ex = this._wsbExitStart !== undefined ? this._wsbExitStart : null;
          for (let i = 0; i < this._wsbAnimSprites.length; i++) {
            WsbMenu._applyTitleSpriteAnim(this._wsbAnimSprites[i], this._wsbTitleFrame, ex);
          }
        }
      };
    }
    if (_wsp_titleExitEnd > 0) {
      const _wsp_Scene_Title_stop = Scene_Title.prototype.stop;
      Scene_Title.prototype.stop = function () {
        if (this._wsbExitStart === undefined) this._wsbExitStart = this._wsbTitleFrame || 0;
        _wsp_Scene_Title_stop.call(this);
      };
      const _wsp_Scene_Title_isBusy = Scene_Title.prototype.isBusy;
      Scene_Title.prototype.isBusy = function () {
        if (
          this._wsbExitStart !== undefined &&
          (this._wsbTitleFrame || 0) < this._wsbExitStart + _wsp_titleExitEnd
        ) {
          return true;
        }
        return _wsp_Scene_Title_isBusy.call(this);
      };
    }
  }

  function readScmWindows() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_scmWindows ? params.ws_scmWindows : '';
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
      return Object.keys(parsed).length > 0 ? parsed : null;
    } catch (e) {
      console.error('[WindowsetMenu] ws_scmWindows parse error', e);
      return null;
    }
  }
  WsbMenu._scmWindows = readScmWindows();

  function wsbScmScanDecor(table) {
    const out = { frame: false, exit: false };
    if (!table) return out;
    const sceneIds = Object.keys(table);
    for (let i = 0; i < sceneIds.length; i++) {
      const wins = table[sceneIds[i]];
      if (!wins) continue;
      const winIds = Object.keys(wins);
      for (let j = 0; j < winIds.length; j++) {
        const cfg = wins[winIds[j]];
        if (!cfg) continue;
        if (cfg.bl || cfg.an) out.frame = true;
        if (cfg.an && cfg.an.exit) out.exit = true;
      }
    }
    return out;
  }
  WsbMenu._scmDecor = wsbScmScanDecor(WsbMenu._scmWindows);

  function wsbScmStartWindowExits(scene) {
    const map = scene && scene._customWindowMap;
    if (!map || typeof map.forEach !== 'function') return 0;
    const fc = scene._wsbFrame || 0;
    let end = 0;
    map.forEach(function (win) {
      const a = win && win._wsbAnim;
      if (!a || !a.exit) return;
      if (!win._wsbExiting) {
        win._wsbExiting = true;
        win._wsbExitStart = fc;
      }
      const d =
        (a.exit.dur && a.exit.dur > 0 ? a.exit.dur : 18) +
        (a.exit.delay && a.exit.delay > 0 ? a.exit.delay : 0);
      const e = (typeof win._wsbExitStart === 'number' ? win._wsbExitStart : fc) + d;
      if (e > end) end = e;
    });
    if (end > 0) {
      map.forEach(function (win) {
        if (win && typeof win.deactivate === 'function') win.deactivate();
      });
    }
    return end;
  }

  WsbMenu._applyScmOverrides = function (scene) {
    const table = WsbMenu._scmWindows;
    if (!table || !scene) return;
    const data = scene._customData;
    const sceneId = data && data.Id ? String(data.Id) : '';
    const entry = sceneId ? table[sceneId] : null;
    if (!entry) return;
    const map = scene._customWindowMap;
    if (!map || typeof map.forEach !== 'function') return;
    map.forEach(function (win, id) {
      const cfg = entry[String(id)];
      if (!win || !cfg) return;
      if (cfg.skin) {
        win.windowskin = ImageManager.loadSystem(cfg.skin);
      }

      wsbSetScroll(win, cfg.sx, cfg.sy);
      const x = typeof cfg.x === 'number' ? cfg.x : win.x;
      const y = typeof cfg.y === 'number' ? cfg.y : win.y;

      const w = typeof cfg.w === 'number' ? cfg.w : win.width;
      const h = typeof cfg.h === 'number' ? cfg.h : win.height;
      if (!(x === win.x && y === win.y && w === win.width && h === win.height)) {
        win.move(x, y, w, h);
        if (win.createContents) win.createContents();
        if (win.refresh) win.refresh();
      }

      if (typeof cfg.bg === 'number' && win.setBackgroundType) win.setBackgroundType(cfg.bg);
      if (typeof cfg.op === 'number') win.opacity = cfg.op;

      if (cfg.og) {
        win._wsbOg = cfg.og;
        if (typeof win._refreshBack === 'function') win._refreshBack();
      }
      if (cfg.bl && !win._wsbBackLayer) {
        win._wsbBackLayerParam = cfg.bl;
        win._wsbBackLayer = wsbCreateBackLayer(win, cfg.bl);
        if (typeof win.addChildAt === 'function') win.addChildAt(win._wsbBackLayer, 0);
        wsbApplyBackLayer(win, (scene && scene._wsbFrame) || 0);
      }

      if (cfg.an) {
        win._wsbAnim = cfg.an;
        win._wsbBaseX = win.x;
        win._wsbBaseY = win.y;
        win._wsbEnterStart = (scene && scene._wsbFrame) || 0;
        win._wsbRestAlpha = typeof win.alpha === 'number' ? win.alpha : 1;
        wsbApplyWindowAnim(win, (scene && scene._wsbFrame) || 0);
      }
    });
  };

  if (WsbMenu._scmWindows) {
    const installScmBridge = function () {
      if (WsbMenu._scmBridgeInstalled) return;
      if (typeof Scene_CustomMenu === 'undefined' || !Scene_CustomMenu) return;
      const proto = Scene_CustomMenu.prototype;
      if (!proto || typeof proto.createCustomMenuWindowList !== 'function') return;
      WsbMenu._scmBridgeInstalled = true;
      const _wsp_scmCreateList = proto.createCustomMenuWindowList;
      proto.createCustomMenuWindowList = function () {
        _wsp_scmCreateList.apply(this, arguments);
        try {
          WsbMenu._applyScmOverrides(this);
        } catch (e) {
          console.error('[WindowsetMenu] SceneCustomMenu bridge failed', e);
        }
      };

      if (WsbMenu._scmDecor.frame && typeof proto.update === 'function') {
        const _wsp_scmUpdate = proto.update;
        proto.update = function () {
          _wsp_scmUpdate.apply(this, arguments);
          try {
            const map = this._customWindowMap;
            if (!map || typeof map.forEach !== 'function') return;
            this._wsbFrame = (this._wsbFrame || 0) + 1;
            const fc = this._wsbFrame;
            map.forEach(function (win) {
              if (!win) return;
              if (win._wsbAnim) wsbApplyWindowAnim(win, fc);
              if (win._wsbBackLayer) wsbApplyBackLayer(win, fc);
            });
          } catch (e) {

          }
        };
      }

      if (
        WsbMenu._scmDecor.exit &&
        typeof proto.stop === 'function' &&
        typeof proto.isBusy === 'function'
      ) {
        const _wsp_scmStop = proto.stop;
        proto.stop = function () {
          try {
            const end = wsbScmStartWindowExits(this);
            if (end > (this._wsbFrame || 0)) {
              this._wsbExitBusyUntil = Math.min(end, (this._wsbFrame || 0) + 120) + 2;
            }
          } catch (e) {

          }
          _wsp_scmStop.apply(this, arguments);
        };
        const _wsp_scmIsBusy = proto.isBusy;
        proto.isBusy = function () {
          if (this._wsbExitBusyUntil && (this._wsbFrame || 0) < this._wsbExitBusyUntil) {
            return true;
          }
          return _wsp_scmIsBusy.apply(this, arguments);
        };
      }
    };
    installScmBridge();
    if (!WsbMenu._scmBridgeInstalled) {

      const _wsp_Scene_Boot_start = Scene_Boot.prototype.start;
      Scene_Boot.prototype.start = function () {
        installScmBridge();
        _wsp_Scene_Boot_start.apply(this, arguments);
      };
    }
  }

  function readCmdOrder(key) {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params[key] ? params[key] : '[]';
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('[WindowsetMenu] ' + key + ' parse error', e);
      return [];
    }
  }
  WsbMenu._battlePartyOrder = readCmdOrder('ws_battleParty');
  WsbMenu._battleActorOrder = readCmdOrder('ws_battleActor');
  WsbMenu._titleOrder = readCmdOrder('ws_titleCommands');

  WsbMenu._applyCmdOrder = function (list, order) {
    if (!order || order.length === 0) return list;
    const index = {};
    const hidden = {};
    order.forEach((o, i) => {
      if (o && typeof o.symbol === 'string') {
        index[o.symbol] = i;
        if (o.visible === false) hidden[o.symbol] = true;
      }
    });
    const kept = list.filter((cmd) => !hidden[cmd.symbol]);
    const matched = kept
      .filter((cmd) => index[cmd.symbol] !== undefined)
      .sort((a, b) => index[a.symbol] - index[b.symbol]);
    const unmatched = kept.filter((cmd) => index[cmd.symbol] === undefined);
    return matched.concat(unmatched);
  };

  if (typeof Window_PartyCommand !== 'undefined') {
    const _wsp_Window_PartyCommand_makeCommandList = Window_PartyCommand.prototype.makeCommandList;
    Window_PartyCommand.prototype.makeCommandList = function () {
      _wsp_Window_PartyCommand_makeCommandList.call(this);
      this._list = WsbMenu._applyCmdOrder(this._list, WsbMenu._battlePartyOrder);
    };
  }
  if (typeof Window_ActorCommand !== 'undefined') {
    const _wsp_Window_ActorCommand_makeCommandList = Window_ActorCommand.prototype.makeCommandList;
    Window_ActorCommand.prototype.makeCommandList = function () {
      _wsp_Window_ActorCommand_makeCommandList.call(this);
      this._list = WsbMenu._applyCmdOrder(this._list, WsbMenu._battleActorOrder);
    };
  }
  function readTitleHorizontal() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    return !!(params && params.ws_titleHorizontal === 'true');
  }
  WsbMenu._titleHorizontal = readTitleHorizontal();

  if (typeof Window_TitleCommand !== 'undefined') {
    const _wsp_Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function () {
      _wsp_Window_TitleCommand_makeCommandList.call(this);
      this._list = WsbMenu._applyCmdOrder(this._list, WsbMenu._titleOrder);
      const order = WsbMenu._titleOrder || [];
      for (let i = 0; i < order.length; i++) {
        const o = order[i];
        if (!o || typeof o.symbol !== 'string' || o.symbol.indexOf('wsbTitle_') !== 0) continue;
        if (o.visible === false) continue;
        let insertAt = 0;
        for (let j = 0; j < i; j++) {
          const prev = order[j];
          if (prev && prev.visible !== false && this._list.some((c) => c.symbol === prev.symbol)) {
            insertAt += 1;
          }
        }
        this._list.splice(Math.min(insertAt, this._list.length), 0, {
          name: String(o.text || o.scene || ''),
          symbol: o.symbol,
          enabled: true,
          ext: null,
        });
      }
    };
    if (WsbMenu._titleHorizontal) {
      Window_TitleCommand.prototype.maxCols = function () {
        return Math.max(1, this._list ? this._list.length : 1);
      };
    }
  }
  if (typeof Scene_Title !== 'undefined') {
    const _wsp_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function () {
      _wsp_Scene_Title_createCommandWindow.call(this);
      const order = WsbMenu._titleOrder || [];
      for (const o of order) {
        if (!o || typeof o.symbol !== 'string' || o.symbol.indexOf('wsbTitle_') !== 0) continue;
        const act = o.action || 'scene';
        const scene = o.scene;
        const script = o.script;
        this._commandWindow.setHandler(o.symbol, () => {
          if (act === 'quit') {
            SceneManager.exit();
            return;
          }
          if (act === 'script') {
            try {
              new Function(script || '').call(SceneManager._scene);
            } catch (e) {
              console.error('[WindowsetMenu] title command script error', e);
            }
            if (this._commandWindow) this._commandWindow.activate();
            return;
          }
          this._commandWindow.close();
          WsbMenu.call(scene);
        });
      }
    };
  }

  function readBattleGauges() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_battleGauges ? params.ws_battleGauges : '{}';
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch (e) {
      console.error('[WindowsetMenu] ws_battleGauges parse error', e);
      return {};
    }
  }
  WsbMenu._battleGauges = readBattleGauges();

  if (
    !WSB_YIELD_BATTLE &&
    Object.keys(WsbMenu._battleGauges).length > 0 &&
    typeof Sprite_Gauge !== 'undefined' &&
    typeof Window_BattleStatus !== 'undefined'
  ) {
    const gauges = WsbMenu._battleGauges;
    const gaugeOf = (type) => (gauges && gauges[type] ? gauges[type] : null);
    const inBattle = () =>
      typeof Scene_Battle !== 'undefined' && SceneManager._scene instanceof Scene_Battle;
    const layout = typeof gauges.layout === 'string' ? gauges.layout : 'bar';
    const readInt = (raw, def, lo, hi) => {
      const n = Number(raw);
      if (!Number.isFinite(n)) return def;
      return Math.max(lo, Math.min(hi, Math.round(n)));
    };
    const OFF_X = readInt(gauges.offsetX, 0, -200, 200);
    const OFF_Y = readInt(gauges.offsetY, 0, -200, 200);
    const RING_SIZE = readInt(gauges.ringSize, 36, 24, 64);
    const RING_LINE_W = readInt(gauges.ringThickness, 5, 2, 12);
    const RING_GAP = 4;
    const SLANT_ANGLE = readInt(gauges.slantAngle, 31, 10, 60);
    const SEGMENT_COUNT = readInt(gauges.segmentCount, 10, 4, 20);

    const GAUGE_TYPES = ['hp', 'mp', 'tp'];
    const layoutOf = (type) => {
      const g = gaugeOf(type);
      return g && typeof g.layout === 'string' ? g.layout : layout;
    };
    const ringSizeOf = (type) => {
      const g = gaugeOf(type);
      return g && typeof g.ringSize === 'number' ? readInt(g.ringSize, RING_SIZE, 24, 64) : RING_SIZE;
    };
    const ringLineWOf = (type) => {
      const g = gaugeOf(type);
      return g && typeof g.ringThickness === 'number'
        ? readInt(g.ringThickness, RING_LINE_W, 2, 12)
        : RING_LINE_W;
    };
    const slantAngleOf = (type) => {
      const g = gaugeOf(type);
      return g && typeof g.slantAngle === 'number'
        ? readInt(g.slantAngle, SLANT_ANGLE, 10, 60)
        : SLANT_ANGLE;
    };
    const slantStepOf = (type) =>
      Math.max(0, Math.round(12 * Math.tan((slantAngleOf(type) * Math.PI) / 180)));
    const segCountOf = (type) => {
      const g = gaugeOf(type);
      return g && typeof g.segmentCount === 'number'
        ? readInt(g.segmentCount, SEGMENT_COUNT, 4, 20)
        : SEGMENT_COUNT;
    };

    const barLenOf = (type) => {
      const g = gaugeOf(type);
      return g && typeof g.barLengthDelta === 'number'
        ? readInt(g.barLengthDelta, 0, -100, 100)
        : 0;
    };
    const usesLayout = (name) =>
      layout === name ||
      GAUGE_TYPES.some((t) => {
        const g = gaugeOf(t);
        return !!(g && g.layout === name);
      });

    const visibleGaugeTypes = () => {
      const types = ['hp', 'mp', 'tp'];
      const out = [];
      for (const type of types) {
        if (type === 'tp' && !$dataSystem.optDisplayTp) continue;
        const g = gaugeOf(type);
        if (g && g.visible === false) continue;
        out.push(type);
      }
      return out;
    };
    const allRingOf = (types) => types.length > 0 && types.every((t) => layoutOf(t) === 'ring');
    const allSlantOf = (types) => types.length > 0 && types.every((t) => layoutOf(t) === 'slant');

    const slantShiftsOf = (types) => {
      if (!allSlantOf(types)) return null;
      const map = {};
      let max = 0;
      for (let i = 0; i < types.length; i++) {
        const s = (types.length - 1 - i) * slantStepOf(types[i]);
        map[types[i]] = s;
        if (s > max) max = s;
      }
      return { map: map, max: max };
    };
    Window_BattleStatus.prototype.placeBasicGauges = function (actor, x, y) {
      const gx = x + OFF_X;
      let gy = y + OFF_Y;
      const types = visibleGaugeTypes();
      if (allRingOf(types)) {
        const idx = $gameParty.battleMembers().indexOf(actor);
        let cellW = 128;
        if (idx >= 0 && typeof this.itemRectWithPadding === 'function') {
          cellW = this.itemRectWithPadding(idx).width;
        }
        const sizes = types.map(ringSizeOf);
        const clusterW =
          sizes.reduce((a, b) => a + b, 0) + Math.max(0, types.length - 1) * RING_GAP;
        let cx = gx + Math.max(0, Math.floor((cellW - clusterW) / 2));
        for (let i = 0; i < types.length; i++) {
          this.placeGauge(actor, types[i], cx, gy);
          cx += sizes[i] + RING_GAP;
        }
        return;
      }
      const shifts = slantShiftsOf(types);
      for (let i = 0; i < types.length; i++) {
        const t = types[i];
        const sxRow = shifts ? gx + shifts.map[t] : gx;
        this.placeGauge(actor, t, sxRow, gy);
        gy += layoutOf(t) === 'ring' ? ringSizeOf(t) + 2 : this.gaugeLineHeight();
      }
    };

    const _wsp_WBS_basicGaugesY = Window_BattleStatus.prototype.basicGaugesY;
    Window_BattleStatus.prototype.basicGaugesY = function (rect) {
      const types = visibleGaugeTypes();
      if (allRingOf(types)) {
        const maxRing = Math.max.apply(null, types.map(ringSizeOf));
        const bottom = rect.y + rect.height - this.extraHeight();
        return bottom - maxRing;
      }
      return _wsp_WBS_basicGaugesY.call(this, rect);
    };

    if (gauges.nameVisible === false) {
      Window_BattleStatus.prototype.placeActorName = function () {};
    }

    if (gauges.showActorImage === false) {
      Window_BattleStatus.prototype.drawItemImage = function () {};
    }

    const NAME_OFF_X = readInt(gauges.nameOffsetX, 0, -200, 200);
    const NAME_OFF_Y = readInt(gauges.nameOffsetY, 0, -200, 200);
    if (NAME_OFF_X !== 0 || NAME_OFF_Y !== 0) {
      const _wsp_WBS_placeActorName_off = Window_BattleStatus.prototype.placeActorName;
      Window_BattleStatus.prototype.placeActorName = function (actor, x, y) {
        _wsp_WBS_placeActorName_off.call(this, actor, x + NAME_OFF_X, y + NAME_OFF_Y);
      };
    }

    const _wsp_Sprite_Gauge_gaugeColor1 = Sprite_Gauge.prototype.gaugeColor1;
    Sprite_Gauge.prototype.gaugeColor1 = function () {
      if (inBattle()) {
        const g = gaugeOf(this._statusType);
        if (g && typeof g.color1 === 'string') return g.color1;
      }
      return _wsp_Sprite_Gauge_gaugeColor1.call(this);
    };
    const _wsp_Sprite_Gauge_gaugeColor2 = Sprite_Gauge.prototype.gaugeColor2;
    Sprite_Gauge.prototype.gaugeColor2 = function () {
      if (inBattle()) {
        const g = gaugeOf(this._statusType);
        if (g && typeof g.color2 === 'string') return g.color2;
      }
      return _wsp_Sprite_Gauge_gaugeColor2.call(this);
    };
    const _wsp_Sprite_Gauge_gaugeBackColor = Sprite_Gauge.prototype.gaugeBackColor;
    Sprite_Gauge.prototype.gaugeBackColor = function () {
      if (inBattle()) {
        const g = gaugeOf(this._statusType);
        if (g && typeof g.backColor === 'string') return g.backColor;
      }
      return _wsp_Sprite_Gauge_gaugeBackColor.call(this);
    };

    const touchTexture = (bitmap) => {
      if (bitmap && bitmap._baseTexture && typeof bitmap._baseTexture.update === 'function') {
        bitmap._baseTexture.update();
      }
    };
    const isShapedTarget = (sprite) =>
      inBattle() &&
      (sprite._statusType === 'hp' ||
        sprite._statusType === 'mp' ||
        sprite._statusType === 'tp');

    let _wsp_placingGaugeW = 0;
    const _wsp_WBS_placeGauge_w = Window_BattleStatus.prototype.placeGauge;
    Window_BattleStatus.prototype.placeGauge = function (actor, type, x, y) {
      let w = 0;

      if (type === 'hp' || type === 'mp' || type === 'tp') {
        const idx = $gameParty.battleMembers().indexOf(actor);
        if (idx >= 0 && typeof this.itemRectWithPadding === 'function') {
          const cellW = Math.round(this.itemRectWithPadding(idx).width);
          const shifts = slantShiftsOf(visibleGaugeTypes());
          w = Math.max(48, cellW - (shifts ? shifts.max : 0));
        }
      }
      _wsp_placingGaugeW = w;
      try {
        _wsp_WBS_placeGauge_w.call(this, actor, type, x, y);
      } finally {
        _wsp_placingGaugeW = 0;
      }
    };
    const _wsp_Sprite_Gauge_bitmapWidth = Sprite_Gauge.prototype.bitmapWidth;
    Sprite_Gauge.prototype.bitmapWidth = function () {
      if (this._wsbCellW > 0) return this._wsbCellW;
      if (_wsp_placingGaugeW > 0) {
        this._wsbCellW = _wsp_placingGaugeW;
        return this._wsbCellW;
      }
      return _wsp_Sprite_Gauge_bitmapWidth.call(this);
    };
    const _wsp_Sprite_Gauge_drawGauge_w = Sprite_Gauge.prototype.drawGauge;
    Sprite_Gauge.prototype.drawGauge = function () {
      if (!isShapedTarget(this)) {
        _wsp_Sprite_Gauge_drawGauge_w.call(this);
        return;
      }
      const gx = this.gaugeX();
      const gy = this.textHeight() - this.gaugeHeight();

      const gw = Math.max(0, this.bitmapWidth() - gx + barLenOf(this._statusType));
      this.drawGaugeRect(gx, gy, gw, this.gaugeHeight());
    };

    if (usesLayout('none')) {
      const _wsp_Sprite_Gauge_drawGauge_none = Sprite_Gauge.prototype.drawGauge;
      Sprite_Gauge.prototype.drawGauge = function () {
        if (isShapedTarget(this) && layoutOf(this._statusType) === 'none') return;
        _wsp_Sprite_Gauge_drawGauge_none.call(this);
      };
    }

    if (usesLayout('slant')) {
      const _wsp_Sprite_Gauge_drawGaugeRect = Sprite_Gauge.prototype.drawGaugeRect;
      Sprite_Gauge.prototype.drawGaugeRect = function (x, y, width, height) {
        if (!(isShapedTarget(this) && layoutOf(this._statusType) === 'slant')) {
          _wsp_Sprite_Gauge_drawGaugeRect.call(this, x, y, width, height);
          return;
        }
        const slantAngle = slantAngleOf(this._statusType);
        const slantTan = Math.tan((slantAngle * Math.PI) / 180);
        const rate = this.gaugeRate();
        const slope = Math.max(2, Math.round(height * slantTan));
        const steep = slantAngle >= 50;
        const SHADOW_OFF = 3;
        const wEff = Math.max(slope + 6, width - SHADOW_OFF);
        const ctx = this.bitmap.context;
        ctx.save();
        const para = (px, py, w) => {
          ctx.beginPath();
          ctx.moveTo(px + slope, py);
          ctx.lineTo(px + w, py);
          ctx.lineTo(px + w - slope, py + height);
          ctx.lineTo(px, py + height);
          ctx.closePath();
        };
        para(x + SHADOW_OFF, y + SHADOW_OFF, wEff);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fill();
        para(x, y, wEff);
        ctx.fillStyle = this.gaugeBackColor();
        ctx.fill();
        const innerW = Math.max(0, Math.round((wEff - slope - 2) * rate));
        if (innerW > 0) {
          const grad = ctx.createLinearGradient(x, 0, x + wEff, 0);
          grad.addColorStop(0, this.gaugeColor1());
          grad.addColorStop(1, this.gaugeColor2());
          ctx.fillStyle = grad;
          const fillPara = (px, w) => {
            if (w <= 0) return;
            ctx.beginPath();
            ctx.moveTo(px + slope + 1, y + 1);
            ctx.lineTo(px + slope + 1 + w, y + 1);
            ctx.lineTo(px + 1 + w, y + height - 1);
            ctx.lineTo(px + 1, y + height - 1);
            ctx.closePath();
            ctx.fill();
          };
          if (steep) {
            const notch = Math.max(2, Math.floor(height / 3));
            const sliver = Math.max(2, Math.floor(height / 4));
            if (innerW > notch + sliver) {
              fillPara(x, innerW - (notch + sliver));
              fillPara(x + innerW - sliver, sliver);
            } else {
              fillPara(x, innerW);
            }
          } else {
            fillPara(x, innerW);
          }
        }
        para(x, y, wEff);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        if (steep) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x + slope + 1, y + 1.5);
          ctx.lineTo(x + wEff - 1, y + 1.5);
          ctx.stroke();
        }
        ctx.restore();
        touchTexture(this.bitmap);
      };
    }
    if (usesLayout('segment')) {
      const _wsp_Sprite_Gauge_drawGaugeRect = Sprite_Gauge.prototype.drawGaugeRect;
      Sprite_Gauge.prototype.drawGaugeRect = function (x, y, width, height) {
        if (!(isShapedTarget(this) && layoutOf(this._statusType) === 'segment')) {
          _wsp_Sprite_Gauge_drawGaugeRect.call(this, x, y, width, height);
          return;
        }
        const segCount = segCountOf(this._statusType);
        const rate = this.gaugeRate();
        const ctx = this.bitmap.context;
        ctx.save();
        const gap = 2;
        const cellW = (width - gap * (segCount - 1)) / segCount;
        const grad = ctx.createLinearGradient(x, 0, x + width, 0);
        grad.addColorStop(0, this.gaugeColor1());
        grad.addColorStop(1, this.gaugeColor2());
        const filledCells = rate * segCount;
        for (let i = 0; i < segCount; i++) {
          const cx = x + i * (cellW + gap);
          ctx.fillStyle = this.gaugeBackColor();
          ctx.fillRect(cx, y, cellW, height);
          const cellFill = Math.max(0, Math.min(1, filledCells - i));
          if (cellFill > 0) {
            ctx.fillStyle = grad;
            ctx.fillRect(cx + 1, y + 1, Math.max(1, (cellW - 2) * cellFill), height - 2);
          }
        }
        ctx.restore();
        touchTexture(this.bitmap);
      };
    }
    if (usesLayout('capsule')) {
      const _wsp_Sprite_Gauge_drawGaugeRect = Sprite_Gauge.prototype.drawGaugeRect;
      Sprite_Gauge.prototype.drawGaugeRect = function (x, y, width, height) {
        if (!(isShapedTarget(this) && layoutOf(this._statusType) === 'capsule')) {
          _wsp_Sprite_Gauge_drawGaugeRect.call(this, x, y, width, height);
          return;
        }
        const rate = this.gaugeRate();
        const ctx = this.bitmap.context;
        const capsulePath = (px, py, w, h) => {
          const rr = Math.min(h / 2, w / 2);
          ctx.beginPath();
          if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(px, py, w, h, rr);
          } else {
            ctx.moveTo(px + rr, py);
            ctx.lineTo(px + w - rr, py);
            ctx.arc(px + w - rr, py + rr, rr, -Math.PI / 2, Math.PI / 2);
            ctx.lineTo(px + rr, py + h);
            ctx.arc(px + rr, py + rr, rr, Math.PI / 2, (3 * Math.PI) / 2);
          }
          ctx.closePath();
        };
        ctx.save();
        capsulePath(x, y, width, height);
        ctx.fillStyle = this.gaugeBackColor();
        ctx.fill();
        const innerW = Math.max(0, Math.round((width - 2) * rate));
        if (innerW > 0) {
          ctx.save();
          capsulePath(x + 1, y + 1, width - 2, height - 2);
          ctx.clip();
          const grad = ctx.createLinearGradient(x, 0, x + width, 0);
          grad.addColorStop(0, this.gaugeColor1());
          grad.addColorStop(1, this.gaugeColor2());
          ctx.fillStyle = grad;
          ctx.fillRect(x + 1, y + 1, innerW, height - 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
          ctx.fillRect(x + 1, y + 1, innerW, Math.max(1, Math.floor((height - 2) / 2)));
          ctx.restore();
        }
        capsulePath(x + 0.5, y + 0.5, width - 1, height - 1);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
        touchTexture(this.bitmap);
      };
    }
    if (
      usesLayout('thin') ||
      usesLayout('chevron') ||
      usesLayout('neon') ||
      usesLayout('stripe') ||
      usesLayout('diamond') ||
      usesLayout('pixel')
    ) {
      const _wsp_Sprite_Gauge_drawGaugeRect = Sprite_Gauge.prototype.drawGaugeRect;
      const MULTI = ['thin', 'chevron', 'neon', 'stripe', 'diamond', 'pixel'];
      Sprite_Gauge.prototype.drawGaugeRect = function (x, y, width, height) {
        const lay = isShapedTarget(this) ? layoutOf(this._statusType) : 'bar';
        if (MULTI.indexOf(lay) < 0) {
          _wsp_Sprite_Gauge_drawGaugeRect.call(this, x, y, width, height);
          return;
        }
        const rate = this.gaugeRate();
        const ctx = this.bitmap.context;
        const c0 = this.gaugeBackColor();
        const c2 = this.gaugeColor2();
        const grad = ctx.createLinearGradient(x, 0, x + width, 0);
        grad.addColorStop(0, this.gaugeColor1());
        grad.addColorStop(1, c2);
        ctx.save();
        if (lay === 'thin') {
          const cy = y + Math.floor(height / 2);
          ctx.fillStyle = c0;
          ctx.fillRect(x, cy - 1, width, 2);
          const fw = Math.round((width - 4) * rate);
          if (fw > 0) {
            ctx.fillStyle = grad;
            ctx.fillRect(x, cy - 2, fw, 4);
            ctx.beginPath();
            ctx.arc(x + fw, cy, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = c2;
            ctx.fill();
          }
        } else if (lay === 'diamond') {
          const n = 8;
          const gap = 2;
          const cellW = (width - gap * (n - 1)) / n;
          const cells = rate * n;
          for (let i = 0; i < n; i++) {
            const cx = x + i * (cellW + gap);
            const diamond = () => {
              ctx.beginPath();
              ctx.moveTo(cx + cellW / 2, y);
              ctx.lineTo(cx + cellW, y + height / 2);
              ctx.lineTo(cx + cellW / 2, y + height);
              ctx.lineTo(cx, y + height / 2);
              ctx.closePath();
            };
            diamond();
            ctx.fillStyle = c0;
            ctx.fill();
            const f = Math.max(0, Math.min(1, cells - i));
            if (f > 0) {
              ctx.save();
              diamond();
              ctx.clip();
              ctx.fillStyle = grad;
              ctx.fillRect(cx, y, cellW * f, height);
              ctx.restore();
            }
          }
        } else if (lay === 'pixel') {
          const n = 12;
          const gap = 2;
          const cellW = (width - gap * (n - 1)) / n;
          const filled = Math.floor(rate * n + 0.000001);
          for (let i = 0; i < n; i++) {
            const cx = x + i * (cellW + gap);
            ctx.fillStyle = i < filled ? grad : c0;
            ctx.fillRect(Math.round(cx), y, Math.ceil(cellW), height);
            if (i < filled) {
              ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
              ctx.fillRect(Math.round(cx), y + Math.floor(height / 2), Math.ceil(cellW), Math.ceil(height / 2));
            }
          }
        } else if (lay === 'chevron') {
          const n = 12;
          const gap = 2;
          const skew = Math.floor(height / 2);
          const cellW = (width - skew - gap * (n - 1)) / n;
          const cells = rate * n;
          for (let i = 0; i < n; i++) {
            const cx = x + i * (cellW + gap);
            const paraCell = (w) => {
              ctx.beginPath();
              ctx.moveTo(cx + skew, y);
              ctx.lineTo(cx + skew + w, y);
              ctx.lineTo(cx + w, y + height);
              ctx.lineTo(cx, y + height);
              ctx.closePath();
            };
            paraCell(cellW);
            ctx.fillStyle = c0;
            ctx.fill();
            const f = Math.max(0, Math.min(1, cells - i));
            if (f > 0) {
              paraCell(Math.max(1, cellW * f));
              ctx.fillStyle = grad;
              ctx.fill();
            }
          }
        } else if (lay === 'neon') {
          ctx.fillStyle = c0;
          ctx.fillRect(x, y, width, height);
          const fw = Math.max(0, Math.round((width - 4) * rate));
          if (fw > 0) {
            const cy = y + Math.floor(height / 2);
            ctx.shadowColor = c2;
            ctx.shadowBlur = 6;
            ctx.fillStyle = grad;
            ctx.fillRect(x + 2, cy - 2, fw, 4);
            ctx.shadowBlur = 0;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.fillRect(x + 2, cy - 1, fw, 1);
          }
        } else {
          ctx.fillStyle = c0;
          ctx.fillRect(x, y, width, height);
          const fw = Math.max(0, Math.round((width - 2) * rate));
          if (fw > 0) {
            ctx.fillStyle = grad;
            ctx.fillRect(x + 1, y + 1, fw, height - 2);
            ctx.save();
            ctx.beginPath();
            ctx.rect(x + 1, y + 1, fw, height - 2);
            ctx.clip();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
            ctx.lineWidth = 3;
            for (let sxp = x - height; sxp < x + fw + height; sxp += 8) {
              ctx.beginPath();
              ctx.moveTo(sxp, y + height + 1);
              ctx.lineTo(sxp + height, y - 1);
              ctx.stroke();
            }
            ctx.restore();
          }
        }
        ctx.restore();
        touchTexture(this.bitmap);
      };
    }
    if (usesLayout('ring')) {
      const isRingGauge = (sprite) =>
        isShapedTarget(sprite) && layoutOf(sprite._statusType) === 'ring';
      const _wsp_Sprite_Gauge_setup = Sprite_Gauge.prototype.setup;
      Sprite_Gauge.prototype.setup = function (battler, statusType) {
        if (
          inBattle() &&
          (statusType === 'hp' || statusType === 'mp' || statusType === 'tp') &&
          layoutOf(statusType) === 'ring' &&
          this.bitmap
        ) {
          const rs = ringSizeOf(statusType);
          if (this.bitmap.width !== rs || this.bitmap.height !== rs) {
            this.bitmap = new Bitmap(rs, rs);
          }
        }
        _wsp_Sprite_Gauge_setup.call(this, battler, statusType);
      };

      const _wsp_Sprite_Gauge_drawGauge = Sprite_Gauge.prototype.drawGauge;
      Sprite_Gauge.prototype.drawGauge = function () {
        if (!isRingGauge(this)) {
          _wsp_Sprite_Gauge_drawGauge.call(this);
          return;
        }
        const RS = ringSizeOf(this._statusType);
        const rate = this.gaugeRate();
        const lineW = ringLineWOf(this._statusType);
        const c = RS / 2;
        const radius = Math.max(4, Math.floor((RS - lineW) / 2) - 1);
        const ctx = this.bitmap.context;
        ctx.save();
        ctx.lineWidth = lineW;
        ctx.strokeStyle = this.gaugeBackColor();
        ctx.beginPath();
        ctx.arc(c, c, radius, 0, Math.PI * 2);
        ctx.stroke();
        if (rate > 0) {
          const grad = ctx.createLinearGradient(c - radius, c, c + radius, c);
          grad.addColorStop(0, this.gaugeColor1());
          grad.addColorStop(1, this.gaugeColor2());
          ctx.strokeStyle = grad;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.arc(c, c, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * rate);
          ctx.stroke();
        }
        ctx.restore();
        touchTexture(this.bitmap);
      };

      const _wsp_Sprite_Gauge_drawLabel = Sprite_Gauge.prototype.drawLabel;
      Sprite_Gauge.prototype.drawLabel = function () {
        if (!isRingGauge(this)) {
          _wsp_Sprite_Gauge_drawLabel.call(this);
          return;
        }
        const RS = ringSizeOf(this._statusType);
        this.setupLabelFont();
        this.bitmap.fontSize = Math.max(8, Math.round(RS * 0.2));
        this.bitmap.paintOpacity = this.labelOpacity();
        this.bitmap.drawText(
          this.label(),
          0,
          Math.round(RS * 0.14),
          RS,
          Math.round(RS * 0.24),
          'center',
        );
        this.bitmap.paintOpacity = 255;
      };

      const _wsp_Sprite_Gauge_drawValue = Sprite_Gauge.prototype.drawValue;
      Sprite_Gauge.prototype.drawValue = function () {
        if (!isRingGauge(this)) {
          _wsp_Sprite_Gauge_drawValue.call(this);
          return;
        }
        const RS = ringSizeOf(this._statusType);
        const currentValue = this.currentValue();
        this.setupValueFont();
        this.bitmap.fontSize = Math.max(9, Math.round(RS * 0.3));
        this.bitmap.drawText(
          currentValue,
          0,
          Math.round(RS * 0.4),
          RS,
          Math.round(RS * 0.34),
          'center',
        );
      };
    }

    const labelPicOf = (type) => {
      const g = gaugeOf(type);
      return g && typeof g.labelPicture === 'string' ? g.labelPicture : null;
    };
    if (['hp', 'mp', 'tp'].some((t) => labelPicOf(t))) {
      const _wsp_Sprite_Gauge_drawLabel_pic = Sprite_Gauge.prototype.drawLabel;
      Sprite_Gauge.prototype.drawLabel = function () {
        const pic = isShapedTarget(this) ? labelPicOf(this._statusType) : null;
        if (!pic) {
          _wsp_Sprite_Gauge_drawLabel_pic.call(this);
          return;
        }
        const bmp = ImageManager.loadPicture(pic);
        if (!bmp.isReady()) {
          bmp.addLoadListener(() => this.redraw());
          return;
        }
        if (bmp.width <= 0 || bmp.height <= 0) return;
        let dh;
        let dy;
        let dx;
        if (isShapedTarget(this) && layoutOf(this._statusType) === 'ring') {
          dh = Math.round(this.bitmapHeight() * 0.24);
          dy = Math.round(this.bitmapHeight() * 0.14);
          dx = -1;
        } else {
          dh = Math.max(8, this.textHeight() - 4);
          dy = Math.floor((this.textHeight() - dh) / 2);
          dx = 0;
        }
        const dw = Math.round((bmp.width * dh) / bmp.height);
        if (dx < 0) dx = Math.max(0, Math.floor((this.bitmapWidth() - dw) / 2));
        this.bitmap.blt(bmp, 0, 0, bmp.width, bmp.height, dx, dy, dw, dh);
      };
    }

    if (gauges.valueVisible === false) {
      const _wsp_Sprite_Gauge_drawValue_hide = Sprite_Gauge.prototype.drawValue;
      Sprite_Gauge.prototype.drawValue = function () {
        if (isShapedTarget(this)) return;
        _wsp_Sprite_Gauge_drawValue_hide.call(this);
      };
    }

    const NAME_FS = readInt(gauges.nameFontSize, 26, 10, 48);
    if (NAME_FS !== 26 && typeof Sprite_Name !== 'undefined') {
      const _wsp_Sprite_Name_fontSize = Sprite_Name.prototype.fontSize;
      Sprite_Name.prototype.fontSize = function () {
        return inBattle() ? NAME_FS : _wsp_Sprite_Name_fontSize.call(this);
      };
      const _wsp_Sprite_Name_bitmapHeight = Sprite_Name.prototype.bitmapHeight;
      Sprite_Name.prototype.bitmapHeight = function () {
        return inBattle()
          ? Math.max(24, NAME_FS + 8)
          : _wsp_Sprite_Name_bitmapHeight.call(this);
      };
    }

    const offOfKey = (type, kx, ky) => {
      const g = gaugeOf(type);
      return { x: readInt(g && g[kx], 0, -100, 100), y: readInt(g && g[ky], 0, -100, 100) };
    };

    const valueOffOf = (type) => {
      const b = offOfKey(type, 'barOffsetX', 'barOffsetY');
      const v = offOfKey(type, 'valueOffsetX', 'valueOffsetY');
      return { x: b.x + v.x, y: b.y + v.y };
    };
    const _wsp_anyGaugeOffset = ['hp', 'mp', 'tp'].some((t) => {
      const a = offOfKey(t, 'labelOffsetX', 'labelOffsetY');
      const b = offOfKey(t, 'barOffsetX', 'barOffsetY');
      const c = offOfKey(t, 'valueOffsetX', 'valueOffsetY');
      return a.x !== 0 || a.y !== 0 || b.x !== 0 || b.y !== 0 || c.x !== 0 || c.y !== 0;
    });
    if (_wsp_anyGaugeOffset) {
      const drawShifted = (sprite, ox, oy, original) => {
        if ((ox === 0 && oy === 0) || !sprite.bitmap) {
          original.call(sprite);
          return;
        }
        const ctx = sprite.bitmap.context;
        ctx.save();
        ctx.translate(ox, oy);
        original.call(sprite);
        ctx.restore();
        touchTexture(sprite.bitmap);
      };
      const _wsp_Sprite_Gauge_drawLabel_off = Sprite_Gauge.prototype.drawLabel;
      Sprite_Gauge.prototype.drawLabel = function () {
        if (!isShapedTarget(this)) {
          _wsp_Sprite_Gauge_drawLabel_off.call(this);
          return;
        }
        const o = offOfKey(this._statusType, 'labelOffsetX', 'labelOffsetY');
        drawShifted(this, o.x, o.y, _wsp_Sprite_Gauge_drawLabel_off);
      };
      const _wsp_Sprite_Gauge_drawGauge_off = Sprite_Gauge.prototype.drawGauge;
      Sprite_Gauge.prototype.drawGauge = function () {
        if (!isShapedTarget(this)) {
          _wsp_Sprite_Gauge_drawGauge_off.call(this);
          return;
        }
        const o = offOfKey(this._statusType, 'barOffsetX', 'barOffsetY');
        drawShifted(this, o.x, o.y, _wsp_Sprite_Gauge_drawGauge_off);
      };
      const _wsp_Sprite_Gauge_drawValue_off = Sprite_Gauge.prototype.drawValue;
      Sprite_Gauge.prototype.drawValue = function () {
        if (!isShapedTarget(this)) {
          _wsp_Sprite_Gauge_drawValue_off.call(this);
          return;
        }
        const o = valueOffOf(this._statusType);
        drawShifted(this, o.x, o.y, _wsp_Sprite_Gauge_drawValue_off);
      };
    }
  }

  function readBattleSplitHud() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_battleSplitHud ? params.ws_battleSplitHud : '{}';
    const off = (v) =>
      typeof v === 'number' && isFinite(v) ? Math.max(-200, Math.min(200, Math.round(v))) : 0;
    const obj2 = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : null);
    try {
      const parsed = JSON.parse(raw);
      const obj = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
      const rects =
        obj.rects && typeof obj.rects === 'object' && !Array.isArray(obj.rects) ? obj.rects : {};
      const scrollObj = obj2(obj.scroll);
      const sx = scrollObj && typeof scrollObj.x === 'number' && isFinite(scrollObj.x) ? scrollObj.x : 0;
      const sy = scrollObj && typeof scrollObj.y === 'number' && isFinite(scrollObj.y) ? scrollObj.y : 0;
      const insetArr =
        Array.isArray(obj.inset) && obj.inset.length === 4
          ? obj.inset.map((v) =>
              typeof v === 'number' && isFinite(v) ? Math.max(0, Math.min(24, Math.round(v))) : 4,
            )
          : null;
      return {
        rects: rects,
        showOnEnemySelect: obj.showOnEnemySelect === true,
        stateIconOffsetX: off(obj.stateIconOffsetX),
        stateIconOffsetY: off(obj.stateIconOffsetY),
        maxStateIcons:
          typeof obj.maxStateIcons === 'number' && isFinite(obj.maxStateIcons)
            ? Math.max(0, Math.min(8, Math.round(obj.maxStateIcons)))
            : 0,
        timeGaugeOffsetX: off(obj.timeGaugeOffsetX),
        timeGaugeOffsetY: off(obj.timeGaugeOffsetY),
        actorCmdFollow: obj.actorCmdFollow === true,
        actorCmdOffsetX: off(obj.actorCmdOffsetX),
        actorCmdOffsetY: off(obj.actorCmdOffsetY),
        og: obj2(obj.og),
        scroll: sx !== 0 || sy !== 0 ? { x: sx, y: sy } : null,
        back: obj2(obj.back),
        inset: insetArr,
        frameTile: obj.frameTile === true,
      };
    } catch (e) {
      console.error('[WindowsetMenu] ws_battleSplitHud parse error', e);
      return {
        rects: {},
        showOnEnemySelect: false,
        stateIconOffsetX: 0,
        stateIconOffsetY: 0,
        maxStateIcons: 0,
        timeGaugeOffsetX: 0,
        timeGaugeOffsetY: 0,
        actorCmdFollow: false,
        actorCmdOffsetX: 0,
        actorCmdOffsetY: 0,
        og: null,
        scroll: null,
        back: null,
        inset: null,
        frameTile: false,
      };
    }
  }
  const SPLIT_OPTS = readBattleSplitHud();
  WsbMenu._battleSplitHud = SPLIT_OPTS.rects;

  if (
    !WSB_YIELD_BATTLE &&
    Object.keys(WsbMenu._battleGauges || {}).length === 0 &&
    typeof Sprite_Gauge !== 'undefined' &&
    typeof Window_BattleStatus !== 'undefined'
  ) {
    let _wsp_fitGaugeW = 0;
    const _wsp_WBS_placeGauge_fit = Window_BattleStatus.prototype.placeGauge;
    Window_BattleStatus.prototype.placeGauge = function (actor, type, x, y) {
      let w = 0;
      if (type === 'hp' || type === 'mp' || type === 'tp') {
        const idx = $gameParty.battleMembers().indexOf(actor);
        if (idx >= 0 && typeof this.itemRectWithPadding === 'function') {
          w = Math.max(48, Math.round(this.itemRectWithPadding(idx).width));
        }
      }
      _wsp_fitGaugeW = w;
      try {
        _wsp_WBS_placeGauge_fit.call(this, actor, type, x, y);
      } finally {
        _wsp_fitGaugeW = 0;
      }
    };
    const _wsp_Sprite_Gauge_bitmapWidth_fit = Sprite_Gauge.prototype.bitmapWidth;
    Sprite_Gauge.prototype.bitmapWidth = function () {
      if (this._wsbCellW > 0) return this._wsbCellW;
      const native = _wsp_Sprite_Gauge_bitmapWidth_fit.call(this);
      if (_wsp_fitGaugeW > 0 && _wsp_fitGaugeW < native) {
        this._wsbCellW = _wsp_fitGaugeW;
        return this._wsbCellW;
      }
      return native;
    };
  }

  if (
    !WSB_YIELD_BATTLE &&
    Object.keys(WsbMenu._battleSplitHud).length > 0 &&
    typeof Window_BattleStatus !== 'undefined'
  ) {
    const SPLIT_RECTS = WsbMenu._battleSplitHud;

    const SPLIT_ROUND_RADIUS = 16;
    const SPLIT_OG = SPLIT_OPTS.og;
    const SPLIT_SCROLL = SPLIT_OPTS.scroll;
    const SPLIT_BACK =
      SPLIT_OPTS.back && (SPLIT_OPTS.back.image || SPLIT_OPTS.back.color) ? SPLIT_OPTS.back : null;

    const SPLIT_INSET = SPLIT_OPTS.inset || [4, 4, 4, 4];

    const SPLIT_GAUGE_CLEARANCE = 4;
    const FRAME_QUADRANT_SIZE = 96;
    const FRAME_SLICE_MARGIN = 24;

    const _wsp_frameInnerBottom = (skin) => {
      const v4 = _wsp_frameInner4(skin);
      return v4 ? v4[3] : 0;
    };
    const _wsp_frameInnerSide = (skin) => {
      const v4 = _wsp_frameInner4(skin);
      return v4 ? v4[0] : 0;
    };

    const _wsp_splitGaugeLift = (win) => {
      if (!win || !win._wspSplitContainer) return 0;
      const base = typeof win.extraHeight === 'function' ? win.extraHeight() : 10;
      const need = _wsp_frameInnerBottom(win.windowskin) + SPLIT_GAUGE_CLEARANCE;
      return Math.max(0, need - base);
    };
    const _wsp_WBS_basicGaugesY_frame = Window_BattleStatus.prototype.basicGaugesY;
    Window_BattleStatus.prototype.basicGaugesY = function (rect) {
      return _wsp_WBS_basicGaugesY_frame.call(this, rect) - _wsp_splitGaugeLift(this);
    };
    const _wsp_roundClipPath = (ctx, x, y, w, h, r) => {
      const rr = Math.max(0, Math.min(r, Math.floor(Math.min(w, h) / 2)));
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.lineTo(x + w - rr, y);
      ctx.arcTo(x + w, y, x + w, y + rr, rr);
      ctx.lineTo(x + w, y + h - rr);
      ctx.arcTo(x + w, y + h, x + w - rr, y + h, rr);
      ctx.lineTo(x + rr, y + h);
      ctx.arcTo(x, y + h, x, y + h - rr, rr);
      ctx.lineTo(x, y + rr);
      ctx.arcTo(x, y, x + rr, y, rr);
      ctx.closePath();
    };
    const _wsp_roundRectSub = (ctx, x, y, w, h, r) => {
      const rr = Math.max(0, Math.min(r, Math.floor(Math.min(w, h) / 2)));
      ctx.moveTo(x + rr, y);
      ctx.lineTo(x + w - rr, y);
      ctx.arcTo(x + w, y, x + w, y + rr, rr);
      ctx.lineTo(x + w, y + h - rr);
      ctx.arcTo(x + w, y + h, x + w - rr, y + h, rr);
      ctx.lineTo(x + rr, y + h);
      ctx.arcTo(x, y + h, x, y + h - rr, rr);
      ctx.lineTo(x, y + rr);
      ctx.arcTo(x, y, x + rr, y, rr);
      ctx.closePath();
    };

    const _wsp_frameInner4 = (skin) => {
      if (!skin || !skin.isReady || !skin.isReady()) return null;
      if (Array.isArray(skin._wsbFrameInner4)) return skin._wsbFrameInner4;
      let v = null;
      try {
        const cv = skin.canvas || skin._canvas;
        const cx = cv && cv.getContext ? cv.getContext('2d') : null;
        if (cx) {
          const m = FRAME_SLICE_MARGIN;
          const S = FRAME_QUADRANT_SIZE;
          const d = cx.getImageData(S, 0, S, S).data;
          const isArrow = (x, y) =>
            (x >= 34 && x < 62 && y >= 22 && y < 38) ||
            (x >= 34 && x < 62 && y >= 58 && y < 74) ||
            (x >= 22 && x < 38 && y >= 34 && y < 62) ||
            (x >= 58 && x < 74 && y >= 34 && y < 62);
          const alphaAt = (x, y) => (isArrow(x, y) ? 0 : d[(y * S + x) * 4 + 3] || 0);
          const median = (ts, cap) => {
            ts.sort((a, b) => a - b);
            const mv = ts.length > 0 ? ts[Math.floor(ts.length / 2)] : 0;
            return Math.max(0, Math.min(cap, mv));
          };
          const left = [];
          const right = [];
          const mgL = [];
          const mgR = [];
          for (let y = m; y < S - m; y++) {
            let tl = 0;
            for (let x = m - 1; x >= 0; x--) {
              if (alphaAt(x, y) > 32) { tl = x + 1; break; }
            }
            left.push(tl);
            let gl = m;
            for (let x = 0; x < m; x++) {
              if (alphaAt(x, y) > 32) { gl = x; break; }
            }
            mgL.push(gl);
            let tr = 0;
            for (let x = S - m; x < S; x++) {
              if (alphaAt(x, y) > 32) { tr = S - x; break; }
            }
            right.push(tr);
            let gr = m;
            for (let x = 0; x < m; x++) {
              if (alphaAt(S - 1 - x, y) > 32) { gr = x; break; }
            }
            mgR.push(gr);
          }
          const top = [];
          const bottom = [];
          const mgT = [];
          const mgB = [];
          for (let x = m; x < S - m; x++) {
            let tt = 0;
            for (let y = m - 1; y >= 0; y--) {
              if (alphaAt(x, y) > 32) { tt = y + 1; break; }
            }
            top.push(tt);
            let gt = m;
            for (let y = 0; y < m; y++) {
              if (alphaAt(x, y) > 32) { gt = y; break; }
            }
            mgT.push(gt);
            let tb = 0;
            for (let y = S - m; y < S; y++) {
              if (alphaAt(x, y) > 32) { tb = S - y; break; }
            }
            bottom.push(tb);
            let gb = m;
            for (let y = 0; y < m; y++) {
              if (alphaAt(x, S - 1 - y) > 32) { gb = y; break; }
            }
            mgB.push(gb);
          }
          const MG_CAP = 12;
          v = [
            Math.max(0, median(left, m) - median(mgL, MG_CAP)),
            Math.max(0, median(top, m) - median(mgT, MG_CAP)),
            Math.max(0, median(right, m) - median(mgR, MG_CAP)),
            Math.max(0, median(bottom, m) - median(mgB, MG_CAP)),
          ];
        }
      } catch (e) {
        v = null;
      }
      if (v) skin._wsbFrameInner4 = v;
      return v;
    };

    const _wsp_clipCellContents = (win, index) => {
      const bm = win.contents;
      if (!bm) return;
      const ctx = bm.context || bm._context;
      if (!ctx) return;
      const dr = win.itemRect(index);
      const inner = _wsp_frameInner4(win.windowskin);
      const contentIns = inner
        ? [
            Math.max(4, inner[0]),
            Math.max(4, inner[1]),
            Math.max(4, inner[2]),
            Math.max(4, inner[3]),
          ]
        : SPLIT_INSET;
      const insL = contentIns[0];
      const insT = contentIns[1];
      const insR = contentIns[2];
      const insB = contentIns[3];
      const iw = dr.width - insL - insR;
      const ih = dr.height - insT - insB;
      if (iw <= 0 || ih <= 0) return;
      const maxIns = Math.max(insL, insT, insR, insB);
      const rr = Math.max(
        0,
        Math.min(SPLIT_ROUND_RADIUS - maxIns, Math.floor(Math.min(iw, ih) / 2)),
      );
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.rect(dr.x, dr.y, dr.width, dr.height);
      if (rr > 0) _wsp_roundRectSub(ctx, dr.x + insL, dr.y + insT, iw, ih, rr);
      else ctx.rect(dr.x + insL, dr.y + insT, iw, ih);
      ctx.fillStyle = '#000';
      ctx.fill('evenodd');
      ctx.restore();
      if (bm._baseTexture && typeof bm._baseTexture.update === 'function') bm._baseTexture.update();
      else if (typeof bm._setDirty === 'function') bm._setDirty();
    };
    const _wsp_WBS_itemRect_split = Window_BattleStatus.prototype.itemRect;
    Window_BattleStatus.prototype.itemRect = function (index) {
      const r = SPLIT_RECTS[String(index)];
      if (!r) return _wsp_WBS_itemRect_split.call(this, index);
      return new Rectangle(r.x, r.y, r.width, r.height);
    };

    const _wsp_expandSplitContainer = (w) => {
      if (!w) return;
      w._wspSplitContainer = true;
      w.updatePadding();
      w.move(0, 0, Graphics.boxWidth, Graphics.boxHeight);
      w.createContents();
      w.opacity = 0;

      w.refresh();
    };
    const _wsp_WBS_updatePadding_split = Window_BattleStatus.prototype.updatePadding;
    Window_BattleStatus.prototype.updatePadding = function () {
      _wsp_WBS_updatePadding_split.call(this);
      if (this._wspSplitContainer) this.padding = 0;
    };
    if (typeof Scene_Battle !== 'undefined') {
      const _wsp_SB_createStatusWindow_split = Scene_Battle.prototype.createStatusWindow;
      Scene_Battle.prototype.createStatusWindow = function () {
        _wsp_SB_createStatusWindow_split.call(this);
        this._wspPreSplitStatusRect = {
          x: this._statusWindow.x,
          y: this._statusWindow.y,
          width: this._statusWindow.width,
          height: this._statusWindow.height,
        };
        _wsp_expandSplitContainer(this._statusWindow);
      };
      const _wsp_SB_createActorWindow_split = Scene_Battle.prototype.createActorWindow;
      Scene_Battle.prototype.createActorWindow = function () {
        _wsp_SB_createActorWindow_split.call(this);
        _wsp_expandSplitContainer(this._actorWindow);
      };
      Scene_Battle.prototype.statusWindowX = function () {
        return 0;
      };
      if (SPLIT_OPTS.actorCmdFollow) {
        const _wsp_SB_startActorCmdSel = Scene_Battle.prototype.startActorCommandSelection;
        Scene_Battle.prototype.startActorCommandSelection = function () {
          _wsp_SB_startActorCmdSel.call(this);
          const actor = BattleManager.actor ? BattleManager.actor() : null;
          const index = actor ? $gameParty.battleMembers().indexOf(actor) : -1;
          const r = index >= 0 ? SPLIT_RECTS[String(index)] : null;
          const w = this._actorCommandWindow;
          if (!r || !w) return;
          const x = Math.max(
            0,
            Math.min(Graphics.boxWidth - w.width, r.x + SPLIT_OPTS.actorCmdOffsetX),
          );
          let y = r.y - w.height + SPLIT_OPTS.actorCmdOffsetY;
          if (y < 0) y = r.y + r.height + SPLIT_OPTS.actorCmdOffsetY;
          y = Math.max(0, Math.min(Graphics.boxHeight - w.height, y));
          w.move(x, y, w.width, w.height);
        };
      }

      const _wsp_SB_enemyWindowRect_split = Scene_Battle.prototype.enemyWindowRect;
      Scene_Battle.prototype.enemyWindowRect = function () {
        const pre = this._wspPreSplitStatusRect;
        if (pre && this._statusWindow && this._statusWindow._wspSplitContainer) {
          const real = this._statusWindow;
          this._statusWindow = pre;
          try {
            return _wsp_SB_enemyWindowRect_split.call(this);
          } finally {
            this._statusWindow = real;
          }
        }
        return _wsp_SB_enemyWindowRect_split.call(this);
      };
    }

    const _wsp_splitGradMultiply = (bm, w, h) => {
      if (!SPLIT_OG) return;
      const ctx = bm.context || bm._context;
      if (!ctx) return;
      const c01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
      const addStops = (grad, stops) => {
        for (let i = 0; i < stops.length; i++) {
          const st = stops[i] || {};
          grad.addColorStop(
            c01(typeof st.p === 'number' ? st.p : 0),
            'rgba(255,255,255,' + c01(typeof st.a === 'number' ? st.a : 1) + ')',
          );
        }
      };
      const hs = SPLIT_OG.h && SPLIT_OG.h.length >= 2 ? SPLIT_OG.h : null;
      const vs = SPLIT_OG.v && SPLIT_OG.v.length >= 2 ? SPLIT_OG.v : null;
      if (!hs && !vs) return;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-in';
      if (hs) {
        const hg = ctx.createLinearGradient(0, 0, w, 0);
        addStops(hg, hs);
        ctx.fillStyle = hg;
        ctx.fillRect(0, 0, w, h);
      }
      if (vs) {
        const vg = ctx.createLinearGradient(0, 0, 0, h);
        addStops(vg, vs);
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.restore();
    };

    let _wsp_splitBackBmp = null;
    let _wsp_splitBackTriedSys = false;
    const _wsp_splitBackImage = () => {
      if (!SPLIT_BACK || !SPLIT_BACK.image) return null;
      if (!_wsp_splitBackBmp) {
        _wsp_splitBackBmp = ImageManager.loadBitmap('img/pictures/', SPLIT_BACK.image);
      }
      if (
        !_wsp_splitBackTriedSys &&
        _wsp_splitBackBmp.isError &&
        _wsp_splitBackBmp.isError()
      ) {
        _wsp_splitBackTriedSys = true;
        _wsp_splitBackBmp = ImageManager.loadBitmap('img/system/', SPLIT_BACK.image);
      }
      return _wsp_splitBackBmp;
    };
    const _wsp_splitBackBob = (win) => {
      if (!SPLIT_BACK || !SPLIT_BACK.bobAmp || SPLIT_BACK.bobAmp <= 0) return 0;
      const per = SPLIT_BACK.bobPer && SPLIT_BACK.bobPer > 0 ? SPLIT_BACK.bobPer : 90;
      const fc =
        typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number'
          ? Graphics.frameCount
          : 0;
      return Math.sin((2 * Math.PI * (fc - (win._wspSplitStart || 0))) / per) * SPLIT_BACK.bobAmp;
    };

    const _wsp_madoTilePeriod = (skin) => {
      const SZ = 192;
      if (!skin || !skin.isReady || !skin.isReady()) return { x: SZ, y: SZ };
      if (skin._wsbTilePd) return skin._wsbTilePd;
      const pd = { x: SZ, y: SZ };
      try {
        const cv = skin.canvas || skin._canvas;
        const cx = cv && cv.getContext ? cv.getContext('2d') : null;
        if (cx) {
          const d = cx.getImageData(0, SZ, SZ, SZ).data;
          const rowDiff = (y1, y2) => {
            let s = 0;
            for (let x = 0; x < SZ; x++) {
              const i1 = (y1 * SZ + x) * 4;
              const i2 = (y2 * SZ + x) * 4;
              for (let c = 0; c < 4; c++) s += Math.abs(d[i1 + c] - d[i2 + c]);
            }
            return s / (SZ * 4);
          };
          const colDiff = (x1, x2) => {
            let s = 0;
            for (let y = 0; y < SZ; y++) {
              const i1 = (y * SZ + x1) * 4;
              const i2 = (y * SZ + x2) * 4;
              for (let c = 0; c < 4; c++) s += Math.abs(d[i1 + c] - d[i2 + c]);
            }
            return s / (SZ * 4);
          };
          const OFFS = [0, 24, 48, 72];
          const url = String(skin.url || skin._url || '');
          const trim = /(?:^|[\\/])Window_ID04[6-8]\.png(?:[?#].*)?$/i.test(url);
          const pick = (diffPair) => {
            if (diffPair(0, SZ - 1) <= 2) return SZ;
            for (let p = 96; p < SZ; p++) {
              let worst = 0;
              for (let ki = 0; ki < OFFS.length; ki++) {
                const k = OFFS[ki];
                if (k + p >= SZ) break;
                const dv = diffPair(k, k + p);
                if (dv > worst) worst = dv;
                if (worst > 2) break;
              }
              if (worst <= 2) return p;
            }
            if (
              trim &&
              SZ >= 98 &&
              diffPair(SZ - 2, SZ - 1) >= 12 &&
              diffPair(SZ - 3, SZ - 2) >= 8 &&
              diffPair(SZ - 4, SZ - 3) <= 4 &&
              diffPair(SZ - 3, 0) <= 6
            ) {
              return SZ - 2;
            }
            return SZ;
          };
          pd.x = pick(colDiff);
          pd.y = pick(rowDiff);
        }
      } catch (e) {

      }
      skin._wsbTilePd = pd;
      return pd;
    };

    const _wsp_splitTilePeriods = (win) => {
      const skin = win.windowskin;
      if (skin && skin.isReady() && skin.height >= 384) return _wsp_madoTilePeriod(skin);
      return { x: 96, y: 96 };
    };
    const _wsp_splitScrollOffsets = (win) => {
      if (!SPLIT_SCROLL) return [0, 0];
      const pd = _wsp_splitTilePeriods(win);
      const wrap = (v, p) => Math.floor(((v % p) + p) % p);
      return [wrap(win._wspSplitScrollX || 0, pd.x), wrap(win._wspSplitScrollY || 0, pd.y)];
    };

    const _wsp_paintSplitBack = (bctx, win, dr, clipBox) => {
      if (!SPLIT_BACK || !bctx) return;
      const bsx = SPLIT_BACK.sx && SPLIT_BACK.sx > 0 ? SPLIT_BACK.sx : 1;
      const bsy = SPLIT_BACK.sy && SPLIT_BACK.sy > 0 ? SPLIT_BACK.sy : 1;
      const bob = _wsp_splitBackBob(win);
      let bx0 = dr.x + (SPLIT_BACK.ox || 0);
      let by0 = dr.y + (SPLIT_BACK.oy || 0);
      if (SPLIT_BACK.bobAxis === 'x') bx0 += bob;
      else by0 += bob;
      const pw = Math.max(1, Math.round(dr.width * bsx));
      const ph = Math.max(1, Math.round(dr.height * bsy));
      bctx.save();

      if (clipBox) _wsp_roundClipPath(bctx, dr.x, dr.y, dr.width, dr.height, SPLIT_ROUND_RADIUS);
      else _wsp_roundClipPath(bctx, bx0, by0, pw, ph, SPLIT_ROUND_RADIUS);
      bctx.clip();
      const op =
        typeof SPLIT_BACK.op === 'number' ? Math.max(0, Math.min(1, SPLIT_BACK.op)) : 1;
      bctx.globalAlpha = op;
      if (typeof SPLIT_BACK.blur === 'number' && SPLIT_BACK.blur > 0 && 'filter' in bctx) {
        bctx.filter = 'blur(' + SPLIT_BACK.blur + 'px)';
      }
      if (SPLIT_BACK.skew) {
        bctx.translate(bx0, by0);
        bctx.transform(1, 0, Math.tan((SPLIT_BACK.skew * Math.PI) / 180), 1, 0, 0);
        bctx.translate(-bx0, -by0);
      }
      if (SPLIT_BACK.image) {
        const img = _wsp_splitBackImage();
        const ready = !!(img && img.isReady && img.isReady() && img.width > 0);
        if (ready) {
          const srcCanvas = img._canvas || img._image || (img.canvas ? img.canvas : null);
          if (srcCanvas) {
            bctx.drawImage(srcCanvas, 0, 0, img.width, img.height, bx0, by0, pw, ph);
          }
        }
      } else if (SPLIT_BACK.color) {
        if (SPLIT_BACK.c2) {
          const horiz = SPLIT_BACK.gdir === 'horizontal';
          const g = bctx.createLinearGradient(
            bx0,
            by0,
            horiz ? bx0 + pw : bx0,
            horiz ? by0 : by0 + ph,
          );
          g.addColorStop(0, SPLIT_BACK.color);
          g.addColorStop(1, SPLIT_BACK.c2);
          bctx.fillStyle = g;
        } else {
          bctx.fillStyle = SPLIT_BACK.color;
        }
        bctx.fillRect(bx0, by0, pw, ph);
      }
      bctx.restore();
    };

    const SPLIT_BACK_OVF = !!(SPLIT_BACK && SPLIT_BACK.ovf);
    const _wsp_ensureSplitBackSprite = (win) => {
      if (!SPLIT_BACK_OVF || typeof Sprite === 'undefined') return null;
      if (!win._wspSplitBackSp) {
        const sp = new Sprite(
          new Bitmap(Math.max(1, Graphics.boxWidth), Math.max(1, Graphics.boxHeight)),
        );
        if (typeof win.addChildAt === 'function') win.addChildAt(sp, 0);
        else win.addChild(sp);
        win._wspSplitBackSp = sp;
      }
      return win._wspSplitBackSp;
    };
    const _wsp_drawSplitBackAll = (win) => {
      const sp = _wsp_ensureSplitBackSprite(win);
      if (!sp || !sp.bitmap) return;
      const bob = Math.round(_wsp_splitBackBob(win) * 10);
      const img = SPLIT_BACK && SPLIT_BACK.image ? _wsp_splitBackImage() : null;
      const st = img ? (img.isReady && img.isReady() ? 'r' : 'l') : 'n';
      const n = typeof win.maxItems === 'function' ? win.maxItems() : 0;
      const key = bob + ',' + st + ',' + n;
      if (win._wspSplitBackKey === key) return;
      win._wspSplitBackKey = key;
      const bm = sp.bitmap;
      bm.clear();
      const ctx = bm.context || bm._context;
      if (!ctx) return;
      const keys = Object.keys(SPLIT_RECTS);
      for (let i = 0; i < keys.length; i++) {
        const idx = Number(keys[i]);
        if (idx < 0 || idx >= n) continue;
        _wsp_paintSplitBack(ctx, win, win.itemRect(idx), false);
      }
      if (bm._baseTexture && typeof bm._baseTexture.update === 'function') bm._baseTexture.update();
      else if (typeof bm._setDirty === 'function') bm._setDirty();
    };

    const _wsp_drawSplitBoxBg = (win, index) => {
      const b = win.contentsBack;
      if (!b) return;
      const dr = win.itemRect(index);
      const w = Math.max(1, Math.round(dr.width));
      const h = Math.max(1, Math.round(dr.height));
      const bctx = b.context || b._context;
      if (bctx) bctx.clearRect(dr.x, dr.y, dr.width, dr.height);
      if (SPLIT_BACK_OVF) _wsp_drawSplitBackAll(win);
      else _wsp_paintSplitBack(bctx, win, dr, true);
      const skin = win.windowskin;
      if (skin && skin.isReady()) {
        const mado = skin.height >= 384;
        const insL = SPLIT_INSET[0];
        const insT = SPLIT_INSET[1];
        const bw = Math.max(0, w - insL - SPLIT_INSET[2]);
        const bh = Math.max(0, h - insT - SPLIT_INSET[3]);
        if (bw > 0 && bh > 0) {
          if (!win._wspSplitBgTmp) win._wspSplitBgTmp = {};
          let tmp = win._wspSplitBgTmp[index];
          if (!tmp || tmp.width !== w || tmp.height !== h) {
            tmp = new Bitmap(w, h);
            win._wspSplitBgTmp[index] = tmp;
          } else {
            tmp.clear();
          }
          const tctx = tmp.context || tmp._context;
          if (tctx) {
            tctx.save();
            _wsp_roundClipPath(tctx, 0, 0, w, h, SPLIT_ROUND_RADIUS);
            tctx.clip();
          }
          if (tctx) {
            tctx.save();
            tctx.beginPath();
            tctx.rect(insL, insT, bw, bh);
            tctx.clip();
          }
          const so = _wsp_splitScrollOffsets(win);
          if (mado) {

            const pd = _wsp_madoTilePeriod(skin);
            for (let ty = so[1] - pd.y; ty < bh; ty += pd.y) {
              for (let tx = so[0] - pd.x; tx < bw; tx += pd.x) {
                tmp.blt(skin, 0, 192, pd.x, pd.y, insL + tx, insT + ty, pd.x, pd.y);
              }
            }
          } else {
            tmp.blt(skin, 0, 0, 95, 95, insL, insT, bw, bh);
            for (let ty = so[1] - 96; ty < bh; ty += 96) {
              for (let tx = so[0] - 96; tx < bw; tx += 96) {
                tmp.blt(skin, 0, 96, 96, 96, insL + tx, insT + ty, 96, 96);
              }
            }
          }
          if (tctx) tctx.restore();
          if (tctx) tctx.restore();
          _wsp_splitGradMultiply(tmp, w, h);
          b.paintOpacity = 192;
          b.blt(tmp, 0, 0, w, h, dr.x, dr.y, w, h);
          b.paintOpacity = 255;
        }
      }
      if (b._baseTexture && typeof b._baseTexture.update === 'function') b._baseTexture.update();
      else if (typeof b._setDirty === 'function') b._setDirty();
    };

    const _wsp_madoFrameSrc = (skin) => {
      if (!skin || !skin.height || skin.height < 384) return null;
      if (skin._wsbFlushFrame !== undefined) return skin._wsbFlushFrame;
      let out = null;
      try {
        const S = 96;
        const bmp = new Bitmap(S, S);
        bmp.blt(skin, 96, 0, S, S, 0, 0, S, S);
        const arrows = [[34, 22, 28, 16], [34, 58, 28, 16], [22, 34, 16, 28], [58, 34, 16, 28]];
        for (let i = 0; i < arrows.length; i++) {
          bmp.clearRect(arrows[i][0], arrows[i][1], arrows[i][2], arrows[i][3]);
        }
        const cv = bmp.canvas || bmp._canvas;
        const cx = cv && cv.getContext ? cv.getContext('2d') : null;
        if (cx) {
          const d = cx.getImageData(0, 0, S, S).data;
          let minX = S, minY = S, maxX = -1, maxY = -1;
          for (let y2 = 0; y2 < S; y2++) {
            for (let x2 = 0; x2 < S; x2++) {
              if (d[(y2 * S + x2) * 4 + 3] > 8) {
                if (x2 < minX) minX = x2;
                if (y2 < minY) minY = y2;
                if (x2 > maxX) maxX = x2;
                if (y2 > maxY) maxY = y2;
              }
            }
          }
          const bw = maxX + 1 - minX;
          const bh = maxY + 1 - minY;
          if (maxX >= 0 && bw >= 48 && bh >= 48) {
            out = { bmp, x: minX, y: minY, w: bw, h: bh };
          }
        }
      } catch (e) {
        out = null;
      }
      skin._wsbFlushFrame = out;
      return out;
    };
    const _wsp_drawSplitFramePieces = (b, rawSkin, x, y, w, h) => {

      const m = 24;
      const fsrc = _wsp_madoFrameSrc(rawSkin);
      const skin = fsrc ? fsrc.bmp : rawSkin;
      const Sw = fsrc ? fsrc.w : 96;
      const Sh = fsrc ? fsrc.h : 96;
      const sx0 = fsrc ? fsrc.x : 96;
      const sy0 = fsrc ? fsrc.y : 0;
      const piece = (sx, sy, sw, sh, dx, dy, dw, dh) => {
        if (dw > 0 && dh > 0 && sw > 0 && sh > 0) b.blt(skin, sx, sy, sw, sh, dx, dy, dw, dh);
      };

      const edgeTiled = (sx, sy, sw, sh, dx, dy, dw, dh) => {
        if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0) return;
        if (sh === dh) {
          for (let ox = 0; ox < dw; ox += sw) {
            const cw2 = Math.min(sw, dw - ox);
            b.blt(skin, sx, sy, cw2, sh, dx + ox, dy, cw2, dh);
          }
        } else if (sw === dw) {
          for (let oy = 0; oy < dh; oy += sh) {
            const ch2 = Math.min(sh, dh - oy);
            b.blt(skin, sx, sy, sw, ch2, dx, dy + oy, dw, ch2);
          }
        } else {
          b.blt(skin, sx, sy, sw, sh, dx, dy, dw, dh);
        }
      };
      const edge = SPLIT_OPTS.frameTile === true ? edgeTiled : piece;
      piece(sx0, sy0, m, m, x, y, m, m);
      piece(sx0 + Sw - m, sy0, m, m, x + w - m, y, m, m);
      piece(sx0, sy0 + Sh - m, m, m, x, y + h - m, m, m);
      piece(sx0 + Sw - m, sy0 + Sh - m, m, m, x + w - m, y + h - m, m, m);
      edge(sx0 + m, sy0, Sw - 2 * m, m, x + m, y, w - 2 * m, m);
      edge(sx0 + m, sy0 + Sh - m, Sw - 2 * m, m, x + m, y + h - m, w - 2 * m, m);
      edge(sx0, sy0 + m, m, Sh - 2 * m, x, y + m, m, h - 2 * m);
      edge(sx0 + Sw - m, sy0 + m, m, Sh - 2 * m, x + w - m, y + m, m, h - 2 * m);
    };
    const _wsp_drawSplitFrame = (win, index) => {
      const skin = win.windowskin;
      if (!skin || !skin.isReady()) return;
      const dr = win.itemRect(index);
      if (!SPLIT_OG) {
        _wsp_drawSplitFramePieces(win.contents, skin, dr.x, dr.y, dr.width, dr.height);
        return;
      }

      const w = Math.max(1, Math.round(dr.width));
      const h = Math.max(1, Math.round(dr.height));
      if (!win._wspSplitFrameTmp) win._wspSplitFrameTmp = {};
      let tmp = win._wspSplitFrameTmp[index];
      if (!tmp || tmp.width !== w || tmp.height !== h) {
        tmp = new Bitmap(w, h);
        win._wspSplitFrameTmp[index] = tmp;
      } else {
        tmp.clear();
      }
      _wsp_drawSplitFramePieces(tmp, skin, 0, 0, w, h);
      _wsp_splitGradMultiply(tmp, w, h);
      win.contents.blt(tmp, 0, 0, w, h, dr.x, dr.y, w, h);
    };
    const _wsp_WBS_drawItemBackground = Window_BattleStatus.prototype.drawItemBackground;
    Window_BattleStatus.prototype.drawItemBackground = function (index) {
      const r = SPLIT_RECTS[String(index)];
      if (!r) {
        _wsp_WBS_drawItemBackground.call(this, index);
        return;
      }
      const skin = this.windowskin;
      if (skin && !skin.isReady()) skin.addLoadListener(() => this.redrawItem(index));
      _wsp_drawSplitBoxBg(this, index);
    };
    const _wsp_WBS_drawItem_split = Window_BattleStatus.prototype.drawItem;
    Window_BattleStatus.prototype.drawItem = function (index) {
      _wsp_WBS_drawItem_split.call(this, index);
      const r = SPLIT_RECTS[String(index)];
      if (r) {
        _wsp_clipCellContents(this, index);
        _wsp_drawSplitFrame(this, index);
        _wsp_drawSplitCursor(this, index);
      }
    };
    const _wsp_splitAnimOffsets = (win, r, offX, offY, spec) => {
      let x = offX;
      let y = offY;
      const implicitSlide =
        spec &&
        (spec.type === 'slide' || spec.type === 'skewSlide') &&
        typeof spec.ox !== 'number' &&
        typeof spec.oy !== 'number';
      if (implicitSlide) {
        const dir = spec.dir || 'up';
        if (dir === 'left' || dir === 'right') x *= r.width / Math.max(1, win.width);
        else y *= r.height / Math.max(1, win.height);
      }
      return [x, y];
    };
    const _wsp_ensureSplitAnimTargets = (win) => {
      if (!win._wspSplitAnimLayer) {
        const layer = new Sprite();
        const host = win._clientArea || win;
        const backIndex =
          host.children && win._contentsBackSprite
            ? host.children.indexOf(win._contentsBackSprite)
            : -1;
        if (backIndex >= 0 && host.addChildAt) host.addChildAt(layer, backIndex);
        else host.addChild(layer);
        win._wspSplitAnimLayer = layer;
        win._wspSplitAnimTargets = {};
      }
      const targets = win._wspSplitAnimTargets;
      const keys = Object.keys(SPLIT_RECTS);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const r = SPLIT_RECTS[key];
        let target = targets[key];
        if (!target) {
          const container = new Sprite();
          const back = new Sprite();
          const front = new Sprite();
          container.addChild(back);
          container.addChild(front);
          win._wspSplitAnimLayer.addChild(container);
          target = targets[key] = { container, back, front };
        }
        target.back.bitmap = win.contentsBack;
        target.back.setFrame(r.x, r.y, r.width, r.height);
        target.front.bitmap = win.contents;
        target.front.setFrame(r.x, r.y, r.width, r.height);
      }
      if (win._contentsBackSprite) win._contentsBackSprite.visible = false;
      if (win._contentsSprite) win._contentsSprite.visible = false;

      return targets;
    };

    const SPLIT_ANIM_REST = { offX: 0, offY: 0, scale: 1, alpha: 1, skew: 0, spec: null };
    const _wsp_applySplitAdditionalSprites = (win, states) => {
      if (!win._additionalSprites || typeof $gameParty === 'undefined') return;
      const members = $gameParty.battleMembers();
      const sprites = Object.keys(win._additionalSprites);
      for (let i = 0; i < sprites.length; i++) {
        const sp = win._additionalSprites[sprites[i]];
        const index = sp && sp._battler ? members.indexOf(sp._battler) : -1;
        const r = index >= 0 ? SPLIT_RECTS[String(index)] : null;
        if (!sp || !r) continue;
        const state = states[String(index)] || SPLIT_ANIM_REST;
        if (sp._wspSplitAnimX !== sp.x) sp._wspSplitAnimBaseX = sp.x;
        if (sp._wspSplitAnimY !== sp.y) sp._wspSplitAnimBaseY = sp.y;
        if (!sp._wspSplitAnimScale || sp._wspSplitAnimScale[0] !== sp.scale.x) {
          sp._wspSplitAnimBaseScaleX = sp.scale.x;
          sp._wspSplitAnimBaseScaleY = sp.scale.y;
        }
        if (sp._wspSplitAnimAlpha !== sp.alpha) sp._wspSplitAnimBaseAlpha = sp.alpha;
        const offsets = _wsp_splitAnimOffsets(win, r, state.offX, state.offY, state.spec);
        const baseX = sp._wspSplitAnimBaseX === undefined ? sp.x : sp._wspSplitAnimBaseX;
        const baseY = sp._wspSplitAnimBaseY === undefined ? sp.y : sp._wspSplitAnimBaseY;
        const baseScaleX =
          sp._wspSplitAnimBaseScaleX === undefined ? sp.scale.x : sp._wspSplitAnimBaseScaleX;
        const baseScaleY =
          sp._wspSplitAnimBaseScaleY === undefined ? sp.scale.y : sp._wspSplitAnimBaseScaleY;
        const baseAlpha =
          sp._wspSplitAnimBaseAlpha === undefined ? sp.alpha : sp._wspSplitAnimBaseAlpha;
        sp.x = Math.round(r.x + offsets[0] + (r.width * (1 - state.scale)) / 2 +
          (baseX - r.x) * state.scale);
        sp.y = Math.round(r.y + offsets[1] + (r.height * (1 - state.scale)) / 2 +
          (baseY - r.y) * state.scale);
        sp.scale.set(baseScaleX * state.scale, baseScaleY * state.scale);
        sp.alpha = baseAlpha * state.alpha;
        if (sp.transform && sp.transform.skew) sp.transform.skew.x = state.skew;
        sp._wspSplitAnimX = sp.x;
        sp._wspSplitAnimY = sp.y;
        sp._wspSplitAnimScale = [sp.scale.x, sp.scale.y];
        sp._wspSplitAnimAlpha = sp.alpha;
      }
    };
    Window_BattleStatus.prototype._wspApplySplitAnimationBoxes = function (states) {
      const st = states || {};
      this._wspSplitAnimStates = st;
      const targets = _wsp_ensureSplitAnimTargets(this);
      const keys = Object.keys(SPLIT_RECTS);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const r = SPLIT_RECTS[key];
        const s = st[key] || SPLIT_ANIM_REST;
        const target = targets[key].container;
        const offsets = _wsp_splitAnimOffsets(this, r, s.offX, s.offY, s.spec);

        target.x = Math.round(r.x + offsets[0] + (r.width * (1 - s.scale)) / 2);
        target.y = Math.round(r.y + offsets[1] + (r.height * (1 - s.scale)) / 2);
        target.scale.set(s.scale, s.scale);
        target.alpha = s.alpha;
        if (target.transform && target.transform.skew) target.transform.skew.x = s.skew;
      }

      const bsp = this._wspSplitBackSp;
      if (bsp) {
        const s0 = st[keys[0]] || SPLIT_ANIM_REST;
        const wr = { x: 0, y: 0, width: this.width, height: this.height };
        const bo = _wsp_splitAnimOffsets(this, wr, s0.offX, s0.offY, s0.spec);
        bsp.x = Math.round(bo[0]);
        bsp.y = Math.round(bo[1]);
        bsp.alpha = s0.alpha;
        bsp.visible = this.isOpen() && this.visible !== false;
      }
      _wsp_applySplitAdditionalSprites(this, st);
    };
    Window_BattleStatus.prototype._wspApplySplitAnimation = function (
      offX,
      offY,
      scale,
      alpha,
      skew,
      spec,
    ) {
      const st = {};
      const keys = Object.keys(SPLIT_RECTS);
      for (let i = 0; i < keys.length; i++) {
        st[keys[i]] = { offX, offY, scale, alpha, skew, spec: spec || null };
      }
      this._wspApplySplitAnimationBoxes(st);
    };
    Window_BattleStatus.prototype._wspResetSplitAnimation = function () {
      if (this._wspSplitAnimStates) this._wspApplySplitAnimation(0, 0, 1, 1, 0, null);
    };

    const _wsp_WBS_update_split = Window_BattleStatus.prototype.update;
    Window_BattleStatus.prototype.update = function () {
      _wsp_WBS_update_split.call(this);
      if (!this._wspSplitContainer) return;
      if (this._wspSplitAnimStates) {
        _wsp_applySplitAdditionalSprites(this, this._wspSplitAnimStates);
      }
      try {
        if (this._wspSplitStart === undefined) {
          this._wspSplitStart =
            typeof Graphics !== 'undefined' && typeof Graphics.frameCount === 'number'
              ? Graphics.frameCount
              : 0;
        }
        if (!this.visible || !(this.openness > 0)) return;
        if (SPLIT_SCROLL) {
          this._wspSplitScrollX = (this._wspSplitScrollX || 0) + SPLIT_SCROLL.x;
          this._wspSplitScrollY = (this._wspSplitScrollY || 0) + SPLIT_SCROLL.y;
        }
        const so = _wsp_splitScrollOffsets(this);
        const bob = Math.round(_wsp_splitBackBob(this) * 10);
        const img = SPLIT_BACK && SPLIT_BACK.image ? _wsp_splitBackImage() : null;
        const imgState = img ? (img.isReady && img.isReady() ? 'r' : 'l') : 'n';
        const key = so[0] + ',' + so[1] + ',' + bob + ',' + imgState;
        if (this._wspSplitBgKey === key) return;
        this._wspSplitBgKey = key;
        const n = typeof this.maxItems === 'function' ? this.maxItems() : 0;
        const keys = Object.keys(SPLIT_RECTS);
        for (let i = 0; i < keys.length; i++) {
          const idx = Number(keys[i]);
          if (idx >= 0 && idx < n) this.drawItemBackground(idx);
        }
      } catch (e) {

      }
    };

    const SPLIT_CURSOR_TARGET_A = 110;
    const SPLIT_CURSOR_EMPTY_A = 8;
    const SPLIT_CURSOR_MIN_OP = 48;
    const _wsp_splitCursorMeanAlpha = (skin) => {
      if (!skin || !skin.isReady || !skin.isReady()) return 0;
      if (typeof skin._wsbCursorA === 'number') return skin._wsbCursorA;
      let mean = 0;
      try {
        const cv = skin.canvas || skin._canvas;
        const cx = cv && cv.getContext ? cv.getContext('2d') : null;
        if (cx) {
          const d = cx.getImageData(96, 96, 48, 48).data;
          let sum = 0;
          for (let i = 3; i < d.length; i += 4) sum += d[i];
          mean = sum / (d.length / 4);
        }
      } catch (e) {
        mean = 0;
      }
      skin._wsbCursorA = mean;
      return mean;
    };
    const _wsp_splitCursorOpacity = (mean) => {
      if (!(mean > SPLIT_CURSOR_EMPTY_A)) return 255;
      const op = Math.round((255 * SPLIT_CURSOR_TARGET_A) / mean);
      return Math.max(SPLIT_CURSOR_MIN_OP, Math.min(255, op));
    };
    const _wsp_splitCursorBitmap = (win, w, h) => {
      const skin = win.windowskin;
      const meanA = _wsp_splitCursorMeanAlpha(skin);
      const skinReady =
        !!(skin && skin.isReady && skin.isReady()) && meanA > SPLIT_CURSOR_EMPTY_A;
      const key = w + 'x' + h + (skinReady ? 's' : 'f');
      if (win._wspCursorKey === key && win._wspCursorBm) return win._wspCursorBm;
      win._wspCursorKey = key;
      const bm = new Bitmap(w, h);

      const rr = skinReady
        ? 0
        : Math.max(0, Math.min(SPLIT_ROUND_RADIUS, Math.floor(Math.min(w, h) / 2)));
      if (skinReady) {
        const sx = 96;
        const sy = 96;
        const sw = 48;
        const sh = 48;
        const m = 4;
        const em = sw - m * 2;
        bm.blt(skin, sx, sy, m, m, 0, 0, m, m);
        bm.blt(skin, sx + sw - m, sy, m, m, w - m, 0, m, m);
        bm.blt(skin, sx, sy + sh - m, m, m, 0, h - m, m, m);
        bm.blt(skin, sx + sw - m, sy + sh - m, m, m, w - m, h - m, m, m);
        bm.blt(skin, sx + m, sy, em, m, m, 0, w - m * 2, m);
        bm.blt(skin, sx + m, sy + sh - m, em, m, m, h - m, w - m * 2, m);
        bm.blt(skin, sx, sy + m, m, em, 0, m, m, h - m * 2);
        bm.blt(skin, sx + sw - m, sy + m, m, em, w - m, m, m, h - m * 2);
        bm.blt(skin, sx + m, sy + m, em, em, m, m, w - m * 2, h - m * 2);
      } else {
        const fx = bm.context || bm._context;
        if (fx) {
          fx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          fx.fillRect(0, 0, w, h);
        }
      }
      const cx = bm.context || bm._context;
      if (cx && rr > 0) {
        cx.save();
        cx.globalCompositeOperation = 'destination-out';
        cx.beginPath();
        cx.rect(0, 0, w, h);
        _wsp_roundRectSub(cx, 0, 0, w, h, rr);
        cx.fillStyle = '#000';
        cx.fill('evenodd');
        cx.restore();
      }
      if (bm._baseTexture && typeof bm._baseTexture.update === 'function') bm._baseTexture.update();
      win._wspCursorBm = bm;
      return bm;
    };
    const _wsp_drawSplitCursor = (win, index) => {
      if (!win._wspSplitContainer || !win.contents) return;
      if (win.cursorVisible === false) return;
      const sel = typeof win.index === 'function' ? win.index() : -1;
      const all = win._cursorAll === true;
      if (!all && sel !== index) return;
      const dr = win.itemRect(index);
      const w = Math.max(1, Math.round(dr.width));
      const h = Math.max(1, Math.round(dr.height));
      const bm = _wsp_splitCursorBitmap(win, w, h);
      if (!bm) return;

      const op = _wsp_splitCursorOpacity(_wsp_splitCursorMeanAlpha(win.windowskin));
      win.contents.paintOpacity = op;
      win.contents.blt(bm, 0, 0, w, h, dr.x, dr.y, w, h);
      win.contents.paintOpacity = 255;
    };
    {

      const _wsp_WBS_updateCursor = Window_BattleStatus.prototype._updateCursor;
      Window_BattleStatus.prototype._updateCursor = function () {
        _wsp_WBS_updateCursor.call(this);
        if (this._wspSplitContainer && this._cursorSprite) this._cursorSprite.visible = false;
      };
      const _wsp_WBS_refreshCursor = Window_BattleStatus.prototype._refreshCursor;
      Window_BattleStatus.prototype._refreshCursor = function () {
        if (!this._wspSplitContainer) {
          _wsp_WBS_refreshCursor.call(this);
          return;
        }

        const cs = this._cursorSprite;
        if (!cs) return;
        const kids = cs.children || [];
        for (let i = 0; i < kids.length; i++) {
          kids[i].bitmap = null;
          if (kids[i].setFrame) kids[i].setFrame(0, 0, 0, 0);
        }
      };

      const _wsp_WBS_select_cursor = Window_BattleStatus.prototype.select;
      Window_BattleStatus.prototype.select = function (index) {
        const prev = typeof this.index === 'function' ? this.index() : -1;
        _wsp_WBS_select_cursor.call(this, index);
        if (!this._wspSplitContainer || !this.contents) return;
        if (prev === index) return;
        const n = typeof this.maxItems === 'function' ? this.maxItems() : 0;
        const redraw = (i) => {
          if (i >= 0 && i < n && SPLIT_RECTS[String(i)] && typeof this.redrawItem === 'function') {
            this.redrawItem(i);
          }
        };
        redraw(prev);
        redraw(index);
      };
    }

    if (SPLIT_OPTS.showOnEnemySelect && typeof Scene_Battle !== 'undefined') {
      const _wsp_SB_startEnemySel = Scene_Battle.prototype.startEnemySelection;
      Scene_Battle.prototype.startEnemySelection = function () {
        _wsp_SB_startEnemySel.call(this);
        this._statusWindow.show();
      };
    }

    if (SPLIT_OPTS.stateIconOffsetX !== 0 || SPLIT_OPTS.stateIconOffsetY !== 0) {
      const _wsp_WBS_stateIconX = Window_BattleStatus.prototype.stateIconX;
      Window_BattleStatus.prototype.stateIconX = function (rect) {
        return _wsp_WBS_stateIconX.call(this, rect) + SPLIT_OPTS.stateIconOffsetX;
      };
      const _wsp_WBS_stateIconY = Window_BattleStatus.prototype.stateIconY;
      Window_BattleStatus.prototype.stateIconY = function (rect) {
        return _wsp_WBS_stateIconY.call(this, rect) + SPLIT_OPTS.stateIconOffsetY;
      };
    }

    if (SPLIT_OPTS.maxStateIcons > 0 && typeof Sprite_StateIcon !== 'undefined') {
      const ICON_MAX = SPLIT_OPTS.maxStateIcons;
      const _wsp_SSI_initMembers = Sprite_StateIcon.prototype.initMembers;
      Sprite_StateIcon.prototype.initMembers = function () {
        _wsp_SSI_initMembers.call(this);
        this._wspMultiBitmap = null;
        this._wspMultiKey = null;
      };
      const _wsp_SSI_updateIcon = Sprite_StateIcon.prototype.updateIcon;
      Sprite_StateIcon.prototype.updateIcon = function () {
        const multi =
          this._battler && this._battler.isActor() && $gameParty && $gameParty.inBattle();
        if (!multi) {
          if (this._wspMultiKey !== null) {
            this._wspMultiKey = null;
            this.anchor.x = 0.5;
            this.loadBitmap();
          }
          _wsp_SSI_updateIcon.call(this);
          return;
        }
        const icons = [];
        if (this.shouldDisplay()) {
          for (const n of this._battler.allIcons()) icons.push(n);
        }
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const pages = Math.max(1, Math.ceil(icons.length / ICON_MAX));
        this._animationIndex++;
        if (this._animationIndex >= pages) this._animationIndex = 0;
        const slice = icons.slice(
          this._animationIndex * ICON_MAX,
          this._animationIndex * ICON_MAX + ICON_MAX,
        );
        const key = slice.join(',');
        if (key === this._wspMultiKey) return;
        this._wspMultiKey = key;
        if (!this._wspMultiBitmap) this._wspMultiBitmap = new Bitmap(pw * ICON_MAX, ph);
        const b = this._wspMultiBitmap;
        b.clear();
        const count = slice.length;
        if (count > 0) {
          const iconSet = ImageManager.loadSystem('IconSet');
          const drawAll = () => {
            if (this._wspMultiKey !== key) return;
            for (let i = 0; i < count; i++) {
              const idx = slice[i];
              const sx = (idx % 16) * pw;
              const sy = Math.floor(idx / 16) * ph;
              b.blt(iconSet, sx, sy, pw, ph, i * pw, 0, pw, ph);
            }
          };
          if (iconSet.isReady()) drawAll();
          else iconSet.addLoadListener(drawAll);
        }
        this.bitmap = b;
        this.setFrame(0, 0, Math.max(1, count) * pw, ph);
        this.anchor.x = count > 0 ? 1 - 1 / (2 * count) : 0.5;
      };
    }

    if (typeof Sprite_Gauge !== 'undefined') {

      let _wsp_splitTimeW = 0;
      const _wsp_SG_bitmapWidth_time = Sprite_Gauge.prototype.bitmapWidth;
      Sprite_Gauge.prototype.bitmapWidth = function () {
        if (this._wsbSplitTimeW > 0) return this._wsbSplitTimeW;
        if (_wsp_splitTimeW > 0) {
          this._wsbSplitTimeW = _wsp_splitTimeW;
          return this._wsbSplitTimeW;
        }
        return _wsp_SG_bitmapWidth_time.call(this);
      };
      const _wsp_WBS_placeTimeGauge = Window_BattleStatus.prototype.placeTimeGauge;
      Window_BattleStatus.prototype.placeTimeGauge = function (actor, x, y) {
        const idx =
          typeof $gameParty !== 'undefined' ? $gameParty.battleMembers().indexOf(actor) : -1;
        const r = idx >= 0 ? SPLIT_RECTS[String(idx)] : null;
        if (!r) {
          _wsp_WBS_placeTimeGauge.call(
            this,
            actor,
            x + SPLIT_OPTS.timeGaugeOffsetX,
            y + SPLIT_OPTS.timeGaugeOffsetY,
          );
          return;
        }
        const pad = typeof this.itemPadding === 'function' ? this.itemPadding() : 8;
        const inset = Math.max(pad, _wsp_frameInnerSide(this.windowskin) + SPLIT_GAUGE_CLEARANCE);
        const w = Math.max(24, Math.round(r.width - inset * 2));

        const key = 'actor' + actor.actorId() + '-gauge-time';
        const sp = this._additionalSprites ? this._additionalSprites[key] : null;
        if (sp && sp._wsbSplitTimeW !== w) {
          sp._wsbSplitTimeW = w;
          if (typeof Bitmap !== 'undefined') sp.bitmap = new Bitmap(w, sp.bitmapHeight());
        }
        _wsp_splitTimeW = w;
        try {
          _wsp_WBS_placeTimeGauge.call(
            this,
            actor,
            r.x + inset + SPLIT_OPTS.timeGaugeOffsetX,
            y + SPLIT_OPTS.timeGaugeOffsetY,
          );
        } finally {
          _wsp_splitTimeW = 0;
        }
        const placed = this._additionalSprites ? this._additionalSprites[key] : null;
        if (placed && typeof placed.redraw === 'function') placed.redraw();
      };
    }
  }

  function readBattleFaces() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_battleFaces ? params.ws_battleFaces : '{}';
    try {
      const parsed = JSON.parse(raw);
      const obj = parsed && typeof parsed === 'object' ? parsed : {};
      const pick = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
      const speed = (v) => {
        const n = Number(v);
        return Number.isFinite(n) ? Math.max(1, Math.min(10, Math.round(n))) : 5;
      };
      return {
        pictures: pick(obj.pictures),
        offsets: pick(obj.offsets),
        states: pick(obj.states),
        attackZoom: obj.attackZoom === true,
        damageShake: obj.damageShake === true,
        attackZoomSpeed: speed(obj.attackZoomSpeed),
        damageShakeSpeed: speed(obj.damageShakeSpeed),
      };
    } catch (e) {
      console.error('[WindowsetMenu] ws_battleFaces parse error', e);
      return {
        pictures: {},
        offsets: {},
        states: {},
        attackZoom: false,
        damageShake: false,
        attackZoomSpeed: 5,
        damageShakeSpeed: 5,
      };
    }
  }
  WsbMenu._battleFaces = readBattleFaces();

  if (
    !WSB_YIELD_BATTLE &&
    (Object.keys(WsbMenu._battleFaces.pictures).length > 0 ||
      Object.keys(WsbMenu._battleFaces.states).length > 0 ||
      WsbMenu._battleFaces.attackZoom ||
      WsbMenu._battleFaces.damageShake) &&
    typeof Window_BattleStatus !== 'undefined'
  ) {
    const pictures = WsbMenu._battleFaces.pictures;
    const offsets = WsbMenu._battleFaces.offsets;
    const states = WsbMenu._battleFaces.states;
    const ATTACK_ZOOM = WsbMenu._battleFaces.attackZoom;
    const DAMAGE_SHAKE = WsbMenu._battleFaces.damageShake;
    const ZOOM_FRAMES = Math.round(300 / WsbMenu._battleFaces.attackZoomSpeed);
    const SHAKE_FRAMES = Math.round(300 / WsbMenu._battleFaces.damageShakeSpeed);
    const SHAKE_FREQ = 1.1 * (WsbMenu._battleFaces.damageShakeSpeed / 5);
    const TONE_FILTERS = {
      gray: 'grayscale(100%)',
      dark: 'brightness(55%)',
      red: 'grayscale(55%) sepia(100%) hue-rotate(-50deg) saturate(3)',
      blue: 'grayscale(55%) sepia(100%) hue-rotate(170deg) saturate(2.5)',
    };
    const _wsp_GA_performAction = Game_Actor.prototype.performAction;
    Game_Actor.prototype.performAction = function (action) {
      _wsp_GA_performAction.call(this, action);
      this._wspFaceFlash = {
        type: 'attack',
        until: Graphics.frameCount + ZOOM_FRAMES,
        total: ZOOM_FRAMES,
      };
    };
    const _wsp_GA_performDamage = Game_Actor.prototype.performDamage;
    Game_Actor.prototype.performDamage = function () {
      _wsp_GA_performDamage.call(this);
      this._wspFaceFlash = {
        type: 'damage',
        until: Graphics.frameCount + SHAKE_FRAMES,
        total: SHAKE_FRAMES,
      };
    };

    const faceStateOf = (actor) => {
      if (!actor) return null;
      if (actor.isDead()) return 'dead';
      const flash = actor._wspFaceFlash;
      if (flash && flash.until > Graphics.frameCount) return flash.type;
      if (actor.isDying()) return 'dying';
      return null;
    };

    const _wsp_WBS_update = Window_BattleStatus.prototype.update;
    Window_BattleStatus.prototype.update = function () {
      _wsp_WBS_update.call(this);
      const members = $gameParty.battleMembers();
      if (!this._wspFaceStates) this._wspFaceStates = [];
      for (let i = 0; i < members.length; i++) {
        const st = faceStateOf(members[i]);
        const animating =
          (st === 'attack' && ATTACK_ZOOM) || (st === 'damage' && DAMAGE_SHAKE);
        if (this._wspFaceStates[i] !== st) {
          this._wspFaceStates[i] = st;
          if (this.redrawItem) this.redrawItem(i);
        } else if (animating && Graphics.frameCount % 4 === 0) {
          if (this.redrawItem) this.redrawItem(i);
        }
      }
    };

    const _wsp_WBS_drawItemImage = Window_BattleStatus.prototype.drawItemImage;
    Window_BattleStatus.prototype.drawItemImage = function (index) {
      if (WsbMenu._battleGauges && WsbMenu._battleGauges.showActorImage === false) {
        return;
      }
      const actor = this.actor(index);
      const id = actor ? String(actor.actorId()) : '';
      const base = pictures[id];
      const st = faceStateOf(actor);
      const variant = st && states[id] ? states[id][st] : null;
      const name = (variant && variant.picture) || base;

      const faceTone = variant && variant.tone ? TONE_FILTERS[variant.tone] : null;
      if (!name) {
        if (!actor || (!ATTACK_ZOOM && !DAMAGE_SHAKE && !faceTone)) {
          _wsp_WBS_drawItemImage.call(this, index);
          return;
        }
        const faceBmp = ImageManager.loadFace(actor.faceName());
        if (!faceBmp.isReady()) {
          faceBmp.addLoadListener(() => {
            if (this.redrawItem) this.redrawItem(index);
          });
          return;
        }
        const frect = this.faceRect(index);
        const fw = ImageManager.faceWidth;
        const fh = ImageManager.faceHeight;
        if (frect.width <= 0 || frect.height <= 0) return;
        const cellX = (actor.faceIndex() % 4) * fw;
        const cellY = Math.floor(actor.faceIndex() / 4) * fh;
        const fscale = Math.max(frect.width / fw, frect.height / fh);
        let fzoom = 1;
        const fflash = actor._wspFaceFlash;
        const fflashLeft =
          fflash && fflash.until > Graphics.frameCount
            ? (fflash.until - Graphics.frameCount) / Math.max(1, fflash.total || 60)
            : 0;
        if (st === 'attack' && ATTACK_ZOOM) {
          const p = Math.max(0, Math.min(1, fflashLeft));
          const tri = p > 0.5 ? (1 - p) * 2 : p * 2;
          fzoom = 1 + 0.18 * tri;
        }
        const fcw = Math.min(fw, Math.max(1, Math.floor(frect.width / (fscale * fzoom))));
        const fch = Math.min(fh, Math.max(1, Math.floor(frect.height / (fscale * fzoom))));
        const fsx = cellX + Math.max(0, Math.floor((fw - fcw) / 2));
        const fsy = cellY + Math.max(0, Math.floor((fh - fch) / 2));
        let fshakeX = 0;
        if (st === 'damage' && DAMAGE_SHAKE) {
          const amp = 8 * Math.max(0, Math.min(1, fflashLeft));
          fshakeX = Math.round(Math.sin(Graphics.frameCount * SHAKE_FREQ) * amp);
        }
        const fctx = this.contents.context;
        fctx.save();
        fctx.beginPath();
        fctx.rect(frect.x, frect.y, frect.width, frect.height);
        fctx.clip();
        if (faceTone) fctx.filter = faceTone;
        fctx.globalCompositeOperation = 'source-over';
        fctx.drawImage(
          faceBmp.canvas,
          fsx,
          fsy,
          fcw,
          fch,
          frect.x + fshakeX,
          frect.y,
          frect.width,
          frect.height,
        );
        fctx.restore();
        const faceTex = this.contents._baseTexture;
        if (faceTex && typeof faceTex.update === 'function') faceTex.update();
        return;
      }
      const bitmap = ImageManager.loadPicture(name);
      if (!bitmap.isReady()) {
        bitmap.addLoadListener(() => {
          if (this.redrawItem) this.redrawItem(index);
        });
        return;
      }
      const rect = this.itemRect(index);
      const sw = bitmap.width;
      const sh = bitmap.height;
      if (sw <= 0 || sh <= 0) return;
      const scale = Math.max(rect.width / sw, rect.height / sh);
      let zoom = 1;
      const flash = actor ? actor._wspFaceFlash : null;
      const flashLeft =
        flash && flash.until > Graphics.frameCount
          ? (flash.until - Graphics.frameCount) / Math.max(1, flash.total || 60)
          : 0;
      if (st === 'attack' && ATTACK_ZOOM) {
        const p = Math.max(0, Math.min(1, flashLeft));
        const tri = p > 0.5 ? (1 - p) * 2 : p * 2;
        zoom = 1 + 0.18 * tri;
      }
      const cw = Math.max(1, Math.floor(rect.width / (scale * zoom)));
      const ch = Math.max(1, Math.floor(rect.height / (scale * zoom)));
      const off = offsets[id] || {};
      const ox = Math.round((typeof off.x === 'number' ? off.x : 0) / scale);
      const oy = Math.round((typeof off.y === 'number' ? off.y : 0) / scale);
      const sx = Math.min(Math.max(0, Math.floor((sw - cw) / 2) - ox), Math.max(0, sw - cw));
      const sy = Math.min(Math.max(0, Math.floor((sh - ch) / 2) - oy), Math.max(0, sh - ch));
      let shakeX = 0;
      if (st === 'damage' && DAMAGE_SHAKE) {
        const amp = 8 * Math.max(0, Math.min(1, flashLeft));
        shakeX = Math.round(Math.sin(Graphics.frameCount * SHAKE_FREQ) * amp);
      }
      const ctx = this.contents.context;
      const filter = variant && variant.tone ? TONE_FILTERS[variant.tone] : null;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rect.x, rect.y, rect.width, rect.height);
      ctx.clip();
      if (filter) ctx.filter = filter;
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(
        bitmap.canvas,
        sx,
        sy,
        cw,
        ch,
        rect.x + shakeX,
        rect.y,
        rect.width,
        rect.height,
      );
      ctx.restore();
      const baseTexture = this.contents._baseTexture;
      if (baseTexture && typeof baseTexture.update === 'function') baseTexture.update();
    };
  }

  function readEnemySelHidden() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    return !!(params && params.ws_battleEnemySelHidden === 'true');
  }
  WsbMenu._enemySelHidden = readEnemySelHidden();

  if (!WSB_YIELD_BATTLE && WsbMenu._enemySelHidden && typeof Scene_Battle !== 'undefined') {
    const _wsp_SB_createEnemyWindow_hide = Scene_Battle.prototype.createEnemyWindow;
    Scene_Battle.prototype.createEnemyWindow = function () {
      _wsp_SB_createEnemyWindow_hide.call(this);
      const w = this._enemyWindow;
      if (w) w.y = Graphics.boxHeight + 48;
    };
  }

  function readMenuStatusHidden() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    return !!(params && params.ws_menuStatusHidden === 'true');
  }
  WsbMenu._menuStatusHidden = readMenuStatusHidden();

  function wsbReadFlag(key) {
    const params = PluginManager.parameters(PLUGIN_NAME);
    return !!(params && params[key] === 'true');
  }
  WsbMenu._battleLogHidden = wsbReadFlag('ws_battleLogHidden');
  WsbMenu._enemySelKeepStatus = wsbReadFlag('ws_battleEnemySelKeepStatus');
  WsbMenu._actorDmgPopup = wsbReadFlag('ws_battleActorDmgPopup');
  WsbMenu._frontActorAnim = wsbReadFlag('ws_battleActorAnim');

  if (!WSB_YIELD_BATTLE && WsbMenu._battleLogHidden && typeof Window_BattleLog !== 'undefined') {
    const _wsp_Window_BattleLog_update = Window_BattleLog.prototype.update;
    Window_BattleLog.prototype.update = function () {
      _wsp_Window_BattleLog_update.call(this);
      this.visible = false;
    };
  }

  if (!WSB_YIELD_BATTLE && WsbMenu._enemySelKeepStatus && typeof Scene_Battle !== 'undefined') {
    const _wsp_SB_startEnemySelection_keep = Scene_Battle.prototype.startEnemySelection;
    Scene_Battle.prototype.startEnemySelection = function () {
      _wsp_SB_startEnemySelection_keep.call(this);
      if (this._statusWindow) this._statusWindow.show();
    };
  }

  if (!WSB_YIELD_BATTLE && WsbMenu._actorDmgPopup && typeof Spriteset_Battle !== 'undefined') {

    const _wsp_Spriteset_Battle_update_dmg = Spriteset_Battle.prototype.update;
    Spriteset_Battle.prototype.update = function () {
      if (!$gameSystem.isSideView()) {
        const scene = SceneManager._scene;
        const win = scene ? scene._statusWindow : null;
        if (win) {
          const members = $gameParty.battleMembers();
          for (let i = 0; i < members.length; i++) {
            const actor = members[i];
            if (!actor.isDamagePopupRequested()) continue;
            const rect = win.itemRect(i);
            const sprite = new Sprite_Damage();
            sprite.x = win.x + win.padding + rect.x + rect.width / 2;
            sprite.y = win.y + win.padding + rect.y + rect.height / 2;
            sprite.setup(actor);
            if (!this._wsbActorDmgPopups) this._wsbActorDmgPopups = [];
            this._wsbActorDmgPopups.push(sprite);
            scene.addChild(sprite);
            actor.clearDamagePopup();
            actor.clearResult();
          }
        }
      }
      _wsp_Spriteset_Battle_update_dmg.call(this);
      const list = this._wsbActorDmgPopups;
      if (list && list.length > 0) {
        for (let i = list.length - 1; i >= 0; i--) {
          if (!list[i].isPlaying()) {
            if (list[i].parent) list[i].parent.removeChild(list[i]);
            list[i].destroy();
            list.splice(i, 1);
          }
        }
      }
    };
  }

  if (!WSB_YIELD_BATTLE && WsbMenu._frontActorAnim && typeof Spriteset_Battle !== 'undefined') {

    const _wsp_SB_findTargetSprite_anim = Spriteset_Battle.prototype.findTargetSprite;
    Spriteset_Battle.prototype.findTargetSprite = function (target) {
      try {
        if (
          !$gameSystem.isSideView() &&
          target &&
          typeof target.isActor === 'function' &&
          target.isActor()
        ) {
          const proxy = this._wsbActorAnimProxy(target);
          if (proxy) return proxy;
        }
      } catch (e) {

      }
      return _wsp_SB_findTargetSprite_anim.call(this, target);
    };
    Spriteset_Battle.prototype._wsbActorAnimProxy = function (actor) {
      const members = $gameParty.battleMembers();
      const idx = members.indexOf(actor);
      if (idx < 0) return null;
      if (!this._wsbActorAnimProxies) this._wsbActorAnimProxies = {};
      let proxy = this._wsbActorAnimProxies[idx];
      if (!proxy) {
        proxy = typeof Sprite_Battler !== 'undefined' ? new Sprite_Battler() : new Sprite();
        proxy.width = 0;
        proxy.height = 0;
        this._wsbActorAnimProxies[idx] = proxy;
        this.addChild(proxy);
      }
      this._wsbPositionActorAnimProxy(proxy, idx);
      return proxy;
    };
    Spriteset_Battle.prototype._wsbPositionActorAnimProxy = function (proxy, idx) {
      const scene = SceneManager._scene;
      const win = scene ? scene._statusWindow : null;
      if (!win || typeof win.itemRect !== 'function') return;
      const rect = win.itemRect(idx);
      const pad = win.padding || 0;
      const px = win.x + pad + rect.x + rect.width / 2;
      const py = win.y + pad + rect.y + rect.height / 2;
      if (typeof proxy.setHome === 'function') {
        proxy.setHome(px, py);
      } else {
        proxy.x = px;
        proxy.y = py;
      }
    };

    const wsbAnimTargetsActor = (targets) => {
      if (!targets) return false;
      for (let i = 0; i < targets.length; i++) {
        const tg = targets[i];
        if (tg && typeof tg.isActor === 'function' && tg.isActor()) return true;
      }
      return false;
    };
    const wsbActorAnimOverlay = () => {
      const scene = SceneManager._scene;
      if (!scene) return null;
      if (!scene._wsbActorAnimOverlay || !scene._wsbActorAnimOverlay.parent) {
        scene._wsbActorAnimOverlay = new Sprite();
        scene.addChild(scene._wsbActorAnimOverlay);
      }
      return scene._wsbActorAnimOverlay;
    };

    const wsbActorAnimFitScale = (targets) => {
      try {
        const scene = SceneManager._scene;
        const win = scene ? scene._statusWindow : null;
        if (!win || typeof win.itemRect !== 'function') return 1;
        const members = $gameParty.battleMembers();
        let idx = -1;
        for (let i = 0; i < targets.length; i++) {
          const ti = members.indexOf(targets[i]);
          if (ti >= 0) { idx = ti; break; }
        }
        if (idx < 0) return 1;
        const rect = win.itemRect(idx);
        let k = Math.min(rect.width / 192, rect.height / 192);
        if (k > 1) k = 1;
        if (k < 0.25) k = 0.25;
        return k;
      } catch (e) {
        return 1;
      }
    };
    const _wsp_SB_createAnimationSprite_anim = Spriteset_Battle.prototype.createAnimationSprite;
    Spriteset_Battle.prototype.createAnimationSprite = function (targets, animation, mirror, delay) {
      _wsp_SB_createAnimationSprite_anim.call(this, targets, animation, mirror, delay);
      try {
        if (!$gameSystem.isSideView() && wsbAnimTargetsActor(targets)) {
          const overlay = wsbActorAnimOverlay();
          const sprite = this._animationSprites[this._animationSprites.length - 1];
          if (overlay && sprite) {
            overlay.addChild(sprite);
            const k = wsbActorAnimFitScale(targets);
            if (k && k !== 1) {
              if (sprite.scale && typeof sprite.scale.x === 'number') { sprite.scale.x = k; sprite.scale.y = k; }
              sprite._wsbFitScale = k;
            }
          }
        }
      } catch (e) {

      }
    };
    const _wsp_SB_removeAnimation_anim = Spriteset_Battle.prototype.removeAnimation;
    Spriteset_Battle.prototype.removeAnimation = function (sprite) {
      try {
        if (sprite && sprite.parent && sprite.parent !== this._effectsContainer) {
          sprite.parent.removeChild(sprite);
        }
      } catch (e) {

      }
      _wsp_SB_removeAnimation_anim.call(this, sprite);
    };

    if (typeof Sprite_Animation !== 'undefined' && Sprite_Animation.prototype && typeof Sprite_Animation.prototype.updateEffectGeometry === 'function') {
      const _wsp_Sprite_Animation_uEG = Sprite_Animation.prototype.updateEffectGeometry;
      Sprite_Animation.prototype.updateEffectGeometry = function () {
        _wsp_Sprite_Animation_uEG.call(this);
        try {
          if (this._wsbFitScale && this._handle && this._animation) {
            const s = (this._animation.scale / 100) * this._wsbFitScale;
            this._handle.setScale(s, s, s);
          }
        } catch (e) {

        }
      };
    }
    const _wsp_SB_update_anim = Spriteset_Battle.prototype.update;
    Spriteset_Battle.prototype.update = function () {
      _wsp_SB_update_anim.call(this);
      try {
        if (!$gameSystem.isSideView() && this._wsbActorAnimProxies) {
          const members = $gameParty.battleMembers();
          Object.keys(this._wsbActorAnimProxies).forEach((k) => {
            const idx = Number(k);
            if (idx >= 0 && idx < members.length) {
              this._wsbPositionActorAnimProxy(this._wsbActorAnimProxies[k], idx);
            }
          });
        }
      } catch (e) {

      }
    };
  }

  function readBattleSkillNameWindow() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw =
      params && params.ws_battleSkillNameWindow ? params.ws_battleSkillNameWindow : '{}';
    try {
      const obj = JSON.parse(raw);
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;
      const int = (v) => (typeof v === 'number' && isFinite(v) ? Math.round(v) : null);
      const w = int(obj.w);
      const h = int(obj.h);

      if (w === null || h === null) return null;
      const x = int(obj.x);
      const y = int(obj.y);
      const animObj =
        obj.anim && typeof obj.anim === 'object' && !Array.isArray(obj.anim) ? obj.anim : null;
      const anim =
        animObj && (animObj.enter || animObj.exit)
          ? { enter: animObj.enter || null, exit: animObj.exit || null }
          : null;
      return {
        x: x === null ? 228 : x,
        y: y === null ? 12 : y,
        w: Math.max(48, w),
        h: Math.max(32, h),
        skin: typeof obj.skin === 'string' && obj.skin ? obj.skin : null,
        bg: typeof obj.bg === 'number' ? obj.bg : 0,
        op: typeof obj.op === 'number' ? obj.op : null,
        pad: typeof obj.pad === 'number' ? obj.pad : null,
        scrollX: typeof obj.scrollX === 'number' ? obj.scrollX : 0,
        scrollY: typeof obj.scrollY === 'number' ? obj.scrollY : 0,
        bl: obj.bl && typeof obj.bl === 'object' ? obj.bl : null,
        anim: anim,
      };
    } catch (e) {
      console.error('[WindowsetMenu] ws_battleSkillNameWindow parse error', e);
      return null;
    }
  }
  WsbMenu._battleSkillNameWindow = readBattleSkillNameWindow();

  if (
    !WSB_YIELD_BATTLE &&
    WsbMenu._battleLogHidden &&
    WsbMenu._battleSkillNameWindow &&
    typeof Window_BattleLog !== 'undefined' &&
    typeof Scene_Battle !== 'undefined'
  ) {
    const SKILL_WIN_RECT = WsbMenu._battleSkillNameWindow;

    class Window_WsbSkillName extends Window_Base {
      initialize(rect) {
        super.initialize(rect);
        this._wsbText = '';
        this._wsbFrame = 0;
        if (SKILL_WIN_RECT.skin) {
          this.windowskin = ImageManager.loadSystem(SKILL_WIN_RECT.skin);
        }
        this.setBackgroundType(SKILL_WIN_RECT.bg || 0);
        if (typeof SKILL_WIN_RECT.op === 'number') {
          const _op = Math.max(0, Math.min(1, SKILL_WIN_RECT.op));
          this.opacity = Math.round(255 * _op);
          this.backOpacity = Math.round(192 * _op);
          this.contentsOpacity = Math.round(255 * _op);
        }
        if (SKILL_WIN_RECT.bl && typeof wsbCreateBackLayer === 'function') {
          this._wsbBackLayer = wsbCreateBackLayer(this, SKILL_WIN_RECT.bl);
          if (typeof this.addChildAt === 'function') this.addChildAt(this._wsbBackLayer, 0);
          wsbApplyBackLayer(this, 0);
        }
        if (typeof wsbSetScroll === 'function') {
          wsbSetScroll(this, SKILL_WIN_RECT.scrollX, SKILL_WIN_RECT.scrollY);
        }

        this._wsbAnim = SKILL_WIN_RECT.anim || null;
        this._wsbBaseX = this.x;
        this._wsbBaseY = this.y;
        this._wsbRestAlpha = 1;
        this._wsbExiting = false;
        this.hide();
      }
      updatePadding() {
        this.padding =
          typeof SKILL_WIN_RECT.pad === 'number' ? SKILL_WIN_RECT.pad : $gameSystem.windowPadding();
      }
      wsbSetText(text) {
        const t = text == null ? '' : String(text);
        if (t === '') {
          this.wsbClear();
          return;
        }
        if (t === this._wsbText && this.visible && !this._wsbExiting) return;
        this._wsbText = t;
        this.contents.clear();
        this.resetFontSettings();
        this.drawText(t, 0, 0, this.contentsWidth(), 'center');
        this._wsbExiting = false;
        this._wsbEnterStart = Graphics.frameCount;
        this.show();
        this.alpha = this._wsbRestAlpha;
      }
      wsbClear() {
        this._wsbText = '';
        if (this._wsbAnim && this._wsbAnim.exit && this.visible) {

          this._wsbExiting = true;
          this._wsbExitStart = Graphics.frameCount;
        } else {
          this._wsbExiting = false;
          this.contents.clear();
          this.hide();
        }
      }
      update() {
        super.update();
        this._wsbFrame = (this._wsbFrame || 0) + 1;
        if (this._wsbBackLayer && typeof wsbApplyBackLayer === 'function') {
          wsbApplyBackLayer(this, this._wsbFrame);
        }
        if (this._wsbAnim && (this.visible || this._wsbExiting)) {
          wsbApplyWindowAnim(this, Graphics.frameCount);
          if (this._wsbExiting && this._wsbAnim.exit) {
            const xe = this._wsbAnim.exit;
            const xdur = xe.dur && xe.dur > 0 ? xe.dur : 18;
            const xdelay = xe.delay && xe.delay > 0 ? xe.delay : 0;
            if (Graphics.frameCount - this._wsbExitStart - xdelay >= xdur) {
              this._wsbExiting = false;
              this.contents.clear();
              this.hide();
              this.alpha = this._wsbRestAlpha;
              this.x = this._wsbBaseX;
              this.y = this._wsbBaseY;
              if (this.scale) this.scale.set(1, 1);
            }
          }
        }
      }
    }
    WsbMenu.Window_WsbSkillName = Window_WsbSkillName;

    const wsbSkillNameWindow = () => {
      const scene = SceneManager._scene;
      if (!scene || !(scene instanceof Scene_Battle)) return null;
      const w = scene._wsbSkillNameWindow;
      return w && typeof w.wsbSetText === 'function' ? w : null;
    };

    const _wsp_SB_createAllWindows_skill = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function () {
      _wsp_SB_createAllWindows_skill.call(this);
      const rect = new Rectangle(SKILL_WIN_RECT.x, SKILL_WIN_RECT.y, SKILL_WIN_RECT.w, SKILL_WIN_RECT.h);
      this._wsbSkillNameWindow = new Window_WsbSkillName(rect);
      this.addWindow(this._wsbSkillNameWindow);
    };

    const _wsp_WBL_displayAction_skill = Window_BattleLog.prototype.displayAction;
    Window_BattleLog.prototype.displayAction = function (subject, item) {
      _wsp_WBL_displayAction_skill.call(this, subject, item);
      const w = wsbSkillNameWindow();
      if (w && item && item.name) w.wsbSetText(item.name);
    };

    const _wsp_WBL_clear_skill = Window_BattleLog.prototype.clear;
    Window_BattleLog.prototype.clear = function () {
      _wsp_WBL_clear_skill.call(this);
      const w = wsbSkillNameWindow();
      if (w) w.wsbClear();
    };
  }

  if (
    WsbMenu._menuStatusHidden &&
    !WSB_YIELD_MAINMENU &&
    !WSB_YIELD_PARTY &&
    typeof Scene_Menu !== 'undefined'
  ) {
    const _wsp_Scene_Menu_createStatusWindow = Scene_Menu.prototype.createStatusWindow;
    Scene_Menu.prototype.createStatusWindow = function () {
      _wsp_Scene_Menu_createStatusWindow.call(this);
      if (this._statusWindow) {
        this._statusWindow.hide();
        this._statusWindow.deactivate();
      }
    };

    Scene_Menu.prototype.commandPersonal = function () {
      const leader = $gameParty.menuActor() || $gameParty.members()[0];
      if (leader) $gameParty.setMenuActor(leader);
      this.onPersonalOk();
      this._commandWindow.activate();
    };

    Scene_Menu.prototype.commandFormation = function () {
      this._commandWindow.activate();
    };
  }

  const _wsp_Scene_Map_callMenu = Scene_Map.prototype.callMenu;
  Scene_Map.prototype.callMenu = function () {
    const rep = WsbMenu._replaceScene();
    const Klass = rep ? WsbMenu._scenes[rep.symbol] : null;
    if (Klass) {
      SoundManager.playOk();
      SceneManager.push(Klass);
      Window_MenuCommand.initCommandPosition();
      $gameTemp.clearDestination();
      if (this._mapNameWindow) this._mapNameWindow.hide();
      this._waitCount = 2;
      return;
    }
    _wsp_Scene_Map_callMenu.call(this);
  };

  function readHud() {
    const params = PluginManager.parameters(PLUGIN_NAME);
    const raw = params && params.ws_hud ? params.ws_hud : '[]';
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('[WindowsetMenu] ws_hud parse error', e);
      return [];
    }
  }

  class Window_WsbHud extends Window_Base {
    initialize(rect, param) {
      this._wsbParam = param || {};
      super.initialize(rect);
      this._wsbCount = 0;
      this._wsbFrame = 0;
      this._wsbSkinReady = false;
      if (this._wsbParam.skin) {
        this.windowskin = ImageManager.loadSystem(this._wsbParam.skin);
      }
      this.setBackgroundType(this._wsbParam.bg || 0);
      if (typeof this._wsbParam.op === 'number') {
        var _op = Math.max(0, Math.min(1, this._wsbParam.op));
        this.opacity = Math.round(255 * _op);
        this.backOpacity = Math.round(192 * _op);
        this.contentsOpacity = Math.round(255 * _op);
      }
      if (this._wsbParam.tone && typeof this.setTone === 'function') {
        const wsbTone = [
          this._wsbParam.tone[0] || 0,
          this._wsbParam.tone[1] || 0,
          this._wsbParam.tone[2] || 0,
        ];
        this.updateTone = function () {
          const st =
            typeof $gameSystem !== 'undefined' && $gameSystem && $gameSystem.windowTone
              ? $gameSystem.windowTone()
              : [0, 0, 0];
          const cl = (v) => (v < -255 ? -255 : v > 255 ? 255 : v);
          this.setTone(
            cl((st[0] || 0) + wsbTone[0]),
            cl((st[1] || 0) + wsbTone[1]),
            cl((st[2] || 0) + wsbTone[2]),
          );
        };
        this.updateTone();
      }
      if (this._wsbParam.bl) {
        this._wsbBackLayerParam = this._wsbParam.bl;
        this._wsbBackLayer = wsbCreateBackLayer(this, this._wsbParam.bl);
        if (typeof this.addChildAt === 'function') this.addChildAt(this._wsbBackLayer, 0);
        wsbApplyBackLayer(this, 0);
      }
      wsbSetScroll(this, this._wsbParam.scrollX, this._wsbParam.scrollY);
      this.refresh();
    }
    updatePadding() {
      this.padding =
        this._wsbParam && typeof this._wsbParam.pad === 'number'
          ? this._wsbParam.pad
          : $gameSystem.windowPadding();
    }
    refresh() {
      this.contents.clear();
      const lines = this._wsbParam.lines || [];
      const lh = this.lineHeight();
      for (let i = 0; i < lines.length; i++) {
        this.drawTextEx(this.wsbExpand(String(lines[i])), 0, i * lh, this.contentsWidth());
      }
    }
    wsbExpand(s) {
      const gold = typeof $gameParty !== 'undefined' && $gameParty ? $gameParty.gold() : 0;
      const steps = typeof $gameParty !== 'undefined' && $gameParty ? $gameParty.steps() : 0;
      const mapName =
        typeof $gameMap !== 'undefined' && $gameMap && $gameMap.displayName
          ? $gameMap.displayName() || ''
          : '';
      return s
        .replace(/\\WG/g, String(gold))
        .replace(/\\WS/g, String(steps))
        .replace(/\\WM/g, mapName);
    }
    update() {
      super.update();
      this._wsbFrame = (this._wsbFrame || 0) + 1;
      if (this._wsbBackLayer) wsbApplyBackLayer(this, this._wsbFrame);
      if (
        this._wsbParam.skin &&
        !this._wsbSkinReady &&
        this.windowskin &&
        this.windowskin.isReady()
      ) {
        this._wsbSkinReady = true;
        this._refreshAllParts();
      }
      const sw = this._wsbParam.sw;
      this.visible = !sw || $gameSwitches.value(sw);
      if (!this.visible) return;
      const rf = this._wsbParam.rf === undefined ? 20 : this._wsbParam.rf;
      if (rf > 0 && ++this._wsbCount >= rf) {
        this._wsbCount = 0;
        this.refresh();
      }
    }
  }
  WsbMenu.Window_WsbHud = Window_WsbHud;

  const _wsp_Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
  Scene_Map.prototype.createAllWindows = function () {
    _wsp_Scene_Map_createAllWindows.call(this);
    readHud().forEach((p) => {
      const rect = new Rectangle(p.x || 0, p.y || 0, p.w || 8, p.h || 8);
      this.addWindow(new Window_WsbHud(rect, p));
    });
  };
})();
