/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-23 23:32:35
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-24 11:04:56
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */
import main1 from "../../image/main-1.png";
import main2 from "../../image/main-2.png";
import headerLogo from "../../image/headerLogo.png";
import headerImg1 from "../../image/headerImg1.png";
import headerImg2 from "../../image/headerImg2.png";

const Main = () => {
  return (
    <div className="pad">
      <div className="header-2-container">
        <img className="header_logo2" src={headerLogo}></img>
        <div className="header-2-container-1">
          <a href="/">
            <img className="header-ico-2 img1-h" src={headerImg1}></img>
          </a>
          <a href="/">
            <img className="header-ico-2" src={headerImg2}></img>
          </a>
        </div>
        <label>
          <input type="checkbox" />
          <span class="menu">
            {" "}
            <span class="hamburger"></span>{" "}
          </span>
          <ul>
            <li className="color-li">
              <a href="#nav9">Главная</a>
            </li>
            <li className="color-li">
              <a href="#nav10">О компании</a>
            </li>
            <li className="color-li">
              <a href="#nav11">Логистика</a>
            </li>
            <li className="color-li">
              <a href="#nav12">Акции</a>
            </li>
            <li className="color-li">
              <a href="#nav13">Экспедиция</a>
            </li>
            <li className="color-li">
              <a href="#nav14">Китай</a>
            </li>
            <li className="color-li">
              <a href="#nav15">Европа</a>
            </li>
            <li className="color-li">
              <a href="#nav16">Представительства и Контакты</a>
            </li>
          </ul>
        </label>
      </div>
      <div className="main-container">
        <img className="main-1" src={main1}></img>
        <div className="container-main-1" id="nav9">
          <h1 className="title-main-1">
            Транспортно-логистическая компания Заря-Cибирь
          </h1>
          <p className="paragraf-main-1">
            Наша отличительная черта — высокий уровень профессионализма, богатый
            накопленный практический опыт, широкий спектр дополнительных услуг.
          </p>
        </div>
      </div>

      <div className="container-main-2">
        <img className="main-2" src={main2}></img>
        <div className="container-main-3" id="nav10">
          <h1 className="title-main-2" >
            Заря-Сибирь
          </h1>
          <p className="paragraf-main-2">
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

      <div className="continer-main-4">
        <h1 className="title-main-3">Наша компания предлагает</h1>
        <p className="sub-title-3 margin-3">
          Полный комплекс <br /> предоставляемых услуг
        </p>
        <ul className="ul-main-3 width-main-3">
          <li className="main-3-list">
            <p className="list-text-main4">доставка «от двери до двери»</p>
          </li>
          <li className="main-3-list">
            <p className="list-text-main4">
              оформление сопровождающих документов
            </p>
          </li>
          <li className="main-3-list">
            <p className="list-text-main4">координация участников перевозки</p>
          </li>
          <li className="main-3-list">
            <p className="list-text-main4">
              слежение за контейнером в процессе перевозки
            </p>
          </li>
          <li className="main-3-list">
            <p className="list-text-main4">
              оформление грузосопроводительных документов
            </p>
          </li>
          <li className="main-3-list">
            <p className="list-text-main4">
              полный комплекс услуг по обработке, перегрузке грузов
            </p>
          </li>
          <li className="main-3-list">
            <p className="list-text-main4">фрахтование, агентирование</p>
          </li>
          <li className="main-3-list">
            <p className="list-text-main4">таможенное оформление</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
