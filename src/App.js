
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Header from './Component/Home/Header/Header';
import Footer from './Component/Home/Footer/Footer';
import HomePage from './Component/Home/HomePage/HomePage';
import About from './Component/Aboutus/About';
import Contact from './Component/Contact/Contact';
import Logo from './Component/Logo/Logo';
import Mail from './Component/Mail/Mail';
import Loader from './Component/Loader/Loader';

function App() {
  return (
 <BrowserRouter><Routes>
  <Route path='/' element={<Layout/>}></Route>
  <Route path='/header' element={<Header/>}></Route>
  <Route path='/footer' element={<Footer/>}></Route>
  <Route path='/homepage' element={<HomePage/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/logo' element={<Logo/>}></Route>
  <Route path='/mail' element={<Mail/>}></Route>
  <Route path='/loader' element={<Loader/>}></Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
