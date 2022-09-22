import axios from "axios";
import constants from "./constants";

const instance = axios.create({
  params: {
    api_key: constants.NASA_API_KEY,
  },
});

async function get(url: string, params?: unknown) {
  const res = await instance.get(url, { params: params });
  return res.data;
}

export { get };
