import React from 'react';
import { ErrorInfo } from 'react';
import Image from 'next/image';

interface ErrorContentProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

function ErrorContent({ error, errorInfo }: ErrorContentProps) {
  return (
    <div className="errorContWrap">
      <div className="errorCont">
        <Image src="/error.jpg" alt="Error" className="errorCont_img" />
        <p className="errorCont_text">Ooops!.. Something gone wrong. Please, reload page</p>
        {error && <p className="errorCont_message">{error.toString()}</p>}
        {errorInfo && <pre className="errorCont_stack">{errorInfo.componentStack}</pre>}
      </div>
    </div>
  );
}

export default ErrorContent;
