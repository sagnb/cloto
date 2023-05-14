import { useParams } from 'react-router-dom'
import moment from 'moment'

import './styles.scss'

export default function Month(){
  const { monthDisplay } = useParams()
  const [ monthName, year] = monthDisplay?monthDisplay.split(' '):['', -1]
  const currentMonth = moment().month(monthName).year(Number(year))

  return (
    <div className='Month'>
      <h1>{currentMonth.format('MMMM YYYY')}</h1>
    </div>
  )
}