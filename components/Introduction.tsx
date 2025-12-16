
import React from 'react';

const Card: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 h-full">
        <h3 className="text-lg font-bold text-cyan-400">{title}</h3>
        <p className="mt-2 text-slate-400 text-sm">{description}</p>
    </div>
);

const Introduction: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-2">Falsifiable AI Safety Infrastructure</h2>
      <p className="text-slate-400 max-w-4xl">
        The Delta-717 Governance Core provides a robust, auditable, and automated oversight framework for high-stakes AI decision-making. It is built on the principle of falsifiability, ensuring that safety claims can be empirically tested and refuted by observable metrics in real-time.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
            title="Sentinel"
            description="An active circuit breaker for AI systems. It's designed to halt operations upon detecting high-risk conditions based on model uncertainty."
        />
        <Card 
            title="Signal Integrity Monitor"
            description="Quantifies epistemic uncertainty (H_epsilon) using Shannon Entropy to gauge model confidence and the reliability of its outputs."
        />
        <Card 
            title="Forensic Ledger"
            description="An immutable audit trail implemented with hash chaining for a verifiable and tamper-proof log of all governance actions and system states."
        />
      </div>
    </section>
  );
};

export default Introduction;
