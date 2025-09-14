import React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const AdminForm = ({ data, editingData, handleSubmit, handleInputChange }) => {
  return (
    <div className="max-w-lg">
      <div className="mb-2">
        <h1 className="mb-1 text-2xl font-['Poppins'] font-bold">Admin Menu</h1>
        <span className="font-[DM_Sans]">Form Tambah Content</span>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex gap-2 flex-col sm:text-sm"
      >
        <TextField
          required
          label="Judul Kelas"
          name="judulKelas"
          value={data.judulKelas}
          id="field-required"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="outlined-textarea"
          label="Keterangan Kelas"
          placeholder="Isi Konten"
          name="ketKelas"
          value={data.ketKelas}
          multiline
          rows={4}
          onChange={handleInputChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pilih Mentor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Nama Mentor"
            name="namaMentor"
            value={data.namaMentor}
            onChange={handleInputChange}
          >
            <MenuItem value={"Jenna Ortega"}>Jenna Ortega</MenuItem>
            <MenuItem value={"Rei Alexander"}>Rei Alexander</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          label="Harga Kelas"
          type="number"
          placeholder="Rp."
          name="hargaKelas"
          value={data.hargaKelas}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained">
          {editingData ? "Update" : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default AdminForm;
