import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { B as da, E as Ua, G as init_icons_wGoYEurg, H as ga, J as la, V as fa, Y as ls, _ as Ki, a as B$1, ct as ua, ht as ya, j as Wa, lt as us, m as Gi, mt as xi, nt as pn, o as Bo, st as ts, t as $$1, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as init_consts_CUwyMiZU, l as t, u } from "./consts-CUwyMiZU-idb3fN8k.js";
import { d as init_dom_utils_Culwf8PO, n as D, u as g } from "./dom-utils-Culwf8PO-ClMzWnIW.js";
import { i as n, o as t$1, r as init_copilot_ui_state_Dc6l_5DA } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { a as l, c as u$1, i as init_stats_rEPv3bOZ, n as c } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
import { f as init_copilot_error_handler_sDuOm7hQ, o as I$1, t as $$2 } from "./copilot-error-handler-sDuOm7hQ-DXZIpLPg.js";
import { a as P, i as N, o as init_copilot_tree_impl_B7N3W4b1, s as te, t as $$3 } from "./copilot-tree-impl-B7N3W4b1-DXtBJvDg.js";
import { Aa as p, Oa as init_copilot_server_communicator_impl_CSFv_kGJ, ka as m } from "./generated-BXM-NgLv.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-global-vars-later-DfbfGJFA.js
function F(e, t$2) {
	I(e) ? (l("show-in-ide", {
		attach: t$2 ?? !1,
		goToCustomComponentFile: !0
	}), Ua(`${t}show-in-ide`, {
		javaClassName: e.className,
		fileName: e.absoluteFilePath
	})) : fa(e) ? (l("show-in-ide", { attach: t$2 ?? !1 }), Ua(`${t}show-in-ide`, {
		...ga(e),
		attach: t$2 ?? !1
	})) : (c("show-in-ide"), Ua(`${t}show-in-ide`, e));
}
function I(e) {
	return e === void 0 ? !1 : e.className === void 0 ? e.absoluteFilePath !== void 0 : !0;
}
function L(e) {
	if (!e.isReactComponent) return;
	let t = Gi(e.node);
	if (t) return t;
	let n = Ki(e.node);
	if (n) return n;
	let r = e.children.sort((e, t) => e.siblingIndex - t.siblingIndex).find((e) => e.isReactComponent && L(e) !== void 0);
	if (!r) throw Error(`Could not find the source of ${e.nameAndIdentifier}`);
	return Gi(r.node);
}
function z(e) {
	let t = document.createElement("div");
	document.body.innerHTML = "", document.body.appendChild(t), ts(e, t);
}
function B() {
	z(Bo`<div class="flex flex-col gap-4 h-screen items-center justify-center">
      <vaadin-icon class="animate-spin" .svg=${ls.progressActivity}></vaadin-icon>
      <h3 class="m-0">The files have been created</h3>
      <p class="m-0">Restart the server to load the new view</p>
      <p class="m-0"><small>The page will refresh automatically when the server is ready.</small></p>
    </div>`);
}
async function V() {
	let e = 1e3, t = 12e4, n = Date.now(), r = async () => {
		try {
			return (await fetch(globalThis.location.href, { method: "HEAD" })).ok;
		} catch {
			return !1;
		}
	}, i = !1;
	for (; Date.now() - n < t;) {
		if (!await r()) {
			i = !0;
			break;
		}
		await new Promise((t) => {
			setTimeout(t, e);
		});
	}
	for (; Date.now() - n < t;) {
		if (await r() && i) {
			sessionStorage.removeItem(G), globalThis.location.reload();
			return;
		}
		await new Promise((t) => {
			setTimeout(t, e);
		});
	}
}
function H(e) {
	z(Bo`<div class="flex flex-col gap-4 h-screen items-center justify-center">
      <vaadin-icon class="animate-spin" .svg=${ls.progressActivity}></vaadin-icon>
      <h3 class="m-0">Creating your ${e === "flow" ? "Flow" : "Hilla"} view...</h3>
    </div>`), ua("copilot-init-app", { framework: e }, async (e) => {
		if (e.data.success) sessionStorage.setItem(G, "true"), B(), V();
		else {
			let t = e.data.reason;
			I$1(t);
		}
	});
}
function U() {
	z(Bo`<div class="m-8">
      <h3>No views found</h3>
      <p>To get started, you can</p>
      <ul>
        <li>
          <a
            href="#"
            @click=${(e) => {
		e.preventDefault(), H("flow");
	}}
            >Create a Flow view using Copilot</a
          >
        </li>
        <li>
          Create a view manually in your IDE, see
          <a target="_blank" href="https://vaadin.com/docs/latest/tutorial">the tutorial</a>
        </li>
      </ul>
      <p>Learn more at <a target="_blank" href="https://vaadin.com/docs">https://vaadin.com/docs</a>.</p>
    </div>`);
}
function W() {
	sessionStorage.getItem(G) ? (B(), V()) : U();
}
function X(e) {
	let t = window.Vaadin.copilot.tree;
	return e.map((e) => {
		let n = null, { nodeUuid: r, treePath: i, childIndex: a } = e;
		if (r) {
			let e = t.findNodeByUuid(r);
			e && (n = e);
		}
		return n ||= t.findByTreePath(i) ?? null, n && a !== void 0 && n.children.length > a ? n.children[a] : n;
	}).filter((e) => e !== null);
}
var R, G, K, q, J, Y, Z, Q, ne, $;
function init_copilot_global_vars_later_DfbfGJFA() {
	return (init_copilot_global_vars_later_DfbfGJFA = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_consts_CUwyMiZU();
		init_dom_utils_Culwf8PO();
		init_copilot_tree_impl_B7N3W4b1();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_server_communicator_impl_CSFv_kGJ();
		init_stats_rEPv3bOZ();
		init_copilot_error_handler_sDuOm7hQ();
		R = o((() => {
			ya(), la(), u(), n(), Wa(), u$1(), t$1.on("show-in-ide", (e) => {
				let t = e.detail.node;
				if (e.detail.source) {
					F(e.detail.source);
					return;
				}
				if (e.detail.javaSource) {
					F(e.detail.javaSource);
					return;
				}
				if (!t) return;
				if (t.isFlowComponent) {
					F(t.node, e.detail.attach);
					return;
				}
				let n = L(t);
				n && F(n);
			});
		}));
		K = o((() => {
			da(), $$2(), us(), cs(), G = "vaadin.copilot.viewCreated";
		}));
		J = o((() => {
			n(), q = class {
				constructor(e) {
					this._currentTree = e;
				}
				get root() {
					return this.currentTree.root;
				}
				get allNodesFlat() {
					return this.currentTree.allNodesFlat;
				}
				getNodeOfElement(e) {
					return this.currentTree.getNodeOfElement(e);
				}
				getChildren(e) {
					return this.currentTree.getChildren(e);
				}
				hasFlowComponents() {
					return this.currentTree.hasFlowComponents();
				}
				findNodeByUuid(e) {
					return this.currentTree.findNodeByUuid(e);
				}
				getElementByNodeUuid(e) {
					return this.currentTree.getElementByNodeUuid(e);
				}
				findByTreePath(e) {
					return this.currentTree.findByTreePath(e);
				}
				get currentTree() {
					return this._currentTree;
				}
				set currentTree(e) {
					let t = this._currentTree;
					this._currentTree = e, t$1.emit("copilot-tree-created", {
						prev: t,
						curr: e
					});
				}
				get customComponentDataLoaded() {
					return this._currentTree.customComponentDataLoaded;
				}
			};
		}));
		Y = o((() => {
			n(), t$1.on("navigate", (e) => {
				let t = new URL(e.detail.path, document.baseURI), n = new CustomEvent("vaadin-router-go", {
					detail: t,
					cancelable: !0
				});
				if (!window.dispatchEvent(n)) return;
				let r = { ...window.history.state ?? {} };
				typeof r.idx == "number" && (r.idx += 1);
				let i = `${t.pathname}${t.search}${t.hash}`;
				window.history.pushState(r, "", i), window.dispatchEvent(new PopStateEvent("popstate", { state: r }));
			});
		}));
		Z = o((() => {}));
		ne = o((() => {
			cs(), us(), xi(), P(), Z(), D(), Q = class e {
				constructor() {
					this.drillDownComponentStack = [], pn(this, { drillDownComponentStack: B$1.shallow });
				}
				getCustomComponentIcon(e) {
					let t = this.getIconTag(e);
					return t === void 0 ? $$1 : ls[t];
				}
				getIconTag(e) {
					let t = this.getCustomComponentInfo(e)?.type;
					if (t === "IN_PROJECT") return "thermostatCarbon";
					if (t === "EXTERNAL") return "deployedCube";
				}
				getCustomComponentInfo(t) {
					if (t.customComponentData && e.isCustomComponentInstanceInfo(t.customComponentData)) return t.customComponentData;
				}
				isCustomComponent(e) {
					return this.getCustomComponentInfo(e) !== void 0;
				}
				isVisibleAndSelectable(e) {
					if (!this.getTree().customComponentDataLoaded) return !0;
					let t = this.getActiveDrillDownContext();
					if (!e.customComponentData) return e.isReactComponent && !e.parent && e.name === "App" && !t;
					if (e.uuid === t?.uuid) return !0;
					let n = this.getActiveDrillDownData(), r = e.customComponentData;
					if (!n?.filePath) {
						if (r) return !r.childOfCustomComponent;
					} else if (e.customComponentData) return this.checkNodeIsInDrillDownContext(r, n);
					else return !1;
					return !0;
				}
				pushDrillDownContext(e) {
					this.drillDownComponentStack.length > 0 && this.drillDownComponentStack[this.drillDownComponentStack.length - 1].uuid === e.uuid || (this.drillDownComponentStack.push(e), this.persistIntoStorage(), g(e));
				}
				isDrillDownContext(e) {
					return this.getActiveDrillDownContext()?.uuid === e.uuid;
				}
				getActiveDrillDownContext() {
					if (this.drillDownComponentStack.length !== 0) return this.resolveCurrentTreeNode(this.drillDownComponentStack[this.drillDownComponentStack.length - 1]);
				}
				clearDrillDownContext() {
					this.drillDownComponentStack = [], this.persistIntoStorage();
				}
				popDrillDownContext() {
					this.filterOutNonConnectedElementsFromDrillDownContextStack(), this.drillDownComponentStack.pop(), this.persistIntoStorage();
				}
				hasParentDrillDownContext() {
					return this.drillDownComponentStack.length > 1;
				}
				getParentDrillDownContext() {
					if (this.hasParentDrillDownContext()) return this.resolveCurrentTreeNode(this.drillDownComponentStack[this.drillDownComponentStack.length - 2]);
				}
				isChildInDrillContext(e) {
					let t = e.customComponentData;
					if (!t) return !0;
					let n = this.getActiveDrillDownData();
					return n ? this.checkNodeIsInDrillDownContext(t, n) : !1;
				}
				getActiveDrillDownData() {
					let e = this.getActiveDrillDownContext();
					if (e === void 0) return;
					let t = this.getCustomComponentInfo(e);
					if (!t?.javaClassName && !t?.reactMethodName) return;
					let n = e.node;
					return {
						className: t.javaClassName,
						methodName: t.reactMethodName,
						nodeId: n.nodeId,
						uiId: n.uiId,
						filePath: t.customComponentFilePath ?? void 0
					};
				}
				checkNodeIsInDrillDownContext(e, t) {
					return e.createLocationMethodName && t.methodName ? e.createLocationMethodName === t.methodName && t.filePath === e.createLocationPath : t.filePath === e.createLocationPath && t.className === e.createdClassName;
				}
				persistIntoStorage() {
					let e = this.drillDownComponentStack.map((e) => ({
						treePath: e.path,
						nodeUuid: e.uuid
					}));
					N.saveDrillDownContextReference(e);
				}
				restoreDrillDownFromStorage() {
					let t = N.getDrillDownContextReference(), n = [];
					if (t === void 0) {
						let t = this.getTree().allNodesFlat.find((e) => e.customComponentData?.routeView);
						t?.customComponentData && e.isCustomComponentInstanceInfo(t.customComponentData) && (n = [t]);
					} else n = X(t);
					n.forEach((e) => {
						let t = this.drillDownComponentStack.findIndex((t) => t.uuid === e.uuid);
						t !== -1 && this.drillDownComponentStack.splice(t, 1), this.drillDownComponentStack.push(e);
					});
					let r = this.drillDownComponentStack.filter((e) => !!this.getTree().findNodeByUuid(e.uuid));
					r.length !== this.drillDownComponentStack.length && (this.drillDownComponentStack = r, this.persistIntoStorage()), this.filterOutNonConnectedElementsFromDrillDownContextStack();
					let i = this.getActiveDrillDownContext();
					i && g(i);
				}
				areInternalsVisible(e) {
					if (!this.getCustomComponentInfo(e)) return !0;
					let t = this.getActiveDrillDownData(), n;
					return t && t.filePath && (n = t.filePath), n ? this.checkChildrenCreateLocationToDisplayInternals(e.children, n) : !1;
				}
				checkChildrenCreateLocationToDisplayInternals(e, t) {
					for (let n of e) {
						let e = n.customComponentData;
						if (e && e.createLocationPath === t || this.checkChildrenCreateLocationToDisplayInternals(n.children, t)) return !0;
					}
					return !1;
				}
				getDescendantsCreatedInActiveDrillDownContextFlatten(t) {
					if (t.customComponentData && e.isCustomComponentInstanceInfo(t.customComponentData)) {
						let e = this.getActiveDrillDownData(), n;
						if (e && e.filePath ? n = e.filePath : this.getRouteViewPath() && (n = this.getRouteViewPath()), n) return this.getChildrenInPathFlattenRecursively(t, n);
					}
					return [];
				}
				getChildrenInPathFlattenRecursively(e, t) {
					let n = e.children, r = [];
					for (let e of n) {
						let n = e.customComponentData;
						n && n.createLocationPath === t && r.push(e), r.push(...this.getChildrenInPathFlattenRecursively(e, t));
					}
					return r;
				}
				getTree() {
					return window.Vaadin.copilot.tree;
				}
				getRouteViewPath() {
					let e = this.getTree().allNodesFlat.find((e) => e.customComponentData?.routeView === !0);
					if (e) return e.customComponentData?.createLocationPath ?? void 0;
				}
				resolveCurrentTreeNode(e) {
					return this.getTree().findNodeByUuid(e.uuid) ?? this.getTree().findByTreePath(e.path) ?? e;
				}
				filterOutNonConnectedElementsFromDrillDownContextStack() {
					this.drillDownComponentStack = this.drillDownComponentStack.filter((e) => e.element === void 0 ? !0 : e.element.isConnected);
				}
				static isCustomComponentInstanceInfo(e) {
					return "type" in e && "activeLevel" in e;
				}
			};
		}));
		o((() => {
			R(), m(), K(), J(), Y(), te(), ne(), window.Vaadin.copilot.comm = p, $ = new $$3(), window.Vaadin.copilot.tree = new q($), window.Vaadin.copilot.customComponentHandler = new Q(), window.Vaadin.copilot.initEmptyApp = H, window.Vaadin.copilot.noRoutesInProject = W;
		}))();
	})))();
}
//#endregion
init_copilot_global_vars_later_DfbfGJFA();
