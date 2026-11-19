import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o$1, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { E as Ua, G as init_icons_wGoYEurg, j as Wa } from "./icons-wGoYEurg-B6sT7cxU.js";
//#region src/main/frontend/generated/jar-resources/copilot/stats-rEPv3bOZ.js
var r, i, a, o, s, c, l, u;
function init_stats_rEPv3bOZ() {
	return (init_stats_rEPv3bOZ = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		u = o$1((() => {
			Wa(), r = (() => {
				let e = window;
				return e.Vaadin ??= {}, e.Vaadin.copilot ??= {}, e.Vaadin.copilot._trackEventInterceptors ??= /* @__PURE__ */ new Set(), e.Vaadin.copilot._trackEventInterceptors;
			})(), i = (e) => {
				r.add(e);
			}, a = (e) => {
				r.delete(e);
			}, o = () => {
				Ua("copilot-browser-info", {
					userAgent: navigator.userAgent,
					locale: navigator.language,
					timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
				});
			}, s = (e, n) => {
				let i = n ? { ...n } : {};
				[...r].forEach((t) => {
					try {
						t(e, i);
					} catch {}
				}), Ua("copilot-track-event", {
					event: e,
					properties: Object.keys(i).length ? i : void 0
				});
			}, c = (e, t) => {
				s(e, {
					...t,
					view: "react"
				});
			}, l = (e, t) => {
				s(e, {
					...t,
					view: "flow"
				});
			};
		}));
	})))();
}
//#endregion
export { l as a, u as c, init_stats_rEPv3bOZ as i, c as n, o, i as r, s, a as t };
