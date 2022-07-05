import { Box, ActionIcon } from "@mantine/core";
import { useContext, useState } from "react"
import CampaignCard from "../components/CampaignCard"
import { Plus } from "tabler-icons-react";
import NewCampaignModal from "../components/NewCampaignModal";
import { CampaignsContext } from "../contexts/CampaignsContext";


const AllCampaigns = () => {
const { campaigns } = useContext(CampaignsContext)
const [isModalOpen, setisModalOpen] = useState(false);

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