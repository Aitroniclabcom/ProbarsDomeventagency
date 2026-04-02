module.exports = [
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/cell/rscEntry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "RscEntryLexicalCell",
    ()=>RscEntryLexicalCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function recurseEditorState(editorState, textContent, i = 0) {
    for (const node of editorState){
        i++;
        if ('text' in node && node.text) {
            textContent.push(node.text);
        } else {
            if (!('children' in node)) {
                textContent.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("code", {
                    children: [
                        " [",
                        node.type,
                        "]"
                    ]
                }, i));
            }
        }
        if ('children' in node && node.children) {
            textContent = recurseEditorState(node.children, textContent, i);
        }
    }
    return textContent;
}
const RscEntryLexicalCell = (props)=>{
    const { cellData, className: classNameFromProps, collectionConfig, field: { admin }, field, i18n, link, onClick: onClickFromProps, payload, rowData } = props;
    const classNameFromConfigContext = admin && 'className' in admin ? admin.className : undefined;
    const className = classNameFromProps || (field.admin && 'className' in field.admin ? field.admin.className : null) || classNameFromConfigContext;
    const adminRoute = payload.config.routes.admin;
    const serverURL = payload.config.serverURL;
    const onClick = onClickFromProps;
    let WrapElement = 'span';
    const wrapElementProps = {
        className
    };
    if (link) {
        wrapElementProps.prefetch = false;
        WrapElement = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"];
        wrapElementProps.href = collectionConfig?.slug ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["formatAdminURL"])({
            adminRoute,
            path: `/collections/${collectionConfig?.slug}/${rowData.id}`,
            serverURL
        }) : '';
    }
    if (typeof onClick === 'function') {
        WrapElement = 'button';
        wrapElementProps.type = 'button';
        wrapElementProps.onClick = ()=>{
            onClick({
                cellData,
                collectionSlug: collectionConfig?.slug,
                rowData
            });
        };
    }
    let textContent = [];
    if (cellData?.root?.children) {
        textContent = recurseEditorState(cellData?.root?.children, textContent);
    }
    if (!textContent?.length) {
        textContent = [
            i18n.t('general:noLabel', {
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(('label' in field ? field.label : null) || 'data', i18n)
            })
        ];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(WrapElement, {
        ...wrapElementProps,
        children: textContent
    });
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$createAutoLinkNode",
    ()=>$createAutoLinkNode,
    "$createBlockNode",
    ()=>$createBlockNode,
    "$createHorizontalRuleNode",
    ()=>$createHorizontalRuleNode,
    "$createInlineBlockNode",
    ()=>$createInlineBlockNode,
    "$createLinkNode",
    ()=>$createLinkNode,
    "$createRelationshipNode",
    ()=>$createRelationshipNode,
    "$createUploadNode",
    ()=>$createUploadNode,
    "$isAutoLinkNode",
    ()=>$isAutoLinkNode,
    "$isBlockNode",
    ()=>$isBlockNode,
    "$isHorizontalRuleNode",
    ()=>$isHorizontalRuleNode,
    "$isInlineBlockNode",
    ()=>$isInlineBlockNode,
    "$isLinkNode",
    ()=>$isLinkNode,
    "$isRelationshipNode",
    ()=>$isRelationshipNode,
    "$isUploadNode",
    ()=>$isUploadNode,
    "AlignFeatureClient",
    ()=>AlignFeatureClient,
    "AutoLinkNode",
    ()=>AutoLinkNode,
    "BlockCollapsible",
    ()=>BlockCollapsible,
    "BlockEditButton",
    ()=>BlockEditButton,
    "BlockNode",
    ()=>BlockNode,
    "BlockRemoveButton",
    ()=>BlockRemoveButton,
    "BlockquoteFeatureClient",
    ()=>BlockquoteFeatureClient,
    "BlocksFeatureClient",
    ()=>BlocksFeatureClient,
    "BoldFeatureClient",
    ()=>BoldFeatureClient,
    "CAN_USE_DOM",
    ()=>CAN_USE_DOM,
    "ChecklistFeatureClient",
    ()=>ChecklistFeatureClient,
    "CodeBlockBlockComponent",
    ()=>CodeBlockBlockComponent,
    "CodeComponent",
    ()=>CodeComponent,
    "DETAIL_TYPE_TO_DETAIL",
    ()=>DETAIL_TYPE_TO_DETAIL,
    "DOUBLE_LINE_BREAK",
    ()=>DOUBLE_LINE_BREAK,
    "DebugJsxConverterFeatureClient",
    ()=>DebugJsxConverterFeatureClient,
    "ELEMENT_FORMAT_TO_TYPE",
    ()=>ELEMENT_FORMAT_TO_TYPE,
    "ELEMENT_TYPE_TO_FORMAT",
    ()=>ELEMENT_TYPE_TO_FORMAT,
    "ENABLE_SLASH_MENU_COMMAND",
    ()=>ENABLE_SLASH_MENU_COMMAND,
    "EditorConfigProvider",
    ()=>EditorConfigProvider,
    "FieldsDrawer",
    ()=>FieldsDrawer,
    "FixedToolbarFeatureClient",
    ()=>FixedToolbarFeatureClient,
    "HeadingFeatureClient",
    ()=>HeadingFeatureClient,
    "HorizontalRuleFeatureClient",
    ()=>HorizontalRuleFeatureClient,
    "HorizontalRuleNode",
    ()=>HorizontalRuleNode,
    "INSERT_BLOCK_COMMAND",
    ()=>INSERT_BLOCK_COMMAND,
    "INSERT_INLINE_BLOCK_COMMAND",
    ()=>INSERT_INLINE_BLOCK_COMMAND,
    "IS_ALL_FORMATTING",
    ()=>IS_ALL_FORMATTING,
    "IndentFeatureClient",
    ()=>IndentFeatureClient,
    "InlineBlockContainer",
    ()=>InlineBlockContainer,
    "InlineBlockEditButton",
    ()=>InlineBlockEditButton,
    "InlineBlockLabel",
    ()=>InlineBlockLabel,
    "InlineBlockNode",
    ()=>InlineBlockNode,
    "InlineBlockRemoveButton",
    ()=>InlineBlockRemoveButton,
    "InlineCodeFeatureClient",
    ()=>InlineCodeFeatureClient,
    "InlineToolbarFeatureClient",
    ()=>InlineToolbarFeatureClient,
    "ItalicFeatureClient",
    ()=>ItalicFeatureClient,
    "LTR_REGEX",
    ()=>LTR_REGEX,
    "LexicalPluginToLexicalFeatureClient",
    ()=>LexicalPluginToLexicalFeatureClient,
    "LinkFeatureClient",
    ()=>LinkFeatureClient,
    "LinkNode",
    ()=>LinkNode,
    "NON_BREAKING_SPACE",
    ()=>NON_BREAKING_SPACE,
    "NodeFormat",
    ()=>NodeFormat,
    "OrderedListFeatureClient",
    ()=>OrderedListFeatureClient,
    "ParagraphFeatureClient",
    ()=>ParagraphFeatureClient,
    "Point",
    ()=>Point,
    "RTL_REGEX",
    ()=>RTL_REGEX,
    "Rect",
    ()=>Rect,
    "RelationshipFeatureClient",
    ()=>RelationshipFeatureClient,
    "RelationshipNode",
    ()=>RelationshipNode,
    "RenderLexical",
    ()=>RenderLexical,
    "RichTextField",
    ()=>RichTextField,
    "SlateToLexicalFeatureClient",
    ()=>SlateToLexicalFeatureClient,
    "StrikethroughFeatureClient",
    ()=>StrikethroughFeatureClient,
    "SubscriptFeatureClient",
    ()=>SubscriptFeatureClient,
    "SuperscriptFeatureClient",
    ()=>SuperscriptFeatureClient,
    "TEXT_MODE_TO_TYPE",
    ()=>TEXT_MODE_TO_TYPE,
    "TEXT_TYPE_TO_FORMAT",
    ()=>TEXT_TYPE_TO_FORMAT,
    "TEXT_TYPE_TO_MODE",
    ()=>TEXT_TYPE_TO_MODE,
    "TOGGLE_LINK_COMMAND",
    ()=>TOGGLE_LINK_COMMAND,
    "TableFeatureClient",
    ()=>TableFeatureClient,
    "TestRecorderFeatureClient",
    ()=>TestRecorderFeatureClient,
    "TextStateFeatureClient",
    ()=>TextStateFeatureClient,
    "ToolbarButton",
    ()=>ToolbarButton,
    "ToolbarDropdown",
    ()=>ToolbarDropdown,
    "TreeViewFeatureClient",
    ()=>TreeViewFeatureClient,
    "UnderlineFeatureClient",
    ()=>UnderlineFeatureClient,
    "UnorderedListFeatureClient",
    ()=>UnorderedListFeatureClient,
    "UploadFeatureClient",
    ()=>UploadFeatureClient,
    "UploadNode",
    ()=>UploadNode,
    "addSwipeDownListener",
    ()=>addSwipeDownListener,
    "addSwipeLeftListener",
    ()=>addSwipeLeftListener,
    "addSwipeRightListener",
    ()=>addSwipeRightListener,
    "addSwipeUpListener",
    ()=>addSwipeUpListener,
    "buildDefaultEditorState",
    ()=>buildDefaultEditorState,
    "buildEditorState",
    ()=>buildEditorState,
    "codeConverterClient",
    ()=>codeConverterClient,
    "createBlockNode",
    ()=>createBlockNode,
    "createClientFeature",
    ()=>createClientFeature,
    "defaultColors",
    ()=>defaultColors,
    "defaultEditorLexicalConfig",
    ()=>defaultEditorLexicalConfig,
    "getDOMRangeRect",
    ()=>getDOMRangeRect,
    "getEnabledNodes",
    ()=>getEnabledNodes,
    "getRestPopulateFn",
    ()=>getRestPopulateFn,
    "getSelectedNode",
    ()=>getSelectedNode,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isPoint",
    ()=>isPoint,
    "joinClasses",
    ()=>joinClasses,
    "sanitizeClientEditorConfig",
    ()=>sanitizeClientEditorConfig,
    "sanitizeClientFeatures",
    ()=>sanitizeClientFeatures,
    "setFloatingElemPosition",
    ()=>setFloatingElemPosition,
    "setFloatingElemPositionForLinkEditor",
    ()=>setFloatingElemPositionForLinkEditor,
    "slashMenuBasicGroupWithItems",
    ()=>slashMenuBasicGroupWithItems,
    "toolbarAddDropdownGroupWithItems",
    ()=>toolbarAddDropdownGroupWithItems,
    "toolbarFeatureButtonsGroupWithItems",
    ()=>toolbarFeatureButtonsGroupWithItems,
    "toolbarFormatGroupWithItems",
    ()=>toolbarFormatGroupWithItems,
    "toolbarTextDropdownGroupWithItems",
    ()=>toolbarTextDropdownGroupWithItems,
    "useBlockComponentContext",
    ()=>useBlockComponentContext,
    "useEditorConfigContext",
    ()=>useEditorConfigContext,
    "useInlineBlockComponentContext",
    ()=>useInlineBlockComponentContext,
    "useLexicalDocumentDrawer",
    ()=>useLexicalDocumentDrawer,
    "useLexicalDrawer",
    ()=>useLexicalDrawer,
    "useLexicalListDrawer",
    ()=>useLexicalListDrawer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const $createAutoLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createAutoLinkNode() from the server but $createAutoLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$createAutoLinkNode");
const $createBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createBlockNode() from the server but $createBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$createBlockNode");
const $createHorizontalRuleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createHorizontalRuleNode() from the server but $createHorizontalRuleNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$createHorizontalRuleNode");
const $createInlineBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createInlineBlockNode() from the server but $createInlineBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$createInlineBlockNode");
const $createLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createLinkNode() from the server but $createLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$createLinkNode");
const $createRelationshipNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createRelationshipNode() from the server but $createRelationshipNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$createRelationshipNode");
const $createUploadNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createUploadNode() from the server but $createUploadNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$createUploadNode");
const $isAutoLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isAutoLinkNode() from the server but $isAutoLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$isAutoLinkNode");
const $isBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isBlockNode() from the server but $isBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$isBlockNode");
const $isHorizontalRuleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isHorizontalRuleNode() from the server but $isHorizontalRuleNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$isHorizontalRuleNode");
const $isInlineBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isInlineBlockNode() from the server but $isInlineBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$isInlineBlockNode");
const $isLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isLinkNode() from the server but $isLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$isLinkNode");
const $isRelationshipNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isRelationshipNode() from the server but $isRelationshipNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$isRelationshipNode");
const $isUploadNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isUploadNode() from the server but $isUploadNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "$isUploadNode");
const AlignFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AlignFeatureClient() from the server but AlignFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "AlignFeatureClient");
const AutoLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AutoLinkNode() from the server but AutoLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "AutoLinkNode");
const BlockCollapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockCollapsible() from the server but BlockCollapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "BlockCollapsible");
const BlockEditButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockEditButton() from the server but BlockEditButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "BlockEditButton");
const BlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockNode() from the server but BlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "BlockNode");
const BlockRemoveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockRemoveButton() from the server but BlockRemoveButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "BlockRemoveButton");
const BlockquoteFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockquoteFeatureClient() from the server but BlockquoteFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "BlockquoteFeatureClient");
const BlocksFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlocksFeatureClient() from the server but BlocksFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "BlocksFeatureClient");
const BoldFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BoldFeatureClient() from the server but BoldFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "BoldFeatureClient");
const CAN_USE_DOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CAN_USE_DOM() from the server but CAN_USE_DOM is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "CAN_USE_DOM");
const ChecklistFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ChecklistFeatureClient() from the server but ChecklistFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ChecklistFeatureClient");
const CodeBlockBlockComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeBlockBlockComponent() from the server but CodeBlockBlockComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "CodeBlockBlockComponent");
const CodeComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeComponent() from the server but CodeComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "CodeComponent");
const DETAIL_TYPE_TO_DETAIL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DETAIL_TYPE_TO_DETAIL() from the server but DETAIL_TYPE_TO_DETAIL is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "DETAIL_TYPE_TO_DETAIL");
const DOUBLE_LINE_BREAK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DOUBLE_LINE_BREAK() from the server but DOUBLE_LINE_BREAK is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "DOUBLE_LINE_BREAK");
const DebugJsxConverterFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DebugJsxConverterFeatureClient() from the server but DebugJsxConverterFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "DebugJsxConverterFeatureClient");
const ELEMENT_FORMAT_TO_TYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ELEMENT_FORMAT_TO_TYPE() from the server but ELEMENT_FORMAT_TO_TYPE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ELEMENT_FORMAT_TO_TYPE");
const ELEMENT_TYPE_TO_FORMAT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ELEMENT_TYPE_TO_FORMAT() from the server but ELEMENT_TYPE_TO_FORMAT is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ELEMENT_TYPE_TO_FORMAT");
const ENABLE_SLASH_MENU_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ENABLE_SLASH_MENU_COMMAND() from the server but ENABLE_SLASH_MENU_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ENABLE_SLASH_MENU_COMMAND");
const EditorConfigProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditorConfigProvider() from the server but EditorConfigProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "EditorConfigProvider");
const FieldsDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldsDrawer() from the server but FieldsDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "FieldsDrawer");
const FixedToolbarFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FixedToolbarFeatureClient() from the server but FixedToolbarFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "FixedToolbarFeatureClient");
const HeadingFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeadingFeatureClient() from the server but HeadingFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "HeadingFeatureClient");
const HorizontalRuleFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HorizontalRuleFeatureClient() from the server but HorizontalRuleFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "HorizontalRuleFeatureClient");
const HorizontalRuleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HorizontalRuleNode() from the server but HorizontalRuleNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "HorizontalRuleNode");
const INSERT_BLOCK_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call INSERT_BLOCK_COMMAND() from the server but INSERT_BLOCK_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "INSERT_BLOCK_COMMAND");
const INSERT_INLINE_BLOCK_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call INSERT_INLINE_BLOCK_COMMAND() from the server but INSERT_INLINE_BLOCK_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "INSERT_INLINE_BLOCK_COMMAND");
const IS_ALL_FORMATTING = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IS_ALL_FORMATTING() from the server but IS_ALL_FORMATTING is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "IS_ALL_FORMATTING");
const IndentFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IndentFeatureClient() from the server but IndentFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "IndentFeatureClient");
const InlineBlockContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockContainer() from the server but InlineBlockContainer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "InlineBlockContainer");
const InlineBlockEditButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockEditButton() from the server but InlineBlockEditButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "InlineBlockEditButton");
const InlineBlockLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockLabel() from the server but InlineBlockLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "InlineBlockLabel");
const InlineBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockNode() from the server but InlineBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "InlineBlockNode");
const InlineBlockRemoveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockRemoveButton() from the server but InlineBlockRemoveButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "InlineBlockRemoveButton");
const InlineCodeFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineCodeFeatureClient() from the server but InlineCodeFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "InlineCodeFeatureClient");
const InlineToolbarFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineToolbarFeatureClient() from the server but InlineToolbarFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "InlineToolbarFeatureClient");
const ItalicFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ItalicFeatureClient() from the server but ItalicFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ItalicFeatureClient");
const LTR_REGEX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LTR_REGEX() from the server but LTR_REGEX is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "LTR_REGEX");
const LexicalPluginToLexicalFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LexicalPluginToLexicalFeatureClient() from the server but LexicalPluginToLexicalFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "LexicalPluginToLexicalFeatureClient");
const LinkFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkFeatureClient() from the server but LinkFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "LinkFeatureClient");
const LinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkNode() from the server but LinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "LinkNode");
const NON_BREAKING_SPACE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NON_BREAKING_SPACE() from the server but NON_BREAKING_SPACE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "NON_BREAKING_SPACE");
const NodeFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeFormat() from the server but NodeFormat is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "NodeFormat");
const OrderedListFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OrderedListFeatureClient() from the server but OrderedListFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "OrderedListFeatureClient");
const ParagraphFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ParagraphFeatureClient() from the server but ParagraphFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ParagraphFeatureClient");
const Point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Point() from the server but Point is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "Point");
const RTL_REGEX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RTL_REGEX() from the server but RTL_REGEX is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "RTL_REGEX");
const Rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Rect() from the server but Rect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "Rect");
const RelationshipFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipFeatureClient() from the server but RelationshipFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "RelationshipFeatureClient");
const RelationshipNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipNode() from the server but RelationshipNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "RelationshipNode");
const RenderLexical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderLexical() from the server but RenderLexical is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "RenderLexical");
const RichTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RichTextField() from the server but RichTextField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "RichTextField");
const SlateToLexicalFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SlateToLexicalFeatureClient() from the server but SlateToLexicalFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "SlateToLexicalFeatureClient");
const StrikethroughFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StrikethroughFeatureClient() from the server but StrikethroughFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "StrikethroughFeatureClient");
const SubscriptFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SubscriptFeatureClient() from the server but SubscriptFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "SubscriptFeatureClient");
const SuperscriptFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SuperscriptFeatureClient() from the server but SuperscriptFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "SuperscriptFeatureClient");
const TEXT_MODE_TO_TYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TEXT_MODE_TO_TYPE() from the server but TEXT_MODE_TO_TYPE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TEXT_MODE_TO_TYPE");
const TEXT_TYPE_TO_FORMAT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TEXT_TYPE_TO_FORMAT() from the server but TEXT_TYPE_TO_FORMAT is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TEXT_TYPE_TO_FORMAT");
const TEXT_TYPE_TO_MODE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TEXT_TYPE_TO_MODE() from the server but TEXT_TYPE_TO_MODE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TEXT_TYPE_TO_MODE");
const TOGGLE_LINK_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TOGGLE_LINK_COMMAND() from the server but TOGGLE_LINK_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TOGGLE_LINK_COMMAND");
const TableFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFeatureClient() from the server but TableFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TableFeatureClient");
const TestRecorderFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestRecorderFeatureClient() from the server but TestRecorderFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TestRecorderFeatureClient");
const TextStateFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextStateFeatureClient() from the server but TextStateFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TextStateFeatureClient");
const ToolbarButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToolbarButton() from the server but ToolbarButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ToolbarButton");
const ToolbarDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToolbarDropdown() from the server but ToolbarDropdown is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "ToolbarDropdown");
const TreeViewFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TreeViewFeatureClient() from the server but TreeViewFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "TreeViewFeatureClient");
const UnderlineFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UnderlineFeatureClient() from the server but UnderlineFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "UnderlineFeatureClient");
const UnorderedListFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UnorderedListFeatureClient() from the server but UnorderedListFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "UnorderedListFeatureClient");
const UploadFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadFeatureClient() from the server but UploadFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "UploadFeatureClient");
const UploadNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadNode() from the server but UploadNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "UploadNode");
const addSwipeDownListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeDownListener() from the server but addSwipeDownListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "addSwipeDownListener");
const addSwipeLeftListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeLeftListener() from the server but addSwipeLeftListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "addSwipeLeftListener");
const addSwipeRightListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeRightListener() from the server but addSwipeRightListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "addSwipeRightListener");
const addSwipeUpListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeUpListener() from the server but addSwipeUpListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "addSwipeUpListener");
const buildDefaultEditorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call buildDefaultEditorState() from the server but buildDefaultEditorState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "buildDefaultEditorState");
const buildEditorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call buildEditorState() from the server but buildEditorState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "buildEditorState");
const codeConverterClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call codeConverterClient() from the server but codeConverterClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "codeConverterClient");
const createBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call createBlockNode() from the server but createBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "createBlockNode");
const createClientFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call createClientFeature() from the server but createClientFeature is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "createClientFeature");
const defaultColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call defaultColors() from the server but defaultColors is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "defaultColors");
const defaultEditorLexicalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call defaultEditorLexicalConfig() from the server but defaultEditorLexicalConfig is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "defaultEditorLexicalConfig");
const getDOMRangeRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getDOMRangeRect() from the server but getDOMRangeRect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "getDOMRangeRect");
const getEnabledNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getEnabledNodes() from the server but getEnabledNodes is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "getEnabledNodes");
const getRestPopulateFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getRestPopulateFn() from the server but getRestPopulateFn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "getRestPopulateFn");
const getSelectedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getSelectedNode() from the server but getSelectedNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "getSelectedNode");
const isHTMLElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isHTMLElement() from the server but isHTMLElement is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "isHTMLElement");
const isPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isPoint() from the server but isPoint is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "isPoint");
const joinClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call joinClasses() from the server but joinClasses is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "joinClasses");
const sanitizeClientEditorConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call sanitizeClientEditorConfig() from the server but sanitizeClientEditorConfig is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "sanitizeClientEditorConfig");
const sanitizeClientFeatures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call sanitizeClientFeatures() from the server but sanitizeClientFeatures is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "sanitizeClientFeatures");
const setFloatingElemPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call setFloatingElemPosition() from the server but setFloatingElemPosition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "setFloatingElemPosition");
const setFloatingElemPositionForLinkEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call setFloatingElemPositionForLinkEditor() from the server but setFloatingElemPositionForLinkEditor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "setFloatingElemPositionForLinkEditor");
const slashMenuBasicGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call slashMenuBasicGroupWithItems() from the server but slashMenuBasicGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "slashMenuBasicGroupWithItems");
const toolbarAddDropdownGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarAddDropdownGroupWithItems() from the server but toolbarAddDropdownGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "toolbarAddDropdownGroupWithItems");
const toolbarFeatureButtonsGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarFeatureButtonsGroupWithItems() from the server but toolbarFeatureButtonsGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "toolbarFeatureButtonsGroupWithItems");
const toolbarFormatGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarFormatGroupWithItems() from the server but toolbarFormatGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "toolbarFormatGroupWithItems");
const toolbarTextDropdownGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarTextDropdownGroupWithItems() from the server but toolbarTextDropdownGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "toolbarTextDropdownGroupWithItems");
const useBlockComponentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBlockComponentContext() from the server but useBlockComponentContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "useBlockComponentContext");
const useEditorConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEditorConfigContext() from the server but useEditorConfigContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "useEditorConfigContext");
const useInlineBlockComponentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useInlineBlockComponentContext() from the server but useInlineBlockComponentContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "useInlineBlockComponentContext");
const useLexicalDocumentDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLexicalDocumentDrawer() from the server but useLexicalDocumentDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "useLexicalDocumentDrawer");
const useLexicalDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLexicalDrawer() from the server but useLexicalDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "useLexicalDrawer");
const useLexicalListDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLexicalListDrawer() from the server but useLexicalListDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js <module evaluation>", "useLexicalListDrawer");
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$createAutoLinkNode",
    ()=>$createAutoLinkNode,
    "$createBlockNode",
    ()=>$createBlockNode,
    "$createHorizontalRuleNode",
    ()=>$createHorizontalRuleNode,
    "$createInlineBlockNode",
    ()=>$createInlineBlockNode,
    "$createLinkNode",
    ()=>$createLinkNode,
    "$createRelationshipNode",
    ()=>$createRelationshipNode,
    "$createUploadNode",
    ()=>$createUploadNode,
    "$isAutoLinkNode",
    ()=>$isAutoLinkNode,
    "$isBlockNode",
    ()=>$isBlockNode,
    "$isHorizontalRuleNode",
    ()=>$isHorizontalRuleNode,
    "$isInlineBlockNode",
    ()=>$isInlineBlockNode,
    "$isLinkNode",
    ()=>$isLinkNode,
    "$isRelationshipNode",
    ()=>$isRelationshipNode,
    "$isUploadNode",
    ()=>$isUploadNode,
    "AlignFeatureClient",
    ()=>AlignFeatureClient,
    "AutoLinkNode",
    ()=>AutoLinkNode,
    "BlockCollapsible",
    ()=>BlockCollapsible,
    "BlockEditButton",
    ()=>BlockEditButton,
    "BlockNode",
    ()=>BlockNode,
    "BlockRemoveButton",
    ()=>BlockRemoveButton,
    "BlockquoteFeatureClient",
    ()=>BlockquoteFeatureClient,
    "BlocksFeatureClient",
    ()=>BlocksFeatureClient,
    "BoldFeatureClient",
    ()=>BoldFeatureClient,
    "CAN_USE_DOM",
    ()=>CAN_USE_DOM,
    "ChecklistFeatureClient",
    ()=>ChecklistFeatureClient,
    "CodeBlockBlockComponent",
    ()=>CodeBlockBlockComponent,
    "CodeComponent",
    ()=>CodeComponent,
    "DETAIL_TYPE_TO_DETAIL",
    ()=>DETAIL_TYPE_TO_DETAIL,
    "DOUBLE_LINE_BREAK",
    ()=>DOUBLE_LINE_BREAK,
    "DebugJsxConverterFeatureClient",
    ()=>DebugJsxConverterFeatureClient,
    "ELEMENT_FORMAT_TO_TYPE",
    ()=>ELEMENT_FORMAT_TO_TYPE,
    "ELEMENT_TYPE_TO_FORMAT",
    ()=>ELEMENT_TYPE_TO_FORMAT,
    "ENABLE_SLASH_MENU_COMMAND",
    ()=>ENABLE_SLASH_MENU_COMMAND,
    "EditorConfigProvider",
    ()=>EditorConfigProvider,
    "FieldsDrawer",
    ()=>FieldsDrawer,
    "FixedToolbarFeatureClient",
    ()=>FixedToolbarFeatureClient,
    "HeadingFeatureClient",
    ()=>HeadingFeatureClient,
    "HorizontalRuleFeatureClient",
    ()=>HorizontalRuleFeatureClient,
    "HorizontalRuleNode",
    ()=>HorizontalRuleNode,
    "INSERT_BLOCK_COMMAND",
    ()=>INSERT_BLOCK_COMMAND,
    "INSERT_INLINE_BLOCK_COMMAND",
    ()=>INSERT_INLINE_BLOCK_COMMAND,
    "IS_ALL_FORMATTING",
    ()=>IS_ALL_FORMATTING,
    "IndentFeatureClient",
    ()=>IndentFeatureClient,
    "InlineBlockContainer",
    ()=>InlineBlockContainer,
    "InlineBlockEditButton",
    ()=>InlineBlockEditButton,
    "InlineBlockLabel",
    ()=>InlineBlockLabel,
    "InlineBlockNode",
    ()=>InlineBlockNode,
    "InlineBlockRemoveButton",
    ()=>InlineBlockRemoveButton,
    "InlineCodeFeatureClient",
    ()=>InlineCodeFeatureClient,
    "InlineToolbarFeatureClient",
    ()=>InlineToolbarFeatureClient,
    "ItalicFeatureClient",
    ()=>ItalicFeatureClient,
    "LTR_REGEX",
    ()=>LTR_REGEX,
    "LexicalPluginToLexicalFeatureClient",
    ()=>LexicalPluginToLexicalFeatureClient,
    "LinkFeatureClient",
    ()=>LinkFeatureClient,
    "LinkNode",
    ()=>LinkNode,
    "NON_BREAKING_SPACE",
    ()=>NON_BREAKING_SPACE,
    "NodeFormat",
    ()=>NodeFormat,
    "OrderedListFeatureClient",
    ()=>OrderedListFeatureClient,
    "ParagraphFeatureClient",
    ()=>ParagraphFeatureClient,
    "Point",
    ()=>Point,
    "RTL_REGEX",
    ()=>RTL_REGEX,
    "Rect",
    ()=>Rect,
    "RelationshipFeatureClient",
    ()=>RelationshipFeatureClient,
    "RelationshipNode",
    ()=>RelationshipNode,
    "RenderLexical",
    ()=>RenderLexical,
    "RichTextField",
    ()=>RichTextField,
    "SlateToLexicalFeatureClient",
    ()=>SlateToLexicalFeatureClient,
    "StrikethroughFeatureClient",
    ()=>StrikethroughFeatureClient,
    "SubscriptFeatureClient",
    ()=>SubscriptFeatureClient,
    "SuperscriptFeatureClient",
    ()=>SuperscriptFeatureClient,
    "TEXT_MODE_TO_TYPE",
    ()=>TEXT_MODE_TO_TYPE,
    "TEXT_TYPE_TO_FORMAT",
    ()=>TEXT_TYPE_TO_FORMAT,
    "TEXT_TYPE_TO_MODE",
    ()=>TEXT_TYPE_TO_MODE,
    "TOGGLE_LINK_COMMAND",
    ()=>TOGGLE_LINK_COMMAND,
    "TableFeatureClient",
    ()=>TableFeatureClient,
    "TestRecorderFeatureClient",
    ()=>TestRecorderFeatureClient,
    "TextStateFeatureClient",
    ()=>TextStateFeatureClient,
    "ToolbarButton",
    ()=>ToolbarButton,
    "ToolbarDropdown",
    ()=>ToolbarDropdown,
    "TreeViewFeatureClient",
    ()=>TreeViewFeatureClient,
    "UnderlineFeatureClient",
    ()=>UnderlineFeatureClient,
    "UnorderedListFeatureClient",
    ()=>UnorderedListFeatureClient,
    "UploadFeatureClient",
    ()=>UploadFeatureClient,
    "UploadNode",
    ()=>UploadNode,
    "addSwipeDownListener",
    ()=>addSwipeDownListener,
    "addSwipeLeftListener",
    ()=>addSwipeLeftListener,
    "addSwipeRightListener",
    ()=>addSwipeRightListener,
    "addSwipeUpListener",
    ()=>addSwipeUpListener,
    "buildDefaultEditorState",
    ()=>buildDefaultEditorState,
    "buildEditorState",
    ()=>buildEditorState,
    "codeConverterClient",
    ()=>codeConverterClient,
    "createBlockNode",
    ()=>createBlockNode,
    "createClientFeature",
    ()=>createClientFeature,
    "defaultColors",
    ()=>defaultColors,
    "defaultEditorLexicalConfig",
    ()=>defaultEditorLexicalConfig,
    "getDOMRangeRect",
    ()=>getDOMRangeRect,
    "getEnabledNodes",
    ()=>getEnabledNodes,
    "getRestPopulateFn",
    ()=>getRestPopulateFn,
    "getSelectedNode",
    ()=>getSelectedNode,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isPoint",
    ()=>isPoint,
    "joinClasses",
    ()=>joinClasses,
    "sanitizeClientEditorConfig",
    ()=>sanitizeClientEditorConfig,
    "sanitizeClientFeatures",
    ()=>sanitizeClientFeatures,
    "setFloatingElemPosition",
    ()=>setFloatingElemPosition,
    "setFloatingElemPositionForLinkEditor",
    ()=>setFloatingElemPositionForLinkEditor,
    "slashMenuBasicGroupWithItems",
    ()=>slashMenuBasicGroupWithItems,
    "toolbarAddDropdownGroupWithItems",
    ()=>toolbarAddDropdownGroupWithItems,
    "toolbarFeatureButtonsGroupWithItems",
    ()=>toolbarFeatureButtonsGroupWithItems,
    "toolbarFormatGroupWithItems",
    ()=>toolbarFormatGroupWithItems,
    "toolbarTextDropdownGroupWithItems",
    ()=>toolbarTextDropdownGroupWithItems,
    "useBlockComponentContext",
    ()=>useBlockComponentContext,
    "useEditorConfigContext",
    ()=>useEditorConfigContext,
    "useInlineBlockComponentContext",
    ()=>useInlineBlockComponentContext,
    "useLexicalDocumentDrawer",
    ()=>useLexicalDocumentDrawer,
    "useLexicalDrawer",
    ()=>useLexicalDrawer,
    "useLexicalListDrawer",
    ()=>useLexicalListDrawer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const $createAutoLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createAutoLinkNode() from the server but $createAutoLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$createAutoLinkNode");
