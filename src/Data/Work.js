
import Raavya from '../Assets/Works/raavya.png'
import POH from '../Assets/Works/POH.png';
import pohui from '../Assets/Works/pohui.png';
import Ephe from '../Assets/ephemeral.png'
export const WorkData=[
    {
        id:1,
        Name:"TheRaavya (v1)",
        Industry:"Home Decor and Furniture Brand.",
        image:Raavya,
        Service:"UI/UX Design",
        Description:"The Raavya Home Creator is a premium brand offering sustainable furniture and home decor.",
        link:"/",
        caseStudyId: 1, 
    },
    {
        id:2,
        Name:"TheRaavya (v1)",
        Industry:"Home Decor and Furniture Brand.",
        image:Raavya,
        Service:"Web Development ",
         Description:"The Raavya Home Creator is a premium brand offering sustainable furniture and home decor.",
        link:"/",
        caseStudyId: 1, // Reference to CaseStudyData
    },
    {
        id: 3,
        Name: "Pots of Happiness ",
        Industry:"Premium Pottery Studio",
        Service: "UI/UX Design",
        image: pohui,
        Description: "A boutique pottery studio offering unique, handcrafted pottery pieces.",
        link: "https://potsofhappiness-demo.vercel.app/",
        caseStudyId: 2, // Reference to CaseStudyData
      },
    {
        id:4,
        Name:"Pots of Happiness",
        Industry:"Premium Pottery Studio",
        image:POH,
        Service:"UI/UX Design ",
         Description:"A boutique pottery studio offering unique, handcrafted pottery pieces.",
        link:"/",
        caseStudyId: 2, // Reference to CaseStudyData
    },
    {
        id:5,
        Name:"Ephemeral Vidp",
        Industry:"Creative Design Studio",
        image:Ephe,
        Service:"UI/UX Design ",
         Description:"Ephemeral Vidp is a cutting-edge design studio specializing in creating captivating visuals and innovative designs that leave a lasting impression.",
        link:"/",
        caseStudyId: 3, // Reference to CaseStudyData
    },

]