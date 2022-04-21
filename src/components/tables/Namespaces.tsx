import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { INamespaceColumn, INamespaceRow } from "types/table";
import StickyHeadTable from "./StickyHeadTable";

export default function NamespacesTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const columns: INamespaceColumn[] = [
    { id: "key", label: "NODE", minWidth: 170 },
    { id: "pod_count", label: "POD_COUNT", minWidth: 100 },
    { id: "service_count", label: "SERVICE_COUNT", minWidth: 100 },
  ];
  const rows = [{ key: "default", pod_count: 500, service_count: 100 }];

  return (
    <StickyHeadTable
      title="Namespaces"
      rows={rows}
      columns={columns}
      page={page}
      setPage={setPage}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
    >
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: INamespaceRow, ind) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={ind}>
              {columns.map((column: INamespaceColumn) => {
                const value = row[column.id];
                return <TableCell key={column.id}>{value}</TableCell>;
              })}
            </TableRow>
          );
        })}
    </StickyHeadTable>
  );
}
