import React from "react";
import Main from "../../styles/components/main/main";

const fadeInAnimation = {
  hidden: { opacity: 0, filter: "grayscale(100%) blur(10px)" },
  visible: { opacity: 1, filter: "grayscale(0%) blur(0px)" },
};

type MainComponentType = {
  children: React.ReactNode;
  mobileBackground: string;
  tabletBackground: string;
  desktopBackground: string;
};

const MainComponent: React.FC<MainComponentType> = ({
  children,
  mobileBackground,
  tabletBackground,
  desktopBackground,
}) => {
  return (
    <Main
      variants={fadeInAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, ease: "easeIn" }}
      $mobileBackground={mobileBackground}
      $tabletBackground={tabletBackground}
      $desktopBackground={desktopBackground}
    >
      {children}
    </Main>
  );
};

export default MainComponent;
