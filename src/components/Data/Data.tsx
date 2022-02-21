import { memo, useEffect } from "react";
import { DataType } from "../../App";

type PropsType = {
    setState: (a: Array<DataType>) => void 
    state: Array<DataType> 
}

const DataItems: React.FC<PropsType> = ({setState, state}) => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setState(json))
      }, [])

      return <>
        {state.map(item => <div key={item.id} className="product">
        <span>{item.title}</span>
        <p><i>{item.body}</i></p>
        </div>
        )}
        </>
}

export default memo(DataItems)