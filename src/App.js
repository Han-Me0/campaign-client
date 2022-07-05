//import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import { CampaignsContextProvider } from './contexts/CampaignsContext';
import AllCampaigns from "./pages/AllCampaigns";
import CampaignDetailsPage from "./pages/CampaignDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <CampaignsContextProvider>
      <Layout>
        <Routes>
         <Route path="/campaigns" element={<AllCampaigns />} />
         <Route path="/campaigns/search" element={<SearchPage />} />
         <Route path="+" element={<ErrorPage />} />
         <Route path="/campaigns/:campaignId" element={<CampaignDetailsPage />} />
        </Routes>
      </Layout>
    </CampaignsContextProvider>
  )
}

export default App;
