import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoAlert } from "react-icons/go";




export  function SuccessBar({msg}) {
  return (
    <>
      <div className="fixed bottom-5 left-5">
        <div
          style={{ backgroundColor: "rgb(237, 255, 237)" }}
          className="bg-green-700 px-4 py-2 rounded-md shadow-sm shadow-black/20  border-l-3 border-green-700 text-lg flex items-center gap-4"
        >
          <IoMdCheckmarkCircleOutline size={25} className="text-green-700" />
          {msg}
        </div>
      </div>
    </>
  );
}

export  function InfoBar({msg}) {
  return (
    <>
      <div className="fixed bottom-[80px] left-5">
        <div
          style={{ backgroundColor: " rgb(229, 246, 253)" }}
          className=" px-4 py-2 rounded-md shadow-sm shadow-black/20  border-l-3 border-blue-700 text-lg flex items-center gap-4"
        >
          <IoIosInformationCircleOutline size={25} color="rgb(1, 67, 97)" />
          {msg}
        </div>
      </div>
    </>
  );
}

export  function AlertBar({msg}) {
  return (
    <>
      <div className="fixed bottom-[140px] left-5">
        <div
          style={{ backgroundColor: " rgb(255, 244, 229)" }}
          className=" px-4 py-2 rounded-md shadow-sm shadow-black/20  border-l-3 border-orange-700 text-lg flex items-center gap-4"
        >
          <GoAlert size={25} color="rgb(102, 60, 0)" />
   
          {msg}
        </div>
      </div>
    </>
  );
}


export function ErrorBar({msg}) {
  return (
    <>
      <div className="fixed bottom-5 left-5">
        <div
          style={{ backgroundColor: " rgb(253, 237, 237)" }}
          className=" px-4 py-2 rounded-md shadow-sm shadow-black/20  border-l-3 border-red-700 text-lg flex items-center gap-4"
        >
          <IoIosInformationCircleOutline
            GoAlert
            size={25}
            color="rgb(95, 33, 32)"
          />
          {msg}
        </div>
      </div>
    </>
  );
}
