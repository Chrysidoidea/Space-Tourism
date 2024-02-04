import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../../utils/windowUtils";

export const SectionNavigatorNav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-evenly;
  width: 90%;
  text-transform: uppercase;

  @media (${device.tablet}) {
    margin-top: 1.7rem;
    width: 50%;
  }
  @media (${device.desktop}) {
    margin-top: 14.1rem;
    margin-left: 7.5rem;
    align-self: flex-start;
    gap: 2rem;
    justify-content: flex-start;
  }
`;

export const SectionNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-family: "Barlow Condensed", sans-serif;
  color: var(--light-periwinkle-blue);
  letter-spacing: 0.2rem;

  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 90%;
    background-color: transparent;
    bottom: -0.7rem;
    left: 0.1rem;
    transition: 0.3s;
  }

  &.active {
    color: white;
  }
  &:hover::before {
    background-color: grey;
  }
  &.active::before {
    background-color: white;
  }
`;
