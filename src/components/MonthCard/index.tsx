import moment from 'moment'

import './styles.scss'

type MonthCardProps = {
  monthName: string,
  currentYear: number
}

export default function MonthCard(props: MonthCardProps){
  const month = moment().locale('pt').month(props.monthName).year(props.currentYear)
  const weekDaysNames = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const startDayOfMonth = month.clone().startOf('month').startOf('week')
  const endDayOfMonth = month.clone().endOf('month').startOf('week')
  const day = startDayOfMonth.clone().subtract(1, 'day')
  const weeksOfMonth = []

  while(day.isBefore(endDayOfMonth, 'day')){
    weeksOfMonth.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    )
  }

  console.log(startDayOfMonth.format('DD'))

  return (
    <div className="MonthCard">
      <h1>{month.format('MMMM')}</h1>
      <div className='WeekContainer'>
        {weekDaysNames.map((dayName, index) => <div key={`year${props.currentYear}month${props.monthName}dayName${index.toString()}`} className='DayContainer'><span>{dayName}</span></div>)}
      </div>

      {weeksOfMonth.map((week, index) => (
        <div key={`year${props.currentYear}month${props.monthName}week${index.toString()}`} className='WeekContainer'>
          {week.map(day => (
            <div key={`year${props.currentYear}month${props.monthName}week${index.toString()}day${day.format('DD').toString()}`} className='DayContainer'><span>{day.format('DD').toString()}</span></div>
          ))}
        </div>
      ))}
    </div>
  )
}