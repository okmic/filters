import './App.css'
import { useState } from 'react'
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

  return (
    <div className="App">
      <main>
        <div>
          <Data state={state} setState={setState} />
        </div>
        <div>
          <ContainerFilters />
        </div>
      </main>
    </div>
  );
}

export default App;
