import React from 'react';

const {
  Provider: GitHubServiceProvider,
  Consumer: GitHubServiceConsumer
} = React.createContext();

export {
  GitHubServiceProvider,
  GitHubServiceConsumer
};
