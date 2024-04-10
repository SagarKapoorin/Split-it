import React, { useState } from 'react';
import Dictionary from '../Dictionary';
const Dr = () => {
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
		<div className="hi">
			<h1>calculator</h1>
			<button onClick={(e)=>onClose(e.target)}>X</button>
			{      <Dictionary/>}
		</div>
     
    </div>
  );
};

export default Dr;
