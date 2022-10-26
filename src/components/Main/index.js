/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-23 23:32:35
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-26 18:11:26
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */
import main1 from "../../image/main-1.png";
import main2 from "../../image/main-2.png";
import headerLogo from "../../image/headerLogo.png";
import headerImg1 from "../../image/headerImg1.png";
import headerImg2 from "../../image/headerImg2.png";
import mainimg5 from "../../image/mainImage-5.png";
import mainimg6 from "../../image/mainImage-6.png";
import mainimg7 from "../../image/mainImage-7.png";
import mainimg8 from "../../image/mainImage-8.png";
import mainimg9 from "../../image/mainImage-9.png";
import logoFotter from "../../image/logoFotter.png"
import footer1 from "../../image/footer-1.png"
import footer2 from "../../image/footer-2.png"
import footer3 from "../../image/footer-3.png"
import footer4 from "../../image/footer-4.png"
import mainimg10 from "../../image/mainImage-10.png";
import transport1Img from "../../image/transport1Img.png";
import img11 from "../../image/img11.png";
import img112 from "../../image/img11-2.png";
import img113 from "../../image/img11-3.png";
import Card12 from "../Card";
import Cont2 from "../Cont2";
import Cont3 from "../Cont3";
import Cont4 from "../Cont4";

import { useEffect, useState } from "react";
import directus from "../../directus.js";

import Content11 from "../Content11";

