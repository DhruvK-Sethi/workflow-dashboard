import React from 'react';
import { FaSave, FaUpload, FaDownload, FaPlay, FaTrash } from 'react-icons/fa';
import '../styles.css';

const Toolbar = ({ nodes, edges, setNodes, setEdges }) => {
  const saveWorkflow = () => {
    const workflow = { nodes, edges };
    localStorage.setItem('workflow', JSON.stringify(workflow));
    alert('Workflow saved successfully!');
  };

  const loadWorkflow = () => {
    const savedWorkflow = JSON.parse(localStorage.getItem('workflow'));
    if (savedWorkflow) {
      setNodes(savedWorkflow.nodes);
      setEdges(savedWorkflow.edges);
      alert('Workflow loaded successfully!');
    } else {
      alert('No saved workflow found.');
    }
  };

  const clearWorkflow = () => {
    setNodes([]);
    setEdges([]);
    alert('Workflow cleared.');
  };

  const exportWorkflow = () => {
    const workflow = { nodes, edges };
    const blob = new Blob([JSON.stringify(workflow, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'workflow.json';
    a.click();
  };

  const importWorkflow = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const workflow = JSON.parse(event.target.result);
      setNodes(workflow.nodes);
      setEdges(workflow.edges);
    };
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div className="toolbar">
      <button onClick={saveWorkflow}>
        <FaSave /> Save
      </button>
      <button onClick={loadWorkflow}>
        <FaUpload /> Load
      </button>
      <button onClick={clearWorkflow}>
        <FaTrash /> Clear
      </button>
      <button onClick={exportWorkflow}>
        <FaDownload /> Export
      </button>
      <label htmlFor="import-file" className="import-btn">
        <FaUpload /> Import
        <input
          type="file"
          id="import-file"
          style={{ display: 'none' }}
          onChange={importWorkflow}
        />
      </label>
    </div>
  );
};

export default Toolbar;
