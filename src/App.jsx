import React from "react";
import Feed from "./components/Feed";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "20px", backgroundColor: "#007bff", color: "white", textAlign: "center" }}>
        <h1>Simple Social Media App</h1>
      </header>
      <main style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <aside style={{ flex: "1" }}>
          <UserProfile />
        </aside>
        <section style={{ flex: "3" }}>
          <Feed />
        </section>
      </main>
    </div>
  );
}

export default App;
