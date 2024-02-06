import styled, { keyframes } from "styled-components";
import { UppercaseText } from "../../globalStyles";
import { device } from "../../../utils/windowUtils";

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
  animation: ${slightWiggle} 10s infinite;
  margin-bottom: 1.6rem;

  &:hover {
    scale: 1.01;
    filter: grayscale(0) drop-shadow(0 0 0.2rem rgb(14, 18, 30));
  }

  @media (${device.tablet}) {
    margin-top: 1.9rem;
    height: 19rem;
  }

  @media (${device.desktop}) {
    height: 28rem;
    margin-left: 13rem;
    margin-top: 4rem;
  }
`;

export const DestinationName = styled.h1`
  ${UppercaseText};
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  margin-top: 2rem;
  font-size: 3.9rem;

  @media (${device.tablet}) {
    margin-top: 3rem;
    font-size: 5.3rem;
  }
  @media (${device.desktop}) {
    font-size: 6.5rem;
    margin-left: 7rem;
    align-self: flex-start;
  }
`;
export const DestinationDescribe = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 0.96rem;
  text-align: center;
  line-height: 1.75;
  font-weight: 200;
  letter-spacing: 0.01rem;
  margin-top: 0.2rem;

  @media (${device.tablet}) {
    width: 80%;
  }
  @media (${device.desktop}) {
    align-self: flex-start;
    text-align: left;
    margin-top: 1.5rem;
    margin-left: 7rem;
    font-size: 1.1rem;
    width: 67%;
  }
`;

export const DestinationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  margin-top: 1.8rem;
  margin-bottom: 1.3rem;

  @media (${device.tablet}) {
    gap: 6rem;
    flex-direction: row;
    margin-top: 2.5rem;
  }

  @media (${device.desktop}) {
    width: 100%;
    gap: 5rem;
    margin-left: 15rem;
  }
`;