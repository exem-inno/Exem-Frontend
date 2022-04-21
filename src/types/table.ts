export interface IColumn {
  id: string;
  label: string;
  minWidth?: number;
}

export interface IHttpRow {
  start_time: string;
  peer_address: string;
  peer_port: string;
  http_method: string;
  http_api: string;
  http_status_code: string;
  duration: string;
  service: string;
  pod: string;
}

export type IHttpRowKeys =
  | "start_time"
  | "peer_address"
  | "peer_port"
  | "http_method"
  | "http_api"
  | "http_status_code"
  | "duration"
  | "service"
  | "pod";

export interface IHttpColumn extends IColumn {
  id: IHttpRowKeys;
}

export interface INodeRow {
  key: string;
  pod_count: number;
}

export type INodeRowKeys = "key" | "pod_count";

export interface INodeColumn extends IColumn {
  id: INodeRowKeys;
}

export interface INamespaceRow {
  key: string;
  pod_count: number;
  service_count: number;
}

export type INamespaceRowKeys = "key" | "pod_count" | "service_count";

export interface INamespaceColumn extends IColumn {
  id: INamespaceRowKeys;
}

export type Rows = IHttpRow[] | INodeRow[] | INamespaceRow[];

export type Columns = IHttpColumn[] | INodeColumn[] | INamespaceColumn[];
