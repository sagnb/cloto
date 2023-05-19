import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Week from './pages/Week'
import Month from './pages/Month'
import ErrorPage from './pages/ErrorPage'

import './styles/global.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage message='Error 404'></ErrorPage>,
    children: [
      {
        path: '/calendar',
        element: <Calendar/>
      },
      {
        path: '/month/:monthDisplay',
        element: <Month/>
      },
      {
        path: '/week/:weekDisplay',
        element: <Week/>
      },
    ]
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
