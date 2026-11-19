import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { B as da, G as init_icons_wGoYEurg, O as Ut, Y as ls, c as Ci, ct as ua, d as Ei, lt as us, mt as xi, o as Bo, t as $, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as init_consts_CUwyMiZU, l as t, u } from "./consts-CUwyMiZU-idb3fN8k.js";
import { n as i, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { n, r as t$1, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
import { n as h, r as init_copilot_notification_B9WA4gMj, t as d } from "./copilot-notification-B9WA4gMj-Bnw6rImb.js";
import { a as H, f as init_copilot_error_handler_sDuOm7hQ, n as A, o as I, p as j, s as M, t as $$1 } from "./copilot-error-handler-sDuOm7hQ-DXZIpLPg.js";
import { c as init_section_panel_ui_state_Dbt9i_HL, f as z$1, i as R$1, l as k, n as D, r as O, s as g, u as u$1 } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { Da as s, Ea as init_copilot_message_box_krJnoslR, Ta as a$1 } from "./generated-BXM-NgLv.js";
import { n as m, r as p, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-vaadin-versions-CviYL60T.js
function L() {
	i.setVaadinVersionState({ loading: !0 }), ua(`${t}get-new-vaadin-versions`, { includePreReleases: t$1.getNewVersionPreReleasesVisible() }, (e) => {
		let t = e.data;
		if (t.error) {
			i.setVaadinVersionState({
				loading: !1,
				errorMessage: t.error.message,
				hasError: !0,
				versions: []
			});
			return;
		}
		if (!t.newVersions) return;
		let n = JSON.parse(t.newVersions);
		i.setVaadinVersionState({
			versions: n,
			loading: !1,
			hasError: !1
		});
	});
}
var R, z, B, V;
function init_copilot_vaadin_versions_CviYL60T() {
	return (init_copilot_vaadin_versions_CviYL60T = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_consts_CUwyMiZU();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_message_box_krJnoslR();
		init_copilot_error_handler_sDuOm7hQ();
		init_copilot_stored_machine_state_DS3t0BPl();
		init_copilot_notification_B9WA4gMj();
		init_base_panel_D7BvA8tH();
		R = o((() => {
			da(), u(), n(), a(), xi(), Ut(() => t$1.getNewVersionPreReleasesVisible(), () => {
				L();
			}, { fireImmediately: !0 });
		}));
		o((() => {
			D(), Ei(), cs(), m(), a(), z$1(), us(), n(), da(), u(), h(), s(), R(), $$1(), M(), k(), z = class extends p {
				constructor(...e) {
					super(...e), this.renderIcon = (e) => e.name === "Flow" ? ls.flow : e.name === "Hilla" ? ls.hilla : e.name === "Web Components" || e.name === "Flow Components" ? ls.uiComponents : e.name === "TestBench" ? ls.checklist : e.name.indexOf("MPR") === -1 ? e.name.indexOf("AppSec") === -1 ? e.name.indexOf("Collaboration") === -1 ? e.name === "Copilot" || e.name === "CoPilot" ? ls.copilot : e.name.indexOf("Kubernetes") === -1 ? e.name.indexOf("Observability") === -1 ? e.name.indexOf("SSO") === -1 ? e.name.indexOf("Modernization") === -1 ? ls.code : ls.rocketLaunch : ls.login : ls.visibility : ls.kubernetes : ls.group : ls.verifiedUser : ls.playCircle;
				}
				render() {
					return Bo`
      <ul class="list-none m-0 pb-2.5 px-2">
        ${this.renderContent()}
      </ul>
    `;
				}
				renderContent() {
					return i.newVaadinVersionState === void 0 || i.newVaadinVersionState.loading ? a$1("loading", "Versions are loading...") : i.newVaadinVersionState.hasError ? a$1("error", i.newVaadinVersionState.errorMessage ?? "Unable to display new versions") : !i.newVaadinVersionState.versions || i.newVaadinVersionState.versions.length === 0 ? a$1("success", "Vaadin version is up to date") : Bo`
      ${i.newVaadinVersionState.versions.map((e, t) => this.renderNewVersionItem(e, t === 0))}
    `;
				}
				renderNewVersionItem(e, t) {
					return Bo`
      <li>
        <vaadin-details ?opened="${t}">
          <vaadin-details-summary class="relative" slot="summary">
            <div class="flex gap-2 items-center">
              ${e.version}
              ${t ? Bo`<span
                    class="bg-blue-3 dark:bg-blue-7 font-normal inline-flex px-1.5 py-px rounded-full text-xs text-blue-11 dark:text-blue-12"
                    >Latest</span
                  >` : $}
              <vaadin-button
                aria-label="Update"
                class="absolute end-0 top-0"
                theme="icon tertiary"
                ?disabled="${this.updateClickedVersion !== void 0}"
                @click="${(t) => {
						t.stopPropagation(), this.sendUpdateRequest(e.version, e.preRelease);
					}}">
                <vaadin-icon
                  class="${this.updateClickedVersion === e.version ? "animate-spin" : ""}"
                  .svg="${this.updateClickedVersion === e.version ? ls.progressActivity : ls.upgrade}"></vaadin-icon>
                <vaadin-tooltip slot="tooltip" text="Update"></vaadin-tooltip>
              </vaadin-button>
            </div>
          </vaadin-details-summary>
          <ul class="border-dashed divide-y list-none m-0 pe-2 ps-8">
            ${e.changelogs.map((e) => Bo`
                <li class="flex gap-2 py-2">
                  <vaadin-icon .svg="${this.renderIcon(e)}"></vaadin-icon>
                  ${e.name}
                  <a href="${e.url}" target="_blank">${e.version}</a>
                </li>
              `)}
          </ul>
        </vaadin-details>
      </li>
    `;
				}
				sendUpdateRequest(e, t$2) {
					this.updateClickedVersion = e;
					let r = {
						newVersion: e,
						preRelease: t$2
					};
					ua(`${t}update-vaadin-version`, r, (e) => {
						this.updateClickedVersion = void 0;
						let t = !H(e.data, r);
						if (t) {
							let e = "Please restart the server";
							A() && (e = "Server will be restarted by the IDE plugin", j()), d({
								message: "Version updated",
								type: Ci.INFORMATION,
								details: e
							});
						}
						return t;
					}).catch((e) => {
						I("Error updating version", e);
					});
				}
			}, O([g()], z.prototype, "updateClickedVersion", void 0), z = O([u$1("copilot-vaadin-versions")], z), B = class extends R$1 {
				createRenderRoot() {
					return this;
				}
				render() {
					let e = t$1.getNewVersionPreReleasesVisible();
					return Bo`<vaadin-button
      aria-pressed="${e}"
      theme="tertiary"
      @click="${(e) => {
						e.stopPropagation(), t$1.setNewVersionPreReleasesVisible(!t$1.getNewVersionPreReleasesVisible());
					}}">
      <vaadin-icon slot="prefix" .svg="${e ? ls.visibility : ls.visibilityOff}"></vaadin-icon>
      Prereleases
    </vaadin-button>`;
				}
			}, B = O([u$1("copilot-vaadin-versions-actions")], B), V = {
				header: "Vaadin Versions",
				tag: "copilot-vaadin-versions",
				actionsTag: "copilot-vaadin-versions-actions"
			}, window.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(V);
			} });
		}))();
	})))();
}
//#endregion
init_copilot_vaadin_versions_CviYL60T();
export { z as CopilotVaadinVersions, B as CopilotVersionCheckerActions, V as versionCheckerPanel };
