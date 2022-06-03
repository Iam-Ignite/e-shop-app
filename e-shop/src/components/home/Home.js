

const HomePage = () => {
    return ( 
        <section className="h-max md:flex-row flex mt-40 smphone:flex-col-reverse smphone:px-8 phone:px-10 md:p-0 items-center justify-evenly">
          <div className="md:w-1/3 2xl:w-1/3 smphone:mt-8  lg:w-1/3 phone:w-full">
            <h1 className=" phone:text-xl smphone:text-lg smphone:font-semibold 2xl:text-6xl lg:text-6xl md:text-6xl font-serif phone:font-normal md:font-semibold">Explore Our Best Collection Of Shoes</h1>
            <p className="text-gray-300 phone:text-xs md:text-lg font-serif">We Collect shoes from the best componies all over the world and distribute it anywhere in the world. <span>Place your order now</span> </p>
            <button className="px-3 py-2 mt-4  mr-4 phone:text-xs md:text-lg font-serif text-black hover:bg-transparent border-[#FFC402] border hover:hover:text-white rounded bg-[#FFC402]">Buy Now</button>
            <button className="px-3 py-2 mt-4 phone:text-xs md:text-lg rounded font-serif hover:bg-[#FFC402] hover:text-black  border border-[#FFC402]">Explore Our Shoe</button>
          </div>
          <div>
           <img className="" src="/Group 5 (2).svg"  alt="jjf" height={450} width={450}/>
          </div>
        </section>
     );
}
 
export default HomePage;