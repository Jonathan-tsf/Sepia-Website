import chatImg from '@/assets/img/landing/olivia/features/chat.svg'
import analyticsImg from '@/assets/img/landing/olivia/features/analytics.svg'
import bellImg from '@/assets/img/landing/olivia/features/bell.svg'
import tasksImg from '@/assets/img/landing/olivia/features/tasks.svg'
import calendarImg from '@/assets/img/landing/olivia/features/calendar.svg'
import addGroupImg from '@/assets/img/landing/olivia/features/add-group.svg'
import headsetImg from '@/assets/img/landing/olivia/features/headset.svg'
import shieldImg from '@/assets/img/landing/olivia/features/shield.svg'
import googleImg from '@/assets/img/brands/google.svg'
import zoomImg from '@/assets/img/brands/zoom.svg'
import slackImg from '@/assets/img/brands/slack.svg'
import gmaillImg from '@/assets/img/brands/gmail.svg'
import trelloImg from '@/assets/img/brands/trello.svg'
import mailchimpImg from '@/assets/img/brands/mailchimp.svg'
import dropboxIMg from '@/assets/img/brands/dropbox.svg'
import evernoteImg from '@/assets/img/brands/evernote.svg'
import avatar14Img from '@/assets/img/avatar/14.jpg'
import avatar13Img from '@/assets/img/avatar/13.jpg'
import avatar11Img from '@/assets/img/avatar/11.jpg'
import useCase1Img from '@/assets/img/landing/olivia/use-cases/01.png'
import useCase2Img from '@/assets/img/landing/olivia/use-cases/02.png'
import useCase3Img from '@/assets/img/landing/olivia/use-cases/03.png'
import useCase4Img from '@/assets/img/landing/olivia/use-cases/04.png'

import StarIcon from '@iconify/icons-bx/bx-star'
import BriefcaseAlt2ICon from '@iconify/icons-bx/bx-briefcase-alt-2'
import RocketIcon from '@iconify/icons-bx/bx-rocket'
import BatChartAlt2Icon from '@iconify/icons-bx/bx-bar-chart-alt-2'

import type { WorkType, FeatureType, TestimonialType, WorkToolType, UseCaseType } from './type'

export const featuresData: FeatureType[] = [
  {
    image: chatImg,
    title: 'Multilingual Support',
    description: 'Olivia speaks every language, making every guest feel at home and understood, enhancing the dining experience for an international clientele.'
  },
  {
    image: analyticsImg,
    title: 'Instant Recommendations',
    description: 'Leveraging AI, Olivia suggests high-margin dishes and drinks, subtly guiding guests towards a satisfying and profitable dining experience.'
  },
  {
    image: bellImg,
    title: 'Quick Decision Making',
    description: 'With Olivia, guests can quickly get answers to their questions, speeding up decision-making and improving table turnover rates.'
  },
  {
    image: tasksImg,
    title: 'Interactive Menu Exploration',
    description: 'Guests can explore the menu in an interactive way with Olivia, discovering the stories behind dishes and ingredients, making dining more engaging.'
  },
  {
    image: calendarImg,
    title: 'Enhanced Dining Atmosphere',
    description: 'Olivia contributes to a modern, tech-savvy restaurant atmosphere, making your establishment a talking point and attracting a tech-interested clientele.'
  },
  {
    image: addGroupImg,
    title: 'Promotional Messaging',
    description: 'Seamlessly integrated promotional messages boost the visibility of special offers and events, enhancing revenue and guest participation.'
  },
  {
    image: headsetImg,
    title: 'Immediate Assistance',
    description: 'Olivia is always on hand to provide immediate assistance, answering queries and providing information, ensuring guest satisfaction.'
  },
  {
    image: shieldImg,
    title: 'Privacy-Preserving Interaction',
    description: 'Conversations with Olivia are designed with privacy in mind, ensuring guests feel secure in their interactions.'
  }
]

export const workData: WorkType[] = [
  {
    title: 'Powerful project management'
  },
  {
    title: 'Transparent work management'
  },
  {
    title: 'Manage work & focus on the most important tasks'
  },
  {
    title: 'Track your progress with interactive charts'
  },
  {
    title: 'Easiest way to track time spent on tasks'
  }
]

export const useCasesData: UseCaseType[] = [
  {
    icon: StarIcon,
    title: 'Project Management',
    description:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    image: useCase1Img
  },
  {
    icon: BriefcaseAlt2ICon,
    title: 'Remote Work',
    description:
      'Ut ornare quisque blandit condimentum nec viverra habitant non. Consequat id leo bibendum enim, fringilla pulvinar volutpat fames. Ut fames ut sed lobortis nulla. In dui enim et pharetra gravida diam semper lectus tellus. Faucibus mi convallis.',
    image: useCase2Img
  },
  {
    icon: RocketIcon,
    title: 'Product Release',
    description:
      'Fames netus pretium massa lobortis sit metus et. Sit risus odio fermentum hac fames enim, ac, in. Neque lacus, consequat hendrerit potenti in tristique dictum. Tortor nec lorem et venenatis facilisis risus viverra nunc, eu. Eget suscipit vel amet.',
    image: useCase3Img
  },
  {
    icon: BatChartAlt2Icon,
    title: 'Campaign Planning',
    description:
      'Diam bibendum scelerisque vel mauris magna. Iaculis interdum tincidunt eget nibh purus. Aliquet at sit morbi nisi volutpat fermentum scelerisque. Enim tincidunt eros sodales integer sapien. Eu ullamcorper egestas odio nunc faucibus. Sapien eu nunc sed facilisi luctus ac.',
    image: useCase4Img
  }
]

const usersData = [
  {
    image: avatar14Img,
    name: 'Annette Black',
    role: 'Strategic Advisor at Company LLC'
  },
  {
    image: avatar13Img,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Ltd.'
  },
  {
    image: avatar11Img,
    name: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.'
  }
]
export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada.',
    user: usersData[0]
  },
  {
    comment:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus.',
    user: usersData[1]
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa.',
    user: usersData[2]
  }
]

export const workToolsData: WorkToolType[] = [
  {
    image: googleImg
  },
  {
    image: zoomImg
  },
  {
    image: slackImg
  },
  {
    image: gmaillImg
  },
  {
    image: trelloImg
  },
  {
    image: mailchimpImg
  },
  {
    image: dropboxIMg
  },
  {
    image: evernoteImg
  }
]
