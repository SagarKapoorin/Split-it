import Dr from "../Adding-Dragging/Dictionary";
import DraggableComponent from "../Adding-Dragging/Calculator";
import { useState } from "react";

function Com() {
    const [insertComponents, setInsertComponents] = useState([]);

    const handleInsertDraggable = () => {
        setInsertComponents([...insertComponents, <DraggableComponent key={insertComponents.length} />]);
    }

    const handleInsertInsert = () => {
        setInsertComponents([...insertComponents, <Dr key={insertComponents.length} />]);
    }

    return (
        <div id="main-container">
            <button onClick={handleInsertDraggable}>Insert Draggable Component</button>
            <button onClick={handleInsertInsert}>Insert Insert Component</button>
            {insertComponents.map((component, index) => (
                <div key={index}>
                    {component}
                </div>
            ))}
        </div>
    );
}

export default Com;
