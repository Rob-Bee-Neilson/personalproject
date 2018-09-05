import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <h1>React development has begun!</h1>
  )
}

export default App

{/* <Router>
  <React.Fragment>
    <h1>Title</h1>
    <div className ="wrapper">
      <Route path="/" component={Nav}/>
        <Route exact path="/" component={Home}
    </div>
  </React.Fragment>
</Router> */}

