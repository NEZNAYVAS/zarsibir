/*
 * File: index.js
 * Project: zarsib
 * File Created: 2022-10-22 17:43:48
 * Author: Ahmed
 * -----
 * Last Modified: 2022-10-26 12:50:51
 * Modified By: Ahmed
 * -----
 * Copyright 2022 - present
 */

import { useEffect, useState } from "react";
import directus from "../../directus.js";
import img10 from "../../image/img-10.png"

const Contant10 = () => {
  const [sale, setSale] = useState();
  useEffect(() => {
    (async () => {
      let result = await directus.items('SALES').readByQuery();
      setSale(result.data)
    })()
  }, [])
  return (
    sale && (
      <div className="container-10">
        <h1 className="title-10" id="nav4">{sale.title}</h1>
        <div className="cont-10">
          <p className="paragraf-10">
            {sale.description}
          </p>
          <img className="img-10" src={img10}></img>
        </div>
      </div>
    )
  );
};

export default Contant10;
