import React from 'react';
import "./HeroPage.css"
import Product from "../Product/Product"
const HeroPage = () => {
  return (
    <div className="homePage">
        <div className="homePage-container">
                            <img
                    className="home-image"
                    src="https://m.media-amazon.com/images/I/71Iq7U6YVaL._SX3000_.jpg"
                    alt=""
                         />
               <div className="home-row">
                    <Product title="the learn start" price={29.99} image="data:image/jpeg;base64,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"   />
                    <Product title="the learn start" price={29.99} image="https://www.parallels.com/fileadmin/res/img/homepage/2021/home-pd_xs_upd.jpg"   />
                    <Product title="the learn start" price={29.99} image="https://media.gqmagazine.fr/photos/5f226737ef0a81d67c3357ed/2:3/w_1332,h_1998,c_limit/MAC.jpg"   />
                </div>
                <div className="home-row">
                    <Product title="the learn start" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/51ZyUQ9Ej8L._AC_SX184_.jpg"   />
                    <Product title="the learn start" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/31+q5JyyaVL._AC_SX184_.jpg"  />
                </div>
        </div>
    </div>
  )
}

export default HeroPage