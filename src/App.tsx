import './App.css'
import {NavigationBar} from "./components/NavigationBar.tsx";
import Particles from "./components/Particles.tsx";
import {AboutMe} from "./components/Introduction/AboutMe.tsx";
import {ProjectsSection} from "./components/Projects/ProjectsSection.tsx";


function App() {
    return (
        <div className="min-h-screen bg-[#000717]"> {/* Nieuwe wrapper div */}
            <Particles/>
            <NavigationBar/>
            <div className={"flex flex-col items-center justify-center gap-15 font-sans"}>
                <AboutMe id={"about-me"}/>
                <ProjectsSection id={"projects"}/>
            </div>
        </div>
    )
}

export default App