import { NavItem } from "./"

const items = [ 'Home', 'About', 'Projects', 'Contact' ]

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
