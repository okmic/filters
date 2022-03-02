import { memo } from "react";
import styles from "./item.module.css"

type PropsType = {
    range: number
    setRange: (r: number) => void
}

export const Range: React.FC<PropsType> = memo(({range, setRange}) => {
    return (
    <div className={styles.inputRange}>
        <input type="range"
          onChange={(e) => setRange(Number(e.target.value))}
          value={range} min="0" max="9999" />
        <h5>{range}</h5>
    </div>
    )
})