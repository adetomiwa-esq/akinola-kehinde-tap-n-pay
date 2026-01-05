import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import left from '../../assets/images/left.svg'
import logo from "../../assets/images/logo-purple.svg"
import { RegisterSchema } from '../../validation/auth.schema'
import type z from 'zod'
import eyeLine from "../../assets/images/eye-off-line.svg"
import { Eye, Loader } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// @ts-expect-error 3rd party package has been installed
import zxcvbn from "zxcvbn"
import facebook from "../../assets/images/fb-logo.svg"
import google from "../../assets/images/gg-logo.svg"
import apple from "../../assets/images/apple-logo.svg"



type RegisterFormData = z.infer<typeof RegisterSchema>

function Register() {
    const navigate = useNavigate()

    

    // form validation
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
    })

    
    const password = watch("password", "")
    const strength = zxcvbn(password)
    
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [agreeToTerms, setAgreeToTerms] = useState(false)
    const [agreementError, setAgreementError] = useState("")

    const onSubmit = (data: RegisterFormData) => {

        if(!agreeToTerms){
            setAgreementError("Terms and conditions must be accepted to proceed")
            return
        }

        // navigate to login page after creating account
    
            if(!errors.email || !errors.name || !errors.password){
                setIsLoading(true)
    
                setTimeout(() => {

                    sessionStorage.setItem("user", data.email)
    
                    // Go to password page
                    navigate("/")
                    setIsLoading(false)
                }, 1500)
            }
        
    }

    
    
  return (
    <main className="leading-[150%] tracking-[0%] text-[#191919]">
        <div className="flex flex-col min-h-svh justify-between pt-8 px-6">
            <div className="w-full flex items-center justify-between px-2 mb-10">
                <Link to="/login" className='flex gap-2 text-[#1D62CA] text-sm font-semibold'>
                    <img src={left} alt="icon" />
                    Back
                </Link>
                <img src={logo} alt="logo" className="w-39 h-6" />
                <div className="w-9"></div>
            </div>

            <div className="pb-10 md:w-175 md:mx-auto">
                <h1 className="text-[#191919] text-[21px] font-semibold mb-8">Create Account</h1>

                <form action="" onSubmit={handleSubmit(onSubmit)} className='mb-10'>

                    <div className="mb-5">
                        <div className="">
                            <label htmlFor="" className="text-xs inline-block mb-3 ">Name</label>

                            <input type="name" {...register("name")} placeholder='e.g. John Doe' id="" className='w-full h-11.25 border border-[#E1E3ED] rounded-sm placeholder-[#BAC2C7] text-sm p-3 outline-none' />
                        </div>
                        {errors.email && (
                            <p className="text-[#B83232] text-xs mt-1">
                                {errors.name?.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <div className="">
                            <label htmlFor="" className="text-xs inline-block mb-3 ">Email</label>

                            <input type="email" {...register("email")} placeholder='e.g. email@example.com' id="" className='w-full h-11.25 border border-[#E1E3ED] rounded-sm placeholder-[#BAC2C7] text-sm p-3 outline-none' />
                        </div>
                        {errors.email && (
                            <p className="text-[#B83232] text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="" className="text-[#191919] text-xs leading-[150%] inline-block mb-2">Password</label>
                        <div className="text-[#000000] relative">
                            <input 
                                type={showPassword ? "text" : "password"}
                                {...register("password")}
                                placeholder='Enter your password'
                                className='placeholder-[#BAC2C7] outline-none border rounded-sm p-3 h-11.25 border-[#E1E3ED] w-full text-sm' />
                            <span role='button' className='absolute top-1/2 cursor-pointer -translate-y-1/2 right-3' onClick={() => setShowPassword((prev) => !prev)}>
                                { showPassword ? <Eye className='w-[18.03px] h-[21.68px] opacity-70' /> :
                                    <img src={eyeLine} alt="icon" className='w-[18.03px] h-[17.68px]' />
                                }
                            </span>
                        </div>

                        {errors.password && (
                            <p className="text-[#B83232] text-xs mt-2">
                                {errors.password.message}
                            </p>
                        )}

                        {/* PASSWORD STRENGTH */}
                        {password && (
                            <div className="mt-3">
                                <div className="flex gap-1 mb-1">
                                    {[0, 1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className={`h-1 w-full rounded transition-all duration-300 ${
                                                strength.score > i
                                                ? strength.score >= 3
                                                ? "bg-green-500"
                                                : "bg-yellow-400"
                                                : "bg-gray-200"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <p className="text-xs text-[#78838D]">
                                {strength.score < 2 && "Very weak password"}
                                {strength.score === 2 && "Fair password"}
                                {strength.score >= 3 && "Strong password"}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mb-10">
                        <div className="text-xs flex items-center gap-1">
                            <input type="checkbox" name="" id="" onChange={(e) => {
                            setAgreeToTerms(e.target.checked)
                            setAgreementError("")
                            }}/>
                            <p>I accept <a href="" className='text-[#1D62CA]'>terms and conditions</a> and <a href="" className='text-[#1D62CA]'>privacy policy</a></p>
                        </div>
                        {agreementError && <p className='text-xs text-[#B83232]'>{agreementError}</p>}
                    </div>

                    <button disabled={isLoading} type="submit" className={`w-full bg-[#5732BF] rounded-sm p-3 text-[#FFFFFF] font-semibold text-sm leading-[150%]`}>{isLoading ? <Loader className='spinner inline' /> : "Create a new account"}</button>
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

                <p className="text-sm mt-3 text-center">Already have an account? <Link className='text-[#5732BF] font-semibold' to="/login">Login</Link></p>
            </div>
        </div>
    </main>
  )
}

export default Register