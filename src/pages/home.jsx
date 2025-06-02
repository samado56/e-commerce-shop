export default function Home() {
  return (
    <>
      <div className="home flex items-center justify-center bg-center h-[100vh] w-[100vw] ">
        <div className="banner w-fit text-center mt-[84px] md:mt-[61px]  ">
          <img src="b" alt="" />
          <div className="text">
            <h1 className="font-bold text-4xl md:text-7xl text-white mb-5">
              Elecate Your Style
            </h1>
            <p className=" text-lg md:text-3xl text-white font-light">
              Discover the latest trends and timeless classics in fashion and
              home decor.
            </p>
            <div className="btn mt-10">
              <button className="bg-black text-white text-lg md:text-2xl shadow-sm shadow-black font-medium px-6 py-4 rounded-lg mr-8 border-none cursor-pointer">
                Shop Now
              </button>
              <button className="bg-white text-black text-lg md:text-2xl shadow-sm shadow-black font-medium px-6 py-4 rounded-lg border-none cursor-pointer">
                New Arrivals
              </button>
            </div>
          </div>
        </div>
        {/* <div className="container"></div> */}
      </div>
    </>
  );
}
