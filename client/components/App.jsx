import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Header from './Header'
import CoffeeCups from './CoffeeCups'

const App = () => {
  return (
      <Router>
      
        <React.Fragment>
          
          <div className="headerBar">
            <Route path="/" component={Header}/>
          </div>
          
          <div className ="wrapper">
              
            <div>
              <Route path="/" component={Nav}/>
            </div>

            <div>
              <Route exact path="/" component={Home}/>
            </div>

            <div>
              <Route exact path="/" component={CoffeeCups}/>
            </div>

          </div>
        
        </React.Fragment>
      
      </Router>
    
  )
}

export default App