import React, { useEffect } from 'react';
import ReactFlow, { addEdge, Controls, Background, useNodesState, useEdgesState } from 'react-flow-renderer';
import '../styles.css';  

const Canvas = ({ nodes, edges, setNodes, setEdges, setSelectedNode }) => {
  const onConnect = (connection) => setEdges((eds) => addEdge(connection, eds));

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = event.target.getBoundingClientRect();
    const newNode = {
      id: `${type}-${Date.now()}`,
      type: 'default',
      position: { x: event.clientX - position.left, y: event.clientY - position.top },
      data: { label: `${type} Node`, executionTime: 0 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onNodeClick = (_, node) => setSelectedNode(node);

  
  const onNodeDragStop = (event, node) => {
    setNodes((nds) => 
      nds.map((n) => 
        n.id === node.id ? { ...n, position: node.position } : n
      )
    );
  };

  
  const validateNodes = () => {
    const startNodes = nodes.filter(node => node.data.label === 'Start');
    const endNodes = nodes.filter(node => node.data.label === 'End');
    const disconnectedNodes = nodes.filter(node => 
      !edges.some(edge => edge.source === node.id || edge.target === node.id)
    );

    
    const highlightedNodes = nodes.map(node => ({
      ...node,
      style: disconnectedNodes.includes(node) ? { border: '2px solid red' } : {},
    }));

    
    if (startNodes.length > 1) {
      alert('There are multiple Start nodes!');
    }
    if (endNodes.length > 1) {
      alert('There are multiple End nodes!');
    }

    setNodes(highlightedNodes);
  };

  useEffect(() => {
    validateNodes();
  }, [nodes, edges]);

  return (
    <div className="canvas-container" onDrop={onDrop} onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeDragStop={onNodeDragStop}
        fitView
      >
        <Controls />
        <Background color="#333" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
