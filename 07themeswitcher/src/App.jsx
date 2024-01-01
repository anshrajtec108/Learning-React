
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themebtu'
import Card from './components/card'

function App() {
  const [themeMode,setthemeMode]=useState("light")
  
  const lightTheme=()=>{
    setthemeMode("light")
  }
  const darkTheme=()=>{
    setthemeMode("dark")
  }

  //actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn></ThemeBtn>
        </div>

        <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card></Card>
        </div>
    </div>
  </div>
  </ThemeProvider>
  )
}

export default App
