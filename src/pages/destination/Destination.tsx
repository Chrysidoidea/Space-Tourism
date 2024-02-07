import React, { useEffect } from "react";
import { pageHeading } from "../../utils/database";
import { PageHeading } from "../../styles/globalStyles";
import { Section } from "../../styles/globalStyles";
import {
  DestinationName,
  DestinationDescribe,
  DestinationDetails,
} from "../../styles/pages/destination/destinationStyles";
import { BreakLine } from "../../styles/globalStyles";
import { DetailsLabelValue } from "../../styles/globalStyles";
import { DestinationImg } from "../../styles/pages/destination/destinationStyles";
import { SectionNavigator } from "../../components/sectionNavigator/SectionNavigator";
import { destinations } from "../../utils/database";
import { DestinationTypes } from "../../utils/database";
import { useLocation, useNavigate } from "react-router-dom";
import MainComponentPage from "../mainComponent/mainComponent";

type DestinationProps = {
  data?: DestinationTypes[];
};
const Destination: React.FC<DestinationProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/destination") {
      navigate("/destination/moon");
    }
  }, [location.pathname, navigate]);

  const locationTransform = (location: string) => {
    if (
      [
        "/destination/moon",
        "/destination/europa",
        "/destination/mars",
        "/destination/titan",
      ].includes(location)
    ) {
      return location.match(/\/([^\/]+)$/)?.[1];
    } else {
      return "moon";
    }
  };

  // check our current location and return the matching destination description data object
  const matchingDestination = () => {
    if (
      [
        "/destination/moon",
        "/destination/europa",
        "/destination/mars",
        "/destination/titan",
      ].includes(location.pathname)
    ) {
      const destinationObject = destinations.filter(
        (item) => item.name === locationTransform(location.pathname)
      )[0];
      return destinationObject;
    } else {
      return destinations[0];
    }
  };

  return (
    <MainComponentPage>

      <Section>
        <PageHeading>
          <span>{pageHeading[0].place}</span>
          {pageHeading[0].title}
        </PageHeading>
        <DestinationImg
          src={`./../assets/img/destination/image-${locationTransform(
            location.pathname
          )}.webp`}
          alt={locationTransform(location.pathname)}
        />
      </Section>

      <Section>
        {/* //attention, section navigator is a FC */}
        <SectionNavigator data={destinations} />
        {/* //attention, section navigator is a FC */}
        <DestinationName>
          {locationTransform(location.pathname)}
        </DestinationName>
        <DestinationDescribe>
          {matchingDestination().description}
        </DestinationDescribe>
        <BreakLine />
        <DestinationDetails>
          <DetailsLabelValue>
            <div>avg. distance</div>
            <div>{matchingDestination().distance}</div>
          </DetailsLabelValue>
          <DetailsLabelValue>
            <div>est. travel time</div>
            <div>{matchingDestination().travel}</div>
          </DetailsLabelValue>
        </DestinationDetails>
      </Section>
      
    </MainComponentPage>
  );
};

export default Destination;