const Main = () => {
  const [sale, setSale] = useState();
  useEffect(() => {
    (async () => {
      let result = await directus.items("SALES").readByQuery();
      setSale(result.data);
    })();
  }, []);

  return (
    sale && (
      <div className="pad">
        <div className="header-2-container">
          <img className="header_logo2" src={headerLogo}></img>
          <div className="header-2-container-1">
            <a href="https://wa.me/79631686817">
              <img className="header-ico-2 img1-h" src={headerImg1}></img>
            </a>
            <a href="https://t.me/Zaryasib777">
              <img className="header-ico-2" src={headerImg2}></img>
            </a>
          </div>
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
        <div className="main-container">
          <img className="main-1" src={main1}></img>
          <div className="container-main-1" id="nav9">
            <h1 className="title-main-1">
              Транспортно-логистическая компания Заря-Cибирь
            </h1>
            <p className="paragraf-main-1">
              Наша отличительная черта — высокий уровень профессионализма,
              богатый накопленный практический опыт, широкий спектр
              дополнительных услуг.
            </p>
          </div>
        </div>

        <div className="container-main-2">
          <img className="main-2" src={main2}></img>
          <div className="container-main-3" id="nav10">
            <h1 className="title-main-2">Заря-Сибирь</h1>
            <p className="paragraf-main-2">
              Заря-Сибирь - российская транспортно-логистическая группа
              компаний, основанная в 2015 году. Мы оказываем широкий спектр
              услуг в области грузовых перевозок, таможенного оформления,
              складского хранения и обработки грузов. Обеспечивая стратегическое
              управление цепочками поставок, мы повышаем конкурентоспособность
              наших клиентов, делая их логистику максимально эффективной.
              Выбирая логистического провайдера, Вы также выбираете людей,
              систему, культуру и ценности этой организации. Вы должны быть
              уверены в том, что все эти элементы находятся в нужном балансе и
              соответствуют Вашим ожиданиям.
            </p>
          </div>
        </div>

        <div className="continer-main-4">
          <h1 className="title-main-3">Наша компания предлагает</h1>
          <p className="sub-title-3 margin-3" id="nav11">
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
              <p className="list-text-main4">
                координация участников перевозки
              </p>
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
        <div className="continer-main-5">
          <div className="main-5-card">
            <h1 className="card-title-5">Автоперевозки</h1>
            <img className="img-main-5" src={mainimg5}></img>
            <div className="main-5-text">
              <h2 className="subtitle-text-5">В чем выгода?</h2>
              <p className="paragraf-main-5">
                Доставка грузов с помощью автомобильного транспорта – одно из
                основных направлений деятельности нашей компании. Преимущество
                авто доставки в международном сообщении – это принцип «от двери
                до двери», который реализуется “в одну погрузку”, то есть без
                необходимости перегрузки с одного вида транспорта на другой.
                Особенно популярна доставка автомобильным транспортом грузов из
                КИТАЯ и ТУРЦИИ. Большие возможности в вариациях и схемах
                доставки помноженное на разветвленную сеть хороших современных
                дорог, обилие складов по всему пути следования – ЭТИМ обусловлен
                успех такого вида перевозок и демократичные цены.
              </p>
            </div>
          </div>

          <div className="continer-main-4 margin-main-ul">
            <h1 className="title-main-3">
              Лучшее предложение по автоперевозкам от Заря-Сибирь
            </h1>
            <br />
            <ul className="ul-main-3 width-main-3">
              <li className="main-3-list">
                <p className="list-text-main4">
                  Отсутствие какой-либо привязки к расписанию{" "}
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Возможность самостоятельно составлять маршрут
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Возможность доставки груза "до двери"
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Возможность доставки небольших объемов груза
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">Маневренность и проходимость</p>
              </li>
            </ul>
          </div>

          <div className="main-5-card">
            <h1 className="card-title-5">морские перевозки</h1>
            <img className="img-main-5" src={mainimg6}></img>
            <div className="main-5-text">
              <h2 className="subtitle-text-5">Плюсы морских перевозок</h2>
              <p className="paragraf-main-5">
                Доставка морем с помощью современных морских
                судов-контейнеровозов различного водоизмещения – это наиболее
                экономически выгодный способ доставки. Он позволяет значительно
                снизить транспортные расходы при доставке больших партий как
                генеральных грузов, так и сборных грузов. Морская перевозка
                широко используется и как часть мультимодальной схемы. На
                сегодня доставка морем очень востребована для широчайшего
                спектра грузов как из стран самых больших мировых экспортеров –
                Китая, Тайваня, Кореи, Турции. Наша компания успешно работает по
                международным и внутренним направлениям, основные из которых это
                Китай и Турция. Мы перевозим авиа, морским, железнодорожным,
                грузовым транспортом, а также в мультимодальном режиме.
              </p>
            </div>
          </div>

          <div className="main-5-card hei">
            <h1 className="card-title-5">Авиаперевозки</h1>
            <img className="img-main-7" src={mainimg7}></img>
            <div className="main-5-text">
              <h2 className="subtitle-text-5">
                Лучшее предложение по перевозкам
              </h2>
              <p className="paragraf-main-5">
                Доставка самолетом грузов является одним из самых популярных
                способов перевозок. Тысячи километров пути самолет преодолевает
                за несколько часов. Очень часто доставка воздушными путями
                сообщения является частью или этапом мульти модальных схем
                перевозки. Высокая скорость доставки – основное и, нередко,
                решающее преимущество. В данном виде перевозки нет
                географических препятствий, и самолет – это самый безопасный вид
                транспорта.
              </p>
            </div>
          </div>

          <div className="continer-main-4">
            <h1 className="title-main-3">
              Авиадоставку в Россию можно организовать двумя схемами
            </h1>
            <ul className="ul-main-3 width-main-3 top-1-1">
              <li className="main-3-list">
                <p className="list-text-main4">
                  Прилететь с грузом до одного из аэропортов г. Москвы. Это
                  быстрее, но дороже.
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Использовать услугу: «самолет + автотранспорт» этот путь лучше
                  подходит для некрупных партий. Подразумевает: авиа доставку
                  грузов до Турции, Китая.
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Вывоз груза с аэропорта и его доставку с одного из складов
                  консолидации. (этот путь чуть дольше, но дешевле).
                </p>
              </li>
            </ul>
            <p className="sub-title-3-footer margin-3-footer">
              Наши представители в стране отправления готовы связаться с Вашим
              поставщиком и организовать доставку груза на самолет,
              проконсультировать и оформить нужные документы.
            </p>
          </div>

          <div className="main-5-card hei2">
            <h1 className="card-title-5">ж/д перевозки</h1>
            <img className="img-main-8" src={mainimg8}></img>
            <div className="main-5-text">
              <h2 className="subtitle-text-5">Преимущество</h2>
              <p className="paragraf-main-5">
                Железнодорожные контейнерные перевозки - наиболее востребованный
                вид логистических услуг. Такой способ доставки грузов отличается
                повышенной безопасностью за счет использования прочных стальных
                контейнеров. В процессе грузоперевозок они надежно защищают
                имущество от осадков и повреждений, вне зависимости от дальности
                выбранного маршрута. Другим преимуществом логистической услуги
                можно считать универсальность. Перевозка контейнерами позволяет
                транспортировать товарные партии любых видов и форм, в том числе
                негабаритные, опасные и особо хрупкие. Заказать практичную
                услугу можно в нашей транспортно-логистической компании
                Заря-Сибирь. Мы выполняем перевозку контейнеров жд транспортом
                на территории РФ и в государства ближнего/дальнего зарубежья.
                Наша компания сотрудничает с юридическими лицами, используя в
                работе передовое оборудование и транспортную технику.
              </p>
            </div>
          </div>

          <div className="continer-main-4">
            <h1 className="title-main-3">
              Заря-Сибирь предлагает основные этапы контейнерных Ж/Д перевозок
            </h1>
            <br />
            <ul className="ul-main-3 width-main-3">
              <li className="main-3-list">
                <p className="list-text-main4">
                  Транспортировка жд транспортом с применением контейнеров
                  осуществляется нашей организацией в стандартной
                  последовательности;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Клиенту предоставляются предварительные консультации;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Заключается договор на проведение работ;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Прорабатываются схемы погрузки и маршрут транспортировки
                  собственности;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Оформляются все надлежащие документы для растаможки;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  В назначенный день происходит погрузка товарных партий;
                </p>
              </li>

              <li className="main-3-list">
                <p className="list-text-main4">
                  {" "}
                  Выполняется контейнерная жд перевозка;
                </p>
              </li>

              <li className="main-3-list">
                <p className="list-text-main4">
                  По прибытии в указанное место осуществляется разгрузка
                  металлических коробов с использованием спецтехники. В случае
                  необходимости мы можем оказать экспедиторское сопровождение
                  товара на всем пути его следования и во время остановок на
                  всем пути его следования и во время остановок на транзитных
                  складах.
                </p>
              </li>
            </ul>
          </div>

          <div className="continer-main-4 margin-top-top">
            <h1 className="title-main-3">
              Как рассчитывается цена на контейнерные Ж/Д перевозки
            </h1>
            <br />
            <ul className="ul-main-3 width-main-3">
              <li className="main-3-list">
                <p className="list-text-main4">
                  Транспортировка скоропортящейся, опасной и хрупкой продукции
                  будет стоить дороже, чем доставка других видов товара.
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">Вид контейнера.</p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Стандартные и с открытым верхом стоят дешевле, чем
                  рефрижераторы, танк-контейнеры и ряд других.
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">Протяженность маршрута.</p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Чем дальше находится конечный получатель продукции, тем дороже
                  оценивается услуга.
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  Необходимость в проведении дополнительных работ.
                </p>
              </li>

              <li className="main-3-list">
                <p className="list-text-main4">
                  Предоставление охраны, упаковка, маркировка и ряд других.
                </p>
              </li>
            </ul>
          </div>

          <div className="main-5-card hei3">
            <h1 className="card-title-5">Мультимодальная схема</h1>
            <img className="img-main-9" src={mainimg9}></img>
            <div className="main-5-text">
              <h2 className="subtitle-text-5">Мультимедийная перевозка</h2>
              <p className="paragraf-main-5">
                Мультимодальная перевозка — это доставка грузов по одному
                контракту, но осуществляемая несколькими разновидностями
                транспорта. Логистический оператор в этом случае несёт перед
                заказчиком ответственность за эту перевозку полностью, даже если
                эта транспортировка производится разными видами транспорта и
                различными субперевозчиками. Наиболее распространенный вид
                мультимодальных перевозок – это комбинирование железнодорожного
                и автомобильного транспорта. От фабрики-производителя груз в
                контейнере с помощью грузового автомобиля перевозится на
                железнодорожный порт отправки, оттуда поездом следует основную
                часть пути, затем перегружается снова на автомобиль и
                доставляется на склад заказчика.
              </p>
            </div>
          </div>

          <div className="continer-main-4">
            <h1 className="title-main-3">
              Мультимодальная схема идеально подходят в следующих случаях
            </h1>
            <br />
            <ul className="ul-main-3 width-main-3">
              <li className="main-3-list">
                <p className="list-text-main4">
                  когда нет возможности доставить груз одним видом транспорта
                  напрямую от отправителя получателю; (получатель находится на
                  удалении от морских портов, нет железной дороги или
                  автодороги, подходящей для движения автопоездов, и т.п.);
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  прямая доставка не рентабельна по стоимости или срокам;
                </p>
              </li>

              <p className="centr-paragraf">
                {" "}
                Преимущества такой перевозки очевидны:
              </p>
              <li className="main-3-list">
                <p className="list-text-main4">
                  доставку груза можно осуществить буквально из любой точки в
                  любую точку;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  позволяет значительно удешевить стоимость доставки, или
                  сократить ее сроки;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  невероятная гибкость логистических схем;
                </p>
              </li>
              <li className="main-3-list">
                <p className="list-text-main4">
                  мультимодальная перевозка особенно привлекательна для сборных
                  грузов и небольших партий товаров;
                </p>
              </li>
            </ul>
          </div>
          <div className="main-51-card">
            <div className="main-5-text">
              <h2 className="subtitle-text-51" id="nav12">
                {sale.title}
              </h2>
              <p className="paragraf-main-51">{sale.description}</p>
              <img className="img-main-10" src={mainimg10}></img>
            </div>
          </div>
          <Content11 />
          <Card12 />

          <div className="container-transpor-1">
            <h1 className="card-title-52" id="nav13">экспедиция</h1>
            <img className="transport1Img" src={transport1Img}></img>
            <p className="title-transpot-52">
              Что такое транспортная экспедиция?
            </p>
            <p className="title-paragraf-52">
              Транспортная экспедиция по железной дороге – это комплекс услуг,
              которые оказывает транспортная компания грузоотправителям и
              грузополучателям. Экспедиция подразумевает целый спектр услуг,
              хотя совсем недавно экспедиторы отвечали только за сопровождение
              грузов, транспортируемых по автомобильным или железным дорогам и
              морским путям.
            </p>
          </div>
          <Cont2 />
          <div id="nav14"><Cont3 /></div>
          <div id="nav15"><Cont4 /></div>

          <div>
            <div className="contakt-container">
              <h1 className="contakt-top-title" id="nav16">
                Представительства и контакты
              </h1>
              <div className="container-1-contakt">
                <div className="contakt-address-container">
                  <h1 className="contakt-title">ГЛАВНЫЙ ОФИС В МОСКВЕ</h1>
                  <a
                    className="contakt-number"
                    target="_blank"
                    href="tel:+79631686817"
                  >
                    +7-(963)-168-68-17
                  </a>
                  <div className="container-contakt-2">
                    <a
                      className="contakt-address"
                      href="https://yandex.ru/maps/-/CCUZRKcApA"
                      target="_blank"
                    >
                      Москвовская область, Береговая ул., 10 корпус 1,
                      Долгопрудный
                    </a>
                    <p className="time">Пн-Пт 9:00 - 17:30 (по Мск. времени)</p>
                    <a
                      className="mail-address"
                      target="_blank"
                      href="mailto:zaryasib777@gmail.com"
                    >
                      zaryasib777@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <a href="https://goo.gl/maps/tW26LCkensQ5Lrhw8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.0209107975387!2d37.48993987299323!3d55.91325003887676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b539a1198630ad%3A0x2dea28c8fe726477!2z0JHQtdGA0LXQs9C-0LLQsNGPINGD0LsuLCAxMCDQutC-0YDQv9GD0YEgMSwg0JTQvtC70LPQvtC_0YDRg9C00L3Ri9C5LCBNb3Njb3cgT2JsYXN0LCAxNDE3MDE!5e0!3m2!1sru!2sru!4v1666525492011!5m2!1sru!2sru"
                      width="340"
                      height="300"
                    ></iframe>
                  </a>
                </div>
              </div>

              <div className="container-1-contakt-2">
                <div className="contakt-address-container">
                  <h1 className="contakt-title">ГЛАВНЫЙ ОФИС В китае</h1>
                  <a
                    className="contakt-number"
                    target="_blank"
                    href="tel:+79631686817"
                  >
                    +7-(963)-168-68-17
                  </a>
                  <div className="container-contakt-2">
                    <a
                      className="contakt-address"
                      href="https://goo.gl/maps/mq7mQG6ycx4Yawo99"
                      target="_blank"
                    >
                      Room 2201, 21/F, Sinolife Tower, No.710 Zhangyang Rd
                      Pudong / Shanghai China
                    </a>
                    <p className="time">Пн-Пт 9:00 - 17:30 (по Мск. времени)</p>
                    <a
                      className="mail-address"
                      target="_blank"
                      href="mailto:zaryasib777@gmail.com"
                    >
                      zaryasib777@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <a href="https://yandex.ru/maps/-/CCUZVCUsWB">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.6079754526506!2d121.52033087584263!3d31.229085618672272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270c4a8da3c87%3A0x844dde17b1f6a990!2zU2lub2xpZmUgVG93ZXIsIOS4iua4r-WFreWMuiBQdSBEb25nIFhpbiBRdSwgU2hhbmcgSGFpIFNoaSwg0JrQuNGC0LDQuSwgMjAwMTIw!5e0!3m2!1sru!2sru!4v1666615032681!5m2!1sru!2sru"
                      width="340"
                      height="300"
                    ></iframe>
                  </a>
                </div>
              </div>

              <div className="container-1-contakt-3">
                <div className="contakt-address-container">
                  <h1 className="contakt-title">ГЛАВНЫЙ ОФИС В турции</h1>
                  <a
                    className="contakt-number"
                    target="_blank"
                    href="tel:+79631686817"
                  >
                    +7-(963)-168-68-17
                  </a>
                  <div className="container-contakt-2">
                    <a
                      className="contakt-address"
                      href="https://goo.gl/maps/uuUQu6EVwkNN181HA"
                      target="_blank"
                    >
                      Kanyon Office Building Floor 7 Buyukdere Avenue No 186
                      Istanbul Sanyer 34394 Türkiye
                    </a>
                    <p className="time">Пн-Пт 9:00 - 17:30 (по Мск. времени)</p>
                    <a
                      className="mail-address"
                      target="_blank"
                      href="mailto:zaryasib777@gmail.com"
                    >
                      zaryasib777@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <a href="https://goo.gl/maps/tW26LCkensQ5Lrhw8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.58572904609!2d29.008341915353057!3d41.07804727929382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7d3361b3e8f%3A0x2cd03cb8f4e06c62!2sLaw%20Firm%20Istanbul%20Kili%C3%A7%20%26%20Partners!5e0!3m2!1sru!2sru!4v1666615208675!5m2!1sru!2sru"
                      width="340"
                      height="300"
                    ></iframe>
                  </a>
                </div>
              </div>
            </div>
          </div>






                            <div>
                            <div className="footer-container-bottom">
      <img className="footer-img" src={logoFotter} ></img>
      <ul className="nav-ul-footer">
        <a className="footer-link" href="#nav9">Главная</a>
        <a className="footer-link" href="#nav10">О компании</a>
        <a className="footer-link" href="#nav11">Логистика</a>
        <a className="footer-link" href="#nav12">Акции</a>
        <a className="footer-link" href="#nav13">Экспедиция</a>
        <a className="footer-link" href="#nav14">Китай</a>
        <a className="footer-link" href="#nav15">Европа</a>
        <a className="footer-link" href="#nav16">Представительства и Контакты </a>
      </ul>

      <div className="footer-contakt-5">
        <a className="contakt-tel-5" target="_blank" href="tel:+79631686817">
        <img className="tel-5-footer" src={footer1}></img>
        <p className="paragraf-footer-5">+7-(963)-168-68-17</p>
        </a>
        <a className="contakt-mail-5" target="_blank" href="mailto:zaryasib777@gmail.com">
        <img className="mail-5-footer" src={footer2}></img>
        <p className="paragraf-footer-5">zaryasib777@gmail.com</p>
        </a>
      </div>
      <div className="footer-contakt-6">
        <a className="contakt-watsapp-5" target="_blank" href="https://wa.me/79631686817">
          <img className="watsapp-footer" src={footer3}></img>
        </a>
        <a className="contakt-tellegram-5" target="_blank" href="https://t.me/Zaryasib777">
        <img className="tellegram-footer" src={footer4}></img>
        </a>
      </div>
    </div>
                            </div>


        </div>
      </div>
    )
  );
};

export default Main;
