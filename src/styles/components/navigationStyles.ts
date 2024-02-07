import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { device } from "../../utils/windowUtils";

import logoImage from "/assets/logo.svg";

//main nav wrapper
export const NavStyled = styled.div`
  position: relative;
  height: 5rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1.2rem;
  backdrop-filter: none;

  @media (${device.tablet}) {
    height: 6rem;
    padding: 0 0 0 2.5rem;
  }
  @media (${device.desktop}) {
    padding: 2.5rem 0 0 3.5rem;
  }
`;
//app logo
export const Logo = styled.div`
  background: url(${logoImage}) no-repeat center;
  height: 3rem;
  width: 3rem;
  transform: scale(0.9);
  cursor: pointer;

  @media (${device.tablet}) {
    transform: scale(1);
  }
`;
//hamburger
export const Hamburger = styled(motion.button)`
  background: transparent;
  border: none;
  right: 1.3rem;
  top: 1.8rem;
  cursor: pointer;
  z-index: 10;

  & > .bar {
    width: 1.5rem;
    height: 0.2rem;
    margin: 0.35rem 0;
    background-color: white;
    transition: all 0.3s;
  }
`;
export const UlDefaut = styled(motion.ul)`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2.3rem;
  text-transform: uppercase;
  height: 100%;
  width: clamp(28.125rem, 58vw, 70rem);
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2.6px;
  background-color: rgba(255, 255, 255, 0.1);
  padding-left: 3rem;
  box-sizing: border-box;
  user-select: none;
  backdrop-filter: blur(5rem);

  @media (${device.desktop}) {
    padding-left: 8rem;
    font-size: 1rem;
    gap: 3rem;

    &::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 57%;
      left: -52%;
      background-color: #97979747;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
export const UlDropdown = styled(motion.ul)`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  letter-spacing: 2.7px;
  width: 68vw;
  padding-top: 7.5rem;
  padding-left: 2rem;
  top: calc(0% - 1rem);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5rem);
  -webkit-backdrop-filter: blur(5rem);
  height: 100vh;
  box-sizing: border-box;
  right: -68vw;
`;

const ButtonUnderline = css`
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: transparent;
    transition: 0.3s;
    bottom: 0;
  }
  &:hover::before {
    background-color: #979797;
  }
  &.active::before {
    background-color: #ffffff;
  }
`;

export const NumerableNavigationItem = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NonNumerableNavigationItem = styled.li`
  position: relative;
  cursor: pointer;
  display: grid;
  place-content: center;
  height: 100%;
`;

export const MenuSpan = styled.span`
  display: inline-block;
  font-weight: 700;
  color: white;
  width: 1.9rem;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: grid;
  text-decoration: none;
  color: white;

  @media (${device.tablet}) {
    place-content: center;
    height: 100%;
    ${ButtonUnderline}
  }
`;
