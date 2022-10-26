/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 18:42:59
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-26 12:10:14
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import img11 from "../../image/img11.png"
import img112 from "../../image/img11-2.png"
import img113 from "../../image/img11-3.png"




const Content11 =()=> {
  return(
    <div className="container-11">
      <div className="card-11">
            <img className="img-11" src={img11}></img>
            <h1 className="title-11">deyang - Мск</h1>
            <p className="paragraf-11">Морские перевозки</p>
            <div className="cont-11">
              <p className="number-11">$8400</p>
            </div>
            <p className="num-footer">Еженедельно</p>       
      </div>
      <div className="card-11">
            <img className="img-11-2" src={img112}></img>
            <h1 className="title-11">Luzhou - Мск</h1>
            <p className="paragraf-11">Прямые ЖД</p>
            <div className="cont-11">
              <p className="number-11">$8400</p>
            </div>
            <p className="num-footer">Еженедельно</p>       
      </div>
      <div className="card-11">
            <img className="img-11-3" src={img113}></img>
            <h1 className="title-11">chengdu - Мск</h1>
            <p className="paragraf-11">Авиаперевозки</p>
            <div className="cont-11">
              <p className="number-11">$8400</p>
            </div>
            <p className="num-footer">Еженедельно</p>       
      </div>
    </div>
  )
}

export default Content11;