import React from "react"
import {Contact} from "./Contact";
import "../index.scss"

export const Contacts = ({items, setPosition}) => {

    return (
        <div className="contacts">
            {items?.map((obj, i) => <Contact
                key={i}
                address={obj.address}
                budgets={obj.budgets}
                latitude={obj.latitude}
                longitude={obj.longitude}
                setPosition={setPosition}
            />
            )}
            <div className="withLove">Сделано с любовью для компании Express-Шина :)</div>
        </div>
    )
}