import { Suspense, useEffect, useState } from "react";
import routes from "./routes";
import Header from "./Components/Header/Header";
import Bot from "./Components/Bot/Bot";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(time);
  }, []);

  return !loading ? (
    <>
      <Header />
      <Bot />
      {routes?.map(({ id, component: Component }) => (
        <Suspense key={id} fallback={<h1>Cargando ...</h1>}>
          <Component />
        </Suspense>
      ))}
    </>
  ) : (
    <Loader />
  );
}

export default App;
