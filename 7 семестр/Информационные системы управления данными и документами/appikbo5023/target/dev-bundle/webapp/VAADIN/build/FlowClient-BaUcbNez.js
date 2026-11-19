const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ApplicationConnection-Dd4Ehr6l.js","./rolldown-runtime-htSClZ5J.js"])))=>i.map(i=>d[i]);
import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-htSClZ5J.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-BeSU7fTM.js";
//#region src/main/frontend/generated/jar-resources/internal/assert.js
/**
* Throws an Error with the given message when the condition is falsy.
*
* Java evaluates the message expression only when the assertion fails, so a
* caller on a hot path passes a function and pays for the message only then.
*/
function assert(condition, message) {
	if (!condition) throw new Error(typeof message === "function" ? message() : message);
}
function init_assert() {
	return (init_assert = __esmMin((() => {})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/Console.js
/**
* Whether logging to the browser console should be enabled: true if either not
* in production mode, or the `vaadin.browserLog` override flag is set. Mirrors
* Console.shouldLogToBrowserConsole.
*
* @returns true if browser console logging should be enabled
*/
function shouldLogToBrowserConsole() {
	if (!isProductionMode) return true;
	return isLocalStorageFlagEnabled();
}
/**
* Whether the localStorage override flag `vaadin.browserLog` is set to "true".
* Used to force browser-console logging on in production mode. Returns false if
* localStorage is unavailable or inaccessible.
*
* Private in Console.java, so module-local here; exercised through the public
* logging methods rather than imported directly.
*
* @returns true if the flag is set to "true", false otherwise
*/
function isLocalStorageFlagEnabled() {
	try {
		return !!window.localStorage && window.localStorage.getItem("vaadin.browserLog") === "true";
	} catch (e) {
		return false;
	}
}
var isProductionMode, Console;
function init_Console() {
	return (init_Console = __esmMin((() => {
		isProductionMode = false;
		Console = {
			/**
			* Changes logger behavior, making it skip all browser logging for production
			* mode. Mirrors Console.setProductionMode.
			*
			* @param productionMode - if an application is in the production mode or not
			*/
			setProductionMode(productionMode) {
				isProductionMode = productionMode;
			},
			/**
			* Logs the message using the debug log level, unless suppressed.
			*
			* @param message - the message to log
			*/
			debug(message) {
				if (shouldLogToBrowserConsole()) console.debug(message);
			},
			/**
			* Logs the message using the info log level, unless suppressed.
			*
			* @param message - the message to log
			*/
			log(message) {
				if (shouldLogToBrowserConsole()) console.log(message);
			},
			/**
			* Logs the message using the warning log level, unless suppressed.
			*
			* @param message - the message to log
			*/
			warn(message) {
				if (shouldLogToBrowserConsole()) console.warn(message);
			},
			/**
			* Logs the message using the error log level, unless suppressed.
			*
			* @param message - the message to log
			*/
			error(message) {
				if (shouldLogToBrowserConsole()) console.error(message);
			},
			/**
			* Logs the stack trace of an exception to the browser console. The exception
			* is rethrown asynchronously (after the current task) so the browser reports
			* it through its global error handler with the highest possible fidelity.
			* Mirrors Console.reportStacktrace; the GWT version deferred the throw to
			* bypass GWT's own uncaught-exception handling, which has no equivalent here,
			* so a plain deferred rethrow is the faithful port. Not gated by production
			* mode, matching Console.java.
			*
			* @param exception - the exception for which
			*/
			reportStacktrace(exception) {
				window.setTimeout(() => {
					throw exception;
				}, 0);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ApplicationConfiguration.js
var ApplicationConfiguration;
function init_ApplicationConfiguration() {
	return (init_ApplicationConfiguration = __esmMin((() => {
		init_Console();
		ApplicationConfiguration = class {
			#applicationId = "";
			#contextRootUrl = "";
			#serviceUrl = "";
			#uiId = 0;
			#sessionExpiredError = null;
			#heartbeatInterval = 0;
			#maxMessageSuspendTimeout = 0;
			#productionMode = false;
			#requestTiming = false;
			#webComponentMode = false;
			#servletVersion = "";
			#atmosphereVersion = "";
			#atmosphereJSVersion = "";
			#exportedWebComponents = [];
			#devToolsEnabled = false;
			#liveReloadUrl = "";
			#liveReloadBackend = "";
			#springBootLiveReloadPort = "";
			/**
			* Gets the id generated for the application.
			*
			* @returns the id for the application
			*/
			getApplicationId() {
				return this.#applicationId;
			}
			/**
			* Sets the id generated for the application.
			*
			* @param applicationId - the id for the application
			*/
			setApplicationId(applicationId) {
				this.#applicationId = applicationId;
			}
			/**
			* Gets the URL to the server-side VaadinService.
			*
			* @returns the URL to the server-side service as a string
			*/
			getServiceUrl() {
				return this.#serviceUrl;
			}
			/**
			* Sets the URL to the server-side VaadinService.
			*
			* @param serviceUrl - the URL to the server-side service as a string
			*/
			setServiceUrl(serviceUrl) {
				this.#serviceUrl = serviceUrl;
			}
			/**
			* Gets the URL of the context root on the server.
			*
			* @returns the URL of the context root, ending with a "/"
			*/
			getContextRootUrl() {
				return this.#contextRootUrl;
			}
			/**
			* Sets the URL of the context root on the server.
			*
			* @param contextRootUrl - the URL of the context root, ending with a "/"
			*/
			setContextRootUrl(contextRootUrl) {
				assert(contextRootUrl.endsWith("/"), "The context root URL must end with a \"/\"");
				this.#contextRootUrl = contextRootUrl;
			}
			/**
			* Checks whether the application is running as a web-component in the page.
			*
			* @returns true in case the app is a WC
			*/
			isWebComponentMode() {
				return this.#webComponentMode;
			}
			/**
			* Sets whether the application is running as a web-component in the page.
			*
			* @param mode - set to true if it's a WC
			*/
			setWebComponentMode(mode) {
				this.#webComponentMode = mode;
			}
			/**
			* Gets the UI id of the server-side UI associated with this client-side
			* instance. The UI id should be included in every request originating from
			* this instance in order to associate the request with the right UI
			* instance on the server.
			*
			* @returns the UI id
			*/
			getUIId() {
				return this.#uiId;
			}
			/**
			* Sets the UI id of the server-side UI associated with this client-side
			* instance.
			*
			* @param uiId - the UI id
			*/
			setUIId(uiId) {
				this.#uiId = uiId;
			}
			/**
			* Gets the interval for heartbeat requests.
			*
			* @returns The interval in seconds between heartbeat requests, or -1 if heartbeat is disabled.
			*/
			getHeartbeatInterval() {
				return this.#heartbeatInterval;
			}
			/**
			* Sets the interval for heartbeat requests.
			*
			* @param heartbeatInterval - The interval in seconds between heartbeat requests, or -1 if heartbeat is disabled.
			*/
			setHeartbeatInterval(heartbeatInterval) {
				this.#heartbeatInterval = heartbeatInterval;
			}
			/**
			* Gets the maximum message suspension delay.
			*
			* @returns The maximum time, in milliseconds, to suspend out-of-order messages waiting for their predecessor before resynchronizing.
			*/
			getMaxMessageSuspendTimeout() {
				return this.#maxMessageSuspendTimeout;
			}
			/**
			* Sets the maximum message suspension delay.
			*
			* @param maxMessageSuspendTimeout - The maximum time, in milliseconds, to suspend out-of-order messages waiting for their predecessor before resynchronizing.
			*/
			setMaxMessageSuspendTimeout(maxMessageSuspendTimeout) {
				this.#maxMessageSuspendTimeout = maxMessageSuspendTimeout;
			}
			/**
			* Gets the message used when a session expiration error occurs.
			*
			* @returns the session expiration error message
			*/
			getSessionExpiredError() {
				return this.#sessionExpiredError;
			}
			/**
			* Sets the message used when a session expiration error occurs.
			*
			* @param sessionExpiredError - the session expiration error message
			*/
			setSessionExpiredError(sessionExpiredError) {
				this.#sessionExpiredError = sessionExpiredError;
			}
			/**
			* Gets the Vaadin servlet version in use.
			*
			* @returns the Vaadin servlet version in use
			*/
			getServletVersion() {
				return this.#servletVersion;
			}
			/**
			* Sets the Vaadin servlet version in use.
			*
			* @param servletVersion - the Vaadin servlet version in use
			*/
			setServletVersion(servletVersion) {
				this.#servletVersion = servletVersion;
			}
			/**
			* Gets the Atmosphere runtime version in use.
			*
			* @returns the Atmosphere runtime version in use
			*/
			getAtmosphereVersion() {
				return this.#atmosphereVersion;
			}
			/**
			* Sets the Atmosphere runtime version in use.
			*
			* @param atmosphereVersion - the Atmosphere runtime version in use
			*/
			setAtmosphereVersion(atmosphereVersion) {
				this.#atmosphereVersion = atmosphereVersion;
			}
			/**
			* Gets the Atmosphere JavaScript version in use.
			*
			* @returns the Atmosphere JavaScript version in use
			*/
			getAtmosphereJSVersion() {
				return this.#atmosphereJSVersion;
			}
			/**
			* Sets the Atmosphere JavaScript version in use.
			*
			* @param atmosphereJSVersion - the Atmosphere JavaScript version in use
			*/
			setAtmosphereJSVersion(atmosphereJSVersion) {
				this.#atmosphereJSVersion = atmosphereJSVersion;
			}
			/**
			* Checks if we are running in production mode.
			*
			* With production mode disabled, a lot more information is logged to the
			* browser console. In production you should always enable production mode,
			* because logging and other debug features can have a significant
			* performance impact.
			*
			* @returns `true` if production mode is enabled, `false` otherwise
			*/
			isProductionMode() {
				return this.#productionMode;
			}
			/**
			* Checks if request timing info should be made available.
			*
			* @returns `true` if request timing info should be made availble, `false` otherwise
			*/
			isRequestTiming() {
				return this.#requestTiming;
			}
			/**
			* Sets whether we are running in production mode.
			*
			* With production mode disabled, a lot more information is logged to the
			* browser console. In production you should always enable production mode,
			* because logging and other debug features can have a significant
			* performance impact.
			*
			* @param productionMode - `true` if production mode is enabled, `false` otherwise
			*/
			setProductionMode(productionMode) {
				this.#productionMode = productionMode;
				Console.setProductionMode(productionMode);
			}
			/**
			* Sets whether request timing info should be made available.
			*
			* @param requestTiming - `true` if request timing info should be made available, `false` otherwise
			*/
			setRequestTiming(requestTiming) {
				this.#requestTiming = requestTiming;
			}
			/**
			* Sets the exported web components.
			*
			* @param exportedWebComponents - the exported web components
			*/
			setExportedWebComponents(exportedWebComponents) {
				this.#exportedWebComponents = exportedWebComponents;
			}
			/**
			* Gets the exported web components.
			*
			* @returns the exported web components
			*/
			getExportedWebComponents() {
				return this.#exportedWebComponents;
			}
			/**
			* Gets if development tools should be added to the page.
			*
			* @returns whether development tools should be added
			*/
			isDevToolsEnabled() {
				return this.#devToolsEnabled;
			}
			/**
			*
			* Sets if development tools should be added to the page.
			*
			* @param devToolsEnabled - whether development tools should be added
			*/
			setDevToolsEnabled(devToolsEnabled) {
				this.#devToolsEnabled = devToolsEnabled;
			}
			/**
			* Gets the URL for the live reload websocket connection.
			*
			* @returns URL for the live reload websocket connection
			*/
			getLiveReloadUrl() {
				return this.#liveReloadUrl;
			}
			/**
			* Sets the URL for the live reload websocket connection.
			*
			* @param liveReloadUrl - URL for the live reload websocket connection
			*/
			setLiveReloadUrl(liveReloadUrl) {
				this.#liveReloadUrl = liveReloadUrl;
			}
			/**
			* Gets the the live reload backend technology identifier.
			*
			* @returns the live reload backend technology identifier
			*/
			getLiveReloadBackend() {
				return this.#liveReloadBackend;
			}
			/**
			* Sets the live reload backend technology identifier.
			*
			* @param liveReloadBackend - the live reload backend technology identifier
			*/
			setLiveReloadBackend(liveReloadBackend) {
				this.#liveReloadBackend = liveReloadBackend;
			}
			/**
			* Gets the Spring boot live reload port.
			*
			* @returns the Spring boot live reload port
			*/
			getSpringBootLiveReloadPort() {
				return this.#springBootLiveReloadPort;
			}
			/**
			* Sets the Spring boot live reload port.
			*
			* @param springBootLiveReloadPort - the Spring boot live reload port
			*/
			setSpringBootLiveReloadPort(springBootLiveReloadPort) {
				this.#springBootLiveReloadPort = springBootLiveReloadPort;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/bootstrap/JsoConfiguration.js
/**
* Reads a configuration parameter as a string. Please note that the
* javascript value of the parameter should also be a string, or else an
* undefined exception may be thrown.
*
* @param name - name of the configuration parameter
* @returns value of the configuration parameter, or `null` if not defined
*/
function getConfigString(config, name) {
	const value = config.getConfig(name);
	return value === null || value === void 0 ? null : `${value}`;
}
/**
* Reads a configuration parameter as a {@link ValueMap}. Please note that
* the javascript value of the parameter should also be a javascript object,
* or else an undefined exception may be thrown.
*
* @param name - name of the configuration parameter
* @returns value of the configuration parameter, or `null`if not defined
*/
function getConfigValueMap(config, name) {
	return config.getConfig(name) ?? null;
}
/**
* Reads a configuration parameter as a String array.
*
* @param name - name of the configuration parameter
* @returns value of the configuration parameter, or `null`if not defined
*/
function getConfigStringArray(config, name) {
	return config.getConfig(name);
}
/**
* Reads a configuration parameter as a boolean.
*
* Please note that the javascript value of the parameter should also be a
* boolean, or else an undefined exception may be thrown.
*
* @param name - name of the configuration parameter
* @returns the boolean value of the configuration parameter, or <code>false</code> if no value is defined
*/
function getConfigBoolean(config, name) {
	const value = config.getConfig(name);
	return value === null || value === void 0 ? false : Boolean(value);
}
/**
* Reads a configuration parameter as an integer object. Please note that
* the javascript value of the parameter should also be an integer, or else
* an undefined exception may be thrown.
*
* @param config - the bootstrap configuration object
* @param name - name of the configuration parameter
* @returns integer value of the configuration parameter, or `null` if no value
*          is defined
*/
function getConfigInteger(config, name) {
	const value = config.getConfig(name);
	if (value === null || value === void 0) return null;
	return Math.trunc(Number(value));
}
/**
* Reads a configuration parameter as an `ErrorMessage` object. Please
* note that the javascript value of the parameter should also be an object
* with appropriate fields, or else an undefined exception may be thrown
* when calling this method or when calling methods on the returned object.
*
* @param name - name of the configuration parameter
* @returns error message with the given name, or `null` if no value is defined
*/
function getConfigError(config, name) {
	return config.getConfig(name) ?? null;
}
/**
* Gets the version of the Vaadin framework used on the server.
*
* @returns a string with the version
*/
function getVaadinVersion(config) {
	return config.getConfig("versionInfo")?.vaadinVersion ?? null;
}
/**
* Gets the version of the Atmosphere framework.
*
* @returns a string with the version
*/
function getAtmosphereVersion(config) {
	return config.getConfig("versionInfo")?.atmosphereVersion ?? null;
}
/**
* Gets the JS version used in the Atmosphere framework.
*
* @returns a string with the version
*/
function getAtmosphereJSVersion() {
	return (window.vaadinPush?.atmosphere)?.version ?? null;
}
/**
* Gets the initial UIDL from the bootstrap page.
*
* @param config - the bootstrap configuration object
* @returns the initial UIDL
*/
function getUIDL(config) {
	return getConfigValueMap(config, "uidl");
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/TrackingScheduler.js
/** The shared TrackingScheduler; mirrors GWT's Scheduler.get(). */
function getScheduler() {
	if (sharedScheduler === null) sharedScheduler = new TrackingScheduler();
	return sharedScheduler;
}
var TrackingScheduler, sharedScheduler;
function init_TrackingScheduler() {
	return (init_TrackingScheduler = __esmMin((() => {
		TrackingScheduler = class {
			#deferredCommandTrackers = 0;
			/** Schedules a command to run deferred, tracking it as pending until it has run. */
			scheduleDeferred(command) {
				this.#deferredCommandTrackers++;
				setTimeout(command, 0);
				setTimeout(() => {
					this.#deferredCommandTrackers--;
				}, 0);
			}
			/**
			* Checks if there is work queued or currently being executed.
			*
			* @returns true if there is work queued or if work is currently being
			*          executed, false otherwise
			*/
			hasWorkQueued() {
				return this.#deferredCommandTrackers !== 0;
			}
		};
		sharedScheduler = null;
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/WidgetUtil.js
/**
* Redirects the browser to the given URL, or reloads the page when `url` is
* null.
*
* @param url - The url to redirect to or null to refresh
*/
function redirect(url) {
	if (url) window.location.href = url;
	else window.location.reload();
}
/**
* Resolves a relative URL to an absolute URL based on the current document's
* location.
*
* @param url - a string with the relative URL to resolve
* @returns the corresponding absolute URL as a string
*/
function getAbsoluteUrl(url) {
	const anchor = document.createElement("a");
	anchor.href = url;
	return anchor.href;
}
/**
* Detects whether a URL is absolute. URLs without a scheme but starting with
* double slashes (e.g. `//myhost/path`) are considered absolute.
*
* @param url - a string with the URL to check
* @returns true if the url is absolute, otherwise false.
*/
function isAbsoluteUrl(url) {
	return /^(?:[a-zA-Z]+:)?\/\//.test(url);
}
/**
* Sets the given attribute to the value on the element, or removes it when the
* value is null. Mirrors WidgetUtil.updateAttribute.
*
* @param element - the DOM element owning attribute
* @param attribute - the attribute to update
* @param value - the value to update
*/
function updateAttribute(element, attribute, value) {
	if (value === null) element.removeAttribute(attribute);
	else element.setAttribute(attribute, value);
}
/**
* Assigns a value as a JavaScript property of an object.
*
* @param object - the target object
* @param name - the property name
* @param value - the property value
*/
function setJsProperty(object, name, value) {
	object[name] = value;
}
/**
* Retrieves the value of a JavaScript property.
*
* @param object - the target object
* @param name - the property name
* @returns the value
*/
function getJsProperty(object, name) {
	return object[name];
}
/**
* Checks whether the object itself has a JavaScript property with the given
* name. Inherited properties are not taken into account.
*
* @see {@link hasJsProperty}
*
* @param object - the target object
* @param name - the name of the property
* @returns `true` if the object itself has the named property; `false` if it doesn't have the property of if the property is inherited
*/
function hasOwnJsProperty(object, name) {
	return Object.prototype.hasOwnProperty.call(object, name);
}
/**
* Checks whether the value is explicitly undefined (null returns false).
*
* @param value - the value to be verified
* @returns `true` is the value is explicitly undefined, `false` otherwise
*/
function isUndefined(value) {
	return value === void 0;
}
/**
* Removes a JavaScript property from an object.
*
* @param object - the object from which to remove the property
* @param name - the name of the property to remove
*/
function deleteJsProperty(object, name) {
	delete object[name];
}
/**
* Creates a new object without any JavaScript prototype. Relevant only for
* objects displayed through the browser console.
*
* @returns a new json object
*/
function createJsonObjectWithoutPrototype() {
	return Object.create(null);
}
/**
* Gets all own enumerable JavaScript property names (Object.keys) of the object.
*
* @param value - the value to get keys for
* @returns an array of key names
*/
function getKeys(value) {
	return Object.keys(value);
}
/**
* Serializes a JSON object, throwing if it contains a DOM node reference: such
* references must not be sent to the server and can cause cyclic dependencies.
*
* @param payload - JsonObject to stringify
* @returns json string of given object
*/
function stringify(payload) {
	return JSON.stringify(payload, (_key, value) => {
		if (value instanceof Node) throw new Error("Message JsonObject contained a dom node reference which should not be sent to the server and can cause a cyclic dependecy.");
		return value;
	});
}
/**
* Checks whether the values are equal as JavaScript values, using JS `==`. This
* ignores types, so e.g. an empty string equals 0.
*
* @param obj1 - an object
* @param obj2 - an object to be compared with `a` for deep equality
* @returns `true` if the arguments are equal via JS `==` to each other and `false` otherwise
*/
function equalsInJS(obj1, obj2) {
	return obj1 == obj2;
}
function init_WidgetUtil() {
	return (init_WidgetUtil = __esmMin((() => {})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/Profiler.js
/** Rounds to three significant figures, mirroring Node.roundToSignificantFigures. */
function roundToSignificantFigures(num) {
	const n = 3;
	if (num < 5e-4) return 0;
	const power = n - Math.ceil(Math.log10(num < 0 ? -num : num));
	const magnitude = Math.pow(10, power);
	return Math.round(num * magnitude) / magnitude;
}
function gwtWindow() {
	return window;
}
/** The event name, resolving the profiler group to just its subsystem name. */
function getEventName(event) {
	const group = event.evtGroup;
	if (group === EVT_GROUP) return event.subSystem ?? "";
	return `${group}.${event.subSystem}`;
}
/**
* Whether the profiling data gathering is enabled. Mirrors Profiler.isEnabled.
*
* @returns `true` if the profiling is enabled, else `false`
*/
function isEnabled() {
	return profilingEnabled;
}
/**
* Enters a named block. There should always be a matching invocation of
* {@link leave} when leaving the block.
*
* @param name - the name of the entered block
*/
function enter(name) {
	if (isEnabled()) logGwtEvent(name, "begin");
}
/**
* Leaves a named block. There should always be a matching invocation of
* {@link enter} when entering the block.
*
* @param name - the name of the left block
*/
function leave(name) {
	if (isEnabled()) logGwtEvent(name, "end");
}
/**
* Returns time relative to the particular page load time. The value should not
* be used directly but rather the difference between two values returned by
* this method should be used to compare measurements.
*
* @returns the relative time in milliseconds
*/
function getRelativeTimeMillis() {
	return relativeTimeSupplier();
}
/** Reports a profiler event to the __gwtStatsEvent logger. Private in Profiler.java. */
function logGwtEvent(name, type) {
	gwtWindow().__gwtStatsEvent({
		evtGroup: EVT_GROUP,
		moduleName: MODULE_NAME,
		millis: Date.now(),
		sessionId: void 0,
		subSystem: name,
		type,
		relativeMillis: getRelativeTimeMillis()
	});
}
/** Resets the collected profiler data. No-op unless profiling is enabled. */
function reset() {
	if (isEnabled()) {
		initialize();
		clearEventsList();
	}
}
/**
* Initializes the profiler. This should be done before calling any other
* function in this class. This method has no side effects if the initialization
* has already been done.
*
* Should be called even if the profiler is not enabled, because it then removes
* a logger function that might have been included in the HTML page and that
* would otherwise leak memory.
*/
function initialize() {
	if (hasHighPrecisionTime()) relativeTimeSupplier = () => gwtWindow().performance.now();
	else relativeTimeSupplier = () => Date.now();
	if (isEnabled()) ensureLogger();
	else ensureNoLogger();
}
/** Outputs the gathered profiling data to the registered result consumer. */
function logTimings() {
	if (!isEnabled()) {
		Console.warn("Profiler is not enabled, no data has been collected.");
		return;
	}
	const stack = [];
	const rootNode = new Node$1(null);
	stack.push(rootNode);
	const gwtStatsEvents = getGwtStatsEvents();
	if (gwtStatsEvents.length === 0) {
		Console.warn("No profiling events recorded, this might happen if another __gwtStatsEvent handler is installed.");
		return;
	}
	const extendedTimeNodes = /* @__PURE__ */ new Set();
	for (const gwtStatsEvent of gwtStatsEvents) {
		if (gwtStatsEvent.evtGroup !== EVT_GROUP) continue;
		const eventName = getEventName(gwtStatsEvent);
		const type = gwtStatsEvent.type;
		const isExtendedEvent = "relativeMillis" in gwtStatsEvent;
		const isBeginEvent = type === "begin";
		const relativeMillis = gwtStatsEvent.relativeMillis ?? 0;
		const eventMillis = gwtStatsEvent.millis ?? 0;
		let stackTop = stack[stack.length - 1];
		let inEvent = eventName === stackTop.getName() && !isBeginEvent;
		if (!inEvent && stack.length >= 2 && eventName === stack[stack.length - 2].getName() && !isBeginEvent) {
			if (extendedTimeNodes.has(stackTop) && isExtendedEvent) stackTop.leave(relativeMillis);
			else stackTop.leave(eventMillis);
			stack.pop();
			stackTop = stack[stack.length - 1];
			inEvent = true;
		}
		if (type === "end") {
			if (!inEvent) {
				Console.error(`Got end event for ${eventName} but is currently in ${stackTop.getName()}`);
				return;
			}
			const previousStackTop = stack.pop();
			if (extendedTimeNodes.has(previousStackTop)) previousStackTop.leave(relativeMillis);
			else previousStackTop.leave(eventMillis);
		} else {
			const millis = isExtendedEvent ? relativeMillis : eventMillis;
			if (!inEvent) {
				stackTop = stackTop.enterChild(eventName, millis);
				stack.push(stackTop);
				if (isExtendedEvent) extendedTimeNodes.add(stackTop);
			}
			if (!isBeginEvent) {
				const subNode = stackTop.enterChild(`${eventName}.${type}`, millis);
				if (isExtendedEvent) extendedTimeNodes.add(subNode);
				stack.push(subNode);
			}
		}
	}
	if (stack.length !== 1) {
		Console.warn(`Not all nodes are left, the last node is ${stack[stack.length - 1].getName()}`);
		return;
	}
	const totals = /* @__PURE__ */ new Map();
	rootNode.sumUpTotals(totals);
	const totalList = Array.from(totals.values());
	totalList.sort((o1, o2) => Math.trunc(o2.getTimeSpent() - o1.getTimeSpent()));
	if (consumer !== null) consumer.addProfilerData(stack[0], totalList);
}
/**
* Outputs the time passed since various events recorded in performance.timing
* if supported by the browser.
*/
function logBootstrapTimings() {
	if (isEnabled()) {
		const now = Date.now();
		const keys = [
			"navigationStart",
			"unloadEventStart",
			"unloadEventEnd",
			"redirectStart",
			"redirectEnd",
			"fetchStart",
			"domainLookupStart",
			"domainLookupEnd",
			"connectStart",
			"connectEnd",
			"requestStart",
			"responseStart",
			"responseEnd",
			"domLoading",
			"domInteractive",
			"domContentLoadedEventStart",
			"domContentLoadedEventEnd",
			"domComplete",
			"loadEventStart",
			"loadEventEnd"
		];
		const timings = /* @__PURE__ */ new Map();
		for (const key of keys) {
			const value = getPerformanceTiming(key);
			if (value === 0) continue;
			timings.set(key, now - value);
		}
		if (timings.size === 0) {
			Console.log("Bootstrap timings not supported, please ensure your browser supports performance.timing");
			return;
		}
		if (consumer !== null) consumer.addBootstrapData(timings);
	}
}
/** The named window.performance.timing value, or 0 if unavailable. */
function getPerformanceTiming(name) {
	const timing = gwtWindow().performance?.timing;
	return timing && timing[name] ? timing[name] : 0;
}
/** The collected GWT stats events, or an empty array. */
function getGwtStatsEvents() {
	return gwtWindow().Vaadin.Flow.gwtStatsEvents || [];
}
/**
* Installs the __gwtStatsEvent logger (collecting events into the events list)
* if it is not already present, initializing the events list if needed.
*/
function ensureLogger() {
	const w = gwtWindow();
	if (typeof w.__gwtStatsEvent !== "function") {
		if (typeof w.Vaadin.Flow.gwtStatsEvents !== "object") w.Vaadin.Flow.gwtStatsEvents = [];
		w.__gwtStatsEvent = function(event) {
			w.Vaadin.Flow.gwtStatsEvents.push(event);
			return true;
		};
	}
}
/**
* Removes the events list and neutralizes the logger function if it looks like
* the one installed by ensureLogger.
*/
function ensureNoLogger() {
	const w = gwtWindow();
	if (typeof w.Vaadin.Flow.gwtStatsEvents === "object") {
		delete w.Vaadin.Flow.gwtStatsEvents;
		if (typeof w.__gwtStatsEvent === "function") w.__gwtStatsEvent = function() {
			return true;
		};
	}
}
/** Resets the collected GWT stats events list. */
function clearEventsList() {
	gwtWindow().Vaadin.Flow.gwtStatsEvents = [];
}
/** Whether the browser provides a high-precision performance.now() clock. */
function hasHighPrecisionTime() {
	const perf = gwtWindow().performance;
	return !!perf && typeof perf.now === "function";
}
/**
* Returns a string containing the number of milliseconds which have elapsed
* since the given reference time.
*
* @param reference - the reference time, as returned by {@link getRelativeTimeMillis}
* @returns a string containing the number of ms elapsed since the reference time
*/
function getRelativeTimeString(reference) {
	return `${round(getRelativeTimeMillis() - reference, 3)}`;
}
/** Rounds the number up to the given number of decimal positions. */
function round(num, exp) {
	const rounded = Math.round(Number(`${num}e+${exp}`));
	return Number(`${rounded}e-${exp}`);
}
var relativeTimeSupplier, EVT_GROUP, MODULE_NAME, consumer, profilingEnabled, Node$1;
function init_Profiler() {
	return (init_Profiler = __esmMin((() => {
		init_Console();
		relativeTimeSupplier = () => Date.now();
		EVT_GROUP = "VaadinProfiler";
		MODULE_NAME = "";
		consumer = null;
		profilingEnabled = false;
		Node$1 = class Node$1 {
			#name;
			#children = /* @__PURE__ */ new Map();
			#time = 0;
			#count = 0;
			#enterTime = 0;
			#minTime = 1e9;
			#maxTime = 0;
			/**
			* Creates a new node with the given name.
			*
			* @param name - the name of the node
			*/
			constructor(name) {
				this.#name = name;
			}
			/**
			* Gets the name of the node.
			*
			* @returns the name of the node
			*/
			getName() {
				return this.#name;
			}
			/**
			* Creates a new child node or retrieves an existing child and updates its
			* total time and hit count.
			*
			* @param name - the name of the child
			* @param timestamp - the timestamp for when the node is entered
			* @returns the child node object
			*/
			enterChild(name, timestamp) {
				let child = this.#children.get(name);
				if (child === void 0) {
					child = new Node$1(name);
					this.#children.set(name, child);
				}
				child.#enterTime = timestamp;
				child.#count++;
				return child;
			}
			/**
			* Gets the total time spent in this node, including sub nodes, in ms.
			*
			* @returns the total time spent, in milliseconds
			*/
			getTimeSpent() {
				return this.#time;
			}
			/**
			* Gets the minimum time spent for one invocation, including sub nodes, in ms.
			*
			* @returns the time spent for the fastest invocation, in milliseconds
			*/
			getMinTimeSpent() {
				return this.#minTime;
			}
			/**
			* Gets the maximum time spent for one invocation, including sub nodes, in ms.
			*
			* @returns the time spent for the slowest invocation, in milliseconds
			*/
			getMaxTimeSpent() {
				return this.#maxTime;
			}
			/**
			* Gets the number of times this node has been entered.
			*
			* @returns the number of times the node has been entered
			*/
			getCount() {
				return this.#count;
			}
			/**
			* Gets the total time spent in this node, excluding sub nodes, in ms.
			*
			* @returns the total time spent, in milliseconds
			*/
			getOwnTime() {
				let time = this.getTimeSpent();
				for (const node of this.#children.values()) time -= node.getTimeSpent();
				return time;
			}
			/**
			* Gets the child nodes of this node.
			*
			* @returns a collection of child nodes
			*/
			getChildren() {
				return Array.from(this.#children.values());
			}
			toString() {
				return this.getStringRepresentation("");
			}
			getStringRepresentation(prefix) {
				if (this.getName() === null) return "";
				let msg = `${prefix} ${this.getName()} in ${roundToSignificantFigures(this.getTimeSpent())} ms.`;
				if (this.getCount() > 1) msg += ` Invoked ${this.getCount()} times (${roundToSignificantFigures(this.getTimeSpent() / this.getCount())} ms per time, min ${roundToSignificantFigures(this.getMinTimeSpent())} ms, max ${roundToSignificantFigures(this.getMaxTimeSpent())} ms).`;
				if (this.#children.size > 0) {
					const ownTime = this.getOwnTime();
					msg += ` ${roundToSignificantFigures(ownTime)} ms spent in own code`;
					if (this.getCount() > 1) msg += ` (${roundToSignificantFigures(ownTime / this.getCount())} ms per time)`;
					msg += ".";
				}
				return msg;
			}
			sumUpTotals(totals) {
				const name = this.getName();
				if (name !== null) {
					let totalNode = totals.get(name);
					if (totalNode === void 0) {
						totalNode = new Node$1(name);
						totals.set(name, totalNode);
					}
					totalNode.#time += this.getOwnTime();
					totalNode.#count += this.getCount();
					totalNode.#minTime = roundToSignificantFigures(Math.min(totalNode.#minTime, this.getMinTimeSpent()));
					totalNode.#maxTime = roundToSignificantFigures(Math.max(totalNode.#maxTime, this.getMaxTimeSpent()));
				}
				for (const node of this.#children.values()) node.sumUpTotals(totals);
			}
			/**
			* Marks the time spent in the child node.
			*
			* @param timestamp - the timestamp for when the node was left
			*/
			leave(timestamp) {
				const elapsed = timestamp - this.#enterTime;
				this.#time += elapsed;
				this.#enterTime = 0;
				if (elapsed < this.#minTime) this.#minTime = elapsed;
				if (elapsed > this.#maxTime) this.#maxTime = elapsed;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/bootstrap/Bootstrapper.js
function getRequiredConfigInteger(config, name) {
	const value = getConfigInteger(config, name);
	assert(value !== null, `The bootstrap configuration has no ${name}`);
	return value;
}
/**
* Reads the configuration values defined by the bootstrap JavaScript.
*
* @param conf - the configuration to fill in
* @param jsoConfiguration - the bootstrap configuration object to read
*/
function populateApplicationConfiguration(conf, jsoConfiguration) {
	const serviceUrl = getConfigString(jsoConfiguration, SERVICE_URL);
	conf.setWebComponentMode(getConfigBoolean(jsoConfiguration, APP_WC_MODE));
	if (serviceUrl === null) {
		conf.setServiceUrl(getAbsoluteUrl("."));
		conf.setContextRootUrl(getAbsoluteUrl(getConfigString(jsoConfiguration, CONTEXT_ROOT_URL) ?? ""));
	} else {
		conf.setServiceUrl(serviceUrl);
		conf.setContextRootUrl(getAbsoluteUrl(serviceUrl + (getConfigString(jsoConfiguration, CONTEXT_ROOT_URL) ?? "")));
	}
	conf.setUIId(getRequiredConfigInteger(jsoConfiguration, UI_ID_PARAMETER));
	conf.setHeartbeatInterval(getRequiredConfigInteger(jsoConfiguration, "heartbeatInterval"));
	conf.setMaxMessageSuspendTimeout(getRequiredConfigInteger(jsoConfiguration, "maxMessageSuspendTimeout"));
	conf.setServletVersion(getVaadinVersion(jsoConfiguration) ?? "");
	conf.setAtmosphereVersion(getAtmosphereVersion(jsoConfiguration) ?? "");
	conf.setAtmosphereJSVersion(getAtmosphereJSVersion() ?? "");
	conf.setSessionExpiredError(getConfigError(jsoConfiguration, "sessExpMsg"));
	conf.setProductionMode(!getConfigBoolean(jsoConfiguration, "debug"));
	conf.setRequestTiming(getConfigBoolean(jsoConfiguration, "requestTiming"));
	conf.setExportedWebComponents(getConfigStringArray(jsoConfiguration, "webcomponents") ?? []);
	conf.setDevToolsEnabled(getConfigBoolean(jsoConfiguration, DEV_TOOLS_ENABLED));
	conf.setLiveReloadUrl(getConfigString(jsoConfiguration, "liveReloadUrl") ?? "");
	conf.setLiveReloadBackend(getConfigString(jsoConfiguration, "liveReloadBackend") ?? "");
	conf.setSpringBootLiveReloadPort(getConfigString(jsoConfiguration, "springBootLiveReloadPort") ?? "");
}
/**
* Constructs an ApplicationConfiguration object based on the information
* available in the DOM.
*
* @param appId - the application id
* @returns an application configuration object containing the read information
*/
function getConfigFromDOM(appId) {
	const conf = new ApplicationConfiguration();
	conf.setApplicationId(appId);
	populateApplicationConfiguration(conf, getJsoConfiguration(appId));
	return conf;
}
/**
* Starts the application with the given id: reads its configuration from the DOM,
* assembles the TypeScript engine through {@link ApplicationConnection.create},
* and starts it from the initial UIDL. Mirrors Bootstrapper.doStartApplication.
*
* @param applicationId - id of the application to start
*/
function doStartApplication(applicationId) {
	enter("Bootstrapper.startApplication");
	const conf = getConfigFromDOM(applicationId);
	leave("Bootstrapper.startApplication");
	const initialUidl = getUIDL(getJsoConfiguration(applicationId));
	__vitePreload(async () => {
		const { ApplicationConnection } = await import("./ApplicationConnection-Dd4Ehr6l.js");
		return { ApplicationConnection };
	}, __vite__mapDeps([0,1]), import.meta.url).then(({ ApplicationConnection }) => {
		ApplicationConnection.create(conf).start(initialUidl ?? null);
	}).catch((error) => {
		Console.error(`Failed to start the Vaadin application ${applicationId}: ${String(error)}`);
	});
}
/**
* Whether the application can be started immediately, i.e. there is no
* WebComponents polyfill still loading.
*
* @returns `true` if the application can be started now
*/
function startApplicationImmediately() {
	const webComponents = window.WebComponents;
	return !webComponents || webComponents.ready === true;
}
/**
* Defers starting the application until the WebComponents polyfill signals it is
* ready, by starting it on the WebComponentsReady event. Java wraps the callback
* in $entry; the port has no equivalent, as every listener is plain JavaScript.
*
* @param applicationId - id of the application to start
*/
function deferStartApplication(applicationId) {
	window.addEventListener("WebComponentsReady", () => doStartApplication(applicationId));
}
/**
* Registers the callback that the bootstrap javascript uses to start
* applications once the widgetset is loaded and all required information is
* available.
*
* @param widgetsetName - the name of this widgetset
*/
function registerCallback(widgetsetName) {
	window.Vaadin.Flow.registerWidgetset(widgetsetName, startApplication);
}
function flowBootstrapState() {
	return window.Vaadin?.Flow;
}
/**
* Starts the application with a given id by reading the configuration options
* stored by the bootstrap javascript. On the next deferred tick it starts
* immediately, or defers until the WebComponents polyfill signals it is ready.
*
* @param applicationId - id of the application to load, this is also the id of
*          the html element into which the application should be rendered
*/
function startApplication(applicationId) {
	getScheduler().scheduleDeferred(() => {
		if (startApplicationImmediately()) doStartApplication(applicationId);
		else deferStartApplication(applicationId);
	});
}
/**
* The client bootstrap entry point: verifies the bootstrap JavaScript is present
* and registers the widgetset start callback so the server bootstrap can start
* applications once the widgetset is loaded. Runs at most once. Mirrors the GWT
* Bootstrapper onModuleLoad / initModule entry.
*/
function onModuleLoad() {
	const flow = flowBootstrapState();
	if (flow == null) {
		Console.warn("vaadinBootstrap.js was not loaded, skipping vaadin application configuration.");
		return;
	}
	if (flow.clientBootstrapped === true) return;
	flow.clientBootstrapped = true;
	registerCallback(WIDGETSET_NAME);
}
/**
* Gets the configuration object for a specific application from the bootstrap
* javascript.
*
* @param appId - the id of the application to get configuration data for
* @returns a native javascript object containing the configuration data
*/
function getJsoConfiguration(appId) {
	return window.Vaadin.Flow.getApp(appId);
}
var SERVICE_URL, APP_WC_MODE, CONTEXT_ROOT_URL, UI_ID_PARAMETER, DEV_TOOLS_ENABLED, WIDGETSET_NAME;
function init_Bootstrapper() {
	return (init_Bootstrapper = __esmMin((() => {
		init_ApplicationConfiguration();
		init_TrackingScheduler();
		init_Console();
		init_Profiler();
		init_preload_helper();
		SERVICE_URL = "serviceUrl";
		APP_WC_MODE = "webComponentMode";
		CONTEXT_ROOT_URL = "contextRootUrl";
		UI_ID_PARAMETER = "v-uiId";
		DEV_TOOLS_ENABLED = "devToolsEnabled";
		WIDGETSET_NAME = "client";
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/FlowClient.js
var FlowClient_exports = /* @__PURE__ */ __exportAll({ init: () => init });
function init() {
	onModuleLoad();
}
function init_FlowClient() {
	return (init_FlowClient = __esmMin((() => {
		init_Bootstrapper();
	})))();
}
//#endregion
export { updateAttribute as C, init_Console as D, Console as E, assert as O, stringify as S, init_TrackingScheduler as T, init_WidgetUtil as _, init_Profiler as a, redirect as b, logTimings as c, deleteJsProperty as d, equalsInJS as f, hasOwnJsProperty as g, getKeys as h, getRelativeTimeString as i, init_assert as k, reset as l, getJsProperty as m, init_FlowClient as n, isEnabled as o, getAbsoluteUrl as p, getRelativeTimeMillis as r, logBootstrapTimings as s, FlowClient_exports as t, createJsonObjectWithoutPrototype as u, isAbsoluteUrl as v, getScheduler as w, setJsProperty as x, isUndefined as y };
