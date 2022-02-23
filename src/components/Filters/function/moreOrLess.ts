import { DataType } from "../../../App"

export const moreOrLess = ( 
    order: 'more'| 'less',
    state: Array<DataType>,
    setState: (state: Array<DataType>) => void) => {

    const newState: Array<DataType> = JSON.parse(JSON.stringify(state))

    if (order === "less") {
        setState(newState.sort((a, b) => a.price - b.price))
    } else {
        setState(newState.sort((a, b) => b.price - a.price))
    }
  }