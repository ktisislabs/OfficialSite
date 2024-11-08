import React from 'react';
import Navbar from '../components/Navbar';
import VideoBack from '../Assets/Background.mp4';
import { UpdatesPosts } from '../Data/Updates_posts';
import '../Styles/Updates.css' ; 

function Updates() {
  return (
    <>
      <div className='Updates-Container w-full h-screen bg-black overflow-hidden relative'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={VideoBack}
          autoPlay
          loop
          muted
          playsInline
        />

        <Navbar />

        <div className='Updates-Section w-[100vw] h-full  absolute overflow-auto p-2 '>
          <div className='Updates-Card-div grid grid-cols-2 gap-12'> 
            {UpdatesPosts.map((item, index) => {
              return (
                <div
                  className='Post-Card ml-16 mt-12 shadow-lg'
                  key={index}
                >
                  <img
                    src={item.image}
                    alt="post-images"
                    className='w-[40vw] object-cover rounded-lg shadow shadow-slate-200'
                  />
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Updates;
