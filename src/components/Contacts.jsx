import React from "react"
import {Contact} from "./Contact";
import "../index.scss"

export const Contacts = ({items, setCenter}) => {

    return (
        <div className="contacts">
            {items?.map((obj, i) => <Contact
                key={i}
                address={obj.address}
                budgets={obj.budgets}
                latitude={obj.latitude}
                longitude={obj.longitude}
                setCenter={setCenter}
            />
            )}
        </div>
    )
}