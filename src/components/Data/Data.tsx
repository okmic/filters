import React from 'react'
import { memo } from "react";

type PropsType = {
    id: number
    title: string
    body: string
    price: number 
}

const DataItems: React.FC<PropsType> = ({id, title, body, price}) =>  <div key={id} className="product">
        <span>{title}</span>
        <p><i>{body}</i></p>
        <h5>{price}</h5>
        </div>
        

export default memo(DataItems)