/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-20 20:52:32
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-23 22:20:30
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import car from "../../image/header-car.png"
import tr1 from "../../image/header-tr1.png"
import tr2 from "../../image/header-tr2.png"
import tr3 from "../../image/header-tr3.png"
import tr4 from "../../image/header-tr4.png"


const HeaderBanner = () => {
  return (
    <div className="header-banner">
      <h1 className="big-title" id="nav1">
        Транспортно-логистическая компания Заря-Cибирь
      </h1>
      <p className="min-paragraf">
        Наша отличительная черта — высокий уровень профессионализма, богатый
        накопленный практический опыт, широкий спектр дополнительных услуг.
      </p>
      <img src={car} className="header-car"></img>
      <p className="number-text">#1</p>
      <div className="header_container-tr">
      <img src={tr1} className="header-tr1"></img>
      <img src={tr2} className="header-tr2"></img>
      <img src={tr3} className="header-tr3"></img>
      <img src={tr4} className="header-tr4"></img>
      </div>
    </div>
  );
};


export default HeaderBanner;