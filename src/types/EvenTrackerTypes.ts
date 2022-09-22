// categories
interface ICategory {
  id: string;
  title: string;
  link: string;
  description: string;
  layers: string;
}

export interface ICategories {
  title: string;
  description: string;
  link: string;
  categories: ICategory[];
}

// events
export interface IEvents {
  title: string;
  description: string;
  link: string;
  events: IEvent[];
}

interface IEvent {
  id: string;
  title: string;
  description?: any;
  link: string;
  closed?: any;
  categories: Category[];
  sources: Source[];
  geometry: Geometry[];
}

interface Geometry {
  magnitudeValue: number;
  magnitudeUnit: string;
  date: string;
  type: string;
  coordinates: number[];
}

interface Source {
  id: string;
  url: string;
}

interface Category {
  id: string;
  title: string;
}
