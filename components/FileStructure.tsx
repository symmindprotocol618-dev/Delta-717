
import React from 'react';
import { FileNode } from '../constants';
import { FolderIcon, FileIcon } from './icons';

interface FileStructureProps {
  node: FileNode;
  level?: number;
}

const FileStructure: React.FC<FileStructureProps> = ({ node, level = 0 }) => {
  const isFolder = node.type === 'folder';
  const indent = { paddingLeft: `${level * 1.5}rem` };

  return (
    <div>
      <div 
        style={indent} 
        className="flex items-center space-x-2 py-1 text-slate-300"
      >
        {isFolder ? <FolderIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" /> : <FileIcon className="w-5 h-5 text-slate-400 flex-shrink-0" />}
        <span>{node.name}</span>
      </div>
      {isFolder && node.children && (
        <div>
          {node.children.map((child) => (
            <FileStructure key={child.name} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileStructure;
