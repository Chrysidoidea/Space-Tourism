import React, { useEffect, useMemo } from "react";
import {
  PAGE_HEADING_DATABASE,
  ROUTE_LINKS_DATABASE,
  BACKGROUND_DATABASE,
} from "../../utils/database";
import { PageHeading } from "../../styles/globalStyles";
import { Section } from "../../styles/globalStyles";
import {
  DestinationName,
  DestinationDescribe,
  DestinationDetails,
} from "../../styles/pages/destination/destinationStyles";
import { BreakLine } from "../../styles/globalStyles";
import { DetailsLabelValue } from "../../styles/globalStyles";
import {
  DestinationImg,
  DestinationNavigatorNav,
  DestinationNavLink,
} from "../../styles/pages/destination/destinationStyles";
import { DESTINATION_DATABASE } from "../../utils/database";
import { GENERIC_PAGE_TYPE } from "../../utils/database";
import { useLocation, useNavigate } from "react-router-dom";
import MainComponent from "../../components/main/Main";
import {
  locationTransform,
  matchPageUrl,
} from "../../utils/helperFuntions";

const Destination: React.FC<GENERIC_PAGE_TYPE> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/destination") {
      navigate("/destination/moon");
    }
  }, [location.pathname, navigate]);


  return (
    <MainComponent
      mobileBackground={BACKGROUND_DATABASE.destination.mobile}
      tabletBackground={BACKGROUND_DATABASE.destination.tablet}
      desktopBackground={BACKGROUND_DATABASE.destination.desktop}
    >
      <Section>
        <PageHeading>
          <span>{PAGE_HEADING_DATABASE[0].place}</span>
          {PAGE_HEADING_DATABASE[0].title}
        </PageHeading>
        <DestinationImg
          src={`./../assets/img/destination/image-${locationTransform(
            location.pathname,
            ROUTE_LINKS_DATABASE.destination,
            "moon"
          )}.webp`}
          alt={locationTransform(
            location.pathname,
            ROUTE_LINKS_DATABASE.destination,
            "moon"
          )}
        />
      </Section>
      <Section>
        <DestinationNavigatorNav>
          {DESTINATION_DATABASE.map((item) => {
            return (
              <DestinationNavLink to={`${item.url}`} key={item.url}>
                <li>{item.url}</li>
              </DestinationNavLink>
            );
          })}
        </DestinationNavigatorNav>
        <DestinationName>
          {locationTransform(
            location.pathname,
            ROUTE_LINKS_DATABASE.destination,
            "moon"
          )}
        </DestinationName>
        <DestinationDescribe>
          {
            (
              matchPageUrl(
                ROUTE_LINKS_DATABASE.destination,
                location,
                "moon",
                DESTINATION_DATABASE
              ) as { description: string }
            ).description
          }
        </DestinationDescribe>
        <BreakLine />
        <DestinationDetails>
          <DetailsLabelValue>
            <div>avg. distance</div>
            <div>
              {" "}
              {
                (
                  matchPageUrl(
                    ROUTE_LINKS_DATABASE.destination,
                    location,
                    "moon",
                    DESTINATION_DATABASE
                  ) as { distance: string }
                ).distance
              }
            </div>
          </DetailsLabelValue>
          <DetailsLabelValue>
            <div>est. travel time</div>
            <div>
              {" "}
              {
                (
                  matchPageUrl(
                    ROUTE_LINKS_DATABASE.destination,
                    location,
                    "moon",
                    DESTINATION_DATABASE
                  ) as { travel: string }
                ).travel
              }
            </div>
          </DetailsLabelValue>
        </DestinationDetails>
      </Section>
    </MainComponent>
  );
};

export default Destination;
