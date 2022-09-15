import React from 'react'
import "./Checkout.css"
const Checkout = () => {
  return (
    <div className="checkout">
        <div className="left">
               <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
            <div>
                <h2 className="checkout-title">
                    Your SHopping BasKet
                </h2>
            </div>
        </div>
        <div className="right">
            <h2>the sabotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout