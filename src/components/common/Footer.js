import React from "react";
import promotion from "../../assets/img/ic-promotion.png";
import heart from "../../assets/img/heart.png";
import misson from "../../assets/img/ic-misson.png";
import random from "../../assets/img/random.png";
import daimond from "../../assets/img/daimond.png";
import btn2 from "../../assets/img/btn-2.gif";
import btn1 from "../../assets/img/btn-1.gif";

function Footer() {
  return (
    <div className="footer d-flex">
      <div className="menu-footer">
        <div className="row">
          <div className="col-md d-flex align-items-center justify-content-center h4">
            <img src={promotion} alt="" className="icon-footer me-2" />
            โปรโมชั่น
          </div>
          <div className="col-md d-flex align-items-center justify-content-center h4">
            <img src={heart} alt="" className="icon-footer me-2" />
            เกมถูกใจ
          </div>
          <div className="col-md d-flex align-items-center justify-content-center h4">
            <img src={misson} alt="" className="icon-footer me-2" />
            ถารกิจ
          </div>
          <div className="col-md d-flex align-items-center justify-content-center h4">
            <img src={random} alt="" className="icon-footer me-2" />
            สุ่มรางวัล
          </div>
          <div className="col-md d-flex align-items-center justify-content-center h4">
            <img src={daimond} alt="" className="icon-footer me-2" />
            ร้านค้า
          </div>
        </div>
      </div>
      <div className="box-btn-footer d-flex align-items-center justify-content-center">
        <img src={btn2} alt="" className="btn-footer" />
        <img src={btn2} alt="" className="btn-footer" />
      </div>
    </div>
  );
}

export default Footer;
