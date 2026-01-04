import {} from 'react'
import paybills from "../../assets/images/pay-bills.svg"
import transfer from "../../assets/images/transfer-more.svg"
import topup from "../../assets/images/topup.svg"
import withdraw from "../../assets/images/withdraw.svg"
import analytics from "../../assets/images/analytics.svg"
import { Link } from 'react-router-dom'
import right from "../../assets/images/right.svg"
import help from "../../assets/images/help.svg"
import contact from "../../assets/images/contact.svg"
import about from "../../assets/images/about.svg"

function More() {

    const linksArray1 = [
        {img: paybills, text: "Pay bills", link: ""},
        {img: transfer, text: "Transfer", link: ""},
        {img: topup, text: "Topup", link: ""},
        {img: withdraw, text: "Withdraw", link: ""},
        {img: analytics, text: "Analytics", link: ""},
    ]

    const linksArray2 = [
        {img: help, text: "Help", link: ""},
        {img: contact, text: "Contact us", link: ""},
        {img: about, text: "About", link: ""},
    ]
  return (
    <main className='text-[#191919] leading-[150%] tracking-[0%] pt-7'>
        <h1 className="text-2xl font-semibold mb-6 px-4">More</h1>

        <ul className="border-b-6 border-[#EDEFF6] pb-4 px-4">
            {
                linksArray1.map((link, i) => (
                    <li className='last:border-b-0 border-b border-[#EDEFF6]' key={i}>
                        <Link to={link.link} className='flex gap-2 items-center py-3'>
                            <img src={link.img} alt="icon" className="w-8 h-8" />
                            <p className="font-semibold text-xs">{link.text}</p>

                            <img src={right} alt="icon" className="ml-auto" />
                        </Link>
                    </li>
                ))
            }
        </ul>

        <ul className="pt-4 px-4">
            {
                linksArray2.map((link, i) => (
                    <li className='last:border-b-0 border-b border-[#EDEFF6]' key={i}>
                        <Link to={link.link} className='flex gap-2 items-center py-3 '>
                            <img src={link.img} alt="icon" className="w-8 h-8" />
                            <p className="font-semibold text-xs">{link.text}</p>

                            <img src={right} alt="icon" className="ml-auto" />
                        </Link>
                    </li>
                ))
            }
        </ul>
    </main>
  )
}

export default More