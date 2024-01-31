import React from "react";
import {
  SectionNavigatorNav,
  SectionNavLink,
} from "../../styles/components/sectionNavigator/sectionNavigatorStyles";
import { Destination } from "../../utils/database";

type SectionNavigatorProps = {
  data: Destination[];
};

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({ data }) => {
  return (
    <SectionNavigatorNav>
      {data.map((item) => {
        return (
          <SectionNavLink to={`${item.name}`} key={item.name}>
            <li>{item.name}</li>
          </SectionNavLink>
        );
      })}
    </SectionNavigatorNav>
  );
};
