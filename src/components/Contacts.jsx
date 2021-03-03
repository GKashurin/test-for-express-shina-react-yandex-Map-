import React from "react"
import {Contact} from "./Contact";
import "../index.scss"

export const Contacts = ({items}) => {

    return (
        <div className="contacts">
            {items.map((obj, i) => <Contact
                key={i}
                address={obj.address}
                budgets={obj.budgets}
            />
            )}
        </div>
    )
}