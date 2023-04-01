import Typography from '../components/Typography'

export default function Home() {
  return (
    <Typography className="grow flex flex-col justify-center">
      <h1>Hi, I'm Grant Barchard</h1>
      <h4>
        I'm a full stack web developer currently working at{' '}
        <a href="http://www.answerrocket.com" target="_blank" rel="noreferrer">
          Answer Rocket
        </a>
      </h4>
    </Typography>
  )
}
