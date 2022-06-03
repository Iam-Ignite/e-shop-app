import React, { useState, useEffect } from 'react'
import { CartState } from '../../context/context';

function Checkout() {

    const [total, setTotal] = useState(0)
    const { state: { cart }, dispatch } = CartState();

    useEffect(() => {

        setTotal((cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)));

    }, [cart])




    return (
        <div className="p-4 flex md:flex-row phone:flex-col justify-between md:px-10 z-10 phone:relative md:fixed right-0 left-10  w-11/12 overflow-y-scroll   rounded  overflow-hidden s mt-20 snap-mandatory  scroll-smooth hover:scroll-auto  snap-y]">
            <div className='bg-[#ffffff0c] overflow-y-auto phone:h-auto md:h-screen phone:w-auto  md:w-4/5 p-10 rounded-sm'>
                {
                    cart.length < 1 ? (<span> Cart Is Expty</span>) : (
                        <>
                            {
                                cart.map((item) => (
                                    <div key={item.id} className="flex phone:mb-12  snap-center  py-3 border-[#1f46bbc6] items-center justify-between">
                                        <div className='flex '>
                                            <div>
                                                <img src={item.image} className="rounded-lg mb-4" alt='hfh' height={80} width={120} />
                                                <span className='cursor-pointer border  phone:text-xs md:text-xs p-2 border-gray-500 rounded flex text-[#4a5dd9d2] shadow' onClick={() => { dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: item,
                                                    })
                                                }}><img src="/Vector (2).svg" height={12} width={12} alt="hfhf" className='mr-2 cursor-pointer' />REMOVE FROM CART</span>
                                            </div>
                                            <div>
                                                <small className="">Product ID: {item.id}</small><br />
                                                <small className="">{item.name}</small><br />
                                                <small className="">Size: {item.size}</small>


                                            </div>
                                        </div>
                                        <span className="mx-5">
                                            <p>${item.price}</p>
                                            <select onChange={(e) => {
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: item.id,
                                                        qty: e.target.value
                                                    }
                                                })
                                            }}
                                                className='bg-transparent border-0 outline-none ' value={item.qty}>
                                                {[...Array(20).keys()].map((x) => (
                                                    <option key={x + 1}>{x + 1}</option>
                                                ))}
                                            </select>

                                        </span>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </div>
            <div className='md:w-96 phone:mt-8 phone:w-auto bg-[#ffffff0c] h-96 mx-5 px-7 '>
            <div className='flex justify-center flex-col'>
                <h1 className='underline mt-10'>CART SUMMARY</h1>
                <div className="my-3">
                    <h3 className='my-3'>Sum Toatal <span className='ml-20'>${total}</span></h3>
                    <p className='text-sm text-gray-400'>Delivery fees not included yet.</p>
                </div>
                <button className="px-3 py-1 z-10 text-sm text-[#010C2A] w-full font-semibold hover:bg-transparent border-[#FFC402] border hover:hover:text-white rounded bg-[#FFC402]" >CHECKOUT (${total})</button>
            </div>
                <div className='mt-3'>
                    <h3>Returns are easy</h3>
                    <p className='text-sm text-gray-400'>Free return within 15 days for Official Store items and 7 days for other eligible items See more</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout