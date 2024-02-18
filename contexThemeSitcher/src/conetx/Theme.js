import { createContext,useContext } from "react";
//diff sytax but same as previous
export const ThemeContex=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})
export const ThemeProvider=ThemeContex.Provider

export default function useTheme(){
    return useContext(ThemeContex)
}