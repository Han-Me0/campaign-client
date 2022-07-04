import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Trash, Pencil} from "tabler-icons-react";
import { Paper,Title, Text,Image, ActionIcon} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import UpdateCampaignModal from "../components/UpdateCampaignModal"


const CampaignDetailsPage = () => {
    const { campaignId } = useParams()
    const [campaign, setCampaign] = useState({});
    const navigate = useNavigate()
    const [isModalOpen, serIsModalOpen] =useState(false)
    const [needRefresh, setNeedRefresh] = useState(false);

    const fetchCampaign = async() => {
        const response = await fetch(`http://localhost:5005/api/campaigns/${campaignId}`)
        const parsed = await response.json()
        setCampaign(parsed)
    }

    useEffect(() => {
        fetchCampaign()
    }, [])
    
    useEffect(() => {
        if(needRefresh) {
        fetchCampaign()
        setNeedRefresh(false)
        }
        
    }, [needRefresh])

    const deleteCampaign = async () => {
        await fetch(`http://localhost:5005/api/campaigns/${campaignId}`, {method: "DELETE"})
       navigate('/campaigns')
        
    }
    const handleDelete = () => {
        deleteCampaign()
    }
    return (<>
    <Image
        radius="md"
        src={campaign.image}
        alt="image"
      />
      <>
    <Paper shadow="md" radius="xs" p="xl"  margin="0"
    sx={{
        // width:'50%',
        marginLeft: '50%'
    }}>
      <Title>
         {campaign.title}
      </Title>
      <Text size="xl" 
      style={{ marginTop: 30 }}>
         {campaign.description}
      </Text>
      <Text size="md" 
      style={{ marginTop: 30 }}>
         Place: {campaign.place}
      </Text>
      <Text size="md" 
      style={{ marginTop: 30 }}>
         Category: {campaign.campaignType}
      </Text>
      <Text size="md" 
      style={{ marginTop: 30 }}>
         Total amount: {campaign.totalAmount} $
      </Text>
      <ActionIcon style={{ marginTop: 30 }} onClick={() => serIsModalOpen(true)}>
      <Pencil
        size={48}
        strokeWidth={2}
        color={'#40a9bf'}
      />
      </ActionIcon>
      <ActionIcon style={{ marginTop: 10 }} onClick={handleDelete}>
      <Trash
        size={48}
        strokeWidth={2}
        color={'#bf4040'}
      />
      </ActionIcon>
    </Paper>
    <UpdateCampaignModal isModalOpen={isModalOpen} serIsModalOpen={serIsModalOpen} campaignId={campaignId} campaign={campaign} setNeedRefresh={setNeedRefresh} />
    </>

    
    </>) ;
}
 
export default CampaignDetailsPage;