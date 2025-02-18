import "./App.css";
import "./index.css";
import { useHashNavigation } from "./hooks/useHashNavigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Single from "./pages/Single";

function App() {
  const { page } = useHashNavigation();
  const pageContent = getPageContent(page);
  console.log("page", page);
  return (
    <>
      <a href="#" className="text-red-400">
        Home
      </a>
      
      <a href="#post">Articles</a>
      <a href="#contact">Contact</a>
      <a href="#contact" className="text-red-400">Contact</a>

      {pageContent}
    </>
  );
}

function getPageContent(page: string) {
  if (page === "home") return <Home />;
  if (page === "contact") return <Contact />;
  if (page === "post") return <Single />;
  else return <NotFound />;
}
export default App;
