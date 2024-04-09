import './styles.scss'

type DayColumnProps = {
  currentYear: number,
  weekIndex: number,
  day: moment.Moment,
  month: moment.Moment
}

export default function DayColumn(props: DayColumnProps) {
  const hours = Array(24).fill(0).map((_, index) => index)

  return (
    <div className='DayColumn'>
      { hours.map(hour => <div className='Hour' key={`year${props.currentYear}month${props.month.format('MMMM')}week${props.weekIndex.toString()}day${props.day.format('DD').toString()}hour${hour.toString()}`}></div>) }
    </div>
  )
}