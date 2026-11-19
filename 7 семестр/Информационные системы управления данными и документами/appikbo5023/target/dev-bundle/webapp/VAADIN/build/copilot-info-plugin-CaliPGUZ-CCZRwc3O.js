import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { n as l, r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { G as init_icons_wGoYEurg, Y as ls, lt as us, o as Bo, t as $, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as n, n as i, o as t, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { a as V, c as init_section_panel_ui_state_Dbt9i_HL, f as z, i as R, l as k$1, n as D, r as O$1, s as g, t as B, u } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { fa as p, oa as _, sa as b, ua as init_copilot_development_setup_user_guide_utils_DHoOu3hs } from "./generated-BXM-NgLv.js";
import { n as m, r as p$1, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
import { i as y, n as h, r as init_copy_to_clipboard_D7TsdQrx, t as _$1 } from "./copy-to-clipboard-D7TsdQrx-CJXZjG3h.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-info-plugin-CaliPGUZ.js
function O(e, t) {
	let n;
	return n = e === !0 ? "text-teal-11" : e === "partial" ? "text-amber-11" : "text-ruby-11", Bo`<span class="${n}">${t}</span>`;
}
var k, A, j, M;
function init_copilot_info_plugin_CaliPGUZ() {
	return (init_copilot_info_plugin_CaliPGUZ = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_development_setup_user_guide_utils_DHoOu3hs();
		init_base_panel_D7BvA8tH();
		init_copy_to_clipboard_D7TsdQrx();
		o((() => {
			D(), cs(), m(), a(), n(), z(), us(), k = /* @__PURE__ */ l(y(), 1), b(), V(), _$1(), k$1(), A = class extends p$1 {
				constructor(...e) {
					super(...e), this.sortedEntries = [];
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("contents"), this.reaction(() => i.projectInfoEntries, () => {
						if (!i.projectInfoEntries) return;
						let e = [...i.projectInfoEntries, {
							name: "Development Workflow",
							value: ""
						}];
						e = e.filter((e) => e.name !== "Java Hotswap"), this.sortedEntries = e.sort((e, t) => e.name.localeCompare(t.name));
					}, { fireImmediately: !0 });
				}
				render() {
					return Bo` <div class="flex flex-col py-2 px-4">
      <dl class="border-dashed divide-y m-0">
        ${h(this.sortedEntries.filter((e) => e.name !== "Java Hotswap"), (e) => e.name, (e) => this.renderRow(e))}
      </dl>
    </div>`;
				}
				renderRow(e) {
					if (e.name === "Development Workflow") return this.renderDevelopmentWorkflowButton();
					let t = e.name === "IDE Plugin" && e.value === !0 && i.idePluginState?.ide ? i.idePluginState.ide : e.value, n = this.getIcon(e.name, t), i$1 = this.getIconColor(e.name), a = this.getTextColor(e);
					return Bo`
      <div class="flex gap-2 py-2">
        <dt class="flex gap-2">
          ${n ? Bo`<vaadin-icon class="${i$1}" .svg="${n}"></vaadin-icon>` : $} ${e.name}
        </dt>
        <dd class="flex gap-2 m-0 ${a}">${this.renderRowValue(e)}</dd>
      </div>
    `;
				}
				renderRowValue(e) {
					return e.name === "Vaadin Employee" && e.value === !0 ? Bo`
        <vaadin-icon id="vaadin-employee" class="text-teal-11" .svg="${ls.check}"></vaadin-icon>
        <vaadin-tooltip for="vaadin-employee" text="Yes"></vaadin-tooltip>
      ` : Bo` ${!e.booleanInfo && typeof e.value == "string" ? e.value : $}
    ${e.booleanInfo && typeof e.value == "boolean" ? O(e.value, e.booleanInfo.ariaLabel) : $}
    ${e.booleanInfo?.text ? e.booleanInfo.text : $}
    ${e.name === "Vaadin" ? this.renderVaadinRowMore() : $}`;
				}
				renderVaadinRowMore() {
					let e = i.newVaadinVersionState?.versions !== void 0 && i.newVaadinVersionState.versions.length > 0;
					return Bo`
      ${i.projectVersionReleaseNoteInfo && i.projectVersionReleaseNoteInfo.url ? Bo`<a
            class="flex gap-0.5 items-center"
            href="${i.projectVersionReleaseNoteInfo.url}"
            id="release-notes-link"
            target="_blank"
            >Release notes <vaadin-icon class="icon-sm" .svg="${ls.arrowOutward}"></vaadin-icon
          ></a>` : $}
      <vaadin-button
        aria-label="Edit Vaadin version"
        class="-my-1.5 relative"
        @click="${(e) => {
						e.stopPropagation(), B.openPanel("copilot-vaadin-versions");
					}}"
        id="new-vaadin-version-btn"
        theme="icon tertiary">
        <vaadin-icon .svg="${ls.editSquare}"></vaadin-icon>
        <vaadin-tooltip slot="tooltip" text="Edit Vaadin version"></vaadin-tooltip>
        ${e ? Bo`<span aria-hidden="true" class="absolute bg-amber-11 end-0.5 rounded-full size-1 top-0.5"></span>` : ""}
      </vaadin-button>
    `;
				}
				renderDevelopmentWorkflowButton() {
					let e = _(), t = "", n = ls.doneAll, r = "";
					return e.status === "success" ? (t = "text-teal-11", r = "IDE Plugin & Java Hotswap") : e.status === "warning" ? (t = "text-amber-11", n = ls.arrowUploadReady, r = "Improve") : e.status === "error" && (t = "text-ruby-11", n = ls.handyman, r = "Fix"), Bo`
      <div class="flex gap-2 py-2">
        <dt class="flex gap-2">
          <vaadin-icon class="text-amber-11" .svg="${ls.bolt}"></vaadin-icon>
          Development Workflow
        </dt>
        <dd class="m-0">
          <vaadin-button
            class="-my-1.5 ${t}"
            id="development-workflow-status-detail"
            theme="tertiary"
            @click=${() => {
						p();
					}}>
            <vaadin-icon slot="prefix" .svg="${n}"></vaadin-icon>
            ${r}
          </vaadin-button>
        </dd>
      </div>
    `;
				}
				getIconColor(e) {
					return e.includes("Vaadin") || e === "Copilot" ? "text-vaadin-blue" : "";
				}
				getTextColor(e) {
					if (typeof e.value == "string") {
						if (e.value.startsWith("Enabled")) return "text-teal-11";
						if (e.value.startsWith("Disabled")) return "text-ruby-11";
					}
					return "text-secondary";
				}
				getIcon(e, t) {
					switch (e) {
						case "Browser": {
							let e = typeof t == "string" ? t.toLowerCase() : "";
							return e.includes("chrome") && !e.includes("edg") ? ls.chrome : e.includes("firefox") ? ls.firefox : e.includes("safari") && !e.includes("chrome") ? ls.safari : e.includes("edg") ? ls.edge : ls.webAsset;
						}
						case "Copilot": return ls.vaadin;
						case "Flow": return ls.flow;
						case "Frontend Hotswap": return ls.swapHoriz;
						case "Hilla": return ls.hilla;
						case "Java": return ls.java;
						case "OS": {
							let e = typeof t == "string" ? t.toLowerCase() : "";
							return e.includes("mac") ? ls.apple : e.includes("win") ? ls.windows : ls.computer;
						}
						case "Spring": return ls.spring;
						case "Spring Boot": return ls.springBoot;
						case "Spring Data JPA": return ls.springData;
						case "Spring Security": return ls.springSecurity;
						case "Vaadin":
						case "Vaadin Employee": return ls.vaadin;
						case "Java Hotswap": return ls.swapHoriz;
						case "IDE Plugin": return typeof t == "string" ? t.toLowerCase() === "intellij" ? ls.intelliJ : t.toLowerCase() === "vscode" ? ls.vsCode : t.toLowerCase() === "eclipse" ? ls.eclipse : ls.developerModeTv : ls.developerModeTv;
						default: return null;
					}
				}
			}, O$1([g()], A.prototype, "sortedEntries", void 0), A = O$1([u("copilot-info-panel")], A), j = class extends R {
				createRenderRoot() {
					return this;
				}
				connectedCallback() {
					super.connectedCallback(), this.style.display = "flex";
				}
				render() {
					return Bo` <vaadin-button
      aria-label="Copy to clipboard"
      @click=${() => {
						t.emit("system-info-with-callback", {
							callback: k.default,
							notify: !0
						});
					}}
      theme="icon tertiary">
      <vaadin-icon .svg="${ls.fileCopy}"></vaadin-icon>
      <vaadin-tooltip slot="tooltip" text="Copy to clipboard"></vaadin-tooltip>
    </vaadin-button>`;
				}
			}, j = O$1([u("copilot-info-actions")], j), M = {
				header: "Info",
				tag: "copilot-info-panel",
				actionsTag: "copilot-info-actions",
				eager: !0,
				toolbarOptions: {
					iconKey: "info",
					allowedModesWithOrder: { common: 0 }
				}
			}, window.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(M);
			} });
		}))();
	})))();
}
//#endregion
init_copilot_info_plugin_CaliPGUZ();
export { j as Actions, A as CopilotInfoPanel };
