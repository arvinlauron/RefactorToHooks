import  { useState } from "react";


function useDisplay() {
  const [display, setDisplay] = useState(true);
   const hide = () => {
    setDisplay(false)
  }

  return {hide, display};
}
export default useDisplay;
