import React from "react";
import MainComponent from "../../components/main/main";
import { mainBackgroundDatabase } from "../../utils/database";

type MainComponentPageProps = {
   children: React.ReactNode,
};
const MainComponentPage: React.FC<MainComponentPageProps> = ({children}) => {
  return (
    <MainComponent
      mobileBackground={mainBackgroundDatabase.destination.mobile}
      tabletBackground={mainBackgroundDatabase.destination.tablet}
      desktopBackground={mainBackgroundDatabase.destination.desktop}
    >
      {children}
    </MainComponent>
  );
};

export default MainComponentPage;
