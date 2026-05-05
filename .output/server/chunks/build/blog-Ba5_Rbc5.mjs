import { u as useSeoMeta, _ as _sfc_main$3, a as __nuxt_component_2, b as _sfc_main$2$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './PageHero-HwrJT5C7.mjs';
import { _ as _sfc_main$2 } from './CtaBanner-dgN-8Fvq.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:module';
import 'vue-router';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Blog | Altisry",
      description: "Insights, product updates, and open banking analysis from Altisry."
    });
    const posts = [
      {
        slug: "launching-bulk-payments-for-enterprise-payout-operations",
        category: "Product",
        title: "Launching Bulk Payments for enterprise payout operations",
        excerpt: "How finance teams can process thousands of payouts with stronger controls and faster reconciliation.",
        author: "Altisry Product Team",
        date: "May 2026"
      },
      {
        slug: "designing-resilient-webhook-pipelines-for-payment-events",
        category: "Engineering",
        title: "Designing resilient webhook pipelines for payment events",
        excerpt: "Best practices for idempotency, retries, and event ordering in production systems.",
        author: "Platform Engineering",
        date: "Apr 2026"
      },
      {
        slug: "where-open-banking-is-heading-in-2026-and-beyond",
        category: "Market",
        title: "Where open banking is heading in 2026 and beyond",
        excerpt: "A practical view of adoption trends in lending, treasury, and account-to-account payments.",
        author: "Strategy Team",
        date: "Mar 2026"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_CtaBanner = _sfc_main$2;
      const _component_AppFooter = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PageHero, {
        tag: "Blog",
        title: "BLOG",
        description: "Read product updates, engineering deep dives, and market analysis from the Altisry team."
      }, null, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(posts, (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.title,
          to: `/blog/${post.slug}`,
          class: "card hover:shadow-lg hover:border-brand-300 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-xs uppercase tracking-wider font-bold text-brand-600 mb-2"${_scopeId}>${ssrInterpolate(post.category)}</p><h2 class="text-xl font-bold text-navy-900 mb-3 leading-tight"${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="text-sm text-gray-600 leading-relaxed mb-5"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><div class="flex items-center justify-between text-xs text-gray-500 mb-4"${_scopeId}><span${_scopeId}>${ssrInterpolate(post.author)}</span><span${_scopeId}>${ssrInterpolate(post.date)}</span></div><span class="text-sm font-semibold text-brand-600"${_scopeId}>Read full post</span>`);
            } else {
              return [
                createVNode("p", { class: "text-xs uppercase tracking-wider font-bold text-brand-600 mb-2" }, toDisplayString(post.category), 1),
                createVNode("h2", { class: "text-xl font-bold text-navy-900 mb-3 leading-tight" }, toDisplayString(post.title), 1),
                createVNode("p", { class: "text-sm text-gray-600 leading-relaxed mb-5" }, toDisplayString(post.excerpt), 1),
                createVNode("div", { class: "flex items-center justify-between text-xs text-gray-500 mb-4" }, [
                  createVNode("span", null, toDisplayString(post.author), 1),
                  createVNode("span", null, toDisplayString(post.date), 1)
                ]),
                createVNode("span", { class: "text-sm font-semibold text-brand-600" }, "Read full post")
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, {
        title: "Want updates in your inbox?",
        subtitle: "Get product releases and open banking insights from Altisry."
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-Ba5_Rbc5.mjs.map
