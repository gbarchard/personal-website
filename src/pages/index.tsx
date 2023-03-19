import NotFound from "./NotFound"

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
    component: <div>Home</div>,
  },
  {
    title: 'Work Experience',
    path: '/experience',
    component: <div>Work Experience</div>,
  },
  {
    title: 'Projects',
    path: '/projects',
    component: <div>Projects</div>,
  },
  {
    title: 'Contact',
    path: '/contact',
    component: <div>contact</div>,
  },
  {
    title: 'Not Found',
    path: '*',
    component: <NotFound />,
    hiddenFromNav: true,
  },
]
