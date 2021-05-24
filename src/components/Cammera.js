import React, { useState } from "react";
import Scanner from './Scanner';
import './Cammera.css'

function Cammera() {
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
    if(result !==''){
            setCamera(!camera);
            
        }
    console.log(result);
  };

  return (
    <div className="camera">
      <p>{result ? result : "Scanning..."}</p>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}
export default Cammera;