import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import NodePalette from './components/NodePalette';
import Canvas from './components/Canvas';
import NodeSidebar from './components/NodeSidebar';
import AnalyticsPanel from './components/AnalyticsPanel';
import './styles.css';

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);


  return (
    <div className="app-container">
      <Toolbar
        nodes={nodes}
        edges={edges}
        setNodes={setNodes}
        setEdges={setEdges}
      />
      <div className="workflow-container">
        <NodePalette />
        <NodeSidebar
          selectedNode={selectedNode}
          nodes={nodes}
          setNodes={setNodes}
        />
        <Canvas
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
          setSelectedNode={setSelectedNode}
        />
      </div>
      <AnalyticsPanel nodes={nodes} edges={edges} />
    </div>
  );
};

export default App;
