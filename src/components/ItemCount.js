import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if(counter > initial){
            setCounter(counter - 1);
        }
    }

    return (
        <div className="itemCount">
            <div className="counterController">
                <button className="controlButton" onClick={decrement}>-</button>
                <span className="counter">{counter}</span>
                <button className="controlButton" onClick={increment}>+</button>
            </div>
            <button className="onAddButton" onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;