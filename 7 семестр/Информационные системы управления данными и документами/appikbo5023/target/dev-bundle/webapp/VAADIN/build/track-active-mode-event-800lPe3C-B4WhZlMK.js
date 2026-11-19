import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o$1, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { n as i, r as init_copilot_ui_state_Dc6l_5DA, t as a$1 } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { c as u, i as init_stats_rEPv3bOZ, s } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
//#region src/main/frontend/generated/jar-resources/copilot/track-active-mode-event-800lPe3C.js
var a, o;
function init_track_active_mode_event_800lPe3C() {
	return (init_track_active_mode_event_800lPe3C = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_copilot_ui_state_Dc6l_5DA();
		init_stats_rEPv3bOZ();
		o = o$1((() => {
			u(), a$1(), a = () => {
				let e = i.activeMode;
				s("active-mode-changed", { mode: e });
			};
		}));
	})))();
}
//#endregion
export { init_track_active_mode_event_800lPe3C as n, o as r, a as t };
