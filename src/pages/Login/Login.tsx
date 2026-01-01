import {} from 'react'
import logo from "../../assets/images/logo-purple.svg"
import phone from "../../assets/images/phone.svg"
import facebook from "../../assets/images/fb-logo.svg"
import google from "../../assets/images/gg-logo.svg"
import apple from "../../assets/images/apple-logo.svg"

function Login() {
  return (
    <main className=''>
        <div className="md:flex md:h-screen md:bg-[#F7F4FF] md:min-h-fit">
            <div className="bg-[#F7F4FF] flex flex-col gap-5 items-center pt-12 h-[50svh] min-h-82.5 md:w-1/2 md:h-full md:overflow-y-auto">
                <img src={logo} alt="logo" className="w-[88.14px] h-6" />
                <img src={phone} alt="phone" className="w-[187.69px] h-[190.51px]" />
            </div>

            <div className="bg-[#FFFFFF] p-4 h-[50svh] min-h-102.5 md:w-1/2 md:min-h-full md:h-fit md:px-8 md:pt-12">
                <h1 className="text-[#191919] text-[21px] font-semibold leading-[150%] mb-7">
                    Enter your <br /> mobile number
                </h1>

                <form action="" className='mb-5'>
                    <div className="mb-14">
                        <label htmlFor="" className="text-[#191919] text-xs leading-[150%] inline-block mb-2">Mobile number</label>
                        <div className="flex border rounded-sm p-3 h-11.25 border-[#E1E3ED] text-[#000000]">
                            <select name="" id="" className="w-28 text-sm leading-[150%]">
                                <option value="">+962</option>
                            </select>
                            <input type="text" placeholder='7X-XXXXXXX' name="" id="" className='placeholder-[#BAC2C7] outline-none' />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-[#5732BF] rounded-sm p-3 text-[#FFFFFF] font-semibold text-sm leading-[150%] cursor-pointer">Continue</button>
                </form>

                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-full bg-[#EDEFF6]"></div>
                    <p className="text-[#78838D] text-xs leading-[150%] min-w-fit">or continue using</p>
                    <div className="h-px w-full bg-[#EDEFF6]"></div>
                </div>

                <div className="flex justify-between items-center">
                    <button className="flex items-center justify-center border border-[#EDEFF6] rounded-sm w-[32%] cursor-pointer h-11.5">
                        <img src={facebook} alt="" className="icon" />
                    </button>
                    <button className="flex items-center justify-center border border-[#EDEFF6] rounded-sm w-[32%] cursor-pointer h-11.5">
                        <img src={google} alt="" className="icon" />
                    </button>
                    <button className="flex items-center justify-center border border-[#EDEFF6] rounded-sm w-[32%] cursor-pointer h-11.5">
                        <img src={apple} alt="icon" className="" />
                    </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Login