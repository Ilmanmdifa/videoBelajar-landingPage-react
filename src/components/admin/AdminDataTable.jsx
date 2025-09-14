import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AdminDataTable = ({ contentDataList, handleDelete, handleEdit }) => {
  return (
    <>
      <h2 className="font-['Poppins']">Table Content</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Judul Konten</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Keterangan Konten
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Nama Mentor
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Harga Kelas
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contentDataList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <p className="p-2">No content to display</p>
                </TableCell>
              </TableRow>
            ) : (
              contentDataList.map((product) =>
                product ? (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.judulKelas}
                    </TableCell>
                    <TableCell align="right">{product.ketKelas}</TableCell>
                    <TableCell align="right">{product.namaMentor}</TableCell>
                    <TableCell align="right">
                      Rp. {product.hargaKelas}K
                    </TableCell>
                    <TableCell align="right">
                      <button
                        onClick={() => handleEdit(product)}
                        className="cursor-pointer text-orange-400"
                      >
                        Edit
                      </button>{" "}
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="cursor-pointer text-red-500"
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ) : null
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminDataTable;
