import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <link to="/">
                <h1>cooking Ninja</h1>
                
                </link>
                <link to="/create ">
                Create Recipe</link>

            </nav>
        
        </div>
    )
   
}