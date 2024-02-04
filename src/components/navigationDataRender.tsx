import { MenuSpan } from "../styles/components/navigationStyles";
import {
  NonNumerableNavigationItem,
  NumerableNavigationItem,
  NavLinkStyled,
} from "../styles/components/navigationStyles";
// import { NavLink } from "react-router-dom";

type NavigationItemType = { place: string; title: string; link: string };

// const linkFilter = (link: string) => {
//   if (link === "destination") {
//     return "destination/moon";
//   } else return link
// }

//render numerable nav items for mobile and desktop screens
export const numerableDataRenderer = (data: NavigationItemType[]) => {
  return data.map((item) => (
    <NavLinkStyled to={`/${item.link}`} key={item.place} >
      <NumerableNavigationItem>
        <MenuSpan>{item.place}</MenuSpan>
        {item.title}
      </NumerableNavigationItem>
    </NavLinkStyled>
  ));
};
//render non numerable nav items for tablet screens
export const nonNumerableDataRenderer = (data: NavigationItemType[]) => {
  return data.map((item) => (
    <NavLinkStyled to={`/${item.link}`} key={item.place}>
      <NonNumerableNavigationItem key={item.place}>
        {item.title}
      </NonNumerableNavigationItem>
    </NavLinkStyled>
  ));
};
