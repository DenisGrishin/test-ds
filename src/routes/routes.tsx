import { createBrowserRouter } from "react-router-dom";

import ResultPage from "../pages/ResultPage.tsx";
import SettingPage from "../pages/SettingPage.tsx";
import GamePage from "../pages/GamePage.tsx";
import App from "../App.tsx";
import Layout from "../Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/game",
    element: (
      <Layout>
        <GamePage />
      </Layout>
    ),
  },
  {
    path: "/setting",
    element: (
      <Layout>
        <SettingPage />
      </Layout>
    ),
  },
  {
    path: "/result",
    element: (
      <Layout>
        <ResultPage />
      </Layout>
    ),
  },
]);

export default router;
