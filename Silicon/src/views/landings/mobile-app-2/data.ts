import {
  btcImg,
  btcGraphImg,
  usdtImg,
  usdtGraphImg,
  ethImg,
  ethGraphImg,
  dotImg,
  dotGraphImg,
  paymentImg,
  cashBackImg,
  statisticsImg,
  securityImg,
  chatImg,
  faqsImg,
  emailImg
} from '@/assets/data/image'

import screen1Img from '@/assets/img/landing/app-showcase-2/screens/01.png'
import screen2Img from '@/assets/img/landing/app-showcase-2/screens/02.png'
import screen3Img from '@/assets/img/landing/app-showcase-2/screens/03.png'

import type { CryptoTableType, FeatureType, ServiceType, TestimonialType, UserType } from './type'

export const cryptoTableData: CryptoTableType[] = [
  {
    image: btcImg,
    coin: 'Bitcoin',
    shortened: 'BTC',
    price: '38,940.63',
    growth: 1.7,
    totalTreading: '736,124,602,670.97',
    graph: btcGraphImg
  },
  {
    image: ethImg,
    coin: 'Tether',
    shortened: 'USDT',
    price: '15.09',
    growth: -0.27,
    totalTreading: '14,735,584,883.68',
    graph: usdtGraphImg
  },
  {
    image: usdtImg,
    coin: 'Ethereum',
    shortened: 'ETH',
    price: '2,829.07',
    growth: 1.27,
    totalTreading: '337,863,906,048.53',
    graph: ethGraphImg
  },
  {
    image: dotImg,
    coin: 'Polkadot',
    shortened: 'DOT',
    price: '13.82',
    growth: -1.35,
    totalTreading: '26,143,724,006.81',
    graph: dotGraphImg
  }
]

export const featureData: FeatureType[] = [
  {
    image: paymentImg,
    title: 'Top Up Account Easily',
    description:
      'Mollis consectetur congue egestas egestas suspendisse blandit proin volutpat mollis egestas in ultrices.'
  },
  {
    image: cashBackImg,
    title: 'Regular Cashback',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo lorem ipsum dolor sit amet, consectetur elit.'
  },
  {
    image: statisticsImg,
    title: 'Cost Statistics',
    description:
      'Congue fames odio tincidunt mus. Eleifend in at arcu id sit scelerisque in. Elit quis sem dictum non turpis eget.'
  },
  {
    image: securityImg,
    title: 'Data Security',
    description:
      'Vulputate commodo tincidunt risus ac odio cursus morbi ipsum ut in laoreet fermentum condimentum.'
  }
]

export const processData: FeatureType[] = [
  {
    image: screen1Img,
    title: 'Create your account',
    description:
      'Consequat ut cras nisl, enim purus in facilisi. Ipsum amet, lectus malesuada risus sollicitudin accumsan. Id sem elit vel vel lectus risus senectus.'
  },
  {
    image: screen2Img,
    title: 'Set up payment details',
    description:
      'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.'
  },
  {
    image: screen3Img,
    title: 'Start trading',
    description:
      'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.'
  }
]

export const userData: UserType[] = [
  {
    name: 'Fannie Summers',
    role: 'Founder of Lorem Company'
  },
  {
    name: 'Robert Fox',
    role: 'CEO of Ipsum Company'
  },
  {
    name: 'Annette Black',
    role: 'Founder of the Agency'
  },
  {
    name: 'Jerome Bell',
    role: 'CEO of Dolor Ltd.'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.',
    rating: 3,
    user: userData[0]
  },
  {
    comment:
      'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.',
    rating: 5,
    user: userData[1]
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna. Sit pretium aliquam tempor, orci dolor sed maecenas.',
    rating: 4,
    user: userData[2]
  },
  {
    comment:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend. Pellentesque finibus congue egestas egestas suspendisse blandit justo.',
    rating: 5,
    user: userData[3]
  }
]

export const serviceData: ServiceType[] = [
  {
    image: chatImg,
    title: '24/7 Chat Help',
    description: 'Chat support with our customer service specialists.',
    name: 'landings.mobile-app-2',
    text: 'Talk to us'
  },
  {
    image: faqsImg,
    title: 'FAQ',
    description: 'Find answers. Learn more about the features and services.',
    name: 'landings.mobile-app-2',
    text: 'Learn more'
  },
  {
    image: emailImg,
    title: 'Email',
    description: 'Please feel free to drop any questions to our email.',
    name: 'landings.mobile-app-2',
    text: 'Drop us a line'
  }
]
