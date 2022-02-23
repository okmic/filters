import { DataType } from "../../../App"

export const rangeFilter = (
    number: number, 
    state: Array<DataType>, 
    setState: (state: Array<DataType>) => void
    ) => {
        setState(state
            .filter(item => item.price >= number)
            .sort((a, b) => a.price - b.price)
            )
}