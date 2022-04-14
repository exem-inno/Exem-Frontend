export interface INode {
  id: number;
  label: string;
  size?: number;
}

export interface IEdge {
  id: number;
  from: number;
  to: number;
}

export interface IGraphData {
  nodes: INode[];
  edges: IEdge[];
}
