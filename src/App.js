import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer'
import { useState } from 'react';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { getLocalStorage, setLocalStorage } from "./localStorage";

const lightTheme = createTheme({
    type: "light",
  });
  
  const darkTheme = createTheme({
    type: "dark",
  });

function App() {
  const localStorageTheme = getLocalStorage("dark-theme");
  const [isDark, setIsDark] = useState(
    localStorageTheme === null ? true : localStorageTheme
  );
  
  const changeTheme = () => {
    setLocalStorage("dark-theme", !isDark);
    setIsDark(!isDark);
  };

  return (
    <div>
      <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
        <Header changeTheme = {changeTheme} />
        <SearchBar />
        <Footer /> 
      </NextUIProvider>

    </div>
  );
}

export default App;
