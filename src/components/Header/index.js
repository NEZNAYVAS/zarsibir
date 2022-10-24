/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-20 20:10:17
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-24 16:52:37
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import logo from "../../image/logo.png";
import tel from "../../image/tel.png";
import tellegram from "../../image/tellegram.png";

const HeaderTop = () => {
  return (
      <div className="header">
        <img src={logo} className="logo"></img>
        <div className="nav">
          <a href="#nav1" className="link">
            Главная
          </a>
          <a href="#nav2" className="link">
            О компании
          </a>
          <a href="#nav3" className="link">
            Логистика
          </a>
          <a href="#nav4" className="link">
            Акции
          </a>
          <a href="#nav5" className="link">
            Экспедиция
          </a>
          <a href="#nav6" className="link">
            Китай
          </a>
          <a href="#nav7" className="link">
            Европа
          </a>
          <a href="#nav8" className="link">
            Представительства и Контакты
          </a>
        </div>
        <div className="soc">
          <a href="https://t.me/Zaryasib777" target="_blank" className="link-soc">
            <img src={tellegram} className="img-soc"></img>
          </a>
          <a href="https://wa.me/79631686817" target="_blank" className="link-soc">
            <img src={tel} className="img-soc"></img>
          </a>
        </div>
      </div>
  );
};

export default HeaderTop;
