import React from "react";
import MainComponent from "../../components/main/main";
import { mainBackgroundDatabase } from "../../utils/database";

const Crew: React.FC = () => {
  return (
    <MainComponent
      mobileBackground={mainBackgroundDatabase.crew.mobile}
      tabletBackground={mainBackgroundDatabase.crew.tablet}
      desktopBackground={mainBackgroundDatabase.crew.desktop}
    >
      <div></div>
    </MainComponent>
  );
};

export default Crew;

