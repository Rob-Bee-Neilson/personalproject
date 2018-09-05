import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
      <Router>
        <React.Fragment>
          <h1>NoGrouch</h1>
            <div className ="wrapper">
              <Route path="/" component={Nav}/>
              <Route exact path="/" component={Home}/>
            </div>
        </React.Fragment>
      </Router>
    
  )
}

export default App