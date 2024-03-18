import podcast4 from '@/assets/img/blog/podcasts/04.jpg'
import podcast5 from '@/assets/img/blog/podcasts/05.jpg'
import podcast2 from '@/assets/img/blog/podcasts/02.jpg'
import podcast3 from '@/assets/img/blog/podcasts/03.jpg'

import avatar6Img from '@/assets/img/avatar/06.jpg'
import avatar1Img from '@/assets/img/avatar/01.jpg'
import avatar2Img from '@/assets/img/avatar/02.jpg'
import avatar3Img from '@/assets/img/avatar/03.jpg'
import avatar4Img from '@/assets/img/avatar/04.jpg'
import avatar5Img from '@/assets/img/avatar/05.jpg'

import type { PodcastType, AnchorType } from '@/views/pages/podcast/type'

export const categories = [
  'Digital',
  'Business',
  'Technology',
  'Startups',
  'Web',
  'Web design',
  'Processes & Tools',
  'Marketing',
  'Events'
]

const anchorData: AnchorType[] = [
  {
    image: avatar6Img,
    name: 'Annette Black'
  },
  {
    image: avatar1Img,
    name: 'Jerome Bell'
  },
  {
    image: avatar2Img,
    name: 'Ralph Edwards'
  },
  {
    image: avatar3Img,
    name: 'Esther Howard'
  },
  {
    image: avatar4Img,
    name: 'Jane Cooper'
  },
  {
    image: avatar5Img,
    name: 'Albert Flores'
  }
]

export const podcastData: PodcastType[] = [
  {
    cover: podcast4,
    airedOn: '2 hours ago',
    time: '0:48:02',
    category: categories[0],
    link: {
      name: 'pages.podcast'
    },
    title: 'IOS and the Changing landscape of Data Privacy',
    anchor: anchorData[0],
    liked: 4,
    commented: 2,
    shared: 0
  },
  {
    cover: podcast5,
    airedOn: '10 hours ago',
    time: '0:25:43',
    category: categories[6],
    link: {
      name: 'pages.podcast'
    },
    title: 'Behavioral Science and Digital Marketing',
    anchor: anchorData[5],
    liked: 9,
    commented: 5,
    shared: 6
  },
  {
    cover: podcast2,
    airedOn: '10 hours ago',
    time: '1:12:05',
    category: categories[2],
    link: {
      name: 'pages.podcast'
    },
    title: 'Why You Should Care About Your Competitors',
    anchor: anchorData[1],
    liked: 45,
    commented: 12,
    shared: 6
  },
  {
    cover: podcast3,
    airedOn: '1 day ago',
    time: '0:32:15',
    category: categories[7],
    link: {
      name: 'pages.podcast'
    },
    title: 'Tips for Marketing Managers: How to Maximise Leads',
    anchor: anchorData[4],
    liked: 10,
    commented: 4,
    shared: 6
  }
]
