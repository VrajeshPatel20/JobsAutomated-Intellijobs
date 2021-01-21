import './styles/app.scss';
import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form';
import Applied from './components/Applied';
import { Route,Switch } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header />
      <ToastContainer position="bottom-right"/>
      <Switch>
      <Route  path='/appliedjobs' component={Applied}/>
      <Route  path='/form' component={Form}/>
      <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
