import scooterImg from '@/assets/img/landing/startup/icons/smiley.svg';
import diamondImg from '@/assets/img/landing/startup/icons/diamond.svg';
import planetImg from '@/assets/img/landing/startup/icons/planet.svg';
import step1Img from '@/assets/img/landing/startup/steps/01.svg';
import step2Img from '@/assets/img/landing/startup/steps/02.svg';
import step3Img from '@/assets/img/landing/startup/steps/03.svg';
import step4Img from '@/assets/img/landing/startup/steps/04.svg';
import mobileImg from '@/assets/img/landing/startup/icons/mobile.svg';
import handImg from '@/assets/img/landing/startup/icons/hand.svg';
import smileyImg from '@/assets/img/landing/startup/icons/smiley.svg';

import type { FeatureType, ProcessType, BenefitType } from './type';

export const featureData: FeatureType[] = [
  {
    image: scooterImg,
    title: 'Multilingual Support',
    description:
      'Our chatbot seamlessly communicates in over 80 languages, providing a personalized experience for every user, no matter where they are from.'
  },
  {
    image: diamondImg,
    title: 'Customizable Responses',
    description:
      'Tailor the chatbot’s responses to align with your brand’s voice and meet specific customer service needs effortlessly.'
  },
  {
    image: planetImg,
    title: 'Global Reach',
    description:
      'Expand your business’s online presence with a chatbot designed to cater to customers from all around the world, ensuring accessibility and engagement.'
  }
];

export const processData: ProcessType[] = [
  {
    image: step1Img,
    title: 'Add the Chatbot Tag',
    description:
      'Simply copy and paste the provided HTML tag into your website’s code to start using the chatbot. No complex setup required!'
  },
  {
    image: step2Img,
    title: 'Configure Your Preferences',
    description:
      'Use our intuitive dashboard to customize the chatbot’s appearance, language options, and default responses to align with your business needs.'
  },
  {
    image: step3Img,
    title: 'Deploy and Test',
    description: `Once configured, deploy the chatbot to your site and test it to ensure it meets your expectations. Make adjustments as necessary through the dashboard.`
  },
  {
    image: step4Img,
    title: 'Engage Your Customers',
    description:
      'With the chatbot live, engage your customers in real-time, answering queries and providing support. Enjoy improved customer satisfaction and increased conversions.'
  }
];

export const benefitData: BenefitType[] = [
  {
    image: mobileImg,
    title: 'Easy Integration',
    description: 'Our chatbot can be easily integrated into any website with a simple HTML tag, making it accessible for businesses of all sizes.'
  },
  {
    image: scooterImg,
    title: 'Real-time Interaction',
    description: 'Provide instant support and information to your website visitors, enhancing their experience and increasing engagement.'
  },
  {
    image: handImg,
    title: 'Cost-Effective Solution',
    description: 'Reduce customer service costs by automating routine interactions, allowing your team to focus on more complex tasks.'
  },
  {
    image: smileyImg,
    title: 'Enhanced User Experience',
    description:
      'Offer a friendly and intuitive interface that keeps your customers happy and satisfied, ensuring they return to your site.'
  }
];
