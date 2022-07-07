import './App.css';
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';

function App() {
  
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", JSON.stringify(theme === "light" ? "dark" : "light"));
  };
  
  useEffect(() => {
    
    console.log("Ejecuta")
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      setTheme(theme);
    }

  },[])
  
  return (
    
    <div className={`min-h-screen w-screen ${theme==="light" ? "bg-white" : "bg-black"}`}>
      <Header changeTheme = {changeTheme} />
      <SearchBar />
      <Footer /> 
    </div>

  );
}

export default App;
