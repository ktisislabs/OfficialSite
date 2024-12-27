import ephemeral from '../Assets/ephemeral.png' ; 
import poh from '../Assets/poh.png'
import raavya from '../Assets/raavya.png';


import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

 function Testimonials() {
  const testimonials = [
   {
           id: 1,
           profileImage: raavya,
           Name: "Raaghav Khurana",
           Designation: "Founder at TheRaavya",
           Remark: "Working with this team has been a game-changer for our business. Their dedication and creativity are unmatched!"
       },
       {
           id: 2,
           profileImage: poh,
           Name: "Priyasha Bose",
           Designation: "Founder at Pots of Happiness",
           Remark: "Exceptional service and attention to detail! They brought our vision to life in ways we couldn’t have imagined."
       },
       {
           id: 3,
           profileImage: ephemeral,
           Name: "Ephemeral Vidp",
           Designation: "",
           Remark: "Their professionalism and innovative approach exceeded our expectations. Highly recommend their services!"
       }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}


export default Testimonials ; 