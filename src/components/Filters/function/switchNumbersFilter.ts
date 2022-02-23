import { DataType } from "../../../App";

export const switchNumbersFilter = (
    initiaValue: number,
    finalValue: number,
    state: Array<DataType>,
    setState: (state: Array<DataType>) => void,
) => {
    setState(state.filter(item => item.price >= initiaValue && item.price <= finalValue))
}