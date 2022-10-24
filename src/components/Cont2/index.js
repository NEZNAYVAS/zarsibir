/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 21:50:04
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-22 22:17:54
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import cont1 from "../../image/cont1.png";
import cont2 from "../../image/cont2.png";
import cont3 from "../../image/cont3.png";
import cont4 from "../../image/cont4.png";
import cont5 from "../../image/cont5.png";

const Cont2 = () => {
  return (
    <div className="cont2-container">
      <h1 className="cont2-title">
        Железнодорожные перевозки – перечень услуг:
      </h1>
      <div className="container-cont2">
        <div className="cont2-card">
          <img className="card-img-1" src={cont1}></img>
          <p className="card-cont2-paragraf">
            Проработку маршрута железнодорожных перевозок с выбором подходящего
            поезда, вагона, пути следования
          </p>
        </div>
        <div className="cont2-card">
          <img className="card-img-1" src={cont2}></img>
          <p className="card-cont2-paragraf">
            Заключение договоров с другими транспортными компаниями и
            экспедиторами, если необходимы интермодальные перевозки с
            использованием различных видов транспорта
          </p>
        </div>
        <div className="cont2-card">
          <img className="card-img-1" src={cont3}></img>
          <p className="card-cont2-paragraf">
            Страхование грузов, взаимодействие с компаниями-страховщиками,
            оформление необходимых документов, в том числе для прохождения
            грузов через таможню
          </p>
        </div>
        <div className="cont2-card">
          <img className="card-img-1" src={cont4}></img>
          <p className="card-cont2-paragraf">
            Розыск грузов, своевременное предоставление информации о
            местонахождении груза и его продвижении в пути следования
          </p>
        </div>
        <div className="cont2-card">
          <img className="card-img-5" src={cont5}></img>
          <p className="card-cont2-paragraf">
            Получение разрешений на железнодорожные перевозки ценных, опасных
            или негабаритных грузов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cont2;
