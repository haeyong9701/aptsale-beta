import { Route, Routes } from "react-router-dom";
import { MainPage, LocationAnalysisPage, PropertyGuidePage, UnitTypeGuidePage } from "./pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/property-guide" element={<PropertyGuidePage />} />
        <Route path="/location-analysis" element={<LocationAnalysisPage />} />
        <Route path="/unit-type-guide" element={<UnitTypeGuidePage />} />
      </Routes>
    </>
  );
};

export default App;
