import { Link, Route, Routes } from "react-router-dom";
import List from "./pages/list";
import Fibonacci from "./pages/fibonacci";
import ProgressBar from "./pages/progressBar";

function App() {
  return (
    <div className="flex flex-row">
      <nav className="flex h-screen flex-col border-r border-gray-300 p-4 text-4xl">
        <Link to="/list">List</Link>
        <Link to="/fibonacci">Fibonacci</Link>
        <Link to="/progressBar">ProgressBar</Link>
      </nav>

      <div className="pl-5">
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/fibonacci" element={<Fibonacci />} />
          <Route path="/progressBar" element={<ProgressBar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
