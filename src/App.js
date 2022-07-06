//import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import { CampaignsContextProvider } from './contexts/CampaignsContext';
import AllCampaigns from "./pages/AllCampaigns";
import CampaignDetailsPage from "./pages/CampaignDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from './pages/SearchPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { SessionContextProvider } from './contexts/SessionContext';


function App() {
  return (
    <SessionContextProvider>
    <CampaignsContextProvider>
      <Layout>
        <Routes>
         <Route path="/" element={<h1>Hello anonymous</h1>} />
         <Route path="/signup" element={<SignupPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/campaigns" element={<AllCampaigns />} />
         <Route path="/campaigns/search" element={<SearchPage />} />
         <Route path="+" element={<ErrorPage />} />
         <Route path="/campaigns/:campaignId" element={<CampaignDetailsPage />} />
        </Routes>
      </Layout>
    </CampaignsContextProvider>
    </SessionContextProvider>
  )
}

export default App;
