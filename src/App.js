//import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import AllCampaigns from "./pages/AllCampaigns";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Layout>
     <Routes>
      <Route path="/" element={<AllCampaigns />} />
      <Route path="+" element={<ErrorPage />} />
     </Routes>
    </Layout>
  )
}

export default App;
