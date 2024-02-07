import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { navigationData } from "../utils/database";
import { useNavigate } from "react-router-dom";

import {
  numerableDataRenderer,
  nonNumerableDataRenderer,
} from "./NavigationDataRender";
import { device } from "../utils/windowUtils";
import throttle from "../utils/throttle";

import {
  Logo,
  NavStyled,
  UlDropdown,
  UlDefaut,
  Hamburger,
} from "../styles/components/navigationStyles";
import {
  hamburgerVariantsFirstChild,
  hamburgerVariantsLastChild,
  hamburgerVariantsSecondChild,
  UlVariants,
} from "../styles/components/navigationAnima";
const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const logoNavigation = () => {
    navigate("/");
  }
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
  };

  const [menuType, setMenuType] = useState<string>(toggleMenuType());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (innerWidth <= 375 && isOpen === true) {
      function handleClickOutside(event: MouseEvent) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          handleClick();
        }
      }

      document.body.addEventListener("click", handleClickOutside);

      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen]);

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
      <Logo onClick={logoNavigation}/>
      {/*render data depends of screen size, if 380 or less, show this option */}
      {menuType === "mobile" && (
        <>
          <Hamburger onClick={handleClick} ref={buttonRef}>
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
            ref={dropdownRef}
            initial={false}
            animate={isOpen ? "initial" : "collapse"}
            variants={UlVariants}
          >
            {numerableDataRenderer(navigationData, handleClick)}
          </UlDropdown>
        </>
      )}

      {menuType === "tablet" && (
        <>
          {/*render this if screen width more than 768px*/}
          <UlDefaut>{nonNumerableDataRenderer(navigationData)}</UlDefaut>
        </>
      )}
      {menuType === "desktop" && (
        <>
          {/*render this if screen width more than 1440px*/}
          <UlDefaut>{numerableDataRenderer(navigationData)}</UlDefaut>
        </>
      )}
    </NavStyled>
  );
};

export default Navigation;
