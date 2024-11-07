import './App.css';
import Create from './pages/Create';
import Profile from './pages/Profile';
import DashBoard from './pages/DashBoard';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="purple.400"
          minHeight={{ lg: "100vh" }}
          p={{ base: "20px", lg: "30px" }}
        ><SideBar></SideBar>
        </GridItem>
        <GridItem
          as="main"
          colSpan={{ base: 6, lg: 4, xl: 5 }}
          p="40px"
        > <Navbar></Navbar>
          <Routes>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/dashboard' element={<DashBoard />}></Route>
          </Routes>
        </GridItem>
      </Grid>




    </div>
  );
}

export default App;

//side bar küçük ekranda sayfanın tamamını kaplayacak sekilde ayarlandı. Ne zamanki l ekrana geçiyor yüksekliği değişiyor.