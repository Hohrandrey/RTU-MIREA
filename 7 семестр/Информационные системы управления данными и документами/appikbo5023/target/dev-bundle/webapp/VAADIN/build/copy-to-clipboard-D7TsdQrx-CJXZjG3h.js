import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { i as s, r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { $ as ns, G as init_icons_wGoYEurg, k as Vo } from "./icons-wGoYEurg-B6sT7cxU.js";
import { a as t, i as r, n as init_directive_CZ105jp5, r as n, t as i } from "./directive-CZ105jp5-Caa0256i.js";
import { a as l, c as u, i as init_directive_helpers_DTeY0qOw, n as f, o as o$1, s as s$1, t as d } from "./directive-helpers-DTeY0qOw-C4lOOPSv.js";
//#region src/main/frontend/generated/jar-resources/copilot/copy-to-clipboard-D7TsdQrx.js
var m, h, g, _, v, y;
function init_copy_to_clipboard_D7TsdQrx() {
	return (init_copy_to_clipboard_D7TsdQrx = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_directive_CZ105jp5();
		init_directive_helpers_DTeY0qOw();
		g = o((() => {
			ns(), i(), f(), m = (e, t, n) => {
				let r = /* @__PURE__ */ new Map();
				for (let i = t; i <= n; i++) r.set(e[i], i);
				return r;
			}, h = n(class extends r {
				constructor(e) {
					if (super(e), e.type !== t.CHILD) throw Error("repeat() can only be used in text expressions");
				}
				dt(e, t, n) {
					let r;
					n === void 0 ? n = t : t !== void 0 && (r = t);
					let i = [], a = [], o = 0;
					for (let t of e) i[o] = r ? r(t, o) : o, a[o] = n(t, o), o++;
					return {
						values: a,
						keys: i
					};
				}
				render(e, t, n) {
					return this.dt(e, t, n).values;
				}
				update(e, [t, n, i]) {
					let a = u(e), { values: o, keys: s } = this.dt(t, n, i);
					if (!Array.isArray(a)) return this.ut = s, o;
					let d$1 = this.ut ??= [], h = [], g, _, v = 0, y = a.length - 1, b = 0, x = o.length - 1;
					for (; v <= y && b <= x;) if (a[v] === null) v++;
					else if (a[y] === null) y--;
					else if (d$1[v] === s[b]) h[b] = s$1(a[v], o[b]), v++, b++;
					else if (d$1[y] === s[x]) h[x] = s$1(a[y], o[x]), y--, x--;
					else if (d$1[v] === s[x]) h[x] = s$1(a[v], o[x]), o$1(e, h[x + 1], a[v]), v++, x--;
					else if (d$1[y] === s[b]) h[b] = s$1(a[y], o[b]), o$1(e, a[v], a[y]), y--, b++;
					else if (g === void 0 && (g = m(s, b, x), _ = m(d$1, v, y)), g.has(d$1[v])) if (g.has(d$1[y])) {
						let t = _.get(s[b]), n = t === void 0 ? null : a[t];
						if (n === null) {
							let t = o$1(e, a[v]);
							s$1(t, o[b]), h[b] = t;
						} else h[b] = s$1(n, o[b]), o$1(e, a[v], n), a[t] = null;
						b++;
					} else d(a[y]), y--;
					else d(a[v]), v++;
					for (; b <= x;) {
						let t = o$1(e, h[x + 1]);
						s$1(t, o[b]), h[b++] = t;
					}
					for (; v <= y;) {
						let e = a[v++];
						e !== null && d(e);
					}
					return this.ut = s, l(e, h), Vo;
				}
			});
		}));
		_ = o((() => {
			g();
		}));
		v = /* @__PURE__ */ s(((e, t) => {
			t.exports = function() {
				var e = document.getSelection();
				if (!e.rangeCount) return function() {};
				for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
				switch (t.tagName.toUpperCase()) {
					case "INPUT":
					case "TEXTAREA":
						t.blur();
						break;
					default: t = null;
				}
				return e.removeAllRanges(), function() {
					e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
						e.addRange(t);
					}), t && t.focus();
				};
			};
		}));
		y = /* @__PURE__ */ s(((e, t) => {
			var n = v(), r = {
				"text/plain": "Text",
				"text/html": "Url",
				default: "Text"
			}, i = "Copy to clipboard: #{key}, Enter";
			function a(e) {
				var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
				return e.replace(/#{\s*key\s*}/g, t);
			}
			function o(e, t) {
				var o, s, c, l, u, d, f = !1;
				t ||= {}, o = t.debug || !1;
				try {
					if (c = n(), l = document.createRange(), u = document.getSelection(), d = document.createElement("span"), d.textContent = e, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function(n) {
						if (n.stopPropagation(), t.format) if (n.preventDefault(), n.clipboardData === void 0) {
							o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
							var i = r[t.format] || r.default;
							window.clipboardData.setData(i, e);
						} else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
						t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
					}), document.body.appendChild(d), l.selectNodeContents(d), u.addRange(l), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
					f = !0;
				} catch (n) {
					o && console.error("unable to copy using execCommand: ", n), o && console.warn("trying IE specific stuff");
					try {
						window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), f = !0;
					} catch (n) {
						o && console.error("unable to copy using clipboardData: ", n), o && console.error("falling back to prompt"), s = a("message" in t ? t.message : i), window.prompt(s, e);
					}
				} finally {
					u && (typeof u.removeRange == "function" ? u.removeRange(l) : u.removeAllRanges()), d && document.body.removeChild(d), c();
				}
				return f;
			}
			t.exports = o;
		}));
	})))();
}
//#endregion
export { y as i, h as n, init_copy_to_clipboard_D7TsdQrx as r, _ as t };
