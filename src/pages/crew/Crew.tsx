import React from "react";
import { Section } from "../../styles/globalStyles";
import { PageHeading } from "../../styles/globalStyles";
import { pageHeading } from "../../utils/database";
import { NavLink } from "react-router-dom";
import { Crew } from "../../utils/database";
import { useEffect } from "react";
import MainComponentPage from "../mainComponent/mainComponent";
import {
  CrewContainer,
  CrewImg,
  SliderNav,
  CrewHeading,
  CrewMemberName,
  CrewMemberRole,
} from "../../styles/pages/crew/crewStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { crew } from "../../utils/database";
import { BreakLine } from "../../styles/globalStyles";

type CrewProps = {
  data?: Crew[];
};
const Crew: React.FC<CrewProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/crew") {
      navigate("/crew/commander");
    }
  }, [location.pathname, navigate]);

  const locationTransform = (location: string) => {
    if (
      [
        "/crew/commander",
        "/crew/engineer",
        "/crew/pilot",
        "/crew/mspecialist",
      ].includes(location)
    ) {
      return location.match(/\/([^\/]+)$/)?.[1];
    } else {
      return "commander";
    }
  };

  const matchingCrew = () => {
    if (
      [
        "/crew/commander",
        "/crew/engineer",
        "/crew/pilot",
        "/crew/mspecialist",
      ].includes(location.pathname)
    ) {
      return crew.filter(
        (item) => item.url === locationTransform(location.pathname)
      )[0];
    } else {
      return crew[0];
    }
  };

  return (
    <MainComponentPage>
      <Section>
        <PageHeading>
          <span>{pageHeading[1].place}</span>
          {pageHeading[1].title}
        </PageHeading>{" "}
        <CrewImg src={`${matchingCrew().images.webp}`} alt="person" />
        <BreakLine $crew="Patience you must have my young Padawan." />
      </Section>

      <SliderNav>
        {crew.map((item) => {
          return <NavLink to={`${item.url}`} key={item.url}></NavLink>;
        })}
      </SliderNav>

      <Section $crew>
        <CrewContainer>
          <CrewHeading>{matchingCrew().role}</CrewHeading>
          <CrewMemberName>{matchingCrew().name}</CrewMemberName>
          <CrewMemberRole>{matchingCrew().bio}</CrewMemberRole>
        </CrewContainer>
      </Section>
    </MainComponentPage>
  );
};

export default Crew;
