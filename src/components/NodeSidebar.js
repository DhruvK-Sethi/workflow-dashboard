import React from 'react';
import NodeDetailsForm from './NodeDetailsForm';

const NodeSidebar = ({ selectedNode, setNodes, nodes }) => {
  const updateNode = (id, data) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      )
    );
  };

  return (
    <div className="sidebar">
      <h3>Node Properties</h3>
      <NodeDetailsForm selectedNode={selectedNode} updateNode={updateNode} />
    </div>
  );
};

export default NodeSidebar;
