import moment from 'moment'

import DayCell from '../DayCell'

import './styles.scss'

type WeekRowProps = {
  currentYear: number,
  month: moment.Moment,
  days: moment.Moment[],
  index: number,
  currentDay: moment.Moment
}

export default function WeekRow(props: WeekRowProps){
  return (
    <div className='WeekRow'>
      {
        props.days.map(day => (
          <DayCell currentYear={props.currentYear} month={props.month} day={day} weekIndex={props.index} currentDay={props.currentDay}/>
        ))
      }
    </div>
  )
}