import { useState } from 'react';
import useJsonFetch from './hooks/useJsonFetch';
import Loader from './Loader/Loader';

function App() {
  const [url, setURL] = useState<string>('http://localhost:7070/data');
  const [data, loading, error] = useJsonFetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return (
    <div className='app'>
      <div className="output">
        {data && <p>Статус запроса: {data}</p>}
        {loading && <Loader />}
        {error && <p>Ошибка запроса: {error}</p>}
      </div>
      <button
        onClick={() => setURL('http://localhost:7070/data')}
      >Нормальный запрос</button>
      <button
        onClick={() => setURL('http://localhost:7070/error')}
      >Запрос с ошибкой</button>
      <button
        onClick={() => setURL('http://localhost:7070/loading')}
      >Индикатор загрузки</button>
    </div>
  )
}

export default App
