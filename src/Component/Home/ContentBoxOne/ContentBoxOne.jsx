import React from 'react';
import "./ContentBoxOne.css";

import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiGamedeveloper } from 'react-icons/si';
import { GrDeliver } from 'react-icons/gr';
import GetStarted from '../GetStarted/GetStarted';
import Footer from '../Footer/Footer';
import Animation from '../../Animation/Animation';
import CoutClients from '../../CountClients/CoutClients';
import Clients from '../../ClientsLogo/Clients';
 // Example icons from react-icons

export default function ContentBoxOne() {
  return (
    <>
    <div className="card-container  ">
      <div className="text-center card-card shadow p-3 rounded">
        <div className="icon-circle mx-auto">
        <AiOutlineAntDesign />
        </div>
        <div className=" allwin-name">
            <span className='card-text'>Design</span>
        <p className='content-one'>Creating stunning digital designs tailored for photo prints and business cards that captivate and impress.</p>
      </div></div>
      <div className=" text-center card-card  shadow p-3 rounded">
        <div className="icon-circle mx-auto">
        <SiGamedeveloper />
        </div>
        <div className=" allwin-name ">
            <span className='card-text'>Create</span>
        <p className='content-one'>Transforming concepts into high-quality printed materials, including custom logos that reflect your brand's identity.</p>
        </div></div>
      <div className=" text-center card-card shadow p-3 rounded" >
        <div className="icon-circle mx-auto">
        <GrDeliver />
        </div>
        <div className=" allwin-name">
            <span className='card-text'>Deliver</span>
        <p className='content-one'>Efficiently producing and delivering printed products with precision and care to meet your business needs on time.</p>
      </div></div>
      
    </div>
    <GetStarted />
    <Animation />
    <CoutClients />
    <Clients />
    <Footer />
    </>
  );
}
