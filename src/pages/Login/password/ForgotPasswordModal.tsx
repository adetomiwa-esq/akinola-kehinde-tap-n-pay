import { useState } from 'react'
import type z from 'zod';
import { EmailSchema, MobileSchema } from '../../../validation/auth.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import jordan from "../../../assets/images/Jordan.png"
import down from "../../../assets/images/down.svg"

interface Props {
    displayModal: boolean
    setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type ResetMethod =
  | { type: "email"; data: string }
  | { type: "phone"; data: string }

type MobileFormData = z.infer<typeof MobileSchema>
type EmailFormData = z.infer<typeof EmailSchema>



function ForgotPasswordModal({displayModal, setDisplayModal}: Props) {

    const navigate = useNavigate()
    const [useEmail, setUseEmail] = useState(true)

    // const [userData, setUserData] = useState("")



    // email validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EmailFormData>({
        resolver: zodResolver(EmailSchema),
    })

    // mobile validation
    const {
        register: registerPhone,
        handleSubmit: handlePhoneSubmit,
        formState: { errors: phoneErrors },
    } = useForm<MobileFormData>({
        resolver: zodResolver(MobileSchema),
    })


    // email reset method selected
    const onEmailSubmit = (data: EmailFormData) => {
        setResetMethod("email", data.email)
    }


    // phone number reset method selected
    const onPhoneSubmit = (data: MobileFormData) => {
        setResetMethod("phone", data.phone)
    }

// function to determine reset password method
    const setResetMethod = (method: "email" | "phone", userData: string) => {
        const payload: ResetMethod = {
            type: method,
            data: userData,
        }

        sessionStorage.setItem("reset", JSON.stringify(payload))

        navigate("/login/otp")
        console.log(userData);
        

    }


  return (
    <div className='text-[#191919] leading-[150%] tracking-[0%]'>
        {displayModal && <div className="bg-[#191919] fixed left-0 top-0 w-full h-svh opacity-70"></div>}

        <div className={`h-77.25 rounded-se-2xl rounded-ss-2xl w-full bg-[#FFFFFF] fixed left-0 p-5 md:top-1/2 md:left-1/2 md:-translate-1/2 md:w-112.5 md:rounded-2xl ${displayModal ? "bottom-0 transition-all delay-300 duration-300 ease-in-out md:scale-100" : "-bottom-77.25 md:scale-0"}`}>
            <div className="flex items-center justify-between mb-6">
                <h5 className="font-semibold text-base leading-[150%]">Forgot your password?</h5>

                <p role='button' className="text-[#1D62CA] font-semibold cursor-pointer text-sm leading-[150%]" onClick={() => {
                        setDisplayModal(false)
                    }}>Done</p>
            </div>

            { 
                useEmail ?

                <form action="" onSubmit={handleSubmit(onEmailSubmit)}
                >
                    <div className="mb-9">
                        <div className="">
                            <label htmlFor="" className="text-xs inline-block mb-3 ">Email</label>

                            <input type="email" {...register("email")} placeholder='e.g. email@example.com' id="" className='w-full h-11.25 border border-[#E1E3ED] rounded-sm placeholder-[#BAC2C7] text-base p-3 outline-none' />
                        </div>
                        {errors.email && (
                            <p className="text-[#B83232] text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <button className="bg-[#5732BF] w-full h-11.25 rounded-sm text-[#FFFFFF] text-sm font-semibold block mb-5">Send reset link</button>

                    <p role='button' className="w-fit m-auto text-sm cursor-pointer font-semibold text-[#1D62CA]" onClick={() => {
                        setUseEmail(false)
                    }}>Use mobile instead</p>
                </form>

                :

                <form action="" onSubmit={handlePhoneSubmit(onPhoneSubmit)}>
                    <div className='mb-9'>
                        <div className="">
                            <label htmlFor="" className="text-xs inline-block mb-3 ">Mobile number</label>

                            <div className="flex border rounded-sm p-3 h-11.25 border-[#E1E3ED] text-[#000000] text-sm">
                                <div className="flex w-28 gap-2 items-center">
                                    <img src={jordan} alt="icon" className='w-7 h-5.25' />
                                    <span>+962</span>
                                    <img src={down} alt="icon" className='w-[8.49px] h-[5.66px]' />
                                </div>
                                <input type="text" placeholder='7X-XXXXXXX' {...registerPhone("phone")}  id="" className='placeholder-[#BAC2C7] outline-none text-base' />
                            </div>
                        </div>

                        {phoneErrors.phone && (
                            <p className="text-[#B83232] text-xs mt-1">
                                {phoneErrors.phone.message}
                            </p>
                        )}

                    </div>

                    <button className="bg-[#5732BF] w-full h-11.25 rounded-sm text-[#FFFFFF] text-sm font-semibold block mb-5">Send reset link</button>

                    <p role='button' className="w-fit m-auto text-sm cursor-pointer font-semibold text-[#1D62CA]" onClick={() => {
                        setUseEmail(true)
                    }}>Use email instead</p>
                </form>
            }
        </div>
    </div>
  )
}

export default ForgotPasswordModal