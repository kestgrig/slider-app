import { useState } from 'react'
import { SliderComponent } from './SliderComponent.jsx'

export function Slider() {
  const [inputValue, setInputValue] = useState(0);
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    let bgColor;
    let textColor;

    if (inputValue <= 25) {
        bgColor = "red"
        textColor = "blue"
    }

    if (inputValue > 25 && inputValue <= 50) {
        bgColor = "green"
        textColor = "purple"
    }    

    if (inputValue > 50 && inputValue <= 75) {
        bgColor = "yellow"
        textColor = "white"
    } 
    
    if (inputValue > 75 && inputValue <= 100) {
        bgColor = "red"
        textColor = "black"
    }      

  return (
    <div>
        <SliderComponent inputValue={inputValue} handleInputChange={handleInputChange} backgroundColor={bgColor} textColor={textColor} />
    </div>
  )
}
