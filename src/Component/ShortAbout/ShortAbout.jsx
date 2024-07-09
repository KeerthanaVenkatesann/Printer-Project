import React from 'react';
import './ShortAbout.css';
import { useNavigate } from 'react-router';

export default function ShortAbout() {
    const nav = useNavigate()
    const handleAbout = ()=>{
        nav("/about")
    }
  return (
    <div className="short-about-container print">
      <div className="text-content">
        <h5 onClick={handleAbout} className='curse'>Get To Know</h5>
        <h1>About Us</h1>
        <h2></h2>
        <p>
        Allwin Digital was inaugurated in 2014 and has since evolved into a leading outdoor advertising agency in Chennai. We specialize in advertising brands across various media platforms, including hoardings, cinema halls, shopping malls, railway stations, airports, and other public places in metropolitan cities.
        </p>
        <div class="border-container">


</div>
      </div>
      <div className="image-content">
        {/* <img src="path/to/side-image.png" /> */}
      </div>
    </div>
  );
}
