import React, { Component } from 'react'
import { connect } from 'react-redux'

import { compose } from '../../utils'
import { withGitHubService } from '../hoc'


class OrgDetails extends Component {

    componentDidMount() {

        const { gitHubService } = this.props

        const { getListOfMembers } = gitHubService

        const { login } = this.props.selectedOrg

        getListOfMembers(login)
            .then((data) => {
                console.log(data);
            })

    }

    render() {

        const { login, avatar_url } = this.props.selectedOrg


        return (
            <div>
                <h2>
                    Organization Details
                </h2>
                <p>{login}</p>
                <p><img src={avatar_url} alt="avatar" /></p>
            </div>
        )
    }
}

const mapStateToProps = ({ selectedOrg }) => {
    console.log(selectedOrg);

    return { selectedOrg };
};

const mapDispatchToProps = {

}



export default compose(
    withGitHubService(),
    connect(mapStateToProps, mapDispatchToProps)
)(OrgDetails)


