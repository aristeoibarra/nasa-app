import IApod from "types/ApodTypes";
import { ICategories, IEvents } from "types/EvenTrackerTypes";
import INearEarthAsteroids from "types/NearEarthAsteroidsTypes";
import IMarsRoverPhotos from "types/MarsRoverPhotosTypes";
import { get } from "utils/axios";

const nasaApi = {
  async getApod(): Promise<IApod> {
    const res = await get("https://api.nasa.gov/planetary/apod");
    return res;
  },
  async getEventTrackerCategories(): Promise<ICategories> {
    const res = await get("https://eonet.gsfc.nasa.gov/api/v3/categories");
    return res;
  },
  async getAllEventsTrackerByCategory(category: string): Promise<IEvents> {
    const res = await get("https://eonet.gsfc.nasa.gov/api/v3/events", {
      category: category,
    });
    return res;
  },
  async getNearEarthAsteroids({
    start_date,
    end_date,
  }: {
    start_date: string;
    end_date: string;
  }): Promise<INearEarthAsteroids> {
    const res = await get("https://api.nasa.gov/neo/rest/v1/feed", {
      start_date: start_date,
      end_date: end_date,
    });
    return res;
  },

  async getMarsRoverPhotos({
    rover,
    camera,
  }: {
    rover: string;
    camera: string;
  }): Promise<IMarsRoverPhotos> {
    const res = await get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
      {
        camera: camera,
        sol: 44,
      }
    );
    return res;
  },
};

export default nasaApi;
