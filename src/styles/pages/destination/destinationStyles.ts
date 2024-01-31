import styled, { keyframes } from "styled-components";
import { UppercaseText } from "../../globalStyles";
// import { motion } from "framer-motion";
// import backgroundMobile from "../../../assets/background/destination/background-destination-mobile.jpg";
// import backgroundTablet from "../../../assets/background/destination/background-destination-tablet.jpg";
// import backgroundDesktop from "../../../assets/background/destination/background-destination-desktop.jpg";
// import { device } from "../../../utils/windowUtils";

//generating random rotation degree
const generateRandomRotation = () => Math.floor(Math.random() * 2) + 1;

const slightWiggle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(${generateRandomRotation()}deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
export const DestinationImg = styled.img`
  height: 12rem;
  transition: 0.5s;
  filter: grayscale(20%) drop-shadow(0 0 1rem rgb(14, 18, 30));
  /* filter: ; */
  animation: ${slightWiggle} 10s infinite;
  margin-bottom: 1.6rem;

  &:hover {
    scale: 1.01;
    filter: grayscale(0) drop-shadow(0 0 0.2rem rgb(14, 18, 30));
  }
`;
export const DestinationHeading = styled.h3`
  ${UppercaseText};
  font-family: "Barlow Condensed", sans-serif;
  margin-top: 0.3rem;
  margin-bottom: 2.2rem;
  letter-spacing: 0.22rem;
  font-size: 1rem;

  & > span {
    color: grey;
    margin-right: 1rem;
  }
`;
export const DestinationName = styled.h1`
  ${UppercaseText};
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  margin-top: 2rem;
  font-size: 3.9rem;
`;
export const DestinationDescribe = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 0.96rem;
  text-align: center;
  line-height: 1.75;
  font-weight: 200;
  letter-spacing: 0.01rem;
  margin-top: 0.2rem;
`;
export const BreakLine = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  background-color: #97979747;
  margin-top: 1.3rem;
`;
export const DestinationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
// export const Main = styled(motion.div)`
//     position: absolute;
//     background-image: url(${backgroundMobile});
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     padding-top: 5.5rem;
//     display: flex;
//     flex-direction: column;
//     z-index: -1;

//     @media (${device.tablet}) {
//     padding-top: 10.3rem;
//     background-image: url(${backgroundTablet});
//   }

//   @media (${device.desktop}) {
//     background-image: url(${backgroundDesktop});
//     padding-top: 12rem;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//   }
// `;
