import { useRef, useEffect, useContext, useState } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { VscPackage } from "react-icons/vsc";
import { CiSaveUp2 } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { ProductContext } from "../context/productContext";

export default function EditProductModal({ closeModal, showModal }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const { oneProduct } = useContext(ProductContext);
  console.log(oneProduct);
  const { title, price, images, thumbnail, stock, description } = oneProduct;

  //product info
  const [productTitle, setTitle] = useState("");
  const [productPrice, setPrice] = useState(0);
  const [productDescription, setDescription] = useState("");
  const [productImages, setImages] = useState([]);
  const [productThumbnail, setThumbnail] = useState([]);
  const [productStock, setStock] = useState(100);

  const formData = new FormData();
  formData.append("title", productTitle);
  formData.append("thumbnail", productThumbnail);
  formData.append("price", productPrice);
  formData.append("description", productDescription);
  formData.append("stock", productStock);

  productImages.forEach((img) => formData.append("images", img));

  const handleFormInputs = (e) => {
    const value = e.target.value;
    const files = e.target.files;
    setTitle(value);
    setPrice(value);
    setDescription(value);
    setImages(files);
    setThumbnail(files[0]);
    setStock(value);
  };

  //images preview
  const [previews, setPreviews] = useState([]);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(imagePreviews);
    setImages(files);
  };

  const handleThumbnailChange = (e) => {
    const thumb = e.target.files[0];
    if (thumb) {
      setThumbnailPreview(URL.createObjectURL(thumb)); // Create a temporary URL
    }
    setThumbnail(thumb);
  };
  useEffect(() => {
    setThumbnailPreview(thumbnail);
    setPreviews(images);
  }, [thumbnail, images]);
  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 bg-black/40 w-full h-full flex items-center justify-center">
          <div
            ref={modalRef}
            className="relative w-[800px]  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between  border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-4 ">
                <VscPackage size={25} />
                <h1 className="text-2xl font-bold">Update Product</h1>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="px-8 py-4">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="product-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="product-name"
                    name="product-name"
                    placeholder="e.g. Organic Cotton T-Shirt"
                    value={title}
                    onChange={handleFormInputs}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="e.g. Soft, breathable, and eco-friendly."
                    value={description}
                    onChange={handleFormInputs}
                    className="w-full h-[140px] p-4 border-2 border-gray-400/20 rounded-md  font-semibold text-md resize-none bg-white"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>

                    <select
                      id="category"
                      name="category"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    >
                      <option>Select a Category</option>
                      <option value="men">Men</option>
                      <option value="men">women</option>
                      <option value="men">kids</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="$ 0.00"
                      value={price}
                      onChange={handleFormInputs}
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    placeholder="e.g. 100"
                    value={stock}
                    onChange={handleFormInputs}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-full flex-1">
                    <label
                      htmlFor="stock"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Thumbnail
                    </label>
                    <div className="w-full mt-2">
                      <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center  h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full ">
                          <IoMdCloudUpload
                            size={30}
                            className="text-gray-400"
                          />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold text-yellow-500">
                              Upload a file
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-400">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>

                        <input
                          id="file-upload"
                          type="file"
                          className="hidden w-full "
                          multiple
                          onChange={handleThumbnailChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                    {thumbnailPreview && (
                      <div className="flex items-center gap-2">
                        <img
                          src={`data:image/webp;base64,${thumbnailPreview}`}
                          alt="Selected"
                          className="w-[50px] rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full flex-1">
                    <label
                      htmlFor="images"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Images
                    </label>
                    <div className="w-full mt-2">
                      <label
                        htmlFor="images-upload"
                        className="flex flex-col items-center justify-center  h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full ">
                          <IoMdCloudUpload
                            size={30}
                            className="text-gray-400"
                          />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold text-yellow-500">
                              Upload a file
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-400">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>

                        <input
                          id="images-upload"
                          type="file"
                          className="hidden w-full "
                          multiple
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                    {previews && (
                      <div className="flex items-center gap-2">
                        {previews.map((img) => (
                          <img
                            key={img}
                            src={`data:image/webp;base64,${img}`}
                            alt="Selected"
                            className="w-[50px] rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="flex items-center gap-4 justify-end border-t-2 border-gray-400/20 p-5">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdOutlineCancel size={20} />
                Cancel
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer">
                <CiSaveUp2 size={20} />
                Update Product
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
