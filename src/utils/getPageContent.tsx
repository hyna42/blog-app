import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Single from "@/pages/Single";

export function getPageContent(page: string) {
  if (page === "home") return <Home />;
  if (page === "contact") return <Contact />;
  if (page === "post") return <Single />;
  else return <NotFound />;
}

