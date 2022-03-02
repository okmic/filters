import { Button, Input } from "@mui/material";
import { memo } from "react"
import { DataType } from "../../../App";
import styles from "./item.module.css"

type PropsType = {
    initialValue: number
    finalValue: number
    state: Array<DataType>
    setState: (state: Array<DataType>) => void
    setInitialValue: (n: number) => void
    setFinalValue: (n: number) => void
    switchNumbersFilter: (i: number, l: number, s: Array<DataType>, ss: (state: Array<DataType>) => void) => void
    removeState: (r: boolean, sr: (r: boolean) => void, sRang: (r: number) => void) => void
    setInitialStatus: (s: boolean) => void
    removeFilters: boolean
    setRemoveFilters: (update: boolean) => void
    setRange: (r: number) => void
}

export const SwitchNumbers: React.FC<PropsType> = memo(({initialValue, finalValue, removeState, state, removeFilters, setState, setInitialValue, setFinalValue, setInitialStatus, switchNumbersFilter, setRemoveFilters, setRange}) => {
    return (
        <div>
        <Input type="number"
        className={styles.imputSwitchN}
        value={initialValue}
        onChange={(e) => setInitialValue(Number(e.target.value))}
        />
        <Input type="number"
        className={styles.imputSwitchN}
        value={finalValue}
        onChange={(e) => setFinalValue(Number(e.target.value))}
        />
    
        <Button onClick={() => switchNumbersFilter(initialValue, finalValue, state, setState)}>
          Подобрать
        </Button>
    
        <Button onClick={() => {
          removeState(removeFilters, setRemoveFilters, setRange)
          setInitialStatus(false)
        }}>
          &#10060;
        </Button>
      </div>
    )
})