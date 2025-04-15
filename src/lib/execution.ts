
// This is a simple mock code execution engine
// In a real app, this would connect to a backend service

export async function executeCode(code: string, language: string, problemId: string): Promise<{
  status: 'success' | 'error';
  output: string;
  executionTime?: number;
}> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    // Simple validation
    if (!code.trim()) {
      return {
        status: 'error',
        output: 'Code cannot be empty'
      };
    }
    
    // In a real app, this would send the code to a backend for execution
    // For demo purposes, we'll just generate a mock response
    
    const success = Math.random() > 0.3; // 70% chance of success for demo
    
    if (success) {
      return {
        status: 'success',
        output: 'All test cases passed!',
        executionTime: Math.floor(Math.random() * 100) + 20 // Random time between 20-120ms
      };
    } else {
      const errors = [
        'Test case 2 failed: Expected [0,1] but got [1,0]',
        'Runtime Error: Cannot read property of undefined',
        'Time Limit Exceeded on test case 4',
        'Memory Limit Exceeded'
      ];
      return {
        status: 'error',
        output: errors[Math.floor(Math.random() * errors.length)]
      };
    }
  } catch (error) {
    return {
      status: 'error',
      output: `Execution error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}
