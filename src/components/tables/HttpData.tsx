import { useState, VFC } from "react";
import StickyHeadTable from "./StickyHeadTable";
import rows from "datas/httpdata.json";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import { IHttpColumn, IHttpRow } from "types/table";

interface Props {
  onClickRow: ((event: any, ind: number) => void) | undefined;
}

const HttpDataTable: VFC<Props> = ({ onClickRow }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const columns: IHttpColumn[] = [
    { id: "start_time", label: "TIME" },
    { id: "peer_address", label: "REMOTE_ADDR" },
    { id: "peer_port", label: "REMOTE_PORT" },
    { id: "http_method", label: "REQ_METHOD" },
    { id: "http_api", label: "REQ_PATH" },
    { id: "http_status_code", label: "RESP_STATUS" },
    { id: "duration", label: "LATENCY" },
    { id: "service", label: "SVC" },
    { id: "pod", label: "POD" },
  ];

  return (
    <StickyHeadTable
      title="HTTP Data"
      rows={rows}
      columns={columns}
      page={page}
      setPage={setPage}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
    >
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: IHttpRow, ind) => {
          return (
            <TableRow
              hover
              role="button"
              tabIndex={-1}
              key={ind}
              onClick={onClickRow ? (e) => onClickRow(e, ind) : undefined}
            >
              {columns.map((column: IHttpColumn) => {
                const value = row[column.id];
                if (column.id === "service") {
                  return (
                    <TableCell key={column.id}>
                      <Link to={`/dashboard/service/${value}`}>{value}</Link>
                    </TableCell>
                  );
                }
                return <TableCell key={column.id}>{value}</TableCell>;
              })}
            </TableRow>
          );
        })}
    </StickyHeadTable>
  );
};

export default HttpDataTable;
