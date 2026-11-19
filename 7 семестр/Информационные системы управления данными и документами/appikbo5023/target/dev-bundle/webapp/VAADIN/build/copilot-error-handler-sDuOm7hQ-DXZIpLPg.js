import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { $ as ns, B as da, C as Sa, G as init_icons_wGoYEurg, Y as ls, b as Nt, c as Ci, ct as ua, d as Ei, k as Vo, l as Da, lt as us, mt as xi, o as Bo, t as $$1, y as Ma, z as cs } from "./icons-wGoYEurg-B6sT7cxU.js";
import { i as init_consts_CUwyMiZU, l as t, u } from "./consts-CUwyMiZU-idb3fN8k.js";
import { i as n, n as i, o as t$1, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { c as u$1, i as init_stats_rEPv3bOZ } from "./stats-rEPv3bOZ-CGdJ9hAu.js";
import { a as t$2, i as r, n as init_directive_CZ105jp5, r as n$1, t as i$1 } from "./directive-CZ105jp5-Caa0256i.js";
import { n as n$2, r as t$3, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
import { n as h, r as init_copilot_notification_B9WA4gMj } from "./copilot-notification-B9WA4gMj-Bnw6rImb.js";
import { n as n$3, r as t$4, t as init_early_project_state_D_4_8bD_ } from "./early-project-state-D-4_8bD--qzpvKar5.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-error-handler-sDuOm7hQ.js
function O() {
	let e = i.userInfo;
	return !e || e.copilotProjectCannotLeaveLocalhost ? !1 : t$3.isSendErrorReportsAllowed();
}
function A() {
	return i.idePluginState?.supportedActions?.find((e) => e === "restartApplication");
}
function j() {
	ua(`${t}plugin-restart-application`, {}, () => {}).catch((e) => {
		I("Error restarting server", e);
	});
}
function le() {
	return t$4.jdkInfo?.jrebel || t$4.jdkInfo?.runningWitHotswap && t$4.jdkInfo?.runningWithExtendClassDef;
}
function N(e) {
	if (e === void 0) return !1;
	let t = Object.keys(e);
	return t.length === 1 && t.includes("message") || t.length >= 3 && t.includes("message") && t.includes("exceptionMessage") && t.includes("exceptionStacktrace");
}
function P() {
	let e = "A server restart is required";
	return A() ? Sa(Bo`${e}${F()}`) : Sa(Bo`${e}`);
}
function F() {
	return A() ? Bo`<vaadin-button
      class="mt-2"
      theme="primary"
      @click=${(e) => {
		let t = e.target;
		t.disabled = !0, t.innerText = "Restarting...", j();
	}}>
      Restart Now
    </vaadin-button>` : $$1;
}
function I(e, r) {
	let i = r;
	if (i && Y(i)) {
		X(i);
		return;
	}
	let a = N(r) ? r.exceptionMessage ?? r.message : r, o = {
		type: Ci.ERROR,
		message: "Copilot internal error",
		details: e + (a ? `\n${a}` : "")
	};
	N(r) && r.suggestRestart && A() && (o.details = Sa(Bo`${e}<br />${a} ${F()}`), o.delay = 3e4), Da(o);
	let c;
	c = r instanceof Error ? r.stack : N(r) ? r?.exceptionStacktrace?.join("\n") : r?.toString(), t$1.emit("system-info-with-callback", {
		callback: (t) => t$1.send("copilot-error", {
			message: `Copilot internal error: ${e}`,
			details: c,
			versions: t
		}),
		notify: !1
	});
}
function L(e) {
	return e?.stack?.includes("cdn.vaadin.com/copilot") || e?.stack?.includes("/copilot/copilot/") || e?.stack?.includes("/copilot/copilot-private/");
}
function R() {
	let e = window.onerror;
	window.onerror = (t, n, r, i, a) => {
		if (L(a)) {
			I(t.toString(), a);
			return;
		}
		e && e(t, n, r, i, a);
	}, Nt((e) => {
		L(e) && I("", e);
	});
	let t = window.Vaadin.ConsoleErrors;
	if (Array.isArray(t)) for (let e of t) Array.isArray(e) ? Q.push(...e) : Q.push(e);
	B((e) => Q.push(e));
}
function z(e, t, n, r, i, a) {
	let o = { ...e }, s = window.Vaadin.copilot.tree, c = window.Vaadin.copilot.customComponentHandler;
	o.nodes.forEach((e) => {
		e.node = s.allNodesFlat.find((t) => {
			if (!t.isFlowComponent) return !1;
			let n = t.node;
			return n.uiId === e.uiId && n.nodeId === e.nodeId;
		});
	});
	let l = [];
	n && l.push(`Error Message -> ${n}`), r && l.push(`Error Details -> ${r}`), l.push(`Active Level -> ${c.getActiveDrillDownContext() ? c.getActiveDrillDownContext()?.nameAndIdentifier : "No active level"}`), o.nodes.length > 0 && (l.push("\nRelevant Nodes:"), o.nodes.forEach((e) => {
		l.push(`${e.relevance} -> ${e.node?.nameAndIdentifier ?? "Node not found"}`);
	})), o.relevantPairs.length > 0 && (l.push("\nAdditional Info:"), o.relevantPairs.forEach((e) => {
		l.push(`${e.relevance} -> ${e.value}`);
	})), a && (l.push("Versions"), l.push(a));
	let u = {
		name: "Info",
		content: l.join("\n")
	};
	o.items.unshift(u), i && o.items.push({
		name: "Stacktrace",
		content: i
	}), t$1.emit("system-info-with-callback", {
		callback: (e) => {
			o.items.push({
				name: "Versions",
				content: e
			}), t(o);
		},
		notify: !1
	});
}
function B(e) {
	let t = window.Vaadin.ConsoleErrors;
	window.Vaadin.ConsoleErrors = { push: (n) => {
		n[0] === null || n[0] === void 0 || (n[0].type !== void 0 && n[0].message !== void 0 ? e({
			type: n[0].type,
			message: n[0].message,
			internal: !!n[0].internal,
			details: n[0].details,
			link: n[0].link
		}) : e({
			type: Ci.ERROR,
			message: n.map((e) => V(e)).join(" "),
			internal: !1
		}), t.push(n));
	} };
}
function V(e) {
	return e.message ? e.message.toString() : e.toString();
}
var w, T, E, D, k, M, H, U, W, G, K, q, J, Y, X, Z, Q, $;
function init_copilot_error_handler_sDuOm7hQ() {
	return (init_copilot_error_handler_sDuOm7hQ = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_icons_wGoYEurg();
		init_consts_CUwyMiZU();
		init_copilot_ui_state_Dc6l_5DA();
		init_stats_rEPv3bOZ();
		init_directive_CZ105jp5();
		init_copilot_stored_machine_state_DS3t0BPl();
		init_copilot_notification_B9WA4gMj();
		init_early_project_state_D_4_8bD_();
		E = o((() => {
			ns(), i$1(), w = class extends r {
				constructor(e) {
					if (super(e), this.it = $$1, e.type !== t$2.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
				}
				render(e) {
					if (e === $$1 || e == null) return this._t = void 0, this.it = e;
					if (e === Vo) return e;
					if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
					if (e === this.it) return this._t;
					this.it = e;
					let t = [e];
					return t.raw = t, this._t = {
						_$litType$: this.constructor.resultType,
						strings: t,
						values: []
					};
				}
			}, w.directiveName = "unsafeHTML", w.resultType = 1, T = n$1(w);
		}));
		D = o((() => {
			E();
		}));
		k = o((() => {
			u$1(), a(), $(), n$2(), Ma(), h(), Ei();
		}));
		M = o((() => {
			da(), u(), $(), n(), h(), Ei(), a(), n$3();
		}));
		$ = o((() => {
			cs(), D(), xi(), n(), a(), k(), M(), Ma(), Ei(), us(), H = (e, t) => e.error ? (Z(e.error, t), !0) : !1, U = (e, r, i) => {
				Da({
					type: Ci.ERROR,
					message: e,
					details: Sa(Bo`${W(r)} ${K(i)}`),
					delay: 3e4
				});
			}, W = (e) => e.length === 0 ? $$1 : e.length < 80 ? G(e) : Bo`<vaadin-details class="flex flex-col peer w-full" theme="no-padding reverse">
    <vaadin-details-summary class="font-medium -ms-3 self-start text-secondary text-xs" slot="summary"
      >Details</vaadin-details-summary
    >
    ${G(e)}
  </vaadin-details>`, G = (e) => Bo`<code
    class="bg-gray-3 dark:bg-gray-6 box-border inline-block mb-3 mt-2 pe-8 ps-3 py-1.75 relative rounded-md text-xs truncate w-full"
    >${T(e)}<copilot-copy></copilot-copy
  ></code>`, K = (e) => e ? Bo`
    <vaadin-button
      class="peer-has-[[opened]]:mt-2"
      @click="${() => {
				e && t$1.emit("submit-exception-report-clicked", e);
			}}"
      id="report-issue">
      <vaadin-icon slot="prefix" .svg="${ls.bugReport}"></vaadin-icon>
      Report Issue</vaadin-button
    >
  ` : $$1, q = (e, t, n, r, i$2) => {
				i$2 ? z(i$2, (n) => {
					U(e, t, n);
				}, e, t, n) : U(e, t), O() && (r?.templateData && typeof r.templateData == "string" && r.templateData.startsWith("data") && (r.templateData = "<IMAGE_DATA>"), t$1.emit("system-info-with-callback", {
					callback: (t) => t$1.send("copilot-error", {
						message: e,
						details: String(n).replace("	", "\n") + (r ? `\n \nRequest: \n${JSON.stringify(r)}\n` : ""),
						versions: t
					}),
					notify: !1
				})), i.clearOperationWaitsHmrUpdate();
			}, J = ["unsupported-source-language", "mixed-language-not-supported"], Y = (e) => !!e?.code && J.includes(e.code), X = (e) => {
				Da({
					type: Ci.WARNING,
					message: e.exceptionMessage?.trim() || e.message
				}), i.clearOperationWaitsHmrUpdate();
			}, Z = (e, t) => {
				if (Y(e)) {
					X(e);
					return;
				}
				q(e.message, e.exceptionMessage ?? "", e.exceptionStacktrace?.join("\n") ?? "", t, e.exceptionReport);
			}, Q = [];
		}));
	})))();
}
//#endregion
export { H as a, P as c, T as d, init_copilot_error_handler_sDuOm7hQ as f, D as i, Q as l, le as m, A as n, I as o, j as p, B as r, M as s, $ as t, R as u };
