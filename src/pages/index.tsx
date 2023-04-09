import Home from "./Home"
import NotFound from "./NotFound"
import Projects from "./Projects"
import WorkExperience from "./WorkExperience"

type Page = {
  title: string
  path: string
  component: JSX.Element
  hiddenFromNav?: true
}

export const pages: Page[] = [
  {
    title: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    title: 'Work Experience',
    path: '/experience',
    component: <WorkExperience />,
  },
  {
    title: 'Projects',
    path: '/projects',
    component: <Projects />,
  },
  {
    title: 'Not Found',
    path: '*',
    component: <NotFound />,
    hiddenFromNav: true,
  },
]
