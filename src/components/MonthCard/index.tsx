import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import WeekDaysNames from '../WeekDaysNames'
import WeekRow from '../WeekRow'

import './styles.scss'

type MonthCardProps = {
  monthName: string,
  currentYear: number
}

export default function MonthCard(props: MonthCardProps){
  const month = moment().locale('pt').month(props.monthName).year(props.currentYear)
  const weekDaysNames = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const startDayOfCard = month.clone().startOf('month').startOf('week')
  const endDayOfCard = month.clone().endOf('month').startOf('week')
  const day = startDayOfCard.clone().subtract(1, 'day')
  const weeksOfMonth = []
  const currentDay = moment()

  const navigate = useNavigate()

  const viewMonth = () => {
    navigate('/month/' + month.format('MMMM YYYY'))
  }

  while(day.isBefore(endDayOfCard, 'day')){
    weeksOfMonth.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    )
  }

  return (
    <div className='MonthCard'>
      <div className='MonthNameContainer' onClick={viewMonth}>
        <h1>{month.format('MMMM')}</h1>
      </div>

      <WeekDaysNames daysNames={weekDaysNames} currentYear={props.currentYear} monthName={props.monthName}/>

      {
        weeksOfMonth.map((week, index) => (
          <WeekRow key={`year${props.currentYear}month${props.monthName}week${index.toString()}`} currentYear={props.currentYear} month={month} days={week} index={index} currentDay={currentDay}/>
        ))
      }
    </div>
  )
}