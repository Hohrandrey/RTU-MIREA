import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { B as da, G as init_icons_wGoYEurg, Y as ls, _t as zt, ct as ua, lt as us, mt as xi, o as Bo, t as $, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { c as s, i as init_consts_CUwyMiZU, l as t, n as c, s as o$1, u } from "./consts-CUwyMiZU-idb3fN8k.js";
import { i as n, n as i, o as t$1, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { n as n$1, r as t$2, t as init_early_project_state_D_4_8bD_ } from "./early-project-state-D-4_8bD--qzpvKar5.js";
import { f as init_copilot_error_handler_sDuOm7hQ, o as I, t as $$1 } from "./copilot-error-handler-sDuOm7hQ-DXZIpLPg.js";
import { a as V$1, c as init_section_panel_ui_state_Dbt9i_HL, f as z, i as R, l as k, n as D, r as O, s as g, t as B$1, u as u$1 } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { h as k$1, o as M, p as init_copilot_unsaved_operation_coordinator_c33G49kp } from "./copilot-unsaved-operation-coordinator-c33G49kp-CtBUCxuE.js";
import { da as m, la as h, pa as y, sa as b, ua as init_copilot_development_setup_user_guide_utils_DHoOu3hs } from "./generated-BXM-NgLv.js";
import { n as m$1, r as p, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-development-setup-user-guide-Cp6EIjC6.js
function B(e, t) {
	if (!t) return !0;
	let [n, r, i] = t.split(".").map((e) => Number.parseInt(e)), [a, o, s] = e.split(".").map((e) => Number.parseInt(e));
	if (n < a) return !0;
	if (n === a) {
		if (r < o) return !0;
		if (r === o) return i < s;
	}
	return !1;
}
var V, H, U, W, G, K;
function init_copilot_development_setup_user_guide_Cp6EIjC6() {
	return (init_copilot_development_setup_user_guide_Cp6EIjC6 = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_consts_CUwyMiZU();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_unsaved_operation_coordinator_c33G49kp();
		init_copilot_error_handler_sDuOm7hQ();
		init_early_project_state_D_4_8bD_();
		init_copilot_development_setup_user_guide_utils_DHoOu3hs();
		init_base_panel_D7BvA8tH();
		o((() => {
			us(), D(), V$1(), cs(), xi(), u(), a(), b(), n(), $$1(), da(), n$1(), M(), m$1(), z(), k(), H = "https://github.com/JetBrains/JetBrainsRuntime/releases", U = "Download complete", W = (V = class extends p {
				createRenderRoot() {
					return this;
				}
				constructor() {
					super(), this.javaPluginSectionOpened = !1, this.hotswapSectionOpened = !1, this.hotswapTab = "hotswapagent", this.downloadStatusMessages = [], this.downloadProgress = 0, this.onDownloadStatusUpdate = this.downloadStatusUpdate.bind(this), this.handleESC = (e) => {
						k$1().appInteractable || e.key === "Escape" && B$1.openPanel(K.tag);
					}, this.reaction(() => [t$2.jdkInfo, i.idePluginState], () => {
						i.idePluginState && (!i.idePluginState.ide || !i.idePluginState.active ? this.javaPluginSectionOpened = !0 : (!(/* @__PURE__ */ new Set(["vscode", "intellij"])).has(i.idePluginState.ide) || !i.idePluginState.active) && (this.javaPluginSectionOpened = !1)), t$2.jdkInfo && m() !== "success" && (this.hotswapSectionOpened = !0);
					}, { fireImmediately: !0 });
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("contents"), t$1.on("set-up-vs-code-hotswap-status", this.onDownloadStatusUpdate);
				}
				disconnectedCallback() {
					super.disconnectedCallback(), t$1.off("set-up-vs-code-hotswap-status", this.onDownloadStatusUpdate);
				}
				render() {
					let e = {
						intellij: i.idePluginState?.ide === "intellij",
						vscode: i.idePluginState?.ide === "vscode",
						eclipse: i.idePluginState?.ide === "eclipse",
						idePluginInstalled: !!i.idePluginState?.active
					};
					return Bo`
      ${this.renderPluginSection(e)}
      <hr class="border-b border-e-0 border-s-0 border-t-0 mx-4 my-0" />
      ${this.renderHotswapSection(e)}
    `;
				}
				renderPluginSection(e) {
					let t = "";
					e.intellij ? t = "IntelliJ" : e.vscode ? t = "VS Code" : e.eclipse && (t = "Eclipse");
					let n, i;
					e.vscode || e.intellij ? e.idePluginInstalled ? (n = `Plugin for ${t} installed`, i = this.renderPluginInstalledContent()) : (n = `Plugin for ${t} not installed`, i = this.renderPluginIsNotInstalledContent(e)) : e.eclipse ? (n = e.idePluginInstalled ? "Eclipse plugin installed" : "Eclipse plugin not installed", i = e.idePluginInstalled ? this.renderPluginInstalledContent() : this.renderEclipsePluginContent()) : (n = "No IDE found", i = this.renderNoIdePluginContent());
					let a = e.idePluginInstalled ? ls.checkCircle : ls.warning;
					return Bo`
      <vaadin-details
        theme="reverse"
        .opened=${this.javaPluginSectionOpened}
        @opened-changed=${(e) => {
						zt(() => {
							this.javaPluginSectionOpened = e.detail.value;
						}), this.requestLayoutUpdate();
					}}>
        <vaadin-details-summary class="px-4 py-3.5" slot="summary">
          <div class="flex gap-1.5">
            <vaadin-icon
              class="${e.idePluginInstalled ? "text-teal-11" : "text-ruby-11"}"
              .svg=${a}></vaadin-icon>
            <span>${n}</span>
          </div>
        </vaadin-details-summary>
        <div>${i}</div>
      </vaadin-details>
    `;
				}
				renderNoIdePluginContent() {
					return Bo`
      <div class="flex flex-col gap-2 pb-4 px-4">
        <p class="m-0 text-secondary">
          For the best development experience, use
          <a class="gap-1 inline-flex items-center" href="https://code.visualstudio.com"
            ><vaadin-icon class="icon-sm" .svg=${ls.vsCode}></vaadin-icon>Visual Studio Code</a
          >
          or
          <a class="gap-1 inline-flex items-center" href="https://www.jetbrains.com/idea"
            ><vaadin-icon class="icon-sm" .svg=${ls.intelliJ}></vaadin-icon>IntelliJ IDEA</a
          >.
        </p>
      </div>
    `;
				}
				renderEclipsePluginContent() {
					return Bo`
      <div class="flex flex-col gap-2 items-start pb-4 px-4">
        <p class="m-0 text-secondary">Install the Vaadin Eclipse Plugin to ensure a smooth development workflow</p>
        <p class="m-0 text-secondary">
          Installing the plugin is not required, but strongly recommended. Some Vaadin Copilot functionality, such as
          undo, will not function optimally without the plugin.
        </p>
        <vaadin-button
          class="mt-2"
          @click="${() => {
						window.open(c, "_blank");
					}}"
          >Install from Eclipse Marketplace
          <vaadin-icon slot="suffix" .svg="${ls.arrowOutward}"></vaadin-icon>
        </vaadin-button>
      </div>
    `;
				}
				renderPluginInstalledContent() {
					return Bo`
      <p class="m-0 pb-4 px-4 text-secondary">You have a running plugin. Enjoy your awesome development workflow!</p>
    `;
				}
				renderPluginIsNotInstalledContent(e) {
					let t = null, n = "Install from Marketplace";
					return e.intellij ? (t = o$1, n = "Install from JetBrains Marketplace") : e.vscode ? (t = s, n = "Install from VSCode Marketplace") : e.eclipse && (t = c, n = "Install from Eclipse Marketplace"), Bo`
      <div class="flex flex-col gap-2 items-start pb-4 px-4">
        <p class="m-0 text-secondary">Install the Vaadin IDE Plugin to ensure a smooth development workflow</p>
        <p class="m-0 text-secondary">
          Installing the plugin is not required, but strongly recommended. Some Vaadin Copilot functionality, such as
          undo, will not function optimally without the plugin.
        </p>
        ${t ? Bo` <vaadin-button
              class="mt-2"
              @click="${() => {
						window.open(t, "_blank");
					}}"
              >${n}
              <vaadin-icon slot="suffix" .svg="${ls.arrowOutward}"></vaadin-icon>
            </vaadin-button>` : $}
      </div>
    `;
				}
				getActiveTabContent(e, t) {
					return this.hotswapTab === "jrebel" ? t.jrebel ? this.renderJRebelInstalledContent() : this.renderJRebelNotInstalledContent() : e.intellij ? this.renderIntelliJHotswapHint() : e.vscode ? this.renderVSCodeHotswapHint() : this.renderHotswapAgentNotInstalledContent(e);
				}
				renderHotswapSection(e) {
					let { jdkInfo: t } = t$2;
					if (!t) return $;
					let n = m(), i = h(), o, l;
					n === "success" ? (o = ls.checkCircle, l = "Java Hotswap is enabled") : n === "warning" ? (o = ls.warning, l = "Java Hotswap is not enabled") : n === "error" && (o = ls.warning, l = "Java Hotswap is partially enabled");
					let u = this.getActiveTabContent(e, t), d = i === "jrebel" ? this.renderJRebelInstalledContent() : this.renderHotswapAgentInstalledContent(), f = this.hotswapTab === "hotswapagent" ? 0 : 1;
					return Bo` <vaadin-details
      theme="reverse"
      .opened=${this.hotswapSectionOpened}
      @opened-changed=${(e) => {
						zt(() => {
							this.hotswapSectionOpened = e.detail.value;
						}), this.requestLayoutUpdate();
					}}>
      <vaadin-details-summary class="px-4 py-3.5" slot="summary">
        <div class="flex gap-1.5">
          <vaadin-icon
            class="${n === "success" ? "text-teal-11" : "text-ruby-11"}"
            .svg=${o}></vaadin-icon>
          <span>${l}</span>
        </div>
      </vaadin-details-summary>
      <div>
        ${i === "none" ? Bo`
              <vaadin-tabs
                .selected=${f}
                @selected-changed=${(e) => {
						this.hotswapTab = e.detail.value === 0 ? "hotswapagent" : "jrebel";
					}}>
                <vaadin-tab>Hotswap Agent</vaadin-tab>
                <vaadin-tab>JRebel</vaadin-tab>
              </vaadin-tabs>
              ${u}
            ` : Bo`${d}`}
      </div>
    </vaadin-details>`;
				}
				renderJRebelNotInstalledContent() {
					return Bo`
      <div class="flex flex-col gap-2 p-4">
        <p class="m-0 text-secondary">
          <a class="inline-flex items-center" href="https://www.jrebel.com"
            >JRebel <vaadin-icon class="icon-sm" .svg=${ls.arrowOutward}></vaadin-icon
          ></a>
          is a commercial hotswap solution. Vaadin detects the JRebel Agent and automatically reloads the application in
          the browser after the Java changes have been hotpatched.
        </p>
        <p class="m-0 text-secondary">
          Go to
          <a
            class="inline-flex items-center"
            href="https://www.jrebel.com/products/jrebel/learn"
            target="_blank"
            rel="noopener noreferrer">
            https://www.jrebel.com/products/jrebel/learn
            <vaadin-icon class="icon-sm" .svg=${ls.arrowOutward}></vaadin-icon
          ></a>
          to get started.
        </p>
      </div>
    `;
				}
				renderHotswapAgentNotInstalledContent(e) {
					return Bo` <div class="p-2">${[
						this.renderJavaRunningInDebugModeSection(),
						this.renderHotswapAgentJdkSection(e),
						this.renderInstallHotswapAgentJdkSection(e),
						this.renderHotswapAgentVersionSection(),
						this.renderHotswapAgentMissingArgParam(e)
					]}</div> `;
				}
				renderIntelliJHotswapHint() {
					return Bo` <div class="flex flex-col gap-2 p-4">
      <h3 class="font-semibold my-0 text-sm">Use 'Debug using Hotswap Agent' launch configuration</h3>
      <p class="m-0 text-secondary">
        Vaadin IntelliJ plugin offers launch mode that does not require any manual configuration!
      </p>
      <p class="m-0 text-secondary">
        In order to run recommended launch configuration, you should click three dots right next to Debug button and
        select
        <code class="bg-gray-3 dark:bg-gray-7 font-mono inline-flex px-1.5 py-px rounded-md text-body text-xs"
          >Debug using Hotswap Agent</code
        >
        option.
      </p>
    </div>`;
				}
				renderVSCodeHotswapHint() {
					return Bo` <div>
      <h3 class="font-semibold my-0 text-sm">Use 'Debug (hotswap)'</h3>
      With Vaadin Visual Studio Code extension you can run Hotswap Agent without any manual configuration required!
      <p class="m-0">
        Click
        <code class="bg-gray-3 dark:bg-gray-7 font-mono inline-flex px-1.5 py-px rounded-md text-body text-xs"
          >Debug (hotswap)</code
        >
        within your main class to debug application using Hotswap Agent.
      </p>
    </div>`;
				}
				renderJavaRunningInDebugModeSection() {
					return Bo`
      <vaadin-details theme="reverse" .opened="${!t$2.jdkInfo?.runningInJavaDebugMode}">
        <vaadin-details-summary class="p-2" slot="summary">Run Java in debug mode</vaadin-details-summary>
        <p class="m-0 pb-2 px-2 text-secondary">Start the application in debug mode in the IDE.</p>
      </vaadin-details>
    `;
				}
				renderHotswapAgentMissingArgParam(e) {
					return Bo`
      <vaadin-details theme="reverse" .opened="${!(t$2.jdkInfo?.runningWitHotswap && t$2.jdkInfo?.runningWithExtendClassDef)}">
        <vaadin-details-summary class="p-2" slot="summary">Enable HotswapAgent</vaadin-details-summary>
        <div class="flex flex-col gap-2 pb-2 px-2 text-secondary">
          <ul class="m-0 ps-4">
            ${e.intellij ? Bo`<li>Launch as mentioned in the previous step</li>` : $}
            ${e.intellij ? Bo`<li>
                  To manually configure IntelliJ, add the
                  <code
                    class="bg-gray-3 dark:bg-gray-7 break-all font-mono inline-flex px-1.5 py-px rounded-md text-body text-xs"
                    >-XX:HotswapAgent=fatjar -XX:+AllowEnhancedClassRedefinition -XX:+UpdateClasses</code
                  >
                  JVM arguments when launching the application.
                </li>` : Bo`<li>
                  Add the
                  <code
                    class="bg-gray-3 dark:bg-gray-7 break-all font-mono inline-flex px-1.5 py-px rounded-md text-body text-xs"
                    >-XX:HotswapAgent=fatjar -XX:+AllowEnhancedClassRedefinition -XX:+UpdateClasses</code
                  >
                  JVM arguments when launching the application.
                </li>`}
          </ul>
        </div>
      </vaadin-details>
    `;
				}
				renderHotswapAgentJdkSection(e) {
					let t = t$2.jdkInfo?.extendedClassDefCapable, n = this.downloadStatusMessages?.[this.downloadStatusMessages.length - 1] === U, r = this.downloadProgress > 0 ? Bo`<vaadin-progress-bar .value="${this.downloadProgress}" min="0" max="1"></vaadin-progress-bar>` : $, i$1 = n ? Bo`<h3 class="font-semibold my-0 text-sm">
          Go to VS Code and launch the 'Debug using Hotswap Agent' configuration
        </h3>` : $;
					return Bo`
      <vaadin-details theme="reverse" .opened="${!t}">
        <vaadin-details-summary class="p-2" slot="summary">Run using JetBrains Runtime JDK</vaadin-details-summary>
        <div class="flex flex-col gap-2 pb-2 px-2 text-secondary">
          <p class="m-0">JetBrains Runtime provides much better hotswapping compared to other JDKs.</p>
          <ul class="m-0 ps-4">
            ${e.intellij && B("1.3.0", i.idePluginState?.version) ? Bo` <li>Upgrade to the latest IntelliJ plugin</li>` : $}
            ${e.intellij ? Bo` <li>Launch the application in IntelliJ using "Debug using Hotswap Agent"</li>` : $}
            ${e.vscode ? Bo` <li>
                  <a href @click="${(e) => this.downloadJetbrainsRuntime(e)}"
                    >Let Copilot download and set up JetBrains Runtime for VS Code</a
                  >
                  ${r}
                  <ul>
                    ${this.downloadStatusMessages.map((e) => Bo`<li>${e}</li>`)} ${i$1}
                  </ul>
                </li>` : $}
            <li>
              ${e.intellij || e.vscode ? Bo`If there is a problem, you can manually
                    <a target="_blank" href="${H}">download JetBrains Runtime JDK</a> and set up your
                    debug configuration to use it.` : Bo`<a target="_blank" href="${H}">Download JetBrains Runtime JDK</a> and set up
                    your debug configuration to use it.`}
            </li>
          </ul>
        </div>
      </vaadin-details>
    `;
				}
				renderInstallHotswapAgentJdkSection(e) {
					let t = t$2.jdkInfo?.hotswapAgentFound, n = t$2.jdkInfo?.extendedClassDefCapable;
					return Bo`
      <vaadin-details theme="reverse" .opened="${!t}">
        <vaadin-details-summary class="p-2" slot="summary"> Install HotswapAgent </vaadin-details-summary>
        <div class="flex flex-col gap-2 pb-2 px-2 text-secondary">
          <p class="m-0">
            Hotswap Agent provides application level support for hot reloading, such as reinitalizing Vaadin @Route or
            @BrowserCallable classes when they are updated.
          </p>
          <ul class="m-0 ps-4">
            ${e.intellij ? Bo`<li>Launch as mentioned in the previous step</li>` : $}
            ${!e.intellij && !n ? Bo`<li>First install JetBrains Runtime as mentioned in the step above.</li>` : $}
            ${e.intellij ? Bo`<li>
                  To manually configure IntelliJ, download HotswapAgent and install the jar file as
                  <code class="bg-gray-3 dark:bg-gray-7 font-mono inline-flex px-1.5 py-px rounded-md text-body text-xs"
                    >[JAVA_HOME]/lib/hotswap/hotswap-agent.jar</code
                  >
                  in the JetBrains Runtime JDK. Note that the file must be renamed to exactly match this path.
                </li>` : Bo`<li>
                  Download HotswapAgent and install the jar file as
                  <code class="bg-gray-3 dark:bg-gray-7 font-mono inline-flex px-1.5 py-px rounded-md text-body text-xs"
                    >[JAVA_HOME]/lib/hotswap/hotswap-agent.jar</code
                  >
                  in the JetBrains Runtime JDK. Note that the file must be renamed to exactly match this path.
                </li>`}
          </ul>
        </div>
      </vaadin-details>
    `;
				}
				renderHotswapAgentVersionSection() {
					if (!t$2.jdkInfo?.hotswapAgentFound) return $;
					let e = t$2.jdkInfo?.hotswapVersionOk, t = t$2.jdkInfo?.hotswapVersion, n = t$2.jdkInfo?.hotswapAgentLocation;
					return Bo`
      <vaadin-details theme="reverse" .opened="${!e}">
        <vaadin-details-summary class="p-2" slot="summary">Hotswap version requires update</vaadin-details-summary>
        <div>
          HotswapAgent version ${t} is in use
          <a target="_blank" href="https://github.com/HotswapProjects/HotswapAgent/releases"
            >Download the latest HotswapAgent</a
          >
          and place it in
          <code class="bg-gray-3 dark:bg-gray-7 font-mono inline-flex px-1.5 py-px rounded-md text-body text-xs"
            >${n}</code
          >
        </div>
      </vaadin-details>
    `;
				}
				renderJRebelInstalledContent() {
					return Bo` <p class="m-0 pb-2 px-2">JRebel is in use. Enjoy your awesome development workflow!</p> `;
				}
				renderHotswapAgentInstalledContent() {
					return Bo`
      <p class="m-0 pb-4 px-4 text-secondary">Hotswap agent is in use. Enjoy your awesome development workflow!</p>
    `;
				}
				async downloadJetbrainsRuntime(e) {
					return e.target.disabled = !0, e.preventDefault(), this.downloadStatusMessages = [], ua(`${t}set-up-vs-code-hotswap`, {}, (e) => {
						e.data.error ? (I("Error downloading JetBrains runtime", e.data.error), this.downloadStatusMessages = [...this.downloadStatusMessages, "Download failed"]) : this.downloadStatusMessages = [...this.downloadStatusMessages, U];
					});
				}
				downloadStatusUpdate(e) {
					let t = e.detail.progress;
					t ? this.downloadProgress = t : this.downloadStatusMessages = [...this.downloadStatusMessages, e.detail.message];
				}
			}, V.NAME = "copilot-development-setup-user-guide", V), O([g()], W.prototype, "javaPluginSectionOpened", void 0), O([g()], W.prototype, "hotswapSectionOpened", void 0), O([g()], W.prototype, "hotswapTab", void 0), O([g()], W.prototype, "downloadStatusMessages", void 0), O([g()], W.prototype, "downloadProgress", void 0), W = O([u$1(W.NAME)], W), G = class extends R {
				createRenderRoot() {
					return this;
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("contents");
				}
				render() {
					return Bo`<vaadin-button
      id="close"
      @click="${() => B$1.closePanel(K.tag)}"
      >Close
    </vaadin-button>`;
				}
			}, G = O([u$1("copilot-development-setup-footer-actions")], G), K = {
				header: "Development Workflow",
				tag: y,
				footerActionsTag: "copilot-development-setup-footer-actions",
				individual: !0
			}, globalThis.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(K);
			} }), B$1.addPanel(K);
		}))();
	})))();
}
//#endregion
init_copilot_development_setup_user_guide_Cp6EIjC6();
export { G as CopilotDevelopmentSetupFooterActions, W as CopilotDevelopmentSetupUserGuide, K as copilotDevelopmentSetupPanelConfig };
