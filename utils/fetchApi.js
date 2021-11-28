import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "23ab5850bdmsh190caaaf04f8f27p10a424jsn083a1e89309f",
    },
  });
  console.log(data);
  return data;
};
