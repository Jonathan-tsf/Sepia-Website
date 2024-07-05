import avatar16Img from '@/assets/img/avatar/16.jpg'
import avatar8Img from '@/assets/img/avatar/08.jpg'
import avatar13Img from '@/assets/img/avatar/13.jpg'
import avatar9Img from '@/assets/img/avatar/09.jpg'
import commentsImg from '@/assets/img/landing/saas-2/features/comments.svg'
import analyticsImg from '@/assets/img/landing/saas-2/features/analytics.svg'
import groupImg from '@/assets/img/landing/saas-2/features/group.svg'
import notificationImg from '@/assets/img/landing/saas-2/features/notifications.svg'
import tasksImg from '@/assets/img/landing/saas-2/features/tasks.svg'
import securityImg from '@/assets/img/landing/saas-2/features/security.svg'
import googleImg from '@/assets/img/brands/google.svg'
import zoomImg from '@/assets/img/brands/zoom.svg'
import slackImg from '@/assets/img/brands/slack.svg'
import gmailImg from '@/assets/img/brands/gmail.svg'
import trelloImg from '@/assets/img/brands/trello.svg'
import mailchimpImg from '@/assets/img/brands/mailchimp.svg'
import dropboxImg from '@/assets/img/brands/dropbox.svg'
import evernoteImg from '@/assets/img/brands/evernote.svg'
import type { FeatureType, IntegrationType, TestimonialType, UserType } from './type'

export const featureData: FeatureType[] = [
  {
    image: commentsImg,
    title: 'Interactive Engagements',
    description: 'Engage with Riley to dynamically present your skills and experiences through conversational interactions, making your CV memorable.'
  },
  {
    image: analyticsImg,
    title: 'Engagement Analytics',
    description: 'Track how potential employers interact with your CV Intelligent Assistant, providing invaluable insights into what captures their interest.'
  },
  {
    image: groupImg,
    title: 'Collaborative Feedback',
    description: 'Riley enables collaborative feedback from peers and mentors directly within your interactive CV, enhancing its appeal.'
  },
  {
    image: notificationImg,
    title: 'Real-time Updates',
    description: 'Receive instant notifications when employers engage with your CV, keeping you informed of their interest and questions.'
  },
  {
    image: tasksImg,
    title: 'Customizable Sections',
    description: 'Easily customize sections of your CV through Riley, tailoring the Intelligent Assistant to highlight your most compelling skills and achievements.'
  },
  {
    image: securityImg,
    title: 'Privacy and Security',
    description: 'Your data’s security is paramount. Riley ensures that your information is protected, giving you peace of mind in your job search.'
  }
]


const usersData: UserType[] = [
  {
    image: avatar16Img,
    name: 'Robert Fox',
    role: 'Founder of Lorem Company'
  },
  {
    image: avatar8Img,
    name: 'Annette Black',
    role: 'CEO of Ipsum Company'
  },
  {
    image: avatar13Img,
    name: 'Jerome Bell',
    role: 'Founder of the Agency'
  },
  {
    image: avatar9Img,
    name: 'Albert Flores',
    role: 'CEO of Dolor Ltd.'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    user: usersData[0]
  },
  {
    comment:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    rating: 5,
    user: usersData[1]
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    user: usersData[2]
  },
  {
    comment:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 5,
    user: usersData[3]
  }
]

export const integrationData: IntegrationType[] = [
  {
    image: googleImg,
    description: 'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis pretium.'
  },
  {
    image: zoomImg,
    description:
      'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.'
  },
  {
    image: slackImg,
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
  },
  {
    image: gmailImg,
    description: 'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.'
  },
  {
    image: trelloImg,
    description: 'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.'
  },
  {
    image: mailchimpImg,
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris integer.'
  },
  {
    image: dropboxImg,
    description: 'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.'
  },
  {
    image: evernoteImg,
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'
  }
]
