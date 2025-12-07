import React, { useState } from 'react';
import { callReasoner, ReasonerRequest } from '../stratamind/Reasoner';

export const ReasonerPanel: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const request: ReasonerRequest = { prompt };
      const response = await callReasoner(request);
      setResult(response.result);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all font-bold"
        style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Toggle Stratamind Reasoner"
      >
        {isOpen ? '✕' : '🧠'}
      </button>

      {/* Panel */}
      {isOpen && (
        <div 
          className="reasoner-panel fixed bottom-24 right-4 z-50 bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col" 
          style={{ width: '350px', height: '500px', border: '1px solid #e2e8f0' }}
        >
          <div className="bg-slate-100 p-3 border-b border-slate-200 flex justify-between items-center">
             <h2 className="font-semibold text-slate-800 m-0">Stratamind Reasoner</h2>
          </div>
          
          <div className="p-4 flex-grow flex flex-col overflow-y-auto">
            <textarea
              className="w-full p-2 border border-slate-300 rounded mb-3 text-sm"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask me anything about your code..."
              rows={4}
            />
            <button 
              onClick={handleSubmit} 
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Thinking...' : 'Ask Reasoner'}
            </button>
            
            {error && <div className="mt-3 text-red-500 text-sm">{error}</div>}
            {result && (
              <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-100 text-sm whitespace-pre-wrap">
                {result}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
