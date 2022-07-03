import { AppShell, Navbar, Header,Input } from '@mantine/core';

const Layout = ({children}) => {
    return ( <AppShell
        padding="md"
        navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          Navbar content 
        </Navbar>
        }
        header={
        <Header height={60} p="xs">
          <Box>
              <Image />
          </Box> 
        </Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        {children}
      </AppShell> );
}
 
export default Layout;