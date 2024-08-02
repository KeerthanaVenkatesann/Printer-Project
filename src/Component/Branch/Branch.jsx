import React from 'react';
import './Branch.css';
import { useNavigate } from 'react-router';


const Branch = () => {
    const nav = useNavigate();
  const handledirect=()=>{
nav("/contact");
  }
  return (
    <div className="centerBox">
        <div className="d-flex justify-content-center flicker">
      <div className="categoryWrapper">
        <h3>Vadapalani</h3>
        <button >
          <span>
            <span>
              <span data-attr-span="contact us" >contact us</span>
            </span>
          </span>
        </button>
      </div></div>
      <div className="d-flex justify-content-around flicker ">
      <div className="categoryWrapper">
        <h3>Ashok Nagar</h3>
        <button >
          <span>
            <span>
              <span data-attr-span="contact us">contact us</span>
            </span>
          </span>
        </button>
      </div>
      <div className="categoryWrapper">
        <h3>Guduvanchery</h3>
        <button >
          <span>
            <span>
              <span data-attr-span="contact us">contact us</span>
            </span>
          </span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Branch;
