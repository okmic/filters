import { memo, useEffect, useState } from "react"
import { DataType } from "../../App";
import { moreOrLess } from "./function/moreOrLess";
import { removeState } from "./function/remove";
import { rangeFilter } from "./function/rangeFilter";
import { switchNumbersFilter } from "./function/switchNumbersFilter";
import styles from './filters.module.css'
import { ButtonMorLess } from "./ComponentsFilters/ButtonMorLess";
import {SwitchNumbers} from './ComponentsFilters/SwitchNumbers'
import { Range } from "./ComponentsFilters/Range";

type PropsType = {
  state: Array<DataType>
  setState: (state: Array<DataType>) => void
  removeFilters: boolean
  setRemoveFilters: (update: boolean) => void
  initialValue: number
  setInitialValue: (n: number) => void
  finalValue: number
  setFinalValue: (n: number) => void
  setInitialStatus: (status: boolean) => void
}

const ContainerFilters: React.FC<PropsType> = ({ state, setState, removeFilters, setRemoveFilters, initialValue, finalValue, setInitialValue, setFinalValue, setInitialStatus }) => {

  const [range, setRange] = useState(0)
  const [mr, setMr] = useState(true)

  const handleMoreLess = () => {
    let order: "less" | "more" = mr ? "less" : "more"
    moreOrLess(order, state, setState)
    setMr(!mr)
  }

  useEffect(() => {
    if (state.length === 0) {
      removeState(removeFilters, setRemoveFilters, setRange)
    }
    rangeFilter(range, state, setState)
  }, [range])


  return <div className={styles.wrapperFilters}>

  <ButtonMorLess
    mr={mr}
    handleMoreLess={handleMoreLess}
    />

  <Range 
    range={range}
    setRange={setRange}
  />

  <SwitchNumbers
    initialValue={initialValue}
    finalValue={finalValue}
    state={state}
    setState={setState}
    removeFilters={removeFilters}
    removeState={removeState}
    setFinalValue={setFinalValue}
    setInitialStatus={setInitialStatus}
    setInitialValue={setInitialValue}
    setRange={setRange}
    setRemoveFilters={setRemoveFilters}
    switchNumbersFilter={switchNumbersFilter}
  />
    
  </div>
}

export default memo(ContainerFilters)