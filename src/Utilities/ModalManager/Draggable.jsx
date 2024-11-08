import React, { useEffect, useState } from 'react'

const Draggable = ({ children, midChildConfig, parentConfig , modalClasses, draggable}) => {

    const modalClassToUse = "bg-platform-1  shadow-3xl border border-gray-600 ".concat(modalClasses);
    const [posX, setPosX] = useState(undefined);
    const [posY, setPosY] = useState(undefined);

    const [startX, setStartX] = useState(posX);
    const [startY, setStartY] = useState(posY);

    const handleDragStart = (e) => {
        if(draggable == false) return;
        setStartX(e.clientX);
        setStartY(e.clientY);
    };

    return (
        <div 
            style={{ height: '100%', width: "100%", overflow: 'hidden', ...parentConfig }}
            onDrop={(e) => {
                // console.log("Dropped", e);
                setPosX((posX ? posX : 0) + e.clientX - startX);
                setPosY((posY ? posY : 0) + e.clientY - startY);
                e.preventDefault()
            }}
            onDragOver={(e) => {
                e.preventDefault()
            }}
        >
            <div className={modalClassToUse}
                // draggable="true"
                onDragStart={handleDragStart}
                style={{
                    position: 'relative',
                    top: posY,
                    left: posX,
                    ...midChildConfig
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Draggable;