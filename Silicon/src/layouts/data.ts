import type { ChildrenLinkType, NavLinkType, SidebarLinkType } from '@/layouts/type'
import DesktopIcon from '@iconify/icons-bx/desktop'
import landingsImg from '@/assets/img/nav projects.png'

export const navbarLinkData: NavLinkType[] = [
  {
    title: 'Home',
    link: { name: 'landings.digital-agency' }
  },
  {
    title: 'Contact Us',
    link: { name: 'pages.contacts-3' }
  },
  {
    title: 'Launch Your Website',
    link: { name: 'landings.saas-4' }
  },
  {
    title: 'Meet your Virtual Assistant',
    link: { name: 'landings.saas-3' }
  },
  {
    title: 'Discover Olivia',
    link: { name: 'landings.olivia' }
  }
]

export const uiKitSidebarMobileLinkData: ChildrenLinkType[] = [
  {
    icon: DesktopIcon,
    title: 'Preview',
    link: { name: 'landing' }
  }
]
export const uiKitSidebarLinkData: SidebarLinkType[] = [
  {
    title: 'Content',
    children: [
      {
        title: 'Typography',
        link: {
          name: 'ui.typography'
        }
      },
      {
        title: 'Icon Font',
        externalLink: 'https://boxicons.com/'
      },
      {
        title: 'Code',
        link: {
          name: 'ui.code'
        }
      },
      {
        title: 'Images & Figures',
        link: {
          name: 'ui.images'
        }
      },
      {
        title: 'Tables',
        link: {
          name: 'ui.tables'
        }
      }
    ]
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Accordion',
        link: { name: 'ui.accordion' }
      },
      {
        title: 'Alerts',
        link: { name: 'ui.alerts' }
      },
      {
        title: 'Audio player',
        link: { name: 'ui.audio-player' }
      },
      {
        title: 'Badges',
        link: { name: 'ui.badges' }
      },
      {
        title: 'Blog components',
        link: { name: 'ui.blog-components' }
      },
      {
        title: 'Breadcrumb',
        link: { name: 'ui.breadcrumb' }
      },
      {
        title: 'Buttons',
        link: { name: 'ui.buttons' }
      },
      {
        title: 'Button group',
        link: { name: 'ui.buttons-group' }
      },
      {
        title: 'Cards',
        link: { name: 'ui.card' }
      },
      {
        title: 'Carousel (Slider)',
        link: { name: 'ui.carousel' }
      },
      {
        title: 'Collapse',
        link: { name: 'ui.collapse' }
      },
      {
        title: 'Dropdowns',
        link: { name: 'ui.dropdowns' }
      },
      {
        title: 'Forms',
        link: { name: 'ui.forms' }
      },
      {
        title: 'Gallery (Lightbox)',
        link: { name: 'ui.gallery' }
      },
      {
        title: 'Image comparison slider',
        link: { name: 'ui.image-comparison-slider' }
      },
      {
        title: 'Input group',
        link: { name: 'ui.input-group' }
      },
      {
        title: 'List group',
        link: { name: 'ui.list-group' }
      },
      {
        title: 'Modal',
        link: { name: 'ui.modal' }
      },
      {
        title: 'Navbar',
        link: { name: 'ui.navbar' }
      },
      {
        title: 'Offcanvas',
        link: { name: 'ui.offcanvas' }
      },
      {
        title: 'Pagination',
        link: { name: 'ui.pagination' }
      },
      {
        title: 'Parallax',
        link: { name: 'ui.parallax' }
      },
      {
        title: 'Pills',
        link: { name: 'ui.pills' }
      },
      {
        title: 'Placeholders',
        link: { name: 'ui.placeholders' }
      },
      {
        title: 'Popovers',
        link: { name: 'ui.popovers' }
      },
      {
        title: 'Portfolio components',
        link: { name: 'ui.portfolio-components' }
      },
      {
        title: 'Pricing',
        link: { name: 'ui.pricing' }
      },
      {
        title: 'Progress bars',
        link: { name: 'ui.progressbar' }
      },
      {
        title: 'Social buttons',
        link: { name: 'ui.social-buttons' }
      },
      {
        title: 'Spinners',
        link: { name: 'ui.spinners' }
      },
      {
        title: 'Steps',
        link: { name: 'ui.steps' }
      },
      {
        title: 'Tabs',
        link: { name: 'ui.tabs' }
      },
      {
        title: 'Team',
        link: { name: 'ui.team' }
      },
      {
        title: 'Testimonials reviews',
        link: { name: 'ui.testimonial' }
      },
      {
        title: 'Toasts',
        link: { name: 'ui.toasts' }
      },
      {
        title: 'Tooltips',
        link: { name: 'ui.tooltips' }
      },
      {
        title: 'Video popup',
        link: { name: 'ui.video-popup' }
      }
    ]
  },
  {
    title: 'Utilities',
    children: [
      {
        title: 'BootstrapVue',
        externalLink: 'https://bootstrap-vue-next.github.io/bootstrap-vue-next/'
      },
      {
        title: 'Sepia',
        link: {
          name: 'ui.utilities'
        }
      }
    ]
  }
]
