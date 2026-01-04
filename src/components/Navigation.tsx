import {} from 'react'
import { NavLink } from 'react-router-dom'
import homeActive from "../assets/images/home-active.svg"
import home from "../assets/images/home.svg"
import historyActive from "../assets/images/history-active.svg"
import history from "../assets/images/history.svg"
import cardsActive from "../assets/images/cards-active.svg"
import cards from "../assets/images/cards.svg"
import moreActive from "../assets/images/more-active.svg"
import more from "../assets/images/more.svg"

function Navigation() {
  return (
    <div className='leading-[150%] tracking-[0%]'>
        <aside className="fixed w-full h-15.5 bottom-0 left-0 bg-[#FFFFFF] z-30 text-xs border-t border-[#E1E3ED]">
            <ul className="flex h-full">
                <li className="flex-1 h-full">
                    <NavLink
                        to="/"
                        end
                        className={({isActive}) => `flex items-center justify-center h-full flex-col gap-0.5 ${isActive ? "text-[#6F45E9] border-t-2 border-[#6F45E9]" : "text-[#535D66]"}`}
                    >
                        {({isActive}) => (
                            <>
                                <img src={isActive ? homeActive : home} alt="" />
                                <span>Home</span>
                            </>
                        )

                        }
                    </NavLink>
                </li>
                <li className="flex-1 h-full">
                    <NavLink
                        to="/history"
                        end
                        className={({isActive}) => `h-full flex items-center justify-center flex-col gap-0.5 ${isActive ? "text-[#6F45E9] border-t-2 border-[#6F45E9]" : "text-[#535D66]"}`}
                    >
                        {({isActive}) => (
                            <>
                                <img src={isActive ? historyActive : history} alt="" />
                                <span>History</span>
                            </>
                        )

                        }
                    </NavLink>
                </li>
                <li className="flex-1 h-full">
                    <NavLink
                        to="/cards"
                        end
                        className={({isActive}) => `h-full flex items-center justify-center flex-col gap-0.5 ${isActive ? "text-[#6F45E9] border-t-2 border-[#6F45E9]" : "text-[#535D66]"}`}
                    >
                        {({isActive}) => (
                            <>
                                <img src={isActive ? cardsActive : cards} alt="" />
                                <span>Cards</span>
                            </>
                        )

                        }
                    </NavLink>
                </li>
                <li className="flex-1 h-full">
                    <NavLink
                        to="/more"
                        end
                        className={({isActive}) => `h-full flex items-center justify-center flex-col gap-0.5 ${isActive ? "text-[#6F45E9] border-t-2 border-[#6F45E9]" : "text-[#535D66]"}`}
                    >
                        {({isActive}) => (
                            <>
                                <img src={isActive ? moreActive : more} alt="" />
                                <span>More</span>
                            </>
                        )

                        }
                    </NavLink>
                </li>
            </ul>
        </aside>
    </div>
  )
}

export default Navigation