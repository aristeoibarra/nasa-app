import { useState, useEffect } from "react";
import nasaApi from "services/nasaApi";
import IApod from "types/ApodTypes";

export default function useApod() {
  const [apodData, setApodData] = useState<IApod>({} as IApod);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getApod() {
      setLoading(true);
      const data = await nasaApi.getApod();
      setApodData(data);
      setLoading(false);
    }
    getApod();
  }, []);

  return {
    apodData,
    loading,
  };
}
