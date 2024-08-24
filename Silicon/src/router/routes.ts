const authRoutes = [
  {
    path: '/sign-in',
    name: 'account.sign-in',
    meta: {
      title: 'Account - Sign In | Sepia'
    },
    component: () => import('@/views/account/sign-in/index.vue')
  },
  {
    path: '/sign-up',
    name: 'account.sign-up',
    meta: {
      title: 'Account - Sign Up | Sepia'
    },
    component: () => import('@/views/account/sign-up/index.vue')
  }
]

const errorPageRoutes = [
  {
    path: '/error-404-1',
    name: 'pages.error-404-1',
    meta: {
      title: '404 Not Found v1 | Sepia'
    },
    component: () => import('@/views/pages/error-404-1/index.vue')
  },
  {
    path: '/error-404-2',
    name: 'pages.error-404-2',
    meta: {
      title: '404 Not Found v2 | Sepia'
    },
    component: () => import('@/views/pages/error-404-2/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'pages.error-404-1'
  }
]

const landingRoute = [
  {
    path: '',
    name: 'landing',
    meta: {
      title: 'Sepia',
      authRequired: false
    },
    component: () => import('@/views/landings/digital-agency/index.vue')
  }
]

const landingsRoutes = [
  {
    path: '',
    name: 'landings',
    meta: { authRequired: false },
    children: [
      {
        path: '/mobile-app-1',
        name: 'landings.mobile-app-1',
        meta: {
          title: 'Mobile App Showcase Landing v.1 | Sepia'
        },
        component: () => import('@/views/landings/mobile-app-1/index.vue')
      },
      {
        path: '/mobile-app-2',
        name: 'landings.mobile-app-2',
        meta: {
          title: 'Mobile App Showcase Landing v.2 | Sepia'
        },
        component: () => import('@/views/landings/mobile-app-2/index.vue')
      },
      {
        path: '/mobile-app-3',
        name: 'landings.mobile-app-3',
        meta: {
          title: 'Mobile App Showcase Landing v.3 | Sepia'
        },
        component: () => import('@/views/landings/mobile-app-3/index.vue')
      },
      {
        path: '/product',
        name: 'landings.product',
        meta: {
          title: 'Product Landing | Sepia'
        },
        component: () => import('@/views/landings/product/index.vue')
      },
      {
        path: '/olivia',
        name: 'landings.olivia',
        meta: {
          title: 'SaaS Landing v.1 | Sepia'
        },
        component: () => import('@/views/landings/olivia/index.vue')
      },
      {
        path: '/saas-2',
        name: 'landings.saas-2',
        meta: {
          title: 'SaaS Landing v.2 | Sepia'
        },
        component: () => import('@/views/landings/saas-2/index.vue')
      },
      {
        path: '/saas-3',
        name: 'landings.saas-3',
        meta: {
          title: 'SaaS Landing v.3 | Sepia'
        },
        component: () => import('@/views/landings/saas-3/index.vue')
      },
      {
        path: '/saas-4',
        name: 'landings.saas-4',
        meta: {
          title: 'SaaS Landing v.4 | Sepia'
        },
        component: () => import('@/views/landings/saas-4/index.vue')
      },
      {
        path: '/saas-5',
        name: 'landings.saas-5',
        meta: {
          title: 'Sépia Chatbot'
        },
        component: () => import('@/views/landings/saas-5/index.vue')
      },
      {
        path: '/startup',
        name: 'landings.startup',
        meta: {
          title: 'Startup Landing | Sepia'
        },
        component: () => import('@/views/landings/startup/index.vue')
      },
      {
        path: '/financial',
        name: 'landings.financial',
        meta: {
          title: 'Financial Consulting Landing | Sepia'
        },
        component: () => import('@/views/landings/financial/index.vue')
      },
      {
        path: '/online-course',
        name: 'landings.online-course',
        meta: {
          title: 'Online Courses Landing | Sepia'
        },
        component: () => import('@/views/landings/online-course/index.vue')
      },
      {
        path: '/medical',
        name: 'landings.medical',
        meta: {
          title: 'Medical Landing | Sepia'
        },
        component: () => import('@/views/landings/medical/index.vue')
      },
      {
        path: '/software-dev-agency-1',
        name: 'landings.dev-agency-1',
        meta: {
          title: 'Software Dev Agency Landing v.1 | Sepia'
        },
        component: () => import('@/views/landings/dev-agency-1/index.vue')
      },
      {
        path: '/software-dev-agency-2',
        name: 'landings.dev-agency-2',
        meta: {
          title: 'Software Dev Agency Landing v.2 | Sepia'
        },
        component: () => import('@/views/landings/dev-agency-2/index.vue')
      },
      {
        path: '/software-dev-agency-3',
        name: 'landings.dev-agency-3',
        meta: {
          title: 'Software Dev Agency Landing v.3 | Sepia'
        },
        component: () => import('@/views/landings/dev-agency-3/index.vue')
      },
      {
        path: '/conference',
        name: 'landings.conference',
        meta: {
          title: 'Conference Landing | Sepia'
        },
        component: () => import('@/views/landings/conference/index.vue')
      },
      {
        path: '/digital-agency',
        name: 'landings.digital-agency',
        meta: {
          title: 'Digital Agency Landing | Sepia'
        },
        component: () => import('@/views/landings/digital-agency/index.vue')
      },
      {
        path: '/blog',
        name: 'landings.blog',
        meta: {
          title: 'Blog Homepage | Sepia'
        },
        component: () => import('@/views/landings/blog/index.vue')
      }
    ]
  }
]

const pagesRoutes = [
  {
    path: '/pages',
    name: 'pages',
    meta: { authRequired: false },
    children: [
      {
        path: 'about-1',
        name: 'pages.about-1',
        meta: {
          title: 'About v.1 | Sepia'
        },
        component: () => import('@/views/pages/about-1/index.vue')
      },
      {
        path: 'about-2',
        name: 'pages.about-2',
        meta: {
          title: 'About v.2 | Sepia'
        },
        component: () => import('@/views/pages/about-2/index.vue')
      },
      {
        path: 'about-3',
        name: 'pages.about-3',
        meta: {
          title: 'About v.3 | Sepia'
        },
        component: () => import('@/views/pages/about-3/index.vue')
      },
      {
        path: 'list-view-with-sidebar',
        name: 'pages.list-view-with-sidebar',
        meta: {
          title: 'Blog List With Sidebar | Sepia'
        },
        component: () => import('@/views/pages/list-view-with-sidebar/index.vue')
      },
      {
        path: 'grid-view-with-sidebar',
        name: 'pages.grid-view-with-sidebar',
        meta: {
          title: 'Blog Grid With Sidebar | Sepia'
        },
        component: () => import('@/views/pages/grid-view-with-sidebar/index.vue')
      },
      {
        path: 'list-view-no-sidebar',
        name: 'pages.list-view-no-sidebar',
        meta: {
          title: 'Blog List With No Sidebar | Sepia'
        },
        component: () => import('@/views/pages/list-view-no-sidebar/index.vue')
      },
      {
        path: 'grid-view-no-sidebar',
        name: 'pages.grid-view-no-sidebar',
        meta: {
          title: 'Blog Grid With No Sidebar | Sepia'
        },
        component: () => import('@/views/pages/grid-view-no-sidebar/index.vue')
      },
      {
        path: 'simple-feed',
        name: 'pages.simple-feed',
        meta: {
          title: 'Blog Simple Feed | Sepia'
        },
        component: () => import('@/views/pages/simple-feed/index.vue')
      },
      {
        path: 'single-post',
        name: 'pages.single-post',
        meta: {
          title: 'Blog Simple Post | Sepia'
        },
        component: () => import('@/views/pages/single-post/index.vue')
      },
      {
        path: 'podcast',
        name: 'pages.podcast',
        meta: {
          title: 'Blog Single Podcast | Sepia'
        },
        component: () => import('@/views/pages/podcast/index.vue')
      },
      {
        path: 'grid-view',
        name: 'pages.grid-view',
        meta: {
          title: 'Portfolio Grid View | Sepia'
        },
        component: () => import('@/views/pages/grid-view/index.vue')
      },
      {
        path: 'list-view',
        name: 'pages.list-view',
        meta: {
          title: 'Portfolio List View | Sepia'
        },
        component: () => import('@/views/pages/list-view/index.vue')
      },
      {
        path: 'slider',
        name: 'pages.slider',
        meta: {
          title: 'Portfolio Slider View | Sepia'
        },
        component: () => import('@/views/pages/slider/index.vue')
      },
      {
        path: 'courses',
        name: 'pages.courses',
        meta: {
          title: 'Courses | Sepia'
        },
        component: () => import('@/views/pages/courses/index.vue')
      },
      {
        path: 'single-project',
        name: 'pages.single-project',
        meta: {
          title: 'Portfolio Single Project | Sepia'
        },
        component: () => import('@/views/pages/single-project/index.vue')
      },
      {
        path: 'single-course',
        name: 'pages.single-course',
        meta: {
          title: 'Single Course | Sepia'
        },
        component: () => import('@/views/pages/single-course/index.vue')
      },
      {
        path: 'services-1',
        name: 'pages.services-1',
        meta: {
          title: 'Services v.1 | Sepia'
        },
        component: () => import('@/views/pages/services-1/index.vue')
      },
      {
        path: 'services-2',
        name: 'pages.services-2',
        meta: {
          title: 'Services v.2  | Sepia'
        },
        component: () => import('@/views/pages/services-2/index.vue')
      },
      {
        path: 'services-single-1',
        name: 'pages.services-single-1',
        meta: {
          title: 'Service Details v.1 | Sepia'
        },
        component: () => import('@/views/pages/services-single-1/index.vue')
      },
      {
        path: 'services-single-2',
        name: 'pages.services-single-2',
        meta: {
          title: 'Service Details v.2 | Sepia'
        },
        component: () => import('@/views/pages/services-single-2/index.vue')
      },
      {
        path: 'pricing',
        name: 'pages.pricing',
        meta: {
          title: 'Pricing | Sepia'
        },
        component: () => import('@/views/pages/pricing/index.vue')
      },
      {
        path: 'contacts-1',
        name: 'pages.contacts-1',
        meta: {
          title: 'Contacts Sépia'
        },
        component: () => import('@/views/pages/contacts-1/index.vue')
      },
      {
        path: 'contacts-2',
        name: 'pages.contacts-2',
        meta: {
          title: 'Contacts Sépia'
        },
        component: () => import('@/views/pages/contacts-2/index.vue')
      },
      {
        path: 'contacts-3',
        name: 'pages.contacts-3',
        meta: {
          title: 'Contacts Sépia'
        },
        component: () => import('@/views/pages/contacts-3/index.vue')
      }
    ]
  }
]

const accountRoutes = [
  {
    path: '/account',
    name: 'account',
    meta: { authRequired: false },
    children: [
      {
        path: 'details',
        name: 'account.details',
        meta: {
          title: 'Account - Details | Sepia'
        },
        component: () => import('@/views/account/details/index.vue')
      },
      {
        path: 'security',
        name: 'account.security',
        meta: {
          title: 'Account - Security | Sepia'
        },
        component: () => import('@/views/account/security/index.vue')
      },
      {
        path: 'notifications',
        name: 'account.notifications',
        meta: {
          title: 'Account - Notification | Sepia'
        },
        component: () => import('@/views/account/notifications/index.vue')
      },
      {
        path: 'messages',
        name: 'account.messages',
        meta: {
          title: 'Account - Message | Sepia'
        },
        component: () => import('@/views/account/messages/index.vue')
      },
      {
        path: 'saved-items',
        name: 'account.saved-items',
        meta: {
          title: 'Account - Saved Items | Sepia'
        },
        component: () => import('@/views/account/saved-items/index.vue')
      },
      {
        path: 'collections',
        name: 'account.collections',
        meta: {
          title: 'Account - Collections | Sepia'
        },
        component: () => import('@/views/account/collections/index.vue')
      },
      {
        path: 'payment',
        name: 'account.payment',
        meta: {
          title: 'Account - Payment | Sepia'
        },
        component: () => import('@/views/account/payment/index.vue')
      }
    ]
  }
]

const uiRoutes = [
  {
    path: '/ui',
    name: 'ui',
    meta: { authRequired: false },
    children: [
      {
        path: 'typography',
        name: 'ui.typography',
        meta: {
          title: 'Typography | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Typography.vue')
      },
      {
        path: 'code',
        name: 'ui.code',
        meta: {
          title: 'Code | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Code.vue')
      },
      {
        path: 'images',
        name: 'ui.images',
        meta: {
          title: 'Images | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Images.vue')
      },
      {
        path: 'tables',
        name: 'ui.tables',
        meta: {
          title: 'Tables | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Tables.vue')
      },
      {
        path: 'accordion',
        name: 'ui.accordion',
        meta: {
          title: 'Accordion | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Accordion.vue')
      },
      {
        path: 'alerts',
        name: 'ui.alerts',
        meta: {
          title: 'Alerts | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Alerts.vue')
      },
      {
        path: 'audio-player',
        name: 'ui.audio-player',
        meta: {
          title: 'AudioPlayer | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/AudioPlayer.vue')
      },
      {
        path: 'badges',
        name: 'ui.badges',
        meta: {
          title: 'Badges | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Badges.vue')
      },
      {
        path: 'blog-components',
        name: 'ui.blog-components',
        meta: {
          title: 'Blog Components | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/BlogComponents.vue')
      },
      {
        path: 'breadcrumb',
        name: 'ui.breadcrumb',
        meta: {
          title: 'Breadcrumb | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Breadcrumb.vue')
      },
      {
        path: 'buttons',
        name: 'ui.buttons',
        meta: {
          title: 'Buttons | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Buttons.vue')
      },
      {
        path: 'buttons-group',
        name: 'ui.buttons-group',
        meta: {
          title: 'ButtonGroup | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/ButtonGroup.vue')
      },
      {
        path: 'card',
        name: 'ui.card',
        meta: {
          title: 'Card | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Card.vue')
      },
      {
        path: 'carousel',
        name: 'ui.carousel',
        meta: {
          title: 'Carousel | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Carousel.vue')
      },
      {
        path: 'collapse',
        name: 'ui.collapse',
        meta: {
          title: 'Collapse | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Collapse.vue')
      },
      {
        path: 'dropdowns',
        name: 'ui.dropdowns',
        meta: {
          title: 'Dropdowns | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Dropdowns.vue')
      },
      {
        path: 'forms',
        name: 'ui.forms',
        meta: {
          title: 'Forms | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Forms.vue')
      },
      {
        path: 'gallery',
        name: 'ui.gallery',
        meta: {
          title: 'Gallery | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Gallery.vue')
      },
      {
        path: 'image-comparison-slider',
        name: 'ui.image-comparison-slider',
        meta: {
          title: 'Image Comparison Slider | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/ImageComparisonSlider.vue')
      },
      {
        path: 'input-group',
        name: 'ui.input-group',
        meta: {
          title: 'InputGroup | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/InputGroup.vue')
      },
      {
        path: 'list-group',
        name: 'ui.list-group',
        meta: {
          title: 'ListGroup | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/ListGroup.vue')
      },
      {
        path: 'modal',
        name: 'ui.modal',
        meta: {
          title: 'Modal | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Modal.vue')
      },
      {
        path: 'navbar',
        name: 'ui.navbar',
        meta: {
          title: 'Navbar | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Navbar.vue')
      },
      {
        path: 'offcanvas',
        name: 'ui.offcanvas',
        meta: {
          title: 'Offcanvas | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Offcanvas.vue')
      },
      {
        path: 'pagination',
        name: 'ui.pagination',
        meta: {
          title: 'Pagination | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Pagination.vue')
      },
      {
        path: 'parallax',
        name: 'ui.parallax',
        meta: {
          title: 'Parallax | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Parallax.vue')
      },
      {
        path: 'pills',
        name: 'ui.pills',
        meta: {
          title: 'Pills | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Pills.vue')
      },
      {
        path: 'placeholders',
        name: 'ui.placeholders',
        meta: {
          title: 'Placeholders | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Placeholders.vue')
      },
      {
        path: 'popovers',
        name: 'ui.popovers',
        meta: {
          title: 'Popovers | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Popovers.vue')
      },
      {
        path: 'portfolio-components',
        name: 'ui.portfolio-components',
        meta: {
          title: 'Portfolio Components | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/PortfolioComponents.vue')
      },
      {
        path: 'pricing',
        name: 'ui.pricing',
        meta: {
          title: 'Pricing | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Pricing.vue')
      },
      {
        path: 'progressbar',
        name: 'ui.progressbar',
        meta: {
          title: 'Progressbar | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Progressbar.vue')
      },
      {
        path: 'social-buttons',
        name: 'ui.social-buttons',
        meta: {
          title: 'Social Buttons | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/SocialButtons.vue')
      },
      {
        path: 'spinners',
        name: 'ui.spinners',
        meta: {
          title: 'Spinners | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Spinners.vue')
      },
      {
        path: 'steps',
        name: 'ui.steps',
        meta: {
          title: 'Steps | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Steps.vue')
      },
      {
        path: 'tabs',
        name: 'ui.tabs',
        meta: {
          title: 'Tabs | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Tabs.vue')
      },
      {
        path: 'team',
        name: 'ui.team',
        meta: {
          title: 'Team | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Team.vue')
      },
      {
        path: 'testimonial',
        name: 'ui.testimonial',
        meta: {
          title: 'Testimonial | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Testimonial.vue')
      },
      {
        path: 'toasts',
        name: 'ui.toasts',
        meta: {
          title: 'Toast | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Toast.vue')
      },
      {
        path: 'tooltips',
        name: 'ui.tooltips',
        meta: {
          title: 'Tooltips | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Tooltips.vue')
      },
      {
        path: 'video-popup',
        name: 'ui.video-popup',
        meta: {
          title: 'VideoPopup | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/VideoPopup.vue')
      },
      {
        path: 'utilities',
        name: 'ui.utilities',
        meta: {
          title: 'Utilities | Sepia UI Kit'
        },
        component: () => import('@/views/ui-kit/Utilities.vue')
      }
    ]
  }
]

export const allRoutes = [
  ...authRoutes,
  ...errorPageRoutes,
  ...landingRoute,
  ...landingsRoutes,
  ...pagesRoutes,
  ...accountRoutes,
  ...uiRoutes
]
