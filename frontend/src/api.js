import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL; // Replace with your backend URL

export const getNotes = async (filters = {}) =>
  axios.get(API_BASE_URL, { params: filters });

export const createNote = async (note) => axios.post(API_BASE_URL, note);

export const updateNote = async (id, updatedNote) =>
  axios.put(`${API_BASE_URL}/${id}`, updatedNote);

export const deleteNote = async (id) => axios.delete(`${API_BASE_URL}/${id}`);
