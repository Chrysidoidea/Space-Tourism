import React from "react";
import MainComponent from "../../components/main/main";
import { mainBackgroundDatabase } from "../../utils/database";

const Technology: React.FC = () => {
    return (
        <MainComponent
        mobileBackground={mainBackgroundDatabase.technology.mobile}
        tabletBackground={mainBackgroundDatabase.technology.tablet}
        desktopBackground={mainBackgroundDatabase.technology.desktop}
      ><div></div></MainComponent>
    );
};

export default Technology;