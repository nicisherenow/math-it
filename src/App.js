import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import ZenMode from "./ZenMode";
import SpeedMode from "./SpeedMode";
import Berserker from "./Berserker";




function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded)return null

  return (
      <Switch>
        <Route path={'/berserker'} exact={true}>
          <Berserker />
        </Route>
        <Route path={'/zen-mode'} exact={true}>
          <ZenMode />
        </Route>
        <Route path={'/speed-mode'} exact={true}>
          <SpeedMode />
        </Route>
        <Route path={'/'} exact={true}>
          <Home />
        </Route>
        <Route>Page not found.</Route>
      </Switch>
  );
}

export default App;
