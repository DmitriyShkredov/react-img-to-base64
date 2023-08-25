import React, { useState } from "react";
import "./App.css";
import image from "./image.jpg";

function App() {
  const [data, setData] = useState("");
  const onImageLoad = (e) => {
    const canvas = document.createElement("canvas");
    canvas.width = e.target.naturalWidth;
    canvas.height = e.target.naturalHeight;
    canvas.getContext("2d").drawImage(e.target, 0, 0);
    setData(canvas.toDataURL("image/jpeg"));
  };
  return (
    <div className="App">
      <img src={image} alt="" onLoad={onImageLoad} />
      <p>{data}</p>
    </div>
  );
}

export default App;
