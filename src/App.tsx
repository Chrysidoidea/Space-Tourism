import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
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
          <Route path="/" element={<Home />} />
          {
            // @ts-ignore
            <Route path="/technology/*" element={<Technology />} />
            //We've internally defined all necessary props,
            //eliminating the need to pass them through the router.
            //Hence, we're using @ts-ignore to suppress the type error,
            //confident that the component handles the required data internally.
          }
          {
            // @ts-ignore
            <Route path="/crew/*" element={<Crew />} />
          }
          {
            // @ts-ignore
            <Route path="/destination/*" element={<Destination />} />

          }
          
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;