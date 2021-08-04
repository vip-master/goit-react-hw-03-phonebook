import React from 'react'
import PropTypes from 'prop-types'

function Section({title="Title of Section", children}) {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
}

export default Section

