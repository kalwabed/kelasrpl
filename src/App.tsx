import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IndexPage from './pages/index'
import AboutPage from './pages/about'
import StudentsPage from './pages/students'
import ShowStudent from './pages/showStudent'

import StudentProvider from './contexts/StudentProvider'

function App() {
    return (
        <>
            <Router>
                <StudentProvider>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route exact path="/students" component={StudentsPage} />
                    <Route path="/students/:id" component={ShowStudent} />
                </StudentProvider>
            </Router>
        </>
    )
}

export default App
