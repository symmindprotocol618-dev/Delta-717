
import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

interface FileViewerProps {
  files: Record<string, string>;
}

const getLanguage = (filename: string): string => {
    const extension = filename.split('.').pop();
    switch (extension) {
        case 'py': return 'python';
        case 'js':
        case 'jsx':
        case 'ts':
        case 'tsx':
             return 'javascript';
        case 'md': return 'markdown';
        case 'json': return 'json';
        case 'ipynb': return 'json';
        default: return 'text';
    }
};

const FileViewer: React.FC<FileViewerProps> = ({ files }) => {
  const fileNames = Object.keys(files);
  const [activeTab, setActiveTab] = useState(fileNames[0]);

  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700">
      <div className="border-b border-slate-700">
        <nav className="flex flex-wrap -mb-px px-2" aria-label="Tabs">
          {fileNames.map((fileName) => (
            <button
              key={fileName}
              onClick={() => setActiveTab(fileName)}
              className={`${
                activeTab === fileName
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:border-slate-500'
              } whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm transition-colors duration-200`}
            >
              {fileName}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-1">
        <CodeBlock 
            key={activeTab} 
            code={files[activeTab]} 
            language={getLanguage(activeTab)}
        />
      </div>
    </div>
  );
};

export default FileViewer;
