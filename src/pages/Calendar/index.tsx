import { useState } from 'react'
import moment from 'moment'

import YearSelector from '../../components/YearSelector'
import MonthCard from '../../components/MonthCard'

import './styles.scss'

export default function Calendar(){
  const [currentYear, setCurrentYear] = useState(moment().year())
  const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  moment.updateLocale('pt', {
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
  })

  return (
    <div className='Calendar'>
      <YearSelector currentYear={currentYear} setCurrentYear={setCurrentYear}/>

      <div className='MonthsContainer'>
        {monthsNames.map((monthName) => <MonthCard key={monthName} monthName={monthName} currentYear={currentYear}/>)}
      </div>
    </div>
  )
}