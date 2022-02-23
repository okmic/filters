export const removeState = (
    removeFilters: boolean,
    setRemoveFilters: (update: boolean)=> void,
    setRange: (range: number) => void
    )  => {
        setRange(0)
        setRemoveFilters(!removeFilters)
    }