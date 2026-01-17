
import './App.css';
import Navbar from './Component/navbar';
import DynamicText from './DynamicText';
import SkillCard from './Component/Competences';
//import Services from './Component/ServiceCard';
import ServiceData from './data.json';
import skillsData from './data.json';
import Experience from './Component/Cursus';
import CursusData from './data.json'
import Services from './ServiceCard';
import Timeline from './Component/Trait'
import Portfolio from './Component/Mon_portfolio';
import mobile from './assets/mobile.png'
import mobile2 from './assets/mobil.png'
import KOLT from './assets/KOLTIN.jpeg'
import KOLTin from './assets/KOTLI.jpeg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import "aos/dist/aos.css";
import  './ANimation'

import RotatingGallery from './ANimation';


//import AnimatedCard from './Component/ContactForm';
import ContactForm from './Component/ContactForm';
function App() {
  const Img1=[
    {
       title:'Application de livraison de Repas',
       image:mobile,
       github:"https://github.com/OuedFataf-dev/livraison-de-repas"
    }
  ]
    
  
  const Img2=[
    { 
        title:'Application de Ecommerce',
       image:mobile2,
       github:'https://github.com/OuedFataf-dev/project_ecommerce'

    }
  ]
  
  const Img3=[
    {
        title:'Application de Quiz',
       image:KOLT,
       github:'https://github.com/OuedFataf-dev/APPLICATTION_KOTLIN'

    }
    
  ]  


  const Img4=[
    {
      title:'Application de gestion de taches',
       image:KOLTin,
       github:'https://github.com/OuedFataf-dev/APPLICATTION_KOTLIN'
    }
  ]


  const Img5=[
    {
        title:"Application d'apprentissage du code de la route",
       image:image2,
       github:''

    }
    
  ]  


  const Img6=[
    {
     title:"Application d'apprentissage du code de la route",
       image:image3,
       github:''
    }
  ]
  return (
    <>
      <Navbar />
      <div id="home" className="h-50 w-full bg-blue-500">
        <div className="flex items-center h-32 bg-blue-500 p-5">
          <h1 className="text-2xl md:text-4xl font-bold text-white">OUEDRAOGO FATAF</h1>
        </div>

            

            <h1 className='px-10 text-2xl'>I'm </h1>
      <h2 className="px-2 sm:px-8 md:px-16 lg:px-20 text-2xl sm:text-3xl md:text-4xl font-bold break-words whitespace-normal">
  <DynamicText />
</h2>

        <p className="text-2xl  italic text-white   text-2xl  p-8 ">
          Développeur web et mobile passionné, je suis spécialisé <br />
          dans la conception et le développement d'applications web <br />
          et mobiles personnalisées. Maîtrisant un large éventail de <br />
          technologies web, je suis à l'aise aussi bien sur le front-end <br />
          que sur le back-end. Mon objectif est de contribuer à des <br />
          projets innovants en mettant à profit mes compétences techniques.
        </p>
      </div>
      <div id="competences">
        <div>
          <div>   </div>
          <div className="text-5xl text-center font-bold italic text-stroke mt-10">COMPÉTENCES TECHNIQUES</div> 
          <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl gap-12 p-12 mt-10 mx-auto">
            <SkillCard title="Mes Compétences" skills={skillsData.skills1 || []} />
            <SkillCard title="Compétences Web" skills={skillsData.skills2 || []} />
          </div>
        </div>
      </div>
      <div id="services" className="text-5xl text-center font-bold italic text-stroke mt-10">SERVICES</div>
      <div>
        <Services services={ServiceData.services1 || []} />
        <Services services={ServiceData.services2 || []} />
      </div>
      <div id="cursus" className="text-5xl text-center font-bold italic text-stroke mt-10">CURSUS</div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center px-10 gap-6">
  {/* Première colonne */}

</div>








  <div className="flex flex-wrap md:flex-nowrap items-center justify-center px-4 gap-4 ">
  {/* Colonne de gauche */}
  <div className="w-full ml-5 px-5  md:w-1/3 flex justify-start ">
    <div className="w-full max-w-full gap-80"> {/* 🔹 Augmentation de la largeur */}
      <Experience data={CursusData.eventsLeft1 || []} />
    </div>
  </div>

  {/* Timeline au centre (masqué sur mobile) */}
  <div className="hidden md:flex w-full md:w-1/3 justify-center p-5">
    <Timeline />
  </div>

  {/* Colonne de droite */}
  <div className="w-full md:w-1/3 flex justify-end mt-10 p-5">
    {/* 🔹 Augmentation de la largeur */}
      <Experience data={CursusData.eventsRight2 || []} />
  
  </div>
</div>

 


<div className="flex flex-wrap md:flex-nowrap items-center justify-center px-4 gap-4"> 
  {/* Colonne de gauche */}
  <div className="w-full md:w-1/3  px-5 ml-5 flex justify-start  p-5">
  <Experience data={CursusData.eventsLeft3 || []} />
</div>

{/* Timeline au centre */}
<div className="hidden md:flex w-full md:w-1/3 justify-center p-5">
  <Timeline />
</div>

  {/* Colonne de droite */}
  <div className="w-full md:w-1/3 flex justify-end mt-10 p-5">
    <Experience data={CursusData.eventsRight4 || []} />
  </div>

</div>




      <div id="portfolio" className="text-4xl text-center font-bold italic text-stroke mt-10">Mon Portfolio</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-12 p-12 mx-auto'>
      <Portfolio data={Img1} />
      <Portfolio data={Img2} />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-12 p-12 mx-auto'>
      <Portfolio data={Img3} />
      <Portfolio data={Img4} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 max-w-6xl mx-auto">
  <Portfolio data={Img5} />
  <Portfolio data={Img6} />
</div>



             



       
      <div id="contact" className="text-5xl text-center font-bold italic text-stroke mb-10">Contactez-moi</div>
      <div className=' flex text-center justify-center'>
        <ContactForm/>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="text-center italic">
            Copyright © {new Date().getFullYear()} - Créé par Fataf  | Tous les droits réservés
          </p>
        </aside>
      </footer>

     

    </>
  );
}

export default App;