import React from 'react'

const OrgListItem = ({ login, avatar_url, onSelectOrg }) => {
    
    return (
        <li onClick={ onSelectOrg }>
            <span>
                {login}
            </span>
            <span>
                <img src={avatar_url} alt="avatar" />
            </span>
        </li>
    )
}

export default OrgListItem