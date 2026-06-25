import api from "./api";

export const createBorrowRequest = async (data) => {
  const response = await api.post("/borrow-requests", data);
  return response.data;
};

export const getMyRequests = async () => {
  const response = await api.get("/borrow-requests/my");
  return response.data;
};