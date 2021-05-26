import React from "react";
import { Modal } from 'antd';
import qrcode from '../img/qrcode002.png'
import barcode from '../img/barcode003.jpg'
import Cammera from '../components/Cammera'
import 'antd/dist/antd.css';
import "./main.css"

class Main extends React.Component {
    state = {
        modal1Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    render() {
        return (
            <div id="main">
                <button className="barcode" onClick={() => this.setModal1Visible(true)}>
                    <img className="icone-barcode" src={barcode} />
                    <br />
                    <b>codigo de barras</b>
                </button>

                <br />
                <Modal
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal1Visible(false)}>
                    <Cammera />
                </Modal>
                <button className="barcode">
                    <img className="icone-qrcode" src={qrcode} />
                    <br />
                    <b>QR CODE</b>
                </button>
            </div>
        )
    }



}
export default Main;