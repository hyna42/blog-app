import "./App.css";
import "./index.css";
import { Toaster } from "sonner";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

  return (
    <>
      {<Header />}
      <Toaster position="top-right" expand richColors />
      {<Home />}
      {/* {pageContent} */}
    </>
  );
}


export default App;
