import React, { useEffect } from "react";
import Logo from "../Assets/Logo2.png";
import { useNavigate } from "react-router-dom";
import "../Styles/Loader.css";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Helmet } from "react-helmet";

export default function SparklesPreview() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Homepage");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
     <Helmet>
        <title>Welcome to  KtisisLabs</title>
        <meta name="description" content="Please wait while we load your content." />
      </Helmet>
    <AuroraBackground>
    <div className="Loader-Container w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Image with fade-in animation */}
      <img
        src={Logo}
        alt="Logo-Loader"
        className="Loader-Logo w-1/5 opacity-0 animate-fadeIn"
      />

     

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
    </AuroraBackground>
    </>
  );
}
