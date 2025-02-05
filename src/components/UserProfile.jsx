import React from "react";

function UserProfile() {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
      <img
        width={350}
        height={350}
        src="https://i.pinimg.com/736x/09/c3/c3/09c3c3316be2f6bccf8fd0e2737c7ad5.jpg"
        alt="User"
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <h2>John Doe</h2>
      <p>Software Engineer. Love coding, coffee, and memes.</p>
    </div>
  );
}

export default UserProfile;
