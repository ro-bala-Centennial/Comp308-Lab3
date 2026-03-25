import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const AuthApp = React.lazy(() => import("auth_mf/AuthApp"));
const CommunityApp = React.lazy(() => import("community_mf/CommunityApp"));

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Community Engagement System</h1>
        <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link to="/">Auth</Link>
          <Link to="/community">Community</Link>
        </nav>

        <Suspense fallback={<p>Loading micro frontend...</p>}>
          <Routes>
            <Route path="/" element={<AuthApp />} />
            <Route path="/community" element={<CommunityApp />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}