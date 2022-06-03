import React from 'react'
import { CartState } from '../context/context'

function Product() {

  const { state: { products, cart }, dispatch } = CartState();
  // const [counter, setCounter] = useState(1);
  // const increase = () => setCounter(count => count + 1);
  // const decrease = () => setCounter(count => count - 1);


  return (
    <div className='flex flex-wrap justify-evenly '>
      {
        products.map((prod) => (
          <div key={prod.id} className="p-5 md:w-auto phone:w-96 bg-[#007bff0f] mb-5 border border-gray-700  rounded">
            <img className="rounded w-96" src={prod.image} alt={prod.title} />
            <div className="py-2">
              <b className='text-lg'>{prod.name}</b>
            </div>
            <div className="flex px-2 justify-between">
              <div>
                <span className="text-xs text-gray-400">Trending Now</span><br />
                <span>Price:${prod.price}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400">Rating ({prod.count}, Reviews)</span><br />
                <span className="text-yellow-500">{[...Array(prod.rating)].map(() => (<span>&#9733;</span>))}</span>

              </div>
            </div>
            {
              cart.some((c) => c.id === prod.id) ?
                (
                  <>
                    <button onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }}
                      className='my-3 py-2 px-9 bg-red-500 hover:bg-orange-500 rounded-sm w-full'>REMOVE FROM CART</button>
                  </>
                ) :
                (
                  <>
                    <button onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: prod,
                      })
                    }}
                      className='my-3  py-2 px-9 border rounded-sm w-full'>ADD TO CART</button>
                  </>
                )
            }

          </div>
        ))
      }
    </div>
  )
}

export default Product;