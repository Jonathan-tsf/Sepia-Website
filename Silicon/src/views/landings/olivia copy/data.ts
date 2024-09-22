import chatImg from '@/assets/img/landing/olivia/features/chat.svg'
import analyticsImg from '@/assets/img/landing/olivia/features/analytics.svg'
import bellImg from '@/assets/img/landing/olivia/features/bell.svg'
import tasksImg from '@/assets/img/landing/olivia/features/tasks.svg'
import calendarImg from '@/assets/img/landing/olivia/features/calendar.svg'
import addGroupImg from '@/assets/img/landing/olivia/features/add-group.svg'
import headsetImg from '@/assets/img/landing/olivia/features/headset.svg'
import shieldImg from '@/assets/img/landing/olivia/features/shield.svg'
import googleImg from '@/assets/img/brands/google.svg'
import zoomImg from '@/assets/img/brands/zoom.svg'
import slackImg from '@/assets/img/brands/slack.svg'
import gmaillImg from '@/assets/img/brands/gmail.svg'
import trelloImg from '@/assets/img/brands/trello.svg'
import mailchimpImg from '@/assets/img/brands/mailchimp.svg'
import dropboxIMg from '@/assets/img/brands/dropbox.svg'
import evernoteImg from '@/assets/img/brands/evernote.svg'
import avatar14Img from '@/assets/img/avatar/14.jpg'
import avatar13Img from '@/assets/img/avatar/13.jpg'
import avatar11Img from '@/assets/img/avatar/11.jpg'
import useCase1Img from '@/assets/img/landing/olivia/use-cases/01.png'
import useCase2Img from '@/assets/img/landing/olivia/use-cases/02.png'
import useCase3Img from '@/assets/img/landing/olivia/use-cases/03.png'
import useCase4Img from '@/assets/img/landing/olivia/use-cases/04.png'

import StarIcon from '@iconify/icons-bx/bx-star'
import BriefcaseAlt2ICon from '@iconify/icons-bx/bx-briefcase-alt-2'
import RocketIcon from '@iconify/icons-bx/bx-rocket'
import BatChartAlt2Icon from '@iconify/icons-bx/bx-bar-chart-alt-2'

import type { WorkType, FeatureType, TestimonialType, WorkToolType, UseCaseType } from './type'

export const featuresData: FeatureType[] = [
  {
    image: chatImg,
    title: 'Support multilingue',
    description: 'Avec Olivia, peu importe la langue, chaque invité se sent compris, améliorant ainsi l’expérience des clients internationaux.'
  },
  {
    image: analyticsImg,
    title: 'Recommandations en temps réel',
    description: 'Grâce à l\'IA, Olivia propose des plats et boissons rentables, orientant subtilement les clients vers des choix à la fois satisfaisants et profitables.'
  },
  {
    image: bellImg,
    title: 'Réponses immédiates',
    description: 'Olivia permet aux clients de recevoir des réponses instantanées, accélérant ainsi les décisions et augmentant la rotation des tables.'
  },
  {
    image: tasksImg,
    title: 'Menu interactif',
    description: 'Les clients peuvent parcourir le menu avec Olivia, découvrant l\'histoire des plats et des ingrédients, pour une expérience culinaire plus immersive.'
  },
  {
    image: calendarImg,
    title: 'Ambiance moderne',
    description: 'Olivia apporte une touche technologique qui modernise l\'ambiance du restaurant, attirant une clientèle à la recherche de nouveautés digitales.'
  },
  {
    image: addGroupImg,
    title: 'Messages promotionnels',
    description: 'Les messages intégrés d\'Olivia augmentent la visibilité des offres spéciales et des événements, boostant la participation et les revenus.'
  },
  {
    image: headsetImg,
    title: 'Assistance instantanée',
    description: 'Toujours disponible, Olivia répond instantanément aux besoins des clients, assurant un service rapide et de qualité.'
  },
  {
    image: shieldImg,
    title: 'Interaction confidentielle',
    description: 'Les échanges avec Olivia respectent la vie privée des clients, leur offrant un espace sûr pour interagir et poser leurs questions.'
  }
]

export const workData: WorkType[] = [
  {
    title: 'Gestion de projets efficace'
  },
  {
    title: 'Transparence dans le management'
  },
  {
    title: 'Optimisez le travail et priorisez les tâches essentielles'
  },
  {
    title: 'Suivi des progrès grâce à des graphiques interactifs'
  },
  {
    title: 'Le moyen le plus simple de mesurer le temps passé sur les tâches'
  }
]

export const useCasesData: UseCaseType[] = [
  {
    icon: StarIcon,
    title: 'Gestion de projet',
    description:
      'Gérez vos projets de manière fluide avec Olivia. Profitez d\'une organisation claire, des suivis précis, et d\'une collaboration optimisée pour toute l\'équipe.',
    image: useCase1Img
  },
  {
    icon: BriefcaseAlt2ICon,
    title: 'Travail à distance',
    description:
      'Olivia facilite le travail à distance avec une gestion flexible des tâches et des communications, assurant une coordination sans faille entre les équipes.',
    image: useCase2Img
  },
  {
    icon: RocketIcon,
    title: 'Lancement de produit',
    description:
      'Gérez vos lancements de produits avec des outils qui suivent le planning, les tâches et les objectifs, pour un succès sans encombre.',
    image: useCase3Img
  },
  {
    icon: BatChartAlt2Icon,
    title: 'Planification de campagne',
    description:
      'Planifiez et exécutez des campagnes marketing avec Olivia, en utilisant des outils qui offrent un aperçu global du processus et des résultats.',
    image: useCase4Img
  }
]

const usersData = [
  {
    image: avatar14Img,
    name: 'Annette Black',
    role: 'Conseillère stratégique chez Company LLC'
  },
  {
    image: avatar13Img,
    name: 'Ralph Edwards',
    role: 'Responsable marketing chez Lorem Ltd.'
  },
  {
    image: avatar11Img,
    name: 'Darrell Steward',
    role: 'Chef de projet chez Ipsum Ltd.'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Olivia a transformé notre manière de travailler. Grâce à ses fonctionnalités, notre équipe est plus efficace, et la satisfaction des clients s’est nettement améliorée.',
    user: usersData[0]
  },
  {
    comment:
      'L\'intégration d\'Olivia dans notre restaurant a considérablement amélioré l\'expérience client. Nos invités apprécient la rapidité et la précision de ses réponses.',
    user: usersData[1]
  },
  {
    comment:
      'Depuis que nous utilisons Olivia, la gestion de nos projets est beaucoup plus fluide. Les tâches sont mieux réparties et nos délais sont respectés.',
    user: usersData[2]
  }
]

export const workToolsData: WorkToolType[] = [
  {
    image: googleImg
  },
  {
    image: zoomImg
  },
  {
    image: slackImg
  },
  {
    image: gmaillImg
  },
  {
    image: trelloImg
  },
  {
    image: mailchimpImg
  },
  {
    image: dropboxIMg
  },
  {
    image: evernoteImg
  }
]
