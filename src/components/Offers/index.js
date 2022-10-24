/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-21 16:59:04
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-23 22:24:41
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

const Offers = () => {
  return (
    <div className="offer">
      <h1 className="title-company margin">Наша компания предлагает</h1>
      <div className="offer-container">
        <h2 className="offer-paragraf margin-offer" id="nav3">Полный комплекс предоставляемых услуг</h2>
        <div className="list">
          <ul className="list1">
            <li className="list-punkt">доставка «от двери до двери»</li>
            <li className="list-punkt">оформление сопровождающих документов</li>
            <li className="list-punkt">координация участников перевозки</li>
            <li className="list-punkt">слежение за контейнером в процессе перевозки</li>
          </ul>
          <ul className="list1">
            <li className="list-punkt">оформление грузосопроводительных документов</li>
            <li className="list-punkt">полный комплекс услуг по обработке, перегрузке грузов</li>
            <li className="list-punkt">фрахтование, агентирование</li>
            <li className="list-punkt">таможенное оформление</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Offers;