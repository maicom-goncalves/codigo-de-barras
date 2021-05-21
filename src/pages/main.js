import React, { useState } from "react";
import { Modal, Button } from 'antd';
import Scanner from "../components/Scanner"
import qrcode from '../img/qrcode002.png'
import barcode from '../img/barcode003.jpg'
//import Cammera from '../components/Cammera'
import "./main.css"

function Main() {
    const [modalVisible, setModalVisible] = useState(false);
    const [camera, setCamera] = useState(false);
    const [result, setResult] = useState('');

    console.log(setModalVisible);
    console.log(modalVisible);

    

    const onDetected = result => {
        setResult(result);
        console.log(result);

        /*if(result !==''){
            setCamera(!camera);
        }*/
    };
    const codigoDeBarras = result;
    console.log(codigoDeBarras + ' codigo');

    return (
        <div id="main">
            <button className="barcode" onClick={() => setCamera(!camera)}>
                <img className="icone-barcode" src={barcode} />
                <br />
                <b> {camera ? "Parar" : "Codigo de Barras"}</b>
            </button>
            <br />
            <Button onClick={() => setModalVisible(true)}> modal </Button>
            {modalVisible ? (
                <Modal visible={modalVisible}
                    onOk={() => setModalVisible(false)}
                    onCancel={() => setModalVisible(false)}>
                    <div>
                        jwndndinendendneidnieninindnd
                       <button className="barcode">
                            <img className="icone-qrcode" src={qrcode} />
                            <br />
                            <b>QR CODE</b>
                        </button>
                    </div>

                </Modal>
            )
                : null}
            <div className="container">
                {camera && <Scanner onDetected={onDetected} />}
            </div>
            <button className="barcode">
                <img className="icone-qrcode" src={qrcode} />
                <br />
                <b>QR CODE</b>
            </button>
        </div>
    )

}
export default Main;