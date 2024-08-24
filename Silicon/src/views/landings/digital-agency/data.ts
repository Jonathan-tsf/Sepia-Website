import ideas from '@/assets/img/landing/digital-agency/icons/idea.svg'
import group from '@/assets/img/landing/saas-2/features/group.svg'
import team from '@/assets/img/landing/digital-agency/icons/team.svg'
import service1 from '@/assets/img/landing/digital-agency/services/01.png'
import service2 from '@/assets/img/landing/digital-agency/services/02.png'
import service3 from '@/assets/img/landing/digital-agency/services/03.png'
import service4 from '@/assets/img/landing/digital-agency/services/04.png'
import service5 from '@/assets/img/landing/digital-agency/services/05.png'

import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'

import list1 from '@/assets/img/portfolio/list/01.png'
import list2 from '@/assets/img/portfolio/list/02.jpg'

import avatar1 from '@/assets/img/testimonials/01.jpg'
import avatar2 from '@/assets/img/testimonials/02.jpg'
import avatar3 from '@/assets/img/testimonials/03.jpg'

import webby from '@/assets/img/landing/digital-agency/awards/webby.svg'
import cssda from '@/assets/img/landing/digital-agency/awards/cssda.svg'
import awwwards from '@/assets/img/landing/digital-agency/awards/awwwards.svg'
import fwa from '@/assets/img/landing/digital-agency/awards/fwa.svg'

import avatar8Img from '@/assets/img/avatar/08.jpg'
import avatar9Img from '@/assets/img/avatar/09.jpg'
import avatar10Img from '@/assets/img/avatar/10.jpg'

import blog1 from '@/assets/img/landing/digital-agency/blog/01.jpg'
import blog2 from '@/assets/img/landing/digital-agency/blog/02.jpg'
import blog3 from '@/assets/img/landing/digital-agency/blog/03.jpg'

import type {
  FeatureType,
  ServiceType,
  BrandType,
  TestimonialType,
  UserType,
  AuthorType,
  BlogType
} from '@/views/landings/digital-agency/type'

export const featureData: FeatureType[] = [
  {
    image: ideas,
    title: 'Creative Solutions',
    description: ' Our approach blends innovation with functionality, delivering Intelligent Assistant services that transform engagement and streamline communication processes'
  },
  {
    image: group,
    title: 'Client Support',
    description: "Sepia prioritizes exceptional client support, ensuring seamless integration and ongoing assistance for our Intelligent Assistant solutions. We're committed to providing responsive and personalized service to meet the unique needs of each client."
  },
  {
    image: team,
    title: 'Team of Professionals',
    description: "At Sepia, our team of professionals excels in merging technical expertise with creative insight. We're dedicated to developing sophisticated Intelligent Assistant solutions that enhance user engagement and optimize communication strategies"
  }
]

import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

type ListType = {
  image: string
  date: string
  title: string
  category: string
  description: string
  link?: LinkType
}

const categories2: string[] = ['Productivity', 'Professional', 'Motion Design', 'Web Design']

export const listData: ListType[] = [
  {
    image: list1,
    date: 'Nov 18, 2023',
    title: 'Olivia - Your Virtual Waiter',
    category: categories2[0],
    description:
      'Olivia revolutionizes the dining experience by seamlessly integrating as your virtual waiter. This innovative Intelligent Assistant solution streamlines ordering and customer service, making dining out or ordering in more efficient and enjoyable. Tailored to enhance interaction, Olivia ensures every meal is perfectly complemented by prompt and personalized service, elevating the culinary journey for restaurants and their guests alike.',
    link: { name: 'pages.single-project' }
  },
  {
    image: list2,
    date: 'Nov 9, 2023',
    title: 'Riley - Your Virtual CV',
    category: categories2[1],
    description:
      'Riley transforms the job application process with a personalized virtual CV creation experience. By leveraging advanced Intelligent Assistant technology, Riley guides users through the CV crafting process, ensuring a professional and compelling presentation of skills and experiences. This approach not only simplifies the task of CV writing but also empowers job seekers with a tool that stands out in the competitive job market, making first impressions count.',
    link: { name: 'pages.single-project' }
  }
]


