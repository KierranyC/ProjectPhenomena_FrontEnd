import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Reports } from "./components";


const App = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true)


  return (
    <BrowserRouter>
      <div id='app'>
        <Routes>
          <Route path='/' element={<Reports reports={reports} setReports={setReports} loading={loading} setLoading={setLoading} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));