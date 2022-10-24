/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 17:43:48
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-23 22:25:38
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import img10 from "../../image/img-10.png" 

const Contant10 = () => {
  return (
    <div className="container-10">
      <h1 className="title-10" id="nav4">АКЦИИ НА ОКТЯБРЬ 2022</h1>
      <div className="cont-10">
        <p className="paragraf-10">
          Дорогие клиенты! В связи с известной нестабильностью на рынке
          перевозок из Китая ставки китайских перевозчиков меняются еженедельно,
          а иногда и ежедневно. Убедительная просьба, обязательно
          консультироваться с нашим менеджером по актуальности текущих цен и
          наличию мест!
          <br />
          <span className="span-10">
          Мы возим из ЛЮБОГО города Китая! Если Вы не нашли интересующее Вас
          направление доставки в таблицах, обратитесь к нашим специалистам, мы
          подберём самые лучшие варианты по рынку.
          </span>
        </p>
        <img className="img-10" src={img10}></img>
      </div>
    </div>
  );
};

export default Contant10;
