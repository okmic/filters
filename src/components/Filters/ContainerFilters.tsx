import { memo, useState } from "react"
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { DataType } from "../../App";
import { moreOrLess } from "./function/moreOrLess";
import { removeState } from "./function/remove";

type PropsType = {
    state: Array<DataType>
    setState: (state: Array<DataType>) => void
    removeFilters: boolean
    setRemoveFilters: (update: boolean) => void
}

const ContainerFilters: React.FC<PropsType> = ({state, setState, removeFilters, setRemoveFilters}) => {

    const [drawer, setDtawer] = useState(false)
    
    return <div>
        <Button onClick={() => removeState(removeFilters, setRemoveFilters)}>
          Remove Filters
        </Button>
        <Button onClick={() => moreOrLess('less', state, setState)}>
          Less
        </Button>
        <Button onClick={() => moreOrLess('more', state, setState)}>
          More
        </Button>
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