import { i as __require, n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
//#region src/main/frontend/generated/jar-resources/copilot/chunk-DiqZc92J.js
var e, t, n, r, i, a, o, s, c, l, u;
function init_chunk_DiqZc92J() {
	return (init_chunk_DiqZc92J = __esmMin((() => {
		e = Object.create;
		t = Object.defineProperty;
		n = Object.getOwnPropertyDescriptor;
		r = Object.getOwnPropertyNames;
		i = Object.getPrototypeOf;
		a = Object.prototype.hasOwnProperty;
		o = (e, t) => () => (e && (t = e(e = 0)), t);
		s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
		c = (e, i, o, s) => {
			if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
				get: ((e) => i[e]).bind(null, d),
				enumerable: !(s = n(i, d)) || s.enumerable
			});
			return e;
		};
		l = (n, r, a) => (a = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule ? t(a, "default", {
			value: n,
			enumerable: !0
		}) : a, n));
		u = /* @__PURE__ */ ((e) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : e)(function(e) {
			if (typeof __require < "u") return __require.apply(this, arguments);
			throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
		});
	})))();
}
//#endregion
export { u as a, s as i, l as n, o as r, init_chunk_DiqZc92J as t };
