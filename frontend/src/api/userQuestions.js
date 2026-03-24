import API from "./axios";

export const getMyQuestions = () => API.get("/my-questions");
export const addMyQuestion = (data) => API.post("/my-questions", data);
export const deleteMyQuestion = (id) => API.delete(`/my-questions/${id}`);
export const toggleMyQuestion = (id) => API.patch(`/my-questions/${id}/toggle`);
