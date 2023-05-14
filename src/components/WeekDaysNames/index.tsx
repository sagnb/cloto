import './styles.scss'

type WeekDaysNamesProps = {
  daysNames: string[],
  currentYear: number,
  monthName: string
}

export default function WeekDaysNames(props: WeekDaysNamesProps){
  return (
    <div className='WeekDaysNames'>
      {props.daysNames.map((dayName, index) => <div key={`year${props.currentYear}month${props.monthName}dayName${index.toString()}`} className='DayNameContainer'><span>{dayName}</span></div>)}
    </div>
  )
}