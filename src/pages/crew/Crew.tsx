import React from "react";
import MainComponent from "../../components/main/main";
import { mainBackgroundDatabase } from "../../utils/database";
import { Section } from "../../styles/globalStyles";
import { PageHeading } from "../../styles/globalStyles";
import { pageHeading } from "../../utils/database";
import { Crew } from "../../utils/database";
import MainComponentPage from "../mainComponent/mainComponent";

type CrewProps = {
  data?: Crew[];
};
const Crew: React.FC<CrewProps> = () => {

  return (
    <MainComponentPage>

      <Section>
        <PageHeading>
          <span>{pageHeading[1].place}</span>
          {pageHeading[1].title}
        </PageHeading>{" "}
      </Section>

      <Section>

      </Section>
      
    </MainComponentPage>
  );
};

export default Crew;
