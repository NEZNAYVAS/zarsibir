/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 18:42:59
 * Author: Ahmed
 * -----
<<<<<<< HEAD
 * Last Modified: 2022-10-26 12:10:14
 * Modified By: Ahmed
=======
 * Last Modified: 2022-10-25 16:35:50
 * Modified By: Mkhamat
>>>>>>> 015cc1277bc2f8c698578c4e47120e7c0c55160d
 * -----
 * Copyright 2022 - present
 */

import img11 from "../../image/img11.png"
import img112 from "../../image/img11-2.png"
import img113 from "../../image/img11-3.png"
import { useEffect, useState } from "react"
import directus from "../../directus.js"




const Content11 = () => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    (async () => {
      let direction1 = await directus.items('direction1').readByQuery()
      let direction2 = await directus.items('direction2').readByQuery()
      let direction3 = await directus.items('direction3').readByQuery()
      setDirections([
        direction1.data,
        direction2.data,
        direction3.data,
      ]
      )
    })()
  }, [])
  return (
    directions && (
      <div className="container-11">
        <div className="card-11">
          <img className="img-11" src={img11}></img>
          <h1 className="title-11">{directions[0].from} - {directions[0].to}</h1>
          <p className="paragraf-11">Морские перевозки</p>
          <div className="cont-11">
            <p className="number-11">${directions[0].price}</p>
          </div>
          <p className="num-footer">Еженедельно</p>
        </div>
        <div className="card-11">
          <img className="img-11-2" src={img112}></img>
          <h1 className="title-11">{directions[1].from} - {directions[1].to}</h1>
          <p className="paragraf-11">Прямые ЖД</p>
          <div className="cont-11">
            <p className="number-11">${directions[1].price}</p>
          </div>
          <p className="num-footer">Еженедельно</p>
        </div>
        <div className="card-11">
          <img className="img-11-3" src={img113}></img>
          <h1 className="title-11">{directions[2].from} - {directions[2].to}</h1>
          <p className="paragraf-11">Авиаперевозки</p>
          <div className="cont-11">
            <p className="number-11">${directions[2].price}</p>
          </div>
          <p className="num-footer">Еженедельно</p>
        </div>
      </div>
    )
  )
}

export default Content11;