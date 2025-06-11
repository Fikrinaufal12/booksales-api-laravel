import API from "../_api";

// GET all genres
export const getGenres = async () => {
  const { data } = await API.get("/genres");
  return data.data;
};

// CREATE a new genre
export const createGenre = async (data) => {
  try {
    const response = await API.post("/genres", data);
    return response.data;
  } catch (error) {
    console.error("Error creating genre:", error);
    throw error;
  }
};

// GET one genre by ID
export const showGenre = async (id) => {
  try {
    const { data } = await API.get(`/genres/${id}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching genre:", error);
    throw error;
  }
};

// UPDATE genre by ID
export const updateGenre = async (id, data) => {
  try {
    const response = await API.put(`/genres/${id}`, data); // ⬅️ Gunakan PUT, bukan POST
    return response.data;
  } catch (error) {
    console.error("Error updating genre:", error);
    throw error;
  }
};

// DELETE genre by ID
export const deleteGenre = async (id) => {
  try {
    const { data } = await API.delete(`/genres/${id}`);
    return data.message;
  } catch (error) {
    console.error("Error deleting genre:", error);
    throw error;
  }
};
