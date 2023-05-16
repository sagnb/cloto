import { useParams } from 'react-router-dom'
import moment from 'moment'

import WeekDaysNames from '../../components/WeekDaysNames'
import WeekRow from '../../components/WeekRow'

import './styles.scss'

export default function Day(){
  const { weekDisplay } = useParams()
  const [ week, month, year ] = weekDisplay?weekDisplay.split(' '):['-1', '',  '-1']
  const currentWeek = moment().week(Number(week)+1).year(Number(year))
  const currentMonth = moment().month(month).year(Number(year))
  const startDay = currentWeek.clone().startOf('week')
  const day = startDay.clone().subtract(1, 'day')
  const weekDaysNames = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const weekDays = Array(7).fill(0).map(() => day.add(1, 'day').clone())
  const currentDay = moment()

  return (
    <div className='Week'>
      <WeekDaysNames daysNames={weekDaysNames} currentYear={Number(year)} monthName={currentWeek.format('MMMM')}/>

      <WeekRow currentYear={Number(year)} month={currentMonth} days={weekDays} index={Number(week+year)} currentDay={currentDay}/>
    </div>
  )
}