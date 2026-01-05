import {} from 'react'
import { recentTransfers, transactionHistory } from "../../components/MockData"
import Add from "../../assets/images/Add.svg"
import { Link } from 'react-router-dom'
import right from "../../assets/images/right.svg"

function RecentTransfers() {
    
  return (
    <section className="bg-[#FFFFFF] text-[#191919] leading-[150%] tracking-[0%] pt-7">
        <h4 className="text-sm font-semibold px-4 mb-5">Recent Transfers</h4>

        <div className="flex gap-4 items-center overflow-auto text-center text-xs pl-4 w-full no-scrollbar">
            <div className="cursor-pointer">
                <img src={Add} alt="icon" className='w-16 min-w-16 h-16 block mb-1.5' />
                <p>Add</p>
            </div>

            {
                recentTransfers.map((transfer, i) => (
                    <div className="" key={i}>
                        <img className='w-16 min-w-16 h-16 rounded-full block mb-1.5' src={transfer.img} alt="" />
                        <p>{transfer.name}</p>
                    </div>
                ))
            }
        </div>

        <div className="px-4 pt-5">
            <div className="flex justify-between items-center mb-5">
                <h4 className="text-sm font-semibold">Latest Transactions</h4>

                <Link to="/history" className='text-[#6B6B6B] text-xs'>View all</Link>
            </div>

            <div className="">
                { 
                    Object.values(transactionHistory).flat().slice(0,8).map(transaction => (
                        <Link className='flex mb-3 justify-between border-b last:border-b-0 border-[#EDEFF6] py-2' key={transaction.id} to="/history">
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
                        </Link>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default RecentTransfers