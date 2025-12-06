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

  return (
    <div className="reasoner-panel" style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '1rem' }}>
      <h2>Stratamind Reasoner</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your coding question..."
        rows={4}
        style={{ width: '100%' }}
      />
      <button onClick={handleSubmit} disabled={loading} style={{ marginTop: '8px' }}>
        {loading ? 'Thinking...' : 'Ask Reasoner'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && <pre style={{ background: '#f0f0f0', padding: '8px' }}>{result}</pre>}
    </div>
  );
};
