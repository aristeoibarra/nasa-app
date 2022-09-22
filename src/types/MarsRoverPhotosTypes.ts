interface IMarsRoverPhotos {
  photos: Photo[];
}
export default IMarsRoverPhotos;

interface Photo {
  rover: Rover;
  sol: number;
  camera: Camera;
  earth_date: string;
  id: number;
  img_src: string;
}

interface Camera {
  rover_id: number;
  id: number;
  full_name: string;
  name: string;
}

interface Rover {
  status: string;
  launch_date: string;
  landing_date: string;
  id: number;
  name: string;
}
