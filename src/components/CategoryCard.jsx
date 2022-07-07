import { Card, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
        <Card
          shadow="sm"
          p="xl"
          component={Link}
          to ={`/categories/${category._id}`}
          sx={{'&:hover': {
            backgroundColor: 'lightcyan',
          }}}
        >
          <Card.Section>
          <Text weight={500} size="lg" align="center">
            {category.kind}
          </Text>
          </Card.Section>
          <Text weight={500} align='center'>
        Number of campaigns: {category.campaigns.length}
      </Text>
        </Card>
      )
}
 
export default CategoryCard;