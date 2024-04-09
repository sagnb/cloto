import { Outlet } from 'react-router-dom'

import {
  Calendar
} from 'phosphor-react'

import NavBar from '../../components/NavBar'

import './styles.scss'

export default function Home() {
  const to = [
    '/',
  ]

  const logo = [
    <Calendar/>
  ]

  return (
    <div className='Home'>
      <NavBar to={to} logo={logo}/>
      <Outlet/>
    </div>
  )
}