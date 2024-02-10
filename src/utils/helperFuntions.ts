"use strict";
import { Location } from "react-router-dom";
import { GENERIC_PAGE_TYPE } from "./database";

//Navigate to a new path based on the current URL and provided parameters.
export const locationTransform = (
  location: string,
  routeLinks: string[],
  URL: string
) => {
  if (routeLinks.includes(location)) {
    /*
     Uses regular expression to extract the last part of the 'location' string after the last forward slash.
     If there is a match, it returns the captured group, otherwise it returns undefined.
    */
    return location.match(/\/([^\/]+)$/)?.[1];
  } else {
    return URL;
  }
};

export const matchPageUrl = (
  routeLinks: string[],
  location: Location,
  url: string,
  config: GENERIC_PAGE_TYPE
) => {
  // Find the page data corresponding to the current URL
  const getPageData = config.find((item) => {
    // Compare the URL of each item in the configuration with the current location transformed based on provided parameters
    return item.url === locationTransform(location.pathname, routeLinks, url);
  });

  // If page data is found for the current URL
  if (getPageData) {
    // Return the page data
    return getPageData;
  } else {
    // If no page data is found, log a message indicating that nothing was found
    throw new Error("nothing here");
    // return getPageData;
  }
};
