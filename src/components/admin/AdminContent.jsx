import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import AdminDataTable from "./AdminDataTable";
import AdminForm from "./AdminForm";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/product.service";

const AdminContent = () => {
  const [data, setData] = useState({
    judulKelas: "",
    ketKelas: "",
    namaMentor: "",
    hargaKelas: "",
  });

  const [contentDataList, setContentDataList] = useState([]);
  const [editingData, setEditingData] = useState(null);

  const syncNewProductLocalStorage = (product) => {
    let localProduct = [];

    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      try {
        localProduct = JSON.parse(storedProducts);
      } catch (error) {
        console.error("Error parsing products from localStorage", error);
        localProduct = [];
      }
    }

    localProduct.push(product);

    localStorage.setItem("products", JSON.stringify(localProduct));
  };

  useEffect(() => {
    const loadProductsFromLocalStorage = () => {
      const storedProducts = localStorage.getItem("products");
      if (storedProducts) {
        try {
          setContentDataList(JSON.parse(storedProducts));
        } catch (error) {
          console.error("Error parsing products from localstorage", error);
        }
      }
    };

    loadProductsFromLocalStorage();
  }, []);

  useEffect(() => {
    if (contentDataList.length > 0) {
      localStorage.setItem("products", JSON.stringify(contentDataList));
    }
  }, [contentDataList]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProducts();
        setContentDataList(Array.isArray(fetchedProduct) ? fetchedProduct : []);
      } catch (error) {
        console.error("Error fetching products", error);
        setContentDataList([]);
      }
    };
    fetchProduct();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingData) {
      try {
        const updatedProduct = await updateProduct(editingData.id, data);
        const updatedContentDataList = contentDataList.map((newData) => {
          return newData.id === editingData.id ? updatedProduct : newData;
        });
        setContentDataList(updatedContentDataList);
        localStorage.setItem(
          "products",
          JSON.stringify(updatedContentDataList)
        );
        setEditingData(null);
      } catch (error) {
        console.error("Failed to edit product", error);
      }
    } else {
      try {
        const createdProduct = await createProduct(data);
        setContentDataList((prevList) => {
          const updatedProductList = [...prevList, createdProduct];
          syncNewProductLocalStorage(createdProduct);
          return updatedProductList;
        });
      } catch (error) {
        console.error("Failed to create product", error);
      }
    }

    setData({
      judulKelas: "",
      ketKelas: "",
      namaMentor: "",
      hargaKelas: "",
    });
  };

  const handleEdit = (newData) => {
    setEditingData(newData);
    setData({
      judulKelas: newData.judulKelas,
      ketKelas: newData.ketKelas,
      namaMentor: newData.namaMentor,
      hargaKelas: newData.hargaKelas,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      const updatedContentDataList = contentDataList.filter(
        (item) => item.id !== id
      );
      setContentDataList(updatedContentDataList);
      localStorage.setItem("products", JSON.stringify(updatedContentDataList));
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  return (
    <Container className="flex flex-col gap-3 p-8">
      <AdminForm
        data={data}
        editingData={editingData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <AdminDataTable
        contentDataList={contentDataList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default AdminContent;
