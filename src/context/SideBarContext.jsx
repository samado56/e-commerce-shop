import { SideBarContext } from "./sideBarContext";
import { useState } from "react";

export default function SideBarProvider({ children }) {
  const [shrinkSideBar, setShrinkSideBar] = useState(false);

  return (
    <>
      <SideBarContext.Provider value={{ shrinkSideBar, setShrinkSideBar }}>
        {children}
      </SideBarContext.Provider>
    </>
  );
}
