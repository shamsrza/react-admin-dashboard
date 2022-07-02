import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, color, currentColor, height, width, data, type }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x}: data ${yval}",
        trackLineSettings: {
          visible: true
        }
      }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
