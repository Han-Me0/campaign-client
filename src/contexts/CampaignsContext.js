import { createContext, useEffect, useState } from "react";
import { fetchCampaigns } from "../utils/helper";

const CampaignsContext = createContext()

const CampaignsContextProvider = ({children}) => {
const [campaigns, setCampaigns] = useState([]);

useEffect(() => {
    fetchCampaigns(setCampaigns)
}, [])
    return (
        <CampaignsContext.Provider value={{ campaigns }}>
           {children}
        </CampaignsContext.Provider>
    )
}

export {CampaignsContext, CampaignsContextProvider}