// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kGzdC":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4c88c603fbcf9e10";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8R4iA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _constantsJs = require("./constants.js");
var _constantsJsDefault = parcelHelpers.interopDefault(_constantsJs);
"use strict";
/* theme effects */ const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
mediaQueryList.addEventListener("change", (0, _utilsJsDefault.default).checkTheme);
(0, _utilsJsDefault.default).checkTheme(mediaQueryList);
/* --- */ /* load effects */ const html = document.getElementsByTagName("html")[0];
const loadingScreen = document.getElementById("loading-screen");
const aside = document.getElementsByTagName("aside")[0];
const introText = document.getElementsByClassName("intro-text");
window.onload = async function() {
    let performanceData = performance.getEntriesByType("navigation")[0];
    let loadTime = performanceData.loadEventEnd - performanceData.startTime;
    // Wait for 1 second if the loading time is less than 1 second
    if (loadTime < 1000) await new Promise((resolve)=>setTimeout(resolve, 1000));
    console.log("Loading complete!");
    const homeSimpleIntroText1 = "My Name is [Yunseok Jang]~";
    const homeSimpleIntroText2 = "I'm a Full Stack Engineer.";
    async function displayText(text, order) {
        introText[order].style.animation = "fadeIn 1s ease-in-out";
        introText[order].style.setProperty("--intro-text-content", "'|'");
        await (0, _utilsJsDefault.default).typeText(introText[order], text, (0, _constantsJsDefault.default).TYPE_TEXT_DELAY);
        order === 2 ? introText[order].style.setProperty("--cursor-animation", "blinkTypingCursor 1s step-end infinite") : introText[order].style.setProperty("--intro-text-content", "''");
    }
    setTimeout(async ()=>{
        loadingScreen.style.display = "none";
        await displayText(homeSimpleIntroText1, 1);
        await displayText(homeSimpleIntroText2, 2);
    }, [
        (0, _constantsJsDefault.default).LOADING_SCREEN_DELAY
    ]);
    loadingScreen.style.opacity = 0;
    html.style.overflowY = "auto";
    aside.style.animation = "slideLeft 1.5s ease-in-out";
    introText[0].style.animation = "slideUp 1s ease-in-out";
/* Animation */ // const projectsTextElement = document.querySelector("#projects > article > .projects-text");
// const projectsText = "coming soon".toUpperCase();
// for (let i = 0; i < projectsText.length; i++) {
//   const divEl = document.createElement("span");
//   divEl.textContent = projectsText[i];
//   Object.assign(divEl.style, {
//     display: "inline-block",
//     animation: `1s wave ${i * 0.08}s ease-in-out infinite`,
//   });
//   projectsTextElement.appendChild(divEl);
// }
};
/* --- */ /* scroll effects */ const sections = document.querySelectorAll("main > section");
const asideLinks = Array.from(document.getElementsByClassName("link"));
const tablinks = Array.from(document.getElementsByClassName("tablink"));
const tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
const isFadeInOnce = {
    about: false,
    experience: false,
    projects: false,
    contact: false
};
let transitioningTabContentName = "";
let TransitioningWaitingTabContent = ()=>{};
window.addEventListener("scroll", function() {
    sections.forEach((section, order)=>{
        (0, _utilsJsDefault.default).toggleActiveState(section, {
            asideLinks: asideLinks,
            tablinks: {
                tablinks,
                tabcontents
            },
            isFadeInOnce
        }, order);
    });
});
/* --- */ /* click effects */ tablinks.forEach((elTablink)=>{
    elTablink.addEventListener("click", (e)=>{
        const isAlreadyActive = e.target.classList.contains("active");
        if (isAlreadyActive) return;
        clearTimeout(TransitioningWaitingTabContent); //reset timeout
        tablinks.forEach((el)=>{
            el.classList.toggle("active", el.getAttribute("name") === e.target.name);
        });
        if (transitioningTabContentName === e.target.name) {
            tabcontents.forEach((el)=>{
                if (el.getAttribute("name") === transitioningTabContentName) {
                    el.classList.add("active");
                    el.style.maxHeight = `${el.scrollHeight}px`;
                } else el.classList.remove("active");
            });
            transitioningTabContentName = "";
        } else tabcontents.forEach((el)=>{
            const elName = el.getAttribute("name");
            if (el.classList.contains("active")) {
                el.classList.remove("active");
                transitioningTabContentName = elName;
                el.style.maxHeight = `0`;
            }
            if (elName === e.target.name) {
                el.classList.add("active");
                TransitioningWaitingTabContent = setTimeout(()=>{
                    transitioningTabContentName = "";
                    el.style.maxHeight = `${el.scrollHeight}px`;
                }, 500);
            }
        });
    });
});
const navSideButton = document.getElementById("nav-aside-button");
window.addEventListener("click", (e)=>{
    if (!aside.querySelector("#nav-aside-container").contains(e.target) && !aside.querySelector("#nav-aside-button").contains(e.target)) {
        navSideButton.classList.remove("active");
        aside.style.width = "0";
    }
});
navSideButton.addEventListener("click", (e)=>{
    if (navSideButton.classList.contains("active")) aside.style.width = "0";
    else aside.style.width = "100%";
    navSideButton.classList.toggle("active");
});
/* --- */ /* hover effects */ const logos = Array.from(document.getElementsByClassName("logo"));
logos.forEach((logo)=>{
    logo.addEventListener("mousemove", (e)=>{
        const { width, height } = e.target.getBoundingClientRect();
        logo.style = `transform: perspective(200px) rotateX(${Math.round(-40 / height * e.offsetY + 20)}deg) rotateY(${Math.round(40 / width * e.offsetX - 20)}deg)`;
    });
    logo.addEventListener("mouseout", (e)=>{
        e.target.style = `transform: rotate(0)`;
    });
}); /* --- */ 

},{"./utils.js":"en4he","./constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"en4he":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
var _constantsJsDefault = parcelHelpers.interopDefault(_constantsJs);
"use strict";
const utils = {
    checkTheme (e) {
        let themeColor = "light";
        if (e.matches) themeColor = "dark";
        console.log(`Your system theme is ${themeColor}!`);
    },
    async typeText (element, text, delay) {
        let currentElement = element;
        for(let i = 0; i < text.length; i++){
            await new Promise((resolve)=>setTimeout(resolve, delay));
            let t = text[i];
            if (t === "[") {
                let strongElement = document.createElement("strong");
                currentElement = element.appendChild(strongElement);
                t = "";
            } else if (t === "]") {
                currentElement = element;
                t = "";
            } else if (t === "~") t = "\uD83C\uDFB6";
            currentElement.innerHTML += t;
        }
    },
    checkScrollOffsetReached (target, scrollY, offestPercenTage) {
        const offsetThreshold = window.innerHeight * offestPercenTage;
        const sectionTop = target.offsetTop;
        const sectionHeight = target.offsetHeight;
        return scrollY >= sectionTop - offsetThreshold && scrollY < sectionTop + sectionHeight - offsetThreshold;
    },
    toggleActiveState (detectionTarget = {}, changeTarget = {}, order = 0) {
        const scrollY = window.scrollY;
        const isActive = this.checkScrollOffsetReached(detectionTarget, scrollY, (0, _constantsJsDefault.default).OFFSET_PERCENTAGE20);
        changeTarget.asideLinks[order].classList.toggle("active", isActive);
        if (isActive) {
            if (order === 0) {
                // main > <section #home>
                const fontEffect = detectionTarget.getElementsByClassName("intro-text");
                Array.from(fontEffect)[1].style.transform = `translateX(${scrollY}px)`;
                Array.from(fontEffect)[2].style.transform = `translateX(-${scrollY}px)`;
                detectionTarget.style.animationPlayState = "running";
            }
        } else detectionTarget.style.animationPlayState = "paused";
        const isEveryAnimationActive = !Object.values(changeTarget.isFadeInOnce).some((value)=>value === false);
        if (isEveryAnimationActive || !this.checkScrollOffsetReached(detectionTarget, scrollY, (0, _constantsJsDefault.default).OFFSET_PERCENTAGE70)) return;
        if (!changeTarget.isFadeInOnce.about && order === 1) {
            // main > <section #about>
            const profileTexts = Array.from(detectionTarget.querySelectorAll(".profile-text > p"));
            const profilePhoto = detectionTarget.querySelector(".profile-photo");
            profilePhoto.style.animation = `1s slideUp ease-in-out forwards`;
            profileTexts.forEach((el, i)=>{
                el.style.animation = `1s slideRight ${i * 0.5}s ease-in-out forwards`;
            });
            const firstTab = 0;
            changeTarget.tablinks.tablinks[firstTab].classList.add("active");
            changeTarget.tablinks.tabcontents[firstTab].classList.add("active");
            changeTarget.tablinks.tabcontents[firstTab].style.maxHeight = changeTarget.tablinks.tabcontents[firstTab].scrollHeight + "px";
            changeTarget.isFadeInOnce.about = true;
        }
        if (!changeTarget.isFadeInOnce.experience && order === 2) {
            // main > <section #experience>
            Array.from(detectionTarget.querySelectorAll("accordion-component")).forEach((el)=>{
                el.animateFadeIn();
            });
            changeTarget.isFadeInOnce.experience = true;
        }
        if (!changeTarget.isFadeInOnce.projects && order === 3) {
            // main > <section #projects>
            Array.from(detectionTarget.querySelectorAll("modal-component")).forEach((el)=>{
                el.animateFadeIn();
            });
            changeTarget.isFadeInOnce.projects = true;
        }
        if (!changeTarget.isFadeInOnce.contact && order === 4) {
            // main > <section #contact>
            Array.from(detectionTarget.querySelectorAll("#contact > article > nav > ul > li")).forEach((el, i)=>el.style.animation = `1s ${i % 2 === 0 ? "slideRight" : "slideLeft"} ${i * 0.5}s ease-in-out forwards`);
            changeTarget.isFadeInOnce.contact = true;
        }
    }
};
exports.default = utils;

},{"./constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3huJa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const constants = {
    LOADING_SCREEN_DELAY: 1000,
    TYPE_TEXT_DELAY: 70,
    OFFSET_PERCENTAGE20: 0.2,
    OFFSET_PERCENTAGE50: 0.5,
    OFFSET_PERCENTAGE70: 0.7
};
exports.default = constants;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["kGzdC","8R4iA"], "8R4iA", "parcelRequire94c2")

//# sourceMappingURL=index.fbcf9e10.js.map
