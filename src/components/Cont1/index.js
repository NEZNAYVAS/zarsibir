/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 20:55:03
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-23 22:26:42
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import conts from "../../image/conts.png"

const Conts = () => {
  return (
    <div className="container-conts">
      <h1 className="conts-title" id="nav5">экспедиция</h1>
      <div className="containet-conts-card">
        <div className="card-text-conts">
          <h1 className="conts-title-1">Что такое транспортная экспедиция?</h1>
          <p className="conts-paragraf-1">
            Транспортная экспедиция по железной дороге – это комплекс услуг,
            которые оказывает транспортная компания грузоотправителям и
            грузополучателям. Экспедиция подразумевает целый спектр услуг, хотя
            совсем недавно экспедиторы отвечали только за сопровождение грузов,
            транспортируемых по автомобильным или железным дорогам и морским
            путям.
          </p>
        </div>
        <img className="conts-img" src={conts}></img>
      </div>
    </div>
  );
};

export default Conts;
