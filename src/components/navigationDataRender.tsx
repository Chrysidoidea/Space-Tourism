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
    <NavLinkStyled to={`/${item.link}`} onClick={isOpen} key={item.place}>
      <NumerableNavigationItem>
        <MenuSpan>{item.place}</MenuSpan>
        {item.title}
      </NumerableNavigationItem>
    </NavLinkStyled>
  ));
};
//render non numerable nav items for tablet screens
export const nonNumerableDataRenderer = (
  data: NavigationItemType[],
  isOpen?: () => void
) => {
  return data.map((item) => (
    <NavLinkStyled to={`/${item.link}`} onClick={isOpen} key={item.place}>
      <NonNumerableNavigationItem key={item.place}>
        {item.title}
      </NonNumerableNavigationItem>
    </NavLinkStyled>
  ));
};
