import React from 'react'
import { DiReact, DiCode } from 'react-icons/di'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IndexPage from './pages/index'
import AboutPage from './pages/about'
import StudentProvider from './contexts/StudentProvider'

function App() {
    return (
        <>
            <Router>
                <StudentProvider>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/about" component={AboutPage} />
                </StudentProvider>
                <footer>
                    <div className="footer text-center">
                        <span className="">
                            <DiCode className="h3" /> by <b>TeamRPL1</b> | Built
                            with <DiReact className="h3" />
                            <br />
                        </span>
                    </div>
                </footer>
            </Router>
        </>
    )
}

export default App
