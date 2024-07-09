import { useCallback, useState } from 'react';
import './ErrorContent.scss';

function ErrorSimBtn() {
  const [simError, setSimError] = useState<boolean>(false);

  const simulateError = useCallback(() => {
    setSimError(true);
  }, []);

  if (simError) {
    throw new Error('Simulate error');
  }

  return (
    <button className="simErrorBtn" onClick={simulateError}>
      Crush!
    </button>
  );
}

export default ErrorSimBtn;
