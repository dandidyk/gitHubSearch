import React from 'react'

import { compose } from '../../utils'
import { connect } from 'react-redux'
import { withGitHubService } from '../hoc'
import {  orgsLoaded, inputOrg } from '../../actions'

const Form = ({ gitHubService, orgsLoaded, inputOrg, searchInput }) => {

    const onSubmit = (e) => {
        e.preventDefault()

        const { getOrganizations } = gitHubService

        getOrganizations(searchInput)
            .then((data) => {
                orgsLoaded(data)
            })
    }

    const onChange = e => {
        inputOrg(e.target.value)
    }

    return (
        <form onSubmit={onSubmit} >
            <input onChange={(e) => onChange(e)} name='org' type='text' placeholder='Organization name' />
            <button type='submit' >
                Search
            </button>
        </form>
    )
}

const mapStateToProps = ({ searchInput }) => {
    return { searchInput };
};

const mapDispatchToProps = {
    orgsLoaded,
    inputOrg
}

export default compose(
    withGitHubService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Form)
