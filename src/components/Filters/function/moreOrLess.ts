import { DataType } from "../../../App"

export const moreOrLess = ( 
    order: 'more'| 'less',
    state: Array<DataType>,
    setState: (state: Array<DataType>) => void) => {

    const newState: Array<DataType> = JSON.parse(JSON.stringify(state))

    if (order === "less") {
        setState(newState.sort((a, b) => a.prise - b.prise))
    } else {
        setState(newState.sort((a, b) => b.prise - a.prise))
    }
  }