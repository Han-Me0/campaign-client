import { Box } from "@mantine/core";
import { useContext, useState } from "react"
import CampaignCard from "../components/CampaignCard"
import NewCampaignModal from "../components/NewCampaignModal";
import { CampaignsContext } from "../contexts/CampaignsContext";
import AddButton from "../components/AddButton";


const AllCampaigns = () => {
const { campaigns } = useContext(CampaignsContext)
const [isModalOpen, setIsModalOpen] = useState(false);

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
              <CampaignCard key={campaign._id} campaign={campaign}/>
            ))}
            <AddButton setIsModalOpen={setIsModalOpen} />
        </Box>
        <NewCampaignModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </>
     );
}
 
export default AllCampaigns;