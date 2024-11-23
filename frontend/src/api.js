import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(import.meta.env.VITE_API_BASE_URL);

export const createNote = async (note) => {
  try {
    const response = await axios.post(API_BASE_URL, note);
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

// const API_BASE_URL =
//   import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:5000/notes";

export const fetchNotes = async (query = {}) => {
  const { search = "", category = "" } = query;
  const response = await axios.get(API_BASE_URL, {
    params: { search, category },
  });
  return response.data;
};

// export const createNote = async (note) => {
//   try {
//     const response = await axios.post(API_BASE_URL, note);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating note:", error);
//     throw error;
//   }
// };

export const updateNote = async (id, note) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, note);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
