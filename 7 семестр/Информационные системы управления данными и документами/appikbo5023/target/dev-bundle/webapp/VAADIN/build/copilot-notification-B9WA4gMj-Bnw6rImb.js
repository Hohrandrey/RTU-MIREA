import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { r as o, t as init_chunk_DiqZc92J } from "./chunk-DiqZc92J-ibzkesi4.js";
import { i as n, n as i, o as t, r as init_copilot_ui_state_Dc6l_5DA, t as a } from "./copilot-ui-state-Dc6l_5DA-Bl-D_b4Q.js";
import { n as n$1, r as t$1, t as init_copilot_stored_machine_state_DS3t0BPl } from "./copilot-stored-machine-state-DS3t0BPl-DtmsvVkx.js";
//#region src/main/frontend/generated/jar-resources/copilot/copilot-notification-B9WA4gMj.js
function s(e) {
	i.notifications.includes(e) && (e.dontShowAgain && e.dismissId && l(e.dismissId), i.removeNotification(e), t.emit("notification-dismissed", e));
}
function c(e) {
	return t$1.isNotificationDismissed(e);
}
function l(e) {
	c(e) || t$1.addDismissedNotification(e);
}
function u(e) {
	return !(e.dismissId && (c(e.dismissId) || i.notifications.find((t) => t.dismissId === e.dismissId)));
}
function d(e) {
	if (u(e)) return f(e);
}
function f(e) {
	let t$2 = m;
	m += 1;
	let i$1 = {
		...e,
		id: t$2,
		dontShowAgain: !1,
		animatingIn: !0,
		animatingOut: !1
	};
	return i.setNotifications([...i.notifications, i$1]), requestAnimationFrame(() => {
		i$1.animatingIn = !1, i.setNotifications([...i.notifications]);
	}), (e.delay || !e.link && !e.dismissId) && setTimeout(() => {
		s(i$1);
	}, e.delay ?? p), t.emit("notification-shown", e), i$1;
}
var p, m, h;
function init_copilot_notification_B9WA4gMj() {
	return (init_copilot_notification_B9WA4gMj = __esmMin((() => {
		init_chunk_DiqZc92J();
		init_copilot_ui_state_Dc6l_5DA();
		init_copilot_stored_machine_state_DS3t0BPl();
		h = o((() => {
			n(), n$1(), a(), p = 5e3, m = 1;
		}));
	})))();
}
//#endregion
export { s as i, h as n, init_copilot_notification_B9WA4gMj as r, d as t };
