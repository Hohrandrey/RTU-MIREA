import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o$1, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { $ as ns, G as init_icons_wGoYEurg, r as $o } from "./icons-wGoYEurg-B6sT7cxU.js";
//#region src/main/frontend/generated/jar-resources/copilot/directive-helpers-DTeY0qOw.js
var r, i, a, o, s, c, l, u, d, f;
function init_directive_helpers_DTeY0qOw() {
	return (init_directive_helpers_DTeY0qOw = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		f = o$1((() => {
			ns(), {I: r} = $o, i = (e) => e.strings === void 0, a = () => document.createComment(""), o = (e, t, n) => {
				let i = e._$AA.parentNode, o = t === void 0 ? e._$AB : t._$AA;
				if (n === void 0) n = new r(i.insertBefore(a(), o), i.insertBefore(a(), o), e, e.options);
				else {
					let t = n._$AB.nextSibling, r = n._$AM, a = r !== e;
					if (a) {
						let t;
						n._$AQ?.(e), n._$AM = e, n._$AP !== void 0 && (t = e._$AU) !== r._$AU && n._$AP(t);
					}
					if (t !== o || a) {
						let e = n._$AA;
						for (; e !== t;) {
							let t = e.nextSibling;
							i.insertBefore(e, o), e = t;
						}
					}
				}
				return n;
			}, s = (e, t, n = e) => (e._$AI(t, n), e), c = {}, l = (e, t = c) => e._$AH = t, u = (e) => e._$AH, d = (e) => {
				e._$AP?.(!1, !0);
				let t = e._$AA, n = e._$AB.nextSibling;
				for (; t !== n;) {
					let e = t.nextSibling;
					t.remove(), t = e;
				}
			};
		}));
	})))();
}
//#endregion
export { l as a, u as c, init_directive_helpers_DTeY0qOw as i, f as n, o, i as r, s, d as t };
