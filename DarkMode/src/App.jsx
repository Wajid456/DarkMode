import React from "react";
import ToggleMode from "./Component/ToggleMode";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-10 ">
    <h1 className="mb-4 text-3xl ">Dark Mode and Light Mode Toggle</h1>
    
    <ToggleMode/>  
   
    </div>
  );
}