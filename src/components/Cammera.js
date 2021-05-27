import React, { useState } from "react";
import Scanner from './Scanner';
import BarcodeService from '../services/BarcodeService'
import './Cammera.css'

function Cammera() {
  
  const [camera,setCamera] = useState(false);
  const [result, setResult] = useState(null);
 
  const service = new BarcodeService();

  const onDetected = result => {
    setResult(result);
    if (result !== '') {
      setCamera(!camera);
      service.salvar(result);
      result = '';
    }
    console.log(result);
  };


  return (
    <div className="camera">
      <p><b>{result ? result : ""}</b></p>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}
export default Cammera;