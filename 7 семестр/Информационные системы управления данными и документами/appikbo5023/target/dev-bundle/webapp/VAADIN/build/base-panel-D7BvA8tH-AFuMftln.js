import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { d as init_dom_utils_Culwf8PO, n as D, r as E } from "./dom-utils-Culwf8PO-ClMzWnIW.js";
import { i as n, o as t, r as init_copilot_ui_state_Dc6l_5DA } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { a as V, c as init_section_panel_ui_state_Dbt9i_HL, f as z, i as R, t as B } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { h as k, l as R$1, o as M, p as init_copilot_unsaved_operation_coordinator_c33G49kp, s as N } from "./copilot-unsaved-operation-coordinator-c33G49kp-CtBUCxuE.js";
//#region src/main/frontend/generated/jar-resources/copilot/base-panel-D7BvA8tH.js
var p, m;
function init_base_panel_D7BvA8tH() {
	return (init_base_panel_D7BvA8tH = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_dom_utils_Culwf8PO();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_unsaved_operation_coordinator_c33G49kp();
		m = o((() => {
			z(), n(), V(), D(), M(), R$1(), p = class extends R {
				constructor(...e) {
					super(...e), this.eventBusRemovers = [], this.messageHandlers = {}, this.handleESC = (e) => {
						let t = B.getPanelByTag(this.tagName);
						k().appInteractable && t && !t.individual || e.key === "Escape" && N(this);
					};
				}
				getPreferredWidth() {
					return 400;
				}
				getPreferredHeight() {
					return 400;
				}
				getPreferredMaxWidth() {
					return 500;
				}
				createRenderRoot() {
					return this;
				}
				onEventBus(e, t$1) {
					this.eventBusRemovers.push(t.on(e, t$1));
				}
				connectedCallback() {
					super.connectedCallback(), this.addESCListener();
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this.eventBusRemovers.forEach((e) => e()), this.removeESCListener();
				}
				addESCListener() {
					document.addEventListener("keydown", this.handleESC);
				}
				removeESCListener() {
					document.removeEventListener("keydown", this.handleESC);
				}
				onCommand(e, t) {
					this.messageHandlers[e] = t;
				}
				handleMessage(e) {
					return this.messageHandlers[e.command] ? (this.messageHandlers[e.command].call(this, e), !0) : !1;
				}
				repositionInPopover(e) {
					let t = Math.max(this.scrollHeight, this.offsetHeight);
					if (t === 0) return;
					let n = e.getAttribute("for");
					if (!n) return;
					let r = e.parentElement?.querySelector(`#${n}`);
					if (!r) return;
					let i = r.getBoundingClientRect(), a = i.top - 16, o = window.innerHeight - 16 - i.bottom, s = (e.position ?? e.getAttribute("position") ?? "bottom").startsWith("top"), c = s ? a : o;
					c >= t || (s ? o : a) <= c || (e.position = s ? "bottom" : "top", e._overlayElement?._updatePosition?.());
				}
				requestLayoutUpdate() {
					let e = this.localName;
					if (B.positionUpdatedManually(e)) return Promise.resolve();
					let t = B.getPanelByTag(e);
					return t ? new Promise((r) => {
						requestAnimationFrame(() => {
							let a = E(this, "vaadin-dialog");
							if (!a) {
								let e = E(this, "vaadin-popover");
								e && this.repositionInPopover(e), r();
								return;
							}
							let o = this.parentElement?.getBoundingClientRect();
							if (!o || o.width === 0 && o.height === 0) {
								r();
								return;
							}
							let s = a._overlayElement, c = s?.shadowRoot?.querySelector("[part=\"overlay\"]"), l = s?.shadowRoot?.querySelector("[part=\"content\"]"), u = s?.shadowRoot?.querySelector("[part=\"footer\"]");
							if (!c || !l) {
								r();
								return;
							}
							let d = Math.max(this.scrollWidth, this.offsetWidth, o.width), f = Math.max(this.scrollHeight, this.offsetHeight, o.height), p = c.getBoundingClientRect(), m = l.getBoundingClientRect(), h = Math.max(0, p.width - m.width), g = Math.max(0, p.height - m.height), _ = u?.getBoundingClientRect(), v = !!_ && _.width > 0 && _.height > 0, y = v ? Math.max(0, p.left - _.left) + Math.max(0, _.right - p.right) : 0, b = v ? Math.max(0, p.top - _.top) + Math.max(0, _.bottom - p.bottom) : 0, x = this.getPreferredMaxWidth(), S = Math.floor(window.innerHeight * 2 / 3), C = Math.max(0, this.getPreferredWidth()), w = Math.max(0, this.getPreferredHeight()), T = Math.min(x, Math.max(120, window.innerWidth - 32)), E$1 = Math.min(S, Math.max(120, window.innerHeight - 32)), D = Math.max(120, Math.min(T, Math.max(C, Math.ceil(d + h + y)))), O = Math.max(120, Math.min(E$1, Math.max(w, Math.ceil(f + g + b)))), k = `${D}px`, A = `${O}px`;
							a.setAttribute("width", k), a.setAttribute("height", A), a.width = k, a.height = A;
							let j = t.position, M = Number.parseFloat(a.getAttribute("top") ?? ""), N = Number.parseFloat(a.getAttribute("left") ?? ""), P = j?.top ?? (Number.isNaN(M) ? 0 : M), F = j?.left ?? (Number.isNaN(N) ? 0 : N), I = document.querySelector("copilot-main")?.shadowRoot?.querySelector(`copilot-toolbar #${e}-toolbar-btn`), L = P, R = F;
							if (I) {
								let e = I.getBoundingClientRect(), t = e.top - 16 - 16, n = window.innerHeight - 16 - e.bottom - 16;
								L = t >= O || t >= n ? e.top - O - 16 : e.bottom + 16, R = e.left + e.width / 2 - D / 2;
							}
							L = Math.max(16, Math.min(L, window.innerHeight - 16 - O)), R = Math.max(16, Math.min(R, window.innerWidth - 16 - D)), B.updatePanel(e, { position: {
								top: L,
								left: R,
								width: D,
								height: O
							} }, !1), r();
						});
					}) : Promise.resolve();
				}
			};
		}));
	})))();
}
//#endregion
export { m as n, p as r, init_base_panel_D7BvA8tH as t };
