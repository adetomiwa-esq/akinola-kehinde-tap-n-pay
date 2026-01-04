import {} from 'react'
import { Link } from 'react-router-dom';
import left from "../../assets/images/left.svg"
import pp from "../../assets/images/profile-p1.png"
import name from "../../assets/images/name-icon.svg"
import mobile from "../../assets/images/mobile-icon.svg"
import email from "../../assets/images/email-icon.svg"
import key from "../../assets/images/key-icon.svg"
import right from "../../assets/images/right.svg"
import shield from "../../assets/images/shield-check-fill.svg"

function ProfileSettings() {
  return (
    <main className="text-[#191919] leading-[150%] tracking-[0%] pt-7">
        <div className="flex items-center px-4 mb-10">
            <Link to="/" className='text-[#1D62CA] font-semibold text-sm flex items-center gap-1'>
                <img src={left} alt="icon" />
                Back
            </Link>

            <h3 className="font-semibold m-auto">Profile Settings</h3>
        </div>

        <div className="flex flex-col items-center gap-1 mb-10">
            <div className="border-2 border-[#4FBCA8] w-26 h-26 rounded-full relative flex items-center justify-center">
                <img src={pp} alt="profile-p" className='w-24 h-24 rounded-full' />
                <img src={shield} alt="shield-icon" className='absolute right-1 bottom-0' />
            </div>
            <h4 className="text-sm font-semibold">Abdullah Ghatasheh</h4>
            <p className="text-[#78838D] text-xs">Joined 2 years ago</p>
        </div>

        <div className="px-6">
            <div className="flex justify-between items-center border-b border-[#EDEFF6] py-4">
                <div className="flex items-center gap-3">
                    <img src={name} alt="icon" className="" />
                    <div className="">
                        <h6 className="text-xs">Full name</h6>
                        <p className="text-xs font-semibold">Abdullah Ghatasheh</p>
                    </div>
                </div>

                <p className="text-[#1D62CA] text-xs cursor-pointer">Edit</p>
            </div>

            <div className="flex justify-between items-center border-b border-[#EDEFF6] py-4">
                <div className="flex items-center gap-3">
                    <img src={mobile} alt="icon" className="" />
                    <div className="">
                        <h6 className="text-xs">Mobile</h6>
                        <p className="text-xs font-semibold">+962 79 890 50 14</p>
                    </div>
                </div>

                <p className="text-[#1D62CA] text-xs cursor-pointer">Edit</p>
            </div>

            <div className="flex justify-between items-center border-b border-[#EDEFF6] py-4">
                <div className="flex items-center gap-3">
                    <img src={email} alt="icon" className="" />
                    <div className="">
                        <h6 className="text-xs">Email</h6>
                        <p className="text-xs font-semibold">abdgfx@gmail.com</p>
                    </div>
                </div>

                <p className="text-[#1D62CA] text-xs cursor-pointer">Edit</p>
            </div>

            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-3">
                    <img src={key} alt="icon" className="" />
                    <div className="">
                        <p className="text-xs font-semibold">Change password</p>
                    </div>
                </div>

                <img src={right} alt="icon" />
            </div>
        </div>
    </main>
  )
}

export default ProfileSettings