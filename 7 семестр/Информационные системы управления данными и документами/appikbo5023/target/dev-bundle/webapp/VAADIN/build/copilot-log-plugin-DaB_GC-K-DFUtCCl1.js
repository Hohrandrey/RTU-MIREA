import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { G as init_icons_wGoYEurg, Y as ls, _t as zt, c as Ci, d as Ei, dt as wa, lt as us, mt as xi, nt as pn, o as Bo, s as Ca, y as Ma, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as n, n as i, o as t, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { c as u, i as init_stats_rEPv3bOZ, s } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
import { f as init_copilot_error_handler_sDuOm7hQ, l as Q, r as B$1, t as $ } from "./copilot-error-handler-sDuOm7hQ-DXZIpLPg.js";
import { a as V$1, c as init_section_panel_ui_state_Dbt9i_HL, f as z$1, i as R$1, l as k, n as D, r as O, s as g, t as B$2, u as u$1 } from "./section-panel-ui-state-Dbt9i-HL-lMdcwhg0.js";
import { Da as s$1, Ea as init_copilot_message_box_krJnoslR, Ta as a$1 } from "./generated-BXM-NgLv.js";
import { n as m, r as p, t as init_base_panel_D7BvA8tH } from "./base-panel-D7BvA8tH-AFuMftln.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-log-plugin-DaB_GC-K.js
function R(e) {
	return I.format(e);
}
var F, I, L, z, B, V, H, U, W, G;
function init_copilot_log_plugin_DaB_GC_K() {
	return (init_copilot_log_plugin_DaB_GC_K = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_section_panel_ui_state_Dbt9i_HL();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_message_box_krJnoslR();
		init_stats_rEPv3bOZ();
		init_copilot_error_handler_sDuOm7hQ();
		init_base_panel_D7BvA8tH();
		L = o((() => {
			F = () => {
				let e = {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					fractionalSecondDigits: 3
				}, t, n = navigator.language ?? "", r = n.indexOf("@"), i = r === -1 ? n : n.slice(0, r);
				try {
					t = new Intl.DateTimeFormat(Intl.getCanonicalLocales(i), e);
				} catch (n) {
					console.error("Failed to create date time formatter for ", i, n), t = new Intl.DateTimeFormat("en-US", e);
				}
				return t;
			}, I = F();
		}));
		o((() => {
			cs(), D(), Ei(), m(), n(), a(), xi(), Ma(), z$1(), us(), $(), u(), s$1(), V$1(), L(), k(), V = class {
				constructor() {
					this.showTimestamps = !1, pn(this);
				}
				toggleShowTimestamps() {
					this.showTimestamps = !this.showTimestamps;
				}
			}, H = new V(), U = (z = class extends p {
				constructor(...e) {
					super(...e), this.unreadErrors = !1, this.messages = [], this.nextMessageId = 1, this.transitionDuration = 0, this.errorHandlersAdded = !1;
				}
				connectedCallback() {
					if (super.connectedCallback(), this.classList.add("contents"), this.onCommand("log", (e) => {
						this.handleLogEventData({
							type: e.data.type,
							message: e.data.message
						});
					}), this.onEventBus("log", (e) => this.handleLogEvent(e)), this.onEventBus("update-log", (e) => this.updateLog(e.detail)), this.onEventBus("notification-shown", (e) => this.handleNotification(e)), this.onEventBus("clear-log", () => this.clear()), this.reaction(() => i.sectionPanelResizing, () => {
						this.requestUpdate();
					}), this.transitionDuration = parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"), 10), !this.errorHandlersAdded) {
						let e = (e) => {
							zt(() => {
								B$2.attentionRequiredPanelTag = "copilot-log-panel";
							}), this.log(Ci.ERROR, e.message, !!e.internal, e.details, e.link);
						};
						B$1((t) => {
							e(t);
						}), Q.forEach((t) => {
							e(t);
						}), Q.length = 0, this.errorHandlersAdded = !0;
					}
				}
				clear() {
					this.messages = [];
				}
				handleNotification(e) {
					this.log(e.detail.type, e.detail.message, !0, e.detail.details, e.detail.link);
				}
				handleLogEvent(e) {
					this.handleLogEventData(e.detail);
				}
				handleLogEventData(e) {
					this.log(e.type, e.message, !!e.internal, e.details, e.link, wa(e.expandedMessage), wa(e.expandedDetails), e.id);
				}
				activate() {
					this.unreadErrors = !1, this.updateComplete.then(() => {
						let e = this.renderRoot.querySelector(".message:last-child");
						e && e.scrollIntoView();
					});
				}
				render() {
					return Bo`
      ${this.messages.length === 0 ? a$1("info", "Communication between application and backend services, errors, and all notifications will appear here.", "mb-3 mt-0 mx-3") : Bo`<ul class="border-dashed divide-y list-none m-0 pb-4 px-4">
            ${this.messages.map((e) => this.renderMessage(e))}
          </ul>`}
    `;
				}
				renderMessage(e) {
					let t, r, i;
					e.type === Ci.ERROR ? (r = ls.warning, t = "Error", i = "text-ruby-11") : e.type === Ci.WARNING ? (r = ls.warning, t = "Warning", i = "text-amber-11") : (r = ls.info, t = "Info", i = "text-blue-11");
					let a = e.expanded ? "" : "truncate";
					return Bo`
      <li class="flex gap-2 py-2" data-id="${e.id}">
        <vaadin-icon
          aria-label="${t}"
          class="${i}"
          id="log-icon-${e.id}"
          .svg="${r}"></vaadin-icon>
        <vaadin-tooltip for="log-icon-${e.id}" text="${t}"></vaadin-tooltip>
        <span class="flex flex-col flex-grow overflow-hidden" @click=${() => this.toggleExpanded(e)}>
          <span class="${a}" ?hidden=${!H.showTimestamps}>${R(e.timestamp)}</span>
          <span class="${a}">
            ${e.expanded && e.expandedMessage ? e.expandedMessage : e.message}
          </span>
          ${e.expanded ? Bo`<span id="log-details-${e.id}"
                >${e.expandedDetails ?? e.details}</span
              >` : Bo`<span
                class="${a}"
                id="log-details-${e.id}"
                ?hidden="${!e.details && !e.link}">
                ${wa(e.details)}
                ${e.link ? Bo`<a class="block mb-1" href="${e.link}" target="_blank">Learn more</a>` : ""}
              </span>`}
        </span>
        <vaadin-button
          aria-controls="log-details-${e.id}"
          aria-expanded="${e.expanded}"
          aria-label="${e.expanded ? "Collapse details" : "Expand details"}"
          theme="icon tertiary"
          @click=${() => this.toggleExpanded(e)}
          ?hidden=${!this.canBeExpanded(e)}>
          <vaadin-icon
            class="${e.expanded ? "rotate-90" : ""} transition"
            .svg="${ls.chevronRight}"></vaadin-icon>
          <vaadin-tooltip
            slot="tooltip"
            text="${e.expanded ? "Collapse details" : "Expand details"}"></vaadin-tooltip>
        </vaadin-button>
      </li>
    `;
				}
				log(e, t, n, r, i, a, o, c) {
					let l = this.nextMessageId;
					this.nextMessageId += 1, o ||= t;
					let u = {
						id: l,
						type: e,
						message: t,
						details: r,
						link: i,
						dontShowAgain: !1,
						deleted: !1,
						expanded: !1,
						expandedMessage: a,
						expandedDetails: o,
						timestamp: /* @__PURE__ */ new Date(),
						internal: n,
						userId: c
					};
					for (this.messages.push(u); this.messages.length > B.MAX_LOG_ROWS;) this.messages.shift();
					return this.requestUpdate(), this.updateComplete.then(() => {
						let t = this.renderRoot.querySelector(".message:last-child");
						t ? (setTimeout(() => t.scrollIntoView({ behavior: "smooth" }), this.transitionDuration), this.unreadErrors = !1) : e === Ci.ERROR && (this.unreadErrors = !0);
					}), u;
				}
				updateLog(e) {
					let t = this.messages.find((t) => t.userId === e.id);
					t ||= this.log(Ci.INFORMATION, "<Log message to update was not found>", !1), Object.assign(t, e), Ca(t.expandedDetails) && (t.expandedDetails = wa(t.expandedDetails)), this.requestUpdate();
				}
				updated() {
					let e = this.querySelector(".row:last-child");
					e && this.isTooLong(e.querySelector(".firstrowmessage")) && e.querySelector("button.expand")?.removeAttribute("hidden");
				}
				toggleExpanded(e) {
					this.canBeExpanded(e) && (e.expanded = !e.expanded, this.requestUpdate()), s("use-log", { source: "toggleExpanded" });
				}
				canBeExpanded(e) {
					if (e.expandedMessage || e.expanded) return !0;
					let t = this.querySelector(`[data\\-id="${e.id}"]`)?.querySelector(".firstrowmessage");
					return this.isTooLong(t);
				}
				isTooLong(e) {
					return e && e.offsetWidth < e.scrollWidth;
				}
			}, B = z, z.MAX_LOG_ROWS = 1e3, z), O([g()], U.prototype, "unreadErrors", void 0), O([g()], U.prototype, "messages", void 0), U = B = O([u$1("copilot-log-panel")], U), W = class extends R$1 {
				createRenderRoot() {
					return this;
				}
				render() {
					return Bo`
      <style>
        copilot-log-panel-actions {
          display: contents;
        }
      </style>
      <vaadin-button
        aria-label="Clear log"
        @click=${() => {
						t.emit("clear-log", {});
					}}
        theme="icon tertiary">
        <vaadin-icon .svg="${ls.delete}"></vaadin-icon>
        <vaadin-tooltip slot="tooltip" text="Clear log"></vaadin-tooltip>
      </vaadin-button>
      <vaadin-button
        aria-label="Toggle timestamps"
        @click=${() => {
						H.toggleShowTimestamps();
					}}
        theme="icon tertiary">
        <vaadin-icon .svg="${H.showTimestamps ? ls.schedule : ls.historyToggleOff}"></vaadin-icon>
        <vaadin-tooltip slot="tooltip" text="Toggle timestamps"></vaadin-tooltip>
      </vaadin-button>
    `;
				}
			}, W = O([u$1("copilot-log-panel-actions")], W), G = {
				header: "Log",
				tag: "copilot-log-panel",
				actionsTag: "copilot-log-panel-actions",
				individual: !0,
				toolbarOptions: {
					allowedModesWithOrder: { common: 0 },
					iconKey: "terminal"
				}
			}, window.Vaadin.copilot.plugins.push({ init(e) {
				e.addPanel(G);
			} }), B$2.addPanel(G);
		}))();
	})))();
}
//#endregion
init_copilot_log_plugin_DaB_GC_K();
export { W as Actions, U as CopilotLogPanel };
