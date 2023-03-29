import NotFound from "./NotFound"
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
    component: <div className="dark:text-white">Home</div>,
  },
  {
    title: 'Work Experience',
    path: '/experience',
    component: <WorkExperience />,
  },
  {
    title: 'Projects',
    path: '/projects',
    component: <div className="dark:text-white">Projects</div>,
  },
  {
    title: 'Not Found',
    path: '*',
    component: <NotFound />,
    hiddenFromNav: true,
  },
]
