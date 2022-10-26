/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 20:32:26
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-26 15:32:46
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import img1 from "../../image/img12-1.png";
import img2 from "../../image/img12-2.png";
import img3 from "../../image/img12-3.png";
import img4 from "../../image/img12-4.png";

const Card = () => {
  return (
    <div className="card-12 neo">
      <h1 className="card-title">услуги</h1>
      <div className="container-card-12">
        <div className="card-12 card-12-1">
          <img className="img12-1" src={img1}></img>
          <h1 className="title-card-12">
            Местная
            <br />
            доставка
          </h1>
          <p className="paragraf-card-12">
            Мы поможем решить любой вопрос Классификация товаров по ТН ВЭД
            Подготовка документов и регистрация Экспертиза ВЭ контрактов и
            многое др.
          </p>
        </div>
        <div className="card-12 card-12-1">
          <img className="img12-2" src={img2}></img>
          <h1 className="title-card-12">
            Таможенное
            <br />
            оформление
          </h1>
          <p className="paragraf-card-12">
            Мы поможем решить любой вопрос Классификация товаров по ТН ВЭД
            Подготовка документов и регистрация Экспертиза ВЭ контрактов и
            многое др.
          </p>
        </div>
        <div className="card-12 card-12-1">
          <img className="img12-3" src={img3}></img>
          <h1 className="title-card-12">
            Сертификация
            <br />
            грузов
          </h1>
          <p className="paragraf-card-12">
            Все виды разрешительных документов Сертификат соответствия ТР ЕАЭС,
            ГОСТ Р Свидетельство о госрегистрации Сертификат РосСвязи
            Нотификация ФСБ и многое др.
          </p>
        </div>
        <div className="card-12 card-12-1">
          <img className="img12-4" src={img4}></img>
          <h1 className="title-card-12">
            Страхование
            <br />
            грузов
          </h1>
          <p className="paragraf-card-12">
            Ваши грузы в безопасности Ответственность за все риски, повреждение,
            утрату части груза Ответственность за полную гибель груза и многое
            др.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
