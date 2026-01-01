import {} from 'react';
import pp from "../../assets/images/profile-p1.png";
import settings from "../../assets/images/settings.svg"
import topUp from "../../assets/images/upload-line.svg"
import withdraw from "../../assets/images/withdraw-line.svg"
import transfer from "../../assets/images/transfer.svg"

function MainBalance() {
  return (
    <section className="bg-[#270685] text-[#FFFFFF] px-4 pt-8 pb-6 leading-[150%] tracking-[0%] ">
        <div className="flex justify-between mb-6 sticky top-0 left-0 bg-[#270685] py-4 z-20">
            <div className="flex items-center gap-2">
                <img src={pp} alt="profile-pic" className='w-12 h-12 rounded-full' />
                <div className="font-semibold text-sm">
                    <p>Hello,</p>
                    <p>Abdullah!</p>
                </div>
            </div>

            <img src={settings} alt="icon" className='w-6 h-6' />
        </div>

        <div className="bg-[linear-gradient(229.57deg,_#5033A4_-0.79%,_rgba(51,16,152,0.65)_73%)] rounded-2xl py-6 px-8">
            <h6 className="text-[#B2A1E4] text-sm text-center mb-3">Main balance</h6>

            <h2 className="font-semibold text-4xl text-center mb-6">$14,235<span className='text-[18px] font-normal'>.34</span></h2>

            <div className="flex">
                <div className="w-1/3 flex flex-col items-center gap-2">
                    <img src={topUp} alt="icon" />
                    <p className="text-xs">Top up</p>
                </div>

                <div className="w-1/3 flex flex-col items-center gap-2 relative">
                    <div className="absolute bg w-px h-6 bg-[#6F45E9] left-0 top-1/2 -translate-y-1/2"></div>
                    <img src={withdraw} alt="icon" />
                    <p className="text-xs">Withdraw</p>
                    <div className="absolute bg w-px h-6 bg-[#6F45E9] right-0 top-1/2 -translate-y-1/2"></div>
                </div>

                <div className="w-1/3 flex flex-col items-center gap-2">
                    <img src={transfer} alt="icon" />
                    <p className="text-xs">Transfer</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainBalance