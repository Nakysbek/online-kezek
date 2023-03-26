import React from "react";
import "./App.module.css";
import {Outlet} from "react-router-dom";
import {LanguagePage} from "./Pages/LanguagePage/LanguagePage";

function App() {

    return (
        <div className="App">

            <LanguagePage/>
            <Outlet/>
        </div>
    )
}

export default App;
