import Hero from "./components/hero";
import SideBar from "./components/sidebar";
import About from "./views/about";
import Contact from "./views/contact";
import Projects from "./views/projects";
import Resume from "./views/resume";
import Skills from "./views/skills";



export default function Home() {
  return (
    <div>
       <div className="flex">
    {/* Sidebar */} 
   
    <SideBar />
    {/* Main Content */}
    <div className=" flex-1">
      < Hero />
    </div>
  </div>
     <About/>
       <Skills/>
      <Resume/>
       <Projects/>
     <Contact/>


    </div>
   
      
    
  );
}

