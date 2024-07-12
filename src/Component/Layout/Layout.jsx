// import React from 'react'
// import Header from '../Home/Header/Header'
// import { Outlet } from 'react-router'
// import Footer from '../Home/Footer/Footer'
// import HomePage from '../Home/HomePage/HomePage'

// export default function Layout() {
//   return (
//     <div >
//       <Header />
//       <HomePage />
//       <Outlet />
//       {/* <Footer /> */}

//     </div>
//   )
// }

import React, { useState, useEffect } from "react";
import Header from "../Home/Header/Header";
import { Outlet } from "react-router";

import Loader from "../Loader/Loader";

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      
      <Outlet />
 
    </div>
  );
}
