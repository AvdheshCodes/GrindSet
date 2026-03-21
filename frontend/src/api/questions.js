import API from "./axios";

export const getQuestions = () => API.get("/questions");
export const addQuestion = (data) => API.post("/questions", data);
export const updateQuestion = (id, data) => API.put(`/questions/${id}`, data);
export const deleteQuestion = (id) => API.delete(`/questions/${id}`);