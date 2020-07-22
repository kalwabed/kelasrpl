import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import AboutPage from './pages/about'

function App() {
    return (
        <>
            <Router>
                <Route exact path="/" component={IndexPage} />
                <Route path="/about" component={AboutPage} />
                <footer>
                    <div className="footer">
                        <span className="d-none d-sm-inline-block">
                            @kitarpl1.2020
                        </span>
                    </div>
                </footer>
            </Router>
        </>
    )
}

export default App
