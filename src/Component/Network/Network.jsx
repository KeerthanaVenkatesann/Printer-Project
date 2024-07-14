
import React, { useState, useEffect } from "react";
import "./Network.css";
import { MdLocationPin } from "react-icons/md";
import Footer from "../Home/Footer/Footer";
import ProjectInfo from "../Projectinfo/ProjectInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbWaveSawTool } from "react-icons/tb";

const data = [
  {
    image: "Assests/CarouselImage/chennai.jpg",
    title: 500,
    subtitle: "Hoardings",
    location: "Chennai",
  },
  {
    image: "Assests/CarouselImage/coimbatore.jpg",
    title: 300,
    subtitle: "Hoardings",
    location: "Coimbatore",
  },
  {
    image: "Assests/CarouselImage/madurai.jpg",
    title: 250,
    subtitle: "Hoardings",
    location: "Madurai",
  },
  {
    image: "Assests/CarouselImage/trichy.jpg",
    title: 225,
    subtitle: "Hoardings",
    location: "Trichy",
  },
  {
    image: "Assests/CarouselImage/salem.jpg",
    title: 200,
    subtitle: "Hoardings",
    location: "Salem",
  },
  {
    image: "Assests/CarouselImage/thirunalveli.jpg",
    title: 180,
    subtitle: "Hoardings",
    location: "Tirunelveli",
  },
  {
    image: "Assests/CarouselImage/nagerkovil.jpg",
    title: 170,
    subtitle: "Hoardings",
    location: "Nagercoil",
  },
  {
    image: "Assests/CarouselImage/thanjavur.jpg",
    title: 150,
    subtitle: "Hoardings",
    location: "Thanjavur",
  },
  {
    image: "Assests/CarouselImage/dindigul.jpg",
    title: 125,
    subtitle: "Hoardings",
    location: "Dindigul",
  },
  {
    image: "Assests/CarouselImage/vellore.jpg",
    title: 100,
    subtitle: "Hoardings",
    location: "Vellore",
  },
  {
    image: "Assests/CarouselImage/cuddalore.jpg",
    title: 75,
    subtitle: "Hoardings",
    location: "Cuddalore",
  },
  {
    image: "Assests/CarouselImage/erode.jpg",
    title: 50,
    subtitle: "Hoardings",
    location: "Erode",
  },
];

const locations = [
  "Adambakkam", "Adyar", "Alandur", "Alapakkam", "Alwarpet", "Alwarthirunagar", "Ambattur", "Aminjikarai", "Anna Nagar", "Annanur", "Guduvancheri", 
  "Arumbakkam", "Ashok Nagar", "Avadi", "Ayanavaram", "Beemannapettai", "Besant Nagar", "Basin Bridge", "Chepauk", "Chetput", "Chintadripet", "Injambakkam", 
  "Chitlapakkam", "Choolai", "Choolaimedu", "Chrompet", "Egmore", "Ekkaduthangal", "Eranavur", "Ennore", "Gopalapuram", "Guindy", "Iyyapanthangal", 
  "Karapakkam", "Kattivakkam", "Kattupakkam", "Kazhipattur", "K.K. Nagar", "Keelkattalai", "Kodambakkam", "Kodungaiyur", "Jafferkhanpet"
];

const Network = () => {
  const [animatedTitles, setAnimatedTitles] = useState(data.map(() => 0));
  const [intervalIds, setIntervalIds] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const newIntervalIds = data.map((item, index) => {
      const increment = Math.ceil(item.title / 50);
      return setInterval(() => {
        setAnimatedTitles((prev) => {
          const newValues = [...prev];
          if (newValues[index] < item.title) {
            newValues[index] = Math.min(newValues[index] + increment, item.title);
          }
          return newValues;
        });
      }, 50);
    });

    setIntervalIds(newIntervalIds);

    return () => {
      newIntervalIds.forEach(clearInterval);
    };
  }, []);

  return (
    <>
      <div className="text-center mb-5 mt-5 print" data-aos="fade-up">
        <h1 className="header-list fs-2">Our Network Growing Day by Day</h1>
        <div><TbWaveSawTool className="text-danger fs-3  " /></div>
        <h4 className="mt-2 text-danger">Hoarding In Tamil Nadu</h4>
        <p>Find hoardings in all these cities</p>
      </div>

      <div className="network-container" >
        {data.map((item, index) => (
          <div className="network-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <img src={item.image} alt={item.location} />
            <div className="network-card-overlay print">
              <div className="network-card-content">
                <div className="network-card-title">{animatedTitles[index]}+</div>
                <div className="network-card-subtitle">{item.subtitle}</div>
                <button className="network-card-button btn btn-outline-light">{item.location}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 print w-75 mx-auto rounded p-3" data-aos="fade-up">
        <h1 className="header-list fs-2">Hoardings for You</h1>
        <div><TbWaveSawTool className="text-danger fs-3  " /></div>
        <p className="print w-75 mx-auto mt-2">
         <i> Transform your business with our extensive lineup of marketing essentials and bespoke solutions. From impactful signage and promotional materials to personalized stationery and creative artworks, we offer everything you need to elevate your brand presence. Explore our range of high-quality products including LED signs, promotional tents, laser-cut designs, and more, tailored to enhance visibility and leave a lasting impression.</i>
        </p>
      </div>

      <div className="hoardings-container bg-transparent print text-white mb-5" data-aos="fade-up">
        <h1 className="header-list  text-white">Find hoardings in All Over Chennai</h1>
        <div><TbWaveSawTool className="text-danger fs-3  mb-4" /></div>
        <div className="locations-grid p-2">
          {locations.map((location, index) => (
            <div key={index} className="location-item text-white" data-aos="fade-up" data-aos-delay={`${index * 50}`}>
              <span className="location-icon"><MdLocationPin className="fs-3 text-danger" /></span>
              {location}
            </div>
          ))}
        </div>
      </div>
      <ProjectInfo />

    </>
  );
};

export default Network;