const $createBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createBlockNode() from the server but $createBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$createBlockNode");
const $createHorizontalRuleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createHorizontalRuleNode() from the server but $createHorizontalRuleNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$createHorizontalRuleNode");
const $createInlineBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createInlineBlockNode() from the server but $createInlineBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$createInlineBlockNode");
const $createLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createLinkNode() from the server but $createLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$createLinkNode");
const $createRelationshipNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createRelationshipNode() from the server but $createRelationshipNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$createRelationshipNode");
const $createUploadNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $createUploadNode() from the server but $createUploadNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$createUploadNode");
const $isAutoLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isAutoLinkNode() from the server but $isAutoLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$isAutoLinkNode");
const $isBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isBlockNode() from the server but $isBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$isBlockNode");
const $isHorizontalRuleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isHorizontalRuleNode() from the server but $isHorizontalRuleNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$isHorizontalRuleNode");
const $isInlineBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isInlineBlockNode() from the server but $isInlineBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$isInlineBlockNode");
const $isLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isLinkNode() from the server but $isLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$isLinkNode");
const $isRelationshipNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isRelationshipNode() from the server but $isRelationshipNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$isRelationshipNode");
const $isUploadNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call $isUploadNode() from the server but $isUploadNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "$isUploadNode");
const AlignFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AlignFeatureClient() from the server but AlignFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "AlignFeatureClient");
const AutoLinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AutoLinkNode() from the server but AutoLinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "AutoLinkNode");
const BlockCollapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockCollapsible() from the server but BlockCollapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "BlockCollapsible");
const BlockEditButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockEditButton() from the server but BlockEditButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "BlockEditButton");
const BlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockNode() from the server but BlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "BlockNode");
const BlockRemoveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockRemoveButton() from the server but BlockRemoveButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "BlockRemoveButton");
const BlockquoteFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlockquoteFeatureClient() from the server but BlockquoteFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "BlockquoteFeatureClient");
const BlocksFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlocksFeatureClient() from the server but BlocksFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "BlocksFeatureClient");
const BoldFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BoldFeatureClient() from the server but BoldFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "BoldFeatureClient");
const CAN_USE_DOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CAN_USE_DOM() from the server but CAN_USE_DOM is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "CAN_USE_DOM");
const ChecklistFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ChecklistFeatureClient() from the server but ChecklistFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ChecklistFeatureClient");
const CodeBlockBlockComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeBlockBlockComponent() from the server but CodeBlockBlockComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "CodeBlockBlockComponent");
const CodeComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeComponent() from the server but CodeComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "CodeComponent");
const DETAIL_TYPE_TO_DETAIL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DETAIL_TYPE_TO_DETAIL() from the server but DETAIL_TYPE_TO_DETAIL is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "DETAIL_TYPE_TO_DETAIL");
const DOUBLE_LINE_BREAK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DOUBLE_LINE_BREAK() from the server but DOUBLE_LINE_BREAK is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "DOUBLE_LINE_BREAK");
const DebugJsxConverterFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DebugJsxConverterFeatureClient() from the server but DebugJsxConverterFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "DebugJsxConverterFeatureClient");
const ELEMENT_FORMAT_TO_TYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ELEMENT_FORMAT_TO_TYPE() from the server but ELEMENT_FORMAT_TO_TYPE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ELEMENT_FORMAT_TO_TYPE");
const ELEMENT_TYPE_TO_FORMAT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ELEMENT_TYPE_TO_FORMAT() from the server but ELEMENT_TYPE_TO_FORMAT is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ELEMENT_TYPE_TO_FORMAT");
const ENABLE_SLASH_MENU_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ENABLE_SLASH_MENU_COMMAND() from the server but ENABLE_SLASH_MENU_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ENABLE_SLASH_MENU_COMMAND");
const EditorConfigProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditorConfigProvider() from the server but EditorConfigProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "EditorConfigProvider");
const FieldsDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldsDrawer() from the server but FieldsDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "FieldsDrawer");
const FixedToolbarFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FixedToolbarFeatureClient() from the server but FixedToolbarFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "FixedToolbarFeatureClient");
const HeadingFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeadingFeatureClient() from the server but HeadingFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "HeadingFeatureClient");
const HorizontalRuleFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HorizontalRuleFeatureClient() from the server but HorizontalRuleFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "HorizontalRuleFeatureClient");
const HorizontalRuleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HorizontalRuleNode() from the server but HorizontalRuleNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "HorizontalRuleNode");
const INSERT_BLOCK_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call INSERT_BLOCK_COMMAND() from the server but INSERT_BLOCK_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "INSERT_BLOCK_COMMAND");
const INSERT_INLINE_BLOCK_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call INSERT_INLINE_BLOCK_COMMAND() from the server but INSERT_INLINE_BLOCK_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "INSERT_INLINE_BLOCK_COMMAND");
const IS_ALL_FORMATTING = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IS_ALL_FORMATTING() from the server but IS_ALL_FORMATTING is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "IS_ALL_FORMATTING");
const IndentFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IndentFeatureClient() from the server but IndentFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "IndentFeatureClient");
const InlineBlockContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockContainer() from the server but InlineBlockContainer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "InlineBlockContainer");
const InlineBlockEditButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockEditButton() from the server but InlineBlockEditButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "InlineBlockEditButton");
const InlineBlockLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockLabel() from the server but InlineBlockLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "InlineBlockLabel");
const InlineBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockNode() from the server but InlineBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "InlineBlockNode");
const InlineBlockRemoveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineBlockRemoveButton() from the server but InlineBlockRemoveButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "InlineBlockRemoveButton");
const InlineCodeFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineCodeFeatureClient() from the server but InlineCodeFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "InlineCodeFeatureClient");
const InlineToolbarFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InlineToolbarFeatureClient() from the server but InlineToolbarFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "InlineToolbarFeatureClient");
const ItalicFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ItalicFeatureClient() from the server but ItalicFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ItalicFeatureClient");
const LTR_REGEX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LTR_REGEX() from the server but LTR_REGEX is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "LTR_REGEX");
const LexicalPluginToLexicalFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LexicalPluginToLexicalFeatureClient() from the server but LexicalPluginToLexicalFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "LexicalPluginToLexicalFeatureClient");
const LinkFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkFeatureClient() from the server but LinkFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "LinkFeatureClient");
const LinkNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkNode() from the server but LinkNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "LinkNode");
const NON_BREAKING_SPACE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NON_BREAKING_SPACE() from the server but NON_BREAKING_SPACE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "NON_BREAKING_SPACE");
const NodeFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeFormat() from the server but NodeFormat is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "NodeFormat");
const OrderedListFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OrderedListFeatureClient() from the server but OrderedListFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "OrderedListFeatureClient");
const ParagraphFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ParagraphFeatureClient() from the server but ParagraphFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ParagraphFeatureClient");
const Point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Point() from the server but Point is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "Point");
const RTL_REGEX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RTL_REGEX() from the server but RTL_REGEX is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "RTL_REGEX");
const Rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Rect() from the server but Rect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "Rect");
const RelationshipFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipFeatureClient() from the server but RelationshipFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "RelationshipFeatureClient");
const RelationshipNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipNode() from the server but RelationshipNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "RelationshipNode");
const RenderLexical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderLexical() from the server but RenderLexical is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "RenderLexical");
const RichTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RichTextField() from the server but RichTextField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "RichTextField");
const SlateToLexicalFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SlateToLexicalFeatureClient() from the server but SlateToLexicalFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "SlateToLexicalFeatureClient");
const StrikethroughFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StrikethroughFeatureClient() from the server but StrikethroughFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "StrikethroughFeatureClient");
const SubscriptFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SubscriptFeatureClient() from the server but SubscriptFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "SubscriptFeatureClient");
const SuperscriptFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SuperscriptFeatureClient() from the server but SuperscriptFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "SuperscriptFeatureClient");
const TEXT_MODE_TO_TYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TEXT_MODE_TO_TYPE() from the server but TEXT_MODE_TO_TYPE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TEXT_MODE_TO_TYPE");
const TEXT_TYPE_TO_FORMAT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TEXT_TYPE_TO_FORMAT() from the server but TEXT_TYPE_TO_FORMAT is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TEXT_TYPE_TO_FORMAT");
const TEXT_TYPE_TO_MODE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TEXT_TYPE_TO_MODE() from the server but TEXT_TYPE_TO_MODE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TEXT_TYPE_TO_MODE");
const TOGGLE_LINK_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TOGGLE_LINK_COMMAND() from the server but TOGGLE_LINK_COMMAND is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TOGGLE_LINK_COMMAND");
const TableFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFeatureClient() from the server but TableFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TableFeatureClient");
const TestRecorderFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestRecorderFeatureClient() from the server but TestRecorderFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TestRecorderFeatureClient");
const TextStateFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextStateFeatureClient() from the server but TextStateFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TextStateFeatureClient");
const ToolbarButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToolbarButton() from the server but ToolbarButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ToolbarButton");
const ToolbarDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToolbarDropdown() from the server but ToolbarDropdown is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "ToolbarDropdown");
const TreeViewFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TreeViewFeatureClient() from the server but TreeViewFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "TreeViewFeatureClient");
const UnderlineFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UnderlineFeatureClient() from the server but UnderlineFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "UnderlineFeatureClient");
const UnorderedListFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UnorderedListFeatureClient() from the server but UnorderedListFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "UnorderedListFeatureClient");
const UploadFeatureClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadFeatureClient() from the server but UploadFeatureClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "UploadFeatureClient");
const UploadNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadNode() from the server but UploadNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "UploadNode");
const addSwipeDownListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeDownListener() from the server but addSwipeDownListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "addSwipeDownListener");
const addSwipeLeftListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeLeftListener() from the server but addSwipeLeftListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "addSwipeLeftListener");
const addSwipeRightListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeRightListener() from the server but addSwipeRightListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "addSwipeRightListener");
const addSwipeUpListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addSwipeUpListener() from the server but addSwipeUpListener is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "addSwipeUpListener");
const buildDefaultEditorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call buildDefaultEditorState() from the server but buildDefaultEditorState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "buildDefaultEditorState");
const buildEditorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call buildEditorState() from the server but buildEditorState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "buildEditorState");
const codeConverterClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call codeConverterClient() from the server but codeConverterClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "codeConverterClient");
const createBlockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call createBlockNode() from the server but createBlockNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "createBlockNode");
const createClientFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call createClientFeature() from the server but createClientFeature is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "createClientFeature");
const defaultColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call defaultColors() from the server but defaultColors is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "defaultColors");
const defaultEditorLexicalConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call defaultEditorLexicalConfig() from the server but defaultEditorLexicalConfig is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "defaultEditorLexicalConfig");
const getDOMRangeRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getDOMRangeRect() from the server but getDOMRangeRect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "getDOMRangeRect");
const getEnabledNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getEnabledNodes() from the server but getEnabledNodes is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "getEnabledNodes");
const getRestPopulateFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getRestPopulateFn() from the server but getRestPopulateFn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "getRestPopulateFn");
const getSelectedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getSelectedNode() from the server but getSelectedNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "getSelectedNode");
const isHTMLElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isHTMLElement() from the server but isHTMLElement is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "isHTMLElement");
const isPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isPoint() from the server but isPoint is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "isPoint");
const joinClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call joinClasses() from the server but joinClasses is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "joinClasses");
const sanitizeClientEditorConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call sanitizeClientEditorConfig() from the server but sanitizeClientEditorConfig is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "sanitizeClientEditorConfig");
const sanitizeClientFeatures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call sanitizeClientFeatures() from the server but sanitizeClientFeatures is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "sanitizeClientFeatures");
const setFloatingElemPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call setFloatingElemPosition() from the server but setFloatingElemPosition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "setFloatingElemPosition");
const setFloatingElemPositionForLinkEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call setFloatingElemPositionForLinkEditor() from the server but setFloatingElemPositionForLinkEditor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "setFloatingElemPositionForLinkEditor");
const slashMenuBasicGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call slashMenuBasicGroupWithItems() from the server but slashMenuBasicGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "slashMenuBasicGroupWithItems");
const toolbarAddDropdownGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarAddDropdownGroupWithItems() from the server but toolbarAddDropdownGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "toolbarAddDropdownGroupWithItems");
const toolbarFeatureButtonsGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarFeatureButtonsGroupWithItems() from the server but toolbarFeatureButtonsGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "toolbarFeatureButtonsGroupWithItems");
const toolbarFormatGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarFormatGroupWithItems() from the server but toolbarFormatGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "toolbarFormatGroupWithItems");
const toolbarTextDropdownGroupWithItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toolbarTextDropdownGroupWithItems() from the server but toolbarTextDropdownGroupWithItems is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "toolbarTextDropdownGroupWithItems");
const useBlockComponentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBlockComponentContext() from the server but useBlockComponentContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "useBlockComponentContext");
const useEditorConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEditorConfigContext() from the server but useEditorConfigContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "useEditorConfigContext");
const useInlineBlockComponentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useInlineBlockComponentContext() from the server but useInlineBlockComponentContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "useInlineBlockComponentContext");
const useLexicalDocumentDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLexicalDocumentDrawer() from the server but useLexicalDocumentDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "useLexicalDocumentDrawer");
const useLexicalDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLexicalDrawer() from the server but useLexicalDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "useLexicalDrawer");
const useLexicalListDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLexicalListDrawer() from the server but useLexicalListDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js", "useLexicalListDrawer");
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/utilities/buildInitialState.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildInitialState",
    ()=>buildInitialState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/index.js [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function buildInitialState({ context, initialState: initialStateFromArgs, nodeData }) {
    let initialState = initialStateFromArgs ?? {};
    for (const node of nodeData){
        if ('children' in node) {
            initialState = await buildInitialState({
                context,
                initialState,
                nodeData: node.children
            });
        }
        if (node.type === 'block' || node.type === 'inlineBlock') {
            const blockNode = node;
            const id = blockNode?.fields?.id;
            if (!id) {
                continue;
            }
            const schemaFieldsPath = node.type === 'block' ? `${context.lexicalFieldSchemaPath}.lexical_internal_feature.blocks.lexical_blocks.${blockNode.fields.blockType}.fields` : `${context.lexicalFieldSchemaPath}.lexical_internal_feature.blocks.lexical_inline_blocks.${blockNode.fields.blockType}.fields`;
            // Build form state for the block
            const formStateResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldSchemasToFormState"])({
                id: context.id,
                clientFieldSchemaMap: context.clientFieldSchemaMap,
                collectionSlug: context.collectionSlug,
                data: blockNode.fields,
                documentData: context.documentData,
                fields: context.fieldSchemaMap.get(schemaFieldsPath)?.fields,
                fieldSchemaMap: context.fieldSchemaMap,
                initialBlockData: blockNode.fields,
                operation: context.operation,
                permissions: true,
                preferences: context.preferences,
                readOnly: context.disabled,
                renderAllFields: true,
                renderFieldFn: context.renderFieldFn,
                req: context.req,
                schemaPath: schemaFieldsPath
            });
            if (!initialState[id]) {
                initialState[id] = {};
            }
            initialState[id].formState = formStateResult;
            if (node.type === 'block') {
                const currentFieldPreferences = context.preferences?.fields?.[context.field.name];
                const collapsedArray = currentFieldPreferences?.collapsed;
                if (Array.isArray(collapsedArray) && collapsedArray.includes(id)) {
                    initialState[id].collapsed = true;
                }
            }
        }
    }
    return initialState;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/utilities/initLexicalFeatures.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "initLexicalFeatures",
    ()=>initLexicalFeatures
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function initLexicalFeatures(args) {
    const clientFeatures = {};
    // turn args.resolvedFeatureMap into an array of [key, value] pairs, ordered by value.order, lowest order first:
    const resolvedFeatureMapArray = [
        ...args.sanitizedEditorConfig.resolvedFeatureMap
    ].sort((a, b)=>a[1].order - b[1].order);
    const featureClientSchemaMap = {};
    /**
  * All modules added to the import map, keyed by the provided key, if feature.componentImports with type object is used
  */ const featureClientImportMap = {};
    for (const [featureKey, resolvedFeature] of resolvedFeatureMapArray){
        clientFeatures[featureKey] = {};
        /**
    * Handle client features
    */ const ClientFeaturePayloadComponent = resolvedFeature.ClientFeature;
        if (ClientFeaturePayloadComponent) {
            const clientFeatureProvider = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["getFromImportMap"])({
                importMap: args.payload.importMap,
                PayloadComponent: ClientFeaturePayloadComponent,
                schemaPath: 'lexical-clientComponent',
                silent: true
            });
            if (!clientFeatureProvider) {
                continue;
            }
            const clientFeatureProps = resolvedFeature.clientFeatureProps ?? {};
            clientFeatureProps.featureKey = resolvedFeature.key;
            clientFeatureProps.order = resolvedFeature.order;
            if (typeof ClientFeaturePayloadComponent === 'object' && ClientFeaturePayloadComponent.clientProps) {
                clientFeatureProps.clientProps = ClientFeaturePayloadComponent.clientProps;
            }
            // As clientFeatureProvider is a client function, we cannot execute it on the server here. Thus, the client will have to execute clientFeatureProvider with its props
            clientFeatures[featureKey] = {
                clientFeatureProps,
                clientFeatureProvider
            };
        }
        /**
    * Handle sub-fields (formstate of those)
    */ // The args.fieldSchemaMap generated before in buildFormState should contain all of lexical features' sub-field schemas
        // as well, as it already called feature.generateSchemaMap for each feature.
        // We will check for the existance resolvedFeature.generateSchemaMap to skip unnecessary loops for constructing featureSchemaMap, but we don't run it here
        if (resolvedFeature.generateSchemaMap) {
            const featureSchemaPath = `${args.schemaPath}.lexical_internal_feature.${featureKey}`;
            featureClientSchemaMap[featureKey] = {};
            // Like args.fieldSchemaMap, we only want to include the sub-fields of the current feature
            for (const [key, entry] of args.clientFieldSchemaMap.entries()){
                if (key.startsWith(featureSchemaPath)) {
                    featureClientSchemaMap[featureKey][key] = 'fields' in entry ? entry.fields : [
                        entry
                    ];
                }
            }
        }
        if (resolvedFeature.componentImports && typeof resolvedFeature.componentImports === 'object' && !Array.isArray(resolvedFeature.componentImports)) {
            for (const [key, payloadComponent] of Object.entries(resolvedFeature.componentImports)){
                const resolvedComponent = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["getFromImportMap"])({
                    importMap: args.payload.importMap,
                    PayloadComponent: payloadComponent,
                    schemaPath: 'lexical-clientComponent',
                    silent: true
                });
                featureClientImportMap[`${resolvedFeature.key}.${key}`] = resolvedComponent;
            }
        }
    }
    return {
        clientFeatures,
        featureClientImportMap,
        featureClientSchemaMap
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/rscEntry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "RscEntryLexicalField",
    ()=>RscEntryLexicalField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/renderField.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
// eslint-disable-next-line payload/no-imports-from-exports-dir
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$buildInitialState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/utilities/buildInitialState.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$initLexicalFeatures$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/utilities/initLexicalFeatures.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$buildInitialState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$initLexicalFeatures$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$buildInitialState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$initLexicalFeatures$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const RscEntryLexicalField = async (args)=>{
    const field = args.field;
    const path = args.path ?? args.clientField.name;
    const schemaPath = args.schemaPath ?? path;
    const disabled = args?.readOnly || field?.admin?.readOnly;
    if (!args?.clientField?.name) {
        throw new Error('Initialized lexical RSC field without a field name');
    }
    const { clientFeatures, featureClientImportMap, featureClientSchemaMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$initLexicalFeatures$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initLexicalFeatures"])({
        clientFieldSchemaMap: args.clientFieldSchemaMap,
        fieldSchemaMap: args.fieldSchemaMap,
        i18n: args.i18n,
        path,
        payload: args.payload,
        sanitizedEditorConfig: args.sanitizedEditorConfig,
        schemaPath
    });
    let initialLexicalFormState = {};
    if (args.siblingData?.[field.name]?.root?.children?.length) {
        initialLexicalFormState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$utilities$2f$buildInitialState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildInitialState"])({
            context: {
                id: args.id,
                clientFieldSchemaMap: args.clientFieldSchemaMap,
                collectionSlug: args.collectionSlug,
                disabled,
                documentData: args.data,
                field,
                fieldSchemaMap: args.fieldSchemaMap,
                lexicalFieldSchemaPath: schemaPath,
                operation: args.operation,
                permissions: args.permissions,
                preferences: args.preferences,
                renderFieldFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderField"],
                req: args.req
            },
            nodeData: args.siblingData?.[field.name]?.root?.children
        });
    }
    const placeholderFromArgs = args.admin?.placeholder;
    const placeholder = placeholderFromArgs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(placeholderFromArgs, args.i18n) : undefined;
    const admin = {};
    if (placeholder) {
        admin.placeholder = placeholder;
    }
    if (args.admin?.hideGutter) {
        admin.hideGutter = true;
    }
    if (args.admin?.hideInsertParagraphAtEnd) {
        admin.hideInsertParagraphAtEnd = true;
    }
    if (args.admin?.hideAddBlockButton) {
        admin.hideAddBlockButton = true;
    }
    if (args.admin?.hideDraggableBlockElement) {
        admin.hideDraggableBlockElement = true;
    }
    const props = {
        clientFeatures,
        featureClientSchemaMap,
        field: args.clientField,
        forceRender: args.forceRender,
        initialLexicalFormState,
        lexicalEditorConfig: args.sanitizedEditorConfig.lexical,
        path,
        permissions: args.permissions,
        readOnly: args.readOnly,
        renderedBlocks: args.renderedBlocks,
        schemaPath
    };
    if (Object.keys(admin).length) {
        props.admin = admin;
    }
    if (Object.keys(featureClientImportMap).length) {
        props.featureClientImportMap = featureClientImportMap;
    }
    for(const key in props){
        if (props[key] === undefined) {
            delete props[key];
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextField"], {
        ...props
    });
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/validate/hasText.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasText",
    ()=>hasText
]);
function hasText(value) {
    const hasChildren = !!value?.root?.children?.length;
    let hasOnlyEmptyParagraph = false;
    if (value?.root?.children?.length === 1) {
        if (value?.root?.children[0]?.type === 'paragraph') {
            const paragraphNode = value?.root?.children[0];
            if (!paragraphNode?.children || paragraphNode?.children?.length === 0) {
                hasOnlyEmptyParagraph = true;
            } else if (paragraphNode?.children?.length === 1) {
                const paragraphNodeChild = paragraphNode?.children[0];
                if (paragraphNodeChild?.type === 'text') {
                    if (!paragraphNodeChild?.['text']?.length) {
                        hasOnlyEmptyParagraph = true;
                    }
                }
            }
        }
    }
    if (!hasChildren || hasOnlyEmptyParagraph) {
        return false;
    } else {
        return true;
    }
}
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/shared/findConverterForNode.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-console */ __turbopack_context__.s([
    "findConverterForNode",
    ()=>findConverterForNode
]);
function findConverterForNode({ converters, disableIndent, disableTextAlign, node, unknownConverter }) {
    let converterForNode;
    if (node.type === 'block') {
        converterForNode = converters?.blocks?.[node?.fields?.blockType];
        if (!converterForNode && !unknownConverter) {
            console.error(`Lexical => HTML converter: Blocks converter: found ${node?.fields?.blockType} block, but no converter is provided`);
        }
    } else if (node.type === 'inlineBlock') {
        converterForNode = converters?.inlineBlocks?.[node?.fields?.blockType];
        if (!converterForNode && !unknownConverter) {
            console.error(`Lexical => HTML converter: Inline Blocks converter: found ${node?.fields?.blockType} inline block, but no converter is provided`);
        }
    } else {
        converterForNode = converters[node.type];
    }
    const style = {};
    // Check if disableTextAlign is not true and does not include node type
    if (!disableTextAlign && (!Array.isArray(disableTextAlign) || !disableTextAlign?.includes(node.type))) {
        if ('format' in node && node.format) {
            switch(node.format){
                case 'center':
                    style['text-align'] = 'center';
                    break;
                case 'end':
                    style['text-align'] = 'right';
                    break;
                case 'justify':
                    style['text-align'] = 'justify';
                    break;
                case 'left':
                    break;
                case 'right':
                    style['text-align'] = 'right';
                    break;
                case 'start':
                    style['text-align'] = 'left';
                    break;
            }
        }
    }
    if (!disableIndent && (!Array.isArray(disableIndent) || !disableIndent?.includes(node.type))) {
        if ('indent' in node && node.indent && node.type !== 'listitem') {
            // the unit should be px. Do not change it to rem, em, or something else.
            // The quantity should be 40px. Do not change it either.
            // See rationale in
            // https://github.com/payloadcms/payload/issues/13130#issuecomment-3058348085
            style['padding-inline-start'] = `${Number(node.indent) * 40}px`;
        }
    }
    let providedCSSString = '';
    for (const key of Object.keys(style)){
        // @ts-expect-error we're iterating over the keys of the object
        providedCSSString += `${key}: ${style[key]};`;
    }
    const providedStyleTag = providedCSSString?.length ? ` style="${providedCSSString}"` : '';
    return {
        converterForNode: converterForNode ?? unknownConverter,
        providedCSSString,
        providedStyleTag
    };
}
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/blockquote.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockquoteHTMLConverterAsync",
    ()=>BlockquoteHTMLConverterAsync
]);
const BlockquoteHTMLConverterAsync = {
    quote: async ({ node, nodesToHTML, providedStyleTag })=>{
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        return `<blockquote${providedStyleTag}>${children}</blockquote>`;
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/heading.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadingHTMLConverterAsync",
    ()=>HeadingHTMLConverterAsync
]);
const ALLOWED_HEADING_TAGS = new Set([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
]);
const HeadingHTMLConverterAsync = {
    heading: async ({ node, nodesToHTML, providedStyleTag })=>{
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        const tag = ALLOWED_HEADING_TAGS.has(node.tag) ? node.tag : 'h1';
        return `<${tag}${providedStyleTag}>${children}</${tag}>`;
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/horizontalRule.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalRuleHTMLConverterAsync",
    ()=>HorizontalRuleHTMLConverterAsync
]);
const HorizontalRuleHTMLConverterAsync = {
    horizontalrule: '<hr />'
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/linebreak.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinebreakHTMLConverterAsync",
    ()=>LinebreakHTMLConverterAsync
]);
const LinebreakHTMLConverterAsync = {
    linebreak: '<br />'
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LinkHTMLConverterAsync",
    ()=>LinkHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/escape-html/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const LinkHTMLConverterAsync = ({ internalDocToHref })=>({
        autolink: async ({ node, nodesToHTML, providedStyleTag })=>{
            const children = (await nodesToHTML({
                nodes: node.children
            })).join('');
            const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["sanitizeUrl"])(node.fields.url ?? ''));
            return `<a${providedStyleTag} href="${href}"${node.fields.newTab ? ' rel="noopener noreferrer" target="_blank"' : ''}>${children}</a>`;
        },
        link: async ({ node, nodesToHTML, populate, providedStyleTag })=>{
            const children = (await nodesToHTML({
                nodes: node.children
            })).join('');
            let href = node.fields.url ?? '';
            if (node.fields.linkType === 'internal') {
                if (internalDocToHref) {
                    href = await internalDocToHref({
                        linkNode: node,
                        populate
                    });
                } else {
                    // eslint-disable-next-line no-console
                    console.error('Lexical => HTML converter: Link converter: found internal link, but internalDocToHref is not provided');
                    href = '#'; // fallback
                }
            }
            const safeHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["sanitizeUrl"])(href));
            return `<a${providedStyleTag} href="${safeHref}"${node.fields.newTab ? ' rel="noopener noreferrer" target="_blank"' : ''}>${children}</a>`;
        }
    });
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/list.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListHTMLConverterAsync",
    ()=>ListHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
