import './App.css'
import {NavigationBar} from "./components/NavigationBar.tsx";
import Particles from "./components/Particles.tsx";
import {AboutMe} from "./components/Introduction/AboutMe.tsx";
import {ProjectsSection} from "./components/Projects/ProjectsSection.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {
    return (
        <div className="relative min-h-screen w-full bg-[#000717] overflow-x-hidden flex flex-col">
            <Particles/>
            <NavigationBar/>
            <main className="relative flex-grow flex flex-col items-center justify-center gap-15 font-sans">
                <AboutMe id={"about-me"}/>
                <ProjectsSection id={"projects"}/>
            </main>
            <Footer/>
        </div>
    )
}

export default App