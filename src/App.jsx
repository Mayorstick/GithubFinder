import Profile from "./pages/Profile";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
