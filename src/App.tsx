import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import Welcome2 from './Component/Welcome2/Welcome2';
import Welcome1 from './Component/Welcome1/Welcome1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Add component with path url for future enhancement */}
        <Router>
          <Switch>
            <Route path="/story1/" component={Welcome1} />
            <Route path="/story2/" component={Welcome2} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
