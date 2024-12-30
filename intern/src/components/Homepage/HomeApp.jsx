import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import NavBar from './NavBar'
function HomeApp() {
  return (
    <Router>
        <div>
            <NavBar />
            <div className="content p-8">
                    <Route path='/' element={<NavBar />} />
                    <Route path="/about" render={() => <h1>About Page</h1>} />
                    <Route path="/contact" render={() => <h1>Contact Page</h1>} />
                    <Route path="/blogs" render={() => <h1>Blog</h1>} />
            </div>
        </div>
    </Router>
  )
}

export default HomeApp
