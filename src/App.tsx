import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SectionNavigator } from "./components/sectionNavigator/SectionNavigator";
import { destination } from "./utils/database";

import Navigation from "./components/navigation";
import Home from "./pages/home/Home";
import Technology from "./pages/technology/Technology";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";

function App() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home/>} />
          <Route path="technology" element={<Technology/>} />
          <Route path="crew" element={<Crew/>} />
          <Route path="destination/*" element={<Destination/>}>
            </Route>        
          </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
