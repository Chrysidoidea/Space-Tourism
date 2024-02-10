import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import MainComponent from "../../components/main/Main";
import { BACKGROUND_DATABASE } from "../../utils/database";
import { Section } from "../../styles/globalStyles";
import { PageHeading } from "../../styles/globalStyles";
import { matchPageUrl } from "../../utils/helperFuntions";
import {
  PAGE_HEADING_DATABASE,
  TECH_DATABASE,
  GENERIC_PAGE_TYPE,
  ROUTE_LINKS_DATABASE,
} from "../../utils/database";
import {
  TechnologyImg,
  TechnologySlider,
  TechnologyHeading,
  TechnologyName,
  TechnologyInfo,
  TechnologyContainer,
} from "../../styles/pages/technology/technologyStyles";

const Technology: React.FC<GENERIC_PAGE_TYPE> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    //automatically navigate to first technology
    if (location.pathname === "/technology") {
      navigate("/technology/launch-vehicle");
    }
  }, [location.pathname, navigate]);

  const urlHandler = () => {
    if (window.innerWidth > 768) {
      return (
        matchPageUrl(
          ROUTE_LINKS_DATABASE.technology,
          location,
          "launch-vehicle",
          TECH_DATABASE
        ) as { images: { portrait: string } }
      ).images.portrait;
    }
    return (
      matchPageUrl(
        ROUTE_LINKS_DATABASE.technology,
        location,
        "launch-vehicle",
        TECH_DATABASE
      ) as { images: { landscape: string } }
    ).images.landscape;
  };
  //approach below, change applied only at first render, if you make dynamic width changes this will not re-render new picture

  return (
    <MainComponent 
      mobileBackground={BACKGROUND_DATABASE.technology.mobile}
      tabletBackground={BACKGROUND_DATABASE.technology.tablet}
      desktopBackground={BACKGROUND_DATABASE.technology.desktop}
      >
      {" "}
      <Section>
        <PageHeading>
          <span>{PAGE_HEADING_DATABASE[2].place}</span>
          {PAGE_HEADING_DATABASE[2].title}
        </PageHeading>
        <TechnologyImg src={urlHandler()} alt="tech" />
      </Section>
      <TechnologySlider>
        {TECH_DATABASE.map((item) => {
          return (
            <NavLink to={`/technology/${item.url}`} key={item.name}>
              {item.position}
            </NavLink>
          );
        })}
      </TechnologySlider>
      <Section $Nói_albínói>
        <TechnologyContainer>
          <TechnologyHeading>THE TERMINOLOGY…</TechnologyHeading>
          <TechnologyName>
            {
              (
                matchPageUrl(
                  ROUTE_LINKS_DATABASE.technology,
                  location,
                  "launch-vehicle",
                  TECH_DATABASE
                ) as { name: string }
              ).name
            }
          </TechnologyName>
          <TechnologyInfo>
            {
              (
                matchPageUrl(
                  ROUTE_LINKS_DATABASE.technology,
                  location,
                  "launch-vehicle",
                  TECH_DATABASE
                ) as { info: string }
              ).info
            }
          </TechnologyInfo>
        </TechnologyContainer>
      </Section>
    </MainComponent>
  );
};

export default Technology;
