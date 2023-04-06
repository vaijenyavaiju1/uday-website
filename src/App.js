import './App.css'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Services from './components/Services'
import ContactUs from './components/ContactUs'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contactus" component={ContactUs} />
    </Switch>
  </div>
)

export default App
