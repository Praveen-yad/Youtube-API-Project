import React from "react";
import { Explore, Liked, SearchFeed, SearchPage, VideoPlayer} from "./components";
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./Store/store";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<SearchPage/>} />
          <Route path="/Search/:searchedTerm" element={<SearchFeed/>} />
          <Route path="/Video/:videoId" element={<VideoPlayer/>} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/Liked" element={<Liked/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
