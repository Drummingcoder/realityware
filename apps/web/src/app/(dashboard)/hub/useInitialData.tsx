'use client';

import { useEffect, useState } from 'react';

interface InitialData {
  username?: string;
  tickets?: number;
}

declare global {
  interface Window {
    __INITIAL_DATA__?: InitialData;
  }
}

export function useInitialData() {
  const [data, setData] = useState<InitialData>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__INITIAL_DATA__) {
      setData(window.__INITIAL_DATA__);
    }
  }, []);

  return data;
}