;
const ALLOWED_LIST_TAGS = new Set([
    'ol',
    'ul'
]);
const ALLOWED_LIST_TYPES = new Set([
    'bullet',
    'check',
    'number'
]);
const ListHTMLConverterAsync = {
    list: async ({ node, nodesToHTML, providedStyleTag })=>{
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        const tag = ALLOWED_LIST_TAGS.has(node.tag) ? node.tag : 'ul';
        const listType = ALLOWED_LIST_TYPES.has(node.listType) ? node.listType : 'bullet';
        return `<${tag}${providedStyleTag} class="list-${listType}">${children}</${tag}>`;
    },
    listitem: async ({ node, nodesToHTML, parent, providedCSSString })=>{
        const hasSubLists = node.children.some((child)=>child.type === 'list');
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        if ('listType' in parent && parent?.listType === 'check') {
            const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            return `<li
          aria-checked="${node.checked ? 'true' : 'false'}"
          class="list-item-checkbox${node.checked ? ' list-item-checkbox-checked' : ' list-item-checkbox-unchecked'}${hasSubLists ? ' nestedListItem' : ''}"
          role="checkbox"
          style="list-style-type: none;${providedCSSString}"
          tabIndex="-1"
          value="${node.value}"
        >
          ${hasSubLists ? children : `<input${node.checked ? ' checked' : ''} id="${uuid}" readOnly="true" type="checkbox" />
            <label htmlFor="${uuid}">${children}</label>
            <br />`}
        </li>`;
        } else {
            return `<li
          class="${hasSubLists ? 'nestedListItem' : ''}"
          style="${hasSubLists ? `list-style-type: none;${providedCSSString}` : providedCSSString}"
          value="${node.value}"
        >${children}</li>`;
        }
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/paragraph.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParagraphHTMLConverterAsync",
    ()=>ParagraphHTMLConverterAsync
]);
const ParagraphHTMLConverterAsync = {
    paragraph: async ({ node, nodesToHTML, providedStyleTag })=>{
        const children = await nodesToHTML({
            nodes: node.children
        });
        if (!children?.length) {
            return `<p${providedStyleTag}><br /></p>`;
        }
        return `<p${providedStyleTag}>${children.join('')}</p>`;
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/tab.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabHTMLConverterAsync",
    ()=>TabHTMLConverterAsync
]);
const TabHTMLConverterAsync = {
    tab: '\t'
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/shared/cssColors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Complete set of CSS named colors (CSS Color Level 4) plus common CSS-wide keywords */ __turbopack_context__.s([
    "CSS_NAMED_COLORS",
    ()=>CSS_NAMED_COLORS,
    "isSafeCssColor",
    ()=>isSafeCssColor
]);
const CSS_NAMED_COLORS = new Set([
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'currentcolor',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'grey',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'inherit',
    'initial',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'transparent',
    'turquoise',
    'unset',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen'
]);
/** Matches hex, rgb/rgba, hsl/hsla functional notation */ const SAFE_CSS_COLOR_FN = /^(?:#[0-9a-fA-F]{3,8}|rgba?\([\d,.\s/%]+\)|hsla?\([\d,.\s/%deg]+\))$/;
const isSafeCssColor = (value)=>{
    return SAFE_CSS_COLOR_FN.test(value) || CSS_NAMED_COLORS.has(value.toLowerCase());
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/table.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableHTMLConverterAsync",
    ()=>TableHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$shared$2f$cssColors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/shared/cssColors.js [app-rsc] (ecmascript)");
;
const TableHTMLConverterAsync = {
    table: async ({ node, nodesToHTML, providedStyleTag })=>{
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        return `<div${providedStyleTag} class="lexical-table-container">
        <table class="lexical-table" style="border-collapse: collapse;">
          <tbody>${children}</tbody>
        </table>
      </div>`;
    },
    tablecell: async ({ node, nodesToHTML, providedCSSString })=>{
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        const TagName = node.headerState > 0 ? 'th' : 'td';
        const headerStateClass = `lexical-table-cell-header-${node.headerState}`;
        let style = 'border: 1px solid #ccc; padding: 8px;' + providedCSSString;
        if (node.backgroundColor && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$shared$2f$cssColors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSafeCssColor"])(node.backgroundColor)) {
            style += ` background-color: ${node.backgroundColor};`;
        }
        const colSpanAttr = node.colSpan && node.colSpan > 1 ? ` colspan="${node.colSpan}"` : '';
        const rowSpanAttr = node.rowSpan && node.rowSpan > 1 ? ` rowspan="${node.rowSpan}"` : '';
        return `<${TagName}
        class="lexical-table-cell ${headerStateClass}"
        ${colSpanAttr}
        ${rowSpanAttr}
        style="${style}"
      >
        ${children}
      </${TagName}>
    `;
    },
    tablerow: async ({ node, nodesToHTML, providedStyleTag })=>{
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        return `<tr${providedStyleTag} class="lexical-table-row">
        ${children}
      </tr>`;
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/lexical/utils/nodeFormat.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable perfectionist/sort-objects */ /* eslint-disable regexp/no-obscure-range */ /* eslint-disable @typescript-eslint/no-redundant-type-constituents */ /* eslint-disable regexp/no-misleading-unicode-character */ //This copy-and-pasted from lexical here: https://github.com/facebook/lexical/blob/c2ceee223f46543d12c574e62155e619f9a18a5d/packages/lexical/src/LexicalConstants.ts
// DOM
__turbopack_context__.s([
    "DETAIL_TYPE_TO_DETAIL",
    ()=>DETAIL_TYPE_TO_DETAIL,
    "DOUBLE_LINE_BREAK",
    ()=>DOUBLE_LINE_BREAK,
    "ELEMENT_FORMAT_TO_TYPE",
    ()=>ELEMENT_FORMAT_TO_TYPE,
    "ELEMENT_TYPE_TO_FORMAT",
    ()=>ELEMENT_TYPE_TO_FORMAT,
    "IS_ALL_FORMATTING",
    ()=>IS_ALL_FORMATTING,
    "LTR_REGEX",
    ()=>LTR_REGEX,
    "NON_BREAKING_SPACE",
    ()=>NON_BREAKING_SPACE,
    "NodeFormat",
    ()=>NodeFormat,
    "RTL_REGEX",
    ()=>RTL_REGEX,
    "TEXT_MODE_TO_TYPE",
    ()=>TEXT_MODE_TO_TYPE,
    "TEXT_TYPE_TO_FORMAT",
    ()=>TEXT_TYPE_TO_FORMAT,
    "TEXT_TYPE_TO_MODE",
    ()=>TEXT_TYPE_TO_MODE
]);
const NodeFormat = {
    DOM_ELEMENT_TYPE: 1,
    DOM_TEXT_TYPE: 3,
    // Reconciling
    NO_DIRTY_NODES: 0,
    HAS_DIRTY_NODES: 1,
    FULL_RECONCILE: 2,
    // Text node modes
    IS_NORMAL: 0,
    IS_TOKEN: 1,
    IS_SEGMENTED: 2,
    IS_INERT: 3,
    // Text node formatting
    IS_BOLD: 1,
    IS_ITALIC: 1 << 1,
    IS_STRIKETHROUGH: 1 << 2,
    IS_UNDERLINE: 1 << 3,
    IS_CODE: 1 << 4,
    IS_SUBSCRIPT: 1 << 5,
    IS_SUPERSCRIPT: 1 << 6,
    IS_HIGHLIGHT: 1 << 7,
    // Text node details
    IS_DIRECTIONLESS: 1,
    IS_UNMERGEABLE: 1 << 1,
    // Element node formatting
    IS_ALIGN_LEFT: 1,
    IS_ALIGN_CENTER: 2,
    IS_ALIGN_RIGHT: 3,
    IS_ALIGN_JUSTIFY: 4,
    IS_ALIGN_START: 5,
    IS_ALIGN_END: 6
};
const IS_ALL_FORMATTING = NodeFormat.IS_BOLD | NodeFormat.IS_ITALIC | NodeFormat.IS_STRIKETHROUGH | NodeFormat.IS_UNDERLINE | NodeFormat.IS_CODE | NodeFormat.IS_SUBSCRIPT | NodeFormat.IS_SUPERSCRIPT | NodeFormat.IS_HIGHLIGHT;
const NON_BREAKING_SPACE = '\u00A0';
const DOUBLE_LINE_BREAK = '\n\n';
// For FF, we need to use a non-breaking space, or it gets composition
// in a stuck state.
const RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
const LTR = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' + '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' + '\uFE00-\uFE6F\uFEFD-\uFFFF';
const RTL_REGEX = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
const LTR_REGEX = new RegExp('^[^' + RTL + ']*[' + LTR + ']');
const TEXT_TYPE_TO_FORMAT = {
    bold: NodeFormat.IS_BOLD,
    code: NodeFormat.IS_CODE,
    highlight: NodeFormat.IS_HIGHLIGHT,
    italic: NodeFormat.IS_ITALIC,
    strikethrough: NodeFormat.IS_STRIKETHROUGH,
    subscript: NodeFormat.IS_SUBSCRIPT,
    superscript: NodeFormat.IS_SUPERSCRIPT,
    underline: NodeFormat.IS_UNDERLINE
};
const DETAIL_TYPE_TO_DETAIL = {
    directionless: NodeFormat.IS_DIRECTIONLESS,
    unmergeable: NodeFormat.IS_UNMERGEABLE
};
const ELEMENT_TYPE_TO_FORMAT = {
    center: NodeFormat.IS_ALIGN_CENTER,
    end: NodeFormat.IS_ALIGN_END,
    justify: NodeFormat.IS_ALIGN_JUSTIFY,
    left: NodeFormat.IS_ALIGN_LEFT,
    right: NodeFormat.IS_ALIGN_RIGHT,
    start: NodeFormat.IS_ALIGN_START
};
const ELEMENT_FORMAT_TO_TYPE = {
    [NodeFormat.IS_ALIGN_CENTER]: 'center',
    [NodeFormat.IS_ALIGN_END]: 'end',
    [NodeFormat.IS_ALIGN_JUSTIFY]: 'justify',
    [NodeFormat.IS_ALIGN_LEFT]: 'left',
    [NodeFormat.IS_ALIGN_RIGHT]: 'right',
    [NodeFormat.IS_ALIGN_START]: 'start'
};
const TEXT_MODE_TO_TYPE = {
    normal: NodeFormat.IS_NORMAL,
    segmented: NodeFormat.IS_SEGMENTED,
    token: NodeFormat.IS_TOKEN
};
const TEXT_TYPE_TO_MODE = {
    [NodeFormat.IS_NORMAL]: 'normal',
    [NodeFormat.IS_SEGMENTED]: 'segmented',
    [NodeFormat.IS_TOKEN]: 'token'
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/text.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextHTMLConverterAsync",
    ()=>TextHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/escape-html/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/lexical/utils/nodeFormat.js [app-rsc] (ecmascript)");
;
;
const TextHTMLConverterAsync = {
    text: ({ node })=>{
        let text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(node.text);
        if (node.format & __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeFormat"].IS_BOLD) {
            text = `<strong>${text}</strong>`;
        }
        if (node.format & __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeFormat"].IS_ITALIC) {
            text = `<em>${text}</em>`;
        }
        if (node.format & __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeFormat"].IS_STRIKETHROUGH) {
            text = `<span style="text-decoration: line-through;">${text}</span>`;
        }
        if (node.format & __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeFormat"].IS_UNDERLINE) {
            text = `<span style="text-decoration: underline;">${text}</span>`;
        }
        if (node.format & __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeFormat"].IS_CODE) {
            text = `<code>${text}</code>`;
        }
        if (node.format & __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeFormat"].IS_SUBSCRIPT) {
            text = `<sub>${text}</sub>`;
        }
        if (node.format & __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$lexical$2f$utils$2f$nodeFormat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeFormat"].IS_SUPERSCRIPT) {
            text = `<sup>${text}</sup>`;
        }
        return text;
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/upload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadHTMLConverterAsync",
    ()=>UploadHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/escape-html/index.js [app-rsc] (ecmascript)");
;
const UploadHTMLConverterAsync = {
    upload: async ({ node, populate, providedStyleTag })=>{
        const uploadNode = node;
        let uploadDoc = undefined;
        // If there's no valid upload data, populate return an empty string
        if (typeof uploadNode.value !== 'object') {
            if (!populate) {
                return '';
            }
            uploadDoc = await populate({
                id: uploadNode.value,
                collectionSlug: uploadNode.relationTo
            });
        } else {
            uploadDoc = uploadNode.value;
        }
        if (!uploadDoc) {
            return '';
        }
        const alt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(node.fields?.alt || uploadDoc?.alt || '');
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uploadDoc.url ?? '');
        // 1) If upload is NOT an image, return a link
        if (!uploadDoc.mimeType.startsWith('image')) {
            return `<a${providedStyleTag} href="${url}" rel="noopener noreferrer">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uploadDoc.filename ?? '')}</a>`;
        }
        // 2) If image has no different sizes, return a simple <img />
        if (!uploadDoc.sizes || !Object.keys(uploadDoc.sizes).length) {
            return `
        <img${providedStyleTag}
          alt="${alt}"
          height="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(String(uploadDoc.height ?? ''))}"
          src="${url}"
          width="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(String(uploadDoc.width ?? ''))}"
        />
      `;
        }
        // 3) If image has different sizes, build a <picture> element with <source> tags
        let pictureHTML = '';
        for(const size in uploadDoc.sizes){
            const imageSize = uploadDoc.sizes[size];
            if (!imageSize || !imageSize.width || !imageSize.height || !imageSize.mimeType || !imageSize.filesize || !imageSize.filename || !imageSize.url) {
                continue;
            }
            pictureHTML += `
        <source
          media="(max-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(String(imageSize.width))}px)"
          srcset="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(imageSize.url)}"
          type="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(imageSize.mimeType)}"
        />
      `;
        }
        pictureHTML += `
      <img
        alt="${alt}"
        height="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(String(uploadDoc.height ?? ''))}"
        src="${url}"
        width="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(String(uploadDoc.width ?? ''))}"
      />
    `;
        return `<picture${providedStyleTag}>${pictureHTML}</picture>`;
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/defaultConverters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "defaultHTMLConvertersAsync",
    ()=>defaultHTMLConvertersAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$blockquote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/blockquote.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$heading$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/heading.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$horizontalRule$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/horizontalRule.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$linebreak$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/linebreak.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/list.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$paragraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/paragraph.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$tab$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/tab.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/converters/upload.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const defaultHTMLConvertersAsync = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$paragraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParagraphHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$linebreak$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinebreakHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$blockquote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BlockquoteHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$heading$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadingHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$horizontalRule$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HorizontalRuleHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListHTMLConverterAsync"],
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkHTMLConverterAsync"])({}),
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UploadHTMLConverterAsync"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$converters$2f$tab$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabHTMLConverterAsync"]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "convertLexicalNodesToHTMLAsync",
    ()=>convertLexicalNodesToHTMLAsync,
    "convertLexicalToHTMLAsync",
    ()=>convertLexicalToHTMLAsync
]);
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable no-console */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$validate$2f$hasText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/validate/hasText.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$shared$2f$findConverterForNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/shared/findConverterForNode.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$defaultConverters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/defaultConverters.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$defaultConverters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$defaultConverters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function convertLexicalToHTMLAsync({ className, converters, data, disableContainer, disableIndent, disableTextAlign, populate }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$validate$2f$hasText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasText"])(data)) {
        let finalConverters = {};
        if (converters) {
            if (typeof converters === 'function') {
                finalConverters = converters({
                    defaultConverters: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$defaultConverters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultHTMLConvertersAsync"]
                });
            } else {
                finalConverters = converters;
            }
        } else {
            finalConverters = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$defaultConverters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultHTMLConvertersAsync"];
        }
        const html = (await convertLexicalNodesToHTMLAsync({
            converters: finalConverters,
            disableIndent,
            disableTextAlign,
            nodes: data?.root?.children,
            parent: data?.root,
            populate
        })).join('');
        if (disableContainer) {
            return html;
        } else {
            return `<div class="${className ?? 'payload-richtext'}">${html}</div>`;
        }
    }
    if (disableContainer) {
        return '';
    } else {
        return `<div class="${className ?? 'payload-richtext'}"></div>`;
    }
}
async function convertLexicalNodesToHTMLAsync({ converters, disableIndent, disableTextAlign, nodes, parent, populate }) {
    const unknownConverter = converters.unknown;
    const htmlArray = [];
    let i = -1;
    for (const node of nodes){
        i++;
        const { converterForNode, providedCSSString, providedStyleTag } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$shared$2f$findConverterForNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findConverterForNode"])({
            converters,
            disableIndent,
            disableTextAlign,
            node,
            unknownConverter
        });
        try {
            let nodeHTML;
            if (converterForNode) {
                const converted = typeof converterForNode === 'function' ? await converterForNode({
                    childIndex: i,
                    converters,
                    node,
                    populate,
                    nodesToHTML: async (args)=>{
                        return await convertLexicalNodesToHTMLAsync({
                            converters: args.converters ?? converters,
                            disableIndent: args.disableIndent ?? disableIndent,
                            disableTextAlign: args.disableTextAlign ?? disableTextAlign,
                            nodes: args.nodes,
                            parent: args.parent ?? {
                                ...node,
                                parent
                            },
                            populate
                        });
                    },
                    parent,
                    providedCSSString,
                    providedStyleTag
                }) : converterForNode;
                nodeHTML = converted;
            } else {
                nodeHTML = '<span>unknown node</span>';
            }
            htmlArray.push(nodeHTML);
        } catch (error) {
            console.error('Error converting lexical node to HTML:', error, 'node:', node);
            htmlArray.push('');
        }
    }
    return htmlArray.filter(Boolean);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/populateGraphQL/populate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "populate",
    ()=>populate
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const populate = async ({ id, collectionSlug, currentDepth, data, depth, draft, key, overrideAccess, req, select, showHiddenFields })=>{
    const shouldPopulate = depth && currentDepth <= depth;
    // usually depth is checked within recursivelyPopulateFieldsForGraphQL. But since this populate function can be called outside of that (in rest afterRead node hooks) we need to check here too
    if (!shouldPopulate) {
        return;
    }
    const dataRef = data;
    const doc = await req.payloadDataLoader?.load((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["createDataloaderCacheKey"])({
        collectionSlug,
        currentDepth: currentDepth + 1,
        depth,
        docID: id,
        draft,
        fallbackLocale: req.fallbackLocale,
        locale: req.locale,
        overrideAccess,
        select,
        showHiddenFields,
        transactionID: req.transactionID
    }));
    if (doc) {
        dataRef[key] = doc;
    } else {
        dataRef[key] = null;
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/utilities/payloadPopulateFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getPayloadPopulateFn",
    ()=>getPayloadPopulateFn
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$populateGraphQL$2f$populate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/populateGraphQL/populate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$populateGraphQL$2f$populate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$populateGraphQL$2f$populate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const getPayloadPopulateFn = async ({ currentDepth, depth, draft, overrideAccess, payload, req, showHiddenFields })=>{
    let reqToUse = req;
    if (req === undefined && payload) {
        reqToUse = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["createLocalReq"])({}, payload);
    }
    if (!reqToUse) {
        throw new Error('No req or payload provided');
    }
    const populateFn = async ({ id, collectionSlug, select })=>{
        const dataContainer = {};
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$populateGraphQL$2f$populate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["populate"])({
            id,
            collectionSlug,
            currentDepth,
            data: dataContainer,
            depth,
            draft: draft ?? false,
            key: 'value',
            overrideAccess: overrideAccess ?? true,
            req: reqToUse,
            select,
            showHiddenFields: showHiddenFields ?? false
        });
        return dataContainer.value;
    };
    return populateFn;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LinkDiffHTMLConverterAsync",
    ()=>LinkDiffHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/escape-html/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const LinkDiffHTMLConverterAsync = ({ internalDocToHref })=>({
        autolink: async ({ node, nodesToHTML, providedStyleTag })=>{
            const children = (await nodesToHTML({
                nodes: node.children
            })).join('');
            // hash fields to ensure they are diffed if they change
            const nodeFieldsHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(JSON.stringify(node.fields)).digest('hex');
            const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["sanitizeUrl"])(node.fields.url ?? ''));
            return `<a${providedStyleTag} data-fields-hash="${nodeFieldsHash}" data-enable-match="true" href="${href}"${node.fields.newTab ? ' rel="noopener noreferrer" target="_blank"' : ''}>
        ${children}
      </a>`;
        },
        link: async ({ node, nodesToHTML, populate, providedStyleTag })=>{
            const children = (await nodesToHTML({
                nodes: node.children
            })).join('');
            let href = node.fields.url ?? '';
            if (node.fields.linkType === 'internal') {
                if (internalDocToHref) {
                    href = await internalDocToHref({
                        linkNode: node,
                        populate
                    });
                } else {
                    // eslint-disable-next-line no-console
                    console.error('Lexical => HTML converter: Link converter: found internal link, but internalDocToHref is not provided');
                    href = '#'; // fallback
                }
            }
            // hash fields to ensure they are diffed if they change
            const nodeFieldsHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(JSON.stringify(node.fields ?? {})).digest('hex');
            const safeHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$escape$2d$html$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["sanitizeUrl"])(href));
            return `<a${providedStyleTag} data-fields-hash="${nodeFieldsHash}" data-enable-match="true" href="${safeHref}"${node.fields.newTab ? ' rel="noopener noreferrer" target="_blank"' : ''}>
        ${children}
      </a>`;
        }
    });
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/listitem/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItemDiffHTMLConverterAsync",
    ()=>ListItemDiffHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$icons$2f$Check$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/icons/Check/index.js [app-rsc] (ecmascript)");
;
;
const ListItemDiffHTMLConverterAsync = {
    listitem: async ({ node, nodesToHTML, parent, providedCSSString })=>{
        const hasSubLists = node.children.some((child)=>child.type === 'list');
        const children = (await nodesToHTML({
            nodes: node.children
        })).join('');
        if ('listType' in parent && parent?.listType === 'check') {
            const ReactDOMServer = (await __turbopack_context__.A("[project]/Documents/GitHub/Probars/node_modules/next/dist/compiled/react-dom/server.node.js [app-rsc] (ecmascript, async loader)")).default;
            const JSX = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                "aria-checked": node.checked ? true : false,
                className: `checkboxItem ${node.checked ? 'checkboxItem--checked' : 'checkboxItem--unchecked'}${hasSubLists ? ' checkboxItem--nested' : ''}`,
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                role: "checkbox",
                tabIndex: -1,
                value: node.value,
                children: hasSubLists ? // When sublists exist, just render them safely as HTML
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    dangerouslySetInnerHTML: {
                        __html: children
                    }
                }) : // Otherwise, show our custom styled checkbox
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "checkboxItem__wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "checkboxItem__icon",
                            "data-checked": node.checked,
                            "data-enable-match": "true",
                            children: node.checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$icons$2f$Check$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CheckIcon"], {})
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: "checkboxItem__label",
                            children: children
                        })
                    ]
                })
            });
            const html = ReactDOMServer.renderToStaticMarkup(JSX);
            // Add style="list-style-type: none;${providedCSSString}" to html
            const styleIndex = html.indexOf('class="list-item-checkbox');
            const classIndex = html.indexOf('class="list-item-checkbox', styleIndex);
            const classEndIndex = html.indexOf('"', classIndex + 6);
            const className = html.substring(classIndex, classEndIndex);
            const classNameWithStyle = `${className} style="list-style-type: none;${providedCSSString}"`;
            const htmlWithStyle = html.replace(className, classNameWithStyle);
            return htmlWithStyle;
        } else {
            return `<li
          class="${hasSubLists ? 'nestedListItem' : ''}"
          style="${hasSubLists ? `list-style-type: none;${providedCSSString}` : providedCSSString}"
          value="${node.value}"
          data-enable-match="true"
        >${children}</li>`;
        }
    }
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/relationship/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "RelationshipDiffHTMLConverterAsync",
    ()=>RelationshipDiffHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const baseClass = 'lexical-relationship-diff';
