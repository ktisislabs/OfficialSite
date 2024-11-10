import React from "react";
import VideoBack from '../Assets/Background.mp4';
import Navbar from "../components/Navbar";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import POH from '../Assets/Works/POH.png';
import ADIPORT from '../Assets/Works/portfolio.png';
import pohui from '../Assets/Works/pohui.png';
import { useState, useEffect } from "react";

// Image import
import RaavyaImage from '../Assets/Works/Ui-Raavya/img1.png';

// Work Data Array
const WorkData = [
  {
    id: 1,
    ClientName: "The Raavya",
    Year: "2024",
    Services: "UI/UX and Web Development",
    image: RaavyaImage,
    About: "The Raavya Home Creator is a premium brand offering sustainable furniture and home decor.",
    link: "http://theraavya.in/"
  },
  {
    id: 2,
    ClientName: "Pots of Happiness by Priyasha Bose ",
    Year: "2024",
    Services: "UI/UX and Web Development",
    image: POH,
    About: "A boutique pottery studio offering unique, handcrafted pottery pieces.",
    link: "https://potsofhappiness-demo.vercel.app/"
  },
  {
    id: 3,
    ClientName: "Aditya Bhattacharjee",
    Year: "2024",
    Services: "Web Design and Web Development",
    image: ADIPORT,
    About: "A personal 3D portfolio showcasing all the details of the software developer",
    link: "https://t.co/jcn0jjs1NV"
  },
  {
    id: 4,
    ClientName: "Pots of Happiness ",
    Year: "2024",
    Services: "UI/UX Design",
    image: pohui,
    About: "A boutique pottery studio offering unique, handcrafted pottery pieces.",
    link: "https://potsofhappiness-demo.vercel.app/"
  }
];

// DummyContent Component
const DummyContent = ({ work }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // If multiple images, cycle through them
  useEffect(() => {
    if (work.image instanceof Array && work.image.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % work.image.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [work.image]);

  const currentImage = work.image instanceof Array ? work.image[currentImageIndex] : work.image;

  return (
    <div className=" bg-black p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center">
      <p className="text-white dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-white dark:text-neutral-200">
          {work.ClientName}
        </span>{" "}
        - {work.About}
      </p>
      <img
        src={currentImage}
        alt={work.ClientName}
        height={500}
        width={500}
        className="md:w-[100vw] md:h-[25vw] h-full w-full mx-auto object-cover mt-12 rounded-xl"
      />
      <a href={work.link} target="_blank" rel="noopener noreferrer">
        <button className="mt-5 border border-white text-white font-poppins py-2 px-4 rounded-full hover:bg-white hover:text-black">
          Visit Website
        </button>
      </a>

     
    </div>
  );
};

// AppleCardsCarouselDemo Component
export function AppleCardsCarouselDemo() {
  const cards = WorkData.map((work, index) => (
    <Card key={index} card={{
      category: work.Services,
      title: work.ClientName,
      src: work.image instanceof Array ? work.image[0] : work.image,
      content: <DummyContent work={work} />
    }} index={index} />
  ));

  return (
    <div className="Work-Container  w-full h-screen bg-black overflow-hidden relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={VideoBack}
        autoPlay
        loop
        muted
        playsInline
      />
      <Navbar />
      <Carousel items={cards} />
    </div>
  );
}

export default AppleCardsCarouselDemo;
