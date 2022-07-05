export const fetchCampaigns = async setter => {
    const response = await fetch('http://localhost:5005/api/campaigns')
    const parsed = await response.json()
    setter(parsed)
  }