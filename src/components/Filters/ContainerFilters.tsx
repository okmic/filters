import { memo, useState } from "react"
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


const ContainerFilters = () => {

    const [drawer, setDtawer] = useState(false)

    return <div onClick={() => setDtawer(!drawer)}>
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