import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark: bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{
                  background: "blue",
                  borderRadius: "50%"
                }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? <div>Sidebar</div> : <div>Sidebar w-0 </div>}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
