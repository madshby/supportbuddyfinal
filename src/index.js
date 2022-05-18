import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Avatar from "./Components/Avatar";

const root = ReactDOM.createRoot(document.getElementById("root"));
const AvatarWidget = () => {
  return (
    <>
      <div>Avatar Widget</div>
      <div>
        <Avatar
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
          }}
        />
      </div>
    </>
  );
};

root.render(
  <>
    <App />
    <AvatarWidget></AvatarWidget>
  </>
);
