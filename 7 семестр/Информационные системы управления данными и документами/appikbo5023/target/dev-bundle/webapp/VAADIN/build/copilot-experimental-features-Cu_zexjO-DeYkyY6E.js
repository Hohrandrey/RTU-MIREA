import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o$1, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { n as i, r as init_copilot_ui_state_Dc6l_5DA, t as a$1 } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { n, r as t, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-experimental-features-Cu_zexjO.js
var a, o, s, c, l, u, d, f, p, m;
function init_copilot_experimental_features_Cu_zexjO() {
	return (init_copilot_experimental_features_Cu_zexjO = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_stored_machine_state_DS3t0BPl();
		m = o$1((() => {
			n(), a$1(), a = (e) => i.userInfo?.copilotExperimentalFeatureFlag === !0 && t.isExperimentalFeatureEnabled(e), o = {
				id: "theme-from-image",
				name: "Theme from Image",
				description: "Generate a custom theme based on an image you provide.",
				enabled: () => a(o),
				available: () => i.appTheme === "lumo",
				requiresReload: !1
			}, s = {
				id: "ai-docs-assistant",
				name: "AI Docs Assistant",
				description: "AI-powered Vaadin documentation assistant.",
				enabled: () => a(s),
				available: () => !0,
				requiresReload: !1
			}, c = {
				id: "testbench-test-recorder",
				name: "TestBench Test Recorder",
				description: "Record user interactions to generate end-to-end Vaadin TestBench tests automatically.",
				enabled: () => a(c),
				available: () => !0,
				requiresReload: !0
			}, l = {
				id: "i18n",
				name: "Internationalization",
				description: "Edit and manage translations for your application.",
				enabled: () => a(l),
				available: () => !0,
				requiresReload: !0
			}, u = {
				id: "annotations",
				name: "Annotations",
				description: "Add and manage comments and annotations on your application views.",
				enabled: () => a(u),
				available: () => !0,
				requiresReload: !0
			}, d = {
				id: "ui-test-generator",
				name: "UI Test Generator",
				description: "Generate Playwright UI Test for your application views.",
				enabled: () => a(d),
				available: () => !0,
				requiresReload: !0
			}, f = {
				id: "all-components",
				name: "All Components",
				description: "Create and browse interactive component examples for your application.",
				enabled: () => a(f),
				available: () => !0,
				requiresReload: !0
			}, p = [
				o,
				s,
				c,
				l,
				u,
				d,
				f
			];
		}));
	})))();
}
//#endregion
export { p as i, init_copilot_experimental_features_Cu_zexjO as n, m as r, f as t };
