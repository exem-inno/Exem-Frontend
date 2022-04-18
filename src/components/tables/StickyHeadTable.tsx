import Paper from "@mui/material/Paper";
import { Table as MUITable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, VFC, useCallback } from "react";
import Table from "./Table";

interface Props {
  title: string;
  rows: any[];
  columns: any[];
  page: number;
  setPage: (v: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (v: number) => void;
}

const StickyHeadTable: VFC<Props> = ({
  title,
  rows,
  columns,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const handleChangePage = useCallback(
    (event: unknown, newPage: number) => {
      setPage(newPage);
    },
    [setPage]
  );

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    [setPage, setRowsPerPage]
  );

  return (
    <Table title={title}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ height: "100%" }}>
          <MUITable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow key="header">
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.key}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </MUITable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Table>
  );
};

export default StickyHeadTable;
