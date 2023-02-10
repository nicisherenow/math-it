import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import AdditionMode from "./AdditionMode";
import SubtractionMode from "./SubtractionMode";
import MultiplicationMode from "./MultiplicationMode";




function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded)return null

  return (
      <Switch>
        <Route path={'/multiplication'} exact={true}>
          <MultiplicationMode />
        </Route>
        <Route path={'/subtraction'} exact={true}>
          <SubtractionMode />
        </Route>
        <Route path={'/addition'} exact={true}>
          <AdditionMode />
        </Route>
        <Route path={'/'} exact={true}>
          <Home />
        </Route>
        <Route>Page not found.</Route>
      </Switch>
  );
}

export default App;
