import React, { useState, useEffect } from 'react';

const NodeDetailsForm = ({ selectedNode, updateNode }) => {
  const [nodeData, setNodeData] = useState({
    label: '',
    executionTime: '',
    type: '',
  });

  useEffect(() => {
    if (selectedNode) {
      setNodeData({
        label: selectedNode.data?.label || '',
        executionTime: selectedNode.data?.executionTime || '',
        type: selectedNode.type || '',
      });
    }
  }, [selectedNode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNodeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    if (selectedNode) {
      updateNode(selectedNode.id, nodeData);
    }
  };

  return selectedNode ? (
    <div className="node-details-form">
      <h3>Edit Node</h3>
      <label>
        Label:
        <input
          type="text"
          name="label"
          value={nodeData.label}
          onChange={handleChange}
        />
      </label>
      <label>
        Execution Time:
        <input
          type="number"
          name="executionTime"
          value={nodeData.executionTime}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <select
          name="type"
          value={nodeData.type}
          onChange={handleChange}
        >
          <option value="Task">Task</option>
          <option value="Decision">Decision</option>
          <option value="Start">Start</option>
          <option value="End">End</option>
        </select>
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  ) : (
    <div className="node-details-form">
      <p>Select a node to edit details</p>
    </div>
  );
};

export default NodeDetailsForm;
