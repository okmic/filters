import './App.css'
import { useEffect, useState } from 'react'
import Data from './components/Data/Data'
import ContainerFilters from './components/Filters/ContainerFilters'


export type DataType = {
  body: string
  id: number
  userId: number
  title: string
  price: number
}

function App() {

  const [initialStatus, setInitialStatus] = useState(true)

  const [state, setState] = useState([] as Array<DataType>)

  //Update State Controler
  const [removeFilters, setRemoveFilters] = useState(false)

  // Data for inputs SwitchNumbersFilter
  const [initialValue, setInitialValue] = useState(0)
  const [finalValue, setFinalValue] = useState(0)

  //Data Generate
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => setState(json.map((item: any) => ({
    ...item,
    price: Math.floor(Math.random() * 9999)    
  }
  ))))
  }, [removeFilters])

  useEffect(() => {
    const ping = setTimeout(() => {
      if(state.length > 0) {
        setInitialStatus(true)
      }
    }, 300)

   return () => clearTimeout(ping)   
  }, [state])

  // Creating Max and Min price data
  useEffect(() => {
    const newState: Array<DataType> = JSON.parse(JSON.stringify(state))
    newState.sort((a, b) => a.price - b.price)
      if (newState.length > 0) {
        setInitialValue(newState[0].price)
        setFinalValue(newState[newState.length - 1].price)
      } 
  }, [state])

debugger
  return (
    <div className="App">
      <main>
      <div>
          <ContainerFilters 
          state={state} 
          setState={setState}
          removeFilters={removeFilters}
          setRemoveFilters={setRemoveFilters} 
          initialValue={initialValue}
          finalValue={finalValue}
          setInitialValue={setInitialValue}
          setFinalValue={setFinalValue}  
          setInitialStatus={setInitialStatus} 
          />
        </div>

       {initialStatus 
      ?  <div>
          {state.map(item => <Data  
          key={item.id} 
          id={item.id} 
          body={item.body} 
          title={item.title}
          price={item.price!} /> )}
        </div>
      : <h1>Loading</h1>   
      } 
      </main>
    </div>
  );
}

export default App;
