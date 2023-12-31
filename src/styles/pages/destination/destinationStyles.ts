import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundMobile from "../../../assets/background/destination/background-destination-mobile.jpg";
import backgroundTablet from "../../../assets/background/destination/background-destination-tablet.jpg";
import backgroundDesktop from "../../../assets/background/destination/background-destination-desktop.jpg";
import { device } from "../../../utils/windowUtils";



export const Main = styled(motion.div)`
    position: absolute;
    background-image: url(${backgroundMobile});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 5.5rem;
    display: flex;
    flex-direction: column;
    z-index: -1;

    @media (${device.tablet}) {
    padding-top: 10.3rem;
    background-image: url(${backgroundTablet});
  }

  @media (${device.desktop}) {
    background-image: url(${backgroundDesktop});
    padding-top: 12rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;