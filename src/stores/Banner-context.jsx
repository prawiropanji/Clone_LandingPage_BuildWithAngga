import { createContext, useState } from "react"


export const Context = createContext()

function BannerProvider({children}) {
  const [isBannerInView, setIsBannerInView] = useState()
 
  const contextValue = {
    isBannerInView,
    setIsBannerInView
  }

  return (
    <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
  )
}

export default BannerProvider