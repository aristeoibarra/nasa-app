import HomePage from "pages/Home";
import APODPage from "pages/APOD";
import EventTrackerPage from "pages/EventTracker";
import MarsRoverPhotosPage from "pages/MarsRoverPhotos";
import NearEarthAsteroidsPage from "pages/NearEarthAsteroids";
import {
  homeOutline,
  homeSharp,
  imageOutline,
  imageSharp,
  imagesOutline,
  imagesSharp,
  analyticsOutline,
  analyticsSharp,
} from "ionicons/icons";

const routes = [
  {
    title: "Home",
    path: "/",
    exact: true,
    component: HomePage,
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Astronomy picture",
    path: "/apod",
    exact: true,
    component: APODPage,
    iosIcon: imageOutline,
    mdIcon: imageSharp,
  },
  {
    title: "Event Tracker",
    path: "/event-tracker",
    exact: true,
    component: EventTrackerPage,
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
  },
  {
    title: "Near Earth Asteroids",
    path: "/near-earth-asteroids",
    exact: true,
    component: NearEarthAsteroidsPage,
    iosIcon: imagesOutline,
    mdIcon: imagesSharp,
  },
  {
    title: "Mars Rover Photos",
    path: "/mars-rover-photos",
    exact: true,
    component: MarsRoverPhotosPage,
    iosIcon: imagesOutline,
    mdIcon: imagesSharp,
  },
];

const getRouteByPath = (path: string) => {
  return routes.find((route) => route.path === path);
};

export default routes;
export { getRouteByPath };
