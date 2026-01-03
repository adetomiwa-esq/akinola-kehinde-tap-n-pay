import {} from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

function MainLayout() {
  return (
    <div className='pb-[70px]'>
        <Outlet />
        <Navigation />
    </div>
  )
}

export default MainLayout