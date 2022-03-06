import { Button } from "@mui/material"
import { memo } from "react"
import styles from './item.module.css'

export const ButtonMorLess = memo(({handleMoreLess, mr} : {mr: boolean, handleMoreLess: () => void} ) => {
    
    return <div className={styles.moreOrLessItem}>
    {mr
        ? <Button onClick={() => handleMoreLess()}>
          &#9660; Less
        </Button>
        : <Button onClick={() => handleMoreLess()}>
          &#9650; More
        </Button>
  }
  </div>
})