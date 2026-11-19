import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { C as Sa, G as init_icons_wGoYEurg, Y as ls, c as Ci, d as Ei, ft as wi, lt as us, o as Bo, t as $, y as Ma, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as n, n as i, o as t, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { c as u, i as init_stats_rEPv3bOZ, s } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
import { n as n$1, r as t$1, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
import { n as h, r as init_copilot_notification_B9WA4gMj, t as d } from "./copilot-notification-B9WA4gMj-Bnw6rImb.js";
import { n as n$2, r as t$2, t as init_early_project_state_D_4_8bD_ } from "./early-project-state-D-4_8bD--qzpvKar5.js";
import { a as V$1, c as init_section_panel_ui_state_Dbt9i_HL, f as z, i as R, l as k, n as D, r as O, s as g, t as B$1, u as u$1 } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { ca as g$1, da as m, pa as y, sa as b, ua as init_copilot_development_setup_user_guide_utils_DHoOu3hs } from "./generated-BXM-NgLv.js";
import { n as init_copilot_experimental_features_Cu_zexjO, r as m$1, t as f } from "./copilot-experimental-features-Cu_zexjO-DeYkyY6E.js";
import { a as init_copilot_all_components_state_CwAB5tjq, i as i$1, r as a$1 } from "./copilot-init-step2-CzCPoi9g-CbS5D0gn.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-devtools-nq53By6U.js
var B, V, H, U, W;
function init_copilot_devtools_nq53By6U() {
	return (init_copilot_devtools_nq53By6U = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_stats_rEPv3bOZ();
		init_copilot_stored_machine_state_DS3t0BPl();
		init_copilot_notification_B9WA4gMj();
		init_early_project_state_D_4_8bD_();
		init_copilot_development_setup_user_guide_utils_DHoOu3hs();
		init_copilot_experimental_features_Cu_zexjO();
		init_copilot_all_components_state_CwAB5tjq();
		o((() => {
			D(), cs(), z(), a(), us(), b(), Ei(), V$1(), u(), n$2(), n$1(), h(), Ma(), m$1(), n(), a$1(), k(), B = "bg-[linear-gradient(to_right,var(--amber-3),var(--amber-5),var(--amber-3),var(--amber-6))] dark:bg-[linear-gradient(to_right,var(--amber-5),var(--amber-7),var(--amber-5),var(--amber-8))]", V = "bg-[linear-gradient(to_right,var(--blue-3),var(--blue-5),var(--blue-3),var(--blue-6))] dark:bg-[linear-gradient(to_right,var(--blue-4),var(--blue-6),var(--blue-4),var(--blue-7))]", H = "bg-[linear-gradient(to_right,var(--ruby-3),var(--ruby-5),var(--ruby-3),var(--ruby-6))] dark:bg-[linear-gradient(to_right,var(--ruby-4),var(--ruby-6),var(--ruby-4),var(--ruby-7))]", U = "bg-[linear-gradient(to_right,var(--teal-3),var(--teal-5),var(--teal-3),var(--teal-6))] dark:bg-[linear-gradient(to_right,var(--teal-4),var(--teal-6),var(--teal-4),var(--teal-7))]", W = class extends R {
				constructor(...e) {
					super(...e), this._helpExpanded = !1;
				}
				createRenderRoot() {
					return this;
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("flex", "flex-col");
				}
				render() {
					return Bo`
      <header class="flex items-center pe-2 ps-4 py-2">
        <h2 class="font-bold gap-1 me-auto my-0 text-xs uppercase">Vaadin Copilot</h2>
        <vaadin-button
          aria-label="Close"
          theme="icon tertiary"
          @click=${() => {
						this.closePopover();
					}}>
          <vaadin-icon .svg="${ls.close}"></vaadin-icon>
          <vaadin-tooltip slot="tooltip" text="Close"></vaadin-tooltip>
        </vaadin-button>
      </header>
      <div class="flex flex-col gap-4 pb-4 px-4">
        ${this.renderCopilotServerWarning()} ${this.renderUserButton()} ${this.renderDevelopmentWorkflow()}
        ${this.renderWelcomeToVersion()}
        <div class="bg-gray-3 dark:bg-gray-6 flex flex-col rounded-md">
          <vaadin-button
            @click="${this.handleAppInfoClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${ls.info}"></vaadin-icon>
            App Info
          </vaadin-button>
          <vaadin-button @click="${this.handleAppLogClick}" class="border-0 h-auto justify-start py-2" theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${ls.terminal}"></vaadin-icon>
            App Log
          </vaadin-button>
          <vaadin-button
            @click="${this.handleFeaturesClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${ls.listAlt}"></vaadin-icon>
            Features
          </vaadin-button>
          ${t$2.springSecurityEnabled ? Bo`
                <vaadin-button
                  @click="${this.handleImpersonateAppUserClick}"
                  class="border-0 h-auto justify-start py-2"
                  theme="tertiary">
                  <vaadin-icon slot="prefix" .svg="${ls.accountCircle}"></vaadin-icon>
                  Impersonate App User
                </vaadin-button>
              ` : $}
          ${this.renderAllComponentsButton()}
        </div>
        <div class="bg-gray-3 dark:bg-gray-6 flex flex-col rounded-md">
          <vaadin-button
            @click="${this.handleFeedbackClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${ls.feedback}"></vaadin-icon>
            Feedback
          </vaadin-button>
          <vaadin-button
            @click="${this.toggleHelpAndSupport}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${ls.help}"></vaadin-icon>
            Help & Support
            <vaadin-icon
              slot="suffix"
              .svg="${this._helpExpanded ? ls.keyboardArrowUp : ls.keyboardArrowDown}"></vaadin-icon>
          </vaadin-button>
          ${this._helpExpanded ? this.renderHelpLinks() : $}
          <vaadin-button
            @click="${this.handleSettingsClick}"
            class="border-0 h-auto justify-start py-2"
            theme="tertiary">
            <vaadin-icon slot="prefix" .svg="${ls.settings}"></vaadin-icon>
            Settings
          </vaadin-button>
        </div>
      </div>
    `;
				}
				renderUserButton() {
					let e = i.userInfo?.validLicense, t = e ? B : V, n = e ? "text-amber-12 dark:text-amber-11" : "text-blue-12 dark:text-blue-11", r = this.getUserName() !== "Log in";
					return Bo`
      <vaadin-button
        id="user-button"
        @click=${this.handleUserLoginClick}
        class="animate-gradient ${t} border-0 h-auto justify-start py-2 text-start ${r ? "gap-3 px-3" : "items-start"}">
        ${r ? this.renderUserImage() : Bo`<vaadin-icon
              class="text-blue-12 dark:text-blue-11"
              slot="prefix"
              .svg="${ls.login}"></vaadin-icon>`}
        <span class="flex flex-col">
          <span>${this.getUserName()}</span>
          <span class="${n} text-xs">${this.getLicenseType()}</span>
        </span>
      </vaadin-button>
    `;
				}
				renderCopilotServerWarning() {
					return i.userInfo?.copilotServerReached === !1 ? Bo`
      <vaadin-button
        @click=${this.showCopilotServerTroubleshooting}
        class="animate-gradient ${H} border-0 h-auto items-start justify-start py-2 text-start"
        data-test-id="copilot-server-unreachable">
        <vaadin-tooltip slot="tooltip" text="Click here for troubleshooting"></vaadin-tooltip>
        <vaadin-icon class="text-ruby-12 dark:text-ruby-11" slot="prefix" .svg="${ls.warning}"></vaadin-icon>
        <span class="flex flex-col">
          <span>Copilot server is unreachable</span>
          <span class="text-ruby-12 dark:text-ruby-11 text-xs">Check your proxy or firewall settings.</span>
        </span>
      </vaadin-button>
    ` : $;
				}
				showCopilotServerTroubleshooting() {
					d({
						type: Ci.WARNING,
						message: "Copilot server is unreachable",
						details: Sa(Bo`
        <p class="m-0">Copilot could not connect to the Copilot server.</p>
        <p class="mb-0 mt-2">To troubleshoot:</p>
        <ol class="mb-0 mt-1 ps-4">
          <li>Verify that this machine can reach the Copilot server and complete its TLS handshake:</li>
          <li class="list-none mt-1">
            <code
              class="bg-gray-3 dark:bg-gray-6 box-border inline-block pe-8 ps-3 py-1.75 relative rounded-md text-xs w-full"
              ><copilot-copy></copilot-copy>curl -Iv https://copilot.vaadin.com</code
            >
          </li>
          <li>Check that your firewall or network policy allows access to <code>copilot.vaadin.com</code>.</li>
          <li>If you use a proxy, verify its settings and that it trusts the server's SSL certificate.</li>
        </ol>
      `),
						delay: 3e4
					});
				}
				renderWelcomeToVersion() {
					let e = i.projectVersionReleaseNoteInfo;
					return e === null || t$1.getMostRecentReleaseNoteDismissed() || !e.mostRecentVersion || !e.url ? $ : Bo`
      <div class="flex relative">
      <vaadin-button
        id="release-note-btn"
        data-test-id="release-note-btn"
        class="border-0 h-auto items-start justify-start px-3 py-2 text-start w-full"
        @click="${(t) => {
						window.open(e.url, "_blank");
					}}">
        <vaadin-icon class="text-blue-11" slot="prefix" .svg="${ls.info}"></vaadin-icon>
        <span class="flex flex-col">
          <span>Welcome to Vaadin ${e.vaadinVersion}</span>
          <span class="text-blue-11 text-xs">Click for release notes</span>
        </span>
      </vaadin-button>
      <vaadin-button
        class="absolute end-0 top-0"
        id="dismiss-release-note-item"
        theme="icon tertiary"
        @click="${(e) => {
						e.stopPropagation(), t$1.setMostRecentReleaseNoteDismissed(!0);
					}}"
        ><vaadin-icon .svg="${ls.close}"></vaadin-icon
        <vaadin-tooltip slot="tooltip" text="Dismiss"></vaadin-tooltip>
      </vaadin-button>
      </div>
    `;
				}
				renderUserImage() {
					return i.userInfo?.portraitUrl ? Bo`<img
        alt="${this.getUserName()}"
        class="rounded-full size-8 object-cover"
        slot="prefix"
        src="https://vaadin.com${i.userInfo.portraitUrl}" />` : $;
				}
				renderDevelopmentWorkflow() {
					let e = m(), t = g$1(), n = this.getDevelopmentWorkflowConfig(e, t), r = n?.bgClass ?? "", i = n?.colorClass ?? "", a = this.resolveIcon(n), o = n?.rotateIcon ? `rotate-180 ${i}` : i, s = this.resolveTitle(n), c = n?.displayMessage ?? "";
					return Bo`
      <vaadin-button
        data-test-id="development-workflow-btn"
        @click="${this.handleDevelopmentWorkflowClick}"
        class="animation-delay-4000 animate-gradient ${r} border-0 h-auto items-start justify-start py-2 text-start">
        <vaadin-icon class="${o}" slot="prefix" .svg="${a}"></vaadin-icon>
        <span class="flex flex-col">
          <span>${s}</span>
          <span class="text-xs ${i}">${c}</span>
        </span>
      </vaadin-button>
    `;
				}
				renderAllComponentsButton() {
					return i.userInfo?.copilotExperimentalFeatureFlag && t$1.isExperimentalFeatureEnabled(f) ? Bo`
        <vaadin-button
          ?disabled=${this.isAllComponentsOpening()}
          @click="${this.handleAllComponentsClick}"
          class="border-0 h-auto justify-start py-2"
          theme="tertiary">
          <vaadin-icon
            class="${this.isAllComponentsOpening() ? "animate-spin" : ""}"
            slot="prefix"
            .svg="${this.isAllComponentsOpening() ? ls.progressActivity : ls.terminal}"></vaadin-icon>
          ${this.getAllComponentsLabel()}
          <vaadin-icon slot="suffix" .svg="${ls.experiment}"></vaadin-icon>
          ${i$1.allComponentsViewExists ? $ : Bo`<vaadin-tooltip slot="tooltip" text="${this.getAllComponentsTooltip()}"></vaadin-tooltip>`}
        </vaadin-button>
      ` : $;
				}
				getDevelopmentWorkflowConfig(e, t) {
					let n = {
						bgClass: U,
						colorClass: "text-teal-11"
					};
					if (e === "warning" && t === "warning") return {
						...n,
						icon: ls.wbIncandescent,
						rotateIcon: !0,
						title: "IDE plugin & Hotswap recommended",
						combinedTitle: !0,
						displayMessage: "Enable both for optimal development workflow"
					};
					if (e === "warning") return {
						...n,
						icon: ls.wbIncandescent,
						rotateIcon: !0,
						title: "Hotswap recommended",
						displayMessage: "Applies changes without restarting"
					};
					if (t === "warning") return {
						...n,
						icon: ls.code,
						getIcon: !0,
						title: "IDE plugin recommended",
						getTitle: !0,
						displayMessage: "Simplifies Hotswap setup & config"
					};
					if (e === "error") return {
						bgClass: H,
						colorClass: "text-ruby-11",
						icon: ls.error,
						title: "Hotswap partially enabled",
						displayMessage: "View details"
					};
				}
				resolveIcon(e) {
					return e ? e.getIcon ? this.getIdeIcon() : e.icon : ls.bolt;
				}
				resolveTitle(e) {
					return e ? e.combinedTitle ? this.getCombinedTitle() : e.getTitle ? this.getIdePluginName() : e.title : "Development Workflow";
				}
				getUserName() {
					return [i.userInfo?.firstName, i.userInfo?.lastName].filter(Boolean).join(" ") || "Log in";
				}
				getLicenseType() {
					return i.userInfo?.validLicense ? "" : "Unlock all Copilot features, including AI";
				}
				getIdeIcon() {
					switch (i.idePluginState?.ide) {
						case "intellij": return ls.intelliJ;
						case "vscode": return ls.vsCode;
						case "eclipse": return ls.eclipse;
						default: return ls.code;
					}
				}
				getIdePluginName() {
					switch (i.idePluginState?.ide) {
						case "intellij": return "Vaadin plugin for IntelliJ";
						case "vscode": return "Vaadin extension for VS Code";
						case "eclipse": return "Vaadin plugin for Eclipse";
						default: return "IDE plugin";
					}
				}
				getCombinedTitle() {
					switch (i.idePluginState?.ide) {
						case "intellij": return "IntelliJ plugin & Hotswap recommended";
						case "vscode": return "VS Code extension & Hotswap recommended";
						case "eclipse": return "Eclipse plugin & Hotswap recommended";
						default: return "IDE plugin & Hotswap recommended";
					}
				}
				closePopover() {
					let e = this.closest("vaadin-popover");
					e && (e.opened = !1);
				}
				handleUserLoginClick() {
					if (i.userInfo?.validLicense) {
						window.open("https://vaadin.com/myaccount", "_blank", "noopener");
						return;
					}
					i.setLoginCheckActive(!0);
				}
				handleDevelopmentWorkflowClick() {
					s("use-dev-workflow-guide"), B$1.openPanel(y), this.closePopover();
				}
				handleAppInfoClick() {
					B$1.openPanel(wi.INFO), this.closePopover();
				}
				handleAppLogClick() {
					B$1.openPanel(wi.LOG), this.closePopover();
				}
				handleAllComponentsClick() {
					t.emit("open-all-components", {});
				}
				isAllComponentsOpening() {
					return [
						"creating",
						"waiting-for-route",
						"navigating"
					].includes(i$1.status);
				}
				getAllComponentsTooltip() {
					switch (i$1.status) {
						case "creating": return "Creating the component gallery…";
						case "waiting-for-route": return "Waiting for the generated gallery route…";
						case "navigating": return "Opening the component gallery…";
						case "restart-required": return "The gallery was created. Restart the server before opening it.";
						case "timed-out": return "The gallery route is not available yet. Restart the server and try again.";
						default: return "Generate and open a gallery of all components in this application.";
					}
				}
				getAllComponentsLabel() {
					if (i$1.allComponentsViewExists) return "Open all components view";
					switch (i$1.status) {
						case "creating": return "Generating all components…";
						case "waiting-for-route": return "Waiting for gallery…";
						case "navigating": return "Opening gallery…";
						case "restart-required": return "Restart to open gallery";
						case "timed-out": return "Gallery route unavailable";
						default: return "Generate all components";
					}
				}
				handleFeaturesClick() {
					B$1.openPanel(wi.FEATURES), this.closePopover();
				}
				handleImpersonateAppUserClick() {
					B$1.openPanel(wi.IMPERSONATOR), this.closePopover();
				}
				handleSettingsClick() {
					B$1.openPanel(wi.SETTINGS), this.closePopover();
				}
				handleFeedbackClick() {
					B$1.openPanel(wi.FEEDBACK), this.closePopover();
				}
				toggleHelpAndSupport() {
					this._helpExpanded = !this._helpExpanded;
				}
				renderHelpLinks() {
					return Bo`
      <div class="flex flex-col ps-4">
        ${[
						{
							label: "Forum",
							icon: "forum",
							url: "https://vaadin.com/forum"
						},
						{
							label: "Docs",
							icon: "article",
							url: "https://vaadin.com/docs/latest/tools/copilot"
						},
						{
							label: "GitHub Issues",
							icon: "github",
							url: "https://github.com/vaadin/copilot/issues"
						}
					].map(({ label: e, icon: t, url: n }) => Bo`
            <vaadin-button
              @click="${() => window.open(n, "_blank", "noopener")}"
              class="border-0 h-auto justify-start py-2"
              theme="tertiary">
              <vaadin-icon slot="prefix" .svg="${ls[t]}"></vaadin-icon>
              ${e}
            </vaadin-button>
          `)}
      </div>
    `;
				}
			}, O([g()], W.prototype, "_helpExpanded", void 0), W = O([u$1("copilot-devtools")], W);
		}))();
	})))();
}
//#endregion
init_copilot_devtools_nq53By6U();
