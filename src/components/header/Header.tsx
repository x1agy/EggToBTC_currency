import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import './header.css'

const Header = () => {
    const BTCValue = useSelector((state: RootState) => state.BTC.value)

    return(
        <div
            className="header"
        >
            <h1
                className="headerTitle"
            >Курс яиц к биткоину</h1>
            <p
                className="description"
            >
                За основу взята цена 1 лотка яиц(30 штук) C1 Таганрогской птицефабрики на 02.01.2024 
            </p>
        </div>
    )
}

export default Header;