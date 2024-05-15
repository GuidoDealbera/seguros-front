import { Suspense } from "react"
import routes from "./routes"
import Header from './Components/Header/Header';

function App() {
  

  return (
    <>
      <Header/>
      {routes?.map(({id, component: Component}) =>(
        <Suspense key={id} fallback={<h1>Cargando ...</h1>}>
          <Component/>
        </Suspense>
      ))}
    </>
  )
}

export default App
