"use client"
import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const withRouterCheck = (WrappedComponent) => {
  return function WithRouterCheck(props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

export default withRouterCheck;