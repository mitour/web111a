import "bootstrap/dist/js/bootstrap.min";
import "./css/all.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import Users from "./pages/admin/Users";
import Courses from "./pages/admin/Courses";
import Comments from "./pages/admin/Comments";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/users">
            <Route path=":id" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<Users />} />
          <Route path="courses" element={<Courses />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
