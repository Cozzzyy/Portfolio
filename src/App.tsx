import './App.css'
import {NavigationBar} from "./components/NavigationBar.tsx";
import Particles from "./components/Particles.tsx";
import {AboutMe} from "./components/Introduction/AboutMe.tsx";
import {ProjectsSection} from "./components/Projects/ProjectsSection.tsx";
import {SideBarContact} from "./components/Contact/SideBarContact.tsx";

function App() {

    return (
        <>
            <Particles/>
            <NavigationBar/>
            <SideBarContact/>
            <div className={"flex flex-col items-center justify-center gap-15 font-sans"}>
                <AboutMe id={"about-me"}/>
                <ProjectsSection id={"projects"}/>
            </div>
        </>
    )
}

export default App