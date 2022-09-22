import { useState, useEffect } from "react";
import nasaApi from "services/nasaApi";
import IMarsRoverPhotos from "types/MarsRoverPhotosTypes";

export default function useMarsRoverPhotos() {
  const [rover, setRover] = useState<string>("");
  const [camera, setCamera] = useState<string>("");
  const [marsRoverPhotosData, setMarsRoverPhotosData] =
    useState<IMarsRoverPhotos>({} as IMarsRoverPhotos);
  const [loading, setLoading] = useState<boolean>(false);

  const getMarsRoverPhotos = async () => {
    setLoading(true);
    const data = await nasaApi.getMarsRoverPhotos({ rover, camera });
    setMarsRoverPhotosData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (rover !== "" && camera !== "") {
      getMarsRoverPhotos();
    }
  }, [rover, camera]);

  return {
    rover,
    setRover,
    camera,
    setCamera,
    marsRoverPhotosData,
    loading,
  };
}
