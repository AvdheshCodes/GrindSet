import API from "./axios";

export const getComments = (questionId) => API.get(`/comments/${questionId}`);
export const addComment = (questionId, data) => API.post(`/comments/${questionId}`, data);
export const deleteComment = (id) => API.delete(`/comments/${id}`);