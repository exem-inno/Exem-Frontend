import GridLayout from "components/dashboard/layout/GridLayout";
import _ from "lodash";
import { useCallback, useEffect, useState, VFC } from "react";
import { ILayout } from "types/layout";
import rows from "datas/httpdata.json";
import GridItem from "components/dashboard/layout/GridItem";

const HTTPPage: VFC = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(0);
  const [height, setHeight] = useState(12);
  const [layouts, setLayouts] = useState<{ lg: ILayout[] }>({
    lg: [
      {
        i: "http-data-table",
        x: 0,
        y: 0,
        w: 12,
        h: height,
      },
    ],
  });

  const onClickRow = useCallback(
    (event, ind) => {
      console.log(layouts);
      if (selectedRow === null) {
        setSelectedRow(ind);
        setLayouts((prev) => ({
          lg: [
            ...prev.lg.filter((v) => v.i === "http-data-table"),
            { i: "span-chart", x: 0, y: 0, w: 12, h: 9 },
          ],
        }));
      } else if (ind === selectedRow) {
        setSelectedRow(null);
        setLayouts((prev) => ({
          lg: [...prev.lg.filter((v) => v.i === "http-data-table")],
        }));
      } else {
        setSelectedRow(ind);
        setLayouts((prev) => ({
          lg: [
            ...prev.lg.filter((v) => v.i === "http-data-table"),
            { i: "span-chart", x: 0, y: 0, w: 12, h: 9 },
          ],
        }));
      }
    },
    [layouts, selectedRow]
  );

  useEffect(() => {
    setHeight(
      4 + 3 * Math.floor((rows.length - 1) / 2) + (rows.length % 2 ? 2 : 3)
    );
  }, []);

  useEffect(() => {
    setLayouts({
      lg: [
        {
          i: "http-data-table",
          x: 0,
          y: 0,
          w: 12,
          h: height,
        },
      ],
    });
  }, [height]);

  const generateDOM = () => {
    return _.map(layouts.lg, function (l) {
      return (
        <div key={l.i} style={{ overflow: "scroll" }}>
          <GridItem type={l.i} onClickRow={onClickRow} />
        </div>
      );
    });
  };

  return <GridLayout layouts={layouts}>{generateDOM()}</GridLayout>;
};

export default HTTPPage;
