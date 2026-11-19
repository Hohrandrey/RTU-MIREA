import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { G as init_icons_wGoYEurg, Y as ls, c as Ci, d as Ei, lt as us, o as Bo, t as $, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { n as i, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { c as u, i as init_stats_rEPv3bOZ, s } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
import { n, r as t, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
import { n as h, r as init_copilot_notification_B9WA4gMj, t as d } from "./copilot-notification-B9WA4gMj-Bnw6rImb.js";
import { c as P$1, f as init_copilot_error_handler_sDuOm7hQ, n as A, p as j, s as M$1, t as $$1 } from "./copilot-error-handler-sDuOm7hQ-DXZIpLPg.js";
import { c as init_section_panel_ui_state_Dbt9i_HL, f as z, i as R, l as k, n as D, r as O, s as g, u as u$1 } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { n as m, r as p, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
import { i as p$1, n as init_copilot_experimental_features_Cu_zexjO, r as m$1 } from "./copilot-experimental-features-Cu_zexjO-DeYkyY6E.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-features-plugin-Dhh54vT_.js
var M, N, P, F, I;
function init_copilot_features_plugin_Dhh54vT_() {
	return (init_copilot_features_plugin_Dhh54vT_ = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_stats_rEPv3bOZ();
		init_copilot_error_handler_sDuOm7hQ();
		init_copilot_stored_machine_state_DS3t0BPl();
		init_copilot_notification_B9WA4gMj();
		init_base_panel_D7BvA8tH();
		init_copilot_experimental_features_Cu_zexjO();
		o((() => {
			$$1(), u(), cs(), D(), m$1(), h(), Ei(), n(), a(), M$1(), us(), z(), m(), k(), M = window.Vaadin.devTools, N = "copilotExperimentalFeatures", P = class extends p {
				constructor(...e) {
					super(...e), this.toggledFeaturesThatAreRequiresServerRestart = [];
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("contents");
				}
				render() {
					let e = i.featureFlags.find((e) => e.id === N);
					return Bo`
      <vaadin-tabsheet class="border-0" theme="no-padding">
        <vaadin-tabs slot="tabs">
          <vaadin-tab id="application-features-tab">Application</vaadin-tab>
          <vaadin-tab id="copilot-features-tab">Copilot</vaadin-tab>
        </vaadin-tabs>
        <div tab="application-features-tab" class="px-4 py-0.5">
          <div class="border-dashed flex flex-col divide-y">
            ${i.featureFlags.filter((e) => e.id !== N).sort((e, t) => e.title.localeCompare(t.title)).map((e) => this.renderFeatureFlag(e))}
          </div>
        </div>
        <div tab="copilot-features-tab" class="px-4 py-0.5">
          <div class="border-dashed flex flex-col divide-y">
            ${e ? this.renderFeatureFlag(e) : $}
            ${this.renderCopilotExperimentalFeatures()}
          </div>
        </div>
      </vaadin-tabsheet>
    `;
				}
				renderFeatureFlag(e) {
					return this.renderFeatureRow({
						id: e.id,
						label: e.title,
						description: Bo`
        <a
          class="flex gap-0.5 text-xs"
          href="${e.moreInfoLink}"
          id="${e.id}-desc"
          target="_blank"
          rel="noopener noreferrer"
          >More info<vaadin-icon class="icon-sm" .svg="${ls.arrowOutward}"></vaadin-icon
        ></a>
      `,
						checked: e.enabled,
						onChange: (t) => this.toggleFeatureFlag(t, e)
					});
				}
				renderCopilotExperimentalFeatures() {
					let e = i.userInfo?.copilotExperimentalFeatureFlag === !0;
					return p$1.filter((e) => e.available()).sort((e, t) => e.name.localeCompare(t.name)).map((t$1) => this.renderFeatureRow({
						id: t$1.id,
						label: t$1.name,
						description: Bo`
            <span class="text-xs text-secondary" id="${t$1.id}-desc"
              >${t$1.description}</span
            >
          `,
						checked: t.isExperimentalFeatureEnabled(t$1),
						disabled: !e,
						onChange: (e) => this.toggleExperimentalFeatureFlag(e, t$1)
					}));
				}
				renderFeatureRow(e) {
					return Bo`
      <div class="flex gap-2 justify-between py-3.5">
        <div class="flex flex-col ${e.disabled ? "opacity-50" : ""}">
          <label id="${e.id}-label">${e.label}</label>
          ${e.description}
        </div>
        <copilot-toggle-button
          accessible-name-ref="${e.id}-label"
          accessible-desc-ref="${e.id}-desc"
          ?checked=${e.checked}
          ?disabled=${e.disabled ?? !1}
          @on-change=${e.onChange}>
        </copilot-toggle-button>
      </div>
    `;
				}
				toggleFeatureFlag(e, t) {
					let r = e.target.checked;
					s("use-feature", {
						source: "toggle",
						enabled: r,
						id: t.id
					}), M.frontendConnection ? (M.frontendConnection.send("setFeature", {
						featureId: t.id,
						enabled: r
					}), t.requiresServerRestart && i.toggleServerRequiringFeatureFlag(t), d({
						type: Ci.INFORMATION,
						message: `“${t.title}” ${r ? "enabled" : "disabled"}`,
						details: t.requiresServerRestart ? P$1() : void 0,
						dismissId: `feature${t.id}${r ? "Enabled" : "Disabled"}`
					}), t.id === N && i.userInfo && i.setUserInfo({
						...i.userInfo,
						copilotExperimentalFeatureFlag: r
					})) : M.log("error", `Unable to toggle feature ${t.title}: No server connection available`);
				}
				toggleExperimentalFeatureFlag(e, t$2) {
					let n = e.target.checked;
					s("use-experimental-feature", {
						source: "toggle",
						enabled: n,
						id: t$2.id
					});
					let r = t.isExperimentalFeatureEnabled(t$2);
					t.setExperimentalFeatureEnabled(t$2, n), t$2.requiresReload && n && !r && window.location.reload();
				}
			}, O([g()], P.prototype, "toggledFeaturesThatAreRequiresServerRestart", void 0), P = O([u$1("copilot-features-panel")], P), F = class extends R {
				constructor(...e) {
					super(...e), this.serverRestarting = !1;
				}
				createRenderRoot() {
					return this;
				}
				render() {
					if (i.serverRestartRequiringToggledFeatureFlags.length === 0 || !A()) return $;
					let e = this.serverRestarting ? "Restarting..." : "Click to restart server";
					return Bo`
      <vaadin-button
        aria-label="Restart server"
        ?disabled="${this.serverRestarting}"
        theme="icon tertiary"
        @click=${() => {
						this.serverRestarting = !0, j();
					}}>
        <vaadin-icon .svg="${ls.refresh}"></vaadin-icon>
        <vaadin-tooltip slot="tooltip" text=${e}></vaadin-tooltip>
      </vaadin-button>
    `;
				}
			}, O([g()], F.prototype, "serverRestarting", void 0), F = O([u$1("copilot-features-actions")], F), I = {
				header: "Features",
				tag: "copilot-features-panel",
				helpUrl: "https://vaadin.com/docs/latest/flow/configuration/feature-flags",
				actionsTag: "copilot-features-actions",
				toolbarOptions: {
					allowedModesWithOrder: { common: 0 },
					iconKey: "listAlt"
				}
			}, window.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(I);
			} });
		}))();
	})))();
}
//#endregion
init_copilot_features_plugin_Dhh54vT_();
export { F as CopilotFeaturesActions, P as CopilotFeaturesPanel };
