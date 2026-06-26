import api from "./api";

export const getBorrowRequests = async () => {
  const response = await api.get("/admin/borrow");
  return response.data;
};

export const approveBorrow = async (id) => {
  const response = await api.put(`/admin/borrow/${id}/approve`);
  return response.data;
};

export const rejectBorrow = async (id) => {
  const response = await api.put(`/admin/borrow/${id}/reject`);
  return response.data;
};

export const createItem = async (data) => {
  const response = await api.post("/admin/items", data);
  return response.data;
};

export const updateItem = async (id, data) => {
  const response = await api.put(`/admin/items/${id}`, data);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await api.delete(`/admin/items/${id}`);
  return response.data;
};