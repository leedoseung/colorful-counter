import React from 'react';
import './Palette.css';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const PaletteItem = ({ color , active, onClick }) => {
    return(
        <div 
            className={`PaletteItem ${active ? 'active' : ''}`}
            style={{ background : color }}
            onClick={onClick}
        />
    )
}


const Palette = ( { onSelect, selected }) => {
    return(
        <div className="Palette">
            <h2>색깔을 골라골라</h2>
            <div className="colors">
                {colors.map( color => (
                    <PaletteItem 
                        onClick={ () => onSelect(color)} 
                        color={color} 
                        key={color} 
                        active={selected === color} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Palette;