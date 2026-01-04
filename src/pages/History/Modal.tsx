import { } from 'react'
import copy from "../../assets/images/copy.svg"
import flag from "../../assets/images/flag.svg"

interface Props {
    displayModal: boolean
    setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>
    selectedTx: {
      img: string,
      name: string,
      amount: number,
      currency: string,
      date: string,
      time: string,
      type: string
    }
}

function Modal({displayModal, setDisplayModal, selectedTx}: Props) {
  return (
    <div className='text-[#191919] leading-[150%] tracking-[0%]'>
        {displayModal && <div className="bg-[#191919] fixed left-0 top-0 w-full h-svh opacity-70 z-40"></div>}

        <div className={`h-95.25 rounded-se-2xl rounded-ss-2xl w-full bg-[#FFFFFF] fixed left-0 p-5 md:top-1/2 md:left-1/2 md:-translate-1/2 md:w-112.5 md:rounded-2xl ${displayModal ? "bottom-0 transition-all delay-300 duration-300 ease-in-out md:scale-100" : "-bottom-95.25 md:scale-0"} z-40`}>
            <div className="flex justify-between mb-4">
              <div className="flex gap-3 items-center">
                <img src={selectedTx.img} alt="icon" className='w-14 h-14' />
                <div className="">
                  <h5 className="text-base font-semibold">{selectedTx.name}</h5>
                  <p className="text-sm text-[#78838D]">Retailer corporation</p>
                </div>
              </div>

              <p role='button' className="text-sm font-semibold text-[#1D62CA] cursor-pointer" onClick={() => {
                setDisplayModal(false)
              }}>Done</p>
            </div>

            <div className="bg-[#FFF6F6] h-16 flex items-center justify-center mb-4 rounded-lg">
              <div className={`text-[21px] font-semibold ${selectedTx.type.toLowerCase() === "topup" ? "text-[#289B4F]" : "text-[#B83232]"}`}>
                {selectedTx.type.toLowerCase() === "topup" ? "+" :"-"}
                {selectedTx.currency}
                {selectedTx.amount}
              </div>
            </div>

            <div className="border border-[#EDEFF6] rounded-lg py-3 px-4 mb-4">
              <p className="text-xs text-[#78838D] mb-1">{selectedTx.date}</p>
              <p className="font-semibold text-xs text-[#535D66]">December 31, 2026 {selectedTx.time}</p>
            </div>

            <div className="border border-[#EDEFF6] rounded-lg py-3 px-4 flex items-center justify-between mb-4">
              <div className="">
                <p className="text-xs text-[#78838D] mb-1">Transaction no.</p>
                <p className="font-semibold text-xs text-[#535D66]">23010412432431</p>
              </div>

              {
                <img src={copy} alt="icon" />
              }

            </div>

            <p className="text-sm text-[#B83232] font-semibold flex gap-2 justify-center cursor-pointer">
              <img src={flag} alt="icon" />
              <span>Report a problem</span>
            </p>
        </div>
    </div>
  )
}

export default Modal