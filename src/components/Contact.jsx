import React, {useState} from "react"
import classNames from 'classnames';

export const Contact = ({address, budgets, latitude, longitude, setPosition}) => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active);
        setPosition([latitude, longitude])
    }
    return (
        <button
            onClick={handleClick}
            className={classNames("contact", {
            "contact_active" : active
        })}>
            <div className="contact__address">{address}</div>
            <ul className="deliveryType">
                {budgets.map((obj, i) => <li
                    className="deliveryType__item"
                    key={i}
                >{obj}</li>)}
            </ul>
        </button>
    )
}
