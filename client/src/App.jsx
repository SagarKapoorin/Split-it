import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from './theme'
import io from "socket.io-client";
function App() {
  // const mode = useSelector((state) => state.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));
  const ho=()=>{
    window.open("http://localhost:6001/auth/google","_self");
  }
  const socket=io("http://localhost:6001/");
  return (
    <>
     <div className="app">
     {/* <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />

          </Routes>
        </ThemeProvider>
      </BrowserRouter> */}
      <button onClick={ho}></button>
     </div>
    </>
  )
}

export default App
