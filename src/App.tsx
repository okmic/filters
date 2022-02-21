import './App.css'
import { useEffect, useState } from 'react'
import Data from './components/Data/Data'
import ContainerFilters from './components/Filters/ContainerFilters'

export type DataType = {
  body: string
  id: number
  userId: number
  title: string
}

function App() {

  const [state, setState] = useState([] as Array<DataType>)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => setState(json))
  }, [])

  return (
    <div className="App">
      <main>
        <div>
          <Data state={state} />
        </div>
        <div>
          <ContainerFilters />
        </div>
      </main>
    </div>
  );
}

export default App;
