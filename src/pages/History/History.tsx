import { useState } from 'react'
import { transactionHistory } from '../../components/MockData'
import right from "../../assets/images/right.svg"
import Modal from './Modal'
import filter from "../../assets/images/filter.svg"
import search from "../../assets/images/search-icon.svg"

function History() {

    const [displayModal, setDisplayModal] = useState(false)

    const [selectedtx, setSelectedTx] = useState({
        img: "/",
        name: "",
        amount: 0,
        currency: "",
        date: "",
        time: "",
        type: ""
    })

    const [searchInput, setSearchInput] = useState("")

    const [transactionType, setTransactionType] = useState("all")

    const filterTransaction = (x: "all" | "received" | "sent") => {
        setTransactionType(x)
    }

    const [displayFilterOptions, setDisplayFilterOptions] = useState(false)
  return (
    <div className='text-[#191919] trackin-[0%] leading-[150%] pt-8'>
        <h1 className="text-2xl font-semibold px-6 mb-4">History</h1>
        <section className=" flex gap-4 px-6 mb-3">
            <div className="relative w-full">
                <input type="text" className='border border-[#E1E3ED] rounded-sm h-9.25 outline-none w-full text-sm pl-8 pr-3 text-[#BAC2C7]' name="" placeholder='Value goes here' id="" onChange={(e) => {
                    setSearchInput(e.target.value)
                }} />
                <img src={search} alt="icon" className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5" />
            </div>
            
            <div className="relative min-w-21.75 w-21.75 h-9.25 flex gap-1.5 border border-[#E1E3ED] items-center justify-center rounded-sm text-sm cursor-pointer" onClick={() => {
                setDisplayFilterOptions(prev => !prev)
            }}>
                <img src={filter} alt="icon" className='w-[16.67px] h-[16.67px]' />
                <span>Filter</span>

                {displayFilterOptions && <div className="absolute top-9.25 w-full text-center border border-[#E1E3ED] bg-[#FFFFFF] text-xs">
                    <div className="border-b border-[#E1E3ED] py-2" onClick={() => {
                        filterTransaction("all")
                    }}>All</div>
                    <div className="border-b border-[#E1E3ED] py-2" onClick={() => {
                        filterTransaction("received")
                    }}>Received</div>
                    <div className="border-b border-[#E1E3ED] py-2" onClick={() => {
                        filterTransaction("sent")
                    }}>Sent</div>
                </div>}
            </div>

        </section>
        <section className=''>
            {
                Object.entries(transactionHistory).map(([sectionName, transactions], i) => (
                    <div className={`px-6 border-[#EDEFF6] last:border-b-0 pt-3 ${(transactionType !== "all") ?  "" : searchInput.length > 0 ? "" : "border-b-[6px]"}`} key={sectionName}>

                        {/* displays the date at the top of each transaction section section */}
                        { searchInput.length > 0 ? "" : transactionType !== "all" ? "" :
                            <div className="mb-2">
                                {i > 1 && <p className='text-[#78838D] text-xs mb-1'>{sectionName}</p>}
                                <p className="text-[#535D66]">{transactions[0].date}</p>
                            </div>
                        }
                        
                        
                        {
                            transactions.filter(y => transactionType === "received" ? y.type === "topup" : transactionType === "sent" ? y.type === "transfer" : y).filter(x => searchInput.length > 0 ? x.receiver.name.toLowerCase().includes(searchInput.toLocaleLowerCase()) : x).map(transaction => (
                                <div className='flex mb-3 justify-between border-b border-[#EDEFF6] pb-3 pt-1 last:border-b-0' key={transaction.id} id={transaction.id} onClick={() => {
                                    setDisplayModal(true)
                                    setSelectedTx({
                                            img: transaction.receiver.img,
                                            name: transaction.receiver.name,
                                            amount: transaction.amount,
                                            currency: transaction.currency,
                                            date: transaction.date,
                                            time: transaction.time,
                                            type: transaction.type
                                        })
                                }}>
                            <div className="flex items-center gap-2">
                                <img src={transaction.receiver.img} alt="" className='w-8 h-8' />
                                <div className="">
                                    <h6 className="font-semibold text-xs">{transaction.receiver.name}</h6>
                                    <p className="text-xs text-[#78838D]">{transaction.date} {transaction.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`text-xs ${transaction.type.toLowerCase() === "topup" ? "text-[#289B4F]" : "text-[#B83232]"}`}>
                                    {transaction.type.toLowerCase() === "topup" ? "+" :"-"}
                                    {transaction.currency}
                                    {transaction.amount}
                                </div>

                                <img src={right} alt="icon" />
                            </div>
                        </div>
                            ))
                        }
                    </div>
                ))
            }
        </section>

        <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} selectedTx={selectedtx} />
    </div>
  )
}

export default History