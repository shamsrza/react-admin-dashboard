import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
  Palette
} from "../../data/dummy";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();
  const colors = ["gray", "gray", "gray"];
  const defaultColor = ["#0a0a0a"];

  const onChartLoaded = () => {
    let chart = document.getElementById("line-chart");
    let legendTextCol = chart.querySelectorAll('[id*="chart_legend_text_"]');
    for (let i = 0; i < legendTextCol.length; i++) {
      //set the color to legend label
      if (currentMode === "Dark") {
        legendTextCol[i].setAttribute("fill", colors[i]);
      } else {
        legendTextCol[i].setAttribute("fill", defaultColor[i]);
      }
    }
  };
  return (
    <div className="m-4 m:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate in Percentage" />
      <div className="w-full">
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          palettes={Palette}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          loaded={onChartLoaded}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} legendShape="Circle" />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
