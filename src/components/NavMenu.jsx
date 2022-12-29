import { Link } from "react-router-dom"
import { NavItem } from "./"

const items = [ 'Home', 'About', 'Projects', 'Contact' ]
//TODO: change the Links to NavLinks
export const NavMenu = () => {

    return (
        <>
            <nav className="header-main">
                <ol className="header-links">
                    <li><Link className="link" to='/'>Home</Link></li>
                    <li><Link className="link" to='/about'>About</Link></li>
                    <li><Link className="link" to='/projects'>Projects</Link></li>
                    <li><Link className="link" to='/Contact'>Contact</Link></li>

                </ol>
            </nav>
        </>
    )
}
