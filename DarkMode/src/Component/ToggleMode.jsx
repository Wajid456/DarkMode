import React, { useState, useEffect } from 'react';
import {  createContext } from 'react'
import Modal from "./Modal"

export const modeContext = createContext("");

const ToggleMode = () => {

  
  // Check if a preference is already stored in local storage
  const storedMode = localStorage.getItem('mode');

  const initialMode = storedMode ? storedMode === 'dark' : 'light';

  const [darkMode, setDarkMode] = useState(initialMode);

useEffect(() => {

   // Update local storage whenever the mode changes
    localStorage.setItem('mode', darkMode ? 'dark' : 'light');

    // Apply dark mode class to the body
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div> 
   { darkMode ? <button className="p-2 rounded bg-white text-black" onClick={toggleMode} >Light Mode</button> : <button className="p-2 rounded bg-black text-white" onClick={toggleMode} >Dark Mode</button>
      }
         <modeContext.Provider value={{darkMode}}> 
         <Modal/>
         </modeContext.Provider> 
    </div>
  );
}

export default ToggleMode
