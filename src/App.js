import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage, SubPage1, SubPage2, SubPage3, SubPage4, SubPage5 } from "./pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/sub1" element={<SubPage1 />} />
        <Route path="/sub2" element={<SubPage2 />} />
        <Route path="/sub3" element={<SubPage3 />} />
        <Route path="/sub4" element={<SubPage4 />} />
        <Route path="/sub5" element={<SubPage5 />} />
      </Routes>
    </>
  );
};

export default App;
