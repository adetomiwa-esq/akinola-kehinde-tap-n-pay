import {} from 'react'
import logo from "../../../assets/images/logo-purple.svg"
import shield from "../../../assets/images/shield.svg"
import eyeLine from "../../../assets/images/eye-off-line.svg"

function Password() {
  return (
    <main className=''>
        <div className="md:flex md:h-screen md:bg-[#F7F4FF] md:min-h-fit">
            <div className="bg-[#F7F4FF] flex flex-col gap-10 items-center pt-18 h-[50svh] min-h-82.5 md:w-1/2 md:h-full md:overflow-y-auto">
                <img src={logo} alt="logo" className="w-39 h-6" />
                <img src={shield} alt="phone" className="w-[187.69px] h-48.5" />
            </div>

            <div className="bg-[#FFFFFF] p-4 pt-12 h-[50svh] min-h-102.5 md:w-1/2 md:h-full md:px-8 md:pt-12">
                <h1 className="text-[#191919] text-[21px] font-semibold leading-[150%] mb-7">
                    Enter your password
                </h1>

                <form action="" className='mb-5 h-[80%] relative'>
                    <div className="mb-5">
                        <label htmlFor="" className="text-[#191919] text-xs leading-[150%] inline-block mb-2">Password</label>
                        <div className="text-[#000000] relative">
                            <input type="password" placeholder='Enter your password' name="" id="" className='placeholder-[#BAC2C7] outline-none border rounded-sm p-3 h-11.25 border-[#E1E3ED] w-full text-sm' />

                            <span role='button' className='absolute top-1/2 cursor-pointer -translate-y-1/2 right-3'>
                                {
                                    <img src={eyeLine} alt="icon" className='w-[18.03px] h-[17.68px]' />
                                }
                            </span>
                        </div>
                    </div>

                    <div className="w-fit ml-auto text-[#1D62CA] font-semibold text-sm leading-[150%] cursor-pointer" role='button'>Forgot password?</div>

                    <button type="submit" className="absolute bottom-0 left-0 w-full bg-[#5732BF] rounded-sm p-3 text-[#FFFFFF] font-semibold text-sm leading-[150%] cursor-pointer">Login</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Password