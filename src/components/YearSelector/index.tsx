import {
  CaretLeft,
  CaretRight
} from 'phosphor-react'

import './styles.scss'

type YearSelectorProps = {
  currentYear: number,
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>
}

export default function YearSelector(props: YearSelectorProps){
  const { currentYear, setCurrentYear } = props

  return (
    <div className='YearSelector'>
      <button type='button' className='YearButtonLeft' onClick={() => {setCurrentYear(currentYear - 1)}}><CaretLeft/></button>

      <span>{currentYear.toString()}</span>

      <button type='button' className='YearButtonRight' onClick={() => {setCurrentYear(currentYear + 1)}}><CaretRight/></button>
  </div>
  )
}