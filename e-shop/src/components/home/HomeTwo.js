

const HomeTwo = () => {
    return (
        <section className="h-screen md:flex-row flex mt-16 smphone:px-8 smphone:flex-col  phone:flex-col phone:justify-center font-serif items-center md:justify-evenly">
            <div className="p-5 bg-[#007bff0f] border border-gray-700  rounded">
                <img className="rounded w-full h-72" alt="hf" src="/paul-gaudriault-a-QH9MAAVNI-unsplash (1).jpg" />
               <div className="flex px-2 justify-between">
                 <div>
                    <span className="text-xs text-gray-400">Trending Now</span><br />
                    <span>Price:$199.99</span>
                </div>
                <div>
                   <span className="text-xs text-gray-400">Rating (344, Reviews)</span><br />
                    <span className="text-yellow-500"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></span>
                </div>
               </div>
            </div>
            <div className="md:w-1/3 phone:w-full smphone:w-full smphone:mt-20 phone:mt-20">
                <h1 className="text-3xl font-serif font-semibold">Get Exclusive and trending shoes from our shope place your order now</h1>
                <p className="text-gray-400">We Collect shoes from the best componies all over the world and distribute it anywhere in the world. <span>Place your order now</span> </p>
                <button className="px-3 py-2 mt-4 mr-4 text-sm text-black hover:bg-transparent border-[#FFC402] border hover:hover:text-white rounded bg-[#FFC402]">Buy Now</button>
                <button className="px-3 py-2 mt-4 text-sm rounded hover:bg-[#FFC402] hover:text-black  border border-[#FFC402]">Veiw Details</button>
            </div>
        </section>
    );
}

export default HomeTwo;