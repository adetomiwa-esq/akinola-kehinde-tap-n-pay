import {} from 'react'
import MainBalance from './MainBalance'
import RecentTransfers from './RecentTransfers'

function Home() {
  return (
    <main className=''>
        <MainBalance />
        <RecentTransfers />
    </main>
  )
}

export default Home