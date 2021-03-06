import React from "react";
import ReactDOM from "react-dom";

import CalendarBoard from "./components/CalendarBoard";

// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./redux/rootReducer";
// import Counter from "./components/Counter/container";

// const store = createStore(rootReducer);

const App = () => (
  <div>
    <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
