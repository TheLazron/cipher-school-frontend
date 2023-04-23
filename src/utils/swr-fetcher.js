import axios from "axios";

const axiosFetcher = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default axiosFetcher;
