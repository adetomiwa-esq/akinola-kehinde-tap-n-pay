import { useEffect, useState } from "react"
import check from "../../../assets/images/check.svg"
import { Loader } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import left from "../../../assets/images/left.svg"
import logo from "../../../assets/images/logo-purple.svg"
import { useCountdown } from "./UseCountDown"
import deleteLine from "../../../assets/images/delete-back-2-line.svg"
import type { ResetMethod } from "../password/ForgotPasswordModal"

const OTP_LENGTH = 6

export default function Otp() {
    const navigate = useNavigate()
  const [otp, setOtp] = useState("")

  const handleNumberClick = (num: string) => {
    if (otp.length >= OTP_LENGTH) return
    setOtp((prev) => prev + num)
  }

  const handleBackspace = () => {
    setOtp((prev) => prev.slice(0, -1))
  }

  const formattedOtp = otp
    .padEnd(OTP_LENGTH, " ")
    .replace(/(.{3})/, "$1-")


    const [verifying, setVerifying] = useState(false)
    const [success, setSuccess] = useState(false)


    const verifyCode = () => {
        if(otp.length === 6){
            setVerifying(true)

            setTimeout(() => {
                setVerifying(false)
                setSuccess(true)
            }, 1500)

            setTimeout(() => {
                navigate('/login/password')
            }, 2300)
        }
    }

    const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60

  return `${m}:${s.toString().padStart(2, "0")}`
}

const { secondsLeft, reset } = useCountdown(90)

const stored = sessionStorage.getItem("reset")


const resetMethod: ResetMethod | null = stored
  ? JSON.parse(stored)
  : null

  useEffect(() => {
    if(!resetMethod){
        navigate("/login/password")
    }
  }, [])

  console.log(resetMethod);
  



  return (
    <main className=" mx-auto pt-9 min-h-svh flex flex-col justify-between bg-[#FFFFFF] leading-[150%] md: tracking-[0%]">
      <div className="text-center mb-14">
        <div className="w-full flex items-center justify-between px-2 mb-10">
            <Link to="/login/password" className='flex gap-2 text-[#1D62CA] text-sm font-semibold'>
                <img src={left} alt="icon" />
                Back
            </Link>
            <img src={logo} alt="logo" className="w-39 h-6" />
            <div className="w-9"></div>
        </div>
        <h4 className="text-sm font-semibold mb-8">{resetMethod?.type === "email" ? "A code was sent to your email address" : "An SMS sent to your mobile number"} <br /> <span>xxxxx{resetMethod?.data.slice(5)}</span></h4>
        <p className="text-xs text-[#78838D] mb-6">
          Enter six-digit code
        </p>

        <div className="w-fit mx-auto relative">
            <input
                value={otp.length ? formattedOtp : ""}
                placeholder="XXX-XXX"
                readOnly
                className={`text-4xl text-center w-49.25 border-b-2 outline-none py-2 bg-transparent ${otp.length === 0 ? "text-[#BAC2C7]" : "text-[#191919] "} ${success ? "border-[#4DA66B]" : "border-[#5732BF]"}`}
            />
            {
                success && <img src={check} alt="icon" className="w-[26.67] h-[26.67] absolute -right-3 top-1/2 -translate-y-1/2" />
            }
        </div>

        <div className="text-center mt-8 text-sm text-[#78838D]">
            {secondsLeft > 0 ? (
            <>
                Resend code{" "}
            <span className="font-semibold text-[#000000]">
                0{formatTime(secondsLeft)}
                </span>
            </>
            ) : (
            <div className="">
                <button
                    onClick={reset}
                    className="font-semibold text-[#1D62CA] hover:underline"
                >
                    Resend code
                </button>
                <span className=""> 00:00</span>
            </div>
            )}
        </div>
        {/* {!secondsLeft && <p className="text-xs text-[#B83232]">Code expired reset code</p>} */}
      </div>

      
    <div className="shadow-[0px_-6px_24px_0px_#00000014] px-4 pt-7 pb-8 h-100 md:w-[600px] md:mx-auto">
        <div className="w-full grid grid-cols-3 auto-rows-[66.75px] gap-x-6 text-center ">
            {[1,2,3,4,5,6,7,8,9].map((num) => (
            <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                disabled={secondsLeft == 0}
                className="text-[21px] font-semibold py-4 rounded-md active:bg-gray-200"
            >
                {num}
            </button>
            ))}

            <div />

            <button
            onClick={() => handleNumberClick("0")}
            className="text-xl font-semibold py-4 rounded-md active:bg-gray-200" disabled={secondsLeft == 0}
            >
            0
            </button>

            <button
            onClick={handleBackspace}
            className="text-xl font-semibold py-4 rounded-md active:bg-gray-200 flex items-center justify-center"
            >
                <img src={deleteLine} alt="icon" />
            </button>
        </div>
        <button
            disabled={otp.length < OTP_LENGTH || verifying || secondsLeft == 0}
            className={`text-sm w-full h-11.25 cursor-pointer rounded-sm font-semibold text-[#FFFFFF] bg-[#5732BF] mt-3`}
            onClick={() => verifyCode()}
        >
            {verifying ? <Loader className='spinner inline' /> : "Done"}
        </button>
    </div>
      
    </main>
  )
}
