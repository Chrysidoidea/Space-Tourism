import React, { useEffect } from "react";
import MainComponent from "../../components/main/Main";
import { Section } from "../../styles/globalStyles";
import { PageHeading } from "../../styles/globalStyles";
import { PAGE_HEADING_DATABASE } from "../../utils/database";
import { BACKGROUND_DATABASE } from "../../utils/database";
import { NavLink } from "react-router-dom";
import { GENERIC_PAGE_TYPE, ROUTE_LINKS_DATABASE } from "../../utils/database";
import {
  CrewContainer,
  CrewImg,
  SliderNav,
  CrewHeading,
  CrewMemberName,
  CrewMemberRole,
} from "../../styles/pages/crew/crewStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { CREW_DATABASE } from "../../utils/database";
import { BreakLine } from "../../styles/globalStyles";
import { matchPageUrl } from "../../utils/helperFuntions";
const Crew: React.FC<GENERIC_PAGE_TYPE> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/crew") {
      navigate("/crew/commander");
    }
  }, [location.pathname, navigate]);

  return (
    <MainComponent 
      mobileBackground={BACKGROUND_DATABASE.crew.mobile}
      tabletBackground={BACKGROUND_DATABASE.crew.tablet}
      desktopBackground={BACKGROUND_DATABASE.crew.desktop}
    >
      <Section>
        <PageHeading>
          <span>{PAGE_HEADING_DATABASE[1].place}</span>
          {PAGE_HEADING_DATABASE[1].title}
        </PageHeading>{" "}
        <CrewImg
          src={`${
            (
              matchPageUrl(
                ROUTE_LINKS_DATABASE.crew,
                location,
                "commander",
                CREW_DATABASE
              ) as { images: { webp: string } }
            ).images.webp
          }`}
          alt="person"
        />
        <BreakLine $crew="Patience you must have my young Padawan." />
      </Section>

      <SliderNav>
        {CREW_DATABASE.map((item) => {
          return <NavLink to={`${item.url}`} key={item.url}></NavLink>;
        })}
      </SliderNav>

      <Section $Nói_albínói>
        <CrewContainer>
          <CrewHeading>
            {
              (
                matchPageUrl(
                  ROUTE_LINKS_DATABASE.crew,
                  location,
                  "commander",
                  CREW_DATABASE
                ) as { role: string }
              ).role
            }
          </CrewHeading>
          <CrewMemberName>
            {
              (
                matchPageUrl(
                  ROUTE_LINKS_DATABASE.crew,
                  location,
                  "commander",
                  CREW_DATABASE
                ) as { name: string }
              ).name
            }
          </CrewMemberName>
          <CrewMemberRole>
            {
              (
                matchPageUrl(
                  ROUTE_LINKS_DATABASE.crew,
                  location,
                  "commander",
                  CREW_DATABASE
                ) as { bio: string }
              ).bio
            }
          </CrewMemberRole>
        </CrewContainer>
      </Section>
    </MainComponent>
  );
};

export default Crew;
