import { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

type NavBarProps = {
  to: string[],
  logo: JSX.Element[]
}

export default function NavBar(props: NavBarProps) {
  const [ selectedLink, setSelectedLink ] = useState(props.to.indexOf(location.pathname))

  return (
    <nav className='NavBar'>
      <div className='LinksContainer'>
        {
          props.to.map(
            (to, index) => <Link to={to} className={index==selectedLink? 'SelectedLink': 'Link'} key={`linkTo${to}`} onClick={() => {
              setSelectedLink(index)
            }}>{props.logo[index]}</Link>
          )
        }
      </div>
    </nav>
  )
}