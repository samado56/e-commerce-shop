//icons
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

import { SideBarContext } from "../context/sideBarContext";
import { useContext, useEffect, useState } from "react";
import useResponsive from "../hooks/useResponsive";

//components
import AdminHeader from "../component/AdminHeader";
import Label from "../component/Label";
//modals
import AddProductModal from "../models/AddProductModal";
import EditProductModal from "../models/EditProductModal";
import DeleteProductModal from "../models/DeleteProductModal";

import prod from "../assets/imgs/product7.jpg";
import sectionsPadding from "../styles/sectionsPadding";
import { ProductContext } from "../context/productContext";
import { SuccessBar, InfoBar, AlertBar, ErrorBar } from "../snackBars/Success";

export default function StoreProducts() {
  const { shrinkSideBar } = useContext(SideBarContext);
  const [activePage, setActivePage] = useState(1);
  const [showAddProductModal, setShowAddProdutModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);

  const { width } = useResponsive();
  let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const isSmallScreen = width < 768;

  const {
    products,
    deleteProduct,
    fetchProducts,
    snackBarMessage,
    statusCode,
  } = useContext(ProductContext);

  const [productID, setProductID] = useState("");
  const [productInfo, setProductInfo] = useState({});
  console.log(productInfo);

  const handleDeleteProduct = async () => {
    await deleteProduct(productID);
    setShowDeleteProductModal(false);
    fetchProducts();
    setShowSnackBar(true);
  };

  const [showSnackBar, setShowSnackBar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSnackBar(false), 3000);
    return () => clearTimeout(timer);
  }, [showSnackBar]);

  return (
    <>
      <div className="   bg-gray-400/5 min-h-[100vh]">
        <AdminHeader />
        <div
          className="pr-3 md:pr-6 "
          style={sectionsPadding({ shrinkSideBar, isSmallScreen })}
        >
          <div className="my-5 md:my-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Products</h2>

            <button
              onClick={() => setShowAddProdutModal(true)}
              className="rounded-md bg-black text-white  py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer"
            >
              <span>
                <IoMdAdd size={20} />
              </span>
              {!isSmallScreen ? "Add Product" : null}
            </button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 text-center md:text-start mb-5">
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Total Products</p>
              <h1 className="text-4xl font-bold mb-1">{products.length}</h1>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Products in Stock
              </p>
              <h1 className="text-4xl font-bold mb-1">95</h1>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Products Out of Stock
              </p>
              <h1 className="text-4xl font-bold mb-1">25</h1>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-2  px-2 md:px-3 bg-white shadow-sm shadow-black/10 rounded-md py-4 w-full">
            <div className="relative w-[calc(100%-44px)] md:w-auto ">
              <input
                type="search"
                placeholder="Search  by name or SKU "
                className=" py-1 md:py-2 px-8 border-2 border-gray-400/20 rounded-md w-[calc(100%-10px)] md:w-[400px] bg-white  "
              />
              <IoIosSearch
                size={20}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-600"
              />
            </div>

            <div className="w-full md:flex-1 order-5 md:order-1 flex gap-2 md:block md:gap-0">
              <select className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit  bg-white">
                <option value="shipped">Category</option>
                <option value="shipped">Shipped</option>
                <option value="deliverd">Deliverd</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <select className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit md:ml-2 bg-white">
                <option value="shipped">Stock Status</option>
                <option value="shipped">Shipped</option>
                <option value="deliverd">Deliverd</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <button className="rounded-md bg-black text-white py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer  order-2 md:order-4">
              <span>
                <MdFileDownload size={20} />
              </span>

              {isSmallScreen ? null : "Export"}
            </button>
          </div>

          <div className="p-4 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
            <table className="w-[1200px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
              <thead className="bg-gray-400/10 font-medium text-gray-600 text-center">
                <tr>
                  <td className=" py-2 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-4">IMAGE</td>
                  <td className="py-2 px-4">PRODUCT NAME</td>
                  <td className="py-2 px-4">SKU</td>
                  <td className="py-2 px-4">PRICE</td>
                  <td className="py-2 px-4">STOCK QTY</td>
                  <td className="py-2 px-4">STATUS</td>
                  <td className="py-2 px-4">VISIBILITY</td>
                  <td className="py-2 px-4">Actions</td>
                </tr>
              </thead>

              <tbody className="text-center">
                {/* ============ start hardCode ================== */}
                <tr className="border-b-1 border-gray-400/20">
                  <td className="  py-2 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    <img src={prod} className="w-[40px] rounded-md mx-auto" />
                  </td>
                  <td className="py-4 px-4 row-text ">Eco-Friendly Bamboo</td>
                  <td className="py-4 px-4 row-text ">Personal Care</td>
                  <td className="py-4 px-4 row-text ">564</td>
                  <td className="py-4 px-4 row-text ">$125.00</td>
                  <td className="py-4 px-4">
                    <Label label="Shipped" className="label-cyan" />
                  </td>
                  <td className="py-4 px-4">
                    <Label label="Published" className="label-blue" />
                  </td>
                  <td className="py-6 px-4 text-lg text-gray-600 font-medium flex items-center gap-4 my-auto ">
                    <MdContentCopy size={20} />
                    <MdOutlineEdit
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowEditProductModal(true)}
                    />
                    <AiOutlineDelete
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowDeleteProductModal(true)}
                    />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className=" py-2 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    <img src={prod} className="w-[40px] rounded-md mx-auto" />
                  </td>
                  <td className="py-4 px-4 row-text ">Eco-Friendly Bamboo</td>
                  <td className="py-4 px-4 row-text ">Home Goods</td>
                  <td className="py-4 px-4 row-text">740</td>
                  <td className="py-4 px-4 row-text">$523.00</td>
                  <td className="py-4 px-4">
                    <Label label="Canceled" className="label-red" />
                  </td>

                  <td className="py-4 px-4">
                    <Label label="Published" className="label-blue" />
                  </td>

                  <td className="py-6 px-4 text-lg text-gray-600 font-medium flex items-center gap-4 my-auto ">
                    <MdContentCopy size={20} />
                    <MdOutlineEdit
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowEditProductModal(true)}
                    />
                    <AiOutlineDelete
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowDeleteProductModal(true)}
                    />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className=" py-2 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    <img src={prod} className="w-[40px] rounded-md mx-auto" />
                  </td>
                  <td className="py-4 px-4 row-text ">Eco-Friendly Bamboo</td>
                  <td className="py-4 px-4 row-text">Apparel</td>
                  <td className="py-4 px-4 row-text ">854</td>
                  <td className="py-4 px-4 row-text">$64.00</td>
                  <td className="py-4 px-4">
                    <Label label="Delivered" className="label-green" />
                  </td>

                  <td className="py-4 px-4">
                    <Label label="Draft" className="label-gray" />
                  </td>
                  <td className="py-6 px-4 text-lg text-gray-600 font-medium flex items-center gap-4 my-auto ">
                    <MdContentCopy size={20} />
                    <MdOutlineEdit
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowEditProductModal(true)}
                    />
                    <AiOutlineDelete
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowDeleteProductModal(true)}
                    />
                  </td>
                </tr>
                {/* ============ end hardCode ================== */}
                <>
                  {products && products.length ? (
                    products.map((product) => {
                      const { _id, title, thumbnail, price } = product;
                      return (
                        <tr key={_id} className="border-b-1 border-gray-400/20">
                          <td className=" py-2 px-4">
                            <input type="checkbox" />
                          </td>
                          <td className="py-4 px-4 text-gray-400">
                            <img
                              src={`data:image/webp;base64,${thumbnail}`}
                              className="w-[40px] rounded-md mx-auto"
                            />
                          </td>
                          <td className="py-4 px-4 row-text ">{title}</td>
                          <td className="py-4 px-4 row-text">Apparel</td>
                          <td className="py-4 px-4 row-text ">854</td>
                          <td className="py-4 px-4 row-text">${price}</td>
                          <td className="py-4 px-4">
                            <Label label="Delivered" className="label-green" />
                          </td>

                          <td className="py-4 px-4">
                            <Label label="Draft" className="label-gray" />
                          </td>
                          <td className="py-6 px-4 text-lg text-gray-600 font-medium flex items-center gap-4 my-auto ">
                            <MdContentCopy size={20} />
                            <MdOutlineEdit
                              className="cursor-pointer"
                              size={20}
                              onClick={() => {
                                setProductInfo(product);
                                setShowEditProductModal(true);
                              }}
                            />
                            <AiOutlineDelete
                              className="cursor-pointer"
                              size={20}
                              onClick={() => {
                                setProductInfo(product);
                                setProductID(_id);
                                setShowDeleteProductModal(true);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>No products published</td>
                    </tr>
                  )}
                </>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between mt-0 md:mt-4 px-4 border-t-1 border-gray-400/20 bg-white">
            <p className="text-gray-500 font-medium text-center text-sm md:text-lg">
              showing 1 to 5 of 20 results
            </p>
            <div className="pagination ">
              <ul className="flex justify-center items-center gap-1 py-2 text-sm md:text-lg font-[500] text-gray-400">
                <IoIosArrowBack
                  size={20}
                  className="cursor-pointer rounded-full h-[40px] w-[40px]  transisition-all duration-300 hover:bg-gray-400/20"
                  style={{ padding: "10px" }}
                />
                {pagination.map((page) => (
                  <li
                    key={page}
                    className="cursor-pointer rounded-full px-[8px] md:px-[16px] py-[3px] md:py-[6px]"
                    style={{
                      backgroundColor: activePage === page ? "black" : null,
                      color: activePage === page ? " #fff" : null,
                    }}
                    onClick={() => setActivePage(page)}
                  >
                    {page}
                  </li>
                ))}
                <IoIosArrowForward
                  size={20}
                  className="cursor-pointer rounded-full h-[40px] w-[40px]  transisition-all duration-300 hover:bg-gray-400/20"
                  style={{ padding: "10px" }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AddProductModal
        showModal={showAddProductModal}
        closeModal={() => setShowAddProdutModal(false)}
        showSnackBar={() => setShowSnackBar(true)}
      />

      <EditProductModal
        showModal={showEditProductModal}
        closeModal={() => setShowEditProductModal(false)}
        showSnackBar={() => setShowSnackBar(true)}
        productInfo={productInfo}
      />
      <DeleteProductModal
        showModal={showDeleteProductModal}
        closeModal={() => setShowDeleteProductModal(false)}
        deleteProduct={handleDeleteProduct}
        productInfo={productInfo}
      />

      {/* //snack Bars */}

      {statusCode === 201 || statusCode === 200
        ? showSnackBar && <SuccessBar msg={snackBarMessage} />
        : showSnackBar && <ErrorBar msg={snackBarMessage} />}

      {/* {showSnackBar && <SuccessBar msg={snackBarMessage} />}
      {showSnackBar && <ErrorBar msg={snackBarMessage} />} */}
      {/* <InfoBar /> */}
      {/* <AlertBar /> */}
      {/* <ErrorBar /> */}
    </>
  );
}
