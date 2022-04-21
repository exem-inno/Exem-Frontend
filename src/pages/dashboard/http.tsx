import GridLayout from "components/dashboard/layout/GridLayout";
import HttpData from "components/tables/HttpData";
import _ from "lodash";
import { useCallback, useEffect, useState, VFC } from "react";
import { ILayout } from "types/layout";
import rows from "datas/httpdata.json";
import Span from "components/charts/Span";

const HTTPPage: VFC = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
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

  const onClickRow = useCallback(
    (event, ind) => {
      if (ind === selectedRow) {
        setSelectedRow(null);
        setLayouts({
          lg: [
            {
              i: "0",
              x: 0,
              y: 0,
              w: 12,
              h:
                4 +
                3 * Math.floor((rows.length - 1) / 2) +
                (rows.length % 2 ? 2 : 3),
            },
          ],
        });
      } else {
        setSelectedRow(ind);
        setLayouts({
          lg: [
            {
              i: "0",
              x: 0,
              y: 0,
              w: 12,
              h:
                4 +
                3 * Math.floor((rows.length - 1) / 2) +
                (rows.length % 2 ? 2 : 3),
            },
            { i: "1", x: 0, y: 0, w: 12, h: 9 },
          ],
        });
      }
    },
    [selectedRow]
  );

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
          {i === 0 && <HttpData onClickRow={onClickRow} />}
          {i === 1 && <Span title="Span Data" />}
        </div>
      );
    });
  };

  return <GridLayout layouts={layouts}>{generateDOM()}</GridLayout>;
};

export default HTTPPage;
