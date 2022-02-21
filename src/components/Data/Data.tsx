import React from 'react'
import { memo } from "react";
import { DataType } from "../../App"

type PropsType = {
    state: Array<DataType> 
}

const DataItems: React.FC<PropsType> = ({state}) => {

      return <div>
        {state.map(item => <div key={item.id} className="product">
        <span>{item.title}</span>
        <p><i>{item.body}</i></p>
        </div>
        )}
        </div>
}

export default memo(DataItems)