import './App.css';

import {NavigationBar} from "./components/NavigationBar/NavigationBar.tsx";
import Particles from "./components/Particles.tsx";

function App() {
    return (
        <div className="App">
            <Particles/>
            <NavigationBar />
        </div>
    );
}

export default App;