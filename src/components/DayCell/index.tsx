import moment from 'moment'
import './styles.scss'

type DayCellProps = {
  currentYear: number,
  weekIndex: number,
  day: moment.Moment,
  month: moment.Moment,
  currentDay: moment.Moment
}

export default function DayCell(props: DayCellProps){
  const getDayContainerClass = (day: moment.Moment, currentDay: moment.Moment) => {
    if(day.format('DD MMMM YYYY') == currentDay.format('DD MMMM YYYY') ){
      return 'CurrentDayCell'
    }
    else
      return 'DayCell'
  }

  const getDaySpanClass = (day: moment.Moment, month: moment.Moment): string => {
    if(day.format('MMMM') == month.format('MMMM'))
      return 'DayOfMonth'
    else
      return 'DayOutOfMonth'
  }

  return (
    <div key={`year${props.currentYear}month${props.month.format('MMMM')}week${props.weekIndex.toString()}day${props.day.format('DD').toString()}`} className={getDayContainerClass(props.day, props.currentDay)}>
      <span className={getDaySpanClass(props.day, props.month)}>{props.day.format('DD').toString()}</span>
    </div>
  )
}