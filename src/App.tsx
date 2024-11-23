import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import GamePage from "./pages/GamePage.tsx";
import SettingPage from "./pages/SettingPage.tsx";
import ResultPage from "./pages/ResultPage.tsx";
import Layout from "./Layout/Layout.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<div>404 - Стрнациа не найдена </div>} />
      </Route>
    </Routes>
  );
};

export default App;
