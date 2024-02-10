import React from "react";
import MainComponent from "../../components/main/Main";
import { BACKGROUND_DATABASE } from "../../utils/database";
import { Section } from "../../styles/globalStyles";
import { HomeHeading, SectionName,  SectionParagraph, CircleOfWOrlds} from "../../styles/pages/home/homeStyles";


const Home: React.FC = () => {
  return (
    <MainComponent
      mobileBackground={BACKGROUND_DATABASE.home.mobile}
      tabletBackground={BACKGROUND_DATABASE.home.tablet}
      desktopBackground={BACKGROUND_DATABASE.home.desktop}
    >
      <Section>
        <HomeHeading>so, you want to travel to</HomeHeading>
        <SectionName>space</SectionName>
        <SectionParagraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </SectionParagraph>
      </Section>
      <Section>
        <CircleOfWOrlds>explore</CircleOfWOrlds>
      </Section>
    </MainComponent>
  );
};

export default Home;
