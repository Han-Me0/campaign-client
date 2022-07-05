import { Card, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const CampaignCard = ({campaign}) => {
    return (
        <Card
          shadow="sm"
          p="xl"
          component={Link}
          to ={`/campaigns/${campaign._id}`}
          sx={{'&:hover': {
            backgroundColor: 'lightcyan',
          }}}
        >
          <Card.Section>
            <Image src={campaign.image} height={360} alt="The Campaign" />
          </Card.Section>
    
          <Text weight={500} size="lg" align="center">
            {campaign.title}
          </Text>
    
          <Text size="sm" align='center'>
          {campaign.description}
          </Text>
        </Card>
      );
}
 
export default CampaignCard;