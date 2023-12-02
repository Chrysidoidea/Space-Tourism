import React from "react";
import MainComponent from "../../components/main/main";
import { mainBackgroundDatabase } from "../../utils/database";
import { Section } from "../../styles/globalStyles";
import { Header1, Header5, Paragraph, Button } from "../../styles/globalStyles";

const Home: React.FC = () => {
  return (
    <MainComponent
      mobileBackground={mainBackgroundDatabase.home.mobile}
      tabletBackground={mainBackgroundDatabase.home.tablet}
      desktopBackground={mainBackgroundDatabase.home.desktop}
    >
      <Section>
        <Header5>so, you want to travel to</Header5>
        <Header1>space</Header1>
        <Paragraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Paragraph>
      </Section>
      <Section>
        <Button>explore</Button>
      </Section>
    </MainComponent>
  );
};

export default Home;
