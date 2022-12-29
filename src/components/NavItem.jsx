import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const NavItem = ( { item } ) => {
    return (
        <li className="link-container">
            <Link className="link" to={ item.toLowerCase }>{ item }</Link>
        </li> )
}

NavItem.propTypes = {
    item: PropTypes.string.isRequired,
}