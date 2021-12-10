import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
// import your route components too

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
