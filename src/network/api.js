import axios from "axios";

// ... (your other code)

axios.defaults.baseURL = "http://localhost:8080";

export const myAxios = async (url, method, body) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: body,
      headers: { "Content-Type": "application/json" },
    });
    return { body: data, status: "success" };
  } catch (error) {
    return { body: null, status: "error" };
  }
};

export const fetchPlaces = async () => {
  try {
    const response = await myAxios("/api/v1/client?query=", "GET");
    if (response.status === "success") {
      return response.body;
    }
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};
