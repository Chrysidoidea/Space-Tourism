import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigationData } from "../utils/database";
import { 
  numerableDataRenderer,
  nonNumerableDataRenderer,
 } from "./navigationDataRender";
import { device } from "../utils/windowUtils";
import throttle from "../utils/throttle";

import {
  Logo,
  NavStyled,
  UlDropdown,
  UlDefaut,
  Hamburger,
  // MenuSpan,
  // MobileMenu,
  // StandardMenu,
} from "../styles/components/navigationStyles";
import {
  hamburgerVariantsFirstChild,
  hamburgerVariantsLastChild,
  hamburgerVariantsSecondChild,
  UlVariants,
} from "../styles/components/navigationAnima";
const Navigation: React.FC = () => {
  //check screen size, if 768px width return true, else false.
  const toggleMenuType = () => {
    //creating a breackpoints to achieve desired styles depends of screen size
    const mobileBreakpoint = Number.parseInt(device.tablet.match(/\d+/)![0]);
    const tabletBreakpoint = Number.parseInt(device.desktop.match(/\d+/)![0]);

  if (window.innerWidth < mobileBreakpoint) {
    return "mobile";
  } else if (window.innerWidth < tabletBreakpoint) {
    return "tablet";
  } else {
    return "desktop";
  }
}

  const [menuType, setMenuType] = useState<string>(toggleMenuType());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleResize = () => {
    setMenuType(toggleMenuType());
  };

  const throttledHandleResize = throttle(handleResize, 100);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, [throttledHandleResize]);

  return (
    <NavStyled>
      <Logo />
      {/*render data depends of screen size, if 380 or less, show this option */}
      {menuType === 'mobile' && (
        <>
          <Hamburger onClick={handleClick}>
            <motion.div
              id="bar1"
              className="bar"
              initial={false}
              animate={isOpen ? "collapse" : "initial"}
              variants={hamburgerVariantsFirstChild}
            ></motion.div>
            <motion.div
              id="bar2"
              className="bar"
              initial={false}
              animate={isOpen ? "collapse" : "initial"}
              variants={hamburgerVariantsSecondChild}
            ></motion.div>
            <motion.div
              id="bar3"
              className="bar"
              initial={false}
              animate={isOpen ? "collapse" : "initial"}
              variants={hamburgerVariantsLastChild}
            ></motion.div>
          </Hamburger>

          <UlDropdown
            initial={false}
            animate={isOpen ? "initial" : "collapse"}
            variants={UlVariants}
          >
            {numerableDataRenderer(navigationData)}
          </UlDropdown>
        </>
      )} 
      
      { menuType === 'tablet' && (
        <>
          {/*render this if screen width more than 768px*/}
          <UlDefaut>{nonNumerableDataRenderer(navigationData)}</UlDefaut>
        </>
      )}
      { menuType === 'desktop' && (
        <>
          {/*render this if screen width more than 1440px*/}
          <UlDefaut>{numerableDataRenderer(navigationData)}</UlDefaut>
        </>
      )}
    </NavStyled>
  );
};

export default Navigation;
