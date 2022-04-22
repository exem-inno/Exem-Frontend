export interface INode {
  id: string;
  label: string;
  size?: number;
}

export interface IEdge {
  id: number;
  from: string;
  to: string;
}

export interface IGraphData {
  nodes: INode[];
  edges: IEdge[];
}
