function ColorBox({bgColor, onClick}){
    return (
        <button 
        className="colorBox" 
        style={{ backgroundColor: bgColor}} 
        onClick={onClick}
        > 
        </button>
    )
}
export default ColorBox