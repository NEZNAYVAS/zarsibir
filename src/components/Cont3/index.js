/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 23:49:48
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-23 22:27:29
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import cont3 from "../../image/cont3-img.png";
import cont3Img1 from "../../image/cont3Img1.png"
import cont3Img2 from "../../image/cont3Img2.png"
import cont3Img3 from "../../image/cont3Img3.png"
import cont3Img4 from "../../image/cont3Img4.png"
import cont3Img5 from "../../image/cont3Img5.png"

const Cont3 = () => {
  return (
    <div className="cont3-container">
      <h1 className="cont4-title" id="nav6">
        ЛУЧШиЕ ПРЕДЛОЖЕНИЯ <br /> ПО КОНТЕЙНЕРНЫМ ПЕРЕВОЗКАМ ИЗ КИТАЯ ОТ
        заря-сибирь
      </h1>
      <div className="container-cont3">
        <img className="cont-img3" src={cont3}></img>
        <p className="cont3-paragraf3">
          Ваш контейнер из Китая приедет быстро и без проблем. Уже два
          десятилетия мы занимаемся контейнерными перевозками из Китая в Россию.
          Перевозка контейнеров FCL для бизнеса от Заря-Сибирь – это безопасная,
          надежная и выгодная доставка Ваших товаров “от двери до двери”. Мы
          разрабатываем для наших клиентов оптимальные транспортно-логистические
          решения, гибко варьируя маршруты перевозок, цены и сроки доставки.{" "}
        </p>
      </div>
      <div className="container-img-cont3">
        <div className="cont-col-3">
          <img className="cont3-img-1" src={cont3Img1}></img>
          <p className="cont3-subparagraf">Автоперевозки из Китая</p>
        </div>
        <div className="cont-col-3">
          <img className="cont3-img-2" src={cont3Img2}></img>
          <p className="cont3-subparagraf">Авиаперевозки из Китая</p>
        </div>
        <div className="cont-col-3">
          <img className="cont3-img-3" src={cont3Img3}></img>
          <p className="cont3-subparagraf">Морские перевозки из Китая</p>
        </div>
        <div className="cont-col-3">
          <img className="cont3-img-4" src={cont3Img4}></img>
          <p className="cont3-subparagraf">Ж/Д перевозки из Китая</p>
        </div>
        <div className="cont-col-3">
          <img className="cont3-img-5" src={cont3Img5}></img>
          <p className="cont3-subparagraf">Контейнерные перевозки из Китая</p>
        </div>
      </div>
    </div>
  );
};

export default Cont3;
