import { memo, useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { DataType } from "../../App";
import { moreOrLess } from "./function/moreOrLess";
import { removeState } from "./function/remove";
import { rangeFilter } from "./function/rangeFilter";
import { switchNumbersFilter } from "./function/switchNumbersFilter";
import styles from './filters.module.css'

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


    {mr
      ? <Button onClick={() => handleMoreLess()}>
        &#9660; Less
      </Button>
      : <Button onClick={() => handleMoreLess()}>
        &#9650; More
      </Button>
    }

    <div className={styles.inputRange}>
      <input type="range"
        onChange={(e) => setRange(Number(e.target.value))}
        value={range} min="0" max="9999" />
      <h5>{range}</h5>
    </div>

    <div>
      <input type="number"
        value={initialValue}
        onChange={(e) => setInitialValue(Number(e.target.value))}
      />
      <input type="number"
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
  </div>
}

export default memo(ContainerFilters)