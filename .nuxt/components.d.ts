
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'BigdataAnalyticsDiscover': typeof import("../components/BigdataAnalytics/Discover.vue")['default']
    'BigdataAnalyticsFeedback': typeof import("../components/BigdataAnalytics/Feedback.vue")['default']
    'BigdataAnalyticsFunFacts': typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']
    'BigdataAnalyticsIndustries': typeof import("../components/BigdataAnalytics/Industries.vue")['default']
    'BigdataAnalyticsMainBanner': typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']
    'BigdataAnalyticsOurRecentStory': typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']
    'BigdataAnalyticsServices': typeof import("../components/BigdataAnalytics/Services.vue")['default']
    'BigdataAnalyticsStartYourFreeTrial': typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']
    'BigdataAnalyticsTeam': typeof import("../components/BigdataAnalytics/Team.vue")['default']
    'BigdataAnalyticsWhatWeDo': typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']
    'ChatWidget': typeof import("../components/ChatWidget.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'HeaderFive': typeof import("../components/HeaderFive.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyBigdataAnalyticsDiscover': LazyComponent<typeof import("../components/BigdataAnalytics/Discover.vue")['default']>
    'LazyBigdataAnalyticsFeedback': LazyComponent<typeof import("../components/BigdataAnalytics/Feedback.vue")['default']>
    'LazyBigdataAnalyticsFunFacts': LazyComponent<typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']>
    'LazyBigdataAnalyticsIndustries': LazyComponent<typeof import("../components/BigdataAnalytics/Industries.vue")['default']>
    'LazyBigdataAnalyticsMainBanner': LazyComponent<typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']>
    'LazyBigdataAnalyticsOurRecentStory': LazyComponent<typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']>
    'LazyBigdataAnalyticsServices': LazyComponent<typeof import("../components/BigdataAnalytics/Services.vue")['default']>
    'LazyBigdataAnalyticsStartYourFreeTrial': LazyComponent<typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']>
    'LazyBigdataAnalyticsTeam': LazyComponent<typeof import("../components/BigdataAnalytics/Team.vue")['default']>
    'LazyBigdataAnalyticsWhatWeDo': LazyComponent<typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']>
    'LazyChatWidget': LazyComponent<typeof import("../components/ChatWidget.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyHeaderFive': LazyComponent<typeof import("../components/HeaderFive.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BigdataAnalyticsDiscover: typeof import("../components/BigdataAnalytics/Discover.vue")['default']
export const BigdataAnalyticsFeedback: typeof import("../components/BigdataAnalytics/Feedback.vue")['default']
export const BigdataAnalyticsFunFacts: typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']
export const BigdataAnalyticsIndustries: typeof import("../components/BigdataAnalytics/Industries.vue")['default']
export const BigdataAnalyticsMainBanner: typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']
export const BigdataAnalyticsOurRecentStory: typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']
export const BigdataAnalyticsServices: typeof import("../components/BigdataAnalytics/Services.vue")['default']
export const BigdataAnalyticsStartYourFreeTrial: typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']
export const BigdataAnalyticsTeam: typeof import("../components/BigdataAnalytics/Team.vue")['default']
export const BigdataAnalyticsWhatWeDo: typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']
export const ChatWidget: typeof import("../components/ChatWidget.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const HeaderFive: typeof import("../components/HeaderFive.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyBigdataAnalyticsDiscover: LazyComponent<typeof import("../components/BigdataAnalytics/Discover.vue")['default']>
export const LazyBigdataAnalyticsFeedback: LazyComponent<typeof import("../components/BigdataAnalytics/Feedback.vue")['default']>
export const LazyBigdataAnalyticsFunFacts: LazyComponent<typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']>
export const LazyBigdataAnalyticsIndustries: LazyComponent<typeof import("../components/BigdataAnalytics/Industries.vue")['default']>
export const LazyBigdataAnalyticsMainBanner: LazyComponent<typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']>
export const LazyBigdataAnalyticsOurRecentStory: LazyComponent<typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']>
export const LazyBigdataAnalyticsServices: LazyComponent<typeof import("../components/BigdataAnalytics/Services.vue")['default']>
export const LazyBigdataAnalyticsStartYourFreeTrial: LazyComponent<typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']>
export const LazyBigdataAnalyticsTeam: LazyComponent<typeof import("../components/BigdataAnalytics/Team.vue")['default']>
export const LazyBigdataAnalyticsWhatWeDo: LazyComponent<typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']>
export const LazyChatWidget: LazyComponent<typeof import("../components/ChatWidget.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeaderFive: LazyComponent<typeof import("../components/HeaderFive.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
