import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { B as da, G as init_icons_wGoYEurg, Y as ls, ct as ua, d as Ei, ft as wi, lt as us, o as Bo, t as $, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as init_consts_CUwyMiZU, l as t, u } from "./consts-CUwyMiZU-idb3fN8k.js";
import { i as n, n as i, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { c as u$1, i as init_stats_rEPv3bOZ, s } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
import { n as init_directive_CZ105jp5, r as n$1 } from "./directive-CZ105jp5-Caa0256i.js";
import { n as n$2, r as t$1, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
import { a as H$1, d as T, f as init_copilot_error_handler_sDuOm7hQ, i as D, t as $$1 } from "./copilot-error-handler-sDuOm7hQ-DXZIpLPg.js";
import { c as init_section_panel_ui_state_Dbt9i_HL, l as k, n as D$1, r as O, s as g, u as u$2 } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { aa as init_copilot_shortcuts_BR0Gq1eD, ia as L$1, ra as I$1 } from "./generated-BXM-NgLv.js";
import { n as m, r as p, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
import { i as x, n as init_lit_renderer_CALYLbWL, r as l, t as b } from "./lit-renderer-CALYLbWL-yS9TK8vD.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-settings-panel-CErmKQJE.js
var I, L, R, z, B, V, H, U, W, G, K;
function init_copilot_settings_panel_CErmKQJE() {
	return (init_copilot_settings_panel_CErmKQJE = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_consts_CUwyMiZU();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_stats_rEPv3bOZ();
		init_directive_CZ105jp5();
		init_copilot_error_handler_sDuOm7hQ();
		init_copilot_stored_machine_state_DS3t0BPl();
		init_copilot_shortcuts_BR0Gq1eD();
		init_base_panel_D7BvA8tH();
		init_lit_renderer_CALYLbWL();
		R = o((() => {
			l(), x(), I = class extends b {
				addRenderer() {
					this.element.renderer = (e, t) => {
						this.renderRenderer(e, t);
					};
				}
				runRenderer() {
					this.element.requestContentUpdate();
				}
				removeRenderer() {
					this.element.renderer = null;
				}
			}, L = n$1(I);
		}));
		z = o((() => {
			R();
		}));
		V = o((() => {
			if (n(), B = window.Vaadin.copilot.tree, !B) throw Error("Tried to access copilot tree before it was initialized.");
		}));
		W = o((() => {
			H = [
				{
					dismissId: "connection-lost",
					title: "Connection lost",
					description: "Shown when Copilot loses its frontend connection."
				},
				{
					dismissId: "copilot-ide-plugin-missing",
					title: "IDE plugin recommendation",
					description: "Shown when additional IDE integration features are available but the IDE plugin is not active."
				},
				{
					dismissId: "devmode",
					title: "Development mode reminder",
					description: "Shown when the app is running in development mode."
				},
				{
					dismissId: "java-modification-no-hotswap",
					title: "Java hotswap recommendation",
					description: "Shown when Java source changes are made without hotswap support."
				},
				{
					dismissId: "react_route_component_is_class",
					title: "React class component limitation",
					description: "Shown when a route uses a class component and Copilot functionality is reduced."
				},
				{
					dismissId: "variable-renamed",
					title: "Variable renamed",
					description: "Shown when Copilot renames a generated Java variable."
				},
				{
					dismissId: "view-deleted-restart-required",
					title: "Route view deleted",
					description: "Shown when a deleted route requires a restart to fully apply."
				}
			], U = H.slice().sort((e, t) => e.title.localeCompare(t.title));
		}));
		o((() => {
			D$1(), cs(), us(), Ei(), D(), z(), L$1(), V(), W(), n$2(), a(), m(), da(), u(), $$1(), u$1(), k(), G = class extends p {
				constructor(...e) {
					super(...e), this.selectedTab = 0, this.activationShortcutEnabled = t$1.isActivationShortcut(), this.aiUsage = t$1.isAIUsageAllowed(), this.sendErrorReportsAllowed = t$1.isSendErrorReportsAllowed(), this.hideCopilotRequestOngoing = !1, this.hideCopilotDialogVisible = !1, this.sizeItems = [{
						label: "Default",
						value: "default"
					}, {
						label: "Compact",
						value: "compact"
					}], this.themeItems = [
						{
							label: "System",
							value: "system"
						},
						{
							label: "Light",
							value: "light"
						},
						{
							label: "Dark",
							value: "dark"
						}
					], this.toolbarExpandModeItems = [
						{
							label: "Proximity",
							value: "proximity",
							description: "The toolbar expands and becomes fully visible as the mouse pointer approaches it."
						},
						{
							label: "Click",
							value: "click",
							description: "The toolbar expands and becomes fully visible when Play mode is clicked."
						},
						{
							label: "Hover",
							value: "hover",
							description: "The toolbar expands and becomes fully visible when the mouse hovers over it."
						},
						{
							label: "Always expanded",
							value: "always",
							description: "The toolbar remains fully visible at all times and never collapses or becomes translucent."
						},
						{
							label: "Disabled",
							value: "never",
							description: "Only Play mode is visible. Changing Copilot mode is not available, and keyboard shortcuts are disabled."
						}
					], this.badgePositionItems = [{
						label: "Smart",
						value: "smart",
						description: "Automatically finds the best position by avoiding overlaps with nearby elements."
					}, {
						label: "Static",
						value: "static",
						description: "Keeps the badge in a predefined position regardless of surrounding elements."
					}], this.aiUsageItems = [
						{
							label: "Ask each time",
							value: "ask"
						},
						{
							label: "Allow",
							value: "yes"
						},
						{
							label: "Deny",
							value: "no"
						}
					], this.aiProviderItems = [{
						label: "Any region",
						value: "ANY"
					}, {
						label: "EU only",
						value: "EU_ONLY"
					}], this.toggleActivationShortcut = () => {
						this.activationShortcutEnabled = !this.activationShortcutEnabled, t$1.setActivationShortcut(this.activationShortcutEnabled);
					}, this.toggleSendErrorReports = () => {
						this.sendErrorReportsAllowed = !this.sendErrorReportsAllowed, t$1.setSendErrorReportsAllowed(this.sendErrorReportsAllowed);
					};
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("flex", "flex-col", "h-full");
				}
				updated(e) {
					super.updated(e);
				}
				renderKbd(e) {
					return T(e.replace(/<kbd([^>]*)class="([^"]*)"/, "<kbd$1class=\"$2 font-sans ms-auto\"").replace(/<kbd(?![^>]*class=)/, "<kbd class=\"font-sans ms-auto\""));
				}
				render() {
					return Bo`
      <vaadin-tabs>
        <vaadin-tab ?selected=${this.selectedTab === 0} @click=${() => this.selectedTab = 0}>General</vaadin-tab>
        <vaadin-tab ?selected=${this.selectedTab === 1} @click=${() => this.selectedTab = 1}>Shortcuts</vaadin-tab>
        <vaadin-tab ?selected=${this.selectedTab === 2} @click=${() => this.selectedTab = 2}>AI</vaadin-tab>
        <vaadin-tab ?selected=${this.selectedTab === 3} @click=${() => this.selectedTab = 3}>
          <span>Notifications</span>
        </vaadin-tab>
      </vaadin-tabs>
      ${this.selectedTab === 0 ? this.renderGeneralTab() : null}
      ${this.selectedTab === 1 ? this.renderShortcutsTab() : null} ${this.selectedTab === 2 ? this.renderAiTab() : null}
      ${this.selectedTab === 3 ? this.renderNotificationTab() : null}
    `;
				}
				renderGeneralTab() {
					let e = t$1.getSelectedSize(), t = t$1.getSelectedTheme(), n = t$1.getToolbarExpandMode(), r = t$1.getBadgePositionMode();
					return Bo`
      <div class="border-dashed flex flex-col flex-grow divide-y pb-4 pt-0.5 px-4" part="general-tab-container">
        <div class="flex gap-2 items-start justify-between py-2">
          <label class="py-1.5" id="size">Size</label>
          <vaadin-select
            accessible-name-ref="size"
            class="flex-shrink-0"
            theme="auto-width no-border"
            .items="${this.sizeItems}"
            .value="${e}"
            @change="${(e) => {
						t$1.setSelectedSize(e.target.value);
					}}"></vaadin-select>
        </div>
        <div class="flex gap-2 items-start justify-between py-2">
          <label class="py-1.5" id="theme">Theme</label>
          <vaadin-select
            accessible-name-ref="theme"
            class="flex-shrink-0"
            theme="auto-width no-border"
            .items="${this.themeItems}"
            .value="${t}"
            @change="${(e) => {
						t$1.setSelectedTheme(e.target.value);
					}}"></vaadin-select>
        </div>
        <div class="flex gap-2 items-start justify-between py-2">
          <div class="flex flex-col py-1.5">
            <label id="toolbar-button-expand-mode">Toolbar behavior</label>
            <span class="text-secondary text-xs">How it appears & expands</span>
          </div>
          <vaadin-select
            accessible-name-ref="toolbar-expand-mode"
            class="flex-shrink-0"
            theme="auto-width no-border"
            .value="${n}"
            ${L(() => Bo`
                <vaadin-list-box class="max-w-xs">
                  ${this.toolbarExpandModeItems.map((e) => Bo`
                      <vaadin-item class="items-start" label="${e.label}" value="${e.value}">
                        <span class="flex flex-col gap-0.5">
                          <span>${e.label}</span>
                          <span class="text-secondary text-xs">${e.description}</span>
                        </span>
                      </vaadin-item>
                    `)}
                </vaadin-list-box>
              `)}
            @change="${(e) => {
						let t = t$1.getToolbarExpandMode();
						t$1.setToolbarExpandMode(e.target.value), s("toolbar-expand-mode-change", {
							selected: t$1.getToolbarExpandMode(),
							previous: t
						});
					}}"></vaadin-select>
        </div>
        <div class="flex gap-2 items-start justify-between py-2">
          <div class="flex flex-col py-1.5">
            <label id="toolbar-button-expand-mode">Badge positioning</label>
            <span class="text-secondary text-xs">How it is placed</span>
          </div>
          <vaadin-select
            accessible-name-ref="badge-position-mode"
            class="flex-shrink-0"
            theme="auto-width no-border"
            .value="${r}"
            ${L(() => Bo`
                <vaadin-list-box class="max-w-xs">
                  ${this.badgePositionItems.map((e) => Bo`
                      <vaadin-item class="items-start" label="${e.label}" value="${e.value}">
                        <span class="flex flex-col gap-0.5">
                          <span>${e.label}</span>
                          <span class="text-secondary text-xs">${e.description}</span>
                        </span>
                      </vaadin-item>
                    `)}
                </vaadin-list-box>
              `)}
            @change="${(e) => {
						let t = t$1.getBadgePositionMode();
						t$1.setBadgePositionMode(e.target.value), s("badge-position-mode-changed", {
							selected: t$1.getBadgePositionMode(),
							previous: t
						});
					}}"></vaadin-select>
        </div>
        <div class="flex gap-2 justify-between mb-4 py-3.5">
          <div class="flex flex-col">
            <label id="error-reports-label">Send error reports</label>
            <span id="error-reports-desc" class="text-secondary text-xs">Helps us improve the user experience</span>
          </div>
          <button
            aria-checked="${this.sendErrorReportsAllowed}"
            aria-labelledby="error-reports-label"
            aria-describedby="error-reports-desc"
            class="my-px"
            role="switch"
            type="button"
            @click=${() => this.toggleSendErrorReports()}>
            <span></span>
          </button>
        </div>
        <vaadin-button
          data-test-id="hide-copilot-btn"
          @click="${this.handleHideCopilotButtonClick}"
          class="justify-start mt-auto self-start">
          <vaadin-icon slot="prefix" .svg="${ls.close}"></vaadin-icon>
          Hide Copilot until server restart
        </vaadin-button>
      </div>

      <vaadin-confirm-dialog
        id="hideCopilotDialog"
        header="Temporarily Hide Copilot"
        .confirmText=${this.hideCopilotRequestOngoing ? "Hiding…" : "Continue"}
        cancel-text="Cancel"
        cancel-button-visible
        confirm-theme="primary"
        .confirmDisabled=${this.hideCopilotRequestOngoing}
        .cancelDisabled=${this.hideCopilotRequestOngoing}
        .noCloseOnEsc=${this.hideCopilotRequestOngoing}
        .opened="${this.hideCopilotDialogVisible}"
        .noCloseOnOutsideClick=${this.hideCopilotRequestOngoing}
        @cancel=${() => {
						this.hideCopilotDialogVisible = !1;
					}}
        @confirm=${this.onDisableConfirm}>
        This will hide the Copilot until the server restarts. The page will reload to apply the change. Do you want to
        continue?
        ${this.hideCopilotRequestOngoing ? Bo`
              <div style="display:flex; align-items:center; gap:var(--lumo-space-s); margin-top:var(--lumo-space-m);">
                <vaadin-progress-indicator indeterminate></vaadin-progress-indicator>
                <span>Hiding…</span>
              </div>
            ` : null}
      </vaadin-confirm-dialog>
    `;
				}
				renderShortcutsTab() {
					let e = B.hasFlowComponents();
					return Bo`<div class="flex flex-col gap-4 pb-2 pt-4 px-4 ">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <label id="enable-shortcuts-label">Enable keyboard shortcut</label>
          <span id="enable-shortcuts-desc" class="text-secondary text-xs"
            >Switch anytime to Play mode with ${this.renderKbd(I$1.toggleCopilot)}</span
          >
        </div>
        <button
          aria-checked="${this.activationShortcutEnabled}"
          aria-labelledby="enable-shortcuts-label"
          aria-describedby="enable-shortcuts-desc"
          class="my-px"
          role="switch"
          type="button"
          @click=${() => this.toggleActivationShortcut()}>
          <span></span>
        </button>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold my-0 text-sm">Global</h3>
        <ul class="border-dashed divide-y flex flex-col list-none m-0 p-0">
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.vaadin}"></vaadin-icon>
            <span>Switch Play Mode / Last Mode</span>
            ${this.renderKbd(I$1.toggleCopilot)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.undo}"></vaadin-icon>
            <span>Undo</span>
            ${this.renderKbd(I$1.undo)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.redo}"></vaadin-icon>
            <span>Redo</span>
            ${this.renderKbd(I$1.redo)}
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold my-0 text-sm">Component Selection</h3>
        <ul class="border-dashed divide-y flex flex-col list-none m-0 p-0">
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.sparkles}"></vaadin-icon>
            <span>Open AI prompt</span>
            ${this.renderKbd(I$1.openAiPopover)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.code}"></vaadin-icon>
            <span>Go to source</span>
            ${this.renderKbd(I$1.goToSource)}
          </li>
          ${e ? Bo`<li class="flex gap-2 py-2">
                <vaadin-icon .svg="${ls.code}"></vaadin-icon>
                <span>Go to attach source</span>
                ${this.renderKbd(I$1.goToAttachSource)}
              </li>` : $}
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.contentCopy}"></vaadin-icon>
            <span>Copy</span>
            ${this.renderKbd(I$1.copy)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.contentPaste}"></vaadin-icon>
            <span>Paste</span>
            ${this.renderKbd(I$1.paste)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.fileCopy}"></vaadin-icon>
            <span>Duplicate</span>
            ${this.renderKbd(I$1.duplicate)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.turnLeft}"></vaadin-icon>
            <span>Select parent</span>
            ${this.renderKbd(I$1.selectParent)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.north}"></vaadin-icon>
            <span>Select previous sibling</span>
            ${this.renderKbd(I$1.selectPreviousSibling)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.south}"></vaadin-icon>
            <span>Select first child / next sibling</span>
            ${this.renderKbd(I$1.selectNextSibling)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.delete}"></vaadin-icon>
            <span>Delete</span>
            ${this.renderKbd(I$1.delete)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${ls.dashboardCustomize}"></vaadin-icon>
            <span>Add component</span>
            <kbd class="font-sans ms-auto">A – Z</kbd>
          </li>
        </ul>
      </div>
    </div>`;
				}
				renderAiTab() {
					let e = i.userInfo?.copilotProjectCannotLeaveLocalhost ?? !1, t = e ? "no" : this.aiUsage, n = i.userInfo?.copilotProjectCannotLeaveEU ? "EU_ONLY" : "ANY";
					return Bo`<div class="border-dashed flex flex-col divide-y px-4 py-0.5">
      <div class="flex gap-2 items-start justify-between py-2">
        <div class="flex flex-col py-1.5">
          <label id="ai-usage">AI usage</label>
          <span class="text-secondary text-xs">All AI features are clearly labelled </span>
          ${e ? Bo`<span class="text-secondary text-xs"
                >Restricted for your account. Ask your Vaadin account manager to change it.</span
              >` : $}
        </div>
        <vaadin-select
          accessible-name-ref="ai-usage"
          class="flex-shrink-0"
          theme="auto-width no-border"
          .items="${this.aiUsageItems}"
          .value="${t}"
          ?disabled="${e}"
          @value-changed="${(t) => {
						e || (this.aiUsage = t.detail.value, t$1.setAIUsageAllowed(t.detail.value));
					}}"></vaadin-select>
      </div>
      <div class="flex gap-2 items-start justify-between py-2">
        <div class="flex flex-col py-1.5">
          <label id="ai-provider">AI provider</label>
          <span class="text-secondary text-xs">Restricted at account level, contact Vaadin to modify it.</span>
        </div>
        <vaadin-select
          accessible-name-ref="ai-provider"
          class="flex-shrink-0"
          theme="auto-width no-border"
          .items="${this.aiProviderItems}"
          .value="${n}"
          disabled></vaadin-select>
      </div>
    </div>`;
				}
				renderNotificationTab() {
					return Bo`
      <div class="border-dashed flex flex-col divide-y px-4 py-0.5">
        ${U.map((e) => {
						let t = !t$1.isNotificationDismissed(e.dismissId);
						return Bo`
            <div
              class="flex gap-2 items-start justify-between py-3.5"
              data-test-id="notification-setting-${e.dismissId}">
              <div class="flex flex-col">
                <label id="notification-setting-${e.dismissId}-label">${e.title}</label>
                ${e.description ? Bo`<span class="text-secondary text-xs" id="notification-setting-${e.dismissId}-desc"
                      >${e.description}</span
                    >` : $}
              </div>
              <copilot-toggle-button
                accessible-name-ref="notification-setting-${e.dismissId}-label"
                accessible-desc-ref="${e.description ? `notification-setting-${e.dismissId}-desc` : ""}"
                ?checked=${t}
                @on-change=${() => this.toggleNotificationSetting(e.dismissId, t)}>
              </copilot-toggle-button>
            </div>
          `;
					})}
      </div>
    `;
				}
				toggleNotificationSetting(e, t) {
					if (!t) {
						t$1.removeDismissedNotification(e);
						return;
					}
					t$1.addDismissedNotification(e);
				}
				handleHideCopilotButtonClick() {
					this.hideCopilotDialogVisible = !0;
				}
				onDisableConfirm() {
					this.hideCopilotRequestOngoing = !0, ua(`${t}hide-copilot`, {}, (e) => {
						H$1(e.data, {}) || (this.hideCopilotRequestOngoing = !1, window.location.reload());
					});
				}
			}, O([g()], G.prototype, "selectedTab", void 0), O([g()], G.prototype, "activationShortcutEnabled", void 0), O([g()], G.prototype, "aiUsage", void 0), O([g()], G.prototype, "sendErrorReportsAllowed", void 0), O([g()], G.prototype, "hideCopilotRequestOngoing", void 0), O([g()], G.prototype, "hideCopilotDialogVisible", void 0), G = O([u$2("copilot-settings-panel")], G), K = {
				header: "Settings",
				tag: wi.SETTINGS
			}, window.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(K);
			} });
		}))();
	})))();
}
//#endregion
init_copilot_settings_panel_CErmKQJE();
export { G as CopilotSettingsPanel, K as panelConfig };
