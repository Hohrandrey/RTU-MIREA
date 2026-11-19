import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { A as Vt, G as init_icons_wGoYEurg, I as _o, K as is, O as Ut, Z as mo, mt as xi, p as G, rt as po, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
//#region src/main/frontend/generated/jar-resources/copilot/section-panel-ui-state-Dbt9i-HL.js
function f(e) {
	return (t, n) => typeof n == "object" ? m(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
function g(e) {
	return f({
		...e,
		state: !0,
		attribute: !1
	});
}
function x(e, t) {
	return (n, r, i) => {
		let a = (t) => t.renderRoot?.querySelector(e) ?? null;
		if (t) {
			let { get: e, set: t } = typeof r == "object" ? n : i ?? (() => {
				let e = Symbol();
				return {
					get() {
						return this[e];
					},
					set(t) {
						this[e] = t;
					}
				};
			})();
			return y(n, r, { get() {
				let n = e.call(this);
				return n === void 0 && (n = a(this), (n !== null || this.hasUpdated) && t.call(this, n)), n;
			} });
		}
		return y(n, r, { get() {
			return a(this);
		} });
	};
}
function O(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
function A(e, t) {
	var n, r = class extends e {
		constructor() {
			super(...arguments), this[n] = () => {
				this.requestUpdate();
			};
		}
		connectedCallback() {
			super.connectedCallback(), this[j] = new t(`${this.constructor.name || this.nodeName}.update()`, this[M]), this.hasUpdated && this.requestUpdate();
		}
		disconnectedCallback() {
			super.disconnectedCallback(), this[j] && (this[j].dispose(), this[j] = void 0);
		}
		update(e) {
			this[j] ? this[j].track(super.update.bind(this, e)) : super.update(e);
		}
	};
	return n = M, r;
}
function P(e) {
	return A(e, G);
}
var u, d, p, m, h, _, v, y, b, S, C, w, T, E, D, k, j, M, N, F, I, L, R, z, B, V;
function init_section_panel_ui_state_Dbt9i_HL() {
	return (init_section_panel_ui_state_Dbt9i_HL = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		d = o((() => {
			u = (e) => (t, n) => {
				n === void 0 ? customElements.define(e, t) : n.addInitializer((() => {
					customElements.define(e, t);
				}));
			};
		}));
		h = o((() => {
			_o(), p = {
				attribute: !0,
				type: String,
				converter: po,
				reflect: !1,
				hasChanged: mo
			}, m = (e = p, t, n) => {
				let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
				if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
					let { name: r } = n;
					return {
						set(n) {
							let i = t.get.call(this);
							t.set.call(this, n), this.requestUpdate(r, i, e);
						},
						init(t) {
							return t !== void 0 && this.C(r, void 0, e, t), t;
						}
					};
				}
				if (r === "setter") {
					let { name: r } = n;
					return function(n) {
						let i = this[r];
						t.call(this, n), this.requestUpdate(r, i, e);
					};
				}
				throw Error("Unsupported decorator location: " + r);
			};
		}));
		_ = o((() => {
			h();
		}));
		v = o((() => {}));
		b = o((() => {
			y = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n), n);
		}));
		S = o((() => {
			b();
		}));
		C = o((() => {}));
		w = o((() => {}));
		T = o((() => {}));
		E = o((() => {}));
		D = o((() => {
			d(), h(), _(), v(), S(), C(), w(), T(), E();
		}));
		k = o((() => {}));
		N = o((() => {
			j = Symbol("LitMobxRenderReaction"), M = Symbol("LitMobxRequestUpdate");
		}));
		F = o((() => {
			N(), xi();
		}));
		L = o((() => {
			F(), cs(), F(), I = class extends P(is) {};
		}));
		z = o((() => {
			L(), xi(), R = class extends I {
				constructor(...e) {
					super(...e), this.disposers = [];
				}
				reaction(e, t, n) {
					this.disposers.push(Ut(e, t, n));
				}
				autorun(e, t) {
					this.disposers.push(Vt(e, t));
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this.disposers.forEach((e) => {
						e();
					}), this.disposers = [];
				}
			};
		}));
		V = o((() => {
			if (B = window.Vaadin.copilot._sectionPanelUiState, !B) throw Error("Tried to access copilot section panel ui state before it was initialized.");
		}));
	})))();
}
//#endregion
export { V as a, init_section_panel_ui_state_Dbt9i_HL as c, x as d, z as f, R as i, k as l, D as n, f as o, O as r, g as s, B as t, u };
