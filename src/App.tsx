import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "sonner";
import LayoutPage from "./pages/LayoutPage";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Contact from "./pages/Contact";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Home />} />

          <Route path="post/new" element={<NewPost />} />


          <Route path="post/:id" element={<Single />} />

          <Route path="contact" element={<Contact />} />
          <Route />
        </Route>
      </Routes>
      <Toaster position="top-right" expand richColors />
    </>
  );

}

export default App;
