import {} from 'react'
import logo from "../assets/images/Tap’nPay.png"
import { Loader } from 'lucide-react'

function LazyLoader() {
  return (
    <div className="h-svh bg-[#5732BF] flex items-center justify-center flex-col gap-6 text-[#FFFFFF] relative z-40">
        <img src={logo} alt="logo" className='w-[160.14px] h-[33.96px]' />
        <Loader className='spinner text-4xl text-[#FFFFFF]' />
    </div>
  )
}

export default LazyLoader