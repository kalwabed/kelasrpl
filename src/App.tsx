import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import AboutPage from './pages/about'

import { fetchStaff } from './API'

function App() {
    fetchStaff()
    return (
        <>
            <Router>
                <Route exact path="/" component={IndexPage} />
                <Route path="/about" component={AboutPage} />
            </Router>
        </>
    )
}

export default App
