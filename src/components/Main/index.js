/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-23 23:32:35
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-24 12:34:19
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
          <h1 className="title-main-2">Заря-Сибирь</h1>
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
      <div className="continer-main-5">
        <div className="main-5-card">
          <h1 className="card-title-5">Автоперевозки</h1>
          <img className="img-main-5" src={mainimg5}></img>
          <div className="main-5-text">
            <h2 className="subtitle-text-5">В чем выгода?</h2>
            <p className="paragraf-main-5">
              Доставка грузов с помощью автомобильного транспорта – одно из
              основных направлений деятельности нашей компании. Преимущество
              авто доставки в международном сообщении – это принцип «от двери до
              двери», который реализуется “в одну погрузку”, то есть без
              необходимости перегрузки с одного вида транспорта на другой.
              Особенно популярна доставка автомобильным транспортом грузов из
              КИТАЯ и ТУРЦИИ. Большие возможности в вариациях и схемах доставки
              помноженное на разветвленную сеть хороших современных дорог,
              обилие складов по всему пути следования – ЭТИМ обусловлен успех
              такого вида перевозок и демократичные цены.
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
              Доставка морем с помощью современных морских судов-контейнеровозов
              различного водоизмещения – это наиболее экономически выгодный
              способ доставки. Он позволяет значительно снизить транспортные
              расходы при доставке больших партий как генеральных грузов, так и
              сборных грузов. Морская перевозка широко используется и как часть
              мультимодальной схемы. На сегодня доставка морем очень
              востребована для широчайшего спектра грузов как из стран самых
              больших мировых экспортеров – Китая, Тайваня, Кореи, Турции. Наша
              компания успешно работает по международным и внутренним
              направлениям, основные из которых это Китай и Турция. Мы перевозим
              авиа, морским, железнодорожным, грузовым транспортом, а также в
              мультимодальном режиме.
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
              способов перевозок. Тысячи километров пути самолет преодолевает за
              несколько часов. Очень часто доставка воздушными путями сообщения
              является частью или этапом мульти модальных схем перевозки.
              Высокая скорость доставки – основное и, нередко, решающее
              преимущество. В данном виде перевозки нет географических
              препятствий, и самолет – это самый безопасный вид транспорта.
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
              негабаритные, опасные и особо хрупкие. Заказать практичную услугу
              можно в нашей транспортно-логистической компании Заря-Сибирь. Мы
              выполняем перевозку контейнеров жд транспортом на территории РФ и
              в государства ближнего/дальнего зарубежья. Наша компания
              сотрудничает с юридическими лицами, используя в работе передовое
              оборудование и транспортную технику.
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
                товара на всем пути его следования и во время остановок на всем
                пути его следования и во время остановок на транзитных складах.
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
      </div>
    </div>
  );
};

export default Main;
