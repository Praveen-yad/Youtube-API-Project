import React from "react";
import { Explore, Liked, SearchFeed, SearchPage, VideoPlayer } from "./components";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./Store/store";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    // Wrap the entire application with the Redux Provider to provide the store to all components.
    <Provider store={store}>
      <BrowserRouter>
        {/* ScrollToTop component ensures that the page scrolls to the top when navigating to a new route. */}
        <ScrollToTop />
        <Routes>
          {/* Define different routes and their corresponding components. */}
          <Route path="/" element={<SearchPage />} /> {/* Home page */}
          <Route path="/Search/:searchedTerm" element={<SearchFeed />} /> {/* Search results */}
          <Route path="/Video/:videoId" element={<VideoPlayer />} /> {/* Video player */}
          <Route path="/Explore" element={<Explore />} /> {/* Explore page */}
          <Route path="/Liked" element={<Liked />} /> {/* Liked videos */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
