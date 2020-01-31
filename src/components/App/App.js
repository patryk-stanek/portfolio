import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "../../store";
import routes from "../../routes";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Suspense fallback={null}>
            { routes }
          </Suspense>
        </div>
    </Provider>
  );
}

export default App;
