/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-23 00:43:58
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-23 22:27:47
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */
import cont4Img from "../../image/cont4Img.png";
import fotter1 from "../../image/fotter1.png";
import fotter2 from "../../image/fotter2.png";
import fotter3 from "../../image/fotter3.png";

const Cont4 = () => {
  return (
    <div className="container-cont4-1">
      <h1 className="title-cont4" id="nav7">
        ЛУЧШиЕ ПРЕДЛОЖЕНИЯ <br /> ПО КОНТЕЙНЕРНЫМ ПЕРЕВОЗКАМ ИЗ европы ОТ
        заря-сибирь
      </h1>
      <div className="container-cont4-2">
        <div className="ul-cont4">
          <h1 className="ul-title">Логистика:</h1>
          <ul className="nav-ul4">
            <li className="li4">Авто (через Грузию + паром)</li>
            <li className="li4">
              Море (Стамбул/Мерсин – Новороссийск, <br /> далее
              ЖД/тент/контейнерная площадка)
            </li>
            <li className="li4">Сборные грузы (море)</li>
            <li className="li4">Авиа</li>
            <li className="li4">Ж/Д </li>
          </ul>
        </div>
        <img className="cont4-img-1" src={cont4Img}></img>
      </div>
      <div className="cont4-1-container">
        <div className="card-cont4">
          <img className="cont4-img-fotter1" src={fotter1}></img>
          <h1 className="cont4-title-fotter">Аналоги</h1>
          <p className="cont4-paragraf-fotter">
            Замена европейских и американских производителей санкционных товаров
            на аналоги (ОЕМ)
          </p>
        </div>
        <div className="card-cont4">
          <img className="cont4-img-fotter2" src={fotter2}></img>
          <h1 className="cont4-title-fotter">Локация</h1>
          <p className="cont4-paragraf-fotter">
            Закупка санкционных товаров у локальных дистрибьюторов /
            производителей
          </p>
        </div>
        <div className="card-cont4">
          <img className="cont4-img-fotter3" src={fotter3}></img>
          <h1 className="cont4-title-fotter">В обход</h1>
          <p className="cont4-paragraf-fotter">
            Ввоз санкционных товаров не напрямую, а через нейтральные страны
          </p>
        </div>
      </div>

      <div className="cont4-text-fotter">
        <h1 className="cont4-title-1">
          Сервис поиска аналогов европейских товаров
        </h1>
        <p className="cont4-paragraf-2 cont4-margin">
          Мы предлагаем Вам оптимальное решение и качественный сервис – услугу
          поиск товара и ВЭД «под ключ».
        </p>
        <p className="cont4-paragraf-2">
          Заря-Сибирь запустил сервис, позволяющий найти китайские аналоги
          европейских товаров и организовать доставку товаров из Китая в Россию
          «от двери до двери» под ключ. Подберем поставщика или производителя,
          поможем провести оплату, доставим и проведем таможенную очистку груза,
          ввозимого в Россию. Возьмем на себя вопросы сертифицирования и
          маркировки товара согласно Техническому регламенту и маркировки
          «Честный знак», предложим юридическое сопровождение контракта.
        </p>
      </div>
    </div>
  );
};

export default Cont4;
