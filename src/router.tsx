import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ProjectPost } from "./pages/ProjectPost";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "experience", Component: Experience },
      { path: "projects/:slug", Component: ProjectPost },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
