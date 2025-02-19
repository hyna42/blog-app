import "./App.css";
import "./index.css";
import { useHashNavigation } from "./hooks/useHashNavigation";

// import Header from "./components/Header";
import { getPageContent } from "./utils/getPageContent";
import Header from "./components/Header";

function App() {
  const { page } = useHashNavigation();
  const pageContent = getPageContent(page);
  return (
    <>
      {<Header />}
      {pageContent}
    </>
  );
}


export default App;
