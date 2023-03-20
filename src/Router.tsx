import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function Router() {
    return (
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/post/:number" element={<Post />} />
        </Route>
      </Routes>
    )
  }