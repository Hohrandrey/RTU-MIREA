import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { d as init_dom_utils_Culwf8PO, n as D, o as a$1 } from "./dom-utils-Culwf8PO-ClMzWnIW.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-focus-trap-DNlErGjE.js
function r() {
	return document.body.querySelector("copilot-main");
}
var i, a;
function init_copilot_focus_trap_DNlErGjE() {
	return (init_copilot_focus_trap_DNlErGjE = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_dom_utils_Culwf8PO();
		o((() => {
			D(), i = class {
				constructor() {
					this.active = !1, this.activate = () => {
						this.active = !0;
						let e = this.getApplicationRootElement();
						e && e instanceof HTMLElement && e.addEventListener("focusin", this.focusInEventListener), r()?.focus(), r()?.addEventListener("focusout", this.keepFocusInCopilot);
					}, this.deactivate = () => {
						this.active = !1;
						let e = this.getApplicationRootElement();
						e && e instanceof HTMLElement && e.removeEventListener("focusin", this.focusInEventListener), r()?.removeEventListener("focusout", this.keepFocusInCopilot);
					}, this.focusInEventListener = (e) => {
						this.active && (e.preventDefault(), e.stopPropagation(), a$1(e.target) || requestAnimationFrame(() => {
							e.target.blur && e.target.blur(), r()?.focus();
						}));
					};
				}
				getApplicationRootElement() {
					return document.body.firstElementChild;
				}
				keepFocusInCopilot(e) {
					e.preventDefault(), e.stopPropagation(), r()?.focus();
				}
			}, a = new i();
		}))();
	})))();
}
//#endregion
init_copilot_focus_trap_DNlErGjE();
export { a as copilotFocusTrap };
