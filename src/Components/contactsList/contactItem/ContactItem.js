import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton=styled.button`
    display: 'inline-block',
    color: 'red',
`

function Contact({contact, onDelete}) {
    return (
        <li>
            <span>{contact.name}: {contact.number}</span>
            <StyledButton id={contact.id} onClick={onDelete}>delete</StyledButton>
        </li>
    )
}

Contact.propTypes = {
    contact: PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Contact

