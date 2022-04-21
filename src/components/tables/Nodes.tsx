import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState, VFC } from "react";
import { INodeColumn, INodeRow } from "types/table";
import StickyHeadTable from "./StickyHeadTable";

const NodesTable: VFC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const columns: INodeColumn[] = [
    { id: "key", label: "NODE", minWidth: 170 },
    { id: "pod_count", label: "POD_COUNT", minWidth: 100 },
  ];
  const rows = [
    { key: "10.0.10.242", pod_count: 100 },
    { key: "10.0.10.26", pod_count: 200 },
    { key: "10.0.10.61", pod_count: 300 },
    { key: "1", pod_count: 100 },
    { key: "2", pod_count: 200 },
    { key: "3", pod_count: 300 },
    { key: "4", pod_count: 100 },
    { key: "5", pod_count: 200 },
    { key: "6", pod_count: 300 },
  ];

  return (
    <StickyHeadTable
      title="Nodes"
      rows={rows}
      columns={columns}
      page={page}
      setPage={setPage}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
    >
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: INodeRow, ind) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={ind}>
              {columns.map((column: INodeColumn) => {
                const value = row[column.id];
                return <TableCell key={column.id}>{value}</TableCell>;
              })}
            </TableRow>
          );
        })}
    </StickyHeadTable>
  );
};

export default NodesTable;
