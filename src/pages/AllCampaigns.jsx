import { Box, ActionIcon } from "@mantine/core";
import { useEffect, useState } from "react"
import CampaignCard from "../components/CampaignCard"
import { Plus } from "tabler-icons-react";
import NewCampaignModal from "../components/NewCampaignModal";


const AllCampaigns = () => {
const [campaigns, setcampaigns] = useState([]);
const [isModalOpen, setisModalOpen] = useState(false);
const fetchData = async () => {
    const response = await fetch('http://localhost:5005/api/campaigns')
    const parsed = await response.json()
    setcampaigns(parsed)
  }
  useEffect(() => {
    fetchData()
  }, []) 
    return ( 
        <>
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
            <ActionIcon variant="filled" size="xl" onClick={() => setisModalOpen(true) }>
            <Plus
              size={48}
              strokeWidth={2}
              color={'#79d292'}
            />
            </ActionIcon>
        </Box>
        <NewCampaignModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />
      </>
     );
}
 
export default AllCampaigns;