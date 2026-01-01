import { useState } from 'react'

interface Props {
    displayModal: boolean
    setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>
}

function ForgotPasswordModal({displayModal, setDisplayModal}: Props) {
    const [useEmail, setUseEmail] = useState(true)
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

                <form action="">
                    <div className="mb-9">
                        <label htmlFor="" className="text-xs inline-block mb-3 ">Email</label>

                        <input type="email" name="" placeholder='e.g. email@example.com' id="" className='w-full h-11.25 border border-[#E1E3ED] rounded-sm placeholder-[#BAC2C7] text-sm p-3' />
                    </div>

                    <button className="bg-[#5732BF] w-full h-11.25 rounded-sm text-[#FFFFFF] text-sm font-semibold block mb-5">Send reset link</button>

                    <p role='button' className="w-fit m-auto text-sm cursor-pointer font-semibold text-[#1D62CA]" onClick={() => {
                        setUseEmail(false)
                    }}>Use mobile instead</p>
                </form>

                :

                <form action="">
                    <div className="mb-9">
                        <label htmlFor="" className="text-xs inline-block mb-3 ">Mobile number</label>

                        <div className="flex border rounded-sm p-3 h-11.25 border-[#E1E3ED] text-[#000000] text-sm">
                            <select name="" id="" className="w-28 leading-[150%]">
                                <option value="">+962</option>
                            </select>
                            <input type="text" placeholder='7X-XXXXXXX' name="" id="" className='placeholder-[#BAC2C7] outline-none' />
                        </div>
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