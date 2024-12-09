import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import GeneratePassword from "./pages/GeneratePassword";
import SavePassword from "./pages/SavePassword";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index path="/" element={<GeneratePassword />} />
          <Route path="save" element={<SavePassword />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