export const servicesData: ServiceType[] = [
  {
    image: service1,
    title: 'Intelligent Assistant Integration',
    description:
      'At Sepia, we specialize in seamlessly integrating Intelligent Assistant technology into your digital ecosystem, enhancing user engagement and automating communication. Our solutions are designed to understand and respond to user queries effectively, providing a personalized experience that elevates your brand.'
  },
  {
    image: service2,
    title: 'Custom Intelligent Assistant Development',
    description:
      'Our team crafts bespoke Intelligent Assistant solutions tailored to your specific business needs. From initial design to deployment, we ensure your Intelligent Assistant not only answers queries but also embodies your brand’s voice, offering an intuitive and conversational interface for your users.'
  },
  {
    image: service3,
    title: 'AI & Machine Learning',
    description:
      'Sepia leverages the latest in AI and machine learning technologies to empower our chatbots with continuous learning capabilities. This allows for more accurate responses over time, enhancing the user experience and providing insightful analytics to inform business strategies.'
  },
  {
    image: service4,
    title: 'User Experience Design',
    description:
      'Understanding that the success of Intelligent Assistant interactions relies heavily on user experience, our UX design team focuses on creating engaging and efficient Intelligent Assistant interfaces. We prioritize clarity, ease of use, and seamless integration into existing platforms, ensuring your Intelligent Assistant becomes an essential part of your digital presence.'
  },
  {
    image: service5,
    title: 'Ongoing Support & Maintenance',
    description:
      'Our commitment to your Intelligent Assistant’s success extends beyond launch. Sepia offers ongoing support and maintenance services to ensure your Intelligent Assistant solution remains up-to-date with the latest technology and continues to meet the evolving needs of your business and your customers.'
  }
]

export const brandData: BrandType[] = [
  {
    image: brand1SvgImg,
    name: 'Lorem Ltd.'
  },
  {
    image: brand2SvgImg,
    name: 'Company LLC'
  },
  {
    image: brand3SvgImg,
    name: 'Ipsum Ltd.'
  },
  {
    image: brand4SvgImg
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  },
  {
    image: brand1SvgImg
  },
  {
    image: brand2SvgImg
  },
  {
    image: brand3SvgImg
  },
  {
    image: brand4SvgImg
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  }
]

const userData: UserType[] = [
  {
    image: avatar1,
    name: 'Ralph Edwards',
    role: 'Head of Marketing',
    brand: brandData[0]
  },
  {
    image: avatar2,
    name: 'Annette Black',
    role: 'Strategic Advisor',
    brand: brandData[1]
  },
  {
    image: avatar3,
    name: 'Darrell Steward',
    role: 'Project Manager',
    brand: brandData[2]
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment: `Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.`,
    user: userData[0]
  },
  {
    comment: `Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.`,
    user: userData[1]
  },
  {
    comment: `Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.`,
    user: userData[2]
  }
]

export const awardData = [
  {
    image: webby,
    title: '4x mobile of the day'
  },
  {
    image: cssda,
    title: '1x Kudos'
  },
  {
    image: awwwards,
    title: '3x website of the day'
  },
  {
    image: fwa,
    title: '2x best website'
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar10Img,
    name: 'Jerome Bell',
    expertise: 'Marketing Specialist'
  },
  {
    image: avatar8Img,
    name: 'Annette Black',
    expertise: 'Product Manager'
  },
  {
    image: avatar9Img,
    name: 'Marvin McKinney',
    expertise: 'Senior UI/UX Designer'
  }
]

const categories = ['Digital', 'Design', 'Tips & Advice']

export const blogData: BlogType[] = [
  {
    time: '12 hours ago',
    cover: blog1,
    author: authorData[0],
    category: categories[0],
    title: 'A study on smartwatch design qualities and people’s preferences',
    link: { name: '' },
    liked: 8,
    commented: 7,
    shared: 4
  },
  {
    time: '1 day ago',
    cover: blog2,
    author: authorData[1],
    category: categories[1],
    title: 'Brand analysis: second step to the brand identity',
    link: { name: '' },
    liked: 8,
    commented: 7,
    shared: 4
  },
  {
    time: 'May 24, 2023',
    cover: blog3,
    author: authorData[2],
    category: categories[2],
    title: 'How to check the website before releasing it?',
    link: { name: '' },
    liked: 8,
    commented: 7,
    shared: 4
  }
]
