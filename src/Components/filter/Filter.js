import React from 'react'
import PropTypes from 'prop-types'

function Filter({onChange, value}) {
    return (

        <>
            <h4>Contacts filter</h4>
            <input value={value} name="filter" type="text" onChange={onChange} />
        </>
    )
}

Filter.propTypes = {
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired
}

export default Filter

