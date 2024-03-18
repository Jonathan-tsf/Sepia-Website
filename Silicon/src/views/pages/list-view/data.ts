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

const categories: string[] = ['Graphic Design', 'UI / UX', 'Motion Design', 'Web Design']
export const listData: ListType[] = [
  {
    image: list1,
    date: 'Nov 18, 2023',
    title: 'SaaS Project Management Tool',
    category: categories[0],
    description:
      'Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.',
    link: { name: 'pages.single-project' }
  },
  {
    image: list2,
    date: 'Nov 9, 2023',
    title: 'Mobile Banking App',
    category: categories[1],
    description:
      'Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.',
    link: { name: 'pages.single-project' }
  },
  {
    image: list3,
    date: 'Oct 25, 2023',
    title: 'Tool for Task Management',
    category: categories[2],
    description:
      'Tortor suspendisse enim convallis mauris, tincidunt ornare non tempor, turpis. Ultricies elit vitae imperdiet luctus lorem tellus, vel. Non sodales facilisis amet vulputate massa ultricies volutpat consectetur velit.',
    link: { name: 'pages.single-project' }
  },
  {
    image: list4,
    date: 'Aug 23, 2023',
    title: 'Hospital and Healthcare Website',
    category: categories[3],
    description:
      'Adipiscing amet placerat orci, non iaculis. Velit nec nec risus, ultrices mus integer nibh bibendum. In sagittis, habitant viverra nibh massa luctus. Lobortis tristique lorem in nisl, aliquam eu pretium hendrerit. Mauris, varius interdum dui elementum neque mi. Tortor amet ornare felis erat.  Arcu enim nunc, porttitor libero massa.',
    link: { name: 'pages.single-project' }
  }
]
