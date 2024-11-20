import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import GamePage from "./pages/GamePage.tsx";
import SettingPage from "./pages/SettingPage.tsx";
import ResultPage from "./pages/ResultPage.tsx";
import Layout from "./Layout/Layout.tsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
