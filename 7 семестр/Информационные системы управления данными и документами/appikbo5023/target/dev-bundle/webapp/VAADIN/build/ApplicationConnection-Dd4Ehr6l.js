import { n as __esmMin } from "./rolldown-runtime-htSClZ5J.js";
import { C as updateAttribute$1, D as init_Console, E as Console, O as assert, S as stringify, T as init_TrackingScheduler, a as init_Profiler, b as redirect, c as logTimings, d as deleteJsProperty, f as equalsInJS, g as hasOwnJsProperty, h as getKeys, i as getRelativeTimeString, l as reset, m as getJsProperty, o as isEnabled, p as getAbsoluteUrl, r as getRelativeTimeMillis, s as logBootstrapTimings, u as createJsonObjectWithoutPrototype, v as isAbsoluteUrl, w as getScheduler, x as setJsProperty, y as isUndefined } from "./FlowClient-BaUcbNez.js";
//#region src/main/frontend/generated/jar-resources/internal/client/ElementUtil.js
/**
* Utils class, intended to ease working with DOM elements on client side.
*
* Migrated from `com.vaadin.client.ElementUtil`, which stays in place until the
* GWT client is retired.
*/
/**
* Checks whether the `node` has required `tag`.
*
* @param node - the node to check
* @param tag - the required tag name
* @returns `true` if the node has required tag name
*/
function hasTag$1(node, tag) {
	return node instanceof Element && node.tagName.toLowerCase() === tag.toLowerCase();
}
/**
* Searches the shadow root of the given context element for the given id or
* searches the light DOM if the element has no shadow root.
*
* @param context - the container element to search through
* @param id - the identifier of the element to search for
* @returns the element with the given `id` if found, otherwise
*          `null`
*/
function getElementById(context, id) {
	const bodyExports = document.body.$;
	if (bodyExports && bodyExports.hasOwnProperty && bodyExports.hasOwnProperty(id)) return bodyExports[id];
	const ctx = context;
	if (ctx.shadowRoot) return ctx.shadowRoot.getElementById(id);
	else if (ctx.getElementById) return ctx.getElementById(id);
	else if (id && id.match("^[a-zA-Z0-9-_]*$")) return ctx.querySelector("#" + id);
	return Array.from(ctx.querySelectorAll("[id]")).find((e) => e.id === id) ?? null;
}
/** Searches the context for an element with the given `name` attribute. */
function getElementByName(context, name) {
	return Array.from(context.querySelectorAll("[name]")).find((e) => e.getAttribute("name") === name) ?? null;
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/LitUtils.js
/**
* Utils class, intended to ease working with LitElement related code on client
* side.
*
* Implementations migrated from LitUtils.java.
*/
/**
* Checks if the given element is a LitElement.
*
* @param element - the custom element
* @returns `true` if the element is a Lit element, `false`
*         otherwise
*/
function isLitElement(element) {
	const el = element;
	return typeof el.update === "function" && el.updateComplete instanceof Promise && typeof el.shouldUpdate === "function" && typeof el.firstUpdated === "function";
}
/**
* Invokes the `runnable` when the given Lit element has been rendered
* at least once.
*
* @param element - the Lit element
* @param runnable - the command to run
*/
function whenRendered(element, runnable) {
	element.updateComplete.then(runnable);
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/model/UpdatableModelProperties.js
var UpdatableModelProperties;
function init_UpdatableModelProperties() {
	return (init_UpdatableModelProperties = __esmMin((() => {
		UpdatableModelProperties = class {
			#properties;
			/**
			* Creates a new instance of storage class based on given
			* `properties`.
			*
			* @param properties - updatable properties array
			*/
			constructor(properties) {
				this.#properties = new Set(properties);
			}
			/**
			* Tests whether the `property` is updatable.
			*
			* @param property - the property to test
			* @returns `true` if property is updatable
			*/
			isUpdatableProperty(property) {
				return this.#properties.has(property);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/flow/shared/JsonConstants.js
var JsonConstants;
function init_JsonConstants() {
	return (init_JsonConstants = __esmMin((() => {
		JsonConstants = {
			/**
			* Key holding id of the node affected by a change.
			*/
			CHANGE_NODE: "node",
			/**
			* Key holding the type of a change.
			*/
			CHANGE_TYPE: "type",
			/**
			* Change type for empty change (populate the feature on the client side
			* only).
			*/
			CHANGE_TYPE_NOOP: "empty",
			/**
			* Change type for attaching nodes.
			*/
			CHANGE_TYPE_ATTACH: "attach",
			/**
			* Change type for detaching nodes.
			*/
			CHANGE_TYPE_DETACH: "detach",
			/**
			* Change type for list splice changes.
			*/
			CHANGE_TYPE_SPLICE: "splice",
			/**
			* Change type for map put changes.
			*/
			CHANGE_TYPE_PUT: "put",
			/**
			* Change type for map remove changes.
			*/
			CHANGE_TYPE_REMOVE: "remove",
			/**
			* Change type for list clear changes.
			*/
			CHANGE_TYPE_CLEAR: "clear",
			/**
			* Key holding the feature of a change.
			*/
			CHANGE_FEATURE: "feat",
			/**
			* Key holding the feature type.
			*/
			CHANGE_FEATURE_TYPE: "featType",
			/**
			* Key holding the map key of the change.
			*/
			CHANGE_MAP_KEY: "key",
			/**
			* Key holding nodes to add for a splice.
			*/
			CHANGE_SPLICE_ADD_NODES: "addNodes",
			/**
			* Key holding values to add for a splice.
			*/
			CHANGE_SPLICE_ADD: "add",
			/**
			* Key holding the number of items to remove for a splice.
			*/
			CHANGE_SPLICE_REMOVE: "remove",
			/**
			* Key holding the index of a splice.
			*/
			CHANGE_SPLICE_INDEX: "index",
			/**
			* Key holding the value of a put change.
			*/
			CHANGE_PUT_VALUE: "value",
			/**
			* Key holder the node value of a put change.
			*/
			CHANGE_PUT_NODE_VALUE: "nodeValue",
			/**
			* Key holding the type in of messages sent from the client.
			*/
			RPC_TYPE: "type",
			/**
			* Type value for events sent from the client.
			*/
			RPC_TYPE_EVENT: "event",
			/**
			* Type value for navigation events from the client.
			*/
			RPC_TYPE_NAVIGATION: "navigation",
			/**
			* Key holding the node in messages sent from the client.
			*/
			RPC_NODE: "node",
			/**
			* Key holding the event type in event messages sent from the client.
			*/
			RPC_EVENT_TYPE: "event",
			/**
			* Type value for model map synchronizations sent from the client.
			*/
			RPC_TYPE_MAP_SYNC: "mSync",
			/**
			* Key holding the event data in event messages sent from the client.
			*/
			RPC_EVENT_DATA: "data",
			/**
			* Key used to hold the feature id when synchronizing node values.
			*/
			RPC_FEATURE: "feature",
			/**
			* Key used to hold the name of the synchronized property.
			*/
			RPC_PROPERTY: "property",
			/**
			* Key used to hold the value of the synchronized property.
			*/
			RPC_PROPERTY_VALUE: "value",
			/**
			* Key used to hold the location in a navigation message.
			*/
			RPC_NAVIGATION_LOCATION: "location",
			/**
			* Key used to hold the state in a navigation message.
			*/
			RPC_NAVIGATION_STATE: "state",
			/**
			* Key used in navigation messages triggered by a router link.
			*/
			RPC_NAVIGATION_ROUTERLINK: "link",
			/**
			* Type value for events sent from the client to an event handler published on
			* the server.
			*/
			RPC_PUBLISHED_SERVER_EVENT_HANDLER: "publishedEventHandler",
			/**
			* Key used to hold the server side method name in template event messages
			* sent from the client.
			*/
			RPC_TEMPLATE_EVENT_METHOD_NAME: "templateEventMethodName",
			/**
			* Key used to hold the argument values for server side method call.
			*
			* @see {@link RPC_TEMPLATE_EVENT_METHOD_NAME}
			* @see {@link RPC_PUBLISHED_SERVER_EVENT_HANDLER}
			*/
			RPC_TEMPLATE_EVENT_ARGS: "templateEventMethodArgs",
			/**
			* Key used to hold the promise id for a server side method call.
			*/
			RPC_TEMPLATE_EVENT_PROMISE: "promise",
			/**
			* Name of the $server property that is used to track pending promises. The
			* name is chosen to avoid conflicts with genuine $server method names.
			*/
			RPC_PROMISE_CALLBACK_NAME: "}p",
			/**
			* Type value for attach existing element server callback.
			*
			* @see {@link RPC_ATTACH_ASSIGNED_ID}
			* @see {@link RPC_ATTACH_REQUESTED_ID}
			* @see {@link RPC_ATTACH_TAG_NAME}
			* @see {@link RPC_ATTACH_INDEX}
			*/
			RPC_ATTACH_EXISTING_ELEMENT: "attachExistingElement",
			/**
			* Type value for attach existing element server callback.
			*
			* @see {@link RPC_ATTACH_ASSIGNED_ID}
			* @see {@link RPC_ATTACH_REQUESTED_ID}
			* @see {@link RPC_ATTACH_TAG_NAME}
			* @see {@link RPC_ATTACH_ID}
			*/
			RPC_ATTACH_EXISTING_ELEMENT_BY_ID: "attachExistingElementById",
			/**
			* Key used to hold requested state node identifier for attach existing element
			* request.
			*/
			RPC_ATTACH_REQUESTED_ID: "attachReqId",
			/**
			* Key used to hold assigned state node identifier for attach existing element
			* request.
			*/
			RPC_ATTACH_ASSIGNED_ID: "attachAssignedId",
			/**
			* Key used to hold tag name for attach existing element request.
			*/
			RPC_ATTACH_TAG_NAME: "attachTagName",
			/**
			* Key used to hold index of server side element for attach existing element
			* request.
			*/
			RPC_ATTACH_INDEX: "attachIndex",
			/**
			* Key used to hold id of the element for attach existing element request.
			*/
			RPC_ATTACH_ID: "attachId",
			/**
			* Key holding the debounce phase for an event data map from the client.
			*/
			EVENT_DATA_PHASE: "for",
			/**
			* Character used for representing `DebouncePhase.LEADING`.
			*/
			EVENT_PHASE_LEADING: "leading",
			/**
			* Character used for representing `DebouncePhase.INTERMEDIATE`.
			*/
			EVENT_PHASE_INTERMEDIATE: "intermediate",
			/**
			* Character used for representing `DebouncePhase.TRAILING`.
			*/
			EVENT_PHASE_TRAILING: "trailing",
			/**
			* Token used as an event data expression to represent that properties
			* should be synchronized. The token is chosen to avoid collisions with
			* regular event data expressions by using a character that cannot be the
			* start of a valid JS expression.
			*/
			SYNCHRONIZE_PROPERTY_TOKEN: "}",
			/**
			* Token used as an event data expression or prefix to an event data
			* expression to represent that the state node ID should be fetched for the
			* element, or its closest parent, that corresponds to `event.target` or the
			* element returned by the evaluated expression.
			*
			* The token is chosen to avoid collisions with regular event data
			* expressions by using a character that cannot be the start of a valid JS
			* expression.
			*/
			MAP_STATE_NODE_EVENT_DATA: "]",
			/**
			* RPC type value used for return channel messages.
			*/
			RPC_TYPE_CHANNEL: "channel",
			/**
			* Key for the channel id in return channel messages.
			*/
			RPC_CHANNEL: "channel",
			/**
			* Key for the arguments array in return channel messages.
			*/
			RPC_CHANNEL_ARGUMENTS: "args"
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/flow/internal/nodefeature/NodeFeatures.js
var NodeFeatures;
function init_NodeFeatures() {
	return (init_NodeFeatures = __esmMin((() => {
		NodeFeatures = {
			/**
			* Id for `ElementData`.
			*/
			ELEMENT_DATA: 0,
			/**
			* Id for `ElementPropertyMap`.
			*/
			ELEMENT_PROPERTIES: 1,
			/**
			* Id for `ElementChildrenList`.
			*/
			ELEMENT_CHILDREN: 2,
			/**
			* Id for `ElementAttributeMap`.
			*/
			ELEMENT_ATTRIBUTES: 3,
			/**
			* Id for `ElementListenerMap`.
			*/
			ELEMENT_LISTENERS: 4,
			/**
			* Id for `PushConfigurationMap`.
			*/
			UI_PUSHCONFIGURATION: 5,
			/**
			* Id for `PushConfigurationParametersMap`.
			*/
			UI_PUSHCONFIGURATION_PARAMETERS: 6,
			/**
			* Id for `TextNodeMap`.
			*/
			TEXT_NODE: 7,
			/**
			* Id for `PollConfigurationMap`.
			*/
			POLL_CONFIGURATION: 8,
			/**
			* Id for `ReconnectDialogConfigurationMap`.
			*/
			RECONNECT_DIALOG_CONFIGURATION: 9,
			/**
			* Id for `ReconnectDialogConfigurationMap`.
			*/
			LOADING_INDICATOR_CONFIGURATION: 10,
			/**
			* Id for `ElementClassList`.
			*/
			CLASS_LIST: 11,
			/**
			* Id for `ElementStylePropertyMap`.
			*/
			ELEMENT_STYLE_PROPERTIES: 12,
			/**
			* Id for `ComponentMapping`.
			*/
			COMPONENT_MAPPING: 15,
			/**
			* Id for `ModelList`.
			*/
			TEMPLATE_MODELLIST: 16,
			/**
			* Id for `PolymerServerEventHandlers`.
			*/
			POLYMER_SERVER_EVENT_HANDLERS: 17,
			/**
			* Id for `PolymerEventListenerMap`.
			*/
			POLYMER_EVENT_LISTENERS: 18,
			/**
			* Id for `ClientCallableHandlers`.
			*/
			CLIENT_DELEGATE_HANDLERS: 19,
			/**
			* Id for `ShadowRootData`.
			*/
			SHADOW_ROOT_DATA: 20,
			/**
			* Id for `ShadowRootHost`.
			*/
			SHADOW_ROOT_HOST: 21,
			/**
			* Id for `AttachExistingElementFeature`.
			*/
			ATTACH_EXISTING_ELEMENT: 22,
			/**
			* Id for `BasicTypeValue`.
			*/
			BASIC_TYPE_VALUE: 23,
			/**
			* Id for `VirtualChildrenList`.
			*/
			VIRTUAL_CHILDREN: 24,
			/**
			* Id for `ReturnChannelMap`.
			*/
			RETURN_CHANNEL_MAP: 25,
			/**
			* Id for `InertData`.
			*/
			INERT_DATA: 26,
			/**
			* Id for `SignalBindingFeature`.
			*/
			SIGNAL_BINDING: 27
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/flow/internal/nodefeature/NodeProperties.js
var NodeProperties;
function init_NodeProperties() {
	return (init_NodeProperties = __esmMin((() => {
		NodeProperties = {
			/**
			* Key for `ElementData#getTag()`.
			*/
			TAG: "tag",
			/**
			* Key for `ElementData#getNamespace()`.
			*/
			NAMESPACE: "namespace",
			/**
			* Key for `ElementData#getPayload()`.
			*/
			PAYLOAD: "payload",
			/**
			* Key for `ElementData#getJavaClass()`.
			*/
			JAVA_CLASS: "jc",
			/**
			* Key for `TextNodeMap#getText()`.
			*/
			TEXT: "text",
			/**
			* Key for `ShadowRootData`.
			*/
			SHADOW_ROOT: "shadowRoot",
			/**
			* Key for `BasicTypeValue#getValue()`.
			*/
			VALUE: "value",
			/**
			* JsonObject type key for `VirtualChildrenList`.
			*/
			TYPE: "type",
			/**
			* JsonObject in-memory type value for `VirtualChildrenList`.
			*/
			IN_MEMORY_CHILD: "inMemory",
			/**
			* JsonObject `@id` type value for `VirtualChildrenList`.
			*/
			INJECT_BY_ID: "@id",
			/**
			* JsonObject `@name` type value for `VirtualChildrenList`.
			*/
			INJECT_BY_NAME: "@name",
			/**
			* JsonObject template-in-template type value for `VirtualChildrenList`.
			*/
			TEMPLATE_IN_TEMPLATE: "subTemplate",
			/**
			* Key for `ElementData#isVisible()`.
			*/
			VISIBLE: "visible",
			/**
			* The property value used on the client side only in addition to
			* {@link NodeProperties.VISIBLE}.
			*/
			VISIBILITY_BOUND_PROPERTY: "bound",
			/**
			* The property used on the client side only in addition to
			* {@link NodeProperties.VISIBLE}. Stores the client side value of "hidden"
			* property.
			*/
			VISIBILITY_HIDDEN_PROPERTY: "hidden",
			/**
			* The property used on the client side only in addition to
			* {@link NodeProperties.VISIBLE}. It stores the client side value of the CSS
			* "display" property to be able to restore when making a hidden element
			* visible again. Used only when the element is inside a shadow root, and the
			* CSS "display: none" is set in addition the "hidden" attribute.
			*/
			VISIBILITY_STYLE_DISPLAY_PROPERTY: "styleDisplay",
			/**
			* The property in Json object which marks the object as special value
			* transmitting URI (not just any string).
			*
			* Used in the `ElementAttributeMap`.
			*/
			URI_ATTRIBUTE: "uri",
			/**
			* The "slot" attribute, which should be sent to the client and applied to
			* the DOM element even when the element is initially invisible. This is a
			* structural attribute needed for CSS selectors and layout.
			*/
			SLOT_ATTRIBUTE: "slot"
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/reactive/InvalidateEvent.js
var InvalidateEvent;
function init_InvalidateEvent() {
	return (init_InvalidateEvent = __esmMin((() => {
		InvalidateEvent = class {
			#source;
			/**
			* Creates a new event for computation.
			*
			* @param source - the invalidated computation
			*/
			constructor(source) {
				this.#source = source;
			}
			/**
			* Gets the invalidated computation.
			*
			* @returns the invalidated computation
			*/
			getSource() {
				return this.#source;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/reactive/Computation.js
var Computation;
function init_Computation() {
	return (init_Computation = __esmMin((() => {
		init_InvalidateEvent();
		init_Reactive();
		Computation = class {
			#invalidated = false;
			#stopped = false;
			#dependencies = [];
			#invalidateListeners = /* @__PURE__ */ new Set();
			#recomputeCommand;
			/**
			* Creates a new computation.
			*
			* @param recomputeCommand - the command that does the actual recomputation.
			*   This command is run in a way that automatically registers dependencies
			*   to any reactive value accessed.
			*/
			constructor(recomputeCommand) {
				this.#recomputeCommand = recomputeCommand;
				this.#invalidate();
			}
			/**
			* Adds a dependency to a reactive value. This computation is scheduled for
			* recomputation when any dependency fires a change event. All previous
			* dependencies are cleared before recomputing.
			*
			* This method is automatically called when a reactive value is used for
			* recomputing this computation. The developer is not expected to call this
			* method himself.
			*
			* @param dependency - the reactive value to depend on
			*/
			addDependency(dependency) {
				if (!this.#stopped) {
					const remover = dependency.addReactiveValueChangeListener((event) => this.onValueChange(event));
					this.#dependencies.push(remover);
				}
			}
			/**
			* Invoked when a reactive value has changed.
			*
			* @param _changeEvent - the change event
			*/
			onValueChange(_changeEvent) {
				if (this.#invalidated || this.#stopped) return;
				this.#invalidate();
			}
			#invalidate() {
				this.#invalidated = true;
				this.#clearDependencies();
				if (!this.#stopped) Reactive.addFlushListener(() => this.recompute());
				if (this.#invalidateListeners.size !== 0) {
					const oldListeners = this.#invalidateListeners;
					this.#invalidateListeners = /* @__PURE__ */ new Set();
					const invalidateEvent = new InvalidateEvent(this);
					oldListeners.forEach((listener) => listener(invalidateEvent));
				}
			}
			#clearDependencies() {
				while (this.#dependencies.length > 0) this.#dependencies.shift().remove();
			}
			/**
			* Stops this computation, so that it will no longer be recomputed.
			*/
			stop() {
				this.#stopped = true;
				this.#invalidate();
				this.#invalidateListeners.clear();
				this.#clearDependencies();
			}
			/**
			* Checks whether this computation is invalidated. An invalidated
			* computation will eventually be recomputed (unless it has also been
			* stopped). Recomputation will happen the next time {@link recompute} or
			* {@link Reactive.flush} is invoked.
			*
			* @returns `true` if this computation is invalidated; otherwise `false`
			*/
			isInvalidated() {
				return this.#invalidated;
			}
			/**
			* Recomputes this computation.
			*/
			recompute() {
				if (this.#invalidated && !this.#stopped) try {
					Reactive.runWithComputation(this, () => this.#recomputeCommand());
				} finally {
					this.#invalidated = false;
				}
			}
			/**
			* Adds an invalidate listener that will be invoked the next time this
			* computation is invalidated.
			*
			* @param listener - the listener to run on the next invalidation
			*/
			onNextInvalidate(listener) {
				if (!this.#stopped) this.#invalidateListeners.add(listener);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/reactive/Reactive.js
var flushListeners, postFlushListeners, eventCollectors, currentComputation, flushing, Reactive;
function init_Reactive() {
	return (init_Reactive = __esmMin((() => {
		init_Computation();
		flushListeners = [];
		postFlushListeners = [];
		eventCollectors = /* @__PURE__ */ new Set();
		currentComputation = null;
		flushing = false;
		Reactive = {
			/**
			* Adds a listener that will be invoked the next time {@link flush} is
			* invoked. A listener added during a flush will be invoked before that
			* flush finishes.
			*
			* @param flushListener - the flush listener to add
			*/
			addFlushListener(flushListener) {
				flushListeners.push(flushListener);
			},
			/**
			* Adds a listener that will be invoked during the next {@link flush},
			* after all regular flush listeners have been invoked. If a post flush
			* listener adds new flush listeners, those flush listeners will be invoked
			* before the next post flush listener is invoked.
			*
			* @param postFlushListener - the listener to add
			*/
			addPostFlushListener(postFlushListener) {
				postFlushListeners.push(postFlushListener);
			},
			/**
			* Flushes all flush listeners and post flush listeners. A listener is
			* discarded after it has been invoked once. This means that there will be
			* no listeners registered for the next flush at the time this method
			* returns.
			*
			* @see {@link addFlushListener}
			* @see {@link addPostFlushListener}
			*/
			flush() {
				if (flushing) return;
				let flushListenerIndex = 0;
				let postFlushListenerIndex = 0;
				try {
					flushing = true;
					while (flushListenerIndex < flushListeners.length || postFlushListenerIndex < postFlushListeners.length) {
						while (flushListenerIndex < flushListeners.length) {
							flushListeners[flushListenerIndex]();
							flushListenerIndex++;
						}
						if (postFlushListenerIndex < postFlushListeners.length) {
							postFlushListeners[postFlushListenerIndex]();
							postFlushListenerIndex++;
						}
					}
				} finally {
					flushing = false;
					flushListeners.splice(0, flushListenerIndex);
					postFlushListeners.splice(0, postFlushListenerIndex);
				}
			},
			/**
			* Gets the currently active computation. Any reactive value that is
			* accessed when a computation is active should be added as a dependency to
			* that computation so that the computation will be invalidated if the value
			* changes.
			*
			* @returns the current computation, or `null` if there is no current
			*   computation.
			*/
			getCurrentComputation() {
				return currentComputation;
			},
			/**
			* Runs a task with the given computation set as
			* {@link getCurrentComputation}. If another computation is set as the
			* current computation, it is temporarily replaced by the provided
			* computation, but restored again after the provided task has been run.
			*
			* @param computation - the computation to set as current
			* @param command - the command to run while the computation is set as current
			*/
			runWithComputation(computation, command) {
				const oldComputation = currentComputation;
				currentComputation = computation;
				try {
					command();
				} finally {
					currentComputation = oldComputation;
				}
			},
			/**
			* Adds a reactive change listener that will be invoked whenever a reactive
			* change event is fired from any reactive event router.
			*
			* @param reactiveValueChangeListener - the listener to add
			* @returns an event remover that can be used to remove the listener
			*/
			addEventCollector(reactiveValueChangeListener) {
				eventCollectors.add(reactiveValueChangeListener);
				return { remove: () => {
					eventCollectors.delete(reactiveValueChangeListener);
				} };
			},
			/**
			* Fires a reactive change event to all registered event collectors.
			*
			* @see {@link addEventCollector}
			*
			* @param event - the fired event
			*/
			notifyEventCollectors(event) {
				new Set(eventCollectors).forEach((listener) => listener(event));
			},
			/**
			* Evaluates the given command whenever there is a change in any
			* {@link ReactiveValue} used in the command.
			*
			* @param command - the command to run
			* @returns A {@link Computation} object which can be used to control the
			*   evaluation
			*/
			runWhenDependenciesChange(command) {
				return new Computation(command);
			},
			/**
			* Resets Reactive to the initial state.
			*
			* Intended for test cases to call in setup to avoid having tests affect
			* each other as Reactive state is static and shared.
			*
			* Should never be called from non-test code!
			*/
			reset() {
				flushListeners = [];
				eventCollectors = /* @__PURE__ */ new Set();
				currentComputation = null;
				postFlushListeners = [];
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/reactive/ReactiveEventRouter.js
var ReactiveEventRouter;
function init_ReactiveEventRouter() {
	return (init_ReactiveEventRouter = __esmMin((() => {
		init_Reactive();
		ReactiveEventRouter = class {
			#listeners = /* @__PURE__ */ new Set();
			#reactiveValue;
			#wrapper;
			#dispatcher;
			/**
			* Creates a new event router for a reactive value.
			*
			* @param reactiveValue - the reactive value, not `null`
			* @param wrapper - callback for wrapping a generic reactive change listener
			*   to an instance of the listener type natively supported by this event
			*   router
			* @param dispatcher - callback for dispatching an event to a listener
			*/
			constructor(reactiveValue, wrapper, dispatcher) {
				this.#reactiveValue = reactiveValue;
				this.#wrapper = wrapper;
				this.#dispatcher = dispatcher;
			}
			/**
			* Adds a listener to this event router.
			*
			* @param listener - the listener to add, not `null`
			* @returns an event remover that can be used for removing the added listener
			*/
			addListener(listener) {
				this.#listeners.add(listener);
				const remover = { remove: () => {
					this.#listeners.delete(listener);
				} };
				const computation = Reactive.getCurrentComputation();
				if (computation !== null) computation.onNextInvalidate(() => remover.remove());
				return remover;
			}
			/**
			* Adds a generic reactive change listener to this router.
			*
			* @param reactiveValueChangeListener - the change listener to add, not `null`
			* @returns an event remover that can be used for removing the added listener
			*/
			addReactiveListener(reactiveValueChangeListener) {
				return this.addListener(this.#wrapper(reactiveValueChangeListener));
			}
			/**
			* Fires an event to all listeners added to this router using
			* {@link addListener} or {@link addReactiveListener} as well as all
			* global event collectors added using {@link Reactive.addEventCollector}.
			*
			* @param event - the event to fire
			*/
			fireEvent(event) {
				new Set(this.#listeners).forEach((listener) => this.#dispatcher(listener, event));
				Reactive.notifyEventCollectors(event);
			}
			/**
			* Registers access to the data for which this event router fires event.
			* This registers the event source of this event router to be set as a
			* dependency of the current computation if there is one.
			*/
			registerRead() {
				const computation = Reactive.getCurrentComputation();
				if (computation !== null) computation.addDependency(this.#reactiveValue);
			}
			/**
			* Gets the reactive value for which this router fires event.
			*
			* @returns the reactive value
			*/
			getReactiveValue() {
				return this.#reactiveValue;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/reactive/ReactiveValueChangeEvent.js
var ReactiveValueChangeEvent;
function init_ReactiveValueChangeEvent() {
	return (init_ReactiveValueChangeEvent = __esmMin((() => {
		ReactiveValueChangeEvent = class {
			#source;
			/**
			* Creates a new event fired from a source.
			*
			* @param source - the reactive value that will fire the event
			*/
			constructor(source) {
				this.#source = source;
			}
			/**
			* Gets the reactive value from which this event originates.
			*
			* @returns the event source
			*/
			getSource() {
				return this.#source;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/nodefeature/MapPropertyChangeEvent.js
var MapPropertyChangeEvent;
function init_MapPropertyChangeEvent() {
	return (init_MapPropertyChangeEvent = __esmMin((() => {
		init_ReactiveValueChangeEvent();
		MapPropertyChangeEvent = class extends ReactiveValueChangeEvent {
			#oldValue;
			#newValue;
			/**
			* Creates a new map property change event.
			*
			* @param source - the changed map property
			* @param oldValue - the old value
			* @param newValue - the new value
			*/
			constructor(source, oldValue, newValue) {
				super(source);
				this.#oldValue = oldValue;
				this.#newValue = newValue;
			}
			getSource() {
				return super.getSource();
			}
			/**
			* Gets the old property value.
			*
			* @returns the old value
			*/
			getOldValue() {
				return this.#oldValue;
			}
			/**
			* Gets the new property value.
			*
			* @returns the new value
			*/
			getNewValue() {
				return this.#newValue;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/nodefeature/MapProperty.js
var MapProperty;
function init_MapProperty() {
	return (init_MapProperty = __esmMin((() => {
		init_Reactive();
		init_ReactiveEventRouter();
		init_MapPropertyChangeEvent();
		MapProperty = class MapProperty {
			/**
			* A command that does nothing, returned when there is nothing to synchronize
			* to the server.
			*/
			static NO_OP = () => {};
			#name;
			#map;
			#isServerUpdate = false;
			#eventRouter = new ReactiveEventRouter(this, (listener) => listener, (listener, event) => listener(event));
			#value = null;
			#hasValueState = false;
			#forceValueUpdate;
			#previousDomValue = void 0;
			/**
			* Creates a new property.
			*
			* @param name - the name of the property
			* @param map - the map that the property belongs to
			* @param forceValueUpdate - whether value update for `name` property should be
			*            applied regardless of previous value
			*/
			constructor(name, map, forceValueUpdate = false) {
				this.#name = name;
				this.#map = map;
				this.#forceValueUpdate = forceValueUpdate;
			}
			/**
			* Gets the name of this property.
			*
			* @returns the property name
			*/
			getName() {
				return this.#name;
			}
			/**
			* Gets the map that this property belongs to.
			*
			* @returns the map
			*/
			getMap() {
				return this.#map;
			}
			/**
			* Gets the property value.
			*
			* @returns the property value
			*/
			getValue() {
				this.#eventRouter.registerRead();
				return this.#value;
			}
			/**
			* Checks whether this property has a value. A property has a value if
			* {@link setValue} has been invoked after the property was created or
			* {@link removeValue} was invoked.
			*
			* @see {@link removeValue}
			*
			* @returns `true` if the property has a value, `false` if the property has no
			*         value.
			*/
			hasValue() {
				this.#eventRouter.registerRead();
				return this.#hasValueState;
			}
			/**
			* Sets the property value. Changing the value fires a
			* {@link MapPropertyChangeEvent}.
			*
			* @see {@link addChangeListener}
			*
			* @param value - the new property value
			*/
			setValue(value) {
				this.#isServerUpdate = true;
				this.#doSetValue(value);
				Reactive.addPostFlushListener(() => {
					this.#isServerUpdate = false;
				});
			}
			/**
			* Removes the value of this property so that {@link hasValue} will return
			* `false` and {@link getValue} will return `null` until the next time
			* {@link setValue} is run. A {@link MapPropertyChangeEvent} will be fired if
			* this property has a value.
			*
			* Once a property has been created, it can no longer be removed from its map.
			* The same semantics as e.g. `Map#remove(Object)` is instead provided by
			* marking the value of the property as removed to distinguish it from
			* assigning `null` as the value.
			*/
			removeValue() {
				if (this.#hasValueState) {
					this.#isServerUpdate = true;
					this.#updateValue(null, false);
					Reactive.addPostFlushListener(() => {
						this.#isServerUpdate = false;
					});
				}
			}
			#doSetValue(value) {
				if (!this.#forceValueUpdate && this.#hasValueState && value === this.#value) return;
				this.#updateValue(value, true);
			}
			#updateValue(value, hasValue) {
				const oldValue = this.#value;
				this.#hasValueState = hasValue;
				this.#value = value;
				this.#eventRouter.fireEvent(new MapPropertyChangeEvent(this, oldValue, value));
			}
			/**
			* Adds a listener that gets notified when the value of this property changes.
			*
			* @param listener - the property change listener to add
			* @returns an event remover for unregistering the listener
			*/
			addChangeListener(listener) {
				return this.#eventRouter.addListener(listener);
			}
			addReactiveValueChangeListener(reactiveValueChangeListener) {
				return this.#eventRouter.addReactiveListener(reactiveValueChangeListener);
			}
			getValueOrDefault(defaultValue) {
				if (this.hasValue()) {
					const v = this.getValue();
					if (v === null || v === void 0) return defaultValue;
					if (typeof defaultValue === "number") return Math.trunc(v);
					return v;
				}
				return defaultValue;
			}
			/**
			* Sets the value of this property and synchronizes the value to the server.
			*
			* @param newValue - the new value to set.
			* @see {@link getSyncToServerCommand}
			*/
			syncToServer(newValue) {
				this.getSyncToServerCommand(newValue)();
			}
			/**
			* Sets the value of this property and returns a synch to server command.
			*
			* @param newValue - the new value to set.
			* @returns a command that synchronizes the value to the server
			* @see {@link syncToServer}
			*/
			getSyncToServerCommand(newValue) {
				const currentValue = this.hasValue() ? this.getValue() : null;
				if (newValue === currentValue) this.#isServerUpdate = false;
				if (!(newValue === currentValue && this.#hasValueState) && !this.#isServerUpdate) {
					const node = this.getMap().getNode();
					const tree = node.getTree();
					if (tree.isActive(node)) {
						this.#doSetValue(newValue);
						return () => tree.sendNodePropertySyncToServer(this);
					}
					this.#eventRouter.fireEvent(new MapPropertyChangeEvent(this, currentValue, currentValue));
					Reactive.flush();
				}
				return MapProperty.NO_OP;
			}
			/**
			* Stores previous DOM value of this property for detection of value
			* modification by the user during the server round-trip.
			*
			* @param previousDomValue - DOM value of property prior to server round-trip
			*            start. Can be `null`;
			*/
			setPreviousDomValue(previousDomValue) {
				this.#previousDomValue = previousDomValue === null ? void 0 : previousDomValue;
			}
			/**
			* Returns previous DOM value of this property for detection of value
			* modification by the user during the server round-trip.
			*
			* @returns previous DOM value, or `undefined` if not stored.
			*/
			getPreviousDomValue() {
				return this.#previousDomValue;
			}
			/**
			* Clears the previous DOM value of this property.
			*/
			clearPreviousDomValue() {
				this.#previousDomValue = void 0;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/nodefeature/ListSpliceEvent.js
var ListSpliceEvent;
function init_ListSpliceEvent() {
	return (init_ListSpliceEvent = __esmMin((() => {
		init_ReactiveValueChangeEvent();
		ListSpliceEvent = class extends ReactiveValueChangeEvent {
			#index;
			#remove;
			#add;
			#clear;
			/**
			* Creates a new list splice event.
			*
			* @param source - the changed list
			* @param index - the start index of the changes
			* @param remove - the removed items, not `null`
			* @param add - the added items, not `null`
			* @param clear - `true` when this is an event triggered upon removing all the
			*   nodes of the given list, `false` otherwise
			*/
			constructor(source, index, remove, add, clear) {
				super(source);
				this.#index = index;
				this.#remove = remove;
				this.#add = add;
				this.#clear = clear;
			}
			getSource() {
				return super.getSource();
			}
			/**
			* Gets the start index of the changes.
			*
			* @returns the start index of the changes
			*/
			getIndex() {
				return this.#index;
			}
			/**
			* Gets an array of removed items.
			*
			* @returns array of removed items, not `null`
			*/
			getRemove() {
				return this.#remove;
			}
			/**
			* Gets an array of added items.
			*
			* @returns array of added items, not `null`
			*/
			getAdd() {
				return this.#add;
			}
			/**
			* Gets whether this event is a `clear` event.
			*
			* @returns `true` if the event was triggered after a full clear,
			*         `false` otherwise.
			*/
			isClear() {
				return this.#clear;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/nodefeature/NodeFeature.js
/**
* Tells whether the given value is a `StateNode`, i.e. exposes a `getDebugJson`
* method. Port deviation: Java uses `value instanceof StateNode`
* ({@link NodeFeature.getAsDebugJson}), but `NodeFeature` is the base class of
* `NodeList`/`NodeMap`, so a runtime (value) import of `StateNode` — needed for a
* real `instanceof` — would form a circular `class NodeList extends NodeFeature`
* initialization cycle (`NodeFeature` → `StateNode` → `NodeList`/`NodeMap` →
* `NodeFeature`). `StateNode` is therefore imported type-only and the check is
* structural; it is behaviorally equivalent for the values a feature holds
* (primitives or child `StateNode`s).
*/
function isStateNode(value) {
	return value !== null && typeof value === "object" && typeof value.getDebugJson === "function";
}
var NodeFeature;
function init_NodeFeature() {
	return (init_NodeFeature = __esmMin((() => {
		NodeFeature = class {
			#id;
			#node;
			/**
			* Creates a new feature.
			*
			* @param id - the id of the feature
			* @param node - the node that the feature belongs to
			*/
			constructor(id, node) {
				this.#id = id;
				this.#node = node;
			}
			/**
			* Gets the id of this feature.
			*
			* @returns the id
			*/
			getId() {
				return this.#id;
			}
			/**
			* Gets the node of this feature.
			*
			* @returns the node
			*/
			getNode() {
				return this.#node;
			}
			/**
			* Helper for getting a JSON representation of a child value.
			*
			* @param value - the child value
			* @returns the JSON representation
			*/
			getAsDebugJson(value) {
				if (isStateNode(value)) return value.getDebugJson();
				return value;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/nodefeature/NodeList.js
var NodeList;
function init_NodeList() {
	return (init_NodeList = __esmMin((() => {
		init_ReactiveEventRouter();
		init_ListSpliceEvent();
		init_NodeFeature();
		NodeList = class extends NodeFeature {
			#values = [];
			#hasBeenClearedState = false;
			#eventRouter = new ReactiveEventRouter(this, (reactiveValueChangeListener) => reactiveValueChangeListener, (listener, event) => listener(event));
			/**
			* Gets the number of items in this list.
			*
			* @returns the number of items
			*/
			length() {
				this.#eventRouter.registerRead();
				return this.#values.length;
			}
			/**
			* Gets the item at the given index.
			*
			* @param index - the index
			* @returns the item at the index
			*/
			get(index) {
				return this.#values[index];
			}
			/**
			* Sets the value at the given index.
			*
			* @param index - the index
			* @param value - the value to set
			*/
			set(index, value) {
				this.#values[index] = value;
			}
			/**
			* Shorthand for adding the given item at the given index. This method
			* delegates to {@link splice} which updates the list
			* contents and fires the appropriate event.
			*
			* @param index - the index where the item should be added
			* @param item - the new item to add
			*/
			add(index, item) {
				this.splice(index, 0, [item]);
			}
			/**
			* Removes and adds a number of items at the given index.
			*
			* This causes a {@link ListSpliceEvent} to be fired.
			*
			* Port deviation: merges the Java `splice(int, int)` and
			* `splice(int, int, JsArray)` overloads into one method with an optional
			* `add` argument; omitting `add` removes items without adding any.
			*
			* @param index - the index at which do do the operation
			* @param remove - the number of items to remove
			* @param add - an array of new items to add
			*/
			splice(index, remove, add) {
				const removed = add === void 0 ? this.#values.splice(index, remove) : this.#values.splice(index, remove, ...add);
				this.#eventRouter.fireEvent(new ListSpliceEvent(this, index, removed, add ?? [], false));
			}
			/**
			* Removes all the nodes from the list. This causes a
			* {@link ListSpliceEvent} to be fired, with
			* {@link ListSpliceEvent.isClear} as `true`.
			*/
			clear() {
				this.#hasBeenClearedState = true;
				const removed = this.#values.splice(0, this.#values.length);
				this.#eventRouter.fireEvent(new ListSpliceEvent(this, 0, removed, [], true));
			}
			/**
			* Gets a JSON object representing the contents of this feature. Only
			* intended for debugging purposes.
			*
			* @returns a JSON representation
			*/
			getDebugJson() {
				const json = [];
				for (const value of this.#values) json.push(this.getAsDebugJson(value));
				return json;
			}
			/**
			* Convert the feature values into a {@link JsonValue} using provided
			* `converter` for the values stored in the feature (i.e. primitive
			* types, StateNodes).
			*
			* @param converter - converter to convert values stored in the feature
			* @returns resulting converted value
			*/
			convert(converter) {
				const json = [];
				for (const value of this.#values) json.push(converter(value));
				return json;
			}
			/**
			* Adds a listener that will be notified when the list structure changes.
			*
			* @param listener - the list change listener
			* @returns an event remover that can be used for removing the added listener
			*/
			addSpliceListener(listener) {
				return this.#eventRouter.addListener(listener);
			}
			addReactiveValueChangeListener(reactiveValueChangeListener) {
				return this.#eventRouter.addReactiveListener(reactiveValueChangeListener);
			}
			/**
			* Iterates all values in this list.
			*
			* @param callback - the callback to invoke for each value
			*/
			forEach(callback) {
				this.#eventRouter.registerRead();
				this.#values.forEach((value) => callback(value));
			}
			/**
			* Returns `true` if the list instance has been cleared at some point.
			*
			* @returns `true` if the list instance has been cleared
			*/
			hasBeenCleared() {
				return this.#hasBeenClearedState;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/nodefeature/MapPropertyAddEvent.js
var MapPropertyAddEvent;
function init_MapPropertyAddEvent() {
	return (init_MapPropertyAddEvent = __esmMin((() => {
		init_ReactiveValueChangeEvent();
		MapPropertyAddEvent = class extends ReactiveValueChangeEvent {
			#property;
			/**
			* Creates a new property add event.
			*
			* @param source - the changed map
			* @param property - the newly added property
			*/
			constructor(source, property) {
				super(source);
				this.#property = property;
			}
			getSource() {
				return super.getSource();
			}
			/**
			* Gets the added property.
			*
			* @returns the added property
			*/
			getProperty() {
				return this.#property;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/nodefeature/NodeMap.js
var NodeMap;
function init_NodeMap() {
	return (init_NodeMap = __esmMin((() => {
		init_ReactiveEventRouter();
		init_MapProperty();
		init_MapPropertyAddEvent();
		init_NodeFeature();
		init_NodeFeatures();
		NodeMap = class extends NodeFeature {
			#properties = /* @__PURE__ */ new Map();
			#eventRouter = new ReactiveEventRouter(this, (reactiveValueChangeListener) => reactiveValueChangeListener, (listener, event) => listener(event));
			/**
			* Gets the property with a given name, creating it if necessary.
			*
			* A {@link MapPropertyAddEvent} is fired if a new property instance is
			* created.
			*
			* @param name - the name of the property
			* @returns the property instance
			*/
			getProperty(name) {
				let property = this.#properties.get(name);
				if (property === void 0) {
					property = new MapProperty(name, this, name === "innerHTML" && this.getId() === NodeFeatures.ELEMENT_PROPERTIES);
					this.#properties.set(name, property);
					this.#eventRouter.fireEvent(new MapPropertyAddEvent(this, property));
				}
				return property;
			}
			/**
			* Checks if the given property is present and has a value.
			*
			* @param name - the name of the property to check
			* @returns true if the property exists and has a value, false otherwise
			*/
			hasPropertyValue(name) {
				const property = this.#properties.get(name);
				if (property === void 0) return false;
				return property.hasValue();
			}
			/**
			* Iterates all properties in this map.
			*
			* @param callback - the callback to invoke for each property
			*/
			forEachProperty(callback) {
				this.#eventRouter.registerRead();
				this.#properties.forEach((property, name) => callback(property, name));
			}
			/**
			* Gets all property names in this map.
			*
			* @returns a list with the property names, never `null`
			*/
			getPropertyNames() {
				const list = [];
				this.forEachProperty((_property, name) => list.push(name));
				return list;
			}
			/**
			* Gets a JSON object representing the contents of this feature. Only
			* intended for debugging purposes.
			*
			* @returns a JSON representation
			*/
			getDebugJson() {
				const json = {};
				this.#properties.forEach((p, n) => {
					if (p.hasValue()) json[n] = this.getAsDebugJson(p.getValue());
				});
				if (Object.keys(json).length === 0) return null;
				return json;
			}
			/**
			* Convert the feature values into a {@link JsonValue} using provided
			* `converter` for the values stored in the feature (i.e. primitive
			* types, StateNodes).
			*
			* @param converter - converter to convert values stored in the feature
			* @returns resulting converted value
			*/
			convert(converter) {
				const json = {};
				this.#properties.forEach((property, name) => {
					if (property.hasValue()) json[name] = converter(property.getValue());
				});
				return json;
			}
			/**
			* Adds a listener that has a dependency to this value, and should be
			* notified when this value changes.
			*
			* @param reactiveValueChangeListener - the listener to add
			* @returns an event remover that can be used for removing the added listener
			*/
			addReactiveValueChangeListener(reactiveValueChangeListener) {
				return this.#eventRouter.addReactiveListener(reactiveValueChangeListener);
			}
			/**
			* Adds a listener that is informed whenever a new property is added to this
			* map.
			*
			* @param listener - the property add listener
			* @returns an event remover that can be used for removing the added listener
			*/
			addPropertyAddListener(listener) {
				return this.#eventRouter.addListener(listener);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/PolymerUtils.js
/**
* Calls Polymer `splice` method on specified `htmlNode`.
*
* Splice call is made via `apply` method in order to force the method to treat
* `itemsToAdd` as numerous parameters, not a single one.
*
* @param htmlNode - node to call splice method on
* @param path - polymer model path to property
* @param startIndex - start index of a list for splice operation
* @param deleteCount - number of elements to delete from the list after startIndex
* @param itemsToAdd - elements to add after startIndex
*
* @see Polymer docs: https://www.polymer-project.org/2.0/docs/devguide/model-data
*/
function splice(htmlNode, path, startIndex, deleteCount, itemsToAdd) {
	const node = htmlNode;
	node.splice.apply(node, [
		path,
		startIndex,
		deleteCount
	].concat(itemsToAdd));
}
/**
* Sets a property to an element by using the Polymer `set` method.
*
* @param element - the element to set the property to
* @param path - the path of the property
* @param value - the value
*/
function setProperty$1(element, path, value) {
	element.set(path, value);
}
/**
* Checks whether the `htmlNode` is a polymer 2 element.
*
* @param htmlNode - HTML element to check
* @returns `true` if the `htmlNode` is a polymer element
*/
function isPolymerElement(htmlNode) {
	const polymer = window.Polymer;
	const isP2Element = typeof polymer === "function" && !!polymer.Element && htmlNode instanceof polymer.Element;
	const isP3Element = htmlNode.constructor.polymerElementVersion !== void 0;
	return isP2Element || isP3Element;
}
/**
* Checks whether the `htmlNode` can turn into polymer 2 element later.
*
* Lazy loaded dependencies can load Polymer later than the element itself gets
* processed by the Flow. This method helps to determine such elements.
*
* @param htmlNode - HTML element to check
* @returns `true` if the `htmlNode` can become a polymer 2 element
*
* @deprecated This is not in use anywhere and can be removed
*/
function mayBePolymerElement(htmlNode) {
	return !!window.customElements && htmlNode.localName.includes("-");
}
/**
* Returns `true` if the DOM structure of the polymer custom element
* `shadowRootParent` is ready (meaning that it has shadow root and its shadow
* root may be queried for children referenced by id).
*
* @param shadowRootParent - the polymer custom element
* @returns `true` if the `shadowRootParent` element is ready
*/
function isReady(shadowRootParent) {
	return typeof shadowRootParent.$ !== "undefined";
}
/**
* Gets the custom element using `path` of indices starting from the `root`.
*
* @param root - the root element to start from
* @param path - the indices path identifying the custom element.
* @returns the element inside the `root` by the path of indices
*/
function getCustomElement(root, path) {
	let current = root;
	for (const value of path) current = getChildIgnoringStyles(current, value);
	if (current instanceof Element) return current;
	else if (current === null) Console.warn(`There is no element addressed by the path '${JSON.stringify(path)}'`);
	else Console.warn(`The node addressed by path ${JSON.stringify(path)} is not an Element`);
	return null;
}
/**
* Returns the shadow root of the `templateElement`.
*
* @param templateElement - the owner of the shadow root
* @returns the shadow root of the element
*/
function getDomRoot(templateElement) {
	return templateElement.root ?? null;
}
/**
* Invokes the `runnable` when the custom element with the given `tagName` is
* initialized (its DOM structure becomes available).
*
* @param tagName - the name of the custom element
* @param runnable - the command to run when the element if initialized
*/
function invokeWhenDefined(tagName, runnable) {
	window.customElements.whenDefined(tagName).then(runnable);
}
/**
* Gets the tag name of the `node`.
*
* @param node - the node to get the tag name from
* @returns the tag name of the node
*/
function getTag$1(node) {
	return node.getMap(NodeFeatures.ELEMENT_DATA).getProperty(NodeProperties.TAG).getValue();
}
/**
* Adds the `listener` which will be invoked when the `polymerElement` becomes
* "ready" meaning that it's method `ready` is called.
*
* The listener won't be called if the element is already "ready" and the
* listener will be removed immediately once it's executed.
*
* @param polymerElement - the custom (polymer) element to listen its readiness
*            state
* @param listener - the callback to execute once the element becomes ready
*/
function addReadyListener(polymerElement, listener) {
	let set = readyListeners.get(polymerElement);
	if (set === void 0) {
		set = /* @__PURE__ */ new Set();
		readyListeners.set(polymerElement, set);
	}
	set.add(listener);
}
/**
* Fires the ready event for the `polymerElement`.
*
* @param polymerElement - the custom (polymer) element whose state is "ready"
*/
function fireReadyEvent(polymerElement) {
	const listeners = readyListeners.get(polymerElement);
	if (listeners !== void 0) {
		readyListeners.delete(polymerElement);
		listeners.forEach((listener) => listener());
	}
}
function getChildIgnoringStyles(parent, index) {
	const children = parent.children;
	let filteredIndex = -1;
	for (let i = 0; i < children.length; i++) {
		const element = children[i];
		if (element.tagName.toLowerCase() !== "style") filteredIndex++;
		if (filteredIndex === index) return element;
	}
	return null;
}
/**
* Returns true if and only if the element has a shadow root ancestor.
*
* @param element - the element to test
* @returns whether the element is in a shadow root
*/
function isInShadowRoot(element) {
	let node = element.parentNode;
	while (node) {
		if (node.toString() === "[object ShadowRoot]") return true;
		node = node.parentNode;
	}
	return false;
}
var readyListeners;
function init_PolymerUtils() {
	return (init_PolymerUtils = __esmMin((() => {
		init_Console();
		init_NodeFeatures();
		init_NodeProperties();
		readyListeners = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/NodeUnregisterEvent.js
var NodeUnregisterEvent;
function init_NodeUnregisterEvent() {
	return (init_NodeUnregisterEvent = __esmMin((() => {
		NodeUnregisterEvent = class {
			#node;
			/**
			* Creates a new node unregister event.
			*
			* @param node - the unregistered node
			*/
			constructor(node) {
				this.#node = node;
			}
			/**
			* Gets the unregistered node.
			*
			* @returns the unregistered node
			*/
			getNode() {
				return this.#node;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/StateNode.js
var StateNode;
function init_StateNode() {
	return (init_StateNode = __esmMin((() => {
		init_NodeList();
		init_NodeMap();
		init_NodeUnregisterEvent();
		StateNode = class {
			#tree;
			#id;
			#parent = null;
			#unregistered = false;
			#features = /* @__PURE__ */ new Map();
			#unregisterListeners = /* @__PURE__ */ new Set();
			#domNodeSetListeners = /* @__PURE__ */ new Set();
			#nodeData = /* @__PURE__ */ new Map();
			#domNode = null;
			/**
			* Creates a new state node.
			*
			* @param id - the id of the node
			* @param tree - the state tree that the node belongs to
			*/
			constructor(id, tree) {
				this.#id = id;
				this.#tree = tree;
			}
			/**
			* Gets the state tree that this node belongs to.
			*
			* @returns the state tree
			*/
			getTree() {
				return this.#tree;
			}
			/**
			* Gets the id of this state node.
			*
			* @returns the id
			*/
			getId() {
				return this.#id;
			}
			/**
			* Gets the node list with the given id. Creates a new node list if one
			* doesn't already exist.
			*
			* @param id - the id of the list
			* @returns the list with the given id
			*/
			getList(id) {
				let feature = this.#features.get(id);
				if (feature === void 0) {
					feature = new NodeList(id, this);
					this.#features.set(id, feature);
				}
				assert(feature instanceof NodeList, "Feature is not a NodeList");
				return feature;
			}
			/**
			* Gets the node map with the given id. Creates a new map if one doesn't
			* already exist.
			*
			* @param id - the id of the map
			* @returns the map with the given id
			*/
			getMap(id) {
				let feature = this.#features.get(id);
				if (feature === void 0) {
					feature = new NodeMap(id, this);
					this.#features.set(id, feature);
				}
				assert(feature instanceof NodeMap, "Feature is not a NodeMap");
				return feature;
			}
			/**
			* Checks whether this node has a feature with the given id.
			*
			* @param id - the id of the feature
			* @returns `true` if this node has the given feature; otherwise `false`
			*/
			hasFeature(id) {
				return this.#features.has(id);
			}
			/**
			* Iterates all features in this node.
			*
			* @param callback - the callback to invoke for each feature
			*/
			forEachFeature(callback) {
				this.#features.forEach((feature, id) => callback(feature, id));
			}
			/**
			* Gets a JSON object representing the contents of this node. Only intended
			* for debugging purposes.
			*
			* @returns a JSON representation
			*/
			getDebugJson() {
				const object = createJsonObjectWithoutPrototype();
				this.forEachFeature((feature, featureId) => {
					const json = feature.getDebugJson();
					if (json !== null && json !== void 0) object[this.#tree.getFeatureDebugName(featureId)] = json;
				});
				return object;
			}
			/**
			* Checks whether this node has been unregistered.
			*
			* @see {@link StateTree.unregisterNode}
			*
			* @returns `true` if this node has been unregistered; `false` if the node is
			*          still registered
			*/
			isUnregistered() {
				return this.#unregistered;
			}
			/**
			* Unregisters this node, causing all registered node unregister listeners to
			* be notified.
			*
			* @see {@link addUnregisterListener}
			*/
			unregister() {
				assert(this.#tree.getNode(this.getId()) === null, "Node should no longer be findable from the tree");
				assert(!this.#unregistered, "Node is already unregistered");
				this.#unregistered = true;
				const event = new NodeUnregisterEvent(this);
				new Set(this.#unregisterListeners).forEach((l) => l(event));
				this.#unregisterListeners.clear();
			}
			/**
			* Adds a listener that will be notified when this node is unregistered.
			*
			* @param listener - the node unregister listener to add
			* @returns an event remover that can be used for removing the added listener
			*/
			addUnregisterListener(listener) {
				this.#unregisterListeners.add(listener);
				return { remove: () => {
					this.#unregisterListeners.delete(listener);
				} };
			}
			/**
			* Gets the DOM node associated with this state node.
			*
			* @returns the DOM node, or `null` if no DOM node has been associated with
			*          this state node
			*/
			getDomNode() {
				return this.#domNode;
			}
			/**
			* Sets the DOM node associated with this state node.
			*
			* @param node - the associated DOM node
			*/
			setDomNode(node) {
				assert(this.#domNode === null || node === null, "StateNode already has a DOM node");
				this.#domNode = node;
				new Set(this.#domNodeSetListeners).forEach((listener) => {
					if (listener(this)) this.#domNodeSetListeners.delete(listener);
				});
			}
			/**
			* Adds a listener to get a notification when the DOM Node is set for this
			* {@link StateNode}.
			*
			* The listener return value is used to decide whether the listener should be
			* removed immediately if it returns `true`.
			*
			* @param listener - listener to add
			* @returns an event remover that can be used for removing the added listener
			*/
			addDomNodeSetListener(listener) {
				this.#domNodeSetListeners.add(listener);
				return { remove: () => {
					this.#domNodeSetListeners.delete(listener);
				} };
			}
			/**
			* Get the parent {@link StateNode} if set.
			*
			* @returns parent state node
			*/
			getParent() {
				return this.#parent;
			}
			/**
			* Set the parent {@link StateNode} for this node.
			*
			* @param parent - the parent state node
			*/
			setParent(parent) {
				this.#parent = parent;
			}
			/**
			* Stores the `object` in the {@link StateNode} instance.
			*
			* The `object` may represent any kind of data. This data can be retrieved
			* later on via the {@link getNodeData} providing the class of the object. So
			* make sure you are using some custom type for your data to avoid clash with
			* other types.
			*
			* @see {@link getNodeData}
			*
			* @param object - the object to store
			* @typeParam T - the type of the node data to set
			*/
			setNodeData(object) {
				this.#nodeData.set(object.constructor, object);
			}
			/**
			* Gets the object previously stored by the {@link setNodeData} by its type.
			*
			* If there is no stored object with the given type then the method returns
			* `null`.
			*
			* @param clazz - the type of the object to get
			* @typeParam T - the type of the node data to get
			* @returns the object by its `clazz`
			*/
			getNodeData(clazz) {
				const value = this.#nodeData.get(clazz);
				return value === void 0 ? null : value;
			}
			/**
			* Removes the `object` from the stored data.
			*
			* @param object - the object to remove
			* @typeParam T - the type of the object to remove
			*/
			clearNodeData(object) {
				this.#nodeData.delete(object.constructor);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/PolymerModelTree.js
/**
* Makes an attempt to convert an object into json.
*
* @param object - the object to convert to json
* @returns json from object, `null` for null
*/
function createModelTree(object) {
	if (object instanceof StateNode) {
		const node = object;
		let feature = null;
		if (node.hasFeature(NodeFeatures.ELEMENT_PROPERTIES)) feature = node.getMap(NodeFeatures.ELEMENT_PROPERTIES);
		else if (node.hasFeature(NodeFeatures.TEMPLATE_MODELLIST)) feature = node.getList(NodeFeatures.TEMPLATE_MODELLIST);
		else if (node.hasFeature(NodeFeatures.BASIC_TYPE_VALUE)) return createModelTree(node.getMap(NodeFeatures.BASIC_TYPE_VALUE).getProperty(NodeProperties.VALUE));
		assert(feature !== null, "Don't know how to convert node without map or list features");
		const convert = feature.convert(createModelTree);
		if (typeof convert === "object" && convert !== null && !("nodeId" in convert)) {
			convert.nodeId = node.getId();
			registerChangeHandlers(node, feature, convert);
		}
		return convert;
	} else if (object instanceof MapProperty) {
		const property = object;
		if (property.getMap().getId() === NodeFeatures.BASIC_TYPE_VALUE) return createModelTree(property.getValue());
		const convertedObject = {};
		convertedObject[property.getName()] = createModelTree(property.getValue());
		return convertedObject;
	}
	return object;
}
function registerChangeHandlers(node, feature, value) {
	const registrations = [];
	if (node.hasFeature(NodeFeatures.ELEMENT_PROPERTIES)) {
		assert(feature instanceof NodeMap, `Received an inconsistent NodeFeature for a node that has a ELEMENT_PROPERTIES feature. It should be NodeMap, but it is: ${String(feature)}`);
		const map = feature;
		registerPropertyChangeHandlers(value, registrations, map);
		registerPropertyAddHandler(value, registrations, map);
	} else if (node.hasFeature(NodeFeatures.TEMPLATE_MODELLIST)) {
		assert(feature instanceof NodeList, `Received an inconsistent NodeFeature for a node that has a TEMPLATE_MODELLIST feature. It should be NodeList, but it is: ${String(feature)}`);
		const list = feature;
		registrations.push(list.addSpliceListener((event) => handleListChange(event, value)));
	}
	assert(registrations.length !== 0, "Node should have ELEMENT_PROPERTIES or TEMPLATE_MODELLIST feature");
	registrations.push(node.addUnregisterListener(() => registrations.forEach((registration) => registration.remove())));
}
function registerPropertyAddHandler(value, registrations, map) {
	registrations.push(map.addPropertyAddListener((event) => {
		const property = event.getProperty();
		registrations.push(property.addChangeListener(() => handlePropertyChange$1(property, value)));
		handlePropertyChange$1(property, value);
	}));
}
function registerPropertyChangeHandlers(value, registrations, map) {
	map.forEachProperty((property) => registrations.push(property.addChangeListener(() => handlePropertyChange$1(property, value))));
}
function handleListChange(event, value) {
	Reactive.addFlushListener(() => doHandleListChange(event, value));
}
function doHandleListChange(event, value) {
	const add = event.getAdd();
	const index = event.getIndex();
	const remove = event.getRemove().length;
	const node = event.getSource().getNode();
	const root = getFirstParentWithDomNode(node);
	if (root === null) {
		Console.warn(`Root node for node ${node.getId()} could not be found`);
		return;
	}
	const array = add.map((item) => createModelTree(item));
	if (isPolymerElement(root.getDomNode())) {
		const path = getNotificationPath(root, node, null);
		if (path !== null) {
			splice(root.getDomNode(), path, index, remove, array);
			return;
		}
	}
	value.splice(index, remove, ...array);
}
function handlePropertyChange$1(property, bean) {
	Reactive.addFlushListener(() => doHandlePropertyChange(property, bean));
}
function doHandlePropertyChange(property, value) {
	const propertyName = property.getName();
	const node = property.getMap().getNode();
	const root = getFirstParentWithDomNode(node);
	if (root === null) {
		Console.warn(`Root node for node ${node.getId()} could not be found`);
		return;
	}
	const modelTree = createModelTree(property.getValue());
	if (isPolymerElement(root.getDomNode())) {
		const path = getNotificationPath(root, node, propertyName);
		if (path !== null) setProperty$1(root.getDomNode(), path, modelTree);
		return;
	}
	setJsProperty(value, propertyName, modelTree);
}
function getNotificationPath(rootNode, currentNode, propertyName) {
	const path = [];
	if (propertyName !== null) path.push(propertyName);
	return doGetNotificationPath(rootNode, currentNode, path);
}
function doGetNotificationPath(rootNode, currentNode, path) {
	const parent = currentNode.getParent();
	if (parent.hasFeature(NodeFeatures.ELEMENT_PROPERTIES)) {
		const propertyPath = getPropertiesNotificationPath(currentNode);
		if (propertyPath === null) return null;
		path.push(propertyPath);
	} else if (parent.hasFeature(NodeFeatures.TEMPLATE_MODELLIST)) {
		const listPath = getListNotificationPath(currentNode);
		if (listPath === null) return null;
		path.push(listPath);
	}
	if (parent !== rootNode) return doGetNotificationPath(rootNode, parent, path);
	let result = "";
	let separator = "";
	for (let i = path.length - 1; i >= 0; i--) {
		result += separator + path[i];
		separator = ".";
	}
	return result;
}
function getListNotificationPath(currentNode) {
	let indexInTheList = -1;
	const children = currentNode.getParent().getList(NodeFeatures.TEMPLATE_MODELLIST);
	for (let i = 0; i < children.length(); i++) if (currentNode === children.get(i)) {
		indexInTheList = i;
		break;
	}
	if (indexInTheList < 0) return null;
	return String(indexInTheList);
}
function getPropertiesNotificationPath(currentNode) {
	let propertyNameInTheMap = null;
	const map = currentNode.getParent().getMap(NodeFeatures.ELEMENT_PROPERTIES);
	for (const propertyName of map.getPropertyNames()) if (currentNode === map.getProperty(propertyName).getValue()) {
		propertyNameInTheMap = propertyName;
		break;
	}
	return propertyNameInTheMap;
}
/**
* Gets the first parent node that also has a DOM Node attached to it.
*
* @param node - the node
* @returns the first parent node with a DOM Node, or `null` if none can be found
*/
function getFirstParentWithDomNode(node) {
	let parent = node.getParent();
	while (parent !== null && parent.getDomNode() === null) parent = parent.getParent();
	return parent;
}
function init_PolymerModelTree() {
	return (init_PolymerModelTree = __esmMin((() => {
		init_NodeFeatures();
		init_NodeProperties();
		init_MapProperty();
		init_NodeList();
		init_NodeMap();
		init_PolymerUtils();
		init_Reactive();
		init_StateNode();
		init_Console();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ReactUtils.js
/**
* Utils class, intended to ease working with React component related code on
* the client side.
*
* Implementations migrated from ReactUtils.java.
*/
/**
* Add a callback to the react component that is called when the component
* initialization is ready for binding flow.
*
* @param element - react component element
* @param name - name of container to bind to
* @param runnable - callback function runnable
*/
function addReadyCallback(element, name, runnable) {
	const el = element;
	if (el.addReadyCallback) el.addReadyCallback(name, runnable);
}
/**
* Check if the react element is initialized and functional.
*
* Mirrors ReactUtils.isInitialized.
*
* @param elementLookup - react element lookup supplier
* @returns `true` if Flow binding can already be done
*/
function isInitialized(elementLookup) {
	return elementLookup() !== null;
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/binding/PolymerModelBinding.js
/**
* Hooks the Polymer model-property bridge onto the element. If the element is
* already a Polymer element it is wired immediately; if it may still become one
* (a custom element that has not upgraded yet) the wiring is deferred until the
* element is defined. A timeout races the whenDefined promise so a non-custom
* element does not leak the chained closures.
*/
function bindPolymerModelProperties(element, callbacks) {
	if (isPolymerElement(element)) hookUpPolymerElement(element, callbacks);
	else if (mayBePolymerElement(element)) try {
		const whenDefinedPromise = window.customElements.whenDefined(element.localName);
		const promiseTimeout = new Promise(function(resolve) {
			setTimeout(resolve, 1e3);
		});
		Promise.race([whenDefinedPromise, promiseTimeout]).then(function() {
			if (isPolymerElement(element)) hookUpPolymerElement(element, callbacks);
		});
	} catch (e) {}
}
function hookUpPolymerElement(polymerElement, callbacks) {
	const element = polymerElement;
	const originalPropertiesChanged = element._propertiesChanged;
	if (originalPropertiesChanged) element._propertiesChanged = function(_currentProps, changedProps, _oldProps) {
		callbacks.handlePropertiesChanged(changedProps);
		originalPropertiesChanged.apply(this, arguments);
	};
	const originalReady = element.ready;
	element.ready = function() {
		originalReady.apply(this, arguments);
		callbacks.fireReadyEvent(element);
		const replaceDomRepeatPropertyChange = function() {
			const domRepeat = element.root.querySelector("dom-repeat");
			if (domRepeat) element.removeEventListener("dom-change", replaceDomRepeatPropertyChange);
			else return;
			if (!domRepeat.constructor.prototype.$propChangedModified) {
				domRepeat.constructor.prototype.$propChangedModified = true;
				const changed = domRepeat.constructor.prototype._propertiesChanged;
				domRepeat.constructor.prototype._propertiesChanged = function(currentProps, changedProps, _oldProps) {
					changed.apply(this, arguments);
					const props = Object.getOwnPropertyNames(changedProps);
					const items = "items.";
					for (const propPath of props) {
						let index = propPath.indexOf(items);
						if (index === 0) {
							const prop = propPath.substring(6);
							index = prop.indexOf(".");
							if (index > 0) {
								const arrayIndex = prop.substring(0, index);
								const propertyName = prop.substring(index + 1);
								const currentPropsItem = currentProps.items[arrayIndex];
								if (currentPropsItem && currentPropsItem.nodeId) {
									const nodeId = currentPropsItem.nodeId;
									const value = currentPropsItem[propertyName];
									let host = this.__dataHost;
									while (!host.localName || host.__dataHost) host = host.__dataHost;
									callbacks.handleListItemPropertyChange(nodeId, host, propertyName, value);
								}
							}
						}
					}
				};
			}
		};
		if (element.root && element.root.querySelector("dom-repeat")) replaceDomRepeatPropertyChange();
		else element.addEventListener("dom-change", replaceDomRepeatPropertyChange);
	};
}
function init_PolymerModelBinding() {
	return (init_PolymerModelBinding = __esmMin((() => {
		init_PolymerUtils();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/Timer.js
var Timer;
function init_Timer() {
	return (init_Timer = __esmMin((() => {
		Timer = class {
			#handle = null;
			#repeating = false;
			#task;
			constructor(task) {
				this.#task = task;
			}
			schedule(ms) {
				this.cancel();
				this.#repeating = false;
				this.#handle = setTimeout(() => {
					this.#handle = null;
					this.#task();
				}, ms);
			}
			scheduleRepeating(ms) {
				this.cancel();
				this.#repeating = true;
				this.#handle = setInterval(() => this.#task(), ms);
			}
			cancel() {
				if (this.#handle !== null) {
					if (this.#repeating) clearInterval(this.#handle);
					else clearTimeout(this.#handle);
					this.#handle = null;
				}
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/binding/Debouncer.js
var _a$1, EVENT_PHASE_LEADING, EVENT_PHASE_INTERMEDIATE, EVENT_PHASE_TRAILING, Debouncer;
function init_Debouncer() {
	return (init_Debouncer = __esmMin((() => {
		init_JsonConstants();
		init_MapProperty();
		init_Timer();
		EVENT_PHASE_LEADING = JsonConstants.EVENT_PHASE_LEADING;
		EVENT_PHASE_INTERMEDIATE = JsonConstants.EVENT_PHASE_INTERMEDIATE;
		EVENT_PHASE_TRAILING = JsonConstants.EVENT_PHASE_TRAILING;
		Debouncer = class {
			static #debouncers = /* @__PURE__ */ new Map();
			#timeout;
			#element;
			#identifier;
			#idleTimer = null;
			#intermediateTimer = null;
			#bufferedSendCommand = null;
			#bufferedCommands = null;
			#previousBufferedNonExecutedCommands = null;
			#potentialTrailingWithBothTrailingAndIntermediate = null;
			#potentialTrailingWithBothTrailingAndIntermediateBufferedCommands = null;
			constructor(element, identifier, timeout) {
				this.#element = element;
				this.#identifier = identifier;
				this.#timeout = timeout;
			}
			/**
			* Informs this debouncer that an event has occurred.
			*
			* @param phases - a set of strings identifying the phases for which the
			*            triggered event should be considered.
			* @param command - a consumer that will may be asynchronously invoked with a
			*            phase code if an associated phase is triggered
			* @param commands - individual commands executed just before the given send
			*            command
			*
			* @returns `true` if the event should be processed as-is without
			*         delaying
			*/
			trigger(phases, command, commands) {
				const triggerImmediately = phases.has(EVENT_PHASE_LEADING) && this.#idleTimer === null && this.#intermediateTimer === null;
				if (!triggerImmediately && (phases.has(EVENT_PHASE_TRAILING) || phases.has(EVENT_PHASE_INTERMEDIATE))) {
					this.#bufferedSendCommand = command;
					this.#bufferedCommands = commands;
					if (!phases.has(EVENT_PHASE_INTERMEDIATE) && (this.#idleTimer === null || this.#previousBufferedNonExecutedCommands === null)) this.#previousBufferedNonExecutedCommands = commands;
					this.#potentialTrailingWithBothTrailingAndIntermediate = null;
					this.#potentialTrailingWithBothTrailingAndIntermediateBufferedCommands = null;
				}
				if (phases.has(EVENT_PHASE_LEADING) || phases.has(EVENT_PHASE_TRAILING)) {
					if (this.#idleTimer === null) this.#idleTimer = new Timer(() => {
						if (this.#bufferedSendCommand !== null) {
							_a$1.#runCommands(EVENT_PHASE_TRAILING, this.#bufferedSendCommand, this.#bufferedCommands, this.#previousBufferedNonExecutedCommands);
							this.#bufferedSendCommand = null;
							this.#bufferedCommands = null;
							this.#previousBufferedNonExecutedCommands = null;
						} else if (this.#potentialTrailingWithBothTrailingAndIntermediate !== null) _a$1.#runCommands(EVENT_PHASE_TRAILING, this.#potentialTrailingWithBothTrailingAndIntermediate, this.#potentialTrailingWithBothTrailingAndIntermediateBufferedCommands, null);
						this.#unregister();
					});
					this.#idleTimer.cancel();
					this.#idleTimer.schedule(Math.trunc(this.#timeout));
				}
				if (this.#intermediateTimer === null && phases.has(EVENT_PHASE_INTERMEDIATE)) {
					this.#intermediateTimer = new Timer(() => {
						if (this.#bufferedSendCommand !== null) {
							_a$1.#runCommands(EVENT_PHASE_INTERMEDIATE, this.#bufferedSendCommand, this.#bufferedCommands, null);
							if (phases.has(EVENT_PHASE_TRAILING)) {
								this.#potentialTrailingWithBothTrailingAndIntermediate = this.#bufferedSendCommand;
								this.#potentialTrailingWithBothTrailingAndIntermediateBufferedCommands = this.#bufferedCommands;
							}
							this.#bufferedSendCommand = null;
							this.#bufferedCommands = null;
						} else this.#unregister();
					});
					this.#intermediateTimer.scheduleRepeating(Math.trunc(this.#timeout));
				}
				return triggerImmediately;
			}
			static #runCommands(phase, sendCommand, commands, previousCommands) {
				if (phase === EVENT_PHASE_TRAILING) commands.forEach((command, property) => {
					if (command === MapProperty.NO_OP && _a$1.#hasPreviousCommand(previousCommands, property)) previousCommands.get(property)();
					else command();
				});
				else commands.forEach((command) => command());
				sendCommand(phase);
			}
			static #hasPreviousCommand(previousCommands, property) {
				return previousCommands !== null && previousCommands.has(property);
			}
			#unregister() {
				if (this.#intermediateTimer !== null) {
					this.#intermediateTimer.cancel();
					this.#intermediateTimer = null;
				}
				if (this.#idleTimer !== null) {
					this.#idleTimer.cancel();
					this.#idleTimer = null;
				}
				const elementMap = _a$1.#debouncers.get(this.#element);
				if (elementMap === void 0) return;
				const identifierMap = elementMap.get(this.#identifier);
				if (identifierMap === void 0) return;
				identifierMap.delete(this.#timeout);
				if (identifierMap.size === 0) {
					elementMap.delete(this.#identifier);
					if (elementMap.size === 0) _a$1.#debouncers.delete(this.#element);
				}
			}
			/**
			* Gets an existing debouncer or creates a new one associated with the given
			* DOM node, identifier and debounce timeout.
			*
			* @param element - the DOM node to which this debouncer is bound
			* @param identifier - a unique identifier string in the scope of the provided
			*            element
			* @param debounce - the debounce timeout
			* @returns a debouncer instance
			*/
			static getOrCreate(element, identifier, debounce) {
				let elementMap = _a$1.#debouncers.get(element);
				if (elementMap === void 0) {
					elementMap = /* @__PURE__ */ new Map();
					_a$1.#debouncers.set(element, elementMap);
				}
				let identifierMap = elementMap.get(identifier);
				if (identifierMap === void 0) {
					identifierMap = /* @__PURE__ */ new Map();
					elementMap.set(identifier, identifierMap);
				}
				let debouncer = identifierMap.get(debounce);
				if (debouncer === void 0) {
					debouncer = new _a$1(element, identifier, debounce);
					identifierMap.set(debounce, debouncer);
				}
				return debouncer;
			}
			/**
			* Flushes all pending changes.
			*
			* After command execution, Debouncer idle timers are rescheduled.
			*
			* @returns the list command executed during flush operation.
			*/
			static flushAll() {
				const executedCommands = [];
				_a$1.#debouncers.forEach((elementMap) => {
					elementMap.forEach((identifierMap) => {
						identifierMap.forEach((debouncer) => {
							if (debouncer.#idleTimer !== null) {
								if (debouncer.#bufferedSendCommand !== null) _a$1.#runCommands(EVENT_PHASE_TRAILING, debouncer.#bufferedSendCommand, debouncer.#bufferedCommands, null);
							} else if (debouncer.#bufferedSendCommand !== null) {
								_a$1.#runCommands(EVENT_PHASE_INTERMEDIATE, debouncer.#bufferedSendCommand, debouncer.#bufferedCommands, null);
								debouncer.#intermediateTimer.scheduleRepeating(Math.trunc(debouncer.#timeout));
							}
							if (debouncer.#bufferedSendCommand !== null) {
								executedCommands.push(debouncer.#bufferedSendCommand);
								debouncer.#bufferedSendCommand = null;
								debouncer.#bufferedCommands = null;
								debouncer.#previousBufferedNonExecutedCommands = null;
							}
						});
					});
				});
				return executedCommands;
			}
		};
		_a$1 = Debouncer;
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/binding/ServerEventObject.js
/**
* Installs the non-enumerable promise-callback function on the $server object.
* The server calls it (by the promiseCallbackName key) to settle a pending
* promise created by a returnPromise method, identified by promiseId.
*/
function initPromiseHandler(serverObject) {
	const promiseCallbackName = PROMISE_CALLBACK_NAME;
	Object.defineProperty(serverObject, promiseCallbackName, { value: function(promiseId, success, value) {
		const promise = serverObject[promiseCallbackName].promises[promiseId];
		if (promise !== void 0) {
			delete serverObject[promiseCallbackName].promises[promiseId];
			if (success) promise[0](value);
			else promise[1](Error("Something went wrong. Check server-side logs for more information."));
		}
	} });
	serverObject[promiseCallbackName].promises = [];
}
/**
* Defines a method with the given name to be a callback to the server for the
* given state node.
*
* Note! If the Polymer.Element contains an implementation for `methodName` it
* will be run before the server-side method.
*
* @param serverObject - the $server object the method is defined on
* @param methodName - the name of the method to add
* @param node - the node to use as an identifier when sending an event to the
*            server
* @param returnPromise - `true` if the handler should return a promise that
*            will reflect the server-side result; `false` to not return any
*            value
*/
function defineMethod(serverObject, methodName, node, returnPromise) {
	serverObject[methodName] = function(eventParameter) {
		const prototype = Object.getPrototypeOf(this);
		if (prototype[methodName] !== void 0) prototype[methodName].apply(this, arguments);
		const event = eventParameter || window.event;
		const tree = node.getTree();
		let args = getEventData(this, event, methodName, node);
		if (args === null) args = Array.prototype.slice.call(arguments);
		let returnValue;
		let promiseId = -1;
		if (returnPromise) {
			const promises = this[PROMISE_CALLBACK_NAME].promises;
			promiseId = promises.length;
			returnValue = new Promise(function(resolve, reject) {
				promises[promiseId] = [resolve, reject];
			});
		}
		tree.sendTemplateEventToServer(node, methodName, args, promiseId);
		return returnValue;
	};
}
/**
* Collect extra data for element event if any has been sent from the server.
* Note! Data is sent in the array in the same order as defined on the server
* side.
*
* @param serverObject - the $server object the method is defined on
* @param event - The fired Event
* @param methodName - Method name that is called
* @param node - Target node
* @returns Array of extra event data
*/
function getEventData(serverObject, event, methodName, node) {
	const listeners = node.getMap(NodeFeatures.POLYMER_EVENT_LISTENERS);
	if (listeners.hasPropertyValue(methodName)) {
		const dataArray = [];
		const constantPool = node.getTree().getRegistry().getConstantPool();
		const expressionConstantKey = listeners.getProperty(methodName).getValue();
		const dataExpressions = constantPool.get(expressionConstantKey);
		for (let i = 0; i < dataExpressions.length; i++) dataArray[i] = getExpressionValue(serverObject, event, node, dataExpressions[i]);
		return dataArray;
	}
	return null;
}
function getExpressionValue(serverObject, event, node, expression) {
	if (serverExpectsNodeId(expression)) return resolvePolymerPropertyObject(serverObject, event, node, expression);
	return getOrCreateExpression$1(expression)(event, serverObject);
}
function serverExpectsNodeId(expression) {
	return !expression.startsWith(EVENT_PREFIX) || expression === "event.model.item";
}
function resolvePolymerPropertyObject(serverObject, event, node, expression) {
	if (expression.startsWith(EVENT_PREFIX)) return createPolymerPropertyObject(serverObject, event, expression);
	return getPolymerPropertyObject(node.getDomNode(), expression);
}
function createPolymerPropertyObject(serverObject, event, expression) {
	const expressionValue = getOrCreateExpression$1(expression)(event, serverObject);
	return { nodeId: Number(expressionValue[NODE_ID]) };
}
/**
* Reads the Polymer model value at the given path from the node and, when it is
* a model object carrying a nodeId, returns a `{ nodeId }` wrapper; otherwise
* null.
*/
function getPolymerPropertyObject(node, propertyName) {
	const polymerNode = node;
	if (typeof polymerNode.get === "function") {
		const polymerProperty = polymerNode.get(propertyName);
		if (typeof polymerProperty === "object" && polymerProperty !== null && typeof polymerProperty.nodeId !== "undefined") return { nodeId: polymerProperty.nodeId };
	}
	return null;
}
/**
* Removes a method with the given name.
*
* @param serverObject - the $server object the method is defined on
* @param methodName - the name of the method to remove
*/
function removeMethod(serverObject, methodName) {
	delete serverObject[methodName];
}
/**
* Gets or creates `element.$server` for the given element.
*
* @param element - the element to use
* @returns a reference to the `$server` object in the element
*/
function get(element) {
	let serverObject = getIfPresent(element);
	if (serverObject === null) {
		serverObject = {};
		initPromiseHandler(serverObject);
		setJsProperty(element, "$server", serverObject);
	}
	return serverObject;
}
/**
* Gets or creates `element.$server` for the given element, if present.
*
* @param node - the element to use
* @returns a reference to the `$server` object in the element, or `null` if
*         note present.
*/
function getIfPresent(node) {
	const serverObject = getJsProperty(node, "$server");
	return serverObject === void 0 ? null : serverObject;
}
/**
* Parses an event-data expression into a function `(event, element) => value`,
* caching the result per expression string; mirrors getOrCreateExpression. The
* `element` parameter receives the $server object, matching the Java contract.
*
* Java declares this `protected static`, which would map to an `export`. It is
* kept module-local because its return type mirrors the Java-`private`
* `ServerEventDataExpression` interface, and with `declaration` emit enabled an
* exported function cannot reference a non-exported type; exporting the function
* would force exposing that private type.
*/
function getOrCreateExpression$1(expressionString) {
	let expression = expressionCache$1.get(expressionString);
	if (expression === void 0) {
		expression = new Function(EVENT_PREFIX, "element", `return (${expressionString})`);
		expressionCache$1.set(expressionString, expression);
	}
	return expression;
}
/**
* Reject all promises pending on this server object. Called during client
* resynchronization to free consumers of promises that are never delivered by
* the server.
*
* @param serverObject - the $server object the method is defined on
*/
function rejectPromises(serverObject) {
	const promises = serverObject[PROMISE_CALLBACK_NAME].promises;
	if (promises !== void 0) promises.forEach(function(item) {
		item[1](Error("Client is resynchronizing"));
	});
}
var NODE_ID, EVENT_PREFIX, PROMISE_CALLBACK_NAME, expressionCache$1;
function init_ServerEventObject() {
	return (init_ServerEventObject = __esmMin((() => {
		init_JsonConstants();
		init_NodeFeatures();
		NODE_ID = "nodeId";
		EVENT_PREFIX = "event";
		PROMISE_CALLBACK_NAME = JsonConstants.RPC_PROMISE_CALLBACK_NAME;
		expressionCache$1 = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/binding/ServerEventHandlerBinder.js
function bindServerEventHandlerNames(elementOrProvider, node, featureId = NodeFeatures.CLIENT_DELEGATE_HANDLERS, returnValue = true) {
	const objectProvider = typeof elementOrProvider === "function" ? elementOrProvider : () => get(elementOrProvider);
	const serverEventHandlerNamesList = node.getList(featureId);
	if (serverEventHandlerNamesList.length() > 0) {
		const object = objectProvider();
		for (let i = 0; i < serverEventHandlerNamesList.length(); i++) defineMethod(object, serverEventHandlerNamesList.get(i), node, returnValue);
	}
	return serverEventHandlerNamesList.addSpliceListener((e) => {
		const serverObject = objectProvider();
		const remove = e.getRemove();
		for (const name of remove) removeMethod(serverObject, name);
		const add = e.getAdd();
		for (const name of add) defineMethod(serverObject, name, node, returnValue);
	});
}
function init_ServerEventHandlerBinder() {
	return (init_ServerEventHandlerBinder = __esmMin((() => {
		init_NodeFeatures();
		init_ServerEventObject();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/binding/SimpleElementBindingStrategy.js
function readElementData(node, property) {
	return node.getMap(NodeFeatures.ELEMENT_DATA).getProperty(property).getValue();
}
/** The element namespace for the state node, if any; mirrors getNamespace. */
function getNamespace(node) {
	return readElementData(node, NodeProperties.NAMESPACE) ?? null;
}
/**
* The element tag for the state node.
*
* Java has a single implementation, PolymerUtils.getTag, which this strategy
* calls; delegate to the ported one rather than reading ELEMENT_DATA again.
*/
function getTag(node) {
	return getTag$1(node) ?? null;
}
/**
* Creates the DOM element for the state node, using the node's namespace, then
* the parent element's namespace, then no namespace. Mirrors create.
*/
function create(node) {
	const tag = getTag(node);
	assert(tag !== null, "New child must have a tag");
	const namespace = getNamespace(node);
	if (namespace !== null) return document.createElementNS(namespace, tag);
	const parent = node.getParent();
	if (parent !== null) {
		const namespaceURI = parent.getDomNode().namespaceURI ?? null;
		if (namespaceURI !== null) return document.createElementNS(namespaceURI, tag);
	}
	return document.createElement(tag);
}
/** Whether this strategy applies to the state node; mirrors isApplicable. */
function isApplicable(node) {
	if (node.hasFeature(NodeFeatures.ELEMENT_DATA)) return true;
	const tree = node.getTree();
	return tree !== null && node === tree.getRootNode();
}
function scheduleDeferred(command) {
	setTimeout(command, 0);
}
/**
* Schedules the deferred initial property update: stores an InitialPropertyUpdate
* on the node and, after the initial reactive flush, runs it (unless
* handlePropertiesChanged already cleared it). Mirrors scheduleInitialExecution.
*/
function scheduleInitialExecution(stateNode) {
	const update = new InitialPropertyUpdate(stateNode);
	stateNode.setNodeData(update);
	Reactive.addPostFlushListener(() => scheduleDeferred(() => {
		stateNode.getNodeData(InitialPropertyUpdate)?.execute();
	}));
}
/**
* Syncs a dom-repeat list-item property change to the server. The tree (a
* singleton) is passed explicitly because this runs from a replaced prototype
* method without the binding closure's context. Mirrors
* handleListItemPropertyChange.
*/
function handleListItemPropertyChange(nodeId, host, property, value, tree) {
	const node = tree.getNode(Math.trunc(nodeId));
	if (!node.hasFeature(NodeFeatures.ELEMENT_PROPERTIES)) return;
	assert(checkParent(node, host), "Host element is not a parent of the node whose property has changed. This is an implementation error. Most likely it means that there are several StateTrees on the same page (might be possible with portlets) and the target StateTree should not be passed into the method as an argument but somehow detected from the host element. Another option is that host element is calculated incorrectly.");
	node.getMap(NodeFeatures.ELEMENT_PROPERTIES).getProperty(property).syncToServer(value);
}
/**
* Whether supposedParent is an ancestor of the node, walking the state-node
* parents; mirrors checkParent.
*/
function checkParent(node, supposedParent) {
	let parent = node;
	for (;;) {
		parent = parent.getParent();
		if (parent === null) return false;
		if (supposedParent.isSameNode(parent.getDomNode())) return true;
	}
}
/**
* Handles the set of changed property paths from a Polymer element, running the
* updates now or deferring them until the initial update if one is pending.
* Mirrors handlePropertiesChanged.
*/
function handlePropertiesChanged(changedPropertyPathsToValues, node) {
	const keys = getKeys(changedPropertyPathsToValues);
	const runnable = () => {
		for (const propertyName of keys) handlePropertyChange(propertyName, () => getJsProperty(changedPropertyPathsToValues, propertyName), node);
	};
	const initialUpdate = node.getNodeData(InitialPropertyUpdate);
	if (initialUpdate === null) runnable();
	else initialUpdate.setCommand(runnable);
}
/**
* Handles a single changed property path, sending the update to the server only
* if the property is in the node's updatable-properties "security feature" and
* isn't a model/list node. Mirrors handlePropertyChange.
*/
function handlePropertyChange(fullPropertyName, valueProvider, node) {
	const updatableProperties = node.getNodeData(UpdatableModelProperties);
	if (updatableProperties === null || !updatableProperties.isUpdatableProperty(fullPropertyName)) return;
	const subProperties = fullPropertyName.split(".");
	let model = node;
	let mapProperty = null;
	const size = subProperties.length;
	let i = 0;
	for (const subProperty of subProperties) {
		const elementProperties = model.getMap(NodeFeatures.ELEMENT_PROPERTIES);
		if (!elementProperties.hasPropertyValue(subProperty) && i < size - 1) {
			Console.debug(`Ignoring property change for property '${fullPropertyName}' which isn't defined from server`);
			return;
		}
		mapProperty = elementProperties.getProperty(subProperty);
		if (mapProperty.getValue() instanceof StateNode) model = mapProperty.getValue();
		i++;
	}
	if (mapProperty.getValue() instanceof StateNode) {
		const nodeValue = mapProperty.getValue();
		if (valueProvider().nodeId === void 0 || nodeValue.hasFeature(NodeFeatures.TEMPLATE_MODELLIST)) return;
	}
	mapProperty.syncToServer(valueProvider());
}
/**
* Binds the element's shadow root: attaches it now and re-attaches whenever the
* SHADOW_ROOT_DATA feature gains the shadow-root node. Mirrors bindShadowRoot.
*/
function bindShadowRoot(context) {
	assert(context.htmlNode instanceof Element, "Cannot bind shadow root to a Node");
	const map = context.node.getMap(NodeFeatures.SHADOW_ROOT_DATA);
	attachShadow(context);
	return map.addPropertyAddListener(() => Reactive.addFlushListener(() => attachShadow(context)));
}
function attachShadow(context) {
	const shadowRootNode = context.node.getMap(NodeFeatures.SHADOW_ROOT_DATA).getProperty(NodeProperties.SHADOW_ROOT).getValue();
	if (shadowRootNode !== null) {
		const element = context.htmlNode;
		const shadowRoot = element.shadowRoot ?? element.attachShadow({ mode: "open" });
		if (shadowRootNode.getDomNode() === null) shadowRootNode.setDomNode(shadowRoot);
		bindChildren(new BindingContext(shadowRootNode, shadowRoot, context.binderContext));
	}
}
/**
* Creates a fresh per-feature computation map and tracks it in the collection
* (used to stop the computations on rebind). Mirrors createComputations.
*/
function createComputations(computationsCollection) {
	const computations = /* @__PURE__ */ new Map();
	computationsCollection.push(computations);
	return computations;
}
/** Whether the element's tag matches the node's required tag; mirrors hasSameTag. */
function hasSameTag(node, element) {
	const nsTag = getTag(node);
	return nsTag === null || element.tagName.toLowerCase() === nsTag.toLowerCase();
}
/**
* Binds every property of the node's feature map to the user, applying current
* properties eagerly and observing later additions. Mirrors bindMap.
*/
function bindMap(featureId, user, bindings, node) {
	const map = node.getMap(featureId);
	map.forEachProperty((property) => bindProperty(user, property, bindings).recompute());
	return map.addPropertyAddListener((event) => bindProperty(user, event.getProperty(), bindings));
}
/**
* Binds the node's visibility: records the current bound state, applies it, and
* re-applies whenever the VISIBLE property changes. Mirrors bindVisibility.
*/
function bindVisibility(listeners, context, computationsCollection, nodeFactory) {
	assert(context.htmlNode instanceof Element, `The HTML node for the StateNode with id=${context.node.getId()} is not an Element`);
	const visibilityData = context.node.getMap(NodeFeatures.ELEMENT_DATA);
	visibilityData.getProperty(NodeProperties.VISIBILITY_BOUND_PROPERTY).setValue(isVisible(context.node));
	updateVisibility(listeners, context, computationsCollection, nodeFactory);
	return visibilityData.getProperty(NodeProperties.VISIBLE).addChangeListener(() => updateVisibility(listeners, context, computationsCollection, nodeFactory));
}
/** Whether the node is visible; mirrors isVisible. */
function isVisible(node) {
	return node.getTree().isVisible(node);
}
function updateVisibility(listeners, context, computationsCollection, nodeFactory) {
	assert(context.htmlNode instanceof Element, `The HTML node for the StateNode with id=${context.node.getId()} is not an Element`);
	const element = context.htmlNode;
	const node = context.node;
	const visibilityData = node.getMap(NodeFeatures.ELEMENT_DATA);
	if (needsRebind(node) && isVisible(node)) {
		remove(listeners, context, computationsCollection);
		Reactive.addFlushListener(() => {
			restoreInitialHiddenAttribute(element, visibilityData);
			doBind(node, nodeFactory);
		});
	} else if (isVisible(node)) {
		visibilityData.getProperty(NodeProperties.VISIBILITY_BOUND_PROPERTY).setValue(true);
		restoreInitialHiddenAttribute(element, visibilityData);
	} else setElementInvisible(element, visibilityData);
}
/**
* Hides the element: stores its initial state, sets `hidden`, and (in a shadow
* root) sets display:none. Mirrors setElementInvisible.
*/
function setElementInvisible(element, visibilityData) {
	storeInitialHiddenAttribute(element, visibilityData);
	updateAttributeValue(visibilityData.getNode().getTree().getRegistry().getApplicationConfiguration(), element, HIDDEN_ATTRIBUTE, true);
	if (isInShadowRoot(element)) element.style.display = "none";
}
/**
* Applies structural attributes (like "slot") to the element even when it is
* initially invisible. This preserves CSS selectors that depend on these
* attributes without exposing backend data.
*/
function applyStructuralAttributes(stateNode, element) {
	if (stateNode.hasFeature(NodeFeatures.ELEMENT_ATTRIBUTES)) {
		const attributeMap = stateNode.getMap(NodeFeatures.ELEMENT_ATTRIBUTES);
		if (attributeMap.hasPropertyValue(NodeProperties.SLOT_ATTRIBUTE)) updateAttribute(attributeMap.getProperty(NodeProperties.SLOT_ATTRIBUTE), element);
	}
}
/**
* Restores the element's captured initial hidden attribute and inline display.
* Mirrors restoreInitialHiddenAttribute.
*/
function restoreInitialHiddenAttribute(element, visibilityData) {
	storeInitialHiddenAttribute(element, visibilityData);
	const initialVisibility = visibilityData.getProperty(NodeProperties.VISIBILITY_HIDDEN_PROPERTY);
	if (initialVisibility.hasValue()) updateAttributeValue(visibilityData.getNode().getTree().getRegistry().getApplicationConfiguration(), element, HIDDEN_ATTRIBUTE, initialVisibility.getValue());
	const initialDisplay = visibilityData.getProperty(NodeProperties.VISIBILITY_STYLE_DISPLAY_PROPERTY);
	if (initialDisplay.hasValue()) {
		const initialValue = String(initialDisplay.getValue());
		element.style.display = initialValue;
	}
}
/**
* Captures the element's initial `hidden` attribute and (in a shadow root) its
* inline display into the visibility data, once. Mirrors
* storeInitialHiddenAttribute.
*/
function storeInitialHiddenAttribute(element, visibilityData) {
	const initialVisibility = visibilityData.getProperty(NodeProperties.VISIBILITY_HIDDEN_PROPERTY);
	if (!initialVisibility.hasValue()) initialVisibility.setValue(element.getAttribute(HIDDEN_ATTRIBUTE));
	const initialDisplay = visibilityData.getProperty(NodeProperties.VISIBILITY_STYLE_DISPLAY_PROPERTY);
	const style = element.style;
	if (isInShadowRoot(element) && !initialDisplay.hasValue() && style !== void 0) initialDisplay.setValue(style.display);
}
/**
* Re-binds a node by clearing and re-setting its DOM node (which re-fires the
* dom-node-set event so initialization logic can run) and rebinding it. Mirrors
* doBind.
*/
function doBind(node, nodeFactory) {
	const domNode = node.getDomNode();
	node.setDomNode(null);
	node.setDomNode(domNode);
	nodeFactory.createAndBind(node);
}
/**
* Checks whether the `node` needs re-bind.
*
* The node needs re-bind if it was initially invisible. As a consequence such
* node has not be bound. It has been bound in respect to visibility feature only
* (partially bound). Such node needs re-bind once it becomes visible.
*
* @param node - the node to check
* @returns `true` if the node is not entirely bound and needs re-bind later on
*/
function needsRebind(node) {
	return readElementData(node, NodeProperties.VISIBILITY_BOUND_PROPERTY) === false;
}
/**
* Binds a single map property: re-runs the user whenever the property's
* dependencies change, tracking the computation by property name. Mirrors
* bindProperty.
*/
function bindProperty(user, property, bindings) {
	const name = property.getName();
	assert(!bindings.has(name), `There's already a binding for ${name}`);
	const computation = Reactive.runWhenDependenciesChange(() => user(property));
	bindings.set(name, computation);
	return computation;
}
/**
* Updates the element's JS property from the map property, or removes/clears it
* when the property has no value. Mirrors updateProperty.
*/
function updateProperty(mapProperty, element) {
	const name = mapProperty.getName();
	const elementObject = element;
	if (mapProperty.hasValue()) {
		const treeValue = mapProperty.getValue();
		const domValue = getJsProperty(elementObject, name);
		const previousDomValue = mapProperty.getPreviousDomValue();
		if ((previousDomValue === void 0 ? true : !equalsInJS(treeValue, previousDomValue)) && (isUndefined(domValue) || !equalsInJS(domValue, treeValue))) Reactive.runWithComputation(null, () => setJsProperty(elementObject, name, createModelTree(treeValue)));
	} else if (hasOwnJsProperty(element, name)) deleteJsProperty(elementObject, name);
	else setJsProperty(elementObject, name, null);
	mapProperty.clearPreviousDomValue();
}
/**
* Updates a single inline style property of the element from a map property,
* preserving an `!important` priority, or removes it when the property has no
* value. Mirrors updateStyleProperty.
*/
function updateStyleProperty(mapProperty, element) {
	const name = mapProperty.getName();
	const styleElement = element.style;
	if (mapProperty.hasValue()) {
		const value = mapProperty.getValue();
		let styleIsSet = false;
		if (value.includes("!important")) {
			const temp = document.createElement(element.tagName);
			const tmpStyle = temp.style;
			tmpStyle.cssText = `${name}: ${value};`;
			const priority = "important";
			if (priority === temp.style.getPropertyPriority(name)) {
				styleElement.setProperty(name, temp.style.getPropertyValue(name), priority);
				styleIsSet = true;
			}
		}
		if (!styleIsSet) styleElement.setProperty(name, value);
	} else styleElement.removeProperty(name);
}
/**
* Updates the named element attribute from a map property, resolving the
* application configuration from the property's node. Mirrors updateAttribute.
*/
function updateAttribute(mapProperty, element) {
	updateAttributeValue(mapProperty.getMap().getNode().getTree().getRegistry().getApplicationConfiguration(), element, mapProperty.getName(), mapProperty.getValue());
}
/**
* Binds the node's children to the element, adopting existing elements where the
* server requested attaching to one and appending the rest. Mirrors bindChildren.
*/
function bindChildren(context) {
	const children = context.node.getList(NodeFeatures.ELEMENT_CHILDREN);
	if (children.hasBeenCleared()) removeAllChildren(context.htmlNode);
	for (let i = 0; i < children.length(); i++) {
		const childNode = children.get(i);
		const existingElementMap = childNode.getTree().getRegistry().getExistingElementMap();
		const child = existingElementMap.getElement(childNode.getId());
		if (child !== null) {
			existingElementMap.remove(childNode.getId());
			childNode.setDomNode(child);
			createAndBindChild(context, childNode);
		} else context.htmlNode.appendChild(createAndBindChild(context, childNode));
	}
	return children.addSpliceListener((e) => {
		Reactive.addFlushListener(() => handleChildrenSplice(e, context));
	});
}
function createAndBindChild(context, childNode) {
	return context.binderContext.createAndBind(childNode);
}
/**
* Binds the node's virtual children, appending current ones and observing
* additions. Mirrors bindVirtualChildren.
*/
function bindVirtualChildren(context) {
	const children = context.node.getList(NodeFeatures.VIRTUAL_CHILDREN);
	for (let i = 0; i < children.length(); i++) appendVirtualChild(context, children.get(i), true);
	return children.addSpliceListener((e) => {
		Reactive.addFlushListener(() => {
			for (const added of e.getAdd()) appendVirtualChild(context, added, true);
		});
	});
}
function appendVirtualChild(context, node, reactivePhase) {
	const object = getPayload(node);
	const type = object[NodeProperties.TYPE];
	if (type === NodeProperties.IN_MEMORY_CHILD) {
		context.binderContext.createAndBind(node);
		return;
	}
	assert(context.htmlNode instanceof Element, "Unexpected html node. The node is supposed to be a custom element");
	const element = context.htmlNode;
	if (type === NodeProperties.INJECT_BY_ID) {
		if (isLitElement(element)) {
			whenRendered(element, () => handleInjectId(context, node, object, false));
			return;
		} else if (!isReady(element)) {
			addReadyListener(element, () => handleInjectId(context, node, object, false));
			return;
		}
		handleInjectId(context, node, object, reactivePhase);
	} else if (type === NodeProperties.TEMPLATE_IN_TEMPLATE) {
		if (getDomRoot(element) === null) {
			addReadyListener(element, () => handleTemplateInTemplate(context, node, object, false));
			return;
		}
		handleTemplateInTemplate(context, node, object, reactivePhase);
	} else if (type === NodeProperties.INJECT_BY_NAME) {
		const name = object[NodeProperties.PAYLOAD];
		const address = `name='${name}'`;
		const elementLookup = () => getElementByName(element, name);
		if (!isInitialized(elementLookup)) {
			addReadyCallback(element, name, () => doAppendVirtualChild(context, node, false, elementLookup, name, address));
			return;
		}
		doAppendVirtualChild(context, node, reactivePhase, elementLookup, name, address);
	} else assert(false, `Unexpected payload type ${type}`);
}
function doAppendVirtualChild(context, node, reactivePhase, elementLookup, id, address) {
	if (!verifyAttachRequest(context.node, node, id, address)) return;
	const element = elementLookup();
	if (verifyAttachedElement(element, node, id, address, context)) {
		if (!reactivePhase) {
			const initialPropertiesHandler = node.getTree().getRegistry().getInitialPropertiesHandler();
			initialPropertiesHandler.nodeRegistered(node);
			initialPropertiesHandler.flushPropertyUpdates();
		}
		node.setDomNode(element);
		context.binderContext.createAndBind(node);
	}
	if (!reactivePhase) Reactive.flush();
}
function handleTemplateInTemplate(context, node, object, reactivePhase) {
	const path = object[NodeProperties.PAYLOAD];
	const address = `path='${JSON.stringify(path)}'`;
	const elementLookup = () => getCustomElement(getDomRoot(context.htmlNode), path);
	doAppendVirtualChild(context, node, reactivePhase, elementLookup, null, address);
}
function handleInjectId(context, node, object, reactivePhase) {
	const id = object[NodeProperties.PAYLOAD];
	const address = `id='${id}'`;
	const elementLookup = () => getElementById(context.htmlNode, id);
	doAppendVirtualChild(context, node, reactivePhase, elementLookup, id, address);
}
function verifyAttachedElement(element, attachNode, id, address, context) {
	const node = context.node;
	const tag = getTag(attachNode);
	let failure = false;
	if (element === null) {
		failure = true;
		Console.warn(`${ELEMENT_ATTACH_ERROR_PREFIX}${address} is not found. The requested tag name is '${tag}'`);
	} else if (!hasTag$1(element, tag)) {
		failure = true;
		Console.warn(`${ELEMENT_ATTACH_ERROR_PREFIX}${address} has the wrong tag name '${element.tagName}', the requested tag name is '${tag}'`);
	}
	if (failure) {
		node.getTree().sendExistingElementWithIdAttachToServer(node, attachNode.getId(), -1, id);
		return false;
	}
	if (!node.hasFeature(NodeFeatures.SHADOW_ROOT_DATA)) return true;
	const shadowRootNode = node.getMap(NodeFeatures.SHADOW_ROOT_DATA).getProperty(NodeProperties.SHADOW_ROOT).getValue();
	if (shadowRootNode === null) return true;
	const list = shadowRootNode.getList(NodeFeatures.ELEMENT_CHILDREN);
	let existingId = null;
	for (let i = 0; i < list.length(); i++) {
		const stateNode = list.get(i);
		if (stateNode.getDomNode().isSameNode(element)) {
			existingId = stateNode.getId();
			break;
		}
	}
	if (existingId !== null) {
		Console.warn(`${ELEMENT_ATTACH_ERROR_PREFIX}${address} has been already attached previously via the node id='${existingId}'`);
		node.getTree().sendExistingElementWithIdAttachToServer(node, attachNode.getId(), existingId, id);
		return false;
	}
	return true;
}
function verifyAttachRequest(parent, node, id, address) {
	const virtualChildren = parent.getList(NodeFeatures.VIRTUAL_CHILDREN);
	for (let i = 0; i < virtualChildren.length(); i++) {
		const child = virtualChildren.get(i);
		if (child === node) continue;
		if (JSON.stringify(getPayload(node)) === JSON.stringify(getPayload(child))) {
			Console.warn(`There is already a request to attach element addressed by the ${address}. The existing request's node id='${child.getId()}'. Cannot attach the same element twice.`);
			node.getTree().sendExistingElementWithIdAttachToServer(parent, node.getId(), child.getId(), id);
			return false;
		}
	}
	return true;
}
function getPayload(node) {
	return node.getMap(NodeFeatures.ELEMENT_DATA).getProperty(NodeProperties.PAYLOAD).getValue();
}
function handleChildrenSplice(event, context) {
	const htmlNode = context.htmlNode;
	if (event.isClear()) {
		if (context.node.getList(NodeFeatures.ELEMENT_CHILDREN).length() === 0) removeAllChildren(htmlNode);
		else removeAllChildrenAfterReplacement(context);
	} else for (const removed of event.getRemove()) {
		const child = removed.getDomNode();
		assert(child !== null, "Can't find element to remove");
		if (child.parentNode === htmlNode) htmlNode.removeChild(child);
	}
	const add = event.getAdd();
	if (add.length > 0) addChildren(event.getIndex(), context, add);
}
function removeAllChildren(htmlNode) {
	while (htmlNode.firstChild !== null) htmlNode.removeChild(htmlNode.firstChild);
}
/**
* Removes the children the node has right now, but only once the whole change
* set has been applied so that the nodes replacing them are already in place.
*
* @param context - the binding context of the node whose children are replaced
*/
function removeAllChildrenAfterReplacement(context) {
	const liveChildren = context.htmlNode.childNodes;
	const replacedChildren = [];
	for (let i = 0; i < liveChildren.length; i++) replacedChildren.push(liveChildren[i]);
	Reactive.addPostFlushListener(() => removeReplacedChildren(context, replacedChildren));
}
function removeReplacedChildren(context, replacedChildren) {
	const htmlNode = context.htmlNode;
	const keptChildren = getMappedDomNodes(context.node.getList(NodeFeatures.ELEMENT_CHILDREN));
	for (const child of replacedChildren) if (!keptChildren.has(child) && child.parentNode === htmlNode) htmlNode.removeChild(child);
}
function addChildren(index, context, add) {
	const nodeChildren = context.node.getList(NodeFeatures.ELEMENT_CHILDREN);
	let beforeRef;
	if (index === 0) beforeRef = getFirstNodeMappedAsStateNode(nodeChildren, context.htmlNode);
	else if (index <= nodeChildren.length() && index > 0) {
		const previousSibling = getPreviousSibling(index, context);
		beforeRef = previousSibling === null ? null : previousSibling.getDomNode().nextSibling;
	} else beforeRef = null;
	for (const newChildObject of add) {
		const newChild = newChildObject;
		const existingElementMap = newChild.getTree().getRegistry().getExistingElementMap();
		let childNode = existingElementMap.getElement(newChild.getId());
		if (childNode !== null) {
			existingElementMap.remove(newChild.getId());
			newChild.setDomNode(childNode);
			createAndBindChild(context, newChild);
		} else {
			childNode = createAndBindChild(context, newChild);
			context.htmlNode.insertBefore(childNode, beforeRef);
		}
		beforeRef = childNode.nextSibling;
	}
}
function getFirstNodeMappedAsStateNode(mappedNodeChildren, htmlNode) {
	const mappedDomNodes = getMappedDomNodes(mappedNodeChildren);
	const clientList = htmlNode.childNodes;
	for (let i = 0; i < clientList.length; i++) {
		const clientNode = clientList[i];
		if (mappedDomNodes.has(clientNode)) return clientNode;
	}
	return null;
}
/**
* Collects the DOM nodes of the given state nodes into a set, so that the nodes
* currently in the DOM can be matched against them without scanning the state
* node list for each of them.
*
* @param stateNodes - the state nodes to collect the DOM nodes of
* @returns the DOM nodes of the state nodes that have one
*/
function getMappedDomNodes(stateNodes) {
	const domNodes = /* @__PURE__ */ new Set();
	for (let i = 0; i < stateNodes.length(); i++) {
		const domNode = stateNodes.get(i).getDomNode();
		if (domNode !== null) domNodes.add(domNode);
	}
	return domNodes;
}
function getPreviousSibling(index, context) {
	const nodeChildren = context.node.getList(NodeFeatures.ELEMENT_CHILDREN);
	let count = 0;
	let node = null;
	for (let i = 0; i < nodeChildren.length(); i++) {
		if (count === index) return node;
		const child = nodeChildren.get(i);
		if (child.getDomNode() !== null) {
			node = child;
			count++;
		}
	}
	return node;
}
/**
* Removes all bindings.
*/
function remove(listeners, context, computationsCollection) {
	computationsCollection.forEach((collection) => collection.forEach((computation) => computation.stop()));
	context.listenerBindings.forEach((computation) => computation.stop());
	context.listenerRemovers.forEach((remover) => remover.remove());
	listeners.forEach((remover) => remover.remove());
	boundNodes.delete(context.node);
}
/**
* Binds the ELEMENT_LISTENERS feature to DOM event listeners, adding listeners
* for the current handlers and tracking later additions. Mirrors
* bindDomEventListeners.
*/
function bindDomEventListeners(context) {
	const elementListeners = getDomEventListenerMap(context.node);
	elementListeners.forEachProperty((property) => {
		bindEventHandlerProperty(property, context).recompute();
	});
	return elementListeners.addPropertyAddListener((event) => bindEventHandlerProperty(event.getProperty(), context));
}
function bindEventHandlerProperty(eventHandlerProperty, context) {
	const name = eventHandlerProperty.getName();
	assert(!context.listenerBindings.has(name), `There is already an event-handler binding for ${name}`);
	const computation = Reactive.runWhenDependenciesChange(() => {
		const hasValue = eventHandlerProperty.hasValue();
		if (hasValue !== context.listenerRemovers.has(name)) {
			if (hasValue) addEventHandler(name, context);
			else removeEventHandler(name, context);
		}
	});
	context.listenerBindings.set(name, computation);
	return computation;
}
function removeEventHandler(eventType, context) {
	const remover = context.listenerRemovers.get(eventType);
	context.listenerRemovers.delete(eventType);
	assert(remover !== void 0, "There must be a registered DOM event listener remover to remove");
	remover.remove();
}
function addEventHandler(eventType, context) {
	assert(!context.listenerRemovers.has(eventType), `There is already a DOM event listener for ${eventType}`);
	const handler = (event) => handleDomEvent(event, context);
	context.htmlNode.addEventListener(eventType, handler, false);
	context.listenerRemovers.set(eventType, { remove: () => context.htmlNode.removeEventListener(eventType, handler, false) });
}
function getDomEventListenerMap(node) {
	return node.getMap(NodeFeatures.ELEMENT_LISTENERS);
}
/**
* Handles a fired DOM event: collects the server-requested event data
* (expressions, synchronized properties, mapped state nodes), resolves the
* event filters/debounces, and sends the event to the server. Mirrors
* handleDomEvent.
*/
function handleDomEvent(event, context) {
	assert(context.htmlNode instanceof Element, "Cannot handle DOM event for a Node");
	const element = context.htmlNode;
	const node = context.node;
	const type = event.type;
	const listenerMap = getDomEventListenerMap(node);
	const constantPool = node.getTree().getRegistry().getConstantPool();
	const expressionConstantKey = listenerMap.getProperty(type).getValue();
	assert(expressionConstantKey !== null, "There must be an expression constant key for the event type");
	assert(constantPool.has(expressionConstantKey), "The constant pool must contain the expression constant key");
	const expressionSettings = constantPool.get(expressionConstantKey);
	const expressions = Object.keys(expressionSettings);
	const eventData = expressions.length === 0 ? null : {};
	const synchronizeProperties = /* @__PURE__ */ new Set();
	for (const expressionString of expressions) if (expressionString.startsWith(SYNCHRONIZE_PROPERTY_TOKEN)) synchronizeProperties.add(expressionString.substring(SYNCHRONIZE_PROPERTY_TOKEN.length));
	else if (expressionString === MAP_STATE_NODE_EVENT_DATA) eventData[MAP_STATE_NODE_EVENT_DATA] = getClosestStateNodeIdToEventTarget(node, event.target);
	else if (expressionString.startsWith(MAP_STATE_NODE_EVENT_DATA)) {
		const jsEvaluation = expressionString.substring(MAP_STATE_NODE_EVENT_DATA.length);
		const expressionValue = getOrCreateExpression(jsEvaluation)(event, element);
		eventData[expressionString] = getClosestStateNodeIdToDomNode(node.getTree(), expressionValue, jsEvaluation);
	} else eventData[expressionString] = getOrCreateExpression(expressionString)(event, element);
	synchronizeProperties.forEach((name) => {
		const property = node.getMap(NodeFeatures.ELEMENT_PROPERTIES).getProperty(name);
		const domValue = getJsProperty(element, name);
		property.setPreviousDomValue(domValue);
	});
	const commands = /* @__PURE__ */ new Map();
	synchronizeProperties.forEach((name) => commands.set(name, getSyncPropertyCommand(name, context)));
	const sendCommand = (debouncePhase) => sendEventToServer(node, type, eventData, debouncePhase);
	if (resolveFilters(element, type, expressionSettings, eventData, sendCommand, commands)) {
		let commandAlreadyExecuted = false;
		if (synchronizeProperties.size === 0) commandAlreadyExecuted = Debouncer.flushAll().includes(sendCommand);
		if (!commandAlreadyExecuted) {
			commands.forEach((command) => command());
			sendCommand(null);
		}
	}
}
function getSyncPropertyCommand(propertyName, context) {
	return context.node.getMap(NodeFeatures.ELEMENT_PROPERTIES).getProperty(propertyName).getSyncToServerCommand(getJsProperty(context.htmlNode, propertyName));
}
function sendEventToServer(node, type, eventData, debouncePhase) {
	let data = eventData;
	if (debouncePhase === null) {
		if (data !== null) delete data[EVENT_DATA_PHASE];
	} else {
		data ??= {};
		data[EVENT_DATA_PHASE] = debouncePhase;
	}
	node.getTree().sendEventToServer(node, type, data);
}
/**
* Resolves the event filters for an event type. Returns true if there are no
* filters or at least one filter matched (so the event should be sent). Mirrors
* resolveFilters.
*/
function resolveFilters(element, eventType, expressionSettings, eventData, sendCommand, commands) {
	let noFilters = true;
	let atLeastOneFilterMatched = false;
	for (const expression of Object.keys(expressionSettings)) {
		const settings = expressionSettings[expression];
		const hasDebounce = Array.isArray(settings);
		if (!hasDebounce && !settings) continue;
		noFilters = false;
		let filterMatched = eventData !== null && Boolean(eventData[expression]);
		if (hasDebounce && filterMatched) filterMatched = resolveDebounces(element, `on-${eventType}:${expression}`, settings, sendCommand, commands);
		atLeastOneFilterMatched = atLeastOneFilterMatched || filterMatched;
	}
	return noFilters || atLeastOneFilterMatched;
}
/**
* Resolves the debounce settings for one event filter. Each entry in
* debounceList is `[timeout, phase1, phase2, ...]`; a zero timeout is eager.
* Returns true if at least one debounce is eager (should be sent now). Mirrors
* resolveDebounces.
*/
function resolveDebounces(element, debouncerId, debounceList, sendCommand, commands) {
	let atLeastOneEager = false;
	for (const debounceSettings of debounceList) {
		const timeout = debounceSettings[0];
		if (timeout === 0) {
			atLeastOneEager = true;
			continue;
		}
		const phases = /* @__PURE__ */ new Set();
		for (let j = 1; j < debounceSettings.length; j++) phases.add(debounceSettings[j]);
		const eager = Debouncer.getOrCreate(element, debouncerId, timeout).trigger(phases, sendCommand, commands);
		atLeastOneEager = atLeastOneEager || eager;
	}
	return atLeastOneEager;
}
/**
* Binds the CLASS_LIST feature of the node to the element's class list,
* applying the current classes and keeping them in sync as the list is spliced.
* Mirrors bindClassList.
*/
function bindClassList(element, node) {
	const classNodeList = node.getList(NodeFeatures.CLASS_LIST);
	for (let i = 0; i < classNodeList.length(); i++) element.classList.add(classNodeList.get(i));
	return classNodeList.addSpliceListener((e) => {
		const classList = element.classList;
		e.getRemove().forEach((token) => classList.remove(token));
		e.getAdd().forEach((token) => classList.add(token));
	});
}
function bindPolymerEventHandlerNames(context) {
	return bindServerEventHandlerNames(() => context.htmlNode, context.node, NodeFeatures.POLYMER_SERVER_EVENT_HANDLERS, false);
}
function bindClientCallableMethods(context) {
	assert(context.htmlNode instanceof Element, "Cannot bind client delegate methods to a Node");
	return bindServerEventHandlerNames(context.htmlNode, context.node);
}
/**
* Sets an element attribute from a map-property value. A plain string (or null)
* is applied as-is; a "uri" model object is resolved against the application
* configuration (prefixing the service URL in web-component mode for relative
* URIs); anything else is stringified. Mirrors updateAttributeValue.
*/
function updateAttributeValue(configuration, element, attribute, value) {
	if (value === null || value === void 0 || typeof value === "string") updateAttribute$1(element, attribute, value ?? null);
	else if (typeof value === "object" && !Array.isArray(value)) {
		assert(NodeProperties.URI_ATTRIBUTE in value, `Implementation error: JsonObject is recieved as an attribute value for '${attribute}' but it has no ${NodeProperties.URI_ATTRIBUTE} key`);
		const uri = value[NodeProperties.URI_ATTRIBUTE];
		if (configuration.isWebComponentMode() && !isAbsoluteUrl(uri)) {
			let baseUri = configuration.getServiceUrl();
			baseUri = baseUri.endsWith("/") ? baseUri : `${baseUri}/`;
			updateAttribute$1(element, attribute, baseUri + uri);
		} else updateAttribute$1(element, attribute, uri);
	} else updateAttribute$1(element, attribute, Array.isArray(value) ? JSON.stringify(value) : String(value));
}
/**
* Parses an event-data expression into a function `(event, element) => value`,
* caching the result per expression string; mirrors getOrCreateExpression.
*/
function getOrCreateExpression(expressionString) {
	if (expressionCache === null) expressionCache = /* @__PURE__ */ new Map();
	let expression = expressionCache.get(expressionString);
	if (expression === void 0) {
		expression = new Function("event", "element", `return (${expressionString})`);
		expressionCache.set(expressionString, expression);
	}
	return expression;
}
/**
* Finds the id of the state node closest to the event target: a breadth-first
* search of the state-node tree for a direct DOM match, then a bottom-up DOM
* walk from the target's parent. Returns -1 if none is found. Mirrors
* getClosestStateNodeIdToEventTarget.
*/
function getClosestStateNodeIdToEventTarget(topNode, target) {
	if (target === null) return -1;
	try {
		const stack = [topNode];
		for (let i = 0; i < stack.length; i++) {
			const stateNode = stack[i];
			if (target.isSameNode(stateNode.getDomNode())) return stateNode.getId();
			stateNode.getList(NodeFeatures.ELEMENT_CHILDREN).forEach((child) => stack.push(child));
		}
		return getStateNodeForElement(stack, target.parentNode);
	} catch (e) {
		Console.debug(`An error occurred when Flow tried to find a state node matching the element ${String(target)}, which was the event.target. Error: ${e.message}`);
	}
	return -1;
}
/**
* Walks up the DOM from targetNode and returns the id of the first state node
* in searchStack whose DOM node matches, or -1. Mirrors getStateNodeForElement.
*/
function getStateNodeForElement(searchStack, targetNode) {
	let current = targetNode;
	while (current !== null) {
		for (let i = searchStack.length - 1; i > -1; i--) {
			const stateNode = searchStack[i];
			if (current.isSameNode(stateNode.getDomNode())) return stateNode.getId();
		}
		current = current.parentNode;
	}
	return -1;
}
/**
* Walks up the DOM from a node reference (e.g. returned by an event data
* expression) and returns the id of the first state node the tree maps it to,
* or -1. Mirrors getClosestStateNodeIdToDomNode.
*/
function getClosestStateNodeIdToDomNode(stateTree, domNodeReference, eventDataExpression) {
	if (domNodeReference === null || domNodeReference === void 0) return -1;
	try {
		let targetNode = domNodeReference;
		while (targetNode !== null) {
			const stateNodeForDomNode = stateTree.getStateNodeForDomNode(targetNode);
			if (stateNodeForDomNode !== null) return stateNodeForDomNode.getId();
			targetNode = targetNode.parentNode;
		}
	} catch (e) {
		Console.debug(`An error occurred when Flow tried to find a state node matching the element ${String(domNodeReference)}, returned by an event data expression ${eventDataExpression}. Error: ${e.message}`);
	}
	return -1;
}
var HIDDEN_ATTRIBUTE, ELEMENT_ATTACH_ERROR_PREFIX, EVENT_DATA_PHASE, SYNCHRONIZE_PROPERTY_TOKEN, MAP_STATE_NODE_EVENT_DATA, expressionCache, boundNodes, BindingContext, InitialPropertyUpdate, SimpleElementBindingStrategy;
function init_SimpleElementBindingStrategy() {
	return (init_SimpleElementBindingStrategy = __esmMin((() => {
		init_UpdatableModelProperties();
		init_JsonConstants();
		init_NodeFeatures();
		init_NodeProperties();
		init_PolymerModelTree();
		init_PolymerUtils();
		init_Reactive();
		init_PolymerModelBinding();
		init_StateNode();
		init_Debouncer();
		init_ServerEventHandlerBinder();
		init_Console();
		HIDDEN_ATTRIBUTE = "hidden";
		ELEMENT_ATTACH_ERROR_PREFIX = "Element addressed by the ";
		EVENT_DATA_PHASE = JsonConstants.EVENT_DATA_PHASE;
		SYNCHRONIZE_PROPERTY_TOKEN = JsonConstants.SYNCHRONIZE_PROPERTY_TOKEN;
		MAP_STATE_NODE_EVENT_DATA = JsonConstants.MAP_STATE_NODE_EVENT_DATA;
		expressionCache = null;
		boundNodes = /* @__PURE__ */ new WeakMap();
		BindingContext = class {
			htmlNode;
			node;
			binderContext;
			listenerBindings = /* @__PURE__ */ new Map();
			listenerRemovers = /* @__PURE__ */ new Map();
			constructor(node, htmlNode, binderContext) {
				this.node = node;
				this.htmlNode = htmlNode;
				this.binderContext = binderContext;
			}
		};
		InitialPropertyUpdate = class {
			#command = null;
			#node;
			constructor(node) {
				this.#node = node;
			}
			setCommand(command) {
				this.#command = command;
			}
			execute() {
				this.#command?.();
				this.#node.clearNodeData(this);
			}
		};
		SimpleElementBindingStrategy = class {
			create(node) {
				return create(node);
			}
			isApplicable(node) {
				return isApplicable(node);
			}
			getTag(node) {
				return getTag(node);
			}
			bind(stateNode, htmlNode, nodeFactory) {
				const visible = isVisible(stateNode);
				assert(hasSameTag(stateNode, htmlNode), `Element tag name is '${htmlNode.tagName}', but the required tag name is ${getTag(stateNode)}`);
				if (boundNodes.has(stateNode)) return;
				boundNodes.set(stateNode, true);
				const node = stateNode;
				const context = new BindingContext(node, htmlNode, nodeFactory);
				const computationsCollection = [];
				const listeners = [];
				if (visible) {
					listeners.push(bindClientCallableMethods(context));
					listeners.push(bindPolymerEventHandlerNames(context));
					listeners.push(bindDomEventListeners(context));
					listeners.push(bindVirtualChildren(context));
					listeners.push(bindChildren(context));
					listeners.push(bindShadowRoot(context));
					listeners.push(bindClassList(htmlNode, node));
					listeners.push(bindMap(NodeFeatures.ELEMENT_STYLE_PROPERTIES, (property) => updateStyleProperty(property, htmlNode), createComputations(computationsCollection), node));
					listeners.push(bindMap(NodeFeatures.ELEMENT_ATTRIBUTES, (property) => updateAttribute(property, htmlNode), createComputations(computationsCollection), node));
					listeners.push(bindMap(NodeFeatures.ELEMENT_PROPERTIES, (property) => updateProperty(property, htmlNode), createComputations(computationsCollection), node));
					const tree = stateNode.getTree();
					bindPolymerModelProperties(htmlNode, {
						handlePropertiesChanged: (changedProps) => handlePropertiesChanged(changedProps, stateNode),
						fireReadyEvent: (element) => fireReadyEvent(element),
						handleListItemPropertyChange: (nodeId, host, propertyName, value) => handleListItemPropertyChange(nodeId, host, propertyName, value, tree)
					});
					listeners.push(stateNode.addUnregisterListener(() => remove(listeners, context, computationsCollection)));
				} else applyStructuralAttributes(stateNode, htmlNode);
				listeners.push(bindVisibility(listeners, context, computationsCollection, nodeFactory));
				scheduleInitialExecution(stateNode);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/binding/TextBindingStrategy.js
var _a, TextBindingStrategy;
function init_TextBindingStrategy() {
	return (init_TextBindingStrategy = __esmMin((() => {
		init_Reactive();
		init_PolymerUtils();
		init_NodeFeatures();
		init_NodeProperties();
		TextBindingStrategy = class {
			/**
			* This is used as a weak set. Only keys are important so that they are weakly
			* referenced
			*/
			static #bound = /* @__PURE__ */ new WeakMap();
			create(_node) {
				return document.createTextNode("");
			}
			isApplicable(node) {
				return node.hasFeature(NodeFeatures.TEXT_NODE);
			}
			bind(stateNode, htmlNode, _nodeFactory) {
				assert(stateNode.hasFeature(NodeFeatures.TEXT_NODE), "Node must have the text feature");
				if (_a.#bound.has(stateNode)) return;
				_a.#bound.set(stateNode, true);
				const textProperty = stateNode.getMap(NodeFeatures.TEXT_NODE).getProperty(NodeProperties.TEXT);
				const computation = Reactive.runWhenDependenciesChange(() => {
					htmlNode.data = textProperty.getValue();
				});
				stateNode.addUnregisterListener(() => this.#unbind(stateNode, computation));
			}
			#unbind(node, computation) {
				computation.stop();
				_a.#bound.delete(node);
			}
			/**
			* Gets the tag value from the {@link NodeFeatures.ELEMENT_DATA} feature for
			* the `node`.
			*
			* @param node - the state node
			* @returns tag of the `node`
			*/
			getTag(node) {
				return getTag$1(node);
			}
		};
		_a = TextBindingStrategy;
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/binding/Binder.js
/**
* Entry point for binding Node to state nodes.
*
* This is the only public API class for external use.
*/
/**
* Bind the `domNode` to the `stateNode`.
*
* @param stateNode - the state node
* @param domNode - the DOM node to bind, not `null`
*/
function bind(stateNode, domNode) {
	assert(!stateNode.getTree().isUpdateInProgress(), "Binding state node while processing state tree changes");
	getApplicableStrategy(stateNode).bind(stateNode, domNode, CONTEXT);
}
function getApplicableStrategy(node) {
	let applicable = null;
	for (const strategy of STRATEGIES) if (strategy.isApplicable(node)) {
		assert(applicable === null, "Found multiple applicable binding strategies for the same node");
		applicable = strategy;
	}
	if (applicable === null) throw new Error("State node has no suitable binder strategy");
	return applicable;
}
var STRATEGIES, BinderContextImpl, CONTEXT;
function init_Binder() {
	return (init_Binder = __esmMin((() => {
		init_SimpleElementBindingStrategy();
		init_TextBindingStrategy();
		STRATEGIES = [new SimpleElementBindingStrategy(), new TextBindingStrategy()];
		BinderContextImpl = class {
			createAndBind(stateNode) {
				const strategy = getApplicableStrategy(stateNode);
				let node = stateNode.getDomNode();
				if (node === null) {
					node = strategy.create(stateNode);
					assert(node !== null, "Binding strategy created a null DOM node");
					stateNode.setDomNode(node);
				}
				bind(stateNode, node);
				return node;
			}
			bind(stateNode, node) {
				bind(stateNode, node);
			}
			getStrategies(predicate) {
				return STRATEGIES.filter(predicate);
			}
		};
		CONTEXT = new BinderContextImpl();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ConnectionIndicator.js
function vaadin() {
	return window.Vaadin;
}
/**
* GWT interface to ConnectionIndicator.ts
*
* @param state - the connection state
*/
function setState(state) {
	const connectionState = vaadin().connectionState;
	if (connectionState) connectionState.state = state;
}
/**
* Set a property of the connection indicator component.
*
* @param property - the property to set
* @param value - the value to set
*/
function setProperty(property, value) {
	const connectionIndicator = vaadin().connectionIndicator;
	if (connectionIndicator) connectionIndicator[property] = value;
}
/** Notifies the connection state that a loading operation has started. */
function loadingStarted() {
	vaadin().connectionState?.loadingStarted();
}
/** Notifies the connection state that a loading operation has finished. */
function loadingFinished() {
	vaadin().connectionState?.loadingFinished();
}
var CONNECTED, RECONNECTING, CONNECTION_LOST;
function init_ConnectionIndicator() {
	return (init_ConnectionIndicator = __esmMin((() => {
		CONNECTED = "connected";
		RECONNECTING = "reconnecting";
		CONNECTION_LOST = "connection-lost";
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/LoadingIndicatorConfigurator.js
/**
* Binds change events for the property identified by the given key in the given
* feature to the given setter.
*
* @param map - the map containing the property
* @param key - the key of the property
* @param setter - the setter to invoke when the value changes
* @param defaultValue - the value to use if the property value is removed
*/
function bindInteger(map, key, setter, defaultValue) {
	map.getProperty(key).addChangeListener((event) => setter(event.getSource().getValueOrDefault(defaultValue)));
}
/**
* Observes the loading indicator configuration stored in the given node and configures
* the loading indicator accordingly.
*
* @param node - the node containing the loading indicator configuration
*/
function observe$1(node) {
	const configMap = node.getMap(NodeFeatures.LOADING_INDICATOR_CONFIGURATION);
	bindInteger(configMap, FIRST_DELAY_KEY, (delay) => setProperty("firstDelay", delay), FIRST_DELAY_DEFAULT);
	bindInteger(configMap, SECOND_DELAY_KEY, (delay) => setProperty("secondDelay", delay), SECOND_DELAY_DEFAULT);
	bindInteger(configMap, THIRD_DELAY_KEY, (delay) => setProperty("thirdDelay", delay), THIRD_DELAY_DEFAULT);
	configMap.getProperty(DEFAULT_THEME_APPLIED_KEY).addChangeListener((event) => setProperty("applyDefaultTheme", event.getSource().getValueOrDefault(DEFAULT_THEME_APPLIED_DEFAULT)));
}
var FIRST_DELAY_KEY, SECOND_DELAY_KEY, THIRD_DELAY_KEY, DEFAULT_THEME_APPLIED_KEY, FIRST_DELAY_DEFAULT, SECOND_DELAY_DEFAULT, THIRD_DELAY_DEFAULT, DEFAULT_THEME_APPLIED_DEFAULT;
function init_LoadingIndicatorConfigurator() {
	return (init_LoadingIndicatorConfigurator = __esmMin((() => {
		init_ConnectionIndicator();
		init_NodeFeatures();
		FIRST_DELAY_KEY = "first";
		SECOND_DELAY_KEY = "second";
		THIRD_DELAY_KEY = "third";
		DEFAULT_THEME_APPLIED_KEY = "theme";
		FIRST_DELAY_DEFAULT = 450;
		SECOND_DELAY_DEFAULT = 1500;
		THIRD_DELAY_DEFAULT = 5e3;
		DEFAULT_THEME_APPLIED_DEFAULT = true;
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/PollConfigurator.js
/**
* Observes the poll configuration stored in the given node and configures polling
* accordingly.
*
* @param node - the node containing the poll configuration
* @param poller - the poller to configure
*/
function observe(node, poller) {
	node.getMap(NodeFeatures.POLL_CONFIGURATION).getProperty(POLL_INTERVAL_KEY).addChangeListener((event) => {
		poller.setInterval(Math.trunc(Number(event.getNewValue())));
	});
}
var POLL_INTERVAL_KEY;
function init_PollConfigurator() {
	return (init_PollConfigurator = __esmMin((() => {
		init_NodeFeatures();
		POLL_INTERVAL_KEY = "pollInterval";
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ReconnectConfiguration.js
var DIALOG_TEXT_KEY, DIALOG_TEXT_GAVE_UP_KEY, RECONNECT_ATTEMPTS_KEY, RECONNECT_ATTEMPTS_DEFAULT, RECONNECT_INTERVAL_KEY, RECONNECT_INTERVAL_DEFAULT, ReconnectConfiguration;
function init_ReconnectConfiguration() {
	return (init_ReconnectConfiguration = __esmMin((() => {
		init_NodeFeatures();
		init_Reactive();
		DIALOG_TEXT_KEY = "dialogText";
		DIALOG_TEXT_GAVE_UP_KEY = "dialogTextGaveUp";
		RECONNECT_ATTEMPTS_KEY = "reconnectAttempts";
		RECONNECT_ATTEMPTS_DEFAULT = 1e4;
		RECONNECT_INTERVAL_KEY = "reconnectInterval";
		RECONNECT_INTERVAL_DEFAULT = 5e3;
		ReconnectConfiguration = class {
			#registry;
			/**
			* Creates a new instance using the given registry.
			*
			* @param registry - the registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Binds this ReconnectDialogConfiguration to the given
			* {@link ConnectionStateHandler} so that
			* {@link ConnectionStateHandler.configurationUpdated} is run whenever a
			* relevant part of {@link ReconnectConfiguration} changes.
			*
			* @param connectionStateHandler - the connection state handler to bind to
			*/
			static bind(connectionStateHandler) {
				Reactive.runWhenDependenciesChange(() => connectionStateHandler.configurationUpdated());
			}
			#getProperty(key) {
				return this.#registry.getStateTree().getRootNode().getMap(NodeFeatures.RECONNECT_DIALOG_CONFIGURATION).getProperty(key);
			}
			/**
			* Gets the text to show in the reconnect dialog.
			*
			* @returns the text to show in the reconnect dialog.
			*
			* @deprecated The API for configuring the connection indicator has changed.
			*/
			getDialogText() {
				return this.#getProperty(DIALOG_TEXT_KEY).getValue() ?? null;
			}
			/**
			* Gets the text to show in the reconnect dialog when no longer trying to
			* reconnect.
			*
			* @returns the text to show in the reconnect dialog when no longer trying to
			*          reconnect
			*
			* @deprecated The API for configuring the connection indicator has changed.
			*/
			getDialogTextGaveUp() {
				return this.#getProperty(DIALOG_TEXT_GAVE_UP_KEY).getValue() ?? null;
			}
			/**
			* Gets the text to show in the reconnect dialog.
			*
			* @returns the text to show in the reconnect dialog.
			*/
			getReconnectAttempts() {
				return this.#getProperty(RECONNECT_ATTEMPTS_KEY).getValueOrDefault(RECONNECT_ATTEMPTS_DEFAULT);
			}
			/**
			* Gets the interval in milliseconds to wait between reconnect attempts.
			*
			* @returns the interval in milliseconds to wait between reconnect attempts
			*/
			getReconnectInterval() {
				return this.#getProperty(RECONNECT_INTERVAL_KEY).getValueOrDefault(RECONNECT_INTERVAL_DEFAULT);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/MessageOrdering.js
/** The server id of a message, or -1 if it has none. Mirrors getServerId. */
function getServerId(json) {
	return SERVER_SYNC_ID$1 in json ? json[SERVER_SYNC_ID$1] : -1;
}
/** Whether a message is a resynchronization response. Mirrors isResynchronize. */
function isResynchronize(json) {
	return RESYNCHRONIZE_ID$1 in json;
}
var SERVER_SYNC_ID$1, RESYNCHRONIZE_ID$1, PendingUIDLMessage, PendingMessageQueue;
function init_MessageOrdering() {
	return (init_MessageOrdering = __esmMin((() => {
		init_Console();
		SERVER_SYNC_ID$1 = "syncId";
		RESYNCHRONIZE_ID$1 = "resynchronize";
		PendingUIDLMessage = class {
			#json;
			/**
			* Creates a new instance based on the given JSON.
			*
			* @param json - the JSON to wrap
			*/
			constructor(json) {
				this.#json = json;
			}
			/**
			* The wrapped JSON.
			*
			* @returns the JSON this message was created from
			*/
			getJson() {
				return this.#json;
			}
		};
		PendingMessageQueue = class {
			#lastSeenServerSyncId = -1;
			#pending = [];
			/** The last seen server sync id; -1 before any response has been processed. */
			getLastSeenServerSyncId() {
				return this.#lastSeenServerSyncId;
			}
			setLastSeenServerSyncId(serverId) {
				this.#lastSeenServerSyncId = serverId;
			}
			/** The server id the client is currently waiting for. */
			getExpectedServerId() {
				return this.#lastSeenServerSyncId + 1;
			}
			/** Whether the given server id is the one currently expected (or always-ok). */
			isNextExpectedMessage(serverId) {
				if (serverId === -1) return true;
				if (serverId === this.getExpectedServerId()) return true;
				return this.#lastSeenServerSyncId === -1;
			}
			/** Whether the given server id has already been seen (a stale re-send). */
			isAlreadySeen(serverId) {
				return serverId <= this.#lastSeenServerSyncId;
			}
			push(json) {
				this.#pending.push(new PendingUIDLMessage(json));
			}
			isEmpty() {
				return this.#pending.length === 0;
			}
			length() {
				return this.#pending.length;
			}
			clear() {
				this.#pending = [];
			}
			/** The index of the next pending message that can be handled now, or -1. */
			findNextHandlable() {
				for (let i = 0; i < this.#pending.length; i++) if (this.isNextExpectedMessage(getServerId(this.#pending[i].getJson()))) return i;
				return -1;
			}
			/** Removes and returns the pending message at the given index. */
			remove(index) {
				return this.#pending.splice(index, 1)[0].getJson();
			}
			/** Drops pending messages whose server id is older than the expected one. */
			removeOld() {
				for (let i = 0; i < this.#pending.length; i++) {
					const serverId = getServerId(this.#pending[i].getJson());
					if (serverId !== -1 && serverId < this.getExpectedServerId()) {
						Console.debug(`Removing old message with id ${serverId}`);
						this.#pending.splice(i, 1);
						i--;
					}
				}
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/MessageSender.js
/**
* Sends the `payload` to the `url` as a beacon, surviving page unload.
*
* @param url - the url to send the payload to
* @param payload - the payload to send
*/
function sendBeacon(url, payload) {
	window.navigator.sendBeacon(url, payload);
}
var RPC_INVOCATIONS, CSRF_TOKEN, CSRF_TOKEN_DEFAULT_VALUE$1, SERVER_SYNC_ID, CLIENT_TO_SERVER_ID$1, RESYNCHRONIZE_ID, UNLOAD_BEACON, ResynchronizationState, MessageSender;
function init_MessageSender() {
	return (init_MessageSender = __esmMin((() => {
		init_Console();
		RPC_INVOCATIONS = "rpc";
		CSRF_TOKEN = "csrfToken";
		CSRF_TOKEN_DEFAULT_VALUE$1 = "init";
		SERVER_SYNC_ID = "syncId";
		CLIENT_TO_SERVER_ID$1 = "clientId";
		RESYNCHRONIZE_ID = "resynchronize";
		UNLOAD_BEACON = "UNLOAD";
		ResynchronizationState = {
			NOT_ACTIVE: "NOT_ACTIVE",
			SEND_TO_SERVER: "SEND_TO_SERVER",
			WAITING_FOR_RESPONSE: "WAITING_FOR_RESPONSE"
		};
		MessageSender = class {
			#clientToServerMessageId = 0;
			#push = null;
			#registry;
			#pushConnectionFactory;
			#resynchronizationState = ResynchronizationState.NOT_ACTIVE;
			#pushPendingMessage = null;
			#messageQueue = [];
			#resendMessageTimer = null;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry, pushConnectionFactory = null) {
				this.#registry = registry;
				this.#pushConnectionFactory = pushConnectionFactory;
				this.#registry.getRequestResponseTracker().addReconnectionAttemptHandler((event) => {
					Console.debug(`Re-sending queued messages to the server (attempt ${event.getAttempt()}) ...`);
					this.#resetTimer();
					this.#doSendInvocationsToServer();
				});
			}
			sendUnloadBeacon() {
				const payload = this.#preparePayload([], { [UNLOAD_BEACON]: true });
				sendBeacon(this.#registry.getXhrConnection().getUri(), JSON.stringify(payload));
			}
			/**
			* Sends any pending invocations to the server if there is no request in
			* progress and the application is running.
			*/
			sendInvocationsToServer() {
				if (!this.#registry.getUILifecycle().isRunning()) {
					Console.warn("Trying to send RPC from not yet started or stopped application");
					return;
				}
				const hasActiveRequest = this.#registry.getRequestResponseTracker().hasActiveRequest();
				if (hasActiveRequest || this.#push !== null && !this.#push.isActive()) Console.debug(`Postpone sending invocations to server because of ${hasActiveRequest ? "active request" : "PUSH not active"}`);
				else this.#doSendInvocationsToServer();
			}
			#doSendInvocationsToServer() {
				if (this.#pushPendingMessage !== null) {
					const payload = this.#pushPendingMessage;
					Console.log(`Sending pending push message ${JSON.stringify(payload)}`);
					this.#pushPendingMessage = null;
					this.#sendPayload(payload);
					return;
				} else if (this.hasQueuedMessages()) {
					Console.debug("Sending queued messages to server");
					if (this.#resendMessageTimer !== null) this.#resetTimer();
					this.#sendPayload(this.#messageQueue[0]);
					return;
				}
				const serverRpcQueue = this.#registry.getServerRpcQueue();
				if (serverRpcQueue.isEmpty() && this.#resynchronizationState !== ResynchronizationState.SEND_TO_SERVER) return;
				const reqJson = serverRpcQueue.toJson();
				serverRpcQueue.clear();
				if (reqJson.length === 0 && this.#resynchronizationState !== ResynchronizationState.SEND_TO_SERVER) {
					Console.warn("All RPCs filtered out, not sending anything to the server");
					return;
				}
				const extraJson = {};
				if (this.#resynchronizationState === ResynchronizationState.SEND_TO_SERVER) {
					this.#resynchronizationState = ResynchronizationState.WAITING_FOR_RESPONSE;
					Console.warn("Resynchronizing from server");
					this.#messageQueue = [];
					this.#resetTimer();
					extraJson[RESYNCHRONIZE_ID] = true;
				}
				this.#registry.getLoadingIndicatorStateHandler().startLoading();
				this.sendRequest(reqJson, extraJson);
			}
			/**
			* Sends an asynchronous or synchronous UIDL request to the server using the
			* given URI.
			*
			* Java overloads `send` for this: the two-argument overload is `protected` and
			* the one-argument one, ported as `send`, is `public`. TypeScript cannot give
			* two overloads different visibility, so the protected one keeps this name.
			*
			* @param reqInvocations - Data containing RPC invocations and all related
			*          information.
			* @param extraJson - Parameters that are added to the payload
			*/
			sendRequest(reqInvocations, extraJson) {
				this.send(this.#preparePayload(reqInvocations, extraJson));
			}
			/**
			* Sends an asynchronous or synchronous UIDL request to the server using the
			* given URI. Adds message to message queue and postpones sending if queue not
			* empty.
			*
			* @param payload - The contents of the request to send
			*/
			send(payload) {
				if (this.hasQueuedMessages()) {
					if (!(SERVER_SYNC_ID in payload)) {
						this.#messageQueue.push(payload);
						Console.debug(`Message not sent because other messages are pending. Added to the queue: ${JSON.stringify(payload)}`);
					} else Console.debug(`Message not sent because already queued: ${JSON.stringify(payload)}`);
					return;
				}
				this.#messageQueue.push(payload);
				this.#sendPayload(payload);
			}
			#preparePayload(reqInvocations, extraJson) {
				const payload = {};
				const csrfToken = this.#registry.getMessageHandler().getCsrfToken();
				if (csrfToken !== CSRF_TOKEN_DEFAULT_VALUE$1) payload[CSRF_TOKEN] = csrfToken;
				payload[RPC_INVOCATIONS] = reqInvocations;
				if (extraJson !== null) for (const key of Object.keys(extraJson)) payload[key] = extraJson[key];
				return payload;
			}
			/**
			* Sends an asynchronous or synchronous UIDL request to the server using the
			* given URI.
			*
			* @param payload - The contents of the request to send
			*/
			#sendPayload(payload) {
				if (!(SERVER_SYNC_ID in payload)) payload[SERVER_SYNC_ID] = this.#registry.getMessageHandler().getLastSeenServerSyncId();
				if (!(CLIENT_TO_SERVER_ID$1 in payload)) payload[CLIENT_TO_SERVER_ID$1] = this.#clientToServerMessageId++;
				if (!this.#registry.getRequestResponseTracker().hasActiveRequest()) this.#registry.getRequestResponseTracker().startRequest();
				if (this.#push !== null && this.#push.isBidirectional()) {
					Console.debug("send PUSH");
					this.#pushPendingMessage = payload;
					this.#push.push(payload);
				} else {
					Console.debug("send XHR");
					this.#resetTimer();
					this.#registry.getXhrConnection().send(payload);
					this.#scheduleResend(payload);
				}
			}
			#resetTimer() {
				if (this.#resendMessageTimer !== null) {
					clearTimeout(this.#resendMessageTimer);
					this.#resendMessageTimer = null;
				}
			}
			#scheduleResend(payload) {
				const timeout = this.#registry.getApplicationConfiguration().getMaxMessageSuspendTimeout() + 500;
				this.#resendMessageTimer = setTimeout(() => {
					this.#scheduleResend(payload);
					if (!this.#registry.getRequestResponseTracker().hasActiveRequest()) {
						this.#registry.getRequestResponseTracker().startRequest();
						this.#registry.getXhrConnection().send(payload);
					}
				}, timeout);
			}
			/**
			* Sets the status for the push connection.
			*
			* @param enabled - `true` to enable the push connection; `false` to disable
			*          the push connection.
			* @param reEnableIfNeeded - whether a disable that finds the configuration
			*          still enabling push may re-enable it; `false` on the recursive call
			*/
			setPushEnabled(enabled, reEnableIfNeeded = true) {
				if (enabled && (this.#push === null || !this.#push.isActive())) this.#push = this.#pushConnectionFactory ? this.#pushConnectionFactory(this.#registry) : null;
				else if (!enabled && this.#push !== null && this.#push.isActive()) this.#push.disconnect(() => {
					this.#push = null;
					if (reEnableIfNeeded && this.#registry.getPushConfiguration().isPushEnabled()) this.setPushEnabled(true);
					if (this.#registry.getServerRpcQueue().isFlushPending()) this.#registry.getServerRpcQueue().flush();
				});
			}
			/**
			* Returns a human readable string representation of the method used to
			* communicate with the server.
			*
			* @returns A string representation of the current transport type
			*/
			getCommunicationMethodName() {
				let clientToServer = "XHR";
				let serverToClient = "-";
				if (this.#push !== null) {
					serverToClient = this.#push.getTransportType();
					if (this.#push.isBidirectional()) clientToServer = serverToClient;
				}
				return `Client to server: ${clientToServer}, server to client: ${serverToClient}`;
			}
			/**
			* Resynchronize the client side, i.e. reload all component hierarchy and state
			* from the server
			*/
			resynchronize() {
				if (this.requestResynchronize()) {
					this.#messageQueue = [];
					this.#resetTimer();
					this.sendInvocationsToServer();
				}
			}
			/**
			* Used internally to update what id the server expects.
			*
			* @param nextExpectedId - the new client id to set
			* @param force - true if the id must be updated, false otherwise
			*/
			setClientToServerMessageId(nextExpectedId, force) {
				if (nextExpectedId === this.#clientToServerMessageId) {
					if (this.#pushPendingMessage !== null && this.#pushPendingMessage[CLIENT_TO_SERVER_ID$1] < nextExpectedId) this.#pushPendingMessage = null;
					if (this.hasQueuedMessages()) {
						if (this.#messageQueue[0][CLIENT_TO_SERVER_ID$1] + 1 === nextExpectedId) {
							this.#messageQueue.shift();
							this.#resetTimer();
						}
					}
					return;
				}
				if (force) {
					Console.debug(`Forced update of clientId to ${this.#clientToServerMessageId}`);
					this.#clientToServerMessageId = nextExpectedId;
					this.#messageQueue = [];
					this.#resetTimer();
					return;
				}
				if (nextExpectedId > this.#clientToServerMessageId) {
					if (this.#clientToServerMessageId === 0) Console.debug(`Updating client-to-server id to ${nextExpectedId} based on server`);
					else Console.warn(`Server expects next client-to-server id to be ${nextExpectedId} but we were going to use ${this.#clientToServerMessageId}. Will use ${nextExpectedId}.`);
					this.#clientToServerMessageId = nextExpectedId;
				}
			}
			/**
			* Modifies the resynchronize state to indicate that resynchronization is
			* desired
			*
			* @returns true if the resynchronize request still needs to be sent; false
			*          otherwise
			*/
			requestResynchronize() {
				switch (this.#resynchronizationState) {
					case ResynchronizationState.NOT_ACTIVE:
						Console.debug("Resynchronize from server requested");
						this.#resynchronizationState = ResynchronizationState.SEND_TO_SERVER;
						return true;
					case ResynchronizationState.SEND_TO_SERVER: return true;
					case ResynchronizationState.WAITING_FOR_RESPONSE:
					default: return false;
				}
			}
			clearResynchronizationState() {
				this.#resynchronizationState = ResynchronizationState.NOT_ACTIVE;
			}
			getResynchronizationState() {
				return this.#resynchronizationState;
			}
			hasQueuedMessages() {
				return this.#messageQueue.length !== 0;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/EagerDependencyTracker.js
/**
* Adds a command to be run when all eager dependencies have finished loading.
*
* If no eager dependencies are currently being loaded, runs the command
* immediately.
*
* @see {@link startEagerDependencyLoading}
* @see {@link endEagerDependencyLoading}
*
* @param command - the command to run when eager dependencies have been loaded
*/
function runWhenEagerDependenciesLoaded(command) {
	if (eagerDependenciesLoading === 0) command();
	else callbacks.push(command);
}
/**
* Marks that loading of a dependency has started.
*
* @see {@link runWhenEagerDependenciesLoaded}
* @see {@link endEagerDependencyLoading}
*/
function startEagerDependencyLoading() {
	eagerDependenciesLoading++;
}
/**
* Marks that loading of a dependency has ended.
*
* If all pending dependencies have been loaded, calls any callback registered
* using {@link runWhenEagerDependenciesLoaded}. The callbacks are cleared even
* if one of them throws.
*/
function endEagerDependencyLoading() {
	eagerDependenciesLoading--;
	if (eagerDependenciesLoading === 0 && callbacks.length > 0) try {
		for (let i = 0; i < callbacks.length; i++) callbacks[i]();
	} finally {
		callbacks = [];
	}
}
var eagerDependenciesLoading, callbacks;
function init_EagerDependencyTracker() {
	return (init_EagerDependencyTracker = __esmMin((() => {
		eagerDependenciesLoading = 0;
		callbacks = [];
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/util/ClientJsonCodec.js
/**
* Creates the function exposed for a server return channel. Calling it forwards
* all of its arguments (as an array) to the supplied sender, which the Java
* caller wires (exception-guarded) to ServerConnector.sendReturnChannelMessage.
*
* Private in the Java source (`private static native`); kept module-local and
* exercised through the public `decodeWithTypeInfo` (`@v-return`) surface.
*/
function createReturnChannelCallback(sendMessage) {
	return (...args) => {
		sendMessage(args);
	};
}
/**
* Wraps `fn` in a function that prepends `captures` to the runtime arguments
* before delegating, while leaving `this` controlled by the caller.
* `Function.prototype.bind` would also pre-bind `this` to `undefined`, which
* prevents callers from setting `this` via `.call()` or `.apply()` on the
* resulting function.
*
* Private in the Java source (`private static native`); kept module-local and
* exercised through the public `decodeWithTypeInfo` (`@v-fn`) surface.
*/
function applyCaptures(fn, captures) {
	return function(...callArgs) {
		const args = Array.from(captures).concat(callArgs);
		return fn.apply(this, args);
	};
}
/**
* Encodes a value for transport without type information. In JavaScript the JSON
* representation is used as-is; only `undefined`/`null` are normalized to null
* (the JVM-only conversions in the Java version are test scaffolding). Mirrors
* ClientJsonCodec.encodeWithoutTypeInfo.
*
* @param value - the value to encode
* @returns the value encoded as JSON
*/
function encodeWithoutTypeInfo(value) {
	return value === null || value === void 0 ? null : value;
}
/**
* Decodes a value encoded on the server using
* `JacksonCodec.encodeWithoutTypeInfo`. This is a no-op in JavaScript since the
* JSON representation can be used as-is (the JVM-only conversions in the Java
* version are test scaffolding). Mirrors ClientJsonCodec.decodeWithoutTypeInfo.
*
* @param json - the JSON value to convert
* @returns the decoded value
*/
function decodeWithoutTypeInfo(json) {
	return json;
}
/**
* Decodes a value as a {@link StateNode} encoded on the server using
* `JacksonCodec.encodeWithTypeInfo` if it's possible. Otherwise returns `null`.
*
* It does the same as {@link decodeWithTypeInfo} for the encoded json value if
* the encoded object is a {@link StateNode} except it returns the node itself
* instead of a DOM element associated with it.
*
* @see {@link decodeWithTypeInfo}
* @param tree - the state tree to use for resolving nodes and elements
* @param json - the JSON value to decode
* @returns the decoded state node if any
*/
function decodeStateNode(tree, json) {
	if (typeof json === "object" && json !== null && !Array.isArray(json)) {
		const nodeIdValue = json["@v-node"];
		if (nodeIdValue !== void 0 && nodeIdValue !== null) {
			if (typeof nodeIdValue !== "number") throw new Error(`@v-node value must be a number, got ${typeof nodeIdValue} in ${JSON.stringify(json)}`);
			return tree.getNode(nodeIdValue);
		}
	}
	return null;
}
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
/**
* Recursively decodes a JSON object, processing any nested `@v` references.
* Returns a native JS object that can store decoded values including DOM
* elements.
*
* Mirrors the Java, which writes each decoded value back into the incoming
* object and returns that same instance; a caller holding a reference to the
* input observes the decoded values in place.
*
* Private in Java; covered through the public `decodeWithTypeInfo` surface.
*/
function decodeObjectWithTypeInfo(tree, jsonObject) {
	for (const key of Object.keys(jsonObject)) jsonObject[key] = decodeWithTypeInfo(tree, jsonObject[key]);
	return jsonObject;
}
/**
* Recursively decodes a JSON array, processing any nested `@v` references.
*
* Private in Java; covered through the public `decodeWithTypeInfo` surface.
*/
function decodeArrayWithTypeInfo(tree, jsonArray) {
	return jsonArray.map((value) => decodeWithTypeInfo(tree, value));
}
function decodeJsFunction(tree, fnObject, originalJson) {
	const body = fnObject.body;
	if (typeof body !== "string") throw new Error(`@v-fn 'body' must be a string in ${originalJson}`);
	const capturesValue = fnObject.captures;
	if (!Array.isArray(capturesValue)) throw new Error(`@v-fn 'captures' must be an array in ${originalJson}`);
	const captures = capturesValue.map((capture) => decodeWithTypeInfo(tree, capture));
	const argsValue = fnObject.args;
	if (argsValue !== void 0 && !Array.isArray(argsValue)) throw new Error(`@v-fn 'args' must be an array in ${originalJson}`);
	const argNames = (argsValue ?? []).map((argName) => {
		if (typeof argName !== "string") throw new Error(`@v-fn 'args' must contain only strings in ${originalJson}`);
		return argName;
	});
	const paramsAndCode = [];
	for (let i = 0; i < captures.length; i++) paramsAndCode.push(`$${i}`);
	paramsAndCode.push(...argNames);
	paramsAndCode.push(body);
	return applyCaptures(new Function(...paramsAndCode), captures);
}
/**
* Decodes a value encoded on the server using
* `JacksonCodec.encodeWithTypeInfo`: element references (`@v-node` → the DOM
* node), return channels (`@v-return` → a callback that messages the server),
* manifested functions (`@v-fn`), and nested objects/arrays (decoded
* recursively); other values pass through unchanged. Mirrors
* ClientJsonCodec.decodeWithTypeInfo.
*
* @param tree - the state tree to use for resolving nodes and elements
* @param json - the JSON value to decode
* @returns the decoded value
*/
function decodeWithTypeInfo(tree, json) {
	if (isPlainObject(json)) {
		const nodeIdValue = json["@v-node"];
		if (nodeIdValue !== void 0 && nodeIdValue !== null) {
			if (typeof nodeIdValue !== "number") throw new Error(`@v-node value must be a number, got ${typeof nodeIdValue} in ${JSON.stringify(json)}`);
			return tree.getNode(nodeIdValue).getDomNode();
		}
		const returnArray = json["@v-return"];
		if (returnArray !== void 0 && returnArray !== null) {
			if (!Array.isArray(returnArray)) throw new Error(`@v-return value must be an array, got ${typeof returnArray} in ${JSON.stringify(json)}`);
			if (returnArray.length < 2) throw new Error(`@v-return array must have at least 2 elements, got ${returnArray.length} in ${JSON.stringify(json)}`);
			const returnNodeId = returnArray[0];
			const channelId = returnArray[1];
			const serverConnector = tree.getRegistry().getServerConnector();
			return createReturnChannelCallback((args) => serverConnector.sendReturnChannelMessage(returnNodeId, channelId, args));
		}
		const fnValue = json["@v-fn"];
		if (fnValue !== void 0 && fnValue !== null) {
			if (!isPlainObject(fnValue)) throw new Error(`@v-fn value must be an object, got ${typeof fnValue} in ${JSON.stringify(json)}`);
			return decodeJsFunction(tree, fnValue, JSON.stringify(json));
		}
		for (const key of Object.keys(json)) if (key.startsWith("@v-")) throw new Error(`Unsupported @v type '${key}' in ${JSON.stringify(json)}`);
		return decodeObjectWithTypeInfo(tree, json);
	} else if (Array.isArray(json)) return decodeArrayWithTypeInfo(tree, json);
	return decodeWithoutTypeInfo(json);
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/TreeChangeProcessor.js
/**
* Update a state tree based on a JSON array of changes.
*
* @param tree - the tree to update
* @param changes - the JSON array of changes
* @returns a set of updated nodes addressed by the `changes`
*/
function processChanges(tree, changes) {
	assert(!tree.isUpdateInProgress(), "Previous tree change processing has not completed");
	try {
		tree.setUpdateInProgress(true);
		const nodes = processAttachChanges(tree, changes);
		for (const change of changes) if (!isAttach(change)) {
			const value = processChange(tree, change);
			if (value !== null) nodes.add(value);
		}
		return nodes;
	} finally {
		tree.setUpdateInProgress(false);
		tree.setResync(false);
	}
}
function processAttachChanges(tree, changes) {
	const nodes = /* @__PURE__ */ new Set();
	for (const change of changes) if (isAttach(change)) {
		const nodeId = change[JsonConstants.CHANGE_NODE];
		if (nodeId !== tree.getRootNode().getId()) {
			const node = new StateNode(nodeId, tree);
			tree.registerNode(node);
			nodes.add(node);
		}
	}
	return nodes;
}
function isAttach(change) {
	return change[JsonConstants.CHANGE_TYPE] === JsonConstants.CHANGE_TYPE_ATTACH;
}
/**
* Update a state tree based on a JSON change. This method is public for testing
* purposes.
*
* @param tree - the tree to update
* @param change - the JSON change
* @returns the updated node addressed by the provided `change`
*/
function processChange(tree, change) {
	const type = change[JsonConstants.CHANGE_TYPE];
	const nodeId = change[JsonConstants.CHANGE_NODE];
	const node = tree.getNode(nodeId);
	if (node === null && tree.isResync()) return node;
	assert(node !== null, "No attached node found");
	switch (type) {
		case JsonConstants.CHANGE_TYPE_NOOP:
			populateFeature(change, node);
			break;
		case JsonConstants.CHANGE_TYPE_SPLICE:
			processSpliceChange(change, node);
			break;
		case JsonConstants.CHANGE_TYPE_PUT:
			processPutChange(change, node);
			break;
		case JsonConstants.CHANGE_TYPE_REMOVE:
			processRemoveChange(change, node);
			break;
		case JsonConstants.CHANGE_TYPE_DETACH:
			processDetachChange(tree, node);
			break;
		case JsonConstants.CHANGE_TYPE_CLEAR:
			processClearChange(change, node);
			break;
		default: assert(false, `Unsupported change type: ${type}`);
	}
	return node;
}
function processDetachChange(tree, node) {
	tree.unregisterNode(node);
	node.setParent(null);
}
function populateFeature(change, node) {
	assert(JsonConstants.CHANGE_FEATURE_TYPE in change, "Change doesn't contain feature type. Don't know how to populate feature");
	const featureId = change[JsonConstants.CHANGE_FEATURE];
	if (change[JsonConstants.CHANGE_FEATURE_TYPE]) node.getList(featureId);
	else node.getMap(featureId);
}
function processPutChange(change, node) {
	const property = findProperty(change, node);
	if (JsonConstants.CHANGE_PUT_VALUE in change) property.setValue(decodeWithoutTypeInfo(change[JsonConstants.CHANGE_PUT_VALUE]));
	else if (JsonConstants.CHANGE_PUT_NODE_VALUE in change) {
		const childId = change[JsonConstants.CHANGE_PUT_NODE_VALUE];
		const child = node.getTree().getNode(childId);
		assert(child !== null, "No child node found");
		child.setParent(node);
		property.setValue(child);
	} else assert(false, `Change should have either value or nodeValue property: ${stringify(change)}`);
}
function processRemoveChange(change, node) {
	findProperty(change, node).removeValue();
}
function findProperty(change, node) {
	const nsId = change[JsonConstants.CHANGE_FEATURE];
	return node.getMap(nsId).getProperty(change[JsonConstants.CHANGE_MAP_KEY]);
}
function processSpliceChange(change, node) {
	const nsId = change[JsonConstants.CHANGE_FEATURE];
	const list = node.getList(nsId);
	const index = change[JsonConstants.CHANGE_SPLICE_INDEX];
	const remove = JsonConstants.CHANGE_SPLICE_REMOVE in change ? change[JsonConstants.CHANGE_SPLICE_REMOVE] : 0;
	if (JsonConstants.CHANGE_SPLICE_ADD in change) list.splice(index, remove, change[JsonConstants.CHANGE_SPLICE_ADD]);
	else if (JsonConstants.CHANGE_SPLICE_ADD_NODES in change) {
		const addNodes = change[JsonConstants.CHANGE_SPLICE_ADD_NODES];
		const tree = node.getTree();
		const add = addNodes.map((childId) => {
			const child = tree.getNode(childId);
			assert(child !== null, `No child node found with id ${childId}`);
			child.setParent(node);
			return child;
		});
		list.splice(index, remove, add);
	} else list.splice(index, remove);
}
function processClearChange(change, node) {
	node.getList(change[JsonConstants.CHANGE_FEATURE]).clear();
}
function init_TreeChangeProcessor() {
	return (init_TreeChangeProcessor = __esmMin((() => {
		init_JsonConstants();
		init_StateNode();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/UILifecycle.js
var UIState, ORDINAL, UILifecycle;
function init_UILifecycle() {
	return (init_UILifecycle = __esmMin((() => {
		UIState = {
			INITIALIZING: "INITIALIZING",
			RUNNING: "RUNNING",
			TERMINATED: "TERMINATED"
		};
		ORDINAL = {
			INITIALIZING: 0,
			RUNNING: 1,
			TERMINATED: 2
		};
		UILifecycle = class {
			#state = UIState.INITIALIZING;
			#handlers = [];
			/**
			* Gets the state of the UI.
			*
			* @returns the current state of the UI
			*/
			getState() {
				return this.#state;
			}
			/**
			* Sets the state of the UI to the given value.
			*
			* Only allows state changes in one direction: {@link UIState.INITIALIZING}
			* -\> {@link UIState.RUNNING} -\> {@link UIState.TERMINATED}.
			*
			* Changing the state fires a {@link StateChangeEvent}.
			*
			* @param state - the new UI state
			*/
			setState(state) {
				if (ORDINAL[state] !== ORDINAL[this.#state] + 1) throw new Error(`Tried to move from state ${this.#state} to ${state} which is not allowed`);
				this.#state = state;
				const event = { getUiLifecycle: () => this };
				[...this.#handlers].forEach((handler) => handler(event));
			}
			/**
			* Check if the state is {@link UIState.RUNNING}.
			*
			* @returns `true` if the status is {@link UIState.RUNNING}, `false`
			*          otherwise
			*/
			isRunning() {
				return this.#state === UIState.RUNNING;
			}
			/**
			* Check if the state is {@link UIState.TERMINATED}.
			*
			* @returns `true` if the status is {@link UIState.TERMINATED}, `false`
			*          otherwise
			*/
			isTerminated() {
				return this.#state === UIState.TERMINATED;
			}
			/**
			* Adds a state change event handler.
			*
			* @param handler - the handler to add
			* @returns a handler registration object which can be used to remove the
			*          handler
			*/
			addHandler(handler) {
				this.#handlers.push(handler);
				return { remove: () => {
					const index = this.#handlers.indexOf(handler);
					if (index >= 0) this.#handlers.splice(index, 1);
				} };
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/MessageHandler.js
/** Removes the link and style elements with the given dependency id. */
function removeStylesheetByIdFromDom(dependencyId) {
	const elements = document.querySelectorAll(`link[data-id="${dependencyId}"], style[data-id="${dependencyId}"]`);
	for (const element of Array.from(elements)) element.remove();
}
/** Invokes the element's afterServerUpdate callback if it defines one. */
function callAfterServerUpdates(node) {
	const target = node;
	if (node && target.afterServerUpdate) target.afterServerUpdate();
}
/** Milliseconds from the navigation response start to now, or -1 if unknown. */
function calculateBootstrapTime() {
	const perf = window.performance;
	if (perf && perf.timing) return Date.now() - perf.timing.responseStart;
	return -1;
}
function parseJSONResponse(jsonText) {
	return JSON.parse(jsonText);
}
/** The navigation fetchStart timestamp, or 0 if unknown. */
function getFetchStartTime() {
	const perf = window.performance;
	if (perf && perf.timing && perf.timing.fetchStart) return perf.timing.fetchStart;
	return 0;
}
/**
* Parse the given wrapped JSON, received from the server, to a {@link ValueMap}.
*
* @param jsonText - The JSON to parse
* @returns A ValueMap created from the JSON
*/
function parseJson(jsonText) {
	if (jsonText === null) return null;
	const start = getRelativeTimeMillis();
	try {
		const json = parseJSONResponse(jsonText);
		Console.debug(`JSON parsing took ${getRelativeTimeString(start)}ms`);
		return json;
	} catch {
		Console.error(`Unable to parse JSON: ${jsonText}`);
		return null;
	}
}
var CSRF_TOKEN_DEFAULT_VALUE, CLIENT_TO_SERVER_ID, UIDL_SECURITY_TOKEN_ID, UIDL_PUSH_ID, UIDL_KEY_EXECUTE, META_SESSION_EXPIRED, META_ASYNC, SESSION_EXPIRED_HANDLING_DELAY, MessageHandler;
function init_MessageHandler() {
	return (init_MessageHandler = __esmMin((() => {
		init_TrackingScheduler();
		init_Profiler();
		init_MessageOrdering();
		init_MessageSender();
		init_EagerDependencyTracker();
		init_Reactive();
		init_TreeChangeProcessor();
		init_UILifecycle();
		init_Console();
		CSRF_TOKEN_DEFAULT_VALUE = "init";
		CLIENT_TO_SERVER_ID = "clientId";
		UIDL_SECURITY_TOKEN_ID = "Vaadin-Security-Key";
		UIDL_PUSH_ID = "Vaadin-Push-ID";
		UIDL_KEY_EXECUTE = "execute";
		META_SESSION_EXPIRED = "sessionExpired";
		META_ASYNC = "async";
		SESSION_EXPIRED_HANDLING_DELAY = 250;
		MessageHandler = class {
			#registry;
			#responseHandlingLocks = /* @__PURE__ */ new Set();
			#ordering = new PendingMessageQueue();
			#csrfToken = CSRF_TOKEN_DEFAULT_VALUE;
			#pushId = null;
			#bootstrapTime = 0;
			lastProcessingTime = 0;
			totalProcessingTime = 0;
			#serverTimingInfo = null;
			#initialMessageHandled = false;
			#forceHandleMessage = null;
			#nextResponseSessionExpiredHandler = null;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			#resetForceHandleTimer() {
				if (this.#forceHandleMessage !== null) {
					clearTimeout(this.#forceHandleMessage);
					this.#forceHandleMessage = null;
				}
			}
			/**
			* Handles a received UIDL JSON text, parsing it, and passing it on to the
			* appropriate handlers, while logging timing information.
			*
			* @param json - The JSON to handle
			*/
			handleMessage(json) {
				if (getServerId(json) === -1) {
					const meta = json.meta;
					if (!meta || !(META_SESSION_EXPIRED in meta)) Console.error("Response didn't contain a server id. Please verify that the server is up-to-date and that the response data has not been modified in transmission.");
				}
				let state = this.#registry.getUILifecycle().getState();
				if (state === UIState.INITIALIZING) {
					state = UIState.RUNNING;
					this.#registry.getUILifecycle().setState(state);
				}
				if (state === UIState.RUNNING) this.handleJSON(json);
				else Console.warn("Ignored received message because application has already been stopped");
			}
			handleJSON(valueMap) {
				const serverId = getServerId(valueMap);
				const hasResynchronize = isResynchronize(valueMap);
				if (!hasResynchronize && this.#registry.getMessageSender().getResynchronizationState() === ResynchronizationState.WAITING_FOR_RESPONSE) {
					if (UIDL_KEY_EXECUTE in valueMap) {
						const commands = valueMap[UIDL_KEY_EXECUTE];
						for (const command of commands) if (command.length > 0 && command[0] === "window.location.reload();") {
							Console.warn("Executing forced page reload while a resync request is ongoing.");
							window.location.reload();
							return;
						}
					}
					Console.warn("Queueing message from the server as a resync request is ongoing.");
					this.#ordering.push(valueMap);
					return;
				}
				this.#registry.getMessageSender().clearResynchronizationState();
				if (hasResynchronize && !this.#ordering.isNextExpectedMessage(serverId)) {
					Console.debug(`Received resync message with id ${serverId} while waiting for ${this.#ordering.getExpectedServerId()}`);
					this.#ordering.setLastSeenServerSyncId(serverId - 1);
					this.#ordering.removeOld();
				}
				const locked = this.#responseHandlingLocks.size > 0;
				if (locked || !this.#ordering.isNextExpectedMessage(serverId)) {
					if (locked) Console.debug("Postponing UIDL handling due to lock...");
					else {
						if (this.#ordering.isAlreadySeen(serverId)) {
							Console.warn(`Received message with server id ${serverId} but have already seen a newer one. Ignoring it`);
							this.#endRequestIfResponse(valueMap);
							return;
						}
						Console.debug(`Received message with server id ${serverId} but expected ${this.#ordering.getExpectedServerId()}. Postponing handling until the missing message(s) have been received`);
					}
					this.#ordering.push(valueMap);
					if (this.#forceHandleMessage === null) {
						const timeout = this.#registry.getApplicationConfiguration().getMaxMessageSuspendTimeout();
						this.#forceHandleMessage = setTimeout(() => this.#forceMessageHandling(), timeout);
					}
					return;
				}
				if (hasResynchronize) this.#registry.getStateTree().prepareForResync();
				const lock = {};
				this.suspendReponseHandling(lock);
				Console.debug("Handling message from server");
				this.#registry.getRequestResponseTracker().fireResponseHandlingStarted();
				if (CLIENT_TO_SERVER_ID in valueMap) this.#registry.getMessageSender().setClientToServerMessageId(valueMap[CLIENT_TO_SERVER_ID], hasResynchronize);
				if (serverId !== -1) this.#ordering.setLastSeenServerSyncId(serverId);
				if ("redirect" in valueMap) {
					const url = valueMap.redirect.url;
					Console.debug(`redirecting to ${url}`);
					redirect(url);
					return;
				}
				if (UIDL_SECURITY_TOKEN_ID in valueMap) this.#csrfToken = valueMap[UIDL_SECURITY_TOKEN_ID];
				if (UIDL_PUSH_ID in valueMap) this.#pushId = valueMap[UIDL_PUSH_ID];
				if ("stylesheetRemovals" in valueMap) this.#processStylesheetRemovals(valueMap.stylesheetRemovals);
				this.#handleDependencies(valueMap);
				runWhenEagerDependenciesLoaded(() => this.#processMessage(valueMap, lock));
			}
			#handleDependencies(inputJson) {
				Console.debug("Handling dependencies");
				const dependencies = /* @__PURE__ */ new Map();
				for (const loadMode of [
					"INLINE",
					"EAGER",
					"LAZY"
				]) if (loadMode in inputJson) dependencies.set(loadMode, inputJson[loadMode]);
				if (dependencies.size > 0) this.#registry.getDependencyLoader().loadDependencies(dependencies);
			}
			/**
			* Performs the actual processing of a server message when all dependencies
			* have been loaded.
			*
			* @param valueMap - the message payload
			* @param lock - the lock object for this response
			*/
			#processMessage(valueMap, lock) {
				const serverId = getServerId(valueMap);
				if (serverId !== -1 && serverId !== this.getLastSeenServerSyncId()) Console.warn(`Processing message ${serverId} after the last seen id moved to ${this.getLastSeenServerSyncId()}`);
				const start = performance.now();
				if ("timings" in valueMap) this.#serverTimingInfo = valueMap.timings;
				try {
					const processUidlStart = performance.now();
					if ("constants" in valueMap) this.#registry.getConstantPool().importFromJson(valueMap.constants);
					if ("changes" in valueMap) this.#processChanges(valueMap);
					if (UIDL_KEY_EXECUTE in valueMap) Reactive.addPostFlushListener(() => Reactive.addPostFlushListener(() => this.#registry.getExecuteJavaScriptProcessor().execute(valueMap[UIDL_KEY_EXECUTE])));
					Console.debug(`handleUIDLMessage: ${Math.round(performance.now() - processUidlStart)} ms`);
					Reactive.flush();
					const meta = valueMap.meta;
					if (meta) {
						if (META_SESSION_EXPIRED in meta) {
							if (this.#nextResponseSessionExpiredHandler !== null) this.#nextResponseSessionExpiredHandler();
							else if (this.#registry.getUILifecycle().getState() !== UIState.TERMINATED) {
								this.#registry.getUILifecycle().setState(UIState.TERMINATED);
								setTimeout(() => this.#registry.getSystemErrorHandler().handleSessionExpiredError(null), SESSION_EXPIRED_HANDLING_DELAY);
							}
						} else if ("appError" in meta && this.#registry.getUILifecycle().getState() !== UIState.TERMINATED) {
							const error = meta.appError;
							this.#registry.getSystemErrorHandler().handleUnrecoverableError(error.caption, error.message, error.details, error.url, error.querySelector);
							this.#registry.getUILifecycle().setState(UIState.TERMINATED);
						}
					}
					this.#nextResponseSessionExpiredHandler = null;
				} finally {
					this.lastProcessingTime = Math.round(performance.now() - start);
					this.totalProcessingTime += this.lastProcessingTime;
					if (!this.#initialMessageHandled) {
						this.#initialMessageHandled = true;
						const fetchStart = getFetchStartTime();
						if (fetchStart !== 0) {
							const time = Math.round(Date.now() - fetchStart);
							Console.debug(`First response processed ${time} ms after fetchStart`);
						}
						this.#bootstrapTime = calculateBootstrapTime();
						if (isEnabled() && this.#bootstrapTime !== -1) logBootstrapTimings();
					}
					Console.debug(` Processing time was ${this.lastProcessingTime}ms`);
					this.#endRequestIfResponse(valueMap);
					this.resumeResponseHandling(lock);
					if (isEnabled()) getScheduler().scheduleDeferred(() => {
						logTimings();
						reset();
					});
				}
			}
			#processStylesheetRemovals(removals) {
				if (removals === null || removals.length === 0) return;
				Console.debug(`Processing ${removals.length} stylesheet removals`);
				for (const dependencyId of removals) this.#removeStylesheetById(dependencyId);
			}
			#removeStylesheetById(dependencyId) {
				removeStylesheetByIdFromDom(dependencyId);
				this.#registry.getResourceLoader().clearLoadedResourceById(dependencyId);
			}
			#processChanges(json) {
				const tree = this.#registry.getStateTree();
				const updatedNodes = processChanges(tree, Array.isArray(json.changes) ? json.changes : []);
				if (!this.#registry.getApplicationConfiguration().isProductionMode()) try {
					Console.debug("StateTree after applying changes:");
					Console.debug(tree.getRootNode().getDebugJson());
				} catch (e) {
					Console.error("Failed to log state tree");
					Console.error(e);
				}
				Reactive.addPostFlushListener(() => getScheduler().scheduleDeferred(() => updatedNodes.forEach((node) => this.#afterServerUpdates(node))));
			}
			#afterServerUpdates(node) {
				if (!node.isUnregistered()) {
					const domNode = node.getDomNode();
					if (domNode) callAfterServerUpdates(domNode);
				}
			}
			#endRequestIfResponse(json) {
				if (this.#isResponse(json)) {
					const requestResponseTracker = this.#registry.getRequestResponseTracker();
					if (requestResponseTracker.hasActiveRequest()) requestResponseTracker.endRequest();
					else Console.debug("Received a response while no request is active, ignoring it");
					this.#registry.getLoadingIndicatorStateHandler().stopLoading();
				}
			}
			#isResponse(json) {
				const meta = json.meta;
				return !meta || !(META_ASYNC in meta);
			}
			#forceMessageHandling() {
				this.#forceHandleMessage = null;
				if (this.#responseHandlingLocks.size > 0) {
					Console.warn("WARNING: response handling was never resumed, forcibly removing locks...");
					this.#responseHandlingLocks.clear();
				} else Console.warn(`Gave up waiting for message ${this.#ordering.getExpectedServerId()} from the server`);
				if (!this.#handlePendingMessages() && !this.#ordering.isEmpty()) {
					this.#ordering.clear();
					this.#registry.getMessageSender().requestResynchronize();
					if (this.#registry.getRequestResponseTracker().hasActiveRequest()) this.#registry.getRequestResponseTracker().endRequest();
					this.#registry.getMessageSender().resynchronize();
				}
			}
			/**
			* This method can be used to postpone rendering of a response for a short
			* period of time (e.g. to avoid the rendering process during animation).
			*
			* The Java method name is misspelled; it is kept verbatim to preserve public
			* API parity.
			*
			* @param lock - the lock
			*/
			suspendReponseHandling(lock) {
				this.#responseHandlingLocks.add(lock);
			}
			/**
			* Resumes the rendering process once all locks have been removed.
			*
			* @param lock - the lock
			*/
			resumeResponseHandling(lock) {
				this.#responseHandlingLocks.delete(lock);
				if (this.#responseHandlingLocks.size === 0) {
					this.#resetForceHandleTimer();
					if (!this.#ordering.isEmpty()) {
						Console.debug("No more response handling locks, handling pending requests.");
						this.#handlePendingMessages();
					}
				}
			}
			/**
			* Finds the next pending UIDL message and handles it (next pending is decided
			* based on the server id).
			*
			* @returns true if a message was handled, false otherwise
			*/
			#handlePendingMessages() {
				const index = this.#ordering.findNextHandlable();
				if (index !== -1) {
					const message = this.#ordering.remove(index);
					this.handleJSON(message);
					return true;
				}
				return false;
			}
			/**
			* Profiling data for the last response: last and total processing time, the
			* optional server timing info, and the bootstrap time. Mirrors the
			* getProfilingData JSNI in ApplicationConnection.java.
			*/
			getProfilingData() {
				const data = [this.lastProcessingTime, this.totalProcessingTime];
				if (this.#serverTimingInfo !== null) data.push(...this.#serverTimingInfo);
				else data.push(-1, -1);
				data.push(this.#bootstrapTime);
				return data;
			}
			/**
			* Gets the server id included in the last received response.
			*
			* This id can be used by connectors to determine whether new data has been
			* received from the server to avoid doing the same calculations multiple times.
			*
			* No guarantees are made for the structure of the id other than that there will
			* be a new unique value every time a new response with data from the server is
			* received.
			*
			* The initial id when no request has yet been processed is -1.
			*
			* @returns an id identifying the response
			*/
			getLastSeenServerSyncId() {
				return this.#ordering.getLastSeenServerSyncId();
			}
			/**
			* Gets the token (synchronizer token pattern) that the server uses to protect against
			* CSRF (Cross Site Request Forgery) attacks.
			*
			* @returns the CSRF token string
			*/
			getCsrfToken() {
				return this.#csrfToken;
			}
			/**
			* Gets the push connection identifier for this session. Used when establishing a push
			* connection with the client.
			*
			* @returns the push connection identifier string
			*/
			getPushId() {
				return this.#pushId;
			}
			/**
			* Checks if the first UIDL has been handled.
			*
			* @returns true if the initial UIDL has already been processed, false * otherwise
			*/
			isInitialUidlHandled() {
				return this.#bootstrapTime !== 0;
			}
			/**
			* Sets a temporary handler for session expiration. This handler will be triggered if
			* and only if the next server message tells that the session has expired.
			*
			* @param handler - the handler to use or null to remove a previously set handler
			*/
			setNextResponseSessionExpiredHandler(handler) {
				this.#nextResponseSessionExpiredHandler = handler;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/flow/shared/util/SharedUtil.js
/**
* Adds a single `parameter=value` query parameter to a URI. Mirrors
* SharedUtil.addGetParameter.
*
* @param uri - the URI to which the parameter should be added.
* @param parameter - the name of the parameter
* @param value - the value of the parameter
* @returns The modified URI with the parameter added
*/
function addGetParameter(uri, parameter, value) {
	return addGetParameters(uri, `${parameter}=${value}`);
}
/**
* Adds the given query parameters to a URI, before any fragment. Mirrors
* SharedUtil.addGetParameters.
*
* @param uri - The uri to which the parameters should be added.
* @param extraParams - One or more parameters in the format "a=b" or "c=d&e=f". An empty string is allowed but will not modify the url.
* @returns The modified URI with the get parameters in extraParams added.
*/
function addGetParameters(uri, extraParams) {
	if (extraParams === null || extraParams.length === 0) return uri;
	let base = uri;
	let fragment = null;
	const hashPosition = base.indexOf("#");
	if (hashPosition !== -1) {
		fragment = base.substring(hashPosition);
		base = base.substring(0, hashPosition);
	}
	base += base.includes("?") ? "&" : "?";
	base += extraParams;
	if (fragment !== null) base += fragment;
	return base;
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/AtmospherePushConnection.js
function atmosphere() {
	return window.vaadinPush?.atmosphere;
}
/** Whether the Atmosphere push library is loaded. */
function isAtmosphereLoaded() {
	return !!atmosphere();
}
/** Pushes a message over the given Atmosphere socket. */
function doPush(socket, message) {
	socket.push(message);
}
/** Unsubscribes the Atmosphere connection for the given url. */
function doDisconnect(url) {
	atmosphere().unsubscribeUrl(url);
}
/**
* Wires the connection url and callbacks onto the Atmosphere config and
* subscribes, returning the resulting socket. The header value supplier is
* read on every request, so it is wrapped in a function rather than assigned
* once.
*/
function doConnect(uri, config, callbacks) {
	config.url = uri;
	config.onOpen = callbacks.onOpen;
	config.onReopen = callbacks.onReopen;
	config.onMessage = callbacks.onMessage;
	config.onError = callbacks.onError;
	config.onTransportFailure = callbacks.onTransportFailure;
	config.onClose = callbacks.onClose;
	config.onReconnect = callbacks.onReconnect;
	config.onClientTimeout = callbacks.onClientTimeout;
	config.headers = { "X-Vaadin-LastSeenServerSyncId": () => callbacks.getLastSeenServerSyncId() };
	return atmosphere().subscribe(config);
}
var WEBSOCKET_FRAGMENT_SIZE, MESSAGE_DELIMITER, PUSH_MAPPING, VAADIN_PUSH_JS, VAADIN_PUSH_DEBUG_JS, REQUEST_TYPE_PARAMETER$3, REQUEST_TYPE_PUSH, UI_ID_PARAMETER$2, PUSH_ID_PARAMETER, FragmentedMessage, State, AtmospherePushConnection, atmospherePushConnectionFactory;
function init_AtmospherePushConnection() {
	return (init_AtmospherePushConnection = __esmMin((() => {
		init_MessageHandler();
		init_Console();
		WEBSOCKET_FRAGMENT_SIZE = 4095;
		MESSAGE_DELIMITER = "|";
		PUSH_MAPPING = "VAADIN/push";
		VAADIN_PUSH_JS = "VAADIN/static/push/vaadinPush-min.js";
		VAADIN_PUSH_DEBUG_JS = "VAADIN/static/push/vaadinPush.js";
		REQUEST_TYPE_PARAMETER$3 = "v-r";
		REQUEST_TYPE_PUSH = "push";
		UI_ID_PARAMETER$2 = "v-uiId";
		PUSH_ID_PARAMETER = "v-pushId";
		FragmentedMessage = class {
			#message;
			#index = 0;
			/**
			* Creates a new instance based on the given message.
			*
			* @param message - the message to wrap
			*/
			constructor(message) {
				this.#message = message;
			}
			/**
			* Checks if there is another fragment which can be retrieved using
			* {@link FragmentedMessage.getNextFragment} or if all fragments have been
			* retrieved.
			*
			* @returns true if there is another fragment to retrieve, false otherwise
			*/
			hasNextFragment() {
				return this.#index < this.#message.length;
			}
			/**
			* Gets the following fragment and increments the internal fragment counter so the
			* following call to this method will return the following fragment. This method
			* should not be called if all fragments have been received ({@link FragmentedMessage.hasNextFragment}
			* returns false).
			*
			* @returns the next fragment
			*/
			getNextFragment() {
				assert(this.hasNextFragment(), "No fragments left");
				let result;
				if (this.#index === 0) {
					const header = `${this.#message.length}${MESSAGE_DELIMITER}`;
					const fragmentLength = WEBSOCKET_FRAGMENT_SIZE - header.length;
					result = header + this.#getFragment(0, fragmentLength);
					this.#index += fragmentLength;
				} else {
					result = this.#getFragment(this.#index, this.#index + WEBSOCKET_FRAGMENT_SIZE);
					this.#index += WEBSOCKET_FRAGMENT_SIZE;
				}
				return result;
			}
			#getFragment(begin, end) {
				return this.#message.substring(begin, Math.min(this.#message.length, end));
			}
		};
		State = {
			CONNECT_PENDING: "CONNECT_PENDING",
			CONNECTED: "CONNECTED",
			DISCONNECT_PENDING: "DISCONNECT_PENDING",
			DISCONNECTED: "DISCONNECTED"
		};
		AtmospherePushConnection = class {
			#registry;
			#state = State.CONNECT_PENDING;
			#config;
			#socket = null;
			#pushUri = null;
			#transport = null;
			#url = "";
			#pendingDisconnectCommand = null;
			constructor(registry) {
				this.#registry = registry;
				registry.getUILifecycle().addHandler((event) => {
					if (event.getUiLifecycle().isTerminated()) {
						if (this.#state === State.DISCONNECT_PENDING || this.#state === State.DISCONNECTED) return;
						this.disconnect(() => {});
					}
				});
				this.#config = this.createConfig();
				this.#config.logLevel = "debug";
				this.#registry.getPushConfiguration().getParameters().forEach((value, key) => {
					if (value.toLowerCase() === "true" || value.toLowerCase() === "false") this.#config[key] = value.toLowerCase() === "true";
					else this.#config[key] = value;
				});
				this.#url = this.#computePushUrl();
				this.#runWhenAtmosphereLoaded(() => setTimeout(() => this.#connect(), 0));
			}
			#getConnectionStateHandler() {
				return this.#registry.getConnectionStateHandler();
			}
			#connect() {
				let pushUrl = this.#registry.getURIResolver().resolveVaadinUri(this.#url) ?? this.#url;
				pushUrl = addGetParameter(pushUrl, REQUEST_TYPE_PARAMETER$3, REQUEST_TYPE_PUSH);
				pushUrl = addGetParameter(pushUrl, UI_ID_PARAMETER$2, this.#registry.getApplicationConfiguration().getUIId());
				const pushId = this.#registry.getMessageHandler().getPushId();
				if (pushId !== null) pushUrl = addGetParameter(pushUrl, PUSH_ID_PARAMETER, pushId);
				Console.debug("Establishing push connection");
				this.#pushUri = pushUrl;
				this.#socket = doConnect(pushUrl, this.#config, {
					onOpen: (response) => this.onOpen(response),
					onReopen: (response) => this.onReopen(response),
					onMessage: (response) => this.onMessage(response),
					onError: (response) => this.onError(response),
					onTransportFailure: () => this.onTransportFailure(),
					onClose: (response) => this.onClose(response),
					onReconnect: (request, response) => this.onReconnect(request, response),
					onClientTimeout: (response) => this.onClientTimeout(response),
					getLastSeenServerSyncId: () => this.#registry.getMessageHandler().getLastSeenServerSyncId()
				});
			}
			#computePushUrl() {
				const pushConfiguration = this.#registry.getPushConfiguration();
				const applicationConfiguration = this.#registry.getApplicationConfiguration();
				const pushServletMapping = pushConfiguration.getPushServletMapping();
				if (pushServletMapping === null || pushServletMapping.trim() === "" || pushServletMapping === "/") {
					let url = PUSH_MAPPING;
					let serviceUrl = applicationConfiguration.getServiceUrl();
					if (serviceUrl !== ".") {
						if (!serviceUrl.endsWith("/")) serviceUrl += "/";
						url = serviceUrl + url;
					}
					return url;
				}
				let mapping = pushServletMapping;
				const contextRootUrl = applicationConfiguration.getContextRootUrl();
				if (contextRootUrl.endsWith("/") && mapping.startsWith("/")) mapping = mapping.substring(1);
				return contextRootUrl + mapping + PUSH_MAPPING;
			}
			isActive() {
				return this.#state === State.CONNECT_PENDING || this.#state === State.CONNECTED;
			}
			isBidirectional() {
				if (this.#transport === null || this.#transport !== "websocket") return false;
				if (this.#registry.getPushConfiguration().isAlwaysXhrToServer()) return false;
				return true;
			}
			push(message) {
				if (!this.isBidirectional()) throw new Error("This server to client push connection should not be used to send client to server messages");
				if (this.#state === State.CONNECTED) {
					const messageJson = stringify(message);
					Console.debug(`Sending push (${this.#transport}) message to server: ${messageJson}`);
					if (this.#transport === "websocket") {
						const fragmented = new FragmentedMessage(messageJson);
						while (fragmented.hasNextFragment()) doPush(this.#socket, fragmented.getNextFragment());
					} else doPush(this.#socket, messageJson);
					return;
				}
				if (this.#state === State.CONNECT_PENDING) {
					this.#getConnectionStateHandler().pushNotConnected(message);
					return;
				}
				throw new Error("Can not push after disconnecting");
			}
			getConfig() {
				return this.#config;
			}
			onReopen(response) {
				Console.debug(`Push connection re-established using ${response.transport}`);
				this.onConnect(response);
			}
			onOpen(response) {
				Console.debug(`Push connection established using ${response.transport}`);
				this.onConnect(response);
			}
			/**
			* Called whenever a server push connection is established (or re-established).
			*
			* @param response - the response
			*/
			onConnect(response) {
				this.#transport = response.transport;
				switch (this.#state) {
					case State.CONNECT_PENDING:
						this.#state = State.CONNECTED;
						this.#getConnectionStateHandler().pushOk(this);
						break;
					case State.DISCONNECT_PENDING:
						this.#state = State.CONNECTED;
						assert(this.#pendingDisconnectCommand !== null, "No pending disconnect command");
						this.disconnect(this.#pendingDisconnectCommand);
						break;
					case State.CONNECTED: break;
					default: throw new Error(`Got onOpen event when connection state is ${this.#state}. This should never happen.`);
				}
			}
			disconnect(command) {
				switch (this.#state) {
					case State.CONNECT_PENDING:
						this.#state = State.DISCONNECT_PENDING;
						this.#pendingDisconnectCommand = command;
						break;
					case State.CONNECTED:
						Console.debug("Closing push connection");
						doDisconnect(this.#pushUri);
						this.#state = State.DISCONNECTED;
						command();
						break;
					default: throw new Error("Can not disconnect more than once");
				}
			}
			/**
			* Called whenever a message is received by Atmosphere.
			*
			* @param response - the Atmosphere response object, which contains the message
			*/
			onMessage(response) {
				const message = response.responseBody;
				const json = parseJson(message);
				if (json === null) this.#getConnectionStateHandler().pushInvalidContent(this, message);
				else {
					Console.debug(`Received push (${this.getTransportType()}) message: ${message}`);
					this.#registry.getMessageHandler().handleMessage(json);
				}
			}
			onTransportFailure() {
				Console.warn("Push connection using the primary method failed. Trying the fallback transport.");
			}
			/**
			* Called if the push connection fails.
			*
			* Atmosphere will automatically retry the connection until successful.
			*
			* @param response - the Atmosphere response for the failed connection
			*/
			onError(response) {
				this.#state = State.DISCONNECTED;
				this.#getConnectionStateHandler().pushError(this, response);
			}
			/**
			* Called when the push connection has been closed.
			*
			* This does not necessarily indicate an error and Atmosphere might try to
			* reconnect or downgrade to the fallback transport automatically.
			*
			* @param response - the Atmosphere response which was closed
			*/
			onClose(response) {
				this.#state = State.CONNECT_PENDING;
				this.#getConnectionStateHandler().pushClosed(this, response);
			}
			/**
			* Called when the Atmosphere client side timeout occurs.
			*
			* The connection will be closed at this point and reconnect will not happen
			* automatically.
			*
			* @param response - the Atmosphere response which was used when the timeout
			*          occurred
			*/
			onClientTimeout(response) {
				this.#state = State.DISCONNECTED;
				this.#getConnectionStateHandler().pushClientTimeout(this, response);
			}
			/**
			* Called when the push connection has lost the connection to the server and
			* will proceed to try to re-establish the connection.
			*
			* @param _request - the Atmosphere request
			* @param _response - the Atmosphere response
			*/
			onReconnect(_request, _response) {
				if (this.#state === State.CONNECTED) this.#state = State.CONNECT_PENDING;
				this.#getConnectionStateHandler().pushReconnectPending(this);
			}
			/**
			* Creates the default Atmosphere configuration object.
			*
			* @returns the Atmosphere configuration object
			*/
			createConfig() {
				return {
					transport: "websocket",
					maxStreamingLength: 1e6,
					fallbackTransport: "long-polling",
					contentType: "application/json; charset=UTF-8",
					reconnectInterval: 5e3,
					withCredentials: true,
					maxWebsocketErrorRetries: 12,
					timeout: -1,
					maxReconnectOnClose: 1e7,
					trackMessageLength: true,
					enableProtocol: true,
					handleOnlineOffline: false,
					executeCallbackBeforeReconnect: true,
					messageDelimiter: String.fromCharCode(MESSAGE_DELIMITER.charCodeAt(0))
				};
			}
			#runWhenAtmosphereLoaded(command) {
				if (isAtmosphereLoaded()) {
					command();
					return;
				}
				const pushJs = this.#registry.getApplicationConfiguration().isProductionMode() ? VAADIN_PUSH_JS : VAADIN_PUSH_DEBUG_JS;
				const pushScriptUrl = this.#registry.getApplicationConfiguration().getServiceUrl() + pushJs;
				Console.debug(`Loading ${pushJs}`);
				const listener = {
					onLoad: (event) => {
						if (isAtmosphereLoaded()) {
							Console.debug(`${pushJs} loaded`);
							command();
						} else listener.onError(event);
					},
					onError: (event) => {
						this.#getConnectionStateHandler().pushScriptLoadError(event.getResourceData());
					}
				};
				this.#registry.getResourceLoader().loadScript(pushScriptUrl, listener);
			}
			getTransportType() {
				return this.#transport;
			}
		};
		atmospherePushConnectionFactory = (registry) => new AtmospherePushConnection(registry);
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/ConstantPool.js
var ConstantPool;
function init_ConstantPool() {
	return (init_ConstantPool = __esmMin((() => {
		ConstantPool = class {
			#constants = /* @__PURE__ */ new Map();
			/**
			* Imports new constants into this pool.
			*
			* @param json - a JSON object mapping constant keys to constant values, not
			*          `null`
			*/
			importFromJson(json) {
				for (const key of Object.keys(json)) {
					assert(!this.#constants.has(key), "ConstantPool already contains a value for the imported key");
					const value = json[key];
					assert(value !== null && value !== void 0, "ConstantPool constant value must not be null");
					this.#constants.set(key, value);
				}
			}
			/**
			* Checks whether this constant pool contains a value for the given key.
			*
			* @param key - the key to check, not `null`
			* @returns `true` if there is a constant for the given key; otherwise `false`
			*/
			has(key) {
				return this.#constants.has(key);
			}
			/**
			* Gets the constant with a given key.
			*
			* @param key - the key to get a constant for, not `null`
			* @typeParam T - the constant type
			* @returns the constant value, or `null` if there is no constant with the
			*          given key
			*/
			get(key) {
				return this.#constants.get(key) ?? null;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/DependencyLoader.js
var KEY_URL, KEY_TYPE, KEY_CONTENTS, KEY_ID, DependencyLoader;
function init_DependencyLoader() {
	return (init_DependencyLoader = __esmMin((() => {
		init_EagerDependencyTracker();
		init_Console();
		init_TrackingScheduler();
		KEY_URL = "url";
		KEY_TYPE = "type";
		KEY_CONTENTS = "contents";
		KEY_ID = "id";
		DependencyLoader = class {
			#registry;
			#eagerListener = {
				onLoad: () => endEagerDependencyLoading(),
				onError: (event) => {
					Console.error(`'${event.getResourceData()}' could not be loaded.`);
					endEagerDependencyLoading();
				}
			};
			#lazyListener = {
				onLoad: () => {},
				onError: (event) => {
					Console.error(`${event.getResourceData()} could not be loaded.`);
				}
			};
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			#loadLazyDependency(dependencyUrl, loader) {
				loader(dependencyUrl, this.#lazyListener);
			}
			#loadDependencyEagerly(data, loader) {
				startEagerDependencyLoading();
				loader(data, this.#eagerListener);
			}
			/**
			* Triggers loading of the given dependencies.
			*
			* @param clientDependencies - the map of the dependencies to load, divided into groups by load mode, not `null`.
			*/
			loadDependencies(clientDependencies) {
				const lazyDependencies = /* @__PURE__ */ new Map();
				clientDependencies.forEach((dependencies, mode) => {
					this.#extractLazyDependenciesAndLoadOthers(mode, dependencies).forEach((loader, url) => {
						lazyDependencies.set(url, loader);
					});
				});
				if (lazyDependencies.size > 0) runWhenEagerDependenciesLoaded(() => {
					getScheduler().scheduleDeferred(() => {
						Console.debug("Finished loading eager dependencies, loading lazy.");
						lazyDependencies.forEach((loader, url) => this.#loadLazyDependency(url, loader));
					});
				});
			}
			#extractLazyDependenciesAndLoadOthers(loadMode, dependencies) {
				const lazyDependencies = /* @__PURE__ */ new Map();
				for (const dependency of dependencies) {
					const type = dependency[KEY_TYPE];
					const dependencyId = KEY_ID in dependency ? dependency[KEY_ID] : null;
					const resourceLoader = this.#getResourceLoader(type, loadMode, dependencyId);
					if (type === "DYNAMIC_IMPORT") this.#loadDependencyEagerly(dependency[KEY_URL], resourceLoader);
					else switch (loadMode) {
						case "EAGER":
							this.#loadDependencyEagerly(this.#getDependencyUrl(dependency), resourceLoader);
							break;
						case "LAZY":
							lazyDependencies.set(this.#getDependencyUrl(dependency), resourceLoader);
							break;
						case "INLINE":
							this.#loadDependencyEagerly(dependency[KEY_CONTENTS], resourceLoader);
							break;
						default: throw new Error(`Unknown load mode = ${loadMode}`);
					}
				}
				return lazyDependencies;
			}
			#getDependencyUrl(dependency) {
				return this.#registry.getURIResolver().resolveVaadinUri(dependency[KEY_URL]);
			}
			#getResourceLoader(resourceType, loadMode, dependencyId) {
				const resourceLoader = this.#registry.getResourceLoader();
				const inline = loadMode === "INLINE";
				switch (resourceType) {
					case "STYLESHEET":
						if (inline) return (data, listener) => resourceLoader.inlineStyleSheet(data, listener, dependencyId);
						return (url, listener) => resourceLoader.loadStylesheet(url, listener, dependencyId);
					case "JAVASCRIPT":
						if (inline) return (data, listener) => resourceLoader.inlineScript(data, listener);
						return (scriptUrl, listener) => resourceLoader.loadScript(scriptUrl, listener, false, true);
					case "JS_MODULE":
						if (inline) throw new Error("Inline load mode is not supported for JsModule.");
						return (scriptUrl, listener) => resourceLoader.loadJsModule(scriptUrl, listener, false, true);
					case "DYNAMIC_IMPORT": return (expression, listener) => resourceLoader.loadDynamicImport(expression, listener);
					default: throw new Error(`Unknown dependency type ${resourceType}`);
				}
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ConnectionMessageType.js
/**
* Checks if the first type is of higher priority than the given type.
*
* @param type - the type to compare from
* @param other - the type to compare to
* @returns true if the first type has higher priority than the given type, false
*          otherwise
*/
function isHigherPriorityThan(type, other) {
	return PRIORITY[type] > PRIORITY[other];
}
var ConnectionMessageType, PRIORITY;
function init_ConnectionMessageType() {
	return (init_ConnectionMessageType = __esmMin((() => {
		ConnectionMessageType = {
			HEARTBEAT: "HEARTBEAT",
			PUSH: "PUSH",
			XHR: "XHR"
		};
		PRIORITY = {
			HEARTBEAT: 0,
			PUSH: 1,
			XHR: 2
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ConnectionStateHandler.js
var UIDL_REFRESH_TOKEN;
function init_ConnectionStateHandler() {
	return (init_ConnectionStateHandler = __esmMin((() => {
		UIDL_REFRESH_TOKEN = "Vaadin-Refresh";
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ReconnectStateMachine.js
var ReconnectStateMachine;
function init_ReconnectStateMachine() {
	return (init_ReconnectStateMachine = __esmMin((() => {
		init_ConnectionIndicator();
		init_ConnectionMessageType();
		init_Console();
		ReconnectStateMachine = class {
			#reconnectionCause = null;
			#reconnectAttempt = 0;
			#registry;
			#scheduleReconnect;
			#cancelScheduledReconnect;
			/**
			* Creates a new instance connected to the given registry, driving the retry
			* mechanics the full handler owns.
			*
			* @param registry - the registry, narrowed to the members this machine reads
			* @param scheduleReconnect - schedules the next reconnect attempt, receiving
			*          the message which did not reach the server, or null if no message
			*          was involved (heartbeat or push connection failed)
			* @param cancelScheduledReconnect - cancels a reconnect this machine has
			*          already scheduled; defaults to doing nothing, for a caller that
			*          schedules nothing cancellable
			*/
			constructor(registry, scheduleReconnect, cancelScheduledReconnect = () => {}) {
				this.#registry = registry;
				this.#scheduleReconnect = scheduleReconnect;
				this.#cancelScheduledReconnect = cancelScheduledReconnect;
			}
			/**
			* Checks if we are currently trying to reconnect.
			*
			* @returns true if we have noted a problem and are trying to re-establish
			*          server connection, false otherwise
			*/
			isReconnecting() {
				return this.#reconnectionCause !== null;
			}
			/** The current reconnection cause, or null if not reconnecting. */
			getReconnectionCause() {
				return this.#reconnectionCause;
			}
			/** The number of reconnection attempts made for the current cause. */
			getReconnectAttempt() {
				return this.#reconnectAttempt;
			}
			/**
			* Called whenever an error occurs in communication which should be handled by
			* showing the reconnect dialog and retrying communication until successful
			* again.
			*
			* @param type - The type of failure detected
			* @param payload - The message which did not reach the server, or null if no
			*          message was involved (heartbeat or push connection failed)
			*/
			handleRecoverableError(type, payload) {
				if (!this.#registry.getUILifecycle().isRunning()) return;
				setState(RECONNECTING);
				if (!this.isReconnecting()) {
					this.#reconnectionCause = type;
					Console.warn(`Reconnecting because of ${type} failure`);
				} else if (isHigherPriorityThan(type, this.#reconnectionCause)) {
					Console.warn(`Now reconnecting because of ${type} failure`);
					this.#reconnectionCause = type;
				}
				if (this.#reconnectionCause !== type) return;
				this.#reconnectAttempt++;
				Console.debug(`Reconnect attempt ${this.#reconnectAttempt} for ${type}`);
				if (this.#reconnectAttempt >= this.#registry.getReconnectConfiguration().getReconnectAttempts()) this.giveUp();
				else this.#scheduleReconnect(payload);
			}
			/** Resolves the temporary error for the given type if it is the active cause. Mirrors resolveTemporaryError. */
			resolveTemporaryError(type) {
				if (this.#reconnectionCause !== type) return;
				this.#reconnectionCause = null;
				this.#reconnectAttempt = 0;
				this.#cancelScheduledReconnect();
				if (type === ConnectionMessageType.HEARTBEAT) setState(CONNECTED);
				else this.#registry.getLoadingIndicatorStateHandler().stopLoading();
				Console.debug("Re-established connection to server");
			}
			/** Stops reconnecting and goes to CONNECTION_LOST. Mirrors giveUp. */
			giveUp() {
				this.#reconnectionCause = null;
				if (this.#registry.getRequestResponseTracker().hasActiveRequest()) this.#registry.getRequestResponseTracker().endRequest();
				setState(CONNECTION_LOST);
				this.#registry.getHeartbeat().setInterval(0);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/DefaultConnectionStateHandler.js
var SC_FORBIDDEN, SC_NOT_FOUND, SC_UNAUTHORIZED, TERMINATED, DefaultConnectionStateHandler;
function init_DefaultConnectionStateHandler() {
	return (init_DefaultConnectionStateHandler = __esmMin((() => {
		init_ConnectionIndicator();
		init_ConnectionMessageType();
		init_ConnectionStateHandler();
		init_ReconnectStateMachine();
		init_Console();
		SC_FORBIDDEN = 403;
		SC_NOT_FOUND = 404;
		SC_UNAUTHORIZED = 401;
		TERMINATED = "TERMINATED";
		DefaultConnectionStateHandler = class {
			#registry;
			#machine;
			#scheduledReconnect = null;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
				this.#machine = new ReconnectStateMachine(registry, (payload) => this.scheduleReconnect(payload), () => this.#cancelScheduledReconnect());
				registry.getUILifecycle().addHandler((event) => {
					if (event.getUiLifecycle().isTerminated()) {
						if (this.#machine.isReconnecting()) {
							this.#machine.giveUp();
							this.#stopApplication();
						}
						this.#cancelScheduledReconnect();
					}
				});
				this.#registerConnectionStateEventHandlers();
			}
			xhrException(xhrConnectionError) {
				this.#machine.handleRecoverableError(ConnectionMessageType.XHR, xhrConnectionError.getPayload());
			}
			heartbeatException(_request, exception) {
				Console.error(`Heartbeat exception: ${exception.message}`);
				this.#machine.handleRecoverableError(ConnectionMessageType.HEARTBEAT, null);
			}
			heartbeatInvalidStatusCode(xhr) {
				const statusCode = xhr.status;
				Console.warn(`Heartbeat request returned ${statusCode}`);
				if (statusCode === SC_FORBIDDEN) {
					this.#registry.getSystemErrorHandler().handleSessionExpiredError(null);
					this.#stopApplication();
				} else if (statusCode === SC_NOT_FOUND) {} else this.#machine.handleRecoverableError(ConnectionMessageType.HEARTBEAT, null);
			}
			heartbeatOk() {
				if (this.#machine.isReconnecting()) this.#machine.resolveTemporaryError(ConnectionMessageType.HEARTBEAT);
			}
			/**
			* Called after a problem occurred.
			*
			* This method is responsible for re-sending the payload to the server (if not
			* null) or re-send a heartbeat request at some point
			*
			* @param payload - the payload that did not reach the server, null if the
			*          problem was detected by a heartbeat
			*/
			scheduleReconnect(payload) {
				if (this.#machine.getReconnectAttempt() === 1) {
					Console.debug(`Immediate reconnect attempt for ${JSON.stringify(payload)}`);
					this.doReconnect(payload);
				} else this.#scheduledReconnect = setTimeout(() => {
					this.#cancelScheduledReconnect();
					Console.debug(`Scheduled reconnect attempt ${this.#machine.getReconnectAttempt()} for ${JSON.stringify(payload)}`);
					this.doReconnect(payload);
				}, this.#registry.getReconnectConfiguration().getReconnectInterval());
			}
			#cancelScheduledReconnect() {
				if (this.#scheduledReconnect !== null) {
					clearTimeout(this.#scheduledReconnect);
					this.#scheduledReconnect = null;
				}
			}
			/**
			* Re-sends the payload to the server (if not null) or re-sends a heartbeat
			* request immediately.
			*
			* @param payload - the payload that did not reach the server, null if the
			*          problem was detected by a heartbeat
			*/
			doReconnect(payload) {
				if (!this.#registry.getUILifecycle().isRunning()) {
					Console.warn("Trying to reconnect after application has been stopped. Giving up");
					return;
				}
				if (payload !== null && payload !== void 0) {
					Console.debug("Trying to re-establish server connection (UIDL)...");
					this.#registry.getRequestResponseTracker().fireReconnectionAttempt(this.#machine.getReconnectAttempt());
				} else {
					Console.debug("Trying to re-establish server connection (heartbeat)...");
					this.#registry.getHeartbeat().send();
				}
			}
			/**
			* Gets the text to show in the reconnect dialog after giving up (reconnect
			* limit reached).
			*
			* @param reconnectAttempt - The number of the current reconnection attempt
			* @returns The text to show in the reconnect dialog after giving up
			*/
			getDialogTextGaveUp(reconnectAttempt) {
				return this.#registry.getReconnectConfiguration().getDialogTextGaveUp().replace("{0}", `${reconnectAttempt}`);
			}
			/**
			* Gets the text to show in the reconnect dialog.
			*
			* @param reconnectAttempt - The number of the current reconnection attempt
			* @returns The text to show in the reconnect dialog
			*/
			getDialogText(reconnectAttempt) {
				return this.#registry.getReconnectConfiguration().getDialogText().replace("{0}", `${reconnectAttempt}`);
			}
			configurationUpdated() {
				const dialogText = this.#registry.getReconnectConfiguration().getDialogText();
				if (dialogText !== null) setProperty("reconnectingText", dialogText);
				const dialogTextGaveUp = this.#registry.getReconnectConfiguration().getDialogTextGaveUp();
				if (dialogTextGaveUp !== null) setProperty("offlineText", dialogTextGaveUp);
			}
			xhrInvalidContent(xhrConnectionError) {
				this.#registry.getRequestResponseTracker().endRequest();
				const responseText = xhrConnectionError.getXhr().responseText;
				if (!this.#redirectIfRefreshToken(responseText)) this.#handleUnrecoverableCommunicationError(`Invalid JSON response from server: ${responseText}`, xhrConnectionError);
			}
			pushInvalidContent(pushConnection, message) {
				if (pushConnection.isBidirectional()) this.#registry.getRequestResponseTracker().endRequest();
				if (!this.#redirectIfRefreshToken(message)) this.#handleUnrecoverableCommunicationError(`Invalid JSON from server: ${message}`, null);
			}
			xhrInvalidStatusCode(xhrConnectionError) {
				const statusCode = xhrConnectionError.getXhr().status;
				Console.warn(`Server returned ${statusCode} for xhr`);
				if (statusCode === SC_UNAUTHORIZED) {
					this.#registry.getRequestResponseTracker().endRequest();
					this.handleUnauthorized(xhrConnectionError);
				} else this.#machine.handleRecoverableError(ConnectionMessageType.XHR, xhrConnectionError.getPayload());
			}
			/**
			* Called when the server returns 401 Unauthorized.
			*
			* @param xhrConnectionError - the error that occurred
			*/
			handleUnauthorized(_xhrConnectionError) {
				this.#registry.getSystemErrorHandler().handleSessionExpiredError("");
				this.#stopApplication();
			}
			#stopApplication() {
				const uiLifecycle = this.#registry.getUILifecycle();
				if (uiLifecycle.getState() !== TERMINATED) uiLifecycle.setState(TERMINATED);
			}
			#handleUnrecoverableCommunicationError(details, xhrConnectionError) {
				let statusCode = -1;
				if (xhrConnectionError !== null) statusCode = xhrConnectionError.getXhr().status;
				this.handleCommunicationError(details, statusCode);
				this.#stopApplication();
			}
			/**
			* Called when a communication error occurs and we cannot recover from it.
			*
			* @param details - message details or `null` if there are no details
			* @param statusCode - the status code
			*/
			handleCommunicationError(details, _statusCode) {
				this.#registry.getSystemErrorHandler().handleUnrecoverableError("", details, "", "", null);
			}
			xhrOk() {
				if (this.#machine.isReconnecting()) this.#machine.resolveTemporaryError(ConnectionMessageType.XHR);
			}
			pushOk(pushConnection) {
				if (this.#machine.isReconnecting()) {
					this.#machine.resolveTemporaryError(ConnectionMessageType.PUSH);
					if (this.#registry.getRequestResponseTracker().hasActiveRequest()) {
						this.#registry.getRequestResponseTracker().endRequest();
						if (pushConnection.isBidirectional()) {
							Console.debug("Flush pending messages after PUSH reconnection.");
							this.#registry.getMessageSender().sendInvocationsToServer();
						}
					}
				}
			}
			pushScriptLoadError(resourceUrl) {
				this.handleCommunicationError(`${resourceUrl} could not be loaded. Push will not work.`, 0);
			}
			pushNotConnected(payload) {
				this.#machine.handleRecoverableError(ConnectionMessageType.PUSH, payload);
			}
			pushReconnectPending(pushConnection) {
				Console.debug("Reopening push connection");
				if (pushConnection.isBidirectional()) this.#machine.handleRecoverableError(ConnectionMessageType.PUSH, null);
			}
			pushError(_pushConnection, response) {
				const transport = response.transport ?? "unknown";
				this.handleCommunicationError(`Push connection using ${transport} failed!`, -1);
			}
			pushClientTimeout(_pushConnection, _response) {
				this.handleCommunicationError("Client unexpectedly disconnected. Ensure client timeout is disabled.", -1);
			}
			pushClosed(_pushConnection, _response) {
				Console.debug("Push connection closed");
			}
			#resumeHeartbeats() {
				if (this.#registry.getHeartbeat().getInterval() >= 0) this.#registry.getHeartbeat().setInterval(this.#registry.getApplicationConfiguration().getHeartbeatInterval());
			}
			#redirectIfRefreshToken(message) {
				const match = new RegExp(`${UIDL_REFRESH_TOKEN}(:\\s*(.*?))?(\\s|$)`).exec(message);
				if (match !== null) {
					redirect(match[2] ?? null);
					return true;
				}
				return false;
			}
			#registerConnectionStateEventHandlers() {
				window.addEventListener("offline", () => {
					this.#machine.giveUp();
				});
				window.addEventListener("online", () => {
					this.#resumeHeartbeats();
					this.#machine.handleRecoverableError(ConnectionMessageType.HEARTBEAT, null);
				});
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/Heartbeat.js
var REQUEST_TYPE_PARAMETER$2, REQUEST_TYPE_HEARTBEAT, UI_ID_PARAMETER$1, HeartbeatTimer, Heartbeat;
function init_Heartbeat() {
	return (init_Heartbeat = __esmMin((() => {
		init_Console();
		REQUEST_TYPE_PARAMETER$2 = "v-r";
		REQUEST_TYPE_HEARTBEAT = "heartbeat";
		UI_ID_PARAMETER$1 = "v-uiId";
		HeartbeatTimer = class {
			#handle = null;
			#task;
			/**
			* Creates a timer that runs the given task when it fires.
			*
			* @param task - the task to run
			*/
			constructor(task) {
				this.#task = task;
			}
			schedule(ms) {
				this.cancel();
				this.#handle = setTimeout(() => {
					this.#handle = null;
					this.#task();
				}, ms);
			}
			cancel() {
				if (this.#handle !== null) {
					clearTimeout(this.#handle);
					this.#handle = null;
				}
			}
		};
		Heartbeat = class {
			#timer = new HeartbeatTimer(() => this.send());
			#uri = "";
			#interval = -1;
			#registry;
			constructor(registry) {
				this.#registry = registry;
				const configuration = registry.getApplicationConfiguration();
				this.setInterval(configuration.getHeartbeatInterval());
				let uri = configuration.getServiceUrl();
				uri = addGetParameter(uri, REQUEST_TYPE_PARAMETER$2, REQUEST_TYPE_HEARTBEAT);
				uri = addGetParameter(uri, UI_ID_PARAMETER$1, configuration.getUIId());
				this.#uri = uri;
				registry.getUILifecycle().addHandler((event) => {
					if (event.getUiLifecycle().isTerminated()) this.setInterval(-1);
				});
			}
			/** Sends a heartbeat request to the server. */
			send() {
				this.#timer.cancel();
				if (this.#interval < 0) {
					Console.debug("Heartbeat terminated, skipping request");
					return;
				}
				Console.debug("Sending heartbeat request...");
				const xhr = new XMLHttpRequest();
				const onFail = (error) => {
					if (error === null) {
						if (this.#interval < 0) Console.debug("Heartbeat terminated, ignoring failure.");
						else this.#registry.getConnectionStateHandler().heartbeatInvalidStatusCode(xhr);
					} else this.#registry.getConnectionStateHandler().heartbeatException(xhr, error);
					this.schedule();
				};
				xhr.onreadystatechange = () => {
					if (xhr.readyState === XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							this.#registry.getConnectionStateHandler().heartbeatOk();
							this.schedule();
							xhr.onreadystatechange = null;
							return;
						}
						onFail(null);
						xhr.onreadystatechange = null;
					}
				};
				try {
					xhr.open("POST", this.#uri, true);
					xhr.withCredentials = true;
					xhr.send();
				} catch (error) {
					Console.error(error);
					onFail(error);
					xhr.onreadystatechange = null;
				}
			}
			/**
			* Gets the heartbeat interval.
			*
			* @returns the interval at which heartbeat requests are sent.
			*/
			getInterval() {
				return this.#interval;
			}
			/** Reschedules the heartbeat to match the interval; a negative interval disables it. */
			schedule() {
				if (this.#interval > 0) {
					Console.debug(`Scheduling heartbeat in ${this.#interval} seconds`);
					this.#timer.schedule(this.#interval * 1e3);
				} else {
					Console.debug("Disabling heartbeat");
					this.#timer.cancel();
				}
			}
			/**
			* Changes the heartbeatInterval in runtime and applies it.
			*
			* @param heartbeatInterval - new interval in seconds.
			*/
			setInterval(heartbeatInterval) {
				Console.debug(`Setting heartbeat interval to ${heartbeatInterval}sec.`);
				this.#interval = heartbeatInterval;
				this.schedule();
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/LoadingIndicatorStateHandler.js
var SILENT_EVENT_TYPES, LoadingIndicatorStateHandler;
function init_LoadingIndicatorStateHandler() {
	return (init_LoadingIndicatorStateHandler = __esmMin((() => {
		init_TrackingScheduler();
		init_ConnectionIndicator();
		init_JsonConstants();
		SILENT_EVENT_TYPES = /* @__PURE__ */ new Set([
			"keydown",
			"keypress",
			"keyup",
			"mousemove",
			"pointermove",
			"pointerrawupdate",
			"touchmove",
			"beforeinput",
			"input",
			"scroll",
			"wheel",
			"drag",
			"dragover"
		]);
		LoadingIndicatorStateHandler = class {
			#registry;
			#loading = false;
			#showLoading = false;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/** Shows loading when a non-silent request starts. */
			startLoading() {
				if (!this.#showLoading) return;
				this.#update();
			}
			/** Hides loading when no requests remain active (debounced). */
			stopLoading() {
				if (this.#registry.getRequestResponseTracker().hasActiveRequest()) return;
				this.#showLoading = false;
				getScheduler().scheduleDeferred(() => this.#update());
			}
			/**
			* Processes an RPC message to determine if a loading indicator should be displayed.
			*
			* @param rpcType - the type of RPC request being processed
			* @param eventType - for event RPC requests, the name of the event, otherwise
			*          `null`
			*/
			processMessage(rpcType, eventType) {
				if (!(rpcType === JsonConstants.RPC_TYPE_EVENT && eventType !== null && SILENT_EVENT_TYPES.has(eventType))) this.#showLoading = true;
			}
			#update() {
				if (this.#showLoading === this.#loading) return;
				this.#loading = this.#showLoading;
				if (this.#loading) loadingStarted();
				else loadingFinished();
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/Poller.js
var POLL_DOM_EVENT_NAME, Poller;
function init_Poller() {
	return (init_Poller = __esmMin((() => {
		POLL_DOM_EVENT_NAME = "ui-poll";
		Poller = class {
			#pollHandle = null;
			#registry;
			/**
			* Creates a new instance using the given registry.
			*
			* @param registry - the registry
			*/
			constructor(registry) {
				this.#registry = registry;
				registry.getUILifecycle().addHandler((event) => {
					if (event.getUiLifecycle().isTerminated()) this.#stop();
				});
			}
			#stop() {
				if (this.#pollHandle !== null) {
					clearInterval(this.#pollHandle);
					this.#pollHandle = null;
				}
			}
			/**
			* Sets the polling interval.
			*
			* Changing the polling interval will stop any current polling and schedule a
			* new poll to happen after the given interval.
			*
			* @param interval - The interval to use
			*/
			setInterval(interval) {
				this.#stop();
				if (interval >= 0) {
					if (interval === 0) throw new Error("must be positive");
					this.#pollHandle = setInterval(() => this.poll(), interval);
				}
			}
			/** Polls the server for changes by sending a poll event on the root node. */
			poll() {
				const stateTree = this.#registry.getStateTree();
				stateTree.sendEventToServer(stateTree.getRootNode(), POLL_DOM_EVENT_NAME, null);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/PushConfiguration.js
function isPushModeEnabled(propertyValue) {
	if (propertyValue === null || propertyValue === void 0) return false;
	return propertyValue !== "DISABLED";
}
var PUSHMODE_KEY, PUSH_SERVLET_MAPPING_KEY, ALWAYS_USE_XHR_TO_SERVER, PARAMETERS_KEY, PushConfiguration;
function init_PushConfiguration() {
	return (init_PushConfiguration = __esmMin((() => {
		init_NodeFeatures();
		init_Reactive();
		PUSHMODE_KEY = "pushMode";
		PUSH_SERVLET_MAPPING_KEY = "pushServletMapping";
		ALWAYS_USE_XHR_TO_SERVER = "alwaysXhrToServer";
		PARAMETERS_KEY = "parameters";
		PushConfiguration = class {
			#registry;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
				this.#getConfigurationMap().getProperty(PUSHMODE_KEY).addChangeListener((event) => this.#onPushModeChange(event));
			}
			/**
			* Called whenever the push mode is changed.
			*
			* @param event - the value change event for push mode
			*/
			#onPushModeChange(event) {
				const oldModeEnabled = isPushModeEnabled(event.getOldValue());
				const newModeEnabled = isPushModeEnabled(event.getNewValue());
				if (!oldModeEnabled && newModeEnabled) Reactive.addFlushListener(() => this.#registry.getMessageSender().setPushEnabled(true));
				else if (oldModeEnabled && !newModeEnabled) Reactive.addFlushListener(() => this.#registry.getMessageSender().setPushEnabled(false));
			}
			#getConfigurationMap() {
				return this.#registry.getStateTree().getRootNode().getMap(NodeFeatures.UI_PUSHCONFIGURATION);
			}
			/**
			* Gets the push servlet mapping configured or determined on the server.
			*
			* @returns the push servlet mapping configured or determined on the server or
			*          null if none has been configured
			*/
			getPushServletMapping() {
				const map = this.#getConfigurationMap();
				if (map.hasPropertyValue(PUSH_SERVLET_MAPPING_KEY)) return map.getProperty(PUSH_SERVLET_MAPPING_KEY).getValue();
				return null;
			}
			/**
			* Checks if XHR should be used for client -\> server messages even though we are using
			* a bidirectional push transport such as websockets.
			*
			* @returns true if XHR should always be used, false otherwise
			*/
			isAlwaysXhrToServer() {
				return this.#getConfigurationMap().hasPropertyValue(ALWAYS_USE_XHR_TO_SERVER);
			}
			/**
			* Gets all configured push parameters.
			*
			* The parameters configured on the server, including transports.
			*
			* @returns a map of all parameters configured on the server
			*/
			getParameters() {
				const parametersMap = this.#getConfigurationMap().getProperty(PARAMETERS_KEY).getValue().getMap(NodeFeatures.UI_PUSHCONFIGURATION_PARAMETERS);
				const parameters = /* @__PURE__ */ new Map();
				parametersMap.forEachProperty((property, key) => {
					parameters.set(key, property.getValue());
				});
				return parameters;
			}
			/**
			* Checks if push is enabled.
			*
			* @returns true if push is enabled, false otherwise
			*/
			isPushEnabled() {
				return isPushModeEnabled(this.#getConfigurationMap().getProperty(PUSHMODE_KEY).getValue());
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/Registry.js
function typeName(type) {
	return typeof type === "function" ? type.name : String(type);
}
var TOKEN, Registry;
function init_Registry() {
	return (init_Registry = __esmMin((() => {
		TOKEN = {
			MessageSender: "MessageSender",
			MessageHandler: "MessageHandler",
			ApplicationConnection: "ApplicationConnection",
			Heartbeat: "Heartbeat",
			ConnectionStateHandler: "ConnectionStateHandler",
			ServerRpcQueue: "ServerRpcQueue",
			ApplicationConfiguration: "ApplicationConfiguration",
			StateTree: "StateTree",
			PushConfiguration: "PushConfiguration",
			XhrConnection: "XhrConnection",
			URIResolver: "URIResolver",
			DependencyLoader: "DependencyLoader",
			SystemErrorHandler: "SystemErrorHandler",
			UILifecycle: "UILifecycle",
			RequestResponseTracker: "RequestResponseTracker",
			ReconnectConfiguration: "ReconnectConfiguration",
			ExecuteJavaScriptProcessor: "ExecuteJavaScriptProcessor",
			ServerConnector: "ServerConnector",
			ResourceLoader: "ResourceLoader",
			ConstantPool: "ConstantPool",
			ExistingElementMap: "ExistingElementMap",
			InitialPropertiesHandler: "InitialPropertiesHandler",
			Poller: "Poller",
			LoadingIndicatorStateHandler: "LoadingIndicatorStateHandler"
		};
		Registry = class {
			#lookupTable = /* @__PURE__ */ new Map();
			#resettable = /* @__PURE__ */ new Map();
			/**
			* Stores an instance of the given type.
			*
			* @param type - the type to store
			* @param instance - the instance to store
			* @typeParam T - the type
			*/
			set(type, instance) {
				assert(!this.#lookupTable.has(type), () => `Registry already has a class of type ${typeName(type)} registered`);
				this.#lookupTable.set(type, instance);
			}
			/**
			* Stores an instance created by the given supplier and remembers the supplier
			* so the instance can be recreated by reset(). Mirrors Registry.set(Class,
			* Supplier).
			*/
			setResettable(type, instanceSupplier) {
				this.set(type, instanceSupplier());
				this.#resettable.set(type, instanceSupplier);
			}
			/**
			* Gets the instance registered for the given type. Throws if none has been
			* registered. Mirrors Registry.get(Class).
			*/
			get(type) {
				assert(this.#lookupTable.has(type), () => `Tried to lookup type ${typeName(type)} but no instance has been registered`);
				return this.#lookupTable.get(type);
			}
			/**
			* Gets the {@link MessageSender} singleton.
			*
			* @returns the {@link MessageSender} singleton
			*/
			getMessageSender() {
				return this.get(TOKEN.MessageSender);
			}
			/**
			* Gets the {@link MessageHandler} singleton.
			*
			* @returns the {@link MessageHandler} singleton
			*/
			getMessageHandler() {
				return this.get(TOKEN.MessageHandler);
			}
			/**
			* Gets the {@link ApplicationConnection} singleton.
			*
			* @returns the {@link ApplicationConnection} singleton
			*/
			getApplicationConnection() {
				return this.get(TOKEN.ApplicationConnection);
			}
			/**
			* Gets the {@link Heartbeat} singleton.
			*
			* @returns the {@link Heartbeat} singleton
			*/
			getHeartbeat() {
				return this.get(TOKEN.Heartbeat);
			}
			/**
			* Gets the {@link ConnectionStateHandler} singleton.
			*
			* @returns the {@link ConnectionStateHandler} singleton
			*/
			getConnectionStateHandler() {
				return this.get(TOKEN.ConnectionStateHandler);
			}
			/**
			* Gets the {@link ServerRpcQueue} singleton.
			*
			* @returns the {@link ServerRpcQueue} singleton
			*/
			getServerRpcQueue() {
				return this.get(TOKEN.ServerRpcQueue);
			}
			/**
			* Gets the {@link ApplicationConfiguration} singleton.
			*
			* @returns the {@link ApplicationConfiguration} singleton
			*/
			getApplicationConfiguration() {
				return this.get(TOKEN.ApplicationConfiguration);
			}
			/**
			* Gets the {@link StateTree} singleton.
			*
			* @returns the {@link StateTree} singleton
			*/
			getStateTree() {
				return this.get(TOKEN.StateTree);
			}
			/**
			* Gets the {@link PushConfiguration} singleton.
			*
			* @returns the {@link PushConfiguration} singleton
			*/
			getPushConfiguration() {
				return this.get(TOKEN.PushConfiguration);
			}
			/**
			* Gets the {@link XhrConnection} singleton.
			*
			* @returns the {@link XhrConnection} singleton
			*/
			getXhrConnection() {
				return this.get(TOKEN.XhrConnection);
			}
			/**
			* Gets the {@link URIResolver} singleton.
			*
			* @returns the {@link URIResolver} singleton
			*/
			getURIResolver() {
				return this.get(TOKEN.URIResolver);
			}
			/**
			* Gets the {@link DependencyLoader} singleton.
			*
			* @returns the {@link DependencyLoader} singleton
			*/
			getDependencyLoader() {
				return this.get(TOKEN.DependencyLoader);
			}
			/**
			* Gets the {@link SystemErrorHandler} singleton.
			*
			* @returns the {@link SystemErrorHandler} singleton
			*/
			getSystemErrorHandler() {
				return this.get(TOKEN.SystemErrorHandler);
			}
			/**
			* Gets the {@link UILifecycle} singleton.
			*
			* @returns the {@link UILifecycle} singleton
			*/
			getUILifecycle() {
				return this.get(TOKEN.UILifecycle);
			}
			/**
			* Gets the {@link RequestResponseTracker} singleton.
			*
			* @returns the {@link RequestResponseTracker} singleton
			*/
			getRequestResponseTracker() {
				return this.get(TOKEN.RequestResponseTracker);
			}
			/**
			* Gets the {@link ReconnectConfiguration} singleton.
			*
			* @returns the {@link ReconnectConfiguration} singleton
			*/
			getReconnectConfiguration() {
				return this.get(TOKEN.ReconnectConfiguration);
			}
			/**
			* Gets the {@link ExecuteJavaScriptProcessor} singleton.
			*
			* @returns the {@link ExecuteJavaScriptProcessor} singleton
			*/
			getExecuteJavaScriptProcessor() {
				return this.get(TOKEN.ExecuteJavaScriptProcessor);
			}
			/**
			* Gets the {@link ServerConnector} singleton.
			*
			* @returns the {@link ServerConnector} singleton
			*/
			getServerConnector() {
				return this.get(TOKEN.ServerConnector);
			}
			/**
			* Gets the {@link ResourceLoader} singleton.
			*
			* @returns the {@link ResourceLoader} singleton
			*/
			getResourceLoader() {
				return this.get(TOKEN.ResourceLoader);
			}
			/**
			* Gets the {@link ConstantPool} singleton.
			*
			* @returns the {@link ConstantPool} singleton
			*/
			getConstantPool() {
				return this.get(TOKEN.ConstantPool);
			}
			/**
			* Gets the {@link ExistingElementMap} singleton.
			*
			* @returns the {@link ExistingElementMap} singleton
			*/
			getExistingElementMap() {
				return this.get(TOKEN.ExistingElementMap);
			}
			/**
			* Gets the {@link InitialPropertiesHandler} singleton.
			*
			* @returns the {@link InitialPropertiesHandler} singleton
			*/
			getInitialPropertiesHandler() {
				return this.get(TOKEN.InitialPropertiesHandler);
			}
			/**
			* Gets the {@link Poller} singleton.
			*
			* @returns the {@link Poller} singleton
			*/
			getPoller() {
				return this.get(TOKEN.Poller);
			}
			/**
			* Gets the {@link LoadingIndicatorStateHandler} singleton.
			*
			* @returns the {@link LoadingIndicatorStateHandler} singleton
			*/
			getLoadingIndicatorStateHandler() {
				return this.get(TOKEN.LoadingIndicatorStateHandler);
			}
			/**
			* Deletes and recreates resettable instances of registry singletons.
			*/
			reset() {
				this.#resettable.forEach((supplier, key) => {
					this.#lookupTable.delete(key);
					this.#lookupTable.set(key, supplier());
				});
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ReconnectionAttemptEvent.js
var ReconnectionAttemptEvent;
function init_ReconnectionAttemptEvent() {
	return (init_ReconnectionAttemptEvent = __esmMin((() => {
		ReconnectionAttemptEvent = class {
			#attempt;
			/**
			* Creates an event object.
			*
			* @param attempt - the reconnection attempt number
			*/
			constructor(attempt) {
				this.#attempt = attempt;
			}
			/**
			* Gets the number of the current reconnection attempt.
			*
			* @returns the number of the current reconnection attempt.
			*/
			getAttempt() {
				return this.#attempt;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/RequestStartingEvent.js
var RequestStartingEvent;
function init_RequestStartingEvent() {
	return (init_RequestStartingEvent = __esmMin((() => {
		RequestStartingEvent = class {};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ResponseHandlingEndedEvent.js
var ResponseHandlingEndedEvent;
function init_ResponseHandlingEndedEvent() {
	return (init_ResponseHandlingEndedEvent = __esmMin((() => {
		ResponseHandlingEndedEvent = class {};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ResponseHandlingStartedEvent.js
var ResponseHandlingStartedEvent;
function init_ResponseHandlingStartedEvent() {
	return (init_ResponseHandlingStartedEvent = __esmMin((() => {
		ResponseHandlingStartedEvent = class {};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/RequestResponseTracker.js
function addListener(listeners, listener) {
	listeners.push(listener);
	return { remove: () => {
		const index = listeners.indexOf(listener);
		if (index !== -1) listeners.splice(index, 1);
	} };
}
var RequestResponseTracker;
function init_RequestResponseTracker() {
	return (init_RequestResponseTracker = __esmMin((() => {
		init_ReconnectionAttemptEvent();
		init_RequestStartingEvent();
		init_ResponseHandlingEndedEvent();
		init_ResponseHandlingStartedEvent();
		init_MessageSender();
		RequestResponseTracker = class {
			#hasActiveRequestState = false;
			#registry;
			#requestStartingHandlers = [];
			#responseHandlingStartedHandlers = [];
			#responseHandlingEndedHandlers = [];
			#reconnectionAttemptHandlers = [];
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/** Marks that a new request has started and fires the request-starting event. */
			startRequest() {
				if (this.#hasActiveRequestState) throw new Error("Trying to start a new request while another is active");
				this.#hasActiveRequestState = true;
				const event = new RequestStartingEvent();
				[...this.#requestStartingHandlers].forEach((handler) => handler(event));
			}
			/**
			* Checks is there is an active UIDL request.
			*
			* @returns true if there is an active request, false otherwise
			*/
			hasActiveRequest() {
				return this.#hasActiveRequestState;
			}
			/**
			* Marks that the current request has ended, sending any pending invocations
			* and firing the response-handling-ended event.
			*/
			endRequest() {
				if (!this.#hasActiveRequestState) throw new Error("endRequest called when no request is active");
				this.#hasActiveRequestState = false;
				const messageSender = this.#registry.getMessageSender();
				if (this.#registry.getUILifecycle().isRunning() && this.#registry.getServerRpcQueue().isFlushPending() || messageSender.getResynchronizationState() === ResynchronizationState.SEND_TO_SERVER || messageSender.hasQueuedMessages()) messageSender.sendInvocationsToServer();
				const event = new ResponseHandlingEndedEvent();
				[...this.#responseHandlingEndedHandlers].forEach((handler) => handler(event));
			}
			/** Fires the response-handling-started event (called by the message handler). */
			fireResponseHandlingStarted() {
				const event = new ResponseHandlingStartedEvent();
				[...this.#responseHandlingStartedHandlers].forEach((handler) => handler(event));
			}
			/** Fires a reconnection-attempt event with the attempt count. */
			fireReconnectionAttempt(attempt) {
				const event = new ReconnectionAttemptEvent(attempt);
				[...this.#reconnectionAttemptHandlers].forEach((handler) => handler(event));
			}
			/**
			* Adds a handler for {@link RequestStartingEvent}s.
			*
			* @param handler - the handler to add
			* @returns a registration object which can be used to remove the handler
			*/
			addRequestStartingHandler(handler) {
				return addListener(this.#requestStartingHandlers, handler);
			}
			/**
			* Adds a handler for {@link ResponseHandlingStartedEvent}s.
			*
			* @param handler - the handler to add
			* @returns a registration object which can be used to remove the handler
			*/
			addResponseHandlingStartedHandler(handler) {
				return addListener(this.#responseHandlingStartedHandlers, handler);
			}
			/**
			* Adds a handler for {@link ResponseHandlingEndedEvent}s.
			*
			* @param handler - the handler to add
			* @returns a registration object which can be used to remove the handler
			*/
			addResponseHandlingEndedHandler(handler) {
				return addListener(this.#responseHandlingEndedHandlers, handler);
			}
			/**
			* Adds a handler for {@link ReconnectionAttemptEvent}s.
			*
			* @param handler - the handler to add
			* @returns a registration object which can be used to remove the handler
			*/
			addReconnectionAttemptHandler(handler) {
				return addListener(this.#reconnectionAttemptHandlers, handler);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/flow/shared/BrowserDetails.js
/**
* Splits a string like Java's `String.split(regex)` with the default limit,
* which drops trailing empty strings (JavaScript's split keeps them).
*/
function splitDroppingTrailingEmpty(value, separator) {
	const parts = value.split(separator);
	while (parts.length > 0 && parts[parts.length - 1] === "") parts.pop();
	return parts;
}
/**
* Gets the length of the version substring up to the next space.
*
* @param userAgent - user agent string
* @param startIndex - index for version string start
* @returns length of version number
*/
function getVersionStringLength(userAgent, startIndex) {
	const versionSubString = userAgent.substring(startIndex);
	let versionBreak = versionSubString.indexOf(" ");
	if (versionBreak === -1) versionBreak = versionSubString.length;
	return versionBreak;
}
/**
* Substring that clamps out-of-range indices instead of throwing, mirroring the
* Java `safeSubstring` helper. Uses slice (which never swaps arguments) so
* a start past the end yields an empty string, matching how the Java version's
* downstream parsing degrades.
*/
function safeSubstring(value, beginIndex, endIndex) {
	const trimmedStart = beginIndex < 0 ? 0 : beginIndex;
	const trimmedEnd = endIndex < 0 || endIndex > value.length ? value.length : endIndex;
	return value.slice(trimmedStart, trimmedEnd);
}
var CHROME, HEADLESSCHROME, OS_MAJOR, OS_MINOR, BROWSER_MAJOR, BROWSER_MINOR, NOT_PARSED, OperatingSystem, BrowserName, BrowserEngine, BrowserDetails;
function init_BrowserDetails() {
	return (init_BrowserDetails = __esmMin((() => {
		CHROME = " chrome/";
		HEADLESSCHROME = " headlesschrome/";
		OS_MAJOR = "OS major";
		OS_MINOR = "OS minor";
		BROWSER_MAJOR = "Browser major";
		BROWSER_MINOR = "Browser minor";
		NOT_PARSED = -10;
		(function(OperatingSystem) {
			OperatingSystem[OperatingSystem["UNKNOWN"] = 0] = "UNKNOWN";
			OperatingSystem[OperatingSystem["WINDOWS"] = 1] = "WINDOWS";
			OperatingSystem[OperatingSystem["MACOSX"] = 2] = "MACOSX";
			OperatingSystem[OperatingSystem["LINUX"] = 3] = "LINUX";
			OperatingSystem[OperatingSystem["IOS"] = 4] = "IOS";
			OperatingSystem[OperatingSystem["ANDROID"] = 5] = "ANDROID";
			OperatingSystem[OperatingSystem["CHROMEOS"] = 6] = "CHROMEOS";
		})(OperatingSystem || (OperatingSystem = {}));
		(function(BrowserName) {
			BrowserName[BrowserName["UNKNOWN"] = 0] = "UNKNOWN";
			BrowserName[BrowserName["SAFARI"] = 1] = "SAFARI";
			BrowserName[BrowserName["CHROME"] = 2] = "CHROME";
			BrowserName[BrowserName["FIREFOX"] = 3] = "FIREFOX";
			BrowserName[BrowserName["OPERA"] = 4] = "OPERA";
			BrowserName[BrowserName["IE"] = 5] = "IE";
			BrowserName[BrowserName["EDGE"] = 6] = "EDGE";
		})(BrowserName || (BrowserName = {}));
		(function(BrowserEngine) {
			BrowserEngine[BrowserEngine["UNKNOWN"] = 0] = "UNKNOWN";
			BrowserEngine[BrowserEngine["GECKO"] = 1] = "GECKO";
			BrowserEngine[BrowserEngine["WEBKIT"] = 2] = "WEBKIT";
			BrowserEngine[BrowserEngine["PRESTO"] = 3] = "PRESTO";
			BrowserEngine[BrowserEngine["TRIDENT"] = 4] = "TRIDENT";
		})(BrowserEngine || (BrowserEngine = {}));
		BrowserDetails = class {
			#browserName;
			#browserEngine;
			#windowsPhone = false;
			#iPad = false;
			#iPhone = false;
			#chromeOS = false;
			#os;
			#browserEngineVersion = -10;
			#browserMajorVersion = NOT_PARSED;
			#browserMinorVersion = NOT_PARSED;
			#osMajorVersion = NOT_PARSED;
			#osMinorVersion = NOT_PARSED;
			#userAgent;
			/**
			* Create an instance based on the given user agent.
			*
			* @param userAgentString - User agent as provided by the browser.
			*/
			constructor(userAgentString) {
				this.#userAgent = userAgentString.toLowerCase();
			}
			#parseBrowserEngine() {
				const ua = this.#userAgent;
				if (ua.includes("gecko") && !ua.includes("webkit") && !ua.includes("trident/")) this.#browserEngine = BrowserEngine.GECKO;
				else if (ua.includes(" presto/")) this.#browserEngine = BrowserEngine.PRESTO;
				else if (ua.includes("trident/")) this.#browserEngine = BrowserEngine.TRIDENT;
				else if (!ua.includes("trident/") && ua.includes("applewebkit")) this.#browserEngine = BrowserEngine.WEBKIT;
				else this.#browserEngine = BrowserEngine.UNKNOWN;
			}
			#parseBrowserName() {
				const ua = this.#userAgent;
				if (ua.includes(" edge/") || ua.includes(" edg/") || ua.includes(" edga/") || ua.includes(" edgios/")) this.#browserName = BrowserName.EDGE;
				else if ((ua.includes(CHROME) || ua.includes(" crios/") || ua.includes(HEADLESSCHROME)) && !ua.includes(" opr/")) this.#browserName = BrowserName.CHROME;
				else if (ua.includes("opera") || ua.includes(" opr/")) this.#browserName = BrowserName.OPERA;
				else if (ua.includes("msie") && !ua.includes("webtv") || ua.includes("trident/")) this.#browserName = BrowserName.IE;
				else if (ua.includes(" firefox/") || ua.includes("fxios/")) this.#browserName = BrowserName.FIREFOX;
				else if (ua.includes("safari")) this.#browserName = BrowserName.SAFARI;
				else this.#browserName = BrowserName.UNKNOWN;
			}
			#parseEngineVersion() {
				const ua = this.#userAgent;
				if (this.#browserEngine === void 0) this.#parseBrowserEngine();
				try {
					if (this.#browserEngine === BrowserEngine.GECKO) {
						const rvPos = ua.indexOf("rv:");
						if (rvPos >= 0) {
							let tmp = ua.substring(rvPos + 3);
							tmp = tmp.replace(/(\.[0-9]+).+/, "$1");
							this.#browserEngineVersion = this.#parseFloatOrThrow(tmp);
						}
					} else if (this.#browserEngine === BrowserEngine.WEBKIT) {
						let tmp = ua.substring(ua.indexOf("webkit/") + 7);
						tmp = tmp.replace(/([0-9]+\.[0-9]+).*/, "$1");
						this.#browserEngineVersion = this.#parseFloatOrThrow(tmp);
					} else if (this.#browserEngine === BrowserEngine.TRIDENT) {
						let tmp = ua.substring(ua.indexOf("trident/") + 8);
						tmp = tmp.replace(/([0-9]+\.[0-9]+).*/, "$1");
						this.#browserEngineVersion = this.#parseFloatOrThrow(tmp);
						if (this.#browserEngineVersion > 7) this.#browserEngineVersion = 7;
					} else if (this.#browserName === BrowserName.EDGE) this.#browserEngineVersion = 0;
					else this.#browserEngineVersion = -1;
				} catch (e) {
					this.log(`Browser engine version parsing failed for: ${ua}`, e);
				}
			}
			#parseBrowserVersion() {
				const ua = this.#userAgent;
				this.#browserMajorVersion = -1;
				this.#browserMinorVersion = -1;
				if (this.#browserName === void 0) this.#parseBrowserName();
				if (this.#browserEngine === void 0) this.#parseBrowserEngine();
				try {
					if (this.#browserName === BrowserName.IE) {
						if (!ua.includes("msie")) {
							const rvPos = ua.indexOf("rv:");
							if (rvPos >= 0) {
								let tmp = ua.substring(rvPos + 3);
								tmp = tmp.replace(/(\.[0-9]+).+/, "$1");
								this.#parseVersionString(tmp, ua);
							}
						} else if (this.#browserEngine === BrowserEngine.TRIDENT) {
							this.#browserMajorVersion = 4 + Math.trunc(this.#browserEngineVersion);
							this.#browserMinorVersion = 0;
						} else {
							let ieVersionString = ua.substring(ua.indexOf("msie ") + 5);
							ieVersionString = safeSubstring(ieVersionString, 0, ieVersionString.indexOf(";"));
							this.#parseVersionString(ieVersionString, ua);
						}
					} else if (this.#browserName === BrowserName.FIREFOX) {
						let i = ua.indexOf(" fxios/");
						if (i !== -1) i = ua.indexOf(" fxios/") + 7;
						else i = ua.indexOf(" firefox/") + 9;
						this.#parseVersionString(safeSubstring(ua, i, i + getVersionStringLength(ua, i)), ua);
					} else if (this.#browserName === BrowserName.CHROME) this.#parseChromeVersion(ua);
					else if (this.#browserName === BrowserName.SAFARI) {
						let i = ua.indexOf(" version/");
						if (i >= 0) {
							i += 9;
							this.#parseVersionString(safeSubstring(ua, i, i + getVersionStringLength(ua, i)), ua);
						} else {
							if (this.#browserEngineVersion === NOT_PARSED) this.#parseEngineVersion();
							const engineVersion = Math.trunc(this.#browserEngineVersion * 10);
							if (engineVersion >= 6010 && engineVersion < 6015) {
								this.#browserMajorVersion = 9;
								this.#browserMinorVersion = 0;
							} else if (engineVersion >= 6015 && engineVersion < 6018) {
								this.#browserMajorVersion = 9;
								this.#browserMinorVersion = 1;
							} else if (engineVersion >= 6020 && engineVersion < 6030) {
								this.#browserMajorVersion = 10;
								this.#browserMinorVersion = 0;
							} else if (engineVersion >= 6030 && engineVersion < 6040) {
								this.#browserMajorVersion = 10;
								this.#browserMinorVersion = 1;
							} else if (engineVersion >= 6040 && engineVersion < 6050) {
								this.#browserMajorVersion = 11;
								this.#browserMinorVersion = 0;
							} else if (engineVersion >= 6050 && engineVersion < 6060) {
								this.#browserMajorVersion = 11;
								this.#browserMinorVersion = 1;
							} else if (engineVersion >= 6060 && engineVersion < 6070) {
								this.#browserMajorVersion = 12;
								this.#browserMinorVersion = 0;
							} else if (engineVersion >= 6070) {
								this.#browserMajorVersion = 12;
								this.#browserMinorVersion = 1;
							}
						}
					} else if (this.#browserName === BrowserName.OPERA) {
						let i = ua.indexOf(" version/");
						if (i !== -1) i += 9;
						else if (ua.includes(" opr/")) i = ua.indexOf(" opr/") + 5;
						else i = ua.indexOf("opera/") + 6;
						this.#parseVersionString(safeSubstring(ua, i, i + getVersionStringLength(ua, i)), ua);
					} else if (this.#browserName === BrowserName.EDGE) {
						let i = ua.indexOf(" edge/") + 6;
						if (ua.includes(" edg/")) i = ua.indexOf(" edg/") + 5;
						else if (ua.includes(" edga/")) i = ua.indexOf(" edga/") + 6;
						else if (ua.includes(" edgios/")) i = ua.indexOf(" edgios/") + 8;
						this.#parseVersionString(safeSubstring(ua, i, i + getVersionStringLength(ua, i)), ua);
					}
				} catch (e) {
					this.log(`Browser version parsing failed for: ${ua}`, e);
				}
			}
			#parseOperatingSystem() {
				const ua = this.#userAgent;
				if (ua.includes("windows ")) {
					this.#os = OperatingSystem.WINDOWS;
					this.#windowsPhone = ua.includes("windows phone");
				} else if (ua.includes("android")) {
					this.#os = OperatingSystem.ANDROID;
					this.#parseAndroidVersion(ua);
				} else if (ua.includes("linux")) this.#os = OperatingSystem.LINUX;
				else if (ua.includes("macintosh") || ua.includes("mac osx") || ua.includes("mac os x")) {
					this.#iPad = ua.includes("ipad");
					this.#iPhone = ua.includes("iphone");
					if (this.#iPad || this.#iPhone) {
						this.#os = OperatingSystem.IOS;
						this.#parseIOSVersion(ua);
					} else this.#os = OperatingSystem.MACOSX;
				} else if (ua.includes("; cros ")) {
					this.#os = OperatingSystem.CHROMEOS;
					this.#chromeOS = true;
					this.#parseChromeOSVersion(ua);
				} else this.#os = OperatingSystem.UNKNOWN;
			}
			#parseChromeOSVersion(userAgent) {
				const start = userAgent.indexOf("; cros ");
				if (start === -1) return;
				const end = userAgent.indexOf(")", start);
				if (end === -1) return;
				let cur = end;
				while (cur >= start && userAgent.charAt(cur) !== " ") cur--;
				if (cur === start) return;
				const parts = splitDroppingTrailingEmpty(userAgent.substring(cur + 1, end), ".");
				this.#parseChromeOsVersionParts(parts, userAgent);
			}
			#parseChromeOsVersionParts(parts, userAgent) {
				this.#osMajorVersion = -1;
				this.#osMinorVersion = -1;
				if (parts.length > 2) {
					this.#osMajorVersion = this.#parseVersionPart(parts[0], OS_MAJOR, userAgent);
					this.#osMinorVersion = this.#parseVersionPart(parts[1], OS_MINOR, userAgent);
				}
			}
			#parseChromeVersion(userAgent) {
				let i = userAgent.indexOf(" crios/");
				if (i === -1) {
					i = userAgent.indexOf(CHROME);
					if (i === -1) i = userAgent.indexOf(HEADLESSCHROME) + 16;
					else i += 8;
					const versionBreak = getVersionStringLength(userAgent, i);
					this.#parseVersionString(safeSubstring(userAgent, i, i + versionBreak), userAgent);
				} else {
					i += 7;
					const versionBreak = getVersionStringLength(userAgent, i);
					this.#parseVersionString(safeSubstring(userAgent, i, i + versionBreak), userAgent);
				}
			}
			#parseAndroidVersion(userAgent) {
				if (!userAgent.includes("android ")) {
					this.#osMajorVersion = -1;
					this.#osMinorVersion = -1;
					return;
				}
				if (userAgent.includes("ddg_android/")) {
					const startIndex = userAgent.indexOf("ddg_android/");
					const parts = splitDroppingTrailingEmpty(safeSubstring(userAgent, startIndex + 12, userAgent.indexOf(" ", startIndex)), ".");
					this.#parseOsVersion(parts, userAgent);
					return;
				}
				if (userAgent.includes("callpod keeper for android")) {
					const startIndex = userAgent.indexOf("; android ") + 10;
					const parts = splitDroppingTrailingEmpty(safeSubstring(userAgent, startIndex, userAgent.indexOf(";", startIndex)), ".");
					this.#parseOsVersion(parts, userAgent);
					return;
				}
				let osVersionString = safeSubstring(userAgent, userAgent.indexOf("android ") + 8, userAgent.length);
				const semicolonIndex = osVersionString.indexOf(";");
				const bracketIndex = osVersionString.indexOf(")");
				osVersionString = safeSubstring(osVersionString, 0, semicolonIndex !== -1 && semicolonIndex < bracketIndex ? semicolonIndex : bracketIndex);
				const parts = splitDroppingTrailingEmpty(osVersionString, ".");
				this.#parseOsVersion(parts, userAgent);
			}
			#parseIOSVersion(userAgent) {
				if (!userAgent.includes("os ") || !userAgent.includes(" like mac")) {
					this.#osMajorVersion = -1;
					this.#osMinorVersion = -1;
					return;
				}
				const parts = splitDroppingTrailingEmpty(safeSubstring(userAgent, userAgent.indexOf("os ") + 3, userAgent.indexOf(" like mac")), "_");
				this.#parseOsVersion(parts, userAgent);
			}
			#parseOsVersion(parts, userAgent) {
				this.#osMajorVersion = -1;
				this.#osMinorVersion = -1;
				if (parts.length >= 1) this.#osMajorVersion = this.#parseVersionPart(parts[0], OS_MAJOR, userAgent);
				if (parts.length >= 2) {
					const dashIndex = parts[1].indexOf("-");
					if (dashIndex > -1) {
						const dashlessVersion = parts[1].substring(0, dashIndex);
						this.#osMinorVersion = this.#parseVersionPart(dashlessVersion, OS_MINOR, userAgent);
					} else this.#osMinorVersion = this.#parseVersionPart(parts[1], OS_MINOR, userAgent);
				}
			}
			#parseVersionString(versionString, userAgent) {
				let idx = versionString.indexOf(".");
				if (idx < 0) idx = versionString.length;
				const majorVersionPart = safeSubstring(versionString, 0, idx);
				this.#browserMajorVersion = this.#parseVersionPart(majorVersionPart, BROWSER_MAJOR, userAgent);
				if (this.#browserMajorVersion === -1) return;
				let idx2 = versionString.indexOf(".", idx + 1);
				if (idx2 < 0) {
					if (versionString.substring(idx).length === 0) {
						this.#browserMinorVersion = 0;
						return;
					}
					idx2 = versionString.length;
				}
				const minorVersionPart = safeSubstring(versionString, idx + 1, idx2).replace(/[^0-9].*/, "");
				this.#browserMinorVersion = this.#parseVersionPart(minorVersionPart, BROWSER_MINOR, userAgent);
			}
			/** Parses a float, throwing (like Java's Float.parseFloat) when not numeric. */
			#parseFloatOrThrow(value) {
				const parsed = Number.parseFloat(value);
				if (Number.isNaN(parsed)) throw new Error(`Not a number: "${value}"`);
				return parsed;
			}
			#parseVersionPart(versionString, partName, userAgent) {
				if (/^[+-]?[0-9]+$/.test(versionString)) return Number.parseInt(versionString, 10);
				this.log(`${partName} version parsing failed for: "${versionString}"\nWith userAgent: ${userAgent}`, void 0);
				return -1;
			}
			/**
			* Tests if the browser is Firefox.
			*
			* @returns true if it is Firefox, false otherwise
			*/
			isFirefox() {
				if (this.#browserName === void 0) this.#parseBrowserName();
				return this.#browserName === BrowserName.FIREFOX;
			}
			/**
			* Tests if the browser is using the Gecko engine.
			*
			* @returns true if it is Gecko, false otherwise
			*/
			isGecko() {
				if (this.#browserEngine === void 0) this.#parseBrowserEngine();
				return this.#browserEngine === BrowserEngine.GECKO;
			}
			/**
			* Tests if the browser is using the WebKit engine.
			*
			* @returns true if it is WebKit, false otherwise
			*/
			isWebKit() {
				if (this.#browserEngine === void 0) this.#parseBrowserEngine();
				return this.#browserEngine === BrowserEngine.WEBKIT;
			}
			/**
			* Tests if the browser is using the Presto engine.
			*
			* @returns true if it is Presto, false otherwise
			*/
			isPresto() {
				if (this.#browserEngine === void 0) this.#parseBrowserEngine();
				return this.#browserEngine === BrowserEngine.PRESTO;
			}
			/**
			* Tests if the browser is using the Trident engine.
			*
			* @returns true if it is Trident, false otherwise
			*/
			isTrident() {
				if (this.#browserEngine === void 0) this.#parseBrowserEngine();
				return this.#browserEngine === BrowserEngine.TRIDENT;
			}
			/**
			* Tests if the browser is Safari.
			*
			* @returns true if it is Safari, false otherwise
			*/
			isSafari() {
				if (this.#browserName === void 0) this.#parseBrowserName();
				return this.#browserName === BrowserName.SAFARI;
			}
			/**
			* Tests if the browser is Chrome.
			*
			* @returns true if it is Chrome, false otherwise
			*/
			isChrome() {
				if (this.#browserName === void 0) this.#parseBrowserName();
				return this.#browserName === BrowserName.CHROME;
			}
			/**
			* Tests if the browser is Opera.
			*
			* @returns true if it is Opera, false otherwise
			*/
			isOpera() {
				if (this.#browserName === void 0) this.#parseBrowserName();
				return this.#browserName === BrowserName.OPERA;
			}
			/**
			* Tests if the browser is Internet Explorer.
			*
			* @returns true if it is Internet Explorer, false otherwise
			*/
			isIE() {
				if (this.#browserName === void 0) this.#parseBrowserName();
				return this.#browserName === BrowserName.IE;
			}
			/**
			* Tests if the browser is Edge.
			*
			* @returns true if it is Edge, false otherwise
			*/
			isEdge() {
				if (this.#browserName === void 0) this.#parseBrowserName();
				return this.#browserName === BrowserName.EDGE;
			}
			/**
			* Returns the version of the browser engine. For WebKit this is an integer
			* e.g., 532.0. For gecko it is a float e.g., 1.8 or 1.9.
			*
			* @returns The version of the browser engine
			*/
			getBrowserEngineVersion() {
				if (this.#browserEngineVersion === NOT_PARSED) this.#parseEngineVersion();
				return this.#browserEngineVersion;
			}
			/**
			* Returns the browser major version e.g., 3 for Firefox 3.5, 4 for Chrome
			* 4, 8 for Internet Explorer 8.
			*
			* @returns The major version of the browser.
			*/
			getBrowserMajorVersion() {
				if (this.#browserMajorVersion === NOT_PARSED) this.#parseBrowserVersion();
				return this.#browserMajorVersion;
			}
			/**
			* Returns the browser minor version e.g., 5 for Firefox 3.5.
			*
			* @see {@link getBrowserMajorVersion}
			*
			* @returns The minor version of the browser, or -1 if not known/parsed.
			*/
			getBrowserMinorVersion() {
				if (this.#browserMinorVersion === NOT_PARSED) this.#parseBrowserVersion();
				return this.#browserMinorVersion;
			}
			#getOs() {
				if (this.#os === void 0) this.#parseOperatingSystem();
				return this.#os ?? OperatingSystem.UNKNOWN;
			}
			/**
			* Tests if the browser is run on Windows.
			*
			* @returns true if run on Windows, false otherwise
			*/
			isWindows() {
				return this.#getOs() === OperatingSystem.WINDOWS;
			}
			/**
			* Tests if the browser is run on Windows Phone.
			*
			* @returns true if run on Windows Phone, false otherwise
			*/
			isWindowsPhone() {
				return this.#windowsPhone;
			}
			/**
			* Tests if the browser is run on Mac OSX.
			*
			* @returns true if run on Mac OSX, false otherwise
			*/
			isMacOSX() {
				return this.#getOs() === OperatingSystem.MACOSX;
			}
			/**
			* Tests if the browser is run on Linux.
			*
			* @returns true if run on Linux, false otherwise
			*/
			isLinux() {
				return this.#getOs() === OperatingSystem.LINUX;
			}
			/**
			* Tests if the browser is run on Android.
			*
			* @returns true if run on Android, false otherwise
			*/
			isAndroid() {
				return this.#getOs() === OperatingSystem.ANDROID;
			}
			/**
			* Tests if the browser is run on iPhone.
			*
			* @returns true if run on iPhone, false otherwise
			*/
			isIPhone() {
				if (this.#os === void 0) this.#parseOperatingSystem();
				return this.#iPhone;
			}
			/**
			* Tests if the browser is run on iPad.
			*
			* @returns true if run on iPad, false otherwise
			*/
			isIPad() {
				if (this.#os === void 0) this.#parseOperatingSystem();
				return this.#iPad;
			}
			/**
			* Tests if the browser is run on Chrome OS (e.g. a Chromebook).
			*
			* @returns true if run on Chrome OS, false otherwise
			*/
			isChromeOS() {
				if (this.#os === void 0) this.#parseOperatingSystem();
				return this.#chromeOS;
			}
			/**
			* Returns the major version of the operating system. Currently only
			* supported for mobile devices (iOS/Android)
			*
			* @returns The major version or -1 if unknown
			*/
			getOperatingSystemMajorVersion() {
				if (this.#os === void 0) this.#parseOperatingSystem();
				return this.#osMajorVersion;
			}
			/**
			* Returns the minor version of the operating system. Currently only
			* supported for mobile devices (iOS/Android)
			*
			* @returns The minor version or -1 if unknown
			*/
			getOperatingSystemMinorVersion() {
				if (this.#os === void 0) this.#parseOperatingSystem();
				return this.#osMinorVersion;
			}
			/**
			* Checks if the browser is so old that it simply won't work.
			*
			* @returns true if the browser won't work, false if not the browser is
			*         supported or might work
			*/
			isTooOldToFunctionProperly() {
				if (this.isIE()) return true;
				if (this.isEdge() && this.getBrowserMajorVersion() < 79) return true;
				if (this.isSafari() && this.getBrowserMajorVersion() < 14) {
					if (this.isIPhone() && (this.getOperatingSystemMajorVersion() > 14 || this.getOperatingSystemMajorVersion() === 14 && this.getOperatingSystemMinorVersion() >= 7)) return false;
					return true;
				}
				if (this.isFirefox() && this.getBrowserMajorVersion() < 78) return true;
				if (this.isOpera() && this.getBrowserMajorVersion() < 58) return true;
				if (this.isChrome() && this.getBrowserMajorVersion() < 71) return true;
				return false;
			}
			log(error, e) {
				const message = e instanceof Error ? `${error} ${e.message}` : error;
				console.error(message);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/BrowserInfo.js
/** Detects whether the browser runs on a touch-capable device. */
function checkForTouchDevice() {
	const nav = navigator;
	if ("maxTouchPoints" in nav) return (nav.maxTouchPoints ?? 0) > 0;
	else if ("msMaxTouchPoints" in nav) return (nav.msMaxTouchPoints ?? 0) > 0;
	const mediaQuery = window.matchMedia && window.matchMedia("(pointer:coarse)");
	if (mediaQuery && mediaQuery.media === "(pointer:coarse)") return !!mediaQuery.matches;
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch {
		return false;
	}
}
/** Returns the browser's user-agent string. */
function getBrowserString() {
	return window.navigator.userAgent;
}
/** Detects whether the browser runs on iOS (including iPadOS desktop mode). */
function isIos() {
	return /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
var BrowserInfo;
function init_BrowserInfo() {
	return (init_BrowserInfo = __esmMin((() => {
		init_BrowserDetails();
		BrowserInfo = class BrowserInfo {
			static ENGINE_GECKO = "gecko";
			static ENGINE_WEBKIT = "webkit";
			static ENGINE_PRESTO = "presto";
			static ENGINE_TRIDENT = "trident";
			static #instance;
			#browserDetails;
			#touchDevice;
			constructor() {
				this.#browserDetails = new BrowserDetails(getBrowserString());
				this.#touchDevice = checkForTouchDevice();
			}
			/**
			* Singleton method to get BrowserInfo object.
			*
			* @returns instance of BrowserInfo object
			*/
			static get() {
				if (BrowserInfo.#instance === void 0) BrowserInfo.#instance = new BrowserInfo();
				return BrowserInfo.#instance;
			}
			/**
			* Checks if the browser is IE.
			*
			* @returns true if the browser is IE, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isIE() {
				return this.#browserDetails.isIE();
			}
			/**
			* Checks if the browser is Edge.
			*
			* @returns true if the browser is Edge, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isEdge() {
				return this.#browserDetails.isEdge();
			}
			/**
			* Checks if the browser is Firefox.
			*
			* @returns true if the browser is Firefox, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isFirefox() {
				return this.#browserDetails.isFirefox();
			}
			/**
			* Checks if the browser is Safari.
			*
			* @returns true if the browser is Safari, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isSafari() {
				return this.#browserDetails.isSafari();
			}
			/**
			* Checks if the browser is Safari or runs on iOS (covering also Chrome on
			* iOS).
			*
			* @returns true if the browser is Safari or running on iOS, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isSafariOrIOS() {
				return this.#browserDetails.isSafari() || isIos();
			}
			/**
			* Checks if the browser is Chrome.
			*
			* @returns true if the browser is Chrome, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isChrome() {
				return this.#browserDetails.isChrome();
			}
			/**
			* Checks if the browser using the Gecko engine.
			*
			* @returns true if the browser is using Gecko, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isGecko() {
				return this.#browserDetails.isGecko();
			}
			/**
			* Checks if the browser using the Webkit engine.
			*
			* @returns true if the browser is using Webkit, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isWebkit() {
				return this.#browserDetails.isWebKit();
			}
			/**
			* Returns the Gecko version if the browser is Gecko based. The Gecko version
			* for Firefox 2 is 1.8 and 1.9 for Firefox 3.
			*
			* @returns The Gecko version or -1 if the browser is not Gecko based
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			getGeckoVersion() {
				if (!this.#browserDetails.isGecko()) return -1;
				return this.#browserDetails.getBrowserEngineVersion();
			}
			/**
			* Returns the WebKit version if the browser is WebKit based. The WebKit
			* version returned is the major version e.g., 523.
			*
			* @returns The WebKit version or -1 if the browser is not WebKit based
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			getWebkitVersion() {
				if (!this.#browserDetails.isWebKit()) return -1;
				return this.#browserDetails.getBrowserEngineVersion();
			}
			/**
			* Checks if the browser is Opera.
			*
			* @returns true if the browser is Opera, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isOpera() {
				return this.#browserDetails.isOpera();
			}
			/**
			* Checks if the browser runs on a touch capable device.
			*
			* @returns true if the browser runs on a touch based device, false otherwise
			*/
			isTouchDevice() {
				return this.#touchDevice;
			}
			/**
			* Checks if the browser is run on Android.
			*
			* @returns true if the browser is run on Android, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			isAndroid() {
				return this.#browserDetails.isAndroid();
			}
			/**
			* Tests if this is an Android devices with a broken scrollTop
			* implementation.
			*
			* @returns true if scrollTop cannot be trusted on this device, false otherwise
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*             and check version against known issues.
			*/
			isAndroidWithBrokenScrollTop() {
				return this.#browserDetails.isAndroid() && (this.#getOperatingSystemMajorVersion() === 3 || this.#getOperatingSystemMajorVersion() === 4);
			}
			#getOperatingSystemMajorVersion() {
				return this.#browserDetails.getOperatingSystemMajorVersion();
			}
			/**
			* Returns the browser major version e.g., 3 for Firefox 3.5, 4 for Chrome
			* 4, 8 for Internet Explorer 8.
			*
			* @returns The major version of the browser.
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			getBrowserMajorVersion() {
				return this.#browserDetails.getBrowserMajorVersion();
			}
			/**
			* Returns the browser minor version e.g., 5 for Firefox 3.5.
			*
			* @see {@link getBrowserMajorVersion}
			*
			* @returns The minor version of the browser, or -1 if not known/parsed.
			* @deprecated use a parsing library like ua-parser-js to parse the user agent
			*/
			getBrowserMinorVersion() {
				return this.#browserDetails.getBrowserMinorVersion();
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ResourceRegistry.js
var ResourceRegistry;
function init_ResourceRegistry() {
	return (init_ResourceRegistry = __esmMin((() => {
		init_Console();
		ResourceRegistry = class {
			#loadedResources = /* @__PURE__ */ new Set();
			#loadListeners = /* @__PURE__ */ new Map();
			#dependencyIdToResourceKey = /* @__PURE__ */ new Map();
			#registry;
			constructor(registry) {
				this.#registry = registry;
			}
			/** Whether the resource identified by the given key has finished loading. */
			isLoaded(key) {
				return this.#loadedResources.has(key);
			}
			/** Marks a resource key as already loaded (e.g. discovered in the DOM). */
			markLoaded(key) {
				this.#loadedResources.add(key);
			}
			/** Associates a dependency id with its resource key, for later removal. */
			registerDependencyId(dependencyId, resourceKey) {
				this.#dependencyIdToResourceKey.set(dependencyId, resourceKey);
			}
			/**
			* Registers a load listener for a resource key, returning true if it is the
			* first listener (i.e. the caller should start loading the resource). Mirrors
			* ResourceLoader.addListener.
			*/
			addListener(resourceId, listener) {
				const listeners = this.#loadListeners.get(resourceId);
				if (listeners === void 0) {
					this.#loadListeners.set(resourceId, [listener]);
					return true;
				}
				listeners.push(listener);
				return false;
			}
			/** Marks the resource loaded and notifies (then clears) its listeners. Mirrors fireLoad. */
			fireLoad(event) {
				Console.debug(`Loaded ${event.getResourceData()}`);
				const resource = event.getResourceData();
				const listeners = this.#loadListeners.get(resource);
				this.#loadedResources.add(resource);
				this.#loadListeners.delete(resource);
				listeners?.forEach((listener) => listener?.onLoad(event));
			}
			/** Reports the error and notifies (then clears) the resource's listeners. Mirrors fireError. */
			fireError(event) {
				this.#registry.getSystemErrorHandler().handleError(`Error loading ${event.getResourceData()}`);
				const resource = event.getResourceData();
				const listeners = this.#loadListeners.get(resource);
				this.#loadListeners.delete(resource);
				listeners?.forEach((listener) => listener?.onError(event));
			}
			/** Clears a resource (loaded flag + listeners + mapping) by its dependency id. */
			clearLoadedResourceById(dependencyId) {
				const resourceKey = this.#dependencyIdToResourceKey.get(dependencyId);
				if (resourceKey !== void 0) {
					this.#loadedResources.delete(resourceKey);
					this.#loadListeners.delete(resourceKey);
					this.#dependencyIdToResourceKey.delete(dependencyId);
				}
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ResourceLoader.js
/**
* Adds an onload listener to the given element, which should be a link or a
* script tag. The listener is called whenever loading is complete or an
* error occurred.
*
* @param element - the element to attach a listener to
* @param onLoad - called when loading completed; Java passes a single listener
*          plus the event to hand it, which the port splits into the two
*          callbacks below
* @param onError - called when loading failed
*/
function addOnloadHandler(element, onLoad, onError) {
	const el = element;
	el.onload = () => {
		el.onload = null;
		el.onerror = null;
		el.onreadystatechange = null;
		onLoad();
	};
	el.onerror = () => {
		el.onload = null;
		el.onerror = null;
		el.onreadystatechange = null;
		onError();
	};
	el.onreadystatechange = () => {
		if (el.readyState === "loaded" || el.readyState === "complete") el.onload();
	};
}
/**
* Returns the number of rules in the loaded stylesheet with the given href, 1
* if loaded but the rules are inaccessible (cross-origin), or -1 if no matching
* stylesheet is loaded yet.
*/
function getStyleSheetLength(url) {
	for (const styleSheet of Array.from(document.styleSheets)) {
		const sheet = styleSheet;
		if (sheet.href === url) try {
			let rules = sheet.cssRules;
			if (rules === void 0) rules = sheet.rules;
			if (rules === null || rules === void 0) return 1;
			return rules.length;
		} catch {
			return 1;
		}
	}
	return -1;
}
/**
* Invokes the promise-returning supplier and runs onSuccess/onError when it
* settles. Runs onError synchronously if the supplier throws or does not return
* a Promise.
*/
function runPromiseExpression(expression, promiseSupplier, onSuccess, onError) {
	try {
		const promise = promiseSupplier();
		if (!(promise instanceof Promise)) throw new Error(`The expression "${expression}" result is not a Promise.`);
		promise.then(() => {
			onSuccess();
		}, (error) => {
			console.error(error);
			onError();
		});
	} catch (error) {
		console.error(error);
		onError();
	}
}
var ResourceLoader;
function init_ResourceLoader() {
	return (init_ResourceLoader = __esmMin((() => {
		init_BrowserInfo();
		init_ResourceRegistry();
		init_Console();
		ResourceLoader = class {
			#resources;
			/**
			* Creates a new resource loader. You should not create you own resource
			* loader, but instead use `Registry.getResourceLoader()` to get an instance.
			*
			* @param registry - the global registry
			* @param initFromDom - `true` if currently loaded resources should be marked
			*          as loaded, `false` to ignore currently loaded resources
			*/
			constructor(registry, initFromDom) {
				this.#resources = new ResourceRegistry(registry);
				if (initFromDom) this.#initLoadedResourcesFromDom();
			}
			#makeEvent(resourceData) {
				return {
					getResourceLoader: () => this,
					getResourceData: () => resourceData
				};
			}
			/**
			* Clears a resource from the loaded resources set by its dependency ID.
			*
			* This is used when a resource is removed from the DOM using its dependency
			* ID.
			*
			* @param dependencyId - the dependency ID of the resource to clear
			*/
			clearLoadedResourceById(dependencyId) {
				this.#resources.clearLoadedResourceById(dependencyId);
			}
			#initLoadedResourcesFromDom() {
				for (const script of Array.from(document.getElementsByTagName("script"))) if (script.src) this.#resources.markLoaded(script.src);
				for (const link of Array.from(document.getElementsByTagName("link"))) {
					const rel = link.rel?.toLowerCase();
					const href = link.href;
					if (rel === "stylesheet" && href) {
						this.#resources.markLoaded(href);
						const dependencyId = link.getAttribute("data-id");
						if (dependencyId) this.#resources.registerDependencyId(dependencyId, href);
					}
				}
			}
			/**
			* Load a script and notify a listener when the script is loaded. Calling
			* this method when the script is currently loading or already loaded
			* doesn't cause the script to be loaded again, but the listener will still
			* be notified when appropriate.
			*
			* Loads all dependencies with `async = false` and
			* `defer = false` attribute values, see
			* {@link ResourceLoader.loadScript}.
			*
			* @param scriptUrl - the url of the script to load
			* @param resourceLoadListener - the listener that will get notified when the script is loaded
			*/
			loadScript(scriptUrl, resourceLoadListener, async = false, defer = false, type = "text/javascript") {
				const url = getAbsoluteUrl(scriptUrl);
				const event = this.#makeEvent(url);
				if (this.#resources.isLoaded(url)) {
					resourceLoadListener?.onLoad(event);
					return;
				}
				if (this.#resources.addListener(url, resourceLoadListener)) {
					const scriptTag = document.createElement("script");
					scriptTag.src = url;
					scriptTag.type = type;
					scriptTag.async = async;
					scriptTag.defer = defer;
					addOnloadHandler(scriptTag, () => this.#resources.fireLoad(event), () => this.#resources.fireError(event));
					document.head.appendChild(scriptTag);
				}
			}
			/**
			* Load a script with type module and notify a listener when the script is
			* loaded. Calling this method when the script is currently loading or
			* already loaded doesn't cause the script to be loaded again, but the
			* listener will still be notified when appropriate.
			*
			*
			* @param scriptUrl - url of script to load. It should be an external URL.
			* @param resourceLoadListener - listener to notify when script is loaded
			* @param async - What mode the script.async attribute should be set to
			* @param defer - What mode the script.defer attribute should be set to
			*/
			loadJsModule(scriptUrl, resourceLoadListener, async = false, defer = false) {
				this.loadScript(scriptUrl, resourceLoadListener, async, defer, "module");
			}
			/**
			* Inlines a script and notify a listener when the script is loaded. Calling
			* this method when the script is currently loading or already loaded
			* doesn't cause the script to be loaded again, but the listener will still
			* be notified when appropriate.
			*
			* @param scriptContents - the script contents to inline
			* @param resourceLoadListener - listener to notify when script is loaded
			*/
			inlineScript(scriptContents, resourceLoadListener) {
				const event = this.#makeEvent(scriptContents);
				if (this.#resources.isLoaded(scriptContents)) {
					resourceLoadListener?.onLoad(event);
					return;
				}
				if (this.#resources.addListener(scriptContents, resourceLoadListener)) {
					const scriptElement = document.createElement("script");
					scriptElement.textContent = scriptContents;
					scriptElement.type = "text/javascript";
					addOnloadHandler(scriptElement, () => this.#resources.fireLoad(event), () => this.#resources.fireError(event));
					document.head.appendChild(scriptElement);
				}
			}
			/**
			* Load a stylesheet and notify a listener when the stylesheet is loaded.
			* Calling this method when the stylesheet is currently loading or already
			* loaded doesn't cause the stylesheet to be loaded again, but the listener
			* will still be notified when appropriate.
			*
			* @param stylesheetUrl - the url of the stylesheet to load
			* @param resourceLoadListener - the listener that will get notified when the stylesheet is loaded
			*/
			loadStylesheet(stylesheetUrl, resourceLoadListener, dependencyId = null) {
				const url = getAbsoluteUrl(stylesheetUrl);
				if (dependencyId !== null) this.#resources.registerDependencyId(dependencyId, url);
				const event = this.#makeEvent(url);
				if (this.#resources.isLoaded(url)) {
					resourceLoadListener?.onLoad(event);
					return;
				}
				if (this.#resources.addListener(url, resourceLoadListener)) {
					const linkElement = document.createElement("link");
					linkElement.rel = "stylesheet";
					linkElement.type = "text/css";
					linkElement.href = url;
					if (dependencyId !== null) linkElement.setAttribute("data-id", dependencyId);
					if (BrowserInfo.get().isSafariOrIOS()) this.#pollStylesheet(url, event);
					else {
						addOnloadHandler(linkElement, () => {
							if (BrowserInfo.get().isChrome() || BrowserInfo.get().isIE() || BrowserInfo.get().isEdge()) {
								if (getStyleSheetLength(url) === 0) {
									this.#resources.fireError(event);
									return;
								}
							}
							this.#resources.fireLoad(event);
						}, () => this.#resources.fireError(event));
						if (BrowserInfo.get().isOpera()) setTimeout(() => {
							if (!this.#resources.isLoaded(url)) this.#resources.fireError(event);
						}, 5e3);
					}
					this.#addInHeadBeforeComment(linkElement, "Stylesheet end");
				}
			}
			#pollStylesheet(url, event) {
				const start = performance.now();
				const handle = setInterval(() => {
					const styleSheetLength = getStyleSheetLength(url);
					if (styleSheetLength > 0) {
						this.#resources.fireLoad(event);
						clearInterval(handle);
					} else if (styleSheetLength === 0) this.#resources.fireError(event);
					else if (performance.now() - start > 6e4) {
						this.#resources.fireError(event);
						clearInterval(handle);
					}
				}, 10);
			}
			/**
			* Inlines a stylesheet and notify a listener when the stylesheet is loaded.
			* Calling this method when the stylesheet is currently loading or already
			* loaded doesn't cause the stylesheet to be loaded again, but the listener
			* will still be notified when appropriate.
			*
			* @param styleSheetContents - the contents to inline
			* @param resourceLoadListener - the listener that will get notified when the stylesheet is loaded
			*/
			inlineStyleSheet(styleSheetContents, resourceLoadListener, dependencyId = null) {
				if (dependencyId !== null) this.#resources.registerDependencyId(dependencyId, styleSheetContents);
				const event = this.#makeEvent(styleSheetContents);
				if (this.#resources.isLoaded(styleSheetContents)) {
					resourceLoadListener?.onLoad(event);
					return;
				}
				if (this.#resources.addListener(styleSheetContents, resourceLoadListener)) {
					const styleElement = document.createElement("style");
					styleElement.textContent = styleSheetContents;
					styleElement.type = "text/css";
					if (dependencyId !== null) styleElement.setAttribute("data-id", dependencyId);
					this.#addCssLoadHandler(styleSheetContents, event, styleElement);
					this.#addInHeadBeforeComment(styleElement, "Stylesheet end");
				}
			}
			#addInHeadBeforeComment(element, comment) {
				const commentNode = this.#findCommentInHead(comment);
				if (commentNode === null) Console.error(`Expected to find a '${comment}' comment inside <head> but none was found. Appending instead.`);
				document.head.insertBefore(element, commentNode);
			}
			#findCommentInHead(comment) {
				for (const childNode of Array.from(document.head.childNodes)) if (childNode.nodeType === Node.COMMENT_NODE && childNode.nodeValue === comment) return childNode;
				return null;
			}
			/**
			* Loads a dynamic import via the provided JS `expression` and reports
			* the result via the `resourceLoadListener`.
			*
			* @param expression - the JS expression which returns a Promise
			* @param resourceLoadListener - a listener to report the Promise result exection
			*/
			loadDynamicImport(expression, resourceLoadListener) {
				const event = this.#makeEvent(expression);
				const fn = new Function(expression);
				runPromiseExpression(expression, () => fn(), () => resourceLoadListener.onLoad(event), () => resourceLoadListener.onError(event));
			}
			#addCssLoadHandler(styleSheetContents, event, styleElement) {
				if (BrowserInfo.get().isSafariOrIOS() || BrowserInfo.get().isOpera()) setTimeout(() => {
					if (this.#resources.isLoaded(styleSheetContents)) this.#resources.fireLoad(event);
					else this.#resources.fireError(event);
				}, 5e3);
				else addOnloadHandler(styleElement, () => this.#resources.fireLoad(event), () => this.#resources.fireError(event));
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ServerConnector.js
var ServerConnector;
function init_ServerConnector() {
	return (init_ServerConnector = __esmMin((() => {
		init_JsonConstants();
		ServerConnector = class {
			#registry;
			/**
			* Creates a new server connector.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Sends a navigation message to server.
			*
			* @param location - the relative location of the navigation
			* @param stateObject - the state object or `null` if none applicable
			* @param routerLinkEvent - `true` if this event was triggered by interaction
			*          with a router link; `false` if triggered by history navigation
			*/
			sendNavigationMessage(location, stateObject, routerLinkEvent) {
				const message = {};
				message[JsonConstants.RPC_TYPE] = JsonConstants.RPC_TYPE_NAVIGATION;
				message[JsonConstants.RPC_NAVIGATION_LOCATION] = location;
				if (stateObject !== null && stateObject !== void 0) message[JsonConstants.RPC_NAVIGATION_STATE] = encodeWithoutTypeInfo(stateObject);
				if (routerLinkEvent) message[JsonConstants.RPC_NAVIGATION_ROUTERLINK] = 1;
				this.#sendMessage(message);
			}
			/**
			* Sends an event message to the server.
			*
			* @param nodeOrId - the node that listened to the event
			* @param eventType - the type of event
			* @param eventData - extra data associated with the event
			*/
			sendEventMessage(nodeOrId, eventType, eventData) {
				const nodeId = typeof nodeOrId === "number" ? nodeOrId : nodeOrId.getId();
				const message = {};
				message[JsonConstants.RPC_TYPE] = JsonConstants.RPC_TYPE_EVENT;
				message[JsonConstants.RPC_NODE] = nodeId;
				message[JsonConstants.RPC_EVENT_TYPE] = eventType;
				if (eventData !== null && eventData !== void 0) message[JsonConstants.RPC_EVENT_DATA] = eventData;
				this.#sendMessage(message);
			}
			/**
			* Sends a template event message to the server.
			*
			* @param node - the node that listened to the event
			* @param methodName - the event handler method name to execute on the server side
			* @param argsArray - the arguments array for the method
			* @param promiseId - the promise id to use for getting the result back, or -1 if no
			*          * result is expected
			*/
			sendTemplateEventMessage(node, methodName, argsArray, promiseId) {
				const message = {};
				message[JsonConstants.RPC_TYPE] = JsonConstants.RPC_PUBLISHED_SERVER_EVENT_HANDLER;
				message[JsonConstants.RPC_NODE] = node.getId();
				message[JsonConstants.RPC_TEMPLATE_EVENT_METHOD_NAME] = methodName;
				message[JsonConstants.RPC_TEMPLATE_EVENT_ARGS] = argsArray;
				if (promiseId !== -1) message[JsonConstants.RPC_TEMPLATE_EVENT_PROMISE] = promiseId;
				this.#sendMessage(message);
			}
			/**
			* Sends a node value sync message to the server.
			*
			* @param node - the node to update
			* @param feature - the id of the node map feature to update
			* @param key - the map key to update
			* @param value - the new value
			*/
			sendNodeSyncMessage(node, feature, key, value) {
				const message = {};
				message[JsonConstants.RPC_TYPE] = JsonConstants.RPC_TYPE_MAP_SYNC;
				message[JsonConstants.RPC_NODE] = node.getId();
				message[JsonConstants.RPC_FEATURE] = feature;
				message[JsonConstants.RPC_PROPERTY] = key;
				message[JsonConstants.RPC_PROPERTY_VALUE] = encodeWithoutTypeInfo(value);
				this.#sendMessage(message);
			}
			/**
			* Sends a data for attach existing element server side callback.
			*
			* @param parent - parent of the node to attach
			* @param requestedId - originally requested id of a server side node
			* @param assignedId - identifier which should be used on the server side for the
			*          element (instead of requestedId)
			* @param tagName - the requested tagName
			* @param index - the index of the element on the server side
			*/
			sendExistingElementAttachToServer(parent, requestedId, assignedId, tagName, index) {
				const message = {};
				message[JsonConstants.RPC_TYPE] = JsonConstants.RPC_ATTACH_EXISTING_ELEMENT;
				message[JsonConstants.RPC_NODE] = parent.getId();
				message[JsonConstants.RPC_ATTACH_REQUESTED_ID] = requestedId;
				message[JsonConstants.RPC_ATTACH_ASSIGNED_ID] = assignedId;
				message[JsonConstants.RPC_ATTACH_TAG_NAME] = tagName;
				message[JsonConstants.RPC_ATTACH_INDEX] = index;
				this.#sendMessage(message);
			}
			/**
			* Sends a data for attach existing element with id server side callback.
			*
			* @param parent - parent of the node to attach
			* @param requestedId - originally requested id of a server side node
			* @param assignedId - identifier which should be used on the server side for the
			*          element (instead of requestedId)
			* @param id - id of requested element
			*/
			sendExistingElementWithIdAttachToServer(parent, requestedId, assignedId, id) {
				const message = {};
				message[JsonConstants.RPC_TYPE] = JsonConstants.RPC_ATTACH_EXISTING_ELEMENT_BY_ID;
				message[JsonConstants.RPC_NODE] = parent.getId();
				message[JsonConstants.RPC_ATTACH_REQUESTED_ID] = requestedId;
				message[JsonConstants.RPC_ATTACH_ASSIGNED_ID] = assignedId;
				message[JsonConstants.RPC_ATTACH_ID] = id;
				this.#sendMessage(message);
			}
			/**
			* Sends a return channel message to the server.
			*
			* @param stateNodeId - the id of the state node that owns the channel.
			* @param channelId - the id of the channel.
			* @param args - array of arguments passed to the channel, not * `null`.
			*/
			sendReturnChannelMessage(stateNodeId, channelId, args) {
				const message = {};
				message[JsonConstants.RPC_TYPE] = JsonConstants.RPC_TYPE_CHANNEL;
				message[JsonConstants.RPC_NODE] = stateNodeId;
				message[JsonConstants.RPC_CHANNEL] = channelId;
				message[JsonConstants.RPC_CHANNEL_ARGUMENTS] = args;
				this.#sendMessage(message);
			}
			#sendMessage(message) {
				this.#registry.getLoadingIndicatorStateHandler().processMessage(message[JsonConstants.RPC_TYPE] ?? null, message[JsonConstants.RPC_EVENT_TYPE] ?? null);
				const rpcQueue = this.#registry.getServerRpcQueue();
				rpcQueue.add(message);
				rpcQueue.flush();
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/ServerRpcQueue.js
var NO_OP, ServerRpcQueue;
function init_ServerRpcQueue() {
	return (init_ServerRpcQueue = __esmMin((() => {
		init_TrackingScheduler();
		init_Console();
		NO_OP = () => {};
		ServerRpcQueue = class {
			#pendingInvocations = [];
			#flushPending = false;
			#registry;
			#doFlushStrategy = NO_OP;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Adds an explicit RPC method invocation to the send queue.
			*
			* @param invocation - RPC method invocation
			*/
			add(invocation) {
				if (!this.#registry.getUILifecycle().isRunning()) {
					Console.warn("Trying to invoke method on not yet started or stopped application");
					return;
				}
				this.#pendingInvocations.push(invocation);
			}
			/** Clears the queue and cancels any scheduled flush. */
			clear() {
				this.#pendingInvocations = [];
				this.#flushPending = false;
				this.#doFlushStrategy = NO_OP;
			}
			/**
			* Returns the current size of the queue.
			*
			* @returns the number of invocations in the queue
			*/
			size() {
				return this.#pendingInvocations.length;
			}
			/**
			* Checks if the queue is empty.
			*
			* @returns true if the queue is empty, false otherwise
			*/
			isEmpty() {
				return this.size() === 0;
			}
			/** Triggers a deferred send of the queued invocations to the server. */
			flush() {
				if (this.#isFlushScheduled() || this.isEmpty()) return;
				this.#flushPending = true;
				this.#doFlushStrategy = () => this.#doFlush();
				getScheduler().scheduleDeferred(() => this.#doFlushStrategy());
			}
			/**
			* Checks if a flush operation is pending.
			*
			* @returns true if a flush is pending, false otherwise
			*/
			isFlushPending() {
				return this.#flushPending;
			}
			/**
			* Checks if a loading indicator should be shown when the RPCs have been sent to the
			* server and we are waiting for a response.
			*
			* @returns true if a loading indicator should be shown, false otherwise
			*/
			showLoadingIndicator() {
				return true;
			}
			/**
			* Returns the current invocations as JSON.
			*
			* @returns the current invocations in a JSON format ready to be sent to the * server
			*/
			toJson() {
				return this.#pendingInvocations;
			}
			#isFlushScheduled() {
				return this.#doFlushStrategy !== NO_OP;
			}
			#doFlush() {
				this.#doFlushStrategy = NO_OP;
				if (!this.isFlushPending()) return;
				this.#registry.getMessageSender().sendInvocationsToServer();
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ExecuteJavaScriptElementUtils.js
/**
* Calculate the data required for server side callback to attach existing
* element and send it to the server.
*
* @param parent - the parent node whose child is requested to attach
* @param previousSibling - previous sibling element
* @param tagName - the tag name of the element requested to attach
* @param id - the identifier of the server side node which is requested to be a counterpart of the client side element
*/
function attachExistingElement(parent, previousSibling, tagName, id) {
	let existingElement = null;
	const childNodes = parent.getDomNode().childNodes;
	const indices = /* @__PURE__ */ new Map();
	let afterSibling = previousSibling === null;
	let elementIndex = -1;
	for (let i = 0; i < childNodes.length; i++) {
		const node = childNodes[i];
		indices.set(node, i);
		if (node === previousSibling) afterSibling = true;
		if (afterSibling && hasTag(node, tagName)) {
			existingElement = node;
			elementIndex = i;
			break;
		}
	}
	if (existingElement === null) {
		parent.getTree().sendExistingElementAttachToServer(parent, id, -1, tagName, -1);
		return;
	}
	const list = parent.getList(NodeFeatures.ELEMENT_CHILDREN);
	let existingId = null;
	let childIndex = 0;
	for (let i = 0; i < list.length(); i++) {
		const stateNode = list.get(i);
		const domNode = stateNode.getDomNode();
		const index = indices.get(domNode);
		if (index !== void 0 && index < elementIndex) childIndex++;
		if (domNode === existingElement) {
			existingId = stateNode.getId();
			break;
		}
	}
	existingId = getExistingIdOrUpdate(parent, id, existingElement, existingId);
	parent.getTree().sendExistingElementAttachToServer(parent, id, existingId, existingElement.tagName, childIndex);
}
function hasTag(node, tag) {
	return node instanceof Element && tag.toLowerCase() === node.tagName.toLowerCase();
}
/**
* Populate model `properties`: add them into
* `NodeFeatures.NodeFeatures.ELEMENT_PROPERTIES` {@link NodeMap} if they are
* not defined by the client-side element or send their client-side value to
* the server otherwise.
*
* @param node - the node whose properties should be populated
* @param properties - array of property names to populate
*/
function populateModelProperties(node, properties) {
	const map = node.getMap(NodeFeatures.ELEMENT_PROPERTIES);
	if (node.getDomNode() === null) {
		invokeWhenDefined(getTag$1(node), () => Reactive.addPostFlushListener(() => populateModelProperties(node, properties)));
		return;
	}
	for (const property of properties) populateMapProperty(node, map, property);
}
function populateMapProperty(node, map, property) {
	const domNode = node.getDomNode();
	if (!isPropertyDefined(domNode, property)) {
		if (!map.hasPropertyValue(property)) map.getProperty(property).setValue(null);
	} else {
		const updatableProperties = node.getNodeData(UpdatableModelProperties);
		if (updatableProperties === null || !updatableProperties.isUpdatableProperty(property)) return;
		map.getProperty(property).syncToServer(getJsProperty(domNode, property));
	}
}
/**
* Register the updatable model properties of the `node`.
*
* Only updates for the properties from the `properties` array will be
* sent to the server without explicit synchronization. The
* `properties` array includes all properties that are allowed to be
* updated (including sub properties).
*
* @param node - the node whose updatable properties should be registered
* @param properties - all updatable model properties
*/
function registerUpdatableModelProperties(node, properties) {
	if (properties.length > 0) node.setNodeData(new UpdatableModelProperties(properties));
}
/**
* Stores a cleanup callback for a JS initializer registered through
* {@link com.vaadin.flow.dom.Element#addJsInitializer}. If a callback was
* previously stored for the same id, it is invoked before being replaced
* (defensive against stale state from a discarded DOM). On the first
* registration for a node, an unregister listener is attached so that all
* remaining cleanups are drained when the node leaves the tree.
*
* @param node - the state node owning the initializer, not `null`
* @param id - the UI-wide initializer id
* @param cleanup - the JS cleanup function to invoke when disposing, not `null`
*/
function registerInitializer(node, id, cleanup) {
	let entry = initializerCleanups.get(node);
	if (entry === void 0) {
		entry = /* @__PURE__ */ new Map();
		initializerCleanups.set(node, entry);
		node.addUnregisterListener(() => drainInitializers(node));
	}
	const existing = entry.get(id);
	entry.set(id, cleanup);
	if (existing !== void 0) invokeSafely(existing);
}
/**
* Disposes a previously registered JS initializer cleanup. No-op if the id
* is unknown (e.g. the node has already been unregistered).
*
* @param node - the state node owning the initializer, not `null`
* @param id - the UI-wide initializer id
*/
function disposeInitializer(node, id) {
	const entry = initializerCleanups.get(node);
	if (entry === void 0) return;
	const fn = entry.get(id);
	if (fn === void 0) return;
	entry.delete(id);
	invokeSafely(fn);
}
function drainInitializers(node) {
	const entry = initializerCleanups.get(node);
	if (entry === void 0) return;
	initializerCleanups.delete(node);
	entry.forEach((fn) => invokeSafely(fn));
}
function invokeSafely(fn) {
	try {
		fn();
	} catch (error) {
		Console.error(error instanceof Error ? error.message : String(error));
	}
}
function getExistingIdOrUpdate(parent, serverSideId, existingElement, existingId) {
	if (existingId === null) {
		const map = parent.getTree().getRegistry().getExistingElementMap();
		const fromMap = map.getId(existingElement);
		if (fromMap === null) {
			map.add(serverSideId, existingElement);
			return serverSideId;
		}
		return fromMap;
	}
	return existingId;
}
/**
* Checks whether the node's element class declares the given property with a
* default value (Polymer-style static `properties` with a `value`).
*/
function isPropertyDefined(node, property) {
	const ctor = node.constructor;
	const declared = ctor && ctor.properties && ctor.properties[property];
	return !!declared && typeof declared.value !== "undefined";
}
var initializerCleanups;
function init_ExecuteJavaScriptElementUtils() {
	return (init_ExecuteJavaScriptElementUtils = __esmMin((() => {
		init_NodeFeatures();
		init_PolymerUtils();
		init_Reactive();
		init_UpdatableModelProperties();
		init_Console();
		initializerCleanups = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/ExecuteJavaScriptProcessor.js
/**
* Builds the object the executed JavaScript runs against (its `this`). The
* application id has its trailing per-UI suffix (`-<number>`) stripped so the
* script sees the stable app id.
*/
function getContextExecutionObject(appId, registry, callbacks) {
	const object = {};
	object.getNode = callbacks.getNode;
	object.$appId = appId.replace(/-\d+$/, "");
	object.registry = registry;
	object.attachExistingElement = (parent, previousSibling, tagName, id) => callbacks.attachExistingElement(callbacks.getNode(parent), previousSibling, tagName, id);
	object.populateModelProperties = (element, properties) => callbacks.populateModelProperties(callbacks.getNode(element), properties);
	object.registerUpdatableModelProperties = (element, properties) => callbacks.registerUpdatableModelProperties(callbacks.getNode(element), properties);
	object.stopApplication = callbacks.stopApplication;
	object.registerInitializer = callbacks.registerInitializer;
	object.disposeInitializer = callbacks.disposeInitializer;
	return object;
}
/**
* Manifests and runs a server-sent JavaScript invocation: builds a function from
* the parameter names followed by the expression, then applies it with the given
* context as `this` and the parameter values as arguments. Exceptions are caught
* and reported (the failing code is logged outside production mode). Mirrors
* ExecuteJavaScriptProcessor.invoke (the context object is assembled by
* getContextExecutionObject).
*/
function invokeJavaScript(parameterNamesAndCode, parameters, context, productionMode) {
	assert(parameterNamesAndCode.length === parameters.length + 1, "Expected one more entry in parameterNamesAndCode than there are parameters");
	try {
		new Function(...parameterNamesAndCode).apply(context, parameters);
	} catch (exception) {
		Console.reportStacktrace(exception);
		Console.error("Exception is thrown during JavaScript execution. Stacktrace will be dumped separately.");
		if (!productionMode) {
			Console.error(exception);
			Console.error(`The error has occurred in the JS code: '${parameterNamesAndCode.join(", ")}'`);
		}
	}
}
var ExecuteJavaScriptProcessor;
function init_ExecuteJavaScriptProcessor() {
	return (init_ExecuteJavaScriptProcessor = __esmMin((() => {
		init_NodeProperties();
		init_NodeFeatures();
		init_SimpleElementBindingStrategy();
		init_ExecuteJavaScriptElementUtils();
		init_Reactive();
		init_UILifecycle();
		init_Console();
		ExecuteJavaScriptProcessor = class {
			#registry;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Executes invocations received from the server.
			*
			* @param invocations - a JSON containing invocation data
			*/
			execute(invocations) {
				for (const invocation of invocations) this.#handleInvocation(invocation);
			}
			#handleInvocation(invocation) {
				const tree = this.#registry.getStateTree();
				const parameterCount = invocation.length - 1;
				const parameterNamesAndCode = [];
				const parameters = [];
				const nodeParameters = /* @__PURE__ */ new Map();
				for (let i = 0; i < parameterCount; i++) {
					const parameterJson = invocation[i];
					const parameter = decodeWithTypeInfo(tree, parameterJson);
					parameters.push(parameter);
					parameterNamesAndCode.push(`$${i}`);
					const stateNode = decodeStateNode(tree, parameterJson);
					if (stateNode !== null) {
						if (this.#isVirtualChildAwaitingInitialization(stateNode) || !this.isBound(stateNode)) {
							stateNode.addDomNodeSetListener(() => {
								Reactive.addPostFlushListener(() => this.#handleInvocation(invocation));
								return true;
							});
							return;
						}
						nodeParameters.set(parameter, stateNode);
					}
				}
				parameterNamesAndCode.push(invocation[invocation.length - 1]);
				this.invoke(parameterNamesAndCode, parameters, nodeParameters);
			}
			#isVirtualChildAwaitingInitialization(node) {
				if (node.getDomNode() !== null || node.getTree().getNode(node.getId()) === null) return false;
				const elementData = node.getMap(NodeFeatures.ELEMENT_DATA);
				if (elementData.hasPropertyValue(NodeProperties.PAYLOAD)) {
					const value = elementData.getProperty(NodeProperties.PAYLOAD).getValue();
					if (value !== null && typeof value === "object") {
						const type = value[NodeProperties.TYPE];
						return type === NodeProperties.INJECT_BY_ID || type === NodeProperties.TEMPLATE_IN_TEMPLATE;
					}
				}
				return false;
			}
			isBound(node) {
				const isNodeBound = node.getDomNode() !== null && !needsRebind(node);
				const parent = node.getParent();
				if (!isNodeBound || parent === null) return isNodeBound;
				return this.isBound(parent);
			}
			/**
			* Executes the actual invocation.
			*
			* Protected instead of private for testing purposes, as in Java.
			*
			* @param parameterNamesAndCode - an array consisting of parameter names
			*          followed by the JavaScript expression to execute
			* @param parameters - an array of parameter values
			* @param nodeParameters - the node parameters
			*/
			invoke(parameterNamesAndCode, parameters, nodeParameters) {
				const configuration = this.#registry.getApplicationConfiguration();
				const getNode = (element) => {
					const node = nodeParameters.get(element);
					if (node === void 0) throw new ReferenceError("There is no a StateNode for the given argument.");
					return node;
				};
				invokeJavaScript(parameterNamesAndCode, parameters, getContextExecutionObject(configuration.getApplicationId(), this.#registry, {
					getNode,
					attachExistingElement,
					populateModelProperties,
					registerUpdatableModelProperties,
					stopApplication: () => {
						const lifecycle = this.#registry.getUILifecycle();
						if (!lifecycle.isTerminated()) lifecycle.setState(UIState.TERMINATED);
					},
					registerInitializer,
					disposeInitializer
				}), configuration.isProductionMode());
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ExistingElementMap.js
var ExistingElementMap;
function init_ExistingElementMap() {
	return (init_ExistingElementMap = __esmMin((() => {
		ExistingElementMap = class {
			#elementToId = /* @__PURE__ */ new Map();
			#idToElement = [];
			/**
			* Gets the element stored via the {@link add} method by the given `id`.
			*
			* @param id - identifier associated with an element
			* @returns the element associated with the `id` or null if it doesn't exist
			*/
			getElement(id) {
				return this.#idToElement[id] ?? null;
			}
			/**
			* Gets the id stored via the {@link add} method by the given `element`.
			*
			* @param element - element associated with an identifier
			* @returns the identifier associated with the `element` or null if it doesn't
			*          exist
			*/
			getId(element) {
				const id = this.#elementToId.get(element);
				return id === void 0 ? null : id;
			}
			/**
			* Remove the identifier and the associated element from the mapping.
			*
			* @param id - identifier to remove
			*/
			remove(id) {
				const element = this.#idToElement[id];
				if (element !== null && element !== void 0) {
					this.#idToElement[id] = null;
					this.#elementToId.delete(element);
				}
			}
			/**
			* Adds the `id` and the `element` to the mapping.
			*
			* @param id - identifier of the server side node
			* @param element - element associated with the identifier
			*/
			add(id, element) {
				this.#idToElement[id] = element;
				this.#elementToId.set(element, id);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/InitialPropertiesHandler.js
var InitialPropertiesHandler;
function init_InitialPropertiesHandler() {
	return (init_InitialPropertiesHandler = __esmMin((() => {
		init_Reactive();
		init_NodeFeatures();
		InitialPropertiesHandler = class {
			#registry;
			#newNodeDuringUpdate = /* @__PURE__ */ new Set();
			#propertyUpdateQueue = [];
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Flushes the collected property update queue. Supposed to be called at the
			* end of tree change processing.
			*/
			flushPropertyUpdates() {
				if (!this.#registry.getStateTree().isUpdateInProgress()) {
					const properties = /* @__PURE__ */ new Map();
					this.#newNodeDuringUpdate.forEach((node) => this.#collectInitialProperties(node, properties));
					Reactive.addPostFlushListener(() => this.#doFlushPropertyUpdates(properties));
				}
			}
			/**
			* Notifies the handler about registered node.
			*
			* The method is called for the newly created `node` which is registered in
			* the {@link StateTree}.
			*
			* @param node - the newly registered node
			*/
			nodeRegistered(node) {
				this.#newNodeDuringUpdate.add(node.getId());
			}
			/**
			* Handles the property update before it's sent to the server via RPC.
			*
			* The method returns `true` for the `property` which shouldn't be sent to
			* the server because it's going to be handled by the handler (queued and sent
			* later on if allowed).
			*
			* @param property - property to handle
			* @returns `true` if property is handled by the handler, `false` otherwise
			*/
			handlePropertyUpdate(property) {
				if (this.#isNodeNewlyCreated(property.getMap().getNode())) {
					this.#propertyUpdateQueue.push(property);
					return true;
				}
				return false;
			}
			#resetProperty(property, properties) {
				const ignoreProperties = properties.get(property.getMap().getNode().getId());
				if (ignoreProperties !== void 0 && ignoreProperties.has(property.getName())) {
					property.setValue(ignoreProperties.get(property.getName()));
					return true;
				}
				return false;
			}
			#isNodeNewlyCreated(node) {
				return this.#newNodeDuringUpdate.has(node.getId());
			}
			#doFlushPropertyUpdates(properties) {
				this.#newNodeDuringUpdate.clear();
				while (this.#propertyUpdateQueue.length > 0) {
					const property = this.#propertyUpdateQueue.shift();
					if (!this.#resetProperty(property, properties)) this.#registry.getStateTree().sendNodePropertySyncToServer(property);
					Reactive.flush();
				}
			}
			#collectInitialProperties(id, properties) {
				const node = this.#registry.getStateTree().getNode(id);
				if (node.hasFeature(NodeFeatures.ELEMENT_PROPERTIES)) {
					const map = /* @__PURE__ */ new Map();
					node.getMap(NodeFeatures.ELEMENT_PROPERTIES).forEachProperty((property, name) => map.set(name, property.getValue()));
					properties.set(id, map);
				}
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/flow/StateTree.js
var StateTree;
function init_StateTree() {
	return (init_StateTree = __esmMin((() => {
		init_NodeList();
		init_NodeFeatures();
		init_NodeProperties();
		init_StateNode();
		init_Console();
		init_ServerEventObject();
		StateTree = class {
			#idToNode = /* @__PURE__ */ new Map();
			#registry;
			#rootNode;
			#nodeFeatureDebugName = null;
			#updateInProgress = false;
			#resync = false;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
				this.#rootNode = new StateNode(1, this);
				this.registerNode(this.#rootNode);
			}
			/**
			* Mark this tree as being updated.
			*
			* @param updateInProgress - `true` if the tree is being updated, `false` if
			*          not
			* @see {@link isUpdateInProgress}
			*/
			setUpdateInProgress(updateInProgress) {
				assert(this.#updateInProgress !== updateInProgress, `Inconsistent state tree updating status, expected ${updateInProgress ? "no " : ""} updates in progress.`);
				this.#updateInProgress = updateInProgress;
				this.getRegistry().getInitialPropertiesHandler().flushPropertyUpdates();
			}
			/**
			* Returns whether this tree is currently being updated by
			* {@link processChanges}.
			*
			* @returns `true` if being updated, `false` if not
			*/
			isUpdateInProgress() {
				return this.#updateInProgress;
			}
			/**
			* Registers a node with this tree.
			*
			* @param node - the node to register
			*/
			registerNode(node) {
				assert(node.getTree() === this, "Node is not created for this tree");
				assert(!node.isUnregistered(), "Can't re-register a node");
				assert(!this.#idToNode.has(node.getId()), `Node ${node.getId()} is already registered`);
				this.#idToNode.set(node.getId(), node);
				if (this.isUpdateInProgress()) this.getRegistry().getInitialPropertiesHandler().nodeRegistered(node);
			}
			/**
			* Unregisters a node from this tree. Once the node has been unregistered, it
			* can't be registered again.
			*
			* @param node - the node to unregister
			*/
			unregisterNode(node) {
				assert(this.#assertValidNode(node), "Invalid node");
				assert(node !== this.#rootNode, "Root node can't be unregistered");
				this.#idToNode.delete(node.getId());
				node.unregister();
			}
			/**
			* Unregisters all nodes except root from this tree, and clears the root's
			* features. Use to reset the tree in preparation for rebuilding it in in a
			* resynchronization response.
			*/
			prepareForResync() {
				this.#rootNode.getList(NodeFeatures.VIRTUAL_CHILDREN).forEach((sn) => this.#clearLists(sn));
				this.#clearLists(this.#rootNode);
				this.#idToNode.forEach((node) => {
					if (node !== this.#rootNode) {
						const dom = node.getDomNode();
						if (dom !== null && getIfPresent(dom) !== null) rejectPromises(getIfPresent(dom));
						this.unregisterNode(node);
						node.setParent(null);
					}
				});
				this.setResync(true);
			}
			/**
			* Check if tree is resynchronizing after a {@link prepareForResync}
			*
			* @returns true if resync called
			*/
			isResync() {
				return this.#resync;
			}
			/**
			* Set the resynchronization state for the StateTree.
			*
			* @param resync - resynchronization state to set
			*/
			setResync(resync) {
				this.#resync = resync;
			}
			/**
			* Returns the state node in the tree for the given dom node or `null` if none
			* found.
			*
			* Comparison is done with Node.isSameNode() method which is same as `===`
			* comparison.
			*
			* @param domNode - the dom node to find state node for
			* @returns the state node or null
			*/
			getStateNodeForDomNode(domNode) {
				for (const stateNode of this.#idToNode.values()) if (domNode.isSameNode(stateNode.getDomNode())) return stateNode;
				return null;
			}
			#clearLists(stateNode) {
				stateNode.forEachFeature((feature, featureId) => {
					if (feature instanceof NodeList) {
						if (featureId === NodeFeatures.ELEMENT_CHILDREN) feature.splice(0, feature.length());
						else feature.clear();
					}
				});
			}
			/**
			* Verifies that the provided node is not null and properly registered with
			* this state tree.
			*
			* @param node - the node to test
			* @returns always `true`, for use with the {@link assert} helper
			*/
			#assertValidNode(node) {
				assert(node !== null, "Node is null");
				assert(node.getTree() === this, "Node is not created for this tree");
				assert(node === this.getNode(node.getId()), "Node id is not registered with this tree");
				return true;
			}
			/**
			* Validates that the provided node is not null and is properly registered for
			* this state tree.
			*
			* Logs a warning if there was a problem with the node.
			*
			* @param node - node to test
			* @returns node is valid
			*/
			#isValidNode(node) {
				let isValid = true;
				if (node === null) {
					Console.warn("Node is null");
					isValid = false;
				} else if (node.getTree() !== this) {
					Console.warn("Node is not created for this tree");
					isValid = false;
				} else if (node !== this.getNode(node.getId())) {
					Console.warn("Node id is not registered with this tree");
					isValid = false;
				}
				return isValid;
			}
			/**
			* Finds the node with the given id.
			*
			* @param id - the id
			* @returns the node with the given id, or `null` if no such node is
			*          registered.
			*/
			getNode(id) {
				return this.#idToNode.get(id) ?? null;
			}
			/**
			* Gets the root node of this tree.
			*
			* @returns the root node
			*/
			getRootNode() {
				return this.#rootNode;
			}
			/**
			* Sends an event to the server.
			*
			* @param node - the node that listened to the event
			* @param eventType - the type of event
			* @param eventData - extra data associated with the event
			*/
			sendEventToServer(node, eventType, eventData) {
				if (this.#isValidNode(node)) this.#registry.getServerConnector().sendEventMessage(node, eventType, eventData);
			}
			/**
			* Sends a map property sync to the server.
			*
			* @param property - the property that should have its value synced to the
			*          server, not `null`
			*/
			sendNodePropertySyncToServer(property) {
				const nodeMap = property.getMap();
				const node = nodeMap.getNode();
				if (this.getRegistry().getInitialPropertiesHandler().handlePropertyUpdate(property) || !this.#isValidNode(node)) return;
				this.#registry.getServerConnector().sendNodeSyncMessage(node, nodeMap.getId(), property.getName(), property.getValue());
			}
			/**
			* Sends a request to call server side method with `methodName` using
			* `argsArray` as argument values.
			*
			* In cases when the state tree has been changed and we receive a delayed or
			* deferred template event the event is just ignored.
			*
			* @param node - the node referring to the server side instance containing the
			*          method
			* @param methodName - the method name
			* @param argsArray - the arguments array for the method
			* @param promiseId - the promise id to use for getting the result back, or -1
			*          if no result is expected
			*/
			sendTemplateEventToServer(node, methodName, argsArray, promiseId) {
				if (this.#isValidNode(node)) this.#registry.getServerConnector().sendTemplateEventMessage(node, methodName, argsArray, promiseId);
			}
			/**
			* Sends a data for attach existing element server side callback.
			*
			* @param parent - parent of the node to attach
			* @param requestedId - originally requested id of a server side node
			* @param assignedId - identifier which should be used on the server side for
			*          the element (instead of requestedId)
			* @param tagName - the requested tagName
			* @param index - the index of the element on the server side
			*/
			sendExistingElementAttachToServer(parent, requestedId, assignedId, tagName, index) {
				assert(this.#assertValidNode(parent), "Invalid node");
				this.#registry.getServerConnector().sendExistingElementAttachToServer(parent, requestedId, assignedId, tagName, index);
			}
			/**
			* Sends a data for attach existing element with id server side callback.
			*
			* @param parent - parent of the node to attach
			* @param requestedId - originally requested id of a server side node
			* @param assignedId - identifier which should be used on the server side for
			*          the element (instead of requestedId)
			* @param id - id of requested element
			*/
			sendExistingElementWithIdAttachToServer(parent, requestedId, assignedId, id) {
				assert(this.#assertValidNode(parent), "Invalid node");
				this.#registry.getServerConnector().sendExistingElementWithIdAttachToServer(parent, requestedId, assignedId, id);
			}
			/**
			* Gets the {@link Registry} that this state tree belongs to.
			*
			* @returns the registry of this tree, not `null`
			*/
			getRegistry() {
				return this.#registry;
			}
			/**
			* Returns the visibility state of the `node`.
			*
			* @param node - the node whose visibility is tested
			* @returns `true` is the node is visible, `false` otherwise
			*/
			isVisible(node) {
				if (!node.hasFeature(NodeFeatures.ELEMENT_DATA)) return true;
				return node.getMap(NodeFeatures.ELEMENT_DATA).getProperty(NodeProperties.VISIBLE).getValue() !== false;
			}
			/**
			* Checks whether the `node` is active.
			*
			* The node is active if it's visible and all its ancestors are visible.
			*
			* @param node - the node whose activity is tested
			* @returns `true` is the node is active, `false` otherwise
			*/
			isActive(node) {
				const visible = this.isVisible(node);
				const parent = node.getParent();
				if (!visible || parent === null) return visible;
				return this.isActive(parent);
			}
			/**
			* Returns a human readable string for the name space with the given id.
			*
			* Package-private in Java; exported here only because TypeScript has no
			* package-private visibility and the same-package {@link StateNode} needs it. Not
			* public API.
			*
			* @param id - the node feature id
			* @returns a human readable string describing the node feature
			* @internal
			*/
			getFeatureDebugName(id) {
				if (this.#nodeFeatureDebugName === null) {
					const names = /* @__PURE__ */ new Map();
					names.set(NodeFeatures.ELEMENT_DATA, "elementData");
					names.set(NodeFeatures.ELEMENT_PROPERTIES, "elementProperties");
					names.set(NodeFeatures.ELEMENT_CHILDREN, "elementChildren");
					names.set(NodeFeatures.ELEMENT_ATTRIBUTES, "elementAttributes");
					names.set(NodeFeatures.ELEMENT_LISTENERS, "elementListeners");
					names.set(NodeFeatures.UI_PUSHCONFIGURATION, "pushConfiguration");
					names.set(NodeFeatures.UI_PUSHCONFIGURATION_PARAMETERS, "pushConfigurationParameters");
					names.set(NodeFeatures.TEXT_NODE, "textNode");
					names.set(NodeFeatures.POLL_CONFIGURATION, "pollConfiguration");
					names.set(NodeFeatures.RECONNECT_DIALOG_CONFIGURATION, "reconnectDialogConfiguration");
					names.set(NodeFeatures.LOADING_INDICATOR_CONFIGURATION, "loadingIndicatorConfiguration");
					names.set(NodeFeatures.CLASS_LIST, "classList");
					names.set(NodeFeatures.ELEMENT_STYLE_PROPERTIES, "elementStyleProperties");
					names.set(NodeFeatures.COMPONENT_MAPPING, "componentMapping");
					names.set(NodeFeatures.TEMPLATE_MODELLIST, "modelList");
					names.set(NodeFeatures.POLYMER_SERVER_EVENT_HANDLERS, "polymerServerEventHandlers");
					names.set(NodeFeatures.POLYMER_EVENT_LISTENERS, "polymerEventListenerMap");
					names.set(NodeFeatures.CLIENT_DELEGATE_HANDLERS, "clientDelegateHandlers");
					names.set(NodeFeatures.SHADOW_ROOT_DATA, "shadowRootData");
					names.set(NodeFeatures.SHADOW_ROOT_HOST, "shadowRootHost");
					names.set(NodeFeatures.ATTACH_EXISTING_ELEMENT, "attachExistingElementFeature");
					names.set(NodeFeatures.VIRTUAL_CHILDREN, "virtualChildrenList");
					names.set(NodeFeatures.BASIC_TYPE_VALUE, "basicTypeValue");
					this.#nodeFeatureDebugName = names;
				}
				return this.#nodeFeatureDebugName.get(id) ?? `Unknown node feature: ${id}`;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/SystemErrorHandler.js
/** Sends a credentialed GET request, mirroring Java's Xhr.getWithCredentials. */
function getWithCredentials(uri, onSuccess, onFail) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", uri, true);
	xhr.withCredentials = true;
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) onSuccess(xhr.responseText);
			else onFail(/* @__PURE__ */ new Error(`Session resynchronization request failed with status ${xhr.status}`));
		}
	};
	xhr.onerror = () => onFail(/* @__PURE__ */ new Error("Session resynchronization request failed"));
	xhr.send();
}
/**
* Replaces every element with the given tag name by a shallow clone, after
* mocking its disconnected callback. Used to detach stale components without
* triggering their server-side disconnect handling.
*/
function recreateNodes(elementName) {
	const elements = Array.from(document.getElementsByTagName(elementName));
	for (const elem of elements) {
		elem.$server.disconnected = () => {};
		elem.parentNode.replaceChild(elem.cloneNode(false), elem);
	}
}
function handleError(caption, message, details, querySelector) {
	const systemErrorContainer = document.createElement("div");
	systemErrorContainer.setAttribute("popover", "manual");
	systemErrorContainer.className = "v-system-error";
	const appendPart = (text, partClassName) => {
		if (text !== null) {
			const partDiv = document.createElement("div");
			partDiv.className = partClassName;
			partDiv.textContent = text;
			systemErrorContainer.appendChild(partDiv);
			Console.error(text);
		}
	};
	appendPart(caption, "caption");
	appendPart(message, "message");
	appendPart(details, "details");
	if (querySelector !== null) {
		const baseElement = document.querySelector(querySelector);
		if (baseElement !== null) (getShadowRootElement(baseElement) ?? baseElement).appendChild(systemErrorContainer);
	} else document.body.appendChild(systemErrorContainer);
	showPopover(systemErrorContainer);
	return systemErrorContainer;
}
/** Invokes the native showPopover() of the element if it supports it. */
function showPopover(el) {
	const fn = el && el.showPopover;
	if (typeof fn === "function") fn.call(el);
}
/** Returns the shadow root of the given host element, if any. */
function getShadowRootElement(host) {
	return host.shadowRoot;
}
var REQUEST_TYPE_PARAMETER$1, REQUEST_TYPE_WEBCOMPONENT_RESYNC, UI_ID, SystemErrorHandler;
function init_SystemErrorHandler() {
	return (init_SystemErrorHandler = __esmMin((() => {
		init_MessageHandler();
		init_TrackingScheduler();
		init_UILifecycle();
		init_Console();
		REQUEST_TYPE_PARAMETER$1 = "v-r";
		REQUEST_TYPE_WEBCOMPONENT_RESYNC = "webcomponent-resync";
		UI_ID = "uiId";
		SystemErrorHandler = class {
			#registry;
			#resyncInProgress = false;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Shows the session expiration notification.
			*
			* @param details - message details or null if there are no details
			*/
			handleSessionExpiredError(details) {
				this.handleUnrecoverableErrorFor(details, this.#registry.getApplicationConfiguration().getSessionExpiredError());
			}
			/**
			* Shows an error notification for an error which is unrecoverable.
			*
			* Named apart from the caption/message/details overloads, which JavaScript
			* cannot distinguish by arity alone.
			*
			* @param details - message details or null if there are no details
			* @param message - an ErrorMessage describing the error
			*/
			handleUnrecoverableErrorFor(details, message) {
				const errorMessage = message;
				this.handleUnrecoverableError(errorMessage.caption ?? null, errorMessage.message ?? null, details, errorMessage.url ?? null, null);
			}
			/**
			* Shows an error notification for an error which is unrecoverable, using the
			* given parameters.
			*
			* @param caption - the caption of the message
			* @param message - the message body
			* @param details - message details or `null` if there are no details
			* @param url - a URL to redirect to when the user clicks the message or
			*          `null` to refresh on click
			* @param querySelector - query selector to find the element under which the
			*          error will be added . If element is not found or the selector is
			*          `null`, body will be used
			*/
			handleUnrecoverableError(caption, message, details, url, querySelector) {
				if (caption === null && message === null && details === null) {
					if (!this.#isWebComponentMode()) redirect(url);
					else this.#resynchronizeSession();
					return;
				}
				const systemErrorContainer = handleError(caption, message, details, querySelector);
				if (!this.#isWebComponentMode()) {
					systemErrorContainer.addEventListener("click", () => redirect(url), false);
					document.addEventListener("keydown", (event) => {
						if (event.key === "Escape") {
							event.preventDefault();
							redirect(url);
						}
					}, false);
				}
			}
			/**
			* Resynchronizes a web-component (embedded) session after server-side session
			* expiration: requests a fresh JSESSIONID, resets the registry, replays the
			* returned UIDL and re-establishes push, then recreates the exported web
			* components. Mirrors SystemErrorHandler.resynchronizeSession.
			*/
			#resynchronizeSession() {
				if (this.#resyncInProgress) {
					Console.debug("Web components resynchronization already in progress");
					return;
				}
				this.#resyncInProgress = true;
				const configuration = this.#registry.getApplicationConfiguration();
				const serviceUrl = `${configuration.getServiceUrl()}web-component/web-component-bootstrap.js`;
				this.#registry.getHeartbeat().setInterval(-1);
				if (this.#registry.getPushConfiguration().isPushEnabled()) this.#registry.getMessageSender().setPushEnabled(false, false);
				getWithCredentials(addGetParameters(serviceUrl, `${REQUEST_TYPE_PARAMETER$1}=${REQUEST_TYPE_WEBCOMPONENT_RESYNC}`), (responseText) => {
					Console.log(`Received xhr HTTP session resynchronization message: ${responseText}`);
					this.#registry.getHeartbeat().setInterval(-1);
					const uiId = configuration.getUIId();
					const json = parseJson(responseText);
					const newUiId = json[UI_ID];
					if (newUiId !== uiId) {
						Console.debug(`UI ID switched from ${uiId} to ${newUiId} after resynchronization`);
						configuration.setUIId(newUiId);
					}
					this.#registry.reset();
					this.#registry.getUILifecycle().setState(UIState.RUNNING);
					this.#registry.getMessageHandler().handleMessage(json);
					if (this.#registry.getPushConfiguration().isPushEnabled()) getScheduler().scheduleDeferred(() => {
						Console.debug("Re-establish PUSH connection");
						this.#registry.getMessageSender().setPushEnabled(true);
						getScheduler().scheduleDeferred(() => this.#recreateWebComponents());
					});
					else getScheduler().scheduleDeferred(() => this.#recreateWebComponents());
				}, (error) => {
					this.#registry.getHeartbeat().setInterval(configuration.getHeartbeatInterval());
					this.handleError(error.message);
				});
			}
			/** Recreates every exported web component's elements (detaching stale ones). */
			#recreateWebComponents() {
				for (const elementName of this.#registry.getApplicationConfiguration().getExportedWebComponents()) recreateNodes(elementName);
				this.#resyncInProgress = false;
			}
			/**
			* Shows the given error message if not running in production mode and logs
			* it to the console if running in production mode.
			*
			* @param errorMessage - the error message to show
			*/
			handleError(errorMessage) {
				Console.error(errorMessage);
			}
			/**
			* Shows the given error message if not running in production mode and logs it
			* to the console.
			*
			* @param error - the throwable which occurred
			*/
			handleErrorObject(error) {
				if (error instanceof Error && error.name === "AssertionError") this.handleError(`Assertion error: ${error.message}`);
				else this.handleError(error instanceof Error ? error.message : String(error));
			}
			/** Whether the application runs in web-component (embedded) mode. */
			#isWebComponentMode() {
				return this.#registry.getApplicationConfiguration().isWebComponentMode();
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/flow/shared/VaadinUriResolver.js
function processProtocol(protocol, replacement, vaadinUri) {
	if (vaadinUri.startsWith(protocol)) return replacement + vaadinUri.substring(protocol.length);
	return vaadinUri;
}
var CONTEXT_PROTOCOL_PREFIX, BASE_PROTOCOL_PREFIX, VaadinUriResolver;
function init_VaadinUriResolver() {
	return (init_VaadinUriResolver = __esmMin((() => {
		CONTEXT_PROTOCOL_PREFIX = "context://";
		BASE_PROTOCOL_PREFIX = "base://";
		VaadinUriResolver = class {
			/**
			* Translates a Vaadin URI to a URL that can be loaded by the browser. The
			* following URI schemes are supported:
			*
			* - `context://` resolves to the application context root
			* - `base://` - resolves to the base URI of the page
			*
			* Any other URI protocols, such as `http://` or `https://` are passed through
			* this method unmodified.
			*
			* @param uri - the URI to resolve
			* @param servletToContextRoot - the relative path from the servlet path (used
			*          as base path in the client) to the context root
			* @returns the resolved URI
			*/
			resolveVaadinUri(uri, servletToContextRoot) {
				if (uri === null) return null;
				let processedUri = processProtocol(CONTEXT_PROTOCOL_PREFIX, servletToContextRoot, uri);
				processedUri = processProtocol(BASE_PROTOCOL_PREFIX, "", processedUri);
				return processedUri;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/URIResolver.js
var URIResolver;
function init_URIResolver() {
	return (init_URIResolver = __esmMin((() => {
		init_VaadinUriResolver();
		URIResolver = class extends VaadinUriResolver {
			#registry;
			/**
			* Creates a new instance connected to the given registry.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				super();
				this.#registry = registry;
			}
			/**
			* Translates a Vaadin URI to a URL that can be loaded by the browser. The
			* following URI schemes are supported:
			*
			* - `context://` - resolves to the application context root
			* - `base://` - resolves to the base URI of the page
			*
			* Any other URI protocols, such as `http://` or `https://` are passed through
			* this method unmodified.
			*
			* @param uri - the URI to resolve
			* @returns the resolved URI
			*/
			resolveVaadinUri(uri) {
				return super.resolveVaadinUri(uri, this.getContextRootUrl());
			}
			getContextRootUrl() {
				return this.#registry.getApplicationConfiguration().getContextRootUrl();
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/XhrConnectionError.js
var XhrConnectionError;
function init_XhrConnectionError() {
	return (init_XhrConnectionError = __esmMin((() => {
		XhrConnectionError = class {
			#xhr;
			#payload;
			#error;
			/**
			* Creates a XhrConnectionError for the given request using the given payload.
			*
			* @param xhr - the request which caused the error
			* @param payload - the payload which was on its way to the server
			* @param error - the exception which caused the error or null if the error was
			*          not caused by an exception
			*/
			constructor(xhr, payload, error) {
				this.#xhr = xhr;
				this.#payload = payload;
				this.#error = error;
			}
			/**
			* Returns the exception which caused the problem, if available.
			*
			* @returns the exception which caused the problem, or null if not available
			*/
			getException() {
				return this.#error;
			}
			/**
			* Returns {@link XMLHttpRequest} which failed to reach the server.
			*
			* @returns the request which failed
			*/
			getXhr() {
				return this.#xhr;
			}
			/**
			* Returns the payload which was sent to the server.
			*
			* @returns the payload which was sent, never null
			*/
			getPayload() {
				return this.#payload;
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/communication/XhrConnection.js
/**
* Attempts to resend a request that is still in its initial (OPENED, readyState
* 1) state. Returns true if the request was still blocked and got re-sent, or
* false if it had already progressed or send() threw (it is running for real).
*/
function resendRequest(xhr) {
	if (xhr.readyState !== 1) return false;
	try {
		xhr.send();
		return true;
	} catch {
		return false;
	}
}
var REQUEST_TYPE_PARAMETER, REQUEST_TYPE_UIDL, UI_ID_PARAMETER, JSON_CONTENT_TYPE, XhrResponseHandler, XhrConnection;
function init_XhrConnection() {
	return (init_XhrConnection = __esmMin((() => {
		init_Console();
		init_BrowserInfo();
		init_XhrConnectionError();
		init_MessageHandler();
		init_Profiler();
		REQUEST_TYPE_PARAMETER = "v-r";
		REQUEST_TYPE_UIDL = "uidl";
		UI_ID_PARAMETER = "v-uiId";
		JSON_CONTENT_TYPE = "application/json; charset=UTF-8";
		XhrResponseHandler = class {
			#registry;
			#payload = null;
			#requestStartTime = 0;
			/**
			* Creates a new instance connected to the given registry.
			*
			* Java declares this handler as an inner class, so it reads the connection's
			* registry field; TypeScript has no inner classes, so the registry is passed
			* in and the Java constructor's no-arg signature cannot be mirrored.
			*
			* @param registry - the global registry
			*/
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Sets the payload which was sent to the server.
			*
			* @param payload - the payload which was sent to the server
			*/
			setPayload(payload) {
				this.#payload = payload;
			}
			/**
			* Sets the relative time (see {@link getRelativeTimeMillis}) when the request
			* was sent.
			*
			* @param requestStartTime - the relative time when the request was sent
			*/
			setRequestStartTime(requestStartTime) {
				this.#requestStartTime = requestStartTime;
			}
			/**
			* Reports a failed request to the connection-state handler.
			*
			* @param xhr - the request that failed
			* @param error - the exception that a synchronous failure threw, or `null` for
			*          a response other than 200
			*/
			onFail(xhr, error) {
				const errorEvent = new XhrConnectionError(xhr, this.#payload, error);
				if (error === null) {
					this.#registry.getConnectionStateHandler().xhrInvalidStatusCode(errorEvent);
					return;
				}
				this.#registry.getConnectionStateHandler().xhrException(errorEvent);
			}
			/**
			* Routes a successful response to the message handler, or reports invalid
			* content when it does not parse.
			*
			* @param xhr - the request that succeeded
			*/
			onSuccess(xhr) {
				Console.debug(`Server visit took ${getRelativeTimeString(this.#requestStartTime)}ms`);
				const responseText = xhr.responseText;
				const json = parseJson(responseText);
				if (json === null) {
					this.#registry.getConnectionStateHandler().xhrInvalidContent(new XhrConnectionError(xhr, this.#payload, null));
					return;
				}
				this.#registry.getConnectionStateHandler().xhrOk();
				Console.debug(`Received xhr message: ${responseText}`);
				this.#registry.getMessageHandler().handleMessage(json);
			}
		};
		XhrConnection = class {
			#webkitMaybeIgnoringRequests = false;
			#registry;
			constructor(registry) {
				this.#registry = registry;
				window.addEventListener("beforeunload", () => {
					this.#webkitMaybeIgnoringRequests = true;
				}, false);
				this.#registry.getRequestResponseTracker().addResponseHandlingEndedHandler(() => {
					this.#webkitMaybeIgnoringRequests = false;
				});
			}
			/**
			* Creates the handler that routes this connection's responses.
			*
			* @returns the response handler
			*/
			createResponseHandler() {
				return new XhrResponseHandler(this.#registry);
			}
			/**
			* Sends an asynchronous UIDL request to the server using the given URI.
			*
			* @param payload - The URI to use for the request. May includes GET parameters
			*/
			send(payload) {
				const responseHandler = this.createResponseHandler();
				responseHandler.setPayload(payload);
				responseHandler.setRequestStartTime(getRelativeTimeMillis());
				const payloadJson = stringify(payload);
				const xhr = new XMLHttpRequest();
				xhr.onreadystatechange = () => {
					if (xhr.readyState === XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							responseHandler.onSuccess(xhr);
							xhr.onreadystatechange = null;
							return;
						}
						responseHandler.onFail(xhr, null);
						xhr.onreadystatechange = null;
					}
				};
				try {
					xhr.open("POST", this.getUri(), true);
					xhr.setRequestHeader("Content-Type", JSON_CONTENT_TYPE);
					xhr.withCredentials = true;
					xhr.send(payloadJson);
				} catch (error) {
					Console.error(error);
					responseHandler.onFail(xhr, error);
					xhr.onreadystatechange = null;
				}
				Console.debug(`Sending xhr message to server: ${payloadJson}`);
				if (this.#webkitMaybeIgnoringRequests && BrowserInfo.get().isWebkit()) {
					const retryTimeout = 250;
					const retry = () => {
						if (resendRequest(xhr) && this.#webkitMaybeIgnoringRequests) setTimeout(retry, retryTimeout);
					};
					setTimeout(retry, retryTimeout);
				}
			}
			/**
			* Retrieves the URI to use when sending RPCs to the server
			*
			* @returns The URI to use for server messages.
			*/
			getUri() {
				const configuration = this.#registry.getApplicationConfiguration();
				return addGetParameter(addGetParameter(configuration.getServiceUrl(), REQUEST_TYPE_PARAMETER, REQUEST_TYPE_UIDL), UI_ID_PARAMETER, configuration.getUIId());
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/DefaultRegistry.js
var DefaultRegistry;
function init_DefaultRegistry() {
	return (init_DefaultRegistry = __esmMin((() => {
		init_AtmospherePushConnection();
		init_ConstantPool();
		init_DependencyLoader();
		init_DefaultConnectionStateHandler();
		init_Heartbeat();
		init_LoadingIndicatorStateHandler();
		init_MessageHandler();
		init_MessageSender();
		init_Poller();
		init_PushConfiguration();
		init_ReconnectConfiguration();
		init_Registry();
		init_RequestResponseTracker();
		init_ResourceLoader();
		init_ServerConnector();
		init_ServerRpcQueue();
		init_ExecuteJavaScriptProcessor();
		init_ExistingElementMap();
		init_InitialPropertiesHandler();
		init_StateTree();
		init_SystemErrorHandler();
		init_UILifecycle();
		init_URIResolver();
		init_XhrConnection();
		DefaultRegistry = class extends Registry {
			/**
			* Constructs a registry based on the given configuration reference.
			*
			* Java also takes the application connection here, because the registry is
			* constructed from inside ApplicationConnection's constructor; the port
			* registers it through {@link DefaultRegistry.setApplicationConnection} instead.
			*
			* @param applicationConfiguration - the application configuration
			*/
			constructor(applicationConfiguration) {
				super();
				this.set(TOKEN.ApplicationConfiguration, applicationConfiguration);
				this.set(TOKEN.ResourceLoader, new ResourceLoader(this, true));
				this.set(TOKEN.URIResolver, new URIResolver(this));
				this.set(TOKEN.DependencyLoader, new DependencyLoader(this));
				this.set(TOKEN.SystemErrorHandler, new SystemErrorHandler(this));
				this.setResettable(TOKEN.UILifecycle, () => new UILifecycle());
				this.set(TOKEN.StateTree, new StateTree(this));
				this.set(TOKEN.RequestResponseTracker, new RequestResponseTracker(this));
				this.set(TOKEN.MessageHandler, new MessageHandler(this));
				this.set(TOKEN.MessageSender, new MessageSender(this, atmospherePushConnectionFactory));
				this.set(TOKEN.ServerRpcQueue, new ServerRpcQueue(this));
				this.set(TOKEN.ServerConnector, new ServerConnector(this));
				this.set(TOKEN.ExecuteJavaScriptProcessor, new ExecuteJavaScriptProcessor(this));
				this.setResettable(TOKEN.ConstantPool, () => new ConstantPool());
				this.setResettable(TOKEN.ExistingElementMap, () => new ExistingElementMap());
				this.set(TOKEN.InitialPropertiesHandler, new InitialPropertiesHandler(this));
				this.setResettable(TOKEN.Heartbeat, () => new Heartbeat(this));
				this.set(TOKEN.ConnectionStateHandler, new DefaultConnectionStateHandler(this));
				this.set(TOKEN.XhrConnection, new XhrConnection(this));
				this.set(TOKEN.PushConfiguration, new PushConfiguration(this));
				this.set(TOKEN.ReconnectConfiguration, new ReconnectConfiguration(this));
				this.set(TOKEN.Poller, new Poller(this));
				this.set(TOKEN.LoadingIndicatorStateHandler, new LoadingIndicatorStateHandler(this));
			}
			/**
			* Stores the application connection this registry belongs to.
			*
			* Java takes the connection as the first constructor parameter, because the
			* registry is constructed from inside ApplicationConnection's constructor. The
			* port assembles the registry first and hands the connection over as soon as it
			* exists, which is before anything can look it up.
			*
			* @param connection - the application connection
			*/
			setApplicationConnection(connection) {
				this.set(TOKEN.ApplicationConnection, connection);
			}
		};
	})))();
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/publishClient.js
/**
* Builds the per-application client API object published on
* `window.Vaadin.Flow.clients[appId]`.
*
* This is the TypeScript replacement for the JSNI `publishJavascriptMethods` /
* `publishDevelopmentModeJavascriptMethods` blocks in
* com.vaadin.client.ApplicationConnection: it delegates to the methods of the
* {@link ApplicationConnection} instance. Those blocks wrap every published
* function in `$entry`; the port has no equivalent, as the engine is plain
* JavaScript.
*
* Called by ApplicationConnection.create with the constructed instance. The live
* page still runs the GWT engine, so the JSNI publication is what actually
* populates `window.Vaadin.Flow.clients` today; removing it is part of the
* cutover that makes the bootstrap start this engine instead.
*
* @param applicationConnection - the engine to publish
* @param configuration - the application configuration, which supplies the
*          application id the client is published under, whether the client runs
*          in production mode, whether request timing info should be made
*          available, and the web component tags exported by this UI
*/
function publishClient(applicationConnection, configuration) {
	const ac = applicationConnection;
	const productionMode = configuration.isProductionMode();
	const applicationId = configuration.getApplicationId().replace(/-\d+$/, "");
	const client = {
		isActive: () => ac.isActive(),
		getByNodeId: (nodeId) => ac.getDomElementByNodeId(nodeId),
		getNodeId: (element) => ac.getNodeId(element),
		getUIId: () => ac.getUIId(),
		addDomBindingListener: (nodeId, callback) => ac.addDomSetListener(nodeId, callback),
		productionMode,
		poll: () => ac.poll(),
		connectWebComponent: (eventData) => ac.connectWebComponent(eventData),
		resolveUri: (uri) => ac.resolveUri(uri),
		sendEventMessage: (nodeId, eventType, eventData) => ac.sendEventMessage(nodeId, eventType, eventData),
		initializing: false,
		exportedWebComponents: configuration.getExportedWebComponents()
	};
	if (configuration.isRequestTiming()) client.getProfilingData = () => ac.getProfilingData();
	if (!productionMode) {
		client.getVersionInfo = (_parameter) => ({ flow: configuration.getServletVersion() });
		client.debug = () => ac.debug();
		client.getNodeInfo = (nodeId) => ({
			element: ac.getDomElementByNodeId(nodeId),
			javaClass: ac.getJavaClass(nodeId),
			hiddenByServer: ac.isHiddenByServer(nodeId),
			styles: ac.getElementStyleProperties(nodeId)
		});
	}
	const clients = window.Vaadin.Flow.clients;
	clients[applicationId] = client;
}
//#endregion
//#region src/main/frontend/generated/jar-resources/internal/client/ApplicationConnection.js
function setUncaughtErrorHandler(handler) {
	if (uncaughtErrorHandler === null) window.addEventListener("error", (event) => uncaughtErrorHandler?.(event.error ?? event.message));
	uncaughtErrorHandler = handler;
}
/**
* Checks if deferred commands are (potentially) still being executed as a result
* of an update from the server. Returns true if a deferred command might still be
* executing, false otherwise. This will not work correctly if a deferred command
* is added in another deferred command.
*
* Used by the native "client.isActive" function.
*
* Java asks Scheduler.get() and checks whether it is a TrackingScheduler; the
* port has only that scheduler, so it reads the shared instance directly.
*
* @returns true if deferred commands are (potentially) being executed, false
*          otherwise
*/
function isExecutingDeferredCommands() {
	return getScheduler().hasWorkQueued();
}
var uncaughtErrorHandler, ApplicationConnection;
function init_ApplicationConnection() {
	return (init_ApplicationConnection = __esmMin((() => {
		init_Binder();
		init_LoadingIndicatorConfigurator();
		init_PollConfigurator();
		init_ReconnectConfiguration();
		init_DefaultRegistry();
		init_NodeFeatures();
		init_NodeProperties();
		init_TrackingScheduler();
		uncaughtErrorHandler = null;
		ApplicationConnection = class ApplicationConnection {
			#registry;
			constructor(registry) {
				this.#registry = registry;
			}
			/**
			* Creates an application connection using the given configuration: assembles
			* the {@link DefaultRegistry}, binds the root state node to the page body, and
			* publishes the client API through {@link publishClient}. Mirrors the
			* ApplicationConnection.java constructor.
			*
			* @param applicationConfiguration - the configuration object for the application
			* @returns the connection, already published
			*/
			static create(applicationConfiguration) {
				const rootElement = document.body;
				const registry = new DefaultRegistry(applicationConfiguration);
				const systemErrorHandler = registry.getSystemErrorHandler();
				setUncaughtErrorHandler((error) => systemErrorHandler.handleErrorObject(error));
				const rootNode = registry.getStateTree().getRootNode();
				observe(rootNode, registry.getPoller());
				ReconnectConfiguration.bind(registry.getConnectionStateHandler());
				observe$1(rootNode);
				rootNode.setDomNode(rootElement);
				bind(rootNode, rootElement);
				const connection = new ApplicationConnection(registry);
				registry.setApplicationConnection(connection);
				publishClient(connection, applicationConfiguration);
				return connection;
			}
			/**
			* Starts this application. Public access is required for web components.
			*
			* @param initialUidl - the initial UIDL or null if the server did not provide
			*          any
			*/
			start(initialUidl) {
				if (initialUidl === null) this.#registry.getMessageSender().resynchronize();
				else {
					this.#registry.getRequestResponseTracker().startRequest();
					this.#registry.getMessageHandler().handleMessage(initialUidl);
				}
				window.addEventListener("pagehide", () => this.#registry.getMessageSender().sendUnloadBeacon());
				window.addEventListener("pageshow", () => {
					window.location.reload();
				});
			}
			/**
			* Checks if there is some work to be done on the client side.
			*
			* @returns true if the client has some work to be done, false otherwise
			*/
			isActive() {
				return !this.#registry.getMessageHandler().isInitialUidlHandled() || this.#registry.getRequestResponseTracker().hasActiveRequest() || isExecutingDeferredCommands();
			}
			/** The DOM node bound to the state node with the given id, or null. */
			getDomElementByNodeId(id) {
				const node = this.#registry.getStateTree().getNode(id);
				return node === null ? null : node.getDomNode();
			}
			/** The state node id bound to the given DOM element, or -1 if none. */
			getNodeId(element) {
				const node = this.#registry.getStateTree().getStateNodeForDomNode(element);
				return node === null ? -1 : node.getId();
			}
			/** The id of the UI this connection is connected to. */
			getUIId() {
				return this.#registry.getApplicationConfiguration().getUIId();
			}
			/** Runs the callback once the DOM node for the given state node id is set. */
			addDomSetListener(nodeId, callback) {
				this.#registry.getStateTree().getNode(nodeId).addDomNodeSetListener((boundNode) => {
					if (boundNode.getId() === nodeId) {
						callback();
						return true;
					}
					return false;
				});
			}
			/** Triggers a server poll. */
			poll() {
				this.#registry.getPoller().poll();
			}
			/** Connects the web component described by the event data with the server. */
			connectWebComponent(eventData) {
				const nodeId = this.#registry.getStateTree().getRootNode().getId();
				this.#registry.getServerConnector().sendEventMessage(nodeId, "connect-web-component", eventData);
			}
			/** Profiling data for the last request (processing times + server timing + bootstrap). */
			getProfilingData() {
				return this.#registry.getMessageHandler().getProfilingData();
			}
			/** Resolves a Vaadin URI (context://, base://) to an absolute URL. */
			resolveUri(uri) {
				return this.#registry.getURIResolver().resolveVaadinUri(uri);
			}
			/** Sends an event message to the server. */
			sendEventMessage(nodeId, eventType, eventData) {
				this.#registry.getServerConnector().sendEventMessage(nodeId, eventType, eventData);
			}
			/** A JSON description of the root node's state tree, for debugging. */
			debug() {
				return this.#registry.getStateTree().getRootNode().getDebugJson();
			}
			/** The Java class name bound to the state node with the given id, or null. */
			getJavaClass(id) {
				const node = this.#registry.getStateTree().getNode(id);
				if (node === null) return null;
				return node.getMap(NodeFeatures.ELEMENT_DATA).getProperty(NodeProperties.JAVA_CLASS).getValueOrDefault(null);
			}
			/** Whether the element for the given state node id is hidden by the server. */
			isHiddenByServer(id) {
				const node = this.#registry.getStateTree().getNode(id);
				return !(node === null ? true : node.getMap(NodeFeatures.ELEMENT_DATA).getProperty(NodeProperties.VISIBLE).getValueOrDefault(true));
			}
			/** The element style properties for the given state node id, as a plain object. */
			getElementStyleProperties(id) {
				const styles = {};
				const node = this.#registry.getStateTree().getNode(id);
				if (node !== null) {
					const styleMap = node.getMap(NodeFeatures.ELEMENT_STYLE_PROPERTIES);
					for (const name of styleMap.getPropertyNames()) styles[name] = styleMap.getProperty(name).getValue();
				}
				return styles;
			}
		};
	})))();
}
//#endregion
init_ApplicationConnection();
export { ApplicationConnection };
