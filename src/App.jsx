import React, { Component } from "react";
import './App.css';
import { Counter } from "./components/functional/Counter";
import { MultipleStates } from "./components/functional/MultipleStates";
import { LifecycleDemo } from "./components/functional/LifecycleDemo";
import { FetchData } from "./components/functional/FetchData";
import { WrapperFetchDataWithGender } from "./components/functional/FetchDataWithGender";
import Lifecycle from './components/classes/Lifecycle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <b>Counter</b>
        <Counter/>
        <hr/>

        <b>Multiple States</b>
        <MultipleStates />
        <hr/>

        <b>Lifecycle Demo</b>
        <LifecycleDemo />
        <hr/>

        <b>Fetch Data</b>
        <FetchData />
        <hr/>

        <b>Wrapper Fetch Data With Gender</b>
        <WrapperFetchDataWithGender />
        <hr/>

        <b>Classes Component - LifeCycle</b>
        <Lifecycle />
        <hr/>

      </div>
    );
  }
}

export default App;
