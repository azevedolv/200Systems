import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = ({children}) => {
  const [indication_code, setIndication_code] = useState("");
  const [giftMessage, setGiftMessage] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState("");
  const [indications, setIndications] = useState({})



  
 
  const states = { indication_code, giftMessage, successfulMessage, indications };
  const setters = { setIndication_code, setGiftMessage, setSuccessfulMessage, setIndications};
  const requests = {};

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
