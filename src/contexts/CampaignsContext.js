import { createContext, useContext, useEffect, useState } from "react";
import { SessionContext } from "./SessionContext";

const CampaignsContext = createContext()

const CampaignsContextProvider = ({children}) => {
const [campaigns, setCampaigns] = useState([]);
const {isAuthenticated, apiWithToken} = useContext(SessionContext)

const fetchCampaigns = async() => {
 const response = await apiWithToken('campaigns')
 setCampaigns(response)
}

useEffect(() => {
    if (isAuthenticated) {
      fetchCampaigns()
    }
  }, [isAuthenticated])
    return (
        <CampaignsContext.Provider value={{ campaigns }}>
           {children}
        </CampaignsContext.Provider>
    )
}

export {CampaignsContext, CampaignsContextProvider}