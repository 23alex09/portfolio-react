import { NavItem } from "./NavItem"

const items = [ 'About', 'Experience', 'Work', 'Contact' ]

export const NavMenu = () => {

    return (
        <>
            <nav className="header-main">
                <ol className="header-links">
                    {
                        items.map(
                            ( item ) => (
                                <NavItem key={ item } item={ item } />
                            )
                        )
                    }
                </ol>
            </nav>
        </>
    )
}
