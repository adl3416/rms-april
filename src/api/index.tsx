import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Backend API URL'ini buraya yaz
});

// Teams
export const getTeams = async () => {
  const response = await api.get("/teams");
  return response.data;
};
