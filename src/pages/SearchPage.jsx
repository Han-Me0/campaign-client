// import { Box } from "@mantine/core";
// import { useEffect, useState } from "react"
// import Search from "../components/Search"



// const SearchPage = () => {
// const [campaigns, setcampaigns] = useState([]);
// const [search, setSearch] = useState([]);

// const fetchData = async () => {
//     const response = await fetch('http://localhost:5005/api/campaigns')
//     const parsed = await response.json()
//     setcampaigns(parsed)
//   }
//   useEffect(() => {
//     fetchData()
//   }, []) 
//     return ( 
//         <>
//         <Search search = {search} setSearch = {setSearch}/>
//         <Box sx={{ 
//             display: "grid",
//             gridTemplate: '1fr / 1fr 1fr',
//             gridAutoRows: '1fr',
//             gap: '25px',
//             margin: '30px',
//           }}>
//             {campaigns
//             .filter((campaign) => campaign.title.toLowerCase().includes(search.toLowerCase()))
//             .map((campaign, i) => {
//         return <Box key = {campaign.title + i} campaign={campaign} />
        
//         })}
            
//         </Box>
        
//       </>
//      );
// }
 
// export default SearchPage;