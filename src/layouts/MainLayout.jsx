import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChakraProvider } from "@chakra-ui/react";

const MainLayout = () => {
  return (
     <ChakraProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
     </ChakraProvider>
  );
};

export default MainLayout;
