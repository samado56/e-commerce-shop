import { useRef, useEffect } from "react";

//icons
// import { FaApplePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
export default function AddApplePayModal({
  closeModal,
  showModal,
  addPayment,
}) {
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
  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 bg-black/40 w-full h-[100vh] pt-[88px] flex items-center justify-center">
          <div
            ref={modalRef}
            className="relative w-[500px]  rounded-md shadow-md shadow-black/10 bg-white p-8"
          >
            <div className="flex flex-col items-center justify-between mb-8 text-center">
              <FaApplePay size={90} />
              <h1 className="text-5xl font-bold mb-4">Add Apple Pay</h1>
              <p className="text-xl text-gray-600 font-medium mb-4">
                Securely link your Apple devices to make payments faster.
                Confirm your payment details to complete the setup
              </p>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-8 ">
              <button
                onClick={addPayment}
                className="text-lg font-semibold py-2 px-3 border-2 border-gray-400/20 rounded-md bg-black text-white cursor-pointer w-full"
              >
                Connect with Apple Pay
              </button>
              <button
                onClick={closeModal}
                className="text-lg font-semibold py-2 px-3 border-2 border-gray-400/20 rounded-md cursor-pointer w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
