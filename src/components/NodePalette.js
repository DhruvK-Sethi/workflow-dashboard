import React from 'react';
import '../styles.css';

const NodePalette = () => {
  const onDragStart = (event, type) => {
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="node-palette">
      <h3>Node Palette</h3>
      <div
        className="node"
        onDragStart={(event) => onDragStart(event, 'Start')}
        draggable
      >
        Start
      </div>
      <div
        className="node"
        onDragStart={(event) => onDragStart(event, 'Task')}
        draggable
      >
        Task
      </div>
      <div
        className="node"
        onDragStart={(event) => onDragStart(event, 'Decision')}
        draggable
      >
        Decision
      </div>
      <div
        className="node"
        onDragStart={(event) => onDragStart(event, 'End')}
        draggable
      >
        End
      </div>
    </div>
  );
};

export default NodePalette;
