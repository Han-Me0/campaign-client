import { AppShell, Navbar, Header, Box, Image ,Input, Button, Anchor } from '@mantine/core';
// import SearchBar from 'react-js-search';
import { FaSearch } from "react-icons/fa";
import logo from '../images/mobile-logo2.png'
import { NavLink } from "react-router-dom";
// import Footer from './Footer'

const Layout = ({children}) => {
    return ( <AppShell
        padding="md"
        navbar={
        <Navbar width={{ base: 100 }} height={500} p="xs">
          <Anchor
            component={NavLink}
            to="/"
            style={({ isActive }) =>
                (isActive ? { color: 'red' } : undefined)}
          > 
                Campaigns 
          </Anchor>
          <Anchor
            component={NavLink}
            to="/categories"
            style={({ isActive }) =>
                (isActive ? { color: 'red' } : undefined)} 
          >      
                Categories 
          </Anchor>
        </Navbar>
        }
        header={
        <Header height={70} padding={0} p="xs">
          <Box sx={{ 
            display: "flex",
            gap: '30%',
          }}>
            <Image src={logo} height={60} width={125} alt="logo/Rescue Initiative" />
            <Box sx={{ 
            display: "flex",
          }} >
              <Input placeholder="Seerch..." styles={{ input: { width: '100%', boxSizing: 'border-box' } }} />
                <Button size="lg" color="pink" compact uppercase>
                 {<FaSearch size={16} />}
                </Button>
            </Box>
          </Box>
        </Header>
        }
        styles={{
          main: { backgroundColor: 'lightgrey'},
        }}
      >
    
        {children}
       
      </AppShell>
      
    //   </Footer>
      );
}
 
export default Layout;