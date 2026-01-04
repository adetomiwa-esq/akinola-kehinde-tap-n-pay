import { useState } from 'react'
import logo from "../../assets/images/logo-purple.svg"
import phone from "../../assets/images/phone.svg"
import facebook from "../../assets/images/fb-logo.svg"
import google from "../../assets/images/gg-logo.svg"
import apple from "../../assets/images/apple-logo.svg"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MobileSchema } from '../../validation/auth.schema'
import { z } from "zod"
import { Link, useNavigate } from 'react-router-dom'
import jordan from "../../assets/images/Jordan.svg"
import down from "../../assets/images/down.svg"
import { Loader } from 'lucide-react'


type MobileFormData = z.infer<typeof MobileSchema>



function Login() {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MobileFormData>({
        resolver: zodResolver(MobileSchema),
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (data: MobileFormData) => {
    // Save phone for next step

        if(!errors.phone){
            setIsLoading(true)

            setTimeout(() => {
                sessionStorage.setItem("user", data.phone)

                // Go to password page
                navigate("/login/password")
                setIsLoading(false)
            }, 1500)
        }
    
    }


  return (
    <main className='leading-[150%] tracking-[0%]'>
        <div className="md:flex md:h-screen md:bg-[#F7F4FF] md:min-h-fit">
            <div className="bg-[#F7F4FF] flex flex-col gap-5 items-center pt-12 h-[50svh] min-h-82.5 md:w-1/2 md:h-full md:overflow-y-auto">
                <img src={logo} alt="logo" className="w-[88.14px] h-6" />
                <img src={phone} alt="phone" className="w-[187.69px] h-[190.51px]" />
            </div>

            <div className="bg-[#FFFFFF] p-4 h-[50svh] min-h-106.25 md:w-1/2 md:min-h-full md:h-fit md:px-8 md:pt-12">
                <h1 className="text-[#191919] text-[21px] font-semibold leading-[150%] mb-7">
                    Enter your <br /> mobile number
                </h1>

                <form action="" onSubmit={handleSubmit(onSubmit)} className='mb-5'>
                    <div className="mb-12">
                        <label htmlFor="" className="text-[#191919] text-xs leading-[150%] inline-block mb-2">Mobile number</label>
                        <div className="flex border rounded-sm p-3 h-11.25 border-[#E1E3ED] text-[#000000] text-sm">
                            <div className="flex w-28 gap-2 items-center">
                                <img src={jordan} alt="icon" className='w-7 h-5.25' />

                                <span>+962</span>
                                <img src={down} alt="icon" className='w-[8.49px] h-[5.66px]' />
                            </div>
                            <input {...register("phone")} type="text" placeholder='7X-XXXXXXX' className='placeholder-[#BAC2C7] outline-none' />
                        </div>
                        {errors.phone && (
                        <p className="text-[#B83232] text-xs mt-2">
                        {errors.phone.message}
                        </p>
                    )}
                    </div>

                    

                    <button disabled={isLoading} type="submit" className="w-full bg-[#5732BF] rounded-sm p-3 text-[#FFFFFF] font-semibold text-sm leading-[150%] cursor-pointer">{isLoading ? <Loader className='spinner inline' /> : "Continue"}</button>
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

                <p className="text-sm mt-3 text-center">Don't have an account? <Link className='text-[#5732BF] font-semibold' to="/register">Register</Link></p>
            </div>
        </div>
    </main>
  )
}

export default Login