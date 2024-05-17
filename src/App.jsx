import { Suspense } from "react";
import routes from "./routes"
import Header from './Components/Header/Header';
import Bot from "./Components/Bot/Bot";

function App() {
  

  return (
    <>
      <Header/>
      <Bot/>
      {routes?.map(({id, component: Component}) =>(
        <Suspense key={id} fallback={<h1>Cargando ...</h1>}>
          <Component/>
        </Suspense>
      ))}
    </>
  )
}

export default App
