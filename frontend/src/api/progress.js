import API from "./axios";

export const getProgress = () => API.get("/progress");
export const markSolved = (questionId) => API.post(`/progress/solve/${questionId}`);