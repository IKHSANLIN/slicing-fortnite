import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
