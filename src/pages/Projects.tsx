import { Card, Badge } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Typography from '../components/Typography'

const PROJECTS = [
  {
    title: 'Personal Website',
    description: 'Designed, built, and deployed serverless portfolio page',
    link: 'https://github.com/gbarchard/personal-website',
    tags: ['React', 'Tailwind', 'Flowbite React'],
  },
  {
    title: 'Discord Bot',
    description:
      'Displayed player rankings and statistics based my college Super Smash Bros tournament results on start.gg',
    link: 'https://github.com/gbarchard/SmashClubPR',
    tags: ['Node', 'GraphQL'],
  },
]

export default function Projects() {
  return (
    <>
      <Typography className="mb-4">
        <h1>Projects</h1>
      </Typography>
      <div className="grid lg:grid-cols-2 gap-4">
        {PROJECTS.map((p) => (
          <Link to={p.link} target="_blank">
            <Card className="h-full hover:ring-2 hover:ring-blue-700 dark:hover:ring-white cursor-pointer">
              <div className="grow flex flex-col">
                <Typography className="grow">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </Typography>
                <div className="flex gap-2 flex-wrap mt-4">
                  {p.tags.map((t) => (
                    <Badge color="gray">{t}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
