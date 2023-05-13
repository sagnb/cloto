import './styles.scss'

type ErrorPageProps = {
  message: string
}

export default function ErrorPage(props: ErrorPageProps) {
  return (
    <h1>{props.message}</h1>
  )
}