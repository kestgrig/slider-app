/* eslint-disable react/prop-types */


export function SliderComponent({inputValue, handleInputChange, backgroundColor, tekstoSpalva}) {
  
    const inputStyle = {
        appearance: "none",
        width: "100%",
        height: 25,
        cursor: "pointer",
        background: "lightgrey"
    }
  
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "collumn",
            gap: 100

        }}>
            <input type="range" min={0} max={100} value={inputValue} onInput={handleInputChange} style={inputStyle} />
            <div className="circle" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',            
                color: !tekstoSpalva ? "black" : tekstoSpalva,
                background: !backgroundColor ? "lightgray" : backgroundColor,
                height: `${inputValue * 1.5}px`,
                width: `${inputValue *3}px`,
                borderRadius: "50%"
            }}>
            <span>{inputValue}</span>
            </div>
    
        </div>
    )
}
