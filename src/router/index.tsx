import { createHashRouter } from "react-router-dom";
import { AboutPage, LandingPage, ContactPage } from "../pages";
import Layout from "../layout";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout render={() => <LandingPage />} />,
  },
  {
    path: "about",
    element: <Layout render={() => <AboutPage />} />,
  },
  {
    path: "contact",
    element: <Layout render={() => <ContactPage />} />,
  },
]);

export default router;
