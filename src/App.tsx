import './App.css'
import { useEffect, useState } from 'react'
import Data from './components/Data/Data'
import ContainerFilters from './components/Filters/ContainerFilters'


export type DataType = {
  body: string
  id: number
  userId: number
  title: string
  prise: number
}

function App() {

  const [state, setState] = useState([] as Array<DataType>)
  const [removeFilters, setRemoveFilters] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => setState(json.map((item: any) => ({
    ...item,
    prise: Math.floor(Math.random() * 9999)    
  }))))
  }, [removeFilters])


  return (
    <div className="App">
      <main>

        <div>
          {state.map(item => <Data  
          key={item.id} 
          id={item.id} 
          body={item.body} 
          title={item.title}
          price={item.prise!} /> )}
        </div>
        <div>
          <ContainerFilters 
          state={state} 
          setState={setState}
          removeFilters={removeFilters}
          setRemoveFilters={setRemoveFilters}/>
        </div>
      </main>
    </div>
  );
}

export default App;
