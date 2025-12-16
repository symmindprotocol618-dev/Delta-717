
import React from 'react';
import CodeBlock from './CodeBlock';

interface StepProps {
  step: number;
  title: string;
  description: string;
  command: string;
}

const Step: React.FC<StepProps> = ({ step, title, description, command }) => (
  <div className="flex flex-col md:flex-row gap-8">
    <div className="flex md:flex-col items-center md:items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 flex items-center justify-center font-bold text-lg">
        {step}
      </div>
      <div className="md:h-full md:w-px bg-slate-700 flex-grow md:ml-6"></div>
    </div>
    <div className="flex-1 pb-12">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>
      <div className="mt-4">
        <CodeBlock code={command} language="bash" />
      </div>
    </div>
  </div>
);

const SetupGuide: React.FC = () => {
  return (
    <div className="space-y-0">
        <Step 
            step={1}
            title="Create Project Structure"
            description="First, create the main project directory and the necessary subfolders for the core logic, simulations, and documentation."
            command={`mkdir -p delta717-governance-core/core delta717-governance-core/simulations delta717-governance-core/docs
cd delta717-governance-core`}
        />
        <Step 
            step={2}
            title="Populate Project Files"
            description="Create each file and paste the corresponding content provided in the 'File Contents' viewer above."
            command={`# Use the code from the viewer above to create:
# .gitignore, LICENSE, README.md, requirements.txt, main.py
# core/__init__.py, core/ledger.py, etc.`}
        />
         <Step 
            step={3}
            title="Initialize Git Repository"
            description="Initialize a new Git repository, add all your files, and make the initial commit to start version controlling your project."
            command={`git init
git add .
git commit -m "Initial commit: Delta-717 production engine v1.0.0-alpha"`}
        />
        <Step 
            step={4}
            title="Push to GitHub"
            description="Create a new repository on GitHub and push your local repository to the remote. Replace YOUR_USERNAME with your actual GitHub username."
            command={`# First, create a new public repository on GitHub named 'delta717-governance-core'
git remote add origin https://github.com/YOUR_USERNAME/delta717-governance-core.git
git branch -M main
git push -u origin main`}
        />
        <Step 
            step={5}
            title="Test Installation"
            description="Clone the repository into a fresh directory and install the dependencies using pip to ensure the setup is correct."
            command={`cd ..
git clone https://github.com/YOUR_USERNAME/delta717-governance-core.git test-install
cd test-install
pip install -r requirements.txt`}
        />
        <Step 
            step={6}
            title="Run Demo Simulation"
            description="You can run the governance core using the main script for a direct console output, or use the Jupyter Notebook for an interactive walkthrough."
            command={`# Option 1: Run the standard python script
python main.py

# Option 2: Run the interactive notebook
jupyter notebook simulations/oncology_demo.ipynb`}
        />
    </div>
  );
};

export default SetupGuide;
