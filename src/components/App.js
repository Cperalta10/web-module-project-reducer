import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import reducer from "../reducers/index";
import actions from "../actions/index";

function App() {
  const initialState = {
    total: 100,
    operation: "*",
    memory: 100,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddOne = () => {
    dispatch(actions.addOne());
  };

  const handleAdd = (e) => {
    dispatch(actions.applyNumber(Number(e.target.value)));
  };

  const handleOperator = (e) => {
    dispatch(actions.changeOperation(e.target.value));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={handleAdd} value={1} />
              <CalcButton onClick={handleAdd} value={2} />
              <CalcButton onClick={handleAdd} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleAdd} value={4} />
              <CalcButton onClick={handleAdd} value={5} />
              <CalcButton onClick={handleAdd} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleAdd} value={7} />
              <CalcButton onClick={handleAdd} value={8} />
              <CalcButton onClick={handleAdd} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleOperator} value={"+"} />
              <CalcButton onClick={handleOperator} value={"*"} />
              <CalcButton onClick={handleOperator} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
