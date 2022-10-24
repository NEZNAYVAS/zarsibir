/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-23 15:08:52
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-24 15:46:49
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import logoFotter from "../../image/logoFotter.png"
import footer1 from "../../image/footer-1.png"
import footer2 from "../../image/footer-2.png"
import footer3 from "../../image/footer-3.png"
import footer4 from "../../image/footer-4.png"



const Footer =()=> {
  return(
    <div className="footer-container-bottom">
      <img className="footer-img" src={logoFotter} ></img>
      <ul className="nav-ul-footer">
        <a className="footer-link" href="#nav1">Главная</a>
        <a className="footer-link" href="#nav2">О компании</a>
        <a className="footer-link" href="#nav3">Логистика</a>
        <a className="footer-link" href="#nav4">Акции</a>
        <a className="footer-link" href="#nav5">Экспедиция</a>
        <a className="footer-link" href="#nav6">Китай</a>
        <a className="footer-link" href="#nav7">Европа</a>
        <a className="footer-link" href="#nav8">Представительства и Контакты </a>
      </ul>

      <div className="footer-contakt-5">
        <a className="contakt-tel-5" href="tel:+79631686817">
        <img className="tel-5-footer" src={footer1}></img>
        <p className="paragraf-footer-5">+7 (968) 163 68 17</p>
        </a>
        <a className="contakt-mail-5" href="">
        <img className="mail-5-footer" src={footer2}></img>
        <p className="paragraf-footer-5">zaryasib777@gmail.com</p>
        </a>
      </div>
      <div className="footer-contakt-6">
        <a className="contakt-watsapp-5" href="">
          <img className="watsapp-footer" src={footer3}></img>
        </a>
        <a className="contakt-tellegram-5" href="">
        <img className="tellegram-footer" src={footer4}></img>
        </a>
      </div>
    </div>
  )
}


export default Footer;