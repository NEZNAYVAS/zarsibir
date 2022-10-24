/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-21 18:49:15
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-21 19:51:59
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import content4 from "../../image/content4.png";

const Contant4 = () => {
  return (
    <div className="content4">
      <div className="content4-cont">
        <h3 className="title-content mar">Авиаперевозки</h3>
        <img src={content4} className="content-img4"></img>
      </div>
      <div className="content4-cont">
        <h3 className="title-content-1 cont-4">Лучшее предложение по перевозкам</h3>
        <p className="content-subparagraf">
          Доставка самолетом грузов является одним из самых популярных способов
          перевозок. Тысячи километров пути самолет преодолевает за несколько
          часов. Очень часто доставка воздушными путями сообщения является
          частью или этапом мульти модальных схем перевозки. Высокая скорость
          доставки – основное и, нередко, решающее преимущество. В данном виде
          перевозки нет географических препятствий, и самолет – это самый
          безопасный вид транспорта.
        </p>
      </div>
    </div>
  );
};

export default Contant4;