const RelationshipDiffHTMLConverterAsync = ({ i18n, req })=>{
    return {
        relationship: async ({ node, populate, providedCSSString })=>{
            let data = undefined;
            const id = typeof node.value === 'object' ? node.value.id : node.value;
            // If there's no valid upload data, populate return an empty string
            if (typeof node.value !== 'object') {
                if (!populate) {
                    return '';
                }
                data = await populate({
                    id,
                    collectionSlug: node.relationTo
                });
            } else {
                data = node.value;
            }
            const relatedCollection = req.payload.collections[node.relationTo]?.config;
            const ReactDOMServer = (await __turbopack_context__.A("[project]/Documents/GitHub/Probars/node_modules/next/dist/compiled/react-dom/server.node.js [app-rsc] (ecmascript, async loader)")).default;
            const JSX = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${baseClass}${providedCSSString}`,
                "data-enable-match": "true",
                "data-id": id,
                "data-slug": node.relationTo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: `${baseClass}__card`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: `${baseClass}__collectionLabel`,
                            children: i18n.t('fields:labelRelationship', {
                                label: relatedCollection?.labels?.singular ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(relatedCollection?.labels?.singular, i18n) : relatedCollection?.slug
                            })
                        }),
                        data && relatedCollection?.admin?.useAsTitle && data[relatedCollection.admin.useAsTitle] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                            className: `${baseClass}__title`,
                            "data-enable-match": "false",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("a", {
                                className: `${baseClass}__link`,
                                "data-enable-match": "false",
                                href: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["formatAdminURL"])({
                                    adminRoute: req.payload.config.routes.admin,
                                    path: `/collections/${relatedCollection?.slug}/${data.id}`,
                                    serverURL: req.payload.config.serverURL
                                }),
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: data[relatedCollection.admin.useAsTitle]
                            })
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                            children: id
                        })
                    ]
                })
            });
            // Render to HTML
            const html = ReactDOMServer.renderToStaticMarkup(JSX);
            return html;
        }
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/unknown/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnknownDiffHTMLConverterAsync",
    ()=>UnknownDiffHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
const baseClass = 'lexical-unknown-diff';
const UnknownDiffHTMLConverterAsync = ({ i18n, req })=>{
    return {
        unknown: async ({ node, providedCSSString })=>{
            const ReactDOMServer = (await __turbopack_context__.A("[project]/Documents/GitHub/Probars/node_modules/next/dist/compiled/react-dom/server.node.js [app-rsc] (ecmascript, async loader)")).default;
            // hash fields to ensure they are diffed if they change
            const nodeFieldsHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(JSON.stringify(node ?? {})).digest('hex');
            let nodeType = node.type;
            let nodeTypeSpecifier = null;
            if (node.type === 'block') {
                nodeTypeSpecifier = node.fields.blockType;
                nodeType = 'Block';
            } else if (node.type === 'inlineBlock') {
                nodeTypeSpecifier = node.fields.blockType;
                nodeType = 'InlineBlock';
            }
            const JSX = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${baseClass}${providedCSSString}`,
                "data-enable-match": "true",
                "data-fields-hash": `${nodeFieldsHash}`,
                children: [
                    nodeTypeSpecifier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                        className: `${baseClass}__specifier`,
                        children: [
                            nodeTypeSpecifier,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        children: nodeType
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: `${baseClass}__meta`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("br", {})
                    })
                ]
            });
            // Render to HTML
            const html = ReactDOMServer.renderToStaticMarkup(JSX);
            return html;
        }
    };
};
}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/upload/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "UploadDiffHTMLConverterAsync",
    ()=>UploadDiffHTMLConverterAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$graphics$2f$File$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/graphics/File/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const baseClass = 'lexical-upload-diff';
