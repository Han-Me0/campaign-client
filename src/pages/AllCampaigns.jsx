import { Box } from "@mantine/core";
import { useEffect, useState } from "react"
import CampaignCard from "../components/CampaignCard"

const AllCampaigns = () => {
const [campaigns, setcampaigns] = useState([]);
const fetchData = async () => {
    const response = await fetch('http://localhost:5005/api/campaigns')
    const parsed = await response.json()
    setcampaigns(parsed)
  }
  useEffect(() => {
    fetchData()
  }, []) 
    return ( 
        <Box sx={{ 
            display: "grid",
            gridTemplate: '1fr / 1fr 1fr',
            gridAutoRows: '1fr',
            gap: '25px',
            margin: '30px',
          }}>
            {campaigns.map(campaign => (
              <CampaignCard campaign={campaign}/>
            ))}
            
          </Box>
     );
}
 
export default AllCampaigns;