import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-htSClZ5J.js";
//#region node_modules/dompurify/dist/purify.es.mjs
/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */
function _OverloadYield(e, d) {
	this.v = e, this.k = d;
}
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i, u, a = [], f = !0, o = !1;
		try {
			if (i = (t = t.call(r)).next, 0 === l) {
				if (Object(t) !== t) return;
				f = !1;
			} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
		} catch (r) {
			o = !0, n = r;
		} finally {
			try {
				if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
function AsyncGenerator(e) {
	var t, n;
	function resume(t, n) {
		try {
			var r = e[t](n), o = r.value, u = o instanceof _OverloadYield;
			Promise.resolve(u ? o.v : o).then(function(n) {
				if (u) {
					var i = "return" === t && o.k ? t : "next";
					if (!o.k || n.done) return resume(i, n);
					n = e[i](n).value;
				}
				settle(!!r.done, n);
			}, function(e) {
				resume("throw", e);
			});
		} catch (e) {
			settle(2, e);
		}
	}
	function settle(e, r) {
		2 === e ? t.reject(r) : t.resolve({
			value: r,
			done: e
		}), (t = t.next) ? resume(t.key, t.arg) : n = null;
	}
	this._invoke = function(e, r) {
		return new Promise(function(o, u) {
			var i = {
				key: e,
				arg: r,
				resolve: o,
				reject: u,
				next: null
			};
			n ? n = n.next = i : (t = n = i, resume(e, r));
		});
	}, "function" != typeof e.return && (this.return = void 0);
}
/**
* Creates a new function that calls the given function with a specified thisArg and arguments.
*
* @param func - The function to be wrapped and called.
* @returns A new function that calls the given function with a specified thisArg and arguments.
*/
function unapply(func) {
	return function(thisArg) {
		for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
		return apply(func, thisArg, args);
	};
}
/**
* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
*
* @param func - The constructor function to be wrapped and called.
* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
*/
function unconstruct(Func) {
	return function() {
		for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
		return construct(Func, args);
	};
}
/**
* Add properties to a lookup table
*
* @param set - The set to which elements will be added.
* @param array - The array containing elements to be added to the set.
* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
* @returns The modified set with added elements.
*/
function addToSet(set, array) {
	let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
	if (setPrototypeOf) setPrototypeOf(set, null);
	if (!arrayIsArray(array)) return set;
	let l = array.length;
	while (l--) {
		let element = array[l];
		if (typeof element === "string") {
			const lcElement = transformCaseFunc(element);
			if (lcElement !== element) {
				if (!isFrozen(array)) array[l] = lcElement;
				element = lcElement;
			}
		}
		set[element] = true;
	}
	return set;
}
/**
* Clean up an array to harden against CSPP
*
* @param array - The array to be cleaned.
* @returns The cleaned version of the array
*/
function cleanArray(array) {
	for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
	return array;
}
/**
* Shallow clone an object
*
* @param object - The object to be cloned.
* @returns A new object that copies the original.
*/
function clone(object) {
	const newObject = create(null);
	for (const _ref2 of entries(object)) {
		var _ref3 = _slicedToArray(_ref2, 2);
		const property = _ref3[0];
		const value = _ref3[1];
		if (objectHasOwnProperty(object, property)) {
			if (arrayIsArray(value)) newObject[property] = cleanArray(value);
			else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
			else newObject[property] = value;
		}
	}
	return newObject;
}
/**
* Copy a flat lookup table
*
* @param set - The set to copy.
* @returns A new prototype-free set with the same entries.
*/
function cloneSet(set) {
	const newSet = create(null);
	const keys = objectKeys(set);
	let l = keys.length;
	while (l--) newSet[keys[l]] = set[keys[l]];
	return newSet;
}
/**
* Convert non-node values into strings without depending on direct property access.
*
* @param value - The value to stringify.
* @returns A string representation of the provided value.
*/
function stringifyValue(value) {
	switch (typeof value) {
		case "string": return value;
		case "number": return numberToString(value);
		case "boolean": return booleanToString(value);
		case "bigint": return bigintToString ? bigintToString(value) : "0";
		case "symbol": return symbolToString ? symbolToString(value) : "Symbol()";
		case "undefined": return objectToString(value);
		case "function":
		case "object": {
			if (value === null) return objectToString(value);
			const valueAsRecord = value;
			const valueToString = lookupGetter(valueAsRecord, "toString");
			if (typeof valueToString === "function") {
				const stringified = valueToString(valueAsRecord);
				return typeof stringified === "string" ? stringified : objectToString(stringified);
			}
			return objectToString(value);
		}
		default: return objectToString(value);
	}
}
/**
* This method automatically checks if the prop is function or getter and behaves accordingly.
*
* @param object - The object to look up the getter function in its prototype chain.
* @param prop - The property name for which to find the getter function.
* @returns The getter function found in the prototype chain or a fallback function.
*/
function lookupGetter(object, prop) {
	while (object !== null) {
		const desc = getOwnPropertyDescriptor(object, prop);
		if (desc) {
			if (desc.get) return unapply(desc.get);
			if (typeof desc.value === "function") return unapply(desc.value);
		}
		object = getPrototypeOf(object);
	}
	function fallbackValue() {
		return null;
	}
	return fallbackValue;
}
/**
* Like lookupGetter, but for accessor properties only, and returns null
* instead of a null-returning fallback when no getter exists on the chain.
* Lets a caller fall back to a direct property read in environments that
* lack the getter, where a fallback returning null would be indistinguishable
* from a legitimate null value (e.g. namespaceURI of a no-namespace element).
*
* @param object - The object (usually a prototype) to start the lookup at.
* @param prop - The accessor property name.
* @returns The unapplied getter, or null if none was found.
*/
function lookupAccessor(object, prop) {
	while (object !== null) {
		const desc = getOwnPropertyDescriptor(object, prop);
		if (desc) return desc.get ? unapply(desc.get) : null;
		object = getPrototypeOf(object);
	}
	return null;
}
function isRegex(value) {
	if (!value) return false;
	try {
		regExpTest(value, "");
		return true;
	} catch (_unused) {
		return false;
	}
}
function createDOMPurify() {
	let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
	const DOMPurify = (root) => createDOMPurify(root);
	DOMPurify.version = "3.4.18";
	DOMPurify.removed = [];
	if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
		DOMPurify.isSupported = false;
		return DOMPurify;
	}
	let document = window.document;
	const originalDocument = document;
	const currentScript = originalDocument.currentScript;
	const HTMLTemplateElement = window.HTMLTemplateElement, Node = window.Node, Element = window.Element, NodeFilter = window.NodeFilter, DOMParser = window.DOMParser, trustedTypes = window.trustedTypes;
	const ElementPrototype = Element.prototype;
	const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
	const remove = lookupGetter(ElementPrototype, "remove");
	const removeAttributeNode = lookupGetter(ElementPrototype, "removeAttributeNode");
	const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
	const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
	const getParentNode = lookupGetter(ElementPrototype, "parentNode");
	const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
	const getAttributes = lookupGetter(ElementPrototype, "attributes");
	const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
	const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
	const getOwnerDocument = Node && Node.prototype ? lookupGetter(Node.prototype, "ownerDocument") : null;
	const _readNodeType = function _readNodeType(node) {
		return getNodeType ? getNodeType(node) : node.nodeType;
	};
	const _readNodeName = function _readNodeName(node) {
		return getNodeName ? getNodeName(node) : node.nodeName;
	};
	const getNamespaceURI = lookupAccessor(ElementPrototype, "namespaceURI");
	const _readNamespaceURI = function _readNamespaceURI(element) {
		return getNamespaceURI ? getNamespaceURI(element) : element.namespaceURI;
	};
	if (typeof HTMLTemplateElement === "function") {
		const template = document.createElement("template");
		if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
	}
	let trustedTypesPolicy;
	let emptyHTML = "";
	let defaultTrustedTypesPolicy;
	let defaultTrustedTypesPolicyResolved = false;
	let IN_TRUSTED_TYPES_POLICY = 0;
	const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy() {
		if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	};
	const _createTrustedHTML = function _createTrustedHTML(html) {
		_assertNotInTrustedTypesPolicy();
		IN_TRUSTED_TYPES_POLICY++;
		try {
			return trustedTypesPolicy.createHTML(html);
		} finally {
			IN_TRUSTED_TYPES_POLICY--;
		}
	};
	const _signOutput = function _signOutput(html) {
		return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(html) : html;
	};
	const _createTrustedScriptURL = function _createTrustedScriptURL(scriptUrl) {
		_assertNotInTrustedTypesPolicy();
		IN_TRUSTED_TYPES_POLICY++;
		try {
			return trustedTypesPolicy.createScriptURL(scriptUrl);
		} finally {
			IN_TRUSTED_TYPES_POLICY--;
		}
	};
	const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy() {
		if (!defaultTrustedTypesPolicyResolved) {
			defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
			defaultTrustedTypesPolicyResolved = true;
		}
		return defaultTrustedTypesPolicy;
	};
	const _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
	const importNode = originalDocument.importNode;
	let hooks = _createHooksMap();
	/**
	* Expose whether this browser supports running the full DOMPurify.
	*/
	DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
	const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
	let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
	/**
	* We consider the elements and attributes below to be safe. Ideally
	* don't add any new ones but feel free to remove unwanted ones.
	*/
	let ALLOWED_TAGS = null;
	const DEFAULT_ALLOWED_TAGS = addToSet({}, [
		...html$1,
		...svg$1,
		...svgFilters,
		...mathMl$1,
		...text
	]);
	let ALLOWED_ATTR = null;
	const DEFAULT_ALLOWED_ATTR = addToSet({}, [
		...html,
		...svg,
		...mathMl,
		...xml
	]);
	let CUSTOM_ELEMENT_HANDLING = null;
	let FORBID_TAGS = null;
	let FORBID_ATTR = null;
	const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
		tagCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		},
		attributeCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		}
	}));
	let ALLOW_ARIA_ATTR = true;
	let ALLOW_DATA_ATTR = true;
	let ALLOW_UNKNOWN_PROTOCOLS = false;
	let ALLOW_SELF_CLOSE_IN_ATTR = true;
	let SAFE_FOR_TEMPLATES = false;
	let SAFE_FOR_XML = true;
	let WHOLE_DOCUMENT = false;
	let SET_CONFIG = false;
	let SET_CONFIG_ALLOWED_TAGS = null;
	let SET_CONFIG_ALLOWED_ATTR = null;
	let FORCE_BODY = false;
	let RETURN_DOM = false;
	let RETURN_DOM_FRAGMENT = false;
	let RETURN_TRUSTED_TYPE = false;
	let SANITIZE_DOM = true;
	let SANITIZE_NAMED_PROPS = false;
	const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
	let KEEP_CONTENT = true;
	let IN_PLACE = false;
	let IN_PLACE_VISITED = null;
	let USE_PROFILES = false;
	let FORBID_CONTENTS = null;
	const DEFAULT_FORBID_CONTENTS = addToSet({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"selectedcontent",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]);
	let DATA_URI_TAGS = null;
	const DEFAULT_DATA_URI_TAGS = addToSet({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]);
	let URI_SAFE_ATTRIBUTES = null;
	const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]);
	const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
	const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
	const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
	let NAMESPACE = HTML_NAMESPACE;
	let IS_EMPTY_INPUT = false;
	let ALLOWED_NAMESPACES = null;
	const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
		MATHML_NAMESPACE,
		SVG_NAMESPACE,
		HTML_NAMESPACE
	], stringToString);
	const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze(addToSet({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]));
	let MATHML_TEXT_INTEGRATION_POINTS = null;
	const DEFAULT_HTML_INTEGRATION_POINTS = freeze(addToSet({}, ["annotation-xml"]));
	let HTML_INTEGRATION_POINTS = null;
	const DEFAULT_CUSTOM_ELEMENT_HANDLING = freeze(create(null));
	const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]);
	let PARSER_MEDIA_TYPE = null;
	const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
	const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
	let transformCaseFunc = null;
	let CONFIG = null;
	const formElement = document.createElement("form");
	const isRegexOrFunction = function isRegexOrFunction(testValue) {
		return testValue instanceof RegExp || testValue instanceof Function;
	};
	/**
	* _parseConfig
	*
	* @param cfg optional config literal
	*/
	const _parseConfig = function _parseConfig() {
		let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (!cfg || typeof cfg !== "object") cfg = {};
		cfg = clone(cfg);
		PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
		transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
		ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
		ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
		ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
		URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
			transform: transformCaseFunc,
			base: DEFAULT_URI_SAFE_ATTRIBUTES
		});
		DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
			transform: transformCaseFunc,
			base: DEFAULT_DATA_URI_TAGS
		});
		FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
		FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", create(null), { transform: transformCaseFunc });
		FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", create(null), { transform: transformCaseFunc });
		USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
		ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
		ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
		ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
		ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
		SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
		SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
		WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
		RETURN_DOM = cfg.RETURN_DOM || false;
		RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
		RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
		FORCE_BODY = cfg.FORCE_BODY || false;
		SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
		SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
		KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
		IN_PLACE = cfg.IN_PLACE || false;
		IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
		NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
		MATHML_TEXT_INTEGRATION_POINTS = _resolveObjectOption(cfg, "MATHML_TEXT_INTEGRATION_POINTS", DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
		HTML_INTEGRATION_POINTS = _resolveObjectOption(cfg, "HTML_INTEGRATION_POINTS", DEFAULT_HTML_INTEGRATION_POINTS);
		const customElementHandling = _resolveObjectOption(cfg, "CUSTOM_ELEMENT_HANDLING", DEFAULT_CUSTOM_ELEMENT_HANDLING);
		CUSTOM_ELEMENT_HANDLING = create(null);
		if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
		if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
		if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
		seal(CUSTOM_ELEMENT_HANDLING);
		if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
		if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
		if (USE_PROFILES) {
			if ((objectHasOwnProperty(cfg, "ALLOWED_TAGS") || objectHasOwnProperty(cfg, "ALLOWED_ATTR")) && typeof console !== "undefined" && typeof console.warn === "function") console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together.");
			ALLOWED_TAGS = addToSet({}, text);
			ALLOWED_ATTR = create(null);
			if (USE_PROFILES.html === true) {
				addToSet(ALLOWED_TAGS, html$1);
				addToSet(ALLOWED_ATTR, html);
			}
			if (USE_PROFILES.svg === true) {
				addToSet(ALLOWED_TAGS, svg$1);
				addToSet(ALLOWED_ATTR, svg);
				addToSet(ALLOWED_ATTR, xml);
			}
			if (USE_PROFILES.svgFilters === true) {
				addToSet(ALLOWED_TAGS, svgFilters);
				addToSet(ALLOWED_ATTR, svg);
				addToSet(ALLOWED_ATTR, xml);
			}
			if (USE_PROFILES.mathMl === true) {
				addToSet(ALLOWED_TAGS, mathMl$1);
				addToSet(ALLOWED_ATTR, mathMl);
				addToSet(ALLOWED_ATTR, xml);
			}
		}
		EXTRA_ELEMENT_HANDLING.tagCheck = null;
		EXTRA_ELEMENT_HANDLING.attributeCheck = null;
		if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
			if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
			else if (arrayIsArray(cfg.ADD_TAGS)) {
				if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = cloneSet(ALLOWED_TAGS);
				addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
			}
		}
		if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
			if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
			else if (arrayIsArray(cfg.ADD_ATTR)) {
				if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = cloneSet(ALLOWED_ATTR);
				addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
			}
		}
		if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
			if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = cloneSet(FORBID_CONTENTS);
			addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
		}
		if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
		if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
			"html",
			"head",
			"body"
		]);
		if (ALLOWED_TAGS.table) {
			ALLOWED_TAGS.tbody = true;
			delete FORBID_TAGS.tbody;
		}
		if (cfg.TRUSTED_TYPES_POLICY) {
			if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			const previousTrustedTypesPolicy = trustedTypesPolicy;
			trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
			try {
				emptyHTML = _createTrustedHTML("");
			} catch (error) {
				trustedTypesPolicy = previousTrustedTypesPolicy;
				throw error;
			}
		} else if (cfg.TRUSTED_TYPES_POLICY === null) {
			trustedTypesPolicy = void 0;
			emptyHTML = "";
		} else {
			if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
			if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
		}
		CONFIG = freeze(cfg);
	};
	const ALL_SVG_TAGS = addToSet({}, [
		...svg$1,
		...svgFilters,
		...svgDisallowed
	]);
	const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
	/**
	* Namespace rules for an element in the SVG namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parentNamespace the (possibly simulated) parent's namespace
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkSvgNamespace = function _checkSvgNamespace(tagName, parentNamespace, parentTagName) {
		if (parentNamespace === HTML_NAMESPACE) return tagName === "svg";
		if (parentNamespace === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
		return Boolean(ALL_SVG_TAGS[tagName]);
	};
	/**
	* Namespace rules for an element in the MathML namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parentNamespace the (possibly simulated) parent's namespace
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkMathMlNamespace = function _checkMathMlNamespace(tagName, parentNamespace, parentTagName) {
		if (parentNamespace === HTML_NAMESPACE) return tagName === "math";
		if (parentNamespace === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
		return Boolean(ALL_MATHML_TAGS[tagName]);
	};
	/**
	* Namespace rules for an element in the HTML namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parentNamespace the (possibly simulated) parent's namespace
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkHtmlNamespace = function _checkHtmlNamespace(tagName, parentNamespace, parentTagName) {
		if (parentNamespace === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
		if (parentNamespace === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
		return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
	};
	/**
	* @param element a DOM element whose namespace is being checked
	* @returns Return false if the element has a
	*  namespace that a spec-compliant parser would never
	*  return. Return true otherwise.
	*/
	const _checkValidNamespace = function _checkValidNamespace(element) {
		const elementNamespace = _readNamespaceURI(element);
		const tagName = stringToLowerCase(_readNodeName(element));
		const parentNode = getParentNode(element);
		let parentNamespace = NAMESPACE;
		let parentTagName = "template";
		if (parentNode && _readNodeType(parentNode) === NODE_TYPE.element) {
			parentNamespace = _readNamespaceURI(parentNode);
			parentTagName = stringToLowerCase(_readNodeName(parentNode));
		}
		if (!ALLOWED_NAMESPACES[elementNamespace]) return false;
		if (elementNamespace === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parentNamespace, parentTagName);
		if (elementNamespace === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parentNamespace, parentTagName);
		if (elementNamespace === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parentNamespace, parentTagName);
		return PARSER_MEDIA_TYPE === "application/xhtml+xml";
	};
	/**
	* _forceRemove
	*
	* @param node a DOM node
	*/
	const _forceRemove = function _forceRemove(node) {
		arrayPush(DOMPurify.removed, { element: node });
		try {
			getParentNode(node).removeChild(node);
		} catch (_) {
			remove(node);
			if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	};
	/**
	* Removes an Attr node as that exact node, without book-keeping. Name-based
	* removal lowercases the name in HTML documents and would miss a
	* case-preserved one such as `ONERROR`, so it is only the fallback for
	* clobbered or detached nodes.
	*
	* @param element the element to strip the attribute from
	* @param attribute the Attr node to remove
	* @param name the attribute's name, for the fallback path
	*/
	const _stripAttributeNode = function _stripAttributeNode(element, attribute, name) {
		try {
			removeAttributeNode(element, attribute);
		} catch (_) {
			try {
				element.removeAttribute(name);
			} catch (_) {}
		}
	};
	/**
	* Fail-closed teardown of an in-place root: strip every disallowed attribute
	* in the subtree first, so nothing armed is left behind, then remove all
	* children and the root's own attributes.
	*
	* @param root the in-place root to empty
	*/
	const _neutralizeRoot = function _neutralizeRoot(root) {
		_neutralizeSubtree(root);
		const childNodes = getChildNodes(root);
		if (childNodes) arrayForEach(arraySlice(childNodes), (child) => {
			try {
				remove(child);
			} catch (_) {}
		});
		if (_readNodeType(root) === NODE_TYPE.element) _stripAttributes(root, false);
	};
	/**
	* Removes an attribute, preferably as its exact Attr node: name-based
	* removal lowercases the name in HTML documents and misses case-preserved
	* names, e.g. from imported XHTML.
	*
	* @param name an Attribute name
	* @param element a DOM node
	* @param attr the exact Attr node to remove, when the caller has it
	*/
	const _removeAttribute = function _removeAttribute(name, element, attr) {
		if (!attr) try {
			attr = element.getAttributeNode(name);
		} catch (_) {
			attr = null;
		}
		arrayPush(DOMPurify.removed, {
			attribute: attr || null,
			from: element
		});
		if (attr) _stripAttributeNode(element, attr, name);
		else try {
			element.removeAttribute(name);
		} catch (_) {}
		if (name === "is") {
			if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
				_forceRemove(element);
			} catch (_) {}
			else try {
				element.setAttribute(name, "");
			} catch (_) {}
		}
	};
	/**
	* Removes an element's attributes without book-keeping. Used to neutralize
	* nodes discarded from an in-place tree.
	*
	* @param element the element to strip
	* @param keepAllowed whether attributes on the allowlist stay
	*/
	const _stripAttributes = function _stripAttributes(element, keepAllowed) {
		const attributes = getAttributes(element);
		if (!attributes) return;
		for (let i = attributes.length - 1; i >= 0; --i) {
			const attribute = attributes[i];
			const name = attribute && attribute.name;
			if (typeof name === "string" && !(keepAllowed && ALLOWED_ATTR[transformCaseFunc(name)])) _stripAttributeNode(element, attribute, name);
		}
	};
	/**
	* Iterative depth-first walk, so deep trees cannot overflow the call stack,
	* reading through the cached getters, so clobbering cannot hide children.
	* When `visit` returns false, the node's children are skipped. With
	* `intoShadow`, open shadow roots are walked after their host's children.
	*
	* @param root where to start
	* @param visit called for every node
	* @param intoShadow whether to enter open shadow roots
	*/
	const _walkTree = function _walkTree(root, visit) {
		let intoShadow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
		const stack = [root];
		while (stack.length > 0) {
			const node = stack.pop();
			if (visit(node) === false) continue;
			if (intoShadow && _readNodeType(node) === NODE_TYPE.element) {
				const shadowRoot = getShadowRoot(node);
				if (_isDocumentFragment(shadowRoot)) stack.push(shadowRoot);
			}
			const childNodes = getChildNodes(node);
			if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
		}
	};
	/**
	* Strips disallowed attributes from every element of a discarded subtree,
	* so a handler that is already queued (a loading image) cannot fire.
	*
	* @param root the root of a removed subtree
	*/
	const _neutralizeSubtree = function _neutralizeSubtree(root) {
		_walkTree(root, (node) => {
			if (_readNodeType(node) === NODE_TYPE.element) _stripAttributes(node, true);
		});
	};
	/**
	* All nodes under `root`, root first, including open shadow roots. Template
	* content is not entered, it is inert.
	*
	* @param root the in-place root
	* @return the nodes
	*/
	const _collectLiveNodes = function _collectLiveNodes(root) {
		const nodes = [];
		_walkTree(root, (node) => {
			nodes.push(node);
		}, true);
		return nodes;
	};
	/**
	* Strips disallowed attributes from every element that was under the
	* in-place root when the call started and no longer is, whatever removed
	* or moved it.
	*
	* @param root the in-place root
	* @param before the root's nodes, collected before the walk
	*/
	const _neutralizeEscapedElements = function _neutralizeEscapedElements(root, before) {
		const reachable = setCreate();
		arrayForEach(_collectLiveNodes(root), (node) => {
			if (_readNodeType(node) === NODE_TYPE.element) setAdd(reachable, node);
		});
		arrayForEach(before, (node) => {
			if (_readNodeType(node) === NODE_TYPE.element && !setHas(reachable, node)) _stripAttributes(node, true);
		});
	};
	/**
	* Neutralizes everything that left the in-place tree during the call: what
	* DOMPurify removed, and what hooks or custom elements removed or moved out.
	*
	* @param root the in-place root
	* @param before the root's nodes, collected before the walk
	* @return true if the root itself was removed
	*/
	const _neutralizeDiscarded = function _neutralizeDiscarded(root, before) {
		let rootRemoved = false;
		arrayForEach(DOMPurify.removed, (entry) => {
			if (entry.element) {
				rootRemoved = rootRemoved || entry.element === root;
				_neutralizeSubtree(entry.element);
			}
		});
		_neutralizeEscapedElements(root, before);
		return rootRemoved;
	};
	const MAX_UNVISITED_ROUNDS = 8;
	/**
	* The walk only moves forward, so a node moved to a position it already
	* passed is never visited. Give every original node that is still in the
	* tree but unvisited the normal treatment, hooks included. Nodes created
	* during the call are left alone. Fails closed if the tree keeps changing.
	*
	* @param root the in-place root
	* @param before the root's nodes, collected before the walk
	*/
	const _sanitizeUnvisitedNodes = function _sanitizeUnvisitedNodes(root, before) {
		const visited = IN_PLACE_VISITED;
		let original = null;
		const getOriginal = () => {
			if (!original) {
				original = setCreate();
				arrayForEach(before, (beforeNode) => {
					setAdd(original, beforeNode);
				});
			}
			return original;
		};
		for (let round = 0;; round++) {
			const live = _collectLiveNodes(root);
			const containers = [root];
			let pending = false;
			arrayForEach(live, (node) => {
				if (_readNodeType(node) === NODE_TYPE.documentFragment) arrayPush(containers, node);
				else if (!pending && !setHas(visited, node)) pending = setHas(getOriginal(), node);
			});
			if (!pending) return;
			if (round >= MAX_UNVISITED_ROUNDS) throw typeErrorCreate("the tree kept changing during in-place sanitization; refusing to return it");
			arrayForEach(containers, (container, index) => {
				_sanitizeUnvisitedIn(container, index > 0, root, getOriginal());
			});
		}
	};
	/**
	* One _sanitizeUnvisitedNodes pass over the root or an open shadow root.
	*
	* @param container the root or an open shadow root
	* @param inShadow whether container is a shadow root
	* @param root the in-place root
	* @param original the root's nodes collected before the walk, as a set
	*/
	const _sanitizeUnvisitedIn = function _sanitizeUnvisitedIn(container, inShadow, root, original) {
		const iterator = _createNodeIterator(container);
		let node;
		while (node = iterator.nextNode()) {
			if (!setHas(original, node) || setHas(IN_PLACE_VISITED, node)) continue;
			if (inShadow) _executeHooks(hooks.uponSanitizeShadowNode, node, null);
			_sanitizeNode(node, root);
		}
	};
	/**
	* Records that _sanitizeElements processed `node`. No-op outside IN_PLACE.
	*
	* @param node the node being processed
	*/
	const _markVisited = function _markVisited(node) {
		if (IN_PLACE_VISITED) setAdd(IN_PLACE_VISITED, node);
	};
	/**
	* Patch-linkage attributes (declarative partial updates): `patchsrc`
	* always, `for` everywhere except on <label> and <output>. Gated on
	* SAFE_FOR_XML. Shared by the IN_PLACE pre-pass and _isValidAttribute.
	*
	* @param lcName the transformCaseFunc'd attribute name
	* @param lcTag the transformCaseFunc'd tag name of the carrying element
	* @return true if the attribute is patch linkage and must be dropped
	*/
	const _isPatchLinkageAttribute = function _isPatchLinkageAttribute(lcName, lcTag) {
		if (!SAFE_FOR_XML) return false;
		if (lcName === "patchsrc") return true;
		return lcName === "for" && lcTag !== "label" && lcTag !== "output";
	};
	/**
	* IN_PLACE pre-pass: sever all patch linkage before the walk, so no patch
	* can fire mid-walk into a part of the tree the walker already passed.
	* Removes range markers (processing instructions, comments with markup)
	* and strips linkage attributes. It cannot undo a patch that already fired.
	*
	* TODO: if the shipped feature can patch through `for` on <label>/<output>,
	* drop that pair here too.
	*
	* @param root the in-place root to sweep
	*/
	const _neutralizePatchLinkage = function _neutralizePatchLinkage(root) {
		if (!SAFE_FOR_XML) return;
		_walkTree(root, (node) => {
			const nodeType = _readNodeType(node);
			if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
				try {
					remove(node);
				} catch (_) {}
				return false;
			}
			if (nodeType === NODE_TYPE.element) {
				const element = node;
				const lcTag = transformCaseFunc(_readNodeName(node));
				try {
					if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
					if (element.hasAttribute && element.hasAttribute("for") && _isPatchLinkageAttribute("for", lcTag)) element.removeAttribute("for");
				} catch (_) {}
			}
			return true;
		});
	};
	/**
	* _initDocument
	*
	* @param dirty - a string of dirty markup
	* @return a DOM, filled with the dirty markup
	*/
	const _initDocument = function _initDocument(dirty) {
		let doc = null;
		let leadingWhitespace = null;
		if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
		else {
			const matches = stringMatch(dirty, LEADING_WHITESPACE);
			leadingWhitespace = matches && matches[0];
		}
		if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
		const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
		if (NAMESPACE === HTML_NAMESPACE) try {
			doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
		} catch (_) {}
		if (!doc || !doc.documentElement) {
			doc = implementation.createDocument(NAMESPACE, "template", null);
			try {
				doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
			} catch (_) {}
		}
		const body = doc.body || doc.documentElement;
		if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
		if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
		return WHOLE_DOCUMENT ? doc.documentElement : body;
	};
	/**
	* Creates a NodeIterator over `root`. ownerDocument is read through the
	* cached getter: a form child named "ownerDocument" shadows the direct
	* read and would make createNodeIterator throw.
	*
	* @param root The node to start traversing on.
	* @param characterDataOnly whether to skip elements
	* @return The created NodeIterator
	*/
	const _createNodeIterator = function _createNodeIterator(root) {
		let characterDataOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
		return createNodeIterator.call(doc || root, root, (characterDataOnly ? 0 : NodeFilter.SHOW_ELEMENT) | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
	};
	/**
	* Replace template expression syntax (mustache, ERB, template
	* literal) with a space; shared by all SAFE_FOR_TEMPLATES scrub
	* sites. Order matters: mustache, then ERB, then template literal.
	*
	* @param value the string to scrub
	* @returns the scrubbed string
	*/
	const _stripTemplateExpressions = function _stripTemplateExpressions(value) {
		value = stringReplace(value, MUSTACHE_EXPR$1, " ");
		value = stringReplace(value, ERB_EXPR$1, " ");
		value = stringReplace(value, TMPLIT_EXPR$1, " ");
		return value;
	};
	/**
	* Strips template expressions from the character data under `node`,
	* template contents included. Runs after the walk, since an expression can
	* also form when a removed element leaves two text nodes adjacent. Works on
	* the nodes rather than on markup, which keeps node references intact and
	* sees `<%` unescaped. Attribute values are handled in _sanitizeAttributes.
	*
	* @param node The root element whose character data should be scrubbed.
	*/
	const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
		var _node$querySelectorAl;
		_scrubOwnCharacterData(node);
		const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
		if (templates) arrayForEach(templates, (tmpl) => {
			if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
		});
	};
	/**
	* Normalizes `node` and strips template expressions from its own character
	* data. Template contents and shadow roots are not entered, their own
	* _sanitizeShadowDOM call scrubs them.
	*
	* @param node The root whose own character data should be scrubbed.
	*/
	const _scrubOwnCharacterData = function _scrubOwnCharacterData(node) {
		node.normalize();
		const walker = _createNodeIterator(node, true);
		let currentNode = walker.nextNode();
		while (currentNode) {
			currentNode.data = _stripTemplateExpressions(currentNode.data);
			currentNode = walker.nextNode();
		}
	};
	/**
	* Detects DOM clobbering on a form, the only element whose named children
	* shadow its own properties. Each probe compares a direct read with what
	* the property has to be.
	*
	* @param element element to check for clobbering attacks
	* @return true if clobbered, false if safe
	*/
	const _isClobbered = function _isClobbered(element) {
		const realTagName = getNodeName ? getNodeName(element) : null;
		if (typeof realTagName !== "string") return false;
		if (transformCaseFunc(realTagName) !== "form") return false;
		return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.removeAttributeNode !== "function" || typeof element.getAttributeNode !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
	};
	/**
	* Reads nodeType through the cached getter, so the result holds for nodes
	* from any realm (GHSA-4w3q-35jp-p934) and cannot be clobbered.
	*
	* @param value anything
	* @return the node type, or null if value is not a DOM node
	*/
	const _nodeTypeOf = function _nodeTypeOf(value) {
		if (!getNodeType || typeof value !== "object" || value === null) return null;
		try {
			const nodeType = getNodeType(value);
			return typeof nodeType === "number" ? nodeType : null;
		} catch (_) {
			return null;
		}
	};
	const _isDocumentFragment = function _isDocumentFragment(value) {
		return _nodeTypeOf(value) === NODE_TYPE.documentFragment;
	};
	const _isNode = function _isNode(value) {
		return _nodeTypeOf(value) !== null;
	};
	function _executeHooks(hooks, currentNode, data) {
		if (hooks.length === 0) return;
		arrayForEach(hooks, (hook) => {
			hook.call(DOMPurify, currentNode, data, CONFIG);
		});
	}
	/**
	* Structural-threat checks that condemn a node regardless of the
	* allowlists: mXSS via namespace confusion, risky CSS construction,
	* processing instructions, markup-bearing comments. Pure predicate;
	* the caller removes. Check order is load-bearing.
	*
	* @param currentNode the node to inspect
	* @param tagName the node's transformCaseFunc'd tag name
	* @param nodeType the node's type, read through the cached getter
	* @return true if the node must be removed
	*/
	const _isUnsafeNode = function _isUnsafeNode(currentNode, tagName, nodeType) {
		if (SAFE_FOR_XML && nodeType === NODE_TYPE.element && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
		if (SAFE_FOR_XML && LITERAL_TEXT_ELEMENTS[tagName] && nodeType === NODE_TYPE.element && _readNamespaceURI(currentNode) === HTML_NAMESPACE && (_isNode(currentNode.firstElementChild) || typeof currentNode.textContent === "string" && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent))) return true;
		if (nodeType === NODE_TYPE.processingInstruction) return true;
		if (SAFE_FOR_XML && nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
		return false;
	};
	/**
	* Evaluate a CUSTOM_ELEMENT_HANDLING check (a RegExp or a predicate
	* function, per the validation in _parseConfig) against a name.
	* Additional arguments are forwarded to predicate functions - the
	* attributeNameCheck predicate receives the tag name as its second
	* argument. A null/absent check never matches.
	*
	* @param check the configured tagNameCheck / attributeNameCheck value
	* @param name the name to test
	* @param args extra arguments forwarded to a predicate function
	* @return true if the check matches the name
	*/
	const _matchesNameCheck = function _matchesNameCheck(check, name) {
		if (check instanceof RegExp) return regExpTest(check, name);
		if (check instanceof Function) {
			for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
			return Boolean(check(name, ...args));
		}
		return false;
	};
	/**
	* Handles a node whose tag is forbidden or not allowlisted: hoists its
	* content per KEEP_CONTENT and removes it. The one exception is a custom
	* element allowed via CUSTOM_ELEMENT_HANDLING, which is kept.
	*
	* @param currentNode the disallowed node
	* @param tagName the node's transformCaseFunc'd tag name
	* @return true if the node was removed, false if kept
	*/
	const _sanitizeDisallowedNode = function _sanitizeDisallowedNode(currentNode, tagName, root) {
		if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
		if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && !FORBID_CONTENTS[stringToLowerCase(tagName)]) {
			const parentNode = getParentNode(currentNode);
			const childNodes = getChildNodes(currentNode);
			if (childNodes && parentNode) {
				const childCount = childNodes.length;
				for (let i = childCount - 1; i >= 0; --i) {
					const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
					parentNode.insertBefore(hoisted, getNextSibling(currentNode));
				}
			}
		}
		_forceRemove(currentNode);
		return true;
	};
	/**
	* Forks an allowlist off its shared binding (the instance default or the
	* setConfig() capture) before a hook sees it, so a hook's widening stays
	* within the call. A set that is already call-local is returned as is.
	*
	* @param hookList the uponSanitize* hook array for this event
	* @param set the current ALLOWED_TAGS / ALLOWED_ATTR binding
	* @param defaultSet the per-instance DEFAULT_ALLOWED_* constant
	* @param setConfigSet the captured setConfig() binding, or null
	* @return a call-local clone if a hook is present and set is still shared,
	*   else set unchanged
	*/
	const _forkSharedAllowlist = function _forkSharedAllowlist(hookList, set, defaultSet, setConfigSet) {
		if (hookList.length === 0) return set;
		return set === defaultSet || set === setConfigSet ? cloneSet(set) : set;
	};
	/**
	* A hook may have detached the node it was called for. If so, treat it as
	* removed and stop processing it; the walk root is exempt. On the IN_PLACE
	* path the detached subtree is neutralized right away.
	*
	* @param currentNode the node a hook may have detached
	* @param root the current walk root
	* @return true if the node was detached
	*/
	const _handleHookDetachedNode = function _handleHookDetachedNode(currentNode, root) {
		if (currentNode === root || getParentNode(currentNode) !== null) return false;
		if (IN_PLACE) _neutralizeSubtree(currentNode);
		return true;
	};
	/**
	* _sanitizeElements
	*
	* @protect nodeName
	* @protect textContent
	* @protect removeChild
	* @param currentNode to check for permission to exist
	* @return true if node was killed, false if left alive
	*/
	const _sanitizeElements = function _sanitizeElements(currentNode, root) {
		_markVisited(currentNode);
		_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
		if (_handleHookDetachedNode(currentNode, root)) return true;
		if (_isClobbered(currentNode)) {
			_forceRemove(currentNode);
			return true;
		}
		const tagName = transformCaseFunc(_readNodeName(currentNode));
		const nodeType = _readNodeType(currentNode);
		ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
		_executeHooks(hooks.uponSanitizeElement, currentNode, {
			tagName,
			allowedTags: ALLOWED_TAGS
		});
		if (_handleHookDetachedNode(currentNode, root)) return true;
		if (_isUnsafeNode(currentNode, tagName, nodeType)) {
			_forceRemove(currentNode);
			return true;
		}
		if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
			const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
			if (removed === false) {
				_executeHooks(hooks.afterSanitizeElements, currentNode, null);
				if (_handleHookDetachedNode(currentNode, root)) return true;
			}
			return removed;
		}
		if (nodeType === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
			_forceRemove(currentNode);
			return true;
		}
		if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
			_forceRemove(currentNode);
			return true;
		}
		if (SAFE_FOR_TEMPLATES && nodeType === NODE_TYPE.text) {
			const text = currentNode.textContent;
			const content = _stripTemplateExpressions(text);
			if (text !== content) {
				arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
				currentNode.textContent = content;
			}
		}
		_executeHooks(hooks.afterSanitizeElements, currentNode, null);
		return _handleHookDetachedNode(currentNode, root);
	};
	/**
	* _isValidAttribute
	*
	* @param lcTag Lowercase tag name of containing element.
	* @param lcName Lowercase attribute name.
	* @param value Attribute value.
	* @return Returns true if `value` is valid, otherwise false.
	*/
	const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
		if (FORBID_ATTR[lcName]) return false;
		if (_isPatchLinkageAttribute(lcName, lcTag)) return false;
		if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
		const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
		if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) return true;
		if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) return true;
		if (!nameIsPermitted) return _isBasicCustomElement(lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName, lcTag) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value);
		if (URI_SAFE_ATTRIBUTES[lcName]) return true;
		const compactValue = stringReplace(value, ATTR_WHITESPACE$1, "");
		if (regExpTest(IS_ALLOWED_URI$1, compactValue)) return true;
		if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) return true;
		if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, compactValue)) return true;
		return !value;
	};
	const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]);
	/**
	* _isBasicCustomElement
	* checks if at least one dash is included in tagName, and it's not the first char
	* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
	*
	* @param tagName name of the tag of the node to sanitize
	* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
	*/
	const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
		return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
	};
	/**
	* Wrap an attribute value in the matching Trusted Types object when
	* the active policy requires it. Namespaced attributes pass through
	* unchanged (no TT support yet, see
	* https://bugs.chromium.org/p/chromium/issues/detail?id=1305293).
	*
	* @param lcTag lowercase tag name of the containing element
	* @param lcName lowercase attribute name
	* @param namespaceURI the attribute's namespace, if any
	* @param value the attribute value to wrap
	* @return the value, wrapped when Trusted Types demand it
	*/
	const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value) {
		if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
			case "TrustedHTML": return _createTrustedHTML(value);
			case "TrustedScriptURL": return _createTrustedScriptURL(value);
		}
		return value;
	};
	/**
	* Writes a changed attribute value back. If the new value clobbers, the
	* element is removed; if the write fails, the attribute is.
	*
	* @param currentNode the element carrying the attribute
	* @param name the attribute name as present on the element
	* @param namespaceURI the attribute's namespace, if any
	* @param value the new attribute value
	* @return true if the value was written without introducing clobbering
	*/
	const _setAttributeValue = function _setAttributeValue(currentNode, name, namespaceURI, value) {
		try {
			if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
			else currentNode.setAttribute(name, value);
			if (_isClobbered(currentNode)) {
				_forceRemove(currentNode);
				return false;
			}
			return true;
		} catch (_) {
			_removeAttribute(name, currentNode);
			return false;
		}
	};
	/**
	* Value checks that apply before a hook can force-keep an attribute. Also
	* used by isValidAttribute(), so it never approves a value that sanitize()
	* would strip.
	*
	* @param name the attribute name as found on the node (case preserved)
	* @param value the attribute value
	* @returns true if the attribute must be removed because of its value
	*/
	const _isUnsafeAttributeValue = function _isUnsafeAttributeValue(name, value) {
		if (SAFE_FOR_XML && regExpTest(ATTR_VALUE_BREAKOUT, value)) return true;
		return stringToLowerCase(name) === "attributename" && stringIndexOf(value, "href") !== -1;
	};
	/**
	* _sanitizeAttributes
	*
	* @protect attributes
	* @protect nodeName
	* @protect removeAttribute
	* @protect setAttribute
	*
	* @param currentNode to sanitize
	* @param root the current walk root
	*/
	const _sanitizeAttributes = function _sanitizeAttributes(currentNode, root) {
		_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
		if (_handleHookDetachedNode(currentNode, root)) return;
		const attributes = currentNode.attributes;
		if (!attributes || _isClobbered(currentNode)) return;
		ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
		const hookEvent = {
			attrName: "",
			attrValue: "",
			keepAttr: true,
			allowedAttributes: ALLOWED_ATTR,
			forceKeepAttr: void 0
		};
		let l = attributes.length;
		const lcTag = transformCaseFunc(_readNodeName(currentNode));
		while (l--) {
			const attr = attributes[l];
			const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
			const lcName = transformCaseFunc(name);
			const initValue = attrValue;
			let value = name === "value" ? initValue : stringTrim(initValue);
			let recreatedNamedProp = false;
			hookEvent.attrName = lcName;
			hookEvent.attrValue = value;
			hookEvent.keepAttr = true;
			hookEvent.forceKeepAttr = void 0;
			_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
			value = hookEvent.attrValue;
			if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
				_removeAttribute(name, currentNode, attr);
				value = SANITIZE_NAMED_PROPS_PREFIX + value;
				recreatedNamedProp = true;
			}
			if (_isUnsafeAttributeValue(name, value)) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			if (hookEvent.forceKeepAttr) continue;
			if (!hookEvent.keepAttr) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
			if (!_isValidAttribute(lcTag, lcName, value)) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
			if (value !== initValue) {
				if (_setAttributeValue(currentNode, name, namespaceURI, value) && recreatedNamedProp) arrayPop(DOMPurify.removed);
			}
		}
		_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
		_handleHookDetachedNode(currentNode, root);
	};
	/**
	* Sanitizes one node: the node itself, its attributes and, for a
	* template, its content.
	*
	* @param node the node to sanitize
	* @param root the current walk root
	*/
	const _sanitizeNode = function _sanitizeNode(node, root) {
		_sanitizeElements(node, root);
		_sanitizeAttributes(node, root);
		if (_isDocumentFragment(node.content)) _sanitizeShadowDOM2(node.content);
	};
	/**
	* _sanitizeShadowDOM
	*
	* @param fragment to iterate over recursively
	*/
	const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
		let shadowNode = null;
		const shadowIterator = _createNodeIterator(fragment);
		_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
		while (shadowNode = shadowIterator.nextNode()) {
			_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
			_sanitizeNode(shadowNode, fragment);
			if (_readNodeType(shadowNode) === NODE_TYPE.element) {
				const innerSr = getShadowRoot(shadowNode);
				if (_isDocumentFragment(innerSr)) {
					_sanitizeAttachedShadowRoots(innerSr);
					_sanitizeShadowDOM2(innerSr);
				}
			}
		}
		if (SAFE_FOR_TEMPLATES) _scrubOwnCharacterData(fragment);
		_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
	};
	/**
	* Sanitizes every attached shadow root under `root`, since the node
	* iterator does not enter shadow trees. Needed for IN_PLACE input and for
	* DOM input whose clonable shadow roots were copied by importNode().
	*
	* @param root the subtree root to walk for attached shadow roots
	*/
	const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots(root) {
		const stack = [{
			node: root,
			shadow: null
		}];
		while (stack.length > 0) {
			const item = stack.pop();
			if (item.shadow) {
				_sanitizeShadowDOM2(item.shadow);
				continue;
			}
			const node = item.node;
			const isElement = _readNodeType(node) === NODE_TYPE.element;
			const childNodes = getChildNodes(node);
			if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
				node: childNodes[i],
				shadow: null
			});
			if (isElement) {
				const rootName = getNodeName ? getNodeName(node) : null;
				if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
					const content = node.content;
					if (_isDocumentFragment(content)) stack.push({
						node: content,
						shadow: null
					});
				}
			}
			if (isElement) {
				const sr = getShadowRoot(node);
				if (_isDocumentFragment(sr)) stack.push({
					node: null,
					shadow: sr
				}, {
					node: sr,
					shadow: null
				});
			}
		}
	};
	DOMPurify.sanitize = function(dirty) {
		let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		let body = null;
		let importedNode = null;
		let currentNode = null;
		let returnNode = null;
		IS_EMPTY_INPUT = !dirty;
		if (IS_EMPTY_INPUT) dirty = "<!-->";
		if (typeof dirty !== "string" && !_isNode(dirty)) {
			dirty = stringifyValue(dirty);
			if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
		}
		if (!DOMPurify.isSupported) return dirty;
		if (SET_CONFIG) {
			ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
			ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
		} else _parseConfig(cfg);
		DOMPurify.removed = [];
		const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
		let inPlaceNodes = [];
		const outerVisited = IN_PLACE_VISITED;
		if (inPlace) {
			_neutralizePatchLinkage(dirty);
			const nn = _readNodeName(dirty);
			if (typeof nn === "string") {
				const tagName = transformCaseFunc(nn);
				if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
					_neutralizeRoot(dirty);
					throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
				}
			}
			if (_isClobbered(dirty)) {
				_neutralizeRoot(dirty);
				throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
			}
			inPlaceNodes = _collectLiveNodes(dirty);
			IN_PLACE_VISITED = setCreate();
		} else if (_isNode(dirty)) {
			body = _initDocument("<!---->");
			importedNode = body.ownerDocument.importNode(dirty, true);
			if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
			else if (importedNode.nodeName === "HTML") body = importedNode;
			else body.appendChild(importedNode);
			_sanitizeAttachedShadowRoots(body);
		} else {
			if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return _signOutput(dirty);
			body = _initDocument(dirty);
			if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
		}
		if (body && FORCE_BODY) _forceRemove(body.firstChild);
		const walkRoot = inPlace ? dirty : body;
		try {
			if (inPlace) _sanitizeAttachedShadowRoots(dirty);
			const nodeIterator = _createNodeIterator(walkRoot);
			while (currentNode = nodeIterator.nextNode()) _sanitizeNode(currentNode, walkRoot);
			if (inPlace) _sanitizeUnvisitedNodes(dirty, inPlaceNodes);
		} catch (error) {
			if (inPlace) {
				_neutralizeRoot(dirty);
				_neutralizeDiscarded(dirty, inPlaceNodes);
			}
			throw error;
		} finally {
			IN_PLACE_VISITED = outerVisited;
		}
		if (inPlace) {
			if (_neutralizeDiscarded(dirty, inPlaceNodes)) throw typeErrorCreate("a node selected for removal could not be safely returned; refusing to sanitize in place");
			if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
			return dirty;
		}
		if (RETURN_DOM) {
			if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
			if (RETURN_DOM_FRAGMENT) {
				returnNode = createDocumentFragment.call(body.ownerDocument);
				while (body.firstChild) returnNode.appendChild(body.firstChild);
			} else returnNode = body;
			if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
			return returnNode;
		}
		const serialize = () => WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
		let serializedHTML = serialize();
		if (SAFE_FOR_TEMPLATES && regExpTest(TMPL_MARKER_SERIALIZED, serializedHTML)) {
			_scrubOwnCharacterData(body);
			serializedHTML = serialize();
		}
		if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
		return _signOutput(serializedHTML);
	};
	DOMPurify.setConfig = function() {
		let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		_parseConfig(cfg);
		SET_CONFIG = true;
		SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
		SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
	};
	DOMPurify.clearConfig = function() {
		CONFIG = null;
		SET_CONFIG = false;
		SET_CONFIG_ALLOWED_TAGS = null;
		SET_CONFIG_ALLOWED_ATTR = null;
		trustedTypesPolicy = defaultTrustedTypesPolicy;
		emptyHTML = "";
	};
	DOMPurify.isValidAttribute = function(tag, attr, value) {
		if (!CONFIG) _parseConfig({});
		const lcTag = transformCaseFunc(tag);
		const lcName = transformCaseFunc(attr);
		if (typeof value === "string" && (_isUnsafeAttributeValue(attr, value) || !ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value))) return false;
		return _isValidAttribute(lcTag, lcName, value);
	};
	DOMPurify.addHook = function(entryPoint, hookFunction) {
		if (typeof hookFunction !== "function") return;
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		arrayPush(hooks[entryPoint], hookFunction);
	};
	DOMPurify.removeHook = function(entryPoint, hookFunction) {
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		if (hookFunction !== void 0) {
			const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
			return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
		}
		return arrayPop(hooks[entryPoint]);
	};
	DOMPurify.removeHooks = function(entryPoint) {
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		hooks[entryPoint] = [];
	};
	DOMPurify.removeAllHooks = function() {
		hooks = _createHooksMap();
	};
	return DOMPurify;
}
var entries, objectKeys, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor, freeze, seal, create, _ref, apply, construct, arrayForEach, arrayLastIndexOf, arrayPop, arrayPush, arraySlice, arraySplice, arrayIsArray, setCreate, setAdd, setHas, stringToLowerCase, stringToString, stringMatch, stringReplace, stringIndexOf, stringTrim, numberToString, booleanToString, bigintToString, symbolToString, objectHasOwnProperty, objectToString, regExpTestRaw, regExpTest, typeErrorCreate, html$1, svg$1, svgFilters, svgDisallowed, mathMl$1, mathMlDisallowed, text, html, svg, mathMl, xml, MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, TMPL_MARKER_SERIALIZED, DATA_ATTR, ARIA_ATTR, IS_ALLOWED_URI, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, DOCTYPE_NAME, CUSTOM_ELEMENT, ELEMENT_MARKUP_PROBE, COMMENT_MARKUP_PROBE, FALLBACK_TAG_CLOSE, SELF_CLOSING_TAG, ATTR_VALUE_BREAKOUT, LEADING_WHITESPACE, NODE_TYPE, LITERAL_TEXT_ELEMENTS, getGlobal, _createTrustedTypesPolicy, _createHooksMap, _resolveSetOption, _resolveObjectOption, purify_default;
function init_purify_es() {
	return (init_purify_es = __esmMin((() => {
		AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
			return this;
		}, AsyncGenerator.prototype.next = function(e) {
			return this._invoke("next", e);
		}, AsyncGenerator.prototype.throw = function(e) {
			return this._invoke("throw", e);
		}, AsyncGenerator.prototype.return = function(e) {
			return this._invoke("return", e);
		};
		entries = Object.entries;
		objectKeys = Object.keys;
		setPrototypeOf = Object.setPrototypeOf;
		isFrozen = Object.isFrozen;
		getPrototypeOf = Object.getPrototypeOf;
		getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		freeze = Object.freeze;
		seal = Object.seal;
		create = Object.create;
		_ref = typeof Reflect !== "undefined" && Reflect;
		apply = _ref.apply;
		construct = _ref.construct;
		if (!freeze) freeze = function freeze(x) {
			return x;
		};
		if (!seal) seal = function seal(x) {
			return x;
		};
		if (!apply) apply = function apply(func, thisArg) {
			for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
			return func.apply(thisArg, args);
		};
		if (!construct) construct = function construct(Func) {
			for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
			return new Func(...args);
		};
		arrayForEach = unapply(Array.prototype.forEach);
		arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
		arrayPop = unapply(Array.prototype.pop);
		arrayPush = unapply(Array.prototype.push);
		arraySlice = unapply(Array.prototype.slice);
		arraySplice = unapply(Array.prototype.splice);
		arrayIsArray = Array.isArray;
		setCreate = unconstruct(Set);
		setAdd = unapply(Set.prototype.add);
		setHas = unapply(Set.prototype.has);
		stringToLowerCase = unapply(String.prototype.toLowerCase);
		stringToString = unapply(String.prototype.toString);
		stringMatch = unapply(String.prototype.match);
		stringReplace = unapply(String.prototype.replace);
		stringIndexOf = unapply(String.prototype.indexOf);
		stringTrim = unapply(String.prototype.trim);
		numberToString = unapply(Number.prototype.toString);
		booleanToString = unapply(Boolean.prototype.toString);
		bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
		symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
		objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
		objectToString = unapply(Object.prototype.toString);
		regExpTestRaw = RegExp.prototype.test;
		regExpTest = function regExpTest(regExp, value) {
			if (regExp instanceof RegExp) regExp.lastIndex = 0;
			return apply(regExpTestRaw, regExp, [value]);
		};
		typeErrorCreate = unconstruct(TypeError);
		html$1 = freeze([
			"a",
			"abbr",
			"acronym",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"bdi",
			"bdo",
			"big",
			"blink",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"center",
			"cite",
			"code",
			"col",
			"colgroup",
			"content",
			"data",
			"datalist",
			"dd",
			"decorator",
			"del",
			"details",
			"dfn",
			"dialog",
			"dir",
			"div",
			"dl",
			"dt",
			"element",
			"em",
			"fieldset",
			"figcaption",
			"figure",
			"font",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"head",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"img",
			"input",
			"ins",
			"kbd",
			"label",
			"legend",
			"li",
			"main",
			"map",
			"mark",
			"marquee",
			"menu",
			"menuitem",
			"meter",
			"nav",
			"nobr",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"search",
			"section",
			"select",
			"shadow",
			"slot",
			"small",
			"source",
			"spacer",
			"span",
			"strike",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"template",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"tr",
			"track",
			"tt",
			"u",
			"ul",
			"var",
			"video",
			"wbr"
		]);
		svg$1 = freeze([
			"svg",
			"a",
			"altglyph",
			"altglyphdef",
			"altglyphitem",
			"animatecolor",
			"animatemotion",
			"animatetransform",
			"circle",
			"clippath",
			"defs",
			"desc",
			"ellipse",
			"filter",
			"font",
			"g",
			"glyph",
			"glyphref",
			"hkern",
			"image",
			"line",
			"lineargradient",
			"marker",
			"mask",
			"metadata",
			"mpath",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialgradient",
			"rect",
			"stop",
			"style",
			"switch",
			"symbol",
			"text",
			"textpath",
			"title",
			"tref",
			"tspan",
			"view",
			"vkern"
		]);
		svgFilters = freeze([
			"feBlend",
			"feColorMatrix",
			"feComponentTransfer",
			"feComposite",
			"feConvolveMatrix",
			"feDiffuseLighting",
			"feDisplacementMap",
			"feDistantLight",
			"feDropShadow",
			"feFlood",
			"feFuncA",
			"feFuncB",
			"feFuncG",
			"feFuncR",
			"feGaussianBlur",
			"feImage",
			"feMerge",
			"feMergeNode",
			"feMorphology",
			"feOffset",
			"fePointLight",
			"feSpecularLighting",
			"feSpotLight",
			"feTile",
			"feTurbulence"
		]);
		svgDisallowed = freeze([
			"animate",
			"color-profile",
			"cursor",
			"discard",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"foreignobject",
			"hatch",
			"hatchpath",
			"mesh",
			"meshgradient",
			"meshpatch",
			"meshrow",
			"missing-glyph",
			"script",
			"set",
			"solidcolor",
			"unknown",
			"use"
		]);
		mathMl$1 = freeze([
			"math",
			"menclose",
			"merror",
			"mfenced",
			"mfrac",
			"mglyph",
			"mi",
			"mlabeledtr",
			"mmultiscripts",
			"mn",
			"mo",
			"mover",
			"mpadded",
			"mphantom",
			"mroot",
			"mrow",
			"ms",
			"mspace",
			"msqrt",
			"mstyle",
			"msub",
			"msup",
			"msubsup",
			"mtable",
			"mtd",
			"mtext",
			"mtr",
			"munder",
			"munderover",
			"mprescripts"
		]);
		mathMlDisallowed = freeze([
			"maction",
			"maligngroup",
			"malignmark",
			"mlongdiv",
			"mscarries",
			"mscarry",
			"msgroup",
			"mstack",
			"msline",
			"msrow",
			"semantics",
			"annotation",
			"annotation-xml",
			"mprescripts",
			"none"
		]);
		text = freeze(["#text"]);
		html = freeze([
			"accept",
			"action",
			"align",
			"alt",
			"autocapitalize",
			"autocomplete",
			"autopictureinpicture",
			"autoplay",
			"background",
			"bgcolor",
			"border",
			"capture",
			"cellpadding",
			"cellspacing",
			"checked",
			"cite",
			"class",
			"clear",
			"color",
			"cols",
			"colspan",
			"command",
			"commandfor",
			"controls",
			"controlslist",
			"coords",
			"crossorigin",
			"datetime",
			"decoding",
			"default",
			"dir",
			"disabled",
			"disablepictureinpicture",
			"disableremoteplayback",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"exportparts",
			"face",
			"for",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"id",
			"inert",
			"inputmode",
			"integrity",
			"ismap",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"loop",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"multiple",
			"muted",
			"name",
			"nonce",
			"noshade",
			"novalidate",
			"nowrap",
			"open",
			"optimum",
			"part",
			"pattern",
			"placeholder",
			"playsinline",
			"popover",
			"popovertarget",
			"popovertargetaction",
			"poster",
			"preload",
			"pubdate",
			"radiogroup",
			"readonly",
			"rel",
			"required",
			"rev",
			"reversed",
			"role",
			"rows",
			"rowspan",
			"spellcheck",
			"scope",
			"selected",
			"shape",
			"size",
			"sizes",
			"slot",
			"span",
			"srclang",
			"start",
			"src",
			"srcset",
			"step",
			"style",
			"summary",
			"tabindex",
			"title",
			"translate",
			"type",
			"usemap",
			"valign",
			"value",
			"width",
			"wrap",
			"xmlns"
		]);
		svg = freeze([
			"accent-height",
			"accumulate",
			"additive",
			"alignment-baseline",
			"amplitude",
			"ascent",
			"attributename",
			"attributetype",
			"azimuth",
			"basefrequency",
			"baseline-shift",
			"begin",
			"bias",
			"by",
			"class",
			"clip",
			"clippathunits",
			"clip-path",
			"clip-rule",
			"color",
			"color-interpolation",
			"color-interpolation-filters",
			"color-profile",
			"color-rendering",
			"cx",
			"cy",
			"d",
			"dx",
			"dy",
			"diffuseconstant",
			"direction",
			"display",
			"divisor",
			"dominant-baseline",
			"dur",
			"edgemode",
			"elevation",
			"end",
			"exponent",
			"fill",
			"fill-opacity",
			"fill-rule",
			"filter",
			"filterunits",
			"flood-color",
			"flood-opacity",
			"font-family",
			"font-size",
			"font-size-adjust",
			"font-stretch",
			"font-style",
			"font-variant",
			"font-weight",
			"fx",
			"fy",
			"g1",
			"g2",
			"glyph-name",
			"glyphref",
			"gradientunits",
			"gradienttransform",
			"height",
			"href",
			"id",
			"image-rendering",
			"in",
			"in2",
			"intercept",
			"k",
			"k1",
			"k2",
			"k3",
			"k4",
			"kerning",
			"keypoints",
			"keysplines",
			"keytimes",
			"lang",
			"lengthadjust",
			"letter-spacing",
			"kernelmatrix",
			"kernelunitlength",
			"lighting-color",
			"local",
			"marker-end",
			"marker-mid",
			"marker-start",
			"markerheight",
			"markerunits",
			"markerwidth",
			"maskcontentunits",
			"maskunits",
			"max",
			"mask",
			"mask-type",
			"media",
			"method",
			"mode",
			"min",
			"name",
			"numoctaves",
			"offset",
			"operator",
			"opacity",
			"order",
			"orient",
			"orientation",
			"origin",
			"overflow",
			"paint-order",
			"path",
			"pathlength",
			"patterncontentunits",
			"patterntransform",
			"patternunits",
			"pointer-events",
			"points",
			"preservealpha",
			"preserveaspectratio",
			"primitiveunits",
			"r",
			"rx",
			"ry",
			"radius",
			"refx",
			"refy",
			"repeatcount",
			"repeatdur",
			"restart",
			"result",
			"rotate",
			"scale",
			"seed",
			"shape-rendering",
			"slope",
			"specularconstant",
			"specularexponent",
			"spreadmethod",
			"startoffset",
			"stddeviation",
			"stitchtiles",
			"stop-color",
			"stop-opacity",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-opacity",
			"stroke",
			"stroke-width",
			"style",
			"surfacescale",
			"systemlanguage",
			"tabindex",
			"tablevalues",
			"targetx",
			"targety",
			"transform",
			"transform-origin",
			"text-anchor",
			"text-decoration",
			"text-orientation",
			"text-rendering",
			"textlength",
			"type",
			"u1",
			"u2",
			"unicode",
			"values",
			"vector-effect",
			"viewbox",
			"visibility",
			"version",
			"vert-adv-y",
			"vert-origin-x",
			"vert-origin-y",
			"width",
			"word-spacing",
			"wrap",
			"writing-mode",
			"xchannelselector",
			"ychannelselector",
			"x",
			"x1",
			"x2",
			"xmlns",
			"y",
			"y1",
			"y2",
			"z",
			"zoomandpan"
		]);
		mathMl = freeze([
			"accent",
			"accentunder",
			"align",
			"bevelled",
			"close",
			"columnalign",
			"columnlines",
			"columnspacing",
			"columnspan",
			"denomalign",
			"depth",
			"dir",
			"display",
			"displaystyle",
			"encoding",
			"fence",
			"frame",
			"height",
			"href",
			"id",
			"largeop",
			"length",
			"linethickness",
			"lquote",
			"lspace",
			"mathbackground",
			"mathcolor",
			"mathsize",
			"mathvariant",
			"maxsize",
			"minsize",
			"movablelimits",
			"notation",
			"numalign",
			"open",
			"rowalign",
			"rowlines",
			"rowspacing",
			"rowspan",
			"rspace",
			"rquote",
			"scriptlevel",
			"scriptminsize",
			"scriptsizemultiplier",
			"selection",
			"separator",
			"separators",
			"stretchy",
			"subscriptshift",
			"supscriptshift",
			"symmetric",
			"voffset",
			"width",
			"xmlns"
		]);
		xml = freeze([
			"xlink:href",
			"xml:id",
			"xlink:title",
			"xml:space",
			"xmlns:xlink"
		]);
		MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
		ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
		TMPLIT_EXPR = seal(/\${[\w\W]*/g);
		TMPL_MARKER_SERIALIZED = seal(/{{|}}|\${|<%|%>|&lt;%|%&gt;/);
		DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
		ARIA_ATTR = seal(/^aria-[\-\w]+$/);
		IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
		IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
		ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
		DOCTYPE_NAME = seal(/^html$/i);
		CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
		ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
		COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
		FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
		SELF_CLOSING_TAG = seal(/\/>/i);
		ATTR_VALUE_BREAKOUT = seal(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i);
		LEADING_WHITESPACE = seal(/^[\r\n\t ]+/);
		NODE_TYPE = {
			element: 1,
			text: 3,
			processingInstruction: 7,
			comment: 8,
			document: 9,
			documentFragment: 11
		};
		LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, [
			"style",
			"script",
			"xmp",
			"iframe",
			"noembed",
			"noframes",
			"plaintext",
			"noscript"
		]));
		getGlobal = function getGlobal() {
			return typeof window === "undefined" ? null : window;
		};
		_createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
			if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
			let suffix = null;
			const ATTR_NAME = "data-tt-policy-suffix";
			if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
			const policyName = "dompurify" + (suffix ? "#" + suffix : "");
			try {
				return trustedTypes.createPolicy(policyName, {
					createHTML(html) {
						return html;
					},
					createScriptURL(scriptUrl) {
						return scriptUrl;
					}
				});
			} catch (_) {
				console.warn("TrustedTypes policy " + policyName + " could not be created.");
				return null;
			}
		};
		_createHooksMap = function _createHooksMap() {
			return {
				afterSanitizeAttributes: [],
				afterSanitizeElements: [],
				afterSanitizeShadowDOM: [],
				beforeSanitizeAttributes: [],
				beforeSanitizeElements: [],
				beforeSanitizeShadowDOM: [],
				uponSanitizeAttribute: [],
				uponSanitizeElement: [],
				uponSanitizeShadowNode: []
			};
		};
		_resolveSetOption = function _resolveSetOption(cfg, key, fallback, options) {
			return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? cloneSet(options.base) : {}, cfg[key], options.transform) : fallback;
		};
		_resolveObjectOption = function _resolveObjectOption(cfg, key, fallback) {
			const value = objectHasOwnProperty(cfg, key) ? cfg[key] : void 0;
			return value && typeof value === "object" ? clone(value) : fallback;
		};
		purify_default = createDOMPurify();
	})))();
}
//#endregion
//#region node_modules/marked/lib/marked.esm.js
/**
* marked v18.2.1 - a markdown parser
* Copyright (c) 2018-2026, MarkedJS. (MIT License)
* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
* https://github.com/markedjs/marked
*/
/**
* DO NOT EDIT THIS FILE
* The code in this file is generated from files in ./src/
*/
function G() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
function ue(l) {
	S = l;
}
function D(l) {
	let e = [];
	return (t) => {
		let n = Math.max(0, Math.min(3, t - 1)), r = e[n];
		return r || (r = l(n), e[n] = r), r;
	};
}
function g(l, e = "") {
	let t = typeof l == "string" ? l : l.source, n = {
		replace: (r, s) => {
			let o = typeof s == "string" ? s : s.source;
			return o = o.replace(O.caret, "$1"), t = t.replace(r, o), n;
		},
		getRegex: () => new RegExp(t, e)
	};
	return n;
}
function y(l, e) {
	if (e) {
		if (O.escapeTest.test(l)) return l.replace(O.escapeReplace, Be);
	} else if (O.escapeTestNoEncode.test(l)) return l.replace(O.escapeReplaceNoEncode, Be);
	return l;
}
function De(l) {
	return O.numericCharacterReference.test(l) ? l.replace(O.numericCharacterReferenceOrAmpersand, (e, t, n) => {
		if (t === void 0 && n === void 0) return "&amp;";
		let r = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
		return r === 0 || r > 1114111 || r >= 55296 && r <= 57343 ? "�" : r === 38 ? "&amp;" : String.fromCodePoint(r);
	}) : l;
}
function xe(l) {
	try {
		l = encodeURI(l).replace(O.percentDecode, "%");
	} catch {
		return null;
	}
	return l;
}
function be(l, e) {
	let n = l.replace(O.findPipe, (s, o, i) => {
		let a = !1, c = o;
		for (; --c >= 0 && i[c] === "\\";) a = !a;
		return a ? "|" : " |";
	}).split(O.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
	else for (; n.length < e;) n.push("");
	for (; r < n.length; r++) n[r] = n[r].trim().replace(O.slashPipe, "|");
	return n;
}
function C(l, e, t) {
	let n = l.length;
	if (n === 0) return "";
	let r = 0;
	for (; r < n;) {
		let s = l.charAt(n - r - 1);
		if (s === e && !t) r++;
		else if (s !== e && t) r++;
		else break;
	}
	return l.slice(0, n - r);
}
function Re(l) {
	let e = l.split(`
`), t = e.length - 1;
	for (; t >= 0 && O.blankLine.test(e[t]);) t--;
	return e.length - t <= 2 ? l : e.slice(0, t + 1).join(`
`);
}
function W(l) {
	return l.trim().replace(O.multipleSpaceGlobal, " ").toLowerCase().toUpperCase().toLowerCase();
}
function Te(l, e) {
	if (l.indexOf(e[0]) === -1 && l.indexOf(e[1]) === -1) return -1;
	let t = 0;
	for (let n = 0; n < l.length; n++) if (l[n] === "\\") n++;
	else if (l[n] === e[0]) t++;
	else if (l[n] === e[1] && (t--, t < 0)) return n;
	return t > 0 ? -2 : -1;
}
function Oe(l) {
	let e = {
		"*": -1,
		_: -1
	}, t = -1, n = l.length;
	for (let r = 0; r < n; r++) {
		let s = l[r];
		if (s !== "*" && s !== "_" && s !== "~") continue;
		let o = r === 0 ? `
` : l[r - 1], i = r + 1;
		for (; i < n && l[i] === s;) i++;
		o !== " " && o !== "	" && o !== `
` && o !== "\r" && o !== "\f" && (s === "~" ? t = r : e[s] = r), r = i - 1;
	}
	return {
		maskedSrc: l,
		lastPossibleEmStrongCloserIndex: e,
		lastPossibleDelCloserIndex: t
	};
}
function qe(l, e) {
	let t = Oe(e), n = Q.get(l);
	n ? n.push(t) : Q.set(l, [t]);
}
function ve(l) {
	let e = Q.get(l);
	e && (e.pop(), e.length === 0 && Q.delete(l));
}
function oe(l, e, t) {
	let n = Q.get(l)?.at(-1);
	return n && n.maskedSrc === e ? n.lastPossibleEmStrongCloserIndex[t] : Oe(e).lastPossibleEmStrongCloserIndex[t];
}
function ae(l, e) {
	let t = Q.get(l)?.at(-1);
	return t && t.maskedSrc === e ? t.lastPossibleDelCloserIndex : Oe(e).lastPossibleDelCloserIndex;
}
function te(l, e = 0) {
	let t = e, n = "";
	for (let r of l) if (r === "	") {
		let s = 4 - t % 4;
		n += " ".repeat(s), t += s;
	} else n += r, t++;
	return n;
}
function Ht(l, e) {
	let t = "";
	for (let n = 0; n < l.length; n++) {
		if (l[n] === "`") {
			let r = e.inline.code.exec(l.slice(n));
			if (r) {
				t += r[0], n += r[0].length - 1;
				continue;
			}
		}
		if (l[n] === "\\" && (l[n + 1] === "[" || l[n + 1] === "]")) {
			t += l[n + 1], n++;
			continue;
		}
		t += l[n];
	}
	return t;
}
function He(l, e, t, n, r) {
	let s = e.href, o = e.title || null, i = Ht(l[1], r), a = l[0].charAt(0) === "!", c = n.state.inLink, u = n.state.linkEmitted, d = n.state.inRawBlock;
	n.state.inLink = !0, n.state.linkEmitted = !1;
	let h = n.inlineTokens(i), p = n.state.linkEmitted;
	if (n.state.linkEmitted = u, n.state.inLink = c, !a) {
		if (p) {
			n.state.inRawBlock = d;
			return;
		}
		n.state.linkEmitted = !0;
	}
	return {
		type: a ? "image" : "link",
		raw: t,
		href: s,
		title: o,
		text: i,
		tokens: h
	};
}
function Zt(l, e, t) {
	let n = l.match(t.other.indentCodeCompensation);
	if (n === null) return e;
	let r = n[1];
	return e.split(`
`).map((s) => {
		let o = s.match(t.other.beginningSpace);
		if (o === null) return s;
		let [i] = o;
		return s.slice(Math.min(i.length, r.length));
	}).join(`
`);
}
function Ze(l, e, t, n) {
	if (!e.includes("<")) return !1;
	for (let r = 0; r < e.length; r++) {
		if (e[r] === "\\") {
			r++;
			continue;
		}
		if (e[r] === "`") {
			let i = n.inline.code.exec(e.slice(r));
			if (i) {
				r += i[0].length - 1;
				continue;
			}
		}
		if (e[r] !== "<") continue;
		let s = l.slice(t + r), o = n.inline.tag.exec(s) || n.inline.autolink.exec(s);
		if (o) {
			if (o[0].length > e.length - r) return !0;
			r += o[0].length - 1;
		}
	}
	return !1;
}
function M(l, e) {
	if (Array.isArray(e)) for (let t = 0; t < e.length; t++) l.push(e[t]);
	else l.push(e);
}
function x(l, e) {
	return v.parse(l, e);
}
function jt(...l) {
	return v.use(...l), x.defaults = v.defaults, ue(x.defaults), x;
}
var S, q, _e, O, Ge, Ne, Fe, V, Qe, ce, he, J, $e, Le, We, de, Ue, ge, Ke, Xe, ke, Ve, Ce, Je, Ye, fe, Pe, tt, nt, rt, st, Ie, it, L, N, Y, ot, at, Ae, lt, ut, pt, Ee, ct, ht, gt, ze, kt, ft, xt, bt, Tt, Ot, Pt, yt, St, _t, $t, Lt, Me, ie, Ct, It, At, ye, Et, zt, Se, Bt, me, Dt, pe, qt, ee, F, vt, Be, Q, _, w, I, z, P, A, ne, v, Dn;
function init_marked_esm() {
	return (init_marked_esm = __esmMin((() => {
		S = G();
		q = { exec: () => null };
		_e = ((l = "") => {
			try {
				return !!new RegExp("(?<=1)(?<!1)" + l);
			} catch {
				return !1;
			}
		})();
		O = {
			codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
			listInterruptsParagraph: /^ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/,
			outputLinkReplace: /\\([\[\]])/g,
			indentCodeCompensation: /^(\s+)(?:```)/,
			beginningSpace: /^\s+/,
			endingHash: /#$/,
			startingSpaceChar: /^ /,
			endingSpaceChar: / $/,
			endingSpaceTabChar: /[ \t]$/,
			nonSpaceChar: /[^ ]/,
			newLineCharGlobal: /\n/g,
			tabCharGlobal: /\t/g,
			leadingSpaceTab: /^[ \t]+/,
			multipleSpaceGlobal: /\s+/g,
			blankLine: /^[ \t]*$/,
			doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
			blockquoteStart: /^ {0,3}>/,
			blockquoteSetextReplace: /\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,
			blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
			blockquoteMarkerWhitespace: /^( {0,3}>)(\t[ \t]*)/gm,
			nestedBlockMarker: /^ {0,3}(?:(?:[*+-]|\d{1,9}[.)])(?: |$)|> ?)/,
			listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
			listIsTask: /^\[[ xX]\][ \t]+\S/,
			listReplaceTask: /^\[[ xX]\][ \t]+/,
			listTaskCheckbox: /\[[ xX]\]/,
			anyLine: /\n.*\n/,
			hrefBrackets: /^<(.*)>$/,
			tableDelimiter: /[:|]/,
			tableAlignChars: /^\||\| *$/g,
			tableRowBlankLine: /\n[ \t]*$/,
			tableAlignRight: /^ *-+: *$/,
			tableAlignCenter: /^ *:-+: *$/,
			tableAlignLeft: /^ *:-+ *$/,
			startATag: /^<a /i,
			endATag: /^<\/a>/i,
			startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
			endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
			startAngleBracket: /^</,
			endAngleBracket: />$/,
			pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
			unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
			numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,
			numericCharacterReferenceOrAmpersand: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
			escapeTest: /[&<>"']/,
			escapeReplace: /[&<>"']/g,
			escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
			escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
			caret: /(^|[^\[])\^/g,
			percentDecode: /%25/g,
			findPipe: /\|/g,
			splitPipe: / \|/,
			slashPipe: /\\\|/g,
			carriageReturn: /\r\n|\r/g,
			spaceLine: /^ +$/gm,
			notSpaceStart: /^\S*/,
			endingNewline: /\n$/,
			listItemRegex: (l) => new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),
			nextBulletRegex: D((l) => new RegExp(`^ {0,${l}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
			hrRegex: D((l) => new RegExp(`^ {0,${l}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
			fencesBeginRegex: D((l) => new RegExp(`^ {0,${l}}(?:\`\`\`|~~~)`)),
			headingBeginRegex: D((l) => new RegExp(`^ {0,${l}}#{1,6}(?:\\s|$)`)),
			pedanticHeadingBeginRegex: D((l) => new RegExp(`^ {0,${l}}#`)),
			htmlBeginRegex: D((l) => new RegExp(`^ {0,${l}}(?:</?(?:${he})(?:[ \\t]+|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`, "i")),
			blockquoteBeginRegex: D((l) => new RegExp(`^ {0,${l}}>`)),
			nestedContainerMarkers: /^(?: {0,3}(?:(?:[*+-]|\d{1,9}[.)])[ \t]+|>[ \t]?))+/
		};
		Ge = /^(?:[ \t]*(?:\n|$))+/;
		Ne = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
		Fe = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/;
		V = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
		Qe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
		ce = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
		he = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
		J = g(" {0,3}(?:</?(?:tag)(?:[ \\t]+|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", he).getRegex();
		$e = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/;
		Le = g($e).replace(/bull/g, ce).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/\|table/g, "").replace(/html/g, J).getRegex();
		We = g($e).replace(/bull/g, ce).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).replace(/html/g, J).getRegex();
		de = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
		Ue = /^[^\n]+/;
		ge = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/;
		Ke = g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<(?:\\.|[^\n<>\\])*>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ge).replace("title", /(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex();
		Xe = g(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, ce).getRegex();
		ke = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
		Ve = g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*?[ \\t]*/?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ke).replace("tag", he).replace("attribute", /[ \t]+[a-zA-Z:_][\w.:-]*(?:[ \t]*=[ \t]*"[^"\n]*"|[ \t]*=[ \t]*'[^'\n]*'|[ \t]*=[ \t]*[^\s"'=<>`]+)?/).getRegex();
		Ce = (l) => g(de).replace("hr", V).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", l).replace("html", J).getRegex();
		Je = Ce(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
		Ye = Ce(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
		fe = {
			blockquote: g(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph", Ye).getRegex(),
			code: Ne,
			def: Ke,
			fences: Fe,
			heading: Qe,
			hr: V,
			html: Ve,
			lheading: Le,
			list: Xe,
			newline: Ge,
			paragraph: Je,
			table: q,
			text: Ue
		};
		Pe = g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", V).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", J).getRegex();
		tt = {
			...fe,
			lheading: We,
			table: Pe,
			paragraph: g(de).replace("hr", V).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", J).getRegex()
		};
		nt = {
			...fe,
			html: g(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment", ke).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
			def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
			heading: /^(#{1,6})(.*)(?:\n+|$)/,
			fences: q,
			lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
			paragraph: g(de).replace("hr", V).replace("heading", ` *#{1,6} *[^
]`).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").replace("lheading", Le).getRegex()
		};
		rt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
		st = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
		Ie = /^( {2,}|\\)\n(?!\s*$)[ \t]*/;
		it = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
		L = /[\p{P}\p{S}]/u;
		N = /[\s\p{P}\p{S}]/u;
		Y = /[^\s\p{P}\p{S}]/u;
		ot = g(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, N).getRegex();
		at = /[\p{Pi}\p{Ps}"']/u;
		Ae = /(?!~)[\p{P}\p{S}]/u;
		lt = /(?!~)[\s\p{P}\p{S}]/u;
		ut = /(?:[^\s\p{P}\p{S}]|~)/u;
		pt = g(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", _e ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
		Ee = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
		ct = g(Ee, "u").replace(/punct/g, L).getRegex();
		ht = g(Ee, "u").replace(/punct/g, Ae).getRegex();
		gt = g(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u").replace(/openQuote/g, at).replace(/punct/g, L).getRegex();
		ze = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
		kt = g(ze, "gu").replace(/notPunctSpace/g, Y).replace(/punctSpace/g, N).replace(/punct/g, L).getRegex();
		ft = g(ze, "gu").replace(/notPunctSpace/g, ut).replace(/punctSpace/g, lt).replace(/punct/g, Ae).getRegex();
		xt = g("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Y).replace(/punctSpace/g, N).replace(/punct/g, L).getRegex();
		bt = g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Y).replace(/punctSpace/g, N).replace(/punct/g, L).getRegex();
		Tt = g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Y).replace(/punctSpace/g, N).replace(/punct/g, L).getRegex();
		Ot = g(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, L).getRegex();
		Pt = g("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Y).replace(/punctSpace/g, N).replace(/punct/g, L).getRegex();
		yt = g(/\\(punct)/, "gu").replace(/punct/g, L).getRegex();
		St = g(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, "gu").replace(/punct/g, L).getRegex();
		_t = g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
		$t = g(ke).replace("(?:-->|$)", "-->").getRegex();
		Lt = g("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", $t).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
		Me = /\[(?:\\[\s\S]|[^\[\]\\])*\]/;
		ie = g(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", Me).getRegex();
		Ct = g(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", ie).replace("href", /<(?:\\.|[^\n<>\\])*>|(?!<)[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex();
		It = g(/^!?\[(label)\]\[(ref)\]/).replace("label", ie).replace("ref", ge).getRegex();
		At = g(/^!?\[(ref)\](?:\[\])?/).replace("ref", ge).getRegex();
		ye = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;
		Et = g(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", Me).getRegex();
		zt = g("reflink|nolink(?!\\()", "g").replace("reflink", g(/^!?\[(label)\]\[(ref)\]/).replace("label", Et).replace("ref", ye).getRegex()).replace("nolink", g(/^!?\[(ref)\](?:\[\])?/).replace("ref", ye).getRegex()).getRegex();
		Se = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
		Bt = g(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex();
		me = {
			_backpedal: q,
			anyPunctuation: yt,
			anyPunctuationOutsideCode: St,
			autolink: _t,
			blockSkip: pt,
			br: Ie,
			code: st,
			del: q,
			delLDelim: q,
			delRDelim: q,
			emStrongLDelim: ct,
			emStrongRDelimAst: kt,
			emStrongRDelimUnd: bt,
			escape: rt,
			link: Ct,
			nolink: At,
			punctuation: ot,
			reflink: It,
			reflinkSearch: zt,
			tag: Lt,
			text: it,
			url: q
		};
		Dt = {
			...me,
			emStrongLDelim: gt,
			emStrongRDelimAst: xt,
			emStrongRDelimUnd: Tt,
			link: g(/^!?\[(label)\]\((.*?)\)/).replace("label", ie).getRegex(),
			reflink: g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ie).getRegex()
		};
		pe = {
			...me,
			emStrongRDelimAst: ft,
			emStrongLDelim: ht,
			delLDelim: Ot,
			delRDelim: Pt,
			url: g(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", Bt).replace("protocol", Se).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),
			_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
			del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
			text: g(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", Se).replace(/emailProtocol/g, /(?:mailto|xmpp):/).replace("wwwStart", _e ? "(?<![^\\s*_~(])www\\." : "www\\.").getRegex()
		};
		qt = {
			...pe,
			br: g(Ie).replace("{2,}", "*").getRegex(),
			text: g(pe.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
		};
		ee = {
			normal: fe,
			gfm: tt,
			pedantic: nt
		};
		F = {
			normal: me,
			gfm: pe,
			breaks: qt,
			pedantic: Dt
		};
		vt = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		};
		Be = (l) => vt[l];
		Q = /* @__PURE__ */ new WeakMap();
		_ = class {
			options;
			rules;
			lexer;
			constructor(e) {
				this.options = e || S;
			}
			space(e) {
				let t = this.rules.block.newline.exec(e);
				if (t && t[0].length > 0) return {
					type: "space",
					raw: t[0]
				};
			}
			code(e) {
				let t = this.rules.block.code.exec(e);
				if (t) {
					let n = this.options.pedantic ? t[0] : Re(t[0]);
					return {
						type: "code",
						raw: n,
						codeBlockStyle: "indented",
						text: n.replace(this.rules.other.codeRemoveIndent, "")
					};
				}
			}
			fences(e) {
				let t = this.rules.block.fences.exec(e);
				if (t) {
					let n = t[0], r = Zt(n, t[3] || "", this.rules);
					return t[3] !== void 0 && (r === "" || r.endsWith(`
`)) && (r += `
`), {
						type: "code",
						raw: n,
						lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
						text: r
					};
				}
			}
			heading(e) {
				let t = this.rules.block.heading.exec(e);
				if (t) {
					let n = t[2].trim();
					if (this.rules.other.endingHash.test(n)) {
						let r = C(n, "#");
						(this.options.pedantic || !r || this.rules.other.endingSpaceTabChar.test(r)) && (n = r.trim());
					}
					return {
						type: "heading",
						raw: C(t[0], `
`),
						depth: t[1].length,
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			hr(e) {
				let t = this.rules.block.hr.exec(e);
				if (t) return {
					type: "hr",
					raw: C(t[0], `
`)
				};
			}
			blockquote(e) {
				let t = this.rules.block.blockquote.exec(e);
				if (t) {
					let n = C(t[0], `
`).split(`
`), r = "", s = "", o = [];
					for (; n.length > 0;) {
						let i = !1, a = [], c = 0;
						for (; c < n.length; c++) if (this.rules.other.blockquoteStart.test(n[c])) a.push(n[c]), i = !0;
						else if (!i) a.push(n[c]);
						else break;
						n = n.slice(c);
						let u = a.join(`
`), d = u.replace(this.rules.other.blockquoteMarkerWhitespace, (k, m, b) => b.startsWith(" ") ? m + " " + b.slice(1) : m + te(b, m.length)).replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
						r = r ? `${r}
${u}` : u, s = s ? `${s}
${d}` : d;
						let h = this.lexer.state.top;
						if (this.lexer.state.top = !0, this.lexer.blockTokens(d, o, !0), this.lexer.state.top = h, n.length === 0) break;
						let p = o.at(-1);
						if (p?.type === "code" || p?.type === "heading" || p?.type === "hr" || p?.type === "html" || p?.type === "table") break;
						if (p?.type === "blockquote") {
							let k = p, m = n.join(`
`), b = k.raw + `
` + m.replace(this.rules.other.blockquoteSetextReplace2, ""), f = this.blockquote(b);
							o[o.length - 1] = f;
							let R = b.substring(f.raw.length).replace(/^\n/, ""), E = R ? R.split(`
`).length : 0, T = E ? n.slice(0, -E) : n;
							if (T.length > 0 && (r = `${r}
${T.join(`
`)}`), s = s.substring(0, s.length - k.text.length) + f.text, n = n.slice(T.length), n.length > 0 && this.rules.other.blockquoteStart.test(n[0])) continue;
							break;
						} else if (p?.type === "list") {
							let k = p, m = k.raw + `
` + n.join(`
`), b = this.list(m);
							o[o.length - 1] = b;
							let f = b.raw.length > k.raw.length ? m.slice(k.raw.length + 1, b.raw.length).split(`
`).length : 0;
							if (f > 0) {
								let R = n.slice(0, f).join(`
`);
								r = `${r}
${R}`, s = `${s}
${R}`;
							}
							if (n = n.slice(f), n.length > 0 && !this.rules.other.blockquoteStart.test(n[0])) break;
							continue;
						}
					}
					return {
						type: "blockquote",
						raw: r,
						tokens: o,
						text: s
					};
				}
			}
			list(e) {
				let t = this.rules.block.list.exec(e);
				if (t) {
					if (!this.options.pedantic && this.lexer.state.lastToken?.type === "text" && !this.rules.other.listInterruptsParagraph.test(e)) return;
					let n = e, r = () => n.length - e.length, s = t[1].trim(), o = s.length > 1, i = {
						type: "list",
						raw: "",
						ordered: o,
						start: o ? +s.slice(0, -1) : "",
						loose: !1,
						items: []
					};
					s = o ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = o ? s : "[*+-]");
					let a = this.rules.other.listItemRegex(s), c = !1;
					for (; e;) {
						let h = !1, p = "";
						if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
						let k = r();
						e = e.substring(t[0].length);
						let m = t[2].split(`
`, 1)[0], b = t[1].length, f = this.options.pedantic ? te(m, b) : m.replace(this.rules.other.leadingSpaceTab, (H) => te(H, b)), R = e.split(`
`, 1)[0], E = !f.trim(), T = 0;
						if (this.options.pedantic ? (T = 2, p = f.trimStart()) : E ? T = b + 1 : (T = f.search(this.rules.other.nonSpaceChar), T = T > 4 ? 1 : T, p = f.slice(T), T += b), E && this.rules.other.blankLine.test(R) && (e = e.substring(R.length + 1), h = !0), !h) {
							let H = this.rules.other.nextBulletRegex(T), K = this.rules.other.hrRegex(T), re = this.rules.other.fencesBeginRegex(T), B = this.options.pedantic ? this.rules.other.pedanticHeadingBeginRegex(T) : this.rules.other.headingBeginRegex(T), X = this.rules.other.htmlBeginRegex(T), se = this.rules.other.blockquoteBeginRegex(T), le = !1;
							for (; e;) {
								let we = e.split(`
`, 1)[0], Z;
								if (R = we, this.options.pedantic ? (R = R.replace(this.rules.other.listReplaceNesting, "  "), Z = R) : Z = R.replace(this.rules.other.leadingSpaceTab, ($) => te($)), re.test(R) || B.test(R) || X.test(R) || se.test(R) || H.test(R) || K.test(R)) break;
								if (Z.search(this.rules.other.nonSpaceChar) >= T || !R.trim()) p += `
` + Z.slice(T), le = !1;
								else {
									if (E) break;
									let $ = f;
									if (!this.options.pedantic && !p.includes(`
`) && !f.includes("	")) {
										let j;
										for (; !K.test($) && (j = this.rules.other.nestedBlockMarker.exec($));) $ = $.slice(j[0].length);
										if (!$.trim()) break;
									}
									if ($.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || re.test($) || B.test($) || X.test($) || K.test($)) break;
									if (!this.options.pedantic && !le) {
										let j = f.replace(this.rules.other.nestedContainerMarkers, "");
										if (this.rules.block.fences.test(j) || this.rules.block.heading.test(j) || this.rules.block.hr.test(j)) break;
									}
									let je = !this.options.pedantic && /^ {0,3}(?:=+|-+) *$/.test(R) && this.rules.block.lheading.test(`${f}
${R}`) ? `    ${Z.replace(/^ {0,3}/, "")}` : R;
									p += `
` + je, le = !0;
								}
								E = !R.trim(), e = e.substring(we.length + 1), f = Z.slice(T);
							}
						}
						let U = n.slice(k, r());
						i.loose || (c ? i.loose = !0 : this.rules.other.doubleBlankLine.test(U) && (c = !0)), i.items.push({
							type: "list_item",
							raw: U,
							task: !!this.options.gfm && this.rules.other.listIsTask.test(p),
							loose: !1,
							text: p,
							tokens: []
						});
					}
					let u = i.items.at(-1);
					if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
					else return;
					i.raw = n.slice(0, r()).trimEnd();
					let d = [];
					for (let h of i.items) if (this.lexer.state.top = !1, d.push(this.lexer.inlineQueue.length), h.tokens = this.lexer.blockTokens(h.text, []), !i.loose) {
						let p = h.tokens.filter((m) => m.type === "space");
						i.loose = p.length > 0 && p.some((m) => this.rules.other.anyLine.test(m.raw));
					}
					for (let h = 0; h < i.items.length; h++) {
						let p = i.items[h], k = p.tokens[0];
						if (p.task && (k?.type === "text" || k?.type === "paragraph")) {
							p.text = p.text.replace(this.rules.other.listReplaceTask, ""), k.raw = k.raw.replace(this.rules.other.listReplaceTask, ""), k.text = k.text.replace(this.rules.other.listReplaceTask, "");
							let m = this.lexer.inlineQueue;
							for (let f = d[h]; f < m.length; f++) if (m[f].tokens === k.tokens) {
								m[f].src = m[f].src.replace(this.rules.other.listReplaceTask, "");
								break;
							}
							let b = this.rules.other.listTaskCheckbox.exec(p.raw);
							if (b) {
								let f = {
									type: "checkbox",
									raw: b[0] + " ",
									checked: b[0] !== "[ ]"
								};
								p.checked = f.checked, i.loose ? p.tokens[0] && ["paragraph", "text"].includes(p.tokens[0].type) && "tokens" in p.tokens[0] && p.tokens[0].tokens ? (p.tokens[0].raw = f.raw + p.tokens[0].raw, p.tokens[0].text = f.raw + p.tokens[0].text, p.tokens[0].tokens.unshift(f)) : p.tokens.unshift({
									type: "paragraph",
									raw: f.raw,
									text: f.raw,
									tokens: [f]
								}) : p.tokens.unshift(f);
							}
						} else p.task && (p.task = !1);
					}
					if (i.loose) for (let h of i.items) {
						h.loose = !0;
						for (let p of h.tokens) p.type === "text" && (p.type = "paragraph");
					}
					return i;
				}
			}
			html(e) {
				let t = this.rules.block.html.exec(e);
				if (t) {
					if (this.lexer.state.lastToken?.type === "paragraph" && !this.rules.other.htmlBeginRegex(4).test(e)) return;
					let n = Re(t[0]);
					return {
						type: "html",
						block: !0,
						raw: n,
						pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
						text: n
					};
				}
			}
			def(e) {
				let t = this.rules.block.def.exec(e);
				if (t) {
					if (!this.rules.other.startAngleBracket.test(t[2]) && Te(t[2], "()") !== -1) return;
					let n = W(t[1]), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
					return {
						type: "def",
						tag: n,
						raw: C(t[0], `
`),
						href: r,
						title: s
					};
				}
			}
			table(e) {
				let t = this.rules.block.table.exec(e);
				if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
				let n = be(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
					type: "table",
					raw: C(t[0], `
`),
					header: [],
					align: [],
					rows: []
				};
				if (n.length === r.length) {
					for (let i of r) this.rules.other.tableAlignRight.test(i) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? o.align.push("left") : o.align.push(null);
					for (let i = 0; i < n.length; i++) o.header.push({
						text: n[i],
						tokens: this.lexer.inline(n[i]),
						header: !0,
						align: o.align[i]
					});
					for (let i of s) o.rows.push(be(i, o.header.length).map((a, c) => ({
						text: a,
						tokens: this.lexer.inline(a),
						header: !1,
						align: o.align[c]
					})));
					return o;
				}
			}
			lheading(e) {
				let t = this.rules.block.lheading.exec(e);
				if (t) {
					let n = t[1].trim();
					return {
						type: "heading",
						raw: C(t[0], `
`),
						depth: t[2].charAt(0) === "=" ? 1 : 2,
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			paragraph(e) {
				let t = this.rules.block.paragraph.exec(e);
				if (t) {
					let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
					return {
						type: "paragraph",
						raw: t[0],
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			text(e) {
				let t = this.rules.block.text.exec(e);
				if (t) return {
					type: "text",
					raw: t[0],
					text: t[0],
					tokens: this.lexer.inline(t[0])
				};
			}
			escape(e) {
				if (e.charCodeAt(0) !== 92) return;
				let t = this.rules.inline.escape.exec(e);
				if (t) return {
					type: "escape",
					raw: t[0],
					text: t[1]
				};
			}
			tag(e) {
				if (e.charCodeAt(0) !== 60) return;
				let t = this.rules.inline.tag.exec(e);
				if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
					type: "html",
					raw: t[0],
					inLink: this.lexer.state.inLink,
					inRawBlock: this.lexer.state.inRawBlock,
					block: !1,
					text: t[0]
				};
			}
			link(e) {
				if (this.lexer.state.linkParenPossible === !1) return;
				let t = e.charCodeAt(0);
				if (t !== 91 && t !== 33) return;
				let n = this.rules.inline.link.exec(e);
				if (n) {
					let r = n[0].charAt(0) === "!" ? 2 : 1;
					if (!this.options.pedantic && Ze(e, n[1], r, this.rules)) return;
					let s = n[2].trim();
					if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
						if (!this.rules.other.endAngleBracket.test(s)) return;
						let c = C(s.slice(0, -1), "\\");
						if ((s.length - c.length) % 2 === 0) return;
					} else {
						let c = Te(n[2], "()");
						if (c === -2) return;
						if (c > -1) {
							let d = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + c;
							n[2] = n[2].substring(0, c), n[0] = n[0].substring(0, d).trim(), n[3] = "";
						}
					}
					let o = C(n[0].slice(0, -1), "\\");
					if ((n[0].length - o.length) % 2 === 0) return;
					let i = n[2], a = "";
					if (this.options.pedantic) {
						let c = this.rules.other.pedanticHrefTitle.exec(i);
						c && (i = c[1], a = c[3]);
					} else a = n[3] ? n[3].slice(1, -1) : "";
					return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? i = i.slice(1) : i = i.slice(1, -1)), He(n, {
						href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
						title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
					}, n[0], this.lexer, this.rules);
				}
			}
			reflink(e, t) {
				let n = e.charCodeAt(0);
				if (n !== 91 && n !== 33) return;
				let r;
				if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
					let s = r[0].charAt(0) === "!" ? 2 : 1;
					if (!this.options.pedantic && Ze(e, r[1], s, this.rules)) return;
					let o = t[W(r[2] || r[1])];
					if (!o) {
						let i = r[0].charAt(0);
						return {
							type: "text",
							raw: i,
							text: i
						};
					}
					return He(r, o, r[0], this.lexer, this.rules);
				}
			}
			emStrong(e, t, n = "") {
				let r = this.rules.inline.emStrongLDelim.exec(e);
				if (!r || !r[1] && !r[2] && !r[3] && !r[4]) return;
				let s = r[0][0], o = n === s, i = t.length - e.length, a = i;
				for (; !this.options.pedantic && a > 0 && t[a - 1] === s;) a--;
				let c = [...t.slice(Math.max(0, a - 2), a)].at(-1) ?? "", u = c === "*" || c === "_" || !!this.rules.inline.punctuation.exec(c);
				a < i && (n = c);
				let d = a < i ? u : n === "*" || n === "_" || !!this.rules.inline.punctuation.exec(n);
				if (r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
				let h = r[1] || r[3] || "";
				if (!h || !n || d) {
					let p = [...r[0]].length - 1, k, m, b = p, f = 0, R = i - a + p, E = !this.options.pedantic && !!c.trim() && (!!h || s === "*" && !u);
					if (s !== "*" && s !== "_") return;
					let T = s === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd, U = oe(this, t, s), H = t.length - e.length + p;
					if (U < H) return;
					t = t.slice(-1 * e.length + p);
					let K = U - H;
					for (T.lastIndex = 0; (r = T.exec(t)) !== null && !(r.index > K);) {
						if (k = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !k) continue;
						if (m = [...k].length, r[3] || r[4]) {
							b += m;
							continue;
						} else if ((r[5] || r[6] || E) && R % 3 && !((R + m) % 3)) {
							if (o && (r[5] || r[6])) break;
							f += m;
							continue;
						}
						if (b -= m, b > 0) continue;
						m = Math.min(m, m + b + f);
						let re = [...r[0]][0].length, B = e.slice(0, p + r.index + re + m);
						if (Math.min(p, m) % 2) {
							let se = B.slice(1, -1);
							return {
								type: "em",
								raw: B,
								text: se,
								tokens: this.lexer.inlineTokens(se)
							};
						}
						let X = B.slice(2, -2);
						return {
							type: "strong",
							raw: B,
							text: X,
							tokens: this.lexer.inlineTokens(X)
						};
					}
				}
			}
			codespan(e) {
				if (e.charCodeAt(0) !== 96) return;
				let t = this.rules.inline.code.exec(e);
				if (t) {
					let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), s = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
					return r && s && (n = n.substring(1, n.length - 1)), {
						type: "codespan",
						raw: t[0],
						text: n
					};
				}
			}
			br(e) {
				let t = e.charCodeAt(0);
				if (t !== 32 && t !== 92 && t !== 10) return;
				let n = this.rules.inline.br.exec(e);
				if (n) return {
					type: "br",
					raw: n[0]
				};
			}
			del(e, t, n = "") {
				if (e.charCodeAt(0) !== 126) return;
				let r = this.rules.inline.delLDelim.exec(e);
				if (!r) return;
				if (!(r[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
					let o = [...r[0]].length - 1, i, a, c = o, u = this.rules.inline.delRDelim, d = ae(this, t), h = t.length - e.length + o;
					if (d < h) return;
					t = t.slice(-1 * e.length + o);
					let p = d - h;
					for (u.lastIndex = 0; (r = u.exec(t)) !== null && !(r.index > p);) {
						if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== o)) continue;
						if (r[3] || r[4]) {
							c += a;
							continue;
						}
						if (c -= a, c > 0) continue;
						a = Math.min(a, a + c);
						let k = [...r[0]][0].length, m = e.slice(0, o + r.index + k + a), b = m.slice(o, -o);
						return {
							type: "del",
							raw: m,
							text: b,
							tokens: this.lexer.inlineTokens(b)
						};
					}
				}
			}
			autolink(e) {
				if (e.charCodeAt(0) !== 60) return;
				let t = this.rules.inline.autolink.exec(e);
				if (t) {
					let n, r;
					return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), {
						type: "link",
						raw: t[0],
						text: n,
						href: r,
						autolink: !0,
						tokens: [{
							type: "text",
							raw: n,
							text: n
						}]
					};
				}
			}
			url(e) {
				let t;
				if (t = this.rules.inline.url.exec(e)) {
					let n, r;
					if (t[2] === "@") n = t[0], r = "mailto:" + n;
					else {
						let s;
						do
							s = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
						while (s !== t[0]);
						n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
					}
					return {
						type: "link",
						raw: t[0],
						text: n,
						href: r,
						autolink: !0,
						tokens: [{
							type: "text",
							raw: n,
							text: n
						}]
					};
				}
			}
			inlineText(e) {
				let t = this.rules.inline.text.exec(e);
				if (t) {
					let n = this.lexer.state.inRawBlock;
					return {
						type: "text",
						raw: t[0],
						text: n ? t[0] : De(t[0]),
						escaped: n
					};
				}
			}
		};
		w = class l {
			tokens;
			options;
			state;
			inlineQueue;
			tokenizer;
			constructor(e) {
				this.tokens = [], this.tokens.links = Object.create(null), this.options = e || S, this.options.tokenizer = this.options.tokenizer || new _(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
					inLink: !1,
					inRawBlock: !1,
					linkEmitted: !1,
					linkParenPossible: !0,
					top: !0
				};
				let t = {
					other: O,
					block: ee.normal,
					inline: F.normal
				};
				this.options.pedantic ? (t.block = ee.pedantic, t.inline = F.pedantic) : this.options.gfm && (t.block = ee.gfm, this.options.breaks ? t.inline = F.breaks : t.inline = F.gfm), this.tokenizer.rules = t;
			}
			static get rules() {
				return {
					block: ee,
					inline: F
				};
			}
			static lex(e, t) {
				return new l(t).lex(e);
			}
			static lexInline(e, t) {
				return new l(t).inlineTokens(e);
			}
			lex(e) {
				e = e.replace(O.carriageReturn, `
`), this.blockTokens(e, this.tokens);
				for (let t = 0; t < this.inlineQueue.length; t++) {
					let n = this.inlineQueue[t];
					this.state.inRawBlock = !1, this.inlineTokens(n.src, n.tokens);
				}
				return this.inlineQueue = [], this.tokens;
			}
			blockTokens(e, t = [], n = !1) {
				this.tokenizer.lexer = this;
				let r = this.state.lastToken;
				this.options.pedantic && (e = e.replace(O.tabCharGlobal, "    ").replace(O.spaceLine, ""));
				let s = 1 / 0, o, i = this.options.gfm && !this.options.pedantic && this.tokenizer.paragraph === _.prototype.paragraph;
				for (; e;) {
					if (e.length < s) s = e.length;
					else {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
					this.state.lastToken = t.at(-1);
					let a;
					if (this.options.extensions?.block?.some((u) => (a = u.call({ lexer: this }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), !0) : !1)) continue;
					if (a = this.tokenizer.space(e)) {
						e = e.substring(a.raw.length);
						let u = t.at(-1);
						a.raw.length === 1 && u !== void 0 ? u.raw += `
` : t.push(a);
						continue;
					}
					if (a = this.tokenizer.code(e)) {
						e = e.substring(a.raw.length);
						let u = t.at(-1);
						u?.type === "paragraph" || u?.type === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + a.raw, u.text += `
` + a.text, this.inlineQueue.at(-1).src = u.text) : t.push(a);
						continue;
					}
					if (a = this.tokenizer.fences(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					if (a = this.tokenizer.heading(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					if (a = this.tokenizer.hr(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					if (a = this.tokenizer.blockquote(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					if (a = this.tokenizer.list(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					if (a = this.tokenizer.html(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					if (a = this.tokenizer.def(e)) {
						e = e.substring(a.raw.length);
						let u = t.at(-1);
						u?.type === "paragraph" || u?.type === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + a.raw, u.text += `
` + a.raw, this.inlineQueue.at(-1).src = u.text) : (this.tokens.links[a.tag] || (this.tokens.links[a.tag] = {
							href: a.href,
							title: a.title
						}), t.push(a));
						continue;
					}
					if (a = this.tokenizer.table(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					if (a = this.tokenizer.lheading(e)) {
						e = e.substring(a.raw.length), t.push(a);
						continue;
					}
					let c = e;
					if (this.options.extensions?.startBlock) {
						let u = 1 / 0, d = e.slice(1), h;
						this.options.extensions.startBlock.forEach((p) => {
							h = p.call({ lexer: this }, d), typeof h == "number" && h >= 0 && (u = Math.min(u, h));
						}), u < 1 / 0 && u >= 0 && (c = e.substring(0, u + 1));
					}
					if (this.state.top && (a = this.tokenizer.paragraph(c))) {
						let u = t.at(-1);
						(n || u === o && i) && u?.type === "paragraph" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + a.raw, u.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text, o = u) : (t.push(a), o = a), n = c.length !== e.length, e = e.substring(a.raw.length);
						continue;
					}
					if (a = this.tokenizer.text(e)) {
						e = e.substring(a.raw.length);
						let u = t.at(-1);
						u?.type === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + a.raw, u.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : t.push(a);
						continue;
					}
					if (e) {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
				}
				return this.state.top = !0, this.state.lastToken = r, t;
			}
			inline(e, t = []) {
				return this.inlineQueue.push({
					src: e,
					tokens: t
				}), t;
			}
			linkInText(e) {
				if (!e.includes("[")) return !1;
				let t = this.tokenizer.rules.inline.link;
				for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return !0;
				for (let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
					let r = n[0], s = r.lastIndexOf("[");
					if (!(r.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, W(r.slice(s + 1, -1)))) && !(s > 1 && this.linkInText(r.slice(1, s - 1)))) return !0;
				}
				return !1;
			}
			inlineTokens(e, t = []) {
				this.tokenizer.lexer = this;
				let n = this.state.linkParenPossible;
				this.state.linkParenPossible = e.includes(")");
				try {
					return this.#t(e, t);
				} finally {
					this.state.linkParenPossible = n;
				}
			}
			#t(e, t) {
				let n = e.includes("*") || e.includes("_") || e.includes("~"), r = n || this.options.hooks?.emStrongMask || this.tokenizer.emStrong !== _.prototype.emStrong || this.tokenizer.del !== _.prototype.del ? this.#r(e) : e;
				if (!n) return this.#e(e, r, t);
				qe(this.tokenizer, r);
				try {
					return this.#e(e, r, t);
				} finally {
					ve(this.tokenizer);
				}
			}
			#e(e, t, n) {
				let r = !1, s = "", o = 1 / 0;
				for (; e;) {
					if (e.length < o) o = e.length;
					else {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
					r || (s = ""), r = !1;
					let i;
					if (this.options.extensions?.inline?.some((u) => (i = u.call({ lexer: this }, e, n)) ? (e = e.substring(i.raw.length), n.push(i), !0) : !1)) continue;
					if (i = this.tokenizer.escape(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.tag(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.link(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.reflink(e, this.tokens.links)) {
						e = e.substring(i.raw.length);
						let u = n.at(-1);
						i.type === "text" && u?.type === "text" ? (u.raw += i.raw, u.text += i.text) : n.push(i);
						continue;
					}
					let a = e[0];
					if (a === "*" || a === "_") {
						let u = t.length - e.length;
						if (oe(this.tokenizer, t, a) <= u) {
							let h = 1;
							for (; h < e.length && e.charCodeAt(h) === a.charCodeAt(0);) h++;
							let p = e.substring(0, h), k = n.at(-1);
							k?.type === "text" && !k.escaped ? (k.raw += p, k.text += p) : n.push({
								type: "text",
								raw: p,
								text: p,
								escaped: !1
							}), e = e.substring(h), s = a, r = !0;
							continue;
						}
					} else if (a === "~") {
						let u = t.length - e.length;
						if (ae(this.tokenizer, t) <= u) {
							let h = 1;
							for (; h < e.length && e.charCodeAt(h) === 126;) h++;
							let p = e.substring(0, h), k = n.at(-1);
							k?.type === "text" && !k.escaped ? (k.raw += p, k.text += p) : n.push({
								type: "text",
								raw: p,
								text: p,
								escaped: !1
							}), e = e.substring(h), s = a, r = !0;
							continue;
						}
					}
					if (i = this.tokenizer.emStrong(e, t, s)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.codespan(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.br(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.del(e, t, s)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (i = this.tokenizer.autolink(e)) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					if (!this.state.inLink && (i = this.tokenizer.url(e))) {
						e = e.substring(i.raw.length), n.push(i);
						continue;
					}
					let c = e;
					if (this.options.extensions?.startInline) {
						let u = 1 / 0, d = e.slice(1), h;
						this.options.extensions.startInline.forEach((p) => {
							h = p.call({ lexer: this }, d), typeof h == "number" && h >= 0 && (u = Math.min(u, h));
						}), u < 1 / 0 && u >= 0 && (c = e.substring(0, u + 1));
					}
					if (i = this.tokenizer.inlineText(c)) {
						e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (s = i.raw.slice(-1)), r = !0;
						let u = n.at(-1);
						u?.type === "text" ? (u.raw += i.raw, u.text += i.text) : n.push(i);
						continue;
					}
					if (e) {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
				}
				return n;
			}
			#n(e) {
				let { blockSkip: t, tag: n, autolink: r } = this.tokenizer.rules.inline, s = "", o = 0, i;
				for (t.lastIndex = 0; i = t.exec(e);) {
					let a = i.index + (i[2] ? i[2].length : 0), c = i.index + i[0].length;
					if (e.charAt(a) === "<") {
						let u = e.slice(a), d = n.exec(u) || r.exec(u);
						if (!d) {
							t.lastIndex = a + 1;
							continue;
						}
						c = a + d[0].length, t.lastIndex = c;
					}
					s += e.slice(o, a) + "[" + "a".repeat(c - a - 2) + "]", o = c;
				}
				return s + e.slice(o);
			}
			#r(e) {
				let t = e;
				if (this.tokens.links && e.includes("[")) {
					let n = this.tokenizer.rules.inline.reflinkSearch, r = (s) => {
						let o = s.lastIndexOf("[");
						if (!Object.hasOwn(this.tokens.links, W(s.slice(o + 1, -1)))) return s;
						if (o > 1 && s.charAt(0) !== "!") {
							let i = s.slice(1, o - 1);
							if (this.linkInText(i)) return "[" + i.replace(n, r) + "][" + "a".repeat(s.length - o - 2) + "]";
						}
						return "[" + "a".repeat(s.length - 2) + "]";
					};
					t = t.replace(n, r);
				}
				return t = t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode, (n, r, s) => s ? "+".repeat(n.length) : r ? r + n.slice(r.length, -r.length).replace(/`/g, "+") + r : n), t = this.#n(t), t = this.options.hooks?.emStrongMask?.call({ lexer: this }, t) ?? t, t;
			}
			infiniteLoopError(e) {
				let t = "Infinite loop on byte: " + e;
				if (this.options.silent) console.error(t);
				else throw new Error(t);
			}
		};
		I = class {
			options;
			parser;
			constructor(e) {
				this.options = e || S;
			}
			space(e) {
				return "";
			}
			code({ text: e, lang: t, escaped: n }) {
				let r = (t || "").match(O.notSpaceStart)?.[0], s = e ? e.replace(O.endingNewline, "") + `
` : "";
				return r ? "<pre><code class=\"language-" + y(r) + "\">" + (n ? s : y(s, !0)) + `</code></pre>
` : "<pre><code>" + (n ? s : y(s, !0)) + `</code></pre>
`;
			}
			blockquote({ tokens: e }) {
				return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
			}
			html({ text: e }) {
				return e;
			}
			def(e) {
				return "";
			}
			heading({ tokens: e, depth: t }) {
				return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
			}
			hr(e) {
				return `<hr>
`;
			}
			list(e) {
				let t = e.ordered, n = e.start, r = "";
				for (let i = 0; i < e.items.length; i++) {
					let a = e.items[i];
					r += this.listitem(a);
				}
				let s = t ? "ol" : "ul", o = t && n !== 1 ? " start=\"" + n + "\"" : "";
				return "<" + s + o + `>
` + r + "</" + s + `>
`;
			}
			listitem(e) {
				return `<li>${this.parser.parse(e.tokens)}</li>
`;
			}
			checkbox({ checked: e }) {
				return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
			}
			paragraph({ tokens: e }) {
				return `<p>${this.parser.parseInline(e)}</p>
`;
			}
			table(e) {
				let t = "", n = "";
				for (let s = 0; s < e.header.length; s++) n += this.tablecell(e.header[s]);
				t += this.tablerow({ text: n });
				let r = "";
				for (let s = 0; s < e.rows.length; s++) {
					let o = e.rows[s];
					n = "";
					for (let i = 0; i < o.length; i++) n += this.tablecell(o[i]);
					r += this.tablerow({ text: n });
				}
				return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
			}
			tablerow({ text: e }) {
				return `<tr>
${e}</tr>
`;
			}
			tablecell(e) {
				let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
				return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
			}
			strong({ tokens: e }) {
				return `<strong>${this.parser.parseInline(e)}</strong>`;
			}
			em({ tokens: e }) {
				return `<em>${this.parser.parseInline(e)}</em>`;
			}
			codespan({ text: e }) {
				return `<code>${y(e, !0)}</code>`;
			}
			br(e) {
				return "<br>";
			}
			del({ tokens: e }) {
				return `<del>${this.parser.parseInline(e)}</del>`;
			}
			link({ href: e, title: t, text: n, tokens: r, autolink: s }) {
				let o = s ? y(n, !0) : this.parser.parseInline(r), i = xe(e);
				if (i === null) return o;
				e = y(i, s);
				let a = "<a href=\"" + e + "\"";
				return t && (a += " title=\"" + y(t) + "\""), a += ">" + o + "</a>", a;
			}
			image({ href: e, title: t, text: n, tokens: r }) {
				r && (n = this.parser.parseInline(r, this.parser.textRenderer));
				let s = xe(e);
				if (s === null) return y(n);
				e = s;
				let o = `<img src="${y(e)}" alt="${y(n)}"`;
				return t && (o += ` title="${y(t)}"`), o += ">", o;
			}
			text(e) {
				return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : y(e.text);
			}
		};
		z = class {
			parser;
			strong({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			em({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			codespan({ text: e }) {
				return e;
			}
			del({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			html({ text: e }) {
				return e;
			}
			text({ text: e }) {
				return e;
			}
			link({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			image({ text: e, tokens: t }) {
				return t ? this.parser.parseInline(t, this) : e;
			}
			br() {
				return `
`;
			}
			checkbox({ raw: e }) {
				return e;
			}
		};
		P = class l {
			options;
			renderer;
			textRenderer;
			constructor(e) {
				this.options = e || S, this.options.renderer = this.options.renderer || new I(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new z(), this.textRenderer.parser = this;
			}
			static parse(e, t) {
				return new l(t).parse(e);
			}
			static parseInline(e, t) {
				return new l(t).parseInline(e);
			}
			parse(e) {
				this.renderer.parser = this;
				let t = "";
				for (let n = 0; n < e.length; n++) {
					let r = e[n];
					if (this.options.extensions?.renderers?.[r.type]) {
						let o = r, i = this.options.extensions.renderers[o.type].call({ parser: this }, o);
						if (i !== !1 || ![
							"space",
							"hr",
							"heading",
							"code",
							"table",
							"blockquote",
							"list",
							"checkbox",
							"html",
							"def",
							"paragraph",
							"text"
						].includes(o.type)) {
							t += i === !1 ? "" : i ?? "";
							continue;
						}
					}
					let s = r;
					switch (s.type) {
						case "space":
							t += this.renderer.space(s);
							break;
						case "hr":
							t += this.renderer.hr(s);
							break;
						case "heading":
							t += this.renderer.heading(s);
							break;
						case "code":
							t += this.renderer.code(s);
							break;
						case "table":
							t += this.renderer.table(s);
							break;
						case "blockquote":
							t += this.renderer.blockquote(s);
							break;
						case "list":
							t += this.renderer.list(s);
							break;
						case "checkbox":
							t += this.renderer.checkbox(s);
							break;
						case "html":
							t += this.renderer.html(s);
							break;
						case "def":
							t += this.renderer.def(s);
							break;
						case "paragraph":
							t += this.renderer.paragraph(s);
							break;
						case "text":
							t += this.renderer.text(s);
							break;
						default: {
							let o = "Token with \"" + s.type + "\" type was not found.";
							if (this.options.silent) return console.error(o), "";
							throw new Error(o);
						}
					}
				}
				return t;
			}
			parseInline(e, t = this.renderer) {
				this.renderer.parser = this;
				let n = "";
				for (let r = 0; r < e.length; r++) {
					let s = e[r];
					if (this.options.extensions?.renderers?.[s.type]) {
						let i = this.options.extensions.renderers[s.type].call({ parser: this }, s);
						if (i !== !1 || ![
							"escape",
							"html",
							"link",
							"image",
							"checkbox",
							"strong",
							"em",
							"codespan",
							"br",
							"del",
							"text"
						].includes(s.type)) {
							n += i === !1 ? "" : i ?? "";
							continue;
						}
					}
					let o = s;
					switch (o.type) {
						case "escape":
							n += t.text(o);
							break;
						case "html":
							n += t.html(o);
							break;
						case "link":
							n += t.link(o);
							break;
						case "image":
							n += t.image(o);
							break;
						case "checkbox":
							n += t.checkbox(o);
							break;
						case "strong":
							n += t.strong(o);
							break;
						case "em":
							n += t.em(o);
							break;
						case "codespan":
							n += t.codespan(o);
							break;
						case "br":
							n += t.br(o);
							break;
						case "del":
							n += t.del(o);
							break;
						case "text":
							n += t.text(o);
							break;
						default: {
							let i = "Token with \"" + o.type + "\" type was not found.";
							if (this.options.silent) return console.error(i), "";
							throw new Error(i);
						}
					}
				}
				return n;
			}
		};
		A = class {
			options;
			block;
			constructor(e) {
				this.options = e || S;
			}
			static passThroughHooks = /* @__PURE__ */ new Set([
				"preprocess",
				"postprocess",
				"processAllTokens",
				"emStrongMask"
			]);
			static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
				"preprocess",
				"postprocess",
				"processAllTokens"
			]);
			preprocess(e) {
				return e;
			}
			postprocess(e) {
				return e;
			}
			processAllTokens(e) {
				return e;
			}
			emStrongMask(e) {
				return e;
			}
			provideLexer(e = this.block) {
				return e ? w.lex : w.lexInline;
			}
			provideParser(e = this.block) {
				return e ? P.parse : P.parseInline;
			}
		};
		ne = class {
			defaults = G();
			options = this.setOptions;
			parse = this.parseMarkdown(!0);
			parseInline = this.parseMarkdown(!1);
			Parser = P;
			Renderer = I;
			TextRenderer = z;
			Lexer = w;
			Tokenizer = _;
			Hooks = A;
			constructor(...e) {
				this.use(...e);
			}
			walkTokens(e, t) {
				let n = [];
				for (let r of e) switch (M(n, t.call(this, r)), r.type) {
					case "table": {
						let s = r;
						for (let o of s.header) M(n, this.walkTokens(o.tokens, t));
						for (let o of s.rows) for (let i of o) M(n, this.walkTokens(i.tokens, t));
						break;
					}
					case "list": {
						let s = r;
						M(n, this.walkTokens(s.items, t));
						break;
					}
					default: {
						let s = r;
						this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
							let i = s[o].flat(1 / 0);
							M(n, this.walkTokens(i, t));
						}) : s.tokens && M(n, this.walkTokens(s.tokens, t));
					}
				}
				return n;
			}
			use(...e) {
				let t = this.defaults.extensions || {
					renderers: Object.create(null),
					childTokens: Object.create(null)
				};
				return e.forEach((n) => {
					let r = { ...n };
					if (r.async = this.defaults.async || r.async || !1, n.extensions && (n.extensions.forEach((s) => {
						if (!s.name) throw new Error("extension name required");
						if ("renderer" in s) {
							let o = t.renderers[s.name];
							o ? t.renderers[s.name] = function(...i) {
								let a = s.renderer.apply(this, i);
								return a === !1 && (a = o.apply(this, i)), a;
							} : t.renderers[s.name] = s.renderer;
						}
						if ("tokenizer" in s) {
							if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
							let o = t[s.level];
							o ? o.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
						}
						"childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
					}), r.extensions = t), n.renderer) {
						let s = this.defaults.renderer || new I(this.defaults);
						for (let o in n.renderer) {
							if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
							if (["options", "parser"].includes(o)) continue;
							let i = o, a = n.renderer[i], c = s[i];
							s[i] = (...u) => {
								let d = a.apply(s, u);
								return d === !1 && (d = c.apply(s, u)), d === !1 ? "" : d ?? "";
							};
						}
						r.renderer = s;
					}
					if (n.tokenizer) {
						let s = this.defaults.tokenizer || new _(this.defaults);
						for (let o in n.tokenizer) {
							if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
							if ([
								"options",
								"rules",
								"lexer"
							].includes(o)) continue;
							let i = o, a = n.tokenizer[i], c = s[i];
							s[i] = (...u) => {
								let d = a.apply(s, u);
								return d === !1 && (d = c.apply(s, u)), d;
							};
						}
						r.tokenizer = s;
					}
					if (n.hooks) {
						let s = this.defaults.hooks || new A();
						for (let o in n.hooks) {
							if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
							if (["options", "block"].includes(o)) continue;
							let i = o, a = n.hooks[i], c = s[i];
							A.passThroughHooks.has(o) ? s[i] = (u) => {
								if (s.options.async && A.passThroughHooksRespectAsync.has(o)) return (async () => {
									let h = await a.call(s, u);
									return c.call(s, h);
								})();
								let d = a.call(s, u);
								return c.call(s, d);
							} : s[i] = (...u) => {
								if (s.options.async) return (async () => {
									let h = await a.apply(s, u);
									return h === !1 && (h = await c.apply(s, u)), h;
								})();
								let d = a.apply(s, u);
								return d === !1 && (d = c.apply(s, u)), d;
							};
						}
						r.hooks = s;
					}
					if (n.walkTokens) {
						let s = this.defaults.walkTokens, o = n.walkTokens;
						r.walkTokens = function(i) {
							let a = [];
							return M(a, o.call(this, i)), s && M(a, s.call(this, i)), a;
						};
					}
					this.defaults = {
						...this.defaults,
						...r
					};
				}), this;
			}
			setOptions(e) {
				return this.defaults = {
					...this.defaults,
					...e
				}, this;
			}
			lexer(e, t) {
				return w.lex(e, t ?? this.defaults);
			}
			parser(e, t) {
				return P.parse(e, t ?? this.defaults);
			}
			parseMarkdown(e) {
				return (n, r) => {
					let s = { ...r }, o = {
						...this.defaults,
						...s
					}, i = this.onError(!!o.silent, !!o.async);
					if (this.defaults.async === !0 && s.async === !1) return i(/* @__PURE__ */ new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
					if (typeof n > "u" || n === null) return i(/* @__PURE__ */ new Error("marked(): input parameter is undefined or null"));
					if (typeof n != "string") return i(/* @__PURE__ */ new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
					if (o.hooks && (o.hooks.options = o, o.hooks.block = e), o.async) return (async () => {
						let a = o.hooks ? await o.hooks.preprocess(n) : n, u = await (o.hooks ? await o.hooks.provideLexer(e) : e ? w.lex : w.lexInline)(a, o), d = o.hooks ? await o.hooks.processAllTokens(u) : u;
						o.walkTokens && await Promise.all(this.walkTokens(d, o.walkTokens));
						let p = await (o.hooks ? await o.hooks.provideParser(e) : e ? P.parse : P.parseInline)(d, o);
						return o.hooks ? await o.hooks.postprocess(p) : p;
					})().catch(i);
					try {
						o.hooks && (n = o.hooks.preprocess(n));
						let c = (o.hooks ? o.hooks.provideLexer(e) : e ? w.lex : w.lexInline)(n, o);
						o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
						let d = (o.hooks ? o.hooks.provideParser(e) : e ? P.parse : P.parseInline)(c, o);
						return o.hooks && (d = o.hooks.postprocess(d)), d;
					} catch (a) {
						return i(a);
					}
				};
			}
			onError(e, t) {
				return (n) => {
					if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
						let r = "<p>An error occurred:</p><pre>" + y(n.message + "", !0) + "</pre>";
						return t ? Promise.resolve(r) : r;
					}
					if (t) return Promise.reject(n);
					throw n;
				};
			}
		};
		v = new ne();
		x.options = x.setOptions = function(l) {
			return v.setOptions(l), x.defaults = v.defaults, ue(x.defaults), x;
		};
		x.getDefaults = G;
		x.defaults = S;
		x.use = jt;
		x.walkTokens = function(l, e) {
			return v.walkTokens(l, e);
		};
		x.parseInline = v.parseInline;
		x.Parser = P;
		x.parser = P.parse;
		x.Renderer = I;
		x.TextRenderer = z;
		x.Lexer = w;
		x.lexer = w.lex;
		x.Tokenizer = _;
		x.Hooks = A;
		x.parse = x;
		x.options;
		x.setOptions;
		x.walkTokens;
		x.parseInline;
		Dn = x;
		P.parse;
		w.lex;
	})))();
}
//#endregion
//#region node_modules/@vaadin/markdown/src/markdown-helpers.js
var markdown_helpers_exports = /* @__PURE__ */ __exportAll({ renderMarkdownToElement: () => renderMarkdownToElement });
/**
* @license
* Copyright (c) 2000 - 2026 Vaadin Ltd.
* This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
* Synchronizes the attributes of a target element with those of a source element.
*/
function synchronizeAttributes(targetElement, sourceElement) {
	for (const { name } of targetElement.attributes) if (!sourceElement.hasAttribute(name)) targetElement.removeAttribute(name);
	for (const { name, value } of sourceElement.attributes) targetElement.setAttribute(name, value);
}
/**
* Synchronizes the child nodes of a target node with those of a source node.
* It handles the addition, removal, and updating of child nodes.
*/
function synchronizeNodes(targetNode, sourceNode) {
	const sourceChildren = Array.from(sourceNode.childNodes);
	const targetChildren = Array.from(targetNode.childNodes);
	const maxChildren = Math.max(sourceChildren.length, targetChildren.length);
	for (let i = 0; i < maxChildren; i++) {
		const sourceChild = sourceChildren[i];
		const targetChild = targetChildren[i];
		if (sourceChild && !targetChild) {
			targetNode.appendChild(sourceChild.cloneNode(true));
			continue;
		}
		if (!sourceChild && targetChild) {
			targetNode.removeChild(targetChild);
			continue;
		}
		if (sourceChild && targetChild) {
			if (sourceChild.nodeType !== targetChild.nodeType || sourceChild.nodeName !== targetChild.nodeName) {
				targetNode.replaceChild(sourceChild.cloneNode(true), targetChild);
				continue;
			}
			if (sourceChild.nodeType === Node.ELEMENT_NODE) {
				synchronizeAttributes(targetChild, sourceChild);
				synchronizeNodes(targetChild, sourceChild);
			} else if (sourceChild.nodeType === Node.TEXT_NODE) {
				if (targetChild.nodeValue !== sourceChild.nodeValue) targetChild.nodeValue = sourceChild.nodeValue;
			}
		}
	}
}
/**
* Updates the content of a target element with the given Markdown parsed as HTML.
*
* When `lineBreaks` is enabled, single line breaks ("soft breaks") within a
* paragraph are converted into `<br>` elements, matching the behavior of
* chat/message-style Markdown. By default they are ignored, following the
* original Markdown specification.
*/
function renderMarkdownToElement(element, markdown, { lineBreaks = false } = {}) {
	const template = document.createElement("template");
	template.innerHTML = purify_default.sanitize(Dn(markdown || "", { breaks: lineBreaks }), { CUSTOM_ELEMENT_HANDLING: { tagNameCheck: (_tagName) => true } });
	synchronizeNodes(element, template.content);
}
function init_markdown_helpers() {
	return (init_markdown_helpers = __esmMin((() => {
		init_purify_es();
		init_marked_esm();
	})))();
}
//#endregion
export { markdown_helpers_exports as n, renderMarkdownToElement as r, init_markdown_helpers as t };
