import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { G as init_icons_wGoYEurg, st as ts, t as $, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { a as t, i as r, n as init_directive_CZ105jp5, t as i } from "./directive-CZ105jp5-Caa0256i.js";
import { i as init_directive_helpers_DTeY0qOw, n as f$1, r as i$1 } from "./directive-helpers-DTeY0qOw-C4lOOPSv.js";
//#region src/main/frontend/generated/jar-resources/copilot/lit-renderer-CALYLbWL.js
function u(e) {
	this._$AN === void 0 ? this._$AM = e : (p(this), this._$AM = e, m(this));
}
function d(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) if (t) if (Array.isArray(r)) for (let e = n; e < r.length; e++) f(r[e], !1), p(r[e]);
	else r != null && (f(r, !1), p(r));
	else f(this, e);
}
var l, f, p, m, h, g, _, v, y, b, x;
function init_lit_renderer_CALYLbWL() {
	return (init_lit_renderer_CALYLbWL = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_directive_CZ105jp5();
		init_directive_helpers_DTeY0qOw();
		l = o((() => {
			i();
		}));
		_ = o((() => {
			f$1(), i(), f = (e, t) => {
				let n = e._$AN;
				if (n === void 0) return !1;
				for (let e of n) e._$AO?.(t, !1), f(e, t);
				return !0;
			}, p = (e) => {
				let t, n;
				do {
					if ((t = e._$AM) === void 0) break;
					n = t._$AN, n.delete(e), e = t;
				} while (n?.size === 0);
			}, m = (e) => {
				for (let t; t = e._$AM; e = t) {
					let n = t._$AN;
					if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
					else if (n.has(e)) break;
					n.add(e), h(t);
				}
			}, h = (e) => {
				e.type == t.CHILD && (e._$AP ??= d, e._$AQ ??= u);
			}, g = class extends r {
				constructor() {
					super(...arguments), this._$AN = void 0;
				}
				_$AT(e, t, n) {
					super._$AT(e, t, n), m(this), this.isConnected = e._$AU;
				}
				_$AO(e, t = !0) {
					e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (f(this, e), p(this));
				}
				setValue(e) {
					if (i$1(this._$Ct)) this._$Ct._$AI(e, this);
					else {
						let t = [...this._$Ct._$AH];
						t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
					}
				}
				disconnected() {}
				reconnected() {}
			};
		}));
		v = o((() => {
			_();
		}));
		x = o((() => {
			cs(), v(), l(), y = Symbol("valueNotInitialized"), b = class extends g {
				constructor(e) {
					if (super(e), e.type !== t.ELEMENT) throw Error(`\`${this.constructor.name}\` must be bound to an element.`);
					this.previousValue = y;
				}
				render(e, t) {
					return $;
				}
				update(e, [t, r]) {
					return this.hasChanged(r) ? (this.host = e.options && e.options.host, this.element = e.element, this.renderer = t, this.previousValue === y ? this.addRenderer() : this.runRenderer(), this.previousValue = Array.isArray(r) ? [...r] : r, $) : $;
				}
				reconnected() {
					this.addRenderer();
				}
				disconnected() {
					this.removeRenderer();
				}
				addRenderer() {
					throw Error("The `addRenderer` method must be implemented.");
				}
				runRenderer() {
					throw Error("The `runRenderer` method must be implemented.");
				}
				removeRenderer() {
					throw Error("The `removeRenderer` method must be implemented.");
				}
				renderRenderer(e, ...n) {
					ts(this.renderer.call(this.host, ...n), e, { host: this.host });
				}
				hasChanged(e) {
					return Array.isArray(e) ? !Array.isArray(this.previousValue) || this.previousValue.length !== e.length ? !0 : e.some((e, t) => e !== this.previousValue[t]) : this.previousValue !== e;
				}
			};
		}));
	})))();
}
//#endregion
export { x as i, init_lit_renderer_CALYLbWL as n, l as r, b as t };
