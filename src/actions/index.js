
const orgsLoaded = (orgs) => {
    return {
        type: 'ORGS_LOADED',
        payload: orgs
    };
};

const selectOrg = (org) => {
    console.log(org);
    
    return {
        type: 'SELECT_ORG',
        payload: org
    };
};

const inputOrg = (org) => {
    return {
        type: 'INPUT_ORG',
        payload: org
    };
};

export {
    orgsLoaded,
    selectOrg,
    inputOrg
};
