import PropTypes from 'prop-types'

export const NavItem = ( { item } ) => {
    return (
        <li className="link-container">
            <a className="link">{ item }</a>
        </li> )
}

NavItem.propTypes = {
    item: PropTypes.string.isRequired,
}