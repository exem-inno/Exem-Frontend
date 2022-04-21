import _ from "lodash";

const generateLayout = (n: number) => {
  return _.map(_.range(0, n), function (item, i) {
    return {
      x: 0,
      y: 0,
      w: 12,
      h: 10,
      i: i.toString(),
    };
  });
};

export default generateLayout;
