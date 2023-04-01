import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "28.704060",
          tr_latitude: tr_lat ? tr_lat : "28.904060",
          bl_longitude: bl_lng ? bl_lng : "77.102493",
          tr_longitude: tr_lng ? tr_lng : "77.302493",
          limit: "30",
          currency: "INR",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "27055ed75bmshe8b29a16ee3ea03p134f34jsna38de3171778",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
