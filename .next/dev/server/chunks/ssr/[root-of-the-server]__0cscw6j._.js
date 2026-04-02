module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Documents/GitHub/Probars/collections/Users.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
const Users = {
    slug: 'users',
    admin: {
        useAsTitle: 'email'
    },
    auth: true,
    fields: []
};
}),
"[project]/Documents/GitHub/Probars/blocks/Hero.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroBlock",
    ()=>HeroBlock
]);
const HeroBlock = {
    slug: 'hero',
    labels: {
        singular: 'Hero',
        plural: 'Heroes'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'subheading',
            type: 'text',
            localized: true
        },
        {
            name: 'buttonText',
            type: 'text',
            localized: true
        },
        {
            name: 'buttonLink',
            type: 'text'
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media'
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/blocks/RichText.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "RichTextBlock",
    ()=>RichTextBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const RichTextBlock = {
    slug: 'richText',
    labels: {
        singular: 'Rich Text',
        plural: 'Rich Text Blocks'
    },
    fields: [
        {
            name: 'content',
            type: 'richText',
            editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])({}),
            localized: true
        }
    ]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/blocks/Team.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamBlock",
    ()=>TeamBlock
]);
const TeamBlock = {
    slug: 'team',
    labels: {
        singular: 'Komanda',
        plural: 'Komandas sadaļas'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            localized: true
        },
        {
            name: 'members',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true
                },
                {
                    name: 'role',
                    type: 'text',
                    localized: true
                },
                {
                    name: 'bio',
                    type: 'textarea',
                    label: 'Īsais bio',
                    localized: true
                },
                {
                    name: 'fullBio',
                    type: 'textarea',
                    label: 'Pilnais bio',
                    localized: true
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media'
                }
            ]
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/blocks/Gallery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryBlock",
    ()=>GalleryBlock
]);
const GalleryBlock = {
    slug: 'gallery',
    labels: {
        singular: 'Gallery',
        plural: 'Galleries'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            localized: true
        },
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                },
                {
                    name: 'caption',
                    type: 'text',
                    localized: true
                }
            ]
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/blocks/Cta.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTABlock",
    ()=>CTABlock
]);
const CTABlock = {
    slug: 'cta',
    labels: {
        singular: 'CTA',
        plural: 'CTAs'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'text',
            type: 'textarea',
            localized: true
        },
        {
            name: 'buttonText',
            type: 'text',
            localized: true
        },
        {
            name: 'buttonLink',
            type: 'text'
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/blocks/Partners.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnersBlock",
    ()=>PartnersBlock
]);
const PartnersBlock = {
    slug: 'partners',
    labels: {
        singular: 'Partneri',
        plural: 'Partneru sadaļas'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            localized: true
        },
        {
            name: 'partners',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true
                },
                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: 'url',
                    type: 'text'
                }
            ]
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/blocks/EventBuilder.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventBuilderBlock",
    ()=>EventBuilderBlock
]);
const EventBuilderBlock = {
    slug: 'eventBuilder',
    labels: {
        singular: 'Event Builder',
        plural: 'Event Builder sadaļas'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            label: 'Virsraksts',
            localized: true
        },
        {
            name: 'subheading',
            type: 'text',
            label: 'Apakšvirsraksts',
            localized: true
        },
        {
            name: 'submitButtonText',
            type: 'text',
            label: 'Pogas teksts',
            localized: true
        },
        {
            name: 'emptyStateText',
            type: 'text',
            label: 'Tukšā stāvokļa teksts',
            localized: true
        },
        {
            name: 'services',
            type: 'array',
            label: 'Pakalpojumi',
            fields: [
                {
                    name: 'key',
                    type: 'text',
                    required: true,
                    label: 'Atslēga (nemainīt!)'
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    label: 'Nosaukums',
                    localized: true
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Apraksts',
                    localized: true
                },
                {
                    name: 'price',
                    type: 'number',
                    label: 'Cena (€)'
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media'
                }
            ]
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/collections/Pages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Pages",
    ()=>Pages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Hero$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/blocks/Hero.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$RichText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/blocks/RichText.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/blocks/Team.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/blocks/Gallery.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Cta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/blocks/Cta.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Partners$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/blocks/Partners.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$EventBuilder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/blocks/EventBuilder.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$RichText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$RichText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const Pages = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title'
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'layout',
            type: 'blocks',
            localized: true,
            blocks: [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Hero$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroBlock"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$RichText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextBlock"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TeamBlock"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GalleryBlock"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Cta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTABlock"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$Partners$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PartnersBlock"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$blocks$2f$EventBuilder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EventBuilderBlock"]
            ]
        },
        {
            name: 'seo',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    localized: true
                },
                {
                    name: 'description',
                    type: 'textarea',
                    localized: true
                }
            ]
        }
    ]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/collections/Media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Media",
    ()=>Media
]);
const Media = {
    slug: 'media',
    upload: true,
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/collections/Posts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Posts",
    ()=>Posts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const Posts = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'publishedAt',
            'status'
        ],
        description: 'Cover image: upload in Media, then select here. Rich text is per locale (lv/ru/en). Set status Published and Published date for the post to appear on the site.'
    },
    access: {
        read: ()=>true
    },
    versions: {
        drafts: true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'status',
            type: 'select',
            options: [
                {
                    label: 'Draft',
                    value: 'draft'
                },
                {
                    label: 'Published',
                    value: 'published'
                }
            ],
            defaultValue: 'draft',
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'excerpt',
            type: 'textarea',
            localized: true
        },
        {
            name: 'coverImage',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'content',
            type: 'richText',
            editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])({}),
            localized: true
        },
        {
            name: 'seo',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    localized: true
                },
                {
                    name: 'description',
                    type: 'textarea',
                    localized: true
                }
            ]
        }
    ]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/globals/SiteSettings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteSettings",
    ()=>SiteSettings
]);
const SiteSettings = {
    slug: 'site-settings',
    label: 'Vietnes iestatījumi',
    fields: [
        {
            name: 'general',
            type: 'group',
            label: 'Vispārīgi',
            fields: [
                {
                    name: 'siteName',
                    type: 'text'
                },
                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: 'contactEmail',
                    type: 'email'
                },
                {
                    name: 'phone',
                    type: 'text'
                },
                {
                    name: 'address',
                    type: 'textarea',
                    localized: true
                }
            ]
        },
        {
            name: 'header',
            type: 'group',
            label: 'Header navigācija',
            fields: [
                {
                    name: 'navLinks',
                    type: 'array',
                    label: 'Navigācijas saites',
                    localized: true,
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'href',
                            type: 'text',
                            required: true
                        }
                    ]
                }
            ]
        },
        {
            name: 'footer',
            type: 'group',
            label: 'Footer',
            fields: [
                {
                    name: 'tagline',
                    type: 'text',
                    label: 'Apakšvirsraksts',
                    localized: true
                },
                {
                    name: 'copyrightText',
                    type: 'text',
                    label: 'Copyright teksts'
                },
                {
                    name: 'socialLinks',
                    type: 'array',
                    label: 'Sociālie tīkli',
                    fields: [
                        {
                            name: 'platform',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'icon',
                            type: 'text',
                            label: 'Ikona (lucide nosaukums)'
                        }
                    ]
                },
                {
                    name: 'footerLinks',
                    type: 'array',
                    label: 'Footer saites',
                    localized: true,
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'href',
                            type: 'text',
                            required: true
                        }
                    ]
                }
            ]
        }
    ]
};
}),
"[project]/Documents/GitHub/Probars/payload.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/Documents/GitHub/Probars/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__ = __turbopack_context__.i("[externals]/@payloadcms/db-postgres [external] (@payloadcms/db-postgres, esm_import, [project]/Documents/GitHub/Probars/node_modules/@payloadcms/db-postgres)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/collections/Users.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/collections/Pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/collections/Media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/collections/Posts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$globals$2f$SiteSettings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/globals/SiteSettings.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$payload$29$__["buildConfig"])({
    admin: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"].slug
    },
    localization: {
        locales: [
            {
                label: 'Latviešu',
                code: 'lv'
            },
            {
                label: 'Русский',
                code: 'ru'
            },
            {
                label: 'English',
                code: 'en'
            }
        ],
        defaultLocale: 'lv',
        fallback: true
    },
    secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
    db: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__["postgresAdapter"])({
        pool: {
            connectionString: process.env.DATABASE_URL
        }
    }),
    editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])({}),
    collections: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Media"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$collections$2f$Posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Posts"]
    ],
    globals: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$globals$2f$SiteSettings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteSettings"]
    ],
    typescript: {
        outputFile: './payload-types.ts'
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Documents/GitHub/Probars/app/(payload)/admin/importMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "importMap",
    ()=>importMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/cell/rscEntry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/rscEntry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/ui/dist/widgets/CollectionCards/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const importMap = {
    "@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RscEntryLexicalCell"],
    "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RscEntryLexicalField"],
    "@payloadcms/richtext-lexical/rsc#LexicalDiffComponent": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LexicalDiffComponent"],
    "@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InlineToolbarFeatureClient"],
    "@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HorizontalRuleFeatureClient"],
    "@payloadcms/richtext-lexical/client#UploadFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UploadFeatureClient"],
    "@payloadcms/richtext-lexical/client#BlockquoteFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BlockquoteFeatureClient"],
    "@payloadcms/richtext-lexical/client#RelationshipFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RelationshipFeatureClient"],
    "@payloadcms/richtext-lexical/client#LinkFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkFeatureClient"],
    "@payloadcms/richtext-lexical/client#ChecklistFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChecklistFeatureClient"],
    "@payloadcms/richtext-lexical/client#OrderedListFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderedListFeatureClient"],
    "@payloadcms/richtext-lexical/client#UnorderedListFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnorderedListFeatureClient"],
    "@payloadcms/richtext-lexical/client#IndentFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IndentFeatureClient"],
    "@payloadcms/richtext-lexical/client#AlignFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AlignFeatureClient"],
    "@payloadcms/richtext-lexical/client#HeadingFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadingFeatureClient"],
    "@payloadcms/richtext-lexical/client#ParagraphFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParagraphFeatureClient"],
    "@payloadcms/richtext-lexical/client#InlineCodeFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InlineCodeFeatureClient"],
    "@payloadcms/richtext-lexical/client#SuperscriptFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SuperscriptFeatureClient"],
    "@payloadcms/richtext-lexical/client#SubscriptFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptFeatureClient"],
    "@payloadcms/richtext-lexical/client#StrikethroughFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StrikethroughFeatureClient"],
    "@payloadcms/richtext-lexical/client#UnderlineFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnderlineFeatureClient"],
    "@payloadcms/richtext-lexical/client#BoldFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BoldFeatureClient"],
    "@payloadcms/richtext-lexical/client#ItalicFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItalicFeatureClient"],
    "@payloadcms/next/rsc#CollectionCards": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionCards"]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/app/(payload)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"408eb178095cf11ddd3de262a539aa19456b880f80":{"name":"$$RSC_SERVER_ACTION_0"}},"Documents/GitHub/Probars/app/(payload)/layout.tsx",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/payload.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/next/dist/utilities/handleServerFunctions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/node_modules/@payloadcms/next/dist/layouts/Root/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Probars/app/(payload)/admin/importMap.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function serverFunction(args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleServerFunctions"])({
        ...args,
        config: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        importMap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importMap"]
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "408eb178095cf11ddd3de262a539aa19456b880f80", null);
const serverFunction = $$RSC_SERVER_ACTION_0;
const Layout = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootLayout"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        importMap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Probars$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importMap"],
        serverFunction: serverFunction,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/Probars/app/(payload)/layout.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = Layout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Documents/GitHub/Probars/app/(payload)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/Probars/app/(payload)/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0cscw6j._.js.map