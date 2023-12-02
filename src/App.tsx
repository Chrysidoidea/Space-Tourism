import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
          <Route index Component={Home} />
          <Route path="/technology" Component={Technology} />
          <Route path="/crew" Component={Crew} />
          <Route path="/destination" Component={Destination} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
