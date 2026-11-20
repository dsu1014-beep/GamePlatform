import React from "react";
import { createRoot } from "react-dom/client";
function App() {
  return (
    <div>
      <h1>史萊姆好玩遊戲區</h1>
      <div><a href="https://dsu1014-beep.github.io/OOXX_Game/">圈圈叉叉</a></div>
      <div><a href="https://dsu1014-beep.github.io/1A2B_WebGame/">一A二B</a></div>
    </div>
  );
}

const rootelement = document.getElementById("root");
createRoot(rootelement).render(<App></App>);
