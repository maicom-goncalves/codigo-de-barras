import React, { useState } from "react";
import Scanner from './Scanner';
import ReactDOM from "react-dom";

function Cammera() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="camera">
      <p>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}
export default Cammera;