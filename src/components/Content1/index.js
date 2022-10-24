/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-21 17:16:16
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-21 18:05:57
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import content1 from "../../image/content1.png"
 
const Contant1 = () => {
  return (
    <div className="content">
      <div className="content1">
        <h3 className="title-content">Автоперевозки</h3>
        <img src={content1} className="content-img"></img>
      </div>
      <div className="content1">
        <h3 className="title-content-1">В чем выгода?</h3>
        <p className="content-subparagraf">
          Доставка грузов с помощью автомобильного транспорта – одно из основных
          направлений деятельности нашей компании. Преимущество авто доставки в
          международном сообщении – это принцип «от двери до двери», который
          реализуется “в одну погрузку”, то есть без необходимости перегрузки с
          одного вида транспорта на другой. Особенно популярна доставка
          автомобильным транспортом грузов из КИТАЯ и ТУРЦИИ. Большие
          возможности в вариациях и схемах доставки помноженное на разветвленную
          сеть хороших современных дорог, обилие складов по всему пути
          следования – ЭТИМ обусловлен успех такого вида перевозок и
          демократичные цены.
        </p>
      </div>
    </div>
  );
};


export default Contant1;