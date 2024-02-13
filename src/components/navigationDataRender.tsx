import { MenuSpan } from "../styles/components/navigationStyles";
import {
  NonNumerableNavigationItem,
  NumerableNavigationItem,
  NavLinkStyled,
} from "../styles/components/navigationStyles";

type NavigationItemType = {
  place: string;
  title: string;
  link: string;
};


//render numerable nav items for mobile and desktop screens
export const numerableDataRenderer = (
  data: NavigationItemType[],
  isOpen?: () => void
) => {
  return data.map((item) => (
      <NumerableNavigationItem key={item.place}>
        <NavLinkStyled to={`/${item.link}`} onClick={isOpen} >
        <MenuSpan>{item.place}</MenuSpan>
        {item.title}
        </NavLinkStyled>
      </NumerableNavigationItem>
  ));
};
//render non numerable nav items for tablet screens
export const nonNumerableDataRenderer = (
  data: NavigationItemType[],
  isOpen?: () => void
) => {
  return data.map((item) => (
      <NonNumerableNavigationItem key={item.place}>
      <NavLinkStyled to={`/${item.link}`} onClick={isOpen}>
        {item.title}
        </NavLinkStyled>
      </NonNumerableNavigationItem>
  ));
};
