import React from 'react';
import { GitHubServiceConsumer } from '../gitHubServiceContext';

const withGitHubService = () => (Wrapped) => {

  return (props) => {
    return (
      <GitHubServiceConsumer>
        {
          (gitHubService) => {
            return (<Wrapped {...props}
              gitHubService={gitHubService}/>);
          }
        }
      </GitHubServiceConsumer>
    );
  }
};

export default withGitHubService;
