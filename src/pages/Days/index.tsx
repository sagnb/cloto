import { useParams } from 'react-router-dom'

import './styles.scss'

export default function Days(){
  const { id } = useParams()

  return (
    <h1>dia {id}</h1>
  )
}