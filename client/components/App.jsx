import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Header from './Header'

const App = () => {
  return (
      <Router>
      
        <React.Fragment>
          
          <div>
            <Route path="/" componment={Header}/>
          </div>
          
          <div className ="wrapper">
            <Route path="/" component={Nav}/>
          </div>

          <div>
            <Route exact path="/" component={Home}/>
          </div>
        
        </React.Fragment>
      
      </Router>
    
  )
}

export default App