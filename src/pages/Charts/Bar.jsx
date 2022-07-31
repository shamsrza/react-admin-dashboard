import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Tooltip,
  Category,
  ColumnSeries,
  DataLabel,
  Legend
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryYAxis,
  barPrimaryXAxis,
  Palette
} from "../../data/dummy";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();
  const colors = "white";
  const defaultColor = "#0a0a0a";

  const onChartLoaded = () => {
    let chart = document.getElementById("charts");
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
    <div className="m-4 m:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          palettes={Palette}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          loaded={onChartLoaded}
        >
          <Inject
            services={[ColumnSeries, DataLabel, Legend, Tooltip, Category]}
          />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} legendShape="Circle" />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
