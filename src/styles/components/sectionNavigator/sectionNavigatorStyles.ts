import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SectionNavigatorNav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-evenly;
  width: 90%;
  text-transform: uppercase;
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
    bottom: -.7rem;
    left: .1rem;
    transition: .3s;
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
