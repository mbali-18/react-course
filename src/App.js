import { Routes, Route } from "react-router";

import AllMeetups from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./Components/layout/MainNavigation";

function App() {
  return (
    <Routes>
      <MainNavigation />
      <Route path="/" element={<AllMeetups />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
