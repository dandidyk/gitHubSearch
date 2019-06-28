import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


import ErrorBoundry from './components/errorBoundry'
import { GitHubServiceProvider } from './components/gitHubServiceContext';
import GitHubService from './services/gitHubService'
import store from './store'

const gitHubService = new GitHubService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <GitHubServiceProvider value={gitHubService} >
                <Router>
                    <App />
                </Router>
            </GitHubServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

