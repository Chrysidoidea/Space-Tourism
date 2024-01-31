import React from "react";
// import { Main } from "../../styles/pages/destination/destinationStyles";
import MainComponent from "../../components/main/main";
import { mainBackgroundDatabase, pageHeading } from "../../utils/database";
import { Section } from "../../styles/globalStyles";
import {
  DestinationHeading,
  DestinationName,
  DestinationDescribe,
  BreakLine,
  DestinationDetails,
} from "../../styles/pages/destination/destinationStyles";
import { DetailsLabelValue } from "../../styles/globalStyles";
import { DestinationImg } from "../../styles/pages/destination/destinationStyles";
import { SectionNavigator } from "../../components/sectionNavigator/SectionNavigator";
// import { destination } from "../../utils/database";
import { destinations } from "../../utils/database";
import { Destination } from "../../utils/database";
import { useLocation } from "react-router-dom";

type DestinationProps = {
  data?: Destination[];
};
const Destination: React.FC<DestinationProps> = () => {
  const location = useLocation();

  //take the current location and return the name of it
  const locationTransform = (location: string) => {
    if (["/destination/moon", "/destination/europa", "/destination/mars", "/destination/titan"].includes(location)) {
      return location.match(/\/([^\/]+)$/)?.[1];
    } else {
      return "moon"
    }
  };

  //check our current location and return the matching destination description data object


  const matchingDestination = () => {
    if (["/destination/moon", "/destination/europa", "/destination/mars", "/destination/titan"].includes(location.pathname)) {
      const destinationObject = destinations.filter(
        (item) => item.name === locationTransform(location.pathname)
      )[0];

      return destinationObject;
    } else {
      return destinations[0]
    }
  }
  matchingDestination()

  return (
    <MainComponent
      mobileBackground={mainBackgroundDatabase.destination.mobile}
      tabletBackground={mainBackgroundDatabase.destination.tablet}
      desktopBackground={mainBackgroundDatabase.destination.desktop}
    >
      <Section>
        <DestinationHeading>
          <span>{pageHeading[0].place}</span>
          {pageHeading[0].title}
        </DestinationHeading>
        <DestinationImg
          src={`/assets/img/destination/image-${locationTransform(
            location.pathname
          )}.webp`}
          alt={`${locationTransform(location.pathname)}`}
        />
      </Section>

      <Section>
        <SectionNavigator data={destinations} />
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
    </MainComponent>
  );
};

export default Destination;
