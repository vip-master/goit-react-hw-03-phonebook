import React from 'react'
import PropTypes from 'prop-types'
import ContactItem from './contactItem/ContactItem';

function Contacts({contacts, onDelete, filter}) {
    filter=filter.split(" ").join("").toLowerCase()
    contacts=contacts.filter(i=>i.name.toLowerCase().startsWith(filter))
    return (
        <ul>
            {contacts.map(contact=>(
                <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
            ))}
        </ul>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    filter:PropTypes.string.isRequired
}

export default Contacts

