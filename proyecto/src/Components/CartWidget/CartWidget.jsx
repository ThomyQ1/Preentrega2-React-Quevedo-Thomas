import React from "react";
import { BsFillBagFill } from "react-icons/bs";
const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
            <BsFillBagFill/>
            </button>
        </div>

    )
}

export default CartWidget;