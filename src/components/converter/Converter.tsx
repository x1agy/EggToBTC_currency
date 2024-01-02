import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import './converter.css'

const Converter = () => {
    const EGGValue = useSelector((state: RootState) => state.EGG.value)
    const BTCValue = useSelector((state: RootState) => state.BTC.value)
    const BTCtoEGGvalue = EGGValue / BTCValue;
    const EGGtoBTCvalue = BTCValue / EGGValue;
    const [selectedValue, setSelectedValue] = React.useState<boolean>(true)

    return(
        <div
            className="converter"
        >
            <h3>
                {selectedValue ? BTCtoEGGvalue : EGGtoBTCvalue} 
            </h3>
            <select
                onChange={() => setSelectedValue(prev => !prev)}
                className="converterValueSelect"
            >
                <option value="BTC"> <h3>биткоинов </h3></option>
                <option value="EGG"> <h3>яиц </h3></option>
            </select>
            
            <h3>надо что бы купить {selectedValue ? '1 яйцо' : '1 биткоин'}</h3>


        </div>
    )
}

export default Converter;