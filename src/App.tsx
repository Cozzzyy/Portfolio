import './App.css'
import {NavigationBar} from "./components/NavigationBar.tsx";
import Particles from "./components/Particles.tsx";
import {AboutMe} from "./components/Introduction/AboutMe.tsx";
import {ProjectsSection} from "./components/Projects/ProjectsSection.tsx";


function App() {
    return (
        <div className="relative min-h-screen w-full bg-[#000717] overflow-x-hidden">
            <Particles/>
            <NavigationBar/>
            <main className="relative flex flex-col items-center justify-center gap-15 font-sans">
                <AboutMe id={"about-me"}/>
                <ProjectsSection id={"projects"}/>
            </main>
        </div>
    )
}


export default App