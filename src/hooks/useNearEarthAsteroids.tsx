import { useState, useEffect } from "react";
import nasaApi from "services/nasaApi";
import { IObject } from "types/NearEarthAsteroidsTypes";

export default function useNearEarthAsteroids() {
  const [startDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [endDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [loading, setLoading] = useState<boolean>(false);

  const [asteroidsData, setAsteroidsData] = useState<IObject[]>(
    [] as IObject[]
  );

  const getAsteroids = async () => {
    setLoading(true);
    const data = await nasaApi.getNearEarthAsteroids({
      start_date: startDate,
      end_date: endDate,
    });
    setAsteroidsData(data.near_earth_objects[endDate] as IObject[]);
    setLoading(false);
  };

  useEffect(() => {
    getAsteroids();
  }, [startDate, endDate]);

  return {
    asteroidsData,
    loading,
  };
}
