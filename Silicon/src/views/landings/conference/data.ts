import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'

import avatar24 from '@/assets/img/team/24.jpg'
import avatar25 from '@/assets/img/team/25.jpg'
import avatar26 from '@/assets/img/team/26.jpg'
import avatar27 from '@/assets/img/team/27.jpg'
import avatar28 from '@/assets/img/team/28.jpg'
import avatar29 from '@/assets/img/team/29.jpg'
import avatar30 from '@/assets/img/team/30.jpg'
import avatar31 from '@/assets/img/team/31.jpg'

import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar13 from '@/assets/img/avatar/13.jpg'
import avatar14 from '@/assets/img/avatar/14.jpg'

import type {
  BrandType,
  SpeakerType,
  TimelineType,
  TestimonialType,
  UserType
} from '@/views/landings/conference/type'

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
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  }
]

export const speakerData: SpeakerType[] = [
  {
    image: avatar24,
    name: 'Ralph Edwards',
    position: 'Founder & CEO, Uber'
  },
  {
    image: avatar25,
    name: 'Albert Flores',
    position: 'Principal Consultant, Twitch'
  },
  {
    image: avatar26,
    name: 'Jenny Wilson',
    position: 'UX Designer, Glassdoor'
  },
  {
    image: avatar27,
    name: 'Marvin McKinney',
    position: 'Product Manager, Google'
  },
  {
    image: avatar28,
    name: 'Esther Howard',
    position: 'VP of Strategy, Stretto Inc.'
  },
  {
    image: avatar29,
    name: 'Cameron Williamson',
    position: 'Co-Founder, Invision LTD'
  },
  {
    image: avatar30,
    name: 'Darrell Steward',
    position: 'Senior Project Manager, Uber'
  },
  {
    image: avatar31,
    name: 'Jerome Bell',
    position: 'Strategic Advisor, Shopify'
  }
]

export const timelineData: TimelineType[] = [
  {
    scheduleFor: 'Day One',
    date: 'Oct 14, 2023',
    schedule: [
      {
        time: '9:30 – 10:30 am',
        topic: 'Opening party & early registration'
      },
      {
        time: '10:30 – 11:30 am',
        tag: 'Lecture',
        topic: 'Product strategy: Defining your strategy, tactics, metrics & roadmap',
        description:
          'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat. In bibendum diam nunc dignissim magna morbi mattis.',
        speaker: [speakerData[3]]
      },
      {
        time: '11:30 am – 13:00 pm',
        tag: 'Workshop',
        topic: 'Workshop: Top trends and predictions for content that will dominate next year',
        description:
          'Nec, malesuada quisque lorem id amet posuere. Risus, elit, vel pharetra ac, dictum lorem nisl morbi. Lorem dui id aliquam eu feugiat arcu diam.',
        speaker: [speakerData[7], speakerData[2]]
      },
      {
        time: '13:00 – 14:00 pm',
        topic: 'Interlude: attendee dinner'
      },
      {
        time: '14:00 – 16:00 pm',
        tag: 'Lecture',
        topic: 'Group discussion: How to align and empower cross-team success',
        description:
          'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis.',
        speaker: [speakerData[0], speakerData[1], speakerData[4]]
      },
      {
        time: '16:00 – 17:00 pm',
        tag: 'Panel',
        topic: 'Panel: State of speed tooling',
        description:
          'Volutpat aliquam quam eget sit. Aliquam dui pellentesque egestas duis amet malesuada eget. Ut faucibus dignissim maecenas dui tristique vestibulum facilisis dictumst consequat.',
        speaker: [speakerData[5]]
      },
      {
        time: '17:00 – 19:00 pm',
        topic: 'Official mid-conference party after Day One'
      }
    ]
  },
  {
    scheduleFor: 'Day Two',
    date: 'Oct 15, 2023',
    schedule: [
      {
        time: '9:30 – 10:30 am',
        topic: 'Day 2 registration'
      },
      {
        time: '10:30 – 11:30 am',
        tag: 'Workshop',
        topic: 'Workshop: Top trends and predictions for content that will dominate next year',
        description:
          'Nec, malesuada quisque lorem id amet posuere. Risus, elit, vel pharetra ac, dictum lorem nisl morbi. Lorem dui id aliquam eu feugiat arcu diam.',
        speaker: [speakerData[7], speakerData[3]]
      },
      {
        time: '11:30 am – 13:00 pm',
        tag: 'Lecture',
        topic: 'Product strategy: Defining your strategy, tactics, metrics & roadmap',
        description:
          'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat. In bibendum diam nunc dignissim magna morbi mattis.',
        speaker: [speakerData[3]]
      },
      {
        time: '13:00 – 14:00 pm',
        topic: 'Interlude: attendee dinner'
      },
      {
        time: '14:00 – 16:00 pm',
        tag: 'Panel',
        topic: 'Panel: State of speed tooling',
        description:
          'Volutpat aliquam quam eget sit. Aliquam dui pellentesque egestas duis amet malesuada eget. Ut faucibus dignissim maecenas dui tristique vestibulum facilisis dictumst consequat.',
        speaker: [speakerData[5]]
      },
      {
        time: '16:00 – 17:00 pm',
        tag: 'Lecture',
        topic: 'Group discussion: How to align and empower cross-team success',
        description:
          'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis.',
        speaker: [speakerData[0], speakerData[1]]
      },
      {
        time: '17:00 – 19:00 pm',
        topic: 'Closing farewell party'
      }
    ]
  }
]

const userData: UserType[] = [
  {
    image: avatar14,
    name: 'Annette Black',
    role: 'QA Engineer in Company Name'
  },
  {
    image: avatar11,
    name: 'Jerome Bell',
    role: 'Co-founder of Lorem Company'
  },
  {
    image: avatar13,
    name: 'Robert Fox',
    role: 'CEO of Ipsum Company'
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
