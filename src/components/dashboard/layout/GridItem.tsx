import ServicesGraph from "components/charts/Services";
import SpanChart from "components/charts/Span";
import HttpDataTable from "components/tables/HttpData";
import NamespacesTable from "components/tables/Namespaces";
import NodesTable from "components/tables/Nodes";
import { VFC } from "react";

interface Props {
  type: string;
  onClickRow?: (event: any, ind: number) => void;
}

const GridItem: VFC<Props> = ({ type, onClickRow }) => {
  return (
    <>
      {type === "service-graph" && <ServicesGraph />}
      {type === "nodes-table" && <NodesTable />}
      {type === "namespaces-table" && <NamespacesTable />}
      {type === "http-data-table" && <HttpDataTable onClickRow={onClickRow} />}
      {type === "span-chart" && <SpanChart />}
    </>
  );
};

export default GridItem;
