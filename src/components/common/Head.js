import React from "react";
import logo from "../../assets/img/logo.gif";
import register from "../../assets/img/loginAndRegister.png";
import coinIc from "../../assets/img/ic-coin.png";
import coin from "../../assets/img/coin.png";
import daimond from "../../assets/img/daimond.png";
import addfrend from "../../assets/img/addfrend.png";
import setting from "../../assets/img/setting.png";
import contact from "../../assets/img/contact.png";

function Head() {
  return (
    <div className="row">
      <div className="col-md-2 d-flex align-items-center justify-content-center">
        <img src={logo} alt="" className="d-block w-100" />
      </div>
      <div className="col-md-2 d-flex align-items-center justify-content-center">
        <img src={register} alt="" className="d-block w-100" />
      </div>
      <div className="col-md d-flex align-items-center justify-content-center">
        <span className="box-text w-100 text-light d-flex align-items-center position-relative">
          <img src={coinIc} alt="" className="img-coin" />
          <p className="text-center w-100 h5 pt-1">
            <strong>99.00</strong>
          </p>
        </span>
      </div>
      <div className="col-md d-flex align-items-center justify-content-center">
        <span className="box-text w-100 text-light d-flex align-items-center position-relative">
          <img src={daimond} alt="" className="img-coin" />
          <p className="text-center w-100 h5 pt-1">
            <strong>99.00</strong>
          </p>
        </span>
      </div>
      <div className="col-md d-flex align-items-center justify-content-center">
        <span className="box-text w-100 text-light d-flex align-items-center position-relative">
          <img src={coin} alt="" className="img-coin" />
          <p className="text-center w-100 h5 pt-1">
            <strong>99.00</strong>
          </p>
        </span>
      </div>
      <div className="col-md-1 text-center ms-5 ">
        <img src={addfrend} alt="" className="img-icon" />
        <p className="text-center w-100 pt-1 text-light">
          <strong>แนะนำเพื่อน</strong>
        </p>
      </div>
      <div className="col-md-1 text-center">
        <img src={contact} alt="" className="img-icon" />
        <p className="text-center w-100 pt-1 text-light">
          <strong>สอบถาม</strong>
        </p>
      </div>
      <div className="col-md-1 text-center">
        <img src={setting} alt="" className="img-icon" />
        <p className="text-center w-100 pt-1 text-light">
          <strong>ตั้งค่า</strong>
        </p>
      </div>
    </div>
  );
}

export default Head;
