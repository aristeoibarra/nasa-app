interface INearEarthAsteroids {
  links: Links;
  element_count: number;
  near_earth_objects: Nearearthobjects;
}

export default INearEarthAsteroids;

export interface Nearearthobjects {
  [key: string]: IObject[];
}

export interface IObject {
  links: Links2;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: Estimateddiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Closeapproachdatum[];
  is_sentry_object: boolean;
}

interface Closeapproachdatum {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: Relativevelocity;
  miss_distance: Missdistance;
  orbiting_body: string;
}

interface Missdistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

interface Relativevelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

interface Estimateddiameter {
  kilometers: Kilometers;
  meters: Kilometers;
  miles: Kilometers;
  feet: Kilometers;
}

interface Kilometers {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface Links2 {
  self: string;
}

interface Links {
  next: string;
  previous: string;
  self: string;
}
