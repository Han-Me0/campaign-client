import { AppShell, Navbar, Header, Box, Image , Button, Anchor } from '@mantine/core';
// import SearchBar from 'react-js-search';
import { FaSearch } from "react-icons/fa";
import logo from '../images/mobile-logo2.png'
import { NavLink } from "react-router-dom";

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
                About 
          </Anchor>
          <Anchor
            component={NavLink}
            to="/campaigns"
            style={({ isActive }) =>
                (isActive ? { color: 'red' } : undefined)} 
          >      
                Home 
          </Anchor>
          <Anchor
            component={NavLink}
            to="/categories"
            style={({ isActive }) =>
                (isActive ? { color: 'red' } : undefined)} 
          >      
                Categories 
          </Anchor>
          <Anchor
            component={NavLink}
            to="/search"
            style={({ isActive }) =>
                (isActive ? { color: 'red' } : undefined)} 
          >      
                <Button size="lg" color="red" radius="xs" compact uppercase>
                 {<FaSearch size={16} />}
                </Button>
          </Anchor>
        </Navbar>
        }
        header={
        <Header height={70} padding={0} p="xs">
          <Box sx={{ 
            display: "flex",
            gap: '70%',
          }}>
            <Image src={logo} height={60} width={125} alt="logo/Rescue Initiative" />
            <Box sx={{ display: 'grid', gridTemplate: '1fr / 100% 1fr' , width: '30%'}} >
              {/* <Input 
              placeholder="Seerch Campaign..." 
              styles={{ input: { width: '100%',
              boxSizing: 'border-box' } 
              }} /> */}
              <Box sx={{ display: 'grid', gridTemplate: '1fr / 1fr 1fr' , width: '20%', gap: '16%', margin: '2%'}} >
              <Anchor 
            component={NavLink}
            to="/signup"
            style={({ isActive }) =>
                (isActive ? { color: 'red' } : undefined)}
          > 
                Signup 
          </Anchor>
          <Anchor 
            component={NavLink}
            to="/login"
            style={({ isActive }) =>
                (isActive ? { color: 'red' } : undefined)}
          > 
                Login 
          </Anchor>
             </Box>
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