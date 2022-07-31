import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip
} from "@syncfusion/ej2-react-charts";
import { piePalette } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();
  const colors = "white";
  const defaultColor = "#0a0a0a";

  const onChartLoaded = () => {
    let chart = document.getElementById(id);
    let legendTextCol = chart.querySelectorAll('[id*="chart_legend_text_"]');
    for (let i = 0; i < legendTextCol.length; i++) {
      //set the color to legend label
      if (currentMode === "Dark") {
        legendTextCol[i].setAttribute("fill", colors);
      } else {
        legendTextCol[i].setAttribute("fill", defaultColor);
      }
    }
  };
  return (
    <AccumulationChartComponent
      id={id}
      height={height}
      legendSettings={{ visible: legendVisiblity }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      tooltip={{ enable: true }}
      loaded={onChartLoaded}
    >
      <Inject
        services={[
          PieSeries,
          AccumulationDataLabel,
          AccumulationLegend,
          AccumulationTooltip
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="90%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          legendShape="Circle"
          palettes={piePalette}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
              size: "14px"
            }
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
