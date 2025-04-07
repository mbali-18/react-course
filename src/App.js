import { Routes, Route } from "react-router-dom"; // Use "react-router-dom" instead of "react-router"
import AllMeetups from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
