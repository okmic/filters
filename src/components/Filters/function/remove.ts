export const removeState = (
    removeFilters: boolean,
    setRemoveFilters: (update: boolean)=> void 
    )  => {
        setRemoveFilters(!removeFilters)
    }