import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { B as da, G as init_icons_wGoYEurg, Y as ls, ct as ua, d as Ei, ft as wi, lt as us, o as Bo, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { n, r as t, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
import { n as n$1, r as t$1, t as init_early_project_state_D_4_8bD_ } from "./early-project-state-D-4_8bD--qzpvKar5.js";
import { a as V, c as init_section_panel_ui_state_Dbt9i_HL, l as k, n as D, r as O, s as g, t as B, u } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { n as m, r as p, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-impersonator-plugin-C1u-zZUg.js
function S(e) {
	return ua("copilot-switch-user", { username: e }, (e) => e.data.error ? {
		success: !1,
		errorMessage: e.data.error.message
	} : { success: !0 });
}
var C, w, T;
function init_copilot_impersonator_plugin_C1u_zZUg() {
	return (init_copilot_impersonator_plugin_C1u_zZUg = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_stored_machine_state_DS3t0BPl();
		init_early_project_state_D_4_8bD_();
		init_base_panel_D7BvA8tH();
		C = o((() => {
			da();
		}));
		o((() => {
			cs(), D(), Ei(), m(), us(), C(), n(), n$1(), V(), k(), w = class extends p {
				constructor(...e) {
					super(...e), this.username = "", this.errorMessage = "", this.isLoading = !1, this.handleKeyDown = async (e) => {
						e.key === "Enter" && this.username && !this.isLoading && await this.handleSwitchUser();
					}, this.handleSwitchUser = async () => {
						if (!(!this.username || this.isLoading)) {
							this.isLoading = !0, this.errorMessage = "";
							try {
								let e = await S(this.username);
								e.success ? (t.addRecentSwitchedUsername(this.username), globalThis.location.reload()) : (this.errorMessage = e.errorMessage, this.isLoading = !1);
							} catch {
								this.errorMessage = "An unexpected error occurred", this.isLoading = !1;
							}
						}
					}, this.switchToRecentUser = async (e) => {
						this.username = e, await this.handleSwitchUser();
					}, this.removeRecentUser = (e, t$2) => {
						t$2.stopPropagation(), t.removeRecentSwitchedUsername(e), this.requestUpdate();
					};
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("contents"), this.reaction(() => t.getRecentSwitchedUsernames(), () => {
						this.requestUpdate();
					});
				}
				render() {
					if (!t$1.springSecurityEnabled) return Bo`
        <div class="flex flex-col items-center pb-4 px-4">
          <vaadin-icon class="icon-lg mb-2" .svg="${ls.accountCircle}"></vaadin-icon>
          <h3 class="mb-0.5 mt-0 text-semibold text-sm">Spring Security Disabled</h3>
          <p class="m-0 text-balance text-center text-secondary text-xs">
            User impersonation requires Spring Security to be configured in your application
          </p>
        </div>
      `;
					let e = t.getRecentSwitchedUsernames();
					return Bo`
      <div class="flex flex-col gap-4 pb-4 px-4">
        <div class="flex gap-4 items-baseline">
          <vaadin-text-field
            class="flex-1"
            label="Username"
            .value="${this.username}"
            .errorMessage="${this.errorMessage}"
            .invalid="${this.errorMessage !== ""}"
            ?disabled="${this.isLoading}"
            @value-changed="${(e) => {
						this.username = e.detail.value, this.errorMessage = "";
					}}"
            @keydown="${this.handleKeyDown}">
            <vaadin-icon slot="prefix" .svg="${ls.accountCircle}"></vaadin-icon>
          </vaadin-text-field>
          <vaadin-button
            theme="primary"
            ?disabled="${!this.username || this.isLoading}"
            @click="${this.handleSwitchUser}">
            <vaadin-icon slot="prefix" .svg="${ls.swapHoriz}"></vaadin-icon>
            ${this.isLoading ? "Switching..." : "Switch User"}
          </vaadin-button>
        </div>

        ${e.length > 0 ? Bo`
              <div class="flex flex-col gap-2 mt-1">
                <h3 class="m-0 text-semibold text-sm">Recent Usernames</h3>
                <ul
                  class="bg-gray-2 dark:bg-gray-6 border border-gray-3 dark:border-gray-7 divide-y list-none m-0 p-0 rounded-md">
                  ${e.map((e) => Bo`
                      <li class="flex gap-1 items-center pe-1 ps-3 py-1">
                        <span class="flex-1">${e}</span>
                        <vaadin-button theme="icon tertiary" @click="${() => this.switchToRecentUser(e)}">
                          <vaadin-icon .svg="${ls.swapHoriz}"></vaadin-icon>
                          <vaadin-tooltip slot="tooltip" text="Switch to ${e}"></vaadin-tooltip>
                        </vaadin-button>
                        <vaadin-button
                          aria-label="Remove ${e}"
                          class="text-ruby-11"
                          theme="icon tertiary"
                          @click="${(t) => this.removeRecentUser(e, t)}">
                          <vaadin-icon .svg="${ls.delete}"></vaadin-icon>
                          <vaadin-tooltip slot="tooltip" text="Remove ${e}"></vaadin-tooltip>
                        </vaadin-button>
                      </li>
                    `)}
                </ul>
              </div>
            ` : ""}
      </div>
    `;
				}
			}, O([g()], w.prototype, "username", void 0), O([g()], w.prototype, "errorMessage", void 0), O([g()], w.prototype, "isLoading", void 0), w = O([u("copilot-impersonator")], w), T = {
				header: "Impersonate User",
				tag: wi.IMPERSONATOR,
				individual: !0,
				toolbarOptions: {
					allowedModesWithOrder: { common: 0 },
					iconKey: "accountCircle"
				}
			}, globalThis.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(T);
			} }), B.addPanel(T);
		}))();
	})))();
}
//#endregion
init_copilot_impersonator_plugin_C1u_zZUg();
export { w as CopilotImpersonatorPanel };
