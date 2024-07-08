import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";

import Footer from "./Component/Home/Footer/Footer";
import HomePage from "./Component/Home/HomePage/HomePage";
import About from "./Component/Aboutus/About";
import Contact from "./Component/Contact/Contact";
import Logo from "./Component/Logo/Logo";

import Loader from "./Component/Loader/Loader";
import Whatsapp from "./Component/Whatsapp/Whatsapp";
import Mobile from "./Component/Mobile/Mobile";
import Header from "./Component/Home/Header/Header";
import Gallery from "./Component/Home/HomePage/Gallery/Gallery";
import Carousel from "./Component/Home/HomePage/Carousel/Carousel";
import ContentBoxOne from "./Component/Home/ContentBoxOne/ContentBoxOne";
import Network from "./Component/Network/Network";
import ProjectInfo from "./Component/Projectinfo/ProjectInfo";
import Animation from "./Component/Animation/Animation";
import Clients from "./Component/ClientsLogo/Clients";


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/logo" element={<Logo />}></Route>
      
        <Route path="/whatsapp" element={<Whatsapp />}></Route>
        <Route path="/mbl" element={<Mobile />}></Route>
        <Route path="/loader" element={<Loader />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
    
        <Route path="/carousel" element={<Carousel />}></Route>
        <Route path="/" element={<ContentBoxOne />}></Route>
        <Route path="/net" element={<Network />}></Route>
        <Route path="/proinfo" element={<ProjectInfo />}></Route>
        <Route path="/anime" element={<Animation />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
