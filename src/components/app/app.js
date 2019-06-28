import React, { Fragment } from 'react';

import OrgsList from '../orgsList';
import OrgDetails from '../orgDetails'
import Form from '../form'

import { Switch, Route } from 'react-router-dom'

const App = () => {



  return (
    <div >
      <h1> Search GitHub Organizations </h1>
      <Switch>
        <Route exact path={'/'} render={() =>
          <Fragment >
            <Form />
            <OrgsList />
          </Fragment>
        } />
        <Route path="/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <OrgDetails itemId={id} />
          }} />

      </Switch>
    </div>
  );
}

export default App;
