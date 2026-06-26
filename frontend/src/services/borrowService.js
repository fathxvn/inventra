import api from "./api";

export const getMyRequests = async () => {
  const response = await api.get("/borrow/my");
  return response.data;
};

export const borrowItem = async (data) => {
  const response = await api.post("/borrow", data);
  return response.data;
};