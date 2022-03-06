export const removeState = (
    removeFilters: boolean,
    setRemoveFilters: (update: boolean)=> void,
    setRange: (range: number) => void
    )  => {
        debugger
        setRange(0)
        setRemoveFilters(!removeFilters)
    }