import { Card, Image, Text } from '@mantine/core';
const CampaignCard = ({campaign}) => {
    return (
        <Card
          shadow="sm"
          p="xl"
          component="a"
        //   href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
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