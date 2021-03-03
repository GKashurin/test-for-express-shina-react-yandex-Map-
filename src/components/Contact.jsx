import React, {useState} from "react"
import classNames from 'classnames';

export const Contact = ({address, budgets}) => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <button
            onClick={handleClick}
            className={classNames("contact", {
            "contact_active" : active
        })}>
            <div className="contact__address">{address}</div>
            <div className="">
                {budgets.map(obj => <span className="contact__deliveryType">{obj}</span>)}
            </div>
        </button>
    )
}
