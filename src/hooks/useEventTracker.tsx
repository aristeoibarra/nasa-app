import { useState, useEffect } from "react";
import nasaApi from "services/nasaApi";
import { ICategories, IEvents } from "types/EvenTrackerTypes";

export default function useEventTracker() {
  const [categoriesData, setCategoriesData] = useState<ICategories>(
    {} as ICategories
  );
  const [category, setCategory] = useState<string>("");
  const [eventsData, setEventsData] = useState<IEvents | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategories = async () => {
    const data = await nasaApi.getEventTrackerCategories();
    setCategoriesData(data);
  };

  const getEvents = async () => {
    setLoading(true);
    const data = await nasaApi.getAllEventsTrackerByCategory(category);
    setEventsData(data);
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (category !== "") {
      getEvents();
    }
  }, [category]);

  return {
    categoriesData,
    category,
    setCategory,
    eventsData,
    loading,
  };
}
