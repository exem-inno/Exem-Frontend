import { useState } from "react";
import StickyHeadTable from "./StickyHeadTable";

export default function NodesTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const columns = [
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
    />
  );
}
