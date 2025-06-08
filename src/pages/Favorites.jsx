import product1 from "../assets/imgs/product1.jpg";
import Footer from "../component/Footer";

//icons
import { IoIosStar } from "react-icons/io";

export default function Favorites() {
  return (
    <>
      <div className="py-[88px]">
        <div className="container">
          <h1 className="text-4xl font-bold my-5">My Favorites</h1>
          <div className="wrapper grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6">
            <div className="card   shadow-md shadow-black/10 rounded-xl overflow-hidden">
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
            <div className="card   shadow-md shadow-black/10 rounded-xl overflow-hidden">
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
            <div className="card   shadow-md shadow-black/10 rounded-xl overflow-hidden">
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
            <div className="card   shadow-md shadow-black/10 rounded-xl overflow-hidden">
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
            <div className="card   shadow-md shadow-black/10 rounded-xl overflow-hidden">
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
            <div className="card   shadow-md shadow-black/10 rounded-xl overflow-hidden">
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
            <div className="card   shadow-md shadow-black/10 rounded-xl overflow-hidden">
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
