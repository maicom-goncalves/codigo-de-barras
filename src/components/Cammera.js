import React, { useState } from "react";
import Scanner from './Scanner';
import BarcodeService from '../services/BarcodeService'

import './Cammera.css'

function Cammera() {

  const service = new BarcodeService();
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
    if (result !== null) {
      setCamera(!camera);
      service.salvar(result);
      result = null;
    }
    console.log(result);
  };


  return (
    <div className="camera">
      {<p><b>{ result ? result : ""}</b></p>}
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
      <button onClick={()=>setCamera(!camera)} className="botao">ler proximo</button>
    </div>
  );

}


export default Cammera;