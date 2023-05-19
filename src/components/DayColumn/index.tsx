import './styles.scss'

export default function DayColumn() {
  const hours = Array(24).fill(0).map((_, index) => index)

  return (
    <div className='DayColumn'>
      { hours.map(hour => <div className='Hour' key={'hour' + hour.toString()}></div>) }
    </div>
  )
}