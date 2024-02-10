import React from "react";
import MainComponent from "../../components/main/Main";
import { BACKGROUND_DATABASE } from "../../utils/database";

type MainComponentPageProps = {
   children: React.ReactNode,
};
const MainComponentPage: React.FC<MainComponentPageProps> = ({children}) => {
  return (
    <MainComponent
      mobileBackground={BACKGROUND_DATABASE.destination.mobile}
      tabletBackground={BACKGROUND_DATABASE.destination.tablet}
      desktopBackground={BACKGROUND_DATABASE.destination.desktop}
    >
      {children}
    </MainComponent>
  );
};

export default MainComponentPage;