const UploadDiffHTMLConverterAsync = ()=>{
    return {
        upload: async ({ node, populate, providedCSSString })=>{
            const uploadNode = node;
            let uploadDoc = undefined;
            // If there's no valid upload data, populate return an empty string
            if (typeof uploadNode.value !== 'object') {
                if (!populate) {
                    return '';
                }
                uploadDoc = await populate({
                    id: uploadNode.value,
                    collectionSlug: uploadNode.relationTo
                });
            } else {
                uploadDoc = uploadNode.value;
            }
            if (!uploadDoc) {
                return '';
            }
            const alt = node.fields?.alt || uploadDoc?.alt || '';
            const thumbnailSRC = 'thumbnailURL' in uploadDoc && uploadDoc?.thumbnailURL || uploadDoc?.url || '';
            const ReactDOMServer = (await __turbopack_context__.A("[project]/Documents/GitHub/Probars/node_modules/next/dist/compiled/react-dom/server.node.js [app-rsc] (ecmascript, async loader)")).default;
            // hash fields to ensure they are diffed if they change
            const nodeFieldsHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(JSON.stringify(node.fields ?? {})).digest('hex');
            const JSX = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${baseClass}${providedCSSString}`,
                "data-enable-match": "true",
                "data-fields-hash": `${nodeFieldsHash}`,
                "data-filename": uploadDoc?.filename,
                "data-lexical-upload-id": uploadNode.value,
                "data-lexical-upload-relation-to": uploadNode.relationTo,
                "data-src": thumbnailSRC,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: `${baseClass}__card`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: `${baseClass}__thumbnail`,
                            children: thumbnailSRC?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("img", {
                                alt: alt,
                                src: thumbnailSRC
                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$graphics$2f$File$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["File"], {})
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: `${baseClass}__info`,
                            "data-enable-match": "false",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                    children: uploadDoc?.filename
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: `${baseClass}__meta`,
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["formatFilesize"])(uploadDoc?.filesize),
                                        typeof uploadDoc?.width === 'number' && typeof uploadDoc?.height === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                " - ",
                                                uploadDoc?.width,
                                                "x",
                                                uploadDoc?.height
                                            ]
                                        }),
                                        uploadDoc?.mimeType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                " - ",
                                                uploadDoc?.mimeType
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            });
            // Render to HTML
            const html = ReactDOMServer.renderToStaticMarkup(JSX);
            return html;
        }
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LexicalDiffComponent",
    ()=>LexicalDiffComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$FieldDiffContainer$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/elements/FieldDiffContainer/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$HTMLDiff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/elements/HTMLDiff/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToHtml/async/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$utilities$2f$payloadPopulateFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/features/converters/utilities/payloadPopulateFn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$listitem$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/listitem/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$relationship$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/relationship/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$unknown$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/unknown/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$upload$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/converters/upload/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$utilities$2f$payloadPopulateFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$relationship$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$upload$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$utilities$2f$payloadPopulateFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$relationship$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$upload$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const baseClass = 'lexical-diff';
const LexicalDiffComponent = async (args)=>{
    const { comparisonValue: valueFrom, field, i18n, locale, nestingLevel, req, versionValue: valueTo } = args;
    const internalDocToHref = async ({ linkNode, populate })=>{
        if (!linkNode.fields.doc) {
            return '#';
        }
        const { relationTo, value } = linkNode.fields.doc;
        let docId;
        if (typeof value === 'object' && value !== null) {
            docId = value.id;
        } else if (populate && typeof value !== 'object') {
            const doc = await populate({
                id: value,
                collectionSlug: relationTo
            });
            if (!doc || !doc.id) {
                return '#';
            }
            docId = doc.id;
        } else {
            docId = value;
        }
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["formatAdminURL"])({
            adminRoute: req.payload.config.routes.admin,
            path: `/collections/${relationTo}/${docId}`,
            serverURL: req.payload.config.serverURL
        });
    };
    const converters = ({ defaultConverters })=>({
            ...defaultConverters,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkDiffHTMLConverterAsync"])({
                internalDocToHref
            }),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$listitem$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListItemDiffHTMLConverterAsync"],
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$upload$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UploadDiffHTMLConverterAsync"])({
                i18n,
                req
            }),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$relationship$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RelationshipDiffHTMLConverterAsync"])({
                i18n,
                req
            }),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$converters$2f$unknown$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnknownDiffHTMLConverterAsync"])({
                i18n,
                req
            })
        });
    const payloadPopulateFn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$utilities$2f$payloadPopulateFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadPopulateFn"])({
        currentDepth: 0,
        depth: 1,
        req
    });
    const fromHTML = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertLexicalToHTMLAsync"])({
        converters,
        data: valueFrom,
        disableContainer: true,
        populate: payloadPopulateFn
    });
    const toHTML = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToHtml$2f$async$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertLexicalToHTMLAsync"])({
        converters,
        data: valueTo,
        disableContainer: true,
        populate: payloadPopulateFn
    });
    const { From, To } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$HTMLDiff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getHTMLDiffComponents"])({
        // Ensure empty paragraph is displayed for empty rich text fields - otherwise, toHTML may be displayed in the wrong column
        fromHTML: fromHTML?.length ? fromHTML : '<p></p>',
        toHTML: toHTML?.length ? toHTML : '<p></p>'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$FieldDiffContainer$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FieldDiffContainer"], {
        className: baseClass,
        From: From,
        i18n: i18n,
        label: {
            label: field.label,
            locale
        },
        nestingLevel: nestingLevel,
        To: To
    });
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=0tbb_%40payloadcms_richtext-lexical_dist_0k0ay~e._.js.map