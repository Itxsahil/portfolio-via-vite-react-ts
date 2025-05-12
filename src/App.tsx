import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./Home";
import { Projects } from "./Projects";
import Blogs from "./Blogs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="Blogs" element={<Blogs />} />
        {/* <Route
          path="*"
          element={
            <div className="text-white flex justify-center items-center h-[80vh] text-5xl">
              404
            </div>
          }
        /> */}
      </Route>
    </Routes>
  );
}

export default App;
