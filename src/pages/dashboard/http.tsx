import GridLayout from "components/dashboard/layout/GridLayout";
import HttpData from "components/tables/HttpData";
import _ from "lodash";
import { useEffect, useState, VFC } from "react";
import { ILayout } from "types/layout";
import rows from "datas/httpdata.json";

const HTTPPage: VFC = () => {
  const [layouts, setLayouts] = useState<{ lg: ILayout[] }>({
    lg: [
      {
        i: "0",
        x: 0,
        y: 0,
        w: 12,
        h:
          4 + 3 * Math.floor((rows.length - 1) / 2) + (rows.length % 2 ? 2 : 3),
      },
    ],
  });

  useEffect(() => {
    const height =
      4 + 3 * Math.floor((rows.length - 1) / 2) + (rows.length % 2 ? 2 : 3);
    setLayouts({
      lg: [{ i: "0", x: 0, y: 0, w: 12, h: height }],
    });
  }, []);

  const generateDOM = () => {
    return _.map(layouts.lg, function (l, i) {
      return (
        <div key={i} style={{ overflow: "scroll" }}>
          <HttpData />
        </div>
      );
    });
  };

  return <GridLayout layouts={layouts}>{generateDOM()}</GridLayout>;
};

export default HTTPPage;
