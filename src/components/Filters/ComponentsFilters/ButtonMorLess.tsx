import { Button } from "@mui/material"
import { memo } from "react"

export const ButtonMorLess = memo(({handleMoreLess, mr} : {mr: boolean, handleMoreLess: () => void} ) => {
    return mr
          ? <Button onClick={() => handleMoreLess()}>
            &#9660; Less
          </Button>
          : <Button onClick={() => handleMoreLess()}>
            &#9650; More
          </Button>
    })