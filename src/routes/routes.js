import { Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Reservations from '../pages/Reservations';
import Home from '../pages/Home';

const RoutesComponent = () => (
    <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<Home />}></Route>
            <Route path="/Menu" element={<Home />}></Route>
            <Route path="/Reservations" element={<Reservations />}></Route>
            <Route path="/Order" element={<Home />}></Route>
            <Route path="/Login" element={<Home />}></Route>
        </Route>
    </Routes>
);

export default RoutesComponent;