import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import NavBar from './components/navbar';


import './App.scss';

export default function App() {
  return (
    <Router>
      <NavBar reelText="Reel" aboutUsText="About Us" servicesText="Services" />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
