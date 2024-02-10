import styled from "styled-components";
import { UppercaseText } from "../../globalStyles";
import { device } from "../../../utils/windowUtils";

//frequently used styles
const baseFontSize = "1rem";
const baseLineHeight = "1.5rem";

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${device.desktop}) {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateY(55%) translateX(-55%);
    align-items: flex-start;
  }
`;


export const TechnologyHeading = styled.h3`
  ${UppercaseText}
  font-family: "Barlow Condensed", sans-serif;
  margin-top: 1.5rem;
  margin-bottom: 0;
  font-size: ${baseFontSize};
  letter-spacing: 0.1rem;

  @media (${device.tablet}) {
    font-size: 1.2rem;
    margin-top: 2.5rem;
  }

  @media (${device.desktop}) {
    margin-top: 0;
  }
`;

export const TechnologyName = styled.h2`
  ${UppercaseText};
  font-family: "Bellefair", sans-serif;
  margin-top: 0.7rem;
  margin-bottom: 0;

  @media (${device.tablet}) {
    font-size: 2.5rem;
  }

  @media (${device.desktop}) {
    font-size: 3.5rem;
  }
`;

export const TechnologyInfo = styled.p`
  margin: 0;
  text-align: center;
  font-family: "Barlow", sans-serif;
  font-weight: 200;
  font-size: 0.9rem;
  line-height: ${baseLineHeight};
  margin-top: 1.2rem;

  @media (${device.tablet}) {
    margin-top: 1.4rem;
    line-height: 1.7rem;
    font-size: 1rem;
    width: 63%;
  }

  @media (${device.desktop}) {
    text-align: left;
    line-height: 2rem;
    width: 60%
  }
`;

export const TechnologyImg = styled.img`
  height: 10.5rem;

  @media (${device.tablet}) {
    height: 19.3rem;
    margin-top: 1.4rem;
  }

  @media (${device.desktop}) {
    position: absolute;
    height: 33rem;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TechnologySlider = styled.ul`
  margin: 0 auto;
  margin-top: 2rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (${device.desktop}) {
    position: absolute;
    justify-content: center;
    top: 50%;
    transform: translateY(-55%);
    left: clamp(10rem, 2vw, 20rem);
    flex-direction: column;
    gap: 1.6rem;
  }

  & > * {
    display: grid;
    text-decoration: none;
    place-items: center;
    height: 2.3rem;
    width: 2.3rem;
    border-radius: 50%;
    color: white;
    border: 1px solid var(--color-night-gray);

    @media (${device.tablet}) {
      margin-top: 1.9rem;
      height: 3.6rem;
      width: 3.6rem;
      font-size: 1.5rem;
    }

    @media (${device.desktop}) {
      margin-top: 0;
      height: 5rem;
      width: 5rem;
      font-size: 2rem;
    }

    &:hover {
      border-color: var(--color-gray);
    }
  }

  & > .active {
    background-color: var(--color-white);
    color: black;
  }
`;