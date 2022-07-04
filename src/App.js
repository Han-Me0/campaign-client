//import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import AllCampaigns from "./pages/AllCampaigns";
import CampaignDetailsPage from "./pages/CampaignDetailsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Layout>
     <Routes>
      <Route path="/campaigns" element={<AllCampaigns />} />
      <Route path="+" element={<ErrorPage />} />
      <Route path="/campaigns/:campaignId" element={<CampaignDetailsPage />} />
     </Routes>
    </Layout>
  )
}

export default App;
