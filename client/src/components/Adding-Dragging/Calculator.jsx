import React, { useState } from 'react';
import Calculator from '../Calculator';
const DraggableComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ xOffset: 0, yOffset: 0 });

  const dragStart = (e) => {
    setIsDragging(true);
    setOffset({
      xOffset: e.clientX - position.x,
      yOffset: e.clientY - position.y
    });
  };

  const drag = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.xOffset,
        y: e.clientY - offset.yOffset
      });
    }
  };

  const endDrag = () => {
    setIsDragging(false);
  };
  const onClose=(element)=>{
	element.parentNode.remove();
}
  return (
    <div
      className="draggable"
      style={{
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px'
      }}
      onMouseDown={dragStart}
      onMouseMove={drag}
      onMouseUp={endDrag}
    >
		<div className="Drag">
			<h2 style={{marginLeft:"37%"}}>Calculator</h2>
			<button onClick={(e)=>onClose(e.target)}>X</button>
			{      <Calculator/>}
		</div>
     
    </div>
  );
};

export default DraggableComponent;
