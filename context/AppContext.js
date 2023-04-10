'use client'
import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const Provider = ({children}) => {

    const[searchVisible, setSearchVisible] = useState(false)

    const data = {
        searchVisible,
        setSearchVisible
    }
    return(
    <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}