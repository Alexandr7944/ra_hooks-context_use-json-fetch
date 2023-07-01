import { useEffect, useState } from 'react';

type OptsType = {
  method: string,
  headers: {
    'Content-Type': string
  }
}

const useJsonFetch = ( url: string, opts: OptsType) => {
  const [ data, setData ] = useState<string>('');
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>('');  

  useEffect(() => {
    setLoading(true);
    const fethData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching');
        const result = await response.json();
        setData(result.status)
        
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fethData();

    return () => {
      setData('');
      setError('');
    };
  }, [url]);

  return [data, loading, error]
}

export default useJsonFetch