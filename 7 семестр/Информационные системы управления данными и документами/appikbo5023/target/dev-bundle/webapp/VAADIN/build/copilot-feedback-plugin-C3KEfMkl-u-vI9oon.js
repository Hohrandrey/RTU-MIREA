import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { E as Ua, G as init_icons_wGoYEurg, Y as ls, _t as zt, a as B$1, j as Wa, lt as us, mt as xi, o as Bo, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as init_consts_CUwyMiZU, l as t, u } from "./consts-CUwyMiZU-idb3fN8k.js";
import { i as n, n as i, o as t$1, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { c as u$1, i as init_stats_rEPv3bOZ, s } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
import { a as V, c as init_section_panel_ui_state_Dbt9i_HL, d as x, f as z$1, i as R$1, l as k, n as D, r as O, s as g, t as B$2, u as u$2 } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { Da as s$1, Ea as init_copilot_message_box_krJnoslR, Ta as a$1 } from "./generated-BXM-NgLv.js";
import { n as m, r as p, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-feedback-plugin-C3KEfMkl.js
var M, N, P, F, I, L, R, z, B;
function init_copilot_feedback_plugin_C3KEfMkl() {
	return (init_copilot_feedback_plugin_C3KEfMkl = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_consts_CUwyMiZU();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_message_box_krJnoslR();
		init_stats_rEPv3bOZ();
		init_base_panel_D7BvA8tH();
		o((() => {
			D(), m(), z$1(), cs(), xi(), s$1(), Wa(), u(), n(), us(), V(), u$1(), a(), k(), M = "https://github.com/vaadin", N = "https://github.com/vaadin/copilot/issues/new", P = "?template=feature_request.md&title=%5BFEATURE%5D", F = "A short, concise description of the bug and why you consider it a bug. Any details like exceptions and logs can be helpful as well.", I = "Please provide as many details as possible, this will help us deliver a fix as soon as possible.%0AThank you!%0A%0A%23%23%23 Description of the Bug%0A%0A{description}%0A%0A%23%23%23 Expected Behavior%0A%0AA description of what you would expect to happen. (Sometimes it is clear what the expected outcome is if something does not work, other times, it is not super clear.)%0A%0A%23%23%23 Minimal Reproducible Example%0A%0AWe would appreciate the minimum code with which we can reproduce the issue.%0A%0A%23%23%23 Versions%0A{versionsInfo}", L = B$1({
				showForm: !0,
				submitDisabled: !1
			}), R = class extends p {
				constructor() {
					super(), this.description = "", this.types = [
						{
							label: "General feedback",
							value: "feedback",
							ghTitle: ""
						},
						{
							label: "Report a bug",
							value: "bug",
							ghTitle: "[BUG]"
						},
						{
							label: "Ask a question",
							value: "question",
							ghTitle: "[QUESTION]"
						},
						{
							label: "Share an idea",
							value: "idea",
							ghTitle: "[FEATURE]"
						}
					], this.type = this.types[0].value, this.topics = [
						{
							label: "Generic",
							value: "platform"
						},
						{
							label: "Flow",
							value: "flow"
						},
						{
							label: "Hilla",
							value: "hilla"
						},
						{
							label: "Copilot",
							value: "copilot"
						}
					], this.topic = this.topics[0].value;
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("contents");
				}
				willUpdate(e) {
					super.willUpdate(e), this.syncFooterState();
				}
				syncFooterState() {
					let e = this.message === void 0, t = this.type === "question" && !this.email;
					(L.showForm !== e || L.submitDisabled !== t) && zt(() => {
						L.showForm = e, L.submitDisabled = t;
					});
				}
				getPreferredHeight() {
					return 620;
				}
				render() {
					return Bo`<div class="flex flex-col gap-4 pb-4 px-4">${this.renderContent()}</div>`;
				}
				renderContent() {
					return this.message === void 0 ? Bo`
          ${a$1("info", "Your feedback means a lot to us. Whether you've encountered an issue, have a question, or have ideas to improve our platform, we'd love to hear from you. Feel free to leave your email and we'll get back to you — you can also share a code snippet to help us better understand your experience.", void 0, { icon: ls.favorite })}
          <vaadin-radio-group
            label="Type"
            theme="toggle"
            .value="${this.type}"
            @value-changed=${(e) => {
						this.type = e.detail.value;
					}}>
            ${this.types.map((e) => Bo`<vaadin-radio-button .value="${e.value}" label="${e.label}"></vaadin-radio-button>`)}
          </vaadin-radio-group>
          <vaadin-select
            label="Topic"
            overlay-class="alwaysVisible"
            .items=${this.topics}
            .value="${this.topic}"
            .hidden=${this.type !== "feedback"}
            @value-changed=${(e) => {
						this.topic = e.detail.value;
					}}>
          </vaadin-select>
          <vaadin-text-area
            min-rows="3"
            .value="${this.description}"
            @keydown=${this.keyDown}
            @focus=${() => {
						this.descriptionField.invalid = !1, this.descriptionField.placeholder = "";
					}}
            @value-changed=${(e) => {
						this.description = e.detail.value;
					}}
            label="Your Feedback"
            placeholder="What happened, what you expected, or what you'd change..."></vaadin-text-area>
          <vaadin-email-field
            @keydown=${this.keyDown}
            @value-changed=${(e) => {
						this.email = e.detail.value;
					}}
            .required=${this.type === "question"}
            id="email"
            value="${i.userInfo?.email}"
            label="Email${this.type === "question" ? "" : " (optional)"}"></vaadin-email-field>
        ` : Bo`<p class="m-0">${this.message}</p>`;
				}
				createGithubIssue() {
					t$1.emit("system-info-with-callback", {
						callback: (e) => this.openGithub(e, this),
						notify: !1
					});
				}
				close() {
					B$2.closePanel("copilot-feedback-panel");
				}
				submit() {
					if (s("feedback", {
						github: !1,
						type: this.type,
						topic: this.topic
					}), this.description.trim() === "") {
						this.descriptionField.invalid = !0, this.descriptionField.placeholder = "Please tell us more before sending", this.descriptionField.value = "";
						return;
					}
					let e = {
						description: this.description,
						email: this.email,
						type: this.type,
						topic: this.topic
					};
					t$1.emit("system-info-with-callback", {
						callback: (n) => Ua(`${t}feedback`, {
							...e,
							versions: n
						}),
						notify: !1
					}), this.parentNode?.style.setProperty("--section-height", "150px"), this.message = "Thank you for sharing feedback.";
				}
				keyDown(e) {
					(e.key === "Backspace" || e.key === "Delete") && e.stopPropagation();
				}
				openGithub(e, t) {
					if (s("feedback", {
						github: !0,
						type: this.type,
						topic: this.topic
					}), this.type === "idea") {
						window.open(`${N}${P}`);
						return;
					}
					if (this.type === "feedback") {
						window.open(`${M}/${this.topic}/issues/new`);
						return;
					}
					let n = e ? e.replace(/\n/g, "%0A") : "Activate Copilot to include version info.", r = `${t.types.find((e) => e.value === this.type)?.ghTitle}`, i = t.description === "" ? F : t.description, a = I.replace("{description}", i).replace("{versionsInfo}", n);
					window.open(`${N}?title=${r}&body=${a}`, "_blank")?.focus();
				}
			}, O([g()], R.prototype, "description", void 0), O([g()], R.prototype, "type", void 0), O([g()], R.prototype, "topic", void 0), O([g()], R.prototype, "email", void 0), O([g()], R.prototype, "message", void 0), O([g()], R.prototype, "types", void 0), O([g()], R.prototype, "topics", void 0), O([x("vaadin-text-area")], R.prototype, "descriptionField", void 0), R = O([u$2("copilot-feedback-panel")], R), z = class extends R$1 {
				createRenderRoot() {
					return this;
				}
				connectedCallback() {
					super.connectedCallback(), this.classList.add("contents");
				}
				getPanel() {
					return this.closest("vaadin-dialog")?.querySelector("copilot-feedback-panel") ?? null;
				}
				render() {
					return L.showForm ? Bo`
      <vaadin-button
        style="margin-inline-end: auto"
        theme="tertiary"
        @click=${() => this.getPanel()?.createGithubIssue()}>
        <vaadin-icon slot="prefix" .svg="${ls.github}"></vaadin-icon>
        Create GitHub Issue
      </vaadin-button>
      <vaadin-button theme="tertiary" @click=${() => this.getPanel()?.close()}>Cancel</vaadin-button>
      <vaadin-button
        theme="primary"
        ?disabled=${L.submitDisabled}
        @click=${() => this.getPanel()?.submit()}>
        Submit
      </vaadin-button>
    ` : Bo`<vaadin-button @click=${() => this.getPanel()?.close()}>Close</vaadin-button>`;
				}
			}, z = O([u$2("copilot-feedback-footer-actions")], z), B = {
				header: "Help Us Improve!",
				tag: "copilot-feedback-panel",
				footerActionsTag: "copilot-feedback-footer-actions",
				individual: !0
			}, window.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(B);
			} }), B$2.addPanel(B);
		}))();
	})))();
}
//#endregion
init_copilot_feedback_plugin_C3KEfMkl();
export { z as CopilotFeedbackFooterActions, R as CopilotFeedbackPanel };
