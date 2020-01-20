import { DiReact, DiJavascript, DiNodejs } from 'react-icons/di';
import {
  GiPalette,
  GiTalk,
  GiSuitcase,
  GiDatabase,
  GiBinoculars,
} from 'react-icons/gi';

import NextjsLogo from '../images/nextjs-logo.png';
import GatsbyLogo from '../images/gatsby-logo.png';
import StyledComponentsLogo from '../images/styled-components-logo.png';
import EmotionLogo from '../images/emotion-logo.png';

export default [
  {
    name: 'React',
    url: '/react',
    icon: DiReact,
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    url: '/next-js',
    image: NextjsLogo,
  },
  {
    name: 'Gatsby',
    url: '/gatsby',
    image: GatsbyLogo,
  },
  {
    name: 'JavaScript',
    url: '/javascript',
    icon: DiJavascript,
    color: '#F0DB4F',
  },
  {
    name: 'Node.js',
    url: '/node-js',
    icon: DiNodejs,
    color: '#3C873A',
  },
  {
    name: 'Styled Components',
    url: '/styled-components',
    image: StyledComponentsLogo,
  },
  {
    name: 'Emotion',
    url: '/emotion',
    image: EmotionLogo,
  },
  {
    name: 'Design',
    url: '/design',
    icon: GiPalette,
    color: '#6746b0',
  },
  {
    name: 'Marketing',
    url: '/marketing',
    icon: GiTalk,
    color: '#3076b0',
  },
  {
    name: 'Business',
    url: '/business',
    icon: GiSuitcase,
    color: '#55614f',
  },
  {
    name: 'Database',
    url: '/database',
    icon: GiDatabase,
    color: '#a32e00',
  },
  {
    name: 'SEO',
    url: '/seo',
    icon: GiBinoculars,
    color: '#81b800',
  },
];
