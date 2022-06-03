import { useState, useEffect } from "react";
import { CartState } from "../context/context";
import Main from "../main/Main"
import Checkout from "../home/Checkout.js/Checkout";
import  "./navbar.css";

const NavBar = () => {
    const [navIcon, setNavIcon] = useState(false)
    const [page, setPage] = useState(false)
    const [total, setTotal] = useState(0)
    const { state: { cart }, dispatch } = CartState();


    useEffect(() => {
        setTotal((cart.reduce((acc, curr) => acc + Number(curr.price), 0)));
    }, [cart])





    return (
        <div>
            <header className="fixed w-full px-6 top-0 bg-[#00041D]">
                <nav className="flex center font-serif items-center px-5 mt-3  justify-between">
                    <div className="flex-none ">
                        <img onClick={() => setPage(false)} src="/Group 6 (1).svg" height={40} width={50} alt="bnvn" />
                    </div>
                    <div>
                        <ul onClick={() => setPage(false)} className="flex w-96 font-serif p-3 lg:flex smphone:hidden phone:hidden xl:flex justify-between ">
                            <li>Explore</li>
                            <li>Martet</li>
                            <li>Features</li>
                            <li>Community</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <div className="md:relative phone:static">
                            <span onClick={() => setNavIcon(!false)} className="absolute phone:bottom-7 md:right-0 md:bottom-4  cursor-pointer phone:right-48 text-xs px-1.5 pb-1 text-white  bg-red-500 z-50 rounded-full">{cart.length}</span>
                            <img src="/Vector (1).svg" className="cursor-pointer" onClick={() => setNavIcon(!false)} height={22} width={24} alt="hgc" />
                            {
                                navIcon ? (
                                    <div style={{}} className="w-96 h-96 p-4 z-50  overflow-hidden rl overflow-y-auto phone:left-10 phone:top-10 rounded-sm snap-mandatory scroll-smooth hover:scroll-auto  snap-y absolute border border-[#9c8e8e6d] bg-[#00041d98]">
                                        <div className="relative w-11/12">
                                            <span onClick={() => setNavIcon(false)} className="fixed cursor-pointer phone:right-16 right-56 md:top-20 phone:top-14">&#10005;</span></div>
                                        {
                                            cart.length < 1 ? (<p className="text-center my-4"> Cart Is Expty</p>) : (
                                                <>
                                                    {
                                                        cart.map((item) => (
                                                            <div key={item.id} className="flex  border-b snap-center  py-3 border-[#504d4dc6] items-center justify-between">
                                                                <img src={item.image} className="rounded-lg" height={30} width={30} alt="gvhg" />
                                                                <span className="mx-5">
                                                                    <small className="">{item.name}</small>
                                                                    <p>${item.price}</p>
                                                                </span>
                                                                <img src="/Vector (2).svg" onClick={() => {
                                                                    dispatch({
                                                                        type: "REMOVE_FROM_CART",
                                                                        payload: item,
                                                                    })
                                                                }}
                                                                    className='cursor-pointer' alt="ghg" />
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }

                                        <button onClick={() => setPage(!false)} className="px-3 py-1 text-sm text-[#010C2A] w-full font-semibold hover:bg-transparent border-[#FFC402] border hover:hover:text-white rounded bg-[#FFC402]" >CHECKOUT (${total})</button>
                                    </div>
                                ) : (
                                    ""
                                )
                            }
                        </div>
                        <ul className="flex">
                            <li className="mx-3"><button className="px-3 py-1  text-sm hover:bg-[#FFC402] hover:text-black rounded border border-[#FFC402]">Login</button> </li>
                            <li><button className="px-3 py-1 text-sm text-black hover:bg-transparent border-[#FFC402] border hover:hover:text-white rounded bg-[#FFC402]">sign up</button></li>
                        </ul>
                    </div>
                </nav>
            </header>
            {
                page ? (<>
                    <Checkout />
                </>
                ) : (<Main />)

            }
        </div>


    );
}

export default NavBar;