import list1 from '@/assets/img/portfolio/list/01.jpg'
import list2 from '@/assets/img/portfolio/list/02.jpg'
import list3 from '@/assets/img/portfolio/list/03.jpg'
import list4 from '@/assets/img/portfolio/list/04.jpg'

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

const categories2: string[] = ['Productivity', 'Professional', 'Game']
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
  },
  {
    image: list3, 
    date: 'Dec 1, 2023',
    title: 'Mistory - Guess the Story',
    category: categories2[2],
    description:
      'Mistory invites players into a world of mystery and deduction, where only a fragment of a story is revealed. It’s up to you to unravel the narrative thread, guessing the full story with minimal clues. This game challenges your inference skills and immerses you in a myriad of tales ranging from the historical to the fantastical.',
    link: { name: 'pages.single-project' }
  },
]
