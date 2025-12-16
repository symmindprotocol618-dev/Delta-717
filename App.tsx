
import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import FileStructure from './components/FileStructure';
import FileViewer from './components/FileViewer';
import SetupGuide from './components/SetupGuide';
import { FILE_STRUCTURE, FILE_CONTENTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <Introduction />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Project Structure</h2>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <FileStructure node={FILE_STRUCTURE} />
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">File Contents</h2>
            <FileViewer files={FILE_CONTENTS} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Setup & Deployment</h2>
          <SetupGuide />
        </div>
      </main>
      <footer className="text-center p-6 text-slate-500 mt-8 border-t border-slate-800">
        Delta-717 Governance Core | Falsifiable AI Safety Infrastructure
      </footer>
    </div>
  );
};

export default App;
