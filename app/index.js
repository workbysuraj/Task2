import React from "react";
import { Provider } from "react-redux";
import store from "./reducers/store"; 
import MultiStepForm from "./MultiStepForm"; 

const App = () => {
  return (
    <Provider store={store}>
      <MultiStepForm /> 
    </Provider>
  );
};

export default App;
