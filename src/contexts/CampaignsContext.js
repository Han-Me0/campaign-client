import { createContext, useContext, useEffect, useState } from "react";
import { SessionContext } from "./SessionContext";

const CampaignsContext = createContext()

const CampaignsContextProvider = ({children}) => {
const [campaigns, setCampaigns] = useState([]);
const {token, apiWithToken} = useContext(SessionContext)

const fetchCampaigns = async() => {
 const response = await apiWithToken('campaigns')
 setCampaigns(response)
}

useEffect(() => {
    if (token) {
      fetchCampaigns()
    }
  }, [token])
    return (
        <CampaignsContext.Provider value={{ campaigns }}>
           {children}
        </CampaignsContext.Provider>
    )
}

export {CampaignsContext, CampaignsContextProvider}