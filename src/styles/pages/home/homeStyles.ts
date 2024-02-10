import styled from "styled-components";
import { device } from "../../../utils/windowUtils";
import { UppercaseText } from "../../globalStyles";

export const HomeHeading = styled.h5`
  ${UppercaseText};
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 0.16rem;
  font-size: clamp(1rem, 3vw, 2.1rem);
  margin-bottom: 1.2rem;

  @media (${device.tablet}) {
    margin-top: 7rem;
  }

  @media (${device.desktop}) {
    width: 100%;
    text-align: left;
    letter-spacing: 0.35rem;
    margin-bottom: 1.5rem;
    margin-top: 12.3rem;
  }
`;

export const SectionName = styled.h1`
  ${UppercaseText};
  font-family: "Bellefair", sans-serif;
  font-size: clamp(5rem, 20vw, 9rem);
  font-weight: 400;
  margin-bottom: 0.4rem;

  @media (${device.tablet}) {
    margin-bottom: 0.1rem;
  }
  @media (${device.desktop}) {
    width: 100%;
    text-align: left;
    letter-spacing: 0.01rem;
    margin-bottom: 1rem;
  }
`;

export const SectionParagraph = styled.p`
  font-family: "Barlow", sans-serif;
  text-align: center;
  line-height: 1.75;
  font-size: clamp(0.92rem, 2vw, 1.1rem);
  width: clamp(21rem, 55vw, 30rem);
  margin-bottom: 5rem;

  @media (${device.tablet}) {
    margin-bottom: 10rem;
  }

  @media (${device.desktop}) {
    margin-bottom: 0;
    text-align: left;
  }
`;

export const CircleOfWOrlds = styled.button`
  ${UppercaseText}
  position: relative;
  font-family: "Bellefair", sans-serif;
  height: clamp(9.5rem, 31vw, 17.2rem);
  width: clamp(9.5rem, 31vw, 17.2rem);
  background-color: white;
  border-radius: 50%;
  font-size: clamp(1.2rem, 5vw, 2rem);
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0;
    left: 0%;
    right: 0;
    border-radius: 50%;
    background-color: #97979732;
    backdrop-filter: blur(0.2rem);
    z-index: -1;
    transition: 0.1s;
  }
  &:hover::before {
    transform: scale(1.5);
  }

  @media (${device.desktop}) {
    margin-top: 19rem;
    margin-left: 1.3rem;

    &:active::before {
      transform: scale(1.49);
    }
  }
`;
