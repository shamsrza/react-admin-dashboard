import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";

import { Header } from "../components";

const Kanban = () => {
  // const columnTemplate = () => {
  //   return kanbanGrid.map((item) => (
  //     <div className="header-template-wrap">
  //       <div className={"header-icon e-icons " + item.keyField}></div>
  //       <div className="header-text">{item.headerText}</div>
  //     </div>
  //   ));
  // };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{
          contentField: "Summary",
          headerField: "Id"
          // showHeader: false
        }}
        keyField="Status"
        // swimlaneSettings={{ keyField: "Assignee" }}
        // enablePersistence={true}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
