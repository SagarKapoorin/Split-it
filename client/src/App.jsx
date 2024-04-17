import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from './scenes/login';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from './theme';
import Calculator from './components/Calculator/index';
import Com from './components/Addwidgets/Calcul';
import io from "socket.io-client";
import { setMode } from './state';
function App() {
  const mode = useSelector((state) => state.mode);
  console.log(mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));
  // const socket=io("http://localhost:6001/");
  return (
    <>
     <div className="app">
     <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Com />} />
            <Route path="/t" element={<Login />} />
            {/* <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            /> */}

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
