import { useState } from 'react'
import './App.css'
import ColorBox from './ColorBox';
function App() {
  const colorsArray = [
    { id: 1, color: "#FF5733" },  // Red-Orange
    { id: 2, color: "#33FF57" },  // Green
    { id: 3, color: "#3357FF" },  // Blue
    { id: 4, color: "#FF33A8" },  // Pink
    { id: 5, color: "#33FFF5" },  // Cyan
    { id: 6, color: "#FF5733" },  // Orange
    { id: 7, color: "#5733FF" },  // Violet
    { id: 8, color: "#F5FF33" },  // Yellow
    { id: 9, color: "#33FFBD" },  // Aquamarine
    { id: 10, color: "#FF335E" },  // Red-Pink
    { id: 11, color: "#FFA533" },  // Light Orange
    { id: 12, color: "#33FF95" },  // Light Green
    { id: 13, color: "#5E33FF" },  // Indigo
    { id: 14, color: "#33A8FF" },  // Sky Blue
    { id: 15, color: "#FF3399" },  // Hot Pink
    { id: 16, color: "#3399FF" },  // Soft Blue
    { id: 17, color: "#FF5733" },  // Coral
    { id: 18, color: "#33FFCC" },  // Mint
    { id: 19, color: "#FF8C33" },  // Burnt Orange
    { id: 20, color: "#337BFF" },  // Cerulean
    { id: 21, color: "#FF33C4" },  // Magenta
    { id: 22, color: "#33FF77" },  // Lime Green
    { id: 23, color: "#9F33FF" },  // Purple
    { id: 24, color: "#FF3350" },  // Crimson
    { id: 25, color: "#33D1FF" }   // Turquoise
  ];

  return (
    <>
      <ColorBox  colors={colorsArray}/>
    </>
  )
}

export default App
