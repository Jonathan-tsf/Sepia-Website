import type {
  BenefitType,
  BlogType,
  IndustryType,
  ProjectType,
  BrandType,
  SolutionType
} from '@/views/landings/dev-agency-3/type'
import icon1 from '@/assets/img/landing/software-agency-3/icons/01.svg'
import icon2 from '@/assets/img/landing/software-agency-3/icons/02.svg'
import icon3 from '@/assets/img/landing/software-agency-3/icons/03.svg'
import icon4 from '@/assets/img/landing/software-agency-3/icons/04.svg'

import industry1 from '@/assets/img/landing/software-agency-3/industries/01.jpg'
import industry2 from '@/assets/img/landing/software-agency-3/industries/02.jpg'
import industry3 from '@/assets/img/landing/software-agency-3/industries/03.jpg'

import project1 from '@/assets/img/landing/software-agency-3/projects/01.png'
import project2 from '@/assets/img/landing/software-agency-3/projects/02.png'
import project3 from '@/assets/img/landing/software-agency-3/projects/03.png'

import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'

import blog5 from '@/assets/img/blog/05.jpg'
import blog7 from '@/assets/img/blog/07.jpg'
import blog8 from '@/assets/img/blog/08.jpg'

export const brandData: BrandType[] = [
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
  }
]

export const solutionData: SolutionType[] = [
  {
    image: icon1,
    title: 'Custom Software Development',
    description:
      'We develop tailored software solutions to meet the unique challenges of your business, ensuring scalability, efficiency, and growth.'
  },
  {
    image: icon2,
    title: 'Mobile App Development',
    description: 'Our team creates intuitive and user-friendly mobile apps that keep your customers engaged and connected on the go.'
  },
  {
    image: icon3,
    title: 'Ongoing Support & Maintenance',
    description:
      'We offer reliable support and maintenance to ensure your software and applications run smoothly and efficiently at all times.'
  },
  {
    image: icon4,
    title: 'Comprehensive Software QA & Testing',
    description: 'Our thorough testing processes guarantee your software is robust, reliable, and ready for market deployment.'
  }
]

export const industryData: IndustryType[] = [
  {
    image: industry1,
    name: 'Finance and Insurance',
    about:
      'Leverage our secure and scalable web solutions to enhance customer experience, streamline operations, and meet regulatory compliance in the finance and insurance sectors.'
  },
  {
    image: industry2,
    name: 'Startup and Technology',
    about:
      'Empower your startup with innovative technology solutions that help you launch faster, scale efficiently, and capture market share with agility.'
  },
  {
    image: industry3,
    name: 'E-commerce',
    about:
      'Boost your online sales with our e-commerce solutions designed to offer seamless user experiences, robust security, and easy integration with payment gateways and third-party services.'
  }
]

const categories: string[] = ['Mobile App', 'Landing Page', 'Web App']
export const featureProjectData: ProjectType[] = [
  {
    image: project1,
    category: categories[0],
    title: 'Task Management App for Increased Productivity',
    description:
      'Developed a user-centric task management app that enhances productivity by simplifying task tracking, deadline management, and collaboration.',
    tags: ['Product Strategy', 'Front end Development', 'Systems Design', 'Web Development']
  },
  {
    image: project2,
    category: categories[1],
    title: 'Engaging Landing Page for Electric Scooters',
    description:
      'Created a dynamic and visually appealing landing page that effectively communicates product value and encourages customer engagement.',
    tags: ['Product Strategy', 'Systems Design', 'Web Development']
  },
  {
    image: project3,
    category: categories[2],
    title: 'Real-Time Crypto Market Dashboard',
    description:
      'Designed and developed a comprehensive crypto market dashboard that provides real-time data and insights to users, enabling informed decision-making.',
    tags: ['Front end Development', 'Systems Design', 'Web Development']
  }
]

export const benefitsData: BenefitType[] = [
  {
    title: 'Prototype in 24 Hours',
    description:
      'Quickly visualize your idea with a working prototype, allowing you to gather feedback and refine your concept in just one day.'
  },
  {
    title: 'MVP Delivery in Two Weeks',
    description:
      'Launch a minimum viable product in as little as two weeks to start validating your idea and attracting early adopters.'
  },
  {
    title: 'Kickstart Full Development',
    description:
      'Transition seamlessly from concept to full-scale development with our expert team, turning your vision into a reality.'
  },
  {
    title: '24/7 Technical Support',
    description:
      'Enjoy peace of mind with our around-the-clock technical support, ensuring that your website or application is always up and running.'
  }
]
const blogCategories: string[] = ['Business', 'Digital', 'Development']
export const blogData: BlogType[] = [
  {
    image: blog5,
    category: blogCategories[0],
    time: '12 hours ago',
    title: 'Essential Checklist for Website Launch: Best Practices'
  },
  {
    image: blog7,
    category: blogCategories[1],
    time: '11 hours ago',
    title: 'The Power of Inclusive Marketing in Digital Spaces'
  },
  {
    image: blog8,
    category: blogCategories[1],
    time: '10 hours ago',
    title: 'Optimizing Your JavaScript-enabled Website for Performance'
  }
]
