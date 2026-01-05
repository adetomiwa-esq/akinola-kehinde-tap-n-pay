import { useEffect, useState } from 'react'
import logo from "../../../assets/images/logo-purple.svg"
import shield from "../../../assets/images/shield.svg"
import eyeLine from "../../../assets/images/eye-off-line.svg"
import ForgotPasswordModal from './ForgotPasswordModal'
// @ts-expect-error 3rd party package has been installed
import zxcvbn from "zxcvbn"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PasswordSchema } from "../../../validation/auth.schema"
import { z } from "zod"
import { Link, useNavigate } from 'react-router-dom'
import { Eye, Loader } from 'lucide-react';
import left from '../../../assets/images/left.svg'


type PasswordFormData = z.infer<typeof PasswordSchema>

function Password() {

    const navigate = useNavigate()
    const [displayModal, setDisplayModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const phone = sessionStorage.getItem("user")

    // Redirect if step 1 was skipped
    useEffect(() => {
        if (!phone) navigate("/login")
    }, [phone, navigate])

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm<PasswordFormData>({
        resolver: zodResolver(PasswordSchema),
    })

    const password = watch("password", "")
    const strength = zxcvbn(password)

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = () => {

        if(!errors.password){
        setIsLoading(true)

            setTimeout(() => {
                // Go to home page
                navigate("/")
                setIsLoading(false)
            }, 1500)
        }
    }
  return (
    <main className='leading-[150%] tracking-[0%] text-[#191919]'>
        <div className="md:flex md:h-screen md:bg-[#F7F4FF] md:min-h-fit">
            <div className="bg-[#F7F4FF] flex flex-col gap-14 items-center pt-8 h-[50svh] min-h-82.5 md:w-1/2 md:h-full md:overflow-y-auto">
                <div className="w-full flex items-center justify-between px-2">
                    <Link to="/login" className='flex gap-2 text-[#1D62CA] text-sm font-semibold'>
                        <img src={left} alt="icon" />
                        Back
                    </Link>
                    <img src={logo} alt="logo" className="w-39 h-6" />
                    <div className="w-9"></div>
                </div>
                <img src={shield} alt="phone" className="w-[187.69px] h-48.5" />
            </div>

            <div className="bg-[#FFFFFF] p-4 pt-12 h-[50svh] min-h-102.5 md:w-1/2 md:h-full md:px-8 md:pt-12">
                <h1 className="text-[#191919] text-[21px] font-semibold leading-[150%] mb-7">
                    Enter your password
                </h1>

                <form action="" className='mb-5 h-[80%] relative' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-5">
                        <label htmlFor="" className="text-[#191919] text-xs leading-[150%] inline-block mb-2">Password</label>
                        <div className="text-[#000000] relative">
                            <input type={showPassword ? "text" : "password"}
                  {...register("password")} placeholder='Enter your password' className='placeholder-[#BAC2C7] outline-none border rounded-sm p-3 h-11.25 border-[#E1E3ED] w-full text-sm' />

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
                    </div>

                    {/* PASSWORD STRENGTH */}
            {password && (
              <div className="mb-5">
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

                    <div className="w-fit ml-auto text-[#1D62CA] font-semibold text-sm leading-[150%] cursor-pointer" role='button' onClick={() => {
                        setDisplayModal(true)
                    }}>Forgot password?</div>

                    <button type="submit" disabled={isLoading} className="absolute bottom-0 left-0 w-full bg-[#5732BF] rounded-sm p-3 text-[#FFFFFF] font-semibold text-sm leading-[150%] cursor-pointer"> {isLoading ? <Loader className='spinner inline' /> : "Login"}</button>
                </form>
            </div>
        </div>

        <ForgotPasswordModal displayModal={displayModal} setDisplayModal={setDisplayModal} />
    </main>
  )
}

export default Password