import industry1Img from '@/assets/img/landing/software-agency-3/industries/01.jpg'
import industry2Img from '@/assets/img/landing/software-agency-3/industries/02.jpg'
import industry3Img from '@/assets/img/landing/software-agency-3/industries/03.jpg'

import type { IndustryType, BlogType, UserType } from './type'
import avatar9Img from '@/assets/img/avatar/09.jpg'

export const industryData: IndustryType[] = [
  {
  image: industry2Img, 
  name: 'Restaurants and Food Services',
  about:
    'Increase your restaurant’s visibility and online orders with our tailored web solutions. We create attractive, easy-to-navigate websites that highlight your menu, integrate with online ordering systems, and reflect the ambiance of your establishment.'
  },
  {
    image: industry3Img,
    name: 'E-commerce',
    about:
      'Boost your online sales with our e-commerce solutions that provide an exceptional shopping experience. Our websites are designed to be user-friendly, visually appealing, and equipped with secure payment integrations to drive conversions.'
  },
  {
    image: industry2Img, 
    name: 'Fitness and Coaching',
    about:
      'Attract fitness enthusiasts with dynamic and interactive websites. Whether you run a gym, offer personal training, or sell sports equipment, our solutions are designed to motivate and engage your clients.'
  },
  {
    image: industry1Img,
    name: 'Real Estate',
    about:
      'Showcase properties and connect with potential buyers through our real estate website solutions. We provide features like property listings, virtual tours, and easy contact forms to enhance the buying and selling experience.'
  },
  {
    image: industry2Img,
    name: 'Finance and Startups',
    about:
      'Empower your startup or financial firm with a strong online presence. Our websites are designed to build trust, provide valuable insights, and engage your audience with sleek, professional designs and secure integrations.'
  },
  {
    image: industry1Img,
    name: 'Corporate Websites',
    about:
      'Build a professional online image with our corporate website solutions. We focus on creating informative, well-structured, and visually appealing websites that align with your company’s brand and values.'
  }
]

const userData: UserType[] = [
  {
    image: avatar9Img,
    name: 'Esther Howard'
  },
  {
    image: avatar9Img,
    name: 'Esther Howard'
  }
]

export const blogData: BlogType[] = [
  {
    time: 'Sep 10, 2023',
    user: userData[0],
    title: 'A Study on Smartwatch Design Qualities and People&apos;s Preferences',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    liked: 8,
    commented: 7,
    shared: 4
  },
  {
    time: 'Sep 10, 2023',
    user: userData[1],
    title: 'A Study on Smartwatch Design Qualities and People&apos;s Preferences',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    liked: 8,
    commented: 7,
    shared: 4
  }
]
