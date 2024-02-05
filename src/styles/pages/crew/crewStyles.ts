import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../../utils/windowUtils";

export const CrewImg = styled.img`
  height: 14rem;
  margin-left: 1rem;
  transition: 0.5s;

  &:hover {
    scale: 1.005;
  }

  @media (${device.tablet}) {
    height: 35rem;
    position: absolute;
    bottom: -9.5rem;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      scale: 1;
    }
  }

  @media (${device.desktop}) {
    height: 44rem;
    left: 53%;
    bottom: 0;
    transform: none;
  }
`;

export const SliderNav = styled.ul`
  margin-top: 2rem;
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0;

  @media (${device.tablet}) {
    order: 1;
  }

  @media (${device.desktop}) {
    position: absolute;
    left: clamp(10rem, 13vw, 120rem);
    bottom: 5rem;
    gap: 1.5rem;
  }

  & > * {
    height: 0.7rem;
    width: 0.7rem;
    background-color: #5b5b5b;
    border-radius: 50%;

    @media (${device.desktop}) {
      height: 1rem;
      width: 1rem;
    }
  }
  & > *:hover {
    background-color: #c2c2c2;
  }
  & > *:active {
    background-color: #ffffff;
  }

  & > .active {
    background-color: white;
  }
`;

export const CrewContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (${device.desktop}) {
    position: absolute;
    width: 40rem;
    bottom: 41%;
    transform: translateY(50%) translateX(-50%);
    left: 34%;
    align-items: flex-start;
  }
`;

export const CrewHeading = styled.h3`
  font-family: "Bellefair", sans-serif;
  text-align: center;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 0;

  @media (${device.tablet}) {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }

  @media (${device.desktop}) {
    font-size: 2rem;
  }
`;
export const CrewMemberName = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-family: "Bellefair", sans-serif;
  margin-top: 0.3rem;
  font-weight: 400;

  @media (${device.tablet}) {
    font-size: 2.5rem;
  }

  @media (${device.desktop}) {
    margin-top: 1rem;
    font-size: 3.5rem;
  }
`;
export const CrewMemberRole = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-family: "Barlow", sans-serif;
  line-height: 1.5rem;
  font-size: 0.9rem;

  @media (${device.tablet}) {
    width: 65%;
    font-size: 1rem;
    align-self: center;
  }

  @media (${device.desktop}) {
    width: 70%;
    align-self: normal;
    text-align: left;
    line-height: 2rem;
    font-size: 1.1rem;
  }
`;

export const CrewNavLink = styled(NavLink)``;
