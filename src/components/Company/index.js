/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-21 15:19:46
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-23 22:24:54
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import company from "../../image/company.png"


const Company = () => {
  return (
    <div className="company">
      <h1 className="title-company" id="nav2">о нашей компании</h1>
      <div className="container-company">
        <img className="img-company" src={company}></img>
        <div className="container-text-company">
          <h2 className="sub-title">Заря-Сибирь</h2>
          <p className="paragraf">
            Заря-Сибирь - российская транспортно-логистическая группа компаний,
            основанная в 2015 году. Мы оказываем широкий спектр услуг в области
            грузовых перевозок, таможенного оформления, складского хранения и
            обработки грузов. Обеспечивая стратегическое управление цепочками
            поставок, мы повышаем конкурентоспособность наших клиентов, делая их
            логистику максимально эффективной. Выбирая логистического
            провайдера, Вы также выбираете людей, систему, культуру и ценности
            этой организации. Вы должны быть уверены в том, что все эти элементы
            находятся в нужном балансе и соответствуют Вашим ожиданиям.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
