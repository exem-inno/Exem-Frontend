import { useState, VFC } from "react";
import StickyHeadTable from "./StickyHeadTable";
import rows from "datas/httpdata.json";

const HttpData: VFC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
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
    />
  );
};

export default HttpData;
