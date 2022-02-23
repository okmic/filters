import { memo, useEffect, useState } from "react"
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { DataType } from "../../App";
import { moreOrLess } from "./function/moreOrLess";
import { removeState } from "./function/remove";
import { rangeFilter } from "./function/rangeFilter";
import { switchNumbersFilter } from "./function/switchNumbersFilter";

type PropsType = {
    state: Array<DataType>
    setState: (state: Array<DataType>) => void
    removeFilters: boolean
    setRemoveFilters: (update: boolean) => void
    initialValue: number
    setInitialValue: (n: number) => void
    finalValue: number
    setFinalValue: (n: number) => void

}

const ContainerFilters: React.FC<PropsType> = ({state, setState, removeFilters, setRemoveFilters, initialValue, finalValue, setInitialValue, setFinalValue}) => {

    const [drawer, setDtawer] = useState(false)
    const [range, setRange] = useState(0)


    useEffect(() => {
      rangeFilter(range, state, setState)
    }, [range])
    
    useEffect(() => {
      switchNumbersFilter(initialValue, finalValue, state, setState)
    }, [initialValue, finalValue])
    
    return <div>
        <Button onClick={() => removeState(removeFilters, setRemoveFilters, setRange)}>
          Remove Filters
        </Button>
        
        <Button onClick={() => moreOrLess('less', state, setState)}>
          Less
        </Button>

        <Button onClick={() => moreOrLess('more', state, setState)}>
          More
        </Button>
        <div>

        <input type="range" 
        onChange={(e) => setRange(Number(e.target.value))} 
        value={range}  min="0" max="9999" />
        <h5>{range}</h5>
        </div>
        
        <div>
          <input type="text" 
          value={initialValue}
          onChange={(e) => setInitialValue(Number(e.target.value))}
           />
          <input type="text" 
          value={finalValue}
          onChange={(e) => setFinalValue(Number(e.target.value))}
           />

        </div>


        <Button onClick={() => setDtawer(true)}>&equiv;</Button>
        <Drawer
            anchor='right'
            open={drawer}
            onClose={setDtawer}
        >
            <div style={{ width: '500px' }}>

            </div>
        </Drawer>
    </div>
}

export default memo(ContainerFilters)