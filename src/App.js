import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Path from "./pages/Path";

import { Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Aws from "./pages/Aws";
import FullStack from "./pages/FullStack";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/path" element={<Path />}>
          <Route index element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route path="contact" element={<PrivateRouter />}>
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
