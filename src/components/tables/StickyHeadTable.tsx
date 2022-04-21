import Paper from "@mui/material/Paper";
import { Table as MUITable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, FC, useCallback } from "react";
import Table from "./Table";
import { Rows, Columns } from "types/table";

interface Props {
  title: string;
  rows: Rows;
  columns: Columns;
  page: number;
  setPage: (v: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (v: number) => void;
}

const StickyHeadTable: FC<Props> = ({
  title,
  rows,
  columns,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  children,
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
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
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
