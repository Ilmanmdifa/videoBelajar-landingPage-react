import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

export const getProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const res = await axios.post(API_URL, productData);
    return res.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, productData);
    return res.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
