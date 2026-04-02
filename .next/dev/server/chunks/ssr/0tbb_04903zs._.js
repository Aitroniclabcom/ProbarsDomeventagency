module.exports = [
"[project]/Documents/GitHub/Probars/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "ErrorBoundaryContext",
    ()=>ErrorBoundaryContext,
    "useErrorBoundary",
    ()=>useErrorBoundary,
    "withErrorBoundary",
    ()=>withErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const ErrorBoundaryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const initialState = {
    didCatch: false,
    error: null
};
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
        this.state = initialState;
    }
    static getDerivedStateFromError(error) {
        return {
            didCatch: true,
            error
        };
    }
    resetErrorBoundary() {
        const { error } = this.state;
        if (error !== null) {
            var _this$props$onReset, _this$props;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            (_this$props$onReset = (_this$props = this.props).onReset) === null || _this$props$onReset === void 0 ? void 0 : _this$props$onReset.call(_this$props, {
                args,
                reason: "imperative-api"
            });
            this.setState(initialState);
        }
    }
    componentDidCatch(error, info) {
        var _this$props$onError, _this$props2;
        (_this$props$onError = (_this$props2 = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props2, error, info);
    }
    componentDidUpdate(prevProps, prevState) {
        const { didCatch } = this.state;
        const { resetKeys } = this.props;
        // There's an edge case where if the thing that triggered the error happens to *also* be in the resetKeys array,
        // we'd end up resetting the error boundary immediately.
        // This would likely trigger a second error to be thrown.
        // So we make sure that we don't check the resetKeys on the first call of cDU after the error is set.
        if (didCatch && prevState.error !== null && hasArrayChanged(prevProps.resetKeys, resetKeys)) {
            var _this$props$onReset2, _this$props3;
            (_this$props$onReset2 = (_this$props3 = this.props).onReset) === null || _this$props$onReset2 === void 0 ? void 0 : _this$props$onReset2.call(_this$props3, {
                next: resetKeys,
                prev: prevProps.resetKeys,
                reason: "keys"
            });
            this.setState(initialState);
        }
    }
    render() {
        const { children, fallbackRender, FallbackComponent, fallback } = this.props;
        const { didCatch, error } = this.state;
        let childToRender = children;
        if (didCatch) {
            const props = {
                error,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if (typeof fallbackRender === "function") {
                childToRender = fallbackRender(props);
            } else if (FallbackComponent) {
                childToRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(FallbackComponent, props);
            } else if (fallback !== undefined) {
                childToRender = fallback;
            } else {
                {
                    console.error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
                }
                throw error;
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(ErrorBoundaryContext.Provider, {
            value: {
                didCatch,
                error,
                resetErrorBoundary: this.resetErrorBoundary
            }
        }, childToRender);
    }
}
function hasArrayChanged() {
    let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return a.length !== b.length || a.some((item, index)=>!Object.is(item, b[index]));
}
function assertErrorBoundaryContext(value) {
    if (value == null || typeof value.didCatch !== "boolean" || typeof value.resetErrorBoundary !== "function") {
        throw new Error("ErrorBoundaryContext not found");
    }
}
function useErrorBoundary() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ErrorBoundaryContext);
    assertErrorBoundaryContext(context);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        error: null,
        hasError: false
    });
    const memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            resetBoundary: ()=>{
                context.resetErrorBoundary();
                setState({
                    error: null,
                    hasError: false
                });
            },
            showBoundary: (error)=>setState({
                    error,
                    hasError: true
                })
        }), [
        context.resetErrorBoundary
    ]);
    if (state.hasError) {
        throw state.error;
    }
    return memoized;
}
function withErrorBoundary(component, errorBoundaryProps) {
    const Wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(ErrorBoundary, errorBoundaryProps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, {
            ...props,
            ref
        })));
    // Format for display in DevTools
    const name = component.displayName || component.name || "Unknown";
    Wrapped.displayName = "withErrorBoundary(".concat(name, ")");
    return Wrapped;
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposer.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LexicalComposer",
    ()=>LexicalComposer
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const HISTORY_MERGE_OPTIONS = {
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HISTORY_MERGE_TAG"]
};
function LexicalComposer({ initialConfig, children }) {
    const composerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const { theme, namespace, nodes, onError, editorState: initialEditorState, html } = initialConfig;
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLexicalComposerContext"])(null, theme);
        const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEditor"])({
            editable: initialConfig.editable,
            html,
            namespace,
            nodes,
            onError: (error)=>onError(error, editor),
            theme
        });
        initializeEditor(editor, initialEditorState);
        return [
            editor,
            context
        ];
    }, // We only do this for init
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    useLayoutEffectImpl(()=>{
        const isEditable = initialConfig.editable;
        const [editor] = composerContext;
        editor.setEditable(isEditable !== undefined ? isEditable : true);
    // We only do this for init
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LexicalComposerContext"].Provider, {
        value: composerContext,
        children: children
    });
}
function initializeEditor(editor, initialEditorState) {
    if (initialEditorState === null) {
        return;
    } else if (initialEditorState === undefined) {
        editor.update(()=>{
            const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getRoot"])();
            if (root.isEmpty()) {
                const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
                root.append(paragraph);
                const activeElement = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])() !== null || activeElement !== null && activeElement === editor.getRootElement()) {
                    paragraph.select();
                }
            }
        }, HISTORY_MERGE_OPTIONS);
    } else if (initialEditorState !== null) {
        switch(typeof initialEditorState){
            case 'string':
                {
                    const parsedEditorState = editor.parseEditorState(initialEditorState);
                    editor.setEditorState(parsedEditorState, HISTORY_MERGE_OPTIONS);
                    break;
                }
            case 'object':
                {
                    editor.setEditorState(initialEditorState, HISTORY_MERGE_OPTIONS);
                    break;
                }
            case 'function':
                {
                    editor.update(()=>{
                        const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getRoot"])();
                        if (root.isEmpty()) {
                            initialEditorState(editor);
                        }
                    }, HISTORY_MERGE_OPTIONS);
                    break;
                }
        }
    }
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/node_modules/react-error-boundary/dist/react-error-boundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>m,
    "ErrorBoundaryContext",
    ()=>h,
    "getErrorMessage",
    ()=>S,
    "useErrorBoundary",
    ()=>k,
    "withErrorBoundary",
    ()=>w
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null), c = {
    didCatch: !1,
    error: null
};
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    constructor(e){
        super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = c;
    }
    static getDerivedStateFromError(e) {
        return {
            didCatch: !0,
            error: e
        };
    }
    resetErrorBoundary(...e) {
        const { error: t } = this.state;
        t !== null && (this.props.onReset?.({
            args: e,
            reason: "imperative-api"
        }), this.setState(c));
    }
    componentDidCatch(e, t) {
        this.props.onError?.(e, t);
    }
    componentDidUpdate(e, t) {
        const { didCatch: o } = this.state, { resetKeys: s } = this.props;
        o && t.error !== null && C(e.resetKeys, s) && (this.props.onReset?.({
            next: s,
            prev: e.resetKeys,
            reason: "keys"
        }), this.setState(c));
    }
    render() {
        const { children: e, fallbackRender: t, FallbackComponent: o, fallback: s } = this.props, { didCatch: n, error: a } = this.state;
        let i = e;
        if (n) {
            const u = {
                error: a,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if (typeof t == "function") i = t(u);
            else if (o) i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(o, u);
            else if (s !== void 0) i = s;
            else throw a;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(h.Provider, {
            value: {
                didCatch: n,
                error: a,
                resetErrorBoundary: this.resetErrorBoundary
            }
        }, i);
    }
}
function C(r = [], e = []) {
    return r.length !== e.length || r.some((t, o)=>!Object.is(t, e[o]));
}
function g(r) {
    return r !== null && typeof r == "object" && "didCatch" in r && typeof r.didCatch == "boolean" && "error" in r && "resetErrorBoundary" in r && typeof r.resetErrorBoundary == "function";
}
function x(r) {
    if (!g(r)) throw new Error("ErrorBoundaryContext not found");
}
function k() {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(h);
    x(r);
    const { error: e, resetErrorBoundary: t } = r, [o, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        error: null,
        hasError: !1
    }), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            error: e,
            resetBoundary: ()=>{
                t(), s({
                    error: null,
                    hasError: !1
                });
            },
            showBoundary: (a)=>s({
                    error: a,
                    hasError: !0
                })
        }), [
        e,
        t
    ]);
    if (o.hasError) throw o.error;
    return n;
}
function S(r) {
    switch(typeof r){
        case "object":
            {
                if (r !== null && "message" in r && typeof r.message == "string") return r.message;
                break;
            }
        case "string":
            return r;
    }
}
function w(r, e) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((s, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(m, e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(r, {
            ...s,
            ref: n
        }))), o = r.displayName || r.name || "Unknown";
    return t.displayName = `withErrorBoundary(${o})`, t;
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalErrorBoundary.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LexicalErrorBoundary",
    ()=>LexicalErrorBoundary
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/node_modules/react-error-boundary/dist/react-error-boundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function LexicalErrorBoundary({ children, onError }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: {
                border: '1px solid #f00',
                color: '#f00',
                padding: '8px'
            },
            children: "An error was thrown."
        }),
        onError: onError,
        children: children
    });
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/history/LexicalHistory.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistoryExtension",
    ()=>HistoryExtension,
    "SharedHistoryExtension",
    ()=>SharedHistoryExtension,
    "createEmptyHistoryState",
    ()=>createEmptyHistoryState,
    "registerHistory",
    ()=>registerHistory
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/extension/LexicalExtension.dev.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const HISTORY_MERGE = 0;
const HISTORY_PUSH = 1;
const DISCARD_HISTORY_CANDIDATE = 2;
const OTHER = 0;
const COMPOSING_CHARACTER = 1;
const INSERT_CHARACTER_AFTER_SELECTION = 2;
const DELETE_CHARACTER_BEFORE_SELECTION = 3;
const DELETE_CHARACTER_AFTER_SELECTION = 4;
function getDirtyNodes(editorState, dirtyLeaves, dirtyElements) {
    const nodeMap = editorState._nodeMap;
    const nodes = [];
    for (const dirtyLeafKey of dirtyLeaves){
        const dirtyLeaf = nodeMap.get(dirtyLeafKey);
        if (dirtyLeaf !== undefined) {
            nodes.push(dirtyLeaf);
        }
    }
    for (const [dirtyElementKey, intentionallyMarkedAsDirty] of dirtyElements){
        if (!intentionallyMarkedAsDirty) {
            continue;
        }
        const dirtyElement = nodeMap.get(dirtyElementKey);
        if (dirtyElement !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRootNode"])(dirtyElement)) {
            nodes.push(dirtyElement);
        }
    }
    return nodes;
}
function getChangeType(prevEditorState, nextEditorState, dirtyLeavesSet, dirtyElementsSet, isComposing) {
    if (prevEditorState === null || dirtyLeavesSet.size === 0 && dirtyElementsSet.size === 0 && !isComposing) {
        return OTHER;
    }
    const nextSelection = nextEditorState._selection;
    const prevSelection = prevEditorState._selection;
    if (isComposing) {
        return COMPOSING_CHARACTER;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRangeSelection"])(nextSelection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) || !prevSelection.isCollapsed() || !nextSelection.isCollapsed()) {
        return OTHER;
    }
    const dirtyNodes = getDirtyNodes(nextEditorState, dirtyLeavesSet, dirtyElementsSet);
    if (dirtyNodes.length === 0) {
        return OTHER;
    }
    // Catching the case when inserting new text node into an element (e.g. first char in paragraph/list),
    // or after existing node.
    if (dirtyNodes.length > 1) {
        const nextNodeMap = nextEditorState._nodeMap;
        const nextAnchorNode = nextNodeMap.get(nextSelection.anchor.key);
        const prevAnchorNode = nextNodeMap.get(prevSelection.anchor.key);
        if (nextAnchorNode && prevAnchorNode && !prevEditorState._nodeMap.has(nextAnchorNode.__key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(nextAnchorNode) && nextAnchorNode.__text.length === 1 && nextSelection.anchor.offset === 1) {
            return INSERT_CHARACTER_AFTER_SELECTION;
        }
        return OTHER;
    }
    const nextDirtyNode = dirtyNodes[0];
    const prevDirtyNode = prevEditorState._nodeMap.get(nextDirtyNode.__key);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(prevDirtyNode) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(nextDirtyNode) || prevDirtyNode.__mode !== nextDirtyNode.__mode) {
        return OTHER;
    }
    const prevText = prevDirtyNode.__text;
    const nextText = nextDirtyNode.__text;
    if (prevText === nextText) {
        return OTHER;
    }
    const nextAnchor = nextSelection.anchor;
    const prevAnchor = prevSelection.anchor;
    if (nextAnchor.key !== prevAnchor.key || nextAnchor.type !== 'text') {
        return OTHER;
    }
    const nextAnchorOffset = nextAnchor.offset;
    const prevAnchorOffset = prevAnchor.offset;
    const textDiff = nextText.length - prevText.length;
    if (textDiff === 1 && prevAnchorOffset === nextAnchorOffset - 1) {
        return INSERT_CHARACTER_AFTER_SELECTION;
    }
    if (textDiff === -1 && prevAnchorOffset === nextAnchorOffset + 1) {
        return DELETE_CHARACTER_BEFORE_SELECTION;
    }
    if (textDiff === -1 && prevAnchorOffset === nextAnchorOffset) {
        return DELETE_CHARACTER_AFTER_SELECTION;
    }
    return OTHER;
}
function isTextNodeUnchanged(key, prevEditorState, nextEditorState) {
    const prevNode = prevEditorState._nodeMap.get(key);
    const nextNode = nextEditorState._nodeMap.get(key);
    const prevSelection = prevEditorState._selection;
    const nextSelection = nextEditorState._selection;
    const isDeletingLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRangeSelection"])(nextSelection) && prevSelection.anchor.type === 'element' && prevSelection.focus.type === 'element' && nextSelection.anchor.type === 'text' && nextSelection.focus.type === 'text';
    if (!isDeletingLine && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(prevNode) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(nextNode) && prevNode.__parent === nextNode.__parent) {
        // This has the assumption that object key order won't change if the
        // content did not change, which should normally be safe given
        // the manner in which nodes and exportJSON are typically implemented.
        return JSON.stringify(prevEditorState.read(()=>prevNode.exportJSON())) === JSON.stringify(nextEditorState.read(()=>nextNode.exportJSON()));
    }
    return false;
}
function createMergeActionGetter(editor, delayOrStore) {
    let prevChangeTime = Date.now();
    let prevChangeType = OTHER;
    let compositionStartTime = Date.now();
    let compositionStartChangeType = OTHER;
    let compositionStartState = null;
    return (prevEditorState, nextEditorState, currentHistoryEntry, dirtyLeaves, dirtyElements, tags)=>{
        const changeTime = Date.now();
        if (tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPOSITION_START_TAG"])) {
            compositionStartTime = prevChangeTime;
            compositionStartChangeType = prevChangeType;
            compositionStartState = prevEditorState;
        }
        // If applying changes from history stack there's no need
        // to run history logic again, as history entries already calculated
        if (tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HISTORIC_TAG"])) {
            prevChangeType = OTHER;
            prevChangeTime = changeTime;
            return DISCARD_HISTORY_CANDIDATE;
        }
        const isCompositionEnd = tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPOSITION_END_TAG"]);
        if (isCompositionEnd && compositionStartState) {
            prevChangeTime = compositionStartTime;
            prevChangeType = compositionStartChangeType;
            prevEditorState = compositionStartState;
        }
        const changeType = getChangeType(prevEditorState, nextEditorState, dirtyLeaves, dirtyElements, editor.isComposing());
        const mergeAction = (()=>{
            const isSameEditor = currentHistoryEntry === null || currentHistoryEntry.editor === editor;
            const shouldPushHistory = tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HISTORY_PUSH_TAG"]);
            const shouldMergeHistory = !shouldPushHistory && isSameEditor && tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HISTORY_MERGE_TAG"]);
            if (shouldMergeHistory) {
                return HISTORY_MERGE;
            }
            if (changeType === COMPOSING_CHARACTER) {
                return DISCARD_HISTORY_CANDIDATE;
            }
            if (prevEditorState === null) {
                return HISTORY_PUSH;
            }
            const selection = nextEditorState._selection;
            const hasDirtyNodes = dirtyLeaves.size > 0 || dirtyElements.size > 0;
            if (!hasDirtyNodes) {
                if (selection !== null) {
                    return HISTORY_MERGE;
                }
                return DISCARD_HISTORY_CANDIDATE;
            }
            const delay = typeof delayOrStore === 'number' ? delayOrStore : delayOrStore.peek();
            if (shouldPushHistory === false && changeType !== OTHER && changeType === prevChangeType && changeTime < prevChangeTime + delay && isSameEditor) {
                return HISTORY_MERGE;
            }
            // A single node might have been marked as dirty, but not have changed
            // due to some node transform reverting the change.
            if (dirtyLeaves.size === 1) {
                const dirtyLeafKey = Array.from(dirtyLeaves)[0];
                if (isTextNodeUnchanged(dirtyLeafKey, prevEditorState, nextEditorState)) {
                    return HISTORY_MERGE;
                }
            }
            return HISTORY_PUSH;
        })();
        prevChangeTime = changeTime;
        prevChangeType = changeType;
        return mergeAction;
    };
}
function redo(editor, historyState) {
    const redoStack = historyState.redoStack;
    const undoStack = historyState.undoStack;
    if (redoStack.length !== 0) {
        const current = historyState.current;
        if (current !== null) {
            undoStack.push(current);
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], true);
        }
        const historyStateEntry = redoStack.pop();
        if (redoStack.length === 0) {
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], false);
        }
        historyState.current = historyStateEntry || null;
        if (historyStateEntry) {
            historyStateEntry.editor.setEditorState(historyStateEntry.editorState, {
                tag: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HISTORIC_TAG"]
            });
        }
    }
}
function undo(editor, historyState) {
    const redoStack = historyState.redoStack;
    const undoStack = historyState.undoStack;
    const undoStackLength = undoStack.length;
    if (undoStackLength !== 0) {
        const current = historyState.current;
        const historyStateEntry = undoStack.pop();
        if (current !== null) {
            redoStack.push(current);
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], true);
        }
        if (undoStack.length === 0) {
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], false);
        }
        historyState.current = historyStateEntry || null;
        if (historyStateEntry) {
            historyStateEntry.editor.setEditorState(historyStateEntry.editorState, {
                tag: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HISTORIC_TAG"]
            });
        }
    }
}
function clearHistory(historyState) {
    historyState.undoStack = [];
    historyState.redoStack = [];
    historyState.current = null;
}
/**
 * Registers necessary listeners to manage undo/redo history stack and related editor commands.
 * It returns `unregister` callback that cleans up all listeners and should be called on editor unmount.
 * @param editor - The lexical editor.
 * @param historyState - The history state, containing the current state and the undo/redo stack.
 * @param delay - The time (in milliseconds) the editor should delay generating a new history stack,
 * instead of merging the current changes with the current stack.
 * @returns The listeners cleanup callback function.
 */ function registerHistory(editor, historyState, delay) {
    const getMergeAction = createMergeActionGetter(editor, delay);
    const applyChange = ({ editorState, prevEditorState, dirtyLeaves, dirtyElements, tags })=>{
        const current = historyState.current;
        const redoStack = historyState.redoStack;
        const undoStack = historyState.undoStack;
        const currentEditorState = current === null ? null : current.editorState;
        if (current !== null && editorState === currentEditorState) {
            return;
        }
        const mergeAction = getMergeAction(prevEditorState, editorState, current, dirtyLeaves, dirtyElements, tags);
        if (mergeAction === HISTORY_PUSH) {
            if (redoStack.length !== 0) {
                historyState.redoStack = [];
                editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], false);
            }
            if (current !== null) {
                undoStack.push({
                    ...current
                });
                editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], true);
            }
        } else if (mergeAction === DISCARD_HISTORY_CANDIDATE) {
            return;
        }
        // Else we merge
        historyState.current = {
            editor,
            editorState
        };
    };
    const unregister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNDO_COMMAND"], ()=>{
        undo(editor, historyState);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REDO_COMMAND"], ()=>{
        redo(editor, historyState);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLEAR_EDITOR_COMMAND"], ()=>{
        clearHistory(historyState);
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLEAR_HISTORY_COMMAND"], ()=>{
        clearHistory(historyState);
        editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], false);
        editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], false);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerUpdateListener(applyChange));
    return unregister;
}
/**
 * Creates an empty history state.
 * @returns - The empty history state, as an object.
 */ function createEmptyHistoryState() {
    return {
        current: null,
        redoStack: [],
        undoStack: []
    };
}
/**
 * Registers necessary listeners to manage undo/redo history stack and related
 * editor commands, via the \@lexical/history module.
 */ const HistoryExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineExtension"])({
    build: (editor, { delay, createInitialHistoryState, disabled })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])({
            delay,
            disabled,
            historyState: createInitialHistoryState(editor)
        }),
    config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCast"])({
        createInitialHistoryState: createEmptyHistoryState,
        delay: 300,
        disabled: ("TURBOPACK compile-time value", "undefined") === 'undefined'
    }),
    name: '@lexical/history/History',
    register: (editor, config, state)=>{
        const stores = state.getOutput();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>stores.disabled.value ? undefined : registerHistory(editor, stores.historyState.value, stores.delay));
    }
});
function getHistoryPeer(editor) {
    return editor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPeerDependencyFromEditor"])(editor, HistoryExtension.name) : null;
}
/**
 * Registers necessary listeners to manage undo/redo history stack and related
 * editor commands, via the \@lexical/history module, only if the parent editor
 * has a history plugin implementation.
 */ const SharedHistoryExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineExtension"])({
    dependencies: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configExtension"])(HistoryExtension, {
            createInitialHistoryState: ()=>{
                throw new Error('SharedHistory did not inherit parent history');
            },
            disabled: true
        })
    ],
    name: '@lexical/history/SharedHistory',
    register (editor, _config, state) {
        const { output } = state.getDependency(HistoryExtension);
        const parentPeer = getHistoryPeer(editor._parentEditor);
        if (!parentPeer) {
            return ()=>{};
        }
        const parentOutput = parentPeer.output;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["batch"])(()=>{
                output.delay.value = parentOutput.delay.value;
                output.historyState.value = parentOutput.historyState.value;
                // Note that toggling the parent history will force this to be changed
                output.disabled.value = parentOutput.disabled.value;
            }));
    }
});
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalHistoryPlugin.dev.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistoryPlugin",
    ()=>HistoryPlugin
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$history$2f$LexicalHistory$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/history/LexicalHistory.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function useHistory(editor, externalHistoryState, delay = 1000) {
    const historyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>externalHistoryState || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$history$2f$LexicalHistory$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEmptyHistoryState"])(), [
        externalHistoryState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$history$2f$LexicalHistory$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerHistory"])(editor, historyState, delay);
    }, [
        delay,
        editor,
        historyState
    ]);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function HistoryPlugin({ delay, externalHistoryState }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    useHistory(editor, externalHistoryState, delay);
    return null;
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalOnChangePlugin.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnChangePlugin",
    ()=>OnChangePlugin
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function OnChangePlugin({ ignoreHistoryMergeTagChange = true, ignoreSelectionChange = false, onChange }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    useLayoutEffectImpl(()=>{
        if (onChange) {
            return editor.registerUpdateListener(({ editorState, dirtyElements, dirtyLeaves, prevEditorState, tags })=>{
                if (ignoreSelectionChange && dirtyElements.size === 0 && dirtyLeaves.size === 0 || ignoreHistoryMergeTagChange && tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HISTORY_MERGE_TAG"]) || prevEditorState.isEmpty()) {
                    return;
                }
                onChange(editorState, editor, tags);
            });
        }
    }, [
        editor,
        ignoreHistoryMergeTagChange,
        ignoreSelectionChange,
        onChange
    ]);
    return null;
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalReactProviderExtension.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactProviderExtension",
    ()=>ReactProviderExtension
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * An extension used to declare that there is a LexicalExtensionComposer or
 * ReactPluginHostExtension available so that we can issue runtime warnings
 * when plugins that depend on React are hosted in an environment
 * where it is not ever going to be rendered.
 *
 * It is a separate extension so it can be used as a peer dependency.
 */ const ReactProviderExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineExtension"])({
    name: '@lexical/react/ReactProvider'
});
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/text/LexicalText.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$canShowPlaceholder",
    ()=>$canShowPlaceholder,
    "$canShowPlaceholderCurry",
    ()=>$canShowPlaceholderCurry,
    "$findTextIntersectionFromCharacters",
    ()=>$findTextIntersectionFromCharacters,
    "$isRootTextContentEmpty",
    ()=>$isRootTextContentEmpty,
    "$isRootTextContentEmptyCurry",
    ()=>$isRootTextContentEmptyCurry,
    "$rootTextContent",
    ()=>$rootTextContent,
    "registerLexicalTextEntity",
    ()=>registerLexicalTextEntity
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Returns the root's text content.
 * @returns The root's text content.
 */ function $rootTextContent() {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getRoot"])();
    return root.getTextContent();
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Determines if the root has any text content and can trim any whitespace if it does.
 * @param isEditorComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @param trim - Should the root text have its whitespaced trimmed? Defaults to true.
 * @returns true if text content is empty, false if there is text or isEditorComposing is true.
 */ function $isRootTextContentEmpty(isEditorComposing, trim = true) {
    if (isEditorComposing) {
        return false;
    }
    let text = $rootTextContent();
    if (trim) {
        text = text.trim();
    }
    return text === '';
}
/**
 * Returns a function that executes {@link $isRootTextContentEmpty}
 * @param isEditorComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @param trim - Should the root text have its whitespaced trimmed? Defaults to true.
 * @returns A function that executes $isRootTextContentEmpty based on arguments.
 */ function $isRootTextContentEmptyCurry(isEditorComposing, trim) {
    return ()=>$isRootTextContentEmpty(isEditorComposing, trim);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Determines if the input should show the placeholder. If anything is in
 * in the root the placeholder should not be shown.
 * @param isComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @returns true if the input should show the placeholder, false otherwise.
 */ function $canShowPlaceholder(isComposing) {
    if (!$isRootTextContentEmpty(isComposing, false)) {
        return false;
    }
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getRoot"])();
    const children = root.getChildren();
    const childrenLength = children.length;
    if (childrenLength > 1) {
        return false;
    }
    for(let i = 0; i < childrenLength; i++){
        const topBlock = children[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(topBlock)) {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isElementNode"])(topBlock)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isParagraphNode"])(topBlock)) {
                return false;
            }
            if (topBlock.__indent !== 0) {
                return false;
            }
            const topBlockChildren = topBlock.getChildren();
            const topBlockChildrenLength = topBlockChildren.length;
            for(let s = 0; s < topBlockChildrenLength; s++){
                const child = topBlockChildren[i];
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(child)) {
                    return false;
                }
            }
        }
    }
    return true;
}
/**
 * Returns a function that executes {@link $canShowPlaceholder}
 * @param isEditorComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @returns A function that executes $canShowPlaceholder with arguments.
 */ function $canShowPlaceholderCurry(isEditorComposing) {
    return ()=>$canShowPlaceholder(isEditorComposing);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Finds a TextNode with a size larger than targetCharacters and returns
 * the node along with the remaining length of the text.
 * @param root - The RootNode.
 * @param targetCharacters - The number of characters whose TextNode must be larger than.
 * @returns The TextNode and the intersections offset, or null if no TextNode is found.
 */ function $findTextIntersectionFromCharacters(root, targetCharacters) {
    let node = root.getFirstChild();
    let currentCharacters = 0;
    mainLoop: while(node !== null){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
            const child = node.getFirstChild();
            if (child !== null) {
                node = child;
                continue;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
            const characters = node.getTextContentSize();
            if (currentCharacters + characters > targetCharacters) {
                return {
                    node,
                    offset: targetCharacters - currentCharacters
                };
            }
            currentCharacters += characters;
        }
        const sibling = node.getNextSibling();
        if (sibling !== null) {
            node = sibling;
            continue;
        }
        let parent = node.getParent();
        while(parent !== null){
            const parentSibling = parent.getNextSibling();
            if (parentSibling !== null) {
                node = parentSibling;
                continue mainLoop;
            }
            parent = parent.getParent();
        }
        break;
    }
    return null;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Returns a tuple that can be rested (...) into mergeRegister to clean up
 * node transforms listeners that transforms text into another node, eg. a HashtagNode.
 * @example
 * ```ts
 *   useEffect(() => {
    return mergeRegister(
      ...registerLexicalTextEntity(editor, getMatch, targetNode, createNode),
    );
  }, [createNode, editor, getMatch, targetNode]);
 * ```
 * Where targetNode is the type of node containing the text you want to transform (like a text input),
 * then getMatch uses a regex to find a matching text and creates the proper node to include the matching text.
 * @param editor - The lexical editor.
 * @param getMatch - Finds a matching string that satisfies a regex expression.
 * @param targetNode - The node type that contains text to match with. eg. HashtagNode
 * @param createNode - A function that creates a new node to contain the matched text. eg createHashtagNode
 * @returns An array containing the plain text and reverse node transform listeners.
 */ function registerLexicalTextEntity(editor, getMatch, targetNode, createNode) {
    const isTargetNode = (node)=>{
        return node instanceof targetNode;
    };
    const $replaceWithSimpleText = (node)=>{
        const textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$createTextNode"])(node.getTextContent());
        textNode.setFormat(node.getFormat());
        node.replace(textNode);
    };
    const getMode = (node)=>{
        return node.getLatest().__mode;
    };
    const $textNodeTransform = (node)=>{
        if (!node.isSimpleText()) {
            return;
        }
        let prevSibling = node.getPreviousSibling();
        let text = node.getTextContent();
        let currentNode = node;
        let match;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(prevSibling)) {
            const previousText = prevSibling.getTextContent();
            const combinedText = previousText + text;
            const prevMatch = getMatch(combinedText);
            if (isTargetNode(prevSibling)) {
                if (prevMatch === null || getMode(prevSibling) !== 0) {
                    $replaceWithSimpleText(prevSibling);
                    return;
                } else {
                    const diff = prevMatch.end - previousText.length;
                    if (diff > 0) {
                        const concatText = text.slice(0, diff);
                        const newTextContent = previousText + concatText;
                        prevSibling.select();
                        prevSibling.setTextContent(newTextContent);
                        if (diff === text.length) {
                            node.remove();
                        } else {
                            const remainingText = text.slice(diff);
                            node.setTextContent(remainingText);
                        }
                        return;
                    }
                }
            } else if (prevMatch === null || prevMatch.start < previousText.length) {
                return;
            }
        }
        let prevMatchLengthToSkip = 0;
        // eslint-disable-next-line no-constant-condition
        while(true){
            match = getMatch(text);
            let nextText = match === null ? '' : text.slice(match.end);
            text = nextText;
            if (nextText === '') {
                const nextSibling = currentNode.getNextSibling();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(nextSibling)) {
                    nextText = currentNode.getTextContent() + nextSibling.getTextContent();
                    const nextMatch = getMatch(nextText);
                    if (nextMatch === null) {
                        if (isTargetNode(nextSibling)) {
                            $replaceWithSimpleText(nextSibling);
                        } else {
                            nextSibling.markDirty();
                        }
                        return;
                    } else if (nextMatch.start !== 0) {
                        return;
                    }
                }
            }
            if (match === null) {
                return;
            }
            if (match.start === 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(prevSibling) && prevSibling.isTextEntity()) {
                prevMatchLengthToSkip += match.end;
                continue;
            }
            let nodeToReplace;
            if (match.start === 0) {
                [nodeToReplace, currentNode] = currentNode.splitText(match.end);
            } else {
                [, nodeToReplace, currentNode] = currentNode.splitText(match.start + prevMatchLengthToSkip, match.end + prevMatchLengthToSkip);
            }
            if (!(nodeToReplace !== undefined)) {
                formatDevErrorMessage(`${'nodeToReplace'} should not be undefined. You may want to check splitOffsets passed to the splitText.`);
            }
            const replacementNode = createNode(nodeToReplace);
            replacementNode.setFormat(nodeToReplace.getFormat());
            nodeToReplace.replace(replacementNode);
            if (currentNode == null) {
                return;
            }
            prevMatchLengthToSkip = 0;
            prevSibling = replacementNode;
        }
    };
    const $reverseNodeTransform = (node)=>{
        const text = node.getTextContent();
        const match = getMatch(text);
        if (match === null || match.start !== 0) {
            $replaceWithSimpleText(node);
            return;
        }
        if (text.length > match.end) {
            // This will split out the rest of the text as simple text
            node.splitText(match.end);
            return;
        }
        const prevSibling = node.getPreviousSibling();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(prevSibling) && prevSibling.isTextEntity()) {
            $replaceWithSimpleText(prevSibling);
            $replaceWithSimpleText(node);
        }
        const nextSibling = node.getNextSibling();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(nextSibling) && nextSibling.isTextEntity()) {
            $replaceWithSimpleText(nextSibling);
            // This may have already been converted in the previous block
            if (isTargetNode(node)) {
                $replaceWithSimpleText(node);
            }
        }
    };
    const removePlainTextTransform = editor.registerNodeTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextNode"], $textNodeTransform);
    const removeReverseNodeTransform = editor.registerNodeTransform(targetNode, $reverseNodeTransform);
    return [
        removePlainTextTransform,
        removeReverseNodeTransform
    ];
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalRichTextPlugin.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextPlugin",
    ()=>RichTextPlugin
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$useLexicalEditable$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/useLexicalEditable.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/extension/LexicalExtension.dev.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalReactProviderExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalReactProviderExtension.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/text/LexicalText.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$dragon$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/dragon/LexicalDragon.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$rich$2d$text$2f$LexicalRichText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/rich-text/LexicalRichText.dev.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function useDecorators(editor, ErrorBoundary) {
    const [decorators, setDecorators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>editor.getDecorators());
    // Subscribe to changes
    useLayoutEffectImpl(()=>{
        return editor.registerDecoratorListener((nextDecorators)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                setDecorators(nextDecorators);
            });
        });
    }, [
        editor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If the content editable mounts before the subscription is added, then
        // nothing will be rendered on initial pass. We can get around that by
        // ensuring that we set the value.
        setDecorators(editor.getDecorators());
    }, [
        editor
    ]);
    // Return decorators defined as React Portals
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const decoratedPortals = [];
        const decoratorKeys = Object.keys(decorators);
        for(let i = 0; i < decoratorKeys.length; i++){
            const nodeKey = decoratorKeys[i];
            const reactDecorator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ErrorBoundary, {
                onError: (e)=>editor._onError(e),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: decorators[nodeKey]
                })
            });
            const element = editor.getElementByKey(nodeKey);
            if (element !== null) {
                decoratedPortals.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(reactDecorator, element, nodeKey));
            }
        }
        return decoratedPortals;
    }, [
        ErrorBoundary,
        decorators,
        editor
    ]);
}
function isUsingReactExtension(editor) {
    const builder = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LexicalBuilder"].maybeFromEditor(editor);
    if (builder && builder.hasExtensionByName(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalReactProviderExtension$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactProviderExtension"].name)) {
        for (const name of [
            '@lexical/plain-text',
            '@lexical/rich-text'
        ]){
            if (!!builder.hasExtensionByName(name)) {
                formatDevErrorMessage(`LexicalBuilder: @lexical/react legacy text plugins conflict with the ${name} extension. Remove the legacy <RichTextPlugin/> or <PlainTextPlugin/> component.`);
            }
        }
        return true;
    }
    return false;
}
function Decorators({ editor, ErrorBoundary }) {
    return useDecorators(editor, ErrorBoundary);
}
/**
 * @internal
 *
 * When using @lexical/extension, the ReactProvider is expected to handle
 * rendering decorators. This component allows RichTextPlugin and
 * PlainTextPlugin to be used in extension projects that have not yet
 * migrated to use RichTextExtension or PlainTextExtension.
 **/ function LegacyDecorators({ editor, ErrorBoundary }) {
    return isUsingReactExtension(editor) ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Decorators, {
        editor: editor,
        ErrorBoundary: ErrorBoundary
    });
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function canShowPlaceholderFromCurrentEditorState(editor) {
    const currentCanShowPlaceholder = editor.getEditorState().read((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$canShowPlaceholderCurry"])(editor.isComposing()));
    return currentCanShowPlaceholder;
}
function useCanShowPlaceholder(editor) {
    const [canShowPlaceholder, setCanShowPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>canShowPlaceholderFromCurrentEditorState(editor));
    useLayoutEffectImpl(()=>{
        function resetCanShowPlaceholder() {
            const currentCanShowPlaceholder = canShowPlaceholderFromCurrentEditorState(editor);
            setCanShowPlaceholder(currentCanShowPlaceholder);
        }
        resetCanShowPlaceholder();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerUpdateListener(()=>{
            resetCanShowPlaceholder();
        }), editor.registerEditableListener(()=>{
            resetCanShowPlaceholder();
        }));
    }, [
        editor
    ]);
    return canShowPlaceholder;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function useRichTextSetup(editor) {
    useLayoutEffectImpl(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRegister"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$rich$2d$text$2f$LexicalRichText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerRichText"])(editor), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$dragon$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDragonSupport"])(editor));
    // We only do this for init
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        editor
    ]);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function RichTextPlugin({ contentEditable, // TODO Remove. This property is now part of ContentEditable
placeholder = null, ErrorBoundary }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    useRichTextSetup(editor);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            contentEditable,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Placeholder, {
                content: placeholder
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LegacyDecorators, {
                editor: editor,
                ErrorBoundary: ErrorBoundary
            })
        ]
    });
}
// TODO remove
function Placeholder({ content }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    const showPlaceholder = useCanShowPlaceholder(editor);
    const editable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$useLexicalEditable$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalEditable"])();
    if (!showPlaceholder) {
        return null;
    }
    if (typeof content === 'function') {
        return content(editable);
    } else {
        return content;
    }
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalContentEditable.dev.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentEditable",
    ()=>ContentEditable,
    "ContentEditableElement",
    ()=>ContentEditableElement
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/text/LexicalText.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function mergeRefs(...refs) {
    return (value)=>{
        for (const ref of refs){
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref != null) {
                ref.current = value;
            }
        }
    };
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function ContentEditableElementImpl({ editor, ariaActiveDescendant, ariaAutoComplete, ariaControls, ariaDescribedBy, ariaErrorMessage, ariaExpanded, ariaInvalid, ariaLabel, ariaLabelledBy, ariaMultiline, ariaOwns, ariaRequired, autoCapitalize, className, id, role = 'textbox', spellCheck = true, style, tabIndex, 'data-testid': testid, ...rest }, ref) {
    const [isEditable, setEditable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(editor.isEditable());
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rootElement)=>{
        // defaultView is required for a root element.
        // In multi-window setups, the defaultView may not exist at certain points.
        if (rootElement && rootElement.ownerDocument && rootElement.ownerDocument.defaultView) {
            editor.setRootElement(rootElement);
        } else {
            editor.setRootElement(null);
        }
    }, [
        editor
    ]);
    const mergedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>mergeRefs(ref, handleRef), [
        handleRef,
        ref
    ]);
    useLayoutEffectImpl(()=>{
        setEditable(editor.isEditable());
        return editor.registerEditableListener((currentIsEditable)=>{
            setEditable(currentIsEditable);
        });
    }, [
        editor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "aria-activedescendant": isEditable ? ariaActiveDescendant : undefined,
        "aria-autocomplete": isEditable ? ariaAutoComplete : 'none',
        "aria-controls": isEditable ? ariaControls : undefined,
        "aria-describedby": ariaDescribedBy,
        ...ariaErrorMessage != null ? {
            'aria-errormessage': ariaErrorMessage
        } : {},
        "aria-expanded": isEditable && role === 'combobox' ? !!ariaExpanded : undefined,
        ...ariaInvalid != null ? {
            'aria-invalid': ariaInvalid
        } : {},
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-multiline": ariaMultiline,
        "aria-owns": isEditable ? ariaOwns : undefined,
        "aria-readonly": isEditable ? undefined : true,
        "aria-required": ariaRequired,
        autoCapitalize: autoCapitalize,
        className: className,
        contentEditable: isEditable,
        "data-testid": testid,
        id: id,
        ref: mergedRefs,
        role: role,
        spellCheck: spellCheck,
        style: style,
        tabIndex: tabIndex,
        ...rest
    });
}
const ContentEditableElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(ContentEditableElementImpl);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function canShowPlaceholderFromCurrentEditorState(editor) {
    const currentCanShowPlaceholder = editor.getEditorState().read((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$canShowPlaceholderCurry"])(editor.isComposing()));
    return currentCanShowPlaceholder;
}
function useCanShowPlaceholder(editor) {
    const [canShowPlaceholder, setCanShowPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>canShowPlaceholderFromCurrentEditorState(editor));
    useLayoutEffectImpl(()=>{
        function resetCanShowPlaceholder() {
            const currentCanShowPlaceholder = canShowPlaceholderFromCurrentEditorState(editor);
            setCanShowPlaceholder(currentCanShowPlaceholder);
        }
        resetCanShowPlaceholder();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerUpdateListener(()=>{
            resetCanShowPlaceholder();
        }), editor.registerEditableListener(()=>{
            resetCanShowPlaceholder();
        }));
    }, [
        editor
    ]);
    return canShowPlaceholder;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * @deprecated This type has been renamed to `ContentEditableProps` to provide a clearer and more descriptive name.
 * For backward compatibility, this type is still exported as `Props`, but it is recommended to migrate to using `ContentEditableProps` instead.
 *
 * This alias is maintained for compatibility purposes but may be removed in future versions.
 * Please update your codebase to use `ContentEditableProps` to ensure long-term maintainability.
 */ const ContentEditable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(ContentEditableImpl);
function ContentEditableImpl(props, ref) {
    const { placeholder, ...rest } = props;
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ContentEditableElement, {
                editor: editor,
                ...rest,
                ref: ref
            }),
            placeholder != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Placeholder, {
                editor: editor,
                content: placeholder
            })
        ]
    });
}
function Placeholder({ content, editor }) {
    const showPlaceholder = useCanShowPlaceholder(editor);
    const [isEditable, setEditable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(editor.isEditable());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        setEditable(editor.isEditable());
        return editor.registerEditableListener((currentIsEditable)=>{
            setEditable(currentIsEditable);
        });
    }, [
        editor
    ]);
    if (!showPlaceholder) {
        return null;
    }
    let placeholder = null;
    if (typeof content === 'function') {
        placeholder = content(isEditable);
    } else if (content !== null) {
        placeholder = content;
    }
    if (placeholder === null) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "aria-hidden": true,
        children: placeholder
    });
}
;
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/Field-OIMYWB22.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "RichText",
    ()=>Ws
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/chunk-EZX4YW7S.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/chunk-BZZVLW4U.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$J46CQZ3T$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/exports/client/chunk-J46CQZ3T.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/dequal/lite/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposer$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposer.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalErrorBoundary$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalErrorBoundary.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalHistoryPlugin$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalHistoryPlugin.dev.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalOnChangePlugin$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalOnChangePlugin.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalRichTextPlugin$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalRichTextPlugin.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$useLexicalEditable$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/useLexicalEditable.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/lexical/Lexical.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/clipboard/LexicalClipboard.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/utils/LexicalUtils.dev.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/bson-objectid/objectid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$rich$2d$text$2f$LexicalRichText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/rich-text/LexicalRichText.dev.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$WDZJLNNB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/exports/client/chunk-WDZJLNNB.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalContentEditable$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@lexical/react/LexicalContentEditable.dev.mjs [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var $ = ({ anchorElem: t, clientProps: e, plugin: o })=>o.position === "floatingAnchorElem" && t ? o.Component && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(o.Component, {
        anchorElem: t,
        clientProps: e
    }) : o.Component && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(o.Component, {
        clientProps: e
    });
;
;
;
;
;
;
;
var ye = (t)=>{
    if ("fields" in t && typeof t.fields == "object" && t.fields !== null && "id" in t.fields ? t.fields.id = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].default().toHexString() : "id" in t && (t.id = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].default().toHexString()), t.children) for (let e of t.children)ye(e);
};
function $e() {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3), [e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), o, r;
    return t[0] !== e ? (o = ()=>e.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COPY_COMMAND"], (n)=>{
            let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isNodeSelection"])(d)) {
                let i = d.getNodes()[0]?.exportJSON(), a = JSON.parse(JSON.stringify(i));
                ye(a);
                let f = {
                    namespace: e._config.namespace,
                    nodes: [
                        a
                    ]
                }, m = JSON.stringify(f);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyToClipboard"])(e, null, {
                    "application/x-lexical-editor": m,
                    "text/plain": ""
                }).catch(Ht), !0;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyToClipboard"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(n, ClipboardEvent) ? n : null).then(()=>{
                if (!(n instanceof ClipboardEvent) || !n.clipboardData) throw new Error("No clipboard event");
                let l = n.clipboardData.getData("application/x-lexical-editor");
                if (!l) return !0;
                let i = JSON.parse(l);
                for (let f of i.nodes)ye(f);
                let a = JSON.stringify(i);
                n.clipboardData.setData("application/x-lexical-editor", a);
            }).catch((l)=>{
                throw n instanceof ClipboardEvent && n.clipboardData?.setData("application/x-lexical-editor", ""), l;
            }), !0;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), r = [
        e
    ], t[0] = e, t[1] = o, t[2] = r) : (o = t[1], r = t[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(o, r), null;
}
function Ht(t) {
    throw t;
}
;
;
;
;
;
function je() {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3), [e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), o = co, r, n;
    return t[0] !== e ? (r = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRegister"])(e.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLICK_COMMAND"], ao, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), e.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_DELETE_COMMAND"], o, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), e.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_BACKSPACE_COMMAND"], o, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), e.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SELECTION_CHANGE_COMMAND"], lo, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), e.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_ARROW_UP_COMMAND"], io, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), e.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_ARROW_DOWN_COMMAND"], no, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"])), n = [
        e
    ], t[0] = e, t[1] = r, t[2] = n) : (r = t[1], n = t[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(r, n), null;
}
function no(t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isNodeSelection"])(e)) {
        t.preventDefault();
        let l = e.getNodes()[0]?.getNextSibling();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(l)) {
            let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getEditor"])().getElementByKey(l.getKey());
            return f && Z({
                element: f,
                node: l
            }), !0;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isElementNode"])(l)) return !0;
        let i = l.getFirstDescendant() ?? l;
        return i && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$findMatchingParent"])(i, se)?.selectEnd(), t.preventDefault()), !0;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRangeSelection"])(e)) return !1;
    let r = (e.isBackward() ? e.anchor : e.focus).getNode(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$findMatchingParent"])(r, ro), d = n?.getNextSibling();
    if (!n || d !== ze(n)) return !1;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(d)) {
        let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getEditor"])().getElementByKey(d.getKey());
        if (l) return Z({
            element: l,
            node: d
        }), t.preventDefault(), !0;
    }
    return !1;
}
function ro(t) {
    return ze(t) !== null;
}
function io(t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isNodeSelection"])(e)) {
        let l = e.getNodes()[0]?.getPreviousSibling();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(l)) {
            let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getEditor"])().getElementByKey(l.getKey());
            return f ? (Z({
                element: f,
                node: l
            }), t.preventDefault(), !0) : !1;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isElementNode"])(l)) return !1;
        let i = l.getLastDescendant() ?? l;
        return i ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$findMatchingParent"])(i, se)?.selectStart(), t.preventDefault(), !0) : !1;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRangeSelection"])(e)) return !1;
    let r = (e.isBackward() ? e.anchor : e.focus).getNode(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$findMatchingParent"])(r, so), d = n?.getPreviousSibling();
    if (!n || d !== We(n)) return !1;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(d)) {
        let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getEditor"])().getElementByKey(d.getKey());
        if (l) return Z({
            element: l,
            node: d
        }), t.preventDefault(), !0;
    }
    return !1;
}
function so(t) {
    return We(t) !== null;
}
function lo() {
    let t = mo();
    return document.querySelector(".decorator-selected")?.classList.remove("decorator-selected"), t ? (t.element?.classList.add("decorator-selected"), !0) : !1;
}
function ao(t) {
    document.querySelector(".decorator-selected")?.classList.remove("decorator-selected");
    let e = fo(t);
    if (!e) return !0;
    let { target: o } = t;
    return !(o instanceof HTMLElement) || o.isContentEditable || o.closest('button, textarea, input, .react-select, .code-editor, .no-select-decorator, [role="button"]') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$setSelection"])(null) : Z(e), !0;
}
function co(t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isNodeSelection"])(e) ? (t.preventDefault(), e.getNodes().forEach(uo), !0) : !1;
}
function uo(t) {
    t.remove();
}
function fo(t) {
    if (!(t.target instanceof HTMLElement)) return;
    let e = t.target.closest('[data-lexical-decorator="true"]');
    if (!(e instanceof HTMLElement)) return;
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(e);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(o) ? {
        element: e,
        node: o
    } : void 0;
}
function mo() {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isNodeSelection"])(t)) return;
    let e = t.getNodes();
    if (e.length !== 1) return;
    let o = e[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(o) ? {
        decorator: o,
        element: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getEditor"])().getElementByKey(o.getKey())
    } : void 0;
}
function Z({ element: t, node: e }) {
    document.querySelector(".decorator-selected")?.classList.remove("decorator-selected");
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$createNodeSelection"])();
    o.add(e.getKey()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$setSelection"])(o), t.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    }), t.classList.add("decorator-selected");
}
function se(t) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(t) && !t.isInline()) return !0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isElementNode"])(t) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(t)) return !1;
    let e = t.getFirstChild(), o = e === null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isLineBreakNode"])(e) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isTextNode"])(e) || e.isInline();
    return !t.isInline() && t.canBeEmpty() !== !1 && o;
}
function ze(t) {
    let e = t.getNextSibling();
    for(; e !== null;){
        if (se(e)) return e;
        e = e.getNextSibling();
    }
    return null;
}
function We(t) {
    let e = t.getPreviousSibling();
    for(; e !== null;){
        if (se(e)) return e;
        e = e.getPreviousSibling();
    }
    return null;
}
;
;
;
;
;
;
var V = (t, e, o, r, n = 50, d = 25)=>{
    let l = 0;
    if (t && !t.contains(r)) {
        let { bottom: i, left: a, right: f, top: m } = t.getBoundingClientRect(), c = m + window.scrollY, s = i + window.scrollY;
        if (o < c - d || o > s + d || e < a - n || e > f + n) return -1;
        (e < a || e > f) && (l = e < a ? e - a : e - f);
    }
    return l;
};
;
function G(t) {
    let e = t.getBoundingClientRect(), o = getComputedStyle(t).getPropertyValue("transform");
    if (!o || o === "none") return e;
    let r = o.split(",").pop();
    return e.y = e.y - Number(r?.replace(")", "")), e;
}
function le(t) {
    let e = (a, f)=>a ? parseFloat(window.getComputedStyle(a)[f]) : 0, { marginBottom: o, marginTop: r } = window.getComputedStyle(t), n = e(t.previousElementSibling, "marginBottom"), d = e(t.nextElementSibling, "marginTop"), l = Math.max(parseFloat(r), n);
    return {
        marginBottom: Math.max(parseFloat(o), d),
        marginTop: l
    };
}
;
function H(t) {
    return t.getEditorState().read(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getRoot"])().getChildrenKeys());
}
var go = 1, ho = -1, Ye = 0, M = {
    props: null,
    result: null
};
function yo(t, e, o = 20) {
    let r = t.x - e.x, n = t.y - e.y;
    return r * r + n * n <= o * o;
}
function U(t) {
    let { anchorElem: e, cache_threshold: o = 20, editor: r, fuzzy: n = !1, horizontalOffset: d = 0, point: { x: l, y: i }, startIndex: a = 0, useEdgeAsDefault: f = !1 } = t;
    if (o > 0 && M.props && M.result && M.props.fuzzy === t.fuzzy && M.props.horizontalOffset === t.horizontalOffset && M.props.useEdgeAsDefault === t.useEdgeAsDefault && yo(M.props.point, t.point, o)) return M.result;
    let m = e.getBoundingClientRect(), c = H(r), s = {
        blockElem: null,
        blockNode: null,
        distance: 1 / 0,
        foundAtIndex: -1,
        isFoundNodeEmptyParagraph: !1
    };
    return r.getEditorState().read(()=>{
        if (f) {
            let g = r.getElementByKey(c[0]), y = r.getElementByKey(c[c.length - 1]);
            if (g && y) {
                let [u, p] = [
                    G(g),
                    G(y)
                ];
                if (i < u.top ? (s.blockElem = g, s.distance = u.top - i, s.blockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNodeByKey"])(c[0]), s.foundAtIndex = 0) : i > p.bottom && (s.distance = i - p.bottom, s.blockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNodeByKey"])(c[c.length - 1]), s.blockElem = y, s.foundAtIndex = c.length - 1), s?.blockElem) return {
                    blockElem: null,
                    isFoundNodeEmptyParagraph: !1
                };
            }
        }
        let h = a, x = Ye;
        for(; h >= 0 && h < c.length;){
            let g = c[h], y = r.getElementByKey(g);
            if (y === null) break;
            let u = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"](l + d, i), p = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"].fromDOMRect(G(y)), { marginBottom: E, marginTop: T } = le(y), R = p.generateNewRect({
                bottom: p.bottom + E,
                left: m.left,
                right: m.right,
                top: p.top - T
            }), { distance: P, isOnBottomSide: D, isOnTopSide: b } = R.distanceFromPoint(u);
            if (P === 0) {
                s.blockElem = y, s.blockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNodeByKey"])(g), s.foundAtIndex = h, s.distance = P, s.blockNode && s.blockNode.getType() === "paragraph" && s.blockNode.getTextContent() === "" && (!n && !t.returnEmptyParagraphs && (s.blockElem = null, s.blockNode = null), s.isFoundNodeEmptyParagraph = !0);
                break;
            } else n && P < s.distance && (s.blockElem = y, s.blockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNodeByKey"])(g), s.distance = P, s.foundAtIndex = h);
            x === Ye && (b ? x = ho : D ? x = go : x = 1 / 0), h += x;
        }
    }), M.props = t, M.result = {
        blockElem: s.blockElem,
        blockNode: s.blockNode,
        foundAtIndex: s.foundAtIndex,
        isFoundNodeEmptyParagraph: s.isFoundNodeEmptyParagraph
    }, {
        blockElem: s.blockElem,
        blockNode: s.blockNode,
        foundAtIndex: s.foundAtIndex,
        isFoundNodeEmptyParagraph: s.isFoundNodeEmptyParagraph
    };
}
function ce(t, e) {
    return !!t.closest(`.${e}`);
}
var xo = [
    "IMG",
    "INPUT",
    "TEXTAREA",
    "SELECT",
    "BUTTON",
    "VIDEO",
    "OBJECT",
    "EMBED",
    "IFRAME",
    "HR"
];
function Ve(t) {
    if (!t || xo.includes(t.tagName) || t.offsetHeight === 0 || t.offsetWidth === 0) return !1;
    let e = window.getComputedStyle(t);
    return !(e.display === "table-cell" || e.position === "absolute" || e.visibility === "hidden" || e.opacity === "0");
}
function de(t, e, o, r = 0) {
    if (!t) {
        e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
        return;
    }
    let n = t.getBoundingClientRect(), d = window.getComputedStyle(t), l = e.getBoundingClientRect(), i = o.getBoundingClientRect(), a;
    if ([
        "LexicalEditorTheme__block",
        "LexicalEditorTheme__upload",
        "LexicalEditorTheme__relationship"
    ].some((c)=>t.classList.contains(c) || t.firstElementChild?.classList.contains(c))) a = n.top + 8 - i.top;
    else {
        let c = Ve(t) ? parseInt(d.lineHeight, 10) : 0;
        a = n.top + (c - l.height) / 2 - i.top;
    }
    let m = r;
    e.style.opacity = "1", e.style.transform = `translate(${m}px, ${a}px)`;
}
var wo = "add-block-menu", ue = 1 / 0;
function ko(t) {
    return t === 0 ? 1 / 0 : ue >= 0 && ue < t ? ue : Math.floor(t / 2);
}
function To(t, e, o) {
    let r = e.parentElement, { editorConfig: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), d = n?.admin?.hideGutter ? -24 : 12, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), [i, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function m(c) {
            let s = c.target;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(s)) return;
            let h = V(r, c.pageX, c.pageY, s);
            if (h === -1) {
                a(null);
                return;
            }
            if (ce(s, wo)) return;
            let x = H(t), { blockElem: g, blockNode: y, foundAtIndex: u } = U({
                anchorElem: e,
                cache_threshold: 0,
                editor: t,
                horizontalOffset: -h,
                point: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"](c.x, c.y),
                returnEmptyParagraphs: !0,
                startIndex: ko(x.length),
                useEdgeAsDefault: !1
            });
            ue = u, g && y && (i?.node !== y || i?.elem !== g) && a({
                elem: g,
                node: y
            });
        }
        return document?.addEventListener("mousemove", m), ()=>{
            document?.removeEventListener("mousemove", m);
        };
    }, [
        r,
        e,
        t,
        i
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        l.current && i?.node && de(i?.elem, l.current, e, d);
    }, [
        e,
        i,
        d
    ]);
    let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((m)=>{
        let c = i;
        c?.node && (t.update(()=>{
            let s = !0;
            if ((c?.node.getType() !== "paragraph" || c.node.getTextContent() !== "") && (s = !1), !s) {
                let h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
                c?.node.insertAfter(h), setTimeout(()=>{
                    c = {
                        elem: t.getElementByKey(h.getKey()),
                        node: h
                    }, a(c);
                }, 0);
            }
        }), setTimeout(()=>{
            t.update(()=>{
                t.focus(), c?.node && "select" in c.node && typeof c.node.select == "function" && c.node.select();
            });
        }, 1), setTimeout(()=>{
            t.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"], {
                node: c?.node
            });
        }, 2), m.stopPropagation(), m.preventDefault());
    }, [
        t,
        i
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
            "aria-label": "Add block",
            className: "icon add-block-menu",
            onClick: (m)=>{
                f(m);
            },
            ref: l,
            type: "button",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: o ? "icon" : ""
            })
        })
    }), e);
}
function Je(t) {
    let { anchorElem: e } = t, o = e === void 0 ? document.body : e, [r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    return To(r, o, r._editable);
}
;
;
;
;
;
;
;
var qe = 0, Do = -24;
var j = 0;
function Qe(t, e, o, r, n, d, l, i, a, f = !1) {
    let { height: m, top: c } = r.getBoundingClientRect(), { top: s, width: h } = l.getBoundingClientRect(), { marginBottom: x, marginTop: g } = le(r), y = c, u = d >= c + m / 2 + window.scrollY, p = !1;
    if (n?.elem) if (r !== n?.elem) (u && n?.elem && n?.elem === r.nextElementSibling || !u && n?.elem && n?.elem === r.previousElementSibling) && (j++, j < 200 && (p = !0));
    else {
        j++;
        let P = n?.boundingBox?.y, D = r.getBoundingClientRect().y;
        (u === n?.isBelow && P === D || j < 200) && (p = !1);
    }
    if (p) return {
        isBelow: u,
        willStayInSamePosition: p
    };
    f ? y += m / 2 : u ? y += m + x / 2 : y -= g / 2;
    let E = 0;
    f || (u ? E = -qe : E = qe);
    let T = y - s + E, R = Do - e;
    return o.style.width = `calc(${h}px - ${t})`, o.style.opacity = ".8", o.style.transform = `translate(${R}px, calc(${T}px - 2px))`, n?.elem && (n.elem.style.opacity = "", n?.elem === r ? u ? n.elem.style.marginTop = "" : n.elem.style.marginBottom = "" : (n.elem.style.marginBottom = "", n.elem.style.marginTop = "")), j = 0, {
        isBelow: u,
        willStayInSamePosition: p
    };
}
var Ao = "draggable-block-menu", tt = "application/x-lexical-drag-block", ee = 1 / 0;
function ot(t) {
    return t === 0 ? 1 / 0 : ee >= 0 && ee < t ? ee : Math.floor(t / 2);
}
function Bo(t, e) {
    let { transform: o } = e.style;
    t.setDragImage(e, 0, 0), setTimeout(()=>{
        e.style.transform = o;
    });
}
function nt(t, e) {
    t && (t.style.opacity = "0"), e && (e.style.opacity = "", e.style.marginBottom = "", e.style.marginTop = "");
}
function Oo(t, e, o) {
    let r = e.parentElement, n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), [a, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [m, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), { editorConfig: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), h = s?.admin?.hideGutter ? -44 : -8;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function y(u) {
            let p = u.target;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(p)) return;
            let E = V(r, u.pageX, u.pageY, p);
            if (E === -1) {
                f(null);
                return;
            }
            if (ce(p, Ao)) return;
            let T = H(t), { blockElem: R, foundAtIndex: P, isFoundNodeEmptyParagraph: D } = U({
                anchorElem: e,
                cache_threshold: 0,
                editor: t,
                horizontalOffset: -E,
                point: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"](u.x, u.y),
                startIndex: ot(T.length),
                useEdgeAsDefault: !1,
                verbose: !1
            });
            ee = P, !(!R && !D) && a !== R && f(R);
        }
        return document?.addEventListener("mousemove", y), ()=>{
            document?.removeEventListener("mousemove", y);
        };
    }, [
        r,
        e,
        t,
        a
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        n.current && de(a, n.current, e, h);
    }, [
        e,
        a,
        h
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function y(p) {
            if (!i.current) return !1;
            let [E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$rich$2d$text$2f$LexicalRichText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventFiles"])(p);
            if (E) return !1;
            let { pageY: T, target: R } = p;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(R)) return !1;
            let P = V(r, p.pageX, p.pageY, R, 100, 50), D = H(t), { blockElem: b, foundAtIndex: L, isFoundNodeEmptyParagraph: B } = U({
                anchorElem: e,
                editor: t,
                fuzzy: !0,
                horizontalOffset: -P,
                point: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"](p.x, p.y),
                startIndex: ot(D.length),
                useEdgeAsDefault: !0,
                verbose: !0
            });
            ee = L;
            let O = d.current;
            if (b === null || O === null) return !1;
            if (a !== b) {
                let { isBelow: w, willStayInSamePosition: z } = Qe(s?.admin?.hideGutter ? "0px" : "3rem", h + (s?.admin?.hideGutter ? n?.current?.getBoundingClientRect()?.width ?? 0 : -(n?.current?.getBoundingClientRect()?.width ?? 0)), O, b, m, T, e, p, l, B);
                p.preventDefault(), z || c({
                    boundingBox: b.getBoundingClientRect(),
                    elem: b,
                    isBelow: w
                });
            } else m?.elem && (nt(O, m.elem), c({
                boundingBox: b.getBoundingClientRect(),
                elem: b,
                isBelow: !1
            }));
            return !0;
        }
        function u(p) {
            if (!i.current) return !1;
            let [E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$rich$2d$text$2f$LexicalRichText$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventFiles"])(p);
            if (E) return !1;
            let { dataTransfer: T, pageY: R, target: P } = p, D = T?.getData(tt) || "";
            return t.update(()=>{
                let b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNodeByKey"])(D);
                if (!b || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(P)) return !1;
                let L = V(r, p.pageX, p.pageY, P, 100, 50), { blockElem: B, isFoundNodeEmptyParagraph: O } = U({
                    anchorElem: e,
                    editor: t,
                    fuzzy: !0,
                    horizontalOffset: -L,
                    point: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"](p.x, p.y),
                    useEdgeAsDefault: !0
                });
                if (!B) return !1;
                let w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(B);
                if (!w) return !1;
                if (w === b) return !0;
                let { height: z, top: W } = G(B), he = R >= W + z / 2 + window.scrollY;
                O ? (w.insertBefore(b), w.remove()) : he ? w.insertAfter(b) : w.insertBefore(b), a !== null && f(null), document.querySelectorAll(".lexical-block-highlighter").forEach((k)=>{
                    k.remove();
                });
                let oe = t.getElementByKey(b.getKey());
                setTimeout(()=>{
                    let k = oe?.getBoundingClientRect();
                    if (!k) return;
                    let N = document.createElement("div");
                    N.className = "lexical-block-highlighter", N.style.backgroundColor = "var(--theme-elevation-1000", N.style.transition = "opacity 0.5s ease-in-out", N.style.zIndex = "1", N.style.pointerEvents = "none", N.style.boxSizing = "border-box", N.style.borderRadius = "4px", N.style.position = "absolute", document.body.appendChild(N), N.style.opacity = "0.1", N.style.height = `${k.height + 8}px`, N.style.width = `${k.width + 8}px`, N.style.top = `${k.top + window.scrollY - 4}px`, N.style.left = `${k.left - 4}px`, setTimeout(()=>{
                        N.style.opacity = "0", setTimeout(()=>{
                            N.remove();
                        }, 500);
                    }, 1e3);
                }, 120);
            }), !0;
        }
        return document.addEventListener("dragover", y), document.addEventListener("drop", u), ()=>{
            document.removeEventListener("dragover", y), document.removeEventListener("drop", u);
        };
    }, [
        r,
        h,
        e,
        t,
        m,
        a,
        s?.admin?.hideGutter
    ]);
    function x(y) {
        let u = y.dataTransfer;
        if (!u || !a) return;
        Bo(u, a);
        let p = "";
        t.update(()=>{
            let E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(a);
            E && (p = E.getKey());
        }), i.current = !0, u.setData(tt, p);
    }
    function g() {
        i.current = !1, m?.elem && nt(d.current, m?.elem);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": "Drag to move",
                className: "icon draggable-block-menu",
                draggable: !0,
                onDragEnd: g,
                onDragStart: x,
                ref: n,
                type: "button",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: o ? "icon" : ""
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "draggable-block-target-line",
                ref: d
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "debug-highlight",
                ref: l
            })
        ]
    }), e);
}
function it(t) {
    let { anchorElem: e } = t, o = e === void 0 ? document.body : e, [r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    return Oo(r, o, r._editable);
}
;
;
;
;
;
var st = "insert-paragraph-at-end", lt = ()=>{
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2), [e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), { editorConfig: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])();
    if (o?.admin?.hideInsertParagraphAtEnd) return null;
    let r;
    return t[0] !== e ? (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "aria-label": "Insert Paragraph",
        className: st,
        onClick: ()=>{
            e.update(Ho);
        },
        role: "button",
        tabIndex: 0,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: `${st}-inside`,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                children: "+"
            })
        })
    }), t[0] = e, t[1] = r) : r = t[1], r;
};
function Ho() {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getRoot"])().append(t), t.select();
}
;
;
;
var ct = ()=>{
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), { editorConfig: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), [o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), r, n;
    return t[0] !== o || t[1] !== e.features.markdownTransformers ? (r = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(o, e.features.markdownTransformers ?? []), n = [
        o,
        e.features.markdownTransformers
    ], t[0] = o, t[1] = e.features.markdownTransformers, t[2] = r, t[3] = n) : (r = t[2], n = t[3]), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](r, n), null;
};
;
;
;
function dt() {
    let [t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>t.registerNodeTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RootNode"], (e)=>{
            let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$isRangeSelection"])(o)) {
                let r = o.anchor.getNode(), n = o.focus.getNode();
                (!r.isAttached() || !n.isAttached()) && (e.selectEnd(), console.warn("updateEditor: selection has been moved to the end of the editor because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node."));
            }
            return !1;
        }), [
        t
    ]), null;
}
;
;
;
function ut() {
    let [t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>t.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SELECT_ALL_COMMAND"], ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$getSelection"])()) return !1;
            let o = document.activeElement;
            return o instanceof HTMLInputElement && o.select(), !0;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), [
        t
    ]), null;
}
;
;
;
;
;
;
;
;
function ft(t, e) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), { maxLength: r, minLength: n } = e, d = r === void 0 ? 75 : r, l = n === void 0 ? 1 : n, i;
    return o[0] !== d || o[1] !== l || o[2] !== t ? (i = (a)=>{
        let { query: f } = a, m = "[^" + t + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"] + "\\s]", s = new RegExp("(^|\\s|\\()([" + t + "]((?:" + m + "){0," + d + "}))$").exec(f);
        if (s !== null) {
            let h = s[1], x = s[3];
            if (x.length >= l) return {
                leadOffset: s.index + h.length,
                matchingString: x,
                replaceableString: s[2]
            };
        }
        return null;
    }, o[0] = d, o[1] = l, o[2] = t, o[3] = i) : i = o[3], i;
}
var _ = "slash-menu-popup";
function sn({ isSelected: t, item: e, onClick: o, onMouseEnter: r, ref: n }) {
    let { fieldProps: { featureClientSchemaMap: d, schemaPath: l } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), { i18n: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$WDZJLNNB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])(), a = `${_}__item ${_}__item-${e.key}`;
    t && (a += ` ${_}__item--selected`);
    let f = e.key;
    return e.label && (f = typeof e.label == "function" ? e.label({
        featureClientSchemaMap: d,
        i18n: i,
        schemaPath: l
    }) : e.label), f.length > 25 && (f = f.substring(0, 25) + "..."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        "aria-selected": t,
        className: a,
        id: _ + "__item-" + e.key,
        onClick: o,
        onMouseEnter: r,
        ref: n,
        role: "option",
        tabIndex: -1,
        type: "button",
        children: [
            e?.Icon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(e.Icon, {}),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${_}__item-text`,
                children: f
            })
        ]
    }, e.key);
}
function ht({ anchorElem: t = document.body }) {
    let [e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), [o, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), { editorConfig: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), { i18n: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$WDZJLNNB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])(), { fieldProps: { featureClientSchemaMap: l, schemaPath: i } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), a = ft("/", {
        minLength: 0
    }), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        let c = [];
        for (let s of n.features.slashMenu.dynamicGroups)if (o) {
            let h = s({
                editor: e,
                queryString: o
            });
            c = c.concat(h);
        }
        return c;
    }, [
        e,
        o,
        n?.features
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let c = [];
        for (let s of n?.features.slashMenu.groups ?? [])c.push(s);
        if (o) {
            c = c.map((h)=>{
                let x = h.items.filter((g)=>{
                    let y = g.key;
                    return g.label && (y = typeof g.label == "function" ? g.label({
                        featureClientSchemaMap: l,
                        i18n: d,
                        schemaPath: i
                    }) : g.label), new RegExp(o, "gi").exec(y) ? !0 : g.keywords != null ? g.keywords.some((u)=>new RegExp(o, "gi").exec(u)) : !1;
                });
                return x.length ? {
                    ...h,
                    items: x
                } : null;
            }), c = c.filter((h)=>h != null);
            let s = f();
            for (let h of s){
                let x = c.find((g)=>g.key === h.key);
                x ? c = c.filter((g)=>g.key !== h.key) : x = {
                    ...h,
                    items: []
                }, x?.items?.length && (x.items = x.items.concat(x.items)), c.push(x);
            }
        }
        return c;
    }, [
        o,
        n?.features.slashMenu.groups,
        f,
        l,
        d,
        i
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"], {
        anchorElem: t,
        groups: m,
        menuRenderFn: (c, { selectedItemKey: s, selectItemAndCleanUp: h, setSelectedItemKey: x })=>c.current && m.length ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: _,
                children: m.map((g)=>{
                    let y = g.key;
                    return g.label && l && (y = typeof g.label == "function" ? g.label({
                        featureClientSchemaMap: l,
                        i18n: d,
                        schemaPath: i
                    }) : g.label), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: `${_}__group ${_}__group-${g.key}`,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: `${_}__group-title`,
                                children: y
                            }),
                            g.items.map((u, p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(sn, {
                                    index: p,
                                    isSelected: s === u.key,
                                    item: u,
                                    onClick: ()=>{
                                        x(u.key), h(u);
                                    },
                                    onMouseEnter: ()=>{
                                        x(u.key);
                                    },
                                    ref: (E)=>{
                                        u.ref = {
                                            current: E
                                        };
                                    }
                                }, u.key))
                        ]
                    }, g.key);
                })
            }), c.current) : null,
        onQueryChange: r,
        triggerFn: a
    });
}
;
;
;
;
function yt(t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6), { features: o } = t, [r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), n;
    e[0] !== r || e[1] !== o.enabledFormats ? (n = ()=>{
        let l = fn(o.enabledFormats);
        if (l.length !== 0) return r.registerNodeTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextNode"], (i)=>{
            l.forEach((a)=>{
                i.hasFormat(a) && i.toggleFormat(a);
            });
        });
    }, e[0] = r, e[1] = o.enabledFormats, e[2] = n) : n = e[2];
    let d;
    return e[3] !== r || e[4] !== o ? (d = [
        r,
        o
    ], e[3] = r, e[4] = o, e[5] = d) : d = e[5], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(n, d), null;
}
function fn(t) {
    let e = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_TYPE_TO_FORMAT"]), o = new Set(t);
    return e.filter((r)=>!o.has(r));
}
;
;
;
;
;
;
function Et(t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(5), { className: o, editorConfig: r } = t, { t: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$WDZJLNNB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])(), [, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), { getTheme: l } = d, i;
    if (e[0] !== o || e[1] !== r?.admin?.placeholder || e[2] !== l || e[3] !== n) {
        let a = l();
        i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalContentEditable$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentEditable"], {
            "aria-placeholder": n("lexical:general:placeholder"),
            className: o ?? "ContentEditable__root",
            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: a?.placeholder,
                children: r?.admin?.placeholder ?? n("lexical:general:placeholder")
            })
        }), e[0] = o, e[1] = r?.admin?.placeholder, e[2] = l, e[3] = n, e[4] = i;
    } else i = e[4];
    return i;
}
var bt = (t)=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13), { editorConfig: o, editorContainerRef: r, isSmallWidthViewport: n, onChange: d, rtl: l } = t, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), [a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])(), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$useLexicalEditable$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLexicalEditable"])(), [m, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), s;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (u)=>{
        u !== null && c(u);
    }, e[0] = s) : s = e[0];
    let h = s, x, g;
    e[1] !== a || e[2] !== i ? (x = ()=>{
        if (!i?.uuid) {
            console.error("Lexical Editor must be used within an EditorConfigProvider");
            return;
        }
        i?.parentEditor?.uuid && i.parentEditor?.registerChild(i.uuid, i);
        let u = ()=>{
            i.focusEditor(i);
        }, p = ()=>{
            i.blurEditor(i);
        }, E = a.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOCUS_COMMAND"], ()=>(u(), !0), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), T = a.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BLUR_COMMAND"], ()=>(p(), !0), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]);
        return ()=>{
            E(), T(), i.parentEditor?.unregisterChild?.(i.uuid);
        };
    }, g = [
        a,
        i
    ], e[1] = a, e[2] = i, e[3] = x, e[4] = g) : (x = e[3], g = e[4]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(x, g);
    let y;
    return e[5] !== o || e[6] !== r || e[7] !== m || e[8] !== f || e[9] !== n || e[10] !== d || e[11] !== l ? (y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            o.features.plugins?.map(Tn),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "editor-container",
                dir: l ? "rtl" : void 0,
                ref: r,
                children: [
                    o.features.plugins?.map(Dn),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalRichTextPlugin$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTextPlugin"], {
                        contentEditable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "editor-scroller",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: "editor",
                                ref: h,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Et, {
                                    editorConfig: o
                                })
                            })
                        }),
                        ErrorBoundary: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalErrorBoundary$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LexicalErrorBoundary"]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(dt, {}),
                    f && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(lt, {}),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(je, {}),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])($e, {}),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(yt, {
                        features: o.features
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ut, {}),
                    f && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalOnChangePlugin$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OnChangePlugin"], {
                        ignoreSelectionChange: !0,
                        onChange: (u, p, E)=>{
                            (!E.has("focus") || E.size > 1) && d?.(u, p, E);
                        }
                    }),
                    m && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            !n && f && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    o.admin?.hideDraggableBlockElement ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(it, {
                                        anchorElem: m
                                    }),
                                    o.admin?.hideAddBlockButton ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Je, {
                                        anchorElem: m
                                    })
                                ]
                            }),
                            o.features.plugins?.map((u)=>{
                                if (u.position === "floatingAnchorElem" && !(u.desktopOnly === !0 && n)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])($, {
                                    anchorElem: m,
                                    clientProps: u.clientProps,
                                    plugin: u
                                }, u.key);
                            }),
                            f && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ht, {
                                    anchorElem: m
                                })
                            })
                        ]
                    }),
                    f && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalHistoryPlugin$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HistoryPlugin"], {}),
                            o?.features?.markdownTransformers?.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ct, {})
                        ]
                    }),
                    o.features.plugins?.map(Ln),
                    o.features.plugins?.map(vn)
                ]
            }),
            o.features.plugins?.map(Mn)
        ]
    }), e[5] = o, e[6] = r, e[7] = m, e[8] = f, e[9] = n, e[10] = d, e[11] = l, e[12] = y) : y = e[12], y;
};
function Tn(t) {
    if (t.position === "aboveContainer") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])($, {
        clientProps: t.clientProps,
        plugin: t
    }, t.key);
}
function Dn(t) {
    if (t.position === "top") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])($, {
        clientProps: t.clientProps,
        plugin: t
    }, t.key);
}
function Ln(t) {
    if (t.position === "normal") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])($, {
        clientProps: t.clientProps,
        plugin: t
    }, t.key);
}
function vn(t) {
    if (t.position === "bottom") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])($, {
        clientProps: t.clientProps,
        plugin: t
    }, t.key);
}
function Mn(t) {
    if (t.position === "belowContainer") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])($, {
        clientProps: t.clientProps,
        plugin: t
    }, t.key);
}
var St = ({ children: t, providers: e })=>{
    if (!e?.length) return t;
    let o = e[0];
    return e.length > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(o, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(St, {
            providers: e.slice(1),
            children: t
        })
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(o, {
        children: t
    });
}, Pt = (t)=>{
    let { composerKey: e, editorConfig: o, fieldProps: r, isSmallWidthViewport: n, onChange: d, readOnly: l, rtl: i, value: a } = t, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditDepth"])(), c = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (a && typeof a != "object") throw new Error("The value passed to the Lexical editor is not an object. This is not supported. Please remove the data from the field and start again. This is the value that was passed in: " + JSON.stringify(a));
        if (a && Array.isArray(a) && !("root" in a)) throw new Error("You have tried to pass in data from the old Slate editor to the new Lexical editor. The data structure is different, thus you will have to migrate your data. We offer a one-line migration script which migrates all your rich text fields: https://payloadcms.com/docs/lexical/migration#migration-via-migration-script-recommended");
        if (a && "jsonContent" in a) throw new Error("You have tried to pass in data from payload-plugin-lexical. The data structure is different, thus you will have to migrate your data. Migration guide: https://payloadcms.com/docs/lexical/migration#migrating-from-payload-plugin-lexical");
        return {
            editable: l !== !0,
            editorState: a != null ? JSON.stringify(a) : void 0,
            namespace: o.lexical.namespace,
            nodes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])({
                editorConfig: o
            }),
            onError: (h)=>{
                throw h;
            },
            theme: o.lexical.theme
        };
    }, [
        o
    ]);
    return s ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposer$2e$dev$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LexicalComposer"], {
        initialConfig: s,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$BZZVLW4U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"], {
            editorConfig: o,
            editorContainerRef: c,
            fieldProps: r,
            parentContext: f?.editDepth === m ? f : void 0,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(St, {
                providers: o.features.providers,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(bt, {
                    editorConfig: o,
                    editorContainerRef: c,
                    isSmallWidthViewport: n,
                    onChange: d,
                    rtl: i
                })
            })
        })
    }, e + s.editable) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
        children: "Loading..."
    });
};
var pe = "rich-text-lexical", qn = (t)=>{
    let { editorConfig: e, field: o, field: { admin: { className: r, description: n, readOnly: d } = {}, label: l, localized: i, required: a }, path: f, readOnly: m, validate: c } = t, s = m || d, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocale"])(), { config: { localization: x } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$J46CQZ3T$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])(), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFieldRTL"])({
        fieldLocalized: i,
        locale: h,
        localizationConfig: x || void 0
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditDepth"])(), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((v, Q)=>typeof c == "function" ? c(v, {
            ...Q,
            required: a
        }) : !0, [
        c,
        a
    ]), { customComponents: { AfterInput: p, BeforeInput: E, Description: T, Error: R, Label: P } = {}, disabled: D, initialValue: b, path: L, setValue: B, showError: O, value: w } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useField"])({
        potentiallyStalePath: f,
        validate: u
    }), z = s || D, [W, Se] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [he, Pe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(), oe = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(b), k = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(w);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let v = ()=>{
            let Q = window.matchMedia("(max-width: 768px)").matches;
            Q !== W && Se(Q);
        };
        return v(), window.addEventListener("resize", v), ()=>{
            window.removeEventListener("resize", v);
        };
    }, [
        W
    ]);
    let N = [
        pe,
        "field-type",
        r,
        O && "error",
        z && `${pe}--read-only`,
        e?.admin?.hideGutter !== !0 && !W ? `${pe}--show-gutter` : null
    ].filter(Boolean).join(" "), Re = `${L}.${y}`, we = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$chunk$2d$EZX4YW7S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(), Lt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((v)=>{
        we(()=>{
            let ke = v.toJSON();
            k.current = ke, B(ke);
        });
    }, [
        B,
        we
    ]), vt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mergeFieldStyles"])(o), [
        o
    ]), Mt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEffectEvent"])((v)=>{
        k.current !== w && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequal"])(k.current != null ? JSON.parse(JSON.stringify(k.current)) : k.current, w) && (oe.current = v, k.current = w, Pe(new Date));
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        Object.is(b, oe.current) || Mt(b);
    }, [
        b
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: N,
        style: vt,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RenderCustomComponent"], {
                CustomComponent: R,
                Fallback: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FieldError"], {
                    path: L,
                    showError: O
                })
            }),
            P || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FieldLabel"], {
                label: l,
                localized: i,
                path: L,
                required: a
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${pe}__wrap`,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
                        fallbackRender: Qn,
                        onReset: ()=>{},
                        children: [
                            E,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BulkUploadProvider"], {
                                drawerSlugPrefix: L,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Pt, {
                                    composerKey: Re,
                                    editorConfig: e,
                                    fieldProps: t,
                                    isSmallWidthViewport: W,
                                    onChange: Lt,
                                    readOnly: z,
                                    rtl: g,
                                    value: w
                                }, JSON.stringify({
                                    path: L,
                                    rerenderProviderKey: he
                                }))
                            }),
                            p
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RenderCustomComponent"], {
                        CustomComponent: T,
                        Fallback: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FieldDescription"], {
                            description: n,
                            path: L
                        })
                    })
                ]
            })
        ]
    }, Re);
};
function Qn({ error: t }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "errorBoundary",
        role: "alert",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                children: "Something went wrong:"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("pre", {
                style: {
                    color: "red"
                },
                children: t.message
            })
        ]
    });
}
var Ws = qn;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=0tbb_04903zs._.js.map