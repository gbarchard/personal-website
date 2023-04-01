import { Timeline } from 'flowbite-react'
import { PropsWithChildren } from 'react'
import Typography from '../components/Typography'

export default function WorkExperience() {
  return (
    <>
      <Typography>
        <h1>Work Experience</h1>
      </Typography>
      <Timeline className="mt-4">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Jan 2022 - Present</Timeline.Time>
            <Timeline.Title>
              Software Developer at{' '}
              <TitleLink href="https://www.answerrocket.com">
                AnswerRocket
              </TitleLink>
            </Timeline.Title>
            <Timeline.Body>
              Developed user interfaces using React, Typescript, and Tailwind
              and created APIs using Python, Java, Kotlin, and GraphQL. Lead
              and mentored teams of interns. Displayed strong communication
              skills with a track record of collaborating with cross-functional
              teams.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Nov 2020 - Dec 2021</Timeline.Time>
            <Timeline.Title>
              Quality Assurance Intern at{' '}
              <TitleLink href="https://www.answerrocket.com">
                Answerrocket
              </TitleLink>
            </Timeline.Title>
            <Timeline.Body>
              Wrote and maintained Cypress integration tests. Standardized the
              method of writing tests by implementing reusable and resilient
              functions. Resolved front-end React defects.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Apr 2020 - Aug 2020</Timeline.Time>
            <Timeline.Title>
              Intern at{' '}
              <TitleLink href="https://www.skillshot.com/">
                Skillshot Media
              </TitleLink>
            </Timeline.Title>
            <Timeline.Body>
              Organized and ran 50+ entrant Fortnite, and Call of Duty: Warzone tournaments.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  )
}

function TitleLink(props: PropsWithChildren<{ href: string }>) {
  const { children, href } = props
  return (
    <span className="format dark:format-dark format-blue text-lg">
      <a href={href} target="_blank" rel="noreferrer">{children}</a>
    </span>
  )
}
