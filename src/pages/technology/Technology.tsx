import React, { useEffect } from "react";
import MainComponentPage from "../mainComponent/mainComponent";
import { Section } from "../../styles/globalStyles";
import { PageHeading } from "../../styles/globalStyles";
import { pageHeading, technology, Technology } from "../../utils/database";
import {
  TechnologyImg,
  TechnologySlider,
  TechnologyHeading,
  TechnologyName,
  TechnologyInfo,
  TechnologyContainer,
} from "../../styles/pages/technology/technologyStyles";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

type TechnologyProps = {
  data?: Technology[];
};
const Technology: React.FC<TechnologyProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/technology") {
      navigate("/technology/launch-vehicle");
    }
  }, [location.pathname, navigate]);

  const matchingTechnologies = () => {
    if (
      [
        "/technology/launch-vehicle",
        "/technology/spaceport",
        "/technology/space-capsule",
      ].includes(location.pathname)
    ) {
      return technology.filter(
        (item) => item.url === locationTransform(location.pathname)
      )[0];
    } else {
      return technology[0];
    }
  };
  const locationTransform = (location: string) => {
    if (
      [
        "/technology/launch-vehicle",
        "/technology/spaceport",
        "/technology/space-capsule",
      ].includes(location)
    ) {
      return location.match(/\/([^\/]+)$/)?.[1];
    } else {
      return "launch";
    }
  };
  //approach below, change applied only at first render, if you make dynamic width changes this will not re-render new picture
  const urlHandler = () => {
    if (window.innerWidth > 768) {
      return matchingTechnologies().images.portrait;
    }
    return matchingTechnologies().images.landscape;
  };

  return (
    <MainComponentPage>
      <Section>
        <PageHeading>
          <span>{pageHeading[2].place}</span>
          {pageHeading[2].title}
        </PageHeading>
        <TechnologyImg src={urlHandler()} alt="tech" />
      </Section>

      <TechnologySlider>
        {technology.map((item) => {
          return (
            <NavLink to={`/technology/${item.url}`} key={item.name}>
              {item.position}
            </NavLink>
          );
        })}
      </TechnologySlider>

      <Section $crew>
        <TechnologyContainer>
          <TechnologyHeading>THE TERMINOLOGY…</TechnologyHeading>
          <TechnologyName>{matchingTechnologies().name}</TechnologyName>
          <TechnologyInfo>{matchingTechnologies().info}</TechnologyInfo>
        </TechnologyContainer>
      </Section>
    </MainComponentPage>
  );
};

export default Technology;
