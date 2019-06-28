import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import OrgListItem from '../orgListItem';
import withGitHubService from '../hoc/withGitHubService'
import { compose } from '../../utils'
import { orgsLoaded, selectOrg } from '../../actions';

class OrgsList extends Component {


    onSelectOrg = (id, org) => {        
        this.props.selectOrg(org)
        this.props.history.push(`${id}`)
    }

    render() {
        const { orgs } = this.props

        return (
            <ul>
                {orgs.map(({ id, ...org }) => (
                    <OrgListItem key={id}
                        onSelectOrg={() => this.onSelectOrg(id, {...org})}
                        {...org} />
                ))}
            </ul>
        )
    }

}

const mapStateToProps = ({ orgs }) => {
    return { orgs };
};

const mapDispatchToProps = {
    orgsLoaded,
    selectOrg
}


export default compose(
    withGitHubService(),
    connect(mapStateToProps, mapDispatchToProps)
)(withRouter(OrgsList))