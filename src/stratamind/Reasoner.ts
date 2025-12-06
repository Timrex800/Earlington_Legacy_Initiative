export interface ReasonerRequest {
  prompt: string;
  // Add other fields as required by the Stratamind API
}

export interface ReasonerResponse {
  result: string;
  // Additional response fields if any
}

export async function callReasoner(request: ReasonerRequest): Promise<ReasonerResponse> {
  const response = await fetch('https://api.stratamind.com/reason', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // TODO: Add authentication header if required
    },
    body: JSON.stringify(request),
  });
  if (!response.ok) {
    throw new Error(`Reasoner API error: ${response.status}`);
  }
  return response.json();
}
