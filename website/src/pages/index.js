import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  if (!ExecutionEnvironment.canUseDOM) {
    return null; // Prevents SSR from running this at all
  }

  const history = useHistory();
  const baseUrl = '/TemporalTargets-Documentation/';

  useEffect(() => {
    const currentPath = window.location.pathname;
    const isRootPath = currentPath === '/' || currentPath === baseUrl;

    if (isRootPath) {
      history.replace(`${baseUrl}docs/API`);
    }
  }, [history]);

  return null;
}