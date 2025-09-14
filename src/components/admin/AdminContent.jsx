import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import AdminDataTable from "./AdminDataTable";
import { v4 as uuidv4 } from "uuid";
import AdminForm from "./AdminForm";

const AdminContent = () => {
  const [data, setData] = useState({
    judulKelas: "",
    ketKelas: "",
    namaMentor: "",
    hargaKelas: "",
  });

  const [contentDataList, setContentDataList] = useState([]);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    const savedDataProducts = JSON.parse(localStorage.getItem("products"));
    if (savedDataProducts) {
      setContentDataList(savedDataProducts);
    } else {
      setContentDataList([]);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingData) {
      const updatedContentDataList = contentDataList.map((newData) => {
        if (newData.id === editingData.id) {
          return { ...newData, ...data };
        }
        return newData;
      });
      localStorage.setItem("products", JSON.stringify(updatedContentDataList));
      setContentDataList(updatedContentDataList);
      setEditingData(null);
    } else {
      const newId = { id: uuidv4(), ...data };
      const updatedContentDataList = [...contentDataList, newId];
      localStorage.setItem("products", JSON.stringify(updatedContentDataList));
      setContentDataList(updatedContentDataList);
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

  const handleDelete = (id) => {
    const updatedContentDataList = contentDataList.filter(
      (item) => item.id !== id
    );
    localStorage.setItem("products", JSON.stringify(updatedContentDataList));
    setContentDataList(updatedContentDataList);
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
