import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";

import Footer from "./Component/Home/Footer/Footer";
import HomePage from "./Component/Home/HomePage/HomePage";
import About from "./Component/Aboutus/About";
import Contact from "./Component/Contact/Contact";
import Logo from "./Component/Logo/Logo";
import Mail from "./Component/Mail/Mail";
import Loader from "./Component/Loader/Loader";
import Whatsapp from "./Component/Whatsapp/Whatsapp";
import Mobile from "./Component/Mobile/Mobile";
import Header from "./Component/Home/Header/Header";
import Gallery from "./Component/Home/HomePage/Gallery/Gallery";
import Carousel from "./Component/Home/HomePage/Carousel/Carousel";

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
        <Route path="/mail" element={<Mail />}></Route>
        <Route path="/whatsapp" element={<Whatsapp />}></Route>
        <Route path="/mbl" element={<Mobile />}></Route>
        <Route path="/loader" element={<Loader />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/" element={<Carousel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
