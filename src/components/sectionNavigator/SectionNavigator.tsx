import React from "react";
import {
  SectionNavigatorNav,
  SectionNavLink,
} from "../../styles/components/sectionNavigator/sectionNavigatorStyles";
import { DestinationTypes } from "../../utils/database";

type SectionNavigatorProps = {
  data: DestinationTypes[];
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
