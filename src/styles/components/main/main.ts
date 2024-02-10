import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../utils/windowUtils";

type MainType = {
  $mobileBackground: string;
  $tabletBackground: string;
  $desktopBackground: string;
};
const Main = styled(motion.div)<MainType>`
  position: absolute;
  background-image: url(${(props) => props.$mobileBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  inset: 0;
  padding-top: 5.5rem;
  display: flex;
  flex-direction: column;
  z-index: -1;

  @media (${device.tablet}) {
    background-image: url(${(props) => props.$tabletBackground});
  }

  @media (${device.desktop}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: url(${(props) => props.$desktopBackground});
  }
`;

export default Main;
