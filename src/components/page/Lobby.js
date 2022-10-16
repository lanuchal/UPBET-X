import React from "react";

import newgame from "../../assets/img/newgame.png.webp";
import slotclickbet from "../../assets/img/slotclickbet.png.webp";
import hotslot from "../../assets/img/hotslot.png.webp";
import hotfish from "../../assets/img/hotfish.png.webp";
import news from "../../assets/img/news.png.webp";
import freespin from "../../assets/img/freespin.png.webp";
function Lobby() {
  return (
    <div className="d-flex">
      <div className="box-content-1">
        <img src={slotclickbet} alt="" className="content-img-01" />
      </div>
      <div className="box-content-2">
        <img src={hotslot} alt="" className="content-img-02" />
        <br />
        <img src={hotfish} alt="" className="content-img-02" />
      </div>
      <div className="box-content-3">
        <img src={freespin} alt="" className="content-img-03" />
        <div className="d-flex">
        <img src={newgame} alt="" className="content-img-04" />
        <img src={news} alt="" className="content-img-04" />
            
        </div>
      </div>
    </div>
  );
}

export default Lobby;
