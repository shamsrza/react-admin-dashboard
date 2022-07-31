import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
  Palette
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const colors = "gray";
  const defaultColor = "#0a0a0a";

  const onChartLoaded = () => {
    let chart = document.getElementById("line-chart");
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
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      palettes={Palette}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      loaded={onChartLoaded}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} legendShape="Circle" />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
