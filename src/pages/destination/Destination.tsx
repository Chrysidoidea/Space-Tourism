import React from "react";
// import { Main } from "../../styles/pages/destination/destinationStyles";
import MainComponent from "../../components/main/main";
import { mainBackgroundDatabase } from "../../utils/database";

const Destination: React.FC = () => {
  return (
    <MainComponent
      mobileBackground={mainBackgroundDatabase.destination.mobile}
      tabletBackground={mainBackgroundDatabase.destination.tablet}
      desktopBackground={mainBackgroundDatabase.destination.desktop}
    ><div></div></MainComponent>
  );
};

export default Destination;
